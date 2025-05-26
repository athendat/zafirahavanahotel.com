import {
  APP_WRITE_CONFIG,
  AppWriteService
} from "./chunk-U3KVYWMQ.js";
import {
  computed,
  inject,
  signal,
  ɵɵdefineInjectable
} from "./chunk-ZXLQTLKG.js";
import {
  __async
} from "./chunk-DAU4QTJP.js";

// src/app/room/models/room.ts
var AVAILABLE_ROOMS_FN = "66d0aa6f000caeb4b77e";
var PAYMENT_RESERVATION_FN = "66d53de7003ab2916c2f";

// src/app/room/services/room.service.ts
var RoomService = class _RoomService {
  apiSrv = inject(AppWriteService);
  _rooms = signal([]);
  _availableRooms = signal([]);
  _activeRoom = signal(null);
  _reservation = signal(null);
  requestStatus = signal("INITIAL");
  rooms = computed(() => this._rooms());
  availableRooms = computed(() => this._availableRooms());
  activeRoom = computed(() => this._activeRoom());
  reservation = computed(() => this._reservation());
  constructor() {
    const activeRoom = sessionStorage.getItem("activeRoom");
    const activeReservation = localStorage.getItem("activeReservation");
    if (activeRoom) {
      this._activeRoom.set(JSON.parse(activeRoom));
    }
    if (activeReservation) {
      this._reservation.set(JSON.parse(activeReservation));
      console.log(JSON.parse(activeReservation));
    }
  }
  selectRoom(elem) {
    this._activeRoom.set(elem);
    sessionStorage.setItem("activeRoom", JSON.stringify(elem));
  }
  clearSelectedRoom() {
    this._activeRoom.set(null);
    sessionStorage.removeItem("activeRoom");
  }
  clearAvailableRooms() {
    this._availableRooms.set([]);
  }
  clearActiveReservation() {
    localStorage.removeItem("activeReservation");
    this._reservation.set(null);
  }
  getRooms() {
    return __async(this, null, function* () {
      try {
        this.requestStatus.set("LOADING");
        const data = yield this.apiSrv.getColletionDocuments(APP_WRITE_CONFIG.roomCollectionId);
        const rooms = data.documents.sort((a, b) => a.no - b.no);
        rooms.forEach((room) => {
          room.images.sort((a, b) => a.no - b.no);
        });
        this._rooms.set(rooms);
        this.requestStatus.set("SUCCESS");
      } catch (error) {
        this._rooms.set([]);
        this.requestStatus.set("ERROR");
      }
    });
  }
  getReservation(documentId) {
    return this.apiSrv.getDocument(APP_WRITE_CONFIG.reservationCollectionId, documentId);
  }
  getAvailableRooms(body) {
    this.requestStatus.set("LOADING");
    this.apiSrv.excuteFunction(AVAILABLE_ROOMS_FN, body).then((rta) => {
      const roomsInReservation = this.reservation()?.rooms ?? [];
      const data = JSON.parse(rta.responseBody);
      this._availableRooms.set(this.reservation() ? [...roomsInReservation, ...data] : data);
      this.requestStatus.set("SUCCESS");
    }).catch(() => {
      this._availableRooms.set([]);
      this.requestStatus.set("ERROR");
    });
  }
  bookRoom(requestData) {
    const body = JSON.stringify(requestData);
    return this.apiSrv.excuteFunction(PAYMENT_RESERVATION_FN, body);
  }
  setReservation(data) {
    this._reservation.set(data);
    localStorage.setItem("activeReservation", JSON.stringify(data));
  }
  listenChannel(chanel, callback) {
    return this.apiSrv.client.subscribe(chanel, callback);
  }
  static \u0275fac = function RoomService_Factory(\u0275t) {
    return new (\u0275t || _RoomService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RoomService, factory: _RoomService.\u0275fac });
};

export {
  RoomService
};
