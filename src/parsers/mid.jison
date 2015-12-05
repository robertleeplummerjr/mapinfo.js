/* description: Parses a tab separated value to an array */

/* lexical grammar */
%lex

/* lexical states */
%s BOF

/*begin lexing */
%%

<BOF> {
  this.popState();
  return 'NEW_LINE';
}

[_A-Za-z][A-Za-z0-9]+ {
  return 'CONSTANT';
}
['].+?['] {
  yytext = yytext.substring(1, yytext.length - 1);
  return 'STRING';
}
["].+?["] {
  yytext = yytext.substring(1, yytext.length - 1);
  return 'STRING';
}
[-]?[0-9]+(?![.]) {
  return 'INTEGER';
}
\n<<EOF>> {
  return 'EOF';
}
\n {
  return 'NEW_LINE';
}
"," {
  return 'COMMA';
}
\s {/**/}
<<EOF>> {
  return 'EOF';
}

/* end lexing */
/lex


%start grid

%% /* language grammar */

grid
  : rows EOF {
		return $1;
	}
	| EOF {
		return [[]];
	}
  ;

rows
  : NEW_LINE columns {
		$$ = [$2];
	}
	| rows NEW_LINE columns {
    $1.push($3);
  }
  ;

columns
  : STRING {
    $$ = [$1];
  }
  | columns COMMA STRING {
    $1.push($3);
  }
  | CONSTANT {
    $$ = [$1];
  }
  | columns COMMA CONSTANT {
    $1.push($3)
  }
  | INTEGER {
    $$ = [$1];
  }
  | columns COMMA INTEGER {
    $1.push($3)
  }
  ;

%%

var parse = parser.parse;
parser.parse = function(input) {
  var setInput = this.lexer.setInput;
  this.lexer.setInput = function(input) {
    setInput.call(this, input);
    this.begin('BOF');
    return this;
  };

  this.parse = parse;
  return parse.call(this, input);
};