(function(a) {
  var b = new Array(), c = new Array(), d = function() {
  }, e = 0;
  var f = { splashVPos: "35%", loaderVPos: "75%", splashID: "#jpreContent", showSplash: true, showPercentage: true, autoClose: true, closeBtnText: "Start!", onetimeLoad: false, debugMode: false, splashFunction: function() {
  } };
  var g = function() {
    if (f.onetimeLoad) {
      var a2 = document.cookie.split("; ");
      for (var b2 = 0, c2; c2 = a2[b2] && a2[b2].split("="); b2++) {
        if (c2.shift() === "jpreLoader") {
          return c2.join("=");
        }
      }
      return false;
    } else {
      return false;
    }
  };
  var h = function(a2) {
    if (f.onetimeLoad) {
      var b2 = /* @__PURE__ */ new Date();
      b2.setDate(b2.getDate() + a2);
      var c2 = a2 == null ? "" : "expires=" + b2.toUTCString();
      document.cookie = "jpreLoader=loaded; " + c2;
    }
  };
  var i = function() {
    jOverlay = a("<div></div>").attr("id", "jpreOverlay").css({ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 9999999 }).appendTo("body");
    if (f.showSplash) {
      jContent = a("<div></div>").attr("id", "jpreSlide").appendTo(jOverlay);
      var b2 = a(window).width() - a(jContent).width();
      a(jContent).css({ position: "absolute", top: f.splashVPos, left: Math.round(50 / a(window).width() * b2) + "%" });
      a(jContent).html(a(f.splashID).wrap("<div/>").parent().html());
      a(f.splashID).remove();
      f.splashFunction();
    }
    jLoader = a("<div></div>").attr("id", "jpreLoader").appendTo(jOverlay);
    var c2 = a(window).width() - a(jLoader).width();
    a(jLoader).css({ position: "absolute", top: f.loaderVPos, left: Math.round(50 / a(window).width() * c2) + "%" });
    jBar = a("<div></div>").attr("id", "jpreBar").css({ width: "0%", height: "100%" }).appendTo(jLoader);
    if (f.showPercentage) {
      jPer = a("<div></div>").attr("id", "jprePercentage").css({ position: "relative", height: "100%" }).appendTo(jLoader).html("Loading...");
    }
    if (!f.autoclose) {
      jButton = a("<div></div>").attr("id", "jpreButton").on("click", function() {
        n();
      }).css({ position: "relative", height: "100%" }).appendTo(jLoader).text(f.closeBtnText).hide();
    }
  };
  var j = function(c2) {
    a(c2).find("*:not(script)").each(function() {
      var c3 = "";
      if (a(this).css("background-image").indexOf("none") == -1 && a(this).css("background-image").indexOf("-gradient") == -1) {
        c3 = a(this).css("background-image");
        if (c3.indexOf("url") != -1) {
          var d2 = c3.match(/url\((.*?)\)/);
          c3 = d2[1].replace(/\"/g, "");
        }
      } else if (a(this).get(0).nodeName.toLowerCase() == "img" && typeof a(this).attr("src") != "undefined") {
        c3 = a(this).attr("src");
      }
      if (c3.length > 0) {
        b.push(c3);
      }
    });
  };
  var k = function() {
    for (var a2 = 0; a2 < b.length; a2++) {
      if (l(b[a2])) ;
    }
  };
  var l = function(b2) {
    var d2 = new Image();
    a(d2).load(function() {
      m();
    }).error(function() {
      c.push(a(this).attr("src"));
      m();
    }).attr("src", b2);
  };
  var m = function() {
    e++;
    var c2 = Math.round(e / b.length * 100);
    a(jBar).stop().animate({ width: c2 + "%" }, 500, "linear");
    if (f.showPercentage) {
      a(jPer).text(c2 + "%");
    }
    if (e >= b.length) {
      e = b.length;
      h();
      if (f.showPercentage) {
        a(jPer).text("100%");
      }
      if (f.debugMode) {
        var d2 = o();
      }
      a(jBar).stop().animate({ width: "100%" }, 500, "linear", function() {
        if (f.autoClose) n();
        else a(jButton).fadeIn(1e3);
      });
    }
  };
  var n = function() {
    a(jOverlay).fadeOut(800, function() {
      a(jOverlay).remove();
      d();
    });
  };
  var o = function() {
    if (c.length > 0) {
      var a2 = "ERROR - IMAGE FILES MISSING!!!\n\r";
      a2 += c.length + " image files cound not be found. \n\r";
      a2 += "Please check your image paths and filenames:\n\r";
      for (var b2 = 0; b2 < c.length; b2++) {
        a2 += "- " + c[b2] + "\n\r";
      }
      return true;
    } else {
      return false;
    }
  };
  a.fn.jpreLoader = function(b2, c2) {
    if (b2) {
      a.extend(f, b2);
    }
    if (typeof c2 == "function") {
      d = c2;
    }
    a("body").css({ display: "block" });
    return this.each(function() {
      if (!g()) {
        i();
        j(this);
        k();
      } else {
        a(f.splashID).remove();
        d();
      }
    });
  };
})(jQuery);
