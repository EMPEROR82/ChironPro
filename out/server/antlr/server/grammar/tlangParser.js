"use strict";
// Generated from server/grammar/tlang.g4 by ANTLR 4.9.0-SNAPSHOT
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
exports.ValueContext = exports.LogicOpContext = exports.BinCondOpContext = exports.ConditionContext = exports.UnaryArithOpContext = exports.AdditiveContext = exports.MultiplicativeContext = exports.ExponentiativeContext = exports.ParenExprContext = exports.ValueExprContext = exports.AddExprContext = exports.MulExprContext = exports.ExpoExprContext = exports.UnaryExprContext = exports.ExpressionContext = exports.ArrayAccessContext = exports.ArrayAccessCommandContext = exports.ArrayDeclContext = exports.ReturnCommandContext = exports.ArgListContext = exports.FunctionCallContext = exports.FunctionCallCommandContext = exports.ParamListContext = exports.FunctionDeclContext = exports.PrintListContext = exports.PrintArgContext = exports.PrintfCommandContext = exports.PauseCommandContext = exports.GotoCommandContext = exports.PenCommandContext = exports.MoveOpContext = exports.MoveCommandContext = exports.LoopContext = exports.IfElseConditionalContext = exports.IfConditionalContext = exports.ConditionalContext = exports.ArrayAssignmentContext = exports.AssignmentContext = exports.InstructionContext = exports.Strict_ilistContext = exports.Instruction_listContext = exports.StartContext = exports.tlangParser = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class tlangParser extends Parser_1.Parser {
    // @Override
    // @NotNull
    get vocabulary() {
        return tlangParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "tlang.g4"; }
    // @Override
    get ruleNames() { return tlangParser.ruleNames; }
    // @Override
    get serializedATN() { return tlangParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(tlangParser._ATN, this);
    }
    // @RuleVersion(0)
    start() {
        let _localctx = new StartContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, tlangParser.RULE_start);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 72;
                this.instruction_list();
                this.state = 73;
                this.match(tlangParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    instruction_list() {
        let _localctx = new Instruction_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, tlangParser.RULE_instruction_list);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 78;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tlangParser.T__3) | (1 << tlangParser.T__7) | (1 << tlangParser.T__8) | (1 << tlangParser.T__9) | (1 << tlangParser.T__10) | (1 << tlangParser.T__11) | (1 << tlangParser.T__12) | (1 << tlangParser.T__13) | (1 << tlangParser.T__14) | (1 << tlangParser.T__18) | (1 << tlangParser.T__19) | (1 << tlangParser.T__20) | (1 << tlangParser.T__21) | (1 << tlangParser.T__22))) !== 0) || _la === tlangParser.VAR || _la === tlangParser.NAME) {
                    {
                        {
                            this.state = 75;
                            this.instruction();
                        }
                    }
                    this.state = 80;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    strict_ilist() {
        let _localctx = new Strict_ilistContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, tlangParser.RULE_strict_ilist);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 82;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 81;
                            this.instruction();
                        }
                    }
                    this.state = 84;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tlangParser.T__3) | (1 << tlangParser.T__7) | (1 << tlangParser.T__8) | (1 << tlangParser.T__9) | (1 << tlangParser.T__10) | (1 << tlangParser.T__11) | (1 << tlangParser.T__12) | (1 << tlangParser.T__13) | (1 << tlangParser.T__14) | (1 << tlangParser.T__18) | (1 << tlangParser.T__19) | (1 << tlangParser.T__20) | (1 << tlangParser.T__21) | (1 << tlangParser.T__22))) !== 0) || _la === tlangParser.VAR || _la === tlangParser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    instruction() {
        let _localctx = new InstructionContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, tlangParser.RULE_instruction);
        try {
            this.state = 100;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 86;
                        this.assignment();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 87;
                        this.arrayAssignment();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 88;
                        this.conditional();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 89;
                        this.loop();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 90;
                        this.moveCommand();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 91;
                        this.penCommand();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 92;
                        this.gotoCommand();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 93;
                        this.pauseCommand();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 94;
                        this.printfCommand();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 95;
                        this.functionDecl();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 96;
                        this.returnCommand();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 97;
                        this.functionCallCommand();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 98;
                        this.arrayDecl();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 99;
                        this.arrayAccessCommand();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    assignment() {
        let _localctx = new AssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, tlangParser.RULE_assignment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 102;
                this.match(tlangParser.VAR);
                this.state = 103;
                this.match(tlangParser.T__0);
                this.state = 104;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    arrayAssignment() {
        let _localctx = new ArrayAssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, tlangParser.RULE_arrayAssignment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 106;
                this.match(tlangParser.VAR);
                this.state = 107;
                this.match(tlangParser.T__1);
                this.state = 108;
                this.expression(0);
                this.state = 109;
                this.match(tlangParser.T__2);
                this.state = 110;
                this.match(tlangParser.T__0);
                this.state = 111;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    conditional() {
        let _localctx = new ConditionalContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, tlangParser.RULE_conditional);
        try {
            this.state = 115;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 113;
                        this.ifConditional();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 114;
                        this.ifElseConditional();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ifConditional() {
        let _localctx = new IfConditionalContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, tlangParser.RULE_ifConditional);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 117;
                this.match(tlangParser.T__3);
                this.state = 118;
                this.condition(0);
                this.state = 119;
                this.match(tlangParser.T__4);
                this.state = 120;
                this.strict_ilist();
                this.state = 121;
                this.match(tlangParser.T__5);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ifElseConditional() {
        let _localctx = new IfElseConditionalContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, tlangParser.RULE_ifElseConditional);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 123;
                this.match(tlangParser.T__3);
                this.state = 124;
                this.condition(0);
                this.state = 125;
                this.match(tlangParser.T__4);
                this.state = 126;
                this.strict_ilist();
                this.state = 127;
                this.match(tlangParser.T__5);
                this.state = 128;
                this.match(tlangParser.T__6);
                this.state = 129;
                this.match(tlangParser.T__4);
                this.state = 130;
                this.strict_ilist();
                this.state = 131;
                this.match(tlangParser.T__5);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    loop() {
        let _localctx = new LoopContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, tlangParser.RULE_loop);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 133;
                this.match(tlangParser.T__7);
                this.state = 134;
                this.value();
                this.state = 135;
                this.match(tlangParser.T__4);
                this.state = 136;
                this.strict_ilist();
                this.state = 137;
                this.match(tlangParser.T__5);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    moveCommand() {
        let _localctx = new MoveCommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, tlangParser.RULE_moveCommand);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 139;
                this.moveOp();
                this.state = 140;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    moveOp() {
        let _localctx = new MoveOpContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, tlangParser.RULE_moveOp);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 142;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tlangParser.T__8) | (1 << tlangParser.T__9) | (1 << tlangParser.T__10) | (1 << tlangParser.T__11))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    penCommand() {
        let _localctx = new PenCommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, tlangParser.RULE_penCommand);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 144;
                _la = this._input.LA(1);
                if (!(_la === tlangParser.T__12 || _la === tlangParser.T__13)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    gotoCommand() {
        let _localctx = new GotoCommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, tlangParser.RULE_gotoCommand);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 146;
                this.match(tlangParser.T__14);
                this.state = 147;
                this.match(tlangParser.T__15);
                this.state = 148;
                this.expression(0);
                this.state = 149;
                this.match(tlangParser.T__16);
                this.state = 150;
                this.expression(0);
                this.state = 151;
                this.match(tlangParser.T__17);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    pauseCommand() {
        let _localctx = new PauseCommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, tlangParser.RULE_pauseCommand);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 153;
                this.match(tlangParser.T__18);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    printfCommand() {
        let _localctx = new PrintfCommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, tlangParser.RULE_printfCommand);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 155;
                this.match(tlangParser.T__19);
                this.state = 156;
                this.match(tlangParser.T__15);
                this.state = 157;
                this.printList();
                this.state = 158;
                this.match(tlangParser.T__17);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    printArg() {
        let _localctx = new PrintArgContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, tlangParser.RULE_printArg);
        try {
            this.state = 162;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case tlangParser.T__15:
                case tlangParser.MINUS:
                case tlangParser.NUM:
                case tlangParser.VAR:
                case tlangParser.NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 160;
                        this.expression(0);
                    }
                    break;
                case tlangParser.STRING:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 161;
                        this.match(tlangParser.STRING);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    printList() {
        let _localctx = new PrintListContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, tlangParser.RULE_printList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 164;
                this.printArg();
                this.state = 169;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === tlangParser.T__16) {
                    {
                        {
                            this.state = 165;
                            this.match(tlangParser.T__16);
                            this.state = 166;
                            this.printArg();
                        }
                    }
                    this.state = 171;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionDecl() {
        let _localctx = new FunctionDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, tlangParser.RULE_functionDecl);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 172;
                this.match(tlangParser.T__20);
                this.state = 173;
                this.match(tlangParser.NAME);
                this.state = 174;
                this.match(tlangParser.T__15);
                this.state = 176;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === tlangParser.VAR) {
                    {
                        this.state = 175;
                        this.paramList();
                    }
                }
                this.state = 178;
                this.match(tlangParser.T__17);
                this.state = 179;
                this.match(tlangParser.T__4);
                this.state = 180;
                this.strict_ilist();
                this.state = 181;
                this.match(tlangParser.T__5);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    paramList() {
        let _localctx = new ParamListContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, tlangParser.RULE_paramList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 183;
                this.match(tlangParser.VAR);
                this.state = 188;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === tlangParser.T__16) {
                    {
                        {
                            this.state = 184;
                            this.match(tlangParser.T__16);
                            this.state = 185;
                            this.match(tlangParser.VAR);
                        }
                    }
                    this.state = 190;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionCallCommand() {
        let _localctx = new FunctionCallCommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, tlangParser.RULE_functionCallCommand);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 191;
                this.functionCall();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionCall() {
        let _localctx = new FunctionCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, tlangParser.RULE_functionCall);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 193;
                this.match(tlangParser.NAME);
                this.state = 194;
                this.match(tlangParser.T__15);
                this.state = 196;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & ((1 << (tlangParser.T__15 - 16)) | (1 << (tlangParser.MINUS - 16)) | (1 << (tlangParser.NUM - 16)) | (1 << (tlangParser.VAR - 16)) | (1 << (tlangParser.NAME - 16)))) !== 0)) {
                    {
                        this.state = 195;
                        this.argList();
                    }
                }
                this.state = 198;
                this.match(tlangParser.T__17);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    argList() {
        let _localctx = new ArgListContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, tlangParser.RULE_argList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 200;
                this.expression(0);
                this.state = 205;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === tlangParser.T__16) {
                    {
                        {
                            this.state = 201;
                            this.match(tlangParser.T__16);
                            this.state = 202;
                            this.expression(0);
                        }
                    }
                    this.state = 207;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    returnCommand() {
        let _localctx = new ReturnCommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, tlangParser.RULE_returnCommand);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 208;
                this.match(tlangParser.T__21);
                this.state = 209;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    arrayDecl() {
        let _localctx = new ArrayDeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, tlangParser.RULE_arrayDecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 211;
                this.match(tlangParser.T__22);
                this.state = 212;
                this.match(tlangParser.VAR);
                this.state = 213;
                this.match(tlangParser.T__1);
                this.state = 214;
                this.expression(0);
                this.state = 215;
                this.match(tlangParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    arrayAccessCommand() {
        let _localctx = new ArrayAccessCommandContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, tlangParser.RULE_arrayAccessCommand);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 217;
                this.arrayAccess();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    arrayAccess() {
        let _localctx = new ArrayAccessContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, tlangParser.RULE_arrayAccess);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 219;
                this.match(tlangParser.VAR);
                this.state = 220;
                this.match(tlangParser.T__1);
                this.state = 221;
                this.expression(0);
                this.state = 222;
                this.match(tlangParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 54;
        this.enterRecursionRule(_localctx, 54, tlangParser.RULE_expression, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 233;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case tlangParser.MINUS:
                        {
                            _localctx = new UnaryExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 225;
                            this.unaryArithOp();
                            this.state = 226;
                            this.expression(6);
                        }
                        break;
                    case tlangParser.NUM:
                    case tlangParser.VAR:
                    case tlangParser.NAME:
                        {
                            _localctx = new ValueExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 228;
                            this.value();
                        }
                        break;
                    case tlangParser.T__15:
                        {
                            _localctx = new ParenExprContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 229;
                            this.match(tlangParser.T__15);
                            this.state = 230;
                            this.expression(0);
                            this.state = 231;
                            this.match(tlangParser.T__17);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 249;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 247;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpoExprContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, tlangParser.RULE_expression);
                                        this.state = 235;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 236;
                                        this.exponentiative();
                                        this.state = 237;
                                        this.expression(6);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new MulExprContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, tlangParser.RULE_expression);
                                        this.state = 239;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 240;
                                        this.multiplicative();
                                        this.state = 241;
                                        this.expression(5);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new AddExprContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, tlangParser.RULE_expression);
                                        this.state = 243;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 244;
                                        this.additive();
                                        this.state = 245;
                                        this.expression(4);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 251;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    exponentiative() {
        let _localctx = new ExponentiativeContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, tlangParser.RULE_exponentiative);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 252;
                this.match(tlangParser.EXPO);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    multiplicative() {
        let _localctx = new MultiplicativeContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, tlangParser.RULE_multiplicative);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 254;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tlangParser.MUL) | (1 << tlangParser.DIV) | (1 << tlangParser.MOD))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    additive() {
        let _localctx = new AdditiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, tlangParser.RULE_additive);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 256;
                _la = this._input.LA(1);
                if (!(_la === tlangParser.PLUS || _la === tlangParser.MINUS)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    unaryArithOp() {
        let _localctx = new UnaryArithOpContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, tlangParser.RULE_unaryArithOp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 258;
                this.match(tlangParser.MINUS);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    condition(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ConditionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 64;
        this.enterRecursionRule(_localctx, 64, tlangParser.RULE_condition, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 272;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                    case 1:
                        {
                            this.state = 261;
                            this.match(tlangParser.NOT);
                            this.state = 262;
                            this.condition(5);
                        }
                        break;
                    case 2:
                        {
                            this.state = 263;
                            this.expression(0);
                            this.state = 264;
                            this.binCondOp();
                            this.state = 265;
                            this.expression(0);
                        }
                        break;
                    case 3:
                        {
                            this.state = 267;
                            this.match(tlangParser.PENCOND);
                        }
                        break;
                    case 4:
                        {
                            this.state = 268;
                            this.match(tlangParser.T__15);
                            this.state = 269;
                            this.condition(0);
                            this.state = 270;
                            this.match(tlangParser.T__17);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 280;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new ConditionContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, tlangParser.RULE_condition);
                                this.state = 274;
                                if (!(this.precpred(this._ctx, 3))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                }
                                this.state = 275;
                                this.logicOp();
                                this.state = 276;
                                this.condition(4);
                            }
                        }
                    }
                    this.state = 282;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    binCondOp() {
        let _localctx = new BinCondOpContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, tlangParser.RULE_binCondOp);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 283;
                _la = this._input.LA(1);
                if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (tlangParser.LT - 31)) | (1 << (tlangParser.GT - 31)) | (1 << (tlangParser.EQ - 31)) | (1 << (tlangParser.NEQ - 31)) | (1 << (tlangParser.LTE - 31)) | (1 << (tlangParser.GTE - 31)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    logicOp() {
        let _localctx = new LogicOpContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, tlangParser.RULE_logicOp);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 285;
                _la = this._input.LA(1);
                if (!(_la === tlangParser.AND || _la === tlangParser.OR)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    value() {
        let _localctx = new ValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, tlangParser.RULE_value);
        try {
            this.state = 291;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 287;
                        this.functionCall();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 288;
                        this.arrayAccess();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 289;
                        this.match(tlangParser.NUM);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 290;
                        this.match(tlangParser.VAR);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 27:
                return this.expression_sempred(_localctx, predIndex);
            case 32:
                return this.condition_sempred(_localctx, predIndex);
        }
        return true;
    }
    expression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 5);
            case 1:
                return this.precpred(this._ctx, 4);
            case 2:
                return this.precpred(this._ctx, 3);
        }
        return true;
    }
    condition_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 3:
                return this.precpred(this._ctx, 3);
        }
        return true;
    }
    static get _ATN() {
        if (!tlangParser.__ATN) {
            tlangParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(tlangParser._serializedATN));
        }
        return tlangParser.__ATN;
    }
}
exports.tlangParser = tlangParser;
tlangParser.T__0 = 1;
tlangParser.T__1 = 2;
tlangParser.T__2 = 3;
tlangParser.T__3 = 4;
tlangParser.T__4 = 5;
tlangParser.T__5 = 6;
tlangParser.T__6 = 7;
tlangParser.T__7 = 8;
tlangParser.T__8 = 9;
tlangParser.T__9 = 10;
tlangParser.T__10 = 11;
tlangParser.T__11 = 12;
tlangParser.T__12 = 13;
tlangParser.T__13 = 14;
tlangParser.T__14 = 15;
tlangParser.T__15 = 16;
tlangParser.T__16 = 17;
tlangParser.T__17 = 18;
tlangParser.T__18 = 19;
tlangParser.T__19 = 20;
tlangParser.T__20 = 21;
tlangParser.T__21 = 22;
tlangParser.T__22 = 23;
tlangParser.PLUS = 24;
tlangParser.MINUS = 25;
tlangParser.MUL = 26;
tlangParser.DIV = 27;
tlangParser.MOD = 28;
tlangParser.EXPO = 29;
tlangParser.PENCOND = 30;
tlangParser.LT = 31;
tlangParser.GT = 32;
tlangParser.EQ = 33;
tlangParser.NEQ = 34;
tlangParser.LTE = 35;
tlangParser.GTE = 36;
tlangParser.AND = 37;
tlangParser.OR = 38;
tlangParser.NOT = 39;
tlangParser.NUM = 40;
tlangParser.VAR = 41;
tlangParser.NAME = 42;
tlangParser.STRING = 43;
tlangParser.Whitespace = 44;
tlangParser.RULE_start = 0;
tlangParser.RULE_instruction_list = 1;
tlangParser.RULE_strict_ilist = 2;
tlangParser.RULE_instruction = 3;
tlangParser.RULE_assignment = 4;
tlangParser.RULE_arrayAssignment = 5;
tlangParser.RULE_conditional = 6;
tlangParser.RULE_ifConditional = 7;
tlangParser.RULE_ifElseConditional = 8;
tlangParser.RULE_loop = 9;
tlangParser.RULE_moveCommand = 10;
tlangParser.RULE_moveOp = 11;
tlangParser.RULE_penCommand = 12;
tlangParser.RULE_gotoCommand = 13;
tlangParser.RULE_pauseCommand = 14;
tlangParser.RULE_printfCommand = 15;
tlangParser.RULE_printArg = 16;
tlangParser.RULE_printList = 17;
tlangParser.RULE_functionDecl = 18;
tlangParser.RULE_paramList = 19;
tlangParser.RULE_functionCallCommand = 20;
tlangParser.RULE_functionCall = 21;
tlangParser.RULE_argList = 22;
tlangParser.RULE_returnCommand = 23;
tlangParser.RULE_arrayDecl = 24;
tlangParser.RULE_arrayAccessCommand = 25;
tlangParser.RULE_arrayAccess = 26;
tlangParser.RULE_expression = 27;
tlangParser.RULE_exponentiative = 28;
tlangParser.RULE_multiplicative = 29;
tlangParser.RULE_additive = 30;
tlangParser.RULE_unaryArithOp = 31;
tlangParser.RULE_condition = 32;
tlangParser.RULE_binCondOp = 33;
tlangParser.RULE_logicOp = 34;
tlangParser.RULE_value = 35;
// tslint:disable:no-trailing-whitespace
tlangParser.ruleNames = [
    "start", "instruction_list", "strict_ilist", "instruction", "assignment",
    "arrayAssignment", "conditional", "ifConditional", "ifElseConditional",
    "loop", "moveCommand", "moveOp", "penCommand", "gotoCommand", "pauseCommand",
    "printfCommand", "printArg", "printList", "functionDecl", "paramList",
    "functionCallCommand", "functionCall", "argList", "returnCommand", "arrayDecl",
    "arrayAccessCommand", "arrayAccess", "expression", "exponentiative", "multiplicative",
    "additive", "unaryArithOp", "condition", "binCondOp", "logicOp", "value",
];
tlangParser._LITERAL_NAMES = [
    undefined, "'='", "'{'", "'}'", "'if'", "'['", "']'", "'else'", "'repeat'",
    "'forward'", "'backward'", "'left'", "'right'", "'penup'", "'pendown'",
    "'goto'", "'('", "','", "')'", "'pause'", "'printf'", "'function'", "'return'",
    "'array'", "'+'", "'-'", "'*'", "'/'", "'%'", "'**'", "'pendown?'", "'<'",
    "'>'", "'=='", "'!='", "'<='", "'>='", "'&&'", "'||'", "'!'",
];
tlangParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, "PLUS", "MINUS", "MUL", "DIV", "MOD",
    "EXPO", "PENCOND", "LT", "GT", "EQ", "NEQ", "LTE", "GTE", "AND", "OR",
    "NOT", "NUM", "VAR", "NAME", "STRING", "Whitespace",
];
tlangParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(tlangParser._LITERAL_NAMES, tlangParser._SYMBOLIC_NAMES, []);
tlangParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03.\u0128\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
    "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
    "\t#\x04$\t$\x04%\t%\x03\x02\x03\x02\x03\x02\x03\x03\x07\x03O\n\x03\f\x03" +
    "\x0E\x03R\v\x03\x03\x04\x06\x04U\n\x04\r\x04\x0E\x04V\x03\x05\x03\x05" +
    "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
    "\x03\x05\x03\x05\x03\x05\x05\x05g\n\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
    "\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x05" +
    "\bv\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03" +
    "\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
    "\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03" +
    "\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03" +
    "\x11\x03\x11\x03\x12\x03\x12\x05\x12\xA5\n\x12\x03\x13\x03\x13\x03\x13" +
    "\x07\x13\xAA\n\x13\f\x13\x0E\x13\xAD\v\x13\x03\x14\x03\x14\x03\x14\x03" +
    "\x14\x05\x14\xB3\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15" +
    "\x03\x15\x03\x15\x07\x15\xBD\n\x15\f\x15\x0E\x15\xC0\v\x15\x03\x16\x03" +
    "\x16\x03\x17\x03\x17\x03\x17\x05\x17\xC7\n\x17\x03\x17\x03\x17\x03\x18" +
    "\x03\x18\x03\x18\x07\x18\xCE\n\x18\f\x18\x0E\x18\xD1\v\x18\x03\x19\x03" +
    "\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03" +
    "\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03" +
    "\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\xEC\n\x1D\x03\x1D" +
    "\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
    "\x03\x1D\x03\x1D\x07\x1D\xFA\n\x1D\f\x1D\x0E\x1D\xFD\v\x1D\x03\x1E\x03" +
    "\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"" +
    "\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u0113\n\"\x03\"\x03\"" +
    "\x03\"\x03\"\x07\"\u0119\n\"\f\"\x0E\"\u011C\v\"\x03#\x03#\x03$\x03$\x03" +
    "%\x03%\x03%\x03%\x05%\u0126\n%\x03%\x02\x02\x048B&\x02\x02\x04\x02\x06" +
    "\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
    "\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
    "2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02\x02\b\x03" +
    "\x02\v\x0E\x03\x02\x0F\x10\x03\x02\x1C\x1E\x03\x02\x1A\x1B\x03\x02!&\x03" +
    "\x02\'(\x02\u0125\x02J\x03\x02\x02\x02\x04P\x03\x02\x02\x02\x06T\x03\x02" +
    "\x02\x02\bf\x03\x02\x02\x02\nh\x03\x02\x02\x02\fl\x03\x02\x02\x02\x0E" +
    "u\x03\x02\x02\x02\x10w\x03\x02\x02\x02\x12}\x03\x02\x02\x02\x14\x87\x03" +
    "\x02\x02\x02\x16\x8D\x03\x02\x02\x02\x18\x90\x03\x02\x02\x02\x1A\x92\x03" +
    "\x02\x02\x02\x1C\x94\x03\x02\x02\x02\x1E\x9B\x03\x02\x02\x02 \x9D\x03" +
    "\x02\x02\x02\"\xA4\x03\x02\x02\x02$\xA6\x03\x02\x02\x02&\xAE\x03\x02\x02" +
    "\x02(\xB9\x03\x02\x02\x02*\xC1\x03\x02\x02\x02,\xC3\x03\x02\x02\x02.\xCA" +
    "\x03\x02\x02\x020\xD2\x03\x02\x02\x022\xD5\x03\x02\x02\x024\xDB\x03\x02" +
    "\x02\x026\xDD\x03\x02\x02\x028\xEB\x03\x02\x02\x02:\xFE\x03\x02\x02\x02" +
    "<\u0100\x03\x02\x02\x02>\u0102\x03\x02\x02\x02@\u0104\x03\x02\x02\x02" +
    "B\u0112\x03\x02\x02\x02D\u011D\x03\x02\x02\x02F\u011F\x03\x02\x02\x02" +
    "H\u0125\x03\x02\x02\x02JK\x05\x04\x03\x02KL\x07\x02\x02\x03L\x03\x03\x02" +
    "\x02\x02MO\x05\b\x05\x02NM\x03\x02\x02\x02OR\x03\x02\x02\x02PN\x03\x02" +
    "\x02\x02PQ\x03\x02\x02\x02Q\x05\x03\x02\x02\x02RP\x03\x02\x02\x02SU\x05" +
    "\b\x05\x02TS\x03\x02\x02\x02UV\x03\x02\x02\x02VT\x03\x02\x02\x02VW\x03" +
    "\x02\x02\x02W\x07\x03\x02\x02\x02Xg\x05\n\x06\x02Yg\x05\f\x07\x02Zg\x05" +
    "\x0E\b\x02[g\x05\x14\v\x02\\g\x05\x16\f\x02]g\x05\x1A\x0E\x02^g\x05\x1C" +
    "\x0F\x02_g\x05\x1E\x10\x02`g\x05 \x11\x02ag\x05&\x14\x02bg\x050\x19\x02" +
    "cg\x05*\x16\x02dg\x052\x1A\x02eg\x054\x1B\x02fX\x03\x02\x02\x02fY\x03" +
    "\x02\x02\x02fZ\x03\x02\x02\x02f[\x03\x02\x02\x02f\\\x03\x02\x02\x02f]" +
    "\x03\x02\x02\x02f^\x03\x02\x02\x02f_\x03\x02\x02\x02f`\x03\x02\x02\x02" +
    "fa\x03\x02\x02\x02fb\x03\x02\x02\x02fc\x03\x02\x02\x02fd\x03\x02\x02\x02" +
    "fe\x03\x02\x02\x02g\t\x03\x02\x02\x02hi\x07+\x02\x02ij\x07\x03\x02\x02" +
    "jk\x058\x1D\x02k\v\x03\x02\x02\x02lm\x07+\x02\x02mn\x07\x04\x02\x02no" +
    "\x058\x1D\x02op\x07\x05\x02\x02pq\x07\x03\x02\x02qr\x058\x1D\x02r\r\x03" +
    "\x02\x02\x02sv\x05\x10\t\x02tv\x05\x12\n\x02us\x03\x02\x02\x02ut\x03\x02" +
    "\x02\x02v\x0F\x03\x02\x02\x02wx\x07\x06\x02\x02xy\x05B\"\x02yz\x07\x07" +
    "\x02\x02z{\x05\x06\x04\x02{|\x07\b\x02\x02|\x11\x03\x02\x02\x02}~\x07" +
    "\x06\x02\x02~\x7F\x05B\"\x02\x7F\x80\x07\x07\x02\x02\x80\x81\x05\x06\x04" +
    "\x02\x81\x82\x07\b\x02\x02\x82\x83\x07\t\x02\x02\x83\x84\x07\x07\x02\x02" +
    "\x84\x85\x05\x06\x04\x02\x85\x86\x07\b\x02\x02\x86\x13\x03\x02\x02\x02" +
    "\x87\x88\x07\n\x02\x02\x88\x89\x05H%\x02\x89\x8A\x07\x07\x02\x02\x8A\x8B" +
    "\x05\x06\x04\x02\x8B\x8C\x07\b\x02\x02\x8C\x15\x03\x02\x02\x02\x8D\x8E" +
    "\x05\x18\r\x02\x8E\x8F\x058\x1D\x02\x8F\x17\x03\x02\x02\x02\x90\x91\t" +
    "\x02\x02\x02\x91\x19\x03\x02\x02\x02\x92\x93\t\x03\x02\x02\x93\x1B\x03" +
    "\x02\x02\x02\x94\x95\x07\x11\x02\x02\x95\x96\x07\x12\x02\x02\x96\x97\x05" +
    "8\x1D\x02\x97\x98\x07\x13\x02\x02\x98\x99\x058\x1D\x02\x99\x9A\x07\x14" +
    "\x02\x02\x9A\x1D\x03\x02\x02\x02\x9B\x9C\x07\x15\x02\x02\x9C\x1F\x03\x02" +
    "\x02\x02\x9D\x9E\x07\x16\x02\x02\x9E\x9F\x07\x12\x02\x02\x9F\xA0\x05$" +
    "\x13\x02\xA0\xA1\x07\x14\x02\x02\xA1!\x03\x02\x02\x02\xA2\xA5\x058\x1D" +
    "\x02\xA3\xA5\x07-\x02\x02\xA4\xA2\x03\x02\x02\x02\xA4\xA3\x03\x02\x02" +
    "\x02\xA5#\x03\x02\x02\x02\xA6\xAB\x05\"\x12\x02\xA7\xA8\x07\x13\x02\x02" +
    "\xA8\xAA\x05\"\x12\x02\xA9\xA7\x03\x02\x02\x02\xAA\xAD\x03\x02\x02\x02" +
    "\xAB\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC%\x03\x02\x02\x02" +
    "\xAD\xAB\x03\x02\x02\x02\xAE\xAF\x07\x17\x02\x02\xAF\xB0\x07,\x02\x02" +
    "\xB0\xB2\x07\x12\x02\x02\xB1\xB3\x05(\x15\x02\xB2\xB1\x03\x02\x02\x02" +
    "\xB2\xB3\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB5\x07\x14\x02\x02" +
    "\xB5\xB6\x07\x07\x02\x02\xB6\xB7\x05\x06\x04\x02\xB7\xB8\x07\b\x02\x02" +
    "\xB8\'\x03\x02\x02\x02\xB9\xBE\x07+\x02\x02\xBA\xBB\x07\x13\x02\x02\xBB" +
    "\xBD\x07+\x02\x02\xBC\xBA\x03\x02\x02\x02\xBD\xC0\x03\x02\x02\x02\xBE" +
    "\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF)\x03\x02\x02\x02\xC0" +
    "\xBE\x03\x02\x02\x02\xC1\xC2\x05,\x17\x02\xC2+\x03\x02\x02\x02\xC3\xC4" +
    "\x07,\x02\x02\xC4\xC6\x07\x12\x02\x02\xC5\xC7\x05.\x18\x02\xC6\xC5\x03" +
    "\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xC9\x07" +
    "\x14\x02\x02\xC9-\x03\x02\x02\x02\xCA\xCF\x058\x1D\x02\xCB\xCC\x07\x13" +
    "\x02\x02\xCC\xCE\x058\x1D\x02\xCD\xCB\x03\x02\x02\x02\xCE\xD1\x03\x02" +
    "\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0/\x03\x02" +
    "\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD3\x07\x18\x02\x02\xD3\xD4\x058" +
    "\x1D\x02\xD41\x03\x02\x02\x02\xD5\xD6\x07\x19\x02\x02\xD6\xD7\x07+\x02" +
    "\x02\xD7\xD8\x07\x04\x02\x02\xD8\xD9\x058\x1D\x02\xD9\xDA\x07\x05\x02" +
    "\x02\xDA3\x03\x02\x02\x02\xDB\xDC\x056\x1C\x02\xDC5\x03\x02\x02\x02\xDD" +
    "\xDE\x07+\x02\x02\xDE\xDF\x07\x04\x02\x02\xDF\xE0\x058\x1D\x02\xE0\xE1" +
    "\x07\x05\x02\x02\xE17\x03\x02\x02\x02\xE2\xE3\b\x1D\x01\x02\xE3\xE4\x05" +
    "@!\x02\xE4\xE5\x058\x1D\b\xE5\xEC\x03\x02\x02\x02\xE6\xEC\x05H%\x02\xE7" +
    "\xE8\x07\x12\x02\x02\xE8\xE9\x058\x1D\x02\xE9\xEA\x07\x14\x02\x02\xEA" +
    "\xEC\x03\x02\x02\x02\xEB\xE2\x03\x02\x02\x02\xEB\xE6\x03\x02\x02\x02\xEB" +
    "\xE7\x03\x02\x02\x02\xEC\xFB\x03\x02\x02\x02\xED\xEE\f\x07\x02\x02\xEE" +
    "\xEF\x05:\x1E\x02\xEF\xF0\x058\x1D\b\xF0\xFA\x03\x02\x02\x02\xF1\xF2\f" +
    "\x06\x02\x02\xF2\xF3\x05<\x1F\x02\xF3\xF4\x058\x1D\x07\xF4\xFA\x03\x02" +
    "\x02\x02\xF5\xF6\f\x05\x02\x02\xF6\xF7\x05> \x02\xF7\xF8\x058\x1D\x06" +
    "\xF8\xFA\x03\x02\x02\x02\xF9\xED\x03\x02\x02\x02\xF9\xF1\x03\x02\x02\x02" +
    "\xF9\xF5\x03\x02\x02\x02\xFA\xFD\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02" +
    "\xFB\xFC\x03\x02\x02\x02\xFC9\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02" +
    "\xFE\xFF\x07\x1F\x02\x02\xFF;\x03\x02\x02\x02\u0100\u0101\t\x04\x02\x02" +
    "\u0101=\x03\x02\x02\x02\u0102\u0103\t\x05\x02\x02\u0103?\x03\x02\x02\x02" +
    "\u0104\u0105\x07\x1B\x02\x02\u0105A\x03\x02\x02\x02\u0106\u0107\b\"\x01" +
    "\x02\u0107\u0108\x07)\x02\x02\u0108\u0113\x05B\"\x07\u0109\u010A\x058" +
    "\x1D\x02\u010A\u010B\x05D#\x02\u010B\u010C\x058\x1D\x02\u010C\u0113\x03" +
    "\x02\x02\x02\u010D\u0113\x07 \x02\x02\u010E\u010F\x07\x12\x02\x02\u010F" +
    "\u0110\x05B\"\x02\u0110\u0111\x07\x14\x02\x02\u0111\u0113\x03\x02\x02" +
    "\x02\u0112\u0106\x03\x02\x02\x02\u0112\u0109\x03\x02\x02\x02\u0112\u010D" +
    "\x03\x02\x02\x02\u0112\u010E\x03\x02\x02\x02\u0113\u011A\x03\x02\x02\x02" +
    "\u0114\u0115\f\x05\x02\x02\u0115\u0116\x05F$\x02\u0116\u0117\x05B\"\x06" +
    "\u0117\u0119\x03\x02\x02\x02\u0118\u0114\x03\x02\x02\x02\u0119\u011C\x03" +
    "\x02\x02\x02\u011A\u0118\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B" +
    "C\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011D\u011E\t\x06\x02\x02" +
    "\u011EE\x03\x02\x02\x02\u011F\u0120\t\x07\x02\x02\u0120G\x03\x02\x02\x02" +
    "\u0121\u0126\x05,\x17\x02\u0122\u0126\x056\x1C\x02\u0123\u0126\x07*\x02" +
    "\x02\u0124\u0126\x07+\x02\x02\u0125\u0121\x03\x02\x02\x02\u0125\u0122" +
    "\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02\u0125\u0124\x03\x02\x02\x02" +
    "\u0126I\x03\x02\x02\x02\x12PVfu\xA4\xAB\xB2\xBE\xC6\xCF\xEB\xF9\xFB\u0112" +
    "\u011A\u0125";
class StartContext extends ParserRuleContext_1.ParserRuleContext {
    instruction_list() {
        return this.getRuleContext(0, Instruction_listContext);
    }
    EOF() { return this.getToken(tlangParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_start; }
    // @Override
    enterRule(listener) {
        if (listener.enterStart) {
            listener.enterStart(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStart) {
            listener.exitStart(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStart) {
            return visitor.visitStart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StartContext = StartContext;
class Instruction_listContext extends ParserRuleContext_1.ParserRuleContext {
    instruction(i) {
        if (i === undefined) {
            return this.getRuleContexts(InstructionContext);
        }
        else {
            return this.getRuleContext(i, InstructionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_instruction_list; }
    // @Override
    enterRule(listener) {
        if (listener.enterInstruction_list) {
            listener.enterInstruction_list(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInstruction_list) {
            listener.exitInstruction_list(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInstruction_list) {
            return visitor.visitInstruction_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Instruction_listContext = Instruction_listContext;
class Strict_ilistContext extends ParserRuleContext_1.ParserRuleContext {
    instruction(i) {
        if (i === undefined) {
            return this.getRuleContexts(InstructionContext);
        }
        else {
            return this.getRuleContext(i, InstructionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_strict_ilist; }
    // @Override
    enterRule(listener) {
        if (listener.enterStrict_ilist) {
            listener.enterStrict_ilist(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStrict_ilist) {
            listener.exitStrict_ilist(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStrict_ilist) {
            return visitor.visitStrict_ilist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Strict_ilistContext = Strict_ilistContext;
class InstructionContext extends ParserRuleContext_1.ParserRuleContext {
    assignment() {
        return this.tryGetRuleContext(0, AssignmentContext);
    }
    arrayAssignment() {
        return this.tryGetRuleContext(0, ArrayAssignmentContext);
    }
    conditional() {
        return this.tryGetRuleContext(0, ConditionalContext);
    }
    loop() {
        return this.tryGetRuleContext(0, LoopContext);
    }
    moveCommand() {
        return this.tryGetRuleContext(0, MoveCommandContext);
    }
    penCommand() {
        return this.tryGetRuleContext(0, PenCommandContext);
    }
    gotoCommand() {
        return this.tryGetRuleContext(0, GotoCommandContext);
    }
    pauseCommand() {
        return this.tryGetRuleContext(0, PauseCommandContext);
    }
    printfCommand() {
        return this.tryGetRuleContext(0, PrintfCommandContext);
    }
    functionDecl() {
        return this.tryGetRuleContext(0, FunctionDeclContext);
    }
    returnCommand() {
        return this.tryGetRuleContext(0, ReturnCommandContext);
    }
    functionCallCommand() {
        return this.tryGetRuleContext(0, FunctionCallCommandContext);
    }
    arrayDecl() {
        return this.tryGetRuleContext(0, ArrayDeclContext);
    }
    arrayAccessCommand() {
        return this.tryGetRuleContext(0, ArrayAccessCommandContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_instruction; }
    // @Override
    enterRule(listener) {
        if (listener.enterInstruction) {
            listener.enterInstruction(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInstruction) {
            listener.exitInstruction(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInstruction) {
            return visitor.visitInstruction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InstructionContext = InstructionContext;
class AssignmentContext extends ParserRuleContext_1.ParserRuleContext {
    VAR() { return this.getToken(tlangParser.VAR, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_assignment; }
    // @Override
    enterRule(listener) {
        if (listener.enterAssignment) {
            listener.enterAssignment(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAssignment) {
            listener.exitAssignment(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignment) {
            return visitor.visitAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AssignmentContext = AssignmentContext;
class ArrayAssignmentContext extends ParserRuleContext_1.ParserRuleContext {
    VAR() { return this.getToken(tlangParser.VAR, 0); }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_arrayAssignment; }
    // @Override
    enterRule(listener) {
        if (listener.enterArrayAssignment) {
            listener.enterArrayAssignment(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArrayAssignment) {
            listener.exitArrayAssignment(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArrayAssignment) {
            return visitor.visitArrayAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArrayAssignmentContext = ArrayAssignmentContext;
class ConditionalContext extends ParserRuleContext_1.ParserRuleContext {
    ifConditional() {
        return this.tryGetRuleContext(0, IfConditionalContext);
    }
    ifElseConditional() {
        return this.tryGetRuleContext(0, IfElseConditionalContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_conditional; }
    // @Override
    enterRule(listener) {
        if (listener.enterConditional) {
            listener.enterConditional(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConditional) {
            listener.exitConditional(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConditional) {
            return visitor.visitConditional(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConditionalContext = ConditionalContext;
class IfConditionalContext extends ParserRuleContext_1.ParserRuleContext {
    condition() {
        return this.getRuleContext(0, ConditionContext);
    }
    strict_ilist() {
        return this.getRuleContext(0, Strict_ilistContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_ifConditional; }
    // @Override
    enterRule(listener) {
        if (listener.enterIfConditional) {
            listener.enterIfConditional(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIfConditional) {
            listener.exitIfConditional(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIfConditional) {
            return visitor.visitIfConditional(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IfConditionalContext = IfConditionalContext;
class IfElseConditionalContext extends ParserRuleContext_1.ParserRuleContext {
    condition() {
        return this.getRuleContext(0, ConditionContext);
    }
    strict_ilist(i) {
        if (i === undefined) {
            return this.getRuleContexts(Strict_ilistContext);
        }
        else {
            return this.getRuleContext(i, Strict_ilistContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_ifElseConditional; }
    // @Override
    enterRule(listener) {
        if (listener.enterIfElseConditional) {
            listener.enterIfElseConditional(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIfElseConditional) {
            listener.exitIfElseConditional(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIfElseConditional) {
            return visitor.visitIfElseConditional(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IfElseConditionalContext = IfElseConditionalContext;
class LoopContext extends ParserRuleContext_1.ParserRuleContext {
    value() {
        return this.getRuleContext(0, ValueContext);
    }
    strict_ilist() {
        return this.getRuleContext(0, Strict_ilistContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_loop; }
    // @Override
    enterRule(listener) {
        if (listener.enterLoop) {
            listener.enterLoop(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLoop) {
            listener.exitLoop(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLoop) {
            return visitor.visitLoop(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LoopContext = LoopContext;
class MoveCommandContext extends ParserRuleContext_1.ParserRuleContext {
    moveOp() {
        return this.getRuleContext(0, MoveOpContext);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_moveCommand; }
    // @Override
    enterRule(listener) {
        if (listener.enterMoveCommand) {
            listener.enterMoveCommand(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMoveCommand) {
            listener.exitMoveCommand(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMoveCommand) {
            return visitor.visitMoveCommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MoveCommandContext = MoveCommandContext;
class MoveOpContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_moveOp; }
    // @Override
    enterRule(listener) {
        if (listener.enterMoveOp) {
            listener.enterMoveOp(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMoveOp) {
            listener.exitMoveOp(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMoveOp) {
            return visitor.visitMoveOp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MoveOpContext = MoveOpContext;
class PenCommandContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_penCommand; }
    // @Override
    enterRule(listener) {
        if (listener.enterPenCommand) {
            listener.enterPenCommand(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPenCommand) {
            listener.exitPenCommand(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPenCommand) {
            return visitor.visitPenCommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PenCommandContext = PenCommandContext;
class GotoCommandContext extends ParserRuleContext_1.ParserRuleContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_gotoCommand; }
    // @Override
    enterRule(listener) {
        if (listener.enterGotoCommand) {
            listener.enterGotoCommand(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGotoCommand) {
            listener.exitGotoCommand(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGotoCommand) {
            return visitor.visitGotoCommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GotoCommandContext = GotoCommandContext;
class PauseCommandContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_pauseCommand; }
    // @Override
    enterRule(listener) {
        if (listener.enterPauseCommand) {
            listener.enterPauseCommand(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPauseCommand) {
            listener.exitPauseCommand(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPauseCommand) {
            return visitor.visitPauseCommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PauseCommandContext = PauseCommandContext;
class PrintfCommandContext extends ParserRuleContext_1.ParserRuleContext {
    printList() {
        return this.getRuleContext(0, PrintListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_printfCommand; }
    // @Override
    enterRule(listener) {
        if (listener.enterPrintfCommand) {
            listener.enterPrintfCommand(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPrintfCommand) {
            listener.exitPrintfCommand(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPrintfCommand) {
            return visitor.visitPrintfCommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PrintfCommandContext = PrintfCommandContext;
class PrintArgContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    STRING() { return this.tryGetToken(tlangParser.STRING, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_printArg; }
    // @Override
    enterRule(listener) {
        if (listener.enterPrintArg) {
            listener.enterPrintArg(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPrintArg) {
            listener.exitPrintArg(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPrintArg) {
            return visitor.visitPrintArg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PrintArgContext = PrintArgContext;
class PrintListContext extends ParserRuleContext_1.ParserRuleContext {
    printArg(i) {
        if (i === undefined) {
            return this.getRuleContexts(PrintArgContext);
        }
        else {
            return this.getRuleContext(i, PrintArgContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_printList; }
    // @Override
    enterRule(listener) {
        if (listener.enterPrintList) {
            listener.enterPrintList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPrintList) {
            listener.exitPrintList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPrintList) {
            return visitor.visitPrintList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PrintListContext = PrintListContext;
class FunctionDeclContext extends ParserRuleContext_1.ParserRuleContext {
    NAME() { return this.getToken(tlangParser.NAME, 0); }
    strict_ilist() {
        return this.getRuleContext(0, Strict_ilistContext);
    }
    paramList() {
        return this.tryGetRuleContext(0, ParamListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_functionDecl; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionDecl) {
            listener.enterFunctionDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionDecl) {
            listener.exitFunctionDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionDecl) {
            return visitor.visitFunctionDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunctionDeclContext = FunctionDeclContext;
class ParamListContext extends ParserRuleContext_1.ParserRuleContext {
    VAR(i) {
        if (i === undefined) {
            return this.getTokens(tlangParser.VAR);
        }
        else {
            return this.getToken(tlangParser.VAR, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_paramList; }
    // @Override
    enterRule(listener) {
        if (listener.enterParamList) {
            listener.enterParamList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParamList) {
            listener.exitParamList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParamList) {
            return visitor.visitParamList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParamListContext = ParamListContext;
class FunctionCallCommandContext extends ParserRuleContext_1.ParserRuleContext {
    functionCall() {
        return this.getRuleContext(0, FunctionCallContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_functionCallCommand; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionCallCommand) {
            listener.enterFunctionCallCommand(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionCallCommand) {
            listener.exitFunctionCallCommand(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionCallCommand) {
            return visitor.visitFunctionCallCommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunctionCallCommandContext = FunctionCallCommandContext;
class FunctionCallContext extends ParserRuleContext_1.ParserRuleContext {
    NAME() { return this.getToken(tlangParser.NAME, 0); }
    argList() {
        return this.tryGetRuleContext(0, ArgListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_functionCall; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionCall) {
            listener.enterFunctionCall(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionCall) {
            listener.exitFunctionCall(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionCall) {
            return visitor.visitFunctionCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunctionCallContext = FunctionCallContext;
class ArgListContext extends ParserRuleContext_1.ParserRuleContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_argList; }
    // @Override
    enterRule(listener) {
        if (listener.enterArgList) {
            listener.enterArgList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArgList) {
            listener.exitArgList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArgList) {
            return visitor.visitArgList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArgListContext = ArgListContext;
class ReturnCommandContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_returnCommand; }
    // @Override
    enterRule(listener) {
        if (listener.enterReturnCommand) {
            listener.enterReturnCommand(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitReturnCommand) {
            listener.exitReturnCommand(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitReturnCommand) {
            return visitor.visitReturnCommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ReturnCommandContext = ReturnCommandContext;
class ArrayDeclContext extends ParserRuleContext_1.ParserRuleContext {
    VAR() { return this.getToken(tlangParser.VAR, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_arrayDecl; }
    // @Override
    enterRule(listener) {
        if (listener.enterArrayDecl) {
            listener.enterArrayDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArrayDecl) {
            listener.exitArrayDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArrayDecl) {
            return visitor.visitArrayDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArrayDeclContext = ArrayDeclContext;
class ArrayAccessCommandContext extends ParserRuleContext_1.ParserRuleContext {
    arrayAccess() {
        return this.getRuleContext(0, ArrayAccessContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_arrayAccessCommand; }
    // @Override
    enterRule(listener) {
        if (listener.enterArrayAccessCommand) {
            listener.enterArrayAccessCommand(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArrayAccessCommand) {
            listener.exitArrayAccessCommand(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArrayAccessCommand) {
            return visitor.visitArrayAccessCommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArrayAccessCommandContext = ArrayAccessCommandContext;
class ArrayAccessContext extends ParserRuleContext_1.ParserRuleContext {
    VAR() { return this.getToken(tlangParser.VAR, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_arrayAccess; }
    // @Override
    enterRule(listener) {
        if (listener.enterArrayAccess) {
            listener.enterArrayAccess(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArrayAccess) {
            listener.exitArrayAccess(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArrayAccess) {
            return visitor.visitArrayAccess(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArrayAccessContext = ArrayAccessContext;
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_expression; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.ExpressionContext = ExpressionContext;
class UnaryExprContext extends ExpressionContext {
    unaryArithOp() {
        return this.getRuleContext(0, UnaryArithOpContext);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterUnaryExpr) {
            listener.enterUnaryExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnaryExpr) {
            listener.exitUnaryExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnaryExpr) {
            return visitor.visitUnaryExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnaryExprContext = UnaryExprContext;
class ExpoExprContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    exponentiative() {
        return this.getRuleContext(0, ExponentiativeContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpoExpr) {
            listener.enterExpoExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpoExpr) {
            listener.exitExpoExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpoExpr) {
            return visitor.visitExpoExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpoExprContext = ExpoExprContext;
class MulExprContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    multiplicative() {
        return this.getRuleContext(0, MultiplicativeContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterMulExpr) {
            listener.enterMulExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMulExpr) {
            listener.exitMulExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMulExpr) {
            return visitor.visitMulExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MulExprContext = MulExprContext;
class AddExprContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    additive() {
        return this.getRuleContext(0, AdditiveContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAddExpr) {
            listener.enterAddExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAddExpr) {
            listener.exitAddExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAddExpr) {
            return visitor.visitAddExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AddExprContext = AddExprContext;
class ValueExprContext extends ExpressionContext {
    value() {
        return this.getRuleContext(0, ValueContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterValueExpr) {
            listener.enterValueExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitValueExpr) {
            listener.exitValueExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitValueExpr) {
            return visitor.visitValueExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ValueExprContext = ValueExprContext;
class ParenExprContext extends ExpressionContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterParenExpr) {
            listener.enterParenExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParenExpr) {
            listener.exitParenExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParenExpr) {
            return visitor.visitParenExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParenExprContext = ParenExprContext;
class ExponentiativeContext extends ParserRuleContext_1.ParserRuleContext {
    EXPO() { return this.getToken(tlangParser.EXPO, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_exponentiative; }
    // @Override
    enterRule(listener) {
        if (listener.enterExponentiative) {
            listener.enterExponentiative(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExponentiative) {
            listener.exitExponentiative(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExponentiative) {
            return visitor.visitExponentiative(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExponentiativeContext = ExponentiativeContext;
class MultiplicativeContext extends ParserRuleContext_1.ParserRuleContext {
    MUL() { return this.tryGetToken(tlangParser.MUL, 0); }
    DIV() { return this.tryGetToken(tlangParser.DIV, 0); }
    MOD() { return this.tryGetToken(tlangParser.MOD, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_multiplicative; }
    // @Override
    enterRule(listener) {
        if (listener.enterMultiplicative) {
            listener.enterMultiplicative(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMultiplicative) {
            listener.exitMultiplicative(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMultiplicative) {
            return visitor.visitMultiplicative(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MultiplicativeContext = MultiplicativeContext;
class AdditiveContext extends ParserRuleContext_1.ParserRuleContext {
    PLUS() { return this.tryGetToken(tlangParser.PLUS, 0); }
    MINUS() { return this.tryGetToken(tlangParser.MINUS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_additive; }
    // @Override
    enterRule(listener) {
        if (listener.enterAdditive) {
            listener.enterAdditive(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAdditive) {
            listener.exitAdditive(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAdditive) {
            return visitor.visitAdditive(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AdditiveContext = AdditiveContext;
class UnaryArithOpContext extends ParserRuleContext_1.ParserRuleContext {
    MINUS() { return this.getToken(tlangParser.MINUS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_unaryArithOp; }
    // @Override
    enterRule(listener) {
        if (listener.enterUnaryArithOp) {
            listener.enterUnaryArithOp(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnaryArithOp) {
            listener.exitUnaryArithOp(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnaryArithOp) {
            return visitor.visitUnaryArithOp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnaryArithOpContext = UnaryArithOpContext;
class ConditionContext extends ParserRuleContext_1.ParserRuleContext {
    NOT() { return this.tryGetToken(tlangParser.NOT, 0); }
    condition(i) {
        if (i === undefined) {
            return this.getRuleContexts(ConditionContext);
        }
        else {
            return this.getRuleContext(i, ConditionContext);
        }
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    binCondOp() {
        return this.tryGetRuleContext(0, BinCondOpContext);
    }
    logicOp() {
        return this.tryGetRuleContext(0, LogicOpContext);
    }
    PENCOND() { return this.tryGetToken(tlangParser.PENCOND, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_condition; }
    // @Override
    enterRule(listener) {
        if (listener.enterCondition) {
            listener.enterCondition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCondition) {
            listener.exitCondition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCondition) {
            return visitor.visitCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConditionContext = ConditionContext;
class BinCondOpContext extends ParserRuleContext_1.ParserRuleContext {
    EQ() { return this.tryGetToken(tlangParser.EQ, 0); }
    NEQ() { return this.tryGetToken(tlangParser.NEQ, 0); }
    LT() { return this.tryGetToken(tlangParser.LT, 0); }
    GT() { return this.tryGetToken(tlangParser.GT, 0); }
    LTE() { return this.tryGetToken(tlangParser.LTE, 0); }
    GTE() { return this.tryGetToken(tlangParser.GTE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_binCondOp; }
    // @Override
    enterRule(listener) {
        if (listener.enterBinCondOp) {
            listener.enterBinCondOp(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBinCondOp) {
            listener.exitBinCondOp(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBinCondOp) {
            return visitor.visitBinCondOp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BinCondOpContext = BinCondOpContext;
class LogicOpContext extends ParserRuleContext_1.ParserRuleContext {
    AND() { return this.tryGetToken(tlangParser.AND, 0); }
    OR() { return this.tryGetToken(tlangParser.OR, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_logicOp; }
    // @Override
    enterRule(listener) {
        if (listener.enterLogicOp) {
            listener.enterLogicOp(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLogicOp) {
            listener.exitLogicOp(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLogicOp) {
            return visitor.visitLogicOp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LogicOpContext = LogicOpContext;
class ValueContext extends ParserRuleContext_1.ParserRuleContext {
    functionCall() {
        return this.tryGetRuleContext(0, FunctionCallContext);
    }
    arrayAccess() {
        return this.tryGetRuleContext(0, ArrayAccessContext);
    }
    NUM() { return this.tryGetToken(tlangParser.NUM, 0); }
    VAR() { return this.tryGetToken(tlangParser.VAR, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return tlangParser.RULE_value; }
    // @Override
    enterRule(listener) {
        if (listener.enterValue) {
            listener.enterValue(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitValue) {
            listener.exitValue(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitValue) {
            return visitor.visitValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ValueContext = ValueContext;
