/* description: Parses a tab separated value to an array */

/* lexical grammar */
%lex

/* lexical states */
%s BOF REGION

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
\n'Columns' {
  return 'COLUMN_START';
}
\n'Data'\n+?(?=\n) {
  return 'DATA_START';
}
<REGION>\n(?=<<EOF>>) {
  this.popState();
  return 'REGION_END';
}
<REGION>(?=\n'Region'[\s]+[0-9]+) {
  this.popState();
  return 'REGION_END';
}
\n'Region' {
  this.begin('REGION');
  return 'REGION_START';
}
[-]?[0-9]+[.][0-9]+ {
  return 'FLOAT';
}
[-]?[0-9]+(?![.]) {
  return 'INTEGER';
}
"(" {
  return 'LEFT_PARENTHESIS';
}
")" {
  return 'RIGHT_PARENTHESIS';
}
"," {
  return 'COMMA';
}
\n {
  return 'NEW_LINE';
}
\s {/**/}

<<EOF>> {
  return 'EOF';
}

/* end lexing */
/lex


%start info

%% /* language grammar */

info
  : properties columns DATA_START regions EOF {
    return {
      properties: $1,
      columns: $2,
      regions: $4
    };
  }
	| EOF {
		return null;
	}
  ;

properties
  : NEW_LINE CONSTANT propertyValues {
    $$ = [{
      name: $2,
      value: $3
    }];
  }
  | properties NEW_LINE CONSTANT propertyValues {
    $1.push({
      name: $3,
      value: $4
    });
  }
  | NEW_LINE CONSTANT CONSTANT propertyValues {
    $$ = [{
      name: $2 + ' ' + $3,
      value: $4
    }];
  }
  | properties NEW_LINE CONSTANT CONSTANT propertyValues {
    $1.push({
      name: $3 + ' ' + $4,
      value: $5
    });
  }
  | NEW_LINE CONSTANT CONSTANT CONSTANT propertyValues {
    $1.push({
      name: $2 + ' ' + $3 + ' ' + $4,
      value: $5
    });
  }
  | properties NEW_LINE CONSTANT CONSTANT CONSTANT propertyValues {
    $1.push({
      name: $3 + ' ' + $4 + ' ' + $5,
      value: $6
    });
  }
  ;

propertyValues
  : STRING
  {
    $$ = $1;
  }
  | INTEGER {
    $$ = $1;
  }
  | INTEGER COMMA INTEGER {
    $$ = [$1, $3];
  }
  ;

columns
  : COLUMN_START INTEGER columns {
    $$ = $3;
  }
  ;

columns
  : NEW_LINE CONSTANT CONSTANT {
    $$ = [{
      name: $2,
      type: $3
    }];
  }
  | columns NEW_LINE CONSTANT CONSTANT {
    $1.push({
      name: $3,
      type: $4
    });
  }
  | NEW_LINE CONSTANT CONSTANT LEFT_PARENTHESIS INTEGER RIGHT_PARENTHESIS {
    $$ = [{
      name: $2,
      type: $3,
      definition: $5
    }];
  }
  | columns NEW_LINE CONSTANT CONSTANT LEFT_PARENTHESIS INTEGER RIGHT_PARENTHESIS {
    $1.push({
      name: $3,
      type: $4,
      definition: $6
    });
  }
  ;

regions
  : REGION_START INTEGER regionLines REGION_END {
    $$ = [{
      id: $2,
      lines: $3
    }];
  }
  | regions REGION_START INTEGER regionLines REGION_END {
    $1.push({
      id: $3,
      lines: $4
    });
  }
  ;

regionLines
  : NEW_LINE INTEGER {
    $$ = [$2];
  }
  | regionLines NEW_LINE INTEGER {
    $1.push($3);
  }
  | NEW_LINE FLOAT FLOAT {
    $$ = [{
      lon: $2,
      lat: $3
    }];
  }
  | regionLines NEW_LINE FLOAT FLOAT {
    $1.push({
      lon: $3,
      lat: $4
    });
  }
  | NEW_LINE FLOAT INTEGER {
    $$ = [{
      lon: $2,
      lat: $3
    }];
  }
  | regionLines NEW_LINE FLOAT INTEGER {
    $1.push({
      lon: $3,
      lat: $4
    });
  }
  | NEW_LINE INTEGER FLOAT {
    $$ = [{
      lon: $2,
      lat: $3
    }];
  }
  | regionLines NEW_LINE INTEGER FLOAT {
    $1.push({
      lon: $3,
      lat: $4
    });
  }
  | NEW_LINE INTEGER INTEGER {
    $$ = [{
      lon: $2,
      lat: $3
    }];
  }
  | regionLines NEW_LINE INTEGER INTEGER {
    $1.push({
      lon: $3,
      lat: $4
    });
  }
  | NEW_LINE CONSTANT LEFT_PARENTHESIS args RIGHT_PARENTHESIS {
    $$ = [{
      key: $2,
      args: $4
    }];
  }
  | regionLines NEW_LINE CONSTANT LEFT_PARENTHESIS args RIGHT_PARENTHESIS {
    $1.push({
      key: $3,
      value: $5
    });
  }
  | NEW_LINE CONSTANT FLOAT FLOAT {
    $$ = [{
      key: $2,
      lat: $3,
      lon: $4
    }];
  }
  | regionLines NEW_LINE CONSTANT FLOAT FLOAT {
    $1.push({
      key: $3,
      lat: $4,
      lon: $5
    });
  }
  ;

args
  : FLOAT {
    $$ = [$1];
  }
  | args COMMA FLOAT {
    $1.push($3);
  }
  | INTEGER {
    $$ = [$1];
  }
  | args COMMA INTEGER {
    $1.push($3);
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