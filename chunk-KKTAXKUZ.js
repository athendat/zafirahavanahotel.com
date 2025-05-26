import {
  DialogComponent
} from "./chunk-WY5VW3HS.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-T2QSSJNR.js";
import {
  FloatTextComponent,
  SubheaderComponent
} from "./chunk-PDCLZWJ2.js";
import "./chunk-JSZOCLKC.js";
import {
  APP_WRITE_CONFIG,
  AppWriteService,
  EMAIL_PATTERN,
  InfoService
} from "./chunk-U3KVYWMQ.js";
import "./chunk-JT7LBMWZ.js";
import {
  computed,
  inject,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefer,
  ɵɵdeferOnViewport,
  ɵɵdeferPrefetchOnIdle,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate4,
  ɵɵtrustConstantResourceUrl,
  ɵɵviewQuerySignal
} from "./chunk-ZXLQTLKG.js";
import "./chunk-DAU4QTJP.js";

// src/app/contact/services/contact.service.ts
var ContactService = class _ContactService {
  apiSrv = inject(AppWriteService);
  // private readonly _messages = signal<Message[]>([]);
  _activeMessage = signal(null);
  requestStatus = signal("INITIAL");
  // messages = computed<Message[]>(() => this._messages());
  activeMessage = computed(() => this._activeMessage());
  constructor() {
    const activeMessage = sessionStorage.getItem("activeMessage");
    if (activeMessage) {
      this._activeMessage.set(JSON.parse(activeMessage));
    }
  }
  selectMessage(elem) {
    this._activeMessage.set(elem);
    sessionStorage.setItem("activeMessage", JSON.stringify(elem));
  }
  clearSelectedMessage() {
    this._activeMessage.set(null);
    sessionStorage.removeItem("activeMessage");
  }
  sendMessage(requestData) {
    return this.apiSrv.createDocument(APP_WRITE_CONFIG.messageCollectionId, requestData);
  }
  static \u0275fac = function ContactService_Factory(\u0275t) {
    return new (\u0275t || _ContactService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContactService, factory: _ContactService.\u0275fac });
};

// src/app/contact/contact/contact.component.ts
var ContactComponent_Defer_60_DepsFn = () => [import("./chunk-FXCQY2BH.js").then((m) => m.FooterComponent)];
function ContactComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, " Please enter your name. ");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, " Please enter your valid email ID. ");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1, " Please enter your phone number. ");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, " Please enter subject. ");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1, " Please enter your message. ");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, " Your message has been sent successfully. ");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1, " Sorry, error occured this time sending your message. ");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_Defer_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "zafira-footer", 35);
  }
}
function ContactComponent_DeferPlaceholder_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Loading footer...");
    \u0275\u0275elementEnd();
  }
}
var ContactComponent = class _ContactComponent {
  _contactSrv = inject(ContactService);
  _infoSrv = inject(InfoService);
  siteInfo = this._infoSrv.siteInfo;
  fb = inject(FormBuilder);
  frm = this.fb.group({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern(EMAIL_PATTERN)
    ]),
    phone: new FormControl("", []),
    subject: new FormControl("", [Validators.required]),
    message: new FormControl("", [Validators.required])
  });
  status = signal("INITIAL");
  dialogRef = viewChild.required(DialogComponent);
  get name() {
    return this.frm.controls["name"];
  }
  get email() {
    return this.frm.controls["email"];
  }
  get phone() {
    return this.frm.controls["phone"];
  }
  get subject() {
    return this.frm.controls["subject"];
  }
  get message() {
    return this.frm.controls["message"];
  }
  send() {
    this.status.set("LOADING");
    const frmData = this.frm.getRawValue();
    const data = {
      name: frmData.name ?? "",
      phone: frmData.phone ?? "",
      email: frmData.email ?? "",
      subject: frmData.subject ?? "",
      message: frmData.message ?? ""
    };
    this._contactSrv.sendMessage(data).then(() => {
      this.dialogRef().openModalDialog();
      this.frm.reset();
      this.status.set("INITIAL");
    }).catch((e) => {
      this.status.set("ERROR");
    });
  }
  static \u0275fac = function ContactComponent_Factory(\u0275t) {
    return new (\u0275t || _ContactComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactComponent, selectors: [["zafira-contact"]], viewQuery: function ContactComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.dialogRef, DialogComponent, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, standalone: true, features: [\u0275\u0275ProvidersFeature([ContactService]), \u0275\u0275StandaloneFeature], decls: 64, vars: 17, consts: [["confirmDialog", ""], ["id", "background"], ["id", "content-absolute"], ["title", "Contact", "subtitle", "Make a"], ["id", "section-main", "data-wow-delay", "1.5s", "aria-label", "section-menu", 1, "no-bg", "no-top", "wow", "fadeInUp", "animated"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "de-content-overlay"], [1, "col-lg-8"], [3, "href"], [1, "spacer-single"], ["id", "contact_form", 3, "ngSubmit", "formGroup"], [1, "col-md-12", "mb10"], [1, "col-md-5"], [1, "form-control-wrapper"], ["type", "text", "placeholder", "Your Name", "formControlName", "name", 1, "form-control"], ["id", "name_error", 1, "error"], ["type", "email", "placeholder", "Your Email", "formControlName", "email", 1, "form-control"], ["id", "email_error", 1, "error"], ["type", "text", "placeholder", "Your Phone", "formControlName", "phone", 1, "form-control"], ["id", "phone_error", 1, "error"], [1, "col-md-7"], ["type", "text", "placeholder", "Subject", "formControlName", "subject", 1, "form-control"], ["placeholder", "Your Message", "formControlName", "message", 1, "form-control"], ["id", "message_error", 1, "error"], [1, "col-md-12"], ["id", "submit", 1, "mt20"], ["type", "submit", "id", "send_message", 1, "btn", "btn-line", 3, "value", "disabled"], ["id", "mail_success", 1, "success"], ["id", "mail_fail", 1, "error"], [1, "col-lg-4"], [1, "map-container", "map-fullwidth"], ["src", \u0275\u0275trustConstantResourceUrl`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14675.450104916099!2d-82.3649723!3d23.1386997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd79cc78a7d537%3A0xf2d7d908941f91f8!2sZafira%20Havana%20Hotel%20Boutique!5e0!3m2!1ses-419!2scu!4v1725970210924!5m2!1ses-419!2scu`, "width", "600", "height", "450", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 2, "border", "0"], ["header", "Message status", "cancelBtn", "NONE", "confirmBtn", "Ok", "dialogText", "Congratulations! Your message has been sent successfully."], ["containerClass", "container"]], template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "zafira-float-text")(1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275element(3, "zafira-subheader", 3);
      \u0275\u0275elementStart(4, "section", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 6)(10, "div", 9)(11, "h3");
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "address")(14, "span")(15, "strong");
      \u0275\u0275text(16, "Address:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span")(19, "strong");
      \u0275\u0275text(20, "Phone:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span")(23, "strong");
      \u0275\u0275text(24, "Email:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "a", 10);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(27, "div", 11);
      \u0275\u0275elementStart(28, "form", 12);
      \u0275\u0275listener("ngSubmit", function ContactComponent_Template_form_ngSubmit_28_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.send());
      });
      \u0275\u0275elementStart(29, "div", 6)(30, "div", 13)(31, "h3");
      \u0275\u0275text(32, "Send Us Message");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 14)(34, "div", 15);
      \u0275\u0275element(35, "input", 16);
      \u0275\u0275template(36, ContactComponent_Conditional_36_Template, 2, 0, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 15);
      \u0275\u0275element(38, "input", 18);
      \u0275\u0275template(39, ContactComponent_Conditional_39_Template, 2, 0, "div", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 15);
      \u0275\u0275element(41, "input", 20);
      \u0275\u0275template(42, ContactComponent_Conditional_42_Template, 2, 0, "div", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 22)(44, "div", 15);
      \u0275\u0275element(45, "input", 23);
      \u0275\u0275template(46, ContactComponent_Conditional_46_Template, 2, 0, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div");
      \u0275\u0275element(48, "textarea", 24);
      \u0275\u0275template(49, ContactComponent_Conditional_49_Template, 2, 0, "div", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 26)(51, "p", 27);
      \u0275\u0275element(52, "input", 28);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(53, ContactComponent_Conditional_53_Template, 2, 0, "div", 29)(54, ContactComponent_Conditional_54_Template, 2, 0, "div", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 31)(56, "div", 32);
      \u0275\u0275element(57, "iframe", 33);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275template(58, ContactComponent_Defer_58_Template, 1, 0)(59, ContactComponent_DeferPlaceholder_59_Template, 2, 0);
      \u0275\u0275defer(60, 58, ContactComponent_Defer_60_DepsFn, null, 59);
      \u0275\u0275deferOnViewport(0, -1);
      \u0275\u0275deferPrefetchOnIdle();
      \u0275\u0275elementEnd();
      \u0275\u0275element(62, "zafira-dialog", 34, 0);
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate((tmp_1_0 = (tmp_1_0 = ctx.siteInfo()) == null ? null : tmp_1_0.name) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate4("", (tmp_2_0 = ctx.siteInfo()) == null ? null : tmp_2_0.address, ", ", (tmp_2_0 = ctx.siteInfo()) == null ? null : tmp_2_0.city, ", ", (tmp_2_0 = ctx.siteInfo()) == null ? null : tmp_2_0.state, ", ", (tmp_2_0 = ctx.siteInfo()) == null ? null : tmp_2_0.country, " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate((tmp_3_0 = ctx.siteInfo()) == null ? null : tmp_3_0.phone);
      \u0275\u0275advance(4);
      \u0275\u0275property("href", "mailto:" + ((tmp_4_0 = ctx.siteInfo()) == null ? null : tmp_4_0.email), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate((tmp_5_0 = ctx.siteInfo()) == null ? null : tmp_5_0.email);
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.frm);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.name.touched && ctx.name.hasError("required") ? 36 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.email.touched && (ctx.email.hasError("required") || ctx.email.hasError("pattern")) ? 39 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.phone.touched && ctx.phone.hasError("required") ? 42 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.subject.touched && ctx.subject.hasError("required") ? 46 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.message.touched && ctx.message.hasError("required") ? 49 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.status() === "LOADING" ? "Submiting Form" : "Submit Form")("disabled", ctx.frm.invalid);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.status() === "SUCCESS" ? 53 : ctx.status() === "ERROR" ? 54 : -1);
    }
  }, dependencies: [
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    FloatTextComponent,
    SubheaderComponent,
    DialogComponent
  ], styles: ['\n\n#background[_ngcontent-%COMP%] {\n  background: url("./media/9-ZITI2N5Z.jpg") 0% 0% / cover fixed;\n}\n.de-content-overlay[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding: 30px;\n  background: rgba(var(--bg-dark-color), 0.6);\n}\naddress[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-top: 20px;\n}\naddress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  border-bottom: solid 1px rgba(255, 255, 255, 0.1);\n  padding-bottom: 5px;\n  margin-bottom: 5px;\n}\naddress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 70px;\n}\naddress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-right: 20px;\n  float: none;\n}\naddress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: inline-block;\n}\naddress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #eceff3;\n}\n.map-container[_ngcontent-%COMP%] {\n  height: 500px;\n  overflow: hidden;\n}\n.map-container.map-fullwidth[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 500px;\n}\n#contact_form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], \n#contact_form[_ngcontent-%COMP%]   input[type=tel][_ngcontent-%COMP%], \n#contact_form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n#contact_form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], \n#contact_form[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], \n#contact_form[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], \n#contact_form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin-bottom: 2px;\n  color: #fff;\n  border: solid 1px rgba(255, 255, 255, 0.3);\n  border-radius: 0 !important;\n  height: auto;\n  background: rgba(34, 34, 34, 0);\n}\n#contact_form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 138px;\n}\n#contact_form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #eee;\n}\n#contact_form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #eee;\n}\n#contact_form[_ngcontent-%COMP%]   input[type=submit].btn-line[_ngcontent-%COMP%] {\n  background: none;\n  padding: 8px 20px;\n}\n#contact_form[_ngcontent-%COMP%]   input[type=submit].btn-line[_ngcontent-%COMP%]:hover {\n  background: #111;\n  border-color: #111;\n}\n#contact_form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, \n#contact_form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:focus, \n#contact_form[_ngcontent-%COMP%]   input[type=tel][_ngcontent-%COMP%]:focus, \n#contact_form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-color-1);\n  box-shadow: none;\n}\n#contact_form[_ngcontent-%COMP%]   input[type=submit].btn-line[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-color-1);\n}\n.form-control-wrapper[_ngcontent-%COMP%] {\n  height: 86px;\n  margin-bottom: 5px;\n  text-align: center;\n}'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactComponent, { className: "ContactComponent", filePath: "src\\app\\contact\\contact\\contact.component.ts", lineNumber: 39 });
})();
export {
  ContactComponent
};
