// Generated from server/grammar/tlang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { UnaryExprContext } from "./tlangParser";
import { ExpoExprContext } from "./tlangParser";
import { MulExprContext } from "./tlangParser";
import { AddExprContext } from "./tlangParser";
import { ValueExprContext } from "./tlangParser";
import { ParenExprContext } from "./tlangParser";
import { StartContext } from "./tlangParser";
import { Instruction_listContext } from "./tlangParser";
import { Strict_ilistContext } from "./tlangParser";
import { InstructionContext } from "./tlangParser";
import { AssignmentContext } from "./tlangParser";
import { ArrayAssignmentContext } from "./tlangParser";
import { ConditionalContext } from "./tlangParser";
import { IfConditionalContext } from "./tlangParser";
import { IfElseConditionalContext } from "./tlangParser";
import { LoopContext } from "./tlangParser";
import { MoveCommandContext } from "./tlangParser";
import { MoveOpContext } from "./tlangParser";
import { PenCommandContext } from "./tlangParser";
import { GotoCommandContext } from "./tlangParser";
import { PauseCommandContext } from "./tlangParser";
import { PrintfCommandContext } from "./tlangParser";
import { PrintArgContext } from "./tlangParser";
import { PrintListContext } from "./tlangParser";
import { FunctionDeclContext } from "./tlangParser";
import { ParamListContext } from "./tlangParser";
import { FunctionCallCommandContext } from "./tlangParser";
import { FunctionCallContext } from "./tlangParser";
import { ArgListContext } from "./tlangParser";
import { ReturnCommandContext } from "./tlangParser";
import { ArrayDeclContext } from "./tlangParser";
import { ArrayAccessCommandContext } from "./tlangParser";
import { ArrayAccessContext } from "./tlangParser";
import { ExpressionContext } from "./tlangParser";
import { ExponentiativeContext } from "./tlangParser";
import { MultiplicativeContext } from "./tlangParser";
import { AdditiveContext } from "./tlangParser";
import { UnaryArithOpContext } from "./tlangParser";
import { ConditionContext } from "./tlangParser";
import { BinCondOpContext } from "./tlangParser";
import { LogicOpContext } from "./tlangParser";
import { ValueContext } from "./tlangParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `tlangParser`.
 */
export interface tlangListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `unaryExpr`
	 * labeled alternative in `tlangParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpr?: (ctx: UnaryExprContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryExpr`
	 * labeled alternative in `tlangParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpr?: (ctx: UnaryExprContext) => void;

	/**
	 * Enter a parse tree produced by the `expoExpr`
	 * labeled alternative in `tlangParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpoExpr?: (ctx: ExpoExprContext) => void;
	/**
	 * Exit a parse tree produced by the `expoExpr`
	 * labeled alternative in `tlangParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpoExpr?: (ctx: ExpoExprContext) => void;

	/**
	 * Enter a parse tree produced by the `mulExpr`
	 * labeled alternative in `tlangParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMulExpr?: (ctx: MulExprContext) => void;
	/**
	 * Exit a parse tree produced by the `mulExpr`
	 * labeled alternative in `tlangParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMulExpr?: (ctx: MulExprContext) => void;

	/**
	 * Enter a parse tree produced by the `addExpr`
	 * labeled alternative in `tlangParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAddExpr?: (ctx: AddExprContext) => void;
	/**
	 * Exit a parse tree produced by the `addExpr`
	 * labeled alternative in `tlangParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAddExpr?: (ctx: AddExprContext) => void;

	/**
	 * Enter a parse tree produced by the `valueExpr`
	 * labeled alternative in `tlangParser.expression`.
	 * @param ctx the parse tree
	 */
	enterValueExpr?: (ctx: ValueExprContext) => void;
	/**
	 * Exit a parse tree produced by the `valueExpr`
	 * labeled alternative in `tlangParser.expression`.
	 * @param ctx the parse tree
	 */
	exitValueExpr?: (ctx: ValueExprContext) => void;

	/**
	 * Enter a parse tree produced by the `parenExpr`
	 * labeled alternative in `tlangParser.expression`.
	 * @param ctx the parse tree
	 */
	enterParenExpr?: (ctx: ParenExprContext) => void;
	/**
	 * Exit a parse tree produced by the `parenExpr`
	 * labeled alternative in `tlangParser.expression`.
	 * @param ctx the parse tree
	 */
	exitParenExpr?: (ctx: ParenExprContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.instruction_list`.
	 * @param ctx the parse tree
	 */
	enterInstruction_list?: (ctx: Instruction_listContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.instruction_list`.
	 * @param ctx the parse tree
	 */
	exitInstruction_list?: (ctx: Instruction_listContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.strict_ilist`.
	 * @param ctx the parse tree
	 */
	enterStrict_ilist?: (ctx: Strict_ilistContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.strict_ilist`.
	 * @param ctx the parse tree
	 */
	exitStrict_ilist?: (ctx: Strict_ilistContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.arrayAssignment`.
	 * @param ctx the parse tree
	 */
	enterArrayAssignment?: (ctx: ArrayAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.arrayAssignment`.
	 * @param ctx the parse tree
	 */
	exitArrayAssignment?: (ctx: ArrayAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.conditional`.
	 * @param ctx the parse tree
	 */
	enterConditional?: (ctx: ConditionalContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.conditional`.
	 * @param ctx the parse tree
	 */
	exitConditional?: (ctx: ConditionalContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.ifConditional`.
	 * @param ctx the parse tree
	 */
	enterIfConditional?: (ctx: IfConditionalContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.ifConditional`.
	 * @param ctx the parse tree
	 */
	exitIfConditional?: (ctx: IfConditionalContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.ifElseConditional`.
	 * @param ctx the parse tree
	 */
	enterIfElseConditional?: (ctx: IfElseConditionalContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.ifElseConditional`.
	 * @param ctx the parse tree
	 */
	exitIfElseConditional?: (ctx: IfElseConditionalContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.loop`.
	 * @param ctx the parse tree
	 */
	enterLoop?: (ctx: LoopContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.loop`.
	 * @param ctx the parse tree
	 */
	exitLoop?: (ctx: LoopContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.moveCommand`.
	 * @param ctx the parse tree
	 */
	enterMoveCommand?: (ctx: MoveCommandContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.moveCommand`.
	 * @param ctx the parse tree
	 */
	exitMoveCommand?: (ctx: MoveCommandContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.moveOp`.
	 * @param ctx the parse tree
	 */
	enterMoveOp?: (ctx: MoveOpContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.moveOp`.
	 * @param ctx the parse tree
	 */
	exitMoveOp?: (ctx: MoveOpContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.penCommand`.
	 * @param ctx the parse tree
	 */
	enterPenCommand?: (ctx: PenCommandContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.penCommand`.
	 * @param ctx the parse tree
	 */
	exitPenCommand?: (ctx: PenCommandContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.gotoCommand`.
	 * @param ctx the parse tree
	 */
	enterGotoCommand?: (ctx: GotoCommandContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.gotoCommand`.
	 * @param ctx the parse tree
	 */
	exitGotoCommand?: (ctx: GotoCommandContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.pauseCommand`.
	 * @param ctx the parse tree
	 */
	enterPauseCommand?: (ctx: PauseCommandContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.pauseCommand`.
	 * @param ctx the parse tree
	 */
	exitPauseCommand?: (ctx: PauseCommandContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.printfCommand`.
	 * @param ctx the parse tree
	 */
	enterPrintfCommand?: (ctx: PrintfCommandContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.printfCommand`.
	 * @param ctx the parse tree
	 */
	exitPrintfCommand?: (ctx: PrintfCommandContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.printArg`.
	 * @param ctx the parse tree
	 */
	enterPrintArg?: (ctx: PrintArgContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.printArg`.
	 * @param ctx the parse tree
	 */
	exitPrintArg?: (ctx: PrintArgContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.printList`.
	 * @param ctx the parse tree
	 */
	enterPrintList?: (ctx: PrintListContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.printList`.
	 * @param ctx the parse tree
	 */
	exitPrintList?: (ctx: PrintListContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.functionDecl`.
	 * @param ctx the parse tree
	 */
	enterFunctionDecl?: (ctx: FunctionDeclContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.functionDecl`.
	 * @param ctx the parse tree
	 */
	exitFunctionDecl?: (ctx: FunctionDeclContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.paramList`.
	 * @param ctx the parse tree
	 */
	enterParamList?: (ctx: ParamListContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.paramList`.
	 * @param ctx the parse tree
	 */
	exitParamList?: (ctx: ParamListContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.functionCallCommand`.
	 * @param ctx the parse tree
	 */
	enterFunctionCallCommand?: (ctx: FunctionCallCommandContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.functionCallCommand`.
	 * @param ctx the parse tree
	 */
	exitFunctionCallCommand?: (ctx: FunctionCallCommandContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.argList`.
	 * @param ctx the parse tree
	 */
	enterArgList?: (ctx: ArgListContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.argList`.
	 * @param ctx the parse tree
	 */
	exitArgList?: (ctx: ArgListContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.returnCommand`.
	 * @param ctx the parse tree
	 */
	enterReturnCommand?: (ctx: ReturnCommandContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.returnCommand`.
	 * @param ctx the parse tree
	 */
	exitReturnCommand?: (ctx: ReturnCommandContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.arrayDecl`.
	 * @param ctx the parse tree
	 */
	enterArrayDecl?: (ctx: ArrayDeclContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.arrayDecl`.
	 * @param ctx the parse tree
	 */
	exitArrayDecl?: (ctx: ArrayDeclContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.arrayAccessCommand`.
	 * @param ctx the parse tree
	 */
	enterArrayAccessCommand?: (ctx: ArrayAccessCommandContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.arrayAccessCommand`.
	 * @param ctx the parse tree
	 */
	exitArrayAccessCommand?: (ctx: ArrayAccessCommandContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.arrayAccess`.
	 * @param ctx the parse tree
	 */
	enterArrayAccess?: (ctx: ArrayAccessContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.arrayAccess`.
	 * @param ctx the parse tree
	 */
	exitArrayAccess?: (ctx: ArrayAccessContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.exponentiative`.
	 * @param ctx the parse tree
	 */
	enterExponentiative?: (ctx: ExponentiativeContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.exponentiative`.
	 * @param ctx the parse tree
	 */
	exitExponentiative?: (ctx: ExponentiativeContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.multiplicative`.
	 * @param ctx the parse tree
	 */
	enterMultiplicative?: (ctx: MultiplicativeContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.multiplicative`.
	 * @param ctx the parse tree
	 */
	exitMultiplicative?: (ctx: MultiplicativeContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.additive`.
	 * @param ctx the parse tree
	 */
	enterAdditive?: (ctx: AdditiveContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.additive`.
	 * @param ctx the parse tree
	 */
	exitAdditive?: (ctx: AdditiveContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.unaryArithOp`.
	 * @param ctx the parse tree
	 */
	enterUnaryArithOp?: (ctx: UnaryArithOpContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.unaryArithOp`.
	 * @param ctx the parse tree
	 */
	exitUnaryArithOp?: (ctx: UnaryArithOpContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.binCondOp`.
	 * @param ctx the parse tree
	 */
	enterBinCondOp?: (ctx: BinCondOpContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.binCondOp`.
	 * @param ctx the parse tree
	 */
	exitBinCondOp?: (ctx: BinCondOpContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.logicOp`.
	 * @param ctx the parse tree
	 */
	enterLogicOp?: (ctx: LogicOpContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.logicOp`.
	 * @param ctx the parse tree
	 */
	exitLogicOp?: (ctx: LogicOpContext) => void;

	/**
	 * Enter a parse tree produced by `tlangParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `tlangParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
}

