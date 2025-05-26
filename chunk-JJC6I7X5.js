import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-ZXLQTLKG.js";
import "./chunk-DAU4QTJP.js";

// src/app/offer/components/offer-detail/offer-detail.component.ts
var OfferDetailComponent = class _OfferDetailComponent {
  static \u0275fac = function OfferDetailComponent_Factory(\u0275t) {
    return new (\u0275t || _OfferDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OfferDetailComponent, selectors: [["zafira-offer-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, template: function OfferDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p");
      \u0275\u0275text(1, "offer-detail works!");
      \u0275\u0275elementEnd();
    }
  }, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OfferDetailComponent, { className: "OfferDetailComponent", filePath: "src\\app\\offer\\components\\offer-detail\\offer-detail.component.ts", lineNumber: 11 });
})();
export {
  OfferDetailComponent
};
