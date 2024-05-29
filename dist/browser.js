var wa = Object.defineProperty;
var ma = (e, t, r) => t in e ? wa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var $ = (e, t, r) => (ma(e, typeof t != "symbol" ? t + "" : t, r), r);
import "./main.css";
var Ca = ((e) => (e.VERBOSE = "VERBOSE", e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARN = "WARN", e.ERROR = "ERROR", e))(Ca || {}), ai = ((e) => (e[e.EN = 0] = "EN", e))(ai || {});
class Jt {
}
$(Jt, "apiKey", ""), $(Jt, "appDomain", "");
let Te;
const va = new Uint8Array(16);
function ya() {
  if (!Te && (Te = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Te))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Te(va);
}
const DA = [];
for (let e = 0; e < 256; ++e)
  DA.push((e + 256).toString(16).slice(1));
const on = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
function ba(e, t, r) {
  if (on.randomUUID && !t && !e)
    return on.randomUUID();
  const c = (e = e || {}).random || (e.rng || ya)();
  return c[6] = 15 & c[6] | 64, c[8] = 63 & c[8] | 128, function(g, p = 0) {
    return DA[g[p + 0]] + DA[g[p + 1]] + DA[g[p + 2]] + DA[g[p + 3]] + "-" + DA[g[p + 4]] + DA[g[p + 5]] + "-" + DA[g[p + 6]] + DA[g[p + 7]] + "-" + DA[g[p + 8]] + DA[g[p + 9]] + "-" + DA[g[p + 10]] + DA[g[p + 11]] + DA[g[p + 12]] + DA[g[p + 13]] + DA[g[p + 14]] + DA[g[p + 15]];
  }(c);
}
const an = "shake.sdk.isAppRegistered", cn = "shake.sdk.isAppActive", ln = "shake.sdk.isShakeOpened", hn = "shake.sdk.shakeState", un = "shake.sdk.shakeDeviceId", dn = "shake.sdk.shakeChosenColor", gn = "shake.sdk.shakeChosenDrawingOption";
var we = ((e) => (e.SUGGESTION = "improvement", e.BUG = "bug", e.QUESTION = "question", e))(we || {}), Xs = ((e) => (e.MANUAL = "manual", e.AUTOMATIC = "automatic", e))(Xs || {}), ci = ((e) => (e.TITLE = "title", e.TEXT_INPUT = "text_input", e.EMAIL = "email", e.PICKER = "picker", e))(ci || {});
const Qa = ["geolocation", "camera", "microphone", "notifications", "persistent-storage", "screen-wake-lock"];
class Fa {
  constructor() {
    $(this, "ticket", null);
    $(this, "description", "");
    $(this, "feedbackType", we.BUG);
  }
}
class xa {
  constructor(t) {
    $(this, "storageProvider");
    $(this, "isSDKEnabled", () => this.isAppRegistered() && this.isAppActive());
    $(this, "isAppRegistered", () => this.storageProvider.getBoolean(an));
    $(this, "setAppRegistered", (t) => this.storageProvider.setBoolean(an, t));
    $(this, "isAppActive", () => this.storageProvider.getBoolean(cn));
    $(this, "setAppActive", (t) => this.storageProvider.setBoolean(cn, t));
    $(this, "isShakeOpened", () => this.storageProvider.getBoolean(ln) ?? !1);
    $(this, "setShakeOpened", (t) => this.storageProvider.setBoolean(ln, t));
    $(this, "getShakeState", () => this.storageProvider.getObject(hn) ?? new Fa());
    $(this, "setShakeState", (t) => this.storageProvider.setObject(hn, t));
    $(this, "getShakeDeviceId", () => this.storageProvider.getString(un));
    $(this, "setShakeDeviceId", (t) => this.storageProvider.setString(un, t));
    $(this, "getShakeChosenColor", () => this.storageProvider.getString(dn));
    $(this, "setShakeChosenColor", (t) => this.storageProvider.setString(dn, t));
    $(this, "getShakeChosenDrawingOption", () => this.storageProvider.getString(gn));
    $(this, "setShakeChosenDrawingOption", (t) => this.storageProvider.setString(gn, t));
    this.storageProvider = t;
  }
}
const ft = "shake_sdk", ut = "activity_history", At = "files", pt = (e) => {
  const t = e.target.result;
  e.oldVersion < 1 && t.createObjectStore(At, { keyPath: "name" }), e.oldVersion < 2 && t.createObjectStore(ut, { keyPath: "id", autoIncrement: !0 });
};
function Ui() {
  return new Promise((e, t) => {
    const r = indexedDB.open(ft, 2), c = [];
    r.onerror = function() {
      t("Error opening database");
    }, r.onsuccess = function(g) {
      const p = g.target.result.transaction([At], "readonly").objectStore(At).openCursor();
      p.onsuccess = function(w) {
        const C = w.target.result;
        C ? (c.push({ name: C.value.name, data: C.value.drawingData ? C.value.drawingData : C.value.data, type: C.value.type, timestamp: C.value.timestamp }), C.continue()) : (c.sort((b, Q) => b.timestamp == Q.timestamp ? 0 : b.timestamp > Q.timestamp ? 1 : -1), e(c));
      }, p.onerror = function() {
        t("Error retrieving files from IndexedDB");
      };
    }, r.onupgradeneeded = pt;
  });
}
const or = (e) => new Promise((t, r) => {
  const c = indexedDB.open(ft, 2);
  c.onerror = function() {
    r("Error opening database");
  }, c.onsuccess = function(g) {
    const p = g.target.result.transaction([At], "readwrite").objectStore(At).put(e);
    p.onsuccess = function() {
      t("File written successfully to IndexedDB");
    }, p.onerror = function() {
      r("Error writing file to IndexedDB");
    };
  }, c.onupgradeneeded = pt;
});
function Ws(e) {
  return new Promise((t, r) => {
    const c = indexedDB.open(ft, 2);
    c.onerror = function() {
      r("Error opening database");
    }, c.onsuccess = function(g) {
      const p = g.target.result.transaction([At], "readonly").objectStore(At).get(e);
      p.onsuccess = function(w) {
        const C = w.target.result;
        C ? t(C) : r("File not found in IndexedDB");
      }, p.onerror = function() {
        r("Error reading file from IndexedDB");
      };
    }, c.onupgradeneeded = pt;
  });
}
function fn(e) {
  return new Promise((t, r) => {
    const c = indexedDB.open(ft, 2);
    c.onerror = function() {
      r("Error opening database");
    }, c.onsuccess = function(g) {
      const p = g.target.result.transaction([At], "readwrite").objectStore(At).delete(e);
      p.onsuccess = function() {
        t("File deleted successfully from IndexedDB");
      }, p.onerror = function() {
        r("Error deleting file from IndexedDB");
      };
    }, c.onupgradeneeded = pt;
  });
}
class Ua {
  constructor() {
    $(this, "addObservers", []);
    $(this, "removeObservers", []);
    $(this, "updateObservers", []);
    $(this, "addAttachment", async (t) => {
      await or(t), this.notifyAdded(t);
    });
    $(this, "removeAttachment", async (t) => {
      await fn(t.name), this.notifyRemoved(t);
    });
    $(this, "updateAttachment", async (t) => {
      await fn(t.name), await or(t), this.notifyUpdated(t);
    });
    $(this, "notifyAdded", (t) => this.addObservers.forEach((r) => r(t)));
    $(this, "notifyRemoved", (t) => this.removeObservers.forEach((r) => r(t)));
    $(this, "notifyUpdated", (t) => this.updateObservers.forEach((r) => r(t)));
  }
}
var kA = ((e) => (e[e.CONSOLE_LOG = 0] = "CONSOLE_LOG", e[e.CUSTOM_LOG = 1] = "CUSTOM_LOG", e[e.NETWORK_REQUEST = 2] = "NETWORK_REQUEST", e[e.NOTIFICATION_EVENT = 3] = "NOTIFICATION_EVENT", e[e.VIEW_CONTROLLER = 4] = "VIEW_CONTROLLER", e[e.SYSTEM_EVENT = 5] = "SYSTEM_EVENT", e[e.USER_ACTION = 6] = "USER_ACTION", e))(kA || {});
function Ys() {
  return new Promise((e, t) => {
    const r = indexedDB.open(ft, 2), c = [];
    r.onerror = function() {
      t("Error opening database");
    }, r.onsuccess = function(g) {
      const p = g.target.result.transaction([ut], "readonly").objectStore(ut).openCursor();
      p.onsuccess = function(w) {
        const C = w.target.result;
        if (C) {
          switch (C.value.event_type) {
            case kA.CONSOLE_LOG:
              c.push({ message: C.value.message, timestamp: C.value.timestamp, event_type: C.value.event_type });
              break;
            case kA.CUSTOM_LOG:
              c.push({ message: C.value.message, level: C.value.level, timestamp: C.value.timestamp, event_type: C.value.event_type });
              break;
            case kA.NETWORK_REQUEST:
              c.push({ method: C.value.method, status_code: C.value.status_code, url: C.value.url, request_body: C.value.request_body, request_headers: C.value.request_headers, response_body: C.value.response_body, response_headers: C.value.response_headers, duration: C.value.duration, start: C.value.start, timestamp: C.value.timestamp, event_type: C.value.event_type });
              break;
            case kA.NOTIFICATION_EVENT:
              c.push({ title: C.value.title, description: C.value.description, timestamp: C.value.timestamp, event_type: C.value.event_type });
              break;
            case kA.SYSTEM_EVENT:
              c.push({ state: C.value.state, timestamp: C.value.timestamp, event_type: C.value.event_type });
              break;
            case kA.VIEW_CONTROLLER:
              c.push({ view_controller: C.value.view_controller, method: C.value.method, timestamp: C.value.timestamp, event_type: C.value.event_type });
              break;
            case kA.USER_ACTION:
              c.push({ class_name: C.value.class_name, property: C.value.property, touch_type: C.value.touch_type, property_type: C.value.property_type, timestamp: C.value.timestamp, event_type: C.value.event_type });
          }
          C.continue();
        } else
          c.sort((b, Q) => b.timestamp < Q.timestamp ? 1 : b.timestamp == Q.timestamp ? 0 : -1), e(c);
      }, p.onerror = function() {
        t("Error retrieving files from IndexedDB");
      };
    }, r.onupgradeneeded = pt;
  });
}
const Ae = async (e) => {
  await new Promise((g, p) => {
    const w = indexedDB.open(ft, 2);
    w.onerror = function() {
      p("Error opening database");
    }, w.onsuccess = function(C) {
      const b = C.target.result.transaction([ut], "readwrite").objectStore(ut).count();
      b.onsuccess = function() {
        g(b.result);
      }, b.onerror = function() {
        p("Error writing file to IndexedDB");
      };
    }, w.onupgradeneeded = pt;
  }) >= 1e3 && await (r = (await Ys())[999], new Promise((p, w) => {
    const C = indexedDB.open(ft, 2);
    C.onerror = function() {
      w("Error opening database");
    }, C.onsuccess = function(b) {
      const Q = b.target.result.transaction([ut], "readwrite").objectStore(ut), y = Q.openCursor();
      y.onsuccess = function(E) {
        const T = E.target.result;
        T ? (T.value.timestamp <= r.timestamp && Q.delete(T.primaryKey), T.continue()) : p("Items deleted from IndexedDB");
      }, y.onerror = function() {
        w("Error opening cursor");
      };
    }, C.onupgradeneeded = pt;
  }));
  var r, c;
  await (c = e, new Promise((g, p) => {
    const w = indexedDB.open(ft, 2);
    w.onerror = function() {
      p("Error opening database");
    }, w.onsuccess = function(C) {
      const b = C.target.result.transaction([ut], "readwrite").objectStore(ut).put(c);
      b.onsuccess = function() {
        g("File written successfully to IndexedDB");
      }, b.onerror = function() {
        p("Error writing file to IndexedDB");
      };
    }, w.onupgradeneeded = pt;
  }));
};
class Ea {
  constructor() {
    $(this, "funcLog", console.log);
    $(this, "funcError", console.error);
    $(this, "funcInfo", console.info);
    $(this, "funcDebug", console.debug);
    $(this, "start", () => {
      console.log = (t) => {
        this.captureEvent(t), this.funcLog(t);
      }, console.error = (t) => {
        this.captureEvent(t), this.funcError(t);
      }, console.info = (t) => {
        this.captureEvent(t), this.funcInfo(t);
      }, console.debug = (t) => {
        this.captureEvent(t), this.funcDebug(t);
      };
    });
    $(this, "stop", () => {
      console.log = this.funcLog, console.error = this.funcError, console.info = this.funcInfo, console.debug = this.funcDebug;
    });
    $(this, "captureEvent", (t) => {
      if (!LA.report.isConsoleLogsEnabled)
        return;
      const r = typeof t == "object" ? JSON.stringify(t) : String(t), c = { timestamp: (/* @__PURE__ */ new Date()).toISOString(), message: r, event_type: kA.CONSOLE_LOG };
      Ae(c);
    });
  }
}
class _a {
  constructor() {
    $(this, "captureEvent", async (t, r) => {
      if (!LA.report.isCustomLogsEnabled)
        return;
      const c = { timestamp: (/* @__PURE__ */ new Date()).toISOString(), level: t, message: r.toString(), event_type: kA.CUSTOM_LOG };
      await Ae(c);
    });
  }
}
const dt = window.XMLHttpRequest, pn = dt.prototype.open, Bn = dt.prototype.send, wn = dt.prototype.setRequestHeader;
let Ri, re, _t = !1;
const Ki = { setOnRequestDone(e) {
  Ri = e;
}, enableInterceptor() {
  dt.prototype.open = function(e, t) {
    re = { event_type: kA.NETWORK_REQUEST, url: "", method: "", request_body: "", response_body: "", request_headers: {}, response_headers: {}, status_code: "", timestamp: "", start: 0, duration: 0 }, re.url = t.toString(), re.method = e, pn.call(this, e, t);
  }, dt.prototype.setRequestHeader = function(e, t) {
    re.request_headers[e] = String(t), wn.call(this, e, t);
  }, dt.prototype.send = function(e) {
    let t;
    t = typeof e != "string" ? e ? JSON.stringify(e) : "" : e, mn(t) && (t = "Binary data");
    const r = /* @__PURE__ */ new Date();
    let c = r.toISOString();
    c = c.replace("Z", "000+0000");
    const g = JSON.parse(JSON.stringify(re));
    g.start = r.getTime(), g.timestamp = c, g.request_body = t || "", this.addEventListener && (this.addEventListener("readystatechange", async () => {
      _t && this.readyState === this.HEADERS_RECEIVED && this.getAllResponseHeaders() && (g.response_headers = Sa(this.getAllResponseHeaders()));
    }, !1), this.addEventListener("load", async () => {
      if (!_t)
        return;
      let w = await new Response(this.response).text();
      (w === void 0 || mn(w)) && (w = "Binary data"), g.duration = Date.now() - g.start, g.response_body = w || "", g.status_code = this.status ? this.status.toString() : "n/a", p(g);
    }, !1), this.addEventListener("error", () => {
      _t && (g.duration = Date.now() - g.start, g.response_body = "Request error.", g.status_code = "err", p(g));
    }, !1), this.addEventListener("abort", () => {
      _t && (g.duration = Date.now() - g.start, g.response_body = "Request aborted.", g.status_code = "err", p(g));
    }, !1), this.addEventListener("timeout", () => {
      _t && (g.duration = Date.now() - g.start, g.response_body = "Request timeout.", g.status_code = "t/o", p(g));
    }, !1));
    const p = (w) => {
      w.method || (w.method = ""), w.status_code || (w.status_code = ""), w.url && ka(w.url) || (w.url = "https://not_a_valid_url"), Ri && Ri(w);
    };
    Bn.call(this, e);
  }, _t = !0;
}, disableInterceptor() {
  _t = !1, dt.prototype.send = Bn, dt.prototype.open = pn, dt.prototype.setRequestHeader = wn;
} }, Sa = (e) => {
  const t = {};
  try {
    e && e.split(`\r
`).forEach((r) => {
      const c = r.split(/:(.+)/), g = String(c == null ? void 0 : c[0]), p = String(c == null ? void 0 : c[1]);
      t[g] = p;
    });
  } catch {
  }
  return t;
}, mn = (e) => /\ufffd/.test(e), ka = (e) => e != null && (e.startsWith("http://") || e.startsWith("https://"));
class Ta {
  constructor() {
    $(this, "start", () => {
      Ki.enableInterceptor();
    });
    $(this, "stop", () => {
      Ki.disableInterceptor();
    });
    $(this, "captureEvent", (t) => {
      LA.report.isNetworkRequestsEnabled && Ae(t);
    });
    Ki.setOnRequestDone(this.captureEvent);
  }
}
var Ia = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ha(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Oa(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function c() {
      return this instanceof c ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(c) {
    var g = Object.getOwnPropertyDescriptor(e, c);
    Object.defineProperty(r, c, g.get ? g : { enumerable: !0, get: function() {
      return e[c];
    } });
  }), r;
}
var zs, ar = { exports: {} }, Yt = typeof Reflect == "object" ? Reflect : null, Cn = Yt && typeof Yt.apply == "function" ? Yt.apply : function(e, t, r) {
  return Function.prototype.apply.call(e, t, r);
};
zs = Yt && typeof Yt.ownKeys == "function" ? Yt.ownKeys : Object.getOwnPropertySymbols ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : function(e) {
  return Object.getOwnPropertyNames(e);
};
var vn = Number.isNaN || function(e) {
  return e != e;
};
function mA() {
  mA.init.call(this);
}
ar.exports = mA, ar.exports.once = function(e, t) {
  return new Promise(function(r, c) {
    function g(w) {
      e.removeListener(t, p), c(w);
    }
    function p() {
      typeof e.removeListener == "function" && e.removeListener("error", g), r([].slice.call(arguments));
    }
    Un(e, t, p, { once: !0 }), t !== "error" && function(w, C, b) {
      typeof w.on == "function" && Un(w, "error", C, b);
    }(e, g, { once: !0 });
  });
}, mA.EventEmitter = mA, mA.prototype._events = void 0, mA.prototype._eventsCount = 0, mA.prototype._maxListeners = void 0;
var yn = 10;
function ei(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
function Js(e) {
  return e._maxListeners === void 0 ? mA.defaultMaxListeners : e._maxListeners;
}
function bn(e, t, r, c) {
  var g, p, w, C;
  if (ei(r), (p = e._events) === void 0 ? (p = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (p.newListener !== void 0 && (e.emit("newListener", t, r.listener ? r.listener : r), p = e._events), w = p[t]), w === void 0)
    w = p[t] = r, ++e._eventsCount;
  else if (typeof w == "function" ? w = p[t] = c ? [r, w] : [w, r] : c ? w.unshift(r) : w.push(r), (g = Js(e)) > 0 && w.length > g && !w.warned) {
    w.warned = !0;
    var b = new Error("Possible EventEmitter memory leak detected. " + w.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    b.name = "MaxListenersExceededWarning", b.emitter = e, b.type = t, b.count = w.length, C = b, console && console.warn && console.warn(C);
  }
  return e;
}
function La() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Qn(e, t, r) {
  var c = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r }, g = La.bind(c);
  return g.listener = r, c.wrapFn = g, g;
}
function Fn(e, t, r) {
  var c = e._events;
  if (c === void 0)
    return [];
  var g = c[t];
  return g === void 0 ? [] : typeof g == "function" ? r ? [g.listener || g] : [g] : r ? function(p) {
    for (var w = new Array(p.length), C = 0; C < w.length; ++C)
      w[C] = p[C].listener || p[C];
    return w;
  }(g) : qs(g, g.length);
}
function xn(e) {
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
function qs(e, t) {
  for (var r = new Array(t), c = 0; c < t; ++c)
    r[c] = e[c];
  return r;
}
function Un(e, t, r, c) {
  if (typeof e.on == "function")
    c.once ? e.once(t, r) : e.on(t, r);
  else {
    if (typeof e.addEventListener != "function")
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
    e.addEventListener(t, function g(p) {
      c.once && e.removeEventListener(t, g), r(p);
    });
  }
}
Object.defineProperty(mA, "defaultMaxListeners", { enumerable: !0, get: function() {
  return yn;
}, set: function(e) {
  if (typeof e != "number" || e < 0 || vn(e))
    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
  yn = e;
} }), mA.init = function() {
  this._events !== void 0 && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
}, mA.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || vn(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
}, mA.prototype.getMaxListeners = function() {
  return Js(this);
}, mA.prototype.emit = function(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t.push(arguments[r]);
  var c = e === "error", g = this._events;
  if (g !== void 0)
    c = c && g.error === void 0;
  else if (!c)
    return !1;
  if (c) {
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
    Cn(C, this, t);
  else {
    var b = C.length, Q = qs(C, b);
    for (r = 0; r < b; ++r)
      Cn(Q[r], this, t);
  }
  return !0;
}, mA.prototype.addListener = function(e, t) {
  return bn(this, e, t, !1);
}, mA.prototype.on = mA.prototype.addListener, mA.prototype.prependListener = function(e, t) {
  return bn(this, e, t, !0);
}, mA.prototype.once = function(e, t) {
  return ei(t), this.on(e, Qn(this, e, t)), this;
}, mA.prototype.prependOnceListener = function(e, t) {
  return ei(t), this.prependListener(e, Qn(this, e, t)), this;
}, mA.prototype.removeListener = function(e, t) {
  var r, c, g, p, w;
  if (ei(t), (c = this._events) === void 0)
    return this;
  if ((r = c[e]) === void 0)
    return this;
  if (r === t || r.listener === t)
    --this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete c[e], c.removeListener && this.emit("removeListener", e, r.listener || t));
  else if (typeof r != "function") {
    for (g = -1, p = r.length - 1; p >= 0; p--)
      if (r[p] === t || r[p].listener === t) {
        w = r[p].listener, g = p;
        break;
      }
    if (g < 0)
      return this;
    g === 0 ? r.shift() : function(C, b) {
      for (; b + 1 < C.length; b++)
        C[b] = C[b + 1];
      C.pop();
    }(r, g), r.length === 1 && (c[e] = r[0]), c.removeListener !== void 0 && this.emit("removeListener", e, w || t);
  }
  return this;
}, mA.prototype.off = mA.prototype.removeListener, mA.prototype.removeAllListeners = function(e) {
  var t, r, c;
  if ((r = this._events) === void 0)
    return this;
  if (r.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : r[e] !== void 0 && (--this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete r[e]), this;
  if (arguments.length === 0) {
    var g, p = Object.keys(r);
    for (c = 0; c < p.length; ++c)
      (g = p[c]) !== "removeListener" && this.removeAllListeners(g);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (typeof (t = r[e]) == "function")
    this.removeListener(e, t);
  else if (t !== void 0)
    for (c = t.length - 1; c >= 0; c--)
      this.removeListener(e, t[c]);
  return this;
}, mA.prototype.listeners = function(e) {
  return Fn(this, e, !0);
}, mA.prototype.rawListeners = function(e) {
  return Fn(this, e, !1);
}, mA.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : xn.call(e, t);
}, mA.prototype.listenerCount = xn, mA.prototype.eventNames = function() {
  return this._eventsCount > 0 ? zs(this._events) : [];
};
const Da = Ha(ar.exports), Zs = new class extends Da {
}();
let En;
setInterval(() => {
  let e = window.location.href;
  e != En && (Zs.emit("change", e), En = e);
}, 60);
var _n = Zs;
class Ma {
  constructor() {
    $(this, "listener", (t) => {
      this.captureEvent(t);
    });
    $(this, "start", () => {
      _n.on("change", this.listener);
    });
    $(this, "stop", () => {
      _n.off("change", this.listener);
    });
    $(this, "captureEvent", (t) => {
      if (!LA.report.isScreenChangesEnabled)
        return;
      const r = { timestamp: (/* @__PURE__ */ new Date()).toISOString(), view_controller: t, method: "onStart", event_type: kA.VIEW_CONTROLLER };
      Ae(r);
    });
  }
}
var cr = ((e) => (e.TAB_VISIBLE = "onResume", e.TAB_HIDDEN = "onPause", e.APP_START = "onCreate", e))(cr || {});
class Pa {
  constructor() {
    $(this, "listener", () => {
      document.visibilityState === "hidden" && this.captureEvent(cr.TAB_HIDDEN), document.visibilityState === "visible" && this.captureEvent(cr.TAB_VISIBLE);
    });
    $(this, "start", () => {
      document.addEventListener("visibilitychange", this.listener);
    });
    $(this, "stop", () => {
      document.removeEventListener("visibilitychange", this.listener);
    });
    $(this, "captureEvent", (t) => {
      if (!LA.report.isSystemEventsEnabled)
        return;
      const r = { timestamp: (/* @__PURE__ */ new Date()).toISOString(), state: t, event_type: kA.SYSTEM_EVENT };
      Ae(r);
    });
  }
}
var $s = ((e) => (e.TAP = "Tap", e))($s || {});
class Ra {
  constructor() {
    $(this, "listener", (t) => {
      const r = Ka(t);
      r && this.captureEvent(r.tag, r.property, r.propertyType);
    });
    $(this, "start", () => {
      document.addEventListener("click", this.listener);
    });
    $(this, "stop", () => {
      document.removeEventListener("click", this.listener);
    });
    $(this, "captureEvent", (t, r, c) => {
      if (!LA.report.isUserActionsEnabled)
        return;
      const g = { timestamp: (/* @__PURE__ */ new Date()).toISOString(), class_name: t ?? "", property: r ?? "", property_type: c ?? "", touch_type: $s.TAP, event_type: kA.USER_ACTION };
      Ae(g);
    });
  }
}
const Ka = (e) => {
  const t = { tag: "", property: "", propertyType: "" };
  if (e.target instanceof Element) {
    t.tag = e.target.tagName.toLowerCase();
    const r = e.target.id ?? "", c = e.target.className ?? "", g = e.target.ariaLabel ?? e.target.getAttribute("alt") ?? "";
    let p = "";
    ["p", "pre", "q", "h1", "h2", "button", "a", "span", "li"].includes(t.tag) && (p = e.target.textContent ?? ""), p ? (t.property = p, t.propertyType = "Text") : g ? (t.property = g, t.propertyType = "ContentDescription") : r ? (t.property = r, t.propertyType = "Id") : c && (t.property = c, t.propertyType = "Id");
  }
  return t;
};
function Ao(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ja } = Object.prototype, { getPrototypeOf: Vr } = Object, li = (ji = /* @__PURE__ */ Object.create(null), (e) => {
  const t = ja.call(e);
  return ji[t] || (ji[t] = t.slice(8, -1).toLowerCase());
});
var ji;
const st = (e) => (e = e.toLowerCase(), (t) => li(t) === e), Ei = (e) => (t) => typeof t === e, { isArray: Vt } = Array, ce = Ei("undefined"), Sn = st("ArrayBuffer"), Va = Ei("string"), WA = Ei("function"), kn = Ei("number"), Ie = (e) => e !== null && typeof e == "object", He = (e) => {
  if (li(e) !== "object")
    return !1;
  const t = Vr(e);
  return !(t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.toStringTag in e || Symbol.iterator in e);
}, Ga = st("Date"), Na = st("File"), Xa = st("Blob"), Wa = st("FileList"), Ya = st("URLSearchParams");
function le(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e == null)
    return;
  let c, g;
  if (typeof e != "object" && (e = [e]), Vt(e))
    for (c = 0, g = e.length; c < g; c++)
      t.call(null, e[c], c, e);
  else {
    const p = r ? Object.getOwnPropertyNames(e) : Object.keys(e), w = p.length;
    let C;
    for (c = 0; c < w; c++)
      C = p[c], t.call(null, e[C], C, e);
  }
}
function Tn(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let c, g = r.length;
  for (; g-- > 0; )
    if (c = r[g], t === c.toLowerCase())
      return c;
  return null;
}
const to = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, In = (e) => !ce(e) && e !== to, za = (Vi = typeof Uint8Array < "u" && Vr(Uint8Array), (e) => Vi && e instanceof Vi);
var Vi;
const Ja = st("HTMLFormElement"), Hn = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), qa = st("RegExp"), On = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), c = {};
  le(r, (g, p) => {
    let w;
    (w = t(g, p, e)) !== !1 && (c[p] = w || g);
  }), Object.defineProperties(e, c);
}, Gi = "abcdefghijklmnopqrstuvwxyz", Ln = "0123456789", Dn = { DIGIT: Ln, ALPHA: Gi, ALPHA_DIGIT: Gi + Gi.toUpperCase() + Ln }, Za = st("AsyncFunction"), AA = { isArray: Vt, isArrayBuffer: Sn, isBuffer: function(e) {
  return e !== null && !ce(e) && e.constructor !== null && !ce(e.constructor) && WA(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}, isFormData: (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || WA(e.append) && ((t = li(e)) === "formdata" || t === "object" && WA(e.toString) && e.toString() === "[object FormData]"));
}, isArrayBufferView: function(e) {
  let t;
  return t = typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && Sn(e.buffer), t;
}, isString: Va, isNumber: kn, isBoolean: (e) => e === !0 || e === !1, isObject: Ie, isPlainObject: He, isUndefined: ce, isDate: Ga, isFile: Na, isBlob: Xa, isRegExp: qa, isFunction: WA, isStream: (e) => Ie(e) && WA(e.pipe), isURLSearchParams: Ya, isTypedArray: za, isFileList: Wa, forEach: le, merge: function e() {
  const { caseless: t } = In(this) && this || {}, r = {}, c = (g, p) => {
    const w = t && Tn(r, p) || p;
    He(r[w]) && He(g) ? r[w] = e(r[w], g) : He(g) ? r[w] = e({}, g) : Vt(g) ? r[w] = g.slice() : r[w] = g;
  };
  for (let g = 0, p = arguments.length; g < p; g++)
    arguments[g] && le(arguments[g], c);
  return r;
}, extend: (e, t, r, { allOwnKeys: c } = {}) => (le(t, (g, p) => {
  r && WA(g) ? e[p] = Ao(g, r) : e[p] = g;
}, { allOwnKeys: c }), e), trim: (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), stripBOM: (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), inherits: (e, t, r, c) => {
  e.prototype = Object.create(t.prototype, c), e.prototype.constructor = e, Object.defineProperty(e, "super", { value: t.prototype }), r && Object.assign(e.prototype, r);
}, toFlatObject: (e, t, r, c) => {
  let g, p, w;
  const C = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (g = Object.getOwnPropertyNames(e), p = g.length; p-- > 0; )
      w = g[p], c && !c(w, e, t) || C[w] || (t[w] = e[w], C[w] = !0);
    e = r !== !1 && Vr(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, kindOf: li, kindOfTest: st, endsWith: (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const c = e.indexOf(t, r);
  return c !== -1 && c === r;
}, toArray: (e) => {
  if (!e)
    return null;
  if (Vt(e))
    return e;
  let t = e.length;
  if (!kn(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, forEachEntry: (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let c;
  for (; (c = r.next()) && !c.done; ) {
    const g = c.value;
    t.call(e, g[0], g[1]);
  }
}, matchAll: (e, t) => {
  let r;
  const c = [];
  for (; (r = e.exec(t)) !== null; )
    c.push(r);
  return c;
}, isHTMLForm: Ja, hasOwnProperty: Hn, hasOwnProp: Hn, reduceDescriptors: On, freezeMethods: (e) => {
  On(e, (t, r) => {
    if (WA(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const c = e[r];
    WA(c) && (t.enumerable = !1, "writable" in t ? t.writable = !1 : t.set || (t.set = () => {
      throw Error("Can not rewrite read-only method '" + r + "'");
    }));
  });
}, toObjectSet: (e, t) => {
  const r = {}, c = (g) => {
    g.forEach((p) => {
      r[p] = !0;
    });
  };
  return Vt(e) ? c(e) : c(String(e).split(t)), r;
}, toCamelCase: (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(t, r, c) {
  return r.toUpperCase() + c;
}), noop: () => {
}, toFiniteNumber: (e, t) => (e = +e, Number.isFinite(e) ? e : t), findKey: Tn, global: to, isContextDefined: In, ALPHABET: Dn, generateString: (e = 16, t = Dn.ALPHA_DIGIT) => {
  let r = "";
  const { length: c } = t;
  for (; e--; )
    r += t[Math.random() * c | 0];
  return r;
}, isSpecCompliantForm: function(e) {
  return !!(e && WA(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}, toJSONObject: (e) => {
  const t = new Array(10), r = (c, g) => {
    if (Ie(c)) {
      if (t.indexOf(c) >= 0)
        return;
      if (!("toJSON" in c)) {
        t[g] = c;
        const p = Vt(c) ? [] : {};
        return le(c, (w, C) => {
          const b = r(w, g + 1);
          !ce(b) && (p[C] = b);
        }), t[g] = void 0, p;
      }
    }
    return c;
  };
  return r(e, 0);
}, isAsyncFn: Za, isThenable: (e) => e && (Ie(e) || WA(e)) && WA(e.then) && WA(e.catch) };
function fA(e, t, r, c, g) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), c && (this.request = c), g && (this.response = g);
}
AA.inherits(fA, Error, { toJSON: function() {
  return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: AA.toJSONObject(this.config), code: this.code, status: this.response && this.response.status ? this.response.status : null };
} });
const Mn = fA.prototype, Pn = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e) => {
  Pn[e] = { value: e };
}), Object.defineProperties(fA, Pn), Object.defineProperty(Mn, "isAxiosError", { value: !0 }), fA.from = (e, t, r, c, g, p) => {
  const w = Object.create(Mn);
  return AA.toFlatObject(e, w, function(C) {
    return C !== Error.prototype;
  }, (C) => C !== "isAxiosError"), fA.call(w, e.message, t, r, c, g), w.cause = e, w.name = e.name, p && Object.assign(w, p), w;
};
function Ni(e) {
  return AA.isPlainObject(e) || AA.isArray(e);
}
function eo(e) {
  return AA.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Rn(e, t, r) {
  return e ? e.concat(t).map(function(c, g) {
    return c = eo(c), !r && g ? "[" + c + "]" : c;
  }).join(r ? "." : "") : t;
}
const $a = AA.toFlatObject(AA, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function hi(e, t, r) {
  if (!AA.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData();
  const c = (r = AA.toFlatObject(r, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function(T, P) {
    return !AA.isUndefined(P[T]);
  })).metaTokens, g = r.visitor || Q, p = r.dots, w = r.indexes, C = (r.Blob || typeof Blob < "u" && Blob) && AA.isSpecCompliantForm(t);
  if (!AA.isFunction(g))
    throw new TypeError("visitor must be a function");
  function b(T) {
    if (T === null)
      return "";
    if (AA.isDate(T))
      return T.toISOString();
    if (!C && AA.isBlob(T))
      throw new fA("Blob is not supported. Use a Buffer instead.");
    return AA.isArrayBuffer(T) || AA.isTypedArray(T) ? C && typeof Blob == "function" ? new Blob([T]) : Buffer.from(T) : T;
  }
  function Q(T, P, O) {
    let K = T;
    if (T && !O && typeof T == "object") {
      if (AA.endsWith(P, "{}"))
        P = c ? P : P.slice(0, -2), T = JSON.stringify(T);
      else if (AA.isArray(T) && function(B) {
        return AA.isArray(B) && !B.some(Ni);
      }(T) || (AA.isFileList(T) || AA.endsWith(P, "[]")) && (K = AA.toArray(T)))
        return P = eo(P), K.forEach(function(B, tA) {
          !AA.isUndefined(B) && B !== null && t.append(w === !0 ? Rn([P], tA, p) : w === null ? P : P + "[]", b(B));
        }), !1;
    }
    return !!Ni(T) || (t.append(Rn(O, P, p), b(T)), !1);
  }
  const y = [], E = Object.assign($a, { defaultVisitor: Q, convertValue: b, isVisitable: Ni });
  if (!AA.isObject(e))
    throw new TypeError("data must be an object");
  return function T(P, O) {
    if (!AA.isUndefined(P)) {
      if (y.indexOf(P) !== -1)
        throw Error("Circular reference detected in " + O.join("."));
      y.push(P), AA.forEach(P, function(K, B) {
        (!(AA.isUndefined(K) || K === null) && g.call(t, K, AA.isString(B) ? B.trim() : B, O, E)) === !0 && T(K, O ? O.concat(B) : [B]);
      }), y.pop();
    }
  }(e), t;
}
function Kn(e) {
  const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Gr(e, t) {
  this._pairs = [], e && hi(e, this, t);
}
const jn = Gr.prototype;
function Ac(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function io(e, t, r) {
  if (!t)
    return e;
  const c = r && r.encode || Ac, g = r && r.serialize;
  let p;
  if (p = g ? g(t, r) : AA.isURLSearchParams(t) ? t.toString() : new Gr(t, r).toString(c), p) {
    const w = e.indexOf("#");
    w !== -1 && (e = e.slice(0, w)), e += (e.indexOf("?") === -1 ? "?" : "&") + p;
  }
  return e;
}
jn.append = function(e, t) {
  this._pairs.push([e, t]);
}, jn.toString = function(e) {
  const t = e ? function(r) {
    return e.call(this, r, Kn);
  } : Kn;
  return this._pairs.map(function(r) {
    return t(r[0]) + "=" + t(r[1]);
  }, "").join("&");
};
class Vn {
  constructor() {
    this.handlers = [];
  }
  use(t, r, c) {
    return this.handlers.push({ fulfilled: t, rejected: r, synchronous: !!c && c.synchronous, runWhen: c ? c.runWhen : null }), this.handlers.length - 1;
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    AA.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const ro = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 }, tc = { isBrowser: !0, classes: { URLSearchParams: typeof URLSearchParams < "u" ? URLSearchParams : Gr, FormData: typeof FormData < "u" ? FormData : null, Blob: typeof Blob < "u" ? Blob : null }, protocols: ["http", "https", "file", "blob", "url", "data"] }, no = typeof window < "u" && typeof document < "u", ec = (Gn = typeof navigator < "u" && navigator.product, no && ["ReactNative", "NativeScript", "NS"].indexOf(Gn) < 0);
var Gn;
const ic = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", rt = { ...Object.freeze(Object.defineProperty({ __proto__: null, hasBrowserEnv: no, hasStandardBrowserEnv: ec, hasStandardBrowserWebWorkerEnv: ic }, Symbol.toStringTag, { value: "Module" })), ...tc };
function so(e) {
  function t(r, c, g, p) {
    let w = r[p++];
    if (w === "__proto__")
      return !0;
    const C = Number.isFinite(+w), b = p >= r.length;
    return w = !w && AA.isArray(g) ? g.length : w, b ? (AA.hasOwnProp(g, w) ? g[w] = [g[w], c] : g[w] = c, !C) : (g[w] && AA.isObject(g[w]) || (g[w] = []), t(r, c, g[w], p) && AA.isArray(g[w]) && (g[w] = function(Q) {
      const y = {}, E = Object.keys(Q);
      let T;
      const P = E.length;
      let O;
      for (T = 0; T < P; T++)
        O = E[T], y[O] = Q[O];
      return y;
    }(g[w])), !C);
  }
  if (AA.isFormData(e) && AA.isFunction(e.entries)) {
    const r = {};
    return AA.forEachEntry(e, (c, g) => {
      t(function(p) {
        return AA.matchAll(/\w+|\[(\w*)]/g, p).map((w) => w[0] === "[]" ? "" : w[1] || w[0]);
      }(c), g, r, 0);
    }), r;
  }
  return null;
}
const _e = { transitional: ro, adapter: ["xhr", "http"], transformRequest: [function(e, t) {
  const r = t.getContentType() || "", c = r.indexOf("application/json") > -1, g = AA.isObject(e);
  if (g && AA.isHTMLForm(e) && (e = new FormData(e)), AA.isFormData(e))
    return c ? JSON.stringify(so(e)) : e;
  if (AA.isArrayBuffer(e) || AA.isBuffer(e) || AA.isStream(e) || AA.isFile(e) || AA.isBlob(e))
    return e;
  if (AA.isArrayBufferView(e))
    return e.buffer;
  if (AA.isURLSearchParams(e))
    return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
  let p;
  if (g) {
    if (r.indexOf("application/x-www-form-urlencoded") > -1)
      return function(w, C) {
        return hi(w, new rt.classes.URLSearchParams(), Object.assign({ visitor: function(b, Q, y, E) {
          return rt.isNode && AA.isBuffer(b) ? (this.append(Q, b.toString("base64")), !1) : E.defaultVisitor.apply(this, arguments);
        } }, C));
      }(e, this.formSerializer).toString();
    if ((p = AA.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
      const w = this.env && this.env.FormData;
      return hi(p ? { "files[]": e } : e, w && new w(), this.formSerializer);
    }
  }
  return g || c ? (t.setContentType("application/json", !1), function(w, C, b) {
    if (AA.isString(w))
      try {
        return (C || JSON.parse)(w), AA.trim(w);
      } catch (Q) {
        if (Q.name !== "SyntaxError")
          throw Q;
      }
    return (b || JSON.stringify)(w);
  }(e)) : e;
}], transformResponse: [function(e) {
  const t = this.transitional || _e.transitional, r = t && t.forcedJSONParsing, c = this.responseType === "json";
  if (e && AA.isString(e) && (r && !this.responseType || c)) {
    const g = !(t && t.silentJSONParsing) && c;
    try {
      return JSON.parse(e);
    } catch (p) {
      if (g)
        throw p.name === "SyntaxError" ? fA.from(p, fA.ERR_BAD_RESPONSE, this, null, this.response) : p;
    }
  }
  return e;
}], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: rt.classes.FormData, Blob: rt.classes.Blob }, validateStatus: function(e) {
  return e >= 200 && e < 300;
}, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
AA.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  _e.headers[e] = {};
});
const rc = AA.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]), Nn = Symbol("internals");
function ne(e) {
  return e && String(e).trim().toLowerCase();
}
function ii(e) {
  return e === !1 || e == null ? e : AA.isArray(e) ? e.map(ii) : String(e);
}
function Xi(e, t, r, c, g) {
  return AA.isFunction(c) ? c.call(this, t, r) : (g && (t = r), AA.isString(t) ? AA.isString(c) ? t.indexOf(c) !== -1 : AA.isRegExp(c) ? c.test(t) : void 0 : void 0);
}
class ZA {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, c) {
    const g = this;
    function p(C, b, Q) {
      const y = ne(b);
      if (!y)
        throw new Error("header name must be a non-empty string");
      const E = AA.findKey(g, y);
      (!E || g[E] === void 0 || Q === !0 || Q === void 0 && g[E] !== !1) && (g[E || b] = ii(C));
    }
    const w = (C, b) => AA.forEach(C, (Q, y) => p(Q, y, b));
    return AA.isPlainObject(t) || t instanceof this.constructor ? w(t, r) : AA.isString(t) && (t = t.trim()) && !((C) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(C.trim()))(t) ? w(((C) => {
      const b = {};
      let Q, y, E;
      return C && C.split(`
`).forEach(function(T) {
        E = T.indexOf(":"), Q = T.substring(0, E).trim().toLowerCase(), y = T.substring(E + 1).trim(), !Q || b[Q] && rc[Q] || (Q === "set-cookie" ? b[Q] ? b[Q].push(y) : b[Q] = [y] : b[Q] = b[Q] ? b[Q] + ", " + y : y);
      }), b;
    })(t), r) : t != null && p(r, t, c), this;
  }
  get(t, r) {
    if (t = ne(t)) {
      const c = AA.findKey(this, t);
      if (c) {
        const g = this[c];
        if (!r)
          return g;
        if (r === !0)
          return function(p) {
            const w = /* @__PURE__ */ Object.create(null), C = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
            let b;
            for (; b = C.exec(p); )
              w[b[1]] = b[2];
            return w;
          }(g);
        if (AA.isFunction(r))
          return r.call(this, g, c);
        if (AA.isRegExp(r))
          return r.exec(g);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = ne(t)) {
      const c = AA.findKey(this, t);
      return !(!c || this[c] === void 0 || r && !Xi(0, this[c], c, r));
    }
    return !1;
  }
  delete(t, r) {
    const c = this;
    let g = !1;
    function p(w) {
      if (w = ne(w)) {
        const C = AA.findKey(c, w);
        !C || r && !Xi(0, c[C], C, r) || (delete c[C], g = !0);
      }
    }
    return AA.isArray(t) ? t.forEach(p) : p(t), g;
  }
  clear(t) {
    const r = Object.keys(this);
    let c = r.length, g = !1;
    for (; c--; ) {
      const p = r[c];
      t && !Xi(0, this[p], p, t, !0) || (delete this[p], g = !0);
    }
    return g;
  }
  normalize(t) {
    const r = this, c = {};
    return AA.forEach(this, (g, p) => {
      const w = AA.findKey(c, p);
      if (w)
        return r[w] = ii(g), void delete r[p];
      const C = t ? function(b) {
        return b.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (Q, y, E) => y.toUpperCase() + E);
      }(p) : String(p).trim();
      C !== p && delete r[p], r[C] = ii(g), c[C] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return AA.forEach(this, (c, g) => {
      c != null && c !== !1 && (r[g] = t && AA.isArray(c) ? c.join(", ") : c);
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
    const c = new this(t);
    return r.forEach((g) => c.set(g)), c;
  }
  static accessor(t) {
    const r = (this[Nn] = this[Nn] = { accessors: {} }).accessors, c = this.prototype;
    function g(p) {
      const w = ne(p);
      r[w] || (function(C, b) {
        const Q = AA.toCamelCase(" " + b);
        ["get", "set", "has"].forEach((y) => {
          Object.defineProperty(C, y + Q, { value: function(E, T, P) {
            return this[y].call(this, b, E, T, P);
          }, configurable: !0 });
        });
      }(c, p), r[w] = !0);
    }
    return AA.isArray(t) ? t.forEach(g) : g(t), this;
  }
}
function Wi(e, t) {
  const r = this || _e, c = t || r, g = ZA.from(c.headers);
  let p = c.data;
  return AA.forEach(e, function(w) {
    p = w.call(r, p, g.normalize(), t ? t.status : void 0);
  }), g.normalize(), p;
}
function oo(e) {
  return !(!e || !e.__CANCEL__);
}
function Se(e, t, r) {
  fA.call(this, e ?? "canceled", fA.ERR_CANCELED, t, r), this.name = "CanceledError";
}
ZA.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), AA.reduceDescriptors(ZA.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return { get: () => e, set(c) {
    this[r] = c;
  } };
}), AA.freezeMethods(ZA), AA.inherits(Se, fA, { __CANCEL__: !0 });
const nc = rt.hasStandardBrowserEnv ? { write(e, t, r, c, g, p) {
  const w = [e + "=" + encodeURIComponent(t)];
  AA.isNumber(r) && w.push("expires=" + new Date(r).toGMTString()), AA.isString(c) && w.push("path=" + c), AA.isString(g) && w.push("domain=" + g), p === !0 && w.push("secure"), document.cookie = w.join("; ");
}, read(e) {
  const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
  return t ? decodeURIComponent(t[3]) : null;
}, remove(e) {
  this.write(e, "", Date.now() - 864e5);
} } : { write() {
}, read: () => null, remove() {
} };
function ao(e, t) {
  return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? function(r, c) {
    return c ? r.replace(/\/?\/$/, "") + "/" + c.replace(/^\/+/, "") : r;
  }(e, t) : t;
}
const sc = rt.hasStandardBrowserEnv ? function() {
  const e = /(msie|trident)/i.test(navigator.userAgent), t = document.createElement("a");
  let r;
  function c(g) {
    let p = g;
    return e && (t.setAttribute("href", p), p = t.href), t.setAttribute("href", p), { href: t.href, protocol: t.protocol ? t.protocol.replace(/:$/, "") : "", host: t.host, search: t.search ? t.search.replace(/^\?/, "") : "", hash: t.hash ? t.hash.replace(/^#/, "") : "", hostname: t.hostname, port: t.port, pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname };
  }
  return r = c(window.location.href), function(g) {
    const p = AA.isString(g) ? c(g) : g;
    return p.protocol === r.protocol && p.host === r.host;
  };
}() : function() {
  return !0;
};
function Xn(e, t) {
  let r = 0;
  const c = function(g, p) {
    g = g || 10;
    const w = new Array(g), C = new Array(g);
    let b, Q = 0, y = 0;
    return p = p !== void 0 ? p : 1e3, function(E) {
      const T = Date.now(), P = C[y];
      b || (b = T), w[Q] = E, C[Q] = T;
      let O = y, K = 0;
      for (; O !== Q; )
        K += w[O++], O %= g;
      if (Q = (Q + 1) % g, Q === y && (y = (y + 1) % g), T - b < p)
        return;
      const B = P && T - P;
      return B ? Math.round(1e3 * K / B) : void 0;
    };
  }(50, 250);
  return (g) => {
    const p = g.loaded, w = g.lengthComputable ? g.total : void 0, C = p - r, b = c(C);
    r = p;
    const Q = { loaded: p, total: w, progress: w ? p / w : void 0, bytes: C, rate: b || void 0, estimated: b && w && p <= w ? (w - p) / b : void 0, event: g };
    Q[t ? "download" : "upload"] = !0, e(Q);
  };
}
const co = { http: null, xhr: typeof XMLHttpRequest < "u" && function(e) {
  return new Promise(function(t, r) {
    let c = e.data;
    const g = ZA.from(e.headers).normalize();
    let p, w, { responseType: C, withXSRFToken: b } = e;
    function Q() {
      e.cancelToken && e.cancelToken.unsubscribe(p), e.signal && e.signal.removeEventListener("abort", p);
    }
    if (AA.isFormData(c)) {
      if (rt.hasStandardBrowserEnv || rt.hasStandardBrowserWebWorkerEnv)
        g.setContentType(!1);
      else if ((w = g.getContentType()) !== !1) {
        const [O, ...K] = w ? w.split(";").map((B) => B.trim()).filter(Boolean) : [];
        g.setContentType([O || "multipart/form-data", ...K].join("; "));
      }
    }
    let y = new XMLHttpRequest();
    if (e.auth) {
      const O = e.auth.username || "", K = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      g.set("Authorization", "Basic " + btoa(O + ":" + K));
    }
    const E = ao(e.baseURL, e.url);
    function T() {
      if (!y)
        return;
      const O = ZA.from("getAllResponseHeaders" in y && y.getAllResponseHeaders());
      (function(K, B, tA) {
        const nA = tA.config.validateStatus;
        tA.status && nA && !nA(tA.status) ? B(new fA("Request failed with status code " + tA.status, [fA.ERR_BAD_REQUEST, fA.ERR_BAD_RESPONSE][Math.floor(tA.status / 100) - 4], tA.config, tA.request, tA)) : K(tA);
      })(function(K) {
        t(K), Q();
      }, function(K) {
        r(K), Q();
      }, { data: C && C !== "text" && C !== "json" ? y.response : y.responseText, status: y.status, statusText: y.statusText, headers: O, config: e, request: y }), y = null;
    }
    if (y.open(e.method.toUpperCase(), io(E, e.params, e.paramsSerializer), !0), y.timeout = e.timeout, "onloadend" in y ? y.onloadend = T : y.onreadystatechange = function() {
      y && y.readyState === 4 && (y.status !== 0 || y.responseURL && y.responseURL.indexOf("file:") === 0) && setTimeout(T);
    }, y.onabort = function() {
      y && (r(new fA("Request aborted", fA.ECONNABORTED, e, y)), y = null);
    }, y.onerror = function() {
      r(new fA("Network Error", fA.ERR_NETWORK, e, y)), y = null;
    }, y.ontimeout = function() {
      let O = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const K = e.transitional || ro;
      e.timeoutErrorMessage && (O = e.timeoutErrorMessage), r(new fA(O, K.clarifyTimeoutError ? fA.ETIMEDOUT : fA.ECONNABORTED, e, y)), y = null;
    }, rt.hasStandardBrowserEnv && (b && AA.isFunction(b) && (b = b(e)), b || b !== !1 && sc(E))) {
      const O = e.xsrfHeaderName && e.xsrfCookieName && nc.read(e.xsrfCookieName);
      O && g.set(e.xsrfHeaderName, O);
    }
    c === void 0 && g.setContentType(null), "setRequestHeader" in y && AA.forEach(g.toJSON(), function(O, K) {
      y.setRequestHeader(K, O);
    }), AA.isUndefined(e.withCredentials) || (y.withCredentials = !!e.withCredentials), C && C !== "json" && (y.responseType = e.responseType), typeof e.onDownloadProgress == "function" && y.addEventListener("progress", Xn(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && y.upload && y.upload.addEventListener("progress", Xn(e.onUploadProgress)), (e.cancelToken || e.signal) && (p = (O) => {
      y && (r(!O || O.type ? new Se(null, e, y) : O), y.abort(), y = null);
    }, e.cancelToken && e.cancelToken.subscribe(p), e.signal && (e.signal.aborted ? p() : e.signal.addEventListener("abort", p)));
    const P = function(O) {
      const K = /^([-+\w]{1,25})(:?\/\/|:)/.exec(O);
      return K && K[1] || "";
    }(E);
    P && rt.protocols.indexOf(P) === -1 ? r(new fA("Unsupported protocol " + P + ":", fA.ERR_BAD_REQUEST, e)) : y.send(c || null);
  });
} };
AA.forEach(co, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Wn = (e) => `- ${e}`, oc = (e) => AA.isFunction(e) || e === null || e === !1, lo = (e) => {
  e = AA.isArray(e) ? e : [e];
  const { length: t } = e;
  let r, c;
  const g = {};
  for (let p = 0; p < t; p++) {
    let w;
    if (r = e[p], c = r, !oc(r) && (c = co[(w = String(r)).toLowerCase()], c === void 0))
      throw new fA(`Unknown adapter '${w}'`);
    if (c)
      break;
    g[w || "#" + p] = c;
  }
  if (!c) {
    const p = Object.entries(g).map(([w, C]) => `adapter ${w} ` + (C === !1 ? "is not supported by the environment" : "is not available in the build"));
    throw new fA("There is no suitable adapter to dispatch the request " + (t ? p.length > 1 ? `since :
` + p.map(Wn).join(`
`) : " " + Wn(p[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT");
  }
  return c;
};
function Yi(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Se(null, e);
}
function Yn(e) {
  return Yi(e), e.headers = ZA.from(e.headers), e.data = Wi.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), lo(e.adapter || _e.adapter)(e).then(function(t) {
    return Yi(e), t.data = Wi.call(e, e.transformResponse, t), t.headers = ZA.from(t.headers), t;
  }, function(t) {
    return oo(t) || (Yi(e), t && t.response && (t.response.data = Wi.call(e, e.transformResponse, t.response), t.response.headers = ZA.from(t.response.headers))), Promise.reject(t);
  });
}
const zn = (e) => e instanceof ZA ? { ...e } : e;
function qt(e, t) {
  t = t || {};
  const r = {};
  function c(Q, y, E) {
    return AA.isPlainObject(Q) && AA.isPlainObject(y) ? AA.merge.call({ caseless: E }, Q, y) : AA.isPlainObject(y) ? AA.merge({}, y) : AA.isArray(y) ? y.slice() : y;
  }
  function g(Q, y, E) {
    return AA.isUndefined(y) ? AA.isUndefined(Q) ? void 0 : c(void 0, Q, E) : c(Q, y, E);
  }
  function p(Q, y) {
    if (!AA.isUndefined(y))
      return c(void 0, y);
  }
  function w(Q, y) {
    return AA.isUndefined(y) ? AA.isUndefined(Q) ? void 0 : c(void 0, Q) : c(void 0, y);
  }
  function C(Q, y, E) {
    return E in t ? c(Q, y) : E in e ? c(void 0, Q) : void 0;
  }
  const b = { url: p, method: p, data: p, baseURL: w, transformRequest: w, transformResponse: w, paramsSerializer: w, timeout: w, timeoutMessage: w, withCredentials: w, withXSRFToken: w, adapter: w, responseType: w, xsrfCookieName: w, xsrfHeaderName: w, onUploadProgress: w, onDownloadProgress: w, decompress: w, maxContentLength: w, maxBodyLength: w, beforeRedirect: w, transport: w, httpAgent: w, httpsAgent: w, cancelToken: w, socketPath: w, responseEncoding: w, validateStatus: C, headers: (Q, y) => g(zn(Q), zn(y), !0) };
  return AA.forEach(Object.keys(Object.assign({}, e, t)), function(Q) {
    const y = b[Q] || g, E = y(e[Q], t[Q], Q);
    AA.isUndefined(E) && y !== C || (r[Q] = E);
  }), r;
}
const ac = "1.6.8", Nr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Nr[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Jn = {};
Nr.transitional = function(e, t, r) {
  function c(g, p) {
    return "[Axios v1.6.8] Transitional option '" + g + "'" + p + (r ? ". " + r : "");
  }
  return (g, p, w) => {
    if (e === !1)
      throw new fA(c(p, " has been removed" + (t ? " in " + t : "")), fA.ERR_DEPRECATED);
    return t && !Jn[p] && (Jn[p] = !0, console.warn(c(p, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(g, p, w);
  };
};
const lr = { assertOptions: function(e, t, r) {
  if (typeof e != "object")
    throw new fA("options must be an object", fA.ERR_BAD_OPTION_VALUE);
  const c = Object.keys(e);
  let g = c.length;
  for (; g-- > 0; ) {
    const p = c[g], w = t[p];
    if (w) {
      const C = e[p], b = C === void 0 || w(C, p, e);
      if (b !== !0)
        throw new fA("option " + p + " must be " + b, fA.ERR_BAD_OPTION_VALUE);
    } else if (r !== !0)
      throw new fA("Unknown option " + p, fA.ERR_BAD_OPTION);
  }
}, validators: Nr }, mt = lr.validators;
class Ht {
  constructor(t) {
    this.defaults = t, this.interceptors = { request: new Vn(), response: new Vn() };
  }
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (c) {
      if (c instanceof Error) {
        let g;
        Error.captureStackTrace ? Error.captureStackTrace(g = {}) : g = new Error();
        const p = g.stack ? g.stack.replace(/^.+\n/, "") : "";
        c.stack ? p && !String(c.stack).endsWith(p.replace(/^.+\n.+\n/, "")) && (c.stack += `
` + p) : c.stack = p;
      }
      throw c;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}).url = t : r = t || {}, r = qt(this.defaults, r);
    const { transitional: c, paramsSerializer: g, headers: p } = r;
    c !== void 0 && lr.assertOptions(c, { silentJSONParsing: mt.transitional(mt.boolean), forcedJSONParsing: mt.transitional(mt.boolean), clarifyTimeoutError: mt.transitional(mt.boolean) }, !1), g != null && (AA.isFunction(g) ? r.paramsSerializer = { serialize: g } : lr.assertOptions(g, { encode: mt.function, serialize: mt.function }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let w = p && AA.merge(p.common, p[r.method]);
    p && AA.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (O) => {
      delete p[O];
    }), r.headers = ZA.concat(w, p);
    const C = [];
    let b = !0;
    this.interceptors.request.forEach(function(O) {
      typeof O.runWhen == "function" && O.runWhen(r) === !1 || (b = b && O.synchronous, C.unshift(O.fulfilled, O.rejected));
    });
    const Q = [];
    let y;
    this.interceptors.response.forEach(function(O) {
      Q.push(O.fulfilled, O.rejected);
    });
    let E, T = 0;
    if (!b) {
      const O = [Yn.bind(this), void 0];
      for (O.unshift.apply(O, C), O.push.apply(O, Q), E = O.length, y = Promise.resolve(r); T < E; )
        y = y.then(O[T++], O[T++]);
      return y;
    }
    E = C.length;
    let P = r;
    for (T = 0; T < E; ) {
      const O = C[T++], K = C[T++];
      try {
        P = O(P);
      } catch (B) {
        K.call(this, B);
        break;
      }
    }
    try {
      y = Yn.call(this, P);
    } catch (O) {
      return Promise.reject(O);
    }
    for (T = 0, E = Q.length; T < E; )
      y = y.then(Q[T++], Q[T++]);
    return y;
  }
  getUri(t) {
    return io(ao((t = qt(this.defaults, t)).baseURL, t.url), t.params, t.paramsSerializer);
  }
}
AA.forEach(["delete", "get", "head", "options"], function(e) {
  Ht.prototype[e] = function(t, r) {
    return this.request(qt(r || {}, { method: e, url: t, data: (r || {}).data }));
  };
}), AA.forEach(["post", "put", "patch"], function(e) {
  function t(r) {
    return function(c, g, p) {
      return this.request(qt(p || {}, { method: e, headers: r ? { "Content-Type": "multipart/form-data" } : {}, url: c, data: g }));
    };
  }
  Ht.prototype[e] = t(), Ht.prototype[e + "Form"] = t(!0);
});
class Xr {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(g) {
      r = g;
    });
    const c = this;
    this.promise.then((g) => {
      if (!c._listeners)
        return;
      let p = c._listeners.length;
      for (; p-- > 0; )
        c._listeners[p](g);
      c._listeners = null;
    }), this.promise.then = (g) => {
      let p;
      const w = new Promise((C) => {
        c.subscribe(C), p = C;
      }).then(g);
      return w.cancel = function() {
        c.unsubscribe(p);
      }, w;
    }, t(function(g, p, w) {
      c.reason || (c.reason = new Se(g, p, w), r(c.reason));
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
    return { token: new Xr(function(r) {
      t = r;
    }), cancel: t };
  }
}
const hr = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
Object.entries(hr).forEach(([e, t]) => {
  hr[t] = e;
});
const UA = function e(t) {
  const r = new Ht(t), c = Ao(Ht.prototype.request, r);
  return AA.extend(c, Ht.prototype, r, { allOwnKeys: !0 }), AA.extend(c, r, null, { allOwnKeys: !0 }), c.create = function(g) {
    return e(qt(t, g));
  }, c;
}(_e);
UA.Axios = Ht, UA.CanceledError = Se, UA.CancelToken = Xr, UA.isCancel = oo, UA.VERSION = ac, UA.toFormData = hi, UA.AxiosError = fA, UA.Cancel = UA.CanceledError, UA.all = function(e) {
  return Promise.all(e);
}, UA.spread = function(e) {
  return function(t) {
    return e.apply(null, t);
  };
}, UA.isAxiosError = function(e) {
  return AA.isObject(e) && e.isAxiosError === !0;
}, UA.mergeConfig = qt, UA.AxiosHeaders = ZA, UA.formToJSON = (e) => so(AA.isHTMLForm(e) ? new FormData(e) : e), UA.getAdapter = lo, UA.HttpStatusCode = hr, UA.default = UA;
const cc = { production: !0, name: "production", apiBaseUrl: "https://api.shakebugs.com/api/2.0/" }, Tt = class Tt {
  constructor() {
    $(this, "axios");
    UA.defaults.withCredentials = !1, this.axios = UA.create({ baseURL: cc.apiBaseUrl });
  }
  static getInstance() {
    return Tt.instance || (Tt.instance = new Tt()), Tt.instance;
  }
  get({ resource: t, config: r }) {
    return this.axios.get(t, r);
  }
  post({ resource: t, data: r, config: c }) {
    return this.axios.post(t, r, c);
  }
  patch({ resource: t, data: r, config: c }) {
    return this.axios.patch(t, this.formatPatchData(r), c);
  }
  put({ resource: t, data: r, config: c }) {
    return this.axios.put(t, r, c);
  }
  delete({ resource: t, config: r }) {
    return this.axios.delete(t, r);
  }
  formatPatchData(t) {
    return Object.keys(t).map((r) => ({ op: "replace", path: "/" + r, value: t[r] }));
  }
};
$(Tt, "instance");
let ur = Tt;
class lc {
  constructor({ apiKey: t, version: r, bundleId: c, deviceId: g }) {
    $(this, "baseApi");
    $(this, "apiKey");
    $(this, "version");
    $(this, "bundleId");
    $(this, "deviceId");
    this.baseApi = ur.getInstance(), this.apiKey = t, this.version = r, this.bundleId = c, this.deviceId = g, this.setDefaultHeaders();
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
var _A = ((e) => (e[e.IMAGE = 0] = "IMAGE", e[e.VIDEO = 1] = "VIDEO", e))(_A || {});
const Wr = "shakeSdk: ", gt = (e) => {
}, qn = (e) => {
  console.info(`${Wr} ${e}`);
}, Oe = (e) => {
  console.warn(`${Wr} ${e}`);
}, Yr = (e) => {
  console.error(`${Wr} ${e}`);
}, tt = (e) => {
  const t = document.createElement("img");
  return t.classList.add("shake-sdk-image"), e && (t.src = e), t;
}, ho = (e) => {
  const t = document.createElement("p");
  return t.classList.add("shake-sdk-text-p1"), t.innerText = e, t;
}, zr = (e) => {
  const t = document.createElement("p");
  return t.classList.add("shake-sdk-text-h2"), t.innerText = e, t;
}, Zn = (e) => {
  const t = document.createElement("p");
  return t.classList.add("shake-sdk-text-button"), t.innerText = e, t;
}, uo = (e) => {
  const t = document.createElement("p");
  return t.classList.add("shake-sdk-text-accent-button"), t.innerText = e, t;
}, gA = async (e) => new CSSStyleSheet().replace(e), Ut = (e) => {
  (async () => await Promise.all([gA(".shake-sdk-bubble{padding:0;border-radius:100px;border-width:0;cursor:pointer;display:flex;align-items:center;justify-content:center;position:fixed;background-color:#fff;width:50px;height:50px;z-index:2147483647;transition:none}"), gA(".shake-sdk-button{background-color:var(--shake-sdk-color-accent);padding:9px 20px 11px;border-radius:var(--shake-sdk-border-radius-light);display:flex;justify-content:center;align-items:center;cursor:pointer;border:none}.shake-sdk-button:disabled{cursor:not-allowed;opacity:.3}"), gA(".shake-sdk-card{flex:1;background-color:var(--shake-sdk-bg-color-primary);border-radius:var(--shake-sdk-border-radius)}"), gA(".shake-sdk-circle-button{padding:0;border-radius:100px;border-width:0;cursor:pointer;display:flex;align-items:center;justify-content:center}"), gA(""), gA(""), gA(".shake-sdk-context-menu{position:fixed;display:none;width:260px;z-index:2147483647;transform:translate(20%,-25%);border-radius:10px;border-width:1px;border-color:var(--shake-sdk-bg-color-outline);padding:8px 0;background-color:var(--shake-sdk-bg-color-primary-inversed-highlight);box-shadow:0 2px 10px #1c1c1e}"), gA(".shake-sdk-context-menu-header{background-color:transparent;border:0;display:flex;width:100%;padding:8px 20px;cursor:pointer}.shake-sdk-context-menu-header-text{color:var(--shake-sdk-text-color-secondary);font-size:12px}"), gA(".shake-sdk-context-menu-item{background-color:transparent;border:0;display:flex;width:100%;padding:8px 20px;cursor:pointer}.shake-sdk-context-menu-item:hover{background-color:var(--shake-sdk-bg-color-outline)}.shake-sdk-context-menu-item img{width:20px;height:20px;margin-right:10px}.shake-sdk-context-menu-item p{color:var(--shake-sdk-text-color-popup-menu-item)}"), gA(".shake-sdk-select-dropdown{border-radius:var(--shake-sdk-border-radius-light);border:1px solid var(--shake-sdk-bg-color-primary-highlight);background:var(--shake-sdk-bg-color-secondary);padding:9px 18px 12px 12px;display:flex;flex-direction:column;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.shake-sdk-select-dropdown.active{border:1px solid var(--shake-sdk-color-accent)}.shake-sdk-dropdown-icon{position:absolute;right:16px;top:16px;cursor:pointer}.shake-sdk-select-dropdown-label{font-size:12px;color:var(--shake-sdk-text-color-secondary);font-family:Roobert,serif;-webkit-font-smoothing:antialiased;cursor:pointer;-webkit-user-select:none;user-select:none}.shake-sdk-select-dropdown-chosen{color:var(--shake-sdk-text-color-primary)}.shake-sdk-select-options{padding:8px 0;margin-top:2px;background:var(--shake-sdk-bg-color-secondary);border-radius:var(--shake-sdk-border-radius-light);border:1px solid var(--shake-sdk-bg-color-primary-highlight);list-style-type:none;display:none;position:absolute;width:333px;z-index:1}.shake-sdk-select-option{list-style-type:none;font-family:Roobert,serif;padding:10px 20px 12px 12px;cursor:pointer;color:var(--shake-sdk-text-color-primary);font-size:14px;font-weight:500}.shake-sdk-select-option:hover{background-color:var(--shake-sdk-bg-color-primary-highlight)}"), gA(".shake-sdk-sheet-background{position:fixed;top:0;left:0;width:100%;height:100%;z-index:2147483647;display:flex;flex-direction:column-reverse;background-color:#000000b3;box-sizing:border-box}.shake-sdk-sheet{padding:40px;display:flex;flex-direction:column;background-color:var(--shake-sdk-bg-color-primary);border-radius:var(--shake-sdk-border-radius) var(--shake-sdk-border-radius) 0 0}.shake-sdk-sheet>p{text-align:center;margin-bottom:25px}.shake-sdk-sheet-item{cursor:pointer;display:flex;flex-direction:row;background-color:transparent;border:0;padding:12px;margin:0}.shake-sdk-sheet-item:hover{background-color:var(--shake-sdk-bg-color-primary-highlight)}.shake-sdk-sheet-item img{text-align:center;margin-right:12px;width:27px;height:27px}"), gA(".shake-sdk-text-p1{font-size:16px;font-weight:500;line-height:20px;letter-spacing:0;color:var(--shake-sdk-text-color-primary);-webkit-font-smoothing:antialiased;margin:0}.shake-sdk-text-p2{font-size:14px;font-weight:500;line-height:18px;letter-spacing:0;color:var(--shake-sdk-text-color-secondary);-webkit-font-smoothing:antialiased;margin:0}.shake-sdk-text-p3{color:var(--shake-sdk-text-color-secondary);font-size:12px;font-weight:500;line-height:16px;letter-spacing:0;-webkit-font-smoothing:antialiased;margin:0}.shake-sdk-text-h2{font-size:24px;font-weight:700;line-height:32px;letter-spacing:0;color:var(--shake-sdk-text-color-primary);-webkit-font-smoothing:antialiased;margin:0}.shake-sdk-text-button{font-size:14px;font-weight:500;line-height:18px;letter-spacing:0;color:var(--shake-sdk-button-accent-text-color);-webkit-font-smoothing:antialiased;margin:0}.shake-sdk-text-accent-button{font-size:14px;font-weight:700;line-height:20px;letter-spacing:0;color:var(--shake-sdk-button-accent-text-color);-webkit-font-smoothing:antialiased;margin:0}"), gA(".shake-sdk-textarea-container{width:100%;display:flex;position:relative;z-index:0}.shake-sdk-textarea{flex:1;background-color:transparent;border:1px solid var(--shake-sdk-bg-color-primary-highlight);border-radius:var(--shake-sdk-border-radius-light);font-family:Roobert,serif;padding:28px 12px 12px;resize:none;width:100%;color:var(--shake-sdk-text-color-primary);font-size:16px}.shake-sdk-textarea:focus-visible{outline:none;border:1px solid var(--shake-sdk-color-accent)}.shake-sdk-textarea::placeholder{color:var(--shake-sdk-text-color-secondary)}.shake-sdk-textarea-label{position:absolute;font-family:Roobert,serif;top:28px;left:2px;font-size:12px;color:var(--shake-sdk-text-color-secondary);pointer-events:none;transform-origin:top left;transform:translateY(-50%) translate(10px)}"), gA(".toast-notification{width:300px;max-height:min-content;bottom:0;margin-bottom:20px;opacity:1;margin-left:0;top:20px;right:20px;position:fixed;z-index:2147483647;display:flex;flex-direction:row;cursor:default;border:1px solid var(--shake-sdk-bg-color-outline);border-radius:var(--shake-sdk-border-radius-light);background:var(--shake-sdk-bg-color-primary-inversed-highlight);color:var(--shake-sdk-text-color-popup-menu-item);box-shadow:0 2px 10px var(--shake-sdk-bg-color-primary-inversed)}.message-container{width:88%;padding-bottom:14px;padding-left:20px;color:var(--shake-sdk-text-color-popup-menu-item);border-radius:var(--shake-sdk-border-radius-light);cursor:default;font-size:14px;font-family:Roobert,serif;background:var(--shake-sdk-bg-color-primary-inversed-highlight)}.title-container{width:88%;padding-left:20px;padding-bottom:4px;color:var(--shake-sdk-text-color-popup-menu-item);border-radius:var(--shake-sdk-border-radius-light);cursor:default;font-size:16px;font-family:Roobert,serif;background:var(--shake-sdk-bg-color-primary-inversed-highlight)}.content-container{width:88%;padding-top:14px;padding-left:20px;color:var(--shake-sdk-text-color-popup-menu-item);border-radius:var(--shake-sdk-border-radius-light);cursor:default;font-size:14px;font-family:Roobert,serif;background:var(--shake-sdk-bg-color-primary-inversed-highlight);display:flex;flex-direction:column}.close-notification{width:12%;height:32px}.close-notification>img{padding-top:8px;padding-left:5px;font-weight:900;color:var(--shake-sdk-text-color-popup-menu-item);cursor:pointer}"), gA(".shake-sdk-toolbar{width:100%;height:32px;background-color:transparent;display:flex;flex-direction:row;justify-content:right}.shake-sdk-toolbar-button{display:flex;align-items:center;justify-content:center;border:none;cursor:pointer;width:32px;height:32px;background-color:transparent;margin-left:-10px}.shake-sdk-toolbar-button:hover{opacity:.7}@media only screen and (min-width: 1025px){.shake-sdk-toolbar{display:none}}"), gA(".shake-sdk-video{width:100%}"), gA(".shake-sdk-main-button{position:fixed;top:50%;right:-32px;height:28px;min-width:138px;z-index:2147483647;transform:rotate(-90deg);margin-top:-14px;border-radius:var(--shake-sdk-button-border-radius);background:var(--shake-sdk-pureWhite);padding:4px 10px 3px 7px;border:1px solid var(--shake-sdk-grey30)}.shake-sdk-main-button-icon{margin-right:4px;width:21px;height:21px;border-radius:4px}.shake-sdk-main-button-text{color:var(--shake-sdk-text-color-primary);letter-spacing:-.04em}"), gA(".shake-sdk-content{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;background-color:#000000b3;z-index:2147483647;overflow:hidden}.shake-sdk-content-wrap{flex:1;display:flex;flex-direction:row;padding:40px}.shake-sdk-content-left{display:flex;flex:1;margin-right:20px;position:relative}.shake-sdk-content-right{display:flex;flex-shrink:0}.shake-sdk-close-button{position:absolute;top:-15px;left:-15px;width:40px;height:40px}@media only screen and (max-width: 1024px){.shake-sdk-content-wrap{background-color:var(--shake-sdk-bg-color-primary);padding:0}.shake-sdk-content-left{display:none}.shake-sdk-content-right{flex:1}.shake-sdk-close-button{display:none}}.shake-sdk-content p,h1,h2,h3,ul,li,label,div{font-family:Roobert,serif;margin:0}.shake-sdk-sheet p,h1,h2,h3,ul,li,label,div{font-family:Roobert,serif}.shake-sdk-content *{scrollbar-width:thin;scrollbar-color:#2C2C2E transparent}.shake-sdk-content *::-webkit-scrollbar{width:6px}.shake-sdk-content *::-webkit-scrollbar-track{background:none}.shake-sdk-content *::-webkit-scrollbar-thumb{background-color:#2c2c2e;border-radius:10px}.shake-sdk-content ::-webkit-scrollbar-corner{background-color:transparent}"), gA(".shake-sdk-new-ticket{padding:32px 20px;display:flex;flex-direction:column;justify-content:space-between;width:336px;background-color:var(--shake-sdk-bg-color-primary)}.shake-sdk-new-ticket-form{display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden}.shake-sdk-new-ticket-title{padding-bottom:32px}.shake-sdk-styled-textarea{padding-top:12px;margin-bottom:12px}.shake-sdk-submit-button{background-color:var(--shake-sdk-color-accent);padding:9px 20px 11px;border-radius:var(--shake-sdk-border-radius-light)}.shake-sdk-new-ticket *{scrollbar-color:#e8e8e8 transparent!important}.shake-sdk-new-ticket *::-webkit-scrollbar-thumb{background-color:#e8e8e8!important}@media only screen and (max-width: 1024px){.shake-sdk-new-ticket{width:0}}"), gA(".shake-sdk-attachments-items-small{display:flex;flex-direction:row;min-height:210px;width:100%;overflow-x:auto;overflow-y:hidden}@media only screen and (min-width: 1025px){.shake-sdk-attachments-items-small{display:none}}"), gA(".shake-sdk-attachment-item-small{display:flex;min-width:100px;max-width:100px;height:200px;margin-right:10px;cursor:pointer;overflow:hidden;position:relative}.shake-sdk-attachment-item-remove-small{position:absolute;top:15px;right:15px;width:30px;height:30px;background-color:var(--shake-sdk-bg-color-primary-inversed);opacity:.7}.shake-sdk-attachment-item-thumbnail-small{background-color:#000;height:100%;width:100%;object-fit:cover;border-radius:10px}"), gA(".shake-sdk-attachments-add-item-small{display:flex;min-width:100px;max-width:100px;height:200px;margin-right:10px;align-items:center;justify-content:center;overflow:hidden;position:relative}.shake-sdk-attachment-add-button-small{width:29px;height:29px;cursor:pointer;background-color:var(--shake-sdk-bg-color-secondary)}"), gA(".shake-sdk-attachments-card{padding:20px;display:flex;flex-direction:row;background-color:var(--shake-sdk-bg-color-primary-inversed)}.shake-sdk-attachments-page{display:flex;flex-direction:row;width:100%}.shake-sdk-attachments-list-wrap{display:flex;margin-right:12px;flex-shrink:0}.shake-sdk-attachments-preview-wrap{display:flex;flex:1}.shake-sdk-attachments-preview-colors{width:200px;transform:translate(10%,120%);border:1px solid var(--shake-sdk-bg-color-outline)}@media only screen and (max-width: 1024px){.shake-sdk-attachments-card{display:none}}"), gA(".shake-sdk-attachments-items{display:flex;flex-direction:column;overflow:auto;overflow-x:hidden}"), gA(".shake-sdk-attachments-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1}.shake-sdk-attachments-empty img{margin-right:10px}.shake-sdk-attachments-empty button{height:36px;margin-right:20px;background-color:var(--shake-sdk-button-color);color:var(--shake-sdk-button-text-color);border:1px solid var(--shake-sdk-button-border-color)}.shake-sdk-attachments-empty button:hover{opacity:.7}.shake-sdk-attachments-empty>div{display:flex;flex-direction:row;margin-top:20px}.shake-sdk-attachments-empty>p{max-width:300px;text-align:center;font-size:18px}"), gA(".shake-sdk-attachment-item{width:140px;display:flex;flex-direction:column;margin-bottom:20px;cursor:pointer}.shake-sdk-attachment-item-card{position:relative;padding:8px;background-color:transparent}.shake-sdk-attachment-item-selected .shake-sdk-attachment-item-card{background-color:var(--shake-sdk-bg-color-primary-inversed-highlight)}.shake-sdk-attachment-remove{position:absolute;top:15px;right:15px;width:30px;height:30px;background-color:var(--shake-sdk-bg-color-primary-inversed);opacity:.7}.shake-sdk-attachment-item-thumbnail{background-color:transparent;width:100%;height:61px;object-fit:cover;border-radius:10px}.shake-sdk-attachment-item-title{display:flex;justify-content:center}.shake-sdk-attachment-title-box{display:flex;width:78px;height:20px;margin:2px;text-align:center;align-items:center;justify-content:center;border-radius:4px;background-color:transparent}.shake-sdk-attachment-item-selected .shake-sdk-attachment-title-box{background-color:var(--shake-sdk-color-accent-dark)}.shake-sdk-attachment-title-box p{color:var(--shake-sdk-button-accent-text-color)}"), gA(".shake-sdk-attachments-add-item{width:140px;display:flex;align-items:center;justify-content:center}.shake-sdk-attachment-add-button{width:29px;height:29px;background-color:var(--shake-sdk-bg-color-primary-inversed-highlight)}"), gA(".shake-sdk-attachments-preview{margin-top:36px;display:flex;flex-direction:column;overflow:hidden;width:100%}"), gA(".shake-sdk-image-preview{display:flex;flex-direction:column;-webkit-user-select:none;user-select:none;width:100%;min-height:0;max-height:100%;flex:1}.shake-sdk-image-preview-image-container{display:flex;flex:1;align-items:center;flex-direction:column;position:relative;min-height:0;max-height:100%}.shake-sdk-image-preview-image{max-width:100%;max-height:100%;min-height:0;height:auto;width:auto;border-radius:10px}.shake-sdk-image-preview-toolbox-container{flex:0 0 50px;display:flex;flex-direction:column;align-items:center;padding-top:50px;padding-bottom:50px}.shake-sdk-image-preview-toolbox{width:192px;height:48px;display:flex;border-radius:10px;border:1px solid var(--shake-sdk-bg-color-outline);background:var(--shake-sdk-bg-color-primary-inversed-highlight)}"), gA(".shake-sdk-video-preview{height:100%}.shake-sdk-video-preview video{border-radius:10px;display:block;max-width:100%;max-height:100%;height:auto;width:auto}"), gA(".shake-sdk-image-preview-root-fs{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;background-color:#000;z-index:2147483647}.shake-sdk-image-preview-toolbar-fs{width:100%;flex:0 0 32px;background-color:transparent;display:flex;flex-direction:row;justify-content:right}.shake-sdk-image-preview-content-fs{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;margin:32px;min-height:0}"), gA(".shake-sdk-video-preview-root-fs{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;background-color:#000;z-index:2147483647}.shake-sdk-video-preview-toolbar-fs{width:100%;height:32px;background-color:transparent;display:flex;flex-direction:row;justify-content:right}.shake-sdk-video-preview-fs{width:100%;height:100%}"), gA(`.shake-sdk-canvas{position:absolute;cursor:url("data:image/svg+xml,%3csvg%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Pen,%20Square%202'%20clip-path='url(%23clip0_15240_1054)'%3e%3cg%20id='Group'%3e%3cg%20id='Vector'%20filter='url(%23filter0_d_15240_1054)'%3e%3cpath%20d='M17.4366%2030.7725C17.092%2031.1171%2016.6263%2031.3096%2016.1405%2031.3096H12.4463V27.6155C12.4463%2027.1296%2012.6406%2026.664%2012.9835%2026.3193L25.6775%2013.6161C26.9095%2012.3841%2028.9078%2012.3841%2030.1398%2013.6161C31.3736%2014.8481%2031.3718%2016.8465%2030.1398%2018.0785L17.4366%2030.7725Z'%20fill='white'/%3e%3cpath%20d='M10.9463%2031.3096C10.9463%2032.1381%2011.6179%2032.8096%2012.4463%2032.8096H16.1405C17.0238%2032.8096%2017.8709%2032.4593%2018.4969%2031.8335C18.497%2031.8334%2018.4972%2031.8333%2018.4973%2031.8331L31.2001%2019.1395L31.2005%2019.1391C33.0172%2017.3224%2033.0213%2014.3737%2031.1997%2012.5547C29.3818%2010.7377%2026.4343%2010.738%2024.6168%2012.5555L24.6164%2012.5559L11.9224%2025.259L11.92%2025.2615C11.3009%2025.8839%2010.9463%2026.7285%2010.9463%2027.6155V31.3096Z'%20stroke='white'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cpath%20id='Vector_2'%20d='M17.4366%2030.7725C17.092%2031.1171%2016.6263%2031.3096%2016.1405%2031.3096H12.4463V27.6155C12.4463%2027.1296%2012.6406%2026.664%2012.9835%2026.3193L25.6775%2013.6161C26.9095%2012.3841%2028.9078%2012.3841%2030.1398%2013.6161C31.3736%2014.8481%2031.3718%2016.8465%2030.1398%2018.0785L17.4366%2030.7725Z'%20fill='white'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_3'%20d='M21.6328%2017.6733L26.0878%2022.1283'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_4'%20d='M29.2484%2018.9675L30.9021%2020.6212C31.7711%2021.492%2031.7711%2022.9019%2030.9021%2023.7709L27.8936%2026.7794'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_15240_1054'%20x='7.44629'%20y='9.69214'%20width='28.6182'%20height='28.6174'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='2'/%3e%3cfeGaussianBlur%20stdDeviation='1'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_15240_1054'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_15240_1054'%20result='shape'/%3e%3c/filter%3e%3cclipPath%20id='clip0_15240_1054'%3e%3crect%20width='44'%20height='44'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e") 10 30,auto;left:50%!important;transform:translate(-50%);z-index:99999}`), gA(".shake-sdk-attachments-drawing-button{outline:none;border:none;background:transparent;padding:8px}.shake-sdk-attachments-drawing-button svg{width:22px;height:22px}.shake-sdk-attachments-drawing-button svg path,.shake-sdk-attachments-drawing-button svg rect{stroke:var(--shake-sdk-text-color-secondary);transition:stroke .3s ease}.shake-sdk-attachments-drawing-button:hover svg path{stroke:var(--shake-sdk-button-accent-text-color)}.shake-sdk-attachments-drawing-button:hover svg rect{stroke:var(--shake-sdk-button-accent-text-color)}.shake-sdk-attachments-drawing-button:hover svg circle{stroke:var(--shake-sdk-button-accent-text-color)}.shake-sdk-attachments-drawing-button.additional-active svg path{stroke:var(--shake-sdk-button-accent-text-color)}.shake-sdk-attachments-drawing-button.additional-active svg rect{stroke:var(--shake-sdk-button-accent-text-color)}.shake-sdk-attachments-drawing-button.additional-active svg circle{stroke:var(--shake-sdk-button-accent-text-color)}"), gA(".shake-sdk-attachments-colored-button{outline:none;border:none;background:transparent;border-radius:50%;height:20px;width:20px;margin-left:6px;margin-right:6px;padding:0}")]))().then((t) => e.adoptedStyleSheets = t);
}, dr = (e, t) => {
  const r = zr(e), c = ho(t), g = document.createElement("div");
  g.classList.add("shake-sdk-sheet"), g.appendChild(r), g.appendChild(c);
  const p = document.createElement("div");
  p.classList.add("shake-sdk-sheet-background"), p.appendChild(g), p.onclick = () => w.remove();
  const w = document.createElement("div"), C = w.attachShadow({ mode: "open" });
  return C.appendChild(p), Ut(C), w;
}, go = (e, t) => {
  const r = zr(e), c = document.createElement("div");
  c.classList.add("shake-sdk-sheet"), c.appendChild(r), t.forEach((C) => {
    c.appendChild(hc(C, () => {
      C.onClick(), p.remove();
    }));
  });
  const g = document.createElement("div");
  g.classList.add("shake-sdk-sheet-background"), g.appendChild(c), g.onclick = () => p.remove();
  const p = document.createElement("div"), w = p.attachShadow({ mode: "open" });
  return w.appendChild(g), Ut(w), p;
}, hc = (e, t) => {
  const r = tt(e.icon), c = ho(e.text), g = document.createElement("button");
  return g.classList.add("shake-sdk-sheet-item"), g.onclick = t, g.appendChild(r), g.appendChild(c), g;
}, gr = (e) => {
  document.body.appendChild(e);
}, uA = () => {
  const e = document.createElement("div");
  return e.classList.add("shake-sdk-container"), e;
};
class fr {
  constructor(t, r, c) {
    $(this, "title");
    $(this, "message");
    $(this, "time");
    $(this, "element");
    this.title = c, this.message = t, this.time = r, this.element = null;
    const g = uA();
    g.classList.add("toast-notification"), this.element = g;
    const p = document.getElementsByClassName("toast-notification");
    g.style.marginBottom = 55 * p.length + "px";
    const w = uA();
    if (w.classList.add("content-container"), this.title) {
      const T = uA();
      T.classList.add("title-container"), T.textContent = this.title, w.appendChild(T);
    }
    const C = uA();
    C.classList.add("message-container"), C.textContent = this.message, w.appendChild(C), g.appendChild(w);
    const b = uA();
    b.classList.add("close-notification");
    const Q = tt("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14021_39143)'%3e%3cpath%20d='M16%208L8%2016'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16%2016.001L8%208.00098'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14021_39143'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
    b.appendChild(Q), g.append(b);
    const y = document.createElement("div"), E = y.attachShadow({ mode: "open" });
    E.appendChild(g), Ut(E), document.body.appendChild(y), setTimeout(function() {
      y.remove();
    }, this.time), b.addEventListener("click", () => {
      g.remove();
    });
  }
}
const uc = { shake_sdk_dialog_add_attachment: "Add attachment", shake_sdk_dialog_add_attachment_grab_screenshot: "Grab screenshot", shake_sdk_dialog_add_attachment_record_screen: "Record screen", shake_sdk_dialog_add_attachment_browse_locations: "Browse other locations", shake_sdk_dialog_add_attachment_type_video: "Video", shake_sdk_dialog_add_attachment_type_image: "Screenshot", shake_sdk_dialog_ticket_sent_title: "Done.", shake_sdk_dialog_ticket_sent_message: "Your ticket was sent.", shake_sdk_dialog_attachment_limit_title: "File not attached", shake_sdk_dialog_attachment_limit_message: "A maximum of 10 files can be attached to a feedback form.", shake_sdk_error_message: "Something went wrong.", shake_sdk_main_button_title: "Send feedback", shake_sdk_ticket_form_title: "New ticket", shake_sdk_new_ticket_feedback_type_title: "Ticket type", shake_sdk_new_ticket_feedback_type_bug: "Bug report", shake_sdk_new_ticket_feedback_type_question: "Question", shake_sdk_new_ticket_feedback_type_suggestion: "Improvement suggestion", shake_sdk_ticket_form_description_placeholder: "Description", shake_sdk_ticket_form_submit_button_text: "Submit", shake_sdk_ticket_form_submit_button_text_loading: "Submiting..." }, wA = () => {
  if (ai.EN === ai.EN)
    return uc;
}, pr = (e) => {
  if (e)
    if (window.innerWidth < 1024) {
      const t = dr(wA().shake_sdk_dialog_ticket_sent_title, wA().shake_sdk_dialog_ticket_sent_message);
      document.body.append(t), setTimeout(() => t.remove(), 3e3);
    } else
      new fr(wA().shake_sdk_dialog_ticket_sent_message, 3e3, wA().shake_sdk_dialog_ticket_sent_title);
  else if (window.innerWidth < 1024) {
    const t = dr("Ooops", wA().shake_sdk_error_message);
    document.body.append(t), setTimeout(() => t.remove(), 3e3);
  } else
    new fr(wA().shake_sdk_error_message, 3e3);
}, fo = "2.0.0";
class dc {
  constructor() {
    $(this, "data", SA.localStorage);
    $(this, "shakeApi", null);
    $(this, "init", () => {
      const t = { apiKey: Jt.apiKey, bundleId: Jt.appDomain, version: fo, deviceId: this.data.getShakeDeviceId() ?? "" };
      this.shakeApi = new lc(t);
    });
  }
  async registerApp() {
    var t;
    if (this.shakeApi)
      try {
        await this.shakeApi.registerApp(), this.data.setAppRegistered(!0), this.data.setAppActive(!0);
      } catch (r) {
        ((t = r.response) == null ? void 0 : t.status) === 404 ? (this.data.setAppRegistered(!0), this.data.setAppActive(!1)) : gt("Error registering app: " + (r == null ? void 0 : r.message));
      }
  }
  async sendUserFeedback(t, r) {
    if (!this.shakeApi)
      return;
    let c, g, p = [];
    r.length && (c = await this.uploadScreenshot(r), g = await this.uploadVideo(r), p = await this.uploadAttachments(r)), t.screenshot_url = c, t.video_url = g, t.files = p;
    try {
      await this.shakeApi.sendFeedback(t), gt("Ticket sent successfully."), pr(!0);
    } catch (w) {
      return gt("Error sending user feedback: " + (w == null ? void 0 : w.message)), pr(), null;
    }
  }
  async uploadScreenshot(t) {
    const r = t.find((c) => c.type === _A.IMAGE);
    if (r) {
      const c = this.convertAttachmentToFile(r);
      return await this.uploadFile(c);
    }
  }
  async uploadVideo(t) {
    const r = t.find((c) => c.type === _A.VIDEO);
    if (r) {
      const c = this.convertAttachmentToFile(r);
      return await this.uploadFile(c);
    }
  }
  async uploadAttachments(t) {
    const r = t.find((w) => w.type === _A.IMAGE), c = t.find((w) => w.type === _A.VIDEO), g = t.filter((w) => w.name !== (r == null ? void 0 : r.name) && w.name !== (c == null ? void 0 : c.name)).slice(0, 9), p = await this.convertAttachmentsToFiles(g) ?? [];
    return await this.uploadFiles(p) ?? [];
  }
  async uploadFiles(t) {
    const r = [];
    return await Promise.all(t.map(async (c) => {
      await this.uploadFile(c).then((g) => {
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
        gt("Error uploading file: " + (r == null ? void 0 : r.message));
      }
  }
  convertAttachmentToFile(t) {
    return new File([t.drawingData ?? t.data], t.name, { type: t.data.type });
  }
  async convertAttachmentsToFiles(t) {
    return t.map((r) => this.convertAttachmentToFile(r));
  }
}
class gc {
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
const Qe = class Qe {
};
$(Qe, "storageProvider", new gc()), $(Qe, "localStorage", new xa(Qe.storageProvider));
let SA = Qe;
class vA {
}
$(vA, "shakeApiService", new dc()), $(vA, "consoleLogsTracker", new Ea()), $(vA, "networkRequestsTracker", new Ta()), $(vA, "screenChangeTracker", new Ma()), $(vA, "userActionTracker", new Ra()), $(vA, "systemEventTracker", new Pa()), $(vA, "customLogTracker", new _a()), $(vA, "attachmentsManager", new Ua());
class kt {
  constructor() {
    $(this, "_isConsoleLogsEnabled", !0);
    $(this, "_isCustomLogsEnabled", !0);
    $(this, "_isNetworkRequestsEnabled", !0);
    $(this, "_isScreenChangesEnabled", !0);
    $(this, "_isSystemEventsEnabled", !0);
    $(this, "_isUserActionsEnabled", !0);
    $(this, "enableActivityHistory", (t) => {
      this.isConsoleLogsEnabled = t, this.isCustomLogsEnabled = t, this.isNetworkRequestsEnabled = t, this.isScreenChangesEnabled = t, this.isUserActionsEnabled = t, this.isSystemEventsEnabled = t;
    });
  }
  get isConsoleLogsEnabled() {
    return this._isConsoleLogsEnabled;
  }
  set isConsoleLogsEnabled(t) {
    t != this._isConsoleLogsEnabled && (this._isConsoleLogsEnabled = t, ((r) => {
      if (!SA.localStorage.isSDKEnabled())
        return;
      const c = vA.consoleLogsTracker;
      r ? c.start() : c.stop();
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
      if (!SA.localStorage.isSDKEnabled())
        return;
      const c = vA.networkRequestsTracker;
      r ? c.start() : c.stop();
    })(t));
  }
  get isScreenChangesEnabled() {
    return this._isScreenChangesEnabled;
  }
  set isScreenChangesEnabled(t) {
    t != this._isScreenChangesEnabled && (this._isScreenChangesEnabled = t, ((r) => {
      if (!SA.localStorage.isSDKEnabled())
        return;
      const c = vA.screenChangeTracker;
      r ? c.start() : c.stop();
    })(t));
  }
  get isSystemEventsEnabled() {
    return this._isSystemEventsEnabled;
  }
  set isSystemEventsEnabled(t) {
    t != this._isSystemEventsEnabled && (this._isSystemEventsEnabled = t, ((r) => {
      if (!SA.localStorage.isSDKEnabled())
        return;
      const c = vA.systemEventTracker;
      r ? c.start() : c.stop();
    })(t));
  }
  get isUserActionsEnabled() {
    return this._isUserActionsEnabled;
  }
  set isUserActionsEnabled(t) {
    t != this._isUserActionsEnabled && (this._isUserActionsEnabled = t, ((r) => {
      if (!SA.localStorage.isSDKEnabled())
        return;
      const c = vA.userActionTracker;
      r ? c.start() : c.stop();
    })(t));
  }
}
$(kt, "metadata", {});
const Zt = () => {
  const e = document.createElement("button");
  return e.classList.add("shake-sdk-button"), e;
};
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
var Br = function(e, t) {
  return Br = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, c) {
    r.__proto__ = c;
  } || function(r, c) {
    for (var g in c)
      Object.prototype.hasOwnProperty.call(c, g) && (r[g] = c[g]);
  }, Br(e, t);
};
function et(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  function r() {
    this.constructor = e;
  }
  Br(e, t), e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var wr = function() {
  return wr = Object.assign || function(e) {
    for (var t, r = 1, c = arguments.length; r < c; r++)
      for (var g in t = arguments[r])
        Object.prototype.hasOwnProperty.call(t, g) && (e[g] = t[g]);
    return e;
  }, wr.apply(this, arguments);
};
function KA(e, t, r, c) {
  return new (r || (r = Promise))(function(g, p) {
    function w(Q) {
      try {
        b(c.next(Q));
      } catch (y) {
        p(y);
      }
    }
    function C(Q) {
      try {
        b(c.throw(Q));
      } catch (y) {
        p(y);
      }
    }
    function b(Q) {
      var y;
      Q.done ? g(Q.value) : (y = Q.value, y instanceof r ? y : new r(function(E) {
        E(y);
      })).then(w, C);
    }
    b((c = c.apply(e, [])).next());
  });
}
function RA(e, t) {
  var r, c, g, p, w = { label: 0, sent: function() {
    if (1 & g[0])
      throw g[1];
    return g[1];
  }, trys: [], ops: [] };
  return p = { next: C(0), throw: C(1), return: C(2) }, typeof Symbol == "function" && (p[Symbol.iterator] = function() {
    return this;
  }), p;
  function C(b) {
    return function(Q) {
      return function(y) {
        if (r)
          throw new TypeError("Generator is already executing.");
        for (; w; )
          try {
            if (r = 1, c && (g = 2 & y[0] ? c.return : y[0] ? c.throw || ((g = c.return) && g.call(c), 0) : c.next) && !(g = g.call(c, y[1])).done)
              return g;
            switch (c = 0, g && (y = [2 & y[0], g.value]), y[0]) {
              case 0:
              case 1:
                g = y;
                break;
              case 4:
                return w.label++, { value: y[1], done: !1 };
              case 5:
                w.label++, c = y[1], y = [0];
                continue;
              case 7:
                y = w.ops.pop(), w.trys.pop();
                continue;
              default:
                if (g = w.trys, !((g = g.length > 0 && g[g.length - 1]) || y[0] !== 6 && y[0] !== 2)) {
                  w = 0;
                  continue;
                }
                if (y[0] === 3 && (!g || y[1] > g[0] && y[1] < g[3])) {
                  w.label = y[1];
                  break;
                }
                if (y[0] === 6 && w.label < g[1]) {
                  w.label = g[1], g = y;
                  break;
                }
                if (g && w.label < g[2]) {
                  w.label = g[2], w.ops.push(y);
                  break;
                }
                g[2] && w.ops.pop(), w.trys.pop();
                continue;
            }
            y = t.call(e, w);
          } catch (E) {
            y = [6, E], c = 0;
          } finally {
            r = g = 0;
          }
        if (5 & y[0])
          throw y[1];
        return { value: y[0] ? y[1] : void 0, done: !0 };
      }([b, Q]);
    };
  }
}
function Le(e, t, r) {
  if (arguments.length === 2)
    for (var c, g = 0, p = t.length; g < p; g++)
      !c && g in t || (c || (c = Array.prototype.slice.call(t, 0, g)), c[g] = t[g]);
  return e.concat(c || t);
}
for (var wt = function() {
  function e(t, r, c, g) {
    this.left = t, this.top = r, this.width = c, this.height = g;
  }
  return e.prototype.add = function(t, r, c, g) {
    return new e(this.left + t, this.top + r, this.width + c, this.height + g);
  }, e.fromClientRect = function(t, r) {
    return new e(r.left + t.windowBounds.left, r.top + t.windowBounds.top, r.width, r.height);
  }, e.fromDOMRectList = function(t, r) {
    var c = Array.from(r).find(function(g) {
      return g.width !== 0;
    });
    return c ? new e(c.left + t.windowBounds.left, c.top + t.windowBounds.top, c.width, c.height) : e.EMPTY;
  }, e.EMPTY = new e(0, 0, 0, 0), e;
}(), _i = function(e, t) {
  return wt.fromClientRect(e, t.getBoundingClientRect());
}, ui = function(e) {
  for (var t = [], r = 0, c = e.length; r < c; ) {
    var g = e.charCodeAt(r++);
    if (g >= 55296 && g <= 56319 && r < c) {
      var p = e.charCodeAt(r++);
      (64512 & p) == 56320 ? t.push(((1023 & g) << 10) + (1023 & p) + 65536) : (t.push(g), r--);
    } else
      t.push(g);
  }
  return t;
}, EA = function() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var r = e.length;
  if (!r)
    return "";
  for (var c = [], g = -1, p = ""; ++g < r; ) {
    var w = e[g];
    w <= 65535 ? c.push(w) : (w -= 65536, c.push(55296 + (w >> 10), w % 1024 + 56320)), (g + 1 === r || c.length > 16384) && (p += String.fromCharCode.apply(String, c), c.length = 0);
  }
  return p;
}, fc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", pc = typeof Uint8Array > "u" ? [] : new Uint8Array(256), De = 0; De < 64; De++)
  pc[fc.charCodeAt(De)] = De;
for (var Bc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", he = typeof Uint8Array > "u" ? [] : new Uint8Array(256), Me = 0; Me < 64; Me++)
  he[Bc.charCodeAt(Me)] = Me;
for (var $n = function(e, t, r) {
  return e.slice ? e.slice(t, r) : new Uint16Array(Array.prototype.slice.call(e, t, r));
}, wc = function() {
  function e(t, r, c, g, p, w) {
    this.initialValue = t, this.errorValue = r, this.highStart = c, this.highValueIndex = g, this.index = p, this.data = w;
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
}(), mc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Cc = typeof Uint8Array > "u" ? [] : new Uint8Array(256), Pe = 0; Pe < 64; Pe++)
  Cc[mc.charCodeAt(Pe)] = Pe;
var vt = 10, mr = 13, ue = 15, Re = 17, se = 18, vc = 19, As = 20, Cr = 21, oe = 22, Dt = 24, NA = 25, de = 26, ge = 27, Mt = 28, Gt = 30, Ke = 32, je = 33, vr = 34, yr = 35, me = 37, br = 38, ri = 39, ni = 40, ts = 42, yc = [9001, 65288], dA = "×", Ve = "÷", Qr = function(e, t) {
  var r, c, g, p = function(y) {
    var E, T, P, O, K, B = 0.75 * y.length, tA = y.length, nA = 0;
    y[y.length - 1] === "=" && (B--, y[y.length - 2] === "=" && B--);
    var oA = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && Uint8Array.prototype.slice !== void 0 ? new ArrayBuffer(B) : new Array(B), u = Array.isArray(oA) ? oA : new Uint8Array(oA);
    for (E = 0; E < tA; E += 4)
      T = he[y.charCodeAt(E)], P = he[y.charCodeAt(E + 1)], O = he[y.charCodeAt(E + 2)], K = he[y.charCodeAt(E + 3)], u[nA++] = T << 2 | P >> 4, u[nA++] = (15 & P) << 4 | O >> 2, u[nA++] = (3 & O) << 6 | 63 & K;
    return oA;
  }(e), w = Array.isArray(p) ? function(y) {
    for (var E = y.length, T = [], P = 0; P < E; P += 4)
      T.push(y[P + 3] << 24 | y[P + 2] << 16 | y[P + 1] << 8 | y[P]);
    return T;
  }(p) : new Uint32Array(p), C = Array.isArray(p) ? function(y) {
    for (var E = y.length, T = [], P = 0; P < E; P += 2)
      T.push(y[P + 1] << 8 | y[P]);
    return T;
  }(p) : new Uint16Array(p), b = $n(C, 12, w[4] / 2), Q = w[5] === 2 ? $n(C, (24 + w[4]) / 2) : (r = w, c = Math.ceil((24 + w[4]) / 4), r.slice ? r.slice(c, g) : new Uint32Array(Array.prototype.slice.call(r, c, g)));
  return new wc(w[0], w[1], w[2], w[3], b, Q);
}("KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA=="), lt = [Gt, 36], Fr = [1, 2, 3, 5], po = [vt, 8], es = [ge, de], bc = Fr.concat(po), is = [br, ri, ni, vr, yr], Qc = [ue, mr], zi = function(e, t, r, c) {
  var g = c[r];
  if (Array.isArray(e) ? e.indexOf(g) !== -1 : e === g)
    for (var p = r; p <= c.length; ) {
      if ((b = c[++p]) === t)
        return !0;
      if (b !== vt)
        break;
    }
  if (g === vt)
    for (p = r; p > 0; ) {
      var w = c[--p];
      if (Array.isArray(e) ? e.indexOf(w) !== -1 : e === w)
        for (var C = r; C <= c.length; ) {
          var b;
          if ((b = c[++C]) === t)
            return !0;
          if (b !== vt)
            break;
        }
      if (w !== vt)
        break;
    }
  return !1;
}, rs = function(e, t) {
  for (var r = e; r >= 0; ) {
    var c = t[r];
    if (c !== vt)
      return c;
    r--;
  }
  return 0;
}, Fc = function(e, t, r, c, g) {
  if (r[c] === 0)
    return dA;
  var p = c - 1;
  if (Array.isArray(g) && g[p] === !0)
    return dA;
  var w = p - 1, C = p + 1, b = t[p], Q = w >= 0 ? t[w] : 0, y = t[C];
  if (b === 2 && y === 3)
    return dA;
  if (Fr.indexOf(b) !== -1)
    return "!";
  if (Fr.indexOf(y) !== -1 || po.indexOf(y) !== -1)
    return dA;
  if (rs(p, t) === 8)
    return Ve;
  if (Qr.get(e[p]) === 11 || (b === Ke || b === je) && Qr.get(e[C]) === 11 || b === 7 || y === 7 || b === 9 || [vt, mr, ue].indexOf(b) === -1 && y === 9 || [Re, se, vc, Dt, Mt].indexOf(y) !== -1 || rs(p, t) === oe || zi(23, oe, p, t) || zi([Re, se], Cr, p, t) || zi(12, 12, p, t))
    return dA;
  if (b === vt)
    return Ve;
  if (b === 23 || y === 23)
    return dA;
  if (y === 16 || b === 16)
    return Ve;
  if ([mr, ue, Cr].indexOf(y) !== -1 || b === 14 || Q === 36 && Qc.indexOf(b) !== -1 || b === Mt && y === 36 || y === As || lt.indexOf(y) !== -1 && b === NA || lt.indexOf(b) !== -1 && y === NA || b === ge && [me, Ke, je].indexOf(y) !== -1 || [me, Ke, je].indexOf(b) !== -1 && y === de || lt.indexOf(b) !== -1 && es.indexOf(y) !== -1 || es.indexOf(b) !== -1 && lt.indexOf(y) !== -1 || [ge, de].indexOf(b) !== -1 && (y === NA || [oe, ue].indexOf(y) !== -1 && t[C + 1] === NA) || [oe, ue].indexOf(b) !== -1 && y === NA || b === NA && [NA, Mt, Dt].indexOf(y) !== -1)
    return dA;
  if ([NA, Mt, Dt, Re, se].indexOf(y) !== -1)
    for (var E = p; E >= 0; ) {
      if ((T = t[E]) === NA)
        return dA;
      if ([Mt, Dt].indexOf(T) === -1)
        break;
      E--;
    }
  if ([ge, de].indexOf(y) !== -1)
    for (E = [Re, se].indexOf(b) !== -1 ? w : p; E >= 0; ) {
      var T;
      if ((T = t[E]) === NA)
        return dA;
      if ([Mt, Dt].indexOf(T) === -1)
        break;
      E--;
    }
  if (br === b && [br, ri, vr, yr].indexOf(y) !== -1 || [ri, vr].indexOf(b) !== -1 && [ri, ni].indexOf(y) !== -1 || [ni, yr].indexOf(b) !== -1 && y === ni || is.indexOf(b) !== -1 && [As, de].indexOf(y) !== -1 || is.indexOf(y) !== -1 && b === ge || lt.indexOf(b) !== -1 && lt.indexOf(y) !== -1 || b === Dt && lt.indexOf(y) !== -1 || lt.concat(NA).indexOf(b) !== -1 && y === oe && yc.indexOf(e[C]) === -1 || lt.concat(NA).indexOf(y) !== -1 && b === se)
    return dA;
  if (b === 41 && y === 41) {
    for (var P = r[p], O = 1; P > 0 && t[--P] === 41; )
      O++;
    if (O % 2 != 0)
      return dA;
  }
  return b === Ke && y === je ? dA : Ve;
}, xc = function(e, t) {
  t || (t = { lineBreak: "normal", wordBreak: "normal" });
  var r = function(C, b) {
    b === void 0 && (b = "strict");
    var Q = [], y = [], E = [];
    return C.forEach(function(T, P) {
      var O = Qr.get(T);
      if (O > 50 ? (E.push(!0), O -= 50) : E.push(!1), ["normal", "auto", "loose"].indexOf(b) !== -1 && [8208, 8211, 12316, 12448].indexOf(T) !== -1)
        return y.push(P), Q.push(16);
      if (O === 4 || O === 11) {
        if (P === 0)
          return y.push(P), Q.push(Gt);
        var K = Q[P - 1];
        return bc.indexOf(K) === -1 ? (y.push(y[P - 1]), Q.push(K)) : (y.push(P), Q.push(Gt));
      }
      return y.push(P), O === 31 ? Q.push(b === "strict" ? Cr : me) : O === ts || O === 29 ? Q.push(Gt) : O === 43 ? T >= 131072 && T <= 196605 || T >= 196608 && T <= 262141 ? Q.push(me) : Q.push(Gt) : void Q.push(O);
    }), [y, Q, E];
  }(e, t.lineBreak), c = r[0], g = r[1], p = r[2];
  t.wordBreak !== "break-all" && t.wordBreak !== "break-word" || (g = g.map(function(C) {
    return [NA, Gt, ts].indexOf(C) !== -1 ? me : C;
  }));
  var w = t.wordBreak === "keep-all" ? p.map(function(C, b) {
    return C && e[b] >= 19968 && e[b] <= 40959;
  }) : void 0;
  return [c, g, w];
}, Uc = function() {
  function e(t, r, c, g) {
    this.codePoints = t, this.required = r === "!", this.start = c, this.end = g;
  }
  return e.prototype.slice = function() {
    return EA.apply(void 0, this.codePoints.slice(this.start, this.end));
  }, e;
}(), GA = 45, It = 43, it = -1, jA = function(e) {
  return e >= 48 && e <= 57;
}, Pt = function(e) {
  return jA(e) || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}, Ge = function(e) {
  return e === 10 || e === 9 || e === 32;
}, di = function(e) {
  return function(t) {
    return function(r) {
      return r >= 97 && r <= 122;
    }(t) || function(r) {
      return r >= 65 && r <= 90;
    }(t);
  }(e) || function(t) {
    return t >= 128;
  }(e) || e === 95;
}, ns = function(e) {
  return di(e) || jA(e) || e === GA;
}, Ec = function(e) {
  return e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e === 127;
}, Ct = function(e, t) {
  return e === 92 && t !== 10;
}, Ne = function(e, t, r) {
  return e === GA ? di(t) || Ct(t, r) : !!di(e) || !(e !== 92 || !Ct(e, t));
}, Ji = function(e, t, r) {
  return e === It || e === GA ? !!jA(t) || t === 46 && jA(r) : jA(e === 46 ? t : e);
}, _c = function(e) {
  var t = 0, r = 1;
  e[t] !== It && e[t] !== GA || (e[t] === GA && (r = -1), t++);
  for (var c = []; jA(e[t]); )
    c.push(e[t++]);
  var g = c.length ? parseInt(EA.apply(void 0, c), 10) : 0;
  e[t] === 46 && t++;
  for (var p = []; jA(e[t]); )
    p.push(e[t++]);
  var w = p.length, C = w ? parseInt(EA.apply(void 0, p), 10) : 0;
  e[t] !== 69 && e[t] !== 101 || t++;
  var b = 1;
  e[t] !== It && e[t] !== GA || (e[t] === GA && (b = -1), t++);
  for (var Q = []; jA(e[t]); )
    Q.push(e[t++]);
  var y = Q.length ? parseInt(EA.apply(void 0, Q), 10) : 0;
  return r * (g + C * Math.pow(10, -w)) * Math.pow(10, b * y);
}, Sc = { type: 2 }, kc = { type: 3 }, Tc = { type: 4 }, Ic = { type: 13 }, Hc = { type: 8 }, Oc = { type: 21 }, Lc = { type: 9 }, Dc = { type: 10 }, Mc = { type: 11 }, Pc = { type: 12 }, Rc = { type: 14 }, Xe = { type: 23 }, Kc = { type: 1 }, jc = { type: 25 }, Vc = { type: 24 }, Gc = { type: 26 }, Nc = { type: 27 }, Xc = { type: 28 }, Wc = { type: 29 }, Yc = { type: 31 }, xr = { type: 32 }, Bo = function() {
  function e() {
    this._value = [];
  }
  return e.prototype.write = function(t) {
    this._value = this._value.concat(ui(t));
  }, e.prototype.read = function() {
    for (var t = [], r = this.consumeToken(); r !== xr; )
      t.push(r), r = this.consumeToken();
    return t;
  }, e.prototype.consumeToken = function() {
    var t = this.consumeCodePoint();
    switch (t) {
      case 34:
        return this.consumeStringToken(34);
      case 35:
        var r = this.peekCodePoint(0), c = this.peekCodePoint(1), g = this.peekCodePoint(2);
        if (ns(r) || Ct(c, g)) {
          var p = Ne(r, c, g) ? 2 : 1;
          return { type: 5, value: this.consumeName(), flags: p };
        }
        break;
      case 36:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), Ic;
        break;
      case 39:
        return this.consumeStringToken(39);
      case 40:
        return Sc;
      case 41:
        return kc;
      case 42:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), Rc;
        break;
      case It:
        if (Ji(t, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(t), this.consumeNumericToken();
        break;
      case 44:
        return Tc;
      case GA:
        var w = t, C = this.peekCodePoint(0), b = this.peekCodePoint(1);
        if (Ji(w, C, b))
          return this.reconsumeCodePoint(t), this.consumeNumericToken();
        if (Ne(w, C, b))
          return this.reconsumeCodePoint(t), this.consumeIdentLikeToken();
        if (C === GA && b === 62)
          return this.consumeCodePoint(), this.consumeCodePoint(), Vc;
        break;
      case 46:
        if (Ji(t, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(t), this.consumeNumericToken();
        break;
      case 47:
        if (this.peekCodePoint(0) === 42)
          for (this.consumeCodePoint(); ; ) {
            var Q = this.consumeCodePoint();
            if (Q === 42 && (Q = this.consumeCodePoint()) === 47)
              return this.consumeToken();
            if (Q === it)
              return this.consumeToken();
          }
        break;
      case 58:
        return Gc;
      case 59:
        return Nc;
      case 60:
        if (this.peekCodePoint(0) === 33 && this.peekCodePoint(1) === GA && this.peekCodePoint(2) === GA)
          return this.consumeCodePoint(), this.consumeCodePoint(), jc;
        break;
      case 64:
        var y = this.peekCodePoint(0), E = this.peekCodePoint(1), T = this.peekCodePoint(2);
        if (Ne(y, E, T))
          return { type: 7, value: this.consumeName() };
        break;
      case 91:
        return Xc;
      case 92:
        if (Ct(t, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(t), this.consumeIdentLikeToken();
        break;
      case 93:
        return Wc;
      case 61:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), Hc;
        break;
      case 123:
        return Mc;
      case 125:
        return Pc;
      case 117:
      case 85:
        var P = this.peekCodePoint(0), O = this.peekCodePoint(1);
        return P !== It || !Pt(O) && O !== 63 || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(t), this.consumeIdentLikeToken();
      case 124:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), Lc;
        if (this.peekCodePoint(0) === 124)
          return this.consumeCodePoint(), Oc;
        break;
      case 126:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), Dc;
        break;
      case it:
        return xr;
    }
    return Ge(t) ? (this.consumeWhiteSpace(), Yc) : jA(t) ? (this.reconsumeCodePoint(t), this.consumeNumericToken()) : di(t) ? (this.reconsumeCodePoint(t), this.consumeIdentLikeToken()) : { type: 6, value: EA(t) };
  }, e.prototype.consumeCodePoint = function() {
    var t = this._value.shift();
    return t === void 0 ? -1 : t;
  }, e.prototype.reconsumeCodePoint = function(t) {
    this._value.unshift(t);
  }, e.prototype.peekCodePoint = function(t) {
    return t >= this._value.length ? -1 : this._value[t];
  }, e.prototype.consumeUnicodeRangeToken = function() {
    for (var t = [], r = this.consumeCodePoint(); Pt(r) && t.length < 6; )
      t.push(r), r = this.consumeCodePoint();
    for (var c = !1; r === 63 && t.length < 6; )
      t.push(r), r = this.consumeCodePoint(), c = !0;
    if (c)
      return { type: 30, start: parseInt(EA.apply(void 0, t.map(function(w) {
        return w === 63 ? 48 : w;
      })), 16), end: parseInt(EA.apply(void 0, t.map(function(w) {
        return w === 63 ? 70 : w;
      })), 16) };
    var g = parseInt(EA.apply(void 0, t), 16);
    if (this.peekCodePoint(0) === GA && Pt(this.peekCodePoint(1))) {
      this.consumeCodePoint(), r = this.consumeCodePoint();
      for (var p = []; Pt(r) && p.length < 6; )
        p.push(r), r = this.consumeCodePoint();
      return { type: 30, start: g, end: parseInt(EA.apply(void 0, p), 16) };
    }
    return { type: 30, start: g, end: g };
  }, e.prototype.consumeIdentLikeToken = function() {
    var t = this.consumeName();
    return t.toLowerCase() === "url" && this.peekCodePoint(0) === 40 ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === 40 ? (this.consumeCodePoint(), { type: 19, value: t }) : { type: 20, value: t };
  }, e.prototype.consumeUrlToken = function() {
    var t = [];
    if (this.consumeWhiteSpace(), this.peekCodePoint(0) === it)
      return { type: 22, value: "" };
    var r = this.peekCodePoint(0);
    if (r === 39 || r === 34) {
      var c = this.consumeStringToken(this.consumeCodePoint());
      return c.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === it || this.peekCodePoint(0) === 41) ? (this.consumeCodePoint(), { type: 22, value: c.value }) : (this.consumeBadUrlRemnants(), Xe);
    }
    for (; ; ) {
      var g = this.consumeCodePoint();
      if (g === it || g === 41)
        return { type: 22, value: EA.apply(void 0, t) };
      if (Ge(g))
        return this.consumeWhiteSpace(), this.peekCodePoint(0) === it || this.peekCodePoint(0) === 41 ? (this.consumeCodePoint(), { type: 22, value: EA.apply(void 0, t) }) : (this.consumeBadUrlRemnants(), Xe);
      if (g === 34 || g === 39 || g === 40 || Ec(g))
        return this.consumeBadUrlRemnants(), Xe;
      if (g === 92) {
        if (!Ct(g, this.peekCodePoint(0)))
          return this.consumeBadUrlRemnants(), Xe;
        t.push(this.consumeEscapedCodePoint());
      } else
        t.push(g);
    }
  }, e.prototype.consumeWhiteSpace = function() {
    for (; Ge(this.peekCodePoint(0)); )
      this.consumeCodePoint();
  }, e.prototype.consumeBadUrlRemnants = function() {
    for (; ; ) {
      var t = this.consumeCodePoint();
      if (t === 41 || t === it)
        return;
      Ct(t, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
    }
  }, e.prototype.consumeStringSlice = function(t) {
    for (var r = ""; t > 0; ) {
      var c = Math.min(5e4, t);
      r += EA.apply(void 0, this._value.splice(0, c)), t -= c;
    }
    return this._value.shift(), r;
  }, e.prototype.consumeStringToken = function(t) {
    for (var r = "", c = 0; ; ) {
      var g = this._value[c];
      if (g === it || g === void 0 || g === t)
        return { type: 0, value: r += this.consumeStringSlice(c) };
      if (g === 10)
        return this._value.splice(0, c), Kc;
      if (g === 92) {
        var p = this._value[c + 1];
        p !== it && p !== void 0 && (p === 10 ? (r += this.consumeStringSlice(c), c = -1, this._value.shift()) : Ct(g, p) && (r += this.consumeStringSlice(c), r += EA(this.consumeEscapedCodePoint()), c = -1));
      }
      c++;
    }
  }, e.prototype.consumeNumber = function() {
    var t = [], r = 4, c = this.peekCodePoint(0);
    for (c !== It && c !== GA || t.push(this.consumeCodePoint()); jA(this.peekCodePoint(0)); )
      t.push(this.consumeCodePoint());
    c = this.peekCodePoint(0);
    var g = this.peekCodePoint(1);
    if (c === 46 && jA(g))
      for (t.push(this.consumeCodePoint(), this.consumeCodePoint()), r = 8; jA(this.peekCodePoint(0)); )
        t.push(this.consumeCodePoint());
    c = this.peekCodePoint(0), g = this.peekCodePoint(1);
    var p = this.peekCodePoint(2);
    if ((c === 69 || c === 101) && ((g === It || g === GA) && jA(p) || jA(g)))
      for (t.push(this.consumeCodePoint(), this.consumeCodePoint()), r = 8; jA(this.peekCodePoint(0)); )
        t.push(this.consumeCodePoint());
    return [_c(t), r];
  }, e.prototype.consumeNumericToken = function() {
    var t = this.consumeNumber(), r = t[0], c = t[1], g = this.peekCodePoint(0), p = this.peekCodePoint(1), w = this.peekCodePoint(2);
    return Ne(g, p, w) ? { type: 15, number: r, flags: c, unit: this.consumeName() } : g === 37 ? (this.consumeCodePoint(), { type: 16, number: r, flags: c }) : { type: 17, number: r, flags: c };
  }, e.prototype.consumeEscapedCodePoint = function() {
    var t = this.consumeCodePoint();
    if (Pt(t)) {
      for (var r = EA(t); Pt(this.peekCodePoint(0)) && r.length < 6; )
        r += EA(this.consumeCodePoint());
      Ge(this.peekCodePoint(0)) && this.consumeCodePoint();
      var c = parseInt(r, 16);
      return c === 0 || function(g) {
        return g >= 55296 && g <= 57343;
      }(c) || c > 1114111 ? 65533 : c;
    }
    return t === it ? 65533 : t;
  }, e.prototype.consumeName = function() {
    for (var t = ""; ; ) {
      var r = this.consumeCodePoint();
      if (ns(r))
        t += EA(r);
      else {
        if (!Ct(r, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(r), t;
        t += EA(this.consumeEscapedCodePoint());
      }
    }
  }, e;
}(), wo = function() {
  function e(t) {
    this._tokens = t;
  }
  return e.create = function(t) {
    var r = new Bo();
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
    for (var r = { type: t, values: [] }, c = this.consumeToken(); ; ) {
      if (c.type === 32 || Jc(c, t))
        return r;
      this.reconsumeToken(c), r.values.push(this.consumeComponentValue()), c = this.consumeToken();
    }
  }, e.prototype.consumeFunction = function(t) {
    for (var r = { name: t.value, values: [], type: 18 }; ; ) {
      var c = this.consumeToken();
      if (c.type === 32 || c.type === 3)
        return r;
      this.reconsumeToken(c), r.values.push(this.consumeComponentValue());
    }
  }, e.prototype.consumeToken = function() {
    var t = this._tokens.shift();
    return t === void 0 ? xr : t;
  }, e.prototype.reconsumeToken = function(t) {
    this._tokens.unshift(t);
  }, e;
}(), Fe = function(e) {
  return e.type === 15;
}, Nt = function(e) {
  return e.type === 17;
}, CA = function(e) {
  return e.type === 20;
}, zc = function(e) {
  return e.type === 0;
}, Ur = function(e, t) {
  return CA(e) && e.value === t;
}, ss = function(e) {
  return e.type !== 31;
}, $t = function(e) {
  return e.type !== 31 && e.type !== 4;
}, nt = function(e) {
  var t = [], r = [];
  return e.forEach(function(c) {
    if (c.type === 4) {
      if (r.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      return t.push(r), void (r = []);
    }
    c.type !== 31 && r.push(c);
  }), r.length && t.push(r), t;
}, Jc = function(e, t) {
  return t === 11 && e.type === 12 || t === 28 && e.type === 29 || t === 2 && e.type === 3;
}, xt = function(e) {
  return e.type === 17 || e.type === 15;
}, TA = function(e) {
  return e.type === 16 || xt(e);
}, mo = function(e) {
  return e.length > 1 ? [e[0], e[1]] : [e[0]];
}, PA = { type: 17, number: 0, flags: 4 }, Jr = { type: 16, number: 50, flags: 4 }, yt = { type: 16, number: 100, flags: 4 }, fe = function(e, t, r) {
  var c = e[0], g = e[1];
  return [yA(c, t), yA(g !== void 0 ? g : c, r)];
}, yA = function(e, t) {
  if (e.type === 16)
    return e.number / 100 * t;
  if (Fe(e))
    switch (e.unit) {
      case "rem":
      case "em":
        return 16 * e.number;
      default:
        return e.number;
    }
  return e.number;
}, Co = "grad", vo = "turn", Si = function(e, t) {
  if (t.type === 15)
    switch (t.unit) {
      case "deg":
        return Math.PI * t.number / 180;
      case Co:
        return Math.PI / 200 * t.number;
      case "rad":
        return t.number;
      case vo:
        return 2 * Math.PI * t.number;
    }
  throw new Error("Unsupported angle type");
}, yo = function(e) {
  return e.type === 15 && (e.unit === "deg" || e.unit === Co || e.unit === "rad" || e.unit === vo);
}, bo = function(e) {
  switch (e.filter(CA).map(function(t) {
    return t.value;
  }).join(" ")) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [PA, PA];
    case "to top":
    case "bottom":
      return qA(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [PA, yt];
    case "to right":
    case "left":
      return qA(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [yt, yt];
    case "to bottom":
    case "top":
      return qA(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [yt, PA];
    case "to left":
    case "right":
      return qA(270);
  }
  return 0;
}, qA = function(e) {
  return Math.PI * e / 180;
}, Qt = function(e, t) {
  if (t.type === 18) {
    var r = qc[t.name];
    if (r === void 0)
      throw new Error('Attempting to parse an unsupported color function "' + t.name + '"');
    return r(e, t.values);
  }
  if (t.type === 5) {
    if (t.value.length === 3) {
      var c = t.value.substring(0, 1), g = t.value.substring(1, 2), p = t.value.substring(2, 3);
      return bt(parseInt(c + c, 16), parseInt(g + g, 16), parseInt(p + p, 16), 1);
    }
    if (t.value.length === 4) {
      c = t.value.substring(0, 1), g = t.value.substring(1, 2), p = t.value.substring(2, 3);
      var w = t.value.substring(3, 4);
      return bt(parseInt(c + c, 16), parseInt(g + g, 16), parseInt(p + p, 16), parseInt(w + w, 16) / 255);
    }
    if (t.value.length === 6)
      return c = t.value.substring(0, 2), g = t.value.substring(2, 4), p = t.value.substring(4, 6), bt(parseInt(c, 16), parseInt(g, 16), parseInt(p, 16), 1);
    if (t.value.length === 8)
      return c = t.value.substring(0, 2), g = t.value.substring(2, 4), p = t.value.substring(4, 6), w = t.value.substring(6, 8), bt(parseInt(c, 16), parseInt(g, 16), parseInt(p, 16), parseInt(w, 16) / 255);
  }
  if (t.type === 20) {
    var C = Bt[t.value.toUpperCase()];
    if (C !== void 0)
      return C;
  }
  return Bt.TRANSPARENT;
}, Ft = function(e) {
  return !(255 & e);
}, HA = function(e) {
  var t = 255 & e, r = 255 & e >> 8, c = 255 & e >> 16, g = 255 & e >> 24;
  return t < 255 ? "rgba(" + g + "," + c + "," + r + "," + t / 255 + ")" : "rgb(" + g + "," + c + "," + r + ")";
}, bt = function(e, t, r, c) {
  return (e << 24 | t << 16 | r << 8 | Math.round(255 * c)) >>> 0;
}, os = function(e, t) {
  if (e.type === 17)
    return e.number;
  if (e.type === 16) {
    var r = t === 3 ? 1 : 255;
    return t === 3 ? e.number / 100 * r : Math.round(e.number / 100 * r);
  }
  return 0;
}, as = function(e, t) {
  var r = t.filter($t);
  if (r.length === 3) {
    var c = r.map(os), g = c[0], p = c[1], w = c[2];
    return bt(g, p, w, 1);
  }
  if (r.length === 4) {
    var C = r.map(os), b = (g = C[0], p = C[1], w = C[2], C[3]);
    return bt(g, p, w, b);
  }
  return 0;
};
function qi(e, t, r) {
  return r < 0 && (r += 1), r >= 1 && (r -= 1), r < 1 / 6 ? (t - e) * r * 6 + e : r < 0.5 ? t : r < 2 / 3 ? 6 * (t - e) * (2 / 3 - r) + e : e;
}
var cs = function(e, t) {
  var r = t.filter($t), c = r[0], g = r[1], p = r[2], w = r[3], C = (c.type === 17 ? qA(c.number) : Si(e, c)) / (2 * Math.PI), b = TA(g) ? g.number / 100 : 0, Q = TA(p) ? p.number / 100 : 0, y = w !== void 0 && TA(w) ? yA(w, 1) : 1;
  if (b === 0)
    return bt(255 * Q, 255 * Q, 255 * Q, 1);
  var E = Q <= 0.5 ? Q * (b + 1) : Q + b - Q * b, T = 2 * Q - E, P = qi(T, E, C + 1 / 3), O = qi(T, E, C), K = qi(T, E, C - 1 / 3);
  return bt(255 * P, 255 * O, 255 * K, y);
}, qc = { hsl: cs, hsla: cs, rgb: as, rgba: as }, Ce = function(e, t) {
  return Qt(e, wo.create(t).parseComponentValue());
}, Bt = { ALICEBLUE: 4042850303, ANTIQUEWHITE: 4209760255, AQUA: 16777215, AQUAMARINE: 2147472639, AZURE: 4043309055, BEIGE: 4126530815, BISQUE: 4293182719, BLACK: 255, BLANCHEDALMOND: 4293643775, BLUE: 65535, BLUEVIOLET: 2318131967, BROWN: 2771004159, BURLYWOOD: 3736635391, CADETBLUE: 1604231423, CHARTREUSE: 2147418367, CHOCOLATE: 3530104575, CORAL: 4286533887, CORNFLOWERBLUE: 1687547391, CORNSILK: 4294499583, CRIMSON: 3692313855, CYAN: 16777215, DARKBLUE: 35839, DARKCYAN: 9145343, DARKGOLDENROD: 3095837695, DARKGRAY: 2846468607, DARKGREEN: 6553855, DARKGREY: 2846468607, DARKKHAKI: 3182914559, DARKMAGENTA: 2332068863, DARKOLIVEGREEN: 1433087999, DARKORANGE: 4287365375, DARKORCHID: 2570243327, DARKRED: 2332033279, DARKSALMON: 3918953215, DARKSEAGREEN: 2411499519, DARKSLATEBLUE: 1211993087, DARKSLATEGRAY: 793726975, DARKSLATEGREY: 793726975, DARKTURQUOISE: 13554175, DARKVIOLET: 2483082239, DEEPPINK: 4279538687, DEEPSKYBLUE: 12582911, DIMGRAY: 1768516095, DIMGREY: 1768516095, DODGERBLUE: 512819199, FIREBRICK: 2988581631, FLORALWHITE: 4294635775, FORESTGREEN: 579543807, FUCHSIA: 4278255615, GAINSBORO: 3705462015, GHOSTWHITE: 4177068031, GOLD: 4292280575, GOLDENROD: 3668254975, GRAY: 2155905279, GREEN: 8388863, GREENYELLOW: 2919182335, GREY: 2155905279, HONEYDEW: 4043305215, HOTPINK: 4285117695, INDIANRED: 3445382399, INDIGO: 1258324735, IVORY: 4294963455, KHAKI: 4041641215, LAVENDER: 3873897215, LAVENDERBLUSH: 4293981695, LAWNGREEN: 2096890111, LEMONCHIFFON: 4294626815, LIGHTBLUE: 2916673279, LIGHTCORAL: 4034953471, LIGHTCYAN: 3774873599, LIGHTGOLDENRODYELLOW: 4210742015, LIGHTGRAY: 3553874943, LIGHTGREEN: 2431553791, LIGHTGREY: 3553874943, LIGHTPINK: 4290167295, LIGHTSALMON: 4288707327, LIGHTSEAGREEN: 548580095, LIGHTSKYBLUE: 2278488831, LIGHTSLATEGRAY: 2005441023, LIGHTSLATEGREY: 2005441023, LIGHTSTEELBLUE: 2965692159, LIGHTYELLOW: 4294959359, LIME: 16711935, LIMEGREEN: 852308735, LINEN: 4210091775, MAGENTA: 4278255615, MAROON: 2147483903, MEDIUMAQUAMARINE: 1724754687, MEDIUMBLUE: 52735, MEDIUMORCHID: 3126187007, MEDIUMPURPLE: 2473647103, MEDIUMSEAGREEN: 1018393087, MEDIUMSLATEBLUE: 2070474495, MEDIUMSPRINGGREEN: 16423679, MEDIUMTURQUOISE: 1221709055, MEDIUMVIOLETRED: 3340076543, MIDNIGHTBLUE: 421097727, MINTCREAM: 4127193855, MISTYROSE: 4293190143, MOCCASIN: 4293178879, NAVAJOWHITE: 4292783615, NAVY: 33023, OLDLACE: 4260751103, OLIVE: 2155872511, OLIVEDRAB: 1804477439, ORANGE: 4289003775, ORANGERED: 4282712319, ORCHID: 3664828159, PALEGOLDENROD: 4008225535, PALEGREEN: 2566625535, PALETURQUOISE: 2951671551, PALEVIOLETRED: 3681588223, PAPAYAWHIP: 4293907967, PEACHPUFF: 4292524543, PERU: 3448061951, PINK: 4290825215, PLUM: 3718307327, POWDERBLUE: 2967529215, PURPLE: 2147516671, REBECCAPURPLE: 1714657791, RED: 4278190335, ROSYBROWN: 3163525119, ROYALBLUE: 1097458175, SADDLEBROWN: 2336560127, SALMON: 4202722047, SANDYBROWN: 4104413439, SEAGREEN: 780883967, SEASHELL: 4294307583, SIENNA: 2689740287, SILVER: 3233857791, SKYBLUE: 2278484991, SLATEBLUE: 1784335871, SLATEGRAY: 1887473919, SLATEGREY: 1887473919, SNOW: 4294638335, SPRINGGREEN: 16744447, STEELBLUE: 1182971135, TAN: 3535047935, TEAL: 8421631, THISTLE: 3636451583, TOMATO: 4284696575, TRANSPARENT: 0, TURQUOISE: 1088475391, VIOLET: 4001558271, WHEAT: 4125012991, WHITE: 4294967295, WHITESMOKE: 4126537215, YELLOW: 4294902015, YELLOWGREEN: 2597139199 }, Zc = { name: "background-clip", initialValue: "border-box", prefix: !1, type: 1, parse: function(e, t) {
  return t.map(function(r) {
    if (CA(r))
      switch (r.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, $c = { name: "background-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, gi = function(e, t) {
  var r = Qt(e, t[0]), c = t[1];
  return c && TA(c) ? { color: r, stop: c } : { color: r, stop: null };
}, ls = function(e, t) {
  var r = e[0], c = e[e.length - 1];
  r.stop === null && (r.stop = PA), c.stop === null && (c.stop = yt);
  for (var g = [], p = 0, w = 0; w < e.length; w++) {
    var C = e[w].stop;
    if (C !== null) {
      var b = yA(C, t);
      b > p ? g.push(b) : g.push(p), p = b;
    } else
      g.push(null);
  }
  var Q = null;
  for (w = 0; w < g.length; w++) {
    var y = g[w];
    if (y === null)
      Q === null && (Q = w);
    else if (Q !== null) {
      for (var E = w - Q, T = (y - g[Q - 1]) / (E + 1), P = 1; P <= E; P++)
        g[Q + P - 1] = T * P;
      Q = null;
    }
  }
  return e.map(function(O, K) {
    return { color: O.color, stop: Math.max(Math.min(1, g[K] / t), 0) };
  });
}, Al = function(e, t, r) {
  var c = typeof e == "number" ? e : function(y, E, T) {
    var P = E / 2, O = T / 2, K = yA(y[0], E) - P, B = O - yA(y[1], T);
    return (Math.atan2(B, K) + 2 * Math.PI) % (2 * Math.PI);
  }(e, t, r), g = Math.abs(t * Math.sin(c)) + Math.abs(r * Math.cos(c)), p = t / 2, w = r / 2, C = g / 2, b = Math.sin(c - Math.PI / 2) * C, Q = Math.cos(c - Math.PI / 2) * C;
  return [g, p - Q, p + Q, w - b, w + b];
}, $A = function(e, t) {
  return Math.sqrt(e * e + t * t);
}, hs = function(e, t, r, c, g) {
  return [[0, 0], [0, t], [e, 0], [e, t]].reduce(function(p, w) {
    var C = w[0], b = w[1], Q = $A(r - C, c - b);
    return (g ? Q < p.optimumDistance : Q > p.optimumDistance) ? { optimumCorner: w, optimumDistance: Q } : p;
  }, { optimumDistance: g ? 1 / 0 : -1 / 0, optimumCorner: null }).optimumCorner;
}, We = function(e, t) {
  var r = qA(180), c = [];
  return nt(t).forEach(function(g, p) {
    if (p === 0) {
      var w = g[0];
      if (w.type === 20 && ["top", "left", "right", "bottom"].indexOf(w.value) !== -1)
        return void (r = bo(g));
      if (yo(w))
        return void (r = (Si(e, w) + qA(270)) % qA(360));
    }
    var C = gi(e, g);
    c.push(C);
  }), { angle: r, stops: c, type: 1 };
}, Qo = "closest-side", Fo = "farthest-side", xo = "closest-corner", Uo = "farthest-corner", Eo = "circle", _o = "ellipse", So = "cover", ko = "contain", Ye = function(e, t) {
  var r = 0, c = 3, g = [], p = [];
  return nt(t).forEach(function(w, C) {
    var b = !0;
    if (C === 0 ? b = w.reduce(function(y, E) {
      if (CA(E))
        switch (E.value) {
          case "center":
            return p.push(Jr), !1;
          case "top":
          case "left":
            return p.push(PA), !1;
          case "right":
          case "bottom":
            return p.push(yt), !1;
        }
      else if (TA(E) || xt(E))
        return p.push(E), !1;
      return y;
    }, b) : C === 1 && (b = w.reduce(function(y, E) {
      if (CA(E))
        switch (E.value) {
          case Eo:
            return r = 0, !1;
          case _o:
            return r = 1, !1;
          case ko:
          case Qo:
            return c = 0, !1;
          case Fo:
            return c = 1, !1;
          case xo:
            return c = 2, !1;
          case So:
          case Uo:
            return c = 3, !1;
        }
      else if (xt(E) || TA(E))
        return Array.isArray(c) || (c = []), c.push(E), !1;
      return y;
    }, b)), b) {
      var Q = gi(e, w);
      g.push(Q);
    }
  }), { size: c, shape: r, stops: g, position: p, type: 2 };
}, qr = function(e, t) {
  if (t.type === 22) {
    var r = { url: t.value, type: 0 };
    return e.cache.addImage(t.value), r;
  }
  if (t.type === 18) {
    var c = To[t.name];
    if (c === void 0)
      throw new Error('Attempting to parse an unsupported image function "' + t.name + '"');
    return c(e, t.values);
  }
  throw new Error("Unsupported image type " + t.type);
}, zt, To = { "linear-gradient": function(e, t) {
  var r = qA(180), c = [];
  return nt(t).forEach(function(g, p) {
    if (p === 0) {
      var w = g[0];
      if (w.type === 20 && w.value === "to")
        return void (r = bo(g));
      if (yo(w))
        return void (r = Si(e, w));
    }
    var C = gi(e, g);
    c.push(C);
  }), { angle: r, stops: c, type: 1 };
}, "-moz-linear-gradient": We, "-ms-linear-gradient": We, "-o-linear-gradient": We, "-webkit-linear-gradient": We, "radial-gradient": function(e, t) {
  var r = 0, c = 3, g = [], p = [];
  return nt(t).forEach(function(w, C) {
    var b = !0;
    if (C === 0) {
      var Q = !1;
      b = w.reduce(function(E, T) {
        if (Q)
          if (CA(T))
            switch (T.value) {
              case "center":
                return p.push(Jr), E;
              case "top":
              case "left":
                return p.push(PA), E;
              case "right":
              case "bottom":
                return p.push(yt), E;
            }
          else
            (TA(T) || xt(T)) && p.push(T);
        else if (CA(T))
          switch (T.value) {
            case Eo:
              return r = 0, !1;
            case _o:
              return r = 1, !1;
            case "at":
              return Q = !0, !1;
            case Qo:
              return c = 0, !1;
            case So:
            case Fo:
              return c = 1, !1;
            case ko:
            case xo:
              return c = 2, !1;
            case Uo:
              return c = 3, !1;
          }
        else if (xt(T) || TA(T))
          return Array.isArray(c) || (c = []), c.push(T), !1;
        return E;
      }, b);
    }
    if (b) {
      var y = gi(e, w);
      g.push(y);
    }
  }), { size: c, shape: r, stops: g, position: p, type: 2 };
}, "-moz-radial-gradient": Ye, "-ms-radial-gradient": Ye, "-o-radial-gradient": Ye, "-webkit-radial-gradient": Ye, "-webkit-gradient": function(e, t) {
  var r = qA(180), c = [], g = 1;
  return nt(t).forEach(function(p, w) {
    var C = p[0];
    if (w === 0) {
      if (CA(C) && C.value === "linear")
        return void (g = 1);
      if (CA(C) && C.value === "radial")
        return void (g = 2);
    }
    if (C.type === 18) {
      if (C.name === "from") {
        var b = Qt(e, C.values[0]);
        c.push({ stop: PA, color: b });
      } else if (C.name === "to")
        b = Qt(e, C.values[0]), c.push({ stop: yt, color: b });
      else if (C.name === "color-stop") {
        var Q = C.values.filter($t);
        if (Q.length === 2) {
          b = Qt(e, Q[1]);
          var y = Q[0];
          Nt(y) && c.push({ stop: { type: 16, number: 100 * y.number, flags: y.flags }, color: b });
        }
      }
    }
  }), g === 1 ? { angle: (r + qA(180)) % qA(360), stops: c, type: g } : { size: 3, shape: 0, stops: c, position: [], type: g };
} }, tl = { name: "background-image", initialValue: "none", type: 1, prefix: !1, parse: function(e, t) {
  if (t.length === 0)
    return [];
  var r = t[0];
  return r.type === 20 && r.value === "none" ? [] : t.filter(function(c) {
    return $t(c) && function(g) {
      return !(g.type === 20 && g.value === "none" || g.type === 18 && !To[g.name]);
    }(c);
  }).map(function(c) {
    return qr(e, c);
  });
} }, el = { name: "background-origin", initialValue: "border-box", prefix: !1, type: 1, parse: function(e, t) {
  return t.map(function(r) {
    if (CA(r))
      switch (r.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, il = { name: "background-position", initialValue: "0% 0%", type: 1, prefix: !1, parse: function(e, t) {
  return nt(t).map(function(r) {
    return r.filter(TA);
  }).map(mo);
} }, rl = { name: "background-repeat", initialValue: "repeat", prefix: !1, type: 1, parse: function(e, t) {
  return nt(t).map(function(r) {
    return r.filter(CA).map(function(c) {
      return c.value;
    }).join(" ");
  }).map(nl);
} }, nl = function(e) {
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
})(zt || (zt = {}));
var fi, sl = { name: "background-size", initialValue: "0", prefix: !1, type: 1, parse: function(e, t) {
  return nt(t).map(function(r) {
    return r.filter(ol);
  });
} }, ol = function(e) {
  return CA(e) || TA(e);
}, ki = function(e) {
  return { name: "border-" + e + "-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" };
}, al = ki("top"), cl = ki("right"), ll = ki("bottom"), hl = ki("left"), Ti = function(e) {
  return { name: "border-radius-" + e, initialValue: "0 0", prefix: !1, type: 1, parse: function(t, r) {
    return mo(r.filter(TA));
  } };
}, ul = Ti("top-left"), dl = Ti("top-right"), gl = Ti("bottom-right"), fl = Ti("bottom-left"), Ii = function(e) {
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
}, pl = Ii("top"), Bl = Ii("right"), wl = Ii("bottom"), ml = Ii("left"), Hi = function(e) {
  return { name: "border-" + e + "-width", initialValue: "0", type: 0, prefix: !1, parse: function(t, r) {
    return Fe(r) ? r.number : 0;
  } };
}, Cl = Hi("top"), vl = Hi("right"), yl = Hi("bottom"), bl = Hi("left"), Ql = { name: "color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, Fl = { name: "direction", initialValue: "ltr", prefix: !1, type: 2, parse: function(e, t) {
  return t === "rtl" ? 1 : 0;
} }, xl = { name: "display", initialValue: "inline-block", prefix: !1, type: 1, parse: function(e, t) {
  return t.filter(CA).reduce(function(r, c) {
    return r | Ul(c.value);
  }, 0);
} }, Ul = function(e) {
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
}, El = { name: "float", initialValue: "none", prefix: !1, type: 2, parse: function(e, t) {
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
} }, _l = { name: "letter-spacing", initialValue: "0", prefix: !1, type: 0, parse: function(e, t) {
  return t.type === 20 && t.value === "normal" ? 0 : t.type === 17 || t.type === 15 ? t.number : 0;
} };
(function(e) {
  e.NORMAL = "normal", e.STRICT = "strict";
})(fi || (fi = {}));
var ve, Sl = { name: "line-break", initialValue: "normal", prefix: !1, type: 2, parse: function(e, t) {
  return t === "strict" ? fi.STRICT : fi.NORMAL;
} }, kl = { name: "line-height", initialValue: "normal", prefix: !1, type: 4 }, us = function(e, t) {
  return CA(e) && e.value === "normal" ? 1.2 * t : e.type === 17 ? t * e.number : TA(e) ? yA(e, t) : t;
}, Tl = { name: "list-style-image", initialValue: "none", type: 0, prefix: !1, parse: function(e, t) {
  return t.type === 20 && t.value === "none" ? null : qr(e, t);
} }, Il = { name: "list-style-position", initialValue: "outside", prefix: !1, type: 2, parse: function(e, t) {
  return t === "inside" ? 0 : 1;
} }, Er = { name: "list-style-type", initialValue: "none", prefix: !1, type: 2, parse: function(e, t) {
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
} }, Oi = function(e) {
  return { name: "margin-" + e, initialValue: "0", prefix: !1, type: 4 };
}, Hl = Oi("top"), Ol = Oi("right"), Ll = Oi("bottom"), Dl = Oi("left"), Ml = { name: "overflow", initialValue: "visible", prefix: !1, type: 1, parse: function(e, t) {
  return t.filter(CA).map(function(r) {
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
} }, Pl = { name: "overflow-wrap", initialValue: "normal", prefix: !1, type: 2, parse: function(e, t) {
  return t === "break-word" ? "break-word" : "normal";
} }, Li = function(e) {
  return { name: "padding-" + e, initialValue: "0", prefix: !1, type: 3, format: "length-percentage" };
}, Rl = Li("top"), Kl = Li("right"), jl = Li("bottom"), Vl = Li("left"), Gl = { name: "text-align", initialValue: "left", prefix: !1, type: 2, parse: function(e, t) {
  switch (t) {
    case "right":
      return 2;
    case "center":
    case "justify":
      return 1;
    default:
      return 0;
  }
} }, Nl = { name: "position", initialValue: "static", prefix: !1, type: 2, parse: function(e, t) {
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
} }, Xl = { name: "text-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(e, t) {
  return t.length === 1 && Ur(t[0], "none") ? [] : nt(t).map(function(r) {
    for (var c = { color: Bt.TRANSPARENT, offsetX: PA, offsetY: PA, blur: PA }, g = 0, p = 0; p < r.length; p++) {
      var w = r[p];
      xt(w) ? (g === 0 ? c.offsetX = w : g === 1 ? c.offsetY = w : c.blur = w, g++) : c.color = Qt(e, w);
    }
    return c;
  });
} }, Wl = { name: "text-transform", initialValue: "none", prefix: !1, type: 2, parse: function(e, t) {
  switch (t) {
    case "uppercase":
      return 2;
    case "lowercase":
      return 1;
    case "capitalize":
      return 3;
  }
  return 0;
} }, Yl = { name: "transform", initialValue: "none", prefix: !0, type: 0, parse: function(e, t) {
  if (t.type === 20 && t.value === "none")
    return null;
  if (t.type === 18) {
    var r = zl[t.name];
    if (r === void 0)
      throw new Error('Attempting to parse an unsupported transform function "' + t.name + '"');
    return r(t.values);
  }
  return null;
} }, zl = { matrix: function(e) {
  var t = e.filter(function(r) {
    return r.type === 17;
  }).map(function(r) {
    return r.number;
  });
  return t.length === 6 ? t : null;
}, matrix3d: function(e) {
  var t = e.filter(function(b) {
    return b.type === 17;
  }).map(function(b) {
    return b.number;
  }), r = t[0], c = t[1];
  t[2], t[3];
  var g = t[4], p = t[5];
  t[6], t[7], t[8], t[9], t[10], t[11];
  var w = t[12], C = t[13];
  return t[14], t[15], t.length === 16 ? [r, c, g, p, w, C] : null;
} }, ds = { type: 16, number: 50, flags: 4 }, Jl = [ds, ds], ql = { name: "transform-origin", initialValue: "50% 50%", prefix: !0, type: 1, parse: function(e, t) {
  var r = t.filter(TA);
  return r.length !== 2 ? Jl : [r[0], r[1]];
} }, Zl = { name: "visible", initialValue: "none", prefix: !1, type: 2, parse: function(e, t) {
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
})(ve || (ve = {}));
for (var $l = { name: "word-break", initialValue: "normal", prefix: !1, type: 2, parse: function(e, t) {
  switch (t) {
    case "break-all":
      return ve.BREAK_ALL;
    case "keep-all":
      return ve.KEEP_ALL;
    default:
      return ve.NORMAL;
  }
} }, Ah = { name: "z-index", initialValue: "auto", prefix: !1, type: 0, parse: function(e, t) {
  if (t.type === 20)
    return { auto: !0, order: 0 };
  if (Nt(t))
    return { auto: !1, order: t.number };
  throw new Error("Invalid z-index number parsed");
} }, gs = function(e, t) {
  if (t.type === 15)
    switch (t.unit.toLowerCase()) {
      case "s":
        return 1e3 * t.number;
      case "ms":
        return t.number;
    }
  throw new Error("Unsupported time type");
}, th = { name: "opacity", initialValue: "1", type: 0, prefix: !1, parse: function(e, t) {
  return Nt(t) ? t.number : 1;
} }, eh = { name: "text-decoration-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, ih = { name: "text-decoration-line", initialValue: "none", prefix: !1, type: 1, parse: function(e, t) {
  return t.filter(CA).map(function(r) {
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
} }, rh = { name: "font-family", initialValue: "", prefix: !1, type: 1, parse: function(e, t) {
  var r = [], c = [];
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
        c.push(r.join(" ")), r.length = 0;
    }
  }), r.length && c.push(r.join(" ")), c.map(function(g) {
    return g.indexOf(" ") === -1 ? g : "'" + g + "'";
  });
} }, nh = { name: "font-size", initialValue: "0", prefix: !1, type: 3, format: "length" }, sh = { name: "font-weight", initialValue: "normal", type: 0, prefix: !1, parse: function(e, t) {
  return Nt(t) ? t.number : CA(t) && t.value === "bold" ? 700 : 400;
} }, oh = { name: "font-variant", initialValue: "none", type: 1, prefix: !1, parse: function(e, t) {
  return t.filter(CA).map(function(r) {
    return r.value;
  });
} }, ah = { name: "font-style", initialValue: "normal", prefix: !1, type: 2, parse: function(e, t) {
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
}, ch = { name: "content", initialValue: "none", type: 1, prefix: !1, parse: function(e, t) {
  if (t.length === 0)
    return [];
  var r = t[0];
  return r.type === 20 && r.value === "none" ? [] : t;
} }, lh = { name: "counter-increment", initialValue: "none", prefix: !0, type: 1, parse: function(e, t) {
  if (t.length === 0)
    return null;
  var r = t[0];
  if (r.type === 20 && r.value === "none")
    return null;
  for (var c = [], g = t.filter(ss), p = 0; p < g.length; p++) {
    var w = g[p], C = g[p + 1];
    if (w.type === 20) {
      var b = C && Nt(C) ? C.number : 1;
      c.push({ counter: w.value, increment: b });
    }
  }
  return c;
} }, hh = { name: "counter-reset", initialValue: "none", prefix: !0, type: 1, parse: function(e, t) {
  if (t.length === 0)
    return [];
  for (var r = [], c = t.filter(ss), g = 0; g < c.length; g++) {
    var p = c[g], w = c[g + 1];
    if (CA(p) && p.value !== "none") {
      var C = w && Nt(w) ? w.number : 0;
      r.push({ counter: p.value, reset: C });
    }
  }
  return r;
} }, uh = { name: "duration", initialValue: "0s", prefix: !1, type: 1, parse: function(e, t) {
  return t.filter(Fe).map(function(r) {
    return gs(e, r);
  });
} }, dh = { name: "quotes", initialValue: "none", prefix: !0, type: 1, parse: function(e, t) {
  if (t.length === 0)
    return null;
  var r = t[0];
  if (r.type === 20 && r.value === "none")
    return null;
  var c = [], g = t.filter(zc);
  if (g.length % 2 != 0)
    return null;
  for (var p = 0; p < g.length; p += 2) {
    var w = g[p].value, C = g[p + 1].value;
    c.push({ open: w, close: C });
  }
  return c;
} }, fs = function(e, t, r) {
  if (!e)
    return "";
  var c = e[Math.min(t, e.length - 1)];
  return c ? r ? c.open : c.close : "";
}, gh = { name: "box-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(e, t) {
  return t.length === 1 && Ur(t[0], "none") ? [] : nt(t).map(function(r) {
    for (var c = { color: 255, offsetX: PA, offsetY: PA, blur: PA, spread: PA, inset: !1 }, g = 0, p = 0; p < r.length; p++) {
      var w = r[p];
      Ur(w, "inset") ? c.inset = !0 : xt(w) ? (g === 0 ? c.offsetX = w : g === 1 ? c.offsetY = w : g === 2 ? c.blur = w : c.spread = w, g++) : c.color = Qt(e, w);
    }
    return c;
  });
} }, fh = { name: "paint-order", initialValue: "normal", prefix: !1, type: 1, parse: function(e, t) {
  var r = [];
  return t.filter(CA).forEach(function(c) {
    switch (c.value) {
      case "stroke":
        r.push(1);
        break;
      case "fill":
        r.push(0);
        break;
      case "markers":
        r.push(2);
    }
  }), [0, 1, 2].forEach(function(c) {
    r.indexOf(c) === -1 && r.push(c);
  }), r;
} }, ph = { name: "-webkit-text-stroke-color", initialValue: "currentcolor", prefix: !1, type: 3, format: "color" }, Bh = { name: "-webkit-text-stroke-width", initialValue: "0", type: 0, prefix: !1, parse: function(e, t) {
  return Fe(t) ? t.number : 0;
} }, wh = function() {
  function e(t, r) {
    var c, g;
    this.animationDuration = cA(t, uh, r.animationDuration), this.backgroundClip = cA(t, Zc, r.backgroundClip), this.backgroundColor = cA(t, $c, r.backgroundColor), this.backgroundImage = cA(t, tl, r.backgroundImage), this.backgroundOrigin = cA(t, el, r.backgroundOrigin), this.backgroundPosition = cA(t, il, r.backgroundPosition), this.backgroundRepeat = cA(t, rl, r.backgroundRepeat), this.backgroundSize = cA(t, sl, r.backgroundSize), this.borderTopColor = cA(t, al, r.borderTopColor), this.borderRightColor = cA(t, cl, r.borderRightColor), this.borderBottomColor = cA(t, ll, r.borderBottomColor), this.borderLeftColor = cA(t, hl, r.borderLeftColor), this.borderTopLeftRadius = cA(t, ul, r.borderTopLeftRadius), this.borderTopRightRadius = cA(t, dl, r.borderTopRightRadius), this.borderBottomRightRadius = cA(t, gl, r.borderBottomRightRadius), this.borderBottomLeftRadius = cA(t, fl, r.borderBottomLeftRadius), this.borderTopStyle = cA(t, pl, r.borderTopStyle), this.borderRightStyle = cA(t, Bl, r.borderRightStyle), this.borderBottomStyle = cA(t, wl, r.borderBottomStyle), this.borderLeftStyle = cA(t, ml, r.borderLeftStyle), this.borderTopWidth = cA(t, Cl, r.borderTopWidth), this.borderRightWidth = cA(t, vl, r.borderRightWidth), this.borderBottomWidth = cA(t, yl, r.borderBottomWidth), this.borderLeftWidth = cA(t, bl, r.borderLeftWidth), this.boxShadow = cA(t, gh, r.boxShadow), this.color = cA(t, Ql, r.color), this.direction = cA(t, Fl, r.direction), this.display = cA(t, xl, r.display), this.float = cA(t, El, r.cssFloat), this.fontFamily = cA(t, rh, r.fontFamily), this.fontSize = cA(t, nh, r.fontSize), this.fontStyle = cA(t, ah, r.fontStyle), this.fontVariant = cA(t, oh, r.fontVariant), this.fontWeight = cA(t, sh, r.fontWeight), this.letterSpacing = cA(t, _l, r.letterSpacing), this.lineBreak = cA(t, Sl, r.lineBreak), this.lineHeight = cA(t, kl, r.lineHeight), this.listStyleImage = cA(t, Tl, r.listStyleImage), this.listStylePosition = cA(t, Il, r.listStylePosition), this.listStyleType = cA(t, Er, r.listStyleType), this.marginTop = cA(t, Hl, r.marginTop), this.marginRight = cA(t, Ol, r.marginRight), this.marginBottom = cA(t, Ll, r.marginBottom), this.marginLeft = cA(t, Dl, r.marginLeft), this.opacity = cA(t, th, r.opacity);
    var p = cA(t, Ml, r.overflow);
    this.overflowX = p[0], this.overflowY = p[p.length > 1 ? 1 : 0], this.overflowWrap = cA(t, Pl, r.overflowWrap), this.paddingTop = cA(t, Rl, r.paddingTop), this.paddingRight = cA(t, Kl, r.paddingRight), this.paddingBottom = cA(t, jl, r.paddingBottom), this.paddingLeft = cA(t, Vl, r.paddingLeft), this.paintOrder = cA(t, fh, r.paintOrder), this.position = cA(t, Nl, r.position), this.textAlign = cA(t, Gl, r.textAlign), this.textDecorationColor = cA(t, eh, (c = r.textDecorationColor) !== null && c !== void 0 ? c : r.color), this.textDecorationLine = cA(t, ih, (g = r.textDecorationLine) !== null && g !== void 0 ? g : r.textDecoration), this.textShadow = cA(t, Xl, r.textShadow), this.textTransform = cA(t, Wl, r.textTransform), this.transform = cA(t, Yl, r.transform), this.transformOrigin = cA(t, ql, r.transformOrigin), this.visibility = cA(t, Zl, r.visibility), this.webkitTextStrokeColor = cA(t, ph, r.webkitTextStrokeColor), this.webkitTextStrokeWidth = cA(t, Bh, r.webkitTextStrokeWidth), this.wordBreak = cA(t, $l, r.wordBreak), this.zIndex = cA(t, Ah, r.zIndex);
  }
  return e.prototype.isVisible = function() {
    return this.display > 0 && this.opacity > 0 && this.visibility === 0;
  }, e.prototype.isTransparent = function() {
    return Ft(this.backgroundColor);
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
}(), mh = function(e, t) {
  this.content = cA(e, ch, t.content), this.quotes = cA(e, dh, t.quotes);
}, ps = function(e, t) {
  this.counterIncrement = cA(e, lh, t.counterIncrement), this.counterReset = cA(e, hh, t.counterReset);
}, cA = function(e, t, r) {
  var c = new Bo(), g = r != null ? r.toString() : t.initialValue;
  c.write(g);
  var p = new wo(c.read());
  switch (t.type) {
    case 2:
      var w = p.parseComponentValue();
      return t.parse(e, CA(w) ? w.value : t.initialValue);
    case 0:
      return t.parse(e, p.parseComponentValue());
    case 1:
      return t.parse(e, p.parseComponentValues());
    case 4:
      return p.parseComponentValue();
    case 3:
      switch (t.format) {
        case "angle":
          return Si(e, p.parseComponentValue());
        case "color":
          return Qt(e, p.parseComponentValue());
        case "image":
          return qr(e, p.parseComponentValue());
        case "length":
          var C = p.parseComponentValue();
          return xt(C) ? C : PA;
        case "length-percentage":
          var b = p.parseComponentValue();
          return TA(b) ? b : PA;
        case "time":
          return gs(e, p.parseComponentValue());
      }
  }
}, _r = function(e, t) {
  var r = function(c) {
    switch (c.getAttribute("data-html2canvas-debug")) {
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
}, ot = function(e, t) {
  this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, _r(t, 3), this.styles = new wh(e, window.getComputedStyle(t, null)), Tr(t) && (this.styles.animationDuration.some(function(r) {
    return r > 0;
  }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = _i(this.context, t), _r(t, 4) && (this.flags |= 16);
}, Ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", pe = typeof Uint8Array > "u" ? [] : new Uint8Array(256), ze = 0; ze < 64; ze++)
  pe[Ch.charCodeAt(ze)] = ze;
for (var Bs = function(e, t, r) {
  return e.slice ? e.slice(t, r) : new Uint16Array(Array.prototype.slice.call(e, t, r));
}, vh = function() {
  function e(t, r, c, g, p, w) {
    this.initialValue = t, this.errorValue = r, this.highStart = c, this.highValueIndex = g, this.index = p, this.data = w;
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
}(), yh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bh = typeof Uint8Array > "u" ? [] : new Uint8Array(256), Je = 0; Je < 64; Je++)
  bh[yh.charCodeAt(Je)] = Je;
var ye, ws = 8, Zi = 9, ms = 11, Cs = 12, Qh = function() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var r = e.length;
  if (!r)
    return "";
  for (var c = [], g = -1, p = ""; ++g < r; ) {
    var w = e[g];
    w <= 65535 ? c.push(w) : (w -= 65536, c.push(55296 + (w >> 10), w % 1024 + 56320)), (g + 1 === r || c.length > 16384) && (p += String.fromCharCode.apply(String, c), c.length = 0);
  }
  return p;
}, Fh = function(e, t) {
  var r, c, g, p = function(y) {
    var E, T, P, O, K, B = 0.75 * y.length, tA = y.length, nA = 0;
    y[y.length - 1] === "=" && (B--, y[y.length - 2] === "=" && B--);
    var oA = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && Uint8Array.prototype.slice !== void 0 ? new ArrayBuffer(B) : new Array(B), u = Array.isArray(oA) ? oA : new Uint8Array(oA);
    for (E = 0; E < tA; E += 4)
      T = pe[y.charCodeAt(E)], P = pe[y.charCodeAt(E + 1)], O = pe[y.charCodeAt(E + 2)], K = pe[y.charCodeAt(E + 3)], u[nA++] = T << 2 | P >> 4, u[nA++] = (15 & P) << 4 | O >> 2, u[nA++] = (3 & O) << 6 | 63 & K;
    return oA;
  }(e), w = Array.isArray(p) ? function(y) {
    for (var E = y.length, T = [], P = 0; P < E; P += 4)
      T.push(y[P + 3] << 24 | y[P + 2] << 16 | y[P + 1] << 8 | y[P]);
    return T;
  }(p) : new Uint32Array(p), C = Array.isArray(p) ? function(y) {
    for (var E = y.length, T = [], P = 0; P < E; P += 2)
      T.push(y[P + 1] << 8 | y[P]);
    return T;
  }(p) : new Uint16Array(p), b = Bs(C, 12, w[4] / 2), Q = w[5] === 2 ? Bs(C, (24 + w[4]) / 2) : (r = w, c = Math.ceil((24 + w[4]) / 4), r.slice ? r.slice(c, g) : new Uint32Array(Array.prototype.slice.call(r, c, g)));
  return new vh(w[0], w[1], w[2], w[3], b, Q);
}("AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA="), YA = "×", xh = function(e) {
  return Fh.get(e);
}, Uh = function(e, t, r) {
  var c = r - 2, g = t[c], p = t[r - 1], w = t[r];
  if (p === 2 && w === 3)
    return YA;
  if (p === 2 || p === 3 || p === 4 || w === 2 || w === 3 || w === 4)
    return "÷";
  if (p === ws && [ws, Zi, ms, Cs].indexOf(w) !== -1 || !(p !== ms && p !== Zi || w !== Zi && w !== 10) || (p === Cs || p === 10) && w === 10 || w === 13 || w === 5 || w === 7 || p === 1)
    return YA;
  if (p === 13 && w === 14) {
    for (; g === 5; )
      g = t[--c];
    if (g === 14)
      return YA;
  }
  if (p === 15 && w === 15) {
    for (var C = 0; g === 15; )
      C++, g = t[--c];
    if (C % 2 == 0)
      return YA;
  }
  return "÷";
}, Eh = function(e) {
  var t = function(w) {
    for (var C = [], b = 0, Q = w.length; b < Q; ) {
      var y = w.charCodeAt(b++);
      if (y >= 55296 && y <= 56319 && b < Q) {
        var E = w.charCodeAt(b++);
        (64512 & E) == 56320 ? C.push(((1023 & y) << 10) + (1023 & E) + 65536) : (C.push(y), b--);
      } else
        C.push(y);
    }
    return C;
  }(e), r = t.length, c = 0, g = 0, p = t.map(xh);
  return { next: function() {
    if (c >= r)
      return { done: !0, value: null };
    for (var w = YA; c < r && (w = Uh(0, p, ++c)) === YA; )
      ;
    if (w !== YA || c === r) {
      var C = Qh.apply(null, t.slice(g, c));
      return g = c, { value: C, done: !1 };
    }
    return { done: !0, value: null };
  } };
}, vs = function(e) {
  return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255;
}, Sr = function(e, t, r, c, g) {
  var p = "http://www.w3.org/2000/svg", w = document.createElementNS(p, "svg"), C = document.createElementNS(p, "foreignObject");
  return w.setAttributeNS(null, "width", e.toString()), w.setAttributeNS(null, "height", t.toString()), C.setAttributeNS(null, "width", "100%"), C.setAttributeNS(null, "height", "100%"), C.setAttributeNS(null, "x", r.toString()), C.setAttributeNS(null, "y", c.toString()), C.setAttributeNS(null, "externalResourcesRequired", "true"), w.appendChild(C), C.appendChild(g), w;
}, ys = function(e) {
  return new Promise(function(t, r) {
    var c = new Image();
    c.onload = function() {
      return t(c);
    }, c.onerror = r, c.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, MA = { get SUPPORT_RANGE_BOUNDS() {
  var e = function(t) {
    if (t.createRange) {
      var r = t.createRange();
      if (r.getBoundingClientRect) {
        var c = t.createElement("boundtest");
        c.style.height = "123px", c.style.display = "block", t.body.appendChild(c), r.selectNode(c);
        var g = r.getBoundingClientRect(), p = Math.round(g.height);
        if (t.body.removeChild(c), p === 123)
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
    var c = t.createRange();
    r.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var g = r.firstChild, p = ui(g.data).map(function(Q) {
      return EA(Q);
    }), w = 0, C = {}, b = p.every(function(Q, y) {
      c.setStart(g, w), c.setEnd(g, w + Q.length);
      var E = c.getBoundingClientRect();
      w += Q.length;
      var T = E.x > C.x || E.y > C.y;
      return C = E, y === 0 || T;
    });
    return t.body.removeChild(r), b;
  }(document);
  return Object.defineProperty(MA, "SUPPORT_WORD_BREAKING", { value: e }), e;
}, get SUPPORT_SVG_DRAWING() {
  var e = function(t) {
    var r = new Image(), c = t.createElement("canvas"), g = c.getContext("2d");
    if (!g)
      return !1;
    r.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
      g.drawImage(r, 0, 0), c.toDataURL();
    } catch {
      return !1;
    }
    return !0;
  }(document);
  return Object.defineProperty(MA, "SUPPORT_SVG_DRAWING", { value: e }), e;
}, get SUPPORT_FOREIGNOBJECT_DRAWING() {
  var e = typeof Array.from == "function" && typeof window.fetch == "function" ? function(t) {
    var r = t.createElement("canvas"), c = 100;
    r.width = c, r.height = c;
    var g = r.getContext("2d");
    if (!g)
      return Promise.reject(!1);
    g.fillStyle = "rgb(0, 255, 0)", g.fillRect(0, 0, c, c);
    var p = new Image(), w = r.toDataURL();
    p.src = w;
    var C = Sr(c, c, 0, 0, p);
    return g.fillStyle = "red", g.fillRect(0, 0, c, c), ys(C).then(function(b) {
      g.drawImage(b, 0, 0);
      var Q = g.getImageData(0, 0, c, c).data;
      g.fillStyle = "red", g.fillRect(0, 0, c, c);
      var y = t.createElement("div");
      return y.style.backgroundImage = "url(" + w + ")", y.style.height = c + "px", vs(Q) ? ys(Sr(c, c, 0, 0, y)) : Promise.reject(!1);
    }).then(function(b) {
      return g.drawImage(b, 0, 0), vs(g.getImageData(0, 0, c, c).data);
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
} }, be = function(e, t) {
  this.text = e, this.bounds = t;
}, _h = function(e, t) {
  var r = t.ownerDocument;
  if (r) {
    var c = r.createElement("html2canvaswrapper");
    c.appendChild(t.cloneNode(!0));
    var g = t.parentNode;
    if (g) {
      g.replaceChild(c, t);
      var p = _i(e, c);
      return c.firstChild && g.replaceChild(c.firstChild, c), p;
    }
  }
  return wt.EMPTY;
}, bs = function(e, t, r) {
  var c = e.ownerDocument;
  if (!c)
    throw new Error("Node has no owner document");
  var g = c.createRange();
  return g.setStart(e, t), g.setEnd(e, t + r), g;
}, Zr = function(e) {
  if (MA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(t.segment(e)).map(function(r) {
      return r.segment;
    });
  }
  return function(r) {
    for (var c, g = Eh(r), p = []; !(c = g.next()).done; )
      c.value && p.push(c.value.slice());
    return p;
  }(e);
}, Sh = function(e, t) {
  return t.letterSpacing !== 0 ? Zr(e) : function(r, c) {
    if (MA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var g = new Intl.Segmenter(void 0, { granularity: "word" });
      return Array.from(g.segment(r)).map(function(p) {
        return p.segment;
      });
    }
    return Th(r, c);
  }(e, t);
}, kh = [32, 160, 4961, 65792, 65793, 4153, 4241], Th = function(e, t) {
  for (var r, c = function(w, C) {
    var b = ui(w), Q = xc(b, C), y = Q[0], E = Q[1], T = Q[2], P = b.length, O = 0, K = 0;
    return { next: function() {
      if (K >= P)
        return { done: !0, value: null };
      for (var B = dA; K < P && (B = Fc(b, E, y, ++K, T)) === dA; )
        ;
      if (B !== dA || K === P) {
        var tA = new Uc(b, B, O, K);
        return O = K, { value: tA, done: !1 };
      }
      return { done: !0, value: null };
    } };
  }(e, { lineBreak: t.lineBreak, wordBreak: t.overflowWrap === "break-word" ? "break-word" : t.wordBreak }), g = [], p = function() {
    if (r.value) {
      var w = r.value.slice(), C = ui(w), b = "";
      C.forEach(function(Q) {
        kh.indexOf(Q) === -1 ? b += EA(Q) : (b.length && g.push(b), g.push(EA(Q)), b = "");
      }), b.length && g.push(b);
    }
  }; !(r = c.next()).done; )
    p();
  return g;
}, Ih = function(e, t, r) {
  this.text = Hh(t.data, r.textTransform), this.textBounds = function(c, g, p, w) {
    var C = Sh(g, p), b = [], Q = 0;
    return C.forEach(function(y) {
      if (p.textDecorationLine.length || y.trim().length > 0)
        if (MA.SUPPORT_RANGE_BOUNDS) {
          var E = bs(w, Q, y.length).getClientRects();
          if (E.length > 1) {
            var T = Zr(y), P = 0;
            T.forEach(function(K) {
              b.push(new be(K, wt.fromDOMRectList(c, bs(w, P + Q, K.length).getClientRects()))), P += K.length;
            });
          } else
            b.push(new be(y, wt.fromDOMRectList(c, E)));
        } else {
          var O = w.splitText(y.length);
          b.push(new be(y, _h(c, w))), w = O;
        }
      else
        MA.SUPPORT_RANGE_BOUNDS || (w = w.splitText(y.length));
      Q += y.length;
    }), b;
  }(e, this.text, r, t);
}, Hh = function(e, t) {
  switch (t) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(Oh, Lh);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, Oh = /(^|\s|:|-|\(|\))([a-z])/g, Lh = function(e, t, r) {
  return e.length > 0 ? t + r.toUpperCase() : e;
}, Io = function(e) {
  function t(r, c) {
    var g = e.call(this, r, c) || this;
    return g.src = c.currentSrc || c.src, g.intrinsicWidth = c.naturalWidth, g.intrinsicHeight = c.naturalHeight, g.context.cache.addImage(g.src), g;
  }
  return et(t, e), t;
}(ot), Ho = function(e) {
  function t(r, c) {
    var g = e.call(this, r, c) || this;
    return g.canvas = c, g.intrinsicWidth = c.width, g.intrinsicHeight = c.height, g;
  }
  return et(t, e), t;
}(ot), Oo = function(e) {
  function t(r, c) {
    var g = e.call(this, r, c) || this, p = new XMLSerializer(), w = _i(r, c);
    return c.setAttribute("width", w.width + "px"), c.setAttribute("height", w.height + "px"), g.svg = "data:image/svg+xml," + encodeURIComponent(p.serializeToString(c)), g.intrinsicWidth = c.width.baseVal.value, g.intrinsicHeight = c.height.baseVal.value, g.context.cache.addImage(g.svg), g;
  }
  return et(t, e), t;
}(ot), Lo = function(e) {
  function t(r, c) {
    var g = e.call(this, r, c) || this;
    return g.value = c.value, g;
  }
  return et(t, e), t;
}(ot), kr = function(e) {
  function t(r, c) {
    var g = e.call(this, r, c) || this;
    return g.start = c.start, g.reversed = typeof c.reversed == "boolean" && c.reversed === !0, g;
  }
  return et(t, e), t;
}(ot), Dh = [{ type: 15, flags: 0, unit: "px", number: 3 }], Mh = [{ type: 16, flags: 0, number: 50 }], pi = "checkbox", Bi = "radio", Ph = "password", Qs = 707406591, $r = function(e) {
  function t(r, c) {
    var g, p, w, C = e.call(this, r, c) || this;
    switch (C.type = c.type.toLowerCase(), C.checked = c.checked, C.value = (p = (g = c).type === Ph ? new Array(g.value.length + 1).join("•") : g.value).length === 0 ? g.placeholder || "" : p, C.type !== pi && C.type !== Bi || (C.styles.backgroundColor = 3739148031, C.styles.borderTopColor = C.styles.borderRightColor = C.styles.borderBottomColor = C.styles.borderLeftColor = 2779096575, C.styles.borderTopWidth = C.styles.borderRightWidth = C.styles.borderBottomWidth = C.styles.borderLeftWidth = 1, C.styles.borderTopStyle = C.styles.borderRightStyle = C.styles.borderBottomStyle = C.styles.borderLeftStyle = 1, C.styles.backgroundClip = [0], C.styles.backgroundOrigin = [0], C.bounds = (w = C.bounds).width > w.height ? new wt(w.left + (w.width - w.height) / 2, w.top, w.height, w.height) : w.width < w.height ? new wt(w.left, w.top + (w.height - w.width) / 2, w.width, w.width) : w), C.type) {
      case pi:
        C.styles.borderTopRightRadius = C.styles.borderTopLeftRadius = C.styles.borderBottomRightRadius = C.styles.borderBottomLeftRadius = Dh;
        break;
      case Bi:
        C.styles.borderTopRightRadius = C.styles.borderTopLeftRadius = C.styles.borderBottomRightRadius = C.styles.borderBottomLeftRadius = Mh;
    }
    return C;
  }
  return et(t, e), t;
}(ot), Do = function(e) {
  function t(r, c) {
    var g = e.call(this, r, c) || this, p = c.options[c.selectedIndex || 0];
    return g.value = p && p.text || "", g;
  }
  return et(t, e), t;
}(ot), Mo = function(e) {
  function t(r, c) {
    var g = e.call(this, r, c) || this;
    return g.value = c.value, g;
  }
  return et(t, e), t;
}(ot), Po = function(e) {
  function t(r, c) {
    var g = e.call(this, r, c) || this;
    g.src = c.src, g.width = parseInt(c.width, 10) || 0, g.height = parseInt(c.height, 10) || 0, g.backgroundColor = g.styles.backgroundColor;
    try {
      if (c.contentWindow && c.contentWindow.document && c.contentWindow.document.documentElement) {
        g.tree = Ko(r, c.contentWindow.document.documentElement);
        var p = c.contentWindow.document.documentElement ? Ce(r, getComputedStyle(c.contentWindow.document.documentElement).backgroundColor) : Bt.TRANSPARENT, w = c.contentWindow.document.body ? Ce(r, getComputedStyle(c.contentWindow.document.body).backgroundColor) : Bt.TRANSPARENT;
        g.backgroundColor = Ft(p) ? Ft(w) ? g.styles.backgroundColor : w : p;
      }
    } catch {
    }
    return g;
  }
  return et(t, e), t;
}(ot), Rh = ["OL", "UL", "MENU"], si = function(e, t, r, c) {
  for (var g = t.firstChild, p = void 0; g; g = p)
    if (p = g.nextSibling, jo(g) && g.data.trim().length > 0)
      r.textNodes.push(new Ih(e, g, r.styles));
    else if (Wt(g))
      if (Xo(g) && g.assignedNodes)
        g.assignedNodes().forEach(function(C) {
          return si(e, C, r, c);
        });
      else {
        var w = Ro(e, g);
        w.styles.isVisible() && (Kh(g, w, c) ? w.flags |= 4 : jh(w.styles) && (w.flags |= 2), Rh.indexOf(g.tagName) !== -1 && (w.flags |= 8), r.elements.push(w), g.slot, g.shadowRoot ? si(e, g.shadowRoot, w, c) : wi(g) || Vo(g) || mi(g) || si(e, g, w, c));
      }
}, Ro = function(e, t) {
  return Ir(t) ? new Io(e, t) : Go(t) ? new Ho(e, t) : Vo(t) ? new Oo(e, t) : Vh(t) ? new Lo(e, t) : Gh(t) ? new kr(e, t) : Nh(t) ? new $r(e, t) : mi(t) ? new Do(e, t) : wi(t) ? new Mo(e, t) : No(t) ? new Po(e, t) : new ot(e, t);
}, Ko = function(e, t) {
  var r = Ro(e, t);
  return r.flags |= 4, si(e, t, r, r), r;
}, Kh = function(e, t, r) {
  return t.styles.isPositionedWithZIndex() || t.styles.opacity < 1 || t.styles.isTransformed() || An(e) && r.styles.isTransparent();
}, jh = function(e) {
  return e.isPositioned() || e.isFloating();
}, jo = function(e) {
  return e.nodeType === Node.TEXT_NODE;
}, Wt = function(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}, Tr = function(e) {
  return Wt(e) && e.style !== void 0 && !oi(e);
}, oi = function(e) {
  return typeof e.className == "object";
}, Vh = function(e) {
  return e.tagName === "LI";
}, Gh = function(e) {
  return e.tagName === "OL";
}, Nh = function(e) {
  return e.tagName === "INPUT";
}, Vo = function(e) {
  return e.tagName === "svg";
}, An = function(e) {
  return e.tagName === "BODY";
}, Go = function(e) {
  return e.tagName === "CANVAS";
}, Fs = function(e) {
  return e.tagName === "VIDEO";
}, Ir = function(e) {
  return e.tagName === "IMG";
}, No = function(e) {
  return e.tagName === "IFRAME";
}, xs = function(e) {
  return e.tagName === "STYLE";
}, wi = function(e) {
  return e.tagName === "TEXTAREA";
}, mi = function(e) {
  return e.tagName === "SELECT";
}, Xo = function(e) {
  return e.tagName === "SLOT";
}, Us = function(e) {
  return e.tagName.indexOf("-") > 0;
}, Xh = function() {
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
    t.forEach(function(c) {
      return r.counters[c].pop();
    });
  }, e.prototype.parse = function(t) {
    var r = this, c = t.counterIncrement, g = t.counterReset, p = !0;
    c !== null && c.forEach(function(C) {
      var b = r.counters[C.counter];
      b && C.increment !== 0 && (p = !1, b.length || b.push(1), b[Math.max(0, b.length - 1)] += C.increment);
    });
    var w = [];
    return p && g.forEach(function(C) {
      var b = r.counters[C.counter];
      w.push(C.counter), b || (b = r.counters[C.counter] = []), b.push(C.reset);
    }), w;
  }, e;
}(), Es = { integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"] }, _s = { integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"] }, Wh = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"] }, Yh = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"] }, Rt = function(e, t, r, c, g, p) {
  return e < t || e > r ? xe(e, g, p.length > 0) : c.integers.reduce(function(w, C, b) {
    for (; e >= C; )
      e -= C, w += c.values[b];
    return w;
  }, "") + p;
}, Wo = function(e, t, r, c) {
  var g = "";
  do
    r || e--, g = c(e) + g, e /= t;
  while (e * t >= t);
  return g;
}, FA = function(e, t, r, c, g) {
  var p = r - t + 1;
  return (e < 0 ? "-" : "") + (Wo(Math.abs(e), p, c, function(w) {
    return EA(Math.floor(w % p) + t);
  }) + g);
}, St = function(e, t, r) {
  r === void 0 && (r = ". ");
  var c = t.length;
  return Wo(Math.abs(e), c, !1, function(g) {
    return t[Math.floor(g % c)];
  }) + r;
}, ht = function(e, t, r, c, g, p) {
  if (e < -9999 || e > 9999)
    return xe(e, 4, g.length > 0);
  var w = Math.abs(e), C = g;
  if (w === 0)
    return t[0] + C;
  for (var b = 0; w > 0 && b <= 4; b++) {
    var Q = w % 10;
    Q === 0 && IA(p, 1) && C !== "" ? C = t[Q] + C : Q > 1 || Q === 1 && b === 0 || Q === 1 && b === 1 && IA(p, 2) || Q === 1 && b === 1 && IA(p, 4) && e > 100 || Q === 1 && b > 1 && IA(p, 8) ? C = t[Q] + (b > 0 ? r[b - 1] : "") + C : Q === 1 && b > 0 && (C = r[b - 1] + C), w = Math.floor(w / 10);
  }
  return (e < 0 ? c : "") + C;
}, Ss = "十百千萬", ks = "拾佰仟萬", Ts = "マイナス", $i = "마이너스", xe = function(e, t, r) {
  var c = r ? ". " : "", g = r ? "、" : "", p = r ? ", " : "", w = r ? " " : "";
  switch (t) {
    case 0:
      return "•" + w;
    case 1:
      return "◦" + w;
    case 2:
      return "◾" + w;
    case 5:
      var C = FA(e, 48, 57, !0, c);
      return C.length < 4 ? "0" + C : C;
    case 4:
      return St(e, "〇一二三四五六七八九", g);
    case 6:
      return Rt(e, 1, 3999, Es, 3, c).toLowerCase();
    case 7:
      return Rt(e, 1, 3999, Es, 3, c);
    case 8:
      return FA(e, 945, 969, !1, c);
    case 9:
      return FA(e, 97, 122, !1, c);
    case 10:
      return FA(e, 65, 90, !1, c);
    case 11:
      return FA(e, 1632, 1641, !0, c);
    case 12:
    case 49:
      return Rt(e, 1, 9999, _s, 3, c);
    case 35:
      return Rt(e, 1, 9999, _s, 3, c).toLowerCase();
    case 13:
      return FA(e, 2534, 2543, !0, c);
    case 14:
    case 30:
      return FA(e, 6112, 6121, !0, c);
    case 15:
      return St(e, "子丑寅卯辰巳午未申酉戌亥", g);
    case 16:
      return St(e, "甲乙丙丁戊己庚辛壬癸", g);
    case 17:
    case 48:
      return ht(e, "零一二三四五六七八九", Ss, "負", g, 14);
    case 47:
      return ht(e, "零壹貳參肆伍陸柒捌玖", ks, "負", g, 15);
    case 42:
      return ht(e, "零一二三四五六七八九", Ss, "负", g, 14);
    case 41:
      return ht(e, "零壹贰叁肆伍陆柒捌玖", ks, "负", g, 15);
    case 26:
      return ht(e, "〇一二三四五六七八九", "十百千万", Ts, g, 0);
    case 25:
      return ht(e, "零壱弐参四伍六七八九", "拾百千万", Ts, g, 7);
    case 31:
      return ht(e, "영일이삼사오육칠팔구", "십백천만", $i, p, 7);
    case 33:
      return ht(e, "零一二三四五六七八九", "十百千萬", $i, p, 0);
    case 32:
      return ht(e, "零壹貳參四五六七八九", "拾百千", $i, p, 7);
    case 18:
      return FA(e, 2406, 2415, !0, c);
    case 20:
      return Rt(e, 1, 19999, Yh, 3, c);
    case 21:
      return FA(e, 2790, 2799, !0, c);
    case 22:
      return FA(e, 2662, 2671, !0, c);
    case 22:
      return Rt(e, 1, 10999, Wh, 3, c);
    case 23:
      return St(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return St(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return FA(e, 3302, 3311, !0, c);
    case 28:
      return St(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", g);
    case 29:
      return St(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", g);
    case 34:
      return FA(e, 3792, 3801, !0, c);
    case 37:
      return FA(e, 6160, 6169, !0, c);
    case 38:
      return FA(e, 4160, 4169, !0, c);
    case 39:
      return FA(e, 2918, 2927, !0, c);
    case 40:
      return FA(e, 1776, 1785, !0, c);
    case 43:
      return FA(e, 3046, 3055, !0, c);
    case 44:
      return FA(e, 3174, 3183, !0, c);
    case 45:
      return FA(e, 3664, 3673, !0, c);
    case 46:
      return FA(e, 3872, 3881, !0, c);
    default:
      return FA(e, 48, 57, !0, c);
  }
}, Yo = "data-html2canvas-ignore", Is = function() {
  function e(t, r, c) {
    if (this.context = t, this.options = c, this.scrolledElements = [], this.referenceElement = r, this.counters = new Xh(), this.quoteDepth = 0, !r.ownerDocument)
      throw new Error("Cloned element does not have an owner document");
    this.documentElement = this.cloneNode(r.ownerDocument.documentElement, !1);
  }
  return e.prototype.toIFrame = function(t, r) {
    var c = this, g = zh(t, r);
    if (!g.contentWindow)
      return Promise.reject("Unable to find iframe window");
    var p = t.defaultView.pageXOffset, w = t.defaultView.pageYOffset, C = g.contentWindow, b = C.document, Q = Zh(g).then(function() {
      return KA(c, 0, void 0, function() {
        var y, E;
        return RA(this, function(T) {
          switch (T.label) {
            case 0:
              return this.scrolledElements.forEach(eu), C && (C.scrollTo(r.left, r.top), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || C.scrollY === r.top && C.scrollX === r.left || (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(C.scrollX - r.left, C.scrollY - r.top, 0, 0))), y = this.options.onclone, (E = this.clonedReferenceElement) === void 0 ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : b.fonts && b.fonts.ready ? [4, b.fonts.ready] : [3, 2];
            case 1:
              T.sent(), T.label = 2;
            case 2:
              return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, qh(b)] : [3, 4];
            case 3:
              T.sent(), T.label = 4;
            case 4:
              return typeof y == "function" ? [2, Promise.resolve().then(function() {
                return y(b, E);
              }).then(function() {
                return g;
              })] : [2, g];
          }
        });
      });
    });
    return b.open(), b.write(Au(document.doctype) + "<html></html>"), tu(this.referenceElement.ownerDocument, p, w), b.replaceChild(b.adoptNode(this.documentElement), b.documentElement), b.close(), Q;
  }, e.prototype.createElementClone = function(t) {
    if (_r(t, 2), Go(t))
      return this.createCanvasClone(t);
    if (Fs(t))
      return this.createVideoClone(t);
    if (xs(t))
      return this.createStyleClone(t);
    var r = t.cloneNode(!1);
    return Ir(r) && (Ir(t) && t.currentSrc && t.currentSrc !== t.src && (r.src = t.currentSrc, r.srcset = ""), r.loading === "lazy" && (r.loading = "eager")), Us(r) ? this.createCustomElementClone(r) : r;
  }, e.prototype.createCustomElementClone = function(t) {
    var r = document.createElement("html2canvascustomelement");
    return Ar(t.style, r), r;
  }, e.prototype.createStyleClone = function(t) {
    try {
      var r = t.sheet;
      if (r && r.cssRules) {
        var c = [].slice.call(r.cssRules, 0).reduce(function(p, w) {
          return w && typeof w.cssText == "string" ? p + w.cssText : p;
        }, ""), g = t.cloneNode(!1);
        return g.textContent = c, g;
      }
    } catch (p) {
      if (this.context.logger.error("Unable to access cssRules property", p), p.name !== "SecurityError")
        throw p;
    }
    return t.cloneNode(!1);
  }, e.prototype.createCanvasClone = function(t) {
    var r;
    if (this.options.inlineImages && t.ownerDocument) {
      var c = t.ownerDocument.createElement("img");
      try {
        return c.src = t.toDataURL(), c;
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
            var b = C.getContextAttributes();
            (b == null ? void 0 : b.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", t);
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
    var c = r.getContext("2d");
    try {
      return c && (c.drawImage(t, 0, 0, r.width, r.height), this.options.allowTaint || c.getImageData(0, 0, r.width, r.height)), r;
    } catch {
      this.context.logger.info("Unable to clone video as it is tainted", t);
    }
    var g = t.ownerDocument.createElement("canvas");
    return g.width = t.offsetWidth, g.height = t.offsetHeight, g;
  }, e.prototype.appendChildNode = function(t, r, c) {
    Wt(r) && (r.tagName === "SCRIPT" || r.hasAttribute(Yo) || typeof this.options.ignoreElements == "function" && this.options.ignoreElements(r)) || this.options.copyStyles && Wt(r) && xs(r) || t.appendChild(this.cloneNode(r, c));
  }, e.prototype.cloneChildNodes = function(t, r, c) {
    for (var g = this, p = t.shadowRoot ? t.shadowRoot.firstChild : t.firstChild; p; p = p.nextSibling)
      if (Wt(p) && Xo(p) && typeof p.assignedNodes == "function") {
        var w = p.assignedNodes();
        w.length && w.forEach(function(C) {
          return g.appendChildNode(r, C, c);
        });
      } else
        this.appendChildNode(r, p, c);
  }, e.prototype.cloneNode = function(t, r) {
    if (jo(t))
      return document.createTextNode(t.data);
    if (!t.ownerDocument)
      return t.cloneNode(!1);
    var c = t.ownerDocument.defaultView;
    if (c && Wt(t) && (Tr(t) || oi(t))) {
      var g = this.createElementClone(t);
      g.style.transitionProperty = "none";
      var p = c.getComputedStyle(t), w = c.getComputedStyle(t, ":before"), C = c.getComputedStyle(t, ":after");
      this.referenceElement === t && Tr(g) && (this.clonedReferenceElement = g), An(g) && iu(g);
      var b = this.counters.parse(new ps(this.context, p)), Q = this.resolvePseudoContent(t, g, w, ye.BEFORE);
      Us(t) && (r = !0), Fs(t) || this.cloneChildNodes(t, g, r), Q && g.insertBefore(Q, g.firstChild);
      var y = this.resolvePseudoContent(t, g, C, ye.AFTER);
      return y && g.appendChild(y), this.counters.pop(b), (p && (this.options.copyStyles || oi(t)) && !No(t) || r) && Ar(p, g), t.scrollTop === 0 && t.scrollLeft === 0 || this.scrolledElements.push([g, t.scrollLeft, t.scrollTop]), (wi(t) || mi(t)) && (wi(g) || mi(g)) && (g.value = t.value), g;
    }
    return t.cloneNode(!1);
  }, e.prototype.resolvePseudoContent = function(t, r, c, g) {
    var p = this;
    if (c) {
      var w = c.content, C = r.ownerDocument;
      if (C && w && w !== "none" && w !== "-moz-alt-content" && c.display !== "none") {
        this.counters.parse(new ps(this.context, c));
        var b = new mh(this.context, c), Q = C.createElement("html2canvaspseudoelement");
        Ar(c, Q), b.content.forEach(function(E) {
          if (E.type === 0)
            Q.appendChild(C.createTextNode(E.value));
          else if (E.type === 22) {
            var T = C.createElement("img");
            T.src = E.value, T.style.opacity = "1", Q.appendChild(T);
          } else if (E.type === 18) {
            if (E.name === "attr") {
              var P = E.values.filter(CA);
              P.length && Q.appendChild(C.createTextNode(t.getAttribute(P[0].value) || ""));
            } else if (E.name === "counter") {
              var O = E.values.filter($t), K = O[0], B = O[1];
              if (K && CA(K)) {
                var tA = p.counters.getCounterValue(K.value), nA = B && CA(B) ? Er.parse(p.context, B.value) : 3;
                Q.appendChild(C.createTextNode(xe(tA, nA, !1)));
              }
            } else if (E.name === "counters") {
              var oA = E.values.filter($t), u = (K = oA[0], oA[1]);
              if (B = oA[2], K && CA(K)) {
                var s = p.counters.getCounterValues(K.value), o = B && CA(B) ? Er.parse(p.context, B.value) : 3, d = u && u.type === 0 ? u.value : "", A = s.map(function(i) {
                  return xe(i, o, !1);
                }).join(d);
                Q.appendChild(C.createTextNode(A));
              }
            }
          } else if (E.type === 20)
            switch (E.value) {
              case "open-quote":
                Q.appendChild(C.createTextNode(fs(b.quotes, p.quoteDepth++, !0)));
                break;
              case "close-quote":
                Q.appendChild(C.createTextNode(fs(b.quotes, --p.quoteDepth, !1)));
                break;
              default:
                Q.appendChild(C.createTextNode(E.value));
            }
        }), Q.className = Hr + " " + Or;
        var y = g === ye.BEFORE ? " " + Hr : " " + Or;
        return oi(r) ? r.className.baseValue += y : r.className += y, Q;
      }
    }
  }, e.destroy = function(t) {
    return !!t.parentNode && (t.parentNode.removeChild(t), !0);
  }, e;
}();
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(ye || (ye = {}));
var BA, zh = function(e, t) {
  var r = e.createElement("iframe");
  return r.className = "html2canvas-container", r.style.visibility = "hidden", r.style.position = "fixed", r.style.left = "-10000px", r.style.top = "0px", r.style.border = "0", r.width = t.width.toString(), r.height = t.height.toString(), r.scrolling = "no", r.setAttribute(Yo, "true"), e.body.appendChild(r), r;
}, Jh = function(e) {
  return new Promise(function(t) {
    e.complete ? t() : e.src ? (e.onload = t, e.onerror = t) : t();
  });
}, qh = function(e) {
  return Promise.all([].slice.call(e.images, 0).map(Jh));
}, Zh = function(e) {
  return new Promise(function(t, r) {
    var c = e.contentWindow;
    if (!c)
      return r("No window assigned for iframe");
    var g = c.document;
    c.onload = e.onload = function() {
      c.onload = e.onload = null;
      var p = setInterval(function() {
        g.body.childNodes.length > 0 && g.readyState === "complete" && (clearInterval(p), t(e));
      }, 50);
    };
  });
}, $h = ["all", "d", "content"], Ar = function(e, t) {
  for (var r = e.length - 1; r >= 0; r--) {
    var c = e.item(r);
    $h.indexOf(c) === -1 && t.style.setProperty(c, e.getPropertyValue(c));
  }
  return t;
}, Au = function(e) {
  var t = "";
  return e && (t += "<!DOCTYPE ", e.name && (t += e.name), e.internalSubset && (t += e.internalSubset), e.publicId && (t += '"' + e.publicId + '"'), e.systemId && (t += '"' + e.systemId + '"'), t += ">"), t;
}, tu = function(e, t, r) {
  e && e.defaultView && (t !== e.defaultView.pageXOffset || r !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(t, r);
}, eu = function(e) {
  var t = e[0], r = e[1], c = e[2];
  t.scrollLeft = r, t.scrollTop = c;
}, Hr = "___html2canvas___pseudoelement_before", Or = "___html2canvas___pseudoelement_after", Hs = `{
    content: "" !important;
    display: none !important;
}`, iu = function(e) {
  ru(e, "." + Hr + ":before" + Hs + `
         .` + Or + ":after" + Hs);
}, ru = function(e, t) {
  var r = e.ownerDocument;
  if (r) {
    var c = r.createElement("style");
    c.textContent = t, e.appendChild(c);
  }
}, zo = function() {
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
}(), nu = function() {
  function e(t, r) {
    this.context = t, this._options = r, this._cache = {};
  }
  return e.prototype.addImage = function(t) {
    var r = Promise.resolve();
    return this.has(t) || (er(t) || cu(t)) && (this._cache[t] = this.loadImage(t)).catch(function() {
    }), r;
  }, e.prototype.match = function(t) {
    return this._cache[t];
  }, e.prototype.loadImage = function(t) {
    return KA(this, 0, void 0, function() {
      var r, c, g, p, w = this;
      return RA(this, function(C) {
        switch (C.label) {
          case 0:
            return r = zo.isSameOrigin(t), c = !tr(t) && this._options.useCORS === !0 && MA.SUPPORT_CORS_IMAGES && !r, g = !tr(t) && !r && !er(t) && typeof this._options.proxy == "string" && MA.SUPPORT_CORS_XHR && !c, r || this._options.allowTaint !== !1 || tr(t) || er(t) || g || c ? (p = t, g ? [4, this.proxy(p)] : [3, 2]) : [2];
          case 1:
            p = C.sent(), C.label = 2;
          case 2:
            return this.context.logger.debug("Added image " + t.substring(0, 256)), [4, new Promise(function(b, Q) {
              var y = new Image();
              y.onload = function() {
                return b(y);
              }, y.onerror = Q, (lu(p) || c) && (y.crossOrigin = "anonymous"), y.src = p, y.complete === !0 && setTimeout(function() {
                return b(y);
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
    var r = this, c = this._options.proxy;
    if (!c)
      throw new Error("No proxy defined");
    var g = t.substring(0, 256);
    return new Promise(function(p, w) {
      var C = MA.SUPPORT_RESPONSE_TYPE ? "blob" : "text", b = new XMLHttpRequest();
      b.onload = function() {
        if (b.status === 200)
          if (C === "text")
            p(b.response);
          else {
            var E = new FileReader();
            E.addEventListener("load", function() {
              return p(E.result);
            }, !1), E.addEventListener("error", function(T) {
              return w(T);
            }, !1), E.readAsDataURL(b.response);
          }
        else
          w("Failed to proxy resource " + g + " with status code " + b.status);
      }, b.onerror = w;
      var Q = c.indexOf("?") > -1 ? "&" : "?";
      if (b.open("GET", "" + c + Q + "url=" + encodeURIComponent(t) + "&responseType=" + C), C !== "text" && b instanceof XMLHttpRequest && (b.responseType = C), r._options.imageTimeout) {
        var y = r._options.imageTimeout;
        b.timeout = y, b.ontimeout = function() {
          return w("Timed out (" + y + "ms) proxying " + g);
        };
      }
      b.send();
    });
  }, e;
}(), su = /^data:image\/svg\+xml/i, ou = /^data:image\/.*;base64,/i, au = /^data:image\/.*/i, cu = function(e) {
  return MA.SUPPORT_SVG_DRAWING || !hu(e);
}, tr = function(e) {
  return au.test(e);
}, lu = function(e) {
  return ou.test(e);
}, er = function(e) {
  return e.substr(0, 4) === "blob";
}, hu = function(e) {
  return e.substr(-3).toLowerCase() === "svg" || su.test(e);
}, aA = function() {
  function e(t, r) {
    this.type = 0, this.x = t, this.y = r;
  }
  return e.prototype.add = function(t, r) {
    return new e(this.x + t, this.y + r);
  }, e;
}(), Kt = function(e, t, r) {
  return new aA(e.x + (t.x - e.x) * r, e.y + (t.y - e.y) * r);
}, qe = function() {
  function e(t, r, c, g) {
    this.type = 1, this.start = t, this.startControl = r, this.endControl = c, this.end = g;
  }
  return e.prototype.subdivide = function(t, r) {
    var c = Kt(this.start, this.startControl, t), g = Kt(this.startControl, this.endControl, t), p = Kt(this.endControl, this.end, t), w = Kt(c, g, t), C = Kt(g, p, t), b = Kt(w, C, t);
    return r ? new e(this.start, c, w, b) : new e(b, C, p, this.end);
  }, e.prototype.add = function(t, r) {
    return new e(this.start.add(t, r), this.startControl.add(t, r), this.endControl.add(t, r), this.end.add(t, r));
  }, e.prototype.reverse = function() {
    return new e(this.end, this.endControl, this.startControl, this.start);
  }, e;
}(), JA = function(e) {
  return e.type === 1;
}, uu = function(e) {
  var t = e.styles, r = e.bounds, c = fe(t.borderTopLeftRadius, r.width, r.height), g = c[0], p = c[1], w = fe(t.borderTopRightRadius, r.width, r.height), C = w[0], b = w[1], Q = fe(t.borderBottomRightRadius, r.width, r.height), y = Q[0], E = Q[1], T = fe(t.borderBottomLeftRadius, r.width, r.height), P = T[0], O = T[1], K = [];
  K.push((g + C) / r.width), K.push((P + y) / r.width), K.push((p + O) / r.height), K.push((b + E) / r.height);
  var B = Math.max.apply(Math, K);
  B > 1 && (g /= B, p /= B, C /= B, b /= B, y /= B, E /= B, P /= B, O /= B);
  var tA = r.width - C, nA = r.height - E, oA = r.width - y, u = r.height - O, s = t.borderTopWidth, o = t.borderRightWidth, d = t.borderBottomWidth, A = t.borderLeftWidth, i = yA(t.paddingTop, e.bounds.width), n = yA(t.paddingRight, e.bounds.width), h = yA(t.paddingBottom, e.bounds.width), a = yA(t.paddingLeft, e.bounds.width);
  this.topLeftBorderDoubleOuterBox = g > 0 || p > 0 ? bA(r.left + A / 3, r.top + s / 3, g - A / 3, p - s / 3, BA.TOP_LEFT) : new aA(r.left + A / 3, r.top + s / 3), this.topRightBorderDoubleOuterBox = g > 0 || p > 0 ? bA(r.left + tA, r.top + s / 3, C - o / 3, b - s / 3, BA.TOP_RIGHT) : new aA(r.left + r.width - o / 3, r.top + s / 3), this.bottomRightBorderDoubleOuterBox = y > 0 || E > 0 ? bA(r.left + oA, r.top + nA, y - o / 3, E - d / 3, BA.BOTTOM_RIGHT) : new aA(r.left + r.width - o / 3, r.top + r.height - d / 3), this.bottomLeftBorderDoubleOuterBox = P > 0 || O > 0 ? bA(r.left + A / 3, r.top + u, P - A / 3, O - d / 3, BA.BOTTOM_LEFT) : new aA(r.left + A / 3, r.top + r.height - d / 3), this.topLeftBorderDoubleInnerBox = g > 0 || p > 0 ? bA(r.left + 2 * A / 3, r.top + 2 * s / 3, g - 2 * A / 3, p - 2 * s / 3, BA.TOP_LEFT) : new aA(r.left + 2 * A / 3, r.top + 2 * s / 3), this.topRightBorderDoubleInnerBox = g > 0 || p > 0 ? bA(r.left + tA, r.top + 2 * s / 3, C - 2 * o / 3, b - 2 * s / 3, BA.TOP_RIGHT) : new aA(r.left + r.width - 2 * o / 3, r.top + 2 * s / 3), this.bottomRightBorderDoubleInnerBox = y > 0 || E > 0 ? bA(r.left + oA, r.top + nA, y - 2 * o / 3, E - 2 * d / 3, BA.BOTTOM_RIGHT) : new aA(r.left + r.width - 2 * o / 3, r.top + r.height - 2 * d / 3), this.bottomLeftBorderDoubleInnerBox = P > 0 || O > 0 ? bA(r.left + 2 * A / 3, r.top + u, P - 2 * A / 3, O - 2 * d / 3, BA.BOTTOM_LEFT) : new aA(r.left + 2 * A / 3, r.top + r.height - 2 * d / 3), this.topLeftBorderStroke = g > 0 || p > 0 ? bA(r.left + A / 2, r.top + s / 2, g - A / 2, p - s / 2, BA.TOP_LEFT) : new aA(r.left + A / 2, r.top + s / 2), this.topRightBorderStroke = g > 0 || p > 0 ? bA(r.left + tA, r.top + s / 2, C - o / 2, b - s / 2, BA.TOP_RIGHT) : new aA(r.left + r.width - o / 2, r.top + s / 2), this.bottomRightBorderStroke = y > 0 || E > 0 ? bA(r.left + oA, r.top + nA, y - o / 2, E - d / 2, BA.BOTTOM_RIGHT) : new aA(r.left + r.width - o / 2, r.top + r.height - d / 2), this.bottomLeftBorderStroke = P > 0 || O > 0 ? bA(r.left + A / 2, r.top + u, P - A / 2, O - d / 2, BA.BOTTOM_LEFT) : new aA(r.left + A / 2, r.top + r.height - d / 2), this.topLeftBorderBox = g > 0 || p > 0 ? bA(r.left, r.top, g, p, BA.TOP_LEFT) : new aA(r.left, r.top), this.topRightBorderBox = C > 0 || b > 0 ? bA(r.left + tA, r.top, C, b, BA.TOP_RIGHT) : new aA(r.left + r.width, r.top), this.bottomRightBorderBox = y > 0 || E > 0 ? bA(r.left + oA, r.top + nA, y, E, BA.BOTTOM_RIGHT) : new aA(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = P > 0 || O > 0 ? bA(r.left, r.top + u, P, O, BA.BOTTOM_LEFT) : new aA(r.left, r.top + r.height), this.topLeftPaddingBox = g > 0 || p > 0 ? bA(r.left + A, r.top + s, Math.max(0, g - A), Math.max(0, p - s), BA.TOP_LEFT) : new aA(r.left + A, r.top + s), this.topRightPaddingBox = C > 0 || b > 0 ? bA(r.left + Math.min(tA, r.width - o), r.top + s, tA > r.width + o ? 0 : Math.max(0, C - o), Math.max(0, b - s), BA.TOP_RIGHT) : new aA(r.left + r.width - o, r.top + s), this.bottomRightPaddingBox = y > 0 || E > 0 ? bA(r.left + Math.min(oA, r.width - A), r.top + Math.min(nA, r.height - d), Math.max(0, y - o), Math.max(0, E - d), BA.BOTTOM_RIGHT) : new aA(r.left + r.width - o, r.top + r.height - d), this.bottomLeftPaddingBox = P > 0 || O > 0 ? bA(r.left + A, r.top + Math.min(u, r.height - d), Math.max(0, P - A), Math.max(0, O - d), BA.BOTTOM_LEFT) : new aA(r.left + A, r.top + r.height - d), this.topLeftContentBox = g > 0 || p > 0 ? bA(r.left + A + a, r.top + s + i, Math.max(0, g - (A + a)), Math.max(0, p - (s + i)), BA.TOP_LEFT) : new aA(r.left + A + a, r.top + s + i), this.topRightContentBox = C > 0 || b > 0 ? bA(r.left + Math.min(tA, r.width + A + a), r.top + s + i, tA > r.width + A + a ? 0 : C - A + a, b - (s + i), BA.TOP_RIGHT) : new aA(r.left + r.width - (o + n), r.top + s + i), this.bottomRightContentBox = y > 0 || E > 0 ? bA(r.left + Math.min(oA, r.width - (A + a)), r.top + Math.min(nA, r.height + s + i), Math.max(0, y - (o + n)), E - (d + h), BA.BOTTOM_RIGHT) : new aA(r.left + r.width - (o + n), r.top + r.height - (d + h)), this.bottomLeftContentBox = P > 0 || O > 0 ? bA(r.left + A + a, r.top + u, Math.max(0, P - (A + a)), O - (d + h), BA.BOTTOM_LEFT) : new aA(r.left + A + a, r.top + r.height - (d + h));
};
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(BA || (BA = {}));
var bA = function(e, t, r, c, g) {
  var p = (Math.sqrt(2) - 1) / 3 * 4, w = r * p, C = c * p, b = e + r, Q = t + c;
  switch (g) {
    case BA.TOP_LEFT:
      return new qe(new aA(e, Q), new aA(e, Q - C), new aA(b - w, t), new aA(b, t));
    case BA.TOP_RIGHT:
      return new qe(new aA(e, t), new aA(e + w, t), new aA(b, Q - C), new aA(b, Q));
    case BA.BOTTOM_RIGHT:
      return new qe(new aA(b, t), new aA(b, t + C), new aA(e + w, Q), new aA(e, Q));
    case BA.BOTTOM_LEFT:
    default:
      return new qe(new aA(b, Q), new aA(b - w, Q), new aA(e, t + C), new aA(e, t));
  }
}, Ci = function(e) {
  return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox];
}, vi = function(e) {
  return [e.topLeftPaddingBox, e.topRightPaddingBox, e.bottomRightPaddingBox, e.bottomLeftPaddingBox];
}, du = function(e, t, r) {
  this.offsetX = e, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
}, Ze = function(e, t) {
  this.path = e, this.target = t, this.type = 1;
}, gu = function(e) {
  this.opacity = e, this.type = 2, this.target = 6;
}, Jo = function(e) {
  return e.type === 1;
}, Os = function(e, t) {
  return e.length === t.length && e.some(function(r, c) {
    return r === t[c];
  });
}, qo = function(e) {
  this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
}, Zo = function() {
  function e(t, r) {
    if (this.container = t, this.parent = r, this.effects = [], this.curves = new uu(this.container), this.container.styles.opacity < 1 && this.effects.push(new gu(this.container.styles.opacity)), this.container.styles.transform !== null) {
      var c = this.container.bounds.left + this.container.styles.transformOrigin[0].number, g = this.container.bounds.top + this.container.styles.transformOrigin[1].number, p = this.container.styles.transform;
      this.effects.push(new du(c, g, p));
    }
    if (this.container.styles.overflowX !== 0) {
      var w = Ci(this.curves), C = vi(this.curves);
      Os(w, C) ? this.effects.push(new Ze(w, 6)) : (this.effects.push(new Ze(w, 2)), this.effects.push(new Ze(C, 4)));
    }
  }
  return e.prototype.getEffects = function(t) {
    for (var r = [2, 3].indexOf(this.container.styles.position) === -1, c = this.parent, g = this.effects.slice(0); c; ) {
      var p = c.effects.filter(function(b) {
        return !Jo(b);
      });
      if (r || c.container.styles.position !== 0 || !c.parent) {
        if (g.unshift.apply(g, p), r = [2, 3].indexOf(c.container.styles.position) === -1, c.container.styles.overflowX !== 0) {
          var w = Ci(c.curves), C = vi(c.curves);
          Os(w, C) || g.unshift(new Ze(C, 6));
        }
      } else
        g.unshift.apply(g, p);
      c = c.parent;
    }
    return g.filter(function(b) {
      return IA(b.target, t);
    });
  }, e;
}(), Lr = function(e, t, r, c) {
  e.container.elements.forEach(function(g) {
    var p = IA(g.flags, 4), w = IA(g.flags, 2), C = new Zo(g, e);
    IA(g.styles.display, 2048) && c.push(C);
    var b = IA(g.flags, 8) ? [] : c;
    if (p || w) {
      var Q = p || g.styles.isPositioned() ? r : t, y = new qo(C);
      if (g.styles.isPositioned() || g.styles.opacity < 1 || g.styles.isTransformed()) {
        var E = g.styles.zIndex.order;
        if (E < 0) {
          var T = 0;
          Q.negativeZIndex.some(function(O, K) {
            return E > O.element.container.styles.zIndex.order ? (T = K, !1) : T > 0;
          }), Q.negativeZIndex.splice(T, 0, y);
        } else if (E > 0) {
          var P = 0;
          Q.positiveZIndex.some(function(O, K) {
            return E >= O.element.container.styles.zIndex.order ? (P = K + 1, !1) : P > 0;
          }), Q.positiveZIndex.splice(P, 0, y);
        } else
          Q.zeroOrAutoZIndexOrTransformedOrOpacity.push(y);
      } else
        g.styles.isFloating() ? Q.nonPositionedFloats.push(y) : Q.nonPositionedInlineLevel.push(y);
      Lr(C, y, p ? y : r, b);
    } else
      g.styles.isInlineLevel() ? t.inlineLevel.push(C) : t.nonInlineLevel.push(C), Lr(C, t, r, b);
    IA(g.flags, 8) && $o(g, b);
  });
}, $o = function(e, t) {
  for (var r = e instanceof kr ? e.start : 1, c = e instanceof kr && e.reversed, g = 0; g < t.length; g++) {
    var p = t[g];
    p.container instanceof Lo && typeof p.container.value == "number" && p.container.value !== 0 && (r = p.container.value), p.listValue = xe(r, p.container.styles.listStyleType, !0), r += c ? -1 : 1;
  }
}, Ls = function(e, t) {
  switch (t) {
    case 0:
      return zA(e.topLeftBorderBox, e.topLeftPaddingBox, e.topRightBorderBox, e.topRightPaddingBox);
    case 1:
      return zA(e.topRightBorderBox, e.topRightPaddingBox, e.bottomRightBorderBox, e.bottomRightPaddingBox);
    case 2:
      return zA(e.bottomRightBorderBox, e.bottomRightPaddingBox, e.bottomLeftBorderBox, e.bottomLeftPaddingBox);
    default:
      return zA(e.bottomLeftBorderBox, e.bottomLeftPaddingBox, e.topLeftBorderBox, e.topLeftPaddingBox);
  }
}, $e = function(e, t) {
  var r = [];
  return JA(e) ? r.push(e.subdivide(0.5, !1)) : r.push(e), JA(t) ? r.push(t.subdivide(0.5, !0)) : r.push(t), r;
}, zA = function(e, t, r, c) {
  var g = [];
  return JA(e) ? g.push(e.subdivide(0.5, !1)) : g.push(e), JA(r) ? g.push(r.subdivide(0.5, !0)) : g.push(r), JA(c) ? g.push(c.subdivide(0.5, !0).reverse()) : g.push(c), JA(t) ? g.push(t.subdivide(0.5, !1).reverse()) : g.push(t), g;
}, Ds = function(e) {
  var t = e.bounds, r = e.styles;
  return t.add(r.borderLeftWidth, r.borderTopWidth, -(r.borderRightWidth + r.borderLeftWidth), -(r.borderTopWidth + r.borderBottomWidth));
}, yi = function(e) {
  var t = e.styles, r = e.bounds, c = yA(t.paddingLeft, r.width), g = yA(t.paddingRight, r.width), p = yA(t.paddingTop, r.width), w = yA(t.paddingBottom, r.width);
  return r.add(c + t.borderLeftWidth, p + t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth + c + g), -(t.borderTopWidth + t.borderBottomWidth + p + w));
}, ir = function(e, t, r) {
  var c = function(Q, y) {
    return Q === 0 ? y.bounds : Q === 2 ? yi(y) : Ds(y);
  }(Xt(e.styles.backgroundOrigin, t), e), g = function(Q, y) {
    return Q === 0 ? y.bounds : Q === 2 ? yi(y) : Ds(y);
  }(Xt(e.styles.backgroundClip, t), e), p = fu(Xt(e.styles.backgroundSize, t), r, c), w = p[0], C = p[1], b = fe(Xt(e.styles.backgroundPosition, t), c.width - w, c.height - C);
  return [pu(Xt(e.styles.backgroundRepeat, t), b, p, c, g), Math.round(c.left + b[0]), Math.round(c.top + b[1]), w, C];
}, jt = function(e) {
  return CA(e) && e.value === zt.AUTO;
}, Ai = function(e) {
  return typeof e == "number";
}, fu = function(e, t, r) {
  var c = t[0], g = t[1], p = t[2], w = e[0], C = e[1];
  if (!w)
    return [0, 0];
  if (TA(w) && C && TA(C))
    return [yA(w, r.width), yA(C, r.height)];
  var b = Ai(p);
  if (CA(w) && (w.value === zt.CONTAIN || w.value === zt.COVER))
    return Ai(p) ? r.width / r.height < p != (w.value === zt.COVER) ? [r.width, r.width / p] : [r.height * p, r.height] : [r.width, r.height];
  var Q = Ai(c), y = Ai(g), E = Q || y;
  if (jt(w) && (!C || jt(C)))
    return Q && y ? [c, g] : b || E ? E && b ? [Q ? c : g * p, y ? g : c / p] : [Q ? c : r.width, y ? g : r.height] : [r.width, r.height];
  if (b) {
    var T = 0, P = 0;
    return TA(w) ? T = yA(w, r.width) : TA(C) && (P = yA(C, r.height)), jt(w) ? T = P * p : C && !jt(C) || (P = T / p), [T, P];
  }
  var O = null, K = null;
  if (TA(w) ? O = yA(w, r.width) : C && TA(C) && (K = yA(C, r.height)), O === null || C && !jt(C) || (K = Q && y ? O / c * g : r.height), K !== null && jt(w) && (O = Q && y ? K / g * c : r.width), O !== null && K !== null)
    return [O, K];
  throw new Error("Unable to calculate background-size for element");
}, Xt = function(e, t) {
  var r = e[t];
  return r === void 0 ? e[0] : r;
}, pu = function(e, t, r, c, g) {
  var p = t[0], w = t[1], C = r[0], b = r[1];
  switch (e) {
    case 2:
      return [new aA(Math.round(c.left), Math.round(c.top + w)), new aA(Math.round(c.left + c.width), Math.round(c.top + w)), new aA(Math.round(c.left + c.width), Math.round(b + c.top + w)), new aA(Math.round(c.left), Math.round(b + c.top + w))];
    case 3:
      return [new aA(Math.round(c.left + p), Math.round(c.top)), new aA(Math.round(c.left + p + C), Math.round(c.top)), new aA(Math.round(c.left + p + C), Math.round(c.height + c.top)), new aA(Math.round(c.left + p), Math.round(c.height + c.top))];
    case 1:
      return [new aA(Math.round(c.left + p), Math.round(c.top + w)), new aA(Math.round(c.left + p + C), Math.round(c.top + w)), new aA(Math.round(c.left + p + C), Math.round(c.top + w + b)), new aA(Math.round(c.left + p), Math.round(c.top + w + b))];
    default:
      return [new aA(Math.round(g.left), Math.round(g.top)), new aA(Math.round(g.left + g.width), Math.round(g.top)), new aA(Math.round(g.left + g.width), Math.round(g.height + g.top)), new aA(Math.round(g.left), Math.round(g.height + g.top))];
  }
}, Ms = "Hidden Text", Bu = function() {
  function e(t) {
    this._data = {}, this._document = t;
  }
  return e.prototype.parseMetrics = function(t, r) {
    var c = this._document.createElement("div"), g = this._document.createElement("img"), p = this._document.createElement("span"), w = this._document.body;
    c.style.visibility = "hidden", c.style.fontFamily = t, c.style.fontSize = r, c.style.margin = "0", c.style.padding = "0", c.style.whiteSpace = "nowrap", w.appendChild(c), g.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", g.width = 1, g.height = 1, g.style.margin = "0", g.style.padding = "0", g.style.verticalAlign = "baseline", p.style.fontFamily = t, p.style.fontSize = r, p.style.margin = "0", p.style.padding = "0", p.appendChild(this._document.createTextNode(Ms)), c.appendChild(p), c.appendChild(g);
    var C = g.offsetTop - p.offsetTop + 2;
    c.removeChild(p), c.appendChild(this._document.createTextNode(Ms)), c.style.lineHeight = "normal", g.style.verticalAlign = "super";
    var b = g.offsetTop - c.offsetTop + 2;
    return w.removeChild(c), { baseline: C, middle: b };
  }, e.prototype.getMetrics = function(t, r) {
    var c = t + " " + r;
    return this._data[c] === void 0 && (this._data[c] = this.parseMetrics(t, r)), this._data[c];
  }, e;
}(), Aa = function(e, t) {
  this.context = e, this.options = t;
}, wu = function(e) {
  function t(r, c) {
    var g = e.call(this, r, c) || this;
    return g._activeEffects = [], g.canvas = c.canvas ? c.canvas : document.createElement("canvas"), g.ctx = g.canvas.getContext("2d"), c.canvas || (g.canvas.width = Math.floor(c.width * c.scale), g.canvas.height = Math.floor(c.height * c.scale), g.canvas.style.width = c.width + "px", g.canvas.style.height = c.height + "px"), g.fontMetrics = new Bu(document), g.ctx.scale(g.options.scale, g.options.scale), g.ctx.translate(-c.x, -c.y), g.ctx.textBaseline = "bottom", g._activeEffects = [], g.context.logger.debug("Canvas renderer initialized (" + c.width + "x" + c.height + ") with scale " + c.scale), g;
  }
  return et(t, e), t.prototype.applyEffects = function(r) {
    for (var c = this; this._activeEffects.length; )
      this.popEffect();
    r.forEach(function(g) {
      return c.applyEffect(g);
    });
  }, t.prototype.applyEffect = function(r) {
    this.ctx.save(), function(c) {
      return c.type === 2;
    }(r) && (this.ctx.globalAlpha = r.opacity), function(c) {
      return c.type === 0;
    }(r) && (this.ctx.translate(r.offsetX, r.offsetY), this.ctx.transform(r.matrix[0], r.matrix[1], r.matrix[2], r.matrix[3], r.matrix[4], r.matrix[5]), this.ctx.translate(-r.offsetX, -r.offsetY)), Jo(r) && (this.path(r.path), this.ctx.clip()), this._activeEffects.push(r);
  }, t.prototype.popEffect = function() {
    this._activeEffects.pop(), this.ctx.restore();
  }, t.prototype.renderStack = function(r) {
    return KA(this, 0, void 0, function() {
      return RA(this, function(c) {
        switch (c.label) {
          case 0:
            return r.element.container.styles.isVisible() ? [4, this.renderStackContent(r)] : [3, 2];
          case 1:
            c.sent(), c.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, t.prototype.renderNode = function(r) {
    return KA(this, 0, void 0, function() {
      return RA(this, function(c) {
        switch (c.label) {
          case 0:
            return IA(r.container.flags, 16), r.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(r)] : [3, 3];
          case 1:
            return c.sent(), [4, this.renderNodeContent(r)];
          case 2:
            c.sent(), c.label = 3;
          case 3:
            return [2];
        }
      });
    });
  }, t.prototype.renderTextWithLetterSpacing = function(r, c, g) {
    var p = this;
    c === 0 ? this.ctx.fillText(r.text, r.bounds.left, r.bounds.top + g) : Zr(r.text).reduce(function(w, C) {
      return p.ctx.fillText(C, w, r.bounds.top + g), w + p.ctx.measureText(C).width;
    }, r.bounds.left);
  }, t.prototype.createFontStyle = function(r) {
    var c = r.fontVariant.filter(function(w) {
      return w === "normal" || w === "small-caps";
    }).join(""), g = bu(r.fontFamily).join(", "), p = Fe(r.fontSize) ? "" + r.fontSize.number + r.fontSize.unit : r.fontSize.number + "px";
    return [[r.fontStyle, c, r.fontWeight, p, g].join(" "), g, p];
  }, t.prototype.renderTextNode = function(r, c) {
    return KA(this, 0, void 0, function() {
      var g, p, w, C, b, Q, y, E, T = this;
      return RA(this, function(P) {
        return g = this.createFontStyle(c), p = g[0], w = g[1], C = g[2], this.ctx.font = p, this.ctx.direction = c.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", b = this.fontMetrics.getMetrics(w, C), Q = b.baseline, y = b.middle, E = c.paintOrder, r.textBounds.forEach(function(O) {
          E.forEach(function(K) {
            switch (K) {
              case 0:
                T.ctx.fillStyle = HA(c.color), T.renderTextWithLetterSpacing(O, c.letterSpacing, Q);
                var B = c.textShadow;
                B.length && O.text.trim().length && (B.slice(0).reverse().forEach(function(tA) {
                  T.ctx.shadowColor = HA(tA.color), T.ctx.shadowOffsetX = tA.offsetX.number * T.options.scale, T.ctx.shadowOffsetY = tA.offsetY.number * T.options.scale, T.ctx.shadowBlur = tA.blur.number, T.renderTextWithLetterSpacing(O, c.letterSpacing, Q);
                }), T.ctx.shadowColor = "", T.ctx.shadowOffsetX = 0, T.ctx.shadowOffsetY = 0, T.ctx.shadowBlur = 0), c.textDecorationLine.length && (T.ctx.fillStyle = HA(c.textDecorationColor || c.color), c.textDecorationLine.forEach(function(tA) {
                  switch (tA) {
                    case 1:
                      T.ctx.fillRect(O.bounds.left, Math.round(O.bounds.top + Q), O.bounds.width, 1);
                      break;
                    case 2:
                      T.ctx.fillRect(O.bounds.left, Math.round(O.bounds.top), O.bounds.width, 1);
                      break;
                    case 3:
                      T.ctx.fillRect(O.bounds.left, Math.ceil(O.bounds.top + y), O.bounds.width, 1);
                  }
                }));
                break;
              case 1:
                c.webkitTextStrokeWidth && O.text.trim().length && (T.ctx.strokeStyle = HA(c.webkitTextStrokeColor), T.ctx.lineWidth = c.webkitTextStrokeWidth, T.ctx.lineJoin = window.chrome ? "miter" : "round", T.ctx.strokeText(O.text, O.bounds.left, O.bounds.top + Q)), T.ctx.strokeStyle = "", T.ctx.lineWidth = 0, T.ctx.lineJoin = "miter";
            }
          });
        }), [2];
      });
    });
  }, t.prototype.renderReplacedElement = function(r, c, g) {
    if (g && r.intrinsicWidth > 0 && r.intrinsicHeight > 0) {
      var p = yi(r), w = vi(c);
      this.path(w), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(g, 0, 0, r.intrinsicWidth, r.intrinsicHeight, p.left, p.top, p.width, p.height), this.ctx.restore();
    }
  }, t.prototype.renderNodeContent = function(r) {
    return KA(this, 0, void 0, function() {
      var c, g, p, w, C, b, Q, y, E, T, P, O, K, B, tA, nA, oA, u;
      return RA(this, function(s) {
        switch (s.label) {
          case 0:
            this.applyEffects(r.getEffects(4)), c = r.container, g = r.curves, p = c.styles, w = 0, C = c.textNodes, s.label = 1;
          case 1:
            return w < C.length ? (b = C[w], [4, this.renderTextNode(b, p)]) : [3, 4];
          case 2:
            s.sent(), s.label = 3;
          case 3:
            return w++, [3, 1];
          case 4:
            if (!(c instanceof Io))
              return [3, 8];
            s.label = 5;
          case 5:
            return s.trys.push([5, 7, , 8]), [4, this.context.cache.match(c.src)];
          case 6:
            return tA = s.sent(), this.renderReplacedElement(c, g, tA), [3, 8];
          case 7:
            return s.sent(), this.context.logger.error("Error loading image " + c.src), [3, 8];
          case 8:
            if (c instanceof Ho && this.renderReplacedElement(c, g, c.canvas), !(c instanceof Oo))
              return [3, 12];
            s.label = 9;
          case 9:
            return s.trys.push([9, 11, , 12]), [4, this.context.cache.match(c.svg)];
          case 10:
            return tA = s.sent(), this.renderReplacedElement(c, g, tA), [3, 12];
          case 11:
            return s.sent(), this.context.logger.error("Error loading svg " + c.svg.substring(0, 255)), [3, 12];
          case 12:
            return c instanceof Po && c.tree ? [4, new t(this.context, { scale: this.options.scale, backgroundColor: c.backgroundColor, x: 0, y: 0, width: c.width, height: c.height }).render(c.tree)] : [3, 14];
          case 13:
            Q = s.sent(), c.width && c.height && this.ctx.drawImage(Q, 0, 0, c.width, c.height, c.bounds.left, c.bounds.top, c.bounds.width, c.bounds.height), s.label = 14;
          case 14:
            if (c instanceof $r && (y = Math.min(c.bounds.width, c.bounds.height), c.type === pi ? c.checked && (this.ctx.save(), this.path([new aA(c.bounds.left + 0.39363 * y, c.bounds.top + 0.79 * y), new aA(c.bounds.left + 0.16 * y, c.bounds.top + 0.5549 * y), new aA(c.bounds.left + 0.27347 * y, c.bounds.top + 0.44071 * y), new aA(c.bounds.left + 0.39694 * y, c.bounds.top + 0.5649 * y), new aA(c.bounds.left + 0.72983 * y, c.bounds.top + 0.23 * y), new aA(c.bounds.left + 0.84 * y, c.bounds.top + 0.34085 * y), new aA(c.bounds.left + 0.39363 * y, c.bounds.top + 0.79 * y)]), this.ctx.fillStyle = HA(Qs), this.ctx.fill(), this.ctx.restore()) : c.type === Bi && c.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(c.bounds.left + y / 2, c.bounds.top + y / 2, y / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = HA(Qs), this.ctx.fill(), this.ctx.restore())), mu(c) && c.value.length) {
              switch (E = this.createFontStyle(p), oA = E[0], T = E[1], P = this.fontMetrics.getMetrics(oA, T).baseline, this.ctx.font = oA, this.ctx.fillStyle = HA(p.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = vu(c.styles.textAlign), u = yi(c), O = 0, c.styles.textAlign) {
                case 1:
                  O += u.width / 2;
                  break;
                case 2:
                  O += u.width;
              }
              K = u.add(O, 0, 0, -u.height / 2 + 1), this.ctx.save(), this.path([new aA(u.left, u.top), new aA(u.left + u.width, u.top), new aA(u.left + u.width, u.top + u.height), new aA(u.left, u.top + u.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new be(c.value, K), p.letterSpacing, P), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
            }
            if (!IA(c.styles.display, 2048))
              return [3, 20];
            if (c.styles.listStyleImage === null)
              return [3, 19];
            if ((B = c.styles.listStyleImage).type !== 0)
              return [3, 18];
            tA = void 0, nA = B.url, s.label = 15;
          case 15:
            return s.trys.push([15, 17, , 18]), [4, this.context.cache.match(nA)];
          case 16:
            return tA = s.sent(), this.ctx.drawImage(tA, c.bounds.left - (tA.width + 10), c.bounds.top), [3, 18];
          case 17:
            return s.sent(), this.context.logger.error("Error loading list-style-image " + nA), [3, 18];
          case 18:
            return [3, 20];
          case 19:
            r.listValue && c.styles.listStyleType !== -1 && (oA = this.createFontStyle(p)[0], this.ctx.font = oA, this.ctx.fillStyle = HA(p.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", u = new wt(c.bounds.left, c.bounds.top + yA(c.styles.paddingTop, c.bounds.width), c.bounds.width, us(p.lineHeight, p.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new be(r.listValue, u), p.letterSpacing, us(p.lineHeight, p.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), s.label = 20;
          case 20:
            return [2];
        }
      });
    });
  }, t.prototype.renderStackContent = function(r) {
    return KA(this, 0, void 0, function() {
      var c, g, p, w, C, b, Q, y, E, T, P, O, K, B, tA;
      return RA(this, function(nA) {
        switch (nA.label) {
          case 0:
            return IA(r.element.container.flags, 16), [4, this.renderNodeBackgroundAndBorders(r.element)];
          case 1:
            nA.sent(), c = 0, g = r.negativeZIndex, nA.label = 2;
          case 2:
            return c < g.length ? (tA = g[c], [4, this.renderStack(tA)]) : [3, 5];
          case 3:
            nA.sent(), nA.label = 4;
          case 4:
            return c++, [3, 2];
          case 5:
            return [4, this.renderNodeContent(r.element)];
          case 6:
            nA.sent(), p = 0, w = r.nonInlineLevel, nA.label = 7;
          case 7:
            return p < w.length ? (tA = w[p], [4, this.renderNode(tA)]) : [3, 10];
          case 8:
            nA.sent(), nA.label = 9;
          case 9:
            return p++, [3, 7];
          case 10:
            C = 0, b = r.nonPositionedFloats, nA.label = 11;
          case 11:
            return C < b.length ? (tA = b[C], [4, this.renderStack(tA)]) : [3, 14];
          case 12:
            nA.sent(), nA.label = 13;
          case 13:
            return C++, [3, 11];
          case 14:
            Q = 0, y = r.nonPositionedInlineLevel, nA.label = 15;
          case 15:
            return Q < y.length ? (tA = y[Q], [4, this.renderStack(tA)]) : [3, 18];
          case 16:
            nA.sent(), nA.label = 17;
          case 17:
            return Q++, [3, 15];
          case 18:
            E = 0, T = r.inlineLevel, nA.label = 19;
          case 19:
            return E < T.length ? (tA = T[E], [4, this.renderNode(tA)]) : [3, 22];
          case 20:
            nA.sent(), nA.label = 21;
          case 21:
            return E++, [3, 19];
          case 22:
            P = 0, O = r.zeroOrAutoZIndexOrTransformedOrOpacity, nA.label = 23;
          case 23:
            return P < O.length ? (tA = O[P], [4, this.renderStack(tA)]) : [3, 26];
          case 24:
            nA.sent(), nA.label = 25;
          case 25:
            return P++, [3, 23];
          case 26:
            K = 0, B = r.positiveZIndex, nA.label = 27;
          case 27:
            return K < B.length ? (tA = B[K], [4, this.renderStack(tA)]) : [3, 30];
          case 28:
            nA.sent(), nA.label = 29;
          case 29:
            return K++, [3, 27];
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
    var c = this;
    r.forEach(function(g, p) {
      var w = JA(g) ? g.start : g;
      p === 0 ? c.ctx.moveTo(w.x, w.y) : c.ctx.lineTo(w.x, w.y), JA(g) && c.ctx.bezierCurveTo(g.startControl.x, g.startControl.y, g.endControl.x, g.endControl.y, g.end.x, g.end.y);
    });
  }, t.prototype.renderRepeat = function(r, c, g, p) {
    this.path(r), this.ctx.fillStyle = c, this.ctx.translate(g, p), this.ctx.fill(), this.ctx.translate(-g, -p);
  }, t.prototype.resizeImage = function(r, c, g) {
    var p;
    if (r.width === c && r.height === g)
      return r;
    var w = ((p = this.canvas.ownerDocument) !== null && p !== void 0 ? p : document).createElement("canvas");
    return w.width = Math.max(1, c), w.height = Math.max(1, g), w.getContext("2d").drawImage(r, 0, 0, r.width, r.height, 0, 0, c, g), w;
  }, t.prototype.renderBackgroundImage = function(r) {
    return KA(this, 0, void 0, function() {
      var c, g, p, w, C, b;
      return RA(this, function(Q) {
        switch (Q.label) {
          case 0:
            c = r.styles.backgroundImage.length - 1, g = function(y) {
              var E, T, P, O, K, B, tA, nA, oA, u, s, o, d, A, i, n, h, a, l, f, m, v, x, U, F, S, H, D, R, W, V;
              return RA(this, function(_) {
                switch (_.label) {
                  case 0:
                    if (y.type !== 0)
                      return [3, 5];
                    E = void 0, T = y.url, _.label = 1;
                  case 1:
                    return _.trys.push([1, 3, , 4]), [4, p.context.cache.match(T)];
                  case 2:
                    return E = _.sent(), [3, 4];
                  case 3:
                    return _.sent(), p.context.logger.error("Error loading background-image " + T), [3, 4];
                  case 4:
                    return E && (P = ir(r, c, [E.width, E.height, E.width / E.height]), n = P[0], v = P[1], x = P[2], l = P[3], f = P[4], A = p.ctx.createPattern(p.resizeImage(E, l, f), "repeat"), p.renderRepeat(n, A, v, x)), [3, 6];
                  case 5:
                    y.type === 1 ? (O = ir(r, c, [null, null, null]), n = O[0], v = O[1], x = O[2], l = O[3], f = O[4], K = Al(y.angle, l, f), B = K[0], tA = K[1], nA = K[2], oA = K[3], u = K[4], (s = document.createElement("canvas")).width = l, s.height = f, o = s.getContext("2d"), d = o.createLinearGradient(tA, oA, nA, u), ls(y.stops, B).forEach(function(k) {
                      return d.addColorStop(k.stop, HA(k.color));
                    }), o.fillStyle = d, o.fillRect(0, 0, l, f), l > 0 && f > 0 && (A = p.ctx.createPattern(s, "repeat"), p.renderRepeat(n, A, v, x))) : function(k) {
                      return k.type === 2;
                    }(y) && (i = ir(r, c, [null, null, null]), n = i[0], h = i[1], a = i[2], l = i[3], f = i[4], m = y.position.length === 0 ? [Jr] : y.position, v = yA(m[0], l), x = yA(m[m.length - 1], f), U = function(k, M, N, X, L) {
                      var I = 0, j = 0;
                      switch (k.size) {
                        case 0:
                          k.shape === 0 ? I = j = Math.min(Math.abs(M), Math.abs(M - X), Math.abs(N), Math.abs(N - L)) : k.shape === 1 && (I = Math.min(Math.abs(M), Math.abs(M - X)), j = Math.min(Math.abs(N), Math.abs(N - L)));
                          break;
                        case 2:
                          if (k.shape === 0)
                            I = j = Math.min($A(M, N), $A(M, N - L), $A(M - X, N), $A(M - X, N - L));
                          else if (k.shape === 1) {
                            var Y = Math.min(Math.abs(N), Math.abs(N - L)) / Math.min(Math.abs(M), Math.abs(M - X)), G = hs(X, L, M, N, !0), z = G[0], Z = G[1];
                            j = Y * (I = $A(z - M, (Z - N) / Y));
                          }
                          break;
                        case 1:
                          k.shape === 0 ? I = j = Math.max(Math.abs(M), Math.abs(M - X), Math.abs(N), Math.abs(N - L)) : k.shape === 1 && (I = Math.max(Math.abs(M), Math.abs(M - X)), j = Math.max(Math.abs(N), Math.abs(N - L)));
                          break;
                        case 3:
                          if (k.shape === 0)
                            I = j = Math.max($A(M, N), $A(M, N - L), $A(M - X, N), $A(M - X, N - L));
                          else if (k.shape === 1) {
                            Y = Math.max(Math.abs(N), Math.abs(N - L)) / Math.max(Math.abs(M), Math.abs(M - X));
                            var eA = hs(X, L, M, N, !1);
                            z = eA[0], Z = eA[1], j = Y * (I = $A(z - M, (Z - N) / Y));
                          }
                      }
                      return Array.isArray(k.size) && (I = yA(k.size[0], X), j = k.size.length === 2 ? yA(k.size[1], L) : I), [I, j];
                    }(y, v, x, l, f), F = U[0], S = U[1], F > 0 && S > 0 && (H = p.ctx.createRadialGradient(h + v, a + x, 0, h + v, a + x, F), ls(y.stops, 2 * F).forEach(function(k) {
                      return H.addColorStop(k.stop, HA(k.color));
                    }), p.path(n), p.ctx.fillStyle = H, F !== S ? (D = r.bounds.left + 0.5 * r.bounds.width, R = r.bounds.top + 0.5 * r.bounds.height, V = 1 / (W = S / F), p.ctx.save(), p.ctx.translate(D, R), p.ctx.transform(1, 0, 0, W, 0, 0), p.ctx.translate(-D, -R), p.ctx.fillRect(h, V * (a - R) + R, l, f * V), p.ctx.restore()) : p.ctx.fill())), _.label = 6;
                  case 6:
                    return c--, [2];
                }
              });
            }, p = this, w = 0, C = r.styles.backgroundImage.slice(0).reverse(), Q.label = 1;
          case 1:
            return w < C.length ? (b = C[w], [5, g(b)]) : [3, 4];
          case 2:
            Q.sent(), Q.label = 3;
          case 3:
            return w++, [3, 1];
          case 4:
            return [2];
        }
      });
    });
  }, t.prototype.renderSolidBorder = function(r, c, g) {
    return KA(this, 0, void 0, function() {
      return RA(this, function(p) {
        return this.path(Ls(g, c)), this.ctx.fillStyle = HA(r), this.ctx.fill(), [2];
      });
    });
  }, t.prototype.renderDoubleBorder = function(r, c, g, p) {
    return KA(this, 0, void 0, function() {
      var w, C;
      return RA(this, function(b) {
        switch (b.label) {
          case 0:
            return c < 3 ? [4, this.renderSolidBorder(r, g, p)] : [3, 2];
          case 1:
            return b.sent(), [2];
          case 2:
            return w = function(Q, y) {
              switch (y) {
                case 0:
                  return zA(Q.topLeftBorderBox, Q.topLeftBorderDoubleOuterBox, Q.topRightBorderBox, Q.topRightBorderDoubleOuterBox);
                case 1:
                  return zA(Q.topRightBorderBox, Q.topRightBorderDoubleOuterBox, Q.bottomRightBorderBox, Q.bottomRightBorderDoubleOuterBox);
                case 2:
                  return zA(Q.bottomRightBorderBox, Q.bottomRightBorderDoubleOuterBox, Q.bottomLeftBorderBox, Q.bottomLeftBorderDoubleOuterBox);
                default:
                  return zA(Q.bottomLeftBorderBox, Q.bottomLeftBorderDoubleOuterBox, Q.topLeftBorderBox, Q.topLeftBorderDoubleOuterBox);
              }
            }(p, g), this.path(w), this.ctx.fillStyle = HA(r), this.ctx.fill(), C = function(Q, y) {
              switch (y) {
                case 0:
                  return zA(Q.topLeftBorderDoubleInnerBox, Q.topLeftPaddingBox, Q.topRightBorderDoubleInnerBox, Q.topRightPaddingBox);
                case 1:
                  return zA(Q.topRightBorderDoubleInnerBox, Q.topRightPaddingBox, Q.bottomRightBorderDoubleInnerBox, Q.bottomRightPaddingBox);
                case 2:
                  return zA(Q.bottomRightBorderDoubleInnerBox, Q.bottomRightPaddingBox, Q.bottomLeftBorderDoubleInnerBox, Q.bottomLeftPaddingBox);
                default:
                  return zA(Q.bottomLeftBorderDoubleInnerBox, Q.bottomLeftPaddingBox, Q.topLeftBorderDoubleInnerBox, Q.topLeftPaddingBox);
              }
            }(p, g), this.path(C), this.ctx.fill(), [2];
        }
      });
    });
  }, t.prototype.renderNodeBackgroundAndBorders = function(r) {
    return KA(this, 0, void 0, function() {
      var c, g, p, w, C, b, Q, y, E = this;
      return RA(this, function(T) {
        switch (T.label) {
          case 0:
            return this.applyEffects(r.getEffects(2)), c = r.container.styles, g = !Ft(c.backgroundColor) || c.backgroundImage.length, p = [{ style: c.borderTopStyle, color: c.borderTopColor, width: c.borderTopWidth }, { style: c.borderRightStyle, color: c.borderRightColor, width: c.borderRightWidth }, { style: c.borderBottomStyle, color: c.borderBottomColor, width: c.borderBottomWidth }, { style: c.borderLeftStyle, color: c.borderLeftColor, width: c.borderLeftWidth }], w = Cu(Xt(c.backgroundClip, 0), r.curves), g || c.boxShadow.length ? (this.ctx.save(), this.path(w), this.ctx.clip(), Ft(c.backgroundColor) || (this.ctx.fillStyle = HA(c.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(r.container)]) : [3, 2];
          case 1:
            T.sent(), this.ctx.restore(), c.boxShadow.slice(0).reverse().forEach(function(P) {
              E.ctx.save();
              var O, K, B, tA, nA, oA = Ci(r.curves), u = P.inset ? 0 : 1e4, s = (O = oA, K = -u + (P.inset ? 1 : -1) * P.spread.number, B = (P.inset ? 1 : -1) * P.spread.number, tA = P.spread.number * (P.inset ? -2 : 2), nA = P.spread.number * (P.inset ? -2 : 2), O.map(function(o, d) {
                switch (d) {
                  case 0:
                    return o.add(K, B);
                  case 1:
                    return o.add(K + tA, B);
                  case 2:
                    return o.add(K + tA, B + nA);
                  case 3:
                    return o.add(K, B + nA);
                }
                return o;
              }));
              P.inset ? (E.path(oA), E.ctx.clip(), E.mask(s)) : (E.mask(oA), E.ctx.clip(), E.path(s)), E.ctx.shadowOffsetX = P.offsetX.number + u, E.ctx.shadowOffsetY = P.offsetY.number, E.ctx.shadowColor = HA(P.color), E.ctx.shadowBlur = P.blur.number, E.ctx.fillStyle = P.inset ? HA(P.color) : "rgba(0,0,0,1)", E.ctx.fill(), E.ctx.restore();
            }), T.label = 2;
          case 2:
            C = 0, b = 0, Q = p, T.label = 3;
          case 3:
            return b < Q.length ? (y = Q[b]).style !== 0 && !Ft(y.color) && y.width > 0 ? y.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(y.color, y.width, C, r.curves, 2)] : [3, 11] : [3, 13];
          case 4:
            return T.sent(), [3, 11];
          case 5:
            return y.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(y.color, y.width, C, r.curves, 3)];
          case 6:
            return T.sent(), [3, 11];
          case 7:
            return y.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(y.color, y.width, C, r.curves)];
          case 8:
            return T.sent(), [3, 11];
          case 9:
            return [4, this.renderSolidBorder(y.color, C, r.curves)];
          case 10:
            T.sent(), T.label = 11;
          case 11:
            C++, T.label = 12;
          case 12:
            return b++, [3, 3];
          case 13:
            return [2];
        }
      });
    });
  }, t.prototype.renderDashedDottedBorder = function(r, c, g, p, w) {
    return KA(this, 0, void 0, function() {
      var C, b, Q, y, E, T, P, O, K, B, tA, nA, oA, u, s, o;
      return RA(this, function(d) {
        return this.ctx.save(), C = function(A, i) {
          switch (i) {
            case 0:
              return $e(A.topLeftBorderStroke, A.topRightBorderStroke);
            case 1:
              return $e(A.topRightBorderStroke, A.bottomRightBorderStroke);
            case 2:
              return $e(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
            default:
              return $e(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
          }
        }(p, g), b = Ls(p, g), w === 2 && (this.path(b), this.ctx.clip()), JA(b[0]) ? (Q = b[0].start.x, y = b[0].start.y) : (Q = b[0].x, y = b[0].y), JA(b[1]) ? (E = b[1].end.x, T = b[1].end.y) : (E = b[1].x, T = b[1].y), P = Math.abs(g === 0 || g === 2 ? Q - E : y - T), this.ctx.beginPath(), w === 3 ? this.formatPath(C) : this.formatPath(b.slice(0, 2)), O = c < 3 ? 3 * c : 2 * c, K = c < 3 ? 2 * c : c, w === 3 && (O = c, K = c), B = !0, P <= 2 * O ? B = !1 : P <= 2 * O + K ? (O *= tA = P / (2 * O + K), K *= tA) : (nA = Math.floor((P + K) / (O + K)), oA = (P - nA * O) / (nA - 1), K = (u = (P - (nA + 1) * O) / nA) <= 0 || Math.abs(K - oA) < Math.abs(K - u) ? oA : u), B && (w === 3 ? this.ctx.setLineDash([0, O + K]) : this.ctx.setLineDash([O, K])), w === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = c) : this.ctx.lineWidth = 2 * c + 1.1, this.ctx.strokeStyle = HA(r), this.ctx.stroke(), this.ctx.setLineDash([]), w === 2 && (JA(b[0]) && (s = b[3], o = b[0], this.ctx.beginPath(), this.formatPath([new aA(s.end.x, s.end.y), new aA(o.start.x, o.start.y)]), this.ctx.stroke()), JA(b[1]) && (s = b[1], o = b[2], this.ctx.beginPath(), this.formatPath([new aA(s.end.x, s.end.y), new aA(o.start.x, o.start.y)]), this.ctx.stroke())), this.ctx.restore(), [2];
      });
    });
  }, t.prototype.render = function(r) {
    return KA(this, 0, void 0, function() {
      var c;
      return RA(this, function(g) {
        switch (g.label) {
          case 0:
            return this.options.backgroundColor && (this.ctx.fillStyle = HA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), p = new Zo(r, null), w = new qo(p), Lr(p, w, w, C = []), $o(p.container, C), c = w, [4, this.renderStack(c)];
          case 1:
            return g.sent(), this.applyEffects([]), [2, this.canvas];
        }
        var p, w, C;
      });
    });
  }, t;
}(Aa), mu = function(e) {
  return e instanceof Mo || e instanceof Do || e instanceof $r && e.type !== Bi && e.type !== pi;
}, Cu = function(e, t) {
  switch (e) {
    case 0:
      return Ci(t);
    case 2:
      return function(r) {
        return [r.topLeftContentBox, r.topRightContentBox, r.bottomRightContentBox, r.bottomLeftContentBox];
      }(t);
    default:
      return vi(t);
  }
}, vu = function(e) {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    default:
      return "left";
  }
}, yu = ["-apple-system", "system-ui"], bu = function(e) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function(t) {
    return yu.indexOf(t) === -1;
  }) : e;
}, Qu = function(e) {
  function t(r, c) {
    var g = e.call(this, r, c) || this;
    return g.canvas = c.canvas ? c.canvas : document.createElement("canvas"), g.ctx = g.canvas.getContext("2d"), g.options = c, g.canvas.width = Math.floor(c.width * c.scale), g.canvas.height = Math.floor(c.height * c.scale), g.canvas.style.width = c.width + "px", g.canvas.style.height = c.height + "px", g.ctx.scale(g.options.scale, g.options.scale), g.ctx.translate(-c.x, -c.y), g.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + c.width + "x" + c.height + " at " + c.x + "," + c.y + ") with scale " + c.scale), g;
  }
  return et(t, e), t.prototype.render = function(r) {
    return KA(this, 0, void 0, function() {
      var c, g;
      return RA(this, function(p) {
        switch (p.label) {
          case 0:
            return c = Sr(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, r), [4, Fu(c)];
          case 1:
            return g = p.sent(), this.options.backgroundColor && (this.ctx.fillStyle = HA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(g, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
        }
      });
    });
  }, t;
}(Aa), Fu = function(e) {
  return new Promise(function(t, r) {
    var c = new Image();
    c.onload = function() {
      t(c);
    }, c.onerror = r, c.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, xu = function() {
  function e(t) {
    var r = t.id, c = t.enabled;
    this.id = r, this.enabled = c, this.start = Date.now();
  }
  return e.prototype.debug = function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Le([this.id, this.getTime() + "ms"], t)) : this.info.apply(this, t));
  }, e.prototype.getTime = function() {
    return Date.now() - this.start;
  }, e.prototype.info = function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Le([this.id, this.getTime() + "ms"], t));
  }, e.prototype.warn = function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Le([this.id, this.getTime() + "ms"], t)) : this.info.apply(this, t));
  }, e.prototype.error = function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Le([this.id, this.getTime() + "ms"], t)) : this.info.apply(this, t));
  }, e.instances = {}, e;
}(), Uu = function() {
  function e(t, r) {
    var c;
    this.windowBounds = r, this.instanceName = "#" + e.instanceCount++, this.logger = new xu({ id: this.instanceName, enabled: t.logging }), this.cache = (c = t.cache) !== null && c !== void 0 ? c : new nu(this, t);
  }
  return e.instanceCount = 1, e;
}();
typeof window < "u" && zo.setContext(window);
var Eu = function(e, t) {
  return KA(void 0, 0, void 0, function() {
    var r, c, g, p, w, C, b, Q, y, E, T, P, O, K, B, tA, nA, oA, u, s, o, d, A, i, n, h, a, l, f, m, v, x, U, F, S, H, D, R;
    return RA(this, function(W) {
      switch (W.label) {
        case 0:
          if (!e || typeof e != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (!(r = e.ownerDocument))
            throw new Error("Element is not attached to a Document");
          if (!(c = r.defaultView))
            throw new Error("Document is not attached to a Window");
          return g = { allowTaint: (d = t.allowTaint) !== null && d !== void 0 && d, imageTimeout: (A = t.imageTimeout) !== null && A !== void 0 ? A : 15e3, proxy: t.proxy, useCORS: (i = t.useCORS) !== null && i !== void 0 && i }, p = wr({ logging: (n = t.logging) === null || n === void 0 || n, cache: t.cache }, g), w = { windowWidth: (h = t.windowWidth) !== null && h !== void 0 ? h : c.innerWidth, windowHeight: (a = t.windowHeight) !== null && a !== void 0 ? a : c.innerHeight, scrollX: (l = t.scrollX) !== null && l !== void 0 ? l : c.pageXOffset, scrollY: (f = t.scrollY) !== null && f !== void 0 ? f : c.pageYOffset }, C = new wt(w.scrollX, w.scrollY, w.windowWidth, w.windowHeight), b = new Uu(p, C), Q = (m = t.foreignObjectRendering) !== null && m !== void 0 && m, y = { allowTaint: (v = t.allowTaint) !== null && v !== void 0 && v, onclone: t.onclone, ignoreElements: t.ignoreElements, inlineImages: Q, copyStyles: Q }, b.logger.debug("Starting document clone with size " + C.width + "x" + C.height + " scrolled to " + -C.left + "," + -C.top), E = new Is(b, e, y), (T = E.clonedReferenceElement) ? [4, E.toIFrame(r, C)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return P = W.sent(), O = An(T) || T.tagName === "HTML" ? function(V) {
            var _ = V.body, k = V.documentElement;
            if (!_ || !k)
              throw new Error("Unable to get document size");
            var M = Math.max(Math.max(_.scrollWidth, k.scrollWidth), Math.max(_.offsetWidth, k.offsetWidth), Math.max(_.clientWidth, k.clientWidth)), N = Math.max(Math.max(_.scrollHeight, k.scrollHeight), Math.max(_.offsetHeight, k.offsetHeight), Math.max(_.clientHeight, k.clientHeight));
            return new wt(0, 0, M, N);
          }(T.ownerDocument) : _i(b, T), K = O.width, B = O.height, tA = O.left, nA = O.top, oA = _u(b, T, t.backgroundColor), u = { canvas: t.canvas, backgroundColor: oA, scale: (U = (x = t.scale) !== null && x !== void 0 ? x : c.devicePixelRatio) !== null && U !== void 0 ? U : 1, x: ((F = t.x) !== null && F !== void 0 ? F : 0) + tA, y: ((S = t.y) !== null && S !== void 0 ? S : 0) + nA, width: (H = t.width) !== null && H !== void 0 ? H : Math.ceil(K), height: (D = t.height) !== null && D !== void 0 ? D : Math.ceil(B) }, Q ? (b.logger.debug("Document cloned, using foreign object rendering"), [4, new Qu(b, u).render(T)]) : [3, 3];
        case 2:
          return s = W.sent(), [3, 5];
        case 3:
          return b.logger.debug("Document cloned, element located at " + tA + "," + nA + " with size " + K + "x" + B + " using computed rendering"), b.logger.debug("Starting DOM parsing"), o = Ko(b, T), oA === o.styles.backgroundColor && (o.styles.backgroundColor = Bt.TRANSPARENT), b.logger.debug("Starting renderer for element at " + u.x + "," + u.y + " with size " + u.width + "x" + u.height), [4, new wu(b, u).render(o)];
        case 4:
          s = W.sent(), W.label = 5;
        case 5:
          return ((R = t.removeContainer) === null || R === void 0 || R) && (Is.destroy(P) || b.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), b.logger.debug("Finished rendering"), [2, s];
      }
    });
  });
}, _u = function(e, t, r) {
  var c = t.ownerDocument, g = c.documentElement ? Ce(e, getComputedStyle(c.documentElement).backgroundColor) : Bt.TRANSPARENT, p = c.body ? Ce(e, getComputedStyle(c.body).backgroundColor) : Bt.TRANSPARENT, w = typeof r == "string" ? Ce(e, r) : r === null ? Bt.TRANSPARENT : 4294967295;
  return t === c.documentElement ? Ft(g) ? Ft(p) ? w : p : g : w;
};
class tn {
  constructor() {
    $(this, "captureScreenshot", async (t) => {
      try {
        const r = window.innerWidth, c = window.innerHeight, g = window.scrollX, p = window.scrollY, w = await function(C, b) {
          return b === void 0 && (b = {}), Eu(C, b);
        }(t, { x: g, y: p, width: r, height: c, scrollX: 0, scrollY: 0, allowTaint: !0, useCORS: !0, backgroundColor: "transparent" });
        return await this.getBlobFromCanvas(w);
      } catch (r) {
        Yr(r.message);
      }
      return null;
    });
    $(this, "getBlobFromCanvas", (t) => new Promise((r) => {
      t.toBlob((c) => {
        r(c);
      });
    }));
  }
}
const Dr = "data:image/svg+xml,%3csvg%20width='50'%20height='51'%20viewBox='0%200%2050%2051'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.834%2021.5598L29.1673%2029.8931'%20stroke='%231C1C1E'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M29.1673%2021.56L20.834%2029.8933'%20stroke='%231C1C1E'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Ue = (e) => {
  const t = document.createElement("img");
  t.src = e;
  const r = document.createElement("button");
  return r.classList.add("shake-sdk-circle-button"), r.appendChild(t), r;
}, en = () => {
  const e = document.createElement("div");
  return e.classList.add("shake-sdk-card"), e;
}, ta = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15055_29642)'%3e%3cpath%20d='M12.3994%208.47314C13.6969%209.77065%2013.6969%2011.8743%2012.3994%2013.1719C11.1019%2014.4694%208.99819%2014.4694%207.70068%2013.1719C6.40316%2011.8743%206.40316%209.77065%207.70068%208.47314C8.99819%207.17562%2011.1019%207.17562%2012.3994%208.47314Z'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.5%207.49992V14.9999C17.5%2015.9208%2016.7542%2016.6666%2015.8333%2016.6666H4.16667C3.24583%2016.6666%202.5%2015.9208%202.5%2014.9999V7.49992C2.5%206.57908%203.24583%205.83325%204.16667%205.83325H5.83333L7.05167%203.74659C7.20083%203.49075%207.475%203.33325%207.77167%203.33325H12.1917C12.4842%203.33325%2012.755%203.48659%2012.9058%203.73659L14.1667%205.83325H15.8333C16.7542%205.83325%2017.5%206.57908%2017.5%207.49992Z'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15055_29642'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", ea = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15055_29718)'%3e%3cpath%20d='M10.9375%2014.7916H4.375C3.33917%2014.7916%202.5%2013.9524%202.5%2012.9166V7.08325C2.5%206.04742%203.33917%205.20825%204.375%205.20825H10.9375C11.9733%205.20825%2012.8125%206.04742%2012.8125%207.08325V12.9166C12.8125%2013.9524%2011.9733%2014.7916%2010.9375%2014.7916Z'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.8125%2010.9141L15.975%2013.4591C16.5883%2013.9533%2017.5%2013.5166%2017.5%2012.7291V7.27077C17.5%206.48327%2016.5883%206.04661%2015.975%206.54077L12.8125%209.08577'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15055_29718'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", ia = (e, t, r, c) => {
  const g = document.createElement("img");
  g.src = e, g.setAttribute("draggable", "false");
  const p = document.createElement("button");
  p.classList.add("shake-sdk-bubble"), p.style.backgroundColor = t, p.style.boxShadow = `0 2px 2px ${r}`, p.appendChild(g);
  const w = document.createElement("div"), C = w.attachShadow({ mode: "open" });
  return Ut(C), C.appendChild(p), Su(p, c), w;
}, Su = (e, t) => {
  let r = !1, c = 0, g = 0, p = !1;
  e.style.left = window.innerWidth - e.offsetWidth - 100 + "px", e.style.top = window.innerHeight - e.offsetHeight - 100 + "px", e.addEventListener("mousedown", function(w) {
    r = !0, p = !1, c = w.clientX - e.getBoundingClientRect().left, g = w.clientY - e.getBoundingClientRect().top;
  }), document.addEventListener("mousemove", function(w) {
    if (r) {
      const C = w.clientX - c, b = w.clientY - g, Q = window.innerWidth - e.offsetWidth, y = window.innerHeight - e.offsetHeight;
      e.style.left = Math.min(Math.max(0, C), Q) + "px", e.style.top = Math.min(Math.max(0, b), y) + "px", (Math.abs(w.movementX) > 2 || Math.abs(w.movementY) > 2) && (p = !0);
    }
  }), e.addEventListener("mouseup", function() {
    r && (r = !1, p || t());
  });
};
function Mr(e) {
  const t = new Date(e);
  return `${t.getUTCFullYear()}-${(t.getUTCMonth() + 1).toString().padStart(2, "0")}-${t.getUTCDate().toString().padStart(2, "0")}T${t.getUTCHours().toString().padStart(2, "0")}:${t.getUTCMinutes().toString().padStart(2, "0")}:${t.getUTCSeconds().toString().padStart(2, "0")}.${t.getUTCMilliseconds().toString().padStart(3, "0")}Z`;
}
const ra = (e) => e === _A.IMAGE ? `screenshot_${Mr((/* @__PURE__ */ new Date()).toString())}.jpg` : e === _A.VIDEO ? `screen_recording_${Mr((/* @__PURE__ */ new Date()).toString())}.mp4` : "";
async function na(e) {
  await sa(e, _A.IMAGE);
}
async function sa(e, t) {
  if (!e)
    return;
  const r = { type: t, data: e, name: ra(t), timestamp: (/* @__PURE__ */ new Date()).getTime() };
  await or(r);
}
const oa = async () => {
  const e = SA.localStorage.getShakeState(), t = await Ui(), r = ga(e, t);
  document.body.appendChild(r), SA.localStorage.setShakeOpened(!0);
}, Ee = (e = !0) => {
  const t = SA.localStorage;
  e && (td(), t.setShakeState(null), new Promise((c, g) => {
    const p = indexedDB.open(ft, 2);
    p.onerror = function() {
      g("Error opening database");
    }, p.onsuccess = function(w) {
      const C = w.target.result.transaction([At], "readwrite").objectStore(At).clear();
      C.onsuccess = function() {
        c("All files deleted successfully from IndexedDB");
      }, C.onerror = function() {
        g("Error deleting files from IndexedDB");
      };
    }, p.onupgradeneeded = pt;
  }));
  const r = document.getElementById("shake-sdk-root");
  r == null || r.remove(), t.setShakeOpened(!1);
}, rn = () => {
  Ee(!1);
  const e = ia("data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20width='16px'%20height='16px'%20viewBox='0%200%2032%2032'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform='translate(-35.852326,-90.237974)'%3e%3cpath%20style='fill:%23ff0000'%20d='m%2067.852325,106.23797%20a%2016,16%200%200%201%20-16,16%2016,16%200%200%201%20-16,-16%2016,16%200%200%201%2016,-15.999997%2016,16%200%200%201%2016,15.999997%20z'/%3e%3c/g%3e%3c/svg%3e", "white", "#d3d3d3", () => {
    e.remove(), (async () => {
      const t = await new tn().captureScreenshot(document.body);
      t && await na(t), await oa();
    })();
  });
  document.body.appendChild(e);
}, xi = class xi {
  constructor() {
    $(this, "onStartListener", null);
    $(this, "onStopListener", null);
    $(this, "stream", null);
    $(this, "mediaRecorder", null);
    $(this, "recordedChunks", []);
    $(this, "timeout", null);
    $(this, "isRecording", !1);
    $(this, "start", async () => {
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
    $(this, "stop", () => {
      var t;
      if ((t = this.mediaRecorder) == null || t.stop(), this.stream) {
        const r = this.stream.getTracks();
        for (let c = 0; c < r.length; c++)
          r[c].stop();
      }
    });
    $(this, "startTimer", () => {
      this.stopTimer(), this.timeout = window.setTimeout(() => {
        this.stop();
      }, xi.SCREEN_RECORDING_TIME);
    });
    $(this, "stopTimer", () => {
      this.timeout && (window.clearTimeout(this.timeout), this.timeout = null);
    });
  }
};
$(xi, "SCREEN_RECORDING_TIME", 3e4);
let Pr = xi;
const ku = async (e) => {
  await async function(t) {
    await sa(t, _A.VIDEO);
  }(e), await oa();
}, nn = async () => {
  try {
    const e = ia("data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20width='15px'%20height='15px'%20viewBox='0%200%2032%2032'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%3e%3crect%20stroke='%23000'%20rx='3'%20stroke-width='0'%20height='32'%20width='32'%20y='0'%20x='0'%20fill='%23ffffff'/%3e%3c/g%3e%3c/svg%3e", "red", "#d90000", () => {
      t.stop();
    }), t = new Pr();
    t.onStartListener = () => {
      document.body.appendChild(e), Ee(!1);
    }, t.onStopListener = (r) => {
      e.remove(), ku(r);
    }, await t.start();
  } catch (e) {
    Yr(e == null ? void 0 : e.message);
  }
}, aa = "data:image/svg+xml,%3csvg%20width='23'%20height='23'%20viewBox='0%200%2023%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15050_29400)'%3e%3cpath%20d='M11.3994%207.80005V15'%20stroke='%238E8E93'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.9998%2011.4001H7.7998'%20stroke='%238E8E93'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15050_29400'%3e%3crect%20width='21.6'%20height='21.6'%20fill='white'%20transform='translate(0.599609%200.600098)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", ca = (e, t, r) => {
  let c = !1;
  const g = uA();
  return g.classList.add("shake-sdk-context-menu"), t.forEach((p) => g.appendChild(p)), document.addEventListener("click", function(p) {
    c && p.target !== e && (g.style.display = "none", c = !1);
  }), { menu: g, toggle: () => {
    c ? (g.style.display = "none", c = !1) : (g.style.display = r ? "flex" : "block", c = !0), g.style.left = e.getBoundingClientRect().left + "px", g.style.top = e.getBoundingClientRect().top + "px";
  } };
}, Ps = ({ img: e, text: t, onClick: r }) => {
  const c = document.createElement("button");
  return c.classList.add("shake-sdk-context-menu-item"), c.onclick = r, c.appendChild(tt(e)), c.appendChild(((g) => {
    const p = document.createElement("p");
    return p.classList.add("shake-sdk-text-p2"), p.innerText = g, p;
  })(t)), c;
}, la = async () => (await Ui()).length >= 10, bi = () => {
  const e = navigator.userAgent;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e) || window.ontouchstart !== void 0;
}, Tu = () => {
  const e = Ue(aa);
  e.classList.add("shake-sdk-attachment-add-button");
  const t = uA();
  return t.classList.add("shake-sdk-attachments-add-item"), t.appendChild(e), t.appendChild(((r) => {
    const c = [];
    c.push(Ps({ img: ta, text: wA().shake_sdk_dialog_add_attachment_grab_screenshot, onClick: rn })), bi() || c.push(Ps({ img: ea, text: wA().shake_sdk_dialog_add_attachment_record_screen, onClick: nn }));
    const { menu: g, toggle: p } = ca(r, c);
    return r.onclick = async (w) => {
      w.stopPropagation(), await la() ? new fr(wA().shake_sdk_dialog_attachment_limit_message, 4e3, wA().shake_sdk_dialog_attachment_limit_title) : p();
    }, g;
  })(e)), t;
}, ha = "data:image/svg+xml,%3csvg%20width='31'%20height='32'%20viewBox='0%200%2031%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.7285%2013.4543L17.8197%2018.5455'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.8197%2013.4545L12.7285%2018.5457'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Di = ({ src: e, controls: t, autoplay: r }) => {
  const c = document.createElement("video");
  return c.classList.add("shake-sdk-video"), c.src = e, c.controls = t ?? !1, c.preload = "metadata", c.autoplay = r ?? !1, c.loop = !0, c;
}, Iu = (e) => {
  const t = uA();
  return t.classList.add("shake-sdk-attachment-title-box"), t.appendChild(((r) => {
    const c = document.createElement("p");
    return c.classList.add("shake-sdk-text-p3"), c.innerText = r, c;
  })(e)), t;
}, Hu = (e, t) => {
  const r = vA.attachmentsManager, c = /* @__PURE__ */ new Map();
  let g = e.length - 1;
  const p = (y) => Array.from(c.keys()).find((E) => E === y.name) ?? y.name, w = (y) => {
    g = Array.from(c.keys()).indexOf(p(y)), b();
  }, C = (y) => {
    r.removeAttachment(y);
  };
  r.removeObservers.push((y) => {
    const E = c.get(p(y));
    E && (E.remove(), c.delete(p(y)), c.size - 1 < g && (g = c.size - 1), b());
  }), r.updateObservers.push((y) => {
    const E = c.get(p(y));
    E && ((T, P) => {
      const O = URL.createObjectURL(P.drawingData ?? P.data), K = T.getElementsByClassName("shake-sdk-attachment-item-thumbnail");
      P.type == _A.IMAGE && (K[0].src = O), P.type == _A.VIDEO && (K[0].src = O);
    })(E, y);
  });
  const b = () => {
    if (g < 0)
      return void t(null);
    const y = Array.from(c.keys())[g], E = Array.from(c.values())[g], T = "shake-sdk-attachment-item-selected", P = Array.from(c.values());
    if (P) {
      for (const O of P)
        O.classList.remove(T);
      E == null || E.classList.add(T);
    }
    t(y);
  }, Q = uA();
  return Q.classList.add("shake-sdk-attachments-items"), e.forEach((y) => {
    const E = e.find((P) => P.name === p(y));
    if (!E)
      return;
    const T = ((P, O, K) => {
      const B = Ue(ha);
      let tA;
      B.classList.add("shake-sdk-attachment-remove"), B.onclick = (A) => {
        A.stopPropagation(), K(P);
      };
      const nA = URL.createObjectURL(P.drawingData ?? P.data);
      tA = P.type == _A.IMAGE ? tt(nA) : Di({ src: nA + "#t=0.1", autoplay: !0 }), tA.classList.add("shake-sdk-attachment-item-thumbnail");
      const oA = en();
      oA.classList.add("shake-sdk-attachment-item-card"), oA.appendChild(tA), oA.appendChild(B);
      const u = P.type == _A.IMAGE ? wA().shake_sdk_dialog_add_attachment_type_image : wA().shake_sdk_dialog_add_attachment_type_video, s = Iu(u), o = uA();
      o.classList.add("shake-sdk-attachment-item-title"), o.appendChild(s);
      const d = uA();
      return d.classList.add("shake-sdk-attachment-item"), d.onclick = () => O(P), d.appendChild(oA), d.appendChild(o), d;
    })(E, w, C);
    c.set(y.name, T), Q.appendChild(T);
  }), Q.appendChild(Tu()), b(), Q;
};
var xA = ((e) => (e.PENCIL = "pencil", e.BLUR = "blur", e.ELLIPSE = "ellipse", e.RECT = "rect", e))(xA || {}), Be = {};
const rr = Oa(Object.freeze(Object.defineProperty({ __proto__: null, default: {} }, Symbol.toStringTag, { value: "Module" })));
(function(e) {
  /*! Fabric.js Copyright 2008-2015, Printio (Juriy Zaytsev, Maxim Chernyak) */
  var t, r, c, g, p, w, C, b, Q, y, E, T, P, O, K, B = B || { version: "5.3.0" };
  if (e.fabric = B, typeof document < "u" && typeof window < "u")
    document instanceof (typeof HTMLDocument < "u" ? HTMLDocument : Document) ? B.document = document : B.document = document.implementation.createHTMLDocument(""), B.window = window;
  else {
    var tA = new rr.JSDOM(decodeURIComponent("%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E"), { features: { FetchExternalResources: ["img"] }, resources: "usable" }).window;
    B.document = tA.document, B.jsdomImplForWrapper = rr.implForWrapper, B.nodeCanvas = rr.Canvas, B.window = tA, DOMParser = B.window.DOMParser;
  }
  function nA(u, s) {
    var o = u.canvas, d = s.targetCanvas, A = d.getContext("2d");
    A.translate(0, d.height), A.scale(1, -1);
    var i = o.height - d.height;
    A.drawImage(o, 0, i, d.width, d.height, 0, 0, d.width, d.height);
  }
  function oA(u, s) {
    var o = s.targetCanvas.getContext("2d"), d = s.destinationWidth, A = s.destinationHeight, i = d * A * 4, n = new Uint8Array(this.imageBuffer, 0, i), h = new Uint8ClampedArray(this.imageBuffer, 0, i);
    u.readPixels(0, 0, d, A, u.RGBA, u.UNSIGNED_BYTE, n);
    var a = new ImageData(h, d, A);
    o.putImageData(a, 0, 0);
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
      var a = n.indexOf(h);
      return a !== -1 && n.splice(a, 1), n;
    }, getRandomInt: function(n, h) {
      return Math.floor(Math.random() * (h - n + 1)) + n;
    }, degreesToRadians: function(n) {
      return n * A;
    }, radiansToDegrees: function(n) {
      return n / A;
    }, rotatePoint: function(n, h, a) {
      var l = new B.Point(n.x - h.x, n.y - h.y), f = B.util.rotateVector(l, a);
      return new B.Point(f.x, f.y).addEquals(h);
    }, rotateVector: function(n, h) {
      var a = B.util.sin(h), l = B.util.cos(h);
      return { x: n.x * l - n.y * a, y: n.x * a + n.y * l };
    }, createVector: function(n, h) {
      return new B.Point(h.x - n.x, h.y - n.y);
    }, calcAngleBetweenVectors: function(n, h) {
      return Math.acos((n.x * h.x + n.y * h.y) / (Math.hypot(n.x, n.y) * Math.hypot(h.x, h.y)));
    }, getHatVector: function(n) {
      return new B.Point(n.x, n.y).multiply(1 / Math.hypot(n.x, n.y));
    }, getBisector: function(n, h, a) {
      var l = B.util.createVector(n, h), f = B.util.createVector(n, a), m = B.util.calcAngleBetweenVectors(l, f), v = m * (B.util.calcAngleBetweenVectors(B.util.rotateVector(l, m), f) === 0 ? 1 : -1) / 2;
      return { vector: B.util.getHatVector(B.util.rotateVector(l, v)), angle: m };
    }, projectStrokeOnPoints: function(n, h, a) {
      var l = [], f = h.strokeWidth / 2, m = h.strokeUniform ? new B.Point(1 / h.scaleX, 1 / h.scaleY) : new B.Point(1, 1), v = function(x) {
        var U = f / Math.hypot(x.x, x.y);
        return new B.Point(x.x * U * m.x, x.y * U * m.y);
      };
      return n.length <= 1 || n.forEach(function(x, U) {
        var F, S, H = new B.Point(x.x, x.y);
        U === 0 ? (S = n[U + 1], F = a ? v(B.util.createVector(S, H)).addEquals(H) : n[n.length - 1]) : U === n.length - 1 ? (F = n[U - 1], S = a ? v(B.util.createVector(F, H)).addEquals(H) : n[0]) : (F = n[U - 1], S = n[U + 1]);
        var D, R, W = B.util.getBisector(H, F, S), V = W.vector, _ = W.angle;
        if (h.strokeLineJoin === "miter" && (D = -f / Math.sin(_ / 2), R = new B.Point(V.x * D * m.x, V.y * D * m.y), Math.hypot(R.x, R.y) / f <= h.strokeMiterLimit))
          return l.push(H.add(R)), void l.push(H.subtract(R));
        D = -f * Math.SQRT2, R = new B.Point(V.x * D * m.x, V.y * D * m.y), l.push(H.add(R)), l.push(H.subtract(R));
      }), l;
    }, transformPoint: function(n, h, a) {
      return a ? new B.Point(h[0] * n.x + h[2] * n.y, h[1] * n.x + h[3] * n.y) : new B.Point(h[0] * n.x + h[2] * n.y + h[4], h[1] * n.x + h[3] * n.y + h[5]);
    }, makeBoundingBoxFromPoints: function(n, h) {
      if (h)
        for (var a = 0; a < n.length; a++)
          n[a] = B.util.transformPoint(n[a], h);
      var l = [n[0].x, n[1].x, n[2].x, n[3].x], f = B.util.array.min(l), m = B.util.array.max(l) - f, v = [n[0].y, n[1].y, n[2].y, n[3].y], x = B.util.array.min(v);
      return { left: f, top: x, width: m, height: B.util.array.max(v) - x };
    }, invertTransform: function(n) {
      var h = 1 / (n[0] * n[3] - n[1] * n[2]), a = [h * n[3], -h * n[1], -h * n[2], h * n[0]], l = B.util.transformPoint({ x: n[4], y: n[5] }, a, !0);
      return a[4] = -l.x, a[5] = -l.y, a;
    }, toFixed: function(n, h) {
      return parseFloat(Number(n).toFixed(h));
    }, parseUnit: function(n, h) {
      var a = /\D{0,2}$/.exec(n), l = parseFloat(n);
      switch (h || (h = B.Text.DEFAULT_SVG_FONT_SIZE), a[0]) {
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
      var h, a = n.split("."), l = a.length, f = u || B.window;
      for (h = 0; h < l; ++h)
        f = f[a[h]];
      return f;
    }, loadImage: function(n, h, a, l) {
      if (n) {
        var f = B.util.createImage(), m = function() {
          h && h.call(a, f, !1), f = f.onload = f.onerror = null;
        };
        f.onload = m, f.onerror = function() {
          B.log("Error loading " + f.src), h && h.call(a, null, !0), f = f.onload = f.onerror = null;
        }, n.indexOf("data") !== 0 && l != null && (f.crossOrigin = l), n.substring(0, 14) === "data:image/svg" && (f.onload = null, B.util.loadImageInDom(f, m)), f.src = n;
      } else
        h && h.call(a, n);
    }, loadImageInDom: function(n, h) {
      var a = B.document.createElement("div");
      a.style.width = a.style.height = "1px", a.style.left = a.style.top = "-100%", a.style.position = "absolute", a.appendChild(n), B.document.querySelector("body").appendChild(a), n.onload = function() {
        h(), a.parentNode.removeChild(a), a = null;
      };
    }, enlivenObjects: function(n, h, a, l) {
      var f = [], m = 0, v = (n = n || []).length;
      function x() {
        ++m === v && h && h(f.filter(function(U) {
          return U;
        }));
      }
      v ? n.forEach(function(U, F) {
        U && U.type ? B.util.getKlass(U.type, a).fromObject(U, function(S, H) {
          H || (f[F] = S), l && l(U, S, H), x();
        }) : x();
      }) : h && h(f);
    }, enlivenObjectEnlivables: function(n, h, a) {
      var l = B.Object.ENLIVEN_PROPS.filter(function(f) {
        return !!n[f];
      });
      B.util.enlivenObjects(l.map(function(f) {
        return n[f];
      }), function(f) {
        var m = {};
        l.forEach(function(v, x) {
          m[v] = f[x], h && (h[v] = f[x]);
        }), a && a(m);
      });
    }, enlivenPatterns: function(n, h) {
      function a() {
        ++f === m && h && h(l);
      }
      var l = [], f = 0, m = (n = n || []).length;
      m ? n.forEach(function(v, x) {
        v && v.source ? new B.Pattern(v, function(U) {
          l[x] = U, a();
        }) : (l[x] = v, a());
      }) : h && h(l);
    }, groupSVGElements: function(n, h, a) {
      var l;
      return n && n.length === 1 ? (a !== void 0 && (n[0].sourcePath = a), n[0]) : (h && (h.width && h.height ? h.centerPoint = { x: h.width / 2, y: h.height / 2 } : (delete h.width, delete h.height)), l = new B.Group(n, h), a !== void 0 && (l.sourcePath = a), l);
    }, populateWithProperties: function(n, h, a) {
      if (a && Array.isArray(a))
        for (var l = 0, f = a.length; l < f; l++)
          a[l] in n && (h[a[l]] = n[a[l]]);
    }, createCanvasElement: function() {
      return B.document.createElement("canvas");
    }, copyCanvasElement: function(n) {
      var h = B.util.createCanvasElement();
      return h.width = n.width, h.height = n.height, h.getContext("2d").drawImage(n, 0, 0), h;
    }, toDataURL: function(n, h, a) {
      return n.toDataURL("image/" + h, a);
    }, createImage: function() {
      return B.document.createElement("img");
    }, multiplyTransformMatrices: function(n, h, a) {
      return [n[0] * h[0] + n[2] * h[1], n[1] * h[0] + n[3] * h[1], n[0] * h[2] + n[2] * h[3], n[1] * h[2] + n[3] * h[3], a ? 0 : n[0] * h[4] + n[2] * h[5] + n[4], a ? 0 : n[1] * h[4] + n[3] * h[5] + n[5]];
    }, qrDecompose: function(n) {
      var h = o(n[1], n[0]), a = d(n[0], 2) + d(n[1], 2), l = s(a), f = (n[0] * n[3] - n[2] * n[1]) / l, m = o(n[0] * n[2] + n[1] * n[3], a);
      return { angle: h / A, scaleX: l, scaleY: f, skewX: m / A, skewY: 0, translateX: n[4], translateY: n[5] };
    }, calcRotateMatrix: function(n) {
      if (!n.angle)
        return B.iMatrix.concat();
      var h = B.util.degreesToRadians(n.angle), a = B.util.cos(h), l = B.util.sin(h);
      return [a, l, -l, a, 0, 0];
    }, calcDimensionsMatrix: function(n) {
      var h = n.scaleX === void 0 ? 1 : n.scaleX, a = n.scaleY === void 0 ? 1 : n.scaleY, l = [n.flipX ? -h : h, 0, 0, n.flipY ? -a : a, 0, 0], f = B.util.multiplyTransformMatrices, m = B.util.degreesToRadians;
      return n.skewX && (l = f(l, [1, 0, Math.tan(m(n.skewX)), 1], !0)), n.skewY && (l = f(l, [1, Math.tan(m(n.skewY)), 0, 1], !0)), l;
    }, composeMatrix: function(n) {
      var h = [1, 0, 0, 1, n.translateX || 0, n.translateY || 0], a = B.util.multiplyTransformMatrices;
      return n.angle && (h = a(h, B.util.calcRotateMatrix(n))), (n.scaleX !== 1 || n.scaleY !== 1 || n.skewX || n.skewY || n.flipX || n.flipY) && (h = a(h, B.util.calcDimensionsMatrix(n))), h;
    }, resetObjectTransform: function(n) {
      n.scaleX = 1, n.scaleY = 1, n.skewX = 0, n.skewY = 0, n.flipX = !1, n.flipY = !1, n.rotate(0);
    }, saveObjectTransform: function(n) {
      return { scaleX: n.scaleX, scaleY: n.scaleY, skewX: n.skewX, skewY: n.skewY, angle: n.angle, left: n.left, flipX: n.flipX, flipY: n.flipY, top: n.top };
    }, isTransparent: function(n, h, a, l) {
      l > 0 && (h > l ? h -= l : h = 0, a > l ? a -= l : a = 0);
      var f, m = !0, v = n.getImageData(h, a, 2 * l || 1, 2 * l || 1), x = v.data.length;
      for (f = 3; f < x && (m = v.data[f] <= 0); f += 4)
        ;
      return v = null, m;
    }, parsePreserveAspectRatioAttribute: function(n) {
      var h, a = "meet", l = n.split(" ");
      return l && l.length && ((a = l.pop()) !== "meet" && a !== "slice" ? (h = a, a = "meet") : l.length && (h = l.pop())), { meetOrSlice: a, alignX: h !== "none" ? h.slice(1, 4) : "none", alignY: h !== "none" ? h.slice(5, 8) : "none" };
    }, clearFabricFontCache: function(n) {
      (n = (n || "").toLowerCase()) ? B.charWidthsCache[n] && delete B.charWidthsCache[n] : B.charWidthsCache = {};
    }, limitDimsByArea: function(n, h) {
      var a = Math.sqrt(h * n), l = Math.floor(h / a);
      return { x: Math.floor(a), y: l };
    }, capValue: function(n, h, a) {
      return Math.max(n, Math.min(h, a));
    }, findScaleToFit: function(n, h) {
      return Math.min(h.width / n.width, h.height / n.height);
    }, findScaleToCover: function(n, h) {
      return Math.max(h.width / n.width, h.height / n.height);
    }, matrixToSVG: function(n) {
      return "matrix(" + n.map(function(h) {
        return B.util.toFixed(h, B.Object.NUM_FRACTION_DIGITS);
      }).join(" ") + ")";
    }, removeTransformFromObject: function(n, h) {
      var a = B.util.invertTransform(h), l = B.util.multiplyTransformMatrices(a, n.calcOwnMatrix());
      B.util.applyTransformToObject(n, l);
    }, addTransformToObject: function(n, h) {
      B.util.applyTransformToObject(n, B.util.multiplyTransformMatrices(h, n.calcOwnMatrix()));
    }, applyTransformToObject: function(n, h) {
      var a = B.util.qrDecompose(h), l = new B.Point(a.translateX, a.translateY);
      n.flipX = !1, n.flipY = !1, n.set("scaleX", a.scaleX), n.set("scaleY", a.scaleY), n.skewX = a.skewX, n.skewY = a.skewY, n.angle = a.angle, n.setPositionByOrigin(l, "center", "center");
    }, sizeAfterTransform: function(n, h, a) {
      var l = n / 2, f = h / 2, m = [{ x: -l, y: -f }, { x: l, y: -f }, { x: -l, y: f }, { x: l, y: f }], v = B.util.calcDimensionsMatrix(a), x = B.util.makeBoundingBoxFromPoints(m, v);
      return { x: x.width, y: x.height };
    }, mergeClipPaths: function(n, h) {
      var a = n, l = h;
      a.inverted && !l.inverted && (a = h, l = n), B.util.applyTransformToObject(l, B.util.multiplyTransformMatrices(B.util.invertTransform(a.calcTransformMatrix()), l.calcTransformMatrix()));
      var f = a.inverted && l.inverted;
      return f && (a.inverted = l.inverted = !1), new B.Group([a], { clipPath: l, inverted: f });
    }, hasStyleChanged: function(n, h, a) {
      return a = a || !1, n.fill !== h.fill || n.stroke !== h.stroke || n.strokeWidth !== h.strokeWidth || n.fontSize !== h.fontSize || n.fontFamily !== h.fontFamily || n.fontWeight !== h.fontWeight || n.fontStyle !== h.fontStyle || n.textBackgroundColor !== h.textBackgroundColor || n.deltaY !== h.deltaY || a && (n.overline !== h.overline || n.underline !== h.underline || n.linethrough !== h.linethrough);
    }, stylesToArray: function(n, h) {
      n = B.util.object.clone(n, !0);
      for (var a = h.split(`
`), l = -1, f = {}, m = [], v = 0; v < a.length; v++)
        if (n[v])
          for (var x = 0; x < a[v].length; x++) {
            l++;
            var U = n[v][x];
            U && Object.keys(U).length > 0 && (B.util.hasStyleChanged(f, U, !0) ? m.push({ start: l, end: l + 1, style: U }) : m[m.length - 1].end++), f = U || {};
          }
        else
          l += a[v].length;
      return m;
    }, stylesFromArray: function(n, h) {
      if (!Array.isArray(n))
        return n;
      for (var a = h.split(`
`), l = -1, f = 0, m = {}, v = 0; v < a.length; v++)
        for (var x = 0; x < a[v].length; x++)
          l++, n[f] && n[f].start <= l && l < n[f].end && (m[v] = m[v] || {}, m[v][x] = Object.assign({}, n[f].style), l === n[f].end - 1 && f++);
      return m;
    } };
  }(e), function() {
    var u = Array.prototype.join, s = { m: 2, l: 2, h: 1, v: 1, c: 6, s: 4, q: 4, t: 2, a: 7 }, o = { m: "l", M: "L" };
    function d(U, F, S, H, D, R, W, V, _, k, M) {
      var N = B.util.cos(U), X = B.util.sin(U), L = B.util.cos(F), I = B.util.sin(F), j = S * D * L - H * R * I + W, Y = H * D * L + S * R * I + V;
      return ["C", k + _ * (-S * D * X - H * R * N), M + _ * (-H * D * X + S * R * N), j + _ * (S * D * I + H * R * L), Y + _ * (H * D * I - S * R * L), j, Y];
    }
    function A(U, F, S, H) {
      var D = Math.atan2(F, U), R = Math.atan2(H, S);
      return R >= D ? R - D : 2 * Math.PI - (D - R);
    }
    function i(U, F, S) {
      for (var H = S[1], D = S[2], R = S[3], W = S[4], V = S[5], _ = function(N, X, L, I, j, Y, G) {
        var z = Math.PI, Z = G * z / 180, eA = B.util.sin(Z), iA = B.util.cos(Z), q = 0, rA = 0, J = -iA * N * 0.5 - eA * X * 0.5, lA = -iA * X * 0.5 + eA * N * 0.5, sA = (L = Math.abs(L)) * L, hA = (I = Math.abs(I)) * I, pA = lA * lA, VA = J * J, at = sA * hA - sA * pA - hA * VA, Et = 0;
        if (at < 0) {
          var QA = Math.sqrt(1 - at / (sA * hA));
          L *= QA, I *= QA;
        } else
          Et = (j === Y ? -1 : 1) * Math.sqrt(at / (sA * pA + hA * VA));
        var XA = Et * L * lA / I, ct = -Et * I * J / L, Ot = iA * XA - eA * ct + 0.5 * N, te = eA * XA + iA * ct + 0.5 * X, Mi = A(1, 0, (J - XA) / L, (lA - ct) / I), Lt = A((J - XA) / L, (lA - ct) / I, (-J - XA) / L, (-lA - ct) / I);
        Y === 0 && Lt > 0 ? Lt -= 2 * z : Y === 1 && Lt < 0 && (Lt += 2 * z);
        for (var sn = Math.ceil(Math.abs(Lt / z * 2)), ke = [], ee = Lt / sn, Ba = 8 / 3 * Math.sin(ee / 4) * Math.sin(ee / 4) / Math.sin(ee / 2), Pi = Mi + ee, ie = 0; ie < sn; ie++)
          ke[ie] = d(Mi, Pi, iA, eA, L, I, Ot, te, Ba, q, rA), q = ke[ie][5], rA = ke[ie][6], Mi = Pi, Pi += ee;
        return ke;
      }(S[6] - U, S[7] - F, H, D, W, V, R), k = 0, M = _.length; k < M; k++)
        _[k][1] += U, _[k][2] += F, _[k][3] += U, _[k][4] += F, _[k][5] += U, _[k][6] += F;
      return _;
    }
    function n(U, F, S, H) {
      return Math.sqrt((S - U) * (S - U) + (H - F) * (H - F));
    }
    function h(U, F, S, H, D, R, W, V) {
      return function(_) {
        var k, M = (k = _) * k * k, N = function(I) {
          return 3 * I * I * (1 - I);
        }(_), X = function(I) {
          return 3 * I * (1 - I) * (1 - I);
        }(_), L = function(I) {
          return (1 - I) * (1 - I) * (1 - I);
        }(_);
        return { x: W * M + D * N + S * X + U * L, y: V * M + R * N + H * X + F * L };
      };
    }
    function a(U, F, S, H, D, R, W, V) {
      return function(_) {
        var k = 1 - _, M = 3 * k * k * (S - U) + 6 * k * _ * (D - S) + 3 * _ * _ * (W - D), N = 3 * k * k * (H - F) + 6 * k * _ * (R - H) + 3 * _ * _ * (V - R);
        return Math.atan2(N, M);
      };
    }
    function l(U, F, S, H, D, R) {
      return function(W) {
        var V, _ = (V = W) * V, k = function(N) {
          return 2 * N * (1 - N);
        }(W), M = function(N) {
          return (1 - N) * (1 - N);
        }(W);
        return { x: D * _ + S * k + U * M, y: R * _ + H * k + F * M };
      };
    }
    function f(U, F, S, H, D, R) {
      return function(W) {
        var V = 1 - W, _ = 2 * V * (S - U) + 2 * W * (D - S), k = 2 * V * (H - F) + 2 * W * (R - H);
        return Math.atan2(k, _);
      };
    }
    function m(U, F, S) {
      var H, D, R = { x: F, y: S }, W = 0;
      for (D = 1; D <= 100; D += 1)
        H = U(D / 100), W += n(R.x, R.y, H.x, H.y), R = H;
      return W;
    }
    function v(U, F) {
      for (var S, H, D, R = 0, W = 0, V = U.iterator, _ = { x: U.x, y: U.y }, k = 0.01, M = U.angleFinder; W < F && k > 1e-4; )
        S = V(R), D = R, (H = n(_.x, _.y, S.x, S.y)) + W > F ? (R -= k, k /= 2) : (_ = S, R += k, W += H);
      return S.angle = M(D), S;
    }
    function x(U) {
      for (var F, S, H, D, R = 0, W = U.length, V = 0, _ = 0, k = 0, M = 0, N = [], X = 0; X < W; X++) {
        switch (H = { x: V, y: _, command: (F = U[X])[0] }, F[0]) {
          case "M":
            H.length = 0, k = V = F[1], M = _ = F[2];
            break;
          case "L":
            H.length = n(V, _, F[1], F[2]), V = F[1], _ = F[2];
            break;
          case "C":
            S = h(V, _, F[1], F[2], F[3], F[4], F[5], F[6]), D = a(V, _, F[1], F[2], F[3], F[4], F[5], F[6]), H.iterator = S, H.angleFinder = D, H.length = m(S, V, _), V = F[5], _ = F[6];
            break;
          case "Q":
            S = l(V, _, F[1], F[2], F[3], F[4]), D = f(V, _, F[1], F[2], F[3], F[4]), H.iterator = S, H.angleFinder = D, H.length = m(S, V, _), V = F[3], _ = F[4];
            break;
          case "Z":
          case "z":
            H.destX = k, H.destY = M, H.length = n(V, _, k, M), V = k, _ = M;
        }
        R += H.length, N.push(H);
      }
      return N.push({ length: R, x: V, y: _ }), N;
    }
    B.util.joinPath = function(U) {
      return U.map(function(F) {
        return F.join(" ");
      }).join(" ");
    }, B.util.parsePath = function(U) {
      var F, S, H, D, R, W = [], V = [], _ = B.rePathCommand, k = "[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?\\s*", M = "(" + k + ")" + B.commaWsp, N = "([01])" + B.commaWsp + "?", X = new RegExp(M + "?" + M + "?" + M + N + N + M + "?(" + k + ")", "g");
      if (!U || !U.match)
        return W;
      for (var L, I = 0, j = (R = U.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi)).length; I < j; I++) {
        D = (F = R[I]).slice(1).trim(), V.length = 0;
        var Y = F.charAt(0);
        if (L = [Y], Y.toLowerCase() === "a")
          for (var G; G = X.exec(D); )
            for (var z = 1; z < G.length; z++)
              V.push(G[z]);
        else
          for (; H = _.exec(D); )
            V.push(H[0]);
        z = 0;
        for (var Z = V.length; z < Z; z++)
          S = parseFloat(V[z]), isNaN(S) || L.push(S);
        var eA = s[Y.toLowerCase()], iA = o[Y] || Y;
        if (L.length - 1 > eA)
          for (var q = 1, rA = L.length; q < rA; q += eA)
            W.push([Y].concat(L.slice(q, q + eA))), Y = iA;
        else
          W.push(L);
      }
      return W;
    }, B.util.makePathSimpler = function(U) {
      var F, S, H, D, R, W, V = 0, _ = 0, k = U.length, M = 0, N = 0, X = [];
      for (S = 0; S < k; ++S) {
        switch (H = !1, (F = U[S].slice(0))[0]) {
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
            R = F[3], W = F[4], V = F[5], _ = F[6];
            break;
          case "s":
            F[0] = "S", F[1] += V, F[2] += _, F[3] += V, F[4] += _;
          case "S":
            D === "C" ? (R = 2 * V - R, W = 2 * _ - W) : (R = V, W = _), V = F[3], _ = F[4], F[0] = "C", F[5] = F[3], F[6] = F[4], F[3] = F[1], F[4] = F[2], F[1] = R, F[2] = W, R = F[3], W = F[4];
            break;
          case "q":
            F[0] = "Q", F[1] += V, F[2] += _, F[3] += V, F[4] += _;
          case "Q":
            R = F[1], W = F[2], V = F[3], _ = F[4];
            break;
          case "t":
            F[0] = "T", F[1] += V, F[2] += _;
          case "T":
            D === "Q" ? (R = 2 * V - R, W = 2 * _ - W) : (R = V, W = _), F[0] = "Q", V = F[1], _ = F[2], F[1] = R, F[2] = W, F[3] = V, F[4] = _;
            break;
          case "a":
            F[0] = "A", F[6] += V, F[7] += _;
          case "A":
            H = !0, X = X.concat(i(V, _, F)), V = F[6], _ = F[7];
            break;
          case "z":
          case "Z":
            V = M, _ = N;
        }
        H || X.push(F), D = F[0];
      }
      return X;
    }, B.util.getSmoothPathFromPoints = function(U, F) {
      var S, H = [], D = new B.Point(U[0].x, U[0].y), R = new B.Point(U[1].x, U[1].y), W = U.length, V = 1, _ = 0, k = W > 2;
      for (F = F || 0, k && (V = U[2].x < R.x ? -1 : U[2].x === R.x ? 0 : 1, _ = U[2].y < R.y ? -1 : U[2].y === R.y ? 0 : 1), H.push(["M", D.x - V * F, D.y - _ * F]), S = 1; S < W; S++) {
        if (!D.eq(R)) {
          var M = D.midPointFrom(R);
          H.push(["Q", D.x, D.y, M.x, M.y]);
        }
        D = U[S], S + 1 < U.length && (R = U[S + 1]);
      }
      return k && (V = D.x > U[S - 2].x ? 1 : D.x === U[S - 2].x ? 0 : -1, _ = D.y > U[S - 2].y ? 1 : D.y === U[S - 2].y ? 0 : -1), H.push(["L", D.x + V * F, D.y + _ * F]), H;
    }, B.util.getPathSegmentsInfo = x, B.util.getBoundsOfCurve = function(U, F, S, H, D, R, W, V) {
      var _;
      if (B.cachesBoundsOfCurve && (_ = u.call(arguments), B.boundsOfCurveCache[_]))
        return B.boundsOfCurveCache[_];
      var k, M, N, X, L, I, j, Y, G = Math.sqrt, z = Math.min, Z = Math.max, eA = Math.abs, iA = [], q = [[], []];
      M = 6 * U - 12 * S + 6 * D, k = -3 * U + 9 * S - 9 * D + 3 * W, N = 3 * S - 3 * U;
      for (var rA = 0; rA < 2; ++rA)
        if (rA > 0 && (M = 6 * F - 12 * H + 6 * R, k = -3 * F + 9 * H - 9 * R + 3 * V, N = 3 * H - 3 * F), eA(k) < 1e-12) {
          if (eA(M) < 1e-12)
            continue;
          0 < (X = -N / M) && X < 1 && iA.push(X);
        } else
          (j = M * M - 4 * N * k) < 0 || (0 < (L = (-M + (Y = G(j))) / (2 * k)) && L < 1 && iA.push(L), 0 < (I = (-M - Y) / (2 * k)) && I < 1 && iA.push(I));
      for (var J, lA, sA, hA = iA.length, pA = hA; hA--; )
        J = (sA = 1 - (X = iA[hA])) * sA * sA * U + 3 * sA * sA * X * S + 3 * sA * X * X * D + X * X * X * W, q[0][hA] = J, lA = sA * sA * sA * F + 3 * sA * sA * X * H + 3 * sA * X * X * R + X * X * X * V, q[1][hA] = lA;
      q[0][pA] = U, q[1][pA] = F, q[0][pA + 1] = W, q[1][pA + 1] = V;
      var VA = [{ x: z.apply(null, q[0]), y: z.apply(null, q[1]) }, { x: Z.apply(null, q[0]), y: Z.apply(null, q[1]) }];
      return B.cachesBoundsOfCurve && (B.boundsOfCurveCache[_] = VA), VA;
    }, B.util.getPointOnPath = function(U, F, S) {
      S || (S = x(U));
      for (var H = 0; F - S[H].length > 0 && H < S.length - 2; )
        F -= S[H].length, H++;
      var D, R = S[H], W = F / R.length, V = R.command, _ = U[H];
      switch (V) {
        case "M":
          return { x: R.x, y: R.y, angle: 0 };
        case "Z":
        case "z":
          return (D = new B.Point(R.x, R.y).lerp(new B.Point(R.destX, R.destY), W)).angle = Math.atan2(R.destY - R.y, R.destX - R.x), D;
        case "L":
          return (D = new B.Point(R.x, R.y).lerp(new B.Point(_[1], _[2]), W)).angle = Math.atan2(_[2] - R.y, _[1] - R.x), D;
        case "C":
        case "Q":
          return v(R, F);
      }
    }, B.util.transformPath = function(U, F, S) {
      return S && (F = B.util.multiplyTransformMatrices(F, [1, 0, 0, 1, -S.x, -S.y])), U.map(function(H) {
        for (var D = H.slice(0), R = {}, W = 1; W < H.length - 1; W += 2)
          R.x = H[W], R.y = H[W + 1], R = B.util.transformPoint(R, F), D[W] = R.x, D[W + 1] = R.y;
        return D;
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
    }(), d = function(n, h, a) {
      for (var l in h)
        l in n.prototype && typeof n.prototype[l] == "function" && (h[l] + "").indexOf("callSuper") > -1 ? n.prototype[l] = /* @__PURE__ */ function(f) {
          return function() {
            var m = this.constructor.superclass;
            this.constructor.superclass = a;
            var v = h[f].apply(this, arguments);
            if (this.constructor.superclass = m, f !== "initialize")
              return v;
          };
        }(l) : n.prototype[l] = h[l], o && (h.toString !== Object.prototype.toString && (n.prototype.toString = h.toString), h.valueOf !== Object.prototype.valueOf && (n.prototype.valueOf = h.valueOf));
    };
    function A() {
    }
    function i(n) {
      for (var h = null, a = this; a.constructor.superclass; ) {
        var l = a.constructor.superclass.prototype[n];
        if (a[n] !== l) {
          h = l;
          break;
        }
        a = a.constructor.superclass.prototype;
      }
      return h ? arguments.length > 1 ? h.apply(this, u.call(arguments, 1)) : h.call(this) : console.log("tried to callSuper " + n + ", method not found in prototype chain", this);
    }
    B.util.createClass = function() {
      var n = null, h = u.call(arguments, 0);
      function a() {
        this.initialize.apply(this, arguments);
      }
      typeof h[0] == "function" && (n = h.shift()), a.superclass = n, a.subclasses = [], n && (A.prototype = n.prototype, a.prototype = new A(), n.subclasses.push(a));
      for (var l = 0, f = h.length; l < f; l++)
        d(a, h[l], n);
      return a.prototype.initialize || (a.prototype.initialize = s), a.prototype.constructor = a, a.prototype.callSuper = i, a;
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
  }, c = B.document.createElement("div"), g = typeof c.style.opacity == "string", p = typeof c.style.filter == "string", w = /alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/, C = function(u) {
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
    var u = Array.prototype.slice, s, o, d, A, i = function(a) {
      return u.call(a, 0);
    };
    try {
      s = i(B.document.childNodes) instanceof Array;
    } catch {
    }
    function n(a, l) {
      var f = B.document.createElement(a);
      for (var m in l)
        m === "class" ? f.className = l[m] : m === "for" ? f.htmlFor = l[m] : f.setAttribute(m, l[m]);
      return f;
    }
    function h(a) {
      for (var l = 0, f = 0, m = B.document.documentElement, v = B.document.body || { scrollLeft: 0, scrollTop: 0 }; a && (a.parentNode || a.host) && ((a = a.parentNode || a.host) === B.document ? (l = v.scrollLeft || m.scrollLeft || 0, f = v.scrollTop || m.scrollTop || 0) : (l += a.scrollLeft || 0, f += a.scrollTop || 0), a.nodeType !== 1 || a.style.position !== "fixed"); )
        ;
      return { left: l, top: f };
    }
    s || (i = function(a) {
      for (var l = new Array(a.length), f = a.length; f--; )
        l[f] = a[f];
      return l;
    }), o = B.document.defaultView && B.document.defaultView.getComputedStyle ? function(a, l) {
      var f = B.document.defaultView.getComputedStyle(a, null);
      return f ? f[l] : void 0;
    } : function(a, l) {
      var f = a.style[l];
      return !f && a.currentStyle && (f = a.currentStyle[l]), f;
    }, d = B.document.documentElement.style, A = "userSelect" in d ? "userSelect" : "MozUserSelect" in d ? "MozUserSelect" : "WebkitUserSelect" in d ? "WebkitUserSelect" : "KhtmlUserSelect" in d ? "KhtmlUserSelect" : "", B.util.makeElementUnselectable = function(a) {
      return a.onselectstart !== void 0 && (a.onselectstart = B.util.falseFunction), A ? a.style[A] = "none" : typeof a.unselectable == "string" && (a.unselectable = "on"), a;
    }, B.util.makeElementSelectable = function(a) {
      return a.onselectstart !== void 0 && (a.onselectstart = null), A ? a.style[A] = "" : typeof a.unselectable == "string" && (a.unselectable = ""), a;
    }, B.util.setImageSmoothing = function(a, l) {
      a.imageSmoothingEnabled = a.imageSmoothingEnabled || a.webkitImageSmoothingEnabled || a.mozImageSmoothingEnabled || a.msImageSmoothingEnabled || a.oImageSmoothingEnabled, a.imageSmoothingEnabled = l;
    }, B.util.getById = function(a) {
      return typeof a == "string" ? B.document.getElementById(a) : a;
    }, B.util.toArray = i, B.util.addClass = function(a, l) {
      a && (" " + a.className + " ").indexOf(" " + l + " ") === -1 && (a.className += (a.className ? " " : "") + l);
    }, B.util.makeElement = n, B.util.wrapElement = function(a, l, f) {
      return typeof l == "string" && (l = n(l, f)), a.parentNode && a.parentNode.replaceChild(l, a), l.appendChild(a), l;
    }, B.util.getScrollLeftTop = h, B.util.getElementOffset = function(a) {
      var l, f, m = a && a.ownerDocument, v = { left: 0, top: 0 }, x = { left: 0, top: 0 }, U = { borderLeftWidth: "left", borderTopWidth: "top", paddingLeft: "left", paddingTop: "top" };
      if (!m)
        return x;
      for (var F in U)
        x[U[F]] += parseInt(o(a, F), 10) || 0;
      return l = m.documentElement, a.getBoundingClientRect !== void 0 && (v = a.getBoundingClientRect()), f = h(a), { left: v.left + f.left - (l.clientLeft || 0) + x.left, top: v.top + f.top - (l.clientTop || 0) + x.top };
    }, B.util.getNodeCanvas = function(a) {
      var l = B.jsdomImplForWrapper(a);
      return l._canvas || l._image;
    }, B.util.cleanUpJsdomNode = function(a) {
      if (B.isLikelyNode) {
        var l = B.jsdomImplForWrapper(a);
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
      }, d === "GET" && (n = null, typeof o.parameters == "string" && (s = function(h, a) {
        return h + (/\?/.test(h) ? "&" : "?") + a;
      }(s, o.parameters))), i.open(d, s, !0), d !== "POST" && d !== "PUT" || i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.send(n), i;
    };
  }(), B.log = console.log, B.warn = console.warn, function() {
    var u = B.util.object.extend, s = B.util.object.clone, o = [];
    function d() {
      return !1;
    }
    function A(a, l, f, m) {
      return -f * Math.cos(a / m * (Math.PI / 2)) + f + l;
    }
    B.util.object.extend(o, { cancelAll: function() {
      var a = this.splice(0);
      return a.forEach(function(l) {
        l.cancel();
      }), a;
    }, cancelByCanvas: function(a) {
      if (!a)
        return [];
      var l = this.filter(function(f) {
        return typeof f.target == "object" && f.target.canvas === a;
      });
      return l.forEach(function(f) {
        f.cancel();
      }), l;
    }, cancelByTarget: function(a) {
      var l = this.findAnimationsByTarget(a);
      return l.forEach(function(f) {
        f.cancel();
      }), l;
    }, findAnimationIndex: function(a) {
      return this.indexOf(this.findAnimation(a));
    }, findAnimation: function(a) {
      return this.find(function(l) {
        return l.cancel === a;
      });
    }, findAnimationsByTarget: function(a) {
      return a ? this.filter(function(l) {
        return l.target === a;
      }) : [];
    } });
    var i = B.window.requestAnimationFrame || B.window.webkitRequestAnimationFrame || B.window.mozRequestAnimationFrame || B.window.oRequestAnimationFrame || B.window.msRequestAnimationFrame || function(a) {
      return B.window.setTimeout(a, 1e3 / 60);
    }, n = B.window.cancelAnimationFrame || B.window.clearTimeout;
    function h() {
      return i.apply(B.window, arguments);
    }
    B.util.animate = function(a) {
      a || (a = {});
      var l, f = !1, m = function() {
        var v = B.runningAnimations.indexOf(l);
        return v > -1 && B.runningAnimations.splice(v, 1)[0];
      };
      return l = u(s(a), { cancel: function() {
        return f = !0, m();
      }, currentValue: "startValue" in a ? a.startValue : 0, completionRate: 0, durationRate: 0 }), B.runningAnimations.push(l), h(function(v) {
        var x, U = v || +/* @__PURE__ */ new Date(), F = a.duration || 500, S = U + F, H = a.onChange || d, D = a.abort || d, R = a.onComplete || d, W = a.easing || A, V = "startValue" in a && a.startValue.length > 0, _ = "startValue" in a ? a.startValue : 0, k = "endValue" in a ? a.endValue : 100, M = a.byValue || (V ? _.map(function(N, X) {
          return k[X] - _[X];
        }) : k - _);
        a.onStart && a.onStart(), function N(X) {
          var L = (x = X || +/* @__PURE__ */ new Date()) > S ? F : x - U, I = L / F, j = V ? _.map(function(G, z) {
            return W(L, _[z], M[z], F);
          }) : W(L, _, M, F), Y = Math.abs(V ? (j[0] - _[0]) / M[0] : (j - _) / M);
          if (l.currentValue = V ? j.slice() : j, l.completionRate = Y, l.durationRate = I, !f) {
            if (!D(j, Y, I))
              return x > S ? (l.currentValue = V ? k.slice() : k, l.completionRate = 1, l.durationRate = 1, H(V ? k.slice() : k, 1, 1), R(k, 1, 1), void m()) : (H(j, Y, I), void h(N));
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
      var i = new B.Color(s).getSource(), n = new B.Color(o).getSource(), h = A.onComplete, a = A.onChange;
      return A = A || {}, B.util.animate(B.util.object.extend(A, { duration: d || 500, startValue: i, endValue: n, byValue: n, easing: function(l, f, m, v) {
        return u(f, m, A.colorEasing ? A.colorEasing(l, v) : 1 - Math.cos(l / v * (Math.PI / 2)));
      }, onComplete: function(l, f, m) {
        if (h)
          return h(u(n, n, 0), f, m);
      }, onChange: function(l, f, m) {
        if (a) {
          if (Array.isArray(l))
            return a(u(l, l, 0), f, m);
          a(l, f, m);
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
      var a = 0;
      return A === 0 ? i : (A /= h) === 1 ? i + n : (a || (a = 0.3 * h), -s(u(n, n, a, 1.70158), A, h) + i);
    }, easeOutElastic: function(A, i, n, h) {
      var a = 0;
      if (A === 0)
        return i;
      if ((A /= h) === 1)
        return i + n;
      a || (a = 0.3 * h);
      var l = u(n, n, a, 1.70158);
      return l.a * Math.pow(2, -10 * A) * Math.sin((A * h - l.s) * (2 * Math.PI) / l.p) + l.c + i;
    }, easeInOutElastic: function(A, i, n, h) {
      var a = 0;
      if (A === 0)
        return i;
      if ((A /= h / 2) === 2)
        return i + n;
      a || (a = h * (0.3 * 1.5));
      var l = u(n, n, a, 1.70158);
      return A < 1 ? -0.5 * s(l, A, h) + i : l.a * Math.pow(2, -10 * (A -= 1)) * Math.sin((A * h - l.s) * (2 * Math.PI) / l.p) * 0.5 + l.c + i;
    }, easeInBack: function(A, i, n, h, a) {
      return a === void 0 && (a = 1.70158), n * (A /= h) * A * ((a + 1) * A - a) + i;
    }, easeOutBack: function(A, i, n, h, a) {
      return a === void 0 && (a = 1.70158), n * ((A = A / h - 1) * A * ((a + 1) * A + a) + 1) + i;
    }, easeInOutBack: function(A, i, n, h, a) {
      return a === void 0 && (a = 1.70158), (A /= h / 2) < 1 ? n / 2 * (A * A * ((1 + (a *= 1.525)) * A - a)) + i : n / 2 * ((A -= 2) * A * ((1 + (a *= 1.525)) * A + a) + 2) + i;
    }, easeInBounce: o, easeOutBounce: d, easeInOutBounce: function(A, i, n, h) {
      return A < h / 2 ? 0.5 * o(2 * A, 0, n, h) + i : 0.5 * d(2 * A - h, 0, n, h) + 0.5 * n + i;
    } };
  }(), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.util.object.extend, d = s.util.object.clone, A = s.util.toFixed, i = s.util.parseUnit, n = s.util.multiplyTransformMatrices, h = { cx: "left", x: "left", r: "radius", cy: "top", y: "top", display: "visible", visibility: "visible", transform: "transformMatrix", "fill-opacity": "fillOpacity", "fill-rule": "fillRule", "font-family": "fontFamily", "font-size": "fontSize", "font-style": "fontStyle", "font-weight": "fontWeight", "letter-spacing": "charSpacing", "paint-order": "paintFirst", "stroke-dasharray": "strokeDashArray", "stroke-dashoffset": "strokeDashOffset", "stroke-linecap": "strokeLineCap", "stroke-linejoin": "strokeLineJoin", "stroke-miterlimit": "strokeMiterLimit", "stroke-opacity": "strokeOpacity", "stroke-width": "strokeWidth", "text-decoration": "textDecoration", "text-anchor": "textAnchor", opacity: "opacity", "clip-path": "clipPath", "clip-rule": "clipRule", "vector-effect": "strokeUniform", "image-rendering": "imageSmoothing" }, a = { stroke: "strokeOpacity", fill: "fillOpacity" }, l = "font-size", f = "clip-path";
    function m(_) {
      return _ in h ? h[_] : _;
    }
    function v(_, k, M, N) {
      var X, L = Array.isArray(k);
      if (_ !== "fill" && _ !== "stroke" || k !== "none") {
        if (_ === "strokeUniform")
          return k === "non-scaling-stroke";
        if (_ === "strokeDashArray")
          k = k === "none" ? null : k.replace(/,/g, " ").split(/\s+/).map(parseFloat);
        else if (_ === "transformMatrix")
          k = M && M.transformMatrix ? n(M.transformMatrix, s.parseTransformAttribute(k)) : s.parseTransformAttribute(k);
        else if (_ === "visible")
          k = k !== "none" && k !== "hidden", M && M.visible === !1 && (k = !1);
        else if (_ === "opacity")
          k = parseFloat(k), M && M.opacity !== void 0 && (k *= M.opacity);
        else if (_ === "textAnchor")
          k = k === "start" ? "left" : k === "end" ? "right" : "center";
        else if (_ === "charSpacing")
          X = i(k, N) / N * 1e3;
        else if (_ === "paintFirst") {
          var I = k.indexOf("fill"), j = k.indexOf("stroke");
          k = "fill", (I > -1 && j > -1 && j < I || I === -1 && j > -1) && (k = "stroke");
        } else {
          if (_ === "href" || _ === "xlink:href" || _ === "font")
            return k;
          if (_ === "imageSmoothing")
            return k === "optimizeQuality";
          X = L ? k.map(i) : i(k, N);
        }
      } else
        k = "";
      return !L && isNaN(X) ? k : X;
    }
    function x(_) {
      return new RegExp("^(" + _.join("|") + ")\\b", "i");
    }
    function U(_, k) {
      var M, N, X, L, I = [];
      for (X = 0, L = k.length; X < L; X++)
        M = k[X], N = _.getElementsByTagName(M), I = I.concat(Array.prototype.slice.call(N));
      return I;
    }
    function F(_, k) {
      var M, N = !0;
      return (M = S(_, k.pop())) && k.length && (N = function(X, L) {
        for (var I, j = !0; X.parentNode && X.parentNode.nodeType === 1 && L.length; )
          j && (I = L.pop()), j = S(X = X.parentNode, I);
        return L.length === 0;
      }(_, k)), M && N && k.length === 0;
    }
    function S(_, k) {
      var M, N, X = _.nodeName, L = _.getAttribute("class"), I = _.getAttribute("id");
      if (M = new RegExp("^" + X, "i"), k = k.replace(M, ""), I && k.length && (M = new RegExp("#" + I + "(?![a-zA-Z\\-]+)", "i"), k = k.replace(M, "")), L && k.length)
        for (N = (L = L.split(" ")).length; N--; )
          M = new RegExp("\\." + L[N] + "(?![a-zA-Z\\-]+)", "i"), k = k.replace(M, "");
      return k.length === 0;
    }
    function H(_, k) {
      var M;
      if (_.getElementById && (M = _.getElementById(k)), M)
        return M;
      var N, X, L, I = _.getElementsByTagName("*");
      for (X = 0, L = I.length; X < L; X++)
        if (k === (N = I[X]).getAttribute("id"))
          return N;
    }
    s.svgValidTagNamesRegEx = x(["path", "circle", "polygon", "polyline", "ellipse", "rect", "line", "image", "text"]), s.svgViewBoxElementsRegEx = x(["symbol", "image", "marker", "pattern", "view", "svg"]), s.svgInvalidAncestorsRegEx = x(["pattern", "defs", "symbol", "metadata", "clipPath", "mask", "desc"]), s.svgValidParentsRegEx = x(["symbol", "g", "a", "svg", "clipPath", "defs"]), s.cssRules = {}, s.gradientDefs = {}, s.clipPaths = {}, s.parseTransformAttribute = function() {
      function _(j, Y, G) {
        j[G] = Math.tan(s.util.degreesToRadians(Y[0]));
      }
      var k = s.iMatrix, M = s.reNum, N = s.commaWsp, X = "(?:" + ("(?:(matrix)\\s*\\(\\s*(" + M + ")" + N + "(" + M + ")" + N + "(" + M + ")" + N + "(" + M + ")" + N + "(" + M + ")" + N + "(" + M + ")\\s*\\))") + "|" + ("(?:(translate)\\s*\\(\\s*(" + M + ")(?:" + N + "(" + M + "))?\\s*\\))") + "|" + ("(?:(scale)\\s*\\(\\s*(" + M + ")(?:" + N + "(" + M + "))?\\s*\\))") + "|" + ("(?:(rotate)\\s*\\(\\s*(" + M + ")(?:" + N + "(" + M + ")" + N + "(" + M + "))?\\s*\\))") + "|" + ("(?:(skewX)\\s*\\(\\s*(" + M + ")\\s*\\))") + "|" + ("(?:(skewY)\\s*\\(\\s*(" + M + ")\\s*\\))") + ")", L = new RegExp("^\\s*(?:" + ("(?:" + X + "(?:" + N + "*" + X + ")*)") + "?)\\s*$"), I = new RegExp(X, "g");
      return function(j) {
        var Y = k.concat(), G = [];
        if (!j || j && !L.test(j))
          return Y;
        j.replace(I, function(Z) {
          var eA = new RegExp(X).exec(Z).filter(function(rA) {
            return !!rA;
          }), iA = eA[1], q = eA.slice(2).map(parseFloat);
          switch (iA) {
            case "translate":
              (function(rA, J) {
                rA[4] = J[0], J.length === 2 && (rA[5] = J[1]);
              })(Y, q);
              break;
            case "rotate":
              q[0] = s.util.degreesToRadians(q[0]), function(rA, J) {
                var lA = s.util.cos(J[0]), sA = s.util.sin(J[0]), hA = 0, pA = 0;
                J.length === 3 && (hA = J[1], pA = J[2]), rA[0] = lA, rA[1] = sA, rA[2] = -sA, rA[3] = lA, rA[4] = hA - (lA * hA - sA * pA), rA[5] = pA - (sA * hA + lA * pA);
              }(Y, q);
              break;
            case "scale":
              (function(rA, J) {
                var lA = J[0], sA = J.length === 2 ? J[1] : J[0];
                rA[0] = lA, rA[3] = sA;
              })(Y, q);
              break;
            case "skewX":
              _(Y, q, 2);
              break;
            case "skewY":
              _(Y, q, 1);
              break;
            case "matrix":
              Y = q;
          }
          G.push(Y.concat()), Y = k.concat();
        });
        for (var z = G[0]; G.length > 1; )
          G.shift(), z = s.util.multiplyTransformMatrices(z, G[0]);
        return z;
      };
    }();
    var D = new RegExp("^\\s*(" + s.reNum + "+)\\s*,?\\s*(" + s.reNum + "+)\\s*,?\\s*(" + s.reNum + "+)\\s*,?\\s*(" + s.reNum + "+)\\s*$");
    function R(_) {
      if (!s.svgViewBoxElementsRegEx.test(_.nodeName))
        return {};
      var k, M, N, X, L, I, j = _.getAttribute("viewBox"), Y = 1, G = 1, z = _.getAttribute("width"), Z = _.getAttribute("height"), eA = _.getAttribute("x") || 0, iA = _.getAttribute("y") || 0, q = _.getAttribute("preserveAspectRatio") || "", rA = !j || !(j = j.match(D)), J = !z || !Z || z === "100%" || Z === "100%", lA = rA && J, sA = {}, hA = "", pA = 0, VA = 0;
      if (sA.width = 0, sA.height = 0, sA.toBeParsed = lA, rA && (eA || iA) && _.parentNode && _.parentNode.nodeName !== "#document" && (hA = " translate(" + i(eA) + " " + i(iA) + ") ", L = (_.getAttribute("transform") || "") + hA, _.setAttribute("transform", L), _.removeAttribute("x"), _.removeAttribute("y")), lA)
        return sA;
      if (rA)
        return sA.width = i(z), sA.height = i(Z), sA;
      if (k = -parseFloat(j[1]), M = -parseFloat(j[2]), N = parseFloat(j[3]), X = parseFloat(j[4]), sA.minX = k, sA.minY = M, sA.viewBoxWidth = N, sA.viewBoxHeight = X, J ? (sA.width = N, sA.height = X) : (sA.width = i(z), sA.height = i(Z), Y = sA.width / N, G = sA.height / X), (q = s.util.parsePreserveAspectRatioAttribute(q)).alignX !== "none" && (q.meetOrSlice === "meet" && (G = Y = Y > G ? G : Y), q.meetOrSlice === "slice" && (G = Y = Y > G ? Y : G), pA = sA.width - N * Y, VA = sA.height - X * Y, q.alignX === "Mid" && (pA /= 2), q.alignY === "Mid" && (VA /= 2), q.alignX === "Min" && (pA = 0), q.alignY === "Min" && (VA = 0)), Y === 1 && G === 1 && k === 0 && M === 0 && eA === 0 && iA === 0)
        return sA;
      if ((eA || iA) && _.parentNode.nodeName !== "#document" && (hA = " translate(" + i(eA) + " " + i(iA) + ") "), L = hA + " matrix(" + Y + " 0 0 " + G + " " + (k * Y + pA) + " " + (M * G + VA) + ") ", _.nodeName === "svg") {
        for (I = _.ownerDocument.createElementNS(s.svgNS, "g"); _.firstChild; )
          I.appendChild(_.firstChild);
        _.appendChild(I);
      } else
        (I = _).removeAttribute("x"), I.removeAttribute("y"), L = I.getAttribute("transform") + L;
      return I.setAttribute("transform", L), sA;
    }
    function W(_, k) {
      var M = "xlink:href", N = H(_, k.getAttribute(M).slice(1));
      if (N && N.getAttribute(M) && W(_, N), ["gradientTransform", "x1", "x2", "y1", "y2", "gradientUnits", "cx", "cy", "r", "fx", "fy"].forEach(function(L) {
        N && !k.hasAttribute(L) && N.hasAttribute(L) && k.setAttribute(L, N.getAttribute(L));
      }), !k.children.length)
        for (var X = N.cloneNode(!0); X.firstChild; )
          k.appendChild(X.firstChild);
      k.removeAttribute(M);
    }
    s.parseSVGDocument = function(_, k, M, N) {
      if (_) {
        (function(eA) {
          for (var iA = U(eA, ["use", "svg:use"]), q = 0; iA.length && q < iA.length; ) {
            var rA = iA[q], J = rA.getAttribute("xlink:href") || rA.getAttribute("href");
            if (J === null)
              return;
            var lA, sA, hA, pA, VA = J.slice(1), at = rA.getAttribute("x") || 0, Et = rA.getAttribute("y") || 0, QA = H(eA, VA).cloneNode(!0), XA = (QA.getAttribute("transform") || "") + " translate(" + at + ", " + Et + ")", ct = iA.length, Ot = s.svgNS;
            if (R(QA), /^svg$/i.test(QA.nodeName)) {
              var te = QA.ownerDocument.createElementNS(Ot, "g");
              for (sA = 0, pA = (hA = QA.attributes).length; sA < pA; sA++)
                lA = hA.item(sA), te.setAttributeNS(Ot, lA.nodeName, lA.nodeValue);
              for (; QA.firstChild; )
                te.appendChild(QA.firstChild);
              QA = te;
            }
            for (sA = 0, pA = (hA = rA.attributes).length; sA < pA; sA++)
              (lA = hA.item(sA)).nodeName !== "x" && lA.nodeName !== "y" && lA.nodeName !== "xlink:href" && lA.nodeName !== "href" && (lA.nodeName === "transform" ? XA = lA.nodeValue + " " + XA : QA.setAttribute(lA.nodeName, lA.nodeValue));
            QA.setAttribute("transform", XA), QA.setAttribute("instantiated_by_use", "1"), QA.removeAttribute("id"), rA.parentNode.replaceChild(QA, rA), iA.length === ct && q++;
          }
        })(_);
        var X, L, I = s.Object.__uid++, j = R(_), Y = s.util.toArray(_.getElementsByTagName("*"));
        if (j.crossOrigin = N && N.crossOrigin, j.svgUid = I, Y.length === 0 && s.isLikelyNode) {
          var G = [];
          for (X = 0, L = (Y = _.selectNodes('//*[name(.)!="svg"]')).length; X < L; X++)
            G[X] = Y[X];
          Y = G;
        }
        var z = Y.filter(function(eA) {
          return R(eA), s.svgValidTagNamesRegEx.test(eA.nodeName.replace("svg:", "")) && !function(iA, q) {
            for (; iA && (iA = iA.parentNode); )
              if (iA.nodeName && q.test(iA.nodeName.replace("svg:", "")) && !iA.getAttribute("instantiated_by_use"))
                return !0;
            return !1;
          }(eA, s.svgInvalidAncestorsRegEx);
        });
        if (!z || z && !z.length)
          k && k([], {});
        else {
          var Z = {};
          Y.filter(function(eA) {
            return eA.nodeName.replace("svg:", "") === "clipPath";
          }).forEach(function(eA) {
            var iA = eA.getAttribute("id");
            Z[iA] = s.util.toArray(eA.getElementsByTagName("*")).filter(function(q) {
              return s.svgValidTagNamesRegEx.test(q.nodeName.replace("svg:", ""));
            });
          }), s.gradientDefs[I] = s.getGradientDefs(_), s.cssRules[I] = s.getCSSRules(_), s.clipPaths[I] = Z, s.parseElements(z, function(eA, iA) {
            k && (k(eA, j, iA, Y), delete s.gradientDefs[I], delete s.cssRules[I], delete s.clipPaths[I]);
          }, d(j), M, N);
        }
      }
    };
    var V = new RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(" + s.reNum + "(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|" + s.reNum + "))?\\s+(.*)");
    o(s, { parseFontDeclaration: function(_, k) {
      var M = _.match(V);
      if (M) {
        var N = M[1], X = M[3], L = M[4], I = M[5], j = M[6];
        N && (k.fontStyle = N), X && (k.fontWeight = isNaN(parseFloat(X)) ? X : parseFloat(X)), L && (k.fontSize = i(L)), j && (k.fontFamily = j), I && (k.lineHeight = I === "normal" ? 1 : I);
      }
    }, getGradientDefs: function(_) {
      var k, M = U(_, ["linearGradient", "radialGradient", "svg:linearGradient", "svg:radialGradient"]), N = 0, X = {};
      for (N = M.length; N--; )
        (k = M[N]).getAttribute("xlink:href") && W(_, k), X[k.getAttribute("id")] = k;
      return X;
    }, parseAttributes: function(_, k, M) {
      if (_) {
        var N, X, L, I = {};
        M === void 0 && (M = _.getAttribute("svgUid")), _.parentNode && s.svgValidParentsRegEx.test(_.parentNode.nodeName) && (I = s.parseAttributes(_.parentNode, k, M));
        var j = k.reduce(function(q, rA) {
          return (N = _.getAttribute(rA)) && (q[rA] = N), q;
        }, {}), Y = o(function(q, rA) {
          var J = {};
          for (var lA in s.cssRules[rA])
            if (F(q, lA.split(" ")))
              for (var sA in s.cssRules[rA][lA])
                J[sA] = s.cssRules[rA][lA][sA];
          return J;
        }(_, M), s.parseStyleAttribute(_));
        j = o(j, Y), Y[f] && _.setAttribute(f, Y[f]), X = L = I.fontSize || s.Text.DEFAULT_SVG_FONT_SIZE, j[l] && (j[l] = X = i(j[l], L));
        var G, z, Z = {};
        for (var eA in j)
          z = v(G = m(eA), j[eA], I, X), Z[G] = z;
        Z && Z.font && s.parseFontDeclaration(Z.font, Z);
        var iA = o(I, Z);
        return s.svgValidParentsRegEx.test(_.nodeName) ? iA : function(q) {
          for (var rA in a)
            if (q[a[rA]] !== void 0 && q[rA] !== "") {
              if (q[rA] === void 0) {
                if (!s.Object.prototype[rA])
                  continue;
                q[rA] = s.Object.prototype[rA];
              }
              if (q[rA].indexOf("url(") !== 0) {
                var J = new s.Color(q[rA]);
                q[rA] = J.setAlpha(A(J.getAlpha() * q[a[rA]], 2)).toRgba();
              }
            }
          return q;
        }(iA);
      }
    }, parseElements: function(_, k, M, N, X) {
      new s.ElementsParser(_, k, M, N, X).parse();
    }, parseStyleAttribute: function(_) {
      var k = {}, M = _.getAttribute("style");
      return M && (typeof M == "string" ? function(N, X) {
        var L, I;
        N.replace(/;\s*$/, "").split(";").forEach(function(j) {
          var Y = j.split(":");
          L = Y[0].trim().toLowerCase(), I = Y[1].trim(), X[L] = I;
        });
      }(M, k) : function(N, X) {
        var L, I;
        for (var j in N)
          N[j] !== void 0 && (L = j.toLowerCase(), I = N[j], X[L] = I);
      }(M, k)), k;
    }, parsePointsAttribute: function(_) {
      if (!_)
        return null;
      var k, M, N = [];
      for (k = 0, M = (_ = (_ = _.replace(/,/g, " ").trim()).split(/\s+/)).length; k < M; k += 2)
        N.push({ x: parseFloat(_[k]), y: parseFloat(_[k + 1]) });
      return N;
    }, getCSSRules: function(_) {
      var k, M, N = _.getElementsByTagName("style"), X = {};
      for (k = 0, M = N.length; k < M; k++) {
        var L = N[k].textContent;
        (L = L.replace(/\/\*[\s\S]*?\*\//g, "")).trim() !== "" && L.split("}").filter(function(I) {
          return I.trim();
        }).forEach(function(I) {
          var j = I.split("{"), Y = {}, G = j[1].trim().split(";").filter(function(iA) {
            return iA.trim();
          });
          for (k = 0, M = G.length; k < M; k++) {
            var z = G[k].split(":"), Z = z[0].trim(), eA = z[1].trim();
            Y[Z] = eA;
          }
          (I = j[0].trim()).split(",").forEach(function(iA) {
            (iA = iA.replace(/^svg/i, "").trim()) !== "" && (X[iA] ? s.util.object.extend(X[iA], Y) : X[iA] = s.util.object.clone(Y));
          });
        });
      }
      return X;
    }, loadSVGFromURL: function(_, k, M, N) {
      _ = _.replace(/^\n\s*/, "").trim(), new s.util.request(_, { method: "get", onComplete: function(X) {
        var L = X.responseXML;
        if (!L || !L.documentElement)
          return k && k(null), !1;
        s.parseSVGDocument(L.documentElement, function(I, j, Y, G) {
          k && k(I, j, Y, G);
        }, M, N);
      } });
    }, loadSVGFromString: function(_, k, M, N) {
      var X = new s.window.DOMParser().parseFromString(_.trim(), "text/xml");
      s.parseSVGDocument(X.documentElement, function(L, I, j, Y) {
        k(L, I, j, Y);
      }, M, N);
    } });
  }(e), B.ElementsParser = function(u, s, o, d, A, i) {
    this.elements = u, this.callback = s, this.options = o, this.reviver = d, this.svgUid = o && o.svgUid || 0, this.parsingOptions = A, this.regexUrl = /^url\(['"]?#([^'"]+)['"]?\)/g, this.doc = i;
  }, (b = B.ElementsParser.prototype).parse = function() {
    this.instances = new Array(this.elements.length), this.numElements = this.elements.length, this.createObjects();
  }, b.createObjects = function() {
    var u = this;
    this.elements.forEach(function(s, o) {
      s.setAttribute("svgUid", u.svgUid), u.createObject(s, o);
    });
  }, b.findTag = function(u) {
    return B[B.util.string.capitalize(u.tagName.replace("svg:", ""))];
  }, b.createObject = function(u, s) {
    var o = this.findTag(u);
    if (o && o.fromElement)
      try {
        o.fromElement(u, this.createCallback(s, u), this.options);
      } catch (d) {
        B.log(d);
      }
    else
      this.checkIfDone();
  }, b.createCallback = function(u, s) {
    var o = this;
    return function(d) {
      var A;
      o.resolveGradient(d, s, "fill"), o.resolveGradient(d, s, "stroke"), d instanceof B.Image && d._originalElement && (A = d.parsePreserveAspectRatioAttribute(s)), d._removeTransformMatrix(A), o.resolveClipPath(d, s), o.reviver && o.reviver(s, d), o.instances[u] = d, o.checkIfDone();
    };
  }, b.extractPropertyDefinition = function(u, s, o) {
    var d = u[s], A = this.regexUrl;
    if (A.test(d)) {
      A.lastIndex = 0;
      var i = A.exec(d)[1];
      return A.lastIndex = 0, B[o][this.svgUid][i];
    }
  }, b.resolveGradient = function(u, s, o) {
    var d = this.extractPropertyDefinition(u, o, "gradientDefs");
    if (d) {
      var A = s.getAttribute(o + "-opacity"), i = B.Gradient.fromElement(d, u, A, this.options);
      u.set(o, i);
    }
  }, b.createClipPathCallback = function(u, s) {
    return function(o) {
      o._removeTransformMatrix(), o.fillRule = o.clipRule, s.push(o);
    };
  }, b.resolveClipPath = function(u, s) {
    var o, d, A, i, n = this.extractPropertyDefinition(u, "clipPath", "clipPaths");
    if (n) {
      A = [], d = B.util.invertTransform(u.calcTransformMatrix());
      for (var h = n[0].parentNode, a = s; a.parentNode && a.getAttribute("clip-path") !== u.clipPath; )
        a = a.parentNode;
      a.parentNode.appendChild(h);
      for (var l = 0; l < n.length; l++)
        o = n[l], this.findTag(o).fromElement(o, this.createClipPathCallback(u, A), this.options);
      n = A.length === 1 ? A[0] : new B.Group(A), i = B.util.multiplyTransformMatrices(d, n.calcTransformMatrix()), n.clipPath && this.resolveClipPath(n, a);
      var f = B.util.qrDecompose(i);
      n.flipX = !1, n.flipY = !1, n.set("scaleX", f.scaleX), n.set("scaleY", f.scaleY), n.angle = f.angle, n.skewX = f.skewX, n.skewY = 0, n.setPositionByOrigin({ x: f.translateX, y: f.translateY }, "center", "center"), u.clipPath = n;
    } else
      delete u.clipPath;
  }, b.checkIfDone = function() {
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
      var h, a = (n.x - i.x) * (d.y - i.y) - (n.y - i.y) * (d.x - i.x), l = (A.x - d.x) * (d.y - i.y) - (A.y - d.y) * (d.x - i.x), f = (n.y - i.y) * (A.x - d.x) - (n.x - i.x) * (A.y - d.y);
      if (f !== 0) {
        var m = a / f, v = l / f;
        0 <= m && m <= 1 && 0 <= v && v <= 1 ? (h = new o("Intersection")).appendPoint(new s.Point(d.x + m * (A.x - d.x), d.y + m * (A.y - d.y))) : h = new o();
      } else
        h = new o(a === 0 || l === 0 ? "Coincident" : "Parallel");
      return h;
    }, s.Intersection.intersectLinePolygon = function(d, A, i) {
      var n, h, a, l, f = new o(), m = i.length;
      for (l = 0; l < m; l++)
        n = i[l], h = i[(l + 1) % m], a = o.intersectLineLine(d, A, n, h), f.appendPoints(a.points);
      return f.points.length > 0 && (f.status = "Intersection"), f;
    }, s.Intersection.intersectPolygonPolygon = function(d, A) {
      var i, n = new o(), h = d.length;
      for (i = 0; i < h; i++) {
        var a = d[i], l = d[(i + 1) % h], f = o.intersectLinePolygon(a, l, A);
        n.appendPoints(f.points);
      }
      return n.points.length > 0 && (n.status = "Intersection"), n;
    }, s.Intersection.intersectPolygonRectangle = function(d, A, i) {
      var n = A.min(i), h = A.max(i), a = new s.Point(h.x, n.y), l = new s.Point(n.x, h.y), f = o.intersectLinePolygon(n, a, d), m = o.intersectLinePolygon(a, h, d), v = o.intersectLinePolygon(h, l, d), x = o.intersectLinePolygon(l, n, d), U = new o();
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
      var h, a, l, f = s.util.array.max([A, i, n]), m = s.util.array.min([A, i, n]);
      if (l = (f + m) / 2, f === m)
        h = a = 0;
      else {
        var v = f - m;
        switch (a = l > 0.5 ? v / (2 - f - m) : v / (f + m), f) {
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
      return [Math.round(360 * h), Math.round(100 * a), Math.round(100 * l)];
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
      var i, n = [], h = this.getAlpha(), a = this.getSource(), l = A.getSource();
      for (i = 0; i < 3; i++)
        n.push(Math.round(0.5 * a[i] + 0.5 * l[i]));
      return n[3] = h, this.setSource(n), this;
    } }, s.Color.reRGBa = /^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/i, s.Color.reHSLa = /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/i, s.Color.reHex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, s.Color.colorNameMap = { aliceblue: "#F0F8FF", antiquewhite: "#FAEBD7", aqua: "#00FFFF", aquamarine: "#7FFFD4", azure: "#F0FFFF", beige: "#F5F5DC", bisque: "#FFE4C4", black: "#000000", blanchedalmond: "#FFEBCD", blue: "#0000FF", blueviolet: "#8A2BE2", brown: "#A52A2A", burlywood: "#DEB887", cadetblue: "#5F9EA0", chartreuse: "#7FFF00", chocolate: "#D2691E", coral: "#FF7F50", cornflowerblue: "#6495ED", cornsilk: "#FFF8DC", crimson: "#DC143C", cyan: "#00FFFF", darkblue: "#00008B", darkcyan: "#008B8B", darkgoldenrod: "#B8860B", darkgray: "#A9A9A9", darkgrey: "#A9A9A9", darkgreen: "#006400", darkkhaki: "#BDB76B", darkmagenta: "#8B008B", darkolivegreen: "#556B2F", darkorange: "#FF8C00", darkorchid: "#9932CC", darkred: "#8B0000", darksalmon: "#E9967A", darkseagreen: "#8FBC8F", darkslateblue: "#483D8B", darkslategray: "#2F4F4F", darkslategrey: "#2F4F4F", darkturquoise: "#00CED1", darkviolet: "#9400D3", deeppink: "#FF1493", deepskyblue: "#00BFFF", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1E90FF", firebrick: "#B22222", floralwhite: "#FFFAF0", forestgreen: "#228B22", fuchsia: "#FF00FF", gainsboro: "#DCDCDC", ghostwhite: "#F8F8FF", gold: "#FFD700", goldenrod: "#DAA520", gray: "#808080", grey: "#808080", green: "#008000", greenyellow: "#ADFF2F", honeydew: "#F0FFF0", hotpink: "#FF69B4", indianred: "#CD5C5C", indigo: "#4B0082", ivory: "#FFFFF0", khaki: "#F0E68C", lavender: "#E6E6FA", lavenderblush: "#FFF0F5", lawngreen: "#7CFC00", lemonchiffon: "#FFFACD", lightblue: "#ADD8E6", lightcoral: "#F08080", lightcyan: "#E0FFFF", lightgoldenrodyellow: "#FAFAD2", lightgray: "#D3D3D3", lightgrey: "#D3D3D3", lightgreen: "#90EE90", lightpink: "#FFB6C1", lightsalmon: "#FFA07A", lightseagreen: "#20B2AA", lightskyblue: "#87CEFA", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#B0C4DE", lightyellow: "#FFFFE0", lime: "#00FF00", limegreen: "#32CD32", linen: "#FAF0E6", magenta: "#FF00FF", maroon: "#800000", mediumaquamarine: "#66CDAA", mediumblue: "#0000CD", mediumorchid: "#BA55D3", mediumpurple: "#9370DB", mediumseagreen: "#3CB371", mediumslateblue: "#7B68EE", mediumspringgreen: "#00FA9A", mediumturquoise: "#48D1CC", mediumvioletred: "#C71585", midnightblue: "#191970", mintcream: "#F5FFFA", mistyrose: "#FFE4E1", moccasin: "#FFE4B5", navajowhite: "#FFDEAD", navy: "#000080", oldlace: "#FDF5E6", olive: "#808000", olivedrab: "#6B8E23", orange: "#FFA500", orangered: "#FF4500", orchid: "#DA70D6", palegoldenrod: "#EEE8AA", palegreen: "#98FB98", paleturquoise: "#AFEEEE", palevioletred: "#DB7093", papayawhip: "#FFEFD5", peachpuff: "#FFDAB9", peru: "#CD853F", pink: "#FFC0CB", plum: "#DDA0DD", powderblue: "#B0E0E6", purple: "#800080", rebeccapurple: "#663399", red: "#FF0000", rosybrown: "#BC8F8F", royalblue: "#4169E1", saddlebrown: "#8B4513", salmon: "#FA8072", sandybrown: "#F4A460", seagreen: "#2E8B57", seashell: "#FFF5EE", sienna: "#A0522D", silver: "#C0C0C0", skyblue: "#87CEEB", slateblue: "#6A5ACD", slategray: "#708090", slategrey: "#708090", snow: "#FFFAFA", springgreen: "#00FF7F", steelblue: "#4682B4", tan: "#D2B48C", teal: "#008080", thistle: "#D8BFD8", tomato: "#FF6347", turquoise: "#40E0D0", violet: "#EE82EE", wheat: "#F5DEB3", white: "#FFFFFF", whitesmoke: "#F5F5F5", yellow: "#FFFF00", yellowgreen: "#9ACD32" }, s.Color.fromRgb = function(A) {
      return o.fromSource(o.sourceFromRgb(A));
    }, s.Color.sourceFromRgb = function(A) {
      var i = A.match(o.reRGBa);
      if (i) {
        var n = parseInt(i[1], 10) / (/%$/.test(i[1]) ? 100 : 1) * (/%$/.test(i[1]) ? 255 : 1), h = parseInt(i[2], 10) / (/%$/.test(i[2]) ? 100 : 1) * (/%$/.test(i[2]) ? 255 : 1), a = parseInt(i[3], 10) / (/%$/.test(i[3]) ? 100 : 1) * (/%$/.test(i[3]) ? 255 : 1);
        return [parseInt(n, 10), parseInt(h, 10), parseInt(a, 10), i[4] ? parseFloat(i[4]) : 1];
      }
    }, s.Color.fromRgba = o.fromRgb, s.Color.fromHsl = function(A) {
      return o.fromSource(o.sourceFromHsl(A));
    }, s.Color.sourceFromHsl = function(A) {
      var i = A.match(o.reHSLa);
      if (i) {
        var n, h, a, l = (parseFloat(i[1]) % 360 + 360) % 360 / 360, f = parseFloat(i[2]) / (/%$/.test(i[2]) ? 100 : 1), m = parseFloat(i[3]) / (/%$/.test(i[3]) ? 100 : 1);
        if (f === 0)
          n = h = a = m;
        else {
          var v = m <= 0.5 ? m * (f + 1) : m + f - m * f, x = 2 * m - v;
          n = d(x, v, l + 1 / 3), h = d(x, v, l), a = d(x, v, l - 1 / 3);
        }
        return [Math.round(255 * n), Math.round(255 * h), Math.round(255 * a), i[4] ? parseFloat(i[4]) : 1];
      }
    }, s.Color.fromHsla = o.fromHsl, s.Color.fromHex = function(A) {
      return o.fromSource(o.sourceFromHex(A));
    }, s.Color.sourceFromHex = function(A) {
      if (A.match(o.reHex)) {
        var i = A.slice(A.indexOf("#") + 1), n = i.length === 3 || i.length === 4, h = i.length === 8 || i.length === 4, a = n ? i.charAt(0) + i.charAt(0) : i.substring(0, 2), l = n ? i.charAt(1) + i.charAt(1) : i.substring(2, 4), f = n ? i.charAt(2) + i.charAt(2) : i.substring(4, 6), m = h ? n ? i.charAt(3) + i.charAt(3) : i.substring(6, 8) : "FF";
        return [parseInt(a, 16), parseInt(l, 16), parseInt(f, 16), parseFloat((parseInt(m, 16) / 255).toFixed(2))];
      }
    }, s.Color.fromSource = function(A) {
      var i = new o();
      return i.setSource(A), i;
    });
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = ["e", "se", "s", "sw", "w", "nw", "n", "ne", "e"], d = ["ns", "nesw", "ew", "nwse"], A = {}, i = "left", n = "top", h = "right", a = "bottom", l = "center", f = { top: a, bottom: n, left: h, right: i, center: l }, m = s.util.radiansToDegrees, v = Math.sign || function(L) {
      return (L > 0) - (L < 0) || +L;
    };
    function x(L, I) {
      var j = L.angle + m(Math.atan2(I.y, I.x)) + 360;
      return Math.round(j % 360 / 45);
    }
    function U(L, I) {
      var j = I.transform.target, Y = j.canvas, G = s.util.object.clone(I);
      G.target = j, Y && Y.fire("object:" + L, G), j.fire(L, I);
    }
    function F(L, I) {
      var j = I.canvas, Y = L[j.uniScaleKey];
      return j.uniformScaling && !Y || !j.uniformScaling && Y;
    }
    function S(L) {
      return L.originX === l && L.originY === l;
    }
    function H(L, I, j) {
      var Y = L.lockScalingX, G = L.lockScalingY;
      return !(!Y || !G) || !(I || !Y && !G || !j) || !(!Y || I !== "x") || !(!G || I !== "y");
    }
    function D(L, I, j, Y) {
      return { e: L, transform: I, pointer: { x: j, y: Y } };
    }
    function R(L) {
      return function(I, j, Y, G) {
        var z = j.target, Z = z.getCenterPoint(), eA = z.translateToOriginPoint(Z, j.originX, j.originY), iA = L(I, j, Y, G);
        return z.setPositionByOrigin(eA, j.originX, j.originY), iA;
      };
    }
    function W(L, I) {
      return function(j, Y, G, z) {
        var Z = I(j, Y, G, z);
        return Z && U(L, D(j, Y, G, z)), Z;
      };
    }
    function V(L, I, j, Y, G) {
      var z = L.target, Z = z.controls[L.corner], eA = z.canvas.getZoom(), iA = z.padding / eA, q = z.toLocalPoint(new s.Point(Y, G), I, j);
      return q.x >= iA && (q.x -= iA), q.x <= -iA && (q.x += iA), q.y >= iA && (q.y -= iA), q.y <= iA && (q.y += iA), q.x -= Z.offsetX, q.y -= Z.offsetY, q;
    }
    function _(L) {
      return L.flipX !== L.flipY;
    }
    function k(L, I, j, Y, G) {
      if (L[I] !== 0) {
        var z = G / L._getTransformedDimensions()[Y] * L[j];
        L.set(j, z);
      }
    }
    function M(L, I, j, Y) {
      var G, z = I.target, Z = z._getTransformedDimensions(0, z.skewY), eA = V(I, I.originX, I.originY, j, Y), iA = Math.abs(2 * eA.x) - Z.x, q = z.skewX;
      iA < 2 ? G = 0 : (G = m(Math.atan2(iA / z.scaleX, Z.y / z.scaleY)), I.originX === i && I.originY === a && (G = -G), I.originX === h && I.originY === n && (G = -G), _(z) && (G = -G));
      var rA = q !== G;
      if (rA) {
        var J = z._getTransformedDimensions().y;
        z.set("skewX", G), k(z, "skewY", "scaleY", "y", J);
      }
      return rA;
    }
    function N(L, I, j, Y) {
      var G, z = I.target, Z = z._getTransformedDimensions(z.skewX, 0), eA = V(I, I.originX, I.originY, j, Y), iA = Math.abs(2 * eA.y) - Z.y, q = z.skewY;
      iA < 2 ? G = 0 : (G = m(Math.atan2(iA / z.scaleY, Z.x / z.scaleX)), I.originX === i && I.originY === a && (G = -G), I.originX === h && I.originY === n && (G = -G), _(z) && (G = -G));
      var rA = q !== G;
      if (rA) {
        var J = z._getTransformedDimensions().x;
        z.set("skewY", G), k(z, "skewX", "scaleX", "x", J);
      }
      return rA;
    }
    function X(L, I, j, Y, G) {
      G = G || {};
      var z, Z, eA, iA, q, rA, J = I.target, lA = J.lockScalingX, sA = J.lockScalingY, hA = G.by, pA = F(L, J), VA = H(J, hA, pA), at = I.gestureScale;
      if (VA)
        return !1;
      if (at)
        Z = I.scaleX * at, eA = I.scaleY * at;
      else {
        if (z = V(I, I.originX, I.originY, j, Y), q = hA !== "y" ? v(z.x) : 1, rA = hA !== "x" ? v(z.y) : 1, I.signX || (I.signX = q), I.signY || (I.signY = rA), J.lockScalingFlip && (I.signX !== q || I.signY !== rA))
          return !1;
        if (iA = J._getTransformedDimensions(), pA && !hA) {
          var Et = Math.abs(z.x) + Math.abs(z.y), QA = I.original, XA = Et / (Math.abs(iA.x * QA.scaleX / J.scaleX) + Math.abs(iA.y * QA.scaleY / J.scaleY));
          Z = QA.scaleX * XA, eA = QA.scaleY * XA;
        } else
          Z = Math.abs(z.x * J.scaleX / iA.x), eA = Math.abs(z.y * J.scaleY / iA.y);
        S(I) && (Z *= 2, eA *= 2), I.signX !== q && hA !== "y" && (I.originX = f[I.originX], Z *= -1, I.signX = q), I.signY !== rA && hA !== "x" && (I.originY = f[I.originY], eA *= -1, I.signY = rA);
      }
      var ct = J.scaleX, Ot = J.scaleY;
      return hA ? (hA === "x" && J.set("scaleX", Z), hA === "y" && J.set("scaleY", eA)) : (!lA && J.set("scaleX", Z), !sA && J.set("scaleY", eA)), ct !== J.scaleX || Ot !== J.scaleY;
    }
    A.scaleCursorStyleHandler = function(L, I, j) {
      var Y = F(L, j), G = "";
      if (I.x !== 0 && I.y === 0 ? G = "x" : I.x === 0 && I.y !== 0 && (G = "y"), H(j, G, Y))
        return "not-allowed";
      var z = x(j, I);
      return o[z] + "-resize";
    }, A.skewCursorStyleHandler = function(L, I, j) {
      var Y = "not-allowed";
      if (I.x !== 0 && j.lockSkewingY || I.y !== 0 && j.lockSkewingX)
        return Y;
      var G = x(j, I) % 4;
      return d[G] + "-resize";
    }, A.scaleSkewCursorStyleHandler = function(L, I, j) {
      return L[j.canvas.altActionKey] ? A.skewCursorStyleHandler(L, I, j) : A.scaleCursorStyleHandler(L, I, j);
    }, A.rotationWithSnapping = W("rotating", R(function(L, I, j, Y) {
      var G = I, z = G.target, Z = z.translateToOriginPoint(z.getCenterPoint(), G.originX, G.originY);
      if (z.lockRotation)
        return !1;
      var eA, iA = Math.atan2(G.ey - Z.y, G.ex - Z.x), q = Math.atan2(Y - Z.y, j - Z.x), rA = m(q - iA + G.theta);
      if (z.snapAngle > 0) {
        var J = z.snapAngle, lA = z.snapThreshold || J, sA = Math.ceil(rA / J) * J, hA = Math.floor(rA / J) * J;
        Math.abs(rA - hA) < lA ? rA = hA : Math.abs(rA - sA) < lA && (rA = sA);
      }
      return rA < 0 && (rA = 360 + rA), rA %= 360, eA = z.angle !== rA, z.angle = rA, eA;
    })), A.scalingEqually = W("scaling", R(function(L, I, j, Y) {
      return X(L, I, j, Y);
    })), A.scalingX = W("scaling", R(function(L, I, j, Y) {
      return X(L, I, j, Y, { by: "x" });
    })), A.scalingY = W("scaling", R(function(L, I, j, Y) {
      return X(L, I, j, Y, { by: "y" });
    })), A.scalingYOrSkewingX = function(L, I, j, Y) {
      return L[I.target.canvas.altActionKey] ? A.skewHandlerX(L, I, j, Y) : A.scalingY(L, I, j, Y);
    }, A.scalingXOrSkewingY = function(L, I, j, Y) {
      return L[I.target.canvas.altActionKey] ? A.skewHandlerY(L, I, j, Y) : A.scalingX(L, I, j, Y);
    }, A.changeWidth = W("resizing", R(function(L, I, j, Y) {
      var G = I.target, z = V(I, I.originX, I.originY, j, Y), Z = G.strokeWidth / (G.strokeUniform ? G.scaleX : 1), eA = S(I) ? 2 : 1, iA = G.width, q = Math.abs(z.x * eA / G.scaleX) - Z;
      return G.set("width", Math.max(q, 0)), iA !== q;
    })), A.skewHandlerX = function(L, I, j, Y) {
      var G, z = I.target, Z = z.skewX, eA = I.originY;
      return !z.lockSkewingX && (Z === 0 ? G = V(I, l, l, j, Y).x > 0 ? i : h : (Z > 0 && (G = eA === n ? i : h), Z < 0 && (G = eA === n ? h : i), _(z) && (G = G === i ? h : i)), I.originX = G, W("skewing", R(M))(L, I, j, Y));
    }, A.skewHandlerY = function(L, I, j, Y) {
      var G, z = I.target, Z = z.skewY, eA = I.originX;
      return !z.lockSkewingY && (Z === 0 ? G = V(I, l, l, j, Y).y > 0 ? n : a : (Z > 0 && (G = eA === i ? n : a), Z < 0 && (G = eA === i ? a : n), _(z) && (G = G === n ? a : n)), I.originY = G, W("skewing", R(N))(L, I, j, Y));
    }, A.dragHandler = function(L, I, j, Y) {
      var G = I.target, z = j - I.offsetX, Z = Y - I.offsetY, eA = !G.get("lockMovementX") && G.left !== z, iA = !G.get("lockMovementY") && G.top !== Z;
      return eA && G.set("left", z), iA && G.set("top", Z), (eA || iA) && U("moving", D(L, I, j, Y)), eA || iA;
    }, A.scaleOrSkewActionName = function(L, I, j) {
      var Y = L[j.canvas.altActionKey];
      return I.x === 0 ? Y ? "skewX" : "scaleY" : I.y === 0 ? Y ? "skewY" : "scaleX" : void 0;
    }, A.rotationStyleHandler = function(L, I, j) {
      return j.lockRotation ? "not-allowed" : I.cursorStyle;
    }, A.fireEvent = U, A.wrapWithFixedAnchor = R, A.wrapWithFireEvent = W, A.getLocalPoint = V, s.controlsUtils = A;
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.util.degreesToRadians, d = s.controlsUtils;
    d.renderCircleControl = function(A, i, n, h, a) {
      h = h || {};
      var l, f = this.sizeX || h.cornerSize || a.cornerSize, m = this.sizeY || h.cornerSize || a.cornerSize, v = h.transparentCorners !== void 0 ? h.transparentCorners : a.transparentCorners, x = v ? "stroke" : "fill", U = !v && (h.cornerStrokeColor || a.cornerStrokeColor), F = i, S = n;
      A.save(), A.fillStyle = h.cornerColor || a.cornerColor, A.strokeStyle = h.cornerStrokeColor || a.cornerStrokeColor, f > m ? (l = f, A.scale(1, m / f), S = n * f / m) : m > f ? (l = m, A.scale(f / m, 1), F = i * m / f) : l = f, A.lineWidth = 1, A.beginPath(), A.arc(F, S, l / 2, 0, 2 * Math.PI, !1), A[x](), U && A.stroke(), A.restore();
    }, d.renderSquareControl = function(A, i, n, h, a) {
      h = h || {};
      var l = this.sizeX || h.cornerSize || a.cornerSize, f = this.sizeY || h.cornerSize || a.cornerSize, m = h.transparentCorners !== void 0 ? h.transparentCorners : a.transparentCorners, v = m ? "stroke" : "fill", x = !m && (h.cornerStrokeColor || a.cornerStrokeColor), U = l / 2, F = f / 2;
      A.save(), A.fillStyle = h.cornerColor || a.cornerColor, A.strokeStyle = h.cornerStrokeColor || a.cornerStrokeColor, A.lineWidth = 1, A.translate(i, n), A.rotate(o(a.angle)), A[v + "Rect"](-U, -F, l, f), x && A.strokeRect(-U, -F, l, f), A.restore();
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
      var h, a, l, f, m = n ? this.touchSizeX : this.sizeX, v = n ? this.touchSizeY : this.sizeY;
      if (m && v && m !== v) {
        var x = Math.atan2(v, m), U = Math.sqrt(m * m + v * v) / 2, F = x - s.util.degreesToRadians(o), S = Math.PI / 2 - x - s.util.degreesToRadians(o);
        h = U * s.util.cos(F), a = U * s.util.sin(F), l = U * s.util.cos(S), f = U * s.util.sin(S);
      } else
        U = 0.7071067812 * (m && v ? m : d), F = s.util.degreesToRadians(45 - o), h = l = U * s.util.cos(F), a = f = U * s.util.sin(F);
      return { tl: { x: A - f, y: i - l }, tr: { x: A + h, y: i - a }, bl: { x: A - h, y: i + a }, br: { x: A + f, y: i + l } };
    }, render: function(o, d, A, i, n) {
      ((i = i || {}).cornerStyle || n.cornerStyle) === "circle" ? s.controlsUtils.renderCircleControl.call(this, o, d, A, i, n) : s.controlsUtils.renderSquareControl.call(this, o, d, A, i, n);
    } };
  }(e), function() {
    function u(o, d) {
      var A, i, n, h, a = o.getAttribute("style"), l = o.getAttribute("offset") || 0;
      if (l = (l = parseFloat(l) / (/%$/.test(l) ? 100 : 1)) < 0 ? 0 : l > 1 ? 1 : l, a) {
        var f = a.split(/\s*;\s*/);
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
      var A, i, n, h, a = s(this.coords, !0), l = (d = d || {}, s(this.colorStops, !0)), f = a.r1 > a.r2, m = this.gradientTransform ? this.gradientTransform.concat() : B.iMatrix.concat(), v = -this.offsetX, x = -this.offsetY, U = !!d.additionalTransform, F = this.gradientUnits === "pixels" ? "userSpaceOnUse" : "objectBoundingBox";
      if (l.sort(function(R, W) {
        return R.offset - W.offset;
      }), F === "objectBoundingBox" ? (v /= o.width, x /= o.height) : (v += o.width / 2, x += o.height / 2), o.type === "path" && this.gradientUnits !== "percentage" && (v -= o.pathOffset.x, x -= o.pathOffset.y), m[4] -= v, m[5] -= x, h = 'id="SVGID_' + this.id + '" gradientUnits="' + F + '"', h += ' gradientTransform="' + (U ? d.additionalTransform + " " : "") + B.util.matrixToSVG(m) + '" ', this.type === "linear" ? n = ["<linearGradient ", h, ' x1="', a.x1, '" y1="', a.y1, '" x2="', a.x2, '" y2="', a.y2, `">
`] : this.type === "radial" && (n = ["<radialGradient ", h, ' cx="', f ? a.x1 : a.x2, '" cy="', f ? a.y1 : a.y2, '" r="', f ? a.r1 : a.r2, '" fx="', f ? a.x2 : a.x1, '" fy="', f ? a.y2 : a.y1, `">
`]), this.type === "radial") {
        if (f)
          for ((l = l.concat()).reverse(), A = 0, i = l.length; A < i; A++)
            l[A].offset = 1 - l[A].offset;
        var S = Math.min(a.r1, a.r2);
        if (S > 0) {
          var H = S / Math.max(a.r1, a.r2);
          for (A = 0, i = l.length; A < i; A++)
            l[A].offset += H * (1 - l[A].offset);
        }
      }
      for (A = 0, i = l.length; A < i; A++) {
        var D = l[A];
        n.push("<stop ", 'offset="', 100 * D.offset + "%", '" style="stop-color:', D.color, D.opacity !== void 0 ? ";stop-opacity: " + D.opacity : ";", `"/>
`);
      }
      return n.push(this.type === "linear" ? `</linearGradient>
` : `</radialGradient>
`), n.join("");
    }, toLive: function(o) {
      var d, A, i, n = B.util.object.clone(this.coords);
      if (this.type) {
        for (this.type === "linear" ? d = o.createLinearGradient(n.x1, n.y1, n.x2, n.y2) : this.type === "radial" && (d = o.createRadialGradient(n.x1, n.y1, n.r1, n.x2, n.y2, n.r2)), A = 0, i = this.colorStops.length; A < i; A++) {
          var h = this.colorStops[A].color, a = this.colorStops[A].opacity, l = this.colorStops[A].offset;
          a !== void 0 && (h = new B.Color(h).setAlpha(a).toRgba()), d.addColorStop(l, h);
        }
        return d;
      }
    } }), B.util.object.extend(B.Gradient, { fromElement: function(o, d, A, i) {
      var n = parseFloat(A) / (/%$/.test(A) ? 100 : 1);
      n = n < 0 ? 0 : n > 1 ? 1 : n, isNaN(n) && (n = 1);
      var h, a, l, f, m = o.getElementsByTagName("stop"), v = o.getAttribute("gradientUnits") === "userSpaceOnUse" ? "pixels" : "percentage", x = o.getAttribute("gradientTransform") || "", U = [], F = 0, S = 0;
      for (o.nodeName === "linearGradient" || o.nodeName === "LINEARGRADIENT" ? (h = "linear", a = function(H) {
        return { x1: H.getAttribute("x1") || 0, y1: H.getAttribute("y1") || 0, x2: H.getAttribute("x2") || "100%", y2: H.getAttribute("y2") || 0 };
      }(o)) : (h = "radial", a = function(H) {
        return { x1: H.getAttribute("fx") || H.getAttribute("cx") || "50%", y1: H.getAttribute("fy") || H.getAttribute("cy") || "50%", r1: 0, x2: H.getAttribute("cx") || "50%", y2: H.getAttribute("cy") || "50%", r2: H.getAttribute("r") || "50%" };
      }(o)), l = m.length; l--; )
        U.push(u(m[l], n));
      return f = B.parseTransformAttribute(x), function(H, D, R, W) {
        var V, _;
        Object.keys(D).forEach(function(k) {
          (V = D[k]) === "Infinity" ? _ = 1 : V === "-Infinity" ? _ = 0 : (_ = parseFloat(D[k], 10), typeof V == "string" && /^(\d+\.\d+)%|(\d+)%$/.test(V) && (_ *= 0.01, W === "pixels" && (k !== "x1" && k !== "x2" && k !== "r2" || (_ *= R.viewBoxWidth || R.width), k !== "y1" && k !== "y2" || (_ *= R.viewBoxHeight || R.height)))), D[k] = _;
        });
      }(0, a, i, v), v === "pixels" && (F = -d.left, S = -d.top), new B.Gradient({ id: o.getAttribute("id"), type: h, coords: a, colorStops: U, gradientUnits: v, gradientTransform: f, offsetX: F, offsetY: S });
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
      var A = 40, i = 40, n = s.Object.NUM_FRACTION_DIGITS, h = s.util.rotateVector({ x: this.offsetX, y: this.offsetY }, s.util.degreesToRadians(-d.angle)), a = new s.Color(this.color);
      return d.width && d.height && (A = 100 * o((Math.abs(h.x) + this.blur) / d.width, n) + 20, i = 100 * o((Math.abs(h.y) + this.blur) / d.height, n) + 20), d.flipX && (h.x *= -1), d.flipY && (h.y *= -1), '<filter id="SVGID_' + this.id + '" y="-' + i + '%" height="' + (100 + 2 * i) + '%" x="-' + A + '%" width="' + (100 + 2 * A) + `%" >
	<feGaussianBlur in="SourceAlpha" stdDeviation="` + o(this.blur ? this.blur / 2 : 0, n) + `"></feGaussianBlur>
	<feOffset dx="` + o(h.x, n) + '" dy="' + o(h.y, n) + `" result="oBlur" ></feOffset>
	<feFlood flood-color="` + a.toRgb() + '" flood-opacity="' + a.getAlpha() + `"/>
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
      var u = B.util.object.extend, s = B.util.getElementOffset, o = B.util.removeFromArray, d = B.util.toFixed, A = B.util.transformPoint, i = B.util.invertTransform, n = B.util.getNodeCanvas, h = B.util.createCanvasElement, a = new Error("Could not initialize `canvas` element");
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
          throw a;
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
        var l, f, m, v, x, U, F, S, H = "", D = {}, R = B.fontPaths, W = [];
        for (this._objects.forEach(function _(k) {
          W.push(k), k._objects && k._objects.forEach(_);
        }), F = 0, S = W.length; F < S; F++)
          if (f = (l = W[F]).fontFamily, l.type.indexOf("text") !== -1 && !D[f] && R[f] && (D[f] = !0, l.styles))
            for (x in m = l.styles)
              for (U in v = m[x])
                !D[f = v[U].fontFamily] && R[f] && (D[f] = !0);
        for (var V in D)
          H += [`		@font-face {
`, "			font-family: '", V, `';
`, "			src: url('", R[V], `');
`, `		}
`].join("");
        return H && (H = ['	<style type="text/css">', `<![CDATA[
`, H, "]]>", `</style>
`].join("")), H;
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
            var F = m.repeat, S = B.util.invertTransform(v), H = this[f + "Vpt"] ? B.util.matrixToSVG(S) : "";
            l.push('<rect transform="' + H + " translate(", x / 2, ",", U / 2, ')"', ' x="', m.offsetX - x / 2, '" y="', m.offsetY - U / 2, '" ', 'width="', F === "repeat-y" || F === "no-repeat" ? m.source.width : x, '" height="', F === "repeat-x" || F === "no-repeat" ? m.source.height : U, '" fill="url(#SVGID_' + m.id + ')"', `></rect>
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
        var m, v, x, U, F, S = this._activeObject, H = 0;
        if (l === S && l.type === "activeSelection")
          for (F = S._objects, m = 0; m < F.length; m++)
            v = F[m], (x = this._objects.indexOf(v)) > 0 + H && (U = x - 1, o(this._objects, v), this._objects.splice(U, 0, v)), H++;
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
        var m, v, x, U, F, S = this._activeObject, H = 0;
        if (l === S && l.type === "activeSelection")
          for (m = (F = S._objects).length; m--; )
            v = F[m], (x = this._objects.indexOf(v)) < this._objects.length - 1 - H && (U = x + 1, o(this._objects, v), this._objects.splice(U, 0, v)), H++;
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
    var a = new B.Group(s);
    this.shadow && a.set("shadow", new B.Shadow(this.shadow)), this.canvas.fire("before:path:created", { path: a }), this.canvas.add(a), this.canvas.fire("path:created", { path: a }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = u, this.canvas.requestRenderAll();
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
        for (var a = 0, l = this._objects.length; a < l; a++)
          A = this._objects[a], h.indexOf(A) === -1 ? i.push(A) : n.push(A);
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
      var n = A.calcTransformMatrix(), h = B.util.invertTransform(n), a = this.restorePointerVpt(i);
      return B.util.transformPoint(a, h);
    }, isTargetTransparent: function(A, i, n) {
      if (A.shouldCache() && A._cacheCanvas && A !== this._activeObject) {
        var h = this._normalizePointer(A, { x: i, y: n }), a = Math.max(A.cacheTranslationX + h.x * A.zoomX, 0), l = Math.max(A.cacheTranslationY + h.y * A.zoomY, 0);
        return B.util.isTransparent(A._cacheContext, Math.round(a), Math.round(l), this.targetFindTolerance);
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
      var a = h.controls[i];
      return a.getActionName(n, a, h);
    }, _setupCurrentTransform: function(A, i, n) {
      if (i) {
        var h = this.getPointer(A), a = i.__corner, l = i.controls[a], f = n && a ? l.getActionHandler(A, i, l) : B.controlsUtils.dragHandler, m = this._getActionFromCorner(n, a, A, i), v = this._getOriginFromCorner(i, a), x = A[this.centeredKey], U = { target: i, action: m, actionHandler: f, corner: a, scaleX: i.scaleX, scaleY: i.scaleY, skewX: i.skewX, skewY: i.skewY, offsetX: h.x - i.left, offsetY: h.y - i.top, originX: v.x, originY: v.y, ex: h.x, ey: h.y, lastX: h.x, lastY: h.y, theta: s(i.angle), width: i.width * i.scaleX, shiftKey: A.shiftKey, altKey: x, original: B.util.saveObjectTransform(i) };
        this._shouldCenterTransform(i, m, x) && (U.originX = "center", U.originY = "center"), U.original.originX = v.x, U.original.originY = v.y, this._currentTransform = U, this._beforeTransform(A);
      }
    }, setCursor: function(A) {
      this.upperCanvasEl.style.cursor = A;
    }, _drawSelection: function(A) {
      var i = this._groupSelector, n = new B.Point(i.ex, i.ey), h = B.util.transformPoint(n, this.viewportTransform), a = new B.Point(i.ex + i.left, i.ey + i.top), l = B.util.transformPoint(a, this.viewportTransform), f = Math.min(h.x, l.x), m = Math.min(h.y, l.y), v = Math.max(h.x, l.x), x = Math.max(h.y, l.y), U = this.selectionLineWidth / 2;
      this.selectionColor && (A.fillStyle = this.selectionColor, A.fillRect(f, m, v - f, x - m)), this.selectionLineWidth && this.selectionBorderColor && (A.lineWidth = this.selectionLineWidth, A.strokeStyle = this.selectionBorderColor, f += U, m += U, v -= U, x -= U, B.Object.prototype._setLineDash.call(this, A, this.selectionDashArray), A.strokeRect(f, m, v - f, x - m));
    }, findTarget: function(A, i) {
      if (!this.skipTargetFind) {
        var n, h, a = this.getPointer(A, !0), l = this._activeObject, f = this.getActiveObjects(), m = o(A), v = f.length > 1 && !i || f.length === 1;
        if (this.targets = [], v && l._findTargetCorner(a, m) || f.length > 1 && !i && l === this._searchPossibleTargets([l], a))
          return l;
        if (f.length === 1 && l === this._searchPossibleTargets([l], a)) {
          if (!this.preserveObjectStacking)
            return l;
          n = l, h = this.targets, this.targets = [];
        }
        var x = this._searchPossibleTargets(this._objects, a);
        return A[this.altSelectionKey] && x && n && x !== n && (x = n, this.targets = h), x;
      }
    }, _checkTarget: function(A, i, n) {
      if (i && i.visible && i.evented && i.containsPoint(A) && (!this.perPixelTargetFind && !i.perPixelTargetFind || i.isEditing || !this.isTargetTransparent(i, n.x, n.y)))
        return !0;
    }, _searchPossibleTargets: function(A, i) {
      for (var n, h, a = A.length; a--; ) {
        var l = A[a], f = l.group ? this._normalizePointer(l.group, i) : i;
        if (this._checkTarget(f, l, i)) {
          (n = A[a]).subTargetCheck && n instanceof B.Group && (h = this._searchPossibleTargets(n._objects, i)) && this.targets.push(h);
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
      var n, h = u(A), a = this.upperCanvasEl, l = a.getBoundingClientRect(), f = l.width || 0, m = l.height || 0;
      f && m || ("top" in l && "bottom" in l && (m = Math.abs(l.top - l.bottom)), "right" in l && "left" in l && (f = Math.abs(l.right - l.left))), this.calcOffset(), h.x = h.x - this._offset.left, h.y = h.y - this._offset.top, i || (h = this.restorePointerVpt(h));
      var v = this.getRetinaScaling();
      return v !== 1 && (h.x /= v, h.y /= v), n = f === 0 || m === 0 ? { width: 1, height: 1 } : { width: a.width / f, height: a.height / m }, { x: h.x * n.width, y: h.y * n.height };
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
      var n = !1, h = this.getActiveObjects(), a = [], l = [];
      A.forEach(function(f) {
        h.indexOf(f) === -1 && (n = !0, f.fire("deselected", { e: i, target: f }), l.push(f));
      }), h.forEach(function(f) {
        A.indexOf(f) === -1 && (n = !0, f.fire("selected", { e: i, target: f }), a.push(f));
      }), A.length > 0 && h.length > 0 ? n && this.fire("selection:updated", { e: i, selected: a, deselected: l }) : h.length > 0 ? this.fire("selection:created", { e: i, selected: a }) : A.length > 0 && this.fire("selection:cleared", { e: i, deselected: l });
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
      var h = this._realizeGroupTransformOnObject(A), a = this.callSuper("_toObject", A, i, n);
      return this._unwindGroupTransformOnObject(A, h), a;
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
      var i, n = this._currentTransform, h = this._groupSelector, a = !1, l = !h || h.left === 0 && h.top === 0;
      if (this._cacheTransformEventData(A), i = this._target, this._handleEvent(A, "up:before"), d(A, 3))
        this.fireRightClick && this._handleEvent(A, "up", 3, l);
      else {
        if (d(A, 2))
          return this.fireMiddleClick && this._handleEvent(A, "up", 2, l), void this._resetTransformEventData();
        if (this.isDrawingMode && this._isCurrentlyDrawing)
          this._onMouseUpInDrawingMode(A);
        else if (this._isMainEvent(A)) {
          if (n && (this._finalizeCurrentTransform(A), a = n.actionPerformed), !l) {
            var f = i === this._activeObject;
            this._maybeGroupObjects(A), a || (a = this._shouldRender(i) || !f && i === this._activeObject);
          }
          var m, v;
          if (i) {
            if (m = i._findTargetCorner(this.getPointer(A, !0), B.util.isTouchEvent(A)), i.selectable && i !== this._activeObject && i.activeOn === "up")
              this.setActiveObject(i, A), a = !0;
            else {
              var x = i.controls[m], U = x && x.getMouseUpHandler(A, i, x);
              U && U(A, n, (v = this.getPointer(A)).x, v.y);
            }
            i.isMoving = !1;
          }
          if (n && (n.target !== i || n.corner !== m)) {
            var F = n.target && n.target.controls[n.corner], S = F && F.getMouseUpHandler(A, i, x);
            v = v || this.getPointer(A), S && S(A, n, v.x, v.y);
          }
          this._setCursorFromEvent(A, i), this._handleEvent(A, "up", 1, l), this._groupSelector = null, this._currentTransform = null, i && (i.__corner = 0), a ? this.requestRenderAll() : l || this.renderTop();
        }
      }
    }, _simpleEventHandler: function(A, i) {
      var n = this.findTarget(i), h = this.targets, a = { e: i, target: n, subTargets: h };
      if (this.fire(A, a), n && n.fire(A, a), !h)
        return n;
      for (var l = 0; l < h.length; l++)
        h[l].fire(A, a);
      return n;
    }, _handleEvent: function(A, i, n, h) {
      var a = this._target, l = this.targets || [], f = { e: A, target: a, subTargets: l, button: n || 1, isClick: h || !1, pointer: this._pointer, absolutePointer: this._absolutePointer, transform: this._currentTransform };
      i === "up" && (f.currentTarget = this.findTarget(A), f.currentSubTargets = this.targets), this.fire("mouse:" + i, f), a && a.fire("mouse" + i, f);
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
        var h = this._shouldRender(i), a = this._shouldGroup(A, i);
        if (this._shouldClearSelection(A, i) ? this.discardActiveObject(A) : a && (this._handleGrouping(A, i), i = this._activeObject), !this.selection || i && (i.selectable || i.isEditing || i === this._activeObject) || (this._groupSelector = { ex: this._absolutePointer.x, ey: this._absolutePointer.y, top: 0, left: 0 }), i) {
          var l = i === this._activeObject;
          i.selectable && i.activeOn === "down" && this.setActiveObject(i, A);
          var f = i._findTargetCorner(this.getPointer(A, !0), B.util.isTouchEvent(A));
          if (i.__corner = f, i === this._activeObject && (f || !a)) {
            this._setupCurrentTransform(A, i, l);
            var m = i.controls[f], v = (n = this.getPointer(A), m && m.getMouseDownHandler(A, i, m));
            v && v(A, this._currentTransform, n.x, n.y);
          }
        }
        this._handleEvent(A, "down"), (h || a) && this.requestRenderAll();
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
      var n = this._hoveredTarget, h = this._hoveredTargets, a = this.targets, l = Math.max(h.length, a.length);
      this.fireSyntheticInOutEvents(A, i, { oldTarget: n, evtOut: "mouseout", canvasEvtOut: "mouse:out", evtIn: "mouseover", canvasEvtIn: "mouse:over" });
      for (var f = 0; f < l; f++)
        this.fireSyntheticInOutEvents(a[f], i, { oldTarget: h[f], evtOut: "mouseout", evtIn: "mouseover" });
      this._hoveredTarget = A, this._hoveredTargets = this.targets.concat();
    }, _fireEnterLeaveEvents: function(A, i) {
      var n = this._draggedoverTarget, h = this._hoveredTargets, a = this.targets, l = Math.max(h.length, a.length);
      this.fireSyntheticInOutEvents(A, i, { oldTarget: n, evtOut: "dragleave", evtIn: "dragenter" });
      for (var f = 0; f < l; f++)
        this.fireSyntheticInOutEvents(a[f], i, { oldTarget: h[f], evtOut: "dragleave", evtIn: "dragenter" });
      this._draggedoverTarget = A;
    }, fireSyntheticInOutEvents: function(A, i, n) {
      var h, a, l, f = n.oldTarget, m = f !== A, v = n.canvasEvtIn, x = n.canvasEvtOut;
      m && (h = { e: i, target: A, previousTarget: f }, a = { e: i, target: f, nextTarget: A }), l = A && m, f && m && (x && this.fire(x, a), f.fire(n.evtOut, a)), l && (v && this.fire(v, h), A.fire(n.evtIn, h));
    }, __onMouseWheel: function(A) {
      this._cacheTransformEventData(A), this._handleEvent(A, "wheel"), this._resetTransformEventData();
    }, _transformObject: function(A) {
      var i = this.getPointer(A), n = this._currentTransform;
      n.reset = !1, n.shiftKey = A.shiftKey, n.altKey = A[this.centeredKey], this._performTransformAction(A, n, i), n.actionPerformed && this.requestRenderAll();
    }, _performTransformAction: function(A, i, n) {
      var h = n.x, a = n.y, l = i.action, f = !1, m = i.actionHandler;
      m && (f = m(A, i, h, a)), l === "drag" && f && (i.target.isMoving = !0, this.setCursor(i.target.moveCursor || this.moveCursor)), i.actionPerformed = i.actionPerformed || f;
    }, _fire: B.controlsUtils.fireEvent, _setCursorFromEvent: function(A, i) {
      if (!i)
        return this.setCursor(this.defaultCursor), !1;
      var n = i.hoverCursor || this.hoverCursor, h = this._activeObject && this._activeObject.type === "activeSelection" ? this._activeObject : null, a = (!h || !h.contains(i)) && i._findTargetCorner(this.getPointer(A, !0));
      a ? this.setCursor(this.getCornerCursor(a, i, A)) : (i.subTargetCheck && this.targets.concat().reverse().map(function(l) {
        n = l.hoverCursor || n;
      }), this.setCursor(n));
    }, getCornerCursor: function(A, i, n) {
      var h = i.controls[A];
      return h.cursorStyleHandler(n, h, i);
    } });
  }(), y = Math.min, E = Math.max, B.util.object.extend(B.Canvas.prototype, { _shouldGroup: function(u, s) {
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
    for (var s, o = [], d = this._groupSelector.ex, A = this._groupSelector.ey, i = d + this._groupSelector.left, n = A + this._groupSelector.top, h = new B.Point(y(d, i), y(A, n)), a = new B.Point(E(d, i), E(A, n)), l = !this.selectionFullyContained, f = d === i && A === n, m = this._objects.length; m-- && !((s = this._objects[m]) && s.selectable && s.visible && (l && s.intersectsWithRect(h, a, !0) || s.isContainedWithinRect(h, a, !0) || l && s.containsPoint(h, null, !0) || l && s.containsPoint(a, null, !0)) && (o.push(s), f)); )
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
    var o = ((s = s || {}).width || this.width) * u, d = (s.height || this.height) * u, A = this.getZoom(), i = this.width, n = this.height, h = A * u, a = this.viewportTransform, l = (a[4] - (s.left || 0)) * u, f = (a[5] - (s.top || 0)) * u, m = this.interactive, v = [h, 0, 0, h, l, f], x = this.enableRetinaScaling, U = B.util.createCanvasElement(), F = this.contextTop;
    return U.width = o, U.height = d, this.contextTop = null, this.enableRetinaScaling = !1, this.interactive = !1, this.viewportTransform = v, this.width = o, this.height = d, this.calcViewportBoundaries(), this.renderCanvas(U.getContext("2d"), this._objects), this.viewportTransform = a, this.width = i, this.height = n, this.calcViewportBoundaries(), this.interactive = m, this.enableRetinaScaling = x, this.contextTop = F, U;
  } }), B.util.object.extend(B.StaticCanvas.prototype, { loadFromJSON: function(u, s, o) {
    if (u) {
      var d = typeof u == "string" ? JSON.parse(u) : B.util.object.clone(u), A = this, i = d.clipPath, n = this.renderOnAddRemove;
      return this.renderOnAddRemove = !1, delete d.clipPath, this._enlivenObjects(d.objects, function(h) {
        A.clear(), A._setBgOverlay(d, function() {
          i ? A._enlivenObjects([i], function(a) {
            A.clipPath = a[0], A.__setupCanvas.call(A, d, h, n, s);
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
    s.Object || (s.Object = s.util.createClass(s.CommonMethods, { type: "object", originX: "left", originY: "top", top: 0, left: 0, width: 0, height: 0, scaleX: 1, scaleY: 1, flipX: !1, flipY: !1, opacity: 1, angle: 0, skewX: 0, skewY: 0, cornerSize: 13, touchCornerSize: 24, transparentCorners: !0, hoverCursor: null, moveCursor: null, padding: 0, borderColor: "rgb(178,204,255)", borderDashArray: null, cornerColor: "rgb(178,204,255)", cornerStrokeColor: null, cornerStyle: "rect", cornerDashArray: null, centeredScaling: !1, centeredRotation: !0, fill: "rgb(0,0,0)", fillRule: "nonzero", globalCompositeOperation: "source-over", backgroundColor: "", selectionBackgroundColor: "", stroke: null, strokeWidth: 1, strokeDashArray: null, strokeDashOffset: 0, strokeLineCap: "butt", strokeLineJoin: "miter", strokeMiterLimit: 4, shadow: null, borderOpacityWhenMoving: 0.4, borderScaleFactor: 1, minScaleLimit: 0, selectable: !0, evented: !0, visible: !0, hasControls: !0, hasBorders: !0, perPixelTargetFind: !1, includeDefaultValues: !0, lockMovementX: !1, lockMovementY: !1, lockRotation: !1, lockScalingX: !1, lockScalingY: !1, lockSkewingX: !1, lockSkewingY: !1, lockScalingFlip: !1, excludeFromExport: !1, objectCaching: h, statefullCache: !1, noScaleCache: !0, strokeUniform: !1, dirty: !0, __corner: 0, paintFirst: "fill", activeOn: "down", stateProperties: "top left width height scaleX scaleY flipX flipY originX originY transformMatrix stroke strokeWidth strokeDashArray strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit angle opacity fill globalCompositeOperation shadow visible backgroundColor skewX skewY fillRule paintFirst clipPath strokeUniform".split(" "), cacheProperties: "fill stroke strokeWidth strokeDashArray width height paintFirst strokeUniform strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit backgroundColor clipPath".split(" "), colorProperties: "fill stroke backgroundColor".split(" "), clipPath: void 0, inverted: !1, absolutePositioned: !1, initialize: function(a) {
      a && this.setOptions(a);
    }, _createCacheCanvas: function() {
      this._cacheProperties = {}, this._cacheCanvas = s.util.createCanvasElement(), this._cacheContext = this._cacheCanvas.getContext("2d"), this._updateCacheCanvas(), this.dirty = !0;
    }, _limitCacheSize: function(a) {
      var l = s.perfLimitSizeTotal, f = a.width, m = a.height, v = s.maxCacheSideLimit, x = s.minCacheSideLimit;
      if (f <= v && m <= v && f * m <= l)
        return f < x && (a.width = x), m < x && (a.height = x), a;
      var U = f / m, F = s.util.limitDimsByArea(U, l), S = s.util.capValue, H = S(x, F.x, v), D = S(x, F.y, v);
      return f > H && (a.zoomX /= f / H, a.width = H, a.capped = !0), m > D && (a.zoomY /= m / D, a.height = D, a.capped = !0), a;
    }, _getCacheCanvasDimensions: function() {
      var a = this.getTotalObjectScaling(), l = this._getTransformedDimensions(0, 0), f = l.x * a.scaleX / this.scaleX, m = l.y * a.scaleY / this.scaleY;
      return { width: f + 2, height: m + 2, zoomX: a.scaleX, zoomY: a.scaleY, x: f, y: m };
    }, _updateCacheCanvas: function() {
      var a = this.canvas;
      if (this.noScaleCache && a && a._currentTransform) {
        var l = a._currentTransform.target, f = a._currentTransform.action;
        if (this === l && f.slice && f.slice(0, 5) === "scale")
          return !1;
      }
      var m, v, x = this._cacheCanvas, U = this._limitCacheSize(this._getCacheCanvasDimensions()), F = s.minCacheSideLimit, S = U.width, H = U.height, D = U.zoomX, R = U.zoomY, W = S !== this.cacheWidth || H !== this.cacheHeight, V = this.zoomX !== D || this.zoomY !== R, _ = W || V, k = 0, M = 0, N = !1;
      if (W) {
        var X = this._cacheCanvas.width, L = this._cacheCanvas.height, I = S > X || H > L;
        N = I || (S < 0.9 * X || H < 0.9 * L) && X > F && L > F, I && !U.capped && (S > F || H > F) && (k = 0.1 * S, M = 0.1 * H);
      }
      return this instanceof s.Text && this.path && (_ = !0, N = !0, k += this.getHeightOfLine(0) * this.zoomX, M += this.getHeightOfLine(0) * this.zoomY), !!_ && (N ? (x.width = Math.ceil(S + k), x.height = Math.ceil(H + M)) : (this._cacheContext.setTransform(1, 0, 0, 1, 0, 0), this._cacheContext.clearRect(0, 0, x.width, x.height)), m = U.x / 2, v = U.y / 2, this.cacheTranslationX = Math.round(x.width / 2 - m) + m, this.cacheTranslationY = Math.round(x.height / 2 - v) + v, this.cacheWidth = S, this.cacheHeight = H, this._cacheContext.translate(this.cacheTranslationX, this.cacheTranslationY), this._cacheContext.scale(D, R), this.zoomX = D, this.zoomY = R, !0);
    }, setOptions: function(a) {
      this._setOptions(a), this._initGradient(a.fill, "fill"), this._initGradient(a.stroke, "stroke"), this._initPattern(a.fill, "fill"), this._initPattern(a.stroke, "stroke");
    }, transform: function(a) {
      var l = this.group && !this.group._transformDone || this.group && this.canvas && a === this.canvas.contextTop, f = this.calcTransformMatrix(!l);
      a.transform(f[0], f[1], f[2], f[3], f[4], f[5]);
    }, toObject: function(a) {
      var l = s.Object.NUM_FRACTION_DIGITS, f = { type: this.type, version: s.version, originX: this.originX, originY: this.originY, left: A(this.left, l), top: A(this.top, l), width: A(this.width, l), height: A(this.height, l), fill: this.fill && this.fill.toObject ? this.fill.toObject() : this.fill, stroke: this.stroke && this.stroke.toObject ? this.stroke.toObject() : this.stroke, strokeWidth: A(this.strokeWidth, l), strokeDashArray: this.strokeDashArray ? this.strokeDashArray.concat() : this.strokeDashArray, strokeLineCap: this.strokeLineCap, strokeDashOffset: this.strokeDashOffset, strokeLineJoin: this.strokeLineJoin, strokeUniform: this.strokeUniform, strokeMiterLimit: A(this.strokeMiterLimit, l), scaleX: A(this.scaleX, l), scaleY: A(this.scaleY, l), angle: A(this.angle, l), flipX: this.flipX, flipY: this.flipY, opacity: A(this.opacity, l), shadow: this.shadow && this.shadow.toObject ? this.shadow.toObject() : this.shadow, visible: this.visible, backgroundColor: this.backgroundColor, fillRule: this.fillRule, paintFirst: this.paintFirst, globalCompositeOperation: this.globalCompositeOperation, skewX: A(this.skewX, l), skewY: A(this.skewY, l) };
      return this.clipPath && !this.clipPath.excludeFromExport && (f.clipPath = this.clipPath.toObject(a), f.clipPath.inverted = this.clipPath.inverted, f.clipPath.absolutePositioned = this.clipPath.absolutePositioned), s.util.populateWithProperties(this, f, a), this.includeDefaultValues || (f = this._removeDefaultValues(f)), f;
    }, toDatalessObject: function(a) {
      return this.toObject(a);
    }, _removeDefaultValues: function(a) {
      var l = s.util.getKlass(a.type).prototype;
      return l.stateProperties.forEach(function(f) {
        f !== "left" && f !== "top" && (a[f] === l[f] && delete a[f], Array.isArray(a[f]) && Array.isArray(l[f]) && a[f].length === 0 && l[f].length === 0 && delete a[f]);
      }), a;
    }, toString: function() {
      return "#<fabric." + i(this.type) + ">";
    }, getObjectScaling: function() {
      if (!this.group)
        return { scaleX: this.scaleX, scaleY: this.scaleY };
      var a = s.util.qrDecompose(this.calcTransformMatrix());
      return { scaleX: Math.abs(a.scaleX), scaleY: Math.abs(a.scaleY) };
    }, getTotalObjectScaling: function() {
      var a = this.getObjectScaling(), l = a.scaleX, f = a.scaleY;
      if (this.canvas) {
        var m = this.canvas.getZoom(), v = this.canvas.getRetinaScaling();
        l *= m * v, f *= m * v;
      }
      return { scaleX: l, scaleY: f };
    }, getObjectOpacity: function() {
      var a = this.opacity;
      return this.group && (a *= this.group.getObjectOpacity()), a;
    }, _set: function(a, l) {
      var f = a === "scaleX" || a === "scaleY", m = this[a] !== l, v = !1;
      return f && (l = this._constrainScale(l)), a === "scaleX" && l < 0 ? (this.flipX = !this.flipX, l *= -1) : a === "scaleY" && l < 0 ? (this.flipY = !this.flipY, l *= -1) : a !== "shadow" || !l || l instanceof s.Shadow ? a === "dirty" && this.group && this.group.set("dirty", l) : l = new s.Shadow(l), this[a] = l, m && (v = this.group && this.group.isOnACache(), this.cacheProperties.indexOf(a) > -1 ? (this.dirty = !0, v && this.group.set("dirty", !0)) : v && this.stateProperties.indexOf(a) > -1 && this.group.set("dirty", !0)), this;
    }, setOnGroup: function() {
    }, getViewportTransform: function() {
      return this.canvas && this.canvas.viewportTransform ? this.canvas.viewportTransform : s.iMatrix.concat();
    }, isNotVisible: function() {
      return this.opacity === 0 || !this.width && !this.height && this.strokeWidth === 0 || !this.visible;
    }, render: function(a) {
      this.isNotVisible() || this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (a.save(), this._setupCompositeOperation(a), this.drawSelectionBackground(a), this.transform(a), this._setOpacity(a), this._setShadow(a, this), this.shouldCache() ? (this.renderCache(), this.drawCacheOnCanvas(a)) : (this._removeCacheCanvas(), this.dirty = !1, this.drawObject(a), this.objectCaching && this.statefullCache && this.saveState({ propertySet: "cacheProperties" })), a.restore());
    }, renderCache: function(a) {
      a = a || {}, this._cacheCanvas && this._cacheContext || this._createCacheCanvas(), this.isCacheDirty() && (this.statefullCache && this.saveState({ propertySet: "cacheProperties" }), this.drawObject(this._cacheContext, a.forClipping), this.dirty = !1);
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
    }, drawClipPathOnCache: function(a, l) {
      if (a.save(), l.inverted ? a.globalCompositeOperation = "destination-out" : a.globalCompositeOperation = "destination-in", l.absolutePositioned) {
        var f = s.util.invertTransform(this.calcTransformMatrix());
        a.transform(f[0], f[1], f[2], f[3], f[4], f[5]);
      }
      l.transform(a), a.scale(1 / l.zoomX, 1 / l.zoomY), a.drawImage(l._cacheCanvas, -l.cacheTranslationX, -l.cacheTranslationY), a.restore();
    }, drawObject: function(a, l) {
      var f = this.fill, m = this.stroke;
      l ? (this.fill = "black", this.stroke = "", this._setClippingProperties(a)) : this._renderBackground(a), this._render(a), this._drawClipPath(a, this.clipPath), this.fill = f, this.stroke = m;
    }, _drawClipPath: function(a, l) {
      l && (l.canvas = this.canvas, l.shouldCache(), l._transformDone = !0, l.renderCache({ forClipping: !0 }), this.drawClipPathOnCache(a, l));
    }, drawCacheOnCanvas: function(a) {
      a.scale(1 / this.zoomX, 1 / this.zoomY), a.drawImage(this._cacheCanvas, -this.cacheTranslationX, -this.cacheTranslationY);
    }, isCacheDirty: function(a) {
      if (this.isNotVisible())
        return !1;
      if (this._cacheCanvas && this._cacheContext && !a && this._updateCacheCanvas())
        return !0;
      if (this.dirty || this.clipPath && this.clipPath.absolutePositioned || this.statefullCache && this.hasStateChanged("cacheProperties")) {
        if (this._cacheCanvas && this._cacheContext && !a) {
          var l = this.cacheWidth / this.zoomX, f = this.cacheHeight / this.zoomY;
          this._cacheContext.clearRect(-l / 2, -f / 2, l, f);
        }
        return !0;
      }
      return !1;
    }, _renderBackground: function(a) {
      if (this.backgroundColor) {
        var l = this._getNonTransformedDimensions();
        a.fillStyle = this.backgroundColor, a.fillRect(-l.x / 2, -l.y / 2, l.x, l.y), this._removeShadow(a);
      }
    }, _setOpacity: function(a) {
      this.group && !this.group._transformDone ? a.globalAlpha = this.getObjectOpacity() : a.globalAlpha *= this.opacity;
    }, _setStrokeStyles: function(a, l) {
      var f = l.stroke;
      f && (a.lineWidth = l.strokeWidth, a.lineCap = l.strokeLineCap, a.lineDashOffset = l.strokeDashOffset, a.lineJoin = l.strokeLineJoin, a.miterLimit = l.strokeMiterLimit, f.toLive ? f.gradientUnits === "percentage" || f.gradientTransform || f.patternTransform ? this._applyPatternForTransformedGradient(a, f) : (a.strokeStyle = f.toLive(a, this), this._applyPatternGradientTransform(a, f)) : a.strokeStyle = l.stroke);
    }, _setFillStyles: function(a, l) {
      var f = l.fill;
      f && (f.toLive ? (a.fillStyle = f.toLive(a, this), this._applyPatternGradientTransform(a, l.fill)) : a.fillStyle = f);
    }, _setClippingProperties: function(a) {
      a.globalAlpha = 1, a.strokeStyle = "transparent", a.fillStyle = "#000000";
    }, _setLineDash: function(a, l) {
      l && l.length !== 0 && (1 & l.length && l.push.apply(l, l), a.setLineDash(l));
    }, _renderControls: function(a, l) {
      var f, m, v, x = this.getViewportTransform(), U = this.calcTransformMatrix();
      m = (l = l || {}).hasBorders !== void 0 ? l.hasBorders : this.hasBorders, v = l.hasControls !== void 0 ? l.hasControls : this.hasControls, U = s.util.multiplyTransformMatrices(x, U), f = s.util.qrDecompose(U), a.save(), a.translate(f.translateX, f.translateY), a.lineWidth = 1 * this.borderScaleFactor, this.group || (a.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1), this.flipX && (f.angle -= 180), a.rotate(n(this.group ? f.angle : this.angle)), l.forActiveSelection || this.group ? m && this.drawBordersInGroup(a, f, l) : m && this.drawBorders(a, l), v && this.drawControls(a, l), a.restore();
    }, _setShadow: function(a) {
      if (this.shadow) {
        var l, f = this.shadow, m = this.canvas, v = m && m.viewportTransform[0] || 1, x = m && m.viewportTransform[3] || 1;
        l = f.nonScaling ? { scaleX: 1, scaleY: 1 } : this.getObjectScaling(), m && m._isRetinaScaling() && (v *= s.devicePixelRatio, x *= s.devicePixelRatio), a.shadowColor = f.color, a.shadowBlur = f.blur * s.browserShadowBlurConstant * (v + x) * (l.scaleX + l.scaleY) / 4, a.shadowOffsetX = f.offsetX * v * l.scaleX, a.shadowOffsetY = f.offsetY * x * l.scaleY;
      }
    }, _removeShadow: function(a) {
      this.shadow && (a.shadowColor = "", a.shadowBlur = a.shadowOffsetX = a.shadowOffsetY = 0);
    }, _applyPatternGradientTransform: function(a, l) {
      if (!l || !l.toLive)
        return { offsetX: 0, offsetY: 0 };
      var f = l.gradientTransform || l.patternTransform, m = -this.width / 2 + l.offsetX || 0, v = -this.height / 2 + l.offsetY || 0;
      return l.gradientUnits === "percentage" ? a.transform(this.width, 0, 0, this.height, m, v) : a.transform(1, 0, 0, 1, m, v), f && a.transform(f[0], f[1], f[2], f[3], f[4], f[5]), { offsetX: m, offsetY: v };
    }, _renderPaintInOrder: function(a) {
      this.paintFirst === "stroke" ? (this._renderStroke(a), this._renderFill(a)) : (this._renderFill(a), this._renderStroke(a));
    }, _render: function() {
    }, _renderFill: function(a) {
      this.fill && (a.save(), this._setFillStyles(a, this), this.fillRule === "evenodd" ? a.fill("evenodd") : a.fill(), a.restore());
    }, _renderStroke: function(a) {
      if (this.stroke && this.strokeWidth !== 0) {
        if (this.shadow && !this.shadow.affectStroke && this._removeShadow(a), a.save(), this.strokeUniform && this.group) {
          var l = this.getObjectScaling();
          a.scale(1 / l.scaleX, 1 / l.scaleY);
        } else
          this.strokeUniform && a.scale(1 / this.scaleX, 1 / this.scaleY);
        this._setLineDash(a, this.strokeDashArray), this._setStrokeStyles(a, this), a.stroke(), a.restore();
      }
    }, _applyPatternForTransformedGradient: function(a, l) {
      var f, m = this._limitCacheSize(this._getCacheCanvasDimensions()), v = s.util.createCanvasElement(), x = this.canvas.getRetinaScaling(), U = m.x / this.scaleX / x, F = m.y / this.scaleY / x;
      v.width = U, v.height = F, (f = v.getContext("2d")).beginPath(), f.moveTo(0, 0), f.lineTo(U, 0), f.lineTo(U, F), f.lineTo(0, F), f.closePath(), f.translate(U / 2, F / 2), f.scale(m.zoomX / this.scaleX / x, m.zoomY / this.scaleY / x), this._applyPatternGradientTransform(f, l), f.fillStyle = l.toLive(a), f.fill(), a.translate(-this.width / 2 - this.strokeWidth / 2, -this.height / 2 - this.strokeWidth / 2), a.scale(x * this.scaleX / m.zoomX, x * this.scaleY / m.zoomY), a.strokeStyle = f.createPattern(v, "no-repeat");
    }, _findCenterFromElement: function() {
      return { x: this.left + this.width / 2, y: this.top + this.height / 2 };
    }, _assignTransformMatrixProps: function() {
      if (this.transformMatrix) {
        var a = s.util.qrDecompose(this.transformMatrix);
        this.flipX = !1, this.flipY = !1, this.set("scaleX", a.scaleX), this.set("scaleY", a.scaleY), this.angle = a.angle, this.skewX = a.skewX, this.skewY = 0;
      }
    }, _removeTransformMatrix: function(a) {
      var l = this._findCenterFromElement();
      this.transformMatrix && (this._assignTransformMatrixProps(), l = s.util.transformPoint(l, this.transformMatrix)), this.transformMatrix = null, a && (this.scaleX *= a.scaleX, this.scaleY *= a.scaleY, this.cropX = a.cropX, this.cropY = a.cropY, l.x += a.offsetLeft, l.y += a.offsetTop, this.width = a.width, this.height = a.height), this.setPositionByOrigin(l, "center", "center");
    }, clone: function(a, l) {
      var f = this.toObject(l);
      this.constructor.fromObject ? this.constructor.fromObject(f, a) : s.Object._fromObject("Object", f, a);
    }, cloneAsImage: function(a, l) {
      var f = this.toCanvasElement(l);
      return a && a(new s.Image(f)), this;
    }, toCanvasElement: function(a) {
      a || (a = {});
      var l = s.util, f = l.saveObjectTransform(this), m = this.group, v = this.shadow, x = Math.abs, U = (a.multiplier || 1) * (a.enableRetinaScaling ? s.devicePixelRatio : 1);
      delete this.group, a.withoutTransform && l.resetObjectTransform(this), a.withoutShadow && (this.shadow = null);
      var F, S, H, D, R = s.util.createCanvasElement(), W = this.getBoundingRect(!0, !0), V = this.shadow, _ = { x: 0, y: 0 };
      V && (S = V.blur, F = V.nonScaling ? { scaleX: 1, scaleY: 1 } : this.getObjectScaling(), _.x = 2 * Math.round(x(V.offsetX) + S) * x(F.scaleX), _.y = 2 * Math.round(x(V.offsetY) + S) * x(F.scaleY)), H = W.width + _.x, D = W.height + _.y, R.width = Math.ceil(H), R.height = Math.ceil(D);
      var k = new s.StaticCanvas(R, { enableRetinaScaling: !1, renderOnAddRemove: !1, skipOffscreen: !1 });
      a.format === "jpeg" && (k.backgroundColor = "#fff"), this.setPositionByOrigin(new s.Point(k.width / 2, k.height / 2), "center", "center");
      var M = this.canvas;
      k.add(this);
      var N = k.toCanvasElement(U || 1, a);
      return this.shadow = v, this.set("canvas", M), m && (this.group = m), this.set(f).setCoords(), k._objects = [], k.dispose(), k = null, N;
    }, toDataURL: function(a) {
      return a || (a = {}), s.util.toDataURL(this.toCanvasElement(a), a.format || "png", a.quality || 1);
    }, isType: function(a) {
      return arguments.length > 1 ? Array.from(arguments).includes(this.type) : this.type === a;
    }, complexity: function() {
      return 1;
    }, toJSON: function(a) {
      return this.toObject(a);
    }, rotate: function(a) {
      var l = (this.originX !== "center" || this.originY !== "center") && this.centeredRotation;
      return l && this._setOriginToCenter(), this.set("angle", a), l && this._resetOrigin(), this;
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
    }, getLocalPointer: function(a, l) {
      l = l || this.canvas.getPointer(a);
      var f = new s.Point(l.x, l.y), m = this._getLeftTopCoords();
      return this.angle && (f = s.util.rotatePoint(f, m, n(-this.angle))), { x: f.x - m.x, y: f.y - m.y };
    }, _setupCompositeOperation: function(a) {
      this.globalCompositeOperation && (a.globalCompositeOperation = this.globalCompositeOperation);
    }, dispose: function() {
      s.runningAnimations && s.runningAnimations.cancelByTarget(this);
    } }), s.util.createAccessors && s.util.createAccessors(s.Object), o(s.Object.prototype, s.Observable), s.Object.NUM_FRACTION_DIGITS = 2, s.Object.ENLIVEN_PROPS = ["clipPath"], s.Object._fromObject = function(a, l, f, m) {
      var v = s[a];
      l = d(l, !0), s.util.enlivenPatterns([l.fill, l.stroke], function(x) {
        x[0] !== void 0 && (l.fill = x[0]), x[1] !== void 0 && (l.stroke = x[1]), s.util.enlivenObjectEnlivables(l, l, function() {
          var U = m ? new v(l[m], l) : new v(l);
          f && f(U);
        });
      });
    }, s.Object.__uid = 0);
  }(e), T = B.util.degreesToRadians, P = { left: -0.5, center: 0, right: 0.5 }, O = { top: -0.5, center: 0, bottom: 0.5 }, B.util.object.extend(B.Object.prototype, { translateToGivenOrigin: function(u, s, o, d, A) {
    var i, n, h, a = u.x, l = u.y;
    return typeof s == "string" ? s = P[s] : s -= 0.5, typeof d == "string" ? d = P[d] : d -= 0.5, typeof o == "string" ? o = O[o] : o -= 0.5, typeof A == "string" ? A = O[A] : A -= 0.5, n = A - o, ((i = d - s) || n) && (h = this._getTransformedDimensions(), a = u.x + i * h.x, l = u.y + n * h.y), new B.Point(a, l);
  }, translateToCenterPoint: function(u, s, o) {
    var d = this.translateToGivenOrigin(u, s, o, "center", "center");
    return this.angle ? B.util.rotatePoint(d, u, T(this.angle)) : d;
  }, translateToOriginPoint: function(u, s, o) {
    var d = this.translateToGivenOrigin(u, "center", "center", s, o);
    return this.angle ? B.util.rotatePoint(d, u, T(this.angle)) : d;
  }, getCenterPoint: function() {
    var u = new B.Point(this.left, this.top);
    return this.translateToCenterPoint(u, this.originX, this.originY);
  }, getPointByOrigin: function(u, s) {
    var o = this.getCenterPoint();
    return this.translateToOriginPoint(o, u, s);
  }, toLocalPoint: function(u, s, o) {
    var d, A, i = this.getCenterPoint();
    return d = s !== void 0 && o !== void 0 ? this.translateToGivenOrigin(i, "center", "center", s, o) : new B.Point(this.left, this.top), A = new B.Point(u.x, u.y), this.angle && (A = B.util.rotatePoint(A, i, -T(this.angle))), A.subtractEquals(d);
  }, setPositionByOrigin: function(u, s, o) {
    var d = this.translateToCenterPoint(u, s, o), A = this.translateToOriginPoint(d, this.originX, this.originY);
    this.set("left", A.x), this.set("top", A.y);
  }, adjustPosition: function(u) {
    var s, o, d = T(this.angle), A = this.getScaledWidth(), i = B.util.cos(d) * A, n = B.util.sin(d) * A;
    s = typeof this.originX == "string" ? P[this.originX] : this.originX - 0.5, o = typeof u == "string" ? P[u] : u - 0.5, this.left += i * (o - s), this.top += n * (o - s), this.setCoords(), this.originX = u;
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
      var a = this.getCoords(n, h);
      return B.Intersection.intersectPolygonRectangle(a, A, i).status === "Intersection";
    }, intersectsWithObject: function(A, i, n) {
      return B.Intersection.intersectPolygonPolygon(this.getCoords(i, n), A.getCoords(i, n)).status === "Intersection" || A.isContainedWithinObject(this, i, n) || this.isContainedWithinObject(A, i, n);
    }, isContainedWithinObject: function(A, i, n) {
      for (var h = this.getCoords(i, n), a = i ? A.aCoords : A.lineCoords, l = 0, f = A._getImageLines(a); l < 4; l++)
        if (!A.containsPoint(h[l], f))
          return !1;
      return !0;
    }, isContainedWithinRect: function(A, i, n, h) {
      var a = this.getBoundingRect(n, h);
      return a.left >= A.x && a.left + a.width <= i.x && a.top >= A.y && a.top + a.height <= i.y;
    }, containsPoint: function(A, i, n, h) {
      var a = this._getCoords(n, h), l = (i = i || this._getImageLines(a), this._findCrossPoints(A, i));
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
      var n, h, a, l = 0;
      for (var f in i)
        if (!((a = i[f]).o.y < A.y && a.d.y < A.y || a.o.y >= A.y && a.d.y >= A.y || (a.o.x === a.d.x && a.o.x >= A.x ? h = a.o.x : (n = (a.d.y - a.o.y) / (a.d.x - a.o.x), h = -(A.y - 0 * A.x - (a.o.y - n * a.o.x)) / (0 - n)), h >= A.x && (l += 1), l !== 2)))
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
      var A = this.getViewportTransform(), i = this.padding, n = s(this.angle), h = u.cos(n) * i, a = u.sin(n) * i, l = h + a, f = h - a, m = this.calcACoords(), v = { tl: d(m.tl, A), tr: d(m.tr, A), bl: d(m.bl, A), br: d(m.br, A) };
      return i && (v.tl.x -= f, v.tl.y -= l, v.tr.x += l, v.tr.y -= f, v.bl.x -= l, v.bl.y += f, v.br.x += f, v.br.y += l), v;
    }, calcOCoords: function() {
      var A = this._calcRotateMatrix(), i = this._calcTranslateMatrix(), n = this.getViewportTransform(), h = o(n, i), a = o(h, A), l = (a = o(a, [1 / n[0], 0, 0, 1 / n[3], 0, 0]), this._calculateCurrentDimensions()), f = {};
      return this.forEachControl(function(m, v, x) {
        f[v] = m.positionHandler(l, a, x);
      }), f;
    }, calcACoords: function() {
      var A = this._calcRotateMatrix(), i = this._calcTranslateMatrix(), n = o(i, A), h = this._getTransformedDimensions(), a = h.x / 2, l = h.y / 2;
      return { tl: d({ x: -a, y: -l }, n), tr: d({ x: a, y: -l }, n), bl: d({ x: -a, y: l }, n), br: d({ x: a, y: l }, n) };
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
      var n, h, a, l = A === 0 && i === 0;
      if (this.strokeUniform ? (h = this.width, a = this.height) : (h = (n = this._getNonTransformedDimensions()).x, a = n.y), l)
        return this._finalizeDimensions(h * this.scaleX, a * this.scaleY);
      var f = u.sizeAfterTransform(h, a, { scaleX: this.scaleX, scaleY: this.scaleY, skewX: A, skewY: i });
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
      var d = this.fillRule ? this.fillRule : "nonzero", A = this.strokeWidth ? this.strokeWidth : "0", i = this.strokeDashArray ? this.strokeDashArray.join(" ") : "none", n = this.strokeDashOffset ? this.strokeDashOffset : "0", h = this.strokeLineCap ? this.strokeLineCap : "butt", a = this.strokeLineJoin ? this.strokeLineJoin : "miter", l = this.strokeMiterLimit ? this.strokeMiterLimit : "4", f = this.opacity !== void 0 ? this.opacity : "1", m = this.visible ? "" : " visibility: hidden;", v = o ? "" : this.getSvgFilter(), x = u("fill", this.fill);
      return [u("stroke", this.stroke), "stroke-width: ", A, "; ", "stroke-dasharray: ", i, "; ", "stroke-linecap: ", h, "; ", "stroke-dashoffset: ", n, "; ", "stroke-linejoin: ", a, "; ", "stroke-miterlimit: ", l, "; ", x, "fill-rule: ", d, "; ", "opacity: ", f, ";", v, m].join("");
    }, getSvgSpanStyles: function(o, d) {
      var A = "; ", i = o.fontFamily ? "font-family: " + (o.fontFamily.indexOf("'") === -1 && o.fontFamily.indexOf('"') === -1 ? "'" + o.fontFamily + "'" : o.fontFamily) + A : "", n = o.strokeWidth ? "stroke-width: " + o.strokeWidth + A : "", h = (i = i, o.fontSize ? "font-size: " + o.fontSize + "px" + A : ""), a = o.fontStyle ? "font-style: " + o.fontStyle + A : "", l = o.fontWeight ? "font-weight: " + o.fontWeight + A : "", f = o.fill ? u("fill", o.fill) : "", m = o.stroke ? u("stroke", o.stroke) : "", v = this.getSvgTextDecoration(o);
      return v && (v = "text-decoration: " + v + A), [m, n, i, h, a, l, v, f, o.deltaY ? "baseline-shift: " + -o.deltaY + "; " : "", d ? "white-space: pre; " : ""].join("");
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
      var A, i, n = (d = d || {}).noStyle, h = d.reviver, a = n ? "" : 'style="' + this.getSvgStyles() + '" ', l = d.withShadow ? 'style="' + this.getSvgFilter() + '" ' : "", f = this.clipPath, m = this.strokeUniform ? 'vector-effect="non-scaling-stroke" ' : "", v = f && f.absolutePositioned, x = this.stroke, U = this.fill, F = this.shadow, S = [], H = o.indexOf("COMMON_PARTS"), D = d.additionalTransform;
      return f && (f.clipPathId = "CLIPPATH_" + B.Object.__uid++, i = '<clipPath id="' + f.clipPathId + `" >
` + f.toClipPathSVG(h) + `</clipPath>
`), v && S.push("<g ", l, this.getSvgCommons(), ` >
`), S.push("<g ", this.getSvgTransform(!1), v ? "" : l + this.getSvgCommons(), ` >
`), A = [a, m, n ? "" : this.addPaintOrder(), " ", D ? 'transform="' + D + '" ' : ""].join(""), o[H] = A, U && U.toLive && S.push(U.toSVG(this)), x && x.toLive && S.push(x.toSVG(this)), F && S.push(F.toSVG(this)), f && S.push(i), S.push(o.join("")), S.push(`</g>
`), v && S.push(`</g>
`), h ? h(S.join("")) : S.join("");
    }, addPaintOrder: function() {
      return this.paintFirst !== "fill" ? ' paint-order="' + this.paintFirst + '" ' : "";
    } });
  }(), function() {
    var u = B.util.object.extend, s = "stateProperties";
    function o(A, i, n) {
      var h = {};
      n.forEach(function(a) {
        h[a] = A[a];
      }), u(A[i], h, !0);
    }
    function d(A, i, n) {
      if (A === i)
        return !0;
      if (Array.isArray(A)) {
        if (!Array.isArray(i) || A.length !== i.length)
          return !1;
        for (var h = 0, a = A.length; h < a; h++)
          if (!d(A[h], i[h]))
            return !1;
        return !0;
      }
      if (A && typeof A == "object") {
        var l, f = Object.keys(A);
        if (!i || typeof i != "object" || !n && f.length !== Object.keys(i).length)
          return !1;
        for (h = 0, a = f.length; h < a; h++)
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
      var d, A, i, n = s.x, h = s.y, a = Object.keys(this.oCoords), l = a.length - 1;
      for (this.__corner = 0; l >= 0; l--)
        if (i = a[l], this.isControlVisible(i) && (A = this._getImageLines(o ? this.oCoords[i].touchCorner : this.oCoords[i].corner), (d = this._findCrossPoints({ x: n, y: h }, A)) !== 0 && d % 2 == 1))
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
      var d = this._calculateCurrentDimensions(), A = this.borderScaleFactor, i = d.x + A, n = d.y + A, h = o.hasControls !== void 0 ? o.hasControls : this.hasControls, a = !1;
      return s.save(), s.strokeStyle = o.borderColor || this.borderColor, this._setLineDash(s, o.borderDashArray || this.borderDashArray), s.strokeRect(-i / 2, -n / 2, i, n), h && (s.beginPath(), this.forEachControl(function(l, f, m) {
        l.withConnection && l.getVisibility(m, f) && (a = !0, s.moveTo(l.x * i, l.y * n), s.lineTo(l.x * i + l.offsetX, l.y * n + l.offsetY));
      }), a && s.stroke()), s.restore(), this;
    }, drawBordersInGroup: function(s, o, d) {
      d = d || {};
      var A = B.util.sizeAfterTransform(this.width, this.height, o), i = this.strokeWidth, n = this.strokeUniform, h = this.borderScaleFactor, a = A.x + i * (n ? this.canvas.getZoom() : o.scaleX) + h, l = A.y + i * (n ? this.canvas.getZoom() : o.scaleY) + h;
      return s.save(), this._setLineDash(s, d.borderDashArray || this.borderDashArray), s.strokeStyle = d.borderColor || this.borderColor, s.strokeRect(-a / 2, -l / 2, a, l), s.restore(), this;
    }, drawControls: function(s, o) {
      o = o || {}, s.save();
      var d, A, i = this.canvas.getRetinaScaling();
      return s.setTransform(i, 0, 0, i, 0, 0), s.strokeStyle = s.fillStyle = o.cornerColor || this.cornerColor, this.transparentCorners || (s.strokeStyle = o.cornerStrokeColor || this.cornerStrokeColor), this._setLineDash(s, o.cornerDashArray || this.cornerDashArray), this.setCoords(), this.group && (d = this.group.calcTransformMatrix()), this.forEachControl(function(n, h, a) {
        A = a.oCoords[h], n.getVisibility(a, h) && (d && (A = B.util.transformPoint(A, d)), n.render(s, A.x, A.y, o, a));
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
    var a = { target: this, startValue: o.from, endValue: s, byValue: o.by, easing: o.easing, duration: o.duration, abort: o.abort && function(l, f, m) {
      return o.abort.call(i, l, f, m);
    }, onChange: function(l, f, m) {
      A ? i[A[0]][A[1]] = l : i.set(u, l), d || o.onChange && o.onChange(l, f, m);
    }, onComplete: function(l, f, m) {
      d || (i.setCoords(), o.onComplete && o.onComplete(l, f, m));
    } };
    return n ? B.util.animateColor(a.startValue, a.endValue, a.duration, a) : B.util.animate(a);
  } }), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.util.object.extend, d = s.util.object.clone, A = { x1: 1, x2: 1, y1: 1, y2: 1 };
    function i(n, h) {
      var a = n.origin, l = n.axis1, f = n.axis2, m = n.dimension, v = h.nearest, x = h.center, U = h.farthest;
      return function() {
        switch (this.get(a)) {
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
      var a = n.strokeStyle;
      n.strokeStyle = this.stroke || n.fillStyle, this.stroke && this._renderStroke(n), n.strokeStyle = a;
    }, _findCenterFromElement: function() {
      return { x: (this.x1 + this.x2) / 2, y: (this.y1 + this.y2) / 2 };
    }, toObject: function(n) {
      return o(this.callSuper("toObject", n), this.calcLinePoints());
    }, _getNonTransformedDimensions: function() {
      var n = this.callSuper("_getNonTransformedDimensions");
      return this.strokeLineCap === "butt" && (this.width === 0 && (n.y -= this.strokeWidth), this.height === 0 && (n.x -= this.strokeWidth)), n;
    }, calcLinePoints: function() {
      var n = this.x1 <= this.x2 ? -1 : 1, h = this.y1 <= this.y2 ? -1 : 1, a = n * this.width * 0.5, l = h * this.height * 0.5;
      return { x1: a, x2: n * this.width * -0.5, y1: l, y2: h * this.height * -0.5 };
    }, _toSVG: function() {
      var n = this.calcLinePoints();
      return ["<line ", "COMMON_PARTS", 'x1="', n.x1, '" y1="', n.y1, '" x2="', n.x2, '" y2="', n.y2, `" />
`];
    } }), s.Line.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat("x1 y1 x2 y2".split(" ")), s.Line.fromElement = function(n, h, a) {
      a = a || {};
      var l = s.parseAttributes(n, s.Line.ATTRIBUTE_NAMES), f = [l.x1 || 0, l.y1 || 0, l.x2 || 0, l.y2 || 0];
      h(new s.Line(f, o(l, a)));
    }, s.Line.fromObject = function(n, h) {
      var a = d(n, !0);
      a.points = [n.x1, n.y1, n.x2, n.y2], s.Object._fromObject("Line", a, function(l) {
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
      var A = this.rx ? Math.min(this.rx, this.width / 2) : 0, i = this.ry ? Math.min(this.ry, this.height / 2) : 0, n = this.width, h = this.height, a = -this.width / 2, l = -this.height / 2, f = A !== 0 || i !== 0, m = 0.4477152502;
      d.beginPath(), d.moveTo(a + A, l), d.lineTo(a + n - A, l), f && d.bezierCurveTo(a + n - m * A, l, a + n, l + m * i, a + n, l + i), d.lineTo(a + n, l + h - i), f && d.bezierCurveTo(a + n, l + h - m * i, a + n - m * A, l + h, a + n - A, l + h), d.lineTo(a + A, l + h), f && d.bezierCurveTo(a + m * A, l + h, a, l + h - m * i, a, l + h - i), d.lineTo(a, l + i), f && d.bezierCurveTo(a, l + m * i, a + m * A, l, a + A, l), d.closePath(), this._renderPaintInOrder(d);
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
    s.Polyline ? s.warn("fabric.Polyline is already defined") : (s.Polyline = s.util.createClass(s.Object, { type: "polyline", points: null, exactBoundingBox: !1, cacheProperties: s.Object.prototype.cacheProperties.concat("points"), initialize: function(h, a) {
      a = a || {}, this.points = h || [], this.callSuper("initialize", a), this._setPositionDimensions(a);
    }, _projectStrokeOnPoints: function() {
      return n(this.points, this, !0);
    }, _setPositionDimensions: function(h) {
      var a, l = this._calcDimensions(h), f = this.exactBoundingBox ? this.strokeWidth : 0;
      this.width = l.width - f, this.height = l.height - f, h.fromSVG || (a = this.translateToGivenOrigin({ x: l.left - this.strokeWidth / 2 + f / 2, y: l.top - this.strokeWidth / 2 + f / 2 }, "left", "top", this.originX, this.originY)), h.left === void 0 && (this.left = h.fromSVG ? l.left : a.x), h.top === void 0 && (this.top = h.fromSVG ? l.top : a.y), this.pathOffset = { x: l.left + this.width / 2 + f / 2, y: l.top + this.height / 2 + f / 2 };
    }, _calcDimensions: function() {
      var h = this.exactBoundingBox ? this._projectStrokeOnPoints() : this.points, a = d(h, "x") || 0, l = d(h, "y") || 0;
      return { left: a, top: l, width: (A(h, "x") || 0) - a, height: (A(h, "y") || 0) - l };
    }, toObject: function(h) {
      return o(this.callSuper("toObject", h), { points: this.points.concat() });
    }, _toSVG: function() {
      for (var h = [], a = this.pathOffset.x, l = this.pathOffset.y, f = s.Object.NUM_FRACTION_DIGITS, m = 0, v = this.points.length; m < v; m++)
        h.push(i(this.points[m].x - a, f), ",", i(this.points[m].y - l, f), " ");
      return ["<" + this.type + " ", "COMMON_PARTS", 'points="', h.join(""), `" />
`];
    }, commonRender: function(h) {
      var a, l = this.points.length, f = this.pathOffset.x, m = this.pathOffset.y;
      if (!l || isNaN(this.points[l - 1].y))
        return !1;
      h.beginPath(), h.moveTo(this.points[0].x - f, this.points[0].y - m);
      for (var v = 0; v < l; v++)
        a = this.points[v], h.lineTo(a.x - f, a.y - m);
      return !0;
    }, _render: function(h) {
      this.commonRender(h) && this._renderPaintInOrder(h);
    }, complexity: function() {
      return this.get("points").length;
    } }), s.Polyline.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat(), s.Polyline.fromElementGenerator = function(h) {
      return function(a, l, f) {
        if (!a)
          return l(null);
        f || (f = {});
        var m = s.parsePointsAttribute(a.getAttribute("points")), v = s.parseAttributes(a, s[h].ATTRIBUTE_NAMES);
        v.fromSVG = !0, l(new s[h](m, o(v, f)));
      };
    }, s.Polyline.fromElement = s.Polyline.fromElementGenerator("Polyline"), s.Polyline.fromObject = function(h, a) {
      return s.Object._fromObject("Polyline", h, a, "points");
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
    s.Path ? s.warn("fabric.Path is already defined") : (s.Path = s.util.createClass(s.Object, { type: "path", path: null, cacheProperties: s.Object.prototype.cacheProperties.concat("path", "fillRule"), stateProperties: s.Object.prototype.stateProperties.concat("path"), initialize: function(h, a) {
      delete (a = i(a || {})).path, this.callSuper("initialize", a), this._setPath(h || [], a);
    }, _setPath: function(h, a) {
      this.path = s.util.makePathSimpler(Array.isArray(h) ? h : s.util.parsePath(h)), s.Polyline.prototype._setPositionDimensions.call(this, a || {});
    }, _renderPathCommands: function(h) {
      var a, l = 0, f = 0, m = 0, v = 0, x = 0, U = 0, F = -this.pathOffset.x, S = -this.pathOffset.y;
      h.beginPath();
      for (var H = 0, D = this.path.length; H < D; ++H)
        switch ((a = this.path[H])[0]) {
          case "L":
            m = a[1], v = a[2], h.lineTo(m + F, v + S);
            break;
          case "M":
            l = m = a[1], f = v = a[2], h.moveTo(m + F, v + S);
            break;
          case "C":
            m = a[5], v = a[6], x = a[3], U = a[4], h.bezierCurveTo(a[1] + F, a[2] + S, x + F, U + S, m + F, v + S);
            break;
          case "Q":
            h.quadraticCurveTo(a[1] + F, a[2] + S, a[3] + F, a[4] + S), m = a[3], v = a[4], x = a[1], U = a[2];
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
      return A(this.callSuper("toObject", h), { path: this.path.map(function(a) {
        return a.slice();
      }) });
    }, toDatalessObject: function(h) {
      var a = this.toObject(["sourcePath"].concat(h));
      return a.sourcePath && delete a.path, a;
    }, _toSVG: function() {
      return ["<path ", "COMMON_PARTS", 'd="', s.util.joinPath(this.path), '" stroke-linecap="round" ', `/>
`];
    }, _getOffsetTransform: function() {
      var h = s.Object.NUM_FRACTION_DIGITS;
      return " translate(" + n(-this.pathOffset.x, h) + ", " + n(-this.pathOffset.y, h) + ")";
    }, toClipPathSVG: function(h) {
      var a = this._getOffsetTransform();
      return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(), { reviver: h, additionalTransform: a });
    }, toSVG: function(h) {
      var a = this._getOffsetTransform();
      return this._createBaseSVGMarkup(this._toSVG(), { reviver: h, additionalTransform: a });
    }, complexity: function() {
      return this.path.length;
    }, _calcDimensions: function() {
      for (var h, a, l = [], f = [], m = 0, v = 0, x = 0, U = 0, F = 0, S = this.path.length; F < S; ++F) {
        switch ((h = this.path[F])[0]) {
          case "L":
            x = h[1], U = h[2], a = [];
            break;
          case "M":
            m = x = h[1], v = U = h[2], a = [];
            break;
          case "C":
            a = s.util.getBoundsOfCurve(x, U, h[1], h[2], h[3], h[4], h[5], h[6]), x = h[5], U = h[6];
            break;
          case "Q":
            a = s.util.getBoundsOfCurve(x, U, h[1], h[2], h[1], h[2], h[3], h[4]), x = h[3], U = h[4];
            break;
          case "z":
          case "Z":
            x = m, U = v;
        }
        a.forEach(function(R) {
          l.push(R.x), f.push(R.y);
        }), l.push(x), f.push(U);
      }
      var H = o(l) || 0, D = o(f) || 0;
      return { left: H, top: D, width: (d(l) || 0) - H, height: (d(f) || 0) - D };
    } }), s.Path.fromObject = function(h, a) {
      if (typeof h.sourcePath == "string") {
        var l = h.sourcePath;
        s.loadSVGFromURL(l, function(f) {
          var m = f[0];
          m.setOptions(h), h.clipPath ? s.util.enlivenObjects([h.clipPath], function(v) {
            m.clipPath = v[0], a && a(m);
          }) : a && a(m);
        });
      } else
        s.Object._fromObject("Path", h, a, "path");
    }, s.Path.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat(["d"]), s.Path.fromElement = function(h, a, l) {
      var f = s.parseAttributes(h, s.Path.ATTRIBUTE_NAMES);
      f.fromSVG = !0, a(new s.Path(f.d, A(f, l)));
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
        var a = i && i.centerPoint;
        i.originX !== void 0 && (this.originX = i.originX), i.originY !== void 0 && (this.originY = i.originY), a || this._calcBounds(), this._updateObjectsCoords(a), delete i.centerPoint, this.callSuper("initialize", i);
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
      var i = this.includeDefaultValues, n = this._objects.filter(function(a) {
        return !a.excludeFromExport;
      }).map(function(a) {
        var l = a.includeDefaultValues;
        a.includeDefaultValues = i;
        var f = a.toObject(A);
        return a.includeDefaultValues = l, f;
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
      var a = s.Object.prototype.toDatalessObject.call(this, A);
      return a.objects = i, a;
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
            var h = this.cacheWidth / this.zoomX, a = this.cacheHeight / this.zoomY;
            this._cacheContext.clearRect(-h / 2, -a / 2, h, a);
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
        return h.set(n), h.type = "activeSelection", i.remove(this), A.forEach(function(a) {
          a.group = h, a.dirty = !0, i.add(a);
        }), h.canvas = i, h._objects = A, i._activeObject = h, h.setCoords(), h;
      }
    }, ungroupOnCanvas: function() {
      return this._restoreObjectsState();
    }, setObjectsCoords: function() {
      return this.forEachObject(function(A) {
        A.setCoords(!0);
      }), this;
    }, _calcBounds: function(A) {
      for (var i, n, h, a, l = [], f = [], m = ["tr", "br", "bl", "tl"], v = 0, x = this._objects.length, U = m.length; v < x; ++v) {
        for (h = (i = this._objects[v]).calcACoords(), a = 0; a < U; a++)
          n = m[a], l.push(h[n].x), f.push(h[n].y);
        i.aCoords = h;
      }
      this._getBounds(l, f, A);
    }, _getBounds: function(A, i, n) {
      var h = new s.Point(o(A), o(i)), a = new s.Point(d(A), d(i)), l = h.y || 0, f = h.x || 0, m = a.x - h.x || 0, v = a.y - h.y || 0;
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
      delete h.objects, typeof n != "string" ? s.util.enlivenObjects(n, function(a) {
        s.util.enlivenObjectEnlivables(A, h, function() {
          i && i(new s.Group(a, h, !0));
        });
      }) : s.loadSVGFromURL(n, function(a) {
        var l = s.util.groupSVGElements(a, A, n), f = h.clipPath;
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
      var o, d = [], A = [], i = this._element, n = -this.width / 2, h = -this.height / 2, a = "", l = "";
      if (!i)
        return [];
      if (this.hasCrop()) {
        var f = B.Object.__uid++;
        d.push('<clipPath id="imageCrop_' + f + `">
`, '	<rect x="' + n + '" y="' + h + '" width="' + this.width + '" height="' + this.height + `" />
`, `</clipPath>
`), a = ' clip-path="url(#imageCrop_' + f + ')" ';
      }
      if (this.imageSmoothing || (l = '" image-rendering="optimizeSpeed'), A.push("	<image ", "COMMON_PARTS", 'xlink:href="', this.getSvgSrc(!0), '" x="', n - this.cropX, '" y="', h - this.cropY, '" width="', i.width || i.naturalWidth, '" height="', i.height || i.height, l, '"', a, `></image>
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
      var a = B.util.createCanvasElement(), l = this._filteredEl ? this.cacheKey + "_filtered" : this.cacheKey, f = h.width, m = h.height;
      a.width = f, a.height = m, this._element = a, this._lastScaleX = o.scaleX = i, this._lastScaleY = o.scaleY = n, B.filterBackend.applyFilters([o], h, f, m, this._element, l), this._filterScalingX = a.width / this._originalElement.width, this._filterScalingY = a.height / this._originalElement.height;
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
        var A = this._filterScalingX, i = this._filterScalingY, n = this.width, h = this.height, a = Math.min, l = Math.max, f = l(this.cropX, 0), m = l(this.cropY, 0), v = d.naturalWidth || d.width, x = d.naturalHeight || d.height, U = f * A, F = m * i, S = a(n * A, v - U), H = a(h * i, x - F), D = -n / 2, R = -h / 2, W = a(n, v / A - f), V = a(h, x / i - m);
        d && o.drawImage(d, U, F, S, H, D, R, W, V);
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
      var o, d = B.util.parsePreserveAspectRatioAttribute(this.preserveAspectRatio || ""), A = this._element.width, i = this._element.height, n = 1, h = 1, a = 0, l = 0, f = 0, m = 0, v = this.width, x = this.height, U = { width: v, height: x };
      return !d || d.alignX === "none" && d.alignY === "none" ? (n = v / A, h = x / i) : (d.meetOrSlice === "meet" && (o = (v - A * (n = h = B.util.findScaleToFit(this._element, U))) / 2, d.alignX === "Min" && (a = -o), d.alignX === "Max" && (a = o), o = (x - i * h) / 2, d.alignY === "Min" && (l = -o), d.alignY === "Max" && (l = o)), d.meetOrSlice === "slice" && (o = A - v / (n = h = B.util.findScaleToCover(this._element, U)), d.alignX === "Mid" && (f = o / 2), d.alignX === "Max" && (f = o), o = i - x / h, d.alignY === "Mid" && (m = o / 2), d.alignY === "Max" && (m = o), A = v / n, i = x / h)), { width: A, height: i, scaleX: n, scaleY: h, offsetLeft: a, offsetTop: l, cropX: f, cropY: m };
    } }), B.Image.CSS_CANVAS = "canvas-img", B.Image.prototype.getSvgSrc = B.Image.prototype.getSrc, B.Image.fromObject = function(o, d) {
      var A = B.util.object.clone(o);
      B.util.loadImage(A.src, function(i, n) {
        n ? d && d(null, !0) : B.Image.prototype._initFilters.call(A, A.filters, function(h) {
          A.filters = h || [], B.Image.prototype._initFilters.call(A, [A.resizeFilter], function(a) {
            A.resizeFilter = a[0], B.util.enlivenObjectEnlivables(A, A, function() {
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
        var a = B.util.createCanvasElement(), l = new ArrayBuffer(o * d * 4);
        if (B.forceGLPutImageData)
          return this.imageBuffer = l, void (this.copyGLTo2D = oA);
        var f, m, v = { imageBuffer: l, destinationWidth: o, destinationHeight: d, targetCanvas: a };
        a.width = o, a.height = d, f = window.performance.now(), nA.call(v, this.gl, v), m = window.performance.now() - f, f = window.performance.now(), oA.call(v, this.gl, v), m > window.performance.now() - f ? (this.imageBuffer = l, this.copyGLTo2D = oA) : this.copyGLTo2D = nA;
      }
    }, createWebGLCanvas: function(o, d) {
      var A = B.util.createCanvasElement();
      A.width = o, A.height = d;
      var i = { alpha: !0, premultipliedAlpha: !1, depth: !1, stencil: !1, antialias: !1 }, n = A.getContext("webgl", i);
      n || (n = A.getContext("experimental-webgl", i)), n && (n.clearColor(0, 0, 0, 0), this.canvas = A, this.gl = n);
    }, applyFilters: function(o, d, A, i, n, h) {
      var a, l = this.gl;
      h && (a = this.getCachedTexture(h, d));
      var f = { originalWidth: d.width || d.originalWidth, originalHeight: d.height || d.originalHeight, sourceWidth: A, sourceHeight: i, destinationWidth: A, destinationHeight: i, context: l, sourceTexture: this.createTexture(l, A, i, !a && d), targetTexture: this.createTexture(l, A, i), originalTexture: a || this.createTexture(l, A, i, !a && d), passes: o.length, webgl: !0, aPosition: this.aPosition, programCache: this.programCache, pass: 0, filterBackend: this, targetCanvas: n }, m = l.createFramebuffer();
      return l.bindFramebuffer(l.FRAMEBUFFER, m), o.forEach(function(v) {
        v && v.applyTo(f);
      }), function(v) {
        var x = v.targetCanvas, U = x.width, F = x.height, S = v.destinationWidth, H = v.destinationHeight;
        U === S && F === H || (x.width = S, x.height = H);
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
    }, copyGLTo2D: nA, captureGPUInfo: function() {
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
      var a = { sourceWidth: A, sourceHeight: i, imageData: h.getImageData(0, 0, A, i), originalEl: d, originalImageData: h.getImageData(0, 0, A, i), canvasEl: n, ctx: h, filterBackend: this };
      return o.forEach(function(l) {
        l.applyTo(a);
      }), a.imageData.width === A && a.imageData.height === i || (n.width = a.imageData.width, n.height = a.imageData.height), h.putImageData(a.imageData, 0, 0), a;
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
      var i, n, h, a, l, f = A.imageData.data, m = f.length, v = this.matrix, x = this.colorsOnly;
      for (l = 0; l < m; l += 4)
        i = f[l], n = f[l + 1], h = f[l + 2], x ? (f[l] = i * v[0] + n * v[1] + h * v[2] + 255 * v[4], f[l + 1] = i * v[5] + n * v[6] + h * v[7] + 255 * v[9], f[l + 2] = i * v[10] + n * v[11] + h * v[12] + 255 * v[14]) : (a = f[l + 3], f[l] = i * v[0] + n * v[1] + h * v[2] + a * v[3] + 255 * v[4], f[l + 1] = i * v[5] + n * v[6] + h * v[7] + a * v[8] + 255 * v[9], f[l + 2] = i * v[10] + n * v[11] + h * v[12] + a * v[13] + 255 * v[14], f[l + 3] = i * v[15] + n * v[16] + h * v[17] + a * v[18] + 255 * v[19]);
    }, getUniformLocations: function(A, i) {
      return { uColorMatrix: A.getUniformLocation(i, "uColorMatrix"), uConstants: A.getUniformLocation(i, "uConstants") };
    }, sendUniformData: function(A, i) {
      var n = this.matrix, h = [n[0], n[1], n[2], n[3], n[5], n[6], n[7], n[8], n[10], n[11], n[12], n[13], n[15], n[16], n[17], n[18]], a = [n[4], n[9], n[14], n[19]];
      A.uniformMatrix4fv(i.uColorMatrix, !1, h), A.uniform4fv(i.uConstants, a);
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
        var i, n = A.imageData.data, h = n.length, a = Math.round(255 * this.brightness);
        for (i = 0; i < h; i += 4)
          n[i] = n[i] + a, n[i + 1] = n[i + 1] + a, n[i + 2] = n[i + 2] + a;
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
      var n = Math.sqrt(this.matrix.length), h = this.type + "_" + n + "_" + (this.opaque ? 1 : 0), a = this.fragmentSource[h];
      return i.programCache.hasOwnProperty(h) || (i.programCache[h] = this.createProgram(i.context, a)), i.programCache[h];
    }, applyTo2d: function(i) {
      var n, h, a, l, f, m, v, x, U, F, S, H, D, R = i.imageData, W = R.data, V = this.matrix, _ = Math.round(Math.sqrt(V.length)), k = Math.floor(_ / 2), M = R.width, N = R.height, X = i.ctx.createImageData(M, N), L = X.data, I = this.opaque ? 1 : 0;
      for (S = 0; S < N; S++)
        for (F = 0; F < M; F++) {
          for (f = 4 * (S * M + F), n = 0, h = 0, a = 0, l = 0, D = 0; D < _; D++)
            for (H = 0; H < _; H++)
              m = F + H - k, (v = S + D - k) < 0 || v >= N || m < 0 || m >= M || (x = 4 * (v * M + m), U = V[D * _ + H], n += W[x] * U, h += W[x + 1] * U, a += W[x + 2] * U, I || (l += W[x + 3] * U));
          L[f] = n, L[f + 1] = h, L[f + 2] = a, L[f + 3] = I ? W[f + 3] : l;
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
      var i, n, h = A.imageData.data, a = h.length, l = this.mode;
      for (i = 0; i < a; i += 4)
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
        var n, h, a = i.imageData.data, l = a.length, f = this.noise;
        for (n = 0, l = a.length; n < l; n += 4)
          h = (0.5 - Math.random()) * f, a[n] += h, a[n + 1] += h, a[n + 2] += h;
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
      var i, n, h, a, l, f, m, v, x, U, F, S = A.imageData, H = S.data, D = S.height, R = S.width;
      for (n = 0; n < D; n += this.blocksize)
        for (h = 0; h < R; h += this.blocksize)
          for (a = H[i = 4 * n * R + 4 * h], l = H[i + 1], f = H[i + 2], m = H[i + 3], U = Math.min(n + this.blocksize, D), F = Math.min(h + this.blocksize, R), v = n; v < U; v++)
            for (x = h; x < F; x++)
              H[i = 4 * v * R + 4 * x] = a, H[i + 1] = l, H[i + 2] = f, H[i + 3] = m;
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
      var n, h, a, l, f = i.imageData.data, m = 255 * this.distance, v = new s.Color(this.color).getSource(), x = [v[0] - m, v[1] - m, v[2] - m], U = [v[0] + m, v[1] + m, v[2] + m];
      for (n = 0; n < f.length; n += 4)
        h = f[n], a = f[n + 1], l = f[n + 2], h > x[0] && a > x[1] && l > x[2] && h < U[0] && a < U[1] && l < U[2] && (f[n + 3] = 0);
    }, getUniformLocations: function(i, n) {
      return { uLow: i.getUniformLocation(n, "uLow"), uHigh: i.getUniformLocation(n, "uHigh") };
    }, sendUniformData: function(i, n) {
      var h = new s.Color(this.color).getSource(), a = parseFloat(this.distance), l = [0 + h[0] / 255 - a, 0 + h[1] / 255 - a, 0 + h[2] / 255 - a, 1], f = [h[0] / 255 + a, h[1] / 255 + a, h[2] / 255 + a, 1];
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
      var i, n, h, a, l, f, m, v = A.imageData.data, x = v.length, U = 1 - this.alpha;
      i = (m = new s.Color(this.color).getSource())[0] * this.alpha, n = m[1] * this.alpha, h = m[2] * this.alpha;
      for (var F = 0; F < x; F += 4)
        switch (a = v[F], l = v[F + 1], f = v[F + 2], this.mode) {
          case "multiply":
            v[F] = a * i / 255, v[F + 1] = l * n / 255, v[F + 2] = f * h / 255;
            break;
          case "screen":
            v[F] = 255 - (255 - a) * (255 - i) / 255, v[F + 1] = 255 - (255 - l) * (255 - n) / 255, v[F + 2] = 255 - (255 - f) * (255 - h) / 255;
            break;
          case "add":
            v[F] = a + i, v[F + 1] = l + n, v[F + 2] = f + h;
            break;
          case "diff":
          case "difference":
            v[F] = Math.abs(a - i), v[F + 1] = Math.abs(l - n), v[F + 2] = Math.abs(f - h);
            break;
          case "subtract":
            v[F] = a - i, v[F + 1] = l - n, v[F + 2] = f - h;
            break;
          case "darken":
            v[F] = Math.min(a, i), v[F + 1] = Math.min(l, n), v[F + 2] = Math.min(f, h);
            break;
          case "lighten":
            v[F] = Math.max(a, i), v[F + 1] = Math.max(l, n), v[F + 2] = Math.max(f, h);
            break;
          case "overlay":
            v[F] = i < 128 ? 2 * a * i / 255 : 255 - 2 * (255 - a) * (255 - i) / 255, v[F + 1] = n < 128 ? 2 * l * n / 255 : 255 - 2 * (255 - l) * (255 - n) / 255, v[F + 2] = h < 128 ? 2 * f * h / 255 : 255 - 2 * (255 - f) * (255 - h) / 255;
            break;
          case "exclusion":
            v[F] = i + a - 2 * i * a / 255, v[F + 1] = n + l - 2 * n * l / 255, v[F + 2] = h + f - 2 * h * f / 255;
            break;
          case "tint":
            v[F] = i + a * U, v[F + 1] = n + l * U, v[F + 2] = h + f * U;
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
      var i, n, h, a, l, f, m, v, x, U, F, S = A.imageData, H = A.filterBackend.resources, D = S.data, R = D.length, W = S.width, V = S.height, _ = this.image;
      H.blendImage || (H.blendImage = s.util.createCanvasElement()), U = (x = H.blendImage).getContext("2d"), x.width !== W || x.height !== V ? (x.width = W, x.height = V) : U.clearRect(0, 0, W, V), U.setTransform(_.scaleX, 0, 0, _.scaleY, _.left, _.top), U.drawImage(_._element, 0, 0, W, V), F = U.getImageData(0, 0, W, V).data;
      for (var k = 0; k < R; k += 4)
        switch (l = D[k], f = D[k + 1], m = D[k + 2], v = D[k + 3], i = F[k], n = F[k + 1], h = F[k + 2], a = F[k + 3], this.mode) {
          case "multiply":
            D[k] = l * i / 255, D[k + 1] = f * n / 255, D[k + 2] = m * h / 255, D[k + 3] = v * a / 255;
            break;
          case "mask":
            D[k + 3] = a;
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
    var s = u.fabric || (u.fabric = {}), o = Math.pow, d = Math.floor, A = Math.sqrt, i = Math.abs, n = Math.round, h = Math.sin, a = Math.ceil, l = s.Image.filters, f = s.util.createClass;
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
`, v.forEach(function(F, S) {
        x += "  color += texture2D(uTexture, vTexCoord + " + F + ") * uTaps[" + S + `];
`, x += "  color += texture2D(uTexture, vTexCoord - " + F + ") * uTaps[" + S + `];
`, x += "  sum += 2.0 * uTaps[" + S + `];
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
      var F, S = v.width, H = v.height, D = n(S * x), R = n(H * U);
      this.resizeType === "sliceHack" ? F = this.sliceByTwo(m, S, H, D, R) : this.resizeType === "hermite" ? F = this.hermiteFastResize(m, S, H, D, R) : this.resizeType === "bilinear" ? F = this.bilinearFiltering(m, S, H, D, R) : this.resizeType === "lanczos" && (F = this.lanczosResize(m, S, H, D, R)), m.imageData = F;
    }, sliceByTwo: function(m, v, x, U, F) {
      var S, H, D = m.imageData, R = 0.5, W = !1, V = !1, _ = v * R, k = x * R, M = s.filterBackend.resources, N = 0, X = 0, L = v, I = 0;
      for (M.sliceByTwo || (M.sliceByTwo = document.createElement("canvas")), ((S = M.sliceByTwo).width < 1.5 * v || S.height < x) && (S.width = 1.5 * v, S.height = x), (H = S.getContext("2d")).clearRect(0, 0, 1.5 * v, x), H.putImageData(D, 0, 0), U = d(U), F = d(F); !W || !V; )
        v = _, x = k, U < d(_ * R) ? _ = d(_ * R) : (_ = U, W = !0), F < d(k * R) ? k = d(k * R) : (k = F, V = !0), H.drawImage(S, N, X, v, x, L, I, _, k), N = L, X = I, I += k;
      return H.getImageData(N, X, U, F);
    }, lanczosResize: function(m, v, x, U, F) {
      var S = m.imageData.data, H = m.ctx.createImageData(U, F), D = H.data, R = this.lanczosCreate(this.lanczosLobes), W = this.rcpScaleX, V = this.rcpScaleY, _ = 2 / this.rcpScaleX, k = 2 / this.rcpScaleY, M = a(W * this.lanczosLobes / 2), N = a(V * this.lanczosLobes / 2), X = {}, L = {}, I = {};
      return function j(Y) {
        var G, z, Z, eA, iA, q, rA, J, lA, sA, hA;
        for (L.x = (Y + 0.5) * W, I.x = d(L.x), G = 0; G < F; G++) {
          for (L.y = (G + 0.5) * V, I.y = d(L.y), iA = 0, q = 0, rA = 0, J = 0, lA = 0, z = I.x - M; z <= I.x + M; z++)
            if (!(z < 0 || z >= v)) {
              sA = d(1e3 * i(z - L.x)), X[sA] || (X[sA] = {});
              for (var pA = I.y - N; pA <= I.y + N; pA++)
                pA < 0 || pA >= x || (hA = d(1e3 * i(pA - L.y)), X[sA][hA] || (X[sA][hA] = R(A(o(sA * _, 2) + o(hA * k, 2)) / 1e3)), (Z = X[sA][hA]) > 0 && (iA += Z, q += Z * S[eA = 4 * (pA * v + z)], rA += Z * S[eA + 1], J += Z * S[eA + 2], lA += Z * S[eA + 3]));
            }
          D[eA = 4 * (G * U + Y)] = q / iA, D[eA + 1] = rA / iA, D[eA + 2] = J / iA, D[eA + 3] = lA / iA;
        }
        return ++Y < U ? j(Y) : H;
      }(0);
    }, bilinearFiltering: function(m, v, x, U, F) {
      var S, H, D, R, W, V, _, k, M, N = 0, X = this.rcpScaleX, L = this.rcpScaleY, I = 4 * (v - 1), j = m.imageData.data, Y = m.ctx.createImageData(U, F), G = Y.data;
      for (D = 0; D < F; D++)
        for (R = 0; R < U; R++)
          for (W = X * R - (S = d(X * R)), V = L * D - (H = d(L * D)), M = 4 * (H * v + S), _ = 0; _ < 4; _++)
            k = j[M + _] * (1 - W) * (1 - V) + j[M + 4 + _] * W * (1 - V) + j[M + I + _] * V * (1 - W) + j[M + I + 4 + _] * W * V, G[N++] = k;
      return Y;
    }, hermiteFastResize: function(m, v, x, U, F) {
      for (var S = this.rcpScaleX, H = this.rcpScaleY, D = a(S / 2), R = a(H / 2), W = m.imageData.data, V = m.ctx.createImageData(U, F), _ = V.data, k = 0; k < F; k++)
        for (var M = 0; M < U; M++) {
          for (var N = 4 * (M + k * U), X = 0, L = 0, I = 0, j = 0, Y = 0, G = 0, z = 0, Z = (k + 0.5) * H, eA = d(k * H); eA < (k + 1) * H; eA++)
            for (var iA = i(Z - (eA + 0.5)) / R, q = (M + 0.5) * S, rA = iA * iA, J = d(M * S); J < (M + 1) * S; J++) {
              var lA = i(q - (J + 0.5)) / D, sA = A(rA + lA * lA);
              sA > 1 && sA < -1 || (X = 2 * sA * sA * sA - 3 * sA * sA + 1) > 0 && (z += X * W[(lA = 4 * (J + eA * v)) + 3], I += X, W[lA + 3] < 255 && (X = X * W[lA + 3] / 250), j += X * W[lA], Y += X * W[lA + 1], G += X * W[lA + 2], L += X);
            }
          _[N] = j / L, _[N + 1] = Y / L, _[N + 2] = G / L, _[N + 3] = z / I;
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
        var i, n = A.imageData.data, h = n.length, a = Math.floor(255 * this.contrast), l = 259 * (a + 255) / (255 * (259 - a));
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
        var i, n, h = A.imageData.data, a = h.length, l = -this.saturation;
        for (i = 0; i < a; i += 4)
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
        var i, n, h, a, l = A.imageData.data, f = l.length, m = -this.vibrance;
        for (i = 0; i < f; i += 4)
          n = Math.max(l[i], l[i + 1], l[i + 2]), h = (l[i] + l[i + 1] + l[i + 2]) / 3, a = 2 * Math.abs(n - h) / 255 * m, l[i] += n !== l[i] ? (n - l[i]) * a : 0, l[i + 1] += n !== l[i + 1] ? (n - l[i + 1]) * a : 0, l[i + 2] += n !== l[i + 2] ? (n - l[i + 2]) * a : 0;
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
      var i, n, h = A.filterBackend.resources, a = A.imageData.width, l = A.imageData.height;
      h.blurLayer1 || (h.blurLayer1 = s.util.createCanvasElement(), h.blurLayer2 = s.util.createCanvasElement()), i = h.blurLayer1, n = h.blurLayer2, i.width === a && i.height === l || (n.width = i.width = a, n.height = i.height = l);
      var f, m, v, x, U = i.getContext("2d"), F = n.getContext("2d"), S = 15, H = 0.06 * this.blur * 0.5;
      for (U.putImageData(A.imageData, 0, 0), F.clearRect(0, 0, a, l), x = -15; x <= S; x++)
        v = H * (m = x / S) * a + (f = (Math.random() - 0.5) / 4), F.globalAlpha = 1 - Math.abs(m), F.drawImage(i, v, f), U.drawImage(n, 0, 0), F.globalAlpha = 1, F.clearRect(0, 0, n.width, n.height);
      for (x = -15; x <= S; x++)
        v = H * (m = x / S) * l + (f = (Math.random() - 0.5) / 4), F.globalAlpha = 1 - Math.abs(m), F.drawImage(i, f, v), U.drawImage(n, 0, 0), F.globalAlpha = 1, F.clearRect(0, 0, n.width, n.height);
      A.ctx.drawImage(i, 0, 0);
      var D = A.ctx.getImageData(0, 0, i.width, i.height);
      return U.globalAlpha = 1, U.clearRect(0, 0, i.width, i.height), D;
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
      var i, n = A.imageData.data, h = this.gamma, a = n.length, l = 1 / h[0], f = 1 / h[1], m = 1 / h[2];
      for (this.rVals || (this.rVals = new Uint8Array(256), this.gVals = new Uint8Array(256), this.bVals = new Uint8Array(256)), i = 0, a = 256; i < a; i++)
        this.rVals[i] = 255 * Math.pow(i / 255, l), this.gVals[i] = 255 * Math.pow(i / 255, f), this.bVals[i] = 255 * Math.pow(i / 255, m);
      for (i = 0, a = n.length; i < a; i += 4)
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
      var n = (A.subFilters || []).map(function(a) {
        return new s.Image.filters[a.type](a);
      }), h = new s.Image.filters.Composed({ subFilters: n });
      return i && i(h), h;
    };
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.Image.filters, d = s.util.createClass;
    o.HueRotation = d(o.ColorMatrix, { type: "HueRotation", rotation: 0, mainParameter: "rotation", calculateMatrix: function() {
      var A = this.rotation * Math.PI, i = s.util.cos(A), n = s.util.sin(A), h = 1 / 3, a = Math.sqrt(h) * n, l = 1 - i;
      this.matrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], this.matrix[0] = i + l / 3, this.matrix[1] = h * l - a, this.matrix[2] = h * l + a, this.matrix[5] = h * l + a, this.matrix[6] = i + h * l, this.matrix[7] = h * l - a, this.matrix[10] = h * l - a, this.matrix[11] = h * l + a, this.matrix[12] = i + h * l;
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
        for (var A, i, n, h, a, l, f, m = 0, v = this._textLines.length; m < v; m++)
          if ((this.textAlign === "justify" || m !== v - 1 && !this.isEndOfWrapping(m)) && (h = 0, a = this._textLines[m], (i = this.getLineWidth(m)) < this.width && (f = this.textLines[m].match(this._reSpacesAndTabs)))) {
            n = f.length, A = (this.width - i) / n;
            for (var x = 0, U = a.length; x <= U; x++)
              l = this.__charBounds[m][x], this._reSpaceAndTab.test(a[x]) ? (l.width += A, l.kernedWidth += A, l.left += h, h += A) : l.left += h;
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
      }, _renderTextLine: function(A, i, n, h, a, l) {
        this._renderChars(A, i, n, h, a, l);
      }, _renderTextLinesBackground: function(A) {
        if (this.textBackgroundColor || this.styleHas("textBackgroundColor")) {
          for (var i, n, h, a, l, f, m, v = A.fillStyle, x = this._getLeftOffset(), U = this._getTopOffset(), F = 0, S = 0, H = this.path, D = 0, R = this._textLines.length; D < R; D++)
            if (i = this.getHeightOfLine(D), this.textBackgroundColor || this.styleHas("textBackgroundColor", D)) {
              h = this._textLines[D], n = this._getLineLeftOffset(D), S = 0, F = 0, a = this.getValueOfPropertyAt(D, 0, "textBackgroundColor");
              for (var W = 0, V = h.length; W < V; W++)
                l = this.__charBounds[D][W], f = this.getValueOfPropertyAt(D, W, "textBackgroundColor"), H ? (A.save(), A.translate(l.renderLeft, l.renderTop), A.rotate(l.angle), A.fillStyle = f, f && A.fillRect(-l.width / 2, -i / this.lineHeight * (1 - this._fontSizeFraction), l.width, i / this.lineHeight), A.restore()) : f !== a ? (m = x + n + F, this.direction === "rtl" && (m = this.width - m - S), A.fillStyle = a, a && A.fillRect(m, U, S, i / this.lineHeight), F = l.left, S = l.width, a = f) : S += l.kernedWidth;
              f && !H && (m = x + n + F, this.direction === "rtl" && (m = this.width - m - S), A.fillStyle = f, A.fillRect(m, U, S, i / this.lineHeight)), U += i;
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
        var a, l, f, m, v = this.getFontCache(i), x = n + A, U = this._getFontDeclaration(i) === this._getFontDeclaration(h), F = i.fontSize / this.CACHE_FONT_SIZE;
        if (n && v[n] !== void 0 && (f = v[n]), v[A] !== void 0 && (m = a = v[A]), U && v[x] !== void 0 && (m = (l = v[x]) - f), a === void 0 || f === void 0 || l === void 0) {
          var S = this.getMeasuringContext();
          this._setTextStyles(S, i, !0);
        }
        return a === void 0 && (m = a = S.measureText(A).width, v[A] = a), f === void 0 && U && n && (f = S.measureText(n).width, v[n] = f), U && l === void 0 && (l = S.measureText(x).width, v[x] = l, m = l - f), { width: a * F, kernedWidth: m * F };
      }, getHeightOfChar: function(A, i) {
        return this.getValueOfPropertyAt(A, i, "fontSize");
      }, measureLine: function(A) {
        var i = this._measureLine(A);
        return this.charSpacing !== 0 && (i.width -= this._getWidthOfCharSpacing()), i.width < 0 && (i.width = 0), i;
      }, _measureLine: function(A) {
        var i, n, h, a, l, f, m = 0, v = this._textLines[A], x = new Array(v.length), U = 0, F = this.path, S = this.pathSide === "right";
        for (this.__charBounds[A] = x, i = 0; i < v.length; i++)
          n = v[i], a = this._getGraphemeBox(n, A, i, h), x[i] = a, m += a.kernedWidth, h = n;
        if (x[i] = { left: a ? a.left + a.width : 0, width: 0, kernedWidth: 0, height: this.fontSize }, F) {
          switch (f = F.segmentsInfo[F.segmentsInfo.length - 1].length, (l = s.util.getPointOnPath(F.path, 0, F.segmentsInfo)).x += F.pathOffset.x, l.y += F.pathOffset.y, this.textAlign) {
            case "left":
              U = S ? f - m : 0;
              break;
            case "center":
              U = (f - m) / 2;
              break;
            case "right":
              U = S ? 0 : f - m;
          }
          for (U += this.pathStartOffset * (S ? -1 : 1), i = S ? v.length - 1 : 0; S ? i >= 0 : i < v.length; S ? i-- : i++)
            a = x[i], U > f ? U %= f : U < 0 && (U += f), this._setGraphemeOnPath(U, a, l), U += a.kernedWidth;
        }
        return { width: m, numOfSpaces: 0 };
      }, _setGraphemeOnPath: function(A, i, n) {
        var h = A + i.kernedWidth / 2, a = this.path, l = s.util.getPointOnPath(a.path, h, a.segmentsInfo);
        i.renderLeft = l.x - n.x, i.renderTop = l.y - n.y, i.angle = l.angle + (this.pathSide === "right" ? Math.PI : 0);
      }, _getGraphemeBox: function(A, i, n, h, a) {
        var l, f = this.getCompleteStyleDeclaration(i, n), m = h ? this.getCompleteStyleDeclaration(i, n - 1) : {}, v = this._measureChar(A, f, h, m), x = v.kernedWidth, U = v.width;
        this.charSpacing !== 0 && (U += l = this._getWidthOfCharSpacing(), x += l);
        var F = { width: U, left: 0, height: f.fontSize, kernedWidth: x, deltaY: f.deltaY };
        if (n > 0 && !a) {
          var S = this.__charBounds[i][n - 1];
          F.left = S.left + S.width + v.kernedWidth - v.width;
        }
        return F;
      }, getHeightOfLine: function(A) {
        if (this.__lineHeights[A])
          return this.__lineHeights[A];
        for (var i = this._textLines[A], n = this.getHeightOfChar(A, 0), h = 1, a = i.length; h < a; h++)
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
        for (var n = 0, h = this._getLeftOffset(), a = this._getTopOffset(), l = 0, f = this._textLines.length; l < f; l++) {
          var m = this.getHeightOfLine(l), v = m / this.lineHeight, x = this._getLineLeftOffset(l);
          this._renderTextLine(i, A, this._textLines[l], h + x, a + n + v, l), n += m;
        }
        A.restore();
      }, _renderTextFill: function(A) {
        (this.fill || this.styleHas("fill")) && this._renderTextCommon(A, "fillText");
      }, _renderTextStroke: function(A) {
        (this.stroke && this.strokeWidth !== 0 || !this.isEmptyStyles()) && (this.shadow && !this.shadow.affectStroke && this._removeShadow(A), A.save(), this._setLineDash(A, this.strokeDashArray), A.beginPath(), this._renderTextCommon(A, "strokeText"), A.closePath(), A.restore());
      }, _renderChars: function(A, i, n, h, a, l) {
        var f, m, v, x, U, F = this.getHeightOfLine(l), S = this.textAlign.indexOf("justify") !== -1, H = "", D = 0, R = this.path, W = !S && this.charSpacing === 0 && this.isEmptyStyles(l) && !R, V = this.direction === "ltr", _ = this.direction === "ltr" ? 1 : -1, k = i.canvas.getAttribute("dir");
        if (i.save(), k !== this.direction && (i.canvas.setAttribute("dir", V ? "ltr" : "rtl"), i.direction = V ? "ltr" : "rtl", i.textAlign = V ? "left" : "right"), a -= F * this._fontSizeFraction / this.lineHeight, W)
          return this._renderChar(A, i, l, 0, n.join(""), h, a, F), void i.restore();
        for (var M = 0, N = n.length - 1; M <= N; M++)
          x = M === N || this.charSpacing || R, H += n[M], v = this.__charBounds[l][M], D === 0 ? (h += _ * (v.kernedWidth - v.width), D += v.width) : D += v.kernedWidth, S && !x && this._reSpaceAndTab.test(n[M]) && (x = !0), x || (f = f || this.getCompleteStyleDeclaration(l, M), m = this.getCompleteStyleDeclaration(l, M + 1), x = s.util.hasStyleChanged(f, m, !1)), x && (R ? (i.save(), i.translate(v.renderLeft, v.renderTop), i.rotate(v.angle), this._renderChar(A, i, l, M, H, -D / 2, 0, F), i.restore()) : (U = h, this._renderChar(A, i, l, M, H, U, a, F)), H = "", f = m, h += _ * D, D = 0);
        i.restore();
      }, _applyPatternGradientTransformText: function(A) {
        var i, n = s.util.createCanvasElement(), h = this.width + this.strokeWidth, a = this.height + this.strokeWidth;
        return n.width = h, n.height = a, (i = n.getContext("2d")).beginPath(), i.moveTo(0, 0), i.lineTo(h, 0), i.lineTo(h, a), i.lineTo(0, a), i.closePath(), i.translate(h / 2, a / 2), i.fillStyle = A.toLive(i), this._applyPatternGradientTransform(i, A), i.fill(), i.createPattern(n, "no-repeat");
      }, handleFiller: function(A, i, n) {
        var h, a;
        return n.toLive ? n.gradientUnits === "percentage" || n.gradientTransform || n.patternTransform ? (h = -this.width / 2, a = -this.height / 2, A.translate(h, a), A[i] = this._applyPatternGradientTransformText(n), { offsetX: h, offsetY: a }) : (A[i] = n.toLive(A, this), this._applyPatternGradientTransform(A, n)) : (A[i] = n, { offsetX: 0, offsetY: 0 });
      }, _setStrokeStyles: function(A, i) {
        return A.lineWidth = i.strokeWidth, A.lineCap = this.strokeLineCap, A.lineDashOffset = this.strokeDashOffset, A.lineJoin = this.strokeLineJoin, A.miterLimit = this.strokeMiterLimit, this.handleFiller(A, "strokeStyle", i.stroke);
      }, _setFillStyles: function(A, i) {
        return this.handleFiller(A, "fillStyle", i.fill);
      }, _renderChar: function(A, i, n, h, a, l, f) {
        var m, v, x = this._getStyleDeclaration(n, h), U = this.getCompleteStyleDeclaration(n, h), F = A === "fillText" && U.fill, S = A === "strokeText" && U.stroke && U.strokeWidth;
        (S || F) && (i.save(), F && (m = this._setFillStyles(i, U)), S && (v = this._setStrokeStyles(i, U)), i.font = this._getFontDeclaration(U), x && x.textBackgroundColor && this._removeShadow(i), x && x.deltaY && (f += x.deltaY), F && i.fillText(a, l - m.offsetX, f - m.offsetY), S && i.strokeText(a, l - v.offsetX, f - v.offsetY), i.restore());
      }, setSuperscript: function(A, i) {
        return this._setScript(A, i, this.superscript);
      }, setSubscript: function(A, i) {
        return this._setScript(A, i, this.subscript);
      }, _setScript: function(A, i, n) {
        var h = this.get2DCursorLocation(A, !0), a = this.getValueOfPropertyAt(h.lineIndex, h.charIndex, "fontSize"), l = this.getValueOfPropertyAt(h.lineIndex, h.charIndex, "deltaY"), f = { fontSize: a * n.size, deltaY: l + a * n.baseline };
        return this.setSelectionStyles(f, A, i), this;
      }, _getLineLeftOffset: function(A) {
        var i = this.getLineWidth(A), n = this.width - i, h = this.textAlign, a = this.direction, l = 0, f = this.isEndOfWrapping(A);
        return h === "justify" || h === "justify-center" && !f || h === "justify-right" && !f || h === "justify-left" && !f ? 0 : (h === "center" && (l = n / 2), h === "right" && (l = n), h === "justify-center" && (l = n / 2), h === "justify-right" && (l = n), a === "rtl" && (l -= n), l);
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
          for (var n, h, a, l, f, m, v, x, U, F, S, H, D, R, W, V, _ = this._getLeftOffset(), k = this._getTopOffset(), M = this.path, N = this._getWidthOfCharSpacing(), X = this.offsets[i], L = 0, I = this._textLines.length; L < I; L++)
            if (n = this.getHeightOfLine(L), this[i] || this.styleHas(i, L)) {
              v = this._textLines[L], R = n / this.lineHeight, l = this._getLineLeftOffset(L), F = 0, S = 0, x = this.getValueOfPropertyAt(L, 0, i), V = this.getValueOfPropertyAt(L, 0, "fill"), U = k + R * (1 - this._fontSizeFraction), h = this.getHeightOfChar(L, 0), f = this.getValueOfPropertyAt(L, 0, "deltaY");
              for (var j = 0, Y = v.length; j < Y; j++)
                if (H = this.__charBounds[L][j], D = this.getValueOfPropertyAt(L, j, i), W = this.getValueOfPropertyAt(L, j, "fill"), a = this.getHeightOfChar(L, j), m = this.getValueOfPropertyAt(L, j, "deltaY"), M && D && W)
                  A.save(), A.fillStyle = V, A.translate(H.renderLeft, H.renderTop), A.rotate(H.angle), A.fillRect(-H.kernedWidth / 2, X * a + m, H.kernedWidth, this.fontSize / 15), A.restore();
                else if ((D !== x || W !== V || a !== h || m !== f) && S > 0) {
                  var G = _ + l + F;
                  this.direction === "rtl" && (G = this.width - G - S), x && V && (A.fillStyle = V, A.fillRect(G, U + X * h + f, S, this.fontSize / 15)), F = H.left, S = H.width, x = D, V = W, h = a, f = m;
                } else
                  S += H.kernedWidth;
              G = _ + l + F, this.direction === "rtl" && (G = this.width - G - S), A.fillStyle = W, D && W && A.fillRect(G, U + X * h + f, S - N, this.fontSize / 15), k += n;
            } else
              k += n;
          this._removeShadow(A);
        }
      }, _getFontDeclaration: function(A, i) {
        var n = A || this, h = this.fontFamily, a = s.Text.genericFonts.indexOf(h.toLowerCase()) > -1, l = h === void 0 || h.indexOf("'") > -1 || h.indexOf(",") > -1 || h.indexOf('"') > -1 || a ? n.fontFamily : '"' + n.fontFamily + '"';
        return [s.isLikelyNode ? n.fontWeight : n.fontStyle, s.isLikelyNode ? n.fontStyle : n.fontWeight, i ? this.CACHE_FONT_SIZE + "px" : n.fontSize + "px", l].join(" ");
      }, render: function(A) {
        this.visible && (this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (this._shouldClearDimensionCache() && this.initDimensions(), this.callSuper("render", A)));
      }, _splitTextIntoLines: function(A) {
        for (var i = A.split(this._reNewline), n = new Array(i.length), h = [`
`], a = [], l = 0; l < i.length; l++)
          n[l] = s.util.string.graphemeSplit(i[l]), a = a.concat(n[l], h);
        return a.pop(), { _unwrappedLines: n, lines: i, graphemeText: a, graphemeLines: n };
      }, toObject: function(A) {
        var i = d.concat(A), n = this.callSuper("toObject", i);
        return n.styles = s.util.stylesToArray(this.styles, this.text), n.path && (n.path = this.path.toObject()), n;
      }, set: function(A, i) {
        this.callSuper("set", A, i);
        var n = !1, h = !1;
        if (typeof A == "object")
          for (var a in A)
            a === "path" && this.setPathInfo(), n = n || this._dimensionAffectingProps.indexOf(a) !== -1, h = h || a === "path";
        else
          n = this._dimensionAffectingProps.indexOf(A) !== -1, h = A === "path";
        return h && this.setPathInfo(), n && (this.initDimensions(), this.setCoords()), this;
      }, complexity: function() {
        return 1;
      } }), s.Text.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat("x y dx dy font-family font-style font-weight font-size letter-spacing text-decoration text-anchor".split(" ")), s.Text.DEFAULT_SVG_FONT_SIZE = 16, s.Text.fromElement = function(A, i, n) {
        if (!A)
          return i(null);
        var h = s.parseAttributes(A, s.Text.ATTRIBUTE_NAMES), a = h.textAnchor || "left";
        if ((n = s.util.object.extend(n ? o(n) : {}, h)).top = n.top || 0, n.left = n.left || 0, h.textDecoration) {
          var l = h.textDecoration;
          l.indexOf("underline") !== -1 && (n.underline = !0), l.indexOf("overline") !== -1 && (n.overline = !0), l.indexOf("line-through") !== -1 && (n.linethrough = !0), delete n.textDecoration;
        }
        "dx" in h && (n.left += h.dx), "dy" in h && (n.top += h.dy), "fontSize" in n || (n.fontSize = s.Text.DEFAULT_SVG_FONT_SIZE);
        var f = "";
        "textContent" in A ? f = A.textContent : "firstChild" in A && A.firstChild !== null && "data" in A.firstChild && A.firstChild.data !== null && (f = A.firstChild.data), f = f.replace(/^\s+|\s+$|\n+/g, "").replace(/\s+/g, " ");
        var m = n.strokeWidth;
        n.strokeWidth = 0;
        var v = new s.Text(f, n), x = v.getScaledHeight() / v.height, U = ((v.height + v.strokeWidth) * v.lineHeight - v.height) * x, F = v.getScaledHeight() + U, S = 0;
        a === "center" && (S = v.getScaledWidth() / 2), a === "right" && (S = v.getScaledWidth()), v.set({ left: v.left - S, top: v.top - (F - v.fontSize * (0.07 + v._fontSizeFraction)) / v.lineHeight, strokeWidth: m !== void 0 ? m : 1 }), i(v);
      }, s.Text.fromObject = function(A, i) {
        var n = o(A), h = A.path;
        return delete n.path, s.Object._fromObject("Text", n, function(a) {
          a.styles = s.util.stylesFromArray(A.styles, A.text), h ? s.Object._fromObject("Path", h, function(l) {
            a.set("path", l), i(a);
          }, "path") : i(a);
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
      for (var a in s = 0, d[h]) {
        var l;
        A++, (l = d[h][a]).hasOwnProperty(u) ? (o ? l[u] !== o && (i = !1) : o = l[u], l[u] === this[u] && delete l[u]) : i = !1, Object.keys(l).length !== 0 ? s++ : delete d[h][a];
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
      var o, d, A, i, n = 0, h = 0, a = this.get2DCursorLocation(s);
      A = a.charIndex, d = a.lineIndex;
      for (var l = 0; l < d; l++)
        n += this.getHeightOfLine(l);
      o = this._getLineLeftOffset(d);
      var f = this.__charBounds[d][A];
      return f && (h = f.left), this.charSpacing !== 0 && A === this._textLines[d].length && (h -= this._getWidthOfCharSpacing()), i = { top: n, left: o + (h > 0 ? h : 0) }, this.direction === "rtl" && (i.left *= -1), this.cursorOffsetCache = i, this.cursorOffsetCache;
    }, renderCursor: function(s, o) {
      var d = this.get2DCursorLocation(), A = d.lineIndex, i = d.charIndex > 0 ? d.charIndex - 1 : 0, n = this.getValueOfPropertyAt(A, i, "fontSize"), h = this.scaleX * this.canvas.getZoom(), a = this.cursorWidth / h, l = s.topOffset, f = this.getValueOfPropertyAt(A, i, "deltaY");
      l += (1 - this._fontSizeFraction) * this.getHeightOfLine(A) / this.lineHeight - n * (1 - this._fontSizeFraction), this.inCompositionMode && this.renderSelection(s, o), o.fillStyle = this.cursorColor || this.getValueOfPropertyAt(A, i, "fill"), o.globalAlpha = this.__isMousedown ? 1 : this._currentCursorOpacity, o.fillRect(s.left + s.leftOffset - a / 2, l + s.top + f, a, n);
    }, renderSelection: function(s, o) {
      for (var d = this.inCompositionMode ? this.hiddenTextarea.selectionStart : this.selectionStart, A = this.inCompositionMode ? this.hiddenTextarea.selectionEnd : this.selectionEnd, i = this.textAlign.indexOf("justify") !== -1, n = this.get2DCursorLocation(d), h = this.get2DCursorLocation(A), a = n.lineIndex, l = h.lineIndex, f = n.charIndex < 0 ? 0 : n.charIndex, m = h.charIndex < 0 ? 0 : h.charIndex, v = a; v <= l; v++) {
        var x, U = this._getLineLeftOffset(v) || 0, F = this.getHeightOfLine(v), S = 0, H = 0;
        if (v === a && (S = this.__charBounds[a][f].left), v >= a && v < l)
          H = i && !this.isEndOfWrapping(v) ? this.width : this.getLineWidth(v) || 5;
        else if (v === l)
          if (m === 0)
            H = this.__charBounds[l][m].left;
          else {
            var D = this._getWidthOfCharSpacing();
            H = this.__charBounds[l][m - 1].left + this.__charBounds[l][m - 1].width - D;
          }
        x = F, (this.lineHeight < 1 || v === l && this.lineHeight > 1) && (F /= this.lineHeight);
        var R = s.left + U + S, W = H - S, V = F, _ = 0;
        this.inCompositionMode ? (o.fillStyle = this.compositionColor || "black", V = 1, _ = F) : o.fillStyle = this.selectionColor, this.direction === "rtl" && (R = this.width - R - W), o.fillRect(R, s.top + s.topOffset + _, W, V), s.topOffset += x;
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
  }(), K = B.util.object.clone, B.util.object.extend(B.IText.prototype, { initBehavior: function() {
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
    var u = this.inCompositionMode ? this.compositionStart : this.selectionStart, s = this._getCursorBoundaries(u), o = this.get2DCursorLocation(u), d = o.lineIndex, A = o.charIndex, i = this.getValueOfPropertyAt(d, A, "fontSize") * this.lineHeight, n = s.leftOffset, h = this.calcTransformMatrix(), a = { x: s.left + n, y: s.top + s.topOffset + i }, l = this.canvas.getRetinaScaling(), f = this.canvas.upperCanvasEl, m = f.width / l, v = f.height / l, x = m - i, U = v - i, F = f.clientWidth / m, S = f.clientHeight / v;
    return a = B.util.transformPoint(a, h), (a = B.util.transformPoint(a, this.canvas.viewportTransform)).x *= F, a.y *= S, a.x < 0 && (a.x = 0), a.x > x && (a.x = x), a.y < 0 && (a.y = 0), a.y > U && (a.y = U), a.x += this.canvas._offset.left, a.y += this.canvas._offset.top, { left: a.x + "px", top: a.y + "px", fontSize: i + "px", charHeight: i };
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
    var o, d, A = this.get2DCursorLocation(u, !0), i = this.get2DCursorLocation(s, !0), n = A.lineIndex, h = A.charIndex, a = i.lineIndex, l = i.charIndex;
    if (n !== a) {
      if (this.styles[n])
        for (o = h; o < this._unwrappedTextLines[n].length; o++)
          delete this.styles[n][o];
      if (this.styles[a])
        for (o = l; o < this._unwrappedTextLines[a].length; o++)
          (d = this.styles[a][o]) && (this.styles[n] || (this.styles[n] = {}), this.styles[n][h + o - l] = d);
      for (o = n + 1; o <= a; o++)
        delete this.styles[o];
      this.shiftLineStyles(a, n - a);
    } else if (this.styles[n]) {
      d = this.styles[n];
      var f, m, v = l - h;
      for (o = h; o < l; o++)
        delete d[o];
      for (m in this.styles[n])
        (f = parseInt(m, 10)) >= l && (d[f - v] = d[m], delete d[m]);
    }
  }, shiftLineStyles: function(u, s) {
    var o = K(this.styles);
    for (var d in this.styles) {
      var A = parseInt(d, 10);
      A > u && (this.styles[A + s] = o[A], o[A - s] || delete this.styles[A]);
    }
  }, restartCursorIfNeeded: function() {
    this._currentTickState && !this._currentTickState.isAborted && this._currentTickCompleteState && !this._currentTickCompleteState.isAborted || this.initDelayedCursor();
  }, insertNewlineStyleObject: function(u, s, o, d) {
    var A, i = {}, n = !1, h = this._unwrappedTextLines[u].length === s;
    for (var a in o || (o = 1), this.shiftLineStyles(u, o), this.styles[u] && (A = this.styles[u][s === 0 ? s : s - 1]), this.styles[u]) {
      var l = parseInt(a, 10);
      l >= s && (n = !0, i[l - s] = this.styles[u][a], h && s === 0 || delete this.styles[u][a]);
    }
    var f = !1;
    for (n && !h && (this.styles[u + o] = i, f = !0), f && o--; o > 0; )
      d && d[o - 1] ? this.styles[u + o] = { 0: K(d[o - 1]) } : A ? this.styles[u + o] = { 0: K(A) } : delete this.styles[u + o], o--;
    this._forceClearCache = !0;
  }, insertCharStyleObject: function(u, s, o, d) {
    this.styles || (this.styles = {});
    var A = this.styles[u], i = A ? K(A) : {};
    for (var n in o || (o = 1), i) {
      var h = parseInt(n, 10);
      h >= s && (A[h + o] = i[h], i[h - o] || delete A[h]);
    }
    if (this._forceClearCache = !0, d)
      for (; o--; )
        Object.keys(d[o]).length && (this.styles[u] || (this.styles[u] = {}), this.styles[u][s + o] = K(d[o]));
    else if (A)
      for (var a = A[s ? s - 1 : 1]; a && o--; )
        this.styles[u][s + o] = K(a);
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
    for (var s, o = this.getLocalPointer(u), d = 0, A = 0, i = 0, n = 0, h = 0, a = 0, l = this._textLines.length; a < l && i <= o.y; a++)
      i += this.getHeightOfLine(a) * this.scaleY, h = a, a > 0 && (n += this._textLines[a - 1].length + this.missingNewlineOffset(a - 1));
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
      var o, d, A, i, n, h = this._splitTextIntoLines(this.hiddenTextarea.value).graphemeText, a = this._text.length, l = h.length, f = l - a, m = this.selectionStart, v = this.selectionEnd, x = m !== v;
      if (this.hiddenTextarea.value === "")
        return this.styles = {}, this.updateFromTextArea(), this.fire("changed"), void (this.canvas && (this.canvas.fire("text:changed", { target: this }), this.canvas.requestRenderAll()));
      var U = this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart, this.hiddenTextarea.selectionEnd, this.hiddenTextarea.value), F = m > U.selectionStart;
      x ? (o = this._text.slice(m, v), f += v - m) : l < a && (o = F ? this._text.slice(v + f, v) : this._text.slice(m, m - f)), d = h.slice(U.selectionEnd - f, U.selectionEnd), o && o.length && (d.length && (A = this.getSelectionStyles(m, m + 1, !1), A = d.map(function() {
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
    var i = d.charIndex, n = this._getWidthBeforeCursor(A, i), h = this._getIndexOnLine(A - 1, n), a = this._textLines[A].slice(0, i), l = this.missingNewlineOffset(A - 1);
    return -this._textLines[A - 1].length + h - a.length + (1 - l);
  }, _getIndexOnLine: function(u, s) {
    for (var o, d, A = this._textLines[u], i = this._getLineLeftOffset(u), n = 0, h = 0, a = A.length; h < a; h++)
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
      for (var a = 0, l = this._textLines.length; a < l; a++)
        A = this._getLineLeftOffset(a), (this.textBackgroundColor || this.styleHas("textBackgroundColor", a)) && this._setSVGTextLineBg(n, a, d + A, h), this._setSVGTextLineText(i, a, d + A, h), h += this.getHeightOfLine(a);
      return { textSpans: i, textBgRects: n };
    }, _createTextCharSpan: function(o, d, A, i) {
      var n = o !== o.trim() || o.match(s), h = this.getSvgSpanStyles(d, n), a = h ? 'style="' + h + '"' : "", l = d.deltaY, f = "", m = B.Object.NUM_FRACTION_DIGITS;
      return l && (f = ' dy="' + u(l, m) + '" '), ['<tspan x="', u(A, m), '" y="', u(i, m), '" ', f, a, ">", B.util.string.escapeXml(o), "</tspan>"].join("");
    }, _setSVGTextLineText: function(o, d, A, i) {
      var n, h, a, l, f, m = this.getHeightOfLine(d), v = this.textAlign.indexOf("justify") !== -1, x = "", U = 0, F = this._textLines[d];
      i += m * (1 - this._fontSizeFraction) / this.lineHeight;
      for (var S = 0, H = F.length - 1; S <= H; S++)
        f = S === H || this.charSpacing, x += F[S], a = this.__charBounds[d][S], U === 0 ? (A += a.kernedWidth - a.width, U += a.width) : U += a.kernedWidth, v && !f && this._reSpaceAndTab.test(F[S]) && (f = !0), f || (n = n || this.getCompleteStyleDeclaration(d, S), h = this.getCompleteStyleDeclaration(d, S + 1), f = B.util.hasStyleChanged(n, h, !0)), f && (l = this._getStyleDeclaration(d, S) || {}, o.push(this._createTextCharSpan(x, l, A, i)), x = "", n = h, A += U, U = 0);
    }, _pushTextBgRect: function(o, d, A, i, n, h) {
      var a = B.Object.NUM_FRACTION_DIGITS;
      o.push("		<rect ", this._getFillAttributes(d), ' x="', u(A, a), '" y="', u(i, a), '" width="', u(n, a), '" height="', u(h, a), `"></rect>
`);
    }, _setSVGTextLineBg: function(o, d, A, i) {
      for (var n, h, a = this._textLines[d], l = this.getHeightOfLine(d) / this.lineHeight, f = 0, m = 0, v = this.getValueOfPropertyAt(d, 0, "textBackgroundColor"), x = 0, U = a.length; x < U; x++)
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
      var d, A, i = 0, n = !1, h = this._styleMap[o], a = this._styleMap[o + 1];
      for (var l in h && (o = h.line, i = h.offset), a && (n = a.line === o, d = a.offset), A = o === void 0 ? this.styles : { line: this.styles[o] })
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
      for (var h = 0, a = o.length; h < a; h++)
        n += this._getGraphemeBox(o[h], d, h + A, i, !0).kernedWidth, i = o[h];
      return n;
    }, _wrapLine: function(o, d, A, i) {
      var n = 0, h = this.splitByGrapheme, a = [], l = [], f = h ? s.util.string.graphemeSplit(o) : o.split(this._wordJoiners), m = "", v = 0, x = h ? "" : " ", U = 0, F = 0, S = 0, H = !0, D = this._getWidthOfCharSpacing();
      i = i || 0, f.length === 0 && f.push([]), A -= i;
      for (var R = 0; R < f.length; R++)
        m = h ? f[R] : s.util.string.graphemeSplit(f[R]), U = this._measureWord(m, d, v), v += m.length, (n += F + U - D) > A && !H ? (a.push(l), l = [], n = U, H = !0) : n += D, H || h || l.push(x), l = l.concat(m), F = h ? 0 : this._measureWord([x], d, v), v++, H = !1, U > S && (S = U);
      return R && a.push(l), S + i > this.dynamicMinWidth && (this.dynamicMinWidth = S - D + i), a;
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
      var a = B.Textbox.prototype.controls = {};
      a.mtr = h.mtr, a.tr = h.tr, a.br = h.br, a.tl = h.tl, a.bl = h.bl, a.mt = h.mt, a.mb = h.mb, a.mr = new B.Control({ x: 0.5, y: 0, actionHandler: u.changeWidth, cursorStyleHandler: s, actionName: "resizing" }), a.ml = new B.Control({ x: -0.5, y: 0, actionHandler: u.changeWidth, cursorStyleHandler: s, actionName: "resizing" });
    }
  }();
})(Be);
const ae = (e, t, r, c) => {
  const g = Zt();
  return g.classList.add("shake-sdk-attachments-drawing-button"), t && g.classList.add("additional-active"), r && (g.onclick = r), ((p, w) => {
    const C = new XMLHttpRequest();
    C.open("GET", p, !0), C.onreadystatechange = function() {
      C.readyState === 4 && C.status === 200 && w(C.responseText);
    }, C.send();
  })(e, (p) => {
    g.appendChild(((w, C) => {
      const b = new DOMParser().parseFromString(w, "image/svg+xml").documentElement, Q = b.querySelectorAll("path");
      return C && Q.forEach(function(y) {
        y.style.stroke = C;
      }), b;
    })(p, c));
  }), g;
}, ti = (e, t) => {
  t.map((r) => {
    r.classList.remove("additional-active"), e === r && r.classList.add("additional-active");
  });
}, Rs = ["#ff0000", "#ffcc00", "#00c274", "#0000FF", "#6552ff", "#808080"], ua = (e) => {
  const t = SA.localStorage, r = vA.attachmentsManager;
  let c, g = t.getShakeChosenColor() ?? Rs[0], p = t.getShakeChosenDrawingOption() ?? xA.PENCIL;
  const w = () => {
    c == null || c.remove(), c = function(oA, u, s, o) {
      const d = document.createElement("canvas");
      d.classList.add("shake-sdk-canvas");
      const A = d.getContext("2d");
      d.width = oA.clientWidth, d.height = oA.clientHeight;
      const i = new Be.fabric.Canvas(d);
      let n = !1, h = 0, a = 0, l = null, f = null;
      const m = (H) => {
        n = !n;
        const D = d.getBoundingClientRect();
        return h = F(H) - D.left, a = S(H) - D.top, s === xA.RECT ? (l = new Be.fabric.Rect({ left: h, top: a, width: 0, height: 0, fill: "transparent", stroke: u, strokeWidth: 4, cornerColor: u, cornerSize: 6, transparentCorners: !0, selectable: !1 }), void i.add(l)) : s === xA.ELLIPSE ? (f = new Be.fabric.Ellipse({ left: h, top: a, rx: 0, ry: 0, fill: "transparent", stroke: u, strokeWidth: 4, selectable: !1 }), void i.add(f)) : void 0;
      }, v = (H) => {
        if (!n)
          return;
        const D = d.getBoundingClientRect(), R = F(H) - D.left, W = S(H) - D.top;
        if (s === xA.RECT && l)
          return l.set({ width: R - h, height: W - a }), void i.renderAll();
        if (s === xA.ELLIPSE && f) {
          const k = Math.abs(R - h) / 2, M = Math.abs(W - a) / 2;
          return f.set({ rx: k, ry: M, left: R > h ? h : R, top: W > a ? a : W }).setCoords(), void i.renderAll();
        }
        const V = s === xA.BLUR;
        V && A && (A.filter = "blur(10px)");
        const _ = new Be.fabric.Line([h, a, R, W], { stroke: V ? "rgba(128, 128, 128, 0.8)" : u, strokeWidth: V ? 20 : 4, fill: V ? "rgba(128, 128, 128, 0.8)" : void 0, fillRule: V ? "solid" : void 0, selectable: !0 });
        i.add(_), h = R, a = W;
      }, x = () => {
        n && U(), n = !1;
      }, U = async () => {
        const H = document.createElement("canvas"), D = H.getContext("2d");
        H.width = oA.naturalWidth, H.height = oA.naturalHeight, D == null || D.drawImage(oA, 0, 0, H.width, H.height), D == null || D.drawImage(d, 0, 0, oA.naturalWidth, oA.naturalHeight), oA.src = H.toDataURL(), H.toBlob((R) => {
          o(R ?? new Blob());
        });
      };
      d.addEventListener("mousedown", m, { passive: !0 }), d.addEventListener("mousemove", v, { passive: !0 }), d.addEventListener("mouseup", x, { passive: !0 }), d.addEventListener("mouseleave", x, { passive: !0 }), d.addEventListener("touchstart", m, { passive: !0 }), d.addEventListener("touchmove", v, { passive: !0 }), d.addEventListener("touchend", x, { passive: !0 }), d.addEventListener("touchcancel", x, { passive: !0 });
      const F = (H) => bi() ? H.touches[0].clientX : H.clientX, S = (H) => bi() ? H.touches[0].clientY : H.clientY;
      return window.onresize = () => {
        d.width = oA.clientWidth, d.height = oA.clientHeight, i.setWidth(oA.clientWidth), i.setHeight(oA.clientHeight), i.renderAll();
      }, d;
    }(B, g, p, (oA) => {
      e.drawingData = oA, r.updateAttachment(e);
    }), tA.appendChild(c);
  }, C = [], b = ae("data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='pen-draw%201'%20clip-path='url(%23clip0_15248_22176)'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M10.9258%2016.8278C14.5704%2020.4725%2019.5591%2021.3965%2022.0616%2018.8905C24.171%2016.7812%2023.8431%2012.9172%2021.5156%209.57349'%20stroke='%236552FF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_2'%20d='M18.4802%206.4306C14.097%203.05893%208.61602%202.63776%205.56285%205.69093C2.14569%209.1081%203.06969%2015.5714%207.62552%2020.1273C9.62034%2022.1549%2012.0861%2023.6572%2014.8029%2024.4999'%20stroke='%236552FF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_3'%20d='M14.4897%2014.4666L16.6679%2014.0303C16.9828%2013.9683%2017.2726%2013.8149%2017.5009%2013.5893L23.8615%207.23327C24.7143%206.38002%2024.7143%204.99719%2023.8615%204.14394C23.0083%203.29121%2021.6255%203.29121%2020.7722%204.14394L14.4115%2010.4999C14.1842%2010.7276%2014.0291%2011.0174%2013.9659%2011.3329L13.5342%2013.5111C13.4495%2013.9541%2013.74%2014.3819%2014.183%2014.4666C14.2843%2014.486%2014.3884%2014.486%2014.4897%2014.4666Z'%20stroke='%236552FF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15248_22176'%3e%3crect%20width='28'%20height='28'%20fill='none'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", p === xA.PENCIL, () => {
    p = xA.PENCIL, t.setShakeChosenDrawingOption(xA.PENCIL), w();
  }, g), Q = ae("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_3795_450)'%3e%3cpath%20d='M20.036%2016.036C22.272%2011.6048%2020.4924%206.2%2016.0612%203.96402C13.515%202.67923%2010.5102%202.67923%207.96399%203.96402'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M3.96395%207.96399C1.72797%2012.3952%203.50756%2017.8%207.93877%2020.036C10.4849%2021.3208%2013.4898%2021.3208%2016.036%2020.036'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M4%204L20%2020'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_3795_450'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", void 0, () => {
    B.src = URL.createObjectURL(e.data), e.drawingData = e.data, r.updateAttachment(e), w();
  });
  C.push(Q);
  const y = ae("data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='1'%20width='20'%20height='20'%20rx='3'%20stroke='%23D1D1D6'%20stroke-width='2'/%3e%3c/svg%3e", p === xA.RECT, () => {
    p = xA.RECT, t.setShakeChosenDrawingOption(xA.RECT), ti(y, C), w();
  });
  C.push(y);
  const E = ae("data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20opacity='0.7'%20cx='10.5'%20cy='10.5'%20r='9.5'%20stroke='%23D1D1D6'%20stroke-width='2'/%3e%3c/svg%3e", p === xA.ELLIPSE, () => {
    p = xA.ELLIPSE, t.setShakeChosenDrawingOption(xA.ELLIPSE), ti(E, C), w();
  });
  C.push(E);
  const T = ae("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_3795_444)'%3e%3cpath%20d='M16.775%209H4.225C3.548%209%203%208.452%203%207.775V4.225C3%203.548%203.548%203%204.225%203H16.776C17.452%203%2018%203.548%2018%204.225V7.776C18%208.452%2017.452%209%2016.775%209Z'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2022H10C9.448%2022%209%2021.552%209%2021V16C9%2015.448%209.448%2015%2010%2015H12C12.552%2015%2013%2015.448%2013%2016V21C13%2021.552%2012.552%2022%2012%2022Z'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M11%2015V13C11%2012.448%2011.448%2012%2012%2012H20C20.552%2012%2021%2011.552%2021%2011V7C21%206.448%2020.552%206%2020%206H18'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_3795_444'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", p === xA.BLUR, () => {
    p = xA.BLUR, t.setShakeChosenDrawingOption(xA.BLUR), ti(T, C), w();
  });
  C.push(T);
  const P = uA();
  P.classList.add("shake-sdk-image-preview-toolbox"), P.appendChild(b), P.appendChild(((oA, u) => {
    const s = Rs.map((A) => {
      const i = ((n, h) => {
        const a = Zt();
        return a.classList.add("shake-sdk-attachments-colored-button"), a.id = n, h ? (a.style.background = "transparent", a.style.border = `2px solid ${n}`) : (a.style.background = n, a.style.border = "none"), a;
      })(A, u === A);
      return i.onclick = () => {
        g = A, t.setShakeChosenColor(A), ((n, h) => {
          n.querySelectorAll("path").forEach(function(a) {
            a.style.stroke = h;
          });
        })(oA, A), ((n, h) => {
          h.forEach((a) => {
            a.style.background = a.id, a.style.border = "none";
          }), n.style.background = "transparent", n.style.border = `2px solid ${n.id}`;
        })(i, s), w();
      }, i;
    }), { menu: o, toggle: d } = ca(oA, s, !0);
    return oA.onclick = async (A) => {
      ti(b, C), p = xA.PENCIL, t.setShakeChosenDrawingOption(xA.PENCIL), w(), A.stopPropagation(), d();
    }, o.classList.add("shake-sdk-attachments-preview-colors"), o;
  })(b, g)), C.map((oA) => P.appendChild(oA));
  const O = uA();
  O.classList.add("shake-sdk-image-preview-toolbox-container"), O.appendChild(P);
  const K = URL.createObjectURL(e.drawingData ?? e.data), B = tt(K);
  B.classList.add("shake-sdk-image-preview-image"), B.addEventListener("load", w, { passive: !0 });
  const tA = uA();
  tA.appendChild(B), tA.classList.add("shake-sdk-image-preview-image-container");
  const nA = uA();
  return nA.classList.add("shake-sdk-image-preview"), nA.appendChild(tA), nA.appendChild(O), nA;
}, Ou = (e) => {
  const t = uA();
  t.classList.add("shake-sdk-attachments-preview");
  const r = e.type == _A.IMAGE ? ua(e) : ((c) => {
    const g = uA();
    g.classList.add("shake-sdk-video-preview");
    const p = URL.createObjectURL(c), w = Di({ src: p + "#t=0.1", controls: !0 });
    return w.addEventListener("loadeddata", () => {
      g.appendChild(w);
    }, !1), g;
  })(e.data);
  return t.appendChild(r), t;
}, Lu = (e) => {
  const t = en();
  t.classList.add("shake-sdk-attachments-card");
  const r = uA();
  r.classList.add("shake-sdk-attachments-page");
  const c = (() => {
    const Q = Zt();
    Q.appendChild(tt(ea)), Q.appendChild(Zn(wA().shake_sdk_dialog_add_attachment_record_screen)), Q.onclick = nn;
    const y = Zt();
    y.appendChild(tt(ta)), y.appendChild(Zn(wA().shake_sdk_dialog_add_attachment_grab_screenshot)), y.onclick = rn;
    const E = uA();
    E.appendChild(y), E.appendChild(Q);
    const T = uA();
    return T.classList.add("shake-sdk-attachments-empty"), T.appendChild(E), T;
  })(), g = uA();
  g.classList.add("shake-sdk-attachments-list-wrap");
  const p = uA();
  p.classList.add("shake-sdk-attachments-preview-wrap");
  const w = () => {
    c.remove(), t.appendChild(r);
  }, C = () => {
    r.remove(), t.appendChild(c);
  }, b = Hu(e, (Q) => {
    Q ? (r.parentNode || w(), Ws(Q ?? "").then((y) => {
      p.innerText = "", p.appendChild(Ou(y));
    })) : c.parentNode || C();
  });
  return g.appendChild(b), r.appendChild(g), r.appendChild(p), e.length > 0 ? w() : C(), t;
}, Du = ({ label: e, items: t, onSelectionChange: r, selectedValue: c }) => {
  const g = uA(), p = uA();
  p.classList.add("shake-sdk-select-dropdown");
  const w = tt("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='caret-down-icon'%20clip-path='url(%23clip0_15248_22126)'%3e%3cpath%20id='Vector'%20d='M8%2010L12%2014L16%2010'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15248_22126'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  w.classList.add("shake-sdk-dropdown-icon"), p.appendChild(w);
  const C = document.createElement("label");
  C.textContent = e, C.classList.add("shake-sdk-select-dropdown-label");
  const b = uA();
  b.classList.add("shake-sdk-select-dropdown-chosen"), p.appendChild(C);
  const Q = document.createElement("ul");
  Q.classList.add("shake-sdk-select-options"), t.forEach((E) => {
    const T = document.createElement("li");
    T.classList.add("shake-sdk-select-option"), T.dataset.value = E.value, T.textContent = E.label, T.addEventListener("click", function() {
      b.textContent = T.textContent, Q.style.display = "none", T.dataset.value && r(T.dataset.value);
    }), Q.appendChild(T);
  });
  const y = Array.from(Q.children).find((E) => E.dataset.value === c);
  return y && (b.textContent = y.textContent), p.addEventListener("click", function(E) {
    E.stopPropagation(), window.innerWidth > 1024 ? (Q.style.display = Q.style.display === "block" ? "none" : "block", Q.style.display === "block" ? p.classList.add("active") : p.classList.remove("active")) : gr(((T, P, O) => {
      const K = [];
      return P.forEach((B) => {
        K.push({ text: B.label, icon: B.icon, onClick: () => {
          O(B);
        } });
      }), go(T, K);
    })(e, t, (T) => {
      b.textContent = T.label, r(c);
    }));
  }), p.addEventListener("focus", function() {
    p.classList.add("active");
  }), p.addEventListener("blur", function() {
    p.classList.remove("active");
  }), document.addEventListener("click", (E) => {
    const T = E.target;
    p.contains(T) || Q.contains(T) || (Q.style.display = "none", p.classList.remove("active"));
  }), p.append(b), g.appendChild(p), g.appendChild(Q), g;
}, Qi = ({ image: e, onClick: t }) => {
  const r = tt(e), c = document.createElement("button");
  return c.classList.add("shake-sdk-toolbar-button"), c.onclick = t, c.appendChild(r), c;
}, da = "data:image/svg+xml,%3csvg%20width='50'%20height='51'%20viewBox='0%200%2050%2051'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.834%2021.5598L29.1673%2029.8931'%20stroke='%23FFFFFF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M29.1673%2021.56L20.834%2029.8933'%20stroke='%23FFFFFF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Mu = (e) => {
  gt(`Opening image: ${e.name}`), document.body.appendChild(((t) => {
    const r = Qi({ image: da, onClick: () => {
      w.remove();
    } }), c = uA();
    c.classList.add("shake-sdk-image-preview-toolbar-fs"), c.appendChild(r);
    const g = uA();
    g.classList.add("shake-sdk-image-preview-content-fs"), g.appendChild(ua(t));
    const p = uA();
    p.classList.add("shake-sdk-image-preview-root-fs"), p.appendChild(c), p.append(g);
    const w = document.createElement("div"), C = w.attachShadow({ mode: "open" });
    return Ut(C), C.appendChild(p), w;
  })(e));
}, Pu = (e) => {
  gt("Opening video: " + e.name), document.body.appendChild(((t) => {
    const r = Qi({ image: da, onClick: () => {
      C.remove();
    } }), c = uA();
    c.classList.add("shake-sdk-video-preview-toolbar-fs"), c.appendChild(r);
    const g = URL.createObjectURL(t), p = Di({ src: g, controls: !0, autoplay: !0 });
    p.classList.add("shake-sdk-video-preview-fs");
    const w = uA();
    w.classList.add("shake-sdk-video-preview-root-fs"), w.appendChild(c), w.appendChild(p);
    const C = document.createElement("div"), b = C.attachShadow({ mode: "open" });
    return Ut(b), b.appendChild(w), C;
  })(e.data));
}, Ru = (e) => {
  const t = vA.attachmentsManager, r = /* @__PURE__ */ new Map(), c = async (C) => {
    const b = await Ws(C.name);
    C.type == _A.IMAGE ? Mu(b) : C.type == _A.VIDEO && Pu(b);
  }, g = (C) => {
    t.removeAttachment(C);
  };
  t.removeObservers.push((C) => {
    const b = r.get(C.name);
    b && (b.remove(), r.delete(C.name));
  }), t.updateObservers.push((C) => {
    const b = r.get(C.name);
    b && ((Q, y) => {
      const E = URL.createObjectURL(y.drawingData ?? y.data), T = Q.getElementsByClassName("shake-sdk-attachment-item-thumbnail-small");
      y.type == _A.IMAGE && (T[0].src = E), y.type == _A.VIDEO && (T[0].src = E);
    })(b, C);
  });
  const p = uA();
  p.classList.add("shake-sdk-attachments-items-small"), e.forEach((C) => {
    const b = ((Q, y, E) => {
      const T = Ue(ha);
      let P;
      T.classList.add("shake-sdk-attachment-item-remove-small"), T.onclick = (B) => {
        B.stopPropagation(), E(Q);
      };
      const O = URL.createObjectURL(Q.drawingData ?? Q.data);
      P = Q.type == _A.IMAGE ? tt(O) : Di({ src: O + "#t=0.1", autoplay: !0 }), P.classList.add("shake-sdk-attachment-item-thumbnail-small"), P.onclick = () => y(Q);
      const K = uA();
      return K.classList.add("shake-sdk-attachment-item-small"), K.appendChild(P), K.appendChild(T), K;
    })(C, c, g);
    r.set(C.name, b), p.appendChild(b);
  });
  const w = ((C) => {
    const b = Ue(aa);
    b.classList.add("shake-sdk-attachment-add-button-small"), b.onclick = C;
    const Q = uA();
    return Q.classList.add("shake-sdk-attachments-add-item-small"), Q.appendChild(b), Q;
  })(async () => {
    await la() ? gr(dr(wA().shake_sdk_dialog_attachment_limit_title, wA().shake_sdk_dialog_attachment_limit_message)) : gr((() => {
      const C = [];
      return C.push({ text: wA().shake_sdk_dialog_add_attachment_grab_screenshot, icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20fill='%2300000000'%20d='M13.5,6.75h-2.25c-2.485,0%20-4.5,2.015%20-4.5,4.5v2.25M40.5,47.25h2.25c2.485,0%204.5,-2.015%204.5,-4.5V40.5M6.75,40.5v2.25c0,2.485%202.015,4.5%204.5,4.5h2.25M47.25,13.5v-2.25c0,-2.485%20-2.015,-4.5%20-4.5,-4.5H40.5'%20stroke-width='3.38'%20stroke='%234CD266'/%3e%3c/svg%3e", onClick: rn }), bi() || C.push({ text: wA().shake_sdk_dialog_add_attachment_record_screen, icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20fill='%2300000000'%20d='M37.487,32.702L32.57,29.67v-5.342l4.918,-3.03c0.382,-0.236%200.861,-0.247%201.253,-0.028%200.392,0.218%200.635,0.632%200.635,1.08v9.297c0,0.45%20-0.243,0.863%20-0.635,1.081%20-0.392,0.219%20-0.871,0.208%20-1.253,-0.027z'%20stroke-width='3.375'%20stroke='%23FF9C0A'/%3e%3cpath%20fill='%2300000000'%20d='M16.275,18.956L30.919,18.956A1.65,1.65%200,0%201,32.569%2020.606L32.569,33.393A1.65,1.65%200,0%201,30.919%2035.043L16.275,35.043A1.65,1.65%200,0%201,14.625%2033.393L14.625,20.606A1.65,1.65%200,0%201,16.275%2018.956z'%20stroke-width='3.375'%20stroke='%23FF9C0A'/%3e%3cpath%20fill='%2300000000'%20d='M11.75,6.75L42.25,6.75A5,5%200,0%201,47.25%2011.75L47.25,42.25A5,5%200,0%201,42.25%2047.25L11.75,47.25A5,5%200,0%201,6.75%2042.25L6.75,11.75A5,5%200,0%201,11.75%206.75z'%20stroke-width='3.375'%20stroke='%23FF9C0A'/%3e%3c/svg%3e", onClick: nn }), go(wA().shake_sdk_dialog_add_attachment, C);
    })());
  });
  return p.appendChild(w), p;
}, Ku = (e, t) => [{ type: ci.TITLE, value: e, label: "Title" }, { type: ci.PICKER, value: t, label: "Ticket type" }], ju = [{ icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20fill='%2300000000'%20d='m40.5,15.75%20l-2.25,4.5%20-3,2.063M11.25,27h6.997M35.752,27h6.998M13.5,6.75h-2.25a4.499,4.499%200,0%200,-4.5%204.5v2.25M40.5,47.25h2.25c2.486,0%204.5,-2.014%204.5,-4.5V40.5M6.75,40.5v2.25c0,2.486%202.014,4.5%204.5,4.5h2.25M47.25,13.5v-2.25c0,-2.486%20-2.014,-4.5%20-4.5,-4.5H40.5M13.5,15.75l2.25,4.5%203,2.063M27.999,38.25h-2a6.75,6.75%200,0%201,-6.75%20-6.75v-6.75c0,-2.486%202.014,-4.5%204.5,-4.5h6.5c2.486,0%204.5,2.014%204.5,4.5v6.75a6.75,6.75%200,0%201,-6.75%206.75zM13.5,38.25l2.25,-4.5%203,-2.063M40.5,38.25l-2.25,-4.5%20-3,-2.063M31.5,20.25h-9v-4.5a2.25,2.25%200,0%201,2.25%20-2.25h4.5a2.25,2.25%200,0%201,2.25%202.25v4.5z'%20stroke-width='3.38'%20stroke='%23B77DFF'/%3e%3c/svg%3e", value: we.BUG, label: wA().shake_sdk_new_ticket_feedback_type_bug }, { icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20fill='%2300000000'%20d='M42.75,47.25h-31.5a4.499,4.499%200,0%201,-4.5%20-4.5v-31.5c0,-2.486%202.014,-4.5%204.5,-4.5h31.5c2.486,0%204.5,2.014%204.5,4.5v31.5c0,2.486%20-2.014,4.5%20-4.5,4.5z'%20stroke-width='3.38'%20stroke='%23FF9F0A'/%3e%3cpath%20fill='%2300000000'%20d='M27,29.813v-0.563c0,-1.838%201.136,-2.835%202.275,-3.6%201.111,-0.75%202.225,-1.726%202.225,-3.526%200,-2.486%20-2.014,-4.5%20-4.5,-4.5a4.499,4.499%200,0%200,-4.5%204.5M26.998,36a0.563,0.563%200,1%200,0.005%201.125,0.563%200.563,0%200,0%20-0.005,-1.125'%20stroke-width='3.38'%20stroke='%23FF9F0A'/%3e%3c/svg%3e", value: we.QUESTION, label: wA().shake_sdk_new_ticket_feedback_type_question }, { icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20fill='%2300000000'%20d='M31.275,47.25h0a20.507,20.507%200,0%200,15.417%20-15.417M38.25,22.5V9M31.5,15.75H45M6.75,22.725h0A20.504,20.504%200,0%201,22.167%207.304M22.167,47.25h0A20.511,20.511%200,0%201,6.75%2031.833'%20stroke-width='3.38'%20stroke='%23D75ED7'/%3e%3c/svg%3e", value: we.SUGGESTION, label: wA().shake_sdk_new_ticket_feedback_type_suggestion }], Vu = (e, t) => {
  let r = e.feedbackType, c = e.description, g = !0, p = !1;
  const w = en();
  w.classList.add("shake-sdk-new-ticket");
  const C = uA();
  C.classList.add("shake-sdk-new-ticket-form");
  const b = ((B = Ee, tA = !1, nA = () => {
  }) => {
    const oA = Qi({ image: Dr, onClick: () => nA() }), u = Qi({ image: Dr, onClick: B }), s = document.createElement("div");
    return s.classList.add("shake-sdk-toolbar"), tA && s.appendChild(oA), s.appendChild(u), s;
  })(), Q = zr(wA().shake_sdk_ticket_form_title);
  Q.classList.add("shake-sdk-new-ticket-title"), w.appendChild(Q);
  const y = Zt();
  function E() {
    g = !c.trim() || p, y.disabled = g, T.textContent = p ? wA().shake_sdk_ticket_form_submit_button_text_loading : wA().shake_sdk_ticket_form_submit_button_text;
  }
  y.disabled = !0, y.onclick = async () => {
    p = !0, E(), await (async ({ feedbackType: B, description: tA }) => {
      const nA = vA.shakeApiService, oA = SA.localStorage.getShakeState(), u = await Ui(), s = oA.ticket;
      s && (s.tags.push(B), s.custom_fields = Ku(tA, B), await nA.sendUserFeedback(s, u)), Ee();
    })({ feedbackType: r, description: c }), p = !1;
  };
  const T = uo(wA().shake_sdk_ticket_form_submit_button_text);
  y.appendChild(T);
  const P = Du({ label: wA().shake_sdk_new_ticket_feedback_type_title, items: ju, onSelectionChange: (B) => {
    r = B;
    const tA = SA.localStorage.getShakeState();
    tA && (tA.feedbackType = B, SA.localStorage.setShakeState(tA));
  }, selectedValue: r });
  C.appendChild(b), C.appendChild(Q), C.appendChild(P);
  const O = (({ onChange: B, maxLength: tA, value: nA, label: oA }) => {
    const u = uA();
    u.classList.add("shake-sdk-textarea-container");
    const s = document.createElement("label");
    s.textContent = oA, s.classList.add("shake-sdk-textarea-label");
    const o = document.createElement("textarea");
    return o.classList.add("shake-sdk-textarea"), o.rows = 12, o.textContent = nA || null, o.addEventListener("input", function(d) {
      let A = d.target.value;
      tA && A.length > tA && (A = A.slice(0, tA), d.target.value = A), B(d.target.value);
    }), u.appendChild(s), u.appendChild(o), u;
  })({ onChange: (B) => {
    c = B;
    const tA = SA.localStorage.getShakeState();
    tA && (tA.description = B, SA.localStorage.setShakeState(tA), E());
  }, maxLength: 1e4, value: c, label: wA().shake_sdk_ticket_form_description_placeholder });
  O.classList.add("shake-sdk-styled-textarea"), C.appendChild(O);
  const K = Ru(t);
  return C.appendChild(K), w.appendChild(C), w.appendChild(y), w;
}, ga = (e, t) => {
  const r = Ue(Dr);
  r.classList.add("shake-sdk-close-button"), r.onclick = () => Ee(!0);
  const c = Lu(t), g = uA();
  g.classList.add("shake-sdk-content-left"), g.appendChild(r), g.appendChild(c);
  const p = Vu(e, t), w = uA();
  w.classList.add("shake-sdk-content-right"), w.appendChild(p);
  const C = uA();
  C.classList.add("shake-sdk-content-wrap"), C.appendChild(g), C.appendChild(w);
  const b = uA();
  b.classList.add("shake-sdk-content"), b.appendChild(C);
  const Q = document.createElement("div");
  Q.id = "shake-sdk-root";
  const y = Q.attachShadow({ mode: "open" });
  return y.appendChild(b), Ut(y), Q;
};
var nr, sr, Rr = { exports: {} };
nr = Rr, sr = Rr.exports, function(e, t) {
  var r = "function", c = "undefined", g = "object", p = "string", w = "major", C = "model", b = "name", Q = "type", y = "vendor", E = "version", T = "architecture", P = "console", O = "mobile", K = "tablet", B = "smarttv", tA = "wearable", nA = "embedded", oA = "Amazon", u = "Apple", s = "ASUS", o = "BlackBerry", d = "Browser", A = "Chrome", i = "Firefox", n = "Google", h = "Huawei", a = "LG", l = "Microsoft", f = "Motorola", m = "Opera", v = "Samsung", x = "Sharp", U = "Sony", F = "Xiaomi", S = "Zebra", H = "Facebook", D = "Chromium OS", R = "Mac OS", W = function(G) {
    for (var z = {}, Z = 0; Z < G.length; Z++)
      z[G[Z].toUpperCase()] = G[Z];
    return z;
  }, V = function(G, z) {
    return typeof G === p && _(z).indexOf(_(G)) !== -1;
  }, _ = function(G) {
    return G.toLowerCase();
  }, k = function(G, z) {
    if (typeof G === p)
      return G = G.replace(/^\s\s*/, ""), typeof z === c ? G : G.substring(0, 500);
  }, M = function(G, z) {
    for (var Z, eA, iA, q, rA, J, lA = 0; lA < z.length && !rA; ) {
      var sA = z[lA], hA = z[lA + 1];
      for (Z = eA = 0; Z < sA.length && !rA && sA[Z]; )
        if (rA = sA[Z++].exec(G))
          for (iA = 0; iA < hA.length; iA++)
            J = rA[++eA], typeof (q = hA[iA]) === g && q.length > 0 ? q.length === 2 ? typeof q[1] == r ? this[q[0]] = q[1].call(this, J) : this[q[0]] = q[1] : q.length === 3 ? typeof q[1] !== r || q[1].exec && q[1].test ? this[q[0]] = J ? J.replace(q[1], q[2]) : t : this[q[0]] = J ? q[1].call(this, J, q[2]) : t : q.length === 4 && (this[q[0]] = J ? q[3].call(this, J.replace(q[1], q[2])) : t) : this[q] = J || t;
      lA += 2;
    }
  }, N = function(G, z) {
    for (var Z in z)
      if (typeof z[Z] === g && z[Z].length > 0) {
        for (var eA = 0; eA < z[Z].length; eA++)
          if (V(z[Z][eA], G))
            return Z === "?" ? t : Z;
      } else if (V(z[Z], G))
        return Z === "?" ? t : Z;
    return G;
  }, X = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" }, L = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [E, [b, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [E, [b, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [b, E], [/opios[\/ ]+([\w\.]+)/i], [E, [b, m + " Mini"]], [/\bopr\/([\w\.]+)/i], [E, [b, m]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [E, [b, "Baidu"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [b, E], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [E, [b, "UC" + d]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [E, [b, "WeChat"]], [/konqueror\/([\w\.]+)/i], [E, [b, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [E, [b, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [E, [b, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [E, [b, "Smart Lenovo " + d]], [/(avast|avg)\/([\w\.]+)/i], [[b, /(.+)/, "$1 Secure " + d], E], [/\bfocus\/([\w\.]+)/i], [E, [b, i + " Focus"]], [/\bopt\/([\w\.]+)/i], [E, [b, m + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [E, [b, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [E, [b, "Dolphin"]], [/coast\/([\w\.]+)/i], [E, [b, m + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [E, [b, "MIUI " + d]], [/fxios\/([-\w\.]+)/i], [E, [b, i]], [/\bqihu|(qi?ho?o?|360)browser/i], [[b, "360 " + d]], [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i], [[b, /(.+)/, "$1 " + d], E], [/samsungbrowser\/([\w\.]+)/i], [E, [b, v + " Internet"]], [/(comodo_dragon)\/([\w\.]+)/i], [[b, /_/g, " "], E], [/metasr[\/ ]?([\d\.]+)/i], [E, [b, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[b, "Sogou Mobile"], E], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i], [b, E], [/(lbbrowser)/i, /\[(linkedin)app\]/i], [b], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[b, H], E], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [b, E], [/\bgsa\/([\w\.]+) .*safari\//i], [E, [b, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [E, [b, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [E, [b, A + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[b, A + " WebView"], E], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [E, [b, "Android " + d]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [b, E], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [E, [b, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [E, b], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [b, [E, N, { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }]], [/(webkit|khtml)\/([\w\.]+)/i], [b, E], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[b, "Netscape"], E], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [E, [b, i + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [b, E], [/(cobalt)\/([\w\.]+)/i], [b, [E, /master.|lts./, ""]]], cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[T, "amd64"]], [/(ia32(?=;))/i], [[T, _]], [/((?:i[346]|x)86)[;\)]/i], [[T, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[T, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[T, "armhf"]], [/windows (ce|mobile); ppc;/i], [[T, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[T, /ower/, "", _]], [/(sun4\w)[;\)]/i], [[T, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[T, _]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [C, [y, v], [Q, K]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [C, [y, v], [Q, O]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [C, [y, u], [Q, O]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [C, [y, u], [Q, K]], [/(macintosh);/i], [C, [y, u]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [C, [y, x], [Q, O]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [C, [y, h], [Q, K]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [C, [y, h], [Q, O]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[C, /_/g, " "], [y, F], [Q, O]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[C, /_/g, " "], [y, F], [Q, K]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [C, [y, "OPPO"], [Q, O]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [C, [y, "Vivo"], [Q, O]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [C, [y, "Realme"], [Q, O]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [C, [y, f], [Q, O]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [C, [y, f], [Q, K]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [C, [y, a], [Q, K]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [C, [y, a], [Q, O]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [C, [y, "Lenovo"], [Q, K]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[C, /_/g, " "], [y, "Nokia"], [Q, O]], [/(pixel c)\b/i], [C, [y, n], [Q, K]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [C, [y, n], [Q, O]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [C, [y, U], [Q, O]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[C, "Xperia Tablet"], [y, U], [Q, K]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [C, [y, "OnePlus"], [Q, O]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [C, [y, oA], [Q, K]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[C, /(.+)/g, "Fire Phone $1"], [y, oA], [Q, O]], [/(playbook);[-\w\),; ]+(rim)/i], [C, y, [Q, K]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [C, [y, o], [Q, O]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [C, [y, s], [Q, K]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [C, [y, s], [Q, O]], [/(nexus 9)/i], [C, [y, "HTC"], [Q, K]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [y, [C, /_/g, " "], [Q, O]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [C, [y, "Acer"], [Q, K]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [C, [y, "Meizu"], [Q, O]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [C, [y, "Ulefone"], [Q, O]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [y, C, [Q, O]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [y, C, [Q, K]], [/(surface duo)/i], [C, [y, l], [Q, K]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [C, [y, "Fairphone"], [Q, O]], [/(u304aa)/i], [C, [y, "AT&T"], [Q, O]], [/\bsie-(\w*)/i], [C, [y, "Siemens"], [Q, O]], [/\b(rct\w+) b/i], [C, [y, "RCA"], [Q, K]], [/\b(venue[\d ]{2,7}) b/i], [C, [y, "Dell"], [Q, K]], [/\b(q(?:mv|ta)\w+) b/i], [C, [y, "Verizon"], [Q, K]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [C, [y, "Barnes & Noble"], [Q, K]], [/\b(tm\d{3}\w+) b/i], [C, [y, "NuVision"], [Q, K]], [/\b(k88) b/i], [C, [y, "ZTE"], [Q, K]], [/\b(nx\d{3}j) b/i], [C, [y, "ZTE"], [Q, O]], [/\b(gen\d{3}) b.+49h/i], [C, [y, "Swiss"], [Q, O]], [/\b(zur\d{3}) b/i], [C, [y, "Swiss"], [Q, K]], [/\b((zeki)?tb.*\b) b/i], [C, [y, "Zeki"], [Q, K]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[y, "Dragon Touch"], C, [Q, K]], [/\b(ns-?\w{0,9}) b/i], [C, [y, "Insignia"], [Q, K]], [/\b((nxa|next)-?\w{0,9}) b/i], [C, [y, "NextBook"], [Q, K]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[y, "Voice"], C, [Q, O]], [/\b(lvtel\-)?(v1[12]) b/i], [[y, "LvTel"], C, [Q, O]], [/\b(ph-1) /i], [C, [y, "Essential"], [Q, O]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [C, [y, "Envizen"], [Q, K]], [/\b(trio[-\w\. ]+) b/i], [C, [y, "MachSpeed"], [Q, K]], [/\btu_(1491) b/i], [C, [y, "Rotor"], [Q, K]], [/(shield[\w ]+) b/i], [C, [y, "Nvidia"], [Q, K]], [/(sprint) (\w+)/i], [y, C, [Q, O]], [/(kin\.[onetw]{3})/i], [[C, /\./g, " "], [y, l], [Q, O]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [C, [y, S], [Q, K]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [C, [y, S], [Q, O]], [/smart-tv.+(samsung)/i], [y, [Q, B]], [/hbbtv.+maple;(\d+)/i], [[C, /^/, "SmartTV"], [y, v], [Q, B]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[y, a], [Q, B]], [/(apple) ?tv/i], [y, [C, u + " TV"], [Q, B]], [/crkey/i], [[C, A + "cast"], [y, n], [Q, B]], [/droid.+aft(\w+)( bui|\))/i], [C, [y, oA], [Q, B]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [C, [y, x], [Q, B]], [/(bravia[\w ]+)( bui|\))/i], [C, [y, U], [Q, B]], [/(mitv-\w{5}) bui/i], [C, [y, F], [Q, B]], [/Hbbtv.*(technisat) (.*);/i], [y, C, [Q, B]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[y, k], [C, k], [Q, B]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[Q, B]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [y, C, [Q, P]], [/droid.+; (shield) bui/i], [C, [y, "Nvidia"], [Q, P]], [/(playstation [345portablevi]+)/i], [C, [y, U], [Q, P]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [C, [y, l], [Q, P]], [/((pebble))app/i], [y, C, [Q, tA]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [C, [y, u], [Q, tA]], [/droid.+; (glass) \d/i], [C, [y, n], [Q, tA]], [/droid.+; (wt63?0{2,3})\)/i], [C, [y, S], [Q, tA]], [/(quest( 2| pro)?)/i], [C, [y, H], [Q, tA]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [y, [Q, nA]], [/(aeobc)\b/i], [C, [y, oA], [Q, nA]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [C, [Q, O]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [C, [Q, K]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[Q, K]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[Q, O]], [/(android[-\w\. ]{0,9});.+buil/i], [C, [y, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [E, [b, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [E, [b, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [b, E], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [E, b]], os: [[/microsoft (windows) (vista|xp)/i], [b, E], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [b, [E, N, X]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[E, N, X], [b, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[E, /_/g, "."], [b, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[b, R], [E, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [E, b], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [b, E], [/\(bb(10);/i], [E, [b, o]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [E, [b, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [E, [b, i + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [E, [b, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [E, [b, "watchOS"]], [/crkey\/([\d\.]+)/i], [E, [b, A + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[b, D], E], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [b, E], [/(sunos) ?([\w\.\d]*)/i], [[b, "Solaris"], E], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [b, E]] }, I = function(G, z) {
    if (typeof G === g && (z = G, G = t), !(this instanceof I))
      return new I(G, z).getResult();
    var Z = typeof e !== c && e.navigator ? e.navigator : t, eA = G || (Z && Z.userAgent ? Z.userAgent : ""), iA = Z && Z.userAgentData ? Z.userAgentData : t, q = z ? function(J, lA) {
      var sA = {};
      for (var hA in J)
        lA[hA] && lA[hA].length % 2 == 0 ? sA[hA] = lA[hA].concat(J[hA]) : sA[hA] = J[hA];
      return sA;
    }(L, z) : L, rA = Z && Z.userAgent == eA;
    return this.getBrowser = function() {
      var J = {};
      return J[b] = t, J[E] = t, M.call(J, eA, q.browser), J[w] = function(lA) {
        return typeof lA === p ? lA.replace(/[^\d\.]/g, "").split(".")[0] : t;
      }(J[E]), rA && Z && Z.brave && typeof Z.brave.isBrave == r && (J[b] = "Brave"), J;
    }, this.getCPU = function() {
      var J = {};
      return J[T] = t, M.call(J, eA, q.cpu), J;
    }, this.getDevice = function() {
      var J = {};
      return J[y] = t, J[C] = t, J[Q] = t, M.call(J, eA, q.device), rA && !J[Q] && iA && iA.mobile && (J[Q] = O), rA && J[C] == "Macintosh" && Z && typeof Z.standalone !== c && Z.maxTouchPoints && Z.maxTouchPoints > 2 && (J[C] = "iPad", J[Q] = K), J;
    }, this.getEngine = function() {
      var J = {};
      return J[b] = t, J[E] = t, M.call(J, eA, q.engine), J;
    }, this.getOS = function() {
      var J = {};
      return J[b] = t, J[E] = t, M.call(J, eA, q.os), rA && !J[b] && iA && iA.platform != "Unknown" && (J[b] = iA.platform.replace(/chrome os/i, D).replace(/macos/i, R)), J;
    }, this.getResult = function() {
      return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
    }, this.getUA = function() {
      return eA;
    }, this.setUA = function(J) {
      return eA = typeof J === p && J.length > 500 ? k(J, 500) : J, this;
    }, this.setUA(eA), this;
  };
  I.VERSION = "1.0.37", I.BROWSER = W([b, E, w]), I.CPU = W([T]), I.DEVICE = W([C, y, Q, P, O, B, K, tA, nA]), I.ENGINE = I.OS = W([b, E]), nr.exports && (sr = nr.exports = I), sr.UAParser = I;
  var j = typeof e !== c && (e.jQuery || e.Zepto);
  if (j && !j.ua) {
    var Y = new I();
    j.ua = Y.getResult(), j.ua.get = function() {
      return Y.getUA();
    }, j.ua.set = function(G) {
      Y.setUA(G);
      var z = Y.getResult();
      for (var Z in z)
        j.ua[Z] = z[Z];
    };
  }
}(typeof window == "object" ? window : Ia);
var Gu = Rr.exports;
const Ks = 5242880;
async function fa() {
  const e = new Gu.UAParser(navigator.userAgent), t = await Yu().then((r) => r);
  return { timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, issue_reported_time: Mr((/* @__PURE__ */ new Date()).toString()), device: Nu(), browser_name: e.getBrowser().name, browser_version: e.getBrowser().version, current_view: window.location.pathname, screen_height: js().height, screen_width: js().width, metadata_: kt.metadata, sdk_version: fo, report_type: Xs.MANUAL, screen_density: window.devicePixelRatio || 1, locale: window.navigator.language || null, os_version: e.getOS().version, os_name: e.getOS().name, device_orientation: Wu(), battery_level: t == null ? void 0 : t.level, battery_status: t != null && t.charging ? 1 : 0, font_scale: zu(), network_type: Ju(), permissions: await Ad().then((r) => r), browser_height: Vs().height, browser_width: Vs().width, cookies_enabled: qu(), is_mobile: Zu(), cpu_arch: e.getCPU().architecture, app_version: "1.0", log: await Xu(), tags: [] };
}
function Nu() {
  const e = navigator.userAgent;
  return e.match(/Android/i) ? "Android Device" : e.match(/iPhone|iPad|iPod/i) ? "iOS Device" : e.match(/Windows Phone/i) ? "Windows Phone" : e.match(/Windows/i) ? "Windows PC" : e.match(/Macintosh|Mac OS/i) ? "Macintosh" : e.match(/Linux/i) ? "Linux PC" : null;
}
const Xu = async () => {
  const e = {};
  try {
    const t = [], r = [], c = [], g = [], p = [], w = [], C = await Ys();
    let b = 0;
    const Q = new TextEncoder();
    C.forEach((y) => {
      const E = JSON.stringify(y), T = Q.encode(E).length;
      if (b += T, b < Ks && T < Ks)
        switch (y.event_type) {
          case kA.CONSOLE_LOG:
            t.push(y);
            break;
          case kA.CUSTOM_LOG:
            r.push(y);
            break;
          case kA.NETWORK_REQUEST:
            c.push(y);
            break;
          case kA.SYSTEM_EVENT:
            p.push(y);
            break;
          case kA.USER_ACTION:
            g.push(y);
            break;
          case kA.VIEW_CONTROLLER:
            w.push(y);
        }
    }), LA.report.isConsoleLogsEnabled && (e.console_log_events = t), LA.report.isCustomLogsEnabled && (e.custom_log_events = r), LA.report.isNetworkRequestsEnabled && (e.network_requests = c), LA.report.isUserActionsEnabled && (e.user_taps = g), LA.report.isSystemEventsEnabled && (e.system_events = p), LA.report.isScreenChangesEnabled && (e.view_controller_history = w);
  } catch (t) {
    Yr("Failed to read activity histroy. " + (t == null ? void 0 : t.message));
  }
  return e;
};
function js() {
  return { width: window.screen.width, height: window.screen.height };
}
function Vs() {
  return { width: window.innerWidth || document.documentElement.clientWidth, height: window.innerHeight || document.documentElement.clientHeight };
}
function Wu() {
  const e = window.screen.orientation;
  return e ? e.type.toLocaleLowerCase().includes("landscape-primary") ? 0 : e.type.toLocaleLowerCase().includes("landscape-secondary") ? 180 : e.type.toLocaleLowerCase().includes("portrait-primary") ? 90 : e.type.toLocaleLowerCase().includes("portrait-secondary") ? 270 : null : null;
}
const Yu = async () => {
  if (!("getBattery" in navigator))
    return null;
  try {
    return await navigator.getBattery();
  } catch (e) {
    return gt("Error getting battery status: " + (e == null ? void 0 : e.message)), null;
  }
}, zu = () => {
  const e = document.createElement("div");
  e.style.fontSize = "1rem", document.body.appendChild(e);
  const t = window.getComputedStyle(e), r = t.getPropertyValue("font-size") ? parseFloat(t.getPropertyValue("font-size")) : null;
  return document.body.removeChild(e), r;
}, Ju = () => {
  const e = "onLine" in navigator && navigator.onLine || !1;
  return "connection" in navigator && e && navigator.connection.effectiveType || null;
}, qu = () => "cookieEnabled" in navigator && navigator.cookieEnabled || null, Zu = () => {
  var e;
  return "userAgentData" in navigator ? (e = navigator.userAgentData) == null ? void 0 : e.mobile : null;
};
async function $u(e) {
  try {
    return await navigator.permissions.query({ name: e });
  } catch (t) {
    return gt("Error checking permission status: " + t.message), null;
  }
}
async function Ad() {
  const e = [];
  for (const t of Qa)
    try {
      const r = await $u(t);
      r && r.state && r.state === "granted" && e.push({ name: t, state: r.state });
    } catch (r) {
      gt("Error checking permission status: " + r.message);
    }
  return e;
}
const pa = async () => {
  const e = SA.localStorage;
  vA.shakeApiService.registerApp(), ed();
  const t = e.getShakeState();
  if (!t.ticket) {
    const g = await new tn().captureScreenshot(document.body);
    g && await na(g), t.ticket = await fa(), e.setShakeState(t);
  }
  const r = await Ui(), c = ga(t, r);
  document.body.appendChild(c), e.setShakeOpened(!0);
}, Fi = "shake-sdk-main-button-root", td = () => {
  const e = document.getElementById(Fi);
  e && (e.style.display = "flex");
}, ed = () => {
  const e = document.getElementById(Fi);
  e && (e.style.display = "none");
};
class id {
  constructor() {
    $(this, "_language", ai.EN);
    $(this, "_floatingButtonEnabled", !0);
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
    this._floatingButtonEnabled = t, Kr();
  }
}
const Kr = () => {
  if (SA.localStorage.isSDKEnabled())
    if (LA.config.floatingButtonEnabled) {
      const e = (() => {
        const t = Zt();
        t.classList.add("shake-sdk-main-button");
        const r = tt("data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14931_603)'%3e%3cpath%20d='M8.19434%2012.6212C10.9278%2015.3547%2014.6693%2016.0477%2016.5462%2014.1682C18.1282%2012.5862%2017.8823%209.68817%2016.1367%207.18042'%20stroke='%23B77DFF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.8599%204.82319C10.5725%202.29444%206.46177%201.97857%204.1719%204.26844C1.60902%206.83132%202.30202%2011.6788%205.7189%2015.0957C7.21501%2016.6164%209.06436%2017.7431%2011.1019%2018.3752'%20stroke='%23B77DFF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.8666%2010.8501L12.5002%2010.5228C12.7364%2010.4764%2012.9537%2010.3613%2013.1249%2010.1921L17.8954%205.42507C18.535%204.78514%2018.535%203.74801%2017.8954%203.10807C17.2555%202.46853%2016.2184%202.46853%2015.5784%203.10807L10.8079%207.87507C10.6374%208.04585%2010.5211%208.2632%2010.4737%208.49982L10.1499%2010.1334C10.0864%2010.4657%2010.3043%2010.7865%2010.6365%2010.8501C10.7125%2010.8646%2010.7906%2010.8646%2010.8666%2010.8501Z'%20stroke='%23880FFF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14931_603'%3e%3crect%20width='21'%20height='21'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
        r.alt = "Send feedback icon", r.classList.add("shake-sdk-main-button-icon");
        const c = uo(wA().shake_sdk_main_button_title);
        c.classList.add("shake-sdk-main-button-text"), t.appendChild(r), t.appendChild(c), t.addEventListener("mousedown", (w) => {
          w.stopPropagation(), w.preventDefault(), pa();
        });
        const g = document.createElement("div");
        g.id = Fi;
        const p = g.attachShadow({ mode: "open" });
        return Ut(p), p.appendChild(t), g;
      })();
      document.body.appendChild(e);
    } else {
      const e = document.getElementById(Fi);
      e == null || e.remove();
    }
}, Gs = () => {
  LA.report.isConsoleLogsEnabled && vA.consoleLogsTracker.start(), LA.report.isNetworkRequestsEnabled && vA.networkRequestsTracker.start(), LA.report.isScreenChangesEnabled && vA.screenChangeTracker.start(), LA.report.isSystemEventsEnabled && vA.systemEventTracker.start(), LA.report.isUserActionsEnabled && vA.userActionTracker.start();
}, Ns = 5120, rd = { takeScreenshot: !0, showSuccessMessage: !1 }, nd = (e) => {
  const t = [];
  return e && t.push({ type: ci.TITLE, value: e, label: "Title" }), t;
}, OA = class OA {
  static async start(t, r) {
    if (this.localStorage.getShakeDeviceId() || this.localStorage.setShakeDeviceId(ba()), !this.isLoading && !this.isStarted)
      if (this.isLoading = !0, t) {
        if (Jt.apiKey = t, Jt.appDomain = r, vA.shakeApiService.init(), this.localStorage.isSDKEnabled())
          return Gs(), Kr(), this.isStarted = !0, void qn("Shake started.");
        await (async () => {
          SA.localStorage.isAppRegistered() || await vA.shakeApiService.registerApp();
        })(), this.localStorage.isSDKEnabled() && (Gs(), Kr(), this.isStarted = !0, qn("Shake started.")), this.isLoading = !1;
      } else
        Oe("Cannot start Shake. Api key is empty.");
  }
};
$(OA, "config", new id()), $(OA, "report", new kt()), $(OA, "localStorage", SA.localStorage), $(OA, "isLoading", !1), $(OA, "isStarted", !1), $(OA, "show", async () => await OA.ifSDKEnabled(async () => {
  await pa();
})), $(OA, "silentReport", async (t, r) => await OA.ifSDKEnabled(async () => {
  await (async (c, g = rd) => {
    const p = vA.shakeApiService, w = [];
    if (g.takeScreenshot) {
      const b = await new tn().captureScreenshot(document.body);
      b && w.push({ data: b, type: _A.IMAGE, name: ra(_A.IMAGE), timestamp: (/* @__PURE__ */ new Date()).getTime() });
    }
    const C = await fa();
    C.tags.push("silent"), C.custom_fields = nd(c), await p.sendUserFeedback(C, w), g.showSuccessMessage && pr(!0);
  })(t, r);
})), $(OA, "log", async (t, r) => await OA.ifSDKEnabled(async () => {
  await vA.customLogTracker.captureEvent(t, r);
})), $(OA, "setMetadata", (t, r) => {
  ((c, g) => {
    if (Object.keys(kt.metadata).length >= 100)
      return void Oe("Cannot set metadata. Limit of 100 items reached.");
    g.length > Ns && (Oe("Truncating metadata value. Value exceeded 5120 chars."), g = g.substring(0, Ns)), kt.metadata[c] = g;
  })(t, r);
}), $(OA, "removeMetadata", (t) => {
  ((r) => {
    delete kt.metadata[r];
  })(t);
}), $(OA, "clearMetadata", () => {
  kt.metadata = {};
}), $(OA, "ifSDKEnabled", async (t) => OA.localStorage.isSDKEnabled() ? (await t(), !0) : (Oe("Please call Shake.start(apiKey) before using Shake."), !1));
let jr = OA;
const LA = jr;
export {
  ai as Language,
  Ca as LogLevel,
  LA as default
};
//# sourceMappingURL=browser.js.map
