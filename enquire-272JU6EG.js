/*!
 * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
!function(a, b, c) {
  var d = window.matchMedia;
  "undefined" != typeof module && module.exports ? module.exports = c(d) : "function" == typeof define && define.amd ? define(function() {
    return b[a] = c(d);
  }) : b[a] = c(d);
}("enquire", this, function(a) {
  "use strict";
  function b(a2, b2) {
    var c2, d2 = 0, e2 = a2.length;
    for (d2; e2 > d2 && (c2 = b2(a2[d2], d2), c2 !== false); d2++) ;
  }
  function c(a2) {
    return "[object Array]" === Object.prototype.toString.apply(a2);
  }
  function d(a2) {
    return "function" == typeof a2;
  }
  function e(a2) {
    this.options = a2, !a2.deferSetup && this.setup();
  }
  function f(b2, c2) {
    this.query = b2, this.isUnconditional = c2, this.handlers = [], this.mql = a(b2);
    var d2 = this;
    this.listener = function(a2) {
      d2.mql = a2, d2.assess();
    }, this.mql.addListener(this.listener);
  }
  function g() {
    if (!a) throw new Error("matchMedia not present, legacy browsers require a polyfill");
    this.queries = {}, this.browserIsIncapable = !a("only all").matches;
  }
  return e.prototype = { setup: function() {
    this.options.setup && this.options.setup(), this.initialised = true;
  }, on: function() {
    !this.initialised && this.setup(), this.options.match && this.options.match();
  }, off: function() {
    this.options.unmatch && this.options.unmatch();
  }, destroy: function() {
    this.options.destroy ? this.options.destroy() : this.off();
  }, equals: function(a2) {
    return this.options === a2 || this.options.match === a2;
  } }, f.prototype = { addHandler: function(a2) {
    var b2 = new e(a2);
    this.handlers.push(b2), this.matches() && b2.on();
  }, removeHandler: function(a2) {
    var c2 = this.handlers;
    b(c2, function(b2, d2) {
      return b2.equals(a2) ? (b2.destroy(), !c2.splice(d2, 1)) : void 0;
    });
  }, matches: function() {
    return this.mql.matches || this.isUnconditional;
  }, clear: function() {
    b(this.handlers, function(a2) {
      a2.destroy();
    }), this.mql.removeListener(this.listener), this.handlers.length = 0;
  }, assess: function() {
    var a2 = this.matches() ? "on" : "off";
    b(this.handlers, function(b2) {
      b2[a2]();
    });
  } }, g.prototype = { register: function(a2, e2, g2) {
    var h = this.queries, i = g2 && this.browserIsIncapable;
    return h[a2] || (h[a2] = new f(a2, i)), d(e2) && (e2 = { match: e2 }), c(e2) || (e2 = [e2]), b(e2, function(b2) {
      d(b2) && (b2 = { match: b2 }), h[a2].addHandler(b2);
    }), this;
  }, unregister: function(a2, b2) {
    var c2 = this.queries[a2];
    return c2 && (b2 ? c2.removeHandler(b2) : (c2.clear(), delete this.queries[a2])), this;
  } }, new g();
});
