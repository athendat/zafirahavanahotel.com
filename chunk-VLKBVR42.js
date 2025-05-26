import {
  FloatTextComponent,
  SubheaderComponent
} from "./chunk-PDCLZWJ2.js";
import {
  RouterLink
} from "./chunk-JSZOCLKC.js";
import "./chunk-U3KVYWMQ.js";
import "./chunk-JT7LBMWZ.js";
import {
  input,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefer,
  ɵɵdeferOnViewport,
  ɵɵdeferPrefetchOnIdle,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZXLQTLKG.js";
import "./chunk-DAU4QTJP.js";

// src/app/offer/components/offer-card/offer-card.component.ts
var OfferCardComponent = class _OfferCardComponent {
  data = input.required();
  static \u0275fac = function OfferCardComponent_Factory(\u0275t) {
    return new (\u0275t || _OfferCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OfferCardComponent, selectors: [["zafira-offer-card"]], inputs: { data: [1, "data"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 6, consts: [[1, "d-items"], [1, "card-image-1", "de-offer"], [1, "d-text", 3, "routerLink"], [1, "d-inner"], [1, "d-date"], [1, "d-tag"], ["alt", "", 1, "img-fluid", 3, "src"]], template: function OfferCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2)(3, "div", 3)(4, "h5", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h3");
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "h5", 5);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(12, "img", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", "./details/" + ctx.data().id);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.data().date);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.data().title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.data().description, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.data().tag);
      \u0275\u0275advance();
      \u0275\u0275property("src", ctx.data().imageUrl, \u0275\u0275sanitizeUrl);
    }
  }, dependencies: [RouterLink], styles: ["\n\n.card-image-1.de-offer[_ngcontent-%COMP%] {\n  border: dashed 1px #ffffff;\n}\n.card-image-1.de-offer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.card-image-1.de-offer[_ngcontent-%COMP%]   h5.d-date[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  position: absolute;\n  width: 80%;\n  background: rgba(0, 0, 0, 0.5);\n  top: 30px;\n  padding: 2px;\n  border-radius: 30px;\n  -moz-border-radius: 30px;\n  -webkit-border-radius: 30px;\n}\n.card-image-1.de-offer[_ngcontent-%COMP%]   .d-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  font-weight: 300;\n}\n.card-image-1[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.card-image-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n}\n.card-image-1[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.card-image-1[_ngcontent-%COMP%]   .d-text[_ngcontent-%COMP%] {\n  color: #ffffff;\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  padding: 10%;\n  background: rgba(30, 30, 30, 0.5);\n  text-align: center;\n}\n.card-image-1[_ngcontent-%COMP%]   .d-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.card-image-1[_ngcontent-%COMP%]:hover   .d-text[_ngcontent-%COMP%] {\n  background: rgba(30, 30, 30, 0.2);\n}\n.card-image-1[_ngcontent-%COMP%]   .d-tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  letter-spacing: 7px;\n  color: #ffffff;\n  position: absolute;\n  left: 0;\n  bottom: 5%;\n  width: 100%;\n  text-align: center;\n  text-transform: uppercase;\n}\n.card-image-1.de-offer[_ngcontent-%COMP%] {\n  border: dashed 1px #ffffff;\n}\n.card-image-1.de-offer[_ngcontent-%COMP%]   h5.d-date[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  position: absolute;\n  width: 80%;\n  background: rgba(0, 0, 0, 0.5);\n  top: 30px;\n  padding: 2px;\n  border-radius: 30px;\n  -moz-border-radius: 30px;\n  -webkit-border-radius: 30px;\n}\n.card-image-1.de-offer[_ngcontent-%COMP%]   .d-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  font-weight: 300;\n}\n.card-image-1.de-offer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OfferCardComponent, { className: "OfferCardComponent", filePath: "src\\app\\offer\\components\\offer-card\\offer-card.component.ts", lineNumber: 12 });
})();

// src/app/offer/models/offer.ts
var OFFER_LIST = [
  {
    id: 1,
    description: "Enjoy tasty meat and vegetables package cook in hot pot and grill pan.",
    title: "Shabu & Grill",
    tag: "Culinary",
    imageUrl: "images/offer/1.jpg",
    date: "26th - 28th Dec 2021"
  },
  {
    id: 2,
    description: "Quis cupidatat quis dolore amet aliquip ea exercitation labore proident dolore.",
    title: "Pay 1 Get 2",
    tag: "Culinary",
    imageUrl: "images/offer/2.jpg",
    date: "26th - 28th Dec 2021"
  },
  {
    id: 3,
    description: "Quis cupidatat quis dolore amet aliquip ea exercitation labore proident dolore.",
    title: "Flash Deal 60% off",
    tag: "Hotel Room",
    imageUrl: "images/offer/3.jpg",
    date: "26th - 28th Dec 2021"
  }
];

// src/app/offer/components/offer-list/offer-list.component.ts
var OfferListComponent_Defer_23_DepsFn = () => [import("./chunk-FXCQY2BH.js").then((m) => m.FooterComponent)];
function OfferListComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "zafira-offer-card", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("data", item_r1);
  }
}
function OfferListComponent_Defer_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "zafira-footer", 14);
  }
}
function OfferListComponent_DeferPlaceholder_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Loading footer...");
    \u0275\u0275elementEnd();
  }
}
var OfferListComponent = class _OfferListComponent {
  offers = signal([...OFFER_LIST]);
  static \u0275fac = function OfferListComponent_Factory(\u0275t) {
    return new (\u0275t || _OfferListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OfferListComponent, selectors: [["zafira-offer-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 0, consts: [["id", "background"], ["id", "content-absolute"], ["subtitle", "Special", "title", "Offer"], ["id", "section-main", "data-wow-delay", "1.5s", "aria-label", "section-menu", 1, "no-bg", "no-top", "wow", "fadeInUp", "animated"], [1, "container"], [1, "row", "g-4"], [1, "col-lg-4", "col-md-6"], [1, "clearfix"], ["aria-label", "Page navigation example"], [1, "pagination", "justify-content-center"], [1, "page-item", "active"], ["href", "#", 1, "page-link"], [1, "page-item"], [3, "data"], ["containerClass", "container"]], template: function OfferListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "zafira-float-text")(1, "div", 0);
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275element(3, "zafira-subheader", 2);
      \u0275\u0275elementStart(4, "section", 3)(5, "div", 4)(6, "div", 5);
      \u0275\u0275repeaterCreate(7, OfferListComponent_For_8_Template, 2, 1, "div", 6, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275element(9, "div", 7);
      \u0275\u0275elementStart(10, "nav", 8)(11, "ul", 9)(12, "li", 10)(13, "a", 11);
      \u0275\u0275text(14, "1");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "li", 12)(16, "a", 11);
      \u0275\u0275text(17, "2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "li", 12)(19, "a", 11);
      \u0275\u0275text(20, "3");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275template(21, OfferListComponent_Defer_21_Template, 1, 0)(22, OfferListComponent_DeferPlaceholder_22_Template, 2, 0);
      \u0275\u0275defer(23, 21, OfferListComponent_Defer_23_DepsFn, null, 22);
      \u0275\u0275deferOnViewport(0, -1);
      \u0275\u0275deferPrefetchOnIdle();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.offers());
    }
  }, dependencies: [
    FloatTextComponent,
    SubheaderComponent,
    OfferCardComponent
  ], styles: ["\n\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: none;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  border: solid 1px rgba(255, 255, 255, 0.5);\n  background: none;\n  margin: 5px;\n  padding: 10px 15px 10px 15px;\n}\n.pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], \n.pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, \n.pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:hover, \n.pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, \n.pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:focus {\n  background-color: var(--primary-color-1);\n}\n.pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], \n.pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, \n.pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:hover, \n.pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, \n.pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:focus   .feature-box-big-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:after, \n.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  border-color: var(--primary-color-1);\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OfferListComponent, { className: "OfferListComponent", filePath: "src\\app\\offer\\components\\offer-list\\offer-list.component.ts", lineNumber: 21 });
})();
export {
  OfferListComponent
};
