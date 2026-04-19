// Generated from server/grammar/tlang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `tlangParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface tlangVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `unaryExpr`
	 * labeled alternative in `tlangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpr?: (ctx: UnaryExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `expoExpr`
	 * labeled alternative in `tlangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpoExpr?: (ctx: ExpoExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `mulExpr`
	 * labeled alternative in `tlangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulExpr?: (ctx: MulExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `addExpr`
	 * labeled alternative in `tlangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddExpr?: (ctx: AddExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueExpr`
	 * labeled alternative in `tlangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpr?: (ctx: ValueExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenExpr`
	 * labeled alternative in `tlangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenExpr?: (ctx: ParenExprContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.instruction_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction_list?: (ctx: Instruction_listContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.strict_ilist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStrict_ilist?: (ctx: Strict_ilistContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction?: (ctx: InstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.arrayAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayAssignment?: (ctx: ArrayAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.conditional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional?: (ctx: ConditionalContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.ifConditional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfConditional?: (ctx: IfConditionalContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.ifElseConditional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfElseConditional?: (ctx: IfElseConditionalContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.loop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoop?: (ctx: LoopContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.moveCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMoveCommand?: (ctx: MoveCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.moveOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMoveOp?: (ctx: MoveOpContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.penCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPenCommand?: (ctx: PenCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.gotoCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGotoCommand?: (ctx: GotoCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.pauseCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPauseCommand?: (ctx: PauseCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.printfCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintfCommand?: (ctx: PrintfCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.printArg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintArg?: (ctx: PrintArgContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.printList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintList?: (ctx: PrintListContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.functionDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDecl?: (ctx: FunctionDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.paramList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamList?: (ctx: ParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.functionCallCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallCommand?: (ctx: FunctionCallCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.argList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgList?: (ctx: ArgListContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.returnCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnCommand?: (ctx: ReturnCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.arrayDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayDecl?: (ctx: ArrayDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.arrayAccessCommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayAccessCommand?: (ctx: ArrayAccessCommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.arrayAccess`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayAccess?: (ctx: ArrayAccessContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.exponentiative`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExponentiative?: (ctx: ExponentiativeContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.multiplicative`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicative?: (ctx: MultiplicativeContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.additive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditive?: (ctx: AdditiveContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.unaryArithOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryArithOp?: (ctx: UnaryArithOpContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.binCondOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinCondOp?: (ctx: BinCondOpContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.logicOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicOp?: (ctx: LogicOpContext) => Result;

	/**
	 * Visit a parse tree produced by `tlangParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
}

