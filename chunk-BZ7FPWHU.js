import {
  BlogService
} from "./chunk-YTYS7FJX.js";
import {
  FloatTextComponent,
  SubheaderComponent
} from "./chunk-PDCLZWJ2.js";
import {
  Router
} from "./chunk-JSZOCLKC.js";
import "./chunk-U3KVYWMQ.js";
import "./chunk-JT7LBMWZ.js";
import {
  inject,
  input,
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
  ɵɵlistener,
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

// src/app/blog/components/blog-card/blog-card.component.ts
var BlogCardComponent = class _BlogCardComponent {
  data = input.required();
  blogSrv = inject(BlogService);
  router = inject(Router);
  viewDetails() {
    this.blogSrv.selectItem(this.data());
    this.router.navigate(["blog", "details", this.data().id]);
  }
  static \u0275fac = function BlogCardComponent_Factory(\u0275t) {
    return new (\u0275t || _BlogCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogCardComponent, selectors: [["zafira-blog-card"]], inputs: { data: [1, "data"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 5, consts: [[1, "d-items"], [1, "card-image-1", "mod-b"], [1, "d-text", "action-elem", 3, "click"], [1, "d-inner"], [1, "atr-date"], [1, "d-tag"], ["alt", "", 1, "img-fluid", 3, "src"]], template: function BlogCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275listener("click", function BlogCardComponent_Template_a_click_2_listener() {
        return ctx.viewDetails();
      });
      \u0275\u0275elementStart(3, "div", 3)(4, "span", 4);
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
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.data().date);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.data().title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.data().resume, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.data().tag);
      \u0275\u0275advance();
      \u0275\u0275property("src", ctx.data().imageUrl, \u0275\u0275sanitizeUrl);
    }
  }, styles: ["\n\n.card-image-1[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.card-image-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n}\n.card-image-1[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.card-image-1[_ngcontent-%COMP%]   .d-text[_ngcontent-%COMP%] {\n  color: #ffffff;\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  padding: 10%;\n  background: rgba(30, 30, 30, 0.5);\n  text-align: center;\n}\n.card-image-1[_ngcontent-%COMP%]   .d-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.card-image-1[_ngcontent-%COMP%]   .d-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #000000;\n  padding: 20px;\n  font-size: 32px;\n  width: 72px;\n  height: 72px;\n  top: calc(50% - 36px);\n  left: calc(50% - 36px);\n  opacity: 0;\n  border-radius: 60px;\n  -moz-border-radius: 60px;\n  -webkit-border-radius: 60px;\n  transform: scale(1.1);\n}\n.card-image-1[_ngcontent-%COMP%]:hover   .d-text[_ngcontent-%COMP%] {\n  background: rgba(30, 30, 30, 0.2);\n}\n.card-image-1[_ngcontent-%COMP%]:hover   .d-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.card-image-1[_ngcontent-%COMP%]   .d-tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  letter-spacing: 7px;\n  color: #ffffff;\n  position: absolute;\n  left: 0;\n  bottom: 5%;\n  width: 100%;\n  text-align: center;\n  text-transform: uppercase;\n}\n.card-image-1.mod-b[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  opacity: 0;\n}\n.card-image-1.mod-b[_ngcontent-%COMP%]   .d-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10%;\n  background: rgba(var(--bg-dark-color), 0.5);\n  color: #aaaaaa;\n}\n.card-image-1.mod-b[_ngcontent-%COMP%]   .d-text[_ngcontent-%COMP%]   .d-inner[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 30px;\n}\n.card-image-1.mod-b[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  text-transform: none;\n  letter-spacing: 0px;\n}\n.card-image-1.mod-b[_ngcontent-%COMP%]   .atr-date[_ngcontent-%COMP%] {\n  color: #ffffff;\n  display: block;\n  margin-bottom: 20px;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n.card-image-1.mod-b[_ngcontent-%COMP%]   .d-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n  display: block;\n  position: relative;\n  max-height: 100px;\n  overflow: hidden;\n  height: 100px;\n}\n.card-image-1.mod-b[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: none;\n}\n.card-image-1.mod-b[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.card-image-1.mod-b[_ngcontent-%COMP%]:hover   .d-text[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n}\n.card-image-1.mod-b[_ngcontent-%COMP%]:hover   .d-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  height: 0;\n  opacity: 0;\n}\n.card-image-1.mod-b[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.card-image-1.mod-b[_ngcontent-%COMP%]:hover   h5[_ngcontent-%COMP%] {\n  opacity: 1;\n  bottom: 5%;\n}\n.action-elem[_ngcontent-%COMP%] {\n  cursor: pointer;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogCardComponent, { className: "BlogCardComponent", filePath: "src\\app\\blog\\components\\blog-card\\blog-card.component.ts", lineNumber: 12 });
})();

// src/app/blog/components/blog-list/blog-list.component.ts
var BlogListComponent_Defer_23_DepsFn = () => [import("./chunk-FXCQY2BH.js").then((m) => m.FooterComponent)];
function BlogListComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "zafira-blog-card", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("data", item_r1);
  }
}
function BlogListComponent_Defer_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "zafira-footer", 14);
  }
}
function BlogListComponent_DeferPlaceholder_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Loading footer...");
    \u0275\u0275elementEnd();
  }
}
var BlogListComponent = class _BlogListComponent {
  blogSrv = inject(BlogService);
  blogs = this.blogSrv.items;
  static \u0275fac = function BlogListComponent_Factory(\u0275t) {
    return new (\u0275t || _BlogListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogListComponent, selectors: [["zafira-blog-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 0, consts: [["id", "background"], ["id", "content-absolute"], ["subtitle", "Latest", "title", "Blog"], ["id", "section-main", "aria-label", "section-menu", "data-wow-delay", "1.5s", 1, "no-bg", "no-top", "wow", "fadeInUp", "animated"], [1, "container"], [1, "row", "g-4"], [1, "col-lg-4", "col-md-6"], [1, "clearfix"], ["aria-label", "Page navigation example"], [1, "pagination", "justify-content-center"], [1, "page-item", "active"], ["href", "#", 1, "page-link"], [1, "page-item"], [3, "data"], ["containerClass", "container"]], template: function BlogListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "zafira-float-text")(1, "div", 0);
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275element(3, "zafira-subheader", 2);
      \u0275\u0275elementStart(4, "section", 3)(5, "div", 4)(6, "div", 5);
      \u0275\u0275repeaterCreate(7, BlogListComponent_For_8_Template, 2, 1, "div", 6, \u0275\u0275repeaterTrackByIndex);
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
      \u0275\u0275template(21, BlogListComponent_Defer_21_Template, 1, 0)(22, BlogListComponent_DeferPlaceholder_22_Template, 2, 0);
      \u0275\u0275defer(23, 21, BlogListComponent_Defer_23_DepsFn, null, 22);
      \u0275\u0275deferOnViewport(0, -1);
      \u0275\u0275deferPrefetchOnIdle();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.blogs());
    }
  }, dependencies: [
    FloatTextComponent,
    SubheaderComponent,
    BlogCardComponent
  ], styles: ["\n\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: none;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  border: solid 1px rgba(255, 255, 255, 0.5);\n  background: none;\n  margin: 5px;\n  padding: 10px 15px 10px 15px;\n}\n.pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], \n.pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, \n.pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:hover, \n.pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, \n.pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:focus {\n  background-color: var(--primary-color-1);\n}\n.pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], \n.pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, \n.pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:hover, \n.pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, \n.pagination[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:focus   .feature-box-big-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:after, \n.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  border-color: var(--primary-color-1);\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogListComponent, { className: "BlogListComponent", filePath: "src\\app\\blog\\components\\blog-list\\blog-list.component.ts", lineNumber: 21 });
})();
export {
  BlogListComponent
};
