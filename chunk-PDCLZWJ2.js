import {
  RouterLink
} from "./chunk-JSZOCLKC.js";
import {
  InfoService
} from "./chunk-U3KVYWMQ.js";
import {
  inject,
  input,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-ZXLQTLKG.js";

// src/app/shared/float-text/float-text.component.ts
function FloatTextComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2);
    \u0275\u0275element(1, "i", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("href", (tmp_1_0 = ctx_r0.siteInfo()) == null ? null : tmp_1_0.social_meta, \u0275\u0275sanitizeUrl);
  }
}
function FloatTextComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2);
    \u0275\u0275element(1, "i", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("href", (tmp_1_0 = ctx_r0.siteInfo()) == null ? null : tmp_1_0.social_instagram, \u0275\u0275sanitizeUrl);
  }
}
function FloatTextComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2);
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("href", (tmp_1_0 = ctx_r0.siteInfo()) == null ? null : tmp_1_0.social_x, \u0275\u0275sanitizeUrl);
  }
}
var FloatTextComponent = class _FloatTextComponent {
  _infoSrv = inject(InfoService);
  siteInfo = this._infoSrv.siteInfo;
  static \u0275fac = function FloatTextComponent_Factory(\u0275t) {
    return new (\u0275t || _FloatTextComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FloatTextComponent, selectors: [["zafira-float-text"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 3, consts: [["data-wow-delay", ".5s", 1, "float-text", "wow", "fadeIn"], [1, "de_social-icons"], ["target", "_blank", 3, "href"], ["routerLink", "/rooms/booking"], [1, "fa", "fa-facebook", "fa-lg"], [1, "fa", "fa-instagram", "fa-lg"], [1, "fa", "fa-twitter", "fa-lg"]], template: function FloatTextComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275template(2, FloatTextComponent_Conditional_2_Template, 2, 1, "a", 2)(3, FloatTextComponent_Conditional_3_Template, 2, 1, "a", 2)(4, FloatTextComponent_Conditional_4_Template, 2, 1, "a", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span")(6, "a", 3);
      \u0275\u0275text(7, "Book Now");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      let tmp_2_0;
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_0_0 = ctx.siteInfo()) == null ? null : tmp_0_0.social_meta) ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_1_0 = ctx.siteInfo()) == null ? null : tmp_1_0.social_instagram) ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_2_0 = ctx.siteInfo()) == null ? null : tmp_2_0.social_x) ? 4 : -1);
    }
  }, dependencies: [RouterLink], styles: ["\n\n.float-text[_ngcontent-%COMP%] {\n  width: 20px;\n  position: fixed;\n  z-index: 1000;\n  margin-left: 30px;\n  text-align: center;\n  letter-spacing: 2px;\n  font-size: 12px;\n  top: 50%;\n  left: 15px;\n  transform: translate(-50%, -50%);\n}\n.float-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: -5px;\n  margin-top: 20px;\n  writing-mode: vertical-rl;\n  letter-spacing: 0.75px;\n  -webkit-transform: rotate(-180deg);\n  -ms-transform: rotate(-180deg);\n  transform: rotate(-180deg);\n  color: #222;\n}\n.dark-scheme[_ngcontent-%COMP%]   .float-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n@media only screen and (max-width: 992px) {\n  .float-text[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FloatTextComponent, { className: "FloatTextComponent", filePath: "src\\app\\shared\\float-text\\float-text.component.ts", lineNumber: 13 });
})();

// src/app/layout/subheader/subheader.component.ts
var SubheaderComponent = class _SubheaderComponent {
  title = input.required();
  subtitle = input.required();
  static \u0275fac = function SubheaderComponent_Factory(\u0275t) {
    return new (\u0275t || _SubheaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubheaderComponent, selectors: [["zafira-subheader"]], inputs: { title: [1, "title"], subtitle: [1, "subtitle"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 2, consts: [["id", "subheader", 1, "no-bg", "subheader"], [1, "container"], [1, "row"], [1, "col-md-12", "text-center"], ["data-wow-delay", ".8s", 1, "wow", "zoomIn"], ["data-wow-delay", ".9s", 1, "wow", "zoomIn"]], template: function SubheaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.subtitle());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.title());
    }
  }, styles: ['\n\n#subheader[_ngcontent-%COMP%] {\n  background: #222;\n  padding: 80px 0;\n}\n#subheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: "Montserrat";\n  font-size: 42px;\n  display: inline-block;\n  color: #fff;\n  text-shadow: none;\n  text-transform: uppercase;\n  letter-spacing: 5px;\n}\n#subheader[_ngcontent-%COMP%] {\n  -webkit-background-size: 100% auto !important;\n  -moz-background-size: 100% auto !important;\n  -o-background-size: 100% auto !important;\n  background-size: 100% auto !important;\n}\n.subheader[_ngcontent-%COMP%] {\n  padding-top: 140px !important;\n}\n#subheader[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: "Mrs Saint Delafield";\n  width: 100%;\n  font-size: 105px;\n  text-align: center;\n  top: 0;\n  margin-bottom: 0px;\n  letter-spacing: 0;\n  text-transform: none;\n  line-height: 0.75em;\n  font-weight: 300;\n  position: relative;\n  z-index: 1;\n}\n#subheader[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 72px;\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubheaderComponent, { className: "SubheaderComponent", filePath: "src\\app\\layout\\subheader\\subheader.component.ts", lineNumber: 10 });
})();

export {
  FloatTextComponent,
  SubheaderComponent
};
