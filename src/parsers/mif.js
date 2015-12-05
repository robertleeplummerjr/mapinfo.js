/* parser generated by jison 0.4.15 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,7],$V1=[1,10],$V2=[1,15],$V3=[1,16],$V4=[9,15],$V5=[6,9],$V6=[2,13],$V7=[1,33],$V8=[1,39],$V9=[1,46],$Va=[8,18],$Vb=[9,20],$Vc=[1,71],$Vd=[1,70],$Ve=[1,76],$Vf=[14,17];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"info":3,"properties":4,"columns":5,"DATA_START":6,"regions":7,"EOF":8,"NEW_LINE":9,"CONSTANT":10,"propertyValues":11,"STRING":12,"INTEGER":13,"COMMA":14,"COLUMN_START":15,"LEFT_PARENTHESIS":16,"RIGHT_PARENTHESIS":17,"REGION_START":18,"regionLines":19,"REGION_END":20,"FLOAT":21,"args":22,"$accept":0,"$end":1},
terminals_: {2:"error",6:"DATA_START",8:"EOF",9:"NEW_LINE",10:"CONSTANT",12:"STRING",13:"INTEGER",14:"COMMA",15:"COLUMN_START",16:"LEFT_PARENTHESIS",17:"RIGHT_PARENTHESIS",18:"REGION_START",20:"REGION_END",21:"FLOAT"},
productions_: [0,[3,5],[3,1],[4,3],[4,4],[4,4],[4,5],[4,5],[4,6],[11,1],[11,1],[11,3],[5,3],[5,3],[5,4],[5,6],[5,7],[7,4],[7,5],[19,2],[19,3],[19,3],[19,4],[19,3],[19,4],[19,3],[19,4],[19,3],[19,4],[19,5],[19,6],[19,4],[19,5],[22,1],[22,3],[22,1],[22,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

    return {
      properties: $$[$0-4],
      columns: $$[$0-3],
      regions: $$[$0-1]
    };
  
break;
case 2:

		return null;
	
break;
case 3:

    this.$ = [{
      name: $$[$0-1],
      value: $$[$0]
    }];
  
break;
case 4:

    $$[$0-3].push({
      name: $$[$0-1],
      value: $$[$0]
    });
  
break;
case 5:

    this.$ = [{
      name: $$[$0-2] + ' ' + $$[$0-1],
      value: $$[$0]
    }];
  
break;
case 6:

    $$[$0-4].push({
      name: $$[$0-2] + ' ' + $$[$0-1],
      value: $$[$0]
    });
  
break;
case 7:

    $$[$0-4].push({
      name: $$[$0-3] + ' ' + $$[$0-2] + ' ' + $$[$0-1],
      value: $$[$0]
    });
  
break;
case 8:

    $$[$0-5].push({
      name: $$[$0-3] + ' ' + $$[$0-2] + ' ' + $$[$0-1],
      value: $$[$0]
    });
  
break;
case 9: case 10: case 12:

    this.$ = $$[$0];
  
break;
case 11:

    this.$ = [$$[$0-2], $$[$0]];
  
break;
case 13:

    this.$ = [{
      name: $$[$0-1],
      type: $$[$0]
    }];
  
break;
case 14:

    $$[$0-3].push({
      name: $$[$0-1],
      type: $$[$0]
    });
  
break;
case 15:

    this.$ = [{
      name: $$[$0-4],
      type: $$[$0-3],
      definition: $$[$0-1]
    }];
  
break;
case 16:

    $$[$0-6].push({
      name: $$[$0-4],
      type: $$[$0-3],
      definition: $$[$0-1]
    });
  
break;
case 17:

    this.$ = [{
      id: $$[$0-2],
      lines: $$[$0-1]
    }];
  
break;
case 18:

    $$[$0-4].push({
      id: $$[$0-2],
      lines: $$[$0-1]
    });
  
break;
case 19: case 33: case 35:

    this.$ = [$$[$0]];
  
break;
case 20: case 34: case 36:

    $$[$0-2].push($$[$0]);
  
break;
case 21: case 23: case 25: case 27:

    this.$ = [{
      lon: $$[$0-1],
      lat: $$[$0]
    }];
  
break;
case 22: case 24: case 26: case 28:

    $$[$0-3].push({
      lon: $$[$0-1],
      lat: $$[$0]
    });
  
break;
case 29:

    this.$ = [{
      key: $$[$0-3],
      args: $$[$0-1]
    }];
  
break;
case 30:

    $$[$0-5].push({
      key: $$[$0-3],
      value: $$[$0-1]
    });
  
break;
case 31:

    this.$ = [{
      key: $$[$0-2],
      lat: $$[$0-1],
      lon: $$[$0]
    }];
  
break;
case 32:

    $$[$0-4].push({
      key: $$[$0-2],
      lat: $$[$0-1],
      lon: $$[$0]
    });
  
break;
}
},
table: [{3:1,4:2,8:[1,3],9:[1,4]},{1:[3]},{5:5,9:[1,6],15:$V0},{1:[2,2]},{10:[1,8]},{6:[1,9],9:$V1},{10:[1,11]},{13:[1,12]},{10:[1,14],11:13,12:$V2,13:$V3},{7:17,18:[1,18]},{10:[1,19]},{10:[1,21],11:20,12:$V2,13:$V3},{5:22,9:[1,23],15:$V0},o($V4,[2,3]),{10:[1,25],11:24,12:$V2,13:$V3},o($V4,[2,9]),o($V4,[2,10],{14:[1,26]}),{8:[1,27],18:[1,28]},{13:[1,29]},{10:[1,30]},o($V4,[2,4]),o($V5,$V6,{11:31,10:[1,32],12:$V2,13:$V3,16:$V7}),{6:[2,12],9:$V1},{10:[1,34]},o($V4,[2,5]),{11:35,12:$V2,13:$V3},{13:[1,36]},{1:[2,1]},{13:[1,37]},{9:$V8,19:38},o($V5,[2,14],{16:[1,40]}),o($V4,[2,6]),{11:41,12:$V2,13:$V3},{13:[1,42]},{10:[1,43]},o($V4,[2,7]),o($V4,[2,11]),{9:$V8,19:44},{9:$V9,20:[1,45]},{10:[1,49],13:[1,47],21:[1,48]},{13:[1,50]},o($V4,[2,8]),{17:[1,51]},o($V5,$V6,{16:$V7}),{9:$V9,20:[1,52]},o($Va,[2,17]),{10:[1,55],13:[1,53],21:[1,54]},o($Vb,[2,19],{13:[1,57],21:[1,56]}),{13:[1,59],21:[1,58]},{16:[1,60],21:[1,61]},{17:[1,62]},o($V5,[2,15]),o($Va,[2,18]),o($Vb,[2,20],{13:[1,64],21:[1,63]}),{13:[1,66],21:[1,65]},{16:[1,67],21:[1,68]},o($Vb,[2,25]),o($Vb,[2,27]),o($Vb,[2,21]),o($Vb,[2,23]),{13:$Vc,21:$Vd,22:69},{21:[1,72]},o($V5,[2,16]),o($Vb,[2,26]),o($Vb,[2,28]),o($Vb,[2,22]),o($Vb,[2,24]),{13:$Vc,21:$Vd,22:73},{21:[1,74]},{14:$Ve,17:[1,75]},o($Vf,[2,33]),o($Vf,[2,35]),o($Vb,[2,31]),{14:$Ve,17:[1,77]},o($Vb,[2,32]),o($Vb,[2,29]),{13:[1,79],21:[1,78]},o($Vb,[2,30]),o($Vf,[2,34]),o($Vf,[2,36])],
defaultActions: {3:[2,2],27:[2,1]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        function lex() {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

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
}/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:
  this.popState();
  return 9;

break;
case 1:
  return 10;

break;
case 2:
  yy_.yytext = yy_.yytext.substring(1, yy_.yytext.length - 1);
  return 12;

break;
case 3:
  yy_.yytext = yy_.yytext.substring(1, yy_.yytext.length - 1);
  return 12;

break;
case 4:
  return 15;

break;
case 5:
  return 6;

break;
case 6:
  this.popState();
  return 20;

break;
case 7:
  this.popState();
  return 20;

break;
case 8:
  this.begin('REGION');
  return 18;

break;
case 9:
  return 21;

break;
case 10:
  return 13;

break;
case 11:
  return 16;

break;
case 12:
  return 17;

break;
case 13:
  return 14;

break;
case 14:
  return 9;

break;
case 15:/**/
break;
case 16:
  return 8;

break;
}
},
rules: [/^(?:)/,/^(?:[_A-Za-z][A-Za-z0-9]+)/,/^(?:['].+?['])/,/^(?:["].+?["])/,/^(?:\nColumns\b)/,/^(?:\nData\n+?(?=\n))/,/^(?:\n(?=$))/,/^(?:(?=\nRegion[\s]+[0-9]+))/,/^(?:\nRegion\b)/,/^(?:[-]?[0-9]+[.][0-9]+)/,/^(?:[-]?[0-9]+(?![.]))/,/^(?:\()/,/^(?:\))/,/^(?:,)/,/^(?:\n)/,/^(?:\s)/,/^(?:$)/],
conditions: {"BOF":{"rules":[0,1,2,3,4,5,8,9,10,11,12,13,14,15,16],"inclusive":true},"REGION":{"rules":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],"inclusive":true},"INITIAL":{"rules":[1,2,3,4,5,8,9,10,11,12,13,14,15,16],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}