import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-T2QSSJNR.js";
import "./chunk-JT7LBMWZ.js";
import {
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-ZXLQTLKG.js";
import "./chunk-DAU4QTJP.js";

// src/app/blog/components/comment-form/comment-form.component.ts
var CommentFormComponent = class _CommentFormComponent {
  fb = inject(FormBuilder);
  frm = this.fb.group({
    email: ["", Validators.required],
    name: ["", [Validators.required]],
    message: ["", [Validators.required]]
  });
  sendComment() {
    console.log(this.frm.getRawValue());
  }
  static \u0275fac = function CommentFormComponent_Factory(\u0275t) {
    return new (\u0275t || _CommentFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommentFormComponent, selectors: [["zafira-comment-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 2, consts: [["id", "comment-form-wrapper"], [1, "comment_form_holder"], ["id", "contact_form", 3, "ngSubmit", "formGroup"], ["type", "text", "formControlName", "name", 1, "form-control"], [1, "req"], ["type", "text", "formControlName", "email", 1, "form-control"], ["id", "error_email", 1, "error"], ["cols", "10", "rows", "10", "formControlName", "message", 1, "form-control"], ["id", "error_message", 1, "error"], ["id", "mail_success", 1, "success"], ["id", "mail_failed", 1, "error"], ["id", "btnsubmit"], ["type", "submit", "id", "send", "value", "Send", 1, "btn", "btn-line", 3, "disabled"]], template: function CommentFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h3");
      \u0275\u0275text(2, "Leave a Comment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 1)(4, "form", 2);
      \u0275\u0275listener("ngSubmit", function CommentFormComponent_Template_form_ngSubmit_4_listener() {
        return ctx.sendComment();
      });
      \u0275\u0275elementStart(5, "label");
      \u0275\u0275text(6, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "input", 3);
      \u0275\u0275elementStart(8, "label");
      \u0275\u0275text(9, "Email ");
      \u0275\u0275elementStart(10, "span", 4);
      \u0275\u0275text(11, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(12, "input", 5);
      \u0275\u0275elementStart(13, "div", 6);
      \u0275\u0275text(14, "Please check your email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "label");
      \u0275\u0275text(16, "Message ");
      \u0275\u0275elementStart(17, "span", 4);
      \u0275\u0275text(18, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(19, "textarea", 7);
      \u0275\u0275elementStart(20, "div", 8);
      \u0275\u0275text(21, "Please check your message");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 9);
      \u0275\u0275text(23, " Thank you. Your message has been sent. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 10);
      \u0275\u0275text(25, "Error, email not sent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p", 11);
      \u0275\u0275element(27, "input", 12);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.frm);
      \u0275\u0275advance(23);
      \u0275\u0275property("disabled", ctx.frm.invalid);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n#contact_form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], \n#contact_form[_ngcontent-%COMP%]   input[type=tel][_ngcontent-%COMP%], \n#contact_form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n#contact_form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], \n#contact_form[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], \n#contact_form[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], \n#contact_form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin-bottom: 20px;\n  color: #fff;\n  border: solid 1px rgba(255, 255, 255, 0.3);\n  border-radius: 0 !important;\n  height: auto;\n  background: rgba(34, 34, 34, 0);\n}\n.guests-n-rooms[_ngcontent-%COMP%]   .d-col[_ngcontent-%COMP%] {\n  position: relative;\n}\n#contact_form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 178px;\n}\n#contact_form[_ngcontent-%COMP%]   input[placeholder][_ngcontent-%COMP%], \n#contact_form[_ngcontent-%COMP%]   textarea[placeholder][_ngcontent-%COMP%] {\n  color: #eee;\n}\n#contact_form[_ngcontent-%COMP%]   input[type=submit].btn-line[_ngcontent-%COMP%] {\n  background: none;\n  padding: 8px 20px;\n}\n#contact_form[_ngcontent-%COMP%]   input[type=submit].btn-line[_ngcontent-%COMP%]:hover {\n  background: #111;\n  border-color: #111;\n}\n#contact_form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, \n#contact_form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:focus, \n#contact_form[_ngcontent-%COMP%]   input[type=tel][_ngcontent-%COMP%]:focus, \n#contact_form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-color-1);\n  box-shadow: none;\n}\n#contact_form[_ngcontent-%COMP%]   input[type=submit].btn-line[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-color-1);\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommentFormComponent, { className: "CommentFormComponent", filePath: "src\\app\\blog\\components\\comment-form\\comment-form.component.ts", lineNumber: 11 });
})();
export {
  CommentFormComponent
};
