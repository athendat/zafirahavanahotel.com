import {
  InfoService
} from "./chunk-U3KVYWMQ.js";
import {
  DatePipe
} from "./chunk-JT7LBMWZ.js";
import {
  inject,
  input,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-ZXLQTLKG.js";

// src/app/layout/footer/footer.component.ts
function FooterComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275element(1, "i", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("href", (tmp_1_0 = ctx_r0.siteInfo()) == null ? null : tmp_1_0.social_meta, \u0275\u0275sanitizeUrl);
  }
}
function FooterComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("href", (tmp_1_0 = ctx_r0.siteInfo()) == null ? null : tmp_1_0.social_instagram, \u0275\u0275sanitizeUrl);
  }
}
function FooterComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("href", (tmp_1_0 = ctx_r0.siteInfo()) == null ? null : tmp_1_0.social_x, \u0275\u0275sanitizeUrl);
  }
}
var FooterComponent = class _FooterComponent {
  _infoSrv = inject(InfoService);
  siteInfo = this._infoSrv.siteInfo;
  today = /* @__PURE__ */ new Date();
  containerClass = input.required();
  ngAfterViewInit() {
    if ($("#back-to-top").length) {
      this._backToTop();
      $(window).on("scroll", () => {
        this._backToTop();
      });
      $("#back-to-top").on("click", function(e) {
        e.preventDefault();
        $("html,body").animate({
          scrollTop: 0
        }, 100);
      });
    }
    if ($("#back-to-top").length) {
      const elem = $("section,div");
      elem.css("background-color", function() {
        return jQuery(elem).data("bgcolor");
      });
      const elemDiv = $("div");
      elemDiv.css("background-image", function() {
        return jQuery(elemDiv).data("bgimage");
      });
    }
  }
  _backToTop(scrollTrigger = 500) {
    const scrollTop = $(window).scrollTop();
    if (scrollTop && scrollTop > scrollTrigger) {
      $("#back-to-top").addClass("show");
    } else {
      $("#back-to-top").removeClass("show");
    }
  }
  static \u0275fac = function FooterComponent_Factory(\u0275t) {
    return new (\u0275t || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["zafira-footer"]], inputs: { containerClass: [1, "containerClass"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 9, consts: [[1, "no-top", "pl20", "pr20"], [1, "subfooter"], [1, "row", "w-100"], [1, "col-md-6"], [1, "id-color"], [1, "col-md-6", "text-right"], [1, "social-icons"], ["target", "_blank", 3, "href"], ["href", "#", "id", "back-to-top"], [1, "fa", "fa-facebook", "fa-lg"], [1, "fa", "fa-instagram", "fa-lg"], [1, "fa", "fa-twitter", "fa-lg"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div")(3, "div", 2)(4, "div", 3);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "date");
      \u0275\u0275elementStart(7, "span", 4);
      \u0275\u0275text(8, "ATHENDAT");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 5)(10, "div", 6);
      \u0275\u0275template(11, FooterComponent_Conditional_11_Template, 2, 1, "a", 7)(12, FooterComponent_Conditional_12_Template, 2, 1, "a", 7)(13, FooterComponent_Conditional_13_Template, 2, 1, "a", 7);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(14, "a", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.containerClass());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" \xA9 Copyright ", \u0275\u0275pipeBind2(6, 6, ctx.today, "YYYY"), " - Zafira by ");
      \u0275\u0275advance(6);
      \u0275\u0275conditional(((tmp_2_0 = ctx.siteInfo()) == null ? null : tmp_2_0.social_meta) ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_3_0 = ctx.siteInfo()) == null ? null : tmp_3_0.social_instagram) ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_4_0 = ctx.siteInfo()) == null ? null : tmp_4_0.social_x) ? 13 : -1);
    }
  }, dependencies: [DatePipe], styles: ['\n\nfooter[_ngcontent-%COMP%] {\n  background: rgba(var(--bg-dark-color), 0.5);\n  color: #fff;\n  padding: 80px 0 0 0;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ccc;\n  text-decoration: none !important;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited {\n  color: #ccc;\n}\n.subfooter[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n}\n.social-icons[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.social-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  text-shadow: none;\n  color: #fff;\n  padding: 8px;\n  width: 28px;\n  height: 28px;\n  text-align: center;\n  font-size: 16px;\n  border-radius: 1px;\n  -moz-border-radius: 1px;\n  -webkit-border-radius: 1px;\n}\n.social-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  border-color: #eceff3;\n  color: #111111;\n}\n#back-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 40px;\n  right: 40px;\n  z-index: 999;\n  width: 32px;\n  height: 32px;\n  text-align: center;\n  line-height: 30px;\n  cursor: pointer;\n  border: 0;\n  border-radius: 2px;\n  text-decoration: none;\n  transition: opacity 0.2s ease-out;\n  opacity: 0;\n  outline: none;\n}\n#back-to-top[_ngcontent-%COMP%]:hover {\n  background: #111;\n}\n#back-to-top.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n#back-to-top[_ngcontent-%COMP%]:before {\n  font-family: "FontAwesome";\n  font-size: 22px;\n  content: "\\f106";\n  color: #ffffff;\n  position: relative;\n  margin: 5px;\n}\n#back-to-top[_ngcontent-%COMP%]:hover:before {\n  color: #fff;\n}\n#back-to-top.custom-1[_ngcontent-%COMP%]:before {\n  color: #fff;\n}'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src\\app\\layout\\footer\\footer.component.ts", lineNumber: 19 });
})();

export {
  FooterComponent
};
