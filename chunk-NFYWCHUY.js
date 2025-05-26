import {
  Gallery,
  GalleryDialogComponent,
  GalleryModule,
  LightboxModule,
  MatDialog,
  MatDialogModule
} from "./chunk-X7POTAOX.js";
import "./chunk-OTCWYWHG.js";
import "./chunk-T3XFCYZY.js";
import {
  FloatTextComponent,
  SubheaderComponent
} from "./chunk-PDCLZWJ2.js";
import "./chunk-JSZOCLKC.js";
import {
  APP_WRITE_CONFIG,
  AppWriteService,
  Query
} from "./chunk-U3KVYWMQ.js";
import {
  IMAGE_LOADER,
  NgClass,
  NgOptimizedImage
} from "./chunk-JT7LBMWZ.js";
import {
  computed,
  effect,
  inject,
  signal,
  viewChild,
  viewChildren,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefer,
  ɵɵdeferOnViewport,
  ɵɵdeferPrefetchOnIdle,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuerySignal
} from "./chunk-ZXLQTLKG.js";
import {
  __async,
  __commonJS,
  __toESM
} from "./chunk-DAU4QTJP.js";

// node_modules/ev-emitter/ev-emitter.js
var require_ev_emitter = __commonJS({
  "node_modules/ev-emitter/ev-emitter.js"(exports, module) {
    "use strict";
    (function(global, factory) {
      if (typeof define == "function" && define.amd) {
        define(factory);
      } else if (typeof module == "object" && module.exports) {
        module.exports = factory();
      } else {
        global.EvEmitter = factory();
      }
    })(typeof window != "undefined" ? window : exports, function() {
      "use strict";
      function EvEmitter() {
      }
      var proto = EvEmitter.prototype;
      proto.on = function(eventName, listener) {
        if (!eventName || !listener) {
          return;
        }
        var events = this._events = this._events || {};
        var listeners = events[eventName] = events[eventName] || [];
        if (listeners.indexOf(listener) == -1) {
          listeners.push(listener);
        }
        return this;
      };
      proto.once = function(eventName, listener) {
        if (!eventName || !listener) {
          return;
        }
        this.on(eventName, listener);
        var onceEvents = this._onceEvents = this._onceEvents || {};
        var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
        onceListeners[listener] = true;
        return this;
      };
      proto.off = function(eventName, listener) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
          return;
        }
        var index = listeners.indexOf(listener);
        if (index != -1) {
          listeners.splice(index, 1);
        }
        return this;
      };
      proto.emitEvent = function(eventName, args) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
          return;
        }
        listeners = listeners.slice(0);
        args = args || [];
        var onceListeners = this._onceEvents && this._onceEvents[eventName];
        for (var i = 0; i < listeners.length; i++) {
          var listener = listeners[i];
          var isOnce = onceListeners && onceListeners[listener];
          if (isOnce) {
            this.off(eventName, listener);
            delete onceListeners[listener];
          }
          listener.apply(this, args);
        }
        return this;
      };
      proto.allOff = function() {
        delete this._events;
        delete this._onceEvents;
      };
      return EvEmitter;
    });
  }
});

// node_modules/get-size/get-size.js
var require_get_size = __commonJS({
  "node_modules/get-size/get-size.js"(exports, module) {
    "use strict";
    (function(window2, factory) {
      if (typeof define == "function" && define.amd) {
        define(factory);
      } else if (typeof module == "object" && module.exports) {
        module.exports = factory();
      } else {
        window2.getSize = factory();
      }
    })(window, function factory() {
      "use strict";
      function getStyleSize(value) {
        var num = parseFloat(value);
        var isValid = value.indexOf("%") == -1 && !isNaN(num);
        return isValid && num;
      }
      function noop() {
      }
      var logError = typeof console == "undefined" ? noop : function(message) {
        console.error(message);
      };
      var measurements = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
      var measurementsLength = measurements.length;
      function getZeroSize() {
        var size = {
          width: 0,
          height: 0,
          innerWidth: 0,
          innerHeight: 0,
          outerWidth: 0,
          outerHeight: 0
        };
        for (var i = 0; i < measurementsLength; i++) {
          var measurement = measurements[i];
          size[measurement] = 0;
        }
        return size;
      }
      function getStyle(elem) {
        var style = getComputedStyle(elem);
        if (!style) {
          logError("Style returned " + style + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1");
        }
        return style;
      }
      var isSetup = false;
      var isBoxSizeOuter;
      function setup() {
        if (isSetup) {
          return;
        }
        isSetup = true;
        var div = document.createElement("div");
        div.style.width = "200px";
        div.style.padding = "1px 2px 3px 4px";
        div.style.borderStyle = "solid";
        div.style.borderWidth = "1px 2px 3px 4px";
        div.style.boxSizing = "border-box";
        var body = document.body || document.documentElement;
        body.appendChild(div);
        var style = getStyle(div);
        isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
        getSize.isBoxSizeOuter = isBoxSizeOuter;
        body.removeChild(div);
      }
      function getSize(elem) {
        setup();
        if (typeof elem == "string") {
          elem = document.querySelector(elem);
        }
        if (!elem || typeof elem != "object" || !elem.nodeType) {
          return;
        }
        var style = getStyle(elem);
        if (style.display == "none") {
          return getZeroSize();
        }
        var size = {};
        size.width = elem.offsetWidth;
        size.height = elem.offsetHeight;
        var isBorderBox = size.isBorderBox = style.boxSizing == "border-box";
        for (var i = 0; i < measurementsLength; i++) {
          var measurement = measurements[i];
          var value = style[measurement];
          var num = parseFloat(value);
          size[measurement] = !isNaN(num) ? num : 0;
        }
        var paddingWidth = size.paddingLeft + size.paddingRight;
        var paddingHeight = size.paddingTop + size.paddingBottom;
        var marginWidth = size.marginLeft + size.marginRight;
        var marginHeight = size.marginTop + size.marginBottom;
        var borderWidth = size.borderLeftWidth + size.borderRightWidth;
        var borderHeight = size.borderTopWidth + size.borderBottomWidth;
        var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
        var styleWidth = getStyleSize(style.width);
        if (styleWidth !== false) {
          size.width = styleWidth + // add padding and border unless it's already including it
          (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
        }
        var styleHeight = getStyleSize(style.height);
        if (styleHeight !== false) {
          size.height = styleHeight + // add padding and border unless it's already including it
          (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
        }
        size.innerWidth = size.width - (paddingWidth + borderWidth);
        size.innerHeight = size.height - (paddingHeight + borderHeight);
        size.outerWidth = size.width + marginWidth;
        size.outerHeight = size.height + marginHeight;
        return size;
      }
      return getSize;
    });
  }
});

// node_modules/desandro-matches-selector/matches-selector.js
var require_matches_selector = __commonJS({
  "node_modules/desandro-matches-selector/matches-selector.js"(exports, module) {
    "use strict";
    (function(window2, factory) {
      "use strict";
      if (typeof define == "function" && define.amd) {
        define(factory);
      } else if (typeof module == "object" && module.exports) {
        module.exports = factory();
      } else {
        window2.matchesSelector = factory();
      }
    })(window, function factory() {
      "use strict";
      var matchesMethod = function() {
        var ElemProto = window.Element.prototype;
        if (ElemProto.matches) {
          return "matches";
        }
        if (ElemProto.matchesSelector) {
          return "matchesSelector";
        }
        var prefixes = ["webkit", "moz", "ms", "o"];
        for (var i = 0; i < prefixes.length; i++) {
          var prefix = prefixes[i];
          var method = prefix + "MatchesSelector";
          if (ElemProto[method]) {
            return method;
          }
        }
      }();
      return function matchesSelector(elem, selector) {
        return elem[matchesMethod](selector);
      };
    });
  }
});

// node_modules/fizzy-ui-utils/utils.js
var require_utils = __commonJS({
  "node_modules/fizzy-ui-utils/utils.js"(exports, module) {
    "use strict";
    (function(window2, factory) {
      if (typeof define == "function" && define.amd) {
        define(["desandro-matches-selector/matches-selector"], function(matchesSelector) {
          return factory(window2, matchesSelector);
        });
      } else if (typeof module == "object" && module.exports) {
        module.exports = factory(window2, require_matches_selector());
      } else {
        window2.fizzyUIUtils = factory(window2, window2.matchesSelector);
      }
    })(window, function factory(window2, matchesSelector) {
      "use strict";
      var utils = {};
      utils.extend = function(a, b) {
        for (var prop in b) {
          a[prop] = b[prop];
        }
        return a;
      };
      utils.modulo = function(num, div) {
        return (num % div + div) % div;
      };
      var arraySlice = Array.prototype.slice;
      utils.makeArray = function(obj) {
        if (Array.isArray(obj)) {
          return obj;
        }
        if (obj === null || obj === void 0) {
          return [];
        }
        var isArrayLike = typeof obj == "object" && typeof obj.length == "number";
        if (isArrayLike) {
          return arraySlice.call(obj);
        }
        return [obj];
      };
      utils.removeFrom = function(ary, obj) {
        var index = ary.indexOf(obj);
        if (index != -1) {
          ary.splice(index, 1);
        }
      };
      utils.getParent = function(elem, selector) {
        while (elem.parentNode && elem != document.body) {
          elem = elem.parentNode;
          if (matchesSelector(elem, selector)) {
            return elem;
          }
        }
      };
      utils.getQueryElement = function(elem) {
        if (typeof elem == "string") {
          return document.querySelector(elem);
        }
        return elem;
      };
      utils.handleEvent = function(event) {
        var method = "on" + event.type;
        if (this[method]) {
          this[method](event);
        }
      };
      utils.filterFindElements = function(elems, selector) {
        elems = utils.makeArray(elems);
        var ffElems = [];
        elems.forEach(function(elem) {
          if (!(elem instanceof HTMLElement)) {
            return;
          }
          if (!selector) {
            ffElems.push(elem);
            return;
          }
          if (matchesSelector(elem, selector)) {
            ffElems.push(elem);
          }
          var childElems = elem.querySelectorAll(selector);
          for (var i = 0; i < childElems.length; i++) {
            ffElems.push(childElems[i]);
          }
        });
        return ffElems;
      };
      utils.debounceMethod = function(_class, methodName, threshold) {
        threshold = threshold || 100;
        var method = _class.prototype[methodName];
        var timeoutName = methodName + "Timeout";
        _class.prototype[methodName] = function() {
          var timeout = this[timeoutName];
          clearTimeout(timeout);
          var args = arguments;
          var _this = this;
          this[timeoutName] = setTimeout(function() {
            method.apply(_this, args);
            delete _this[timeoutName];
          }, threshold);
        };
      };
      utils.docReady = function(callback) {
        var readyState = document.readyState;
        if (readyState == "complete" || readyState == "interactive") {
          setTimeout(callback);
        } else {
          document.addEventListener("DOMContentLoaded", callback);
        }
      };
      utils.toDashed = function(str) {
        return str.replace(/(.)([A-Z])/g, function(match, $1, $2) {
          return $1 + "-" + $2;
        }).toLowerCase();
      };
      var console2 = window2.console;
      utils.htmlInit = function(WidgetClass, namespace) {
        utils.docReady(function() {
          var dashedNamespace = utils.toDashed(namespace);
          var dataAttr = "data-" + dashedNamespace;
          var dataAttrElems = document.querySelectorAll("[" + dataAttr + "]");
          var jsDashElems = document.querySelectorAll(".js-" + dashedNamespace);
          var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
          var dataOptionsAttr = dataAttr + "-options";
          var jQuery = window2.jQuery;
          elems.forEach(function(elem) {
            var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
            var options;
            try {
              options = attr && JSON.parse(attr);
            } catch (error) {
              if (console2) {
                console2.error("Error parsing " + dataAttr + " on " + elem.className + ": " + error);
              }
              return;
            }
            var instance = new WidgetClass(elem, options);
            if (jQuery) {
              jQuery.data(elem, namespace, instance);
            }
          });
        });
      };
      return utils;
    });
  }
});

// node_modules/outlayer/item.js
var require_item = __commonJS({
  "node_modules/outlayer/item.js"(exports, module) {
    "use strict";
    (function(window2, factory) {
      if (typeof define == "function" && define.amd) {
        define(["ev-emitter/ev-emitter", "get-size/get-size"], factory);
      } else if (typeof module == "object" && module.exports) {
        module.exports = factory(require_ev_emitter(), require_get_size());
      } else {
        window2.Outlayer = {};
        window2.Outlayer.Item = factory(window2.EvEmitter, window2.getSize);
      }
    })(window, function factory(EvEmitter, getSize) {
      "use strict";
      function isEmptyObj(obj) {
        for (var prop in obj) {
          return false;
        }
        prop = null;
        return true;
      }
      var docElemStyle = document.documentElement.style;
      var transitionProperty = typeof docElemStyle.transition == "string" ? "transition" : "WebkitTransition";
      var transformProperty = typeof docElemStyle.transform == "string" ? "transform" : "WebkitTransform";
      var transitionEndEvent = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
      }[transitionProperty];
      var vendorProperties = {
        transform: transformProperty,
        transition: transitionProperty,
        transitionDuration: transitionProperty + "Duration",
        transitionProperty: transitionProperty + "Property",
        transitionDelay: transitionProperty + "Delay"
      };
      function Item(element, layout) {
        if (!element) {
          return;
        }
        this.element = element;
        this.layout = layout;
        this.position = {
          x: 0,
          y: 0
        };
        this._create();
      }
      var proto = Item.prototype = Object.create(EvEmitter.prototype);
      proto.constructor = Item;
      proto._create = function() {
        this._transn = {
          ingProperties: {},
          clean: {},
          onEnd: {}
        };
        this.css({
          position: "absolute"
        });
      };
      proto.handleEvent = function(event) {
        var method = "on" + event.type;
        if (this[method]) {
          this[method](event);
        }
      };
      proto.getSize = function() {
        this.size = getSize(this.element);
      };
      proto.css = function(style) {
        var elemStyle = this.element.style;
        for (var prop in style) {
          var supportedProp = vendorProperties[prop] || prop;
          elemStyle[supportedProp] = style[prop];
        }
      };
      proto.getPosition = function() {
        var style = getComputedStyle(this.element);
        var isOriginLeft = this.layout._getOption("originLeft");
        var isOriginTop = this.layout._getOption("originTop");
        var xValue = style[isOriginLeft ? "left" : "right"];
        var yValue = style[isOriginTop ? "top" : "bottom"];
        var x = parseFloat(xValue);
        var y = parseFloat(yValue);
        var layoutSize = this.layout.size;
        if (xValue.indexOf("%") != -1) {
          x = x / 100 * layoutSize.width;
        }
        if (yValue.indexOf("%") != -1) {
          y = y / 100 * layoutSize.height;
        }
        x = isNaN(x) ? 0 : x;
        y = isNaN(y) ? 0 : y;
        x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
        y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
        this.position.x = x;
        this.position.y = y;
      };
      proto.layoutPosition = function() {
        var layoutSize = this.layout.size;
        var style = {};
        var isOriginLeft = this.layout._getOption("originLeft");
        var isOriginTop = this.layout._getOption("originTop");
        var xPadding = isOriginLeft ? "paddingLeft" : "paddingRight";
        var xProperty = isOriginLeft ? "left" : "right";
        var xResetProperty = isOriginLeft ? "right" : "left";
        var x = this.position.x + layoutSize[xPadding];
        style[xProperty] = this.getXValue(x);
        style[xResetProperty] = "";
        var yPadding = isOriginTop ? "paddingTop" : "paddingBottom";
        var yProperty = isOriginTop ? "top" : "bottom";
        var yResetProperty = isOriginTop ? "bottom" : "top";
        var y = this.position.y + layoutSize[yPadding];
        style[yProperty] = this.getYValue(y);
        style[yResetProperty] = "";
        this.css(style);
        this.emitEvent("layout", [this]);
      };
      proto.getXValue = function(x) {
        var isHorizontal = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !isHorizontal ? x / this.layout.size.width * 100 + "%" : x + "px";
      };
      proto.getYValue = function(y) {
        var isHorizontal = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && isHorizontal ? y / this.layout.size.height * 100 + "%" : y + "px";
      };
      proto._transitionTo = function(x, y) {
        this.getPosition();
        var curX = this.position.x;
        var curY = this.position.y;
        var didNotMove = x == this.position.x && y == this.position.y;
        this.setPosition(x, y);
        if (didNotMove && !this.isTransitioning) {
          this.layoutPosition();
          return;
        }
        var transX = x - curX;
        var transY = y - curY;
        var transitionStyle = {};
        transitionStyle.transform = this.getTranslate(transX, transY);
        this.transition({
          to: transitionStyle,
          onTransitionEnd: {
            transform: this.layoutPosition
          },
          isCleaning: true
        });
      };
      proto.getTranslate = function(x, y) {
        var isOriginLeft = this.layout._getOption("originLeft");
        var isOriginTop = this.layout._getOption("originTop");
        x = isOriginLeft ? x : -x;
        y = isOriginTop ? y : -y;
        return "translate3d(" + x + "px, " + y + "px, 0)";
      };
      proto.goTo = function(x, y) {
        this.setPosition(x, y);
        this.layoutPosition();
      };
      proto.moveTo = proto._transitionTo;
      proto.setPosition = function(x, y) {
        this.position.x = parseFloat(x);
        this.position.y = parseFloat(y);
      };
      proto._nonTransition = function(args) {
        this.css(args.to);
        if (args.isCleaning) {
          this._removeStyles(args.to);
        }
        for (var prop in args.onTransitionEnd) {
          args.onTransitionEnd[prop].call(this);
        }
      };
      proto.transition = function(args) {
        if (!parseFloat(this.layout.options.transitionDuration)) {
          this._nonTransition(args);
          return;
        }
        var _transition = this._transn;
        for (var prop in args.onTransitionEnd) {
          _transition.onEnd[prop] = args.onTransitionEnd[prop];
        }
        for (prop in args.to) {
          _transition.ingProperties[prop] = true;
          if (args.isCleaning) {
            _transition.clean[prop] = true;
          }
        }
        if (args.from) {
          this.css(args.from);
          var h = this.element.offsetHeight;
          h = null;
        }
        this.enableTransition(args.to);
        this.css(args.to);
        this.isTransitioning = true;
      };
      function toDashedAll(str) {
        return str.replace(/([A-Z])/g, function($1) {
          return "-" + $1.toLowerCase();
        });
      }
      var transitionProps = "opacity," + toDashedAll(transformProperty);
      proto.enableTransition = function() {
        if (this.isTransitioning) {
          return;
        }
        var duration = this.layout.options.transitionDuration;
        duration = typeof duration == "number" ? duration + "ms" : duration;
        this.css({
          transitionProperty: transitionProps,
          transitionDuration: duration,
          transitionDelay: this.staggerDelay || 0
        });
        this.element.addEventListener(transitionEndEvent, this, false);
      };
      proto.onwebkitTransitionEnd = function(event) {
        this.ontransitionend(event);
      };
      proto.onotransitionend = function(event) {
        this.ontransitionend(event);
      };
      var dashedVendorProperties = {
        "-webkit-transform": "transform"
      };
      proto.ontransitionend = function(event) {
        if (event.target !== this.element) {
          return;
        }
        var _transition = this._transn;
        var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;
        delete _transition.ingProperties[propertyName];
        if (isEmptyObj(_transition.ingProperties)) {
          this.disableTransition();
        }
        if (propertyName in _transition.clean) {
          this.element.style[event.propertyName] = "";
          delete _transition.clean[propertyName];
        }
        if (propertyName in _transition.onEnd) {
          var onTransitionEnd = _transition.onEnd[propertyName];
          onTransitionEnd.call(this);
          delete _transition.onEnd[propertyName];
        }
        this.emitEvent("transitionEnd", [this]);
      };
      proto.disableTransition = function() {
        this.removeTransitionStyles();
        this.element.removeEventListener(transitionEndEvent, this, false);
        this.isTransitioning = false;
      };
      proto._removeStyles = function(style) {
        var cleanStyle = {};
        for (var prop in style) {
          cleanStyle[prop] = "";
        }
        this.css(cleanStyle);
      };
      var cleanTransitionStyle = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
      };
      proto.removeTransitionStyles = function() {
        this.css(cleanTransitionStyle);
      };
      proto.stagger = function(delay) {
        delay = isNaN(delay) ? 0 : delay;
        this.staggerDelay = delay + "ms";
      };
      proto.removeElem = function() {
        this.element.parentNode.removeChild(this.element);
        this.css({
          display: ""
        });
        this.emitEvent("remove", [this]);
      };
      proto.remove = function() {
        if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
          this.removeElem();
          return;
        }
        this.once("transitionEnd", function() {
          this.removeElem();
        });
        this.hide();
      };
      proto.reveal = function() {
        delete this.isHidden;
        this.css({
          display: ""
        });
        var options = this.layout.options;
        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty("visibleStyle");
        onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
        this.transition({
          from: options.hiddenStyle,
          to: options.visibleStyle,
          isCleaning: true,
          onTransitionEnd
        });
      };
      proto.onRevealTransitionEnd = function() {
        if (!this.isHidden) {
          this.emitEvent("reveal");
        }
      };
      proto.getHideRevealTransitionEndProperty = function(styleProperty) {
        var optionStyle = this.layout.options[styleProperty];
        if (optionStyle.opacity) {
          return "opacity";
        }
        for (var prop in optionStyle) {
          return prop;
        }
      };
      proto.hide = function() {
        this.isHidden = true;
        this.css({
          display: ""
        });
        var options = this.layout.options;
        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty("hiddenStyle");
        onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
        this.transition({
          from: options.visibleStyle,
          to: options.hiddenStyle,
          // keep hidden stuff hidden
          isCleaning: true,
          onTransitionEnd
        });
      };
      proto.onHideTransitionEnd = function() {
        if (this.isHidden) {
          this.css({
            display: "none"
          });
          this.emitEvent("hide");
        }
      };
      proto.destroy = function() {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: ""
        });
      };
      return Item;
    });
  }
});

// node_modules/outlayer/outlayer.js
var require_outlayer = __commonJS({
  "node_modules/outlayer/outlayer.js"(exports, module) {
    "use strict";
    (function(window2, factory) {
      "use strict";
      if (typeof define == "function" && define.amd) {
        define(["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(EvEmitter, getSize, utils, Item) {
          return factory(window2, EvEmitter, getSize, utils, Item);
        });
      } else if (typeof module == "object" && module.exports) {
        module.exports = factory(window2, require_ev_emitter(), require_get_size(), require_utils(), require_item());
      } else {
        window2.Outlayer = factory(window2, window2.EvEmitter, window2.getSize, window2.fizzyUIUtils, window2.Outlayer.Item);
      }
    })(window, function factory(window2, EvEmitter, getSize, utils, Item) {
      "use strict";
      var console2 = window2.console;
      var jQuery = window2.jQuery;
      var noop = function() {
      };
      var GUID = 0;
      var instances = {};
      function Outlayer(element, options) {
        var queryElement = utils.getQueryElement(element);
        if (!queryElement) {
          if (console2) {
            console2.error("Bad element for " + this.constructor.namespace + ": " + (queryElement || element));
          }
          return;
        }
        this.element = queryElement;
        if (jQuery) {
          this.$element = jQuery(this.element);
        }
        this.options = utils.extend({}, this.constructor.defaults);
        this.option(options);
        var id = ++GUID;
        this.element.outlayerGUID = id;
        instances[id] = this;
        this._create();
        var isInitLayout = this._getOption("initLayout");
        if (isInitLayout) {
          this.layout();
        }
      }
      Outlayer.namespace = "outlayer";
      Outlayer.Item = Item;
      Outlayer.defaults = {
        containerStyle: {
          position: "relative"
        },
        initLayout: true,
        originLeft: true,
        originTop: true,
        resize: true,
        resizeContainer: true,
        // item options
        transitionDuration: "0.4s",
        hiddenStyle: {
          opacity: 0,
          transform: "scale(0.001)"
        },
        visibleStyle: {
          opacity: 1,
          transform: "scale(1)"
        }
      };
      var proto = Outlayer.prototype;
      utils.extend(proto, EvEmitter.prototype);
      proto.option = function(opts) {
        utils.extend(this.options, opts);
      };
      proto._getOption = function(option) {
        var oldOption = this.constructor.compatOptions[option];
        return oldOption && this.options[oldOption] !== void 0 ? this.options[oldOption] : this.options[option];
      };
      Outlayer.compatOptions = {
        // currentName: oldName
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
      };
      proto._create = function() {
        this.reloadItems();
        this.stamps = [];
        this.stamp(this.options.stamp);
        utils.extend(this.element.style, this.options.containerStyle);
        var canBindResize = this._getOption("resize");
        if (canBindResize) {
          this.bindResize();
        }
      };
      proto.reloadItems = function() {
        this.items = this._itemize(this.element.children);
      };
      proto._itemize = function(elems) {
        var itemElems = this._filterFindItemElements(elems);
        var Item2 = this.constructor.Item;
        var items = [];
        for (var i = 0; i < itemElems.length; i++) {
          var elem = itemElems[i];
          var item = new Item2(elem, this);
          items.push(item);
        }
        return items;
      };
      proto._filterFindItemElements = function(elems) {
        return utils.filterFindElements(elems, this.options.itemSelector);
      };
      proto.getItemElements = function() {
        return this.items.map(function(item) {
          return item.element;
        });
      };
      proto.layout = function() {
        this._resetLayout();
        this._manageStamps();
        var layoutInstant = this._getOption("layoutInstant");
        var isInstant = layoutInstant !== void 0 ? layoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, isInstant);
        this._isLayoutInited = true;
      };
      proto._init = proto.layout;
      proto._resetLayout = function() {
        this.getSize();
      };
      proto.getSize = function() {
        this.size = getSize(this.element);
      };
      proto._getMeasurement = function(measurement, size) {
        var option = this.options[measurement];
        var elem;
        if (!option) {
          this[measurement] = 0;
        } else {
          if (typeof option == "string") {
            elem = this.element.querySelector(option);
          } else if (option instanceof HTMLElement) {
            elem = option;
          }
          this[measurement] = elem ? getSize(elem)[size] : option;
        }
      };
      proto.layoutItems = function(items, isInstant) {
        items = this._getItemsForLayout(items);
        this._layoutItems(items, isInstant);
        this._postLayout();
      };
      proto._getItemsForLayout = function(items) {
        return items.filter(function(item) {
          return !item.isIgnored;
        });
      };
      proto._layoutItems = function(items, isInstant) {
        this._emitCompleteOnItems("layout", items);
        if (!items || !items.length) {
          return;
        }
        var queue = [];
        items.forEach(function(item) {
          var position = this._getItemLayoutPosition(item);
          position.item = item;
          position.isInstant = isInstant || item.isLayoutInstant;
          queue.push(position);
        }, this);
        this._processLayoutQueue(queue);
      };
      proto._getItemLayoutPosition = function() {
        return {
          x: 0,
          y: 0
        };
      };
      proto._processLayoutQueue = function(queue) {
        this.updateStagger();
        queue.forEach(function(obj, i) {
          this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
        }, this);
      };
      proto.updateStagger = function() {
        var stagger = this.options.stagger;
        if (stagger === null || stagger === void 0) {
          this.stagger = 0;
          return;
        }
        this.stagger = getMilliseconds(stagger);
        return this.stagger;
      };
      proto._positionItem = function(item, x, y, isInstant, i) {
        if (isInstant) {
          item.goTo(x, y);
        } else {
          item.stagger(i * this.stagger);
          item.moveTo(x, y);
        }
      };
      proto._postLayout = function() {
        this.resizeContainer();
      };
      proto.resizeContainer = function() {
        var isResizingContainer = this._getOption("resizeContainer");
        if (!isResizingContainer) {
          return;
        }
        var size = this._getContainerSize();
        if (size) {
          this._setContainerMeasure(size.width, true);
          this._setContainerMeasure(size.height, false);
        }
      };
      proto._getContainerSize = noop;
      proto._setContainerMeasure = function(measure, isWidth) {
        if (measure === void 0) {
          return;
        }
        var elemSize = this.size;
        if (elemSize.isBorderBox) {
          measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight + elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop + elemSize.borderTopWidth + elemSize.borderBottomWidth;
        }
        measure = Math.max(measure, 0);
        this.element.style[isWidth ? "width" : "height"] = measure + "px";
      };
      proto._emitCompleteOnItems = function(eventName, items) {
        var _this = this;
        function onComplete() {
          _this.dispatchEvent(eventName + "Complete", null, [items]);
        }
        var count = items.length;
        if (!items || !count) {
          onComplete();
          return;
        }
        var doneCount = 0;
        function tick() {
          doneCount++;
          if (doneCount == count) {
            onComplete();
          }
        }
        items.forEach(function(item) {
          item.once(eventName, tick);
        });
      };
      proto.dispatchEvent = function(type, event, args) {
        var emitArgs = event ? [event].concat(args) : args;
        this.emitEvent(type, emitArgs);
        if (jQuery) {
          this.$element = this.$element || jQuery(this.element);
          if (event) {
            var $event = jQuery.Event(event);
            $event.type = type;
            this.$element.trigger($event, args);
          } else {
            this.$element.trigger(type, args);
          }
        }
      };
      proto.ignore = function(elem) {
        var item = this.getItem(elem);
        if (item) {
          item.isIgnored = true;
        }
      };
      proto.unignore = function(elem) {
        var item = this.getItem(elem);
        if (item) {
          delete item.isIgnored;
        }
      };
      proto.stamp = function(elems) {
        elems = this._find(elems);
        if (!elems) {
          return;
        }
        this.stamps = this.stamps.concat(elems);
        elems.forEach(this.ignore, this);
      };
      proto.unstamp = function(elems) {
        elems = this._find(elems);
        if (!elems) {
          return;
        }
        elems.forEach(function(elem) {
          utils.removeFrom(this.stamps, elem);
          this.unignore(elem);
        }, this);
      };
      proto._find = function(elems) {
        if (!elems) {
          return;
        }
        if (typeof elems == "string") {
          elems = this.element.querySelectorAll(elems);
        }
        elems = utils.makeArray(elems);
        return elems;
      };
      proto._manageStamps = function() {
        if (!this.stamps || !this.stamps.length) {
          return;
        }
        this._getBoundingRect();
        this.stamps.forEach(this._manageStamp, this);
      };
      proto._getBoundingRect = function() {
        var boundingRect = this.element.getBoundingClientRect();
        var size = this.size;
        this._boundingRect = {
          left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
          top: boundingRect.top + size.paddingTop + size.borderTopWidth,
          right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
          bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
        };
      };
      proto._manageStamp = noop;
      proto._getElementOffset = function(elem) {
        var boundingRect = elem.getBoundingClientRect();
        var thisRect = this._boundingRect;
        var size = getSize(elem);
        var offset = {
          left: boundingRect.left - thisRect.left - size.marginLeft,
          top: boundingRect.top - thisRect.top - size.marginTop,
          right: thisRect.right - boundingRect.right - size.marginRight,
          bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
        };
        return offset;
      };
      proto.handleEvent = utils.handleEvent;
      proto.bindResize = function() {
        window2.addEventListener("resize", this);
        this.isResizeBound = true;
      };
      proto.unbindResize = function() {
        window2.removeEventListener("resize", this);
        this.isResizeBound = false;
      };
      proto.onresize = function() {
        this.resize();
      };
      utils.debounceMethod(Outlayer, "onresize", 100);
      proto.resize = function() {
        if (!this.isResizeBound || !this.needsResizeLayout()) {
          return;
        }
        this.layout();
      };
      proto.needsResizeLayout = function() {
        var size = getSize(this.element);
        var hasSizes = this.size && size;
        return hasSizes && size.innerWidth !== this.size.innerWidth;
      };
      proto.addItems = function(elems) {
        var items = this._itemize(elems);
        if (items.length) {
          this.items = this.items.concat(items);
        }
        return items;
      };
      proto.appended = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) {
          return;
        }
        this.layoutItems(items, true);
        this.reveal(items);
      };
      proto.prepended = function(elems) {
        var items = this._itemize(elems);
        if (!items.length) {
          return;
        }
        var previousItems = this.items.slice(0);
        this.items = items.concat(previousItems);
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(items, true);
        this.reveal(items);
        this.layoutItems(previousItems);
      };
      proto.reveal = function(items) {
        this._emitCompleteOnItems("reveal", items);
        if (!items || !items.length) {
          return;
        }
        var stagger = this.updateStagger();
        items.forEach(function(item, i) {
          item.stagger(i * stagger);
          item.reveal();
        });
      };
      proto.hide = function(items) {
        this._emitCompleteOnItems("hide", items);
        if (!items || !items.length) {
          return;
        }
        var stagger = this.updateStagger();
        items.forEach(function(item, i) {
          item.stagger(i * stagger);
          item.hide();
        });
      };
      proto.revealItemElements = function(elems) {
        var items = this.getItems(elems);
        this.reveal(items);
      };
      proto.hideItemElements = function(elems) {
        var items = this.getItems(elems);
        this.hide(items);
      };
      proto.getItem = function(elem) {
        for (var i = 0; i < this.items.length; i++) {
          var item = this.items[i];
          if (item.element == elem) {
            return item;
          }
        }
      };
      proto.getItems = function(elems) {
        elems = utils.makeArray(elems);
        var items = [];
        elems.forEach(function(elem) {
          var item = this.getItem(elem);
          if (item) {
            items.push(item);
          }
        }, this);
        return items;
      };
      proto.remove = function(elems) {
        var removeItems = this.getItems(elems);
        this._emitCompleteOnItems("remove", removeItems);
        if (!removeItems || !removeItems.length) {
          return;
        }
        removeItems.forEach(function(item) {
          item.remove();
          utils.removeFrom(this.items, item);
        }, this);
      };
      proto.destroy = function() {
        var style = this.element.style;
        style.height = "";
        style.position = "";
        style.width = "";
        this.items.forEach(function(item) {
          item.destroy();
        });
        this.unbindResize();
        var id = this.element.outlayerGUID;
        delete instances[id];
        delete this.element.outlayerGUID;
        if (jQuery) {
          jQuery.removeData(this.element, this.constructor.namespace);
        }
      };
      Outlayer.data = function(elem) {
        elem = utils.getQueryElement(elem);
        var id = elem && elem.outlayerGUID;
        return id && instances[id];
      };
      Outlayer.create = function(namespace, options) {
        var Layout = subclass(Outlayer);
        Layout.defaults = utils.extend({}, Outlayer.defaults);
        utils.extend(Layout.defaults, options);
        Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);
        Layout.namespace = namespace;
        Layout.data = Outlayer.data;
        Layout.Item = subclass(Item);
        utils.htmlInit(Layout, namespace);
        if (jQuery && jQuery.bridget) {
          jQuery.bridget(namespace, Layout);
        }
        return Layout;
      };
      function subclass(Parent) {
        function SubClass() {
          Parent.apply(this, arguments);
        }
        SubClass.prototype = Object.create(Parent.prototype);
        SubClass.prototype.constructor = SubClass;
        return SubClass;
      }
      var msUnits = {
        ms: 1,
        s: 1e3
      };
      function getMilliseconds(time) {
        if (typeof time == "number") {
          return time;
        }
        var matches = time.match(/(^\d*\.?\d*)(\w*)/);
        var num = matches && matches[1];
        var unit = matches && matches[2];
        if (!num.length) {
          return 0;
        }
        num = parseFloat(num);
        var mult = msUnits[unit] || 1;
        return num * mult;
      }
      Outlayer.Item = Item;
      return Outlayer;
    });
  }
});

// node_modules/isotope-layout/js/item.js
var require_item2 = __commonJS({
  "node_modules/isotope-layout/js/item.js"(exports, module) {
    "use strict";
    (function(window2, factory) {
      if (typeof define == "function" && define.amd) {
        define(["outlayer/outlayer"], factory);
      } else if (typeof module == "object" && module.exports) {
        module.exports = factory(require_outlayer());
      } else {
        window2.Isotope = window2.Isotope || {};
        window2.Isotope.Item = factory(window2.Outlayer);
      }
    })(window, function factory(Outlayer) {
      "use strict";
      function Item() {
        Outlayer.Item.apply(this, arguments);
      }
      var proto = Item.prototype = Object.create(Outlayer.Item.prototype);
      var _create = proto._create;
      proto._create = function() {
        this.id = this.layout.itemGUID++;
        _create.call(this);
        this.sortData = {};
      };
      proto.updateSortData = function() {
        if (this.isIgnored) {
          return;
        }
        this.sortData.id = this.id;
        this.sortData["original-order"] = this.id;
        this.sortData.random = Math.random();
        var getSortData = this.layout.options.getSortData;
        var sorters = this.layout._sorters;
        for (var key in getSortData) {
          var sorter = sorters[key];
          this.sortData[key] = sorter(this.element, this);
        }
      };
      var _destroy = proto.destroy;
      proto.destroy = function() {
        _destroy.apply(this, arguments);
        this.css({
          display: ""
        });
      };
      return Item;
    });
  }
});

// node_modules/isotope-layout/js/layout-mode.js
var require_layout_mode = __commonJS({
  "node_modules/isotope-layout/js/layout-mode.js"(exports, module) {
    "use strict";
    (function(window2, factory) {
      if (typeof define == "function" && define.amd) {
        define(["get-size/get-size", "outlayer/outlayer"], factory);
      } else if (typeof module == "object" && module.exports) {
        module.exports = factory(require_get_size(), require_outlayer());
      } else {
        window2.Isotope = window2.Isotope || {};
        window2.Isotope.LayoutMode = factory(window2.getSize, window2.Outlayer);
      }
    })(window, function factory(getSize, Outlayer) {
      "use strict";
      function LayoutMode(isotope) {
        this.isotope = isotope;
        if (isotope) {
          this.options = isotope.options[this.namespace];
          this.element = isotope.element;
          this.items = isotope.filteredItems;
          this.size = isotope.size;
        }
      }
      var proto = LayoutMode.prototype;
      var facadeMethods = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
      facadeMethods.forEach(function(methodName) {
        proto[methodName] = function() {
          return Outlayer.prototype[methodName].apply(this.isotope, arguments);
        };
      });
      proto.needsVerticalResizeLayout = function() {
        var size = getSize(this.isotope.element);
        var hasSizes = this.isotope.size && size;
        return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
      };
      proto._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments);
      };
      proto.getColumnWidth = function() {
        this.getSegmentSize("column", "Width");
      };
      proto.getRowHeight = function() {
        this.getSegmentSize("row", "Height");
      };
      proto.getSegmentSize = function(segment, size) {
        var segmentName = segment + size;
        var outerSize = "outer" + size;
        this._getMeasurement(segmentName, outerSize);
        if (this[segmentName]) {
          return;
        }
        var firstItemSize = this.getFirstItemSize();
        this[segmentName] = firstItemSize && firstItemSize[outerSize] || // or size of container
        this.isotope.size["inner" + size];
      };
      proto.getFirstItemSize = function() {
        var firstItem = this.isotope.filteredItems[0];
        return firstItem && firstItem.element && getSize(firstItem.element);
      };
      proto.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments);
      };
      proto.getSize = function() {
        this.isotope.getSize();
        this.size = this.isotope.size;
      };
      LayoutMode.modes = {};
      LayoutMode.create = function(namespace, options) {
        function Mode() {
          LayoutMode.apply(this, arguments);
        }
        Mode.prototype = Object.create(proto);
        Mode.prototype.constructor = Mode;
        if (options) {
          Mode.options = options;
        }
        Mode.prototype.namespace = namespace;
        LayoutMode.modes[namespace] = Mode;
        return Mode;
      };
      return LayoutMode;
    });
  }
});

// node_modules/masonry-layout/masonry.js
var require_masonry = __commonJS({
  "node_modules/masonry-layout/masonry.js"(exports, module) {
    "use strict";
    (function(window2, factory) {
      if (typeof define == "function" && define.amd) {
        define(["outlayer/outlayer", "get-size/get-size"], factory);
      } else if (typeof module == "object" && module.exports) {
        module.exports = factory(require_outlayer(), require_get_size());
      } else {
        window2.Masonry = factory(window2.Outlayer, window2.getSize);
      }
    })(window, function factory(Outlayer, getSize) {
      "use strict";
      var Masonry = Outlayer.create("masonry");
      Masonry.compatOptions.fitWidth = "isFitWidth";
      var proto = Masonry.prototype;
      proto._resetLayout = function() {
        this.getSize();
        this._getMeasurement("columnWidth", "outerWidth");
        this._getMeasurement("gutter", "outerWidth");
        this.measureColumns();
        this.colYs = [];
        for (var i = 0; i < this.cols; i++) {
          this.colYs.push(0);
        }
        this.maxY = 0;
        this.horizontalColIndex = 0;
      };
      proto.measureColumns = function() {
        this.getContainerWidth();
        if (!this.columnWidth) {
          var firstItem = this.items[0];
          var firstItemElem = firstItem && firstItem.element;
          this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth || // if first elem has no width, default to size of container
          this.containerWidth;
        }
        var columnWidth = this.columnWidth += this.gutter;
        var containerWidth = this.containerWidth + this.gutter;
        var cols = containerWidth / columnWidth;
        var excess = columnWidth - containerWidth % columnWidth;
        var mathMethod = excess && excess < 1 ? "round" : "floor";
        cols = Math[mathMethod](cols);
        this.cols = Math.max(cols, 1);
      };
      proto.getContainerWidth = function() {
        var isFitWidth = this._getOption("fitWidth");
        var container = isFitWidth ? this.element.parentNode : this.element;
        var size = getSize(container);
        this.containerWidth = size && size.innerWidth;
      };
      proto._getItemLayoutPosition = function(item) {
        item.getSize();
        var remainder = item.size.outerWidth % this.columnWidth;
        var mathMethod = remainder && remainder < 1 ? "round" : "ceil";
        var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
        colSpan = Math.min(colSpan, this.cols);
        var colPosMethod = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition";
        var colPosition = this[colPosMethod](colSpan, item);
        var position = {
          x: this.columnWidth * colPosition.col,
          y: colPosition.y
        };
        var setHeight = colPosition.y + item.size.outerHeight;
        var setMax = colSpan + colPosition.col;
        for (var i = colPosition.col; i < setMax; i++) {
          this.colYs[i] = setHeight;
        }
        return position;
      };
      proto._getTopColPosition = function(colSpan) {
        var colGroup = this._getTopColGroup(colSpan);
        var minimumY = Math.min.apply(Math, colGroup);
        return {
          col: colGroup.indexOf(minimumY),
          y: minimumY
        };
      };
      proto._getTopColGroup = function(colSpan) {
        if (colSpan < 2) {
          return this.colYs;
        }
        var colGroup = [];
        var groupCount = this.cols + 1 - colSpan;
        for (var i = 0; i < groupCount; i++) {
          colGroup[i] = this._getColGroupY(i, colSpan);
        }
        return colGroup;
      };
      proto._getColGroupY = function(col, colSpan) {
        if (colSpan < 2) {
          return this.colYs[col];
        }
        var groupColYs = this.colYs.slice(col, col + colSpan);
        return Math.max.apply(Math, groupColYs);
      };
      proto._getHorizontalColPosition = function(colSpan, item) {
        var col = this.horizontalColIndex % this.cols;
        var isOver = colSpan > 1 && col + colSpan > this.cols;
        col = isOver ? 0 : col;
        var hasSize = item.size.outerWidth && item.size.outerHeight;
        this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;
        return {
          col,
          y: this._getColGroupY(col, colSpan)
        };
      };
      proto._manageStamp = function(stamp) {
        var stampSize = getSize(stamp);
        var offset = this._getElementOffset(stamp);
        var isOriginLeft = this._getOption("originLeft");
        var firstX = isOriginLeft ? offset.left : offset.right;
        var lastX = firstX + stampSize.outerWidth;
        var firstCol = Math.floor(firstX / this.columnWidth);
        firstCol = Math.max(0, firstCol);
        var lastCol = Math.floor(lastX / this.columnWidth);
        lastCol -= lastX % this.columnWidth ? 0 : 1;
        lastCol = Math.min(this.cols - 1, lastCol);
        var isOriginTop = this._getOption("originTop");
        var stampMaxY = (isOriginTop ? offset.top : offset.bottom) + stampSize.outerHeight;
        for (var i = firstCol; i <= lastCol; i++) {
          this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
        }
      };
      proto._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var size = {
          height: this.maxY
        };
        if (this._getOption("fitWidth")) {
          size.width = this._getContainerFitWidth();
        }
        return size;
      };
      proto._getContainerFitWidth = function() {
        var unusedCols = 0;
        var i = this.cols;
        while (--i) {
          if (this.colYs[i] !== 0) {
            break;
          }
          unusedCols++;
        }
        return (this.cols - unusedCols) * this.columnWidth - this.gutter;
      };
      proto.needsResizeLayout = function() {
        var previousWidth = this.containerWidth;
        this.getContainerWidth();
        return previousWidth != this.containerWidth;
      };
      return Masonry;
    });
  }
});

// node_modules/isotope-layout/js/layout-modes/masonry.js
var require_masonry2 = __commonJS({
  "node_modules/isotope-layout/js/layout-modes/masonry.js"(exports, module) {
    "use strict";
    (function(window2, factory) {
      if (typeof define == "function" && define.amd) {
        define(["../layout-mode", "masonry-layout/masonry"], factory);
      } else if (typeof module == "object" && module.exports) {
        module.exports = factory(require_layout_mode(), require_masonry());
      } else {
        factory(window2.Isotope.LayoutMode, window2.Masonry);
      }
    })(window, function factory(LayoutMode, Masonry) {
      "use strict";
      var MasonryMode = LayoutMode.create("masonry");
      var proto = MasonryMode.prototype;
      var keepModeMethods = {
        _getElementOffset: true,
        layout: true,
        _getMeasurement: true
      };
      for (var method in Masonry.prototype) {
        if (!keepModeMethods[method]) {
          proto[method] = Masonry.prototype[method];
        }
      }
      var measureColumns = proto.measureColumns;
      proto.measureColumns = function() {
        this.items = this.isotope.filteredItems;
        measureColumns.call(this);
      };
      var _getOption = proto._getOption;
      proto._getOption = function(option) {
        if (option == "fitWidth") {
          return this.options.isFitWidth !== void 0 ? this.options.isFitWidth : this.options.fitWidth;
        }
        return _getOption.apply(this.isotope, arguments);
      };
      return MasonryMode;
    });
  }
});

// node_modules/isotope-layout/js/layout-modes/fit-rows.js
var require_fit_rows = __commonJS({
  "node_modules/isotope-layout/js/layout-modes/fit-rows.js"(exports, module) {
    "use strict";
    (function(window2, factory) {
      if (typeof define == "function" && define.amd) {
        define(["../layout-mode"], factory);
      } else if (typeof exports == "object") {
        module.exports = factory(require_layout_mode());
      } else {
        factory(window2.Isotope.LayoutMode);
      }
    })(window, function factory(LayoutMode) {
      "use strict";
      var FitRows = LayoutMode.create("fitRows");
      var proto = FitRows.prototype;
      proto._resetLayout = function() {
        this.x = 0;
        this.y = 0;
        this.maxY = 0;
        this._getMeasurement("gutter", "outerWidth");
      };
      proto._getItemLayoutPosition = function(item) {
        item.getSize();
        var itemWidth = item.size.outerWidth + this.gutter;
        var containerWidth = this.isotope.size.innerWidth + this.gutter;
        if (this.x !== 0 && itemWidth + this.x > containerWidth) {
          this.x = 0;
          this.y = this.maxY;
        }
        var position = {
          x: this.x,
          y: this.y
        };
        this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
        this.x += itemWidth;
        return position;
      };
      proto._getContainerSize = function() {
        return {
          height: this.maxY
        };
      };
      return FitRows;
    });
  }
});

// node_modules/isotope-layout/js/layout-modes/vertical.js
var require_vertical = __commonJS({
  "node_modules/isotope-layout/js/layout-modes/vertical.js"(exports, module) {
    "use strict";
    (function(window2, factory) {
      if (typeof define == "function" && define.amd) {
        define(["../layout-mode"], factory);
      } else if (typeof module == "object" && module.exports) {
        module.exports = factory(require_layout_mode());
      } else {
        factory(window2.Isotope.LayoutMode);
      }
    })(window, function factory(LayoutMode) {
      "use strict";
      var Vertical = LayoutMode.create("vertical", {
        horizontalAlignment: 0
      });
      var proto = Vertical.prototype;
      proto._resetLayout = function() {
        this.y = 0;
      };
      proto._getItemLayoutPosition = function(item) {
        item.getSize();
        var x = (this.isotope.size.innerWidth - item.size.outerWidth) * this.options.horizontalAlignment;
        var y = this.y;
        this.y += item.size.outerHeight;
        return {
          x,
          y
        };
      };
      proto._getContainerSize = function() {
        return {
          height: this.y
        };
      };
      return Vertical;
    });
  }
});

// node_modules/isotope-layout/js/isotope.js
var require_isotope = __commonJS({
  "node_modules/isotope-layout/js/isotope.js"(exports, module) {
    "use strict";
    (function(window2, factory) {
      if (typeof define == "function" && define.amd) {
        define([
          "outlayer/outlayer",
          "get-size/get-size",
          "desandro-matches-selector/matches-selector",
          "fizzy-ui-utils/utils",
          "./item",
          "./layout-mode",
          // include default layout modes
          "./layout-modes/masonry",
          "./layout-modes/fit-rows",
          "./layout-modes/vertical"
        ], function(Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
          return factory(window2, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode);
        });
      } else if (typeof module == "object" && module.exports) {
        module.exports = factory(
          window2,
          require_outlayer(),
          require_get_size(),
          require_matches_selector(),
          require_utils(),
          require_item2(),
          require_layout_mode(),
          // include default layout modes
          require_masonry2(),
          require_fit_rows(),
          require_vertical()
        );
      } else {
        window2.Isotope = factory(window2, window2.Outlayer, window2.getSize, window2.matchesSelector, window2.fizzyUIUtils, window2.Isotope.Item, window2.Isotope.LayoutMode);
      }
    })(window, function factory(window2, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
      "use strict";
      var jQuery = window2.jQuery;
      var trim = String.prototype.trim ? function(str) {
        return str.trim();
      } : function(str) {
        return str.replace(/^\s+|\s+$/g, "");
      };
      var Isotope2 = Outlayer.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: true,
        sortAscending: true
      });
      Isotope2.Item = Item;
      Isotope2.LayoutMode = LayoutMode;
      var proto = Isotope2.prototype;
      proto._create = function() {
        this.itemGUID = 0;
        this._sorters = {};
        this._getSorters();
        Outlayer.prototype._create.call(this);
        this.modes = {};
        this.filteredItems = this.items;
        this.sortHistory = ["original-order"];
        for (var name in LayoutMode.modes) {
          this._initLayoutMode(name);
        }
      };
      proto.reloadItems = function() {
        this.itemGUID = 0;
        Outlayer.prototype.reloadItems.call(this);
      };
      proto._itemize = function() {
        var items = Outlayer.prototype._itemize.apply(this, arguments);
        for (var i = 0; i < items.length; i++) {
          var item = items[i];
          item.id = this.itemGUID++;
        }
        this._updateItemsSortData(items);
        return items;
      };
      proto._initLayoutMode = function(name) {
        var Mode = LayoutMode.modes[name];
        var initialOpts = this.options[name] || {};
        this.options[name] = Mode.options ? utils.extend(Mode.options, initialOpts) : initialOpts;
        this.modes[name] = new Mode(this);
      };
      proto.layout = function() {
        if (!this._isLayoutInited && this._getOption("initLayout")) {
          this.arrange();
          return;
        }
        this._layout();
      };
      proto._layout = function() {
        var isInstant = this._getIsInstant();
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(this.filteredItems, isInstant);
        this._isLayoutInited = true;
      };
      proto.arrange = function(opts) {
        this.option(opts);
        this._getIsInstant();
        var filtered = this._filter(this.items);
        this.filteredItems = filtered.matches;
        this._bindArrangeComplete();
        if (this._isInstant) {
          this._noTransition(this._hideReveal, [filtered]);
        } else {
          this._hideReveal(filtered);
        }
        this._sort();
        this._layout();
      };
      proto._init = proto.arrange;
      proto._hideReveal = function(filtered) {
        this.reveal(filtered.needReveal);
        this.hide(filtered.needHide);
      };
      proto._getIsInstant = function() {
        var isLayoutInstant = this._getOption("layoutInstant");
        var isInstant = isLayoutInstant !== void 0 ? isLayoutInstant : !this._isLayoutInited;
        this._isInstant = isInstant;
        return isInstant;
      };
      proto._bindArrangeComplete = function() {
        var isLayoutComplete, isHideComplete, isRevealComplete;
        var _this = this;
        function arrangeParallelCallback() {
          if (isLayoutComplete && isHideComplete && isRevealComplete) {
            _this.dispatchEvent("arrangeComplete", null, [_this.filteredItems]);
          }
        }
        this.once("layoutComplete", function() {
          isLayoutComplete = true;
          arrangeParallelCallback();
        });
        this.once("hideComplete", function() {
          isHideComplete = true;
          arrangeParallelCallback();
        });
        this.once("revealComplete", function() {
          isRevealComplete = true;
          arrangeParallelCallback();
        });
      };
      proto._filter = function(items) {
        var filter = this.options.filter;
        filter = filter || "*";
        var matches = [];
        var hiddenMatched = [];
        var visibleUnmatched = [];
        var test = this._getFilterTest(filter);
        for (var i = 0; i < items.length; i++) {
          var item = items[i];
          if (item.isIgnored) {
            continue;
          }
          var isMatched = test(item);
          if (isMatched) {
            matches.push(item);
          }
          if (isMatched && item.isHidden) {
            hiddenMatched.push(item);
          } else if (!isMatched && !item.isHidden) {
            visibleUnmatched.push(item);
          }
        }
        return {
          matches,
          needReveal: hiddenMatched,
          needHide: visibleUnmatched
        };
      };
      proto._getFilterTest = function(filter) {
        if (jQuery && this.options.isJQueryFiltering) {
          return function(item) {
            return jQuery(item.element).is(filter);
          };
        }
        if (typeof filter == "function") {
          return function(item) {
            return filter(item.element);
          };
        }
        return function(item) {
          return matchesSelector(item.element, filter);
        };
      };
      proto.updateSortData = function(elems) {
        var items;
        if (elems) {
          elems = utils.makeArray(elems);
          items = this.getItems(elems);
        } else {
          items = this.items;
        }
        this._getSorters();
        this._updateItemsSortData(items);
      };
      proto._getSorters = function() {
        var getSortData = this.options.getSortData;
        for (var key in getSortData) {
          var sorter = getSortData[key];
          this._sorters[key] = mungeSorter(sorter);
        }
      };
      proto._updateItemsSortData = function(items) {
        var len = items && items.length;
        for (var i = 0; len && i < len; i++) {
          var item = items[i];
          item.updateSortData();
        }
      };
      var mungeSorter = /* @__PURE__ */ function() {
        function mungeSorter2(sorter) {
          if (typeof sorter != "string") {
            return sorter;
          }
          var args = trim(sorter).split(" ");
          var query = args[0];
          var attrMatch = query.match(/^\[(.+)\]$/);
          var attr = attrMatch && attrMatch[1];
          var getValue = getValueGetter(attr, query);
          var parser = Isotope2.sortDataParsers[args[1]];
          sorter = parser ? function(elem) {
            return elem && parser(getValue(elem));
          } : (
            // otherwise just return value
            function(elem) {
              return elem && getValue(elem);
            }
          );
          return sorter;
        }
        function getValueGetter(attr, query) {
          if (attr) {
            return function getAttribute(elem) {
              return elem.getAttribute(attr);
            };
          }
          return function getChildText(elem) {
            var child = elem.querySelector(query);
            return child && child.textContent;
          };
        }
        return mungeSorter2;
      }();
      Isotope2.sortDataParsers = {
        "parseInt": function(val) {
          return parseInt(val, 10);
        },
        "parseFloat": function(val) {
          return parseFloat(val);
        }
      };
      proto._sort = function() {
        if (!this.options.sortBy) {
          return;
        }
        var sortBys = utils.makeArray(this.options.sortBy);
        if (!this._getIsSameSortBy(sortBys)) {
          this.sortHistory = sortBys.concat(this.sortHistory);
        }
        var itemSorter = getItemSorter(this.sortHistory, this.options.sortAscending);
        this.filteredItems.sort(itemSorter);
      };
      proto._getIsSameSortBy = function(sortBys) {
        for (var i = 0; i < sortBys.length; i++) {
          if (sortBys[i] != this.sortHistory[i]) {
            return false;
          }
        }
        return true;
      };
      function getItemSorter(sortBys, sortAsc) {
        return function sorter(itemA, itemB) {
          for (var i = 0; i < sortBys.length; i++) {
            var sortBy = sortBys[i];
            var a = itemA.sortData[sortBy];
            var b = itemB.sortData[sortBy];
            if (a > b || a < b) {
              var isAscending = sortAsc[sortBy] !== void 0 ? sortAsc[sortBy] : sortAsc;
              var direction = isAscending ? 1 : -1;
              return (a > b ? 1 : -1) * direction;
            }
          }
          return 0;
        };
      }
      proto._mode = function() {
        var layoutMode = this.options.layoutMode;
        var mode = this.modes[layoutMode];
        if (!mode) {
          throw new Error("No layout mode: " + layoutMode);
        }
        mode.options = this.options[layoutMode];
        return mode;
      };
      proto._resetLayout = function() {
        Outlayer.prototype._resetLayout.call(this);
        this._mode()._resetLayout();
      };
      proto._getItemLayoutPosition = function(item) {
        return this._mode()._getItemLayoutPosition(item);
      };
      proto._manageStamp = function(stamp) {
        this._mode()._manageStamp(stamp);
      };
      proto._getContainerSize = function() {
        return this._mode()._getContainerSize();
      };
      proto.needsResizeLayout = function() {
        return this._mode().needsResizeLayout();
      };
      proto.appended = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) {
          return;
        }
        var filteredItems = this._filterRevealAdded(items);
        this.filteredItems = this.filteredItems.concat(filteredItems);
      };
      proto.prepended = function(elems) {
        var items = this._itemize(elems);
        if (!items.length) {
          return;
        }
        this._resetLayout();
        this._manageStamps();
        var filteredItems = this._filterRevealAdded(items);
        this.layoutItems(this.filteredItems);
        this.filteredItems = filteredItems.concat(this.filteredItems);
        this.items = items.concat(this.items);
      };
      proto._filterRevealAdded = function(items) {
        var filtered = this._filter(items);
        this.hide(filtered.needHide);
        this.reveal(filtered.matches);
        this.layoutItems(filtered.matches, true);
        return filtered.matches;
      };
      proto.insert = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) {
          return;
        }
        var i, item;
        var len = items.length;
        for (i = 0; i < len; i++) {
          item = items[i];
          this.element.appendChild(item.element);
        }
        var filteredInsertItems = this._filter(items).matches;
        for (i = 0; i < len; i++) {
          items[i].isLayoutInstant = true;
        }
        this.arrange();
        for (i = 0; i < len; i++) {
          delete items[i].isLayoutInstant;
        }
        this.reveal(filteredInsertItems);
      };
      var _remove = proto.remove;
      proto.remove = function(elems) {
        elems = utils.makeArray(elems);
        var removeItems = this.getItems(elems);
        _remove.call(this, elems);
        var len = removeItems && removeItems.length;
        for (var i = 0; len && i < len; i++) {
          var item = removeItems[i];
          utils.removeFrom(this.filteredItems, item);
        }
      };
      proto.shuffle = function() {
        for (var i = 0; i < this.items.length; i++) {
          var item = this.items[i];
          item.sortData.random = Math.random();
        }
        this.options.sortBy = "random";
        this._sort();
        this._layout();
      };
      proto._noTransition = function(fn, args) {
        var transitionDuration = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var returnValue = fn.apply(this, args);
        this.options.transitionDuration = transitionDuration;
        return returnValue;
      };
      proto.getFilteredItemElements = function() {
        return this.filteredItems.map(function(item) {
          return item.element;
        });
      };
      return Isotope2;
    });
  }
});

// src/app/gallery/gallery/gallery.component.ts
var import_isotope_layout = __toESM(require_isotope());

// src/app/gallery/services/gallery.service.ts
var GalleryService = class _GalleryService {
  apiSrv = inject(AppWriteService);
  _imgLoader = inject(IMAGE_LOADER);
  _gallery = signal([]);
  requestStatus = signal("INITIAL");
  gallery = computed(() => this._gallery());
  getGalleryImages() {
    return __async(this, null, function* () {
      this.requestStatus.set("LOADING");
      let imageList = [];
      try {
        const data = yield this.apiSrv.getColletionDocuments(APP_WRITE_CONFIG.galleryCollectionId, [Query.orderAsc("no")]);
        imageList = yield this._buildImageList(data.documents);
        this._gallery.set(imageList);
        this.requestStatus.set("SUCCESS");
      } catch (error) {
        this._gallery.set([]);
        this.requestStatus.set("ERROR");
      }
      return imageList;
    });
  }
  _buildImageList(list) {
    return __async(this, null, function* () {
      return list.map((it, i) => {
        const rta = {
          id: it.$id ?? i.toString(),
          text: it.title ?? "Item" + i,
          imageUrl: list[i].url,
          imageWidth: list[i].width,
          imageHeight: list[i].height,
          imageRatio: list[i].width / list[i].height
        };
        return rta;
      });
    });
  }
  static \u0275fac = function GalleryService_Factory(\u0275t) {
    return new (\u0275t || _GalleryService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GalleryService, factory: _GalleryService.\u0275fac });
};

// src/app/gallery/gallery/gallery.component.ts
var _c0 = ["galleryElem"];
var _c1 = ["imgItem"];
var _forTrack0 = ($index, $item) => $item.id;
var GalleryComponent_Defer_13_DepsFn = () => [import("./chunk-FXCQY2BH.js").then((m) => m.FooterComponent)];
var _c2 = (a0, a1) => ({ "col-md-4": a0, "col-md-8": a1 });
var _c3 = (a0, a1) => ({ height: a0, width: a1 });
function GalleryComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 10)(2, "a", 11);
    \u0275\u0275listener("click", function GalleryComponent_For_9_Template_a_click_2_listener() {
      const \u0275$index_15_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openGallery(\u0275$index_15_r3));
    });
    \u0275\u0275elementStart(3, "span", 12)(4, "span", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "span", 14);
    \u0275\u0275elementStart(7, "img", 15, 1);
    \u0275\u0275listener("load", function GalleryComponent_For_9_Template_img_load_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onImageLoaded());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const item_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(6, _c2, ((tmp_13_0 = item_r4.imageRatio) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : 1) < 2, ((tmp_13_0 = item_r4.imageRatio) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : 1) >= 2));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r4.text);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngSrc", item_r4.imageUrl)("width", item_r4.imageWidth)("height", item_r4.imageHeight)("loaderParams", \u0275\u0275pureFunction2(9, _c3, ctx_r0.floor(item_r4.imageHeight * 0.4), ctx_r0.floor(item_r4.imageWidth * 0.4)));
  }
}
function GalleryComponent_ForEmpty_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1, "There are no images available in gallery.");
    \u0275\u0275elementEnd();
  }
}
function GalleryComponent_ForEmpty_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1, "Loading gallery...");
    \u0275\u0275elementEnd();
  }
}
function GalleryComponent_ForEmpty_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 17);
    \u0275\u0275element(3, "path", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, GalleryComponent_ForEmpty_10_Conditional_4_Template, 2, 0, "h4")(5, GalleryComponent_ForEmpty_10_Conditional_5_Template, 2, 0, "h4");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.status() !== "LOADING" ? 4 : 5);
  }
}
function GalleryComponent_Defer_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "zafira-footer", 19);
  }
}
function GalleryComponent_DeferPlaceholder_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Loading footer...");
    \u0275\u0275elementEnd();
  }
}
var GalleryComponent = class _GalleryComponent {
  _iso = null;
  _gallerySrv = inject(GalleryService);
  _gallery = inject(Gallery);
  _galleryRef;
  _imageLoader = inject(IMAGE_LOADER);
  _dialog = inject(MatDialog);
  _imagesLoaded = 0;
  _totalImages = 0;
  floor(w) {
    return Math.floor(w);
  }
  gallery = this._gallerySrv.gallery;
  status = this._gallerySrv.requestStatus;
  grid = viewChild.required("galleryElem");
  gridElements = viewChildren("imgItem");
  galleryItems = [];
  // Configuración para la galería
  galleryConfig = {
    thumbPosition: "bottom",
    imageSize: "cover",
    loadingStrategy: "preload",
    thumbWidth: 120,
    thumbHeight: 90
  };
  galleryEffect = effect(() => {
    if (this.gallery().length > 0 && this.gridElements().length > 0) {
      this._totalImages = this.gallery().length;
      this._imagesLoaded = 0;
      const elem = this.grid().nativeElement;
      if (elem) {
        if (this._iso) {
          this._iso.destroy();
        }
        this._iso = new import_isotope_layout.default(elem, {
          itemSelector: ".item",
          filter: "*",
          percentPosition: true,
          layoutMode: "masonry"
        });
        this._checkAndLayoutIfAllImagesLoaded();
      }
    }
  }, { allowSignalWrites: true });
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._gallerySrv.getGalleryImages();
      this.setupGallery();
    });
  }
  ngAfterViewInit() {
  }
  onImageLoaded() {
    this._imagesLoaded++;
    this._checkAndLayoutIfAllImagesLoaded();
  }
  _checkAndLayoutIfAllImagesLoaded() {
    if (this._imagesLoaded >= this._totalImages && this._iso) {
      setTimeout(() => {
        if (this._iso) {
          this._iso.layout();
          setTimeout(() => {
            if (this._iso) {
              this._iso.layout();
            }
          }, 300);
        }
      }, 100);
    }
  }
  setupGallery() {
    if (this.gallery().length > 0) {
      this._galleryRef = this._gallery.ref("galleryLightbox", this.galleryConfig);
    }
  }
  // Método actualizado para abrir el diálogo en lugar de usar la galería directamente
  openGallery(index) {
    const dialogRef = this._dialog.open(GalleryDialogComponent, {
      width: "100vw",
      height: "100vh",
      maxWidth: "100vw",
      maxHeight: "100vh",
      panelClass: "fullscreen-dialog",
      data: {
        images: this.gallery(),
        initialIndex: index
      }
    });
  }
  ngOnDestroy() {
    if (this._iso) {
      this._iso.destroy();
      this._iso = null;
    }
    if (this._galleryRef) {
      this._galleryRef.reset();
    }
    this.galleryEffect.destroy();
  }
  static \u0275fac = function GalleryComponent_Factory(\u0275t) {
    return new (\u0275t || _GalleryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GalleryComponent, selectors: [["zafira-gallery"]], viewQuery: function GalleryComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.grid, _c0, 5);
      \u0275\u0275viewQuerySignal(ctx.gridElements, _c1, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, standalone: true, features: [\u0275\u0275ProvidersFeature([GalleryService]), \u0275\u0275StandaloneFeature], decls: 15, vars: 1, consts: [["galleryElem", ""], ["imgItem", ""], ["id", "background"], ["id", "content-absolute"], ["title", "Gallery", "subtitle", "Latest"], ["id", "section-main", "data-wow-delay", "1.5s", "aria-label", "section-menu", 1, "no-bg", "no-top", "wow", "fadeInUp", "animated"], [1, "container"], ["id", "gallery-photo", 1, "row", "g-4"], [1, "item", 3, "ngClass"], [1, "col-12", "text-center"], [1, "de-image-hover"], [1, "gallery-item", 3, "click"], [1, "dih-title-wrap"], [1, "dih-title"], [1, "dih-overlay"], ["alt", "", 1, "lazy", "img-fluid", 3, "load", "ngSrc", "width", "height", "loaderParams"], [1, "d-block"], ["width", "100px", "height", "100px", "viewBox", "0 0 32 32", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M 6 6 C 4.355469 6 3 7.355469 3 9 L 3 15.78125 C 2.390625 16.332031 2 17.121094 2 18 L 2 27 L 7 27 L 7 25 L 25 25 L 25 27 L 30 27 L 30 18 C 30 17.121094 29.609375 16.332031 29 15.78125 L 29 9 C 29 7.355469 27.644531 6 26 6 Z M 6 8 L 26 8 C 26.554688 8 27 8.445313 27 9 L 27 15 L 25 15 L 25 14 C 25 12.355469 23.644531 11 22 11 L 18 11 C 17.234375 11 16.53125 11.300781 16 11.78125 C 15.46875 11.300781 14.765625 11 14 11 L 10 11 C 8.355469 11 7 12.355469 7 14 L 7 15 L 5 15 L 5 9 C 5 8.445313 5.445313 8 6 8 Z M 10 13 L 14 13 C 14.554688 13 15 13.445313 15 14 L 15 15 L 9 15 L 9 14 C 9 13.445313 9.445313 13 10 13 Z M 18 13 L 22 13 C 22.554688 13 23 13.445313 23 14 L 23 15 L 17 15 L 17 14 C 17 13.445313 17.445313 13 18 13 Z M 5 17 L 27 17 C 27.554688 17 28 17.445313 28 18 L 28 25 L 27 25 L 27 23 L 5 23 L 5 25 L 4 25 L 4 18 C 4 17.445313 4.445313 17 5 17 Z", "fill", "#ffffff"], ["containerClass", "container"]], template: function GalleryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "zafira-float-text")(1, "div", 2);
      \u0275\u0275elementStart(2, "div", 3);
      \u0275\u0275element(3, "zafira-subheader", 4);
      \u0275\u0275elementStart(4, "section", 5)(5, "div", 6)(6, "div", 7, 0);
      \u0275\u0275repeaterCreate(8, GalleryComponent_For_9_Template, 9, 12, "div", 8, _forTrack0, false, GalleryComponent_ForEmpty_10_Template, 6, 1, "div", 9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(11, GalleryComponent_Defer_11_Template, 1, 0)(12, GalleryComponent_DeferPlaceholder_12_Template, 2, 0);
      \u0275\u0275defer(13, 11, GalleryComponent_Defer_13_DepsFn, null, 12);
      \u0275\u0275deferOnViewport(0, -1);
      \u0275\u0275deferPrefetchOnIdle();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.gallery());
    }
  }, dependencies: [
    FloatTextComponent,
    SubheaderComponent,
    NgOptimizedImage,
    NgClass,
    GalleryModule,
    LightboxModule,
    MatDialogModule
  ], styles: ["\n\n#background[_ngcontent-%COMP%] {\n  background: url(/images/background/5.jpg) 0% 0% / cover fixed;\n}\n#gallery-photo[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n#gallery-photo[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.de-image-hover[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.dih-overlay[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: var(--primary-color-1);\n  opacity: 0;\n  top: 0;\n  left: 0;\n  transition: opacity 0.3s ease;\n}\n.dih-title-wrap[_ngcontent-%COMP%] {\n  z-index: 2;\n  display: table;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.dih-title[_ngcontent-%COMP%] {\n  opacity: 0;\n  font-size: 16px;\n  z-index: 2;\n  text-align: center;\n  display: table-cell;\n  vertical-align: middle;\n  color: #fff;\n  transition: all 0.3s ease;\n}\n.de-image-hover[_ngcontent-%COMP%]:hover   .dih-overlay[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n.de-image-hover[_ngcontent-%COMP%]:hover   .dih-title[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1.2);\n}\n.de-image-hover[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.de-image-hover[_ngcontent-%COMP%]:hover {\n  -webkit-box-shadow: 5px 25px 15px 0px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 5px 25px 15px 0px rgba(0, 0, 0, 0.1);\n  box-shadow: 5px 25px 15px 0px rgba(0, 0, 0, 0.1);\n}\n.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n  transition: transform 0.3s ease;\n}\n.isotope[_ngcontent-%COMP%], \n.isotope[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  transition-duration: 0.8s;\n}\n.isotope[_ngcontent-%COMP%] {\n  transition-property: height, width;\n}\n.isotope[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  transition-property: transform, opacity;\n}\n@media (max-width: 768px) {\n  #gallery-photo[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n  gallery {\n  font-family: Raleway, sans-serif;\n}\n  .g-box {\n  z-index: 99999;\n}\n  .g-backdrop {\n  background-color: rgba(0, 0, 0, 0.9) !important;\n}\n  gallery-core, \n  gallery-lightbox {\n  font-family: Raleway, sans-serif;\n}\n  .g-items-container {\n  background-color: transparent;\n}\n  .g-counter {\n  font-family: Raleway, sans-serif;\n  color: #fff;\n}\n  .g-btn-close {\n  color: #fff;\n}\n  .g-btn-next, \n  .g-btn-prev {\n  color: #fff;\n}\n  .g-thumb-placeholder {\n  background-color: rgba(202, 142, 70, 0.5);\n}\n  .g-thumb-image {\n  opacity: 0.6;\n  transition: opacity 0.3s ease;\n}\n  .g-thumb-image.g-active-thumb {\n  opacity: 1;\n  border-bottom: 2px solid var(--primary-color-1);\n}\n.gallery-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ng-thumb[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ng-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 100%;\n  max-width: 100%;\n  object-fit: contain;\n}\n  .fullscreen-lightbox {\n  width: 100vw !important;\n  height: 100vh !important;\n  max-width: 100vw !important;\n  max-height: 100vh !important;\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  border-radius: 0 !important;\n}\n  .lightbox-backdrop {\n  opacity: 0.9 !important;\n}\n  .g-image-item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n  .g-image-item img {\n  max-height: 85vh;\n  max-width: 100%;\n  object-fit: contain;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GalleryComponent, { className: "GalleryComponent", filePath: "src\\app\\gallery\\gallery\\gallery.component.ts", lineNumber: 45 });
})();
export {
  GalleryComponent
};
