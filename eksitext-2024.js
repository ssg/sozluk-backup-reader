// @generated by Peggy 4.0.3.
//
// https://peggyjs.org/

"use strict";


function peg$subclass(child, parent) {
  function C() { this.constructor = child; }
  C.prototype = parent.prototype;
  child.prototype = new C();
}

function peg$SyntaxError(message, expected, found, location) {
  var self = Error.call(this, message);
  // istanbul ignore next Check is a necessary evil to support older environments
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(self, peg$SyntaxError.prototype);
  }
  self.expected = expected;
  self.found = found;
  self.location = location;
  self.name = "SyntaxError";
  return self;
}

peg$subclass(peg$SyntaxError, Error);

function peg$padEnd(str, targetLength, padString) {
  padString = padString || " ";
  if (str.length > targetLength) { return str; }
  targetLength -= str.length;
  padString += padString.repeat(targetLength);
  return str + padString.slice(0, targetLength);
}

peg$SyntaxError.prototype.format = function(sources) {
  var str = "Error: " + this.message;
  if (this.location) {
    var src = null;
    var k;
    for (k = 0; k < sources.length; k++) {
      if (sources[k].source === this.location.source) {
        src = sources[k].text.split(/\r\n|\n|\r/g);
        break;
      }
    }
    var s = this.location.start;
    var offset_s = (this.location.source && (typeof this.location.source.offset === "function"))
      ? this.location.source.offset(s)
      : s;
    var loc = this.location.source + ":" + offset_s.line + ":" + offset_s.column;
    if (src) {
      var e = this.location.end;
      var filler = peg$padEnd("", offset_s.line.toString().length, ' ');
      var line = src[s.line - 1];
      var last = s.line === e.line ? e.column : line.length + 1;
      var hatLen = (last - s.column) || 1;
      str += "\n --> " + loc + "\n"
          + filler + " |\n"
          + offset_s.line + " | " + line + "\n"
          + filler + " | " + peg$padEnd("", s.column - 1, ' ')
          + peg$padEnd("", hatLen, "^");
    } else {
      str += "\n at " + loc;
    }
  }
  return str;
};

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function(expectation) {
      return "\"" + literalEscape(expectation.text) + "\"";
    },

    class: function(expectation) {
      var escapedParts = expectation.parts.map(function(part) {
        return Array.isArray(part)
          ? classEscape(part[0]) + "-" + classEscape(part[1])
          : classEscape(part);
      });

      return "[" + (expectation.inverted ? "^" : "") + escapedParts.join("") + "]";
    },

    any: function() {
      return "any character";
    },

    end: function() {
      return "end of input";
    },

    other: function(expectation) {
      return expectation.description;
    }
  };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/"/g,  "\\\"")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/\]/g, "\\]")
      .replace(/\^/g, "\\^")
      .replace(/-/g,  "\\-")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = expected.map(describeExpectation);
    var i, j;

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== undefined ? options : {};

  var peg$FAILED = {};
  var peg$source = options.grammarSource;

  var peg$startRuleFunctions = { eksi_text: peg$parseeksi_text };
  var peg$startRuleFunction = peg$parseeksi_text;

  var peg$c0 = "`";
  var peg$c1 = "[";
  var peg$c2 = "]";
  var peg$c3 = "(bkz";
  var peg$c4 = ")";
  var peg$c5 = ":";
  var peg$c6 = "/";
  var peg$c7 = "@";
  var peg$c8 = "#";
  var peg$c9 = "(";
  var peg$c10 = " ";
  var peg$c11 = "http";
  var peg$c12 = "s";
  var peg$c13 = "://";
  var peg$c14 = ":[0-9]{1,5}";
  var peg$c15 = "?";

  var peg$r0 = /^[':;.]/;
  var peg$r1 = /^[0-9]/;
  var peg$r2 = /^[a-z]/;
  var peg$r3 = /^[\u015F\u011F\xFC\xF6\xE7\u0131\u015E\u011E\xDC\xD6\xC7\u0130]/;
  var peg$r4 = /^[0-9a-z\xC7\xD6\xDC\xE7\xF6\xFC\u011E-\u011F\u0130-\u0131\u015E-\u015F]/;
  var peg$r5 = /^[0-9a-z]/;
  var peg$r6 = /^[\n]/;
  var peg$r7 = /^[a-z\-0-9.]/;
  var peg$r8 = /^[^?\/]/;
  var peg$r9 = /^[^\020\]]/;

  var peg$e0 = peg$literalExpectation("`", false);
  var peg$e1 = peg$literalExpectation("[", false);
  var peg$e2 = peg$literalExpectation("]", false);
  var peg$e3 = peg$literalExpectation("(bkz", false);
  var peg$e4 = peg$classExpectation(["'", ":", ";", "."], false, false);
  var peg$e5 = peg$literalExpectation(")", false);
  var peg$e6 = peg$literalExpectation(":", false);
  var peg$e7 = peg$literalExpectation("/", false);
  var peg$e8 = peg$literalExpectation("@", false);
  var peg$e9 = peg$literalExpectation("#", false);
  var peg$e10 = peg$literalExpectation("(", false);
  var peg$e11 = peg$literalExpectation(" ", false);
  var peg$e12 = peg$classExpectation([["0", "9"]], false, false);
  var peg$e13 = peg$classExpectation([["a", "z"]], false, false);
  var peg$e14 = peg$classExpectation(["\u015F", "\u011F", "\xFC", "\xF6", "\xE7", "\u0131", "\u015E", "\u011E", "\xDC", "\xD6", "\xC7", "\u0130"], false, false);
  var peg$e15 = peg$classExpectation([["0", "9"], ["a", "z"], "\xC7", "\xD6", "\xDC", "\xE7", "\xF6", "\xFC", ["\u011E", "\u011F"], ["\u0130", "\u0131"], ["\u015E", "\u015F"]], false, false);
  var peg$e16 = peg$classExpectation([["0", "9"], ["a", "z"]], false, false);
  var peg$e17 = peg$classExpectation(["\n"], false, false);
  var peg$e18 = peg$literalExpectation("http", false);
  var peg$e19 = peg$literalExpectation("s", false);
  var peg$e20 = peg$literalExpectation("://", false);
  var peg$e21 = peg$classExpectation([["a", "z"], "-", ["0", "9"], "."], false, false);
  var peg$e22 = peg$literalExpectation(":[0-9]{1,5}", false);
  var peg$e23 = peg$classExpectation(["?", "/"], true, false);
  var peg$e24 = peg$literalExpectation("?", false);
  var peg$e25 = peg$classExpectation(["\0", "2", "0", "]"], true, false);
  var peg$e26 = peg$anyExpectation();

  var peg$f0 = function(query) { return { type: "gbkz", query: query } };
  var peg$f1 = function(url) { return { type: "url", url } };
  var peg$f2 = function(query) { return { type: "bkz", query: query } };
  var peg$f3 = function(visible, hidden) { return { type: "abkz", text: visible, query: hidden } };
  var peg$f4 = function() { return { type: "paragraph_break" } };
  var peg$f5 = function() { return { type: "line_break" } };
  var peg$currPos = options.peg$currPos | 0;
  var peg$savedPos = peg$currPos;
  var peg$posDetailsCache = [{ line: 1, column: 1 }];
  var peg$maxFailPos = peg$currPos;
  var peg$maxFailExpected = options.peg$maxFailExpected || [];
  var peg$silentFails = options.peg$silentFails | 0;

  var peg$result;

  if (options.startRule) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function offset() {
    return peg$savedPos;
  }

  function range() {
    return {
      source: peg$source,
      start: peg$savedPos,
      end: peg$currPos
    };
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos];
    var p;

    if (details) {
      return details;
    } else {
      if (pos >= peg$posDetailsCache.length) {
        p = peg$posDetailsCache.length - 1;
      } else {
        p = pos;
        while (!peg$posDetailsCache[--p]) {}
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;

      return details;
    }
  }

  function peg$computeLocation(startPos, endPos, offset) {
    var startPosDetails = peg$computePosDetails(startPos);
    var endPosDetails = peg$computePosDetails(endPos);

    var res = {
      source: peg$source,
      start: {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      }
    };
    if (offset && peg$source && (typeof peg$source.offset === "function")) {
      res.start = peg$source.offset(res.start);
      res.end = peg$source.offset(res.end);
    }
    return res;
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parseeksi_text() {
    var s0, s1, s2;

    s0 = [];
    s1 = peg$parsedirective();
    if (s1 === peg$FAILED) {
      s1 = peg$currPos;
      s2 = peg$parseplain_text();
      if (s2 !== peg$FAILED) {
        s1 = input.substring(s1, peg$currPos);
      } else {
        s1 = s2;
      }
    }
    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = peg$parsedirective();
        if (s1 === peg$FAILED) {
          s1 = peg$currPos;
          s2 = peg$parseplain_text();
          if (s2 !== peg$FAILED) {
            s1 = input.substring(s1, peg$currPos);
          } else {
            s1 = s2;
          }
        }
      }
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsedirective() {
    var s0;

    s0 = peg$parsebkz();
    if (s0 === peg$FAILED) {
      s0 = peg$parsegbkz();
      if (s0 === peg$FAILED) {
        s0 = peg$parseabkz();
        if (s0 === peg$FAILED) {
          s0 = peg$parsenamed_url();
          if (s0 === peg$FAILED) {
            s0 = peg$parseurl();
            if (s0 === peg$FAILED) {
              s0 = peg$parseparagraph_break();
              if (s0 === peg$FAILED) {
                s0 = peg$parseline_break();
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parsegbkz() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 96) {
      s1 = peg$c0;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e0); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseSPACE();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseSPACE();
      }
      s3 = peg$currPos;
      s4 = peg$parsequery();
      if (s4 !== peg$FAILED) {
        s3 = input.substring(s3, peg$currPos);
      } else {
        s3 = s4;
      }
      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parseSPACE();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parseSPACE();
        }
        if (input.charCodeAt(peg$currPos) === 96) {
          s5 = peg$c0;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e0); }
        }
        if (s5 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f0(s3);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsenamed_url() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 91) {
      s1 = peg$c1;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e1); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseurl();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parseSPACE();
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parseSPACE();
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseplain_text();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 93) {
              s5 = peg$c2;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$e2); }
            }
            if (s5 !== peg$FAILED) {
              s1 = [s1, s2, s3, s4, s5];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseurl() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$currPos;
    s3 = peg$parsescheme();
    if (s3 !== peg$FAILED) {
      s4 = peg$parsehost();
      if (s4 !== peg$FAILED) {
        s5 = peg$parseport();
        if (s5 === peg$FAILED) {
          s5 = null;
        }
        s6 = peg$parsepath();
        if (s6 === peg$FAILED) {
          s6 = null;
        }
        s7 = peg$parseurl_query();
        if (s7 === peg$FAILED) {
          s7 = null;
        }
        s3 = [s3, s4, s5, s6, s7];
        s2 = s3;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f1(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsebkz() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 4) === peg$c3) {
      s1 = peg$c3;
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e3); }
    }
    if (s1 !== peg$FAILED) {
      s2 = input.charAt(peg$currPos);
      if (peg$r0.test(s2)) {
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e4); }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parseSPACE();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parseSPACE();
        }
        s4 = peg$currPos;
        s5 = peg$parsequery();
        if (s5 !== peg$FAILED) {
          s4 = input.substring(s4, peg$currPos);
        } else {
          s4 = s5;
        }
        if (s4 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 41) {
            s5 = peg$c4;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e5); }
          }
          if (s5 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f2(s4);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseabkz() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 96) {
      s1 = peg$c0;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e0); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseSPACE();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseSPACE();
      }
      s3 = peg$parsequery();
      if (s3 === peg$FAILED) {
        s3 = null;
      }
      if (input.charCodeAt(peg$currPos) === 58) {
        s4 = peg$c5;
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e6); }
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parsequery();
        if (s5 !== peg$FAILED) {
          s6 = [];
          s7 = peg$parseSPACE();
          while (s7 !== peg$FAILED) {
            s6.push(s7);
            s7 = peg$parseSPACE();
          }
          if (input.charCodeAt(peg$currPos) === 96) {
            s7 = peg$c0;
            peg$currPos++;
          } else {
            s7 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e0); }
          }
          if (s7 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f3(s3, s5);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseparagraph_break() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = [];
    s3 = peg$parseline_break();
    while (s3 !== peg$FAILED) {
      s2.push(s3);
      s3 = peg$parseline_break();
    }
    if (s2.length < 2) {
      peg$currPos = s1;
      s1 = peg$FAILED;
    } else {
      s1 = s2;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f4();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseline_break() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parseNEWLINE();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f5();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsequery() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parseentry_query();
    if (s1 === peg$FAILED) {
      s1 = peg$parsenick_query();
      if (s1 === peg$FAILED) {
        s1 = peg$currPos;
        s2 = peg$parsetitle();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 47) {
            s4 = peg$c6;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e7); }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsenick_query();
            if (s5 === peg$FAILED) {
              s5 = peg$parseentry_query();
              if (s5 === peg$FAILED) {
                s5 = peg$parseNUMBER();
              }
            }
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      }
    }
    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }

    return s0;
  }

  function peg$parsenick_query() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 64) {
      s1 = peg$c7;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e8); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = peg$parsenick();
      if (s3 !== peg$FAILED) {
        s2 = input.substring(s2, peg$currPos);
      } else {
        s2 = s3;
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseentry_query() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 35) {
      s1 = peg$c8;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e9); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = peg$parseNUMBER();
      if (s3 !== peg$FAILED) {
        s2 = input.substring(s2, peg$currPos);
      } else {
        s2 = s3;
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsenick() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseNICK_CHAR();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseNICK_CHAR();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parseSPACE();
      if (s4 !== peg$FAILED) {
        s5 = [];
        s6 = peg$parseNICK_CHAR();
        if (s6 !== peg$FAILED) {
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            s6 = peg$parseNICK_CHAR();
          }
        } else {
          s5 = peg$FAILED;
        }
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parseSPACE();
        if (s4 !== peg$FAILED) {
          s5 = [];
          s6 = peg$parseNICK_CHAR();
          if (s6 !== peg$FAILED) {
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parseNICK_CHAR();
            }
          } else {
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      s1 = [s1, s2];
      s0 = s1;
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsetitle_component() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseTITLE_CHAR();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseTITLE_CHAR();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parseSPACE();
      if (s4 !== peg$FAILED) {
        s5 = [];
        s6 = peg$parseTITLE_CHAR();
        if (s6 !== peg$FAILED) {
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            s6 = peg$parseTITLE_CHAR();
          }
        } else {
          s5 = peg$FAILED;
        }
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parseSPACE();
        if (s4 !== peg$FAILED) {
          s5 = [];
          s6 = peg$parseTITLE_CHAR();
          if (s6 !== peg$FAILED) {
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parseTITLE_CHAR();
            }
          } else {
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      s1 = [s1, s2];
      s0 = s1;
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsetitle() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parsetitle_component();
    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = peg$parseSPACE();
      if (s3 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 40) {
          s4 = peg$c9;
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e10); }
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$currPos;
          s6 = peg$parsetitle_component();
          if (s6 !== peg$FAILED) {
            s5 = input.substring(s5, peg$currPos);
          } else {
            s5 = s6;
          }
          if (s5 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 41) {
              s6 = peg$c4;
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$e5); }
            }
            if (s6 !== peg$FAILED) {
              s3 = [s3, s4, s5, s6];
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      s1 = [s1, s2];
      s0 = s1;
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseNUMBER() {
    var s0, s1;

    s0 = [];
    s1 = peg$parseDIGIT();
    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = peg$parseDIGIT();
      }
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseSPACE() {
    var s0;

    if (input.charCodeAt(peg$currPos) === 32) {
      s0 = peg$c10;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e11); }
    }

    return s0;
  }

  function peg$parseDIGIT() {
    var s0;

    s0 = input.charAt(peg$currPos);
    if (peg$r1.test(s0)) {
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e12); }
    }

    return s0;
  }

  function peg$parseASCII_LETTER() {
    var s0;

    s0 = input.charAt(peg$currPos);
    if (peg$r2.test(s0)) {
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e13); }
    }

    return s0;
  }

  function peg$parseTURKISH_LETTER() {
    var s0;

    s0 = input.charAt(peg$currPos);
    if (peg$r3.test(s0)) {
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e14); }
    }

    return s0;
  }

  function peg$parseTITLE_CHAR() {
    var s0;

    s0 = input.charAt(peg$currPos);
    if (peg$r4.test(s0)) {
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e15); }
    }

    return s0;
  }

  function peg$parseNICK_CHAR() {
    var s0;

    s0 = input.charAt(peg$currPos);
    if (peg$r5.test(s0)) {
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e16); }
    }

    return s0;
  }

  function peg$parseNEWLINE() {
    var s0;

    s0 = input.charAt(peg$currPos);
    if (peg$r6.test(s0)) {
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e17); }
    }

    return s0;
  }

  function peg$parsescheme() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 4) === peg$c11) {
      s1 = peg$c11;
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e18); }
    }
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 115) {
        s2 = peg$c12;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e19); }
      }
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (input.substr(peg$currPos, 3) === peg$c13) {
        s3 = peg$c13;
        peg$currPos += 3;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e20); }
      }
      if (s3 !== peg$FAILED) {
        s1 = [s1, s2, s3];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsehost() {
    var s0, s1;

    s0 = [];
    s1 = input.charAt(peg$currPos);
    if (peg$r7.test(s1)) {
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e21); }
    }
    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = input.charAt(peg$currPos);
        if (peg$r7.test(s1)) {
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e21); }
        }
      }
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseport() {
    var s0;

    if (input.substr(peg$currPos, 11) === peg$c14) {
      s0 = peg$c14;
      peg$currPos += 11;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e22); }
    }

    return s0;
  }

  function peg$parsepath() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 47) {
      s1 = peg$c6;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e7); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = input.charAt(peg$currPos);
      if (peg$r8.test(s3)) {
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e23); }
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = input.charAt(peg$currPos);
        if (peg$r8.test(s3)) {
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e23); }
        }
      }
      s3 = [];
      s4 = peg$parsepath();
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        s4 = peg$parsepath();
      }
      s1 = [s1, s2, s3];
      s0 = s1;
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseurl_query() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 63) {
      s1 = peg$c15;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e24); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = input.charAt(peg$currPos);
      if (peg$r9.test(s3)) {
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e25); }
      }
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = input.charAt(peg$currPos);
          if (peg$r9.test(s3)) {
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e25); }
          }
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseplain_text() {
    var s0, s1, s2, s3;

    s0 = [];
    s1 = peg$currPos;
    s2 = peg$currPos;
    peg$silentFails++;
    s3 = peg$parsedirective();
    peg$silentFails--;
    if (s3 === peg$FAILED) {
      s2 = undefined;
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      if (input.length > peg$currPos) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e26); }
      }
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = peg$currPos;
        s2 = peg$currPos;
        peg$silentFails++;
        s3 = peg$parsedirective();
        peg$silentFails--;
        if (s3 === peg$FAILED) {
          s2 = undefined;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e26); }
          }
          if (s3 !== peg$FAILED) {
            s2 = [s2, s3];
            s1 = s2;
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      }
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  peg$result = peg$startRuleFunction();

  if (options.peg$library) {
    return /** @type {any} */ ({
      peg$result,
      peg$currPos,
      peg$FAILED,
      peg$maxFailExpected,
      peg$maxFailPos
    });
  }
  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  StartRules: ["eksi_text"],
  SyntaxError: peg$SyntaxError,
  parse: peg$parse
};
