import {
  computed,
  signal,
  ɵɵdefineInjectable
} from "./chunk-ZXLQTLKG.js";

// src/app/shared/utils/base.service.ts
var BaseService = class {
  storageKey = "activeItem";
  _items = signal([]);
  items = computed(() => this._items());
  _activeItem = signal(null);
  activeItem = computed(() => this._activeItem());
  constructor(storageKey) {
    this.storageKey = storageKey;
    const activeItem = sessionStorage.getItem(this.storageKey);
    if (activeItem) {
      this._activeItem.set(JSON.parse(activeItem));
    }
  }
  selectItem(elem) {
    this._activeItem.set(elem);
    sessionStorage.setItem(this.storageKey, JSON.stringify(elem));
  }
  clearSelectedItem() {
    this._activeItem.set(null);
    sessionStorage.removeItem(this.storageKey);
  }
  setItems(items) {
    this._items.set(items);
  }
};

// src/app/blog/models/blog.ts
var COMMENT_LIST = [
  {
    id: 1,
    userAvatar: "images/ui/avatar.jpg",
    userName: "John Smith",
    date: /* @__PURE__ */ new Date(),
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    comments: [
      {
        id: 2,
        userAvatar: "images/ui/avatar.jpg",
        userName: "John Smith",
        date: /* @__PURE__ */ new Date(),
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
      }
    ]
  },
  {
    id: 3,
    userAvatar: "images/ui/avatar.jpg",
    userName: "John Smith",
    date: /* @__PURE__ */ new Date(),
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    comments: [
      {
        id: 4,
        userAvatar: "images/ui/avatar.jpg",
        userName: "John Smith",
        date: /* @__PURE__ */ new Date(),
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
      }
    ]
  },
  {
    id: 5,
    userAvatar: "images/ui/avatar.jpg",
    userName: "John Smith",
    date: /* @__PURE__ */ new Date(),
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  }
];
var BLOG_LIST = [
  {
    id: 1,
    date: "Dec 10, 2021",
    title: "The Most Influential People in the Hotel Industry",
    resume: "Quis cupidatat quis dolore amet aliquip ea exercitation labore proident dolore minim culpa ullamco aute eiusmod tempor anim nostrud quis officia dolore adipisicing elit ex est adipisicing.",
    tag: "Vacation",
    imageUrl: "images/blog/1.jpg",
    comments: [...COMMENT_LIST]
  },
  {
    id: 2,
    date: "Dec 10, 2021",
    title: "The Best Advice You Could Ever Get About Hotel",
    resume: "Quis cupidatat quis dolore amet aliquip ea exercitation labore proident dolore minim culpa ullamco aute eiusmod tempor anim nostrud quis officia dolore adipisicing elit exest adipisicing.",
    tag: "Vacation",
    imageUrl: "images/blog/2.jpg",
    comments: [...COMMENT_LIST]
  },
  {
    id: 3,
    date: "Dec 10, 2021",
    title: "14 Unbelievable Things You Never Knew About Hotel",
    resume: "Quis cupidatat quis dolore amet aliquip ea exercitation labore proident dolore minim culpa ullamco aute eiusmod tempor anim nostrud quis officia dolore adipisicing elit exest adipisicing.",
    tag: "Vacation",
    imageUrl: "images/blog/3.jpg",
    comments: [...COMMENT_LIST]
  },
  {
    id: 4,
    date: "Dec 10, 2021",
    title: "How People Talked About Hotel 20 Years Ago",
    resume: "Quis cupidatat quis dolore amet aliquip ea exercitation labore proident dolore minim culpa ullamco aute eiusmod tempor anim nostrud quis officia dolore adipisicing elit exest adipisicing.",
    tag: "Vacation",
    imageUrl: "images/blog/4.jpg",
    comments: [...COMMENT_LIST]
  },
  {
    id: 5,
    date: "Dec 10, 2021",
    title: "Some Good News About Hotel to Brighten Your Day",
    resume: "Quis cupidatat quis dolore amet aliquip ea exercitation labore proident dolore minim culpa ullamco aute eiusmod tempor anim nostrud quis officia dolore adipisicing elit exest adipisicing.",
    tag: "Vacation",
    imageUrl: "images/blog/5.jpg",
    comments: [...COMMENT_LIST]
  },
  {
    id: 6,
    date: "Dec 10, 2021",
    title: "The Most Underrated Hotel You Need to Know",
    resume: "Quis cupidatat quis dolore amet aliquip ea exercitation labore proident dolore minim culpa ullamco aute eiusmod tempor anim nostrud quis officia dolore adipisicing elit exest adipisicing.",
    tag: "Vacation",
    imageUrl: "images/blog/6.jpg",
    comments: [...COMMENT_LIST]
  }
];

// src/app/blog/services/blog.service.ts
var BlogService = class _BlogService extends BaseService {
  constructor() {
    super("activeBlog");
    this.setItems(BLOG_LIST);
  }
  static \u0275fac = function BlogService_Factory(\u0275t) {
    return new (\u0275t || _BlogService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BlogService, factory: _BlogService.\u0275fac });
};

export {
  BlogService
};
