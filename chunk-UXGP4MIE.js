import {
  FloatTextComponent,
  SubheaderComponent
} from "./chunk-PDCLZWJ2.js";
import {
  HttpClient,
  RouterLink
} from "./chunk-JSZOCLKC.js";
import {
  APP_WRITE_CONFIG,
  AppWriteService,
  InfoService,
  Query
} from "./chunk-U3KVYWMQ.js";
import {
  NgOptimizedImage
} from "./chunk-JT7LBMWZ.js";
import {
  ElementRef,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdeclareLet,
  ɵɵdefer,
  ɵɵdeferOnViewport,
  ɵɵdeferPrefetchOnIdle,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZXLQTLKG.js";
import {
  __async
} from "./chunk-DAU4QTJP.js";

// src/app/about/services/about.service.ts
var AboutService = class _AboutService {
  apiSrv = inject(AppWriteService);
  _facilities = signal([]);
  requestStatus = signal("INITIAL");
  facilities = computed(() => this._facilities());
  getFacilities() {
    return __async(this, null, function* () {
      try {
        this.requestStatus.set("LOADING");
        const data = yield this.apiSrv.getColletionDocuments(APP_WRITE_CONFIG.facilityCollectionId, [Query.orderAsc("no")]);
        this._facilities.set(data.documents);
        this.requestStatus.set("SUCCESS");
      } catch (error) {
        this._facilities.set([]);
        this.requestStatus.set("ERROR");
      }
    });
  }
  static \u0275fac = function AboutService_Factory(\u0275t) {
    return new (\u0275t || _AboutService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AboutService, factory: _AboutService.\u0275fac });
};

// src/app/shared/pipes/load-svg.directive.ts
var LoadSvgDirective = class _LoadSvgDirective {
  el;
  svgUrl = "";
  color = "white";
  // Se puede cambiar el color por defecto si es necesario
  #httpClient = inject(HttpClient);
  constructor(el) {
    this.el = el;
  }
  ngOnInit() {
    if (this.svgUrl) {
      this.loadSvg();
    }
  }
  ngOnChanges(changes) {
    if (changes["svgUrl"] && !changes["svgUrl"].firstChange) {
      this.loadSvg();
    }
  }
  loadSvg() {
    this.#httpClient.get(this.svgUrl, { responseType: "text" }).subscribe({
      next: (svgContent) => {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgContent, "image/svg+xml");
        const svgElement = svgDoc.querySelector("svg");
        if (svgElement) {
          svgElement.setAttribute("fill", this.color);
          const svgElements = svgElement.querySelectorAll("path, rect, circle, polygon, line, polyline, ellipse");
          svgElements.forEach((element) => {
            const currentFill = element.getAttribute("fill");
            if (!currentFill || currentFill === "none") {
              element.setAttribute("fill", this.color);
            } else {
              element.setAttribute("fill", this.color);
            }
            if (element.hasAttribute("stroke") && element.getAttribute("stroke") !== "none") {
              element.setAttribute("stroke", this.color);
            }
          });
          this.el.nativeElement.innerHTML = svgElement.outerHTML;
        } else {
          this.el.nativeElement.innerHTML = svgContent;
        }
        return svgContent;
      },
      error: (error) => console.error("Error al cargar el SVG:", error)
    });
  }
  static \u0275fac = function LoadSvgDirective_Factory(\u0275t) {
    return new (\u0275t || _LoadSvgDirective)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _LoadSvgDirective, selectors: [["", "loadSvg", ""]], inputs: { svgUrl: [0, "loadSvg", "svgUrl"], color: "color" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature] });
};

// src/app/shared/pipes/splite.pipe.ts
var SplitPipe = class _SplitPipe {
  transform(value, separator) {
    return value.split(separator);
  }
  static \u0275fac = function SplitPipe_Factory(\u0275t) {
    return new (\u0275t || _SplitPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "split", type: _SplitPipe, pure: true, standalone: true });
};

// src/app/about/about/about.component.ts
var _forTrack0 = ($index, $item) => $item.$id;
var AboutComponent_Defer_40_DepsFn = () => [import("./chunk-FXCQY2BH.js").then((m) => m.FooterComponent)];
var _c0 = () => ({ height: 433, width: 286 });
function AboutComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 23);
    \u0275\u0275element(2, "span", 24);
    \u0275\u0275elementStart(3, "div", 25)(4, "h3", 26);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("loadSvg", item_r2.svgUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r2.description, " ");
  }
}
function AboutComponent_ForEmpty_37_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1, "There are no facilities.");
    \u0275\u0275elementEnd();
  }
}
function AboutComponent_ForEmpty_37_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1, "Loading facilities...");
    \u0275\u0275elementEnd();
  }
}
function AboutComponent_ForEmpty_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 27);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 28);
    \u0275\u0275element(3, "path", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, AboutComponent_ForEmpty_37_Conditional_4_Template, 2, 0, "h4")(5, AboutComponent_ForEmpty_37_Conditional_5_Template, 2, 0, "h4");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.status() !== "LOADING" ? 4 : 5);
  }
}
function AboutComponent_Defer_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "zafira-footer", 30);
  }
}
function AboutComponent_DeferPlaceholder_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Loading footer...");
    \u0275\u0275elementEnd();
  }
}
var AboutComponent = class _AboutComponent {
  _aboutSrv = inject(AboutService);
  _infoSrv = inject(InfoService);
  siteInfo = this._infoSrv.siteInfo;
  facilities = this._aboutSrv.facilities;
  status = this._aboutSrv.requestStatus;
  ngOnInit() {
    return __async(this, null, function* () {
      this._aboutSrv.getFacilities();
    });
  }
  static \u0275fac = function AboutComponent_Factory(\u0275t) {
    return new (\u0275t || _AboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["zafira-about"]], standalone: true, features: [\u0275\u0275ProvidersFeature([AboutService]), \u0275\u0275StandaloneFeature], decls: 42, vars: 18, consts: [["id", "background"], ["id", "content-absolute"], ["subtitle", "We Are", 3, "title"], ["id", "section-main", "aria-label", "section-menu", "data-wow-delay", "1.5s", 1, "no-bg", "no-top", "wow", "fadeInUp"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-3", "col-6"], [1, "spacer-double", "sm-hide"], ["disableOptimizedSrcset", "", "placeholder", "", "alt", "", "data-wow-duration", "1s", 1, "img-responsive", "wow", "fadeInUp", 3, "ngSrc", "height", "width", "loaderParams"], ["disableOptimizedSrcset", "", "placeholder", "", "alt", "", "data-wow-duration", "1.5s", 1, "img-responsive", "wow", "fadeInUp", 3, "ngSrc", "height", "width", "loaderParams"], [1, "col-lg-6", "wow", "fadeIn"], [1, "padding20"], [1, "title", "mb10"], [1, "small-border"], ["routerLink", "/rooms", 1, "btn-line"], [1, "clearfix"], [1, "spacer-double"], [1, "row", "gx-4"], [1, "col-lg-12", "text-center"], [1, "title", "center"], [1, "row"], [1, "col-md-4", "mb-3"], [1, "col-12", "text-center"], [1, "box-icon"], [1, "icon", "bg-color", "svg-white", 2, "width", "70px", "height", "70px", "overflow", "hidden", "display", "flex", "align-items", "center", "justify-content", "center", 3, "loadSvg"], [1, "text"], [1, "style-1"], [1, "d-block"], ["width", "100px", "height", "100px", "viewBox", "0 0 32 32", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M 6 6 C 4.355469 6 3 7.355469 3 9 L 3 15.78125 C 2.390625 16.332031 2 17.121094 2 18 L 2 27 L 7 27 L 7 25 L 25 25 L 25 27 L 30 27 L 30 18 C 30 17.121094 29.609375 16.332031 29 15.78125 L 29 9 C 29 7.355469 27.644531 6 26 6 Z M 6 8 L 26 8 C 26.554688 8 27 8.445313 27 9 L 27 15 L 25 15 L 25 14 C 25 12.355469 23.644531 11 22 11 L 18 11 C 17.234375 11 16.53125 11.300781 16 11.78125 C 15.46875 11.300781 14.765625 11 14 11 L 10 11 C 8.355469 11 7 12.355469 7 14 L 7 15 L 5 15 L 5 9 C 5 8.445313 5.445313 8 6 8 Z M 10 13 L 14 13 C 14.554688 13 15 13.445313 15 14 L 15 15 L 9 15 L 9 14 C 9 13.445313 9.445313 13 10 13 Z M 18 13 L 22 13 C 22.554688 13 23 13.445313 23 14 L 23 15 L 17 15 L 17 14 C 17 13.445313 17.445313 13 18 13 Z M 5 17 L 27 17 C 27.554688 17 28 17.445313 28 18 L 28 25 L 27 25 L 27 23 L 5 23 L 5 25 L 4 25 L 4 18 C 4 17.445313 4.445313 17 5 17 Z", "fill", "#ffffff"], ["containerClass", "container"]], template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "zafira-float-text")(1, "div", 0);
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275element(3, "zafira-subheader", 2);
      \u0275\u0275elementStart(4, "section", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6);
      \u0275\u0275element(8, "div", 7)(9, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 6);
      \u0275\u0275element(11, "img", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 10)(13, "div", 11)(14, "h2", 12);
      \u0275\u0275declareLet(15);
      \u0275\u0275pipe(16, "split");
      \u0275\u0275text(17);
      \u0275\u0275element(18, "br");
      \u0275\u0275text(19);
      \u0275\u0275element(20, "span", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "p");
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "a", 14)(24, "span");
      \u0275\u0275text(25, "Choose Room");
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, "s");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(27, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "div", 16);
      \u0275\u0275elementStart(29, "div", 17)(30, "div", 18)(31, "h2", 19);
      \u0275\u0275text(32, " Hotel Facilities ");
      \u0275\u0275element(33, "span", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 20);
      \u0275\u0275repeaterCreate(35, AboutComponent_For_36_Template, 8, 3, "div", 21, _forTrack0, false, AboutComponent_ForEmpty_37_Template, 6, 1, "div", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(38, AboutComponent_Defer_38_Template, 1, 0)(39, AboutComponent_DeferPlaceholder_39_Template, 2, 0);
      \u0275\u0275defer(40, 38, AboutComponent_Defer_40_DepsFn, null, 39);
      \u0275\u0275deferOnViewport(0, -1);
      \u0275\u0275deferPrefetchOnIdle();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      let tmp_5_0;
      let tmp_9_0;
      let tmp_12_0;
      \u0275\u0275advance(3);
      \u0275\u0275property("title", (tmp_0_0 = (tmp_0_0 = ctx.siteInfo()) == null ? null : tmp_0_0.name) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : "");
      \u0275\u0275advance(6);
      \u0275\u0275property("ngSrc", (tmp_1_0 = (tmp_1_0 = ctx.siteInfo()) == null ? null : tmp_1_0.about_image1) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "")("height", 433)("width", 286)("loaderParams", \u0275\u0275pureFunction0(16, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngSrc", (tmp_5_0 = (tmp_5_0 = ctx.siteInfo()) == null ? null : tmp_5_0.about_image2) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : "")("height", 433)("width", 286)("loaderParams", \u0275\u0275pureFunction0(17, _c0));
      const splitedTitle_r3 = \u0275\u0275pipeBind2(16, 13, (tmp_9_0 = (tmp_9_0 = ctx.siteInfo()) == null ? null : tmp_9_0.about_title) !== null && tmp_9_0 !== void 0 ? tmp_9_0 : "", ",");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", splitedTitle_r3[0], ",");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", splitedTitle_r3[1], " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", (tmp_12_0 = (tmp_12_0 = ctx.siteInfo()) == null ? null : tmp_12_0.about_description) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : "", " ");
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.facilities());
    }
  }, dependencies: [
    RouterLink,
    FloatTextComponent,
    SubheaderComponent,
    LoadSvgDirective,
    NgOptimizedImage,
    SplitPipe
  ], styles: ['\n\n#background[_ngcontent-%COMP%] {\n  background: url("./media/2-37SRU7GE.jpg") 0% 0% / cover fixed;\n}\n.box-icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 48px;\n  color: #fff;\n  text-align: center;\n  position: absolute;\n  cursor: default;\n}\n.box-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 70px;\n  padding: 10px;\n}\n.box-icon[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin-left: 90px;\n}\n.box-icon[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\nh2.title[_ngcontent-%COMP%]   .small-border[_ngcontent-%COMP%] {\n  height: 2px;\n}'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src\\app\\about\\about\\about.component.ts", lineNumber: 34 });
})();
export {
  AboutComponent
};
