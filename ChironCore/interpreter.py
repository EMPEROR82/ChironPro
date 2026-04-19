
from ChironAST import ChironAST
from ChironHooks import Chironhooks
import turtle

Release="Chiron v5.3"

import re

def addContext(s):
    s = str(s).strip()

    return re.sub(r':([a-zA-Z_][a-zA-Z0-9_]*)',
                  r"self.resolveVar(':\1')",
                  s)


class StackFrame:
    def __init__(self):
        self.locals = {}

class ReturnException(Exception):
    def __init__(self, value):
        self.value = value

class Interpreter:
    ir = None
    pc = None
    t_screen = None
    trtl = None

    def __init__(self, irHandler, params):
        turtle_color = params.turtle_color if (params is not None and hasattr(params, 'turtle_color')) else "green"
        line_color   = params.line_color   if (params is not None and hasattr(params, 'line_color'))   else "blue"
        bg_color     = params.background_color     if (params is not None and hasattr(params, 'background_color'))     else "white"
        
        self.ir = irHandler.ir
        self.cfg = irHandler.cfg
        self.pc = 0
        self.t_screen = turtle.getscreen()
        self.trtl = turtle.Turtle()
        turtle.colormode(255)
        self.trtl.shape("turtle")
        self.trtl.color(line_color)
        self.trtl.fillcolor(turtle_color)
        self.trtl.begin_fill()
        self.trtl.pensize(4)
        self.trtl.speed(1) # TODO: Make it user friendly
        self.functions = {}
        self.call_stack = []

        if params is not None:
            self.args = params
        else:
            self.args = None

        turtle.title(Release)
        turtle.bgcolor(bg_color)
        turtle.hideturtle()

    def handleAssignment(self, stmt,tgt):
        raise NotImplementedError('Assignments are not handled!')

    def handleCondition(self, stmt, tgt):
        raise NotImplementedError('Conditions are not handled!')

    def handleMove(self, stmt, tgt):
        raise NotImplementedError('Moves are not handled!')

    def handlePen(self, stmt, tgt):
        raise NotImplementedError('Pens are not handled!')

    def handleGotoCommand(self, stmt, tgt):
        raise NotImplementedError('Gotos are not handled!')

    def handleNoOpCommand(self, stmt, tgt):
        raise NotImplementedError('No-Ops are not handled!')

    def handlePauseCommand(self, stmt, tgt):
        raise NotImplementedError('No-Ops are not handled!')

    def handlePrintfCommand(self, stmt, tgt):
        raise NotImplementedError('Printf not handled!')
    
    def sanityCheck(self, irInstr):
        stmt, tgt = irInstr
        if not isinstance(stmt, ChironAST.ConditionCommand):
            if tgt != 1:
                raise ValueError("Improper relative jump for non-conditional instruction", str(stmt), tgt)
    
    def interpret(self):
        pass

    def initProgramContext(self, params):
        pass


class ProgramContext:
    pass

# TODO: move to a different file
class ConcreteInterpreter(Interpreter):
    # Ref: https://realpython.com/beginners-guide-python-turtle
    cond_eval = None # used as a temporary variable within the embedded program interpreter
    prg = None

    def __init__(self, irHandler, params):
        super().__init__(irHandler, params)
        self.prg = ProgramContext()
        # Hooks Object:
        if self.args is not None and self.args.hooks:
            self.chironhook = Chironhooks.ConcreteChironHooks()
        self.pc = 0
        self.variables = {}


    def resolveVar(self, varname):
        if self.call_stack:
            frame = self.call_stack[-1]
            if varname in frame.locals:
                return frame.locals[varname]

        name = varname.replace(":", "")
        return getattr(self.prg, name)
    
    def evalExpr(self, expr):

        if isinstance(expr, ChironAST.Num):
            return expr.val

        elif isinstance(expr, ChironAST.String):
            return expr.val

        elif isinstance(expr, ChironAST.BoolTrue):
            return True

        elif isinstance(expr, ChironAST.BoolFalse):
            return False
        
        elif isinstance(expr, ChironAST.Var):
            return self.resolveVar(expr.varname)
        

        elif isinstance(expr, ChironAST.UMinus):
            return -self.evalExpr(expr.expr)

        elif isinstance(expr, ChironAST.NOT):
            return not self.evalExpr(expr.expr)

        elif isinstance(expr, ChironAST.Sum):
            return self.evalExpr(expr.lexpr) + self.evalExpr(expr.rexpr)

        elif isinstance(expr, ChironAST.Diff):
            return self.evalExpr(expr.lexpr) - self.evalExpr(expr.rexpr)

        elif isinstance(expr, ChironAST.Mult):
            return self.evalExpr(expr.lexpr) * self.evalExpr(expr.rexpr)

        elif isinstance(expr, ChironAST.Div):
            return self.evalExpr(expr.lexpr) / self.evalExpr(expr.rexpr)
        
        elif isinstance(expr, ChironAST.Mod):
            return self.evalExpr(expr.lexpr) % self.evalExpr(expr.rexpr)

        elif isinstance(expr, ChironAST.Expo):
            return self.evalExpr(expr.lexpr) ** self.evalExpr(expr.rexpr)

        elif isinstance(expr, ChironAST.AND):
            return self.evalExpr(expr.lexpr) and self.evalExpr(expr.rexpr)

        elif isinstance(expr, ChironAST.OR):
            return self.evalExpr(expr.lexpr) or self.evalExpr(expr.rexpr)

        elif isinstance(expr, ChironAST.LT):
            return self.evalExpr(expr.lexpr) < self.evalExpr(expr.rexpr)

        elif isinstance(expr, ChironAST.GT):
            return self.evalExpr(expr.lexpr) > self.evalExpr(expr.rexpr)

        elif isinstance(expr, ChironAST.LTE):
            return self.evalExpr(expr.lexpr) <= self.evalExpr(expr.rexpr)

        elif isinstance(expr, ChironAST.GTE):
            return self.evalExpr(expr.lexpr) >= self.evalExpr(expr.rexpr)

        elif isinstance(expr, ChironAST.EQ):
            return self.evalExpr(expr.lexpr) == self.evalExpr(expr.rexpr)

        elif isinstance(expr, ChironAST.NEQ):
            return self.evalExpr(expr.lexpr) != self.evalExpr(expr.rexpr)
        
        elif isinstance(expr, ChironAST.PenStatus):
            return self.trtl.isdown()

        elif isinstance(expr, ChironAST.FunctionCall):
            return self.handleFunctionCall(expr)
        
        elif isinstance(expr, ChironAST.ArrayAccess):
            array_name = expr.array.varname
            index = int(self.evalExpr(expr.index))
            
            if self.call_stack:
                if array_name in self.call_stack[-1].locals:
                    array = self.call_stack[-1].locals[array_name]
                else:
                    array = getattr(self.prg, array_name.replace(":", ""))
            else:
                array = getattr(self.prg, array_name.replace(":", ""))
            
            return array[index]


        else:
            raise NotImplementedError(f"Unknown expression type: {type(expr)}")
    
    def interpret(self):
        print("Program counter : ", self.pc)
        stmt, tgt = self.ir[self.pc]
        print(stmt, stmt.__class__.__name__, tgt)

        self.sanityCheck(self.ir[self.pc])

        if isinstance(stmt, ChironAST.AssignmentCommand):
            ntgt = self.handleAssignment(stmt, tgt)
        elif isinstance(stmt, ChironAST.ArrayAssignmentCommand):
            ntgt = self.handleArrayAssignment(stmt, tgt)
        elif isinstance(stmt, ChironAST.ConditionCommand):
            ntgt = self.handleCondition(stmt, tgt)
        elif isinstance(stmt, ChironAST.MoveCommand):
            ntgt = self.handleMove(stmt, tgt)
        elif isinstance(stmt, ChironAST.PenCommand):
            ntgt = self.handlePen(stmt, tgt)
        elif isinstance(stmt, ChironAST.GotoCommand):
            ntgt = self.handleGotoCommand(stmt, tgt)
        elif isinstance(stmt, ChironAST.NoOpCommand):
            ntgt = self.handleNoOpCommand(stmt, tgt)
        elif isinstance(stmt, ChironAST.PrintfCommand):
            ntgt = self.handlePrintfCommand(stmt, tgt)
        elif isinstance(stmt, ChironAST.FunctionDecl):
            ntgt = self.handleFunctionDecl(stmt, tgt)
        elif isinstance(stmt, ChironAST.FunctionCall):
            ntgt = self.handleFunctionCall(stmt, tgt)
        elif isinstance(stmt, ChironAST.ReturnCommand):
            ntgt = self.handleReturnCommand(stmt, tgt)
        elif isinstance(stmt, ChironAST.ArrayDecl):
            ntgt = self.handleArrayDecl(stmt, tgt)
        elif isinstance(stmt, ChironAST.ArrayAccess):
            ntgt = self.handleArrayAccess(stmt, tgt)
        else:
            raise NotImplementedError("Unknown instruction: %s, %s."%(type(stmt), stmt))

        # TODO: handle statement
        self.pc += ntgt

        if self.pc >= len(self.ir):
            # This is the ending of the interpreter.
            self.trtl.write("End, Press ESC", font=("Arial", 15, "bold"))
            if self.args is not None and self.args.hooks:
                self.chironhook.ChironEndHook(self)
            return True
        else:
            return False
    
    def initProgramContext(self, params):
        if self.args is not None and self.args.hooks:
            self.chironhook.ChironStartHook(self)
        self.trtl.write("Start", font=("Arial", 15, "bold"))
        for key,val in params.items():
            var = key.replace(":","")
            exec("setattr(self.prg,\"%s\",%s)" % (var, val))
    
    def handleAssignment(self, stmt, tgt):
        print("  Assignment Statement")

        lhs = stmt.lvar.varname

        rhs_val = self.evalExpr(stmt.rexpr)

        if self.call_stack:
            frame = self.call_stack[-1]
            frame.locals[lhs] = rhs_val
        else:
            setattr(self.prg, lhs.replace(":", ""), rhs_val)

        return 1


    def handleCondition(self, stmt, tgt):
        print("  Branch Instruction")
        cond = self.evalExpr(stmt.cond)

        return 1 if cond else tgt

    def handleMove(self, stmt, tgt):
        print("  MoveCommand")
        exec("self.trtl.%s(%s)" % (stmt.direction,addContext(stmt.expr)))
        return 1

    def handleNoOpCommand(self, stmt, tgt):
        print("  No-Op Command")
        return 1

    def handlePen(self, stmt, tgt):
        print("  PenCommand")
        exec("self.trtl.%s()"%(stmt.status))
        return 1

    def handleGotoCommand(self, stmt, tgt):
        print(" GotoCommand")
        xcor = addContext(stmt.xcor)
        ycor = addContext(stmt.ycor)
        exec("self.trtl.goto(%s, %s)" % (xcor, ycor))
        return 1

    def handlePrintfCommand(self, stmt, tgt):
        print(" PrintfCommand")
        outputs = []

        for expr in stmt.exprs:
            val = self.evalExpr(expr)
            outputs.append(str(val))

        print(" ".join(outputs))

        return 1
    
    def handleArrayDecl(self, stmt, tgt):
        print("  Array Declaration")
        array_name = stmt.array_name.varname
        array_size = self.evalExpr(stmt.array_size)
        
        if self.call_stack:
            # Initialize in local scope (function) - keep colon prefix
            self.call_stack[-1].locals[array_name] = [0] * int(array_size)
        else:
            setattr(self.prg, array_name.replace(":", ""), [0] * int(array_size))
        
        return 1

    def handleArrayAssignment(self, stmt, tgt):
        print("  Array Assignment")
        array_name = stmt.array_name.varname
        index = int(self.evalExpr(stmt.index))
        value = self.evalExpr(stmt.rexpr)
        

        if self.call_stack:
            if array_name in self.call_stack[-1].locals:
                array = self.call_stack[-1].locals[array_name]
            else:
                array = getattr(self.prg, array_name.replace(":", ""))
        else:
            array = getattr(self.prg, array_name.replace(":", ""))
        
        array[index] = value
        
        return 1

    def handleArrayAccess(self, stmt, tgt):
        print("  Array Access")
        array_name = stmt.array.varname
        index = int(self.evalExpr(stmt.index))
        

        if self.call_stack:
            if array_name in self.call_stack[-1].locals:
                array = self.call_stack[-1].locals[array_name]
            else:
                array = getattr(self.prg, array_name.replace(":", ""))
        else:
            array = getattr(self.prg, array_name.replace(":", ""))
        
        return 1
    
    def handleFunctionDecl(self, stmt, tgt):
        print(" FunctionDecl")
        self.functions[stmt.name] = stmt
        return 1

    def handleFunctionCall(self, expr, tgt=None):
        fname = expr.name

        if fname not in self.functions:
            raise Exception(f"Function {fname} not defined")

        fn = self.functions[fname]

        arg_values = [self.evalExpr(a) for a in expr.args]

        if len(arg_values) != len(fn.params):
            raise Exception(f"{fname} expects {len(fn.params)} args but got {len(arg_values)}")

        frame = StackFrame()

        for p, v in zip(fn.params, arg_values):
            frame.locals[p] = v

        self.call_stack.append(frame)

        old_ir = self.ir
        old_pc = self.pc

        self.ir = fn.body
        self.pc = 0

        ret_value = None

        try:
            while self.pc < len(self.ir):
                terminated = self.interpret()
                if terminated:
                    break

        except ReturnException as r:
            ret_value = r.value

        self.ir = old_ir
        self.pc = old_pc

        self.call_stack.pop()

        if tgt is None:
            return ret_value
        else:
            return 1


    def handleReturnCommand(self, stmt, tgt):
        print(" ReturnCommand")
        value = self.evalExpr(stmt.expr)

        raise ReturnException(value)