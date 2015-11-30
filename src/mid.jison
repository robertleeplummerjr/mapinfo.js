/* description: Parses a tab separated value to an array */

/* lexical grammar */
%lex

/* lexical states */
%s BOF PRE_QUOTE QUOTE STRING

/*begin lexing */
%%

/* quote handling */
<QUOTE>(\n|"\n") {
  //<QUOTE>(\n|"\n")
  return 'CHAR';
}
<QUOTE>([\'\"])(?=<<EOF>>) {
  //<QUOTE>([\'\"])(?=<<EOF>>)
  this.popState();
  return 'QUOTE_OFF';
}
<QUOTE>([\'\"]) {
  //<QUOTE>([\'\"])
  if (yytext == this.quoteChar) {
    this.popState();
    this.begin('STRING');
    return 'QUOTE_OFF';
	} else {
    return 'CHAR';
	}
}
<BOF>([\'\"]) {
  //<BOF>([\'\"])
  this.popState();
  this.quoteChar = yytext.substring(0);
	this.begin('QUOTE');
	return 'QUOTE_ON';
}
<PRE_QUOTE>([\'\"]) {
  //<PRE_QUOTE>([\'\"])
  this.quoteChar = yytext;
  this.popState();
	this.begin('QUOTE');
	return 'QUOTE_ON';
}

(\n|"\n")(?=[\'\"]) {
  //(\n|"\n")(?=[\'\"])
	this.begin('PRE_QUOTE');
	return 'END_OF_LINE';
}
<QUOTE>([a-zA-Z0-9_ ]+|.) {
  //<QUOTE>([a-zA-Z0-9_]+|.)
  return 'CHAR';
}
/* end quote handling */


/*spreadsheet control characters*/
<STRING>(\n|"\n") {
  //<STRING>(\n|"\n")
	this.popState();
	return 'END_OF_LINE';
}
<STRING>([a-zA-Z0-9_ ]+|.) {
  //<STRING>([a-zA-Z0-9_ ]+|.)
  return 'CHAR';
}
<BOF> {
  //<BOF>
  this.popState();
}
(\n) {
  //(\n)
  return 'END_OF_LINE';
}
([a-zA-Z0-9_ ]+|.) {
  //([a-zA-Z0-9_ ]+|.)
	this.begin('STRING');
	return 'CHAR';
}
<<EOF>> {
  //<<EOF>>
  //lexer.yy.conditionStack = [];
  return 'EOF';
}

/* end lexing */
/lex


%start grid

%% /* language grammar */

grid :
	rows EOF {
		return $1;
	}
	| EOF {
		return [['']];
	}
;

rows :
	row {
    //row
		$$ = [$1];
	}
	| END_OF_LINE {
    //END_OF_LINE
    $$ = [];
	}
  | rows END_OF_LINE {
    //rows END_OF_LINE
    $$ = $1;
  }
  | rows END_OF_LINE row {
    //rows END_OF_LINE row
    $1.push($3);
    $$ = $1;
  }
;

row :
	string {
    //string
		$$ = [$1.join('')];
	}

  //scenario where we have an empty column, which needs treated like a ''
	| COLUMN_EMPTY {
    //COLUMN_EMPTY
		$$ = [''];
	}
  | row COLUMN_EMPTY {
    //row COLUMN_EMPTY
    $1.push('');
    $$ = $1;
  }
  | row COLUMN_EMPTY string {
    //row COLUMN_EMPTY string
    $1.push('');
    $1.push($3.join(''));
    $$ = $1;
  }

  //scenario where we have 2 values separated by a column, in this case the column is ignored
  | COLUMN_STRING {
    //COLUMN_STRING
  }
  | row COLUMN_STRING {
    //row COLUMN_STRING
  }
  | row COLUMN_STRING string {
    //row COLUMN_STRING string
    $1.push($3.join(''));
    $$ = $1;
  }
;

string :
	CHAR {
    //CHAR
		$$ = [$1];
	}
	| string CHAR {
    //string CHAR
		$1.push($2);
		$$ = $1;
	}
	| QUOTE_ON string QUOTE_OFF {
    //QUOTE_ON string QUOTE_OFF
    $$ = $2;
  }
;

%%
if (typeof GLOBAL !== 'undefined') {
  GLOBAL.window = GLOBAL;
}
if (typeof window.MID === 'undefined') {
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

	window.MID = function(handler) {
		var MIDLexer = function () {};
		MIDLexer.prototype = parser.lexer;

		var MIDParser = function () {
			this.lexer = new MIDLexer();
			this.yy = {};
		};

		MIDParser.prototype = parser;
		var newParser = new MIDParser;
		newParser.setObj = function(obj) {
			newParser.yy.obj = obj;
		};
		newParser.yy.handler = handler;
		return newParser;
	};
}