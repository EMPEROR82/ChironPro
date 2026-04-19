# Generated from tlang.g4 by ANTLR 4.13.2
# encoding: utf-8
from antlr4 import *
from io import StringIO
import sys
if sys.version_info[1] > 5:
	from typing import TextIO
else:
	from typing.io import TextIO

def serializedATN():
    return [
        4,1,46,294,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,2,35,7,35,1,0,1,0,1,0,1,1,5,1,77,8,1,10,1,12,1,80,
        9,1,1,2,4,2,83,8,2,11,2,12,2,84,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
        1,3,1,3,1,3,1,3,1,3,1,3,3,3,101,8,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,
        1,5,1,5,1,5,1,5,1,6,1,6,3,6,116,8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,
        1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,
        1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
        1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,16,1,16,3,16,163,8,16,1,17,
        1,17,1,17,5,17,168,8,17,10,17,12,17,171,9,17,1,18,1,18,1,18,1,18,
        3,18,177,8,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,5,19,187,8,
        19,10,19,12,19,190,9,19,1,20,1,20,1,21,1,21,1,21,3,21,197,8,21,1,
        21,1,21,1,22,1,22,1,22,5,22,204,8,22,10,22,12,22,207,9,22,1,23,1,
        23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,26,1,26,1,26,1,
        26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,234,8,
        27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,5,
        27,248,8,27,10,27,12,27,251,9,27,1,28,1,28,1,29,1,29,1,30,1,30,1,
        31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,
        32,3,32,273,8,32,1,32,1,32,1,32,1,32,5,32,279,8,32,10,32,12,32,282,
        9,32,1,33,1,33,1,34,1,34,1,35,1,35,1,35,1,35,3,35,292,8,35,1,35,
        0,2,54,64,36,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
        38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,0,6,1,0,9,12,
        1,0,13,14,1,0,28,30,1,0,26,27,1,0,33,38,1,0,39,40,291,0,72,1,0,0,
        0,2,78,1,0,0,0,4,82,1,0,0,0,6,100,1,0,0,0,8,102,1,0,0,0,10,106,1,
        0,0,0,12,115,1,0,0,0,14,117,1,0,0,0,16,123,1,0,0,0,18,133,1,0,0,
        0,20,139,1,0,0,0,22,142,1,0,0,0,24,144,1,0,0,0,26,146,1,0,0,0,28,
        153,1,0,0,0,30,155,1,0,0,0,32,162,1,0,0,0,34,164,1,0,0,0,36,172,
        1,0,0,0,38,183,1,0,0,0,40,191,1,0,0,0,42,193,1,0,0,0,44,200,1,0,
        0,0,46,208,1,0,0,0,48,211,1,0,0,0,50,217,1,0,0,0,52,219,1,0,0,0,
        54,233,1,0,0,0,56,252,1,0,0,0,58,254,1,0,0,0,60,256,1,0,0,0,62,258,
        1,0,0,0,64,272,1,0,0,0,66,283,1,0,0,0,68,285,1,0,0,0,70,291,1,0,
        0,0,72,73,3,2,1,0,73,74,5,0,0,1,74,1,1,0,0,0,75,77,3,6,3,0,76,75,
        1,0,0,0,77,80,1,0,0,0,78,76,1,0,0,0,78,79,1,0,0,0,79,3,1,0,0,0,80,
        78,1,0,0,0,81,83,3,6,3,0,82,81,1,0,0,0,83,84,1,0,0,0,84,82,1,0,0,
        0,84,85,1,0,0,0,85,5,1,0,0,0,86,101,3,8,4,0,87,101,3,10,5,0,88,101,
        3,12,6,0,89,101,3,18,9,0,90,101,3,20,10,0,91,101,3,24,12,0,92,101,
        3,26,13,0,93,101,3,28,14,0,94,101,3,30,15,0,95,101,3,36,18,0,96,
        101,3,46,23,0,97,101,3,40,20,0,98,101,3,48,24,0,99,101,3,50,25,0,
        100,86,1,0,0,0,100,87,1,0,0,0,100,88,1,0,0,0,100,89,1,0,0,0,100,
        90,1,0,0,0,100,91,1,0,0,0,100,92,1,0,0,0,100,93,1,0,0,0,100,94,1,
        0,0,0,100,95,1,0,0,0,100,96,1,0,0,0,100,97,1,0,0,0,100,98,1,0,0,
        0,100,99,1,0,0,0,101,7,1,0,0,0,102,103,5,43,0,0,103,104,5,1,0,0,
        104,105,3,54,27,0,105,9,1,0,0,0,106,107,5,43,0,0,107,108,5,2,0,0,
        108,109,3,54,27,0,109,110,5,3,0,0,110,111,5,1,0,0,111,112,3,54,27,
        0,112,11,1,0,0,0,113,116,3,14,7,0,114,116,3,16,8,0,115,113,1,0,0,
        0,115,114,1,0,0,0,116,13,1,0,0,0,117,118,5,4,0,0,118,119,3,64,32,
        0,119,120,5,5,0,0,120,121,3,4,2,0,121,122,5,6,0,0,122,15,1,0,0,0,
        123,124,5,4,0,0,124,125,3,64,32,0,125,126,5,5,0,0,126,127,3,4,2,
        0,127,128,5,6,0,0,128,129,5,7,0,0,129,130,5,5,0,0,130,131,3,4,2,
        0,131,132,5,6,0,0,132,17,1,0,0,0,133,134,5,8,0,0,134,135,3,70,35,
        0,135,136,5,5,0,0,136,137,3,4,2,0,137,138,5,6,0,0,138,19,1,0,0,0,
        139,140,3,22,11,0,140,141,3,54,27,0,141,21,1,0,0,0,142,143,7,0,0,
        0,143,23,1,0,0,0,144,145,7,1,0,0,145,25,1,0,0,0,146,147,5,15,0,0,
        147,148,5,16,0,0,148,149,3,54,27,0,149,150,5,17,0,0,150,151,3,54,
        27,0,151,152,5,18,0,0,152,27,1,0,0,0,153,154,5,19,0,0,154,29,1,0,
        0,0,155,156,5,20,0,0,156,157,5,16,0,0,157,158,3,34,17,0,158,159,
        5,18,0,0,159,31,1,0,0,0,160,163,3,54,27,0,161,163,5,45,0,0,162,160,
        1,0,0,0,162,161,1,0,0,0,163,33,1,0,0,0,164,169,3,32,16,0,165,166,
        5,17,0,0,166,168,3,32,16,0,167,165,1,0,0,0,168,171,1,0,0,0,169,167,
        1,0,0,0,169,170,1,0,0,0,170,35,1,0,0,0,171,169,1,0,0,0,172,173,5,
        21,0,0,173,174,5,44,0,0,174,176,5,16,0,0,175,177,3,38,19,0,176,175,
        1,0,0,0,176,177,1,0,0,0,177,178,1,0,0,0,178,179,5,18,0,0,179,180,
        5,5,0,0,180,181,3,4,2,0,181,182,5,6,0,0,182,37,1,0,0,0,183,188,5,
        43,0,0,184,185,5,17,0,0,185,187,5,43,0,0,186,184,1,0,0,0,187,190,
        1,0,0,0,188,186,1,0,0,0,188,189,1,0,0,0,189,39,1,0,0,0,190,188,1,
        0,0,0,191,192,3,42,21,0,192,41,1,0,0,0,193,194,5,44,0,0,194,196,
        5,16,0,0,195,197,3,44,22,0,196,195,1,0,0,0,196,197,1,0,0,0,197,198,
        1,0,0,0,198,199,5,18,0,0,199,43,1,0,0,0,200,205,3,54,27,0,201,202,
        5,17,0,0,202,204,3,54,27,0,203,201,1,0,0,0,204,207,1,0,0,0,205,203,
        1,0,0,0,205,206,1,0,0,0,206,45,1,0,0,0,207,205,1,0,0,0,208,209,5,
        22,0,0,209,210,3,54,27,0,210,47,1,0,0,0,211,212,5,23,0,0,212,213,
        5,43,0,0,213,214,5,2,0,0,214,215,3,54,27,0,215,216,5,3,0,0,216,49,
        1,0,0,0,217,218,3,52,26,0,218,51,1,0,0,0,219,220,5,43,0,0,220,221,
        5,2,0,0,221,222,3,54,27,0,222,223,5,3,0,0,223,53,1,0,0,0,224,225,
        6,27,-1,0,225,226,3,62,31,0,226,227,3,54,27,6,227,234,1,0,0,0,228,
        234,3,70,35,0,229,230,5,16,0,0,230,231,3,54,27,0,231,232,5,18,0,
        0,232,234,1,0,0,0,233,224,1,0,0,0,233,228,1,0,0,0,233,229,1,0,0,
        0,234,249,1,0,0,0,235,236,10,5,0,0,236,237,3,56,28,0,237,238,3,54,
        27,6,238,248,1,0,0,0,239,240,10,4,0,0,240,241,3,58,29,0,241,242,
        3,54,27,5,242,248,1,0,0,0,243,244,10,3,0,0,244,245,3,60,30,0,245,
        246,3,54,27,4,246,248,1,0,0,0,247,235,1,0,0,0,247,239,1,0,0,0,247,
        243,1,0,0,0,248,251,1,0,0,0,249,247,1,0,0,0,249,250,1,0,0,0,250,
        55,1,0,0,0,251,249,1,0,0,0,252,253,5,31,0,0,253,57,1,0,0,0,254,255,
        7,2,0,0,255,59,1,0,0,0,256,257,7,3,0,0,257,61,1,0,0,0,258,259,5,
        27,0,0,259,63,1,0,0,0,260,261,6,32,-1,0,261,262,5,41,0,0,262,273,
        3,64,32,5,263,264,3,54,27,0,264,265,3,66,33,0,265,266,3,54,27,0,
        266,273,1,0,0,0,267,273,5,32,0,0,268,269,5,16,0,0,269,270,3,64,32,
        0,270,271,5,18,0,0,271,273,1,0,0,0,272,260,1,0,0,0,272,263,1,0,0,
        0,272,267,1,0,0,0,272,268,1,0,0,0,273,280,1,0,0,0,274,275,10,3,0,
        0,275,276,3,68,34,0,276,277,3,64,32,4,277,279,1,0,0,0,278,274,1,
        0,0,0,279,282,1,0,0,0,280,278,1,0,0,0,280,281,1,0,0,0,281,65,1,0,
        0,0,282,280,1,0,0,0,283,284,7,4,0,0,284,67,1,0,0,0,285,286,7,5,0,
        0,286,69,1,0,0,0,287,292,3,42,21,0,288,292,3,52,26,0,289,292,5,42,
        0,0,290,292,5,43,0,0,291,287,1,0,0,0,291,288,1,0,0,0,291,289,1,0,
        0,0,291,290,1,0,0,0,292,71,1,0,0,0,16,78,84,100,115,162,169,176,
        188,196,205,233,247,249,272,280,291
    ]

class tlangParser ( Parser ):

    grammarFileName = "tlang.g4"

    atn = ATNDeserializer().deserialize(serializedATN())

    decisionsToDFA = [ DFA(ds, i) for i, ds in enumerate(atn.decisionToState) ]

    sharedContextCache = PredictionContextCache()

    literalNames = [ "<INVALID>", "'='", "'{'", "'}'", "'if'", "'['", "']'", 
                     "'else'", "'repeat'", "'forward'", "'backward'", "'left'", 
                     "'right'", "'penup'", "'pendown'", "'goto'", "'('", 
                     "','", "')'", "'pause'", "'printf'", "'function'", 
                     "'return'", "'array'", "<INVALID>", "<INVALID>", "'+'", 
                     "'-'", "'*'", "'/'", "'%'", "'**'", "'pendown?'", "'<'", 
                     "'>'", "'=='", "'!='", "'<='", "'>='", "'&&'", "'||'", 
                     "'!'" ]

    symbolicNames = [ "<INVALID>", "<INVALID>", "<INVALID>", "<INVALID>", 
                      "<INVALID>", "<INVALID>", "<INVALID>", "<INVALID>", 
                      "<INVALID>", "<INVALID>", "<INVALID>", "<INVALID>", 
                      "<INVALID>", "<INVALID>", "<INVALID>", "<INVALID>", 
                      "<INVALID>", "<INVALID>", "<INVALID>", "<INVALID>", 
                      "<INVALID>", "<INVALID>", "<INVALID>", "<INVALID>", 
                      "SingleLineComment", "BlockComment", "PLUS", "MINUS", 
                      "MUL", "DIV", "MOD", "EXPO", "PENCOND", "LT", "GT", 
                      "EQ", "NEQ", "LTE", "GTE", "AND", "OR", "NOT", "NUM", 
                      "VAR", "NAME", "STRING", "Whitespace" ]

    RULE_start = 0
    RULE_instruction_list = 1
    RULE_strict_ilist = 2
    RULE_instruction = 3
    RULE_assignment = 4
    RULE_arrayAssignment = 5
    RULE_conditional = 6
    RULE_ifConditional = 7
    RULE_ifElseConditional = 8
    RULE_loop = 9
    RULE_moveCommand = 10
    RULE_moveOp = 11
    RULE_penCommand = 12
    RULE_gotoCommand = 13
    RULE_pauseCommand = 14
    RULE_printfCommand = 15
    RULE_printArg = 16
    RULE_printList = 17
    RULE_functionDecl = 18
    RULE_paramList = 19
    RULE_functionCallCommand = 20
    RULE_functionCall = 21
    RULE_argList = 22
    RULE_returnCommand = 23
    RULE_arrayDecl = 24
    RULE_arrayAccessCommand = 25
    RULE_arrayAccess = 26
    RULE_expression = 27
    RULE_exponentiative = 28
    RULE_multiplicative = 29
    RULE_additive = 30
    RULE_unaryArithOp = 31
    RULE_condition = 32
    RULE_binCondOp = 33
    RULE_logicOp = 34
    RULE_value = 35

    ruleNames =  [ "start", "instruction_list", "strict_ilist", "instruction", 
                   "assignment", "arrayAssignment", "conditional", "ifConditional", 
                   "ifElseConditional", "loop", "moveCommand", "moveOp", 
                   "penCommand", "gotoCommand", "pauseCommand", "printfCommand", 
                   "printArg", "printList", "functionDecl", "paramList", 
                   "functionCallCommand", "functionCall", "argList", "returnCommand", 
                   "arrayDecl", "arrayAccessCommand", "arrayAccess", "expression", 
                   "exponentiative", "multiplicative", "additive", "unaryArithOp", 
                   "condition", "binCondOp", "logicOp", "value" ]

    EOF = Token.EOF
    T__0=1
    T__1=2
    T__2=3
    T__3=4
    T__4=5
    T__5=6
    T__6=7
    T__7=8
    T__8=9
    T__9=10
    T__10=11
    T__11=12
    T__12=13
    T__13=14
    T__14=15
    T__15=16
    T__16=17
    T__17=18
    T__18=19
    T__19=20
    T__20=21
    T__21=22
    T__22=23
    SingleLineComment=24
    BlockComment=25
    PLUS=26
    MINUS=27
    MUL=28
    DIV=29
    MOD=30
    EXPO=31
    PENCOND=32
    LT=33
    GT=34
    EQ=35
    NEQ=36
    LTE=37
    GTE=38
    AND=39
    OR=40
    NOT=41
    NUM=42
    VAR=43
    NAME=44
    STRING=45
    Whitespace=46

    def __init__(self, input:TokenStream, output:TextIO = sys.stdout):
        super().__init__(input, output)
        self.checkVersion("4.13.2")
        self._interp = ParserATNSimulator(self, self.atn, self.decisionsToDFA, self.sharedContextCache)
        self._predicates = None




    class StartContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def instruction_list(self):
            return self.getTypedRuleContext(tlangParser.Instruction_listContext,0)


        def EOF(self):
            return self.getToken(tlangParser.EOF, 0)

        def getRuleIndex(self):
            return tlangParser.RULE_start

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitStart" ):
                return visitor.visitStart(self)
            else:
                return visitor.visitChildren(self)




    def start(self):

        localctx = tlangParser.StartContext(self, self._ctx, self.state)
        self.enterRule(localctx, 0, self.RULE_start)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 72
            self.instruction_list()
            self.state = 73
            self.match(tlangParser.EOF)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class Instruction_listContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def instruction(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(tlangParser.InstructionContext)
            else:
                return self.getTypedRuleContext(tlangParser.InstructionContext,i)


        def getRuleIndex(self):
            return tlangParser.RULE_instruction_list

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitInstruction_list" ):
                return visitor.visitInstruction_list(self)
            else:
                return visitor.visitChildren(self)




    def instruction_list(self):

        localctx = tlangParser.Instruction_listContext(self, self._ctx, self.state)
        self.enterRule(localctx, 2, self.RULE_instruction_list)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 78
            self._errHandler.sync(self)
            _la = self._input.LA(1)
            while (((_la) & ~0x3f) == 0 and ((1 << _la) & 26388295384848) != 0):
                self.state = 75
                self.instruction()
                self.state = 80
                self._errHandler.sync(self)
                _la = self._input.LA(1)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class Strict_ilistContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def instruction(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(tlangParser.InstructionContext)
            else:
                return self.getTypedRuleContext(tlangParser.InstructionContext,i)


        def getRuleIndex(self):
            return tlangParser.RULE_strict_ilist

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitStrict_ilist" ):
                return visitor.visitStrict_ilist(self)
            else:
                return visitor.visitChildren(self)




    def strict_ilist(self):

        localctx = tlangParser.Strict_ilistContext(self, self._ctx, self.state)
        self.enterRule(localctx, 4, self.RULE_strict_ilist)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 82 
            self._errHandler.sync(self)
            _la = self._input.LA(1)
            while True:
                self.state = 81
                self.instruction()
                self.state = 84 
                self._errHandler.sync(self)
                _la = self._input.LA(1)
                if not ((((_la) & ~0x3f) == 0 and ((1 << _la) & 26388295384848) != 0)):
                    break

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class InstructionContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def assignment(self):
            return self.getTypedRuleContext(tlangParser.AssignmentContext,0)


        def arrayAssignment(self):
            return self.getTypedRuleContext(tlangParser.ArrayAssignmentContext,0)


        def conditional(self):
            return self.getTypedRuleContext(tlangParser.ConditionalContext,0)


        def loop(self):
            return self.getTypedRuleContext(tlangParser.LoopContext,0)


        def moveCommand(self):
            return self.getTypedRuleContext(tlangParser.MoveCommandContext,0)


        def penCommand(self):
            return self.getTypedRuleContext(tlangParser.PenCommandContext,0)


        def gotoCommand(self):
            return self.getTypedRuleContext(tlangParser.GotoCommandContext,0)


        def pauseCommand(self):
            return self.getTypedRuleContext(tlangParser.PauseCommandContext,0)


        def printfCommand(self):
            return self.getTypedRuleContext(tlangParser.PrintfCommandContext,0)


        def functionDecl(self):
            return self.getTypedRuleContext(tlangParser.FunctionDeclContext,0)


        def returnCommand(self):
            return self.getTypedRuleContext(tlangParser.ReturnCommandContext,0)


        def functionCallCommand(self):
            return self.getTypedRuleContext(tlangParser.FunctionCallCommandContext,0)


        def arrayDecl(self):
            return self.getTypedRuleContext(tlangParser.ArrayDeclContext,0)


        def arrayAccessCommand(self):
            return self.getTypedRuleContext(tlangParser.ArrayAccessCommandContext,0)


        def getRuleIndex(self):
            return tlangParser.RULE_instruction

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitInstruction" ):
                return visitor.visitInstruction(self)
            else:
                return visitor.visitChildren(self)




    def instruction(self):

        localctx = tlangParser.InstructionContext(self, self._ctx, self.state)
        self.enterRule(localctx, 6, self.RULE_instruction)
        try:
            self.state = 100
            self._errHandler.sync(self)
            la_ = self._interp.adaptivePredict(self._input,2,self._ctx)
            if la_ == 1:
                self.enterOuterAlt(localctx, 1)
                self.state = 86
                self.assignment()
                pass

            elif la_ == 2:
                self.enterOuterAlt(localctx, 2)
                self.state = 87
                self.arrayAssignment()
                pass

            elif la_ == 3:
                self.enterOuterAlt(localctx, 3)
                self.state = 88
                self.conditional()
                pass

            elif la_ == 4:
                self.enterOuterAlt(localctx, 4)
                self.state = 89
                self.loop()
                pass

            elif la_ == 5:
                self.enterOuterAlt(localctx, 5)
                self.state = 90
                self.moveCommand()
                pass

            elif la_ == 6:
                self.enterOuterAlt(localctx, 6)
                self.state = 91
                self.penCommand()
                pass

            elif la_ == 7:
                self.enterOuterAlt(localctx, 7)
                self.state = 92
                self.gotoCommand()
                pass

            elif la_ == 8:
                self.enterOuterAlt(localctx, 8)
                self.state = 93
                self.pauseCommand()
                pass

            elif la_ == 9:
                self.enterOuterAlt(localctx, 9)
                self.state = 94
                self.printfCommand()
                pass

            elif la_ == 10:
                self.enterOuterAlt(localctx, 10)
                self.state = 95
                self.functionDecl()
                pass

            elif la_ == 11:
                self.enterOuterAlt(localctx, 11)
                self.state = 96
                self.returnCommand()
                pass

            elif la_ == 12:
                self.enterOuterAlt(localctx, 12)
                self.state = 97
                self.functionCallCommand()
                pass

            elif la_ == 13:
                self.enterOuterAlt(localctx, 13)
                self.state = 98
                self.arrayDecl()
                pass

            elif la_ == 14:
                self.enterOuterAlt(localctx, 14)
                self.state = 99
                self.arrayAccessCommand()
                pass


        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class AssignmentContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def VAR(self):
            return self.getToken(tlangParser.VAR, 0)

        def expression(self):
            return self.getTypedRuleContext(tlangParser.ExpressionContext,0)


        def getRuleIndex(self):
            return tlangParser.RULE_assignment

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitAssignment" ):
                return visitor.visitAssignment(self)
            else:
                return visitor.visitChildren(self)




    def assignment(self):

        localctx = tlangParser.AssignmentContext(self, self._ctx, self.state)
        self.enterRule(localctx, 8, self.RULE_assignment)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 102
            self.match(tlangParser.VAR)
            self.state = 103
            self.match(tlangParser.T__0)
            self.state = 104
            self.expression(0)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class ArrayAssignmentContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def VAR(self):
            return self.getToken(tlangParser.VAR, 0)

        def expression(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(tlangParser.ExpressionContext)
            else:
                return self.getTypedRuleContext(tlangParser.ExpressionContext,i)


        def getRuleIndex(self):
            return tlangParser.RULE_arrayAssignment

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitArrayAssignment" ):
                return visitor.visitArrayAssignment(self)
            else:
                return visitor.visitChildren(self)




    def arrayAssignment(self):

        localctx = tlangParser.ArrayAssignmentContext(self, self._ctx, self.state)
        self.enterRule(localctx, 10, self.RULE_arrayAssignment)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 106
            self.match(tlangParser.VAR)
            self.state = 107
            self.match(tlangParser.T__1)
            self.state = 108
            self.expression(0)
            self.state = 109
            self.match(tlangParser.T__2)
            self.state = 110
            self.match(tlangParser.T__0)
            self.state = 111
            self.expression(0)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class ConditionalContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def ifConditional(self):
            return self.getTypedRuleContext(tlangParser.IfConditionalContext,0)


        def ifElseConditional(self):
            return self.getTypedRuleContext(tlangParser.IfElseConditionalContext,0)


        def getRuleIndex(self):
            return tlangParser.RULE_conditional

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitConditional" ):
                return visitor.visitConditional(self)
            else:
                return visitor.visitChildren(self)




    def conditional(self):

        localctx = tlangParser.ConditionalContext(self, self._ctx, self.state)
        self.enterRule(localctx, 12, self.RULE_conditional)
        try:
            self.state = 115
            self._errHandler.sync(self)
            la_ = self._interp.adaptivePredict(self._input,3,self._ctx)
            if la_ == 1:
                self.enterOuterAlt(localctx, 1)
                self.state = 113
                self.ifConditional()
                pass

            elif la_ == 2:
                self.enterOuterAlt(localctx, 2)
                self.state = 114
                self.ifElseConditional()
                pass


        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class IfConditionalContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def condition(self):
            return self.getTypedRuleContext(tlangParser.ConditionContext,0)


        def strict_ilist(self):
            return self.getTypedRuleContext(tlangParser.Strict_ilistContext,0)


        def getRuleIndex(self):
            return tlangParser.RULE_ifConditional

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitIfConditional" ):
                return visitor.visitIfConditional(self)
            else:
                return visitor.visitChildren(self)




    def ifConditional(self):

        localctx = tlangParser.IfConditionalContext(self, self._ctx, self.state)
        self.enterRule(localctx, 14, self.RULE_ifConditional)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 117
            self.match(tlangParser.T__3)
            self.state = 118
            self.condition(0)
            self.state = 119
            self.match(tlangParser.T__4)
            self.state = 120
            self.strict_ilist()
            self.state = 121
            self.match(tlangParser.T__5)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class IfElseConditionalContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def condition(self):
            return self.getTypedRuleContext(tlangParser.ConditionContext,0)


        def strict_ilist(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(tlangParser.Strict_ilistContext)
            else:
                return self.getTypedRuleContext(tlangParser.Strict_ilistContext,i)


        def getRuleIndex(self):
            return tlangParser.RULE_ifElseConditional

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitIfElseConditional" ):
                return visitor.visitIfElseConditional(self)
            else:
                return visitor.visitChildren(self)




    def ifElseConditional(self):

        localctx = tlangParser.IfElseConditionalContext(self, self._ctx, self.state)
        self.enterRule(localctx, 16, self.RULE_ifElseConditional)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 123
            self.match(tlangParser.T__3)
            self.state = 124
            self.condition(0)
            self.state = 125
            self.match(tlangParser.T__4)
            self.state = 126
            self.strict_ilist()
            self.state = 127
            self.match(tlangParser.T__5)
            self.state = 128
            self.match(tlangParser.T__6)
            self.state = 129
            self.match(tlangParser.T__4)
            self.state = 130
            self.strict_ilist()
            self.state = 131
            self.match(tlangParser.T__5)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class LoopContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def value(self):
            return self.getTypedRuleContext(tlangParser.ValueContext,0)


        def strict_ilist(self):
            return self.getTypedRuleContext(tlangParser.Strict_ilistContext,0)


        def getRuleIndex(self):
            return tlangParser.RULE_loop

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitLoop" ):
                return visitor.visitLoop(self)
            else:
                return visitor.visitChildren(self)




    def loop(self):

        localctx = tlangParser.LoopContext(self, self._ctx, self.state)
        self.enterRule(localctx, 18, self.RULE_loop)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 133
            self.match(tlangParser.T__7)
            self.state = 134
            self.value()
            self.state = 135
            self.match(tlangParser.T__4)
            self.state = 136
            self.strict_ilist()
            self.state = 137
            self.match(tlangParser.T__5)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class MoveCommandContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def moveOp(self):
            return self.getTypedRuleContext(tlangParser.MoveOpContext,0)


        def expression(self):
            return self.getTypedRuleContext(tlangParser.ExpressionContext,0)


        def getRuleIndex(self):
            return tlangParser.RULE_moveCommand

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitMoveCommand" ):
                return visitor.visitMoveCommand(self)
            else:
                return visitor.visitChildren(self)




    def moveCommand(self):

        localctx = tlangParser.MoveCommandContext(self, self._ctx, self.state)
        self.enterRule(localctx, 20, self.RULE_moveCommand)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 139
            self.moveOp()
            self.state = 140
            self.expression(0)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class MoveOpContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser


        def getRuleIndex(self):
            return tlangParser.RULE_moveOp

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitMoveOp" ):
                return visitor.visitMoveOp(self)
            else:
                return visitor.visitChildren(self)




    def moveOp(self):

        localctx = tlangParser.MoveOpContext(self, self._ctx, self.state)
        self.enterRule(localctx, 22, self.RULE_moveOp)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 142
            _la = self._input.LA(1)
            if not((((_la) & ~0x3f) == 0 and ((1 << _la) & 7680) != 0)):
                self._errHandler.recoverInline(self)
            else:
                self._errHandler.reportMatch(self)
                self.consume()
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class PenCommandContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser


        def getRuleIndex(self):
            return tlangParser.RULE_penCommand

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitPenCommand" ):
                return visitor.visitPenCommand(self)
            else:
                return visitor.visitChildren(self)




    def penCommand(self):

        localctx = tlangParser.PenCommandContext(self, self._ctx, self.state)
        self.enterRule(localctx, 24, self.RULE_penCommand)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 144
            _la = self._input.LA(1)
            if not(_la==13 or _la==14):
                self._errHandler.recoverInline(self)
            else:
                self._errHandler.reportMatch(self)
                self.consume()
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class GotoCommandContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def expression(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(tlangParser.ExpressionContext)
            else:
                return self.getTypedRuleContext(tlangParser.ExpressionContext,i)


        def getRuleIndex(self):
            return tlangParser.RULE_gotoCommand

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitGotoCommand" ):
                return visitor.visitGotoCommand(self)
            else:
                return visitor.visitChildren(self)




    def gotoCommand(self):

        localctx = tlangParser.GotoCommandContext(self, self._ctx, self.state)
        self.enterRule(localctx, 26, self.RULE_gotoCommand)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 146
            self.match(tlangParser.T__14)
            self.state = 147
            self.match(tlangParser.T__15)
            self.state = 148
            self.expression(0)
            self.state = 149
            self.match(tlangParser.T__16)
            self.state = 150
            self.expression(0)
            self.state = 151
            self.match(tlangParser.T__17)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class PauseCommandContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser


        def getRuleIndex(self):
            return tlangParser.RULE_pauseCommand

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitPauseCommand" ):
                return visitor.visitPauseCommand(self)
            else:
                return visitor.visitChildren(self)




    def pauseCommand(self):

        localctx = tlangParser.PauseCommandContext(self, self._ctx, self.state)
        self.enterRule(localctx, 28, self.RULE_pauseCommand)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 153
            self.match(tlangParser.T__18)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class PrintfCommandContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def printList(self):
            return self.getTypedRuleContext(tlangParser.PrintListContext,0)


        def getRuleIndex(self):
            return tlangParser.RULE_printfCommand

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitPrintfCommand" ):
                return visitor.visitPrintfCommand(self)
            else:
                return visitor.visitChildren(self)




    def printfCommand(self):

        localctx = tlangParser.PrintfCommandContext(self, self._ctx, self.state)
        self.enterRule(localctx, 30, self.RULE_printfCommand)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 155
            self.match(tlangParser.T__19)
            self.state = 156
            self.match(tlangParser.T__15)
            self.state = 157
            self.printList()
            self.state = 158
            self.match(tlangParser.T__17)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class PrintArgContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def expression(self):
            return self.getTypedRuleContext(tlangParser.ExpressionContext,0)


        def STRING(self):
            return self.getToken(tlangParser.STRING, 0)

        def getRuleIndex(self):
            return tlangParser.RULE_printArg

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitPrintArg" ):
                return visitor.visitPrintArg(self)
            else:
                return visitor.visitChildren(self)




    def printArg(self):

        localctx = tlangParser.PrintArgContext(self, self._ctx, self.state)
        self.enterRule(localctx, 32, self.RULE_printArg)
        try:
            self.state = 162
            self._errHandler.sync(self)
            token = self._input.LA(1)
            if token in [16, 27, 42, 43, 44]:
                self.enterOuterAlt(localctx, 1)
                self.state = 160
                self.expression(0)
                pass
            elif token in [45]:
                self.enterOuterAlt(localctx, 2)
                self.state = 161
                self.match(tlangParser.STRING)
                pass
            else:
                raise NoViableAltException(self)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class PrintListContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def printArg(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(tlangParser.PrintArgContext)
            else:
                return self.getTypedRuleContext(tlangParser.PrintArgContext,i)


        def getRuleIndex(self):
            return tlangParser.RULE_printList

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitPrintList" ):
                return visitor.visitPrintList(self)
            else:
                return visitor.visitChildren(self)




    def printList(self):

        localctx = tlangParser.PrintListContext(self, self._ctx, self.state)
        self.enterRule(localctx, 34, self.RULE_printList)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 164
            self.printArg()
            self.state = 169
            self._errHandler.sync(self)
            _la = self._input.LA(1)
            while _la==17:
                self.state = 165
                self.match(tlangParser.T__16)
                self.state = 166
                self.printArg()
                self.state = 171
                self._errHandler.sync(self)
                _la = self._input.LA(1)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class FunctionDeclContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def NAME(self):
            return self.getToken(tlangParser.NAME, 0)

        def strict_ilist(self):
            return self.getTypedRuleContext(tlangParser.Strict_ilistContext,0)


        def paramList(self):
            return self.getTypedRuleContext(tlangParser.ParamListContext,0)


        def getRuleIndex(self):
            return tlangParser.RULE_functionDecl

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitFunctionDecl" ):
                return visitor.visitFunctionDecl(self)
            else:
                return visitor.visitChildren(self)




    def functionDecl(self):

        localctx = tlangParser.FunctionDeclContext(self, self._ctx, self.state)
        self.enterRule(localctx, 36, self.RULE_functionDecl)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 172
            self.match(tlangParser.T__20)
            self.state = 173
            self.match(tlangParser.NAME)
            self.state = 174
            self.match(tlangParser.T__15)
            self.state = 176
            self._errHandler.sync(self)
            _la = self._input.LA(1)
            if _la==43:
                self.state = 175
                self.paramList()


            self.state = 178
            self.match(tlangParser.T__17)
            self.state = 179
            self.match(tlangParser.T__4)
            self.state = 180
            self.strict_ilist()
            self.state = 181
            self.match(tlangParser.T__5)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class ParamListContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def VAR(self, i:int=None):
            if i is None:
                return self.getTokens(tlangParser.VAR)
            else:
                return self.getToken(tlangParser.VAR, i)

        def getRuleIndex(self):
            return tlangParser.RULE_paramList

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitParamList" ):
                return visitor.visitParamList(self)
            else:
                return visitor.visitChildren(self)




    def paramList(self):

        localctx = tlangParser.ParamListContext(self, self._ctx, self.state)
        self.enterRule(localctx, 38, self.RULE_paramList)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 183
            self.match(tlangParser.VAR)
            self.state = 188
            self._errHandler.sync(self)
            _la = self._input.LA(1)
            while _la==17:
                self.state = 184
                self.match(tlangParser.T__16)
                self.state = 185
                self.match(tlangParser.VAR)
                self.state = 190
                self._errHandler.sync(self)
                _la = self._input.LA(1)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class FunctionCallCommandContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def functionCall(self):
            return self.getTypedRuleContext(tlangParser.FunctionCallContext,0)


        def getRuleIndex(self):
            return tlangParser.RULE_functionCallCommand

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitFunctionCallCommand" ):
                return visitor.visitFunctionCallCommand(self)
            else:
                return visitor.visitChildren(self)




    def functionCallCommand(self):

        localctx = tlangParser.FunctionCallCommandContext(self, self._ctx, self.state)
        self.enterRule(localctx, 40, self.RULE_functionCallCommand)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 191
            self.functionCall()
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class FunctionCallContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def NAME(self):
            return self.getToken(tlangParser.NAME, 0)

        def argList(self):
            return self.getTypedRuleContext(tlangParser.ArgListContext,0)


        def getRuleIndex(self):
            return tlangParser.RULE_functionCall

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitFunctionCall" ):
                return visitor.visitFunctionCall(self)
            else:
                return visitor.visitChildren(self)




    def functionCall(self):

        localctx = tlangParser.FunctionCallContext(self, self._ctx, self.state)
        self.enterRule(localctx, 42, self.RULE_functionCall)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 193
            self.match(tlangParser.NAME)
            self.state = 194
            self.match(tlangParser.T__15)
            self.state = 196
            self._errHandler.sync(self)
            _la = self._input.LA(1)
            if (((_la) & ~0x3f) == 0 and ((1 << _la) & 30786459860992) != 0):
                self.state = 195
                self.argList()


            self.state = 198
            self.match(tlangParser.T__17)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class ArgListContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def expression(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(tlangParser.ExpressionContext)
            else:
                return self.getTypedRuleContext(tlangParser.ExpressionContext,i)


        def getRuleIndex(self):
            return tlangParser.RULE_argList

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitArgList" ):
                return visitor.visitArgList(self)
            else:
                return visitor.visitChildren(self)




    def argList(self):

        localctx = tlangParser.ArgListContext(self, self._ctx, self.state)
        self.enterRule(localctx, 44, self.RULE_argList)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 200
            self.expression(0)
            self.state = 205
            self._errHandler.sync(self)
            _la = self._input.LA(1)
            while _la==17:
                self.state = 201
                self.match(tlangParser.T__16)
                self.state = 202
                self.expression(0)
                self.state = 207
                self._errHandler.sync(self)
                _la = self._input.LA(1)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class ReturnCommandContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def expression(self):
            return self.getTypedRuleContext(tlangParser.ExpressionContext,0)


        def getRuleIndex(self):
            return tlangParser.RULE_returnCommand

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitReturnCommand" ):
                return visitor.visitReturnCommand(self)
            else:
                return visitor.visitChildren(self)




    def returnCommand(self):

        localctx = tlangParser.ReturnCommandContext(self, self._ctx, self.state)
        self.enterRule(localctx, 46, self.RULE_returnCommand)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 208
            self.match(tlangParser.T__21)
            self.state = 209
            self.expression(0)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class ArrayDeclContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def VAR(self):
            return self.getToken(tlangParser.VAR, 0)

        def expression(self):
            return self.getTypedRuleContext(tlangParser.ExpressionContext,0)


        def getRuleIndex(self):
            return tlangParser.RULE_arrayDecl

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitArrayDecl" ):
                return visitor.visitArrayDecl(self)
            else:
                return visitor.visitChildren(self)




    def arrayDecl(self):

        localctx = tlangParser.ArrayDeclContext(self, self._ctx, self.state)
        self.enterRule(localctx, 48, self.RULE_arrayDecl)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 211
            self.match(tlangParser.T__22)
            self.state = 212
            self.match(tlangParser.VAR)
            self.state = 213
            self.match(tlangParser.T__1)
            self.state = 214
            self.expression(0)
            self.state = 215
            self.match(tlangParser.T__2)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class ArrayAccessCommandContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def arrayAccess(self):
            return self.getTypedRuleContext(tlangParser.ArrayAccessContext,0)


        def getRuleIndex(self):
            return tlangParser.RULE_arrayAccessCommand

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitArrayAccessCommand" ):
                return visitor.visitArrayAccessCommand(self)
            else:
                return visitor.visitChildren(self)




    def arrayAccessCommand(self):

        localctx = tlangParser.ArrayAccessCommandContext(self, self._ctx, self.state)
        self.enterRule(localctx, 50, self.RULE_arrayAccessCommand)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 217
            self.arrayAccess()
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class ArrayAccessContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def VAR(self):
            return self.getToken(tlangParser.VAR, 0)

        def expression(self):
            return self.getTypedRuleContext(tlangParser.ExpressionContext,0)


        def getRuleIndex(self):
            return tlangParser.RULE_arrayAccess

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitArrayAccess" ):
                return visitor.visitArrayAccess(self)
            else:
                return visitor.visitChildren(self)




    def arrayAccess(self):

        localctx = tlangParser.ArrayAccessContext(self, self._ctx, self.state)
        self.enterRule(localctx, 52, self.RULE_arrayAccess)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 219
            self.match(tlangParser.VAR)
            self.state = 220
            self.match(tlangParser.T__1)
            self.state = 221
            self.expression(0)
            self.state = 222
            self.match(tlangParser.T__2)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class ExpressionContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser


        def getRuleIndex(self):
            return tlangParser.RULE_expression

     
        def copyFrom(self, ctx:ParserRuleContext):
            super().copyFrom(ctx)


    class UnaryExprContext(ExpressionContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a tlangParser.ExpressionContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def unaryArithOp(self):
            return self.getTypedRuleContext(tlangParser.UnaryArithOpContext,0)

        def expression(self):
            return self.getTypedRuleContext(tlangParser.ExpressionContext,0)


        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitUnaryExpr" ):
                return visitor.visitUnaryExpr(self)
            else:
                return visitor.visitChildren(self)


    class ValueExprContext(ExpressionContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a tlangParser.ExpressionContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def value(self):
            return self.getTypedRuleContext(tlangParser.ValueContext,0)


        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitValueExpr" ):
                return visitor.visitValueExpr(self)
            else:
                return visitor.visitChildren(self)


    class AddExprContext(ExpressionContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a tlangParser.ExpressionContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def expression(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(tlangParser.ExpressionContext)
            else:
                return self.getTypedRuleContext(tlangParser.ExpressionContext,i)

        def additive(self):
            return self.getTypedRuleContext(tlangParser.AdditiveContext,0)


        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitAddExpr" ):
                return visitor.visitAddExpr(self)
            else:
                return visitor.visitChildren(self)


    class MulExprContext(ExpressionContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a tlangParser.ExpressionContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def expression(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(tlangParser.ExpressionContext)
            else:
                return self.getTypedRuleContext(tlangParser.ExpressionContext,i)

        def multiplicative(self):
            return self.getTypedRuleContext(tlangParser.MultiplicativeContext,0)


        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitMulExpr" ):
                return visitor.visitMulExpr(self)
            else:
                return visitor.visitChildren(self)


    class ExpoExprContext(ExpressionContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a tlangParser.ExpressionContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def expression(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(tlangParser.ExpressionContext)
            else:
                return self.getTypedRuleContext(tlangParser.ExpressionContext,i)

        def exponentiative(self):
            return self.getTypedRuleContext(tlangParser.ExponentiativeContext,0)


        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitExpoExpr" ):
                return visitor.visitExpoExpr(self)
            else:
                return visitor.visitChildren(self)


    class ParenExprContext(ExpressionContext):

        def __init__(self, parser, ctx:ParserRuleContext): # actually a tlangParser.ExpressionContext
            super().__init__(parser)
            self.copyFrom(ctx)

        def expression(self):
            return self.getTypedRuleContext(tlangParser.ExpressionContext,0)


        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitParenExpr" ):
                return visitor.visitParenExpr(self)
            else:
                return visitor.visitChildren(self)



    def expression(self, _p:int=0):
        _parentctx = self._ctx
        _parentState = self.state
        localctx = tlangParser.ExpressionContext(self, self._ctx, _parentState)
        _prevctx = localctx
        _startState = 54
        self.enterRecursionRule(localctx, 54, self.RULE_expression, _p)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 233
            self._errHandler.sync(self)
            token = self._input.LA(1)
            if token in [27]:
                localctx = tlangParser.UnaryExprContext(self, localctx)
                self._ctx = localctx
                _prevctx = localctx

                self.state = 225
                self.unaryArithOp()
                self.state = 226
                self.expression(6)
                pass
            elif token in [42, 43, 44]:
                localctx = tlangParser.ValueExprContext(self, localctx)
                self._ctx = localctx
                _prevctx = localctx
                self.state = 228
                self.value()
                pass
            elif token in [16]:
                localctx = tlangParser.ParenExprContext(self, localctx)
                self._ctx = localctx
                _prevctx = localctx
                self.state = 229
                self.match(tlangParser.T__15)
                self.state = 230
                self.expression(0)
                self.state = 231
                self.match(tlangParser.T__17)
                pass
            else:
                raise NoViableAltException(self)

            self._ctx.stop = self._input.LT(-1)
            self.state = 249
            self._errHandler.sync(self)
            _alt = self._interp.adaptivePredict(self._input,12,self._ctx)
            while _alt!=2 and _alt!=ATN.INVALID_ALT_NUMBER:
                if _alt==1:
                    if self._parseListeners is not None:
                        self.triggerExitRuleEvent()
                    _prevctx = localctx
                    self.state = 247
                    self._errHandler.sync(self)
                    la_ = self._interp.adaptivePredict(self._input,11,self._ctx)
                    if la_ == 1:
                        localctx = tlangParser.ExpoExprContext(self, tlangParser.ExpressionContext(self, _parentctx, _parentState))
                        self.pushNewRecursionContext(localctx, _startState, self.RULE_expression)
                        self.state = 235
                        if not self.precpred(self._ctx, 5):
                            from antlr4.error.Errors import FailedPredicateException
                            raise FailedPredicateException(self, "self.precpred(self._ctx, 5)")
                        self.state = 236
                        self.exponentiative()
                        self.state = 237
                        self.expression(6)
                        pass

                    elif la_ == 2:
                        localctx = tlangParser.MulExprContext(self, tlangParser.ExpressionContext(self, _parentctx, _parentState))
                        self.pushNewRecursionContext(localctx, _startState, self.RULE_expression)
                        self.state = 239
                        if not self.precpred(self._ctx, 4):
                            from antlr4.error.Errors import FailedPredicateException
                            raise FailedPredicateException(self, "self.precpred(self._ctx, 4)")
                        self.state = 240
                        self.multiplicative()
                        self.state = 241
                        self.expression(5)
                        pass

                    elif la_ == 3:
                        localctx = tlangParser.AddExprContext(self, tlangParser.ExpressionContext(self, _parentctx, _parentState))
                        self.pushNewRecursionContext(localctx, _startState, self.RULE_expression)
                        self.state = 243
                        if not self.precpred(self._ctx, 3):
                            from antlr4.error.Errors import FailedPredicateException
                            raise FailedPredicateException(self, "self.precpred(self._ctx, 3)")
                        self.state = 244
                        self.additive()
                        self.state = 245
                        self.expression(4)
                        pass

             
                self.state = 251
                self._errHandler.sync(self)
                _alt = self._interp.adaptivePredict(self._input,12,self._ctx)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.unrollRecursionContexts(_parentctx)
        return localctx


    class ExponentiativeContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def EXPO(self):
            return self.getToken(tlangParser.EXPO, 0)

        def getRuleIndex(self):
            return tlangParser.RULE_exponentiative

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitExponentiative" ):
                return visitor.visitExponentiative(self)
            else:
                return visitor.visitChildren(self)




    def exponentiative(self):

        localctx = tlangParser.ExponentiativeContext(self, self._ctx, self.state)
        self.enterRule(localctx, 56, self.RULE_exponentiative)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 252
            self.match(tlangParser.EXPO)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class MultiplicativeContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def MUL(self):
            return self.getToken(tlangParser.MUL, 0)

        def DIV(self):
            return self.getToken(tlangParser.DIV, 0)

        def MOD(self):
            return self.getToken(tlangParser.MOD, 0)

        def getRuleIndex(self):
            return tlangParser.RULE_multiplicative

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitMultiplicative" ):
                return visitor.visitMultiplicative(self)
            else:
                return visitor.visitChildren(self)




    def multiplicative(self):

        localctx = tlangParser.MultiplicativeContext(self, self._ctx, self.state)
        self.enterRule(localctx, 58, self.RULE_multiplicative)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 254
            _la = self._input.LA(1)
            if not((((_la) & ~0x3f) == 0 and ((1 << _la) & 1879048192) != 0)):
                self._errHandler.recoverInline(self)
            else:
                self._errHandler.reportMatch(self)
                self.consume()
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class AdditiveContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def PLUS(self):
            return self.getToken(tlangParser.PLUS, 0)

        def MINUS(self):
            return self.getToken(tlangParser.MINUS, 0)

        def getRuleIndex(self):
            return tlangParser.RULE_additive

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitAdditive" ):
                return visitor.visitAdditive(self)
            else:
                return visitor.visitChildren(self)




    def additive(self):

        localctx = tlangParser.AdditiveContext(self, self._ctx, self.state)
        self.enterRule(localctx, 60, self.RULE_additive)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 256
            _la = self._input.LA(1)
            if not(_la==26 or _la==27):
                self._errHandler.recoverInline(self)
            else:
                self._errHandler.reportMatch(self)
                self.consume()
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class UnaryArithOpContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def MINUS(self):
            return self.getToken(tlangParser.MINUS, 0)

        def getRuleIndex(self):
            return tlangParser.RULE_unaryArithOp

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitUnaryArithOp" ):
                return visitor.visitUnaryArithOp(self)
            else:
                return visitor.visitChildren(self)




    def unaryArithOp(self):

        localctx = tlangParser.UnaryArithOpContext(self, self._ctx, self.state)
        self.enterRule(localctx, 62, self.RULE_unaryArithOp)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 258
            self.match(tlangParser.MINUS)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class ConditionContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def NOT(self):
            return self.getToken(tlangParser.NOT, 0)

        def condition(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(tlangParser.ConditionContext)
            else:
                return self.getTypedRuleContext(tlangParser.ConditionContext,i)


        def expression(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(tlangParser.ExpressionContext)
            else:
                return self.getTypedRuleContext(tlangParser.ExpressionContext,i)


        def binCondOp(self):
            return self.getTypedRuleContext(tlangParser.BinCondOpContext,0)


        def PENCOND(self):
            return self.getToken(tlangParser.PENCOND, 0)

        def logicOp(self):
            return self.getTypedRuleContext(tlangParser.LogicOpContext,0)


        def getRuleIndex(self):
            return tlangParser.RULE_condition

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitCondition" ):
                return visitor.visitCondition(self)
            else:
                return visitor.visitChildren(self)



    def condition(self, _p:int=0):
        _parentctx = self._ctx
        _parentState = self.state
        localctx = tlangParser.ConditionContext(self, self._ctx, _parentState)
        _prevctx = localctx
        _startState = 64
        self.enterRecursionRule(localctx, 64, self.RULE_condition, _p)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 272
            self._errHandler.sync(self)
            la_ = self._interp.adaptivePredict(self._input,13,self._ctx)
            if la_ == 1:
                self.state = 261
                self.match(tlangParser.NOT)
                self.state = 262
                self.condition(5)
                pass

            elif la_ == 2:
                self.state = 263
                self.expression(0)
                self.state = 264
                self.binCondOp()
                self.state = 265
                self.expression(0)
                pass

            elif la_ == 3:
                self.state = 267
                self.match(tlangParser.PENCOND)
                pass

            elif la_ == 4:
                self.state = 268
                self.match(tlangParser.T__15)
                self.state = 269
                self.condition(0)
                self.state = 270
                self.match(tlangParser.T__17)
                pass


            self._ctx.stop = self._input.LT(-1)
            self.state = 280
            self._errHandler.sync(self)
            _alt = self._interp.adaptivePredict(self._input,14,self._ctx)
            while _alt!=2 and _alt!=ATN.INVALID_ALT_NUMBER:
                if _alt==1:
                    if self._parseListeners is not None:
                        self.triggerExitRuleEvent()
                    _prevctx = localctx
                    localctx = tlangParser.ConditionContext(self, _parentctx, _parentState)
                    self.pushNewRecursionContext(localctx, _startState, self.RULE_condition)
                    self.state = 274
                    if not self.precpred(self._ctx, 3):
                        from antlr4.error.Errors import FailedPredicateException
                        raise FailedPredicateException(self, "self.precpred(self._ctx, 3)")
                    self.state = 275
                    self.logicOp()
                    self.state = 276
                    self.condition(4) 
                self.state = 282
                self._errHandler.sync(self)
                _alt = self._interp.adaptivePredict(self._input,14,self._ctx)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.unrollRecursionContexts(_parentctx)
        return localctx


    class BinCondOpContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def EQ(self):
            return self.getToken(tlangParser.EQ, 0)

        def NEQ(self):
            return self.getToken(tlangParser.NEQ, 0)

        def LT(self):
            return self.getToken(tlangParser.LT, 0)

        def GT(self):
            return self.getToken(tlangParser.GT, 0)

        def LTE(self):
            return self.getToken(tlangParser.LTE, 0)

        def GTE(self):
            return self.getToken(tlangParser.GTE, 0)

        def getRuleIndex(self):
            return tlangParser.RULE_binCondOp

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitBinCondOp" ):
                return visitor.visitBinCondOp(self)
            else:
                return visitor.visitChildren(self)




    def binCondOp(self):

        localctx = tlangParser.BinCondOpContext(self, self._ctx, self.state)
        self.enterRule(localctx, 66, self.RULE_binCondOp)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 283
            _la = self._input.LA(1)
            if not((((_la) & ~0x3f) == 0 and ((1 << _la) & 541165879296) != 0)):
                self._errHandler.recoverInline(self)
            else:
                self._errHandler.reportMatch(self)
                self.consume()
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class LogicOpContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def AND(self):
            return self.getToken(tlangParser.AND, 0)

        def OR(self):
            return self.getToken(tlangParser.OR, 0)

        def getRuleIndex(self):
            return tlangParser.RULE_logicOp

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitLogicOp" ):
                return visitor.visitLogicOp(self)
            else:
                return visitor.visitChildren(self)




    def logicOp(self):

        localctx = tlangParser.LogicOpContext(self, self._ctx, self.state)
        self.enterRule(localctx, 68, self.RULE_logicOp)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 285
            _la = self._input.LA(1)
            if not(_la==39 or _la==40):
                self._errHandler.recoverInline(self)
            else:
                self._errHandler.reportMatch(self)
                self.consume()
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class ValueContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def functionCall(self):
            return self.getTypedRuleContext(tlangParser.FunctionCallContext,0)


        def arrayAccess(self):
            return self.getTypedRuleContext(tlangParser.ArrayAccessContext,0)


        def NUM(self):
            return self.getToken(tlangParser.NUM, 0)

        def VAR(self):
            return self.getToken(tlangParser.VAR, 0)

        def getRuleIndex(self):
            return tlangParser.RULE_value

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitValue" ):
                return visitor.visitValue(self)
            else:
                return visitor.visitChildren(self)




    def value(self):

        localctx = tlangParser.ValueContext(self, self._ctx, self.state)
        self.enterRule(localctx, 70, self.RULE_value)
        try:
            self.state = 291
            self._errHandler.sync(self)
            la_ = self._interp.adaptivePredict(self._input,15,self._ctx)
            if la_ == 1:
                self.enterOuterAlt(localctx, 1)
                self.state = 287
                self.functionCall()
                pass

            elif la_ == 2:
                self.enterOuterAlt(localctx, 2)
                self.state = 288
                self.arrayAccess()
                pass

            elif la_ == 3:
                self.enterOuterAlt(localctx, 3)
                self.state = 289
                self.match(tlangParser.NUM)
                pass

            elif la_ == 4:
                self.enterOuterAlt(localctx, 4)
                self.state = 290
                self.match(tlangParser.VAR)
                pass


        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx



    def sempred(self, localctx:RuleContext, ruleIndex:int, predIndex:int):
        if self._predicates == None:
            self._predicates = dict()
        self._predicates[27] = self.expression_sempred
        self._predicates[32] = self.condition_sempred
        pred = self._predicates.get(ruleIndex, None)
        if pred is None:
            raise Exception("No predicate with index:" + str(ruleIndex))
        else:
            return pred(localctx, predIndex)

    def expression_sempred(self, localctx:ExpressionContext, predIndex:int):
            if predIndex == 0:
                return self.precpred(self._ctx, 5)
         

            if predIndex == 1:
                return self.precpred(self._ctx, 4)
         

            if predIndex == 2:
                return self.precpred(self._ctx, 3)
         

    def condition_sempred(self, localctx:ConditionContext, predIndex:int):
            if predIndex == 3:
                return self.precpred(self._ctx, 3)
         




