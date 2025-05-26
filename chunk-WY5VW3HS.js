import {
  input,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵqueryAdvance,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-ZXLQTLKG.js";

// src/app/shared/components/dialog/dialog.component.ts
var _c0 = ["dialog"];
function DialogComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.cancelBtn(), " ");
  }
}
var DialogComponent = class _DialogComponent {
  dialog = viewChild.required("dialog");
  header = input.required();
  dialogText = input.required();
  cancelBtn = input.required();
  confirmBtn = input.required();
  openModalDialog() {
    this.dialog().nativeElement.showModal();
  }
  openDialog() {
    this.dialog().nativeElement.show();
  }
  closeDialog() {
    this.dialog().nativeElement.close();
  }
  static \u0275fac = function DialogComponent_Factory(\u0275t) {
    return new (\u0275t || _DialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DialogComponent, selectors: [["zafira-dialog"]], viewQuery: function DialogComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.dialog, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { header: [1, "header"], dialogText: [1, "dialogText"], cancelBtn: [1, "cancelBtn"], confirmBtn: [1, "confirmBtn"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 4, consts: [["dialog", ""], ["id", "main-dialog"], ["method", "dialog"], ["value", "Cancel", "id", "dialog-footer--cancel-btn"], ["value", "Confirm", "id", "dialog-footer--confirm-btn"]], template: function DialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "dialog", 1, 0)(2, "form", 2)(3, "header")(4, "h4");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "h4");
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "footer")(9, "menu");
      \u0275\u0275template(10, DialogComponent_Conditional_10_Template, 2, 1, "button", 3);
      \u0275\u0275elementStart(11, "button", 4);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.header());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.dialogText());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.cancelBtn() !== "NONE" ? 10 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.confirmBtn(), " ");
    }
  }, styles: ["\n\n#main-dialog[_ngcontent-%COMP%]::backdrop {\n  background: rgba(20, 20, 20, 0.6);\n  opacity: 0.7;\n}\n#main-dialog[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 5px rgb(0 0 0 / 30%);\n  border-radius: 8px;\n  border: none;\n}\n#main-dialog[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n#main-dialog[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: rgba(20, 20, 20, 0.82);\n}\n#main-dialog[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   menu[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n  margin: 0;\n}\n#main-dialog[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  background: none;\n  font-size: 1rem;\n  cursor: pointer;\n  font-size: 1rem;\n  border-radius: 5px;\n  border: 1px solid white;\n}\nfooter[_ngcontent-%COMP%]   #dialog-footer--confirm-btn[_ngcontent-%COMP%] {\n  color: white;\n  background-color: var(--primary-color-1);\n}\nfooter[_ngcontent-%COMP%]   #dialog-footer--cancel-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-color-1);\n}\n#dialog-header--cancel-btn[_ngcontent-%COMP%] {\n  height: fit-content;\n}\n#main-dialog[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  grid-gap: 1.5rem;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DialogComponent, { className: "DialogComponent", filePath: "src\\app\\shared\\components\\dialog\\dialog.component.ts", lineNumber: 10 });
})();

export {
  DialogComponent
};
