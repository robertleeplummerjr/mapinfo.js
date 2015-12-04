/* description: Parses a tab separated value to an array */

/* lexical grammar */
%lex

/* lexical states */
%s BOF COLUMNS COLUMN_DECLARATION PROPERTY_NAME PROPERTY_VALUE REGION_DECLARATION REGION_NUMBER REGION_END DATA

/*begin lexing */
%%

/* COLUMN HANDLING */
<COLUMNS>'Data' {
  this.popState();
  this.begin('DATA');
}
<COLUMNS>[0-9]+ {
  return 'COLUMN_NUMBER';
}
<COLUMNS>[_A-Za-z]+(?=[ ]+) {
  this.begin('COLUMN_DECLARATION');
  return 'COLUMN_NAME';
}
<COLUMN_DECLARATION>[A-Za-z]+([\(][0-9]+[\)]) {
  this.popState();
  return 'COLUMN_TYPE';
}
'Column'[ ](?=[0-9]+) {
  this.begin('COLUMNS');
}

<REGION_END>[0-9]+ {
  this.popState();
  return 'REGION END';
}
<REGION_DECLARATION>'Region '(?=[0-9]+[\n]) {
  this.popState();
  this.begin('REGION_END');
}
<REGION_DECLARATION>[-]?[0-9]+[.]?[0-9]*[ ][-]?[0-9]+[.]?[0-9]*(?=[ \n]) {
  return 'LON_LAT';
}
<REGION_DECLARATION>[_A-Za-z0-9 \(\),-](?=\n) {
  return 'REGION_PROPERTY';
}
<REGION_NUMBER>[0-9]+ {
  this.popState();
  this.begin('REGION_DECLARATION');
  return 'REGION_NUMBER';
}
<DATA>'Region'[ ](?=[0-9]+) {
  this.begin('REGION_NUMBER');
}

<PROPERTY_VALUE>[A-Za-z\",0-9](?=[\n]) {
  this.popState();
  return 'PROPERTY_VALUE';
}
<PROPERTY_NAME>[A-Za-z]+ {
  this.popState();
  this.begin('PROPERTY_VALUE');
  return 'PROPERTY_NAME'
}
[\n](?=[A-Za-z]+) {
   this.begin('PROPERTY_NAME');
 }
<BOF>(?=[A-Za-z]+) {
  this.begin('PROPERTY_NAME');
}

<BOF> {
  //<BOF>
  this.popState();
}

<<EOF>> {
  //<<EOF>>
  this.popState();
  //lexer.yy.conditionStack = [];
  return 'EOF';
}

/* end lexing */
/lex


%start info

%% /* language grammar */

info :
  properties regions EOF {
    return {
      properties: $1,
      regions: $2
    };
  }
	| properties EOF {
		return {
		  properties: $1,
		  regions: []
		};
	}
	| EOF {
		return null;
	}
;

properties :
  properties PROPERTY_NAME PROPERTY_VALUE {
    $1.push({
      name: $2,
      value: $3
    });
  }
  | PROPERTY_NAME PROPERTY_VALUE {
    return [{
      name: $1,
      value: $2
    }];
  }
;

regions :
  regions regionLines {
    $1.push($2);
  }
  | REGION_NUMBER regionLines {
    $1 = [{
      region: $1,
      lines: $2
    }];
  }
;

regionLines :
  LON_LAT {
    var parts = $1.split(' ');
    $1 = [{
      lon: parts[0],
      lat: parts[1]
    }];
  }
  | regionLines LON_LAT {
    var parts = $2.split(' ');
    $1.push({
      lon: parts[0],
      lat: parts[1]
    });
  }
  | REGION_PROPERTY {
    $1 = [$1];
  }
  | regionLines REGION_PROPERTY {
    $1.push($2);
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

	window.MIF = function(handler) {
		var MIFLexer = function () {};
		MIFLexer.prototype = parser.lexer;

		var MIFParser = function () {
			this.lexer = new MIFLexer();
			this.yy = {};
		};

		MIFParser.prototype = parser;
		var newParser = new MIFParser;
		newParser.setObj = function(obj) {
			newParser.yy.obj = obj;
		};
		newParser.yy.handler = handler;
		return newParser;
	};
}