// Generated from server/grammar/tlang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { tlangListener } from "./tlangListener";
import { tlangVisitor } from "./tlangVisitor";


export class tlangParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly PLUS = 24;
	public static readonly MINUS = 25;
	public static readonly MUL = 26;
	public static readonly DIV = 27;
	public static readonly MOD = 28;
	public static readonly EXPO = 29;
	public static readonly PENCOND = 30;
	public static readonly LT = 31;
	public static readonly GT = 32;
	public static readonly EQ = 33;
	public static readonly NEQ = 34;
	public static readonly LTE = 35;
	public static readonly GTE = 36;
	public static readonly AND = 37;
	public static readonly OR = 38;
	public static readonly NOT = 39;
	public static readonly NUM = 40;
	public static readonly VAR = 41;
	public static readonly NAME = 42;
	public static readonly STRING = 43;
	public static readonly Whitespace = 44;
	public static readonly RULE_start = 0;
	public static readonly RULE_instruction_list = 1;
	public static readonly RULE_strict_ilist = 2;
	public static readonly RULE_instruction = 3;
	public static readonly RULE_assignment = 4;
	public static readonly RULE_arrayAssignment = 5;
	public static readonly RULE_conditional = 6;
	public static readonly RULE_ifConditional = 7;
	public static readonly RULE_ifElseConditional = 8;
	public static readonly RULE_loop = 9;
	public static readonly RULE_moveCommand = 10;
	public static readonly RULE_moveOp = 11;
	public static readonly RULE_penCommand = 12;
	public static readonly RULE_gotoCommand = 13;
	public static readonly RULE_pauseCommand = 14;
	public static readonly RULE_printfCommand = 15;
	public static readonly RULE_printArg = 16;
	public static readonly RULE_printList = 17;
	public static readonly RULE_functionDecl = 18;
	public static readonly RULE_paramList = 19;
	public static readonly RULE_functionCallCommand = 20;
	public static readonly RULE_functionCall = 21;
	public static readonly RULE_argList = 22;
	public static readonly RULE_returnCommand = 23;
	public static readonly RULE_arrayDecl = 24;
	public static readonly RULE_arrayAccessCommand = 25;
	public static readonly RULE_arrayAccess = 26;
	public static readonly RULE_expression = 27;
	public static readonly RULE_exponentiative = 28;
	public static readonly RULE_multiplicative = 29;
	public static readonly RULE_additive = 30;
	public static readonly RULE_unaryArithOp = 31;
	public static readonly RULE_condition = 32;
	public static readonly RULE_binCondOp = 33;
	public static readonly RULE_logicOp = 34;
	public static readonly RULE_value = 35;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "instruction_list", "strict_ilist", "instruction", "assignment", 
		"arrayAssignment", "conditional", "ifConditional", "ifElseConditional", 
		"loop", "moveCommand", "moveOp", "penCommand", "gotoCommand", "pauseCommand", 
		"printfCommand", "printArg", "printList", "functionDecl", "paramList", 
		"functionCallCommand", "functionCall", "argList", "returnCommand", "arrayDecl", 
		"arrayAccessCommand", "arrayAccess", "expression", "exponentiative", "multiplicative", 
		"additive", "unaryArithOp", "condition", "binCondOp", "logicOp", "value",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='", "'{'", "'}'", "'if'", "'['", "']'", "'else'", "'repeat'", 
		"'forward'", "'backward'", "'left'", "'right'", "'penup'", "'pendown'", 
		"'goto'", "'('", "','", "')'", "'pause'", "'printf'", "'function'", "'return'", 
		"'array'", "'+'", "'-'", "'*'", "'/'", "'%'", "'**'", "'pendown?'", "'<'", 
		"'>'", "'=='", "'!='", "'<='", "'>='", "'&&'", "'||'", "'!'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "PLUS", "MINUS", "MUL", "DIV", "MOD", 
		"EXPO", "PENCOND", "LT", "GT", "EQ", "NEQ", "LTE", "GTE", "AND", "OR", 
		"NOT", "NUM", "VAR", "NAME", "STRING", "Whitespace",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(tlangParser._LITERAL_NAMES, tlangParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return tlangParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "tlang.g4"; }

	// @Override
	public get ruleNames(): string[] { return tlangParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return tlangParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(tlangParser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction_list(): Instruction_listContext {
		let _localctx: Instruction_listContext = new Instruction_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, tlangParser.RULE_instruction_list);
		let _la: number;
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public strict_ilist(): Strict_ilistContext {
		let _localctx: Strict_ilistContext = new Strict_ilistContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, tlangParser.RULE_strict_ilist);
		let _la: number;
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction(): InstructionContext {
		let _localctx: InstructionContext = new InstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, tlangParser.RULE_instruction);
		try {
			this.state = 100;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayAssignment(): ArrayAssignmentContext {
		let _localctx: ArrayAssignmentContext = new ArrayAssignmentContext(this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditional(): ConditionalContext {
		let _localctx: ConditionalContext = new ConditionalContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, tlangParser.RULE_conditional);
		try {
			this.state = 115;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifConditional(): IfConditionalContext {
		let _localctx: IfConditionalContext = new IfConditionalContext(this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifElseConditional(): IfElseConditionalContext {
		let _localctx: IfElseConditionalContext = new IfElseConditionalContext(this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loop(): LoopContext {
		let _localctx: LoopContext = new LoopContext(this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moveCommand(): MoveCommandContext {
		let _localctx: MoveCommandContext = new MoveCommandContext(this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moveOp(): MoveOpContext {
		let _localctx: MoveOpContext = new MoveOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, tlangParser.RULE_moveOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tlangParser.T__8) | (1 << tlangParser.T__9) | (1 << tlangParser.T__10) | (1 << tlangParser.T__11))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public penCommand(): PenCommandContext {
		let _localctx: PenCommandContext = new PenCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, tlangParser.RULE_penCommand);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			_la = this._input.LA(1);
			if (!(_la === tlangParser.T__12 || _la === tlangParser.T__13)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public gotoCommand(): GotoCommandContext {
		let _localctx: GotoCommandContext = new GotoCommandContext(this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pauseCommand(): PauseCommandContext {
		let _localctx: PauseCommandContext = new PauseCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, tlangParser.RULE_pauseCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this.match(tlangParser.T__18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public printfCommand(): PrintfCommandContext {
		let _localctx: PrintfCommandContext = new PrintfCommandContext(this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public printArg(): PrintArgContext {
		let _localctx: PrintArgContext = new PrintArgContext(this._ctx, this.state);
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
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public printList(): PrintListContext {
		let _localctx: PrintListContext = new PrintListContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, tlangParser.RULE_printList);
		let _la: number;
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDecl(): FunctionDeclContext {
		let _localctx: FunctionDeclContext = new FunctionDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, tlangParser.RULE_functionDecl);
		let _la: number;
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public paramList(): ParamListContext {
		let _localctx: ParamListContext = new ParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, tlangParser.RULE_paramList);
		let _la: number;
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCallCommand(): FunctionCallCommandContext {
		let _localctx: FunctionCallCommandContext = new FunctionCallCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, tlangParser.RULE_functionCallCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			this.functionCall();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, tlangParser.RULE_functionCall);
		let _la: number;
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argList(): ArgListContext {
		let _localctx: ArgListContext = new ArgListContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, tlangParser.RULE_argList);
		let _la: number;
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnCommand(): ReturnCommandContext {
		let _localctx: ReturnCommandContext = new ReturnCommandContext(this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayDecl(): ArrayDeclContext {
		let _localctx: ArrayDeclContext = new ArrayDeclContext(this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayAccessCommand(): ArrayAccessCommandContext {
		let _localctx: ArrayAccessCommandContext = new ArrayAccessCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, tlangParser.RULE_arrayAccessCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this.arrayAccess();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayAccess(): ArrayAccessContext {
		let _localctx: ArrayAccessContext = new ArrayAccessContext(this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 54;
		this.enterRecursionRule(_localctx, 54, tlangParser.RULE_expression, _p);
		try {
			let _alt: number;
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
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 249;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 247;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exponentiative(): ExponentiativeContext {
		let _localctx: ExponentiativeContext = new ExponentiativeContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, tlangParser.RULE_exponentiative);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 252;
			this.match(tlangParser.EXPO);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiplicative(): MultiplicativeContext {
		let _localctx: MultiplicativeContext = new MultiplicativeContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, tlangParser.RULE_multiplicative);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 254;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tlangParser.MUL) | (1 << tlangParser.DIV) | (1 << tlangParser.MOD))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public additive(): AdditiveContext {
		let _localctx: AdditiveContext = new AdditiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, tlangParser.RULE_additive);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			_la = this._input.LA(1);
			if (!(_la === tlangParser.PLUS || _la === tlangParser.MINUS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryArithOp(): UnaryArithOpContext {
		let _localctx: UnaryArithOpContext = new UnaryArithOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, tlangParser.RULE_unaryArithOp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this.match(tlangParser.MINUS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public condition(): ConditionContext;
	public condition(_p: number): ConditionContext;
	// @RuleVersion(0)
	public condition(_p?: number): ConditionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ConditionContext = new ConditionContext(this._ctx, _parentState);
		let _prevctx: ConditionContext = _localctx;
		let _startState: number = 64;
		this.enterRecursionRule(_localctx, 64, tlangParser.RULE_condition, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 272;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
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
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binCondOp(): BinCondOpContext {
		let _localctx: BinCondOpContext = new BinCondOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, tlangParser.RULE_binCondOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			_la = this._input.LA(1);
			if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (tlangParser.LT - 31)) | (1 << (tlangParser.GT - 31)) | (1 << (tlangParser.EQ - 31)) | (1 << (tlangParser.NEQ - 31)) | (1 << (tlangParser.LTE - 31)) | (1 << (tlangParser.GTE - 31)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicOp(): LogicOpContext {
		let _localctx: LogicOpContext = new LogicOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, tlangParser.RULE_logicOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
			_la = this._input.LA(1);
			if (!(_la === tlangParser.AND || _la === tlangParser.OR)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, tlangParser.RULE_value);
		try {
			this.state = 291;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 27:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 32:
			return this.condition_sempred(_localctx as ConditionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
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
	private condition_sempred(_localctx: ConditionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03.\u0128\x04\x02" +
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
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!tlangParser.__ATN) {
			tlangParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(tlangParser._serializedATN));
		}

		return tlangParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	public instruction_list(): Instruction_listContext {
		return this.getRuleContext(0, Instruction_listContext);
	}
	public EOF(): TerminalNode { return this.getToken(tlangParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_start; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Instruction_listContext extends ParserRuleContext {
	public instruction(): InstructionContext[];
	public instruction(i: number): InstructionContext;
	public instruction(i?: number): InstructionContext | InstructionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InstructionContext);
		} else {
			return this.getRuleContext(i, InstructionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_instruction_list; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterInstruction_list) {
			listener.enterInstruction_list(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitInstruction_list) {
			listener.exitInstruction_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitInstruction_list) {
			return visitor.visitInstruction_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Strict_ilistContext extends ParserRuleContext {
	public instruction(): InstructionContext[];
	public instruction(i: number): InstructionContext;
	public instruction(i?: number): InstructionContext | InstructionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InstructionContext);
		} else {
			return this.getRuleContext(i, InstructionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_strict_ilist; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterStrict_ilist) {
			listener.enterStrict_ilist(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitStrict_ilist) {
			listener.exitStrict_ilist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitStrict_ilist) {
			return visitor.visitStrict_ilist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public arrayAssignment(): ArrayAssignmentContext | undefined {
		return this.tryGetRuleContext(0, ArrayAssignmentContext);
	}
	public conditional(): ConditionalContext | undefined {
		return this.tryGetRuleContext(0, ConditionalContext);
	}
	public loop(): LoopContext | undefined {
		return this.tryGetRuleContext(0, LoopContext);
	}
	public moveCommand(): MoveCommandContext | undefined {
		return this.tryGetRuleContext(0, MoveCommandContext);
	}
	public penCommand(): PenCommandContext | undefined {
		return this.tryGetRuleContext(0, PenCommandContext);
	}
	public gotoCommand(): GotoCommandContext | undefined {
		return this.tryGetRuleContext(0, GotoCommandContext);
	}
	public pauseCommand(): PauseCommandContext | undefined {
		return this.tryGetRuleContext(0, PauseCommandContext);
	}
	public printfCommand(): PrintfCommandContext | undefined {
		return this.tryGetRuleContext(0, PrintfCommandContext);
	}
	public functionDecl(): FunctionDeclContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclContext);
	}
	public returnCommand(): ReturnCommandContext | undefined {
		return this.tryGetRuleContext(0, ReturnCommandContext);
	}
	public functionCallCommand(): FunctionCallCommandContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallCommandContext);
	}
	public arrayDecl(): ArrayDeclContext | undefined {
		return this.tryGetRuleContext(0, ArrayDeclContext);
	}
	public arrayAccessCommand(): ArrayAccessCommandContext | undefined {
		return this.tryGetRuleContext(0, ArrayAccessCommandContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_instruction; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterInstruction) {
			listener.enterInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitInstruction) {
			listener.exitInstruction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitInstruction) {
			return visitor.visitInstruction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public VAR(): TerminalNode { return this.getToken(tlangParser.VAR, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_assignment; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayAssignmentContext extends ParserRuleContext {
	public VAR(): TerminalNode { return this.getToken(tlangParser.VAR, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_arrayAssignment; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterArrayAssignment) {
			listener.enterArrayAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitArrayAssignment) {
			listener.exitArrayAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitArrayAssignment) {
			return visitor.visitArrayAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalContext extends ParserRuleContext {
	public ifConditional(): IfConditionalContext | undefined {
		return this.tryGetRuleContext(0, IfConditionalContext);
	}
	public ifElseConditional(): IfElseConditionalContext | undefined {
		return this.tryGetRuleContext(0, IfElseConditionalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_conditional; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterConditional) {
			listener.enterConditional(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitConditional) {
			listener.exitConditional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitConditional) {
			return visitor.visitConditional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfConditionalContext extends ParserRuleContext {
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public strict_ilist(): Strict_ilistContext {
		return this.getRuleContext(0, Strict_ilistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_ifConditional; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterIfConditional) {
			listener.enterIfConditional(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitIfConditional) {
			listener.exitIfConditional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitIfConditional) {
			return visitor.visitIfConditional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfElseConditionalContext extends ParserRuleContext {
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public strict_ilist(): Strict_ilistContext[];
	public strict_ilist(i: number): Strict_ilistContext;
	public strict_ilist(i?: number): Strict_ilistContext | Strict_ilistContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Strict_ilistContext);
		} else {
			return this.getRuleContext(i, Strict_ilistContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_ifElseConditional; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterIfElseConditional) {
			listener.enterIfElseConditional(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitIfElseConditional) {
			listener.exitIfElseConditional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitIfElseConditional) {
			return visitor.visitIfElseConditional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopContext extends ParserRuleContext {
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public strict_ilist(): Strict_ilistContext {
		return this.getRuleContext(0, Strict_ilistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_loop; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterLoop) {
			listener.enterLoop(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitLoop) {
			listener.exitLoop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitLoop) {
			return visitor.visitLoop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MoveCommandContext extends ParserRuleContext {
	public moveOp(): MoveOpContext {
		return this.getRuleContext(0, MoveOpContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_moveCommand; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterMoveCommand) {
			listener.enterMoveCommand(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitMoveCommand) {
			listener.exitMoveCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitMoveCommand) {
			return visitor.visitMoveCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MoveOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_moveOp; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterMoveOp) {
			listener.enterMoveOp(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitMoveOp) {
			listener.exitMoveOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitMoveOp) {
			return visitor.visitMoveOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PenCommandContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_penCommand; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterPenCommand) {
			listener.enterPenCommand(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitPenCommand) {
			listener.exitPenCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitPenCommand) {
			return visitor.visitPenCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GotoCommandContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_gotoCommand; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterGotoCommand) {
			listener.enterGotoCommand(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitGotoCommand) {
			listener.exitGotoCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitGotoCommand) {
			return visitor.visitGotoCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PauseCommandContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_pauseCommand; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterPauseCommand) {
			listener.enterPauseCommand(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitPauseCommand) {
			listener.exitPauseCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitPauseCommand) {
			return visitor.visitPauseCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintfCommandContext extends ParserRuleContext {
	public printList(): PrintListContext {
		return this.getRuleContext(0, PrintListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_printfCommand; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterPrintfCommand) {
			listener.enterPrintfCommand(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitPrintfCommand) {
			listener.exitPrintfCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitPrintfCommand) {
			return visitor.visitPrintfCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintArgContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(tlangParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_printArg; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterPrintArg) {
			listener.enterPrintArg(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitPrintArg) {
			listener.exitPrintArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitPrintArg) {
			return visitor.visitPrintArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintListContext extends ParserRuleContext {
	public printArg(): PrintArgContext[];
	public printArg(i: number): PrintArgContext;
	public printArg(i?: number): PrintArgContext | PrintArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrintArgContext);
		} else {
			return this.getRuleContext(i, PrintArgContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_printList; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterPrintList) {
			listener.enterPrintList(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitPrintList) {
			listener.exitPrintList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitPrintList) {
			return visitor.visitPrintList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(tlangParser.NAME, 0); }
	public strict_ilist(): Strict_ilistContext {
		return this.getRuleContext(0, Strict_ilistContext);
	}
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_functionDecl; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterFunctionDecl) {
			listener.enterFunctionDecl(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitFunctionDecl) {
			listener.exitFunctionDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitFunctionDecl) {
			return visitor.visitFunctionDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamListContext extends ParserRuleContext {
	public VAR(): TerminalNode[];
	public VAR(i: number): TerminalNode;
	public VAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(tlangParser.VAR);
		} else {
			return this.getToken(tlangParser.VAR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_paramList; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterParamList) {
			listener.enterParamList(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitParamList) {
			listener.exitParamList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitParamList) {
			return visitor.visitParamList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallCommandContext extends ParserRuleContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_functionCallCommand; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterFunctionCallCommand) {
			listener.enterFunctionCallCommand(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitFunctionCallCommand) {
			listener.exitFunctionCallCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitFunctionCallCommand) {
			return visitor.visitFunctionCallCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(tlangParser.NAME, 0); }
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_argList; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterArgList) {
			listener.enterArgList(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitArgList) {
			listener.exitArgList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitArgList) {
			return visitor.visitArgList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnCommandContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_returnCommand; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterReturnCommand) {
			listener.enterReturnCommand(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitReturnCommand) {
			listener.exitReturnCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitReturnCommand) {
			return visitor.visitReturnCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayDeclContext extends ParserRuleContext {
	public VAR(): TerminalNode { return this.getToken(tlangParser.VAR, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_arrayDecl; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterArrayDecl) {
			listener.enterArrayDecl(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitArrayDecl) {
			listener.exitArrayDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitArrayDecl) {
			return visitor.visitArrayDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayAccessCommandContext extends ParserRuleContext {
	public arrayAccess(): ArrayAccessContext {
		return this.getRuleContext(0, ArrayAccessContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_arrayAccessCommand; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterArrayAccessCommand) {
			listener.enterArrayAccessCommand(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitArrayAccessCommand) {
			listener.exitArrayAccessCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitArrayAccessCommand) {
			return visitor.visitArrayAccessCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayAccessContext extends ParserRuleContext {
	public VAR(): TerminalNode { return this.getToken(tlangParser.VAR, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_arrayAccess; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterArrayAccess) {
			listener.enterArrayAccess(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitArrayAccess) {
			listener.exitArrayAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitArrayAccess) {
			return visitor.visitArrayAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class UnaryExprContext extends ExpressionContext {
	public unaryArithOp(): UnaryArithOpContext {
		return this.getRuleContext(0, UnaryArithOpContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterUnaryExpr) {
			listener.enterUnaryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitUnaryExpr) {
			listener.exitUnaryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitUnaryExpr) {
			return visitor.visitUnaryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpoExprContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public exponentiative(): ExponentiativeContext {
		return this.getRuleContext(0, ExponentiativeContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterExpoExpr) {
			listener.enterExpoExpr(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitExpoExpr) {
			listener.exitExpoExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitExpoExpr) {
			return visitor.visitExpoExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MulExprContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public multiplicative(): MultiplicativeContext {
		return this.getRuleContext(0, MultiplicativeContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterMulExpr) {
			listener.enterMulExpr(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitMulExpr) {
			listener.exitMulExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitMulExpr) {
			return visitor.visitMulExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddExprContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public additive(): AdditiveContext {
		return this.getRuleContext(0, AdditiveContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterAddExpr) {
			listener.enterAddExpr(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitAddExpr) {
			listener.exitAddExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitAddExpr) {
			return visitor.visitAddExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValueExprContext extends ExpressionContext {
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterValueExpr) {
			listener.enterValueExpr(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitValueExpr) {
			listener.exitValueExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitValueExpr) {
			return visitor.visitValueExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenExprContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterParenExpr) {
			listener.enterParenExpr(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitParenExpr) {
			listener.exitParenExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitParenExpr) {
			return visitor.visitParenExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExponentiativeContext extends ParserRuleContext {
	public EXPO(): TerminalNode { return this.getToken(tlangParser.EXPO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_exponentiative; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterExponentiative) {
			listener.enterExponentiative(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitExponentiative) {
			listener.exitExponentiative(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitExponentiative) {
			return visitor.visitExponentiative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeContext extends ParserRuleContext {
	public MUL(): TerminalNode | undefined { return this.tryGetToken(tlangParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(tlangParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(tlangParser.MOD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_multiplicative; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterMultiplicative) {
			listener.enterMultiplicative(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitMultiplicative) {
			listener.exitMultiplicative(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitMultiplicative) {
			return visitor.visitMultiplicative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(tlangParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(tlangParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_additive; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterAdditive) {
			listener.enterAdditive(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitAdditive) {
			listener.exitAdditive(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitAdditive) {
			return visitor.visitAdditive(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryArithOpContext extends ParserRuleContext {
	public MINUS(): TerminalNode { return this.getToken(tlangParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_unaryArithOp; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterUnaryArithOp) {
			listener.enterUnaryArithOp(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitUnaryArithOp) {
			listener.exitUnaryArithOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitUnaryArithOp) {
			return visitor.visitUnaryArithOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	public NOT(): TerminalNode | undefined { return this.tryGetToken(tlangParser.NOT, 0); }
	public condition(): ConditionContext[];
	public condition(i: number): ConditionContext;
	public condition(i?: number): ConditionContext | ConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionContext);
		} else {
			return this.getRuleContext(i, ConditionContext);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public binCondOp(): BinCondOpContext | undefined {
		return this.tryGetRuleContext(0, BinCondOpContext);
	}
	public logicOp(): LogicOpContext | undefined {
		return this.tryGetRuleContext(0, LogicOpContext);
	}
	public PENCOND(): TerminalNode | undefined { return this.tryGetToken(tlangParser.PENCOND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_condition; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterCondition) {
			listener.enterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitCondition) {
			listener.exitCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitCondition) {
			return visitor.visitCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinCondOpContext extends ParserRuleContext {
	public EQ(): TerminalNode | undefined { return this.tryGetToken(tlangParser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(tlangParser.NEQ, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(tlangParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(tlangParser.GT, 0); }
	public LTE(): TerminalNode | undefined { return this.tryGetToken(tlangParser.LTE, 0); }
	public GTE(): TerminalNode | undefined { return this.tryGetToken(tlangParser.GTE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_binCondOp; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterBinCondOp) {
			listener.enterBinCondOp(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitBinCondOp) {
			listener.exitBinCondOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitBinCondOp) {
			return visitor.visitBinCondOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicOpContext extends ParserRuleContext {
	public AND(): TerminalNode | undefined { return this.tryGetToken(tlangParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(tlangParser.OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_logicOp; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterLogicOp) {
			listener.enterLogicOp(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitLogicOp) {
			listener.exitLogicOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitLogicOp) {
			return visitor.visitLogicOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public arrayAccess(): ArrayAccessContext | undefined {
		return this.tryGetRuleContext(0, ArrayAccessContext);
	}
	public NUM(): TerminalNode | undefined { return this.tryGetToken(tlangParser.NUM, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(tlangParser.VAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tlangParser.RULE_value; }
	// @Override
	public enterRule(listener: tlangListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: tlangListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tlangVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


