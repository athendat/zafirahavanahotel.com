import {
  computed,
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

// src/app/blog/components/comment-card/comment-card.component.ts
function CommentCardComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "zafira-comment-card", 9);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("comment", item_r1);
  }
}
var CommentCardComponent = class _CommentCardComponent {
  comment = input.required();
  comments = computed(() => {
    return this.comment().comments ?? [];
  });
  static \u0275fac = function CommentCardComponent_Factory(\u0275t) {
    return new (\u0275t || _CommentCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommentCardComponent, selectors: [["zafira-comment-card"]], inputs: { comment: [1, "comment"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 4, consts: [[1, "avatar"], ["alt", "", 3, "src"], [1, "comment-info"], [1, "c_name"], [1, "c_date", "id-color"], [1, "c_reply"], ["href", "#"], [1, "clearfix"], [1, "comment"], [3, "comment"]], template: function CommentCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "li")(1, "div", 0);
      \u0275\u0275element(2, "img", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "span", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 4);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span", 5)(9, "a", 6);
      \u0275\u0275text(10, "Reply");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(11, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 8);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "ol");
      \u0275\u0275repeaterCreate(15, CommentCardComponent_For_16_Template, 1, 1, "zafira-comment-card", 9, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("src", ctx.comment().userAvatar, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.comment().userName);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.comment().date);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.comment().text, " ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.comments());
    }
  }, dependencies: [_CommentCardComponent], styles: ["\n\nul[_ngcontent-%COMP%], \nli[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-left: -30px;\n  padding-left: 0;\n}\nol[_ngcontent-%COMP%] {\n  padding-left: 30px;\n}\nli[_ngcontent-%COMP%] {\n  min-height: 70px;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  border-bottom: solid 1px rgba(255, 255, 255, 0.1);\n}\nli[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: 5px;\n}\n.comment[_ngcontent-%COMP%] {\n  margin-left: 90px;\n}\nli[_ngcontent-%COMP%] {\n  min-height: 70px;\n  line-height: 1.6em;\n}\nli[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-left: 55px;\n  padding-bottom: 0px;\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: solid 1px rgba(255, 255, 255, 0.1);\n  border-bottom: none;\n}\nli[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.comment-info[_ngcontent-%COMP%] {\n  margin-left: 90px;\n  margin-bottom: 5px;\n}\n.comment-info[_ngcontent-%COMP%]   .c_name[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n}\n.comment-info[_ngcontent-%COMP%]   .c_reply[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  margin-left: 20px;\n  border-left: solid 1px rgba(255, 255, 255, 0.1);\n  font-size: 12px;\n}\n.comment-info[_ngcontent-%COMP%]   .c_date[_ngcontent-%COMP%] {\n  font-size: 12px;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommentCardComponent, { className: "CommentCardComponent", filePath: "src\\app\\blog\\components\\comment-card\\comment-card.component.ts", lineNumber: 11 });
})();

// src/app/blog/components/comment-list/comment-list.component.ts
var CommentListComponent_Defer_10_DepsFn = () => [import("./chunk-ZCG74RJF.js").then((m) => m.CommentFormComponent)];
function CommentListComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "zafira-comment-card", 2);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("comment", item_r1);
  }
}
function CommentListComponent_Defer_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "zafira-comment-form");
  }
}
function CommentListComponent_DeferPlaceholder_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Loading form...");
    \u0275\u0275elementEnd();
  }
}
var CommentListComponent = class _CommentListComponent {
  comments = input.required();
  commentCount = computed(() => {
    return this.comments().length;
  });
  static \u0275fac = function CommentListComponent_Factory(\u0275t) {
    return new (\u0275t || _CommentListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommentListComponent, selectors: [["zafira-comment-list"]], inputs: { comments: [1, "comments"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 1, consts: [["id", "blog-comment"], [1, "spacer-half"], [3, "comment"], [1, "spacer-single"]], template: function CommentListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h3");
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "div", 1);
      \u0275\u0275elementStart(4, "ol");
      \u0275\u0275repeaterCreate(5, CommentListComponent_For_6_Template, 1, 1, "zafira-comment-card", 2, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "div", 3);
      \u0275\u0275template(8, CommentListComponent_Defer_8_Template, 1, 0)(9, CommentListComponent_DeferPlaceholder_9_Template, 2, 0);
      \u0275\u0275defer(10, 8, CommentListComponent_Defer_10_DepsFn, null, 9);
      \u0275\u0275deferOnViewport(0, -1);
      \u0275\u0275deferPrefetchOnIdle();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Comments (", ctx.commentCount(), ")");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.comments());
    }
  }, dependencies: [CommentCardComponent], styles: ["\n\n#blog-comment[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n#blog-comment[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n#blog-comment[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-left: -30px;\n  padding-left: 0;\n}\n#blog-comment[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  padding-left: 30px;\n}\n#blog-comment[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  min-height: 70px;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  border-bottom: solid 1px rgba(255, 255, 255, 0.1);\n}\n#blog-comment[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: 5px;\n}\n#blog-comment[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%] {\n  margin-left: 90px;\n}\n#blog-comment[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  min-height: 70px;\n  line-height: 1.6em;\n}\n#blog-comment[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-left: 55px;\n  padding-bottom: 0px;\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: solid 1px rgba(255, 255, 255, 0.1);\n  border-bottom: none;\n}\n#blog-comment[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.comment-info[_ngcontent-%COMP%] {\n  margin-left: 90px;\n  margin-bottom: 5px;\n}\n.comment-info[_ngcontent-%COMP%]   .c_name[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n}\n.comment-info[_ngcontent-%COMP%]   .c_reply[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  margin-left: 20px;\n  border-left: solid 1px rgba(255, 255, 255, 0.1);\n  font-size: 12px;\n}\n.comment-info[_ngcontent-%COMP%]   .c_date[_ngcontent-%COMP%] {\n  font-size: 12px;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommentListComponent, { className: "CommentListComponent", filePath: "src\\app\\blog\\components\\comment-list\\comment-list.component.ts", lineNumber: 13 });
})();
export {
  CommentListComponent
};
