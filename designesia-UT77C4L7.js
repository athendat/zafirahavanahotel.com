jQuery(function($) {
  "use strict";
  var mobile_menu_show = 0;
  var grid_size = 10;
  var col = 4;
  var tmp_col = col;
  var sr = 466 / 700;
  var v_count = "0";
  new WOW().init();
  jQuery("body").jpreLoader(
    {
      splashID: "#jSplash",
      splashFunction: function() {
        jQuery("#jSplash").children("section").not(".selected").hide();
        jQuery("#jSplash").hide().fadeIn(500);
        jQuery("body").css("opacity", "1");
        jQuery("header").addClass("fadeInDown");
        jQuery("header").attr("data-wow-delay", ".5s");
        jQuery(".v-text").addClass("fadeIn");
        jQuery(".v-text").attr("data-wow-delay", "1s");
        jQuery("#controls,#nextslide,#prevslide").addClass("fadeInUp");
        jQuery("#controls,#nextslide,#prevslide").attr("data-wow-delay", ".5s");
        jQuery("#slidecaption").addClass("fadeIn");
        jQuery("#slidecaption").attr("data-wow-delay", ".5s");
        var timer = setInterval(function() {
          splashRotator();
        }, 1500);
      }
    },
    function() {
      clearInterval();
      jQuery(function() {
        var v_url = document.URL;
        if (v_url.indexOf("#") != -1) {
          var v_hash = v_url.substring(v_url.indexOf("#") + 1);
          jQuery("html, body").animate(
            {
              scrollTop: jQuery("#" + v_hash).offset().top - 70
            },
            200
          );
          return false;
        }
      });
    }
  );
  function splashRotator() {
    var cur = jQuery("#jSplash").children(".selected");
    var next = jQuery(cur).next();
    if (jQuery(next).length != 0) {
      jQuery(next).addClass("selected");
    } else {
      jQuery("#jSplash").children("section:first-child").addClass("selected");
      next = jQuery("#jSplash").children("section:first-child");
    }
    jQuery(cur).removeClass("selected").fadeOut(100, function() {
      jQuery(next).fadeIn(100);
    });
  }
  window.onresize = function(event) {
    enquire.register("screen and (min-width: 993px)", {
      match: function() {
        jQuery("#mainmenu").show();
        jQuery("header").removeClass("height-auto");
        mobile_menu_show = 1;
        col = tmp_col;
      },
      unmatch: function() {
        jQuery("#mainmenu").hide();
        mobile_menu_show = 0;
        jQuery("#menu-btn").show();
        col = 2;
      }
    });
    var mq = window.matchMedia("(max-width: 993px)");
    if (mq.matches) {
      jQuery(".header-bottom,.header-center").css("display", "block");
      jQuery(".header-bottom,.header-center").css("top", "0");
    }
    init();
    $("header").removeClass("smaller");
    $("header").removeClass("logo-smaller");
    $("header").removeClass("clone");
    jQuery("#menu-btn").removeClass("clicked");
    jQuery("#menu-btn").addClass("unclick");
  };
  function init() {
    var dh = jQuery(window).innerHeight();
    var header_height = parseInt(jQuery("header").height(), 10);
    var screen_height = parseInt(jQuery(window).height(), 10);
    var header_mt = screen_height - header_height;
    var mq = window.matchMedia("(min-width: 993px)");
    var ms = window.matchMedia("(min-width: 768px)");
    window.addEventListener("scroll", function(e) {
      if (mq.matches) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop, shrinkOn = 100, header = document.querySelector("header");
        if (distanceY > shrinkOn) {
          classie.add(header, "smaller");
        } else {
          if (classie.has(header, "smaller")) {
            classie.remove(header, "smaller");
          }
        }
      }
      if (mq.matches) {
        jQuery("header").addClass("clone", 1e3, "easeOutBounce");
        var $document = $(document);
        var vscroll = 0;
        if ($document.scrollTop() >= 50 && vscroll == 0) {
          jQuery("header.autoshow").removeClass("scrollOff");
          jQuery("header.autoshow").addClass("scrollOn");
          vscroll = 1;
        } else {
          jQuery("header.autoshow").removeClass("scrollOn");
          jQuery("header.autoshow").addClass("scrollOff");
          vscroll = 0;
        }
        var header_height2 = parseInt(jQuery("header").height(), 10);
        var screen_height2 = parseInt(jQuery(window).height(), 10);
        var header_mt2 = screen_height2 - header_height2;
        var header_mt_half = header_mt2 / 2;
        if ($document.scrollTop() >= header_mt2) {
          jQuery(".header-bottom").css("position", "fixed");
          jQuery(".header-bottom").css("top", "0");
        } else if ($document.scrollTop() <= header_mt2) {
          jQuery(".header-bottom").css("position", "absolute");
          jQuery(".header-bottom").css("top", header_mt2);
        }
        if ($document.scrollTop() >= header_mt_half) {
          jQuery(".header-center").css("position", "fixed");
          jQuery(".header-center").css("top", "0");
        } else if ($document.scrollTop() <= header_mt_half) {
          jQuery(".header-center").css("position", "absolute");
          jQuery(".header-center").css("top", header_mt_half);
        }
        if (jQuery("header").hasClass("side-header")) {
          if (jQuery(document).scrollTop() >= h) {
            jQuery("#de-sidebar").css("position", "fixed");
            if (parseInt(sh) > parseInt(dh)) {
              jQuery("#de-sidebar").css("top", -h);
            }
            jQuery("#main").addClass("col-md-offset-3");
          } else {
            jQuery("#de-sidebar").css("position", "absolute ");
            if (parseInt(sh) > parseInt(dh)) {
              jQuery("#de-sidebar").css("top", 0);
            }
            jQuery("#main").removeClass("col-md-offset-3");
          }
        }
      }
    });
    if (mq.matches) {
      jQuery(".header-bottom,.header-center").css("position", "absolute");
      jQuery(".header-bottom,.header-center").css("top", header_mt);
    }
  }
  jQuery("a.btn").click(function(evn) {
    if (this.href.indexOf("#") != -1 && this.href.indexOf("#/") === -1) {
      evn.preventDefault();
      jQuery("html,body").scrollTo(this.hash, this.hash);
    }
  });
  jQuery(document).scroll(function() {
    if (location.hash !== "") {
      jQuery("#homepage nav li a").each(function() {
        if (this.href.indexOf("#") != -1) {
          var href = jQuery(this).attr("href");
          if (jQuery(window).scrollTop() > jQuery(href).offset().top - 140) {
            jQuery("nav li a").removeClass("active");
            jQuery(this).addClass("active");
          }
        }
      });
    }
    jQuery(".animated").each(function() {
      var imagePos = jQuery(this).offset().top;
      var timedelay = jQuery(this).attr("data-delay");
      var topOfWindow = jQuery(window).scrollTop();
      if (imagePos < topOfWindow + 500) {
        jQuery(this).delay(timedelay).queue(function() {
          jQuery(this).fadeTo(1, 500);
          var $anim = jQuery(this).attr("data-animation");
          jQuery(this).addClass($anim).clearQueue();
        });
      }
    });
    jQuery(".nav-exit").on("click", function() {
      $.magnificPopup.close();
    });
  });
});
