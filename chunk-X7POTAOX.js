import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-OTCWYWHG.js";
import {
  A11yModule,
  BasePortalOutlet,
  CdkPortalOutlet,
  CdkScrollable,
  ComponentPortal,
  ConfigurableFocusTrapFactory,
  Dir,
  Directionality,
  ESCAPE,
  FocusMonitor,
  FocusTrapFactory,
  InteractivityChecker,
  LEFT_ARROW,
  MatButtonModule,
  MatCommonModule,
  MatIconButton,
  Overlay,
  OverlayConfig,
  OverlayContainer,
  OverlayModule,
  OverlayRef,
  Platform,
  PortalModule,
  RIGHT_ARROW,
  RtlScrollAxisType,
  TemplatePortal,
  _IdGenerator,
  _getFocusedElementPierceShadowDom,
  coerceCssPixelValue,
  coerceNumberProperty,
  getRtlScrollAxisType,
  hasModifierKey
} from "./chunk-T3XFCYZY.js";
import {
  DomSanitizer,
  HttpClient
} from "./chunk-JSZOCLKC.js";
import {
  AsyncPipe,
  CommonModule,
  DOCUMENT,
  IMAGE_LOADER,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet
} from "./chunk-JT7LBMWZ.js";
import {
  ANIMATION_MODULE_TYPE,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  EMPTY,
  ElementRef,
  ErrorHandler,
  EventEmitter,
  Host,
  HostAttributeToken,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  QueryList,
  Renderer2,
  SecurityContext,
  Self,
  SkipSelf,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewEncapsulation$1,
  afterNextRender,
  animationFrameScheduler,
  booleanAttribute,
  catchError,
  combineLatest,
  debounceTime,
  defer,
  delay,
  distinctUntilChanged,
  expand,
  filter,
  finalize,
  firstValueFrom,
  forkJoin,
  from,
  fromEvent,
  inject,
  map,
  merge,
  mergeMap,
  numberAttribute,
  of,
  setClassMetadata,
  share,
  startWith,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵsyntheticHostListener,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-ZXLQTLKG.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-DAU4QTJP.js";

// node_modules/@angular/cdk/fesm2022/dialog.mjs
function CdkDialogContainer_ng_template_0_Template(rf, ctx) {
}
var DialogConfig = class {
  /**
   * Where the attached component should live in Angular's *logical* component tree.
   * This affects what is available for injection and the change detection order for the
   * component instantiated inside of the dialog. This does not affect where the dialog
   * content will be rendered.
   */
  viewContainerRef;
  /**
   * Injector used for the instantiation of the component to be attached. If provided,
   * takes precedence over the injector indirectly provided by `ViewContainerRef`.
   */
  injector;
  /** ID for the dialog. If omitted, a unique one will be generated. */
  id;
  /** The ARIA role of the dialog element. */
  role = "dialog";
  /** Optional CSS class or classes applied to the overlay panel. */
  panelClass = "";
  /** Whether the dialog has a backdrop. */
  hasBackdrop = true;
  /** Optional CSS class or classes applied to the overlay backdrop. */
  backdropClass = "";
  /** Whether the dialog closes with the escape key or pointer events outside the panel element. */
  disableClose = false;
  /** Width of the dialog. */
  width = "";
  /** Height of the dialog. */
  height = "";
  /** Min-width of the dialog. If a number is provided, assumes pixel units. */
  minWidth;
  /** Min-height of the dialog. If a number is provided, assumes pixel units. */
  minHeight;
  /** Max-width of the dialog. If a number is provided, assumes pixel units. Defaults to 80vw. */
  maxWidth;
  /** Max-height of the dialog. If a number is provided, assumes pixel units. */
  maxHeight;
  /** Strategy to use when positioning the dialog. Defaults to centering it on the page. */
  positionStrategy;
  /** Data being injected into the child component. */
  data = null;
  /** Layout direction for the dialog's content. */
  direction;
  /** ID of the element that describes the dialog. */
  ariaDescribedBy = null;
  /** ID of the element that labels the dialog. */
  ariaLabelledBy = null;
  /** Dialog label applied via `aria-label` */
  ariaLabel = null;
  /**
   * Whether this is a modal dialog. Used to set the `aria-modal` attribute. Off by default,
   * because it can interfere with other overlay-based components (e.g. `mat-select`) and because
   * it is redundant since the dialog marks all outside content as `aria-hidden` anyway.
   */
  ariaModal = false;
  /**
   * Where the dialog should focus on open.
   * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
   * AutoFocusTarget instead.
   */
  autoFocus = "first-tabbable";
  /**
   * Whether the dialog should restore focus to the previously-focused element upon closing.
   * Has the following behavior based on the type that is passed in:
   * - `boolean` - when true, will return focus to the element that was focused before the dialog
   *    was opened, otherwise won't restore focus at all.
   * - `string` - focus will be restored to the first element that matches the CSS selector.
   * - `HTMLElement` - focus will be restored to the specific element.
   */
  restoreFocus = true;
  /**
   * Scroll strategy to be used for the dialog. This determines how
   * the dialog responds to scrolling underneath the panel element.
   */
  scrollStrategy;
  /**
   * Whether the dialog should close when the user navigates backwards or forwards through browser
   * history. This does not apply to navigation via anchor element unless using URL-hash based
   * routing (`HashLocationStrategy` in the Angular router).
   */
  closeOnNavigation = true;
  /**
   * Whether the dialog should close when the dialog service is destroyed. This is useful if
   * another service is wrapping the dialog and is managing the destruction instead.
   */
  closeOnDestroy = true;
  /**
   * Whether the dialog should close when the underlying overlay is detached. This is useful if
   * another service is wrapping the dialog and is managing the destruction instead. E.g. an
   * external detachment can happen as a result of a scroll strategy triggering it or when the
   * browser location changes.
   */
  closeOnOverlayDetachments = true;
  /**
   * Alternate `ComponentFactoryResolver` to use when resolving the associated component.
   * @deprecated No longer used. Will be removed.
   * @breaking-change 20.0.0
   */
  componentFactoryResolver;
  /**
   * Providers that will be exposed to the contents of the dialog. Can also
   * be provided as a function in order to generate the providers lazily.
   */
  providers;
  /**
   * Component into which the dialog content will be rendered. Defaults to `CdkDialogContainer`.
   * A configuration object can be passed in to customize the providers that will be exposed
   * to the dialog container.
   */
  container;
  /**
   * Context that will be passed to template-based dialogs.
   * A function can be passed in to resolve the context lazily.
   */
  templateContext;
};
function throwDialogContentAlreadyAttachedError() {
  throw Error("Attempting to attach dialog content after content is already attached");
}
var CdkDialogContainer = class _CdkDialogContainer extends BasePortalOutlet {
  _elementRef = inject(ElementRef);
  _focusTrapFactory = inject(FocusTrapFactory);
  _config;
  _interactivityChecker = inject(InteractivityChecker);
  _ngZone = inject(NgZone);
  _overlayRef = inject(OverlayRef);
  _focusMonitor = inject(FocusMonitor);
  _renderer = inject(Renderer2);
  _platform = inject(Platform);
  _document = inject(DOCUMENT, {
    optional: true
  });
  /** The portal outlet inside of this container into which the dialog content will be loaded. */
  _portalOutlet;
  /** The class that traps and manages focus within the dialog. */
  _focusTrap = null;
  /** Element that was focused before the dialog was opened. Save this to restore upon close. */
  _elementFocusedBeforeDialogWasOpened = null;
  /**
   * Type of interaction that led to the dialog being closed. This is used to determine
   * whether the focus style will be applied when returning focus to its original location
   * after the dialog is closed.
   */
  _closeInteractionType = null;
  /**
   * Queue of the IDs of the dialog's label element, based on their definition order. The first
   * ID will be used as the `aria-labelledby` value. We use a queue here to handle the case
   * where there are two or more titles in the DOM at a time and the first one is destroyed while
   * the rest are present.
   */
  _ariaLabelledByQueue = [];
  _changeDetectorRef = inject(ChangeDetectorRef);
  _injector = inject(Injector);
  _isDestroyed = false;
  constructor() {
    super();
    this._config = inject(DialogConfig, {
      optional: true
    }) || new DialogConfig();
    if (this._config.ariaLabelledBy) {
      this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
    }
  }
  _addAriaLabelledBy(id) {
    this._ariaLabelledByQueue.push(id);
    this._changeDetectorRef.markForCheck();
  }
  _removeAriaLabelledBy(id) {
    const index = this._ariaLabelledByQueue.indexOf(id);
    if (index > -1) {
      this._ariaLabelledByQueue.splice(index, 1);
      this._changeDetectorRef.markForCheck();
    }
  }
  _contentAttached() {
    this._initializeFocusTrap();
    this._handleBackdropClicks();
    this._captureInitialFocus();
  }
  /**
   * Can be used by child classes to customize the initial focus
   * capturing behavior (e.g. if it's tied to an animation).
   */
  _captureInitialFocus() {
    this._trapFocus();
  }
  ngOnDestroy() {
    this._isDestroyed = true;
    this._restoreFocus();
  }
  /**
   * Attach a ComponentPortal as content to this dialog container.
   * @param portal Portal to be attached as the dialog content.
   */
  attachComponentPortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachComponentPortal(portal);
    this._contentAttached();
    return result;
  }
  /**
   * Attach a TemplatePortal as content to this dialog container.
   * @param portal Portal to be attached as the dialog content.
   */
  attachTemplatePortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachTemplatePortal(portal);
    this._contentAttached();
    return result;
  }
  /**
   * Attaches a DOM portal to the dialog container.
   * @param portal Portal to be attached.
   * @deprecated To be turned into a method.
   * @breaking-change 10.0.0
   */
  attachDomPortal = (portal) => {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachDomPortal(portal);
    this._contentAttached();
    return result;
  };
  // TODO(crisbeto): this shouldn't be exposed, but there are internal references to it.
  /** Captures focus if it isn't already inside the dialog. */
  _recaptureFocus() {
    if (!this._containsFocus()) {
      this._trapFocus();
    }
  }
  /**
   * Focuses the provided element. If the element is not focusable, it will add a tabIndex
   * attribute to forcefully focus it. The attribute is removed after focus is moved.
   * @param element The element to focus.
   */
  _forceFocus(element, options) {
    if (!this._interactivityChecker.isFocusable(element)) {
      element.tabIndex = -1;
      this._ngZone.runOutsideAngular(() => {
        const callback = () => {
          deregisterBlur();
          deregisterMousedown();
          element.removeAttribute("tabindex");
        };
        const deregisterBlur = this._renderer.listen(element, "blur", callback);
        const deregisterMousedown = this._renderer.listen(element, "mousedown", callback);
      });
    }
    element.focus(options);
  }
  /**
   * Focuses the first element that matches the given selector within the focus trap.
   * @param selector The CSS selector for the element to set focus to.
   */
  _focusByCssSelector(selector, options) {
    let elementToFocus = this._elementRef.nativeElement.querySelector(selector);
    if (elementToFocus) {
      this._forceFocus(elementToFocus, options);
    }
  }
  /**
   * Moves the focus inside the focus trap. When autoFocus is not set to 'dialog', if focus
   * cannot be moved then focus will go to the dialog container.
   */
  _trapFocus() {
    if (this._isDestroyed) {
      return;
    }
    afterNextRender(() => {
      const element = this._elementRef.nativeElement;
      switch (this._config.autoFocus) {
        case false:
        case "dialog":
          if (!this._containsFocus()) {
            element.focus();
          }
          break;
        case true:
        case "first-tabbable":
          const focusedSuccessfully = this._focusTrap?.focusInitialElement();
          if (!focusedSuccessfully) {
            this._focusDialogContainer();
          }
          break;
        case "first-heading":
          this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
          break;
        default:
          this._focusByCssSelector(this._config.autoFocus);
          break;
      }
    }, {
      injector: this._injector
    });
  }
  /** Restores focus to the element that was focused before the dialog opened. */
  _restoreFocus() {
    const focusConfig = this._config.restoreFocus;
    let focusTargetElement = null;
    if (typeof focusConfig === "string") {
      focusTargetElement = this._document.querySelector(focusConfig);
    } else if (typeof focusConfig === "boolean") {
      focusTargetElement = focusConfig ? this._elementFocusedBeforeDialogWasOpened : null;
    } else if (focusConfig) {
      focusTargetElement = focusConfig;
    }
    if (this._config.restoreFocus && focusTargetElement && typeof focusTargetElement.focus === "function") {
      const activeElement = _getFocusedElementPierceShadowDom();
      const element = this._elementRef.nativeElement;
      if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
        if (this._focusMonitor) {
          this._focusMonitor.focusVia(focusTargetElement, this._closeInteractionType);
          this._closeInteractionType = null;
        } else {
          focusTargetElement.focus();
        }
      }
    }
    if (this._focusTrap) {
      this._focusTrap.destroy();
    }
  }
  /** Focuses the dialog container. */
  _focusDialogContainer() {
    if (this._elementRef.nativeElement.focus) {
      this._elementRef.nativeElement.focus();
    }
  }
  /** Returns whether focus is inside the dialog. */
  _containsFocus() {
    const element = this._elementRef.nativeElement;
    const activeElement = _getFocusedElementPierceShadowDom();
    return element === activeElement || element.contains(activeElement);
  }
  /** Sets up the focus trap. */
  _initializeFocusTrap() {
    if (this._platform.isBrowser) {
      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
      if (this._document) {
        this._elementFocusedBeforeDialogWasOpened = _getFocusedElementPierceShadowDom();
      }
    }
  }
  /** Sets up the listener that handles clicks on the dialog backdrop. */
  _handleBackdropClicks() {
    this._overlayRef.backdropClick().subscribe(() => {
      if (this._config.disableClose) {
        this._recaptureFocus();
      }
    });
  }
  static \u0275fac = function CdkDialogContainer_Factory(\u0275t) {
    return new (\u0275t || _CdkDialogContainer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkDialogContainer,
    selectors: [["cdk-dialog-container"]],
    viewQuery: function CdkDialogContainer_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(CdkPortalOutlet, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._portalOutlet = _t.first);
      }
    },
    hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"],
    hostVars: 6,
    hostBindings: function CdkDialogContainer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx._config.id || null)("role", ctx._config.role)("aria-modal", ctx._config.ariaModal)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0])("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
      }
    },
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 1,
    vars: 0,
    consts: [["cdkPortalOutlet", ""]],
    template: function CdkDialogContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CdkDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
      }
    },
    dependencies: [CdkPortalOutlet],
    styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDialogContainer, [{
    type: Component,
    args: [{
      selector: "cdk-dialog-container",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      imports: [CdkPortalOutlet],
      host: {
        "class": "cdk-dialog-container",
        "tabindex": "-1",
        "[attr.id]": "_config.id || null",
        "[attr.role]": "_config.role",
        "[attr.aria-modal]": "_config.ariaModal",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null"
      },
      template: "<ng-template cdkPortalOutlet />\n",
      styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"]
    }]
  }], () => [], {
    _portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, {
        static: true
      }]
    }]
  });
})();
var DialogRef = class {
  overlayRef;
  config;
  /**
   * Instance of component opened into the dialog. Will be
   * null when the dialog is opened using a `TemplateRef`.
   */
  componentInstance;
  /**
   * `ComponentRef` of the component opened into the dialog. Will be
   * null when the dialog is opened using a `TemplateRef`.
   */
  componentRef;
  /** Instance of the container that is rendering out the dialog content. */
  containerInstance;
  /** Whether the user is allowed to close the dialog. */
  disableClose;
  /** Emits when the dialog has been closed. */
  closed = new Subject();
  /** Emits when the backdrop of the dialog is clicked. */
  backdropClick;
  /** Emits when on keyboard events within the dialog. */
  keydownEvents;
  /** Emits on pointer events that happen outside of the dialog. */
  outsidePointerEvents;
  /** Unique ID for the dialog. */
  id;
  /** Subscription to external detachments of the dialog. */
  _detachSubscription;
  constructor(overlayRef, config) {
    this.overlayRef = overlayRef;
    this.config = config;
    this.disableClose = config.disableClose;
    this.backdropClick = overlayRef.backdropClick();
    this.keydownEvents = overlayRef.keydownEvents();
    this.outsidePointerEvents = overlayRef.outsidePointerEvents();
    this.id = config.id;
    this.keydownEvents.subscribe((event) => {
      if (event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)) {
        event.preventDefault();
        this.close(void 0, {
          focusOrigin: "keyboard"
        });
      }
    });
    this.backdropClick.subscribe(() => {
      if (!this.disableClose) {
        this.close(void 0, {
          focusOrigin: "mouse"
        });
      }
    });
    this._detachSubscription = overlayRef.detachments().subscribe(() => {
      if (config.closeOnOverlayDetachments !== false) {
        this.close();
      }
    });
  }
  /**
   * Close the dialog.
   * @param result Optional result to return to the dialog opener.
   * @param options Additional options to customize the closing behavior.
   */
  close(result, options) {
    if (this.containerInstance) {
      const closedSubject = this.closed;
      this.containerInstance._closeInteractionType = options?.focusOrigin || "program";
      this._detachSubscription.unsubscribe();
      this.overlayRef.dispose();
      closedSubject.next(result);
      closedSubject.complete();
      this.componentInstance = this.containerInstance = null;
    }
  }
  /** Updates the position of the dialog based on the current position strategy. */
  updatePosition() {
    this.overlayRef.updatePosition();
    return this;
  }
  /**
   * Updates the dialog's width and height.
   * @param width New width of the dialog.
   * @param height New height of the dialog.
   */
  updateSize(width = "", height = "") {
    this.overlayRef.updateSize({
      width,
      height
    });
    return this;
  }
  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes) {
    this.overlayRef.addPanelClass(classes);
    return this;
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes) {
    this.overlayRef.removePanelClass(classes);
    return this;
  }
};
var DIALOG_SCROLL_STRATEGY = new InjectionToken("DialogScrollStrategy", {
  providedIn: "root",
  factory: () => {
    const overlay = inject(Overlay);
    return () => overlay.scrollStrategies.block();
  }
});
var DIALOG_DATA = new InjectionToken("DialogData");
var DEFAULT_DIALOG_CONFIG = new InjectionToken("DefaultDialogConfig");
var Dialog = class _Dialog {
  _overlay = inject(Overlay);
  _injector = inject(Injector);
  _defaultOptions = inject(DEFAULT_DIALOG_CONFIG, {
    optional: true
  });
  _parentDialog = inject(_Dialog, {
    optional: true,
    skipSelf: true
  });
  _overlayContainer = inject(OverlayContainer);
  _idGenerator = inject(_IdGenerator);
  _openDialogsAtThisLevel = [];
  _afterAllClosedAtThisLevel = new Subject();
  _afterOpenedAtThisLevel = new Subject();
  _ariaHiddenElements = /* @__PURE__ */ new Map();
  _scrollStrategy = inject(DIALOG_SCROLL_STRATEGY);
  /** Keeps track of the currently-open dialogs. */
  get openDialogs() {
    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  /** Stream that emits when a dialog has been opened. */
  get afterOpened() {
    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
  }
  /**
   * Stream that emits when all open dialog have finished closing.
   * Will emit on subscribe if there are no open dialogs to begin with.
   */
  afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
  constructor() {
  }
  open(componentOrTemplateRef, config) {
    const defaults = this._defaultOptions || new DialogConfig();
    config = __spreadValues(__spreadValues({}, defaults), config);
    config.id = config.id || this._idGenerator.getId("cdk-dialog-");
    if (config.id && this.getDialogById(config.id) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Dialog with id "${config.id}" exists already. The dialog id must be unique.`);
    }
    const overlayConfig = this._getOverlayConfig(config);
    const overlayRef = this._overlay.create(overlayConfig);
    const dialogRef = new DialogRef(overlayRef, config);
    const dialogContainer = this._attachContainer(overlayRef, dialogRef, config);
    dialogRef.containerInstance = dialogContainer;
    this._attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config);
    if (!this.openDialogs.length) {
      this._hideNonDialogContentFromAssistiveTechnology();
    }
    this.openDialogs.push(dialogRef);
    dialogRef.closed.subscribe(() => this._removeOpenDialog(dialogRef, true));
    this.afterOpened.next(dialogRef);
    return dialogRef;
  }
  /**
   * Closes all of the currently-open dialogs.
   */
  closeAll() {
    reverseForEach(this.openDialogs, (dialog) => dialog.close());
  }
  /**
   * Finds an open dialog by its id.
   * @param id ID to use when looking up the dialog.
   */
  getDialogById(id) {
    return this.openDialogs.find((dialog) => dialog.id === id);
  }
  ngOnDestroy() {
    reverseForEach(this._openDialogsAtThisLevel, (dialog) => {
      if (dialog.config.closeOnDestroy === false) {
        this._removeOpenDialog(dialog, false);
      }
    });
    reverseForEach(this._openDialogsAtThisLevel, (dialog) => dialog.close());
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
    this._openDialogsAtThisLevel = [];
  }
  /**
   * Creates an overlay config from a dialog config.
   * @param config The dialog configuration.
   * @returns The overlay configuration.
   */
  _getOverlayConfig(config) {
    const state2 = new OverlayConfig({
      positionStrategy: config.positionStrategy || this._overlay.position().global().centerHorizontally().centerVertically(),
      scrollStrategy: config.scrollStrategy || this._scrollStrategy(),
      panelClass: config.panelClass,
      hasBackdrop: config.hasBackdrop,
      direction: config.direction,
      minWidth: config.minWidth,
      minHeight: config.minHeight,
      maxWidth: config.maxWidth,
      maxHeight: config.maxHeight,
      width: config.width,
      height: config.height,
      disposeOnNavigation: config.closeOnNavigation
    });
    if (config.backdropClass) {
      state2.backdropClass = config.backdropClass;
    }
    return state2;
  }
  /**
   * Attaches a dialog container to a dialog's already-created overlay.
   * @param overlay Reference to the dialog's underlying overlay.
   * @param config The dialog configuration.
   * @returns A promise resolving to a ComponentRef for the attached container.
   */
  _attachContainer(overlay, dialogRef, config) {
    const userInjector = config.injector || config.viewContainerRef?.injector;
    const providers = [{
      provide: DialogConfig,
      useValue: config
    }, {
      provide: DialogRef,
      useValue: dialogRef
    }, {
      provide: OverlayRef,
      useValue: overlay
    }];
    let containerType;
    if (config.container) {
      if (typeof config.container === "function") {
        containerType = config.container;
      } else {
        containerType = config.container.type;
        providers.push(...config.container.providers(config));
      }
    } else {
      containerType = CdkDialogContainer;
    }
    const containerPortal = new ComponentPortal(containerType, config.viewContainerRef, Injector.create({
      parent: userInjector || this._injector,
      providers
    }));
    const containerRef = overlay.attach(containerPortal);
    return containerRef.instance;
  }
  /**
   * Attaches the user-provided component to the already-created dialog container.
   * @param componentOrTemplateRef The type of component being loaded into the dialog,
   *     or a TemplateRef to instantiate as the content.
   * @param dialogRef Reference to the dialog being opened.
   * @param dialogContainer Component that is going to wrap the dialog content.
   * @param config Configuration used to open the dialog.
   */
  _attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config) {
    if (componentOrTemplateRef instanceof TemplateRef) {
      const injector = this._createInjector(config, dialogRef, dialogContainer, void 0);
      let context = {
        $implicit: config.data,
        dialogRef
      };
      if (config.templateContext) {
        context = __spreadValues(__spreadValues({}, context), typeof config.templateContext === "function" ? config.templateContext() : config.templateContext);
      }
      dialogContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, null, context, injector));
    } else {
      const injector = this._createInjector(config, dialogRef, dialogContainer, this._injector);
      const contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, config.viewContainerRef, injector));
      dialogRef.componentRef = contentRef;
      dialogRef.componentInstance = contentRef.instance;
    }
  }
  /**
   * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
   * of a dialog to close itself and, optionally, to return a value.
   * @param config Config object that is used to construct the dialog.
   * @param dialogRef Reference to the dialog being opened.
   * @param dialogContainer Component that is going to wrap the dialog content.
   * @param fallbackInjector Injector to use as a fallback when a lookup fails in the custom
   * dialog injector, if the user didn't provide a custom one.
   * @returns The custom injector that can be used inside the dialog.
   */
  _createInjector(config, dialogRef, dialogContainer, fallbackInjector) {
    const userInjector = config.injector || config.viewContainerRef?.injector;
    const providers = [{
      provide: DIALOG_DATA,
      useValue: config.data
    }, {
      provide: DialogRef,
      useValue: dialogRef
    }];
    if (config.providers) {
      if (typeof config.providers === "function") {
        providers.push(...config.providers(dialogRef, config, dialogContainer));
      } else {
        providers.push(...config.providers);
      }
    }
    if (config.direction && (!userInjector || !userInjector.get(Directionality, null, {
      optional: true
    }))) {
      providers.push({
        provide: Directionality,
        useValue: {
          value: config.direction,
          change: of()
        }
      });
    }
    return Injector.create({
      parent: userInjector || fallbackInjector,
      providers
    });
  }
  /**
   * Removes a dialog from the array of open dialogs.
   * @param dialogRef Dialog to be removed.
   * @param emitEvent Whether to emit an event if this is the last dialog.
   */
  _removeOpenDialog(dialogRef, emitEvent) {
    const index = this.openDialogs.indexOf(dialogRef);
    if (index > -1) {
      this.openDialogs.splice(index, 1);
      if (!this.openDialogs.length) {
        this._ariaHiddenElements.forEach((previousValue, element) => {
          if (previousValue) {
            element.setAttribute("aria-hidden", previousValue);
          } else {
            element.removeAttribute("aria-hidden");
          }
        });
        this._ariaHiddenElements.clear();
        if (emitEvent) {
          this._getAfterAllClosed().next();
        }
      }
    }
  }
  /** Hides all of the content that isn't an overlay from assistive technology. */
  _hideNonDialogContentFromAssistiveTechnology() {
    const overlayContainer = this._overlayContainer.getContainerElement();
    if (overlayContainer.parentElement) {
      const siblings = overlayContainer.parentElement.children;
      for (let i = siblings.length - 1; i > -1; i--) {
        const sibling = siblings[i];
        if (sibling !== overlayContainer && sibling.nodeName !== "SCRIPT" && sibling.nodeName !== "STYLE" && !sibling.hasAttribute("aria-live")) {
          this._ariaHiddenElements.set(sibling, sibling.getAttribute("aria-hidden"));
          sibling.setAttribute("aria-hidden", "true");
        }
      }
    }
  }
  _getAfterAllClosed() {
    const parent = this._parentDialog;
    return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
  }
  static \u0275fac = function Dialog_Factory(\u0275t) {
    return new (\u0275t || _Dialog)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Dialog,
    factory: _Dialog.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dialog, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function reverseForEach(items, callback) {
  let i = items.length;
  while (i--) {
    callback(items[i]);
  }
}
var DialogModule = class _DialogModule {
  static \u0275fac = function DialogModule_Factory(\u0275t) {
    return new (\u0275t || _DialogModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DialogModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [Dialog],
    imports: [
      OverlayModule,
      PortalModule,
      A11yModule,
      // Re-export the PortalModule so that people extending the `CdkDialogContainer`
      // don't have to remember to import it or be faced with an unhelpful error.
      PortalModule
    ]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, PortalModule, A11yModule, CdkDialogContainer],
      exports: [
        // Re-export the PortalModule so that people extending the `CdkDialogContainer`
        // don't have to remember to import it or be faced with an unhelpful error.
        PortalModule,
        CdkDialogContainer
      ],
      providers: [Dialog]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/module-42c8c966.mjs
function MatDialogContainer_ng_template_2_Template(rf, ctx) {
}
var MatDialogConfig = class {
  /**
   * Where the attached component should live in Angular's *logical* component tree.
   * This affects what is available for injection and the change detection order for the
   * component instantiated inside of the dialog. This does not affect where the dialog
   * content will be rendered.
   */
  viewContainerRef;
  /**
   * Injector used for the instantiation of the component to be attached. If provided,
   * takes precedence over the injector indirectly provided by `ViewContainerRef`.
   */
  injector;
  /** ID for the dialog. If omitted, a unique one will be generated. */
  id;
  /** The ARIA role of the dialog element. */
  role = "dialog";
  /** Custom class for the overlay pane. */
  panelClass = "";
  /** Whether the dialog has a backdrop. */
  hasBackdrop = true;
  /** Custom class for the backdrop. */
  backdropClass = "";
  /** Whether the user can use escape or clicking on the backdrop to close the modal. */
  disableClose = false;
  /** Width of the dialog. */
  width = "";
  /** Height of the dialog. */
  height = "";
  /** Min-width of the dialog. If a number is provided, assumes pixel units. */
  minWidth;
  /** Min-height of the dialog. If a number is provided, assumes pixel units. */
  minHeight;
  /** Max-width of the dialog. If a number is provided, assumes pixel units. Defaults to 80vw. */
  maxWidth;
  /** Max-height of the dialog. If a number is provided, assumes pixel units. */
  maxHeight;
  /** Position overrides. */
  position;
  /** Data being injected into the child component. */
  data = null;
  /** Layout direction for the dialog's content. */
  direction;
  /** ID of the element that describes the dialog. */
  ariaDescribedBy = null;
  /** ID of the element that labels the dialog. */
  ariaLabelledBy = null;
  /** Aria label to assign to the dialog element. */
  ariaLabel = null;
  /**
   * Whether this is a modal dialog. Used to set the `aria-modal` attribute. Off by default,
   * because it can interfere with other overlay-based components (e.g. `mat-select`) and because
   * it is redundant since the dialog marks all outside content as `aria-hidden` anyway.
   */
  ariaModal = false;
  /**
   * Where the dialog should focus on open.
   * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
   * AutoFocusTarget instead.
   */
  autoFocus = "first-tabbable";
  /**
   * Whether the dialog should restore focus to the
   * previously-focused element, after it's closed.
   */
  restoreFocus = true;
  /** Whether to wait for the opening animation to finish before trapping focus. */
  delayFocusTrap = true;
  /** Scroll strategy to be used for the dialog. */
  scrollStrategy;
  /**
   * Whether the dialog should close when the user goes backwards/forwards in history.
   * Note that this usually doesn't include clicking on links (unless the user is using
   * the `HashLocationStrategy`).
   */
  closeOnNavigation = true;
  /**
   * Alternate `ComponentFactoryResolver` to use when resolving the associated component.
   * @deprecated No longer used. Will be removed.
   * @breaking-change 20.0.0
   */
  componentFactoryResolver;
  /**
   * Duration of the enter animation in ms.
   * Should be a number, string type is deprecated.
   * @breaking-change 17.0.0 Remove string signature.
   */
  enterAnimationDuration;
  /**
   * Duration of the exit animation in ms.
   * Should be a number, string type is deprecated.
   * @breaking-change 17.0.0 Remove string signature.
   */
  exitAnimationDuration;
};
var OPEN_CLASS = "mdc-dialog--open";
var OPENING_CLASS = "mdc-dialog--opening";
var CLOSING_CLASS = "mdc-dialog--closing";
var OPEN_ANIMATION_DURATION = 150;
var CLOSE_ANIMATION_DURATION = 75;
var MatDialogContainer = class _MatDialogContainer extends CdkDialogContainer {
  _animationMode = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  /** Emits when an animation state changes. */
  _animationStateChanged = new EventEmitter();
  /** Whether animations are enabled. */
  _animationsEnabled = this._animationMode !== "NoopAnimations";
  /** Number of actions projected in the dialog. */
  _actionSectionCount = 0;
  /** Host element of the dialog container component. */
  _hostElement = this._elementRef.nativeElement;
  /** Duration of the dialog open animation. */
  _enterAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.enterAnimationDuration) ?? OPEN_ANIMATION_DURATION : 0;
  /** Duration of the dialog close animation. */
  _exitAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.exitAnimationDuration) ?? CLOSE_ANIMATION_DURATION : 0;
  /** Current timer for dialog animations. */
  _animationTimer = null;
  _contentAttached() {
    super._contentAttached();
    this._startOpenAnimation();
  }
  /** Starts the dialog open animation if enabled. */
  _startOpenAnimation() {
    this._animationStateChanged.emit({
      state: "opening",
      totalTime: this._enterAnimationDuration
    });
    if (this._animationsEnabled) {
      this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._enterAnimationDuration}ms`);
      this._requestAnimationFrame(() => this._hostElement.classList.add(OPENING_CLASS, OPEN_CLASS));
      this._waitForAnimationToComplete(this._enterAnimationDuration, this._finishDialogOpen);
    } else {
      this._hostElement.classList.add(OPEN_CLASS);
      Promise.resolve().then(() => this._finishDialogOpen());
    }
  }
  /**
   * Starts the exit animation of the dialog if enabled. This method is
   * called by the dialog ref.
   */
  _startExitAnimation() {
    this._animationStateChanged.emit({
      state: "closing",
      totalTime: this._exitAnimationDuration
    });
    this._hostElement.classList.remove(OPEN_CLASS);
    if (this._animationsEnabled) {
      this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._exitAnimationDuration}ms`);
      this._requestAnimationFrame(() => this._hostElement.classList.add(CLOSING_CLASS));
      this._waitForAnimationToComplete(this._exitAnimationDuration, this._finishDialogClose);
    } else {
      Promise.resolve().then(() => this._finishDialogClose());
    }
  }
  /**
   * Updates the number action sections.
   * @param delta Increase/decrease in the number of sections.
   */
  _updateActionSectionCount(delta) {
    this._actionSectionCount += delta;
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Completes the dialog open by clearing potential animation classes, trapping
   * focus and emitting an opened event.
   */
  _finishDialogOpen = () => {
    this._clearAnimationClasses();
    this._openAnimationDone(this._enterAnimationDuration);
  };
  /**
   * Completes the dialog close by clearing potential animation classes, restoring
   * focus and emitting a closed event.
   */
  _finishDialogClose = () => {
    this._clearAnimationClasses();
    this._animationStateChanged.emit({
      state: "closed",
      totalTime: this._exitAnimationDuration
    });
  };
  /** Clears all dialog animation classes. */
  _clearAnimationClasses() {
    this._hostElement.classList.remove(OPENING_CLASS, CLOSING_CLASS);
  }
  _waitForAnimationToComplete(duration, callback) {
    if (this._animationTimer !== null) {
      clearTimeout(this._animationTimer);
    }
    this._animationTimer = setTimeout(callback, duration);
  }
  /** Runs a callback in `requestAnimationFrame`, if available. */
  _requestAnimationFrame(callback) {
    this._ngZone.runOutsideAngular(() => {
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(callback);
      } else {
        callback();
      }
    });
  }
  _captureInitialFocus() {
    if (!this._config.delayFocusTrap) {
      this._trapFocus();
    }
  }
  /**
   * Callback for when the open dialog animation has finished. Intended to
   * be called by sub-classes that use different animation implementations.
   */
  _openAnimationDone(totalTime) {
    if (this._config.delayFocusTrap) {
      this._trapFocus();
    }
    this._animationStateChanged.next({
      state: "opened",
      totalTime
    });
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._animationTimer !== null) {
      clearTimeout(this._animationTimer);
    }
  }
  attachComponentPortal(portal) {
    const ref = super.attachComponentPortal(portal);
    ref.location.nativeElement.classList.add("mat-mdc-dialog-component-host");
    return ref;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatDialogContainer_BaseFactory;
    return function MatDialogContainer_Factory(\u0275t) {
      return (\u0275MatDialogContainer_BaseFactory || (\u0275MatDialogContainer_BaseFactory = \u0275\u0275getInheritedFactory(_MatDialogContainer)))(\u0275t || _MatDialogContainer);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDialogContainer,
    selectors: [["mat-dialog-container"]],
    hostAttrs: ["tabindex", "-1", 1, "mat-mdc-dialog-container", "mdc-dialog"],
    hostVars: 10,
    hostBindings: function MatDialogContainer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275hostProperty("id", ctx._config.id);
        \u0275\u0275attribute("aria-modal", ctx._config.ariaModal)("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0])("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
        \u0275\u0275classProp("_mat-animation-noopable", !ctx._animationsEnabled)("mat-mdc-dialog-container-with-actions", ctx._actionSectionCount > 0);
      }
    },
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
    decls: 3,
    vars: 0,
    consts: [[1, "mat-mdc-dialog-inner-container", "mdc-dialog__container"], [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"], ["cdkPortalOutlet", ""]],
    template: function MatDialogContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, MatDialogContainer_ng_template_2_Template, 0, 0, "ng-template", 2);
        \u0275\u0275elementEnd()();
      }
    },
    dependencies: [CdkPortalOutlet],
    styles: ['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 560px);min-width:var(--mat-dialog-container-min-width, 280px)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, calc(100vw - 32px))}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, none);border-radius:var(--mdc-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));background-color:var(--mdc-dialog-container-color, var(--mat-sys-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 6px 24px 13px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mdc-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));line-height:var(--mdc-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));font-size:var(--mdc-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));font-weight:var(--mdc-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));letter-spacing:var(--mdc-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mdc-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));line-height:var(--mdc-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));font-size:var(--mdc-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));font-weight:var(--mdc-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));letter-spacing:var(--mdc-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px 0)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 16px 24px);justify-content:var(--mat-dialog-actions-alignment, flex-end)}@media(forced-colors: active){.mat-mdc-dialog-actions{border-top-color:CanvasText}}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogContainer, [{
    type: Component,
    args: [{
      selector: "mat-dialog-container",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      imports: [CdkPortalOutlet],
      host: {
        "class": "mat-mdc-dialog-container mdc-dialog",
        "tabindex": "-1",
        "[attr.aria-modal]": "_config.ariaModal",
        "[id]": "_config.id",
        "[attr.role]": "_config.role",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null",
        "[class._mat-animation-noopable]": "!_animationsEnabled",
        "[class.mat-mdc-dialog-container-with-actions]": "_actionSectionCount > 0"
      },
      template: '<div class="mat-mdc-dialog-inner-container mdc-dialog__container">\n  <div class="mat-mdc-dialog-surface mdc-dialog__surface">\n    <ng-template cdkPortalOutlet />\n  </div>\n</div>\n',
      styles: ['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 560px);min-width:var(--mat-dialog-container-min-width, 280px)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, calc(100vw - 32px))}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, none);border-radius:var(--mdc-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));background-color:var(--mdc-dialog-container-color, var(--mat-sys-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 6px 24px 13px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mdc-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));line-height:var(--mdc-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));font-size:var(--mdc-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));font-weight:var(--mdc-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));letter-spacing:var(--mdc-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mdc-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));line-height:var(--mdc-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));font-size:var(--mdc-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));font-weight:var(--mdc-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));letter-spacing:var(--mdc-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px 0)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 16px 24px);justify-content:var(--mat-dialog-actions-alignment, flex-end)}@media(forced-colors: active){.mat-mdc-dialog-actions{border-top-color:CanvasText}}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}']
    }]
  }], null, null);
})();
var TRANSITION_DURATION_PROPERTY = "--mat-dialog-transition-duration";
function parseCssTime(time) {
  if (time == null) {
    return null;
  }
  if (typeof time === "number") {
    return time;
  }
  if (time.endsWith("ms")) {
    return coerceNumberProperty(time.substring(0, time.length - 2));
  }
  if (time.endsWith("s")) {
    return coerceNumberProperty(time.substring(0, time.length - 1)) * 1e3;
  }
  if (time === "0") {
    return 0;
  }
  return null;
}
var MatDialogState;
(function(MatDialogState2) {
  MatDialogState2[MatDialogState2["OPEN"] = 0] = "OPEN";
  MatDialogState2[MatDialogState2["CLOSING"] = 1] = "CLOSING";
  MatDialogState2[MatDialogState2["CLOSED"] = 2] = "CLOSED";
})(MatDialogState || (MatDialogState = {}));
var MatDialogRef = class {
  _ref;
  _containerInstance;
  /** The instance of component opened into the dialog. */
  componentInstance;
  /**
   * `ComponentRef` of the component opened into the dialog. Will be
   * null when the dialog is opened using a `TemplateRef`.
   */
  componentRef;
  /** Whether the user is allowed to close the dialog. */
  disableClose;
  /** Unique ID for the dialog. */
  id;
  /** Subject for notifying the user that the dialog has finished opening. */
  _afterOpened = new Subject();
  /** Subject for notifying the user that the dialog has started closing. */
  _beforeClosed = new Subject();
  /** Result to be passed to afterClosed. */
  _result;
  /** Handle to the timeout that's running as a fallback in case the exit animation doesn't fire. */
  _closeFallbackTimeout;
  /** Current state of the dialog. */
  _state = MatDialogState.OPEN;
  // TODO(crisbeto): we shouldn't have to declare this property, because `DialogRef.close`
  // already has a second `options` parameter that we can use. The problem is that internal tests
  // have assertions like `expect(MatDialogRef.close).toHaveBeenCalledWith(foo)` which will break,
  // because it'll be called with two arguments by things like `MatDialogClose`.
  /** Interaction that caused the dialog to close. */
  _closeInteractionType;
  constructor(_ref, config, _containerInstance) {
    this._ref = _ref;
    this._containerInstance = _containerInstance;
    this.disableClose = config.disableClose;
    this.id = _ref.id;
    _ref.addPanelClass("mat-mdc-dialog-panel");
    _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "opened"), take(1)).subscribe(() => {
      this._afterOpened.next();
      this._afterOpened.complete();
    });
    _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closed"), take(1)).subscribe(() => {
      clearTimeout(this._closeFallbackTimeout);
      this._finishDialogClose();
    });
    _ref.overlayRef.detachments().subscribe(() => {
      this._beforeClosed.next(this._result);
      this._beforeClosed.complete();
      this._finishDialogClose();
    });
    merge(this.backdropClick(), this.keydownEvents().pipe(filter((event) => event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)))).subscribe((event) => {
      if (!this.disableClose) {
        event.preventDefault();
        _closeDialogVia(this, event.type === "keydown" ? "keyboard" : "mouse");
      }
    });
  }
  /**
   * Close the dialog.
   * @param dialogResult Optional result to return to the dialog opener.
   */
  close(dialogResult) {
    this._result = dialogResult;
    this._containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closing"), take(1)).subscribe((event) => {
      this._beforeClosed.next(dialogResult);
      this._beforeClosed.complete();
      this._ref.overlayRef.detachBackdrop();
      this._closeFallbackTimeout = setTimeout(() => this._finishDialogClose(), event.totalTime + 100);
    });
    this._state = MatDialogState.CLOSING;
    this._containerInstance._startExitAnimation();
  }
  /**
   * Gets an observable that is notified when the dialog is finished opening.
   */
  afterOpened() {
    return this._afterOpened;
  }
  /**
   * Gets an observable that is notified when the dialog is finished closing.
   */
  afterClosed() {
    return this._ref.closed;
  }
  /**
   * Gets an observable that is notified when the dialog has started closing.
   */
  beforeClosed() {
    return this._beforeClosed;
  }
  /**
   * Gets an observable that emits when the overlay's backdrop has been clicked.
   */
  backdropClick() {
    return this._ref.backdropClick;
  }
  /**
   * Gets an observable that emits when keydown events are targeted on the overlay.
   */
  keydownEvents() {
    return this._ref.keydownEvents;
  }
  /**
   * Updates the dialog's position.
   * @param position New dialog position.
   */
  updatePosition(position) {
    let strategy = this._ref.config.positionStrategy;
    if (position && (position.left || position.right)) {
      position.left ? strategy.left(position.left) : strategy.right(position.right);
    } else {
      strategy.centerHorizontally();
    }
    if (position && (position.top || position.bottom)) {
      position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
    } else {
      strategy.centerVertically();
    }
    this._ref.updatePosition();
    return this;
  }
  /**
   * Updates the dialog's width and height.
   * @param width New width of the dialog.
   * @param height New height of the dialog.
   */
  updateSize(width = "", height = "") {
    this._ref.updateSize(width, height);
    return this;
  }
  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes) {
    this._ref.addPanelClass(classes);
    return this;
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes) {
    this._ref.removePanelClass(classes);
    return this;
  }
  /** Gets the current state of the dialog's lifecycle. */
  getState() {
    return this._state;
  }
  /**
   * Finishes the dialog close by updating the state of the dialog
   * and disposing the overlay.
   */
  _finishDialogClose() {
    this._state = MatDialogState.CLOSED;
    this._ref.close(this._result, {
      focusOrigin: this._closeInteractionType
    });
    this.componentInstance = null;
  }
};
function _closeDialogVia(ref, interactionType, result) {
  ref._closeInteractionType = interactionType;
  return ref.close(result);
}
var MAT_DIALOG_DATA = new InjectionToken("MatMdcDialogData");
var MAT_DIALOG_DEFAULT_OPTIONS = new InjectionToken("mat-mdc-dialog-default-options");
var MAT_DIALOG_SCROLL_STRATEGY = new InjectionToken("mat-mdc-dialog-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const overlay = inject(Overlay);
    return () => overlay.scrollStrategies.block();
  }
});
var MatDialog = class _MatDialog {
  _overlay = inject(Overlay);
  _defaultOptions = inject(MAT_DIALOG_DEFAULT_OPTIONS, {
    optional: true
  });
  _scrollStrategy = inject(MAT_DIALOG_SCROLL_STRATEGY);
  _parentDialog = inject(_MatDialog, {
    optional: true,
    skipSelf: true
  });
  _idGenerator = inject(_IdGenerator);
  _dialog = inject(Dialog);
  _openDialogsAtThisLevel = [];
  _afterAllClosedAtThisLevel = new Subject();
  _afterOpenedAtThisLevel = new Subject();
  dialogConfigClass = MatDialogConfig;
  _dialogRefConstructor;
  _dialogContainerType;
  _dialogDataToken;
  /** Keeps track of the currently-open dialogs. */
  get openDialogs() {
    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  /** Stream that emits when a dialog has been opened. */
  get afterOpened() {
    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
  }
  _getAfterAllClosed() {
    const parent = this._parentDialog;
    return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
  }
  /**
   * Stream that emits when all open dialog have finished closing.
   * Will emit on subscribe if there are no open dialogs to begin with.
   */
  afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
  constructor() {
    this._dialogRefConstructor = MatDialogRef;
    this._dialogContainerType = MatDialogContainer;
    this._dialogDataToken = MAT_DIALOG_DATA;
  }
  open(componentOrTemplateRef, config) {
    let dialogRef;
    config = __spreadValues(__spreadValues({}, this._defaultOptions || new MatDialogConfig()), config);
    config.id = config.id || this._idGenerator.getId("mat-mdc-dialog-");
    config.scrollStrategy = config.scrollStrategy || this._scrollStrategy();
    const cdkRef = this._dialog.open(componentOrTemplateRef, __spreadProps(__spreadValues({}, config), {
      positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
      // Disable closing since we need to sync it up to the animation ourselves.
      disableClose: true,
      // Disable closing on destroy, because this service cleans up its open dialogs as well.
      // We want to do the cleanup here, rather than the CDK service, because the CDK destroys
      // the dialogs immediately whereas we want it to wait for the animations to finish.
      closeOnDestroy: false,
      // Disable closing on detachments so that we can sync up the animation.
      // The Material dialog ref handles this manually.
      closeOnOverlayDetachments: false,
      container: {
        type: this._dialogContainerType,
        providers: () => [
          // Provide our config as the CDK config as well since it has the same interface as the
          // CDK one, but it contains the actual values passed in by the user for things like
          // `disableClose` which we disable for the CDK dialog since we handle it ourselves.
          {
            provide: this.dialogConfigClass,
            useValue: config
          },
          {
            provide: DialogConfig,
            useValue: config
          }
        ]
      },
      templateContext: () => ({
        dialogRef
      }),
      providers: (ref, cdkConfig, dialogContainer) => {
        dialogRef = new this._dialogRefConstructor(ref, config, dialogContainer);
        dialogRef.updatePosition(config?.position);
        return [{
          provide: this._dialogContainerType,
          useValue: dialogContainer
        }, {
          provide: this._dialogDataToken,
          useValue: cdkConfig.data
        }, {
          provide: this._dialogRefConstructor,
          useValue: dialogRef
        }];
      }
    }));
    dialogRef.componentRef = cdkRef.componentRef;
    dialogRef.componentInstance = cdkRef.componentInstance;
    this.openDialogs.push(dialogRef);
    this.afterOpened.next(dialogRef);
    dialogRef.afterClosed().subscribe(() => {
      const index = this.openDialogs.indexOf(dialogRef);
      if (index > -1) {
        this.openDialogs.splice(index, 1);
        if (!this.openDialogs.length) {
          this._getAfterAllClosed().next();
        }
      }
    });
    return dialogRef;
  }
  /**
   * Closes all of the currently-open dialogs.
   */
  closeAll() {
    this._closeDialogs(this.openDialogs);
  }
  /**
   * Finds an open dialog by its id.
   * @param id ID to use when looking up the dialog.
   */
  getDialogById(id) {
    return this.openDialogs.find((dialog) => dialog.id === id);
  }
  ngOnDestroy() {
    this._closeDialogs(this._openDialogsAtThisLevel);
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
  }
  _closeDialogs(dialogs) {
    let i = dialogs.length;
    while (i--) {
      dialogs[i].close();
    }
  }
  static \u0275fac = function MatDialog_Factory(\u0275t) {
    return new (\u0275t || _MatDialog)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MatDialog,
    factory: _MatDialog.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialog, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var MatDialogClose = class _MatDialogClose {
  dialogRef = inject(MatDialogRef, {
    optional: true
  });
  _elementRef = inject(ElementRef);
  _dialog = inject(MatDialog);
  /** Screen-reader label for the button. */
  ariaLabel;
  /** Default to "button" to prevents accidental form submits. */
  type = "button";
  /** Dialog close input. */
  dialogResult;
  _matDialogClose;
  constructor() {
  }
  ngOnInit() {
    if (!this.dialogRef) {
      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
  }
  ngOnChanges(changes) {
    const proxiedChange = changes["_matDialogClose"] || changes["_matDialogCloseResult"];
    if (proxiedChange) {
      this.dialogResult = proxiedChange.currentValue;
    }
  }
  _onButtonClick(event) {
    _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? "keyboard" : "mouse", this.dialogResult);
  }
  static \u0275fac = function MatDialogClose_Factory(\u0275t) {
    return new (\u0275t || _MatDialogClose)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDialogClose,
    selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]],
    hostVars: 2,
    hostBindings: function MatDialogClose_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatDialogClose_click_HostBindingHandler($event) {
          return ctx._onButtonClick($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", ctx.ariaLabel || null)("type", ctx.type);
      }
    },
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      type: "type",
      dialogResult: [0, "mat-dialog-close", "dialogResult"],
      _matDialogClose: [0, "matDialogClose", "_matDialogClose"]
    },
    exportAs: ["matDialogClose"],
    standalone: true,
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogClose, [{
    type: Directive,
    args: [{
      selector: "[mat-dialog-close], [matDialogClose]",
      exportAs: "matDialogClose",
      host: {
        "(click)": "_onButtonClick($event)",
        "[attr.aria-label]": "ariaLabel || null",
        "[attr.type]": "type"
      }
    }]
  }], () => [], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    type: [{
      type: Input
    }],
    dialogResult: [{
      type: Input,
      args: ["mat-dialog-close"]
    }],
    _matDialogClose: [{
      type: Input,
      args: ["matDialogClose"]
    }]
  });
})();
var MatDialogLayoutSection = class _MatDialogLayoutSection {
  _dialogRef = inject(MatDialogRef, {
    optional: true
  });
  _elementRef = inject(ElementRef);
  _dialog = inject(MatDialog);
  constructor() {
  }
  ngOnInit() {
    if (!this._dialogRef) {
      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
    if (this._dialogRef) {
      Promise.resolve().then(() => {
        this._onAdd();
      });
    }
  }
  ngOnDestroy() {
    const instance = this._dialogRef?._containerInstance;
    if (instance) {
      Promise.resolve().then(() => {
        this._onRemove();
      });
    }
  }
  static \u0275fac = function MatDialogLayoutSection_Factory(\u0275t) {
    return new (\u0275t || _MatDialogLayoutSection)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDialogLayoutSection,
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogLayoutSection, [{
    type: Directive
  }], () => [], null);
})();
var MatDialogTitle = class _MatDialogTitle extends MatDialogLayoutSection {
  id = inject(_IdGenerator).getId("mat-mdc-dialog-title-");
  _onAdd() {
    this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id);
  }
  _onRemove() {
    this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatDialogTitle_BaseFactory;
    return function MatDialogTitle_Factory(\u0275t) {
      return (\u0275MatDialogTitle_BaseFactory || (\u0275MatDialogTitle_BaseFactory = \u0275\u0275getInheritedFactory(_MatDialogTitle)))(\u0275t || _MatDialogTitle);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDialogTitle,
    selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
    hostAttrs: [1, "mat-mdc-dialog-title", "mdc-dialog__title"],
    hostVars: 1,
    hostBindings: function MatDialogTitle_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275hostProperty("id", ctx.id);
      }
    },
    inputs: {
      id: "id"
    },
    exportAs: ["matDialogTitle"],
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogTitle, [{
    type: Directive,
    args: [{
      selector: "[mat-dialog-title], [matDialogTitle]",
      exportAs: "matDialogTitle",
      host: {
        "class": "mat-mdc-dialog-title mdc-dialog__title",
        "[id]": "id"
      }
    }]
  }], null, {
    id: [{
      type: Input
    }]
  });
})();
var MatDialogContent = class _MatDialogContent {
  static \u0275fac = function MatDialogContent_Factory(\u0275t) {
    return new (\u0275t || _MatDialogContent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDialogContent,
    selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
    hostAttrs: [1, "mat-mdc-dialog-content", "mdc-dialog__content"],
    standalone: true,
    features: [\u0275\u0275HostDirectivesFeature([CdkScrollable])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogContent, [{
    type: Directive,
    args: [{
      selector: `[mat-dialog-content], mat-dialog-content, [matDialogContent]`,
      host: {
        "class": "mat-mdc-dialog-content mdc-dialog__content"
      },
      hostDirectives: [CdkScrollable]
    }]
  }], null, null);
})();
var MatDialogActions = class _MatDialogActions extends MatDialogLayoutSection {
  /**
   * Horizontal alignment of action buttons.
   */
  align;
  _onAdd() {
    this._dialogRef._containerInstance?._updateActionSectionCount?.(1);
  }
  _onRemove() {
    this._dialogRef._containerInstance?._updateActionSectionCount?.(-1);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatDialogActions_BaseFactory;
    return function MatDialogActions_Factory(\u0275t) {
      return (\u0275MatDialogActions_BaseFactory || (\u0275MatDialogActions_BaseFactory = \u0275\u0275getInheritedFactory(_MatDialogActions)))(\u0275t || _MatDialogActions);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDialogActions,
    selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
    hostAttrs: [1, "mat-mdc-dialog-actions", "mdc-dialog__actions"],
    hostVars: 6,
    hostBindings: function MatDialogActions_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-mdc-dialog-actions-align-start", ctx.align === "start")("mat-mdc-dialog-actions-align-center", ctx.align === "center")("mat-mdc-dialog-actions-align-end", ctx.align === "end");
      }
    },
    inputs: {
      align: "align"
    },
    standalone: true,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogActions, [{
    type: Directive,
    args: [{
      selector: `[mat-dialog-actions], mat-dialog-actions, [matDialogActions]`,
      host: {
        "class": "mat-mdc-dialog-actions mdc-dialog__actions",
        "[class.mat-mdc-dialog-actions-align-start]": 'align === "start"',
        "[class.mat-mdc-dialog-actions-align-center]": 'align === "center"',
        "[class.mat-mdc-dialog-actions-align-end]": 'align === "end"'
      }
    }]
  }], null, {
    align: [{
      type: Input
    }]
  });
})();
function getClosestDialog(element, openDialogs) {
  let parent = element.nativeElement.parentElement;
  while (parent && !parent.classList.contains("mat-mdc-dialog-container")) {
    parent = parent.parentElement;
  }
  return parent ? openDialogs.find((dialog) => dialog.id === parent.id) : null;
}
var DIRECTIVES = [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent];
var MatDialogModule = class _MatDialogModule {
  static \u0275fac = function MatDialogModule_Factory(\u0275t) {
    return new (\u0275t || _MatDialogModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatDialogModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MatDialog],
    imports: [DialogModule, OverlayModule, PortalModule, MatCommonModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogModule, [{
    type: NgModule,
    args: [{
      imports: [DialogModule, OverlayModule, PortalModule, MatCommonModule, ...DIRECTIVES],
      exports: [MatCommonModule, ...DIRECTIVES],
      providers: [MatDialog]
    }]
  }], null, null);
})();

// node_modules/ng-gallery/fesm2022/ng-gallery.mjs
function GalleryBulletsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function GalleryBulletsComponent_div_0_Template_div_click_0_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.config.disableBullets ? null : ctx_r2.gallery.ref(ctx_r2.galleryId).set(i_r2));
    });
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", ctx_r2.config == null ? null : ctx_r2.config.bulletSize, "px")("height", ctx_r2.config == null ? null : ctx_r2.config.bulletSize, "px");
    \u0275\u0275classProp("g-bullet-active", i_r2 === ctx_r2.state.currIndex);
  }
}
function GalleryNavComponent_i_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 2);
    \u0275\u0275listener("click", function GalleryNavComponent_i_0_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.gallery.ref(ctx_r1.id).prev(ctx_r1.config.scrollBehavior));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHtml", ctx_r1.navIcon, \u0275\u0275sanitizeHtml);
  }
}
function GalleryNavComponent_i_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 3);
    \u0275\u0275listener("click", function GalleryNavComponent_i_1_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.gallery.ref(ctx_r1.id).next(ctx_r1.config.scrollBehavior));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHtml", ctx_r1.navIcon, \u0275\u0275sanitizeHtml);
  }
}
var _c0 = ["iframe"];
function GalleryIframeComponent_iframe_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 3, 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.iframeSrc, \u0275\u0275sanitizeResourceUrl);
    \u0275\u0275attribute("loading", ctx_r0.loadingAttr);
  }
}
function GalleryIframeComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 4, 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.iframeSrc, \u0275\u0275sanitizeResourceUrl);
    \u0275\u0275attribute("loading", ctx_r0.loadingAttr);
  }
}
var _c1 = ["video"];
function GalleryVideoComponent_ng_container_2_source_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "source", 5);
  }
  if (rf & 2) {
    const src_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", src_r2 == null ? null : src_r2.url, \u0275\u0275sanitizeUrl)("type", src_r2.type);
  }
}
function GalleryVideoComponent_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "source", 6);
  }
  if (rf & 2) {
    const src_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", src_r2 == null ? null : src_r2.url, \u0275\u0275sanitizeUrl);
  }
}
function GalleryVideoComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, GalleryVideoComponent_ng_container_2_source_1_Template, 1, 2, "source", 4)(2, GalleryVideoComponent_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const src_r2 = ctx.$implicit;
    const noType_r3 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", src_r2 == null ? null : src_r2.type)("ngIfElse", noType_r3);
  }
}
function GalleryImageComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "img", 8);
    \u0275\u0275listener("load", function GalleryImageComponent_ng_container_1_Template_img_load_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.state = "success");
    })("error", function GalleryImageComponent_ng_container_1_Template_img_error_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.state = "failed";
      return \u0275\u0275resetView(ctx_r1.error.emit($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("visibility", ctx_r1.state === "success" ? "visible" : "hidden");
    \u0275\u0275property("@fadeIn", ctx_r1.state)("src", ctx_r1.src, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("alt", ctx_r1.alt)("loading", ctx_r1.loadingAttr);
  }
}
function GalleryImageComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 9);
    \u0275\u0275listener("load", function GalleryImageComponent_ng_template_2_Template_img_load_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.state = "success");
    })("error", function GalleryImageComponent_ng_template_2_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.state = "failed";
      return \u0275\u0275resetView(ctx_r1.error.emit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("visibility", ctx_r1.state === "success" ? "visible" : "hidden");
    \u0275\u0275property("galleryImage", ctx_r1.index)("@fadeIn", ctx_r1.state)("src", ctx_r1.src, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("alt", ctx_r1.alt)("loading", ctx_r1.loadingAttr);
  }
}
function GalleryImageComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", ctx_r1.errorTemplate, \u0275\u0275sanitizeHtml);
  }
}
function GalleryImageComponent_div_4_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h4");
    \u0275\u0275element(2, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", ctx_r1.errorSvg, \u0275\u0275sanitizeHtml);
  }
}
function GalleryImageComponent_div_4_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275element(1, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Unable to load the image!");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.errorSvg, \u0275\u0275sanitizeHtml);
  }
}
function GalleryImageComponent_div_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GalleryImageComponent_div_4_ng_template_2_ng_container_0_Template, 3, 1, "ng-container", 5)(1, GalleryImageComponent_div_4_ng_template_2_ng_template_1_Template, 4, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const isLarge_r4 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.isThumbnail)("ngIfElse", isLarge_r4);
  }
}
function GalleryImageComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, GalleryImageComponent_div_4_div_1_Template, 1, 1, "div", 11)(2, GalleryImageComponent_div_4_ng_template_2_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const defaultError_r5 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorTemplate)("ngIfElse", defaultError_r5);
  }
}
function GalleryImageComponent_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", ctx_r1.loaderTemplate, \u0275\u0275sanitizeHtml);
  }
}
function GalleryImageComponent_ng_container_5_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 18);
  }
}
function GalleryImageComponent_ng_container_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GalleryImageComponent_ng_container_5_ng_template_2_div_0_Template, 1, 0, "div", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.isThumbnail);
  }
}
function GalleryImageComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, GalleryImageComponent_ng_container_5_div_1_Template, 1, 1, "div", 15)(2, GalleryImageComponent_ng_container_5_ng_template_2_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const defaultLoader_r6 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loaderTemplate)("ngIfElse", defaultLoader_r6);
  }
}
function GalleryItemComponent_ng_container_0_ng_container_1_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function GalleryItemComponent_ng_container_0_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, GalleryItemComponent_ng_container_0_ng_container_1_div_2_ng_container_1_Template, 1, 0, "ng-container", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.config.imageTemplate)("ngTemplateOutletContext", ctx_r1.imageContext);
  }
}
function GalleryItemComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "gallery-image", 7);
    \u0275\u0275listener("error", function GalleryItemComponent_ng_container_0_ng_container_1_Template_gallery_image_error_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.error.emit($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, GalleryItemComponent_ng_container_0_ng_container_1_div_2_Template, 2, 2, "div", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.imageData.src)("alt", ctx_r1.imageData.alt)("index", ctx_r1.index)("loadingAttr", ctx_r1.config.loadingAttr)("loadingIcon", ctx_r1.config.loadingIcon)("loadingError", ctx_r1.config.loadingError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.imageTemplate);
  }
}
function GalleryItemComponent_ng_container_0_gallery_video_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "gallery-video", 11);
    \u0275\u0275listener("error", function GalleryItemComponent_ng_container_0_gallery_video_2_Template_gallery_video_error_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.error.emit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.videoData.src)("mute", ctx_r1.videoData.mute)("poster", ctx_r1.videoData.poster)("controls", ctx_r1.videoData.controls)("controlsList", ctx_r1.videoData.controlsList)("disablePictureInPicture", ctx_r1.videoData.disablePictureInPicture)("play", ctx_r1.isAutoPlay)("pause", ctx_r1.currIndex !== ctx_r1.index);
  }
}
function GalleryItemComponent_ng_container_0_gallery_iframe_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "gallery-iframe", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.youtubeSrc)("autoplay", ctx_r1.isAutoPlay)("loadingAttr", ctx_r1.config.loadingAttr)("pause", ctx_r1.currIndex !== ctx_r1.index);
  }
}
function GalleryItemComponent_ng_container_0_gallery_iframe_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "gallery-iframe", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.vimeoSrc)("autoplay", ctx_r1.isAutoPlay)("loadingAttr", ctx_r1.config.loadingAttr)("pause", ctx_r1.currIndex !== ctx_r1.index);
  }
}
function GalleryItemComponent_ng_container_0_gallery_iframe_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "gallery-iframe", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.data.src)("loadingAttr", ctx_r1.config.loadingAttr);
  }
}
function GalleryItemComponent_ng_container_0_ng_container_6_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function GalleryItemComponent_ng_container_0_ng_container_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, GalleryItemComponent_ng_container_0_ng_container_6_div_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.config.itemTemplate)("ngTemplateOutletContext", ctx_r1.itemContext);
  }
}
function GalleryItemComponent_ng_container_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, GalleryItemComponent_ng_container_0_ng_container_6_div_1_Template, 2, 2, "div", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.config.itemTemplate);
  }
}
function GalleryItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 1);
    \u0275\u0275template(1, GalleryItemComponent_ng_container_0_ng_container_1_Template, 3, 7, "ng-container", 2)(2, GalleryItemComponent_ng_container_0_gallery_video_2_Template, 1, 8, "gallery-video", 3)(3, GalleryItemComponent_ng_container_0_gallery_iframe_3_Template, 1, 4, "gallery-iframe", 4)(4, GalleryItemComponent_ng_container_0_gallery_iframe_4_Template, 1, 4, "gallery-iframe", 4)(5, GalleryItemComponent_ng_container_0_gallery_iframe_5_Template, 1, 2, "gallery-iframe", 5)(6, GalleryItemComponent_ng_container_0_ng_container_6_Template, 2, 1, "ng-container", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngSwitch", ctx_r1.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", ctx_r1.Types.Image);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", ctx_r1.Types.Video);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", ctx_r1.Types.Youtube);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", ctx_r1.Types.Vimeo);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", ctx_r1.Types.Iframe);
  }
}
var _c2 = ["slider"];
var _c3 = ["*"];
function GallerySliderComponent_gallery_item_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "gallery-item", 5);
    \u0275\u0275listener("activeIndexChange", function GallerySliderComponent_gallery_item_5_Template_gallery_item_activeIndexChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onActiveIndexChange($event));
    })("click", function GallerySliderComponent_gallery_item_5_Template_gallery_item_click_0_listener() {
      const i_r4 = \u0275\u0275restoreView(_r2).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.itemClick.emit(i_r4));
    })("error", function GallerySliderComponent_gallery_item_5_Template_gallery_item_error_0_listener($event) {
      const i_r4 = \u0275\u0275restoreView(_r2).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.error.emit({
        itemIndex: i_r4,
        error: $event
      }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("type", item_r5.type)("config", ctx_r2.config)("data", item_r5.data)("currIndex", ctx_r2.state.currIndex)("index", i_r4)("count", ctx_r2.state.items.length)("itemIntersectionObserverDisabled", ctx_r2.isScrolling || ctx_r2.isSliding || ctx_r2.isResizing)("adapter", ctx_r2.adapter);
    \u0275\u0275attribute("galleryId", ctx_r2.galleryId);
  }
}
function GallerySliderComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275text(2, "RESIZING");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275text(4, "SCROLLING");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9);
    \u0275\u0275text(6, "SLIDING");
    \u0275\u0275elementEnd()();
  }
}
function GalleryThumbComponent_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function GalleryThumbComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, GalleryThumbComponent_div_1_ng_container_1_Template, 1, 0, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.config.thumbTemplate)("ngTemplateOutletContext", ctx_r0.imageContext);
  }
}
function GalleryThumbsComponent_gallery_thumb_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "gallery-thumb", 4);
    \u0275\u0275listener("click", function GalleryThumbsComponent_gallery_thumb_5_Template_gallery_thumb_click_0_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.config.disableThumbs ? null : ctx_r3.thumbClick.emit(i_r3));
    })("error", function GalleryThumbsComponent_gallery_thumb_5_Template_gallery_thumb_error_0_listener($event) {
      const i_r3 = \u0275\u0275restoreView(_r2).index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.error.emit({
        itemIndex: i_r3,
        error: $event
      }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("type", item_r5.type)("config", ctx_r3.config)("data", item_r5.data)("currIndex", ctx_r3.state.currIndex)("index", i_r3)("count", ctx_r3.state.items.length);
    \u0275\u0275attribute("galleryId", ctx_r3.galleryId);
  }
}
var _c4 = (a0, a1) => ({
  state: a0,
  config: a1
});
function GalleryCoreComponent_gallery_thumbs_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "gallery-thumbs", 7);
    \u0275\u0275listener("thumbClick", function GalleryCoreComponent_gallery_thumbs_0_Template_gallery_thumbs_thumbClick_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.thumbClick.emit($event));
    })("error", function GalleryCoreComponent_gallery_thumbs_0_Template_gallery_thumbs_error_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.error.emit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("state", ctx_r1.state)("config", ctx_r1.config)("galleryId", ctx_r1.galleryId);
  }
}
function GalleryCoreComponent_gallery_nav_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "gallery-nav", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("state", ctx_r1.state)("config", ctx_r1.config)("galleryId", ctx_r1.galleryId);
  }
}
function GalleryCoreComponent_gallery_bullets_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "gallery-bullets", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("state", ctx_r1.state)("config", ctx_r1.config)("galleryId", ctx_r1.galleryId);
  }
}
function GalleryCoreComponent_gallery_counter_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "gallery-counter", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("state", ctx_r1.state);
  }
}
function GalleryCoreComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var GalleryAction;
(function(GalleryAction2) {
  GalleryAction2["INITIALIZED"] = "initialized";
  GalleryAction2["ITEMS_CHANGED"] = "itemsChanged";
  GalleryAction2["INDEX_CHANGED"] = "indexChanged";
  GalleryAction2["PLAY"] = "play";
  GalleryAction2["STOP"] = "stop";
})(GalleryAction || (GalleryAction = {}));
var ImageSize;
(function(ImageSize2) {
  ImageSize2["Cover"] = "cover";
  ImageSize2["Contain"] = "contain";
})(ImageSize || (ImageSize = {}));
var LoadingStrategy;
(function(LoadingStrategy2) {
  LoadingStrategy2["Preload"] = "preload";
  LoadingStrategy2["Lazy"] = "lazy";
  LoadingStrategy2["Default"] = "default";
})(LoadingStrategy || (LoadingStrategy = {}));
var LoadingAttr;
(function(LoadingAttr2) {
  LoadingAttr2["Eager"] = "eager";
  LoadingAttr2["Lazy"] = "lazy";
})(LoadingAttr || (LoadingAttr = {}));
var ThumbnailsPosition;
(function(ThumbnailsPosition2) {
  ThumbnailsPosition2["Top"] = "top";
  ThumbnailsPosition2["Left"] = "left";
  ThumbnailsPosition2["Right"] = "right";
  ThumbnailsPosition2["Bottom"] = "bottom";
})(ThumbnailsPosition || (ThumbnailsPosition = {}));
var BulletsPosition;
(function(BulletsPosition2) {
  BulletsPosition2["Top"] = "top";
  BulletsPosition2["Bottom"] = "bottom";
})(BulletsPosition || (BulletsPosition = {}));
var CounterPosition;
(function(CounterPosition2) {
  CounterPosition2["Top"] = "top";
  CounterPosition2["Bottom"] = "bottom";
})(CounterPosition || (CounterPosition = {}));
var Orientation;
(function(Orientation2) {
  Orientation2["Horizontal"] = "horizontal";
  Orientation2["Vertical"] = "vertical";
})(Orientation || (Orientation = {}));
var GalleryItemTypes;
(function(GalleryItemTypes2) {
  GalleryItemTypes2["Image"] = "image";
  GalleryItemTypes2["Video"] = "video";
  GalleryItemTypes2["Youtube"] = "youtube";
  GalleryItemTypes2["Vimeo"] = "vimeo";
  GalleryItemTypes2["Iframe"] = "iframe";
})(GalleryItemTypes || (GalleryItemTypes = {}));
var defaultState = {
  action: GalleryAction.INITIALIZED,
  isPlaying: false,
  hasNext: false,
  hasPrev: false,
  currIndex: 0,
  items: []
};
var defaultConfig = {
  nav: true,
  loop: false,
  bullets: false,
  thumbs: false,
  debug: false,
  bulletSize: 6,
  counter: false,
  autoplay: false,
  thumbWidth: 120,
  thumbHeight: 90,
  disableBullets: false,
  disableThumbs: false,
  disableScroll: false,
  disableThumbScroll: false,
  disableMouseScroll: false,
  disableThumbMouseScroll: false,
  autoplayInterval: 3e3,
  scrollDuration: 468,
  scrollEase: {
    x1: 0.42,
    y1: 0,
    x2: 0.58,
    y2: 1
  },
  thumbCentralized: false,
  thumbAutosize: false,
  itemAutosize: false,
  autoHeight: false,
  scrollBehavior: "smooth",
  resizeDebounceTime: 0,
  loadingAttr: LoadingAttr.Lazy,
  imageSize: ImageSize.Contain,
  thumbImageSize: ImageSize.Cover,
  bulletPosition: BulletsPosition.Bottom,
  counterPosition: CounterPosition.Top,
  thumbPosition: ThumbnailsPosition.Bottom,
  loadingStrategy: LoadingStrategy.Preload,
  orientation: Orientation.Horizontal,
  navIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/></svg>`,
  // navIcon: `<?xml version="1.0" encoding="UTF-8"?><svg width="512px" height="512px" enable-background="new 0 0 240.823 240.823" version="1.1" viewBox="0 0 240.823 240.823" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m183.19 111.82l-108.3-108.26c-4.752-4.74-12.451-4.74-17.215 0-4.752 4.74-4.752 12.439 0 17.179l99.707 99.671-99.695 99.671c-4.752 4.74-4.752 12.439 0 17.191 4.752 4.74 12.463 4.74 17.215 0l108.3-108.26c4.68-4.691 4.68-12.511-0.012-17.19z"></svg>`,
  loadingIcon: `<?xml version="1.0" encoding="UTF-8"?><svg stroke="#fff" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>`
};
var ImageItem = class {
  constructor(data) {
    this.data = data;
    this.type = GalleryItemTypes.Image;
  }
};
var VideoItem = class {
  constructor(data) {
    this.data = data;
    this.type = GalleryItemTypes.Video;
  }
};
var IframeItem = class {
  constructor(data) {
    this.data = data;
    this.type = GalleryItemTypes.Iframe;
  }
};
var YoutubeItem = class {
  constructor(data) {
    this.data = __spreadValues(__spreadValues({}, data), {
      src: `https://youtube.com/embed/${data.src}`,
      thumb: data.thumb ? data.thumb : `//img.youtube.com/vi/${data.src}/default.jpg`
    });
    this.type = GalleryItemTypes.Youtube;
  }
};
var VimeoItem = class {
  constructor(data) {
    this.data = __spreadValues(__spreadValues({}, data), {
      src: `https://player.vimeo.com/video/${data.src}`,
      thumb: data.thumb ? data.thumb : this.getVimeoThumb(data.src)
    });
    this.type = GalleryItemTypes.Vimeo;
  }
  getVimeoThumb(videoId) {
    return `//vumbnail.com/${videoId}.jpg`;
  }
};
var filterActions = (actions) => {
  return filter((state2) => actions.indexOf(state2.action) > -1);
};
var GalleryRef = class {
  get stateSnapshot() {
    return this._state.value;
  }
  get configSnapshot() {
    return this._config.value;
  }
  /** Stream that emits when gallery is initialized/reset */
  get initialized() {
    return this.state.pipe(filterActions([GalleryAction.INITIALIZED]));
  }
  /** Stream that emits when items is changed (items loaded, item added, item removed) */
  get itemsChanged() {
    return this.state.pipe(filterActions([GalleryAction.ITEMS_CHANGED]));
  }
  /** Stream that emits when current item is changed */
  get indexChanged() {
    return this.state.pipe(filterActions([GalleryAction.INDEX_CHANGED]));
  }
  /** Stream that emits when the player should start or stop */
  get playingChanged() {
    return this.state.pipe(filterActions([GalleryAction.PLAY, GalleryAction.STOP]));
  }
  constructor(config, deleteInstance) {
    this.deleteInstance = deleteInstance;
    this.itemClick = new Subject();
    this.thumbClick = new Subject();
    this.error = new Subject();
    this._state = new BehaviorSubject(defaultState);
    this._config = new BehaviorSubject(config);
    this.state = this._state.asObservable();
    this.config = this._config.asObservable();
  }
  /**
   * Set gallery state
   */
  setState(state2) {
    this._state.next(__spreadValues(__spreadValues({}, this.stateSnapshot), state2));
  }
  /**
   * Set gallery config
   */
  setConfig(config) {
    this._config.next(__spreadValues(__spreadValues({}, this._config.value), config));
  }
  /**
   * Add gallery item
   */
  add(item, active) {
    const items = [...this.stateSnapshot.items, item];
    this.setState({
      action: GalleryAction.ITEMS_CHANGED,
      items,
      hasNext: items.length > 1,
      currIndex: active ? items.length - 1 : this.stateSnapshot.currIndex
    });
  }
  /**
   * Add image item
   */
  addImage(data, active) {
    this.add(new ImageItem(data), active);
  }
  /**
   * Add video item
   */
  addVideo(data, active) {
    this.add(new VideoItem(data), active);
  }
  /**
   * Add iframe item
   */
  addIframe(data, active) {
    this.add(new IframeItem(data), active);
  }
  /**
   * Add Youtube item
   */
  addYoutube(data, active) {
    this.add(new YoutubeItem(data), active);
  }
  /**
   * Add Vimeo item
   */
  addVimeo(data, active) {
    this.add(new VimeoItem(data), active);
  }
  /**
   * Remove gallery item
   */
  remove(i) {
    const state2 = this.stateSnapshot;
    const items = [...state2.items.slice(0, i), ...state2.items.slice(i + 1, state2.items.length)];
    this.setState({
      action: GalleryAction.ITEMS_CHANGED,
      currIndex: i < 1 ? state2.currIndex : i - 1,
      items,
      hasNext: items.length > 1,
      hasPrev: i > 0
    });
  }
  /**
   * Load items and reset the state
   */
  load(items) {
    if (items) {
      this.setState({
        action: GalleryAction.ITEMS_CHANGED,
        items,
        hasNext: items.length > 1,
        hasPrev: false
      });
    }
  }
  /**
   * Set active item
   */
  set(i, behavior = this._config.value.scrollBehavior) {
    if (i < 0 || i >= this.stateSnapshot.items.length) {
      console.error(`[NgGallery]: Unable to set the active item because the given index (${i}) is outside the items range!`);
      return;
    }
    if (i !== this.stateSnapshot.currIndex) {
      this.setState({
        behavior,
        action: GalleryAction.INDEX_CHANGED,
        currIndex: i,
        hasNext: i < this.stateSnapshot.items.length - 1,
        hasPrev: i > 0
      });
    }
  }
  /**
   * Next item
   */
  next(behavior = this._config.value.scrollBehavior, loop = true) {
    if (this.stateSnapshot.hasNext) {
      this.set(this.stateSnapshot.currIndex + 1, behavior);
    } else if (loop && this._config.value.loop) {
      this.set(0, behavior);
    }
  }
  /**
   * Prev item
   */
  prev(behavior = this._config.value.scrollBehavior, loop = true) {
    if (this.stateSnapshot.hasPrev) {
      this.set(this.stateSnapshot.currIndex - 1, behavior);
    } else if (loop && this._config.value.loop) {
      this.set(this.stateSnapshot.items.length - 1, behavior);
    }
  }
  /**
   * Start gallery player
   */
  play(interval) {
    if (interval) {
      this.setConfig({
        autoplayInterval: interval
      });
    }
    this.setState({
      action: GalleryAction.PLAY,
      behavior: "auto",
      isPlaying: true
    });
  }
  /**
   * Stop gallery player
   */
  stop() {
    this.setState({
      action: GalleryAction.STOP,
      isPlaying: false
    });
  }
  /**
   * Reset gallery to initial state
   */
  reset() {
    this.setState(defaultState);
  }
  /**
   * Destroy gallery
   */
  destroy() {
    this._state.complete();
    this._config.complete();
    this.itemClick.complete();
    this.thumbClick.complete();
    this.deleteInstance();
  }
};
var GALLERY_CONFIG = new InjectionToken("GALLERY_CONFIG");
var _Gallery = class _Gallery {
  constructor(config) {
    this._instances = /* @__PURE__ */ new Map();
    this.config = config ? __spreadValues(__spreadValues({}, defaultConfig), config) : defaultConfig;
  }
  /**
   * Get or create gallery by ID
   * @param id
   * @param config
   */
  ref(id = "root", config) {
    if (this._instances.has(id)) {
      const galleryRef = this._instances.get(id);
      if (config) {
        galleryRef.setConfig(config);
      }
      return galleryRef;
    } else {
      return this._instances.set(id, new GalleryRef(__spreadValues(__spreadValues({}, this.config), config), this.deleteInstance(id))).get(id);
    }
  }
  /**
   * Destroy all gallery instances
   */
  destroyAll() {
    this._instances.forEach((ref) => ref.destroy());
  }
  /**
   * Reset all gallery instances
   */
  resetAll() {
    this._instances.forEach((ref) => ref.reset());
  }
  /**
   * Logger for debugging
   */
  debugConsole(...data) {
    if (this.config.debug) {
      console.log(...data);
    }
  }
  /**
   * A destroyer function for each gallery instance
   */
  deleteInstance(id) {
    return () => {
      if (this._instances.has(id)) {
        this._instances.delete(id);
      }
    };
  }
};
_Gallery.\u0275fac = function Gallery_Factory(\u0275t) {
  return new (\u0275t || _Gallery)(\u0275\u0275inject(GALLERY_CONFIG, 8));
};
_Gallery.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _Gallery,
  factory: _Gallery.\u0275fac,
  providedIn: "root"
});
var Gallery = _Gallery;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Gallery, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [GALLERY_CONFIG]
    }]
  }], null);
})();
var _GalleryCounterComponent = class _GalleryCounterComponent {
};
_GalleryCounterComponent.\u0275fac = function GalleryCounterComponent_Factory(\u0275t) {
  return new (\u0275t || _GalleryCounterComponent)();
};
_GalleryCounterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _GalleryCounterComponent,
  selectors: [["gallery-counter"]],
  inputs: {
    state: "state"
  },
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 2,
  vars: 1,
  consts: [[1, "g-counter"]],
  template: function GalleryCounterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275text(1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.state.currIndex + 1 + " / " + ctx.state.items.length);
    }
  },
  styles: [".g-counter[_ngcontent-%COMP%]{font-weight:700;-webkit-user-select:none;user-select:none;opacity:.6;transition:opacity linear .15s;z-index:50;position:absolute;left:50%;transform:translate(-50%) perspective(1px);font-size:12px;padding:4px 10px;color:var(--g-font-color);background-color:var(--g-overlay-color);box-shadow:var(--g-box-shadow);top:var(--counter-top);bottom:var(--counter-bottom);border-radius:var(--counter-border-radius)}.g-counter[_ngcontent-%COMP%]:hover{opacity:.8}"],
  changeDetection: 0
});
var GalleryCounterComponent = _GalleryCounterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryCounterComponent, [{
    type: Component,
    args: [{
      selector: "gallery-counter",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="g-counter">{{ (state.currIndex + 1) + ' / ' + state.items.length }}</div>
  `,
      standalone: true,
      styles: [".g-counter{font-weight:700;-webkit-user-select:none;user-select:none;opacity:.6;transition:opacity linear .15s;z-index:50;position:absolute;left:50%;transform:translate(-50%) perspective(1px);font-size:12px;padding:4px 10px;color:var(--g-font-color);background-color:var(--g-overlay-color);box-shadow:var(--g-box-shadow);top:var(--counter-top);bottom:var(--counter-bottom);border-radius:var(--counter-border-radius)}.g-counter:hover{opacity:.8}\n"]
    }]
  }], null, {
    state: [{
      type: Input
    }]
  });
})();
var _GalleryBulletsComponent = class _GalleryBulletsComponent {
  constructor(gallery) {
    this.gallery = gallery;
  }
};
_GalleryBulletsComponent.\u0275fac = function GalleryBulletsComponent_Factory(\u0275t) {
  return new (\u0275t || _GalleryBulletsComponent)(\u0275\u0275directiveInject(Gallery));
};
_GalleryBulletsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _GalleryBulletsComponent,
  selectors: [["gallery-bullets"]],
  inputs: {
    galleryId: "galleryId",
    state: "state",
    config: "config"
  },
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 1,
  vars: 1,
  consts: [["class", "g-bullet", 3, "g-bullet-active", "width", "height", "click", 4, "ngFor", "ngForOf"], [1, "g-bullet", 3, "click"], [1, "g-bullet-inner"]],
  template: function GalleryBulletsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, GalleryBulletsComponent_div_0_Template, 2, 6, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngForOf", ctx.state.items);
    }
  },
  dependencies: [CommonModule, NgForOf],
  styles: ["[_nghost-%COMP%]{position:absolute;left:50%;z-index:99;transform:translate(-50%);display:flex;gap:6px;top:var(--bullets-top);bottom:var(--bullets-bottom)}[_nghost-%COMP%], .g-bullet[_ngcontent-%COMP%], .g-bullet-inner[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.g-bullet[_ngcontent-%COMP%]{cursor:var(--bullets-cursor);z-index:20}.g-bullet[_ngcontent-%COMP%]:hover   .g-bullet-inner[_ngcontent-%COMP%]{opacity:var(--bullets-hover-opacity)}.g-bullet-active[_ngcontent-%COMP%]   .g-bullet-inner[_ngcontent-%COMP%]{opacity:var(--bullets-active-opacity)}.g-bullet-inner[_ngcontent-%COMP%]{background-color:var(--g-overlay-color);opacity:var(--bullets-opacity);width:100%;height:100%;border-radius:50%;transition:opacity linear .15s}"],
  changeDetection: 0
});
var GalleryBulletsComponent = _GalleryBulletsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryBulletsComponent, [{
    type: Component,
    args: [{
      selector: "gallery-bullets",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="g-bullet"
         *ngFor="let item of state.items; let i = index"
         [class.g-bullet-active]="i === state.currIndex"
         [style.width.px]="config?.bulletSize"
         [style.height.px]="config?.bulletSize"
         (click)="config.disableBullets ? null : gallery.ref(this.galleryId).set(i)">
      <div class="g-bullet-inner"></div>
    </div>
  `,
      standalone: true,
      imports: [CommonModule],
      styles: [":host{position:absolute;left:50%;z-index:99;transform:translate(-50%);display:flex;gap:6px;top:var(--bullets-top);bottom:var(--bullets-bottom)}:host,.g-bullet,.g-bullet-inner{display:flex;justify-content:center;align-items:center}.g-bullet{cursor:var(--bullets-cursor);z-index:20}.g-bullet:hover .g-bullet-inner{opacity:var(--bullets-hover-opacity)}.g-bullet-active .g-bullet-inner{opacity:var(--bullets-active-opacity)}.g-bullet-inner{background-color:var(--g-overlay-color);opacity:var(--bullets-opacity);width:100%;height:100%;border-radius:50%;transition:opacity linear .15s}\n"]
    }]
  }], () => [{
    type: Gallery
  }], {
    galleryId: [{
      type: Input
    }],
    state: [{
      type: Input
    }],
    config: [{
      type: Input
    }]
  });
})();
var _GalleryNavComponent = class _GalleryNavComponent {
  constructor(gallery, _sanitizer, dir) {
    this.gallery = gallery;
    this._sanitizer = _sanitizer;
    this.dir = dir;
  }
  ngOnInit() {
    this.navIcon = this._sanitizer.bypassSecurityTrustHtml(this.config.navIcon);
  }
  rightButton() {
  }
  leftButton() {
  }
};
_GalleryNavComponent.\u0275fac = function GalleryNavComponent_Factory(\u0275t) {
  return new (\u0275t || _GalleryNavComponent)(\u0275\u0275directiveInject(Gallery), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(Directionality));
};
_GalleryNavComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _GalleryNavComponent,
  selectors: [["gallery-nav"]],
  inputs: {
    id: [0, "galleryId", "id"],
    state: "state",
    config: "config"
  },
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 2,
  vars: 2,
  consts: [["class", "g-nav-prev", "aria-label", "Previous", "role", "button", 3, "innerHtml", "click", 4, "ngIf"], ["class", "g-nav-next", "aria-label", "Next", "role", "button", 3, "innerHtml", "click", 4, "ngIf"], ["aria-label", "Previous", "role", "button", 1, "g-nav-prev", 3, "click", "innerHtml"], ["aria-label", "Next", "role", "button", 1, "g-nav-next", 3, "click", "innerHtml"]],
  template: function GalleryNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, GalleryNavComponent_i_0_Template, 1, 1, "i", 0)(1, GalleryNavComponent_i_1_Template, 1, 1, "i", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.config.loop || ctx.state.hasPrev);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.config.loop || ctx.state.hasNext);
    }
  },
  dependencies: [CommonModule, NgIf],
  styles: [".g-nav-next[_ngcontent-%COMP%], .g-nav-prev[_ngcontent-%COMP%]{position:absolute;top:50%;display:flex;padding:16px 8px;cursor:pointer;z-index:999;opacity:.6;transition:opacity linear .15s,right linear .15s,left linear .15s}.g-nav-next[_ngcontent-%COMP%]:hover, .g-nav-prev[_ngcontent-%COMP%]:hover{opacity:1}.g-nav-next[_ngcontent-%COMP%]     svg, .g-nav-prev[_ngcontent-%COMP%]     svg{filter:var(--g-nav-drop-shadow);width:28px;height:28px;fill:#fff}.g-nav-next[_ngcontent-%COMP%]{left:var(--nav-next-left);right:var(--nav-next-right);transform:var(--nav-next-transform)}.g-nav-next[_ngcontent-%COMP%]:hover{left:var(--nav-next-hover-left);right:var(--nav-next-hover-right)}.g-nav-prev[_ngcontent-%COMP%]{left:var(--nav-prev-left);right:var(--nav-prev-right);transform:var(--nav-prev-transform)}.g-nav-prev[_ngcontent-%COMP%]:hover{left:var(--nav-prev-hover-left);right:var(--nav-prev-hover-right)}"],
  changeDetection: 0
});
var GalleryNavComponent = _GalleryNavComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryNavComponent, [{
    type: Component,
    args: [{
      selector: "gallery-nav",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <i *ngIf="config.loop || state.hasPrev"
       class="g-nav-prev"
       aria-label="Previous"
       role="button"
       (click)="gallery.ref(this.id).prev(config.scrollBehavior)"
       [innerHtml]="navIcon"></i>

    <i *ngIf="config.loop || state.hasNext"
       class="g-nav-next"
       aria-label="Next"
       role="button"
       (click)="gallery.ref(this.id).next(config.scrollBehavior)"
       [innerHtml]="navIcon"></i>
  `,
      standalone: true,
      imports: [CommonModule],
      styles: [".g-nav-next,.g-nav-prev{position:absolute;top:50%;display:flex;padding:16px 8px;cursor:pointer;z-index:999;opacity:.6;transition:opacity linear .15s,right linear .15s,left linear .15s}.g-nav-next:hover,.g-nav-prev:hover{opacity:1}.g-nav-next ::ng-deep svg,.g-nav-prev ::ng-deep svg{filter:var(--g-nav-drop-shadow);width:28px;height:28px;fill:#fff}.g-nav-next{left:var(--nav-next-left);right:var(--nav-next-right);transform:var(--nav-next-transform)}.g-nav-next:hover{left:var(--nav-next-hover-left);right:var(--nav-next-hover-right)}.g-nav-prev{left:var(--nav-prev-left);right:var(--nav-prev-right);transform:var(--nav-prev-transform)}.g-nav-prev:hover{left:var(--nav-prev-hover-left);right:var(--nav-prev-hover-right)}\n"]
    }]
  }], () => [{
    type: Gallery
  }, {
    type: DomSanitizer
  }, {
    type: Directionality
  }], {
    id: [{
      type: Input,
      args: ["galleryId"]
    }],
    state: [{
      type: Input
    }],
    config: [{
      type: Input
    }]
  });
})();
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;
var HorizontalAdapter = class {
  get scrollValue() {
    return this.slider.scrollLeft;
  }
  get clientSize() {
    return this.slider.clientWidth;
  }
  get isContentLessThanContainer() {
    return this.clientSize >= this.slider.firstElementChild.clientWidth;
  }
  constructor(slider, config) {
    this.slider = slider;
    this.config = config;
    this.hammerDirection = DIRECTION_LEFT | DIRECTION_RIGHT;
    this.scrollSnapType = "x mandatory";
  }
  getScrollToValue(el, behavior) {
    const position = el.offsetLeft - (this.clientSize - el.clientWidth) / 2;
    return {
      behavior,
      start: position
    };
  }
  getRootMargin() {
    return `1000px 1px 1000px 1px`;
  }
  getElementRootMargin(viewport, el) {
    const rootMargin = -1 * ((viewport.clientWidth - el.clientWidth) / 2) + 1;
    return `0px ${rootMargin}px 0px ${rootMargin}px`;
  }
  getCentralizerStartSize() {
    if (this.isContentLessThanContainer) {
      const size = this.clientSize - this.slider.firstElementChild.clientWidth;
      return size / 2;
    }
    return this.clientSize / 2 - this.slider.firstElementChild.firstElementChild?.clientWidth / 2;
  }
  getCentralizerEndSize() {
    if (this.isContentLessThanContainer) {
      const size = this.clientSize - this.slider.firstElementChild.clientWidth;
      return size / 2;
    }
    return this.clientSize / 2 - this.slider.firstElementChild.lastElementChild?.clientWidth / 2;
  }
  getHammerVelocity(e) {
    return e.velocityX;
  }
  getHammerValue(value, e, behavior) {
    return {
      behavior,
      left: value - e.deltaX
    };
  }
};
var VerticalAdapter = class {
  get scrollValue() {
    return this.slider.scrollTop;
  }
  get clientSize() {
    return this.slider.clientHeight;
  }
  get isContentLessThanContainer() {
    return this.clientSize >= this.slider.firstElementChild.clientHeight;
  }
  constructor(slider, config) {
    this.slider = slider;
    this.config = config;
    this.hammerDirection = DIRECTION_UP | DIRECTION_DOWN;
    this.scrollSnapType = "y mandatory";
  }
  getScrollToValue(el, behavior) {
    const position = el.offsetTop - (this.clientSize - el.clientHeight) / 2;
    return {
      behavior,
      top: position
    };
  }
  getRootMargin() {
    return `1px 1000px 1px 1000px`;
  }
  getElementRootMargin(viewport, el) {
    const rootMargin = -1 * ((viewport.clientHeight - el.clientHeight) / 2) + 1;
    return `${rootMargin}px 0px ${rootMargin}px 0px`;
  }
  getCentralizerStartSize() {
    if (this.isContentLessThanContainer) {
      const size = this.clientSize - this.slider.firstElementChild.clientHeight;
      return size / 2;
    }
    return this.clientSize / 2 - this.slider.firstElementChild.firstElementChild?.clientHeight / 2;
  }
  getCentralizerEndSize() {
    if (this.isContentLessThanContainer) {
      const size = this.clientSize - this.slider.firstElementChild.clientHeight;
      return size / 2;
    }
    return this.clientSize / 2 - this.slider.firstElementChild.lastElementChild?.clientHeight / 2;
  }
  getHammerVelocity(e) {
    return e.velocityY;
  }
  getHammerValue(value, e, behavior) {
    return {
      behavior,
      top: value - e.deltaY
    };
  }
};
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 1e-3;
var SUBDIVISION_PRECISION = 1e-7;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
var float32ArraySupported = typeof Float32Array === "function";
function A(aA1, aA2) {
  return 1 - 3 * aA2 + 3 * aA1;
}
function B(aA1, aA2) {
  return 3 * aA2 - 6 * aA1;
}
function C(aA1) {
  return 3 * aA1;
}
function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}
function getSlope(aT, aA1, aA2) {
  return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
}
function binarySubdivide(aX, aA, aB, mX1, mX2) {
  let currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (let i = 0; i < NEWTON_ITERATIONS; ++i) {
    let currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0) {
      return aGuessT;
    }
    let currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
function LinearEasing(x) {
  return x;
}
function bezier(mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error("bezier x values must be in [0, 1] range");
  }
  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }
  let sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (let i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }
  function getTForX(aX) {
    let intervalStart = 0;
    let currentSample = 1;
    let lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    let dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    let guessForT = intervalStart + dist * kSampleStepSize;
    let initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }
  return function BezierEasing(x) {
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
}
var _SmoothScroll = class _SmoothScroll {
  get _w() {
    return this._document.defaultView;
  }
  /**
   * Timing method
   */
  get _now() {
    return this._w.performance?.now?.bind(this._w.performance) || Date.now;
  }
  set smoothScroll(value) {
    if (value) {
      this._zone.runOutsideAngular(() => {
        this.scrollTo(value);
      });
    }
  }
  constructor(_document, _zone, _dir, _el) {
    this._document = _document;
    this._zone = _zone;
    this._dir = _dir;
    this._scrollController = new Subject();
    this._finished = new Subject();
    this.isScrollingChange = new EventEmitter();
    this._el = _el.nativeElement;
  }
  ngOnInit() {
    this._subscription = this._scrollController.pipe(switchMap((context) => {
      this._zone.run(() => {
        this.isScrollingChange.emit(true);
      });
      this._el.classList.add("g-scrolling");
      this._el.style.setProperty("--slider-scroll-snap-type", "none");
      return of(null).pipe(expand(() => this._step(context).pipe(takeWhile((currContext) => this._isFinished(currContext)), takeUntil(this._finished))), finalize(() => this.resetElement()), takeUntil(this._interrupted()));
    })).subscribe();
  }
  ngOnDestroy() {
    this._subscription?.unsubscribe();
    this._scrollController.complete();
  }
  /**
   * changes scroll position inside an element
   */
  _scrollElement(x, y) {
    this._el.scrollLeft = x;
    this._el.scrollTop = y;
  }
  resetElement() {
    this._zone.run(() => {
      this.isScrollingChange.emit(false);
    });
    this._el.classList.remove("g-scrolling");
    if (!this._isInterruptedByMouse) {
      this._el.style.setProperty("--slider-scroll-snap-type", this.adapter.scrollSnapType);
    }
    this._isInterruptedByMouse = false;
  }
  /**
   * Checks if smooth scroll has reached, cleans up the smooth scroll stream and resolves its promise
   */
  _isFinished(context) {
    if (context.currentX !== context.x || context.currentY !== context.y) {
      return true;
    }
    this._finished.next();
    return false;
  }
  /**
   * Terminates an ongoing smooth scroll
   */
  _interrupted() {
    let interrupt$;
    if (this.interruptOnMousemove && typeof Hammer !== "undefined") {
      this._hammer = new Hammer(this._el, {
        inputClass: Hammer.MouseInput
      });
      this._hammer.get("pan").set({
        direction: this.adapter.hammerDirection
      });
      interrupt$ = merge(new Observable((subscriber) => {
        this._hammer.on("panstart", () => {
          this._isInterruptedByMouse = true;
          subscriber.next();
          subscriber.complete();
        });
        return () => {
          this._hammer.destroy();
        };
      }), fromEvent(this._el, "wheel", {
        passive: true,
        capture: true
      }), fromEvent(this._el, "touchmove", {
        passive: true,
        capture: true
      }));
    } else {
      interrupt$ = merge(fromEvent(this._el, "wheel", {
        passive: true,
        capture: true
      }), fromEvent(this._el, "touchmove", {
        passive: true,
        capture: true
      }));
    }
    return interrupt$.pipe(take(1));
  }
  /**
   * A function called recursively that, given a context, steps through scrolling
   */
  _step(context) {
    return new Observable((subscriber) => {
      let elapsed = (this._now() - context.startTime) / context.duration;
      elapsed = elapsed > 1 ? 1 : elapsed;
      const value = context.easing(elapsed);
      context.currentX = context.startX + (context.x - context.startX) * value;
      context.currentY = context.startY + (context.y - context.startY) * value;
      this._scrollElement(context.currentX, context.currentY);
      requestAnimationFrame(() => {
        subscriber.next(context);
        subscriber.complete();
      });
    });
  }
  _applyScrollToOptions(options) {
    if (!options.duration) {
      this._scrollElement(options.left, options.top);
    }
    const context = {
      scrollable: this._el,
      startTime: this._now(),
      startX: this._el.scrollLeft,
      startY: this._el.scrollTop,
      x: options.left == null ? this._el.scrollLeft : ~~options.left,
      y: options.top == null ? this._el.scrollTop : ~~options.top,
      duration: options.duration,
      easing: bezier(options.easing.x1, options.easing.y1, options.easing.x2, options.easing.y2)
    };
    this._scrollController.next(context);
  }
  /**
   * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
   * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param params specified the offsets to scroll to.
   */
  scrollTo(params) {
    const isRtl = this._dir.value === "rtl";
    const rtlScrollAxisType = getRtlScrollAxisType();
    const options = __spreadProps(__spreadValues(__spreadValues({}, params), {
      // Rewrite start & end offsets as right or left offsets.
      left: params.left == null ? isRtl ? params.end : params.start : params.left,
      right: params.right == null ? isRtl ? params.start : params.end : params.right
    }), {
      duration: params.behavior === "smooth" ? this.config.scrollDuration : 0,
      easing: this.config.scrollEase
    });
    if (options.bottom != null) {
      options.top = this._el.scrollHeight - this._el.clientHeight - options.bottom;
    }
    if (isRtl && rtlScrollAxisType !== RtlScrollAxisType.NORMAL) {
      if (options.left != null) {
        options.right = this._el.scrollWidth - this._el.clientWidth - options.left;
      }
      if (rtlScrollAxisType === RtlScrollAxisType.INVERTED) {
        options.left = options.right;
      } else if (rtlScrollAxisType === RtlScrollAxisType.NEGATED) {
        options.left = options.right ? -options.right : options.right;
      }
    } else {
      if (options.right != null) {
        options.left = this._el.scrollWidth - this._el.clientWidth - options.right;
      }
    }
    return this._applyScrollToOptions(options);
  }
};
_SmoothScroll.\u0275fac = function SmoothScroll_Factory(\u0275t) {
  return new (\u0275t || _SmoothScroll)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Dir), \u0275\u0275directiveInject(ElementRef));
};
_SmoothScroll.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _SmoothScroll,
  selectors: [["", "smoothScroll", ""]],
  inputs: {
    smoothScroll: "smoothScroll",
    adapter: "adapter",
    config: "config",
    interruptOnMousemove: [0, "smoothScrollInterruptOnMousemove", "interruptOnMousemove"]
  },
  outputs: {
    isScrollingChange: "isScrollingChange"
  },
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([Dir])]
});
var SmoothScroll = _SmoothScroll;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmoothScroll, [{
    type: Directive,
    args: [{
      selector: "[smoothScroll]",
      standalone: true,
      providers: [Dir]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NgZone
  }, {
    type: Dir
  }, {
    type: ElementRef
  }], {
    smoothScroll: [{
      type: Input
    }],
    adapter: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    interruptOnMousemove: [{
      type: Input,
      args: ["smoothScrollInterruptOnMousemove"]
    }],
    isScrollingChange: [{
      type: Output
    }]
  });
})();
var _HammerSliding = class _HammerSliding {
  get _viewport() {
    return this._el.nativeElement;
  }
  constructor(_document, _el, _dir, _platform, _zone) {
    this._document = _document;
    this._el = _el;
    this._dir = _dir;
    this._platform = _platform;
    this._zone = _zone;
    this.activeIndexChange = new EventEmitter();
    this.isSlidingChange = new EventEmitter();
  }
  ngOnChanges(changes) {
    if (changes.enabled && changes.enabled?.currentValue !== changes.enabled?.previousValue) {
      this.enabled ? this._subscribe() : this._unsubscribe();
    }
    if (!changes.adapter?.firstChange && changes.adapter?.currentValue !== changes.adapter?.previousValue) {
      this.enabled ? this._subscribe() : this._unsubscribe();
    }
  }
  ngOnDestroy() {
    this._unsubscribe();
  }
  _subscribe() {
    this._unsubscribe();
    if (!this._platform.ANDROID && !this._platform.IOS && typeof Hammer !== "undefined") {
      this._zone.runOutsideAngular(() => {
        const direction = this.adapter.hammerDirection;
        this._hammer = new Hammer(this._el.nativeElement, {
          inputClass: Hammer.MouseInput
        });
        this._hammer.get("pan").set({
          direction
        });
        let offset;
        this._hammer.on("panstart", () => {
          this._zone.run(() => {
            this.isSlidingChange.emit(true);
          });
          offset = this.adapter.scrollValue;
          this._viewport.classList.add("g-sliding");
          this._viewport.style.setProperty("--slider-scroll-snap-type", "none");
        });
        this._hammer.on("panmove", (e) => this._viewport.scrollTo(this.adapter.getHammerValue(offset, e, "auto")));
        this._hammer.on("panend", (e) => {
          this._document.onselectstart = null;
          this._viewport.classList.remove("g-sliding");
          const index = this.getIndexOnMouseUp(e);
          this._zone.run(() => {
            this.isSlidingChange.emit(false);
            this.activeIndexChange.emit(index);
          });
        });
      });
    }
  }
  _unsubscribe() {
    this._hammer?.destroy();
  }
  getIndexOnMouseUp(e) {
    const currElement = this.items[this.state.currIndex].nativeElement;
    const elementAtCenter = this.getElementFromViewportCenter();
    if (elementAtCenter && elementAtCenter !== currElement) {
      return +elementAtCenter.getAttribute("galleryIndex");
    }
    const velocity = this.adapter.getHammerVelocity(e);
    if (Math.abs(velocity) > 0.3) {
      if (this.config.orientation === Orientation.Horizontal) {
        if (velocity > 0) {
          return this._dir.value === "rtl" ? this.state.currIndex + 1 : this.state.currIndex - 1;
        }
        return this._dir.value === "rtl" ? this.state.currIndex - 1 : this.state.currIndex + 1;
      } else {
        return velocity > 0 ? this.state.currIndex - 1 : this.state.currIndex + 1;
      }
    }
    return -1;
  }
  getElementFromViewportCenter() {
    const sliderRect = this._viewport.getBoundingClientRect();
    const centerElements = this._document.elementsFromPoint(sliderRect.x + sliderRect.width / 2, sliderRect.y + sliderRect.height / 2);
    return centerElements.find((element) => {
      return element.getAttribute("galleryId") === this.galleryId;
    });
  }
};
_HammerSliding.\u0275fac = function HammerSliding_Factory(\u0275t) {
  return new (\u0275t || _HammerSliding)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Directionality), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(NgZone));
};
_HammerSliding.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _HammerSliding,
  selectors: [["", "hammerSliding", ""]],
  inputs: {
    enabled: [0, "hammerSliding", "enabled"],
    galleryId: "galleryId",
    items: "items",
    adapter: "adapter",
    state: "state",
    config: "config"
  },
  outputs: {
    activeIndexChange: "activeIndexChange",
    isSlidingChange: "isSlidingChange"
  },
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature]
});
var HammerSliding = _HammerSliding;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HammerSliding, [{
    type: Directive,
    args: [{
      selector: "[hammerSliding]",
      standalone: true
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: ElementRef
  }, {
    type: Directionality
  }, {
    type: Platform
  }, {
    type: NgZone
  }], {
    enabled: [{
      type: Input,
      args: ["hammerSliding"]
    }],
    galleryId: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    adapter: [{
      type: Input
    }],
    state: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    activeIndexChange: [{
      type: Output
    }],
    isSlidingChange: [{
      type: Output
    }]
  });
})();
var ActiveItemObserver = class {
  observe(root, elements, rootMargin) {
    return createIntersectionObserver(root, elements, rootMargin).pipe(map((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("g-item-highlight");
        return +entry.target.getAttribute("galleryIndex");
      } else {
        entry.target.classList.remove("g-item-highlight");
        return -1;
      }
    }), filter((index) => index !== -1));
  }
};
function createIntersectionObserver(root, elements, rootMargin) {
  return new Observable((observer) => {
    const intersectionObserver = new IntersectionObserver((entries) => observer.next(entries), {
      root,
      rootMargin,
      threshold: 1
    });
    elements.forEach((element) => intersectionObserver.observe(element));
    return () => {
      elements.forEach((element) => intersectionObserver.unobserve(element));
      intersectionObserver.disconnect();
    };
  }).pipe(mergeMap((entries) => entries));
}
var _SliderIntersectionObserver = class _SliderIntersectionObserver {
  get _viewport() {
    return this._el.nativeElement;
  }
  constructor(_zone, _el) {
    this._zone = _zone;
    this._el = _el;
    this._sensor = new ActiveItemObserver();
    this.activeIndexChange = new EventEmitter();
  }
  ngOnChanges() {
    this.config.itemAutosize || this.disabled ? this._unsubscribe() : this._subscribe();
  }
  ngOnDestroy() {
    this._unsubscribe();
  }
  _subscribe() {
    this._unsubscribe();
    if (!!this.adapter && !!this.items?.length) {
      const rootMargin = this.adapter.getRootMargin();
      if (this.config.debug) {
        this._viewport.style.setProperty("--intersection-margin", `"INTERSECTION(${rootMargin})"`);
      }
      this._zone.runOutsideAngular(() => {
        this._currentSubscription = this._sensor.observe(this._viewport, this.items.map((item) => item.nativeElement), rootMargin).subscribe((index) => {
          this._zone.run(() => this.activeIndexChange.emit(index));
        });
      });
    }
  }
  _unsubscribe() {
    this._currentSubscription?.unsubscribe();
  }
};
_SliderIntersectionObserver.\u0275fac = function SliderIntersectionObserver_Factory(\u0275t) {
  return new (\u0275t || _SliderIntersectionObserver)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ElementRef));
};
_SliderIntersectionObserver.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _SliderIntersectionObserver,
  selectors: [["", "sliderIntersectionObserver", ""]],
  inputs: {
    adapter: "adapter",
    items: "items",
    config: "config",
    disabled: [0, "sliderIntersectionObserverDisabled", "disabled"]
  },
  outputs: {
    activeIndexChange: "activeIndexChange"
  },
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature]
});
var SliderIntersectionObserver = _SliderIntersectionObserver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderIntersectionObserver, [{
    type: Directive,
    args: [{
      selector: "[sliderIntersectionObserver]",
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }], {
    adapter: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: ["sliderIntersectionObserverDisabled"]
    }],
    activeIndexChange: [{
      type: Output
    }]
  });
})();
function resizeObservable(el, setter) {
  return new Observable((subscriber) => {
    const resizeObserver = new ResizeObserver((entries) => subscriber.next(entries));
    resizeObserver.observe(el);
    if (setter) {
      setter(resizeObserver);
    }
    return () => resizeObserver.disconnect();
  }).pipe(mergeMap((entries) => entries));
}
var _GalleryIframeComponent = class _GalleryIframeComponent {
  set src(src) {
    this.videoSrc = src;
    this.iframeSrc = this._sanitizer.bypassSecurityTrustResourceUrl(src);
  }
  set pauseVideo(shouldPause) {
    if (this.iframe?.nativeElement) {
      if (shouldPause) {
        const iframe = this.iframe.nativeElement;
        iframe.src = null;
        if (!this.autoplay && this.videoSrc) {
          this.iframeSrc = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoSrc);
        }
      }
    }
  }
  constructor(_sanitizer) {
    this._sanitizer = _sanitizer;
  }
};
_GalleryIframeComponent.\u0275fac = function GalleryIframeComponent_Factory(\u0275t) {
  return new (\u0275t || _GalleryIframeComponent)(\u0275\u0275directiveInject(DomSanitizer));
};
_GalleryIframeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _GalleryIframeComponent,
  selectors: [["gallery-iframe"]],
  viewQuery: function GalleryIframeComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.iframe = _t.first);
    }
  },
  inputs: {
    src: "src",
    pauseVideo: [0, "pause", "pauseVideo"],
    autoplay: "autoplay",
    loadingAttr: "loadingAttr"
  },
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 3,
  vars: 2,
  consts: [["default", ""], ["iframe", ""], ["allowfullscreen", "", "allow", "", "style", "border:none", 3, "src", 4, "ngIf", "ngIfElse"], ["allowfullscreen", "", "allow", "", 2, "border", "none", 3, "src"], ["allowfullscreen", "", 2, "border", "none", 3, "src"]],
  template: function GalleryIframeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, GalleryIframeComponent_iframe_0_Template, 2, 2, "iframe", 2)(1, GalleryIframeComponent_ng_template_1_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const default_r2 = \u0275\u0275reference(2);
      \u0275\u0275property("ngIf", ctx.autoplay)("ngIfElse", default_r2);
    }
  },
  dependencies: [NgIf],
  encapsulation: 2,
  changeDetection: 0
});
var GalleryIframeComponent = _GalleryIframeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryIframeComponent, [{
    type: Component,
    args: [{
      selector: "gallery-iframe",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <iframe *ngIf="autoplay; else default"
            #iframe
            [attr.loading]="loadingAttr"
            allowfullscreen
            allow
            style="border:none"
            [src]="iframeSrc">
    </iframe>
    <ng-template #default>
      <iframe #iframe
              [attr.loading]="loadingAttr"
              allowfullscreen
              style="border:none"
              [src]="iframeSrc">
      </iframe>
    </ng-template>
  `,
      standalone: true,
      imports: [NgIf]
    }]
  }], () => [{
    type: DomSanitizer
  }], {
    src: [{
      type: Input,
      args: ["src"]
    }],
    pauseVideo: [{
      type: Input,
      args: ["pause"]
    }],
    autoplay: [{
      type: Input
    }],
    loadingAttr: [{
      type: Input
    }],
    iframe: [{
      type: ViewChild,
      args: ["iframe"]
    }]
  });
})();
var _GalleryVideoComponent = class _GalleryVideoComponent {
  constructor() {
    this.error = new EventEmitter();
  }
  set pauseVideo(shouldPause) {
    if (this.video.nativeElement) {
      const video = this.video.nativeElement;
      if (shouldPause && !video.paused) {
        video.pause();
      }
    }
  }
  set playVideo(shouldPlay) {
    if (this.video.nativeElement) {
      const video = this.video.nativeElement;
      if (shouldPlay) {
        video.play();
      }
    }
  }
  ngOnInit() {
    if (this.src instanceof Array) {
      this.videoSources = [...this.src];
    } else {
      this.videoSources = [{
        url: this.src
      }];
    }
  }
};
_GalleryVideoComponent.\u0275fac = function GalleryVideoComponent_Factory(\u0275t) {
  return new (\u0275t || _GalleryVideoComponent)();
};
_GalleryVideoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _GalleryVideoComponent,
  selectors: [["gallery-video"]],
  viewQuery: function GalleryVideoComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c1, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.video = _t.first);
    }
  },
  inputs: {
    src: "src",
    poster: "poster",
    mute: "mute",
    loop: "loop",
    controls: "controls",
    controlsList: "controlsList",
    disableRemotePlayback: "disableRemotePlayback",
    disablePictureInPicture: "disablePictureInPicture",
    pauseVideo: [0, "pause", "pauseVideo"],
    playVideo: [0, "play", "playVideo"]
  },
  outputs: {
    error: "error"
  },
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 3,
  vars: 8,
  consts: [["video", ""], ["noType", ""], [3, "error", "disableRemotePlayback", "controls", "loop", "poster"], [4, "ngFor", "ngForOf"], [3, "src", "type", 4, "ngIf", "ngIfElse"], [3, "src", "type"], [3, "src"]],
  template: function GalleryVideoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "video", 2, 0);
      \u0275\u0275listener("error", function GalleryVideoComponent_Template_video_error_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.error.emit($event));
      });
      \u0275\u0275template(2, GalleryVideoComponent_ng_container_2_Template, 4, 2, "ng-container", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("disableRemotePlayback", ctx.disableRemotePlayback)("controls", ctx.controls)("loop", ctx.loop)("poster", ctx.poster, \u0275\u0275sanitizeUrl);
      \u0275\u0275attribute("mute", ctx.mute)("controlsList", ctx.controlsList)("disablePictureInPicture", ctx.disablePictureInPicture);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.videoSources);
    }
  },
  dependencies: [NgForOf, NgIf],
  encapsulation: 2,
  changeDetection: 0
});
var GalleryVideoComponent = _GalleryVideoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryVideoComponent, [{
    type: Component,
    args: [{
      selector: "gallery-video",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <video #video
           [attr.mute]="mute"
           [attr.controlsList]="controlsList"
           [attr.disablePictureInPicture]="disablePictureInPicture"
           [disableRemotePlayback]="disableRemotePlayback"
           [controls]="controls"
           [loop]="loop"
           [poster]="poster"
           (error)="error.emit($event)">
      <ng-container *ngFor="let src of videoSources">
        <source *ngIf="src?.type; else noType" [src]="src?.url" [type]="src.type"/>
        <ng-template #noType>
          <source [src]="src?.url"/>
        </ng-template>
      </ng-container>
    </video>
  `,
      standalone: true,
      imports: [NgForOf, NgIf]
    }]
  }], null, {
    src: [{
      type: Input
    }],
    poster: [{
      type: Input
    }],
    mute: [{
      type: Input
    }],
    loop: [{
      type: Input
    }],
    controls: [{
      type: Input
    }],
    controlsList: [{
      type: Input
    }],
    disableRemotePlayback: [{
      type: Input
    }],
    disablePictureInPicture: [{
      type: Input
    }],
    pauseVideo: [{
      type: Input,
      args: ["pause"]
    }],
    playVideo: [{
      type: Input,
      args: ["play"]
    }],
    error: [{
      type: Output
    }],
    video: [{
      type: ViewChild,
      args: ["video", {
        static: true
      }]
    }]
  });
})();
var imageFailedSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="100" height="100" version="1.1" viewBox="0 0 256 256" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
 <g transform="translate(1.4066 1.4066) scale(2.81)">
	<path d="m74.453 48.627c-5.538 0-11.075-2.107-15.291-6.324-6.11-6.11-7.768-14.99-5.024-22.629h-48.08c-3.346 1e-3 -6.058 2.713-6.058 6.059v16.322l23.834 20.315c2.278 1.942 5.573 2.119 8.047 0.434l14.382-9.801c2.33-1.588 5.408-1.531 7.677 0.141l27.15 20.001v-25.574c-2.156 0.692-4.394 1.056-6.637 1.056z" fill="#c1e5f4" stroke-linecap="round"/>
 <circle cx="27.942" cy="37.942" r="6.072" fill="#fff0a9"/>
 <path d="m85.446 16.02c-6.061-6.061-15.922-6.061-21.983 0s-6.061 15.923 0 21.984c3.031 3.031 7.011 4.546 10.992 4.546 3.98 0 7.962-1.515 10.992-4.545 2.936-2.937 4.553-6.841 4.553-10.993s-1.617-8.056-4.554-10.992zm-3.555 3.555c1.987 1.986 3.081 4.627 3.081 7.436 0 1.95-0.538 3.813-1.525 5.438l-14.428-14.428c4.043-2.442 9.384-1.934 12.872 1.554zm-14.873 14.874c-3.486-3.487-3.997-8.829-1.554-12.873l14.426 14.427c-4.043 2.443-9.385 1.932-12.872-1.554z" fill="#e29393" stroke-linecap="round"/>
 <path d="m0 40.043v32.425c0 3.346 2.712 6.058 6.058 6.058h68.974c3.346 0 6.058-2.712 6.058-6.058v-1.335l-27.15-20.001c-2.27-1.672-5.348-1.729-7.677-0.141l-14.383 9.801c-2.473 1.686-5.769 1.508-8.047-0.434l-23.833-20.315z" fill="#96ea9c" stroke-linecap="round"/>
</g>
</svg>
`;
var _ImgManager = class _ImgManager {
  constructor() {
    this.trigger$ = new BehaviorSubject(null);
    this.images = /* @__PURE__ */ new Map();
  }
  getActiveItem(state$) {
    return this.trigger$.pipe(switchMap(() => state$.pipe(switchMap((state2) => {
      const img = this.images.get(state2.currIndex);
      if (img) {
        return img.state.pipe(filter((state3) => state3 !== "loading"), map(() => img.target));
      }
      return EMPTY;
    }))));
  }
  addItem(index, payload) {
    this.images.set(index, payload);
    this.trigger$.next();
  }
  deleteItem(index) {
    if (this.images.has(index)) {
      this.images.delete(index);
      this.trigger$.next();
    }
  }
};
_ImgManager.\u0275fac = function ImgManager_Factory(\u0275t) {
  return new (\u0275t || _ImgManager)();
};
_ImgManager.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ImgManager,
  factory: _ImgManager.\u0275fac
});
var ImgManager = _ImgManager;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImgManager, [{
    type: Injectable
  }], null, null);
})();
var _ImgRecognizer = class _ImgRecognizer {
  onLoad() {
    this.item.state$.next("success");
  }
  onError() {
    this.item.state$.next("failed");
  }
  constructor(el, manager, item) {
    this.el = el;
    this.manager = manager;
    this.item = item;
    if (item) {
      item.isItemContainImage = true;
    } else {
      throw new Error("[NgGallery]: galleryImage directive should be only used inside gallery item templates!");
    }
  }
  ngOnInit() {
    this.manager.addItem(this.index, {
      state: this.item.state$.asObservable(),
      target: this.el.nativeElement
    });
  }
  ngOnDestroy() {
    this.manager.deleteItem(this.index);
  }
};
_ImgRecognizer.\u0275fac = function ImgRecognizer_Factory(\u0275t) {
  return new (\u0275t || _ImgRecognizer)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ImgManager), \u0275\u0275directiveInject(GalleryItemComponent));
};
_ImgRecognizer.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _ImgRecognizer,
  selectors: [["img", "galleryImage", ""]],
  hostBindings: function ImgRecognizer_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("load", function ImgRecognizer_load_HostBindingHandler($event) {
        return ctx.onLoad($event);
      })("error", function ImgRecognizer_error_HostBindingHandler($event) {
        return ctx.onError($event);
      });
    }
  },
  inputs: {
    index: [0, "galleryImage", "index"]
  },
  standalone: true
});
var ImgRecognizer = _ImgRecognizer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImgRecognizer, [{
    type: Directive,
    args: [{
      selector: "img[galleryImage]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ImgManager
  }, {
    type: GalleryItemComponent
  }], {
    index: [{
      type: Input,
      args: ["galleryImage"]
    }],
    onLoad: [{
      type: HostListener,
      args: ["load", ["$event"]]
    }],
    onError: [{
      type: HostListener,
      args: ["error", ["$event"]]
    }]
  });
})();
var _GalleryImageComponent = class _GalleryImageComponent {
  get imageState() {
    return this.state;
  }
  constructor(_sanitizer) {
    this._sanitizer = _sanitizer;
    this.state = "loading";
    this.errorIcon = imageFailedSvg;
    this.error = new EventEmitter();
  }
  ngOnInit() {
    if (this.loadingIcon) {
      this.loaderTemplate = this._sanitizer.bypassSecurityTrustHtml(this.loadingIcon);
    }
    if (this.loadingError) {
      this.errorTemplate = this._sanitizer.bypassSecurityTrustHtml(this.loadingError);
    }
    if (this.errorIcon) {
      this.errorSvg = this._sanitizer.bypassSecurityTrustHtml(this.errorIcon);
    }
  }
};
_GalleryImageComponent.\u0275fac = function GalleryImageComponent_Factory(\u0275t) {
  return new (\u0275t || _GalleryImageComponent)(\u0275\u0275directiveInject(DomSanitizer));
};
_GalleryImageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _GalleryImageComponent,
  selectors: [["gallery-image"]],
  hostVars: 1,
  hostBindings: function GalleryImageComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("imageState", ctx.imageState);
    }
  },
  inputs: {
    isThumbnail: "isThumbnail",
    index: "index",
    loadingAttr: "loadingAttr",
    alt: "alt",
    src: "src",
    loadingIcon: "loadingIcon",
    loadingError: "loadingError",
    errorIcon: "errorIcon"
  },
  outputs: {
    error: "error"
  },
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 6,
  vars: 5,
  consts: [["main", ""], ["defaultError", ""], ["isLarge", ""], ["defaultLoader", ""], [3, "ngSwitch"], [4, "ngIf", "ngIfElse"], ["class", "g-image-error-message", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [1, "g-image-item", 3, "load", "error", "src"], [1, "g-image-item", 3, "load", "error", "galleryImage", "src"], [1, "g-image-error-message"], [3, "innerHTML", 4, "ngIf", "ngIfElse"], [3, "innerHTML"], [1, "gallery-thumb-error", 3, "innerHTML"], [1, "gallery-image-error", 3, "innerHTML"], ["class", "g-loading", 3, "innerHTML", 4, "ngIf", "ngIfElse"], [1, "g-loading", 3, "innerHTML"], ["class", "g-thumb-loading", 4, "ngIf"], [1, "g-thumb-loading"]],
  template: function GalleryImageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainerStart(0, 4);
      \u0275\u0275template(1, GalleryImageComponent_ng_container_1_Template, 2, 6, "ng-container", 5)(2, GalleryImageComponent_ng_template_2_Template, 1, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, GalleryImageComponent_div_4_Template, 4, 2, "div", 6)(5, GalleryImageComponent_ng_container_5_Template, 4, 2, "ng-container", 7);
      \u0275\u0275elementContainerEnd();
    }
    if (rf & 2) {
      const main_r7 = \u0275\u0275reference(3);
      \u0275\u0275property("ngSwitch", ctx.state);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isThumbnail)("ngIfElse", main_r7);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngSwitchCase", "failed");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "loading");
    }
  },
  dependencies: [NgSwitch, NgSwitchCase, NgIf, ImgRecognizer],
  styles: ['[_nghost-%COMP%]{display:flex;width:100%;height:100%;max-height:100%;max-width:100%;transition:opacity .3s cubic-bezier(.5,0,.5,1);opacity:var(--g-thumb-opacity)}[imageState=success][_nghost-%COMP%]{align-self:center}[_nghost-%COMP%]     svg{width:100%;height:100%}.gallery-image-error[_ngcontent-%COMP%]{width:100px;height:100px}.gallery-thumb-error[_ngcontent-%COMP%]{width:40px;height:40px}img.g-image-item[_ngcontent-%COMP%]{object-fit:var(--image-object-fit);width:100%;height:100%;pointer-events:none;max-height:100%;max-width:100%}.g-image-error-message[_ngcontent-%COMP%]{position:absolute;z-index:10;inset:0;color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column}h2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{color:coral;margin:0}h2[_ngcontent-%COMP%]{font-size:3.5em;margin-bottom:.3em}h4[_ngcontent-%COMP%]{font-size:1.6em}.g-loading[_ngcontent-%COMP%]{position:absolute;transform:translate3d(-50%,-50%,0);left:50%;top:50%;width:80px;height:80px}.g-active-thumb[_ngcontent-%COMP%]   .g-thumb-loading[_ngcontent-%COMP%]{background-color:#464646}.g-thumb-loading[_ngcontent-%COMP%]{position:relative;overflow:hidden;width:100%;height:100%;background-color:#262626}.g-thumb-loading[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0 0 0 50%;z-index:1;width:500%;margin-left:-250%;animation:_ngcontent-%COMP%_phAnimation .8s linear infinite;background:linear-gradient(to right,#fff0 46%,#ffffff59,#fff0 54%) 50% 50%}@keyframes _ngcontent-%COMP%_phAnimation{0%{transform:translate3d(-30%,0,0)}to{transform:translate3d(30%,0,0)}}'],
  data: {
    animation: [trigger("fadeIn", [transition("* => success", [style({
      opacity: 0
    }), animate("300ms ease-in", style({
      opacity: 1
    }))])])]
  },
  changeDetection: 0
});
var GalleryImageComponent = _GalleryImageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryImageComponent, [{
    type: Component,
    args: [{
      selector: "gallery-image",
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [trigger("fadeIn", [transition("* => success", [style({
        opacity: 0
      }), animate("300ms ease-in", style({
        opacity: 1
      }))])])],
      template: `
    <ng-container [ngSwitch]="state">

      <ng-container *ngIf="isThumbnail; else main">
        <img [@fadeIn]="state"
             [src]="src"
             [attr.alt]="alt"
             [attr.loading]="loadingAttr"
             [style.visibility]="state === 'success' ? 'visible' : 'hidden'"
             class="g-image-item"
             (load)="state = 'success'"
             (error)="state = 'failed'; error.emit($event)"/>
      </ng-container>
      <ng-template #main>
        <img [galleryImage]="index"
             [@fadeIn]="state"
             [src]="src"
             [attr.alt]="alt"
             [attr.loading]="loadingAttr"
             [style.visibility]="state === 'success' ? 'visible' : 'hidden'"
             class="g-image-item"
             (load)="state = 'success'"
             (error)="state = 'failed'; error.emit($event)"/>
      </ng-template>

      <div *ngSwitchCase="'failed'"
           class="g-image-error-message">
        <div *ngIf="errorTemplate; else defaultError"
             [innerHTML]="errorTemplate"></div>
        <ng-template #defaultError>
          <ng-container *ngIf="isThumbnail; else isLarge">
            <h4>
              <div class="gallery-thumb-error" [innerHTML]="errorSvg"></div>
            </h4>
          </ng-container>
          <ng-template #isLarge>
            <h2>
              <div class="gallery-image-error" [innerHTML]="errorSvg"></div>
            </h2>
            <p>Unable to load the image!</p>
          </ng-template>
        </ng-template>
      </div>

      <ng-container *ngSwitchCase="'loading'">
        <div *ngIf="loaderTemplate; else defaultLoader"
             class="g-loading"
             [innerHTML]="loaderTemplate">
        </div>
        <ng-template #defaultLoader>
          <div *ngIf="isThumbnail" class="g-thumb-loading"></div>
        </ng-template>
      </ng-container>
    </ng-container>
  `,
      standalone: true,
      imports: [NgSwitch, NgSwitchCase, NgIf, ImgRecognizer],
      styles: [':host{display:flex;width:100%;height:100%;max-height:100%;max-width:100%;transition:opacity .3s cubic-bezier(.5,0,.5,1);opacity:var(--g-thumb-opacity)}:host[imageState=success]{align-self:center}:host ::ng-deep svg{width:100%;height:100%}.gallery-image-error{width:100px;height:100px}.gallery-thumb-error{width:40px;height:40px}img.g-image-item{object-fit:var(--image-object-fit);width:100%;height:100%;pointer-events:none;max-height:100%;max-width:100%}.g-image-error-message{position:absolute;z-index:10;inset:0;color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column}h2,h4{color:coral;margin:0}h2{font-size:3.5em;margin-bottom:.3em}h4{font-size:1.6em}.g-loading{position:absolute;transform:translate3d(-50%,-50%,0);left:50%;top:50%;width:80px;height:80px}.g-active-thumb .g-thumb-loading{background-color:#464646}.g-thumb-loading{position:relative;overflow:hidden;width:100%;height:100%;background-color:#262626}.g-thumb-loading:before{content:"";position:absolute;inset:0 0 0 50%;z-index:1;width:500%;margin-left:-250%;animation:phAnimation .8s linear infinite;background:linear-gradient(to right,#fff0 46%,#ffffff59,#fff0 54%) 50% 50%}@keyframes phAnimation{0%{transform:translate3d(-30%,0,0)}to{transform:translate3d(30%,0,0)}}\n']
    }]
  }], () => [{
    type: DomSanitizer
  }], {
    isThumbnail: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    loadingAttr: [{
      type: Input
    }],
    alt: [{
      type: Input
    }],
    src: [{
      type: Input
    }],
    loadingIcon: [{
      type: Input
    }],
    loadingError: [{
      type: Input
    }],
    errorIcon: [{
      type: Input
    }],
    error: [{
      type: Output
    }],
    imageState: [{
      type: HostBinding,
      args: ["attr.imageState"]
    }]
  });
})();
var _GalleryItemComponent = class _GalleryItemComponent {
  get isActive() {
    return this.index === this.currIndex;
  }
  get isIndexAttr() {
    return this.index;
  }
  get itemState() {
    return this.state$.value;
  }
  get imageContext() {
    return {
      $implicit: this.imageData,
      index: this.index,
      type: this.type,
      active: this.isActive,
      count: this.count,
      first: this.index === 0,
      last: this.index === this.count - 1
    };
  }
  get itemContext() {
    return {
      $implicit: this.data,
      index: this.index,
      type: this.type,
      active: this.isActive,
      count: this.count,
      first: this.index === 0,
      last: this.index === this.count - 1
    };
  }
  get nativeElement() {
    return this.el.nativeElement;
  }
  get isAutoPlay() {
    if (this.isActive) {
      if (this.type === GalleryItemTypes.Video || this.type === GalleryItemTypes.Youtube || this.type === GalleryItemTypes.Vimeo) {
        return this.videoData.autoplay;
      }
    }
  }
  get youtubeSrc() {
    let autoplay = 0;
    if (this.isActive && this.type === GalleryItemTypes.Youtube && this.data.autoplay) {
      autoplay = 1;
    }
    const url = new URL(this.data.src);
    url.search = new URLSearchParams(__spreadProps(__spreadValues({
      wmode: "transparent"
    }, this.data.params), {
      autoplay
    })).toString();
    return url.href;
  }
  get vimeoSrc() {
    let autoplay = 0;
    if (this.isActive && this.type === GalleryItemTypes.Vimeo) {
      if (this.data.autoplay) {
        autoplay = 1;
      }
    }
    const url = new URL(this.data.src);
    url.search = new URLSearchParams(__spreadProps(__spreadValues({}, this.data.params), {
      autoplay
    })).toString();
    return url.href;
  }
  get load() {
    switch (this.config.loadingStrategy) {
      case LoadingStrategy.Preload:
        return true;
      case LoadingStrategy.Lazy:
        return this.currIndex === this.index;
      default:
        return this.currIndex === this.index || this.currIndex === this.index - 1 || this.currIndex === this.index + 1;
    }
  }
  get imageData() {
    return this.data;
  }
  get videoData() {
    return this.data;
  }
  constructor(el) {
    this.el = el;
    this.Types = GalleryItemTypes;
    this.state$ = new BehaviorSubject("loading");
    this.error = new EventEmitter();
  }
  ngAfterViewInit() {
    if (!this.isItemContainImage) {
      this.state$.next("success");
    }
  }
};
_GalleryItemComponent.\u0275fac = function GalleryItemComponent_Factory(\u0275t) {
  return new (\u0275t || _GalleryItemComponent)(\u0275\u0275directiveInject(ElementRef));
};
_GalleryItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _GalleryItemComponent,
  selectors: [["gallery-item"]],
  hostVars: 4,
  hostBindings: function GalleryItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("galleryIndex", ctx.isIndexAttr)("itemState", ctx.itemState);
      \u0275\u0275classProp("g-active-item", ctx.isActive);
    }
  },
  inputs: {
    config: "config",
    index: "index",
    count: "count",
    currIndex: "currIndex",
    type: "type",
    data: "data"
  },
  outputs: {
    error: "error"
  },
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 1,
  vars: 1,
  consts: [[3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "src", "mute", "poster", "controls", "controlsList", "disablePictureInPicture", "play", "pause", "error", 4, "ngSwitchCase"], [3, "src", "autoplay", "loadingAttr", "pause", 4, "ngSwitchCase"], [3, "src", "loadingAttr", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "error", "src", "alt", "index", "loadingAttr", "loadingIcon", "loadingError"], ["class", "g-template g-item-template", 4, "ngIf"], [1, "g-template", "g-item-template"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "error", "src", "mute", "poster", "controls", "controlsList", "disablePictureInPicture", "play", "pause"], [3, "src", "autoplay", "loadingAttr", "pause"], [3, "src", "loadingAttr"]],
  template: function GalleryItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, GalleryItemComponent_ng_container_0_Template, 7, 6, "ng-container", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.load);
    }
  },
  dependencies: [CommonModule, NgIf, NgTemplateOutlet, NgSwitch, NgSwitchCase, NgSwitchDefault, GalleryImageComponent, GalleryVideoComponent, GalleryIframeComponent],
  styles: ["[_nghost-%COMP%]{cursor:var(--g-item-cursor);height:var(--g-item-height);width:var(--g-item-width);max-height:var(--g-item-max-height);max-width:var(--slider-width);z-index:10;position:relative;overflow:hidden;display:flex;flex-direction:column;flex:0 0 auto;scroll-snap-align:center;-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}[itemState=loading][_nghost-%COMP%]{width:var(--slider-width);height:var(--slider-height)}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{height:100%}[_nghost-%COMP%]     video, [_nghost-%COMP%]     iframe{width:100%;height:100%}gallery-image[_ngcontent-%COMP%]{width:var(--g-item-width);height:var(--g-item-height)}.g-template[_ngcontent-%COMP%]{position:absolute;z-index:10;inset:0;color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column}"],
  changeDetection: 0
});
var GalleryItemComponent = _GalleryItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryItemComponent, [{
    type: Component,
    args: [{
      selector: "gallery-item",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-container *ngIf="load" [ngSwitch]="type">
      <ng-container *ngSwitchCase="Types.Image">
        <gallery-image [src]="imageData.src"
                       [alt]="imageData.alt"
                       [index]="index"
                       [loadingAttr]="config.loadingAttr"
                       [loadingIcon]="config.loadingIcon"
                       [loadingError]="config.loadingError"
                       (error)="error.emit($event)"></gallery-image>

        <div *ngIf="config.imageTemplate" class="g-template g-item-template">
          <ng-container *ngTemplateOutlet="config.imageTemplate; context: imageContext"></ng-container>
        </div>
      </ng-container>

      <gallery-video *ngSwitchCase="Types.Video"
                     [src]="videoData.src"
                     [mute]="videoData.mute"
                     [poster]="videoData.poster"
                     [controls]="videoData.controls"
                     [controlsList]="videoData.controlsList"
                     [disablePictureInPicture]="videoData.disablePictureInPicture"
                     [play]="isAutoPlay"
                     [pause]="currIndex !== index"
                     (error)="error.emit($event)"></gallery-video>

      <gallery-iframe *ngSwitchCase="Types.Youtube"
                      [src]="youtubeSrc"
                      [autoplay]="isAutoPlay"
                      [loadingAttr]="config.loadingAttr"
                      [pause]="currIndex !== index"></gallery-iframe>

      <gallery-iframe *ngSwitchCase="Types.Vimeo"
                      [src]="vimeoSrc"
                      [autoplay]="isAutoPlay"
                      [loadingAttr]="config.loadingAttr"
                      [pause]="currIndex !== index"></gallery-iframe>

      <gallery-iframe *ngSwitchCase="Types.Iframe"
                      [src]="data.src"
                      [loadingAttr]="config.loadingAttr"></gallery-iframe>

      <ng-container *ngSwitchDefault>
        <div *ngIf="config.itemTemplate" class="g-template g-item-template">
          <ng-container *ngTemplateOutlet="config.itemTemplate; context: itemContext"></ng-container>
        </div>
      </ng-container>
    </ng-container>
  `,
      standalone: true,
      imports: [CommonModule, GalleryImageComponent, GalleryVideoComponent, GalleryIframeComponent],
      styles: [":host{cursor:var(--g-item-cursor);height:var(--g-item-height);width:var(--g-item-width);max-height:var(--g-item-max-height);max-width:var(--slider-width);z-index:10;position:relative;overflow:hidden;display:flex;flex-direction:column;flex:0 0 auto;scroll-snap-align:center;-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}:host[itemState=loading]{width:var(--slider-width);height:var(--slider-height)}:host>*{height:100%}:host ::ng-deep video,:host ::ng-deep iframe{width:100%;height:100%}gallery-image{width:var(--g-item-width);height:var(--g-item-height)}.g-template{position:absolute;z-index:10;inset:0;color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column}\n"]
    }]
  }], () => [{
    type: ElementRef
  }], {
    config: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    count: [{
      type: Input
    }],
    currIndex: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    error: [{
      type: Output
    }],
    isActive: [{
      type: HostBinding,
      args: ["class.g-active-item"]
    }],
    isIndexAttr: [{
      type: HostBinding,
      args: ["attr.galleryIndex"]
    }],
    itemState: [{
      type: HostBinding,
      args: ["attr.itemState"]
    }]
  });
})();
var _ItemIntersectionObserver = class _ItemIntersectionObserver {
  get _viewport() {
    return this._item.nativeElement.parentElement.parentElement;
  }
  constructor(_zone, _item) {
    this._zone = _zone;
    this._item = _item;
    this._sensor = new ActiveItemObserver();
    this.activeIndexChange = new EventEmitter();
  }
  ngOnChanges() {
    this.config.itemAutosize && !this.disabled ? this._subscribe() : this._unsubscribe();
  }
  ngOnDestroy() {
    this._unsubscribe();
  }
  _subscribe() {
    this._unsubscribe();
    if (!!this.adapter) {
      this._zone.runOutsideAngular(() => {
        this._currentSubscription = combineLatest([resizeObservable(this._viewport), resizeObservable(this._item.nativeElement)]).pipe(switchMap(() => this._item.state$), filter((state2) => state2 !== "loading"), switchMap(() => {
          const rootMargin = this.adapter.getElementRootMargin(this._viewport, this._item.nativeElement);
          if (this.config.debug) {
            this._item.nativeElement.style.setProperty("--item-intersection-margin", `"VIEWPORT(${this._viewport.clientWidth}x${this._viewport.clientHeight}) ITEM(${this._item.nativeElement.clientWidth}x${this._item.nativeElement.clientHeight}) INTERSECTION(${rootMargin})"`);
          }
          return this._sensor.observe(this._viewport, [this._item.nativeElement], rootMargin);
        })).subscribe((index) => {
          this._zone.run(() => this.activeIndexChange.emit(index));
        });
      });
    }
  }
  _unsubscribe() {
    this._currentSubscription?.unsubscribe();
  }
};
_ItemIntersectionObserver.\u0275fac = function ItemIntersectionObserver_Factory(\u0275t) {
  return new (\u0275t || _ItemIntersectionObserver)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(GalleryItemComponent));
};
_ItemIntersectionObserver.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _ItemIntersectionObserver,
  selectors: [["", "itemIntersectionObserver", ""]],
  inputs: {
    adapter: "adapter",
    config: "config",
    disabled: [0, "itemIntersectionObserverDisabled", "disabled"]
  },
  outputs: {
    activeIndexChange: "activeIndexChange"
  },
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature]
});
var ItemIntersectionObserver = _ItemIntersectionObserver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemIntersectionObserver, [{
    type: Directive,
    args: [{
      selector: "[itemIntersectionObserver]",
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: GalleryItemComponent
  }], {
    adapter: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: ["itemIntersectionObserverDisabled"]
    }],
    activeIndexChange: [{
      type: Output
    }]
  });
})();
var _SliderResizeObserver = class _SliderResizeObserver {
  get _viewport() {
    return this._el.nativeElement;
  }
  get _galleryCore() {
    return this._el.nativeElement.parentElement.parentElement.parentElement;
  }
  get _isAutoHeight() {
    return this.config.autoHeight && !this.config.itemAutosize && this.config.orientation === "horizontal" && (this.config.thumbPosition === "top" || this.config.thumbPosition === "bottom");
  }
  constructor(_el, _zone, _gallery, _imgManager) {
    this._el = _el;
    this._zone = _zone;
    this._gallery = _gallery;
    this._imgManager = _imgManager;
    this.isResizingChange = new EventEmitter();
  }
  ngOnInit() {
    const galleryRef = this._gallery.ref(this.galleryId);
    const transitionDuration = getComputedStyle(this._viewport).getPropertyValue("transition-duration");
    if (parseFloat(transitionDuration) === 0) {
      this._afterHeightChanged$ = of(null);
    } else {
      this._afterHeightChanged$ = fromEvent(this._viewport, "transitionend");
    }
    this._zone.runOutsideAngular(() => {
      this._resizeSubscription = resizeObservable(this._viewport, (observer) => this._resizeObserver = observer).pipe(
        // Check if resize should skip due to re-observing the slider
        filter(() => !this._shouldSkip || !(this._shouldSkip = false)),
        // Immediately set visibility to hidden to avoid changing the active item caused by appearance of other items when size is expanded
        tap(() => this.setResizingState()),
        debounceTime(this.config.resizeDebounceTime, animationFrameScheduler),
        tap((entry) => __async(this, null, function* () {
          this.updateSliderSize();
          if (this._isAutoHeight) {
            const img = yield firstValueFrom(this._imgManager.getActiveItem(galleryRef.state));
            if (img.height === this._viewport.clientHeight) {
              this.resetResizingState();
            } else {
              this.setResizingState({
                unobserve: true
              });
              this._galleryCore.style.setProperty("--slider-height", `${img.height}px`);
              yield firstValueFrom(this._afterHeightChanged$);
              this.resetResizingState({
                // Mark to skip first emit after re-observing the slider if height content rect height and client height are identical
                shouldSkip: entry.contentRect.height === this._viewport.clientHeight,
                observe: true
              });
            }
          } else {
            requestAnimationFrame(() => this.resetResizingState({
              shouldSkip: true
            }));
          }
        }))
      ).subscribe();
    });
  }
  ngOnChanges() {
    this._isAutoHeight ? this._subscribeAutoHeight() : this._unsubscribeAutoHeight();
  }
  ngOnDestroy() {
    this._resizeSubscription?.unsubscribe();
    this._unsubscribeAutoHeight();
  }
  ngAfterViewChecked() {
    this.updateSliderSize();
  }
  updateSliderSize() {
    this._galleryCore.style.setProperty("--slider-width", `${this._viewport.clientWidth}px`);
    if (!this.config.autoHeight) {
      this._galleryCore.style.setProperty("--slider-height", `${this._viewport.clientHeight}px`);
    }
    this.updateCentralizeCSSVariables();
  }
  updateCentralizeCSSVariables() {
    if (this.config.itemAutosize) {
      this._galleryCore.style.setProperty("--slider-centralize-start-size", `${this.adapter.getCentralizerStartSize()}px`);
      this._galleryCore.style.setProperty("--slider-centralize-end-size", `${this.adapter.getCentralizerEndSize()}px`);
    }
  }
  _subscribeAutoHeight() {
    this._unsubscribeAutoHeight();
    this._shouldSkip = false;
    this._zone.runOutsideAngular(() => {
      const galleryRef = this._gallery.ref(this.galleryId);
      const state2 = galleryRef.state.pipe(distinctUntilChanged((a, b) => a.currIndex === b.currIndex));
      this._autoHeightSubscription = this._imgManager.getActiveItem(state2).pipe(switchMap((img) => {
        this.setResizingState({
          unobserve: true
        });
        this._galleryCore.style.setProperty("--slider-height", `${img.clientHeight}px`);
        if (img.height === this._viewport.clientHeight) {
          this.resetResizingState({
            shouldSkip: true,
            observe: true
          });
          return EMPTY;
        }
        return this._afterHeightChanged$.pipe(tap(() => this.resetResizingState({
          shouldSkip: true,
          observe: true
        })), take(1));
      })).subscribe();
    });
  }
  _unsubscribeAutoHeight() {
    this._autoHeightSubscription?.unsubscribe();
  }
  setResizingState({
    unobserve
  } = {}) {
    this._zone.run(() => {
      this.isResizingChange.emit(true);
    });
    this._viewport.classList.add("g-resizing");
    if (unobserve) {
      this._resizeObserver.unobserve(this._viewport);
    }
  }
  resetResizingState({
    shouldSkip,
    observe
  } = {}) {
    this._zone.run(() => {
      this.isResizingChange.emit(false);
    });
    this._viewport.classList.remove("g-resizing");
    this._shouldSkip = shouldSkip;
    if (observe) {
      this._resizeObserver.observe(this._viewport);
    }
  }
};
_SliderResizeObserver.\u0275fac = function SliderResizeObserver_Factory(\u0275t) {
  return new (\u0275t || _SliderResizeObserver)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Gallery), \u0275\u0275directiveInject(ImgManager));
};
_SliderResizeObserver.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _SliderResizeObserver,
  selectors: [["", "sliderResizeObserver", ""]],
  inputs: {
    galleryId: "galleryId",
    adapter: "adapter",
    config: "config"
  },
  outputs: {
    isResizingChange: "isResizingChange"
  },
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature]
});
var SliderResizeObserver = _SliderResizeObserver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderResizeObserver, [{
    type: Directive,
    args: [{
      selector: "[sliderResizeObserver]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: Gallery
  }, {
    type: ImgManager
  }], {
    galleryId: [{
      type: Input
    }],
    adapter: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    isResizingChange: [{
      type: Output
    }]
  });
})();
var _GallerySliderComponent = class _GallerySliderComponent {
  get slider() {
    return this.sliderEl.nativeElement;
  }
  constructor(_gallery) {
    this._gallery = _gallery;
    this.position$ = new Subject();
    this.itemClick = new EventEmitter();
    this.error = new EventEmitter();
    this.items = new QueryList();
  }
  ngOnChanges(changes) {
    if (changes.config) {
      if (changes.config.currentValue?.orientation !== changes.config.previousValue?.orientation) {
        switch (this.config.orientation) {
          case Orientation.Horizontal:
            this.adapter = new HorizontalAdapter(this.slider, this.config);
            break;
          case Orientation.Vertical:
            this.adapter = new VerticalAdapter(this.slider, this.config);
            break;
        }
      }
      if (!changes.config.firstChange) {
        requestAnimationFrame(() => {
          this.scrollToIndex(this.state.currIndex, "auto");
        });
      }
    }
    if (changes.state) {
      if (changes.state.currentValue?.currIndex !== changes.state.previousValue?.currIndex) {
        requestAnimationFrame(() => {
          this.scrollToIndex(this.state.currIndex, changes.state.firstChange ? "auto" : this.state.behavior);
        });
      }
    }
  }
  ngAfterViewInit() {
    this.items.notifyOnChanges();
    this.items$ = this.items.changes.pipe(
      // In some cases, items is not notified at first, need to force start the stream
      startWith(null),
      map(() => this.items.toArray())
    );
  }
  trackByFn(index, item) {
    return item.type;
  }
  onActiveIndexChange(index) {
    if (index === -1) {
      this.scrollToIndex(this.state.currIndex, "smooth");
    } else {
      this._gallery.ref(this.galleryId).set(index, "smooth");
    }
  }
  scrollToIndex(index, behavior) {
    const el = this.items.get(index)?.nativeElement;
    if (el) {
      const pos = this.adapter.getScrollToValue(el, behavior || this.config.scrollBehavior);
      this.position$.next(pos);
    }
  }
};
_GallerySliderComponent.\u0275fac = function GallerySliderComponent_Factory(\u0275t) {
  return new (\u0275t || _GallerySliderComponent)(\u0275\u0275directiveInject(Gallery));
};
_GallerySliderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _GallerySliderComponent,
  selectors: [["gallery-slider"]],
  viewQuery: function GallerySliderComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c2, 7);
      \u0275\u0275viewQuery(GalleryItemComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sliderEl = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.items = _t);
    }
  },
  inputs: {
    galleryId: "galleryId",
    state: "state",
    config: "config"
  },
  outputs: {
    itemClick: "itemClick",
    error: "error"
  },
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c3,
  decls: 8,
  vars: 17,
  consts: [["slider", ""], ["sliderIntersectionObserver", "", "sliderResizeObserver", "", 1, "g-slider", 3, "isScrollingChange", "isSlidingChange", "activeIndexChange", "isResizingChange", "smoothScroll", "smoothScrollInterruptOnMousemove", "sliderIntersectionObserverDisabled", "hammerSliding", "adapter", "items", "config", "state", "galleryId"], [1, "g-slider-content"], ["itemIntersectionObserver", "", 3, "type", "config", "data", "currIndex", "index", "count", "itemIntersectionObserverDisabled", "adapter", "activeIndexChange", "click", "error", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "g-slider-debug", 4, "ngIf"], ["itemIntersectionObserver", "", 3, "activeIndexChange", "click", "error", "type", "config", "data", "currIndex", "index", "count", "itemIntersectionObserverDisabled", "adapter"], [1, "g-slider-debug"], [1, "g-slider-resizing"], [1, "g-slider-scrolling"], [1, "g-slider-sliding"]],
  template: function GallerySliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275pipe(2, "async");
      \u0275\u0275pipe(3, "async");
      \u0275\u0275listener("isScrollingChange", function GallerySliderComponent_Template_div_isScrollingChange_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.isScrolling = $event);
      })("isSlidingChange", function GallerySliderComponent_Template_div_isSlidingChange_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.isSliding = $event);
      })("activeIndexChange", function GallerySliderComponent_Template_div_activeIndexChange_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onActiveIndexChange($event));
      })("isResizingChange", function GallerySliderComponent_Template_div_isResizingChange_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.isResizing = $event);
      });
      \u0275\u0275elementStart(4, "div", 2);
      \u0275\u0275template(5, GallerySliderComponent_gallery_item_5_Template, 1, 9, "gallery-item", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, GallerySliderComponent_div_6_Template, 7, 0, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275projection(7);
    }
    if (rf & 2) {
      \u0275\u0275property("smoothScroll", \u0275\u0275pipeBind1(2, 13, ctx.position$))("smoothScrollInterruptOnMousemove", !ctx.config.disableMouseScroll)("sliderIntersectionObserverDisabled", ctx.isScrolling || ctx.isSliding || ctx.isResizing)("hammerSliding", !ctx.config.disableMouseScroll)("adapter", ctx.adapter)("items", \u0275\u0275pipeBind1(3, 15, ctx.items$))("config", ctx.config)("state", ctx.state)("galleryId", ctx.galleryId);
      \u0275\u0275attribute("centralised", ctx.config.itemAutosize);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.state.items)("ngForTrackBy", ctx.trackByFn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.config.debug);
    }
  },
  dependencies: [CommonModule, NgForOf, NgIf, AsyncPipe, GalleryItemComponent, SmoothScroll, HammerSliding, SliderIntersectionObserver, ItemIntersectionObserver, SliderResizeObserver],
  styles: ['[_nghost-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;order:1;flex:1}.g-slider[_ngcontent-%COMP%]{display:flex;align-items:center;transition:var(--g-height-transition);min-height:100%;min-width:100%;max-height:100%;max-width:100%;height:var(--slider-height, 100%);width:var(--slider-width, 100%);overflow:var(--slider-overflow);scroll-snap-type:var(--slider-scroll-snap-type);flex-direction:var(--slider-flex-direction);scrollbar-width:none}.g-slider[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.g-slider.g-sliding[_ngcontent-%COMP%]   .g-slider-content[_ngcontent-%COMP%], .g-slider.g-scrolling[_ngcontent-%COMP%]   .g-slider-content[_ngcontent-%COMP%]{pointer-events:none}.g-slider[centralised=true][_ngcontent-%COMP%]:before, .g-slider[centralised=true][_ngcontent-%COMP%]:after{content:""}.g-slider[centralised=true][_ngcontent-%COMP%]:before{flex:0 0 var(--slider-centralize-start-size)}.g-slider[centralised=true][_ngcontent-%COMP%]:after{flex:0 0 var(--slider-centralize-end-size)}.g-slider-content[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;align-items:center;gap:1px;width:var(--slider-content-width, unset);height:var(--slider-content-height, unset);flex-direction:var(--slider-flex-direction)}'],
  changeDetection: 0
});
var GallerySliderComponent = _GallerySliderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GallerySliderComponent, [{
    type: Component,
    args: [{
      selector: "gallery-slider",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div #slider
         class="g-slider"
         [attr.centralised]="config.itemAutosize"
         [smoothScroll]="position$ | async"
         [smoothScrollInterruptOnMousemove]="!config.disableMouseScroll"
         sliderIntersectionObserver
         [sliderIntersectionObserverDisabled]="isScrolling || isSliding || isResizing"
         [hammerSliding]="!config.disableMouseScroll"
         [adapter]="adapter"
         [items]="items$ | async"
         [config]="config"
         [state]="state"
         [galleryId]="galleryId"
         (isScrollingChange)="isScrolling = $event"
         (isSlidingChange)="isSliding = $event"
         (activeIndexChange)="onActiveIndexChange($event)"
         (isResizingChange)="isResizing = $event"
         sliderResizeObserver>
      <div class="g-slider-content">
        <gallery-item *ngFor="let item of state.items; trackBy: trackByFn index as i"
                      [attr.galleryId]="galleryId"
                      [type]="item.type"
                      [config]="config"
                      [data]="item.data"
                      [currIndex]="state.currIndex"
                      [index]="i"
                      [count]="state.items.length"
                      itemIntersectionObserver
                      [itemIntersectionObserverDisabled]="isScrolling || isSliding || isResizing"
                      [adapter]="adapter"
                      (activeIndexChange)="onActiveIndexChange($event)"
                      (click)="itemClick.emit(i)"
                      (error)="error.emit({ itemIndex: i, error: $event })"/>
      </div>

      <div *ngIf="config.debug" class="g-slider-debug">
        <div class="g-slider-resizing">RESIZING</div>
        <div class="g-slider-scrolling">SCROLLING</div>
        <div class="g-slider-sliding">SLIDING</div>
      </div>
    </div>
    <ng-content></ng-content>
  `,
      standalone: true,
      imports: [CommonModule, GalleryItemComponent, SmoothScroll, HammerSliding, SliderIntersectionObserver, ItemIntersectionObserver, SliderResizeObserver],
      styles: [':host{position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;order:1;flex:1}.g-slider{display:flex;align-items:center;transition:var(--g-height-transition);min-height:100%;min-width:100%;max-height:100%;max-width:100%;height:var(--slider-height, 100%);width:var(--slider-width, 100%);overflow:var(--slider-overflow);scroll-snap-type:var(--slider-scroll-snap-type);flex-direction:var(--slider-flex-direction);scrollbar-width:none}.g-slider::-webkit-scrollbar{display:none}.g-slider.g-sliding .g-slider-content,.g-slider.g-scrolling .g-slider-content{pointer-events:none}.g-slider[centralised=true]:before,.g-slider[centralised=true]:after{content:""}.g-slider[centralised=true]:before{flex:0 0 var(--slider-centralize-start-size)}.g-slider[centralised=true]:after{flex:0 0 var(--slider-centralize-end-size)}.g-slider-content{flex:0 0 auto;display:flex;align-items:center;gap:1px;width:var(--slider-content-width, unset);height:var(--slider-content-height, unset);flex-direction:var(--slider-flex-direction)}\n']
    }]
  }], () => [{
    type: Gallery
  }], {
    galleryId: [{
      type: Input
    }],
    state: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    error: [{
      type: Output
    }],
    sliderEl: [{
      type: ViewChild,
      args: ["slider", {
        static: true
      }]
    }],
    items: [{
      type: ViewChildren,
      args: [GalleryItemComponent]
    }]
  });
})();
var _GalleryThumbComponent = class _GalleryThumbComponent {
  get isActive() {
    return this.index === this.currIndex;
  }
  get isIndexAttr() {
    return this.index;
  }
  get imageContext() {
    return {
      $implicit: this.data,
      index: this.index,
      type: this.type,
      active: this.isActive,
      count: this.count,
      first: this.index === 0,
      last: this.index === this.count - 1
    };
  }
  get nativeElement() {
    return this.el.nativeElement;
  }
  constructor(el) {
    this.el = el;
    this.error = new EventEmitter();
  }
};
_GalleryThumbComponent.\u0275fac = function GalleryThumbComponent_Factory(\u0275t) {
  return new (\u0275t || _GalleryThumbComponent)(\u0275\u0275directiveInject(ElementRef));
};
_GalleryThumbComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _GalleryThumbComponent,
  selectors: [["gallery-thumb"]],
  hostVars: 3,
  hostBindings: function GalleryThumbComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("galleryIndex", ctx.isIndexAttr);
      \u0275\u0275classProp("g-active-thumb", ctx.isActive);
    }
  },
  inputs: {
    config: "config",
    index: "index",
    count: "count",
    currIndex: "currIndex",
    type: "type",
    data: "data"
  },
  outputs: {
    error: "error"
  },
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 2,
  vars: 6,
  consts: [[3, "error", "src", "alt", "isThumbnail", "loadingIcon", "loadingError"], ["class", "g-template g-thumb-template", 4, "ngIf"], [1, "g-template", "g-thumb-template"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function GalleryThumbComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "gallery-image", 0);
      \u0275\u0275listener("error", function GalleryThumbComponent_Template_gallery_image_error_0_listener($event) {
        return ctx.error.emit($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(1, GalleryThumbComponent_div_1_Template, 2, 2, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("src", ctx.data.thumb)("alt", ctx.data.alt + "-thumbnail")("isThumbnail", true)("loadingIcon", ctx.config.thumbLoadingIcon)("loadingError", ctx.config.thumbLoadingError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.config.thumbTemplate);
    }
  },
  dependencies: [CommonModule, NgIf, NgTemplateOutlet, GalleryImageComponent],
  styles: ["[_nghost-%COMP%]{cursor:var(--g-thumb-cursor);height:var(--g-thumb-height);width:var(--g-thumb-width);max-height:var(--g-thumb-height);max-width:var(--g-thumb-width);align-self:center;background:#000;position:relative;display:flex;overflow:hidden;flex-direction:column;flex:0 0 auto;scroll-snap-align:center;-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-webkit-tap-highlight-color:rgba(0,0,0,0);--g-thumb-opacity: .5}.g-active-thumb[_nghost-%COMP%]{--g-thumb-opacity: 1}.g-template[_ngcontent-%COMP%]{position:absolute;z-index:10;inset:0;color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column}"],
  changeDetection: 0
});
var GalleryThumbComponent = _GalleryThumbComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryThumbComponent, [{
    type: Component,
    args: [{
      selector: "gallery-thumb",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <gallery-image [src]="data.thumb"
                   [alt]="data.alt + '-thumbnail'"
                   [isThumbnail]="true"
                   [loadingIcon]="config.thumbLoadingIcon"
                   [loadingError]="config.thumbLoadingError"
                   (error)="error.emit($event)"></gallery-image>

    <div *ngIf="config.thumbTemplate" class="g-template g-thumb-template">
      <ng-container *ngTemplateOutlet="config.thumbTemplate; context: imageContext"></ng-container>
    </div>
  `,
      standalone: true,
      imports: [CommonModule, GalleryImageComponent],
      styles: [":host{cursor:var(--g-thumb-cursor);height:var(--g-thumb-height);width:var(--g-thumb-width);max-height:var(--g-thumb-height);max-width:var(--g-thumb-width);align-self:center;background:#000;position:relative;display:flex;overflow:hidden;flex-direction:column;flex:0 0 auto;scroll-snap-align:center;-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-webkit-tap-highlight-color:rgba(0,0,0,0);--g-thumb-opacity: .5}:host.g-active-thumb{--g-thumb-opacity: 1}.g-template{position:absolute;z-index:10;inset:0;color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column}\n"]
    }]
  }], () => [{
    type: ElementRef
  }], {
    config: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    count: [{
      type: Input
    }],
    currIndex: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    error: [{
      type: Output
    }],
    isActive: [{
      type: HostBinding,
      args: ["class.g-active-thumb"]
    }],
    isIndexAttr: [{
      type: HostBinding,
      args: ["attr.galleryIndex"]
    }]
  });
})();
var _ThumbResizeObserver = class _ThumbResizeObserver {
  get _viewport() {
    return this._el.nativeElement;
  }
  constructor(_el, _zone) {
    this._el = _el;
    this._zone = _zone;
    this.resized = new EventEmitter();
  }
  ngOnInit() {
    this._zone.runOutsideAngular(() => {
      this._resizeSubscription = resizeObservable(this._viewport).pipe(debounceTime(this.config.resizeDebounceTime, animationFrameScheduler), tap(() => {
        this.updateSliderSize();
        this.resized.emit();
      })).subscribe();
    });
  }
  ngOnChanges(changes) {
    if (!changes.config.firstChange) {
      this.updateSliderSize();
    }
  }
  ngOnDestroy() {
    this._resizeSubscription?.unsubscribe();
  }
  updateSliderSize() {
    this._viewport.style.setProperty("--thumb-centralize-start-size", this.adapter.getCentralizerStartSize() + "px");
    this._viewport.style.setProperty("--thumb-centralize-end-size", this.adapter.getCentralizerEndSize() + "px");
  }
};
_ThumbResizeObserver.\u0275fac = function ThumbResizeObserver_Factory(\u0275t) {
  return new (\u0275t || _ThumbResizeObserver)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
};
_ThumbResizeObserver.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _ThumbResizeObserver,
  selectors: [["", "thumbResizeObserver", ""]],
  inputs: {
    config: "config",
    adapter: "adapter"
  },
  outputs: {
    resized: "thumbResizeObserver"
  },
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature]
});
var ThumbResizeObserver = _ThumbResizeObserver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThumbResizeObserver, [{
    type: Directive,
    args: [{
      selector: "[thumbResizeObserver]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }], {
    config: [{
      type: Input
    }],
    adapter: [{
      type: Input
    }],
    resized: [{
      type: Output,
      args: ["thumbResizeObserver"]
    }]
  });
})();
var _GalleryThumbsComponent = class _GalleryThumbsComponent {
  constructor() {
    this.position$ = new Subject();
    this.thumbClick = new EventEmitter();
    this.error = new EventEmitter();
    this.items = new QueryList();
  }
  get slider() {
    return this.sliderEl.nativeElement;
  }
  ngOnChanges(changes) {
    if (changes.config) {
      if (changes.config.currentValue?.thumbPosition !== changes.config.previousValue?.thumbPosition) {
        switch (this.config.thumbPosition) {
          case ThumbnailsPosition.Right:
          case ThumbnailsPosition.Left:
            this.adapter = new VerticalAdapter(this.slider, this.config);
            break;
          case ThumbnailsPosition.Top:
          case ThumbnailsPosition.Bottom:
            this.adapter = new HorizontalAdapter(this.slider, this.config);
            break;
        }
        if (!changes.config.firstChange) {
          requestAnimationFrame(() => {
            this.scrollToIndex(this.state.currIndex, "auto");
          });
        }
      }
    }
    if (changes.state && (changes.state.firstChange || !this.config.detachThumbs)) {
      if (changes.state.currentValue?.currIndex !== changes.state.previousValue?.currIndex) {
        requestAnimationFrame(() => {
          this.scrollToIndex(this.state.currIndex, changes.state?.firstChange ? "auto" : "smooth");
        });
      }
    }
  }
  ngAfterViewInit() {
    this.items.notifyOnChanges();
    this.items$ = this.items.changes.pipe(
      // In some cases, items is not notified at first, need to force start the stream
      startWith(null),
      map(() => this.items.toArray())
    );
  }
  trackByFn(index, item) {
    return item.type;
  }
  onActiveIndexChange(index) {
    if (index === -1) {
      this.scrollToIndex(this.state.currIndex, "smooth");
    } else {
      this.scrollToIndex(index, "smooth");
    }
  }
  scrollToIndex(value, behavior) {
    const el = this.items.get(value)?.nativeElement;
    if (el) {
      const pos = this.adapter.getScrollToValue(el, behavior);
      this.position$.next(pos);
    }
  }
};
_GalleryThumbsComponent.\u0275fac = function GalleryThumbsComponent_Factory(\u0275t) {
  return new (\u0275t || _GalleryThumbsComponent)();
};
_GalleryThumbsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _GalleryThumbsComponent,
  selectors: [["gallery-thumbs"]],
  viewQuery: function GalleryThumbsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c2, 7);
      \u0275\u0275viewQuery(GalleryThumbComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sliderEl = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.items = _t);
    }
  },
  inputs: {
    galleryId: "galleryId",
    state: "state",
    config: "config"
  },
  outputs: {
    thumbClick: "thumbClick",
    error: "error"
  },
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  decls: 6,
  vars: 15,
  consts: [["slider", ""], [1, "g-slider", 3, "thumbResizeObserver", "activeIndexChange", "smoothScroll", "smoothScrollInterruptOnMousemove", "hammerSliding", "galleryId", "items", "state", "config", "adapter"], [1, "g-slider-content"], [3, "type", "config", "data", "currIndex", "index", "count", "click", "error", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "click", "error", "type", "config", "data", "currIndex", "index", "count"]],
  template: function GalleryThumbsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275pipe(2, "async");
      \u0275\u0275pipe(3, "async");
      \u0275\u0275listener("thumbResizeObserver", function GalleryThumbsComponent_Template_div_thumbResizeObserver_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.scrollToIndex(ctx.state.currIndex, "auto"));
      })("activeIndexChange", function GalleryThumbsComponent_Template_div_activeIndexChange_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onActiveIndexChange($event));
      });
      \u0275\u0275elementStart(4, "div", 2);
      \u0275\u0275template(5, GalleryThumbsComponent_gallery_thumb_5_Template, 1, 7, "gallery-thumb", 3);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("smoothScroll", \u0275\u0275pipeBind1(2, 11, ctx.position$))("smoothScrollInterruptOnMousemove", !ctx.config.disableThumbMouseScroll)("hammerSliding", !ctx.config.disableThumbMouseScroll)("galleryId", ctx.galleryId)("items", \u0275\u0275pipeBind1(3, 13, ctx.items$))("state", ctx.state)("config", ctx.config)("adapter", ctx.adapter);
      \u0275\u0275attribute("centralised", ctx.config.thumbCentralized || ctx.adapter.isContentLessThanContainer);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.state.items)("ngForTrackBy", ctx.trackByFn);
    }
  },
  dependencies: [CommonModule, NgForOf, AsyncPipe, GalleryThumbComponent, SmoothScroll, HammerSliding, ThumbResizeObserver],
  styles: ['[_nghost-%COMP%]{max-height:100%;max-width:100%;display:block;z-index:100}.g-slider[_ngcontent-%COMP%]{display:flex;align-items:center;transition:var(--g-height-transition);max-height:100%;min-width:100%;height:var(--thumb-slider-height);width:var(--thumb-slider-width);top:var(--thumb-slider-top);left:var(--thumb-slider-left);overflow:var(--thumb-slider-overflow);scroll-snap-type:var(--slider-scroll-snap-type);flex-direction:var(--thumb-slider-flex-direction);scrollbar-width:none}.g-slider[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.g-slider.g-sliding[_ngcontent-%COMP%]   .g-slider-content[_ngcontent-%COMP%]{pointer-events:none}.g-slider[centralised=true][_ngcontent-%COMP%]:before, .g-slider[centralised=true][_ngcontent-%COMP%]:after{content:""}.g-slider[centralised=true][_ngcontent-%COMP%]:before{flex:0 0 var(--thumb-centralize-start-size)}.g-slider[centralised=true][_ngcontent-%COMP%]:after{flex:0 0 var(--thumb-centralize-end-size)}.g-slider-content[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;flex-direction:var(--thumb-slider-flex-direction);align-items:center;gap:1px}'],
  changeDetection: 0
});
var GalleryThumbsComponent = _GalleryThumbsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryThumbsComponent, [{
    type: Component,
    args: [{
      selector: "gallery-thumbs",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div #slider
         class="g-slider"
         [smoothScroll]="position$ | async"
         [smoothScrollInterruptOnMousemove]="!config.disableThumbMouseScroll"
         [attr.centralised]="config.thumbCentralized || adapter.isContentLessThanContainer"
         [hammerSliding]="!config.disableThumbMouseScroll"
         [galleryId]="galleryId"
         [items]="items$ | async"
         [state]="state"
         [config]="config"
         [adapter]="adapter"
         (thumbResizeObserver)="scrollToIndex(state.currIndex, 'auto')"
         (activeIndexChange)="onActiveIndexChange($event)">
      <div class="g-slider-content">
        <gallery-thumb *ngFor="let item of state.items; trackBy: trackByFn; index as i"
                       [attr.galleryId]="galleryId"
                       [type]="item.type"
                       [config]="config"
                       [data]="item.data"
                       [currIndex]="state.currIndex"
                       [index]="i"
                       [count]="state.items.length"
                       (click)="config.disableThumbs ? null : thumbClick.emit(i)"
                       (error)="error.emit({ itemIndex: i, error: $event })"/>
      </div>
    </div>
  `,
      standalone: true,
      imports: [CommonModule, GalleryThumbComponent, SmoothScroll, HammerSliding, ThumbResizeObserver],
      styles: [':host{max-height:100%;max-width:100%;display:block;z-index:100}.g-slider{display:flex;align-items:center;transition:var(--g-height-transition);max-height:100%;min-width:100%;height:var(--thumb-slider-height);width:var(--thumb-slider-width);top:var(--thumb-slider-top);left:var(--thumb-slider-left);overflow:var(--thumb-slider-overflow);scroll-snap-type:var(--slider-scroll-snap-type);flex-direction:var(--thumb-slider-flex-direction);scrollbar-width:none}.g-slider::-webkit-scrollbar{display:none}.g-slider.g-sliding .g-slider-content{pointer-events:none}.g-slider[centralised=true]:before,.g-slider[centralised=true]:after{content:""}.g-slider[centralised=true]:before{flex:0 0 var(--thumb-centralize-start-size)}.g-slider[centralised=true]:after{flex:0 0 var(--thumb-centralize-end-size)}.g-slider-content{flex:0 0 auto;display:flex;flex-direction:var(--thumb-slider-flex-direction);align-items:center;gap:1px}\n']
    }]
  }], null, {
    galleryId: [{
      type: Input
    }],
    state: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    thumbClick: [{
      type: Output
    }],
    error: [{
      type: Output
    }],
    sliderEl: [{
      type: ViewChild,
      args: ["slider", {
        static: true
      }]
    }],
    items: [{
      type: ViewChildren,
      args: [GalleryThumbComponent]
    }]
  });
})();
var _GalleryCoreComponent = class _GalleryCoreComponent {
  /** Set thumbnails position */
  get thumbPosition() {
    return this.config.thumbPosition;
  }
  /** Set sliding direction */
  get orientation() {
    return this.config.orientation;
  }
  /** Disable thumbnails' clicks */
  get disableThumb() {
    return this.config.disableThumbs;
  }
  /** Set bullets' clicks */
  get bulletDisabled() {
    return this.config.disableBullets;
  }
  /** Set gallery bullets position */
  get bulletPosition() {
    return this.config.bulletPosition;
  }
  /** Set gallery image size property */
  get imageSize() {
    return this.config.imageSize;
  }
  /** Set gallery thumb image size property */
  get thumbImageSize() {
    return this.config.thumbImageSize;
  }
  /** Set gallery counter position */
  get counterPosition() {
    return this.config.counterPosition;
  }
  /** Disable sliding using sliding via touchpad, mousewheel and gestures */
  get scrollDisabled() {
    return this.config.disableScroll;
  }
  /** Disable thumb sliding using sliding via touchpad, mousewheel and gestures */
  get thumbScrollDisabled() {
    return this.config.disableThumbScroll;
  }
  /** Set items autosize styles  */
  get itemAutosize() {
    return this.config.itemAutosize;
  }
  /** Set gallery autoHeight styles  */
  get autoHeight() {
    return this.config.autoHeight;
  }
  /** Set gallery thumb autosize styles  */
  get thumbAutosize() {
    return this.config.thumbAutosize;
  }
  /** Set direction  */
  get direction() {
    return this.dir.value;
  }
  /** Set debug style  */
  get debug() {
    return this.config.debug;
  }
  constructor(el, dir) {
    this.el = el;
    this.dir = dir;
    this.itemClick = new EventEmitter();
    this.thumbClick = new EventEmitter();
    this.error = new EventEmitter();
  }
  ngOnChanges(changes) {
    if (changes.config) {
      if (changes.config.currentValue?.thumbWidth !== changes.config.previousValue?.thumbWidth) {
        this.el.nativeElement.style.setProperty("--g-thumb-width", coerceCssPixelValue(changes.config.currentValue.thumbWidth));
      }
      if (changes.config.currentValue?.thumbHeight !== changes.config.previousValue?.thumbHeight) {
        this.el.nativeElement.style.setProperty("--g-thumb-height", coerceCssPixelValue(changes.config.currentValue.thumbHeight));
      }
    }
  }
};
_GalleryCoreComponent.\u0275fac = function GalleryCoreComponent_Factory(\u0275t) {
  return new (\u0275t || _GalleryCoreComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Directionality));
};
_GalleryCoreComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _GalleryCoreComponent,
  selectors: [["gallery-core"]],
  hostVars: 15,
  hostBindings: function GalleryCoreComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("thumbPosition", ctx.thumbPosition)("orientation", ctx.orientation)("thumbDisabled", ctx.disableThumb)("bulletDisabled", ctx.bulletDisabled)("bulletPosition", ctx.bulletPosition)("imageSize", ctx.imageSize)("thumbImageSize", ctx.thumbImageSize)("counterPosition", ctx.counterPosition)("scrollDisabled", ctx.scrollDisabled)("thumbScrollDisabled", ctx.thumbScrollDisabled)("itemAutosize", ctx.itemAutosize)("autoHeight", ctx.autoHeight)("thumbAutosize", ctx.thumbAutosize)("dir", ctx.direction)("debug", ctx.debug);
    }
  },
  inputs: {
    galleryId: "galleryId",
    state: "state",
    config: "config"
  },
  outputs: {
    itemClick: "itemClick",
    thumbClick: "thumbClick",
    error: "error"
  },
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  decls: 8,
  vars: 14,
  consts: [[3, "state", "config", "galleryId", "thumbClick", "error", 4, "ngIf"], [1, "g-box"], [3, "itemClick", "error", "state", "config", "galleryId"], [3, "state", "config", "galleryId", 4, "ngIf"], [3, "state", 4, "ngIf"], [1, "g-box-template"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "thumbClick", "error", "state", "config", "galleryId"], [3, "state", "config", "galleryId"], [3, "state"]],
  template: function GalleryCoreComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, GalleryCoreComponent_gallery_thumbs_0_Template, 1, 3, "gallery-thumbs", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "gallery-slider", 2);
      \u0275\u0275listener("itemClick", function GalleryCoreComponent_Template_gallery_slider_itemClick_2_listener($event) {
        return ctx.itemClick.emit($event);
      })("error", function GalleryCoreComponent_Template_gallery_slider_error_2_listener($event) {
        return ctx.error.emit($event);
      });
      \u0275\u0275template(3, GalleryCoreComponent_gallery_nav_3_Template, 1, 3, "gallery-nav", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, GalleryCoreComponent_gallery_bullets_4_Template, 1, 3, "gallery-bullets", 3)(5, GalleryCoreComponent_gallery_counter_5_Template, 1, 1, "gallery-counter", 4);
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275template(7, GalleryCoreComponent_ng_container_7_Template, 1, 0, "ng-container", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.config.thumbs);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("g-debug", ctx.config.debug);
      \u0275\u0275property("state", ctx.state)("config", ctx.config)("galleryId", ctx.galleryId);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.config.nav && ctx.state.items.length > 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.config.bullets);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.config.counter);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngTemplateOutlet", ctx.config.boxTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(11, _c4, ctx.state, ctx.config));
    }
  },
  dependencies: [CommonModule, NgIf, NgTemplateOutlet, GalleryThumbsComponent, GallerySliderComponent, GalleryNavComponent, GalleryBulletsComponent, GalleryCounterComponent],
  styles: ["[_nghost-%COMP%]{position:relative;overflow:hidden;display:flex;gap:var(--g-gutter-size);width:100%;height:500px;min-height:100%;max-height:100%;--image-object-fit: unset;--slider-thumb-height: unset;--slider-thumb-width: unset;--thumb-slider-left: unset;--thumb-slider-overflow: unset;--thumb-slider-flex-direction: unset;--g-thumb-width: unset;--g-thumb-height: unset;--g-thumb-cursor: pointer;--slider-scroll-snap-type: unset;--slider-overflow: unset;--slider-flex-direction: unset;--slider-width: unset;--slider-height: unset;--slider-content-width: unset;--slider-content-height: unset;--g-item-width: unset;--g-item-height: unset;--g-item-max-height: var(--slider-height);--bullets-top: unset;--bullets-bottom: unset;--bullets-cursor: pointer;--bullets-opacity: .4;--bullets-hover-opacity: 1;--bullets-active-opacity: 1;--counter-top: unset;--counter-bottom: unset;--counter-border-radius: unset;--nav-space: 8px;--nav-hover-space: 6.4px;--nav-next-right: unset;--nav-next-hover-right: unset;--nav-next-left: unset;--nav-next-hover-left: unset}[thumbPosition=top][_nghost-%COMP%]{flex-direction:column}[thumbPosition=left][_nghost-%COMP%]{flex-direction:row}[thumbPosition=right][_nghost-%COMP%]{flex-direction:row-reverse}[thumbPosition=bottom][_nghost-%COMP%]{flex-direction:column-reverse}[autoHeight=true][itemAutoSize=false][orientation=horizontal][thumbPosition=top][_nghost-%COMP%], [autoHeight=true][itemAutoSize=false][orientation=horizontal][thumbPosition=bottom][_nghost-%COMP%]{height:fit-content;--g-item-height: auto !important;--g-item-max-height: auto}[imageSize=contain][_nghost-%COMP%]   gallery-slider[_ngcontent-%COMP%], [thumbImageSize=contain][_nghost-%COMP%]   gallery-thumbs[_ngcontent-%COMP%]{--image-object-fit: contain}[imageSize=cover][_nghost-%COMP%]   gallery-slider[_ngcontent-%COMP%], [thumbImageSize=cover][_nghost-%COMP%]   gallery-thumbs[_ngcontent-%COMP%]{--image-object-fit: cover}[thumbPosition=top][_nghost-%COMP%], [thumbPosition=bottom][_nghost-%COMP%]{--thumb-slider-top: 0;--thumb-slider-overflow: auto hidden;--thumb-slider-flex-direction: row;--g-thumb-height: 100%}[thumbPosition=top][thumbAutosize=true][_nghost-%COMP%], [thumbPosition=bottom][thumbAutosize=true][_nghost-%COMP%]{--g-thumb-width: auto !important}[thumbPosition=left][_nghost-%COMP%], [thumbPosition=right][_nghost-%COMP%]{--thumb-slider-left: 0;--thumb-slider-overflow: hidden auto;--thumb-slider-flex-direction: column;--g-thumb-width: 100%}[thumbPosition=left][thumbAutosize=true][_nghost-%COMP%], [thumbPosition=right][thumbAutosize=true][_nghost-%COMP%]{--g-thumb-height: auto !important}[thumbDisbled=true][_nghost-%COMP%]{--g-thumb-cursor: default}[thumbScrollDisabled=true][_nghost-%COMP%]{--thumb-slider-overflow: hidden !important}[orientation=horizontal][_nghost-%COMP%]{--slider-overflow: auto hidden;--slider-scroll-snap-type: x mandatory;--slider-flex-direction: row;--slider-content-height: 100%}[orientation=vertical][_nghost-%COMP%]{--slider-overflow: hidden auto;--slider-scroll-snap-type: y mandatory;--slider-flex-direction: column;--slider-content-width: 100%}[scrollDisabled=true][_nghost-%COMP%]{--slider-overflow: hidden !important}[orientation=horizontal][_nghost-%COMP%]{--g-item-width: var(--slider-width);--g-item-height: 100%}[orientation=horizontal][itemAutoSize=true][_nghost-%COMP%]{--g-item-width: auto}[orientation=vertical][_nghost-%COMP%]{--g-item-width: 100%;--g-item-height: var(--slider-height)}[orientation=vertical][itemAutoSize=true][_nghost-%COMP%]{--g-item-height: auto}[bulletPosition=top][_nghost-%COMP%]{--bullets-top: 15px}[bulletPosition=bottom][_nghost-%COMP%]{--bullets-bottom: 15px}[bulletDisabled=true][_nghost-%COMP%]{--bullets-cursor: default;--bullets-hover-opacity: var(--bullets-opacity)}[counterPosition=top][_nghost-%COMP%]{--counter-top: 0;--counter-border-radius: 0 0 4px 4px}[counterPosition=bottom][_nghost-%COMP%]{--counter-bottom: 0;--counter-border-radius: 4px 4px 0 0}[dir=ltr][_nghost-%COMP%]{--nav-next-transform: translateY(-50%) perspective(1px);--nav-next-right: var(--nav-space);--nav-next-hover-right: var(--nav-hover-space);--nav-prev-transform: translateY(-50%) perspective(1px) scale(-1, -1);--nav-prev-left: var(--nav-space);--nav-prev-hover-left: var(--nav-hover-space)}[dir=rtl][_nghost-%COMP%]{--nav-next-transform: translateY(-50%) perspective(1px) scale(-1, -1);--nav-next-left: var(--nav-space);--nav-next-hover-left: var(--nav-hover-space);--nav-prev-transform: translateY(-50%) perspective(1px);--nav-prev-right: var(--nav-space);--nav-prev-hover-right: var(--nav-hover-space)}.g-box[_ngcontent-%COMP%]{overflow:hidden;position:relative;display:flex;flex-direction:column;order:1;flex:1}.g-box-template[_ngcontent-%COMP%]{position:absolute;z-index:10}", '[debug=true][_nghost-%COMP%]     .g-sliding gallery-item.g-item-highlight, [debug=true][_nghost-%COMP%]     .g-resizing gallery-item.g-item-highlight, [debug=true][_nghost-%COMP%]     .g-scrolling gallery-item.g-item-highlight{visibility:hidden}[debug=true][_nghost-%COMP%]     gallery-slider:after, [debug=true][_nghost-%COMP%]     gallery-slider:before{position:absolute;content:"";z-index:12}[debug=true][_nghost-%COMP%]     gallery-slider:before{width:100%;height:0;border-top:1px dashed lime}[debug=true][_nghost-%COMP%]     gallery-slider:after{height:100%;width:0;border-left:1px dashed lime}[debug=true][_nghost-%COMP%]     gallery-slider gallery-item{outline:1px solid darkorange}[debug=true][_nghost-%COMP%]     gallery-slider gallery-item.g-item-highlight:after{content:"";position:absolute;width:100%;height:100%;border:3px solid lime;box-sizing:border-box;z-index:10}[debug=true][_nghost-%COMP%]     .g-sliding .g-slider-sliding{display:block}[debug=true][_nghost-%COMP%]     .g-scrolling .g-slider-scrolling{display:block}[debug=true][_nghost-%COMP%]     .g-resizing .g-slider-resizing{display:block}[debug=true][_nghost-%COMP%]     .g-slider-debug{position:absolute;top:0;left:0;display:flex;gap:5px;padding:10px}[debug=true][_nghost-%COMP%]     .g-slider-debug .g-slider-resizing{background:#f54c28}[debug=true][_nghost-%COMP%]     .g-slider-debug .g-slider-scrolling{background:#ff8524}[debug=true][_nghost-%COMP%]     .g-slider-debug .g-slider-sliding{background:#1f6cb9}[debug=true][_nghost-%COMP%]     .g-slider-debug div, [debug=true][_nghost-%COMP%]     .g-slider-debug:before{display:none;color:#fff;font-family:monospace;z-index:12;padding:2px 6px;border-radius:3px}[debug=true][itemAutoSize=false][_nghost-%COMP%]     .g-slider-debug:before{content:var(--intersection-margin);background:#ecececd6;color:#363636;display:block}[debug=true][itemAutoSize=true][_nghost-%COMP%]     gallery-item:before{position:absolute;margin:10px;content:var(--item-intersection-margin);background:#ecececd6;color:#363636;display:block;width:270px;font-family:monospace;z-index:12;padding:2px 6px;border-radius:3px}'],
  changeDetection: 0
});
var GalleryCoreComponent = _GalleryCoreComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryCoreComponent, [{
    type: Component,
    args: [{
      selector: "gallery-core",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <gallery-thumbs *ngIf="config.thumbs"
                    [state]="state"
                    [config]="config"
                    [galleryId]="galleryId"
                    (thumbClick)="thumbClick.emit($event)"
                    (error)="error.emit($event)"/>

    <div class="g-box">
      <gallery-slider [class.g-debug]="config.debug"
                      [state]="state"
                      [config]="config"
                      [galleryId]="galleryId"
                      (itemClick)="itemClick.emit($event)"
                      (error)="error.emit($event)">

        <gallery-nav *ngIf="config.nav && state.items.length > 1"
                     [state]="state"
                     [config]="config"
                     [galleryId]="galleryId"/>

      </gallery-slider>

      <gallery-bullets *ngIf="config.bullets"
                       [state]="state"
                       [config]="config"
                       [galleryId]="galleryId"/>

      <gallery-counter *ngIf="config.counter"
                       [state]="state"/>

      <div class="g-box-template">
        <ng-container
          *ngTemplateOutlet="config.boxTemplate; context: { state: state, config: config }"></ng-container>
      </div>
    </div>
  `,
      standalone: true,
      imports: [CommonModule, GalleryThumbsComponent, GallerySliderComponent, GalleryNavComponent, GalleryBulletsComponent, GalleryCounterComponent],
      styles: [":host{position:relative;overflow:hidden;display:flex;gap:var(--g-gutter-size);width:100%;height:500px;min-height:100%;max-height:100%;--image-object-fit: unset;--slider-thumb-height: unset;--slider-thumb-width: unset;--thumb-slider-left: unset;--thumb-slider-overflow: unset;--thumb-slider-flex-direction: unset;--g-thumb-width: unset;--g-thumb-height: unset;--g-thumb-cursor: pointer;--slider-scroll-snap-type: unset;--slider-overflow: unset;--slider-flex-direction: unset;--slider-width: unset;--slider-height: unset;--slider-content-width: unset;--slider-content-height: unset;--g-item-width: unset;--g-item-height: unset;--g-item-max-height: var(--slider-height);--bullets-top: unset;--bullets-bottom: unset;--bullets-cursor: pointer;--bullets-opacity: .4;--bullets-hover-opacity: 1;--bullets-active-opacity: 1;--counter-top: unset;--counter-bottom: unset;--counter-border-radius: unset;--nav-space: 8px;--nav-hover-space: 6.4px;--nav-next-right: unset;--nav-next-hover-right: unset;--nav-next-left: unset;--nav-next-hover-left: unset}:host[thumbPosition=top]{flex-direction:column}:host[thumbPosition=left]{flex-direction:row}:host[thumbPosition=right]{flex-direction:row-reverse}:host[thumbPosition=bottom]{flex-direction:column-reverse}:host[autoHeight=true][itemAutoSize=false][orientation=horizontal][thumbPosition=top],:host[autoHeight=true][itemAutoSize=false][orientation=horizontal][thumbPosition=bottom]{height:fit-content;--g-item-height: auto !important;--g-item-max-height: auto}:host[imageSize=contain] gallery-slider,:host[thumbImageSize=contain] gallery-thumbs{--image-object-fit: contain}:host[imageSize=cover] gallery-slider,:host[thumbImageSize=cover] gallery-thumbs{--image-object-fit: cover}:host[thumbPosition=top],:host[thumbPosition=bottom]{--thumb-slider-top: 0;--thumb-slider-overflow: auto hidden;--thumb-slider-flex-direction: row;--g-thumb-height: 100%}:host[thumbPosition=top][thumbAutosize=true],:host[thumbPosition=bottom][thumbAutosize=true]{--g-thumb-width: auto !important}:host[thumbPosition=left],:host[thumbPosition=right]{--thumb-slider-left: 0;--thumb-slider-overflow: hidden auto;--thumb-slider-flex-direction: column;--g-thumb-width: 100%}:host[thumbPosition=left][thumbAutosize=true],:host[thumbPosition=right][thumbAutosize=true]{--g-thumb-height: auto !important}:host[thumbDisbled=true]{--g-thumb-cursor: default}:host[thumbScrollDisabled=true]{--thumb-slider-overflow: hidden !important}:host[orientation=horizontal]{--slider-overflow: auto hidden;--slider-scroll-snap-type: x mandatory;--slider-flex-direction: row;--slider-content-height: 100%}:host[orientation=vertical]{--slider-overflow: hidden auto;--slider-scroll-snap-type: y mandatory;--slider-flex-direction: column;--slider-content-width: 100%}:host[scrollDisabled=true]{--slider-overflow: hidden !important}:host[orientation=horizontal]{--g-item-width: var(--slider-width);--g-item-height: 100%}:host[orientation=horizontal][itemAutoSize=true]{--g-item-width: auto}:host[orientation=vertical]{--g-item-width: 100%;--g-item-height: var(--slider-height)}:host[orientation=vertical][itemAutoSize=true]{--g-item-height: auto}:host[bulletPosition=top]{--bullets-top: 15px}:host[bulletPosition=bottom]{--bullets-bottom: 15px}:host[bulletDisabled=true]{--bullets-cursor: default;--bullets-hover-opacity: var(--bullets-opacity)}:host[counterPosition=top]{--counter-top: 0;--counter-border-radius: 0 0 4px 4px}:host[counterPosition=bottom]{--counter-bottom: 0;--counter-border-radius: 4px 4px 0 0}:host[dir=ltr]{--nav-next-transform: translateY(-50%) perspective(1px);--nav-next-right: var(--nav-space);--nav-next-hover-right: var(--nav-hover-space);--nav-prev-transform: translateY(-50%) perspective(1px) scale(-1, -1);--nav-prev-left: var(--nav-space);--nav-prev-hover-left: var(--nav-hover-space)}:host[dir=rtl]{--nav-next-transform: translateY(-50%) perspective(1px) scale(-1, -1);--nav-next-left: var(--nav-space);--nav-next-hover-left: var(--nav-hover-space);--nav-prev-transform: translateY(-50%) perspective(1px);--nav-prev-right: var(--nav-space);--nav-prev-hover-right: var(--nav-hover-space)}.g-box{overflow:hidden;position:relative;display:flex;flex-direction:column;order:1;flex:1}.g-box-template{position:absolute;z-index:10}\n", ':host[debug=true] ::ng-deep .g-sliding gallery-item.g-item-highlight,:host[debug=true] ::ng-deep .g-resizing gallery-item.g-item-highlight,:host[debug=true] ::ng-deep .g-scrolling gallery-item.g-item-highlight{visibility:hidden}:host[debug=true] ::ng-deep gallery-slider:after,:host[debug=true] ::ng-deep gallery-slider:before{position:absolute;content:"";z-index:12}:host[debug=true] ::ng-deep gallery-slider:before{width:100%;height:0;border-top:1px dashed lime}:host[debug=true] ::ng-deep gallery-slider:after{height:100%;width:0;border-left:1px dashed lime}:host[debug=true] ::ng-deep gallery-slider gallery-item{outline:1px solid darkorange}:host[debug=true] ::ng-deep gallery-slider gallery-item.g-item-highlight:after{content:"";position:absolute;width:100%;height:100%;border:3px solid lime;box-sizing:border-box;z-index:10}:host[debug=true] ::ng-deep .g-sliding .g-slider-sliding{display:block}:host[debug=true] ::ng-deep .g-scrolling .g-slider-scrolling{display:block}:host[debug=true] ::ng-deep .g-resizing .g-slider-resizing{display:block}:host[debug=true] ::ng-deep .g-slider-debug{position:absolute;top:0;left:0;display:flex;gap:5px;padding:10px}:host[debug=true] ::ng-deep .g-slider-debug .g-slider-resizing{background:#f54c28}:host[debug=true] ::ng-deep .g-slider-debug .g-slider-scrolling{background:#ff8524}:host[debug=true] ::ng-deep .g-slider-debug .g-slider-sliding{background:#1f6cb9}:host[debug=true] ::ng-deep .g-slider-debug div,:host[debug=true] ::ng-deep .g-slider-debug:before{display:none;color:#fff;font-family:monospace;z-index:12;padding:2px 6px;border-radius:3px}:host[debug=true][itemAutoSize=false] ::ng-deep .g-slider-debug:before{content:var(--intersection-margin);background:#ecececd6;color:#363636;display:block}:host[debug=true][itemAutoSize=true] ::ng-deep gallery-item:before{position:absolute;margin:10px;content:var(--item-intersection-margin);background:#ecececd6;color:#363636;display:block;width:270px;font-family:monospace;z-index:12;padding:2px 6px;border-radius:3px}\n']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Directionality
  }], {
    galleryId: [{
      type: Input
    }],
    state: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    thumbClick: [{
      type: Output
    }],
    error: [{
      type: Output
    }],
    thumbPosition: [{
      type: HostBinding,
      args: ["attr.thumbPosition"]
    }],
    orientation: [{
      type: HostBinding,
      args: ["attr.orientation"]
    }],
    disableThumb: [{
      type: HostBinding,
      args: ["attr.thumbDisabled"]
    }],
    bulletDisabled: [{
      type: HostBinding,
      args: ["attr.bulletDisabled"]
    }],
    bulletPosition: [{
      type: HostBinding,
      args: ["attr.bulletPosition"]
    }],
    imageSize: [{
      type: HostBinding,
      args: ["attr.imageSize"]
    }],
    thumbImageSize: [{
      type: HostBinding,
      args: ["attr.thumbImageSize"]
    }],
    counterPosition: [{
      type: HostBinding,
      args: ["attr.counterPosition"]
    }],
    scrollDisabled: [{
      type: HostBinding,
      args: ["attr.scrollDisabled"]
    }],
    thumbScrollDisabled: [{
      type: HostBinding,
      args: ["attr.thumbScrollDisabled"]
    }],
    itemAutosize: [{
      type: HostBinding,
      args: ["attr.itemAutosize"]
    }],
    autoHeight: [{
      type: HostBinding,
      args: ["attr.autoHeight"]
    }],
    thumbAutosize: [{
      type: HostBinding,
      args: ["attr.thumbAutosize"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    debug: [{
      type: HostBinding,
      args: ["attr.debug"]
    }]
  });
})();
var _GalleryImageDef = class _GalleryImageDef {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  // Make sure the template checker knows the type of the context with which the
  // template of this directive will be rendered
  static ngTemplateContextGuard(directive, context) {
    return true;
  }
};
_GalleryImageDef.\u0275fac = function GalleryImageDef_Factory(\u0275t) {
  return new (\u0275t || _GalleryImageDef)(\u0275\u0275directiveInject(TemplateRef));
};
_GalleryImageDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _GalleryImageDef,
  selectors: [["", "galleryImageDef", ""]],
  standalone: true
});
var GalleryImageDef = _GalleryImageDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryImageDef, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[galleryImageDef]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _GalleryThumbDef = class _GalleryThumbDef {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  // Make sure the template checker knows the type of the context with which the
  // template of this directive will be rendered
  static ngTemplateContextGuard(directive, context) {
    return true;
  }
};
_GalleryThumbDef.\u0275fac = function GalleryThumbDef_Factory(\u0275t) {
  return new (\u0275t || _GalleryThumbDef)(\u0275\u0275directiveInject(TemplateRef));
};
_GalleryThumbDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _GalleryThumbDef,
  selectors: [["", "galleryThumbDef", ""]],
  standalone: true
});
var GalleryThumbDef = _GalleryThumbDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryThumbDef, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[galleryThumbDef]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _GalleryItemDef = class _GalleryItemDef {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  // Make sure the template checker knows the type of the context with which the
  // template of this directive will be rendered
  static ngTemplateContextGuard(directive, context) {
    return true;
  }
};
_GalleryItemDef.\u0275fac = function GalleryItemDef_Factory(\u0275t) {
  return new (\u0275t || _GalleryItemDef)(\u0275\u0275directiveInject(TemplateRef));
};
_GalleryItemDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _GalleryItemDef,
  selectors: [["", "galleryItemDef", ""]],
  standalone: true
});
var GalleryItemDef = _GalleryItemDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryItemDef, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[galleryItemDef]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _GalleryBoxDef = class _GalleryBoxDef {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  // Make sure the template checker knows the type of the context with which the
  // template of this directive will be rendered
  static ngTemplateContextGuard(directive, context) {
    return true;
  }
};
_GalleryBoxDef.\u0275fac = function GalleryBoxDef_Factory(\u0275t) {
  return new (\u0275t || _GalleryBoxDef)(\u0275\u0275directiveInject(TemplateRef));
};
_GalleryBoxDef.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _GalleryBoxDef,
  selectors: [["", "galleryBoxDef", ""]],
  standalone: true
});
var GalleryBoxDef = _GalleryBoxDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryBoxDef, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[galleryBoxDef]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _AutoplayDirective = class _AutoplayDirective {
  constructor(_gallery, _imgManager) {
    this._gallery = _gallery;
    this._imgManager = _imgManager;
  }
  ngAfterViewInit() {
    this._galleryRef = this._gallery.ref(this.galleryId);
    this._subscribe();
    if (this.config.autoplay) {
      this._galleryRef.play();
    }
  }
  ngOnChanges(changes) {
    if (this._galleryRef && changes.config?.currentValue.autoplay !== changes.config?.previousValue.autoplay) {
      this.config.autoplay ? this._galleryRef.play() : this._galleryRef.stop();
    }
  }
  ngOnDestroy() {
    this._unsubscribe();
  }
  _subscribe() {
    this._unsubscribe();
    this._currentSubscription = this._galleryRef.playingChanged.pipe(switchMap((state2) => {
      if (state2.isPlaying) {
        return this._imgManager.getActiveItem(this._galleryRef.state).pipe(switchMap(() => of({}).pipe(delay(this.config.autoplayInterval), tap(() => {
          if (this._galleryRef.stateSnapshot.hasNext) {
            this._galleryRef.next(this.config.scrollBehavior);
          } else {
            this._galleryRef.set(0, this.config.scrollBehavior);
          }
        }))));
      }
      return EMPTY;
    })).subscribe();
  }
  _unsubscribe() {
    this._currentSubscription?.unsubscribe();
  }
};
_AutoplayDirective.\u0275fac = function AutoplayDirective_Factory(\u0275t) {
  return new (\u0275t || _AutoplayDirective)(\u0275\u0275directiveInject(Gallery), \u0275\u0275directiveInject(ImgManager));
};
_AutoplayDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _AutoplayDirective,
  selectors: [["gallery-core", "autoplay", ""]],
  inputs: {
    config: "config",
    galleryId: "galleryId"
  },
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature]
});
var AutoplayDirective = _AutoplayDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoplayDirective, [{
    type: Directive,
    args: [{
      selector: "gallery-core[autoplay]",
      standalone: true
    }]
  }], () => [{
    type: Gallery
  }, {
    type: ImgManager
  }], {
    config: [{
      type: Input
    }],
    galleryId: [{
      type: Input
    }]
  });
})();
var _GalleryComponent = class _GalleryComponent {
  constructor(_gallery) {
    this._gallery = _gallery;
    this.id = "root";
    this.nav = this._gallery.config.nav;
    this.bullets = this._gallery.config.bullets;
    this.loop = this._gallery.config.loop;
    this.debug = this._gallery.config.debug;
    this.thumbs = this._gallery.config.thumbs;
    this.counter = this._gallery.config.counter;
    this.detachThumbs = this._gallery.config.detachThumbs;
    this.thumbAutosize = this._gallery.config.thumbAutosize;
    this.itemAutosize = this._gallery.config.itemAutosize;
    this.autoHeight = this._gallery.config.autoHeight;
    this.autoplay = this._gallery.config.autoplay;
    this.disableThumbs = this._gallery.config.disableThumbs;
    this.disableBullets = this._gallery.config.disableBullets;
    this.disableScroll = this._gallery.config.disableScroll;
    this.disableThumbScroll = this._gallery.config.disableThumbScroll;
    this.thumbCentralized = this._gallery.config.thumbCentralized;
    this.disableMouseScroll = this._gallery.config.disableMouseScroll;
    this.disableThumbMouseScroll = this._gallery.config.disableThumbMouseScroll;
    this.bulletSize = this._gallery.config.bulletSize;
    this.thumbWidth = this._gallery.config.thumbWidth;
    this.thumbHeight = this._gallery.config.thumbHeight;
    this.autoplayInterval = this._gallery.config.autoplayInterval;
    this.scrollDuration = this._gallery.config.scrollDuration;
    this.resizeDebounceTime = this._gallery.config.resizeDebounceTime;
    this.scrollBehavior = this._gallery.config.scrollBehavior;
    this.scrollEase = this._gallery.config.scrollEase;
    this.imageSize = this._gallery.config.imageSize;
    this.thumbImageSize = this._gallery.config.thumbImageSize;
    this.bulletPosition = this._gallery.config.bulletPosition;
    this.counterPosition = this._gallery.config.counterPosition;
    this.orientation = this._gallery.config.orientation;
    this.loadingAttr = this._gallery.config.loadingAttr;
    this.loadingStrategy = this._gallery.config.loadingStrategy;
    this.thumbPosition = this._gallery.config.thumbPosition;
    this.destroyRef = true;
    this.skipInitConfig = false;
    this.itemClick = new EventEmitter();
    this.thumbClick = new EventEmitter();
    this.playingChange = new EventEmitter();
    this.indexChange = new EventEmitter();
    this.itemsChange = new EventEmitter();
    this.error = new EventEmitter();
  }
  /** @ignore */
  getConfig() {
    return {
      nav: this.nav,
      bullets: this.bullets,
      loop: this.loop,
      debug: this.debug,
      thumbs: this.thumbs,
      counter: this.counter,
      autoplay: this.autoplay,
      bulletSize: this.bulletSize,
      imageSize: this.imageSize,
      thumbImageSize: this.thumbImageSize,
      scrollBehavior: this.scrollBehavior,
      thumbCentralized: this.thumbCentralized,
      thumbWidth: this.thumbWidth,
      thumbHeight: this.thumbHeight,
      scrollEase: this.scrollEase,
      bulletPosition: this.bulletPosition,
      loadingAttr: this.loadingAttr,
      detachThumbs: this.detachThumbs,
      thumbPosition: this.thumbPosition,
      autoplayInterval: this.autoplayInterval,
      counterPosition: this.counterPosition,
      loadingStrategy: this.loadingStrategy,
      scrollDuration: this.scrollDuration,
      orientation: this.orientation,
      resizeDebounceTime: this.resizeDebounceTime,
      disableBullets: this.disableBullets,
      disableThumbs: this.disableThumbs,
      disableScroll: this.disableScroll,
      disableThumbScroll: this.disableThumbScroll,
      disableMouseScroll: this.disableMouseScroll,
      disableThumbMouseScroll: this.disableThumbMouseScroll,
      thumbAutosize: this.thumbAutosize,
      itemAutosize: this.itemAutosize,
      autoHeight: this.autoHeight
    };
  }
  /** @ignore */
  ngOnChanges(changes) {
    if (this.galleryRef) {
      this.galleryRef.setConfig(this.getConfig());
      if (changes.items && changes.items.currentValue !== changes.items.previousValue) {
        this.load(this.items);
      }
    }
  }
  /** @ignore */
  ngOnInit() {
    if (this.skipInitConfig) {
      this.galleryRef = this._gallery.ref(this.id);
    } else {
      this.galleryRef = this._gallery.ref(this.id, this.getConfig());
    }
    this.load(this.items);
    if (this.indexChange.observed) {
      this._indexChange$ = this.galleryRef.indexChanged.subscribe((state2) => this.indexChange.emit(state2));
    }
    if (this.itemsChange.observed) {
      this._itemChange$ = this.galleryRef.itemsChanged.subscribe((state2) => this.itemsChange.emit(state2));
    }
    if (this.playingChange.observed) {
      this._playingChange$ = this.galleryRef.playingChanged.subscribe((state2) => this.playingChange.emit(state2));
    }
  }
  /** @ignore */
  ngAfterContentInit() {
    const templateConfig = {};
    if (this._galleryItemDef) {
      templateConfig.itemTemplate = this._galleryItemDef.templateRef;
    }
    if (this._galleryImageDef) {
      templateConfig.imageTemplate = this._galleryImageDef.templateRef;
    }
    if (this._galleryThumbDef) {
      templateConfig.thumbTemplate = this._galleryThumbDef.templateRef;
    }
    if (this._galleryBoxDef) {
      templateConfig.boxTemplate = this._galleryBoxDef.templateRef;
    }
    if (Object.keys(templateConfig).length) {
      this.galleryRef.setConfig(templateConfig);
    }
  }
  /** @ignore */
  ngOnDestroy() {
    this._itemClick$?.unsubscribe();
    this._thumbClick$?.unsubscribe();
    this._itemChange$?.unsubscribe();
    this._indexChange$?.unsubscribe();
    this._playingChange$?.unsubscribe();
    if (this.destroyRef) {
      this.galleryRef?.destroy();
    }
  }
  /** @ignore */
  onItemClick(i) {
    this.itemClick.emit(i);
    this.galleryRef.itemClick.next(i);
  }
  /** @ignore */
  onThumbClick(i) {
    this.galleryRef.set(i);
    this.thumbClick.emit(i);
    this.galleryRef.thumbClick.next(i);
  }
  /** @ignore */
  onError(err) {
    this.error.emit(err);
    this.galleryRef.error.next(err);
  }
  /**
   * Load items and reset the state
   */
  load(items) {
    this.galleryRef.load(items);
  }
  /**
   * Add gallery item, it can be any item, suitable to add item with a custom template
   */
  add(item, active) {
    this.galleryRef.add(item, active);
  }
  /**
   * Add image item
   */
  addImage(data, active) {
    this.galleryRef.addImage(data, active);
  }
  /**
   * Add video item
   */
  addVideo(data, active) {
    this.galleryRef.addVideo(data, active);
  }
  /**
   * Add iframe item
   */
  addIframe(data, active) {
    this.galleryRef.addIframe(data, active);
  }
  /**
   * Add Youtube item
   */
  addYoutube(data, active) {
    this.galleryRef.addYoutube(data, active);
  }
  /**
   * Add Vimeo item
   */
  addVimeo(data, active) {
    this.galleryRef.addVimeo(data, active);
  }
  /**
   * Remove gallery item by index
   */
  remove(i) {
    this.galleryRef.remove(i);
  }
  /**
   * Go to next item
   */
  next(behavior, loop) {
    this.galleryRef.next(behavior, loop);
  }
  /**
   * Go to prev item
   */
  prev(behavior, loop) {
    this.galleryRef.prev(behavior, loop);
  }
  /**
   * Set active item
   */
  set(i, behavior) {
    this.galleryRef.set(i, behavior);
  }
  /**
   * Reset to initial state
   */
  reset() {
    this.galleryRef.reset();
  }
  /**
   * Start the player
   */
  play(interval) {
    this.galleryRef.play(interval);
  }
  /**
   * Stop the player
   */
  stop() {
    this.galleryRef.stop();
  }
};
_GalleryComponent.\u0275fac = function GalleryComponent_Factory(\u0275t) {
  return new (\u0275t || _GalleryComponent)(\u0275\u0275directiveInject(Gallery));
};
_GalleryComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _GalleryComponent,
  selectors: [["gallery"]],
  contentQueries: function GalleryComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, GalleryItemDef, 5);
      \u0275\u0275contentQuery(dirIndex, GalleryImageDef, 5);
      \u0275\u0275contentQuery(dirIndex, GalleryThumbDef, 5);
      \u0275\u0275contentQuery(dirIndex, GalleryBoxDef, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._galleryItemDef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._galleryImageDef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._galleryThumbDef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._galleryBoxDef = _t.first);
    }
  },
  inputs: {
    id: "id",
    items: "items",
    nav: [2, "nav", "nav", booleanAttribute],
    bullets: [2, "bullets", "bullets", booleanAttribute],
    loop: [2, "loop", "loop", booleanAttribute],
    debug: [2, "debug", "debug", booleanAttribute],
    thumbs: [2, "thumbs", "thumbs", booleanAttribute],
    counter: [2, "counter", "counter", booleanAttribute],
    detachThumbs: [2, "detachThumbs", "detachThumbs", booleanAttribute],
    thumbAutosize: [2, "thumbAutosize", "thumbAutosize", booleanAttribute],
    itemAutosize: [2, "itemAutosize", "itemAutosize", booleanAttribute],
    autoHeight: [2, "autoHeight", "autoHeight", booleanAttribute],
    autoplay: [2, "autoplay", "autoplay", booleanAttribute],
    disableThumbs: [2, "disableThumbs", "disableThumbs", booleanAttribute],
    disableBullets: [2, "disableBullets", "disableBullets", booleanAttribute],
    disableScroll: [2, "disableScroll", "disableScroll", booleanAttribute],
    disableThumbScroll: [2, "disableThumbScroll", "disableThumbScroll", booleanAttribute],
    thumbCentralized: [2, "thumbCentralized", "thumbCentralized", booleanAttribute],
    disableMouseScroll: [2, "disableMouseScroll", "disableMouseScroll", booleanAttribute],
    disableThumbMouseScroll: [2, "disableThumbMouseScroll", "disableThumbMouseScroll", booleanAttribute],
    bulletSize: [2, "bulletSize", "bulletSize", numberAttribute],
    thumbWidth: [2, "thumbWidth", "thumbWidth", numberAttribute],
    thumbHeight: [2, "thumbHeight", "thumbHeight", numberAttribute],
    autoplayInterval: [2, "autoplayInterval", "autoplayInterval", numberAttribute],
    scrollDuration: [2, "scrollDuration", "scrollDuration", numberAttribute],
    resizeDebounceTime: [2, "resizeDebounceTime", "resizeDebounceTime", numberAttribute],
    scrollBehavior: "scrollBehavior",
    scrollEase: "scrollEase",
    imageSize: "imageSize",
    thumbImageSize: "thumbImageSize",
    bulletPosition: "bulletPosition",
    counterPosition: "counterPosition",
    orientation: "orientation",
    loadingAttr: "loadingAttr",
    loadingStrategy: "loadingStrategy",
    thumbPosition: "thumbPosition",
    destroyRef: "destroyRef",
    skipInitConfig: "skipInitConfig"
  },
  outputs: {
    itemClick: "itemClick",
    thumbClick: "thumbClick",
    playingChange: "playingChange",
    indexChange: "indexChange",
    itemsChange: "itemsChange",
    error: "error"
  },
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([ImgManager]), \u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  decls: 3,
  vars: 7,
  consts: [["autoplay", "", 3, "itemClick", "thumbClick", "error", "galleryId", "state", "config"]],
  template: function GalleryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "gallery-core", 0);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275pipe(2, "async");
      \u0275\u0275listener("itemClick", function GalleryComponent_Template_gallery_core_itemClick_0_listener($event) {
        return ctx.onItemClick($event);
      })("thumbClick", function GalleryComponent_Template_gallery_core_thumbClick_0_listener($event) {
        return ctx.onThumbClick($event);
      })("error", function GalleryComponent_Template_gallery_core_error_0_listener($event) {
        return ctx.onError($event);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("galleryId", ctx.id)("state", \u0275\u0275pipeBind1(1, 3, ctx.galleryRef.state))("config", \u0275\u0275pipeBind1(2, 5, ctx.galleryRef.config));
    }
  },
  dependencies: [CommonModule, AsyncPipe, GalleryCoreComponent, AutoplayDirective],
  styles: ["[_nghost-%COMP%]{position:relative;overflow:hidden;z-index:1;display:flex;justify-content:center;align-items:center;background-color:#000;--g-height-transition: height 468ms cubic-bezier(.42, 0, .58, 1);--g-nav-drop-shadow: drop-shadow(0 0 2px rgba(0, 0, 0, .6));--g-box-shadow: 0 0 3px rgba(0, 0, 0, .6);--g-font-color: #000;--g-overlay-color: #fff;--g-gutter-size: 1px}[gallerize][_nghost-%COMP%]{--g-item-cursor: pointer}"],
  changeDetection: 0
});
var GalleryComponent = _GalleryComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryComponent, [{
    type: Component,
    args: [{
      selector: "gallery",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <gallery-core autoplay
                  [galleryId]="id"
                  [state]="galleryRef.state | async"
                  [config]="galleryRef.config | async"
                  (itemClick)="onItemClick($event)"
                  (thumbClick)="onThumbClick($event)"
                  (error)="onError($event)"/>
  `,
      standalone: true,
      imports: [CommonModule, GalleryCoreComponent, AutoplayDirective],
      providers: [ImgManager],
      styles: [":host{position:relative;overflow:hidden;z-index:1;display:flex;justify-content:center;align-items:center;background-color:#000;--g-height-transition: height 468ms cubic-bezier(.42, 0, .58, 1);--g-nav-drop-shadow: drop-shadow(0 0 2px rgba(0, 0, 0, .6));--g-box-shadow: 0 0 3px rgba(0, 0, 0, .6);--g-font-color: #000;--g-overlay-color: #fff;--g-gutter-size: 1px}:host[gallerize]{--g-item-cursor: pointer}\n"]
    }]
  }], () => [{
    type: Gallery
  }], {
    id: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    nav: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    bullets: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loop: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    debug: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    thumbs: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    counter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    detachThumbs: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    thumbAutosize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    itemAutosize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoHeight: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoplay: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableThumbs: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableBullets: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableThumbScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    thumbCentralized: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableMouseScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableThumbMouseScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    bulletSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    thumbWidth: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    thumbHeight: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    autoplayInterval: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    scrollDuration: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    resizeDebounceTime: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    scrollBehavior: [{
      type: Input
    }],
    scrollEase: [{
      type: Input
    }],
    imageSize: [{
      type: Input
    }],
    thumbImageSize: [{
      type: Input
    }],
    bulletPosition: [{
      type: Input
    }],
    counterPosition: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    loadingAttr: [{
      type: Input
    }],
    loadingStrategy: [{
      type: Input
    }],
    thumbPosition: [{
      type: Input
    }],
    destroyRef: [{
      type: Input
    }],
    skipInitConfig: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    thumbClick: [{
      type: Output
    }],
    playingChange: [{
      type: Output
    }],
    indexChange: [{
      type: Output
    }],
    itemsChange: [{
      type: Output
    }],
    error: [{
      type: Output
    }],
    _galleryItemDef: [{
      type: ContentChild,
      args: [GalleryItemDef]
    }],
    _galleryImageDef: [{
      type: ContentChild,
      args: [GalleryImageDef]
    }],
    _galleryThumbDef: [{
      type: ContentChild,
      args: [GalleryThumbDef]
    }],
    _galleryBoxDef: [{
      type: ContentChild,
      args: [GalleryBoxDef]
    }]
  });
})();
var _GalleryModule = class _GalleryModule {
};
_GalleryModule.\u0275fac = function GalleryModule_Factory(\u0275t) {
  return new (\u0275t || _GalleryModule)();
};
_GalleryModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _GalleryModule
});
_GalleryModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [GalleryComponent]
});
var GalleryModule = _GalleryModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryModule, [{
    type: NgModule,
    args: [{
      imports: [GalleryComponent, GalleryItemDef, GalleryImageDef, GalleryThumbDef, GalleryBoxDef],
      exports: [GalleryComponent, GalleryItemDef, GalleryImageDef, GalleryThumbDef, GalleryBoxDef]
    }]
  }], null, null);
})();

// node_modules/ng-gallery/fesm2022/ng-gallery-lightbox.mjs
var _c02 = (a0, a1) => ({
  startAnimationTime: a0,
  exitAnimationTime: a1
});
var _c12 = (a0, a1) => ({
  value: a0,
  params: a1
});
var LIGHTBOX_CONFIG = new InjectionToken("LIGHTBOX_CONFIG");
var lightboxAnimation = trigger("lightbox", [state("void, exit", style({
  opacity: 0,
  transform: "scale(0.7)"
})), state("enter", style({
  transform: "none"
})), transition("* => enter", animate("{{startAnimationTime}}ms cubic-bezier(0, 0, 0.2, 1)", style({
  transform: "none",
  opacity: 1
}))), transition("* => void, * => exit", animate("{{exitAnimationTime}}ms cubic-bezier(0.4, 0.0, 0.2, 1)", style({
  opacity: 0
})))]);
var _LightboxComponent = class _LightboxComponent {
  constructor(_document, _focusTrapFactory, _elementRef) {
    this._document = _document;
    this._focusTrapFactory = _focusTrapFactory;
    this._elementRef = _elementRef;
    this.state = "enter";
    this._savePreviouslyFocusedElement();
  }
  /** Callback, invoked whenever an animation on the host completes. */
  onAnimationDone(event) {
    if (event.toState === "enter") {
      this._trapFocus();
    } else {
      this.overlayRef.dispose();
      this._restoreFocus();
    }
  }
  /** Moves the focus inside the focus trap. */
  _trapFocus() {
    if (!this._focusTrap) {
      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
    }
    this._focusTrap.focusInitialElementWhenReady();
  }
  /** Saves a reference to the element that was focused before the lightbox was opened. */
  _savePreviouslyFocusedElement() {
    if (this._document) {
      this._elementFocusedBeforeDialogWasOpened = this._document.activeElement;
      if (this._elementRef.nativeElement.focus) {
        Promise.resolve().then(() => this._elementRef.nativeElement.focus());
      }
    }
  }
  /** Restores focus to the element that was focused before the lightbox opened. */
  _restoreFocus() {
    const toFocus = this._elementFocusedBeforeDialogWasOpened;
    if (toFocus && typeof toFocus.focus === "function") {
      toFocus.focus();
    }
    if (this._focusTrap) {
      this._focusTrap.destroy();
    }
  }
};
_LightboxComponent.\u0275fac = function LightboxComponent_Factory(\u0275t) {
  return new (\u0275t || _LightboxComponent)(\u0275\u0275directiveInject(DOCUMENT, 8), \u0275\u0275directiveInject(ConfigurableFocusTrapFactory), \u0275\u0275directiveInject(ElementRef));
};
_LightboxComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _LightboxComponent,
  selectors: [["lightbox"]],
  hostAttrs: ["tabindex", "-1", "aria-modal", "true"],
  hostVars: 12,
  hostBindings: function LightboxComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275syntheticHostListener("@lightbox.done", function LightboxComponent_animation_lightbox_done_HostBindingHandler($event) {
        return ctx.onAnimationDone($event);
      });
    }
    if (rf & 2) {
      \u0275\u0275syntheticHostProperty("@lightbox", \u0275\u0275pureFunction2(9, _c12, ctx.state, \u0275\u0275pureFunction2(6, _c02, ctx.startAnimationTime, ctx.exitAnimationTime)));
      \u0275\u0275attribute("id", "lightbox-" + ctx.id)("role", ctx.role)("aria-labelledby", ctx.ariaLabel ? null : ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("aria-describedby", ctx.ariaDescribedBy || null);
    }
  },
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 2,
  vars: 4,
  consts: [["aria-label", "Close", 1, "g-btn-close", 3, "click", "innerHTML"], [3, "id", "destroyRef", "skipInitConfig"]],
  template: function LightboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "i", 0);
      \u0275\u0275listener("click", function LightboxComponent_Template_i_click_0_listener() {
        return ctx.overlayRef.detach();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(1, "gallery", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("innerHTML", ctx.closeIcon, \u0275\u0275sanitizeHtml);
      \u0275\u0275advance();
      \u0275\u0275property("id", ctx.id)("destroyRef", false)("skipInitConfig", true);
    }
  },
  dependencies: [GalleryComponent],
  styles: ["lightbox{position:relative;display:block;width:1100px;height:800px;max-width:94vw;max-height:90vh;border-radius:4px;overflow:hidden;box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f}  lightbox:focus{outline:none}  lightbox gallery{height:100%;width:100%;overflow:hidden;margin:0}  lightbox gallery gallery-core{height:100%!important}  .g-backdrop{background-color:#00000052}  .fullscreen{width:100%}  .fullscreen   lightbox{max-width:unset;max-height:unset;position:fixed;inset:0;height:100%;width:100%;border-radius:0}  .g-overlay{margin:auto}@media only screen and (max-width: 480px){  .g-overlay{width:100%}  .g-overlay   lightbox{max-width:unset;max-height:unset;position:fixed;inset:0;height:100%;width:100%;border-radius:0}}  .g-btn-close{position:absolute;right:.9em;top:.9em;z-index:60;cursor:pointer;width:20px;height:20px}@media only screen and (max-width: 480px){  .g-btn-close{right:.7em;top:.7em}}  .g-btn-close svg{width:100%;height:100%;opacity:.6;transition:opacity linear .15s;filter:drop-shadow(0px 0px 2px rgba(0,0,0,.8))}  .g-btn-close svg:hover{opacity:1}"],
  data: {
    animation: [lightboxAnimation]
  },
  changeDetection: 0
});
var LightboxComponent = _LightboxComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LightboxComponent, [{
    type: Component,
    args: [{
      selector: "lightbox",
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [lightboxAnimation],
      template: `
    <i class="g-btn-close" aria-label="Close" [innerHTML]="closeIcon" (click)="overlayRef.detach()"></i>
    <gallery [id]="id" [destroyRef]="false" [skipInitConfig]="true"></gallery>
  `,
      host: {
        "tabindex": "-1",
        "aria-modal": "true",
        "[attr.id]": '"lightbox-" + id',
        "[attr.role]": "role",
        "[attr.aria-labelledby]": "ariaLabel ? null : ariaLabelledBy",
        "[attr.aria-label]": "ariaLabel",
        "[attr.aria-describedby]": "ariaDescribedBy || null",
        "[@lightbox]": "{ value: state, params: { startAnimationTime: startAnimationTime, exitAnimationTime: exitAnimationTime } }",
        "(@lightbox.done)": "onAnimationDone($event)"
      },
      standalone: true,
      imports: [GalleryComponent],
      styles: ["::ng-deep lightbox{position:relative;display:block;width:1100px;height:800px;max-width:94vw;max-height:90vh;border-radius:4px;overflow:hidden;box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f}::ng-deep lightbox:focus{outline:none}::ng-deep lightbox gallery{height:100%;width:100%;overflow:hidden;margin:0}::ng-deep lightbox gallery gallery-core{height:100%!important}::ng-deep .g-backdrop{background-color:#00000052}::ng-deep .fullscreen{width:100%}::ng-deep .fullscreen ::ng-deep lightbox{max-width:unset;max-height:unset;position:fixed;inset:0;height:100%;width:100%;border-radius:0}::ng-deep .g-overlay{margin:auto}@media only screen and (max-width: 480px){::ng-deep .g-overlay{width:100%}::ng-deep .g-overlay ::ng-deep lightbox{max-width:unset;max-height:unset;position:fixed;inset:0;height:100%;width:100%;border-radius:0}}::ng-deep .g-btn-close{position:absolute;right:.9em;top:.9em;z-index:60;cursor:pointer;width:20px;height:20px}@media only screen and (max-width: 480px){::ng-deep .g-btn-close{right:.7em;top:.7em}}::ng-deep .g-btn-close svg{width:100%;height:100%;opacity:.6;transition:opacity linear .15s;filter:drop-shadow(0px 0px 2px rgba(0,0,0,.8))}::ng-deep .g-btn-close svg:hover{opacity:1}\n"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: ConfigurableFocusTrapFactory
  }, {
    type: ElementRef
  }], null);
})();
var defaultConfig2 = {
  backdropClass: "g-backdrop",
  panelClass: "g-overlay",
  hasBackdrop: true,
  keyboardShortcuts: true,
  role: "lightbox",
  startAnimationTime: 150,
  exitAnimationTime: 75,
  closeIcon: `<?xml version="1.0" encoding="UTF-8"?>
<svg width="512px" height="512px" enable-background="new 0 0 47.971 47.971" version="1.1" viewBox="0 0 47.971 47.971" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
	<path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" fill="#fff"/>
</svg>
`
};
var _Lightbox = class _Lightbox {
  constructor(config, _gallery, _overlay, _sanitizer) {
    this._gallery = _gallery;
    this._overlay = _overlay;
    this._sanitizer = _sanitizer;
    this.opened = new Subject();
    this.closed = new Subject();
    this._config = config ? __spreadValues(__spreadValues({}, defaultConfig2), config) : defaultConfig2;
  }
  /**
   * Set Lightbox Config
   * @param config - LightboxConfig
   */
  setConfig(config) {
    this._config = __spreadValues(__spreadValues({}, this._config), config);
  }
  /**
   * Open Lightbox Overlay
   * @param i - Current Index
   * @param id - Gallery ID
   * @param config - Lightbox Config
   */
  open(i = 0, id = "lightbox", config) {
    const _config = config ? __spreadValues(__spreadValues({}, this._config), config) : this._config;
    const overlayConfig = {
      backdropClass: _config.backdropClass,
      panelClass: _config.panelClass,
      hasBackdrop: _config.hasBackdrop,
      positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
      scrollStrategy: this._overlay.scrollStrategies.block(),
      disposeOnNavigation: true
    };
    const galleryRef = this._gallery.ref(id);
    galleryRef.set(i);
    this._overlayRef = this._overlay.create(overlayConfig);
    this._overlayRef.attachments().subscribe(() => this.opened.next(id));
    this._overlayRef.detachments().subscribe(() => this.closed.next(id));
    const galleryPortal = new ComponentPortal(LightboxComponent);
    const lightboxRef = this._overlayRef.attach(galleryPortal);
    lightboxRef.instance.id = id;
    lightboxRef.instance.overlayRef = this._overlayRef;
    lightboxRef.instance.closeIcon = this._sanitizer.bypassSecurityTrustHtml(this._config.closeIcon);
    lightboxRef.instance.role = this._config.role;
    lightboxRef.instance.ariaLabel = this._config.ariaLabel;
    lightboxRef.instance.ariaLabelledBy = this._config.ariaLabelledBy;
    lightboxRef.instance.ariaDescribedBy = this._config.ariaDescribedBy;
    lightboxRef.instance.startAnimationTime = this._config.startAnimationTime;
    lightboxRef.instance.exitAnimationTime = this._config.exitAnimationTime;
    if (_config.hasBackdrop) {
      this._overlayRef.backdropClick().subscribe(() => this.close());
    }
    if (_config.keyboardShortcuts) {
      this._overlayRef.keydownEvents().subscribe((event) => {
        switch (event.keyCode) {
          case LEFT_ARROW:
            galleryRef.prev();
            break;
          case RIGHT_ARROW:
            galleryRef.next();
            break;
          case ESCAPE:
            this.close();
        }
      });
    }
  }
  /**
   * Close Lightbox Overlay
   */
  close() {
    if (this._overlayRef.hasAttached()) {
      this._overlayRef.detach();
    }
  }
};
_Lightbox.\u0275fac = function Lightbox_Factory(\u0275t) {
  return new (\u0275t || _Lightbox)(\u0275\u0275inject(LIGHTBOX_CONFIG, 8), \u0275\u0275inject(Gallery), \u0275\u0275inject(Overlay), \u0275\u0275inject(DomSanitizer));
};
_Lightbox.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _Lightbox,
  factory: _Lightbox.\u0275fac,
  providedIn: "root"
});
var Lightbox = _Lightbox;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Lightbox, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [LIGHTBOX_CONFIG]
    }]
  }, {
    type: Gallery
  }, {
    type: Overlay
  }, {
    type: DomSanitizer
  }], null);
})();
var _GallerizeDirective = class _GallerizeDirective {
  constructor(_zone, _el, _gallery, _lightbox, _document, _galleryCmp) {
    this._zone = _zone;
    this._el = _el;
    this._gallery = _gallery;
    this._lightbox = _lightbox;
    this._document = _document;
    this._galleryCmp = _galleryCmp;
    this._galleryId = "lightbox";
    this.selector = "img";
    this._mode = _galleryCmp ? "gallery" : "detector";
  }
  ngOnInit() {
    this._zone.runOutsideAngular(() => {
      this._galleryId = this.gallerize || this._galleryId;
      const ref = this._gallery.ref(this._galleryId);
      switch (this._mode) {
        case "detector":
          this.detectorMode(ref);
          break;
        case "gallery":
          this.galleryMode(ref);
      }
    });
  }
  ngOnDestroy() {
    switch (this._mode) {
      case "detector":
        this._detector$.complete();
        this._observer$.disconnect();
        break;
      case "gallery":
        this._itemClick$.unsubscribe();
        this._itemChange$.unsubscribe();
    }
  }
  /** Gallery mode: means `gallerize` directive is used on `<gallery>` component
   * Adds a click event to each gallery item so it opens in lightbox */
  galleryMode(galleryRef) {
    this._itemClick$ = this._galleryCmp.galleryRef.itemClick.subscribe((i) => this._lightbox.open(i, this._galleryId));
    this._itemChange$ = this._galleryCmp.galleryRef.itemsChanged.subscribe((state2) => galleryRef.load(state2.items));
  }
  /** Detector mode: means `gallerize` directive is used on a normal HTMLElement
   *  Detects images and adds a click event to each image, so it opens in the lightbox */
  detectorMode(galleryRef) {
    this._detector$ = new Subject();
    this._detector$.pipe(debounceTime(300), switchMap(() => {
      const imageElements = this._el.nativeElement.querySelectorAll(this.selector);
      if (imageElements && imageElements.length) {
        const images = [];
        return from(imageElements).pipe(map((el, i) => {
          el.style.cursor = "pointer";
          el.addEventListener("click", () => {
            this._zone.run(() => this._lightbox.open(i, this._galleryId));
          });
          if (el instanceof HTMLImageElement) {
            return {
              src: el.getAttribute("imageSrc") || el.src,
              thumb: el.getAttribute("thumbSrc") || el.src
            };
          } else {
            const elStyle = this._document.defaultView.getComputedStyle(el, null);
            const background = elStyle.backgroundImage.slice(4, -1).replace(/"/g, "");
            return {
              src: el.getAttribute("imageSrc") || background,
              thumb: el.getAttribute("thumbSrc") || background
            };
          }
        }), tap((data) => images.push(new ImageItem(data))), finalize(() => galleryRef.load(images)));
      } else {
        return EMPTY;
      }
    })).subscribe();
    this._observer$ = new MutationObserver(() => this._detector$.next());
    this._observer$.observe(this._el.nativeElement, {
      childList: true,
      subtree: true
    });
  }
};
_GallerizeDirective.\u0275fac = function GallerizeDirective_Factory(\u0275t) {
  return new (\u0275t || _GallerizeDirective)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Gallery), \u0275\u0275directiveInject(Lightbox), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(GalleryComponent, 11));
};
_GallerizeDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _GallerizeDirective,
  selectors: [["", "gallerize", ""]],
  inputs: {
    gallerize: "gallerize",
    selector: "selector"
  },
  standalone: true
});
var GallerizeDirective = _GallerizeDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GallerizeDirective, [{
    type: Directive,
    args: [{
      selector: "[gallerize]",
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: Gallery
  }, {
    type: Lightbox
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: GalleryComponent,
    decorators: [{
      type: Host
    }, {
      type: Self
    }, {
      type: Optional
    }]
  }], {
    gallerize: [{
      type: Input
    }],
    selector: [{
      type: Input
    }]
  });
})();
var _LightboxDirective = class _LightboxDirective {
  constructor(_lightbox, _el, _renderer) {
    this._lightbox = _lightbox;
    this._el = _el;
    this._renderer = _renderer;
    this.clickEvent = Subscription.EMPTY;
    this.index = 0;
    this.id = "root";
  }
  ngOnInit() {
    this._renderer.setStyle(this._el.nativeElement, "cursor", "pointer");
    this.clickEvent = fromEvent(this._el.nativeElement, "click").pipe(tap(() => this._lightbox.open(this.index, this.id))).subscribe();
  }
  ngOnDestroy() {
    this.clickEvent.unsubscribe();
  }
};
_LightboxDirective.\u0275fac = function LightboxDirective_Factory(\u0275t) {
  return new (\u0275t || _LightboxDirective)(\u0275\u0275directiveInject(Lightbox), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
};
_LightboxDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _LightboxDirective,
  selectors: [["", "lightbox", ""]],
  inputs: {
    index: [0, "lightbox", "index"],
    id: [0, "gallery", "id"]
  },
  standalone: true
});
var LightboxDirective = _LightboxDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LightboxDirective, [{
    type: Directive,
    args: [{
      selector: "[lightbox]",
      standalone: true
    }]
  }], () => [{
    type: Lightbox
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    index: [{
      type: Input,
      args: ["lightbox"]
    }],
    id: [{
      type: Input,
      args: ["gallery"]
    }]
  });
})();
var _LightboxModule = class _LightboxModule {
};
_LightboxModule.\u0275fac = function LightboxModule_Factory(\u0275t) {
  return new (\u0275t || _LightboxModule)();
};
_LightboxModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _LightboxModule
});
_LightboxModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [GalleryModule, GalleryModule]
});
var LightboxModule = _LightboxModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LightboxModule, [{
    type: NgModule,
    args: [{
      imports: [GalleryModule, LightboxDirective, GallerizeDirective],
      exports: [GalleryModule, LightboxDirective, GallerizeDirective]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/icon-registry-75ed3f35.mjs
var policy;
function getPolicy() {
  if (policy === void 0) {
    policy = null;
    if (typeof window !== "undefined") {
      const ttWindow = window;
      if (ttWindow.trustedTypes !== void 0) {
        policy = ttWindow.trustedTypes.createPolicy("angular#components", {
          createHTML: (s) => s
        });
      }
    }
  }
  return policy;
}
function trustedHTMLFromString(html) {
  return getPolicy()?.createHTML(html) || html;
}
function getMatIconNameNotFoundError(iconName) {
  return Error(`Unable to find icon with the name "${iconName}"`);
}
function getMatIconNoHttpProviderError() {
  return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.");
}
function getMatIconFailedToSanitizeUrlError(url) {
  return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${url}".`);
}
function getMatIconFailedToSanitizeLiteralError(literal) {
  return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${literal}".`);
}
var SvgIconConfig = class {
  url;
  svgText;
  options;
  svgElement;
  constructor(url, svgText, options) {
    this.url = url;
    this.svgText = svgText;
    this.options = options;
  }
};
var MatIconRegistry = class _MatIconRegistry {
  _httpClient;
  _sanitizer;
  _errorHandler;
  _document;
  /**
   * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
   */
  _svgIconConfigs = /* @__PURE__ */ new Map();
  /**
   * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
   * Multiple icon sets can be registered under the same namespace.
   */
  _iconSetConfigs = /* @__PURE__ */ new Map();
  /** Cache for icons loaded by direct URLs. */
  _cachedIconsByUrl = /* @__PURE__ */ new Map();
  /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */
  _inProgressUrlFetches = /* @__PURE__ */ new Map();
  /** Map from font identifiers to their CSS class names. Used for icon fonts. */
  _fontCssClassesByAlias = /* @__PURE__ */ new Map();
  /** Registered icon resolver functions. */
  _resolvers = [];
  /**
   * The CSS classes to apply when an `<mat-icon>` component has no icon name, url, or font
   * specified. The default 'material-icons' value assumes that the material icon font has been
   * loaded as described at https://google.github.io/material-design-icons/#icon-font-for-the-web
   */
  _defaultFontSetClass = ["material-icons", "mat-ligature-font"];
  constructor(_httpClient, _sanitizer, document, _errorHandler) {
    this._httpClient = _httpClient;
    this._sanitizer = _sanitizer;
    this._errorHandler = _errorHandler;
    this._document = document;
  }
  /**
   * Registers an icon by URL in the default namespace.
   * @param iconName Name under which the icon should be registered.
   * @param url
   */
  addSvgIcon(iconName, url, options) {
    return this.addSvgIconInNamespace("", iconName, url, options);
  }
  /**
   * Registers an icon using an HTML string in the default namespace.
   * @param iconName Name under which the icon should be registered.
   * @param literal SVG source of the icon.
   */
  addSvgIconLiteral(iconName, literal, options) {
    return this.addSvgIconLiteralInNamespace("", iconName, literal, options);
  }
  /**
   * Registers an icon by URL in the specified namespace.
   * @param namespace Namespace in which the icon should be registered.
   * @param iconName Name under which the icon should be registered.
   * @param url
   */
  addSvgIconInNamespace(namespace, iconName, url, options) {
    return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, null, options));
  }
  /**
   * Registers an icon resolver function with the registry. The function will be invoked with the
   * name and namespace of an icon when the registry tries to resolve the URL from which to fetch
   * the icon. The resolver is expected to return a `SafeResourceUrl` that points to the icon,
   * an object with the icon URL and icon options, or `null` if the icon is not supported. Resolvers
   * will be invoked in the order in which they have been registered.
   * @param resolver Resolver function to be registered.
   */
  addSvgIconResolver(resolver) {
    this._resolvers.push(resolver);
    return this;
  }
  /**
   * Registers an icon using an HTML string in the specified namespace.
   * @param namespace Namespace in which the icon should be registered.
   * @param iconName Name under which the icon should be registered.
   * @param literal SVG source of the icon.
   */
  addSvgIconLiteralInNamespace(namespace, iconName, literal, options) {
    const cleanLiteral = this._sanitizer.sanitize(SecurityContext.HTML, literal);
    if (!cleanLiteral) {
      throw getMatIconFailedToSanitizeLiteralError(literal);
    }
    const trustedLiteral = trustedHTMLFromString(cleanLiteral);
    return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig("", trustedLiteral, options));
  }
  /**
   * Registers an icon set by URL in the default namespace.
   * @param url
   */
  addSvgIconSet(url, options) {
    return this.addSvgIconSetInNamespace("", url, options);
  }
  /**
   * Registers an icon set using an HTML string in the default namespace.
   * @param literal SVG source of the icon set.
   */
  addSvgIconSetLiteral(literal, options) {
    return this.addSvgIconSetLiteralInNamespace("", literal, options);
  }
  /**
   * Registers an icon set by URL in the specified namespace.
   * @param namespace Namespace in which to register the icon set.
   * @param url
   */
  addSvgIconSetInNamespace(namespace, url, options) {
    return this._addSvgIconSetConfig(namespace, new SvgIconConfig(url, null, options));
  }
  /**
   * Registers an icon set using an HTML string in the specified namespace.
   * @param namespace Namespace in which to register the icon set.
   * @param literal SVG source of the icon set.
   */
  addSvgIconSetLiteralInNamespace(namespace, literal, options) {
    const cleanLiteral = this._sanitizer.sanitize(SecurityContext.HTML, literal);
    if (!cleanLiteral) {
      throw getMatIconFailedToSanitizeLiteralError(literal);
    }
    const trustedLiteral = trustedHTMLFromString(cleanLiteral);
    return this._addSvgIconSetConfig(namespace, new SvgIconConfig("", trustedLiteral, options));
  }
  /**
   * Defines an alias for CSS class names to be used for icon fonts. Creating an matIcon
   * component with the alias as the fontSet input will cause the class name to be applied
   * to the `<mat-icon>` element.
   *
   * If the registered font is a ligature font, then don't forget to also include the special
   * class `mat-ligature-font` to allow the usage via attribute. So register like this:
   *
   * ```ts
   * iconRegistry.registerFontClassAlias('f1', 'font1 mat-ligature-font');
   * ```
   *
   * And use like this:
   *
   * ```html
   * <mat-icon fontSet="f1" fontIcon="home"></mat-icon>
   * ```
   *
   * @param alias Alias for the font.
   * @param classNames Class names override to be used instead of the alias.
   */
  registerFontClassAlias(alias, classNames = alias) {
    this._fontCssClassesByAlias.set(alias, classNames);
    return this;
  }
  /**
   * Returns the CSS class name associated with the alias by a previous call to
   * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
   */
  classNameForFontAlias(alias) {
    return this._fontCssClassesByAlias.get(alias) || alias;
  }
  /**
   * Sets the CSS classes to be used for icon fonts when an `<mat-icon>` component does not
   * have a fontSet input value, and is not loading an icon by name or URL.
   */
  setDefaultFontSetClass(...classNames) {
    this._defaultFontSetClass = classNames;
    return this;
  }
  /**
   * Returns the CSS classes to be used for icon fonts when an `<mat-icon>` component does not
   * have a fontSet input value, and is not loading an icon by name or URL.
   */
  getDefaultFontSetClass() {
    return this._defaultFontSetClass;
  }
  /**
   * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
   * The response from the URL may be cached so this will not always cause an HTTP request, but
   * the produced element will always be a new copy of the originally fetched icon. (That is,
   * it will not contain any modifications made to elements previously returned).
   *
   * @param safeUrl URL from which to fetch the SVG icon.
   */
  getSvgIconFromUrl(safeUrl) {
    const url = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, safeUrl);
    if (!url) {
      throw getMatIconFailedToSanitizeUrlError(safeUrl);
    }
    const cachedIcon = this._cachedIconsByUrl.get(url);
    if (cachedIcon) {
      return of(cloneSvg(cachedIcon));
    }
    return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl, null)).pipe(tap((svg) => this._cachedIconsByUrl.set(url, svg)), map((svg) => cloneSvg(svg)));
  }
  /**
   * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
   * and namespace. The icon must have been previously registered with addIcon or addIconSet;
   * if not, the Observable will throw an error.
   *
   * @param name Name of the icon to be retrieved.
   * @param namespace Namespace in which to look for the icon.
   */
  getNamedSvgIcon(name, namespace = "") {
    const key = iconKey(namespace, name);
    let config = this._svgIconConfigs.get(key);
    if (config) {
      return this._getSvgFromConfig(config);
    }
    config = this._getIconConfigFromResolvers(namespace, name);
    if (config) {
      this._svgIconConfigs.set(key, config);
      return this._getSvgFromConfig(config);
    }
    const iconSetConfigs = this._iconSetConfigs.get(namespace);
    if (iconSetConfigs) {
      return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
    }
    return throwError(getMatIconNameNotFoundError(key));
  }
  ngOnDestroy() {
    this._resolvers = [];
    this._svgIconConfigs.clear();
    this._iconSetConfigs.clear();
    this._cachedIconsByUrl.clear();
  }
  /**
   * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
   */
  _getSvgFromConfig(config) {
    if (config.svgText) {
      return of(cloneSvg(this._svgElementFromConfig(config)));
    } else {
      return this._loadSvgIconFromConfig(config).pipe(map((svg) => cloneSvg(svg)));
    }
  }
  /**
   * Attempts to find an icon with the specified name in any of the SVG icon sets.
   * First searches the available cached icons for a nested element with a matching name, and
   * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
   * that have not been cached, and searches again after all fetches are completed.
   * The returned Observable produces the SVG element if possible, and throws
   * an error if no icon with the specified name can be found.
   */
  _getSvgFromIconSetConfigs(name, iconSetConfigs) {
    const namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
    if (namedIcon) {
      return of(namedIcon);
    }
    const iconSetFetchRequests = iconSetConfigs.filter((iconSetConfig) => !iconSetConfig.svgText).map((iconSetConfig) => {
      return this._loadSvgIconSetFromConfig(iconSetConfig).pipe(catchError((err) => {
        const url = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, iconSetConfig.url);
        const errorMessage = `Loading icon set URL: ${url} failed: ${err.message}`;
        this._errorHandler.handleError(new Error(errorMessage));
        return of(null);
      }));
    });
    return forkJoin(iconSetFetchRequests).pipe(map(() => {
      const foundIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
      if (!foundIcon) {
        throw getMatIconNameNotFoundError(name);
      }
      return foundIcon;
    }));
  }
  /**
   * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
   * tag matches the specified name. If found, copies the nested element to a new SVG element and
   * returns it. Returns null if no matching element is found.
   */
  _extractIconWithNameFromAnySet(iconName, iconSetConfigs) {
    for (let i = iconSetConfigs.length - 1; i >= 0; i--) {
      const config = iconSetConfigs[i];
      if (config.svgText && config.svgText.toString().indexOf(iconName) > -1) {
        const svg = this._svgElementFromConfig(config);
        const foundIcon = this._extractSvgIconFromSet(svg, iconName, config.options);
        if (foundIcon) {
          return foundIcon;
        }
      }
    }
    return null;
  }
  /**
   * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
   * from it.
   */
  _loadSvgIconFromConfig(config) {
    return this._fetchIcon(config).pipe(tap((svgText) => config.svgText = svgText), map(() => this._svgElementFromConfig(config)));
  }
  /**
   * Loads the content of the icon set URL specified in the
   * SvgIconConfig and attaches it to the config.
   */
  _loadSvgIconSetFromConfig(config) {
    if (config.svgText) {
      return of(null);
    }
    return this._fetchIcon(config).pipe(tap((svgText) => config.svgText = svgText));
  }
  /**
   * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
   * tag matches the specified name. If found, copies the nested element to a new SVG element and
   * returns it. Returns null if no matching element is found.
   */
  _extractSvgIconFromSet(iconSet, iconName, options) {
    const iconSource = iconSet.querySelector(`[id="${iconName}"]`);
    if (!iconSource) {
      return null;
    }
    const iconElement = iconSource.cloneNode(true);
    iconElement.removeAttribute("id");
    if (iconElement.nodeName.toLowerCase() === "svg") {
      return this._setSvgAttributes(iconElement, options);
    }
    if (iconElement.nodeName.toLowerCase() === "symbol") {
      return this._setSvgAttributes(this._toSvgElement(iconElement), options);
    }
    const svg = this._svgElementFromString(trustedHTMLFromString("<svg></svg>"));
    svg.appendChild(iconElement);
    return this._setSvgAttributes(svg, options);
  }
  /**
   * Creates a DOM element from the given SVG string.
   */
  _svgElementFromString(str) {
    const div = this._document.createElement("DIV");
    div.innerHTML = str;
    const svg = div.querySelector("svg");
    if (!svg) {
      throw Error("<svg> tag not found");
    }
    return svg;
  }
  /**
   * Converts an element into an SVG node by cloning all of its children.
   */
  _toSvgElement(element) {
    const svg = this._svgElementFromString(trustedHTMLFromString("<svg></svg>"));
    const attributes = element.attributes;
    for (let i = 0; i < attributes.length; i++) {
      const {
        name,
        value
      } = attributes[i];
      if (name !== "id") {
        svg.setAttribute(name, value);
      }
    }
    for (let i = 0; i < element.childNodes.length; i++) {
      if (element.childNodes[i].nodeType === this._document.ELEMENT_NODE) {
        svg.appendChild(element.childNodes[i].cloneNode(true));
      }
    }
    return svg;
  }
  /**
   * Sets the default attributes for an SVG element to be used as an icon.
   */
  _setSvgAttributes(svg, options) {
    svg.setAttribute("fit", "");
    svg.setAttribute("height", "100%");
    svg.setAttribute("width", "100%");
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    svg.setAttribute("focusable", "false");
    if (options && options.viewBox) {
      svg.setAttribute("viewBox", options.viewBox);
    }
    return svg;
  }
  /**
   * Returns an Observable which produces the string contents of the given icon. Results may be
   * cached, so future calls with the same URL may not cause another HTTP request.
   */
  _fetchIcon(iconConfig) {
    const {
      url: safeUrl,
      options
    } = iconConfig;
    const withCredentials = options?.withCredentials ?? false;
    if (!this._httpClient) {
      throw getMatIconNoHttpProviderError();
    }
    if (safeUrl == null) {
      throw Error(`Cannot fetch icon from URL "${safeUrl}".`);
    }
    const url = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, safeUrl);
    if (!url) {
      throw getMatIconFailedToSanitizeUrlError(safeUrl);
    }
    const inProgressFetch = this._inProgressUrlFetches.get(url);
    if (inProgressFetch) {
      return inProgressFetch;
    }
    const req = this._httpClient.get(url, {
      responseType: "text",
      withCredentials
    }).pipe(map((svg) => {
      return trustedHTMLFromString(svg);
    }), finalize(() => this._inProgressUrlFetches.delete(url)), share());
    this._inProgressUrlFetches.set(url, req);
    return req;
  }
  /**
   * Registers an icon config by name in the specified namespace.
   * @param namespace Namespace in which to register the icon config.
   * @param iconName Name under which to register the config.
   * @param config Config to be registered.
   */
  _addSvgIconConfig(namespace, iconName, config) {
    this._svgIconConfigs.set(iconKey(namespace, iconName), config);
    return this;
  }
  /**
   * Registers an icon set config in the specified namespace.
   * @param namespace Namespace in which to register the icon config.
   * @param config Config to be registered.
   */
  _addSvgIconSetConfig(namespace, config) {
    const configNamespace = this._iconSetConfigs.get(namespace);
    if (configNamespace) {
      configNamespace.push(config);
    } else {
      this._iconSetConfigs.set(namespace, [config]);
    }
    return this;
  }
  /** Parses a config's text into an SVG element. */
  _svgElementFromConfig(config) {
    if (!config.svgElement) {
      const svg = this._svgElementFromString(config.svgText);
      this._setSvgAttributes(svg, config.options);
      config.svgElement = svg;
    }
    return config.svgElement;
  }
  /** Tries to create an icon config through the registered resolver functions. */
  _getIconConfigFromResolvers(namespace, name) {
    for (let i = 0; i < this._resolvers.length; i++) {
      const result = this._resolvers[i](name, namespace);
      if (result) {
        return isSafeUrlWithOptions(result) ? new SvgIconConfig(result.url, null, result.options) : new SvgIconConfig(result, null);
      }
    }
    return void 0;
  }
  static \u0275fac = function MatIconRegistry_Factory(\u0275t) {
    return new (\u0275t || _MatIconRegistry)(\u0275\u0275inject(HttpClient, 8), \u0275\u0275inject(DomSanitizer), \u0275\u0275inject(DOCUMENT, 8), \u0275\u0275inject(ErrorHandler));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MatIconRegistry,
    factory: _MatIconRegistry.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatIconRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient,
    decorators: [{
      type: Optional
    }]
  }, {
    type: DomSanitizer
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: ErrorHandler
  }], null);
})();
function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, errorHandler, document) {
  return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document, errorHandler);
}
var ICON_REGISTRY_PROVIDER = {
  // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
  provide: MatIconRegistry,
  deps: [[new Optional(), new SkipSelf(), MatIconRegistry], [new Optional(), HttpClient], DomSanitizer, ErrorHandler, [new Optional(), DOCUMENT]],
  useFactory: ICON_REGISTRY_PROVIDER_FACTORY
};
function cloneSvg(svg) {
  return svg.cloneNode(true);
}
function iconKey(namespace, name) {
  return namespace + ":" + name;
}
function isSafeUrlWithOptions(value) {
  return !!(value.url && value.options);
}

// node_modules/@angular/material/fesm2022/icon-module-a8f2a673.mjs
var _c03 = ["*"];
var MAT_ICON_DEFAULT_OPTIONS = new InjectionToken("MAT_ICON_DEFAULT_OPTIONS");
var MAT_ICON_LOCATION = new InjectionToken("mat-icon-location", {
  providedIn: "root",
  factory: MAT_ICON_LOCATION_FACTORY
});
function MAT_ICON_LOCATION_FACTORY() {
  const _document = inject(DOCUMENT);
  const _location = _document ? _document.location : null;
  return {
    // Note that this needs to be a function, rather than a property, because Angular
    // will only resolve it once, but we want the current path on each call.
    getPathname: () => _location ? _location.pathname + _location.search : ""
  };
}
var funcIriAttributes = ["clip-path", "color-profile", "src", "cursor", "fill", "filter", "marker", "marker-start", "marker-mid", "marker-end", "mask", "stroke"];
var funcIriAttributeSelector = funcIriAttributes.map((attr) => `[${attr}]`).join(", ");
var funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
var MatIcon = class _MatIcon {
  _elementRef = inject(ElementRef);
  _iconRegistry = inject(MatIconRegistry);
  _location = inject(MAT_ICON_LOCATION);
  _errorHandler = inject(ErrorHandler);
  _defaultColor;
  /**
   * Theme color of the icon. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.io/components/icon/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.io/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  _color;
  /**
   * Whether the icon should be inlined, automatically sizing the icon to match the font size of
   * the element the icon is contained in.
   */
  inline = false;
  /** Name of the icon in the SVG icon set. */
  get svgIcon() {
    return this._svgIcon;
  }
  set svgIcon(value) {
    if (value !== this._svgIcon) {
      if (value) {
        this._updateSvgIcon(value);
      } else if (this._svgIcon) {
        this._clearSvgElement();
      }
      this._svgIcon = value;
    }
  }
  _svgIcon;
  /** Font set that the icon is a part of. */
  get fontSet() {
    return this._fontSet;
  }
  set fontSet(value) {
    const newValue = this._cleanupFontValue(value);
    if (newValue !== this._fontSet) {
      this._fontSet = newValue;
      this._updateFontIconClasses();
    }
  }
  _fontSet;
  /** Name of an icon within a font set. */
  get fontIcon() {
    return this._fontIcon;
  }
  set fontIcon(value) {
    const newValue = this._cleanupFontValue(value);
    if (newValue !== this._fontIcon) {
      this._fontIcon = newValue;
      this._updateFontIconClasses();
    }
  }
  _fontIcon;
  _previousFontSetClass = [];
  _previousFontIconClass;
  _svgName;
  _svgNamespace;
  /** Keeps track of the current page path. */
  _previousPath;
  /** Keeps track of the elements and attributes that we've prefixed with the current path. */
  _elementsWithExternalReferences;
  /** Subscription to the current in-progress SVG icon request. */
  _currentIconFetch = Subscription.EMPTY;
  constructor() {
    const ariaHidden = inject(new HostAttributeToken("aria-hidden"), {
      optional: true
    });
    const defaults = inject(MAT_ICON_DEFAULT_OPTIONS, {
      optional: true
    });
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      if (defaults.fontSet) {
        this.fontSet = defaults.fontSet;
      }
    }
    if (!ariaHidden) {
      this._elementRef.nativeElement.setAttribute("aria-hidden", "true");
    }
  }
  /**
   * Splits an svgIcon binding value into its icon set and icon name components.
   * Returns a 2-element array of [(icon set), (icon name)].
   * The separator for the two fields is ':'. If there is no separator, an empty
   * string is returned for the icon set and the entire value is returned for
   * the icon name. If the argument is falsy, returns an array of two empty strings.
   * Throws an error if the name contains two or more ':' separators.
   * Examples:
   *   `'social:cake' -> ['social', 'cake']
   *   'penguin' -> ['', 'penguin']
   *   null -> ['', '']
   *   'a:b:c' -> (throws Error)`
   */
  _splitIconName(iconName) {
    if (!iconName) {
      return ["", ""];
    }
    const parts = iconName.split(":");
    switch (parts.length) {
      case 1:
        return ["", parts[0]];
      case 2:
        return parts;
      default:
        throw Error(`Invalid icon name: "${iconName}"`);
    }
  }
  ngOnInit() {
    this._updateFontIconClasses();
  }
  ngAfterViewChecked() {
    const cachedElements = this._elementsWithExternalReferences;
    if (cachedElements && cachedElements.size) {
      const newPath = this._location.getPathname();
      if (newPath !== this._previousPath) {
        this._previousPath = newPath;
        this._prependPathToReferences(newPath);
      }
    }
  }
  ngOnDestroy() {
    this._currentIconFetch.unsubscribe();
    if (this._elementsWithExternalReferences) {
      this._elementsWithExternalReferences.clear();
    }
  }
  _usingFontIcon() {
    return !this.svgIcon;
  }
  _setSvgElement(svg) {
    this._clearSvgElement();
    const path = this._location.getPathname();
    this._previousPath = path;
    this._cacheChildrenWithExternalReferences(svg);
    this._prependPathToReferences(path);
    this._elementRef.nativeElement.appendChild(svg);
  }
  _clearSvgElement() {
    const layoutElement = this._elementRef.nativeElement;
    let childCount = layoutElement.childNodes.length;
    if (this._elementsWithExternalReferences) {
      this._elementsWithExternalReferences.clear();
    }
    while (childCount--) {
      const child = layoutElement.childNodes[childCount];
      if (child.nodeType !== 1 || child.nodeName.toLowerCase() === "svg") {
        child.remove();
      }
    }
  }
  _updateFontIconClasses() {
    if (!this._usingFontIcon()) {
      return;
    }
    const elem = this._elementRef.nativeElement;
    const fontSetClasses = (this.fontSet ? this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/) : this._iconRegistry.getDefaultFontSetClass()).filter((className) => className.length > 0);
    this._previousFontSetClass.forEach((className) => elem.classList.remove(className));
    fontSetClasses.forEach((className) => elem.classList.add(className));
    this._previousFontSetClass = fontSetClasses;
    if (this.fontIcon !== this._previousFontIconClass && !fontSetClasses.includes("mat-ligature-font")) {
      if (this._previousFontIconClass) {
        elem.classList.remove(this._previousFontIconClass);
      }
      if (this.fontIcon) {
        elem.classList.add(this.fontIcon);
      }
      this._previousFontIconClass = this.fontIcon;
    }
  }
  /**
   * Cleans up a value to be used as a fontIcon or fontSet.
   * Since the value ends up being assigned as a CSS class, we
   * have to trim the value and omit space-separated values.
   */
  _cleanupFontValue(value) {
    return typeof value === "string" ? value.trim().split(" ")[0] : value;
  }
  /**
   * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
   * reference. This is required because WebKit browsers require references to be prefixed with
   * the current path, if the page has a `base` tag.
   */
  _prependPathToReferences(path) {
    const elements = this._elementsWithExternalReferences;
    if (elements) {
      elements.forEach((attrs, element) => {
        attrs.forEach((attr) => {
          element.setAttribute(attr.name, `url('${path}#${attr.value}')`);
        });
      });
    }
  }
  /**
   * Caches the children of an SVG element that have `url()`
   * references that we need to prefix with the current path.
   */
  _cacheChildrenWithExternalReferences(element) {
    const elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
    const elements = this._elementsWithExternalReferences = this._elementsWithExternalReferences || /* @__PURE__ */ new Map();
    for (let i = 0; i < elementsWithFuncIri.length; i++) {
      funcIriAttributes.forEach((attr) => {
        const elementWithReference = elementsWithFuncIri[i];
        const value = elementWithReference.getAttribute(attr);
        const match = value ? value.match(funcIriPattern) : null;
        if (match) {
          let attributes = elements.get(elementWithReference);
          if (!attributes) {
            attributes = [];
            elements.set(elementWithReference, attributes);
          }
          attributes.push({
            name: attr,
            value: match[1]
          });
        }
      });
    }
  }
  /** Sets a new SVG icon with a particular name. */
  _updateSvgIcon(rawName) {
    this._svgNamespace = null;
    this._svgName = null;
    this._currentIconFetch.unsubscribe();
    if (rawName) {
      const [namespace, iconName] = this._splitIconName(rawName);
      if (namespace) {
        this._svgNamespace = namespace;
      }
      if (iconName) {
        this._svgName = iconName;
      }
      this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(iconName, namespace).pipe(take(1)).subscribe((svg) => this._setSvgElement(svg), (err) => {
        const errorMessage = `Error retrieving icon ${namespace}:${iconName}! ${err.message}`;
        this._errorHandler.handleError(new Error(errorMessage));
      });
    }
  }
  static \u0275fac = function MatIcon_Factory(\u0275t) {
    return new (\u0275t || _MatIcon)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatIcon,
    selectors: [["mat-icon"]],
    hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
    hostVars: 10,
    hostBindings: function MatIcon_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-mat-icon-type", ctx._usingFontIcon() ? "font" : "svg")("data-mat-icon-name", ctx._svgName || ctx.fontIcon)("data-mat-icon-namespace", ctx._svgNamespace || ctx.fontSet)("fontIcon", ctx._usingFontIcon() ? ctx.fontIcon : null);
        \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "");
        \u0275\u0275classProp("mat-icon-inline", ctx.inline)("mat-icon-no-color", ctx.color !== "primary" && ctx.color !== "accent" && ctx.color !== "warn");
      }
    },
    inputs: {
      color: "color",
      inline: [2, "inline", "inline", booleanAttribute],
      svgIcon: "svgIcon",
      fontSet: "fontSet",
      fontIcon: "fontIcon"
    },
    exportAs: ["matIcon"],
    standalone: true,
    features: [\u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
    ngContentSelectors: _c03,
    decls: 1,
    vars: 0,
    template: function MatIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    styles: ["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color, inherit)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatIcon, [{
    type: Component,
    args: [{
      template: "<ng-content></ng-content>",
      selector: "mat-icon",
      exportAs: "matIcon",
      host: {
        "role": "img",
        "class": "mat-icon notranslate",
        "[class]": 'color ? "mat-" + color : ""',
        "[attr.data-mat-icon-type]": '_usingFontIcon() ? "font" : "svg"',
        "[attr.data-mat-icon-name]": "_svgName || fontIcon",
        "[attr.data-mat-icon-namespace]": "_svgNamespace || fontSet",
        "[attr.fontIcon]": "_usingFontIcon() ? fontIcon : null",
        "[class.mat-icon-inline]": "inline",
        "[class.mat-icon-no-color]": 'color !== "primary" && color !== "accent" && color !== "warn"'
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: ["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color, inherit)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    inline: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    svgIcon: [{
      type: Input
    }],
    fontSet: [{
      type: Input
    }],
    fontIcon: [{
      type: Input
    }]
  });
})();
var MatIconModule = class _MatIconModule {
  static \u0275fac = function MatIconModule_Factory(\u0275t) {
    return new (\u0275t || _MatIconModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatIconModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatIconModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatIcon],
      exports: [MatIcon, MatCommonModule]
    }]
  }], null, null);
})();

// src/app/gallery/components/gallery-dialog/gallery-dialog.component.ts
function GalleryDialogComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.currentIndex + 1, " / ", ctx_r0.galleryItems.length, " ");
  }
}
var GalleryDialogComponent = class _GalleryDialogComponent {
  dialogRef;
  gallery;
  cdr;
  data;
  galleryItems = [];
  galleryRef;
  currentIndex;
  _imageLoader = inject(IMAGE_LOADER);
  // Configuración para la galería
  galleryConfig = {
    thumbPosition: "bottom",
    imageSize: "contain",
    loadingStrategy: "preload",
    thumbWidth: 120,
    thumbHeight: 90,
    // Eliminada la propiedad dots que no existe en esta versión
    loop: true
  };
  constructor(dialogRef, gallery, cdr, data) {
    this.dialogRef = dialogRef;
    this.gallery = gallery;
    this.cdr = cdr;
    this.data = data;
  }
  ngOnInit() {
    this.setupGallery();
  }
  setupGallery() {
    if (this.data.images && this.data.images.length > 0) {
      this.galleryItems = this.data.images.map((item) => {
        const highResSrc = this._imageLoader({
          src: item.imageUrl,
          loaderParams: {
            width: item.imageWidth * 2,
            height: item.imageHeight * 2
          }
        });
        const thumbSrc = this._imageLoader({
          src: item.imageUrl,
          loaderParams: {
            width: 200,
            height: 150
          }
        });
        return new ImageItem({
          src: highResSrc,
          thumb: thumbSrc,
          alt: item.text || "Gallery image"
        });
      });
      this.galleryRef = this.gallery.ref("dialogGallery", this.galleryConfig);
      this.galleryRef.load(this.galleryItems);
      if (this.data.initialIndex >= 0 && this.data.initialIndex < this.galleryItems.length) {
        this.currentIndex = this.data.initialIndex;
        setTimeout(() => {
          this.galleryRef.set(this.data.initialIndex);
          this.cdr.markForCheck();
        });
      } else {
        this.currentIndex = 0;
      }
      this.galleryRef.indexChanged.subscribe((index) => {
        this.currentIndex = index.currIndex;
        this.cdr.markForCheck();
      });
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }
  ngOnDestroy() {
    if (this.galleryRef) {
      this.galleryRef.reset();
    }
  }
  static \u0275fac = function GalleryDialogComponent_Factory(\u0275t) {
    return new (\u0275t || _GalleryDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(Gallery), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GalleryDialogComponent, selectors: [["app-gallery-dialog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 1, consts: [[1, "gallery-dialog-container"], [1, "gallery-header"], ["class", "image-counter", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Cerrar galer\xEDa", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-times", "close-icon"], [1, "gallery-content"], ["id", "dialogGallery", 1, "fullscreen-gallery"], [1, "image-counter"]], template: function GalleryDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275template(2, GalleryDialogComponent_div_2_Template, 2, 2, "div", 2);
      \u0275\u0275elementStart(3, "button", 3);
      \u0275\u0275listener("click", function GalleryDialogComponent_Template_button_click_3_listener() {
        return ctx.closeDialog();
      });
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 5);
      \u0275\u0275element(6, "gallery", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.currentIndex !== void 0);
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    MatDialogModule,
    MatButtonModule,
    MatIconButton,
    MatIconModule,
    GalleryModule,
    GalleryComponent,
    LightboxModule
  ], styles: ["\n\n  .mat-mdc-dialog-container {\n  padding: 0 !important;\n  overflow: hidden !important;\n}\n.gallery-dialog-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: rgba(0, 0, 0, 0.9);\n  position: relative;\n}\n.gallery-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  background: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n}\n.image-counter[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 16px;\n  font-weight: 500;\n  padding: 4px 8px;\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.close-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.gallery-content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n  .fullscreen-gallery {\n  height: 100%;\n  width: 100%;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  font-family: Raleway, sans-serif;\n}\n  .fullscreen-gallery gallery-core {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n  .fullscreen-gallery .g-box {\n  position: static !important;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background: transparent;\n}\n  .fullscreen-gallery .g-container {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n  .fullscreen-gallery .g-items-container {\n  background-color: transparent;\n}\n  .fullscreen-gallery .g-image-item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n  .fullscreen-gallery .g-image-item img {\n  max-height: 85vh;\n  max-width: 95%;\n  object-fit: contain;\n}\n  .fullscreen-gallery .g-thumb-container {\n  background-color: rgba(30, 30, 30, 0.7);\n  padding: 10px 0;\n  margin-top: 10px;\n}\n  .fullscreen-gallery .g-thumb-image {\n  opacity: 0.6;\n  transition: opacity 0.3s ease;\n}\n  .fullscreen-gallery .g-thumb-image.g-active-thumb {\n  opacity: 1;\n  border-bottom: 2px solid var(--primary-color-1);\n}\n  .fullscreen-gallery .g-counter {\n  font-family: Raleway, sans-serif;\n  color: #fff;\n  position: absolute;\n  left: 20px;\n  top: 20px;\n}\n  .fullscreen-gallery .g-btn-close {\n  display: none;\n}\n  .fullscreen-gallery .g-btn-next, \n  .fullscreen-gallery .g-btn-prev {\n  color: #fff;\n  background-color: rgba(202, 142, 70, 0.5);\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n  .fullscreen-gallery .g-btn-next:hover, \n  .fullscreen-gallery .g-btn-prev:hover {\n  background-color: var(--primary-color-1);\n}"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GalleryDialogComponent, { className: "GalleryDialogComponent", filePath: "src\\app\\gallery\\components\\gallery-dialog\\gallery-dialog.component.ts", lineNumber: 38 });
})();

export {
  MatDialog,
  MatDialogModule,
  Gallery,
  GalleryModule,
  LightboxModule,
  GalleryDialogComponent
};
