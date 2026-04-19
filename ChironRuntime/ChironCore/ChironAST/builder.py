#!/usr/bin/python3
# -*- coding: utf-8 -*-
# ChironLang Abstract Syntax Tree Builder

import os
import sys
sys.path.insert(0, os.path.join("..", "turtparse"))

from turtparse.tlangParser import tlangParser
from turtparse.tlangVisitor import tlangVisitor

from ChironAST import ChironAST


class astGenPass(tlangVisitor):

    def __init__(self):
        self.repeatInstrCount = 0 # keeps count for no of 'repeat' instructions

    def visitStart(self, ctx:tlangParser.StartContext):
        stmtList = self.visit(ctx.instruction_list())
        return stmtList

    def visitInstruction_list(self, ctx:tlangParser.Instruction_listContext):
        instrList = []
        for instr in ctx.instruction():
            instrList.extend(self.visit(instr))

        return instrList

    def visitStrict_ilist(self, ctx:tlangParser.Strict_ilistContext):
	# TODO: code refactoring. visitInstruction_list and visitStrict_ilist have same body
        instrList = []
        for instr in ctx.instruction():
            visvalue = self.visit(instr)
            instrList.extend(visvalue)

        return instrList


    def visitAssignment(self, ctx:tlangParser.AssignmentContext):
        lval = ChironAST.Var(ctx.VAR().getText())
        rval = self.visit(ctx.expression())
        return [(ChironAST.AssignmentCommand(lval, rval), 1)]

    def visitArrayAssignment(self, ctx:tlangParser.ArrayAssignmentContext):
        array_name = ChironAST.Var(ctx.VAR().getText())
        index = self.visit(ctx.expression(0))
        rval = self.visit(ctx.expression(1))
        return [(ChironAST.ArrayAssignmentCommand(array_name, index, rval), 1)]

    def visitIfConditional(self, ctx:tlangParser.IfConditionalContext):
        condObj = ChironAST.ConditionCommand(self.visit(ctx.condition()))
        thenInstrList = self.visit(ctx.strict_ilist())
        return [(condObj, len(thenInstrList) + 1)] + thenInstrList

    def visitIfElseConditional(self, ctx:tlangParser.IfElseConditionalContext):
        condObj = ChironAST.ConditionCommand(self.visit(ctx.condition()))
        thenInstrList = self.visit(ctx.strict_ilist(0))
        elseInstrList = self.visit(ctx.strict_ilist(1))
        jumpOverElseBlock = [(ChironAST.ConditionCommand(ChironAST.BoolFalse()), len(elseInstrList) + 1)]
        return [(condObj, len(thenInstrList) + 2)] + thenInstrList + jumpOverElseBlock + elseInstrList

    def visitGotoCommand(self, ctx:tlangParser.GotoCommandContext):
        xcor = self.visit(ctx.expression(0))
        ycor = self.visit(ctx.expression(1))
        return [(ChironAST.GotoCommand(xcor, ycor), 1)]

    def visitPrintfCommand(self, ctx:tlangParser.PrintfCommandContext):
        exprs = []

        for e in ctx.printList().printArg():
            exprs.append(self.visit(e))

        return [(ChironAST.PrintfCommand(exprs), 1)]
    
    def visitPrintArg(self, ctx:tlangParser.PrintArgContext):
        if ctx.expression():
            return self.visit(ctx.expression())
        elif ctx.STRING():
            return ChironAST.String(ctx.STRING().getText())
        
        return self.visitChildren(ctx)
    
    def visitFunctionDecl(self, ctx:tlangParser.FunctionDeclContext):
        name = ctx.NAME().getText()
        params = []

        if ctx.paramList():
            for p in ctx.paramList().VAR():
                params.append(p.getText())

        body = self.visit(ctx.strict_ilist())

        return [(ChironAST.FunctionDecl(name, params, body), 1)]
    
    def visitFunctionCall(self, ctx:tlangParser.FunctionCallContext):
        name = ctx.NAME().getText()
        args = []

        if ctx.argList():
            for e in ctx.argList().expression():
                args.append(self.visit(e))

        return ChironAST.FunctionCall(name, args)
    
    def visitFunctionCallCommand(self, ctx:tlangParser.FunctionCallCommandContext):
        call = self.visit(ctx.functionCall())
        return [(call, 1)]
    
    def visitArrayDecl(self, ctx:tlangParser.ArrayDeclContext):
        name = ChironAST.Var(ctx.VAR().getText())
        size = self.visit(ctx.expression())
        return [((ChironAST.ArrayDecl(name, size)), 1)]

    def visitArrayAccess(self, ctx:tlangParser.ArrayAccessContext):
        name = ChironAST.Var(ctx.VAR().getText())
        index = self.visit(ctx.expression())
        return ChironAST.ArrayAccess(name, index)

    def visitArrayAccessCommand(self, ctx:tlangParser.ArrayAccessCommandContext):
        access = self.visit(ctx.arrayAccess())
        return [(access,1)]

    def visitReturnCommand(self, ctx):
        expr = self.visit(ctx.expression())

        return [(ChironAST.ReturnCommand(expr), 1)]

    # Visit a parse tree produced by tlangParser#unaryExpr.
    def visitUnaryExpr(self, ctx:tlangParser.UnaryExprContext):
        expr1 = self.visit(ctx.expression())
        if ctx.unaryArithOp().MINUS():
            return ChironAST.UMinus(expr1)
        
        return self.visitChildren(ctx)


    # Visit a parse tree produced by tlangParser#addExpr.
    def visitAddExpr(self, ctx:tlangParser.AddExprContext):
        left = self.visit(ctx.expression(0))
        right = self.visit(ctx.expression(1))
        if ctx.additive().PLUS():
            return ChironAST.Sum(left, right)
        elif ctx.additive().MINUS():
            return ChironAST.Diff(left, right)


    # Visit a parse tree produced by tlangParser#mulExpr.
    def visitMulExpr(self, ctx:tlangParser.MulExprContext):
        left = self.visit(ctx.expression(0))
        right = self.visit(ctx.expression(1))
        if ctx.multiplicative().MUL():
            return ChironAST.Mult(left, right)
        elif ctx.multiplicative().DIV():
            return ChironAST.Div(left, right)
        elif ctx.multiplicative().MOD():
            return ChironAST.Mod(left, right)
        
    def visitExpoExpr(self, ctx:tlangParser.ExpoExprContext):
        left = self.visit(ctx.expression(0))
        right = self.visit(ctx.expression(1))
        if ctx.exponentiative().EXPO():
            return ChironAST.Expo(left, right)


    # Visit a parse tree produced by tlangParser#parenExpr.
    def visitParenExpr(self, ctx:tlangParser.ParenExprContext):
        return self.visit(ctx.expression()) 
   

    def visitCondition(self, ctx:tlangParser.ConditionContext):
        if ctx.PENCOND():
            return ChironAST.PenStatus();

        if ctx.NOT():
            expr1 = self.visit(ctx.condition(0))
            return ChironAST.NOT(expr1)


        if ctx.logicOp():
            expr1 = self.visit(ctx.condition(0))
            expr2 = self.visit(ctx.condition(1))
            logicOpCtx = ctx.logicOp()

            if logicOpCtx.AND():
                return ChironAST.AND(expr1, expr2)
            elif logicOpCtx.OR():
                return ChironAST.OR(expr1, expr2)


        if ctx.binCondOp():
            expr1 = self.visit(ctx.expression(0))
            expr2 = self.visit(ctx.expression(1))
            binOpCtx = ctx.binCondOp()

            if binOpCtx.LT():
                return ChironAST.LT(expr1, expr2)
            elif binOpCtx.GT():
                return ChironAST.GT(expr1, expr2)
            elif binOpCtx.EQ():
                return ChironAST.EQ(expr1, expr2)
            elif binOpCtx.NEQ():
                return ChironAST.NEQ(expr1, expr2)
            elif binOpCtx.LTE():
                return ChironAST.LTE(expr1, expr2)
            elif binOpCtx.GTE():
                return ChironAST.GTE(expr1, expr2)

        if ctx.condition():
            # condition is inside paranthesis
            return self.visit(ctx.condition(0))

        return self.visitChildren(ctx)

    def visitValue(self, ctx:tlangParser.ValueContext):
        if ctx.functionCall():
            return self.visit(ctx.functionCall())
        elif ctx.arrayAccess():
            return self.visit(ctx.arrayAccess())
        # elif ctx.STRING():
        #     return ChironAST.String(ctx.STRING().getText())
        elif ctx.NUM():
            return ChironAST.Num(ctx.NUM().getText())
        elif ctx.VAR():
            return ChironAST.Var(ctx.VAR().getText())

    def visitLoop(self, ctx:tlangParser.LoopContext):
        # insert counter variable in IR for tracking repeat count
        self.repeatInstrCount += 1
        repeatNum = self.visit(ctx.value())
        counterVar = ChironAST.Var(":__rep_counter_" + str(self.repeatInstrCount))
        counterVarInitInstr = ChironAST.AssignmentCommand(counterVar, repeatNum)
        constZero = ChironAST.Num(0)
        constOne = ChironAST.Num(1)
        loopCond = ChironAST.ConditionCommand(ChironAST.GT(counterVar, constZero))
        counterVarDecrInstr = ChironAST.AssignmentCommand(counterVar, ChironAST.Diff(counterVar, constOne))

        thenInstrList = []
        for instr in ctx.strict_ilist().instruction():
            temp = self.visit(instr)
            thenInstrList.extend(temp)

        boolFalse = ChironAST.ConditionCommand(ChironAST.BoolFalse())
        return [(counterVarInitInstr, 1), (loopCond, len(thenInstrList) + 3)] + thenInstrList +\
            [(counterVarDecrInstr, 1), (boolFalse, -len(thenInstrList) - 2)]

    def visitMoveCommand(self, ctx:tlangParser.MoveCommandContext):
        mvcommand = ctx.moveOp().getText()
        mvexpr = self.visit(ctx.expression())
        return [(ChironAST.MoveCommand(mvcommand, mvexpr), 1)]

    def visitPenCommand(self, ctx:tlangParser.PenCommandContext):
        return [(ChironAST.PenCommand(ctx.getText()), 1)]
