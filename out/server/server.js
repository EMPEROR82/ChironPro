"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("vscode-languageserver/node");
const antlr4ts_1 = require("antlr4ts");
const tree_1 = require("antlr4ts/tree");
const tlangLexer_1 = require("./antlr/server/grammar/tlangLexer");
const tlangParser_1 = require("./antlr/server/grammar/tlangParser");
const vscode_languageserver_textdocument_1 = require("vscode-languageserver-textdocument");
console.log("Server starting...");
// ─── Parse helper ─────────────────────────────────────────────────────────────
function parseText(text) {
    const inputStream = antlr4ts_1.CharStreams.fromString(text);
    const lexer = new tlangLexer_1.tlangLexer(inputStream);
    lexer.removeErrorListeners();
    const tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    const parser = new tlangParser_1.tlangParser(tokenStream);
    parser.removeErrorListeners();
    return parser.start();
}
class Scope {
    constructor(parent) {
        this.symbols = [];
        this.parent = parent;
    }
    add(s) {
        this.symbols.push(s);
    }
    visible() {
        return [...this.symbols, ...(this.parent ? this.parent.visible() : [])];
    }
}
class SymbolCollector {
    constructor() {
        this.globalScope = new Scope();
        this.currentScope = this.globalScope;
        this.functions = [];
        this.functionScopes = [];
    }
    enterEveryRule() { }
    exitEveryRule() { }
    visitTerminal() { }
    visitErrorNode() { }
    enterFunctionDecl(ctx) {
        const name = ctx.NAME().text;
        if (!name)
            return;
        const params = [];
        const pl = ctx.paramList();
        if (pl) {
            pl.VAR().forEach((v) => params.push(v.text));
        }
        const startLine = (ctx.start?.line ?? 1) - 1;
        const stopLine = (ctx.stop?.line ?? ctx.start?.line ?? 1) - 1;
        const info = {
            name,
            kind: 'function',
            definedAt: startLine,
            bodyStart: startLine,
            bodyEnd: stopLine,
            params,
        };
        this.globalScope.add(info);
        this.functions.push(info);
        const fnScope = new Scope(this.globalScope);
        params.forEach(p => fnScope.add({ name: p, kind: 'variable', definedAt: startLine }));
        this.functionScopes.push({ info, scope: fnScope });
        this.currentScope = fnScope;
    }
    exitFunctionDecl() {
        if (this.currentScope.parent) {
            this.currentScope = this.currentScope.parent;
        }
    }
    enterAssignment(ctx) {
        const name = ctx.VAR().text;
        const line = (ctx.start?.line ?? 1) - 1;
        this.currentScope.add({ name, kind: 'variable', definedAt: line });
    }
    enterArrayDecl(ctx) {
        const name = ctx.VAR().text;
        const line = (ctx.start?.line ?? 1) - 1;
        this.currentScope.add({ name, kind: 'array', definedAt: line });
    }
}
// ─── Static completions ────────────────────────────────────────────────────────
const KEYWORDS = [
    {
        label: 'if',
        kind: node_1.CompletionItemKind.Keyword,
        insertText: 'if $1 [\n\t$0\n]',
        insertTextFormat: node_1.InsertTextFormat.Snippet,
        documentation: { kind: node_1.MarkupKind.Markdown, value: '**if** condition `[ ... ]`' },
    },
    {
        label: 'ifelse',
        kind: node_1.CompletionItemKind.Keyword,
        insertText: 'if $1 [\n\t$2\n] else [\n\t$0\n]',
        insertTextFormat: node_1.InsertTextFormat.Snippet,
        documentation: { kind: node_1.MarkupKind.Markdown, value: '**if/else** conditional block' },
    },
    {
        label: 'else',
        kind: node_1.CompletionItemKind.Keyword,
        documentation: { kind: node_1.MarkupKind.Markdown, value: 'Else branch: `else [ ... ]`' },
    },
    {
        label: 'repeat',
        kind: node_1.CompletionItemKind.Keyword,
        insertText: 'repeat $1 [\n\t$0\n]',
        insertTextFormat: node_1.InsertTextFormat.Snippet,
        documentation: { kind: node_1.MarkupKind.Markdown, value: '**repeat** n `[ ... ]`' },
    },
    {
        label: 'function',
        kind: node_1.CompletionItemKind.Keyword,
        insertText: 'function $1($2) [\n\t$0\n]',
        insertTextFormat: node_1.InsertTextFormat.Snippet,
        documentation: { kind: node_1.MarkupKind.Markdown, value: 'Declare a function' },
    },
    {
        label: 'return',
        kind: node_1.CompletionItemKind.Keyword,
        insertText: 'return $0',
        insertTextFormat: node_1.InsertTextFormat.Snippet,
        documentation: { kind: node_1.MarkupKind.Markdown, value: 'Return a value from a function' },
    },
];
const COMMANDS = [
    {
        label: 'forward',
        insertText: 'forward $1',
        insertTextFormat: node_1.InsertTextFormat.Snippet,
        kind: node_1.CompletionItemKind.Function,
        documentation: { kind: node_1.MarkupKind.Markdown, value: 'Move forward N steps' },
    },
    {
        label: 'backward',
        insertText: 'backward $1',
        insertTextFormat: node_1.InsertTextFormat.Snippet,
        kind: node_1.CompletionItemKind.Function,
        documentation: { kind: node_1.MarkupKind.Markdown, value: 'Move backward N steps' },
    },
    {
        label: 'left',
        insertText: 'left $1',
        insertTextFormat: node_1.InsertTextFormat.Snippet,
        kind: node_1.CompletionItemKind.Function,
        documentation: { kind: node_1.MarkupKind.Markdown, value: 'Turn left N degrees' },
    },
    {
        label: 'right',
        insertText: 'right $1',
        insertTextFormat: node_1.InsertTextFormat.Snippet,
        kind: node_1.CompletionItemKind.Function,
        documentation: { kind: node_1.MarkupKind.Markdown, value: 'Turn right N degrees' },
    },
    {
        label: 'penup',
        insertText: 'penup',
        kind: node_1.CompletionItemKind.Function,
        documentation: { kind: node_1.MarkupKind.Markdown, value: 'Lift the pen (stop drawing)' },
    },
    {
        label: 'pendown',
        insertText: 'pendown',
        kind: node_1.CompletionItemKind.Function,
        documentation: { kind: node_1.MarkupKind.Markdown, value: 'Lower the pen (start drawing)' },
    },
    {
        label: 'goto',
        insertText: 'goto($1, $2)',
        insertTextFormat: node_1.InsertTextFormat.Snippet,
        kind: node_1.CompletionItemKind.Function,
        documentation: { kind: node_1.MarkupKind.Markdown, value: 'Move turtle to `(x, y)`' },
    },
    {
        label: 'pause',
        insertText: 'pause',
        kind: node_1.CompletionItemKind.Function,
        documentation: { kind: node_1.MarkupKind.Markdown, value: 'Pause execution' },
    },
    {
        label: 'printf',
        insertText: 'printf($1)',
        insertTextFormat: node_1.InsertTextFormat.Snippet,
        kind: node_1.CompletionItemKind.Function,
        documentation: { kind: node_1.MarkupKind.Markdown, value: 'Print value or string: `printf("text", :var)`' },
    },
    {
        label: 'array',
        insertText: 'array $1{$2}',
        insertTextFormat: node_1.InsertTextFormat.Snippet,
        kind: node_1.CompletionItemKind.Function,
        documentation: { kind: node_1.MarkupKind.Markdown, value: 'Declare array: `array :name{size}`' },
    },
];
// ─── Builtin hover documentation ──────────────────────────────────────────────
const BUILTIN_DOCS = {
    forward: 'Moves the turtle forward by the given distance.',
    backward: 'Moves the turtle backward by the given distance.',
    left: 'Rotates the turtle left by the given angle.',
    right: 'Rotates the turtle right by the given angle.',
    penup: 'Lifts the pen so movement does not draw.',
    pendown: 'Places the pen down so movement draws.',
    goto: 'Moves the turtle to the given (x, y) coordinate.',
    pause: 'Pauses execution until resumed.',
    printf: 'Prints values to output.',
    repeat: 'Repeats a block of instructions.',
    array: 'Declares an array with fixed size.',
    return: 'Returns a value from a function.',
    function: 'Defines a Chiron function.',
};
function detectContext(lineText) {
    const t = lineText.trimStart();
    if (/[a-zA-Z_]\w*\([^)]*$/.test(t))
        return 'function-arg';
    if (/:\w+\{[^}]*$/.test(t))
        return 'array-index';
    if (/^(forward|backward|left|right)\s/.test(t))
        return 'expression';
    if (/=\s*[^=]?\S*$/.test(t))
        return 'expression';
    if (/^(if|repeat)\s/.test(t))
        return 'condition';
    return 'statement';
}
function getWordPrefix(lineText) {
    const m = lineText.match(/[\w:]+$/);
    return m ? m[0] : '';
}
function enclosingFunction(pos, fns) {
    return fns
        .filter(fs => pos.line >= fs.info.bodyStart && pos.line <= fs.info.bodyEnd)
        .sort((a, b) => (a.info.bodyEnd - a.info.bodyStart) - (b.info.bodyEnd - b.info.bodyStart))
        .shift();
}
function getCompletionReplaceRange(position, lineText) {
    const match = lineText.match(/(:?[a-zA-Z_][a-zA-Z0-9_]*|:)$/);
    if (!match)
        return null;
    const startCharacter = Math.max(0, position.character - match[0].length);
    return {
        start: { line: position.line, character: startCharacter },
        end: position,
    };
}
function attachTextEdit(item, replaceRange, newText) {
    if (replaceRange) {
        item.textEdit = node_1.TextEdit.replace(replaceRange, newText);
    }
    return item;
}
// ─── LSP setup ────────────────────────────────────────────────────────────────
const connection = (0, node_1.createConnection)(node_1.ProposedFeatures.all);
const documents = new node_1.TextDocuments(vscode_languageserver_textdocument_1.TextDocument);
connection.onInitialize(() => ({
    capabilities: {
        textDocumentSync: node_1.TextDocumentSyncKind.Incremental,
        hoverProvider: true,
        definitionProvider: true,
        completionProvider: {
            resolveProvider: false,
            triggerCharacters: [' ', '=', '(', ',', '{', ':'],
        },
    },
}));
// ─── Completion handler ───────────────────────────────────────────────────────
connection.onCompletion((params) => {
    try {
        const doc = documents.get(params.textDocument.uri);
        if (!doc)
            return [];
        const position = params.position;
        const lineText = doc.getText({
            start: { line: position.line, character: 0 },
            end: position,
        });
        if (lineText.trim().length === 0) {
            return [];
        }
        const text = doc.getText();
        if (!text)
            return [];
        const tree = parseText(text);
        const collector = new SymbolCollector();
        tree_1.ParseTreeWalker.DEFAULT.walk(collector, tree);
        const enclosing = enclosingFunction(position, collector.functionScopes);
        const activeScope = enclosing ? enclosing.scope : collector.globalScope;
        const visible = activeScope.visible();
        const replaceRange = getCompletionReplaceRange(position, lineText);
        const variableItems = visible
            .filter(s => s.kind === 'variable')
            .map(s => attachTextEdit({
            label: s.name,
            kind: node_1.CompletionItemKind.Variable,
            detail: 'variable',
            documentation: {
                kind: node_1.MarkupKind.Markdown,
                value: `Defined at line **${s.definedAt + 1}**`,
            },
            sortText: '0' + s.name,
            filterText: s.name,
        }, replaceRange, s.name));
        const arrayItems = visible
            .filter(s => s.kind === 'array')
            .map(s => attachTextEdit({
            label: s.name,
            kind: node_1.CompletionItemKind.Variable,
            detail: 'array',
            insertText: `${s.name}{$1}`,
            insertTextFormat: node_1.InsertTextFormat.Snippet,
            documentation: {
                kind: node_1.MarkupKind.Markdown,
                value: `Array declared at line **${s.definedAt + 1}**`,
            },
            sortText: '1' + s.name,
            filterText: s.name,
        }, replaceRange, `${s.name}{$1}`));
        const functionItems = collector.functions.map(fn => attachTextEdit({
            label: fn.name,
            kind: node_1.CompletionItemKind.Function,
            detail: `function(${fn.params.join(', ')})`,
            insertText: fn.params.length > 0
                ? `${fn.name}(${fn.params.map((_, i) => `$${i + 1}`).join(', ')})`
                : `${fn.name}()`,
            insertTextFormat: node_1.InsertTextFormat.Snippet,
            documentation: {
                kind: node_1.MarkupKind.Markdown,
                value: `**Parameters:** ${fn.params.join(', ') || '_(none)_'}\n\nDefined at line **${fn.definedAt + 1}**`,
            },
            sortText: '2' + fn.name,
            filterText: fn.name,
        }, replaceRange, fn.params.length > 0
            ? `${fn.name}(${fn.params.map((_, i) => `$${i + 1}`).join(', ')})`
            : `${fn.name}()`));
        const ctx = detectContext(lineText);
        const prefix = getWordPrefix(lineText);
        let items;
        switch (ctx) {
            case 'expression':
            case 'array-index':
                items = [...variableItems, ...arrayItems, ...functionItems];
                break;
            case 'condition':
                items = [
                    ...variableItems,
                    ...arrayItems,
                    ...functionItems,
                    attachTextEdit({
                        label: 'pendown?',
                        kind: node_1.CompletionItemKind.Keyword,
                        documentation: {
                            kind: node_1.MarkupKind.Markdown,
                            value: 'True when the pen is currently down',
                        },
                    }, replaceRange, 'pendown?'),
                ];
                break;
            case 'function-arg':
                items = [...variableItems, ...arrayItems, ...functionItems];
                break;
            case 'statement':
            default:
                items = [
                    ...variableItems,
                    ...arrayItems,
                    ...functionItems,
                    ...KEYWORDS.map(item => attachTextEdit({ ...item }, replaceRange, typeof item.insertText === 'string' ? item.insertText : String(item.label))),
                    ...COMMANDS.map(item => attachTextEdit({ ...item }, replaceRange, typeof item.insertText === 'string' ? item.insertText : String(item.label))),
                ];
                break;
        }
        if (prefix.length > 0) {
            const lp = prefix.toLowerCase();
            items = items.filter(i => String(i.label).toLowerCase().startsWith(lp));
        }
        const seen = new Set();
        return items.filter(i => {
            const key = String(i.label);
            if (seen.has(key))
                return false;
            seen.add(key);
            return true;
        });
    }
    catch (err) {
        console.error("❌ COMPLETION ERROR:", err);
        return [];
    }
});
// ─── Hover handler ────────────────────────────────────────────────────────────
connection.onHover((params) => {
    const document = documents.get(params.textDocument.uri);
    if (!document)
        return null;
    const lines = document.getText().split('\n');
    const lineText = lines[params.position.line];
    const regex = /:?[a-zA-Z_][a-zA-Z0-9_]*/g;
    let match;
    let hoveredWord = null;
    while ((match = regex.exec(lineText)) !== null) {
        const start = match.index;
        const end = start + match[0].length;
        if (params.position.character >= start &&
            params.position.character <= end) {
            hoveredWord = match[0];
            break;
        }
    }
    if (!hoveredWord)
        return null;
    if (hoveredWord in BUILTIN_DOCS) {
        return {
            contents: {
                kind: 'markdown',
                value: `### \`${hoveredWord}\`\n\n${BUILTIN_DOCS[hoveredWord]}`,
            },
        };
    }
    if (hoveredWord.startsWith(':')) {
        return {
            contents: {
                kind: 'markdown',
                value: `### Variable \`${hoveredWord}\`\n\nA Chiron variable reference.`,
            },
        };
    }
    const fullText = document.getText();
    const functionRegex = new RegExp(`function\\s+${hoveredWord}\\s*\\(([^)]*)\\)`, 'm');
    const functionMatch = fullText.match(functionRegex);
    if (functionMatch) {
        const fnParams = functionMatch[1].trim();
        return {
            contents: {
                kind: 'markdown',
                value: `### Function \`${hoveredWord}\`\n\n**Signature:** \`${hoveredWord}(${fnParams})\``,
            },
        };
    }
    const arrayRegex = new RegExp(`array\\s+(:[a-zA-Z_][a-zA-Z0-9_]*)`);
    const arrayMatch = fullText.match(arrayRegex);
    if (arrayMatch && arrayMatch[1] === hoveredWord) {
        return {
            contents: {
                kind: 'markdown',
                value: `### Array \`${hoveredWord}\`\n\nA Chiron array variable.`,
            },
        };
    }
    return {
        contents: {
            kind: 'markdown',
            value: `\`${hoveredWord}\``,
        },
    };
});
// ─── Go-to-definition handler ─────────────────────────────────────────────────
connection.onDefinition((params) => {
    const document = documents.get(params.textDocument.uri);
    if (!document)
        return null;
    const text = document.getText();
    const lines = text.split('\n');
    const targetLine = lines[params.position.line];
    const wordMatch = targetLine.match(/[a-zA-Z_][a-zA-Z0-9_]*/g);
    if (!wordMatch)
        return null;
    const symbol = wordMatch.find(word => {
        const idx = targetLine.indexOf(word);
        return (params.position.character >= idx &&
            params.position.character <= idx + word.length);
    });
    if (!symbol)
        return null;
    for (let i = 0; i < lines.length; i++) {
        const match = lines[i].match(new RegExp(`function\\s+${symbol}\\b`));
        if (match) {
            return {
                uri: document.uri,
                range: {
                    start: { line: i, character: match.index ?? 0 },
                    end: { line: i, character: (match.index ?? 0) + symbol.length },
                },
            };
        }
    }
    return null;
});
// ─── Diagnostics ──────────────────────────────────────────────────────────────
function validateSyntax(doc) {
    const diagnostics = [];
    doc.getText().split('\n').forEach((line, i) => {
        const code = line.split('//')[0]; // ✅ ignore comments
        if (/^\s*(forward|backward|left|right)\s*$/.test(code)) {
            diagnostics.push({
                severity: node_1.DiagnosticSeverity.Error,
                range: {
                    start: { line: i, character: 0 },
                    end: { line: i, character: code.length },
                },
                message: `'${code.trim()}' requires a numeric argument`,
                source: 'chiron',
            });
        }
    });
    return diagnostics;
}
function validateSemantics(doc) {
    const text = doc.getText();
    const lines = text.split('\n');
    const diagnostics = [];
    const tree = parseText(text);
    const collector = new SymbolCollector();
    tree_1.ParseTreeWalker.DEFAULT.walk(collector, tree);
    const BUILTIN_FUNCTIONS = new Set([
        'forward', 'backward', 'left', 'right',
        'goto', 'pause', 'printf', 'repeat',
    ]);
    // ─────────────────────────────────────────────
    // ✅ Detect duplicate functions (ALL occurrences)
    // ─────────────────────────────────────────────
    const functionGroups = new Map();
    for (const fn of collector.functions) {
        if (!functionGroups.has(fn.name)) {
            functionGroups.set(fn.name, []);
        }
        functionGroups.get(fn.name).push(fn);
    }
    // Mark ALL duplicates — point the squiggle at the function name token
    for (const [name, fns] of functionGroups.entries()) {
        if (fns.length > 1) {
            for (const fn of fns) {
                // "function <name>(" — find where the name starts on that line
                const lineText = lines[fn.definedAt] ?? '';
                const nameStart = lineText.indexOf(name);
                const col = nameStart >= 0 ? nameStart : 0;
                diagnostics.push({
                    severity: node_1.DiagnosticSeverity.Error,
                    range: {
                        start: { line: fn.definedAt, character: col },
                        end: { line: fn.definedAt, character: col + name.length },
                    },
                    message: `Duplicate function '${name}'`,
                    source: 'chiron',
                });
            }
        }
    }
    // For arity checking → still need ONE reference definition
    const functionMap = new Map();
    for (const fn of collector.functions) {
        if (!functionMap.has(fn.name)) {
            functionMap.set(fn.name, fn); // first one (arbitrary but consistent)
        }
    }
    // ─────────────────────────────────────────────
    // ✅ Duplicate variables (same symmetric rule)
    // ─────────────────────────────────────────────
    const checkDuplicates = (symbols) => {
        const groups = new Map();
        for (const sym of symbols) {
            // Functions are already checked by the functionGroups block above;
            // including them here would produce a second "Duplicate definition" squiggle.
            if (sym.kind === 'function')
                continue;
            if (!groups.has(sym.name)) {
                groups.set(sym.name, []);
            }
            groups.get(sym.name).push(sym);
        }
        for (const [name, syms] of groups.entries()) {
            if (syms.length > 1) {
                for (const sym of syms) {
                    diagnostics.push({
                        severity: node_1.DiagnosticSeverity.Error,
                        range: {
                            start: { line: sym.definedAt, character: 0 },
                            end: { line: sym.definedAt, character: name.length },
                        },
                        message: `Duplicate definition of '${name}'`,
                        source: 'chiron',
                    });
                }
            }
        }
    };
    checkDuplicates(collector.globalScope.symbols);
    for (const fs of collector.functionScopes) {
        checkDuplicates(fs.scope.symbols);
    }
    // ─────────────────────────────────────────────
    // ✅ Line-by-line checks (ignore comments)
    // ─────────────────────────────────────────────
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        // 🔥 Strip comments
        const commentIdx = line.indexOf('//');
        if (commentIdx !== -1) {
            line = line.slice(0, commentIdx);
        }
        if (line.trim() === '')
            continue;
        const pos = { line: i, character: 0 };
        const enclosing = enclosingFunction(pos, collector.functionScopes);
        const activeScope = enclosing ? enclosing.scope : collector.globalScope;
        const visibleSymbols = activeScope.visible();
        const definedVariables = new Set(visibleSymbols
            .filter(s => s.kind === 'variable' || s.kind === 'array')
            .map(s => s.name));
        // ───────── Function calls + arity ─────────
        // Skip declaration lines — "function foo(...)" is a definition, not a call.
        // Running the call regex on it would misread the parameter list as arguments.
        if (/^\s*function\s+[a-zA-Z_][a-zA-Z0-9_]*\s*\(/.test(line))
            continue;
        const callRegex = /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\)/g;
        let match;
        while ((match = callRegex.exec(line)) !== null) {
            const fnName = match[1];
            const argsRaw = match[2].trim();
            const args = argsRaw === '' ? [] : argsRaw.split(',').map(s => s.trim());
            if (!functionMap.has(fnName) && !BUILTIN_FUNCTIONS.has(fnName)) {
                diagnostics.push({
                    severity: node_1.DiagnosticSeverity.Error,
                    range: {
                        start: { line: i, character: match.index },
                        end: { line: i, character: match.index + fnName.length },
                    },
                    message: `Undefined function '${fnName}'`,
                    source: 'chiron',
                });
            }
            else if (functionMap.has(fnName)) {
                const fn = functionMap.get(fnName);
                if (fn.params.length !== args.length) {
                    diagnostics.push({
                        severity: node_1.DiagnosticSeverity.Error,
                        range: {
                            start: { line: i, character: match.index },
                            end: { line: i, character: match.index + fnName.length },
                        },
                        message: `Function '${fnName}' expects ${fn.params.length} argument(s), got ${args.length}`,
                        source: 'chiron',
                    });
                }
            }
        }
        // ───────── Variable checks ─────────
        const vars = line.match(/:[a-zA-Z_][a-zA-Z0-9_]*/g);
        if (vars) {
            for (const v of vars) {
                if (!definedVariables.has(v)) {
                    const start = line.indexOf(v);
                    diagnostics.push({
                        severity: node_1.DiagnosticSeverity.Error,
                        range: {
                            start: { line: i, character: start },
                            end: { line: i, character: start + v.length },
                        },
                        message: `Undefined variable '${v}'`,
                        source: 'chiron',
                    });
                }
            }
        }
    }
    return diagnostics;
}
function validateDocument(doc) {
    const diagnostics = [
        ...validateSyntax(doc),
        ...validateSemantics(doc),
    ];
    connection.sendDiagnostics({ uri: doc.uri, diagnostics });
}
documents.onDidChangeContent(change => validateDocument(change.document));
documents.onDidOpen(e => validateDocument(e.document));
documents.listen(connection);
connection.listen();
