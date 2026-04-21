"use strict";
// import * as path from 'path';
// import * as fs from 'fs';
// import * as vscode from 'vscode';
// import { LanguageClient, TransportKind, ServerOptions, LanguageClientOptions } from 'vscode-languageclient/node';
// import { spawn } from 'child_process';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
// let client: LanguageClient;
// let chironTerminal: vscode.Terminal | undefined;
// const output = vscode.window.createOutputChannel('Chiron');
// // ── Helpers ────────────────────────────────────────────────────────────────
// function getTerminal(): vscode.Terminal {
//   const alive = vscode.window.terminals.find(t => t.name === 'Chiron Runner');
//   if (alive) {
//     chironTerminal = alive;
//   } else {
//     chironTerminal = vscode.window.createTerminal('Chiron Runner');
//   }
//   return chironTerminal;
// }
// function getChironRoot(context: vscode.ExtensionContext): string {
//   const config = vscode.workspace.getConfiguration('chiron');
//   const configured = config.get<string>('coreDir');
//   if (configured && configured.trim()) {
//     return configured;
//   }
//   return path.join(context.extensionPath, 'ChironRuntime', 'ChironCore');
// }
// function getColorConfig() {
//   const config = vscode.workspace.getConfiguration('chiron');
//   return {
//     turtle: config.get<string>('turtleColor') || 'green',
//     pen: config.get<string>('penColor') || 'red',
//     bg: config.get<string>('backgroundColor') || 'white'
//   };
// }
// function checkUvInstalled(): Promise<boolean> {
//   return new Promise((resolve) => {
//     const proc = spawn('uv', ['--version']);
//     proc.on('error', () => resolve(false));
//     proc.on('close', () => resolve(true));
//   });
// }
// // ✅ NEW: installer
// async function installUv(): Promise<boolean> {
//   return new Promise((resolve) => {
//     vscode.window.showInformationMessage('uv not found. Installing latest version...');
//     const installCmd = process.platform === 'win32'
//       ? 'pip install uv'
//       : 'curl -Ls https://astral.sh/uv/install.sh | sh';
//     const proc = spawn(installCmd, { shell: true });
//     proc.on('error', () => resolve(false));
//     proc.on('close', (code) => resolve(code === 0));
//   });
// }
// // ── Normal (terminal) runner ───────────────────────────────────────────────
// function runChironFile(context: vscode.ExtensionContext, filePath: string, params?: string): void {
//   const terminal = getTerminal();
//   terminal.show(true);
//   const chironRoot = getChironRoot(context);
//   let cmd = `cd "${chironRoot}" && uv run chiron.py -r "${filePath}"`;
//   if (params && params.trim() !== '') {
//     cmd += ` -d '${params.trim()}'`;
//   }
//   terminal.sendText(cmd);
// }
// async function runWithVariables(context: vscode.ExtensionContext, filePath: string): Promise<void> {
//   const input = await vscode.window.showInputBox({
//     title: 'Chiron: Run with Variables',
//     prompt: 'Enter variable values as a Python dict (e.g. {":x": 10, ":y": 20})',
//     placeHolder: '{":x": 10, ":y": 20, ":z": 5}',
//     validateInput: (value) => {
//       const trimmed = value.trim();
//       if (!trimmed.startsWith('{') || !trimmed.endsWith('}')) {
//         return 'Must be a valid Python dict like {":x": 10}';
//       }
//       return null;
//     }
//   });
//   if (input === undefined) return;
//   runChironFile(context, filePath, input);
// }
// // ── Headless runner ───────────────────────────────────────────────────────
// type WebviewMessage =
//   | { cmd: 'init'; data: { bg: string; pen_color: string; turtle_color: string } }
//   | { cmd: 'line'; data: { x1: number; y1: number; x2: number; y2: number; color?: string } }
//   | { cmd: 'turtle_pos'; data: { x: number; y: number; angle: number } }
//   | { cmd: 'rotate'; data: { angle: number } }
//   | { cmd: 'pen'; data: { down: boolean } }
//   | { cmd: 'print'; data: { text: string } };
// function normalizeMessage(raw: any): WebviewMessage | null {
//   if (!raw || typeof raw !== 'object') return null;
//   if (raw.cmd && raw.data) return raw as WebviewMessage;
//   if (raw.type === 'forward') {
//     return {
//       cmd: 'line',
//       data: { x1: raw.x1, y1: raw.y1, x2: raw.x2, y2: raw.y2, color: raw.color || 'blue' }
//     };
//   }
//   if (raw.type === 'rotate') return { cmd: 'rotate', data: { angle: raw.angle } };
//   if (raw.type === 'pen') return { cmd: 'pen', data: { down: !!raw.down } };
//   if (raw.type === 'turtle_pos') return { cmd: 'turtle_pos', data: raw };
//   if (raw.type === 'print') return { cmd: 'print', data: raw };
//   if (raw.type === 'init') {
//     return {
//       cmd: 'init',
//       data: {
//         bg: raw.bg ?? 'white',
//         pen_color: raw.pen_color ?? 'blue',
//         turtle_color: raw.turtle_color ?? 'green'
//       }
//     };
//   }
//   return null;
// }
// function runChironHeadless(
//   context: vscode.ExtensionContext,
//   filePath: string,
//   params?: string
// ): void {
//   const chironRoot = getChironRoot(context);
//   if (!fs.existsSync(chironRoot)) {
//     vscode.window.showErrorMessage('ChironCore not found. Check chiron.coreDir setting.');
//     return;
//   }
//   const panel = vscode.window.createWebviewPanel(
//     'chironTurtle',
//     'Chiron: ' + path.basename(filePath),
//     vscode.ViewColumn.Beside,
//     { enableScripts: true }
//   );
//   const htmlPath = path.join(context.extensionPath, 'webview.html');
//   if (!fs.existsSync(htmlPath)) {
//     vscode.window.showErrorMessage(`webview.html not found at ${htmlPath}`);
//     return;
//   }
//   // panel.webview.html = fs.readFileSync(htmlPath, 'utf8');
//   const colors = getColorConfig();
// panel.webview.html = fs.readFileSync(htmlPath, 'utf8');
// // send initial config AFTER webview loads
// setTimeout(() => {
//   panel.webview.postMessage({
//     cmd: 'init',
//     data: {
//       bg: colors.bg,
//       pen_color: colors.pen,
//       turtle_color: colors.turtle
//     }
//   });
// }, 50);
//   const spawnArgs = ['chiron.py', '--headless', '-r', filePath];
//   if (params?.trim()) spawnArgs.push('-d', params.trim());
//   let proc: ReturnType<typeof spawn> | undefined;
//   let disposed = false;
//   let buffer = '';
//   let initSent = false;
//   panel.onDidDispose(() => {
//     disposed = true;
//     proc?.kill();
//   });
//   setTimeout(async () => {
//     if (disposed) return;
//     let uvOk = await checkUvInstalled();
//     if (!uvOk) {
//       const installed = await installUv();
//       if (!installed) {
//         vscode.window.showErrorMessage('Failed to install uv automatically.');
//         return;
//       }
//     }
//     proc = spawn('uv', ['run', ...spawnArgs], { cwd: chironRoot });
//     proc.stdout?.on('data', (chunk: Buffer) => {
//       buffer += chunk.toString('utf8');
//       while (true) {
//         const start = buffer.indexOf('{');
//         if (start === -1) {
//           if (buffer.trim()) output.append(buffer);
//           buffer = '';
//           return;
//         }
//         if (start > 0) {
//           const prefix = buffer.slice(0, start);
//           if (prefix.trim()) output.append(prefix);
//           buffer = buffer.slice(start);
//         }
//         let braceCount = 0;
//         let end = -1;
//         for (let i = 0; i < buffer.length; i++) {
//           if (buffer[i] === '{') braceCount++;
//           else if (buffer[i] === '}') braceCount--;
//           if (braceCount === 0) {
//             end = i;
//             break;
//           }
//         }
//         if (end === -1) return;
//         const jsonStr = buffer.slice(0, end + 1);
//         buffer = buffer.slice(end + 1);
//         try {
//           const raw = JSON.parse(jsonStr);
//           const msg = normalizeMessage(raw);
//           if (!msg) {
//             output.appendLine(`[Unknown JSON] ${jsonStr}`);
//             continue;
//           }
//           if (msg.cmd === 'init') {
//             const colors = getColorConfig();
//             initSent = true;
//             panel.webview.postMessage({
//               cmd: 'init',
//               data: {
//                 bg: colors.bg,
//                 pen_color: colors.pen,
//                 turtle_color: colors.turtle
//               }
//             });
//             continue;
//           } else {
//             if (!initSent) {
//               const colors = getColorConfig();
//               panel.webview.postMessage({
//                 cmd: 'init',
//                 data: {
//                   bg: colors.bg,
//                   pen_color: colors.pen,
//                   turtle_color: colors.turtle
//                 }
//               });
//               initSent = true;
//             }
//             panel.webview.postMessage(msg);
//           }
//         } catch {
//           output.appendLine(`[Parse Error] ${jsonStr}`);
//         }
//       }
//     });
//     proc.stderr?.on('data', (data: Buffer) => {
//       output.appendLine(`[stderr] ${data.toString('utf8')}`);
//     });
//     proc.on('error', (err) => {
//       vscode.window.showErrorMessage(`Failed to start: ${String(err)}`);
//     });
//     proc.on('close', (code) => {
//       output.appendLine(`[process exit] code=${code}`);
//     });
//   }, 200);
// }
// async function runHeadlessWithVariables(
//   context: vscode.ExtensionContext,
//   filePath: string
// ): Promise<void> {
//   const input = await vscode.window.showInputBox({
//     title: 'Chiron: Run with Variables (Webview)',
//     prompt: 'Enter variable values as a Python dict (e.g. {":x": 10, ":y": 20})',
//     placeHolder: '{":x": 10, ":y": 20, ":z": 5}',
//     validateInput: (value) => {
//       const trimmed = value.trim();
//       if (!trimmed.startsWith('{') || !trimmed.endsWith('}')) {
//         return 'Must be a valid Python dict like {":x": 10}';
//       }
//       return null;
//     }
//   });
//   if (input === undefined) return;
//   runChironHeadless(context, filePath, input);
// }
// // ── Command handler ────────────────────────────────────────────────────────
// async function handleRunFile(context: vscode.ExtensionContext): Promise<void> {
//   const editor = vscode.window.activeTextEditor;
//   if (!editor || editor.document.languageId !== 'chiron') {
//     vscode.window.showErrorMessage('Open a .tl file first.');
//     return;
//   }
//   await editor.document.save();
//   const filePath = editor.document.fileName;
//   let uvOk = await checkUvInstalled();
//   if (!uvOk) {
//     const installed = await installUv();
//     if (!installed) {
//       vscode.window.showErrorMessage('Failed to install uv automatically.');
//       return;
//     }
//     uvOk = await checkUvInstalled();
//     if (!uvOk) {
//       vscode.window.showErrorMessage('uv installation did not succeed.');
//       return;
//     }
//     vscode.window.showInformationMessage('uv installed successfully.');
//   }
//   const choice = await vscode.window.showQuickPick(
//     [
//       {
//         label: '$(play) Run without variables',
//         description: 'Run in a terminal window (standard turtle UI)',
//         detail: `uv run chiron.py -r "${path.basename(filePath)}"`,
//         value: 'no-vars'
//       },
//       {
//         label: '$(symbol-variable) Run with variables',
//         description: 'Provide input variables, run in terminal window',
//         detail: `uv run chiron.py -r "${path.basename(filePath)}" -d '{...}'`,
//         value: 'with-vars'
//       },
//       {
//         label: '$(browser) Run in Webview (no variables)',
//         description: 'Render turtle output in a VS Code panel beside the editor',
//         detail: `uv run chiron.py --headless -r "${path.basename(filePath)}"`,
//         value: 'headless-no-vars'
//       },
//       {
//         label: '$(symbol-variable) Run in Webview (with variables)',
//         description: 'Provide input variables, render output in VS Code panel',
//         detail: `uv run chiron.py --headless -r "${path.basename(filePath)}" -d '{...}'`,
//         value: 'headless-with-vars'
//       }
//     ],
//     {
//       title: 'Chiron: How do you want to run this file?',
//       placeHolder: 'Select a run mode...'
//     }
//   );
//   if (!choice) return;
//   switch (choice.value) {
//     case 'no-vars':
//       runChironFile(context, filePath);
//       break;
//     case 'with-vars':
//       await runWithVariables(context, filePath);
//       break;
//     case 'headless-no-vars':
//       runChironHeadless(context, filePath);
//       break;
//     case 'headless-with-vars':
//       await runHeadlessWithVariables(context, filePath);
//       break;
//   }
// }
// // ── Extension lifecycle ────────────────────────────────────────────────────
// export function activate(context: vscode.ExtensionContext) {
//   const serverModule = context.asAbsolutePath(
//     path.join('out/server/server.js')
//   );
//   const serverOptions: ServerOptions = {
//     run: { module: serverModule, transport: TransportKind.ipc },
//     debug: {
//       module: serverModule,
//       transport: TransportKind.ipc,
//       options: { execArgv: ['--nolazy', '--inspect=6009'] }
//     }
//   };
//   const clientOptions: LanguageClientOptions = {
//     documentSelector: [{ scheme: 'file', language: 'chiron' }]
//   };
//   client = new LanguageClient(
//     'chironLS',
//     'Chiron Language Server',
//     serverOptions,
//     clientOptions
//   );
//   client.start();
//   const runCommand = vscode.commands.registerCommand(
//     'chiron.runFile',
//     () => handleRunFile(context)
//   );
//   const terminalCloseListener = vscode.window.onDidCloseTerminal(t => {
//     if (t.name === 'Chiron Runner') {
//       chironTerminal = undefined;
//     }
//   });
//   context.subscriptions.push(runCommand, terminalCloseListener);
// }
// export function deactivate() {
//   return client?.stop();
// }
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const vscode = __importStar(require("vscode"));
const node_1 = require("vscode-languageclient/node");
const child_process_1 = require("child_process");
let client;
let chironTerminal;
const output = vscode.window.createOutputChannel('Chiron');
// ── Helpers ────────────────────────────────────────────────────────────────
function getTerminal() {
    const alive = vscode.window.terminals.find(t => t.name === 'Chiron Runner');
    if (alive) {
        chironTerminal = alive;
    }
    else {
        chironTerminal = vscode.window.createTerminal('Chiron Runner');
    }
    return chironTerminal;
}
function getChironRoot(context) {
    const config = vscode.workspace.getConfiguration('chiron');
    const configured = config.get('coreDir');
    if (configured && configured.trim()) {
        return configured;
    }
    return path.join(context.extensionPath, 'ChironRuntime', 'ChironCore');
}
// Single source of truth: always reads from VS Code settings (package.json defaults)
function getColorConfig() {
    const config = vscode.workspace.getConfiguration('chiron');
    return {
        turtle: config.get('turtleColor') || 'yellow',
        pen: config.get('penColor') || 'red',
        bg: config.get('backgroundColor') || 'black'
    };
}
function checkUvInstalled() {
    return new Promise((resolve) => {
        const proc = (0, child_process_1.spawn)('uv', ['--version']);
        proc.on('error', () => resolve(false));
        proc.on('close', () => resolve(true));
    });
}
async function installUv() {
    return new Promise((resolve) => {
        vscode.window.showInformationMessage('uv not found. Installing latest version...');
        const installCmd = process.platform === 'win32'
            ? 'pip install uv'
            : 'curl -Ls https://astral.sh/uv/install.sh | sh';
        const proc = (0, child_process_1.spawn)(installCmd, { shell: true });
        proc.on('error', () => resolve(false));
        proc.on('close', (code) => resolve(code === 0));
    });
}
// ── Normal (terminal) runner ───────────────────────────────────────────────
function runChironFile(context, filePath, params) {
    const terminal = getTerminal();
    terminal.show(true);
    const chironRoot = getChironRoot(context);
    let cmd = `cd "${chironRoot}" && uv run chiron.py -r "${filePath}"`;
    if (params && params.trim() !== '') {
        cmd += ` -d '${params.trim()}'`;
    }
    terminal.sendText(cmd);
}
async function runWithVariables(context, filePath) {
    const input = await vscode.window.showInputBox({
        title: 'Chiron: Run with Variables',
        prompt: 'Enter variable values as a Python dict (e.g. {":x": 10, ":y": 20})',
        placeHolder: '{":x": 10, ":y": 20, ":z": 5}',
        validateInput: (value) => {
            const trimmed = value.trim();
            if (!trimmed.startsWith('{') || !trimmed.endsWith('}')) {
                return 'Must be a valid Python dict like {":x": 10}';
            }
            return null;
        }
    });
    if (input === undefined)
        return;
    runChironFile(context, filePath, input);
}
// normalizeMessage only reshapes the structure — it never sets colors.
// Colors are always injected by the caller via getColorConfig().
function normalizeMessage(raw) {
    if (!raw || typeof raw !== 'object')
        return null;
    if (raw.cmd && raw.data)
        return raw;
    if (raw.type === 'forward') {
        // No color fallback here — caller will attach pen color from settings
        return {
            cmd: 'line',
            data: { x1: raw.x1, y1: raw.y1, x2: raw.x2, y2: raw.y2 }
        };
    }
    if (raw.type === 'rotate')
        return { cmd: 'rotate', data: { angle: raw.angle } };
    if (raw.type === 'pen')
        return { cmd: 'pen', data: { down: !!raw.down } };
    if (raw.type === 'turtle_pos')
        return { cmd: 'turtle_pos', data: raw };
    if (raw.type === 'print')
        return { cmd: 'print', data: raw };
    // 'init' from the Python process is intentionally ignored here;
    // we always send our own init built from VS Code settings.
    if (raw.type === 'init')
        return null;
    return null;
}
function runChironHeadless(context, filePath, params) {
    const chironRoot = getChironRoot(context);
    if (!fs.existsSync(chironRoot)) {
        vscode.window.showErrorMessage('ChironCore not found. Check chiron.coreDir setting.');
        return;
    }
    const panel = vscode.window.createWebviewPanel('chironTurtle', 'Chiron: ' + path.basename(filePath), vscode.ViewColumn.Beside, { enableScripts: true });
    const htmlPath = path.join(context.extensionPath, 'webview.html');
    if (!fs.existsSync(htmlPath)) {
        vscode.window.showErrorMessage(`webview.html not found at ${htmlPath}`);
        return;
    }
    panel.webview.html = fs.readFileSync(htmlPath, 'utf8');
    // Send a single authoritative init from VS Code settings once the webview is ready.
    // This is the ONLY place colors are set for the webview session.
    const sendInit = () => {
        const colors = getColorConfig();
        panel.webview.postMessage({
            cmd: 'init',
            data: {
                bg: colors.bg,
                pen_color: colors.pen,
                turtle_color: colors.turtle
            }
        });
    };
    setTimeout(sendInit, 50);
    const spawnArgs = ['chiron.py', '--headless', '-r', filePath];
    if (params?.trim())
        spawnArgs.push('-d', params.trim());
    let proc;
    let disposed = false;
    let buffer = '';
    let initSent = false;
    panel.onDidDispose(() => {
        disposed = true;
        proc?.kill();
    });
    setTimeout(async () => {
        if (disposed)
            return;
        let uvOk = await checkUvInstalled();
        if (!uvOk) {
            const installed = await installUv();
            if (!installed) {
                vscode.window.showErrorMessage('Failed to install uv automatically.');
                return;
            }
        }
        proc = (0, child_process_1.spawn)('uv', ['run', ...spawnArgs], { cwd: chironRoot });
        proc.stdout?.on('data', (chunk) => {
            buffer += chunk.toString('utf8');
            while (true) {
                const start = buffer.indexOf('{');
                if (start === -1) {
                    if (buffer.trim())
                        output.append(buffer);
                    buffer = '';
                    return;
                }
                if (start > 0) {
                    const prefix = buffer.slice(0, start);
                    if (prefix.trim())
                        output.append(prefix);
                    buffer = buffer.slice(start);
                }
                let braceCount = 0;
                let end = -1;
                for (let i = 0; i < buffer.length; i++) {
                    if (buffer[i] === '{')
                        braceCount++;
                    else if (buffer[i] === '}')
                        braceCount--;
                    if (braceCount === 0) {
                        end = i;
                        break;
                    }
                }
                if (end === -1)
                    return;
                const jsonStr = buffer.slice(0, end + 1);
                buffer = buffer.slice(end + 1);
                try {
                    const raw = JSON.parse(jsonStr);
                    const msg = normalizeMessage(raw);
                    // null = unknown or intentionally dropped (e.g. Python-side 'init')
                    if (!msg) {
                        if (raw.type !== 'init') {
                            output.appendLine(`[Unknown JSON] ${jsonStr}`);
                        }
                        continue;
                    }
                    // Ensure init is sent before the first drawing command
                    if (!initSent) {
                        sendInit();
                        initSent = true;
                    }
                    // Attach the settings pen color to every line message
                    if (msg.cmd === 'line') {
                        const colors = getColorConfig();
                        msg.data.color = colors.pen;
                    }
                    panel.webview.postMessage(msg);
                }
                catch {
                    output.appendLine(`[Parse Error] ${jsonStr}`);
                }
            }
        });
        proc.stderr?.on('data', (data) => {
            output.appendLine(`[stderr] ${data.toString('utf8')}`);
        });
        proc.on('error', (err) => {
            vscode.window.showErrorMessage(`Failed to start: ${String(err)}`);
        });
        proc.on('close', (code) => {
            output.appendLine(`[process exit] code=${code}`);
        });
    }, 200);
}
async function runHeadlessWithVariables(context, filePath) {
    const input = await vscode.window.showInputBox({
        title: 'Chiron: Run with Variables (Webview)',
        prompt: 'Enter variable values as a Python dict (e.g. {":x": 10, ":y": 20})',
        placeHolder: '{":x": 10, ":y": 20, ":z": 5}',
        validateInput: (value) => {
            const trimmed = value.trim();
            if (!trimmed.startsWith('{') || !trimmed.endsWith('}')) {
                return 'Must be a valid Python dict like {":x": 10}';
            }
            return null;
        }
    });
    if (input === undefined)
        return;
    runChironHeadless(context, filePath, input);
}
// ── Command handler ────────────────────────────────────────────────────────
async function handleRunFile(context) {
    const editor = vscode.window.activeTextEditor;
    if (!editor || editor.document.languageId !== 'chiron') {
        vscode.window.showErrorMessage('Open a .tl file first.');
        return;
    }
    await editor.document.save();
    const filePath = editor.document.fileName;
    let uvOk = await checkUvInstalled();
    if (!uvOk) {
        const installed = await installUv();
        if (!installed) {
            vscode.window.showErrorMessage('Failed to install uv automatically.');
            return;
        }
        uvOk = await checkUvInstalled();
        if (!uvOk) {
            vscode.window.showErrorMessage('uv installation did not succeed.');
            return;
        }
        vscode.window.showInformationMessage('uv installed successfully.');
    }
    const choice = await vscode.window.showQuickPick([
        {
            label: '$(play) Run without variables',
            description: 'Run in a terminal window (standard turtle UI)',
            detail: `uv run chiron.py -r "${path.basename(filePath)}"`,
            value: 'no-vars'
        },
        {
            label: '$(symbol-variable) Run with variables',
            description: 'Provide input variables, run in terminal window',
            detail: `uv run chiron.py -r "${path.basename(filePath)}" -d '{...}'`,
            value: 'with-vars'
        },
        {
            label: '$(browser) Run in Webview (no variables)',
            description: 'Render turtle output in a VS Code panel beside the editor',
            detail: `uv run chiron.py --headless -r "${path.basename(filePath)}"`,
            value: 'headless-no-vars'
        },
        {
            label: '$(symbol-variable) Run in Webview (with variables)',
            description: 'Provide input variables, render output in VS Code panel',
            detail: `uv run chiron.py --headless -r "${path.basename(filePath)}" -d '{...}'`,
            value: 'headless-with-vars'
        }
    ], {
        title: 'Chiron: How do you want to run this file?',
        placeHolder: 'Select a run mode...'
    });
    if (!choice)
        return;
    switch (choice.value) {
        case 'no-vars':
            runChironFile(context, filePath);
            break;
        case 'with-vars':
            await runWithVariables(context, filePath);
            break;
        case 'headless-no-vars':
            runChironHeadless(context, filePath);
            break;
        case 'headless-with-vars':
            await runHeadlessWithVariables(context, filePath);
            break;
    }
}
// ── Extension lifecycle ────────────────────────────────────────────────────
function activate(context) {
    const serverModule = context.asAbsolutePath(path.join('out/server/server.js'));
    const serverOptions = {
        run: { module: serverModule, transport: node_1.TransportKind.ipc },
        debug: {
            module: serverModule,
            transport: node_1.TransportKind.ipc,
            options: { execArgv: ['--nolazy', '--inspect=6009'] }
        }
    };
    const clientOptions = {
        documentSelector: [{ scheme: 'file', language: 'chiron' }]
    };
    client = new node_1.LanguageClient('chironLS', 'Chiron Language Server', serverOptions, clientOptions);
    client.start();
    const runCommand = vscode.commands.registerCommand('chiron.runFile', () => handleRunFile(context));
    const terminalCloseListener = vscode.window.onDidCloseTerminal(t => {
        if (t.name === 'Chiron Runner') {
            chironTerminal = undefined;
        }
    });
    context.subscriptions.push(runCommand, terminalCloseListener);
}
function deactivate() {
    return client?.stop();
}
