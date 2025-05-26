import "./chunk-DAU4QTJP.js";

// src/app/offer/offer.routes.ts
var offer_routes_default = [
  {
    path: "",
    loadComponent: () => import("./chunk-VLKBVR42.js").then((mod) => mod.OfferListComponent)
  },
  {
    path: "details/:id",
    loadComponent: () => import("./chunk-JJC6I7X5.js").then((mod) => mod.OfferDetailComponent)
  }
];
export {
  offer_routes_default as default
};
