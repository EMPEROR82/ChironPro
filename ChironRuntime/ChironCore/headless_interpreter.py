# headlessInterpreter.py

import json
import math
from interpreter import ConcreteInterpreter, ProgramContext


class _DummyTurtle:
    """Absorbs any turtle calls silently in headless mode."""
    def write(self, *a, **kw): pass
    def penup(self, *a, **kw): pass
    def pendown(self, *a, **kw): pass
    def forward(self, *a, **kw): pass
    def backward(self, *a, **kw): pass
    def left(self, *a, **kw): pass
    def right(self, *a, **kw): pass
    def goto(self, *a, **kw): pass
    def isdown(self, *a, **kw): return True
    def shape(self, *a, **kw): pass
    def color(self, *a, **kw): pass
    def fillcolor(self, *a, **kw): pass
    def pencolor(self, *a, **kw): pass
    def begin_fill(self, *a, **kw): pass
    def end_fill(self, *a, **kw): pass
    def pensize(self, *a, **kw): pass
    def speed(self, *a, **kw): pass


class HeadlessInterpreter(ConcreteInterpreter):
    """
    Subclass of ConcreteInterpreter that emits JSON draw commands to stdout
    instead of rendering via turtle. Used by the VS Code webview extension.
    """

    def __init__(self, irHandler, params):
        # Deliberately skip the parent __init__ to avoid turtle initialization
        self.ir = irHandler.ir
        self.cfg = irHandler.cfg
        self.pc = 0
        self.functions = {}
        self.call_stack = []
        self.args = params
        self.prg = ProgramContext()
        self.variables = {}

        # Dummy turtle to absorb any inherited calls that reach self.trtl
        self.trtl = _DummyTurtle()

        # Internal state to track turtle position/heading
        self.pos = [0.0, 0.0]
        self.angle = 90.0
        self.pen_down = True
        self.pen_color = getattr(params, 'line_color', 'blue')
        self.bg_color = getattr(params, 'bg_color', 'white')
        self.turtle_color = getattr(params, 'turtle_color', 'black')

        self._emit("init", {
            "bg": self.bg_color,
            "pen_color": self.pen_color,
            "turtle_color": self.turtle_color
        })

    def _emit(self, cmd, data=None):
        """Send a JSON command to stdout for the webview to consume."""
        print(json.dumps({"cmd": cmd, "data": data or {}}), flush=True)

    def initProgramContext(self, params):
        """Same as parent but without the turtle.write('Start') call."""
        for key, val in params.items():
            var = key.replace(":", "")
            exec("setattr(self.prg, \"%s\", %s)" % (var, val))

    def handleMove(self, stmt, tgt):
        direction = stmt.direction
        distance = self.evalExpr(stmt.expr)
        rad = math.radians(self.angle)

        if direction == "forward":
            dx = distance * math.cos(rad)
            dy = distance * math.sin(rad)
        elif direction == "backward":
            dx = -distance * math.cos(rad)
            dy = -distance * math.sin(rad)
        elif direction in ("left", "right"):
            self.angle += distance if direction == "left" else -distance
            self._emit("rotate", {"angle": self.angle})
            return 1
        else:
            return 1

        new_pos = [self.pos[0] + dx, self.pos[1] + dy]

        if self.pen_down:
            self._emit("line", {
                "x1": self.pos[0], "y1": self.pos[1],
                "x2": new_pos[0],  "y2": new_pos[1],
                "color": self.pen_color
            })

        self.pos = new_pos
        self._emit("turtle_pos", {"x": self.pos[0], "y": self.pos[1], "angle": self.angle})
        return 1

    def handlePen(self, stmt, tgt):
        self.pen_down = (stmt.status == "pendown")
        self._emit("pen", {"down": self.pen_down})
        return 1

    def handleGotoCommand(self, stmt, tgt):
        x = self.evalExpr(stmt.xcor)
        y = self.evalExpr(stmt.ycor)
        if self.pen_down:
            self._emit("line", {
                "x1": self.pos[0], "y1": self.pos[1],
                "x2": x, "y2": y,
                "color": self.pen_color
            })
        self.pos = [x, y]
        self._emit("turtle_pos", {"x": x, "y": y, "angle": self.angle})
        return 1

    def handleNoOpCommand(self, stmt, tgt):
        return 1

    def handlePrintfCommand(self, stmt, tgt):
        outputs = [str(self.evalExpr(e)) for e in stmt.exprs]
        self._emit("print", {"text": " ".join(outputs)})
        return 1