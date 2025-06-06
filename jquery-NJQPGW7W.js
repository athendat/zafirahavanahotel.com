!function(a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, true) : function(a2) {
    if (!a2.document) throw new Error("jQuery requires a window with a document");
    return b(a2);
  } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
  var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = "2.1.3", n = function(a2, b2) {
    return new n.fn.init(a2, b2);
  }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function(a2, b2) {
    return b2.toUpperCase();
  };
  n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function() {
    return d.call(this);
  }, get: function(a2) {
    return null != a2 ? 0 > a2 ? this[a2 + this.length] : this[a2] : d.call(this);
  }, pushStack: function(a2) {
    var b2 = n.merge(this.constructor(), a2);
    return b2.prevObject = this, b2.context = this.context, b2;
  }, each: function(a2, b2) {
    return n.each(this, a2, b2);
  }, map: function(a2) {
    return this.pushStack(n.map(this, function(b2, c2) {
      return a2.call(b2, c2, b2);
    }));
  }, slice: function() {
    return this.pushStack(d.apply(this, arguments));
  }, first: function() {
    return this.eq(0);
  }, last: function() {
    return this.eq(-1);
  }, eq: function(a2) {
    var b2 = this.length, c2 = +a2 + (0 > a2 ? b2 : 0);
    return this.pushStack(c2 >= 0 && b2 > c2 ? [this[c2]] : []);
  }, end: function() {
    return this.prevObject || this.constructor(null);
  }, push: f, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function() {
    var a2, b2, c2, d2, e2, f2, g2 = arguments[0] || {}, h2 = 1, i2 = arguments.length, j2 = false;
    for ("boolean" == typeof g2 && (j2 = g2, g2 = arguments[h2] || {}, h2++), "object" == typeof g2 || n.isFunction(g2) || (g2 = {}), h2 === i2 && (g2 = this, h2--); i2 > h2; h2++) if (null != (a2 = arguments[h2])) for (b2 in a2) c2 = g2[b2], d2 = a2[b2], g2 !== d2 && (j2 && d2 && (n.isPlainObject(d2) || (e2 = n.isArray(d2))) ? (e2 ? (e2 = false, f2 = c2 && n.isArray(c2) ? c2 : []) : f2 = c2 && n.isPlainObject(c2) ? c2 : {}, g2[b2] = n.extend(j2, f2, d2)) : void 0 !== d2 && (g2[b2] = d2));
    return g2;
  }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: true, error: function(a2) {
    throw new Error(a2);
  }, noop: function() {
  }, isFunction: function(a2) {
    return "function" === n.type(a2);
  }, isArray: Array.isArray, isWindow: function(a2) {
    return null != a2 && a2 === a2.window;
  }, isNumeric: function(a2) {
    return !n.isArray(a2) && a2 - parseFloat(a2) + 1 >= 0;
  }, isPlainObject: function(a2) {
    return "object" !== n.type(a2) || a2.nodeType || n.isWindow(a2) ? false : a2.constructor && !j.call(a2.constructor.prototype, "isPrototypeOf") ? false : true;
  }, isEmptyObject: function(a2) {
    var b2;
    for (b2 in a2) return false;
    return true;
  }, type: function(a2) {
    return null == a2 ? a2 + "" : "object" == typeof a2 || "function" == typeof a2 ? h[i.call(a2)] || "object" : typeof a2;
  }, globalEval: function(a2) {
    var b2, c2 = eval;
    a2 = n.trim(a2), a2 && (1 === a2.indexOf("use strict") ? (b2 = l.createElement("script"), b2.text = a2, l.head.appendChild(b2).parentNode.removeChild(b2)) : c2(a2));
  }, camelCase: function(a2) {
    return a2.replace(p, "ms-").replace(q, r);
  }, nodeName: function(a2, b2) {
    return a2.nodeName && a2.nodeName.toLowerCase() === b2.toLowerCase();
  }, each: function(a2, b2, c2) {
    var d2, e2 = 0, f2 = a2.length, g2 = s(a2);
    if (c2) {
      if (g2) {
        for (; f2 > e2; e2++) if (d2 = b2.apply(a2[e2], c2), d2 === false) break;
      } else for (e2 in a2) if (d2 = b2.apply(a2[e2], c2), d2 === false) break;
    } else if (g2) {
      for (; f2 > e2; e2++) if (d2 = b2.call(a2[e2], e2, a2[e2]), d2 === false) break;
    } else for (e2 in a2) if (d2 = b2.call(a2[e2], e2, a2[e2]), d2 === false) break;
    return a2;
  }, trim: function(a2) {
    return null == a2 ? "" : (a2 + "").replace(o, "");
  }, makeArray: function(a2, b2) {
    var c2 = b2 || [];
    return null != a2 && (s(Object(a2)) ? n.merge(c2, "string" == typeof a2 ? [a2] : a2) : f.call(c2, a2)), c2;
  }, inArray: function(a2, b2, c2) {
    return null == b2 ? -1 : g.call(b2, a2, c2);
  }, merge: function(a2, b2) {
    for (var c2 = +b2.length, d2 = 0, e2 = a2.length; c2 > d2; d2++) a2[e2++] = b2[d2];
    return a2.length = e2, a2;
  }, grep: function(a2, b2, c2) {
    for (var d2, e2 = [], f2 = 0, g2 = a2.length, h2 = !c2; g2 > f2; f2++) d2 = !b2(a2[f2], f2), d2 !== h2 && e2.push(a2[f2]);
    return e2;
  }, map: function(a2, b2, c2) {
    var d2, f2 = 0, g2 = a2.length, h2 = s(a2), i2 = [];
    if (h2) for (; g2 > f2; f2++) d2 = b2(a2[f2], f2, c2), null != d2 && i2.push(d2);
    else for (f2 in a2) d2 = b2(a2[f2], f2, c2), null != d2 && i2.push(d2);
    return e.apply([], i2);
  }, guid: 1, proxy: function(a2, b2) {
    var c2, e2, f2;
    return "string" == typeof b2 && (c2 = a2[b2], b2 = a2, a2 = c2), n.isFunction(a2) ? (e2 = d.call(arguments, 2), f2 = function() {
      return a2.apply(b2 || this, e2.concat(d.call(arguments)));
    }, f2.guid = a2.guid = a2.guid || n.guid++, f2) : void 0;
  }, now: Date.now, support: k }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a2, b2) {
    h["[object " + b2 + "]"] = b2.toLowerCase();
  });
  function s(a2) {
    var b2 = a2.length, c2 = n.type(a2);
    return "function" === c2 || n.isWindow(a2) ? false : 1 === a2.nodeType && b2 ? true : "array" === c2 || 0 === b2 || "number" == typeof b2 && b2 > 0 && b2 - 1 in a2;
  }
  var t = function(a2) {
    var b2, c2, d2, e2, f2, g2, h2, i2, j2, k2, l2, m2, n2, o2, p2, q2, r2, s2, t2, u2 = "sizzle" + 1 * /* @__PURE__ */ new Date(), v2 = a2.document, w2 = 0, x2 = 0, y2 = hb2(), z2 = hb2(), A2 = hb2(), B2 = function(a3, b3) {
      return a3 === b3 && (l2 = true), 0;
    }, C2 = 1 << 31, D2 = {}.hasOwnProperty, E2 = [], F2 = E2.pop, G2 = E2.push, H2 = E2.push, I2 = E2.slice, J2 = function(a3, b3) {
      for (var c3 = 0, d3 = a3.length; d3 > c3; c3++) if (a3[c3] === b3) return c3;
      return -1;
    }, K2 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L2 = "[\\x20\\t\\r\\n\\f]", M2 = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N2 = M2.replace("w", "w#"), O2 = "\\[" + L2 + "*(" + M2 + ")(?:" + L2 + "*([*^$|!~]?=)" + L2 + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + N2 + "))|)" + L2 + "*\\]", P2 = ":(" + M2 + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + O2 + ")*)|.*)\\)|)", Q2 = new RegExp(L2 + "+", "g"), R2 = new RegExp("^" + L2 + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L2 + "+$", "g"), S2 = new RegExp("^" + L2 + "*," + L2 + "*"), T2 = new RegExp("^" + L2 + "*([>+~]|" + L2 + ")" + L2 + "*"), U2 = new RegExp("=" + L2 + `*([^\\]'"]*?)` + L2 + "*\\]", "g"), V2 = new RegExp(P2), W2 = new RegExp("^" + N2 + "$"), X2 = { ID: new RegExp("^#(" + M2 + ")"), CLASS: new RegExp("^\\.(" + M2 + ")"), TAG: new RegExp("^(" + M2.replace("w", "w*") + ")"), ATTR: new RegExp("^" + O2), PSEUDO: new RegExp("^" + P2), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L2 + "*(even|odd|(([+-]|)(\\d*)n|)" + L2 + "*(?:([+-]|)" + L2 + "*(\\d+)|))" + L2 + "*\\)|)", "i"), bool: new RegExp("^(?:" + K2 + ")$", "i"), needsContext: new RegExp("^" + L2 + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L2 + "*((?:-\\d)?\\d*)" + L2 + "*\\)|)(?=[^-]|$)", "i") }, Y2 = /^(?:input|select|textarea|button)$/i, Z2 = /^h\d$/i, $2 = /^[^{]+\{\s*\[native \w/, _2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab2 = /[+~]/, bb2 = /'|\\/g, cb2 = new RegExp("\\\\([\\da-f]{1,6}" + L2 + "?|(" + L2 + ")|.)", "ig"), db2 = function(a3, b3, c3) {
      var d3 = "0x" + b3 - 65536;
      return d3 !== d3 || c3 ? b3 : 0 > d3 ? String.fromCharCode(d3 + 65536) : String.fromCharCode(d3 >> 10 | 55296, 1023 & d3 | 56320);
    }, eb2 = function() {
      m2();
    };
    try {
      H2.apply(E2 = I2.call(v2.childNodes), v2.childNodes), E2[v2.childNodes.length].nodeType;
    } catch (fb2) {
      H2 = { apply: E2.length ? function(a3, b3) {
        G2.apply(a3, I2.call(b3));
      } : function(a3, b3) {
        var c3 = a3.length, d3 = 0;
        while (a3[c3++] = b3[d3++]) ;
        a3.length = c3 - 1;
      } };
    }
    function gb2(a3, b3, d3, e3) {
      var f3, h3, j3, k3, l3, o3, r3, s3, w3, x3;
      if ((b3 ? b3.ownerDocument || b3 : v2) !== n2 && m2(b3), b3 = b3 || n2, d3 = d3 || [], k3 = b3.nodeType, "string" != typeof a3 || !a3 || 1 !== k3 && 9 !== k3 && 11 !== k3) return d3;
      if (!e3 && p2) {
        if (11 !== k3 && (f3 = _2.exec(a3))) if (j3 = f3[1]) {
          if (9 === k3) {
            if (h3 = b3.getElementById(j3), !h3 || !h3.parentNode) return d3;
            if (h3.id === j3) return d3.push(h3), d3;
          } else if (b3.ownerDocument && (h3 = b3.ownerDocument.getElementById(j3)) && t2(b3, h3) && h3.id === j3) return d3.push(h3), d3;
        } else {
          if (f3[2]) return H2.apply(d3, b3.getElementsByTagName(a3)), d3;
          if ((j3 = f3[3]) && c2.getElementsByClassName) return H2.apply(d3, b3.getElementsByClassName(j3)), d3;
        }
        if (c2.qsa && (!q2 || !q2.test(a3))) {
          if (s3 = r3 = u2, w3 = b3, x3 = 1 !== k3 && a3, 1 === k3 && "object" !== b3.nodeName.toLowerCase()) {
            o3 = g2(a3), (r3 = b3.getAttribute("id")) ? s3 = r3.replace(bb2, "\\$&") : b3.setAttribute("id", s3), s3 = "[id='" + s3 + "'] ", l3 = o3.length;
            while (l3--) o3[l3] = s3 + rb2(o3[l3]);
            w3 = ab2.test(a3) && pb2(b3.parentNode) || b3, x3 = o3.join(",");
          }
          if (x3) try {
            return H2.apply(d3, w3.querySelectorAll(x3)), d3;
          } catch (y3) {
          } finally {
            r3 || b3.removeAttribute("id");
          }
        }
      }
      return i2(a3.replace(R2, "$1"), b3, d3, e3);
    }
    function hb2() {
      var a3 = [];
      function b3(c3, e3) {
        return a3.push(c3 + " ") > d2.cacheLength && delete b3[a3.shift()], b3[c3 + " "] = e3;
      }
      return b3;
    }
    function ib2(a3) {
      return a3[u2] = true, a3;
    }
    function jb2(a3) {
      var b3 = n2.createElement("div");
      try {
        return !!a3(b3);
      } catch (c3) {
        return false;
      } finally {
        b3.parentNode && b3.parentNode.removeChild(b3), b3 = null;
      }
    }
    function kb2(a3, b3) {
      var c3 = a3.split("|"), e3 = a3.length;
      while (e3--) d2.attrHandle[c3[e3]] = b3;
    }
    function lb2(a3, b3) {
      var c3 = b3 && a3, d3 = c3 && 1 === a3.nodeType && 1 === b3.nodeType && (~b3.sourceIndex || C2) - (~a3.sourceIndex || C2);
      if (d3) return d3;
      if (c3) {
        while (c3 = c3.nextSibling) if (c3 === b3) return -1;
      }
      return a3 ? 1 : -1;
    }
    function mb2(a3) {
      return function(b3) {
        var c3 = b3.nodeName.toLowerCase();
        return "input" === c3 && b3.type === a3;
      };
    }
    function nb2(a3) {
      return function(b3) {
        var c3 = b3.nodeName.toLowerCase();
        return ("input" === c3 || "button" === c3) && b3.type === a3;
      };
    }
    function ob2(a3) {
      return ib2(function(b3) {
        return b3 = +b3, ib2(function(c3, d3) {
          var e3, f3 = a3([], c3.length, b3), g3 = f3.length;
          while (g3--) c3[e3 = f3[g3]] && (c3[e3] = !(d3[e3] = c3[e3]));
        });
      });
    }
    function pb2(a3) {
      return a3 && "undefined" != typeof a3.getElementsByTagName && a3;
    }
    c2 = gb2.support = {}, f2 = gb2.isXML = function(a3) {
      var b3 = a3 && (a3.ownerDocument || a3).documentElement;
      return b3 ? "HTML" !== b3.nodeName : false;
    }, m2 = gb2.setDocument = function(a3) {
      var b3, e3, g3 = a3 ? a3.ownerDocument || a3 : v2;
      return g3 !== n2 && 9 === g3.nodeType && g3.documentElement ? (n2 = g3, o2 = g3.documentElement, e3 = g3.defaultView, e3 && e3 !== e3.top && (e3.addEventListener ? e3.addEventListener("unload", eb2, false) : e3.attachEvent && e3.attachEvent("onunload", eb2)), p2 = !f2(g3), c2.attributes = jb2(function(a4) {
        return a4.className = "i", !a4.getAttribute("className");
      }), c2.getElementsByTagName = jb2(function(a4) {
        return a4.appendChild(g3.createComment("")), !a4.getElementsByTagName("*").length;
      }), c2.getElementsByClassName = $2.test(g3.getElementsByClassName), c2.getById = jb2(function(a4) {
        return o2.appendChild(a4).id = u2, !g3.getElementsByName || !g3.getElementsByName(u2).length;
      }), c2.getById ? (d2.find.ID = function(a4, b4) {
        if ("undefined" != typeof b4.getElementById && p2) {
          var c3 = b4.getElementById(a4);
          return c3 && c3.parentNode ? [c3] : [];
        }
      }, d2.filter.ID = function(a4) {
        var b4 = a4.replace(cb2, db2);
        return function(a5) {
          return a5.getAttribute("id") === b4;
        };
      }) : (delete d2.find.ID, d2.filter.ID = function(a4) {
        var b4 = a4.replace(cb2, db2);
        return function(a5) {
          var c3 = "undefined" != typeof a5.getAttributeNode && a5.getAttributeNode("id");
          return c3 && c3.value === b4;
        };
      }), d2.find.TAG = c2.getElementsByTagName ? function(a4, b4) {
        return "undefined" != typeof b4.getElementsByTagName ? b4.getElementsByTagName(a4) : c2.qsa ? b4.querySelectorAll(a4) : void 0;
      } : function(a4, b4) {
        var c3, d3 = [], e4 = 0, f3 = b4.getElementsByTagName(a4);
        if ("*" === a4) {
          while (c3 = f3[e4++]) 1 === c3.nodeType && d3.push(c3);
          return d3;
        }
        return f3;
      }, d2.find.CLASS = c2.getElementsByClassName && function(a4, b4) {
        return p2 ? b4.getElementsByClassName(a4) : void 0;
      }, r2 = [], q2 = [], (c2.qsa = $2.test(g3.querySelectorAll)) && (jb2(function(a4) {
        o2.appendChild(a4).innerHTML = "<a id='" + u2 + "'></a><select id='" + u2 + "-\f]' msallowcapture=''><option selected=''></option></select>", a4.querySelectorAll("[msallowcapture^='']").length && q2.push("[*^$]=" + L2 + `*(?:''|"")`), a4.querySelectorAll("[selected]").length || q2.push("\\[" + L2 + "*(?:value|" + K2 + ")"), a4.querySelectorAll("[id~=" + u2 + "-]").length || q2.push("~="), a4.querySelectorAll(":checked").length || q2.push(":checked"), a4.querySelectorAll("a#" + u2 + "+*").length || q2.push(".#.+[+~]");
      }), jb2(function(a4) {
        var b4 = g3.createElement("input");
        b4.setAttribute("type", "hidden"), a4.appendChild(b4).setAttribute("name", "D"), a4.querySelectorAll("[name=d]").length && q2.push("name" + L2 + "*[*^$|!~]?="), a4.querySelectorAll(":enabled").length || q2.push(":enabled", ":disabled"), a4.querySelectorAll("*,:x"), q2.push(",.*:");
      })), (c2.matchesSelector = $2.test(s2 = o2.matches || o2.webkitMatchesSelector || o2.mozMatchesSelector || o2.oMatchesSelector || o2.msMatchesSelector)) && jb2(function(a4) {
        c2.disconnectedMatch = s2.call(a4, "div"), s2.call(a4, "[s!='']:x"), r2.push("!=", P2);
      }), q2 = q2.length && new RegExp(q2.join("|")), r2 = r2.length && new RegExp(r2.join("|")), b3 = $2.test(o2.compareDocumentPosition), t2 = b3 || $2.test(o2.contains) ? function(a4, b4) {
        var c3 = 9 === a4.nodeType ? a4.documentElement : a4, d3 = b4 && b4.parentNode;
        return a4 === d3 || !(!d3 || 1 !== d3.nodeType || !(c3.contains ? c3.contains(d3) : a4.compareDocumentPosition && 16 & a4.compareDocumentPosition(d3)));
      } : function(a4, b4) {
        if (b4) {
          while (b4 = b4.parentNode) if (b4 === a4) return true;
        }
        return false;
      }, B2 = b3 ? function(a4, b4) {
        if (a4 === b4) return l2 = true, 0;
        var d3 = !a4.compareDocumentPosition - !b4.compareDocumentPosition;
        return d3 ? d3 : (d3 = (a4.ownerDocument || a4) === (b4.ownerDocument || b4) ? a4.compareDocumentPosition(b4) : 1, 1 & d3 || !c2.sortDetached && b4.compareDocumentPosition(a4) === d3 ? a4 === g3 || a4.ownerDocument === v2 && t2(v2, a4) ? -1 : b4 === g3 || b4.ownerDocument === v2 && t2(v2, b4) ? 1 : k2 ? J2(k2, a4) - J2(k2, b4) : 0 : 4 & d3 ? -1 : 1);
      } : function(a4, b4) {
        if (a4 === b4) return l2 = true, 0;
        var c3, d3 = 0, e4 = a4.parentNode, f3 = b4.parentNode, h3 = [a4], i3 = [b4];
        if (!e4 || !f3) return a4 === g3 ? -1 : b4 === g3 ? 1 : e4 ? -1 : f3 ? 1 : k2 ? J2(k2, a4) - J2(k2, b4) : 0;
        if (e4 === f3) return lb2(a4, b4);
        c3 = a4;
        while (c3 = c3.parentNode) h3.unshift(c3);
        c3 = b4;
        while (c3 = c3.parentNode) i3.unshift(c3);
        while (h3[d3] === i3[d3]) d3++;
        return d3 ? lb2(h3[d3], i3[d3]) : h3[d3] === v2 ? -1 : i3[d3] === v2 ? 1 : 0;
      }, g3) : n2;
    }, gb2.matches = function(a3, b3) {
      return gb2(a3, null, null, b3);
    }, gb2.matchesSelector = function(a3, b3) {
      if ((a3.ownerDocument || a3) !== n2 && m2(a3), b3 = b3.replace(U2, "='$1']"), !(!c2.matchesSelector || !p2 || r2 && r2.test(b3) || q2 && q2.test(b3))) try {
        var d3 = s2.call(a3, b3);
        if (d3 || c2.disconnectedMatch || a3.document && 11 !== a3.document.nodeType) return d3;
      } catch (e3) {
      }
      return gb2(b3, n2, null, [a3]).length > 0;
    }, gb2.contains = function(a3, b3) {
      return (a3.ownerDocument || a3) !== n2 && m2(a3), t2(a3, b3);
    }, gb2.attr = function(a3, b3) {
      (a3.ownerDocument || a3) !== n2 && m2(a3);
      var e3 = d2.attrHandle[b3.toLowerCase()], f3 = e3 && D2.call(d2.attrHandle, b3.toLowerCase()) ? e3(a3, b3, !p2) : void 0;
      return void 0 !== f3 ? f3 : c2.attributes || !p2 ? a3.getAttribute(b3) : (f3 = a3.getAttributeNode(b3)) && f3.specified ? f3.value : null;
    }, gb2.error = function(a3) {
      throw new Error("Syntax error, unrecognized expression: " + a3);
    }, gb2.uniqueSort = function(a3) {
      var b3, d3 = [], e3 = 0, f3 = 0;
      if (l2 = !c2.detectDuplicates, k2 = !c2.sortStable && a3.slice(0), a3.sort(B2), l2) {
        while (b3 = a3[f3++]) b3 === a3[f3] && (e3 = d3.push(f3));
        while (e3--) a3.splice(d3[e3], 1);
      }
      return k2 = null, a3;
    }, e2 = gb2.getText = function(a3) {
      var b3, c3 = "", d3 = 0, f3 = a3.nodeType;
      if (f3) {
        if (1 === f3 || 9 === f3 || 11 === f3) {
          if ("string" == typeof a3.textContent) return a3.textContent;
          for (a3 = a3.firstChild; a3; a3 = a3.nextSibling) c3 += e2(a3);
        } else if (3 === f3 || 4 === f3) return a3.nodeValue;
      } else while (b3 = a3[d3++]) c3 += e2(b3);
      return c3;
    }, d2 = gb2.selectors = { cacheLength: 50, createPseudo: ib2, match: X2, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(a3) {
      return a3[1] = a3[1].replace(cb2, db2), a3[3] = (a3[3] || a3[4] || a3[5] || "").replace(cb2, db2), "~=" === a3[2] && (a3[3] = " " + a3[3] + " "), a3.slice(0, 4);
    }, CHILD: function(a3) {
      return a3[1] = a3[1].toLowerCase(), "nth" === a3[1].slice(0, 3) ? (a3[3] || gb2.error(a3[0]), a3[4] = +(a3[4] ? a3[5] + (a3[6] || 1) : 2 * ("even" === a3[3] || "odd" === a3[3])), a3[5] = +(a3[7] + a3[8] || "odd" === a3[3])) : a3[3] && gb2.error(a3[0]), a3;
    }, PSEUDO: function(a3) {
      var b3, c3 = !a3[6] && a3[2];
      return X2.CHILD.test(a3[0]) ? null : (a3[3] ? a3[2] = a3[4] || a3[5] || "" : c3 && V2.test(c3) && (b3 = g2(c3, true)) && (b3 = c3.indexOf(")", c3.length - b3) - c3.length) && (a3[0] = a3[0].slice(0, b3), a3[2] = c3.slice(0, b3)), a3.slice(0, 3));
    } }, filter: { TAG: function(a3) {
      var b3 = a3.replace(cb2, db2).toLowerCase();
      return "*" === a3 ? function() {
        return true;
      } : function(a4) {
        return a4.nodeName && a4.nodeName.toLowerCase() === b3;
      };
    }, CLASS: function(a3) {
      var b3 = y2[a3 + " "];
      return b3 || (b3 = new RegExp("(^|" + L2 + ")" + a3 + "(" + L2 + "|$)")) && y2(a3, function(a4) {
        return b3.test("string" == typeof a4.className && a4.className || "undefined" != typeof a4.getAttribute && a4.getAttribute("class") || "");
      });
    }, ATTR: function(a3, b3, c3) {
      return function(d3) {
        var e3 = gb2.attr(d3, a3);
        return null == e3 ? "!=" === b3 : b3 ? (e3 += "", "=" === b3 ? e3 === c3 : "!=" === b3 ? e3 !== c3 : "^=" === b3 ? c3 && 0 === e3.indexOf(c3) : "*=" === b3 ? c3 && e3.indexOf(c3) > -1 : "$=" === b3 ? c3 && e3.slice(-c3.length) === c3 : "~=" === b3 ? (" " + e3.replace(Q2, " ") + " ").indexOf(c3) > -1 : "|=" === b3 ? e3 === c3 || e3.slice(0, c3.length + 1) === c3 + "-" : false) : true;
      };
    }, CHILD: function(a3, b3, c3, d3, e3) {
      var f3 = "nth" !== a3.slice(0, 3), g3 = "last" !== a3.slice(-4), h3 = "of-type" === b3;
      return 1 === d3 && 0 === e3 ? function(a4) {
        return !!a4.parentNode;
      } : function(b4, c4, i3) {
        var j3, k3, l3, m3, n3, o3, p3 = f3 !== g3 ? "nextSibling" : "previousSibling", q3 = b4.parentNode, r3 = h3 && b4.nodeName.toLowerCase(), s3 = !i3 && !h3;
        if (q3) {
          if (f3) {
            while (p3) {
              l3 = b4;
              while (l3 = l3[p3]) if (h3 ? l3.nodeName.toLowerCase() === r3 : 1 === l3.nodeType) return false;
              o3 = p3 = "only" === a3 && !o3 && "nextSibling";
            }
            return true;
          }
          if (o3 = [g3 ? q3.firstChild : q3.lastChild], g3 && s3) {
            k3 = q3[u2] || (q3[u2] = {}), j3 = k3[a3] || [], n3 = j3[0] === w2 && j3[1], m3 = j3[0] === w2 && j3[2], l3 = n3 && q3.childNodes[n3];
            while (l3 = ++n3 && l3 && l3[p3] || (m3 = n3 = 0) || o3.pop()) if (1 === l3.nodeType && ++m3 && l3 === b4) {
              k3[a3] = [w2, n3, m3];
              break;
            }
          } else if (s3 && (j3 = (b4[u2] || (b4[u2] = {}))[a3]) && j3[0] === w2) m3 = j3[1];
          else while (l3 = ++n3 && l3 && l3[p3] || (m3 = n3 = 0) || o3.pop()) if ((h3 ? l3.nodeName.toLowerCase() === r3 : 1 === l3.nodeType) && ++m3 && (s3 && ((l3[u2] || (l3[u2] = {}))[a3] = [w2, m3]), l3 === b4)) break;
          return m3 -= e3, m3 === d3 || m3 % d3 === 0 && m3 / d3 >= 0;
        }
      };
    }, PSEUDO: function(a3, b3) {
      var c3, e3 = d2.pseudos[a3] || d2.setFilters[a3.toLowerCase()] || gb2.error("unsupported pseudo: " + a3);
      return e3[u2] ? e3(b3) : e3.length > 1 ? (c3 = [a3, a3, "", b3], d2.setFilters.hasOwnProperty(a3.toLowerCase()) ? ib2(function(a4, c4) {
        var d3, f3 = e3(a4, b3), g3 = f3.length;
        while (g3--) d3 = J2(a4, f3[g3]), a4[d3] = !(c4[d3] = f3[g3]);
      }) : function(a4) {
        return e3(a4, 0, c3);
      }) : e3;
    } }, pseudos: { not: ib2(function(a3) {
      var b3 = [], c3 = [], d3 = h2(a3.replace(R2, "$1"));
      return d3[u2] ? ib2(function(a4, b4, c4, e3) {
        var f3, g3 = d3(a4, null, e3, []), h3 = a4.length;
        while (h3--) (f3 = g3[h3]) && (a4[h3] = !(b4[h3] = f3));
      }) : function(a4, e3, f3) {
        return b3[0] = a4, d3(b3, null, f3, c3), b3[0] = null, !c3.pop();
      };
    }), has: ib2(function(a3) {
      return function(b3) {
        return gb2(a3, b3).length > 0;
      };
    }), contains: ib2(function(a3) {
      return a3 = a3.replace(cb2, db2), function(b3) {
        return (b3.textContent || b3.innerText || e2(b3)).indexOf(a3) > -1;
      };
    }), lang: ib2(function(a3) {
      return W2.test(a3 || "") || gb2.error("unsupported lang: " + a3), a3 = a3.replace(cb2, db2).toLowerCase(), function(b3) {
        var c3;
        do
          if (c3 = p2 ? b3.lang : b3.getAttribute("xml:lang") || b3.getAttribute("lang")) return c3 = c3.toLowerCase(), c3 === a3 || 0 === c3.indexOf(a3 + "-");
        while ((b3 = b3.parentNode) && 1 === b3.nodeType);
        return false;
      };
    }), target: function(b3) {
      var c3 = a2.location && a2.location.hash;
      return c3 && c3.slice(1) === b3.id;
    }, root: function(a3) {
      return a3 === o2;
    }, focus: function(a3) {
      return a3 === n2.activeElement && (!n2.hasFocus || n2.hasFocus()) && !!(a3.type || a3.href || ~a3.tabIndex);
    }, enabled: function(a3) {
      return a3.disabled === false;
    }, disabled: function(a3) {
      return a3.disabled === true;
    }, checked: function(a3) {
      var b3 = a3.nodeName.toLowerCase();
      return "input" === b3 && !!a3.checked || "option" === b3 && !!a3.selected;
    }, selected: function(a3) {
      return a3.parentNode && a3.parentNode.selectedIndex, a3.selected === true;
    }, empty: function(a3) {
      for (a3 = a3.firstChild; a3; a3 = a3.nextSibling) if (a3.nodeType < 6) return false;
      return true;
    }, parent: function(a3) {
      return !d2.pseudos.empty(a3);
    }, header: function(a3) {
      return Z2.test(a3.nodeName);
    }, input: function(a3) {
      return Y2.test(a3.nodeName);
    }, button: function(a3) {
      var b3 = a3.nodeName.toLowerCase();
      return "input" === b3 && "button" === a3.type || "button" === b3;
    }, text: function(a3) {
      var b3;
      return "input" === a3.nodeName.toLowerCase() && "text" === a3.type && (null == (b3 = a3.getAttribute("type")) || "text" === b3.toLowerCase());
    }, first: ob2(function() {
      return [0];
    }), last: ob2(function(a3, b3) {
      return [b3 - 1];
    }), eq: ob2(function(a3, b3, c3) {
      return [0 > c3 ? c3 + b3 : c3];
    }), even: ob2(function(a3, b3) {
      for (var c3 = 0; b3 > c3; c3 += 2) a3.push(c3);
      return a3;
    }), odd: ob2(function(a3, b3) {
      for (var c3 = 1; b3 > c3; c3 += 2) a3.push(c3);
      return a3;
    }), lt: ob2(function(a3, b3, c3) {
      for (var d3 = 0 > c3 ? c3 + b3 : c3; --d3 >= 0; ) a3.push(d3);
      return a3;
    }), gt: ob2(function(a3, b3, c3) {
      for (var d3 = 0 > c3 ? c3 + b3 : c3; ++d3 < b3; ) a3.push(d3);
      return a3;
    }) } }, d2.pseudos.nth = d2.pseudos.eq;
    for (b2 in { radio: true, checkbox: true, file: true, password: true, image: true }) d2.pseudos[b2] = mb2(b2);
    for (b2 in { submit: true, reset: true }) d2.pseudos[b2] = nb2(b2);
    function qb2() {
    }
    qb2.prototype = d2.filters = d2.pseudos, d2.setFilters = new qb2(), g2 = gb2.tokenize = function(a3, b3) {
      var c3, e3, f3, g3, h3, i3, j3, k3 = z2[a3 + " "];
      if (k3) return b3 ? 0 : k3.slice(0);
      h3 = a3, i3 = [], j3 = d2.preFilter;
      while (h3) {
        (!c3 || (e3 = S2.exec(h3))) && (e3 && (h3 = h3.slice(e3[0].length) || h3), i3.push(f3 = [])), c3 = false, (e3 = T2.exec(h3)) && (c3 = e3.shift(), f3.push({ value: c3, type: e3[0].replace(R2, " ") }), h3 = h3.slice(c3.length));
        for (g3 in d2.filter) !(e3 = X2[g3].exec(h3)) || j3[g3] && !(e3 = j3[g3](e3)) || (c3 = e3.shift(), f3.push({ value: c3, type: g3, matches: e3 }), h3 = h3.slice(c3.length));
        if (!c3) break;
      }
      return b3 ? h3.length : h3 ? gb2.error(a3) : z2(a3, i3).slice(0);
    };
    function rb2(a3) {
      for (var b3 = 0, c3 = a3.length, d3 = ""; c3 > b3; b3++) d3 += a3[b3].value;
      return d3;
    }
    function sb2(a3, b3, c3) {
      var d3 = b3.dir, e3 = c3 && "parentNode" === d3, f3 = x2++;
      return b3.first ? function(b4, c4, f4) {
        while (b4 = b4[d3]) if (1 === b4.nodeType || e3) return a3(b4, c4, f4);
      } : function(b4, c4, g3) {
        var h3, i3, j3 = [w2, f3];
        if (g3) {
          while (b4 = b4[d3]) if ((1 === b4.nodeType || e3) && a3(b4, c4, g3)) return true;
        } else while (b4 = b4[d3]) if (1 === b4.nodeType || e3) {
          if (i3 = b4[u2] || (b4[u2] = {}), (h3 = i3[d3]) && h3[0] === w2 && h3[1] === f3) return j3[2] = h3[2];
          if (i3[d3] = j3, j3[2] = a3(b4, c4, g3)) return true;
        }
      };
    }
    function tb2(a3) {
      return a3.length > 1 ? function(b3, c3, d3) {
        var e3 = a3.length;
        while (e3--) if (!a3[e3](b3, c3, d3)) return false;
        return true;
      } : a3[0];
    }
    function ub2(a3, b3, c3) {
      for (var d3 = 0, e3 = b3.length; e3 > d3; d3++) gb2(a3, b3[d3], c3);
      return c3;
    }
    function vb2(a3, b3, c3, d3, e3) {
      for (var f3, g3 = [], h3 = 0, i3 = a3.length, j3 = null != b3; i3 > h3; h3++) (f3 = a3[h3]) && (!c3 || c3(f3, d3, e3)) && (g3.push(f3), j3 && b3.push(h3));
      return g3;
    }
    function wb2(a3, b3, c3, d3, e3, f3) {
      return d3 && !d3[u2] && (d3 = wb2(d3)), e3 && !e3[u2] && (e3 = wb2(e3, f3)), ib2(function(f4, g3, h3, i3) {
        var j3, k3, l3, m3 = [], n3 = [], o3 = g3.length, p3 = f4 || ub2(b3 || "*", h3.nodeType ? [h3] : h3, []), q3 = !a3 || !f4 && b3 ? p3 : vb2(p3, m3, a3, h3, i3), r3 = c3 ? e3 || (f4 ? a3 : o3 || d3) ? [] : g3 : q3;
        if (c3 && c3(q3, r3, h3, i3), d3) {
          j3 = vb2(r3, n3), d3(j3, [], h3, i3), k3 = j3.length;
          while (k3--) (l3 = j3[k3]) && (r3[n3[k3]] = !(q3[n3[k3]] = l3));
        }
        if (f4) {
          if (e3 || a3) {
            if (e3) {
              j3 = [], k3 = r3.length;
              while (k3--) (l3 = r3[k3]) && j3.push(q3[k3] = l3);
              e3(null, r3 = [], j3, i3);
            }
            k3 = r3.length;
            while (k3--) (l3 = r3[k3]) && (j3 = e3 ? J2(f4, l3) : m3[k3]) > -1 && (f4[j3] = !(g3[j3] = l3));
          }
        } else r3 = vb2(r3 === g3 ? r3.splice(o3, r3.length) : r3), e3 ? e3(null, g3, r3, i3) : H2.apply(g3, r3);
      });
    }
    function xb2(a3) {
      for (var b3, c3, e3, f3 = a3.length, g3 = d2.relative[a3[0].type], h3 = g3 || d2.relative[" "], i3 = g3 ? 1 : 0, k3 = sb2(function(a4) {
        return a4 === b3;
      }, h3, true), l3 = sb2(function(a4) {
        return J2(b3, a4) > -1;
      }, h3, true), m3 = [function(a4, c4, d3) {
        var e4 = !g3 && (d3 || c4 !== j2) || ((b3 = c4).nodeType ? k3(a4, c4, d3) : l3(a4, c4, d3));
        return b3 = null, e4;
      }]; f3 > i3; i3++) if (c3 = d2.relative[a3[i3].type]) m3 = [sb2(tb2(m3), c3)];
      else {
        if (c3 = d2.filter[a3[i3].type].apply(null, a3[i3].matches), c3[u2]) {
          for (e3 = ++i3; f3 > e3; e3++) if (d2.relative[a3[e3].type]) break;
          return wb2(i3 > 1 && tb2(m3), i3 > 1 && rb2(a3.slice(0, i3 - 1).concat({ value: " " === a3[i3 - 2].type ? "*" : "" })).replace(R2, "$1"), c3, e3 > i3 && xb2(a3.slice(i3, e3)), f3 > e3 && xb2(a3 = a3.slice(e3)), f3 > e3 && rb2(a3));
        }
        m3.push(c3);
      }
      return tb2(m3);
    }
    function yb2(a3, b3) {
      var c3 = b3.length > 0, e3 = a3.length > 0, f3 = function(f4, g3, h3, i3, k3) {
        var l3, m3, o3, p3 = 0, q3 = "0", r3 = f4 && [], s3 = [], t3 = j2, u3 = f4 || e3 && d2.find.TAG("*", k3), v3 = w2 += null == t3 ? 1 : Math.random() || 0.1, x3 = u3.length;
        for (k3 && (j2 = g3 !== n2 && g3); q3 !== x3 && null != (l3 = u3[q3]); q3++) {
          if (e3 && l3) {
            m3 = 0;
            while (o3 = a3[m3++]) if (o3(l3, g3, h3)) {
              i3.push(l3);
              break;
            }
            k3 && (w2 = v3);
          }
          c3 && ((l3 = !o3 && l3) && p3--, f4 && r3.push(l3));
        }
        if (p3 += q3, c3 && q3 !== p3) {
          m3 = 0;
          while (o3 = b3[m3++]) o3(r3, s3, g3, h3);
          if (f4) {
            if (p3 > 0) while (q3--) r3[q3] || s3[q3] || (s3[q3] = F2.call(i3));
            s3 = vb2(s3);
          }
          H2.apply(i3, s3), k3 && !f4 && s3.length > 0 && p3 + b3.length > 1 && gb2.uniqueSort(i3);
        }
        return k3 && (w2 = v3, j2 = t3), r3;
      };
      return c3 ? ib2(f3) : f3;
    }
    return h2 = gb2.compile = function(a3, b3) {
      var c3, d3 = [], e3 = [], f3 = A2[a3 + " "];
      if (!f3) {
        b3 || (b3 = g2(a3)), c3 = b3.length;
        while (c3--) f3 = xb2(b3[c3]), f3[u2] ? d3.push(f3) : e3.push(f3);
        f3 = A2(a3, yb2(e3, d3)), f3.selector = a3;
      }
      return f3;
    }, i2 = gb2.select = function(a3, b3, e3, f3) {
      var i3, j3, k3, l3, m3, n3 = "function" == typeof a3 && a3, o3 = !f3 && g2(a3 = n3.selector || a3);
      if (e3 = e3 || [], 1 === o3.length) {
        if (j3 = o3[0] = o3[0].slice(0), j3.length > 2 && "ID" === (k3 = j3[0]).type && c2.getById && 9 === b3.nodeType && p2 && d2.relative[j3[1].type]) {
          if (b3 = (d2.find.ID(k3.matches[0].replace(cb2, db2), b3) || [])[0], !b3) return e3;
          n3 && (b3 = b3.parentNode), a3 = a3.slice(j3.shift().value.length);
        }
        i3 = X2.needsContext.test(a3) ? 0 : j3.length;
        while (i3--) {
          if (k3 = j3[i3], d2.relative[l3 = k3.type]) break;
          if ((m3 = d2.find[l3]) && (f3 = m3(k3.matches[0].replace(cb2, db2), ab2.test(j3[0].type) && pb2(b3.parentNode) || b3))) {
            if (j3.splice(i3, 1), a3 = f3.length && rb2(j3), !a3) return H2.apply(e3, f3), e3;
            break;
          }
        }
      }
      return (n3 || h2(a3, o3))(f3, b3, !p2, e3, ab2.test(a3) && pb2(b3.parentNode) || b3), e3;
    }, c2.sortStable = u2.split("").sort(B2).join("") === u2, c2.detectDuplicates = !!l2, m2(), c2.sortDetached = jb2(function(a3) {
      return 1 & a3.compareDocumentPosition(n2.createElement("div"));
    }), jb2(function(a3) {
      return a3.innerHTML = "<a href='#'></a>", "#" === a3.firstChild.getAttribute("href");
    }) || kb2("type|href|height|width", function(a3, b3, c3) {
      return c3 ? void 0 : a3.getAttribute(b3, "type" === b3.toLowerCase() ? 1 : 2);
    }), c2.attributes && jb2(function(a3) {
      return a3.innerHTML = "<input/>", a3.firstChild.setAttribute("value", ""), "" === a3.firstChild.getAttribute("value");
    }) || kb2("value", function(a3, b3, c3) {
      return c3 || "input" !== a3.nodeName.toLowerCase() ? void 0 : a3.defaultValue;
    }), jb2(function(a3) {
      return null == a3.getAttribute("disabled");
    }) || kb2(K2, function(a3, b3, c3) {
      var d3;
      return c3 ? void 0 : a3[b3] === true ? b3.toLowerCase() : (d3 = a3.getAttributeNode(b3)) && d3.specified ? d3.value : null;
    }), gb2;
  }(a);
  n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
  var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;
  function x(a2, b2, c2) {
    if (n.isFunction(b2)) return n.grep(a2, function(a3, d2) {
      return !!b2.call(a3, d2, a3) !== c2;
    });
    if (b2.nodeType) return n.grep(a2, function(a3) {
      return a3 === b2 !== c2;
    });
    if ("string" == typeof b2) {
      if (w.test(b2)) return n.filter(b2, a2, c2);
      b2 = n.filter(b2, a2);
    }
    return n.grep(a2, function(a3) {
      return g.call(b2, a3) >= 0 !== c2;
    });
  }
  n.filter = function(a2, b2, c2) {
    var d2 = b2[0];
    return c2 && (a2 = ":not(" + a2 + ")"), 1 === b2.length && 1 === d2.nodeType ? n.find.matchesSelector(d2, a2) ? [d2] : [] : n.find.matches(a2, n.grep(b2, function(a3) {
      return 1 === a3.nodeType;
    }));
  }, n.fn.extend({ find: function(a2) {
    var b2, c2 = this.length, d2 = [], e2 = this;
    if ("string" != typeof a2) return this.pushStack(n(a2).filter(function() {
      for (b2 = 0; c2 > b2; b2++) if (n.contains(e2[b2], this)) return true;
    }));
    for (b2 = 0; c2 > b2; b2++) n.find(a2, e2[b2], d2);
    return d2 = this.pushStack(c2 > 1 ? n.unique(d2) : d2), d2.selector = this.selector ? this.selector + " " + a2 : a2, d2;
  }, filter: function(a2) {
    return this.pushStack(x(this, a2 || [], false));
  }, not: function(a2) {
    return this.pushStack(x(this, a2 || [], true));
  }, is: function(a2) {
    return !!x(this, "string" == typeof a2 && u.test(a2) ? n(a2) : a2 || [], false).length;
  } });
  var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function(a2, b2) {
    var c2, d2;
    if (!a2) return this;
    if ("string" == typeof a2) {
      if (c2 = "<" === a2[0] && ">" === a2[a2.length - 1] && a2.length >= 3 ? [null, a2, null] : z.exec(a2), !c2 || !c2[1] && b2) return !b2 || b2.jquery ? (b2 || y).find(a2) : this.constructor(b2).find(a2);
      if (c2[1]) {
        if (b2 = b2 instanceof n ? b2[0] : b2, n.merge(this, n.parseHTML(c2[1], b2 && b2.nodeType ? b2.ownerDocument || b2 : l, true)), v.test(c2[1]) && n.isPlainObject(b2)) for (c2 in b2) n.isFunction(this[c2]) ? this[c2](b2[c2]) : this.attr(c2, b2[c2]);
        return this;
      }
      return d2 = l.getElementById(c2[2]), d2 && d2.parentNode && (this.length = 1, this[0] = d2), this.context = l, this.selector = a2, this;
    }
    return a2.nodeType ? (this.context = this[0] = a2, this.length = 1, this) : n.isFunction(a2) ? "undefined" != typeof y.ready ? y.ready(a2) : a2(n) : (void 0 !== a2.selector && (this.selector = a2.selector, this.context = a2.context), n.makeArray(a2, this));
  };
  A.prototype = n.fn, y = n(l);
  var B = /^(?:parents|prev(?:Until|All))/, C = { children: true, contents: true, next: true, prev: true };
  n.extend({ dir: function(a2, b2, c2) {
    var d2 = [], e2 = void 0 !== c2;
    while ((a2 = a2[b2]) && 9 !== a2.nodeType) if (1 === a2.nodeType) {
      if (e2 && n(a2).is(c2)) break;
      d2.push(a2);
    }
    return d2;
  }, sibling: function(a2, b2) {
    for (var c2 = []; a2; a2 = a2.nextSibling) 1 === a2.nodeType && a2 !== b2 && c2.push(a2);
    return c2;
  } }), n.fn.extend({ has: function(a2) {
    var b2 = n(a2, this), c2 = b2.length;
    return this.filter(function() {
      for (var a3 = 0; c2 > a3; a3++) if (n.contains(this, b2[a3])) return true;
    });
  }, closest: function(a2, b2) {
    for (var c2, d2 = 0, e2 = this.length, f2 = [], g2 = u.test(a2) || "string" != typeof a2 ? n(a2, b2 || this.context) : 0; e2 > d2; d2++) for (c2 = this[d2]; c2 && c2 !== b2; c2 = c2.parentNode) if (c2.nodeType < 11 && (g2 ? g2.index(c2) > -1 : 1 === c2.nodeType && n.find.matchesSelector(c2, a2))) {
      f2.push(c2);
      break;
    }
    return this.pushStack(f2.length > 1 ? n.unique(f2) : f2);
  }, index: function(a2) {
    return a2 ? "string" == typeof a2 ? g.call(n(a2), this[0]) : g.call(this, a2.jquery ? a2[0] : a2) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  }, add: function(a2, b2) {
    return this.pushStack(n.unique(n.merge(this.get(), n(a2, b2))));
  }, addBack: function(a2) {
    return this.add(null == a2 ? this.prevObject : this.prevObject.filter(a2));
  } });
  function D(a2, b2) {
    while ((a2 = a2[b2]) && 1 !== a2.nodeType) ;
    return a2;
  }
  n.each({ parent: function(a2) {
    var b2 = a2.parentNode;
    return b2 && 11 !== b2.nodeType ? b2 : null;
  }, parents: function(a2) {
    return n.dir(a2, "parentNode");
  }, parentsUntil: function(a2, b2, c2) {
    return n.dir(a2, "parentNode", c2);
  }, next: function(a2) {
    return D(a2, "nextSibling");
  }, prev: function(a2) {
    return D(a2, "previousSibling");
  }, nextAll: function(a2) {
    return n.dir(a2, "nextSibling");
  }, prevAll: function(a2) {
    return n.dir(a2, "previousSibling");
  }, nextUntil: function(a2, b2, c2) {
    return n.dir(a2, "nextSibling", c2);
  }, prevUntil: function(a2, b2, c2) {
    return n.dir(a2, "previousSibling", c2);
  }, siblings: function(a2) {
    return n.sibling((a2.parentNode || {}).firstChild, a2);
  }, children: function(a2) {
    return n.sibling(a2.firstChild);
  }, contents: function(a2) {
    return a2.contentDocument || n.merge([], a2.childNodes);
  } }, function(a2, b2) {
    n.fn[a2] = function(c2, d2) {
      var e2 = n.map(this, b2, c2);
      return "Until" !== a2.slice(-5) && (d2 = c2), d2 && "string" == typeof d2 && (e2 = n.filter(d2, e2)), this.length > 1 && (C[a2] || n.unique(e2), B.test(a2) && e2.reverse()), this.pushStack(e2);
    };
  });
  var E = /\S+/g, F = {};
  function G(a2) {
    var b2 = F[a2] = {};
    return n.each(a2.match(E) || [], function(a3, c2) {
      b2[c2] = true;
    }), b2;
  }
  n.Callbacks = function(a2) {
    a2 = "string" == typeof a2 ? F[a2] || G(a2) : n.extend({}, a2);
    var b2, c2, d2, e2, f2, g2, h2 = [], i2 = !a2.once && [], j2 = function(l2) {
      for (b2 = a2.memory && l2, c2 = true, g2 = e2 || 0, e2 = 0, f2 = h2.length, d2 = true; h2 && f2 > g2; g2++) if (h2[g2].apply(l2[0], l2[1]) === false && a2.stopOnFalse) {
        b2 = false;
        break;
      }
      d2 = false, h2 && (i2 ? i2.length && j2(i2.shift()) : b2 ? h2 = [] : k2.disable());
    }, k2 = { add: function() {
      if (h2) {
        var c3 = h2.length;
        !function g3(b3) {
          n.each(b3, function(b4, c4) {
            var d3 = n.type(c4);
            "function" === d3 ? a2.unique && k2.has(c4) || h2.push(c4) : c4 && c4.length && "string" !== d3 && g3(c4);
          });
        }(arguments), d2 ? f2 = h2.length : b2 && (e2 = c3, j2(b2));
      }
      return this;
    }, remove: function() {
      return h2 && n.each(arguments, function(a3, b3) {
        var c3;
        while ((c3 = n.inArray(b3, h2, c3)) > -1) h2.splice(c3, 1), d2 && (f2 >= c3 && f2--, g2 >= c3 && g2--);
      }), this;
    }, has: function(a3) {
      return a3 ? n.inArray(a3, h2) > -1 : !(!h2 || !h2.length);
    }, empty: function() {
      return h2 = [], f2 = 0, this;
    }, disable: function() {
      return h2 = i2 = b2 = void 0, this;
    }, disabled: function() {
      return !h2;
    }, lock: function() {
      return i2 = void 0, b2 || k2.disable(), this;
    }, locked: function() {
      return !i2;
    }, fireWith: function(a3, b3) {
      return !h2 || c2 && !i2 || (b3 = b3 || [], b3 = [a3, b3.slice ? b3.slice() : b3], d2 ? i2.push(b3) : j2(b3)), this;
    }, fire: function() {
      return k2.fireWith(this, arguments), this;
    }, fired: function() {
      return !!c2;
    } };
    return k2;
  }, n.extend({ Deferred: function(a2) {
    var b2 = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], c2 = "pending", d2 = { state: function() {
      return c2;
    }, always: function() {
      return e2.done(arguments).fail(arguments), this;
    }, then: function() {
      var a3 = arguments;
      return n.Deferred(function(c3) {
        n.each(b2, function(b3, f2) {
          var g2 = n.isFunction(a3[b3]) && a3[b3];
          e2[f2[1]](function() {
            var a4 = g2 && g2.apply(this, arguments);
            a4 && n.isFunction(a4.promise) ? a4.promise().done(c3.resolve).fail(c3.reject).progress(c3.notify) : c3[f2[0] + "With"](this === d2 ? c3.promise() : this, g2 ? [a4] : arguments);
          });
        }), a3 = null;
      }).promise();
    }, promise: function(a3) {
      return null != a3 ? n.extend(a3, d2) : d2;
    } }, e2 = {};
    return d2.pipe = d2.then, n.each(b2, function(a3, f2) {
      var g2 = f2[2], h2 = f2[3];
      d2[f2[1]] = g2.add, h2 && g2.add(function() {
        c2 = h2;
      }, b2[1 ^ a3][2].disable, b2[2][2].lock), e2[f2[0]] = function() {
        return e2[f2[0] + "With"](this === e2 ? d2 : this, arguments), this;
      }, e2[f2[0] + "With"] = g2.fireWith;
    }), d2.promise(e2), a2 && a2.call(e2, e2), e2;
  }, when: function(a2) {
    var b2 = 0, c2 = d.call(arguments), e2 = c2.length, f2 = 1 !== e2 || a2 && n.isFunction(a2.promise) ? e2 : 0, g2 = 1 === f2 ? a2 : n.Deferred(), h2 = function(a3, b3, c3) {
      return function(e3) {
        b3[a3] = this, c3[a3] = arguments.length > 1 ? d.call(arguments) : e3, c3 === i2 ? g2.notifyWith(b3, c3) : --f2 || g2.resolveWith(b3, c3);
      };
    }, i2, j2, k2;
    if (e2 > 1) for (i2 = new Array(e2), j2 = new Array(e2), k2 = new Array(e2); e2 > b2; b2++) c2[b2] && n.isFunction(c2[b2].promise) ? c2[b2].promise().done(h2(b2, k2, c2)).fail(g2.reject).progress(h2(b2, j2, i2)) : --f2;
    return f2 || g2.resolveWith(k2, c2), g2.promise();
  } });
  var H;
  n.fn.ready = function(a2) {
    return n.ready.promise().done(a2), this;
  }, n.extend({ isReady: false, readyWait: 1, holdReady: function(a2) {
    a2 ? n.readyWait++ : n.ready(true);
  }, ready: function(a2) {
    (a2 === true ? --n.readyWait : n.isReady) || (n.isReady = true, a2 !== true && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
  } });
  function I() {
    l.removeEventListener("DOMContentLoaded", I, false), a.removeEventListener("load", I, false), n.ready();
  }
  n.ready.promise = function(b2) {
    return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, false), a.addEventListener("load", I, false))), H.promise(b2);
  }, n.ready.promise();
  var J = n.access = function(a2, b2, c2, d2, e2, f2, g2) {
    var h2 = 0, i2 = a2.length, j2 = null == c2;
    if ("object" === n.type(c2)) {
      e2 = true;
      for (h2 in c2) n.access(a2, b2, h2, c2[h2], true, f2, g2);
    } else if (void 0 !== d2 && (e2 = true, n.isFunction(d2) || (g2 = true), j2 && (g2 ? (b2.call(a2, d2), b2 = null) : (j2 = b2, b2 = function(a3, b3, c3) {
      return j2.call(n(a3), c3);
    })), b2)) for (; i2 > h2; h2++) b2(a2[h2], c2, g2 ? d2 : d2.call(a2[h2], h2, b2(a2[h2], c2)));
    return e2 ? a2 : j2 ? b2.call(a2) : i2 ? b2(a2[0], c2) : f2;
  };
  n.acceptData = function(a2) {
    return 1 === a2.nodeType || 9 === a2.nodeType || !+a2.nodeType;
  };
  function K() {
    Object.defineProperty(this.cache = {}, 0, { get: function() {
      return {};
    } }), this.expando = n.expando + K.uid++;
  }
  K.uid = 1, K.accepts = n.acceptData, K.prototype = { key: function(a2) {
    if (!K.accepts(a2)) return 0;
    var b2 = {}, c2 = a2[this.expando];
    if (!c2) {
      c2 = K.uid++;
      try {
        b2[this.expando] = { value: c2 }, Object.defineProperties(a2, b2);
      } catch (d2) {
        b2[this.expando] = c2, n.extend(a2, b2);
      }
    }
    return this.cache[c2] || (this.cache[c2] = {}), c2;
  }, set: function(a2, b2, c2) {
    var d2, e2 = this.key(a2), f2 = this.cache[e2];
    if ("string" == typeof b2) f2[b2] = c2;
    else if (n.isEmptyObject(f2)) n.extend(this.cache[e2], b2);
    else for (d2 in b2) f2[d2] = b2[d2];
    return f2;
  }, get: function(a2, b2) {
    var c2 = this.cache[this.key(a2)];
    return void 0 === b2 ? c2 : c2[b2];
  }, access: function(a2, b2, c2) {
    var d2;
    return void 0 === b2 || b2 && "string" == typeof b2 && void 0 === c2 ? (d2 = this.get(a2, b2), void 0 !== d2 ? d2 : this.get(a2, n.camelCase(b2))) : (this.set(a2, b2, c2), void 0 !== c2 ? c2 : b2);
  }, remove: function(a2, b2) {
    var c2, d2, e2, f2 = this.key(a2), g2 = this.cache[f2];
    if (void 0 === b2) this.cache[f2] = {};
    else {
      n.isArray(b2) ? d2 = b2.concat(b2.map(n.camelCase)) : (e2 = n.camelCase(b2), b2 in g2 ? d2 = [b2, e2] : (d2 = e2, d2 = d2 in g2 ? [d2] : d2.match(E) || [])), c2 = d2.length;
      while (c2--) delete g2[d2[c2]];
    }
  }, hasData: function(a2) {
    return !n.isEmptyObject(this.cache[a2[this.expando]] || {});
  }, discard: function(a2) {
    a2[this.expando] && delete this.cache[a2[this.expando]];
  } };
  var L = new K(), M = new K(), N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;
  function P(a2, b2, c2) {
    var d2;
    if (void 0 === c2 && 1 === a2.nodeType) if (d2 = "data-" + b2.replace(O, "-$1").toLowerCase(), c2 = a2.getAttribute(d2), "string" == typeof c2) {
      try {
        c2 = "true" === c2 ? true : "false" === c2 ? false : "null" === c2 ? null : +c2 + "" === c2 ? +c2 : N.test(c2) ? n.parseJSON(c2) : c2;
      } catch (e2) {
      }
      M.set(a2, b2, c2);
    } else c2 = void 0;
    return c2;
  }
  n.extend({ hasData: function(a2) {
    return M.hasData(a2) || L.hasData(a2);
  }, data: function(a2, b2, c2) {
    return M.access(a2, b2, c2);
  }, removeData: function(a2, b2) {
    M.remove(a2, b2);
  }, _data: function(a2, b2, c2) {
    return L.access(a2, b2, c2);
  }, _removeData: function(a2, b2) {
    L.remove(a2, b2);
  } }), n.fn.extend({ data: function(a2, b2) {
    var c2, d2, e2, f2 = this[0], g2 = f2 && f2.attributes;
    if (void 0 === a2) {
      if (this.length && (e2 = M.get(f2), 1 === f2.nodeType && !L.get(f2, "hasDataAttrs"))) {
        c2 = g2.length;
        while (c2--) g2[c2] && (d2 = g2[c2].name, 0 === d2.indexOf("data-") && (d2 = n.camelCase(d2.slice(5)), P(f2, d2, e2[d2])));
        L.set(f2, "hasDataAttrs", true);
      }
      return e2;
    }
    return "object" == typeof a2 ? this.each(function() {
      M.set(this, a2);
    }) : J(this, function(b3) {
      var c3, d3 = n.camelCase(a2);
      if (f2 && void 0 === b3) {
        if (c3 = M.get(f2, a2), void 0 !== c3) return c3;
        if (c3 = M.get(f2, d3), void 0 !== c3) return c3;
        if (c3 = P(f2, d3, void 0), void 0 !== c3) return c3;
      } else this.each(function() {
        var c4 = M.get(this, d3);
        M.set(this, d3, b3), -1 !== a2.indexOf("-") && void 0 !== c4 && M.set(this, a2, b3);
      });
    }, null, b2, arguments.length > 1, null, true);
  }, removeData: function(a2) {
    return this.each(function() {
      M.remove(this, a2);
    });
  } }), n.extend({ queue: function(a2, b2, c2) {
    var d2;
    return a2 ? (b2 = (b2 || "fx") + "queue", d2 = L.get(a2, b2), c2 && (!d2 || n.isArray(c2) ? d2 = L.access(a2, b2, n.makeArray(c2)) : d2.push(c2)), d2 || []) : void 0;
  }, dequeue: function(a2, b2) {
    b2 = b2 || "fx";
    var c2 = n.queue(a2, b2), d2 = c2.length, e2 = c2.shift(), f2 = n._queueHooks(a2, b2), g2 = function() {
      n.dequeue(a2, b2);
    };
    "inprogress" === e2 && (e2 = c2.shift(), d2--), e2 && ("fx" === b2 && c2.unshift("inprogress"), delete f2.stop, e2.call(a2, g2, f2)), !d2 && f2 && f2.empty.fire();
  }, _queueHooks: function(a2, b2) {
    var c2 = b2 + "queueHooks";
    return L.get(a2, c2) || L.access(a2, c2, { empty: n.Callbacks("once memory").add(function() {
      L.remove(a2, [b2 + "queue", c2]);
    }) });
  } }), n.fn.extend({ queue: function(a2, b2) {
    var c2 = 2;
    return "string" != typeof a2 && (b2 = a2, a2 = "fx", c2--), arguments.length < c2 ? n.queue(this[0], a2) : void 0 === b2 ? this : this.each(function() {
      var c3 = n.queue(this, a2, b2);
      n._queueHooks(this, a2), "fx" === a2 && "inprogress" !== c3[0] && n.dequeue(this, a2);
    });
  }, dequeue: function(a2) {
    return this.each(function() {
      n.dequeue(this, a2);
    });
  }, clearQueue: function(a2) {
    return this.queue(a2 || "fx", []);
  }, promise: function(a2, b2) {
    var c2, d2 = 1, e2 = n.Deferred(), f2 = this, g2 = this.length, h2 = function() {
      --d2 || e2.resolveWith(f2, [f2]);
    };
    "string" != typeof a2 && (b2 = a2, a2 = void 0), a2 = a2 || "fx";
    while (g2--) c2 = L.get(f2[g2], a2 + "queueHooks"), c2 && c2.empty && (d2++, c2.empty.add(h2));
    return h2(), e2.promise(b2);
  } });
  var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = ["Top", "Right", "Bottom", "Left"], S = function(a2, b2) {
    return a2 = b2 || a2, "none" === n.css(a2, "display") || !n.contains(a2.ownerDocument, a2);
  }, T = /^(?:checkbox|radio)$/i;
  !function() {
    var a2 = l.createDocumentFragment(), b2 = a2.appendChild(l.createElement("div")), c2 = l.createElement("input");
    c2.setAttribute("type", "radio"), c2.setAttribute("checked", "checked"), c2.setAttribute("name", "t"), b2.appendChild(c2), k.checkClone = b2.cloneNode(true).cloneNode(true).lastChild.checked, b2.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b2.cloneNode(true).lastChild.defaultValue;
  }();
  var U = "undefined";
  k.focusinBubbles = "onfocusin" in a;
  var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;
  function Z() {
    return true;
  }
  function $() {
    return false;
  }
  function _() {
    try {
      return l.activeElement;
    } catch (a2) {
    }
  }
  n.event = { global: {}, add: function(a2, b2, c2, d2, e2) {
    var f2, g2, h2, i2, j2, k2, l2, m2, o2, p2, q2, r2 = L.get(a2);
    if (r2) {
      c2.handler && (f2 = c2, c2 = f2.handler, e2 = f2.selector), c2.guid || (c2.guid = n.guid++), (i2 = r2.events) || (i2 = r2.events = {}), (g2 = r2.handle) || (g2 = r2.handle = function(b3) {
        return typeof n !== U && n.event.triggered !== b3.type ? n.event.dispatch.apply(a2, arguments) : void 0;
      }), b2 = (b2 || "").match(E) || [""], j2 = b2.length;
      while (j2--) h2 = Y.exec(b2[j2]) || [], o2 = q2 = h2[1], p2 = (h2[2] || "").split(".").sort(), o2 && (l2 = n.event.special[o2] || {}, o2 = (e2 ? l2.delegateType : l2.bindType) || o2, l2 = n.event.special[o2] || {}, k2 = n.extend({ type: o2, origType: q2, data: d2, handler: c2, guid: c2.guid, selector: e2, needsContext: e2 && n.expr.match.needsContext.test(e2), namespace: p2.join(".") }, f2), (m2 = i2[o2]) || (m2 = i2[o2] = [], m2.delegateCount = 0, l2.setup && l2.setup.call(a2, d2, p2, g2) !== false || a2.addEventListener && a2.addEventListener(o2, g2, false)), l2.add && (l2.add.call(a2, k2), k2.handler.guid || (k2.handler.guid = c2.guid)), e2 ? m2.splice(m2.delegateCount++, 0, k2) : m2.push(k2), n.event.global[o2] = true);
    }
  }, remove: function(a2, b2, c2, d2, e2) {
    var f2, g2, h2, i2, j2, k2, l2, m2, o2, p2, q2, r2 = L.hasData(a2) && L.get(a2);
    if (r2 && (i2 = r2.events)) {
      b2 = (b2 || "").match(E) || [""], j2 = b2.length;
      while (j2--) if (h2 = Y.exec(b2[j2]) || [], o2 = q2 = h2[1], p2 = (h2[2] || "").split(".").sort(), o2) {
        l2 = n.event.special[o2] || {}, o2 = (d2 ? l2.delegateType : l2.bindType) || o2, m2 = i2[o2] || [], h2 = h2[2] && new RegExp("(^|\\.)" + p2.join("\\.(?:.*\\.|)") + "(\\.|$)"), g2 = f2 = m2.length;
        while (f2--) k2 = m2[f2], !e2 && q2 !== k2.origType || c2 && c2.guid !== k2.guid || h2 && !h2.test(k2.namespace) || d2 && d2 !== k2.selector && ("**" !== d2 || !k2.selector) || (m2.splice(f2, 1), k2.selector && m2.delegateCount--, l2.remove && l2.remove.call(a2, k2));
        g2 && !m2.length && (l2.teardown && l2.teardown.call(a2, p2, r2.handle) !== false || n.removeEvent(a2, o2, r2.handle), delete i2[o2]);
      } else for (o2 in i2) n.event.remove(a2, o2 + b2[j2], c2, d2, true);
      n.isEmptyObject(i2) && (delete r2.handle, L.remove(a2, "events"));
    }
  }, trigger: function(b2, c2, d2, e2) {
    var f2, g2, h2, i2, k2, m2, o2, p2 = [d2 || l], q2 = j.call(b2, "type") ? b2.type : b2, r2 = j.call(b2, "namespace") ? b2.namespace.split(".") : [];
    if (g2 = h2 = d2 = d2 || l, 3 !== d2.nodeType && 8 !== d2.nodeType && !X.test(q2 + n.event.triggered) && (q2.indexOf(".") >= 0 && (r2 = q2.split("."), q2 = r2.shift(), r2.sort()), k2 = q2.indexOf(":") < 0 && "on" + q2, b2 = b2[n.expando] ? b2 : new n.Event(q2, "object" == typeof b2 && b2), b2.isTrigger = e2 ? 2 : 3, b2.namespace = r2.join("."), b2.namespace_re = b2.namespace ? new RegExp("(^|\\.)" + r2.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b2.result = void 0, b2.target || (b2.target = d2), c2 = null == c2 ? [b2] : n.makeArray(c2, [b2]), o2 = n.event.special[q2] || {}, e2 || !o2.trigger || o2.trigger.apply(d2, c2) !== false)) {
      if (!e2 && !o2.noBubble && !n.isWindow(d2)) {
        for (i2 = o2.delegateType || q2, X.test(i2 + q2) || (g2 = g2.parentNode); g2; g2 = g2.parentNode) p2.push(g2), h2 = g2;
        h2 === (d2.ownerDocument || l) && p2.push(h2.defaultView || h2.parentWindow || a);
      }
      f2 = 0;
      while ((g2 = p2[f2++]) && !b2.isPropagationStopped()) b2.type = f2 > 1 ? i2 : o2.bindType || q2, m2 = (L.get(g2, "events") || {})[b2.type] && L.get(g2, "handle"), m2 && m2.apply(g2, c2), m2 = k2 && g2[k2], m2 && m2.apply && n.acceptData(g2) && (b2.result = m2.apply(g2, c2), b2.result === false && b2.preventDefault());
      return b2.type = q2, e2 || b2.isDefaultPrevented() || o2._default && o2._default.apply(p2.pop(), c2) !== false || !n.acceptData(d2) || k2 && n.isFunction(d2[q2]) && !n.isWindow(d2) && (h2 = d2[k2], h2 && (d2[k2] = null), n.event.triggered = q2, d2[q2](), n.event.triggered = void 0, h2 && (d2[k2] = h2)), b2.result;
    }
  }, dispatch: function(a2) {
    a2 = n.event.fix(a2);
    var b2, c2, e2, f2, g2, h2 = [], i2 = d.call(arguments), j2 = (L.get(this, "events") || {})[a2.type] || [], k2 = n.event.special[a2.type] || {};
    if (i2[0] = a2, a2.delegateTarget = this, !k2.preDispatch || k2.preDispatch.call(this, a2) !== false) {
      h2 = n.event.handlers.call(this, a2, j2), b2 = 0;
      while ((f2 = h2[b2++]) && !a2.isPropagationStopped()) {
        a2.currentTarget = f2.elem, c2 = 0;
        while ((g2 = f2.handlers[c2++]) && !a2.isImmediatePropagationStopped()) (!a2.namespace_re || a2.namespace_re.test(g2.namespace)) && (a2.handleObj = g2, a2.data = g2.data, e2 = ((n.event.special[g2.origType] || {}).handle || g2.handler).apply(f2.elem, i2), void 0 !== e2 && (a2.result = e2) === false && (a2.preventDefault(), a2.stopPropagation()));
      }
      return k2.postDispatch && k2.postDispatch.call(this, a2), a2.result;
    }
  }, handlers: function(a2, b2) {
    var c2, d2, e2, f2, g2 = [], h2 = b2.delegateCount, i2 = a2.target;
    if (h2 && i2.nodeType && (!a2.button || "click" !== a2.type)) {
      for (; i2 !== this; i2 = i2.parentNode || this) if (i2.disabled !== true || "click" !== a2.type) {
        for (d2 = [], c2 = 0; h2 > c2; c2++) f2 = b2[c2], e2 = f2.selector + " ", void 0 === d2[e2] && (d2[e2] = f2.needsContext ? n(e2, this).index(i2) >= 0 : n.find(e2, this, null, [i2]).length), d2[e2] && d2.push(f2);
        d2.length && g2.push({ elem: i2, handlers: d2 });
      }
    }
    return h2 < b2.length && g2.push({ elem: this, handlers: b2.slice(h2) }), g2;
  }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(a2, b2) {
    return null == a2.which && (a2.which = null != b2.charCode ? b2.charCode : b2.keyCode), a2;
  } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(a2, b2) {
    var c2, d2, e2, f2 = b2.button;
    return null == a2.pageX && null != b2.clientX && (c2 = a2.target.ownerDocument || l, d2 = c2.documentElement, e2 = c2.body, a2.pageX = b2.clientX + (d2 && d2.scrollLeft || e2 && e2.scrollLeft || 0) - (d2 && d2.clientLeft || e2 && e2.clientLeft || 0), a2.pageY = b2.clientY + (d2 && d2.scrollTop || e2 && e2.scrollTop || 0) - (d2 && d2.clientTop || e2 && e2.clientTop || 0)), a2.which || void 0 === f2 || (a2.which = 1 & f2 ? 1 : 2 & f2 ? 3 : 4 & f2 ? 2 : 0), a2;
  } }, fix: function(a2) {
    if (a2[n.expando]) return a2;
    var b2, c2, d2, e2 = a2.type, f2 = a2, g2 = this.fixHooks[e2];
    g2 || (this.fixHooks[e2] = g2 = W.test(e2) ? this.mouseHooks : V.test(e2) ? this.keyHooks : {}), d2 = g2.props ? this.props.concat(g2.props) : this.props, a2 = new n.Event(f2), b2 = d2.length;
    while (b2--) c2 = d2[b2], a2[c2] = f2[c2];
    return a2.target || (a2.target = l), 3 === a2.target.nodeType && (a2.target = a2.target.parentNode), g2.filter ? g2.filter(a2, f2) : a2;
  }, special: { load: { noBubble: true }, focus: { trigger: function() {
    return this !== _() && this.focus ? (this.focus(), false) : void 0;
  }, delegateType: "focusin" }, blur: { trigger: function() {
    return this === _() && this.blur ? (this.blur(), false) : void 0;
  }, delegateType: "focusout" }, click: { trigger: function() {
    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), false) : void 0;
  }, _default: function(a2) {
    return n.nodeName(a2.target, "a");
  } }, beforeunload: { postDispatch: function(a2) {
    void 0 !== a2.result && a2.originalEvent && (a2.originalEvent.returnValue = a2.result);
  } } }, simulate: function(a2, b2, c2, d2) {
    var e2 = n.extend(new n.Event(), c2, { type: a2, isSimulated: true, originalEvent: {} });
    d2 ? n.event.trigger(e2, null, b2) : n.event.dispatch.call(b2, e2), e2.isDefaultPrevented() && c2.preventDefault();
  } }, n.removeEvent = function(a2, b2, c2) {
    a2.removeEventListener && a2.removeEventListener(b2, c2, false);
  }, n.Event = function(a2, b2) {
    return this instanceof n.Event ? (a2 && a2.type ? (this.originalEvent = a2, this.type = a2.type, this.isDefaultPrevented = a2.defaultPrevented || void 0 === a2.defaultPrevented && a2.returnValue === false ? Z : $) : this.type = a2, b2 && n.extend(this, b2), this.timeStamp = a2 && a2.timeStamp || n.now(), void (this[n.expando] = true)) : new n.Event(a2, b2);
  }, n.Event.prototype = { isDefaultPrevented: $, isPropagationStopped: $, isImmediatePropagationStopped: $, preventDefault: function() {
    var a2 = this.originalEvent;
    this.isDefaultPrevented = Z, a2 && a2.preventDefault && a2.preventDefault();
  }, stopPropagation: function() {
    var a2 = this.originalEvent;
    this.isPropagationStopped = Z, a2 && a2.stopPropagation && a2.stopPropagation();
  }, stopImmediatePropagation: function() {
    var a2 = this.originalEvent;
    this.isImmediatePropagationStopped = Z, a2 && a2.stopImmediatePropagation && a2.stopImmediatePropagation(), this.stopPropagation();
  } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a2, b2) {
    n.event.special[a2] = { delegateType: b2, bindType: b2, handle: function(a3) {
      var c2, d2 = this, e2 = a3.relatedTarget, f2 = a3.handleObj;
      return (!e2 || e2 !== d2 && !n.contains(d2, e2)) && (a3.type = f2.origType, c2 = f2.handler.apply(this, arguments), a3.type = b2), c2;
    } };
  }), k.focusinBubbles || n.each({ focus: "focusin", blur: "focusout" }, function(a2, b2) {
    var c2 = function(a3) {
      n.event.simulate(b2, a3.target, n.event.fix(a3), true);
    };
    n.event.special[b2] = { setup: function() {
      var d2 = this.ownerDocument || this, e2 = L.access(d2, b2);
      e2 || d2.addEventListener(a2, c2, true), L.access(d2, b2, (e2 || 0) + 1);
    }, teardown: function() {
      var d2 = this.ownerDocument || this, e2 = L.access(d2, b2) - 1;
      e2 ? L.access(d2, b2, e2) : (d2.removeEventListener(a2, c2, true), L.remove(d2, b2));
    } };
  }), n.fn.extend({ on: function(a2, b2, c2, d2, e2) {
    var f2, g2;
    if ("object" == typeof a2) {
      "string" != typeof b2 && (c2 = c2 || b2, b2 = void 0);
      for (g2 in a2) this.on(g2, b2, c2, a2[g2], e2);
      return this;
    }
    if (null == c2 && null == d2 ? (d2 = b2, c2 = b2 = void 0) : null == d2 && ("string" == typeof b2 ? (d2 = c2, c2 = void 0) : (d2 = c2, c2 = b2, b2 = void 0)), d2 === false) d2 = $;
    else if (!d2) return this;
    return 1 === e2 && (f2 = d2, d2 = function(a3) {
      return n().off(a3), f2.apply(this, arguments);
    }, d2.guid = f2.guid || (f2.guid = n.guid++)), this.each(function() {
      n.event.add(this, a2, d2, c2, b2);
    });
  }, one: function(a2, b2, c2, d2) {
    return this.on(a2, b2, c2, d2, 1);
  }, off: function(a2, b2, c2) {
    var d2, e2;
    if (a2 && a2.preventDefault && a2.handleObj) return d2 = a2.handleObj, n(a2.delegateTarget).off(d2.namespace ? d2.origType + "." + d2.namespace : d2.origType, d2.selector, d2.handler), this;
    if ("object" == typeof a2) {
      for (e2 in a2) this.off(e2, b2, a2[e2]);
      return this;
    }
    return (b2 === false || "function" == typeof b2) && (c2 = b2, b2 = void 0), c2 === false && (c2 = $), this.each(function() {
      n.event.remove(this, a2, c2, b2);
    });
  }, trigger: function(a2, b2) {
    return this.each(function() {
      n.event.trigger(a2, b2, this);
    });
  }, triggerHandler: function(a2, b2) {
    var c2 = this[0];
    return c2 ? n.event.trigger(a2, b2, c2, true) : void 0;
  } });
  var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bb = /<([\w:]+)/, cb = /<|&#?\w+;/, db = /<(?:script|style|link)/i, eb = /checked\s*(?:[^=]|=\s*.checked.)/i, fb = /^$|\/(?:java|ecma)script/i, gb = /^true\/(.*)/, hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ib = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
  ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td;
  function jb(a2, b2) {
    return n.nodeName(a2, "table") && n.nodeName(11 !== b2.nodeType ? b2 : b2.firstChild, "tr") ? a2.getElementsByTagName("tbody")[0] || a2.appendChild(a2.ownerDocument.createElement("tbody")) : a2;
  }
  function kb(a2) {
    return a2.type = (null !== a2.getAttribute("type")) + "/" + a2.type, a2;
  }
  function lb(a2) {
    var b2 = gb.exec(a2.type);
    return b2 ? a2.type = b2[1] : a2.removeAttribute("type"), a2;
  }
  function mb(a2, b2) {
    for (var c2 = 0, d2 = a2.length; d2 > c2; c2++) L.set(a2[c2], "globalEval", !b2 || L.get(b2[c2], "globalEval"));
  }
  function nb(a2, b2) {
    var c2, d2, e2, f2, g2, h2, i2, j2;
    if (1 === b2.nodeType) {
      if (L.hasData(a2) && (f2 = L.access(a2), g2 = L.set(b2, f2), j2 = f2.events)) {
        delete g2.handle, g2.events = {};
        for (e2 in j2) for (c2 = 0, d2 = j2[e2].length; d2 > c2; c2++) n.event.add(b2, e2, j2[e2][c2]);
      }
      M.hasData(a2) && (h2 = M.access(a2), i2 = n.extend({}, h2), M.set(b2, i2));
    }
  }
  function ob(a2, b2) {
    var c2 = a2.getElementsByTagName ? a2.getElementsByTagName(b2 || "*") : a2.querySelectorAll ? a2.querySelectorAll(b2 || "*") : [];
    return void 0 === b2 || b2 && n.nodeName(a2, b2) ? n.merge([a2], c2) : c2;
  }
  function pb(a2, b2) {
    var c2 = b2.nodeName.toLowerCase();
    "input" === c2 && T.test(a2.type) ? b2.checked = a2.checked : ("input" === c2 || "textarea" === c2) && (b2.defaultValue = a2.defaultValue);
  }
  n.extend({ clone: function(a2, b2, c2) {
    var d2, e2, f2, g2, h2 = a2.cloneNode(true), i2 = n.contains(a2.ownerDocument, a2);
    if (!(k.noCloneChecked || 1 !== a2.nodeType && 11 !== a2.nodeType || n.isXMLDoc(a2))) for (g2 = ob(h2), f2 = ob(a2), d2 = 0, e2 = f2.length; e2 > d2; d2++) pb(f2[d2], g2[d2]);
    if (b2) if (c2) for (f2 = f2 || ob(a2), g2 = g2 || ob(h2), d2 = 0, e2 = f2.length; e2 > d2; d2++) nb(f2[d2], g2[d2]);
    else nb(a2, h2);
    return g2 = ob(h2, "script"), g2.length > 0 && mb(g2, !i2 && ob(a2, "script")), h2;
  }, buildFragment: function(a2, b2, c2, d2) {
    for (var e2, f2, g2, h2, i2, j2, k2 = b2.createDocumentFragment(), l2 = [], m2 = 0, o2 = a2.length; o2 > m2; m2++) if (e2 = a2[m2], e2 || 0 === e2) if ("object" === n.type(e2)) n.merge(l2, e2.nodeType ? [e2] : e2);
    else if (cb.test(e2)) {
      f2 = f2 || k2.appendChild(b2.createElement("div")), g2 = (bb.exec(e2) || ["", ""])[1].toLowerCase(), h2 = ib[g2] || ib._default, f2.innerHTML = h2[1] + e2.replace(ab, "<$1></$2>") + h2[2], j2 = h2[0];
      while (j2--) f2 = f2.lastChild;
      n.merge(l2, f2.childNodes), f2 = k2.firstChild, f2.textContent = "";
    } else l2.push(b2.createTextNode(e2));
    k2.textContent = "", m2 = 0;
    while (e2 = l2[m2++]) if ((!d2 || -1 === n.inArray(e2, d2)) && (i2 = n.contains(e2.ownerDocument, e2), f2 = ob(k2.appendChild(e2), "script"), i2 && mb(f2), c2)) {
      j2 = 0;
      while (e2 = f2[j2++]) fb.test(e2.type || "") && c2.push(e2);
    }
    return k2;
  }, cleanData: function(a2) {
    for (var b2, c2, d2, e2, f2 = n.event.special, g2 = 0; void 0 !== (c2 = a2[g2]); g2++) {
      if (n.acceptData(c2) && (e2 = c2[L.expando], e2 && (b2 = L.cache[e2]))) {
        if (b2.events) for (d2 in b2.events) f2[d2] ? n.event.remove(c2, d2) : n.removeEvent(c2, d2, b2.handle);
        L.cache[e2] && delete L.cache[e2];
      }
      delete M.cache[c2[M.expando]];
    }
  } }), n.fn.extend({ text: function(a2) {
    return J(this, function(a3) {
      return void 0 === a3 ? n.text(this) : this.empty().each(function() {
        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a3);
      });
    }, null, a2, arguments.length);
  }, append: function() {
    return this.domManip(arguments, function(a2) {
      if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
        var b2 = jb(this, a2);
        b2.appendChild(a2);
      }
    });
  }, prepend: function() {
    return this.domManip(arguments, function(a2) {
      if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
        var b2 = jb(this, a2);
        b2.insertBefore(a2, b2.firstChild);
      }
    });
  }, before: function() {
    return this.domManip(arguments, function(a2) {
      this.parentNode && this.parentNode.insertBefore(a2, this);
    });
  }, after: function() {
    return this.domManip(arguments, function(a2) {
      this.parentNode && this.parentNode.insertBefore(a2, this.nextSibling);
    });
  }, remove: function(a2, b2) {
    for (var c2, d2 = a2 ? n.filter(a2, this) : this, e2 = 0; null != (c2 = d2[e2]); e2++) b2 || 1 !== c2.nodeType || n.cleanData(ob(c2)), c2.parentNode && (b2 && n.contains(c2.ownerDocument, c2) && mb(ob(c2, "script")), c2.parentNode.removeChild(c2));
    return this;
  }, empty: function() {
    for (var a2, b2 = 0; null != (a2 = this[b2]); b2++) 1 === a2.nodeType && (n.cleanData(ob(a2, false)), a2.textContent = "");
    return this;
  }, clone: function(a2, b2) {
    return a2 = null == a2 ? false : a2, b2 = null == b2 ? a2 : b2, this.map(function() {
      return n.clone(this, a2, b2);
    });
  }, html: function(a2) {
    return J(this, function(a3) {
      var b2 = this[0] || {}, c2 = 0, d2 = this.length;
      if (void 0 === a3 && 1 === b2.nodeType) return b2.innerHTML;
      if ("string" == typeof a3 && !db.test(a3) && !ib[(bb.exec(a3) || ["", ""])[1].toLowerCase()]) {
        a3 = a3.replace(ab, "<$1></$2>");
        try {
          for (; d2 > c2; c2++) b2 = this[c2] || {}, 1 === b2.nodeType && (n.cleanData(ob(b2, false)), b2.innerHTML = a3);
          b2 = 0;
        } catch (e2) {
        }
      }
      b2 && this.empty().append(a3);
    }, null, a2, arguments.length);
  }, replaceWith: function() {
    var a2 = arguments[0];
    return this.domManip(arguments, function(b2) {
      a2 = this.parentNode, n.cleanData(ob(this)), a2 && a2.replaceChild(b2, this);
    }), a2 && (a2.length || a2.nodeType) ? this : this.remove();
  }, detach: function(a2) {
    return this.remove(a2, true);
  }, domManip: function(a2, b2) {
    a2 = e.apply([], a2);
    var c2, d2, f2, g2, h2, i2, j2 = 0, l2 = this.length, m2 = this, o2 = l2 - 1, p2 = a2[0], q2 = n.isFunction(p2);
    if (q2 || l2 > 1 && "string" == typeof p2 && !k.checkClone && eb.test(p2)) return this.each(function(c3) {
      var d3 = m2.eq(c3);
      q2 && (a2[0] = p2.call(this, c3, d3.html())), d3.domManip(a2, b2);
    });
    if (l2 && (c2 = n.buildFragment(a2, this[0].ownerDocument, false, this), d2 = c2.firstChild, 1 === c2.childNodes.length && (c2 = d2), d2)) {
      for (f2 = n.map(ob(c2, "script"), kb), g2 = f2.length; l2 > j2; j2++) h2 = c2, j2 !== o2 && (h2 = n.clone(h2, true, true), g2 && n.merge(f2, ob(h2, "script"))), b2.call(this[j2], h2, j2);
      if (g2) for (i2 = f2[f2.length - 1].ownerDocument, n.map(f2, lb), j2 = 0; g2 > j2; j2++) h2 = f2[j2], fb.test(h2.type || "") && !L.access(h2, "globalEval") && n.contains(i2, h2) && (h2.src ? n._evalUrl && n._evalUrl(h2.src) : n.globalEval(h2.textContent.replace(hb, "")));
    }
    return this;
  } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a2, b2) {
    n.fn[a2] = function(a3) {
      for (var c2, d2 = [], e2 = n(a3), g2 = e2.length - 1, h2 = 0; g2 >= h2; h2++) c2 = h2 === g2 ? this : this.clone(true), n(e2[h2])[b2](c2), f.apply(d2, c2.get());
      return this.pushStack(d2);
    };
  });
  var qb, rb = {};
  function sb(b2, c2) {
    var d2, e2 = n(c2.createElement(b2)).appendTo(c2.body), f2 = a.getDefaultComputedStyle && (d2 = a.getDefaultComputedStyle(e2[0])) ? d2.display : n.css(e2[0], "display");
    return e2.detach(), f2;
  }
  function tb(a2) {
    var b2 = l, c2 = rb[a2];
    return c2 || (c2 = sb(a2, b2), "none" !== c2 && c2 || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b2.documentElement), b2 = qb[0].contentDocument, b2.write(), b2.close(), c2 = sb(a2, b2), qb.detach()), rb[a2] = c2), c2;
  }
  var ub = /^margin/, vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wb = function(b2) {
    return b2.ownerDocument.defaultView.opener ? b2.ownerDocument.defaultView.getComputedStyle(b2, null) : a.getComputedStyle(b2, null);
  };
  function xb(a2, b2, c2) {
    var d2, e2, f2, g2, h2 = a2.style;
    return c2 = c2 || wb(a2), c2 && (g2 = c2.getPropertyValue(b2) || c2[b2]), c2 && ("" !== g2 || n.contains(a2.ownerDocument, a2) || (g2 = n.style(a2, b2)), vb.test(g2) && ub.test(b2) && (d2 = h2.width, e2 = h2.minWidth, f2 = h2.maxWidth, h2.minWidth = h2.maxWidth = h2.width = g2, g2 = c2.width, h2.width = d2, h2.minWidth = e2, h2.maxWidth = f2)), void 0 !== g2 ? g2 + "" : g2;
  }
  function yb(a2, b2) {
    return { get: function() {
      return a2() ? void delete this.get : (this.get = b2).apply(this, arguments);
    } };
  }
  !function() {
    var b2, c2, d2 = l.documentElement, e2 = l.createElement("div"), f2 = l.createElement("div");
    if (f2.style) {
      let g3 = function() {
        f2.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f2.innerHTML = "", d2.appendChild(e2);
        var g4 = a.getComputedStyle(f2, null);
        b2 = "1%" !== g4.top, c2 = "4px" === g4.width, d2.removeChild(e2);
      };
      var g2 = g3;
      f2.style.backgroundClip = "content-box", f2.cloneNode(true).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f2.style.backgroundClip, e2.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e2.appendChild(f2);
      a.getComputedStyle && n.extend(k, { pixelPosition: function() {
        return g3(), b2;
      }, boxSizingReliable: function() {
        return null == c2 && g3(), c2;
      }, reliableMarginRight: function() {
        var b3, c3 = f2.appendChild(l.createElement("div"));
        return c3.style.cssText = f2.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c3.style.marginRight = c3.style.width = "0", f2.style.width = "1px", d2.appendChild(e2), b3 = !parseFloat(a.getComputedStyle(c3, null).marginRight), d2.removeChild(e2), f2.removeChild(c3), b3;
      } });
    }
  }(), n.swap = function(a2, b2, c2, d2) {
    var e2, f2, g2 = {};
    for (f2 in b2) g2[f2] = a2.style[f2], a2.style[f2] = b2[f2];
    e2 = c2.apply(a2, d2 || []);
    for (f2 in b2) a2.style[f2] = g2[f2];
    return e2;
  };
  var zb = /^(none|table(?!-c[ea]).+)/, Ab = new RegExp("^(" + Q + ")(.*)$", "i"), Bb = new RegExp("^([+-])=(" + Q + ")", "i"), Cb = { position: "absolute", visibility: "hidden", display: "block" }, Db = { letterSpacing: "0", fontWeight: "400" }, Eb = ["Webkit", "O", "Moz", "ms"];
  function Fb(a2, b2) {
    if (b2 in a2) return b2;
    var c2 = b2[0].toUpperCase() + b2.slice(1), d2 = b2, e2 = Eb.length;
    while (e2--) if (b2 = Eb[e2] + c2, b2 in a2) return b2;
    return d2;
  }
  function Gb(a2, b2, c2) {
    var d2 = Ab.exec(b2);
    return d2 ? Math.max(0, d2[1] - (c2 || 0)) + (d2[2] || "px") : b2;
  }
  function Hb(a2, b2, c2, d2, e2) {
    for (var f2 = c2 === (d2 ? "border" : "content") ? 4 : "width" === b2 ? 1 : 0, g2 = 0; 4 > f2; f2 += 2) "margin" === c2 && (g2 += n.css(a2, c2 + R[f2], true, e2)), d2 ? ("content" === c2 && (g2 -= n.css(a2, "padding" + R[f2], true, e2)), "margin" !== c2 && (g2 -= n.css(a2, "border" + R[f2] + "Width", true, e2))) : (g2 += n.css(a2, "padding" + R[f2], true, e2), "padding" !== c2 && (g2 += n.css(a2, "border" + R[f2] + "Width", true, e2)));
    return g2;
  }
  function Ib(a2, b2, c2) {
    var d2 = true, e2 = "width" === b2 ? a2.offsetWidth : a2.offsetHeight, f2 = wb(a2), g2 = "border-box" === n.css(a2, "boxSizing", false, f2);
    if (0 >= e2 || null == e2) {
      if (e2 = xb(a2, b2, f2), (0 > e2 || null == e2) && (e2 = a2.style[b2]), vb.test(e2)) return e2;
      d2 = g2 && (k.boxSizingReliable() || e2 === a2.style[b2]), e2 = parseFloat(e2) || 0;
    }
    return e2 + Hb(a2, b2, c2 || (g2 ? "border" : "content"), d2, f2) + "px";
  }
  function Jb(a2, b2) {
    for (var c2, d2, e2, f2 = [], g2 = 0, h2 = a2.length; h2 > g2; g2++) d2 = a2[g2], d2.style && (f2[g2] = L.get(d2, "olddisplay"), c2 = d2.style.display, b2 ? (f2[g2] || "none" !== c2 || (d2.style.display = ""), "" === d2.style.display && S(d2) && (f2[g2] = L.access(d2, "olddisplay", tb(d2.nodeName)))) : (e2 = S(d2), "none" === c2 && e2 || L.set(d2, "olddisplay", e2 ? c2 : n.css(d2, "display"))));
    for (g2 = 0; h2 > g2; g2++) d2 = a2[g2], d2.style && (b2 && "none" !== d2.style.display && "" !== d2.style.display || (d2.style.display = b2 ? f2[g2] || "" : "none"));
    return a2;
  }
  n.extend({ cssHooks: { opacity: { get: function(a2, b2) {
    if (b2) {
      var c2 = xb(a2, "opacity");
      return "" === c2 ? "1" : c2;
    }
  } } }, cssNumber: { columnCount: true, fillOpacity: true, flexGrow: true, flexShrink: true, fontWeight: true, lineHeight: true, opacity: true, order: true, orphans: true, widows: true, zIndex: true, zoom: true }, cssProps: { "float": "cssFloat" }, style: function(a2, b2, c2, d2) {
    if (a2 && 3 !== a2.nodeType && 8 !== a2.nodeType && a2.style) {
      var e2, f2, g2, h2 = n.camelCase(b2), i2 = a2.style;
      return b2 = n.cssProps[h2] || (n.cssProps[h2] = Fb(i2, h2)), g2 = n.cssHooks[b2] || n.cssHooks[h2], void 0 === c2 ? g2 && "get" in g2 && void 0 !== (e2 = g2.get(a2, false, d2)) ? e2 : i2[b2] : (f2 = typeof c2, "string" === f2 && (e2 = Bb.exec(c2)) && (c2 = (e2[1] + 1) * e2[2] + parseFloat(n.css(a2, b2)), f2 = "number"), null != c2 && c2 === c2 && ("number" !== f2 || n.cssNumber[h2] || (c2 += "px"), k.clearCloneStyle || "" !== c2 || 0 !== b2.indexOf("background") || (i2[b2] = "inherit"), g2 && "set" in g2 && void 0 === (c2 = g2.set(a2, c2, d2)) || (i2[b2] = c2)), void 0);
    }
  }, css: function(a2, b2, c2, d2) {
    var e2, f2, g2, h2 = n.camelCase(b2);
    return b2 = n.cssProps[h2] || (n.cssProps[h2] = Fb(a2.style, h2)), g2 = n.cssHooks[b2] || n.cssHooks[h2], g2 && "get" in g2 && (e2 = g2.get(a2, true, c2)), void 0 === e2 && (e2 = xb(a2, b2, d2)), "normal" === e2 && b2 in Db && (e2 = Db[b2]), "" === c2 || c2 ? (f2 = parseFloat(e2), c2 === true || n.isNumeric(f2) ? f2 || 0 : e2) : e2;
  } }), n.each(["height", "width"], function(a2, b2) {
    n.cssHooks[b2] = { get: function(a3, c2, d2) {
      return c2 ? zb.test(n.css(a3, "display")) && 0 === a3.offsetWidth ? n.swap(a3, Cb, function() {
        return Ib(a3, b2, d2);
      }) : Ib(a3, b2, d2) : void 0;
    }, set: function(a3, c2, d2) {
      var e2 = d2 && wb(a3);
      return Gb(a3, c2, d2 ? Hb(a3, b2, d2, "border-box" === n.css(a3, "boxSizing", false, e2), e2) : 0);
    } };
  }), n.cssHooks.marginRight = yb(k.reliableMarginRight, function(a2, b2) {
    return b2 ? n.swap(a2, { display: "inline-block" }, xb, [a2, "marginRight"]) : void 0;
  }), n.each({ margin: "", padding: "", border: "Width" }, function(a2, b2) {
    n.cssHooks[a2 + b2] = { expand: function(c2) {
      for (var d2 = 0, e2 = {}, f2 = "string" == typeof c2 ? c2.split(" ") : [c2]; 4 > d2; d2++) e2[a2 + R[d2] + b2] = f2[d2] || f2[d2 - 2] || f2[0];
      return e2;
    } }, ub.test(a2) || (n.cssHooks[a2 + b2].set = Gb);
  }), n.fn.extend({ css: function(a2, b2) {
    return J(this, function(a3, b3, c2) {
      var d2, e2, f2 = {}, g2 = 0;
      if (n.isArray(b3)) {
        for (d2 = wb(a3), e2 = b3.length; e2 > g2; g2++) f2[b3[g2]] = n.css(a3, b3[g2], false, d2);
        return f2;
      }
      return void 0 !== c2 ? n.style(a3, b3, c2) : n.css(a3, b3);
    }, a2, b2, arguments.length > 1);
  }, show: function() {
    return Jb(this, true);
  }, hide: function() {
    return Jb(this);
  }, toggle: function(a2) {
    return "boolean" == typeof a2 ? a2 ? this.show() : this.hide() : this.each(function() {
      S(this) ? n(this).show() : n(this).hide();
    });
  } });
  function Kb(a2, b2, c2, d2, e2) {
    return new Kb.prototype.init(a2, b2, c2, d2, e2);
  }
  n.Tween = Kb, Kb.prototype = { constructor: Kb, init: function(a2, b2, c2, d2, e2, f2) {
    this.elem = a2, this.prop = c2, this.easing = e2 || "swing", this.options = b2, this.start = this.now = this.cur(), this.end = d2, this.unit = f2 || (n.cssNumber[c2] ? "" : "px");
  }, cur: function() {
    var a2 = Kb.propHooks[this.prop];
    return a2 && a2.get ? a2.get(this) : Kb.propHooks._default.get(this);
  }, run: function(a2) {
    var b2, c2 = Kb.propHooks[this.prop];
    return this.pos = b2 = this.options.duration ? n.easing[this.easing](a2, this.options.duration * a2, 0, 1, this.options.duration) : a2, this.now = (this.end - this.start) * b2 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c2 && c2.set ? c2.set(this) : Kb.propHooks._default.set(this), this;
  } }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = { _default: { get: function(a2) {
    var b2;
    return null == a2.elem[a2.prop] || a2.elem.style && null != a2.elem.style[a2.prop] ? (b2 = n.css(a2.elem, a2.prop, ""), b2 && "auto" !== b2 ? b2 : 0) : a2.elem[a2.prop];
  }, set: function(a2) {
    n.fx.step[a2.prop] ? n.fx.step[a2.prop](a2) : a2.elem.style && (null != a2.elem.style[n.cssProps[a2.prop]] || n.cssHooks[a2.prop]) ? n.style(a2.elem, a2.prop, a2.now + a2.unit) : a2.elem[a2.prop] = a2.now;
  } } }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = { set: function(a2) {
    a2.elem.nodeType && a2.elem.parentNode && (a2.elem[a2.prop] = a2.now);
  } }, n.easing = { linear: function(a2) {
    return a2;
  }, swing: function(a2) {
    return 0.5 - Math.cos(a2 * Math.PI) / 2;
  } }, n.fx = Kb.prototype.init, n.fx.step = {};
  var Lb, Mb, Nb = /^(?:toggle|show|hide)$/, Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), Pb = /queueHooks$/, Qb = [Vb], Rb = { "*": [function(a2, b2) {
    var c2 = this.createTween(a2, b2), d2 = c2.cur(), e2 = Ob.exec(b2), f2 = e2 && e2[3] || (n.cssNumber[a2] ? "" : "px"), g2 = (n.cssNumber[a2] || "px" !== f2 && +d2) && Ob.exec(n.css(c2.elem, a2)), h2 = 1, i2 = 20;
    if (g2 && g2[3] !== f2) {
      f2 = f2 || g2[3], e2 = e2 || [], g2 = +d2 || 1;
      do
        h2 = h2 || ".5", g2 /= h2, n.style(c2.elem, a2, g2 + f2);
      while (h2 !== (h2 = c2.cur() / d2) && 1 !== h2 && --i2);
    }
    return e2 && (g2 = c2.start = +g2 || +d2 || 0, c2.unit = f2, c2.end = e2[1] ? g2 + (e2[1] + 1) * e2[2] : +e2[2]), c2;
  }] };
  function Sb() {
    return setTimeout(function() {
      Lb = void 0;
    }), Lb = n.now();
  }
  function Tb(a2, b2) {
    var c2, d2 = 0, e2 = { height: a2 };
    for (b2 = b2 ? 1 : 0; 4 > d2; d2 += 2 - b2) c2 = R[d2], e2["margin" + c2] = e2["padding" + c2] = a2;
    return b2 && (e2.opacity = e2.width = a2), e2;
  }
  function Ub(a2, b2, c2) {
    for (var d2, e2 = (Rb[b2] || []).concat(Rb["*"]), f2 = 0, g2 = e2.length; g2 > f2; f2++) if (d2 = e2[f2].call(c2, b2, a2)) return d2;
  }
  function Vb(a2, b2, c2) {
    var d2, e2, f2, g2, h2, i2, j2, k2, l2 = this, m2 = {}, o2 = a2.style, p2 = a2.nodeType && S(a2), q2 = L.get(a2, "fxshow");
    c2.queue || (h2 = n._queueHooks(a2, "fx"), null == h2.unqueued && (h2.unqueued = 0, i2 = h2.empty.fire, h2.empty.fire = function() {
      h2.unqueued || i2();
    }), h2.unqueued++, l2.always(function() {
      l2.always(function() {
        h2.unqueued--, n.queue(a2, "fx").length || h2.empty.fire();
      });
    })), 1 === a2.nodeType && ("height" in b2 || "width" in b2) && (c2.overflow = [o2.overflow, o2.overflowX, o2.overflowY], j2 = n.css(a2, "display"), k2 = "none" === j2 ? L.get(a2, "olddisplay") || tb(a2.nodeName) : j2, "inline" === k2 && "none" === n.css(a2, "float") && (o2.display = "inline-block")), c2.overflow && (o2.overflow = "hidden", l2.always(function() {
      o2.overflow = c2.overflow[0], o2.overflowX = c2.overflow[1], o2.overflowY = c2.overflow[2];
    }));
    for (d2 in b2) if (e2 = b2[d2], Nb.exec(e2)) {
      if (delete b2[d2], f2 = f2 || "toggle" === e2, e2 === (p2 ? "hide" : "show")) {
        if ("show" !== e2 || !q2 || void 0 === q2[d2]) continue;
        p2 = true;
      }
      m2[d2] = q2 && q2[d2] || n.style(a2, d2);
    } else j2 = void 0;
    if (n.isEmptyObject(m2)) "inline" === ("none" === j2 ? tb(a2.nodeName) : j2) && (o2.display = j2);
    else {
      q2 ? "hidden" in q2 && (p2 = q2.hidden) : q2 = L.access(a2, "fxshow", {}), f2 && (q2.hidden = !p2), p2 ? n(a2).show() : l2.done(function() {
        n(a2).hide();
      }), l2.done(function() {
        var b3;
        L.remove(a2, "fxshow");
        for (b3 in m2) n.style(a2, b3, m2[b3]);
      });
      for (d2 in m2) g2 = Ub(p2 ? q2[d2] : 0, d2, l2), d2 in q2 || (q2[d2] = g2.start, p2 && (g2.end = g2.start, g2.start = "width" === d2 || "height" === d2 ? 1 : 0));
    }
  }
  function Wb(a2, b2) {
    var c2, d2, e2, f2, g2;
    for (c2 in a2) if (d2 = n.camelCase(c2), e2 = b2[d2], f2 = a2[c2], n.isArray(f2) && (e2 = f2[1], f2 = a2[c2] = f2[0]), c2 !== d2 && (a2[d2] = f2, delete a2[c2]), g2 = n.cssHooks[d2], g2 && "expand" in g2) {
      f2 = g2.expand(f2), delete a2[d2];
      for (c2 in f2) c2 in a2 || (a2[c2] = f2[c2], b2[c2] = e2);
    } else b2[d2] = e2;
  }
  function Xb(a2, b2, c2) {
    var d2, e2, f2 = 0, g2 = Qb.length, h2 = n.Deferred().always(function() {
      delete i2.elem;
    }), i2 = function() {
      if (e2) return false;
      for (var b3 = Lb || Sb(), c3 = Math.max(0, j2.startTime + j2.duration - b3), d3 = c3 / j2.duration || 0, f3 = 1 - d3, g3 = 0, i3 = j2.tweens.length; i3 > g3; g3++) j2.tweens[g3].run(f3);
      return h2.notifyWith(a2, [j2, f3, c3]), 1 > f3 && i3 ? c3 : (h2.resolveWith(a2, [j2]), false);
    }, j2 = h2.promise({ elem: a2, props: n.extend({}, b2), opts: n.extend(true, { specialEasing: {} }, c2), originalProperties: b2, originalOptions: c2, startTime: Lb || Sb(), duration: c2.duration, tweens: [], createTween: function(b3, c3) {
      var d3 = n.Tween(a2, j2.opts, b3, c3, j2.opts.specialEasing[b3] || j2.opts.easing);
      return j2.tweens.push(d3), d3;
    }, stop: function(b3) {
      var c3 = 0, d3 = b3 ? j2.tweens.length : 0;
      if (e2) return this;
      for (e2 = true; d3 > c3; c3++) j2.tweens[c3].run(1);
      return b3 ? h2.resolveWith(a2, [j2, b3]) : h2.rejectWith(a2, [j2, b3]), this;
    } }), k2 = j2.props;
    for (Wb(k2, j2.opts.specialEasing); g2 > f2; f2++) if (d2 = Qb[f2].call(j2, a2, k2, j2.opts)) return d2;
    return n.map(k2, Ub, j2), n.isFunction(j2.opts.start) && j2.opts.start.call(a2, j2), n.fx.timer(n.extend(i2, { elem: a2, anim: j2, queue: j2.opts.queue })), j2.progress(j2.opts.progress).done(j2.opts.done, j2.opts.complete).fail(j2.opts.fail).always(j2.opts.always);
  }
  n.Animation = n.extend(Xb, { tweener: function(a2, b2) {
    n.isFunction(a2) ? (b2 = a2, a2 = ["*"]) : a2 = a2.split(" ");
    for (var c2, d2 = 0, e2 = a2.length; e2 > d2; d2++) c2 = a2[d2], Rb[c2] = Rb[c2] || [], Rb[c2].unshift(b2);
  }, prefilter: function(a2, b2) {
    b2 ? Qb.unshift(a2) : Qb.push(a2);
  } }), n.speed = function(a2, b2, c2) {
    var d2 = a2 && "object" == typeof a2 ? n.extend({}, a2) : { complete: c2 || !c2 && b2 || n.isFunction(a2) && a2, duration: a2, easing: c2 && b2 || b2 && !n.isFunction(b2) && b2 };
    return d2.duration = n.fx.off ? 0 : "number" == typeof d2.duration ? d2.duration : d2.duration in n.fx.speeds ? n.fx.speeds[d2.duration] : n.fx.speeds._default, (null == d2.queue || d2.queue === true) && (d2.queue = "fx"), d2.old = d2.complete, d2.complete = function() {
      n.isFunction(d2.old) && d2.old.call(this), d2.queue && n.dequeue(this, d2.queue);
    }, d2;
  }, n.fn.extend({ fadeTo: function(a2, b2, c2, d2) {
    return this.filter(S).css("opacity", 0).show().end().animate({ opacity: b2 }, a2, c2, d2);
  }, animate: function(a2, b2, c2, d2) {
    var e2 = n.isEmptyObject(a2), f2 = n.speed(b2, c2, d2), g2 = function() {
      var b3 = Xb(this, n.extend({}, a2), f2);
      (e2 || L.get(this, "finish")) && b3.stop(true);
    };
    return g2.finish = g2, e2 || f2.queue === false ? this.each(g2) : this.queue(f2.queue, g2);
  }, stop: function(a2, b2, c2) {
    var d2 = function(a3) {
      var b3 = a3.stop;
      delete a3.stop, b3(c2);
    };
    return "string" != typeof a2 && (c2 = b2, b2 = a2, a2 = void 0), b2 && a2 !== false && this.queue(a2 || "fx", []), this.each(function() {
      var b3 = true, e2 = null != a2 && a2 + "queueHooks", f2 = n.timers, g2 = L.get(this);
      if (e2) g2[e2] && g2[e2].stop && d2(g2[e2]);
      else for (e2 in g2) g2[e2] && g2[e2].stop && Pb.test(e2) && d2(g2[e2]);
      for (e2 = f2.length; e2--; ) f2[e2].elem !== this || null != a2 && f2[e2].queue !== a2 || (f2[e2].anim.stop(c2), b3 = false, f2.splice(e2, 1));
      (b3 || !c2) && n.dequeue(this, a2);
    });
  }, finish: function(a2) {
    return a2 !== false && (a2 = a2 || "fx"), this.each(function() {
      var b2, c2 = L.get(this), d2 = c2[a2 + "queue"], e2 = c2[a2 + "queueHooks"], f2 = n.timers, g2 = d2 ? d2.length : 0;
      for (c2.finish = true, n.queue(this, a2, []), e2 && e2.stop && e2.stop.call(this, true), b2 = f2.length; b2--; ) f2[b2].elem === this && f2[b2].queue === a2 && (f2[b2].anim.stop(true), f2.splice(b2, 1));
      for (b2 = 0; g2 > b2; b2++) d2[b2] && d2[b2].finish && d2[b2].finish.call(this);
      delete c2.finish;
    });
  } }), n.each(["toggle", "show", "hide"], function(a2, b2) {
    var c2 = n.fn[b2];
    n.fn[b2] = function(a3, d2, e2) {
      return null == a3 || "boolean" == typeof a3 ? c2.apply(this, arguments) : this.animate(Tb(b2, true), a3, d2, e2);
    };
  }), n.each({ slideDown: Tb("show"), slideUp: Tb("hide"), slideToggle: Tb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a2, b2) {
    n.fn[a2] = function(a3, c2, d2) {
      return this.animate(b2, a3, c2, d2);
    };
  }), n.timers = [], n.fx.tick = function() {
    var a2, b2 = 0, c2 = n.timers;
    for (Lb = n.now(); b2 < c2.length; b2++) a2 = c2[b2], a2() || c2[b2] !== a2 || c2.splice(b2--, 1);
    c2.length || n.fx.stop(), Lb = void 0;
  }, n.fx.timer = function(a2) {
    n.timers.push(a2), a2() ? n.fx.start() : n.timers.pop();
  }, n.fx.interval = 13, n.fx.start = function() {
    Mb || (Mb = setInterval(n.fx.tick, n.fx.interval));
  }, n.fx.stop = function() {
    clearInterval(Mb), Mb = null;
  }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function(a2, b2) {
    return a2 = n.fx ? n.fx.speeds[a2] || a2 : a2, b2 = b2 || "fx", this.queue(b2, function(b3, c2) {
      var d2 = setTimeout(b3, a2);
      c2.stop = function() {
        clearTimeout(d2);
      };
    });
  }, function() {
    var a2 = l.createElement("input"), b2 = l.createElement("select"), c2 = b2.appendChild(l.createElement("option"));
    a2.type = "checkbox", k.checkOn = "" !== a2.value, k.optSelected = c2.selected, b2.disabled = true, k.optDisabled = !c2.disabled, a2 = l.createElement("input"), a2.value = "t", a2.type = "radio", k.radioValue = "t" === a2.value;
  }();
  var Yb, Zb, $b = n.expr.attrHandle;
  n.fn.extend({ attr: function(a2, b2) {
    return J(this, n.attr, a2, b2, arguments.length > 1);
  }, removeAttr: function(a2) {
    return this.each(function() {
      n.removeAttr(this, a2);
    });
  } }), n.extend({ attr: function(a2, b2, c2) {
    var d2, e2, f2 = a2.nodeType;
    if (a2 && 3 !== f2 && 8 !== f2 && 2 !== f2) return typeof a2.getAttribute === U ? n.prop(a2, b2, c2) : (1 === f2 && n.isXMLDoc(a2) || (b2 = b2.toLowerCase(), d2 = n.attrHooks[b2] || (n.expr.match.bool.test(b2) ? Zb : Yb)), void 0 === c2 ? d2 && "get" in d2 && null !== (e2 = d2.get(a2, b2)) ? e2 : (e2 = n.find.attr(a2, b2), null == e2 ? void 0 : e2) : null !== c2 ? d2 && "set" in d2 && void 0 !== (e2 = d2.set(a2, c2, b2)) ? e2 : (a2.setAttribute(b2, c2 + ""), c2) : void n.removeAttr(a2, b2));
  }, removeAttr: function(a2, b2) {
    var c2, d2, e2 = 0, f2 = b2 && b2.match(E);
    if (f2 && 1 === a2.nodeType) while (c2 = f2[e2++]) d2 = n.propFix[c2] || c2, n.expr.match.bool.test(c2) && (a2[d2] = false), a2.removeAttribute(c2);
  }, attrHooks: { type: { set: function(a2, b2) {
    if (!k.radioValue && "radio" === b2 && n.nodeName(a2, "input")) {
      var c2 = a2.value;
      return a2.setAttribute("type", b2), c2 && (a2.value = c2), b2;
    }
  } } } }), Zb = { set: function(a2, b2, c2) {
    return b2 === false ? n.removeAttr(a2, c2) : a2.setAttribute(c2, c2), c2;
  } }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a2, b2) {
    var c2 = $b[b2] || n.find.attr;
    $b[b2] = function(a3, b3, d2) {
      var e2, f2;
      return d2 || (f2 = $b[b3], $b[b3] = e2, e2 = null != c2(a3, b3, d2) ? b3.toLowerCase() : null, $b[b3] = f2), e2;
    };
  });
  var _b = /^(?:input|select|textarea|button)$/i;
  n.fn.extend({ prop: function(a2, b2) {
    return J(this, n.prop, a2, b2, arguments.length > 1);
  }, removeProp: function(a2) {
    return this.each(function() {
      delete this[n.propFix[a2] || a2];
    });
  } }), n.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function(a2, b2, c2) {
    var d2, e2, f2, g2 = a2.nodeType;
    if (a2 && 3 !== g2 && 8 !== g2 && 2 !== g2) return f2 = 1 !== g2 || !n.isXMLDoc(a2), f2 && (b2 = n.propFix[b2] || b2, e2 = n.propHooks[b2]), void 0 !== c2 ? e2 && "set" in e2 && void 0 !== (d2 = e2.set(a2, c2, b2)) ? d2 : a2[b2] = c2 : e2 && "get" in e2 && null !== (d2 = e2.get(a2, b2)) ? d2 : a2[b2];
  }, propHooks: { tabIndex: { get: function(a2) {
    return a2.hasAttribute("tabindex") || _b.test(a2.nodeName) || a2.href ? a2.tabIndex : -1;
  } } } }), k.optSelected || (n.propHooks.selected = { get: function(a2) {
    var b2 = a2.parentNode;
    return b2 && b2.parentNode && b2.parentNode.selectedIndex, null;
  } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    n.propFix[this.toLowerCase()] = this;
  });
  var ac = /[\t\r\n\f]/g;
  n.fn.extend({ addClass: function(a2) {
    var b2, c2, d2, e2, f2, g2, h2 = "string" == typeof a2 && a2, i2 = 0, j2 = this.length;
    if (n.isFunction(a2)) return this.each(function(b3) {
      n(this).addClass(a2.call(this, b3, this.className));
    });
    if (h2) {
      for (b2 = (a2 || "").match(E) || []; j2 > i2; i2++) if (c2 = this[i2], d2 = 1 === c2.nodeType && (c2.className ? (" " + c2.className + " ").replace(ac, " ") : " ")) {
        f2 = 0;
        while (e2 = b2[f2++]) d2.indexOf(" " + e2 + " ") < 0 && (d2 += e2 + " ");
        g2 = n.trim(d2), c2.className !== g2 && (c2.className = g2);
      }
    }
    return this;
  }, removeClass: function(a2) {
    var b2, c2, d2, e2, f2, g2, h2 = 0 === arguments.length || "string" == typeof a2 && a2, i2 = 0, j2 = this.length;
    if (n.isFunction(a2)) return this.each(function(b3) {
      n(this).removeClass(a2.call(this, b3, this.className));
    });
    if (h2) {
      for (b2 = (a2 || "").match(E) || []; j2 > i2; i2++) if (c2 = this[i2], d2 = 1 === c2.nodeType && (c2.className ? (" " + c2.className + " ").replace(ac, " ") : "")) {
        f2 = 0;
        while (e2 = b2[f2++]) while (d2.indexOf(" " + e2 + " ") >= 0) d2 = d2.replace(" " + e2 + " ", " ");
        g2 = a2 ? n.trim(d2) : "", c2.className !== g2 && (c2.className = g2);
      }
    }
    return this;
  }, toggleClass: function(a2, b2) {
    var c2 = typeof a2;
    return "boolean" == typeof b2 && "string" === c2 ? b2 ? this.addClass(a2) : this.removeClass(a2) : this.each(n.isFunction(a2) ? function(c3) {
      n(this).toggleClass(a2.call(this, c3, this.className, b2), b2);
    } : function() {
      if ("string" === c2) {
        var b3, d2 = 0, e2 = n(this), f2 = a2.match(E) || [];
        while (b3 = f2[d2++]) e2.hasClass(b3) ? e2.removeClass(b3) : e2.addClass(b3);
      } else (c2 === U || "boolean" === c2) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a2 === false ? "" : L.get(this, "__className__") || "");
    });
  }, hasClass: function(a2) {
    for (var b2 = " " + a2 + " ", c2 = 0, d2 = this.length; d2 > c2; c2++) if (1 === this[c2].nodeType && (" " + this[c2].className + " ").replace(ac, " ").indexOf(b2) >= 0) return true;
    return false;
  } });
  var bc = /\r/g;
  n.fn.extend({ val: function(a2) {
    var b2, c2, d2, e2 = this[0];
    {
      if (arguments.length) return d2 = n.isFunction(a2), this.each(function(c3) {
        var e3;
        1 === this.nodeType && (e3 = d2 ? a2.call(this, c3, n(this).val()) : a2, null == e3 ? e3 = "" : "number" == typeof e3 ? e3 += "" : n.isArray(e3) && (e3 = n.map(e3, function(a3) {
          return null == a3 ? "" : a3 + "";
        })), b2 = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b2 && "set" in b2 && void 0 !== b2.set(this, e3, "value") || (this.value = e3));
      });
      if (e2) return b2 = n.valHooks[e2.type] || n.valHooks[e2.nodeName.toLowerCase()], b2 && "get" in b2 && void 0 !== (c2 = b2.get(e2, "value")) ? c2 : (c2 = e2.value, "string" == typeof c2 ? c2.replace(bc, "") : null == c2 ? "" : c2);
    }
  } }), n.extend({ valHooks: { option: { get: function(a2) {
    var b2 = n.find.attr(a2, "value");
    return null != b2 ? b2 : n.trim(n.text(a2));
  } }, select: { get: function(a2) {
    for (var b2, c2, d2 = a2.options, e2 = a2.selectedIndex, f2 = "select-one" === a2.type || 0 > e2, g2 = f2 ? null : [], h2 = f2 ? e2 + 1 : d2.length, i2 = 0 > e2 ? h2 : f2 ? e2 : 0; h2 > i2; i2++) if (c2 = d2[i2], !(!c2.selected && i2 !== e2 || (k.optDisabled ? c2.disabled : null !== c2.getAttribute("disabled")) || c2.parentNode.disabled && n.nodeName(c2.parentNode, "optgroup"))) {
      if (b2 = n(c2).val(), f2) return b2;
      g2.push(b2);
    }
    return g2;
  }, set: function(a2, b2) {
    var c2, d2, e2 = a2.options, f2 = n.makeArray(b2), g2 = e2.length;
    while (g2--) d2 = e2[g2], (d2.selected = n.inArray(d2.value, f2) >= 0) && (c2 = true);
    return c2 || (a2.selectedIndex = -1), f2;
  } } } }), n.each(["radio", "checkbox"], function() {
    n.valHooks[this] = { set: function(a2, b2) {
      return n.isArray(b2) ? a2.checked = n.inArray(n(a2).val(), b2) >= 0 : void 0;
    } }, k.checkOn || (n.valHooks[this].get = function(a2) {
      return null === a2.getAttribute("value") ? "on" : a2.value;
    });
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a2, b2) {
    n.fn[b2] = function(a3, c2) {
      return arguments.length > 0 ? this.on(b2, null, a3, c2) : this.trigger(b2);
    };
  }), n.fn.extend({ hover: function(a2, b2) {
    return this.mouseenter(a2).mouseleave(b2 || a2);
  }, bind: function(a2, b2, c2) {
    return this.on(a2, null, b2, c2);
  }, unbind: function(a2, b2) {
    return this.off(a2, null, b2);
  }, delegate: function(a2, b2, c2, d2) {
    return this.on(b2, a2, c2, d2);
  }, undelegate: function(a2, b2, c2) {
    return 1 === arguments.length ? this.off(a2, "**") : this.off(b2, a2 || "**", c2);
  } });
  var cc = n.now(), dc = /\?/;
  n.parseJSON = function(a2) {
    return JSON.parse(a2 + "");
  }, n.parseXML = function(a2) {
    var b2, c2;
    if (!a2 || "string" != typeof a2) return null;
    try {
      c2 = new DOMParser(), b2 = c2.parseFromString(a2, "text/xml");
    } catch (d2) {
      b2 = void 0;
    }
    return (!b2 || b2.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a2), b2;
  };
  var ec = /#.*$/, fc = /([?&])_=[^&]*/, gc = /^(.*?):[ \t]*([^\r\n]*)$/gm, hc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ic = /^(?:GET|HEAD)$/, jc = /^\/\//, kc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, lc = {}, mc = {}, nc = "*/".concat("*"), oc = a.location.href, pc = kc.exec(oc.toLowerCase()) || [];
  function qc(a2) {
    return function(b2, c2) {
      "string" != typeof b2 && (c2 = b2, b2 = "*");
      var d2, e2 = 0, f2 = b2.toLowerCase().match(E) || [];
      if (n.isFunction(c2)) while (d2 = f2[e2++]) "+" === d2[0] ? (d2 = d2.slice(1) || "*", (a2[d2] = a2[d2] || []).unshift(c2)) : (a2[d2] = a2[d2] || []).push(c2);
    };
  }
  function rc(a2, b2, c2, d2) {
    var e2 = {}, f2 = a2 === mc;
    function g2(h2) {
      var i2;
      return e2[h2] = true, n.each(a2[h2] || [], function(a3, h3) {
        var j2 = h3(b2, c2, d2);
        return "string" != typeof j2 || f2 || e2[j2] ? f2 ? !(i2 = j2) : void 0 : (b2.dataTypes.unshift(j2), g2(j2), false);
      }), i2;
    }
    return g2(b2.dataTypes[0]) || !e2["*"] && g2("*");
  }
  function sc(a2, b2) {
    var c2, d2, e2 = n.ajaxSettings.flatOptions || {};
    for (c2 in b2) void 0 !== b2[c2] && ((e2[c2] ? a2 : d2 || (d2 = {}))[c2] = b2[c2]);
    return d2 && n.extend(true, a2, d2), a2;
  }
  function tc(a2, b2, c2) {
    var d2, e2, f2, g2, h2 = a2.contents, i2 = a2.dataTypes;
    while ("*" === i2[0]) i2.shift(), void 0 === d2 && (d2 = a2.mimeType || b2.getResponseHeader("Content-Type"));
    if (d2) {
      for (e2 in h2) if (h2[e2] && h2[e2].test(d2)) {
        i2.unshift(e2);
        break;
      }
    }
    if (i2[0] in c2) f2 = i2[0];
    else {
      for (e2 in c2) {
        if (!i2[0] || a2.converters[e2 + " " + i2[0]]) {
          f2 = e2;
          break;
        }
        g2 || (g2 = e2);
      }
      f2 = f2 || g2;
    }
    return f2 ? (f2 !== i2[0] && i2.unshift(f2), c2[f2]) : void 0;
  }
  function uc(a2, b2, c2, d2) {
    var e2, f2, g2, h2, i2, j2 = {}, k2 = a2.dataTypes.slice();
    if (k2[1]) for (g2 in a2.converters) j2[g2.toLowerCase()] = a2.converters[g2];
    f2 = k2.shift();
    while (f2) if (a2.responseFields[f2] && (c2[a2.responseFields[f2]] = b2), !i2 && d2 && a2.dataFilter && (b2 = a2.dataFilter(b2, a2.dataType)), i2 = f2, f2 = k2.shift()) {
      if ("*" === f2) f2 = i2;
      else if ("*" !== i2 && i2 !== f2) {
        if (g2 = j2[i2 + " " + f2] || j2["* " + f2], !g2) {
          for (e2 in j2) if (h2 = e2.split(" "), h2[1] === f2 && (g2 = j2[i2 + " " + h2[0]] || j2["* " + h2[0]])) {
            g2 === true ? g2 = j2[e2] : j2[e2] !== true && (f2 = h2[0], k2.unshift(h2[1]));
            break;
          }
        }
        if (g2 !== true) if (g2 && a2["throws"]) b2 = g2(b2);
        else try {
          b2 = g2(b2);
        } catch (l2) {
          return { state: "parsererror", error: g2 ? l2 : "No conversion from " + i2 + " to " + f2 };
        }
      }
    }
    return { state: "success", data: b2 };
  }
  n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: oc, type: "GET", isLocal: hc.test(pc[1]), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": nc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": true, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function(a2, b2) {
    return b2 ? sc(sc(a2, n.ajaxSettings), b2) : sc(n.ajaxSettings, a2);
  }, ajaxPrefilter: qc(lc), ajaxTransport: qc(mc), ajax: function(a2, b2) {
    "object" == typeof a2 && (b2 = a2, a2 = void 0), b2 = b2 || {};
    var c2, d2, e2, f2, g2, h2, i2, j2, k2 = n.ajaxSetup({}, b2), l2 = k2.context || k2, m2 = k2.context && (l2.nodeType || l2.jquery) ? n(l2) : n.event, o2 = n.Deferred(), p2 = n.Callbacks("once memory"), q2 = k2.statusCode || {}, r2 = {}, s2 = {}, t2 = 0, u2 = "canceled", v2 = { readyState: 0, getResponseHeader: function(a3) {
      var b3;
      if (2 === t2) {
        if (!f2) {
          f2 = {};
          while (b3 = gc.exec(e2)) f2[b3[1].toLowerCase()] = b3[2];
        }
        b3 = f2[a3.toLowerCase()];
      }
      return null == b3 ? null : b3;
    }, getAllResponseHeaders: function() {
      return 2 === t2 ? e2 : null;
    }, setRequestHeader: function(a3, b3) {
      var c3 = a3.toLowerCase();
      return t2 || (a3 = s2[c3] = s2[c3] || a3, r2[a3] = b3), this;
    }, overrideMimeType: function(a3) {
      return t2 || (k2.mimeType = a3), this;
    }, statusCode: function(a3) {
      var b3;
      if (a3) if (2 > t2) for (b3 in a3) q2[b3] = [q2[b3], a3[b3]];
      else v2.always(a3[v2.status]);
      return this;
    }, abort: function(a3) {
      var b3 = a3 || u2;
      return c2 && c2.abort(b3), x2(0, b3), this;
    } };
    if (o2.promise(v2).complete = p2.add, v2.success = v2.done, v2.error = v2.fail, k2.url = ((a2 || k2.url || oc) + "").replace(ec, "").replace(jc, pc[1] + "//"), k2.type = b2.method || b2.type || k2.method || k2.type, k2.dataTypes = n.trim(k2.dataType || "*").toLowerCase().match(E) || [""], null == k2.crossDomain && (h2 = kc.exec(k2.url.toLowerCase()), k2.crossDomain = !(!h2 || h2[1] === pc[1] && h2[2] === pc[2] && (h2[3] || ("http:" === h2[1] ? "80" : "443")) === (pc[3] || ("http:" === pc[1] ? "80" : "443")))), k2.data && k2.processData && "string" != typeof k2.data && (k2.data = n.param(k2.data, k2.traditional)), rc(lc, k2, b2, v2), 2 === t2) return v2;
    i2 = n.event && k2.global, i2 && 0 === n.active++ && n.event.trigger("ajaxStart"), k2.type = k2.type.toUpperCase(), k2.hasContent = !ic.test(k2.type), d2 = k2.url, k2.hasContent || (k2.data && (d2 = k2.url += (dc.test(d2) ? "&" : "?") + k2.data, delete k2.data), k2.cache === false && (k2.url = fc.test(d2) ? d2.replace(fc, "$1_=" + cc++) : d2 + (dc.test(d2) ? "&" : "?") + "_=" + cc++)), k2.ifModified && (n.lastModified[d2] && v2.setRequestHeader("If-Modified-Since", n.lastModified[d2]), n.etag[d2] && v2.setRequestHeader("If-None-Match", n.etag[d2])), (k2.data && k2.hasContent && k2.contentType !== false || b2.contentType) && v2.setRequestHeader("Content-Type", k2.contentType), v2.setRequestHeader("Accept", k2.dataTypes[0] && k2.accepts[k2.dataTypes[0]] ? k2.accepts[k2.dataTypes[0]] + ("*" !== k2.dataTypes[0] ? ", " + nc + "; q=0.01" : "") : k2.accepts["*"]);
    for (j2 in k2.headers) v2.setRequestHeader(j2, k2.headers[j2]);
    if (k2.beforeSend && (k2.beforeSend.call(l2, v2, k2) === false || 2 === t2)) return v2.abort();
    u2 = "abort";
    for (j2 in { success: 1, error: 1, complete: 1 }) v2[j2](k2[j2]);
    if (c2 = rc(mc, k2, b2, v2)) {
      v2.readyState = 1, i2 && m2.trigger("ajaxSend", [v2, k2]), k2.async && k2.timeout > 0 && (g2 = setTimeout(function() {
        v2.abort("timeout");
      }, k2.timeout));
      try {
        t2 = 1, c2.send(r2, x2);
      } catch (w2) {
        if (!(2 > t2)) throw w2;
        x2(-1, w2);
      }
    } else x2(-1, "No Transport");
    function x2(a3, b3, f3, h3) {
      var j3, r3, s3, u3, w2, x3 = b3;
      2 !== t2 && (t2 = 2, g2 && clearTimeout(g2), c2 = void 0, e2 = h3 || "", v2.readyState = a3 > 0 ? 4 : 0, j3 = a3 >= 200 && 300 > a3 || 304 === a3, f3 && (u3 = tc(k2, v2, f3)), u3 = uc(k2, u3, v2, j3), j3 ? (k2.ifModified && (w2 = v2.getResponseHeader("Last-Modified"), w2 && (n.lastModified[d2] = w2), w2 = v2.getResponseHeader("etag"), w2 && (n.etag[d2] = w2)), 204 === a3 || "HEAD" === k2.type ? x3 = "nocontent" : 304 === a3 ? x3 = "notmodified" : (x3 = u3.state, r3 = u3.data, s3 = u3.error, j3 = !s3)) : (s3 = x3, (a3 || !x3) && (x3 = "error", 0 > a3 && (a3 = 0))), v2.status = a3, v2.statusText = (b3 || x3) + "", j3 ? o2.resolveWith(l2, [r3, x3, v2]) : o2.rejectWith(l2, [v2, x3, s3]), v2.statusCode(q2), q2 = void 0, i2 && m2.trigger(j3 ? "ajaxSuccess" : "ajaxError", [v2, k2, j3 ? r3 : s3]), p2.fireWith(l2, [v2, x3]), i2 && (m2.trigger("ajaxComplete", [v2, k2]), --n.active || n.event.trigger("ajaxStop")));
    }
    return v2;
  }, getJSON: function(a2, b2, c2) {
    return n.get(a2, b2, c2, "json");
  }, getScript: function(a2, b2) {
    return n.get(a2, void 0, b2, "script");
  } }), n.each(["get", "post"], function(a2, b2) {
    n[b2] = function(a3, c2, d2, e2) {
      return n.isFunction(c2) && (e2 = e2 || d2, d2 = c2, c2 = void 0), n.ajax({ url: a3, type: b2, dataType: e2, data: c2, success: d2 });
    };
  }), n._evalUrl = function(a2) {
    return n.ajax({ url: a2, type: "GET", dataType: "script", async: false, global: false, "throws": true });
  }, n.fn.extend({ wrapAll: function(a2) {
    var b2;
    return n.isFunction(a2) ? this.each(function(b3) {
      n(this).wrapAll(a2.call(this, b3));
    }) : (this[0] && (b2 = n(a2, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && b2.insertBefore(this[0]), b2.map(function() {
      var a3 = this;
      while (a3.firstElementChild) a3 = a3.firstElementChild;
      return a3;
    }).append(this)), this);
  }, wrapInner: function(a2) {
    return this.each(n.isFunction(a2) ? function(b2) {
      n(this).wrapInner(a2.call(this, b2));
    } : function() {
      var b2 = n(this), c2 = b2.contents();
      c2.length ? c2.wrapAll(a2) : b2.append(a2);
    });
  }, wrap: function(a2) {
    var b2 = n.isFunction(a2);
    return this.each(function(c2) {
      n(this).wrapAll(b2 ? a2.call(this, c2) : a2);
    });
  }, unwrap: function() {
    return this.parent().each(function() {
      n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
    }).end();
  } }), n.expr.filters.hidden = function(a2) {
    return a2.offsetWidth <= 0 && a2.offsetHeight <= 0;
  }, n.expr.filters.visible = function(a2) {
    return !n.expr.filters.hidden(a2);
  };
  var vc = /%20/g, wc = /\[\]$/, xc = /\r?\n/g, yc = /^(?:submit|button|image|reset|file)$/i, zc = /^(?:input|select|textarea|keygen)/i;
  function Ac(a2, b2, c2, d2) {
    var e2;
    if (n.isArray(b2)) n.each(b2, function(b3, e3) {
      c2 || wc.test(a2) ? d2(a2, e3) : Ac(a2 + "[" + ("object" == typeof e3 ? b3 : "") + "]", e3, c2, d2);
    });
    else if (c2 || "object" !== n.type(b2)) d2(a2, b2);
    else for (e2 in b2) Ac(a2 + "[" + e2 + "]", b2[e2], c2, d2);
  }
  n.param = function(a2, b2) {
    var c2, d2 = [], e2 = function(a3, b3) {
      b3 = n.isFunction(b3) ? b3() : null == b3 ? "" : b3, d2[d2.length] = encodeURIComponent(a3) + "=" + encodeURIComponent(b3);
    };
    if (void 0 === b2 && (b2 = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a2) || a2.jquery && !n.isPlainObject(a2)) n.each(a2, function() {
      e2(this.name, this.value);
    });
    else for (c2 in a2) Ac(c2, a2[c2], b2, e2);
    return d2.join("&").replace(vc, "+");
  }, n.fn.extend({ serialize: function() {
    return n.param(this.serializeArray());
  }, serializeArray: function() {
    return this.map(function() {
      var a2 = n.prop(this, "elements");
      return a2 ? n.makeArray(a2) : this;
    }).filter(function() {
      var a2 = this.type;
      return this.name && !n(this).is(":disabled") && zc.test(this.nodeName) && !yc.test(a2) && (this.checked || !T.test(a2));
    }).map(function(a2, b2) {
      var c2 = n(this).val();
      return null == c2 ? null : n.isArray(c2) ? n.map(c2, function(a3) {
        return { name: b2.name, value: a3.replace(xc, "\r\n") };
      }) : { name: b2.name, value: c2.replace(xc, "\r\n") };
    }).get();
  } }), n.ajaxSettings.xhr = function() {
    try {
      return new XMLHttpRequest();
    } catch (a2) {
    }
  };
  var Bc = 0, Cc = {}, Dc = { 0: 200, 1223: 204 }, Ec = n.ajaxSettings.xhr();
  a.attachEvent && a.attachEvent("onunload", function() {
    for (var a2 in Cc) Cc[a2]();
  }), k.cors = !!Ec && "withCredentials" in Ec, k.ajax = Ec = !!Ec, n.ajaxTransport(function(a2) {
    var b2;
    return k.cors || Ec && !a2.crossDomain ? { send: function(c2, d2) {
      var e2, f2 = a2.xhr(), g2 = ++Bc;
      if (f2.open(a2.type, a2.url, a2.async, a2.username, a2.password), a2.xhrFields) for (e2 in a2.xhrFields) f2[e2] = a2.xhrFields[e2];
      a2.mimeType && f2.overrideMimeType && f2.overrideMimeType(a2.mimeType), a2.crossDomain || c2["X-Requested-With"] || (c2["X-Requested-With"] = "XMLHttpRequest");
      for (e2 in c2) f2.setRequestHeader(e2, c2[e2]);
      b2 = function(a3) {
        return function() {
          b2 && (delete Cc[g2], b2 = f2.onload = f2.onerror = null, "abort" === a3 ? f2.abort() : "error" === a3 ? d2(f2.status, f2.statusText) : d2(Dc[f2.status] || f2.status, f2.statusText, "string" == typeof f2.responseText ? { text: f2.responseText } : void 0, f2.getAllResponseHeaders()));
        };
      }, f2.onload = b2(), f2.onerror = b2("error"), b2 = Cc[g2] = b2("abort");
      try {
        f2.send(a2.hasContent && a2.data || null);
      } catch (h2) {
        if (b2) throw h2;
      }
    }, abort: function() {
      b2 && b2();
    } } : void 0;
  }), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(a2) {
    return n.globalEval(a2), a2;
  } } }), n.ajaxPrefilter("script", function(a2) {
    void 0 === a2.cache && (a2.cache = false), a2.crossDomain && (a2.type = "GET");
  }), n.ajaxTransport("script", function(a2) {
    if (a2.crossDomain) {
      var b2, c2;
      return { send: function(d2, e2) {
        b2 = n("<script>").prop({ async: true, charset: a2.scriptCharset, src: a2.url }).on("load error", c2 = function(a3) {
          b2.remove(), c2 = null, a3 && e2("error" === a3.type ? 404 : 200, a3.type);
        }), l.head.appendChild(b2[0]);
      }, abort: function() {
        c2 && c2();
      } };
    }
  });
  var Fc = [], Gc = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
    var a2 = Fc.pop() || n.expando + "_" + cc++;
    return this[a2] = true, a2;
  } }), n.ajaxPrefilter("json jsonp", function(b2, c2, d2) {
    var e2, f2, g2, h2 = b2.jsonp !== false && (Gc.test(b2.url) ? "url" : "string" == typeof b2.data && !(b2.contentType || "").indexOf("application/x-www-form-urlencoded") && Gc.test(b2.data) && "data");
    return h2 || "jsonp" === b2.dataTypes[0] ? (e2 = b2.jsonpCallback = n.isFunction(b2.jsonpCallback) ? b2.jsonpCallback() : b2.jsonpCallback, h2 ? b2[h2] = b2[h2].replace(Gc, "$1" + e2) : b2.jsonp !== false && (b2.url += (dc.test(b2.url) ? "&" : "?") + b2.jsonp + "=" + e2), b2.converters["script json"] = function() {
      return g2 || n.error(e2 + " was not called"), g2[0];
    }, b2.dataTypes[0] = "json", f2 = a[e2], a[e2] = function() {
      g2 = arguments;
    }, d2.always(function() {
      a[e2] = f2, b2[e2] && (b2.jsonpCallback = c2.jsonpCallback, Fc.push(e2)), g2 && n.isFunction(f2) && f2(g2[0]), g2 = f2 = void 0;
    }), "script") : void 0;
  }), n.parseHTML = function(a2, b2, c2) {
    if (!a2 || "string" != typeof a2) return null;
    "boolean" == typeof b2 && (c2 = b2, b2 = false), b2 = b2 || l;
    var d2 = v.exec(a2), e2 = !c2 && [];
    return d2 ? [b2.createElement(d2[1])] : (d2 = n.buildFragment([a2], b2, e2), e2 && e2.length && n(e2).remove(), n.merge([], d2.childNodes));
  };
  var Hc = n.fn.load;
  n.fn.load = function(a2, b2, c2) {
    if ("string" != typeof a2 && Hc) return Hc.apply(this, arguments);
    var d2, e2, f2, g2 = this, h2 = a2.indexOf(" ");
    return h2 >= 0 && (d2 = n.trim(a2.slice(h2)), a2 = a2.slice(0, h2)), n.isFunction(b2) ? (c2 = b2, b2 = void 0) : b2 && "object" == typeof b2 && (e2 = "POST"), g2.length > 0 && n.ajax({ url: a2, type: e2, dataType: "html", data: b2 }).done(function(a3) {
      f2 = arguments, g2.html(d2 ? n("<div>").append(n.parseHTML(a3)).find(d2) : a3);
    }).complete(c2 && function(a3, b3) {
      g2.each(c2, f2 || [a3.responseText, b3, a3]);
    }), this;
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a2, b2) {
    n.fn[b2] = function(a3) {
      return this.on(b2, a3);
    };
  }), n.expr.filters.animated = function(a2) {
    return n.grep(n.timers, function(b2) {
      return a2 === b2.elem;
    }).length;
  };
  var Ic = a.document.documentElement;
  function Jc(a2) {
    return n.isWindow(a2) ? a2 : 9 === a2.nodeType && a2.defaultView;
  }
  n.offset = { setOffset: function(a2, b2, c2) {
    var d2, e2, f2, g2, h2, i2, j2, k2 = n.css(a2, "position"), l2 = n(a2), m2 = {};
    "static" === k2 && (a2.style.position = "relative"), h2 = l2.offset(), f2 = n.css(a2, "top"), i2 = n.css(a2, "left"), j2 = ("absolute" === k2 || "fixed" === k2) && (f2 + i2).indexOf("auto") > -1, j2 ? (d2 = l2.position(), g2 = d2.top, e2 = d2.left) : (g2 = parseFloat(f2) || 0, e2 = parseFloat(i2) || 0), n.isFunction(b2) && (b2 = b2.call(a2, c2, h2)), null != b2.top && (m2.top = b2.top - h2.top + g2), null != b2.left && (m2.left = b2.left - h2.left + e2), "using" in b2 ? b2.using.call(a2, m2) : l2.css(m2);
  } }, n.fn.extend({ offset: function(a2) {
    if (arguments.length) return void 0 === a2 ? this : this.each(function(b3) {
      n.offset.setOffset(this, a2, b3);
    });
    var b2, c2, d2 = this[0], e2 = { top: 0, left: 0 }, f2 = d2 && d2.ownerDocument;
    if (f2) return b2 = f2.documentElement, n.contains(b2, d2) ? (typeof d2.getBoundingClientRect !== U && (e2 = d2.getBoundingClientRect()), c2 = Jc(f2), { top: e2.top + c2.pageYOffset - b2.clientTop, left: e2.left + c2.pageXOffset - b2.clientLeft }) : e2;
  }, position: function() {
    if (this[0]) {
      var a2, b2, c2 = this[0], d2 = { top: 0, left: 0 };
      return "fixed" === n.css(c2, "position") ? b2 = c2.getBoundingClientRect() : (a2 = this.offsetParent(), b2 = this.offset(), n.nodeName(a2[0], "html") || (d2 = a2.offset()), d2.top += n.css(a2[0], "borderTopWidth", true), d2.left += n.css(a2[0], "borderLeftWidth", true)), { top: b2.top - d2.top - n.css(c2, "marginTop", true), left: b2.left - d2.left - n.css(c2, "marginLeft", true) };
    }
  }, offsetParent: function() {
    return this.map(function() {
      var a2 = this.offsetParent || Ic;
      while (a2 && !n.nodeName(a2, "html") && "static" === n.css(a2, "position")) a2 = a2.offsetParent;
      return a2 || Ic;
    });
  } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(b2, c2) {
    var d2 = "pageYOffset" === c2;
    n.fn[b2] = function(e2) {
      return J(this, function(b3, e3, f2) {
        var g2 = Jc(b3);
        return void 0 === f2 ? g2 ? g2[c2] : b3[e3] : void (g2 ? g2.scrollTo(d2 ? a.pageXOffset : f2, d2 ? f2 : a.pageYOffset) : b3[e3] = f2);
      }, b2, e2, arguments.length, null);
    };
  }), n.each(["top", "left"], function(a2, b2) {
    n.cssHooks[b2] = yb(k.pixelPosition, function(a3, c2) {
      return c2 ? (c2 = xb(a3, b2), vb.test(c2) ? n(a3).position()[b2] + "px" : c2) : void 0;
    });
  }), n.each({ Height: "height", Width: "width" }, function(a2, b2) {
    n.each({ padding: "inner" + a2, content: b2, "": "outer" + a2 }, function(c2, d2) {
      n.fn[d2] = function(d3, e2) {
        var f2 = arguments.length && (c2 || "boolean" != typeof d3), g2 = c2 || (d3 === true || e2 === true ? "margin" : "border");
        return J(this, function(b3, c3, d4) {
          var e3;
          return n.isWindow(b3) ? b3.document.documentElement["client" + a2] : 9 === b3.nodeType ? (e3 = b3.documentElement, Math.max(b3.body["scroll" + a2], e3["scroll" + a2], b3.body["offset" + a2], e3["offset" + a2], e3["client" + a2])) : void 0 === d4 ? n.css(b3, c3, g2) : n.style(b3, c3, d4, g2);
        }, b2, f2 ? d3 : void 0, f2, null);
      };
    });
  }), n.fn.size = function() {
    return this.length;
  }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return n;
  });
  var Kc = a.jQuery, Lc = a.$;
  return n.noConflict = function(b2) {
    return a.$ === n && (a.$ = Lc), b2 && a.jQuery === n && (a.jQuery = Kc), n;
  }, typeof b === U && (a.jQuery = a.$ = n), n;
});
