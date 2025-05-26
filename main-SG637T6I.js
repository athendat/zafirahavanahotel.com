import {
  BlogService
} from "./chunk-YTYS7FJX.js";
import {
  takeUntilDestroyed
} from "./chunk-5NZOIMOV.js";
import {
  RoomService
} from "./chunk-CH5PPPLS.js";
import {
  DomRendererFactory2,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  withFetch,
  withHashLocation,
  withInMemoryScrolling
} from "./chunk-JSZOCLKC.js";
import {
  APP_WRITE_CONFIG,
  AppWriteService,
  InfoService,
  Query,
  environment
} from "./chunk-U3KVYWMQ.js";
import {
  DOCUMENT,
  IMAGE_LOADER,
  NgClass,
  NgOptimizedImage,
  NgStyle,
  isPlatformBrowser
} from "./chunk-JT7LBMWZ.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionScheduler,
  DestroyRef,
  Injectable,
  NgZone,
  PLATFORM_ID,
  Renderer2,
  RendererFactory2,
  RuntimeError,
  Subject,
  computed,
  inject,
  input,
  makeEnvironmentProviders,
  performanceMarkFeature,
  provideZoneChangeDetection,
  setClassMetadata,
  signal,
  takeUntil,
  tap,
  timer,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZXLQTLKG.js";
import {
  __async
} from "./chunk-DAU4QTJP.js";

// src/app/shared/supersized-fs-slideshow/supersized-fs-slideshow.component.ts
var _c0 = (a0) => ({ "current-caption": a0 });
var _c1 = (a0) => ({ playing: a0 });
var _c2 = (a0) => ({ "current-slide": a0 });
var _c3 = (a0, a1) => ({ activeslide: a0, prevslide: a1 });
var _c4 = () => ({ visibility: "visible", opacity: 1 });
var _c5 = () => ({ width: 853, height: 568 });
function SupersizedFsSlideshowComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "h3", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 11)(6, "span");
    \u0275\u0275text(7, "Our Facilities");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c0, $index_r2 === ctx_r2.activeIndex()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r1.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r1.subtitle, " ");
  }
}
function SupersizedFsSlideshowComponent_Conditional_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 18)(1, "span", 24);
    \u0275\u0275listener("click", function SupersizedFsSlideshowComponent_Conditional_8_Conditional_6_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.stopTimer());
    });
    \u0275\u0275elementEnd()();
  }
}
function SupersizedFsSlideshowComponent_Conditional_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 19)(1, "span", 25);
    \u0275\u0275listener("click", function SupersizedFsSlideshowComponent_Conditional_8_Conditional_7_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startTimer());
    });
    \u0275\u0275elementEnd()();
  }
}
function SupersizedFsSlideshowComponent_Conditional_8_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 26)(1, "a", 27);
    \u0275\u0275listener("click", function SupersizedFsSlideshowComponent_Conditional_8_For_16_Template_a_click_1_listener() {
      const $index_r8 = \u0275\u0275restoreView(_r7).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goTo($index_r8));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const $index_r8 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("slide-link-" + $index_r8);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c2, ctx_r2.activeIndex() === $index_r8));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Go to slide " + ($index_r8 + 1));
  }
}
function SupersizedFsSlideshowComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275listener("click", function SupersizedFsSlideshowComponent_Conditional_8_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goTo(ctx_r2.activeIndex() - 1));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "a", 13);
    \u0275\u0275listener("click", function SupersizedFsSlideshowComponent_Conditional_8_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goTo(ctx_r2.activeIndex() + 1));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 14);
    \u0275\u0275element(3, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "div", 17);
    \u0275\u0275template(6, SupersizedFsSlideshowComponent_Conditional_8_Conditional_6_Template, 2, 0, "a", 18)(7, SupersizedFsSlideshowComponent_Conditional_8_Conditional_7_Template, 2, 0, "a", 19);
    \u0275\u0275elementStart(8, "div", 20)(9, "span", 21);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " / ");
    \u0275\u0275elementStart(12, "span", 22);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "ul", 23);
    \u0275\u0275repeaterCreate(15, SupersizedFsSlideshowComponent_Conditional_8_For_16_Template, 2, 6, "li", 8, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c1, ctx_r2.timerStatus() === "PLAY"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.timerStatus() === "PLAY" ? 6 : 7);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.activeIndex() ? ctx_r2.activeIndex() + 1 : 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.slides().length);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.slides());
  }
}
function SupersizedFsSlideshowComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 26)(1, "span", 28);
    \u0275\u0275element(2, "img", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const $index_r10 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap("slide-" + $index_r10);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(7, _c3, $index_r10 === ctx_r2.activeIndex(), $index_r10 === ctx_r2.prevSlide()));
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(10, _c4));
    \u0275\u0275advance();
    \u0275\u0275property("ngSrc", item_r9.image)("alt", item_r9.title)("loaderParams", \u0275\u0275pureFunction0(11, _c5));
  }
}
var SupersizedFsSlideshowComponent = class _SupersizedFsSlideshowComponent {
  destroyRef = inject(DestroyRef);
  stop$ = new Subject();
  slides = input.required();
  activeIndex = signal(0);
  prevSlide = signal(0);
  timerStatus = signal("STOP");
  ngOnInit() {
    this.startTimer();
  }
  goTo(index) {
    this.prevSlide.set(this.activeIndex());
    if (index < 0) {
      this.activeIndex.set(this.slides().length - 1);
    } else if (index + 1 > this.slides().length) {
      this.activeIndex.set(0);
    } else {
      this.activeIndex.set(index);
    }
    this.resetTimer();
  }
  startTimer() {
    this.timerStatus.set("PLAY");
    timer(5e3, 5e3).pipe(tap(() => {
      this._updateTimerStatus();
    }), takeUntil(this.stop$), takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  stopTimer() {
    this.timerStatus.set("STOP");
    this.stop$.next(true);
  }
  resetTimer() {
    this.stopTimer();
    this.startTimer();
  }
  _updateTimerStatus() {
    this.activeIndex.update((val) => (val + 1) % this.slides().length);
    const i = this.activeIndex();
    const slidesCount = this.slides().length;
    if (i === 0) {
      this.prevSlide.set(slidesCount - 1);
    } else if (i === slidesCount) {
      this.prevSlide.set(0);
    } else {
      this.prevSlide.set(i - 1);
    }
  }
  static \u0275fac = function SupersizedFsSlideshowComponent_Factory(\u0275t) {
    return new (\u0275t || _SupersizedFsSlideshowComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SupersizedFsSlideshowComponent, selectors: [["zafira-supersized-fs-slideshow"]], inputs: { slides: [1, "slides"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 1, consts: [["id", "content", 1, "no-bottom", "no-top"], [1, "slider-overlay"], ["id", "slidecaption"], [1, "slider-text", "sz-left", 3, "ngClass"], [1, "container"], ["id", "prevthumb"], ["id", "nextthumb"], ["id", "supersized", 2, "visibility", "visible"], [3, "class", "ngClass"], ["data-wow-delay", ".2s", 1, "bg", "sz-text-dark", "sz-bg-white", "wow", "fadeInLeftBig", "animated", 2, "visibility", "visible", "animation-delay", "0.2s", "animation-name", "fadeInLeftBig"], ["data-wow-delay", ".5s", 1, "bg", "sz-text-dark", "sz-bg-white", "wow", "fadeInLeftBig", "animated", 2, "visibility", "visible", "animation-delay", "0.5s", "animation-name", "fadeInLeftBig"], ["data-wow-delay", ".7s", "routerLink", "/about", 1, "btn-line", "wow", "fadeInLeftBig", "animated", 2, "visibility", "visible", "animation-delay", "0.7s", "animation-name", "fadeInLeftBig"], ["id", "prevslide", "aria-label", "Previous slide", "role", "button", 1, "load-item", 3, "click"], ["id", "nextslide", "aria-label", "Next slide", "role", "button", 1, "load-item", 3, "click"], ["id", "progress-back", 1, "load-item"], ["id", "progress-bar", 3, "ngClass"], ["id", "controls-wrapper", 1, "load-item"], ["id", "controls"], ["id", "play-button", "role", "button", "aria-label", "Pause slideshow"], ["id", "play-button", "role", "button", "aria-label", "Play slideshow"], ["id", "slidecounter"], [1, "slidenumber"], [1, "totalslides"], ["id", "slide-list", 2, "margin-left", "-51px"], ["id", "pauseplay", 1, "play", 3, "click"], ["id", "pauseplay", 1, "pause", 3, "click"], [3, "ngClass"], ["role", "button", 3, "click"], [3, "ngStyle"], ["fill", "", "disableOptimizedSrcset", "", "placeholder", "", 1, "bg-img", 3, "ngSrc", "alt", "loaderParams"]], template: function SupersizedFsSlideshowComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275repeaterCreate(3, SupersizedFsSlideshowComponent_For_4_Template, 8, 5, "div", 3, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275element(6, "div", 5)(7, "div", 6);
      \u0275\u0275template(8, SupersizedFsSlideshowComponent_Conditional_8_Template, 17, 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "ul", 7);
      \u0275\u0275repeaterCreate(10, SupersizedFsSlideshowComponent_For_11_Template, 3, 12, "li", 8, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.slides());
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.slides() && ctx.slides().length > 0 ? 8 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.slides());
    }
  }, dependencies: [NgClass, NgStyle, RouterLink, NgOptimizedImage], styles: ['\n\n#supersized[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  z-index: -999;\n  height: 100%;\n  width: 100%;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n#supersized[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  list-style: none;\n  z-index: -30;\n  position: fixed;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #111;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n#supersized[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  color: transparent;\n  background-size: cover;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  opacity: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n@keyframes _ngcontent-%COMP%_imageAnimation {\n  0% {\n    opacity: 0;\n    transform: scale(1.05);\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_textAnimation {\n  0% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n#supersized[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n#supersized[_ngcontent-%COMP%]   li.prevslide[_ngcontent-%COMP%] {\n  z-index: -20;\n}\n#supersized[_ngcontent-%COMP%]   li.activeslide[_ngcontent-%COMP%] {\n  z-index: -10;\n  -webkit-animation: _ngcontent-%COMP%_imageAnimation 1.5s ease-in-out forwards;\n  -moz-animation: imageAnimation 1.5s ease-in-out forwards;\n  -o-animation: imageAnimation 1.5s ease-in-out forwards;\n  -ms-animation: imageAnimation 1.5s ease-in-out forwards;\n  animation: _ngcontent-%COMP%_imageAnimation 1.5s ease-in-out forwards;\n}\n#supersized[_ngcontent-%COMP%]   li.prevslide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n#supersized[_ngcontent-%COMP%]   li.activeslide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline;\n}\n#controls-wrapper[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  height: 42px;\n  width: 100%;\n  bottom: 10px;\n  left: 0;\n  z-index: 100;\n  position: fixed;\n  bottom: 30px;\n}\n#controls[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 100%;\n  position: relative;\n  text-align: left;\n  z-index: 1;\n  padding-left: 20px;\n}\n#slidecounter[_ngcontent-%COMP%] {\n  float: left;\n  color: #fff;\n  font: 14px;\n  margin: 0px 10px 0 15px;\n  line-height: 42px;\n}\n#play-button[_ngcontent-%COMP%] {\n  float: left;\n  margin-top: 1px;\n  border: none;\n}\n#play-button[_ngcontent-%COMP%]:hover {\n  background-position: 0 1px;\n  cursor: pointer;\n}\n#prevslide[_ngcontent-%COMP%], \n#nextslide[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  height: 32px;\n  width: 32px;\n  z-index: 120;\n  margin-top: -21px;\n  opacity: 0.3;\n  border-radius: 30px;\n  -moz-border-radius: 30px;\n  -webkit-border-radius: 30px;\n  background-color: rgba(255, 255, 255, 0.2);\n  transform: scale(0.9);\n  transition: all 0.3s ease;\n}\n#prevslide[_ngcontent-%COMP%] {\n  right: 80px;\n  background: url("./media/back-2OSGGPME.svg") center no-repeat;\n}\n#nextslide[_ngcontent-%COMP%] {\n  right: 40px;\n  background: url("./media/forward-3O2OK442.svg") center no-repeat;\n}\n#prevslide[_ngcontent-%COMP%]:active, \n#nextslide[_ngcontent-%COMP%]:active {\n  margin-top: -19px;\n}\n#prevslide[_ngcontent-%COMP%]:hover, \n#nextslide[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  cursor: pointer;\n  background-color: rgba(255, 255, 255, 0.5);\n  transform: scale(1);\n}\nul#slide-list[_ngcontent-%COMP%] {\n  padding: 15px 0;\n  float: left;\n  position: absolute;\n  left: 50%;\n}\nul#slide-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  width: 24px;\n  height: 12px;\n  float: left;\n  margin: 0 5px;\n}\nul#slide-list[_ngcontent-%COMP%]   li.current-slide[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \nul#slide-list[_ngcontent-%COMP%]   li.current-slide[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-position: 0 0px;\n  background: #ffffff;\n}\nul#slide-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  width: 12px;\n  height: 12px;\n  border: solid 2px rgba(255, 255, 255, 0.6);\n  margin-top: 10px;\n  border-radius: 30px;\n  transition: all 0.3s ease;\n  transform: scale(0.8);\n}\nul#slide-list[_ngcontent-%COMP%]   li.current-slide[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #ffffff;\n  transform: scale(1);\n  border-color: #ffffff;\n}\nul#slide-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.8);\n  transform: scale(1);\n  cursor: pointer;\n}\n#progress-back[_ngcontent-%COMP%] {\n  z-index: 5;\n  position: fixed;\n  bottom: 0px;\n  left: 0;\n  height: 4px;\n  width: 100%;\n  background: url("./media/progress-back-PDZTPZ2Z.png") repeat-x;\n}\n#progress-bar[_ngcontent-%COMP%] {\n  position: relative;\n  height: 4px;\n  width: 100%;\n}\n#pauseplay.play[_ngcontent-%COMP%] {\n  display: block;\n  width: 54px;\n  height: 52px;\n  background: url("./media/pause-T6TUVUZ3.png") top center no-repeat;\n}\n#pauseplay.pause[_ngcontent-%COMP%] {\n  display: block;\n  width: 54px;\n  height: 52px;\n  background: url("./media/play-RSX4AXBS.png") top center no-repeat;\n}\n#progress-bar[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n}\n#progress-bar.playing[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_progressBar 5s ease-in-out infinite;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.3) 0%,\n      rgba(255, 255, 255, 0.9) 100%);\n  height: 4px;\n}\n@keyframes _ngcontent-%COMP%_progressBar {\n  0% {\n    right: 100%;\n  }\n  100% {\n    right: 0%;\n  }\n}\n#slidecaption[_ngcontent-%COMP%] {\n  position: fixed;\n  height: auto;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  display: table;\n}\n.slider-overlay[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background:\n    linear-gradient(\n      0deg,\n      rgba(20, 20, 20, 0.5) 25%,\n      rgba(107, 87, 64, 0.5) 100%);\n}\n.slider-text[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1000;\n  vertical-align: middle;\n  display: table-cell;\n}\n.slide_text.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.slide_text.left[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-left: -10px;\n}\n.slide_text.right[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-left: -20px;\n}\n#slidecaption[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.8em;\n  margin-bottom: 10px;\n  font-weight: 500;\n}\n#slidecaption[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: "Montserrat";\n  font-size: 120px;\n  display: block;\n  color: #fff;\n  text-shadow: none;\n  margin-bottom: 10px;\n  width: 100%;\n  text-transform: uppercase;\n  letter-spacing: 0.5em;\n  padding-left: 0.5em;\n}\n#slidecaption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n#slidecaption[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 40px;\n  display: table;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  text-transform: none;\n  letter-spacing: 0;\n}\n#slidecaption[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 300;\n  max-width: 80%;\n}\n#slidecaption[_ngcontent-%COMP%]   h3.bg[_ngcontent-%COMP%] {\n  background: rgba(var(--primary-color-1-rgb), 0.8);\n  padding: 5px 10px;\n}\n#slidecaption[_ngcontent-%COMP%]   h4.bg[_ngcontent-%COMP%] {\n  background: rgba(var(--bg-dark-color), 0.8);\n  padding: 5px 10px;\n}\n.sz-text-dark[_ngcontent-%COMP%] {\n  color: #000000;\n}\n.sz-bg-white[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.8) !important;\n}\n.sz-left[_ngcontent-%COMP%] {\n  text-align: left;\n  padding-left: 40px;\n}\n.sz-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.sz-left[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-bottom: 10px;\n}\n.slidenumber[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\nul#slide-list[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1001;\n}\n.slider-text[_ngcontent-%COMP%] {\n  visibility: hidden;\n  display: none;\n}\n.slider-text.current-caption[_ngcontent-%COMP%] {\n  visibility: visible;\n  display: table-cell;\n  animation: _ngcontent-%COMP%_textAnimation 0.8s ease-out forwards;\n}\n.bg-img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  transition: transform 7s ease;\n}\n#supersized[_ngcontent-%COMP%]   li.activeslide[_ngcontent-%COMP%]   .bg-img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.btn-line[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 25px;\n  border: 2px solid #fff;\n  background: rgba(255, 255, 255, 0.9);\n  color: #333;\n  font-weight: 600;\n  text-decoration: none;\n  margin-top: 15px;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n.btn-line[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: rgba(var(--primary-color-1-rgb), 0.3);\n  transition: all 0.4s ease;\n  z-index: -1;\n}\n.btn-line[_ngcontent-%COMP%]:hover {\n  color: #000;\n  border-color: rgba(var(--primary-color-1-rgb), 0.8);\n}\n.btn-line[_ngcontent-%COMP%]:hover:before {\n  left: 0;\n}\n.btn-line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n@media only screen and (max-width: 1199px) {\n  #slidecaption[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 80px;\n    letter-spacing: 0.3em;\n    padding-left: 0.3em;\n  }\n  #slidecaption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  #slidecaption[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 24px;\n    max-width: 90%;\n  }\n}\n@media only screen and (max-width: 991px) {\n  #slidecaption[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 60px;\n    letter-spacing: 0.2em;\n    padding-left: 0.2em;\n  }\n  #slidecaption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .sz-left[_ngcontent-%COMP%] {\n    padding-left: 25px;\n  }\n  #controls-wrapper[_ngcontent-%COMP%] {\n    bottom: 20px;\n  }\n  #prevslide[_ngcontent-%COMP%], \n   #nextslide[_ngcontent-%COMP%] {\n    transform: scale(1);\n    bottom: 20px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  #slidecaption[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 40px;\n    letter-spacing: 0.15em;\n    padding-left: 0.15em;\n  }\n  #slidecaption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  #slidecaption[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 18px;\n    max-width: 95%;\n  }\n  .sz-left[_ngcontent-%COMP%] {\n    padding-left: 15px;\n  }\n  .btn-line[_ngcontent-%COMP%] {\n    padding: 8px 20px;\n    margin-top: 10px;\n  }\n  #controls-wrapper[_ngcontent-%COMP%] {\n    bottom: 15px;\n  }\n  #prevslide[_ngcontent-%COMP%], \n   #nextslide[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    bottom: 15px;\n    opacity: 0.6;\n  }\n  #prevslide[_ngcontent-%COMP%] {\n    right: 60px;\n  }\n  ul#slide-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0 3px;\n  }\n  ul#slide-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 10px;\n    height: 10px;\n  }\n  #slidecounter[_ngcontent-%COMP%] {\n    margin: 0px 5px 0 10px;\n    font-size: 12px;\n    line-height: 40px;\n  }\n}\n@media only screen and (max-width: 480px) {\n  #slidecaption[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n    letter-spacing: 0.1em;\n    padding-left: 0.1em;\n  }\n  #slidecaption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  #slidecaption[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .sz-left[_ngcontent-%COMP%] {\n    padding-left: 10px;\n  }\n  #controls[_ngcontent-%COMP%] {\n    padding-left: 10px;\n  }\n  #prevslide[_ngcontent-%COMP%], \n   #nextslide[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n  }\n  #prevslide[_ngcontent-%COMP%] {\n    right: 50px;\n  }\n  #nextslide[_ngcontent-%COMP%] {\n    right: 10px;\n  }\n  #progress-back[_ngcontent-%COMP%] {\n    height: 3px;\n  }\n  #progress-bar[_ngcontent-%COMP%] {\n    height: 3px;\n  }\n  #pauseplay.play[_ngcontent-%COMP%], \n   #pauseplay.pause[_ngcontent-%COMP%] {\n    transform: scale(0.85);\n  }\n  ul#slide-list[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .slider-overlay[_ngcontent-%COMP%] {\n    background:\n      linear-gradient(\n        0deg,\n        rgba(20, 20, 20, 0.6) 25%,\n        rgba(107, 87, 64, 0.6) 100%);\n  }\n}\n@media (hover: none) and (pointer: coarse) {\n  #prevslide[_ngcontent-%COMP%], \n   #nextslide[_ngcontent-%COMP%], \n   .btn-line[_ngcontent-%COMP%], \n   ul#slide-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n   #pauseplay[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n  #prevslide[_ngcontent-%COMP%]:active, \n   #nextslide[_ngcontent-%COMP%]:active {\n    opacity: 0.8;\n    transform: scale(0.95);\n  }\n  .btn-line[_ngcontent-%COMP%]:active {\n    background-color: rgba(var(--primary-color-1-rgb), 0.2);\n  }\n}\n@media only screen and (max-height: 480px) and (orientation: landscape) {\n  #slidecaption[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    margin-bottom: 5px;\n  }\n  #slidecaption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-bottom: 5px;\n  }\n  #slidecaption[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-bottom: 5px;\n  }\n  .btn-line[_ngcontent-%COMP%] {\n    padding: 5px 15px;\n    margin-top: 5px;\n  }\n  #controls-wrapper[_ngcontent-%COMP%] {\n    bottom: 10px;\n  }\n  #progress-back[_ngcontent-%COMP%], \n   #progress-bar[_ngcontent-%COMP%] {\n    height: 2px;\n  }\n}'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SupersizedFsSlideshowComponent, { className: "SupersizedFsSlideshowComponent", filePath: "src\\app\\shared\\supersized-fs-slideshow\\supersized-fs-slideshow.component.ts", lineNumber: 24 });
})();

// src/app/home/services/home.service.ts
var HomeService = class _HomeService {
  apiSrv = inject(AppWriteService);
  _slides = signal([]);
  requestStatus = signal("INITIAL");
  slides = computed(() => this._slides());
  getSlides() {
    return __async(this, null, function* () {
      try {
        this.requestStatus.set("LOADING");
        const data = yield this.apiSrv.getColletionDocuments(APP_WRITE_CONFIG.homeCollectionId, [Query.orderAsc("no")]);
        this._slides.set(data.documents);
        this.requestStatus.set("SUCCESS");
      } catch (error) {
        this._slides.set([]);
        this.requestStatus.set("ERROR");
      }
    });
  }
  static \u0275fac = function HomeService_Factory(\u0275t) {
    return new (\u0275t || _HomeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HomeService, factory: _HomeService.\u0275fac });
};

// src/app/home/home/home.component.ts
var HomeComponent = class _HomeComponent {
  _homeSrv = inject(HomeService);
  slides = computed(() => this._homeSrv.slides().map((e) => {
    const elem = {
      image: e.url,
      subtitle: e.subtitle,
      title: e.title,
      url: "/about"
    };
    return elem;
  }));
  // slides = computed(() =>
  //   JSON.parse(localStorage.getItem('siteInfo') as string).homeImages.map((e: any) => {
  //     const elem: SlideData = {
  //       image: e.url,
  //       subtitle: e.subtitle,
  //       title: e.title,
  //       url: '#/about',
  //     };
  //     return elem;
  //   })
  // );
  ngOnInit() {
    return __async(this, null, function* () {
      this._homeSrv.getSlides();
    });
  }
  static \u0275fac = function HomeComponent_Factory(\u0275t) {
    return new (\u0275t || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["zafira-home"]], standalone: true, features: [\u0275\u0275ProvidersFeature([HomeService]), \u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[3, "slides"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "zafira-supersized-fs-slideshow", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("slides", ctx.slides());
    }
  }, dependencies: [SupersizedFsSlideshowComponent], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\home\\home\\home.component.ts", lineNumber: 21 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "about",
    loadComponent: () => import("./chunk-UXGP4MIE.js").then((mod) => mod.AboutComponent)
  },
  {
    path: "rooms",
    loadChildren: () => import("./chunk-3FETYOVJ.js"),
    providers: [RoomService]
  },
  {
    path: "offers",
    loadChildren: () => import("./chunk-RGW7VPQM.js")
  },
  {
    path: "blog",
    loadChildren: () => import("./chunk-QYXJ3GZH.js"),
    providers: [BlogService]
  },
  {
    path: "gallery",
    loadComponent: () => import("./chunk-NFYWCHUY.js").then((mod) => mod.GalleryComponent)
  },
  {
    path: "contact",
    loadComponent: () => import("./chunk-KKTAXKUZ.js").then((mod) => mod.ContactComponent)
  }
];

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var _AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
    this._rendererFactoryPromise = null;
    this.scheduler = inject(ChangeDetectionScheduler, {
      optional: true
    });
  }
  /** @nodoc */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const moduleImpl = this.moduleImpl ?? import("./chunk-Q6CDVXCM.js").then((m) => m);
    return moduleImpl.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
      this.scheduler?.notify(
        9
        /* NotificationSource.AsyncAnimationsLoaded */
      );
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
};
_AsyncAnimationRendererFactory.\u0275fac = function AsyncAnimationRendererFactory_Factory(\u0275t) {
  \u0275\u0275invalidFactory();
};
_AsyncAnimationRendererFactory.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AsyncAnimationRendererFactory,
  factory: _AsyncAnimationRendererFactory.\u0275fac
});
var AsyncAnimationRendererFactory = _AsyncAnimationRendererFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  constructor(delegate) {
    this.delegate = delegate;
    this.replay = [];
    this.\u0275type = 1;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.delegate.removeChild(parent, oldChild, isHostElement);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style, value, flags) {
    this.delegate.setStyle(el, style, value, flags);
  }
  removeStyle(el, style, flags) {
    this.delegate.removeStyle(el, style, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback));
    }
    return this.delegate.listen(target, eventName, callback);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation(), withInMemoryScrolling({ scrollPositionRestoration: "top" })),
    provideHttpClient(withFetch()),
    {
      provide: IMAGE_LOADER,
      useValue: (config) => {
        const width = config?.loaderParams?.["width"] || config.width || 200;
        const height = config?.loaderParams?.["height"] || 200;
        const format = config?.loaderParams?.["format"] || "webp";
        const requireLocalAsset = config?.loaderParams?.["localAsset"] || false;
        const noSize = config?.loaderParams?.["noSize"] || false;
        if (noSize) {
          return `${environment.appwrite.apiEndpoint}/storage/buckets/${environment.appwrite.bucketId}/files/${config.src}/preview?project=${environment.appwrite.projectId}`;
        }
        if (!requireLocalAsset) {
          return `${environment.appwrite.apiEndpoint}/storage/buckets/${environment.appwrite.bucketId}/files/${config.src}/preview?project=${environment.appwrite.projectId}&width=${width}&height=${height}`;
        }
        return config.src;
      }
    },
    provideAnimationsAsync(),
    AppWriteService,
    InfoService
  ]
};

// src/app/layout/header/header.component.ts
var _c02 = () => ({ exact: true });
var HeaderComponent = class _HeaderComponent {
  ngAfterViewInit() {
    this._initDe();
    this._initMobileMenuHandlers();
    jQuery("#mo-button-open").on("click", function() {
      $("html,body").addClass("no-scroll");
      jQuery("#menu-overlay").fadeIn();
      jQuery("#menu-overlay").css("top", "0");
    });
    jQuery("#mo-button-close").on("click", function() {
      jQuery("#menu-overlay").fadeOut();
      if (jQuery("#menu-overlay").hasClass("slideDown")) {
        jQuery("#menu-overlay").css("top", "-100%");
      }
      $("html,body").delay(500).removeClass("no-scroll");
    });
  }
  _initMobileMenuHandlers() {
    jQuery("#menu-btn").on("click", () => {
      if (jQuery("#mainmenu").is(":hidden")) {
        jQuery("#mainmenu").slideDown();
        jQuery("header").addClass("height-auto");
        jQuery(".force-header-mobile").css("max-height", "100%");
        jQuery("#menu-btn").removeClass("unclick").addClass("clicked");
      } else {
        jQuery("#mainmenu").slideUp("fast", () => {
          jQuery("header").removeClass("height-auto");
          jQuery(".force-header-mobile").css("max-height", "80px");
          jQuery("#menu-btn").removeClass("clicked").addClass("unclick");
        });
      }
    });
    jQuery("#mainmenu a, #mo-menu a").on("click", () => {
      jQuery("#menu-overlay").fadeOut();
      if (jQuery("#menu-overlay").hasClass("slideDown")) {
        jQuery("#menu-overlay").css("top", "-100%");
      }
      if (window.innerWidth < 993) {
        jQuery("#mainmenu").slideUp("fast", () => {
          jQuery("header").removeClass("height-auto");
          jQuery(".force-header-mobile").css("max-height", "80px");
        });
        jQuery("#menu-btn").removeClass("clicked").addClass("unclick");
      }
      $("html,body").delay(500).removeClass("no-scroll");
    });
  }
  _initDe() {
    enquire.register("screen and (max-width: 993px)", {
      match: function() {
        $("header").addClass("header-mobile");
      },
      unmatch: function() {
        $("header").removeClass("header-mobile");
      }
    });
  }
  static \u0275fac = function HeaderComponent_Factory(\u0275t) {
    return new (\u0275t || _HeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["zafira-header"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 65, vars: 8, consts: [["data-wow-delay", ".5s", 1, "header-fullwidth", "menu-expand", "transparent", "wow", "fadeInDown", "animated"], [1, "container-fluid", 2, "background-size", "cover"], [1, "row", 2, "background-size", "cover"], [1, "col-md-12", 2, "background-size", "cover"], [1, "de-flex", 2, "background-size", "cover"], [1, "de-flex-col", 2, "background-size", "cover"], ["id", "logo", 2, "background-size", "cover"], ["routerLink", "/home"], ["src", "images/logo.svg", "alt", "", 1, "logo"], ["id", "mainmenu", 1, "no-separator"], ["routerLink", "/home", "routerLinkActive", "active", 2, "width", "100%"], ["routerLink", "/about", "routerLinkActive", "active", 2, "width", "100%"], ["routerLink", "/rooms", "routerLinkActive", "active", 2, "width", "100%", 3, "routerLinkActiveOptions"], ["routerLink", "/rooms/booking", "routerLinkActive", "active", 2, "width", "100%", 3, "routerLinkActiveOptions"], ["routerLink", "/gallery", "routerLinkActive", "active", 2, "width", "100%"], ["routerLink", "/contact", "routerLinkActive", "active", 2, "width", "100%"], [1, "d-extra", 2, "background-size", "cover"], ["routerLink", "/rooms/booking", 1, "btn-main"], ["id", "menu-btn", 2, "background-size", "cover"], ["id", "menu-overlay", 1, "slideDown"], [1, "container-fluid"], [1, "row-fluid"], [1, "col-md-12"], ["id", "mo-button-close"], [1, "line-1"], [1, "line-2"], [1, "pt80", "pb80"], [1, "mo-nav", "text-center"], [1, "spacer-single"], ["id", "mo-menu"], ["routerLink", "/home", "routerLinkActive", "active"], ["routerLink", "/about", "routerLinkActive", "active"], ["routerLink", "/rooms", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/rooms/booking", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/gallery", "routerLinkActive", "active"], ["routerLink", "/contact", "routerLinkActive", "active"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "a", 7);
      \u0275\u0275element(8, "img", 8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 5)(10, "ul", 9)(11, "li")(12, "a", 10);
      \u0275\u0275text(13, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li")(15, "a", 11);
      \u0275\u0275text(16, "About");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "li")(18, "a", 12);
      \u0275\u0275text(19, "Rooms");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "li")(21, "a", 13);
      \u0275\u0275text(22, " Booking ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "li")(24, "a", 14);
      \u0275\u0275text(25, "Gallery");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "li")(27, "a", 15);
      \u0275\u0275text(28, "Contact");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "div", 5)(30, "div", 16)(31, "a", 17);
      \u0275\u0275text(32, "Booking");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(33, "div", 18);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(34, "div", 19)(35, "div", 20)(36, "div", 21)(37, "div", 22)(38, "div", 23);
      \u0275\u0275element(39, "div", 24)(40, "div", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 26)(42, "div", 27)(43, "a", 7);
      \u0275\u0275element(44, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275element(45, "div", 28);
      \u0275\u0275elementStart(46, "ul", 29)(47, "li")(48, "a", 30);
      \u0275\u0275text(49, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "li")(51, "a", 31);
      \u0275\u0275text(52, "About");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "li")(54, "a", 32);
      \u0275\u0275text(55, "Rooms");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "li")(57, "a", 33);
      \u0275\u0275text(58, "Booking");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "li")(60, "a", 34);
      \u0275\u0275text(61, "Gallery");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "li")(63, "a", 35);
      \u0275\u0275text(64, "Contact");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c02));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c02));
      \u0275\u0275advance(33);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(6, _c02));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(7, _c02));
    }
  }, dependencies: [RouterLink, RouterLinkActive], styles: ['\n\nheader[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1001;\n  -webkit-transition: height 0.3s;\n  -moz-transition: height 0.3s;\n  -ms-transition: height 0.3s;\n  -o-transition: height 0.3s;\n  transition: height 0.3s;\n  background: rgba(var(--bg-dark-color), 0.5);\n  border-bottom: solid 1px rgba(0, 0, 0, 0);\n}\nheader.transparent[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0);\n}\nheader.menu-expand[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%] {\n  display: table;\n  height: 80px;\n}\nheader.menu-expand[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  display: table-cell;\n}\nheader.menu-expand[_ngcontent-%COMP%] {\n  margin-bottom: 200px;\n}\nheader.header-fullwidth[_ngcontent-%COMP%] {\n  padding-left: 40px;\n  padding-right: 40px;\n}\nheader[_ngcontent-%COMP%]   img.logo[_ngcontent-%COMP%] {\n  height: 75px;\n}\n#menu-overlay[_ngcontent-%COMP%]   .mo-nav[_ngcontent-%COMP%]   img.logo[_ngcontent-%COMP%] {\n  height: 300px;\n}\n#menu-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(20, 20, 20, 0.6);\n  color: #ffffff;\n  z-index: 10000;\n  overflow-y: auto;\n  display: none;\n  overflow-x: hidden;\n  -webkit-backdrop-filter: blur(10px);\n  -o-backdrop-filter: blur(10px);\n  -moz-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n#menu-overlay.slideDown[_ngcontent-%COMP%] {\n  top: -100%;\n}\n#mo-button-open[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  width: 30px;\n  right: 40px;\n  margin-top: 22px;\n  overflow: hidden;\n  cursor: pointer;\n}\n#mo-button-open[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 3px;\n  background: #ffffff;\n  margin-bottom: 7px;\n}\n#mo-button-open.mo-bo-s1[_ngcontent-%COMP%] {\n  top: 10px;\n}\n#mo-button-open.mo-bo-s1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 1px;\n}\n#mo-button-open[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]:nth-child(1) {\n  margin-left: 50%;\n}\n#mo-button-open[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]:nth-child(2) {\n  margin-left: 25%;\n}\n#mo-button-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 40px;\n  display: block;\n  width: 30px;\n  height: 45px;\n  cursor: pointer;\n}\n#mo-button-close[_ngcontent-%COMP%]   .line-1[_ngcontent-%COMP%], \n#mo-button-close[_ngcontent-%COMP%]   .line-2[_ngcontent-%COMP%] {\n  top: 32px;\n  width: 30px;\n  height: 1px;\n  background: #ffffff;\n  position: absolute;\n  border-radius: 10px;\n  right: 0px;\n}\n#mo-button-close[_ngcontent-%COMP%]   .line-1[_ngcontent-%COMP%] {\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n#mo-button-close[_ngcontent-%COMP%]   .line-2[_ngcontent-%COMP%] {\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n#mo-button-close[_ngcontent-%COMP%]:hover   .line-1[_ngcontent-%COMP%], \n#mo-button-close[_ngcontent-%COMP%]:hover   .line-2[_ngcontent-%COMP%] {\n  -webkit-transform: rotate(0deg);\n  -moz-transform: rotate(0deg);\n  -o-transform: rotate(0deg);\n  transform: rotate(0deg);\n}\n#mo-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n#mo-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n#mo-menu[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-left: -30px;\n}\n#mo-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n#mo-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n#mo-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  font-family: "Montserrat";\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 40px;\n  padding: 15px 0;\n  display: block;\n  cursor: pointer;\n  letter-spacing: 5px;\n}\n#mo-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  font-weight: 500;\n  text-transform: none;\n  font-size: 20px;\n  letter-spacing: 0;\n  margin: 5px 0;\n  opacity: 0.75;\n}\n#mo-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n#mo-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  position: relative;\n}\n#mo-menu[_ngcontent-%COMP%]    > li.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n#mo-menu[_ngcontent-%COMP%]    > li.mo-parent[_ngcontent-%COMP%] {\n  position: relative;\n}\n#mo-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  overflow: hidden;\n  max-height: 0;\n  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);\n}\n#mo-menu[_ngcontent-%COMP%]:not(.mo-center)    > li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#mo-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ul.full[_ngcontent-%COMP%] {\n  max-height: 2000px;\n  transition: max-height 1s ease-in-out;\n}\n#mo-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%] {\n  color: var(--primary-color-1);\n}\n.de-flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.de-flex[_ngcontent-%COMP%]    > .de-flex-col[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nheader[_ngcontent-%COMP%]   .de-flex-col[_ngcontent-%COMP%] {\n  max-height: 80px;\n}\n#mainmenu[_ngcontent-%COMP%] {\n  font-family:\n    "Montserrat",\n    Arial,\n    Helvetica,\n    sans-serif;\n  float: right;\n  font-size: 14px;\n  font-weight: 400;\n}\n#mainmenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  float: right;\n  margin: 0px 0px;\n  padding: 0px 0px;\n  height: 30px;\n}\n#mainmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0px 0px;\n  padding: 0px 0px;\n  float: left;\n  display: inline;\n  list-style: none;\n  position: relative;\n}\n#mainmenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n#mainmenu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  line-height: 35px;\n}\n#mainmenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 35px 0px 22px 10px;\n  text-decoration: none;\n  text-align: center;\n  outline: none;\n}\n#mainmenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n#mainmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  float: right;\n  position: relative;\n  font-family: "FontAwesome";\n  content: "\\f111";\n  font-size: 6px;\n  margin-left: 20px;\n  margin-top: 0px;\n  color: #fab702;\n}\n#mainmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%]:after {\n  display: none;\n}\n#mainmenu.no-separator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  font-size: 0px;\n}\n#mainmenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\n  color: #222;\n}\nheader.header-mobile[_ngcontent-%COMP%]   #mainmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n  margin-top: 0px;\n}\n#mainmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  background: #222327;\n}\n#mainmenu.sub-transparent[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  background: rgba(10, 10, 10, 0.7);\n}\n#mainmenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n#mainmenu[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: var(--primary-color-1);\n}\nheader[_ngcontent-%COMP%]   .d-extra[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 27px;\n  right: 80px;\n  position: absolute;\n}\na.btn-main[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  font-family: "Montserrat";\n  font-size: 13px;\n  color: #ffffff;\n  letter-spacing: 2px;\n  line-height: 1em;\n  text-decoration: none;\n  text-transform: uppercase;\n  padding: 7px 20px 7px 20px;\n  display: inline-flex;\n  font-weight: bold;\n  border-radius: 0px;\n  -moz-border-radius: 0px;\n  -webkit-border-radius: 0px;\n  background-color: var(--primary-color-1);\n}\n#menu-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-color-1);\n}\n#menu-btn[_ngcontent-%COMP%] {\n  display: none;\n  float: right;\n  margin-top: 5px;\n  width: 36px;\n  height: 36px;\n  padding: 6px;\n  text-align: center;\n  cursor: pointer;\n}\n#menu-btn[_ngcontent-%COMP%]:before {\n  font-family: FontAwesome;\n  content: "\\f0c9";\n  font-size: 24px;\n  color: #eceff3;\n}\n#menu-btn.unclick[_ngcontent-%COMP%]:before {\n  content: "\\f0c9";\n}\n#menu-btn.clicked[_ngcontent-%COMP%]:before {\n  content: "\\f00d";\n}\n#menu-btn[_ngcontent-%COMP%]:hover:before {\n  color: #222;\n}\nheader.header-mobile.height-auto[_ngcontent-%COMP%] {\n  height: 100%;\n  z-index: 2000;\n  position: fixed;\n  background: rgba(17, 17, 17, 0.8);\n  overflow-y: auto;\n}\n@media only screen and (max-width: 992px) {\n  header[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%] {\n    display: table;\n    height: 80px;\n  }\n  header[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    vertical-align: middle;\n    display: table-cell;\n  }\n  header[_ngcontent-%COMP%]   .de-flex[_ngcontent-%COMP%] {\n    display: block;\n  }\n  header[_ngcontent-%COMP%]   .de-flex[_ngcontent-%COMP%]    > .de-flex-col[_ngcontent-%COMP%] {\n    display: block;\n  }\n  header[_ngcontent-%COMP%]   .de-flex[_ngcontent-%COMP%]   #menu-btn[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 20px;\n    right: 30px;\n  }\n  #menu-btn[_ngcontent-%COMP%] {\n    display: block;\n    position: relative;\n    float: right;\n  }\n  header.side-header[_ngcontent-%COMP%]   #menu-btn[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 8px;\n    right: 30px;\n    height: 0;\n    z-index: 2000;\n    height: 35px;\n  }\n  header.header-mobile[_ngcontent-%COMP%]   #mainmenu[_ngcontent-%COMP%] {\n    display: none;\n    float: none;\n    z-index: 200;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    margin-top: 20px;\n  }\n  header.header-mobile[_ngcontent-%COMP%]   #mainmenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-align: left;\n    padding-top: 10px !important;\n    padding-bottom: 10px !important;\n  }\n  header.header-mobile[_ngcontent-%COMP%]   #mainmenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background: none !important;\n  }\n  #mainmenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-align: left;\n    padding-left: 0;\n    padding-top: 10px !important;\n    padding-bottom: 10px !important;\n  }\n  header.header-mobile[_ngcontent-%COMP%]   #mainmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    border-bottom: solid 1px #333;\n    margin: 0;\n    width: 100%;\n    display: block;\n    letter-spacing: 3px;\n  }\n  header.header-mobile[_ngcontent-%COMP%]   #mainmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n    display: none;\n  }\n  header.header-mobile[_ngcontent-%COMP%]   #mainmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 30px;\n  }\n  header.header-mobile[_ngcontent-%COMP%]   #mainmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #eceff3;\n  }\n}'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src\\app\\layout\\header\\header.component.ts", lineNumber: 16 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  _infoSrv = inject(InfoService);
  renderer = inject(Renderer2);
  platformId = inject(PLATFORM_ID);
  isShrunk = false;
  // Track state to avoid redundant style changes
  ngOnInit() {
    return __async(this, null, function* () {
      this._infoSrv.getInfos();
    });
  }
  ngAfterContentInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.onload = () => {
        this.appendStyle("owl.css");
        this.appendStyle("owl-theme.css");
        this.handleJQueryAngularConflict();
        this.onWindowScroll();
      };
    }
  }
  appendStyle(name) {
    let style = document.createElement("link");
    style.rel = "stylesheet";
    style.type = "text/css";
    style.href = name;
    document.head.appendChild(style);
  }
  /**
   * Maneja conflictos entre jQuery y Angular Router con rutas hash
   * Enfoque: Prevenir errores en lugar de parchear jQuery
   */
  handleJQueryAngularConflict() {
    if (!(window.jQuery || window.$)) {
      console.info("jQuery no est\xE1 disponible, no es necesario aplicar fix");
      return;
    }
    try {
      jQuery(document).on("click", 'a[href^="#/"]', (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
      const originalConsoleError = console.error;
      console.error = function(...args) {
        if (args[0] && typeof args[0] === "string" && (args[0].includes("Syntax error, unrecognized expression") || args[0].includes("#/"))) {
          console.warn("jQuery selector error suprimido:", ...args);
          return;
        }
        originalConsoleError.apply(console, args);
      };
      window.jQueryErrorHandler = function(error) {
        if (error && error.message && error.message.includes("Syntax error, unrecognized expression")) {
          console.warn("Interceptado error de selector jQuery:", error.message);
          return true;
        }
        return false;
      };
      if (window.addEventListener) {
        window.addEventListener("error", function(e) {
          if (window.jQueryErrorHandler && window.jQueryErrorHandler(e.error)) {
            e.preventDefault();
          }
        }, true);
      }
      console.log("Manejo de conflictos jQuery-Angular aplicado correctamente");
    } catch (error) {
      console.warn("No se pudo aplicar la soluci\xF3n jQuery-Angular:", error);
    }
  }
  /**
   * Handles header style change on scroll using direct style manipulation,
   * applying styles commonly associated with the 'smaller' state across all screen sizes.
   */
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const header = document.querySelector("header");
      if (!header)
        return;
      const distanceY = window.pageYOffset || document.documentElement.scrollTop;
      const shrinkOn = 100;
      const shrunkStyles = {
        "background-color": "rgba(var(--bg-dark-color), 1)",
        // Example: Darker, slightly more opaque background
        "box-shadow": "0 2px 10px rgba(0, 0, 0, 0.15)"
        // Example: Subtle shadow
      };
      if (distanceY > shrinkOn && !this.isShrunk) {
        Object.keys(shrunkStyles).forEach((key) => {
          this.renderer.setStyle(header, key, shrunkStyles[key]);
        });
        this.isShrunk = true;
      } else if (distanceY <= shrinkOn && this.isShrunk) {
        Object.keys(shrunkStyles).forEach((key) => {
          this.renderer.removeStyle(header, key);
        });
        this.isShrunk = false;
      }
    }
  }
  static \u0275fac = function AppComponent_Factory(\u0275t) {
    return new (\u0275t || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("scroll", function AppComponent_scroll_HostBindingHandler($event) {
        return ctx.onWindowScroll($event);
      }, false, \u0275\u0275resolveWindow);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 0, consts: [["id", "wrapper"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "zafira-header");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2, "router-outlet");
    }
  }, dependencies: [RouterOutlet, HeaderComponent] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 29 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
