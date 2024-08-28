var Sa = Object.defineProperty;
var Ta = (e, t, r) => t in e ? Sa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var AA = (e, t, r) => (Ta(e, typeof t != "symbol" ? t + "" : t, r), r);
import "./main.css";
var Ia = ((e) => (e.VERBOSE = "VERBOSE", e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARN = "WARN", e.ERROR = "ERROR", e))(Ia || {}), Bi = ((e) => (e[e.EN = 0] = "EN", e))(Bi || {});
class ie {
}
AA(ie, "apiKey", ""), AA(ie, "appDomain", "");
let Re;
const Ha = new Uint8Array(16);
function Oa() {
  if (!Re && (Re = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Re))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Re(Ha);
}
const DA = [];
for (let e = 0; e < 256; ++e)
  DA.push((e + 256).toString(16).slice(1));
const Cn = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
function La(e, t, r) {
  if (Cn.randomUUID && !t && !e)
    return Cn.randomUUID();
  const a = (e = e || {}).random || (e.rng || Oa)();
  return a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, function(g, p = 0) {
    return DA[g[p + 0]] + DA[g[p + 1]] + DA[g[p + 2]] + DA[g[p + 3]] + "-" + DA[g[p + 4]] + DA[g[p + 5]] + "-" + DA[g[p + 6]] + DA[g[p + 7]] + "-" + DA[g[p + 8]] + DA[g[p + 9]] + "-" + DA[g[p + 10]] + DA[g[p + 11]] + DA[g[p + 12]] + DA[g[p + 13]] + DA[g[p + 14]] + DA[g[p + 15]];
  }(a);
}
const vn = "shake.sdk.isAppRegistered", yn = "shake.sdk.isAppActive", bn = "shake.sdk.isShakeOpened", Yi = "shake.sdk.shakeState", Qn = "shake.sdk.shakeDeviceId", Fn = "shake.sdk.shakeChosenColor", xn = "shake.sdk.shakeChosenDrawingOption";
var Qe = ((e) => (e.SUGGESTION = "improvement", e.BUG = "bug", e.QUESTION = "question", e))(Qe || {}), no = ((e) => (e.MANUAL = "manual", e.AUTOMATIC = "automatic", e))(no || {}), wi = ((e) => (e.TITLE = "title", e.TEXT_INPUT = "text_input", e.EMAIL = "email", e.PICKER = "picker", e))(wi || {});
const Da = ["geolocation", "camera", "microphone", "notifications", "persistent-storage", "screen-wake-lock"];
class Ma {
  constructor() {
    AA(this, "description", "");
    AA(this, "feedbackType", Qe.BUG);
  }
}
class Pa {
  constructor(t) {
    AA(this, "storageProvider");
    AA(this, "isSDKEnabled", () => this.isAppRegistered() && this.isAppActive());
    AA(this, "isAppRegistered", () => this.storageProvider.getBoolean(vn));
    AA(this, "setAppRegistered", (t) => this.storageProvider.setBoolean(vn, t));
    AA(this, "isAppActive", () => this.storageProvider.getBoolean(yn));
    AA(this, "setAppActive", (t) => this.storageProvider.setBoolean(yn, t));
    AA(this, "isShakeOpened", () => this.storageProvider.getBoolean(bn) ?? !1);
    AA(this, "setShakeOpened", (t) => this.storageProvider.setBoolean(bn, t));
    AA(this, "getShakeState", () => this.storageProvider.getObject(Yi) ?? new Ma());
    AA(this, "setShakeState", (t) => this.storageProvider.setObject(Yi, t));
    AA(this, "clearShakeState", () => {
      this.storageProvider.removeItem(Yi);
    });
    AA(this, "getShakeDeviceId", () => this.storageProvider.getString(Qn));
    AA(this, "setShakeDeviceId", (t) => this.storageProvider.setString(Qn, t));
    AA(this, "getDrawingColor", () => this.storageProvider.getString(Fn));
    AA(this, "setDrawingColor", (t) => this.storageProvider.setString(Fn, t));
    AA(this, "getDrawingOption", () => this.storageProvider.getString(xn));
    AA(this, "setDrawingOption", (t) => this.storageProvider.setString(xn, t));
    this.storageProvider = t;
  }
}
const tt = "shake_sdk", Bt = "activity_history", nt = "files", Mt = "report", et = (e) => {
  const t = e.target.result;
  e.oldVersion < 1 && t.createObjectStore(nt, { keyPath: "name" }), e.oldVersion < 2 && t.createObjectStore(Bt, { keyPath: "id", autoIncrement: !0 }), e.oldVersion < 3 && t.createObjectStore(Mt, { autoIncrement: !0 });
};
function Le() {
  return new Promise((e, t) => {
    const r = indexedDB.open(tt, 3), a = [];
    r.onerror = function() {
      t("Error opening database");
    }, r.onsuccess = function(g) {
      const p = g.target.result.transaction([nt], "readonly").objectStore(nt).openCursor();
      p.onsuccess = function(w) {
        const C = w.target.result;
        C ? (a.push({ name: C.value.name, data: C.value.drawingData ? C.value.drawingData : C.value.data, type: C.value.type, timestamp: C.value.timestamp }), C.continue()) : (a.sort((y, Q) => y.timestamp == Q.timestamp ? 0 : y.timestamp > Q.timestamp ? 1 : -1), e(a));
      }, p.onerror = function() {
        t("Error retrieving files from IndexedDB");
      };
    }, r.onupgradeneeded = et;
  });
}
const Un = (e) => new Promise((t, r) => {
  const a = indexedDB.open(tt, 3);
  a.onerror = function() {
    r("Error opening database");
  }, a.onsuccess = function(g) {
    const p = g.target.result.transaction([nt], "readwrite").objectStore(nt).put(e);
    p.onsuccess = function() {
      t("File written successfully to IndexedDB");
    }, p.onerror = function() {
      r("Error writing file to IndexedDB");
    };
  }, a.onupgradeneeded = et;
});
function so(e) {
  return new Promise((t, r) => {
    const a = indexedDB.open(tt, 3);
    a.onerror = function() {
      r("Error opening database");
    }, a.onsuccess = function(g) {
      const p = g.target.result.transaction([nt], "readonly").objectStore(nt).get(e);
      p.onsuccess = function(w) {
        const C = w.target.result;
        C ? t(C) : r("File not found in IndexedDB");
      }, p.onerror = function() {
        r("Error reading file from IndexedDB");
      };
    }, a.onupgradeneeded = et;
  });
}
function En(e) {
  return new Promise((t, r) => {
    const a = indexedDB.open(tt, 3);
    a.onerror = function() {
      r("Error opening database");
    }, a.onsuccess = function(g) {
      const p = g.target.result.transaction([nt], "readwrite").objectStore(nt).delete(e);
      p.onsuccess = function() {
        t("File deleted successfully from IndexedDB");
      }, p.onerror = function() {
        r("Error deleting file from IndexedDB");
      };
    }, a.onupgradeneeded = et;
  });
}
class Ra {
  constructor() {
    AA(this, "addObservers", []);
    AA(this, "removeObservers", []);
    AA(this, "updateObservers", []);
    AA(this, "addAttachment", async (t) => {
      await Un(t), this.notifyAdded(t);
    });
    AA(this, "removeAttachment", async (t) => {
      await En(t.name), this.notifyRemoved(t);
    });
    AA(this, "updateAttachment", async (t) => {
      await En(t.name), await Un(t), this.notifyUpdated(t);
    });
    AA(this, "notifyAdded", (t) => this.addObservers.forEach((r) => r(t)));
    AA(this, "notifyRemoved", (t) => this.removeObservers.forEach((r) => r(t)));
    AA(this, "notifyUpdated", (t) => this.updateObservers.forEach((r) => r(t)));
  }
}
var SA = ((e) => (e[e.CONSOLE_LOG = 0] = "CONSOLE_LOG", e[e.CUSTOM_LOG = 1] = "CUSTOM_LOG", e[e.NETWORK_REQUEST = 2] = "NETWORK_REQUEST", e[e.NOTIFICATION_EVENT = 3] = "NOTIFICATION_EVENT", e[e.VIEW_CONTROLLER = 4] = "VIEW_CONTROLLER", e[e.SYSTEM_EVENT = 5] = "SYSTEM_EVENT", e[e.USER_ACTION = 6] = "USER_ACTION", e))(SA || {});
const oe = async (e) => {
  const t = await new Promise((p, w) => {
    const C = indexedDB.open(tt, 3), y = [];
    C.onerror = function() {
      w("Error opening database");
    }, C.onsuccess = function(Q) {
      const b = Q.target.result.transaction([Bt], "readonly").objectStore(Bt).openCursor();
      b.onsuccess = function(E) {
        const S = E.target.result;
        if (S) {
          const L = S.value.timestamp;
          y.push({ timestamp: L }), S.continue();
        } else
          y.sort((L, H) => L.timestamp < H.timestamp ? 1 : L.timestamp == H.timestamp ? 0 : -1), p(y);
      }, b.onerror = function() {
        w("Error retrieving activity history times from IndexedDB");
      };
    }, C.onupgradeneeded = et;
  }), r = t[999];
  var a, g;
  r && await (a = r, new Promise((p, w) => {
    const C = indexedDB.open(tt, 3);
    C.onerror = function() {
      w("Error opening database");
    }, C.onsuccess = function(y) {
      const Q = y.target.result.transaction([Bt], "readwrite").objectStore(Bt), b = Q.openCursor();
      b.onsuccess = function(E) {
        const S = E.target.result;
        S ? (S.value.timestamp <= a.timestamp && Q.delete(S.primaryKey), S.continue()) : p("Items deleted from IndexedDB");
      }, b.onerror = function() {
        w("Error opening cursor");
      };
    }, C.onupgradeneeded = et;
  })), await (g = e, new Promise((p, w) => {
    const C = indexedDB.open(tt, 3);
    C.onerror = function() {
      w("Error opening database");
    }, C.onsuccess = function(y) {
      const Q = y.target.result.transaction([Bt], "readwrite").objectStore(Bt).put(g);
      Q.onsuccess = function() {
        p("File written successfully to IndexedDB");
      }, Q.onerror = function() {
        w("Error writing file to IndexedDB");
      };
    }, C.onupgradeneeded = et;
  }));
};
class Ka {
  constructor() {
    AA(this, "funcLog", console.log);
    AA(this, "funcError", console.error);
    AA(this, "funcInfo", console.info);
    AA(this, "funcDebug", console.debug);
    AA(this, "funcTrace", console.trace);
    AA(this, "start", () => {
      console.log = (t) => {
        this.captureEvent(t), this.funcLog(t);
      }, console.error = (t) => {
        this.captureEvent(t), this.funcError(t);
      }, console.info = (t) => {
        this.captureEvent(t), this.funcInfo(t);
      }, console.debug = (t) => {
        this.captureEvent(t), this.funcDebug(t);
      }, console.trace = (t) => {
        this.captureEvent(t), this.funcTrace(t);
      };
    });
    AA(this, "stop", () => {
      console.log = this.funcLog, console.error = this.funcError, console.info = this.funcInfo, console.debug = this.funcDebug, console.trace = this.funcTrace;
    });
    AA(this, "captureEvent", (t) => {
      if (!LA.report.isConsoleLogsEnabled)
        return;
      const r = typeof t == "object" ? JSON.stringify(t) : String(t), a = { timestamp: (/* @__PURE__ */ new Date()).toISOString(), message: r, event_type: SA.CONSOLE_LOG };
      oe(a);
    });
  }
}
class ja {
  constructor() {
    AA(this, "captureEvent", async (t, r) => {
      if (!LA.report.isCustomLogsEnabled)
        return;
      const a = { timestamp: (/* @__PURE__ */ new Date()).toISOString(), level: t, message: r.toString(), event_type: SA.CUSTOM_LOG };
      await oe(a);
    });
  }
}
const wt = window.XMLHttpRequest, _n = wt.prototype.open, kn = wt.prototype.send, Sn = wt.prototype.setRequestHeader;
let zi, he, Tt = !1;
const Ji = { setOnRequestDone(e) {
  zi = e;
}, enableInterceptor() {
  wt.prototype.open = function(e, t) {
    he = { event_type: SA.NETWORK_REQUEST, url: "", method: "", request_body: "", response_body: "", request_headers: {}, response_headers: {}, status_code: "", timestamp: "", start: 0, duration: 0 }, he.url = t.toString(), he.method = e, _n.call(this, e, t);
  }, wt.prototype.setRequestHeader = function(e, t) {
    he.request_headers[e] = String(t), Sn.call(this, e, t);
  }, wt.prototype.send = function(e) {
    let t;
    t = typeof e != "string" ? e ? JSON.stringify(e) : "" : e, Tn(t) && (t = "Binary data");
    const r = /* @__PURE__ */ new Date();
    let a = r.toISOString();
    a = a.replace("Z", "000+0000");
    const g = JSON.parse(JSON.stringify(he));
    g.start = r.getTime(), g.timestamp = a, g.request_body = t || "", this.addEventListener && (this.addEventListener("readystatechange", async () => {
      Tt && this.readyState === this.HEADERS_RECEIVED && this.getAllResponseHeaders() && (g.response_headers = Ga(this.getAllResponseHeaders()));
    }, !1), this.addEventListener("load", async () => {
      if (!Tt)
        return;
      let w = await new Response(this.response).text();
      (w === void 0 || Tn(w)) && (w = "Binary data"), g.duration = Date.now() - g.start, g.response_body = w || "", g.status_code = this.status ? this.status.toString() : "n/a", p(g);
    }, !1), this.addEventListener("error", () => {
      Tt && (g.duration = Date.now() - g.start, g.response_body = "Request error.", g.status_code = "err", p(g));
    }, !1), this.addEventListener("abort", () => {
      Tt && (g.duration = Date.now() - g.start, g.response_body = "Request aborted.", g.status_code = "err", p(g));
    }, !1), this.addEventListener("timeout", () => {
      Tt && (g.duration = Date.now() - g.start, g.response_body = "Request timeout.", g.status_code = "t/o", p(g));
    }, !1));
    const p = (w) => {
      w.method || (w.method = ""), w.status_code || (w.status_code = ""), w.url && Na(w.url) || (w.url = "https://not_a_valid_url"), zi && zi(w);
    };
    kn.call(this, e);
  }, Tt = !0;
}, disableInterceptor() {
  Tt = !1, wt.prototype.send = kn, wt.prototype.open = _n, wt.prototype.setRequestHeader = Sn;
} }, Ga = (e) => {
  const t = {};
  try {
    e && e.split(`\r
`).forEach((r) => {
      const a = r.split(/:(.+)/), g = String(a == null ? void 0 : a[0]), p = String(a == null ? void 0 : a[1]);
      t[g] = p;
    });
  } catch {
  }
  return t;
}, Tn = (e) => /\ufffd/.test(e), Na = (e) => e != null && (e.startsWith("http://") || e.startsWith("https://"));
class Va {
  constructor() {
    AA(this, "start", () => {
      Ji.enableInterceptor();
    });
    AA(this, "stop", () => {
      Ji.disableInterceptor();
    });
    AA(this, "captureEvent", (t) => {
      LA.report.isNetworkRequestsEnabled && oe(t);
    });
    Ji.setOnRequestDone(this.captureEvent);
  }
}
var Xa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Wa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ya(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function a() {
      return this instanceof a ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(a) {
    var g = Object.getOwnPropertyDescriptor(e, a);
    Object.defineProperty(r, a, g.get ? g : { enumerable: !0, get: function() {
      return e[a];
    } });
  }), r;
}
var oo, wr = { exports: {} }, te = typeof Reflect == "object" ? Reflect : null, In = te && typeof te.apply == "function" ? te.apply : function(e, t, r) {
  return Function.prototype.apply.call(e, t, r);
};
oo = te && typeof te.ownKeys == "function" ? te.ownKeys : Object.getOwnPropertySymbols ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : function(e) {
  return Object.getOwnPropertyNames(e);
};
var Hn = Number.isNaN || function(e) {
  return e != e;
};
function mA() {
  mA.init.call(this);
}
wr.exports = mA, wr.exports.once = function(e, t) {
  return new Promise(function(r, a) {
    function g(w) {
      e.removeListener(t, p), a(w);
    }
    function p() {
      typeof e.removeListener == "function" && e.removeListener("error", g), r([].slice.call(arguments));
    }
    Rn(e, t, p, { once: !0 }), t !== "error" && function(w, C, y) {
      typeof w.on == "function" && Rn(w, "error", C, y);
    }(e, g, { once: !0 });
  });
}, mA.EventEmitter = mA, mA.prototype._events = void 0, mA.prototype._eventsCount = 0, mA.prototype._maxListeners = void 0;
var On = 10;
function li(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
function ao(e) {
  return e._maxListeners === void 0 ? mA.defaultMaxListeners : e._maxListeners;
}
function Ln(e, t, r, a) {
  var g, p, w, C;
  if (li(r), (p = e._events) === void 0 ? (p = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (p.newListener !== void 0 && (e.emit("newListener", t, r.listener ? r.listener : r), p = e._events), w = p[t]), w === void 0)
    w = p[t] = r, ++e._eventsCount;
  else if (typeof w == "function" ? w = p[t] = a ? [r, w] : [w, r] : a ? w.unshift(r) : w.push(r), (g = ao(e)) > 0 && w.length > g && !w.warned) {
    w.warned = !0;
    var y = new Error("Possible EventEmitter memory leak detected. " + w.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    y.name = "MaxListenersExceededWarning", y.emitter = e, y.type = t, y.count = w.length, C = y, console && console.warn && console.warn(C);
  }
  return e;
}
function za() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Dn(e, t, r) {
  var a = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r }, g = za.bind(a);
  return g.listener = r, a.wrapFn = g, g;
}
function Mn(e, t, r) {
  var a = e._events;
  if (a === void 0)
    return [];
  var g = a[t];
  return g === void 0 ? [] : typeof g == "function" ? r ? [g.listener || g] : [g] : r ? function(p) {
    for (var w = new Array(p.length), C = 0; C < w.length; ++C)
      w[C] = p[C].listener || p[C];
    return w;
  }(g) : co(g, g.length);
}
function Pn(e) {
  var t = this._events;
  if (t !== void 0) {
    var r = t[e];
    if (typeof r == "function")
      return 1;
    if (r !== void 0)
      return r.length;
  }
  return 0;
}
function co(e, t) {
  for (var r = new Array(t), a = 0; a < t; ++a)
    r[a] = e[a];
  return r;
}
function Rn(e, t, r, a) {
  if (typeof e.on == "function")
    a.once ? e.once(t, r) : e.on(t, r);
  else {
    if (typeof e.addEventListener != "function")
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
    e.addEventListener(t, function g(p) {
      a.once && e.removeEventListener(t, g), r(p);
    });
  }
}
Object.defineProperty(mA, "defaultMaxListeners", { enumerable: !0, get: function() {
  return On;
}, set: function(e) {
  if (typeof e != "number" || e < 0 || Hn(e))
    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
  On = e;
} }), mA.init = function() {
  this._events !== void 0 && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
}, mA.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || Hn(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
}, mA.prototype.getMaxListeners = function() {
  return ao(this);
}, mA.prototype.emit = function(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t.push(arguments[r]);
  var a = e === "error", g = this._events;
  if (g !== void 0)
    a = a && g.error === void 0;
  else if (!a)
    return !1;
  if (a) {
    var p;
    if (t.length > 0 && (p = t[0]), p instanceof Error)
      throw p;
    var w = new Error("Unhandled error." + (p ? " (" + p.message + ")" : ""));
    throw w.context = p, w;
  }
  var C = g[e];
  if (C === void 0)
    return !1;
  if (typeof C == "function")
    In(C, this, t);
  else {
    var y = C.length, Q = co(C, y);
    for (r = 0; r < y; ++r)
      In(Q[r], this, t);
  }
  return !0;
}, mA.prototype.addListener = function(e, t) {
  return Ln(this, e, t, !1);
}, mA.prototype.on = mA.prototype.addListener, mA.prototype.prependListener = function(e, t) {
  return Ln(this, e, t, !0);
}, mA.prototype.once = function(e, t) {
  return li(t), this.on(e, Dn(this, e, t)), this;
}, mA.prototype.prependOnceListener = function(e, t) {
  return li(t), this.prependListener(e, Dn(this, e, t)), this;
}, mA.prototype.removeListener = function(e, t) {
  var r, a, g, p, w;
  if (li(t), (a = this._events) === void 0)
    return this;
  if ((r = a[e]) === void 0)
    return this;
  if (r === t || r.listener === t)
    --this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete a[e], a.removeListener && this.emit("removeListener", e, r.listener || t));
  else if (typeof r != "function") {
    for (g = -1, p = r.length - 1; p >= 0; p--)
      if (r[p] === t || r[p].listener === t) {
        w = r[p].listener, g = p;
        break;
      }
    if (g < 0)
      return this;
    g === 0 ? r.shift() : function(C, y) {
      for (; y + 1 < C.length; y++)
        C[y] = C[y + 1];
      C.pop();
    }(r, g), r.length === 1 && (a[e] = r[0]), a.removeListener !== void 0 && this.emit("removeListener", e, w || t);
  }
  return this;
}, mA.prototype.off = mA.prototype.removeListener, mA.prototype.removeAllListeners = function(e) {
  var t, r, a;
  if ((r = this._events) === void 0)
    return this;
  if (r.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : r[e] !== void 0 && (--this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete r[e]), this;
  if (arguments.length === 0) {
    var g, p = Object.keys(r);
    for (a = 0; a < p.length; ++a)
      (g = p[a]) !== "removeListener" && this.removeAllListeners(g);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (typeof (t = r[e]) == "function")
    this.removeListener(e, t);
  else if (t !== void 0)
    for (a = t.length - 1; a >= 0; a--)
      this.removeListener(e, t[a]);
  return this;
}, mA.prototype.listeners = function(e) {
  return Mn(this, e, !0);
}, mA.prototype.rawListeners = function(e) {
  return Mn(this, e, !1);
}, mA.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Pn.call(e, t);
}, mA.prototype.listenerCount = Pn, mA.prototype.eventNames = function() {
  return this._eventsCount > 0 ? oo(this._events) : [];
};
const Ja = Wa(wr.exports), lo = new class extends Ja {
}();
let Kn;
setInterval(() => {
  let e = window.location.href;
  e != Kn && (lo.emit("change", e), Kn = e);
}, 60);
var jn = lo;
class qa {
  constructor() {
    AA(this, "listener", (t) => {
      this.captureEvent(t);
    });
    AA(this, "start", () => {
      jn.on("change", this.listener);
    });
    AA(this, "stop", () => {
      jn.off("change", this.listener);
    });
    AA(this, "captureEvent", (t) => {
      if (!LA.report.isScreenChangesEnabled)
        return;
      const r = { timestamp: (/* @__PURE__ */ new Date()).toISOString(), view_controller: t, method: "onStart", event_type: SA.VIEW_CONTROLLER };
      oe(r);
    });
  }
}
var mr = ((e) => (e.TAB_VISIBLE = "onResume", e.TAB_HIDDEN = "onPause", e.APP_START = "onCreate", e))(mr || {});
class Za {
  constructor() {
    AA(this, "listener", () => {
      document.visibilityState === "hidden" && this.captureEvent(mr.TAB_HIDDEN), document.visibilityState === "visible" && this.captureEvent(mr.TAB_VISIBLE);
    });
    AA(this, "start", () => {
      document.addEventListener("visibilitychange", this.listener);
    });
    AA(this, "stop", () => {
      document.removeEventListener("visibilitychange", this.listener);
    });
    AA(this, "captureEvent", (t) => {
      if (!LA.report.isSystemEventsEnabled)
        return;
      const r = { timestamp: (/* @__PURE__ */ new Date()).toISOString(), state: t, event_type: SA.SYSTEM_EVENT };
      oe(r);
    });
  }
}
var ho = ((e) => (e.TAP = "Tap", e))(ho || {});
class $a {
  constructor() {
    AA(this, "listener", (t) => {
      const r = Ac(t);
      r && this.captureEvent(r.tag, r.property, r.propertyType);
    });
    AA(this, "start", () => {
      document.addEventListener("click", this.listener);
    });
    AA(this, "stop", () => {
      document.removeEventListener("click", this.listener);
    });
    AA(this, "captureEvent", (t, r, a) => {
      if (!LA.report.isUserActionsEnabled)
        return;
      const g = { timestamp: (/* @__PURE__ */ new Date()).toISOString(), class_name: t ?? "", property: r ?? "", property_type: a ?? "", touch_type: ho.TAP, event_type: SA.USER_ACTION };
      oe(g);
    });
  }
}
const Ac = (e) => {
  const t = { tag: "", property: "", propertyType: "" };
  if (e.target instanceof Element) {
    t.tag = e.target.tagName.toLowerCase();
    let r = "";
    ["p", "pre", "q", "h1", "h2", "button", "a", "span", "li"].includes(t.tag) && (r = e.target.textContent ?? "");
    const a = e.target.ariaLabel ?? e.target.getAttribute("alt") ?? "", g = e.target.id ?? "", p = e.target.className ?? "";
    r && Ke(r) ? (t.property = r, t.propertyType = "Text") : a && Ke(a) ? (t.property = a, t.propertyType = "ContentDescription") : g && Ke(g) ? (t.property = g, t.propertyType = "Id") : p && Ke(p) && (t.property = p, t.propertyType = "Id");
  }
  return t;
}, Ke = (e) => !(e instanceof SVGAnimatedString);
function uo(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: tc } = Object.prototype, { getPrototypeOf: zr } = Object, mi = (qi = /* @__PURE__ */ Object.create(null), (e) => {
  const t = tc.call(e);
  return qi[t] || (qi[t] = t.slice(8, -1).toLowerCase());
});
var qi;
const ht = (e) => (e = e.toLowerCase(), (t) => mi(t) === e), Li = (e) => (t) => typeof t === e, { isArray: Jt } = Array, fe = Li("undefined"), Gn = ht("ArrayBuffer"), ec = Li("string"), YA = Li("function"), Nn = Li("number"), je = (e) => e !== null && typeof e == "object", Ge = (e) => {
  if (mi(e) !== "object")
    return !1;
  const t = zr(e);
  return !(t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.toStringTag in e || Symbol.iterator in e);
}, ic = ht("Date"), rc = ht("File"), nc = ht("Blob"), sc = ht("FileList"), oc = ht("URLSearchParams");
function pe(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e == null)
    return;
  let a, g;
  if (typeof e != "object" && (e = [e]), Jt(e))
    for (a = 0, g = e.length; a < g; a++)
      t.call(null, e[a], a, e);
  else {
    const p = r ? Object.getOwnPropertyNames(e) : Object.keys(e), w = p.length;
    let C;
    for (a = 0; a < w; a++)
      C = p[a], t.call(null, e[C], C, e);
  }
}
function Vn(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let a, g = r.length;
  for (; g-- > 0; )
    if (a = r[g], t === a.toLowerCase())
      return a;
  return null;
}
const go = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Xn = (e) => !fe(e) && e !== go, ac = (Zi = typeof Uint8Array < "u" && zr(Uint8Array), (e) => Zi && e instanceof Zi);
var Zi;
const cc = ht("HTMLFormElement"), Wn = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), lc = ht("RegExp"), Yn = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), a = {};
  pe(r, (g, p) => {
    let w;
    (w = t(g, p, e)) !== !1 && (a[p] = w || g);
  }), Object.defineProperties(e, a);
}, $i = "abcdefghijklmnopqrstuvwxyz", zn = "0123456789", Jn = { DIGIT: zn, ALPHA: $i, ALPHA_DIGIT: $i + $i.toUpperCase() + zn }, hc = ht("AsyncFunction"), tA = { isArray: Jt, isArrayBuffer: Gn, isBuffer: function(e) {
  return e !== null && !fe(e) && e.constructor !== null && !fe(e.constructor) && YA(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}, isFormData: (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || YA(e.append) && ((t = mi(e)) === "formdata" || t === "object" && YA(e.toString) && e.toString() === "[object FormData]"));
}, isArrayBufferView: function(e) {
  let t;
  return t = typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && Gn(e.buffer), t;
}, isString: ec, isNumber: Nn, isBoolean: (e) => e === !0 || e === !1, isObject: je, isPlainObject: Ge, isUndefined: fe, isDate: ic, isFile: rc, isBlob: nc, isRegExp: lc, isFunction: YA, isStream: (e) => je(e) && YA(e.pipe), isURLSearchParams: oc, isTypedArray: ac, isFileList: sc, forEach: pe, merge: function e() {
  const { caseless: t } = Xn(this) && this || {}, r = {}, a = (g, p) => {
    const w = t && Vn(r, p) || p;
    Ge(r[w]) && Ge(g) ? r[w] = e(r[w], g) : Ge(g) ? r[w] = e({}, g) : Jt(g) ? r[w] = g.slice() : r[w] = g;
  };
  for (let g = 0, p = arguments.length; g < p; g++)
    arguments[g] && pe(arguments[g], a);
  return r;
}, extend: (e, t, r, { allOwnKeys: a } = {}) => (pe(t, (g, p) => {
  r && YA(g) ? e[p] = uo(g, r) : e[p] = g;
}, { allOwnKeys: a }), e), trim: (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), stripBOM: (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), inherits: (e, t, r, a) => {
  e.prototype = Object.create(t.prototype, a), e.prototype.constructor = e, Object.defineProperty(e, "super", { value: t.prototype }), r && Object.assign(e.prototype, r);
}, toFlatObject: (e, t, r, a) => {
  let g, p, w;
  const C = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (g = Object.getOwnPropertyNames(e), p = g.length; p-- > 0; )
      w = g[p], a && !a(w, e, t) || C[w] || (t[w] = e[w], C[w] = !0);
    e = r !== !1 && zr(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, kindOf: mi, kindOfTest: ht, endsWith: (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const a = e.indexOf(t, r);
  return a !== -1 && a === r;
}, toArray: (e) => {
  if (!e)
    return null;
  if (Jt(e))
    return e;
  let t = e.length;
  if (!Nn(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, forEachEntry: (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const g = a.value;
    t.call(e, g[0], g[1]);
  }
}, matchAll: (e, t) => {
  let r;
  const a = [];
  for (; (r = e.exec(t)) !== null; )
    a.push(r);
  return a;
}, isHTMLForm: cc, hasOwnProperty: Wn, hasOwnProp: Wn, reduceDescriptors: Yn, freezeMethods: (e) => {
  Yn(e, (t, r) => {
    if (YA(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const a = e[r];
    YA(a) && (t.enumerable = !1, "writable" in t ? t.writable = !1 : t.set || (t.set = () => {
      throw Error("Can not rewrite read-only method '" + r + "'");
    }));
  });
}, toObjectSet: (e, t) => {
  const r = {}, a = (g) => {
    g.forEach((p) => {
      r[p] = !0;
    });
  };
  return Jt(e) ? a(e) : a(String(e).split(t)), r;
}, toCamelCase: (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(t, r, a) {
  return r.toUpperCase() + a;
}), noop: () => {
}, toFiniteNumber: (e, t) => (e = +e, Number.isFinite(e) ? e : t), findKey: Vn, global: go, isContextDefined: Xn, ALPHABET: Jn, generateString: (e = 16, t = Jn.ALPHA_DIGIT) => {
  let r = "";
  const { length: a } = t;
  for (; e--; )
    r += t[Math.random() * a | 0];
  return r;
}, isSpecCompliantForm: function(e) {
  return !!(e && YA(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}, toJSONObject: (e) => {
  const t = new Array(10), r = (a, g) => {
    if (je(a)) {
      if (t.indexOf(a) >= 0)
        return;
      if (!("toJSON" in a)) {
        t[g] = a;
        const p = Jt(a) ? [] : {};
        return pe(a, (w, C) => {
          const y = r(w, g + 1);
          !fe(y) && (p[C] = y);
        }), t[g] = void 0, p;
      }
    }
    return a;
  };
  return r(e, 0);
}, isAsyncFn: hc, isThenable: (e) => e && (je(e) || YA(e)) && YA(e.then) && YA(e.catch) };
function pA(e, t, r, a, g) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), a && (this.request = a), g && (this.response = g);
}
tA.inherits(pA, Error, { toJSON: function() {
  return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: tA.toJSONObject(this.config), code: this.code, status: this.response && this.response.status ? this.response.status : null };
} });
const qn = pA.prototype, Zn = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e) => {
  Zn[e] = { value: e };
}), Object.defineProperties(pA, Zn), Object.defineProperty(qn, "isAxiosError", { value: !0 }), pA.from = (e, t, r, a, g, p) => {
  const w = Object.create(qn);
  return tA.toFlatObject(e, w, function(C) {
    return C !== Error.prototype;
  }, (C) => C !== "isAxiosError"), pA.call(w, e.message, t, r, a, g), w.cause = e, w.name = e.name, p && Object.assign(w, p), w;
};
function Ar(e) {
  return tA.isPlainObject(e) || tA.isArray(e);
}
function fo(e) {
  return tA.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function $n(e, t, r) {
  return e ? e.concat(t).map(function(a, g) {
    return a = fo(a), !r && g ? "[" + a + "]" : a;
  }).join(r ? "." : "") : t;
}
const uc = tA.toFlatObject(tA, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Ci(e, t, r) {
  if (!tA.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData();
  const a = (r = tA.toFlatObject(r, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function(S, L) {
    return !tA.isUndefined(L[S]);
  })).metaTokens, g = r.visitor || Q, p = r.dots, w = r.indexes, C = (r.Blob || typeof Blob < "u" && Blob) && tA.isSpecCompliantForm(t);
  if (!tA.isFunction(g))
    throw new TypeError("visitor must be a function");
  function y(S) {
    if (S === null)
      return "";
    if (tA.isDate(S))
      return S.toISOString();
    if (!C && tA.isBlob(S))
      throw new pA("Blob is not supported. Use a Buffer instead.");
    return tA.isArrayBuffer(S) || tA.isTypedArray(S) ? C && typeof Blob == "function" ? new Blob([S]) : Buffer.from(S) : S;
  }
  function Q(S, L, H) {
    let j = S;
    if (S && !H && typeof S == "object") {
      if (tA.endsWith(L, "{}"))
        L = a ? L : L.slice(0, -2), S = JSON.stringify(S);
      else if (tA.isArray(S) && function(B) {
        return tA.isArray(B) && !B.some(Ar);
      }(S) || (tA.isFileList(S) || tA.endsWith(L, "[]")) && (j = tA.toArray(S)))
        return L = fo(L), j.forEach(function(B, J) {
          !tA.isUndefined(B) && B !== null && t.append(w === !0 ? $n([L], J, p) : w === null ? L : L + "[]", y(B));
        }), !1;
    }
    return !!Ar(S) || (t.append($n(H, L, p), y(S)), !1);
  }
  const b = [], E = Object.assign(uc, { defaultVisitor: Q, convertValue: y, isVisitable: Ar });
  if (!tA.isObject(e))
    throw new TypeError("data must be an object");
  return function S(L, H) {
    if (!tA.isUndefined(L)) {
      if (b.indexOf(L) !== -1)
        throw Error("Circular reference detected in " + H.join("."));
      b.push(L), tA.forEach(L, function(j, B) {
        (!(tA.isUndefined(j) || j === null) && g.call(t, j, tA.isString(B) ? B.trim() : B, H, E)) === !0 && S(j, H ? H.concat(B) : [B]);
      }), b.pop();
    }
  }(e), t;
}
function As(e) {
  const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Jr(e, t) {
  this._pairs = [], e && Ci(e, this, t);
}
const ts = Jr.prototype;
function dc(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function po(e, t, r) {
  if (!t)
    return e;
  const a = r && r.encode || dc, g = r && r.serialize;
  let p;
  if (p = g ? g(t, r) : tA.isURLSearchParams(t) ? t.toString() : new Jr(t, r).toString(a), p) {
    const w = e.indexOf("#");
    w !== -1 && (e = e.slice(0, w)), e += (e.indexOf("?") === -1 ? "?" : "&") + p;
  }
  return e;
}
ts.append = function(e, t) {
  this._pairs.push([e, t]);
}, ts.toString = function(e) {
  const t = e ? function(r) {
    return e.call(this, r, As);
  } : As;
  return this._pairs.map(function(r) {
    return t(r[0]) + "=" + t(r[1]);
  }, "").join("&");
};
class es {
  constructor() {
    this.handlers = [];
  }
  use(t, r, a) {
    return this.handlers.push({ fulfilled: t, rejected: r, synchronous: !!a && a.synchronous, runWhen: a ? a.runWhen : null }), this.handlers.length - 1;
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    tA.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Bo = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 }, gc = { isBrowser: !0, classes: { URLSearchParams: typeof URLSearchParams < "u" ? URLSearchParams : Jr, FormData: typeof FormData < "u" ? FormData : null, Blob: typeof Blob < "u" ? Blob : null }, protocols: ["http", "https", "file", "blob", "url", "data"] }, wo = typeof window < "u" && typeof document < "u", fc = (is = typeof navigator < "u" && navigator.product, wo && ["ReactNative", "NativeScript", "NS"].indexOf(is) < 0);
var is;
const pc = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ct = { ...Object.freeze(Object.defineProperty({ __proto__: null, hasBrowserEnv: wo, hasStandardBrowserEnv: fc, hasStandardBrowserWebWorkerEnv: pc }, Symbol.toStringTag, { value: "Module" })), ...gc };
function mo(e) {
  function t(r, a, g, p) {
    let w = r[p++];
    if (w === "__proto__")
      return !0;
    const C = Number.isFinite(+w), y = p >= r.length;
    return w = !w && tA.isArray(g) ? g.length : w, y ? (tA.hasOwnProp(g, w) ? g[w] = [g[w], a] : g[w] = a, !C) : (g[w] && tA.isObject(g[w]) || (g[w] = []), t(r, a, g[w], p) && tA.isArray(g[w]) && (g[w] = function(Q) {
      const b = {}, E = Object.keys(Q);
      let S;
      const L = E.length;
      let H;
      for (S = 0; S < L; S++)
        H = E[S], b[H] = Q[H];
      return b;
    }(g[w])), !C);
  }
  if (tA.isFormData(e) && tA.isFunction(e.entries)) {
    const r = {};
    return tA.forEachEntry(e, (a, g) => {
      t(function(p) {
        return tA.matchAll(/\w+|\[(\w*)]/g, p).map((w) => w[0] === "[]" ? "" : w[1] || w[0]);
      }(a), g, r, 0);
    }), r;
  }
  return null;
}
const De = { transitional: Bo, adapter: ["xhr", "http"], transformRequest: [function(e, t) {
  const r = t.getContentType() || "", a = r.indexOf("application/json") > -1, g = tA.isObject(e);
  if (g && tA.isHTMLForm(e) && (e = new FormData(e)), tA.isFormData(e))
    return a ? JSON.stringify(mo(e)) : e;
  if (tA.isArrayBuffer(e) || tA.isBuffer(e) || tA.isStream(e) || tA.isFile(e) || tA.isBlob(e))
    return e;
  if (tA.isArrayBufferView(e))
    return e.buffer;
  if (tA.isURLSearchParams(e))
    return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
  let p;
  if (g) {
    if (r.indexOf("application/x-www-form-urlencoded") > -1)
      return function(w, C) {
        return Ci(w, new ct.classes.URLSearchParams(), Object.assign({ visitor: function(y, Q, b, E) {
          return ct.isNode && tA.isBuffer(y) ? (this.append(Q, y.toString("base64")), !1) : E.defaultVisitor.apply(this, arguments);
        } }, C));
      }(e, this.formSerializer).toString();
    if ((p = tA.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
      const w = this.env && this.env.FormData;
      return Ci(p ? { "files[]": e } : e, w && new w(), this.formSerializer);
    }
  }
  return g || a ? (t.setContentType("application/json", !1), function(w, C, y) {
    if (tA.isString(w))
      try {
        return (C || JSON.parse)(w), tA.trim(w);
      } catch (Q) {
        if (Q.name !== "SyntaxError")
          throw Q;
      }
    return (y || JSON.stringify)(w);
  }(e)) : e;
}], transformResponse: [function(e) {
  const t = this.transitional || De.transitional, r = t && t.forcedJSONParsing, a = this.responseType === "json";
  if (e && tA.isString(e) && (r && !this.responseType || a)) {
    const g = !(t && t.silentJSONParsing) && a;
    try {
      return JSON.parse(e);
    } catch (p) {
      if (g)
        throw p.name === "SyntaxError" ? pA.from(p, pA.ERR_BAD_RESPONSE, this, null, this.response) : p;
    }
  }
  return e;
}], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: ct.classes.FormData, Blob: ct.classes.Blob }, validateStatus: function(e) {
  return e >= 200 && e < 300;
}, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
tA.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  De.headers[e] = {};
});
const Bc = tA.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]), rs = Symbol("internals");
function ue(e) {
  return e && String(e).trim().toLowerCase();
}
function hi(e) {
  return e === !1 || e == null ? e : tA.isArray(e) ? e.map(hi) : String(e);
}
function tr(e, t, r, a, g) {
  return tA.isFunction(a) ? a.call(this, t, r) : (g && (t = r), tA.isString(t) ? tA.isString(a) ? t.indexOf(a) !== -1 : tA.isRegExp(a) ? a.test(t) : void 0 : void 0);
}
class it {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, a) {
    const g = this;
    function p(C, y, Q) {
      const b = ue(y);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const E = tA.findKey(g, b);
      (!E || g[E] === void 0 || Q === !0 || Q === void 0 && g[E] !== !1) && (g[E || y] = hi(C));
    }
    const w = (C, y) => tA.forEach(C, (Q, b) => p(Q, b, y));
    return tA.isPlainObject(t) || t instanceof this.constructor ? w(t, r) : tA.isString(t) && (t = t.trim()) && !((C) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(C.trim()))(t) ? w(((C) => {
      const y = {};
      let Q, b, E;
      return C && C.split(`
`).forEach(function(S) {
        E = S.indexOf(":"), Q = S.substring(0, E).trim().toLowerCase(), b = S.substring(E + 1).trim(), !Q || y[Q] && Bc[Q] || (Q === "set-cookie" ? y[Q] ? y[Q].push(b) : y[Q] = [b] : y[Q] = y[Q] ? y[Q] + ", " + b : b);
      }), y;
    })(t), r) : t != null && p(r, t, a), this;
  }
  get(t, r) {
    if (t = ue(t)) {
      const a = tA.findKey(this, t);
      if (a) {
        const g = this[a];
        if (!r)
          return g;
        if (r === !0)
          return function(p) {
            const w = /* @__PURE__ */ Object.create(null), C = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
            let y;
            for (; y = C.exec(p); )
              w[y[1]] = y[2];
            return w;
          }(g);
        if (tA.isFunction(r))
          return r.call(this, g, a);
        if (tA.isRegExp(r))
          return r.exec(g);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = ue(t)) {
      const a = tA.findKey(this, t);
      return !(!a || this[a] === void 0 || r && !tr(0, this[a], a, r));
    }
    return !1;
  }
  delete(t, r) {
    const a = this;
    let g = !1;
    function p(w) {
      if (w = ue(w)) {
        const C = tA.findKey(a, w);
        !C || r && !tr(0, a[C], C, r) || (delete a[C], g = !0);
      }
    }
    return tA.isArray(t) ? t.forEach(p) : p(t), g;
  }
  clear(t) {
    const r = Object.keys(this);
    let a = r.length, g = !1;
    for (; a--; ) {
      const p = r[a];
      t && !tr(0, this[p], p, t, !0) || (delete this[p], g = !0);
    }
    return g;
  }
  normalize(t) {
    const r = this, a = {};
    return tA.forEach(this, (g, p) => {
      const w = tA.findKey(a, p);
      if (w)
        return r[w] = hi(g), void delete r[p];
      const C = t ? function(y) {
        return y.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (Q, b, E) => b.toUpperCase() + E);
      }(p) : String(p).trim();
      C !== p && delete r[p], r[C] = hi(g), a[C] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return tA.forEach(this, (a, g) => {
      a != null && a !== !1 && (r[g] = t && tA.isArray(a) ? a.join(", ") : a);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const a = new this(t);
    return r.forEach((g) => a.set(g)), a;
  }
  static accessor(t) {
    const r = (this[rs] = this[rs] = { accessors: {} }).accessors, a = this.prototype;
    function g(p) {
      const w = ue(p);
      r[w] || (function(C, y) {
        const Q = tA.toCamelCase(" " + y);
        ["get", "set", "has"].forEach((b) => {
          Object.defineProperty(C, b + Q, { value: function(E, S, L) {
            return this[b].call(this, y, E, S, L);
          }, configurable: !0 });
        });
      }(a, p), r[w] = !0);
    }
    return tA.isArray(t) ? t.forEach(g) : g(t), this;
  }
}
function er(e, t) {
  const r = this || De, a = t || r, g = it.from(a.headers);
  let p = a.data;
  return tA.forEach(e, function(w) {
    p = w.call(r, p, g.normalize(), t ? t.status : void 0);
  }), g.normalize(), p;
}
function Co(e) {
  return !(!e || !e.__CANCEL__);
}
function Me(e, t, r) {
  pA.call(this, e ?? "canceled", pA.ERR_CANCELED, t, r), this.name = "CanceledError";
}
it.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), tA.reduceDescriptors(it.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return { get: () => e, set(a) {
    this[r] = a;
  } };
}), tA.freezeMethods(it), tA.inherits(Me, pA, { __CANCEL__: !0 });
const wc = ct.hasStandardBrowserEnv ? { write(e, t, r, a, g, p) {
  const w = [e + "=" + encodeURIComponent(t)];
  tA.isNumber(r) && w.push("expires=" + new Date(r).toGMTString()), tA.isString(a) && w.push("path=" + a), tA.isString(g) && w.push("domain=" + g), p === !0 && w.push("secure"), document.cookie = w.join("; ");
}, read(e) {
  const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
  return t ? decodeURIComponent(t[3]) : null;
}, remove(e) {
  this.write(e, "", Date.now() - 864e5);
} } : { write() {
}, read: () => null, remove() {
} };
function vo(e, t) {
  return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? function(r, a) {
    return a ? r.replace(/\/?\/$/, "") + "/" + a.replace(/^\/+/, "") : r;
  }(e, t) : t;
}
const mc = ct.hasStandardBrowserEnv ? function() {
  const e = /(msie|trident)/i.test(navigator.userAgent), t = document.createElement("a");
  let r;
  function a(g) {
    let p = g;
    return e && (t.setAttribute("href", p), p = t.href), t.setAttribute("href", p), { href: t.href, protocol: t.protocol ? t.protocol.replace(/:$/, "") : "", host: t.host, search: t.search ? t.search.replace(/^\?/, "") : "", hash: t.hash ? t.hash.replace(/^#/, "") : "", hostname: t.hostname, port: t.port, pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname };
  }
  return r = a(window.location.href), function(g) {
    const p = tA.isString(g) ? a(g) : g;
    return p.protocol === r.protocol && p.host === r.host;
  };
}() : function() {
  return !0;
};
function ns(e, t) {
  let r = 0;
  const a = function(g, p) {
    g = g || 10;
    const w = new Array(g), C = new Array(g);
    let y, Q = 0, b = 0;
    return p = p !== void 0 ? p : 1e3, function(E) {
      const S = Date.now(), L = C[b];
      y || (y = S), w[Q] = E, C[Q] = S;
      let H = b, j = 0;
      for (; H !== Q; )
        j += w[H++], H %= g;
      if (Q = (Q + 1) % g, Q === b && (b = (b + 1) % g), S - y < p)
        return;
      const B = L && S - L;
      return B ? Math.round(1e3 * j / B) : void 0;
    };
  }(50, 250);
  return (g) => {
    const p = g.loaded, w = g.lengthComputable ? g.total : void 0, C = p - r, y = a(C);
    r = p;
    const Q = { loaded: p, total: w, progress: w ? p / w : void 0, bytes: C, rate: y || void 0, estimated: y && w && p <= w ? (w - p) / y : void 0, event: g };
    Q[t ? "download" : "upload"] = !0, e(Q);
  };
}
const yo = { http: null, xhr: typeof XMLHttpRequest < "u" && function(e) {
  return new Promise(function(t, r) {
    let a = e.data;
    const g = it.from(e.headers).normalize();
    let p, w, { responseType: C, withXSRFToken: y } = e;
    function Q() {
      e.cancelToken && e.cancelToken.unsubscribe(p), e.signal && e.signal.removeEventListener("abort", p);
    }
    if (tA.isFormData(a)) {
      if (ct.hasStandardBrowserEnv || ct.hasStandardBrowserWebWorkerEnv)
        g.setContentType(!1);
      else if ((w = g.getContentType()) !== !1) {
        const [H, ...j] = w ? w.split(";").map((B) => B.trim()).filter(Boolean) : [];
        g.setContentType([H || "multipart/form-data", ...j].join("; "));
      }
    }
    let b = new XMLHttpRequest();
    if (e.auth) {
      const H = e.auth.username || "", j = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      g.set("Authorization", "Basic " + btoa(H + ":" + j));
    }
    const E = vo(e.baseURL, e.url);
    function S() {
      if (!b)
        return;
      const H = it.from("getAllResponseHeaders" in b && b.getAllResponseHeaders());
      (function(j, B, J) {
        const iA = J.config.validateStatus;
        J.status && iA && !iA(J.status) ? B(new pA("Request failed with status code " + J.status, [pA.ERR_BAD_REQUEST, pA.ERR_BAD_RESPONSE][Math.floor(J.status / 100) - 4], J.config, J.request, J)) : j(J);
      })(function(j) {
        t(j), Q();
      }, function(j) {
        r(j), Q();
      }, { data: C && C !== "text" && C !== "json" ? b.response : b.responseText, status: b.status, statusText: b.statusText, headers: H, config: e, request: b }), b = null;
    }
    if (b.open(e.method.toUpperCase(), po(E, e.params, e.paramsSerializer), !0), b.timeout = e.timeout, "onloadend" in b ? b.onloadend = S : b.onreadystatechange = function() {
      b && b.readyState === 4 && (b.status !== 0 || b.responseURL && b.responseURL.indexOf("file:") === 0) && setTimeout(S);
    }, b.onabort = function() {
      b && (r(new pA("Request aborted", pA.ECONNABORTED, e, b)), b = null);
    }, b.onerror = function() {
      r(new pA("Network Error", pA.ERR_NETWORK, e, b)), b = null;
    }, b.ontimeout = function() {
      let H = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const j = e.transitional || Bo;
      e.timeoutErrorMessage && (H = e.timeoutErrorMessage), r(new pA(H, j.clarifyTimeoutError ? pA.ETIMEDOUT : pA.ECONNABORTED, e, b)), b = null;
    }, ct.hasStandardBrowserEnv && (y && tA.isFunction(y) && (y = y(e)), y || y !== !1 && mc(E))) {
      const H = e.xsrfHeaderName && e.xsrfCookieName && wc.read(e.xsrfCookieName);
      H && g.set(e.xsrfHeaderName, H);
    }
    a === void 0 && g.setContentType(null), "setRequestHeader" in b && tA.forEach(g.toJSON(), function(H, j) {
      b.setRequestHeader(j, H);
    }), tA.isUndefined(e.withCredentials) || (b.withCredentials = !!e.withCredentials), C && C !== "json" && (b.responseType = e.responseType), typeof e.onDownloadProgress == "function" && b.addEventListener("progress", ns(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && b.upload && b.upload.addEventListener("progress", ns(e.onUploadProgress)), (e.cancelToken || e.signal) && (p = (H) => {
      b && (r(!H || H.type ? new Me(null, e, b) : H), b.abort(), b = null);
    }, e.cancelToken && e.cancelToken.subscribe(p), e.signal && (e.signal.aborted ? p() : e.signal.addEventListener("abort", p)));
    const L = function(H) {
      const j = /^([-+\w]{1,25})(:?\/\/|:)/.exec(H);
      return j && j[1] || "";
    }(E);
    L && ct.protocols.indexOf(L) === -1 ? r(new pA("Unsupported protocol " + L + ":", pA.ERR_BAD_REQUEST, e)) : b.send(a || null);
  });
} };
tA.forEach(yo, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ss = (e) => `- ${e}`, Cc = (e) => tA.isFunction(e) || e === null || e === !1, bo = (e) => {
  e = tA.isArray(e) ? e : [e];
  const { length: t } = e;
  let r, a;
  const g = {};
  for (let p = 0; p < t; p++) {
    let w;
    if (r = e[p], a = r, !Cc(r) && (a = yo[(w = String(r)).toLowerCase()], a === void 0))
      throw new pA(`Unknown adapter '${w}'`);
    if (a)
      break;
    g[w || "#" + p] = a;
  }
  if (!a) {
    const p = Object.entries(g).map(([w, C]) => `adapter ${w} ` + (C === !1 ? "is not supported by the environment" : "is not available in the build"));
    throw new pA("There is no suitable adapter to dispatch the request " + (t ? p.length > 1 ? `since :
` + p.map(ss).join(`
`) : " " + ss(p[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT");
  }
  return a;
};
function ir(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Me(null, e);
}
function os(e) {
  return ir(e), e.headers = it.from(e.headers), e.data = er.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), bo(e.adapter || De.adapter)(e).then(function(t) {
    return ir(e), t.data = er.call(e, e.transformResponse, t), t.headers = it.from(t.headers), t;
  }, function(t) {
    return Co(t) || (ir(e), t && t.response && (t.response.data = er.call(e, e.transformResponse, t.response), t.response.headers = it.from(t.response.headers))), Promise.reject(t);
  });
}
const as = (e) => e instanceof it ? { ...e } : e;
function re(e, t) {
  t = t || {};
  const r = {};
  function a(Q, b, E) {
    return tA.isPlainObject(Q) && tA.isPlainObject(b) ? tA.merge.call({ caseless: E }, Q, b) : tA.isPlainObject(b) ? tA.merge({}, b) : tA.isArray(b) ? b.slice() : b;
  }
  function g(Q, b, E) {
    return tA.isUndefined(b) ? tA.isUndefined(Q) ? void 0 : a(void 0, Q, E) : a(Q, b, E);
  }
  function p(Q, b) {
    if (!tA.isUndefined(b))
      return a(void 0, b);
  }
  function w(Q, b) {
    return tA.isUndefined(b) ? tA.isUndefined(Q) ? void 0 : a(void 0, Q) : a(void 0, b);
  }
  function C(Q, b, E) {
    return E in t ? a(Q, b) : E in e ? a(void 0, Q) : void 0;
  }
  const y = { url: p, method: p, data: p, baseURL: w, transformRequest: w, transformResponse: w, paramsSerializer: w, timeout: w, timeoutMessage: w, withCredentials: w, withXSRFToken: w, adapter: w, responseType: w, xsrfCookieName: w, xsrfHeaderName: w, onUploadProgress: w, onDownloadProgress: w, decompress: w, maxContentLength: w, maxBodyLength: w, beforeRedirect: w, transport: w, httpAgent: w, httpsAgent: w, cancelToken: w, socketPath: w, responseEncoding: w, validateStatus: C, headers: (Q, b) => g(as(Q), as(b), !0) };
  return tA.forEach(Object.keys(Object.assign({}, e, t)), function(Q) {
    const b = y[Q] || g, E = b(e[Q], t[Q], Q);
    tA.isUndefined(E) && b !== C || (r[Q] = E);
  }), r;
}
const vc = "1.6.8", qr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  qr[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const cs = {};
qr.transitional = function(e, t, r) {
  function a(g, p) {
    return "[Axios v1.6.8] Transitional option '" + g + "'" + p + (r ? ". " + r : "");
  }
  return (g, p, w) => {
    if (e === !1)
      throw new pA(a(p, " has been removed" + (t ? " in " + t : "")), pA.ERR_DEPRECATED);
    return t && !cs[p] && (cs[p] = !0, console.warn(a(p, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(g, p, w);
  };
};
const Cr = { assertOptions: function(e, t, r) {
  if (typeof e != "object")
    throw new pA("options must be an object", pA.ERR_BAD_OPTION_VALUE);
  const a = Object.keys(e);
  let g = a.length;
  for (; g-- > 0; ) {
    const p = a[g], w = t[p];
    if (w) {
      const C = e[p], y = C === void 0 || w(C, p, e);
      if (y !== !0)
        throw new pA("option " + p + " must be " + y, pA.ERR_BAD_OPTION_VALUE);
    } else if (r !== !0)
      throw new pA("Unknown option " + p, pA.ERR_BAD_OPTION);
  }
}, validators: qr }, yt = Cr.validators;
class Dt {
  constructor(t) {
    this.defaults = t, this.interceptors = { request: new es(), response: new es() };
  }
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (a) {
      if (a instanceof Error) {
        let g;
        Error.captureStackTrace ? Error.captureStackTrace(g = {}) : g = new Error();
        const p = g.stack ? g.stack.replace(/^.+\n/, "") : "";
        a.stack ? p && !String(a.stack).endsWith(p.replace(/^.+\n.+\n/, "")) && (a.stack += `
` + p) : a.stack = p;
      }
      throw a;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}).url = t : r = t || {}, r = re(this.defaults, r);
    const { transitional: a, paramsSerializer: g, headers: p } = r;
    a !== void 0 && Cr.assertOptions(a, { silentJSONParsing: yt.transitional(yt.boolean), forcedJSONParsing: yt.transitional(yt.boolean), clarifyTimeoutError: yt.transitional(yt.boolean) }, !1), g != null && (tA.isFunction(g) ? r.paramsSerializer = { serialize: g } : Cr.assertOptions(g, { encode: yt.function, serialize: yt.function }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let w = p && tA.merge(p.common, p[r.method]);
    p && tA.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (H) => {
      delete p[H];
    }), r.headers = it.concat(w, p);
    const C = [];
    let y = !0;
    this.interceptors.request.forEach(function(H) {
      typeof H.runWhen == "function" && H.runWhen(r) === !1 || (y = y && H.synchronous, C.unshift(H.fulfilled, H.rejected));
    });
    const Q = [];
    let b;
    this.interceptors.response.forEach(function(H) {
      Q.push(H.fulfilled, H.rejected);
    });
    let E, S = 0;
    if (!y) {
      const H = [os.bind(this), void 0];
      for (H.unshift.apply(H, C), H.push.apply(H, Q), E = H.length, b = Promise.resolve(r); S < E; )
        b = b.then(H[S++], H[S++]);
      return b;
    }
    E = C.length;
    let L = r;
    for (S = 0; S < E; ) {
      const H = C[S++], j = C[S++];
      try {
        L = H(L);
      } catch (B) {
        j.call(this, B);
        break;
      }
    }
    try {
      b = os.call(this, L);
    } catch (H) {
      return Promise.reject(H);
    }
    for (S = 0, E = Q.length; S < E; )
      b = b.then(Q[S++], Q[S++]);
    return b;
  }
  getUri(t) {
    return po(vo((t = re(this.defaults, t)).baseURL, t.url), t.params, t.paramsSerializer);
  }
}
tA.forEach(["delete", "get", "head", "options"], function(e) {
  Dt.prototype[e] = function(t, r) {
    return this.request(re(r || {}, { method: e, url: t, data: (r || {}).data }));
  };
}), tA.forEach(["post", "put", "patch"], function(e) {
  function t(r) {
    return function(a, g, p) {
      return this.request(re(p || {}, { method: e, headers: r ? { "Content-Type": "multipart/form-data" } : {}, url: a, data: g }));
    };
  }
  Dt.prototype[e] = t(), Dt.prototype[e + "Form"] = t(!0);
});
class Zr {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(g) {
      r = g;
    });
    const a = this;
    this.promise.then((g) => {
      if (!a._listeners)
        return;
      let p = a._listeners.length;
      for (; p-- > 0; )
        a._listeners[p](g);
      a._listeners = null;
    }), this.promise.then = (g) => {
      let p;
      const w = new Promise((C) => {
        a.subscribe(C), p = C;
      }).then(g);
      return w.cancel = function() {
        a.unsubscribe(p);
      }, w;
    }, t(function(g, p, w) {
      a.reason || (a.reason = new Me(g, p, w), r(a.reason));
    });
  }
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  subscribe(t) {
    this.reason ? t(this.reason) : this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  static source() {
    let t;
    return { token: new Zr(function(r) {
      t = r;
    }), cancel: t };
  }
}
const vr = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
Object.entries(vr).forEach(([e, t]) => {
  vr[t] = e;
});
const EA = function e(t) {
  const r = new Dt(t), a = uo(Dt.prototype.request, r);
  return tA.extend(a, Dt.prototype, r, { allOwnKeys: !0 }), tA.extend(a, r, null, { allOwnKeys: !0 }), a.create = function(g) {
    return e(re(t, g));
  }, a;
}(De);
EA.Axios = Dt, EA.CanceledError = Me, EA.CancelToken = Zr, EA.isCancel = Co, EA.VERSION = vc, EA.toFormData = Ci, EA.AxiosError = pA, EA.Cancel = EA.CanceledError, EA.all = function(e) {
  return Promise.all(e);
}, EA.spread = function(e) {
  return function(t) {
    return e.apply(null, t);
  };
}, EA.isAxiosError = function(e) {
  return tA.isObject(e) && e.isAxiosError === !0;
}, EA.mergeConfig = re, EA.AxiosHeaders = it, EA.formToJSON = (e) => mo(tA.isHTMLForm(e) ? new FormData(e) : e), EA.getAdapter = bo, EA.HttpStatusCode = vr, EA.default = EA;
const yc = { production: !0, name: "production", apiBaseUrl: "https://api.shakebugs.com/api/2.0/" }, Ot = class Ot {
  constructor() {
    AA(this, "axios");
    EA.defaults.withCredentials = !1, this.axios = EA.create({ baseURL: yc.apiBaseUrl });
  }
  static getInstance() {
    return Ot.instance || (Ot.instance = new Ot()), Ot.instance;
  }
  get({ resource: t, config: r }) {
    return this.axios.get(t, r);
  }
  post({ resource: t, data: r, config: a }) {
    return this.axios.post(t, r, a);
  }
  patch({ resource: t, data: r, config: a }) {
    return this.axios.patch(t, this.formatPatchData(r), a);
  }
  put({ resource: t, data: r, config: a }) {
    return this.axios.put(t, r, a);
  }
  delete({ resource: t, config: r }) {
    return this.axios.delete(t, r);
  }
  formatPatchData(t) {
    return Object.keys(t).map((r) => ({ op: "replace", path: "/" + r, value: t[r] }));
  }
};
AA(Ot, "instance");
let yr = Ot;
class bc {
  constructor({ apiKey: t, version: r, bundleId: a, deviceId: g }) {
    AA(this, "baseApi");
    AA(this, "apiKey");
    AA(this, "version");
    AA(this, "bundleId");
    AA(this, "deviceId");
    this.baseApi = yr.getInstance(), this.apiKey = t, this.version = r, this.bundleId = a, this.deviceId = g, this.setDefaultHeaders();
  }
  setDefaultHeaders() {
    this.baseApi.axios.interceptors.request.use((t) => (t.headers && (t.headers["X-OS"] = "Web", t.headers["X-PLATFORM"] = "Web", t.headers["X-API-KEY"] = this.apiKey, t.headers["X-DEVICE-ID"] = this.deviceId, t.headers["X-APP-ID"] = this.bundleId, t.headers["X-SHAKE-VERSION"] = this.version), t), (t) => Promise.reject(t));
  }
  registerApp() {
    return this.baseApi.get({ resource: "/issue_tracking/apps" });
  }
  sendFeedback(t) {
    return this.baseApi.post({ resource: "/issue_tracking/apps", data: t, config: { headers: { "Content-Type": "application/json" } } });
  }
  uploadFile(t) {
    const r = new FormData();
    return r.append("file", t), this.baseApi.post({ resource: "/files", data: r, config: { headers: { "Content-Type": "multipart/form-data" } } });
  }
}
var yA = ((e) => (e[e.IMAGE = 0] = "IMAGE", e[e.VIDEO = 1] = "VIDEO", e[e.FILE = 2] = "FILE", e))(yA || {});
const $r = "shakeSdk: ", mt = (e) => {
}, ls = (e) => {
  console.info(`${$r} ${e}`);
}, Ne = (e) => {
  console.warn(`${$r} ${e}`);
}, An = (e) => {
  console.error(`${$r} ${e}`);
}, XA = (e) => {
  const t = document.createElement("img");
  return t.draggable = !1, t.classList.add("shake-sdk-image"), e && (t.src = e), t;
}, tn = (e) => {
  const t = document.createElement("p");
  return t.classList.add("shake-sdk-text-p1"), t.innerText = e, t;
}, en = (e) => {
  const t = document.createElement("p");
  return t.classList.add("shake-sdk-text-p3"), t.innerText = e, t;
}, rn = (e) => {
  const t = document.createElement("p");
  return t.classList.add("shake-sdk-text-h2"), t.innerText = e, t;
}, hs = (e) => {
  const t = document.createElement("p");
  return t.classList.add("shake-sdk-text-button"), t.innerText = e, t;
}, Qo = (e) => {
  const t = document.createElement("p");
  return t.classList.add("shake-sdk-text-accent-button"), t.innerText = e, t;
}, gA = async (e) => new CSSStyleSheet().replace(e), kt = (e) => {
  (async () => await Promise.all([gA(".shake-sdk-bubble{padding:0;border-radius:100px;border-width:0;cursor:pointer;display:flex;align-items:center;justify-content:center;position:fixed;background-color:#fff;width:50px;height:50px;z-index:2147483647;transition:none}"), gA(".shake-sdk-button{background-color:var(--shake-sdk-color-accent);padding:9px 20px 11px;border-radius:var(--shake-sdk-border-radius-light);display:flex;justify-content:center;align-items:center;cursor:pointer;border:none}.shake-sdk-button:disabled{cursor:not-allowed;opacity:.3}"), gA(".shake-sdk-card{flex:1;background-color:var(--shake-sdk-bg-color-primary);border-radius:var(--shake-sdk-border-radius)}"), gA(".shake-sdk-circle-button{padding:0;border-radius:100px;border-width:0;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:5}.shake-sdk-circle-button:hover{opacity:.8}"), gA(""), gA(".shake-sdk-divider-vertical{height:100%;width:1px;background-color:var(--shake-sdk-bg-color-outline-inversed);margin:6px 10px}.shake-sdk-divider-horizontal{width:100%;height:1px;background-color:var(--shake-sdk-bg-color-outline-inversed);margin:6px 10px}"), gA(""), gA(".shake-sdk-context-menu{position:fixed;display:none;width:260px;z-index:2147483647;border-radius:10px;border-width:1px;border-color:var(--shake-sdk-bg-color-outline-inversed);padding:8px 0;background-color:var(--shake-sdk-bg-color-primary-inversed-highlight);box-shadow:0 2px 10px #1c1c1e}"), gA(".shake-sdk-context-menu-header{background-color:transparent;border:0;display:flex;width:100%;padding:8px 20px;cursor:pointer}.shake-sdk-context-menu-header-text{color:var(--shake-sdk-text-color-secondary);font-size:12px}"), gA(".shake-sdk-context-menu-item{background-color:transparent;border:0;display:flex;width:100%;padding:8px 20px;cursor:pointer}.shake-sdk-context-menu-item:hover{background-color:var(--shake-sdk-bg-color-outline-inversed)}.shake-sdk-context-menu-item img{width:20px;height:20px;margin-right:10px}.shake-sdk-context-menu-item p{color:var(--shake-sdk-text-color-popup-menu-item)}"), gA(".shake-sdk-select-dropdown{border-radius:var(--shake-sdk-border-radius-light);border:1px solid var(--shake-sdk-bg-color-primary-highlight);background:var(--shake-sdk-bg-color-secondary);padding:9px 18px 12px 12px;display:flex;flex-direction:column;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.shake-sdk-select-dropdown.active{border:1px solid var(--shake-sdk-color-accent)}.shake-sdk-dropdown-icon{position:absolute;right:16px;top:16px;cursor:pointer}.shake-sdk-select-dropdown-label{font-size:12px;color:var(--shake-sdk-text-color-secondary);font-family:Roobert,serif;-webkit-font-smoothing:antialiased;cursor:pointer;-webkit-user-select:none;user-select:none}.shake-sdk-select-dropdown-chosen{color:var(--shake-sdk-text-color-primary)}.shake-sdk-select-options{padding:8px 0;margin-top:2px;background:var(--shake-sdk-bg-color-secondary);border-radius:var(--shake-sdk-border-radius-light);border:1px solid var(--shake-sdk-bg-color-primary-highlight);list-style-type:none;display:none;position:absolute;width:333px;z-index:1}.shake-sdk-select-option{list-style-type:none;font-family:Roobert,serif;padding:10px 20px 12px 12px;cursor:pointer;color:var(--shake-sdk-text-color-primary);font-size:14px;font-weight:500}.shake-sdk-select-option:hover{background-color:var(--shake-sdk-bg-color-primary-highlight)}"), gA(".shake-sdk-palette{display:flex;flex-direction:row}.shake-sdk-palette-close{outline:none;border:none;background:transparent;height:20px;width:20px;margin-left:10px;margin-right:10px;padding:0}.shake-sdk-palette-close:hover{opacity:.7}"), gA(".shake-sdk-color-button{outline:none;border:none;background:transparent;border-radius:50%;height:20px;width:20px;margin-left:12px;margin-right:12px;padding:0}.shake-sdk-color-button:hover{opacity:.7}"), gA(".shake-sdk-sheet-background{position:fixed;top:0;left:0;width:100%;height:100%;z-index:2147483647;display:flex;flex-direction:column-reverse;background-color:#000000b3;box-sizing:border-box}.shake-sdk-sheet{padding:40px;display:flex;flex-direction:column;background-color:var(--shake-sdk-bg-color-primary);border-radius:var(--shake-sdk-border-radius) var(--shake-sdk-border-radius) 0 0}.shake-sdk-sheet>p{text-align:center;margin-bottom:25px}.shake-sdk-sheet-item{cursor:pointer;display:flex;flex-direction:row;background-color:transparent;border:0;padding:12px;margin:0}.shake-sdk-sheet-item:hover{background-color:var(--shake-sdk-bg-color-primary-highlight)}.shake-sdk-sheet-item img{text-align:center;margin-right:12px;width:27px;height:27px}"), gA(".shake-sdk-text-p1{font-size:16px;font-weight:500;line-height:20px;letter-spacing:0;color:var(--shake-sdk-text-color-primary);-webkit-font-smoothing:antialiased;margin:0}.shake-sdk-text-p2{font-size:14px;font-weight:500;line-height:18px;letter-spacing:0;color:var(--shake-sdk-text-color-secondary);-webkit-font-smoothing:antialiased;margin:0}.shake-sdk-text-p3{color:var(--shake-sdk-text-color-secondary);font-size:12px;font-weight:500;line-height:16px;letter-spacing:0;-webkit-font-smoothing:antialiased;margin:0}.shake-sdk-text-h2{font-size:24px;font-weight:700;line-height:32px;letter-spacing:0;color:var(--shake-sdk-text-color-primary);-webkit-font-smoothing:antialiased;margin:0}.shake-sdk-text-button{font-size:14px;font-weight:500;line-height:18px;letter-spacing:0;color:var(--shake-sdk-button-accent-text-color);-webkit-font-smoothing:antialiased;margin:0}.shake-sdk-text-accent-button{font-size:14px;font-weight:700;line-height:20px;letter-spacing:0;color:var(--shake-sdk-button-accent-text-color);-webkit-font-smoothing:antialiased;margin:0}.shake-sdk-text-tooltip{font-size:14px;font-weight:500;line-height:18px;letter-spacing:0;color:var(--shake-sdk-text-color-tooltip);-webkit-font-smoothing:antialiased;margin:0}"), gA(".shake-sdk-textarea-container{width:100%;display:flex;position:relative;z-index:0}.shake-sdk-textarea{flex:1;background-color:transparent;border:1px solid var(--shake-sdk-bg-color-primary-highlight);border-radius:var(--shake-sdk-border-radius-light);font-family:Roobert,serif;padding:28px 12px 12px;resize:none;width:100%;color:var(--shake-sdk-text-color-primary);font-size:16px}.shake-sdk-textarea:focus-visible{outline:none;border:1px solid var(--shake-sdk-color-accent)}.shake-sdk-textarea::placeholder{color:var(--shake-sdk-text-color-secondary)}.shake-sdk-textarea-label{position:absolute;font-family:Roobert,serif;top:28px;left:2px;font-size:12px;color:var(--shake-sdk-text-color-secondary);pointer-events:none;transform-origin:top left;transform:translateY(-50%) translate(10px)}"), gA(".toast-notification{width:300px;max-height:min-content;bottom:0;margin-bottom:20px;opacity:1;margin-left:0;top:20px;right:20px;position:fixed;z-index:2147483647;display:flex;flex-direction:row;cursor:default;border:1px solid var(--shake-sdk-bg-color-outline-inversed);border-radius:var(--shake-sdk-border-radius-light);background:var(--shake-sdk-bg-color-primary-inversed-highlight);color:var(--shake-sdk-text-color-popup-menu-item);box-shadow:0 2px 10px var(--shake-sdk-bg-color-primary-inversed)}.message-container{width:88%;padding-bottom:14px;padding-left:20px;color:var(--shake-sdk-text-color-popup-menu-item);border-radius:var(--shake-sdk-border-radius-light);cursor:default;font-size:14px;font-family:Roobert,serif;background:var(--shake-sdk-bg-color-primary-inversed-highlight)}.title-container{width:88%;padding-left:20px;padding-bottom:4px;color:var(--shake-sdk-text-color-popup-menu-item);border-radius:var(--shake-sdk-border-radius-light);cursor:default;font-size:16px;font-family:Roobert,serif;background:var(--shake-sdk-bg-color-primary-inversed-highlight)}.content-container{width:88%;padding-top:14px;padding-left:20px;color:var(--shake-sdk-text-color-popup-menu-item);border-radius:var(--shake-sdk-border-radius-light);cursor:default;font-size:14px;font-family:Roobert,serif;background:var(--shake-sdk-bg-color-primary-inversed-highlight);display:flex;flex-direction:column}.close-notification{width:12%;height:32px}.close-notification>img{padding-top:8px;padding-left:5px;font-weight:900;color:var(--shake-sdk-text-color-popup-menu-item);cursor:pointer}"), gA(".shake-sdk-toolbar{width:100%;height:32px;background-color:transparent;display:flex;flex-direction:row;justify-content:right}.shake-sdk-toolbar-button{display:flex;align-items:center;justify-content:center;border:none;cursor:pointer;width:32px;height:32px;background-color:transparent;margin-left:-10px}.shake-sdk-toolbar-button:hover{opacity:.7}@media only screen and (min-width: 1025px){.shake-sdk-toolbar{display:none}}"), gA(".shake-sdk-tooltip{position:fixed;display:none;z-index:5;padding:6px 12px 8px;background-color:var(--shake-sdk-bg-color-primary-inversed-highlight);box-shadow:0 2px 10px #1c1c1e;opacity:.9;border-radius:5px;border:1px solid var(--shake-sdk-bg-color-outline-inversed);background:var(--shake-sdk-bg-color-tooltip)}"), gA(".shake-sdk-video{width:100%}"), gA(".shake-sdk-main-button{position:fixed;top:50%;right:-32px;height:28px;min-width:138px;z-index:2147483647;transform:rotate(-90deg);margin-top:-14px;border-radius:var(--shake-sdk-button-border-radius);background:var(--shake-sdk-pureWhite);padding:4px 10px 3px 7px;border:1px solid var(--shake-sdk-grey30)}.shake-sdk-main-button-icon{margin-right:4px;width:21px;height:21px;border-radius:4px}.shake-sdk-main-button-text{color:var(--shake-sdk-text-color-primary);letter-spacing:-.04em}"), gA(".shake-sdk-content{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;background-color:#000000b3;z-index:2147483647;overflow:hidden}.shake-sdk-content-wrap{flex:1;display:flex;flex-direction:row;padding:40px}.shake-sdk-content-left{display:flex;flex:1;margin-right:20px;position:relative}.shake-sdk-content-right{display:flex;flex-shrink:0}.shake-sdk-close-button{position:absolute;top:-15px;left:-15px;width:40px;height:40px}@media only screen and (max-width: 1024px){.shake-sdk-content-wrap{background-color:var(--shake-sdk-bg-color-primary);padding:0}.shake-sdk-content-left{display:none}.shake-sdk-content-right{flex:1}.shake-sdk-close-button{display:none}}.shake-sdk-content p,h1,h2,h3,ul,li,label,div{font-family:Roobert,serif;margin:0}.shake-sdk-sheet p,h1,h2,h3,ul,li,label,div{font-family:Roobert,serif}.shake-sdk-content *{scrollbar-width:thin;scrollbar-color:#2C2C2E transparent}.shake-sdk-content *::-webkit-scrollbar{width:6px}.shake-sdk-content *::-webkit-scrollbar-track{background:none}.shake-sdk-content *::-webkit-scrollbar-thumb{background-color:#2c2c2e;border-radius:10px}.shake-sdk-content ::-webkit-scrollbar-corner{background-color:transparent}"), gA(".shake-sdk-new-ticket{padding:32px 20px;display:flex;flex-direction:column;justify-content:space-between;width:336px;background-color:var(--shake-sdk-bg-color-primary)}.shake-sdk-new-ticket-form{display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden}.shake-sdk-new-ticket-title{padding-bottom:32px}.shake-sdk-styled-textarea{padding-top:12px;margin-bottom:12px}.shake-sdk-submit-button{background-color:var(--shake-sdk-color-accent);padding:9px 20px 11px;border-radius:var(--shake-sdk-border-radius-light)}.shake-sdk-new-ticket *{scrollbar-color:#e8e8e8 transparent!important}.shake-sdk-new-ticket *::-webkit-scrollbar-thumb{background-color:#e8e8e8!important}@media only screen and (max-width: 1024px){.shake-sdk-new-ticket{width:0}}"), gA(".shake-sdk-attachments-items-small{display:flex;flex-direction:row;min-height:210px;width:100%;overflow-x:auto;overflow-y:hidden}@media only screen and (min-width: 1025px){.shake-sdk-attachments-items-small{display:none}}"), gA(".shake-sdk-attachment-item-small{display:flex;min-width:100px;max-width:100px;height:200px;margin-right:10px;cursor:pointer;overflow:hidden;position:relative}.shake-sdk-attachment-item-remove-small{position:absolute;top:15px;right:15px;width:30px;height:30px;background-color:var(--shake-sdk-bg-color-primary-inversed);opacity:.7}.shake-sdk-attachment-item-thumbnail-small{background-color:#000;height:100%;width:100%;object-fit:cover;border-radius:10px}.shake-sdk-file-thumbnail-small{box-sizing:border-box;padding:10px;border:2px solid var(--shake-sdk-bg-color-outline);background-color:var(--shake-sdk-bg-color-primary);overflow:hidden;word-wrap:break-word;justify-content:end;flex-direction:column;display:flex}"), gA(".shake-sdk-attachments-add-item-small{display:flex;min-width:100px;max-width:100px;height:200px;margin-right:10px;align-items:center;justify-content:center;overflow:hidden;position:relative}.shake-sdk-attachment-add-button-small{width:29px;height:29px;cursor:pointer;background-color:var(--shake-sdk-bg-color-secondary)}"), gA(".shake-sdk-attachments-card{padding:20px;display:flex;flex-direction:row;background-color:var(--shake-sdk-bg-color-primary-inversed);animation:showAttachments .2s ease-in forwards;translate:25px}.shake-sdk-attachments-page{display:flex;flex-direction:row;width:100%}.shake-sdk-attachments-list-wrap{display:flex;margin-right:12px;flex-shrink:0}.shake-sdk-attachments-preview-wrap{display:flex;flex:1}@keyframes showAttachments{0%{opacity:0;transform:translate(0)}to{opacity:1;transform:translate(-25px)}}@media only screen and (max-width: 1024px){.shake-sdk-attachments-card{display:none}}"), gA(".shake-sdk-attachments-items{display:flex;flex-direction:column;overflow:auto;overflow-x:hidden}"), gA(".shake-sdk-attachments-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1}.shake-sdk-attachments-empty-dragdrop{display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;padding:10px 20px;cursor:pointer}.shake-sdk-attachments-empty-dragdrop:hover,.hover{background-color:var(--shake-sdk-bg-color-outline-inversed);border-radius:10px}.shake-sdk-attachments-empty-buttons{display:flex;flex-direction:row;margin-top:50px}.shake-sdk-attachments-empty-buttons img{margin-right:10px}.shake-sdk-attachments-empty-buttons button{height:36px;margin-right:20px;background-color:var(--shake-sdk-button-color);color:var(--shake-sdk-button-text-color);border:1px solid var(--shake-sdk-button-border-color)}.shake-sdk-attachments-empty-buttons button:hover{opacity:.7}.shake-sdk-attachments-empty-buttons>div{display:flex;flex-direction:row;margin-top:20px}.shake-sdk-attachments-empty-buttons>p{max-width:300px;text-align:center;font-size:18px}"), gA(".shake-sdk-attachment-item{width:140px;display:flex;flex-direction:column;margin-bottom:20px;cursor:pointer}.shake-sdk-attachment-item-card{position:relative;padding:8px;background-color:transparent}.shake-sdk-attachment-item-selected .shake-sdk-attachment-item-card{background-color:var(--shake-sdk-bg-color-primary-inversed-highlight)}.shake-sdk-attachment-remove{position:absolute;top:15px;right:15px;width:30px;height:30px;background-color:var(--shake-sdk-bg-color-primary-inversed);opacity:.7}.shake-sdk-attachment-item-thumbnail{background-color:transparent;width:100%;height:61px;object-fit:cover;border-radius:10px}.shake-sdk-attachment-item-title{display:flex;justify-content:center}.shake-sdk-attachment-title-box{display:flex;width:78px;height:20px;margin:2px;text-align:center;align-items:center;justify-content:center;border-radius:4px;background-color:transparent}.shake-sdk-attachment-item-selected .shake-sdk-attachment-title-box{background-color:var(--shake-sdk-color-accent-dark)}.shake-sdk-attachment-title-box p{color:var(--shake-sdk-button-accent-text-color)}.shake-sdk-file-thumbnail{box-sizing:border-box;padding:10px;border:2px solid var(--shake-sdk-bg-color-outline-inversed);background-color:var(--shake-sdk-bg-color-primary-inversed-highlight);overflow:hidden;word-wrap:break-word;justify-content:center;align-items:center;flex-direction:column;display:flex}"), gA(".shake-sdk-attachments-add-item{width:140px;display:flex;align-items:center;justify-content:center}.shake-sdk-attachment-add-button{width:29px;height:29px;background-color:var(--shake-sdk-bg-color-primary-inversed-highlight)}"), gA(".shake-sdk-attachments-preview{margin-top:36px;display:flex;flex-direction:column;overflow:hidden;width:100%}"), gA(".shake-sdk-image-preview{display:flex;flex-direction:column;-webkit-user-select:none;user-select:none;width:100%;min-height:0;max-height:100%;flex:1}.shake-sdk-image-preview-image-container{display:flex;flex:1;align-items:center;flex-direction:column;position:relative;min-height:0;max-height:100%}.shake-sdk-image-preview-image{max-width:100%;max-height:100%;min-height:0;height:auto;width:auto;border-radius:10px}.shake-sdk-image-preview-toolbox-container{flex:0 0 50px;display:flex;flex-direction:column;align-items:center;padding-top:50px;padding-bottom:50px}.shake-sdk-drawing-toolbox{height:48px;width:316px;display:flex;align-items:center;justify-content:center;border-radius:24px;padding:0 10px;border:1px solid var(--shake-sdk-bg-color-outline-inversed);background:var(--shake-sdk-bg-color-primary-inversed-highlight)}.shake-sdk-drawing-toolbox-buttons{display:flex;flex-direction:row;align-items:center;height:100%;padding:6px 0;box-sizing:border-box}.shake-sdk-drawing-toolbox-colors{display:none;flex-direction:row;align-items:center;height:100%;padding:6px 0;box-sizing:border-box;animation:shakeToolboxFadeIn .2s ease-in-out}@keyframes shakeToolboxFadeIn{0%{opacity:0}to{opacity:1}}"), gA(".shake-sdk-video-preview{height:100%}.shake-sdk-video-preview video{border-radius:10px;display:block;max-width:100%;max-height:100%;height:auto;width:auto}"), gA(".shake-sdk-image-preview-root-fs{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;background-color:var(--shake-sdk-bg-color-primary-inversed);z-index:2147483647}.shake-sdk-image-preview-toolbar-fs{width:100%;flex:0 0 32px;background-color:transparent;display:flex;flex-direction:row;justify-content:right}.shake-sdk-image-preview-content-fs{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;margin:32px;min-height:0}"), gA(".shake-sdk-video-preview-root-fs{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;background-color:var(--shake-sdk-bg-color-primary-inversed);z-index:2147483647}.shake-sdk-video-preview-toolbar-fs{width:100%;height:32px;background-color:transparent;display:flex;flex-direction:row;justify-content:right}.shake-sdk-video-preview-fs{width:100%;height:100%}"), gA(`.shake-sdk-canvas{position:absolute;cursor:url("data:image/svg+xml,%3csvg%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Pen,%20Square%202'%20clip-path='url(%23clip0_15240_1054)'%3e%3cg%20id='Group'%3e%3cg%20id='Vector'%20filter='url(%23filter0_d_15240_1054)'%3e%3cpath%20d='M17.4366%2030.7725C17.092%2031.1171%2016.6263%2031.3096%2016.1405%2031.3096H12.4463V27.6155C12.4463%2027.1296%2012.6406%2026.664%2012.9835%2026.3193L25.6775%2013.6161C26.9095%2012.3841%2028.9078%2012.3841%2030.1398%2013.6161C31.3736%2014.8481%2031.3718%2016.8465%2030.1398%2018.0785L17.4366%2030.7725Z'%20fill='white'/%3e%3cpath%20d='M10.9463%2031.3096C10.9463%2032.1381%2011.6179%2032.8096%2012.4463%2032.8096H16.1405C17.0238%2032.8096%2017.8709%2032.4593%2018.4969%2031.8335C18.497%2031.8334%2018.4972%2031.8333%2018.4973%2031.8331L31.2001%2019.1395L31.2005%2019.1391C33.0172%2017.3224%2033.0213%2014.3737%2031.1997%2012.5547C29.3818%2010.7377%2026.4343%2010.738%2024.6168%2012.5555L24.6164%2012.5559L11.9224%2025.259L11.92%2025.2615C11.3009%2025.8839%2010.9463%2026.7285%2010.9463%2027.6155V31.3096Z'%20stroke='white'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cpath%20id='Vector_2'%20d='M17.4366%2030.7725C17.092%2031.1171%2016.6263%2031.3096%2016.1405%2031.3096H12.4463V27.6155C12.4463%2027.1296%2012.6406%2026.664%2012.9835%2026.3193L25.6775%2013.6161C26.9095%2012.3841%2028.9078%2012.3841%2030.1398%2013.6161C31.3736%2014.8481%2031.3718%2016.8465%2030.1398%2018.0785L17.4366%2030.7725Z'%20fill='white'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_3'%20d='M21.6328%2017.6733L26.0878%2022.1283'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_4'%20d='M29.2484%2018.9675L30.9021%2020.6212C31.7711%2021.492%2031.7711%2022.9019%2030.9021%2023.7709L27.8936%2026.7794'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_15240_1054'%20x='7.44629'%20y='9.69214'%20width='28.6182'%20height='28.6174'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='2'/%3e%3cfeGaussianBlur%20stdDeviation='1'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_15240_1054'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_15240_1054'%20result='shape'/%3e%3c/filter%3e%3cclipPath%20id='clip0_15240_1054'%3e%3crect%20width='44'%20height='44'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e") 10 30,auto;left:50%!important;transform:translate(-50%);z-index:99999}`), gA(".shake-sdk-attachments-drawing-button{outline:none;border:none;background:transparent;width:42px;height:42px;padding:0}.shake-sdk-attachments-drawing-button:hover{opacity:.7}")]))().then((t) => e.adoptedStyleSheets = t);
}, vi = (e, t) => {
  const r = rn(e), a = tn(t), g = document.createElement("div");
  g.classList.add("shake-sdk-sheet"), g.appendChild(r), g.appendChild(a);
  const p = document.createElement("div");
  p.classList.add("shake-sdk-sheet-background"), p.appendChild(g), p.onclick = () => w.remove();
  const w = document.createElement("div"), C = w.attachShadow({ mode: "open" });
  return C.appendChild(p), kt(C), w;
}, Fo = (e, t) => {
  const r = rn(e), a = document.createElement("div");
  a.classList.add("shake-sdk-sheet"), a.appendChild(r), t.forEach((C) => {
    a.appendChild(Qc(C, () => {
      C.onClick(), p.remove();
    }));
  });
  const g = document.createElement("div");
  g.classList.add("shake-sdk-sheet-background"), g.appendChild(a), g.onclick = () => p.remove();
  const p = document.createElement("div"), w = p.attachShadow({ mode: "open" });
  return w.appendChild(g), kt(w), p;
}, Qc = (e, t) => {
  const r = XA(e.icon), a = tn(e.text), g = document.createElement("button");
  return g.classList.add("shake-sdk-sheet-item"), g.onclick = t, g.appendChild(r), g.appendChild(a), g;
}, Se = (e) => {
  document.body.appendChild(e);
}, uA = () => {
  const e = document.createElement("div");
  return e.classList.add("shake-sdk-container"), e;
};
class Te {
  constructor(t, r, a = 4e3) {
    AA(this, "title");
    AA(this, "message");
    AA(this, "time");
    AA(this, "element");
    this.title = t, this.message = r, this.time = a, this.element = null;
    const g = uA();
    g.classList.add("toast-notification"), this.element = g;
    const p = document.getElementsByClassName("toast-notification");
    g.style.marginBottom = 55 * p.length + "px";
    const w = uA();
    if (w.classList.add("content-container"), this.title) {
      const S = uA();
      S.classList.add("title-container"), S.textContent = this.title, w.appendChild(S);
    }
    const C = uA();
    C.classList.add("message-container"), C.textContent = this.message, w.appendChild(C), g.appendChild(w);
    const y = uA();
    y.classList.add("close-notification");
    const Q = XA("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14021_39143)'%3e%3cpath%20d='M16%208L8%2016'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16%2016.001L8%208.00098'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14021_39143'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
    y.appendChild(Q), g.append(y);
    const b = document.createElement("div"), E = b.attachShadow({ mode: "open" });
    E.appendChild(g), kt(E), document.body.appendChild(b), setTimeout(function() {
      b.remove();
    }, this.time), y.addEventListener("click", () => {
      g.remove();
    });
  }
}
const Fc = { shake_sdk_dialog_add_attachment: "Add attachment", shake_sdk_dialog_add_attachment_grab_screenshot: "Grab screenshot", shake_sdk_dialog_add_attachment_record_screen: "Record screen", shake_sdk_dialog_add_attachment_browse_locations: "Choose from computer", shake_sdk_dialog_add_attachment_type_video: "Video", shake_sdk_dialog_add_attachment_type_image: "Image", shake_sdk_dialog_add_attachment_type_file: "File", shake_sdk_dialog_ticket_sent_title: "Done.", shake_sdk_dialog_ticket_sent_message: "Your ticket was sent.", shake_sdk_dialog_attachment_count_limit_title: "Cannot attach file", shake_sdk_dialog_attachment_count_limit_message: "A maximum of 10 files can be attached to a feedback form.", shake_sdk_dialog_attachment_size_limit_title: "File too big", shake_sdk_dialog_attachment_size_limit_message: "Files up to 10 MB can be attached, and that one had % MB.", shake_sdk_error_title: "Oops", shake_sdk_error_message: "Something went wrong.", shake_sdk_main_button_title: "Send feedback", shake_sdk_ticket_form_title: "New ticket", shake_sdk_new_ticket_feedback_type_title: "Ticket type", shake_sdk_new_ticket_feedback_type_bug: "Bug report", shake_sdk_new_ticket_feedback_type_question: "Question", shake_sdk_new_ticket_feedback_type_suggestion: "Improvement suggestion", shake_sdk_ticket_form_description_placeholder: "Description", shake_sdk_ticket_form_submit_button_text: "Submit", shake_sdk_ticket_form_submit_button_text_loading: "Submiting..." }, dA = () => {
  if (Bi.EN === Bi.EN)
    return Fc;
}, br = (e) => {
  if (e)
    if (window.innerWidth < 1024) {
      const t = vi(dA().shake_sdk_dialog_ticket_sent_title, dA().shake_sdk_dialog_ticket_sent_message);
      document.body.append(t), setTimeout(() => t.remove(), 3e3);
    } else
      new Te(dA().shake_sdk_dialog_ticket_sent_title, dA().shake_sdk_dialog_ticket_sent_message);
  else if (window.innerWidth < 1024) {
    const t = vi("Ooops", dA().shake_sdk_error_message);
    document.body.append(t), setTimeout(() => t.remove(), 3e3);
  } else
    new Te(dA().shake_sdk_error_title, dA().shake_sdk_error_message);
}, xo = "2.2.0";
class xc {
  constructor() {
    AA(this, "data", kA.localStorage);
    AA(this, "shakeApi", null);
    AA(this, "init", () => {
      const t = { apiKey: ie.apiKey, bundleId: ie.appDomain, version: xo, deviceId: this.data.getShakeDeviceId() ?? "" };
      this.shakeApi = new bc(t);
    });
  }
  async registerApp() {
    var t;
    if (this.shakeApi)
      try {
        await this.shakeApi.registerApp(), this.data.setAppRegistered(!0), this.data.setAppActive(!0);
      } catch (r) {
        ((t = r.response) == null ? void 0 : t.status) === 404 ? (this.data.setAppRegistered(!0), this.data.setAppActive(!1)) : mt("Error registering app: " + (r == null ? void 0 : r.message));
      }
  }
  async sendUserFeedback(t, r) {
    if (!this.shakeApi)
      return;
    let a, g, p = [];
    r.length && (a = await this.uploadScreenshot(r), g = await this.uploadVideo(r), p = await this.uploadAttachments(r)), t.screenshot_url = a, t.video_url = g, t.files = p;
    try {
      await this.shakeApi.sendFeedback(t), mt("Ticket sent successfully."), br(!0);
    } catch (w) {
      return mt("Error sending user feedback: " + (w == null ? void 0 : w.message)), br(), null;
    }
  }
  async uploadScreenshot(t) {
    const r = t.find((a) => a.type === yA.IMAGE);
    if (r) {
      const a = this.convertAttachmentToFile(r);
      return await this.uploadFile(a);
    }
  }
  async uploadVideo(t) {
    const r = t.find((a) => a.type === yA.VIDEO);
    if (r) {
      const a = this.convertAttachmentToFile(r);
      return await this.uploadFile(a);
    }
  }
  async uploadAttachments(t) {
    const r = t.find((w) => w.type === yA.IMAGE), a = t.find((w) => w.type === yA.VIDEO), g = t.filter((w) => w.name !== (r == null ? void 0 : r.name) && w.name !== (a == null ? void 0 : a.name)).slice(0, 9), p = await this.convertAttachmentsToFiles(g) ?? [];
    return await this.uploadFiles(p) ?? [];
  }
  async uploadFiles(t) {
    const r = [];
    return await Promise.all(t.map(async (a) => {
      await this.uploadFile(a).then((g) => {
        g && r.push({ url: g });
      });
    })), r;
  }
  async uploadFile(t) {
    if (this.shakeApi)
      try {
        const { data: r } = await this.shakeApi.uploadFile(t);
        return r.url;
      } catch (r) {
        mt("Error uploading file: " + (r == null ? void 0 : r.message));
      }
  }
  convertAttachmentToFile(t) {
    return new File([t.drawingData ?? t.data], t.name, { type: t.data.type });
  }
  async convertAttachmentsToFiles(t) {
    return t.map((r) => this.convertAttachmentToFile(r));
  }
}
class Uc {
  getString(t) {
    return localStorage.getItem(t);
  }
  setString(t, r) {
    localStorage.setItem(t, r);
  }
  getBoolean(t) {
    return localStorage.getItem(t) === "true";
  }
  setBoolean(t, r) {
    localStorage.setItem(t, String(r));
  }
  removeItem(t) {
    localStorage.removeItem(t);
  }
  getObject(t) {
    const r = localStorage.getItem(t);
    return r ? JSON.parse(r) : null;
  }
  setObject(t, r) {
    localStorage.setItem(t, JSON.stringify(r));
  }
}
const ke = class ke {
};
AA(ke, "storageProvider", new Uc()), AA(ke, "localStorage", new Pa(ke.storageProvider));
let kA = ke;
class CA {
}
AA(CA, "shakeApiService", new xc()), AA(CA, "consoleLogsTracker", new Ka()), AA(CA, "networkRequestsTracker", new Va()), AA(CA, "screenChangeTracker", new qa()), AA(CA, "userActionTracker", new $a()), AA(CA, "systemEventTracker", new Za()), AA(CA, "customLogTracker", new ja()), AA(CA, "attachmentsManager", new Ra());
class Ht {
  constructor() {
    AA(this, "_isConsoleLogsEnabled", !0);
    AA(this, "_isCustomLogsEnabled", !0);
    AA(this, "_isNetworkRequestsEnabled", !0);
    AA(this, "_isScreenChangesEnabled", !0);
    AA(this, "_isSystemEventsEnabled", !0);
    AA(this, "_isUserActionsEnabled", !0);
    AA(this, "enableActivityHistory", (t) => {
      this.isConsoleLogsEnabled = t, this.isCustomLogsEnabled = t, this.isNetworkRequestsEnabled = t, this.isScreenChangesEnabled = t, this.isUserActionsEnabled = t, this.isSystemEventsEnabled = t;
    });
  }
  get isConsoleLogsEnabled() {
    return this._isConsoleLogsEnabled;
  }
  set isConsoleLogsEnabled(t) {
    t != this._isConsoleLogsEnabled && (this._isConsoleLogsEnabled = t, ((r) => {
      if (!kA.localStorage.isSDKEnabled())
        return;
      const a = CA.consoleLogsTracker;
      r ? a.start() : a.stop();
    })(t));
  }
  get isCustomLogsEnabled() {
    return this._isCustomLogsEnabled;
  }
  set isCustomLogsEnabled(t) {
    this._isCustomLogsEnabled = t;
  }
  get isNetworkRequestsEnabled() {
    return this._isNetworkRequestsEnabled;
  }
  set isNetworkRequestsEnabled(t) {
    t != this._isNetworkRequestsEnabled && (this._isNetworkRequestsEnabled = t, ((r) => {
      if (!kA.localStorage.isSDKEnabled())
        return;
      const a = CA.networkRequestsTracker;
      r ? a.start() : a.stop();
    })(t));
  }
  get isScreenChangesEnabled() {
    return this._isScreenChangesEnabled;
  }
  set isScreenChangesEnabled(t) {
    t != this._isScreenChangesEnabled && (this._isScreenChangesEnabled = t, ((r) => {
      if (!kA.localStorage.isSDKEnabled())
        return;
      const a = CA.screenChangeTracker;
      r ? a.start() : a.stop();
    })(t));
  }
  get isSystemEventsEnabled() {
    return this._isSystemEventsEnabled;
  }
  set isSystemEventsEnabled(t) {
    t != this._isSystemEventsEnabled && (this._isSystemEventsEnabled = t, ((r) => {
      if (!kA.localStorage.isSDKEnabled())
        return;
      const a = CA.systemEventTracker;
      r ? a.start() : a.stop();
    })(t));
  }
  get isUserActionsEnabled() {
    return this._isUserActionsEnabled;
  }
  set isUserActionsEnabled(t) {
    t != this._isUserActionsEnabled && (this._isUserActionsEnabled = t, ((r) => {
      if (!kA.localStorage.isSDKEnabled())
        return;
      const a = CA.userActionTracker;
      r ? a.start() : a.stop();
    })(t));
  }
}
AA(Ht, "metadata", {});
const Pt = () => {
  const e = document.createElement("button");
  return e.classList.add("shake-sdk-button"), e;
};
function Uo() {
  return new Promise((e, t) => {
    const r = indexedDB.open(tt, 3);
    r.onerror = function() {
      t("Error opening database");
    }, r.onsuccess = function(a) {
      const g = a.target.result.transaction([Mt], "readonly").objectStore(Mt).get(0);
      g.onsuccess = function(p) {
        const w = p.target.result;
        e(w);
      }, g.onerror = function() {
        t("Error retrieving state from IndexedDB");
      };
    }, r.onupgradeneeded = et;
  });
}
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Qr = function(e, t) {
  return Qr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
    r.__proto__ = a;
  } || function(r, a) {
    for (var g in a)
      Object.prototype.hasOwnProperty.call(a, g) && (r[g] = a[g]);
  }, Qr(e, t);
};
function st(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  function r() {
    this.constructor = e;
  }
  Qr(e, t), e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var Fr = function() {
  return Fr = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++)
      for (var g in t = arguments[r])
        Object.prototype.hasOwnProperty.call(t, g) && (e[g] = t[g]);
    return e;
  }, Fr.apply(this, arguments);
};
function KA(e, t, r, a) {
  return new (r || (r = Promise))(function(g, p) {
    function w(Q) {
      try {
        y(a.next(Q));
      } catch (b) {
        p(b);
      }
    }
    function C(Q) {
      try {
        y(a.throw(Q));
      } catch (b) {
        p(b);
      }
    }
    function y(Q) {
      var b;
      Q.done ? g(Q.value) : (b = Q.value, b instanceof r ? b : new r(function(E) {
        E(b);
      })).then(w, C);
    }
    y((a = a.apply(e, [])).next());
  });
}
function RA(e, t) {
  var r, a, g, p, w = { label: 0, sent: function() {
    if (1 & g[0])
      throw g[1];
    return g[1];
  }, trys: [], ops: [] };
  return p = { next: C(0), throw: C(1), return: C(2) }, typeof Symbol == "function" && (p[Symbol.iterator] = function() {
    return this;
  }), p;
  function C(y) {
    return function(Q) {
      return function(b) {
        if (r)
          throw new TypeError("Generator is already executing.");
        for (; w; )
          try {
            if (r = 1, a && (g = 2 & b[0] ? a.return : b[0] ? a.throw || ((g = a.return) && g.call(a), 0) : a.next) && !(g = g.call(a, b[1])).done)
              return g;
            switch (a = 0, g && (b = [2 & b[0], g.value]), b[0]) {
              case 0:
              case 1:
                g = b;
                break;
              case 4:
                return w.label++, { value: b[1], done: !1 };
              case 5:
                w.label++, a = b[1], b = [0];
                continue;
              case 7:
                b = w.ops.pop(), w.trys.pop();
                continue;
              default:
                if (g = w.trys, !((g = g.length > 0 && g[g.length - 1]) || b[0] !== 6 && b[0] !== 2)) {
                  w = 0;
                  continue;
                }
                if (b[0] === 3 && (!g || b[1] > g[0] && b[1] < g[3])) {
                  w.label = b[1];
                  break;
                }
                if (b[0] === 6 && w.label < g[1]) {
                  w.label = g[1], g = b;
                  break;
                }
                if (g && w.label < g[2]) {
                  w.label = g[2], w.ops.push(b);
                  break;
                }
                g[2] && w.ops.pop(), w.trys.pop();
                continue;
            }
            b = t.call(e, w);
          } catch (E) {
            b = [6, E], a = 0;
          } finally {
            r = g = 0;
          }
        if (5 & b[0])
          throw b[1];
        return { value: b[0] ? b[1] : void 0, done: !0 };
      }([y, Q]);
    };
  }
}
function Ve(e, t, r) {
  if (arguments.length === 2)
    for (var a, g = 0, p = t.length; g < p; g++)
      !a && g in t || (a || (a = Array.prototype.slice.call(t, 0, g)), a[g] = t[g]);
  return e.concat(a || t);
}
for (var vt = function() {
  function e(t, r, a, g) {
    this.left = t, this.top = r, this.width = a, this.height = g;
  }
  return e.prototype.add = function(t, r, a, g) {
    return new e(this.left + t, this.top + r, this.width + a, this.height + g);
  }, e.fromClientRect = function(t, r) {
    return new e(r.left + t.windowBounds.left, r.top + t.windowBounds.top, r.width, r.height);
  }, e.fromDOMRectList = function(t, r) {
    var a = Array.from(r).find(function(g) {
      return g.width !== 0;
    });
    return a ? new e(a.left + t.windowBounds.left, a.top + t.windowBounds.top, a.width, a.height) : e.EMPTY;
  }, e.EMPTY = new e(0, 0, 0, 0), e;
}(), Di = function(e, t) {
  return vt.fromClientRect(e, t.getBoundingClientRect());
}, yi = function(e) {
  for (var t = [], r = 0, a = e.length; r < a; ) {
    var g = e.charCodeAt(r++);
    if (g >= 55296 && g <= 56319 && r < a) {
      var p = e.charCodeAt(r++);
      (64512 & p) == 56320 ? t.push(((1023 & g) << 10) + (1023 & p) + 65536) : (t.push(g), r--);
    } else
      t.push(g);
  }
  return t;
}, _A = function() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var r = e.length;
  if (!r)
    return "";
  for (var a = [], g = -1, p = ""; ++g < r; ) {
    var w = e[g];
    w <= 65535 ? a.push(w) : (w -= 65536, a.push(55296 + (w >> 10), w % 1024 + 56320)), (g + 1 === r || a.length > 16384) && (p += String.fromCharCode.apply(String, a), a.length = 0);
  }
  return p;
}, Ec = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _c = typeof Uint8Array > "u" ? [] : new Uint8Array(256), Xe = 0; Xe < 64; Xe++)
  _c[Ec.charCodeAt(Xe)] = Xe;
for (var kc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Be = typeof Uint8Array > "u" ? [] : new Uint8Array(256), We = 0; We < 64; We++)
  Be[kc.charCodeAt(We)] = We;
for (var us = function(e, t, r) {
  return e.slice ? e.slice(t, r) : new Uint16Array(Array.prototype.slice.call(e, t, r));
}, Sc = function() {
  function e(t, r, a, g, p, w) {
    this.initialValue = t, this.errorValue = r, this.highStart = a, this.highValueIndex = g, this.index = p, this.data = w;
  }
  return e.prototype.get = function(t) {
    var r;
    if (t >= 0) {
      if (t < 55296 || t > 56319 && t <= 65535)
        return r = ((r = this.index[t >> 5]) << 2) + (31 & t), this.data[r];
      if (t <= 65535)
        return r = ((r = this.index[2048 + (t - 55296 >> 5)]) << 2) + (31 & t), this.data[r];
      if (t < this.highStart)
        return r = 2080 + (t >> 11), r = this.index[r], r += t >> 5 & 63, r = ((r = this.index[r]) << 2) + (31 & t), this.data[r];
      if (t <= 1114111)
        return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, e;
}(), Tc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ic = typeof Uint8Array > "u" ? [] : new Uint8Array(256), Ye = 0; Ye < 64; Ye++)
  Ic[Tc.charCodeAt(Ye)] = Ye;
var Qt = 10, xr = 13, we = 15, ze = 17, de = 18, Hc = 19, ds = 20, Ur = 21, ge = 22, jt = 24, VA = 25, me = 26, Ce = 27, Gt = 28, qt = 30, Je = 32, qe = 33, Er = 34, _r = 35, Fe = 37, kr = 38, ui = 39, di = 40, gs = 42, Oc = [9001, 65288], fA = "×", Ze = "÷", Sr = function(e, t) {
  var r, a, g, p = function(b) {
    var E, S, L, H, j, B = 0.75 * b.length, J = b.length, iA = 0;
    b[b.length - 1] === "=" && (B--, b[b.length - 2] === "=" && B--);
    var cA = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && Uint8Array.prototype.slice !== void 0 ? new ArrayBuffer(B) : new Array(B), u = Array.isArray(cA) ? cA : new Uint8Array(cA);
    for (E = 0; E < J; E += 4)
      S = Be[b.charCodeAt(E)], L = Be[b.charCodeAt(E + 1)], H = Be[b.charCodeAt(E + 2)], j = Be[b.charCodeAt(E + 3)], u[iA++] = S << 2 | L >> 4, u[iA++] = (15 & L) << 4 | H >> 2, u[iA++] = (3 & H) << 6 | 63 & j;
    return cA;
  }(e), w = Array.isArray(p) ? function(b) {
    for (var E = b.length, S = [], L = 0; L < E; L += 4)
      S.push(b[L + 3] << 24 | b[L + 2] << 16 | b[L + 1] << 8 | b[L]);
    return S;
  }(p) : new Uint32Array(p), C = Array.isArray(p) ? function(b) {
    for (var E = b.length, S = [], L = 0; L < E; L += 2)
      S.push(b[L + 1] << 8 | b[L]);
    return S;
  }(p) : new Uint16Array(p), y = us(C, 12, w[4] / 2), Q = w[5] === 2 ? us(C, (24 + w[4]) / 2) : (r = w, a = Math.ceil((24 + w[4]) / 4), r.slice ? r.slice(a, g) : new Uint32Array(Array.prototype.slice.call(r, a, g)));
  return new Sc(w[0], w[1], w[2], w[3], y, Q);
}("KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA=="), ft = [qt, 36], Tr = [1, 2, 3, 5], Eo = [Qt, 8], fs = [Ce, me], Lc = Tr.concat(Eo), ps = [kr, ui, di, Er, _r], Dc = [we, xr], rr = function(e, t, r, a) {
  var g = a[r];
  if (Array.isArray(e) ? e.indexOf(g) !== -1 : e === g)
    for (var p = r; p <= a.length; ) {
      if ((y = a[++p]) === t)
        return !0;
      if (y !== Qt)
        break;
    }
  if (g === Qt)
    for (p = r; p > 0; ) {
      var w = a[--p];
      if (Array.isArray(e) ? e.indexOf(w) !== -1 : e === w)
        for (var C = r; C <= a.length; ) {
          var y;
          if ((y = a[++C]) === t)
            return !0;
          if (y !== Qt)
            break;
        }
      if (w !== Qt)
        break;
    }
  return !1;
}, Bs = function(e, t) {
  for (var r = e; r >= 0; ) {
    var a = t[r];
    if (a !== Qt)
      return a;
    r--;
  }
  return 0;
}, Mc = function(e, t, r, a, g) {
  if (r[a] === 0)
    return fA;
  var p = a - 1;
  if (Array.isArray(g) && g[p] === !0)
    return fA;
  var w = p - 1, C = p + 1, y = t[p], Q = w >= 0 ? t[w] : 0, b = t[C];
  if (y === 2 && b === 3)
    return fA;
  if (Tr.indexOf(y) !== -1)
    return "!";
  if (Tr.indexOf(b) !== -1 || Eo.indexOf(b) !== -1)
    return fA;
  if (Bs(p, t) === 8)
    return Ze;
  if (Sr.get(e[p]) === 11 || (y === Je || y === qe) && Sr.get(e[C]) === 11 || y === 7 || b === 7 || y === 9 || [Qt, xr, we].indexOf(y) === -1 && b === 9 || [ze, de, Hc, jt, Gt].indexOf(b) !== -1 || Bs(p, t) === ge || rr(23, ge, p, t) || rr([ze, de], Ur, p, t) || rr(12, 12, p, t))
    return fA;
  if (y === Qt)
    return Ze;
  if (y === 23 || b === 23)
    return fA;
  if (b === 16 || y === 16)
    return Ze;
  if ([xr, we, Ur].indexOf(b) !== -1 || y === 14 || Q === 36 && Dc.indexOf(y) !== -1 || y === Gt && b === 36 || b === ds || ft.indexOf(b) !== -1 && y === VA || ft.indexOf(y) !== -1 && b === VA || y === Ce && [Fe, Je, qe].indexOf(b) !== -1 || [Fe, Je, qe].indexOf(y) !== -1 && b === me || ft.indexOf(y) !== -1 && fs.indexOf(b) !== -1 || fs.indexOf(y) !== -1 && ft.indexOf(b) !== -1 || [Ce, me].indexOf(y) !== -1 && (b === VA || [ge, we].indexOf(b) !== -1 && t[C + 1] === VA) || [ge, we].indexOf(y) !== -1 && b === VA || y === VA && [VA, Gt, jt].indexOf(b) !== -1)
    return fA;
  if ([VA, Gt, jt, ze, de].indexOf(b) !== -1)
    for (var E = p; E >= 0; ) {
      if ((S = t[E]) === VA)
        return fA;
      if ([Gt, jt].indexOf(S) === -1)
        break;
      E--;
    }
  if ([Ce, me].indexOf(b) !== -1)
    for (E = [ze, de].indexOf(y) !== -1 ? w : p; E >= 0; ) {
      var S;
      if ((S = t[E]) === VA)
        return fA;
      if ([Gt, jt].indexOf(S) === -1)
        break;
      E--;
    }
  if (kr === y && [kr, ui, Er, _r].indexOf(b) !== -1 || [ui, Er].indexOf(y) !== -1 && [ui, di].indexOf(b) !== -1 || [di, _r].indexOf(y) !== -1 && b === di || ps.indexOf(y) !== -1 && [ds, me].indexOf(b) !== -1 || ps.indexOf(b) !== -1 && y === Ce || ft.indexOf(y) !== -1 && ft.indexOf(b) !== -1 || y === jt && ft.indexOf(b) !== -1 || ft.concat(VA).indexOf(y) !== -1 && b === ge && Oc.indexOf(e[C]) === -1 || ft.concat(VA).indexOf(b) !== -1 && y === de)
    return fA;
  if (y === 41 && b === 41) {
    for (var L = r[p], H = 1; L > 0 && t[--L] === 41; )
      H++;
    if (H % 2 != 0)
      return fA;
  }
  return y === Je && b === qe ? fA : Ze;
}, Pc = function(e, t) {
  t || (t = { lineBreak: "normal", wordBreak: "normal" });
  var r = function(C, y) {
    y === void 0 && (y = "strict");
    var Q = [], b = [], E = [];
    return C.forEach(function(S, L) {
      var H = Sr.get(S);
      if (H > 50 ? (E.push(!0), H -= 50) : E.push(!1), ["normal", "auto", "loose"].indexOf(y) !== -1 && [8208, 8211, 12316, 12448].indexOf(S) !== -1)
        return b.push(L), Q.push(16);
      if (H === 4 || H === 11) {
        if (L === 0)
          return b.push(L), Q.push(qt);
        var j = Q[L - 1];
        return Lc.indexOf(j) === -1 ? (b.push(b[L - 1]), Q.push(j)) : (b.push(L), Q.push(qt));
      }
      return b.push(L), H === 31 ? Q.push(y === "strict" ? Ur : Fe) : H === gs || H === 29 ? Q.push(qt) : H === 43 ? S >= 131072 && S <= 196605 || S >= 196608 && S <= 262141 ? Q.push(Fe) : Q.push(qt) : void Q.push(H);
    }), [b, Q, E];
  }(e, t.lineBreak), a = r[0], g = r[1], p = r[2];
  t.wordBreak !== "break-all" && t.wordBreak !== "break-word" || (g = g.map(function(C) {
    return [VA, qt, gs].indexOf(C) !== -1 ? Fe : C;
  }));
  var w = t.wordBreak === "keep-all" ? p.map(function(C, y) {
    return C && e[y] >= 19968 && e[y] <= 40959;
  }) : void 0;
  return [a, g, w];
}, Rc = function() {
  function e(t, r, a, g) {
    this.codePoints = t, this.required = r === "!", this.start = a, this.end = g;
  }
  return e.prototype.slice = function() {
    return _A.apply(void 0, this.codePoints.slice(this.start, this.end));
  }, e;
}(), NA = 45, Lt = 43, ot = -1, jA = function(e) {
  return e >= 48 && e <= 57;
}, Nt = function(e) {
  return jA(e) || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}, $e = function(e) {
  return e === 10 || e === 9 || e === 32;
}, bi = function(e) {
  return function(t) {
    return function(r) {
      return r >= 97 && r <= 122;
    }(t) || function(r) {
      return r >= 65 && r <= 90;
    }(t);
  }(e) || function(t) {
    return t >= 128;
  }(e) || e === 95;
}, ws = function(e) {
  return bi(e) || jA(e) || e === NA;
}, Kc = function(e) {
  return e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e === 127;
}, bt = function(e, t) {
  return e === 92 && t !== 10;
}, Ai = function(e, t, r) {
  return e === NA ? bi(t) || bt(t, r) : !!bi(e) || !(e !== 92 || !bt(e, t));
}, nr = function(e, t, r) {
  return e === Lt || e === NA ? !!jA(t) || t === 46 && jA(r) : jA(e === 46 ? t : e);
}, jc = function(e) {
  var t = 0, r = 1;
  e[t] !== Lt && e[t] !== NA || (e[t] === NA && (r = -1), t++);
  for (var a = []; jA(e[t]); )
    a.push(e[t++]);
  var g = a.length ? parseInt(_A.apply(void 0, a), 10) : 0;
  e[t] === 46 && t++;
  for (var p = []; jA(e[t]); )
    p.push(e[t++]);
  var w = p.length, C = w ? parseInt(_A.apply(void 0, p), 10) : 0;
  e[t] !== 69 && e[t] !== 101 || t++;
  var y = 1;
  e[t] !== Lt && e[t] !== NA || (e[t] === NA && (y = -1), t++);
  for (var Q = []; jA(e[t]); )
    Q.push(e[t++]);
  var b = Q.length ? parseInt(_A.apply(void 0, Q), 10) : 0;
  return r * (g + C * Math.pow(10, -w)) * Math.pow(10, y * b);
}, Gc = { type: 2 }, Nc = { type: 3 }, Vc = { type: 4 }, Xc = { type: 13 }, Wc = { type: 8 }, Yc = { type: 21 }, zc = { type: 9 }, Jc = { type: 10 }, qc = { type: 11 }, Zc = { type: 12 }, $c = { type: 14 }, ti = { type: 23 }, Al = { type: 1 }, tl = { type: 25 }, el = { type: 24 }, il = { type: 26 }, rl = { type: 27 }, nl = { type: 28 }, sl = { type: 29 }, ol = { type: 31 }, Ir = { type: 32 }, _o = function() {
  function e() {
    this._value = [];
  }
  return e.prototype.write = function(t) {
    this._value = this._value.concat(yi(t));
  }, e.prototype.read = function() {
    for (var t = [], r = this.consumeToken(); r !== Ir; )
      t.push(r), r = this.consumeToken();
    return t;
  }, e.prototype.consumeToken = function() {
    var t = this.consumeCodePoint();
    switch (t) {
      case 34:
        return this.consumeStringToken(34);
      case 35:
        var r = this.peekCodePoint(0), a = this.peekCodePoint(1), g = this.peekCodePoint(2);
        if (ws(r) || bt(a, g)) {
          var p = Ai(r, a, g) ? 2 : 1;
          return { type: 5, value: this.consumeName(), flags: p };
        }
        break;
      case 36:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), Xc;
        break;
      case 39:
        return this.consumeStringToken(39);
      case 40:
        return Gc;
      case 41:
        return Nc;
      case 42:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), $c;
        break;
      case Lt:
        if (nr(t, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(t), this.consumeNumericToken();
        break;
      case 44:
        return Vc;
      case NA:
        var w = t, C = this.peekCodePoint(0), y = this.peekCodePoint(1);
        if (nr(w, C, y))
          return this.reconsumeCodePoint(t), this.consumeNumericToken();
        if (Ai(w, C, y))
          return this.reconsumeCodePoint(t), this.consumeIdentLikeToken();
        if (C === NA && y === 62)
          return this.consumeCodePoint(), this.consumeCodePoint(), el;
        break;
      case 46:
        if (nr(t, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(t), this.consumeNumericToken();
        break;
      case 47:
        if (this.peekCodePoint(0) === 42)
          for (this.consumeCodePoint(); ; ) {
            var Q = this.consumeCodePoint();
            if (Q === 42 && (Q = this.consumeCodePoint()) === 47)
              return this.consumeToken();
            if (Q === ot)
              return this.consumeToken();
          }
        break;
      case 58:
        return il;
      case 59:
        return rl;
      case 60:
        if (this.peekCodePoint(0) === 33 && this.peekCodePoint(1) === NA && this.peekCodePoint(2) === NA)
          return this.consumeCodePoint(), this.consumeCodePoint(), tl;
        break;
      case 64:
        var b = this.peekCodePoint(0), E = this.peekCodePoint(1), S = this.peekCodePoint(2);
        if (Ai(b, E, S))
          return { type: 7, value: this.consumeName() };
        break;
      case 91:
        return nl;
      case 92:
        if (bt(t, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(t), this.consumeIdentLikeToken();
        break;
      case 93:
        return sl;
      case 61:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), Wc;
        break;
      case 123:
        return qc;
      case 125:
        return Zc;
      case 117:
      case 85:
        var L = this.peekCodePoint(0), H = this.peekCodePoint(1);
        return L !== Lt || !Nt(H) && H !== 63 || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(t), this.consumeIdentLikeToken();
      case 124:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), zc;
        if (this.peekCodePoint(0) === 124)
          return this.consumeCodePoint(), Yc;
        break;
      case 126:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), Jc;
        break;
      case ot:
        return Ir;
    }
    return $e(t) ? (this.consumeWhiteSpace(), ol) : jA(t) ? (this.reconsumeCodePoint(t), this.consumeNumericToken()) : bi(t) ? (this.reconsumeCodePoint(t), this.consumeIdentLikeToken()) : { type: 6, value: _A(t) };
  }, e.prototype.consumeCodePoint = function() {
    var t = this._value.shift();
    return t === void 0 ? -1 : t;
  }, e.prototype.reconsumeCodePoint = function(t) {
    this._value.unshift(t);
  }, e.prototype.peekCodePoint = function(t) {
    return t >= this._value.length ? -1 : this._value[t];
  }, e.prototype.consumeUnicodeRangeToken = function() {
    for (var t = [], r = this.consumeCodePoint(); Nt(r) && t.length < 6; )
      t.push(r), r = this.consumeCodePoint();
    for (var a = !1; r === 63 && t.length < 6; )
      t.push(r), r = this.consumeCodePoint(), a = !0;
    if (a)
      return { type: 30, start: parseInt(_A.apply(void 0, t.map(function(w) {
        return w === 63 ? 48 : w;
      })), 16), end: parseInt(_A.apply(void 0, t.map(function(w) {
        return w === 63 ? 70 : w;
      })), 16) };
    var g = parseInt(_A.apply(void 0, t), 16);
    if (this.peekCodePoint(0) === NA && Nt(this.peekCodePoint(1))) {
      this.consumeCodePoint(), r = this.consumeCodePoint();
      for (var p = []; Nt(r) && p.length < 6; )
        p.push(r), r = this.consumeCodePoint();
      return { type: 30, start: g, end: parseInt(_A.apply(void 0, p), 16) };
    }
    return { type: 30, start: g, end: g };
  }, e.prototype.consumeIdentLikeToken = function() {
    var t = this.consumeName();
    return t.toLowerCase() === "url" && this.peekCodePoint(0) === 40 ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === 40 ? (this.consumeCodePoint(), { type: 19, value: t }) : { type: 20, value: t };
  }, e.prototype.consumeUrlToken = function() {
    var t = [];
    if (this.consumeWhiteSpace(), this.peekCodePoint(0) === ot)
      return { type: 22, value: "" };
    var r = this.peekCodePoint(0);
    if (r === 39 || r === 34) {
      var a = this.consumeStringToken(this.consumeCodePoint());
      return a.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === ot || this.peekCodePoint(0) === 41) ? (this.consumeCodePoint(), { type: 22, value: a.value }) : (this.consumeBadUrlRemnants(), ti);
    }
    for (; ; ) {
      var g = this.consumeCodePoint();
      if (g === ot || g === 41)
        return { type: 22, value: _A.apply(void 0, t) };
      if ($e(g))
        return this.consumeWhiteSpace(), this.peekCodePoint(0) === ot || this.peekCodePoint(0) === 41 ? (this.consumeCodePoint(), { type: 22, value: _A.apply(void 0, t) }) : (this.consumeBadUrlRemnants(), ti);
      if (g === 34 || g === 39 || g === 40 || Kc(g))
        return this.consumeBadUrlRemnants(), ti;
      if (g === 92) {
        if (!bt(g, this.peekCodePoint(0)))
          return this.consumeBadUrlRemnants(), ti;
        t.push(this.consumeEscapedCodePoint());
      } else
        t.push(g);
    }
  }, e.prototype.consumeWhiteSpace = function() {
    for (; $e(this.peekCodePoint(0)); )
      this.consumeCodePoint();
  }, e.prototype.consumeBadUrlRemnants = function() {
    for (; ; ) {
      var t = this.consumeCodePoint();
      if (t === 41 || t === ot)
        return;
      bt(t, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
    }
  }, e.prototype.consumeStringSlice = function(t) {
    for (var r = ""; t > 0; ) {
      var a = Math.min(5e4, t);
      r += _A.apply(void 0, this._value.splice(0, a)), t -= a;
    }
    return this._value.shift(), r;
  }, e.prototype.consumeStringToken = function(t) {
    for (var r = "", a = 0; ; ) {
      var g = this._value[a];
      if (g === ot || g === void 0 || g === t)
        return { type: 0, value: r += this.consumeStringSlice(a) };
      if (g === 10)
        return this._value.splice(0, a), Al;
      if (g === 92) {
        var p = this._value[a + 1];
        p !== ot && p !== void 0 && (p === 10 ? (r += this.consumeStringSlice(a), a = -1, this._value.shift()) : bt(g, p) && (r += this.consumeStringSlice(a), r += _A(this.consumeEscapedCodePoint()), a = -1));
      }
      a++;
    }
  }, e.prototype.consumeNumber = function() {
    var t = [], r = 4, a = this.peekCodePoint(0);
    for (a !== Lt && a !== NA || t.push(this.consumeCodePoint()); jA(this.peekCodePoint(0)); )
      t.push(this.consumeCodePoint());
    a = this.peekCodePoint(0);
    var g = this.peekCodePoint(1);
    if (a === 46 && jA(g))
      for (t.push(this.consumeCodePoint(), this.consumeCodePoint()), r = 8; jA(this.peekCodePoint(0)); )
        t.push(this.consumeCodePoint());
    a = this.peekCodePoint(0), g = this.peekCodePoint(1);
    var p = this.peekCodePoint(2);
    if ((a === 69 || a === 101) && ((g === Lt || g === NA) && jA(p) || jA(g)))
      for (t.push(this.consumeCodePoint(), this.consumeCodePoint()), r = 8; jA(this.peekCodePoint(0)); )
        t.push(this.consumeCodePoint());
    return [jc(t), r];
  }, e.prototype.consumeNumericToken = function() {
    var t = this.consumeNumber(), r = t[0], a = t[1], g = this.peekCodePoint(0), p = this.peekCodePoint(1), w = this.peekCodePoint(2);
    return Ai(g, p, w) ? { type: 15, number: r, flags: a, unit: this.consumeName() } : g === 37 ? (this.consumeCodePoint(), { type: 16, number: r, flags: a }) : { type: 17, number: r, flags: a };
  }, e.prototype.consumeEscapedCodePoint = function() {
    var t = this.consumeCodePoint();
    if (Nt(t)) {
      for (var r = _A(t); Nt(this.peekCodePoint(0)) && r.length < 6; )
        r += _A(this.consumeCodePoint());
      $e(this.peekCodePoint(0)) && this.consumeCodePoint();
      var a = parseInt(r, 16);
      return a === 0 || function(g) {
        return g >= 55296 && g <= 57343;
      }(a) || a > 1114111 ? 65533 : a;
    }
    return t === ot ? 65533 : t;
  }, e.prototype.consumeName = function() {
    for (var t = ""; ; ) {
      var r = this.consumeCodePoint();
      if (ws(r))
        t += _A(r);
      else {
        if (!bt(r, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(r), t;
        t += _A(this.consumeEscapedCodePoint());
      }
    }
  }, e;
}(), ko = function() {
  function e(t) {
    this._tokens = t;
  }
  return e.create = function(t) {
    var r = new _o();
    return r.write(t), new e(r.read());
  }, e.parseValue = function(t) {
    return e.create(t).parseComponentValue();
  }, e.parseValues = function(t) {
    return e.create(t).parseComponentValues();
  }, e.prototype.parseComponentValue = function() {
    for (var t = this.consumeToken(); t.type === 31; )
      t = this.consumeToken();
    if (t.type === 32)
      throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
    this.reconsumeToken(t);
    var r = this.consumeComponentValue();
    do
      t = this.consumeToken();
    while (t.type === 31);
    if (t.type === 32)
      return r;
    throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
  }, e.prototype.parseComponentValues = function() {
    for (var t = []; ; ) {
      var r = this.consumeComponentValue();
      if (r.type === 32)
        return t;
      t.push(r), t.push();
    }
  }, e.prototype.consumeComponentValue = function() {
    var t = this.consumeToken();
    switch (t.type) {
      case 11:
      case 28:
      case 2:
        return this.consumeSimpleBlock(t.type);
      case 19:
        return this.consumeFunction(t);
    }
    return t;
  }, e.prototype.consumeSimpleBlock = function(t) {
    for (var r = { type: t, values: [] }, a = this.consumeToken(); ; ) {
      if (a.type === 32 || cl(a, t))
        return r;
      this.reconsumeToken(a), r.values.push(this.consumeComponentValue()), a = this.consumeToken();
    }
  }, e.prototype.consumeFunction = function(t) {
    for (var r = { name: t.value, values: [], type: 18 }; ; ) {
      var a = this.consumeToken();
      if (a.type === 32 || a.type === 3)
        return r;
      this.reconsumeToken(a), r.values.push(this.consumeComponentValue());
    }
  }, e.prototype.consumeToken = function() {
    var t = this._tokens.shift();
    return t === void 0 ? Ir : t;
  }, e.prototype.reconsumeToken = function(t) {
    this._tokens.unshift(t);
  }, e;
}(), Ie = function(e) {
  return e.type === 15;
}, Zt = function(e) {
  return e.type === 17;
}, vA = function(e) {
  return e.type === 20;
}, al = function(e) {
  return e.type === 0;
}, Hr = function(e, t) {
  return vA(e) && e.value === t;
}, ms = function(e) {
  return e.type !== 31;
}, ne = function(e) {
  return e.type !== 31 && e.type !== 4;
}, lt = function(e) {
  var t = [], r = [];
  return e.forEach(function(a) {
    if (a.type === 4) {
      if (r.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      return t.push(r), void (r = []);
    }
    a.type !== 31 && r.push(a);
  }), r.length && t.push(r), t;
}, cl = function(e, t) {
  return t === 11 && e.type === 12 || t === 28 && e.type === 29 || t === 2 && e.type === 3;
}, _t = function(e) {
  return e.type === 17 || e.type === 15;
}, TA = function(e) {
  return e.type === 16 || _t(e);
}, So = function(e) {
  return e.length > 1 ? [e[0], e[1]] : [e[0]];
}, PA = { type: 17, number: 0, flags: 4 }, nn = { type: 16, number: 50, flags: 4 }, Ft = { type: 16, number: 100, flags: 4 }, ve = function(e, t, r) {
  var a = e[0], g = e[1];
  return [bA(a, t), bA(g !== void 0 ? g : a, r)];
}, bA = function(e, t) {
  if (e.type === 16)
    return e.number / 100 * t;
  if (Ie(e))
    switch (e.unit) {
      case "rem":
      case "em":
        return 16 * e.number;
      default:
        return e.number;
    }
  return e.number;
}, To = "grad", Io = "turn", Mi = function(e, t) {
  if (t.type === 15)
    switch (t.unit) {
      case "deg":
        return Math.PI * t.number / 180;
      case To:
        return Math.PI / 200 * t.number;
      case "rad":
        return t.number;
      case Io:
        return 2 * Math.PI * t.number;
    }
  throw new Error("Unsupported angle type");
}, Ho = function(e) {
  return e.type === 15 && (e.unit === "deg" || e.unit === To || e.unit === "rad" || e.unit === Io);
}, Oo = function(e) {
  switch (e.filter(vA).map(function(t) {
    return t.value;
  }).join(" ")) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [PA, PA];
    case "to top":
    case "bottom":
      return At(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [PA, Ft];
    case "to right":
    case "left":
      return At(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [Ft, Ft];
    case "to bottom":
    case "top":
      return At(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [Ft, PA];
    case "to left":
    case "right":
      return At(270);
  }
  return 0;
}, At = function(e) {
  return Math.PI * e / 180;
}, Ut = function(e, t) {
  if (t.type === 18) {
    var r = ll[t.name];
    if (r === void 0)
      throw new Error('Attempting to parse an unsupported color function "' + t.name + '"');
    return r(e, t.values);
  }
  if (t.type === 5) {
    if (t.value.length === 3) {
      var a = t.value.substring(0, 1), g = t.value.substring(1, 2), p = t.value.substring(2, 3);
      return xt(parseInt(a + a, 16), parseInt(g + g, 16), parseInt(p + p, 16), 1);
    }
    if (t.value.length === 4) {
      a = t.value.substring(0, 1), g = t.value.substring(1, 2), p = t.value.substring(2, 3);
      var w = t.value.substring(3, 4);
      return xt(parseInt(a + a, 16), parseInt(g + g, 16), parseInt(p + p, 16), parseInt(w + w, 16) / 255);
    }
    if (t.value.length === 6)
      return a = t.value.substring(0, 2), g = t.value.substring(2, 4), p = t.value.substring(4, 6), xt(parseInt(a, 16), parseInt(g, 16), parseInt(p, 16), 1);
    if (t.value.length === 8)
      return a = t.value.substring(0, 2), g = t.value.substring(2, 4), p = t.value.substring(4, 6), w = t.value.substring(6, 8), xt(parseInt(a, 16), parseInt(g, 16), parseInt(p, 16), parseInt(w, 16) / 255);
  }
  if (t.type === 20) {
    var C = Ct[t.value.toUpperCase()];
    if (C !== void 0)
      return C;
  }
  return Ct.TRANSPARENT;
}, Et = function(e) {
  return !(255 & e);
}, HA = function(e) {
  var t = 255 & e, r = 255 & e >> 8, a = 255 & e >> 16, g = 255 & e >> 24;
  return t < 255 ? "rgba(" + g + "," + a + "," + r + "," + t / 255 + ")" : "rgb(" + g + "," + a + "," + r + ")";
}, xt = function(e, t, r, a) {
  return (e << 24 | t << 16 | r << 8 | Math.round(255 * a)) >>> 0;
}, Cs = function(e, t) {
  if (e.type === 17)
    return e.number;
  if (e.type === 16) {
    var r = t === 3 ? 1 : 255;
    return t === 3 ? e.number / 100 * r : Math.round(e.number / 100 * r);
  }
  return 0;
}, vs = function(e, t) {
  var r = t.filter(ne);
  if (r.length === 3) {
    var a = r.map(Cs), g = a[0], p = a[1], w = a[2];
    return xt(g, p, w, 1);
  }
  if (r.length === 4) {
    var C = r.map(Cs), y = (g = C[0], p = C[1], w = C[2], C[3]);
    return xt(g, p, w, y);
  }
  return 0;
};
function sr(e, t, r) {
  return r < 0 && (r += 1), r >= 1 && (r -= 1), r < 1 / 6 ? (t - e) * r * 6 + e : r < 0.5 ? t : r < 2 / 3 ? 6 * (t - e) * (2 / 3 - r) + e : e;
}
var ys = function(e, t) {
  var r = t.filter(ne), a = r[0], g = r[1], p = r[2], w = r[3], C = (a.type === 17 ? At(a.number) : Mi(e, a)) / (2 * Math.PI), y = TA(g) ? g.number / 100 : 0, Q = TA(p) ? p.number / 100 : 0, b = w !== void 0 && TA(w) ? bA(w, 1) : 1;
  if (y === 0)
    return xt(255 * Q, 255 * Q, 255 * Q, 1);
  var E = Q <= 0.5 ? Q * (y + 1) : Q + y - Q * y, S = 2 * Q - E, L = sr(S, E, C + 1 / 3), H = sr(S, E, C), j = sr(S, E, C - 1 / 3);
  return xt(255 * L, 255 * H, 255 * j, b);
}, ll = { hsl: ys, hsla: ys, rgb: vs, rgba: vs }, xe = function(e, t) {
  return Ut(e, ko.create(t).parseComponentValue());
}, Ct = { ALICEBLUE: 4042850303, ANTIQUEWHITE: 4209760255, AQUA: 16777215, AQUAMARINE: 2147472639, AZURE: 4043309055, BEIGE: 4126530815, BISQUE: 4293182719, BLACK: 255, BLANCHEDALMOND: 4293643775, BLUE: 65535, BLUEVIOLET: 2318131967, BROWN: 2771004159, BURLYWOOD: 3736635391, CADETBLUE: 1604231423, CHARTREUSE: 2147418367, CHOCOLATE: 3530104575, CORAL: 4286533887, CORNFLOWERBLUE: 1687547391, CORNSILK: 4294499583, CRIMSON: 3692313855, CYAN: 16777215, DARKBLUE: 35839, DARKCYAN: 9145343, DARKGOLDENROD: 3095837695, DARKGRAY: 2846468607, DARKGREEN: 6553855, DARKGREY: 2846468607, DARKKHAKI: 3182914559, DARKMAGENTA: 2332068863, DARKOLIVEGREEN: 1433087999, DARKORANGE: 4287365375, DARKORCHID: 2570243327, DARKRED: 2332033279, DARKSALMON: 3918953215, DARKSEAGREEN: 2411499519, DARKSLATEBLUE: 1211993087, DARKSLATEGRAY: 793726975, DARKSLATEGREY: 793726975, DARKTURQUOISE: 13554175, DARKVIOLET: 2483082239, DEEPPINK: 4279538687, DEEPSKYBLUE: 12582911, DIMGRAY: 1768516095, DIMGREY: 1768516095, DODGERBLUE: 512819199, FIREBRICK: 2988581631, FLORALWHITE: 4294635775, FORESTGREEN: 579543807, FUCHSIA: 4278255615, GAINSBORO: 3705462015, GHOSTWHITE: 4177068031, GOLD: 4292280575, GOLDENROD: 3668254975, GRAY: 2155905279, GREEN: 8388863, GREENYELLOW: 2919182335, GREY: 2155905279, HONEYDEW: 4043305215, HOTPINK: 4285117695, INDIANRED: 3445382399, INDIGO: 1258324735, IVORY: 4294963455, KHAKI: 4041641215, LAVENDER: 3873897215, LAVENDERBLUSH: 4293981695, LAWNGREEN: 2096890111, LEMONCHIFFON: 4294626815, LIGHTBLUE: 2916673279, LIGHTCORAL: 4034953471, LIGHTCYAN: 3774873599, LIGHTGOLDENRODYELLOW: 4210742015, LIGHTGRAY: 3553874943, LIGHTGREEN: 2431553791, LIGHTGREY: 3553874943, LIGHTPINK: 4290167295, LIGHTSALMON: 4288707327, LIGHTSEAGREEN: 548580095, LIGHTSKYBLUE: 2278488831, LIGHTSLATEGRAY: 2005441023, LIGHTSLATEGREY: 2005441023, LIGHTSTEELBLUE: 2965692159, LIGHTYELLOW: 4294959359, LIME: 16711935, LIMEGREEN: 852308735, LINEN: 4210091775, MAGENTA: 4278255615, MAROON: 2147483903, MEDIUMAQUAMARINE: 1724754687, MEDIUMBLUE: 52735, MEDIUMORCHID: 3126187007, MEDIUMPURPLE: 2473647103, MEDIUMSEAGREEN: 1018393087, MEDIUMSLATEBLUE: 2070474495, MEDIUMSPRINGGREEN: 16423679, MEDIUMTURQUOISE: 1221709055, MEDIUMVIOLETRED: 3340076543, MIDNIGHTBLUE: 421097727, MINTCREAM: 4127193855, MISTYROSE: 4293190143, MOCCASIN: 4293178879, NAVAJOWHITE: 4292783615, NAVY: 33023, OLDLACE: 4260751103, OLIVE: 2155872511, OLIVEDRAB: 1804477439, ORANGE: 4289003775, ORANGERED: 4282712319, ORCHID: 3664828159, PALEGOLDENROD: 4008225535, PALEGREEN: 2566625535, PALETURQUOISE: 2951671551, PALEVIOLETRED: 3681588223, PAPAYAWHIP: 4293907967, PEACHPUFF: 4292524543, PERU: 3448061951, PINK: 4290825215, PLUM: 3718307327, POWDERBLUE: 2967529215, PURPLE: 2147516671, REBECCAPURPLE: 1714657791, RED: 4278190335, ROSYBROWN: 3163525119, ROYALBLUE: 1097458175, SADDLEBROWN: 2336560127, SALMON: 4202722047, SANDYBROWN: 4104413439, SEAGREEN: 780883967, SEASHELL: 4294307583, SIENNA: 2689740287, SILVER: 3233857791, SKYBLUE: 2278484991, SLATEBLUE: 1784335871, SLATEGRAY: 1887473919, SLATEGREY: 1887473919, SNOW: 4294638335, SPRINGGREEN: 16744447, STEELBLUE: 1182971135, TAN: 3535047935, TEAL: 8421631, THISTLE: 3636451583, TOMATO: 4284696575, TRANSPARENT: 0, TURQUOISE: 1088475391, VIOLET: 4001558271, WHEAT: 4125012991, WHITE: 4294967295, WHITESMOKE: 4126537215, YELLOW: 4294902015, YELLOWGREEN: 2597139199 }, hl = { name: "background-clip", initialValue: "border-box", prefix: !1, type: 1, parse: function(e, t) {
  return t.map(function(r) {
    if (vA(r))
      switch (r.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, ul = { name: "background-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, Qi = function(e, t) {
  var r = Ut(e, t[0]), a = t[1];
  return a && TA(a) ? { color: r, stop: a } : { color: r, stop: null };
}, bs = function(e, t) {
  var r = e[0], a = e[e.length - 1];
  r.stop === null && (r.stop = PA), a.stop === null && (a.stop = Ft);
  for (var g = [], p = 0, w = 0; w < e.length; w++) {
    var C = e[w].stop;
    if (C !== null) {
      var y = bA(C, t);
      y > p ? g.push(y) : g.push(p), p = y;
    } else
      g.push(null);
  }
  var Q = null;
  for (w = 0; w < g.length; w++) {
    var b = g[w];
    if (b === null)
      Q === null && (Q = w);
    else if (Q !== null) {
      for (var E = w - Q, S = (b - g[Q - 1]) / (E + 1), L = 1; L <= E; L++)
        g[Q + L - 1] = S * L;
      Q = null;
    }
  }
  return e.map(function(H, j) {
    return { color: H.color, stop: Math.max(Math.min(1, g[j] / t), 0) };
  });
}, dl = function(e, t, r) {
  var a = typeof e == "number" ? e : function(b, E, S) {
    var L = E / 2, H = S / 2, j = bA(b[0], E) - L, B = H - bA(b[1], S);
    return (Math.atan2(B, j) + 2 * Math.PI) % (2 * Math.PI);
  }(e, t, r), g = Math.abs(t * Math.sin(a)) + Math.abs(r * Math.cos(a)), p = t / 2, w = r / 2, C = g / 2, y = Math.sin(a - Math.PI / 2) * C, Q = Math.cos(a - Math.PI / 2) * C;
  return [g, p - Q, p + Q, w - y, w + y];
}, rt = function(e, t) {
  return Math.sqrt(e * e + t * t);
}, Qs = function(e, t, r, a, g) {
  return [[0, 0], [0, t], [e, 0], [e, t]].reduce(function(p, w) {
    var C = w[0], y = w[1], Q = rt(r - C, a - y);
    return (g ? Q < p.optimumDistance : Q > p.optimumDistance) ? { optimumCorner: w, optimumDistance: Q } : p;
  }, { optimumDistance: g ? 1 / 0 : -1 / 0, optimumCorner: null }).optimumCorner;
}, ei = function(e, t) {
  var r = At(180), a = [];
  return lt(t).forEach(function(g, p) {
    if (p === 0) {
      var w = g[0];
      if (w.type === 20 && ["top", "left", "right", "bottom"].indexOf(w.value) !== -1)
        return void (r = Oo(g));
      if (Ho(w))
        return void (r = (Mi(e, w) + At(270)) % At(360));
    }
    var C = Qi(e, g);
    a.push(C);
  }), { angle: r, stops: a, type: 1 };
}, Lo = "closest-side", Do = "farthest-side", Mo = "closest-corner", Po = "farthest-corner", Ro = "circle", Ko = "ellipse", jo = "cover", Go = "contain", ii = function(e, t) {
  var r = 0, a = 3, g = [], p = [];
  return lt(t).forEach(function(w, C) {
    var y = !0;
    if (C === 0 ? y = w.reduce(function(b, E) {
      if (vA(E))
        switch (E.value) {
          case "center":
            return p.push(nn), !1;
          case "top":
          case "left":
            return p.push(PA), !1;
          case "right":
          case "bottom":
            return p.push(Ft), !1;
        }
      else if (TA(E) || _t(E))
        return p.push(E), !1;
      return b;
    }, y) : C === 1 && (y = w.reduce(function(b, E) {
      if (vA(E))
        switch (E.value) {
          case Ro:
            return r = 0, !1;
          case Ko:
            return r = 1, !1;
          case Go:
          case Lo:
            return a = 0, !1;
          case Do:
            return a = 1, !1;
          case Mo:
            return a = 2, !1;
          case jo:
          case Po:
            return a = 3, !1;
        }
      else if (_t(E) || TA(E))
        return Array.isArray(a) || (a = []), a.push(E), !1;
      return b;
    }, y)), y) {
      var Q = Qi(e, w);
      g.push(Q);
    }
  }), { size: a, shape: r, stops: g, position: p, type: 2 };
}, sn = function(e, t) {
  if (t.type === 22) {
    var r = { url: t.value, type: 0 };
    return e.cache.addImage(t.value), r;
  }
  if (t.type === 18) {
    var a = No[t.name];
    if (a === void 0)
      throw new Error('Attempting to parse an unsupported image function "' + t.name + '"');
    return a(e, t.values);
  }
  throw new Error("Unsupported image type " + t.type);
}, ee, No = { "linear-gradient": function(e, t) {
  var r = At(180), a = [];
  return lt(t).forEach(function(g, p) {
    if (p === 0) {
      var w = g[0];
      if (w.type === 20 && w.value === "to")
        return void (r = Oo(g));
      if (Ho(w))
        return void (r = Mi(e, w));
    }
    var C = Qi(e, g);
    a.push(C);
  }), { angle: r, stops: a, type: 1 };
}, "-moz-linear-gradient": ei, "-ms-linear-gradient": ei, "-o-linear-gradient": ei, "-webkit-linear-gradient": ei, "radial-gradient": function(e, t) {
  var r = 0, a = 3, g = [], p = [];
  return lt(t).forEach(function(w, C) {
    var y = !0;
    if (C === 0) {
      var Q = !1;
      y = w.reduce(function(E, S) {
        if (Q)
          if (vA(S))
            switch (S.value) {
              case "center":
                return p.push(nn), E;
              case "top":
              case "left":
                return p.push(PA), E;
              case "right":
              case "bottom":
                return p.push(Ft), E;
            }
          else
            (TA(S) || _t(S)) && p.push(S);
        else if (vA(S))
          switch (S.value) {
            case Ro:
              return r = 0, !1;
            case Ko:
              return r = 1, !1;
            case "at":
              return Q = !0, !1;
            case Lo:
              return a = 0, !1;
            case jo:
            case Do:
              return a = 1, !1;
            case Go:
            case Mo:
              return a = 2, !1;
            case Po:
              return a = 3, !1;
          }
        else if (_t(S) || TA(S))
          return Array.isArray(a) || (a = []), a.push(S), !1;
        return E;
      }, y);
    }
    if (y) {
      var b = Qi(e, w);
      g.push(b);
    }
  }), { size: a, shape: r, stops: g, position: p, type: 2 };
}, "-moz-radial-gradient": ii, "-ms-radial-gradient": ii, "-o-radial-gradient": ii, "-webkit-radial-gradient": ii, "-webkit-gradient": function(e, t) {
  var r = At(180), a = [], g = 1;
  return lt(t).forEach(function(p, w) {
    var C = p[0];
    if (w === 0) {
      if (vA(C) && C.value === "linear")
        return void (g = 1);
      if (vA(C) && C.value === "radial")
        return void (g = 2);
    }
    if (C.type === 18) {
      if (C.name === "from") {
        var y = Ut(e, C.values[0]);
        a.push({ stop: PA, color: y });
      } else if (C.name === "to")
        y = Ut(e, C.values[0]), a.push({ stop: Ft, color: y });
      else if (C.name === "color-stop") {
        var Q = C.values.filter(ne);
        if (Q.length === 2) {
          y = Ut(e, Q[1]);
          var b = Q[0];
          Zt(b) && a.push({ stop: { type: 16, number: 100 * b.number, flags: b.flags }, color: y });
        }
      }
    }
  }), g === 1 ? { angle: (r + At(180)) % At(360), stops: a, type: g } : { size: 3, shape: 0, stops: a, position: [], type: g };
} }, gl = { name: "background-image", initialValue: "none", type: 1, prefix: !1, parse: function(e, t) {
  if (t.length === 0)
    return [];
  var r = t[0];
  return r.type === 20 && r.value === "none" ? [] : t.filter(function(a) {
    return ne(a) && function(g) {
      return !(g.type === 20 && g.value === "none" || g.type === 18 && !No[g.name]);
    }(a);
  }).map(function(a) {
    return sn(e, a);
  });
} }, fl = { name: "background-origin", initialValue: "border-box", prefix: !1, type: 1, parse: function(e, t) {
  return t.map(function(r) {
    if (vA(r))
      switch (r.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, pl = { name: "background-position", initialValue: "0% 0%", type: 1, prefix: !1, parse: function(e, t) {
  return lt(t).map(function(r) {
    return r.filter(TA);
  }).map(So);
} }, Bl = { name: "background-repeat", initialValue: "repeat", prefix: !1, type: 1, parse: function(e, t) {
  return lt(t).map(function(r) {
    return r.filter(vA).map(function(a) {
      return a.value;
    }).join(" ");
  }).map(wl);
} }, wl = function(e) {
  switch (e) {
    case "no-repeat":
      return 1;
    case "repeat-x":
    case "repeat no-repeat":
      return 2;
    case "repeat-y":
    case "no-repeat repeat":
      return 3;
    default:
      return 0;
  }
};
(function(e) {
  e.AUTO = "auto", e.CONTAIN = "contain", e.COVER = "cover";
})(ee || (ee = {}));
var Fi, ml = { name: "background-size", initialValue: "0", prefix: !1, type: 1, parse: function(e, t) {
  return lt(t).map(function(r) {
    return r.filter(Cl);
  });
} }, Cl = function(e) {
  return vA(e) || TA(e);
}, Pi = function(e) {
  return { name: "border-" + e + "-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" };
}, vl = Pi("top"), yl = Pi("right"), bl = Pi("bottom"), Ql = Pi("left"), Ri = function(e) {
  return { name: "border-radius-" + e, initialValue: "0 0", prefix: !1, type: 1, parse: function(t, r) {
    return So(r.filter(TA));
  } };
}, Fl = Ri("top-left"), xl = Ri("top-right"), Ul = Ri("bottom-right"), El = Ri("bottom-left"), Ki = function(e) {
  return { name: "border-" + e + "-style", initialValue: "solid", prefix: !1, type: 2, parse: function(t, r) {
    switch (r) {
      case "none":
        return 0;
      case "dashed":
        return 2;
      case "dotted":
        return 3;
      case "double":
        return 4;
    }
    return 1;
  } };
}, _l = Ki("top"), kl = Ki("right"), Sl = Ki("bottom"), Tl = Ki("left"), ji = function(e) {
  return { name: "border-" + e + "-width", initialValue: "0", type: 0, prefix: !1, parse: function(t, r) {
    return Ie(r) ? r.number : 0;
  } };
}, Il = ji("top"), Hl = ji("right"), Ol = ji("bottom"), Ll = ji("left"), Dl = { name: "color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, Ml = { name: "direction", initialValue: "ltr", prefix: !1, type: 2, parse: function(e, t) {
  return t === "rtl" ? 1 : 0;
} }, Pl = { name: "display", initialValue: "inline-block", prefix: !1, type: 1, parse: function(e, t) {
  return t.filter(vA).reduce(function(r, a) {
    return r | Rl(a.value);
  }, 0);
} }, Rl = function(e) {
  switch (e) {
    case "block":
    case "-webkit-box":
      return 2;
    case "inline":
      return 4;
    case "run-in":
      return 8;
    case "flow":
      return 16;
    case "flow-root":
      return 32;
    case "table":
      return 64;
    case "flex":
    case "-webkit-flex":
      return 128;
    case "grid":
    case "-ms-grid":
      return 256;
    case "ruby":
      return 512;
    case "subgrid":
      return 1024;
    case "list-item":
      return 2048;
    case "table-row-group":
      return 4096;
    case "table-header-group":
      return 8192;
    case "table-footer-group":
      return 16384;
    case "table-row":
      return 32768;
    case "table-cell":
      return 65536;
    case "table-column-group":
      return 131072;
    case "table-column":
      return 262144;
    case "table-caption":
      return 524288;
    case "ruby-base":
      return 1048576;
    case "ruby-text":
      return 2097152;
    case "ruby-base-container":
      return 4194304;
    case "ruby-text-container":
      return 8388608;
    case "contents":
      return 16777216;
    case "inline-block":
      return 33554432;
    case "inline-list-item":
      return 67108864;
    case "inline-table":
      return 134217728;
    case "inline-flex":
      return 268435456;
    case "inline-grid":
      return 536870912;
  }
  return 0;
}, Kl = { name: "float", initialValue: "none", prefix: !1, type: 2, parse: function(e, t) {
  switch (t) {
    case "left":
      return 1;
    case "right":
      return 2;
    case "inline-start":
      return 3;
    case "inline-end":
      return 4;
  }
  return 0;
} }, jl = { name: "letter-spacing", initialValue: "0", prefix: !1, type: 0, parse: function(e, t) {
  return t.type === 20 && t.value === "normal" ? 0 : t.type === 17 || t.type === 15 ? t.number : 0;
} };
(function(e) {
  e.NORMAL = "normal", e.STRICT = "strict";
})(Fi || (Fi = {}));
var Ue, Gl = { name: "line-break", initialValue: "normal", prefix: !1, type: 2, parse: function(e, t) {
  return t === "strict" ? Fi.STRICT : Fi.NORMAL;
} }, Nl = { name: "line-height", initialValue: "normal", prefix: !1, type: 4 }, Fs = function(e, t) {
  return vA(e) && e.value === "normal" ? 1.2 * t : e.type === 17 ? t * e.number : TA(e) ? bA(e, t) : t;
}, Vl = { name: "list-style-image", initialValue: "none", type: 0, prefix: !1, parse: function(e, t) {
  return t.type === 20 && t.value === "none" ? null : sn(e, t);
} }, Xl = { name: "list-style-position", initialValue: "outside", prefix: !1, type: 2, parse: function(e, t) {
  return t === "inside" ? 0 : 1;
} }, Or = { name: "list-style-type", initialValue: "none", prefix: !1, type: 2, parse: function(e, t) {
  switch (t) {
    case "disc":
      return 0;
    case "circle":
      return 1;
    case "square":
      return 2;
    case "decimal":
      return 3;
    case "cjk-decimal":
      return 4;
    case "decimal-leading-zero":
      return 5;
    case "lower-roman":
      return 6;
    case "upper-roman":
      return 7;
    case "lower-greek":
      return 8;
    case "lower-alpha":
      return 9;
    case "upper-alpha":
      return 10;
    case "arabic-indic":
      return 11;
    case "armenian":
      return 12;
    case "bengali":
      return 13;
    case "cambodian":
      return 14;
    case "cjk-earthly-branch":
      return 15;
    case "cjk-heavenly-stem":
      return 16;
    case "cjk-ideographic":
      return 17;
    case "devanagari":
      return 18;
    case "ethiopic-numeric":
      return 19;
    case "georgian":
      return 20;
    case "gujarati":
      return 21;
    case "gurmukhi":
    case "hebrew":
      return 22;
    case "hiragana":
      return 23;
    case "hiragana-iroha":
      return 24;
    case "japanese-formal":
      return 25;
    case "japanese-informal":
      return 26;
    case "kannada":
      return 27;
    case "katakana":
      return 28;
    case "katakana-iroha":
      return 29;
    case "khmer":
      return 30;
    case "korean-hangul-formal":
      return 31;
    case "korean-hanja-formal":
      return 32;
    case "korean-hanja-informal":
      return 33;
    case "lao":
      return 34;
    case "lower-armenian":
      return 35;
    case "malayalam":
      return 36;
    case "mongolian":
      return 37;
    case "myanmar":
      return 38;
    case "oriya":
      return 39;
    case "persian":
      return 40;
    case "simp-chinese-formal":
      return 41;
    case "simp-chinese-informal":
      return 42;
    case "tamil":
      return 43;
    case "telugu":
      return 44;
    case "thai":
      return 45;
    case "tibetan":
      return 46;
    case "trad-chinese-formal":
      return 47;
    case "trad-chinese-informal":
      return 48;
    case "upper-armenian":
      return 49;
    case "disclosure-open":
      return 50;
    case "disclosure-closed":
      return 51;
    default:
      return -1;
  }
} }, Gi = function(e) {
  return { name: "margin-" + e, initialValue: "0", prefix: !1, type: 4 };
}, Wl = Gi("top"), Yl = Gi("right"), zl = Gi("bottom"), Jl = Gi("left"), ql = { name: "overflow", initialValue: "visible", prefix: !1, type: 1, parse: function(e, t) {
  return t.filter(vA).map(function(r) {
    switch (r.value) {
      case "hidden":
        return 1;
      case "scroll":
        return 2;
      case "clip":
        return 3;
      case "auto":
        return 4;
      default:
        return 0;
    }
  });
} }, Zl = { name: "overflow-wrap", initialValue: "normal", prefix: !1, type: 2, parse: function(e, t) {
  return t === "break-word" ? "break-word" : "normal";
} }, Ni = function(e) {
  return { name: "padding-" + e, initialValue: "0", prefix: !1, type: 3, format: "length-percentage" };
}, $l = Ni("top"), Ah = Ni("right"), th = Ni("bottom"), eh = Ni("left"), ih = { name: "text-align", initialValue: "left", prefix: !1, type: 2, parse: function(e, t) {
  switch (t) {
    case "right":
      return 2;
    case "center":
    case "justify":
      return 1;
    default:
      return 0;
  }
} }, rh = { name: "position", initialValue: "static", prefix: !1, type: 2, parse: function(e, t) {
  switch (t) {
    case "relative":
      return 1;
    case "absolute":
      return 2;
    case "fixed":
      return 3;
    case "sticky":
      return 4;
  }
  return 0;
} }, nh = { name: "text-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(e, t) {
  return t.length === 1 && Hr(t[0], "none") ? [] : lt(t).map(function(r) {
    for (var a = { color: Ct.TRANSPARENT, offsetX: PA, offsetY: PA, blur: PA }, g = 0, p = 0; p < r.length; p++) {
      var w = r[p];
      _t(w) ? (g === 0 ? a.offsetX = w : g === 1 ? a.offsetY = w : a.blur = w, g++) : a.color = Ut(e, w);
    }
    return a;
  });
} }, sh = { name: "text-transform", initialValue: "none", prefix: !1, type: 2, parse: function(e, t) {
  switch (t) {
    case "uppercase":
      return 2;
    case "lowercase":
      return 1;
    case "capitalize":
      return 3;
  }
  return 0;
} }, oh = { name: "transform", initialValue: "none", prefix: !0, type: 0, parse: function(e, t) {
  if (t.type === 20 && t.value === "none")
    return null;
  if (t.type === 18) {
    var r = ah[t.name];
    if (r === void 0)
      throw new Error('Attempting to parse an unsupported transform function "' + t.name + '"');
    return r(t.values);
  }
  return null;
} }, ah = { matrix: function(e) {
  var t = e.filter(function(r) {
    return r.type === 17;
  }).map(function(r) {
    return r.number;
  });
  return t.length === 6 ? t : null;
}, matrix3d: function(e) {
  var t = e.filter(function(y) {
    return y.type === 17;
  }).map(function(y) {
    return y.number;
  }), r = t[0], a = t[1];
  t[2], t[3];
  var g = t[4], p = t[5];
  t[6], t[7], t[8], t[9], t[10], t[11];
  var w = t[12], C = t[13];
  return t[14], t[15], t.length === 16 ? [r, a, g, p, w, C] : null;
} }, xs = { type: 16, number: 50, flags: 4 }, ch = [xs, xs], lh = { name: "transform-origin", initialValue: "50% 50%", prefix: !0, type: 1, parse: function(e, t) {
  var r = t.filter(TA);
  return r.length !== 2 ? ch : [r[0], r[1]];
} }, hh = { name: "visible", initialValue: "none", prefix: !1, type: 2, parse: function(e, t) {
  switch (t) {
    case "hidden":
      return 1;
    case "collapse":
      return 2;
    default:
      return 0;
  }
} };
(function(e) {
  e.NORMAL = "normal", e.BREAK_ALL = "break-all", e.KEEP_ALL = "keep-all";
})(Ue || (Ue = {}));
for (var uh = { name: "word-break", initialValue: "normal", prefix: !1, type: 2, parse: function(e, t) {
  switch (t) {
    case "break-all":
      return Ue.BREAK_ALL;
    case "keep-all":
      return Ue.KEEP_ALL;
    default:
      return Ue.NORMAL;
  }
} }, dh = { name: "z-index", initialValue: "auto", prefix: !1, type: 0, parse: function(e, t) {
  if (t.type === 20)
    return { auto: !0, order: 0 };
  if (Zt(t))
    return { auto: !1, order: t.number };
  throw new Error("Invalid z-index number parsed");
} }, Us = function(e, t) {
  if (t.type === 15)
    switch (t.unit.toLowerCase()) {
      case "s":
        return 1e3 * t.number;
      case "ms":
        return t.number;
    }
  throw new Error("Unsupported time type");
}, gh = { name: "opacity", initialValue: "1", type: 0, prefix: !1, parse: function(e, t) {
  return Zt(t) ? t.number : 1;
} }, fh = { name: "text-decoration-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, ph = { name: "text-decoration-line", initialValue: "none", prefix: !1, type: 1, parse: function(e, t) {
  return t.filter(vA).map(function(r) {
    switch (r.value) {
      case "underline":
        return 1;
      case "overline":
        return 2;
      case "line-through":
        return 3;
      case "none":
        return 4;
    }
    return 0;
  }).filter(function(r) {
    return r !== 0;
  });
} }, Bh = { name: "font-family", initialValue: "", prefix: !1, type: 1, parse: function(e, t) {
  var r = [], a = [];
  return t.forEach(function(g) {
    switch (g.type) {
      case 20:
      case 0:
        r.push(g.value);
        break;
      case 17:
        r.push(g.number.toString());
        break;
      case 4:
        a.push(r.join(" ")), r.length = 0;
    }
  }), r.length && a.push(r.join(" ")), a.map(function(g) {
    return g.indexOf(" ") === -1 ? g : "'" + g + "'";
  });
} }, wh = { name: "font-size", initialValue: "0", prefix: !1, type: 3, format: "length" }, mh = { name: "font-weight", initialValue: "normal", type: 0, prefix: !1, parse: function(e, t) {
  return Zt(t) ? t.number : vA(t) && t.value === "bold" ? 700 : 400;
} }, Ch = { name: "font-variant", initialValue: "none", type: 1, prefix: !1, parse: function(e, t) {
  return t.filter(vA).map(function(r) {
    return r.value;
  });
} }, vh = { name: "font-style", initialValue: "normal", prefix: !1, type: 2, parse: function(e, t) {
  switch (t) {
    case "oblique":
      return "oblique";
    case "italic":
      return "italic";
    default:
      return "normal";
  }
} }, IA = function(e, t) {
  return !!(e & t);
}, yh = { name: "content", initialValue: "none", type: 1, prefix: !1, parse: function(e, t) {
  if (t.length === 0)
    return [];
  var r = t[0];
  return r.type === 20 && r.value === "none" ? [] : t;
} }, bh = { name: "counter-increment", initialValue: "none", prefix: !0, type: 1, parse: function(e, t) {
  if (t.length === 0)
    return null;
  var r = t[0];
  if (r.type === 20 && r.value === "none")
    return null;
  for (var a = [], g = t.filter(ms), p = 0; p < g.length; p++) {
    var w = g[p], C = g[p + 1];
    if (w.type === 20) {
      var y = C && Zt(C) ? C.number : 1;
      a.push({ counter: w.value, increment: y });
    }
  }
  return a;
} }, Qh = { name: "counter-reset", initialValue: "none", prefix: !0, type: 1, parse: function(e, t) {
  if (t.length === 0)
    return [];
  for (var r = [], a = t.filter(ms), g = 0; g < a.length; g++) {
    var p = a[g], w = a[g + 1];
    if (vA(p) && p.value !== "none") {
      var C = w && Zt(w) ? w.number : 0;
      r.push({ counter: p.value, reset: C });
    }
  }
  return r;
} }, Fh = { name: "duration", initialValue: "0s", prefix: !1, type: 1, parse: function(e, t) {
  return t.filter(Ie).map(function(r) {
    return Us(e, r);
  });
} }, xh = { name: "quotes", initialValue: "none", prefix: !0, type: 1, parse: function(e, t) {
  if (t.length === 0)
    return null;
  var r = t[0];
  if (r.type === 20 && r.value === "none")
    return null;
  var a = [], g = t.filter(al);
  if (g.length % 2 != 0)
    return null;
  for (var p = 0; p < g.length; p += 2) {
    var w = g[p].value, C = g[p + 1].value;
    a.push({ open: w, close: C });
  }
  return a;
} }, Es = function(e, t, r) {
  if (!e)
    return "";
  var a = e[Math.min(t, e.length - 1)];
  return a ? r ? a.open : a.close : "";
}, Uh = { name: "box-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(e, t) {
  return t.length === 1 && Hr(t[0], "none") ? [] : lt(t).map(function(r) {
    for (var a = { color: 255, offsetX: PA, offsetY: PA, blur: PA, spread: PA, inset: !1 }, g = 0, p = 0; p < r.length; p++) {
      var w = r[p];
      Hr(w, "inset") ? a.inset = !0 : _t(w) ? (g === 0 ? a.offsetX = w : g === 1 ? a.offsetY = w : g === 2 ? a.blur = w : a.spread = w, g++) : a.color = Ut(e, w);
    }
    return a;
  });
} }, Eh = { name: "paint-order", initialValue: "normal", prefix: !1, type: 1, parse: function(e, t) {
  var r = [];
  return t.filter(vA).forEach(function(a) {
    switch (a.value) {
      case "stroke":
        r.push(1);
        break;
      case "fill":
        r.push(0);
        break;
      case "markers":
        r.push(2);
    }
  }), [0, 1, 2].forEach(function(a) {
    r.indexOf(a) === -1 && r.push(a);
  }), r;
} }, _h = { name: "-webkit-text-stroke-color", initialValue: "currentcolor", prefix: !1, type: 3, format: "color" }, kh = { name: "-webkit-text-stroke-width", initialValue: "0", type: 0, prefix: !1, parse: function(e, t) {
  return Ie(t) ? t.number : 0;
} }, Sh = function() {
  function e(t, r) {
    var a, g;
    this.animationDuration = aA(t, Fh, r.animationDuration), this.backgroundClip = aA(t, hl, r.backgroundClip), this.backgroundColor = aA(t, ul, r.backgroundColor), this.backgroundImage = aA(t, gl, r.backgroundImage), this.backgroundOrigin = aA(t, fl, r.backgroundOrigin), this.backgroundPosition = aA(t, pl, r.backgroundPosition), this.backgroundRepeat = aA(t, Bl, r.backgroundRepeat), this.backgroundSize = aA(t, ml, r.backgroundSize), this.borderTopColor = aA(t, vl, r.borderTopColor), this.borderRightColor = aA(t, yl, r.borderRightColor), this.borderBottomColor = aA(t, bl, r.borderBottomColor), this.borderLeftColor = aA(t, Ql, r.borderLeftColor), this.borderTopLeftRadius = aA(t, Fl, r.borderTopLeftRadius), this.borderTopRightRadius = aA(t, xl, r.borderTopRightRadius), this.borderBottomRightRadius = aA(t, Ul, r.borderBottomRightRadius), this.borderBottomLeftRadius = aA(t, El, r.borderBottomLeftRadius), this.borderTopStyle = aA(t, _l, r.borderTopStyle), this.borderRightStyle = aA(t, kl, r.borderRightStyle), this.borderBottomStyle = aA(t, Sl, r.borderBottomStyle), this.borderLeftStyle = aA(t, Tl, r.borderLeftStyle), this.borderTopWidth = aA(t, Il, r.borderTopWidth), this.borderRightWidth = aA(t, Hl, r.borderRightWidth), this.borderBottomWidth = aA(t, Ol, r.borderBottomWidth), this.borderLeftWidth = aA(t, Ll, r.borderLeftWidth), this.boxShadow = aA(t, Uh, r.boxShadow), this.color = aA(t, Dl, r.color), this.direction = aA(t, Ml, r.direction), this.display = aA(t, Pl, r.display), this.float = aA(t, Kl, r.cssFloat), this.fontFamily = aA(t, Bh, r.fontFamily), this.fontSize = aA(t, wh, r.fontSize), this.fontStyle = aA(t, vh, r.fontStyle), this.fontVariant = aA(t, Ch, r.fontVariant), this.fontWeight = aA(t, mh, r.fontWeight), this.letterSpacing = aA(t, jl, r.letterSpacing), this.lineBreak = aA(t, Gl, r.lineBreak), this.lineHeight = aA(t, Nl, r.lineHeight), this.listStyleImage = aA(t, Vl, r.listStyleImage), this.listStylePosition = aA(t, Xl, r.listStylePosition), this.listStyleType = aA(t, Or, r.listStyleType), this.marginTop = aA(t, Wl, r.marginTop), this.marginRight = aA(t, Yl, r.marginRight), this.marginBottom = aA(t, zl, r.marginBottom), this.marginLeft = aA(t, Jl, r.marginLeft), this.opacity = aA(t, gh, r.opacity);
    var p = aA(t, ql, r.overflow);
    this.overflowX = p[0], this.overflowY = p[p.length > 1 ? 1 : 0], this.overflowWrap = aA(t, Zl, r.overflowWrap), this.paddingTop = aA(t, $l, r.paddingTop), this.paddingRight = aA(t, Ah, r.paddingRight), this.paddingBottom = aA(t, th, r.paddingBottom), this.paddingLeft = aA(t, eh, r.paddingLeft), this.paintOrder = aA(t, Eh, r.paintOrder), this.position = aA(t, rh, r.position), this.textAlign = aA(t, ih, r.textAlign), this.textDecorationColor = aA(t, fh, (a = r.textDecorationColor) !== null && a !== void 0 ? a : r.color), this.textDecorationLine = aA(t, ph, (g = r.textDecorationLine) !== null && g !== void 0 ? g : r.textDecoration), this.textShadow = aA(t, nh, r.textShadow), this.textTransform = aA(t, sh, r.textTransform), this.transform = aA(t, oh, r.transform), this.transformOrigin = aA(t, lh, r.transformOrigin), this.visibility = aA(t, hh, r.visibility), this.webkitTextStrokeColor = aA(t, _h, r.webkitTextStrokeColor), this.webkitTextStrokeWidth = aA(t, kh, r.webkitTextStrokeWidth), this.wordBreak = aA(t, uh, r.wordBreak), this.zIndex = aA(t, dh, r.zIndex);
  }
  return e.prototype.isVisible = function() {
    return this.display > 0 && this.opacity > 0 && this.visibility === 0;
  }, e.prototype.isTransparent = function() {
    return Et(this.backgroundColor);
  }, e.prototype.isTransformed = function() {
    return this.transform !== null;
  }, e.prototype.isPositioned = function() {
    return this.position !== 0;
  }, e.prototype.isPositionedWithZIndex = function() {
    return this.isPositioned() && !this.zIndex.auto;
  }, e.prototype.isFloating = function() {
    return this.float !== 0;
  }, e.prototype.isInlineLevel = function() {
    return IA(this.display, 4) || IA(this.display, 33554432) || IA(this.display, 268435456) || IA(this.display, 536870912) || IA(this.display, 67108864) || IA(this.display, 134217728);
  }, e;
}(), Th = function(e, t) {
  this.content = aA(e, yh, t.content), this.quotes = aA(e, xh, t.quotes);
}, _s = function(e, t) {
  this.counterIncrement = aA(e, bh, t.counterIncrement), this.counterReset = aA(e, Qh, t.counterReset);
}, aA = function(e, t, r) {
  var a = new _o(), g = r != null ? r.toString() : t.initialValue;
  a.write(g);
  var p = new ko(a.read());
  switch (t.type) {
    case 2:
      var w = p.parseComponentValue();
      return t.parse(e, vA(w) ? w.value : t.initialValue);
    case 0:
      return t.parse(e, p.parseComponentValue());
    case 1:
      return t.parse(e, p.parseComponentValues());
    case 4:
      return p.parseComponentValue();
    case 3:
      switch (t.format) {
        case "angle":
          return Mi(e, p.parseComponentValue());
        case "color":
          return Ut(e, p.parseComponentValue());
        case "image":
          return sn(e, p.parseComponentValue());
        case "length":
          var C = p.parseComponentValue();
          return _t(C) ? C : PA;
        case "length-percentage":
          var y = p.parseComponentValue();
          return TA(y) ? y : PA;
        case "time":
          return Us(e, p.parseComponentValue());
      }
  }
}, Lr = function(e, t) {
  var r = function(a) {
    switch (a.getAttribute("data-html2canvas-debug")) {
      case "all":
        return 1;
      case "clone":
        return 2;
      case "parse":
        return 3;
      case "render":
        return 4;
      default:
        return 0;
    }
  }(e);
  return r === 1 || t === r;
}, ut = function(e, t) {
  this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, Lr(t, 3), this.styles = new Sh(e, window.getComputedStyle(t, null)), Pr(t) && (this.styles.animationDuration.some(function(r) {
    return r > 0;
  }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = Di(this.context, t), Lr(t, 4) && (this.flags |= 16);
}, Ih = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ye = typeof Uint8Array > "u" ? [] : new Uint8Array(256), ri = 0; ri < 64; ri++)
  ye[Ih.charCodeAt(ri)] = ri;
for (var ks = function(e, t, r) {
  return e.slice ? e.slice(t, r) : new Uint16Array(Array.prototype.slice.call(e, t, r));
}, Hh = function() {
  function e(t, r, a, g, p, w) {
    this.initialValue = t, this.errorValue = r, this.highStart = a, this.highValueIndex = g, this.index = p, this.data = w;
  }
  return e.prototype.get = function(t) {
    var r;
    if (t >= 0) {
      if (t < 55296 || t > 56319 && t <= 65535)
        return r = ((r = this.index[t >> 5]) << 2) + (31 & t), this.data[r];
      if (t <= 65535)
        return r = ((r = this.index[2048 + (t - 55296 >> 5)]) << 2) + (31 & t), this.data[r];
      if (t < this.highStart)
        return r = 2080 + (t >> 11), r = this.index[r], r += t >> 5 & 63, r = ((r = this.index[r]) << 2) + (31 & t), this.data[r];
      if (t <= 1114111)
        return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, e;
}(), Oh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Lh = typeof Uint8Array > "u" ? [] : new Uint8Array(256), ni = 0; ni < 64; ni++)
  Lh[Oh.charCodeAt(ni)] = ni;
var Ee, Ss = 8, or = 9, Ts = 11, Is = 12, Dh = function() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var r = e.length;
  if (!r)
    return "";
  for (var a = [], g = -1, p = ""; ++g < r; ) {
    var w = e[g];
    w <= 65535 ? a.push(w) : (w -= 65536, a.push(55296 + (w >> 10), w % 1024 + 56320)), (g + 1 === r || a.length > 16384) && (p += String.fromCharCode.apply(String, a), a.length = 0);
  }
  return p;
}, Mh = function(e, t) {
  var r, a, g, p = function(b) {
    var E, S, L, H, j, B = 0.75 * b.length, J = b.length, iA = 0;
    b[b.length - 1] === "=" && (B--, b[b.length - 2] === "=" && B--);
    var cA = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && Uint8Array.prototype.slice !== void 0 ? new ArrayBuffer(B) : new Array(B), u = Array.isArray(cA) ? cA : new Uint8Array(cA);
    for (E = 0; E < J; E += 4)
      S = ye[b.charCodeAt(E)], L = ye[b.charCodeAt(E + 1)], H = ye[b.charCodeAt(E + 2)], j = ye[b.charCodeAt(E + 3)], u[iA++] = S << 2 | L >> 4, u[iA++] = (15 & L) << 4 | H >> 2, u[iA++] = (3 & H) << 6 | 63 & j;
    return cA;
  }(e), w = Array.isArray(p) ? function(b) {
    for (var E = b.length, S = [], L = 0; L < E; L += 4)
      S.push(b[L + 3] << 24 | b[L + 2] << 16 | b[L + 1] << 8 | b[L]);
    return S;
  }(p) : new Uint32Array(p), C = Array.isArray(p) ? function(b) {
    for (var E = b.length, S = [], L = 0; L < E; L += 2)
      S.push(b[L + 1] << 8 | b[L]);
    return S;
  }(p) : new Uint16Array(p), y = ks(C, 12, w[4] / 2), Q = w[5] === 2 ? ks(C, (24 + w[4]) / 2) : (r = w, a = Math.ceil((24 + w[4]) / 4), r.slice ? r.slice(a, g) : new Uint32Array(Array.prototype.slice.call(r, a, g)));
  return new Hh(w[0], w[1], w[2], w[3], y, Q);
}("AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA="), JA = "×", Ph = function(e) {
  return Mh.get(e);
}, Rh = function(e, t, r) {
  var a = r - 2, g = t[a], p = t[r - 1], w = t[r];
  if (p === 2 && w === 3)
    return JA;
  if (p === 2 || p === 3 || p === 4 || w === 2 || w === 3 || w === 4)
    return "÷";
  if (p === Ss && [Ss, or, Ts, Is].indexOf(w) !== -1 || !(p !== Ts && p !== or || w !== or && w !== 10) || (p === Is || p === 10) && w === 10 || w === 13 || w === 5 || w === 7 || p === 1)
    return JA;
  if (p === 13 && w === 14) {
    for (; g === 5; )
      g = t[--a];
    if (g === 14)
      return JA;
  }
  if (p === 15 && w === 15) {
    for (var C = 0; g === 15; )
      C++, g = t[--a];
    if (C % 2 == 0)
      return JA;
  }
  return "÷";
}, Kh = function(e) {
  var t = function(w) {
    for (var C = [], y = 0, Q = w.length; y < Q; ) {
      var b = w.charCodeAt(y++);
      if (b >= 55296 && b <= 56319 && y < Q) {
        var E = w.charCodeAt(y++);
        (64512 & E) == 56320 ? C.push(((1023 & b) << 10) + (1023 & E) + 65536) : (C.push(b), y--);
      } else
        C.push(b);
    }
    return C;
  }(e), r = t.length, a = 0, g = 0, p = t.map(Ph);
  return { next: function() {
    if (a >= r)
      return { done: !0, value: null };
    for (var w = JA; a < r && (w = Rh(0, p, ++a)) === JA; )
      ;
    if (w !== JA || a === r) {
      var C = Dh.apply(null, t.slice(g, a));
      return g = a, { value: C, done: !1 };
    }
    return { done: !0, value: null };
  } };
}, Hs = function(e) {
  return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255;
}, Dr = function(e, t, r, a, g) {
  var p = "http://www.w3.org/2000/svg", w = document.createElementNS(p, "svg"), C = document.createElementNS(p, "foreignObject");
  return w.setAttributeNS(null, "width", e.toString()), w.setAttributeNS(null, "height", t.toString()), C.setAttributeNS(null, "width", "100%"), C.setAttributeNS(null, "height", "100%"), C.setAttributeNS(null, "x", r.toString()), C.setAttributeNS(null, "y", a.toString()), C.setAttributeNS(null, "externalResourcesRequired", "true"), w.appendChild(C), C.appendChild(g), w;
}, Os = function(e) {
  return new Promise(function(t, r) {
    var a = new Image();
    a.onload = function() {
      return t(a);
    }, a.onerror = r, a.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, MA = { get SUPPORT_RANGE_BOUNDS() {
  var e = function(t) {
    if (t.createRange) {
      var r = t.createRange();
      if (r.getBoundingClientRect) {
        var a = t.createElement("boundtest");
        a.style.height = "123px", a.style.display = "block", t.body.appendChild(a), r.selectNode(a);
        var g = r.getBoundingClientRect(), p = Math.round(g.height);
        if (t.body.removeChild(a), p === 123)
          return !0;
      }
    }
    return !1;
  }(document);
  return Object.defineProperty(MA, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
}, get SUPPORT_WORD_BREAKING() {
  var e = MA.SUPPORT_RANGE_BOUNDS && function(t) {
    var r = t.createElement("boundtest");
    r.style.width = "50px", r.style.display = "block", r.style.fontSize = "12px", r.style.letterSpacing = "0px", r.style.wordSpacing = "0px", t.body.appendChild(r);
    var a = t.createRange();
    r.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var g = r.firstChild, p = yi(g.data).map(function(Q) {
      return _A(Q);
    }), w = 0, C = {}, y = p.every(function(Q, b) {
      a.setStart(g, w), a.setEnd(g, w + Q.length);
      var E = a.getBoundingClientRect();
      w += Q.length;
      var S = E.x > C.x || E.y > C.y;
      return C = E, b === 0 || S;
    });
    return t.body.removeChild(r), y;
  }(document);
  return Object.defineProperty(MA, "SUPPORT_WORD_BREAKING", { value: e }), e;
}, get SUPPORT_SVG_DRAWING() {
  var e = function(t) {
    var r = new Image(), a = t.createElement("canvas"), g = a.getContext("2d");
    if (!g)
      return !1;
    r.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
      g.drawImage(r, 0, 0), a.toDataURL();
    } catch {
      return !1;
    }
    return !0;
  }(document);
  return Object.defineProperty(MA, "SUPPORT_SVG_DRAWING", { value: e }), e;
}, get SUPPORT_FOREIGNOBJECT_DRAWING() {
  var e = typeof Array.from == "function" && typeof window.fetch == "function" ? function(t) {
    var r = t.createElement("canvas"), a = 100;
    r.width = a, r.height = a;
    var g = r.getContext("2d");
    if (!g)
      return Promise.reject(!1);
    g.fillStyle = "rgb(0, 255, 0)", g.fillRect(0, 0, a, a);
    var p = new Image(), w = r.toDataURL();
    p.src = w;
    var C = Dr(a, a, 0, 0, p);
    return g.fillStyle = "red", g.fillRect(0, 0, a, a), Os(C).then(function(y) {
      g.drawImage(y, 0, 0);
      var Q = g.getImageData(0, 0, a, a).data;
      g.fillStyle = "red", g.fillRect(0, 0, a, a);
      var b = t.createElement("div");
      return b.style.backgroundImage = "url(" + w + ")", b.style.height = a + "px", Hs(Q) ? Os(Dr(a, a, 0, 0, b)) : Promise.reject(!1);
    }).then(function(y) {
      return g.drawImage(y, 0, 0), Hs(g.getImageData(0, 0, a, a).data);
    }).catch(function() {
      return !1;
    });
  }(document) : Promise.resolve(!1);
  return Object.defineProperty(MA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
}, get SUPPORT_CORS_IMAGES() {
  var e = new Image().crossOrigin !== void 0;
  return Object.defineProperty(MA, "SUPPORT_CORS_IMAGES", { value: e }), e;
}, get SUPPORT_RESPONSE_TYPE() {
  var e = typeof new XMLHttpRequest().responseType == "string";
  return Object.defineProperty(MA, "SUPPORT_RESPONSE_TYPE", { value: e }), e;
}, get SUPPORT_CORS_XHR() {
  var e = "withCredentials" in new XMLHttpRequest();
  return Object.defineProperty(MA, "SUPPORT_CORS_XHR", { value: e }), e;
}, get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
  var e = !(typeof Intl > "u" || !Intl.Segmenter);
  return Object.defineProperty(MA, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: e }), e;
} }, _e = function(e, t) {
  this.text = e, this.bounds = t;
}, jh = function(e, t) {
  var r = t.ownerDocument;
  if (r) {
    var a = r.createElement("html2canvaswrapper");
    a.appendChild(t.cloneNode(!0));
    var g = t.parentNode;
    if (g) {
      g.replaceChild(a, t);
      var p = Di(e, a);
      return a.firstChild && g.replaceChild(a.firstChild, a), p;
    }
  }
  return vt.EMPTY;
}, Ls = function(e, t, r) {
  var a = e.ownerDocument;
  if (!a)
    throw new Error("Node has no owner document");
  var g = a.createRange();
  return g.setStart(e, t), g.setEnd(e, t + r), g;
}, on = function(e) {
  if (MA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(t.segment(e)).map(function(r) {
      return r.segment;
    });
  }
  return function(r) {
    for (var a, g = Kh(r), p = []; !(a = g.next()).done; )
      a.value && p.push(a.value.slice());
    return p;
  }(e);
}, Gh = function(e, t) {
  return t.letterSpacing !== 0 ? on(e) : function(r, a) {
    if (MA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var g = new Intl.Segmenter(void 0, { granularity: "word" });
      return Array.from(g.segment(r)).map(function(p) {
        return p.segment;
      });
    }
    return Vh(r, a);
  }(e, t);
}, Nh = [32, 160, 4961, 65792, 65793, 4153, 4241], Vh = function(e, t) {
  for (var r, a = function(w, C) {
    var y = yi(w), Q = Pc(y, C), b = Q[0], E = Q[1], S = Q[2], L = y.length, H = 0, j = 0;
    return { next: function() {
      if (j >= L)
        return { done: !0, value: null };
      for (var B = fA; j < L && (B = Mc(y, E, b, ++j, S)) === fA; )
        ;
      if (B !== fA || j === L) {
        var J = new Rc(y, B, H, j);
        return H = j, { value: J, done: !1 };
      }
      return { done: !0, value: null };
    } };
  }(e, { lineBreak: t.lineBreak, wordBreak: t.overflowWrap === "break-word" ? "break-word" : t.wordBreak }), g = [], p = function() {
    if (r.value) {
      var w = r.value.slice(), C = yi(w), y = "";
      C.forEach(function(Q) {
        Nh.indexOf(Q) === -1 ? y += _A(Q) : (y.length && g.push(y), g.push(_A(Q)), y = "");
      }), y.length && g.push(y);
    }
  }; !(r = a.next()).done; )
    p();
  return g;
}, Xh = function(e, t, r) {
  this.text = Wh(t.data, r.textTransform), this.textBounds = function(a, g, p, w) {
    var C = Gh(g, p), y = [], Q = 0;
    return C.forEach(function(b) {
      if (p.textDecorationLine.length || b.trim().length > 0)
        if (MA.SUPPORT_RANGE_BOUNDS) {
          var E = Ls(w, Q, b.length).getClientRects();
          if (E.length > 1) {
            var S = on(b), L = 0;
            S.forEach(function(j) {
              y.push(new _e(j, vt.fromDOMRectList(a, Ls(w, L + Q, j.length).getClientRects()))), L += j.length;
            });
          } else
            y.push(new _e(b, vt.fromDOMRectList(a, E)));
        } else {
          var H = w.splitText(b.length);
          y.push(new _e(b, jh(a, w))), w = H;
        }
      else
        MA.SUPPORT_RANGE_BOUNDS || (w = w.splitText(b.length));
      Q += b.length;
    }), y;
  }(e, this.text, r, t);
}, Wh = function(e, t) {
  switch (t) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(Yh, zh);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, Yh = /(^|\s|:|-|\(|\))([a-z])/g, zh = function(e, t, r) {
  return e.length > 0 ? t + r.toUpperCase() : e;
}, Vo = function(e) {
  function t(r, a) {
    var g = e.call(this, r, a) || this;
    return g.src = a.currentSrc || a.src, g.intrinsicWidth = a.naturalWidth, g.intrinsicHeight = a.naturalHeight, g.context.cache.addImage(g.src), g;
  }
  return st(t, e), t;
}(ut), Xo = function(e) {
  function t(r, a) {
    var g = e.call(this, r, a) || this;
    return g.canvas = a, g.intrinsicWidth = a.width, g.intrinsicHeight = a.height, g;
  }
  return st(t, e), t;
}(ut), Wo = function(e) {
  function t(r, a) {
    var g = e.call(this, r, a) || this, p = new XMLSerializer(), w = Di(r, a);
    return a.setAttribute("width", w.width + "px"), a.setAttribute("height", w.height + "px"), g.svg = "data:image/svg+xml," + encodeURIComponent(p.serializeToString(a)), g.intrinsicWidth = a.width.baseVal.value, g.intrinsicHeight = a.height.baseVal.value, g.context.cache.addImage(g.svg), g;
  }
  return st(t, e), t;
}(ut), Yo = function(e) {
  function t(r, a) {
    var g = e.call(this, r, a) || this;
    return g.value = a.value, g;
  }
  return st(t, e), t;
}(ut), Mr = function(e) {
  function t(r, a) {
    var g = e.call(this, r, a) || this;
    return g.start = a.start, g.reversed = typeof a.reversed == "boolean" && a.reversed === !0, g;
  }
  return st(t, e), t;
}(ut), Jh = [{ type: 15, flags: 0, unit: "px", number: 3 }], qh = [{ type: 16, flags: 0, number: 50 }], xi = "checkbox", Ui = "radio", Zh = "password", Ds = 707406591, an = function(e) {
  function t(r, a) {
    var g, p, w, C = e.call(this, r, a) || this;
    switch (C.type = a.type.toLowerCase(), C.checked = a.checked, C.value = (p = (g = a).type === Zh ? new Array(g.value.length + 1).join("•") : g.value).length === 0 ? g.placeholder || "" : p, C.type !== xi && C.type !== Ui || (C.styles.backgroundColor = 3739148031, C.styles.borderTopColor = C.styles.borderRightColor = C.styles.borderBottomColor = C.styles.borderLeftColor = 2779096575, C.styles.borderTopWidth = C.styles.borderRightWidth = C.styles.borderBottomWidth = C.styles.borderLeftWidth = 1, C.styles.borderTopStyle = C.styles.borderRightStyle = C.styles.borderBottomStyle = C.styles.borderLeftStyle = 1, C.styles.backgroundClip = [0], C.styles.backgroundOrigin = [0], C.bounds = (w = C.bounds).width > w.height ? new vt(w.left + (w.width - w.height) / 2, w.top, w.height, w.height) : w.width < w.height ? new vt(w.left, w.top + (w.height - w.width) / 2, w.width, w.width) : w), C.type) {
      case xi:
        C.styles.borderTopRightRadius = C.styles.borderTopLeftRadius = C.styles.borderBottomRightRadius = C.styles.borderBottomLeftRadius = Jh;
        break;
      case Ui:
        C.styles.borderTopRightRadius = C.styles.borderTopLeftRadius = C.styles.borderBottomRightRadius = C.styles.borderBottomLeftRadius = qh;
    }
    return C;
  }
  return st(t, e), t;
}(ut), zo = function(e) {
  function t(r, a) {
    var g = e.call(this, r, a) || this, p = a.options[a.selectedIndex || 0];
    return g.value = p && p.text || "", g;
  }
  return st(t, e), t;
}(ut), Jo = function(e) {
  function t(r, a) {
    var g = e.call(this, r, a) || this;
    return g.value = a.value, g;
  }
  return st(t, e), t;
}(ut), qo = function(e) {
  function t(r, a) {
    var g = e.call(this, r, a) || this;
    g.src = a.src, g.width = parseInt(a.width, 10) || 0, g.height = parseInt(a.height, 10) || 0, g.backgroundColor = g.styles.backgroundColor;
    try {
      if (a.contentWindow && a.contentWindow.document && a.contentWindow.document.documentElement) {
        g.tree = $o(r, a.contentWindow.document.documentElement);
        var p = a.contentWindow.document.documentElement ? xe(r, getComputedStyle(a.contentWindow.document.documentElement).backgroundColor) : Ct.TRANSPARENT, w = a.contentWindow.document.body ? xe(r, getComputedStyle(a.contentWindow.document.body).backgroundColor) : Ct.TRANSPARENT;
        g.backgroundColor = Et(p) ? Et(w) ? g.styles.backgroundColor : w : p;
      }
    } catch {
    }
    return g;
  }
  return st(t, e), t;
}(ut), $h = ["OL", "UL", "MENU"], gi = function(e, t, r, a) {
  for (var g = t.firstChild, p = void 0; g; g = p)
    if (p = g.nextSibling, Aa(g) && g.data.trim().length > 0)
      r.textNodes.push(new Xh(e, g, r.styles));
    else if (Ae(g))
      if (ra(g) && g.assignedNodes)
        g.assignedNodes().forEach(function(C) {
          return gi(e, C, r, a);
        });
      else {
        var w = Zo(e, g);
        w.styles.isVisible() && (Au(g, w, a) ? w.flags |= 4 : tu(w.styles) && (w.flags |= 2), $h.indexOf(g.tagName) !== -1 && (w.flags |= 8), r.elements.push(w), g.slot, g.shadowRoot ? gi(e, g.shadowRoot, w, a) : Ei(g) || ta(g) || _i(g) || gi(e, g, w, a));
      }
}, Zo = function(e, t) {
  return Rr(t) ? new Vo(e, t) : ea(t) ? new Xo(e, t) : ta(t) ? new Wo(e, t) : eu(t) ? new Yo(e, t) : iu(t) ? new Mr(e, t) : ru(t) ? new an(e, t) : _i(t) ? new zo(e, t) : Ei(t) ? new Jo(e, t) : ia(t) ? new qo(e, t) : new ut(e, t);
}, $o = function(e, t) {
  var r = Zo(e, t);
  return r.flags |= 4, gi(e, t, r, r), r;
}, Au = function(e, t, r) {
  return t.styles.isPositionedWithZIndex() || t.styles.opacity < 1 || t.styles.isTransformed() || cn(e) && r.styles.isTransparent();
}, tu = function(e) {
  return e.isPositioned() || e.isFloating();
}, Aa = function(e) {
  return e.nodeType === Node.TEXT_NODE;
}, Ae = function(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}, Pr = function(e) {
  return Ae(e) && e.style !== void 0 && !fi(e);
}, fi = function(e) {
  return typeof e.className == "object";
}, eu = function(e) {
  return e.tagName === "LI";
}, iu = function(e) {
  return e.tagName === "OL";
}, ru = function(e) {
  return e.tagName === "INPUT";
}, ta = function(e) {
  return e.tagName === "svg";
}, cn = function(e) {
  return e.tagName === "BODY";
}, ea = function(e) {
  return e.tagName === "CANVAS";
}, Ms = function(e) {
  return e.tagName === "VIDEO";
}, Rr = function(e) {
  return e.tagName === "IMG";
}, ia = function(e) {
  return e.tagName === "IFRAME";
}, Ps = function(e) {
  return e.tagName === "STYLE";
}, Ei = function(e) {
  return e.tagName === "TEXTAREA";
}, _i = function(e) {
  return e.tagName === "SELECT";
}, ra = function(e) {
  return e.tagName === "SLOT";
}, Rs = function(e) {
  return e.tagName.indexOf("-") > 0;
}, nu = function() {
  function e() {
    this.counters = {};
  }
  return e.prototype.getCounterValue = function(t) {
    var r = this.counters[t];
    return r && r.length ? r[r.length - 1] : 1;
  }, e.prototype.getCounterValues = function(t) {
    var r = this.counters[t];
    return r || [];
  }, e.prototype.pop = function(t) {
    var r = this;
    t.forEach(function(a) {
      return r.counters[a].pop();
    });
  }, e.prototype.parse = function(t) {
    var r = this, a = t.counterIncrement, g = t.counterReset, p = !0;
    a !== null && a.forEach(function(C) {
      var y = r.counters[C.counter];
      y && C.increment !== 0 && (p = !1, y.length || y.push(1), y[Math.max(0, y.length - 1)] += C.increment);
    });
    var w = [];
    return p && g.forEach(function(C) {
      var y = r.counters[C.counter];
      w.push(C.counter), y || (y = r.counters[C.counter] = []), y.push(C.reset);
    }), w;
  }, e;
}(), Ks = { integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"] }, js = { integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"] }, su = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"] }, ou = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"] }, Vt = function(e, t, r, a, g, p) {
  return e < t || e > r ? He(e, g, p.length > 0) : a.integers.reduce(function(w, C, y) {
    for (; e >= C; )
      e -= C, w += a.values[y];
    return w;
  }, "") + p;
}, na = function(e, t, r, a) {
  var g = "";
  do
    r || e--, g = a(e) + g, e /= t;
  while (e * t >= t);
  return g;
}, UA = function(e, t, r, a, g) {
  var p = r - t + 1;
  return (e < 0 ? "-" : "") + (na(Math.abs(e), p, a, function(w) {
    return _A(Math.floor(w % p) + t);
  }) + g);
}, It = function(e, t, r) {
  r === void 0 && (r = ". ");
  var a = t.length;
  return na(Math.abs(e), a, !1, function(g) {
    return t[Math.floor(g % a)];
  }) + r;
}, pt = function(e, t, r, a, g, p) {
  if (e < -9999 || e > 9999)
    return He(e, 4, g.length > 0);
  var w = Math.abs(e), C = g;
  if (w === 0)
    return t[0] + C;
  for (var y = 0; w > 0 && y <= 4; y++) {
    var Q = w % 10;
    Q === 0 && IA(p, 1) && C !== "" ? C = t[Q] + C : Q > 1 || Q === 1 && y === 0 || Q === 1 && y === 1 && IA(p, 2) || Q === 1 && y === 1 && IA(p, 4) && e > 100 || Q === 1 && y > 1 && IA(p, 8) ? C = t[Q] + (y > 0 ? r[y - 1] : "") + C : Q === 1 && y > 0 && (C = r[y - 1] + C), w = Math.floor(w / 10);
  }
  return (e < 0 ? a : "") + C;
}, Gs = "十百千萬", Ns = "拾佰仟萬", Vs = "マイナス", ar = "마이너스", He = function(e, t, r) {
  var a = r ? ". " : "", g = r ? "、" : "", p = r ? ", " : "", w = r ? " " : "";
  switch (t) {
    case 0:
      return "•" + w;
    case 1:
      return "◦" + w;
    case 2:
      return "◾" + w;
    case 5:
      var C = UA(e, 48, 57, !0, a);
      return C.length < 4 ? "0" + C : C;
    case 4:
      return It(e, "〇一二三四五六七八九", g);
    case 6:
      return Vt(e, 1, 3999, Ks, 3, a).toLowerCase();
    case 7:
      return Vt(e, 1, 3999, Ks, 3, a);
    case 8:
      return UA(e, 945, 969, !1, a);
    case 9:
      return UA(e, 97, 122, !1, a);
    case 10:
      return UA(e, 65, 90, !1, a);
    case 11:
      return UA(e, 1632, 1641, !0, a);
    case 12:
    case 49:
      return Vt(e, 1, 9999, js, 3, a);
    case 35:
      return Vt(e, 1, 9999, js, 3, a).toLowerCase();
    case 13:
      return UA(e, 2534, 2543, !0, a);
    case 14:
    case 30:
      return UA(e, 6112, 6121, !0, a);
    case 15:
      return It(e, "子丑寅卯辰巳午未申酉戌亥", g);
    case 16:
      return It(e, "甲乙丙丁戊己庚辛壬癸", g);
    case 17:
    case 48:
      return pt(e, "零一二三四五六七八九", Gs, "負", g, 14);
    case 47:
      return pt(e, "零壹貳參肆伍陸柒捌玖", Ns, "負", g, 15);
    case 42:
      return pt(e, "零一二三四五六七八九", Gs, "负", g, 14);
    case 41:
      return pt(e, "零壹贰叁肆伍陆柒捌玖", Ns, "负", g, 15);
    case 26:
      return pt(e, "〇一二三四五六七八九", "十百千万", Vs, g, 0);
    case 25:
      return pt(e, "零壱弐参四伍六七八九", "拾百千万", Vs, g, 7);
    case 31:
      return pt(e, "영일이삼사오육칠팔구", "십백천만", ar, p, 7);
    case 33:
      return pt(e, "零一二三四五六七八九", "十百千萬", ar, p, 0);
    case 32:
      return pt(e, "零壹貳參四五六七八九", "拾百千", ar, p, 7);
    case 18:
      return UA(e, 2406, 2415, !0, a);
    case 20:
      return Vt(e, 1, 19999, ou, 3, a);
    case 21:
      return UA(e, 2790, 2799, !0, a);
    case 22:
      return UA(e, 2662, 2671, !0, a);
    case 22:
      return Vt(e, 1, 10999, su, 3, a);
    case 23:
      return It(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return It(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return UA(e, 3302, 3311, !0, a);
    case 28:
      return It(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", g);
    case 29:
      return It(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", g);
    case 34:
      return UA(e, 3792, 3801, !0, a);
    case 37:
      return UA(e, 6160, 6169, !0, a);
    case 38:
      return UA(e, 4160, 4169, !0, a);
    case 39:
      return UA(e, 2918, 2927, !0, a);
    case 40:
      return UA(e, 1776, 1785, !0, a);
    case 43:
      return UA(e, 3046, 3055, !0, a);
    case 44:
      return UA(e, 3174, 3183, !0, a);
    case 45:
      return UA(e, 3664, 3673, !0, a);
    case 46:
      return UA(e, 3872, 3881, !0, a);
    default:
      return UA(e, 48, 57, !0, a);
  }
}, sa = "data-html2canvas-ignore", Xs = function() {
  function e(t, r, a) {
    if (this.context = t, this.options = a, this.scrolledElements = [], this.referenceElement = r, this.counters = new nu(), this.quoteDepth = 0, !r.ownerDocument)
      throw new Error("Cloned element does not have an owner document");
    this.documentElement = this.cloneNode(r.ownerDocument.documentElement, !1);
  }
  return e.prototype.toIFrame = function(t, r) {
    var a = this, g = au(t, r);
    if (!g.contentWindow)
      return Promise.reject("Unable to find iframe window");
    var p = t.defaultView.pageXOffset, w = t.defaultView.pageYOffset, C = g.contentWindow, y = C.document, Q = hu(g).then(function() {
      return KA(a, 0, void 0, function() {
        var b, E;
        return RA(this, function(S) {
          switch (S.label) {
            case 0:
              return this.scrolledElements.forEach(fu), C && (C.scrollTo(r.left, r.top), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || C.scrollY === r.top && C.scrollX === r.left || (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(C.scrollX - r.left, C.scrollY - r.top, 0, 0))), b = this.options.onclone, (E = this.clonedReferenceElement) === void 0 ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : y.fonts && y.fonts.ready ? [4, y.fonts.ready] : [3, 2];
            case 1:
              S.sent(), S.label = 2;
            case 2:
              return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, lu(y)] : [3, 4];
            case 3:
              S.sent(), S.label = 4;
            case 4:
              return typeof b == "function" ? [2, Promise.resolve().then(function() {
                return b(y, E);
              }).then(function() {
                return g;
              })] : [2, g];
          }
        });
      });
    });
    return y.open(), y.write(du(document.doctype) + "<html></html>"), gu(this.referenceElement.ownerDocument, p, w), y.replaceChild(y.adoptNode(this.documentElement), y.documentElement), y.close(), Q;
  }, e.prototype.createElementClone = function(t) {
    if (Lr(t, 2), ea(t))
      return this.createCanvasClone(t);
    if (Ms(t))
      return this.createVideoClone(t);
    if (Ps(t))
      return this.createStyleClone(t);
    var r = t.cloneNode(!1);
    return Rr(r) && (Rr(t) && t.currentSrc && t.currentSrc !== t.src && (r.src = t.currentSrc, r.srcset = ""), r.loading === "lazy" && (r.loading = "eager")), Rs(r) ? this.createCustomElementClone(r) : r;
  }, e.prototype.createCustomElementClone = function(t) {
    var r = document.createElement("html2canvascustomelement");
    return cr(t.style, r), r;
  }, e.prototype.createStyleClone = function(t) {
    try {
      var r = t.sheet;
      if (r && r.cssRules) {
        var a = [].slice.call(r.cssRules, 0).reduce(function(p, w) {
          return w && typeof w.cssText == "string" ? p + w.cssText : p;
        }, ""), g = t.cloneNode(!1);
        return g.textContent = a, g;
      }
    } catch (p) {
      if (this.context.logger.error("Unable to access cssRules property", p), p.name !== "SecurityError")
        throw p;
    }
    return t.cloneNode(!1);
  }, e.prototype.createCanvasClone = function(t) {
    var r;
    if (this.options.inlineImages && t.ownerDocument) {
      var a = t.ownerDocument.createElement("img");
      try {
        return a.src = t.toDataURL(), a;
      } catch {
        this.context.logger.info("Unable to inline canvas contents, canvas is tainted", t);
      }
    }
    var g = t.cloneNode(!1);
    try {
      g.width = t.width, g.height = t.height;
      var p = t.getContext("2d"), w = g.getContext("2d");
      if (w)
        if (!this.options.allowTaint && p)
          w.putImageData(p.getImageData(0, 0, t.width, t.height), 0, 0);
        else {
          var C = (r = t.getContext("webgl2")) !== null && r !== void 0 ? r : t.getContext("webgl");
          if (C) {
            var y = C.getContextAttributes();
            (y == null ? void 0 : y.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", t);
          }
          w.drawImage(t, 0, 0);
        }
      return g;
    } catch {
      this.context.logger.info("Unable to clone canvas as it is tainted", t);
    }
    return g;
  }, e.prototype.createVideoClone = function(t) {
    var r = t.ownerDocument.createElement("canvas");
    r.width = t.offsetWidth, r.height = t.offsetHeight;
    var a = r.getContext("2d");
    try {
      return a && (a.drawImage(t, 0, 0, r.width, r.height), this.options.allowTaint || a.getImageData(0, 0, r.width, r.height)), r;
    } catch {
      this.context.logger.info("Unable to clone video as it is tainted", t);
    }
    var g = t.ownerDocument.createElement("canvas");
    return g.width = t.offsetWidth, g.height = t.offsetHeight, g;
  }, e.prototype.appendChildNode = function(t, r, a) {
    Ae(r) && (r.tagName === "SCRIPT" || r.hasAttribute(sa) || typeof this.options.ignoreElements == "function" && this.options.ignoreElements(r)) || this.options.copyStyles && Ae(r) && Ps(r) || t.appendChild(this.cloneNode(r, a));
  }, e.prototype.cloneChildNodes = function(t, r, a) {
    for (var g = this, p = t.shadowRoot ? t.shadowRoot.firstChild : t.firstChild; p; p = p.nextSibling)
      if (Ae(p) && ra(p) && typeof p.assignedNodes == "function") {
        var w = p.assignedNodes();
        w.length && w.forEach(function(C) {
          return g.appendChildNode(r, C, a);
        });
      } else
        this.appendChildNode(r, p, a);
  }, e.prototype.cloneNode = function(t, r) {
    if (Aa(t))
      return document.createTextNode(t.data);
    if (!t.ownerDocument)
      return t.cloneNode(!1);
    var a = t.ownerDocument.defaultView;
    if (a && Ae(t) && (Pr(t) || fi(t))) {
      var g = this.createElementClone(t);
      g.style.transitionProperty = "none";
      var p = a.getComputedStyle(t), w = a.getComputedStyle(t, ":before"), C = a.getComputedStyle(t, ":after");
      this.referenceElement === t && Pr(g) && (this.clonedReferenceElement = g), cn(g) && pu(g);
      var y = this.counters.parse(new _s(this.context, p)), Q = this.resolvePseudoContent(t, g, w, Ee.BEFORE);
      Rs(t) && (r = !0), Ms(t) || this.cloneChildNodes(t, g, r), Q && g.insertBefore(Q, g.firstChild);
      var b = this.resolvePseudoContent(t, g, C, Ee.AFTER);
      return b && g.appendChild(b), this.counters.pop(y), (p && (this.options.copyStyles || fi(t)) && !ia(t) || r) && cr(p, g), t.scrollTop === 0 && t.scrollLeft === 0 || this.scrolledElements.push([g, t.scrollLeft, t.scrollTop]), (Ei(t) || _i(t)) && (Ei(g) || _i(g)) && (g.value = t.value), g;
    }
    return t.cloneNode(!1);
  }, e.prototype.resolvePseudoContent = function(t, r, a, g) {
    var p = this;
    if (a) {
      var w = a.content, C = r.ownerDocument;
      if (C && w && w !== "none" && w !== "-moz-alt-content" && a.display !== "none") {
        this.counters.parse(new _s(this.context, a));
        var y = new Th(this.context, a), Q = C.createElement("html2canvaspseudoelement");
        cr(a, Q), y.content.forEach(function(E) {
          if (E.type === 0)
            Q.appendChild(C.createTextNode(E.value));
          else if (E.type === 22) {
            var S = C.createElement("img");
            S.src = E.value, S.style.opacity = "1", Q.appendChild(S);
          } else if (E.type === 18) {
            if (E.name === "attr") {
              var L = E.values.filter(vA);
              L.length && Q.appendChild(C.createTextNode(t.getAttribute(L[0].value) || ""));
            } else if (E.name === "counter") {
              var H = E.values.filter(ne), j = H[0], B = H[1];
              if (j && vA(j)) {
                var J = p.counters.getCounterValue(j.value), iA = B && vA(B) ? Or.parse(p.context, B.value) : 3;
                Q.appendChild(C.createTextNode(He(J, iA, !1)));
              }
            } else if (E.name === "counters") {
              var cA = E.values.filter(ne), u = (j = cA[0], cA[1]);
              if (B = cA[2], j && vA(j)) {
                var s = p.counters.getCounterValues(j.value), o = B && vA(B) ? Or.parse(p.context, B.value) : 3, d = u && u.type === 0 ? u.value : "", A = s.map(function(i) {
                  return He(i, o, !1);
                }).join(d);
                Q.appendChild(C.createTextNode(A));
              }
            }
          } else if (E.type === 20)
            switch (E.value) {
              case "open-quote":
                Q.appendChild(C.createTextNode(Es(y.quotes, p.quoteDepth++, !0)));
                break;
              case "close-quote":
                Q.appendChild(C.createTextNode(Es(y.quotes, --p.quoteDepth, !1)));
                break;
              default:
                Q.appendChild(C.createTextNode(E.value));
            }
        }), Q.className = Kr + " " + jr;
        var b = g === Ee.BEFORE ? " " + Kr : " " + jr;
        return fi(r) ? r.className.baseValue += b : r.className += b, Q;
      }
    }
  }, e.destroy = function(t) {
    return !!t.parentNode && (t.parentNode.removeChild(t), !0);
  }, e;
}();
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Ee || (Ee = {}));
var wA, au = function(e, t) {
  var r = e.createElement("iframe");
  return r.className = "html2canvas-container", r.style.visibility = "hidden", r.style.position = "fixed", r.style.left = "-10000px", r.style.top = "0px", r.style.border = "0", r.width = t.width.toString(), r.height = t.height.toString(), r.scrolling = "no", r.setAttribute(sa, "true"), e.body.appendChild(r), r;
}, cu = function(e) {
  return new Promise(function(t) {
    e.complete ? t() : e.src ? (e.onload = t, e.onerror = t) : t();
  });
}, lu = function(e) {
  return Promise.all([].slice.call(e.images, 0).map(cu));
}, hu = function(e) {
  return new Promise(function(t, r) {
    var a = e.contentWindow;
    if (!a)
      return r("No window assigned for iframe");
    var g = a.document;
    a.onload = e.onload = function() {
      a.onload = e.onload = null;
      var p = setInterval(function() {
        g.body.childNodes.length > 0 && g.readyState === "complete" && (clearInterval(p), t(e));
      }, 50);
    };
  });
}, uu = ["all", "d", "content"], cr = function(e, t) {
  for (var r = e.length - 1; r >= 0; r--) {
    var a = e.item(r);
    uu.indexOf(a) === -1 && t.style.setProperty(a, e.getPropertyValue(a));
  }
  return t;
}, du = function(e) {
  var t = "";
  return e && (t += "<!DOCTYPE ", e.name && (t += e.name), e.internalSubset && (t += e.internalSubset), e.publicId && (t += '"' + e.publicId + '"'), e.systemId && (t += '"' + e.systemId + '"'), t += ">"), t;
}, gu = function(e, t, r) {
  e && e.defaultView && (t !== e.defaultView.pageXOffset || r !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(t, r);
}, fu = function(e) {
  var t = e[0], r = e[1], a = e[2];
  t.scrollLeft = r, t.scrollTop = a;
}, Kr = "___html2canvas___pseudoelement_before", jr = "___html2canvas___pseudoelement_after", Ws = `{
    content: "" !important;
    display: none !important;
}`, pu = function(e) {
  Bu(e, "." + Kr + ":before" + Ws + `
         .` + jr + ":after" + Ws);
}, Bu = function(e, t) {
  var r = e.ownerDocument;
  if (r) {
    var a = r.createElement("style");
    a.textContent = t, e.appendChild(a);
  }
}, oa = function() {
  function e() {
  }
  return e.getOrigin = function(t) {
    var r = e._link;
    return r ? (r.href = t, r.href = r.href, r.protocol + r.hostname + r.port) : "about:blank";
  }, e.isSameOrigin = function(t) {
    return e.getOrigin(t) === e._origin;
  }, e.setContext = function(t) {
    e._link = t.document.createElement("a"), e._origin = e.getOrigin(t.location.href);
  }, e._origin = "about:blank", e;
}(), wu = function() {
  function e(t, r) {
    this.context = t, this._options = r, this._cache = {};
  }
  return e.prototype.addImage = function(t) {
    var r = Promise.resolve();
    return this.has(t) || (hr(t) || yu(t)) && (this._cache[t] = this.loadImage(t)).catch(function() {
    }), r;
  }, e.prototype.match = function(t) {
    return this._cache[t];
  }, e.prototype.loadImage = function(t) {
    return KA(this, 0, void 0, function() {
      var r, a, g, p, w = this;
      return RA(this, function(C) {
        switch (C.label) {
          case 0:
            return r = oa.isSameOrigin(t), a = !lr(t) && this._options.useCORS === !0 && MA.SUPPORT_CORS_IMAGES && !r, g = !lr(t) && !r && !hr(t) && typeof this._options.proxy == "string" && MA.SUPPORT_CORS_XHR && !a, r || this._options.allowTaint !== !1 || lr(t) || hr(t) || g || a ? (p = t, g ? [4, this.proxy(p)] : [3, 2]) : [2];
          case 1:
            p = C.sent(), C.label = 2;
          case 2:
            return this.context.logger.debug("Added image " + t.substring(0, 256)), [4, new Promise(function(y, Q) {
              var b = new Image();
              b.onload = function() {
                return y(b);
              }, b.onerror = Q, (bu(p) || a) && (b.crossOrigin = "anonymous"), b.src = p, b.complete === !0 && setTimeout(function() {
                return y(b);
              }, 500), w._options.imageTimeout > 0 && setTimeout(function() {
                return Q("Timed out (" + w._options.imageTimeout + "ms) loading image");
              }, w._options.imageTimeout);
            })];
          case 3:
            return [2, C.sent()];
        }
      });
    });
  }, e.prototype.has = function(t) {
    return this._cache[t] !== void 0;
  }, e.prototype.keys = function() {
    return Promise.resolve(Object.keys(this._cache));
  }, e.prototype.proxy = function(t) {
    var r = this, a = this._options.proxy;
    if (!a)
      throw new Error("No proxy defined");
    var g = t.substring(0, 256);
    return new Promise(function(p, w) {
      var C = MA.SUPPORT_RESPONSE_TYPE ? "blob" : "text", y = new XMLHttpRequest();
      y.onload = function() {
        if (y.status === 200)
          if (C === "text")
            p(y.response);
          else {
            var E = new FileReader();
            E.addEventListener("load", function() {
              return p(E.result);
            }, !1), E.addEventListener("error", function(S) {
              return w(S);
            }, !1), E.readAsDataURL(y.response);
          }
        else
          w("Failed to proxy resource " + g + " with status code " + y.status);
      }, y.onerror = w;
      var Q = a.indexOf("?") > -1 ? "&" : "?";
      if (y.open("GET", "" + a + Q + "url=" + encodeURIComponent(t) + "&responseType=" + C), C !== "text" && y instanceof XMLHttpRequest && (y.responseType = C), r._options.imageTimeout) {
        var b = r._options.imageTimeout;
        y.timeout = b, y.ontimeout = function() {
          return w("Timed out (" + b + "ms) proxying " + g);
        };
      }
      y.send();
    });
  }, e;
}(), mu = /^data:image\/svg\+xml/i, Cu = /^data:image\/.*;base64,/i, vu = /^data:image\/.*/i, yu = function(e) {
  return MA.SUPPORT_SVG_DRAWING || !Qu(e);
}, lr = function(e) {
  return vu.test(e);
}, bu = function(e) {
  return Cu.test(e);
}, hr = function(e) {
  return e.substr(0, 4) === "blob";
}, Qu = function(e) {
  return e.substr(-3).toLowerCase() === "svg" || mu.test(e);
}, oA = function() {
  function e(t, r) {
    this.type = 0, this.x = t, this.y = r;
  }
  return e.prototype.add = function(t, r) {
    return new e(this.x + t, this.y + r);
  }, e;
}(), Xt = function(e, t, r) {
  return new oA(e.x + (t.x - e.x) * r, e.y + (t.y - e.y) * r);
}, si = function() {
  function e(t, r, a, g) {
    this.type = 1, this.start = t, this.startControl = r, this.endControl = a, this.end = g;
  }
  return e.prototype.subdivide = function(t, r) {
    var a = Xt(this.start, this.startControl, t), g = Xt(this.startControl, this.endControl, t), p = Xt(this.endControl, this.end, t), w = Xt(a, g, t), C = Xt(g, p, t), y = Xt(w, C, t);
    return r ? new e(this.start, a, w, y) : new e(y, C, p, this.end);
  }, e.prototype.add = function(t, r) {
    return new e(this.start.add(t, r), this.startControl.add(t, r), this.endControl.add(t, r), this.end.add(t, r));
  }, e.prototype.reverse = function() {
    return new e(this.end, this.endControl, this.startControl, this.start);
  }, e;
}(), ZA = function(e) {
  return e.type === 1;
}, Fu = function(e) {
  var t = e.styles, r = e.bounds, a = ve(t.borderTopLeftRadius, r.width, r.height), g = a[0], p = a[1], w = ve(t.borderTopRightRadius, r.width, r.height), C = w[0], y = w[1], Q = ve(t.borderBottomRightRadius, r.width, r.height), b = Q[0], E = Q[1], S = ve(t.borderBottomLeftRadius, r.width, r.height), L = S[0], H = S[1], j = [];
  j.push((g + C) / r.width), j.push((L + b) / r.width), j.push((p + H) / r.height), j.push((y + E) / r.height);
  var B = Math.max.apply(Math, j);
  B > 1 && (g /= B, p /= B, C /= B, y /= B, b /= B, E /= B, L /= B, H /= B);
  var J = r.width - C, iA = r.height - E, cA = r.width - b, u = r.height - H, s = t.borderTopWidth, o = t.borderRightWidth, d = t.borderBottomWidth, A = t.borderLeftWidth, i = bA(t.paddingTop, e.bounds.width), n = bA(t.paddingRight, e.bounds.width), h = bA(t.paddingBottom, e.bounds.width), c = bA(t.paddingLeft, e.bounds.width);
  this.topLeftBorderDoubleOuterBox = g > 0 || p > 0 ? QA(r.left + A / 3, r.top + s / 3, g - A / 3, p - s / 3, wA.TOP_LEFT) : new oA(r.left + A / 3, r.top + s / 3), this.topRightBorderDoubleOuterBox = g > 0 || p > 0 ? QA(r.left + J, r.top + s / 3, C - o / 3, y - s / 3, wA.TOP_RIGHT) : new oA(r.left + r.width - o / 3, r.top + s / 3), this.bottomRightBorderDoubleOuterBox = b > 0 || E > 0 ? QA(r.left + cA, r.top + iA, b - o / 3, E - d / 3, wA.BOTTOM_RIGHT) : new oA(r.left + r.width - o / 3, r.top + r.height - d / 3), this.bottomLeftBorderDoubleOuterBox = L > 0 || H > 0 ? QA(r.left + A / 3, r.top + u, L - A / 3, H - d / 3, wA.BOTTOM_LEFT) : new oA(r.left + A / 3, r.top + r.height - d / 3), this.topLeftBorderDoubleInnerBox = g > 0 || p > 0 ? QA(r.left + 2 * A / 3, r.top + 2 * s / 3, g - 2 * A / 3, p - 2 * s / 3, wA.TOP_LEFT) : new oA(r.left + 2 * A / 3, r.top + 2 * s / 3), this.topRightBorderDoubleInnerBox = g > 0 || p > 0 ? QA(r.left + J, r.top + 2 * s / 3, C - 2 * o / 3, y - 2 * s / 3, wA.TOP_RIGHT) : new oA(r.left + r.width - 2 * o / 3, r.top + 2 * s / 3), this.bottomRightBorderDoubleInnerBox = b > 0 || E > 0 ? QA(r.left + cA, r.top + iA, b - 2 * o / 3, E - 2 * d / 3, wA.BOTTOM_RIGHT) : new oA(r.left + r.width - 2 * o / 3, r.top + r.height - 2 * d / 3), this.bottomLeftBorderDoubleInnerBox = L > 0 || H > 0 ? QA(r.left + 2 * A / 3, r.top + u, L - 2 * A / 3, H - 2 * d / 3, wA.BOTTOM_LEFT) : new oA(r.left + 2 * A / 3, r.top + r.height - 2 * d / 3), this.topLeftBorderStroke = g > 0 || p > 0 ? QA(r.left + A / 2, r.top + s / 2, g - A / 2, p - s / 2, wA.TOP_LEFT) : new oA(r.left + A / 2, r.top + s / 2), this.topRightBorderStroke = g > 0 || p > 0 ? QA(r.left + J, r.top + s / 2, C - o / 2, y - s / 2, wA.TOP_RIGHT) : new oA(r.left + r.width - o / 2, r.top + s / 2), this.bottomRightBorderStroke = b > 0 || E > 0 ? QA(r.left + cA, r.top + iA, b - o / 2, E - d / 2, wA.BOTTOM_RIGHT) : new oA(r.left + r.width - o / 2, r.top + r.height - d / 2), this.bottomLeftBorderStroke = L > 0 || H > 0 ? QA(r.left + A / 2, r.top + u, L - A / 2, H - d / 2, wA.BOTTOM_LEFT) : new oA(r.left + A / 2, r.top + r.height - d / 2), this.topLeftBorderBox = g > 0 || p > 0 ? QA(r.left, r.top, g, p, wA.TOP_LEFT) : new oA(r.left, r.top), this.topRightBorderBox = C > 0 || y > 0 ? QA(r.left + J, r.top, C, y, wA.TOP_RIGHT) : new oA(r.left + r.width, r.top), this.bottomRightBorderBox = b > 0 || E > 0 ? QA(r.left + cA, r.top + iA, b, E, wA.BOTTOM_RIGHT) : new oA(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = L > 0 || H > 0 ? QA(r.left, r.top + u, L, H, wA.BOTTOM_LEFT) : new oA(r.left, r.top + r.height), this.topLeftPaddingBox = g > 0 || p > 0 ? QA(r.left + A, r.top + s, Math.max(0, g - A), Math.max(0, p - s), wA.TOP_LEFT) : new oA(r.left + A, r.top + s), this.topRightPaddingBox = C > 0 || y > 0 ? QA(r.left + Math.min(J, r.width - o), r.top + s, J > r.width + o ? 0 : Math.max(0, C - o), Math.max(0, y - s), wA.TOP_RIGHT) : new oA(r.left + r.width - o, r.top + s), this.bottomRightPaddingBox = b > 0 || E > 0 ? QA(r.left + Math.min(cA, r.width - A), r.top + Math.min(iA, r.height - d), Math.max(0, b - o), Math.max(0, E - d), wA.BOTTOM_RIGHT) : new oA(r.left + r.width - o, r.top + r.height - d), this.bottomLeftPaddingBox = L > 0 || H > 0 ? QA(r.left + A, r.top + Math.min(u, r.height - d), Math.max(0, L - A), Math.max(0, H - d), wA.BOTTOM_LEFT) : new oA(r.left + A, r.top + r.height - d), this.topLeftContentBox = g > 0 || p > 0 ? QA(r.left + A + c, r.top + s + i, Math.max(0, g - (A + c)), Math.max(0, p - (s + i)), wA.TOP_LEFT) : new oA(r.left + A + c, r.top + s + i), this.topRightContentBox = C > 0 || y > 0 ? QA(r.left + Math.min(J, r.width + A + c), r.top + s + i, J > r.width + A + c ? 0 : C - A + c, y - (s + i), wA.TOP_RIGHT) : new oA(r.left + r.width - (o + n), r.top + s + i), this.bottomRightContentBox = b > 0 || E > 0 ? QA(r.left + Math.min(cA, r.width - (A + c)), r.top + Math.min(iA, r.height + s + i), Math.max(0, b - (o + n)), E - (d + h), wA.BOTTOM_RIGHT) : new oA(r.left + r.width - (o + n), r.top + r.height - (d + h)), this.bottomLeftContentBox = L > 0 || H > 0 ? QA(r.left + A + c, r.top + u, Math.max(0, L - (A + c)), H - (d + h), wA.BOTTOM_LEFT) : new oA(r.left + A + c, r.top + r.height - (d + h));
};
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(wA || (wA = {}));
var QA = function(e, t, r, a, g) {
  var p = (Math.sqrt(2) - 1) / 3 * 4, w = r * p, C = a * p, y = e + r, Q = t + a;
  switch (g) {
    case wA.TOP_LEFT:
      return new si(new oA(e, Q), new oA(e, Q - C), new oA(y - w, t), new oA(y, t));
    case wA.TOP_RIGHT:
      return new si(new oA(e, t), new oA(e + w, t), new oA(y, Q - C), new oA(y, Q));
    case wA.BOTTOM_RIGHT:
      return new si(new oA(y, t), new oA(y, t + C), new oA(e + w, Q), new oA(e, Q));
    case wA.BOTTOM_LEFT:
    default:
      return new si(new oA(y, Q), new oA(y - w, Q), new oA(e, t + C), new oA(e, t));
  }
}, ki = function(e) {
  return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox];
}, Si = function(e) {
  return [e.topLeftPaddingBox, e.topRightPaddingBox, e.bottomRightPaddingBox, e.bottomLeftPaddingBox];
}, xu = function(e, t, r) {
  this.offsetX = e, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
}, oi = function(e, t) {
  this.path = e, this.target = t, this.type = 1;
}, Uu = function(e) {
  this.opacity = e, this.type = 2, this.target = 6;
}, aa = function(e) {
  return e.type === 1;
}, Ys = function(e, t) {
  return e.length === t.length && e.some(function(r, a) {
    return r === t[a];
  });
}, ca = function(e) {
  this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
}, la = function() {
  function e(t, r) {
    if (this.container = t, this.parent = r, this.effects = [], this.curves = new Fu(this.container), this.container.styles.opacity < 1 && this.effects.push(new Uu(this.container.styles.opacity)), this.container.styles.transform !== null) {
      var a = this.container.bounds.left + this.container.styles.transformOrigin[0].number, g = this.container.bounds.top + this.container.styles.transformOrigin[1].number, p = this.container.styles.transform;
      this.effects.push(new xu(a, g, p));
    }
    if (this.container.styles.overflowX !== 0) {
      var w = ki(this.curves), C = Si(this.curves);
      Ys(w, C) ? this.effects.push(new oi(w, 6)) : (this.effects.push(new oi(w, 2)), this.effects.push(new oi(C, 4)));
    }
  }
  return e.prototype.getEffects = function(t) {
    for (var r = [2, 3].indexOf(this.container.styles.position) === -1, a = this.parent, g = this.effects.slice(0); a; ) {
      var p = a.effects.filter(function(y) {
        return !aa(y);
      });
      if (r || a.container.styles.position !== 0 || !a.parent) {
        if (g.unshift.apply(g, p), r = [2, 3].indexOf(a.container.styles.position) === -1, a.container.styles.overflowX !== 0) {
          var w = ki(a.curves), C = Si(a.curves);
          Ys(w, C) || g.unshift(new oi(C, 6));
        }
      } else
        g.unshift.apply(g, p);
      a = a.parent;
    }
    return g.filter(function(y) {
      return IA(y.target, t);
    });
  }, e;
}(), Gr = function(e, t, r, a) {
  e.container.elements.forEach(function(g) {
    var p = IA(g.flags, 4), w = IA(g.flags, 2), C = new la(g, e);
    IA(g.styles.display, 2048) && a.push(C);
    var y = IA(g.flags, 8) ? [] : a;
    if (p || w) {
      var Q = p || g.styles.isPositioned() ? r : t, b = new ca(C);
      if (g.styles.isPositioned() || g.styles.opacity < 1 || g.styles.isTransformed()) {
        var E = g.styles.zIndex.order;
        if (E < 0) {
          var S = 0;
          Q.negativeZIndex.some(function(H, j) {
            return E > H.element.container.styles.zIndex.order ? (S = j, !1) : S > 0;
          }), Q.negativeZIndex.splice(S, 0, b);
        } else if (E > 0) {
          var L = 0;
          Q.positiveZIndex.some(function(H, j) {
            return E >= H.element.container.styles.zIndex.order ? (L = j + 1, !1) : L > 0;
          }), Q.positiveZIndex.splice(L, 0, b);
        } else
          Q.zeroOrAutoZIndexOrTransformedOrOpacity.push(b);
      } else
        g.styles.isFloating() ? Q.nonPositionedFloats.push(b) : Q.nonPositionedInlineLevel.push(b);
      Gr(C, b, p ? b : r, y);
    } else
      g.styles.isInlineLevel() ? t.inlineLevel.push(C) : t.nonInlineLevel.push(C), Gr(C, t, r, y);
    IA(g.flags, 8) && ha(g, y);
  });
}, ha = function(e, t) {
  for (var r = e instanceof Mr ? e.start : 1, a = e instanceof Mr && e.reversed, g = 0; g < t.length; g++) {
    var p = t[g];
    p.container instanceof Yo && typeof p.container.value == "number" && p.container.value !== 0 && (r = p.container.value), p.listValue = He(r, p.container.styles.listStyleType, !0), r += a ? -1 : 1;
  }
}, zs = function(e, t) {
  switch (t) {
    case 0:
      return qA(e.topLeftBorderBox, e.topLeftPaddingBox, e.topRightBorderBox, e.topRightPaddingBox);
    case 1:
      return qA(e.topRightBorderBox, e.topRightPaddingBox, e.bottomRightBorderBox, e.bottomRightPaddingBox);
    case 2:
      return qA(e.bottomRightBorderBox, e.bottomRightPaddingBox, e.bottomLeftBorderBox, e.bottomLeftPaddingBox);
    default:
      return qA(e.bottomLeftBorderBox, e.bottomLeftPaddingBox, e.topLeftBorderBox, e.topLeftPaddingBox);
  }
}, ai = function(e, t) {
  var r = [];
  return ZA(e) ? r.push(e.subdivide(0.5, !1)) : r.push(e), ZA(t) ? r.push(t.subdivide(0.5, !0)) : r.push(t), r;
}, qA = function(e, t, r, a) {
  var g = [];
  return ZA(e) ? g.push(e.subdivide(0.5, !1)) : g.push(e), ZA(r) ? g.push(r.subdivide(0.5, !0)) : g.push(r), ZA(a) ? g.push(a.subdivide(0.5, !0).reverse()) : g.push(a), ZA(t) ? g.push(t.subdivide(0.5, !1).reverse()) : g.push(t), g;
}, Js = function(e) {
  var t = e.bounds, r = e.styles;
  return t.add(r.borderLeftWidth, r.borderTopWidth, -(r.borderRightWidth + r.borderLeftWidth), -(r.borderTopWidth + r.borderBottomWidth));
}, Ti = function(e) {
  var t = e.styles, r = e.bounds, a = bA(t.paddingLeft, r.width), g = bA(t.paddingRight, r.width), p = bA(t.paddingTop, r.width), w = bA(t.paddingBottom, r.width);
  return r.add(a + t.borderLeftWidth, p + t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth + a + g), -(t.borderTopWidth + t.borderBottomWidth + p + w));
}, ur = function(e, t, r) {
  var a = function(Q, b) {
    return Q === 0 ? b.bounds : Q === 2 ? Ti(b) : Js(b);
  }($t(e.styles.backgroundOrigin, t), e), g = function(Q, b) {
    return Q === 0 ? b.bounds : Q === 2 ? Ti(b) : Js(b);
  }($t(e.styles.backgroundClip, t), e), p = Eu($t(e.styles.backgroundSize, t), r, a), w = p[0], C = p[1], y = ve($t(e.styles.backgroundPosition, t), a.width - w, a.height - C);
  return [_u($t(e.styles.backgroundRepeat, t), y, p, a, g), Math.round(a.left + y[0]), Math.round(a.top + y[1]), w, C];
}, Wt = function(e) {
  return vA(e) && e.value === ee.AUTO;
}, ci = function(e) {
  return typeof e == "number";
}, Eu = function(e, t, r) {
  var a = t[0], g = t[1], p = t[2], w = e[0], C = e[1];
  if (!w)
    return [0, 0];
  if (TA(w) && C && TA(C))
    return [bA(w, r.width), bA(C, r.height)];
  var y = ci(p);
  if (vA(w) && (w.value === ee.CONTAIN || w.value === ee.COVER))
    return ci(p) ? r.width / r.height < p != (w.value === ee.COVER) ? [r.width, r.width / p] : [r.height * p, r.height] : [r.width, r.height];
  var Q = ci(a), b = ci(g), E = Q || b;
  if (Wt(w) && (!C || Wt(C)))
    return Q && b ? [a, g] : y || E ? E && y ? [Q ? a : g * p, b ? g : a / p] : [Q ? a : r.width, b ? g : r.height] : [r.width, r.height];
  if (y) {
    var S = 0, L = 0;
    return TA(w) ? S = bA(w, r.width) : TA(C) && (L = bA(C, r.height)), Wt(w) ? S = L * p : C && !Wt(C) || (L = S / p), [S, L];
  }
  var H = null, j = null;
  if (TA(w) ? H = bA(w, r.width) : C && TA(C) && (j = bA(C, r.height)), H === null || C && !Wt(C) || (j = Q && b ? H / a * g : r.height), j !== null && Wt(w) && (H = Q && b ? j / g * a : r.width), H !== null && j !== null)
    return [H, j];
  throw new Error("Unable to calculate background-size for element");
}, $t = function(e, t) {
  var r = e[t];
  return r === void 0 ? e[0] : r;
}, _u = function(e, t, r, a, g) {
  var p = t[0], w = t[1], C = r[0], y = r[1];
  switch (e) {
    case 2:
      return [new oA(Math.round(a.left), Math.round(a.top + w)), new oA(Math.round(a.left + a.width), Math.round(a.top + w)), new oA(Math.round(a.left + a.width), Math.round(y + a.top + w)), new oA(Math.round(a.left), Math.round(y + a.top + w))];
    case 3:
      return [new oA(Math.round(a.left + p), Math.round(a.top)), new oA(Math.round(a.left + p + C), Math.round(a.top)), new oA(Math.round(a.left + p + C), Math.round(a.height + a.top)), new oA(Math.round(a.left + p), Math.round(a.height + a.top))];
    case 1:
      return [new oA(Math.round(a.left + p), Math.round(a.top + w)), new oA(Math.round(a.left + p + C), Math.round(a.top + w)), new oA(Math.round(a.left + p + C), Math.round(a.top + w + y)), new oA(Math.round(a.left + p), Math.round(a.top + w + y))];
    default:
      return [new oA(Math.round(g.left), Math.round(g.top)), new oA(Math.round(g.left + g.width), Math.round(g.top)), new oA(Math.round(g.left + g.width), Math.round(g.height + g.top)), new oA(Math.round(g.left), Math.round(g.height + g.top))];
  }
}, qs = "Hidden Text", ku = function() {
  function e(t) {
    this._data = {}, this._document = t;
  }
  return e.prototype.parseMetrics = function(t, r) {
    var a = this._document.createElement("div"), g = this._document.createElement("img"), p = this._document.createElement("span"), w = this._document.body;
    a.style.visibility = "hidden", a.style.fontFamily = t, a.style.fontSize = r, a.style.margin = "0", a.style.padding = "0", a.style.whiteSpace = "nowrap", w.appendChild(a), g.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", g.width = 1, g.height = 1, g.style.margin = "0", g.style.padding = "0", g.style.verticalAlign = "baseline", p.style.fontFamily = t, p.style.fontSize = r, p.style.margin = "0", p.style.padding = "0", p.appendChild(this._document.createTextNode(qs)), a.appendChild(p), a.appendChild(g);
    var C = g.offsetTop - p.offsetTop + 2;
    a.removeChild(p), a.appendChild(this._document.createTextNode(qs)), a.style.lineHeight = "normal", g.style.verticalAlign = "super";
    var y = g.offsetTop - a.offsetTop + 2;
    return w.removeChild(a), { baseline: C, middle: y };
  }, e.prototype.getMetrics = function(t, r) {
    var a = t + " " + r;
    return this._data[a] === void 0 && (this._data[a] = this.parseMetrics(t, r)), this._data[a];
  }, e;
}(), ua = function(e, t) {
  this.context = e, this.options = t;
}, Su = function(e) {
  function t(r, a) {
    var g = e.call(this, r, a) || this;
    return g._activeEffects = [], g.canvas = a.canvas ? a.canvas : document.createElement("canvas"), g.ctx = g.canvas.getContext("2d"), a.canvas || (g.canvas.width = Math.floor(a.width * a.scale), g.canvas.height = Math.floor(a.height * a.scale), g.canvas.style.width = a.width + "px", g.canvas.style.height = a.height + "px"), g.fontMetrics = new ku(document), g.ctx.scale(g.options.scale, g.options.scale), g.ctx.translate(-a.x, -a.y), g.ctx.textBaseline = "bottom", g._activeEffects = [], g.context.logger.debug("Canvas renderer initialized (" + a.width + "x" + a.height + ") with scale " + a.scale), g;
  }
  return st(t, e), t.prototype.applyEffects = function(r) {
    for (var a = this; this._activeEffects.length; )
      this.popEffect();
    r.forEach(function(g) {
      return a.applyEffect(g);
    });
  }, t.prototype.applyEffect = function(r) {
    this.ctx.save(), function(a) {
      return a.type === 2;
    }(r) && (this.ctx.globalAlpha = r.opacity), function(a) {
      return a.type === 0;
    }(r) && (this.ctx.translate(r.offsetX, r.offsetY), this.ctx.transform(r.matrix[0], r.matrix[1], r.matrix[2], r.matrix[3], r.matrix[4], r.matrix[5]), this.ctx.translate(-r.offsetX, -r.offsetY)), aa(r) && (this.path(r.path), this.ctx.clip()), this._activeEffects.push(r);
  }, t.prototype.popEffect = function() {
    this._activeEffects.pop(), this.ctx.restore();
  }, t.prototype.renderStack = function(r) {
    return KA(this, 0, void 0, function() {
      return RA(this, function(a) {
        switch (a.label) {
          case 0:
            return r.element.container.styles.isVisible() ? [4, this.renderStackContent(r)] : [3, 2];
          case 1:
            a.sent(), a.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, t.prototype.renderNode = function(r) {
    return KA(this, 0, void 0, function() {
      return RA(this, function(a) {
        switch (a.label) {
          case 0:
            return IA(r.container.flags, 16), r.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(r)] : [3, 3];
          case 1:
            return a.sent(), [4, this.renderNodeContent(r)];
          case 2:
            a.sent(), a.label = 3;
          case 3:
            return [2];
        }
      });
    });
  }, t.prototype.renderTextWithLetterSpacing = function(r, a, g) {
    var p = this;
    a === 0 ? this.ctx.fillText(r.text, r.bounds.left, r.bounds.top + g) : on(r.text).reduce(function(w, C) {
      return p.ctx.fillText(C, w, r.bounds.top + g), w + p.ctx.measureText(C).width;
    }, r.bounds.left);
  }, t.prototype.createFontStyle = function(r) {
    var a = r.fontVariant.filter(function(w) {
      return w === "normal" || w === "small-caps";
    }).join(""), g = Lu(r.fontFamily).join(", "), p = Ie(r.fontSize) ? "" + r.fontSize.number + r.fontSize.unit : r.fontSize.number + "px";
    return [[r.fontStyle, a, r.fontWeight, p, g].join(" "), g, p];
  }, t.prototype.renderTextNode = function(r, a) {
    return KA(this, 0, void 0, function() {
      var g, p, w, C, y, Q, b, E, S = this;
      return RA(this, function(L) {
        return g = this.createFontStyle(a), p = g[0], w = g[1], C = g[2], this.ctx.font = p, this.ctx.direction = a.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", y = this.fontMetrics.getMetrics(w, C), Q = y.baseline, b = y.middle, E = a.paintOrder, r.textBounds.forEach(function(H) {
          E.forEach(function(j) {
            switch (j) {
              case 0:
                S.ctx.fillStyle = HA(a.color), S.renderTextWithLetterSpacing(H, a.letterSpacing, Q);
                var B = a.textShadow;
                B.length && H.text.trim().length && (B.slice(0).reverse().forEach(function(J) {
                  S.ctx.shadowColor = HA(J.color), S.ctx.shadowOffsetX = J.offsetX.number * S.options.scale, S.ctx.shadowOffsetY = J.offsetY.number * S.options.scale, S.ctx.shadowBlur = J.blur.number, S.renderTextWithLetterSpacing(H, a.letterSpacing, Q);
                }), S.ctx.shadowColor = "", S.ctx.shadowOffsetX = 0, S.ctx.shadowOffsetY = 0, S.ctx.shadowBlur = 0), a.textDecorationLine.length && (S.ctx.fillStyle = HA(a.textDecorationColor || a.color), a.textDecorationLine.forEach(function(J) {
                  switch (J) {
                    case 1:
                      S.ctx.fillRect(H.bounds.left, Math.round(H.bounds.top + Q), H.bounds.width, 1);
                      break;
                    case 2:
                      S.ctx.fillRect(H.bounds.left, Math.round(H.bounds.top), H.bounds.width, 1);
                      break;
                    case 3:
                      S.ctx.fillRect(H.bounds.left, Math.ceil(H.bounds.top + b), H.bounds.width, 1);
                  }
                }));
                break;
              case 1:
                a.webkitTextStrokeWidth && H.text.trim().length && (S.ctx.strokeStyle = HA(a.webkitTextStrokeColor), S.ctx.lineWidth = a.webkitTextStrokeWidth, S.ctx.lineJoin = window.chrome ? "miter" : "round", S.ctx.strokeText(H.text, H.bounds.left, H.bounds.top + Q)), S.ctx.strokeStyle = "", S.ctx.lineWidth = 0, S.ctx.lineJoin = "miter";
            }
          });
        }), [2];
      });
    });
  }, t.prototype.renderReplacedElement = function(r, a, g) {
    if (g && r.intrinsicWidth > 0 && r.intrinsicHeight > 0) {
      var p = Ti(r), w = Si(a);
      this.path(w), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(g, 0, 0, r.intrinsicWidth, r.intrinsicHeight, p.left, p.top, p.width, p.height), this.ctx.restore();
    }
  }, t.prototype.renderNodeContent = function(r) {
    return KA(this, 0, void 0, function() {
      var a, g, p, w, C, y, Q, b, E, S, L, H, j, B, J, iA, cA, u;
      return RA(this, function(s) {
        switch (s.label) {
          case 0:
            this.applyEffects(r.getEffects(4)), a = r.container, g = r.curves, p = a.styles, w = 0, C = a.textNodes, s.label = 1;
          case 1:
            return w < C.length ? (y = C[w], [4, this.renderTextNode(y, p)]) : [3, 4];
          case 2:
            s.sent(), s.label = 3;
          case 3:
            return w++, [3, 1];
          case 4:
            if (!(a instanceof Vo))
              return [3, 8];
            s.label = 5;
          case 5:
            return s.trys.push([5, 7, , 8]), [4, this.context.cache.match(a.src)];
          case 6:
            return J = s.sent(), this.renderReplacedElement(a, g, J), [3, 8];
          case 7:
            return s.sent(), this.context.logger.error("Error loading image " + a.src), [3, 8];
          case 8:
            if (a instanceof Xo && this.renderReplacedElement(a, g, a.canvas), !(a instanceof Wo))
              return [3, 12];
            s.label = 9;
          case 9:
            return s.trys.push([9, 11, , 12]), [4, this.context.cache.match(a.svg)];
          case 10:
            return J = s.sent(), this.renderReplacedElement(a, g, J), [3, 12];
          case 11:
            return s.sent(), this.context.logger.error("Error loading svg " + a.svg.substring(0, 255)), [3, 12];
          case 12:
            return a instanceof qo && a.tree ? [4, new t(this.context, { scale: this.options.scale, backgroundColor: a.backgroundColor, x: 0, y: 0, width: a.width, height: a.height }).render(a.tree)] : [3, 14];
          case 13:
            Q = s.sent(), a.width && a.height && this.ctx.drawImage(Q, 0, 0, a.width, a.height, a.bounds.left, a.bounds.top, a.bounds.width, a.bounds.height), s.label = 14;
          case 14:
            if (a instanceof an && (b = Math.min(a.bounds.width, a.bounds.height), a.type === xi ? a.checked && (this.ctx.save(), this.path([new oA(a.bounds.left + 0.39363 * b, a.bounds.top + 0.79 * b), new oA(a.bounds.left + 0.16 * b, a.bounds.top + 0.5549 * b), new oA(a.bounds.left + 0.27347 * b, a.bounds.top + 0.44071 * b), new oA(a.bounds.left + 0.39694 * b, a.bounds.top + 0.5649 * b), new oA(a.bounds.left + 0.72983 * b, a.bounds.top + 0.23 * b), new oA(a.bounds.left + 0.84 * b, a.bounds.top + 0.34085 * b), new oA(a.bounds.left + 0.39363 * b, a.bounds.top + 0.79 * b)]), this.ctx.fillStyle = HA(Ds), this.ctx.fill(), this.ctx.restore()) : a.type === Ui && a.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(a.bounds.left + b / 2, a.bounds.top + b / 2, b / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = HA(Ds), this.ctx.fill(), this.ctx.restore())), Tu(a) && a.value.length) {
              switch (E = this.createFontStyle(p), cA = E[0], S = E[1], L = this.fontMetrics.getMetrics(cA, S).baseline, this.ctx.font = cA, this.ctx.fillStyle = HA(p.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = Hu(a.styles.textAlign), u = Ti(a), H = 0, a.styles.textAlign) {
                case 1:
                  H += u.width / 2;
                  break;
                case 2:
                  H += u.width;
              }
              j = u.add(H, 0, 0, -u.height / 2 + 1), this.ctx.save(), this.path([new oA(u.left, u.top), new oA(u.left + u.width, u.top), new oA(u.left + u.width, u.top + u.height), new oA(u.left, u.top + u.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new _e(a.value, j), p.letterSpacing, L), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
            }
            if (!IA(a.styles.display, 2048))
              return [3, 20];
            if (a.styles.listStyleImage === null)
              return [3, 19];
            if ((B = a.styles.listStyleImage).type !== 0)
              return [3, 18];
            J = void 0, iA = B.url, s.label = 15;
          case 15:
            return s.trys.push([15, 17, , 18]), [4, this.context.cache.match(iA)];
          case 16:
            return J = s.sent(), this.ctx.drawImage(J, a.bounds.left - (J.width + 10), a.bounds.top), [3, 18];
          case 17:
            return s.sent(), this.context.logger.error("Error loading list-style-image " + iA), [3, 18];
          case 18:
            return [3, 20];
          case 19:
            r.listValue && a.styles.listStyleType !== -1 && (cA = this.createFontStyle(p)[0], this.ctx.font = cA, this.ctx.fillStyle = HA(p.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", u = new vt(a.bounds.left, a.bounds.top + bA(a.styles.paddingTop, a.bounds.width), a.bounds.width, Fs(p.lineHeight, p.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new _e(r.listValue, u), p.letterSpacing, Fs(p.lineHeight, p.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), s.label = 20;
          case 20:
            return [2];
        }
      });
    });
  }, t.prototype.renderStackContent = function(r) {
    return KA(this, 0, void 0, function() {
      var a, g, p, w, C, y, Q, b, E, S, L, H, j, B, J;
      return RA(this, function(iA) {
        switch (iA.label) {
          case 0:
            return IA(r.element.container.flags, 16), [4, this.renderNodeBackgroundAndBorders(r.element)];
          case 1:
            iA.sent(), a = 0, g = r.negativeZIndex, iA.label = 2;
          case 2:
            return a < g.length ? (J = g[a], [4, this.renderStack(J)]) : [3, 5];
          case 3:
            iA.sent(), iA.label = 4;
          case 4:
            return a++, [3, 2];
          case 5:
            return [4, this.renderNodeContent(r.element)];
          case 6:
            iA.sent(), p = 0, w = r.nonInlineLevel, iA.label = 7;
          case 7:
            return p < w.length ? (J = w[p], [4, this.renderNode(J)]) : [3, 10];
          case 8:
            iA.sent(), iA.label = 9;
          case 9:
            return p++, [3, 7];
          case 10:
            C = 0, y = r.nonPositionedFloats, iA.label = 11;
          case 11:
            return C < y.length ? (J = y[C], [4, this.renderStack(J)]) : [3, 14];
          case 12:
            iA.sent(), iA.label = 13;
          case 13:
            return C++, [3, 11];
          case 14:
            Q = 0, b = r.nonPositionedInlineLevel, iA.label = 15;
          case 15:
            return Q < b.length ? (J = b[Q], [4, this.renderStack(J)]) : [3, 18];
          case 16:
            iA.sent(), iA.label = 17;
          case 17:
            return Q++, [3, 15];
          case 18:
            E = 0, S = r.inlineLevel, iA.label = 19;
          case 19:
            return E < S.length ? (J = S[E], [4, this.renderNode(J)]) : [3, 22];
          case 20:
            iA.sent(), iA.label = 21;
          case 21:
            return E++, [3, 19];
          case 22:
            L = 0, H = r.zeroOrAutoZIndexOrTransformedOrOpacity, iA.label = 23;
          case 23:
            return L < H.length ? (J = H[L], [4, this.renderStack(J)]) : [3, 26];
          case 24:
            iA.sent(), iA.label = 25;
          case 25:
            return L++, [3, 23];
          case 26:
            j = 0, B = r.positiveZIndex, iA.label = 27;
          case 27:
            return j < B.length ? (J = B[j], [4, this.renderStack(J)]) : [3, 30];
          case 28:
            iA.sent(), iA.label = 29;
          case 29:
            return j++, [3, 27];
          case 30:
            return [2];
        }
      });
    });
  }, t.prototype.mask = function(r) {
    this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(r.slice(0).reverse()), this.ctx.closePath();
  }, t.prototype.path = function(r) {
    this.ctx.beginPath(), this.formatPath(r), this.ctx.closePath();
  }, t.prototype.formatPath = function(r) {
    var a = this;
    r.forEach(function(g, p) {
      var w = ZA(g) ? g.start : g;
      p === 0 ? a.ctx.moveTo(w.x, w.y) : a.ctx.lineTo(w.x, w.y), ZA(g) && a.ctx.bezierCurveTo(g.startControl.x, g.startControl.y, g.endControl.x, g.endControl.y, g.end.x, g.end.y);
    });
  }, t.prototype.renderRepeat = function(r, a, g, p) {
    this.path(r), this.ctx.fillStyle = a, this.ctx.translate(g, p), this.ctx.fill(), this.ctx.translate(-g, -p);
  }, t.prototype.resizeImage = function(r, a, g) {
    var p;
    if (r.width === a && r.height === g)
      return r;
    var w = ((p = this.canvas.ownerDocument) !== null && p !== void 0 ? p : document).createElement("canvas");
    return w.width = Math.max(1, a), w.height = Math.max(1, g), w.getContext("2d").drawImage(r, 0, 0, r.width, r.height, 0, 0, a, g), w;
  }, t.prototype.renderBackgroundImage = function(r) {
    return KA(this, 0, void 0, function() {
      var a, g, p, w, C, y;
      return RA(this, function(Q) {
        switch (Q.label) {
          case 0:
            a = r.styles.backgroundImage.length - 1, g = function(b) {
              var E, S, L, H, j, B, J, iA, cA, u, s, o, d, A, i, n, h, c, l, f, m, v, x, U, F, k, O, P, R, Y, V;
              return RA(this, function(_) {
                switch (_.label) {
                  case 0:
                    if (b.type !== 0)
                      return [3, 5];
                    E = void 0, S = b.url, _.label = 1;
                  case 1:
                    return _.trys.push([1, 3, , 4]), [4, p.context.cache.match(S)];
                  case 2:
                    return E = _.sent(), [3, 4];
                  case 3:
                    return _.sent(), p.context.logger.error("Error loading background-image " + S), [3, 4];
                  case 4:
                    return E && (L = ur(r, a, [E.width, E.height, E.width / E.height]), n = L[0], v = L[1], x = L[2], l = L[3], f = L[4], A = p.ctx.createPattern(p.resizeImage(E, l, f), "repeat"), p.renderRepeat(n, A, v, x)), [3, 6];
                  case 5:
                    b.type === 1 ? (H = ur(r, a, [null, null, null]), n = H[0], v = H[1], x = H[2], l = H[3], f = H[4], j = dl(b.angle, l, f), B = j[0], J = j[1], iA = j[2], cA = j[3], u = j[4], (s = document.createElement("canvas")).width = l, s.height = f, o = s.getContext("2d"), d = o.createLinearGradient(J, cA, iA, u), bs(b.stops, B).forEach(function(T) {
                      return d.addColorStop(T.stop, HA(T.color));
                    }), o.fillStyle = d, o.fillRect(0, 0, l, f), l > 0 && f > 0 && (A = p.ctx.createPattern(s, "repeat"), p.renderRepeat(n, A, v, x))) : function(T) {
                      return T.type === 2;
                    }(b) && (i = ur(r, a, [null, null, null]), n = i[0], h = i[1], c = i[2], l = i[3], f = i[4], m = b.position.length === 0 ? [nn] : b.position, v = bA(m[0], l), x = bA(m[m.length - 1], f), U = function(T, M, N, X, D) {
                      var I = 0, K = 0;
                      switch (T.size) {
                        case 0:
                          T.shape === 0 ? I = K = Math.min(Math.abs(M), Math.abs(M - X), Math.abs(N), Math.abs(N - D)) : T.shape === 1 && (I = Math.min(Math.abs(M), Math.abs(M - X)), K = Math.min(Math.abs(N), Math.abs(N - D)));
                          break;
                        case 2:
                          if (T.shape === 0)
                            I = K = Math.min(rt(M, N), rt(M, N - D), rt(M - X, N), rt(M - X, N - D));
                          else if (T.shape === 1) {
                            var W = Math.min(Math.abs(N), Math.abs(N - D)) / Math.min(Math.abs(M), Math.abs(M - X)), G = Qs(X, D, M, N, !0), z = G[0], $ = G[1];
                            K = W * (I = rt(z - M, ($ - N) / W));
                          }
                          break;
                        case 1:
                          T.shape === 0 ? I = K = Math.max(Math.abs(M), Math.abs(M - X), Math.abs(N), Math.abs(N - D)) : T.shape === 1 && (I = Math.max(Math.abs(M), Math.abs(M - X)), K = Math.max(Math.abs(N), Math.abs(N - D)));
                          break;
                        case 3:
                          if (T.shape === 0)
                            I = K = Math.max(rt(M, N), rt(M, N - D), rt(M - X, N), rt(M - X, N - D));
                          else if (T.shape === 1) {
                            W = Math.max(Math.abs(N), Math.abs(N - D)) / Math.max(Math.abs(M), Math.abs(M - X));
                            var eA = Qs(X, D, M, N, !1);
                            z = eA[0], $ = eA[1], K = W * (I = rt(z - M, ($ - N) / W));
                          }
                      }
                      return Array.isArray(T.size) && (I = bA(T.size[0], X), K = T.size.length === 2 ? bA(T.size[1], D) : I), [I, K];
                    }(b, v, x, l, f), F = U[0], k = U[1], F > 0 && k > 0 && (O = p.ctx.createRadialGradient(h + v, c + x, 0, h + v, c + x, F), bs(b.stops, 2 * F).forEach(function(T) {
                      return O.addColorStop(T.stop, HA(T.color));
                    }), p.path(n), p.ctx.fillStyle = O, F !== k ? (P = r.bounds.left + 0.5 * r.bounds.width, R = r.bounds.top + 0.5 * r.bounds.height, V = 1 / (Y = k / F), p.ctx.save(), p.ctx.translate(P, R), p.ctx.transform(1, 0, 0, Y, 0, 0), p.ctx.translate(-P, -R), p.ctx.fillRect(h, V * (c - R) + R, l, f * V), p.ctx.restore()) : p.ctx.fill())), _.label = 6;
                  case 6:
                    return a--, [2];
                }
              });
            }, p = this, w = 0, C = r.styles.backgroundImage.slice(0).reverse(), Q.label = 1;
          case 1:
            return w < C.length ? (y = C[w], [5, g(y)]) : [3, 4];
          case 2:
            Q.sent(), Q.label = 3;
          case 3:
            return w++, [3, 1];
          case 4:
            return [2];
        }
      });
    });
  }, t.prototype.renderSolidBorder = function(r, a, g) {
    return KA(this, 0, void 0, function() {
      return RA(this, function(p) {
        return this.path(zs(g, a)), this.ctx.fillStyle = HA(r), this.ctx.fill(), [2];
      });
    });
  }, t.prototype.renderDoubleBorder = function(r, a, g, p) {
    return KA(this, 0, void 0, function() {
      var w, C;
      return RA(this, function(y) {
        switch (y.label) {
          case 0:
            return a < 3 ? [4, this.renderSolidBorder(r, g, p)] : [3, 2];
          case 1:
            return y.sent(), [2];
          case 2:
            return w = function(Q, b) {
              switch (b) {
                case 0:
                  return qA(Q.topLeftBorderBox, Q.topLeftBorderDoubleOuterBox, Q.topRightBorderBox, Q.topRightBorderDoubleOuterBox);
                case 1:
                  return qA(Q.topRightBorderBox, Q.topRightBorderDoubleOuterBox, Q.bottomRightBorderBox, Q.bottomRightBorderDoubleOuterBox);
                case 2:
                  return qA(Q.bottomRightBorderBox, Q.bottomRightBorderDoubleOuterBox, Q.bottomLeftBorderBox, Q.bottomLeftBorderDoubleOuterBox);
                default:
                  return qA(Q.bottomLeftBorderBox, Q.bottomLeftBorderDoubleOuterBox, Q.topLeftBorderBox, Q.topLeftBorderDoubleOuterBox);
              }
            }(p, g), this.path(w), this.ctx.fillStyle = HA(r), this.ctx.fill(), C = function(Q, b) {
              switch (b) {
                case 0:
                  return qA(Q.topLeftBorderDoubleInnerBox, Q.topLeftPaddingBox, Q.topRightBorderDoubleInnerBox, Q.topRightPaddingBox);
                case 1:
                  return qA(Q.topRightBorderDoubleInnerBox, Q.topRightPaddingBox, Q.bottomRightBorderDoubleInnerBox, Q.bottomRightPaddingBox);
                case 2:
                  return qA(Q.bottomRightBorderDoubleInnerBox, Q.bottomRightPaddingBox, Q.bottomLeftBorderDoubleInnerBox, Q.bottomLeftPaddingBox);
                default:
                  return qA(Q.bottomLeftBorderDoubleInnerBox, Q.bottomLeftPaddingBox, Q.topLeftBorderDoubleInnerBox, Q.topLeftPaddingBox);
              }
            }(p, g), this.path(C), this.ctx.fill(), [2];
        }
      });
    });
  }, t.prototype.renderNodeBackgroundAndBorders = function(r) {
    return KA(this, 0, void 0, function() {
      var a, g, p, w, C, y, Q, b, E = this;
      return RA(this, function(S) {
        switch (S.label) {
          case 0:
            return this.applyEffects(r.getEffects(2)), a = r.container.styles, g = !Et(a.backgroundColor) || a.backgroundImage.length, p = [{ style: a.borderTopStyle, color: a.borderTopColor, width: a.borderTopWidth }, { style: a.borderRightStyle, color: a.borderRightColor, width: a.borderRightWidth }, { style: a.borderBottomStyle, color: a.borderBottomColor, width: a.borderBottomWidth }, { style: a.borderLeftStyle, color: a.borderLeftColor, width: a.borderLeftWidth }], w = Iu($t(a.backgroundClip, 0), r.curves), g || a.boxShadow.length ? (this.ctx.save(), this.path(w), this.ctx.clip(), Et(a.backgroundColor) || (this.ctx.fillStyle = HA(a.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(r.container)]) : [3, 2];
          case 1:
            S.sent(), this.ctx.restore(), a.boxShadow.slice(0).reverse().forEach(function(L) {
              E.ctx.save();
              var H, j, B, J, iA, cA = ki(r.curves), u = L.inset ? 0 : 1e4, s = (H = cA, j = -u + (L.inset ? 1 : -1) * L.spread.number, B = (L.inset ? 1 : -1) * L.spread.number, J = L.spread.number * (L.inset ? -2 : 2), iA = L.spread.number * (L.inset ? -2 : 2), H.map(function(o, d) {
                switch (d) {
                  case 0:
                    return o.add(j, B);
                  case 1:
                    return o.add(j + J, B);
                  case 2:
                    return o.add(j + J, B + iA);
                  case 3:
                    return o.add(j, B + iA);
                }
                return o;
              }));
              L.inset ? (E.path(cA), E.ctx.clip(), E.mask(s)) : (E.mask(cA), E.ctx.clip(), E.path(s)), E.ctx.shadowOffsetX = L.offsetX.number + u, E.ctx.shadowOffsetY = L.offsetY.number, E.ctx.shadowColor = HA(L.color), E.ctx.shadowBlur = L.blur.number, E.ctx.fillStyle = L.inset ? HA(L.color) : "rgba(0,0,0,1)", E.ctx.fill(), E.ctx.restore();
            }), S.label = 2;
          case 2:
            C = 0, y = 0, Q = p, S.label = 3;
          case 3:
            return y < Q.length ? (b = Q[y]).style !== 0 && !Et(b.color) && b.width > 0 ? b.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(b.color, b.width, C, r.curves, 2)] : [3, 11] : [3, 13];
          case 4:
            return S.sent(), [3, 11];
          case 5:
            return b.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(b.color, b.width, C, r.curves, 3)];
          case 6:
            return S.sent(), [3, 11];
          case 7:
            return b.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(b.color, b.width, C, r.curves)];
          case 8:
            return S.sent(), [3, 11];
          case 9:
            return [4, this.renderSolidBorder(b.color, C, r.curves)];
          case 10:
            S.sent(), S.label = 11;
          case 11:
            C++, S.label = 12;
          case 12:
            return y++, [3, 3];
          case 13:
            return [2];
        }
      });
    });
  }, t.prototype.renderDashedDottedBorder = function(r, a, g, p, w) {
    return KA(this, 0, void 0, function() {
      var C, y, Q, b, E, S, L, H, j, B, J, iA, cA, u, s, o;
      return RA(this, function(d) {
        return this.ctx.save(), C = function(A, i) {
          switch (i) {
            case 0:
              return ai(A.topLeftBorderStroke, A.topRightBorderStroke);
            case 1:
              return ai(A.topRightBorderStroke, A.bottomRightBorderStroke);
            case 2:
              return ai(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
            default:
              return ai(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
          }
        }(p, g), y = zs(p, g), w === 2 && (this.path(y), this.ctx.clip()), ZA(y[0]) ? (Q = y[0].start.x, b = y[0].start.y) : (Q = y[0].x, b = y[0].y), ZA(y[1]) ? (E = y[1].end.x, S = y[1].end.y) : (E = y[1].x, S = y[1].y), L = Math.abs(g === 0 || g === 2 ? Q - E : b - S), this.ctx.beginPath(), w === 3 ? this.formatPath(C) : this.formatPath(y.slice(0, 2)), H = a < 3 ? 3 * a : 2 * a, j = a < 3 ? 2 * a : a, w === 3 && (H = a, j = a), B = !0, L <= 2 * H ? B = !1 : L <= 2 * H + j ? (H *= J = L / (2 * H + j), j *= J) : (iA = Math.floor((L + j) / (H + j)), cA = (L - iA * H) / (iA - 1), j = (u = (L - (iA + 1) * H) / iA) <= 0 || Math.abs(j - cA) < Math.abs(j - u) ? cA : u), B && (w === 3 ? this.ctx.setLineDash([0, H + j]) : this.ctx.setLineDash([H, j])), w === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = a) : this.ctx.lineWidth = 2 * a + 1.1, this.ctx.strokeStyle = HA(r), this.ctx.stroke(), this.ctx.setLineDash([]), w === 2 && (ZA(y[0]) && (s = y[3], o = y[0], this.ctx.beginPath(), this.formatPath([new oA(s.end.x, s.end.y), new oA(o.start.x, o.start.y)]), this.ctx.stroke()), ZA(y[1]) && (s = y[1], o = y[2], this.ctx.beginPath(), this.formatPath([new oA(s.end.x, s.end.y), new oA(o.start.x, o.start.y)]), this.ctx.stroke())), this.ctx.restore(), [2];
      });
    });
  }, t.prototype.render = function(r) {
    return KA(this, 0, void 0, function() {
      var a;
      return RA(this, function(g) {
        switch (g.label) {
          case 0:
            return this.options.backgroundColor && (this.ctx.fillStyle = HA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), p = new la(r, null), w = new ca(p), Gr(p, w, w, C = []), ha(p.container, C), a = w, [4, this.renderStack(a)];
          case 1:
            return g.sent(), this.applyEffects([]), [2, this.canvas];
        }
        var p, w, C;
      });
    });
  }, t;
}(ua), Tu = function(e) {
  return e instanceof Jo || e instanceof zo || e instanceof an && e.type !== Ui && e.type !== xi;
}, Iu = function(e, t) {
  switch (e) {
    case 0:
      return ki(t);
    case 2:
      return function(r) {
        return [r.topLeftContentBox, r.topRightContentBox, r.bottomRightContentBox, r.bottomLeftContentBox];
      }(t);
    default:
      return Si(t);
  }
}, Hu = function(e) {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    default:
      return "left";
  }
}, Ou = ["-apple-system", "system-ui"], Lu = function(e) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function(t) {
    return Ou.indexOf(t) === -1;
  }) : e;
}, Du = function(e) {
  function t(r, a) {
    var g = e.call(this, r, a) || this;
    return g.canvas = a.canvas ? a.canvas : document.createElement("canvas"), g.ctx = g.canvas.getContext("2d"), g.options = a, g.canvas.width = Math.floor(a.width * a.scale), g.canvas.height = Math.floor(a.height * a.scale), g.canvas.style.width = a.width + "px", g.canvas.style.height = a.height + "px", g.ctx.scale(g.options.scale, g.options.scale), g.ctx.translate(-a.x, -a.y), g.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + a.width + "x" + a.height + " at " + a.x + "," + a.y + ") with scale " + a.scale), g;
  }
  return st(t, e), t.prototype.render = function(r) {
    return KA(this, 0, void 0, function() {
      var a, g;
      return RA(this, function(p) {
        switch (p.label) {
          case 0:
            return a = Dr(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, r), [4, Mu(a)];
          case 1:
            return g = p.sent(), this.options.backgroundColor && (this.ctx.fillStyle = HA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(g, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
        }
      });
    });
  }, t;
}(ua), Mu = function(e) {
  return new Promise(function(t, r) {
    var a = new Image();
    a.onload = function() {
      t(a);
    }, a.onerror = r, a.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, Pu = function() {
  function e(t) {
    var r = t.id, a = t.enabled;
    this.id = r, this.enabled = a, this.start = Date.now();
  }
  return e.prototype.debug = function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Ve([this.id, this.getTime() + "ms"], t)) : this.info.apply(this, t));
  }, e.prototype.getTime = function() {
    return Date.now() - this.start;
  }, e.prototype.info = function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Ve([this.id, this.getTime() + "ms"], t));
  }, e.prototype.warn = function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Ve([this.id, this.getTime() + "ms"], t)) : this.info.apply(this, t));
  }, e.prototype.error = function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Ve([this.id, this.getTime() + "ms"], t)) : this.info.apply(this, t));
  }, e.instances = {}, e;
}(), Ru = function() {
  function e(t, r) {
    var a;
    this.windowBounds = r, this.instanceName = "#" + e.instanceCount++, this.logger = new Pu({ id: this.instanceName, enabled: t.logging }), this.cache = (a = t.cache) !== null && a !== void 0 ? a : new wu(this, t);
  }
  return e.instanceCount = 1, e;
}();
typeof window < "u" && oa.setContext(window);
var Ku = function(e, t) {
  return KA(void 0, 0, void 0, function() {
    var r, a, g, p, w, C, y, Q, b, E, S, L, H, j, B, J, iA, cA, u, s, o, d, A, i, n, h, c, l, f, m, v, x, U, F, k, O, P, R;
    return RA(this, function(Y) {
      switch (Y.label) {
        case 0:
          if (!e || typeof e != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (!(r = e.ownerDocument))
            throw new Error("Element is not attached to a Document");
          if (!(a = r.defaultView))
            throw new Error("Document is not attached to a Window");
          return g = { allowTaint: (d = t.allowTaint) !== null && d !== void 0 && d, imageTimeout: (A = t.imageTimeout) !== null && A !== void 0 ? A : 15e3, proxy: t.proxy, useCORS: (i = t.useCORS) !== null && i !== void 0 && i }, p = Fr({ logging: (n = t.logging) === null || n === void 0 || n, cache: t.cache }, g), w = { windowWidth: (h = t.windowWidth) !== null && h !== void 0 ? h : a.innerWidth, windowHeight: (c = t.windowHeight) !== null && c !== void 0 ? c : a.innerHeight, scrollX: (l = t.scrollX) !== null && l !== void 0 ? l : a.pageXOffset, scrollY: (f = t.scrollY) !== null && f !== void 0 ? f : a.pageYOffset }, C = new vt(w.scrollX, w.scrollY, w.windowWidth, w.windowHeight), y = new Ru(p, C), Q = (m = t.foreignObjectRendering) !== null && m !== void 0 && m, b = { allowTaint: (v = t.allowTaint) !== null && v !== void 0 && v, onclone: t.onclone, ignoreElements: t.ignoreElements, inlineImages: Q, copyStyles: Q }, y.logger.debug("Starting document clone with size " + C.width + "x" + C.height + " scrolled to " + -C.left + "," + -C.top), E = new Xs(y, e, b), (S = E.clonedReferenceElement) ? [4, E.toIFrame(r, C)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return L = Y.sent(), H = cn(S) || S.tagName === "HTML" ? function(V) {
            var _ = V.body, T = V.documentElement;
            if (!_ || !T)
              throw new Error("Unable to get document size");
            var M = Math.max(Math.max(_.scrollWidth, T.scrollWidth), Math.max(_.offsetWidth, T.offsetWidth), Math.max(_.clientWidth, T.clientWidth)), N = Math.max(Math.max(_.scrollHeight, T.scrollHeight), Math.max(_.offsetHeight, T.offsetHeight), Math.max(_.clientHeight, T.clientHeight));
            return new vt(0, 0, M, N);
          }(S.ownerDocument) : Di(y, S), j = H.width, B = H.height, J = H.left, iA = H.top, cA = ju(y, S, t.backgroundColor), u = { canvas: t.canvas, backgroundColor: cA, scale: (U = (x = t.scale) !== null && x !== void 0 ? x : a.devicePixelRatio) !== null && U !== void 0 ? U : 1, x: ((F = t.x) !== null && F !== void 0 ? F : 0) + J, y: ((k = t.y) !== null && k !== void 0 ? k : 0) + iA, width: (O = t.width) !== null && O !== void 0 ? O : Math.ceil(j), height: (P = t.height) !== null && P !== void 0 ? P : Math.ceil(B) }, Q ? (y.logger.debug("Document cloned, using foreign object rendering"), [4, new Du(y, u).render(S)]) : [3, 3];
        case 2:
          return s = Y.sent(), [3, 5];
        case 3:
          return y.logger.debug("Document cloned, element located at " + J + "," + iA + " with size " + j + "x" + B + " using computed rendering"), y.logger.debug("Starting DOM parsing"), o = $o(y, S), cA === o.styles.backgroundColor && (o.styles.backgroundColor = Ct.TRANSPARENT), y.logger.debug("Starting renderer for element at " + u.x + "," + u.y + " with size " + u.width + "x" + u.height), [4, new Su(y, u).render(o)];
        case 4:
          s = Y.sent(), Y.label = 5;
        case 5:
          return ((R = t.removeContainer) === null || R === void 0 || R) && (Xs.destroy(L) || y.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), y.logger.debug("Finished rendering"), [2, s];
      }
    });
  });
}, ju = function(e, t, r) {
  var a = t.ownerDocument, g = a.documentElement ? xe(e, getComputedStyle(a.documentElement).backgroundColor) : Ct.TRANSPARENT, p = a.body ? xe(e, getComputedStyle(a.body).backgroundColor) : Ct.TRANSPARENT, w = typeof r == "string" ? xe(e, r) : r === null ? Ct.TRANSPARENT : 4294967295;
  return t === a.documentElement ? Et(g) ? Et(p) ? w : p : g : w;
};
class ln {
  constructor() {
    AA(this, "captureScreenshot", async (t) => {
      try {
        const r = window.innerWidth, a = window.innerHeight, g = window.scrollX, p = window.scrollY, w = await function(C, y) {
          return y === void 0 && (y = {}), Ku(C, y);
        }(t, { x: g, y: p, width: r, height: a, scrollX: 0, scrollY: 0, allowTaint: !0, useCORS: !0, backgroundColor: "transparent", logging: !1 });
        return await this.getBlobFromCanvas(w);
      } catch (r) {
        An(r.message);
      }
      return null;
    });
    AA(this, "getBlobFromCanvas", (t) => new Promise((r) => {
      t.toBlob((a) => {
        r(a);
      });
    }));
  }
}
const hn = () => {
  const e = document.createElement("div");
  return e.classList.add("shake-sdk-card"), e;
}, Gu = ({ label: e, items: t, onSelectionChange: r, selectedValue: a }) => {
  const g = uA(), p = uA();
  p.classList.add("shake-sdk-select-dropdown");
  const w = XA("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='caret-down-icon'%20clip-path='url(%23clip0_15248_22126)'%3e%3cpath%20id='Vector'%20d='M8%2010L12%2014L16%2010'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15248_22126'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  w.classList.add("shake-sdk-dropdown-icon"), p.appendChild(w);
  const C = document.createElement("label");
  C.textContent = e, C.classList.add("shake-sdk-select-dropdown-label");
  const y = uA();
  y.classList.add("shake-sdk-select-dropdown-chosen"), p.appendChild(C);
  const Q = document.createElement("ul");
  Q.classList.add("shake-sdk-select-options"), t.forEach((E) => {
    const S = document.createElement("li");
    S.classList.add("shake-sdk-select-option"), S.dataset.value = E.value, S.textContent = E.label, S.addEventListener("click", function() {
      y.textContent = S.textContent, Q.style.display = "none", S.dataset.value && r(S.dataset.value);
    }), Q.appendChild(S);
  });
  const b = Array.from(Q.children).find((E) => E.dataset.value === a);
  return b && (y.textContent = b.textContent), p.addEventListener("click", function(E) {
    E.stopPropagation(), window.innerWidth > 1024 ? (Q.style.display = Q.style.display === "block" ? "none" : "block", Q.style.display === "block" ? p.classList.add("active") : p.classList.remove("active")) : Se(((S, L, H) => {
      const j = [];
      return L.forEach((B) => {
        j.push({ text: B.label, icon: B.icon, onClick: () => {
          H(B);
        } });
      }), Fo(S, j);
    })(e, t, (S) => {
      y.textContent = S.label, r(a);
    }));
  }), p.addEventListener("focus", function() {
    p.classList.add("active");
  }), p.addEventListener("blur", function() {
    p.classList.remove("active");
  }), document.addEventListener("click", (E) => {
    const S = E.target;
    p.contains(S) || Q.contains(S) || (Q.style.display = "none", p.classList.remove("active"));
  }), p.append(y), g.appendChild(p), g.appendChild(Q), g;
}, Nr = "data:image/svg+xml,%3csvg%20width='50'%20height='51'%20viewBox='0%200%2050%2051'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.834%2021.5598L29.1673%2029.8931'%20stroke='%231C1C1E'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M29.1673%2021.56L20.834%2029.8933'%20stroke='%231C1C1E'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", se = (e = !0) => {
  const t = document.getElementById("shake-sdk-root");
  if (t) {
    t.remove();
    const r = kA.localStorage;
    e && (md(), r.clearShakeState(), new Promise((a, g) => {
      const p = indexedDB.open(tt, 3);
      p.onerror = function() {
        g("Error opening database");
      }, p.onsuccess = function(w) {
        const C = w.target.result.transaction([Mt], "readwrite").objectStore(Mt).clear();
        C.onsuccess = function() {
          a("State deleted successfully from IndexedDB");
        }, C.onerror = function() {
          g("Error deleting state from IndexedDB");
        };
      }, p.onupgradeneeded = et;
    }), new Promise((a, g) => {
      const p = indexedDB.open(tt, 3);
      p.onerror = function() {
        g("Error opening database");
      }, p.onsuccess = function(w) {
        const C = w.target.result.transaction([nt], "readwrite").objectStore(nt).clear();
        C.onsuccess = function() {
          a("All files deleted successfully from IndexedDB");
        }, C.onerror = function() {
          g("Error deleting files from IndexedDB");
        };
      }, p.onupgradeneeded = et;
    })), r.setShakeOpened(!1);
  }
}, Ii = ({ image: e, onClick: t }) => {
  const r = XA(e), a = document.createElement("button");
  return a.classList.add("shake-sdk-toolbar-button"), a.onclick = t, a.appendChild(r), a;
}, un = () => {
  var e;
  (e = document.getElementById("fileInput")) == null || e.click();
}, da = (e, t, r, a) => {
  const g = document.createElement("img");
  g.src = e, g.setAttribute("draggable", "false");
  const p = document.createElement("button");
  p.classList.add("shake-sdk-bubble"), p.style.backgroundColor = t, p.style.boxShadow = `0 2px 2px ${r}`, p.appendChild(g);
  const w = document.createElement("div"), C = w.attachShadow({ mode: "open" });
  return kt(C), C.appendChild(p), Nu(p, a), w;
}, Nu = (e, t) => {
  let r = !1, a = 0, g = 0, p = !1;
  e.style.left = window.innerWidth - e.offsetWidth - 100 + "px", e.style.top = window.innerHeight - e.offsetHeight - 100 + "px", e.addEventListener("mousedown", function(w) {
    r = !0, p = !1, a = w.clientX - e.getBoundingClientRect().left, g = w.clientY - e.getBoundingClientRect().top;
  }), document.addEventListener("mousemove", function(w) {
    if (r) {
      const C = w.clientX - a, y = w.clientY - g, Q = window.innerWidth - e.offsetWidth, b = window.innerHeight - e.offsetHeight;
      e.style.left = Math.min(Math.max(0, C), Q) + "px", e.style.top = Math.min(Math.max(0, y), b) + "px", (Math.abs(w.movementX) > 2 || Math.abs(w.movementY) > 2) && (p = !0);
    }
  }), e.addEventListener("mouseup", function() {
    r && (r = !1, p || t());
  });
};
function pi(e) {
  const t = new Date(e);
  return `${t.getUTCFullYear()}-${(t.getUTCMonth() + 1).toString().padStart(2, "0")}-${t.getUTCDate().toString().padStart(2, "0")}T${t.getUTCHours().toString().padStart(2, "0")}:${t.getUTCMinutes().toString().padStart(2, "0")}:${t.getUTCSeconds().toString().padStart(2, "0")}.${t.getUTCMilliseconds().toString().padStart(3, "0")}Z`;
}
const dn = (e, t) => e === yA.IMAGE ? `image_${pi((/* @__PURE__ */ new Date()).toString())}.` + t : e === yA.VIDEO ? `video_${pi((/* @__PURE__ */ new Date()).toString())}.` + t : e === yA.FILE ? `file_${pi((/* @__PURE__ */ new Date()).toString())}.` + t : "";
async function gn(e, t = "jpg") {
  const r = dn(yA.IMAGE, t);
  await fn(e, yA.IMAGE, r);
}
async function ga(e, t = "mp4") {
  const r = dn(yA.VIDEO, t);
  await fn(e, yA.VIDEO, r);
}
async function fn(e, t, r) {
  const a = { type: t, data: e, name: r, timestamp: (/* @__PURE__ */ new Date()).getTime() };
  await CA.attachmentsManager.addAttachment(a);
}
const Oe = (e) => {
  const t = document.createElement("img");
  t.draggable = !1, t.src = e;
  const r = document.createElement("button");
  return r.classList.add("shake-sdk-circle-button"), r.appendChild(t), r;
}, fa = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15055_29642)'%3e%3cpath%20d='M12.3994%208.47314C13.6969%209.77065%2013.6969%2011.8743%2012.3994%2013.1719C11.1019%2014.4694%208.99819%2014.4694%207.70068%2013.1719C6.40316%2011.8743%206.40316%209.77065%207.70068%208.47314C8.99819%207.17562%2011.1019%207.17562%2012.3994%208.47314Z'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.5%207.49992V14.9999C17.5%2015.9208%2016.7542%2016.6666%2015.8333%2016.6666H4.16667C3.24583%2016.6666%202.5%2015.9208%202.5%2014.9999V7.49992C2.5%206.57908%203.24583%205.83325%204.16667%205.83325H5.83333L7.05167%203.74659C7.20083%203.49075%207.475%203.33325%207.77167%203.33325H12.1917C12.4842%203.33325%2012.755%203.48659%2012.9058%203.73659L14.1667%205.83325H15.8333C16.7542%205.83325%2017.5%206.57908%2017.5%207.49992Z'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15055_29642'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", pa = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15055_29718)'%3e%3cpath%20d='M10.9375%2014.7916H4.375C3.33917%2014.7916%202.5%2013.9524%202.5%2012.9166V7.08325C2.5%206.04742%203.33917%205.20825%204.375%205.20825H10.9375C11.9733%205.20825%2012.8125%206.04742%2012.8125%207.08325V12.9166C12.8125%2013.9524%2011.9733%2014.7916%2010.9375%2014.7916Z'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.8125%2010.9141L15.975%2013.4591C16.5883%2013.9533%2017.5%2013.5166%2017.5%2012.7291V7.27077C17.5%206.48327%2016.5883%206.04661%2015.975%206.54077L12.8125%209.08577'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15055_29718'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Oi = class Oi {
  constructor() {
    AA(this, "onStartListener", null);
    AA(this, "onStopListener", null);
    AA(this, "stream", null);
    AA(this, "mediaRecorder", null);
    AA(this, "recordedChunks", []);
    AA(this, "timeout", null);
    AA(this, "isRecording", !1);
    AA(this, "start", async () => {
      this.isRecording || (this.stream = await navigator.mediaDevices.getDisplayMedia({ video: !0 }), this.mediaRecorder = new MediaRecorder(this.stream), this.mediaRecorder.onstart = () => {
        var t;
        this.startTimer(), (t = this.onStartListener) == null || t.call(this), this.isRecording = !0;
      }, this.mediaRecorder.ondataavailable = (t) => {
        t.data.size > 0 && this.recordedChunks.push(t.data);
      }, this.mediaRecorder.onstop = () => {
        var r;
        this.stopTimer();
        const t = new Blob(this.recordedChunks, { type: "video/mp4" });
        (r = this.onStopListener) == null || r.call(this, t), this.isRecording = !1;
      }, this.mediaRecorder.start());
    });
    AA(this, "stop", () => {
      var t;
      if ((t = this.mediaRecorder) == null || t.stop(), this.stream) {
        const r = this.stream.getTracks();
        for (let a = 0; a < r.length; a++)
          r[a].stop();
      }
    });
    AA(this, "startTimer", () => {
      this.stopTimer(), this.timeout = window.setTimeout(() => {
        this.stop();
      }, Oi.SCREEN_RECORDING_TIME);
    });
    AA(this, "stopTimer", () => {
      this.timeout && (window.clearTimeout(this.timeout), this.timeout = null);
    });
  }
};
AA(Oi, "SCREEN_RECORDING_TIME", 3e4);
let Vr = Oi;
const pn = async () => {
  try {
    const e = da("data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20width='15px'%20height='15px'%20viewBox='0%200%2032%2032'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%3e%3crect%20stroke='%23000'%20rx='3'%20stroke-width='0'%20height='32'%20width='32'%20y='0'%20x='0'%20fill='%23ffffff'/%3e%3c/g%3e%3c/svg%3e", "red", "#d90000", () => {
      t.stop();
    }), t = new Vr();
    t.onStartListener = () => {
      document.body.appendChild(e), se(!1);
    }, t.onStopListener = (r) => {
      e.remove(), (async (a) => {
        await ga(a), await Qa();
      })(r);
    }, await t.start();
  } catch (e) {
    An(e == null ? void 0 : e.message);
  }
}, Ba = () => vi(dA().shake_sdk_dialog_attachment_count_limit_title, dA().shake_sdk_dialog_attachment_count_limit_message), Bn = async () => (await Le()).length >= 10, wa = async (e) => {
  if (await (async (r) => (await Le()).find((a) => a.name === r))(e.name))
    return;
  const t = window.innerWidth > 1024;
  if (((r) => r.size > 10485760)(e)) {
    const r = e.size / 1048576;
    if (t) {
      let a = dA().shake_sdk_dialog_attachment_size_limit_message;
      a = a.replace("%", r.toFixed(0)), new Te(dA().shake_sdk_dialog_attachment_size_limit_title, a);
    } else
      Se(((a) => {
        let g = dA().shake_sdk_dialog_attachment_size_limit_message;
        return g = g.replace("%", a.toFixed(0)), vi(dA().shake_sdk_dialog_attachment_size_limit_title, g);
      })(r));
  } else
    await Bn() ? t ? new Te(dA().shake_sdk_dialog_attachment_count_limit_title, dA().shake_sdk_dialog_attachment_count_limit_message) : Se(Ba()) : await async function(r) {
      var p;
      const a = new Blob([r], { type: r.type }), g = ((p = r.name.split(".").reverse()) == null ? void 0 : p[0]) ?? "";
      r.type.startsWith("image") ? await gn(a, g) : r.type.startsWith("video") ? await ga(a, g) : await fn(a, yA.FILE, r.name);
    }(e);
}, Zs = (e) => {
  const t = (r) => {
    r.preventDefault(), r.stopPropagation();
  };
  ["dragenter", "dragover", "dragleave", "drop"].forEach((r) => {
    e.addEventListener(r, t, !1);
  }), ["dragenter", "dragover"].forEach((r) => {
    e.addEventListener(r, () => {
      e.classList.add("hover");
    }, !1);
  }), ["dragleave", "drop"].forEach((r) => {
    e.addEventListener(r, () => {
      e.classList.remove("hover");
    }, !1);
  }), e.addEventListener("drop", async (r) => {
    var p;
    const a = r.dataTransfer, g = (p = a == null ? void 0 : a.files) == null ? void 0 : p[0];
    g && await wa(g);
  }, !1);
}, ma = "data:image/svg+xml,%3csvg%20width='23'%20height='23'%20viewBox='0%200%2023%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15050_29400)'%3e%3cpath%20d='M11.3994%207.80005V15'%20stroke='%238E8E93'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.9998%2011.4001H7.7998'%20stroke='%238E8E93'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15050_29400'%3e%3crect%20width='21.6'%20height='21.6'%20fill='white'%20transform='translate(0.599609%200.600098)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", dr = ({ img: e, text: t, onClick: r }) => {
  const a = document.createElement("button");
  return a.classList.add("shake-sdk-context-menu-item"), a.onclick = r, a.appendChild(XA(e)), a.appendChild(((g) => {
    const p = document.createElement("p");
    return p.classList.add("shake-sdk-text-p2"), p.innerText = g, p;
  })(t)), a;
}, Hi = () => {
  const e = navigator.userAgent;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e) || window.ontouchstart !== void 0;
}, Vu = (e) => {
  const t = [];
  t.push(dr({ img: fa, text: dA().shake_sdk_dialog_add_attachment_grab_screenshot, onClick: wn })), Hi() || t.push(dr({ img: pa, text: dA().shake_sdk_dialog_add_attachment_record_screen, onClick: pn })), t.push(dr({ img: "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15055_29723)'%3e%3cpath%20d='M15.3453%205.345L12.9887%202.98833C12.6762%202.67583%2012.252%202.5%2011.8103%202.5H5.83366C4.91283%202.5%204.16699%203.24583%204.16699%204.16667V15.8333C4.16699%2016.7542%204.91283%2017.5%205.83366%2017.5H14.167C15.0878%2017.5%2015.8337%2016.7542%2015.8337%2015.8333V6.52333C15.8337%206.08167%2015.6578%205.6575%2015.3453%205.345Z'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15.8337%206.66667H12.5003C12.0403%206.66667%2011.667%206.29333%2011.667%205.83333V2.5'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15055_29723'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", text: dA().shake_sdk_dialog_add_attachment_browse_locations, onClick: un }));
  const { menu: r, toggle: a } = ((g, p, w) => {
    let C = !1;
    const y = uA();
    return y.classList.add("shake-sdk-context-menu"), p.forEach((Q) => y.appendChild(Q)), document.addEventListener("click", function(Q) {
      C && Q.target !== g && (y.style.display = "none", C = !1);
    }), { menu: y, toggle: () => {
      C ? (y.style.display = "none", C = !1) : (y.style.display = "block", C = !0), y.style.left = g.getBoundingClientRect().left + "px", y.style.top = g.getBoundingClientRect().top + "px";
    } };
  })(e, t);
  return e.onclick = async (g) => {
    g.stopPropagation(), await Bn() ? new Te(dA().shake_sdk_dialog_attachment_count_limit_title, dA().shake_sdk_dialog_attachment_count_limit_message) : a();
  }, r;
}, Ca = "data:image/svg+xml,%3csvg%20width='31'%20height='32'%20viewBox='0%200%2031%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.7285%2013.4543L17.8197%2018.5455'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.8197%2013.4545L12.7285%2018.5457'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Vi = ({ src: e, controls: t, autoplay: r }) => {
  const a = document.createElement("video");
  return a.classList.add("shake-sdk-video"), a.src = e, a.controls = t ?? !1, a.preload = "metadata", a.autoplay = r ?? !1, a.loop = !0, a;
}, Xu = (e) => {
  const t = uA();
  return t.classList.add("shake-sdk-attachment-title-box"), t.appendChild(en(e)), t;
}, Wu = (e) => {
  const t = uA();
  t.classList.add("shake-sdk-file-thumbnail");
  const r = en(e);
  return t.appendChild(r), t;
}, Yu = (e, t) => {
  const r = CA.attachmentsManager, a = /* @__PURE__ */ new Map();
  let g = e.length - 1;
  const p = (E) => Array.from(a.keys()).find((S) => S === E.name) ?? E.name, w = (E) => {
    g = Array.from(a.keys()).indexOf(p(E)), Q();
  }, C = (E) => {
    r.removeAttachment(E);
  }, y = (E) => {
    const S = b.lastChild;
    S && b.removeChild(S);
    const L = ((H, j, B) => {
      const J = Oe(Ca);
      let iA, cA;
      J.classList.add("shake-sdk-attachment-remove"), J.onclick = (i) => {
        i.stopPropagation(), B(H);
      };
      const u = URL.createObjectURL(H.drawingData ?? H.data);
      H.type == yA.IMAGE ? (iA = dA().shake_sdk_dialog_add_attachment_type_image, cA = XA(u)) : H.type == yA.VIDEO ? (iA = dA().shake_sdk_dialog_add_attachment_type_video, cA = Vi({ src: u + "#t=0.1", autoplay: !0 })) : (iA = dA().shake_sdk_dialog_add_attachment_type_file, cA = Wu(H.name)), cA.classList.add("shake-sdk-attachment-item-thumbnail");
      const s = hn();
      s.classList.add("shake-sdk-attachment-item-card"), s.appendChild(cA), s.appendChild(J);
      const o = Xu(iA), d = uA();
      d.classList.add("shake-sdk-attachment-item-title"), d.appendChild(o);
      const A = uA();
      return A.classList.add("shake-sdk-attachment-item"), A.draggable = !1, A.onclick = () => j(H), A.appendChild(s), A.appendChild(d), A;
    })(E, w, C);
    a.set(E.name, L), b.appendChild(L), b.appendChild((() => {
      const H = Oe(ma);
      H.classList.add("shake-sdk-attachment-add-button");
      const j = uA();
      return j.classList.add("shake-sdk-attachments-add-item"), j.appendChild(H), j.appendChild(Vu(H)), j;
    })());
  };
  r.removeObservers.push((E) => {
    const S = a.get(p(E));
    S && (S.remove(), a.delete(p(E)), a.size - 1 < g && (g = a.size - 1), Q());
  }), r.updateObservers.push((E) => {
    const S = a.get(p(E));
    S && ((L, H) => {
      const j = URL.createObjectURL(H.drawingData ?? H.data), B = L.getElementsByClassName("shake-sdk-attachment-item-thumbnail");
      H.type == yA.IMAGE && (B[0].src = j), H.type == yA.VIDEO && (B[0].src = j);
    })(S, E);
  }), r.addObservers.push((E) => {
    y(E), g = a.size - 1, Q();
  });
  const Q = () => {
    if (g < 0)
      return void t(null);
    const E = Array.from(a.keys())[g], S = Array.from(a.values())[g], L = "shake-sdk-attachment-item-selected", H = Array.from(a.values());
    if (H) {
      for (const j of H)
        j.classList.remove(L);
      S == null || S.classList.add(L);
    }
    t(E);
  }, b = uA();
  return b.classList.add("shake-sdk-attachments-items"), e.forEach((E) => y(E)), Q(), b;
};
var FA = ((e) => (e.PENCIL = "pencil", e.BLUR = "blur", e.ELLIPSE = "ellipse", e.RECT = "rect", e))(FA || {}), be = {};
const gr = Ya(Object.freeze(Object.defineProperty({ __proto__: null, default: {} }, Symbol.toStringTag, { value: "Module" })));
(function(e) {
  /*! Fabric.js Copyright 2008-2015, Printio (Juriy Zaytsev, Maxim Chernyak) */
  var t, r, a, g, p, w, C, y, Q, b, E, S, L, H, j, B = B || { version: "5.3.0" };
  if (e.fabric = B, typeof document < "u" && typeof window < "u")
    document instanceof (typeof HTMLDocument < "u" ? HTMLDocument : Document) ? B.document = document : B.document = document.implementation.createHTMLDocument(""), B.window = window;
  else {
    var J = new gr.JSDOM(decodeURIComponent("%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E"), { features: { FetchExternalResources: ["img"] }, resources: "usable" }).window;
    B.document = J.document, B.jsdomImplForWrapper = gr.implForWrapper, B.nodeCanvas = gr.Canvas, B.window = J, DOMParser = B.window.DOMParser;
  }
  function iA(u, s) {
    var o = u.canvas, d = s.targetCanvas, A = d.getContext("2d");
    A.translate(0, d.height), A.scale(1, -1);
    var i = o.height - d.height;
    A.drawImage(o, 0, i, d.width, d.height, 0, 0, d.width, d.height);
  }
  function cA(u, s) {
    var o = s.targetCanvas.getContext("2d"), d = s.destinationWidth, A = s.destinationHeight, i = d * A * 4, n = new Uint8Array(this.imageBuffer, 0, i), h = new Uint8ClampedArray(this.imageBuffer, 0, i);
    u.readPixels(0, 0, d, A, u.RGBA, u.UNSIGNED_BYTE, n);
    var c = new ImageData(h, d, A);
    o.putImageData(c, 0, 0);
  }
  B.isTouchSupported = "ontouchstart" in B.window || "ontouchstart" in B.document || B.window && B.window.navigator && B.window.navigator.maxTouchPoints > 0, B.isLikelyNode = typeof Buffer < "u" && typeof window > "u", B.SHARED_ATTRIBUTES = ["display", "transform", "fill", "fill-opacity", "fill-rule", "opacity", "stroke", "stroke-dasharray", "stroke-linecap", "stroke-dashoffset", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "id", "paint-order", "vector-effect", "instantiated_by_use", "clip-path"], B.DPI = 96, B.reNum = "(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:[eE][-+]?\\d+)?)", B.commaWsp = "(?:\\s+,?\\s*|,\\s*)", B.rePathCommand = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:[eE][-+]?\d+)?)/gi, B.reNonWord = /[ \n\.,;!\?\-]/, B.fontPaths = {}, B.iMatrix = [1, 0, 0, 1, 0, 0], B.svgNS = "http://www.w3.org/2000/svg", B.perfLimitSizeTotal = 2097152, B.maxCacheSideLimit = 4096, B.minCacheSideLimit = 256, B.charWidthsCache = {}, B.textureSize = 2048, B.disableStyleCopyPaste = !1, B.enableGLFiltering = !0, B.devicePixelRatio = B.window.devicePixelRatio || B.window.webkitDevicePixelRatio || B.window.mozDevicePixelRatio || 1, B.browserShadowBlurConstant = 1, B.arcToSegmentsCache = {}, B.boundsOfCurveCache = {}, B.cachesBoundsOfCurve = !0, B.forceGLPutImageData = !1, B.initFilterBackend = function() {
    return B.enableGLFiltering && B.isWebglSupported && B.isWebglSupported(B.textureSize) ? (console.log("max texture size: " + B.maxTextureSize), new B.WebglFilterBackend({ tileSize: B.textureSize })) : B.Canvas2dFilterBackend ? new B.Canvas2dFilterBackend() : void 0;
  }, typeof document < "u" && typeof window < "u" && (window.fabric = B), function() {
    function u(o, d) {
      if (this.__eventListeners[o]) {
        var A = this.__eventListeners[o];
        d ? A[A.indexOf(d)] = !1 : B.util.array.fill(A, !1);
      }
    }
    function s(o, d) {
      var A = (function() {
        d.apply(this, arguments), this.off(o, A);
      }).bind(this);
      this.on(o, A);
    }
    B.Observable = { fire: function(o, d) {
      if (!this.__eventListeners)
        return this;
      var A = this.__eventListeners[o];
      if (!A)
        return this;
      for (var i = 0, n = A.length; i < n; i++)
        A[i] && A[i].call(this, d || {});
      return this.__eventListeners[o] = A.filter(function(h) {
        return h !== !1;
      }), this;
    }, on: function(o, d) {
      if (this.__eventListeners || (this.__eventListeners = {}), arguments.length === 1)
        for (var A in o)
          this.on(A, o[A]);
      else
        this.__eventListeners[o] || (this.__eventListeners[o] = []), this.__eventListeners[o].push(d);
      return this;
    }, once: function(o, d) {
      if (arguments.length === 1)
        for (var A in o)
          s.call(this, A, o[A]);
      else
        s.call(this, o, d);
      return this;
    }, off: function(o, d) {
      if (!this.__eventListeners)
        return this;
      if (arguments.length === 0)
        for (o in this.__eventListeners)
          u.call(this, o);
      else if (arguments.length === 1 && typeof arguments[0] == "object")
        for (var A in o)
          u.call(this, A, o[A]);
      else
        u.call(this, o, d);
      return this;
    } };
  }(), B.Collection = { _objects: [], add: function() {
    if (this._objects.push.apply(this._objects, arguments), this._onObjectAdded)
      for (var u = 0, s = arguments.length; u < s; u++)
        this._onObjectAdded(arguments[u]);
    return this.renderOnAddRemove && this.requestRenderAll(), this;
  }, insertAt: function(u, s, o) {
    var d = this._objects;
    return o ? d[s] = u : d.splice(s, 0, u), this._onObjectAdded && this._onObjectAdded(u), this.renderOnAddRemove && this.requestRenderAll(), this;
  }, remove: function() {
    for (var u, s = this._objects, o = !1, d = 0, A = arguments.length; d < A; d++)
      (u = s.indexOf(arguments[d])) !== -1 && (o = !0, s.splice(u, 1), this._onObjectRemoved && this._onObjectRemoved(arguments[d]));
    return this.renderOnAddRemove && o && this.requestRenderAll(), this;
  }, forEachObject: function(u, s) {
    for (var o = this.getObjects(), d = 0, A = o.length; d < A; d++)
      u.call(s, o[d], d, o);
    return this;
  }, getObjects: function(u) {
    return u === void 0 ? this._objects.concat() : this._objects.filter(function(s) {
      return s.type === u;
    });
  }, item: function(u) {
    return this._objects[u];
  }, isEmpty: function() {
    return this._objects.length === 0;
  }, size: function() {
    return this._objects.length;
  }, contains: function(u, s) {
    return this._objects.indexOf(u) > -1 || !!s && this._objects.some(function(o) {
      return typeof o.contains == "function" && o.contains(u, !0);
    });
  }, complexity: function() {
    return this._objects.reduce(function(u, s) {
      return u += s.complexity ? s.complexity() : 0;
    }, 0);
  } }, B.CommonMethods = { _setOptions: function(u) {
    for (var s in u)
      this.set(s, u[s]);
  }, _initGradient: function(u, s) {
    !u || !u.colorStops || u instanceof B.Gradient || this.set(s, new B.Gradient(u));
  }, _initPattern: function(u, s, o) {
    !u || !u.source || u instanceof B.Pattern ? o && o() : this.set(s, new B.Pattern(u, o));
  }, _setObject: function(u) {
    for (var s in u)
      this._set(s, u[s]);
  }, set: function(u, s) {
    return typeof u == "object" ? this._setObject(u) : this._set(u, s), this;
  }, _set: function(u, s) {
    this[u] = s;
  }, toggle: function(u) {
    var s = this.get(u);
    return typeof s == "boolean" && this.set(u, !s), this;
  }, get: function(u) {
    return this[u];
  } }, function(u) {
    var s = Math.sqrt, o = Math.atan2, d = Math.pow, A = Math.PI / 180, i = Math.PI / 2;
    B.util = { cos: function(n) {
      if (n === 0)
        return 1;
      switch (n < 0 && (n = -n), n / i) {
        case 1:
        case 3:
          return 0;
        case 2:
          return -1;
      }
      return Math.cos(n);
    }, sin: function(n) {
      if (n === 0)
        return 0;
      var h = 1;
      switch (n < 0 && (h = -1), n / i) {
        case 1:
          return h;
        case 2:
          return 0;
        case 3:
          return -h;
      }
      return Math.sin(n);
    }, removeFromArray: function(n, h) {
      var c = n.indexOf(h);
      return c !== -1 && n.splice(c, 1), n;
    }, getRandomInt: function(n, h) {
      return Math.floor(Math.random() * (h - n + 1)) + n;
    }, degreesToRadians: function(n) {
      return n * A;
    }, radiansToDegrees: function(n) {
      return n / A;
    }, rotatePoint: function(n, h, c) {
      var l = new B.Point(n.x - h.x, n.y - h.y), f = B.util.rotateVector(l, c);
      return new B.Point(f.x, f.y).addEquals(h);
    }, rotateVector: function(n, h) {
      var c = B.util.sin(h), l = B.util.cos(h);
      return { x: n.x * l - n.y * c, y: n.x * c + n.y * l };
    }, createVector: function(n, h) {
      return new B.Point(h.x - n.x, h.y - n.y);
    }, calcAngleBetweenVectors: function(n, h) {
      return Math.acos((n.x * h.x + n.y * h.y) / (Math.hypot(n.x, n.y) * Math.hypot(h.x, h.y)));
    }, getHatVector: function(n) {
      return new B.Point(n.x, n.y).multiply(1 / Math.hypot(n.x, n.y));
    }, getBisector: function(n, h, c) {
      var l = B.util.createVector(n, h), f = B.util.createVector(n, c), m = B.util.calcAngleBetweenVectors(l, f), v = m * (B.util.calcAngleBetweenVectors(B.util.rotateVector(l, m), f) === 0 ? 1 : -1) / 2;
      return { vector: B.util.getHatVector(B.util.rotateVector(l, v)), angle: m };
    }, projectStrokeOnPoints: function(n, h, c) {
      var l = [], f = h.strokeWidth / 2, m = h.strokeUniform ? new B.Point(1 / h.scaleX, 1 / h.scaleY) : new B.Point(1, 1), v = function(x) {
        var U = f / Math.hypot(x.x, x.y);
        return new B.Point(x.x * U * m.x, x.y * U * m.y);
      };
      return n.length <= 1 || n.forEach(function(x, U) {
        var F, k, O = new B.Point(x.x, x.y);
        U === 0 ? (k = n[U + 1], F = c ? v(B.util.createVector(k, O)).addEquals(O) : n[n.length - 1]) : U === n.length - 1 ? (F = n[U - 1], k = c ? v(B.util.createVector(F, O)).addEquals(O) : n[0]) : (F = n[U - 1], k = n[U + 1]);
        var P, R, Y = B.util.getBisector(O, F, k), V = Y.vector, _ = Y.angle;
        if (h.strokeLineJoin === "miter" && (P = -f / Math.sin(_ / 2), R = new B.Point(V.x * P * m.x, V.y * P * m.y), Math.hypot(R.x, R.y) / f <= h.strokeMiterLimit))
          return l.push(O.add(R)), void l.push(O.subtract(R));
        P = -f * Math.SQRT2, R = new B.Point(V.x * P * m.x, V.y * P * m.y), l.push(O.add(R)), l.push(O.subtract(R));
      }), l;
    }, transformPoint: function(n, h, c) {
      return c ? new B.Point(h[0] * n.x + h[2] * n.y, h[1] * n.x + h[3] * n.y) : new B.Point(h[0] * n.x + h[2] * n.y + h[4], h[1] * n.x + h[3] * n.y + h[5]);
    }, makeBoundingBoxFromPoints: function(n, h) {
      if (h)
        for (var c = 0; c < n.length; c++)
          n[c] = B.util.transformPoint(n[c], h);
      var l = [n[0].x, n[1].x, n[2].x, n[3].x], f = B.util.array.min(l), m = B.util.array.max(l) - f, v = [n[0].y, n[1].y, n[2].y, n[3].y], x = B.util.array.min(v);
      return { left: f, top: x, width: m, height: B.util.array.max(v) - x };
    }, invertTransform: function(n) {
      var h = 1 / (n[0] * n[3] - n[1] * n[2]), c = [h * n[3], -h * n[1], -h * n[2], h * n[0]], l = B.util.transformPoint({ x: n[4], y: n[5] }, c, !0);
      return c[4] = -l.x, c[5] = -l.y, c;
    }, toFixed: function(n, h) {
      return parseFloat(Number(n).toFixed(h));
    }, parseUnit: function(n, h) {
      var c = /\D{0,2}$/.exec(n), l = parseFloat(n);
      switch (h || (h = B.Text.DEFAULT_SVG_FONT_SIZE), c[0]) {
        case "mm":
          return l * B.DPI / 25.4;
        case "cm":
          return l * B.DPI / 2.54;
        case "in":
          return l * B.DPI;
        case "pt":
          return l * B.DPI / 72;
        case "pc":
          return l * B.DPI / 72 * 12;
        case "em":
          return l * h;
        default:
          return l;
      }
    }, falseFunction: function() {
      return !1;
    }, getKlass: function(n, h) {
      return n = B.util.string.camelize(n.charAt(0).toUpperCase() + n.slice(1)), B.util.resolveNamespace(h)[n];
    }, getSvgAttributes: function(n) {
      var h = ["instantiated_by_use", "style", "id", "class"];
      switch (n) {
        case "linearGradient":
          h = h.concat(["x1", "y1", "x2", "y2", "gradientUnits", "gradientTransform"]);
          break;
        case "radialGradient":
          h = h.concat(["gradientUnits", "gradientTransform", "cx", "cy", "r", "fx", "fy", "fr"]);
          break;
        case "stop":
          h = h.concat(["offset", "stop-color", "stop-opacity"]);
      }
      return h;
    }, resolveNamespace: function(n) {
      if (!n)
        return B;
      var h, c = n.split("."), l = c.length, f = u || B.window;
      for (h = 0; h < l; ++h)
        f = f[c[h]];
      return f;
    }, loadImage: function(n, h, c, l) {
      if (n) {
        var f = B.util.createImage(), m = function() {
          h && h.call(c, f, !1), f = f.onload = f.onerror = null;
        };
        f.onload = m, f.onerror = function() {
          B.log("Error loading " + f.src), h && h.call(c, null, !0), f = f.onload = f.onerror = null;
        }, n.indexOf("data") !== 0 && l != null && (f.crossOrigin = l), n.substring(0, 14) === "data:image/svg" && (f.onload = null, B.util.loadImageInDom(f, m)), f.src = n;
      } else
        h && h.call(c, n);
    }, loadImageInDom: function(n, h) {
      var c = B.document.createElement("div");
      c.style.width = c.style.height = "1px", c.style.left = c.style.top = "-100%", c.style.position = "absolute", c.appendChild(n), B.document.querySelector("body").appendChild(c), n.onload = function() {
        h(), c.parentNode.removeChild(c), c = null;
      };
    }, enlivenObjects: function(n, h, c, l) {
      var f = [], m = 0, v = (n = n || []).length;
      function x() {
        ++m === v && h && h(f.filter(function(U) {
          return U;
        }));
      }
      v ? n.forEach(function(U, F) {
        U && U.type ? B.util.getKlass(U.type, c).fromObject(U, function(k, O) {
          O || (f[F] = k), l && l(U, k, O), x();
        }) : x();
      }) : h && h(f);
    }, enlivenObjectEnlivables: function(n, h, c) {
      var l = B.Object.ENLIVEN_PROPS.filter(function(f) {
        return !!n[f];
      });
      B.util.enlivenObjects(l.map(function(f) {
        return n[f];
      }), function(f) {
        var m = {};
        l.forEach(function(v, x) {
          m[v] = f[x], h && (h[v] = f[x]);
        }), c && c(m);
      });
    }, enlivenPatterns: function(n, h) {
      function c() {
        ++f === m && h && h(l);
      }
      var l = [], f = 0, m = (n = n || []).length;
      m ? n.forEach(function(v, x) {
        v && v.source ? new B.Pattern(v, function(U) {
          l[x] = U, c();
        }) : (l[x] = v, c());
      }) : h && h(l);
    }, groupSVGElements: function(n, h, c) {
      var l;
      return n && n.length === 1 ? (c !== void 0 && (n[0].sourcePath = c), n[0]) : (h && (h.width && h.height ? h.centerPoint = { x: h.width / 2, y: h.height / 2 } : (delete h.width, delete h.height)), l = new B.Group(n, h), c !== void 0 && (l.sourcePath = c), l);
    }, populateWithProperties: function(n, h, c) {
      if (c && Array.isArray(c))
        for (var l = 0, f = c.length; l < f; l++)
          c[l] in n && (h[c[l]] = n[c[l]]);
    }, createCanvasElement: function() {
      return B.document.createElement("canvas");
    }, copyCanvasElement: function(n) {
      var h = B.util.createCanvasElement();
      return h.width = n.width, h.height = n.height, h.getContext("2d").drawImage(n, 0, 0), h;
    }, toDataURL: function(n, h, c) {
      return n.toDataURL("image/" + h, c);
    }, createImage: function() {
      return B.document.createElement("img");
    }, multiplyTransformMatrices: function(n, h, c) {
      return [n[0] * h[0] + n[2] * h[1], n[1] * h[0] + n[3] * h[1], n[0] * h[2] + n[2] * h[3], n[1] * h[2] + n[3] * h[3], c ? 0 : n[0] * h[4] + n[2] * h[5] + n[4], c ? 0 : n[1] * h[4] + n[3] * h[5] + n[5]];
    }, qrDecompose: function(n) {
      var h = o(n[1], n[0]), c = d(n[0], 2) + d(n[1], 2), l = s(c), f = (n[0] * n[3] - n[2] * n[1]) / l, m = o(n[0] * n[2] + n[1] * n[3], c);
      return { angle: h / A, scaleX: l, scaleY: f, skewX: m / A, skewY: 0, translateX: n[4], translateY: n[5] };
    }, calcRotateMatrix: function(n) {
      if (!n.angle)
        return B.iMatrix.concat();
      var h = B.util.degreesToRadians(n.angle), c = B.util.cos(h), l = B.util.sin(h);
      return [c, l, -l, c, 0, 0];
    }, calcDimensionsMatrix: function(n) {
      var h = n.scaleX === void 0 ? 1 : n.scaleX, c = n.scaleY === void 0 ? 1 : n.scaleY, l = [n.flipX ? -h : h, 0, 0, n.flipY ? -c : c, 0, 0], f = B.util.multiplyTransformMatrices, m = B.util.degreesToRadians;
      return n.skewX && (l = f(l, [1, 0, Math.tan(m(n.skewX)), 1], !0)), n.skewY && (l = f(l, [1, Math.tan(m(n.skewY)), 0, 1], !0)), l;
    }, composeMatrix: function(n) {
      var h = [1, 0, 0, 1, n.translateX || 0, n.translateY || 0], c = B.util.multiplyTransformMatrices;
      return n.angle && (h = c(h, B.util.calcRotateMatrix(n))), (n.scaleX !== 1 || n.scaleY !== 1 || n.skewX || n.skewY || n.flipX || n.flipY) && (h = c(h, B.util.calcDimensionsMatrix(n))), h;
    }, resetObjectTransform: function(n) {
      n.scaleX = 1, n.scaleY = 1, n.skewX = 0, n.skewY = 0, n.flipX = !1, n.flipY = !1, n.rotate(0);
    }, saveObjectTransform: function(n) {
      return { scaleX: n.scaleX, scaleY: n.scaleY, skewX: n.skewX, skewY: n.skewY, angle: n.angle, left: n.left, flipX: n.flipX, flipY: n.flipY, top: n.top };
    }, isTransparent: function(n, h, c, l) {
      l > 0 && (h > l ? h -= l : h = 0, c > l ? c -= l : c = 0);
      var f, m = !0, v = n.getImageData(h, c, 2 * l || 1, 2 * l || 1), x = v.data.length;
      for (f = 3; f < x && (m = v.data[f] <= 0); f += 4)
        ;
      return v = null, m;
    }, parsePreserveAspectRatioAttribute: function(n) {
      var h, c = "meet", l = n.split(" ");
      return l && l.length && ((c = l.pop()) !== "meet" && c !== "slice" ? (h = c, c = "meet") : l.length && (h = l.pop())), { meetOrSlice: c, alignX: h !== "none" ? h.slice(1, 4) : "none", alignY: h !== "none" ? h.slice(5, 8) : "none" };
    }, clearFabricFontCache: function(n) {
      (n = (n || "").toLowerCase()) ? B.charWidthsCache[n] && delete B.charWidthsCache[n] : B.charWidthsCache = {};
    }, limitDimsByArea: function(n, h) {
      var c = Math.sqrt(h * n), l = Math.floor(h / c);
      return { x: Math.floor(c), y: l };
    }, capValue: function(n, h, c) {
      return Math.max(n, Math.min(h, c));
    }, findScaleToFit: function(n, h) {
      return Math.min(h.width / n.width, h.height / n.height);
    }, findScaleToCover: function(n, h) {
      return Math.max(h.width / n.width, h.height / n.height);
    }, matrixToSVG: function(n) {
      return "matrix(" + n.map(function(h) {
        return B.util.toFixed(h, B.Object.NUM_FRACTION_DIGITS);
      }).join(" ") + ")";
    }, removeTransformFromObject: function(n, h) {
      var c = B.util.invertTransform(h), l = B.util.multiplyTransformMatrices(c, n.calcOwnMatrix());
      B.util.applyTransformToObject(n, l);
    }, addTransformToObject: function(n, h) {
      B.util.applyTransformToObject(n, B.util.multiplyTransformMatrices(h, n.calcOwnMatrix()));
    }, applyTransformToObject: function(n, h) {
      var c = B.util.qrDecompose(h), l = new B.Point(c.translateX, c.translateY);
      n.flipX = !1, n.flipY = !1, n.set("scaleX", c.scaleX), n.set("scaleY", c.scaleY), n.skewX = c.skewX, n.skewY = c.skewY, n.angle = c.angle, n.setPositionByOrigin(l, "center", "center");
    }, sizeAfterTransform: function(n, h, c) {
      var l = n / 2, f = h / 2, m = [{ x: -l, y: -f }, { x: l, y: -f }, { x: -l, y: f }, { x: l, y: f }], v = B.util.calcDimensionsMatrix(c), x = B.util.makeBoundingBoxFromPoints(m, v);
      return { x: x.width, y: x.height };
    }, mergeClipPaths: function(n, h) {
      var c = n, l = h;
      c.inverted && !l.inverted && (c = h, l = n), B.util.applyTransformToObject(l, B.util.multiplyTransformMatrices(B.util.invertTransform(c.calcTransformMatrix()), l.calcTransformMatrix()));
      var f = c.inverted && l.inverted;
      return f && (c.inverted = l.inverted = !1), new B.Group([c], { clipPath: l, inverted: f });
    }, hasStyleChanged: function(n, h, c) {
      return c = c || !1, n.fill !== h.fill || n.stroke !== h.stroke || n.strokeWidth !== h.strokeWidth || n.fontSize !== h.fontSize || n.fontFamily !== h.fontFamily || n.fontWeight !== h.fontWeight || n.fontStyle !== h.fontStyle || n.textBackgroundColor !== h.textBackgroundColor || n.deltaY !== h.deltaY || c && (n.overline !== h.overline || n.underline !== h.underline || n.linethrough !== h.linethrough);
    }, stylesToArray: function(n, h) {
      n = B.util.object.clone(n, !0);
      for (var c = h.split(`
`), l = -1, f = {}, m = [], v = 0; v < c.length; v++)
        if (n[v])
          for (var x = 0; x < c[v].length; x++) {
            l++;
            var U = n[v][x];
            U && Object.keys(U).length > 0 && (B.util.hasStyleChanged(f, U, !0) ? m.push({ start: l, end: l + 1, style: U }) : m[m.length - 1].end++), f = U || {};
          }
        else
          l += c[v].length;
      return m;
    }, stylesFromArray: function(n, h) {
      if (!Array.isArray(n))
        return n;
      for (var c = h.split(`
`), l = -1, f = 0, m = {}, v = 0; v < c.length; v++)
        for (var x = 0; x < c[v].length; x++)
          l++, n[f] && n[f].start <= l && l < n[f].end && (m[v] = m[v] || {}, m[v][x] = Object.assign({}, n[f].style), l === n[f].end - 1 && f++);
      return m;
    } };
  }(e), function() {
    var u = Array.prototype.join, s = { m: 2, l: 2, h: 1, v: 1, c: 6, s: 4, q: 4, t: 2, a: 7 }, o = { m: "l", M: "L" };
    function d(U, F, k, O, P, R, Y, V, _, T, M) {
      var N = B.util.cos(U), X = B.util.sin(U), D = B.util.cos(F), I = B.util.sin(F), K = k * P * D - O * R * I + Y, W = O * P * D + k * R * I + V;
      return ["C", T + _ * (-k * P * X - O * R * N), M + _ * (-O * P * X + k * R * N), K + _ * (k * P * I + O * R * D), W + _ * (O * P * I - k * R * D), K, W];
    }
    function A(U, F, k, O) {
      var P = Math.atan2(F, U), R = Math.atan2(O, k);
      return R >= P ? R - P : 2 * Math.PI - (P - R);
    }
    function i(U, F, k) {
      for (var O = k[1], P = k[2], R = k[3], Y = k[4], V = k[5], _ = function(N, X, D, I, K, W, G) {
        var z = Math.PI, $ = G * z / 180, eA = B.util.sin($), rA = B.util.cos($), Z = 0, nA = 0, q = -rA * N * 0.5 - eA * X * 0.5, lA = -rA * X * 0.5 + eA * N * 0.5, sA = (D = Math.abs(D)) * D, hA = (I = Math.abs(I)) * I, BA = lA * lA, GA = q * q, dt = sA * hA - sA * BA - hA * GA, St = 0;
        if (dt < 0) {
          var xA = Math.sqrt(1 - dt / (sA * hA));
          D *= xA, I *= xA;
        } else
          St = (K === W ? -1 : 1) * Math.sqrt(dt / (sA * BA + hA * GA));
        var WA = St * D * lA / I, gt = -St * I * q / D, Rt = rA * WA - eA * gt + 0.5 * N, ae = eA * WA + rA * gt + 0.5 * X, Xi = A(1, 0, (q - WA) / D, (lA - gt) / I), Kt = A((q - WA) / D, (lA - gt) / I, (-q - WA) / D, (-lA - gt) / I);
        W === 0 && Kt > 0 ? Kt -= 2 * z : W === 1 && Kt < 0 && (Kt += 2 * z);
        for (var mn = Math.ceil(Math.abs(Kt / z * 2)), Pe = [], ce = Kt / mn, ka = 8 / 3 * Math.sin(ce / 4) * Math.sin(ce / 4) / Math.sin(ce / 2), Wi = Xi + ce, le = 0; le < mn; le++)
          Pe[le] = d(Xi, Wi, rA, eA, D, I, Rt, ae, ka, Z, nA), Z = Pe[le][5], nA = Pe[le][6], Xi = Wi, Wi += ce;
        return Pe;
      }(k[6] - U, k[7] - F, O, P, Y, V, R), T = 0, M = _.length; T < M; T++)
        _[T][1] += U, _[T][2] += F, _[T][3] += U, _[T][4] += F, _[T][5] += U, _[T][6] += F;
      return _;
    }
    function n(U, F, k, O) {
      return Math.sqrt((k - U) * (k - U) + (O - F) * (O - F));
    }
    function h(U, F, k, O, P, R, Y, V) {
      return function(_) {
        var T, M = (T = _) * T * T, N = function(I) {
          return 3 * I * I * (1 - I);
        }(_), X = function(I) {
          return 3 * I * (1 - I) * (1 - I);
        }(_), D = function(I) {
          return (1 - I) * (1 - I) * (1 - I);
        }(_);
        return { x: Y * M + P * N + k * X + U * D, y: V * M + R * N + O * X + F * D };
      };
    }
    function c(U, F, k, O, P, R, Y, V) {
      return function(_) {
        var T = 1 - _, M = 3 * T * T * (k - U) + 6 * T * _ * (P - k) + 3 * _ * _ * (Y - P), N = 3 * T * T * (O - F) + 6 * T * _ * (R - O) + 3 * _ * _ * (V - R);
        return Math.atan2(N, M);
      };
    }
    function l(U, F, k, O, P, R) {
      return function(Y) {
        var V, _ = (V = Y) * V, T = function(N) {
          return 2 * N * (1 - N);
        }(Y), M = function(N) {
          return (1 - N) * (1 - N);
        }(Y);
        return { x: P * _ + k * T + U * M, y: R * _ + O * T + F * M };
      };
    }
    function f(U, F, k, O, P, R) {
      return function(Y) {
        var V = 1 - Y, _ = 2 * V * (k - U) + 2 * Y * (P - k), T = 2 * V * (O - F) + 2 * Y * (R - O);
        return Math.atan2(T, _);
      };
    }
    function m(U, F, k) {
      var O, P, R = { x: F, y: k }, Y = 0;
      for (P = 1; P <= 100; P += 1)
        O = U(P / 100), Y += n(R.x, R.y, O.x, O.y), R = O;
      return Y;
    }
    function v(U, F) {
      for (var k, O, P, R = 0, Y = 0, V = U.iterator, _ = { x: U.x, y: U.y }, T = 0.01, M = U.angleFinder; Y < F && T > 1e-4; )
        k = V(R), P = R, (O = n(_.x, _.y, k.x, k.y)) + Y > F ? (R -= T, T /= 2) : (_ = k, R += T, Y += O);
      return k.angle = M(P), k;
    }
    function x(U) {
      for (var F, k, O, P, R = 0, Y = U.length, V = 0, _ = 0, T = 0, M = 0, N = [], X = 0; X < Y; X++) {
        switch (O = { x: V, y: _, command: (F = U[X])[0] }, F[0]) {
          case "M":
            O.length = 0, T = V = F[1], M = _ = F[2];
            break;
          case "L":
            O.length = n(V, _, F[1], F[2]), V = F[1], _ = F[2];
            break;
          case "C":
            k = h(V, _, F[1], F[2], F[3], F[4], F[5], F[6]), P = c(V, _, F[1], F[2], F[3], F[4], F[5], F[6]), O.iterator = k, O.angleFinder = P, O.length = m(k, V, _), V = F[5], _ = F[6];
            break;
          case "Q":
            k = l(V, _, F[1], F[2], F[3], F[4]), P = f(V, _, F[1], F[2], F[3], F[4]), O.iterator = k, O.angleFinder = P, O.length = m(k, V, _), V = F[3], _ = F[4];
            break;
          case "Z":
          case "z":
            O.destX = T, O.destY = M, O.length = n(V, _, T, M), V = T, _ = M;
        }
        R += O.length, N.push(O);
      }
      return N.push({ length: R, x: V, y: _ }), N;
    }
    B.util.joinPath = function(U) {
      return U.map(function(F) {
        return F.join(" ");
      }).join(" ");
    }, B.util.parsePath = function(U) {
      var F, k, O, P, R, Y = [], V = [], _ = B.rePathCommand, T = "[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?\\s*", M = "(" + T + ")" + B.commaWsp, N = "([01])" + B.commaWsp + "?", X = new RegExp(M + "?" + M + "?" + M + N + N + M + "?(" + T + ")", "g");
      if (!U || !U.match)
        return Y;
      for (var D, I = 0, K = (R = U.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi)).length; I < K; I++) {
        P = (F = R[I]).slice(1).trim(), V.length = 0;
        var W = F.charAt(0);
        if (D = [W], W.toLowerCase() === "a")
          for (var G; G = X.exec(P); )
            for (var z = 1; z < G.length; z++)
              V.push(G[z]);
        else
          for (; O = _.exec(P); )
            V.push(O[0]);
        z = 0;
        for (var $ = V.length; z < $; z++)
          k = parseFloat(V[z]), isNaN(k) || D.push(k);
        var eA = s[W.toLowerCase()], rA = o[W] || W;
        if (D.length - 1 > eA)
          for (var Z = 1, nA = D.length; Z < nA; Z += eA)
            Y.push([W].concat(D.slice(Z, Z + eA))), W = rA;
        else
          Y.push(D);
      }
      return Y;
    }, B.util.makePathSimpler = function(U) {
      var F, k, O, P, R, Y, V = 0, _ = 0, T = U.length, M = 0, N = 0, X = [];
      for (k = 0; k < T; ++k) {
        switch (O = !1, (F = U[k].slice(0))[0]) {
          case "l":
            F[0] = "L", F[1] += V, F[2] += _;
          case "L":
            V = F[1], _ = F[2];
            break;
          case "h":
            F[1] += V;
          case "H":
            F[0] = "L", F[2] = _, V = F[1];
            break;
          case "v":
            F[1] += _;
          case "V":
            F[0] = "L", _ = F[1], F[1] = V, F[2] = _;
            break;
          case "m":
            F[0] = "M", F[1] += V, F[2] += _;
          case "M":
            V = F[1], _ = F[2], M = F[1], N = F[2];
            break;
          case "c":
            F[0] = "C", F[1] += V, F[2] += _, F[3] += V, F[4] += _, F[5] += V, F[6] += _;
          case "C":
            R = F[3], Y = F[4], V = F[5], _ = F[6];
            break;
          case "s":
            F[0] = "S", F[1] += V, F[2] += _, F[3] += V, F[4] += _;
          case "S":
            P === "C" ? (R = 2 * V - R, Y = 2 * _ - Y) : (R = V, Y = _), V = F[3], _ = F[4], F[0] = "C", F[5] = F[3], F[6] = F[4], F[3] = F[1], F[4] = F[2], F[1] = R, F[2] = Y, R = F[3], Y = F[4];
            break;
          case "q":
            F[0] = "Q", F[1] += V, F[2] += _, F[3] += V, F[4] += _;
          case "Q":
            R = F[1], Y = F[2], V = F[3], _ = F[4];
            break;
          case "t":
            F[0] = "T", F[1] += V, F[2] += _;
          case "T":
            P === "Q" ? (R = 2 * V - R, Y = 2 * _ - Y) : (R = V, Y = _), F[0] = "Q", V = F[1], _ = F[2], F[1] = R, F[2] = Y, F[3] = V, F[4] = _;
            break;
          case "a":
            F[0] = "A", F[6] += V, F[7] += _;
          case "A":
            O = !0, X = X.concat(i(V, _, F)), V = F[6], _ = F[7];
            break;
          case "z":
          case "Z":
            V = M, _ = N;
        }
        O || X.push(F), P = F[0];
      }
      return X;
    }, B.util.getSmoothPathFromPoints = function(U, F) {
      var k, O = [], P = new B.Point(U[0].x, U[0].y), R = new B.Point(U[1].x, U[1].y), Y = U.length, V = 1, _ = 0, T = Y > 2;
      for (F = F || 0, T && (V = U[2].x < R.x ? -1 : U[2].x === R.x ? 0 : 1, _ = U[2].y < R.y ? -1 : U[2].y === R.y ? 0 : 1), O.push(["M", P.x - V * F, P.y - _ * F]), k = 1; k < Y; k++) {
        if (!P.eq(R)) {
          var M = P.midPointFrom(R);
          O.push(["Q", P.x, P.y, M.x, M.y]);
        }
        P = U[k], k + 1 < U.length && (R = U[k + 1]);
      }
      return T && (V = P.x > U[k - 2].x ? 1 : P.x === U[k - 2].x ? 0 : -1, _ = P.y > U[k - 2].y ? 1 : P.y === U[k - 2].y ? 0 : -1), O.push(["L", P.x + V * F, P.y + _ * F]), O;
    }, B.util.getPathSegmentsInfo = x, B.util.getBoundsOfCurve = function(U, F, k, O, P, R, Y, V) {
      var _;
      if (B.cachesBoundsOfCurve && (_ = u.call(arguments), B.boundsOfCurveCache[_]))
        return B.boundsOfCurveCache[_];
      var T, M, N, X, D, I, K, W, G = Math.sqrt, z = Math.min, $ = Math.max, eA = Math.abs, rA = [], Z = [[], []];
      M = 6 * U - 12 * k + 6 * P, T = -3 * U + 9 * k - 9 * P + 3 * Y, N = 3 * k - 3 * U;
      for (var nA = 0; nA < 2; ++nA)
        if (nA > 0 && (M = 6 * F - 12 * O + 6 * R, T = -3 * F + 9 * O - 9 * R + 3 * V, N = 3 * O - 3 * F), eA(T) < 1e-12) {
          if (eA(M) < 1e-12)
            continue;
          0 < (X = -N / M) && X < 1 && rA.push(X);
        } else
          (K = M * M - 4 * N * T) < 0 || (0 < (D = (-M + (W = G(K))) / (2 * T)) && D < 1 && rA.push(D), 0 < (I = (-M - W) / (2 * T)) && I < 1 && rA.push(I));
      for (var q, lA, sA, hA = rA.length, BA = hA; hA--; )
        q = (sA = 1 - (X = rA[hA])) * sA * sA * U + 3 * sA * sA * X * k + 3 * sA * X * X * P + X * X * X * Y, Z[0][hA] = q, lA = sA * sA * sA * F + 3 * sA * sA * X * O + 3 * sA * X * X * R + X * X * X * V, Z[1][hA] = lA;
      Z[0][BA] = U, Z[1][BA] = F, Z[0][BA + 1] = Y, Z[1][BA + 1] = V;
      var GA = [{ x: z.apply(null, Z[0]), y: z.apply(null, Z[1]) }, { x: $.apply(null, Z[0]), y: $.apply(null, Z[1]) }];
      return B.cachesBoundsOfCurve && (B.boundsOfCurveCache[_] = GA), GA;
    }, B.util.getPointOnPath = function(U, F, k) {
      k || (k = x(U));
      for (var O = 0; F - k[O].length > 0 && O < k.length - 2; )
        F -= k[O].length, O++;
      var P, R = k[O], Y = F / R.length, V = R.command, _ = U[O];
      switch (V) {
        case "M":
          return { x: R.x, y: R.y, angle: 0 };
        case "Z":
        case "z":
          return (P = new B.Point(R.x, R.y).lerp(new B.Point(R.destX, R.destY), Y)).angle = Math.atan2(R.destY - R.y, R.destX - R.x), P;
        case "L":
          return (P = new B.Point(R.x, R.y).lerp(new B.Point(_[1], _[2]), Y)).angle = Math.atan2(_[2] - R.y, _[1] - R.x), P;
        case "C":
        case "Q":
          return v(R, F);
      }
    }, B.util.transformPath = function(U, F, k) {
      return k && (F = B.util.multiplyTransformMatrices(F, [1, 0, 0, 1, -k.x, -k.y])), U.map(function(O) {
        for (var P = O.slice(0), R = {}, Y = 1; Y < O.length - 1; Y += 2)
          R.x = O[Y], R.y = O[Y + 1], R = B.util.transformPoint(R, F), P[Y] = R.x, P[Y + 1] = R.y;
        return P;
      });
    };
  }(), function() {
    var u = Array.prototype.slice;
    function s(o, d, A) {
      if (o && o.length !== 0) {
        var i = o.length - 1, n = d ? o[i][d] : o[i];
        if (d)
          for (; i--; )
            A(o[i][d], n) && (n = o[i][d]);
        else
          for (; i--; )
            A(o[i], n) && (n = o[i]);
        return n;
      }
    }
    B.util.array = { fill: function(o, d) {
      for (var A = o.length; A--; )
        o[A] = d;
      return o;
    }, invoke: function(o, d) {
      for (var A = u.call(arguments, 2), i = [], n = 0, h = o.length; n < h; n++)
        i[n] = A.length ? o[n][d].apply(o[n], A) : o[n][d].call(o[n]);
      return i;
    }, min: function(o, d) {
      return s(o, d, function(A, i) {
        return A < i;
      });
    }, max: function(o, d) {
      return s(o, d, function(A, i) {
        return A >= i;
      });
    } };
  }(), function() {
    function u(s, o, d) {
      if (d)
        if (!B.isLikelyNode && o instanceof Element)
          s = o;
        else if (o instanceof Array) {
          s = [];
          for (var A = 0, i = o.length; A < i; A++)
            s[A] = u({}, o[A], d);
        } else if (o && typeof o == "object")
          for (var n in o)
            n === "canvas" || n === "group" ? s[n] = null : o.hasOwnProperty(n) && (s[n] = u({}, o[n], d));
        else
          s = o;
      else
        for (var n in o)
          s[n] = o[n];
      return s;
    }
    B.util.object = { extend: u, clone: function(s, o) {
      return u({}, s, o);
    } }, B.util.object.extend(B.util, B.Observable);
  }(), function() {
    function u(s, o) {
      var d = s.charCodeAt(o);
      if (isNaN(d))
        return "";
      if (d < 55296 || d > 57343)
        return s.charAt(o);
      if (55296 <= d && d <= 56319) {
        if (s.length <= o + 1)
          throw "High surrogate without following low surrogate";
        var A = s.charCodeAt(o + 1);
        if (56320 > A || A > 57343)
          throw "High surrogate without following low surrogate";
        return s.charAt(o) + s.charAt(o + 1);
      }
      if (o === 0)
        throw "Low surrogate without preceding high surrogate";
      var i = s.charCodeAt(o - 1);
      if (55296 > i || i > 56319)
        throw "Low surrogate without preceding high surrogate";
      return !1;
    }
    B.util.string = { camelize: function(s) {
      return s.replace(/-+(.)?/g, function(o, d) {
        return d ? d.toUpperCase() : "";
      });
    }, capitalize: function(s, o) {
      return s.charAt(0).toUpperCase() + (o ? s.slice(1) : s.slice(1).toLowerCase());
    }, escapeXml: function(s) {
      return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }, graphemeSplit: function(s) {
      var o, d = 0, A = [];
      for (d = 0; d < s.length; d++)
        (o = u(s, d)) !== !1 && A.push(o);
      return A;
    } };
  }(), function() {
    var u = Array.prototype.slice, s = function() {
    }, o = function() {
      for (var n in { toString: 1 })
        if (n === "toString")
          return !1;
      return !0;
    }(), d = function(n, h, c) {
      for (var l in h)
        l in n.prototype && typeof n.prototype[l] == "function" && (h[l] + "").indexOf("callSuper") > -1 ? n.prototype[l] = /* @__PURE__ */ function(f) {
          return function() {
            var m = this.constructor.superclass;
            this.constructor.superclass = c;
            var v = h[f].apply(this, arguments);
            if (this.constructor.superclass = m, f !== "initialize")
              return v;
          };
        }(l) : n.prototype[l] = h[l], o && (h.toString !== Object.prototype.toString && (n.prototype.toString = h.toString), h.valueOf !== Object.prototype.valueOf && (n.prototype.valueOf = h.valueOf));
    };
    function A() {
    }
    function i(n) {
      for (var h = null, c = this; c.constructor.superclass; ) {
        var l = c.constructor.superclass.prototype[n];
        if (c[n] !== l) {
          h = l;
          break;
        }
        c = c.constructor.superclass.prototype;
      }
      return h ? arguments.length > 1 ? h.apply(this, u.call(arguments, 1)) : h.call(this) : console.log("tried to callSuper " + n + ", method not found in prototype chain", this);
    }
    B.util.createClass = function() {
      var n = null, h = u.call(arguments, 0);
      function c() {
        this.initialize.apply(this, arguments);
      }
      typeof h[0] == "function" && (n = h.shift()), c.superclass = n, c.subclasses = [], n && (A.prototype = n.prototype, c.prototype = new A(), n.subclasses.push(c));
      for (var l = 0, f = h.length; l < f; l++)
        d(c, h[l], n);
      return c.prototype.initialize || (c.prototype.initialize = s), c.prototype.constructor = c, c.prototype.callSuper = i, c;
    };
  }(), t = !!B.document.createElement("div").attachEvent, r = ["touchstart", "touchmove", "touchend"], B.util.addListener = function(u, s, o, d) {
    u && u.addEventListener(s, o, !t && d);
  }, B.util.removeListener = function(u, s, o, d) {
    u && u.removeEventListener(s, o, !t && d);
  }, B.util.getPointer = function(u) {
    var s = u.target, o = B.util.getScrollLeftTop(s), d = function(A) {
      var i = A.changedTouches;
      return i && i[0] ? i[0] : A;
    }(u);
    return { x: d.clientX + o.left, y: d.clientY + o.top };
  }, B.util.isTouchEvent = function(u) {
    return r.indexOf(u.type) > -1 || u.pointerType === "touch";
  }, a = B.document.createElement("div"), g = typeof a.style.opacity == "string", p = typeof a.style.filter == "string", w = /alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/, C = function(u) {
    return u;
  }, g ? C = function(u, s) {
    return u.style.opacity = s, u;
  } : p && (C = function(u, s) {
    var o = u.style;
    return u.currentStyle && !u.currentStyle.hasLayout && (o.zoom = 1), w.test(o.filter) ? (s = s >= 0.9999 ? "" : "alpha(opacity=" + 100 * s + ")", o.filter = o.filter.replace(w, s)) : o.filter += " alpha(opacity=" + 100 * s + ")", u;
  }), B.util.setStyle = function(u, s) {
    var o = u.style;
    if (!o)
      return u;
    if (typeof s == "string")
      return u.style.cssText += ";" + s, s.indexOf("opacity") > -1 ? C(u, s.match(/opacity:\s*(\d?\.?\d*)/)[1]) : u;
    for (var d in s)
      if (d === "opacity")
        C(u, s[d]);
      else {
        var A = d === "float" || d === "cssFloat" ? o.styleFloat === void 0 ? "cssFloat" : "styleFloat" : d;
        o.setProperty(A, s[d]);
      }
    return u;
  }, function() {
    var u = Array.prototype.slice, s, o, d, A, i = function(c) {
      return u.call(c, 0);
    };
    try {
      s = i(B.document.childNodes) instanceof Array;
    } catch {
    }
    function n(c, l) {
      var f = B.document.createElement(c);
      for (var m in l)
        m === "class" ? f.className = l[m] : m === "for" ? f.htmlFor = l[m] : f.setAttribute(m, l[m]);
      return f;
    }
    function h(c) {
      for (var l = 0, f = 0, m = B.document.documentElement, v = B.document.body || { scrollLeft: 0, scrollTop: 0 }; c && (c.parentNode || c.host) && ((c = c.parentNode || c.host) === B.document ? (l = v.scrollLeft || m.scrollLeft || 0, f = v.scrollTop || m.scrollTop || 0) : (l += c.scrollLeft || 0, f += c.scrollTop || 0), c.nodeType !== 1 || c.style.position !== "fixed"); )
        ;
      return { left: l, top: f };
    }
    s || (i = function(c) {
      for (var l = new Array(c.length), f = c.length; f--; )
        l[f] = c[f];
      return l;
    }), o = B.document.defaultView && B.document.defaultView.getComputedStyle ? function(c, l) {
      var f = B.document.defaultView.getComputedStyle(c, null);
      return f ? f[l] : void 0;
    } : function(c, l) {
      var f = c.style[l];
      return !f && c.currentStyle && (f = c.currentStyle[l]), f;
    }, d = B.document.documentElement.style, A = "userSelect" in d ? "userSelect" : "MozUserSelect" in d ? "MozUserSelect" : "WebkitUserSelect" in d ? "WebkitUserSelect" : "KhtmlUserSelect" in d ? "KhtmlUserSelect" : "", B.util.makeElementUnselectable = function(c) {
      return c.onselectstart !== void 0 && (c.onselectstart = B.util.falseFunction), A ? c.style[A] = "none" : typeof c.unselectable == "string" && (c.unselectable = "on"), c;
    }, B.util.makeElementSelectable = function(c) {
      return c.onselectstart !== void 0 && (c.onselectstart = null), A ? c.style[A] = "" : typeof c.unselectable == "string" && (c.unselectable = ""), c;
    }, B.util.setImageSmoothing = function(c, l) {
      c.imageSmoothingEnabled = c.imageSmoothingEnabled || c.webkitImageSmoothingEnabled || c.mozImageSmoothingEnabled || c.msImageSmoothingEnabled || c.oImageSmoothingEnabled, c.imageSmoothingEnabled = l;
    }, B.util.getById = function(c) {
      return typeof c == "string" ? B.document.getElementById(c) : c;
    }, B.util.toArray = i, B.util.addClass = function(c, l) {
      c && (" " + c.className + " ").indexOf(" " + l + " ") === -1 && (c.className += (c.className ? " " : "") + l);
    }, B.util.makeElement = n, B.util.wrapElement = function(c, l, f) {
      return typeof l == "string" && (l = n(l, f)), c.parentNode && c.parentNode.replaceChild(l, c), l.appendChild(c), l;
    }, B.util.getScrollLeftTop = h, B.util.getElementOffset = function(c) {
      var l, f, m = c && c.ownerDocument, v = { left: 0, top: 0 }, x = { left: 0, top: 0 }, U = { borderLeftWidth: "left", borderTopWidth: "top", paddingLeft: "left", paddingTop: "top" };
      if (!m)
        return x;
      for (var F in U)
        x[U[F]] += parseInt(o(c, F), 10) || 0;
      return l = m.documentElement, c.getBoundingClientRect !== void 0 && (v = c.getBoundingClientRect()), f = h(c), { left: v.left + f.left - (l.clientLeft || 0) + x.left, top: v.top + f.top - (l.clientTop || 0) + x.top };
    }, B.util.getNodeCanvas = function(c) {
      var l = B.jsdomImplForWrapper(c);
      return l._canvas || l._image;
    }, B.util.cleanUpJsdomNode = function(c) {
      if (B.isLikelyNode) {
        var l = B.jsdomImplForWrapper(c);
        l && (l._image = null, l._canvas = null, l._currentSrc = null, l._attributes = null, l._classList = null);
      }
    };
  }(), function() {
    function u() {
    }
    B.util.request = function(s, o) {
      o || (o = {});
      var d = o.method ? o.method.toUpperCase() : "GET", A = o.onComplete || function() {
      }, i = new B.window.XMLHttpRequest(), n = o.body || o.parameters;
      return i.onreadystatechange = function() {
        i.readyState === 4 && (A(i), i.onreadystatechange = u);
      }, d === "GET" && (n = null, typeof o.parameters == "string" && (s = function(h, c) {
        return h + (/\?/.test(h) ? "&" : "?") + c;
      }(s, o.parameters))), i.open(d, s, !0), d !== "POST" && d !== "PUT" || i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.send(n), i;
    };
  }(), B.log = console.log, B.warn = console.warn, function() {
    var u = B.util.object.extend, s = B.util.object.clone, o = [];
    function d() {
      return !1;
    }
    function A(c, l, f, m) {
      return -f * Math.cos(c / m * (Math.PI / 2)) + f + l;
    }
    B.util.object.extend(o, { cancelAll: function() {
      var c = this.splice(0);
      return c.forEach(function(l) {
        l.cancel();
      }), c;
    }, cancelByCanvas: function(c) {
      if (!c)
        return [];
      var l = this.filter(function(f) {
        return typeof f.target == "object" && f.target.canvas === c;
      });
      return l.forEach(function(f) {
        f.cancel();
      }), l;
    }, cancelByTarget: function(c) {
      var l = this.findAnimationsByTarget(c);
      return l.forEach(function(f) {
        f.cancel();
      }), l;
    }, findAnimationIndex: function(c) {
      return this.indexOf(this.findAnimation(c));
    }, findAnimation: function(c) {
      return this.find(function(l) {
        return l.cancel === c;
      });
    }, findAnimationsByTarget: function(c) {
      return c ? this.filter(function(l) {
        return l.target === c;
      }) : [];
    } });
    var i = B.window.requestAnimationFrame || B.window.webkitRequestAnimationFrame || B.window.mozRequestAnimationFrame || B.window.oRequestAnimationFrame || B.window.msRequestAnimationFrame || function(c) {
      return B.window.setTimeout(c, 1e3 / 60);
    }, n = B.window.cancelAnimationFrame || B.window.clearTimeout;
    function h() {
      return i.apply(B.window, arguments);
    }
    B.util.animate = function(c) {
      c || (c = {});
      var l, f = !1, m = function() {
        var v = B.runningAnimations.indexOf(l);
        return v > -1 && B.runningAnimations.splice(v, 1)[0];
      };
      return l = u(s(c), { cancel: function() {
        return f = !0, m();
      }, currentValue: "startValue" in c ? c.startValue : 0, completionRate: 0, durationRate: 0 }), B.runningAnimations.push(l), h(function(v) {
        var x, U = v || +/* @__PURE__ */ new Date(), F = c.duration || 500, k = U + F, O = c.onChange || d, P = c.abort || d, R = c.onComplete || d, Y = c.easing || A, V = "startValue" in c && c.startValue.length > 0, _ = "startValue" in c ? c.startValue : 0, T = "endValue" in c ? c.endValue : 100, M = c.byValue || (V ? _.map(function(N, X) {
          return T[X] - _[X];
        }) : T - _);
        c.onStart && c.onStart(), function N(X) {
          var D = (x = X || +/* @__PURE__ */ new Date()) > k ? F : x - U, I = D / F, K = V ? _.map(function(G, z) {
            return Y(D, _[z], M[z], F);
          }) : Y(D, _, M, F), W = Math.abs(V ? (K[0] - _[0]) / M[0] : (K - _) / M);
          if (l.currentValue = V ? K.slice() : K, l.completionRate = W, l.durationRate = I, !f) {
            if (!P(K, W, I))
              return x > k ? (l.currentValue = V ? T.slice() : T, l.completionRate = 1, l.durationRate = 1, O(V ? T.slice() : T, 1, 1), R(T, 1, 1), void m()) : (O(K, W, I), void h(N));
            m();
          }
        }(U);
      }), l.cancel;
    }, B.util.requestAnimFrame = h, B.util.cancelAnimFrame = function() {
      return n.apply(B.window, arguments);
    }, B.runningAnimations = o;
  }(), function() {
    function u(s, o, d) {
      var A = "rgba(" + parseInt(s[0] + d * (o[0] - s[0]), 10) + "," + parseInt(s[1] + d * (o[1] - s[1]), 10) + "," + parseInt(s[2] + d * (o[2] - s[2]), 10);
      return A += "," + (s && o ? parseFloat(s[3] + d * (o[3] - s[3])) : 1), A += ")";
    }
    B.util.animateColor = function(s, o, d, A) {
      var i = new B.Color(s).getSource(), n = new B.Color(o).getSource(), h = A.onComplete, c = A.onChange;
      return A = A || {}, B.util.animate(B.util.object.extend(A, { duration: d || 500, startValue: i, endValue: n, byValue: n, easing: function(l, f, m, v) {
        return u(f, m, A.colorEasing ? A.colorEasing(l, v) : 1 - Math.cos(l / v * (Math.PI / 2)));
      }, onComplete: function(l, f, m) {
        if (h)
          return h(u(n, n, 0), f, m);
      }, onChange: function(l, f, m) {
        if (c) {
          if (Array.isArray(l))
            return c(u(l, l, 0), f, m);
          c(l, f, m);
        }
      } }));
    };
  }(), function() {
    function u(A, i, n, h) {
      return A < Math.abs(i) ? (A = i, h = n / 4) : h = i === 0 && A === 0 ? n / (2 * Math.PI) * Math.asin(1) : n / (2 * Math.PI) * Math.asin(i / A), { a: A, c: i, p: n, s: h };
    }
    function s(A, i, n) {
      return A.a * Math.pow(2, 10 * (i -= 1)) * Math.sin((i * n - A.s) * (2 * Math.PI) / A.p);
    }
    function o(A, i, n, h) {
      return n - d(h - A, 0, n, h) + i;
    }
    function d(A, i, n, h) {
      return (A /= h) < 1 / 2.75 ? n * (7.5625 * A * A) + i : A < 2 / 2.75 ? n * (7.5625 * (A -= 1.5 / 2.75) * A + 0.75) + i : A < 2.5 / 2.75 ? n * (7.5625 * (A -= 2.25 / 2.75) * A + 0.9375) + i : n * (7.5625 * (A -= 2.625 / 2.75) * A + 0.984375) + i;
    }
    B.util.ease = { easeInQuad: function(A, i, n, h) {
      return n * (A /= h) * A + i;
    }, easeOutQuad: function(A, i, n, h) {
      return -n * (A /= h) * (A - 2) + i;
    }, easeInOutQuad: function(A, i, n, h) {
      return (A /= h / 2) < 1 ? n / 2 * A * A + i : -n / 2 * (--A * (A - 2) - 1) + i;
    }, easeInCubic: function(A, i, n, h) {
      return n * (A /= h) * A * A + i;
    }, easeOutCubic: function(A, i, n, h) {
      return n * ((A = A / h - 1) * A * A + 1) + i;
    }, easeInOutCubic: function(A, i, n, h) {
      return (A /= h / 2) < 1 ? n / 2 * A * A * A + i : n / 2 * ((A -= 2) * A * A + 2) + i;
    }, easeInQuart: function(A, i, n, h) {
      return n * (A /= h) * A * A * A + i;
    }, easeOutQuart: function(A, i, n, h) {
      return -n * ((A = A / h - 1) * A * A * A - 1) + i;
    }, easeInOutQuart: function(A, i, n, h) {
      return (A /= h / 2) < 1 ? n / 2 * A * A * A * A + i : -n / 2 * ((A -= 2) * A * A * A - 2) + i;
    }, easeInQuint: function(A, i, n, h) {
      return n * (A /= h) * A * A * A * A + i;
    }, easeOutQuint: function(A, i, n, h) {
      return n * ((A = A / h - 1) * A * A * A * A + 1) + i;
    }, easeInOutQuint: function(A, i, n, h) {
      return (A /= h / 2) < 1 ? n / 2 * A * A * A * A * A + i : n / 2 * ((A -= 2) * A * A * A * A + 2) + i;
    }, easeInSine: function(A, i, n, h) {
      return -n * Math.cos(A / h * (Math.PI / 2)) + n + i;
    }, easeOutSine: function(A, i, n, h) {
      return n * Math.sin(A / h * (Math.PI / 2)) + i;
    }, easeInOutSine: function(A, i, n, h) {
      return -n / 2 * (Math.cos(Math.PI * A / h) - 1) + i;
    }, easeInExpo: function(A, i, n, h) {
      return A === 0 ? i : n * Math.pow(2, 10 * (A / h - 1)) + i;
    }, easeOutExpo: function(A, i, n, h) {
      return A === h ? i + n : n * (1 - Math.pow(2, -10 * A / h)) + i;
    }, easeInOutExpo: function(A, i, n, h) {
      return A === 0 ? i : A === h ? i + n : (A /= h / 2) < 1 ? n / 2 * Math.pow(2, 10 * (A - 1)) + i : n / 2 * (2 - Math.pow(2, -10 * --A)) + i;
    }, easeInCirc: function(A, i, n, h) {
      return -n * (Math.sqrt(1 - (A /= h) * A) - 1) + i;
    }, easeOutCirc: function(A, i, n, h) {
      return n * Math.sqrt(1 - (A = A / h - 1) * A) + i;
    }, easeInOutCirc: function(A, i, n, h) {
      return (A /= h / 2) < 1 ? -n / 2 * (Math.sqrt(1 - A * A) - 1) + i : n / 2 * (Math.sqrt(1 - (A -= 2) * A) + 1) + i;
    }, easeInElastic: function(A, i, n, h) {
      var c = 0;
      return A === 0 ? i : (A /= h) === 1 ? i + n : (c || (c = 0.3 * h), -s(u(n, n, c, 1.70158), A, h) + i);
    }, easeOutElastic: function(A, i, n, h) {
      var c = 0;
      if (A === 0)
        return i;
      if ((A /= h) === 1)
        return i + n;
      c || (c = 0.3 * h);
      var l = u(n, n, c, 1.70158);
      return l.a * Math.pow(2, -10 * A) * Math.sin((A * h - l.s) * (2 * Math.PI) / l.p) + l.c + i;
    }, easeInOutElastic: function(A, i, n, h) {
      var c = 0;
      if (A === 0)
        return i;
      if ((A /= h / 2) === 2)
        return i + n;
      c || (c = h * (0.3 * 1.5));
      var l = u(n, n, c, 1.70158);
      return A < 1 ? -0.5 * s(l, A, h) + i : l.a * Math.pow(2, -10 * (A -= 1)) * Math.sin((A * h - l.s) * (2 * Math.PI) / l.p) * 0.5 + l.c + i;
    }, easeInBack: function(A, i, n, h, c) {
      return c === void 0 && (c = 1.70158), n * (A /= h) * A * ((c + 1) * A - c) + i;
    }, easeOutBack: function(A, i, n, h, c) {
      return c === void 0 && (c = 1.70158), n * ((A = A / h - 1) * A * ((c + 1) * A + c) + 1) + i;
    }, easeInOutBack: function(A, i, n, h, c) {
      return c === void 0 && (c = 1.70158), (A /= h / 2) < 1 ? n / 2 * (A * A * ((1 + (c *= 1.525)) * A - c)) + i : n / 2 * ((A -= 2) * A * ((1 + (c *= 1.525)) * A + c) + 2) + i;
    }, easeInBounce: o, easeOutBounce: d, easeInOutBounce: function(A, i, n, h) {
      return A < h / 2 ? 0.5 * o(2 * A, 0, n, h) + i : 0.5 * d(2 * A - h, 0, n, h) + 0.5 * n + i;
    } };
  }(), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.util.object.extend, d = s.util.object.clone, A = s.util.toFixed, i = s.util.parseUnit, n = s.util.multiplyTransformMatrices, h = { cx: "left", x: "left", r: "radius", cy: "top", y: "top", display: "visible", visibility: "visible", transform: "transformMatrix", "fill-opacity": "fillOpacity", "fill-rule": "fillRule", "font-family": "fontFamily", "font-size": "fontSize", "font-style": "fontStyle", "font-weight": "fontWeight", "letter-spacing": "charSpacing", "paint-order": "paintFirst", "stroke-dasharray": "strokeDashArray", "stroke-dashoffset": "strokeDashOffset", "stroke-linecap": "strokeLineCap", "stroke-linejoin": "strokeLineJoin", "stroke-miterlimit": "strokeMiterLimit", "stroke-opacity": "strokeOpacity", "stroke-width": "strokeWidth", "text-decoration": "textDecoration", "text-anchor": "textAnchor", opacity: "opacity", "clip-path": "clipPath", "clip-rule": "clipRule", "vector-effect": "strokeUniform", "image-rendering": "imageSmoothing" }, c = { stroke: "strokeOpacity", fill: "fillOpacity" }, l = "font-size", f = "clip-path";
    function m(_) {
      return _ in h ? h[_] : _;
    }
    function v(_, T, M, N) {
      var X, D = Array.isArray(T);
      if (_ !== "fill" && _ !== "stroke" || T !== "none") {
        if (_ === "strokeUniform")
          return T === "non-scaling-stroke";
        if (_ === "strokeDashArray")
          T = T === "none" ? null : T.replace(/,/g, " ").split(/\s+/).map(parseFloat);
        else if (_ === "transformMatrix")
          T = M && M.transformMatrix ? n(M.transformMatrix, s.parseTransformAttribute(T)) : s.parseTransformAttribute(T);
        else if (_ === "visible")
          T = T !== "none" && T !== "hidden", M && M.visible === !1 && (T = !1);
        else if (_ === "opacity")
          T = parseFloat(T), M && M.opacity !== void 0 && (T *= M.opacity);
        else if (_ === "textAnchor")
          T = T === "start" ? "left" : T === "end" ? "right" : "center";
        else if (_ === "charSpacing")
          X = i(T, N) / N * 1e3;
        else if (_ === "paintFirst") {
          var I = T.indexOf("fill"), K = T.indexOf("stroke");
          T = "fill", (I > -1 && K > -1 && K < I || I === -1 && K > -1) && (T = "stroke");
        } else {
          if (_ === "href" || _ === "xlink:href" || _ === "font")
            return T;
          if (_ === "imageSmoothing")
            return T === "optimizeQuality";
          X = D ? T.map(i) : i(T, N);
        }
      } else
        T = "";
      return !D && isNaN(X) ? T : X;
    }
    function x(_) {
      return new RegExp("^(" + _.join("|") + ")\\b", "i");
    }
    function U(_, T) {
      var M, N, X, D, I = [];
      for (X = 0, D = T.length; X < D; X++)
        M = T[X], N = _.getElementsByTagName(M), I = I.concat(Array.prototype.slice.call(N));
      return I;
    }
    function F(_, T) {
      var M, N = !0;
      return (M = k(_, T.pop())) && T.length && (N = function(X, D) {
        for (var I, K = !0; X.parentNode && X.parentNode.nodeType === 1 && D.length; )
          K && (I = D.pop()), K = k(X = X.parentNode, I);
        return D.length === 0;
      }(_, T)), M && N && T.length === 0;
    }
    function k(_, T) {
      var M, N, X = _.nodeName, D = _.getAttribute("class"), I = _.getAttribute("id");
      if (M = new RegExp("^" + X, "i"), T = T.replace(M, ""), I && T.length && (M = new RegExp("#" + I + "(?![a-zA-Z\\-]+)", "i"), T = T.replace(M, "")), D && T.length)
        for (N = (D = D.split(" ")).length; N--; )
          M = new RegExp("\\." + D[N] + "(?![a-zA-Z\\-]+)", "i"), T = T.replace(M, "");
      return T.length === 0;
    }
    function O(_, T) {
      var M;
      if (_.getElementById && (M = _.getElementById(T)), M)
        return M;
      var N, X, D, I = _.getElementsByTagName("*");
      for (X = 0, D = I.length; X < D; X++)
        if (T === (N = I[X]).getAttribute("id"))
          return N;
    }
    s.svgValidTagNamesRegEx = x(["path", "circle", "polygon", "polyline", "ellipse", "rect", "line", "image", "text"]), s.svgViewBoxElementsRegEx = x(["symbol", "image", "marker", "pattern", "view", "svg"]), s.svgInvalidAncestorsRegEx = x(["pattern", "defs", "symbol", "metadata", "clipPath", "mask", "desc"]), s.svgValidParentsRegEx = x(["symbol", "g", "a", "svg", "clipPath", "defs"]), s.cssRules = {}, s.gradientDefs = {}, s.clipPaths = {}, s.parseTransformAttribute = function() {
      function _(K, W, G) {
        K[G] = Math.tan(s.util.degreesToRadians(W[0]));
      }
      var T = s.iMatrix, M = s.reNum, N = s.commaWsp, X = "(?:" + ("(?:(matrix)\\s*\\(\\s*(" + M + ")" + N + "(" + M + ")" + N + "(" + M + ")" + N + "(" + M + ")" + N + "(" + M + ")" + N + "(" + M + ")\\s*\\))") + "|" + ("(?:(translate)\\s*\\(\\s*(" + M + ")(?:" + N + "(" + M + "))?\\s*\\))") + "|" + ("(?:(scale)\\s*\\(\\s*(" + M + ")(?:" + N + "(" + M + "))?\\s*\\))") + "|" + ("(?:(rotate)\\s*\\(\\s*(" + M + ")(?:" + N + "(" + M + ")" + N + "(" + M + "))?\\s*\\))") + "|" + ("(?:(skewX)\\s*\\(\\s*(" + M + ")\\s*\\))") + "|" + ("(?:(skewY)\\s*\\(\\s*(" + M + ")\\s*\\))") + ")", D = new RegExp("^\\s*(?:" + ("(?:" + X + "(?:" + N + "*" + X + ")*)") + "?)\\s*$"), I = new RegExp(X, "g");
      return function(K) {
        var W = T.concat(), G = [];
        if (!K || K && !D.test(K))
          return W;
        K.replace(I, function($) {
          var eA = new RegExp(X).exec($).filter(function(nA) {
            return !!nA;
          }), rA = eA[1], Z = eA.slice(2).map(parseFloat);
          switch (rA) {
            case "translate":
              (function(nA, q) {
                nA[4] = q[0], q.length === 2 && (nA[5] = q[1]);
              })(W, Z);
              break;
            case "rotate":
              Z[0] = s.util.degreesToRadians(Z[0]), function(nA, q) {
                var lA = s.util.cos(q[0]), sA = s.util.sin(q[0]), hA = 0, BA = 0;
                q.length === 3 && (hA = q[1], BA = q[2]), nA[0] = lA, nA[1] = sA, nA[2] = -sA, nA[3] = lA, nA[4] = hA - (lA * hA - sA * BA), nA[5] = BA - (sA * hA + lA * BA);
              }(W, Z);
              break;
            case "scale":
              (function(nA, q) {
                var lA = q[0], sA = q.length === 2 ? q[1] : q[0];
                nA[0] = lA, nA[3] = sA;
              })(W, Z);
              break;
            case "skewX":
              _(W, Z, 2);
              break;
            case "skewY":
              _(W, Z, 1);
              break;
            case "matrix":
              W = Z;
          }
          G.push(W.concat()), W = T.concat();
        });
        for (var z = G[0]; G.length > 1; )
          G.shift(), z = s.util.multiplyTransformMatrices(z, G[0]);
        return z;
      };
    }();
    var P = new RegExp("^\\s*(" + s.reNum + "+)\\s*,?\\s*(" + s.reNum + "+)\\s*,?\\s*(" + s.reNum + "+)\\s*,?\\s*(" + s.reNum + "+)\\s*$");
    function R(_) {
      if (!s.svgViewBoxElementsRegEx.test(_.nodeName))
        return {};
      var T, M, N, X, D, I, K = _.getAttribute("viewBox"), W = 1, G = 1, z = _.getAttribute("width"), $ = _.getAttribute("height"), eA = _.getAttribute("x") || 0, rA = _.getAttribute("y") || 0, Z = _.getAttribute("preserveAspectRatio") || "", nA = !K || !(K = K.match(P)), q = !z || !$ || z === "100%" || $ === "100%", lA = nA && q, sA = {}, hA = "", BA = 0, GA = 0;
      if (sA.width = 0, sA.height = 0, sA.toBeParsed = lA, nA && (eA || rA) && _.parentNode && _.parentNode.nodeName !== "#document" && (hA = " translate(" + i(eA) + " " + i(rA) + ") ", D = (_.getAttribute("transform") || "") + hA, _.setAttribute("transform", D), _.removeAttribute("x"), _.removeAttribute("y")), lA)
        return sA;
      if (nA)
        return sA.width = i(z), sA.height = i($), sA;
      if (T = -parseFloat(K[1]), M = -parseFloat(K[2]), N = parseFloat(K[3]), X = parseFloat(K[4]), sA.minX = T, sA.minY = M, sA.viewBoxWidth = N, sA.viewBoxHeight = X, q ? (sA.width = N, sA.height = X) : (sA.width = i(z), sA.height = i($), W = sA.width / N, G = sA.height / X), (Z = s.util.parsePreserveAspectRatioAttribute(Z)).alignX !== "none" && (Z.meetOrSlice === "meet" && (G = W = W > G ? G : W), Z.meetOrSlice === "slice" && (G = W = W > G ? W : G), BA = sA.width - N * W, GA = sA.height - X * W, Z.alignX === "Mid" && (BA /= 2), Z.alignY === "Mid" && (GA /= 2), Z.alignX === "Min" && (BA = 0), Z.alignY === "Min" && (GA = 0)), W === 1 && G === 1 && T === 0 && M === 0 && eA === 0 && rA === 0)
        return sA;
      if ((eA || rA) && _.parentNode.nodeName !== "#document" && (hA = " translate(" + i(eA) + " " + i(rA) + ") "), D = hA + " matrix(" + W + " 0 0 " + G + " " + (T * W + BA) + " " + (M * G + GA) + ") ", _.nodeName === "svg") {
        for (I = _.ownerDocument.createElementNS(s.svgNS, "g"); _.firstChild; )
          I.appendChild(_.firstChild);
        _.appendChild(I);
      } else
        (I = _).removeAttribute("x"), I.removeAttribute("y"), D = I.getAttribute("transform") + D;
      return I.setAttribute("transform", D), sA;
    }
    function Y(_, T) {
      var M = "xlink:href", N = O(_, T.getAttribute(M).slice(1));
      if (N && N.getAttribute(M) && Y(_, N), ["gradientTransform", "x1", "x2", "y1", "y2", "gradientUnits", "cx", "cy", "r", "fx", "fy"].forEach(function(D) {
        N && !T.hasAttribute(D) && N.hasAttribute(D) && T.setAttribute(D, N.getAttribute(D));
      }), !T.children.length)
        for (var X = N.cloneNode(!0); X.firstChild; )
          T.appendChild(X.firstChild);
      T.removeAttribute(M);
    }
    s.parseSVGDocument = function(_, T, M, N) {
      if (_) {
        (function(eA) {
          for (var rA = U(eA, ["use", "svg:use"]), Z = 0; rA.length && Z < rA.length; ) {
            var nA = rA[Z], q = nA.getAttribute("xlink:href") || nA.getAttribute("href");
            if (q === null)
              return;
            var lA, sA, hA, BA, GA = q.slice(1), dt = nA.getAttribute("x") || 0, St = nA.getAttribute("y") || 0, xA = O(eA, GA).cloneNode(!0), WA = (xA.getAttribute("transform") || "") + " translate(" + dt + ", " + St + ")", gt = rA.length, Rt = s.svgNS;
            if (R(xA), /^svg$/i.test(xA.nodeName)) {
              var ae = xA.ownerDocument.createElementNS(Rt, "g");
              for (sA = 0, BA = (hA = xA.attributes).length; sA < BA; sA++)
                lA = hA.item(sA), ae.setAttributeNS(Rt, lA.nodeName, lA.nodeValue);
              for (; xA.firstChild; )
                ae.appendChild(xA.firstChild);
              xA = ae;
            }
            for (sA = 0, BA = (hA = nA.attributes).length; sA < BA; sA++)
              (lA = hA.item(sA)).nodeName !== "x" && lA.nodeName !== "y" && lA.nodeName !== "xlink:href" && lA.nodeName !== "href" && (lA.nodeName === "transform" ? WA = lA.nodeValue + " " + WA : xA.setAttribute(lA.nodeName, lA.nodeValue));
            xA.setAttribute("transform", WA), xA.setAttribute("instantiated_by_use", "1"), xA.removeAttribute("id"), nA.parentNode.replaceChild(xA, nA), rA.length === gt && Z++;
          }
        })(_);
        var X, D, I = s.Object.__uid++, K = R(_), W = s.util.toArray(_.getElementsByTagName("*"));
        if (K.crossOrigin = N && N.crossOrigin, K.svgUid = I, W.length === 0 && s.isLikelyNode) {
          var G = [];
          for (X = 0, D = (W = _.selectNodes('//*[name(.)!="svg"]')).length; X < D; X++)
            G[X] = W[X];
          W = G;
        }
        var z = W.filter(function(eA) {
          return R(eA), s.svgValidTagNamesRegEx.test(eA.nodeName.replace("svg:", "")) && !function(rA, Z) {
            for (; rA && (rA = rA.parentNode); )
              if (rA.nodeName && Z.test(rA.nodeName.replace("svg:", "")) && !rA.getAttribute("instantiated_by_use"))
                return !0;
            return !1;
          }(eA, s.svgInvalidAncestorsRegEx);
        });
        if (!z || z && !z.length)
          T && T([], {});
        else {
          var $ = {};
          W.filter(function(eA) {
            return eA.nodeName.replace("svg:", "") === "clipPath";
          }).forEach(function(eA) {
            var rA = eA.getAttribute("id");
            $[rA] = s.util.toArray(eA.getElementsByTagName("*")).filter(function(Z) {
              return s.svgValidTagNamesRegEx.test(Z.nodeName.replace("svg:", ""));
            });
          }), s.gradientDefs[I] = s.getGradientDefs(_), s.cssRules[I] = s.getCSSRules(_), s.clipPaths[I] = $, s.parseElements(z, function(eA, rA) {
            T && (T(eA, K, rA, W), delete s.gradientDefs[I], delete s.cssRules[I], delete s.clipPaths[I]);
          }, d(K), M, N);
        }
      }
    };
    var V = new RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(" + s.reNum + "(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|" + s.reNum + "))?\\s+(.*)");
    o(s, { parseFontDeclaration: function(_, T) {
      var M = _.match(V);
      if (M) {
        var N = M[1], X = M[3], D = M[4], I = M[5], K = M[6];
        N && (T.fontStyle = N), X && (T.fontWeight = isNaN(parseFloat(X)) ? X : parseFloat(X)), D && (T.fontSize = i(D)), K && (T.fontFamily = K), I && (T.lineHeight = I === "normal" ? 1 : I);
      }
    }, getGradientDefs: function(_) {
      var T, M = U(_, ["linearGradient", "radialGradient", "svg:linearGradient", "svg:radialGradient"]), N = 0, X = {};
      for (N = M.length; N--; )
        (T = M[N]).getAttribute("xlink:href") && Y(_, T), X[T.getAttribute("id")] = T;
      return X;
    }, parseAttributes: function(_, T, M) {
      if (_) {
        var N, X, D, I = {};
        M === void 0 && (M = _.getAttribute("svgUid")), _.parentNode && s.svgValidParentsRegEx.test(_.parentNode.nodeName) && (I = s.parseAttributes(_.parentNode, T, M));
        var K = T.reduce(function(Z, nA) {
          return (N = _.getAttribute(nA)) && (Z[nA] = N), Z;
        }, {}), W = o(function(Z, nA) {
          var q = {};
          for (var lA in s.cssRules[nA])
            if (F(Z, lA.split(" ")))
              for (var sA in s.cssRules[nA][lA])
                q[sA] = s.cssRules[nA][lA][sA];
          return q;
        }(_, M), s.parseStyleAttribute(_));
        K = o(K, W), W[f] && _.setAttribute(f, W[f]), X = D = I.fontSize || s.Text.DEFAULT_SVG_FONT_SIZE, K[l] && (K[l] = X = i(K[l], D));
        var G, z, $ = {};
        for (var eA in K)
          z = v(G = m(eA), K[eA], I, X), $[G] = z;
        $ && $.font && s.parseFontDeclaration($.font, $);
        var rA = o(I, $);
        return s.svgValidParentsRegEx.test(_.nodeName) ? rA : function(Z) {
          for (var nA in c)
            if (Z[c[nA]] !== void 0 && Z[nA] !== "") {
              if (Z[nA] === void 0) {
                if (!s.Object.prototype[nA])
                  continue;
                Z[nA] = s.Object.prototype[nA];
              }
              if (Z[nA].indexOf("url(") !== 0) {
                var q = new s.Color(Z[nA]);
                Z[nA] = q.setAlpha(A(q.getAlpha() * Z[c[nA]], 2)).toRgba();
              }
            }
          return Z;
        }(rA);
      }
    }, parseElements: function(_, T, M, N, X) {
      new s.ElementsParser(_, T, M, N, X).parse();
    }, parseStyleAttribute: function(_) {
      var T = {}, M = _.getAttribute("style");
      return M && (typeof M == "string" ? function(N, X) {
        var D, I;
        N.replace(/;\s*$/, "").split(";").forEach(function(K) {
          var W = K.split(":");
          D = W[0].trim().toLowerCase(), I = W[1].trim(), X[D] = I;
        });
      }(M, T) : function(N, X) {
        var D, I;
        for (var K in N)
          N[K] !== void 0 && (D = K.toLowerCase(), I = N[K], X[D] = I);
      }(M, T)), T;
    }, parsePointsAttribute: function(_) {
      if (!_)
        return null;
      var T, M, N = [];
      for (T = 0, M = (_ = (_ = _.replace(/,/g, " ").trim()).split(/\s+/)).length; T < M; T += 2)
        N.push({ x: parseFloat(_[T]), y: parseFloat(_[T + 1]) });
      return N;
    }, getCSSRules: function(_) {
      var T, M, N = _.getElementsByTagName("style"), X = {};
      for (T = 0, M = N.length; T < M; T++) {
        var D = N[T].textContent;
        (D = D.replace(/\/\*[\s\S]*?\*\//g, "")).trim() !== "" && D.split("}").filter(function(I) {
          return I.trim();
        }).forEach(function(I) {
          var K = I.split("{"), W = {}, G = K[1].trim().split(";").filter(function(rA) {
            return rA.trim();
          });
          for (T = 0, M = G.length; T < M; T++) {
            var z = G[T].split(":"), $ = z[0].trim(), eA = z[1].trim();
            W[$] = eA;
          }
          (I = K[0].trim()).split(",").forEach(function(rA) {
            (rA = rA.replace(/^svg/i, "").trim()) !== "" && (X[rA] ? s.util.object.extend(X[rA], W) : X[rA] = s.util.object.clone(W));
          });
        });
      }
      return X;
    }, loadSVGFromURL: function(_, T, M, N) {
      _ = _.replace(/^\n\s*/, "").trim(), new s.util.request(_, { method: "get", onComplete: function(X) {
        var D = X.responseXML;
        if (!D || !D.documentElement)
          return T && T(null), !1;
        s.parseSVGDocument(D.documentElement, function(I, K, W, G) {
          T && T(I, K, W, G);
        }, M, N);
      } });
    }, loadSVGFromString: function(_, T, M, N) {
      var X = new s.window.DOMParser().parseFromString(_.trim(), "text/xml");
      s.parseSVGDocument(X.documentElement, function(D, I, K, W) {
        T(D, I, K, W);
      }, M, N);
    } });
  }(e), B.ElementsParser = function(u, s, o, d, A, i) {
    this.elements = u, this.callback = s, this.options = o, this.reviver = d, this.svgUid = o && o.svgUid || 0, this.parsingOptions = A, this.regexUrl = /^url\(['"]?#([^'"]+)['"]?\)/g, this.doc = i;
  }, (y = B.ElementsParser.prototype).parse = function() {
    this.instances = new Array(this.elements.length), this.numElements = this.elements.length, this.createObjects();
  }, y.createObjects = function() {
    var u = this;
    this.elements.forEach(function(s, o) {
      s.setAttribute("svgUid", u.svgUid), u.createObject(s, o);
    });
  }, y.findTag = function(u) {
    return B[B.util.string.capitalize(u.tagName.replace("svg:", ""))];
  }, y.createObject = function(u, s) {
    var o = this.findTag(u);
    if (o && o.fromElement)
      try {
        o.fromElement(u, this.createCallback(s, u), this.options);
      } catch (d) {
        B.log(d);
      }
    else
      this.checkIfDone();
  }, y.createCallback = function(u, s) {
    var o = this;
    return function(d) {
      var A;
      o.resolveGradient(d, s, "fill"), o.resolveGradient(d, s, "stroke"), d instanceof B.Image && d._originalElement && (A = d.parsePreserveAspectRatioAttribute(s)), d._removeTransformMatrix(A), o.resolveClipPath(d, s), o.reviver && o.reviver(s, d), o.instances[u] = d, o.checkIfDone();
    };
  }, y.extractPropertyDefinition = function(u, s, o) {
    var d = u[s], A = this.regexUrl;
    if (A.test(d)) {
      A.lastIndex = 0;
      var i = A.exec(d)[1];
      return A.lastIndex = 0, B[o][this.svgUid][i];
    }
  }, y.resolveGradient = function(u, s, o) {
    var d = this.extractPropertyDefinition(u, o, "gradientDefs");
    if (d) {
      var A = s.getAttribute(o + "-opacity"), i = B.Gradient.fromElement(d, u, A, this.options);
      u.set(o, i);
    }
  }, y.createClipPathCallback = function(u, s) {
    return function(o) {
      o._removeTransformMatrix(), o.fillRule = o.clipRule, s.push(o);
    };
  }, y.resolveClipPath = function(u, s) {
    var o, d, A, i, n = this.extractPropertyDefinition(u, "clipPath", "clipPaths");
    if (n) {
      A = [], d = B.util.invertTransform(u.calcTransformMatrix());
      for (var h = n[0].parentNode, c = s; c.parentNode && c.getAttribute("clip-path") !== u.clipPath; )
        c = c.parentNode;
      c.parentNode.appendChild(h);
      for (var l = 0; l < n.length; l++)
        o = n[l], this.findTag(o).fromElement(o, this.createClipPathCallback(u, A), this.options);
      n = A.length === 1 ? A[0] : new B.Group(A), i = B.util.multiplyTransformMatrices(d, n.calcTransformMatrix()), n.clipPath && this.resolveClipPath(n, c);
      var f = B.util.qrDecompose(i);
      n.flipX = !1, n.flipY = !1, n.set("scaleX", f.scaleX), n.set("scaleY", f.scaleY), n.angle = f.angle, n.skewX = f.skewX, n.skewY = 0, n.setPositionByOrigin({ x: f.translateX, y: f.translateY }, "center", "center"), u.clipPath = n;
    } else
      delete u.clipPath;
  }, y.checkIfDone = function() {
    --this.numElements == 0 && (this.instances = this.instances.filter(function(u) {
      return u != null;
    }), this.callback(this.instances, this.elements));
  }, function(u) {
    var s = u.fabric || (u.fabric = {});
    function o(d, A) {
      this.x = d, this.y = A;
    }
    s.Point ? s.warn("fabric.Point is already defined") : (s.Point = o, o.prototype = { type: "point", constructor: o, add: function(d) {
      return new o(this.x + d.x, this.y + d.y);
    }, addEquals: function(d) {
      return this.x += d.x, this.y += d.y, this;
    }, scalarAdd: function(d) {
      return new o(this.x + d, this.y + d);
    }, scalarAddEquals: function(d) {
      return this.x += d, this.y += d, this;
    }, subtract: function(d) {
      return new o(this.x - d.x, this.y - d.y);
    }, subtractEquals: function(d) {
      return this.x -= d.x, this.y -= d.y, this;
    }, scalarSubtract: function(d) {
      return new o(this.x - d, this.y - d);
    }, scalarSubtractEquals: function(d) {
      return this.x -= d, this.y -= d, this;
    }, multiply: function(d) {
      return new o(this.x * d, this.y * d);
    }, multiplyEquals: function(d) {
      return this.x *= d, this.y *= d, this;
    }, divide: function(d) {
      return new o(this.x / d, this.y / d);
    }, divideEquals: function(d) {
      return this.x /= d, this.y /= d, this;
    }, eq: function(d) {
      return this.x === d.x && this.y === d.y;
    }, lt: function(d) {
      return this.x < d.x && this.y < d.y;
    }, lte: function(d) {
      return this.x <= d.x && this.y <= d.y;
    }, gt: function(d) {
      return this.x > d.x && this.y > d.y;
    }, gte: function(d) {
      return this.x >= d.x && this.y >= d.y;
    }, lerp: function(d, A) {
      return A === void 0 && (A = 0.5), A = Math.max(Math.min(1, A), 0), new o(this.x + (d.x - this.x) * A, this.y + (d.y - this.y) * A);
    }, distanceFrom: function(d) {
      var A = this.x - d.x, i = this.y - d.y;
      return Math.sqrt(A * A + i * i);
    }, midPointFrom: function(d) {
      return this.lerp(d);
    }, min: function(d) {
      return new o(Math.min(this.x, d.x), Math.min(this.y, d.y));
    }, max: function(d) {
      return new o(Math.max(this.x, d.x), Math.max(this.y, d.y));
    }, toString: function() {
      return this.x + "," + this.y;
    }, setXY: function(d, A) {
      return this.x = d, this.y = A, this;
    }, setX: function(d) {
      return this.x = d, this;
    }, setY: function(d) {
      return this.y = d, this;
    }, setFromPoint: function(d) {
      return this.x = d.x, this.y = d.y, this;
    }, swap: function(d) {
      var A = this.x, i = this.y;
      this.x = d.x, this.y = d.y, d.x = A, d.y = i;
    }, clone: function() {
      return new o(this.x, this.y);
    } });
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {});
    function o(d) {
      this.status = d, this.points = [];
    }
    s.Intersection ? s.warn("fabric.Intersection is already defined") : (s.Intersection = o, s.Intersection.prototype = { constructor: o, appendPoint: function(d) {
      return this.points.push(d), this;
    }, appendPoints: function(d) {
      return this.points = this.points.concat(d), this;
    } }, s.Intersection.intersectLineLine = function(d, A, i, n) {
      var h, c = (n.x - i.x) * (d.y - i.y) - (n.y - i.y) * (d.x - i.x), l = (A.x - d.x) * (d.y - i.y) - (A.y - d.y) * (d.x - i.x), f = (n.y - i.y) * (A.x - d.x) - (n.x - i.x) * (A.y - d.y);
      if (f !== 0) {
        var m = c / f, v = l / f;
        0 <= m && m <= 1 && 0 <= v && v <= 1 ? (h = new o("Intersection")).appendPoint(new s.Point(d.x + m * (A.x - d.x), d.y + m * (A.y - d.y))) : h = new o();
      } else
        h = new o(c === 0 || l === 0 ? "Coincident" : "Parallel");
      return h;
    }, s.Intersection.intersectLinePolygon = function(d, A, i) {
      var n, h, c, l, f = new o(), m = i.length;
      for (l = 0; l < m; l++)
        n = i[l], h = i[(l + 1) % m], c = o.intersectLineLine(d, A, n, h), f.appendPoints(c.points);
      return f.points.length > 0 && (f.status = "Intersection"), f;
    }, s.Intersection.intersectPolygonPolygon = function(d, A) {
      var i, n = new o(), h = d.length;
      for (i = 0; i < h; i++) {
        var c = d[i], l = d[(i + 1) % h], f = o.intersectLinePolygon(c, l, A);
        n.appendPoints(f.points);
      }
      return n.points.length > 0 && (n.status = "Intersection"), n;
    }, s.Intersection.intersectPolygonRectangle = function(d, A, i) {
      var n = A.min(i), h = A.max(i), c = new s.Point(h.x, n.y), l = new s.Point(n.x, h.y), f = o.intersectLinePolygon(n, c, d), m = o.intersectLinePolygon(c, h, d), v = o.intersectLinePolygon(h, l, d), x = o.intersectLinePolygon(l, n, d), U = new o();
      return U.appendPoints(f.points), U.appendPoints(m.points), U.appendPoints(v.points), U.appendPoints(x.points), U.points.length > 0 && (U.status = "Intersection"), U;
    });
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {});
    function o(A) {
      A ? this._tryParsingColor(A) : this.setSource([0, 0, 0, 1]);
    }
    function d(A, i, n) {
      return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? A + 6 * (i - A) * n : n < 0.5 ? i : n < 2 / 3 ? A + (i - A) * (2 / 3 - n) * 6 : A;
    }
    s.Color ? s.warn("fabric.Color is already defined.") : (s.Color = o, s.Color.prototype = { _tryParsingColor: function(A) {
      var i;
      A in o.colorNameMap && (A = o.colorNameMap[A]), A === "transparent" && (i = [255, 255, 255, 0]), i || (i = o.sourceFromHex(A)), i || (i = o.sourceFromRgb(A)), i || (i = o.sourceFromHsl(A)), i || (i = [0, 0, 0, 1]), i && this.setSource(i);
    }, _rgbToHsl: function(A, i, n) {
      A /= 255, i /= 255, n /= 255;
      var h, c, l, f = s.util.array.max([A, i, n]), m = s.util.array.min([A, i, n]);
      if (l = (f + m) / 2, f === m)
        h = c = 0;
      else {
        var v = f - m;
        switch (c = l > 0.5 ? v / (2 - f - m) : v / (f + m), f) {
          case A:
            h = (i - n) / v + (i < n ? 6 : 0);
            break;
          case i:
            h = (n - A) / v + 2;
            break;
          case n:
            h = (A - i) / v + 4;
        }
        h /= 6;
      }
      return [Math.round(360 * h), Math.round(100 * c), Math.round(100 * l)];
    }, getSource: function() {
      return this._source;
    }, setSource: function(A) {
      this._source = A;
    }, toRgb: function() {
      var A = this.getSource();
      return "rgb(" + A[0] + "," + A[1] + "," + A[2] + ")";
    }, toRgba: function() {
      var A = this.getSource();
      return "rgba(" + A[0] + "," + A[1] + "," + A[2] + "," + A[3] + ")";
    }, toHsl: function() {
      var A = this.getSource(), i = this._rgbToHsl(A[0], A[1], A[2]);
      return "hsl(" + i[0] + "," + i[1] + "%," + i[2] + "%)";
    }, toHsla: function() {
      var A = this.getSource(), i = this._rgbToHsl(A[0], A[1], A[2]);
      return "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + A[3] + ")";
    }, toHex: function() {
      var A, i, n, h = this.getSource();
      return A = (A = h[0].toString(16)).length === 1 ? "0" + A : A, i = (i = h[1].toString(16)).length === 1 ? "0" + i : i, n = (n = h[2].toString(16)).length === 1 ? "0" + n : n, A.toUpperCase() + i.toUpperCase() + n.toUpperCase();
    }, toHexa: function() {
      var A, i = this.getSource();
      return A = (A = (A = Math.round(255 * i[3])).toString(16)).length === 1 ? "0" + A : A, this.toHex() + A.toUpperCase();
    }, getAlpha: function() {
      return this.getSource()[3];
    }, setAlpha: function(A) {
      var i = this.getSource();
      return i[3] = A, this.setSource(i), this;
    }, toGrayscale: function() {
      var A = this.getSource(), i = parseInt((0.3 * A[0] + 0.59 * A[1] + 0.11 * A[2]).toFixed(0), 10), n = A[3];
      return this.setSource([i, i, i, n]), this;
    }, toBlackWhite: function(A) {
      var i = this.getSource(), n = (0.3 * i[0] + 0.59 * i[1] + 0.11 * i[2]).toFixed(0), h = i[3];
      return A = A || 127, n = Number(n) < Number(A) ? 0 : 255, this.setSource([n, n, n, h]), this;
    }, overlayWith: function(A) {
      A instanceof o || (A = new o(A));
      var i, n = [], h = this.getAlpha(), c = this.getSource(), l = A.getSource();
      for (i = 0; i < 3; i++)
        n.push(Math.round(0.5 * c[i] + 0.5 * l[i]));
      return n[3] = h, this.setSource(n), this;
    } }, s.Color.reRGBa = /^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/i, s.Color.reHSLa = /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/i, s.Color.reHex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, s.Color.colorNameMap = { aliceblue: "#F0F8FF", antiquewhite: "#FAEBD7", aqua: "#00FFFF", aquamarine: "#7FFFD4", azure: "#F0FFFF", beige: "#F5F5DC", bisque: "#FFE4C4", black: "#000000", blanchedalmond: "#FFEBCD", blue: "#0000FF", blueviolet: "#8A2BE2", brown: "#A52A2A", burlywood: "#DEB887", cadetblue: "#5F9EA0", chartreuse: "#7FFF00", chocolate: "#D2691E", coral: "#FF7F50", cornflowerblue: "#6495ED", cornsilk: "#FFF8DC", crimson: "#DC143C", cyan: "#00FFFF", darkblue: "#00008B", darkcyan: "#008B8B", darkgoldenrod: "#B8860B", darkgray: "#A9A9A9", darkgrey: "#A9A9A9", darkgreen: "#006400", darkkhaki: "#BDB76B", darkmagenta: "#8B008B", darkolivegreen: "#556B2F", darkorange: "#FF8C00", darkorchid: "#9932CC", darkred: "#8B0000", darksalmon: "#E9967A", darkseagreen: "#8FBC8F", darkslateblue: "#483D8B", darkslategray: "#2F4F4F", darkslategrey: "#2F4F4F", darkturquoise: "#00CED1", darkviolet: "#9400D3", deeppink: "#FF1493", deepskyblue: "#00BFFF", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1E90FF", firebrick: "#B22222", floralwhite: "#FFFAF0", forestgreen: "#228B22", fuchsia: "#FF00FF", gainsboro: "#DCDCDC", ghostwhite: "#F8F8FF", gold: "#FFD700", goldenrod: "#DAA520", gray: "#808080", grey: "#808080", green: "#008000", greenyellow: "#ADFF2F", honeydew: "#F0FFF0", hotpink: "#FF69B4", indianred: "#CD5C5C", indigo: "#4B0082", ivory: "#FFFFF0", khaki: "#F0E68C", lavender: "#E6E6FA", lavenderblush: "#FFF0F5", lawngreen: "#7CFC00", lemonchiffon: "#FFFACD", lightblue: "#ADD8E6", lightcoral: "#F08080", lightcyan: "#E0FFFF", lightgoldenrodyellow: "#FAFAD2", lightgray: "#D3D3D3", lightgrey: "#D3D3D3", lightgreen: "#90EE90", lightpink: "#FFB6C1", lightsalmon: "#FFA07A", lightseagreen: "#20B2AA", lightskyblue: "#87CEFA", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#B0C4DE", lightyellow: "#FFFFE0", lime: "#00FF00", limegreen: "#32CD32", linen: "#FAF0E6", magenta: "#FF00FF", maroon: "#800000", mediumaquamarine: "#66CDAA", mediumblue: "#0000CD", mediumorchid: "#BA55D3", mediumpurple: "#9370DB", mediumseagreen: "#3CB371", mediumslateblue: "#7B68EE", mediumspringgreen: "#00FA9A", mediumturquoise: "#48D1CC", mediumvioletred: "#C71585", midnightblue: "#191970", mintcream: "#F5FFFA", mistyrose: "#FFE4E1", moccasin: "#FFE4B5", navajowhite: "#FFDEAD", navy: "#000080", oldlace: "#FDF5E6", olive: "#808000", olivedrab: "#6B8E23", orange: "#FFA500", orangered: "#FF4500", orchid: "#DA70D6", palegoldenrod: "#EEE8AA", palegreen: "#98FB98", paleturquoise: "#AFEEEE", palevioletred: "#DB7093", papayawhip: "#FFEFD5", peachpuff: "#FFDAB9", peru: "#CD853F", pink: "#FFC0CB", plum: "#DDA0DD", powderblue: "#B0E0E6", purple: "#800080", rebeccapurple: "#663399", red: "#FF0000", rosybrown: "#BC8F8F", royalblue: "#4169E1", saddlebrown: "#8B4513", salmon: "#FA8072", sandybrown: "#F4A460", seagreen: "#2E8B57", seashell: "#FFF5EE", sienna: "#A0522D", silver: "#C0C0C0", skyblue: "#87CEEB", slateblue: "#6A5ACD", slategray: "#708090", slategrey: "#708090", snow: "#FFFAFA", springgreen: "#00FF7F", steelblue: "#4682B4", tan: "#D2B48C", teal: "#008080", thistle: "#D8BFD8", tomato: "#FF6347", turquoise: "#40E0D0", violet: "#EE82EE", wheat: "#F5DEB3", white: "#FFFFFF", whitesmoke: "#F5F5F5", yellow: "#FFFF00", yellowgreen: "#9ACD32" }, s.Color.fromRgb = function(A) {
      return o.fromSource(o.sourceFromRgb(A));
    }, s.Color.sourceFromRgb = function(A) {
      var i = A.match(o.reRGBa);
      if (i) {
        var n = parseInt(i[1], 10) / (/%$/.test(i[1]) ? 100 : 1) * (/%$/.test(i[1]) ? 255 : 1), h = parseInt(i[2], 10) / (/%$/.test(i[2]) ? 100 : 1) * (/%$/.test(i[2]) ? 255 : 1), c = parseInt(i[3], 10) / (/%$/.test(i[3]) ? 100 : 1) * (/%$/.test(i[3]) ? 255 : 1);
        return [parseInt(n, 10), parseInt(h, 10), parseInt(c, 10), i[4] ? parseFloat(i[4]) : 1];
      }
    }, s.Color.fromRgba = o.fromRgb, s.Color.fromHsl = function(A) {
      return o.fromSource(o.sourceFromHsl(A));
    }, s.Color.sourceFromHsl = function(A) {
      var i = A.match(o.reHSLa);
      if (i) {
        var n, h, c, l = (parseFloat(i[1]) % 360 + 360) % 360 / 360, f = parseFloat(i[2]) / (/%$/.test(i[2]) ? 100 : 1), m = parseFloat(i[3]) / (/%$/.test(i[3]) ? 100 : 1);
        if (f === 0)
          n = h = c = m;
        else {
          var v = m <= 0.5 ? m * (f + 1) : m + f - m * f, x = 2 * m - v;
          n = d(x, v, l + 1 / 3), h = d(x, v, l), c = d(x, v, l - 1 / 3);
        }
        return [Math.round(255 * n), Math.round(255 * h), Math.round(255 * c), i[4] ? parseFloat(i[4]) : 1];
      }
    }, s.Color.fromHsla = o.fromHsl, s.Color.fromHex = function(A) {
      return o.fromSource(o.sourceFromHex(A));
    }, s.Color.sourceFromHex = function(A) {
      if (A.match(o.reHex)) {
        var i = A.slice(A.indexOf("#") + 1), n = i.length === 3 || i.length === 4, h = i.length === 8 || i.length === 4, c = n ? i.charAt(0) + i.charAt(0) : i.substring(0, 2), l = n ? i.charAt(1) + i.charAt(1) : i.substring(2, 4), f = n ? i.charAt(2) + i.charAt(2) : i.substring(4, 6), m = h ? n ? i.charAt(3) + i.charAt(3) : i.substring(6, 8) : "FF";
        return [parseInt(c, 16), parseInt(l, 16), parseInt(f, 16), parseFloat((parseInt(m, 16) / 255).toFixed(2))];
      }
    }, s.Color.fromSource = function(A) {
      var i = new o();
      return i.setSource(A), i;
    });
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = ["e", "se", "s", "sw", "w", "nw", "n", "ne", "e"], d = ["ns", "nesw", "ew", "nwse"], A = {}, i = "left", n = "top", h = "right", c = "bottom", l = "center", f = { top: c, bottom: n, left: h, right: i, center: l }, m = s.util.radiansToDegrees, v = Math.sign || function(D) {
      return (D > 0) - (D < 0) || +D;
    };
    function x(D, I) {
      var K = D.angle + m(Math.atan2(I.y, I.x)) + 360;
      return Math.round(K % 360 / 45);
    }
    function U(D, I) {
      var K = I.transform.target, W = K.canvas, G = s.util.object.clone(I);
      G.target = K, W && W.fire("object:" + D, G), K.fire(D, I);
    }
    function F(D, I) {
      var K = I.canvas, W = D[K.uniScaleKey];
      return K.uniformScaling && !W || !K.uniformScaling && W;
    }
    function k(D) {
      return D.originX === l && D.originY === l;
    }
    function O(D, I, K) {
      var W = D.lockScalingX, G = D.lockScalingY;
      return !(!W || !G) || !(I || !W && !G || !K) || !(!W || I !== "x") || !(!G || I !== "y");
    }
    function P(D, I, K, W) {
      return { e: D, transform: I, pointer: { x: K, y: W } };
    }
    function R(D) {
      return function(I, K, W, G) {
        var z = K.target, $ = z.getCenterPoint(), eA = z.translateToOriginPoint($, K.originX, K.originY), rA = D(I, K, W, G);
        return z.setPositionByOrigin(eA, K.originX, K.originY), rA;
      };
    }
    function Y(D, I) {
      return function(K, W, G, z) {
        var $ = I(K, W, G, z);
        return $ && U(D, P(K, W, G, z)), $;
      };
    }
    function V(D, I, K, W, G) {
      var z = D.target, $ = z.controls[D.corner], eA = z.canvas.getZoom(), rA = z.padding / eA, Z = z.toLocalPoint(new s.Point(W, G), I, K);
      return Z.x >= rA && (Z.x -= rA), Z.x <= -rA && (Z.x += rA), Z.y >= rA && (Z.y -= rA), Z.y <= rA && (Z.y += rA), Z.x -= $.offsetX, Z.y -= $.offsetY, Z;
    }
    function _(D) {
      return D.flipX !== D.flipY;
    }
    function T(D, I, K, W, G) {
      if (D[I] !== 0) {
        var z = G / D._getTransformedDimensions()[W] * D[K];
        D.set(K, z);
      }
    }
    function M(D, I, K, W) {
      var G, z = I.target, $ = z._getTransformedDimensions(0, z.skewY), eA = V(I, I.originX, I.originY, K, W), rA = Math.abs(2 * eA.x) - $.x, Z = z.skewX;
      rA < 2 ? G = 0 : (G = m(Math.atan2(rA / z.scaleX, $.y / z.scaleY)), I.originX === i && I.originY === c && (G = -G), I.originX === h && I.originY === n && (G = -G), _(z) && (G = -G));
      var nA = Z !== G;
      if (nA) {
        var q = z._getTransformedDimensions().y;
        z.set("skewX", G), T(z, "skewY", "scaleY", "y", q);
      }
      return nA;
    }
    function N(D, I, K, W) {
      var G, z = I.target, $ = z._getTransformedDimensions(z.skewX, 0), eA = V(I, I.originX, I.originY, K, W), rA = Math.abs(2 * eA.y) - $.y, Z = z.skewY;
      rA < 2 ? G = 0 : (G = m(Math.atan2(rA / z.scaleY, $.x / z.scaleX)), I.originX === i && I.originY === c && (G = -G), I.originX === h && I.originY === n && (G = -G), _(z) && (G = -G));
      var nA = Z !== G;
      if (nA) {
        var q = z._getTransformedDimensions().x;
        z.set("skewY", G), T(z, "skewX", "scaleX", "x", q);
      }
      return nA;
    }
    function X(D, I, K, W, G) {
      G = G || {};
      var z, $, eA, rA, Z, nA, q = I.target, lA = q.lockScalingX, sA = q.lockScalingY, hA = G.by, BA = F(D, q), GA = O(q, hA, BA), dt = I.gestureScale;
      if (GA)
        return !1;
      if (dt)
        $ = I.scaleX * dt, eA = I.scaleY * dt;
      else {
        if (z = V(I, I.originX, I.originY, K, W), Z = hA !== "y" ? v(z.x) : 1, nA = hA !== "x" ? v(z.y) : 1, I.signX || (I.signX = Z), I.signY || (I.signY = nA), q.lockScalingFlip && (I.signX !== Z || I.signY !== nA))
          return !1;
        if (rA = q._getTransformedDimensions(), BA && !hA) {
          var St = Math.abs(z.x) + Math.abs(z.y), xA = I.original, WA = St / (Math.abs(rA.x * xA.scaleX / q.scaleX) + Math.abs(rA.y * xA.scaleY / q.scaleY));
          $ = xA.scaleX * WA, eA = xA.scaleY * WA;
        } else
          $ = Math.abs(z.x * q.scaleX / rA.x), eA = Math.abs(z.y * q.scaleY / rA.y);
        k(I) && ($ *= 2, eA *= 2), I.signX !== Z && hA !== "y" && (I.originX = f[I.originX], $ *= -1, I.signX = Z), I.signY !== nA && hA !== "x" && (I.originY = f[I.originY], eA *= -1, I.signY = nA);
      }
      var gt = q.scaleX, Rt = q.scaleY;
      return hA ? (hA === "x" && q.set("scaleX", $), hA === "y" && q.set("scaleY", eA)) : (!lA && q.set("scaleX", $), !sA && q.set("scaleY", eA)), gt !== q.scaleX || Rt !== q.scaleY;
    }
    A.scaleCursorStyleHandler = function(D, I, K) {
      var W = F(D, K), G = "";
      if (I.x !== 0 && I.y === 0 ? G = "x" : I.x === 0 && I.y !== 0 && (G = "y"), O(K, G, W))
        return "not-allowed";
      var z = x(K, I);
      return o[z] + "-resize";
    }, A.skewCursorStyleHandler = function(D, I, K) {
      var W = "not-allowed";
      if (I.x !== 0 && K.lockSkewingY || I.y !== 0 && K.lockSkewingX)
        return W;
      var G = x(K, I) % 4;
      return d[G] + "-resize";
    }, A.scaleSkewCursorStyleHandler = function(D, I, K) {
      return D[K.canvas.altActionKey] ? A.skewCursorStyleHandler(D, I, K) : A.scaleCursorStyleHandler(D, I, K);
    }, A.rotationWithSnapping = Y("rotating", R(function(D, I, K, W) {
      var G = I, z = G.target, $ = z.translateToOriginPoint(z.getCenterPoint(), G.originX, G.originY);
      if (z.lockRotation)
        return !1;
      var eA, rA = Math.atan2(G.ey - $.y, G.ex - $.x), Z = Math.atan2(W - $.y, K - $.x), nA = m(Z - rA + G.theta);
      if (z.snapAngle > 0) {
        var q = z.snapAngle, lA = z.snapThreshold || q, sA = Math.ceil(nA / q) * q, hA = Math.floor(nA / q) * q;
        Math.abs(nA - hA) < lA ? nA = hA : Math.abs(nA - sA) < lA && (nA = sA);
      }
      return nA < 0 && (nA = 360 + nA), nA %= 360, eA = z.angle !== nA, z.angle = nA, eA;
    })), A.scalingEqually = Y("scaling", R(function(D, I, K, W) {
      return X(D, I, K, W);
    })), A.scalingX = Y("scaling", R(function(D, I, K, W) {
      return X(D, I, K, W, { by: "x" });
    })), A.scalingY = Y("scaling", R(function(D, I, K, W) {
      return X(D, I, K, W, { by: "y" });
    })), A.scalingYOrSkewingX = function(D, I, K, W) {
      return D[I.target.canvas.altActionKey] ? A.skewHandlerX(D, I, K, W) : A.scalingY(D, I, K, W);
    }, A.scalingXOrSkewingY = function(D, I, K, W) {
      return D[I.target.canvas.altActionKey] ? A.skewHandlerY(D, I, K, W) : A.scalingX(D, I, K, W);
    }, A.changeWidth = Y("resizing", R(function(D, I, K, W) {
      var G = I.target, z = V(I, I.originX, I.originY, K, W), $ = G.strokeWidth / (G.strokeUniform ? G.scaleX : 1), eA = k(I) ? 2 : 1, rA = G.width, Z = Math.abs(z.x * eA / G.scaleX) - $;
      return G.set("width", Math.max(Z, 0)), rA !== Z;
    })), A.skewHandlerX = function(D, I, K, W) {
      var G, z = I.target, $ = z.skewX, eA = I.originY;
      return !z.lockSkewingX && ($ === 0 ? G = V(I, l, l, K, W).x > 0 ? i : h : ($ > 0 && (G = eA === n ? i : h), $ < 0 && (G = eA === n ? h : i), _(z) && (G = G === i ? h : i)), I.originX = G, Y("skewing", R(M))(D, I, K, W));
    }, A.skewHandlerY = function(D, I, K, W) {
      var G, z = I.target, $ = z.skewY, eA = I.originX;
      return !z.lockSkewingY && ($ === 0 ? G = V(I, l, l, K, W).y > 0 ? n : c : ($ > 0 && (G = eA === i ? n : c), $ < 0 && (G = eA === i ? c : n), _(z) && (G = G === n ? c : n)), I.originY = G, Y("skewing", R(N))(D, I, K, W));
    }, A.dragHandler = function(D, I, K, W) {
      var G = I.target, z = K - I.offsetX, $ = W - I.offsetY, eA = !G.get("lockMovementX") && G.left !== z, rA = !G.get("lockMovementY") && G.top !== $;
      return eA && G.set("left", z), rA && G.set("top", $), (eA || rA) && U("moving", P(D, I, K, W)), eA || rA;
    }, A.scaleOrSkewActionName = function(D, I, K) {
      var W = D[K.canvas.altActionKey];
      return I.x === 0 ? W ? "skewX" : "scaleY" : I.y === 0 ? W ? "skewY" : "scaleX" : void 0;
    }, A.rotationStyleHandler = function(D, I, K) {
      return K.lockRotation ? "not-allowed" : I.cursorStyle;
    }, A.fireEvent = U, A.wrapWithFixedAnchor = R, A.wrapWithFireEvent = Y, A.getLocalPoint = V, s.controlsUtils = A;
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.util.degreesToRadians, d = s.controlsUtils;
    d.renderCircleControl = function(A, i, n, h, c) {
      h = h || {};
      var l, f = this.sizeX || h.cornerSize || c.cornerSize, m = this.sizeY || h.cornerSize || c.cornerSize, v = h.transparentCorners !== void 0 ? h.transparentCorners : c.transparentCorners, x = v ? "stroke" : "fill", U = !v && (h.cornerStrokeColor || c.cornerStrokeColor), F = i, k = n;
      A.save(), A.fillStyle = h.cornerColor || c.cornerColor, A.strokeStyle = h.cornerStrokeColor || c.cornerStrokeColor, f > m ? (l = f, A.scale(1, m / f), k = n * f / m) : m > f ? (l = m, A.scale(f / m, 1), F = i * m / f) : l = f, A.lineWidth = 1, A.beginPath(), A.arc(F, k, l / 2, 0, 2 * Math.PI, !1), A[x](), U && A.stroke(), A.restore();
    }, d.renderSquareControl = function(A, i, n, h, c) {
      h = h || {};
      var l = this.sizeX || h.cornerSize || c.cornerSize, f = this.sizeY || h.cornerSize || c.cornerSize, m = h.transparentCorners !== void 0 ? h.transparentCorners : c.transparentCorners, v = m ? "stroke" : "fill", x = !m && (h.cornerStrokeColor || c.cornerStrokeColor), U = l / 2, F = f / 2;
      A.save(), A.fillStyle = h.cornerColor || c.cornerColor, A.strokeStyle = h.cornerStrokeColor || c.cornerStrokeColor, A.lineWidth = 1, A.translate(i, n), A.rotate(o(c.angle)), A[v + "Rect"](-U, -F, l, f), x && A.strokeRect(-U, -F, l, f), A.restore();
    };
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {});
    s.Control = function(o) {
      for (var d in o)
        this[d] = o[d];
    }, s.Control.prototype = { visible: !0, actionName: "scale", angle: 0, x: 0, y: 0, offsetX: 0, offsetY: 0, sizeX: null, sizeY: null, touchSizeX: null, touchSizeY: null, cursorStyle: "crosshair", withConnection: !1, actionHandler: function() {
    }, mouseDownHandler: function() {
    }, mouseUpHandler: function() {
    }, getActionHandler: function() {
      return this.actionHandler;
    }, getMouseDownHandler: function() {
      return this.mouseDownHandler;
    }, getMouseUpHandler: function() {
      return this.mouseUpHandler;
    }, cursorStyleHandler: function(o, d) {
      return d.cursorStyle;
    }, getActionName: function(o, d) {
      return d.actionName;
    }, getVisibility: function(o, d) {
      var A = o._controlsVisibility;
      return A && A[d] !== void 0 ? A[d] : this.visible;
    }, setVisibility: function(o) {
      this.visible = o;
    }, positionHandler: function(o, d) {
      return s.util.transformPoint({ x: this.x * o.x + this.offsetX, y: this.y * o.y + this.offsetY }, d);
    }, calcCornerCoords: function(o, d, A, i, n) {
      var h, c, l, f, m = n ? this.touchSizeX : this.sizeX, v = n ? this.touchSizeY : this.sizeY;
      if (m && v && m !== v) {
        var x = Math.atan2(v, m), U = Math.sqrt(m * m + v * v) / 2, F = x - s.util.degreesToRadians(o), k = Math.PI / 2 - x - s.util.degreesToRadians(o);
        h = U * s.util.cos(F), c = U * s.util.sin(F), l = U * s.util.cos(k), f = U * s.util.sin(k);
      } else
        U = 0.7071067812 * (m && v ? m : d), F = s.util.degreesToRadians(45 - o), h = l = U * s.util.cos(F), c = f = U * s.util.sin(F);
      return { tl: { x: A - f, y: i - l }, tr: { x: A + h, y: i - c }, bl: { x: A - h, y: i + c }, br: { x: A + f, y: i + l } };
    }, render: function(o, d, A, i, n) {
      ((i = i || {}).cornerStyle || n.cornerStyle) === "circle" ? s.controlsUtils.renderCircleControl.call(this, o, d, A, i, n) : s.controlsUtils.renderSquareControl.call(this, o, d, A, i, n);
    } };
  }(e), function() {
    function u(o, d) {
      var A, i, n, h, c = o.getAttribute("style"), l = o.getAttribute("offset") || 0;
      if (l = (l = parseFloat(l) / (/%$/.test(l) ? 100 : 1)) < 0 ? 0 : l > 1 ? 1 : l, c) {
        var f = c.split(/\s*;\s*/);
        for (f[f.length - 1] === "" && f.pop(), h = f.length; h--; ) {
          var m = f[h].split(/\s*:\s*/), v = m[0].trim(), x = m[1].trim();
          v === "stop-color" ? A = x : v === "stop-opacity" && (n = x);
        }
      }
      return A || (A = o.getAttribute("stop-color") || "rgb(0,0,0)"), n || (n = o.getAttribute("stop-opacity")), i = (A = new B.Color(A)).getAlpha(), n = isNaN(parseFloat(n)) ? 1 : parseFloat(n), n *= i * d, { offset: l, color: A.toRgb(), opacity: n };
    }
    var s = B.util.object.clone;
    B.Gradient = B.util.createClass({ offsetX: 0, offsetY: 0, gradientTransform: null, gradientUnits: "pixels", type: "linear", initialize: function(o) {
      o || (o = {}), o.coords || (o.coords = {});
      var d, A = this;
      Object.keys(o).forEach(function(i) {
        A[i] = o[i];
      }), this.id ? this.id += "_" + B.Object.__uid++ : this.id = B.Object.__uid++, d = { x1: o.coords.x1 || 0, y1: o.coords.y1 || 0, x2: o.coords.x2 || 0, y2: o.coords.y2 || 0 }, this.type === "radial" && (d.r1 = o.coords.r1 || 0, d.r2 = o.coords.r2 || 0), this.coords = d, this.colorStops = o.colorStops.slice();
    }, addColorStop: function(o) {
      for (var d in o) {
        var A = new B.Color(o[d]);
        this.colorStops.push({ offset: parseFloat(d), color: A.toRgb(), opacity: A.getAlpha() });
      }
      return this;
    }, toObject: function(o) {
      var d = { type: this.type, coords: this.coords, colorStops: this.colorStops, offsetX: this.offsetX, offsetY: this.offsetY, gradientUnits: this.gradientUnits, gradientTransform: this.gradientTransform ? this.gradientTransform.concat() : this.gradientTransform };
      return B.util.populateWithProperties(this, d, o), d;
    }, toSVG: function(o, d) {
      var A, i, n, h, c = s(this.coords, !0), l = (d = d || {}, s(this.colorStops, !0)), f = c.r1 > c.r2, m = this.gradientTransform ? this.gradientTransform.concat() : B.iMatrix.concat(), v = -this.offsetX, x = -this.offsetY, U = !!d.additionalTransform, F = this.gradientUnits === "pixels" ? "userSpaceOnUse" : "objectBoundingBox";
      if (l.sort(function(R, Y) {
        return R.offset - Y.offset;
      }), F === "objectBoundingBox" ? (v /= o.width, x /= o.height) : (v += o.width / 2, x += o.height / 2), o.type === "path" && this.gradientUnits !== "percentage" && (v -= o.pathOffset.x, x -= o.pathOffset.y), m[4] -= v, m[5] -= x, h = 'id="SVGID_' + this.id + '" gradientUnits="' + F + '"', h += ' gradientTransform="' + (U ? d.additionalTransform + " " : "") + B.util.matrixToSVG(m) + '" ', this.type === "linear" ? n = ["<linearGradient ", h, ' x1="', c.x1, '" y1="', c.y1, '" x2="', c.x2, '" y2="', c.y2, `">
`] : this.type === "radial" && (n = ["<radialGradient ", h, ' cx="', f ? c.x1 : c.x2, '" cy="', f ? c.y1 : c.y2, '" r="', f ? c.r1 : c.r2, '" fx="', f ? c.x2 : c.x1, '" fy="', f ? c.y2 : c.y1, `">
`]), this.type === "radial") {
        if (f)
          for ((l = l.concat()).reverse(), A = 0, i = l.length; A < i; A++)
            l[A].offset = 1 - l[A].offset;
        var k = Math.min(c.r1, c.r2);
        if (k > 0) {
          var O = k / Math.max(c.r1, c.r2);
          for (A = 0, i = l.length; A < i; A++)
            l[A].offset += O * (1 - l[A].offset);
        }
      }
      for (A = 0, i = l.length; A < i; A++) {
        var P = l[A];
        n.push("<stop ", 'offset="', 100 * P.offset + "%", '" style="stop-color:', P.color, P.opacity !== void 0 ? ";stop-opacity: " + P.opacity : ";", `"/>
`);
      }
      return n.push(this.type === "linear" ? `</linearGradient>
` : `</radialGradient>
`), n.join("");
    }, toLive: function(o) {
      var d, A, i, n = B.util.object.clone(this.coords);
      if (this.type) {
        for (this.type === "linear" ? d = o.createLinearGradient(n.x1, n.y1, n.x2, n.y2) : this.type === "radial" && (d = o.createRadialGradient(n.x1, n.y1, n.r1, n.x2, n.y2, n.r2)), A = 0, i = this.colorStops.length; A < i; A++) {
          var h = this.colorStops[A].color, c = this.colorStops[A].opacity, l = this.colorStops[A].offset;
          c !== void 0 && (h = new B.Color(h).setAlpha(c).toRgba()), d.addColorStop(l, h);
        }
        return d;
      }
    } }), B.util.object.extend(B.Gradient, { fromElement: function(o, d, A, i) {
      var n = parseFloat(A) / (/%$/.test(A) ? 100 : 1);
      n = n < 0 ? 0 : n > 1 ? 1 : n, isNaN(n) && (n = 1);
      var h, c, l, f, m = o.getElementsByTagName("stop"), v = o.getAttribute("gradientUnits") === "userSpaceOnUse" ? "pixels" : "percentage", x = o.getAttribute("gradientTransform") || "", U = [], F = 0, k = 0;
      for (o.nodeName === "linearGradient" || o.nodeName === "LINEARGRADIENT" ? (h = "linear", c = function(O) {
        return { x1: O.getAttribute("x1") || 0, y1: O.getAttribute("y1") || 0, x2: O.getAttribute("x2") || "100%", y2: O.getAttribute("y2") || 0 };
      }(o)) : (h = "radial", c = function(O) {
        return { x1: O.getAttribute("fx") || O.getAttribute("cx") || "50%", y1: O.getAttribute("fy") || O.getAttribute("cy") || "50%", r1: 0, x2: O.getAttribute("cx") || "50%", y2: O.getAttribute("cy") || "50%", r2: O.getAttribute("r") || "50%" };
      }(o)), l = m.length; l--; )
        U.push(u(m[l], n));
      return f = B.parseTransformAttribute(x), function(O, P, R, Y) {
        var V, _;
        Object.keys(P).forEach(function(T) {
          (V = P[T]) === "Infinity" ? _ = 1 : V === "-Infinity" ? _ = 0 : (_ = parseFloat(P[T], 10), typeof V == "string" && /^(\d+\.\d+)%|(\d+)%$/.test(V) && (_ *= 0.01, Y === "pixels" && (T !== "x1" && T !== "x2" && T !== "r2" || (_ *= R.viewBoxWidth || R.width), T !== "y1" && T !== "y2" || (_ *= R.viewBoxHeight || R.height)))), P[T] = _;
        });
      }(0, c, i, v), v === "pixels" && (F = -d.left, k = -d.top), new B.Gradient({ id: o.getAttribute("id"), type: h, coords: c, colorStops: U, gradientUnits: v, gradientTransform: f, offsetX: F, offsetY: k });
    } });
  }(), Q = B.util.toFixed, B.Pattern = B.util.createClass({ repeat: "repeat", offsetX: 0, offsetY: 0, crossOrigin: "", patternTransform: null, initialize: function(u, s) {
    if (u || (u = {}), this.id = B.Object.__uid++, this.setOptions(u), !u.source || u.source && typeof u.source != "string")
      s && s(this);
    else {
      var o = this;
      this.source = B.util.createImage(), B.util.loadImage(u.source, function(d, A) {
        o.source = d, s && s(o, A);
      }, null, this.crossOrigin);
    }
  }, toObject: function(u) {
    var s, o, d = B.Object.NUM_FRACTION_DIGITS;
    return typeof this.source.src == "string" ? s = this.source.src : typeof this.source == "object" && this.source.toDataURL && (s = this.source.toDataURL()), o = { type: "pattern", source: s, repeat: this.repeat, crossOrigin: this.crossOrigin, offsetX: Q(this.offsetX, d), offsetY: Q(this.offsetY, d), patternTransform: this.patternTransform ? this.patternTransform.concat() : null }, B.util.populateWithProperties(this, o, u), o;
  }, toSVG: function(u) {
    var s = typeof this.source == "function" ? this.source() : this.source, o = s.width / u.width, d = s.height / u.height, A = this.offsetX / u.width, i = this.offsetY / u.height, n = "";
    return this.repeat !== "repeat-x" && this.repeat !== "no-repeat" || (d = 1, i && (d += Math.abs(i))), this.repeat !== "repeat-y" && this.repeat !== "no-repeat" || (o = 1, A && (o += Math.abs(A))), s.src ? n = s.src : s.toDataURL && (n = s.toDataURL()), '<pattern id="SVGID_' + this.id + '" x="' + A + '" y="' + i + '" width="' + o + '" height="' + d + `">
<image x="0" y="0" width="` + s.width + '" height="' + s.height + '" xlink:href="' + n + `"></image>
</pattern>
`;
  }, setOptions: function(u) {
    for (var s in u)
      this[s] = u[s];
  }, toLive: function(u) {
    var s = this.source;
    return !s || s.src !== void 0 && (!s.complete || s.naturalWidth === 0 || s.naturalHeight === 0) ? "" : u.createPattern(s, this.repeat);
  } }), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.util.toFixed;
    s.Shadow ? s.warn("fabric.Shadow is already defined.") : (s.Shadow = s.util.createClass({ color: "rgb(0,0,0)", blur: 0, offsetX: 0, offsetY: 0, affectStroke: !1, includeDefaultValues: !0, nonScaling: !1, initialize: function(d) {
      for (var A in typeof d == "string" && (d = this._parseShadow(d)), d)
        this[A] = d[A];
      this.id = s.Object.__uid++;
    }, _parseShadow: function(d) {
      var A = d.trim(), i = s.Shadow.reOffsetsAndBlur.exec(A) || [];
      return { color: (A.replace(s.Shadow.reOffsetsAndBlur, "") || "rgb(0,0,0)").trim(), offsetX: parseFloat(i[1], 10) || 0, offsetY: parseFloat(i[2], 10) || 0, blur: parseFloat(i[3], 10) || 0 };
    }, toString: function() {
      return [this.offsetX, this.offsetY, this.blur, this.color].join("px ");
    }, toSVG: function(d) {
      var A = 40, i = 40, n = s.Object.NUM_FRACTION_DIGITS, h = s.util.rotateVector({ x: this.offsetX, y: this.offsetY }, s.util.degreesToRadians(-d.angle)), c = new s.Color(this.color);
      return d.width && d.height && (A = 100 * o((Math.abs(h.x) + this.blur) / d.width, n) + 20, i = 100 * o((Math.abs(h.y) + this.blur) / d.height, n) + 20), d.flipX && (h.x *= -1), d.flipY && (h.y *= -1), '<filter id="SVGID_' + this.id + '" y="-' + i + '%" height="' + (100 + 2 * i) + '%" x="-' + A + '%" width="' + (100 + 2 * A) + `%" >
	<feGaussianBlur in="SourceAlpha" stdDeviation="` + o(this.blur ? this.blur / 2 : 0, n) + `"></feGaussianBlur>
	<feOffset dx="` + o(h.x, n) + '" dy="' + o(h.y, n) + `" result="oBlur" ></feOffset>
	<feFlood flood-color="` + c.toRgb() + '" flood-opacity="' + c.getAlpha() + `"/>
	<feComposite in2="oBlur" operator="in" />
	<feMerge>
		<feMergeNode></feMergeNode>
		<feMergeNode in="SourceGraphic"></feMergeNode>
	</feMerge>
</filter>
`;
    }, toObject: function() {
      if (this.includeDefaultValues)
        return { color: this.color, blur: this.blur, offsetX: this.offsetX, offsetY: this.offsetY, affectStroke: this.affectStroke, nonScaling: this.nonScaling };
      var d = {}, A = s.Shadow.prototype;
      return ["color", "blur", "offsetX", "offsetY", "affectStroke", "nonScaling"].forEach(function(i) {
        this[i] !== A[i] && (d[i] = this[i]);
      }, this), d;
    } }), s.Shadow.reOffsetsAndBlur = /(?:\s|^)(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(\d+(?:\.\d*)?(?:px)?)?(?:\s?|$)(?:$|\s)/);
  }(e), function() {
    if (B.StaticCanvas)
      B.warn("fabric.StaticCanvas is already defined.");
    else {
      var u = B.util.object.extend, s = B.util.getElementOffset, o = B.util.removeFromArray, d = B.util.toFixed, A = B.util.transformPoint, i = B.util.invertTransform, n = B.util.getNodeCanvas, h = B.util.createCanvasElement, c = new Error("Could not initialize `canvas` element");
      B.StaticCanvas = B.util.createClass(B.CommonMethods, { initialize: function(l, f) {
        f || (f = {}), this.renderAndResetBound = this.renderAndReset.bind(this), this.requestRenderAllBound = this.requestRenderAll.bind(this), this._initStatic(l, f);
      }, backgroundColor: "", backgroundImage: null, overlayColor: "", overlayImage: null, includeDefaultValues: !0, stateful: !1, renderOnAddRemove: !0, controlsAboveOverlay: !1, allowTouchScrolling: !1, imageSmoothingEnabled: !0, viewportTransform: B.iMatrix.concat(), backgroundVpt: !0, overlayVpt: !0, enableRetinaScaling: !0, vptCoords: {}, skipOffscreen: !0, clipPath: void 0, _initStatic: function(l, f) {
        var m = this.requestRenderAllBound;
        this._objects = [], this._createLowerCanvas(l), this._initOptions(f), this.interactive || this._initRetinaScaling(), f.overlayImage && this.setOverlayImage(f.overlayImage, m), f.backgroundImage && this.setBackgroundImage(f.backgroundImage, m), f.backgroundColor && this.setBackgroundColor(f.backgroundColor, m), f.overlayColor && this.setOverlayColor(f.overlayColor, m), this.calcOffset();
      }, _isRetinaScaling: function() {
        return B.devicePixelRatio > 1 && this.enableRetinaScaling;
      }, getRetinaScaling: function() {
        return this._isRetinaScaling() ? Math.max(1, B.devicePixelRatio) : 1;
      }, _initRetinaScaling: function() {
        if (this._isRetinaScaling()) {
          var l = B.devicePixelRatio;
          this.__initRetinaScaling(l, this.lowerCanvasEl, this.contextContainer), this.upperCanvasEl && this.__initRetinaScaling(l, this.upperCanvasEl, this.contextTop);
        }
      }, __initRetinaScaling: function(l, f, m) {
        f.setAttribute("width", this.width * l), f.setAttribute("height", this.height * l), m.scale(l, l);
      }, calcOffset: function() {
        return this._offset = s(this.lowerCanvasEl), this;
      }, setOverlayImage: function(l, f, m) {
        return this.__setBgOverlayImage("overlayImage", l, f, m);
      }, setBackgroundImage: function(l, f, m) {
        return this.__setBgOverlayImage("backgroundImage", l, f, m);
      }, setOverlayColor: function(l, f) {
        return this.__setBgOverlayColor("overlayColor", l, f);
      }, setBackgroundColor: function(l, f) {
        return this.__setBgOverlayColor("backgroundColor", l, f);
      }, __setBgOverlayImage: function(l, f, m, v) {
        return typeof f == "string" ? B.util.loadImage(f, function(x, U) {
          if (x) {
            var F = new B.Image(x, v);
            this[l] = F, F.canvas = this;
          }
          m && m(x, U);
        }, this, v && v.crossOrigin) : (v && f.setOptions(v), this[l] = f, f && (f.canvas = this), m && m(f, !1)), this;
      }, __setBgOverlayColor: function(l, f, m) {
        return this[l] = f, this._initGradient(f, l), this._initPattern(f, l, m), this;
      }, _createCanvasElement: function() {
        var l = h();
        if (!l || (l.style || (l.style = {}), l.getContext === void 0))
          throw c;
        return l;
      }, _initOptions: function(l) {
        var f = this.lowerCanvasEl;
        this._setOptions(l), this.width = this.width || parseInt(f.width, 10) || 0, this.height = this.height || parseInt(f.height, 10) || 0, this.lowerCanvasEl.style && (f.width = this.width, f.height = this.height, f.style.width = this.width + "px", f.style.height = this.height + "px", this.viewportTransform = this.viewportTransform.slice());
      }, _createLowerCanvas: function(l) {
        l && l.getContext ? this.lowerCanvasEl = l : this.lowerCanvasEl = B.util.getById(l) || this._createCanvasElement(), B.util.addClass(this.lowerCanvasEl, "lower-canvas"), this._originalCanvasStyle = this.lowerCanvasEl.style, this.interactive && this._applyCanvasStyle(this.lowerCanvasEl), this.contextContainer = this.lowerCanvasEl.getContext("2d");
      }, getWidth: function() {
        return this.width;
      }, getHeight: function() {
        return this.height;
      }, setWidth: function(l, f) {
        return this.setDimensions({ width: l }, f);
      }, setHeight: function(l, f) {
        return this.setDimensions({ height: l }, f);
      }, setDimensions: function(l, f) {
        var m;
        for (var v in f = f || {}, l)
          m = l[v], f.cssOnly || (this._setBackstoreDimension(v, l[v]), m += "px", this.hasLostContext = !0), f.backstoreOnly || this._setCssDimension(v, m);
        return this._isCurrentlyDrawing && this.freeDrawingBrush && this.freeDrawingBrush._setBrushStyles(this.contextTop), this._initRetinaScaling(), this.calcOffset(), f.cssOnly || this.requestRenderAll(), this;
      }, _setBackstoreDimension: function(l, f) {
        return this.lowerCanvasEl[l] = f, this.upperCanvasEl && (this.upperCanvasEl[l] = f), this.cacheCanvasEl && (this.cacheCanvasEl[l] = f), this[l] = f, this;
      }, _setCssDimension: function(l, f) {
        return this.lowerCanvasEl.style[l] = f, this.upperCanvasEl && (this.upperCanvasEl.style[l] = f), this.wrapperEl && (this.wrapperEl.style[l] = f), this;
      }, getZoom: function() {
        return this.viewportTransform[0];
      }, setViewportTransform: function(l) {
        var f, m, v, x = this._activeObject, U = this.backgroundImage, F = this.overlayImage;
        for (this.viewportTransform = l, m = 0, v = this._objects.length; m < v; m++)
          (f = this._objects[m]).group || f.setCoords(!0);
        return x && x.setCoords(), U && U.setCoords(!0), F && F.setCoords(!0), this.calcViewportBoundaries(), this.renderOnAddRemove && this.requestRenderAll(), this;
      }, zoomToPoint: function(l, f) {
        var m = l, v = this.viewportTransform.slice(0);
        l = A(l, i(this.viewportTransform)), v[0] = f, v[3] = f;
        var x = A(l, v);
        return v[4] += m.x - x.x, v[5] += m.y - x.y, this.setViewportTransform(v);
      }, setZoom: function(l) {
        return this.zoomToPoint(new B.Point(0, 0), l), this;
      }, absolutePan: function(l) {
        var f = this.viewportTransform.slice(0);
        return f[4] = -l.x, f[5] = -l.y, this.setViewportTransform(f);
      }, relativePan: function(l) {
        return this.absolutePan(new B.Point(-l.x - this.viewportTransform[4], -l.y - this.viewportTransform[5]));
      }, getElement: function() {
        return this.lowerCanvasEl;
      }, _onObjectAdded: function(l) {
        this.stateful && l.setupState(), l._set("canvas", this), l.setCoords(), this.fire("object:added", { target: l }), l.fire("added");
      }, _onObjectRemoved: function(l) {
        this.fire("object:removed", { target: l }), l.fire("removed"), delete l.canvas;
      }, clearContext: function(l) {
        return l.clearRect(0, 0, this.width, this.height), this;
      }, getContext: function() {
        return this.contextContainer;
      }, clear: function() {
        return this.remove.apply(this, this.getObjects()), this.backgroundImage = null, this.overlayImage = null, this.backgroundColor = "", this.overlayColor = "", this._hasITextHandlers && (this.off("mouse:up", this._mouseUpITextHandler), this._iTextInstances = null, this._hasITextHandlers = !1), this.clearContext(this.contextContainer), this.fire("canvas:cleared"), this.renderOnAddRemove && this.requestRenderAll(), this;
      }, renderAll: function() {
        var l = this.contextContainer;
        return this.renderCanvas(l, this._objects), this;
      }, renderAndReset: function() {
        this.isRendering = 0, this.renderAll();
      }, requestRenderAll: function() {
        return this.isRendering || (this.isRendering = B.util.requestAnimFrame(this.renderAndResetBound)), this;
      }, calcViewportBoundaries: function() {
        var l = {}, f = this.width, m = this.height, v = i(this.viewportTransform);
        return l.tl = A({ x: 0, y: 0 }, v), l.br = A({ x: f, y: m }, v), l.tr = new B.Point(l.br.x, l.tl.y), l.bl = new B.Point(l.tl.x, l.br.y), this.vptCoords = l, l;
      }, cancelRequestedRender: function() {
        this.isRendering && (B.util.cancelAnimFrame(this.isRendering), this.isRendering = 0);
      }, renderCanvas: function(l, f) {
        var m = this.viewportTransform, v = this.clipPath;
        this.cancelRequestedRender(), this.calcViewportBoundaries(), this.clearContext(l), B.util.setImageSmoothing(l, this.imageSmoothingEnabled), this.fire("before:render", { ctx: l }), this._renderBackground(l), l.save(), l.transform(m[0], m[1], m[2], m[3], m[4], m[5]), this._renderObjects(l, f), l.restore(), !this.controlsAboveOverlay && this.interactive && this.drawControls(l), v && (v.canvas = this, v.shouldCache(), v._transformDone = !0, v.renderCache({ forClipping: !0 }), this.drawClipPathOnCanvas(l)), this._renderOverlay(l), this.controlsAboveOverlay && this.interactive && this.drawControls(l), this.fire("after:render", { ctx: l });
      }, drawClipPathOnCanvas: function(l) {
        var f = this.viewportTransform, m = this.clipPath;
        l.save(), l.transform(f[0], f[1], f[2], f[3], f[4], f[5]), l.globalCompositeOperation = "destination-in", m.transform(l), l.scale(1 / m.zoomX, 1 / m.zoomY), l.drawImage(m._cacheCanvas, -m.cacheTranslationX, -m.cacheTranslationY), l.restore();
      }, _renderObjects: function(l, f) {
        var m, v;
        for (m = 0, v = f.length; m < v; ++m)
          f[m] && f[m].render(l);
      }, _renderBackgroundOrOverlay: function(l, f) {
        var m = this[f + "Color"], v = this[f + "Image"], x = this.viewportTransform, U = this[f + "Vpt"];
        if (m || v) {
          if (m) {
            l.save(), l.beginPath(), l.moveTo(0, 0), l.lineTo(this.width, 0), l.lineTo(this.width, this.height), l.lineTo(0, this.height), l.closePath(), l.fillStyle = m.toLive ? m.toLive(l, this) : m, U && l.transform(x[0], x[1], x[2], x[3], x[4], x[5]), l.transform(1, 0, 0, 1, m.offsetX || 0, m.offsetY || 0);
            var F = m.gradientTransform || m.patternTransform;
            F && l.transform(F[0], F[1], F[2], F[3], F[4], F[5]), l.fill(), l.restore();
          }
          v && (l.save(), U && l.transform(x[0], x[1], x[2], x[3], x[4], x[5]), v.render(l), l.restore());
        }
      }, _renderBackground: function(l) {
        this._renderBackgroundOrOverlay(l, "background");
      }, _renderOverlay: function(l) {
        this._renderBackgroundOrOverlay(l, "overlay");
      }, getCenter: function() {
        return { top: this.height / 2, left: this.width / 2 };
      }, getCenterPoint: function() {
        return new B.Point(this.width / 2, this.height / 2);
      }, centerObjectH: function(l) {
        return this._centerObject(l, new B.Point(this.getCenterPoint().x, l.getCenterPoint().y));
      }, centerObjectV: function(l) {
        return this._centerObject(l, new B.Point(l.getCenterPoint().x, this.getCenterPoint().y));
      }, centerObject: function(l) {
        var f = this.getCenterPoint();
        return this._centerObject(l, f);
      }, viewportCenterObject: function(l) {
        var f = this.getVpCenter();
        return this._centerObject(l, f);
      }, viewportCenterObjectH: function(l) {
        var f = this.getVpCenter();
        return this._centerObject(l, new B.Point(f.x, l.getCenterPoint().y)), this;
      }, viewportCenterObjectV: function(l) {
        var f = this.getVpCenter();
        return this._centerObject(l, new B.Point(l.getCenterPoint().x, f.y));
      }, getVpCenter: function() {
        var l = this.getCenterPoint(), f = i(this.viewportTransform);
        return A(l, f);
      }, _centerObject: function(l, f) {
        return l.setPositionByOrigin(f, "center", "center"), l.setCoords(), this.renderOnAddRemove && this.requestRenderAll(), this;
      }, toDatalessJSON: function(l) {
        return this.toDatalessObject(l);
      }, toObject: function(l) {
        return this._toObjectMethod("toObject", l);
      }, toDatalessObject: function(l) {
        return this._toObjectMethod("toDatalessObject", l);
      }, _toObjectMethod: function(l, f) {
        var m = this.clipPath, v = { version: B.version, objects: this._toObjects(l, f) };
        return m && !m.excludeFromExport && (v.clipPath = this._toObject(this.clipPath, l, f)), u(v, this.__serializeBgOverlay(l, f)), B.util.populateWithProperties(this, v, f), v;
      }, _toObjects: function(l, f) {
        return this._objects.filter(function(m) {
          return !m.excludeFromExport;
        }).map(function(m) {
          return this._toObject(m, l, f);
        }, this);
      }, _toObject: function(l, f, m) {
        var v;
        this.includeDefaultValues || (v = l.includeDefaultValues, l.includeDefaultValues = !1);
        var x = l[f](m);
        return this.includeDefaultValues || (l.includeDefaultValues = v), x;
      }, __serializeBgOverlay: function(l, f) {
        var m = {}, v = this.backgroundImage, x = this.overlayImage, U = this.backgroundColor, F = this.overlayColor;
        return U && U.toObject ? U.excludeFromExport || (m.background = U.toObject(f)) : U && (m.background = U), F && F.toObject ? F.excludeFromExport || (m.overlay = F.toObject(f)) : F && (m.overlay = F), v && !v.excludeFromExport && (m.backgroundImage = this._toObject(v, l, f)), x && !x.excludeFromExport && (m.overlayImage = this._toObject(x, l, f)), m;
      }, svgViewportTransformation: !0, toSVG: function(l, f) {
        l || (l = {}), l.reviver = f;
        var m = [];
        return this._setSVGPreamble(m, l), this._setSVGHeader(m, l), this.clipPath && m.push('<g clip-path="url(#' + this.clipPath.clipPathId + `)" >
`), this._setSVGBgOverlayColor(m, "background"), this._setSVGBgOverlayImage(m, "backgroundImage", f), this._setSVGObjects(m, f), this.clipPath && m.push(`</g>
`), this._setSVGBgOverlayColor(m, "overlay"), this._setSVGBgOverlayImage(m, "overlayImage", f), m.push("</svg>"), m.join("");
      }, _setSVGPreamble: function(l, f) {
        f.suppressPreamble || l.push('<?xml version="1.0" encoding="', f.encoding || "UTF-8", `" standalone="no" ?>
`, '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ', `"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
`);
      }, _setSVGHeader: function(l, f) {
        var m, v = f.width || this.width, x = f.height || this.height, U = 'viewBox="0 0 ' + this.width + " " + this.height + '" ', F = B.Object.NUM_FRACTION_DIGITS;
        f.viewBox ? U = 'viewBox="' + f.viewBox.x + " " + f.viewBox.y + " " + f.viewBox.width + " " + f.viewBox.height + '" ' : this.svgViewportTransformation && (m = this.viewportTransform, U = 'viewBox="' + d(-m[4] / m[0], F) + " " + d(-m[5] / m[3], F) + " " + d(this.width / m[0], F) + " " + d(this.height / m[3], F) + '" '), l.push("<svg ", 'xmlns="http://www.w3.org/2000/svg" ', 'xmlns:xlink="http://www.w3.org/1999/xlink" ', 'version="1.1" ', 'width="', v, '" ', 'height="', x, '" ', U, `xml:space="preserve">
`, "<desc>Created with Fabric.js ", B.version, `</desc>
`, `<defs>
`, this.createSVGFontFacesMarkup(), this.createSVGRefElementsMarkup(), this.createSVGClipPathMarkup(f), `</defs>
`);
      }, createSVGClipPathMarkup: function(l) {
        var f = this.clipPath;
        return f ? (f.clipPathId = "CLIPPATH_" + B.Object.__uid++, '<clipPath id="' + f.clipPathId + `" >
` + this.clipPath.toClipPathSVG(l.reviver) + `</clipPath>
`) : "";
      }, createSVGRefElementsMarkup: function() {
        var l = this;
        return ["background", "overlay"].map(function(f) {
          var m = l[f + "Color"];
          if (m && m.toLive) {
            var v = l[f + "Vpt"], x = l.viewportTransform, U = { width: l.width / (v ? x[0] : 1), height: l.height / (v ? x[3] : 1) };
            return m.toSVG(U, { additionalTransform: v ? B.util.matrixToSVG(x) : "" });
          }
        }).join("");
      }, createSVGFontFacesMarkup: function() {
        var l, f, m, v, x, U, F, k, O = "", P = {}, R = B.fontPaths, Y = [];
        for (this._objects.forEach(function _(T) {
          Y.push(T), T._objects && T._objects.forEach(_);
        }), F = 0, k = Y.length; F < k; F++)
          if (f = (l = Y[F]).fontFamily, l.type.indexOf("text") !== -1 && !P[f] && R[f] && (P[f] = !0, l.styles))
            for (x in m = l.styles)
              for (U in v = m[x])
                !P[f = v[U].fontFamily] && R[f] && (P[f] = !0);
        for (var V in P)
          O += [`		@font-face {
`, "			font-family: '", V, `';
`, "			src: url('", R[V], `');
`, `		}
`].join("");
        return O && (O = ['	<style type="text/css">', `<![CDATA[
`, O, "]]>", `</style>
`].join("")), O;
      }, _setSVGObjects: function(l, f) {
        var m, v, x, U = this._objects;
        for (v = 0, x = U.length; v < x; v++)
          (m = U[v]).excludeFromExport || this._setSVGObject(l, m, f);
      }, _setSVGObject: function(l, f, m) {
        l.push(f.toSVG(m));
      }, _setSVGBgOverlayImage: function(l, f, m) {
        this[f] && !this[f].excludeFromExport && this[f].toSVG && l.push(this[f].toSVG(m));
      }, _setSVGBgOverlayColor: function(l, f) {
        var m = this[f + "Color"], v = this.viewportTransform, x = this.width, U = this.height;
        if (m)
          if (m.toLive) {
            var F = m.repeat, k = B.util.invertTransform(v), O = this[f + "Vpt"] ? B.util.matrixToSVG(k) : "";
            l.push('<rect transform="' + O + " translate(", x / 2, ",", U / 2, ')"', ' x="', m.offsetX - x / 2, '" y="', m.offsetY - U / 2, '" ', 'width="', F === "repeat-y" || F === "no-repeat" ? m.source.width : x, '" height="', F === "repeat-x" || F === "no-repeat" ? m.source.height : U, '" fill="url(#SVGID_' + m.id + ')"', `></rect>
`);
          } else
            l.push('<rect x="0" y="0" width="100%" height="100%" ', 'fill="', m, '"', `></rect>
`);
      }, sendToBack: function(l) {
        if (!l)
          return this;
        var f, m, v, x = this._activeObject;
        if (l === x && l.type === "activeSelection")
          for (f = (v = x._objects).length; f--; )
            m = v[f], o(this._objects, m), this._objects.unshift(m);
        else
          o(this._objects, l), this._objects.unshift(l);
        return this.renderOnAddRemove && this.requestRenderAll(), this;
      }, bringToFront: function(l) {
        if (!l)
          return this;
        var f, m, v, x = this._activeObject;
        if (l === x && l.type === "activeSelection")
          for (v = x._objects, f = 0; f < v.length; f++)
            m = v[f], o(this._objects, m), this._objects.push(m);
        else
          o(this._objects, l), this._objects.push(l);
        return this.renderOnAddRemove && this.requestRenderAll(), this;
      }, sendBackwards: function(l, f) {
        if (!l)
          return this;
        var m, v, x, U, F, k = this._activeObject, O = 0;
        if (l === k && l.type === "activeSelection")
          for (F = k._objects, m = 0; m < F.length; m++)
            v = F[m], (x = this._objects.indexOf(v)) > 0 + O && (U = x - 1, o(this._objects, v), this._objects.splice(U, 0, v)), O++;
        else
          (x = this._objects.indexOf(l)) !== 0 && (U = this._findNewLowerIndex(l, x, f), o(this._objects, l), this._objects.splice(U, 0, l));
        return this.renderOnAddRemove && this.requestRenderAll(), this;
      }, _findNewLowerIndex: function(l, f, m) {
        var v, x;
        if (m) {
          for (v = f, x = f - 1; x >= 0; --x)
            if (l.intersectsWithObject(this._objects[x]) || l.isContainedWithinObject(this._objects[x]) || this._objects[x].isContainedWithinObject(l)) {
              v = x;
              break;
            }
        } else
          v = f - 1;
        return v;
      }, bringForward: function(l, f) {
        if (!l)
          return this;
        var m, v, x, U, F, k = this._activeObject, O = 0;
        if (l === k && l.type === "activeSelection")
          for (m = (F = k._objects).length; m--; )
            v = F[m], (x = this._objects.indexOf(v)) < this._objects.length - 1 - O && (U = x + 1, o(this._objects, v), this._objects.splice(U, 0, v)), O++;
        else
          (x = this._objects.indexOf(l)) !== this._objects.length - 1 && (U = this._findNewUpperIndex(l, x, f), o(this._objects, l), this._objects.splice(U, 0, l));
        return this.renderOnAddRemove && this.requestRenderAll(), this;
      }, _findNewUpperIndex: function(l, f, m) {
        var v, x, U;
        if (m) {
          for (v = f, x = f + 1, U = this._objects.length; x < U; ++x)
            if (l.intersectsWithObject(this._objects[x]) || l.isContainedWithinObject(this._objects[x]) || this._objects[x].isContainedWithinObject(l)) {
              v = x;
              break;
            }
        } else
          v = f + 1;
        return v;
      }, moveTo: function(l, f) {
        return o(this._objects, l), this._objects.splice(f, 0, l), this.renderOnAddRemove && this.requestRenderAll();
      }, dispose: function() {
        return this.isRendering && (B.util.cancelAnimFrame(this.isRendering), this.isRendering = 0), this.forEachObject(function(l) {
          l.dispose && l.dispose();
        }), this._objects = [], this.backgroundImage && this.backgroundImage.dispose && this.backgroundImage.dispose(), this.backgroundImage = null, this.overlayImage && this.overlayImage.dispose && this.overlayImage.dispose(), this.overlayImage = null, this._iTextInstances = null, this.contextContainer = null, this.lowerCanvasEl.classList.remove("lower-canvas"), B.util.setStyle(this.lowerCanvasEl, this._originalCanvasStyle), delete this._originalCanvasStyle, this.lowerCanvasEl.setAttribute("width", this.width), this.lowerCanvasEl.setAttribute("height", this.height), B.util.cleanUpJsdomNode(this.lowerCanvasEl), this.lowerCanvasEl = void 0, this;
      }, toString: function() {
        return "#<fabric.Canvas (" + this.complexity() + "): { objects: " + this._objects.length + " }>";
      } }), u(B.StaticCanvas.prototype, B.Observable), u(B.StaticCanvas.prototype, B.Collection), u(B.StaticCanvas.prototype, B.DataURLExporter), u(B.StaticCanvas, { EMPTY_JSON: '{"objects": [], "background": "white"}', supports: function(l) {
        var f = h();
        if (!f || !f.getContext)
          return null;
        var m = f.getContext("2d");
        return m && l === "setLineDash" ? m.setLineDash !== void 0 : null;
      } }), B.StaticCanvas.prototype.toJSON = B.StaticCanvas.prototype.toObject, B.isLikelyNode && (B.StaticCanvas.prototype.createPNGStream = function() {
        var l = n(this.lowerCanvasEl);
        return l && l.createPNGStream();
      }, B.StaticCanvas.prototype.createJPEGStream = function(l) {
        var f = n(this.lowerCanvasEl);
        return f && f.createJPEGStream(l);
      });
    }
  }(), B.BaseBrush = B.util.createClass({ color: "rgb(0, 0, 0)", width: 1, shadow: null, strokeLineCap: "round", strokeLineJoin: "round", strokeMiterLimit: 10, strokeDashArray: null, limitedToCanvasSize: !1, _setBrushStyles: function(u) {
    u.strokeStyle = this.color, u.lineWidth = this.width, u.lineCap = this.strokeLineCap, u.miterLimit = this.strokeMiterLimit, u.lineJoin = this.strokeLineJoin, u.setLineDash(this.strokeDashArray || []);
  }, _saveAndTransform: function(u) {
    var s = this.canvas.viewportTransform;
    u.save(), u.transform(s[0], s[1], s[2], s[3], s[4], s[5]);
  }, _setShadow: function() {
    if (this.shadow) {
      var u = this.canvas, s = this.shadow, o = u.contextTop, d = u.getZoom();
      u && u._isRetinaScaling() && (d *= B.devicePixelRatio), o.shadowColor = s.color, o.shadowBlur = s.blur * d, o.shadowOffsetX = s.offsetX * d, o.shadowOffsetY = s.offsetY * d;
    }
  }, needsFullRender: function() {
    return new B.Color(this.color).getAlpha() < 1 || !!this.shadow;
  }, _resetShadow: function() {
    var u = this.canvas.contextTop;
    u.shadowColor = "", u.shadowBlur = u.shadowOffsetX = u.shadowOffsetY = 0;
  }, _isOutSideCanvas: function(u) {
    return u.x < 0 || u.x > this.canvas.getWidth() || u.y < 0 || u.y > this.canvas.getHeight();
  } }), B.PencilBrush = B.util.createClass(B.BaseBrush, { decimate: 0.4, drawStraightLine: !1, straightLineKey: "shiftKey", initialize: function(u) {
    this.canvas = u, this._points = [];
  }, needsFullRender: function() {
    return this.callSuper("needsFullRender") || this._hasStraightLine;
  }, _drawSegment: function(u, s, o) {
    var d = s.midPointFrom(o);
    return u.quadraticCurveTo(s.x, s.y, d.x, d.y), d;
  }, onMouseDown: function(u, s) {
    this.canvas._isMainEvent(s.e) && (this.drawStraightLine = s.e[this.straightLineKey], this._prepareForDrawing(u), this._captureDrawingPath(u), this._render());
  }, onMouseMove: function(u, s) {
    if (this.canvas._isMainEvent(s.e) && (this.drawStraightLine = s.e[this.straightLineKey], (this.limitedToCanvasSize !== !0 || !this._isOutSideCanvas(u)) && this._captureDrawingPath(u) && this._points.length > 1))
      if (this.needsFullRender())
        this.canvas.clearContext(this.canvas.contextTop), this._render();
      else {
        var o = this._points, d = o.length, A = this.canvas.contextTop;
        this._saveAndTransform(A), this.oldEnd && (A.beginPath(), A.moveTo(this.oldEnd.x, this.oldEnd.y)), this.oldEnd = this._drawSegment(A, o[d - 2], o[d - 1], !0), A.stroke(), A.restore();
      }
  }, onMouseUp: function(u) {
    return !this.canvas._isMainEvent(u.e) || (this.drawStraightLine = !1, this.oldEnd = void 0, this._finalizeAndAddPath(), !1);
  }, _prepareForDrawing: function(u) {
    var s = new B.Point(u.x, u.y);
    this._reset(), this._addPoint(s), this.canvas.contextTop.moveTo(s.x, s.y);
  }, _addPoint: function(u) {
    return !(this._points.length > 1 && u.eq(this._points[this._points.length - 1]) || (this.drawStraightLine && this._points.length > 1 && (this._hasStraightLine = !0, this._points.pop()), this._points.push(u), 0));
  }, _reset: function() {
    this._points = [], this._setBrushStyles(this.canvas.contextTop), this._setShadow(), this._hasStraightLine = !1;
  }, _captureDrawingPath: function(u) {
    var s = new B.Point(u.x, u.y);
    return this._addPoint(s);
  }, _render: function(u) {
    var s, o, d = this._points[0], A = this._points[1];
    if (u = u || this.canvas.contextTop, this._saveAndTransform(u), u.beginPath(), this._points.length === 2 && d.x === A.x && d.y === A.y) {
      var i = this.width / 1e3;
      d = new B.Point(d.x, d.y), A = new B.Point(A.x, A.y), d.x -= i, A.x += i;
    }
    for (u.moveTo(d.x, d.y), s = 1, o = this._points.length; s < o; s++)
      this._drawSegment(u, d, A), d = this._points[s], A = this._points[s + 1];
    u.lineTo(d.x, d.y), u.stroke(), u.restore();
  }, convertPointsToSVGPath: function(u) {
    var s = this.width / 1e3;
    return B.util.getSmoothPathFromPoints(u, s);
  }, _isEmptySVGPath: function(u) {
    return B.util.joinPath(u) === "M 0 0 Q 0 0 0 0 L 0 0";
  }, createPath: function(u) {
    var s = new B.Path(u, { fill: null, stroke: this.color, strokeWidth: this.width, strokeLineCap: this.strokeLineCap, strokeMiterLimit: this.strokeMiterLimit, strokeLineJoin: this.strokeLineJoin, strokeDashArray: this.strokeDashArray });
    return this.shadow && (this.shadow.affectStroke = !0, s.shadow = new B.Shadow(this.shadow)), s;
  }, decimatePoints: function(u, s) {
    if (u.length <= 2)
      return u;
    var o, d = this.canvas.getZoom(), A = Math.pow(s / d, 2), i = u.length - 1, n = u[0], h = [n];
    for (o = 1; o < i - 1; o++)
      Math.pow(n.x - u[o].x, 2) + Math.pow(n.y - u[o].y, 2) >= A && (n = u[o], h.push(n));
    return h.push(u[i]), h;
  }, _finalizeAndAddPath: function() {
    this.canvas.contextTop.closePath(), this.decimate && (this._points = this.decimatePoints(this._points, this.decimate));
    var u = this.convertPointsToSVGPath(this._points);
    if (this._isEmptySVGPath(u))
      this.canvas.requestRenderAll();
    else {
      var s = this.createPath(u);
      this.canvas.clearContext(this.canvas.contextTop), this.canvas.fire("before:path:created", { path: s }), this.canvas.add(s), this.canvas.requestRenderAll(), s.setCoords(), this._resetShadow(), this.canvas.fire("path:created", { path: s });
    }
  } }), B.CircleBrush = B.util.createClass(B.BaseBrush, { width: 10, initialize: function(u) {
    this.canvas = u, this.points = [];
  }, drawDot: function(u) {
    var s = this.addPoint(u), o = this.canvas.contextTop;
    this._saveAndTransform(o), this.dot(o, s), o.restore();
  }, dot: function(u, s) {
    u.fillStyle = s.fill, u.beginPath(), u.arc(s.x, s.y, s.radius, 0, 2 * Math.PI, !1), u.closePath(), u.fill();
  }, onMouseDown: function(u) {
    this.points.length = 0, this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.drawDot(u);
  }, _render: function() {
    var u, s, o = this.canvas.contextTop, d = this.points;
    for (this._saveAndTransform(o), u = 0, s = d.length; u < s; u++)
      this.dot(o, d[u]);
    o.restore();
  }, onMouseMove: function(u) {
    this.limitedToCanvasSize === !0 && this._isOutSideCanvas(u) || (this.needsFullRender() ? (this.canvas.clearContext(this.canvas.contextTop), this.addPoint(u), this._render()) : this.drawDot(u));
  }, onMouseUp: function() {
    var u, s, o = this.canvas.renderOnAddRemove;
    this.canvas.renderOnAddRemove = !1;
    var d = [];
    for (u = 0, s = this.points.length; u < s; u++) {
      var A = this.points[u], i = new B.Circle({ radius: A.radius, left: A.x, top: A.y, originX: "center", originY: "center", fill: A.fill });
      this.shadow && (i.shadow = new B.Shadow(this.shadow)), d.push(i);
    }
    var n = new B.Group(d);
    n.canvas = this.canvas, this.canvas.fire("before:path:created", { path: n }), this.canvas.add(n), this.canvas.fire("path:created", { path: n }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = o, this.canvas.requestRenderAll();
  }, addPoint: function(u) {
    var s = new B.Point(u.x, u.y), o = B.util.getRandomInt(Math.max(0, this.width - 20), this.width + 20) / 2, d = new B.Color(this.color).setAlpha(B.util.getRandomInt(0, 100) / 100).toRgba();
    return s.radius = o, s.fill = d, this.points.push(s), s;
  } }), B.SprayBrush = B.util.createClass(B.BaseBrush, { width: 10, density: 20, dotWidth: 1, dotWidthVariance: 1, randomOpacity: !1, optimizeOverlapping: !0, initialize: function(u) {
    this.canvas = u, this.sprayChunks = [];
  }, onMouseDown: function(u) {
    this.sprayChunks.length = 0, this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.addSprayChunk(u), this.render(this.sprayChunkPoints);
  }, onMouseMove: function(u) {
    this.limitedToCanvasSize === !0 && this._isOutSideCanvas(u) || (this.addSprayChunk(u), this.render(this.sprayChunkPoints));
  }, onMouseUp: function() {
    var u = this.canvas.renderOnAddRemove;
    this.canvas.renderOnAddRemove = !1;
    for (var s = [], o = 0, d = this.sprayChunks.length; o < d; o++)
      for (var A = this.sprayChunks[o], i = 0, n = A.length; i < n; i++) {
        var h = new B.Rect({ width: A[i].width, height: A[i].width, left: A[i].x + 1, top: A[i].y + 1, originX: "center", originY: "center", fill: this.color });
        s.push(h);
      }
    this.optimizeOverlapping && (s = this._getOptimizedRects(s));
    var c = new B.Group(s);
    this.shadow && c.set("shadow", new B.Shadow(this.shadow)), this.canvas.fire("before:path:created", { path: c }), this.canvas.add(c), this.canvas.fire("path:created", { path: c }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = u, this.canvas.requestRenderAll();
  }, _getOptimizedRects: function(u) {
    var s, o, d, A = {};
    for (o = 0, d = u.length; o < d; o++)
      A[s = u[o].left + "" + u[o].top] || (A[s] = u[o]);
    var i = [];
    for (s in A)
      i.push(A[s]);
    return i;
  }, render: function(u) {
    var s, o, d = this.canvas.contextTop;
    for (d.fillStyle = this.color, this._saveAndTransform(d), s = 0, o = u.length; s < o; s++) {
      var A = u[s];
      A.opacity !== void 0 && (d.globalAlpha = A.opacity), d.fillRect(A.x, A.y, A.width, A.width);
    }
    d.restore();
  }, _render: function() {
    var u, s, o = this.canvas.contextTop;
    for (o.fillStyle = this.color, this._saveAndTransform(o), u = 0, s = this.sprayChunks.length; u < s; u++)
      this.render(this.sprayChunks[u]);
    o.restore();
  }, addSprayChunk: function(u) {
    this.sprayChunkPoints = [];
    var s, o, d, A, i = this.width / 2;
    for (A = 0; A < this.density; A++) {
      s = B.util.getRandomInt(u.x - i, u.x + i), o = B.util.getRandomInt(u.y - i, u.y + i), d = this.dotWidthVariance ? B.util.getRandomInt(Math.max(1, this.dotWidth - this.dotWidthVariance), this.dotWidth + this.dotWidthVariance) : this.dotWidth;
      var n = new B.Point(s, o);
      n.width = d, this.randomOpacity && (n.opacity = B.util.getRandomInt(0, 100) / 100), this.sprayChunkPoints.push(n);
    }
    this.sprayChunks.push(this.sprayChunkPoints);
  } }), B.PatternBrush = B.util.createClass(B.PencilBrush, { getPatternSrc: function() {
    var u = B.util.createCanvasElement(), s = u.getContext("2d");
    return u.width = u.height = 25, s.fillStyle = this.color, s.beginPath(), s.arc(10, 10, 10, 0, 2 * Math.PI, !1), s.closePath(), s.fill(), u;
  }, getPatternSrcFunction: function() {
    return String(this.getPatternSrc).replace("this.color", '"' + this.color + '"');
  }, getPattern: function(u) {
    return u.createPattern(this.source || this.getPatternSrc(), "repeat");
  }, _setBrushStyles: function(u) {
    this.callSuper("_setBrushStyles", u), u.strokeStyle = this.getPattern(u);
  }, createPath: function(u) {
    var s = this.callSuper("createPath", u), o = s._getLeftTopCoords().scalarAdd(s.strokeWidth / 2);
    return s.stroke = new B.Pattern({ source: this.source || this.getPatternSrcFunction(), offsetX: -o.x, offsetY: -o.y }), s;
  } }), function() {
    var u = B.util.getPointer, s = B.util.degreesToRadians, o = B.util.isTouchEvent;
    for (var d in B.Canvas = B.util.createClass(B.StaticCanvas, { initialize: function(A, i) {
      i || (i = {}), this.renderAndResetBound = this.renderAndReset.bind(this), this.requestRenderAllBound = this.requestRenderAll.bind(this), this._initStatic(A, i), this._initInteractive(), this._createCacheCanvas();
    }, uniformScaling: !0, uniScaleKey: "shiftKey", centeredScaling: !1, centeredRotation: !1, centeredKey: "altKey", altActionKey: "shiftKey", interactive: !0, selection: !0, selectionKey: "shiftKey", altSelectionKey: null, selectionColor: "rgba(100, 100, 255, 0.3)", selectionDashArray: [], selectionBorderColor: "rgba(255, 255, 255, 0.3)", selectionLineWidth: 1, selectionFullyContained: !1, hoverCursor: "move", moveCursor: "move", defaultCursor: "default", freeDrawingCursor: "crosshair", notAllowedCursor: "not-allowed", containerClass: "canvas-container", perPixelTargetFind: !1, targetFindTolerance: 0, skipTargetFind: !1, isDrawingMode: !1, preserveObjectStacking: !1, snapAngle: 0, snapThreshold: null, stopContextMenu: !1, fireRightClick: !1, fireMiddleClick: !1, targets: [], enablePointerEvents: !1, _hoveredTarget: null, _hoveredTargets: [], _initInteractive: function() {
      this._currentTransform = null, this._groupSelector = null, this._initWrapperElement(), this._createUpperCanvas(), this._initEventListeners(), this._initRetinaScaling(), this.freeDrawingBrush = B.PencilBrush && new B.PencilBrush(this), this.calcOffset();
    }, _chooseObjectsToRender: function() {
      var A, i, n, h = this.getActiveObjects();
      if (h.length > 0 && !this.preserveObjectStacking) {
        i = [], n = [];
        for (var c = 0, l = this._objects.length; c < l; c++)
          A = this._objects[c], h.indexOf(A) === -1 ? i.push(A) : n.push(A);
        h.length > 1 && (this._activeObject._objects = n), i.push.apply(i, n);
      } else
        i = this._objects;
      return i;
    }, renderAll: function() {
      !this.contextTopDirty || this._groupSelector || this.isDrawingMode || (this.clearContext(this.contextTop), this.contextTopDirty = !1), this.hasLostContext && (this.renderTopLayer(this.contextTop), this.hasLostContext = !1);
      var A = this.contextContainer;
      return this.renderCanvas(A, this._chooseObjectsToRender()), this;
    }, renderTopLayer: function(A) {
      A.save(), this.isDrawingMode && this._isCurrentlyDrawing && (this.freeDrawingBrush && this.freeDrawingBrush._render(), this.contextTopDirty = !0), this.selection && this._groupSelector && (this._drawSelection(A), this.contextTopDirty = !0), A.restore();
    }, renderTop: function() {
      var A = this.contextTop;
      return this.clearContext(A), this.renderTopLayer(A), this.fire("after:render"), this;
    }, _normalizePointer: function(A, i) {
      var n = A.calcTransformMatrix(), h = B.util.invertTransform(n), c = this.restorePointerVpt(i);
      return B.util.transformPoint(c, h);
    }, isTargetTransparent: function(A, i, n) {
      if (A.shouldCache() && A._cacheCanvas && A !== this._activeObject) {
        var h = this._normalizePointer(A, { x: i, y: n }), c = Math.max(A.cacheTranslationX + h.x * A.zoomX, 0), l = Math.max(A.cacheTranslationY + h.y * A.zoomY, 0);
        return B.util.isTransparent(A._cacheContext, Math.round(c), Math.round(l), this.targetFindTolerance);
      }
      var f = this.contextCache, m = A.selectionBackgroundColor, v = this.viewportTransform;
      return A.selectionBackgroundColor = "", this.clearContext(f), f.save(), f.transform(v[0], v[1], v[2], v[3], v[4], v[5]), A.render(f), f.restore(), A.selectionBackgroundColor = m, B.util.isTransparent(f, i, n, this.targetFindTolerance);
    }, _isSelectionKeyPressed: function(A) {
      return Array.isArray(this.selectionKey) ? !!this.selectionKey.find(function(i) {
        return A[i] === !0;
      }) : A[this.selectionKey];
    }, _shouldClearSelection: function(A, i) {
      var n = this.getActiveObjects(), h = this._activeObject;
      return !i || i && h && n.length > 1 && n.indexOf(i) === -1 && h !== i && !this._isSelectionKeyPressed(A) || i && !i.evented || i && !i.selectable && h && h !== i;
    }, _shouldCenterTransform: function(A, i, n) {
      var h;
      if (A)
        return i === "scale" || i === "scaleX" || i === "scaleY" || i === "resizing" ? h = this.centeredScaling || A.centeredScaling : i === "rotate" && (h = this.centeredRotation || A.centeredRotation), h ? !n : n;
    }, _getOriginFromCorner: function(A, i) {
      var n = { x: A.originX, y: A.originY };
      return i === "ml" || i === "tl" || i === "bl" ? n.x = "right" : i !== "mr" && i !== "tr" && i !== "br" || (n.x = "left"), i === "tl" || i === "mt" || i === "tr" ? n.y = "bottom" : i !== "bl" && i !== "mb" && i !== "br" || (n.y = "top"), n;
    }, _getActionFromCorner: function(A, i, n, h) {
      if (!i || !A)
        return "drag";
      var c = h.controls[i];
      return c.getActionName(n, c, h);
    }, _setupCurrentTransform: function(A, i, n) {
      if (i) {
        var h = this.getPointer(A), c = i.__corner, l = i.controls[c], f = n && c ? l.getActionHandler(A, i, l) : B.controlsUtils.dragHandler, m = this._getActionFromCorner(n, c, A, i), v = this._getOriginFromCorner(i, c), x = A[this.centeredKey], U = { target: i, action: m, actionHandler: f, corner: c, scaleX: i.scaleX, scaleY: i.scaleY, skewX: i.skewX, skewY: i.skewY, offsetX: h.x - i.left, offsetY: h.y - i.top, originX: v.x, originY: v.y, ex: h.x, ey: h.y, lastX: h.x, lastY: h.y, theta: s(i.angle), width: i.width * i.scaleX, shiftKey: A.shiftKey, altKey: x, original: B.util.saveObjectTransform(i) };
        this._shouldCenterTransform(i, m, x) && (U.originX = "center", U.originY = "center"), U.original.originX = v.x, U.original.originY = v.y, this._currentTransform = U, this._beforeTransform(A);
      }
    }, setCursor: function(A) {
      this.upperCanvasEl.style.cursor = A;
    }, _drawSelection: function(A) {
      var i = this._groupSelector, n = new B.Point(i.ex, i.ey), h = B.util.transformPoint(n, this.viewportTransform), c = new B.Point(i.ex + i.left, i.ey + i.top), l = B.util.transformPoint(c, this.viewportTransform), f = Math.min(h.x, l.x), m = Math.min(h.y, l.y), v = Math.max(h.x, l.x), x = Math.max(h.y, l.y), U = this.selectionLineWidth / 2;
      this.selectionColor && (A.fillStyle = this.selectionColor, A.fillRect(f, m, v - f, x - m)), this.selectionLineWidth && this.selectionBorderColor && (A.lineWidth = this.selectionLineWidth, A.strokeStyle = this.selectionBorderColor, f += U, m += U, v -= U, x -= U, B.Object.prototype._setLineDash.call(this, A, this.selectionDashArray), A.strokeRect(f, m, v - f, x - m));
    }, findTarget: function(A, i) {
      if (!this.skipTargetFind) {
        var n, h, c = this.getPointer(A, !0), l = this._activeObject, f = this.getActiveObjects(), m = o(A), v = f.length > 1 && !i || f.length === 1;
        if (this.targets = [], v && l._findTargetCorner(c, m) || f.length > 1 && !i && l === this._searchPossibleTargets([l], c))
          return l;
        if (f.length === 1 && l === this._searchPossibleTargets([l], c)) {
          if (!this.preserveObjectStacking)
            return l;
          n = l, h = this.targets, this.targets = [];
        }
        var x = this._searchPossibleTargets(this._objects, c);
        return A[this.altSelectionKey] && x && n && x !== n && (x = n, this.targets = h), x;
      }
    }, _checkTarget: function(A, i, n) {
      if (i && i.visible && i.evented && i.containsPoint(A) && (!this.perPixelTargetFind && !i.perPixelTargetFind || i.isEditing || !this.isTargetTransparent(i, n.x, n.y)))
        return !0;
    }, _searchPossibleTargets: function(A, i) {
      for (var n, h, c = A.length; c--; ) {
        var l = A[c], f = l.group ? this._normalizePointer(l.group, i) : i;
        if (this._checkTarget(f, l, i)) {
          (n = A[c]).subTargetCheck && n instanceof B.Group && (h = this._searchPossibleTargets(n._objects, i)) && this.targets.push(h);
          break;
        }
      }
      return n;
    }, restorePointerVpt: function(A) {
      return B.util.transformPoint(A, B.util.invertTransform(this.viewportTransform));
    }, getPointer: function(A, i) {
      if (this._absolutePointer && !i)
        return this._absolutePointer;
      if (this._pointer && i)
        return this._pointer;
      var n, h = u(A), c = this.upperCanvasEl, l = c.getBoundingClientRect(), f = l.width || 0, m = l.height || 0;
      f && m || ("top" in l && "bottom" in l && (m = Math.abs(l.top - l.bottom)), "right" in l && "left" in l && (f = Math.abs(l.right - l.left))), this.calcOffset(), h.x = h.x - this._offset.left, h.y = h.y - this._offset.top, i || (h = this.restorePointerVpt(h));
      var v = this.getRetinaScaling();
      return v !== 1 && (h.x /= v, h.y /= v), n = f === 0 || m === 0 ? { width: 1, height: 1 } : { width: c.width / f, height: c.height / m }, { x: h.x * n.width, y: h.y * n.height };
    }, _createUpperCanvas: function() {
      var A = this.lowerCanvasEl.className.replace(/\s*lower-canvas\s*/, ""), i = this.lowerCanvasEl, n = this.upperCanvasEl;
      n ? n.className = "" : (n = this._createCanvasElement(), this.upperCanvasEl = n), B.util.addClass(n, "upper-canvas " + A), this.wrapperEl.appendChild(n), this._copyCanvasStyle(i, n), this._applyCanvasStyle(n), this.contextTop = n.getContext("2d");
    }, getTopContext: function() {
      return this.contextTop;
    }, _createCacheCanvas: function() {
      this.cacheCanvasEl = this._createCanvasElement(), this.cacheCanvasEl.setAttribute("width", this.width), this.cacheCanvasEl.setAttribute("height", this.height), this.contextCache = this.cacheCanvasEl.getContext("2d");
    }, _initWrapperElement: function() {
      this.wrapperEl = B.util.wrapElement(this.lowerCanvasEl, "div", { class: this.containerClass }), B.util.setStyle(this.wrapperEl, { width: this.width + "px", height: this.height + "px", position: "relative" }), B.util.makeElementUnselectable(this.wrapperEl);
    }, _applyCanvasStyle: function(A) {
      var i = this.width || A.width, n = this.height || A.height;
      B.util.setStyle(A, { position: "absolute", width: i + "px", height: n + "px", left: 0, top: 0, "touch-action": this.allowTouchScrolling ? "manipulation" : "none", "-ms-touch-action": this.allowTouchScrolling ? "manipulation" : "none" }), A.width = i, A.height = n, B.util.makeElementUnselectable(A);
    }, _copyCanvasStyle: function(A, i) {
      i.style.cssText = A.style.cssText;
    }, getSelectionContext: function() {
      return this.contextTop;
    }, getSelectionElement: function() {
      return this.upperCanvasEl;
    }, getActiveObject: function() {
      return this._activeObject;
    }, getActiveObjects: function() {
      var A = this._activeObject;
      return A ? A.type === "activeSelection" && A._objects ? A._objects.slice(0) : [A] : [];
    }, _onObjectRemoved: function(A) {
      A === this._activeObject && (this.fire("before:selection:cleared", { target: A }), this._discardActiveObject(), this.fire("selection:cleared", { target: A }), A.fire("deselected")), A === this._hoveredTarget && (this._hoveredTarget = null, this._hoveredTargets = []), this.callSuper("_onObjectRemoved", A);
    }, _fireSelectionEvents: function(A, i) {
      var n = !1, h = this.getActiveObjects(), c = [], l = [];
      A.forEach(function(f) {
        h.indexOf(f) === -1 && (n = !0, f.fire("deselected", { e: i, target: f }), l.push(f));
      }), h.forEach(function(f) {
        A.indexOf(f) === -1 && (n = !0, f.fire("selected", { e: i, target: f }), c.push(f));
      }), A.length > 0 && h.length > 0 ? n && this.fire("selection:updated", { e: i, selected: c, deselected: l }) : h.length > 0 ? this.fire("selection:created", { e: i, selected: c }) : A.length > 0 && this.fire("selection:cleared", { e: i, deselected: l });
    }, setActiveObject: function(A, i) {
      var n = this.getActiveObjects();
      return this._setActiveObject(A, i), this._fireSelectionEvents(n, i), this;
    }, _setActiveObject: function(A, i) {
      return this._activeObject !== A && !!this._discardActiveObject(i, A) && !A.onSelect({ e: i }) && (this._activeObject = A, !0);
    }, _discardActiveObject: function(A, i) {
      var n = this._activeObject;
      if (n) {
        if (n.onDeselect({ e: A, object: i }))
          return !1;
        this._activeObject = null;
      }
      return !0;
    }, discardActiveObject: function(A) {
      var i = this.getActiveObjects(), n = this.getActiveObject();
      return i.length && this.fire("before:selection:cleared", { target: n, e: A }), this._discardActiveObject(A), this._fireSelectionEvents(i, A), this;
    }, dispose: function() {
      var A = this.wrapperEl;
      return this.removeListeners(), A.removeChild(this.upperCanvasEl), A.removeChild(this.lowerCanvasEl), this.contextCache = null, this.contextTop = null, ["upperCanvasEl", "cacheCanvasEl"].forEach((function(i) {
        B.util.cleanUpJsdomNode(this[i]), this[i] = void 0;
      }).bind(this)), A.parentNode && A.parentNode.replaceChild(this.lowerCanvasEl, this.wrapperEl), delete this.wrapperEl, B.StaticCanvas.prototype.dispose.call(this), this;
    }, clear: function() {
      return this.discardActiveObject(), this.clearContext(this.contextTop), this.callSuper("clear");
    }, drawControls: function(A) {
      var i = this._activeObject;
      i && i._renderControls(A);
    }, _toObject: function(A, i, n) {
      var h = this._realizeGroupTransformOnObject(A), c = this.callSuper("_toObject", A, i, n);
      return this._unwindGroupTransformOnObject(A, h), c;
    }, _realizeGroupTransformOnObject: function(A) {
      if (A.group && A.group.type === "activeSelection" && this._activeObject === A.group) {
        var i = {};
        return ["angle", "flipX", "flipY", "left", "scaleX", "scaleY", "skewX", "skewY", "top"].forEach(function(n) {
          i[n] = A[n];
        }), B.util.addTransformToObject(A, this._activeObject.calcOwnMatrix()), i;
      }
      return null;
    }, _unwindGroupTransformOnObject: function(A, i) {
      i && A.set(i);
    }, _setSVGObject: function(A, i, n) {
      var h = this._realizeGroupTransformOnObject(i);
      this.callSuper("_setSVGObject", A, i, n), this._unwindGroupTransformOnObject(i, h);
    }, setViewportTransform: function(A) {
      this.renderOnAddRemove && this._activeObject && this._activeObject.isEditing && this._activeObject.clearContextTop(), B.StaticCanvas.prototype.setViewportTransform.call(this, A);
    } }), B.StaticCanvas)
      d !== "prototype" && (B.Canvas[d] = B.StaticCanvas[d]);
  }(), function() {
    var u = B.util.addListener, s = B.util.removeListener, o = { passive: !1 };
    function d(A, i) {
      return A.button && A.button === i - 1;
    }
    B.util.object.extend(B.Canvas.prototype, { mainTouchId: null, _initEventListeners: function() {
      this.removeListeners(), this._bindEvents(), this.addOrRemove(u, "add");
    }, _getEventPrefix: function() {
      return this.enablePointerEvents ? "pointer" : "mouse";
    }, addOrRemove: function(A, i) {
      var n = this.upperCanvasEl, h = this._getEventPrefix();
      A(B.window, "resize", this._onResize), A(n, h + "down", this._onMouseDown), A(n, h + "move", this._onMouseMove, o), A(n, h + "out", this._onMouseOut), A(n, h + "enter", this._onMouseEnter), A(n, "wheel", this._onMouseWheel), A(n, "contextmenu", this._onContextMenu), A(n, "dblclick", this._onDoubleClick), A(n, "dragover", this._onDragOver), A(n, "dragenter", this._onDragEnter), A(n, "dragleave", this._onDragLeave), A(n, "drop", this._onDrop), this.enablePointerEvents || A(n, "touchstart", this._onTouchStart, o), typeof eventjs < "u" && i in eventjs && (eventjs[i](n, "gesture", this._onGesture), eventjs[i](n, "drag", this._onDrag), eventjs[i](n, "orientation", this._onOrientationChange), eventjs[i](n, "shake", this._onShake), eventjs[i](n, "longpress", this._onLongPress));
    }, removeListeners: function() {
      this.addOrRemove(s, "remove");
      var A = this._getEventPrefix();
      s(B.document, A + "up", this._onMouseUp), s(B.document, "touchend", this._onTouchEnd, o), s(B.document, A + "move", this._onMouseMove, o), s(B.document, "touchmove", this._onMouseMove, o);
    }, _bindEvents: function() {
      this.eventsBound || (this._onMouseDown = this._onMouseDown.bind(this), this._onTouchStart = this._onTouchStart.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this._onMouseUp = this._onMouseUp.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._onResize = this._onResize.bind(this), this._onGesture = this._onGesture.bind(this), this._onDrag = this._onDrag.bind(this), this._onShake = this._onShake.bind(this), this._onLongPress = this._onLongPress.bind(this), this._onOrientationChange = this._onOrientationChange.bind(this), this._onMouseWheel = this._onMouseWheel.bind(this), this._onMouseOut = this._onMouseOut.bind(this), this._onMouseEnter = this._onMouseEnter.bind(this), this._onContextMenu = this._onContextMenu.bind(this), this._onDoubleClick = this._onDoubleClick.bind(this), this._onDragOver = this._onDragOver.bind(this), this._onDragEnter = this._simpleEventHandler.bind(this, "dragenter"), this._onDragLeave = this._simpleEventHandler.bind(this, "dragleave"), this._onDrop = this._onDrop.bind(this), this.eventsBound = !0);
    }, _onGesture: function(A, i) {
      this.__onTransformGesture && this.__onTransformGesture(A, i);
    }, _onDrag: function(A, i) {
      this.__onDrag && this.__onDrag(A, i);
    }, _onMouseWheel: function(A) {
      this.__onMouseWheel(A);
    }, _onMouseOut: function(A) {
      var i = this._hoveredTarget;
      this.fire("mouse:out", { target: i, e: A }), this._hoveredTarget = null, i && i.fire("mouseout", { e: A });
      var n = this;
      this._hoveredTargets.forEach(function(h) {
        n.fire("mouse:out", { target: i, e: A }), h && i.fire("mouseout", { e: A });
      }), this._hoveredTargets = [];
    }, _onMouseEnter: function(A) {
      this._currentTransform || this.findTarget(A) || (this.fire("mouse:over", { target: null, e: A }), this._hoveredTarget = null, this._hoveredTargets = []);
    }, _onOrientationChange: function(A, i) {
      this.__onOrientationChange && this.__onOrientationChange(A, i);
    }, _onShake: function(A, i) {
      this.__onShake && this.__onShake(A, i);
    }, _onLongPress: function(A, i) {
      this.__onLongPress && this.__onLongPress(A, i);
    }, _onDragOver: function(A) {
      A.preventDefault();
      var i = this._simpleEventHandler("dragover", A);
      this._fireEnterLeaveEvents(i, A);
    }, _onDrop: function(A) {
      return this._simpleEventHandler("drop:before", A), this._simpleEventHandler("drop", A);
    }, _onContextMenu: function(A) {
      return this.stopContextMenu && (A.stopPropagation(), A.preventDefault()), !1;
    }, _onDoubleClick: function(A) {
      this._cacheTransformEventData(A), this._handleEvent(A, "dblclick"), this._resetTransformEventData(A);
    }, getPointerId: function(A) {
      var i = A.changedTouches;
      return i ? i[0] && i[0].identifier : this.enablePointerEvents ? A.pointerId : -1;
    }, _isMainEvent: function(A) {
      return A.isPrimary === !0 || A.isPrimary !== !1 && (A.type === "touchend" && A.touches.length === 0 || !A.changedTouches || A.changedTouches[0].identifier === this.mainTouchId);
    }, _onTouchStart: function(A) {
      A.preventDefault(), this.mainTouchId === null && (this.mainTouchId = this.getPointerId(A)), this.__onMouseDown(A), this._resetTransformEventData();
      var i = this.upperCanvasEl, n = this._getEventPrefix();
      u(B.document, "touchend", this._onTouchEnd, o), u(B.document, "touchmove", this._onMouseMove, o), s(i, n + "down", this._onMouseDown);
    }, _onMouseDown: function(A) {
      this.__onMouseDown(A), this._resetTransformEventData();
      var i = this.upperCanvasEl, n = this._getEventPrefix();
      s(i, n + "move", this._onMouseMove, o), u(B.document, n + "up", this._onMouseUp), u(B.document, n + "move", this._onMouseMove, o);
    }, _onTouchEnd: function(A) {
      if (!(A.touches.length > 0)) {
        this.__onMouseUp(A), this._resetTransformEventData(), this.mainTouchId = null;
        var i = this._getEventPrefix();
        s(B.document, "touchend", this._onTouchEnd, o), s(B.document, "touchmove", this._onMouseMove, o);
        var n = this;
        this._willAddMouseDown && clearTimeout(this._willAddMouseDown), this._willAddMouseDown = setTimeout(function() {
          u(n.upperCanvasEl, i + "down", n._onMouseDown), n._willAddMouseDown = 0;
        }, 400);
      }
    }, _onMouseUp: function(A) {
      this.__onMouseUp(A), this._resetTransformEventData();
      var i = this.upperCanvasEl, n = this._getEventPrefix();
      this._isMainEvent(A) && (s(B.document, n + "up", this._onMouseUp), s(B.document, n + "move", this._onMouseMove, o), u(i, n + "move", this._onMouseMove, o));
    }, _onMouseMove: function(A) {
      !this.allowTouchScrolling && A.preventDefault && A.preventDefault(), this.__onMouseMove(A);
    }, _onResize: function() {
      this.calcOffset();
    }, _shouldRender: function(A) {
      var i = this._activeObject;
      return !!(!!i != !!A || i && A && i !== A) || (i && i.isEditing, !1);
    }, __onMouseUp: function(A) {
      var i, n = this._currentTransform, h = this._groupSelector, c = !1, l = !h || h.left === 0 && h.top === 0;
      if (this._cacheTransformEventData(A), i = this._target, this._handleEvent(A, "up:before"), d(A, 3))
        this.fireRightClick && this._handleEvent(A, "up", 3, l);
      else {
        if (d(A, 2))
          return this.fireMiddleClick && this._handleEvent(A, "up", 2, l), void this._resetTransformEventData();
        if (this.isDrawingMode && this._isCurrentlyDrawing)
          this._onMouseUpInDrawingMode(A);
        else if (this._isMainEvent(A)) {
          if (n && (this._finalizeCurrentTransform(A), c = n.actionPerformed), !l) {
            var f = i === this._activeObject;
            this._maybeGroupObjects(A), c || (c = this._shouldRender(i) || !f && i === this._activeObject);
          }
          var m, v;
          if (i) {
            if (m = i._findTargetCorner(this.getPointer(A, !0), B.util.isTouchEvent(A)), i.selectable && i !== this._activeObject && i.activeOn === "up")
              this.setActiveObject(i, A), c = !0;
            else {
              var x = i.controls[m], U = x && x.getMouseUpHandler(A, i, x);
              U && U(A, n, (v = this.getPointer(A)).x, v.y);
            }
            i.isMoving = !1;
          }
          if (n && (n.target !== i || n.corner !== m)) {
            var F = n.target && n.target.controls[n.corner], k = F && F.getMouseUpHandler(A, i, x);
            v = v || this.getPointer(A), k && k(A, n, v.x, v.y);
          }
          this._setCursorFromEvent(A, i), this._handleEvent(A, "up", 1, l), this._groupSelector = null, this._currentTransform = null, i && (i.__corner = 0), c ? this.requestRenderAll() : l || this.renderTop();
        }
      }
    }, _simpleEventHandler: function(A, i) {
      var n = this.findTarget(i), h = this.targets, c = { e: i, target: n, subTargets: h };
      if (this.fire(A, c), n && n.fire(A, c), !h)
        return n;
      for (var l = 0; l < h.length; l++)
        h[l].fire(A, c);
      return n;
    }, _handleEvent: function(A, i, n, h) {
      var c = this._target, l = this.targets || [], f = { e: A, target: c, subTargets: l, button: n || 1, isClick: h || !1, pointer: this._pointer, absolutePointer: this._absolutePointer, transform: this._currentTransform };
      i === "up" && (f.currentTarget = this.findTarget(A), f.currentSubTargets = this.targets), this.fire("mouse:" + i, f), c && c.fire("mouse" + i, f);
      for (var m = 0; m < l.length; m++)
        l[m].fire("mouse" + i, f);
    }, _finalizeCurrentTransform: function(A) {
      var i = this._currentTransform, n = i.target, h = { e: A, target: n, transform: i, action: i.action };
      n._scaling && (n._scaling = !1), n.setCoords(), (i.actionPerformed || this.stateful && n.hasStateChanged()) && this._fire("modified", h);
    }, _onMouseDownInDrawingMode: function(A) {
      this._isCurrentlyDrawing = !0, this.getActiveObject() && this.discardActiveObject(A).requestRenderAll();
      var i = this.getPointer(A);
      this.freeDrawingBrush.onMouseDown(i, { e: A, pointer: i }), this._handleEvent(A, "down");
    }, _onMouseMoveInDrawingMode: function(A) {
      if (this._isCurrentlyDrawing) {
        var i = this.getPointer(A);
        this.freeDrawingBrush.onMouseMove(i, { e: A, pointer: i });
      }
      this.setCursor(this.freeDrawingCursor), this._handleEvent(A, "move");
    }, _onMouseUpInDrawingMode: function(A) {
      var i = this.getPointer(A);
      this._isCurrentlyDrawing = this.freeDrawingBrush.onMouseUp({ e: A, pointer: i }), this._handleEvent(A, "up");
    }, __onMouseDown: function(A) {
      this._cacheTransformEventData(A), this._handleEvent(A, "down:before");
      var i = this._target;
      if (d(A, 3))
        this.fireRightClick && this._handleEvent(A, "down", 3);
      else if (d(A, 2))
        this.fireMiddleClick && this._handleEvent(A, "down", 2);
      else if (this.isDrawingMode)
        this._onMouseDownInDrawingMode(A);
      else if (this._isMainEvent(A) && !this._currentTransform) {
        var n = this._pointer;
        this._previousPointer = n;
        var h = this._shouldRender(i), c = this._shouldGroup(A, i);
        if (this._shouldClearSelection(A, i) ? this.discardActiveObject(A) : c && (this._handleGrouping(A, i), i = this._activeObject), !this.selection || i && (i.selectable || i.isEditing || i === this._activeObject) || (this._groupSelector = { ex: this._absolutePointer.x, ey: this._absolutePointer.y, top: 0, left: 0 }), i) {
          var l = i === this._activeObject;
          i.selectable && i.activeOn === "down" && this.setActiveObject(i, A);
          var f = i._findTargetCorner(this.getPointer(A, !0), B.util.isTouchEvent(A));
          if (i.__corner = f, i === this._activeObject && (f || !c)) {
            this._setupCurrentTransform(A, i, l);
            var m = i.controls[f], v = (n = this.getPointer(A), m && m.getMouseDownHandler(A, i, m));
            v && v(A, this._currentTransform, n.x, n.y);
          }
        }
        this._handleEvent(A, "down"), (h || c) && this.requestRenderAll();
      }
    }, _resetTransformEventData: function() {
      this._target = null, this._pointer = null, this._absolutePointer = null;
    }, _cacheTransformEventData: function(A) {
      this._resetTransformEventData(), this._pointer = this.getPointer(A, !0), this._absolutePointer = this.restorePointerVpt(this._pointer), this._target = this._currentTransform ? this._currentTransform.target : this.findTarget(A) || null;
    }, _beforeTransform: function(A) {
      var i = this._currentTransform;
      this.stateful && i.target.saveState(), this.fire("before:transform", { e: A, transform: i });
    }, __onMouseMove: function(A) {
      var i, n;
      if (this._handleEvent(A, "move:before"), this._cacheTransformEventData(A), this.isDrawingMode)
        this._onMouseMoveInDrawingMode(A);
      else if (this._isMainEvent(A)) {
        var h = this._groupSelector;
        h ? (n = this._absolutePointer, h.left = n.x - h.ex, h.top = n.y - h.ey, this.renderTop()) : this._currentTransform ? this._transformObject(A) : (i = this.findTarget(A) || null, this._setCursorFromEvent(A, i), this._fireOverOutEvents(i, A)), this._handleEvent(A, "move"), this._resetTransformEventData();
      }
    }, _fireOverOutEvents: function(A, i) {
      var n = this._hoveredTarget, h = this._hoveredTargets, c = this.targets, l = Math.max(h.length, c.length);
      this.fireSyntheticInOutEvents(A, i, { oldTarget: n, evtOut: "mouseout", canvasEvtOut: "mouse:out", evtIn: "mouseover", canvasEvtIn: "mouse:over" });
      for (var f = 0; f < l; f++)
        this.fireSyntheticInOutEvents(c[f], i, { oldTarget: h[f], evtOut: "mouseout", evtIn: "mouseover" });
      this._hoveredTarget = A, this._hoveredTargets = this.targets.concat();
    }, _fireEnterLeaveEvents: function(A, i) {
      var n = this._draggedoverTarget, h = this._hoveredTargets, c = this.targets, l = Math.max(h.length, c.length);
      this.fireSyntheticInOutEvents(A, i, { oldTarget: n, evtOut: "dragleave", evtIn: "dragenter" });
      for (var f = 0; f < l; f++)
        this.fireSyntheticInOutEvents(c[f], i, { oldTarget: h[f], evtOut: "dragleave", evtIn: "dragenter" });
      this._draggedoverTarget = A;
    }, fireSyntheticInOutEvents: function(A, i, n) {
      var h, c, l, f = n.oldTarget, m = f !== A, v = n.canvasEvtIn, x = n.canvasEvtOut;
      m && (h = { e: i, target: A, previousTarget: f }, c = { e: i, target: f, nextTarget: A }), l = A && m, f && m && (x && this.fire(x, c), f.fire(n.evtOut, c)), l && (v && this.fire(v, h), A.fire(n.evtIn, h));
    }, __onMouseWheel: function(A) {
      this._cacheTransformEventData(A), this._handleEvent(A, "wheel"), this._resetTransformEventData();
    }, _transformObject: function(A) {
      var i = this.getPointer(A), n = this._currentTransform;
      n.reset = !1, n.shiftKey = A.shiftKey, n.altKey = A[this.centeredKey], this._performTransformAction(A, n, i), n.actionPerformed && this.requestRenderAll();
    }, _performTransformAction: function(A, i, n) {
      var h = n.x, c = n.y, l = i.action, f = !1, m = i.actionHandler;
      m && (f = m(A, i, h, c)), l === "drag" && f && (i.target.isMoving = !0, this.setCursor(i.target.moveCursor || this.moveCursor)), i.actionPerformed = i.actionPerformed || f;
    }, _fire: B.controlsUtils.fireEvent, _setCursorFromEvent: function(A, i) {
      if (!i)
        return this.setCursor(this.defaultCursor), !1;
      var n = i.hoverCursor || this.hoverCursor, h = this._activeObject && this._activeObject.type === "activeSelection" ? this._activeObject : null, c = (!h || !h.contains(i)) && i._findTargetCorner(this.getPointer(A, !0));
      c ? this.setCursor(this.getCornerCursor(c, i, A)) : (i.subTargetCheck && this.targets.concat().reverse().map(function(l) {
        n = l.hoverCursor || n;
      }), this.setCursor(n));
    }, getCornerCursor: function(A, i, n) {
      var h = i.controls[A];
      return h.cursorStyleHandler(n, h, i);
    } });
  }(), b = Math.min, E = Math.max, B.util.object.extend(B.Canvas.prototype, { _shouldGroup: function(u, s) {
    var o = this._activeObject;
    return o && this._isSelectionKeyPressed(u) && s && s.selectable && this.selection && (o !== s || o.type === "activeSelection") && !s.onSelect({ e: u });
  }, _handleGrouping: function(u, s) {
    var o = this._activeObject;
    o.__corner || (s !== o || (s = this.findTarget(u, !0)) && s.selectable) && (o && o.type === "activeSelection" ? this._updateActiveSelection(s, u) : this._createActiveSelection(s, u));
  }, _updateActiveSelection: function(u, s) {
    var o = this._activeObject, d = o._objects.slice(0);
    o.contains(u) ? (o.removeWithUpdate(u), this._hoveredTarget = u, this._hoveredTargets = this.targets.concat(), o.size() === 1 && this._setActiveObject(o.item(0), s)) : (o.addWithUpdate(u), this._hoveredTarget = o, this._hoveredTargets = this.targets.concat()), this._fireSelectionEvents(d, s);
  }, _createActiveSelection: function(u, s) {
    var o = this.getActiveObjects(), d = this._createGroup(u);
    this._hoveredTarget = d, this._setActiveObject(d, s), this._fireSelectionEvents(o, s);
  }, _createGroup: function(u) {
    var s = this._objects, o = s.indexOf(this._activeObject) < s.indexOf(u) ? [this._activeObject, u] : [u, this._activeObject];
    return this._activeObject.isEditing && this._activeObject.exitEditing(), new B.ActiveSelection(o, { canvas: this });
  }, _groupSelectedObjects: function(u) {
    var s, o = this._collectObjects(u);
    o.length === 1 ? this.setActiveObject(o[0], u) : o.length > 1 && (s = new B.ActiveSelection(o.reverse(), { canvas: this }), this.setActiveObject(s, u));
  }, _collectObjects: function(u) {
    for (var s, o = [], d = this._groupSelector.ex, A = this._groupSelector.ey, i = d + this._groupSelector.left, n = A + this._groupSelector.top, h = new B.Point(b(d, i), b(A, n)), c = new B.Point(E(d, i), E(A, n)), l = !this.selectionFullyContained, f = d === i && A === n, m = this._objects.length; m-- && !((s = this._objects[m]) && s.selectable && s.visible && (l && s.intersectsWithRect(h, c, !0) || s.isContainedWithinRect(h, c, !0) || l && s.containsPoint(h, null, !0) || l && s.containsPoint(c, null, !0)) && (o.push(s), f)); )
      ;
    return o.length > 1 && (o = o.filter(function(v) {
      return !v.onSelect({ e: u });
    })), o;
  }, _maybeGroupObjects: function(u) {
    this.selection && this._groupSelector && this._groupSelectedObjects(u), this.setCursor(this.defaultCursor), this._groupSelector = null;
  } }), B.util.object.extend(B.StaticCanvas.prototype, { toDataURL: function(u) {
    u || (u = {});
    var s = u.format || "png", o = u.quality || 1, d = (u.multiplier || 1) * (u.enableRetinaScaling ? this.getRetinaScaling() : 1), A = this.toCanvasElement(d, u);
    return B.util.toDataURL(A, s, o);
  }, toCanvasElement: function(u, s) {
    u = u || 1;
    var o = ((s = s || {}).width || this.width) * u, d = (s.height || this.height) * u, A = this.getZoom(), i = this.width, n = this.height, h = A * u, c = this.viewportTransform, l = (c[4] - (s.left || 0)) * u, f = (c[5] - (s.top || 0)) * u, m = this.interactive, v = [h, 0, 0, h, l, f], x = this.enableRetinaScaling, U = B.util.createCanvasElement(), F = this.contextTop;
    return U.width = o, U.height = d, this.contextTop = null, this.enableRetinaScaling = !1, this.interactive = !1, this.viewportTransform = v, this.width = o, this.height = d, this.calcViewportBoundaries(), this.renderCanvas(U.getContext("2d"), this._objects), this.viewportTransform = c, this.width = i, this.height = n, this.calcViewportBoundaries(), this.interactive = m, this.enableRetinaScaling = x, this.contextTop = F, U;
  } }), B.util.object.extend(B.StaticCanvas.prototype, { loadFromJSON: function(u, s, o) {
    if (u) {
      var d = typeof u == "string" ? JSON.parse(u) : B.util.object.clone(u), A = this, i = d.clipPath, n = this.renderOnAddRemove;
      return this.renderOnAddRemove = !1, delete d.clipPath, this._enlivenObjects(d.objects, function(h) {
        A.clear(), A._setBgOverlay(d, function() {
          i ? A._enlivenObjects([i], function(c) {
            A.clipPath = c[0], A.__setupCanvas.call(A, d, h, n, s);
          }) : A.__setupCanvas.call(A, d, h, n, s);
        });
      }, o), this;
    }
  }, __setupCanvas: function(u, s, o, d) {
    var A = this;
    s.forEach(function(i, n) {
      A.insertAt(i, n);
    }), this.renderOnAddRemove = o, delete u.objects, delete u.backgroundImage, delete u.overlayImage, delete u.background, delete u.overlay, this._setOptions(u), this.renderAll(), d && d();
  }, _setBgOverlay: function(u, s) {
    var o = { backgroundColor: !1, overlayColor: !1, backgroundImage: !1, overlayImage: !1 };
    if (u.backgroundImage || u.overlayImage || u.background || u.overlay) {
      var d = function() {
        o.backgroundImage && o.overlayImage && o.backgroundColor && o.overlayColor && s && s();
      };
      this.__setBgOverlay("backgroundImage", u.backgroundImage, o, d), this.__setBgOverlay("overlayImage", u.overlayImage, o, d), this.__setBgOverlay("backgroundColor", u.background, o, d), this.__setBgOverlay("overlayColor", u.overlay, o, d);
    } else
      s && s();
  }, __setBgOverlay: function(u, s, o, d) {
    var A = this;
    if (!s)
      return o[u] = !0, void (d && d());
    u === "backgroundImage" || u === "overlayImage" ? B.util.enlivenObjects([s], function(i) {
      A[u] = i[0], o[u] = !0, d && d();
    }) : this["set" + B.util.string.capitalize(u, !0)](s, function() {
      o[u] = !0, d && d();
    });
  }, _enlivenObjects: function(u, s, o) {
    u && u.length !== 0 ? B.util.enlivenObjects(u, function(d) {
      s && s(d);
    }, null, o) : s && s([]);
  }, _toDataURL: function(u, s) {
    this.clone(function(o) {
      s(o.toDataURL(u));
    });
  }, _toDataURLWithMultiplier: function(u, s, o) {
    this.clone(function(d) {
      o(d.toDataURLWithMultiplier(u, s));
    });
  }, clone: function(u, s) {
    var o = JSON.stringify(this.toJSON(s));
    this.cloneWithoutData(function(d) {
      d.loadFromJSON(o, function() {
        u && u(d);
      });
    });
  }, cloneWithoutData: function(u) {
    var s = B.util.createCanvasElement();
    s.width = this.width, s.height = this.height;
    var o = new B.Canvas(s);
    this.backgroundImage ? (o.setBackgroundImage(this.backgroundImage.src, function() {
      o.renderAll(), u && u(o);
    }), o.backgroundImageOpacity = this.backgroundImageOpacity, o.backgroundImageStretch = this.backgroundImageStretch) : u && u(o);
  } }), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.util.object.extend, d = s.util.object.clone, A = s.util.toFixed, i = s.util.string.capitalize, n = s.util.degreesToRadians, h = !s.isLikelyNode;
    s.Object || (s.Object = s.util.createClass(s.CommonMethods, { type: "object", originX: "left", originY: "top", top: 0, left: 0, width: 0, height: 0, scaleX: 1, scaleY: 1, flipX: !1, flipY: !1, opacity: 1, angle: 0, skewX: 0, skewY: 0, cornerSize: 13, touchCornerSize: 24, transparentCorners: !0, hoverCursor: null, moveCursor: null, padding: 0, borderColor: "rgb(178,204,255)", borderDashArray: null, cornerColor: "rgb(178,204,255)", cornerStrokeColor: null, cornerStyle: "rect", cornerDashArray: null, centeredScaling: !1, centeredRotation: !0, fill: "rgb(0,0,0)", fillRule: "nonzero", globalCompositeOperation: "source-over", backgroundColor: "", selectionBackgroundColor: "", stroke: null, strokeWidth: 1, strokeDashArray: null, strokeDashOffset: 0, strokeLineCap: "butt", strokeLineJoin: "miter", strokeMiterLimit: 4, shadow: null, borderOpacityWhenMoving: 0.4, borderScaleFactor: 1, minScaleLimit: 0, selectable: !0, evented: !0, visible: !0, hasControls: !0, hasBorders: !0, perPixelTargetFind: !1, includeDefaultValues: !0, lockMovementX: !1, lockMovementY: !1, lockRotation: !1, lockScalingX: !1, lockScalingY: !1, lockSkewingX: !1, lockSkewingY: !1, lockScalingFlip: !1, excludeFromExport: !1, objectCaching: h, statefullCache: !1, noScaleCache: !0, strokeUniform: !1, dirty: !0, __corner: 0, paintFirst: "fill", activeOn: "down", stateProperties: "top left width height scaleX scaleY flipX flipY originX originY transformMatrix stroke strokeWidth strokeDashArray strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit angle opacity fill globalCompositeOperation shadow visible backgroundColor skewX skewY fillRule paintFirst clipPath strokeUniform".split(" "), cacheProperties: "fill stroke strokeWidth strokeDashArray width height paintFirst strokeUniform strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit backgroundColor clipPath".split(" "), colorProperties: "fill stroke backgroundColor".split(" "), clipPath: void 0, inverted: !1, absolutePositioned: !1, initialize: function(c) {
      c && this.setOptions(c);
    }, _createCacheCanvas: function() {
      this._cacheProperties = {}, this._cacheCanvas = s.util.createCanvasElement(), this._cacheContext = this._cacheCanvas.getContext("2d"), this._updateCacheCanvas(), this.dirty = !0;
    }, _limitCacheSize: function(c) {
      var l = s.perfLimitSizeTotal, f = c.width, m = c.height, v = s.maxCacheSideLimit, x = s.minCacheSideLimit;
      if (f <= v && m <= v && f * m <= l)
        return f < x && (c.width = x), m < x && (c.height = x), c;
      var U = f / m, F = s.util.limitDimsByArea(U, l), k = s.util.capValue, O = k(x, F.x, v), P = k(x, F.y, v);
      return f > O && (c.zoomX /= f / O, c.width = O, c.capped = !0), m > P && (c.zoomY /= m / P, c.height = P, c.capped = !0), c;
    }, _getCacheCanvasDimensions: function() {
      var c = this.getTotalObjectScaling(), l = this._getTransformedDimensions(0, 0), f = l.x * c.scaleX / this.scaleX, m = l.y * c.scaleY / this.scaleY;
      return { width: f + 2, height: m + 2, zoomX: c.scaleX, zoomY: c.scaleY, x: f, y: m };
    }, _updateCacheCanvas: function() {
      var c = this.canvas;
      if (this.noScaleCache && c && c._currentTransform) {
        var l = c._currentTransform.target, f = c._currentTransform.action;
        if (this === l && f.slice && f.slice(0, 5) === "scale")
          return !1;
      }
      var m, v, x = this._cacheCanvas, U = this._limitCacheSize(this._getCacheCanvasDimensions()), F = s.minCacheSideLimit, k = U.width, O = U.height, P = U.zoomX, R = U.zoomY, Y = k !== this.cacheWidth || O !== this.cacheHeight, V = this.zoomX !== P || this.zoomY !== R, _ = Y || V, T = 0, M = 0, N = !1;
      if (Y) {
        var X = this._cacheCanvas.width, D = this._cacheCanvas.height, I = k > X || O > D;
        N = I || (k < 0.9 * X || O < 0.9 * D) && X > F && D > F, I && !U.capped && (k > F || O > F) && (T = 0.1 * k, M = 0.1 * O);
      }
      return this instanceof s.Text && this.path && (_ = !0, N = !0, T += this.getHeightOfLine(0) * this.zoomX, M += this.getHeightOfLine(0) * this.zoomY), !!_ && (N ? (x.width = Math.ceil(k + T), x.height = Math.ceil(O + M)) : (this._cacheContext.setTransform(1, 0, 0, 1, 0, 0), this._cacheContext.clearRect(0, 0, x.width, x.height)), m = U.x / 2, v = U.y / 2, this.cacheTranslationX = Math.round(x.width / 2 - m) + m, this.cacheTranslationY = Math.round(x.height / 2 - v) + v, this.cacheWidth = k, this.cacheHeight = O, this._cacheContext.translate(this.cacheTranslationX, this.cacheTranslationY), this._cacheContext.scale(P, R), this.zoomX = P, this.zoomY = R, !0);
    }, setOptions: function(c) {
      this._setOptions(c), this._initGradient(c.fill, "fill"), this._initGradient(c.stroke, "stroke"), this._initPattern(c.fill, "fill"), this._initPattern(c.stroke, "stroke");
    }, transform: function(c) {
      var l = this.group && !this.group._transformDone || this.group && this.canvas && c === this.canvas.contextTop, f = this.calcTransformMatrix(!l);
      c.transform(f[0], f[1], f[2], f[3], f[4], f[5]);
    }, toObject: function(c) {
      var l = s.Object.NUM_FRACTION_DIGITS, f = { type: this.type, version: s.version, originX: this.originX, originY: this.originY, left: A(this.left, l), top: A(this.top, l), width: A(this.width, l), height: A(this.height, l), fill: this.fill && this.fill.toObject ? this.fill.toObject() : this.fill, stroke: this.stroke && this.stroke.toObject ? this.stroke.toObject() : this.stroke, strokeWidth: A(this.strokeWidth, l), strokeDashArray: this.strokeDashArray ? this.strokeDashArray.concat() : this.strokeDashArray, strokeLineCap: this.strokeLineCap, strokeDashOffset: this.strokeDashOffset, strokeLineJoin: this.strokeLineJoin, strokeUniform: this.strokeUniform, strokeMiterLimit: A(this.strokeMiterLimit, l), scaleX: A(this.scaleX, l), scaleY: A(this.scaleY, l), angle: A(this.angle, l), flipX: this.flipX, flipY: this.flipY, opacity: A(this.opacity, l), shadow: this.shadow && this.shadow.toObject ? this.shadow.toObject() : this.shadow, visible: this.visible, backgroundColor: this.backgroundColor, fillRule: this.fillRule, paintFirst: this.paintFirst, globalCompositeOperation: this.globalCompositeOperation, skewX: A(this.skewX, l), skewY: A(this.skewY, l) };
      return this.clipPath && !this.clipPath.excludeFromExport && (f.clipPath = this.clipPath.toObject(c), f.clipPath.inverted = this.clipPath.inverted, f.clipPath.absolutePositioned = this.clipPath.absolutePositioned), s.util.populateWithProperties(this, f, c), this.includeDefaultValues || (f = this._removeDefaultValues(f)), f;
    }, toDatalessObject: function(c) {
      return this.toObject(c);
    }, _removeDefaultValues: function(c) {
      var l = s.util.getKlass(c.type).prototype;
      return l.stateProperties.forEach(function(f) {
        f !== "left" && f !== "top" && (c[f] === l[f] && delete c[f], Array.isArray(c[f]) && Array.isArray(l[f]) && c[f].length === 0 && l[f].length === 0 && delete c[f]);
      }), c;
    }, toString: function() {
      return "#<fabric." + i(this.type) + ">";
    }, getObjectScaling: function() {
      if (!this.group)
        return { scaleX: this.scaleX, scaleY: this.scaleY };
      var c = s.util.qrDecompose(this.calcTransformMatrix());
      return { scaleX: Math.abs(c.scaleX), scaleY: Math.abs(c.scaleY) };
    }, getTotalObjectScaling: function() {
      var c = this.getObjectScaling(), l = c.scaleX, f = c.scaleY;
      if (this.canvas) {
        var m = this.canvas.getZoom(), v = this.canvas.getRetinaScaling();
        l *= m * v, f *= m * v;
      }
      return { scaleX: l, scaleY: f };
    }, getObjectOpacity: function() {
      var c = this.opacity;
      return this.group && (c *= this.group.getObjectOpacity()), c;
    }, _set: function(c, l) {
      var f = c === "scaleX" || c === "scaleY", m = this[c] !== l, v = !1;
      return f && (l = this._constrainScale(l)), c === "scaleX" && l < 0 ? (this.flipX = !this.flipX, l *= -1) : c === "scaleY" && l < 0 ? (this.flipY = !this.flipY, l *= -1) : c !== "shadow" || !l || l instanceof s.Shadow ? c === "dirty" && this.group && this.group.set("dirty", l) : l = new s.Shadow(l), this[c] = l, m && (v = this.group && this.group.isOnACache(), this.cacheProperties.indexOf(c) > -1 ? (this.dirty = !0, v && this.group.set("dirty", !0)) : v && this.stateProperties.indexOf(c) > -1 && this.group.set("dirty", !0)), this;
    }, setOnGroup: function() {
    }, getViewportTransform: function() {
      return this.canvas && this.canvas.viewportTransform ? this.canvas.viewportTransform : s.iMatrix.concat();
    }, isNotVisible: function() {
      return this.opacity === 0 || !this.width && !this.height && this.strokeWidth === 0 || !this.visible;
    }, render: function(c) {
      this.isNotVisible() || this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (c.save(), this._setupCompositeOperation(c), this.drawSelectionBackground(c), this.transform(c), this._setOpacity(c), this._setShadow(c, this), this.shouldCache() ? (this.renderCache(), this.drawCacheOnCanvas(c)) : (this._removeCacheCanvas(), this.dirty = !1, this.drawObject(c), this.objectCaching && this.statefullCache && this.saveState({ propertySet: "cacheProperties" })), c.restore());
    }, renderCache: function(c) {
      c = c || {}, this._cacheCanvas && this._cacheContext || this._createCacheCanvas(), this.isCacheDirty() && (this.statefullCache && this.saveState({ propertySet: "cacheProperties" }), this.drawObject(this._cacheContext, c.forClipping), this.dirty = !1);
    }, _removeCacheCanvas: function() {
      this._cacheCanvas = null, this._cacheContext = null, this.cacheWidth = 0, this.cacheHeight = 0;
    }, hasStroke: function() {
      return this.stroke && this.stroke !== "transparent" && this.strokeWidth !== 0;
    }, hasFill: function() {
      return this.fill && this.fill !== "transparent";
    }, needsItsOwnCache: function() {
      return !(this.paintFirst !== "stroke" || !this.hasFill() || !this.hasStroke() || typeof this.shadow != "object") || !!this.clipPath;
    }, shouldCache: function() {
      return this.ownCaching = this.needsItsOwnCache() || this.objectCaching && (!this.group || !this.group.isOnACache()), this.ownCaching;
    }, willDrawShadow: function() {
      return !!this.shadow && (this.shadow.offsetX !== 0 || this.shadow.offsetY !== 0);
    }, drawClipPathOnCache: function(c, l) {
      if (c.save(), l.inverted ? c.globalCompositeOperation = "destination-out" : c.globalCompositeOperation = "destination-in", l.absolutePositioned) {
        var f = s.util.invertTransform(this.calcTransformMatrix());
        c.transform(f[0], f[1], f[2], f[3], f[4], f[5]);
      }
      l.transform(c), c.scale(1 / l.zoomX, 1 / l.zoomY), c.drawImage(l._cacheCanvas, -l.cacheTranslationX, -l.cacheTranslationY), c.restore();
    }, drawObject: function(c, l) {
      var f = this.fill, m = this.stroke;
      l ? (this.fill = "black", this.stroke = "", this._setClippingProperties(c)) : this._renderBackground(c), this._render(c), this._drawClipPath(c, this.clipPath), this.fill = f, this.stroke = m;
    }, _drawClipPath: function(c, l) {
      l && (l.canvas = this.canvas, l.shouldCache(), l._transformDone = !0, l.renderCache({ forClipping: !0 }), this.drawClipPathOnCache(c, l));
    }, drawCacheOnCanvas: function(c) {
      c.scale(1 / this.zoomX, 1 / this.zoomY), c.drawImage(this._cacheCanvas, -this.cacheTranslationX, -this.cacheTranslationY);
    }, isCacheDirty: function(c) {
      if (this.isNotVisible())
        return !1;
      if (this._cacheCanvas && this._cacheContext && !c && this._updateCacheCanvas())
        return !0;
      if (this.dirty || this.clipPath && this.clipPath.absolutePositioned || this.statefullCache && this.hasStateChanged("cacheProperties")) {
        if (this._cacheCanvas && this._cacheContext && !c) {
          var l = this.cacheWidth / this.zoomX, f = this.cacheHeight / this.zoomY;
          this._cacheContext.clearRect(-l / 2, -f / 2, l, f);
        }
        return !0;
      }
      return !1;
    }, _renderBackground: function(c) {
      if (this.backgroundColor) {
        var l = this._getNonTransformedDimensions();
        c.fillStyle = this.backgroundColor, c.fillRect(-l.x / 2, -l.y / 2, l.x, l.y), this._removeShadow(c);
      }
    }, _setOpacity: function(c) {
      this.group && !this.group._transformDone ? c.globalAlpha = this.getObjectOpacity() : c.globalAlpha *= this.opacity;
    }, _setStrokeStyles: function(c, l) {
      var f = l.stroke;
      f && (c.lineWidth = l.strokeWidth, c.lineCap = l.strokeLineCap, c.lineDashOffset = l.strokeDashOffset, c.lineJoin = l.strokeLineJoin, c.miterLimit = l.strokeMiterLimit, f.toLive ? f.gradientUnits === "percentage" || f.gradientTransform || f.patternTransform ? this._applyPatternForTransformedGradient(c, f) : (c.strokeStyle = f.toLive(c, this), this._applyPatternGradientTransform(c, f)) : c.strokeStyle = l.stroke);
    }, _setFillStyles: function(c, l) {
      var f = l.fill;
      f && (f.toLive ? (c.fillStyle = f.toLive(c, this), this._applyPatternGradientTransform(c, l.fill)) : c.fillStyle = f);
    }, _setClippingProperties: function(c) {
      c.globalAlpha = 1, c.strokeStyle = "transparent", c.fillStyle = "#000000";
    }, _setLineDash: function(c, l) {
      l && l.length !== 0 && (1 & l.length && l.push.apply(l, l), c.setLineDash(l));
    }, _renderControls: function(c, l) {
      var f, m, v, x = this.getViewportTransform(), U = this.calcTransformMatrix();
      m = (l = l || {}).hasBorders !== void 0 ? l.hasBorders : this.hasBorders, v = l.hasControls !== void 0 ? l.hasControls : this.hasControls, U = s.util.multiplyTransformMatrices(x, U), f = s.util.qrDecompose(U), c.save(), c.translate(f.translateX, f.translateY), c.lineWidth = 1 * this.borderScaleFactor, this.group || (c.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1), this.flipX && (f.angle -= 180), c.rotate(n(this.group ? f.angle : this.angle)), l.forActiveSelection || this.group ? m && this.drawBordersInGroup(c, f, l) : m && this.drawBorders(c, l), v && this.drawControls(c, l), c.restore();
    }, _setShadow: function(c) {
      if (this.shadow) {
        var l, f = this.shadow, m = this.canvas, v = m && m.viewportTransform[0] || 1, x = m && m.viewportTransform[3] || 1;
        l = f.nonScaling ? { scaleX: 1, scaleY: 1 } : this.getObjectScaling(), m && m._isRetinaScaling() && (v *= s.devicePixelRatio, x *= s.devicePixelRatio), c.shadowColor = f.color, c.shadowBlur = f.blur * s.browserShadowBlurConstant * (v + x) * (l.scaleX + l.scaleY) / 4, c.shadowOffsetX = f.offsetX * v * l.scaleX, c.shadowOffsetY = f.offsetY * x * l.scaleY;
      }
    }, _removeShadow: function(c) {
      this.shadow && (c.shadowColor = "", c.shadowBlur = c.shadowOffsetX = c.shadowOffsetY = 0);
    }, _applyPatternGradientTransform: function(c, l) {
      if (!l || !l.toLive)
        return { offsetX: 0, offsetY: 0 };
      var f = l.gradientTransform || l.patternTransform, m = -this.width / 2 + l.offsetX || 0, v = -this.height / 2 + l.offsetY || 0;
      return l.gradientUnits === "percentage" ? c.transform(this.width, 0, 0, this.height, m, v) : c.transform(1, 0, 0, 1, m, v), f && c.transform(f[0], f[1], f[2], f[3], f[4], f[5]), { offsetX: m, offsetY: v };
    }, _renderPaintInOrder: function(c) {
      this.paintFirst === "stroke" ? (this._renderStroke(c), this._renderFill(c)) : (this._renderFill(c), this._renderStroke(c));
    }, _render: function() {
    }, _renderFill: function(c) {
      this.fill && (c.save(), this._setFillStyles(c, this), this.fillRule === "evenodd" ? c.fill("evenodd") : c.fill(), c.restore());
    }, _renderStroke: function(c) {
      if (this.stroke && this.strokeWidth !== 0) {
        if (this.shadow && !this.shadow.affectStroke && this._removeShadow(c), c.save(), this.strokeUniform && this.group) {
          var l = this.getObjectScaling();
          c.scale(1 / l.scaleX, 1 / l.scaleY);
        } else
          this.strokeUniform && c.scale(1 / this.scaleX, 1 / this.scaleY);
        this._setLineDash(c, this.strokeDashArray), this._setStrokeStyles(c, this), c.stroke(), c.restore();
      }
    }, _applyPatternForTransformedGradient: function(c, l) {
      var f, m = this._limitCacheSize(this._getCacheCanvasDimensions()), v = s.util.createCanvasElement(), x = this.canvas.getRetinaScaling(), U = m.x / this.scaleX / x, F = m.y / this.scaleY / x;
      v.width = U, v.height = F, (f = v.getContext("2d")).beginPath(), f.moveTo(0, 0), f.lineTo(U, 0), f.lineTo(U, F), f.lineTo(0, F), f.closePath(), f.translate(U / 2, F / 2), f.scale(m.zoomX / this.scaleX / x, m.zoomY / this.scaleY / x), this._applyPatternGradientTransform(f, l), f.fillStyle = l.toLive(c), f.fill(), c.translate(-this.width / 2 - this.strokeWidth / 2, -this.height / 2 - this.strokeWidth / 2), c.scale(x * this.scaleX / m.zoomX, x * this.scaleY / m.zoomY), c.strokeStyle = f.createPattern(v, "no-repeat");
    }, _findCenterFromElement: function() {
      return { x: this.left + this.width / 2, y: this.top + this.height / 2 };
    }, _assignTransformMatrixProps: function() {
      if (this.transformMatrix) {
        var c = s.util.qrDecompose(this.transformMatrix);
        this.flipX = !1, this.flipY = !1, this.set("scaleX", c.scaleX), this.set("scaleY", c.scaleY), this.angle = c.angle, this.skewX = c.skewX, this.skewY = 0;
      }
    }, _removeTransformMatrix: function(c) {
      var l = this._findCenterFromElement();
      this.transformMatrix && (this._assignTransformMatrixProps(), l = s.util.transformPoint(l, this.transformMatrix)), this.transformMatrix = null, c && (this.scaleX *= c.scaleX, this.scaleY *= c.scaleY, this.cropX = c.cropX, this.cropY = c.cropY, l.x += c.offsetLeft, l.y += c.offsetTop, this.width = c.width, this.height = c.height), this.setPositionByOrigin(l, "center", "center");
    }, clone: function(c, l) {
      var f = this.toObject(l);
      this.constructor.fromObject ? this.constructor.fromObject(f, c) : s.Object._fromObject("Object", f, c);
    }, cloneAsImage: function(c, l) {
      var f = this.toCanvasElement(l);
      return c && c(new s.Image(f)), this;
    }, toCanvasElement: function(c) {
      c || (c = {});
      var l = s.util, f = l.saveObjectTransform(this), m = this.group, v = this.shadow, x = Math.abs, U = (c.multiplier || 1) * (c.enableRetinaScaling ? s.devicePixelRatio : 1);
      delete this.group, c.withoutTransform && l.resetObjectTransform(this), c.withoutShadow && (this.shadow = null);
      var F, k, O, P, R = s.util.createCanvasElement(), Y = this.getBoundingRect(!0, !0), V = this.shadow, _ = { x: 0, y: 0 };
      V && (k = V.blur, F = V.nonScaling ? { scaleX: 1, scaleY: 1 } : this.getObjectScaling(), _.x = 2 * Math.round(x(V.offsetX) + k) * x(F.scaleX), _.y = 2 * Math.round(x(V.offsetY) + k) * x(F.scaleY)), O = Y.width + _.x, P = Y.height + _.y, R.width = Math.ceil(O), R.height = Math.ceil(P);
      var T = new s.StaticCanvas(R, { enableRetinaScaling: !1, renderOnAddRemove: !1, skipOffscreen: !1 });
      c.format === "jpeg" && (T.backgroundColor = "#fff"), this.setPositionByOrigin(new s.Point(T.width / 2, T.height / 2), "center", "center");
      var M = this.canvas;
      T.add(this);
      var N = T.toCanvasElement(U || 1, c);
      return this.shadow = v, this.set("canvas", M), m && (this.group = m), this.set(f).setCoords(), T._objects = [], T.dispose(), T = null, N;
    }, toDataURL: function(c) {
      return c || (c = {}), s.util.toDataURL(this.toCanvasElement(c), c.format || "png", c.quality || 1);
    }, isType: function(c) {
      return arguments.length > 1 ? Array.from(arguments).includes(this.type) : this.type === c;
    }, complexity: function() {
      return 1;
    }, toJSON: function(c) {
      return this.toObject(c);
    }, rotate: function(c) {
      var l = (this.originX !== "center" || this.originY !== "center") && this.centeredRotation;
      return l && this._setOriginToCenter(), this.set("angle", c), l && this._resetOrigin(), this;
    }, centerH: function() {
      return this.canvas && this.canvas.centerObjectH(this), this;
    }, viewportCenterH: function() {
      return this.canvas && this.canvas.viewportCenterObjectH(this), this;
    }, centerV: function() {
      return this.canvas && this.canvas.centerObjectV(this), this;
    }, viewportCenterV: function() {
      return this.canvas && this.canvas.viewportCenterObjectV(this), this;
    }, center: function() {
      return this.canvas && this.canvas.centerObject(this), this;
    }, viewportCenter: function() {
      return this.canvas && this.canvas.viewportCenterObject(this), this;
    }, getLocalPointer: function(c, l) {
      l = l || this.canvas.getPointer(c);
      var f = new s.Point(l.x, l.y), m = this._getLeftTopCoords();
      return this.angle && (f = s.util.rotatePoint(f, m, n(-this.angle))), { x: f.x - m.x, y: f.y - m.y };
    }, _setupCompositeOperation: function(c) {
      this.globalCompositeOperation && (c.globalCompositeOperation = this.globalCompositeOperation);
    }, dispose: function() {
      s.runningAnimations && s.runningAnimations.cancelByTarget(this);
    } }), s.util.createAccessors && s.util.createAccessors(s.Object), o(s.Object.prototype, s.Observable), s.Object.NUM_FRACTION_DIGITS = 2, s.Object.ENLIVEN_PROPS = ["clipPath"], s.Object._fromObject = function(c, l, f, m) {
      var v = s[c];
      l = d(l, !0), s.util.enlivenPatterns([l.fill, l.stroke], function(x) {
        x[0] !== void 0 && (l.fill = x[0]), x[1] !== void 0 && (l.stroke = x[1]), s.util.enlivenObjectEnlivables(l, l, function() {
          var U = m ? new v(l[m], l) : new v(l);
          f && f(U);
        });
      });
    }, s.Object.__uid = 0);
  }(e), S = B.util.degreesToRadians, L = { left: -0.5, center: 0, right: 0.5 }, H = { top: -0.5, center: 0, bottom: 0.5 }, B.util.object.extend(B.Object.prototype, { translateToGivenOrigin: function(u, s, o, d, A) {
    var i, n, h, c = u.x, l = u.y;
    return typeof s == "string" ? s = L[s] : s -= 0.5, typeof d == "string" ? d = L[d] : d -= 0.5, typeof o == "string" ? o = H[o] : o -= 0.5, typeof A == "string" ? A = H[A] : A -= 0.5, n = A - o, ((i = d - s) || n) && (h = this._getTransformedDimensions(), c = u.x + i * h.x, l = u.y + n * h.y), new B.Point(c, l);
  }, translateToCenterPoint: function(u, s, o) {
    var d = this.translateToGivenOrigin(u, s, o, "center", "center");
    return this.angle ? B.util.rotatePoint(d, u, S(this.angle)) : d;
  }, translateToOriginPoint: function(u, s, o) {
    var d = this.translateToGivenOrigin(u, "center", "center", s, o);
    return this.angle ? B.util.rotatePoint(d, u, S(this.angle)) : d;
  }, getCenterPoint: function() {
    var u = new B.Point(this.left, this.top);
    return this.translateToCenterPoint(u, this.originX, this.originY);
  }, getPointByOrigin: function(u, s) {
    var o = this.getCenterPoint();
    return this.translateToOriginPoint(o, u, s);
  }, toLocalPoint: function(u, s, o) {
    var d, A, i = this.getCenterPoint();
    return d = s !== void 0 && o !== void 0 ? this.translateToGivenOrigin(i, "center", "center", s, o) : new B.Point(this.left, this.top), A = new B.Point(u.x, u.y), this.angle && (A = B.util.rotatePoint(A, i, -S(this.angle))), A.subtractEquals(d);
  }, setPositionByOrigin: function(u, s, o) {
    var d = this.translateToCenterPoint(u, s, o), A = this.translateToOriginPoint(d, this.originX, this.originY);
    this.set("left", A.x), this.set("top", A.y);
  }, adjustPosition: function(u) {
    var s, o, d = S(this.angle), A = this.getScaledWidth(), i = B.util.cos(d) * A, n = B.util.sin(d) * A;
    s = typeof this.originX == "string" ? L[this.originX] : this.originX - 0.5, o = typeof u == "string" ? L[u] : u - 0.5, this.left += i * (o - s), this.top += n * (o - s), this.setCoords(), this.originX = u;
  }, _setOriginToCenter: function() {
    this._originalOriginX = this.originX, this._originalOriginY = this.originY;
    var u = this.getCenterPoint();
    this.originX = "center", this.originY = "center", this.left = u.x, this.top = u.y;
  }, _resetOrigin: function() {
    var u = this.translateToOriginPoint(this.getCenterPoint(), this._originalOriginX, this._originalOriginY);
    this.originX = this._originalOriginX, this.originY = this._originalOriginY, this.left = u.x, this.top = u.y, this._originalOriginX = null, this._originalOriginY = null;
  }, _getLeftTopCoords: function() {
    return this.translateToOriginPoint(this.getCenterPoint(), "left", "top");
  } }), function() {
    var u = B.util, s = u.degreesToRadians, o = u.multiplyTransformMatrices, d = u.transformPoint;
    u.object.extend(B.Object.prototype, { oCoords: null, aCoords: null, lineCoords: null, ownMatrixCache: null, matrixCache: null, controls: {}, _getCoords: function(A, i) {
      return i ? A ? this.calcACoords() : this.calcLineCoords() : (this.aCoords && this.lineCoords || this.setCoords(!0), A ? this.aCoords : this.lineCoords);
    }, getCoords: function(A, i) {
      return n = this._getCoords(A, i), [new B.Point(n.tl.x, n.tl.y), new B.Point(n.tr.x, n.tr.y), new B.Point(n.br.x, n.br.y), new B.Point(n.bl.x, n.bl.y)];
      var n;
    }, intersectsWithRect: function(A, i, n, h) {
      var c = this.getCoords(n, h);
      return B.Intersection.intersectPolygonRectangle(c, A, i).status === "Intersection";
    }, intersectsWithObject: function(A, i, n) {
      return B.Intersection.intersectPolygonPolygon(this.getCoords(i, n), A.getCoords(i, n)).status === "Intersection" || A.isContainedWithinObject(this, i, n) || this.isContainedWithinObject(A, i, n);
    }, isContainedWithinObject: function(A, i, n) {
      for (var h = this.getCoords(i, n), c = i ? A.aCoords : A.lineCoords, l = 0, f = A._getImageLines(c); l < 4; l++)
        if (!A.containsPoint(h[l], f))
          return !1;
      return !0;
    }, isContainedWithinRect: function(A, i, n, h) {
      var c = this.getBoundingRect(n, h);
      return c.left >= A.x && c.left + c.width <= i.x && c.top >= A.y && c.top + c.height <= i.y;
    }, containsPoint: function(A, i, n, h) {
      var c = this._getCoords(n, h), l = (i = i || this._getImageLines(c), this._findCrossPoints(A, i));
      return l !== 0 && l % 2 == 1;
    }, isOnScreen: function(A) {
      if (!this.canvas)
        return !1;
      var i = this.canvas.vptCoords.tl, n = this.canvas.vptCoords.br;
      return !!this.getCoords(!0, A).some(function(h) {
        return h.x <= n.x && h.x >= i.x && h.y <= n.y && h.y >= i.y;
      }) || !!this.intersectsWithRect(i, n, !0, A) || this._containsCenterOfCanvas(i, n, A);
    }, _containsCenterOfCanvas: function(A, i, n) {
      var h = { x: (A.x + i.x) / 2, y: (A.y + i.y) / 2 };
      return !!this.containsPoint(h, null, !0, n);
    }, isPartiallyOnScreen: function(A) {
      if (!this.canvas)
        return !1;
      var i = this.canvas.vptCoords.tl, n = this.canvas.vptCoords.br;
      return !!this.intersectsWithRect(i, n, !0, A) || this.getCoords(!0, A).every(function(h) {
        return (h.x >= n.x || h.x <= i.x) && (h.y >= n.y || h.y <= i.y);
      }) && this._containsCenterOfCanvas(i, n, A);
    }, _getImageLines: function(A) {
      return { topline: { o: A.tl, d: A.tr }, rightline: { o: A.tr, d: A.br }, bottomline: { o: A.br, d: A.bl }, leftline: { o: A.bl, d: A.tl } };
    }, _findCrossPoints: function(A, i) {
      var n, h, c, l = 0;
      for (var f in i)
        if (!((c = i[f]).o.y < A.y && c.d.y < A.y || c.o.y >= A.y && c.d.y >= A.y || (c.o.x === c.d.x && c.o.x >= A.x ? h = c.o.x : (n = (c.d.y - c.o.y) / (c.d.x - c.o.x), h = -(A.y - 0 * A.x - (c.o.y - n * c.o.x)) / (0 - n)), h >= A.x && (l += 1), l !== 2)))
          break;
      return l;
    }, getBoundingRect: function(A, i) {
      var n = this.getCoords(A, i);
      return u.makeBoundingBoxFromPoints(n);
    }, getScaledWidth: function() {
      return this._getTransformedDimensions().x;
    }, getScaledHeight: function() {
      return this._getTransformedDimensions().y;
    }, _constrainScale: function(A) {
      return Math.abs(A) < this.minScaleLimit ? A < 0 ? -this.minScaleLimit : this.minScaleLimit : A === 0 ? 1e-4 : A;
    }, scale: function(A) {
      return this._set("scaleX", A), this._set("scaleY", A), this.setCoords();
    }, scaleToWidth: function(A, i) {
      var n = this.getBoundingRect(i).width / this.getScaledWidth();
      return this.scale(A / this.width / n);
    }, scaleToHeight: function(A, i) {
      var n = this.getBoundingRect(i).height / this.getScaledHeight();
      return this.scale(A / this.height / n);
    }, calcLineCoords: function() {
      var A = this.getViewportTransform(), i = this.padding, n = s(this.angle), h = u.cos(n) * i, c = u.sin(n) * i, l = h + c, f = h - c, m = this.calcACoords(), v = { tl: d(m.tl, A), tr: d(m.tr, A), bl: d(m.bl, A), br: d(m.br, A) };
      return i && (v.tl.x -= f, v.tl.y -= l, v.tr.x += l, v.tr.y -= f, v.bl.x -= l, v.bl.y += f, v.br.x += f, v.br.y += l), v;
    }, calcOCoords: function() {
      var A = this._calcRotateMatrix(), i = this._calcTranslateMatrix(), n = this.getViewportTransform(), h = o(n, i), c = o(h, A), l = (c = o(c, [1 / n[0], 0, 0, 1 / n[3], 0, 0]), this._calculateCurrentDimensions()), f = {};
      return this.forEachControl(function(m, v, x) {
        f[v] = m.positionHandler(l, c, x);
      }), f;
    }, calcACoords: function() {
      var A = this._calcRotateMatrix(), i = this._calcTranslateMatrix(), n = o(i, A), h = this._getTransformedDimensions(), c = h.x / 2, l = h.y / 2;
      return { tl: d({ x: -c, y: -l }, n), tr: d({ x: c, y: -l }, n), bl: d({ x: -c, y: l }, n), br: d({ x: c, y: l }, n) };
    }, setCoords: function(A) {
      return this.aCoords = this.calcACoords(), this.lineCoords = this.group ? this.aCoords : this.calcLineCoords(), A || (this.oCoords = this.calcOCoords(), this._setCornerCoords && this._setCornerCoords()), this;
    }, _calcRotateMatrix: function() {
      return u.calcRotateMatrix(this);
    }, _calcTranslateMatrix: function() {
      var A = this.getCenterPoint();
      return [1, 0, 0, 1, A.x, A.y];
    }, transformMatrixKey: function(A) {
      var i = "_", n = "";
      return !A && this.group && (n = this.group.transformMatrixKey(A) + i), n + this.top + i + this.left + i + this.scaleX + i + this.scaleY + i + this.skewX + i + this.skewY + i + this.angle + i + this.originX + i + this.originY + i + this.width + i + this.height + i + this.strokeWidth + this.flipX + this.flipY;
    }, calcTransformMatrix: function(A) {
      var i = this.calcOwnMatrix();
      if (A || !this.group)
        return i;
      var n = this.transformMatrixKey(A), h = this.matrixCache || (this.matrixCache = {});
      return h.key === n ? h.value : (this.group && (i = o(this.group.calcTransformMatrix(!1), i)), h.key = n, h.value = i, i);
    }, calcOwnMatrix: function() {
      var A = this.transformMatrixKey(!0), i = this.ownMatrixCache || (this.ownMatrixCache = {});
      if (i.key === A)
        return i.value;
      var n = this._calcTranslateMatrix(), h = { angle: this.angle, translateX: n[4], translateY: n[5], scaleX: this.scaleX, scaleY: this.scaleY, skewX: this.skewX, skewY: this.skewY, flipX: this.flipX, flipY: this.flipY };
      return i.key = A, i.value = u.composeMatrix(h), i.value;
    }, _getNonTransformedDimensions: function() {
      var A = this.strokeWidth;
      return { x: this.width + A, y: this.height + A };
    }, _getTransformedDimensions: function(A, i) {
      A === void 0 && (A = this.skewX), i === void 0 && (i = this.skewY);
      var n, h, c, l = A === 0 && i === 0;
      if (this.strokeUniform ? (h = this.width, c = this.height) : (h = (n = this._getNonTransformedDimensions()).x, c = n.y), l)
        return this._finalizeDimensions(h * this.scaleX, c * this.scaleY);
      var f = u.sizeAfterTransform(h, c, { scaleX: this.scaleX, scaleY: this.scaleY, skewX: A, skewY: i });
      return this._finalizeDimensions(f.x, f.y);
    }, _finalizeDimensions: function(A, i) {
      return this.strokeUniform ? { x: A + this.strokeWidth, y: i + this.strokeWidth } : { x: A, y: i };
    }, _calculateCurrentDimensions: function() {
      var A = this.getViewportTransform(), i = this._getTransformedDimensions();
      return d(i, A, !0).scalarAdd(2 * this.padding);
    } });
  }(), B.util.object.extend(B.Object.prototype, { sendToBack: function() {
    return this.group ? B.StaticCanvas.prototype.sendToBack.call(this.group, this) : this.canvas && this.canvas.sendToBack(this), this;
  }, bringToFront: function() {
    return this.group ? B.StaticCanvas.prototype.bringToFront.call(this.group, this) : this.canvas && this.canvas.bringToFront(this), this;
  }, sendBackwards: function(u) {
    return this.group ? B.StaticCanvas.prototype.sendBackwards.call(this.group, this, u) : this.canvas && this.canvas.sendBackwards(this, u), this;
  }, bringForward: function(u) {
    return this.group ? B.StaticCanvas.prototype.bringForward.call(this.group, this, u) : this.canvas && this.canvas.bringForward(this, u), this;
  }, moveTo: function(u) {
    return this.group && this.group.type !== "activeSelection" ? B.StaticCanvas.prototype.moveTo.call(this.group, this, u) : this.canvas && this.canvas.moveTo(this, u), this;
  } }), function() {
    function u(o, d) {
      if (d) {
        if (d.toLive)
          return o + ": url(#SVGID_" + d.id + "); ";
        var A = new B.Color(d), i = o + ": " + A.toRgb() + "; ", n = A.getAlpha();
        return n !== 1 && (i += o + "-opacity: " + n.toString() + "; "), i;
      }
      return o + ": none; ";
    }
    var s = B.util.toFixed;
    B.util.object.extend(B.Object.prototype, { getSvgStyles: function(o) {
      var d = this.fillRule ? this.fillRule : "nonzero", A = this.strokeWidth ? this.strokeWidth : "0", i = this.strokeDashArray ? this.strokeDashArray.join(" ") : "none", n = this.strokeDashOffset ? this.strokeDashOffset : "0", h = this.strokeLineCap ? this.strokeLineCap : "butt", c = this.strokeLineJoin ? this.strokeLineJoin : "miter", l = this.strokeMiterLimit ? this.strokeMiterLimit : "4", f = this.opacity !== void 0 ? this.opacity : "1", m = this.visible ? "" : " visibility: hidden;", v = o ? "" : this.getSvgFilter(), x = u("fill", this.fill);
      return [u("stroke", this.stroke), "stroke-width: ", A, "; ", "stroke-dasharray: ", i, "; ", "stroke-linecap: ", h, "; ", "stroke-dashoffset: ", n, "; ", "stroke-linejoin: ", c, "; ", "stroke-miterlimit: ", l, "; ", x, "fill-rule: ", d, "; ", "opacity: ", f, ";", v, m].join("");
    }, getSvgSpanStyles: function(o, d) {
      var A = "; ", i = o.fontFamily ? "font-family: " + (o.fontFamily.indexOf("'") === -1 && o.fontFamily.indexOf('"') === -1 ? "'" + o.fontFamily + "'" : o.fontFamily) + A : "", n = o.strokeWidth ? "stroke-width: " + o.strokeWidth + A : "", h = (i = i, o.fontSize ? "font-size: " + o.fontSize + "px" + A : ""), c = o.fontStyle ? "font-style: " + o.fontStyle + A : "", l = o.fontWeight ? "font-weight: " + o.fontWeight + A : "", f = o.fill ? u("fill", o.fill) : "", m = o.stroke ? u("stroke", o.stroke) : "", v = this.getSvgTextDecoration(o);
      return v && (v = "text-decoration: " + v + A), [m, n, i, h, c, l, v, f, o.deltaY ? "baseline-shift: " + -o.deltaY + "; " : "", d ? "white-space: pre; " : ""].join("");
    }, getSvgTextDecoration: function(o) {
      return ["overline", "underline", "line-through"].filter(function(d) {
        return o[d.replace("-", "")];
      }).join(" ");
    }, getSvgFilter: function() {
      return this.shadow ? "filter: url(#SVGID_" + this.shadow.id + ");" : "";
    }, getSvgCommons: function() {
      return [this.id ? 'id="' + this.id + '" ' : "", this.clipPath ? 'clip-path="url(#' + this.clipPath.clipPathId + ')" ' : ""].join("");
    }, getSvgTransform: function(o, d) {
      var A = o ? this.calcTransformMatrix() : this.calcOwnMatrix();
      return 'transform="' + B.util.matrixToSVG(A) + (d || "") + '" ';
    }, _setSVGBg: function(o) {
      if (this.backgroundColor) {
        var d = B.Object.NUM_FRACTION_DIGITS;
        o.push("		<rect ", this._getFillAttributes(this.backgroundColor), ' x="', s(-this.width / 2, d), '" y="', s(-this.height / 2, d), '" width="', s(this.width, d), '" height="', s(this.height, d), `"></rect>
`);
      }
    }, toSVG: function(o) {
      return this._createBaseSVGMarkup(this._toSVG(o), { reviver: o });
    }, toClipPathSVG: function(o) {
      return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(o), { reviver: o });
    }, _createBaseClipPathSVGMarkup: function(o, d) {
      var A = (d = d || {}).reviver, i = d.additionalTransform || "", n = [this.getSvgTransform(!0, i), this.getSvgCommons()].join(""), h = o.indexOf("COMMON_PARTS");
      return o[h] = n, A ? A(o.join("")) : o.join("");
    }, _createBaseSVGMarkup: function(o, d) {
      var A, i, n = (d = d || {}).noStyle, h = d.reviver, c = n ? "" : 'style="' + this.getSvgStyles() + '" ', l = d.withShadow ? 'style="' + this.getSvgFilter() + '" ' : "", f = this.clipPath, m = this.strokeUniform ? 'vector-effect="non-scaling-stroke" ' : "", v = f && f.absolutePositioned, x = this.stroke, U = this.fill, F = this.shadow, k = [], O = o.indexOf("COMMON_PARTS"), P = d.additionalTransform;
      return f && (f.clipPathId = "CLIPPATH_" + B.Object.__uid++, i = '<clipPath id="' + f.clipPathId + `" >
` + f.toClipPathSVG(h) + `</clipPath>
`), v && k.push("<g ", l, this.getSvgCommons(), ` >
`), k.push("<g ", this.getSvgTransform(!1), v ? "" : l + this.getSvgCommons(), ` >
`), A = [c, m, n ? "" : this.addPaintOrder(), " ", P ? 'transform="' + P + '" ' : ""].join(""), o[O] = A, U && U.toLive && k.push(U.toSVG(this)), x && x.toLive && k.push(x.toSVG(this)), F && k.push(F.toSVG(this)), f && k.push(i), k.push(o.join("")), k.push(`</g>
`), v && k.push(`</g>
`), h ? h(k.join("")) : k.join("");
    }, addPaintOrder: function() {
      return this.paintFirst !== "fill" ? ' paint-order="' + this.paintFirst + '" ' : "";
    } });
  }(), function() {
    var u = B.util.object.extend, s = "stateProperties";
    function o(A, i, n) {
      var h = {};
      n.forEach(function(c) {
        h[c] = A[c];
      }), u(A[i], h, !0);
    }
    function d(A, i, n) {
      if (A === i)
        return !0;
      if (Array.isArray(A)) {
        if (!Array.isArray(i) || A.length !== i.length)
          return !1;
        for (var h = 0, c = A.length; h < c; h++)
          if (!d(A[h], i[h]))
            return !1;
        return !0;
      }
      if (A && typeof A == "object") {
        var l, f = Object.keys(A);
        if (!i || typeof i != "object" || !n && f.length !== Object.keys(i).length)
          return !1;
        for (h = 0, c = f.length; h < c; h++)
          if ((l = f[h]) !== "canvas" && l !== "group" && !d(A[l], i[l]))
            return !1;
        return !0;
      }
    }
    B.util.object.extend(B.Object.prototype, { hasStateChanged: function(A) {
      var i = "_" + (A = A || s);
      return Object.keys(this[i]).length < this[A].length || !d(this[i], this, !0);
    }, saveState: function(A) {
      var i = A && A.propertySet || s, n = "_" + i;
      return this[n] ? (o(this, n, this[i]), A && A.stateProperties && o(this, n, A.stateProperties), this) : this.setupState(A);
    }, setupState: function(A) {
      var i = (A = A || {}).propertySet || s;
      return A.propertySet = i, this["_" + i] = {}, this.saveState(A), this;
    } });
  }(), function() {
    var u = B.util.degreesToRadians;
    B.util.object.extend(B.Object.prototype, { _findTargetCorner: function(s, o) {
      if (!this.hasControls || this.group || !this.canvas || this.canvas._activeObject !== this)
        return !1;
      var d, A, i, n = s.x, h = s.y, c = Object.keys(this.oCoords), l = c.length - 1;
      for (this.__corner = 0; l >= 0; l--)
        if (i = c[l], this.isControlVisible(i) && (A = this._getImageLines(o ? this.oCoords[i].touchCorner : this.oCoords[i].corner), (d = this._findCrossPoints({ x: n, y: h }, A)) !== 0 && d % 2 == 1))
          return this.__corner = i, i;
      return !1;
    }, forEachControl: function(s) {
      for (var o in this.controls)
        s(this.controls[o], o, this);
    }, _setCornerCoords: function() {
      var s = this.oCoords;
      for (var o in s) {
        var d = this.controls[o];
        s[o].corner = d.calcCornerCoords(this.angle, this.cornerSize, s[o].x, s[o].y, !1), s[o].touchCorner = d.calcCornerCoords(this.angle, this.touchCornerSize, s[o].x, s[o].y, !0);
      }
    }, drawSelectionBackground: function(s) {
      if (!this.selectionBackgroundColor || this.canvas && !this.canvas.interactive || this.canvas && this.canvas._activeObject !== this)
        return this;
      s.save();
      var o = this.getCenterPoint(), d = this._calculateCurrentDimensions(), A = this.canvas.viewportTransform;
      return s.translate(o.x, o.y), s.scale(1 / A[0], 1 / A[3]), s.rotate(u(this.angle)), s.fillStyle = this.selectionBackgroundColor, s.fillRect(-d.x / 2, -d.y / 2, d.x, d.y), s.restore(), this;
    }, drawBorders: function(s, o) {
      o = o || {};
      var d = this._calculateCurrentDimensions(), A = this.borderScaleFactor, i = d.x + A, n = d.y + A, h = o.hasControls !== void 0 ? o.hasControls : this.hasControls, c = !1;
      return s.save(), s.strokeStyle = o.borderColor || this.borderColor, this._setLineDash(s, o.borderDashArray || this.borderDashArray), s.strokeRect(-i / 2, -n / 2, i, n), h && (s.beginPath(), this.forEachControl(function(l, f, m) {
        l.withConnection && l.getVisibility(m, f) && (c = !0, s.moveTo(l.x * i, l.y * n), s.lineTo(l.x * i + l.offsetX, l.y * n + l.offsetY));
      }), c && s.stroke()), s.restore(), this;
    }, drawBordersInGroup: function(s, o, d) {
      d = d || {};
      var A = B.util.sizeAfterTransform(this.width, this.height, o), i = this.strokeWidth, n = this.strokeUniform, h = this.borderScaleFactor, c = A.x + i * (n ? this.canvas.getZoom() : o.scaleX) + h, l = A.y + i * (n ? this.canvas.getZoom() : o.scaleY) + h;
      return s.save(), this._setLineDash(s, d.borderDashArray || this.borderDashArray), s.strokeStyle = d.borderColor || this.borderColor, s.strokeRect(-c / 2, -l / 2, c, l), s.restore(), this;
    }, drawControls: function(s, o) {
      o = o || {}, s.save();
      var d, A, i = this.canvas.getRetinaScaling();
      return s.setTransform(i, 0, 0, i, 0, 0), s.strokeStyle = s.fillStyle = o.cornerColor || this.cornerColor, this.transparentCorners || (s.strokeStyle = o.cornerStrokeColor || this.cornerStrokeColor), this._setLineDash(s, o.cornerDashArray || this.cornerDashArray), this.setCoords(), this.group && (d = this.group.calcTransformMatrix()), this.forEachControl(function(n, h, c) {
        A = c.oCoords[h], n.getVisibility(c, h) && (d && (A = B.util.transformPoint(A, d)), n.render(s, A.x, A.y, o, c));
      }), s.restore(), this;
    }, isControlVisible: function(s) {
      return this.controls[s] && this.controls[s].getVisibility(this, s);
    }, setControlVisible: function(s, o) {
      return this._controlsVisibility || (this._controlsVisibility = {}), this._controlsVisibility[s] = o, this;
    }, setControlsVisibility: function(s) {
      for (var o in s || (s = {}), s)
        this.setControlVisible(o, s[o]);
      return this;
    }, onDeselect: function() {
    }, onSelect: function() {
    } });
  }(), B.util.object.extend(B.StaticCanvas.prototype, { FX_DURATION: 500, fxCenterObjectH: function(u, s) {
    var o = function() {
    }, d = (s = s || {}).onComplete || o, A = s.onChange || o, i = this;
    return B.util.animate({ target: this, startValue: u.left, endValue: this.getCenterPoint().x, duration: this.FX_DURATION, onChange: function(n) {
      u.set("left", n), i.requestRenderAll(), A();
    }, onComplete: function() {
      u.setCoords(), d();
    } });
  }, fxCenterObjectV: function(u, s) {
    var o = function() {
    }, d = (s = s || {}).onComplete || o, A = s.onChange || o, i = this;
    return B.util.animate({ target: this, startValue: u.top, endValue: this.getCenterPoint().y, duration: this.FX_DURATION, onChange: function(n) {
      u.set("top", n), i.requestRenderAll(), A();
    }, onComplete: function() {
      u.setCoords(), d();
    } });
  }, fxRemove: function(u, s) {
    var o = function() {
    }, d = (s = s || {}).onComplete || o, A = s.onChange || o, i = this;
    return B.util.animate({ target: this, startValue: u.opacity, endValue: 0, duration: this.FX_DURATION, onChange: function(n) {
      u.set("opacity", n), i.requestRenderAll(), A();
    }, onComplete: function() {
      i.remove(u), d();
    } });
  } }), B.util.object.extend(B.Object.prototype, { animate: function() {
    if (arguments[0] && typeof arguments[0] == "object") {
      var u, s, o = [], d = [];
      for (u in arguments[0])
        o.push(u);
      for (var A = 0, i = o.length; A < i; A++)
        u = o[A], s = A !== i - 1, d.push(this._animate(u, arguments[0][u], arguments[1], s));
      return d;
    }
    return this._animate.apply(this, arguments);
  }, _animate: function(u, s, o, d) {
    var A, i = this;
    s = s.toString(), o = o ? B.util.object.clone(o) : {}, ~u.indexOf(".") && (A = u.split("."));
    var n = i.colorProperties.indexOf(u) > -1 || A && i.colorProperties.indexOf(A[1]) > -1, h = A ? this.get(A[0])[A[1]] : this.get(u);
    "from" in o || (o.from = h), n || (s = ~s.indexOf("=") ? h + parseFloat(s.replace("=", "")) : parseFloat(s));
    var c = { target: this, startValue: o.from, endValue: s, byValue: o.by, easing: o.easing, duration: o.duration, abort: o.abort && function(l, f, m) {
      return o.abort.call(i, l, f, m);
    }, onChange: function(l, f, m) {
      A ? i[A[0]][A[1]] = l : i.set(u, l), d || o.onChange && o.onChange(l, f, m);
    }, onComplete: function(l, f, m) {
      d || (i.setCoords(), o.onComplete && o.onComplete(l, f, m));
    } };
    return n ? B.util.animateColor(c.startValue, c.endValue, c.duration, c) : B.util.animate(c);
  } }), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.util.object.extend, d = s.util.object.clone, A = { x1: 1, x2: 1, y1: 1, y2: 1 };
    function i(n, h) {
      var c = n.origin, l = n.axis1, f = n.axis2, m = n.dimension, v = h.nearest, x = h.center, U = h.farthest;
      return function() {
        switch (this.get(c)) {
          case v:
            return Math.min(this.get(l), this.get(f));
          case x:
            return Math.min(this.get(l), this.get(f)) + 0.5 * this.get(m);
          case U:
            return Math.max(this.get(l), this.get(f));
        }
      };
    }
    s.Line ? s.warn("fabric.Line is already defined") : (s.Line = s.util.createClass(s.Object, { type: "line", x1: 0, y1: 0, x2: 0, y2: 0, cacheProperties: s.Object.prototype.cacheProperties.concat("x1", "x2", "y1", "y2"), initialize: function(n, h) {
      n || (n = [0, 0, 0, 0]), this.callSuper("initialize", h), this.set("x1", n[0]), this.set("y1", n[1]), this.set("x2", n[2]), this.set("y2", n[3]), this._setWidthHeight(h);
    }, _setWidthHeight: function(n) {
      n || (n = {}), this.width = Math.abs(this.x2 - this.x1), this.height = Math.abs(this.y2 - this.y1), this.left = "left" in n ? n.left : this._getLeftToOriginX(), this.top = "top" in n ? n.top : this._getTopToOriginY();
    }, _set: function(n, h) {
      return this.callSuper("_set", n, h), A[n] !== void 0 && this._setWidthHeight(), this;
    }, _getLeftToOriginX: i({ origin: "originX", axis1: "x1", axis2: "x2", dimension: "width" }, { nearest: "left", center: "center", farthest: "right" }), _getTopToOriginY: i({ origin: "originY", axis1: "y1", axis2: "y2", dimension: "height" }, { nearest: "top", center: "center", farthest: "bottom" }), _render: function(n) {
      n.beginPath();
      var h = this.calcLinePoints();
      n.moveTo(h.x1, h.y1), n.lineTo(h.x2, h.y2), n.lineWidth = this.strokeWidth;
      var c = n.strokeStyle;
      n.strokeStyle = this.stroke || n.fillStyle, this.stroke && this._renderStroke(n), n.strokeStyle = c;
    }, _findCenterFromElement: function() {
      return { x: (this.x1 + this.x2) / 2, y: (this.y1 + this.y2) / 2 };
    }, toObject: function(n) {
      return o(this.callSuper("toObject", n), this.calcLinePoints());
    }, _getNonTransformedDimensions: function() {
      var n = this.callSuper("_getNonTransformedDimensions");
      return this.strokeLineCap === "butt" && (this.width === 0 && (n.y -= this.strokeWidth), this.height === 0 && (n.x -= this.strokeWidth)), n;
    }, calcLinePoints: function() {
      var n = this.x1 <= this.x2 ? -1 : 1, h = this.y1 <= this.y2 ? -1 : 1, c = n * this.width * 0.5, l = h * this.height * 0.5;
      return { x1: c, x2: n * this.width * -0.5, y1: l, y2: h * this.height * -0.5 };
    }, _toSVG: function() {
      var n = this.calcLinePoints();
      return ["<line ", "COMMON_PARTS", 'x1="', n.x1, '" y1="', n.y1, '" x2="', n.x2, '" y2="', n.y2, `" />
`];
    } }), s.Line.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat("x1 y1 x2 y2".split(" ")), s.Line.fromElement = function(n, h, c) {
      c = c || {};
      var l = s.parseAttributes(n, s.Line.ATTRIBUTE_NAMES), f = [l.x1 || 0, l.y1 || 0, l.x2 || 0, l.y2 || 0];
      h(new s.Line(f, o(l, c)));
    }, s.Line.fromObject = function(n, h) {
      var c = d(n, !0);
      c.points = [n.x1, n.y1, n.x2, n.y2], s.Object._fromObject("Line", c, function(l) {
        delete l.points, h && h(l);
      }, "points");
    });
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.util.degreesToRadians;
    s.Circle ? s.warn("fabric.Circle is already defined.") : (s.Circle = s.util.createClass(s.Object, { type: "circle", radius: 0, startAngle: 0, endAngle: 360, cacheProperties: s.Object.prototype.cacheProperties.concat("radius", "startAngle", "endAngle"), _set: function(d, A) {
      return this.callSuper("_set", d, A), d === "radius" && this.setRadius(A), this;
    }, toObject: function(d) {
      return this.callSuper("toObject", ["radius", "startAngle", "endAngle"].concat(d));
    }, _toSVG: function() {
      var d, A = (this.endAngle - this.startAngle) % 360;
      if (A === 0)
        d = ["<circle ", "COMMON_PARTS", 'cx="0" cy="0" ', 'r="', this.radius, `" />
`];
      else {
        var i = o(this.startAngle), n = o(this.endAngle), h = this.radius;
        d = ['<path d="M ' + s.util.cos(i) * h + " " + s.util.sin(i) * h, " A " + h + " " + h, " 0 ", +(A > 180 ? "1" : "0") + " 1", " " + s.util.cos(n) * h + " " + s.util.sin(n) * h, '" ', "COMMON_PARTS", ` />
`];
      }
      return d;
    }, _render: function(d) {
      d.beginPath(), d.arc(0, 0, this.radius, o(this.startAngle), o(this.endAngle), !1), this._renderPaintInOrder(d);
    }, getRadiusX: function() {
      return this.get("radius") * this.get("scaleX");
    }, getRadiusY: function() {
      return this.get("radius") * this.get("scaleY");
    }, setRadius: function(d) {
      return this.radius = d, this.set("width", 2 * d).set("height", 2 * d);
    } }), s.Circle.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat("cx cy r".split(" ")), s.Circle.fromElement = function(d, A) {
      var i, n = s.parseAttributes(d, s.Circle.ATTRIBUTE_NAMES);
      if (!("radius" in (i = n) && i.radius >= 0))
        throw new Error("value of `r` attribute is required and can not be negative");
      n.left = (n.left || 0) - n.radius, n.top = (n.top || 0) - n.radius, A(new s.Circle(n));
    }, s.Circle.fromObject = function(d, A) {
      s.Object._fromObject("Circle", d, A);
    });
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {});
    s.Triangle ? s.warn("fabric.Triangle is already defined") : (s.Triangle = s.util.createClass(s.Object, { type: "triangle", width: 100, height: 100, _render: function(o) {
      var d = this.width / 2, A = this.height / 2;
      o.beginPath(), o.moveTo(-d, A), o.lineTo(0, -A), o.lineTo(d, A), o.closePath(), this._renderPaintInOrder(o);
    }, _toSVG: function() {
      var o = this.width / 2, d = this.height / 2;
      return ["<polygon ", "COMMON_PARTS", 'points="', [-o + " " + d, "0 " + -d, o + " " + d].join(","), '" />'];
    } }), s.Triangle.fromObject = function(o, d) {
      return s.Object._fromObject("Triangle", o, d);
    });
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = 2 * Math.PI;
    s.Ellipse ? s.warn("fabric.Ellipse is already defined.") : (s.Ellipse = s.util.createClass(s.Object, { type: "ellipse", rx: 0, ry: 0, cacheProperties: s.Object.prototype.cacheProperties.concat("rx", "ry"), initialize: function(d) {
      this.callSuper("initialize", d), this.set("rx", d && d.rx || 0), this.set("ry", d && d.ry || 0);
    }, _set: function(d, A) {
      switch (this.callSuper("_set", d, A), d) {
        case "rx":
          this.rx = A, this.set("width", 2 * A);
          break;
        case "ry":
          this.ry = A, this.set("height", 2 * A);
      }
      return this;
    }, getRx: function() {
      return this.get("rx") * this.get("scaleX");
    }, getRy: function() {
      return this.get("ry") * this.get("scaleY");
    }, toObject: function(d) {
      return this.callSuper("toObject", ["rx", "ry"].concat(d));
    }, _toSVG: function() {
      return ["<ellipse ", "COMMON_PARTS", 'cx="0" cy="0" ', 'rx="', this.rx, '" ry="', this.ry, `" />
`];
    }, _render: function(d) {
      d.beginPath(), d.save(), d.transform(1, 0, 0, this.ry / this.rx, 0, 0), d.arc(0, 0, this.rx, 0, o, !1), d.restore(), this._renderPaintInOrder(d);
    } }), s.Ellipse.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat("cx cy rx ry".split(" ")), s.Ellipse.fromElement = function(d, A) {
      var i = s.parseAttributes(d, s.Ellipse.ATTRIBUTE_NAMES);
      i.left = (i.left || 0) - i.rx, i.top = (i.top || 0) - i.ry, A(new s.Ellipse(i));
    }, s.Ellipse.fromObject = function(d, A) {
      s.Object._fromObject("Ellipse", d, A);
    });
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.util.object.extend;
    s.Rect ? s.warn("fabric.Rect is already defined") : (s.Rect = s.util.createClass(s.Object, { stateProperties: s.Object.prototype.stateProperties.concat("rx", "ry"), type: "rect", rx: 0, ry: 0, cacheProperties: s.Object.prototype.cacheProperties.concat("rx", "ry"), initialize: function(d) {
      this.callSuper("initialize", d), this._initRxRy();
    }, _initRxRy: function() {
      this.rx && !this.ry ? this.ry = this.rx : this.ry && !this.rx && (this.rx = this.ry);
    }, _render: function(d) {
      var A = this.rx ? Math.min(this.rx, this.width / 2) : 0, i = this.ry ? Math.min(this.ry, this.height / 2) : 0, n = this.width, h = this.height, c = -this.width / 2, l = -this.height / 2, f = A !== 0 || i !== 0, m = 0.4477152502;
      d.beginPath(), d.moveTo(c + A, l), d.lineTo(c + n - A, l), f && d.bezierCurveTo(c + n - m * A, l, c + n, l + m * i, c + n, l + i), d.lineTo(c + n, l + h - i), f && d.bezierCurveTo(c + n, l + h - m * i, c + n - m * A, l + h, c + n - A, l + h), d.lineTo(c + A, l + h), f && d.bezierCurveTo(c + m * A, l + h, c, l + h - m * i, c, l + h - i), d.lineTo(c, l + i), f && d.bezierCurveTo(c, l + m * i, c + m * A, l, c + A, l), d.closePath(), this._renderPaintInOrder(d);
    }, toObject: function(d) {
      return this.callSuper("toObject", ["rx", "ry"].concat(d));
    }, _toSVG: function() {
      return ["<rect ", "COMMON_PARTS", 'x="', -this.width / 2, '" y="', -this.height / 2, '" rx="', this.rx, '" ry="', this.ry, '" width="', this.width, '" height="', this.height, `" />
`];
    } }), s.Rect.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat("x y rx ry width height".split(" ")), s.Rect.fromElement = function(d, A, i) {
      if (!d)
        return A(null);
      i = i || {};
      var n = s.parseAttributes(d, s.Rect.ATTRIBUTE_NAMES);
      n.left = n.left || 0, n.top = n.top || 0, n.height = n.height || 0, n.width = n.width || 0;
      var h = new s.Rect(o(i ? s.util.object.clone(i) : {}, n));
      h.visible = h.visible && h.width > 0 && h.height > 0, A(h);
    }, s.Rect.fromObject = function(d, A) {
      return s.Object._fromObject("Rect", d, A);
    });
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.util.object.extend, d = s.util.array.min, A = s.util.array.max, i = s.util.toFixed, n = s.util.projectStrokeOnPoints;
    s.Polyline ? s.warn("fabric.Polyline is already defined") : (s.Polyline = s.util.createClass(s.Object, { type: "polyline", points: null, exactBoundingBox: !1, cacheProperties: s.Object.prototype.cacheProperties.concat("points"), initialize: function(h, c) {
      c = c || {}, this.points = h || [], this.callSuper("initialize", c), this._setPositionDimensions(c);
    }, _projectStrokeOnPoints: function() {
      return n(this.points, this, !0);
    }, _setPositionDimensions: function(h) {
      var c, l = this._calcDimensions(h), f = this.exactBoundingBox ? this.strokeWidth : 0;
      this.width = l.width - f, this.height = l.height - f, h.fromSVG || (c = this.translateToGivenOrigin({ x: l.left - this.strokeWidth / 2 + f / 2, y: l.top - this.strokeWidth / 2 + f / 2 }, "left", "top", this.originX, this.originY)), h.left === void 0 && (this.left = h.fromSVG ? l.left : c.x), h.top === void 0 && (this.top = h.fromSVG ? l.top : c.y), this.pathOffset = { x: l.left + this.width / 2 + f / 2, y: l.top + this.height / 2 + f / 2 };
    }, _calcDimensions: function() {
      var h = this.exactBoundingBox ? this._projectStrokeOnPoints() : this.points, c = d(h, "x") || 0, l = d(h, "y") || 0;
      return { left: c, top: l, width: (A(h, "x") || 0) - c, height: (A(h, "y") || 0) - l };
    }, toObject: function(h) {
      return o(this.callSuper("toObject", h), { points: this.points.concat() });
    }, _toSVG: function() {
      for (var h = [], c = this.pathOffset.x, l = this.pathOffset.y, f = s.Object.NUM_FRACTION_DIGITS, m = 0, v = this.points.length; m < v; m++)
        h.push(i(this.points[m].x - c, f), ",", i(this.points[m].y - l, f), " ");
      return ["<" + this.type + " ", "COMMON_PARTS", 'points="', h.join(""), `" />
`];
    }, commonRender: function(h) {
      var c, l = this.points.length, f = this.pathOffset.x, m = this.pathOffset.y;
      if (!l || isNaN(this.points[l - 1].y))
        return !1;
      h.beginPath(), h.moveTo(this.points[0].x - f, this.points[0].y - m);
      for (var v = 0; v < l; v++)
        c = this.points[v], h.lineTo(c.x - f, c.y - m);
      return !0;
    }, _render: function(h) {
      this.commonRender(h) && this._renderPaintInOrder(h);
    }, complexity: function() {
      return this.get("points").length;
    } }), s.Polyline.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat(), s.Polyline.fromElementGenerator = function(h) {
      return function(c, l, f) {
        if (!c)
          return l(null);
        f || (f = {});
        var m = s.parsePointsAttribute(c.getAttribute("points")), v = s.parseAttributes(c, s[h].ATTRIBUTE_NAMES);
        v.fromSVG = !0, l(new s[h](m, o(v, f)));
      };
    }, s.Polyline.fromElement = s.Polyline.fromElementGenerator("Polyline"), s.Polyline.fromObject = function(h, c) {
      return s.Object._fromObject("Polyline", h, c, "points");
    });
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.util.projectStrokeOnPoints;
    s.Polygon ? s.warn("fabric.Polygon is already defined") : (s.Polygon = s.util.createClass(s.Polyline, { type: "polygon", _projectStrokeOnPoints: function() {
      return o(this.points, this);
    }, _render: function(d) {
      this.commonRender(d) && (d.closePath(), this._renderPaintInOrder(d));
    } }), s.Polygon.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat(), s.Polygon.fromElement = s.Polyline.fromElementGenerator("Polygon"), s.Polygon.fromObject = function(d, A) {
      s.Object._fromObject("Polygon", d, A, "points");
    });
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.util.array.min, d = s.util.array.max, A = s.util.object.extend, i = s.util.object.clone, n = s.util.toFixed;
    s.Path ? s.warn("fabric.Path is already defined") : (s.Path = s.util.createClass(s.Object, { type: "path", path: null, cacheProperties: s.Object.prototype.cacheProperties.concat("path", "fillRule"), stateProperties: s.Object.prototype.stateProperties.concat("path"), initialize: function(h, c) {
      delete (c = i(c || {})).path, this.callSuper("initialize", c), this._setPath(h || [], c);
    }, _setPath: function(h, c) {
      this.path = s.util.makePathSimpler(Array.isArray(h) ? h : s.util.parsePath(h)), s.Polyline.prototype._setPositionDimensions.call(this, c || {});
    }, _renderPathCommands: function(h) {
      var c, l = 0, f = 0, m = 0, v = 0, x = 0, U = 0, F = -this.pathOffset.x, k = -this.pathOffset.y;
      h.beginPath();
      for (var O = 0, P = this.path.length; O < P; ++O)
        switch ((c = this.path[O])[0]) {
          case "L":
            m = c[1], v = c[2], h.lineTo(m + F, v + k);
            break;
          case "M":
            l = m = c[1], f = v = c[2], h.moveTo(m + F, v + k);
            break;
          case "C":
            m = c[5], v = c[6], x = c[3], U = c[4], h.bezierCurveTo(c[1] + F, c[2] + k, x + F, U + k, m + F, v + k);
            break;
          case "Q":
            h.quadraticCurveTo(c[1] + F, c[2] + k, c[3] + F, c[4] + k), m = c[3], v = c[4], x = c[1], U = c[2];
            break;
          case "z":
          case "Z":
            m = l, v = f, h.closePath();
        }
    }, _render: function(h) {
      this._renderPathCommands(h), this._renderPaintInOrder(h);
    }, toString: function() {
      return "#<fabric.Path (" + this.complexity() + '): { "top": ' + this.top + ', "left": ' + this.left + " }>";
    }, toObject: function(h) {
      return A(this.callSuper("toObject", h), { path: this.path.map(function(c) {
        return c.slice();
      }) });
    }, toDatalessObject: function(h) {
      var c = this.toObject(["sourcePath"].concat(h));
      return c.sourcePath && delete c.path, c;
    }, _toSVG: function() {
      return ["<path ", "COMMON_PARTS", 'd="', s.util.joinPath(this.path), '" stroke-linecap="round" ', `/>
`];
    }, _getOffsetTransform: function() {
      var h = s.Object.NUM_FRACTION_DIGITS;
      return " translate(" + n(-this.pathOffset.x, h) + ", " + n(-this.pathOffset.y, h) + ")";
    }, toClipPathSVG: function(h) {
      var c = this._getOffsetTransform();
      return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(), { reviver: h, additionalTransform: c });
    }, toSVG: function(h) {
      var c = this._getOffsetTransform();
      return this._createBaseSVGMarkup(this._toSVG(), { reviver: h, additionalTransform: c });
    }, complexity: function() {
      return this.path.length;
    }, _calcDimensions: function() {
      for (var h, c, l = [], f = [], m = 0, v = 0, x = 0, U = 0, F = 0, k = this.path.length; F < k; ++F) {
        switch ((h = this.path[F])[0]) {
          case "L":
            x = h[1], U = h[2], c = [];
            break;
          case "M":
            m = x = h[1], v = U = h[2], c = [];
            break;
          case "C":
            c = s.util.getBoundsOfCurve(x, U, h[1], h[2], h[3], h[4], h[5], h[6]), x = h[5], U = h[6];
            break;
          case "Q":
            c = s.util.getBoundsOfCurve(x, U, h[1], h[2], h[1], h[2], h[3], h[4]), x = h[3], U = h[4];
            break;
          case "z":
          case "Z":
            x = m, U = v;
        }
        c.forEach(function(R) {
          l.push(R.x), f.push(R.y);
        }), l.push(x), f.push(U);
      }
      var O = o(l) || 0, P = o(f) || 0;
      return { left: O, top: P, width: (d(l) || 0) - O, height: (d(f) || 0) - P };
    } }), s.Path.fromObject = function(h, c) {
      if (typeof h.sourcePath == "string") {
        var l = h.sourcePath;
        s.loadSVGFromURL(l, function(f) {
          var m = f[0];
          m.setOptions(h), h.clipPath ? s.util.enlivenObjects([h.clipPath], function(v) {
            m.clipPath = v[0], c && c(m);
          }) : c && c(m);
        });
      } else
        s.Object._fromObject("Path", h, c, "path");
    }, s.Path.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat(["d"]), s.Path.fromElement = function(h, c, l) {
      var f = s.parseAttributes(h, s.Path.ATTRIBUTE_NAMES);
      f.fromSVG = !0, c(new s.Path(f.d, A(f, l)));
    });
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.util.array.min, d = s.util.array.max;
    s.Group || (s.Group = s.util.createClass(s.Object, s.Collection, { type: "group", strokeWidth: 0, subTargetCheck: !1, cacheProperties: [], useSetOnGroup: !1, initialize: function(A, i, n) {
      i = i || {}, this._objects = [], n && this.callSuper("initialize", i), this._objects = A || [];
      for (var h = this._objects.length; h--; )
        this._objects[h].group = this;
      if (n)
        this._updateObjectsACoords();
      else {
        var c = i && i.centerPoint;
        i.originX !== void 0 && (this.originX = i.originX), i.originY !== void 0 && (this.originY = i.originY), c || this._calcBounds(), this._updateObjectsCoords(c), delete i.centerPoint, this.callSuper("initialize", i);
      }
      this.setCoords();
    }, _updateObjectsACoords: function() {
      for (var A = this._objects.length; A--; )
        this._objects[A].setCoords(!0);
    }, _updateObjectsCoords: function(A) {
      A = A || this.getCenterPoint();
      for (var i = this._objects.length; i--; )
        this._updateObjectCoords(this._objects[i], A);
    }, _updateObjectCoords: function(A, i) {
      var n = A.left, h = A.top;
      A.set({ left: n - i.x, top: h - i.y }), A.group = this, A.setCoords(!0);
    }, toString: function() {
      return "#<fabric.Group: (" + this.complexity() + ")>";
    }, addWithUpdate: function(A) {
      var i = !!this.group;
      return this._restoreObjectsState(), s.util.resetObjectTransform(this), A && (i && s.util.removeTransformFromObject(A, this.group.calcTransformMatrix()), this._objects.push(A), A.group = this, A._set("canvas", this.canvas)), this._calcBounds(), this._updateObjectsCoords(), this.dirty = !0, i ? this.group.addWithUpdate() : this.setCoords(), this;
    }, removeWithUpdate: function(A) {
      return this._restoreObjectsState(), s.util.resetObjectTransform(this), this.remove(A), this._calcBounds(), this._updateObjectsCoords(), this.setCoords(), this.dirty = !0, this;
    }, _onObjectAdded: function(A) {
      this.dirty = !0, A.group = this, A._set("canvas", this.canvas);
    }, _onObjectRemoved: function(A) {
      this.dirty = !0, delete A.group;
    }, _set: function(A, i) {
      var n = this._objects.length;
      if (this.useSetOnGroup)
        for (; n--; )
          this._objects[n].setOnGroup(A, i);
      if (A === "canvas")
        for (; n--; )
          this._objects[n]._set(A, i);
      s.Object.prototype._set.call(this, A, i);
    }, toObject: function(A) {
      var i = this.includeDefaultValues, n = this._objects.filter(function(c) {
        return !c.excludeFromExport;
      }).map(function(c) {
        var l = c.includeDefaultValues;
        c.includeDefaultValues = i;
        var f = c.toObject(A);
        return c.includeDefaultValues = l, f;
      }), h = s.Object.prototype.toObject.call(this, A);
      return h.objects = n, h;
    }, toDatalessObject: function(A) {
      var i, n = this.sourcePath;
      if (n)
        i = n;
      else {
        var h = this.includeDefaultValues;
        i = this._objects.map(function(l) {
          var f = l.includeDefaultValues;
          l.includeDefaultValues = h;
          var m = l.toDatalessObject(A);
          return l.includeDefaultValues = f, m;
        });
      }
      var c = s.Object.prototype.toDatalessObject.call(this, A);
      return c.objects = i, c;
    }, render: function(A) {
      this._transformDone = !0, this.callSuper("render", A), this._transformDone = !1;
    }, shouldCache: function() {
      var A = s.Object.prototype.shouldCache.call(this);
      if (A) {
        for (var i = 0, n = this._objects.length; i < n; i++)
          if (this._objects[i].willDrawShadow())
            return this.ownCaching = !1, !1;
      }
      return A;
    }, willDrawShadow: function() {
      if (s.Object.prototype.willDrawShadow.call(this))
        return !0;
      for (var A = 0, i = this._objects.length; A < i; A++)
        if (this._objects[A].willDrawShadow())
          return !0;
      return !1;
    }, isOnACache: function() {
      return this.ownCaching || this.group && this.group.isOnACache();
    }, drawObject: function(A) {
      for (var i = 0, n = this._objects.length; i < n; i++)
        this._objects[i].render(A);
      this._drawClipPath(A, this.clipPath);
    }, isCacheDirty: function(A) {
      if (this.callSuper("isCacheDirty", A))
        return !0;
      if (!this.statefullCache)
        return !1;
      for (var i = 0, n = this._objects.length; i < n; i++)
        if (this._objects[i].isCacheDirty(!0)) {
          if (this._cacheCanvas) {
            var h = this.cacheWidth / this.zoomX, c = this.cacheHeight / this.zoomY;
            this._cacheContext.clearRect(-h / 2, -c / 2, h, c);
          }
          return !0;
        }
      return !1;
    }, _restoreObjectsState: function() {
      var A = this.calcOwnMatrix();
      return this._objects.forEach(function(i) {
        s.util.addTransformToObject(i, A), delete i.group, i.setCoords();
      }), this;
    }, destroy: function() {
      return this._objects.forEach(function(A) {
        A.set("dirty", !0);
      }), this._restoreObjectsState();
    }, dispose: function() {
      this.callSuper("dispose"), this.forEachObject(function(A) {
        A.dispose && A.dispose();
      }), this._objects = [];
    }, toActiveSelection: function() {
      if (this.canvas) {
        var A = this._objects, i = this.canvas;
        this._objects = [];
        var n = this.toObject();
        delete n.objects;
        var h = new s.ActiveSelection([]);
        return h.set(n), h.type = "activeSelection", i.remove(this), A.forEach(function(c) {
          c.group = h, c.dirty = !0, i.add(c);
        }), h.canvas = i, h._objects = A, i._activeObject = h, h.setCoords(), h;
      }
    }, ungroupOnCanvas: function() {
      return this._restoreObjectsState();
    }, setObjectsCoords: function() {
      return this.forEachObject(function(A) {
        A.setCoords(!0);
      }), this;
    }, _calcBounds: function(A) {
      for (var i, n, h, c, l = [], f = [], m = ["tr", "br", "bl", "tl"], v = 0, x = this._objects.length, U = m.length; v < x; ++v) {
        for (h = (i = this._objects[v]).calcACoords(), c = 0; c < U; c++)
          n = m[c], l.push(h[n].x), f.push(h[n].y);
        i.aCoords = h;
      }
      this._getBounds(l, f, A);
    }, _getBounds: function(A, i, n) {
      var h = new s.Point(o(A), o(i)), c = new s.Point(d(A), d(i)), l = h.y || 0, f = h.x || 0, m = c.x - h.x || 0, v = c.y - h.y || 0;
      this.width = m, this.height = v, n || this.setPositionByOrigin({ x: f, y: l }, "left", "top");
    }, _toSVG: function(A) {
      for (var i = ["<g ", "COMMON_PARTS", ` >
`], n = 0, h = this._objects.length; n < h; n++)
        i.push("		", this._objects[n].toSVG(A));
      return i.push(`</g>
`), i;
    }, getSvgStyles: function() {
      var A = this.opacity !== void 0 && this.opacity !== 1 ? "opacity: " + this.opacity + ";" : "", i = this.visible ? "" : " visibility: hidden;";
      return [A, this.getSvgFilter(), i].join("");
    }, toClipPathSVG: function(A) {
      for (var i = [], n = 0, h = this._objects.length; n < h; n++)
        i.push("	", this._objects[n].toClipPathSVG(A));
      return this._createBaseClipPathSVGMarkup(i, { reviver: A });
    } }), s.Group.fromObject = function(A, i) {
      var n = A.objects, h = s.util.object.clone(A, !0);
      delete h.objects, typeof n != "string" ? s.util.enlivenObjects(n, function(c) {
        s.util.enlivenObjectEnlivables(A, h, function() {
          i && i(new s.Group(c, h, !0));
        });
      }) : s.loadSVGFromURL(n, function(c) {
        var l = s.util.groupSVGElements(c, A, n), f = h.clipPath;
        delete h.clipPath, l.set(h), f ? s.util.enlivenObjects([f], function(m) {
          l.clipPath = m[0], i && i(l);
        }) : i && i(l);
      });
    });
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {});
    s.ActiveSelection || (s.ActiveSelection = s.util.createClass(s.Group, { type: "activeSelection", initialize: function(o, d) {
      d = d || {}, this._objects = o || [];
      for (var A = this._objects.length; A--; )
        this._objects[A].group = this;
      d.originX && (this.originX = d.originX), d.originY && (this.originY = d.originY), this._calcBounds(), this._updateObjectsCoords(), s.Object.prototype.initialize.call(this, d), this.setCoords();
    }, toGroup: function() {
      var o = this._objects.concat();
      this._objects = [];
      var d = s.Object.prototype.toObject.call(this), A = new s.Group([]);
      if (delete d.type, A.set(d), o.forEach(function(n) {
        n.canvas.remove(n), n.group = A;
      }), A._objects = o, !this.canvas)
        return A;
      var i = this.canvas;
      return i.add(A), i._activeObject = A, A.setCoords(), A;
    }, onDeselect: function() {
      return this.destroy(), !1;
    }, toString: function() {
      return "#<fabric.ActiveSelection: (" + this.complexity() + ")>";
    }, shouldCache: function() {
      return !1;
    }, isOnACache: function() {
      return !1;
    }, _renderControls: function(o, d, A) {
      o.save(), o.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1, this.callSuper("_renderControls", o, d), (A = A || {}).hasControls === void 0 && (A.hasControls = !1), A.forActiveSelection = !0;
      for (var i = 0, n = this._objects.length; i < n; i++)
        this._objects[i]._renderControls(o, A);
      o.restore();
    } }), s.ActiveSelection.fromObject = function(o, d) {
      s.util.enlivenObjects(o.objects, function(A) {
        delete o.objects, d && d(new s.ActiveSelection(A, o, !0));
      });
    });
  }(e), function(u) {
    var s = B.util.object.extend;
    u.fabric || (u.fabric = {}), u.fabric.Image ? B.warn("fabric.Image is already defined.") : (B.Image = B.util.createClass(B.Object, { type: "image", strokeWidth: 0, srcFromAttribute: !1, _lastScaleX: 1, _lastScaleY: 1, _filterScalingX: 1, _filterScalingY: 1, minimumScaleTrigger: 0.5, stateProperties: B.Object.prototype.stateProperties.concat("cropX", "cropY"), cacheProperties: B.Object.prototype.cacheProperties.concat("cropX", "cropY"), cacheKey: "", cropX: 0, cropY: 0, imageSmoothing: !0, initialize: function(o, d) {
      d || (d = {}), this.filters = [], this.cacheKey = "texture" + B.Object.__uid++, this.callSuper("initialize", d), this._initElement(o, d);
    }, getElement: function() {
      return this._element || {};
    }, setElement: function(o, d) {
      return this.removeTexture(this.cacheKey), this.removeTexture(this.cacheKey + "_filtered"), this._element = o, this._originalElement = o, this._initConfig(d), this.filters.length !== 0 && this.applyFilters(), this.resizeFilter && this.applyResizeFilters(), this;
    }, removeTexture: function(o) {
      var d = B.filterBackend;
      d && d.evictCachesForKey && d.evictCachesForKey(o);
    }, dispose: function() {
      this.callSuper("dispose"), this.removeTexture(this.cacheKey), this.removeTexture(this.cacheKey + "_filtered"), this._cacheContext = void 0, ["_originalElement", "_element", "_filteredEl", "_cacheCanvas"].forEach((function(o) {
        B.util.cleanUpJsdomNode(this[o]), this[o] = void 0;
      }).bind(this));
    }, getCrossOrigin: function() {
      return this._originalElement && (this._originalElement.crossOrigin || null);
    }, getOriginalSize: function() {
      var o = this.getElement();
      return { width: o.naturalWidth || o.width, height: o.naturalHeight || o.height };
    }, _stroke: function(o) {
      if (this.stroke && this.strokeWidth !== 0) {
        var d = this.width / 2, A = this.height / 2;
        o.beginPath(), o.moveTo(-d, -A), o.lineTo(d, -A), o.lineTo(d, A), o.lineTo(-d, A), o.lineTo(-d, -A), o.closePath();
      }
    }, toObject: function(o) {
      var d = [];
      this.filters.forEach(function(i) {
        i && d.push(i.toObject());
      });
      var A = s(this.callSuper("toObject", ["cropX", "cropY"].concat(o)), { src: this.getSrc(), crossOrigin: this.getCrossOrigin(), filters: d });
      return this.resizeFilter && (A.resizeFilter = this.resizeFilter.toObject()), A;
    }, hasCrop: function() {
      return this.cropX || this.cropY || this.width < this._element.width || this.height < this._element.height;
    }, _toSVG: function() {
      var o, d = [], A = [], i = this._element, n = -this.width / 2, h = -this.height / 2, c = "", l = "";
      if (!i)
        return [];
      if (this.hasCrop()) {
        var f = B.Object.__uid++;
        d.push('<clipPath id="imageCrop_' + f + `">
`, '	<rect x="' + n + '" y="' + h + '" width="' + this.width + '" height="' + this.height + `" />
`, `</clipPath>
`), c = ' clip-path="url(#imageCrop_' + f + ')" ';
      }
      if (this.imageSmoothing || (l = '" image-rendering="optimizeSpeed'), A.push("	<image ", "COMMON_PARTS", 'xlink:href="', this.getSvgSrc(!0), '" x="', n - this.cropX, '" y="', h - this.cropY, '" width="', i.width || i.naturalWidth, '" height="', i.height || i.height, l, '"', c, `></image>
`), this.stroke || this.strokeDashArray) {
        var m = this.fill;
        this.fill = null, o = ["	<rect ", 'x="', n, '" y="', h, '" width="', this.width, '" height="', this.height, '" style="', this.getSvgStyles(), `"/>
`], this.fill = m;
      }
      return d = this.paintFirst !== "fill" ? d.concat(o, A) : d.concat(A, o);
    }, getSrc: function(o) {
      var d = o ? this._element : this._originalElement;
      return d ? d.toDataURL ? d.toDataURL() : this.srcFromAttribute ? d.getAttribute("src") : d.src : this.src || "";
    }, setSrc: function(o, d, A) {
      return B.util.loadImage(o, function(i, n) {
        this.setElement(i, A), this._setWidthHeight(), d && d(this, n);
      }, this, A && A.crossOrigin), this;
    }, toString: function() {
      return '#<fabric.Image: { src: "' + this.getSrc() + '" }>';
    }, applyResizeFilters: function() {
      var o = this.resizeFilter, d = this.minimumScaleTrigger, A = this.getTotalObjectScaling(), i = A.scaleX, n = A.scaleY, h = this._filteredEl || this._originalElement;
      if (this.group && this.set("dirty", !0), !o || i > d && n > d)
        return this._element = h, this._filterScalingX = 1, this._filterScalingY = 1, this._lastScaleX = i, void (this._lastScaleY = n);
      B.filterBackend || (B.filterBackend = B.initFilterBackend());
      var c = B.util.createCanvasElement(), l = this._filteredEl ? this.cacheKey + "_filtered" : this.cacheKey, f = h.width, m = h.height;
      c.width = f, c.height = m, this._element = c, this._lastScaleX = o.scaleX = i, this._lastScaleY = o.scaleY = n, B.filterBackend.applyFilters([o], h, f, m, this._element, l), this._filterScalingX = c.width / this._originalElement.width, this._filterScalingY = c.height / this._originalElement.height;
    }, applyFilters: function(o) {
      if (o = (o = o || this.filters || []).filter(function(h) {
        return h && !h.isNeutralState();
      }), this.set("dirty", !0), this.removeTexture(this.cacheKey + "_filtered"), o.length === 0)
        return this._element = this._originalElement, this._filteredEl = null, this._filterScalingX = 1, this._filterScalingY = 1, this;
      var d = this._originalElement, A = d.naturalWidth || d.width, i = d.naturalHeight || d.height;
      if (this._element === this._originalElement) {
        var n = B.util.createCanvasElement();
        n.width = A, n.height = i, this._element = n, this._filteredEl = n;
      } else
        this._element = this._filteredEl, this._filteredEl.getContext("2d").clearRect(0, 0, A, i), this._lastScaleX = 1, this._lastScaleY = 1;
      return B.filterBackend || (B.filterBackend = B.initFilterBackend()), B.filterBackend.applyFilters(o, this._originalElement, A, i, this._element, this.cacheKey), this._originalElement.width === this._element.width && this._originalElement.height === this._element.height || (this._filterScalingX = this._element.width / this._originalElement.width, this._filterScalingY = this._element.height / this._originalElement.height), this;
    }, _render: function(o) {
      B.util.setImageSmoothing(o, this.imageSmoothing), this.isMoving !== !0 && this.resizeFilter && this._needsResize() && this.applyResizeFilters(), this._stroke(o), this._renderPaintInOrder(o);
    }, drawCacheOnCanvas: function(o) {
      B.util.setImageSmoothing(o, this.imageSmoothing), B.Object.prototype.drawCacheOnCanvas.call(this, o);
    }, shouldCache: function() {
      return this.needsItsOwnCache();
    }, _renderFill: function(o) {
      var d = this._element;
      if (d) {
        var A = this._filterScalingX, i = this._filterScalingY, n = this.width, h = this.height, c = Math.min, l = Math.max, f = l(this.cropX, 0), m = l(this.cropY, 0), v = d.naturalWidth || d.width, x = d.naturalHeight || d.height, U = f * A, F = m * i, k = c(n * A, v - U), O = c(h * i, x - F), P = -n / 2, R = -h / 2, Y = c(n, v / A - f), V = c(h, x / i - m);
        d && o.drawImage(d, U, F, k, O, P, R, Y, V);
      }
    }, _needsResize: function() {
      var o = this.getTotalObjectScaling();
      return o.scaleX !== this._lastScaleX || o.scaleY !== this._lastScaleY;
    }, _resetWidthHeight: function() {
      this.set(this.getOriginalSize());
    }, _initElement: function(o, d) {
      this.setElement(B.util.getById(o), d), B.util.addClass(this.getElement(), B.Image.CSS_CANVAS);
    }, _initConfig: function(o) {
      o || (o = {}), this.setOptions(o), this._setWidthHeight(o);
    }, _initFilters: function(o, d) {
      o && o.length ? B.util.enlivenObjects(o, function(A) {
        d && d(A);
      }, "fabric.Image.filters") : d && d();
    }, _setWidthHeight: function(o) {
      o || (o = {});
      var d = this.getElement();
      this.width = o.width || d.naturalWidth || d.width || 0, this.height = o.height || d.naturalHeight || d.height || 0;
    }, parsePreserveAspectRatioAttribute: function() {
      var o, d = B.util.parsePreserveAspectRatioAttribute(this.preserveAspectRatio || ""), A = this._element.width, i = this._element.height, n = 1, h = 1, c = 0, l = 0, f = 0, m = 0, v = this.width, x = this.height, U = { width: v, height: x };
      return !d || d.alignX === "none" && d.alignY === "none" ? (n = v / A, h = x / i) : (d.meetOrSlice === "meet" && (o = (v - A * (n = h = B.util.findScaleToFit(this._element, U))) / 2, d.alignX === "Min" && (c = -o), d.alignX === "Max" && (c = o), o = (x - i * h) / 2, d.alignY === "Min" && (l = -o), d.alignY === "Max" && (l = o)), d.meetOrSlice === "slice" && (o = A - v / (n = h = B.util.findScaleToCover(this._element, U)), d.alignX === "Mid" && (f = o / 2), d.alignX === "Max" && (f = o), o = i - x / h, d.alignY === "Mid" && (m = o / 2), d.alignY === "Max" && (m = o), A = v / n, i = x / h)), { width: A, height: i, scaleX: n, scaleY: h, offsetLeft: c, offsetTop: l, cropX: f, cropY: m };
    } }), B.Image.CSS_CANVAS = "canvas-img", B.Image.prototype.getSvgSrc = B.Image.prototype.getSrc, B.Image.fromObject = function(o, d) {
      var A = B.util.object.clone(o);
      B.util.loadImage(A.src, function(i, n) {
        n ? d && d(null, !0) : B.Image.prototype._initFilters.call(A, A.filters, function(h) {
          A.filters = h || [], B.Image.prototype._initFilters.call(A, [A.resizeFilter], function(c) {
            A.resizeFilter = c[0], B.util.enlivenObjectEnlivables(A, A, function() {
              var l = new B.Image(i, A);
              d(l, !1);
            });
          });
        });
      }, null, A.crossOrigin);
    }, B.Image.fromURL = function(o, d, A) {
      B.util.loadImage(o, function(i, n) {
        d && d(new B.Image(i, A), n);
      }, null, A && A.crossOrigin);
    }, B.Image.ATTRIBUTE_NAMES = B.SHARED_ATTRIBUTES.concat("x y width height preserveAspectRatio xlink:href crossOrigin image-rendering".split(" ")), B.Image.fromElement = function(o, d, A) {
      var i = B.parseAttributes(o, B.Image.ATTRIBUTE_NAMES);
      B.Image.fromURL(i["xlink:href"], d, s(A ? B.util.object.clone(A) : {}, i));
    });
  }(e), B.util.object.extend(B.Object.prototype, { _getAngleValueForStraighten: function() {
    var u = this.angle % 360;
    return u > 0 ? 90 * Math.round((u - 1) / 90) : 90 * Math.round(u / 90);
  }, straighten: function() {
    return this.rotate(this._getAngleValueForStraighten());
  }, fxStraighten: function(u) {
    var s = function() {
    }, o = (u = u || {}).onComplete || s, d = u.onChange || s, A = this;
    return B.util.animate({ target: this, startValue: this.get("angle"), endValue: this._getAngleValueForStraighten(), duration: this.FX_DURATION, onChange: function(i) {
      A.rotate(i), d();
    }, onComplete: function() {
      A.setCoords(), o();
    } });
  } }), B.util.object.extend(B.StaticCanvas.prototype, { straightenObject: function(u) {
    return u.straighten(), this.requestRenderAll(), this;
  }, fxStraightenObject: function(u) {
    return u.fxStraighten({ onChange: this.requestRenderAllBound });
  } }), function() {
    function u(o, d) {
      var A = "precision " + d + ` float;
void main(){}`, i = o.createShader(o.FRAGMENT_SHADER);
      return o.shaderSource(i, A), o.compileShader(i), !!o.getShaderParameter(i, o.COMPILE_STATUS);
    }
    function s(o) {
      o && o.tileSize && (this.tileSize = o.tileSize), this.setupGLContext(this.tileSize, this.tileSize), this.captureGPUInfo();
    }
    B.isWebglSupported = function(o) {
      if (B.isLikelyNode)
        return !1;
      o = o || B.WebglFilterBackend.prototype.tileSize;
      var d = document.createElement("canvas"), A = d.getContext("webgl") || d.getContext("experimental-webgl"), i = !1;
      if (A) {
        B.maxTextureSize = A.getParameter(A.MAX_TEXTURE_SIZE), i = B.maxTextureSize >= o;
        for (var n = ["highp", "mediump", "lowp"], h = 0; h < 3; h++)
          if (u(A, n[h])) {
            B.webGlPrecision = n[h];
            break;
          }
      }
      return this.isSupported = i, i;
    }, B.WebglFilterBackend = s, s.prototype = { tileSize: 2048, resources: {}, setupGLContext: function(o, d) {
      this.dispose(), this.createWebGLCanvas(o, d), this.aPosition = new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]), this.chooseFastestCopyGLTo2DMethod(o, d);
    }, chooseFastestCopyGLTo2DMethod: function(o, d) {
      var A, i = window.performance !== void 0;
      try {
        new ImageData(1, 1), A = !0;
      } catch {
        A = !1;
      }
      var n = typeof ArrayBuffer < "u", h = typeof Uint8ClampedArray < "u";
      if (i && A && n && h) {
        var c = B.util.createCanvasElement(), l = new ArrayBuffer(o * d * 4);
        if (B.forceGLPutImageData)
          return this.imageBuffer = l, void (this.copyGLTo2D = cA);
        var f, m, v = { imageBuffer: l, destinationWidth: o, destinationHeight: d, targetCanvas: c };
        c.width = o, c.height = d, f = window.performance.now(), iA.call(v, this.gl, v), m = window.performance.now() - f, f = window.performance.now(), cA.call(v, this.gl, v), m > window.performance.now() - f ? (this.imageBuffer = l, this.copyGLTo2D = cA) : this.copyGLTo2D = iA;
      }
    }, createWebGLCanvas: function(o, d) {
      var A = B.util.createCanvasElement();
      A.width = o, A.height = d;
      var i = { alpha: !0, premultipliedAlpha: !1, depth: !1, stencil: !1, antialias: !1 }, n = A.getContext("webgl", i);
      n || (n = A.getContext("experimental-webgl", i)), n && (n.clearColor(0, 0, 0, 0), this.canvas = A, this.gl = n);
    }, applyFilters: function(o, d, A, i, n, h) {
      var c, l = this.gl;
      h && (c = this.getCachedTexture(h, d));
      var f = { originalWidth: d.width || d.originalWidth, originalHeight: d.height || d.originalHeight, sourceWidth: A, sourceHeight: i, destinationWidth: A, destinationHeight: i, context: l, sourceTexture: this.createTexture(l, A, i, !c && d), targetTexture: this.createTexture(l, A, i), originalTexture: c || this.createTexture(l, A, i, !c && d), passes: o.length, webgl: !0, aPosition: this.aPosition, programCache: this.programCache, pass: 0, filterBackend: this, targetCanvas: n }, m = l.createFramebuffer();
      return l.bindFramebuffer(l.FRAMEBUFFER, m), o.forEach(function(v) {
        v && v.applyTo(f);
      }), function(v) {
        var x = v.targetCanvas, U = x.width, F = x.height, k = v.destinationWidth, O = v.destinationHeight;
        U === k && F === O || (x.width = k, x.height = O);
      }(f), this.copyGLTo2D(l, f), l.bindTexture(l.TEXTURE_2D, null), l.deleteTexture(f.sourceTexture), l.deleteTexture(f.targetTexture), l.deleteFramebuffer(m), n.getContext("2d").setTransform(1, 0, 0, 1, 0, 0), f;
    }, dispose: function() {
      this.canvas && (this.canvas = null, this.gl = null), this.clearWebGLCaches();
    }, clearWebGLCaches: function() {
      this.programCache = {}, this.textureCache = {};
    }, createTexture: function(o, d, A, i, n) {
      var h = o.createTexture();
      return o.bindTexture(o.TEXTURE_2D, h), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MAG_FILTER, n || o.NEAREST), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MIN_FILTER, n || o.NEAREST), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_S, o.CLAMP_TO_EDGE), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_T, o.CLAMP_TO_EDGE), i ? o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, o.RGBA, o.UNSIGNED_BYTE, i) : o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, d, A, 0, o.RGBA, o.UNSIGNED_BYTE, null), h;
    }, getCachedTexture: function(o, d) {
      if (this.textureCache[o])
        return this.textureCache[o];
      var A = this.createTexture(this.gl, d.width, d.height, d);
      return this.textureCache[o] = A, A;
    }, evictCachesForKey: function(o) {
      this.textureCache[o] && (this.gl.deleteTexture(this.textureCache[o]), delete this.textureCache[o]);
    }, copyGLTo2D: iA, captureGPUInfo: function() {
      if (this.gpuInfo)
        return this.gpuInfo;
      var o = this.gl, d = { renderer: "", vendor: "" };
      if (!o)
        return d;
      var A = o.getExtension("WEBGL_debug_renderer_info");
      if (A) {
        var i = o.getParameter(A.UNMASKED_RENDERER_WEBGL), n = o.getParameter(A.UNMASKED_VENDOR_WEBGL);
        i && (d.renderer = i.toLowerCase()), n && (d.vendor = n.toLowerCase());
      }
      return this.gpuInfo = d, d;
    } };
  }(), function() {
    var u = function() {
    };
    function s() {
    }
    B.Canvas2dFilterBackend = s, s.prototype = { evictCachesForKey: u, dispose: u, clearWebGLCaches: u, resources: {}, applyFilters: function(o, d, A, i, n) {
      var h = n.getContext("2d");
      h.drawImage(d, 0, 0, A, i);
      var c = { sourceWidth: A, sourceHeight: i, imageData: h.getImageData(0, 0, A, i), originalEl: d, originalImageData: h.getImageData(0, 0, A, i), canvasEl: n, ctx: h, filterBackend: this };
      return o.forEach(function(l) {
        l.applyTo(c);
      }), c.imageData.width === A && c.imageData.height === i || (n.width = c.imageData.width, n.height = c.imageData.height), h.putImageData(c.imageData, 0, 0), c;
    } };
  }(), B.Image = B.Image || {}, B.Image.filters = B.Image.filters || {}, B.Image.filters.BaseFilter = B.util.createClass({ type: "BaseFilter", vertexSource: `attribute vec2 aPosition;
varying vec2 vTexCoord;
void main() {
vTexCoord = aPosition;
gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
}`, fragmentSource: `precision highp float;
varying vec2 vTexCoord;
uniform sampler2D uTexture;
void main() {
gl_FragColor = texture2D(uTexture, vTexCoord);
}`, initialize: function(u) {
    u && this.setOptions(u);
  }, setOptions: function(u) {
    for (var s in u)
      this[s] = u[s];
  }, createProgram: function(u, s, o) {
    s = s || this.fragmentSource, o = o || this.vertexSource, B.webGlPrecision !== "highp" && (s = s.replace(/precision highp float/g, "precision " + B.webGlPrecision + " float"));
    var d = u.createShader(u.VERTEX_SHADER);
    if (u.shaderSource(d, o), u.compileShader(d), !u.getShaderParameter(d, u.COMPILE_STATUS))
      throw new Error("Vertex shader compile error for " + this.type + ": " + u.getShaderInfoLog(d));
    var A = u.createShader(u.FRAGMENT_SHADER);
    if (u.shaderSource(A, s), u.compileShader(A), !u.getShaderParameter(A, u.COMPILE_STATUS))
      throw new Error("Fragment shader compile error for " + this.type + ": " + u.getShaderInfoLog(A));
    var i = u.createProgram();
    if (u.attachShader(i, d), u.attachShader(i, A), u.linkProgram(i), !u.getProgramParameter(i, u.LINK_STATUS))
      throw new Error('Shader link error for "${this.type}" ' + u.getProgramInfoLog(i));
    var n = this.getAttributeLocations(u, i), h = this.getUniformLocations(u, i) || {};
    return h.uStepW = u.getUniformLocation(i, "uStepW"), h.uStepH = u.getUniformLocation(i, "uStepH"), { program: i, attributeLocations: n, uniformLocations: h };
  }, getAttributeLocations: function(u, s) {
    return { aPosition: u.getAttribLocation(s, "aPosition") };
  }, getUniformLocations: function() {
    return {};
  }, sendAttributeData: function(u, s, o) {
    var d = s.aPosition, A = u.createBuffer();
    u.bindBuffer(u.ARRAY_BUFFER, A), u.enableVertexAttribArray(d), u.vertexAttribPointer(d, 2, u.FLOAT, !1, 0, 0), u.bufferData(u.ARRAY_BUFFER, o, u.STATIC_DRAW);
  }, _setupFrameBuffer: function(u) {
    var s, o, d = u.context;
    u.passes > 1 ? (s = u.destinationWidth, o = u.destinationHeight, u.sourceWidth === s && u.sourceHeight === o || (d.deleteTexture(u.targetTexture), u.targetTexture = u.filterBackend.createTexture(d, s, o)), d.framebufferTexture2D(d.FRAMEBUFFER, d.COLOR_ATTACHMENT0, d.TEXTURE_2D, u.targetTexture, 0)) : (d.bindFramebuffer(d.FRAMEBUFFER, null), d.finish());
  }, _swapTextures: function(u) {
    u.passes--, u.pass++;
    var s = u.targetTexture;
    u.targetTexture = u.sourceTexture, u.sourceTexture = s;
  }, isNeutralState: function() {
    var u = this.mainParameter, s = B.Image.filters[this.type].prototype;
    if (u) {
      if (Array.isArray(s[u])) {
        for (var o = s[u].length; o--; )
          if (this[u][o] !== s[u][o])
            return !1;
        return !0;
      }
      return s[u] === this[u];
    }
    return !1;
  }, applyTo: function(u) {
    u.webgl ? (this._setupFrameBuffer(u), this.applyToWebGL(u), this._swapTextures(u)) : this.applyTo2d(u);
  }, retrieveShader: function(u) {
    return u.programCache.hasOwnProperty(this.type) || (u.programCache[this.type] = this.createProgram(u.context)), u.programCache[this.type];
  }, applyToWebGL: function(u) {
    var s = u.context, o = this.retrieveShader(u);
    u.pass === 0 && u.originalTexture ? s.bindTexture(s.TEXTURE_2D, u.originalTexture) : s.bindTexture(s.TEXTURE_2D, u.sourceTexture), s.useProgram(o.program), this.sendAttributeData(s, o.attributeLocations, u.aPosition), s.uniform1f(o.uniformLocations.uStepW, 1 / u.sourceWidth), s.uniform1f(o.uniformLocations.uStepH, 1 / u.sourceHeight), this.sendUniformData(s, o.uniformLocations), s.viewport(0, 0, u.destinationWidth, u.destinationHeight), s.drawArrays(s.TRIANGLE_STRIP, 0, 4);
  }, bindAdditionalTexture: function(u, s, o) {
    u.activeTexture(o), u.bindTexture(u.TEXTURE_2D, s), u.activeTexture(u.TEXTURE0);
  }, unbindAdditionalTexture: function(u, s) {
    u.activeTexture(s), u.bindTexture(u.TEXTURE_2D, null), u.activeTexture(u.TEXTURE0);
  }, getMainParameter: function() {
    return this[this.mainParameter];
  }, setMainParameter: function(u) {
    this[this.mainParameter] = u;
  }, sendUniformData: function() {
  }, createHelpLayer: function(u) {
    if (!u.helpLayer) {
      var s = document.createElement("canvas");
      s.width = u.sourceWidth, s.height = u.sourceHeight, u.helpLayer = s;
    }
  }, toObject: function() {
    var u = { type: this.type }, s = this.mainParameter;
    return s && (u[s] = this[s]), u;
  }, toJSON: function() {
    return this.toObject();
  } }), B.Image.filters.BaseFilter.fromObject = function(u, s) {
    var o = new B.Image.filters[u.type](u);
    return s && s(o), o;
  }, function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.Image.filters, d = s.util.createClass;
    o.ColorMatrix = d(o.BaseFilter, { type: "ColorMatrix", fragmentSource: `precision highp float;
uniform sampler2D uTexture;
varying vec2 vTexCoord;
uniform mat4 uColorMatrix;
uniform vec4 uConstants;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
color *= uColorMatrix;
color += uConstants;
gl_FragColor = color;
}`, matrix: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], mainParameter: "matrix", colorsOnly: !0, initialize: function(A) {
      this.callSuper("initialize", A), this.matrix = this.matrix.slice(0);
    }, applyTo2d: function(A) {
      var i, n, h, c, l, f = A.imageData.data, m = f.length, v = this.matrix, x = this.colorsOnly;
      for (l = 0; l < m; l += 4)
        i = f[l], n = f[l + 1], h = f[l + 2], x ? (f[l] = i * v[0] + n * v[1] + h * v[2] + 255 * v[4], f[l + 1] = i * v[5] + n * v[6] + h * v[7] + 255 * v[9], f[l + 2] = i * v[10] + n * v[11] + h * v[12] + 255 * v[14]) : (c = f[l + 3], f[l] = i * v[0] + n * v[1] + h * v[2] + c * v[3] + 255 * v[4], f[l + 1] = i * v[5] + n * v[6] + h * v[7] + c * v[8] + 255 * v[9], f[l + 2] = i * v[10] + n * v[11] + h * v[12] + c * v[13] + 255 * v[14], f[l + 3] = i * v[15] + n * v[16] + h * v[17] + c * v[18] + 255 * v[19]);
    }, getUniformLocations: function(A, i) {
      return { uColorMatrix: A.getUniformLocation(i, "uColorMatrix"), uConstants: A.getUniformLocation(i, "uConstants") };
    }, sendUniformData: function(A, i) {
      var n = this.matrix, h = [n[0], n[1], n[2], n[3], n[5], n[6], n[7], n[8], n[10], n[11], n[12], n[13], n[15], n[16], n[17], n[18]], c = [n[4], n[9], n[14], n[19]];
      A.uniformMatrix4fv(i.uColorMatrix, !1, h), A.uniform4fv(i.uConstants, c);
    } }), s.Image.filters.ColorMatrix.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.Image.filters, d = s.util.createClass;
    o.Brightness = d(o.BaseFilter, { type: "Brightness", fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uBrightness;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
color.rgb += uBrightness;
gl_FragColor = color;
}`, brightness: 0, mainParameter: "brightness", applyTo2d: function(A) {
      if (this.brightness !== 0) {
        var i, n = A.imageData.data, h = n.length, c = Math.round(255 * this.brightness);
        for (i = 0; i < h; i += 4)
          n[i] = n[i] + c, n[i + 1] = n[i + 1] + c, n[i + 2] = n[i + 2] + c;
      }
    }, getUniformLocations: function(A, i) {
      return { uBrightness: A.getUniformLocation(i, "uBrightness") };
    }, sendUniformData: function(A, i) {
      A.uniform1f(i.uBrightness, this.brightness);
    } }), s.Image.filters.Brightness.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.util.object.extend, d = s.Image.filters, A = s.util.createClass;
    d.Convolute = A(d.BaseFilter, { type: "Convolute", opaque: !1, matrix: [0, 0, 0, 0, 1, 0, 0, 0, 0], fragmentSource: { Convolute_3_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[9];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 3.0; h+=1.0) {
for (float w = 0.0; w < 3.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];
}
}
gl_FragColor = color;
}`, Convolute_3_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[9];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 3.0; h+=1.0) {
for (float w = 0.0; w < 3.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}`, Convolute_5_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[25];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 5.0; h+=1.0) {
for (float w = 0.0; w < 5.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];
}
}
gl_FragColor = color;
}`, Convolute_5_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[25];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 5.0; h+=1.0) {
for (float w = 0.0; w < 5.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}`, Convolute_7_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[49];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 7.0; h+=1.0) {
for (float w = 0.0; w < 7.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];
}
}
gl_FragColor = color;
}`, Convolute_7_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[49];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 7.0; h+=1.0) {
for (float w = 0.0; w < 7.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}`, Convolute_9_1: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[81];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 0);
for (float h = 0.0; h < 9.0; h+=1.0) {
for (float w = 0.0; w < 9.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];
}
}
gl_FragColor = color;
}`, Convolute_9_0: `precision highp float;
uniform sampler2D uTexture;
uniform float uMatrix[81];
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
vec4 color = vec4(0, 0, 0, 1);
for (float h = 0.0; h < 9.0; h+=1.0) {
for (float w = 0.0; w < 9.0; w+=1.0) {
vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];
}
}
float alpha = texture2D(uTexture, vTexCoord).a;
gl_FragColor = color;
gl_FragColor.a = alpha;
}` }, retrieveShader: function(i) {
      var n = Math.sqrt(this.matrix.length), h = this.type + "_" + n + "_" + (this.opaque ? 1 : 0), c = this.fragmentSource[h];
      return i.programCache.hasOwnProperty(h) || (i.programCache[h] = this.createProgram(i.context, c)), i.programCache[h];
    }, applyTo2d: function(i) {
      var n, h, c, l, f, m, v, x, U, F, k, O, P, R = i.imageData, Y = R.data, V = this.matrix, _ = Math.round(Math.sqrt(V.length)), T = Math.floor(_ / 2), M = R.width, N = R.height, X = i.ctx.createImageData(M, N), D = X.data, I = this.opaque ? 1 : 0;
      for (k = 0; k < N; k++)
        for (F = 0; F < M; F++) {
          for (f = 4 * (k * M + F), n = 0, h = 0, c = 0, l = 0, P = 0; P < _; P++)
            for (O = 0; O < _; O++)
              m = F + O - T, (v = k + P - T) < 0 || v >= N || m < 0 || m >= M || (x = 4 * (v * M + m), U = V[P * _ + O], n += Y[x] * U, h += Y[x + 1] * U, c += Y[x + 2] * U, I || (l += Y[x + 3] * U));
          D[f] = n, D[f + 1] = h, D[f + 2] = c, D[f + 3] = I ? Y[f + 3] : l;
        }
      i.imageData = X;
    }, getUniformLocations: function(i, n) {
      return { uMatrix: i.getUniformLocation(n, "uMatrix"), uOpaque: i.getUniformLocation(n, "uOpaque"), uHalfSize: i.getUniformLocation(n, "uHalfSize"), uSize: i.getUniformLocation(n, "uSize") };
    }, sendUniformData: function(i, n) {
      i.uniform1fv(n.uMatrix, this.matrix);
    }, toObject: function() {
      return o(this.callSuper("toObject"), { opaque: this.opaque, matrix: this.matrix });
    } }), s.Image.filters.Convolute.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.Image.filters, d = s.util.createClass;
    o.Grayscale = d(o.BaseFilter, { type: "Grayscale", fragmentSource: { average: `precision highp float;
uniform sampler2D uTexture;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float average = (color.r + color.b + color.g) / 3.0;
gl_FragColor = vec4(average, average, average, color.a);
}`, lightness: `precision highp float;
uniform sampler2D uTexture;
uniform int uMode;
varying vec2 vTexCoord;
void main() {
vec4 col = texture2D(uTexture, vTexCoord);
float average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;
gl_FragColor = vec4(average, average, average, col.a);
}`, luminosity: `precision highp float;
uniform sampler2D uTexture;
uniform int uMode;
varying vec2 vTexCoord;
void main() {
vec4 col = texture2D(uTexture, vTexCoord);
float average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;
gl_FragColor = vec4(average, average, average, col.a);
}` }, mode: "average", mainParameter: "mode", applyTo2d: function(A) {
      var i, n, h = A.imageData.data, c = h.length, l = this.mode;
      for (i = 0; i < c; i += 4)
        l === "average" ? n = (h[i] + h[i + 1] + h[i + 2]) / 3 : l === "lightness" ? n = (Math.min(h[i], h[i + 1], h[i + 2]) + Math.max(h[i], h[i + 1], h[i + 2])) / 2 : l === "luminosity" && (n = 0.21 * h[i] + 0.72 * h[i + 1] + 0.07 * h[i + 2]), h[i] = n, h[i + 1] = n, h[i + 2] = n;
    }, retrieveShader: function(A) {
      var i = this.type + "_" + this.mode;
      if (!A.programCache.hasOwnProperty(i)) {
        var n = this.fragmentSource[this.mode];
        A.programCache[i] = this.createProgram(A.context, n);
      }
      return A.programCache[i];
    }, getUniformLocations: function(A, i) {
      return { uMode: A.getUniformLocation(i, "uMode") };
    }, sendUniformData: function(A, i) {
      A.uniform1i(i.uMode, 1);
    }, isNeutralState: function() {
      return !1;
    } }), s.Image.filters.Grayscale.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.Image.filters, d = s.util.createClass;
    o.Invert = d(o.BaseFilter, { type: "Invert", fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform int uInvert;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
if (uInvert == 1) {
gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);
} else {
gl_FragColor = color;
}
}`, invert: !0, mainParameter: "invert", applyTo2d: function(A) {
      var i, n = A.imageData.data, h = n.length;
      for (i = 0; i < h; i += 4)
        n[i] = 255 - n[i], n[i + 1] = 255 - n[i + 1], n[i + 2] = 255 - n[i + 2];
    }, isNeutralState: function() {
      return !this.invert;
    }, getUniformLocations: function(A, i) {
      return { uInvert: A.getUniformLocation(i, "uInvert") };
    }, sendUniformData: function(A, i) {
      A.uniform1i(i.uInvert, this.invert);
    } }), s.Image.filters.Invert.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.util.object.extend, d = s.Image.filters, A = s.util.createClass;
    d.Noise = A(d.BaseFilter, { type: "Noise", fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uStepH;
uniform float uNoise;
uniform float uSeed;
varying vec2 vTexCoord;
float rand(vec2 co, float seed, float vScale) {
return fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);
}
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
color.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;
gl_FragColor = color;
}`, mainParameter: "noise", noise: 0, applyTo2d: function(i) {
      if (this.noise !== 0) {
        var n, h, c = i.imageData.data, l = c.length, f = this.noise;
        for (n = 0, l = c.length; n < l; n += 4)
          h = (0.5 - Math.random()) * f, c[n] += h, c[n + 1] += h, c[n + 2] += h;
      }
    }, getUniformLocations: function(i, n) {
      return { uNoise: i.getUniformLocation(n, "uNoise"), uSeed: i.getUniformLocation(n, "uSeed") };
    }, sendUniformData: function(i, n) {
      i.uniform1f(n.uNoise, this.noise / 255), i.uniform1f(n.uSeed, Math.random());
    }, toObject: function() {
      return o(this.callSuper("toObject"), { noise: this.noise });
    } }), s.Image.filters.Noise.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.Image.filters, d = s.util.createClass;
    o.Pixelate = d(o.BaseFilter, { type: "Pixelate", blocksize: 4, mainParameter: "blocksize", fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uBlocksize;
uniform float uStepW;
uniform float uStepH;
varying vec2 vTexCoord;
void main() {
float blockW = uBlocksize * uStepW;
float blockH = uBlocksize * uStepW;
int posX = int(vTexCoord.x / blockW);
int posY = int(vTexCoord.y / blockH);
float fposX = float(posX);
float fposY = float(posY);
vec2 squareCoords = vec2(fposX * blockW, fposY * blockH);
vec4 color = texture2D(uTexture, squareCoords);
gl_FragColor = color;
}`, applyTo2d: function(A) {
      var i, n, h, c, l, f, m, v, x, U, F, k = A.imageData, O = k.data, P = k.height, R = k.width;
      for (n = 0; n < P; n += this.blocksize)
        for (h = 0; h < R; h += this.blocksize)
          for (c = O[i = 4 * n * R + 4 * h], l = O[i + 1], f = O[i + 2], m = O[i + 3], U = Math.min(n + this.blocksize, P), F = Math.min(h + this.blocksize, R), v = n; v < U; v++)
            for (x = h; x < F; x++)
              O[i = 4 * v * R + 4 * x] = c, O[i + 1] = l, O[i + 2] = f, O[i + 3] = m;
    }, isNeutralState: function() {
      return this.blocksize === 1;
    }, getUniformLocations: function(A, i) {
      return { uBlocksize: A.getUniformLocation(i, "uBlocksize"), uStepW: A.getUniformLocation(i, "uStepW"), uStepH: A.getUniformLocation(i, "uStepH") };
    }, sendUniformData: function(A, i) {
      A.uniform1f(i.uBlocksize, this.blocksize);
    } }), s.Image.filters.Pixelate.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.util.object.extend, d = s.Image.filters, A = s.util.createClass;
    d.RemoveColor = A(d.BaseFilter, { type: "RemoveColor", color: "#FFFFFF", fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform vec4 uLow;
uniform vec4 uHigh;
varying vec2 vTexCoord;
void main() {
gl_FragColor = texture2D(uTexture, vTexCoord);
if(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {
gl_FragColor.a = 0.0;
}
}`, distance: 0.02, useAlpha: !1, applyTo2d: function(i) {
      var n, h, c, l, f = i.imageData.data, m = 255 * this.distance, v = new s.Color(this.color).getSource(), x = [v[0] - m, v[1] - m, v[2] - m], U = [v[0] + m, v[1] + m, v[2] + m];
      for (n = 0; n < f.length; n += 4)
        h = f[n], c = f[n + 1], l = f[n + 2], h > x[0] && c > x[1] && l > x[2] && h < U[0] && c < U[1] && l < U[2] && (f[n + 3] = 0);
    }, getUniformLocations: function(i, n) {
      return { uLow: i.getUniformLocation(n, "uLow"), uHigh: i.getUniformLocation(n, "uHigh") };
    }, sendUniformData: function(i, n) {
      var h = new s.Color(this.color).getSource(), c = parseFloat(this.distance), l = [0 + h[0] / 255 - c, 0 + h[1] / 255 - c, 0 + h[2] / 255 - c, 1], f = [h[0] / 255 + c, h[1] / 255 + c, h[2] / 255 + c, 1];
      i.uniform4fv(n.uLow, l), i.uniform4fv(n.uHigh, f);
    }, toObject: function() {
      return o(this.callSuper("toObject"), { color: this.color, distance: this.distance });
    } }), s.Image.filters.RemoveColor.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.Image.filters, d = s.util.createClass, A = { Brownie: [0.5997, 0.34553, -0.27082, 0, 0.186, -0.0377, 0.86095, 0.15059, 0, -0.1449, 0.24113, -0.07441, 0.44972, 0, -0.02965, 0, 0, 0, 1, 0], Vintage: [0.62793, 0.32021, -0.03965, 0, 0.03784, 0.02578, 0.64411, 0.03259, 0, 0.02926, 0.0466, -0.08512, 0.52416, 0, 0.02023, 0, 0, 0, 1, 0], Kodachrome: [1.12855, -0.39673, -0.03992, 0, 0.24991, -0.16404, 1.08352, -0.05498, 0, 0.09698, -0.16786, -0.56034, 1.60148, 0, 0.13972, 0, 0, 0, 1, 0], Technicolor: [1.91252, -0.85453, -0.09155, 0, 0.04624, -0.30878, 1.76589, -0.10601, 0, -0.27589, -0.2311, -0.75018, 1.84759, 0, 0.12137, 0, 0, 0, 1, 0], Polaroid: [1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016, -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0], Sepia: [0.393, 0.769, 0.189, 0, 0, 0.349, 0.686, 0.168, 0, 0, 0.272, 0.534, 0.131, 0, 0, 0, 0, 0, 1, 0], BlackWhite: [1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 0, 0, 0, 1, 0] };
    for (var i in A)
      o[i] = d(o.ColorMatrix, { type: i, matrix: A[i], mainParameter: !1, colorsOnly: !0 }), s.Image.filters[i].fromObject = s.Image.filters.BaseFilter.fromObject;
  }(e), function(u) {
    var s = u.fabric, o = s.Image.filters, d = s.util.createClass;
    o.BlendColor = d(o.BaseFilter, { type: "BlendColor", color: "#F95C63", mode: "multiply", alpha: 1, fragmentSource: { multiply: `gl_FragColor.rgb *= uColor.rgb;
`, screen: `gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);
`, add: `gl_FragColor.rgb += uColor.rgb;
`, diff: `gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);
`, subtract: `gl_FragColor.rgb -= uColor.rgb;
`, lighten: `gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);
`, darken: `gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);
`, exclusion: `gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);
`, overlay: `if (uColor.r < 0.5) {
gl_FragColor.r *= 2.0 * uColor.r;
} else {
gl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);
}
if (uColor.g < 0.5) {
gl_FragColor.g *= 2.0 * uColor.g;
} else {
gl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);
}
if (uColor.b < 0.5) {
gl_FragColor.b *= 2.0 * uColor.b;
} else {
gl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);
}
`, tint: `gl_FragColor.rgb *= (1.0 - uColor.a);
gl_FragColor.rgb += uColor.rgb;
` }, buildSource: function(A) {
      return `precision highp float;
uniform sampler2D uTexture;
uniform vec4 uColor;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
gl_FragColor = color;
if (color.a > 0.0) {
` + this.fragmentSource[A] + `}
}`;
    }, retrieveShader: function(A) {
      var i, n = this.type + "_" + this.mode;
      return A.programCache.hasOwnProperty(n) || (i = this.buildSource(this.mode), A.programCache[n] = this.createProgram(A.context, i)), A.programCache[n];
    }, applyTo2d: function(A) {
      var i, n, h, c, l, f, m, v = A.imageData.data, x = v.length, U = 1 - this.alpha;
      i = (m = new s.Color(this.color).getSource())[0] * this.alpha, n = m[1] * this.alpha, h = m[2] * this.alpha;
      for (var F = 0; F < x; F += 4)
        switch (c = v[F], l = v[F + 1], f = v[F + 2], this.mode) {
          case "multiply":
            v[F] = c * i / 255, v[F + 1] = l * n / 255, v[F + 2] = f * h / 255;
            break;
          case "screen":
            v[F] = 255 - (255 - c) * (255 - i) / 255, v[F + 1] = 255 - (255 - l) * (255 - n) / 255, v[F + 2] = 255 - (255 - f) * (255 - h) / 255;
            break;
          case "add":
            v[F] = c + i, v[F + 1] = l + n, v[F + 2] = f + h;
            break;
          case "diff":
          case "difference":
            v[F] = Math.abs(c - i), v[F + 1] = Math.abs(l - n), v[F + 2] = Math.abs(f - h);
            break;
          case "subtract":
            v[F] = c - i, v[F + 1] = l - n, v[F + 2] = f - h;
            break;
          case "darken":
            v[F] = Math.min(c, i), v[F + 1] = Math.min(l, n), v[F + 2] = Math.min(f, h);
            break;
          case "lighten":
            v[F] = Math.max(c, i), v[F + 1] = Math.max(l, n), v[F + 2] = Math.max(f, h);
            break;
          case "overlay":
            v[F] = i < 128 ? 2 * c * i / 255 : 255 - 2 * (255 - c) * (255 - i) / 255, v[F + 1] = n < 128 ? 2 * l * n / 255 : 255 - 2 * (255 - l) * (255 - n) / 255, v[F + 2] = h < 128 ? 2 * f * h / 255 : 255 - 2 * (255 - f) * (255 - h) / 255;
            break;
          case "exclusion":
            v[F] = i + c - 2 * i * c / 255, v[F + 1] = n + l - 2 * n * l / 255, v[F + 2] = h + f - 2 * h * f / 255;
            break;
          case "tint":
            v[F] = i + c * U, v[F + 1] = n + l * U, v[F + 2] = h + f * U;
        }
    }, getUniformLocations: function(A, i) {
      return { uColor: A.getUniformLocation(i, "uColor") };
    }, sendUniformData: function(A, i) {
      var n = new s.Color(this.color).getSource();
      n[0] = this.alpha * n[0] / 255, n[1] = this.alpha * n[1] / 255, n[2] = this.alpha * n[2] / 255, n[3] = this.alpha, A.uniform4fv(i.uColor, n);
    }, toObject: function() {
      return { type: this.type, color: this.color, mode: this.mode, alpha: this.alpha };
    } }), s.Image.filters.BlendColor.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(e), function(u) {
    var s = u.fabric, o = s.Image.filters, d = s.util.createClass;
    o.BlendImage = d(o.BaseFilter, { type: "BlendImage", image: null, mode: "multiply", alpha: 1, vertexSource: `attribute vec2 aPosition;
varying vec2 vTexCoord;
varying vec2 vTexCoord2;
uniform mat3 uTransformMatrix;
void main() {
vTexCoord = aPosition;
vTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;
gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
}`, fragmentSource: { multiply: `precision highp float;
uniform sampler2D uTexture;
uniform sampler2D uImage;
uniform vec4 uColor;
varying vec2 vTexCoord;
varying vec2 vTexCoord2;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
vec4 color2 = texture2D(uImage, vTexCoord2);
color.rgba *= color2.rgba;
gl_FragColor = color;
}`, mask: `precision highp float;
uniform sampler2D uTexture;
uniform sampler2D uImage;
uniform vec4 uColor;
varying vec2 vTexCoord;
varying vec2 vTexCoord2;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
vec4 color2 = texture2D(uImage, vTexCoord2);
color.a = color2.a;
gl_FragColor = color;
}` }, retrieveShader: function(A) {
      var i = this.type + "_" + this.mode, n = this.fragmentSource[this.mode];
      return A.programCache.hasOwnProperty(i) || (A.programCache[i] = this.createProgram(A.context, n)), A.programCache[i];
    }, applyToWebGL: function(A) {
      var i = A.context, n = this.createTexture(A.filterBackend, this.image);
      this.bindAdditionalTexture(i, n, i.TEXTURE1), this.callSuper("applyToWebGL", A), this.unbindAdditionalTexture(i, i.TEXTURE1);
    }, createTexture: function(A, i) {
      return A.getCachedTexture(i.cacheKey, i._element);
    }, calculateMatrix: function() {
      var A = this.image, i = A._element.width, n = A._element.height;
      return [1 / A.scaleX, 0, 0, 0, 1 / A.scaleY, 0, -A.left / i, -A.top / n, 1];
    }, applyTo2d: function(A) {
      var i, n, h, c, l, f, m, v, x, U, F, k = A.imageData, O = A.filterBackend.resources, P = k.data, R = P.length, Y = k.width, V = k.height, _ = this.image;
      O.blendImage || (O.blendImage = s.util.createCanvasElement()), U = (x = O.blendImage).getContext("2d"), x.width !== Y || x.height !== V ? (x.width = Y, x.height = V) : U.clearRect(0, 0, Y, V), U.setTransform(_.scaleX, 0, 0, _.scaleY, _.left, _.top), U.drawImage(_._element, 0, 0, Y, V), F = U.getImageData(0, 0, Y, V).data;
      for (var T = 0; T < R; T += 4)
        switch (l = P[T], f = P[T + 1], m = P[T + 2], v = P[T + 3], i = F[T], n = F[T + 1], h = F[T + 2], c = F[T + 3], this.mode) {
          case "multiply":
            P[T] = l * i / 255, P[T + 1] = f * n / 255, P[T + 2] = m * h / 255, P[T + 3] = v * c / 255;
            break;
          case "mask":
            P[T + 3] = c;
        }
    }, getUniformLocations: function(A, i) {
      return { uTransformMatrix: A.getUniformLocation(i, "uTransformMatrix"), uImage: A.getUniformLocation(i, "uImage") };
    }, sendUniformData: function(A, i) {
      var n = this.calculateMatrix();
      A.uniform1i(i.uImage, 1), A.uniformMatrix3fv(i.uTransformMatrix, !1, n);
    }, toObject: function() {
      return { type: this.type, image: this.image && this.image.toObject(), mode: this.mode, alpha: this.alpha };
    } }), s.Image.filters.BlendImage.fromObject = function(A, i) {
      s.Image.fromObject(A.image, function(n) {
        var h = s.util.object.clone(A);
        h.image = n, i(new s.Image.filters.BlendImage(h));
      });
    };
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = Math.pow, d = Math.floor, A = Math.sqrt, i = Math.abs, n = Math.round, h = Math.sin, c = Math.ceil, l = s.Image.filters, f = s.util.createClass;
    l.Resize = f(l.BaseFilter, { type: "Resize", resizeType: "hermite", scaleX: 1, scaleY: 1, lanczosLobes: 3, getUniformLocations: function(m, v) {
      return { uDelta: m.getUniformLocation(v, "uDelta"), uTaps: m.getUniformLocation(v, "uTaps") };
    }, sendUniformData: function(m, v) {
      m.uniform2fv(v.uDelta, this.horizontal ? [1 / this.width, 0] : [0, 1 / this.height]), m.uniform1fv(v.uTaps, this.taps);
    }, retrieveShader: function(m) {
      var v = this.getFilterWindow(), x = this.type + "_" + v;
      if (!m.programCache.hasOwnProperty(x)) {
        var U = this.generateShader(v);
        m.programCache[x] = this.createProgram(m.context, U);
      }
      return m.programCache[x];
    }, getFilterWindow: function() {
      var m = this.tempScale;
      return Math.ceil(this.lanczosLobes / m);
    }, getTaps: function() {
      for (var m = this.lanczosCreate(this.lanczosLobes), v = this.tempScale, x = this.getFilterWindow(), U = new Array(x), F = 1; F <= x; F++)
        U[F - 1] = m(F * v);
      return U;
    }, generateShader: function(m) {
      for (var v = new Array(m), x = this.fragmentSourceTOP, U = 1; U <= m; U++)
        v[U - 1] = U + ".0 * uDelta";
      return x += "uniform float uTaps[" + m + `];
`, x += `void main() {
`, x += `  vec4 color = texture2D(uTexture, vTexCoord);
`, x += `  float sum = 1.0;
`, v.forEach(function(F, k) {
        x += "  color += texture2D(uTexture, vTexCoord + " + F + ") * uTaps[" + k + `];
`, x += "  color += texture2D(uTexture, vTexCoord - " + F + ") * uTaps[" + k + `];
`, x += "  sum += 2.0 * uTaps[" + k + `];
`;
      }), x += `  gl_FragColor = color / sum;
`, x += "}";
    }, fragmentSourceTOP: `precision highp float;
uniform sampler2D uTexture;
uniform vec2 uDelta;
varying vec2 vTexCoord;
`, applyTo: function(m) {
      m.webgl ? (m.passes++, this.width = m.sourceWidth, this.horizontal = !0, this.dW = Math.round(this.width * this.scaleX), this.dH = m.sourceHeight, this.tempScale = this.dW / this.width, this.taps = this.getTaps(), m.destinationWidth = this.dW, this._setupFrameBuffer(m), this.applyToWebGL(m), this._swapTextures(m), m.sourceWidth = m.destinationWidth, this.height = m.sourceHeight, this.horizontal = !1, this.dH = Math.round(this.height * this.scaleY), this.tempScale = this.dH / this.height, this.taps = this.getTaps(), m.destinationHeight = this.dH, this._setupFrameBuffer(m), this.applyToWebGL(m), this._swapTextures(m), m.sourceHeight = m.destinationHeight) : this.applyTo2d(m);
    }, isNeutralState: function() {
      return this.scaleX === 1 && this.scaleY === 1;
    }, lanczosCreate: function(m) {
      return function(v) {
        if (v >= m || v <= -m)
          return 0;
        if (v < 11920929e-14 && v > -11920929e-14)
          return 1;
        var x = (v *= Math.PI) / m;
        return h(v) / v * h(x) / x;
      };
    }, applyTo2d: function(m) {
      var v = m.imageData, x = this.scaleX, U = this.scaleY;
      this.rcpScaleX = 1 / x, this.rcpScaleY = 1 / U;
      var F, k = v.width, O = v.height, P = n(k * x), R = n(O * U);
      this.resizeType === "sliceHack" ? F = this.sliceByTwo(m, k, O, P, R) : this.resizeType === "hermite" ? F = this.hermiteFastResize(m, k, O, P, R) : this.resizeType === "bilinear" ? F = this.bilinearFiltering(m, k, O, P, R) : this.resizeType === "lanczos" && (F = this.lanczosResize(m, k, O, P, R)), m.imageData = F;
    }, sliceByTwo: function(m, v, x, U, F) {
      var k, O, P = m.imageData, R = 0.5, Y = !1, V = !1, _ = v * R, T = x * R, M = s.filterBackend.resources, N = 0, X = 0, D = v, I = 0;
      for (M.sliceByTwo || (M.sliceByTwo = document.createElement("canvas")), ((k = M.sliceByTwo).width < 1.5 * v || k.height < x) && (k.width = 1.5 * v, k.height = x), (O = k.getContext("2d")).clearRect(0, 0, 1.5 * v, x), O.putImageData(P, 0, 0), U = d(U), F = d(F); !Y || !V; )
        v = _, x = T, U < d(_ * R) ? _ = d(_ * R) : (_ = U, Y = !0), F < d(T * R) ? T = d(T * R) : (T = F, V = !0), O.drawImage(k, N, X, v, x, D, I, _, T), N = D, X = I, I += T;
      return O.getImageData(N, X, U, F);
    }, lanczosResize: function(m, v, x, U, F) {
      var k = m.imageData.data, O = m.ctx.createImageData(U, F), P = O.data, R = this.lanczosCreate(this.lanczosLobes), Y = this.rcpScaleX, V = this.rcpScaleY, _ = 2 / this.rcpScaleX, T = 2 / this.rcpScaleY, M = c(Y * this.lanczosLobes / 2), N = c(V * this.lanczosLobes / 2), X = {}, D = {}, I = {};
      return function K(W) {
        var G, z, $, eA, rA, Z, nA, q, lA, sA, hA;
        for (D.x = (W + 0.5) * Y, I.x = d(D.x), G = 0; G < F; G++) {
          for (D.y = (G + 0.5) * V, I.y = d(D.y), rA = 0, Z = 0, nA = 0, q = 0, lA = 0, z = I.x - M; z <= I.x + M; z++)
            if (!(z < 0 || z >= v)) {
              sA = d(1e3 * i(z - D.x)), X[sA] || (X[sA] = {});
              for (var BA = I.y - N; BA <= I.y + N; BA++)
                BA < 0 || BA >= x || (hA = d(1e3 * i(BA - D.y)), X[sA][hA] || (X[sA][hA] = R(A(o(sA * _, 2) + o(hA * T, 2)) / 1e3)), ($ = X[sA][hA]) > 0 && (rA += $, Z += $ * k[eA = 4 * (BA * v + z)], nA += $ * k[eA + 1], q += $ * k[eA + 2], lA += $ * k[eA + 3]));
            }
          P[eA = 4 * (G * U + W)] = Z / rA, P[eA + 1] = nA / rA, P[eA + 2] = q / rA, P[eA + 3] = lA / rA;
        }
        return ++W < U ? K(W) : O;
      }(0);
    }, bilinearFiltering: function(m, v, x, U, F) {
      var k, O, P, R, Y, V, _, T, M, N = 0, X = this.rcpScaleX, D = this.rcpScaleY, I = 4 * (v - 1), K = m.imageData.data, W = m.ctx.createImageData(U, F), G = W.data;
      for (P = 0; P < F; P++)
        for (R = 0; R < U; R++)
          for (Y = X * R - (k = d(X * R)), V = D * P - (O = d(D * P)), M = 4 * (O * v + k), _ = 0; _ < 4; _++)
            T = K[M + _] * (1 - Y) * (1 - V) + K[M + 4 + _] * Y * (1 - V) + K[M + I + _] * V * (1 - Y) + K[M + I + 4 + _] * Y * V, G[N++] = T;
      return W;
    }, hermiteFastResize: function(m, v, x, U, F) {
      for (var k = this.rcpScaleX, O = this.rcpScaleY, P = c(k / 2), R = c(O / 2), Y = m.imageData.data, V = m.ctx.createImageData(U, F), _ = V.data, T = 0; T < F; T++)
        for (var M = 0; M < U; M++) {
          for (var N = 4 * (M + T * U), X = 0, D = 0, I = 0, K = 0, W = 0, G = 0, z = 0, $ = (T + 0.5) * O, eA = d(T * O); eA < (T + 1) * O; eA++)
            for (var rA = i($ - (eA + 0.5)) / R, Z = (M + 0.5) * k, nA = rA * rA, q = d(M * k); q < (M + 1) * k; q++) {
              var lA = i(Z - (q + 0.5)) / P, sA = A(nA + lA * lA);
              sA > 1 && sA < -1 || (X = 2 * sA * sA * sA - 3 * sA * sA + 1) > 0 && (z += X * Y[(lA = 4 * (q + eA * v)) + 3], I += X, Y[lA + 3] < 255 && (X = X * Y[lA + 3] / 250), K += X * Y[lA], W += X * Y[lA + 1], G += X * Y[lA + 2], D += X);
            }
          _[N] = K / D, _[N + 1] = W / D, _[N + 2] = G / D, _[N + 3] = z / I;
        }
      return V;
    }, toObject: function() {
      return { type: this.type, scaleX: this.scaleX, scaleY: this.scaleY, resizeType: this.resizeType, lanczosLobes: this.lanczosLobes };
    } }), s.Image.filters.Resize.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.Image.filters, d = s.util.createClass;
    o.Contrast = d(o.BaseFilter, { type: "Contrast", fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uContrast;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));
color.rgb = contrastF * (color.rgb - 0.5) + 0.5;
gl_FragColor = color;
}`, contrast: 0, mainParameter: "contrast", applyTo2d: function(A) {
      if (this.contrast !== 0) {
        var i, n = A.imageData.data, h = n.length, c = Math.floor(255 * this.contrast), l = 259 * (c + 255) / (255 * (259 - c));
        for (i = 0; i < h; i += 4)
          n[i] = l * (n[i] - 128) + 128, n[i + 1] = l * (n[i + 1] - 128) + 128, n[i + 2] = l * (n[i + 2] - 128) + 128;
      }
    }, getUniformLocations: function(A, i) {
      return { uContrast: A.getUniformLocation(i, "uContrast") };
    }, sendUniformData: function(A, i) {
      A.uniform1f(i.uContrast, this.contrast);
    } }), s.Image.filters.Contrast.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.Image.filters, d = s.util.createClass;
    o.Saturation = d(o.BaseFilter, { type: "Saturation", fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uSaturation;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float rgMax = max(color.r, color.g);
float rgbMax = max(rgMax, color.b);
color.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;
color.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;
color.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;
gl_FragColor = color;
}`, saturation: 0, mainParameter: "saturation", applyTo2d: function(A) {
      if (this.saturation !== 0) {
        var i, n, h = A.imageData.data, c = h.length, l = -this.saturation;
        for (i = 0; i < c; i += 4)
          n = Math.max(h[i], h[i + 1], h[i + 2]), h[i] += n !== h[i] ? (n - h[i]) * l : 0, h[i + 1] += n !== h[i + 1] ? (n - h[i + 1]) * l : 0, h[i + 2] += n !== h[i + 2] ? (n - h[i + 2]) * l : 0;
      }
    }, getUniformLocations: function(A, i) {
      return { uSaturation: A.getUniformLocation(i, "uSaturation") };
    }, sendUniformData: function(A, i) {
      A.uniform1f(i.uSaturation, -this.saturation);
    } }), s.Image.filters.Saturation.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.Image.filters, d = s.util.createClass;
    o.Vibrance = d(o.BaseFilter, { type: "Vibrance", fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uVibrance;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float max = max(color.r, max(color.g, color.b));
float avg = (color.r + color.g + color.b) / 3.0;
float amt = (abs(max - avg) * 2.0) * uVibrance;
color.r += max != color.r ? (max - color.r) * amt : 0.00;
color.g += max != color.g ? (max - color.g) * amt : 0.00;
color.b += max != color.b ? (max - color.b) * amt : 0.00;
gl_FragColor = color;
}`, vibrance: 0, mainParameter: "vibrance", applyTo2d: function(A) {
      if (this.vibrance !== 0) {
        var i, n, h, c, l = A.imageData.data, f = l.length, m = -this.vibrance;
        for (i = 0; i < f; i += 4)
          n = Math.max(l[i], l[i + 1], l[i + 2]), h = (l[i] + l[i + 1] + l[i + 2]) / 3, c = 2 * Math.abs(n - h) / 255 * m, l[i] += n !== l[i] ? (n - l[i]) * c : 0, l[i + 1] += n !== l[i + 1] ? (n - l[i + 1]) * c : 0, l[i + 2] += n !== l[i + 2] ? (n - l[i + 2]) * c : 0;
      }
    }, getUniformLocations: function(A, i) {
      return { uVibrance: A.getUniformLocation(i, "uVibrance") };
    }, sendUniformData: function(A, i) {
      A.uniform1f(i.uVibrance, -this.vibrance);
    } }), s.Image.filters.Vibrance.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.Image.filters, d = s.util.createClass;
    o.Blur = d(o.BaseFilter, { type: "Blur", fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform vec2 uDelta;
varying vec2 vTexCoord;
const float nSamples = 15.0;
vec3 v3offset = vec3(12.9898, 78.233, 151.7182);
float random(vec3 scale) {
return fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);
}
void main() {
vec4 color = vec4(0.0);
float total = 0.0;
float offset = random(v3offset);
for (float t = -nSamples; t <= nSamples; t++) {
float percent = (t + offset - 0.5) / nSamples;
float weight = 1.0 - abs(percent);
color += texture2D(uTexture, vTexCoord + uDelta * percent) * weight;
total += weight;
}
gl_FragColor = color / total;
}`, blur: 0, mainParameter: "blur", applyTo: function(A) {
      A.webgl ? (this.aspectRatio = A.sourceWidth / A.sourceHeight, A.passes++, this._setupFrameBuffer(A), this.horizontal = !0, this.applyToWebGL(A), this._swapTextures(A), this._setupFrameBuffer(A), this.horizontal = !1, this.applyToWebGL(A), this._swapTextures(A)) : this.applyTo2d(A);
    }, applyTo2d: function(A) {
      A.imageData = this.simpleBlur(A);
    }, simpleBlur: function(A) {
      var i, n, h = A.filterBackend.resources, c = A.imageData.width, l = A.imageData.height;
      h.blurLayer1 || (h.blurLayer1 = s.util.createCanvasElement(), h.blurLayer2 = s.util.createCanvasElement()), i = h.blurLayer1, n = h.blurLayer2, i.width === c && i.height === l || (n.width = i.width = c, n.height = i.height = l);
      var f, m, v, x, U = i.getContext("2d"), F = n.getContext("2d"), k = 15, O = 0.06 * this.blur * 0.5;
      for (U.putImageData(A.imageData, 0, 0), F.clearRect(0, 0, c, l), x = -15; x <= k; x++)
        v = O * (m = x / k) * c + (f = (Math.random() - 0.5) / 4), F.globalAlpha = 1 - Math.abs(m), F.drawImage(i, v, f), U.drawImage(n, 0, 0), F.globalAlpha = 1, F.clearRect(0, 0, n.width, n.height);
      for (x = -15; x <= k; x++)
        v = O * (m = x / k) * l + (f = (Math.random() - 0.5) / 4), F.globalAlpha = 1 - Math.abs(m), F.drawImage(i, f, v), U.drawImage(n, 0, 0), F.globalAlpha = 1, F.clearRect(0, 0, n.width, n.height);
      A.ctx.drawImage(i, 0, 0);
      var P = A.ctx.getImageData(0, 0, i.width, i.height);
      return U.globalAlpha = 1, U.clearRect(0, 0, i.width, i.height), P;
    }, getUniformLocations: function(A, i) {
      return { delta: A.getUniformLocation(i, "uDelta") };
    }, sendUniformData: function(A, i) {
      var n = this.chooseRightDelta();
      A.uniform2fv(i.delta, n);
    }, chooseRightDelta: function() {
      var A, i = 1, n = [0, 0];
      return this.horizontal ? this.aspectRatio > 1 && (i = 1 / this.aspectRatio) : this.aspectRatio < 1 && (i = this.aspectRatio), A = i * this.blur * 0.12, this.horizontal ? n[0] = A : n[1] = A, n;
    } }), o.Blur.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.Image.filters, d = s.util.createClass;
    o.Gamma = d(o.BaseFilter, { type: "Gamma", fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform vec3 uGamma;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
vec3 correction = (1.0 / uGamma);
color.r = pow(color.r, correction.r);
color.g = pow(color.g, correction.g);
color.b = pow(color.b, correction.b);
gl_FragColor = color;
gl_FragColor.rgb *= color.a;
}`, gamma: [1, 1, 1], mainParameter: "gamma", initialize: function(A) {
      this.gamma = [1, 1, 1], o.BaseFilter.prototype.initialize.call(this, A);
    }, applyTo2d: function(A) {
      var i, n = A.imageData.data, h = this.gamma, c = n.length, l = 1 / h[0], f = 1 / h[1], m = 1 / h[2];
      for (this.rVals || (this.rVals = new Uint8Array(256), this.gVals = new Uint8Array(256), this.bVals = new Uint8Array(256)), i = 0, c = 256; i < c; i++)
        this.rVals[i] = 255 * Math.pow(i / 255, l), this.gVals[i] = 255 * Math.pow(i / 255, f), this.bVals[i] = 255 * Math.pow(i / 255, m);
      for (i = 0, c = n.length; i < c; i += 4)
        n[i] = this.rVals[n[i]], n[i + 1] = this.gVals[n[i + 1]], n[i + 2] = this.bVals[n[i + 2]];
    }, getUniformLocations: function(A, i) {
      return { uGamma: A.getUniformLocation(i, "uGamma") };
    }, sendUniformData: function(A, i) {
      A.uniform3fv(i.uGamma, this.gamma);
    } }), s.Image.filters.Gamma.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.Image.filters, d = s.util.createClass;
    o.Composed = d(o.BaseFilter, { type: "Composed", subFilters: [], initialize: function(A) {
      this.callSuper("initialize", A), this.subFilters = this.subFilters.slice(0);
    }, applyTo: function(A) {
      A.passes += this.subFilters.length - 1, this.subFilters.forEach(function(i) {
        i.applyTo(A);
      });
    }, toObject: function() {
      return s.util.object.extend(this.callSuper("toObject"), { subFilters: this.subFilters.map(function(A) {
        return A.toObject();
      }) });
    }, isNeutralState: function() {
      return !this.subFilters.some(function(A) {
        return !A.isNeutralState();
      });
    } }), s.Image.filters.Composed.fromObject = function(A, i) {
      var n = (A.subFilters || []).map(function(c) {
        return new s.Image.filters[c.type](c);
      }), h = new s.Image.filters.Composed({ subFilters: n });
      return i && i(h), h;
    };
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.Image.filters, d = s.util.createClass;
    o.HueRotation = d(o.ColorMatrix, { type: "HueRotation", rotation: 0, mainParameter: "rotation", calculateMatrix: function() {
      var A = this.rotation * Math.PI, i = s.util.cos(A), n = s.util.sin(A), h = 1 / 3, c = Math.sqrt(h) * n, l = 1 - i;
      this.matrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], this.matrix[0] = i + l / 3, this.matrix[1] = h * l - c, this.matrix[2] = h * l + c, this.matrix[5] = h * l + c, this.matrix[6] = i + h * l, this.matrix[7] = h * l - c, this.matrix[10] = h * l - c, this.matrix[11] = h * l + c, this.matrix[12] = i + h * l;
    }, isNeutralState: function(A) {
      return this.calculateMatrix(), o.BaseFilter.prototype.isNeutralState.call(this, A);
    }, applyTo: function(A) {
      this.calculateMatrix(), o.BaseFilter.prototype.applyTo.call(this, A);
    } }), s.Image.filters.HueRotation.fromObject = s.Image.filters.BaseFilter.fromObject;
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.util.object.clone;
    if (s.Text)
      s.warn("fabric.Text is already defined");
    else {
      var d = "fontFamily fontWeight fontSize text underline overline linethrough textAlign fontStyle lineHeight textBackgroundColor charSpacing styles direction path pathStartOffset pathSide pathAlign".split(" ");
      s.Text = s.util.createClass(s.Object, { _dimensionAffectingProps: ["fontSize", "fontWeight", "fontFamily", "fontStyle", "lineHeight", "text", "charSpacing", "textAlign", "styles", "path", "pathStartOffset", "pathSide", "pathAlign"], _reNewline: /\r?\n/, _reSpacesAndTabs: /[ \t\r]/g, _reSpaceAndTab: /[ \t\r]/, _reWords: /\S+/g, type: "text", fontSize: 40, fontWeight: "normal", fontFamily: "Times New Roman", underline: !1, overline: !1, linethrough: !1, textAlign: "left", fontStyle: "normal", lineHeight: 1.16, superscript: { size: 0.6, baseline: -0.35 }, subscript: { size: 0.6, baseline: 0.11 }, textBackgroundColor: "", stateProperties: s.Object.prototype.stateProperties.concat(d), cacheProperties: s.Object.prototype.cacheProperties.concat(d), stroke: null, shadow: null, path: null, pathStartOffset: 0, pathSide: "left", pathAlign: "baseline", _fontSizeFraction: 0.222, offsets: { underline: 0.1, linethrough: -0.315, overline: -0.88 }, _fontSizeMult: 1.13, charSpacing: 0, styles: null, _measuringContext: null, deltaY: 0, direction: "ltr", _styleProperties: ["stroke", "strokeWidth", "fill", "fontFamily", "fontSize", "fontWeight", "fontStyle", "underline", "overline", "linethrough", "deltaY", "textBackgroundColor"], __charBounds: [], CACHE_FONT_SIZE: 400, MIN_TEXT_WIDTH: 2, initialize: function(A, i) {
        this.styles = i && i.styles || {}, this.text = A, this.__skipDimension = !0, this.callSuper("initialize", i), this.path && this.setPathInfo(), this.__skipDimension = !1, this.initDimensions(), this.setCoords(), this.setupState({ propertySet: "_dimensionAffectingProps" });
      }, setPathInfo: function() {
        var A = this.path;
        A && (A.segmentsInfo = s.util.getPathSegmentsInfo(A.path));
      }, getMeasuringContext: function() {
        return s._measuringContext || (s._measuringContext = this.canvas && this.canvas.contextCache || s.util.createCanvasElement().getContext("2d")), s._measuringContext;
      }, _splitText: function() {
        var A = this._splitTextIntoLines(this.text);
        return this.textLines = A.lines, this._textLines = A.graphemeLines, this._unwrappedTextLines = A._unwrappedLines, this._text = A.graphemeText, A;
      }, initDimensions: function() {
        this.__skipDimension || (this._splitText(), this._clearCache(), this.path ? (this.width = this.path.width, this.height = this.path.height) : (this.width = this.calcTextWidth() || this.cursorWidth || this.MIN_TEXT_WIDTH, this.height = this.calcTextHeight()), this.textAlign.indexOf("justify") !== -1 && this.enlargeSpaces(), this.saveState({ propertySet: "_dimensionAffectingProps" }));
      }, enlargeSpaces: function() {
        for (var A, i, n, h, c, l, f, m = 0, v = this._textLines.length; m < v; m++)
          if ((this.textAlign === "justify" || m !== v - 1 && !this.isEndOfWrapping(m)) && (h = 0, c = this._textLines[m], (i = this.getLineWidth(m)) < this.width && (f = this.textLines[m].match(this._reSpacesAndTabs)))) {
            n = f.length, A = (this.width - i) / n;
            for (var x = 0, U = c.length; x <= U; x++)
              l = this.__charBounds[m][x], this._reSpaceAndTab.test(c[x]) ? (l.width += A, l.kernedWidth += A, l.left += h, h += A) : l.left += h;
          }
      }, isEndOfWrapping: function(A) {
        return A === this._textLines.length - 1;
      }, missingNewlineOffset: function() {
        return 1;
      }, toString: function() {
        return "#<fabric.Text (" + this.complexity() + '): { "text": "' + this.text + '", "fontFamily": "' + this.fontFamily + '" }>';
      }, _getCacheCanvasDimensions: function() {
        var A = this.callSuper("_getCacheCanvasDimensions"), i = this.fontSize;
        return A.width += i * A.zoomX, A.height += i * A.zoomY, A;
      }, _render: function(A) {
        var i = this.path;
        i && !i.isNotVisible() && i._render(A), this._setTextStyles(A), this._renderTextLinesBackground(A), this._renderTextDecoration(A, "underline"), this._renderText(A), this._renderTextDecoration(A, "overline"), this._renderTextDecoration(A, "linethrough");
      }, _renderText: function(A) {
        this.paintFirst === "stroke" ? (this._renderTextStroke(A), this._renderTextFill(A)) : (this._renderTextFill(A), this._renderTextStroke(A));
      }, _setTextStyles: function(A, i, n) {
        if (A.textBaseline = "alphabetical", this.path)
          switch (this.pathAlign) {
            case "center":
              A.textBaseline = "middle";
              break;
            case "ascender":
              A.textBaseline = "top";
              break;
            case "descender":
              A.textBaseline = "bottom";
          }
        A.font = this._getFontDeclaration(i, n);
      }, calcTextWidth: function() {
        for (var A = this.getLineWidth(0), i = 1, n = this._textLines.length; i < n; i++) {
          var h = this.getLineWidth(i);
          h > A && (A = h);
        }
        return A;
      }, _renderTextLine: function(A, i, n, h, c, l) {
        this._renderChars(A, i, n, h, c, l);
      }, _renderTextLinesBackground: function(A) {
        if (this.textBackgroundColor || this.styleHas("textBackgroundColor")) {
          for (var i, n, h, c, l, f, m, v = A.fillStyle, x = this._getLeftOffset(), U = this._getTopOffset(), F = 0, k = 0, O = this.path, P = 0, R = this._textLines.length; P < R; P++)
            if (i = this.getHeightOfLine(P), this.textBackgroundColor || this.styleHas("textBackgroundColor", P)) {
              h = this._textLines[P], n = this._getLineLeftOffset(P), k = 0, F = 0, c = this.getValueOfPropertyAt(P, 0, "textBackgroundColor");
              for (var Y = 0, V = h.length; Y < V; Y++)
                l = this.__charBounds[P][Y], f = this.getValueOfPropertyAt(P, Y, "textBackgroundColor"), O ? (A.save(), A.translate(l.renderLeft, l.renderTop), A.rotate(l.angle), A.fillStyle = f, f && A.fillRect(-l.width / 2, -i / this.lineHeight * (1 - this._fontSizeFraction), l.width, i / this.lineHeight), A.restore()) : f !== c ? (m = x + n + F, this.direction === "rtl" && (m = this.width - m - k), A.fillStyle = c, c && A.fillRect(m, U, k, i / this.lineHeight), F = l.left, k = l.width, c = f) : k += l.kernedWidth;
              f && !O && (m = x + n + F, this.direction === "rtl" && (m = this.width - m - k), A.fillStyle = f, A.fillRect(m, U, k, i / this.lineHeight)), U += i;
            } else
              U += i;
          A.fillStyle = v, this._removeShadow(A);
        }
      }, getFontCache: function(A) {
        var i = A.fontFamily.toLowerCase();
        s.charWidthsCache[i] || (s.charWidthsCache[i] = {});
        var n = s.charWidthsCache[i], h = A.fontStyle.toLowerCase() + "_" + (A.fontWeight + "").toLowerCase();
        return n[h] || (n[h] = {}), n[h];
      }, _measureChar: function(A, i, n, h) {
        var c, l, f, m, v = this.getFontCache(i), x = n + A, U = this._getFontDeclaration(i) === this._getFontDeclaration(h), F = i.fontSize / this.CACHE_FONT_SIZE;
        if (n && v[n] !== void 0 && (f = v[n]), v[A] !== void 0 && (m = c = v[A]), U && v[x] !== void 0 && (m = (l = v[x]) - f), c === void 0 || f === void 0 || l === void 0) {
          var k = this.getMeasuringContext();
          this._setTextStyles(k, i, !0);
        }
        return c === void 0 && (m = c = k.measureText(A).width, v[A] = c), f === void 0 && U && n && (f = k.measureText(n).width, v[n] = f), U && l === void 0 && (l = k.measureText(x).width, v[x] = l, m = l - f), { width: c * F, kernedWidth: m * F };
      }, getHeightOfChar: function(A, i) {
        return this.getValueOfPropertyAt(A, i, "fontSize");
      }, measureLine: function(A) {
        var i = this._measureLine(A);
        return this.charSpacing !== 0 && (i.width -= this._getWidthOfCharSpacing()), i.width < 0 && (i.width = 0), i;
      }, _measureLine: function(A) {
        var i, n, h, c, l, f, m = 0, v = this._textLines[A], x = new Array(v.length), U = 0, F = this.path, k = this.pathSide === "right";
        for (this.__charBounds[A] = x, i = 0; i < v.length; i++)
          n = v[i], c = this._getGraphemeBox(n, A, i, h), x[i] = c, m += c.kernedWidth, h = n;
        if (x[i] = { left: c ? c.left + c.width : 0, width: 0, kernedWidth: 0, height: this.fontSize }, F) {
          switch (f = F.segmentsInfo[F.segmentsInfo.length - 1].length, (l = s.util.getPointOnPath(F.path, 0, F.segmentsInfo)).x += F.pathOffset.x, l.y += F.pathOffset.y, this.textAlign) {
            case "left":
              U = k ? f - m : 0;
              break;
            case "center":
              U = (f - m) / 2;
              break;
            case "right":
              U = k ? 0 : f - m;
          }
          for (U += this.pathStartOffset * (k ? -1 : 1), i = k ? v.length - 1 : 0; k ? i >= 0 : i < v.length; k ? i-- : i++)
            c = x[i], U > f ? U %= f : U < 0 && (U += f), this._setGraphemeOnPath(U, c, l), U += c.kernedWidth;
        }
        return { width: m, numOfSpaces: 0 };
      }, _setGraphemeOnPath: function(A, i, n) {
        var h = A + i.kernedWidth / 2, c = this.path, l = s.util.getPointOnPath(c.path, h, c.segmentsInfo);
        i.renderLeft = l.x - n.x, i.renderTop = l.y - n.y, i.angle = l.angle + (this.pathSide === "right" ? Math.PI : 0);
      }, _getGraphemeBox: function(A, i, n, h, c) {
        var l, f = this.getCompleteStyleDeclaration(i, n), m = h ? this.getCompleteStyleDeclaration(i, n - 1) : {}, v = this._measureChar(A, f, h, m), x = v.kernedWidth, U = v.width;
        this.charSpacing !== 0 && (U += l = this._getWidthOfCharSpacing(), x += l);
        var F = { width: U, left: 0, height: f.fontSize, kernedWidth: x, deltaY: f.deltaY };
        if (n > 0 && !c) {
          var k = this.__charBounds[i][n - 1];
          F.left = k.left + k.width + v.kernedWidth - v.width;
        }
        return F;
      }, getHeightOfLine: function(A) {
        if (this.__lineHeights[A])
          return this.__lineHeights[A];
        for (var i = this._textLines[A], n = this.getHeightOfChar(A, 0), h = 1, c = i.length; h < c; h++)
          n = Math.max(this.getHeightOfChar(A, h), n);
        return this.__lineHeights[A] = n * this.lineHeight * this._fontSizeMult;
      }, calcTextHeight: function() {
        for (var A, i = 0, n = 0, h = this._textLines.length; n < h; n++)
          A = this.getHeightOfLine(n), i += n === h - 1 ? A / this.lineHeight : A;
        return i;
      }, _getLeftOffset: function() {
        return this.direction === "ltr" ? -this.width / 2 : this.width / 2;
      }, _getTopOffset: function() {
        return -this.height / 2;
      }, _renderTextCommon: function(A, i) {
        A.save();
        for (var n = 0, h = this._getLeftOffset(), c = this._getTopOffset(), l = 0, f = this._textLines.length; l < f; l++) {
          var m = this.getHeightOfLine(l), v = m / this.lineHeight, x = this._getLineLeftOffset(l);
          this._renderTextLine(i, A, this._textLines[l], h + x, c + n + v, l), n += m;
        }
        A.restore();
      }, _renderTextFill: function(A) {
        (this.fill || this.styleHas("fill")) && this._renderTextCommon(A, "fillText");
      }, _renderTextStroke: function(A) {
        (this.stroke && this.strokeWidth !== 0 || !this.isEmptyStyles()) && (this.shadow && !this.shadow.affectStroke && this._removeShadow(A), A.save(), this._setLineDash(A, this.strokeDashArray), A.beginPath(), this._renderTextCommon(A, "strokeText"), A.closePath(), A.restore());
      }, _renderChars: function(A, i, n, h, c, l) {
        var f, m, v, x, U, F = this.getHeightOfLine(l), k = this.textAlign.indexOf("justify") !== -1, O = "", P = 0, R = this.path, Y = !k && this.charSpacing === 0 && this.isEmptyStyles(l) && !R, V = this.direction === "ltr", _ = this.direction === "ltr" ? 1 : -1, T = i.canvas.getAttribute("dir");
        if (i.save(), T !== this.direction && (i.canvas.setAttribute("dir", V ? "ltr" : "rtl"), i.direction = V ? "ltr" : "rtl", i.textAlign = V ? "left" : "right"), c -= F * this._fontSizeFraction / this.lineHeight, Y)
          return this._renderChar(A, i, l, 0, n.join(""), h, c, F), void i.restore();
        for (var M = 0, N = n.length - 1; M <= N; M++)
          x = M === N || this.charSpacing || R, O += n[M], v = this.__charBounds[l][M], P === 0 ? (h += _ * (v.kernedWidth - v.width), P += v.width) : P += v.kernedWidth, k && !x && this._reSpaceAndTab.test(n[M]) && (x = !0), x || (f = f || this.getCompleteStyleDeclaration(l, M), m = this.getCompleteStyleDeclaration(l, M + 1), x = s.util.hasStyleChanged(f, m, !1)), x && (R ? (i.save(), i.translate(v.renderLeft, v.renderTop), i.rotate(v.angle), this._renderChar(A, i, l, M, O, -P / 2, 0, F), i.restore()) : (U = h, this._renderChar(A, i, l, M, O, U, c, F)), O = "", f = m, h += _ * P, P = 0);
        i.restore();
      }, _applyPatternGradientTransformText: function(A) {
        var i, n = s.util.createCanvasElement(), h = this.width + this.strokeWidth, c = this.height + this.strokeWidth;
        return n.width = h, n.height = c, (i = n.getContext("2d")).beginPath(), i.moveTo(0, 0), i.lineTo(h, 0), i.lineTo(h, c), i.lineTo(0, c), i.closePath(), i.translate(h / 2, c / 2), i.fillStyle = A.toLive(i), this._applyPatternGradientTransform(i, A), i.fill(), i.createPattern(n, "no-repeat");
      }, handleFiller: function(A, i, n) {
        var h, c;
        return n.toLive ? n.gradientUnits === "percentage" || n.gradientTransform || n.patternTransform ? (h = -this.width / 2, c = -this.height / 2, A.translate(h, c), A[i] = this._applyPatternGradientTransformText(n), { offsetX: h, offsetY: c }) : (A[i] = n.toLive(A, this), this._applyPatternGradientTransform(A, n)) : (A[i] = n, { offsetX: 0, offsetY: 0 });
      }, _setStrokeStyles: function(A, i) {
        return A.lineWidth = i.strokeWidth, A.lineCap = this.strokeLineCap, A.lineDashOffset = this.strokeDashOffset, A.lineJoin = this.strokeLineJoin, A.miterLimit = this.strokeMiterLimit, this.handleFiller(A, "strokeStyle", i.stroke);
      }, _setFillStyles: function(A, i) {
        return this.handleFiller(A, "fillStyle", i.fill);
      }, _renderChar: function(A, i, n, h, c, l, f) {
        var m, v, x = this._getStyleDeclaration(n, h), U = this.getCompleteStyleDeclaration(n, h), F = A === "fillText" && U.fill, k = A === "strokeText" && U.stroke && U.strokeWidth;
        (k || F) && (i.save(), F && (m = this._setFillStyles(i, U)), k && (v = this._setStrokeStyles(i, U)), i.font = this._getFontDeclaration(U), x && x.textBackgroundColor && this._removeShadow(i), x && x.deltaY && (f += x.deltaY), F && i.fillText(c, l - m.offsetX, f - m.offsetY), k && i.strokeText(c, l - v.offsetX, f - v.offsetY), i.restore());
      }, setSuperscript: function(A, i) {
        return this._setScript(A, i, this.superscript);
      }, setSubscript: function(A, i) {
        return this._setScript(A, i, this.subscript);
      }, _setScript: function(A, i, n) {
        var h = this.get2DCursorLocation(A, !0), c = this.getValueOfPropertyAt(h.lineIndex, h.charIndex, "fontSize"), l = this.getValueOfPropertyAt(h.lineIndex, h.charIndex, "deltaY"), f = { fontSize: c * n.size, deltaY: l + c * n.baseline };
        return this.setSelectionStyles(f, A, i), this;
      }, _getLineLeftOffset: function(A) {
        var i = this.getLineWidth(A), n = this.width - i, h = this.textAlign, c = this.direction, l = 0, f = this.isEndOfWrapping(A);
        return h === "justify" || h === "justify-center" && !f || h === "justify-right" && !f || h === "justify-left" && !f ? 0 : (h === "center" && (l = n / 2), h === "right" && (l = n), h === "justify-center" && (l = n / 2), h === "justify-right" && (l = n), c === "rtl" && (l -= n), l);
      }, _clearCache: function() {
        this.__lineWidths = [], this.__lineHeights = [], this.__charBounds = [];
      }, _shouldClearDimensionCache: function() {
        var A = this._forceClearCache;
        return A || (A = this.hasStateChanged("_dimensionAffectingProps")), A && (this.dirty = !0, this._forceClearCache = !1), A;
      }, getLineWidth: function(A) {
        if (this.__lineWidths[A] !== void 0)
          return this.__lineWidths[A];
        var i = this.measureLine(A).width;
        return this.__lineWidths[A] = i, i;
      }, _getWidthOfCharSpacing: function() {
        return this.charSpacing !== 0 ? this.fontSize * this.charSpacing / 1e3 : 0;
      }, getValueOfPropertyAt: function(A, i, n) {
        var h = this._getStyleDeclaration(A, i);
        return h && h[n] !== void 0 ? h[n] : this[n];
      }, _renderTextDecoration: function(A, i) {
        if (this[i] || this.styleHas(i)) {
          for (var n, h, c, l, f, m, v, x, U, F, k, O, P, R, Y, V, _ = this._getLeftOffset(), T = this._getTopOffset(), M = this.path, N = this._getWidthOfCharSpacing(), X = this.offsets[i], D = 0, I = this._textLines.length; D < I; D++)
            if (n = this.getHeightOfLine(D), this[i] || this.styleHas(i, D)) {
              v = this._textLines[D], R = n / this.lineHeight, l = this._getLineLeftOffset(D), F = 0, k = 0, x = this.getValueOfPropertyAt(D, 0, i), V = this.getValueOfPropertyAt(D, 0, "fill"), U = T + R * (1 - this._fontSizeFraction), h = this.getHeightOfChar(D, 0), f = this.getValueOfPropertyAt(D, 0, "deltaY");
              for (var K = 0, W = v.length; K < W; K++)
                if (O = this.__charBounds[D][K], P = this.getValueOfPropertyAt(D, K, i), Y = this.getValueOfPropertyAt(D, K, "fill"), c = this.getHeightOfChar(D, K), m = this.getValueOfPropertyAt(D, K, "deltaY"), M && P && Y)
                  A.save(), A.fillStyle = V, A.translate(O.renderLeft, O.renderTop), A.rotate(O.angle), A.fillRect(-O.kernedWidth / 2, X * c + m, O.kernedWidth, this.fontSize / 15), A.restore();
                else if ((P !== x || Y !== V || c !== h || m !== f) && k > 0) {
                  var G = _ + l + F;
                  this.direction === "rtl" && (G = this.width - G - k), x && V && (A.fillStyle = V, A.fillRect(G, U + X * h + f, k, this.fontSize / 15)), F = O.left, k = O.width, x = P, V = Y, h = c, f = m;
                } else
                  k += O.kernedWidth;
              G = _ + l + F, this.direction === "rtl" && (G = this.width - G - k), A.fillStyle = Y, P && Y && A.fillRect(G, U + X * h + f, k - N, this.fontSize / 15), T += n;
            } else
              T += n;
          this._removeShadow(A);
        }
      }, _getFontDeclaration: function(A, i) {
        var n = A || this, h = this.fontFamily, c = s.Text.genericFonts.indexOf(h.toLowerCase()) > -1, l = h === void 0 || h.indexOf("'") > -1 || h.indexOf(",") > -1 || h.indexOf('"') > -1 || c ? n.fontFamily : '"' + n.fontFamily + '"';
        return [s.isLikelyNode ? n.fontWeight : n.fontStyle, s.isLikelyNode ? n.fontStyle : n.fontWeight, i ? this.CACHE_FONT_SIZE + "px" : n.fontSize + "px", l].join(" ");
      }, render: function(A) {
        this.visible && (this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (this._shouldClearDimensionCache() && this.initDimensions(), this.callSuper("render", A)));
      }, _splitTextIntoLines: function(A) {
        for (var i = A.split(this._reNewline), n = new Array(i.length), h = [`
`], c = [], l = 0; l < i.length; l++)
          n[l] = s.util.string.graphemeSplit(i[l]), c = c.concat(n[l], h);
        return c.pop(), { _unwrappedLines: n, lines: i, graphemeText: c, graphemeLines: n };
      }, toObject: function(A) {
        var i = d.concat(A), n = this.callSuper("toObject", i);
        return n.styles = s.util.stylesToArray(this.styles, this.text), n.path && (n.path = this.path.toObject()), n;
      }, set: function(A, i) {
        this.callSuper("set", A, i);
        var n = !1, h = !1;
        if (typeof A == "object")
          for (var c in A)
            c === "path" && this.setPathInfo(), n = n || this._dimensionAffectingProps.indexOf(c) !== -1, h = h || c === "path";
        else
          n = this._dimensionAffectingProps.indexOf(A) !== -1, h = A === "path";
        return h && this.setPathInfo(), n && (this.initDimensions(), this.setCoords()), this;
      }, complexity: function() {
        return 1;
      } }), s.Text.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat("x y dx dy font-family font-style font-weight font-size letter-spacing text-decoration text-anchor".split(" ")), s.Text.DEFAULT_SVG_FONT_SIZE = 16, s.Text.fromElement = function(A, i, n) {
        if (!A)
          return i(null);
        var h = s.parseAttributes(A, s.Text.ATTRIBUTE_NAMES), c = h.textAnchor || "left";
        if ((n = s.util.object.extend(n ? o(n) : {}, h)).top = n.top || 0, n.left = n.left || 0, h.textDecoration) {
          var l = h.textDecoration;
          l.indexOf("underline") !== -1 && (n.underline = !0), l.indexOf("overline") !== -1 && (n.overline = !0), l.indexOf("line-through") !== -1 && (n.linethrough = !0), delete n.textDecoration;
        }
        "dx" in h && (n.left += h.dx), "dy" in h && (n.top += h.dy), "fontSize" in n || (n.fontSize = s.Text.DEFAULT_SVG_FONT_SIZE);
        var f = "";
        "textContent" in A ? f = A.textContent : "firstChild" in A && A.firstChild !== null && "data" in A.firstChild && A.firstChild.data !== null && (f = A.firstChild.data), f = f.replace(/^\s+|\s+$|\n+/g, "").replace(/\s+/g, " ");
        var m = n.strokeWidth;
        n.strokeWidth = 0;
        var v = new s.Text(f, n), x = v.getScaledHeight() / v.height, U = ((v.height + v.strokeWidth) * v.lineHeight - v.height) * x, F = v.getScaledHeight() + U, k = 0;
        c === "center" && (k = v.getScaledWidth() / 2), c === "right" && (k = v.getScaledWidth()), v.set({ left: v.left - k, top: v.top - (F - v.fontSize * (0.07 + v._fontSizeFraction)) / v.lineHeight, strokeWidth: m !== void 0 ? m : 1 }), i(v);
      }, s.Text.fromObject = function(A, i) {
        var n = o(A), h = A.path;
        return delete n.path, s.Object._fromObject("Text", n, function(c) {
          c.styles = s.util.stylesFromArray(A.styles, A.text), h ? s.Object._fromObject("Path", h, function(l) {
            c.set("path", l), i(c);
          }, "path") : i(c);
        }, "text");
      }, s.Text.genericFonts = ["sans-serif", "serif", "cursive", "fantasy", "monospace"], s.util.createAccessors && s.util.createAccessors(s.Text);
    }
  }(e), B.util.object.extend(B.Text.prototype, { isEmptyStyles: function(u) {
    if (!this.styles || u !== void 0 && !this.styles[u])
      return !0;
    var s = u === void 0 ? this.styles : { line: this.styles[u] };
    for (var o in s)
      for (var d in s[o])
        for (var A in s[o][d])
          return !1;
    return !0;
  }, styleHas: function(u, s) {
    if (!this.styles || !u || u === "" || s !== void 0 && !this.styles[s])
      return !1;
    var o = s === void 0 ? this.styles : { 0: this.styles[s] };
    for (var d in o)
      for (var A in o[d])
        if (o[d][A][u] !== void 0)
          return !0;
    return !1;
  }, cleanStyle: function(u) {
    if (!this.styles || !u || u === "")
      return !1;
    var s, o, d = this.styles, A = 0, i = !0, n = 0;
    for (var h in d) {
      for (var c in s = 0, d[h]) {
        var l;
        A++, (l = d[h][c]).hasOwnProperty(u) ? (o ? l[u] !== o && (i = !1) : o = l[u], l[u] === this[u] && delete l[u]) : i = !1, Object.keys(l).length !== 0 ? s++ : delete d[h][c];
      }
      s === 0 && delete d[h];
    }
    for (var f = 0; f < this._textLines.length; f++)
      n += this._textLines[f].length;
    i && A === n && (this[u] = o, this.removeStyle(u));
  }, removeStyle: function(u) {
    if (this.styles && u && u !== "") {
      var s, o, d, A = this.styles;
      for (o in A) {
        for (d in s = A[o])
          delete s[d][u], Object.keys(s[d]).length === 0 && delete s[d];
        Object.keys(s).length === 0 && delete A[o];
      }
    }
  }, _extendStyles: function(u, s) {
    var o = this.get2DCursorLocation(u);
    this._getLineStyle(o.lineIndex) || this._setLineStyle(o.lineIndex), this._getStyleDeclaration(o.lineIndex, o.charIndex) || this._setStyleDeclaration(o.lineIndex, o.charIndex, {}), B.util.object.extend(this._getStyleDeclaration(o.lineIndex, o.charIndex), s);
  }, get2DCursorLocation: function(u, s) {
    u === void 0 && (u = this.selectionStart);
    for (var o = s ? this._unwrappedTextLines : this._textLines, d = o.length, A = 0; A < d; A++) {
      if (u <= o[A].length)
        return { lineIndex: A, charIndex: u };
      u -= o[A].length + this.missingNewlineOffset(A);
    }
    return { lineIndex: A - 1, charIndex: o[A - 1].length < u ? o[A - 1].length : u };
  }, getSelectionStyles: function(u, s, o) {
    u === void 0 && (u = this.selectionStart || 0), s === void 0 && (s = this.selectionEnd || u);
    for (var d = [], A = u; A < s; A++)
      d.push(this.getStyleAtPosition(A, o));
    return d;
  }, getStyleAtPosition: function(u, s) {
    var o = this.get2DCursorLocation(u);
    return (s ? this.getCompleteStyleDeclaration(o.lineIndex, o.charIndex) : this._getStyleDeclaration(o.lineIndex, o.charIndex)) || {};
  }, setSelectionStyles: function(u, s, o) {
    s === void 0 && (s = this.selectionStart || 0), o === void 0 && (o = this.selectionEnd || s);
    for (var d = s; d < o; d++)
      this._extendStyles(d, u);
    return this._forceClearCache = !0, this;
  }, _getStyleDeclaration: function(u, s) {
    var o = this.styles && this.styles[u];
    return o ? o[s] : null;
  }, getCompleteStyleDeclaration: function(u, s) {
    for (var o, d = this._getStyleDeclaration(u, s) || {}, A = {}, i = 0; i < this._styleProperties.length; i++)
      A[o = this._styleProperties[i]] = d[o] === void 0 ? this[o] : d[o];
    return A;
  }, _setStyleDeclaration: function(u, s, o) {
    this.styles[u][s] = o;
  }, _deleteStyleDeclaration: function(u, s) {
    delete this.styles[u][s];
  }, _getLineStyle: function(u) {
    return !!this.styles[u];
  }, _setLineStyle: function(u) {
    this.styles[u] = {};
  }, _deleteLineStyle: function(u) {
    delete this.styles[u];
  } }), function() {
    function u(s) {
      s.textDecoration && (s.textDecoration.indexOf("underline") > -1 && (s.underline = !0), s.textDecoration.indexOf("line-through") > -1 && (s.linethrough = !0), s.textDecoration.indexOf("overline") > -1 && (s.overline = !0), delete s.textDecoration);
    }
    B.IText = B.util.createClass(B.Text, B.Observable, { type: "i-text", selectionStart: 0, selectionEnd: 0, selectionColor: "rgba(17,119,255,0.3)", isEditing: !1, editable: !0, editingBorderColor: "rgba(102,153,255,0.25)", cursorWidth: 2, cursorColor: "", cursorDelay: 1e3, cursorDuration: 600, caching: !0, hiddenTextareaContainer: null, _reSpace: /\s|\n/, _currentCursorOpacity: 0, _selectionDirection: null, _abortCursorAnimation: !1, __widthOfSpace: [], inCompositionMode: !1, initialize: function(s, o) {
      this.callSuper("initialize", s, o), this.initBehavior();
    }, setSelectionStart: function(s) {
      s = Math.max(s, 0), this._updateAndFire("selectionStart", s);
    }, setSelectionEnd: function(s) {
      s = Math.min(s, this.text.length), this._updateAndFire("selectionEnd", s);
    }, _updateAndFire: function(s, o) {
      this[s] !== o && (this._fireSelectionChanged(), this[s] = o), this._updateTextarea();
    }, _fireSelectionChanged: function() {
      this.fire("selection:changed"), this.canvas && this.canvas.fire("text:selection:changed", { target: this });
    }, initDimensions: function() {
      this.isEditing && this.initDelayedCursor(), this.clearContextTop(), this.callSuper("initDimensions");
    }, render: function(s) {
      this.clearContextTop(), this.callSuper("render", s), this.cursorOffsetCache = {}, this.renderCursorOrSelection();
    }, _render: function(s) {
      this.callSuper("_render", s);
    }, clearContextTop: function(s) {
      if (this.isEditing && this.canvas && this.canvas.contextTop) {
        var o = this.canvas.contextTop, d = this.canvas.viewportTransform;
        o.save(), o.transform(d[0], d[1], d[2], d[3], d[4], d[5]), this.transform(o), this._clearTextArea(o), s || o.restore();
      }
    }, renderCursorOrSelection: function() {
      if (this.isEditing && this.canvas && this.canvas.contextTop) {
        var s = this._getCursorBoundaries(), o = this.canvas.contextTop;
        this.clearContextTop(!0), this.selectionStart === this.selectionEnd ? this.renderCursor(s, o) : this.renderSelection(s, o), o.restore();
      }
    }, _clearTextArea: function(s) {
      var o = this.width + 4, d = this.height + 4;
      s.clearRect(-o / 2, -d / 2, o, d);
    }, _getCursorBoundaries: function(s) {
      s === void 0 && (s = this.selectionStart);
      var o = this._getLeftOffset(), d = this._getTopOffset(), A = this._getCursorBoundariesOffsets(s);
      return { left: o, top: d, leftOffset: A.left, topOffset: A.top };
    }, _getCursorBoundariesOffsets: function(s) {
      if (this.cursorOffsetCache && "top" in this.cursorOffsetCache)
        return this.cursorOffsetCache;
      var o, d, A, i, n = 0, h = 0, c = this.get2DCursorLocation(s);
      A = c.charIndex, d = c.lineIndex;
      for (var l = 0; l < d; l++)
        n += this.getHeightOfLine(l);
      o = this._getLineLeftOffset(d);
      var f = this.__charBounds[d][A];
      return f && (h = f.left), this.charSpacing !== 0 && A === this._textLines[d].length && (h -= this._getWidthOfCharSpacing()), i = { top: n, left: o + (h > 0 ? h : 0) }, this.direction === "rtl" && (i.left *= -1), this.cursorOffsetCache = i, this.cursorOffsetCache;
    }, renderCursor: function(s, o) {
      var d = this.get2DCursorLocation(), A = d.lineIndex, i = d.charIndex > 0 ? d.charIndex - 1 : 0, n = this.getValueOfPropertyAt(A, i, "fontSize"), h = this.scaleX * this.canvas.getZoom(), c = this.cursorWidth / h, l = s.topOffset, f = this.getValueOfPropertyAt(A, i, "deltaY");
      l += (1 - this._fontSizeFraction) * this.getHeightOfLine(A) / this.lineHeight - n * (1 - this._fontSizeFraction), this.inCompositionMode && this.renderSelection(s, o), o.fillStyle = this.cursorColor || this.getValueOfPropertyAt(A, i, "fill"), o.globalAlpha = this.__isMousedown ? 1 : this._currentCursorOpacity, o.fillRect(s.left + s.leftOffset - c / 2, l + s.top + f, c, n);
    }, renderSelection: function(s, o) {
      for (var d = this.inCompositionMode ? this.hiddenTextarea.selectionStart : this.selectionStart, A = this.inCompositionMode ? this.hiddenTextarea.selectionEnd : this.selectionEnd, i = this.textAlign.indexOf("justify") !== -1, n = this.get2DCursorLocation(d), h = this.get2DCursorLocation(A), c = n.lineIndex, l = h.lineIndex, f = n.charIndex < 0 ? 0 : n.charIndex, m = h.charIndex < 0 ? 0 : h.charIndex, v = c; v <= l; v++) {
        var x, U = this._getLineLeftOffset(v) || 0, F = this.getHeightOfLine(v), k = 0, O = 0;
        if (v === c && (k = this.__charBounds[c][f].left), v >= c && v < l)
          O = i && !this.isEndOfWrapping(v) ? this.width : this.getLineWidth(v) || 5;
        else if (v === l)
          if (m === 0)
            O = this.__charBounds[l][m].left;
          else {
            var P = this._getWidthOfCharSpacing();
            O = this.__charBounds[l][m - 1].left + this.__charBounds[l][m - 1].width - P;
          }
        x = F, (this.lineHeight < 1 || v === l && this.lineHeight > 1) && (F /= this.lineHeight);
        var R = s.left + U + k, Y = O - k, V = F, _ = 0;
        this.inCompositionMode ? (o.fillStyle = this.compositionColor || "black", V = 1, _ = F) : o.fillStyle = this.selectionColor, this.direction === "rtl" && (R = this.width - R - Y), o.fillRect(R, s.top + s.topOffset + _, Y, V), s.topOffset += x;
      }
    }, getCurrentCharFontSize: function() {
      var s = this._getCurrentCharIndex();
      return this.getValueOfPropertyAt(s.l, s.c, "fontSize");
    }, getCurrentCharColor: function() {
      var s = this._getCurrentCharIndex();
      return this.getValueOfPropertyAt(s.l, s.c, "fill");
    }, _getCurrentCharIndex: function() {
      var s = this.get2DCursorLocation(this.selectionStart, !0), o = s.charIndex > 0 ? s.charIndex - 1 : 0;
      return { l: s.lineIndex, c: o };
    } }), B.IText.fromObject = function(s, o) {
      var d = B.util.stylesFromArray(s.styles, s.text), A = Object.assign({}, s, { styles: d });
      if (u(A), A.styles)
        for (var i in A.styles)
          for (var n in A.styles[i])
            u(A.styles[i][n]);
      B.Object._fromObject("IText", A, o, "text");
    };
  }(), j = B.util.object.clone, B.util.object.extend(B.IText.prototype, { initBehavior: function() {
    this.initAddedHandler(), this.initRemovedHandler(), this.initCursorSelectionHandlers(), this.initDoubleClickSimulation(), this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
  }, onDeselect: function() {
    this.isEditing && this.exitEditing(), this.selected = !1;
  }, initAddedHandler: function() {
    var u = this;
    this.on("added", function() {
      var s = u.canvas;
      s && (s._hasITextHandlers || (s._hasITextHandlers = !0, u._initCanvasHandlers(s)), s._iTextInstances = s._iTextInstances || [], s._iTextInstances.push(u));
    });
  }, initRemovedHandler: function() {
    var u = this;
    this.on("removed", function() {
      var s = u.canvas;
      s && (s._iTextInstances = s._iTextInstances || [], B.util.removeFromArray(s._iTextInstances, u), s._iTextInstances.length === 0 && (s._hasITextHandlers = !1, u._removeCanvasHandlers(s)));
    });
  }, _initCanvasHandlers: function(u) {
    u._mouseUpITextHandler = function() {
      u._iTextInstances && u._iTextInstances.forEach(function(s) {
        s.__isMousedown = !1;
      });
    }, u.on("mouse:up", u._mouseUpITextHandler);
  }, _removeCanvasHandlers: function(u) {
    u.off("mouse:up", u._mouseUpITextHandler);
  }, _tick: function() {
    this._currentTickState = this._animateCursor(this, 1, this.cursorDuration, "_onTickComplete");
  }, _animateCursor: function(u, s, o, d) {
    var A;
    return A = { isAborted: !1, abort: function() {
      this.isAborted = !0;
    } }, u.animate("_currentCursorOpacity", s, { duration: o, onComplete: function() {
      A.isAborted || u[d]();
    }, onChange: function() {
      u.canvas && u.selectionStart === u.selectionEnd && u.renderCursorOrSelection();
    }, abort: function() {
      return A.isAborted;
    } }), A;
  }, _onTickComplete: function() {
    var u = this;
    this._cursorTimeout1 && clearTimeout(this._cursorTimeout1), this._cursorTimeout1 = setTimeout(function() {
      u._currentTickCompleteState = u._animateCursor(u, 0, this.cursorDuration / 2, "_tick");
    }, 100);
  }, initDelayedCursor: function(u) {
    var s = this, o = u ? 0 : this.cursorDelay;
    this.abortCursorAnimation(), this._currentCursorOpacity = 1, this._cursorTimeout2 = setTimeout(function() {
      s._tick();
    }, o);
  }, abortCursorAnimation: function() {
    var u = this._currentTickState || this._currentTickCompleteState, s = this.canvas;
    this._currentTickState && this._currentTickState.abort(), this._currentTickCompleteState && this._currentTickCompleteState.abort(), clearTimeout(this._cursorTimeout1), clearTimeout(this._cursorTimeout2), this._currentCursorOpacity = 0, u && s && s.clearContext(s.contextTop || s.contextContainer);
  }, selectAll: function() {
    return this.selectionStart = 0, this.selectionEnd = this._text.length, this._fireSelectionChanged(), this._updateTextarea(), this;
  }, getSelectedText: function() {
    return this._text.slice(this.selectionStart, this.selectionEnd).join("");
  }, findWordBoundaryLeft: function(u) {
    var s = 0, o = u - 1;
    if (this._reSpace.test(this._text[o]))
      for (; this._reSpace.test(this._text[o]); )
        s++, o--;
    for (; /\S/.test(this._text[o]) && o > -1; )
      s++, o--;
    return u - s;
  }, findWordBoundaryRight: function(u) {
    var s = 0, o = u;
    if (this._reSpace.test(this._text[o]))
      for (; this._reSpace.test(this._text[o]); )
        s++, o++;
    for (; /\S/.test(this._text[o]) && o < this._text.length; )
      s++, o++;
    return u + s;
  }, findLineBoundaryLeft: function(u) {
    for (var s = 0, o = u - 1; !/\n/.test(this._text[o]) && o > -1; )
      s++, o--;
    return u - s;
  }, findLineBoundaryRight: function(u) {
    for (var s = 0, o = u; !/\n/.test(this._text[o]) && o < this._text.length; )
      s++, o++;
    return u + s;
  }, searchWordBoundary: function(u, s) {
    for (var o = this._text, d = this._reSpace.test(o[u]) ? u - 1 : u, A = o[d], i = B.reNonWord; !i.test(A) && d > 0 && d < o.length; )
      A = o[d += s];
    return i.test(A) && (d += s === 1 ? 0 : 1), d;
  }, selectWord: function(u) {
    u = u || this.selectionStart;
    var s = this.searchWordBoundary(u, -1), o = this.searchWordBoundary(u, 1);
    this.selectionStart = s, this.selectionEnd = o, this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection();
  }, selectLine: function(u) {
    u = u || this.selectionStart;
    var s = this.findLineBoundaryLeft(u), o = this.findLineBoundaryRight(u);
    return this.selectionStart = s, this.selectionEnd = o, this._fireSelectionChanged(), this._updateTextarea(), this;
  }, enterEditing: function(u) {
    if (!this.isEditing && this.editable)
      return this.canvas && (this.canvas.calcOffset(), this.exitEditingOnOthers(this.canvas)), this.isEditing = !0, this.initHiddenTextarea(u), this.hiddenTextarea.focus(), this.hiddenTextarea.value = this.text, this._updateTextarea(), this._saveEditingProps(), this._setEditingProps(), this._textBeforeEdit = this.text, this._tick(), this.fire("editing:entered"), this._fireSelectionChanged(), this.canvas ? (this.canvas.fire("text:editing:entered", { target: this }), this.initMouseMoveHandler(), this.canvas.requestRenderAll(), this) : this;
  }, exitEditingOnOthers: function(u) {
    u._iTextInstances && u._iTextInstances.forEach(function(s) {
      s.selected = !1, s.isEditing && s.exitEditing();
    });
  }, initMouseMoveHandler: function() {
    this.canvas.on("mouse:move", this.mouseMoveHandler);
  }, mouseMoveHandler: function(u) {
    if (this.__isMousedown && this.isEditing) {
      document.activeElement !== this.hiddenTextarea && this.hiddenTextarea.focus();
      var s = this.getSelectionStartFromPointer(u.e), o = this.selectionStart, d = this.selectionEnd;
      (s === this.__selectionStartOnMouseDown && o !== d || o !== s && d !== s) && (s > this.__selectionStartOnMouseDown ? (this.selectionStart = this.__selectionStartOnMouseDown, this.selectionEnd = s) : (this.selectionStart = s, this.selectionEnd = this.__selectionStartOnMouseDown), this.selectionStart === o && this.selectionEnd === d || (this.restartCursorIfNeeded(), this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection()));
    }
  }, _setEditingProps: function() {
    this.hoverCursor = "text", this.canvas && (this.canvas.defaultCursor = this.canvas.moveCursor = "text"), this.borderColor = this.editingBorderColor, this.hasControls = this.selectable = !1, this.lockMovementX = this.lockMovementY = !0;
  }, fromStringToGraphemeSelection: function(u, s, o) {
    var d = o.slice(0, u), A = B.util.string.graphemeSplit(d).length;
    if (u === s)
      return { selectionStart: A, selectionEnd: A };
    var i = o.slice(u, s);
    return { selectionStart: A, selectionEnd: A + B.util.string.graphemeSplit(i).length };
  }, fromGraphemeToStringSelection: function(u, s, o) {
    var d = o.slice(0, u).join("").length;
    return u === s ? { selectionStart: d, selectionEnd: d } : { selectionStart: d, selectionEnd: d + o.slice(u, s).join("").length };
  }, _updateTextarea: function() {
    if (this.cursorOffsetCache = {}, this.hiddenTextarea) {
      if (!this.inCompositionMode) {
        var u = this.fromGraphemeToStringSelection(this.selectionStart, this.selectionEnd, this._text);
        this.hiddenTextarea.selectionStart = u.selectionStart, this.hiddenTextarea.selectionEnd = u.selectionEnd;
      }
      this.updateTextareaPosition();
    }
  }, updateFromTextArea: function() {
    if (this.hiddenTextarea) {
      this.cursorOffsetCache = {}, this.text = this.hiddenTextarea.value, this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords());
      var u = this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart, this.hiddenTextarea.selectionEnd, this.hiddenTextarea.value);
      this.selectionEnd = this.selectionStart = u.selectionEnd, this.inCompositionMode || (this.selectionStart = u.selectionStart), this.updateTextareaPosition();
    }
  }, updateTextareaPosition: function() {
    if (this.selectionStart === this.selectionEnd) {
      var u = this._calcTextareaPosition();
      this.hiddenTextarea.style.left = u.left, this.hiddenTextarea.style.top = u.top;
    }
  }, _calcTextareaPosition: function() {
    if (!this.canvas)
      return { x: 1, y: 1 };
    var u = this.inCompositionMode ? this.compositionStart : this.selectionStart, s = this._getCursorBoundaries(u), o = this.get2DCursorLocation(u), d = o.lineIndex, A = o.charIndex, i = this.getValueOfPropertyAt(d, A, "fontSize") * this.lineHeight, n = s.leftOffset, h = this.calcTransformMatrix(), c = { x: s.left + n, y: s.top + s.topOffset + i }, l = this.canvas.getRetinaScaling(), f = this.canvas.upperCanvasEl, m = f.width / l, v = f.height / l, x = m - i, U = v - i, F = f.clientWidth / m, k = f.clientHeight / v;
    return c = B.util.transformPoint(c, h), (c = B.util.transformPoint(c, this.canvas.viewportTransform)).x *= F, c.y *= k, c.x < 0 && (c.x = 0), c.x > x && (c.x = x), c.y < 0 && (c.y = 0), c.y > U && (c.y = U), c.x += this.canvas._offset.left, c.y += this.canvas._offset.top, { left: c.x + "px", top: c.y + "px", fontSize: i + "px", charHeight: i };
  }, _saveEditingProps: function() {
    this._savedProps = { hasControls: this.hasControls, borderColor: this.borderColor, lockMovementX: this.lockMovementX, lockMovementY: this.lockMovementY, hoverCursor: this.hoverCursor, selectable: this.selectable, defaultCursor: this.canvas && this.canvas.defaultCursor, moveCursor: this.canvas && this.canvas.moveCursor };
  }, _restoreEditingProps: function() {
    this._savedProps && (this.hoverCursor = this._savedProps.hoverCursor, this.hasControls = this._savedProps.hasControls, this.borderColor = this._savedProps.borderColor, this.selectable = this._savedProps.selectable, this.lockMovementX = this._savedProps.lockMovementX, this.lockMovementY = this._savedProps.lockMovementY, this.canvas && (this.canvas.defaultCursor = this._savedProps.defaultCursor, this.canvas.moveCursor = this._savedProps.moveCursor));
  }, exitEditing: function() {
    var u = this._textBeforeEdit !== this.text, s = this.hiddenTextarea;
    return this.selected = !1, this.isEditing = !1, this.selectionEnd = this.selectionStart, s && (s.blur && s.blur(), s.parentNode && s.parentNode.removeChild(s)), this.hiddenTextarea = null, this.abortCursorAnimation(), this._restoreEditingProps(), this._currentCursorOpacity = 0, this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this.fire("editing:exited"), u && this.fire("modified"), this.canvas && (this.canvas.off("mouse:move", this.mouseMoveHandler), this.canvas.fire("text:editing:exited", { target: this }), u && this.canvas.fire("object:modified", { target: this })), this;
  }, _removeExtraneousStyles: function() {
    for (var u in this.styles)
      this._textLines[u] || delete this.styles[u];
  }, removeStyleFromTo: function(u, s) {
    var o, d, A = this.get2DCursorLocation(u, !0), i = this.get2DCursorLocation(s, !0), n = A.lineIndex, h = A.charIndex, c = i.lineIndex, l = i.charIndex;
    if (n !== c) {
      if (this.styles[n])
        for (o = h; o < this._unwrappedTextLines[n].length; o++)
          delete this.styles[n][o];
      if (this.styles[c])
        for (o = l; o < this._unwrappedTextLines[c].length; o++)
          (d = this.styles[c][o]) && (this.styles[n] || (this.styles[n] = {}), this.styles[n][h + o - l] = d);
      for (o = n + 1; o <= c; o++)
        delete this.styles[o];
      this.shiftLineStyles(c, n - c);
    } else if (this.styles[n]) {
      d = this.styles[n];
      var f, m, v = l - h;
      for (o = h; o < l; o++)
        delete d[o];
      for (m in this.styles[n])
        (f = parseInt(m, 10)) >= l && (d[f - v] = d[m], delete d[m]);
    }
  }, shiftLineStyles: function(u, s) {
    var o = j(this.styles);
    for (var d in this.styles) {
      var A = parseInt(d, 10);
      A > u && (this.styles[A + s] = o[A], o[A - s] || delete this.styles[A]);
    }
  }, restartCursorIfNeeded: function() {
    this._currentTickState && !this._currentTickState.isAborted && this._currentTickCompleteState && !this._currentTickCompleteState.isAborted || this.initDelayedCursor();
  }, insertNewlineStyleObject: function(u, s, o, d) {
    var A, i = {}, n = !1, h = this._unwrappedTextLines[u].length === s;
    for (var c in o || (o = 1), this.shiftLineStyles(u, o), this.styles[u] && (A = this.styles[u][s === 0 ? s : s - 1]), this.styles[u]) {
      var l = parseInt(c, 10);
      l >= s && (n = !0, i[l - s] = this.styles[u][c], h && s === 0 || delete this.styles[u][c]);
    }
    var f = !1;
    for (n && !h && (this.styles[u + o] = i, f = !0), f && o--; o > 0; )
      d && d[o - 1] ? this.styles[u + o] = { 0: j(d[o - 1]) } : A ? this.styles[u + o] = { 0: j(A) } : delete this.styles[u + o], o--;
    this._forceClearCache = !0;
  }, insertCharStyleObject: function(u, s, o, d) {
    this.styles || (this.styles = {});
    var A = this.styles[u], i = A ? j(A) : {};
    for (var n in o || (o = 1), i) {
      var h = parseInt(n, 10);
      h >= s && (A[h + o] = i[h], i[h - o] || delete A[h]);
    }
    if (this._forceClearCache = !0, d)
      for (; o--; )
        Object.keys(d[o]).length && (this.styles[u] || (this.styles[u] = {}), this.styles[u][s + o] = j(d[o]));
    else if (A)
      for (var c = A[s ? s - 1 : 1]; c && o--; )
        this.styles[u][s + o] = j(c);
  }, insertNewStyleBlock: function(u, s, o) {
    for (var d = this.get2DCursorLocation(s, !0), A = [0], i = 0, n = 0; n < u.length; n++)
      u[n] === `
` ? A[++i] = 0 : A[i]++;
    for (A[0] > 0 && (this.insertCharStyleObject(d.lineIndex, d.charIndex, A[0], o), o = o && o.slice(A[0] + 1)), i && this.insertNewlineStyleObject(d.lineIndex, d.charIndex + A[0], i), n = 1; n < i; n++)
      A[n] > 0 ? this.insertCharStyleObject(d.lineIndex + n, 0, A[n], o) : o && this.styles[d.lineIndex + n] && o[0] && (this.styles[d.lineIndex + n][0] = o[0]), o = o && o.slice(A[n] + 1);
    A[n] > 0 && this.insertCharStyleObject(d.lineIndex + n, 0, A[n], o);
  }, setSelectionStartEndWithShift: function(u, s, o) {
    o <= u ? (s === u ? this._selectionDirection = "left" : this._selectionDirection === "right" && (this._selectionDirection = "left", this.selectionEnd = u), this.selectionStart = o) : o > u && o < s ? this._selectionDirection === "right" ? this.selectionEnd = o : this.selectionStart = o : (s === u ? this._selectionDirection = "right" : this._selectionDirection === "left" && (this._selectionDirection = "right", this.selectionStart = s), this.selectionEnd = o);
  }, setSelectionInBoundaries: function() {
    var u = this.text.length;
    this.selectionStart > u ? this.selectionStart = u : this.selectionStart < 0 && (this.selectionStart = 0), this.selectionEnd > u ? this.selectionEnd = u : this.selectionEnd < 0 && (this.selectionEnd = 0);
  } }), B.util.object.extend(B.IText.prototype, { initDoubleClickSimulation: function() {
    this.__lastClickTime = +/* @__PURE__ */ new Date(), this.__lastLastClickTime = +/* @__PURE__ */ new Date(), this.__lastPointer = {}, this.on("mousedown", this.onMouseDown);
  }, onMouseDown: function(u) {
    if (this.canvas) {
      this.__newClickTime = +/* @__PURE__ */ new Date();
      var s = u.pointer;
      this.isTripleClick(s) && (this.fire("tripleclick", u), this._stopEvent(u.e)), this.__lastLastClickTime = this.__lastClickTime, this.__lastClickTime = this.__newClickTime, this.__lastPointer = s, this.__lastIsEditing = this.isEditing, this.__lastSelected = this.selected;
    }
  }, isTripleClick: function(u) {
    return this.__newClickTime - this.__lastClickTime < 500 && this.__lastClickTime - this.__lastLastClickTime < 500 && this.__lastPointer.x === u.x && this.__lastPointer.y === u.y;
  }, _stopEvent: function(u) {
    u.preventDefault && u.preventDefault(), u.stopPropagation && u.stopPropagation();
  }, initCursorSelectionHandlers: function() {
    this.initMousedownHandler(), this.initMouseupHandler(), this.initClicks();
  }, doubleClickHandler: function(u) {
    this.isEditing && this.selectWord(this.getSelectionStartFromPointer(u.e));
  }, tripleClickHandler: function(u) {
    this.isEditing && this.selectLine(this.getSelectionStartFromPointer(u.e));
  }, initClicks: function() {
    this.on("mousedblclick", this.doubleClickHandler), this.on("tripleclick", this.tripleClickHandler);
  }, _mouseDownHandler: function(u) {
    !this.canvas || !this.editable || u.e.button && u.e.button !== 1 || (this.__isMousedown = !0, this.selected && (this.inCompositionMode = !1, this.setCursorByClick(u.e)), this.isEditing && (this.__selectionStartOnMouseDown = this.selectionStart, this.selectionStart === this.selectionEnd && this.abortCursorAnimation(), this.renderCursorOrSelection()));
  }, _mouseDownHandlerBefore: function(u) {
    !this.canvas || !this.editable || u.e.button && u.e.button !== 1 || (this.selected = this === this.canvas._activeObject);
  }, initMousedownHandler: function() {
    this.on("mousedown", this._mouseDownHandler), this.on("mousedown:before", this._mouseDownHandlerBefore);
  }, initMouseupHandler: function() {
    this.on("mouseup", this.mouseUpHandler);
  }, mouseUpHandler: function(u) {
    if (this.__isMousedown = !1, !(!this.editable || this.group || u.transform && u.transform.actionPerformed || u.e.button && u.e.button !== 1)) {
      if (this.canvas) {
        var s = this.canvas._activeObject;
        if (s && s !== this)
          return;
      }
      this.__lastSelected && !this.__corner ? (this.selected = !1, this.__lastSelected = !1, this.enterEditing(u.e), this.selectionStart === this.selectionEnd ? this.initDelayedCursor(!0) : this.renderCursorOrSelection()) : this.selected = !0;
    }
  }, setCursorByClick: function(u) {
    var s = this.getSelectionStartFromPointer(u), o = this.selectionStart, d = this.selectionEnd;
    u.shiftKey ? this.setSelectionStartEndWithShift(o, d, s) : (this.selectionStart = s, this.selectionEnd = s), this.isEditing && (this._fireSelectionChanged(), this._updateTextarea());
  }, getSelectionStartFromPointer: function(u) {
    for (var s, o = this.getLocalPointer(u), d = 0, A = 0, i = 0, n = 0, h = 0, c = 0, l = this._textLines.length; c < l && i <= o.y; c++)
      i += this.getHeightOfLine(c) * this.scaleY, h = c, c > 0 && (n += this._textLines[c - 1].length + this.missingNewlineOffset(c - 1));
    A = this._getLineLeftOffset(h) * this.scaleX, s = this._textLines[h], this.direction === "rtl" && (o.x = this.width * this.scaleX - o.x + A);
    for (var f = 0, m = s.length; f < m && (d = A, (A += this.__charBounds[h][f].kernedWidth * this.scaleX) <= o.x); f++)
      n++;
    return this._getNewSelectionStartFromOffset(o, d, A, n, m);
  }, _getNewSelectionStartFromOffset: function(u, s, o, d, A) {
    var i = u.x - s, n = o - u.x, h = d + (n > i || n < 0 ? 0 : 1);
    return this.flipX && (h = A - h), h > this._text.length && (h = this._text.length), h;
  } }), B.util.object.extend(B.IText.prototype, { initHiddenTextarea: function() {
    this.hiddenTextarea = B.document.createElement("textarea"), this.hiddenTextarea.setAttribute("autocapitalize", "off"), this.hiddenTextarea.setAttribute("autocorrect", "off"), this.hiddenTextarea.setAttribute("autocomplete", "off"), this.hiddenTextarea.setAttribute("spellcheck", "false"), this.hiddenTextarea.setAttribute("data-fabric-hiddentextarea", ""), this.hiddenTextarea.setAttribute("wrap", "off");
    var u = this._calcTextareaPosition();
    this.hiddenTextarea.style.cssText = "position: absolute; top: " + u.top + "; left: " + u.left + "; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; padding-top: " + u.fontSize + ";", this.hiddenTextareaContainer ? this.hiddenTextareaContainer.appendChild(this.hiddenTextarea) : B.document.body.appendChild(this.hiddenTextarea), B.util.addListener(this.hiddenTextarea, "keydown", this.onKeyDown.bind(this)), B.util.addListener(this.hiddenTextarea, "keyup", this.onKeyUp.bind(this)), B.util.addListener(this.hiddenTextarea, "input", this.onInput.bind(this)), B.util.addListener(this.hiddenTextarea, "copy", this.copy.bind(this)), B.util.addListener(this.hiddenTextarea, "cut", this.copy.bind(this)), B.util.addListener(this.hiddenTextarea, "paste", this.paste.bind(this)), B.util.addListener(this.hiddenTextarea, "compositionstart", this.onCompositionStart.bind(this)), B.util.addListener(this.hiddenTextarea, "compositionupdate", this.onCompositionUpdate.bind(this)), B.util.addListener(this.hiddenTextarea, "compositionend", this.onCompositionEnd.bind(this)), !this._clickHandlerInitialized && this.canvas && (B.util.addListener(this.canvas.upperCanvasEl, "click", this.onClick.bind(this)), this._clickHandlerInitialized = !0);
  }, keysMap: { 9: "exitEditing", 27: "exitEditing", 33: "moveCursorUp", 34: "moveCursorDown", 35: "moveCursorRight", 36: "moveCursorLeft", 37: "moveCursorLeft", 38: "moveCursorUp", 39: "moveCursorRight", 40: "moveCursorDown" }, keysMapRtl: { 9: "exitEditing", 27: "exitEditing", 33: "moveCursorUp", 34: "moveCursorDown", 35: "moveCursorLeft", 36: "moveCursorRight", 37: "moveCursorRight", 38: "moveCursorUp", 39: "moveCursorLeft", 40: "moveCursorDown" }, ctrlKeysMapUp: { 67: "copy", 88: "cut" }, ctrlKeysMapDown: { 65: "selectAll" }, onClick: function() {
    this.hiddenTextarea && this.hiddenTextarea.focus();
  }, onKeyDown: function(u) {
    if (this.isEditing) {
      var s = this.direction === "rtl" ? this.keysMapRtl : this.keysMap;
      if (u.keyCode in s)
        this[s[u.keyCode]](u);
      else {
        if (!(u.keyCode in this.ctrlKeysMapDown) || !u.ctrlKey && !u.metaKey)
          return;
        this[this.ctrlKeysMapDown[u.keyCode]](u);
      }
      u.stopImmediatePropagation(), u.preventDefault(), u.keyCode >= 33 && u.keyCode <= 40 ? (this.inCompositionMode = !1, this.clearContextTop(), this.renderCursorOrSelection()) : this.canvas && this.canvas.requestRenderAll();
    }
  }, onKeyUp: function(u) {
    !this.isEditing || this._copyDone || this.inCompositionMode ? this._copyDone = !1 : u.keyCode in this.ctrlKeysMapUp && (u.ctrlKey || u.metaKey) && (this[this.ctrlKeysMapUp[u.keyCode]](u), u.stopImmediatePropagation(), u.preventDefault(), this.canvas && this.canvas.requestRenderAll());
  }, onInput: function(u) {
    var s = this.fromPaste;
    if (this.fromPaste = !1, u && u.stopPropagation(), this.isEditing) {
      var o, d, A, i, n, h = this._splitTextIntoLines(this.hiddenTextarea.value).graphemeText, c = this._text.length, l = h.length, f = l - c, m = this.selectionStart, v = this.selectionEnd, x = m !== v;
      if (this.hiddenTextarea.value === "")
        return this.styles = {}, this.updateFromTextArea(), this.fire("changed"), void (this.canvas && (this.canvas.fire("text:changed", { target: this }), this.canvas.requestRenderAll()));
      var U = this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart, this.hiddenTextarea.selectionEnd, this.hiddenTextarea.value), F = m > U.selectionStart;
      x ? (o = this._text.slice(m, v), f += v - m) : l < c && (o = F ? this._text.slice(v + f, v) : this._text.slice(m, m - f)), d = h.slice(U.selectionEnd - f, U.selectionEnd), o && o.length && (d.length && (A = this.getSelectionStyles(m, m + 1, !1), A = d.map(function() {
        return A[0];
      })), x ? (i = m, n = v) : F ? (i = v - o.length, n = v) : (i = v, n = v + o.length), this.removeStyleFromTo(i, n)), d.length && (s && d.join("") === B.copiedText && !B.disableStyleCopyPaste && (A = B.copiedTextStyle), this.insertNewStyleBlock(d, m, A)), this.updateFromTextArea(), this.fire("changed"), this.canvas && (this.canvas.fire("text:changed", { target: this }), this.canvas.requestRenderAll());
    }
  }, onCompositionStart: function() {
    this.inCompositionMode = !0;
  }, onCompositionEnd: function() {
    this.inCompositionMode = !1;
  }, onCompositionUpdate: function(u) {
    this.compositionStart = u.target.selectionStart, this.compositionEnd = u.target.selectionEnd, this.updateTextareaPosition();
  }, copy: function() {
    this.selectionStart !== this.selectionEnd && (B.copiedText = this.getSelectedText(), B.disableStyleCopyPaste ? B.copiedTextStyle = null : B.copiedTextStyle = this.getSelectionStyles(this.selectionStart, this.selectionEnd, !0), this._copyDone = !0);
  }, paste: function() {
    this.fromPaste = !0;
  }, _getClipboardData: function(u) {
    return u && u.clipboardData || B.window.clipboardData;
  }, _getWidthBeforeCursor: function(u, s) {
    var o, d = this._getLineLeftOffset(u);
    return s > 0 && (d += (o = this.__charBounds[u][s - 1]).left + o.width), d;
  }, getDownCursorOffset: function(u, s) {
    var o = this._getSelectionForOffset(u, s), d = this.get2DCursorLocation(o), A = d.lineIndex;
    if (A === this._textLines.length - 1 || u.metaKey || u.keyCode === 34)
      return this._text.length - o;
    var i = d.charIndex, n = this._getWidthBeforeCursor(A, i), h = this._getIndexOnLine(A + 1, n);
    return this._textLines[A].slice(i).length + h + 1 + this.missingNewlineOffset(A);
  }, _getSelectionForOffset: function(u, s) {
    return u.shiftKey && this.selectionStart !== this.selectionEnd && s ? this.selectionEnd : this.selectionStart;
  }, getUpCursorOffset: function(u, s) {
    var o = this._getSelectionForOffset(u, s), d = this.get2DCursorLocation(o), A = d.lineIndex;
    if (A === 0 || u.metaKey || u.keyCode === 33)
      return -o;
    var i = d.charIndex, n = this._getWidthBeforeCursor(A, i), h = this._getIndexOnLine(A - 1, n), c = this._textLines[A].slice(0, i), l = this.missingNewlineOffset(A - 1);
    return -this._textLines[A - 1].length + h - c.length + (1 - l);
  }, _getIndexOnLine: function(u, s) {
    for (var o, d, A = this._textLines[u], i = this._getLineLeftOffset(u), n = 0, h = 0, c = A.length; h < c; h++)
      if ((i += o = this.__charBounds[u][h].width) > s) {
        d = !0;
        var l = i - o, f = i, m = Math.abs(l - s);
        n = Math.abs(f - s) < m ? h : h - 1;
        break;
      }
    return d || (n = A.length - 1), n;
  }, moveCursorDown: function(u) {
    this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorUpOrDown("Down", u);
  }, moveCursorUp: function(u) {
    this.selectionStart === 0 && this.selectionEnd === 0 || this._moveCursorUpOrDown("Up", u);
  }, _moveCursorUpOrDown: function(u, s) {
    var o = this["get" + u + "CursorOffset"](s, this._selectionDirection === "right");
    s.shiftKey ? this.moveCursorWithShift(o) : this.moveCursorWithoutShift(o), o !== 0 && (this.setSelectionInBoundaries(), this.abortCursorAnimation(), this._currentCursorOpacity = 1, this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea());
  }, moveCursorWithShift: function(u) {
    var s = this._selectionDirection === "left" ? this.selectionStart + u : this.selectionEnd + u;
    return this.setSelectionStartEndWithShift(this.selectionStart, this.selectionEnd, s), u !== 0;
  }, moveCursorWithoutShift: function(u) {
    return u < 0 ? (this.selectionStart += u, this.selectionEnd = this.selectionStart) : (this.selectionEnd += u, this.selectionStart = this.selectionEnd), u !== 0;
  }, moveCursorLeft: function(u) {
    this.selectionStart === 0 && this.selectionEnd === 0 || this._moveCursorLeftOrRight("Left", u);
  }, _move: function(u, s, o) {
    var d;
    if (u.altKey)
      d = this["findWordBoundary" + o](this[s]);
    else {
      if (!u.metaKey && u.keyCode !== 35 && u.keyCode !== 36)
        return this[s] += o === "Left" ? -1 : 1, !0;
      d = this["findLineBoundary" + o](this[s]);
    }
    if (d !== void 0 && this[s] !== d)
      return this[s] = d, !0;
  }, _moveLeft: function(u, s) {
    return this._move(u, s, "Left");
  }, _moveRight: function(u, s) {
    return this._move(u, s, "Right");
  }, moveCursorLeftWithoutShift: function(u) {
    var s = !0;
    return this._selectionDirection = "left", this.selectionEnd === this.selectionStart && this.selectionStart !== 0 && (s = this._moveLeft(u, "selectionStart")), this.selectionEnd = this.selectionStart, s;
  }, moveCursorLeftWithShift: function(u) {
    return this._selectionDirection === "right" && this.selectionStart !== this.selectionEnd ? this._moveLeft(u, "selectionEnd") : this.selectionStart !== 0 ? (this._selectionDirection = "left", this._moveLeft(u, "selectionStart")) : void 0;
  }, moveCursorRight: function(u) {
    this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorLeftOrRight("Right", u);
  }, _moveCursorLeftOrRight: function(u, s) {
    var o = "moveCursor" + u + "With";
    this._currentCursorOpacity = 1, s.shiftKey ? o += "Shift" : o += "outShift", this[o](s) && (this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea());
  }, moveCursorRightWithShift: function(u) {
    return this._selectionDirection === "left" && this.selectionStart !== this.selectionEnd ? this._moveRight(u, "selectionStart") : this.selectionEnd !== this._text.length ? (this._selectionDirection = "right", this._moveRight(u, "selectionEnd")) : void 0;
  }, moveCursorRightWithoutShift: function(u) {
    var s = !0;
    return this._selectionDirection = "right", this.selectionStart === this.selectionEnd ? (s = this._moveRight(u, "selectionStart"), this.selectionEnd = this.selectionStart) : this.selectionStart = this.selectionEnd, s;
  }, removeChars: function(u, s) {
    s === void 0 && (s = u + 1), this.removeStyleFromTo(u, s), this._text.splice(u, s - u), this.text = this._text.join(""), this.set("dirty", !0), this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this._removeExtraneousStyles();
  }, insertChars: function(u, s, o, d) {
    d === void 0 && (d = o), d > o && this.removeStyleFromTo(o, d);
    var A = B.util.string.graphemeSplit(u);
    this.insertNewStyleBlock(A, o, s), this._text = [].concat(this._text.slice(0, o), A, this._text.slice(d)), this.text = this._text.join(""), this.set("dirty", !0), this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this._removeExtraneousStyles();
  } }), function() {
    var u = B.util.toFixed, s = /  +/g;
    B.util.object.extend(B.Text.prototype, { _toSVG: function() {
      var o = this._getSVGLeftTopOffsets(), d = this._getSVGTextAndBg(o.textTop, o.textLeft);
      return this._wrapSVGTextAndBg(d);
    }, toSVG: function(o) {
      return this._createBaseSVGMarkup(this._toSVG(), { reviver: o, noStyle: !0, withShadow: !0 });
    }, _getSVGLeftTopOffsets: function() {
      return { textLeft: -this.width / 2, textTop: -this.height / 2, lineTop: this.getHeightOfLine(0) };
    }, _wrapSVGTextAndBg: function(o) {
      var d = this.getSvgTextDecoration(this);
      return [o.textBgRects.join(""), '		<text xml:space="preserve" ', this.fontFamily ? 'font-family="' + this.fontFamily.replace(/"/g, "'") + '" ' : "", this.fontSize ? 'font-size="' + this.fontSize + '" ' : "", this.fontStyle ? 'font-style="' + this.fontStyle + '" ' : "", this.fontWeight ? 'font-weight="' + this.fontWeight + '" ' : "", d ? 'text-decoration="' + d + '" ' : "", 'style="', this.getSvgStyles(!0), '"', this.addPaintOrder(), " >", o.textSpans.join(""), `</text>
`];
    }, _getSVGTextAndBg: function(o, d) {
      var A, i = [], n = [], h = o;
      this._setSVGBg(n);
      for (var c = 0, l = this._textLines.length; c < l; c++)
        A = this._getLineLeftOffset(c), (this.textBackgroundColor || this.styleHas("textBackgroundColor", c)) && this._setSVGTextLineBg(n, c, d + A, h), this._setSVGTextLineText(i, c, d + A, h), h += this.getHeightOfLine(c);
      return { textSpans: i, textBgRects: n };
    }, _createTextCharSpan: function(o, d, A, i) {
      var n = o !== o.trim() || o.match(s), h = this.getSvgSpanStyles(d, n), c = h ? 'style="' + h + '"' : "", l = d.deltaY, f = "", m = B.Object.NUM_FRACTION_DIGITS;
      return l && (f = ' dy="' + u(l, m) + '" '), ['<tspan x="', u(A, m), '" y="', u(i, m), '" ', f, c, ">", B.util.string.escapeXml(o), "</tspan>"].join("");
    }, _setSVGTextLineText: function(o, d, A, i) {
      var n, h, c, l, f, m = this.getHeightOfLine(d), v = this.textAlign.indexOf("justify") !== -1, x = "", U = 0, F = this._textLines[d];
      i += m * (1 - this._fontSizeFraction) / this.lineHeight;
      for (var k = 0, O = F.length - 1; k <= O; k++)
        f = k === O || this.charSpacing, x += F[k], c = this.__charBounds[d][k], U === 0 ? (A += c.kernedWidth - c.width, U += c.width) : U += c.kernedWidth, v && !f && this._reSpaceAndTab.test(F[k]) && (f = !0), f || (n = n || this.getCompleteStyleDeclaration(d, k), h = this.getCompleteStyleDeclaration(d, k + 1), f = B.util.hasStyleChanged(n, h, !0)), f && (l = this._getStyleDeclaration(d, k) || {}, o.push(this._createTextCharSpan(x, l, A, i)), x = "", n = h, A += U, U = 0);
    }, _pushTextBgRect: function(o, d, A, i, n, h) {
      var c = B.Object.NUM_FRACTION_DIGITS;
      o.push("		<rect ", this._getFillAttributes(d), ' x="', u(A, c), '" y="', u(i, c), '" width="', u(n, c), '" height="', u(h, c), `"></rect>
`);
    }, _setSVGTextLineBg: function(o, d, A, i) {
      for (var n, h, c = this._textLines[d], l = this.getHeightOfLine(d) / this.lineHeight, f = 0, m = 0, v = this.getValueOfPropertyAt(d, 0, "textBackgroundColor"), x = 0, U = c.length; x < U; x++)
        n = this.__charBounds[d][x], (h = this.getValueOfPropertyAt(d, x, "textBackgroundColor")) !== v ? (v && this._pushTextBgRect(o, v, A + m, i, f, l), m = n.left, f = n.width, v = h) : f += n.kernedWidth;
      h && this._pushTextBgRect(o, h, A + m, i, f, l);
    }, _getFillAttributes: function(o) {
      var d = o && typeof o == "string" ? new B.Color(o) : "";
      return d && d.getSource() && d.getAlpha() !== 1 ? 'opacity="' + d.getAlpha() + '" fill="' + d.setAlpha(1).toRgb() + '"' : 'fill="' + o + '"';
    }, _getSVGLineTopOffset: function(o) {
      for (var d, A = 0, i = 0; i < o; i++)
        A += this.getHeightOfLine(i);
      return d = this.getHeightOfLine(i), { lineTop: A, offset: (this._fontSizeMult - this._fontSizeFraction) * d / (this.lineHeight * this._fontSizeMult) };
    }, getSvgStyles: function(o) {
      return B.Object.prototype.getSvgStyles.call(this, o) + " white-space: pre;";
    } });
  }(), function(u) {
    var s = u.fabric || (u.fabric = {});
    s.Textbox = s.util.createClass(s.IText, s.Observable, { type: "textbox", minWidth: 20, dynamicMinWidth: 2, __cachedLines: null, lockScalingFlip: !0, noScaleCache: !1, _dimensionAffectingProps: s.Text.prototype._dimensionAffectingProps.concat("width"), _wordJoiners: /[ \t\r]/, splitByGrapheme: !1, initDimensions: function() {
      this.__skipDimension || (this.isEditing && this.initDelayedCursor(), this.clearContextTop(), this._clearCache(), this.dynamicMinWidth = 0, this._styleMap = this._generateStyleMap(this._splitText()), this.dynamicMinWidth > this.width && this._set("width", this.dynamicMinWidth), this.textAlign.indexOf("justify") !== -1 && this.enlargeSpaces(), this.height = this.calcTextHeight(), this.saveState({ propertySet: "_dimensionAffectingProps" }));
    }, _generateStyleMap: function(o) {
      for (var d = 0, A = 0, i = 0, n = {}, h = 0; h < o.graphemeLines.length; h++)
        o.graphemeText[i] === `
` && h > 0 ? (A = 0, i++, d++) : !this.splitByGrapheme && this._reSpaceAndTab.test(o.graphemeText[i]) && h > 0 && (A++, i++), n[h] = { line: d, offset: A }, i += o.graphemeLines[h].length, A += o.graphemeLines[h].length;
      return n;
    }, styleHas: function(o, d) {
      if (this._styleMap && !this.isWrapping) {
        var A = this._styleMap[d];
        A && (d = A.line);
      }
      return s.Text.prototype.styleHas.call(this, o, d);
    }, isEmptyStyles: function(o) {
      if (!this.styles)
        return !0;
      var d, A, i = 0, n = !1, h = this._styleMap[o], c = this._styleMap[o + 1];
      for (var l in h && (o = h.line, i = h.offset), c && (n = c.line === o, d = c.offset), A = o === void 0 ? this.styles : { line: this.styles[o] })
        for (var f in A[l])
          if (f >= i && (!n || f < d))
            for (var m in A[l][f])
              return !1;
      return !0;
    }, _getStyleDeclaration: function(o, d) {
      if (this._styleMap && !this.isWrapping) {
        var A = this._styleMap[o];
        if (!A)
          return null;
        o = A.line, d = A.offset + d;
      }
      return this.callSuper("_getStyleDeclaration", o, d);
    }, _setStyleDeclaration: function(o, d, A) {
      var i = this._styleMap[o];
      o = i.line, d = i.offset + d, this.styles[o][d] = A;
    }, _deleteStyleDeclaration: function(o, d) {
      var A = this._styleMap[o];
      o = A.line, d = A.offset + d, delete this.styles[o][d];
    }, _getLineStyle: function(o) {
      var d = this._styleMap[o];
      return !!this.styles[d.line];
    }, _setLineStyle: function(o) {
      var d = this._styleMap[o];
      this.styles[d.line] = {};
    }, _wrapText: function(o, d) {
      var A, i = [];
      for (this.isWrapping = !0, A = 0; A < o.length; A++)
        i = i.concat(this._wrapLine(o[A], A, d));
      return this.isWrapping = !1, i;
    }, _measureWord: function(o, d, A) {
      var i, n = 0;
      A = A || 0;
      for (var h = 0, c = o.length; h < c; h++)
        n += this._getGraphemeBox(o[h], d, h + A, i, !0).kernedWidth, i = o[h];
      return n;
    }, _wrapLine: function(o, d, A, i) {
      var n = 0, h = this.splitByGrapheme, c = [], l = [], f = h ? s.util.string.graphemeSplit(o) : o.split(this._wordJoiners), m = "", v = 0, x = h ? "" : " ", U = 0, F = 0, k = 0, O = !0, P = this._getWidthOfCharSpacing();
      i = i || 0, f.length === 0 && f.push([]), A -= i;
      for (var R = 0; R < f.length; R++)
        m = h ? f[R] : s.util.string.graphemeSplit(f[R]), U = this._measureWord(m, d, v), v += m.length, (n += F + U - P) > A && !O ? (c.push(l), l = [], n = U, O = !0) : n += P, O || h || l.push(x), l = l.concat(m), F = h ? 0 : this._measureWord([x], d, v), v++, O = !1, U > k && (k = U);
      return R && c.push(l), k + i > this.dynamicMinWidth && (this.dynamicMinWidth = k - P + i), c;
    }, isEndOfWrapping: function(o) {
      return !this._styleMap[o + 1] || this._styleMap[o + 1].line !== this._styleMap[o].line;
    }, missingNewlineOffset: function(o) {
      return this.splitByGrapheme ? this.isEndOfWrapping(o) ? 1 : 0 : 1;
    }, _splitTextIntoLines: function(o) {
      for (var d = s.Text.prototype._splitTextIntoLines.call(this, o), A = this._wrapText(d.lines, this.width), i = new Array(A.length), n = 0; n < A.length; n++)
        i[n] = A[n].join("");
      return d.lines = i, d.graphemeLines = A, d;
    }, getMinWidth: function() {
      return Math.max(this.minWidth, this.dynamicMinWidth);
    }, _removeExtraneousStyles: function() {
      var o = {};
      for (var d in this._styleMap)
        this._textLines[d] && (o[this._styleMap[d].line] = 1);
      for (var d in this.styles)
        o[d] || delete this.styles[d];
    }, toObject: function(o) {
      return this.callSuper("toObject", ["minWidth", "splitByGrapheme"].concat(o));
    } }), s.Textbox.fromObject = function(o, d) {
      var A = s.util.stylesFromArray(o.styles, o.text), i = Object.assign({}, o, { styles: A });
      return s.Object._fromObject("Textbox", i, d, "text");
    };
  }(e), function() {
    var u = B.controlsUtils, s = u.scaleSkewCursorStyleHandler, o = u.scaleCursorStyleHandler, d = u.scalingEqually, A = u.scalingYOrSkewingX, i = u.scalingXOrSkewingY, n = u.scaleOrSkewActionName, h = B.Object.prototype.controls;
    if (h.ml = new B.Control({ x: -0.5, y: 0, cursorStyleHandler: s, actionHandler: i, getActionName: n }), h.mr = new B.Control({ x: 0.5, y: 0, cursorStyleHandler: s, actionHandler: i, getActionName: n }), h.mb = new B.Control({ x: 0, y: 0.5, cursorStyleHandler: s, actionHandler: A, getActionName: n }), h.mt = new B.Control({ x: 0, y: -0.5, cursorStyleHandler: s, actionHandler: A, getActionName: n }), h.tl = new B.Control({ x: -0.5, y: -0.5, cursorStyleHandler: o, actionHandler: d }), h.tr = new B.Control({ x: 0.5, y: -0.5, cursorStyleHandler: o, actionHandler: d }), h.bl = new B.Control({ x: -0.5, y: 0.5, cursorStyleHandler: o, actionHandler: d }), h.br = new B.Control({ x: 0.5, y: 0.5, cursorStyleHandler: o, actionHandler: d }), h.mtr = new B.Control({ x: 0, y: -0.5, actionHandler: u.rotationWithSnapping, cursorStyleHandler: u.rotationStyleHandler, offsetY: -40, withConnection: !0, actionName: "rotate" }), B.Textbox) {
      var c = B.Textbox.prototype.controls = {};
      c.mtr = h.mtr, c.tr = h.tr, c.br = h.br, c.tl = h.tl, c.bl = h.bl, c.mt = h.mt, c.mb = h.mb, c.mr = new B.Control({ x: 0.5, y: 0, actionHandler: u.changeWidth, cursorStyleHandler: s, actionName: "resizing" }), c.ml = new B.Control({ x: -0.5, y: 0, actionHandler: u.changeWidth, cursorStyleHandler: s, actionName: "resizing" });
    }
  }();
})(be);
const fr = (e) => {
  const t = document.createElement("div");
  return t.classList.add("shake-sdk-divider-vertical"), t;
}, va = ["#ff0000", "#ffcc00", "#00c274", "#0000FF", "#6552ff", "#808080"], zu = (e, t) => {
  const r = uA();
  r.classList.add("shake-sdk-palette");
  const a = va.map((p) => {
    const w = ((C, y) => {
      const Q = Pt();
      return Q.classList.add("shake-sdk-color-button"), Q.id = C, y ? (Q.style.background = "transparent", Q.style.border = `2px solid ${C}`) : (Q.style.background = C, Q.style.border = "none"), Q;
    })(p, t === p);
    return w.onclick = () => {
      e(p), ((C, y) => {
        y.forEach((Q) => {
          Q.style.background = Q.id, Q.style.border = "none";
        }), C.style.background = "transparent", C.style.border = `2px solid ${C.id}`;
      })(w, a);
    }, r.appendChild(w), w;
  }), g = Pt();
  return g.classList.add("shake-sdk-palette-close"), g.onclick = () => e(null), g.appendChild(XA("data:image/svg+xml,%3csvg%20width='50'%20height='51'%20viewBox='0%200%2050%2051'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.834%2021.5598L29.1673%2029.8931'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M29.1673%2021.56L20.834%2029.8933'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), r.appendChild(g), r;
}, zA = (e, t) => {
  let r;
  r = e.querySelectorAll("path"), r.forEach(function(a) {
    a.style.stroke = t;
  }), r = e.querySelectorAll("circle"), r.forEach(function(a) {
    a.style.stroke = t;
  }), r = e.querySelectorAll("rect"), r.forEach(function(a) {
    a.style.stroke = t;
  });
}, Yt = (e, t) => {
  const r = uA();
  r.classList.add("shake-sdk-tooltip");
  const a = ((p) => {
    const w = document.createElement("p");
    return w.classList.add("shake-sdk-text-tooltip"), w.innerText = p, w;
  })(t);
  r.appendChild(a);
  const g = () => {
    r.style.display = "none";
  };
  return e.addEventListener("mouseover", () => {
    r.style.display = "block";
    const p = e.getBoundingClientRect();
    r.style.left = p.left - p.width + "px", r.style.top = p.top - p.height - 40 + "px";
  }), e.addEventListener("mouseout", g), e.addEventListener("click", g), r;
}, zt = (e, t, r) => {
  const a = Pt();
  return a.classList.add("shake-sdk-attachments-drawing-button"), r && (a.onclick = r), ((g, p) => {
    const w = new XMLHttpRequest();
    w.open("GET", g, !0), w.onreadystatechange = function() {
      w.readyState === 4 && w.status === 200 && p(w.responseText);
    }, w.send();
  })(e, (g) => {
    a.appendChild(((p, w) => {
      const C = new DOMParser().parseFromString(p, "image/svg+xml").documentElement;
      return w && zA(C, w), C;
    })(g, t));
  }), a;
}, ya = (e) => {
  const t = kA.localStorage, r = CA.attachmentsManager;
  let a, g = t.getDrawingColor() ?? va[0], p = t.getDrawingOption() ?? FA.PENCIL;
  const w = () => {
    a == null || a.remove(), a = function(m, v, x, U) {
      const F = document.createElement("canvas");
      F.classList.add("shake-sdk-canvas");
      const k = F.getContext("2d");
      F.width = m.clientWidth, F.height = m.clientHeight;
      const O = new be.fabric.Canvas(F);
      let P = !1, R = 0, Y = 0, V = null, _ = null;
      const T = (K) => {
        P = !P;
        const W = F.getBoundingClientRect();
        return R = D(K) - W.left, Y = I(K) - W.top, x === FA.RECT ? (V = new be.fabric.Rect({ left: R, top: Y, width: 0, height: 0, fill: "transparent", stroke: v, strokeWidth: 4, cornerColor: v, cornerSize: 6, transparentCorners: !0, selectable: !1 }), void O.add(V)) : x === FA.ELLIPSE ? (_ = new be.fabric.Ellipse({ left: R, top: Y, rx: 0, ry: 0, fill: "transparent", stroke: v, strokeWidth: 4, selectable: !1 }), void O.add(_)) : void 0;
      }, M = (K) => {
        if (!P)
          return;
        const W = F.getBoundingClientRect(), G = D(K) - W.left, z = I(K) - W.top;
        if (x === FA.RECT && V)
          return V.set({ width: G - R, height: z - Y }), void O.renderAll();
        if (x === FA.ELLIPSE && _) {
          const rA = Math.abs(G - R) / 2, Z = Math.abs(z - Y) / 2;
          return _.set({ rx: rA, ry: Z, left: G > R ? R : G, top: z > Y ? Y : z }).setCoords(), void O.renderAll();
        }
        const $ = x === FA.BLUR;
        $ && k && (k.filter = "blur(10px)");
        const eA = new be.fabric.Line([R, Y, G, z], { stroke: $ ? "rgba(128, 128, 128, 0.8)" : v, strokeWidth: $ ? 20 : 4, fill: $ ? "rgba(128, 128, 128, 0.8)" : void 0, fillRule: $ ? "solid" : void 0, selectable: !0 });
        O.add(eA), R = G, Y = z;
      }, N = () => {
        P && X(), P = !1;
      }, X = async () => {
        const K = document.createElement("canvas"), W = K.getContext("2d");
        K.width = m.naturalWidth, K.height = m.naturalHeight, W == null || W.drawImage(m, 0, 0, K.width, K.height), W == null || W.drawImage(F, 0, 0, m.naturalWidth, m.naturalHeight), m.src = K.toDataURL(), K.toBlob((G) => {
          U(G ?? new Blob());
        });
      };
      F.addEventListener("mousedown", T, { passive: !0 }), F.addEventListener("mousemove", M, { passive: !0 }), F.addEventListener("mouseup", N, { passive: !0 }), F.addEventListener("mouseleave", N, { passive: !0 }), F.addEventListener("touchstart", T, { passive: !0 }), F.addEventListener("touchmove", M, { passive: !0 }), F.addEventListener("touchend", N, { passive: !0 }), F.addEventListener("touchcancel", N, { passive: !0 });
      const D = (K) => Hi() ? K.touches[0].clientX : K.clientX, I = (K) => Hi() ? K.touches[0].clientY : K.clientY;
      return window.onresize = () => {
        F.width = m.clientWidth, F.height = m.clientHeight, O.setWidth(m.clientWidth), O.setHeight(m.clientHeight), O.renderAll();
      }, F;
    }(c, g, p, (m) => {
      e.drawingData = m, r.updateAttachment(e);
    }), l.appendChild(a);
  }, C = () => {
    const m = "#636366";
    zA(S, m), zA(H, m), zA(B, m), zA(iA, m), p === FA.BLUR && zA(S, g), p === FA.PENCIL && zA(H, g), p === FA.ELLIPSE && zA(B, g), p === FA.RECT && zA(iA, g);
  }, y = [], Q = [], b = zt("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_3795_450)'%3e%3cpath%20d='M20.036%2016.036C22.272%2011.6048%2020.4924%206.2%2016.0612%203.96402C13.515%202.67923%2010.5102%202.67923%207.96399%203.96402'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M3.96395%207.96399C1.72797%2012.3952%203.50756%2017.8%207.93877%2020.036C10.4849%2021.3208%2013.4898%2021.3208%2016.036%2020.036'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M4%204L20%2020'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_3795_450'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", void 0, () => {
    c.src = URL.createObjectURL(e.data), e.drawingData = e.data, r.updateAttachment(e), w();
  }), E = Yt(b, "Clear");
  y.push(b), y.push(fr()), Q.push(E);
  const S = zt("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_3795_444)'%3e%3cpath%20d='M16.775%209H4.225C3.548%209%203%208.452%203%207.775V4.225C3%203.548%203.548%203%204.225%203H16.776C17.452%203%2018%203.548%2018%204.225V7.776C18%208.452%2017.452%209%2016.775%209Z'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2022H10C9.448%2022%209%2021.552%209%2021V16C9%2015.448%209.448%2015%2010%2015H12C12.552%2015%2013%2015.448%2013%2016V21C13%2021.552%2012.552%2022%2012%2022Z'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M11%2015V13C11%2012.448%2011.448%2012%2012%2012H20C20.552%2012%2021%2011.552%2021%2011V7C21%206.448%2020.552%206%2020%206H18'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_3795_444'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", p === FA.BLUR ? g : void 0, () => {
    p = FA.BLUR, t.setDrawingOption(FA.BLUR), C(), zA(S, g), w();
  }), L = Yt(S, "Blur");
  y.push(S), y.push(fr()), Q.push(L);
  const H = zt("data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='pen-draw%201'%20clip-path='url(%23clip0_15248_22176)'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M10.9258%2016.8278C14.5704%2020.4725%2019.5591%2021.3965%2022.0616%2018.8905C24.171%2016.7812%2023.8431%2012.9172%2021.5156%209.57349'%20stroke='%23636366'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_2'%20d='M18.4802%206.4306C14.097%203.05893%208.61602%202.63776%205.56285%205.69093C2.14569%209.1081%203.06969%2015.5714%207.62552%2020.1273C9.62034%2022.1549%2012.0861%2023.6572%2014.8029%2024.4999'%20stroke='%23636366'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_3'%20d='M14.4897%2014.4666L16.6679%2014.0303C16.9828%2013.9683%2017.2726%2013.8149%2017.5009%2013.5893L23.8615%207.23327C24.7143%206.38002%2024.7143%204.99719%2023.8615%204.14394C23.0083%203.29121%2021.6255%203.29121%2020.7722%204.14394L14.4115%2010.4999C14.1842%2010.7276%2014.0291%2011.0174%2013.9659%2011.3329L13.5342%2013.5111C13.4495%2013.9541%2013.74%2014.3819%2014.183%2014.4666C14.2843%2014.486%2014.3884%2014.486%2014.4897%2014.4666Z'%20stroke='%23636366'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15248_22176'%3e%3crect%20width='28'%20height='28'%20fill='none'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", p === FA.PENCIL ? g : void 0, () => {
    p = FA.PENCIL, t.setDrawingOption(FA.PENCIL), C(), zA(H, g), w();
  }), j = Yt(H, "Pen");
  y.push(H), Q.push(j);
  const B = zt("data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='10.5'%20cy='10.5'%20r='9.5'%20stroke='%23636366'%20stroke-width='2'/%3e%3c/svg%3e", p === FA.ELLIPSE ? g : void 0, () => {
    p = FA.ELLIPSE, t.setDrawingOption(FA.ELLIPSE), C(), zA(B, g), w();
  }), J = Yt(B, "Circle");
  y.push(B), Q.push(J);
  const iA = zt("data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='1'%20width='20'%20height='20'%20rx='3'%20stroke='%23636366'%20stroke-width='2'/%3e%3c/svg%3e", p === FA.RECT ? g : void 0, () => {
    p = FA.RECT, t.setDrawingOption(FA.RECT), C(), w();
  }), cA = Yt(iA, "Rectangle");
  y.push(iA), y.push(fr()), Q.push(cA);
  const u = zt("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_16266_21838)'%3e%3cpath%20d='M16.2969%208.19898C16.2969%208.47458%2016.0735%208.698%2015.7979%208.698C15.5222%208.698%2015.2988%208.47458%2015.2988%208.19898C15.2988%207.92337%2015.5222%207.69995%2015.7979%207.69995'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15.7988%207.69995C16.0744%207.69995%2016.2979%207.92337%2016.2979%208.19898'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.498%206.59912C12.498%206.87473%2012.2746%207.09815%2011.999%207.09815C11.7234%207.09815%2011.5%206.87473%2011.5%206.59912C11.5%206.32352%2011.7234%206.1001%2011.999%206.1001'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%206.1001C12.2756%206.1001%2012.499%206.32352%2012.499%206.59912'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.69922%208.19898C8.69922%208.47458%208.4758%208.698%208.2002%208.698C7.92459%208.698%207.70117%208.47458%207.70117%208.19898C7.70117%207.92337%207.92459%207.69995%208.2002%207.69995'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.20117%207.69995C8.47678%207.69995%208.7002%207.92337%208.7002%208.19898'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M7.09766%2011.999C7.09766%2012.2746%206.87424%2012.498%206.59863%2012.498C6.32303%2012.498%206.09961%2012.2746%206.09961%2011.999C6.09961%2011.7234%206.32303%2011.5%206.59863%2011.5'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M6.59961%2011.5C6.87521%2011.5%207.09863%2011.7234%207.09863%2011.999'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.69922%2015.7991C8.69922%2016.0747%208.4758%2016.2981%208.2002%2016.2981C7.92459%2016.2981%207.70117%2016.0747%207.70117%2015.7991C7.70117%2015.5235%207.92459%2015.3%208.2002%2015.3'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.20117%2015.3C8.47678%2015.3%208.7002%2015.5235%208.7002%2015.7991'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M11.9995%2021C6.94455%2021%202.86255%2016.832%203.00355%2011.745C3.13355%207.04903%207.04855%203.13403%2011.7445%203.00403C16.8315%202.86303%2020.9995%206.94503%2020.9995%2012V13C20.9995%2014.105%2020.1045%2015%2018.9995%2015H16.9365C15.6075%2015%2014.6485%2016.272%2015.0135%2017.549L15.2705%2018.45C15.6365%2019.728%2014.6765%2021%2013.3485%2021H11.9995Z'%20stroke='%23636366'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_16266_21838'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", void 0, () => {
    A.style.display = "flex", d.style.display = "none";
  }), s = Yt(u, "Choose color");
  y.push(u), Q.push(s);
  const o = zu((m) => {
    m && (g = m, t.setDrawingColor(m), C(), w()), A.style.display = "none", d.style.display = "flex";
  }, g), d = uA();
  d.classList.add("shake-sdk-drawing-toolbox-buttons"), y.map((m) => d.appendChild(m)), Q.map((m) => d.appendChild(m));
  const A = uA();
  A.classList.add("shake-sdk-drawing-toolbox-colors"), A.appendChild(o);
  const i = uA();
  i.classList.add("shake-sdk-drawing-toolbox"), i.appendChild(d), i.appendChild(A);
  const n = uA();
  n.classList.add("shake-sdk-image-preview-toolbox-container"), n.appendChild(i);
  const h = URL.createObjectURL(e.drawingData ?? e.data), c = XA(h);
  c.classList.add("shake-sdk-image-preview-image"), c.addEventListener("load", w, { passive: !0 });
  const l = uA();
  l.appendChild(c), l.classList.add("shake-sdk-image-preview-image-container");
  const f = uA();
  return f.classList.add("shake-sdk-image-preview"), f.appendChild(l), f.appendChild(n), f;
}, Ju = (e) => {
  const t = uA();
  t.classList.add("shake-sdk-attachments-preview");
  const r = e.type == yA.IMAGE ? ya(e) : ((a) => {
    const g = uA();
    g.classList.add("shake-sdk-video-preview");
    const p = URL.createObjectURL(a), w = Vi({ src: p + "#t=0.1", controls: !0 });
    return w.addEventListener("loadeddata", () => {
      g.appendChild(w);
    }, !1), g;
  })(e.data);
  return t.appendChild(r), t;
}, qu = (e) => {
  const t = hn();
  t.classList.add("shake-sdk-attachments-card");
  const r = uA();
  r.classList.add("shake-sdk-attachments-page");
  const a = (() => {
    const Q = Pt();
    Q.appendChild(XA(pa)), Q.appendChild(hs(dA().shake_sdk_dialog_add_attachment_record_screen)), Q.onclick = pn;
    const b = Pt();
    b.appendChild(XA(fa)), b.appendChild(hs(dA().shake_sdk_dialog_add_attachment_grab_screenshot)), b.onclick = wn;
    const E = uA();
    E.classList.add("shake-sdk-attachments-empty-buttons"), E.appendChild(b), E.appendChild(Q);
    const S = uA();
    S.classList.add("shake-sdk-attachments-empty-dragdrop"), S.appendChild(XA("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAACMnSURBVHgB7V0JrKVZUa46973Xr18vM+M0MItKEyFGE5Q4xN0gLowrjkNECUGHaII7oDEmarDHlahBiCyCIkMimsiOAWRHJYBDBJSwyBKadRiYaXqa6ff6vX73L885VV9V/a9bzbsj07df3wPT795//0+dqvrqqzrnEi3aoi3aoi3aoi3aoi3aoi3aoi3aoi3aoi3aoi3aoi3aoi3aoi3aoi3aJdqY/h+aiFy+sTncRMwPK0wPqZuOYle/Q/1X6j+2xf60XSz1b/2n/jvoEWyH1L9108DtC5ciwzDUPyzT7aGd1s71N6j7KB9Xzzw5EL9XptNXLq2tvOKK/fuP0yXa7rGAN7flhukgLyhEl1UBq4BEOEuq/e0CZa4CEMaN2/f2uQvFBAqh45wu/Ca8JnH9K+36/bM+QvverkXTYerb+7lV8IcPHZBJ4WeUUm6ux5ykS6wVugftzNb0z2vnvoybcHsT7sLpH01ZpUugbzJBjlrb1sdBHxysg4P0nMKln9iEq4NBfH/7Z6jHtPPrX/Zr273I9k+n03pZflIdWO/Z2Ng4SpdYm1nAm2env1u7+YnanyZYsf+xapqqnJvpLsTW2LROhSt9Z/+chNME2jSSzbo3wfYhUIXezHkTXjPZsBrDYNpOofnT6dAfoe2r7ejKyr631O1H6RJqMwl4Y0tuqiI41oTaOrdpWhNIN51mXqkLwwTTNNF1N4SA1oToGqqHtE88KZM+RMTGCrV7mDnvPnsQ9dWkR7XrFLZx0k4ZBr2XuOs/WgfSWy4lTZ5JwKXQ7/buhFBFVE8Zndk0bGCVqsOhLpCuacPA2No1lFSgbSCYD++aOk1a3QRHAp+sPl7vI+bJtQ39WcRvW6VvjluFXG9fNXnlktHkXQt4Y2v7piqko73ju3YyEFPv5mK+tLcujEGFwF1L+/4KeFQkep7ur4Ieuv8WO3VgDAw114P6WTZtV8EzzDKlY8m8NMdjNMFSA9vqJvhoveclocm7FrBI+bHWYxb92Lb+j2oMaSc2IXahAtN2800a1qgpb18cMfWQaEjCUp8tQM1dg9XmsxmG3mx82eUYg677+DooDIjBP0sX8tDHJh1drpq814W8awHXOPcoPptwXO3U3Jq4VRBsgsZWgoPsiBla6dvJUXf733ZDwCboEHI39RwI20y8mNa3WHk6MIBcA2Js+1W4Ysf2szvw2stC3r0GkzykC4xMbczRqn9TgDVYnNp6sftixKzMjqRHD9EGAbnWmyYSTbop5y5QItVyECKIhVtcrSGSmBDVtA8RbrGhephnwhCzp6qavHeFPGuYJIBI2lmKY4r5WfIo2P2ueCc3QbZQx8iJPjCmwwhjt63w0yZr1bxBbFCF11UtLaJAalCz3s8VVWEJAD8aW/DLeqk9a653LWB2BBP+D+xVkBwasiSqCSeJfw+mEX5bB4FduGlrJzCa2bWYGprO5t8hvKmbeUXqGkpxHziiNl4Hk+jgkcySEcNkH11eXt5zQp6dyYLqBjOoflX/dGE38wl/2ilIgCsVpAwi40sOMuasTWjDVAdEu14TbvO1YMD8XBP2ADBnrQEsmGeYf/hkkCDul4mrkPeWJs8kYBBWAEZdc81awwxTAK84kdmhtmq1CZ/dAhgYI0fJylYRLIImEywGJwuRemhWOM4xFN32bW9vA+u714Wb9/cRjr3Me8onzyRgYxk8/tXONmttMlelYRMq6yDoQlUT6xeTMN39gZiNtFL2SylKA0hm6lvrYRX8ux1fjCgBQdI+b21tAZThdh6K1cETwpaIl/dSCLV7AYOIdETc0WwPT0zVxH0x9KILwf1vNYvTfrweoWzUSNHb9kFThWJhkvpiUJGDPnzf3gdNN7CK3sUSF0Q1BKK777478LIruXjI5qjexqwMsEx7w1zvPkwa1LR2AYn7Pu2rfgSYrK65omBp4MJGbQJgGwRrwEljVQthJPw2NNSYrq61PTtk0gC4qnqng2FQwUNwk8mkjTxa39iwJ8NL7Hwr9vMGUJodsVucfBHTmjNocAjCmQ4iD4XEmCRDVcwjze1aqBpWhdrDm3okwJiGOLgOeRxdClvSirqvRbw8sWwSgfQoav4LBhI3LV6mO0+cSPG3gTyw4TYy4QYUbbN7g3r00ZXh4qU1dx8mqc/r2ZxEJ45CJHy2+IadgPDY1jTVCIzJpIjSiIqONS1oD9irNMy3s8XQfaB0f2lRd0fOuH/KaAntW12lrc0tqQJyAQbQYve/YX/8RR18NSFPLlJzvXsNzpmajnrBVCHkZBV+axEyu1DZUov95iUDqZQcAIKz0KhfhZXZGjyTpEcCiXebD1U0TQeOX1s7wJ/57G3N9yfsgOe3TyLhp+05nFzR0XNR0pqzaDC0031wp4wC4bJzz7iJCdK61fhn71uvx/KG8cHFB03p8a8wyA7Jx+C0AQMjEFsz1yv7VqiSGHTb5z4/fhlJwXxgLcqDDTGyDbiLrmhg1wJWckKVVrvTYlBKIYgl7zVuIqQDneBQsGV6aNEwM42gtJIRVaCTJmThVt1BvaZrYEph1SCaeOj/TSYC86sXMWKj7jt48FAHW5+tmhzy59G7cUpNBWoM7loBe001XkQ+mXd5fKvD8mQhzG/iJZzXsgK6MJnsblS0PKdnptSVK/hyPwwL0MMhJ7ZU34dBs0rq16fmKqxpTAWrosdLwga1nbzrJC9VdH3tNVfT0tJSZLHCxDjAox2Jkfatx846MI9vMT98P/NxmuM2g4CH4IyJsmlW+ZmgGoAyAKYUo2qDiwvImfxkiz/NJE+tNIdSER7QOjJJSC6giqMh8MY/s2k6qNBmYLang/vY06dP0/bZs3TkyJV06ODB5JNTg/sh9u0gRQoAIPN76/eHz3O15mwC9rMhA+2IAkLCLi1xiB2nm4GeoZXGVvUvqP7QDFNHSwIgl25ryi0eN+M2LRYGMSLDzgFkn5VsofX19Xr8lA4eOEiHDx+mfdVX5/tIMk0OGCgLuG+/eXl5cozmtM2swRSDe3yN1CvKLtpWQV0AJ623jI6d0ovomCV4ar0RwzR3FI2csBsDHWBpJLXkROxXzUaoRsGfK1kyndLm1iZNt6dd6/fvX7U4vbSQDLjBaM1i79VIlALNP0nD2QdcccUVc6nFs+eD2VgtrZbTjQbAAsi69fZBACSs36zToBG104R20JYwwdyEYYmGTpCwccdGkNj1ujwLS4qYzB1o7KxkCDs4nFQ/XMOopsF82eWXyWSy1LdNGmBTUsVCqyIAhUbLiuaT5fLtoTyJ5rQt0a6bdPFaNkHl6yELypz71g6iLGPvGgmPVjDNBPGrQXCv4QIHJhZ2gdWwHH4TooYwwpoCtLLbNuiqUExBze+y+nLWe2rNGLiQwVB8h1C8vFzgODAQMXbYB6SH9VYyvMwPozlts1CVFglFgt5jHiT2U500eTIgegrkRn+AUiQhcHEiAmabwirg/ilmrUKYGN2pfDTiZR57jsaidaFBMr0SxAr5liZLOrRM7TuQmkw8FDT0qDMtkHeOXHcVeflGmtM2A5OF0Zs70YgOjX9RJ51i4h2XsLDI88Ae3QiiKaMU2QaQ8dt6shsMGyk9VtZYPOqvggjhsAycWDUy+lQ3UI+39f0Iel/YynztGk7B9gRJkYmTLnIFzWmbgckiisyRjm9J85HQoKGiudlQJ1YNbz4xX5O0Q/MV7NimYcXzy2wdzsaO+cnNahhv3QdMNeETMGg6kBwXgIfuA8MoVJLMj+inbg3wPR7SLYGBMWHeNVa919oMPtjfNdG3yvVDaOhAQZyUQxyC8IGCRgruWSVJOE1QYO/IusfAquNFwy4RobH2ijNtGs8MPRWIbJQmMJDEMH/AkYxorWn4BAkSvDnwfwKLA81vm0nApAkFuDM2mRBwq/pfMnTFgoIexrwh0swS4uHzNjH/m2wFWQopEWRmeneEZj4Q7CiFz1Q8Hvdsl4sXeKKfVTiSEH2ghM0v6T5Gy+1w9/PVZpjZQJ70H5le0vop95UsjrLV9KopRJ20GIJGbjfMIFtNM1gRcXTertPNKsE0wi8mH9rv3bQUvDRUDiUFruwW4fWY1vG7xsw+q8pmZ+j3ou+jigztBVib0zZDHKyJgfgemRffQDDbVo0ngwtMKztce3psC8qyd6LNREDHsx3TwyL4czXtzGlw9EHXUXixQgIDXAV1CTD9wEV9cClaDvfs6UmyYE95EiU++sBhGzjE5HnpqcytDs+U8HeBWNZoxxH5gwItM3fnHmsPoaGNHlo7tJMM7Oi5x6wRv2rFRjwOZ9TN3feakIoRIBPTbiB/Kx/SklnE4lZrDb8Ky2BOJ95MGQDHGz0OLvNro2cEWR5LOqgyo8fJGRNIf04mGj667S9KIbJEfJoGRLSmaTDVg9VOc3DULiA1LjY3CUV9gzgg85VCdO5rf8iJEy7h2dsAU2oUtOk4a9a3lJIgwtxa6JmoShOIaQ1zIvFp5JcxynG8nU6IlcMcMnEmUHBkJPoJ19EPjqy7H+7HGM8MsqKDQAqAVoqhZAoCXTEbQh7KMbCTGXox6yyrDVPBt3jcS4zmVsK71mBHnhEMQ9BuNnFsJhuGIYBTCBRslnZmUfQaoZJXWOrF1Hxa0kFzyh6P9kNIQ5tiIMFNPGupD4rxChn9SboOCFgwxnAXA+f+1orKfdCopdC3KRw8wBy2XQs4hRg5NiIIK5kyLzpmm5Q21sSRoDQ21QVTRvfRL0FBYh+HyhGep4xcgnLPYmW77dA2/3tSNEmgqHiCems8qgjczJDkW9LYJDXP3ezDRM+vfGcScP7K4YR1TKd+oBTqOGHtqBvhqYE2m73fz1LBa/1zCDJi1yz8GGRuTiw86/c36FUtSPOtxecZg4NjH6jMhGkxeEhnQSzcYwK7ZRjABsMgewhFt8ac410ywDW45jopkUMo++5aTHqg0YidMcJUErIO9Ie0ecIQrg8MCtIfmZ/JqDgv5jYVpAgJeu+0hrkQDcXica3+uhiat3ewOdAsMPlaQkTz2nY/w7+4JeZgpsRDJhvNkuyWImYbFMlvu5a2MAYECBmREmY4THLQg+x8uAq7bVNAB0vAFCgezz6gbJcQG+v7DACBEtfrX60oGnFw3C+SFsZn7x2Q1VqJEMQhpnhCT+z/vZ/FCIhepN7RZ1/1ph/XhQshh4kNjY0CPEvvFSQpQJa08cm+rYCFMo3siLeGPO2yyiu3Wq8QJqzJZOTf7dnMFOltzMN0QTMshIMukbmV72xUJcKU3oEM89n2mskrqnwQOt6/I2kO0xjG0oTq8RaNNNjZRkst6jYv4AsYoJ991Tu7eU8qTDpjFQkCLcfFuzifzG4RAiOQsRsWjoHowKOKEynz2GZKFw467cTCTfDSZMRBaKNx0zR2UeCWg/CwCnpKNgD3gjg9FHKmaQy0yCI3QliFYnucK266DWR1oRv9WLrwTd5sNKiW6+gD9e+CKav+hm4JaI+BLP1HeV0n8iQN7BQOwWd1npiC0bKLxMIrYZrRawGo7L4edeE7jZMVpN8nyOMSu3aNKkfsvobxSZdMDEcR5EkMluYOjDZVDGkzIifmAua1zWCibZyrqUVxIoXYR4dZNQAHeWS9aHhWueHkA+FbkTUCevYHLjFbEZWSCvYGNuRt5AZYNjf1qn0twWCmVokPdsQs+TV0zrMmPArGKdurR9FmvPp8ttmqKkcO15xXsLz+XWym3zlMj8RfJSEEcVM/TjNHXgJEiF27ezAfWExQ6utVuGNfHffEomyxyl4IfWLhk2eNKKUoyUDWGD92MzR+p70UJlloxClhgGWMlM8TCEp8DnBrSaikXtv96TAEam1NJ3lHt/Upo6RbJiZUM6UOxEjVjhGjw3SDy+aQPhA3jZF7xPWZJdOxJ05TFwv12kKpiJHnOR+866G3tT24wGCnQNeN7ZYOAo8nVaUTYR23hp1HBigWWolQBnxydH06e1B9UvBkD+ewuEg+w0w7W9Arkhk0I1Ks1truOfBOc2ymOq5X/x7cvzyXajzzMkrgl1WToyzWNNvTRGamXXNIEgKlcwY+O2vkgwcZIBmdke5lPl1PV4A0SUJV3hvATv/CjAi7sCSS/SXdE5rKbt6dJnFTznuJyaIRprJPQhzgRBxG6d6YGO6ImGMJpB63pMOjE9N3qO0otArUhtkHAFSJUzYhWPXkIM6W2bMB4SvKL+nanKyJOAdt48GXmzDDs5dKdlCJmCaMsdlh46/0f0nExdfSQG1zJNH76c1Xc4pvGRclq90ij2FQNFC8sN4v4oueTpL/bft0aQgVilbeKOMVgrEwC1YGz+HiJuOj06hmdpC31zSYKHrVSf9gmMj7yDUVwCuXy5oQQUMi99uvkUMjD0mynNnWySICOMP60jalRc15X8AFLBPozomoxmOwsPPriKeLhWkel/tIhCtiLNnUJp+PSJd5azNnk5Q0Gjg0WUb+kYL8E3fSFkYBMo/yw9AXY7RGTFWBjdZ/W+f35f4Rs5gWSWLUPBGCzJKZ8IbQwSXjXcjShcGg+Bh1H83IZGHwifiiqnNrn4lmQNFnp+4TeVzFoSaTU1ovXKUTGRAwiIrY5h+sqBm55dAgUTgugXLgDxUpo2pE67XECRAiTjMgB53PRPaLL/6EOpDEgwQxssSKEgihgO610K1nT9rn1ZVyj37B5svVdi3gzbPbkkzo6PzUV5BqP25I+VRs97sn7aAUfqAvObSfQo/JhLvjZdJAyAmePBARRoE9kzTKojQ3bogBxnmlXLU/nMOo/fsmc2mmZ1lOGNZ2x0SiQMgReBCQrYZU6dgdnxj73YcbGgeiNbLQn8HV3C4UwqVkth0AMWqzA+flSI7OdQucvEy/pDJytlAbAwfk55rHtvt8MFNCk67E8YZi9HPWIPxFAt4LG4G2oVgJlCeJhfrpLQfyBV7a35hARjoLodVeFYqQB/sEPDKJGxrm/ALOeegxdhRAZBsDKA6A+whkMJ9tBqoy/QaSvmXIYvCJHSPkabgnrXhDzFm4PrNgnDyXHT/SQerL7cLYGoXuCKmAi/QYCYhsJ8aAGMFCv7a/ADL+FFrctw5CJWfO5le+M/1mg9FzYR1NS/pXIFh0ZDLNbDPQxgOEgmFKbBNm9EeABEwOrfIERTybLq3gWSmfSprvRsGQAW8nKRvnpiNOOAgZiZuTIXZ4k3yL+Wuz54PD746YKt0RszkQRliGwjxWWPBBIjQiioJkowfZEHe4AObk8kBfurD7yUaacCnBVOmpMVTcNJsLhfqiasSK+SyjRQlAiOdIEb/PrweecYa/vq8aPeNv3afam/cOS1qt5WsS2lMC7eC60FQHZK6+eUTZaCjgF8NkO1Ya8rJLQNTi02oo8ecZNfe7FEtR+ivJCGSE4QIc54TwztddL6BV+Ru6RY7RKl2ANpsGWykORfkscyqvsWgk+UDhIC+dtWKg3KgSoKwZLttk5u0GkuFdJLXYHwD36d+wFoekwnlw5m7z4wLGaJXx4JKICOzq9ob/s3SbcOthr6ApfZyP0Rm6AG0WFI3J3wDUMuhC3DYtnwGDs4LpivCWrGebQiIiY/vHLjKCL+ZU7TGKjMNmsCRfbZloFzIj7oLG4S1IN8UEs/SKHL4Z2bDg2NnCMPZnPF/rwqUq3C365grrH0MXqM2WbHBrazP3rINRthrhCLrcfFVhz9gAnGWQZIuKa6IAjNiAucV2e5JkPYmMq2bznQ6wUhxrSQnJmivgOVGBaZy1oJjBUTYcUsEiqkJmlnvesfC5ddFduKUK92y5vv59Gv8ifZEuUJutbNZHN8CVKZiTGv2rmUCv6BBbOE3jZE6aC+ssoxmBZvptoEig6hyJ084JaKjtsqWXUnI/A6p+eCQiPIRj7LdnSA+YfmXVvg+xwEwc14S7VoV71eHraZVvp8mRZ9AFbLs20aM5sy5IRseN/rZm2mx/CdwwLteFKDKexWCuGs7RvSQoT1PTXiHiR8EpS1xDhdxrPXRYeUhM0NAIj3WHDJiZxuSRrr4kfh2VheWcGjMd8E24B6pw73vF9UrIlKdOfvaOL9EFbLNUVSaEmtAk5UneACW2C2tES/ANnKaH2nVtu/avzSny6aMZaLGZZb8RO7bvkkVuGb/CQmG+OUChK6lL2Wb7a1rTvbrdj+BykTM2q6Fmm7twV+mVdEUV7tdcR9PPnPrkZ++433PpArdZlnAgm0tt82ldhTSx72JAjl/3gwsOoZs5L9GJQRNSAB/HMgDpOtc4CuF8UCnxTziLwKyQR+Lmh/uLnydZEqae7Vx9XozeYNwIpkTNwlAB8krV3EOHHkHfeYzove+m9X1X/P5X/dqnN+gCt5kETG5O6TxBwhhvILwAeuaU91WtZCM1HNkCMI0RKryfgaPMnOlKdJIxeBokkCM78HUqkygRHhlX4NJMef0NzH70dbk6JDxDy2/7caK11evpe55G9Kn30NkN+vCHT9z/hTQHbfdh0nnDDUmak5kmJqOi3axLOEKJuNJBjQMrkSRziZgLYYofXRjQV6s2+2KkFqS66iOFnKtwJN4ogJI4yNLRABYHNA0TYwnG9ukMTd52A03W30z0fX9Ye/Nqove/hu46cN+bH/rofz9Lc9Bm4KJ7czTZvwThYZ3qR3N8EPffEKCa9KStLvCdljPWqkrkhZbaGExGTE0QEAl+xcwGTy+HZfj90FgnPzJ6BojgHGKRg756bzkjk3+twr37jUTf9USigzcSfeAZtLm89h/P+tOr/oHmpM28XjTtYH/ItVl3J5NnpbNmou0CoDkRj/qFZcdS/8jTZRNv+4fguUdcV/sUq/GoPNt2m2QuiNft+U0xS57JH+M4zIogDTrdXufyjht4cvoNRN9+E9HlTyA6/Saiz7yf7lw5/JRjb33rNs1J410e3377wGb4qmXlkjQ2YIuXJ0rswf3c0hLBz+6IOnKYRURZeCrQwXy3TkPx4Wb/OK5PLBXi9XbtYZCEponG5AYJZlrYLES/dztmun2Gy7tupH13vI7oW6vWXv371Ff/eM+NtH7XqXesffdt37GT+LiQbZaV7hy4eOfYDsqUoeB3eX2Tnsx8DjDDdyDpvCJ8LI+QOhqjyMIZieEDhokyYYFjLH3oZIaxboh/2c00xztxwAcapmeYb63C/VQV7oMfVoX7lLp1H9Fdf0ey/hH6YjnwO/Mk3NZm0eDRCySf6wDJfxsBwEjRqPkvX4Yfl9BAOW3LpyZM5f6a3CukSzgOkxAP49p+mzENCY/KcLlj12AEjdn8TaJ/u5FWP/ZPRN9wHdF1z6wb71MPvL0Cq0fS+vrmmw58y93fT0RzJeAZ18my/yP80R1EyZ/2tR1Tp7ZtEBydR6CUEu9ZUDDRQvDjepBfMJlqQ3mShIPQKHxENsm2KUJsPif00xG2KVW4vO+jVbgP/Fqib/qTuueIXvXEs6vw76QyXX3TxstXv+e8OaPptnb1pJ8iS+2/9rPG5cw6/wzdSl/GNstvNniUaFSAiTj81zhMCs2mvpjRqL9xpf43ATRSgYsGKsXLPhh+dCSJSCC4bxXjNchQr1ZeNP6YYJpzFNDvK2J5TSuJ7VecblC59UZe+XA1y9fen+g7/6zu+So9cfo+os+/pL/B6uqZP6Kr6rZGbUztv8H+a/I9u6371nWfFJry/vIr9YD5EjDjZ3GUOwjKCMBIMpK2wJEQhpCxRcQZxcIf6kp3bl59LBnVmKGcrgNizxLjQt0nvtuUUBcyXEkyO86OeAVHvrGc4cmtP07LH3g90f2qOf7+p9bB9iDy8XmqCn1lrf63qpsO1NPazNfBLtGE3IVbd36phsV3nNbvS7Q5rJbHLd00fTF9mduuffB0GP+SpP5QdIsx81GqRBTKEVvT30G8REdSjDwiSnBB8d9q4HDBAu9L5JRlQtLGlHklZL/OoGlLC9+Ce/TY2J6jmuXyzht46X1VuAerEB9diYz9P0AREbb/mgS3djxr2fG3tvWXE722+uw712lYrqJePv2o1cdtv4HuhTbLMkrm6rzYLukpLLB2tqFV1yEytTZ7Co7/XEZr7AdHwGkErSTqKmwQqZVtSNp5kZy/ZrtwH156PXMHwWbVyw0bNLm1xrkfeEOX4fDtVWs3Pku8+QI7pF1sSqOR1gU6qZ9WqByu4RNdrg+58RqiN1fhfmmTtg+tfOGug6s/fOSRd72L7qW2aw3e2p4er69yfyy0LRpvatdKBj9ETusNwRAxKEULmSBcGdtm06gSVoBcW0eFAgm9aeL/PCA2kx1jgkP9vi1rTL14YViXpXffwOVDlbhoiT7zpdIqeC6rn1udRlOLcp4ebFe86sEk3/H39foHiM5UUPamY1Vzz9J0rXzi9pVD11/7Yx//L7oX2+7zwcTvqR3+1WSZ1tbSD0K34DermtWX8qgm2mR4zuAaoWq17eyhCu5gGZx2S6/6UBDnIRnCZLCbJCNCIwnZDotkCPHnnsuyVbXtft9FfB8iLw9qF2m9tVKPn4hm0tiw+5m7ppOTH5zQ/qq13/p79TrVpG9W//zGY0Qnz9Lm2tL7P7196Acf+BMf+xTdy233Png6rcQrPR0IOQnO/PH4uhJcVMgNQEbGcDrFq+fwhVj808IzNYrMdK7rJ1gISqQDrIRdzn6DGGWxTHmKQjLt9qxe2KcGxK2Oipjo7Y85vXr8pQfoR24muvInq3D/hegNv1VDqC06s7b0juPrV/7o1/3Mh+6kC9BmWKuyvLC+V/8hRoGGptl7EfTYj0kLUd5jiLmFKzvNJYW8ovQC3JhFMK5OTG7uk0sgStSkI2vcF9jAnecImPkz5nCLzNQwZWXQx+p32P70q2X1oy9eo4c+sgr3UVW47yR6/e9Us7xVNXf5tSdOLH3fhRJua7Pkg09WDXgysIXBZFhG1Cj130MomtCXUaySwFIG4+0fQV2G+UzJ5l4wo6LvD8aM/MK62ClFoqtDoekQVbnipbqS6FEMNEnvSGOUN3pMAMKa972TV97+80xf+SCmr/+NClDeS/S636zCPUMb+1de9Co5csO1T7htnS5gmymbtLS0dEsV3tMdkAaQtQ5GNQcRjRILXmIZjpHch4/WudL+9lhaAHCti4nOdS9MECCFubcjRyGb+eMdaGycxTILQXlZY9gsxO38rl+jlekpooffXGPdT9ZQqAr5jg06vW/l6fs/+As//ehHf2CLLnDbtQ/Orfrj5oufyO5gd3oy4rQBLlh9IYc2WLpPw0/Xpmwm0xzP1GyLCCWVtV2O4xMfbbdU/5piMWYwcAnN88h4ON5AomPrIy/62MG33PQ1/KhfJ/qKyk3/468SffGsnFrb95TDj73tD5nOA+cvQLtHs9Ink8mTqrl+fP14HCaaQ2fSrC4DNECsHLpPkZCn6JPsL8lj2EgEetibXDzRiIMghwVQesNmSmjYD1v1y2D5pABW5mbFhavH6Ig6uXXyI3+8/y2PP8TfVnMLVz6E6FW/XM3yxvaXDu77+csee9sfzItwW7vHyw50c13KA2p3Pr7ipn9uHeA7RQLO6C91isWrfa//E4fLyKbjEiY05xfNHwNREzmYy34UApSo7EBhiAd4CiDSnCU1yylRoc79eL3CK+tRT9q3xA/gl133oKWvvOa+9OAfJXrlk2uu4e7NE/tWf+rwY257Hi3axd1O/PWRnxqevyZy6skiL7lahucsnbzjlvt9Ly3axd8+/qz7XLX97OUvyCceKfLSa2X6zHL7yeevPZTmuM3266OXaLuGTj178k0PPELvvpXkc587fvbAvkdc/vj1j9Act3uEoi+ltvG8A49dPbL6tzQZaPj0Xf+5WYYfWvsF+gzNeZvQov2f7Qt/ceSag2tnX8UrtDa97e63nd538AcOPWHz83QRtLlcvGueWgPnh1dOPafQ9Mrp7euvnpy5+hGX/dypE7Roe6NtPG/1cfKsItvPLi+U5163TBdZW/jg/6Wdfv7aNfu3zrxvKsMtS5+n3+BjViWwaHujDc9betn0OeW3ZaEIe69t3rL/UVt/tfxLtGh7s935lwe/nhZt0RZt0S5o+2/IrOLeI5M8sAAAAABJRU5ErkJggg==")), S.appendChild(en("Click to attach a file or drag it here")), S.onclick = un;
    const L = uA();
    return L.classList.add("shake-sdk-attachments-empty"), L.appendChild(S), L.appendChild(E), Zs(S), L;
  })(), g = uA();
  g.classList.add("shake-sdk-attachments-list-wrap"), Zs(g);
  const p = uA();
  p.classList.add("shake-sdk-attachments-preview-wrap");
  const w = () => {
    a.remove(), t.appendChild(r);
  }, C = () => {
    r.remove(), t.appendChild(a);
  }, y = Yu(e, (Q) => {
    Q ? (r.parentNode || w(), so(Q ?? "").then((b) => {
      p.innerText = "", p.appendChild(Ju(b));
    })) : (a.parentNode || C(), p.innerText = "");
  });
  return g.appendChild(y), r.appendChild(g), r.appendChild(p), e.length > 0 ? w() : C(), t;
}, ba = (e, t) => {
  const r = Oe(Nr);
  r.classList.add("shake-sdk-close-button"), r.onclick = () => se(!0);
  const a = qu(t), g = uA();
  g.classList.add("shake-sdk-content-left"), g.appendChild(r), g.appendChild(a);
  const p = rd(e, t), w = uA();
  w.classList.add("shake-sdk-content-right"), w.appendChild(p);
  const C = uA();
  C.classList.add("shake-sdk-content-wrap"), C.appendChild(g), C.appendChild(w);
  const y = uA();
  y.classList.add("shake-sdk-content"), y.appendChild(C);
  const Q = document.createElement("input");
  Q.type = "file", Q.id = "fileInput", Q.style.content = "display: none", Q.addEventListener("change", async (S) => {
    var j;
    const L = S.target, H = (j = L == null ? void 0 : L.files) == null ? void 0 : j[0];
    H && await wa(H), Q.value = "";
  });
  const b = document.createElement("div");
  b.appendChild(Q), b.id = "shake-sdk-root";
  const E = b.attachShadow({ mode: "open" });
  return E.appendChild(y), kt(E), b;
}, Qa = async () => {
  const e = kA.localStorage.getShakeState(), t = await Le(), r = ba(e, t);
  document.body.appendChild(r), xa(), kA.localStorage.setShakeOpened(!0);
}, wn = () => {
  se(!1);
  const e = da("data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20width='16px'%20height='16px'%20viewBox='0%200%2032%2032'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform='translate(-35.852326,-90.237974)'%3e%3cpath%20style='fill:%23ff0000'%20d='m%2067.852325,106.23797%20a%2016,16%200%200%201%20-16,16%2016,16%200%200%201%20-16,-16%2016,16%200%200%201%2016,-15.999997%2016,16%200%200%201%2016,15.999997%20z'/%3e%3c/g%3e%3c/svg%3e", "white", "#d3d3d3", () => {
    e.remove(), (async () => {
      const t = await new ln().captureScreenshot(document.body);
      t && await gn(t), await Qa();
    })();
  });
  document.body.appendChild(e);
}, Zu = (e) => {
  const t = uA();
  t.classList.add("shake-sdk-file-thumbnail-small");
  const r = tn(e);
  return t.appendChild(r), t;
}, Fa = "data:image/svg+xml,%3csvg%20width='50'%20height='51'%20viewBox='0%200%2050%2051'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.834%2021.5598L29.1673%2029.8931'%20stroke='%23FFFFFF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M29.1673%2021.56L20.834%2029.8933'%20stroke='%23FFFFFF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", $u = (e) => {
  mt(`Opening image: ${e.name}`), document.body.appendChild(((t) => {
    const r = Ii({ image: Fa, onClick: () => {
      w.remove();
    } }), a = uA();
    a.classList.add("shake-sdk-image-preview-toolbar-fs"), a.appendChild(r);
    const g = uA();
    g.classList.add("shake-sdk-image-preview-content-fs"), g.appendChild(ya(t));
    const p = uA();
    p.classList.add("shake-sdk-image-preview-root-fs"), p.appendChild(a), p.append(g);
    const w = document.createElement("div"), C = w.attachShadow({ mode: "open" });
    return kt(C), C.appendChild(p), w;
  })(e));
}, Ad = (e) => {
  mt("Opening video: " + e.name), document.body.appendChild(((t) => {
    const r = Ii({ image: Fa, onClick: () => {
      C.remove();
    } }), a = uA();
    a.classList.add("shake-sdk-video-preview-toolbar-fs"), a.appendChild(r);
    const g = URL.createObjectURL(t), p = Vi({ src: g, controls: !0, autoplay: !0 });
    p.classList.add("shake-sdk-video-preview-fs");
    const w = uA();
    w.classList.add("shake-sdk-video-preview-root-fs"), w.appendChild(a), w.appendChild(p);
    const C = document.createElement("div"), y = C.attachShadow({ mode: "open" });
    return kt(y), y.appendChild(w), C;
  })(e.data));
}, td = (e) => {
  const t = CA.attachmentsManager, r = /* @__PURE__ */ new Map(), a = async () => {
    await Bn() ? Se(Ba()) : Se((() => {
      const y = [];
      return y.push({ text: dA().shake_sdk_dialog_add_attachment_grab_screenshot, icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20fill='%2300000000'%20d='M13.5,6.75h-2.25c-2.485,0%20-4.5,2.015%20-4.5,4.5v2.25M40.5,47.25h2.25c2.485,0%204.5,-2.015%204.5,-4.5V40.5M6.75,40.5v2.25c0,2.485%202.015,4.5%204.5,4.5h2.25M47.25,13.5v-2.25c0,-2.485%20-2.015,-4.5%20-4.5,-4.5H40.5'%20stroke-width='3.38'%20stroke='%234CD266'/%3e%3c/svg%3e", onClick: wn }), Hi() || y.push({ text: dA().shake_sdk_dialog_add_attachment_record_screen, icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20fill='%2300000000'%20d='M37.487,32.702L32.57,29.67v-5.342l4.918,-3.03c0.382,-0.236%200.861,-0.247%201.253,-0.028%200.392,0.218%200.635,0.632%200.635,1.08v9.297c0,0.45%20-0.243,0.863%20-0.635,1.081%20-0.392,0.219%20-0.871,0.208%20-1.253,-0.027z'%20stroke-width='3.375'%20stroke='%23FF9C0A'/%3e%3cpath%20fill='%2300000000'%20d='M16.275,18.956L30.919,18.956A1.65,1.65%200,0%201,32.569%2020.606L32.569,33.393A1.65,1.65%200,0%201,30.919%2035.043L16.275,35.043A1.65,1.65%200,0%201,14.625%2033.393L14.625,20.606A1.65,1.65%200,0%201,16.275%2018.956z'%20stroke-width='3.375'%20stroke='%23FF9C0A'/%3e%3cpath%20fill='%2300000000'%20d='M11.75,6.75L42.25,6.75A5,5%200,0%201,47.25%2011.75L47.25,42.25A5,5%200,0%201,42.25%2047.25L11.75,47.25A5,5%200,0%201,6.75%2042.25L6.75,11.75A5,5%200,0%201,11.75%206.75z'%20stroke-width='3.375'%20stroke='%23FF9C0A'/%3e%3c/svg%3e", onClick: pn }), y.push({ text: dA().shake_sdk_dialog_add_attachment_browse_locations, icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20fill='%2300000000'%20d='M27,47.25c-11.184,0%20-20.25,-9.066%20-20.25,-20.25S15.816,6.75%2027,6.75%2047.25,15.816%2047.25,27%2038.184,47.25%2027,47.25l-0,0z'%20stroke-width='3.38'%20stroke='%2364B1FD'/%3e%3cpath%20fill='%2300000000'%20d='M26.998,26.156c-0.466,0.003%20-0.841,0.382%20-0.84,0.847%200.002,0.465%200.38,0.842%200.846,0.84%200.465,0%200.842,-0.378%200.842,-0.843%20-0.002,-0.467%20-0.382,-0.844%20-0.848,-0.844M35.998,26.156c-0.466,0.003%20-0.841,0.382%20-0.84,0.847%200.002,0.465%200.38,0.842%200.846,0.84%200.465,0%200.842,-0.378%200.842,-0.843%20-0.002,-0.467%20-0.382,-0.844%20-0.848,-0.844M17.998,26.156c-0.466,0.003%20-0.841,0.382%20-0.84,0.847%200.002,0.465%200.38,0.842%200.846,0.84%200.465,0%200.842,-0.378%200.842,-0.843%20-0.002,-0.467%20-0.382,-0.844%20-0.848,-0.844'%20stroke-width='3.38'%20stroke='%2364B1FD'/%3e%3c/svg%3e", onClick: un }), Fo(dA().shake_sdk_dialog_add_attachment, y);
    })());
  }, g = async (y) => {
    const Q = await so(y.name);
    y.type == yA.IMAGE ? $u(Q) : y.type == yA.VIDEO && Ad(Q);
  }, p = (y) => {
    t.removeAttachment(y);
  }, w = (y) => {
    const Q = C.lastChild;
    Q && C.removeChild(Q);
    const b = ((E, S, L) => {
      const H = Oe(Ca);
      let j;
      H.classList.add("shake-sdk-attachment-item-remove-small"), H.onclick = (iA) => {
        iA.stopPropagation(), L(E);
      };
      const B = URL.createObjectURL(E.drawingData ?? E.data);
      j = E.type == yA.IMAGE ? XA(B) : E.type == yA.VIDEO ? Vi({ src: B + "#t=0.1", autoplay: !0 }) : Zu(E.name), j.classList.add("shake-sdk-attachment-item-thumbnail-small"), j.onclick = () => S(E);
      const J = uA();
      return J.classList.add("shake-sdk-attachment-item-small"), J.appendChild(j), J.appendChild(H), J;
    })(y, g, p);
    r.set(y.name, b), C.appendChild(b), C.appendChild(((E) => {
      const S = Oe(ma);
      S.classList.add("shake-sdk-attachment-add-button-small"), S.onclick = E;
      const L = uA();
      return L.classList.add("shake-sdk-attachments-add-item-small"), L.appendChild(S), L;
    })(a));
  };
  t.removeObservers.push((y) => {
    const Q = r.get(y.name);
    Q && (Q.remove(), r.delete(y.name));
  }), t.updateObservers.push((y) => {
    const Q = r.get(y.name);
    Q && ((b, E) => {
      const S = URL.createObjectURL(E.drawingData ?? E.data), L = b.getElementsByClassName("shake-sdk-attachment-item-thumbnail-small");
      E.type == yA.IMAGE && (L[0].src = S), E.type == yA.VIDEO && (L[0].src = S);
    })(Q, y);
  }), t.addObservers.push((y) => {
    w(y);
  });
  const C = uA();
  return C.classList.add("shake-sdk-attachments-items-small"), e.forEach((y) => w(y)), C;
}, ed = (e, t) => [{ type: wi.TITLE, value: e, label: "Title" }, { type: wi.PICKER, value: t, label: "Ticket type" }], id = [{ icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20fill='%2300000000'%20d='m40.5,15.75%20l-2.25,4.5%20-3,2.063M11.25,27h6.997M35.752,27h6.998M13.5,6.75h-2.25a4.499,4.499%200,0%200,-4.5%204.5v2.25M40.5,47.25h2.25c2.486,0%204.5,-2.014%204.5,-4.5V40.5M6.75,40.5v2.25c0,2.486%202.014,4.5%204.5,4.5h2.25M47.25,13.5v-2.25c0,-2.486%20-2.014,-4.5%20-4.5,-4.5H40.5M13.5,15.75l2.25,4.5%203,2.063M27.999,38.25h-2a6.75,6.75%200,0%201,-6.75%20-6.75v-6.75c0,-2.486%202.014,-4.5%204.5,-4.5h6.5c2.486,0%204.5,2.014%204.5,4.5v6.75a6.75,6.75%200,0%201,-6.75%206.75zM13.5,38.25l2.25,-4.5%203,-2.063M40.5,38.25l-2.25,-4.5%20-3,-2.063M31.5,20.25h-9v-4.5a2.25,2.25%200,0%201,2.25%20-2.25h4.5a2.25,2.25%200,0%201,2.25%202.25v4.5z'%20stroke-width='3.38'%20stroke='%23B77DFF'/%3e%3c/svg%3e", value: Qe.BUG, label: dA().shake_sdk_new_ticket_feedback_type_bug }, { icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20fill='%2300000000'%20d='M42.75,47.25h-31.5a4.499,4.499%200,0%201,-4.5%20-4.5v-31.5c0,-2.486%202.014,-4.5%204.5,-4.5h31.5c2.486,0%204.5,2.014%204.5,4.5v31.5c0,2.486%20-2.014,4.5%20-4.5,4.5z'%20stroke-width='3.38'%20stroke='%23FF9F0A'/%3e%3cpath%20fill='%2300000000'%20d='M27,29.813v-0.563c0,-1.838%201.136,-2.835%202.275,-3.6%201.111,-0.75%202.225,-1.726%202.225,-3.526%200,-2.486%20-2.014,-4.5%20-4.5,-4.5a4.499,4.499%200,0%200,-4.5%204.5M26.998,36a0.563,0.563%200,1%200,0.005%201.125,0.563%200.563,0%200,0%20-0.005,-1.125'%20stroke-width='3.38'%20stroke='%23FF9F0A'/%3e%3c/svg%3e", value: Qe.QUESTION, label: dA().shake_sdk_new_ticket_feedback_type_question }, { icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20fill='%2300000000'%20d='M31.275,47.25h0a20.507,20.507%200,0%200,15.417%20-15.417M38.25,22.5V9M31.5,15.75H45M6.75,22.725h0A20.504,20.504%200,0%201,22.167%207.304M22.167,47.25h0A20.511,20.511%200,0%201,6.75%2031.833'%20stroke-width='3.38'%20stroke='%23D75ED7'/%3e%3c/svg%3e", value: Qe.SUGGESTION, label: dA().shake_sdk_new_ticket_feedback_type_suggestion }];
let at;
const rd = (e, t) => {
  let r = e.feedbackType, a = e.description, g = !0, p = !1;
  const w = hn();
  w.classList.add("shake-sdk-new-ticket");
  const C = uA();
  C.classList.add("shake-sdk-new-ticket-form");
  const y = ((J = se, iA = !1, cA = () => {
  }) => {
    const u = Ii({ image: Nr, onClick: () => cA() }), s = Ii({ image: Nr, onClick: J }), o = document.createElement("div");
    return o.classList.add("shake-sdk-toolbar"), iA && o.appendChild(u), o.appendChild(s), o;
  })(), Q = rn(dA().shake_sdk_ticket_form_title);
  Q.classList.add("shake-sdk-new-ticket-title"), w.appendChild(Q);
  const b = Pt();
  function E() {
    g = !a.trim() || p, b.disabled = g, S.textContent = p ? dA().shake_sdk_ticket_form_submit_button_text_loading : dA().shake_sdk_ticket_form_submit_button_text;
  }
  b.disabled = !0, b.onclick = async () => {
    p = !0, E(), await (async ({ feedbackType: J, description: iA }) => {
      const cA = CA.shakeApiService, u = await Le(), s = await Uo();
      s && (s.tags.push(J), s.custom_fields = ed(iA, J), await cA.sendUserFeedback(s, u)), se();
    })({ feedbackType: r, description: a }), p = !1;
  };
  const S = Qo(dA().shake_sdk_ticket_form_submit_button_text);
  b.appendChild(S);
  const L = Gu({ label: dA().shake_sdk_new_ticket_feedback_type_title, items: id, onSelectionChange: (J) => {
    r = J;
    const iA = kA.localStorage.getShakeState();
    iA && (iA.feedbackType = J, kA.localStorage.setShakeState(iA));
  }, selectedValue: r });
  C.appendChild(y), C.appendChild(Q), C.appendChild(L);
  const { textArea: H, textAreaInput: j } = (({ onChange: J, maxLength: iA, value: cA, label: u }) => {
    const s = uA();
    s.classList.add("shake-sdk-textarea-container");
    const o = document.createElement("label");
    o.textContent = u, o.classList.add("shake-sdk-textarea-label");
    const d = document.createElement("textarea");
    return d.classList.add("shake-sdk-textarea"), d.rows = 12, d.textContent = cA || null, d.addEventListener("input", function(A) {
      let i = A.target.value;
      iA && i.length > iA && (i = i.slice(0, iA), A.target.value = i), J(A.target.value);
    }), s.appendChild(o), s.appendChild(d), { textArea: s, textAreaInput: d };
  })({ onChange: (J) => {
    a = J;
    const iA = kA.localStorage.getShakeState();
    iA && (iA.description = J, kA.localStorage.setShakeState(iA), E());
  }, maxLength: 1e4, value: a, label: dA().shake_sdk_ticket_form_description_placeholder });
  at = j, H.classList.add("shake-sdk-styled-textarea"), C.appendChild(H);
  const B = td(t);
  return C.appendChild(B), w.appendChild(C), w.appendChild(b), w;
}, xa = () => {
  at == null || at.focus();
  const e = (at == null ? void 0 : at.value.length) ?? 0;
  at == null || at.setSelectionRange(e, e);
};
var pr, Br, Xr = { exports: {} };
pr = Xr, Br = Xr.exports, function(e, t) {
  var r = "function", a = "undefined", g = "object", p = "string", w = "major", C = "model", y = "name", Q = "type", b = "vendor", E = "version", S = "architecture", L = "console", H = "mobile", j = "tablet", B = "smarttv", J = "wearable", iA = "embedded", cA = "Amazon", u = "Apple", s = "ASUS", o = "BlackBerry", d = "Browser", A = "Chrome", i = "Firefox", n = "Google", h = "Huawei", c = "LG", l = "Microsoft", f = "Motorola", m = "Opera", v = "Samsung", x = "Sharp", U = "Sony", F = "Xiaomi", k = "Zebra", O = "Facebook", P = "Chromium OS", R = "Mac OS", Y = function(G) {
    for (var z = {}, $ = 0; $ < G.length; $++)
      z[G[$].toUpperCase()] = G[$];
    return z;
  }, V = function(G, z) {
    return typeof G === p && _(z).indexOf(_(G)) !== -1;
  }, _ = function(G) {
    return G.toLowerCase();
  }, T = function(G, z) {
    if (typeof G === p)
      return G = G.replace(/^\s\s*/, ""), typeof z === a ? G : G.substring(0, 500);
  }, M = function(G, z) {
    for (var $, eA, rA, Z, nA, q, lA = 0; lA < z.length && !nA; ) {
      var sA = z[lA], hA = z[lA + 1];
      for ($ = eA = 0; $ < sA.length && !nA && sA[$]; )
        if (nA = sA[$++].exec(G))
          for (rA = 0; rA < hA.length; rA++)
            q = nA[++eA], typeof (Z = hA[rA]) === g && Z.length > 0 ? Z.length === 2 ? typeof Z[1] == r ? this[Z[0]] = Z[1].call(this, q) : this[Z[0]] = Z[1] : Z.length === 3 ? typeof Z[1] !== r || Z[1].exec && Z[1].test ? this[Z[0]] = q ? q.replace(Z[1], Z[2]) : t : this[Z[0]] = q ? Z[1].call(this, q, Z[2]) : t : Z.length === 4 && (this[Z[0]] = q ? Z[3].call(this, q.replace(Z[1], Z[2])) : t) : this[Z] = q || t;
      lA += 2;
    }
  }, N = function(G, z) {
    for (var $ in z)
      if (typeof z[$] === g && z[$].length > 0) {
        for (var eA = 0; eA < z[$].length; eA++)
          if (V(z[$][eA], G))
            return $ === "?" ? t : $;
      } else if (V(z[$], G))
        return $ === "?" ? t : $;
    return G;
  }, X = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" }, D = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [E, [y, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [E, [y, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [y, E], [/opios[\/ ]+([\w\.]+)/i], [E, [y, m + " Mini"]], [/\bopr\/([\w\.]+)/i], [E, [y, m]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [E, [y, "Baidu"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [y, E], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [E, [y, "UC" + d]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [E, [y, "WeChat"]], [/konqueror\/([\w\.]+)/i], [E, [y, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [E, [y, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [E, [y, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [E, [y, "Smart Lenovo " + d]], [/(avast|avg)\/([\w\.]+)/i], [[y, /(.+)/, "$1 Secure " + d], E], [/\bfocus\/([\w\.]+)/i], [E, [y, i + " Focus"]], [/\bopt\/([\w\.]+)/i], [E, [y, m + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [E, [y, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [E, [y, "Dolphin"]], [/coast\/([\w\.]+)/i], [E, [y, m + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [E, [y, "MIUI " + d]], [/fxios\/([-\w\.]+)/i], [E, [y, i]], [/\bqihu|(qi?ho?o?|360)browser/i], [[y, "360 " + d]], [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i], [[y, /(.+)/, "$1 " + d], E], [/samsungbrowser\/([\w\.]+)/i], [E, [y, v + " Internet"]], [/(comodo_dragon)\/([\w\.]+)/i], [[y, /_/g, " "], E], [/metasr[\/ ]?([\d\.]+)/i], [E, [y, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[y, "Sogou Mobile"], E], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i], [y, E], [/(lbbrowser)/i, /\[(linkedin)app\]/i], [y], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[y, O], E], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [y, E], [/\bgsa\/([\w\.]+) .*safari\//i], [E, [y, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [E, [y, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [E, [y, A + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[y, A + " WebView"], E], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [E, [y, "Android " + d]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [y, E], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [E, [y, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [E, y], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [y, [E, N, { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }]], [/(webkit|khtml)\/([\w\.]+)/i], [y, E], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[y, "Netscape"], E], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [E, [y, i + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [y, E], [/(cobalt)\/([\w\.]+)/i], [y, [E, /master.|lts./, ""]]], cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[S, "amd64"]], [/(ia32(?=;))/i], [[S, _]], [/((?:i[346]|x)86)[;\)]/i], [[S, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[S, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[S, "armhf"]], [/windows (ce|mobile); ppc;/i], [[S, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[S, /ower/, "", _]], [/(sun4\w)[;\)]/i], [[S, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[S, _]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [C, [b, v], [Q, j]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [C, [b, v], [Q, H]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [C, [b, u], [Q, H]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [C, [b, u], [Q, j]], [/(macintosh);/i], [C, [b, u]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [C, [b, x], [Q, H]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [C, [b, h], [Q, j]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [C, [b, h], [Q, H]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[C, /_/g, " "], [b, F], [Q, H]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[C, /_/g, " "], [b, F], [Q, j]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [C, [b, "OPPO"], [Q, H]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [C, [b, "Vivo"], [Q, H]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [C, [b, "Realme"], [Q, H]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [C, [b, f], [Q, H]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [C, [b, f], [Q, j]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [C, [b, c], [Q, j]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [C, [b, c], [Q, H]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [C, [b, "Lenovo"], [Q, j]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[C, /_/g, " "], [b, "Nokia"], [Q, H]], [/(pixel c)\b/i], [C, [b, n], [Q, j]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [C, [b, n], [Q, H]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [C, [b, U], [Q, H]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[C, "Xperia Tablet"], [b, U], [Q, j]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [C, [b, "OnePlus"], [Q, H]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [C, [b, cA], [Q, j]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[C, /(.+)/g, "Fire Phone $1"], [b, cA], [Q, H]], [/(playbook);[-\w\),; ]+(rim)/i], [C, b, [Q, j]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [C, [b, o], [Q, H]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [C, [b, s], [Q, j]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [C, [b, s], [Q, H]], [/(nexus 9)/i], [C, [b, "HTC"], [Q, j]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [b, [C, /_/g, " "], [Q, H]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [C, [b, "Acer"], [Q, j]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [C, [b, "Meizu"], [Q, H]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [C, [b, "Ulefone"], [Q, H]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [b, C, [Q, H]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [b, C, [Q, j]], [/(surface duo)/i], [C, [b, l], [Q, j]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [C, [b, "Fairphone"], [Q, H]], [/(u304aa)/i], [C, [b, "AT&T"], [Q, H]], [/\bsie-(\w*)/i], [C, [b, "Siemens"], [Q, H]], [/\b(rct\w+) b/i], [C, [b, "RCA"], [Q, j]], [/\b(venue[\d ]{2,7}) b/i], [C, [b, "Dell"], [Q, j]], [/\b(q(?:mv|ta)\w+) b/i], [C, [b, "Verizon"], [Q, j]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [C, [b, "Barnes & Noble"], [Q, j]], [/\b(tm\d{3}\w+) b/i], [C, [b, "NuVision"], [Q, j]], [/\b(k88) b/i], [C, [b, "ZTE"], [Q, j]], [/\b(nx\d{3}j) b/i], [C, [b, "ZTE"], [Q, H]], [/\b(gen\d{3}) b.+49h/i], [C, [b, "Swiss"], [Q, H]], [/\b(zur\d{3}) b/i], [C, [b, "Swiss"], [Q, j]], [/\b((zeki)?tb.*\b) b/i], [C, [b, "Zeki"], [Q, j]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[b, "Dragon Touch"], C, [Q, j]], [/\b(ns-?\w{0,9}) b/i], [C, [b, "Insignia"], [Q, j]], [/\b((nxa|next)-?\w{0,9}) b/i], [C, [b, "NextBook"], [Q, j]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[b, "Voice"], C, [Q, H]], [/\b(lvtel\-)?(v1[12]) b/i], [[b, "LvTel"], C, [Q, H]], [/\b(ph-1) /i], [C, [b, "Essential"], [Q, H]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [C, [b, "Envizen"], [Q, j]], [/\b(trio[-\w\. ]+) b/i], [C, [b, "MachSpeed"], [Q, j]], [/\btu_(1491) b/i], [C, [b, "Rotor"], [Q, j]], [/(shield[\w ]+) b/i], [C, [b, "Nvidia"], [Q, j]], [/(sprint) (\w+)/i], [b, C, [Q, H]], [/(kin\.[onetw]{3})/i], [[C, /\./g, " "], [b, l], [Q, H]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [C, [b, k], [Q, j]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [C, [b, k], [Q, H]], [/smart-tv.+(samsung)/i], [b, [Q, B]], [/hbbtv.+maple;(\d+)/i], [[C, /^/, "SmartTV"], [b, v], [Q, B]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[b, c], [Q, B]], [/(apple) ?tv/i], [b, [C, u + " TV"], [Q, B]], [/crkey/i], [[C, A + "cast"], [b, n], [Q, B]], [/droid.+aft(\w+)( bui|\))/i], [C, [b, cA], [Q, B]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [C, [b, x], [Q, B]], [/(bravia[\w ]+)( bui|\))/i], [C, [b, U], [Q, B]], [/(mitv-\w{5}) bui/i], [C, [b, F], [Q, B]], [/Hbbtv.*(technisat) (.*);/i], [b, C, [Q, B]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[b, T], [C, T], [Q, B]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[Q, B]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [b, C, [Q, L]], [/droid.+; (shield) bui/i], [C, [b, "Nvidia"], [Q, L]], [/(playstation [345portablevi]+)/i], [C, [b, U], [Q, L]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [C, [b, l], [Q, L]], [/((pebble))app/i], [b, C, [Q, J]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [C, [b, u], [Q, J]], [/droid.+; (glass) \d/i], [C, [b, n], [Q, J]], [/droid.+; (wt63?0{2,3})\)/i], [C, [b, k], [Q, J]], [/(quest( 2| pro)?)/i], [C, [b, O], [Q, J]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [b, [Q, iA]], [/(aeobc)\b/i], [C, [b, cA], [Q, iA]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [C, [Q, H]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [C, [Q, j]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[Q, j]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[Q, H]], [/(android[-\w\. ]{0,9});.+buil/i], [C, [b, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [E, [y, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [E, [y, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [y, E], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [E, y]], os: [[/microsoft (windows) (vista|xp)/i], [y, E], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [y, [E, N, X]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[E, N, X], [y, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[E, /_/g, "."], [y, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[y, R], [E, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [E, y], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [y, E], [/\(bb(10);/i], [E, [y, o]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [E, [y, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [E, [y, i + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [E, [y, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [E, [y, "watchOS"]], [/crkey\/([\d\.]+)/i], [E, [y, A + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[y, P], E], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [y, E], [/(sunos) ?([\w\.\d]*)/i], [[y, "Solaris"], E], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [y, E]] }, I = function(G, z) {
    if (typeof G === g && (z = G, G = t), !(this instanceof I))
      return new I(G, z).getResult();
    var $ = typeof e !== a && e.navigator ? e.navigator : t, eA = G || ($ && $.userAgent ? $.userAgent : ""), rA = $ && $.userAgentData ? $.userAgentData : t, Z = z ? function(q, lA) {
      var sA = {};
      for (var hA in q)
        lA[hA] && lA[hA].length % 2 == 0 ? sA[hA] = lA[hA].concat(q[hA]) : sA[hA] = q[hA];
      return sA;
    }(D, z) : D, nA = $ && $.userAgent == eA;
    return this.getBrowser = function() {
      var q = {};
      return q[y] = t, q[E] = t, M.call(q, eA, Z.browser), q[w] = function(lA) {
        return typeof lA === p ? lA.replace(/[^\d\.]/g, "").split(".")[0] : t;
      }(q[E]), nA && $ && $.brave && typeof $.brave.isBrave == r && (q[y] = "Brave"), q;
    }, this.getCPU = function() {
      var q = {};
      return q[S] = t, M.call(q, eA, Z.cpu), q;
    }, this.getDevice = function() {
      var q = {};
      return q[b] = t, q[C] = t, q[Q] = t, M.call(q, eA, Z.device), nA && !q[Q] && rA && rA.mobile && (q[Q] = H), nA && q[C] == "Macintosh" && $ && typeof $.standalone !== a && $.maxTouchPoints && $.maxTouchPoints > 2 && (q[C] = "iPad", q[Q] = j), q;
    }, this.getEngine = function() {
      var q = {};
      return q[y] = t, q[E] = t, M.call(q, eA, Z.engine), q;
    }, this.getOS = function() {
      var q = {};
      return q[y] = t, q[E] = t, M.call(q, eA, Z.os), nA && !q[y] && rA && rA.platform != "Unknown" && (q[y] = rA.platform.replace(/chrome os/i, P).replace(/macos/i, R)), q;
    }, this.getResult = function() {
      return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
    }, this.getUA = function() {
      return eA;
    }, this.setUA = function(q) {
      return eA = typeof q === p && q.length > 500 ? T(q, 500) : q, this;
    }, this.setUA(eA), this;
  };
  I.VERSION = "1.0.37", I.BROWSER = Y([y, E, w]), I.CPU = Y([S]), I.DEVICE = Y([C, b, Q, L, H, B, j, J, iA]), I.ENGINE = I.OS = Y([y, E]), pr.exports && (Br = pr.exports = I), Br.UAParser = I;
  var K = typeof e !== a && (e.jQuery || e.Zepto);
  if (K && !K.ua) {
    var W = new I();
    K.ua = W.getResult(), K.ua.get = function() {
      return W.getUA();
    }, K.ua.set = function(G) {
      W.setUA(G);
      var z = W.getResult();
      for (var $ in z)
        K.ua[$] = z[$];
    };
  }
}(typeof window == "object" ? window : Xa);
var nd = Xr.exports;
const $s = 5242880;
async function Ua() {
  var r, a, g, p, w;
  const e = new nd.UAParser(navigator.userAgent), t = await cd().then((C) => C);
  return { timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, issue_reported_time: pi((/* @__PURE__ */ new Date()).toString()), device: sd(), browser_name: ((r = e.getBrowser()) == null ? void 0 : r.name) ?? "", browser_version: ((a = e.getBrowser()) == null ? void 0 : a.version) ?? "", current_view: window.location.pathname, screen_height: Ao().height, screen_width: Ao().width, metadata_: Ht.metadata, sdk_version: xo, report_type: no.MANUAL, screen_density: window.devicePixelRatio || 1, locale: window.navigator.language || null, os_version: ((g = e.getOS()) == null ? void 0 : g.version) ?? "", os_name: ((p = e.getOS()) == null ? void 0 : p.name) ?? "", device_orientation: ad(), battery_level: t == null ? void 0 : t.level, battery_status: t != null && t.charging ? 1 : 0, font_scale: ld(), network_type: hd(), permissions: await fd().then((C) => C), browser_height: to().height, browser_width: to().width, cookies_enabled: ud(), is_mobile: dd(), cpu_arch: ((w = e.getCPU()) == null ? void 0 : w.architecture) ?? "", app_version: "1.0", log: await od(), tags: [], fullstory_session: pd() };
}
function sd() {
  const e = navigator.userAgent;
  return e.match(/Android/i) ? "Android Device" : e.match(/iPhone|iPad|iPod/i) ? "iOS Device" : e.match(/Windows Phone/i) ? "Windows Phone" : e.match(/Windows/i) ? "Windows PC" : e.match(/Macintosh|Mac OS/i) ? "Macintosh" : e.match(/Linux/i) ? "Linux PC" : null;
}
const od = async () => {
  const e = {};
  try {
    const t = [], r = [], a = [], g = [], p = [], w = [], C = await new Promise((b, E) => {
      const S = indexedDB.open(tt, 3), L = [];
      S.onerror = function() {
        E("Error opening database");
      }, S.onsuccess = function(H) {
        const j = H.target.result.transaction([Bt], "readonly").objectStore(Bt).openCursor();
        j.onsuccess = function(B) {
          const J = B.target.result;
          if (J) {
            switch (J.value.event_type) {
              case SA.CONSOLE_LOG:
                L.push({ message: J.value.message, timestamp: J.value.timestamp, event_type: J.value.event_type });
                break;
              case SA.CUSTOM_LOG:
                L.push({ message: J.value.message, level: J.value.level, timestamp: J.value.timestamp, event_type: J.value.event_type });
                break;
              case SA.NETWORK_REQUEST:
                L.push({ method: J.value.method, status_code: J.value.status_code, url: J.value.url, request_body: J.value.request_body, request_headers: J.value.request_headers, response_body: J.value.response_body, response_headers: J.value.response_headers, duration: J.value.duration, start: J.value.start, timestamp: J.value.timestamp, event_type: J.value.event_type });
                break;
              case SA.NOTIFICATION_EVENT:
                L.push({ title: J.value.title, description: J.value.description, timestamp: J.value.timestamp, event_type: J.value.event_type });
                break;
              case SA.SYSTEM_EVENT:
                L.push({ state: J.value.state, timestamp: J.value.timestamp, event_type: J.value.event_type });
                break;
              case SA.VIEW_CONTROLLER:
                L.push({ view_controller: J.value.view_controller, method: J.value.method, timestamp: J.value.timestamp, event_type: J.value.event_type });
                break;
              case SA.USER_ACTION:
                L.push({ class_name: J.value.class_name, property: J.value.property, touch_type: J.value.touch_type, property_type: J.value.property_type, timestamp: J.value.timestamp, event_type: J.value.event_type });
            }
            J.continue();
          } else
            L.sort((iA, cA) => iA.timestamp < cA.timestamp ? 1 : iA.timestamp == cA.timestamp ? 0 : -1), b(L);
        }, j.onerror = function() {
          E("Error retrieving activity history from IndexedDB");
        };
      }, S.onupgradeneeded = et;
    });
    let y = 0;
    const Q = new TextEncoder();
    C.forEach((b) => {
      const E = JSON.stringify(b), S = Q.encode(E).length;
      if (y += S, y < $s && S < $s)
        switch (b.event_type) {
          case SA.CONSOLE_LOG:
            t.push(b);
            break;
          case SA.CUSTOM_LOG:
            r.push(b);
            break;
          case SA.NETWORK_REQUEST:
            a.push(b);
            break;
          case SA.SYSTEM_EVENT:
            p.push(b);
            break;
          case SA.USER_ACTION:
            g.push(b);
            break;
          case SA.VIEW_CONTROLLER:
            w.push(b);
        }
    }), LA.report.isConsoleLogsEnabled && (e.console_log_events = t), LA.report.isCustomLogsEnabled && (e.custom_log_events = r), LA.report.isNetworkRequestsEnabled && (e.network_requests = a), LA.report.isUserActionsEnabled && (e.user_taps = g), LA.report.isSystemEventsEnabled && (e.system_events = p), LA.report.isScreenChangesEnabled && (e.view_controller_history = w);
  } catch (t) {
    An("Failed to read activity histroy. " + (t == null ? void 0 : t.message));
  }
  return e;
};
function Ao() {
  return { width: window.screen.width, height: window.screen.height };
}
function to() {
  return { width: window.innerWidth || document.documentElement.clientWidth, height: window.innerHeight || document.documentElement.clientHeight };
}
function ad() {
  const e = window.screen.orientation;
  return e ? e.type.toLocaleLowerCase().includes("landscape-primary") ? 0 : e.type.toLocaleLowerCase().includes("landscape-secondary") ? 180 : e.type.toLocaleLowerCase().includes("portrait-primary") ? 90 : e.type.toLocaleLowerCase().includes("portrait-secondary") ? 270 : null : null;
}
const cd = async () => {
  if (!("getBattery" in navigator))
    return null;
  try {
    return await navigator.getBattery();
  } catch (e) {
    return mt("Error getting battery status: " + (e == null ? void 0 : e.message)), null;
  }
}, ld = () => {
  const e = document.createElement("div");
  e.style.fontSize = "1rem", document.body.appendChild(e);
  const t = window.getComputedStyle(e), r = t.getPropertyValue("font-size") ? parseFloat(t.getPropertyValue("font-size")) : null;
  return document.body.removeChild(e), r;
}, hd = () => {
  const e = "onLine" in navigator && navigator.onLine || !1;
  return "connection" in navigator && e && navigator.connection.effectiveType || null;
}, ud = () => "cookieEnabled" in navigator && navigator.cookieEnabled || null, dd = () => {
  var e;
  return "userAgentData" in navigator ? (e = navigator.userAgentData) == null ? void 0 : e.mobile : null;
};
async function gd(e) {
  try {
    return await navigator.permissions.query({ name: e });
  } catch (t) {
    return mt("Error checking permission status: " + t.message), null;
  }
}
async function fd() {
  const e = [];
  for (const t of Da)
    try {
      const r = await gd(t);
      r && r.state && r.state === "granted" && e.push({ name: t, state: r.state });
    } catch (r) {
      mt("Error checking permission status: " + r.message);
    }
  return e;
}
function pd() {
  const e = localStorage.getItem("_fs_uid");
  if (e)
    return e;
  {
    const t = document.cookie.split("; ").find((r) => r.startsWith("fs_uid="));
    if (t)
      return t.split("=")[1];
  }
  return null;
}
const Bd = new ln(), Ea = async () => {
  const e = kA.localStorage;
  CA.shakeApiService.registerApp(), Cd();
  let t = await Uo();
  if (!t) {
    const w = await Bd.captureScreenshot(document.body);
    w && await gn(w), t = await Ua(), await (r = t, new Promise((C, y) => {
      const Q = indexedDB.open(tt, 3);
      Q.onerror = function() {
        y("Error opening database");
      }, Q.onsuccess = function(b) {
        const E = b.target.result.transaction([Mt], "readwrite").objectStore(Mt).put(r, 0);
        E.onsuccess = function() {
          C("State written successfully to IndexedDB");
        }, E.onerror = function() {
          y("Error writing state to IndexedDB");
        };
      }, Q.onupgradeneeded = et;
    }));
  }
  var r;
  const a = kA.localStorage.getShakeState(), g = await Le(), p = ba(a, g);
  document.body.appendChild(p), xa(), e.setShakeOpened(!0);
}, _a = "shake-sdk-main-button-root";
let $A;
const wd = () => {
  $A = Pt(), $A.classList.add("shake-sdk-main-button");
  const e = XA("data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14931_603)'%3e%3cpath%20d='M8.19434%2012.6212C10.9278%2015.3547%2014.6693%2016.0477%2016.5462%2014.1682C18.1282%2012.5862%2017.8823%209.68817%2016.1367%207.18042'%20stroke='%23B77DFF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.8599%204.82319C10.5725%202.29444%206.46177%201.97857%204.1719%204.26844C1.60902%206.83132%202.30202%2011.6788%205.7189%2015.0957C7.21501%2016.6164%209.06436%2017.7431%2011.1019%2018.3752'%20stroke='%23B77DFF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.8666%2010.8501L12.5002%2010.5228C12.7364%2010.4764%2012.9537%2010.3613%2013.1249%2010.1921L17.8954%205.42507C18.535%204.78514%2018.535%203.74801%2017.8954%203.10807C17.2555%202.46853%2016.2184%202.46853%2015.5784%203.10807L10.8079%207.87507C10.6374%208.04585%2010.5211%208.2632%2010.4737%208.49982L10.1499%2010.1334C10.0864%2010.4657%2010.3043%2010.7865%2010.6365%2010.8501C10.7125%2010.8646%2010.7906%2010.8646%2010.8666%2010.8501Z'%20stroke='%23880FFF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14931_603'%3e%3crect%20width='21'%20height='21'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  e.alt = "Send feedback icon", e.classList.add("shake-sdk-main-button-icon");
  const t = Qo(dA().shake_sdk_main_button_title);
  t.classList.add("shake-sdk-main-button-text"), $A.appendChild(e), $A.appendChild(t), $A.addEventListener("mousedown", (g) => {
    g.stopPropagation(), g.preventDefault(), Ea();
  });
  const r = document.createElement("div");
  r.id = _a;
  const a = r.attachShadow({ mode: "open" });
  return kt(a), a.appendChild($A), r;
}, md = () => {
  $A && ($A.style.transition = "transform 0.5s ease", $A.style.transform = "translateX(0) rotate(-90deg)");
}, Cd = () => {
  $A && ($A.style.transition = "transform 0.5s ease", $A.style.transform = "translateX(100px) rotate(-90deg)");
};
class vd {
  constructor() {
    AA(this, "_language", Bi.EN);
    AA(this, "_floatingButtonEnabled", !0);
  }
  get language() {
    return this._language;
  }
  set language(t) {
    this._language = t;
  }
  get floatingButtonEnabled() {
    return this._floatingButtonEnabled;
  }
  set floatingButtonEnabled(t) {
    this._floatingButtonEnabled = t, Wr();
  }
}
const Wr = () => {
  if (kA.localStorage.isSDKEnabled())
    if (LA.config.floatingButtonEnabled) {
      const e = wd();
      document.body.appendChild(e);
    } else {
      const e = document.getElementById(_a);
      e == null || e.remove();
    }
}, eo = () => {
  LA.report.isConsoleLogsEnabled && CA.consoleLogsTracker.start(), LA.report.isNetworkRequestsEnabled && CA.networkRequestsTracker.start(), LA.report.isScreenChangesEnabled && CA.screenChangeTracker.start(), LA.report.isSystemEventsEnabled && CA.systemEventTracker.start(), LA.report.isUserActionsEnabled && CA.userActionTracker.start();
}, io = 5120, yd = { takeScreenshot: !0, showSuccessMessage: !1 }, bd = (e) => {
  const t = [];
  return e && t.push({ type: wi.TITLE, value: e, label: "Title" }), t;
}, ro = () => {
  var e, t;
  e = "Escape", t = se, document.addEventListener("keydown", (r) => {
    r.key === e && t();
  });
}, OA = class OA {
  static async start(t, r) {
    if (this.localStorage.getShakeDeviceId() || this.localStorage.setShakeDeviceId(La()), !this.isLoading && !this.isStarted)
      if (this.isLoading = !0, t) {
        if (ie.apiKey = t, ie.appDomain = r, CA.shakeApiService.init(), this.localStorage.isSDKEnabled())
          return eo(), Wr(), ro(), this.isStarted = !0, void ls("Shake started.");
        await (async () => {
          kA.localStorage.isAppRegistered() || await CA.shakeApiService.registerApp();
        })(), this.localStorage.isSDKEnabled() && (eo(), Wr(), ro(), this.isStarted = !0, ls("Shake started.")), this.isLoading = !1;
      } else
        Ne("Cannot start Shake. Api key is empty.");
  }
};
AA(OA, "config", new vd()), AA(OA, "report", new Ht()), AA(OA, "localStorage", kA.localStorage), AA(OA, "isLoading", !1), AA(OA, "isStarted", !1), AA(OA, "show", async () => await OA.ifSDKEnabled(async () => {
  await Ea();
})), AA(OA, "silentReport", async (t, r) => await OA.ifSDKEnabled(async () => {
  await (async (a, g = yd) => {
    const p = CA.shakeApiService, w = [];
    if (g.takeScreenshot) {
      const y = await new ln().captureScreenshot(document.body);
      y && w.push({ data: y, type: yA.IMAGE, name: dn(yA.IMAGE, "jpg"), timestamp: (/* @__PURE__ */ new Date()).getTime() });
    }
    const C = await Ua();
    C.tags.push("silent"), C.custom_fields = bd(a), await p.sendUserFeedback(C, w), g.showSuccessMessage && br(!0);
  })(t, r);
})), AA(OA, "log", async (t, r) => await OA.ifSDKEnabled(async () => {
  await CA.customLogTracker.captureEvent(t, r);
})), AA(OA, "setMetadata", (t, r) => {
  ((a, g) => {
    if (Object.keys(Ht.metadata).length >= 100)
      return void Ne("Cannot set metadata. Limit of 100 items reached.");
    g.length > io && (Ne("Truncating metadata value. Value exceeded 5120 chars."), g = g.substring(0, io)), Ht.metadata[a] = g;
  })(t, r);
}), AA(OA, "removeMetadata", (t) => {
  ((r) => {
    delete Ht.metadata[r];
  })(t);
}), AA(OA, "clearMetadata", () => {
  Ht.metadata = {};
}), AA(OA, "ifSDKEnabled", async (t) => OA.localStorage.isSDKEnabled() ? (await t(), !0) : (Ne("Please call Shake.start(apiKey) before using Shake."), !1));
let Yr = OA;
const LA = Yr;
export {
  Bi as Language,
  Ia as LogLevel,
  LA as default
};
//# sourceMappingURL=browser.js.map
