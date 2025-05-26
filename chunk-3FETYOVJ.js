import "./chunk-DAU4QTJP.js";

// src/app/room/room.routes.ts
var room_routes_default = [
  {
    path: "",
    loadComponent: () => import("./chunk-EKN3FCFE.js").then((mod) => mod.RoomListComponent)
  },
  {
    path: "details/:id",
    loadComponent: () => import("./chunk-RNL7F5LU.js").then((mod) => mod.RoomDetailComponent)
  },
  {
    path: "booking",
    loadComponent: () => import("./chunk-D5JIDYHR.js").then((mod) => mod.BookingComponent)
  }
];
export {
  room_routes_default as default
};
