
grammar tlang;

start : instruction_list EOF ;

instruction_list : (instruction)* ;

strict_ilist : (instruction)+ ;

SingleLineComment : '//' ~[\r\n]* -> skip ;
BlockComment : '/*' .*? '*/' -> skip ;

instruction : assignment
		| arrayAssignment
	    | conditional
	    | loop
	    | moveCommand
	    | penCommand
	    | gotoCommand
	    | pauseCommand
		| printfCommand
		| functionDecl
		| returnCommand
		| functionCallCommand
		| arrayDecl
		| arrayAccessCommand
	    ;

assignment : VAR '=' expression ;

arrayAssignment : VAR '{' expression '}' '=' expression ;

conditional : ifConditional | ifElseConditional ;
ifConditional : 'if' condition '[' strict_ilist ']' ;
ifElseConditional : 'if' condition '[' strict_ilist ']' 'else' '[' strict_ilist ']' ;

loop : 'repeat' value '[' strict_ilist ']' ;

moveCommand : moveOp expression ;
moveOp : 'forward' | 'backward' | 'left' | 'right' ;

penCommand : 'penup' | 'pendown' ;

gotoCommand : 'goto' '(' expression ',' expression ')';

pauseCommand : 'pause' ;

printfCommand : 'printf' '(' printList ')' ;
printArg : expression | STRING ;
printList : printArg (',' printArg)* ;

functionDecl : 'function' NAME '(' paramList? ')' '[' strict_ilist ']' ;
paramList : VAR (',' VAR)* ;

functionCallCommand : functionCall ;
functionCall : NAME '(' argList? ')' ;
argList : expression (',' expression)* ;

returnCommand : 'return' expression ;

arrayDecl : 'array' VAR '{' expression '}' ;

arrayAccessCommand : arrayAccess ;
arrayAccess : VAR '{' expression '}' ;

expression : 
              unaryArithOp expression               #unaryExpr
			| expression exponentiative expression  #expoExpr
           	| expression multiplicative expression  #mulExpr
		   	| expression additive expression        #addExpr
		   	| value                                 #valueExpr
		   	| '(' expression ')'                    #parenExpr
 	   ;

exponentiative : EXPO ;
multiplicative : MUL | DIV | MOD;
additive : PLUS | MINUS;

unaryArithOp : MINUS ;

PLUS     : '+' ;
MINUS    : '-' ;
MUL  	 : '*' ;
DIV      : '/' ;
MOD 	 : '%' ;
EXPO	 : '**' ;

condition :   NOT condition
            | expression binCondOp expression
	  	    | condition logicOp condition
	  		| PENCOND
	  		| '(' condition ')'
	  ;

binCondOp :  EQ | NEQ | LT | GT | LTE | GTE ;

logicOp : AND | OR ;

PENCOND : 'pendown?';
LT : '<' ;
GT : '>' ;
EQ : '==';
NEQ: '!=';
LTE: '<=';
GTE: '>=';
AND: '&&';
OR : '||';
NOT: '!' ;

value : functionCall
	  | arrayAccess
	  | NUM
      | VAR
      ;

NUM  : [0-9]+ ;

VAR  : ':'[a-zA-Z_] [a-zA-Z0-9]* ;

NAME : [a-zA-Z]+ ;

STRING : '"' (~["\r\n])* '"' ;

Whitespace: [ \t\n\r]+ -> skip ;
