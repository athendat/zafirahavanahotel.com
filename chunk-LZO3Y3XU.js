import {
  BlogService
} from "./chunk-YTYS7FJX.js";
import {
  FloatTextComponent,
  SubheaderComponent
} from "./chunk-PDCLZWJ2.js";
import "./chunk-JSZOCLKC.js";
import "./chunk-U3KVYWMQ.js";
import "./chunk-JT7LBMWZ.js";
import {
  inject,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-ZXLQTLKG.js";
import "./chunk-DAU4QTJP.js";

// src/app/blog/components/blog-detail/blog-detail.component.ts
var BlogDetailComponent_Defer_37_DepsFn = () => [import("./chunk-TPGK3SZP.js").then((m) => m.CommentListComponent)];
var BlogDetailComponent_Defer_41_DepsFn = () => [import("./chunk-FXCQY2BH.js").then((m) => m.FooterComponent)];
var _c0 = () => [];
function BlogDetailComponent_Defer_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "zafira-comment-list", 16);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("comments", (tmp_1_0 = (tmp_1_0 = ctx_r0.blogData()) == null ? null : tmp_1_0.comments) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : \u0275\u0275pureFunction0(1, _c0));
  }
}
function BlogDetailComponent_DeferPlaceholder_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Loading comments...");
    \u0275\u0275elementEnd();
  }
}
function BlogDetailComponent_Defer_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "zafira-footer", 17);
  }
}
function BlogDetailComponent_DeferPlaceholder_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Loading footer...");
    \u0275\u0275elementEnd();
  }
}
var BlogDetailComponent = class _BlogDetailComponent {
  blogSrv = inject(BlogService);
  blogData = this.blogSrv.activeItem;
  static \u0275fac = function BlogDetailComponent_Factory(\u0275t) {
    return new (\u0275t || _BlogDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogDetailComponent, selectors: [["zafira-blog-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 43, vars: 2, consts: [["id", "background"], ["id", "content-absolute"], ["subtitle", "", 3, "title"], ["id", "section-main", "data-wow-delay", "1.5s", "aria-label", "section-menu", 1, "no-bg", "no-top", "wow", "fadeInUp", "animated"], [1, "container"], [1, "row", "g-5"], [1, "col-md-10", "offset-md-1"], [1, "de-post-read"], [1, "post-content"], [1, "post-text"], [1, "post-meta"], [1, "fa", "fa-user", "id-color"], ["href", "#"], [1, "fa", "fa-tag", "id-color"], [1, "fa", "fa-comment", "id-color"], [1, "spacer-single"], [3, "comments"], ["containerClass", "container"]], template: function BlogDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "zafira-float-text")(1, "div", 0);
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275element(3, "zafira-subheader", 2);
      \u0275\u0275elementStart(4, "section", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "p");
      \u0275\u0275text(12, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "blockquote");
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p");
      \u0275\u0275text(16, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 10)(18, "span");
      \u0275\u0275element(19, "i", 11);
      \u0275\u0275text(20, "By: ");
      \u0275\u0275elementStart(21, "a", 12);
      \u0275\u0275text(22, "Lynda Wu");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "span");
      \u0275\u0275element(24, "i", 13);
      \u0275\u0275elementStart(25, "a", 12);
      \u0275\u0275text(26, "News");
      \u0275\u0275elementEnd();
      \u0275\u0275text(27, ", ");
      \u0275\u0275elementStart(28, "a", 12);
      \u0275\u0275text(29, "Events");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "span");
      \u0275\u0275element(31, "i", 14);
      \u0275\u0275elementStart(32, "a", 12);
      \u0275\u0275text(33, "10 Comments");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(34, "div", 15);
      \u0275\u0275template(35, BlogDetailComponent_Defer_35_Template, 1, 2)(36, BlogDetailComponent_DeferPlaceholder_36_Template, 2, 0);
      \u0275\u0275defer(37, 35, BlogDetailComponent_Defer_37_DepsFn, null, 36);
      \u0275\u0275deferOnViewport(0, -1);
      \u0275\u0275deferPrefetchOnIdle();
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(39, BlogDetailComponent_Defer_39_Template, 1, 0)(40, BlogDetailComponent_DeferPlaceholder_40_Template, 2, 0);
      \u0275\u0275defer(41, 39, BlogDetailComponent_Defer_41_DepsFn, null, 40);
      \u0275\u0275deferOnViewport(0, -1);
      \u0275\u0275deferPrefetchOnIdle();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      \u0275\u0275advance(3);
      \u0275\u0275property("title", (tmp_0_0 = (tmp_0_0 = ctx.blogData()) == null ? null : tmp_0_0.title) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : "");
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1(" ", (tmp_1_0 = ctx.blogData()) == null ? null : tmp_1_0.resume, " ");
    }
  }, dependencies: [
    FloatTextComponent,
    SubheaderComponent
  ], styles: ["\n\n.post-content[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.post-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.post-meta[_ngcontent-%COMP%] {\n  margin: 0px 0 10px 0px;\n  border: solid 1px #eee;\n  border-left: none;\n  font-size: 11px;\n  display: table;\n  table-layout: fixed;\n}\n.post-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: table-cell;\n  padding: 10px 20px 10px 20px;\n  text-align: center;\n  border-left: solid 1px #eee;\n}\n.post-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  float: none;\n  margin-right: 20px;\n}\n.post-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 0px;\n}\n.post-meta[_ngcontent-%COMP%] {\n  border-color: #222;\n}\n.post-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-color: #222;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogDetailComponent, { className: "BlogDetailComponent", filePath: "src\\app\\blog\\components\\blog-detail\\blog-detail.component.ts", lineNumber: 21 });
})();
export {
  BlogDetailComponent
};
