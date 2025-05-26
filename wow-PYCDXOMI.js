/*! WOW - v1.0.3 - 2015-01-14
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
(function() {
  var a, b, c, d, e, f = function(a2, b2) {
    return function() {
      return a2.apply(b2, arguments);
    };
  }, g = [].indexOf || function(a2) {
    for (var b2 = 0, c2 = this.length; c2 > b2; b2++) if (b2 in this && this[b2] === a2) return b2;
    return -1;
  };
  b = function() {
    function a2() {
    }
    return a2.prototype.extend = function(a3, b2) {
      var c2, d2;
      for (c2 in b2) d2 = b2[c2], null == a3[c2] && (a3[c2] = d2);
      return a3;
    }, a2.prototype.isMobile = function(a3) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a3);
    }, a2.prototype.addEvent = function(a3, b2, c2) {
      return null != a3.addEventListener ? a3.addEventListener(b2, c2, false) : null != a3.attachEvent ? a3.attachEvent("on" + b2, c2) : a3[b2] = c2;
    }, a2.prototype.removeEvent = function(a3, b2, c2) {
      return null != a3.removeEventListener ? a3.removeEventListener(b2, c2, false) : null != a3.detachEvent ? a3.detachEvent("on" + b2, c2) : delete a3[b2];
    }, a2.prototype.innerHeight = function() {
      return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
    }, a2;
  }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
    function a2() {
      this.keys = [], this.values = [];
    }
    return a2.prototype.get = function(a3) {
      var b2, c2, d2, e2, f2;
      for (f2 = this.keys, b2 = d2 = 0, e2 = f2.length; e2 > d2; b2 = ++d2) if (c2 = f2[b2], c2 === a3) return this.values[b2];
    }, a2.prototype.set = function(a3, b2) {
      var c2, d2, e2, f2, g2;
      for (g2 = this.keys, c2 = e2 = 0, f2 = g2.length; f2 > e2; c2 = ++e2) if (d2 = g2[c2], d2 === a3) return void (this.values[c2] = b2);
      return this.keys.push(a3), this.values.push(b2);
    }, a2;
  }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
    function a2() {
      "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.");
    }
    return a2.notSupported = true, a2.prototype.observe = function() {
    }, a2;
  }()), d = this.getComputedStyle || function(a2) {
    return this.getPropertyValue = function(b2) {
      var c2;
      return "float" === b2 && (b2 = "styleFloat"), e.test(b2) && b2.replace(e, function(a3, b3) {
        return b3.toUpperCase();
      }), (null != (c2 = a2.currentStyle) ? c2[b2] : void 0) || null;
    }, this;
  }, e = /(\-([a-z]){1})/g, this.WOW = function() {
    function e2(a2) {
      null == a2 && (a2 = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.start = f(this.start, this), this.scrolled = true, this.config = this.util().extend(a2, this.defaults), this.animationNameCache = new c();
    }
    return e2.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: true, live: true, callback: null }, e2.prototype.init = function() {
      var a2;
      return this.element = window.document.documentElement, "interactive" === (a2 = document.readyState) || "complete" === a2 ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = [];
    }, e2.prototype.start = function() {
      var b2, c2, d2, e3;
      if (this.stopped = false, this.boxes = (function() {
        var a2, c3, d3, e4;
        for (d3 = this.element.querySelectorAll("." + this.config.boxClass), e4 = [], a2 = 0, c3 = d3.length; c3 > a2; a2++) b2 = d3[a2], e4.push(b2);
        return e4;
      }).call(this), this.all = (function() {
        var a2, c3, d3, e4;
        for (d3 = this.boxes, e4 = [], a2 = 0, c3 = d3.length; c3 > a2; a2++) b2 = d3[a2], e4.push(b2);
        return e4;
      }).call(this), this.boxes.length) if (this.disabled()) this.resetStyle();
      else for (e3 = this.boxes, c2 = 0, d2 = e3.length; d2 > c2; c2++) b2 = e3[c2], this.applyStyle(b2, true);
      return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(/* @__PURE__ */ function(a2) {
        return function(b3) {
          var c3, d3, e4, f2, g2;
          for (g2 = [], e4 = 0, f2 = b3.length; f2 > e4; e4++) d3 = b3[e4], g2.push((function() {
            var a3, b4, e5, f3;
            for (e5 = d3.addedNodes || [], f3 = [], a3 = 0, b4 = e5.length; b4 > a3; a3++) c3 = e5[a3], f3.push(this.doSync(c3));
            return f3;
          }).call(a2));
          return g2;
        };
      }(this)).observe(document.body, { childList: true, subtree: true }) : void 0;
    }, e2.prototype.stop = function() {
      return this.stopped = true, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0;
    }, e2.prototype.sync = function() {
      return a.notSupported ? this.doSync(this.element) : void 0;
    }, e2.prototype.doSync = function(a2) {
      var b2, c2, d2, e3, f2;
      if (null == a2 && (a2 = this.element), 1 === a2.nodeType) {
        for (a2 = a2.parentNode || a2, e3 = a2.querySelectorAll("." + this.config.boxClass), f2 = [], c2 = 0, d2 = e3.length; d2 > c2; c2++) b2 = e3[c2], g.call(this.all, b2) < 0 ? (this.boxes.push(b2), this.all.push(b2), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b2, true), f2.push(this.scrolled = true)) : f2.push(void 0);
        return f2;
      }
    }, e2.prototype.show = function(a2) {
      return this.applyStyle(a2), a2.className = "" + a2.className + " " + this.config.animateClass, null != this.config.callback ? this.config.callback(a2) : void 0;
    }, e2.prototype.applyStyle = function(a2, b2) {
      var c2, d2, e3;
      return d2 = a2.getAttribute("data-wow-duration"), c2 = a2.getAttribute("data-wow-delay"), e3 = a2.getAttribute("data-wow-iteration"), this.animate(/* @__PURE__ */ function(f2) {
        return function() {
          return f2.customStyle(a2, b2, d2, c2, e3);
        };
      }(this));
    }, e2.prototype.animate = function() {
      return "requestAnimationFrame" in window ? function(a2) {
        return window.requestAnimationFrame(a2);
      } : function(a2) {
        return a2();
      };
    }(), e2.prototype.resetStyle = function() {
      var a2, b2, c2, d2, e3;
      for (d2 = this.boxes, e3 = [], b2 = 0, c2 = d2.length; c2 > b2; b2++) a2 = d2[b2], e3.push(a2.style.visibility = "visible");
      return e3;
    }, e2.prototype.customStyle = function(a2, b2, c2, d2, e3) {
      return b2 && this.cacheAnimationName(a2), a2.style.visibility = b2 ? "hidden" : "visible", c2 && this.vendorSet(a2.style, { animationDuration: c2 }), d2 && this.vendorSet(a2.style, { animationDelay: d2 }), e3 && this.vendorSet(a2.style, { animationIterationCount: e3 }), this.vendorSet(a2.style, { animationName: b2 ? "none" : this.cachedAnimationName(a2) }), a2;
    }, e2.prototype.vendors = ["moz", "webkit"], e2.prototype.vendorSet = function(a2, b2) {
      var c2, d2, e3, f2;
      f2 = [];
      for (c2 in b2) d2 = b2[c2], a2["" + c2] = d2, f2.push((function() {
        var b3, f3, g2, h;
        for (g2 = this.vendors, h = [], b3 = 0, f3 = g2.length; f3 > b3; b3++) e3 = g2[b3], h.push(a2["" + e3 + c2.charAt(0).toUpperCase() + c2.substr(1)] = d2);
        return h;
      }).call(this));
      return f2;
    }, e2.prototype.vendorCSS = function(a2, b2) {
      var c2, e3, f2, g2, h, i;
      for (e3 = d(a2), c2 = e3.getPropertyCSSValue(b2), i = this.vendors, g2 = 0, h = i.length; h > g2; g2++) f2 = i[g2], c2 = c2 || e3.getPropertyCSSValue("-" + f2 + "-" + b2);
      return c2;
    }, e2.prototype.animationName = function(a2) {
      var b2;
      try {
        b2 = this.vendorCSS(a2, "animation-name").cssText;
      } catch (c2) {
        b2 = d(a2).getPropertyValue("animation-name");
      }
      return "none" === b2 ? "" : b2;
    }, e2.prototype.cacheAnimationName = function(a2) {
      return this.animationNameCache.set(a2, this.animationName(a2));
    }, e2.prototype.cachedAnimationName = function(a2) {
      return this.animationNameCache.get(a2);
    }, e2.prototype.scrollHandler = function() {
      return this.scrolled = true;
    }, e2.prototype.scrollCallback = function() {
      var a2;
      return !this.scrolled || (this.scrolled = false, this.boxes = (function() {
        var b2, c2, d2, e3;
        for (d2 = this.boxes, e3 = [], b2 = 0, c2 = d2.length; c2 > b2; b2++) a2 = d2[b2], a2 && (this.isVisible(a2) ? this.show(a2) : e3.push(a2));
        return e3;
      }).call(this), this.boxes.length || this.config.live) ? void 0 : this.stop();
    }, e2.prototype.offsetTop = function(a2) {
      for (var b2; void 0 === a2.offsetTop; ) a2 = a2.parentNode;
      for (b2 = a2.offsetTop; a2 = a2.offsetParent; ) b2 += a2.offsetTop;
      return b2;
    }, e2.prototype.isVisible = function(a2) {
      var b2, c2, d2, e3, f2;
      return c2 = a2.getAttribute("data-wow-offset") || this.config.offset, f2 = window.pageYOffset, e3 = f2 + Math.min(this.element.clientHeight, this.util().innerHeight()) - c2, d2 = this.offsetTop(a2), b2 = d2 + a2.clientHeight, e3 >= d2 && b2 >= f2;
    }, e2.prototype.util = function() {
      return null != this._util ? this._util : this._util = new b();
    }, e2.prototype.disabled = function() {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    }, e2;
  }();
}).call(this);
