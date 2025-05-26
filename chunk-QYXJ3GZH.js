import "./chunk-DAU4QTJP.js";

// src/app/blog/blog.routes.ts
var blog_routes_default = [
  {
    path: "",
    loadComponent: () => import("./chunk-BZ7FPWHU.js").then((mod) => mod.BlogListComponent)
  },
  {
    path: "details/:id",
    loadComponent: () => import("./chunk-LZO3Y3XU.js").then((mod) => mod.BlogDetailComponent)
  }
];
export {
  blog_routes_default as default
};
