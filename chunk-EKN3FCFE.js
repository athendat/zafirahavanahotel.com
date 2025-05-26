import {
  RoomService
} from "./chunk-CH5PPPLS.js";
import {
  FloatTextComponent,
  SubheaderComponent
} from "./chunk-PDCLZWJ2.js";
import {
  Router
} from "./chunk-JSZOCLKC.js";
import {
  ROOM_CARD_DEFAULT,
  ROOM_CARD_DEFAULT_ALT
} from "./chunk-U3KVYWMQ.js";
import {
  CurrencyPipe,
  NgOptimizedImage,
  SlicePipe
} from "./chunk-JT7LBMWZ.js";
import {
  inject,
  input,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdeclareLet,
  ɵɵdefer,
  ɵɵdeferOnViewport,
  ɵɵdeferPrefetchOnIdle,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZXLQTLKG.js";
import {
  __async
} from "./chunk-DAU4QTJP.js";

// src/app/room/components/room-card/room-card.component.ts
var _c0 = () => ({ localAsset: true });
var _c1 = (a0, a1, a2) => ({ format: "webp", width: a0, height: a1, localAsset: a2 });
var RoomCardComponent = class _RoomCardComponent {
  roomData = input.required();
  router = inject(Router);
  roomSrv = inject(RoomService);
  img = ROOM_CARD_DEFAULT;
  imgAlt = ROOM_CARD_DEFAULT_ALT;
  floor(w) {
    return Math.floor(w);
  }
  viewDetails(ev, data) {
    this.roomSrv.selectRoom(data);
    this.router.navigate(["rooms", "details", data.$id]);
  }
  bookRoom(ev, data) {
    this.roomSrv.selectRoom(data);
    this.router.navigate(["rooms", "booking", { room: data.$id }]);
  }
  static \u0275fac = function RoomCardComponent_Factory(\u0275t) {
    return new (\u0275t || _RoomCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomCardComponent, selectors: [["zafira-room-card"]], inputs: { roomData: [1, "roomData"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 38, consts: [[1, "de-room"], [1, "d-image"], [1, "d-details"], [1, "d-meta-1"], ["ngSrc", "images/ui/user.svg", "alt", "", "disableOptimizedSrcset", "", 3, "width", "height", "loaderParams"], [1, "d-meta-2"], ["ngSrc", "images/ui/floorplan.svg", "alt", "", "disableOptimizedSrcset", "", 3, "width", "height", "loaderParams"], [1, "action-elem", 3, "click"], ["placeholder", "", 1, "img-fluid", 3, "ngSrc", "width", "height", "loaderParams", "alt"], [1, "d-img-hover", "img-fluid", 3, "ngSrc", "width", "height", "loaderParams", "alt"], [1, "d-text"], [1, "btn-line", "action-elem", 3, "click"]], template: function RoomCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275declareLet(1);
      \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "span", 3);
      \u0275\u0275element(5, "img", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 5);
      \u0275\u0275element(8, "img", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "a", 7);
      \u0275\u0275listener("click", function RoomCardComponent_Template_a_click_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        const data_r2 = \u0275\u0275readContextLet(1);
        return \u0275\u0275resetView(ctx.viewDetails($event, data_r2));
      });
      \u0275\u0275element(11, "img", 8)(12, "img", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 10)(14, "h3");
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p");
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "slice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "a", 11);
      \u0275\u0275listener("click", function RoomCardComponent_Template_a_click_19_listener($event) {
        \u0275\u0275restoreView(_r1);
        const data_r2 = \u0275\u0275readContextLet(1);
        return \u0275\u0275resetView(ctx.bookRoom($event, data_r2));
      });
      \u0275\u0275elementStart(20, "span");
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "currency");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      const data_r3 = \u0275\u0275storeLet(ctx.roomData());
      \u0275\u0275advance(4);
      \u0275\u0275property("width", 24)("height", 24)("loaderParams", \u0275\u0275pureFunction0(28, _c0));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("", data_r3.capacity, " Guests ");
      \u0275\u0275advance(2);
      \u0275\u0275property("width", 20)("height", 20)("loaderParams", \u0275\u0275pureFunction0(29, _c0));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("", data_r3.dimensions, " ft ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngSrc", data_r3.images && data_r3.images.length > 0 ? data_r3.images[0].url : ctx.img)("width", 800)("height", 533)("loaderParams", \u0275\u0275pureFunction3(30, _c1, data_r3.images.length > 0 ? ctx.floor(data_r3.images[0].width * 0.4) : 400, data_r3.images.length > 0 ? ctx.floor(data_r3.images[0].height * 0.4) : 266, !data_r3.images || !data_r3.images[0]))("alt", data_r3.images && data_r3.images.length > 0 ? data_r3.images[0].description : "");
      \u0275\u0275advance();
      \u0275\u0275property("ngSrc", data_r3.images && data_r3.images.length > 1 ? data_r3.images[1].url : data_r3.images.length > 0 ? data_r3.images[0].url : ctx.imgAlt)("width", 800)("height", 533)("loaderParams", \u0275\u0275pureFunction3(34, _c1, data_r3.images.length > 1 ? ctx.floor(data_r3.images[1].width * 0.4) : data_r3.images.length > 0 ? ctx.floor(data_r3.images[0].width * 0.4) : 400, data_r3.images.length > 1 ? ctx.floor(data_r3.images[1].height * 0.4) : data_r3.images.length > 0 ? ctx.floor(data_r3.images[0].height * 0.4) : 266, !data_r3.images || !data_r3.images[1]))("alt", data_r3.images && data_r3.images.length > 1 ? data_r3.images[1].description : "");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(data_r3.name);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(18, 22, data_r3.description, 0, 148), "...");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Book Now For ", \u0275\u0275pipeBind1(22, 26, data_r3.price), "");
    }
  }, dependencies: [CurrencyPipe, SlicePipe, NgOptimizedImage], styles: ["\n\n.de-room[_ngcontent-%COMP%]   a.btn-line[_ngcontent-%COMP%] {\n  border: solid 2px rgba(255, 255, 255, 0.1);\n}\n.de-room[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.de-room[_ngcontent-%COMP%]   .d-text[_ngcontent-%COMP%] {\n  padding: 30px;\n  background: rgba(var(--bg-dark-color), 0.6);\n}\n.de_light[_ngcontent-%COMP%]   .de-room[_ngcontent-%COMP%]   .d-text[_ngcontent-%COMP%] {\n  padding: 30px;\n  background: rgba(255, 255, 255, 0.75);\n}\n.de-room[_ngcontent-%COMP%]   .d-details[_ngcontent-%COMP%] {\n  color: #ffffff;\n  width: 100%;\n  background:\n    linear-gradient(\n      0deg,\n      rgba(32, 32, 32, 0.75) 25%,\n      rgba(32, 32, 32, 0) 100%);\n  background: rgba(var(--bg-dark-color), 0.5);\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  padding: 10px 30px 7px 30px;\n  letter-spacing: 1px;\n  z-index: 1;\n}\n.de-room[_ngcontent-%COMP%]   .d-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 30px;\n  margin-right: 10px;\n  font-size: 14px;\n}\n.de-room[_ngcontent-%COMP%]   .d-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n}\n.de-room[_ngcontent-%COMP%]   .d-details[_ngcontent-%COMP%]   span.d-meta-2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n.de-room[_ngcontent-%COMP%]   .d-image[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.de-room[_ngcontent-%COMP%]   .d-image[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.de-room[_ngcontent-%COMP%]   .d-image[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   .d-img-hover[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.de-room[_ngcontent-%COMP%]   .d-label[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: absolute;\n  color: #ffffff;\n  background: #333333;\n  padding: 5px;\n  margin: 15px;\n  right: 0;\n  top: 0;\n  text-transform: uppercase;\n  font-size: 10px;\n  line-height: 1em;\n  letter-spacing: 2px;\n  padding-left: 7px;\n  padding-bottom: 4px;\n}\n.de-room[_ngcontent-%COMP%]   .btn-line[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.de-room[_ngcontent-%COMP%]   .d-img-hover[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n}\n.de-content-overlay[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding: 30px;\n  background: rgba(var(--bg-dark-color), 0.6);\n}\n.d-room-details[_ngcontent-%COMP%] {\n  border: solid 1px rgba(255, 255, 255, 0.3);\n  padding: 30px;\n  margin-top: 15px;\n  margin-bottom: 30px;\n  font-size: 18px;\n  color: #ffffff;\n}\n.d-room-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  width: 32px;\n  height: 32px;\n}\n.guests-n-rooms[_ngcontent-%COMP%]   .d-col[_ngcontent-%COMP%] {\n  position: relative;\n}\n.action-elem[_ngcontent-%COMP%] {\n  cursor: pointer;\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomCardComponent, { className: "RoomCardComponent", filePath: "src\\app\\room\\components\\room-card\\room-card.component.ts", lineNumber: 24 });
})();

// src/app/room/components/room-list/room-list.component.ts
var RoomListComponent_Defer_12_DepsFn = () => [import("./chunk-FXCQY2BH.js").then((m) => m.FooterComponent)];
function RoomListComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "zafira-room-card", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("roomData", item_r2);
  }
}
function RoomListComponent_ForEmpty_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1, "There are no rooms available.");
    \u0275\u0275elementEnd();
  }
}
function RoomListComponent_ForEmpty_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1, "Loading rooms...");
    \u0275\u0275elementEnd();
  }
}
function RoomListComponent_ForEmpty_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 10);
    \u0275\u0275element(3, "path", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, RoomListComponent_ForEmpty_9_Conditional_4_Template, 2, 0, "h4")(5, RoomListComponent_ForEmpty_9_Conditional_5_Template, 2, 0, "h4");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.status() !== "LOADING" ? 4 : 5);
  }
}
function RoomListComponent_Defer_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "zafira-footer", 12);
  }
}
function RoomListComponent_DeferPlaceholder_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Loading footer...");
    \u0275\u0275elementEnd();
  }
}
var RoomListComponent = class _RoomListComponent {
  roomSrv = inject(RoomService);
  rooms = this.roomSrv.rooms;
  status = this.roomSrv.requestStatus;
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.roomSrv.getRooms();
    });
  }
  static \u0275fac = function RoomListComponent_Factory(\u0275t) {
    return new (\u0275t || _RoomListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomListComponent, selectors: [["zafira-room-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 1, consts: [["id", "background"], ["id", "content-absolute"], ["subtitle", "Select", "title", "Rooms"], ["id", "section-main", "data-wow-delay", "1.5s", "aria-label", "section-menu", 1, "no-bg", "no-top", "wow", "fadeInUp", "animated"], [1, "container"], [1, "row", "aling-items-center", "g-4", "h-100"], [1, "col-lg-4"], [1, "col-12", "text-center"], [3, "roomData"], [1, "d-block"], ["width", "100px", "height", "100px", "viewBox", "0 0 32 32", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M 6 6 C 4.355469 6 3 7.355469 3 9 L 3 15.78125 C 2.390625 16.332031 2 17.121094 2 18 L 2 27 L 7 27 L 7 25 L 25 25 L 25 27 L 30 27 L 30 18 C 30 17.121094 29.609375 16.332031 29 15.78125 L 29 9 C 29 7.355469 27.644531 6 26 6 Z M 6 8 L 26 8 C 26.554688 8 27 8.445313 27 9 L 27 15 L 25 15 L 25 14 C 25 12.355469 23.644531 11 22 11 L 18 11 C 17.234375 11 16.53125 11.300781 16 11.78125 C 15.46875 11.300781 14.765625 11 14 11 L 10 11 C 8.355469 11 7 12.355469 7 14 L 7 15 L 5 15 L 5 9 C 5 8.445313 5.445313 8 6 8 Z M 10 13 L 14 13 C 14.554688 13 15 13.445313 15 14 L 15 15 L 9 15 L 9 14 C 9 13.445313 9.445313 13 10 13 Z M 18 13 L 22 13 C 22.554688 13 23 13.445313 23 14 L 23 15 L 17 15 L 17 14 C 17 13.445313 17.445313 13 18 13 Z M 5 17 L 27 17 C 27.554688 17 28 17.445313 28 18 L 28 25 L 27 25 L 27 23 L 5 23 L 5 25 L 4 25 L 4 18 C 4 17.445313 4.445313 17 5 17 Z", "fill", "#ffffff"], ["containerClass", "container"]], template: function RoomListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "zafira-float-text")(1, "div", 0);
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275element(3, "zafira-subheader", 2);
      \u0275\u0275elementStart(4, "section", 3)(5, "div", 4)(6, "div", 5);
      \u0275\u0275repeaterCreate(7, RoomListComponent_For_8_Template, 2, 1, "div", 6, \u0275\u0275repeaterTrackByIndex, false, RoomListComponent_ForEmpty_9_Template, 6, 1, "div", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, RoomListComponent_Defer_10_Template, 1, 0)(11, RoomListComponent_DeferPlaceholder_11_Template, 2, 0);
      \u0275\u0275defer(12, 10, RoomListComponent_Defer_12_DepsFn, null, 11);
      \u0275\u0275deferOnViewport(0, -1);
      \u0275\u0275deferPrefetchOnIdle();
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.rooms());
    }
  }, dependencies: [
    FloatTextComponent,
    SubheaderComponent,
    RoomCardComponent
  ], styles: ['\n\n#background[_ngcontent-%COMP%] {\n  background: url("./media/6-RVJXA3M3.jpg") 0% 0% / cover fixed;\n}'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomListComponent, { className: "RoomListComponent", filePath: "src\\app\\room\\components\\room-list\\room-list.component.ts", lineNumber: 26 });
})();
export {
  RoomListComponent
};
