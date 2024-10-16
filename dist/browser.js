var Kl = Object.defineProperty;
var Pl = (e, A, t) => A in e ? Kl(e, A, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[A] = t;
var V = (e, A, t) => (Pl(e, typeof A != "symbol" ? A + "" : A, t), t);
import "./main.css";
var jl = ((e) => (e.VERBOSE = "VERBOSE", e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARN = "WARN", e.ERROR = "ERROR", e))(jl || {}), ar = ((e) => (e[e.EN = 0] = "EN", e))(ar || {}), bt = ((e) => (e[e.HOME_SCREEN = 0] = "HOME_SCREEN", e[e.NEW_TICKET = 1] = "NEW_TICKET", e))(bt || {}), qi = ((e) => (e.SUGGESTION = "improvement", e.BUG = "bug", e.QUESTION = "question", e))(qi || {}), Pa = ((e) => (e.MANUAL = "manual", e.AUTOMATIC = "automatic", e))(Pa || {}), Qt = ((e) => (e.TITLE = "title", e.TEXT_INPUT = "text_input", e.EMAIL = "email", e.PICKER = "picker", e))(Qt || {});
const Nl = ["geolocation", "camera", "microphone", "notifications", "persistent-storage", "screen-wake-lock"];
class os {
  constructor(A) {
    V(this, "items");
    V(this, "clone", () => {
      const A = this.items.map((t) => Object.assign(Object.create(Object.getPrototypeOf(t)), t));
      return new os(A);
    });
    this.items = A;
  }
}
class gi {
  constructor(A) {
    V(this, "key");
    this.key = A;
  }
}
class Fr extends gi {
  constructor(t, r, a, f, B) {
    super(t);
    V(this, "label");
    V(this, "value");
    V(this, "required");
    V(this, "lines");
    this.label = r, this.value = a ?? "", this.required = f ?? !1, this.lines = B ?? 1;
  }
}
class ja extends gi {
  constructor(t, r, a, f, B) {
    super(t);
    V(this, "label");
    V(this, "value");
    V(this, "required");
    V(this, "lines");
    this.label = r, this.value = a ?? "", this.required = f ?? !1, this.lines = B ?? 1;
  }
}
class as extends gi {
  constructor(t, r, a, f) {
    super(t);
    V(this, "label");
    V(this, "value");
    V(this, "required");
    this.label = r, this.value = a ?? "", this.required = f ?? !1;
  }
}
class Ur extends gi {
  constructor(t, r, a, f) {
    super(t);
    V(this, "label");
    V(this, "items");
    V(this, "value");
    this.label = r, this.items = a, this.value = f ?? 0;
  }
}
class Lp {
  constructor(A, t, r, a) {
    V(this, "key");
    V(this, "label");
    V(this, "icon");
    V(this, "tag");
    this.key = A, this.label = t, this.icon = r, this.tag = a;
  }
}
class cs extends gi {
  constructor() {
    super(ue.attachments);
  }
}
const Gl = { shake_sdk_main_button_title: "Send feedback", shake_sdk_new_ticket_title: "New ticket", shake_sdk_new_ticket_feedback_type_title: "Ticket type", shake_sdk_new_ticket_feedback_type_bug: "Bug report", shake_sdk_new_ticket_feedback_type_question: "Question", shake_sdk_new_ticket_feedback_type_suggestion: "Improvement suggestion", shake_sdk_new_ticket_description_placeholder: "Description", shake_sdk_new_ticket_email_placeholder: "Email", shake_sdk_new_ticket_email_error: "Whoopsie, not an email", shake_sdk_new_ticket_submit_button_text: "Submit", shake_sdk_new_ticket_submit_button_loading: "Submitting...", shake_sdk_home_screen_title: "Hey there", shake_sdk_home_screen_subtitle: "Send us your bug reports, questions and improvement suggestions.", shake_sdk_home_screen_empty_list: "No tickets yet", shake_sdk_chat_screen_title: "Chat", shake_sdk_chat_screen_input_hint: "Write a reply", shake_sdk_chat_screen_error_message: "Tap to retry", shake_sdk_chat_screen_empty_list: "No messages yet", shake_sdk_dialog_add_attachment: "Add attachment", shake_sdk_dialog_add_attachment_grab_screenshot: "Grab screenshot", shake_sdk_dialog_add_attachment_record_screen: "Record screen", shake_sdk_dialog_add_attachment_browse_locations: "Choose from computer", shake_sdk_dialog_add_attachment_type_video: "Video", shake_sdk_dialog_add_attachment_type_image: "Image", shake_sdk_dialog_add_attachment_type_file: "File", shake_sdk_dialog_attachment_count_limit_title: "Cannot attach file", shake_sdk_dialog_attachment_count_limit_message: "A maximum of 10 files can be attached to a feedback form.", shake_sdk_dialog_attachment_size_limit_title: "File too big", shake_sdk_dialog_attachment_size_limit_message: "Files up to 10 MB can be attached, and that one had % MB.", shake_sdk_dialog_ticket_sent_title: "Done.", shake_sdk_dialog_ticket_sent_message: "Your ticket was sent.", shake_sdk_error_title: "Oops", shake_sdk_error_message: "Something went wrong." }, fA = () => {
  if (ar.EN === ar.EN)
    return Gl;
}, Ds = (e, A) => e.substring(0, A), Ms = (e) => e === null ? !1 : new RegExp("^[\\w.+-]+@([\\w\\-]+\\.)+[A-Z]+$", "i").test(e), Rs = (e) => /\ufffd/.test(e), Vl = () => {
  const e = [{ key: ue.feedbackTypeBug, label: fA().shake_sdk_new_ticket_feedback_type_bug, icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20fill='%2300000000'%20d='m40.5,15.75%20l-2.25,4.5%20-3,2.063M11.25,27h6.997M35.752,27h6.998M13.5,6.75h-2.25a4.499,4.499%200,0%200,-4.5%204.5v2.25M40.5,47.25h2.25c2.486,0%204.5,-2.014%204.5,-4.5V40.5M6.75,40.5v2.25c0,2.486%202.014,4.5%204.5,4.5h2.25M47.25,13.5v-2.25c0,-2.486%20-2.014,-4.5%20-4.5,-4.5H40.5M13.5,15.75l2.25,4.5%203,2.063M27.999,38.25h-2a6.75,6.75%200,0%201,-6.75%20-6.75v-6.75c0,-2.486%202.014,-4.5%204.5,-4.5h6.5c2.486,0%204.5,2.014%204.5,4.5v6.75a6.75,6.75%200,0%201,-6.75%206.75zM13.5,38.25l2.25,-4.5%203,-2.063M40.5,38.25l-2.25,-4.5%20-3,-2.063M31.5,20.25h-9v-4.5a2.25,2.25%200,0%201,2.25%20-2.25h4.5a2.25,2.25%200,0%201,2.25%202.25v4.5z'%20stroke-width='3.38'%20stroke='%23B77DFF'/%3e%3c/svg%3e", tag: qi.BUG }, { key: ue.feedbackTypeQuestion, label: fA().shake_sdk_new_ticket_feedback_type_question, icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20fill='%2300000000'%20d='M42.75,47.25h-31.5a4.499,4.499%200,0%201,-4.5%20-4.5v-31.5c0,-2.486%202.014,-4.5%204.5,-4.5h31.5c2.486,0%204.5,2.014%204.5,4.5v31.5c0,2.486%20-2.014,4.5%20-4.5,4.5z'%20stroke-width='3.38'%20stroke='%23FF9F0A'/%3e%3cpath%20fill='%2300000000'%20d='M27,29.813v-0.563c0,-1.838%201.136,-2.835%202.275,-3.6%201.111,-0.75%202.225,-1.726%202.225,-3.526%200,-2.486%20-2.014,-4.5%20-4.5,-4.5a4.499,4.499%200,0%200,-4.5%204.5M26.998,36a0.563,0.563%200,1%200,0.005%201.125,0.563%200.563,0%200,0%20-0.005,-1.125'%20stroke-width='3.38'%20stroke='%23FF9F0A'/%3e%3c/svg%3e", tag: qi.QUESTION }, { key: ue.feedbackTypeSuggestion, label: fA().shake_sdk_new_ticket_feedback_type_suggestion, icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20fill='%2300000000'%20d='M31.275,47.25h0a20.507,20.507%200,0%200,15.417%20-15.417M38.25,22.5V9M31.5,15.75H45M6.75,22.725h0A20.504,20.504%200,0%201,22.167%207.304M22.167,47.25h0A20.511,20.511%200,0%201,6.75%2031.833'%20stroke-width='3.38'%20stroke='%23D75ED7'/%3e%3c/svg%3e", tag: qi.SUGGESTION }], A = new Ur(ue.feedbackType, fA().shake_sdk_new_ticket_feedback_type_title, e), t = new Fr(ue.description, fA().shake_sdk_new_ticket_description_placeholder, "", !0, 10), r = new as(ue.email, fA().shake_sdk_new_ticket_email_placeholder, "", !1), a = new cs();
  return new os([A, t, r, a]);
}, ue = { feedbackType: "Feedback Type", feedbackTypeBug: "Bug", feedbackTypeQuestion: "Question", feedbackTypeSuggestion: "Suggestion", description: "Description", email: "Email", attachments: "Attachments" };
class At {
}
V(At, "apiKey", ""), V(At, "appDomain", "");
let vi;
const Wl = new Uint8Array(16);
function Yl() {
  if (!vi && (vi = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !vi))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return vi(Wl);
}
const NA = [];
for (let e = 0; e < 256; ++e)
  NA.push((e + 256).toString(16).slice(1));
const Ks = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
function Na(e, A, t) {
  if (Ks.randomUUID && !A && !e)
    return Ks.randomUUID();
  const r = (e = e || {}).random || (e.rng || Yl)();
  return r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, function(a, f = 0) {
    return NA[a[f + 0]] + NA[a[f + 1]] + NA[a[f + 2]] + NA[a[f + 3]] + "-" + NA[a[f + 4]] + NA[a[f + 5]] + "-" + NA[a[f + 6]] + NA[a[f + 7]] + "-" + NA[a[f + 8]] + NA[a[f + 9]] + "-" + NA[a[f + 10]] + NA[a[f + 11]] + NA[a[f + 12]] + NA[a[f + 13]] + NA[a[f + 14]] + NA[a[f + 15]];
  }(r);
}
const Ga = { production: !0, name: "production", apiBaseUrl: "https://api.shakebugs.com/api/2.0/", webSocketUrl: "https://ws.shakebugs.com/" };
class Jl {
  constructor() {
    V(this, "promises", []);
    V(this, "isExecuting", !1);
    V(this, "add", (A) => {
      this.promises.push(A), this.isExecuting || (this.isExecuting = !0, this.runNext());
    });
    V(this, "runNext", async () => {
      var A;
      this.promises.length > 0 ? (await ((A = this.promises.shift()) == null ? void 0 : A()), this.runNext()) : this.isExecuting = !1;
    });
  }
}
const Ps = "shake.sdk.isAppRegistered", js = "shake.sdk.isAppActive", Gr = "shake.sdk.shakeState", Ns = "shake.sdk.shakeDeviceId", Gs = "shake.sdk.shakeChosenColor", Vs = "shake.sdk.shakeChosenDrawingOption", Ws = "shake.sdk.fetchTicketsTime";
class Ys {
  constructor() {
    V(this, "formValues", {});
    V(this, "setFormValue", (A, t) => {
      this.formValues[A] = t, WA.localStorage.setShakeState(this);
    });
  }
}
class Xl {
  constructor(A) {
    V(this, "storageProvider");
    V(this, "isSDKEnabled", () => this.isAppRegistered() && this.isAppActive());
    V(this, "isAppRegistered", () => this.storageProvider.getBoolean(Ps));
    V(this, "setAppRegistered", (A) => this.storageProvider.setBoolean(Ps, A));
    V(this, "isAppActive", () => this.storageProvider.getBoolean(js));
    V(this, "setAppActive", (A) => this.storageProvider.setBoolean(js, A));
    V(this, "getShakeState", () => {
      const A = this.storageProvider.getObject(Gr);
      return A ? Object.assign(new Ys(), A) : new Ys();
    });
    V(this, "setShakeState", (A) => this.storageProvider.setObject(Gr, A));
    V(this, "clearShakeState", () => {
      this.storageProvider.removeItem(Gr);
    });
    V(this, "getShakeDeviceId", () => this.storageProvider.getString(Ns));
    V(this, "setShakeDeviceId", (A) => this.storageProvider.setString(Ns, A));
    V(this, "getDrawingColor", () => this.storageProvider.getString(Gs));
    V(this, "setDrawingColor", (A) => this.storageProvider.setString(Gs, A));
    V(this, "getDrawingOption", () => this.storageProvider.getString(Vs));
    V(this, "setDrawingOption", (A) => this.storageProvider.setString(Vs, A));
    V(this, "getFetchTicketsTime", () => this.storageProvider.getNumber(Ws));
    V(this, "setFetchTicketsTime", (A) => this.storageProvider.setNumber(Ws, A));
    this.storageProvider = A;
  }
}
class zl {
  getString(A) {
    return localStorage.getItem(A);
  }
  setString(A, t) {
    localStorage.setItem(A, t);
  }
  getBoolean(A) {
    return localStorage.getItem(A) === "true";
  }
  setBoolean(A, t) {
    localStorage.setItem(A, String(t));
  }
  getNumber(A) {
    return localStorage.getItem(A) == null ? null : Number(localStorage.getItem(A));
  }
  setNumber(A, t) {
    t === null ? localStorage.removeItem(A) : localStorage.setItem(A, String(t));
  }
  removeItem(A) {
    localStorage.removeItem(A);
  }
  getObject(A) {
    const t = localStorage.getItem(A);
    return t ? JSON.parse(t) : null;
  }
  setObject(A, t) {
    localStorage.setItem(A, JSON.stringify(t));
  }
}
const kA = "shake_sdk", Ee = "activity_history", et = "users", de = "chat_messages", tt = "chat_participants", _e = "tickets", ge = "files", it = "report", xA = (e) => {
  const A = e.target.result;
  e.oldVersion < 1 && A.createObjectStore(ge, { keyPath: "name" }), e.oldVersion < 2 && A.createObjectStore(Ee, { keyPath: "id", autoIncrement: !0 }), e.oldVersion < 3 && A.createObjectStore(it, { autoIncrement: !0 }), e.oldVersion < 4 && (A.createObjectStore(et, { keyPath: "id", autoIncrement: !0 }), A.createObjectStore(de, { keyPath: "id", autoIncrement: !0 }), A.createObjectStore(tt, { keyPath: "id", autoIncrement: !0 }), A.createObjectStore(_e, { keyPath: "id", autoIncrement: !0 }));
}, IA = (e) => () => {
  e("Error opening database");
};
function _t() {
  return new Promise((e, A) => {
    const t = indexedDB.open(kA, 4), r = [];
    t.onsuccess = function(a) {
      const f = a.target.result.transaction([ge], "readonly").objectStore(ge).openCursor();
      f.onsuccess = function(B) {
        const w = B.target.result;
        w ? (r.push({ name: w.value.name, data: w.value.drawingData ? w.value.drawingData : w.value.data, type: w.value.type, timestamp: w.value.timestamp }), w.continue()) : (r.sort((C, Q) => C.timestamp == Q.timestamp ? 0 : C.timestamp > Q.timestamp ? 1 : -1), e(r));
      }, f.onerror = function() {
        console.error("Error retrieving files from IndexedDB: " + f.error);
      };
    }, t.onerror = IA(A), t.onupgradeneeded = xA;
  });
}
const Js = (e) => new Promise((A, t) => {
  const r = indexedDB.open(kA, 4);
  r.onsuccess = function(a) {
    const f = a.target.result.transaction([ge], "readwrite").objectStore(ge).put(e);
    f.onsuccess = function() {
      A("File written successfully to IndexedDB");
    }, f.onerror = function() {
      console.error("Error writing file to IndexedDB: " + f.error);
    };
  }, r.onerror = IA(t), r.onupgradeneeded = xA;
});
function Va(e) {
  return new Promise((A, t) => {
    const r = indexedDB.open(kA, 4);
    r.onsuccess = function(a) {
      const f = a.target.result.transaction([ge], "readonly").objectStore(ge).get(e);
      f.onsuccess = function(B) {
        const w = B.target.result;
        w && A(w);
      }, f.onerror = function() {
        console.error("Error reading file from IndexedDB: " + f.error);
      };
    }, r.onerror = IA(t), r.onupgradeneeded = xA;
  });
}
class ql {
  constructor() {
    V(this, "addObservers", []);
    V(this, "removeObservers", []);
    V(this, "updateObservers", []);
    V(this, "addAttachment", async (A) => {
      await Js(A), this.notifyAdded(A);
    });
    V(this, "removeAttachment", async (A) => {
      var t;
      await (t = A.name, new Promise((r, a) => {
        const f = indexedDB.open(kA, 4);
        f.onsuccess = function(B) {
          const w = B.target.result.transaction([ge], "readwrite").objectStore(ge).delete(t);
          w.onsuccess = function() {
            r("File deleted successfully from IndexedDB");
          }, w.onerror = function() {
            a("Error deleting file from IndexedDB");
          };
        }, f.onerror = IA(a), f.onupgradeneeded = xA;
      })), this.notifyRemoved(A);
    });
    V(this, "updateAttachment", async (A) => {
      await Js(A), this.notifyUpdated(A);
    });
    V(this, "notifyAdded", (A) => this.addObservers.forEach((t) => t(A)));
    V(this, "notifyRemoved", (A) => this.removeObservers.forEach((t) => t(A)));
    V(this, "notifyUpdated", (A) => this.updateObservers.forEach((t) => t(A)));
  }
}
var DA = ((e) => (e[e.CONSOLE_LOG = 0] = "CONSOLE_LOG", e[e.CUSTOM_LOG = 1] = "CUSTOM_LOG", e[e.NETWORK_REQUEST = 2] = "NETWORK_REQUEST", e[e.NOTIFICATION_EVENT = 3] = "NOTIFICATION_EVENT", e[e.VIEW_CONTROLLER = 4] = "VIEW_CONTROLLER", e[e.SYSTEM_EVENT = 5] = "SYSTEM_EVENT", e[e.USER_ACTION = 6] = "USER_ACTION", e))(DA || {}), Xe = ((e) => (e.VERBOSE = "verbose", e.DEBUG = "debug", e.INFO = "info", e.WARNING = "warning", e.ERROR = "error", e))(Xe || {});
const Lt = async (e) => {
  const A = await new Promise((f, B) => {
    const w = indexedDB.open(kA, 4), C = [];
    w.onsuccess = function(Q) {
      const y = Q.target.result.transaction([Ee], "readonly").objectStore(Ee).openCursor();
      y.onsuccess = function(x) {
        const E = x.target.result;
        if (E) {
          const _ = E.value.timestamp;
          C.push({ timestamp: _ }), E.continue();
        } else
          C.sort((_, S) => _.timestamp < S.timestamp ? 1 : _.timestamp == S.timestamp ? 0 : -1), f(C);
      }, y.onerror = function() {
        B("Error retrieving activity history times from IndexedDB");
      };
    }, w.onerror = IA(B), w.onupgradeneeded = xA;
  }), t = A[999];
  var r, a;
  t && await (r = t, new Promise((f, B) => {
    const w = indexedDB.open(kA, 4);
    w.onsuccess = function(C) {
      const Q = C.target.result.transaction([Ee], "readwrite").objectStore(Ee), y = Q.openCursor();
      y.onsuccess = function(x) {
        const E = x.target.result;
        E ? (E.value.timestamp <= r.timestamp && Q.delete(E.primaryKey), E.continue()) : f("Items deleted from IndexedDB");
      }, y.onerror = function() {
        B("Error opening cursor");
      };
    }, w.onerror = IA(B), w.onupgradeneeded = xA;
  })), await (a = e, new Promise((f, B) => {
    const w = indexedDB.open(kA, 4);
    w.onsuccess = function(C) {
      const Q = C.target.result.transaction([Ee], "readwrite").objectStore(Ee).put(a);
      Q.onsuccess = function() {
        f("Activity history event written successfully to IndexedDB");
      }, Q.onerror = function() {
        B("Error writing activity history event to IndexedDB");
      };
    }, w.onerror = IA(B), w.onupgradeneeded = xA;
  }));
};
class Zl {
  constructor() {
    V(this, "funcLog", console.log);
    V(this, "funcError", console.error);
    V(this, "funcWarn", console.warn);
    V(this, "funcInfo", console.info);
    V(this, "funcDebug", console.debug);
    V(this, "funcTrace", console.trace);
    V(this, "start", () => {
      console.log = (...A) => {
        this.captureEvent(Xe.VERBOSE, A), this.funcLog(...A);
      }, console.error = (...A) => {
        this.captureEvent(Xe.ERROR, A), this.funcError(...A);
      }, console.warn = (...A) => {
        this.captureEvent(Xe.WARNING, A), this.funcWarn(...A);
      }, console.info = (...A) => {
        this.captureEvent(Xe.INFO, A), this.funcInfo(...A);
      }, console.debug = (...A) => {
        this.captureEvent(Xe.DEBUG, A), this.funcDebug(...A);
      }, console.trace = (...A) => {
        this.captureEvent(Xe.DEBUG, A), this.funcTrace(...A);
      };
    });
    V(this, "stop", () => {
      console.log = this.funcLog, console.error = this.funcError, console.warn = this.funcWarn, console.info = this.funcInfo, console.debug = this.funcDebug, console.trace = this.funcTrace;
    });
    V(this, "captureEvent", (A, t) => {
      if (!bA.report.isConsoleLogsEnabled)
        return;
      const r = this.serializeLog(t), a = { timestamp: (/* @__PURE__ */ new Date()).toISOString(), message: r, event_type: DA.CONSOLE_LOG, type: A };
      Lt(a);
    });
    V(this, "serializeLog", (A) => A.map((t) => t === null ? "null" : t === void 0 ? "undefined" : typeof t == "object" ? JSON.stringify(t) : String(t)).join(" "));
  }
}
class $l {
  constructor() {
    V(this, "captureEvent", async (A, t) => {
      if (!bA.report.isCustomLogsEnabled)
        return;
      const r = { timestamp: (/* @__PURE__ */ new Date()).toISOString(), level: A, message: t.toString(), event_type: DA.CUSTOM_LOG };
      await Lt(r);
    });
  }
}
const Be = /* @__PURE__ */ new Map();
Be.set("Email address regex", /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}/), Be.set("IPv4 Address regex", /\d{1,3}[.]\d{1,3}[.]\d{1,3}[.]\d{1,3}/), Be.set("Mastercard number regex", /(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}/), Be.set("Visa numbers regex", /\b([4]\d{3}[\s]\d{4}[\s]\d{4}[\s]\d{4}|[4]\d{3}[-]\d{4}[-]\d{4}[-]\d{4}|[4]\d{3}[.]\d{4}[.]\d{4}[.]\d{4}|[4]\d{3}\d{4}\d{4}\d{4})\b/), Be.set("American express number regex", /3[47][0-9]{13}/), Be.set("Credit card number regex", /\b(3[47]\d{2}([ -]?)(?!(\d)\3{5}|123456|234567|345678)\d{6}\2(?!(\d)\4{4})\d{5}|((4\d|5[1-5]|65)\d{2}|6011)([ -]?)(?!(\d)\8{3}|1234|3456|5678)\d{4}\7(?!(\d)\9{3})\d{4}\7\d{4})\b/), Be.set("Bearer token regex", /Bearer\s[A-Za-z0-9-.]*/);
const Xs = ["password", "secret", "passwd", "api_key", "apikey", "access_token", "auth_token", "credentials", "mysql_pwd", "stripetoken", "Authorization", "Proxy-Authorization", "card[number]", "token"], Ue = "data_redacted", Se = window.XMLHttpRequest, zs = Se.prototype.open, qs = Se.prototype.send, Zs = Se.prototype.setRequestHeader;
let Vr, Mt, Ye = !1;
const Wr = { setOnRequestDone(e) {
  Vr = e;
}, enableInterceptor() {
  Se.prototype.open = function(e, A) {
    Mt = { event_type: DA.NETWORK_REQUEST, url: "", method: "", request_body: "", response_body: "", request_headers: {}, response_headers: {}, status_code: "", timestamp: "", start: 0, duration: 0 }, Mt.url = A.toString(), Mt.method = e, zs.call(this, e, A);
  }, Se.prototype.setRequestHeader = function(e, A) {
    Mt.request_headers[e] = String(A), Zs.call(this, e, A);
  }, Se.prototype.send = function(e) {
    let A;
    A = typeof e != "string" ? e ? JSON.stringify(e) : "" : e, Rs(A) && (A = "Binary data");
    const t = /* @__PURE__ */ new Date();
    let r = t.toISOString();
    r = r.replace("Z", "000+0000");
    const a = JSON.parse(JSON.stringify(Mt));
    a.start = t.getTime(), a.timestamp = r, a.request_body = A || "", this.addEventListener && (this.addEventListener("readystatechange", async () => {
      Ye && this.readyState === this.HEADERS_RECEIVED && this.getAllResponseHeaders() && (a.response_headers = Ah(this.getAllResponseHeaders()));
    }, !1), this.addEventListener("load", async () => {
      if (!Ye)
        return;
      let B = await new Response(this.response).text();
      (B === void 0 || Rs(B)) && (B = "Binary data"), a.duration = Date.now() - a.start, a.response_body = B || "", a.status_code = this.status ? this.status.toString() : "n/a", f(a);
    }, !1), this.addEventListener("error", () => {
      Ye && (a.duration = Date.now() - a.start, a.response_body = "Request error.", a.status_code = "err", f(a));
    }, !1), this.addEventListener("abort", () => {
      Ye && (a.duration = Date.now() - a.start, a.response_body = "Request aborted.", a.status_code = "err", f(a));
    }, !1), this.addEventListener("timeout", () => {
      Ye && (a.duration = Date.now() - a.start, a.response_body = "Request timeout.", a.status_code = "t/o", f(a));
    }, !1));
    const f = (B) => {
      B.method || (B.method = ""), B.status_code || (B.status_code = ""), Vr && Vr(B);
    };
    qs.call(this, e);
  }, Ye = !0;
}, disableInterceptor() {
  Ye = !1, Se.prototype.send = qs, Se.prototype.open = zs, Se.prototype.setRequestHeader = Zs;
} }, Ah = (e) => {
  const A = {};
  try {
    e && e.split(`\r
`).forEach((t) => {
      if (t) {
        const r = t.split(/:(.+)/), a = String(r == null ? void 0 : r[0]);
        A[a] = String(r == null ? void 0 : r[1]);
      }
    });
  } catch {
  }
  return A;
};
class eh {
  constructor() {
    V(this, "start", () => {
      Wr.enableInterceptor();
    });
    V(this, "stop", () => {
      Wr.disableInterceptor();
    });
    V(this, "captureEvent", (A) => {
      if (!bA.report.isNetworkRequestsEnabled)
        return;
      let t = A;
      this.cutRequestData(t), bA.config.sensitiveDataRedaction && ((r) => {
        const a = new Map(Object.entries(r.request_headers)), f = new Map(Object.entries(r.response_headers));
        Xs.forEach((C) => {
          const Q = C.toLowerCase();
          for (const [y] of a.entries())
            y.toLowerCase() === Q && a.set(y, Ue);
          for (const [y] of f.entries())
            y.toLowerCase() === Q && f.set(y, Ue);
        }), Be.forEach((C) => {
          a.forEach((Q, y) => {
            a.set(y, Q.replace(C, Ue));
          }), f.forEach((Q, y) => {
            f.set(y, Q.replace(C, Ue));
          });
        }), r.request_headers = Object.fromEntries(a), r.response_headers = Object.fromEntries(f);
        let B = r.request_body, w = r.response_body;
        Xs.forEach((C) => {
          const Q = new RegExp(`("${C.replace("[", "\\[").replace("]", "\\]")}":\\s*")[^"]*(")`, "gi");
          w = w.replace(Q, `$1${Ue}$2`), B = B.replace(Q, `$1${Ue}$2`);
        }), Be.forEach((C) => {
          w = w.replace(C, Ue), B = B.replace(C, Ue);
        }), r.request_body = B, r.response_body = w;
      })(t), bA.config.networkRequestsFilter && (t = bA.config.networkRequestsFilter(t)), t && Lt(t);
    });
    V(this, "cutRequestData", (A) => {
      A.request_body = Ds(A.request_body, 1e8), A.response_body = Ds(A.response_body, 1e8);
    });
    Wr.setOnRequestDone(this.captureEvent);
  }
}
var th = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ih(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function rh(e) {
  if (e.__esModule)
    return e;
  var A = e.default;
  if (typeof A == "function") {
    var t = function r() {
      return this instanceof r ? Reflect.construct(A, arguments, this.constructor) : A.apply(this, arguments);
    };
    t.prototype = A.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var a = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(t, r, a.get ? a : { enumerable: !0, get: function() {
      return e[r];
    } });
  }), t;
}
var Wa, vn = { exports: {} }, xt = typeof Reflect == "object" ? Reflect : null, $s = xt && typeof xt.apply == "function" ? xt.apply : function(e, A, t) {
  return Function.prototype.apply.call(e, A, t);
};
Wa = xt && typeof xt.ownKeys == "function" ? xt.ownKeys : Object.getOwnPropertySymbols ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : function(e) {
  return Object.getOwnPropertyNames(e);
};
var Ao = Number.isNaN || function(e) {
  return e != e;
};
function vA() {
  vA.init.call(this);
}
vn.exports = vA, vn.exports.once = function(e, A) {
  return new Promise(function(t, r) {
    function a(B) {
      e.removeListener(A, f), r(B);
    }
    function f() {
      typeof e.removeListener == "function" && e.removeListener("error", a), t([].slice.call(arguments));
    }
    so(e, A, f, { once: !0 }), A !== "error" && function(B, w, C) {
      typeof B.on == "function" && so(B, "error", w, C);
    }(e, a, { once: !0 });
  });
}, vA.EventEmitter = vA, vA.prototype._events = void 0, vA.prototype._eventsCount = 0, vA.prototype._maxListeners = void 0;
var eo = 10;
function Zi(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
function Ya(e) {
  return e._maxListeners === void 0 ? vA.defaultMaxListeners : e._maxListeners;
}
function to(e, A, t, r) {
  var a, f, B, w;
  if (Zi(t), (f = e._events) === void 0 ? (f = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (f.newListener !== void 0 && (e.emit("newListener", A, t.listener ? t.listener : t), f = e._events), B = f[A]), B === void 0)
    B = f[A] = t, ++e._eventsCount;
  else if (typeof B == "function" ? B = f[A] = r ? [t, B] : [B, t] : r ? B.unshift(t) : B.push(t), (a = Ya(e)) > 0 && B.length > a && !B.warned) {
    B.warned = !0;
    var C = new Error("Possible EventEmitter memory leak detected. " + B.length + " " + String(A) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    C.name = "MaxListenersExceededWarning", C.emitter = e, C.type = A, C.count = B.length, w = C, console && console.warn && console.warn(w);
  }
  return e;
}
function nh() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function io(e, A, t) {
  var r = { fired: !1, wrapFn: void 0, target: e, type: A, listener: t }, a = nh.bind(r);
  return a.listener = t, r.wrapFn = a, a;
}
function ro(e, A, t) {
  var r = e._events;
  if (r === void 0)
    return [];
  var a = r[A];
  return a === void 0 ? [] : typeof a == "function" ? t ? [a.listener || a] : [a] : t ? function(f) {
    for (var B = new Array(f.length), w = 0; w < B.length; ++w)
      B[w] = f[w].listener || f[w];
    return B;
  }(a) : Ja(a, a.length);
}
function no(e) {
  var A = this._events;
  if (A !== void 0) {
    var t = A[e];
    if (typeof t == "function")
      return 1;
    if (t !== void 0)
      return t.length;
  }
  return 0;
}
function Ja(e, A) {
  for (var t = new Array(A), r = 0; r < A; ++r)
    t[r] = e[r];
  return t;
}
function so(e, A, t, r) {
  if (typeof e.on == "function")
    r.once ? e.once(A, t) : e.on(A, t);
  else {
    if (typeof e.addEventListener != "function")
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
    e.addEventListener(A, function a(f) {
      r.once && e.removeEventListener(A, a), t(f);
    });
  }
}
Object.defineProperty(vA, "defaultMaxListeners", { enumerable: !0, get: function() {
  return eo;
}, set: function(e) {
  if (typeof e != "number" || e < 0 || Ao(e))
    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
  eo = e;
} }), vA.init = function() {
  this._events !== void 0 && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
}, vA.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || Ao(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
}, vA.prototype.getMaxListeners = function() {
  return Ya(this);
}, vA.prototype.emit = function(e) {
  for (var A = [], t = 1; t < arguments.length; t++)
    A.push(arguments[t]);
  var r = e === "error", a = this._events;
  if (a !== void 0)
    r = r && a.error === void 0;
  else if (!r)
    return !1;
  if (r) {
    var f;
    if (A.length > 0 && (f = A[0]), f instanceof Error)
      throw f;
    var B = new Error("Unhandled error." + (f ? " (" + f.message + ")" : ""));
    throw B.context = f, B;
  }
  var w = a[e];
  if (w === void 0)
    return !1;
  if (typeof w == "function")
    $s(w, this, A);
  else {
    var C = w.length, Q = Ja(w, C);
    for (t = 0; t < C; ++t)
      $s(Q[t], this, A);
  }
  return !0;
}, vA.prototype.addListener = function(e, A) {
  return to(this, e, A, !1);
}, vA.prototype.on = vA.prototype.addListener, vA.prototype.prependListener = function(e, A) {
  return to(this, e, A, !0);
}, vA.prototype.once = function(e, A) {
  return Zi(A), this.on(e, io(this, e, A)), this;
}, vA.prototype.prependOnceListener = function(e, A) {
  return Zi(A), this.prependListener(e, io(this, e, A)), this;
}, vA.prototype.removeListener = function(e, A) {
  var t, r, a, f, B;
  if (Zi(A), (r = this._events) === void 0)
    return this;
  if ((t = r[e]) === void 0)
    return this;
  if (t === A || t.listener === A)
    --this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, t.listener || A));
  else if (typeof t != "function") {
    for (a = -1, f = t.length - 1; f >= 0; f--)
      if (t[f] === A || t[f].listener === A) {
        B = t[f].listener, a = f;
        break;
      }
    if (a < 0)
      return this;
    a === 0 ? t.shift() : function(w, C) {
      for (; C + 1 < w.length; C++)
        w[C] = w[C + 1];
      w.pop();
    }(t, a), t.length === 1 && (r[e] = t[0]), r.removeListener !== void 0 && this.emit("removeListener", e, B || A);
  }
  return this;
}, vA.prototype.off = vA.prototype.removeListener, vA.prototype.removeAllListeners = function(e) {
  var A, t, r;
  if ((t = this._events) === void 0)
    return this;
  if (t.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : t[e] !== void 0 && (--this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete t[e]), this;
  if (arguments.length === 0) {
    var a, f = Object.keys(t);
    for (r = 0; r < f.length; ++r)
      (a = f[r]) !== "removeListener" && this.removeAllListeners(a);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (typeof (A = t[e]) == "function")
    this.removeListener(e, A);
  else if (A !== void 0)
    for (r = A.length - 1; r >= 0; r--)
      this.removeListener(e, A[r]);
  return this;
}, vA.prototype.listeners = function(e) {
  return ro(this, e, !0);
}, vA.prototype.rawListeners = function(e) {
  return ro(this, e, !1);
}, vA.listenerCount = function(e, A) {
  return typeof e.listenerCount == "function" ? e.listenerCount(A) : no.call(e, A);
}, vA.prototype.listenerCount = no, vA.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Wa(this._events) : [];
};
const sh = ih(vn.exports), Xa = new class extends sh {
}();
let oo;
setInterval(() => {
  let e = window.location.href;
  e != oo && (Xa.emit("change", e), oo = e);
}, 60);
var ao = Xa;
class oh {
  constructor() {
    V(this, "listener", (A) => {
      this.captureEvent(A);
    });
    V(this, "start", () => {
      ao.on("change", this.listener);
    });
    V(this, "stop", () => {
      ao.off("change", this.listener);
    });
    V(this, "captureEvent", (A) => {
      if (!bA.report.isScreenChangesEnabled)
        return;
      const t = { timestamp: (/* @__PURE__ */ new Date()).toISOString(), view_controller: A, method: "onStart", event_type: DA.VIEW_CONTROLLER };
      Lt(t);
    });
  }
}
var yn = ((e) => (e.TAB_VISIBLE = "onResume", e.TAB_HIDDEN = "onPause", e.APP_START = "onCreate", e))(yn || {});
class ah {
  constructor() {
    V(this, "listener", () => {
      document.visibilityState === "hidden" && this.captureEvent(yn.TAB_HIDDEN), document.visibilityState === "visible" && this.captureEvent(yn.TAB_VISIBLE);
    });
    V(this, "start", () => {
      document.addEventListener("visibilitychange", this.listener);
    });
    V(this, "stop", () => {
      document.removeEventListener("visibilitychange", this.listener);
    });
    V(this, "captureEvent", (A) => {
      if (!bA.report.isSystemEventsEnabled)
        return;
      const t = { timestamp: (/* @__PURE__ */ new Date()).toISOString(), state: A, event_type: DA.SYSTEM_EVENT };
      Lt(t);
    });
  }
}
var za = ((e) => (e.TAP = "Tap", e))(za || {});
class ch {
  constructor() {
    V(this, "listener", (A) => {
      const t = lh(A);
      t && this.captureEvent(t.tag, t.property, t.propertyType);
    });
    V(this, "start", () => {
      document.addEventListener("click", this.listener);
    });
    V(this, "stop", () => {
      document.removeEventListener("click", this.listener);
    });
    V(this, "captureEvent", (A, t, r) => {
      if (!bA.report.isUserActionsEnabled)
        return;
      const a = { timestamp: (/* @__PURE__ */ new Date()).toISOString(), class_name: A ?? "", property: t ?? "", property_type: r ?? "", touch_type: za.TAP, event_type: DA.USER_ACTION };
      bA.config.sensitiveDataRedaction && ((f) => {
        Be.forEach((B) => {
          f.property = f.property.replace(B, Ue);
        });
      })(a), Lt(a);
    });
  }
}
const lh = (e) => {
  const A = { tag: "", property: "", propertyType: "" };
  if (e.target instanceof Element) {
    A.tag = e.target.tagName.toLowerCase();
    let t = "";
    ["p", "pre", "q", "h1", "h2", "button", "a", "span", "li"].includes(A.tag) && (t = e.target.textContent ?? "");
    const r = e.target.ariaLabel ?? e.target.getAttribute("alt") ?? "", a = e.target.id ?? "", f = e.target.className ?? "";
    t && yi(t) ? (A.property = t, A.propertyType = "Text") : r && yi(r) ? (A.property = r, A.propertyType = "ContentDescription") : a && yi(a) ? (A.property = a, A.propertyType = "Id") : f && yi(f) && (A.property = f, A.propertyType = "Id");
  }
  return A;
}, yi = (e) => !(e instanceof SVGAnimatedString), me = /* @__PURE__ */ Object.create(null);
me.open = "0", me.close = "1", me.ping = "2", me.pong = "3", me.message = "4", me.upgrade = "5", me.noop = "6";
const $i = /* @__PURE__ */ Object.create(null);
Object.keys(me).forEach((e) => {
  $i[me[e]] = e;
});
const bn = { type: "error", data: "parser error" }, qa = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Za = typeof ArrayBuffer == "function", $a = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, Qn = ({ type: e, data: A }, t, r) => qa && A instanceof Blob ? t ? r(A) : co(A, r) : Za && (A instanceof ArrayBuffer || $a(A)) ? t ? r(A) : co(new Blob([A]), r) : r(me[e] + (A || "")), co = (e, A) => {
  const t = new FileReader();
  return t.onload = function() {
    const r = t.result.split(",")[1];
    A("b" + (r || ""));
  }, t.readAsDataURL(e);
};
function lo(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let Yr;
const hh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Gt = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < 64; e++)
  Gt[hh.charCodeAt(e)] = e;
const uh = typeof ArrayBuffer == "function", kn = (e, A) => {
  if (typeof e != "string")
    return { type: "message", data: Ac(e, A) };
  const t = e.charAt(0);
  return t === "b" ? { type: "message", data: dh(e.substring(1), A) } : $i[t] ? e.length > 1 ? { type: $i[t], data: e.substring(1) } : { type: $i[t] } : bn;
}, dh = (e, A) => {
  if (uh) {
    const t = ((r) => {
      let a, f, B, w, C, Q = 0.75 * r.length, y = r.length, x = 0;
      r[r.length - 1] === "=" && (Q--, r[r.length - 2] === "=" && Q--);
      const E = new ArrayBuffer(Q), _ = new Uint8Array(E);
      for (a = 0; a < y; a += 4)
        f = Gt[r.charCodeAt(a)], B = Gt[r.charCodeAt(a + 1)], w = Gt[r.charCodeAt(a + 2)], C = Gt[r.charCodeAt(a + 3)], _[x++] = f << 2 | B >> 4, _[x++] = (15 & B) << 4 | w >> 2, _[x++] = (3 & w) << 6 | 63 & C;
      return E;
    })(e);
    return Ac(t, A);
  }
  return { base64: !0, data: e };
}, Ac = (e, A) => A === "blob" ? e instanceof Blob ? e : new Blob([e]) : e instanceof ArrayBuffer ? e : e.buffer, ho = "";
function gh() {
  return new TransformStream({ transform(e, A) {
    (function(t, r) {
      qa && t.data instanceof Blob ? t.data.arrayBuffer().then(lo).then(r) : Za && (t.data instanceof ArrayBuffer || $a(t.data)) ? r(lo(t.data)) : Qn(t, !1, (a) => {
        Yr || (Yr = new TextEncoder()), r(Yr.encode(a));
      });
    })(e, (t) => {
      const r = t.length;
      let a;
      if (r < 126)
        a = new Uint8Array(1), new DataView(a.buffer).setUint8(0, r);
      else if (r < 65536) {
        a = new Uint8Array(3);
        const f = new DataView(a.buffer);
        f.setUint8(0, 126), f.setUint16(1, r);
      } else {
        a = new Uint8Array(9);
        const f = new DataView(a.buffer);
        f.setUint8(0, 127), f.setBigUint64(1, BigInt(r));
      }
      e.data && typeof e.data != "string" && (a[0] |= 128), A.enqueue(a), A.enqueue(t);
    });
  } });
}
let Jr;
function bi(e) {
  return e.reduce((A, t) => A + t.length, 0);
}
function Qi(e, A) {
  if (e[0].length === A)
    return e.shift();
  const t = new Uint8Array(A);
  let r = 0;
  for (let a = 0; a < A; a++)
    t[a] = e[0][r++], r === e[0].length && (e.shift(), r = 0);
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), t;
}
function MA(e) {
  if (e)
    return function(A) {
      for (var t in MA.prototype)
        A[t] = MA.prototype[t];
      return A;
    }(e);
}
MA.prototype.on = MA.prototype.addEventListener = function(e, A) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(A), this;
}, MA.prototype.once = function(e, A) {
  function t() {
    this.off(e, t), A.apply(this, arguments);
  }
  return t.fn = A, this.on(e, t), this;
}, MA.prototype.off = MA.prototype.removeListener = MA.prototype.removeAllListeners = MA.prototype.removeEventListener = function(e, A) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var t, r = this._callbacks["$" + e];
  if (!r)
    return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + e], this;
  for (var a = 0; a < r.length; a++)
    if ((t = r[a]) === A || t.fn === A) {
      r.splice(a, 1);
      break;
    }
  return r.length === 0 && delete this._callbacks["$" + e], this;
}, MA.prototype.emit = function(e) {
  this._callbacks = this._callbacks || {};
  for (var A = new Array(arguments.length - 1), t = this._callbacks["$" + e], r = 1; r < arguments.length; r++)
    A[r - 1] = arguments[r];
  if (t) {
    r = 0;
    for (var a = (t = t.slice(0)).length; r < a; ++r)
      t[r].apply(this, A);
  }
  return this;
}, MA.prototype.emitReserved = MA.prototype.emit, MA.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
}, MA.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const se = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
function ec(e, ...A) {
  return A.reduce((t, r) => (e.hasOwnProperty(r) && (t[r] = e[r]), t), {});
}
const fh = se.setTimeout, ph = se.clearTimeout;
function Er(e, A) {
  A.useNativeTimers ? (e.setTimeoutFn = fh.bind(se), e.clearTimeoutFn = ph.bind(se)) : (e.setTimeoutFn = se.setTimeout.bind(se), e.clearTimeoutFn = se.clearTimeout.bind(se));
}
class Bh extends Error {
  constructor(A, t, r) {
    super(A), this.description = t, this.context = r, this.type = "TransportError";
  }
}
class Xr extends MA {
  constructor(A) {
    super(), this.writable = !1, Er(this, A), this.opts = A, this.query = A.query, this.socket = A.socket;
  }
  onError(A, t, r) {
    return super.emitReserved("error", new Bh(A, t, r)), this;
  }
  open() {
    return this.readyState = "opening", this.doOpen(), this;
  }
  close() {
    return this.readyState !== "opening" && this.readyState !== "open" || (this.doClose(), this.onClose()), this;
  }
  send(A) {
    this.readyState === "open" && this.write(A);
  }
  onOpen() {
    this.readyState = "open", this.writable = !0, super.emitReserved("open");
  }
  onData(A) {
    const t = kn(A, this.socket.binaryType);
    this.onPacket(t);
  }
  onPacket(A) {
    super.emitReserved("packet", A);
  }
  onClose(A) {
    this.readyState = "closed", super.emitReserved("close", A);
  }
  pause(A) {
  }
  createUri(A, t = {}) {
    return A + "://" + this._hostname() + this._port() + this.opts.path + this._query(t);
  }
  _hostname() {
    const A = this.opts.hostname;
    return A.indexOf(":") === -1 ? A : "[" + A + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(A) {
    const t = function(r) {
      let a = "";
      for (let f in r)
        r.hasOwnProperty(f) && (a.length && (a += "&"), a += encodeURIComponent(f) + "=" + encodeURIComponent(r[f]));
      return a;
    }(A);
    return t.length ? "?" + t : "";
  }
}
const tc = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), xn = 64, mh = {};
let uo, go = 0, ki = 0;
function fo(e) {
  let A = "";
  do
    A = tc[e % xn] + A, e = Math.floor(e / xn);
  while (e > 0);
  return A;
}
function po() {
  const e = fo(+/* @__PURE__ */ new Date());
  return e !== uo ? (go = 0, uo = e) : e + "." + fo(go++);
}
for (; ki < xn; ki++)
  mh[tc[ki]] = ki;
let ic = !1;
try {
  ic = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const wh = ic;
function rc(e) {
  const A = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!A || wh))
      return new XMLHttpRequest();
  } catch {
  }
  if (!A)
    try {
      return new se[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function Ch() {
}
const vh = new rc({ xdomain: !1 }).responseType != null;
class Ce extends MA {
  constructor(A, t) {
    super(), Er(this, t), this.opts = t, this.method = t.method || "GET", this.uri = A, this.data = t.data !== void 0 ? t.data : null, this.create();
  }
  create() {
    var A;
    const t = ec(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    t.xdomain = !!this.opts.xd;
    const r = this.xhr = new rc(t);
    try {
      r.open(this.method, this.uri, !0);
      try {
        if (this.opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let a in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(a) && r.setRequestHeader(a, this.opts.extraHeaders[a]);
        }
      } catch {
      }
      if (this.method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (A = this.opts.cookieJar) === null || A === void 0 || A.addCookies(r), "withCredentials" in r && (r.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (r.timeout = this.opts.requestTimeout), r.onreadystatechange = () => {
        var a;
        r.readyState === 3 && ((a = this.opts.cookieJar) === null || a === void 0 || a.parseCookies(r)), r.readyState === 4 && (r.status === 200 || r.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
          this.onError(typeof r.status == "number" ? r.status : 0);
        }, 0));
      }, r.send(this.data);
    } catch (a) {
      return void this.setTimeoutFn(() => {
        this.onError(a);
      }, 0);
    }
    typeof document < "u" && (this.index = Ce.requestsCount++, Ce.requests[this.index] = this);
  }
  onError(A) {
    this.emitReserved("error", A, this.xhr), this.cleanup(!0);
  }
  cleanup(A) {
    if (this.xhr !== void 0 && this.xhr !== null) {
      if (this.xhr.onreadystatechange = Ch, A)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Ce.requests[this.index], this.xhr = null;
    }
  }
  onLoad() {
    const A = this.xhr.responseText;
    A !== null && (this.emitReserved("data", A), this.emitReserved("success"), this.cleanup());
  }
  abort() {
    this.cleanup();
  }
}
Ce.requestsCount = 0, Ce.requests = {}, typeof document < "u" && (typeof attachEvent == "function" ? attachEvent("onunload", Bo) : typeof addEventListener == "function" && addEventListener("onpagehide" in se ? "pagehide" : "unload", Bo, !1));
function Bo() {
  for (let e in Ce.requests)
    Ce.requests.hasOwnProperty(e) && Ce.requests[e].abort();
}
const Fn = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, A) => A(e, 0), xi = se.WebSocket || se.MozWebSocket, mo = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative", yh = { websocket: class extends Xr {
  constructor(e) {
    super(e), this.supportsBinary = !e.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check())
      return;
    const e = this.uri(), A = this.opts.protocols, t = mo ? {} : ec(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (t.headers = this.opts.extraHeaders);
    try {
      this.ws = mo ? new xi(e, A, t) : A ? new xi(e, A) : new xi(e);
    } catch (r) {
      return this.emitReserved("error", r);
    }
    this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
  }
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (e) => this.onClose({ description: "websocket connection closed", context: e }), this.ws.onmessage = (e) => this.onData(e.data), this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  write(e) {
    this.writable = !1;
    for (let A = 0; A < e.length; A++) {
      const t = e[A], r = A === e.length - 1;
      Qn(t, this.supportsBinary, (a) => {
        try {
          this.ws.send(a);
        } catch {
        }
        r && Fn(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    this.ws !== void 0 && (this.ws.close(), this.ws = null);
  }
  uri() {
    const e = this.opts.secure ? "wss" : "ws", A = this.query || {};
    return this.opts.timestampRequests && (A[this.opts.timestampParam] = po()), this.supportsBinary || (A.b64 = 1), this.createUri(e, A);
  }
  check() {
    return !!xi;
  }
}, webtransport: class extends Xr {
  get name() {
    return "webtransport";
  }
  doOpen() {
    typeof WebTransport == "function" && (this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]), this.transport.closed.then(() => {
      this.onClose();
    }).catch((e) => {
      this.onError("webtransport error", e);
    }), this.transport.ready.then(() => {
      this.transport.createBidirectionalStream().then((e) => {
        const A = function(B, w) {
          Jr || (Jr = new TextDecoder());
          const C = [];
          let Q = 0, y = -1, x = !1;
          return new TransformStream({ transform(E, _) {
            for (C.push(E); ; ) {
              if (Q === 0) {
                if (bi(C) < 1)
                  break;
                const S = Qi(C, 1);
                x = !(128 & ~S[0]), y = 127 & S[0], Q = y < 126 ? 3 : y === 126 ? 1 : 2;
              } else if (Q === 1) {
                if (bi(C) < 2)
                  break;
                const S = Qi(C, 2);
                y = new DataView(S.buffer, S.byteOffset, S.length).getUint16(0), Q = 3;
              } else if (Q === 2) {
                if (bi(C) < 8)
                  break;
                const S = Qi(C, 8), D = new DataView(S.buffer, S.byteOffset, S.length), m = D.getUint32(0);
                if (m > Math.pow(2, 21) - 1) {
                  _.enqueue(bn);
                  break;
                }
                y = m * Math.pow(2, 32) + D.getUint32(4), Q = 3;
              } else {
                if (bi(C) < y)
                  break;
                const S = Qi(C, y);
                _.enqueue(kn(x ? S : Jr.decode(S), w)), Q = 0;
              }
              if (y === 0 || y > B) {
                _.enqueue(bn);
                break;
              }
            }
          } });
        }(Number.MAX_SAFE_INTEGER, this.socket.binaryType), t = e.readable.pipeThrough(A).getReader(), r = gh();
        r.readable.pipeTo(e.writable), this.writer = r.writable.getWriter();
        const a = () => {
          t.read().then(({ done: B, value: w }) => {
            B || (this.onPacket(w), a());
          }).catch((B) => {
          });
        };
        a();
        const f = { type: "open" };
        this.query.sid && (f.data = `{"sid":"${this.query.sid}"}`), this.writer.write(f).then(() => this.onOpen());
      });
    }));
  }
  write(e) {
    this.writable = !1;
    for (let A = 0; A < e.length; A++) {
      const t = e[A], r = A === e.length - 1;
      this.writer.write(t).then(() => {
        r && Fn(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var e;
    (e = this.transport) === null || e === void 0 || e.close();
  }
}, polling: class extends Xr {
  constructor(e) {
    if (super(e), this.polling = !1, typeof location < "u") {
      const t = location.protocol === "https:";
      let r = location.port;
      r || (r = t ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || r !== e.port;
    }
    const A = e && e.forceBase64;
    this.supportsBinary = vh && !A, this.opts.withCredentials && (this.cookieJar = void 0);
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this.poll();
  }
  pause(e) {
    this.readyState = "pausing";
    const A = () => {
      this.readyState = "paused", e();
    };
    if (this.polling || !this.writable) {
      let t = 0;
      this.polling && (t++, this.once("pollComplete", function() {
        --t || A();
      })), this.writable || (t++, this.once("drain", function() {
        --t || A();
      }));
    } else
      A();
  }
  poll() {
    this.polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  onData(e) {
    ((A, t) => {
      const r = A.split(ho), a = [];
      for (let f = 0; f < r.length; f++) {
        const B = kn(r[f], t);
        if (a.push(B), B.type === "error")
          break;
      }
      return a;
    })(e, this.socket.binaryType).forEach((A) => {
      if (this.readyState === "opening" && A.type === "open" && this.onOpen(), A.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(A);
    }), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
  }
  doClose() {
    const e = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? e() : this.once("open", e);
  }
  write(e) {
    this.writable = !1, ((A, t) => {
      const r = A.length, a = new Array(r);
      let f = 0;
      A.forEach((B, w) => {
        Qn(B, !1, (C) => {
          a[w] = C, ++f === r && t(a.join(ho));
        });
      });
    })(e, (A) => {
      this.doWrite(A, () => {
        this.writable = !0, this.emitReserved("drain");
      });
    });
  }
  uri() {
    const e = this.opts.secure ? "https" : "http", A = this.query || {};
    return this.opts.timestampRequests !== !1 && (A[this.opts.timestampParam] = po()), this.supportsBinary || A.sid || (A.b64 = 1), this.createUri(e, A);
  }
  request(e = {}) {
    return Object.assign(e, { xd: this.xd, cookieJar: this.cookieJar }, this.opts), new Ce(this.uri(), e);
  }
  doWrite(e, A) {
    const t = this.request({ method: "POST", data: e });
    t.on("success", A), t.on("error", (r, a) => {
      this.onError("xhr post error", r, a);
    });
  }
  doPoll() {
    const e = this.request();
    e.on("data", this.onData.bind(this)), e.on("error", (A, t) => {
      this.onError("xhr poll error", A, t);
    }), this.pollXhr = e;
  }
} }, bh = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Qh = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function Un(e) {
  if (e.length > 2e3)
    throw "URI too long";
  const A = e, t = e.indexOf("["), r = e.indexOf("]");
  t != -1 && r != -1 && (e = e.substring(0, t) + e.substring(t, r).replace(/:/g, ";") + e.substring(r, e.length));
  let a = bh.exec(e || ""), f = {}, B = 14;
  for (; B--; )
    f[Qh[B]] = a[B] || "";
  return t != -1 && r != -1 && (f.source = A, f.host = f.host.substring(1, f.host.length - 1).replace(/;/g, ":"), f.authority = f.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), f.ipv6uri = !0), f.pathNames = function(w, C) {
    const Q = /\/{2,9}/g, y = C.replace(Q, "/").split("/");
    return C.slice(0, 1) != "/" && C.length !== 0 || y.splice(0, 1), C.slice(-1) == "/" && y.splice(y.length - 1, 1), y;
  }(0, f.path), f.queryKey = function(w, C) {
    const Q = {};
    return C.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(y, x, E) {
      x && (Q[x] = E);
    }), Q;
  }(0, f.query), f;
}
let nc = class Bt extends MA {
  constructor(A, t = {}) {
    super(), this.binaryType = "arraybuffer", this.writeBuffer = [], A && typeof A == "object" && (t = A, A = null), A ? (A = Un(A), t.hostname = A.host, t.secure = A.protocol === "https" || A.protocol === "wss", t.port = A.port, A.query && (t.query = A.query)) : t.host && (t.hostname = Un(t.host).host), Er(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = t.transports || ["polling", "websocket", "webtransport"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({ path: "/engine.io", agent: !1, withCredentials: !1, upgrade: !0, timestampParam: "t", rememberUpgrade: !1, addTrailingSlash: !0, rejectUnauthorized: !0, perMessageDeflate: { threshold: 1024 }, transportOptions: {}, closeOnBeforeunload: !1 }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = function(r) {
      let a = {}, f = r.split("&");
      for (let B = 0, w = f.length; B < w; B++) {
        let C = f[B].split("=");
        a[decodeURIComponent(C[0])] = decodeURIComponent(C[1]);
      }
      return a;
    }(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this.beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this.offlineEventListener = () => {
      this.onClose("transport close", { description: "network connection lost" });
    }, addEventListener("offline", this.offlineEventListener, !1))), this.open();
  }
  createTransport(A) {
    const t = Object.assign({}, this.opts.query);
    t.EIO = 4, t.transport = A, this.id && (t.sid = this.id);
    const r = Object.assign({}, this.opts, { query: t, socket: this, hostname: this.hostname, secure: this.secure, port: this.port }, this.opts.transportOptions[A]);
    return new yh[A](r);
  }
  open() {
    let A;
    if (this.opts.rememberUpgrade && Bt.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
      A = "websocket";
    else {
      if (this.transports.length === 0)
        return void this.setTimeoutFn(() => {
          this.emitReserved("error", "No transports available");
        }, 0);
      A = this.transports[0];
    }
    this.readyState = "opening";
    try {
      A = this.createTransport(A);
    } catch {
      return this.transports.shift(), void this.open();
    }
    A.open(), this.setTransport(A);
  }
  setTransport(A) {
    this.transport && this.transport.removeAllListeners(), this.transport = A, A.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (t) => this.onClose("transport close", t));
  }
  probe(A) {
    let t = this.createTransport(A), r = !1;
    Bt.priorWebsocketSuccess = !1;
    const a = () => {
      r || (t.send([{ type: "ping", data: "probe" }]), t.once("packet", (x) => {
        if (!r)
          if (x.type === "pong" && x.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", t), !t)
              return;
            Bt.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (y(), this.setTransport(t), t.send([{ type: "upgrade" }]), this.emitReserved("upgrade", t), t = null, this.upgrading = !1, this.flush());
            });
          } else {
            const E = new Error("probe error");
            E.transport = t.name, this.emitReserved("upgradeError", E);
          }
      }));
    };
    function f() {
      r || (r = !0, y(), t.close(), t = null);
    }
    const B = (x) => {
      const E = new Error("probe error: " + x);
      E.transport = t.name, f(), this.emitReserved("upgradeError", E);
    };
    function w() {
      B("transport closed");
    }
    function C() {
      B("socket closed");
    }
    function Q(x) {
      t && x.name !== t.name && f();
    }
    const y = () => {
      t.removeListener("open", a), t.removeListener("error", B), t.removeListener("close", w), this.off("close", C), this.off("upgrading", Q);
    };
    t.once("open", a), t.once("error", B), t.once("close", w), this.once("close", C), this.once("upgrading", Q), this.upgrades.indexOf("webtransport") !== -1 && A !== "webtransport" ? this.setTimeoutFn(() => {
      r || t.open();
    }, 200) : t.open();
  }
  onOpen() {
    if (this.readyState = "open", Bt.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
      let A = 0;
      const t = this.upgrades.length;
      for (; A < t; A++)
        this.probe(this.upgrades[A]);
    }
  }
  onPacket(A) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", A), this.emitReserved("heartbeat"), this.resetPingTimeout(), A.type) {
        case "open":
          this.onHandshake(JSON.parse(A.data));
          break;
        case "ping":
          this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
          break;
        case "error":
          const t = new Error("server error");
          t.code = A.data, this.onError(t);
          break;
        case "message":
          this.emitReserved("data", A.data), this.emitReserved("message", A.data);
      }
  }
  onHandshake(A) {
    this.emitReserved("handshake", A), this.id = A.sid, this.transport.query.sid = A.sid, this.upgrades = this.filterUpgrades(A.upgrades), this.pingInterval = A.pingInterval, this.pingTimeout = A.pingTimeout, this.maxPayload = A.maxPayload, this.onOpen(), this.readyState !== "closed" && this.resetPingTimeout();
  }
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref();
  }
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const A = this.getWritablePackets();
      this.transport.send(A), this.prevBufferLen = A.length, this.emitReserved("flush");
    }
  }
  getWritablePackets() {
    if (!(this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let A = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const a = this.writeBuffer[r].data;
      if (a && (A += typeof (t = a) == "string" ? function(f) {
        let B = 0, w = 0;
        for (let C = 0, Q = f.length; C < Q; C++)
          B = f.charCodeAt(C), B < 128 ? w += 1 : B < 2048 ? w += 2 : B < 55296 || B >= 57344 ? w += 3 : (C++, w += 4);
        return w;
      }(t) : Math.ceil(1.33 * (t.byteLength || t.size))), r > 0 && A > this.maxPayload)
        return this.writeBuffer.slice(0, r);
      A += 2;
    }
    var t;
    return this.writeBuffer;
  }
  write(A, t, r) {
    return this.sendPacket("message", A, t, r), this;
  }
  send(A, t, r) {
    return this.sendPacket("message", A, t, r), this;
  }
  sendPacket(A, t, r, a) {
    if (typeof t == "function" && (a = t, t = void 0), typeof r == "function" && (a = r, r = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    (r = r || {}).compress = r.compress !== !1;
    const f = { type: A, data: t, options: r };
    this.emitReserved("packetCreate", f), this.writeBuffer.push(f), a && this.once("flush", a), this.flush();
  }
  close() {
    const A = () => {
      this.onClose("forced close"), this.transport.close();
    }, t = () => {
      this.off("upgrade", t), this.off("upgradeError", t), A();
    }, r = () => {
      this.once("upgrade", t), this.once("upgradeError", t);
    };
    return this.readyState !== "opening" && this.readyState !== "open" || (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? r() : A();
    }) : this.upgrading ? r() : A()), this;
  }
  onError(A) {
    Bt.priorWebsocketSuccess = !1, this.emitReserved("error", A), this.onClose("transport error", A);
  }
  onClose(A, t) {
    this.readyState !== "opening" && this.readyState !== "open" && this.readyState !== "closing" || (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", A, t), this.writeBuffer = [], this.prevBufferLen = 0);
  }
  filterUpgrades(A) {
    const t = [];
    let r = 0;
    const a = A.length;
    for (; r < a; r++)
      ~this.transports.indexOf(A[r]) && t.push(A[r]);
    return t;
  }
};
nc.protocol = 4;
const kh = typeof ArrayBuffer == "function", xh = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, sc = Object.prototype.toString, Fh = typeof Blob == "function" || typeof Blob < "u" && sc.call(Blob) === "[object BlobConstructor]", Uh = typeof File == "function" || typeof File < "u" && sc.call(File) === "[object FileConstructor]";
function ls(e) {
  return kh && (e instanceof ArrayBuffer || xh(e)) || Fh && e instanceof Blob || Uh && e instanceof File;
}
function Ar(e, A) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let t = 0, r = e.length; t < r; t++)
      if (Ar(e[t]))
        return !0;
    return !1;
  }
  if (ls(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return Ar(e.toJSON(), !0);
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && Ar(e[t]))
      return !0;
  return !1;
}
function Eh(e) {
  const A = [], t = e.data, r = e;
  return r.data = En(t, A), r.attachments = A.length, { packet: r, buffers: A };
}
function En(e, A) {
  if (!e)
    return e;
  if (ls(e)) {
    const t = { _placeholder: !0, num: A.length };
    return A.push(e), t;
  }
  if (Array.isArray(e)) {
    const t = new Array(e.length);
    for (let r = 0; r < e.length; r++)
      t[r] = En(e[r], A);
    return t;
  }
  if (typeof e == "object" && !(e instanceof Date)) {
    const t = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (t[r] = En(e[r], A));
    return t;
  }
  return e;
}
function Sh(e, A) {
  return e.data = Sn(e.data, A), delete e.attachments, e;
}
function Sn(e, A) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < A.length)
      return A[e.num];
    throw new Error("illegal attachments");
  }
  if (Array.isArray(e))
    for (let t = 0; t < e.length; t++)
      e[t] = Sn(e[t], A);
  else if (typeof e == "object")
    for (const t in e)
      Object.prototype.hasOwnProperty.call(e, t) && (e[t] = Sn(e[t], A));
  return e;
}
const Ih = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
var BA;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(BA || (BA = {}));
function wo(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class hs extends MA {
  constructor(A) {
    super(), this.reviver = A;
  }
  add(A) {
    let t;
    if (typeof A == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      t = this.decodeString(A);
      const r = t.type === BA.BINARY_EVENT;
      r || t.type === BA.BINARY_ACK ? (t.type = r ? BA.EVENT : BA.ACK, this.reconstructor = new Th(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t);
    } else {
      if (!ls(A) && !A.base64)
        throw new Error("Unknown type: " + A);
      if (!this.reconstructor)
        throw new Error("got binary data when not reconstructing a packet");
      t = this.reconstructor.takeBinaryData(A), t && (this.reconstructor = null, super.emitReserved("decoded", t));
    }
  }
  decodeString(A) {
    let t = 0;
    const r = { type: Number(A.charAt(0)) };
    if (BA[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === BA.BINARY_EVENT || r.type === BA.BINARY_ACK) {
      const f = t + 1;
      for (; A.charAt(++t) !== "-" && t != A.length; )
        ;
      const B = A.substring(f, t);
      if (B != Number(B) || A.charAt(t) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(B);
    }
    if (A.charAt(t + 1) === "/") {
      const f = t + 1;
      for (; ++t && !(A.charAt(t) === "," || t === A.length); )
        ;
      r.nsp = A.substring(f, t);
    } else
      r.nsp = "/";
    const a = A.charAt(t + 1);
    if (a !== "" && Number(a) == a) {
      const f = t + 1;
      for (; ++t; ) {
        const B = A.charAt(t);
        if (B == null || Number(B) != B) {
          --t;
          break;
        }
        if (t === A.length)
          break;
      }
      r.id = Number(A.substring(f, t + 1));
    }
    if (A.charAt(++t)) {
      const f = this.tryParse(A.substr(t));
      if (!hs.isPayloadValid(r.type, f))
        throw new Error("invalid payload");
      r.data = f;
    }
    return r;
  }
  tryParse(A) {
    try {
      return JSON.parse(A, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(A, t) {
    switch (A) {
      case BA.CONNECT:
        return wo(t);
      case BA.DISCONNECT:
        return t === void 0;
      case BA.CONNECT_ERROR:
        return typeof t == "string" || wo(t);
      case BA.EVENT:
      case BA.BINARY_EVENT:
        return Array.isArray(t) && (typeof t[0] == "number" || typeof t[0] == "string" && Ih.indexOf(t[0]) === -1);
      case BA.ACK:
      case BA.BINARY_ACK:
        return Array.isArray(t);
    }
  }
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class Th {
  constructor(A) {
    this.packet = A, this.buffers = [], this.reconPack = A;
  }
  takeBinaryData(A) {
    if (this.buffers.push(A), this.buffers.length === this.reconPack.attachments) {
      const t = Sh(this.reconPack, this.buffers);
      return this.finishedReconstruction(), t;
    }
    return null;
  }
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
}
const _h = Object.freeze(Object.defineProperty({ __proto__: null, Decoder: hs, Encoder: class {
  constructor(e) {
    this.replacer = e;
  }
  encode(e) {
    return e.type !== BA.EVENT && e.type !== BA.ACK || !Ar(e) ? [this.encodeAsString(e)] : this.encodeAsBinary({ type: e.type === BA.EVENT ? BA.BINARY_EVENT : BA.BINARY_ACK, nsp: e.nsp, data: e.data, id: e.id });
  }
  encodeAsString(e) {
    let A = "" + e.type;
    return e.type !== BA.BINARY_EVENT && e.type !== BA.BINARY_ACK || (A += e.attachments + "-"), e.nsp && e.nsp !== "/" && (A += e.nsp + ","), e.id != null && (A += e.id), e.data != null && (A += JSON.stringify(e.data, this.replacer)), A;
  }
  encodeAsBinary(e) {
    const A = Eh(e), t = this.encodeAsString(A.packet), r = A.buffers;
    return r.unshift(t), r;
  }
}, get PacketType() {
  return BA;
}, protocol: 5 }, Symbol.toStringTag, { value: "Module" }));
function he(e, A, t) {
  return e.on(A, t), function() {
    e.off(A, t);
  };
}
const Lh = Object.freeze({ connect: 1, connect_error: 1, disconnect: 1, disconnecting: 1, newListener: 1, removeListener: 1 });
class oc extends MA {
  constructor(A, t, r) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = A, this.nsp = t, r && r.auth && (this.auth = r.auth), this._opts = Object.assign({}, r), this.io._autoConnect && this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs)
      return;
    const A = this.io;
    this.subs = [he(A, "open", this.onopen.bind(this)), he(A, "packet", this.onpacket.bind(this)), he(A, "error", this.onerror.bind(this)), he(A, "close", this.onclose.bind(this))];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return this.connected || (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen()), this;
  }
  open() {
    return this.connect();
  }
  send(...A) {
    return A.unshift("message"), this.emit.apply(this, A), this;
  }
  emit(A, ...t) {
    if (Lh.hasOwnProperty(A))
      throw new Error('"' + A.toString() + '" is a reserved event name');
    if (t.unshift(A), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(t), this;
    const r = { type: BA.EVENT, data: t, options: {} };
    if (r.options.compress = this.flags.compress !== !1, typeof t[t.length - 1] == "function") {
      const f = this.ids++, B = t.pop();
      this._registerAckCallback(f, B), r.id = f;
    }
    const a = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    return this.flags.volatile && (!a || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(r), this.packet(r)) : this.sendBuffer.push(r)), this.flags = {}, this;
  }
  _registerAckCallback(A, t) {
    var r;
    const a = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
    if (a === void 0)
      return void (this.acks[A] = t);
    const f = this.io.setTimeoutFn(() => {
      delete this.acks[A];
      for (let w = 0; w < this.sendBuffer.length; w++)
        this.sendBuffer[w].id === A && this.sendBuffer.splice(w, 1);
      t.call(this, new Error("operation has timed out"));
    }, a), B = (...w) => {
      this.io.clearTimeoutFn(f), t.apply(this, w);
    };
    B.withError = !0, this.acks[A] = B;
  }
  emitWithAck(A, ...t) {
    return new Promise((r, a) => {
      const f = (B, w) => B ? a(B) : r(w);
      f.withError = !0, t.push(f), this.emit(A, ...t);
    });
  }
  _addToQueue(A) {
    let t;
    typeof A[A.length - 1] == "function" && (t = A.pop());
    const r = { id: this._queueSeq++, tryCount: 0, pending: !1, args: A, flags: Object.assign({ fromQueue: !0 }, this.flags) };
    A.push((a, ...f) => {
      if (r === this._queue[0])
        return a !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), t && t(a)) : (this._queue.shift(), t && t(null, ...f)), r.pending = !1, this._drainQueue();
    }), this._queue.push(r), this._drainQueue();
  }
  _drainQueue(A = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const t = this._queue[0];
    t.pending && !A || (t.pending = !0, t.tryCount++, this.flags = t.flags, this.emit.apply(this, t.args));
  }
  packet(A) {
    A.nsp = this.nsp, this.io._packet(A);
  }
  onopen() {
    typeof this.auth == "function" ? this.auth((A) => {
      this._sendConnectPacket(A);
    }) : this._sendConnectPacket(this.auth);
  }
  _sendConnectPacket(A) {
    this.packet({ type: BA.CONNECT, data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, A) : A });
  }
  onerror(A) {
    this.connected || this.emitReserved("connect_error", A);
  }
  onclose(A, t) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", A, t), this._clearAcks();
  }
  _clearAcks() {
    Object.keys(this.acks).forEach((A) => {
      if (!this.sendBuffer.some((t) => String(t.id) === A)) {
        const t = this.acks[A];
        delete this.acks[A], t.withError && t.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  onpacket(A) {
    if (A.nsp === this.nsp)
      switch (A.type) {
        case BA.CONNECT:
          A.data && A.data.sid ? this.onconnect(A.data.sid, A.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case BA.EVENT:
        case BA.BINARY_EVENT:
          this.onevent(A);
          break;
        case BA.ACK:
        case BA.BINARY_ACK:
          this.onack(A);
          break;
        case BA.DISCONNECT:
          this.ondisconnect();
          break;
        case BA.CONNECT_ERROR:
          this.destroy();
          const t = new Error(A.data.message);
          t.data = A.data.data, this.emitReserved("connect_error", t);
      }
  }
  onevent(A) {
    const t = A.data || [];
    A.id != null && t.push(this.ack(A.id)), this.connected ? this.emitEvent(t) : this.receiveBuffer.push(Object.freeze(t));
  }
  emitEvent(A) {
    if (this._anyListeners && this._anyListeners.length) {
      const t = this._anyListeners.slice();
      for (const r of t)
        r.apply(this, A);
    }
    super.emit.apply(this, A), this._pid && A.length && typeof A[A.length - 1] == "string" && (this._lastOffset = A[A.length - 1]);
  }
  ack(A) {
    const t = this;
    let r = !1;
    return function(...a) {
      r || (r = !0, t.packet({ type: BA.ACK, id: A, data: a }));
    };
  }
  onack(A) {
    const t = this.acks[A.id];
    typeof t == "function" && (delete this.acks[A.id], t.withError && A.data.unshift(null), t.apply(this, A.data));
  }
  onconnect(A, t) {
    this.id = A, this.recovered = t && this._pid === t, this._pid = t, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  emitBuffered() {
    this.receiveBuffer.forEach((A) => this.emitEvent(A)), this.receiveBuffer = [], this.sendBuffer.forEach((A) => {
      this.notifyOutgoingListeners(A), this.packet(A);
    }), this.sendBuffer = [];
  }
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  destroy() {
    this.subs && (this.subs.forEach((A) => A()), this.subs = void 0), this.io._destroy(this);
  }
  disconnect() {
    return this.connected && this.packet({ type: BA.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  close() {
    return this.disconnect();
  }
  compress(A) {
    return this.flags.compress = A, this;
  }
  get volatile() {
    return this.flags.volatile = !0, this;
  }
  timeout(A) {
    return this.flags.timeout = A, this;
  }
  onAny(A) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(A), this;
  }
  prependAny(A) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(A), this;
  }
  offAny(A) {
    if (!this._anyListeners)
      return this;
    if (A) {
      const t = this._anyListeners;
      for (let r = 0; r < t.length; r++)
        if (A === t[r])
          return t.splice(r, 1), this;
    } else
      this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(A) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(A), this;
  }
  prependAnyOutgoing(A) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(A), this;
  }
  offAnyOutgoing(A) {
    if (!this._anyOutgoingListeners)
      return this;
    if (A) {
      const t = this._anyOutgoingListeners;
      for (let r = 0; r < t.length; r++)
        if (A === t[r])
          return t.splice(r, 1), this;
    } else
      this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(A) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const t = this._anyOutgoingListeners.slice();
      for (const r of t)
        r.apply(this, A.data);
    }
  }
}
function mt(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
mt.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var A = Math.random(), t = Math.floor(A * this.jitter * e);
    e = 1 & Math.floor(10 * A) ? e + t : e - t;
  }
  return 0 | Math.min(e, this.max);
}, mt.prototype.reset = function() {
  this.attempts = 0;
}, mt.prototype.setMin = function(e) {
  this.ms = e;
}, mt.prototype.setMax = function(e) {
  this.max = e;
}, mt.prototype.setJitter = function(e) {
  this.jitter = e;
};
class In extends MA {
  constructor(A, t) {
    var r;
    super(), this.nsps = {}, this.subs = [], A && typeof A == "object" && (t = A, A = void 0), (t = t || {}).path = t.path || "/socket.io", this.opts = t, Er(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((r = t.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new mt({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this._readyState = "closed", this.uri = A;
    const a = t.parser || _h;
    this.encoder = new a.Encoder(), this.decoder = new a.Decoder(), this._autoConnect = t.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(A) {
    return arguments.length ? (this._reconnection = !!A, this) : this._reconnection;
  }
  reconnectionAttempts(A) {
    return A === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = A, this);
  }
  reconnectionDelay(A) {
    var t;
    return A === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = A, (t = this.backoff) === null || t === void 0 || t.setMin(A), this);
  }
  randomizationFactor(A) {
    var t;
    return A === void 0 ? this._randomizationFactor : (this._randomizationFactor = A, (t = this.backoff) === null || t === void 0 || t.setJitter(A), this);
  }
  reconnectionDelayMax(A) {
    var t;
    return A === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = A, (t = this.backoff) === null || t === void 0 || t.setMax(A), this);
  }
  timeout(A) {
    return arguments.length ? (this._timeout = A, this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
  }
  open(A) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new nc(this.uri, this.opts);
    const t = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const a = he(t, "open", function() {
      r.onopen(), A && A();
    }), f = (w) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", w), A ? A(w) : this.maybeReconnectOnOpen();
    }, B = he(t, "error", f);
    if (this._timeout !== !1) {
      const w = this._timeout, C = this.setTimeoutFn(() => {
        a(), f(new Error("timeout")), t.close();
      }, w);
      this.opts.autoUnref && C.unref(), this.subs.push(() => {
        this.clearTimeoutFn(C);
      });
    }
    return this.subs.push(a), this.subs.push(B), this;
  }
  connect(A) {
    return this.open(A);
  }
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const A = this.engine;
    this.subs.push(he(A, "ping", this.onping.bind(this)), he(A, "data", this.ondata.bind(this)), he(A, "error", this.onerror.bind(this)), he(A, "close", this.onclose.bind(this)), he(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(A) {
    try {
      this.decoder.add(A);
    } catch (t) {
      this.onclose("parse error", t);
    }
  }
  ondecoded(A) {
    Fn(() => {
      this.emitReserved("packet", A);
    }, this.setTimeoutFn);
  }
  onerror(A) {
    this.emitReserved("error", A);
  }
  socket(A, t) {
    let r = this.nsps[A];
    return r ? this._autoConnect && !r.active && r.connect() : (r = new oc(this, A, t), this.nsps[A] = r), r;
  }
  _destroy(A) {
    const t = Object.keys(this.nsps);
    for (const r of t)
      if (this.nsps[r].active)
        return;
    this._close();
  }
  _packet(A) {
    const t = this.encoder.encode(A);
    for (let r = 0; r < t.length; r++)
      this.engine.write(t[r], A.options);
  }
  cleanup() {
    this.subs.forEach((A) => A()), this.subs.length = 0, this.decoder.destroy();
  }
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close();
  }
  disconnect() {
    return this._close();
  }
  onclose(A, t) {
    this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", A, t), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const A = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const t = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        A.skipReconnect || (this.emitReserved("reconnect_attempt", A.backoff.attempts), A.skipReconnect || A.open((a) => {
          a ? (A._reconnecting = !1, A.reconnect(), this.emitReserved("reconnect_error", a)) : A.onreconnect();
        }));
      }, t);
      this.opts.autoUnref && r.unref(), this.subs.push(() => {
        this.clearTimeoutFn(r);
      });
    }
  }
  onreconnect() {
    const A = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", A);
  }
}
const Rt = {};
function er(e, A) {
  typeof e == "object" && (A = e, e = void 0);
  const t = function(C, Q = "", y) {
    let x = C;
    y = y || typeof location < "u" && location, C == null && (C = y.protocol + "//" + y.host), typeof C == "string" && (C.charAt(0) === "/" && (C = C.charAt(1) === "/" ? y.protocol + C : y.host + C), /^(https?|wss?):\/\//.test(C) || (C = y !== void 0 ? y.protocol + "//" + C : "https://" + C), x = Un(C)), x.port || (/^(http|ws)$/.test(x.protocol) ? x.port = "80" : /^(http|ws)s$/.test(x.protocol) && (x.port = "443")), x.path = x.path || "/";
    const E = x.host.indexOf(":") !== -1 ? "[" + x.host + "]" : x.host;
    return x.id = x.protocol + "://" + E + ":" + x.port + Q, x.href = x.protocol + "://" + E + (y && y.port === x.port ? "" : ":" + x.port), x;
  }(e, (A = A || {}).path || "/socket.io"), r = t.source, a = t.id, f = t.path, B = Rt[a] && f in Rt[a].nsps;
  let w;
  return A.forceNew || A["force new connection"] || A.multiplex === !1 || B ? w = new In(r, A) : (Rt[a] || (Rt[a] = new In(r, A)), w = Rt[a]), t.query && !A.query && (A.query = t.queryKey), w.socket(t.path, A);
}
Object.assign(er, { Manager: In, Socket: oc, io: er, connect: er });
class ac {
  constructor() {
    V(this, "observers", []);
    V(this, "addObserver", (A) => {
      this.observers.includes(A) || (this.observers.push(A), A());
    });
    V(this, "removeObserver", (A) => {
      const t = this.observers.indexOf(A);
      t > -1 && this.observers.splice(t, 1);
    });
    V(this, "notifyChange", () => this.observers.forEach((A) => A()));
  }
}
const Et = new ac();
function Co() {
  return new Promise((e, A) => {
    const t = [], r = indexedDB.open(kA, 4);
    r.onsuccess = function(a) {
      const f = a.target.result.transaction([_e], "readonly").objectStore(_e).openCursor();
      f.onsuccess = function(B) {
        const w = B.target.result;
        w ? (t.push({ id: w.value.id, screenshot: w.value.screenshot, created: w.value.created, title: w.value.title, type: w.value.type, lastActivity: w.value.lastActivity, syncedRead: w.value.syncedRead }), w.continue()) : e(t);
      }, f.onerror = function() {
        A("Error retrieving tickets from IndexedDB");
      };
    }, r.onerror = IA(A), r.onupgradeneeded = xA;
  });
}
function Vt(e) {
  return new Promise((A, t) => {
    const r = indexedDB.open(kA, 4);
    r.onsuccess = function(a) {
      const f = a.target.result.transaction([_e], "readonly").objectStore(_e).get(e);
      f.onsuccess = function(B) {
        const w = B.target.result;
        A(w);
      }, f.onerror = function() {
        t("Error retrieving ticket from IndexedDB");
      };
    }, r.onerror = IA(t), r.onupgradeneeded = xA;
  });
}
const Fi = (e) => new Promise((A, t) => {
  const r = indexedDB.open(kA, 4);
  r.onsuccess = function(a) {
    const f = a.target.result.transaction([_e], "readwrite"), B = f.objectStore(_e);
    e.forEach((w) => B.put(w)), f.oncomplete = () => {
      Et.notifyChange(), A("Tickets written successfully to IndexedDB");
    }, f.onerror = () => {
      t("Error writing tickets to IndexedDB");
    };
  }, r.onerror = IA(t), r.onupgradeneeded = xA;
}), fi = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20width='12'%20height='12'%20viewBox='0%200%2035%2035'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform='translate(-34,%20-89)'%3e%3cpath%20style='fill:%23EB5757'%20d='m%2067.852325,106.23797%20a%2016,16%200%200%201%20-16,16%2016,16%200%200%201%20-16,-16%2016,16%200%200%201%2016,-15.999997%2016,16%200%200%201%2016,15.999997%20z'/%3e%3c/g%3e%3c/svg%3e", rt = () => {
  const e = document.createElement("button");
  return e.classList.add("shake-sdk-button"), e;
}, KA = (e) => {
  const A = document.createElement("img");
  return A.draggable = !1, A.classList.add("shake-sdk-image"), e && (A.src = e), A;
}, je = (e) => {
  const A = document.createElement("p");
  return A.classList.add("shake-sdk-text-p1"), A.innerText = e, A;
}, Ie = (e) => {
  const A = document.createElement("p");
  return A.classList.add("shake-sdk-text-p3"), A.innerText = e, A;
}, Sr = (e) => {
  const A = document.createElement("p");
  return A.classList.add("shake-sdk-text-h2"), A.innerText = e, A;
}, vo = (e) => {
  const A = document.createElement("p");
  return A.classList.add("shake-sdk-text-button"), A.innerText = e, A;
}, cc = (e) => {
  const A = document.createElement("p");
  return A.classList.add("shake-sdk-text-accent-button"), A.innerText = e, A;
}, gA = async (e) => new CSSStyleSheet().replace(e), Ve = (e) => {
  (async () => await Promise.all([gA(".shake-sdk-bubble{padding:0;border-radius:100px;border-width:0;cursor:pointer;display:flex;align-items:center;justify-content:center;position:fixed;background-color:#fff;width:50px;height:50px;z-index:2147483647;transition:none}"), gA(".shake-sdk-button{background-color:var(--shake-sdk-color-accent);padding:9px 20px 11px;border-radius:var(--shake-sdk-border-radius-light);display:flex;justify-content:center;align-items:center;cursor:pointer;border:none}.shake-sdk-button:disabled{cursor:not-allowed;opacity:.3}"), gA(".shake-sdk-card{flex:1;background-color:var(--shake-sdk-bg-color-primary);border-radius:var(--shake-sdk-border-radius)}"), gA(".shake-sdk-circle-button{padding:0;border-radius:100px;border-width:0;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:5}.shake-sdk-circle-button img{width:32px;height:32px}.shake-sdk-circle-button:hover{opacity:.8}"), gA(".shake-sdk-bottom-navigation{display:flex;flex-direction:row;align-items:center;justify-content:center;border-top:1px solid var(--shake-sdk-bg-color-primary-highlight);padding-top:8px}.shake-sdk-bottom-navigation-hidden{display:none}.shake-sdk-bottom-navigation-button{position:relative;display:flex;flex-direction:column;background-color:transparent;border:none;cursor:pointer;align-items:center;justify-content:center;height:72px;width:72px;margin-right:24px;margin-left:24px;margin-bottom:2px}.shake-sdk-bottom-navigation-button:hover{opacity:.7}.shake-sdk-bottom-navigation-button-text{font-size:11px}.shake-sdk-bottom-navigation-notification-icon{position:absolute;left:22px;top:13px;visibility:hidden}.selected p{color:var(--shake-sdk-color-accent)}.selected svg path{stroke:var(--shake-sdk-color-accent)}@media only screen and (max-width: 1024px){.shake-sdk-bottom-navigation{display:none}}"), gA(""), gA(".shake-sdk-divider-vertical{height:100%;width:1px;background-color:var(--shake-sdk-bg-color-outline-inversed);margin:6px 10px}.shake-sdk-divider-horizontal{width:100%;height:1px;background-color:var(--shake-sdk-bg-color-outline-inversed);margin:6px 10px}"), gA(""), gA(".shake-sdk-list,.shake-sdk-list-items{display:flex;flex-direction:column;flex:1;overflow-y:scroll}.shake-sdk-list-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1}.shake-sdk-list-empty-img{font-size:14px;font-weight:500;line-height:18px;text-align:center;margin-bottom:8px}.shake-sdk-list-empty-text{font-size:14px;font-weight:500;line-height:18px;text-align:center}"), gA(".shake-sdk-context-menu{position:fixed;display:none;width:260px;z-index:2147483647;border-radius:10px;border-width:1px;border-color:var(--shake-sdk-bg-color-outline-inversed);padding:8px 0;background-color:var(--shake-sdk-bg-color-primary-inversed-highlight);box-shadow:0 2px 10px #1c1c1e}"), gA(".shake-sdk-context-menu-header{background-color:transparent;border:0;display:flex;width:100%;padding:8px 20px;cursor:pointer}.shake-sdk-context-menu-header-text{color:var(--shake-sdk-text-color-secondary);font-size:12px}"), gA(".shake-sdk-context-menu-item{background-color:transparent;border:0;display:flex;width:100%;padding:8px 20px;cursor:pointer}.shake-sdk-context-menu-item:hover{background-color:var(--shake-sdk-bg-color-outline-inversed)}.shake-sdk-context-menu-item img{width:20px;height:20px;margin-right:10px}.shake-sdk-context-menu-item p{color:var(--shake-sdk-text-color-popup-menu-item)}"), gA(".shake-sdk-select-dropdown{border-radius:var(--shake-sdk-border-radius-light);border:1px solid var(--shake-sdk-bg-color-primary-highlight);background:var(--shake-sdk-bg-color-secondary);padding:9px 18px 12px 12px;display:flex;flex-direction:column;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none;margin-bottom:12px}.shake-sdk-select-dropdown.active{border:1px solid var(--shake-sdk-color-accent)}.shake-sdk-dropdown-icon{position:absolute;right:16px;top:16px;cursor:pointer}.shake-sdk-select-dropdown-label{font-size:12px;color:var(--shake-sdk-text-color-secondary);font-family:Roobert,serif;-webkit-font-smoothing:antialiased;cursor:pointer;-webkit-user-select:none;user-select:none}.shake-sdk-select-dropdown-chosen{color:var(--shake-sdk-text-color-primary)}.shake-sdk-select-options{padding:8px 0;background:var(--shake-sdk-bg-color-secondary);border-radius:var(--shake-sdk-border-radius-light);border:1px solid var(--shake-sdk-bg-color-primary-highlight);list-style-type:none;display:none;position:absolute;width:333px;z-index:1}.shake-sdk-select-option{list-style-type:none;font-family:Roobert,serif;padding:10px 20px 12px 12px;cursor:pointer;color:var(--shake-sdk-text-color-primary);font-size:14px;font-weight:500}.shake-sdk-select-option:hover{background-color:var(--shake-sdk-bg-color-primary-highlight)}"), gA(".shake-sdk-palette{display:flex;flex-direction:row}.shake-sdk-palette-close{outline:none;border:none;background:transparent;height:20px;width:20px;margin-left:10px;margin-right:10px;padding:0}.shake-sdk-palette-close:hover{opacity:.7}"), gA(".shake-sdk-color-button{outline:none;border:none;background:transparent;border-radius:50%;height:20px;width:20px;margin-left:12px;margin-right:12px;padding:0}.shake-sdk-color-button:hover{opacity:.7}"), gA(".shake-sdk-sheet-background{position:fixed;top:0;left:0;width:100%;height:100%;z-index:2147483647;display:flex;flex-direction:column-reverse;background-color:#000000b3;box-sizing:border-box}.shake-sdk-sheet{padding:40px;display:flex;flex-direction:column;background-color:var(--shake-sdk-bg-color-primary);border-radius:var(--shake-sdk-border-radius) var(--shake-sdk-border-radius) 0 0}.shake-sdk-sheet>p{text-align:center;margin-bottom:25px}.shake-sdk-sheet-item{cursor:pointer;display:flex;flex-direction:row;background-color:transparent;border:0;padding:12px;margin:0}.shake-sdk-sheet-item:hover{background-color:var(--shake-sdk-bg-color-primary-highlight)}.shake-sdk-sheet-item img{text-align:center;margin-right:12px;width:27px;height:27px}"), gA(".shake-sdk-text-p1{font-size:16px;font-weight:500;line-height:20px;letter-spacing:0;color:var(--shake-sdk-text-color-primary);-webkit-font-smoothing:antialiased;margin:0}.shake-sdk-text-p2{font-size:14px;font-weight:500;line-height:18px;letter-spacing:0;color:var(--shake-sdk-text-color-secondary);-webkit-font-smoothing:antialiased;margin:0}.shake-sdk-text-p3{color:var(--shake-sdk-text-color-secondary);font-size:12px;font-weight:500;line-height:16px;letter-spacing:0;-webkit-font-smoothing:antialiased;margin:0}.shake-sdk-text-h2{font-size:24px;font-weight:700;line-height:32px;letter-spacing:0;color:var(--shake-sdk-text-color-primary);-webkit-font-smoothing:antialiased;margin:0}.shake-sdk-text-button{font-size:14px;font-weight:500;line-height:18px;letter-spacing:0;color:var(--shake-sdk-button-accent-text-color);-webkit-font-smoothing:antialiased;margin:0}.shake-sdk-text-accent-button{font-size:14px;font-weight:700;line-height:20px;letter-spacing:0;color:var(--shake-sdk-button-accent-text-color);-webkit-font-smoothing:antialiased;margin:0}.shake-sdk-text-tooltip{font-size:14px;font-weight:500;line-height:18px;letter-spacing:0;color:var(--shake-sdk-text-color-tooltip);-webkit-font-smoothing:antialiased;margin:0}"), gA(".shake-sdk-textarea-container{width:100%;flex-direction:column;position:relative;z-index:0;margin-bottom:12px}.shake-sdk-textarea{width:100%;background-color:transparent;border:1px solid var(--shake-sdk-bg-color-primary-highlight);border-radius:var(--shake-sdk-border-radius-light);font-family:Roobert,serif;padding:28px 12px 12px;resize:none;color:var(--shake-sdk-text-color-primary);font-size:16px;cursor:text;box-sizing:border-box;overflow:hidden}.shake-sdk-textarea:focus-visible{outline:none;border:1px solid var(--shake-sdk-color-accent)}.shake-sdk-textarea::placeholder{color:var(--shake-sdk-text-color-secondary)}.shake-sdk-textarea-error{border:1px solid var(--shake-sdk-color-error)!important}.shake-sdk-textarea-label{position:absolute;font-family:Roobert,serif;top:16px;left:2px;font-size:12px;color:var(--shake-sdk-text-color-secondary);pointer-events:none;transform-origin:top left;transform:translateY(-50%) translate(10px)}.shake-sdk-textarea-error-text{padding-left:10px;padding-top:3px;font-family:Roobert,serif;font-size:12px;color:var(--shake-sdk-color-error);pointer-events:none;display:none}.shake-sdk-textarea-required-icon{position:absolute;top:10px;right:10px;width:10px;height:10px}"), gA(".shake-sdk-input-container{width:100%;display:flex;flex-direction:column;position:relative;z-index:0;margin-bottom:12px}.shake-sdk-input{flex:1;background-color:transparent;border:1px solid var(--shake-sdk-bg-color-primary-highlight);border-radius:var(--shake-sdk-border-radius-light);font-family:Roobert,serif;padding:28px 12px 12px;resize:none;color:var(--shake-sdk-text-color-primary);font-size:16px}.shake-sdk-input:focus-visible{outline:none;border:1px solid var(--shake-sdk-color-accent)}.shake-sdk-input::placeholder{color:var(--shake-sdk-text-color-secondary)}.shake-sdk-input-error{border:1px solid var(--shake-sdk-color-error)!important}.shake-sdk-input-label{position:absolute;font-family:Roobert,serif;top:16px;left:2px;font-size:12px;color:var(--shake-sdk-text-color-secondary);pointer-events:none;transform-origin:top left;transform:translateY(-50%) translate(10px)}.shake-sdk-input-error-text{padding-left:10px;padding-top:3px;font-family:Roobert,serif;font-size:12px;color:var(--shake-sdk-color-error);pointer-events:none;display:none}.shake-sdk-input-required-icon{position:absolute;top:10px;right:10px;width:10px;height:10px}"), gA(".toast-notification{width:300px;max-height:min-content;margin-bottom:20px;opacity:1;margin-left:0;top:20px;right:20px;position:fixed;z-index:2147483647;display:flex;flex-direction:row;cursor:default;border:1px solid var(--shake-sdk-bg-color-outline-inversed);border-radius:var(--shake-sdk-border-radius-light);background:var(--shake-sdk-bg-color-primary-inversed-highlight);color:var(--shake-sdk-text-color-popup-menu-item);box-shadow:0 2px 10px var(--shake-sdk-bg-color-primary-inversed)}.message-container{width:88%;padding-bottom:14px;padding-left:20px;color:var(--shake-sdk-text-color-popup-menu-item);border-radius:var(--shake-sdk-border-radius-light);cursor:default;font-size:14px;font-family:Roobert,serif;background:var(--shake-sdk-bg-color-primary-inversed-highlight)}.title-container{width:88%;padding-left:20px;padding-bottom:4px;color:var(--shake-sdk-text-color-popup-menu-item);border-radius:var(--shake-sdk-border-radius-light);cursor:default;font-size:16px;font-family:Roobert,serif;background:var(--shake-sdk-bg-color-primary-inversed-highlight)}.content-container{width:88%;padding-top:14px;padding-left:20px;color:var(--shake-sdk-text-color-popup-menu-item);border-radius:var(--shake-sdk-border-radius-light);cursor:default;font-size:14px;font-family:Roobert,serif;background:var(--shake-sdk-bg-color-primary-inversed-highlight);display:flex;flex-direction:column}.close-notification{width:12%;height:32px}.close-notification>img{padding-top:8px;padding-left:5px;font-weight:900;color:var(--shake-sdk-text-color-popup-menu-item);cursor:pointer}"), gA(".shake-sdk-toolbar{width:100%;height:32px;background-color:transparent;display:flex;flex-direction:row;justify-content:space-between;padding-bottom:10px}.shake-sdk-toolbar-only-close{width:100%;height:32px;background-color:transparent;display:flex;flex-direction:row;justify-content:end}.shake-sdk-toolbar-back-container{position:relative}.shake-sdk-toolbar-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;vertical-align:middle;line-height:2}.shake-sdk-toolbar-notification-icon{position:absolute;left:13px;top:2px;visibility:hidden}.shake-sdk-toolbar-button{display:flex;align-items:center;justify-content:center;cursor:pointer;width:32px;height:32px;border:none;padding:0;margin:0;background-color:transparent}.shake-sdk-toolbar-button:hover{opacity:.7}.shake-sdk-toolbar-button img{object-fit:contain;width:32px;height:32px}@media only screen and (min-width: 1025px){.shake-sdk-toolbar-hideable{display:none}.shake-sdk-toolbar-close-button{visibility:hidden}}"), gA(".shake-sdk-tooltip{position:fixed;display:none;z-index:5;padding:6px 12px 8px;background-color:var(--shake-sdk-bg-color-primary-inversed-highlight);box-shadow:0 2px 10px #1c1c1e;opacity:.9;border-radius:5px;border:1px solid var(--shake-sdk-bg-color-outline-inversed);background:var(--shake-sdk-bg-color-tooltip)}"), gA(".shake-sdk-video{width:100%}"), gA(".shake-sdk-main-button{position:fixed;top:50%;right:-32px;height:28px;min-width:138px;z-index:2147483647;transform:rotate(-90deg);margin-top:-14px;border-radius:var(--shake-sdk-button-border-radius);background:var(--shake-sdk-pureWhite);padding:4px 10px 3px 7px;border:1px solid var(--shake-sdk-grey30)}.shake-sdk-main-button-icon{margin-right:4px;width:21px;height:21px;border-radius:4px}.shake-sdk-main-button-notification{position:absolute;left:-5px;top:-5px;visibility:hidden}.shake-sdk-main-button-text{color:var(--shake-sdk-text-color-primary);letter-spacing:-.04em}"), gA(".shake-sdk-content{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;z-index:2147483647;overflow:hidden;pointer-events:none;padding:40px;flex:1;min-width:0;justify-content:end;box-sizing:border-box}.shake-sdk-content-left{flex:1;display:flex;margin-right:20px;position:relative}.shake-sdk-content-right{display:flex;flex:0 0 376px;min-width:0}.shake-sdk-content-right *,.shake-sdk-content-left *{pointer-events:auto}@media only screen and (max-width: 1024px){.shake-sdk-content{background-color:var(--shake-sdk-bg-color-primary);padding:0}.shake-sdk-content-left{display:none}.shake-sdk-content-right{flex:1}}.shake-sdk-content p,h1,h2,h3,ul,li,label,div{font-family:Roobert,serif;margin:0}.shake-sdk-sheet p,h1,h2,h3,ul,li,label,div{font-family:Roobert,serif}.shake-sdk-content *{scrollbar-width:thin;scrollbar-color:#2C2C2E transparent}.shake-sdk-content *::-webkit-scrollbar{width:6px}.shake-sdk-content *::-webkit-scrollbar-track{background:none}.shake-sdk-content *::-webkit-scrollbar-thumb{background-color:#2c2c2e;border-radius:10px}.shake-sdk-content ::-webkit-scrollbar-corner{background-color:transparent}@keyframes shakeFadeIn{0%{opacity:0}to{opacity:1}}"), gA(".shake-sdk-main-card{padding:32px 20px 10px;display:flex;flex-direction:column;flex:1;background-color:var(--shake-sdk-bg-color-primary);box-sizing:border-box;min-width:0;position:relative;box-shadow:0 2px 2px var(--shake-sdk-bg-color-outline)}.shake-sdk-main-card-content{display:flex;flex-direction:column;flex:1;overflow:hidden;min-width:0}.shake-sdk-close-button{position:absolute;top:-10px;right:-10px;width:40px;height:40px;background-color:var(--shake-sdk-bg-color-primary);box-shadow:0 1px 1px var(--shake-sdk-bg-color-outline)}.shake-sdk-close-button:hover{opacity:1;background-color:var(--shake-sdk-bg-color-primary-highlight)}@media only screen and (max-width: 1024px){.shake-sdk-close-button{display:none}}.shake-sdk-main-card *{scrollbar-color:#e8e8e8 transparent!important}.shake-sdk-main-card *::-webkit-scrollbar-thumb{background-color:#e8e8e8!important}"), gA(".shake-sdk-new-ticket{display:flex;flex-direction:column;flex:1;animation:shakeFadeIn .2s ease-in-out;height:100%}.shake-sdk-new-ticket-form{display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden}.shake-sdk-new-ticket-title{padding-bottom:32px}.shake-sdk-styled-textarea{padding-top:12px;margin-bottom:12px}.shake-sdk-submit-button{background-color:var(--shake-sdk-color-accent);padding:9px 20px 11px;border-radius:var(--shake-sdk-border-radius-light)}"), gA(".shake-sdk-home-screen{display:flex;flex-direction:column;flex:1;animation:shakeFadeIn .2s ease-in-out;height:100%}.shake-sdk-home-screen-title{padding-bottom:32px}.shake-sdk-home-screen-subtitle{padding-bottom:32px;color:var(--shake-sdk-text-color-secondary)}"), gA(".shake-sdk-ticket-item{display:flex;flex-direction:row;height:50px;cursor:pointer;margin-bottom:10px}.shake-sdk-ticket-item:hover{opacity:.7}.shake-sdk-ticket-item-thumbnail{display:flex;flex-direction:column;width:40px;border-radius:10px;margin-right:10px}.shake-sdk-ticket-item-text-container{display:flex;flex-direction:column;flex:1;margin-right:10px;min-width:0}.shake-sdk-ticket-item-title{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-lines:1;min-width:0}.shake-sdk-ticket-item-time-container{display:flex;flex-direction:column;width:30px}.shake-sdk-ticket-item-time-container p{text-align:end}.shake-sdk-ticket-item-time-container img{width:12px;height:12px;align-self:end;margin-top:3px}"), gA(".shake-sdk-chat-screen{display:flex;flex-direction:column;flex:1;animation:shakeFadeIn .2s ease-in-out;height:100%;padding-bottom:22px;box-sizing:border-box}.shake-sdk-chat-screen-message-list{flex-direction:column-reverse;margin-bottom:20px}"), gA(".shake-sdk-chat-message-sender{display:flex;flex-direction:column;margin-bottom:3px;align-items:end}.shake-sdk-chat-message-sender-error-state{cursor:pointer!important}.shake-sdk-chat-message-sender-error-state:hover{opacity:.7}.shake-sdk-chat-message-sender-bubble-container{display:flex;flex-direction:row}.shake-sdk-chat-message-sender-bubble-container img{width:20px;height:20px;align-self:center;margin-right:3px}.shake-sdk-chat-message-sender-bubble{border-radius:10px 0 0 10px;background-color:var(--shake-sdk-color-accent);padding:10px;width:fit-content;max-width:200px}.shake-sdk-chat-message-sender-bubble-rounded{border-radius:10px 10px 0}.shake-sdk-chat-message-sender-bubble-text{color:var(--shake-sdk-button-accent-text-color);word-wrap:break-word}.shake-sdk-chat-message-sender-info{margin-top:3px}.shake-sdk-chat-message-sender-error{color:var(--shake-sdk-color-notification)}"), gA(".shake-sdk-chat-message-recipient{display:flex;flex-direction:column;margin-bottom:3px}.shake-sdk-chat-message-recipient-bubble{border-radius:0 10px 10px 0;background-color:var(--shake-sdk-bg-color-secondary);padding:10px;width:fit-content;max-width:200px}.shake-sdk-chat-message-recipient-bubble-rounded{border-radius:10px 10px 10px 0}.shake-sdk-chat-message-recipient-bubble p{word-wrap:break-word}.shake-sdk-chat-message-recipient-info{margin-top:3px}"), gA(".shake-sdk-chat-message-input{display:flex;flex-direction:row}.shake-sdk-chat-message-input-text{flex:1;font-family:Roobert,serif;font-size:16px;font-weight:500;line-height:20px;letter-spacing:0;border-radius:var(--shake-sdk-border-radius-light);background-color:var(--shake-sdk-bg-color-secondary);padding:10px 15px;margin-right:20px;cursor:text;outline:none;border:none;resize:none;box-sizing:border-box}.shake-sdk-chat-message-send-container{display:flex;flex-direction:column;justify-content:end}.shake-sdk-chat-message-input-send{border-radius:100px;outline:none;border:none;background-color:var(--shake-sdk-color-accent);width:40px;height:40px;cursor:pointer;padding:0}.shake-sdk-chat-message-input-send-icon{width:25px;height:25px;object-fit:fill;transform:rotate(-90deg)}.shake-sdk-chat-message-input-send:disabled{cursor:not-allowed;opacity:.7}"), gA(".shake-sdk-attachments-items-small{display:flex;flex-direction:row;min-height:210px;width:100%;overflow-x:auto;overflow-y:hidden}@media only screen and (min-width: 1025px){.shake-sdk-attachments-items-small{display:none}}"), gA(".shake-sdk-attachment-item-small{display:flex;min-width:100px;max-width:100px;height:200px;margin-right:10px;cursor:pointer;overflow:hidden;position:relative}.shake-sdk-attachment-item-remove-small{position:absolute;top:15px;right:15px;width:30px;height:30px;background-color:var(--shake-sdk-bg-color-primary-inversed);opacity:.7}.shake-sdk-attachment-item-thumbnail-small{background-color:#000;height:100%;width:100%;object-fit:cover;border-radius:10px}.shake-sdk-file-thumbnail-small{box-sizing:border-box;padding:10px;border:2px solid var(--shake-sdk-bg-color-outline);background-color:var(--shake-sdk-bg-color-primary);overflow:hidden;word-wrap:break-word;justify-content:end;flex-direction:column;display:flex}"), gA(".shake-sdk-attachments-add-item-small{display:flex;min-width:100px;max-width:100px;height:200px;margin-right:10px;align-items:center;justify-content:center;overflow:hidden;position:relative}.shake-sdk-attachment-add-button-small{width:29px;height:29px;cursor:pointer;background-color:var(--shake-sdk-bg-color-secondary)}"), gA("#shake-sdk-attachments-card{padding:20px;display:flex;flex-direction:row;background-color:var(--shake-sdk-bg-color-primary-inversed);translate:25px;opacity:0;visibility:hidden;animation-fill-mode:forwards;box-shadow:0 2px 2px var(--shake-sdk-bg-color-outline-inversed)}.shake-sdk-attachments-card-visible{animation:showAttachments .1s ease-in forwards}.shake-sdk-attachments-card-hidden{animation:hideAttachments .1s ease-in forwards}.shake-sdk-attachments-page{display:flex;flex-direction:row;width:100%}.shake-sdk-attachments-list-wrap{display:flex;margin-right:12px;flex-shrink:0}.shake-sdk-attachments-preview-wrap{display:flex;flex:1}@keyframes showAttachments{0%{opacity:0;transform:translate(0);visibility:visible}to{opacity:1;transform:translate(-25px);visibility:visible}}@keyframes hideAttachments{0%{opacity:1;transform:translate(-25px);visibility:visible}to{opacity:0;transform:translate(0);visibility:hidden}}@media only screen and (max-width: 1024px){.shake-sdk-attachments-card{display:none}}"), gA(".shake-sdk-attachments-items{display:flex;flex-direction:column;overflow:auto;overflow-x:hidden}"), gA(".shake-sdk-attachments-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1}.shake-sdk-attachments-empty-dragdrop{display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:10px;padding:10px 20px;cursor:pointer}.shake-sdk-attachments-empty-dragdrop:hover,.hover{background-color:var(--shake-sdk-bg-color-outline-inversed);border-radius:10px}.shake-sdk-attachments-empty-buttons{display:flex;flex-direction:row;margin-top:50px}.shake-sdk-attachments-empty-buttons img{margin-right:10px}.shake-sdk-attachments-empty-buttons button{height:36px;margin-right:20px;background-color:var(--shake-sdk-button-color);color:var(--shake-sdk-button-text-color);border:1px solid var(--shake-sdk-button-border-color)}.shake-sdk-attachments-empty-buttons button:hover{opacity:.7}.shake-sdk-attachments-empty-buttons>div{display:flex;flex-direction:row;margin-top:20px}.shake-sdk-attachments-empty-buttons>p{max-width:300px;text-align:center;font-size:18px}"), gA(".shake-sdk-attachment-item{width:140px;display:flex;flex-direction:column;margin-bottom:20px;cursor:pointer}.shake-sdk-attachment-item-card{position:relative;padding:8px;background-color:transparent}.shake-sdk-attachment-item-selected .shake-sdk-attachment-item-card{background-color:var(--shake-sdk-bg-color-primary-inversed-highlight)}.shake-sdk-attachment-remove{position:absolute;top:15px;right:15px;width:30px;height:30px;background-color:var(--shake-sdk-bg-color-primary-inversed);opacity:.7}.shake-sdk-attachment-item-thumbnail{background-color:transparent;width:100%;height:61px;object-fit:cover;border-radius:10px}.shake-sdk-attachment-item-title{display:flex;justify-content:center}.shake-sdk-attachment-title-box{display:flex;width:78px;height:20px;margin:2px;text-align:center;align-items:center;justify-content:center;border-radius:4px;background-color:transparent}.shake-sdk-attachment-item-selected .shake-sdk-attachment-title-box{background-color:var(--shake-sdk-color-accent-dark)}.shake-sdk-attachment-title-box p{color:var(--shake-sdk-button-accent-text-color)}.shake-sdk-file-thumbnail{box-sizing:border-box;padding:10px;border:2px solid var(--shake-sdk-bg-color-outline-inversed);background-color:var(--shake-sdk-bg-color-primary-inversed-highlight);overflow:hidden;word-wrap:break-word;justify-content:center;align-items:center;flex-direction:column;display:flex}"), gA(".shake-sdk-attachments-add-item{width:140px;display:flex;align-items:center;justify-content:center}.shake-sdk-attachment-add-button{width:29px;height:29px;background-color:var(--shake-sdk-bg-color-primary-inversed-highlight)}"), gA(".shake-sdk-attachments-preview{margin-top:36px;display:flex;flex-direction:column;overflow:hidden;width:100%}"), gA(".shake-sdk-image-preview{display:flex;flex-direction:column;-webkit-user-select:none;user-select:none;width:100%;min-height:0;max-height:100%;flex:1}.shake-sdk-image-preview-image-container{display:flex;flex:1;align-items:center;flex-direction:column;position:relative;min-height:0;max-height:100%}.shake-sdk-image-preview-image{max-width:100%;max-height:100%;min-height:0;height:auto;width:auto;border-radius:10px}.shake-sdk-image-preview-toolbox-container{flex:0 0 50px;display:flex;flex-direction:column;align-items:center;padding-top:50px;padding-bottom:50px}.shake-sdk-drawing-toolbox{height:48px;width:316px;display:flex;align-items:center;justify-content:center;border-radius:24px;padding:0 10px;border:1px solid var(--shake-sdk-bg-color-outline-inversed);background:var(--shake-sdk-bg-color-primary-inversed-highlight)}.shake-sdk-drawing-toolbox-buttons{display:flex;flex-direction:row;align-items:center;height:100%;padding:6px 0;box-sizing:border-box}.shake-sdk-drawing-toolbox-colors{display:none;flex-direction:row;align-items:center;height:100%;padding:6px 0;box-sizing:border-box;animation:shakeFadeIn .2s ease-in-out}"), gA(".shake-sdk-video-preview{height:100%}.shake-sdk-video-preview video{border-radius:10px;display:block;max-width:100%;max-height:100%;height:auto;width:auto}"), gA(".shake-sdk-image-preview-root-fs{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;background-color:var(--shake-sdk-bg-color-primary-inversed);z-index:2147483647}.shake-sdk-image-preview-toolbar-fs{width:100%;flex:0 0 32px;background-color:transparent;display:flex;flex-direction:row;justify-content:right}.shake-sdk-image-preview-content-fs{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;margin:32px;min-height:0}"), gA(".shake-sdk-video-preview-root-fs{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;background-color:var(--shake-sdk-bg-color-primary-inversed);z-index:2147483647}.shake-sdk-video-preview-toolbar-fs{width:100%;height:32px;background-color:transparent;display:flex;flex-direction:row;justify-content:right}.shake-sdk-video-preview-fs{width:100%;height:100%}"), gA(`.shake-sdk-canvas{position:absolute;cursor:url("data:image/svg+xml,%3csvg%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Pen,%20Square%202'%20clip-path='url(%23clip0_15240_1054)'%3e%3cg%20id='Group'%3e%3cg%20id='Vector'%20filter='url(%23filter0_d_15240_1054)'%3e%3cpath%20d='M17.4366%2030.7725C17.092%2031.1171%2016.6263%2031.3096%2016.1405%2031.3096H12.4463V27.6155C12.4463%2027.1296%2012.6406%2026.664%2012.9835%2026.3193L25.6775%2013.6161C26.9095%2012.3841%2028.9078%2012.3841%2030.1398%2013.6161C31.3736%2014.8481%2031.3718%2016.8465%2030.1398%2018.0785L17.4366%2030.7725Z'%20fill='white'/%3e%3cpath%20d='M10.9463%2031.3096C10.9463%2032.1381%2011.6179%2032.8096%2012.4463%2032.8096H16.1405C17.0238%2032.8096%2017.8709%2032.4593%2018.4969%2031.8335C18.497%2031.8334%2018.4972%2031.8333%2018.4973%2031.8331L31.2001%2019.1395L31.2005%2019.1391C33.0172%2017.3224%2033.0213%2014.3737%2031.1997%2012.5547C29.3818%2010.7377%2026.4343%2010.738%2024.6168%2012.5555L24.6164%2012.5559L11.9224%2025.259L11.92%2025.2615C11.3009%2025.8839%2010.9463%2026.7285%2010.9463%2027.6155V31.3096Z'%20stroke='white'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cpath%20id='Vector_2'%20d='M17.4366%2030.7725C17.092%2031.1171%2016.6263%2031.3096%2016.1405%2031.3096H12.4463V27.6155C12.4463%2027.1296%2012.6406%2026.664%2012.9835%2026.3193L25.6775%2013.6161C26.9095%2012.3841%2028.9078%2012.3841%2030.1398%2013.6161C31.3736%2014.8481%2031.3718%2016.8465%2030.1398%2018.0785L17.4366%2030.7725Z'%20fill='white'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_3'%20d='M21.6328%2017.6733L26.0878%2022.1283'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_4'%20d='M29.2484%2018.9675L30.9021%2020.6212C31.7711%2021.492%2031.7711%2022.9019%2030.9021%2023.7709L27.8936%2026.7794'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_15240_1054'%20x='7.44629'%20y='9.69214'%20width='28.6182'%20height='28.6174'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='2'/%3e%3cfeGaussianBlur%20stdDeviation='1'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_15240_1054'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_15240_1054'%20result='shape'/%3e%3c/filter%3e%3cclipPath%20id='clip0_15240_1054'%3e%3crect%20width='44'%20height='44'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e") 10 30,auto;left:50%!important;transform:translate(-50%);z-index:99999}`), gA(".shake-sdk-attachments-drawing-button{outline:none;border:none;background:transparent;width:42px;height:42px;padding:0}.shake-sdk-attachments-drawing-button:hover{opacity:.7}")]))().then((A) => e.adoptedStyleSheets = A);
}, uA = () => {
  const e = document.createElement("div");
  return e.classList.add("shake-sdk-container"), e;
}, us = () => {
  const e = document.createElement("div");
  return e.classList.add("shake-sdk-card"), e;
}, lc = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15055_29642)'%3e%3cpath%20d='M12.3994%208.47314C13.6969%209.77065%2013.6969%2011.8743%2012.3994%2013.1719C11.1019%2014.4694%208.99819%2014.4694%207.70068%2013.1719C6.40316%2011.8743%206.40316%209.77065%207.70068%208.47314C8.99819%207.17562%2011.1019%207.17562%2012.3994%208.47314Z'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.5%207.49992V14.9999C17.5%2015.9208%2016.7542%2016.6666%2015.8333%2016.6666H4.16667C3.24583%2016.6666%202.5%2015.9208%202.5%2014.9999V7.49992C2.5%206.57908%203.24583%205.83325%204.16667%205.83325H5.83333L7.05167%203.74659C7.20083%203.49075%207.475%203.33325%207.77167%203.33325H12.1917C12.4842%203.33325%2012.755%203.48659%2012.9058%203.73659L14.1667%205.83325H15.8333C16.7542%205.83325%2017.5%206.57908%2017.5%207.49992Z'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15055_29642'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", hc = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15055_29718)'%3e%3cpath%20d='M10.9375%2014.7916H4.375C3.33917%2014.7916%202.5%2013.9524%202.5%2012.9166V7.08325C2.5%206.04742%203.33917%205.20825%204.375%205.20825H10.9375C11.9733%205.20825%2012.8125%206.04742%2012.8125%207.08325V12.9166C12.8125%2013.9524%2011.9733%2014.7916%2010.9375%2014.7916Z'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.8125%2010.9141L15.975%2013.4591C16.5883%2013.9533%2017.5%2013.5166%2017.5%2012.7291V7.27077C17.5%206.48327%2016.5883%206.04661%2015.975%206.54077L12.8125%209.08577'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15055_29718'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", ds = () => {
  var e;
  (e = document.getElementById("fileInput")) == null || e.click();
}, uc = (e, A, t, r) => {
  const a = document.createElement("img");
  a.src = e, a.setAttribute("draggable", "false");
  const f = document.createElement("button");
  f.classList.add("shake-sdk-bubble"), f.style.backgroundColor = A, f.style.boxShadow = `0 2px 2px ${t}`, f.appendChild(a);
  const B = document.createElement("div"), w = B.attachShadow({ mode: "open" });
  return Ve(w), w.appendChild(f), Oh(f, r), B;
}, Oh = (e, A) => {
  let t = !1, r = 0, a = 0, f = !1;
  e.style.left = window.innerWidth - e.offsetWidth - 100 + "px", e.style.top = window.innerHeight - e.offsetHeight - 100 + "px", e.addEventListener("mousedown", function(B) {
    t = !0, f = !1, r = B.clientX - e.getBoundingClientRect().left, a = B.clientY - e.getBoundingClientRect().top;
  }), document.addEventListener("mousemove", function(B) {
    if (t) {
      const w = B.clientX - r, C = B.clientY - a, Q = window.innerWidth - e.offsetWidth, y = window.innerHeight - e.offsetHeight;
      e.style.left = Math.min(Math.max(0, w), Q) + "px", e.style.top = Math.min(Math.max(0, C), y) + "px", (Math.abs(B.movementX) > 2 || Math.abs(B.movementY) > 2) && (f = !0);
    }
  }), e.addEventListener("mouseup", function() {
    t && (t = !1, f || A());
  });
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
var Tn = function(e, A) {
  return Tn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var a in r)
      Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
  }, Tn(e, A);
};
function fe(e, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  function t() {
    this.constructor = e;
  }
  Tn(e, A), e.prototype = A === null ? Object.create(A) : (t.prototype = A.prototype, new t());
}
var _n = function() {
  return _n = Object.assign || function(e) {
    for (var A, t = 1, r = arguments.length; t < r; t++)
      for (var a in A = arguments[t])
        Object.prototype.hasOwnProperty.call(A, a) && (e[a] = A[a]);
    return e;
  }, _n.apply(this, arguments);
};
function JA(e, A, t, r) {
  return new (t || (t = Promise))(function(a, f) {
    function B(Q) {
      try {
        C(r.next(Q));
      } catch (y) {
        f(y);
      }
    }
    function w(Q) {
      try {
        C(r.throw(Q));
      } catch (y) {
        f(y);
      }
    }
    function C(Q) {
      Q.done ? a(Q.value) : function(y) {
        return y instanceof t ? y : new t(function(x) {
          x(y);
        });
      }(Q.value).then(B, w);
    }
    C((r = r.apply(e, [])).next());
  });
}
function YA(e, A) {
  var t, r, a, f, B = { label: 0, sent: function() {
    if (1 & a[0])
      throw a[1];
    return a[1];
  }, trys: [], ops: [] };
  return f = { next: w(0), throw: w(1), return: w(2) }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
    return this;
  }), f;
  function w(C) {
    return function(Q) {
      return function(y) {
        if (t)
          throw new TypeError("Generator is already executing.");
        for (; B; )
          try {
            if (t = 1, r && (a = 2 & y[0] ? r.return : y[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, y[1])).done)
              return a;
            switch (r = 0, a && (y = [2 & y[0], a.value]), y[0]) {
              case 0:
              case 1:
                a = y;
                break;
              case 4:
                return B.label++, { value: y[1], done: !1 };
              case 5:
                B.label++, r = y[1], y = [0];
                continue;
              case 7:
                y = B.ops.pop(), B.trys.pop();
                continue;
              default:
                if (a = B.trys, !((a = a.length > 0 && a[a.length - 1]) || y[0] !== 6 && y[0] !== 2)) {
                  B = 0;
                  continue;
                }
                if (y[0] === 3 && (!a || y[1] > a[0] && y[1] < a[3])) {
                  B.label = y[1];
                  break;
                }
                if (y[0] === 6 && B.label < a[1]) {
                  B.label = a[1], a = y;
                  break;
                }
                if (a && B.label < a[2]) {
                  B.label = a[2], B.ops.push(y);
                  break;
                }
                a[2] && B.ops.pop(), B.trys.pop();
                continue;
            }
            y = A.call(e, B);
          } catch (x) {
            y = [6, x], r = 0;
          } finally {
            t = a = 0;
          }
        if (5 & y[0])
          throw y[1];
        return { value: y[0] ? y[1] : void 0, done: !0 };
      }([C, Q]);
    };
  }
}
function Ui(e, A, t) {
  if (arguments.length === 2)
    for (var r, a = 0, f = A.length; a < f; a++)
      !r && a in A || (r || (r = Array.prototype.slice.call(A, 0, a)), r[a] = A[a]);
  return e.concat(r || A);
}
for (var Le = function() {
  function e(A, t, r, a) {
    this.left = A, this.top = t, this.width = r, this.height = a;
  }
  return e.prototype.add = function(A, t, r, a) {
    return new e(this.left + A, this.top + t, this.width + r, this.height + a);
  }, e.fromClientRect = function(A, t) {
    return new e(t.left + A.windowBounds.left, t.top + A.windowBounds.top, t.width, t.height);
  }, e.fromDOMRectList = function(A, t) {
    var r = Array.from(t).find(function(a) {
      return a.width !== 0;
    });
    return r ? new e(r.left + A.windowBounds.left, r.top + A.windowBounds.top, r.width, r.height) : e.EMPTY;
  }, e.EMPTY = new e(0, 0, 0, 0), e;
}(), Ir = function(e, A) {
  return Le.fromClientRect(e, A.getBoundingClientRect());
}, cr = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var a = e.charCodeAt(t++);
    if (a >= 55296 && a <= 56319 && t < r) {
      var f = e.charCodeAt(t++);
      (64512 & f) == 56320 ? A.push(((1023 & a) << 10) + (1023 & f) + 65536) : (A.push(a), t--);
    } else
      A.push(a);
  }
  return A;
}, HA = function() {
  for (var e = [], A = 0; A < arguments.length; A++)
    e[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var t = e.length;
  if (!t)
    return "";
  for (var r = [], a = -1, f = ""; ++a < t; ) {
    var B = e[a];
    B <= 65535 ? r.push(B) : (B -= 65536, r.push(55296 + (B >> 10), B % 1024 + 56320)), (a + 1 === t || r.length > 16384) && (f += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return f;
}, Hh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Dh = typeof Uint8Array > "u" ? [] : new Uint8Array(256), Ei = 0; Ei < 64; Ei++)
  Dh[Hh.charCodeAt(Ei)] = Ei;
for (var Mh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Wt = typeof Uint8Array > "u" ? [] : new Uint8Array(256), Si = 0; Si < 64; Si++)
  Wt[Mh.charCodeAt(Si)] = Si;
for (var yo = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, Rh = function() {
  function e(A, t, r, a, f, B) {
    this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = a, this.index = f, this.data = B;
  }
  return e.prototype.get = function(A) {
    var t;
    if (A >= 0) {
      if (A < 55296 || A > 56319 && A <= 65535)
        return t = ((t = this.index[A >> 5]) << 2) + (31 & A), this.data[t];
      if (A <= 65535)
        return t = ((t = this.index[2048 + (A - 55296 >> 5)]) << 2) + (31 & A), this.data[t];
      if (A < this.highStart)
        return t = 2080 + (A >> 11), t = this.index[t], t += A >> 5 & 63, t = ((t = this.index[t]) << 2) + (31 & A), this.data[t];
      if (A <= 1114111)
        return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, e;
}(), Kh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ph = typeof Uint8Array > "u" ? [] : new Uint8Array(256), Ii = 0; Ii < 64; Ii++)
  Ph[Kh.charCodeAt(Ii)] = Ii;
var De = 10, Ln = 13, Yt = 15, Ti = 17, Kt = 18, jh = 19, bo = 20, On = 21, Pt = 22, ct = 24, $A = 25, Jt = 26, Xt = 27, lt = 28, wt = 30, _i = 32, Li = 33, Hn = 34, Dn = 35, ei = 37, Mn = 38, tr = 39, ir = 40, Qo = 42, Nh = [9001, 65288], pA = "×", Oi = "÷", Rn = function(e, A) {
  var t, r, a, f = function(y) {
    var x, E, _, S, D, m = 0.75 * y.length, q = y.length, rA = 0;
    y[y.length - 1] === "=" && (m--, y[y.length - 2] === "=" && m--);
    var oA = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && Uint8Array.prototype.slice !== void 0 ? new ArrayBuffer(m) : new Array(m), d = Array.isArray(oA) ? oA : new Uint8Array(oA);
    for (x = 0; x < q; x += 4)
      E = Wt[y.charCodeAt(x)], _ = Wt[y.charCodeAt(x + 1)], S = Wt[y.charCodeAt(x + 2)], D = Wt[y.charCodeAt(x + 3)], d[rA++] = E << 2 | _ >> 4, d[rA++] = (15 & _) << 4 | S >> 2, d[rA++] = (3 & S) << 6 | 63 & D;
    return oA;
  }(e), B = Array.isArray(f) ? function(y) {
    for (var x = y.length, E = [], _ = 0; _ < x; _ += 4)
      E.push(y[_ + 3] << 24 | y[_ + 2] << 16 | y[_ + 1] << 8 | y[_]);
    return E;
  }(f) : new Uint32Array(f), w = Array.isArray(f) ? function(y) {
    for (var x = y.length, E = [], _ = 0; _ < x; _ += 2)
      E.push(y[_ + 1] << 8 | y[_]);
    return E;
  }(f) : new Uint16Array(f), C = yo(w, 12, B[4] / 2), Q = B[5] === 2 ? yo(w, (24 + B[4]) / 2) : (t = B, r = Math.ceil((24 + B[4]) / 4), t.slice ? t.slice(r, a) : new Uint32Array(Array.prototype.slice.call(t, r, a)));
  return new Rh(B[0], B[1], B[2], B[3], C, Q);
}("KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA=="), xe = [wt, 36], Kn = [1, 2, 3, 5], dc = [De, 8], ko = [Xt, Jt], Gh = Kn.concat(dc), xo = [Mn, tr, ir, Hn, Dn], Vh = [Yt, Ln], zr = function(e, A, t, r) {
  var a = r[t];
  if (Array.isArray(e) ? e.indexOf(a) !== -1 : e === a)
    for (var f = t; f <= r.length; ) {
      if ((C = r[++f]) === A)
        return !0;
      if (C !== De)
        break;
    }
  if (a === De)
    for (f = t; f > 0; ) {
      var B = r[--f];
      if (Array.isArray(e) ? e.indexOf(B) !== -1 : e === B)
        for (var w = t; w <= r.length; ) {
          var C;
          if ((C = r[++w]) === A)
            return !0;
          if (C !== De)
            break;
        }
      if (B !== De)
        break;
    }
  return !1;
}, Fo = function(e, A) {
  for (var t = e; t >= 0; ) {
    var r = A[t];
    if (r !== De)
      return r;
    t--;
  }
  return 0;
}, Wh = function(e, A, t, r, a) {
  if (t[r] === 0)
    return pA;
  var f = r - 1;
  if (Array.isArray(a) && a[f] === !0)
    return pA;
  var B = f - 1, w = f + 1, C = A[f], Q = B >= 0 ? A[B] : 0, y = A[w];
  if (C === 2 && y === 3)
    return pA;
  if (Kn.indexOf(C) !== -1)
    return "!";
  if (Kn.indexOf(y) !== -1 || dc.indexOf(y) !== -1)
    return pA;
  if (Fo(f, A) === 8)
    return Oi;
  if (Rn.get(e[f]) === 11 || (C === _i || C === Li) && Rn.get(e[w]) === 11 || C === 7 || y === 7 || C === 9 || [De, Ln, Yt].indexOf(C) === -1 && y === 9 || [Ti, Kt, jh, ct, lt].indexOf(y) !== -1 || Fo(f, A) === Pt || zr(23, Pt, f, A) || zr([Ti, Kt], On, f, A) || zr(12, 12, f, A))
    return pA;
  if (C === De)
    return Oi;
  if (C === 23 || y === 23)
    return pA;
  if (y === 16 || C === 16)
    return Oi;
  if ([Ln, Yt, On].indexOf(y) !== -1 || C === 14 || Q === 36 && Vh.indexOf(C) !== -1 || C === lt && y === 36 || y === bo || xe.indexOf(y) !== -1 && C === $A || xe.indexOf(C) !== -1 && y === $A || C === Xt && [ei, _i, Li].indexOf(y) !== -1 || [ei, _i, Li].indexOf(C) !== -1 && y === Jt || xe.indexOf(C) !== -1 && ko.indexOf(y) !== -1 || ko.indexOf(C) !== -1 && xe.indexOf(y) !== -1 || [Xt, Jt].indexOf(C) !== -1 && (y === $A || [Pt, Yt].indexOf(y) !== -1 && A[w + 1] === $A) || [Pt, Yt].indexOf(C) !== -1 && y === $A || C === $A && [$A, lt, ct].indexOf(y) !== -1)
    return pA;
  if ([$A, lt, ct, Ti, Kt].indexOf(y) !== -1)
    for (var x = f; x >= 0; ) {
      if ((E = A[x]) === $A)
        return pA;
      if ([lt, ct].indexOf(E) === -1)
        break;
      x--;
    }
  if ([Xt, Jt].indexOf(y) !== -1)
    for (x = [Ti, Kt].indexOf(C) !== -1 ? B : f; x >= 0; ) {
      var E;
      if ((E = A[x]) === $A)
        return pA;
      if ([lt, ct].indexOf(E) === -1)
        break;
      x--;
    }
  if (Mn === C && [Mn, tr, Hn, Dn].indexOf(y) !== -1 || [tr, Hn].indexOf(C) !== -1 && [tr, ir].indexOf(y) !== -1 || [ir, Dn].indexOf(C) !== -1 && y === ir || xo.indexOf(C) !== -1 && [bo, Jt].indexOf(y) !== -1 || xo.indexOf(y) !== -1 && C === Xt || xe.indexOf(C) !== -1 && xe.indexOf(y) !== -1 || C === ct && xe.indexOf(y) !== -1 || xe.concat($A).indexOf(C) !== -1 && y === Pt && Nh.indexOf(e[w]) === -1 || xe.concat($A).indexOf(y) !== -1 && C === Kt)
    return pA;
  if (C === 41 && y === 41) {
    for (var _ = t[f], S = 1; _ > 0 && A[--_] === 41; )
      S++;
    if (S % 2 != 0)
      return pA;
  }
  return C === _i && y === Li ? pA : Oi;
}, Yh = function(e, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var t = function(w, C) {
    C === void 0 && (C = "strict");
    var Q = [], y = [], x = [];
    return w.forEach(function(E, _) {
      var S = Rn.get(E);
      if (S > 50 ? (x.push(!0), S -= 50) : x.push(!1), ["normal", "auto", "loose"].indexOf(C) !== -1 && [8208, 8211, 12316, 12448].indexOf(E) !== -1)
        return y.push(_), Q.push(16);
      if (S === 4 || S === 11) {
        if (_ === 0)
          return y.push(_), Q.push(wt);
        var D = Q[_ - 1];
        return Gh.indexOf(D) === -1 ? (y.push(y[_ - 1]), Q.push(D)) : (y.push(_), Q.push(wt));
      }
      return y.push(_), S === 31 ? Q.push(C === "strict" ? On : ei) : S === Qo || S === 29 ? Q.push(wt) : S === 43 ? E >= 131072 && E <= 196605 || E >= 196608 && E <= 262141 ? Q.push(ei) : Q.push(wt) : void Q.push(S);
    }), [y, Q, x];
  }(e, A.lineBreak), r = t[0], a = t[1], f = t[2];
  A.wordBreak !== "break-all" && A.wordBreak !== "break-word" || (a = a.map(function(w) {
    return [$A, wt, Qo].indexOf(w) !== -1 ? ei : w;
  }));
  var B = A.wordBreak === "keep-all" ? f.map(function(w, C) {
    return w && e[C] >= 19968 && e[C] <= 40959;
  }) : void 0;
  return [r, a, B];
}, Jh = function() {
  function e(A, t, r, a) {
    this.codePoints = A, this.required = t === "!", this.start = r, this.end = a;
  }
  return e.prototype.slice = function() {
    return HA.apply(void 0, this.codePoints.slice(this.start, this.end));
  }, e;
}(), ZA = 45, Ze = 43, pe = -1, XA = function(e) {
  return e >= 48 && e <= 57;
}, ht = function(e) {
  return XA(e) || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}, Hi = function(e) {
  return e === 10 || e === 9 || e === 32;
}, lr = function(e) {
  return function(A) {
    return function(t) {
      return t >= 97 && t <= 122;
    }(A) || function(t) {
      return t >= 65 && t <= 90;
    }(A);
  }(e) || function(A) {
    return A >= 128;
  }(e) || e === 95;
}, Uo = function(e) {
  return lr(e) || XA(e) || e === ZA;
}, Xh = function(e) {
  return e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e === 127;
}, He = function(e, A) {
  return e === 92 && A !== 10;
}, Di = function(e, A, t) {
  return e === ZA ? lr(A) || He(A, t) : !!lr(e) || !(e !== 92 || !He(e, A));
}, qr = function(e, A, t) {
  return e === Ze || e === ZA ? !!XA(A) || A === 46 && XA(t) : XA(e === 46 ? A : e);
}, zh = function(e) {
  var A = 0, t = 1;
  e[A] !== Ze && e[A] !== ZA || (e[A] === ZA && (t = -1), A++);
  for (var r = []; XA(e[A]); )
    r.push(e[A++]);
  var a = r.length ? parseInt(HA.apply(void 0, r), 10) : 0;
  e[A] === 46 && A++;
  for (var f = []; XA(e[A]); )
    f.push(e[A++]);
  var B = f.length, w = B ? parseInt(HA.apply(void 0, f), 10) : 0;
  e[A] !== 69 && e[A] !== 101 || A++;
  var C = 1;
  e[A] !== Ze && e[A] !== ZA || (e[A] === ZA && (C = -1), A++);
  for (var Q = []; XA(e[A]); )
    Q.push(e[A++]);
  var y = Q.length ? parseInt(HA.apply(void 0, Q), 10) : 0;
  return t * (a + w * Math.pow(10, -B)) * Math.pow(10, C * y);
}, qh = { type: 2 }, Zh = { type: 3 }, $h = { type: 4 }, Au = { type: 13 }, eu = { type: 8 }, tu = { type: 21 }, iu = { type: 9 }, ru = { type: 10 }, nu = { type: 11 }, su = { type: 12 }, ou = { type: 14 }, Mi = { type: 23 }, au = { type: 1 }, cu = { type: 25 }, lu = { type: 24 }, hu = { type: 26 }, uu = { type: 27 }, du = { type: 28 }, gu = { type: 29 }, fu = { type: 31 }, Pn = { type: 32 }, gc = function() {
  function e() {
    this._value = [];
  }
  return e.prototype.write = function(A) {
    this._value = this._value.concat(cr(A));
  }, e.prototype.read = function() {
    for (var A = [], t = this.consumeToken(); t !== Pn; )
      A.push(t), t = this.consumeToken();
    return A;
  }, e.prototype.consumeToken = function() {
    var A = this.consumeCodePoint();
    switch (A) {
      case 34:
        return this.consumeStringToken(34);
      case 35:
        var t = this.peekCodePoint(0), r = this.peekCodePoint(1), a = this.peekCodePoint(2);
        if (Uo(t) || He(r, a)) {
          var f = Di(t, r, a) ? 2 : 1;
          return { type: 5, value: this.consumeName(), flags: f };
        }
        break;
      case 36:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), Au;
        break;
      case 39:
        return this.consumeStringToken(39);
      case 40:
        return qh;
      case 41:
        return Zh;
      case 42:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), ou;
        break;
      case Ze:
        if (qr(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case 44:
        return $h;
      case ZA:
        var B = A, w = this.peekCodePoint(0), C = this.peekCodePoint(1);
        if (qr(B, w, C))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        if (Di(B, w, C))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        if (w === ZA && C === 62)
          return this.consumeCodePoint(), this.consumeCodePoint(), lu;
        break;
      case 46:
        if (qr(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case 47:
        if (this.peekCodePoint(0) === 42)
          for (this.consumeCodePoint(); ; ) {
            var Q = this.consumeCodePoint();
            if (Q === 42 && (Q = this.consumeCodePoint()) === 47)
              return this.consumeToken();
            if (Q === pe)
              return this.consumeToken();
          }
        break;
      case 58:
        return hu;
      case 59:
        return uu;
      case 60:
        if (this.peekCodePoint(0) === 33 && this.peekCodePoint(1) === ZA && this.peekCodePoint(2) === ZA)
          return this.consumeCodePoint(), this.consumeCodePoint(), cu;
        break;
      case 64:
        var y = this.peekCodePoint(0), x = this.peekCodePoint(1), E = this.peekCodePoint(2);
        if (Di(y, x, E))
          return { type: 7, value: this.consumeName() };
        break;
      case 91:
        return du;
      case 92:
        if (He(A, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        break;
      case 93:
        return gu;
      case 61:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), eu;
        break;
      case 123:
        return nu;
      case 125:
        return su;
      case 117:
      case 85:
        var _ = this.peekCodePoint(0), S = this.peekCodePoint(1);
        return _ !== Ze || !ht(S) && S !== 63 || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
      case 124:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), iu;
        if (this.peekCodePoint(0) === 124)
          return this.consumeCodePoint(), tu;
        break;
      case 126:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), ru;
        break;
      case pe:
        return Pn;
    }
    return Hi(A) ? (this.consumeWhiteSpace(), fu) : XA(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : lr(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: HA(A) };
  }, e.prototype.consumeCodePoint = function() {
    var A = this._value.shift();
    return A === void 0 ? -1 : A;
  }, e.prototype.reconsumeCodePoint = function(A) {
    this._value.unshift(A);
  }, e.prototype.peekCodePoint = function(A) {
    return A >= this._value.length ? -1 : this._value[A];
  }, e.prototype.consumeUnicodeRangeToken = function() {
    for (var A = [], t = this.consumeCodePoint(); ht(t) && A.length < 6; )
      A.push(t), t = this.consumeCodePoint();
    for (var r = !1; t === 63 && A.length < 6; )
      A.push(t), t = this.consumeCodePoint(), r = !0;
    if (r)
      return { type: 30, start: parseInt(HA.apply(void 0, A.map(function(B) {
        return B === 63 ? 48 : B;
      })), 16), end: parseInt(HA.apply(void 0, A.map(function(B) {
        return B === 63 ? 70 : B;
      })), 16) };
    var a = parseInt(HA.apply(void 0, A), 16);
    if (this.peekCodePoint(0) === ZA && ht(this.peekCodePoint(1))) {
      this.consumeCodePoint(), t = this.consumeCodePoint();
      for (var f = []; ht(t) && f.length < 6; )
        f.push(t), t = this.consumeCodePoint();
      return { type: 30, start: a, end: parseInt(HA.apply(void 0, f), 16) };
    }
    return { type: 30, start: a, end: a };
  }, e.prototype.consumeIdentLikeToken = function() {
    var A = this.consumeName();
    return A.toLowerCase() === "url" && this.peekCodePoint(0) === 40 ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === 40 ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
  }, e.prototype.consumeUrlToken = function() {
    var A = [];
    if (this.consumeWhiteSpace(), this.peekCodePoint(0) === pe)
      return { type: 22, value: "" };
    var t = this.peekCodePoint(0);
    if (t === 39 || t === 34) {
      var r = this.consumeStringToken(this.consumeCodePoint());
      return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === pe || this.peekCodePoint(0) === 41) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), Mi);
    }
    for (; ; ) {
      var a = this.consumeCodePoint();
      if (a === pe || a === 41)
        return { type: 22, value: HA.apply(void 0, A) };
      if (Hi(a))
        return this.consumeWhiteSpace(), this.peekCodePoint(0) === pe || this.peekCodePoint(0) === 41 ? (this.consumeCodePoint(), { type: 22, value: HA.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), Mi);
      if (a === 34 || a === 39 || a === 40 || Xh(a))
        return this.consumeBadUrlRemnants(), Mi;
      if (a === 92) {
        if (!He(a, this.peekCodePoint(0)))
          return this.consumeBadUrlRemnants(), Mi;
        A.push(this.consumeEscapedCodePoint());
      } else
        A.push(a);
    }
  }, e.prototype.consumeWhiteSpace = function() {
    for (; Hi(this.peekCodePoint(0)); )
      this.consumeCodePoint();
  }, e.prototype.consumeBadUrlRemnants = function() {
    for (; ; ) {
      var A = this.consumeCodePoint();
      if (A === 41 || A === pe)
        return;
      He(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
    }
  }, e.prototype.consumeStringSlice = function(A) {
    for (var t = ""; A > 0; ) {
      var r = Math.min(5e4, A);
      t += HA.apply(void 0, this._value.splice(0, r)), A -= r;
    }
    return this._value.shift(), t;
  }, e.prototype.consumeStringToken = function(A) {
    for (var t = "", r = 0; ; ) {
      var a = this._value[r];
      if (a === pe || a === void 0 || a === A)
        return { type: 0, value: t += this.consumeStringSlice(r) };
      if (a === 10)
        return this._value.splice(0, r), au;
      if (a === 92) {
        var f = this._value[r + 1];
        f !== pe && f !== void 0 && (f === 10 ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : He(a, f) && (t += this.consumeStringSlice(r), t += HA(this.consumeEscapedCodePoint()), r = -1));
      }
      r++;
    }
  }, e.prototype.consumeNumber = function() {
    var A = [], t = 4, r = this.peekCodePoint(0);
    for (r !== Ze && r !== ZA || A.push(this.consumeCodePoint()); XA(this.peekCodePoint(0)); )
      A.push(this.consumeCodePoint());
    r = this.peekCodePoint(0);
    var a = this.peekCodePoint(1);
    if (r === 46 && XA(a))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = 8; XA(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    r = this.peekCodePoint(0), a = this.peekCodePoint(1);
    var f = this.peekCodePoint(2);
    if ((r === 69 || r === 101) && ((a === Ze || a === ZA) && XA(f) || XA(a)))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = 8; XA(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    return [zh(A), t];
  }, e.prototype.consumeNumericToken = function() {
    var A = this.consumeNumber(), t = A[0], r = A[1], a = this.peekCodePoint(0), f = this.peekCodePoint(1), B = this.peekCodePoint(2);
    return Di(a, f, B) ? { type: 15, number: t, flags: r, unit: this.consumeName() } : a === 37 ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
  }, e.prototype.consumeEscapedCodePoint = function() {
    var A = this.consumeCodePoint();
    if (ht(A)) {
      for (var t = HA(A); ht(this.peekCodePoint(0)) && t.length < 6; )
        t += HA(this.consumeCodePoint());
      Hi(this.peekCodePoint(0)) && this.consumeCodePoint();
      var r = parseInt(t, 16);
      return r === 0 || function(a) {
        return a >= 55296 && a <= 57343;
      }(r) || r > 1114111 ? 65533 : r;
    }
    return A === pe ? 65533 : A;
  }, e.prototype.consumeName = function() {
    for (var A = ""; ; ) {
      var t = this.consumeCodePoint();
      if (Uo(t))
        A += HA(t);
      else {
        if (!He(t, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(t), A;
        A += HA(this.consumeEscapedCodePoint());
      }
    }
  }, e;
}(), fc = function() {
  function e(A) {
    this._tokens = A;
  }
  return e.create = function(A) {
    var t = new gc();
    return t.write(A), new e(t.read());
  }, e.parseValue = function(A) {
    return e.create(A).parseComponentValue();
  }, e.parseValues = function(A) {
    return e.create(A).parseComponentValues();
  }, e.prototype.parseComponentValue = function() {
    for (var A = this.consumeToken(); A.type === 31; )
      A = this.consumeToken();
    if (A.type === 32)
      throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
    this.reconsumeToken(A);
    var t = this.consumeComponentValue();
    do
      A = this.consumeToken();
    while (A.type === 31);
    if (A.type === 32)
      return t;
    throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
  }, e.prototype.parseComponentValues = function() {
    for (var A = []; ; ) {
      var t = this.consumeComponentValue();
      if (t.type === 32)
        return A;
      A.push(t), A.push();
    }
  }, e.prototype.consumeComponentValue = function() {
    var A = this.consumeToken();
    switch (A.type) {
      case 11:
      case 28:
      case 2:
        return this.consumeSimpleBlock(A.type);
      case 19:
        return this.consumeFunction(A);
    }
    return A;
  }, e.prototype.consumeSimpleBlock = function(A) {
    for (var t = { type: A, values: [] }, r = this.consumeToken(); ; ) {
      if (r.type === 32 || Bu(r, A))
        return t;
      this.reconsumeToken(r), t.values.push(this.consumeComponentValue()), r = this.consumeToken();
    }
  }, e.prototype.consumeFunction = function(A) {
    for (var t = { name: A.value, values: [], type: 18 }; ; ) {
      var r = this.consumeToken();
      if (r.type === 32 || r.type === 3)
        return t;
      this.reconsumeToken(r), t.values.push(this.consumeComponentValue());
    }
  }, e.prototype.consumeToken = function() {
    var A = this._tokens.shift();
    return A === void 0 ? Pn : A;
  }, e.prototype.reconsumeToken = function(A) {
    this._tokens.unshift(A);
  }, e;
}(), oi = function(e) {
  return e.type === 15;
}, Ct = function(e) {
  return e.type === 17;
}, yA = function(e) {
  return e.type === 20;
}, pu = function(e) {
  return e.type === 0;
}, jn = function(e, A) {
  return yA(e) && e.value === A;
}, Eo = function(e) {
  return e.type !== 31;
}, St = function(e) {
  return e.type !== 31 && e.type !== 4;
}, ve = function(e) {
  var A = [], t = [];
  return e.forEach(function(r) {
    if (r.type === 4) {
      if (t.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      return A.push(t), void (t = []);
    }
    r.type !== 31 && t.push(r);
  }), t.length && A.push(t), A;
}, Bu = function(e, A) {
  return A === 11 && e.type === 12 || A === 28 && e.type === 29 || A === 2 && e.type === 3;
}, Ne = function(e) {
  return e.type === 17 || e.type === 15;
}, RA = function(e) {
  return e.type === 16 || Ne(e);
}, pc = function(e) {
  return e.length > 1 ? [e[0], e[1]] : [e[0]];
}, VA = { type: 17, number: 0, flags: 4 }, gs = { type: 16, number: 50, flags: 4 }, Me = { type: 16, number: 100, flags: 4 }, zt = function(e, A, t) {
  var r = e[0], a = e[1];
  return [UA(r, A), UA(a !== void 0 ? a : r, t)];
}, UA = function(e, A) {
  if (e.type === 16)
    return e.number / 100 * A;
  if (oi(e))
    switch (e.unit) {
      case "rem":
      case "em":
        return 16 * e.number;
      default:
        return e.number;
    }
  return e.number;
}, Bc = "grad", mc = "turn", Tr = function(e, A) {
  if (A.type === 15)
    switch (A.unit) {
      case "deg":
        return Math.PI * A.number / 180;
      case Bc:
        return Math.PI / 200 * A.number;
      case "rad":
        return A.number;
      case mc:
        return 2 * Math.PI * A.number;
    }
  throw new Error("Unsupported angle type");
}, wc = function(e) {
  return e.type === 15 && (e.unit === "deg" || e.unit === Bc || e.unit === "rad" || e.unit === mc);
}, Cc = function(e) {
  switch (e.filter(yA).map(function(A) {
    return A.value;
  }).join(" ")) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [VA, VA];
    case "to top":
    case "bottom":
      return ae(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [VA, Me];
    case "to right":
    case "left":
      return ae(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [Me, Me];
    case "to bottom":
    case "top":
      return ae(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [Me, VA];
    case "to left":
    case "right":
      return ae(270);
  }
  return 0;
}, ae = function(e) {
  return Math.PI * e / 180;
}, Ke = function(e, A) {
  if (A.type === 18) {
    var t = mu[A.name];
    if (t === void 0)
      throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
    return t(e, A.values);
  }
  if (A.type === 5) {
    if (A.value.length === 3) {
      var r = A.value.substring(0, 1), a = A.value.substring(1, 2), f = A.value.substring(2, 3);
      return Re(parseInt(r + r, 16), parseInt(a + a, 16), parseInt(f + f, 16), 1);
    }
    if (A.value.length === 4) {
      r = A.value.substring(0, 1), a = A.value.substring(1, 2), f = A.value.substring(2, 3);
      var B = A.value.substring(3, 4);
      return Re(parseInt(r + r, 16), parseInt(a + a, 16), parseInt(f + f, 16), parseInt(B + B, 16) / 255);
    }
    if (A.value.length === 6)
      return r = A.value.substring(0, 2), a = A.value.substring(2, 4), f = A.value.substring(4, 6), Re(parseInt(r, 16), parseInt(a, 16), parseInt(f, 16), 1);
    if (A.value.length === 8)
      return r = A.value.substring(0, 2), a = A.value.substring(2, 4), f = A.value.substring(4, 6), B = A.value.substring(6, 8), Re(parseInt(r, 16), parseInt(a, 16), parseInt(f, 16), parseInt(B, 16) / 255);
  }
  if (A.type === 20) {
    var w = Te[A.value.toUpperCase()];
    if (w !== void 0)
      return w;
  }
  return Te.TRANSPARENT;
}, Pe = function(e) {
  return !(255 & e);
}, jA = function(e) {
  var A = 255 & e, t = 255 & e >> 8, r = 255 & e >> 16, a = 255 & e >> 24;
  return A < 255 ? "rgba(" + a + "," + r + "," + t + "," + A / 255 + ")" : "rgb(" + a + "," + r + "," + t + ")";
}, Re = function(e, A, t, r) {
  return (e << 24 | A << 16 | t << 8 | Math.round(255 * r)) >>> 0;
}, So = function(e, A) {
  if (e.type === 17)
    return e.number;
  if (e.type === 16) {
    var t = A === 3 ? 1 : 255;
    return A === 3 ? e.number / 100 * t : Math.round(e.number / 100 * t);
  }
  return 0;
}, Io = function(e, A) {
  var t = A.filter(St);
  if (t.length === 3) {
    var r = t.map(So), a = r[0], f = r[1], B = r[2];
    return Re(a, f, B, 1);
  }
  if (t.length === 4) {
    var w = t.map(So), C = (a = w[0], f = w[1], B = w[2], w[3]);
    return Re(a, f, B, C);
  }
  return 0;
};
function Zr(e, A, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (A - e) * t * 6 + e : t < 0.5 ? A : t < 2 / 3 ? 6 * (A - e) * (2 / 3 - t) + e : e;
}
var To = function(e, A) {
  var t = A.filter(St), r = t[0], a = t[1], f = t[2], B = t[3], w = (r.type === 17 ? ae(r.number) : Tr(e, r)) / (2 * Math.PI), C = RA(a) ? a.number / 100 : 0, Q = RA(f) ? f.number / 100 : 0, y = B !== void 0 && RA(B) ? UA(B, 1) : 1;
  if (C === 0)
    return Re(255 * Q, 255 * Q, 255 * Q, 1);
  var x = Q <= 0.5 ? Q * (C + 1) : Q + C - Q * C, E = 2 * Q - x, _ = Zr(E, x, w + 1 / 3), S = Zr(E, x, w), D = Zr(E, x, w - 1 / 3);
  return Re(255 * _, 255 * S, 255 * D, y);
}, mu = { hsl: To, hsla: To, rgb: Io, rgba: Io }, ti = function(e, A) {
  return Ke(e, fc.create(A).parseComponentValue());
}, Te = { ALICEBLUE: 4042850303, ANTIQUEWHITE: 4209760255, AQUA: 16777215, AQUAMARINE: 2147472639, AZURE: 4043309055, BEIGE: 4126530815, BISQUE: 4293182719, BLACK: 255, BLANCHEDALMOND: 4293643775, BLUE: 65535, BLUEVIOLET: 2318131967, BROWN: 2771004159, BURLYWOOD: 3736635391, CADETBLUE: 1604231423, CHARTREUSE: 2147418367, CHOCOLATE: 3530104575, CORAL: 4286533887, CORNFLOWERBLUE: 1687547391, CORNSILK: 4294499583, CRIMSON: 3692313855, CYAN: 16777215, DARKBLUE: 35839, DARKCYAN: 9145343, DARKGOLDENROD: 3095837695, DARKGRAY: 2846468607, DARKGREEN: 6553855, DARKGREY: 2846468607, DARKKHAKI: 3182914559, DARKMAGENTA: 2332068863, DARKOLIVEGREEN: 1433087999, DARKORANGE: 4287365375, DARKORCHID: 2570243327, DARKRED: 2332033279, DARKSALMON: 3918953215, DARKSEAGREEN: 2411499519, DARKSLATEBLUE: 1211993087, DARKSLATEGRAY: 793726975, DARKSLATEGREY: 793726975, DARKTURQUOISE: 13554175, DARKVIOLET: 2483082239, DEEPPINK: 4279538687, DEEPSKYBLUE: 12582911, DIMGRAY: 1768516095, DIMGREY: 1768516095, DODGERBLUE: 512819199, FIREBRICK: 2988581631, FLORALWHITE: 4294635775, FORESTGREEN: 579543807, FUCHSIA: 4278255615, GAINSBORO: 3705462015, GHOSTWHITE: 4177068031, GOLD: 4292280575, GOLDENROD: 3668254975, GRAY: 2155905279, GREEN: 8388863, GREENYELLOW: 2919182335, GREY: 2155905279, HONEYDEW: 4043305215, HOTPINK: 4285117695, INDIANRED: 3445382399, INDIGO: 1258324735, IVORY: 4294963455, KHAKI: 4041641215, LAVENDER: 3873897215, LAVENDERBLUSH: 4293981695, LAWNGREEN: 2096890111, LEMONCHIFFON: 4294626815, LIGHTBLUE: 2916673279, LIGHTCORAL: 4034953471, LIGHTCYAN: 3774873599, LIGHTGOLDENRODYELLOW: 4210742015, LIGHTGRAY: 3553874943, LIGHTGREEN: 2431553791, LIGHTGREY: 3553874943, LIGHTPINK: 4290167295, LIGHTSALMON: 4288707327, LIGHTSEAGREEN: 548580095, LIGHTSKYBLUE: 2278488831, LIGHTSLATEGRAY: 2005441023, LIGHTSLATEGREY: 2005441023, LIGHTSTEELBLUE: 2965692159, LIGHTYELLOW: 4294959359, LIME: 16711935, LIMEGREEN: 852308735, LINEN: 4210091775, MAGENTA: 4278255615, MAROON: 2147483903, MEDIUMAQUAMARINE: 1724754687, MEDIUMBLUE: 52735, MEDIUMORCHID: 3126187007, MEDIUMPURPLE: 2473647103, MEDIUMSEAGREEN: 1018393087, MEDIUMSLATEBLUE: 2070474495, MEDIUMSPRINGGREEN: 16423679, MEDIUMTURQUOISE: 1221709055, MEDIUMVIOLETRED: 3340076543, MIDNIGHTBLUE: 421097727, MINTCREAM: 4127193855, MISTYROSE: 4293190143, MOCCASIN: 4293178879, NAVAJOWHITE: 4292783615, NAVY: 33023, OLDLACE: 4260751103, OLIVE: 2155872511, OLIVEDRAB: 1804477439, ORANGE: 4289003775, ORANGERED: 4282712319, ORCHID: 3664828159, PALEGOLDENROD: 4008225535, PALEGREEN: 2566625535, PALETURQUOISE: 2951671551, PALEVIOLETRED: 3681588223, PAPAYAWHIP: 4293907967, PEACHPUFF: 4292524543, PERU: 3448061951, PINK: 4290825215, PLUM: 3718307327, POWDERBLUE: 2967529215, PURPLE: 2147516671, REBECCAPURPLE: 1714657791, RED: 4278190335, ROSYBROWN: 3163525119, ROYALBLUE: 1097458175, SADDLEBROWN: 2336560127, SALMON: 4202722047, SANDYBROWN: 4104413439, SEAGREEN: 780883967, SEASHELL: 4294307583, SIENNA: 2689740287, SILVER: 3233857791, SKYBLUE: 2278484991, SLATEBLUE: 1784335871, SLATEGRAY: 1887473919, SLATEGREY: 1887473919, SNOW: 4294638335, SPRINGGREEN: 16744447, STEELBLUE: 1182971135, TAN: 3535047935, TEAL: 8421631, THISTLE: 3636451583, TOMATO: 4284696575, TRANSPARENT: 0, TURQUOISE: 1088475391, VIOLET: 4001558271, WHEAT: 4125012991, WHITE: 4294967295, WHITESMOKE: 4126537215, YELLOW: 4294902015, YELLOWGREEN: 2597139199 }, wu = { name: "background-clip", initialValue: "border-box", prefix: !1, type: 1, parse: function(e, A) {
  return A.map(function(t) {
    if (yA(t))
      switch (t.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, Cu = { name: "background-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, hr = function(e, A) {
  var t = Ke(e, A[0]), r = A[1];
  return r && RA(r) ? { color: t, stop: r } : { color: t, stop: null };
}, _o = function(e, A) {
  var t = e[0], r = e[e.length - 1];
  t.stop === null && (t.stop = VA), r.stop === null && (r.stop = Me);
  for (var a = [], f = 0, B = 0; B < e.length; B++) {
    var w = e[B].stop;
    if (w !== null) {
      var C = UA(w, A);
      C > f ? a.push(C) : a.push(f), f = C;
    } else
      a.push(null);
  }
  var Q = null;
  for (B = 0; B < a.length; B++) {
    var y = a[B];
    if (y === null)
      Q === null && (Q = B);
    else if (Q !== null) {
      for (var x = B - Q, E = (y - a[Q - 1]) / (x + 1), _ = 1; _ <= x; _++)
        a[Q + _ - 1] = E * _;
      Q = null;
    }
  }
  return e.map(function(S, D) {
    return { color: S.color, stop: Math.max(Math.min(1, a[D] / A), 0) };
  });
}, vu = function(e, A, t) {
  var r = typeof e == "number" ? e : function(y, x, E) {
    var _ = x / 2, S = E / 2, D = UA(y[0], x) - _, m = S - UA(y[1], E);
    return (Math.atan2(m, D) + 2 * Math.PI) % (2 * Math.PI);
  }(e, A, t), a = Math.abs(A * Math.sin(r)) + Math.abs(t * Math.cos(r)), f = A / 2, B = t / 2, w = a / 2, C = Math.sin(r - Math.PI / 2) * w, Q = Math.cos(r - Math.PI / 2) * w;
  return [a, f - Q, f + Q, B - C, B + C];
}, le = function(e, A) {
  return Math.sqrt(e * e + A * A);
}, Lo = function(e, A, t, r, a) {
  return [[0, 0], [0, A], [e, 0], [e, A]].reduce(function(f, B) {
    var w = B[0], C = B[1], Q = le(t - w, r - C);
    return (a ? Q < f.optimumDistance : Q > f.optimumDistance) ? { optimumCorner: B, optimumDistance: Q } : f;
  }, { optimumDistance: a ? 1 / 0 : -1 / 0, optimumCorner: null }).optimumCorner;
}, Ri = function(e, A) {
  var t = ae(180), r = [];
  return ve(A).forEach(function(a, f) {
    if (f === 0) {
      var B = a[0];
      if (B.type === 20 && ["top", "left", "right", "bottom"].indexOf(B.value) !== -1)
        return void (t = Cc(a));
      if (wc(B))
        return void (t = (Tr(e, B) + ae(270)) % ae(360));
    }
    var w = hr(e, a);
    r.push(w);
  }), { angle: t, stops: r, type: 1 };
}, vc = "closest-side", yc = "farthest-side", bc = "closest-corner", Qc = "farthest-corner", kc = "circle", xc = "ellipse", Fc = "cover", Uc = "contain", Ki = function(e, A) {
  var t = 0, r = 3, a = [], f = [];
  return ve(A).forEach(function(B, w) {
    var C = !0;
    if (w === 0 ? C = B.reduce(function(y, x) {
      if (yA(x))
        switch (x.value) {
          case "center":
            return f.push(gs), !1;
          case "top":
          case "left":
            return f.push(VA), !1;
          case "right":
          case "bottom":
            return f.push(Me), !1;
        }
      else if (RA(x) || Ne(x))
        return f.push(x), !1;
      return y;
    }, C) : w === 1 && (C = B.reduce(function(y, x) {
      if (yA(x))
        switch (x.value) {
          case kc:
            return t = 0, !1;
          case xc:
            return t = 1, !1;
          case Uc:
          case vc:
            return r = 0, !1;
          case yc:
            return r = 1, !1;
          case bc:
            return r = 2, !1;
          case Fc:
          case Qc:
            return r = 3, !1;
        }
      else if (Ne(x) || RA(x))
        return Array.isArray(r) || (r = []), r.push(x), !1;
      return y;
    }, C)), C) {
      var Q = hr(e, B);
      a.push(Q);
    }
  }), { size: r, shape: t, stops: a, position: f, type: 2 };
}, fs = function(e, A) {
  if (A.type === 22) {
    var t = { url: A.value, type: 0 };
    return e.cache.addImage(A.value), t;
  }
  if (A.type === 18) {
    var r = Ec[A.name];
    if (r === void 0)
      throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
    return r(e, A.values);
  }
  throw new Error("Unsupported image type " + A.type);
}, Ft, Ec = { "linear-gradient": function(e, A) {
  var t = ae(180), r = [];
  return ve(A).forEach(function(a, f) {
    if (f === 0) {
      var B = a[0];
      if (B.type === 20 && B.value === "to")
        return void (t = Cc(a));
      if (wc(B))
        return void (t = Tr(e, B));
    }
    var w = hr(e, a);
    r.push(w);
  }), { angle: t, stops: r, type: 1 };
}, "-moz-linear-gradient": Ri, "-ms-linear-gradient": Ri, "-o-linear-gradient": Ri, "-webkit-linear-gradient": Ri, "radial-gradient": function(e, A) {
  var t = 0, r = 3, a = [], f = [];
  return ve(A).forEach(function(B, w) {
    var C = !0;
    if (w === 0) {
      var Q = !1;
      C = B.reduce(function(x, E) {
        if (Q)
          if (yA(E))
            switch (E.value) {
              case "center":
                return f.push(gs), x;
              case "top":
              case "left":
                return f.push(VA), x;
              case "right":
              case "bottom":
                return f.push(Me), x;
            }
          else
            (RA(E) || Ne(E)) && f.push(E);
        else if (yA(E))
          switch (E.value) {
            case kc:
              return t = 0, !1;
            case xc:
              return t = 1, !1;
            case "at":
              return Q = !0, !1;
            case vc:
              return r = 0, !1;
            case Fc:
            case yc:
              return r = 1, !1;
            case Uc:
            case bc:
              return r = 2, !1;
            case Qc:
              return r = 3, !1;
          }
        else if (Ne(E) || RA(E))
          return Array.isArray(r) || (r = []), r.push(E), !1;
        return x;
      }, C);
    }
    if (C) {
      var y = hr(e, B);
      a.push(y);
    }
  }), { size: r, shape: t, stops: a, position: f, type: 2 };
}, "-moz-radial-gradient": Ki, "-ms-radial-gradient": Ki, "-o-radial-gradient": Ki, "-webkit-radial-gradient": Ki, "-webkit-gradient": function(e, A) {
  var t = ae(180), r = [], a = 1;
  return ve(A).forEach(function(f, B) {
    var w = f[0];
    if (B === 0) {
      if (yA(w) && w.value === "linear")
        return void (a = 1);
      if (yA(w) && w.value === "radial")
        return void (a = 2);
    }
    if (w.type === 18) {
      if (w.name === "from") {
        var C = Ke(e, w.values[0]);
        r.push({ stop: VA, color: C });
      } else if (w.name === "to")
        C = Ke(e, w.values[0]), r.push({ stop: Me, color: C });
      else if (w.name === "color-stop") {
        var Q = w.values.filter(St);
        if (Q.length === 2) {
          C = Ke(e, Q[1]);
          var y = Q[0];
          Ct(y) && r.push({ stop: { type: 16, number: 100 * y.number, flags: y.flags }, color: C });
        }
      }
    }
  }), a === 1 ? { angle: (t + ae(180)) % ae(360), stops: r, type: a } : { size: 3, shape: 0, stops: r, position: [], type: a };
} }, yu = { name: "background-image", initialValue: "none", type: 1, prefix: !1, parse: function(e, A) {
  if (A.length === 0)
    return [];
  var t = A[0];
  return t.type === 20 && t.value === "none" ? [] : A.filter(function(r) {
    return St(r) && function(a) {
      return !(a.type === 20 && a.value === "none" || a.type === 18 && !Ec[a.name]);
    }(r);
  }).map(function(r) {
    return fs(e, r);
  });
} }, bu = { name: "background-origin", initialValue: "border-box", prefix: !1, type: 1, parse: function(e, A) {
  return A.map(function(t) {
    if (yA(t))
      switch (t.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, Qu = { name: "background-position", initialValue: "0% 0%", type: 1, prefix: !1, parse: function(e, A) {
  return ve(A).map(function(t) {
    return t.filter(RA);
  }).map(pc);
} }, ku = { name: "background-repeat", initialValue: "repeat", prefix: !1, type: 1, parse: function(e, A) {
  return ve(A).map(function(t) {
    return t.filter(yA).map(function(r) {
      return r.value;
    }).join(" ");
  }).map(xu);
} }, xu = function(e) {
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
})(Ft || (Ft = {}));
var ur, Fu = { name: "background-size", initialValue: "0", prefix: !1, type: 1, parse: function(e, A) {
  return ve(A).map(function(t) {
    return t.filter(Uu);
  });
} }, Uu = function(e) {
  return yA(e) || RA(e);
}, _r = function(e) {
  return { name: "border-" + e + "-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" };
}, Eu = _r("top"), Su = _r("right"), Iu = _r("bottom"), Tu = _r("left"), Lr = function(e) {
  return { name: "border-radius-" + e, initialValue: "0 0", prefix: !1, type: 1, parse: function(A, t) {
    return pc(t.filter(RA));
  } };
}, _u = Lr("top-left"), Lu = Lr("top-right"), Ou = Lr("bottom-right"), Hu = Lr("bottom-left"), Or = function(e) {
  return { name: "border-" + e + "-style", initialValue: "solid", prefix: !1, type: 2, parse: function(A, t) {
    switch (t) {
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
}, Du = Or("top"), Mu = Or("right"), Ru = Or("bottom"), Ku = Or("left"), Hr = function(e) {
  return { name: "border-" + e + "-width", initialValue: "0", type: 0, prefix: !1, parse: function(A, t) {
    return oi(t) ? t.number : 0;
  } };
}, Pu = Hr("top"), ju = Hr("right"), Nu = Hr("bottom"), Gu = Hr("left"), Vu = { name: "color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, Wu = { name: "direction", initialValue: "ltr", prefix: !1, type: 2, parse: function(e, A) {
  return A === "rtl" ? 1 : 0;
} }, Yu = { name: "display", initialValue: "inline-block", prefix: !1, type: 1, parse: function(e, A) {
  return A.filter(yA).reduce(function(t, r) {
    return t | Ju(r.value);
  }, 0);
} }, Ju = function(e) {
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
}, Xu = { name: "float", initialValue: "none", prefix: !1, type: 2, parse: function(e, A) {
  switch (A) {
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
} }, zu = { name: "letter-spacing", initialValue: "0", prefix: !1, type: 0, parse: function(e, A) {
  return A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0;
} };
(function(e) {
  e.NORMAL = "normal", e.STRICT = "strict";
})(ur || (ur = {}));
var ii, qu = { name: "line-break", initialValue: "normal", prefix: !1, type: 2, parse: function(e, A) {
  return A === "strict" ? ur.STRICT : ur.NORMAL;
} }, Zu = { name: "line-height", initialValue: "normal", prefix: !1, type: 4 }, Oo = function(e, A) {
  return yA(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : RA(e) ? UA(e, A) : A;
}, $u = { name: "list-style-image", initialValue: "none", type: 0, prefix: !1, parse: function(e, A) {
  return A.type === 20 && A.value === "none" ? null : fs(e, A);
} }, Ad = { name: "list-style-position", initialValue: "outside", prefix: !1, type: 2, parse: function(e, A) {
  return A === "inside" ? 0 : 1;
} }, Nn = { name: "list-style-type", initialValue: "none", prefix: !1, type: 2, parse: function(e, A) {
  switch (A) {
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
} }, Dr = function(e) {
  return { name: "margin-" + e, initialValue: "0", prefix: !1, type: 4 };
}, ed = Dr("top"), td = Dr("right"), id = Dr("bottom"), rd = Dr("left"), nd = { name: "overflow", initialValue: "visible", prefix: !1, type: 1, parse: function(e, A) {
  return A.filter(yA).map(function(t) {
    switch (t.value) {
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
} }, sd = { name: "overflow-wrap", initialValue: "normal", prefix: !1, type: 2, parse: function(e, A) {
  return A === "break-word" ? "break-word" : "normal";
} }, Mr = function(e) {
  return { name: "padding-" + e, initialValue: "0", prefix: !1, type: 3, format: "length-percentage" };
}, od = Mr("top"), ad = Mr("right"), cd = Mr("bottom"), ld = Mr("left"), hd = { name: "text-align", initialValue: "left", prefix: !1, type: 2, parse: function(e, A) {
  switch (A) {
    case "right":
      return 2;
    case "center":
    case "justify":
      return 1;
    default:
      return 0;
  }
} }, ud = { name: "position", initialValue: "static", prefix: !1, type: 2, parse: function(e, A) {
  switch (A) {
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
} }, dd = { name: "text-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(e, A) {
  return A.length === 1 && jn(A[0], "none") ? [] : ve(A).map(function(t) {
    for (var r = { color: Te.TRANSPARENT, offsetX: VA, offsetY: VA, blur: VA }, a = 0, f = 0; f < t.length; f++) {
      var B = t[f];
      Ne(B) ? (a === 0 ? r.offsetX = B : a === 1 ? r.offsetY = B : r.blur = B, a++) : r.color = Ke(e, B);
    }
    return r;
  });
} }, gd = { name: "text-transform", initialValue: "none", prefix: !1, type: 2, parse: function(e, A) {
  switch (A) {
    case "uppercase":
      return 2;
    case "lowercase":
      return 1;
    case "capitalize":
      return 3;
  }
  return 0;
} }, fd = { name: "transform", initialValue: "none", prefix: !0, type: 0, parse: function(e, A) {
  if (A.type === 20 && A.value === "none")
    return null;
  if (A.type === 18) {
    var t = pd[A.name];
    if (t === void 0)
      throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
    return t(A.values);
  }
  return null;
} }, pd = { matrix: function(e) {
  var A = e.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return A.length === 6 ? A : null;
}, matrix3d: function(e) {
  var A = e.filter(function(C) {
    return C.type === 17;
  }).map(function(C) {
    return C.number;
  }), t = A[0], r = A[1];
  A[2], A[3];
  var a = A[4], f = A[5];
  A[6], A[7], A[8], A[9], A[10], A[11];
  var B = A[12], w = A[13];
  return A[14], A[15], A.length === 16 ? [t, r, a, f, B, w] : null;
} }, Ho = { type: 16, number: 50, flags: 4 }, Bd = [Ho, Ho], md = { name: "transform-origin", initialValue: "50% 50%", prefix: !0, type: 1, parse: function(e, A) {
  var t = A.filter(RA);
  return t.length !== 2 ? Bd : [t[0], t[1]];
} }, wd = { name: "visible", initialValue: "none", prefix: !1, type: 2, parse: function(e, A) {
  switch (A) {
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
})(ii || (ii = {}));
for (var Cd = { name: "word-break", initialValue: "normal", prefix: !1, type: 2, parse: function(e, A) {
  switch (A) {
    case "break-all":
      return ii.BREAK_ALL;
    case "keep-all":
      return ii.KEEP_ALL;
    default:
      return ii.NORMAL;
  }
} }, vd = { name: "z-index", initialValue: "auto", prefix: !1, type: 0, parse: function(e, A) {
  if (A.type === 20)
    return { auto: !0, order: 0 };
  if (Ct(A))
    return { auto: !1, order: A.number };
  throw new Error("Invalid z-index number parsed");
} }, Do = function(e, A) {
  if (A.type === 15)
    switch (A.unit.toLowerCase()) {
      case "s":
        return 1e3 * A.number;
      case "ms":
        return A.number;
    }
  throw new Error("Unsupported time type");
}, yd = { name: "opacity", initialValue: "1", type: 0, prefix: !1, parse: function(e, A) {
  return Ct(A) ? A.number : 1;
} }, bd = { name: "text-decoration-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, Qd = { name: "text-decoration-line", initialValue: "none", prefix: !1, type: 1, parse: function(e, A) {
  return A.filter(yA).map(function(t) {
    switch (t.value) {
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
  }).filter(function(t) {
    return t !== 0;
  });
} }, kd = { name: "font-family", initialValue: "", prefix: !1, type: 1, parse: function(e, A) {
  var t = [], r = [];
  return A.forEach(function(a) {
    switch (a.type) {
      case 20:
      case 0:
        t.push(a.value);
        break;
      case 17:
        t.push(a.number.toString());
        break;
      case 4:
        r.push(t.join(" ")), t.length = 0;
    }
  }), t.length && r.push(t.join(" ")), r.map(function(a) {
    return a.indexOf(" ") === -1 ? a : "'" + a + "'";
  });
} }, xd = { name: "font-size", initialValue: "0", prefix: !1, type: 3, format: "length" }, Fd = { name: "font-weight", initialValue: "normal", type: 0, prefix: !1, parse: function(e, A) {
  return Ct(A) ? A.number : yA(A) && A.value === "bold" ? 700 : 400;
} }, Ud = { name: "font-variant", initialValue: "none", type: 1, prefix: !1, parse: function(e, A) {
  return A.filter(yA).map(function(t) {
    return t.value;
  });
} }, Ed = { name: "font-style", initialValue: "normal", prefix: !1, type: 2, parse: function(e, A) {
  switch (A) {
    case "oblique":
      return "oblique";
    case "italic":
      return "italic";
    default:
      return "normal";
  }
} }, PA = function(e, A) {
  return !!(e & A);
}, Sd = { name: "content", initialValue: "none", type: 1, prefix: !1, parse: function(e, A) {
  if (A.length === 0)
    return [];
  var t = A[0];
  return t.type === 20 && t.value === "none" ? [] : A;
} }, Id = { name: "counter-increment", initialValue: "none", prefix: !0, type: 1, parse: function(e, A) {
  if (A.length === 0)
    return null;
  var t = A[0];
  if (t.type === 20 && t.value === "none")
    return null;
  for (var r = [], a = A.filter(Eo), f = 0; f < a.length; f++) {
    var B = a[f], w = a[f + 1];
    if (B.type === 20) {
      var C = w && Ct(w) ? w.number : 1;
      r.push({ counter: B.value, increment: C });
    }
  }
  return r;
} }, Td = { name: "counter-reset", initialValue: "none", prefix: !0, type: 1, parse: function(e, A) {
  if (A.length === 0)
    return [];
  for (var t = [], r = A.filter(Eo), a = 0; a < r.length; a++) {
    var f = r[a], B = r[a + 1];
    if (yA(f) && f.value !== "none") {
      var w = B && Ct(B) ? B.number : 0;
      t.push({ counter: f.value, reset: w });
    }
  }
  return t;
} }, _d = { name: "duration", initialValue: "0s", prefix: !1, type: 1, parse: function(e, A) {
  return A.filter(oi).map(function(t) {
    return Do(e, t);
  });
} }, Ld = { name: "quotes", initialValue: "none", prefix: !0, type: 1, parse: function(e, A) {
  if (A.length === 0)
    return null;
  var t = A[0];
  if (t.type === 20 && t.value === "none")
    return null;
  var r = [], a = A.filter(pu);
  if (a.length % 2 != 0)
    return null;
  for (var f = 0; f < a.length; f += 2) {
    var B = a[f].value, w = a[f + 1].value;
    r.push({ open: B, close: w });
  }
  return r;
} }, Mo = function(e, A, t) {
  if (!e)
    return "";
  var r = e[Math.min(A, e.length - 1)];
  return r ? t ? r.open : r.close : "";
}, Od = { name: "box-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(e, A) {
  return A.length === 1 && jn(A[0], "none") ? [] : ve(A).map(function(t) {
    for (var r = { color: 255, offsetX: VA, offsetY: VA, blur: VA, spread: VA, inset: !1 }, a = 0, f = 0; f < t.length; f++) {
      var B = t[f];
      jn(B, "inset") ? r.inset = !0 : Ne(B) ? (a === 0 ? r.offsetX = B : a === 1 ? r.offsetY = B : a === 2 ? r.blur = B : r.spread = B, a++) : r.color = Ke(e, B);
    }
    return r;
  });
} }, Hd = { name: "paint-order", initialValue: "normal", prefix: !1, type: 1, parse: function(e, A) {
  var t = [];
  return A.filter(yA).forEach(function(r) {
    switch (r.value) {
      case "stroke":
        t.push(1);
        break;
      case "fill":
        t.push(0);
        break;
      case "markers":
        t.push(2);
    }
  }), [0, 1, 2].forEach(function(r) {
    t.indexOf(r) === -1 && t.push(r);
  }), t;
} }, Dd = { name: "-webkit-text-stroke-color", initialValue: "currentcolor", prefix: !1, type: 3, format: "color" }, Md = { name: "-webkit-text-stroke-width", initialValue: "0", type: 0, prefix: !1, parse: function(e, A) {
  return oi(A) ? A.number : 0;
} }, Rd = function() {
  function e(A, t) {
    var r, a;
    this.animationDuration = cA(A, _d, t.animationDuration), this.backgroundClip = cA(A, wu, t.backgroundClip), this.backgroundColor = cA(A, Cu, t.backgroundColor), this.backgroundImage = cA(A, yu, t.backgroundImage), this.backgroundOrigin = cA(A, bu, t.backgroundOrigin), this.backgroundPosition = cA(A, Qu, t.backgroundPosition), this.backgroundRepeat = cA(A, ku, t.backgroundRepeat), this.backgroundSize = cA(A, Fu, t.backgroundSize), this.borderTopColor = cA(A, Eu, t.borderTopColor), this.borderRightColor = cA(A, Su, t.borderRightColor), this.borderBottomColor = cA(A, Iu, t.borderBottomColor), this.borderLeftColor = cA(A, Tu, t.borderLeftColor), this.borderTopLeftRadius = cA(A, _u, t.borderTopLeftRadius), this.borderTopRightRadius = cA(A, Lu, t.borderTopRightRadius), this.borderBottomRightRadius = cA(A, Ou, t.borderBottomRightRadius), this.borderBottomLeftRadius = cA(A, Hu, t.borderBottomLeftRadius), this.borderTopStyle = cA(A, Du, t.borderTopStyle), this.borderRightStyle = cA(A, Mu, t.borderRightStyle), this.borderBottomStyle = cA(A, Ru, t.borderBottomStyle), this.borderLeftStyle = cA(A, Ku, t.borderLeftStyle), this.borderTopWidth = cA(A, Pu, t.borderTopWidth), this.borderRightWidth = cA(A, ju, t.borderRightWidth), this.borderBottomWidth = cA(A, Nu, t.borderBottomWidth), this.borderLeftWidth = cA(A, Gu, t.borderLeftWidth), this.boxShadow = cA(A, Od, t.boxShadow), this.color = cA(A, Vu, t.color), this.direction = cA(A, Wu, t.direction), this.display = cA(A, Yu, t.display), this.float = cA(A, Xu, t.cssFloat), this.fontFamily = cA(A, kd, t.fontFamily), this.fontSize = cA(A, xd, t.fontSize), this.fontStyle = cA(A, Ed, t.fontStyle), this.fontVariant = cA(A, Ud, t.fontVariant), this.fontWeight = cA(A, Fd, t.fontWeight), this.letterSpacing = cA(A, zu, t.letterSpacing), this.lineBreak = cA(A, qu, t.lineBreak), this.lineHeight = cA(A, Zu, t.lineHeight), this.listStyleImage = cA(A, $u, t.listStyleImage), this.listStylePosition = cA(A, Ad, t.listStylePosition), this.listStyleType = cA(A, Nn, t.listStyleType), this.marginTop = cA(A, ed, t.marginTop), this.marginRight = cA(A, td, t.marginRight), this.marginBottom = cA(A, id, t.marginBottom), this.marginLeft = cA(A, rd, t.marginLeft), this.opacity = cA(A, yd, t.opacity);
    var f = cA(A, nd, t.overflow);
    this.overflowX = f[0], this.overflowY = f[f.length > 1 ? 1 : 0], this.overflowWrap = cA(A, sd, t.overflowWrap), this.paddingTop = cA(A, od, t.paddingTop), this.paddingRight = cA(A, ad, t.paddingRight), this.paddingBottom = cA(A, cd, t.paddingBottom), this.paddingLeft = cA(A, ld, t.paddingLeft), this.paintOrder = cA(A, Hd, t.paintOrder), this.position = cA(A, ud, t.position), this.textAlign = cA(A, hd, t.textAlign), this.textDecorationColor = cA(A, bd, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = cA(A, Qd, (a = t.textDecorationLine) !== null && a !== void 0 ? a : t.textDecoration), this.textShadow = cA(A, dd, t.textShadow), this.textTransform = cA(A, gd, t.textTransform), this.transform = cA(A, fd, t.transform), this.transformOrigin = cA(A, md, t.transformOrigin), this.visibility = cA(A, wd, t.visibility), this.webkitTextStrokeColor = cA(A, Dd, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = cA(A, Md, t.webkitTextStrokeWidth), this.wordBreak = cA(A, Cd, t.wordBreak), this.zIndex = cA(A, vd, t.zIndex);
  }
  return e.prototype.isVisible = function() {
    return this.display > 0 && this.opacity > 0 && this.visibility === 0;
  }, e.prototype.isTransparent = function() {
    return Pe(this.backgroundColor);
  }, e.prototype.isTransformed = function() {
    return this.transform !== null;
  }, e.prototype.isPositioned = function() {
    return this.position !== 0;
  }, e.prototype.isPositionedWithZIndex = function() {
    return this.isPositioned() && !this.zIndex.auto;
  }, e.prototype.isFloating = function() {
    return this.float !== 0;
  }, e.prototype.isInlineLevel = function() {
    return PA(this.display, 4) || PA(this.display, 33554432) || PA(this.display, 268435456) || PA(this.display, 536870912) || PA(this.display, 67108864) || PA(this.display, 134217728);
  }, e;
}(), Kd = function(e, A) {
  this.content = cA(e, Sd, A.content), this.quotes = cA(e, Ld, A.quotes);
}, Ro = function(e, A) {
  this.counterIncrement = cA(e, Id, A.counterIncrement), this.counterReset = cA(e, Td, A.counterReset);
}, cA = function(e, A, t) {
  var r = new gc(), a = t != null ? t.toString() : A.initialValue;
  r.write(a);
  var f = new fc(r.read());
  switch (A.type) {
    case 2:
      var B = f.parseComponentValue();
      return A.parse(e, yA(B) ? B.value : A.initialValue);
    case 0:
      return A.parse(e, f.parseComponentValue());
    case 1:
      return A.parse(e, f.parseComponentValues());
    case 4:
      return f.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return Tr(e, f.parseComponentValue());
        case "color":
          return Ke(e, f.parseComponentValue());
        case "image":
          return fs(e, f.parseComponentValue());
        case "length":
          var w = f.parseComponentValue();
          return Ne(w) ? w : VA;
        case "length-percentage":
          var C = f.parseComponentValue();
          return RA(C) ? C : VA;
        case "time":
          return Do(e, f.parseComponentValue());
      }
  }
}, Gn = function(e, A) {
  var t = function(r) {
    switch (r.getAttribute("data-html2canvas-debug")) {
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
  return t === 1 || A === t;
}, ye = function(e, A) {
  this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, Gn(A, 3), this.styles = new Rd(e, window.getComputedStyle(A, null)), Yn(A) && (this.styles.animationDuration.some(function(t) {
    return t > 0;
  }) && (A.style.animationDuration = "0s"), this.styles.transform !== null && (A.style.transform = "none")), this.bounds = Ir(this.context, A), Gn(A, 4) && (this.flags |= 16);
}, Pd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", qt = typeof Uint8Array > "u" ? [] : new Uint8Array(256), Pi = 0; Pi < 64; Pi++)
  qt[Pd.charCodeAt(Pi)] = Pi;
for (var Ko = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, jd = function() {
  function e(A, t, r, a, f, B) {
    this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = a, this.index = f, this.data = B;
  }
  return e.prototype.get = function(A) {
    var t;
    if (A >= 0) {
      if (A < 55296 || A > 56319 && A <= 65535)
        return t = ((t = this.index[A >> 5]) << 2) + (31 & A), this.data[t];
      if (A <= 65535)
        return t = ((t = this.index[2048 + (A - 55296 >> 5)]) << 2) + (31 & A), this.data[t];
      if (A < this.highStart)
        return t = 2080 + (A >> 11), t = this.index[t], t += A >> 5 & 63, t = ((t = this.index[t]) << 2) + (31 & A), this.data[t];
      if (A <= 1114111)
        return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, e;
}(), Nd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Gd = typeof Uint8Array > "u" ? [] : new Uint8Array(256), ji = 0; ji < 64; ji++)
  Gd[Nd.charCodeAt(ji)] = ji;
var ri, Po = 8, $r = 9, jo = 11, No = 12, Vd = function() {
  for (var e = [], A = 0; A < arguments.length; A++)
    e[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var t = e.length;
  if (!t)
    return "";
  for (var r = [], a = -1, f = ""; ++a < t; ) {
    var B = e[a];
    B <= 65535 ? r.push(B) : (B -= 65536, r.push(55296 + (B >> 10), B % 1024 + 56320)), (a + 1 === t || r.length > 16384) && (f += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return f;
}, Wd = function(e, A) {
  var t, r, a, f = function(y) {
    var x, E, _, S, D, m = 0.75 * y.length, q = y.length, rA = 0;
    y[y.length - 1] === "=" && (m--, y[y.length - 2] === "=" && m--);
    var oA = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && Uint8Array.prototype.slice !== void 0 ? new ArrayBuffer(m) : new Array(m), d = Array.isArray(oA) ? oA : new Uint8Array(oA);
    for (x = 0; x < q; x += 4)
      E = qt[y.charCodeAt(x)], _ = qt[y.charCodeAt(x + 1)], S = qt[y.charCodeAt(x + 2)], D = qt[y.charCodeAt(x + 3)], d[rA++] = E << 2 | _ >> 4, d[rA++] = (15 & _) << 4 | S >> 2, d[rA++] = (3 & S) << 6 | 63 & D;
    return oA;
  }(e), B = Array.isArray(f) ? function(y) {
    for (var x = y.length, E = [], _ = 0; _ < x; _ += 4)
      E.push(y[_ + 3] << 24 | y[_ + 2] << 16 | y[_ + 1] << 8 | y[_]);
    return E;
  }(f) : new Uint32Array(f), w = Array.isArray(f) ? function(y) {
    for (var x = y.length, E = [], _ = 0; _ < x; _ += 2)
      E.push(y[_ + 1] << 8 | y[_]);
    return E;
  }(f) : new Uint16Array(f), C = Ko(w, 12, B[4] / 2), Q = B[5] === 2 ? Ko(w, (24 + B[4]) / 2) : (t = B, r = Math.ceil((24 + B[4]) / 4), t.slice ? t.slice(r, a) : new Uint32Array(Array.prototype.slice.call(t, r, a)));
  return new jd(B[0], B[1], B[2], B[3], C, Q);
}("AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA="), re = "×", Yd = function(e) {
  return Wd.get(e);
}, Jd = function(e, A, t) {
  var r = t - 2, a = A[r], f = A[t - 1], B = A[t];
  if (f === 2 && B === 3)
    return re;
  if (f === 2 || f === 3 || f === 4 || B === 2 || B === 3 || B === 4)
    return "÷";
  if (f === Po && [Po, $r, jo, No].indexOf(B) !== -1 || !(f !== jo && f !== $r || B !== $r && B !== 10) || (f === No || f === 10) && B === 10 || B === 13 || B === 5 || B === 7 || f === 1)
    return re;
  if (f === 13 && B === 14) {
    for (; a === 5; )
      a = A[--r];
    if (a === 14)
      return re;
  }
  if (f === 15 && B === 15) {
    for (var w = 0; a === 15; )
      w++, a = A[--r];
    if (w % 2 == 0)
      return re;
  }
  return "÷";
}, Xd = function(e) {
  var A = function(B) {
    for (var w = [], C = 0, Q = B.length; C < Q; ) {
      var y = B.charCodeAt(C++);
      if (y >= 55296 && y <= 56319 && C < Q) {
        var x = B.charCodeAt(C++);
        (64512 & x) == 56320 ? w.push(((1023 & y) << 10) + (1023 & x) + 65536) : (w.push(y), C--);
      } else
        w.push(y);
    }
    return w;
  }(e), t = A.length, r = 0, a = 0, f = A.map(Yd);
  return { next: function() {
    if (r >= t)
      return { done: !0, value: null };
    for (var B = re; r < t && (B = Jd(0, f, ++r)) === re; )
      ;
    if (B !== re || r === t) {
      var w = Vd.apply(null, A.slice(a, r));
      return a = r, { value: w, done: !1 };
    }
    return { done: !0, value: null };
  } };
}, Go = function(e) {
  return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255;
}, Vn = function(e, A, t, r, a) {
  var f = "http://www.w3.org/2000/svg", B = document.createElementNS(f, "svg"), w = document.createElementNS(f, "foreignObject");
  return B.setAttributeNS(null, "width", e.toString()), B.setAttributeNS(null, "height", A.toString()), w.setAttributeNS(null, "width", "100%"), w.setAttributeNS(null, "height", "100%"), w.setAttributeNS(null, "x", t.toString()), w.setAttributeNS(null, "y", r.toString()), w.setAttributeNS(null, "externalResourcesRequired", "true"), B.appendChild(w), w.appendChild(a), B;
}, Vo = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      return A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, GA = { get SUPPORT_RANGE_BOUNDS() {
  var e = function(A) {
    if (A.createRange) {
      var t = A.createRange();
      if (t.getBoundingClientRect) {
        var r = A.createElement("boundtest");
        r.style.height = "123px", r.style.display = "block", A.body.appendChild(r), t.selectNode(r);
        var a = t.getBoundingClientRect(), f = Math.round(a.height);
        if (A.body.removeChild(r), f === 123)
          return !0;
      }
    }
    return !1;
  }(document);
  return Object.defineProperty(GA, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
}, get SUPPORT_WORD_BREAKING() {
  var e = GA.SUPPORT_RANGE_BOUNDS && function(A) {
    var t = A.createElement("boundtest");
    t.style.width = "50px", t.style.display = "block", t.style.fontSize = "12px", t.style.letterSpacing = "0px", t.style.wordSpacing = "0px", A.body.appendChild(t);
    var r = A.createRange();
    t.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var a = t.firstChild, f = cr(a.data).map(function(Q) {
      return HA(Q);
    }), B = 0, w = {}, C = f.every(function(Q, y) {
      r.setStart(a, B), r.setEnd(a, B + Q.length);
      var x = r.getBoundingClientRect();
      B += Q.length;
      var E = x.x > w.x || x.y > w.y;
      return w = x, y === 0 || E;
    });
    return A.body.removeChild(t), C;
  }(document);
  return Object.defineProperty(GA, "SUPPORT_WORD_BREAKING", { value: e }), e;
}, get SUPPORT_SVG_DRAWING() {
  var e = function(A) {
    var t = new Image(), r = A.createElement("canvas"), a = r.getContext("2d");
    if (!a)
      return !1;
    t.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
      a.drawImage(t, 0, 0), r.toDataURL();
    } catch {
      return !1;
    }
    return !0;
  }(document);
  return Object.defineProperty(GA, "SUPPORT_SVG_DRAWING", { value: e }), e;
}, get SUPPORT_FOREIGNOBJECT_DRAWING() {
  var e = typeof Array.from == "function" && typeof window.fetch == "function" ? function(A) {
    var t = A.createElement("canvas"), r = 100;
    t.width = r, t.height = r;
    var a = t.getContext("2d");
    if (!a)
      return Promise.reject(!1);
    a.fillStyle = "rgb(0, 255, 0)", a.fillRect(0, 0, r, r);
    var f = new Image(), B = t.toDataURL();
    f.src = B;
    var w = Vn(r, r, 0, 0, f);
    return a.fillStyle = "red", a.fillRect(0, 0, r, r), Vo(w).then(function(C) {
      a.drawImage(C, 0, 0);
      var Q = a.getImageData(0, 0, r, r).data;
      a.fillStyle = "red", a.fillRect(0, 0, r, r);
      var y = A.createElement("div");
      return y.style.backgroundImage = "url(" + B + ")", y.style.height = r + "px", Go(Q) ? Vo(Vn(r, r, 0, 0, y)) : Promise.reject(!1);
    }).then(function(C) {
      return a.drawImage(C, 0, 0), Go(a.getImageData(0, 0, r, r).data);
    }).catch(function() {
      return !1;
    });
  }(document) : Promise.resolve(!1);
  return Object.defineProperty(GA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
}, get SUPPORT_CORS_IMAGES() {
  var e = new Image().crossOrigin !== void 0;
  return Object.defineProperty(GA, "SUPPORT_CORS_IMAGES", { value: e }), e;
}, get SUPPORT_RESPONSE_TYPE() {
  var e = typeof new XMLHttpRequest().responseType == "string";
  return Object.defineProperty(GA, "SUPPORT_RESPONSE_TYPE", { value: e }), e;
}, get SUPPORT_CORS_XHR() {
  var e = "withCredentials" in new XMLHttpRequest();
  return Object.defineProperty(GA, "SUPPORT_CORS_XHR", { value: e }), e;
}, get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
  var e = !(typeof Intl > "u" || !Intl.Segmenter);
  return Object.defineProperty(GA, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: e }), e;
} }, ni = function(e, A) {
  this.text = e, this.bounds = A;
}, zd = function(e, A) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(A.cloneNode(!0));
    var a = A.parentNode;
    if (a) {
      a.replaceChild(r, A);
      var f = Ir(e, r);
      return r.firstChild && a.replaceChild(r.firstChild, r), f;
    }
  }
  return Le.EMPTY;
}, Wo = function(e, A, t) {
  var r = e.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  var a = r.createRange();
  return a.setStart(e, A), a.setEnd(e, A + t), a;
}, ps = function(e) {
  if (GA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(A.segment(e)).map(function(t) {
      return t.segment;
    });
  }
  return function(t) {
    for (var r, a = Xd(t), f = []; !(r = a.next()).done; )
      r.value && f.push(r.value.slice());
    return f;
  }(e);
}, qd = function(e, A) {
  return A.letterSpacing !== 0 ? ps(e) : function(t, r) {
    if (GA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var a = new Intl.Segmenter(void 0, { granularity: "word" });
      return Array.from(a.segment(t)).map(function(f) {
        return f.segment;
      });
    }
    return $d(t, r);
  }(e, A);
}, Zd = [32, 160, 4961, 65792, 65793, 4153, 4241], $d = function(e, A) {
  for (var t, r = function(B, w) {
    var C = cr(B), Q = Yh(C, w), y = Q[0], x = Q[1], E = Q[2], _ = C.length, S = 0, D = 0;
    return { next: function() {
      if (D >= _)
        return { done: !0, value: null };
      for (var m = pA; D < _ && (m = Wh(C, x, y, ++D, E)) === pA; )
        ;
      if (m !== pA || D === _) {
        var q = new Jh(C, m, S, D);
        return S = D, { value: q, done: !1 };
      }
      return { done: !0, value: null };
    } };
  }(e, { lineBreak: A.lineBreak, wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak }), a = [], f = function() {
    if (t.value) {
      var B = t.value.slice(), w = cr(B), C = "";
      w.forEach(function(Q) {
        Zd.indexOf(Q) === -1 ? C += HA(Q) : (C.length && a.push(C), a.push(HA(Q)), C = "");
      }), C.length && a.push(C);
    }
  }; !(t = r.next()).done; )
    f();
  return a;
}, Ag = function(e, A, t) {
  this.text = eg(A.data, t.textTransform), this.textBounds = function(r, a, f, B) {
    var w = qd(a, f), C = [], Q = 0;
    return w.forEach(function(y) {
      if (f.textDecorationLine.length || y.trim().length > 0)
        if (GA.SUPPORT_RANGE_BOUNDS) {
          var x = Wo(B, Q, y.length).getClientRects();
          if (x.length > 1) {
            var E = ps(y), _ = 0;
            E.forEach(function(D) {
              C.push(new ni(D, Le.fromDOMRectList(r, Wo(B, _ + Q, D.length).getClientRects()))), _ += D.length;
            });
          } else
            C.push(new ni(y, Le.fromDOMRectList(r, x)));
        } else {
          var S = B.splitText(y.length);
          C.push(new ni(y, zd(r, B))), B = S;
        }
      else
        GA.SUPPORT_RANGE_BOUNDS || (B = B.splitText(y.length));
      Q += y.length;
    }), C;
  }(e, this.text, t, A);
}, eg = function(e, A) {
  switch (A) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(tg, ig);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, tg = /(^|\s|:|-|\(|\))([a-z])/g, ig = function(e, A, t) {
  return e.length > 0 ? A + t.toUpperCase() : e;
}, Sc = function(e) {
  function A(t, r) {
    var a = e.call(this, t, r) || this;
    return a.src = r.currentSrc || r.src, a.intrinsicWidth = r.naturalWidth, a.intrinsicHeight = r.naturalHeight, a.context.cache.addImage(a.src), a;
  }
  return fe(A, e), A;
}(ye), Ic = function(e) {
  function A(t, r) {
    var a = e.call(this, t, r) || this;
    return a.canvas = r, a.intrinsicWidth = r.width, a.intrinsicHeight = r.height, a;
  }
  return fe(A, e), A;
}(ye), Tc = function(e) {
  function A(t, r) {
    var a = e.call(this, t, r) || this, f = new XMLSerializer(), B = Ir(t, r);
    return r.setAttribute("width", B.width + "px"), r.setAttribute("height", B.height + "px"), a.svg = "data:image/svg+xml," + encodeURIComponent(f.serializeToString(r)), a.intrinsicWidth = r.width.baseVal.value, a.intrinsicHeight = r.height.baseVal.value, a.context.cache.addImage(a.svg), a;
  }
  return fe(A, e), A;
}(ye), _c = function(e) {
  function A(t, r) {
    var a = e.call(this, t, r) || this;
    return a.value = r.value, a;
  }
  return fe(A, e), A;
}(ye), Wn = function(e) {
  function A(t, r) {
    var a = e.call(this, t, r) || this;
    return a.start = r.start, a.reversed = typeof r.reversed == "boolean" && r.reversed === !0, a;
  }
  return fe(A, e), A;
}(ye), rg = [{ type: 15, flags: 0, unit: "px", number: 3 }], ng = [{ type: 16, flags: 0, number: 50 }], dr = "checkbox", gr = "radio", sg = "password", Yo = 707406591, Bs = function(e) {
  function A(t, r) {
    var a, f = e.call(this, t, r) || this;
    switch (f.type = r.type.toLowerCase(), f.checked = r.checked, f.value = function(B) {
      var w = B.type === sg ? new Array(B.value.length + 1).join("•") : B.value;
      return w.length === 0 ? B.placeholder || "" : w;
    }(r), f.type !== dr && f.type !== gr || (f.styles.backgroundColor = 3739148031, f.styles.borderTopColor = f.styles.borderRightColor = f.styles.borderBottomColor = f.styles.borderLeftColor = 2779096575, f.styles.borderTopWidth = f.styles.borderRightWidth = f.styles.borderBottomWidth = f.styles.borderLeftWidth = 1, f.styles.borderTopStyle = f.styles.borderRightStyle = f.styles.borderBottomStyle = f.styles.borderLeftStyle = 1, f.styles.backgroundClip = [0], f.styles.backgroundOrigin = [0], f.bounds = (a = f.bounds).width > a.height ? new Le(a.left + (a.width - a.height) / 2, a.top, a.height, a.height) : a.width < a.height ? new Le(a.left, a.top + (a.height - a.width) / 2, a.width, a.width) : a), f.type) {
      case dr:
        f.styles.borderTopRightRadius = f.styles.borderTopLeftRadius = f.styles.borderBottomRightRadius = f.styles.borderBottomLeftRadius = rg;
        break;
      case gr:
        f.styles.borderTopRightRadius = f.styles.borderTopLeftRadius = f.styles.borderBottomRightRadius = f.styles.borderBottomLeftRadius = ng;
    }
    return f;
  }
  return fe(A, e), A;
}(ye), Lc = function(e) {
  function A(t, r) {
    var a = e.call(this, t, r) || this, f = r.options[r.selectedIndex || 0];
    return a.value = f && f.text || "", a;
  }
  return fe(A, e), A;
}(ye), Oc = function(e) {
  function A(t, r) {
    var a = e.call(this, t, r) || this;
    return a.value = r.value, a;
  }
  return fe(A, e), A;
}(ye), Hc = function(e) {
  function A(t, r) {
    var a = e.call(this, t, r) || this;
    a.src = r.src, a.width = parseInt(r.width, 10) || 0, a.height = parseInt(r.height, 10) || 0, a.backgroundColor = a.styles.backgroundColor;
    try {
      if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
        a.tree = Mc(t, r.contentWindow.document.documentElement);
        var f = r.contentWindow.document.documentElement ? ti(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : Te.TRANSPARENT, B = r.contentWindow.document.body ? ti(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : Te.TRANSPARENT;
        a.backgroundColor = Pe(f) ? Pe(B) ? a.styles.backgroundColor : B : f;
      }
    } catch {
    }
    return a;
  }
  return fe(A, e), A;
}(ye), og = ["OL", "UL", "MENU"], rr = function(e, A, t, r) {
  for (var a = A.firstChild, f = void 0; a; a = f)
    if (f = a.nextSibling, Rc(a) && a.data.trim().length > 0)
      t.textNodes.push(new Ag(e, a, t.styles));
    else if (kt(a))
      if (Nc(a) && a.assignedNodes)
        a.assignedNodes().forEach(function(w) {
          return rr(e, w, t, r);
        });
      else {
        var B = Dc(e, a);
        B.styles.isVisible() && (ag(a, B, r) ? B.flags |= 4 : cg(B.styles) && (B.flags |= 2), og.indexOf(a.tagName) !== -1 && (B.flags |= 8), t.elements.push(B), a.slot, a.shadowRoot ? rr(e, a.shadowRoot, B, r) : fr(a) || Kc(a) || pr(a) || rr(e, a, B, r));
      }
}, Dc = function(e, A) {
  return Jn(A) ? new Sc(e, A) : Pc(A) ? new Ic(e, A) : Kc(A) ? new Tc(e, A) : lg(A) ? new _c(e, A) : hg(A) ? new Wn(e, A) : ug(A) ? new Bs(e, A) : pr(A) ? new Lc(e, A) : fr(A) ? new Oc(e, A) : jc(A) ? new Hc(e, A) : new ye(e, A);
}, Mc = function(e, A) {
  var t = Dc(e, A);
  return t.flags |= 4, rr(e, A, t, t), t;
}, ag = function(e, A, t) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || ms(e) && t.styles.isTransparent();
}, cg = function(e) {
  return e.isPositioned() || e.isFloating();
}, Rc = function(e) {
  return e.nodeType === Node.TEXT_NODE;
}, kt = function(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}, Yn = function(e) {
  return kt(e) && e.style !== void 0 && !nr(e);
}, nr = function(e) {
  return typeof e.className == "object";
}, lg = function(e) {
  return e.tagName === "LI";
}, hg = function(e) {
  return e.tagName === "OL";
}, ug = function(e) {
  return e.tagName === "INPUT";
}, Kc = function(e) {
  return e.tagName === "svg";
}, ms = function(e) {
  return e.tagName === "BODY";
}, Pc = function(e) {
  return e.tagName === "CANVAS";
}, Jo = function(e) {
  return e.tagName === "VIDEO";
}, Jn = function(e) {
  return e.tagName === "IMG";
}, jc = function(e) {
  return e.tagName === "IFRAME";
}, Xo = function(e) {
  return e.tagName === "STYLE";
}, fr = function(e) {
  return e.tagName === "TEXTAREA";
}, pr = function(e) {
  return e.tagName === "SELECT";
}, Nc = function(e) {
  return e.tagName === "SLOT";
}, zo = function(e) {
  return e.tagName.indexOf("-") > 0;
}, dg = function() {
  function e() {
    this.counters = {};
  }
  return e.prototype.getCounterValue = function(A) {
    var t = this.counters[A];
    return t && t.length ? t[t.length - 1] : 1;
  }, e.prototype.getCounterValues = function(A) {
    var t = this.counters[A];
    return t || [];
  }, e.prototype.pop = function(A) {
    var t = this;
    A.forEach(function(r) {
      return t.counters[r].pop();
    });
  }, e.prototype.parse = function(A) {
    var t = this, r = A.counterIncrement, a = A.counterReset, f = !0;
    r !== null && r.forEach(function(w) {
      var C = t.counters[w.counter];
      C && w.increment !== 0 && (f = !1, C.length || C.push(1), C[Math.max(0, C.length - 1)] += w.increment);
    });
    var B = [];
    return f && a.forEach(function(w) {
      var C = t.counters[w.counter];
      B.push(w.counter), C || (C = t.counters[w.counter] = []), C.push(w.reset);
    }), B;
  }, e;
}(), qo = { integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"] }, Zo = { integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"] }, gg = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"] }, fg = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"] }, ut = function(e, A, t, r, a, f) {
  return e < A || e > t ? ai(e, a, f.length > 0) : r.integers.reduce(function(B, w, C) {
    for (; e >= w; )
      e -= w, B += r.values[C];
    return B;
  }, "") + f;
}, Gc = function(e, A, t, r) {
  var a = "";
  do
    t || e--, a = r(e) + a, e /= A;
  while (e * A >= A);
  return a;
}, LA = function(e, A, t, r, a) {
  var f = t - A + 1;
  return (e < 0 ? "-" : "") + (Gc(Math.abs(e), f, r, function(B) {
    return HA(Math.floor(B % f) + A);
  }) + a);
}, Je = function(e, A, t) {
  t === void 0 && (t = ". ");
  var r = A.length;
  return Gc(Math.abs(e), r, !1, function(a) {
    return A[Math.floor(a % r)];
  }) + t;
}, Fe = function(e, A, t, r, a, f) {
  if (e < -9999 || e > 9999)
    return ai(e, 4, a.length > 0);
  var B = Math.abs(e), w = a;
  if (B === 0)
    return A[0] + w;
  for (var C = 0; B > 0 && C <= 4; C++) {
    var Q = B % 10;
    Q === 0 && PA(f, 1) && w !== "" ? w = A[Q] + w : Q > 1 || Q === 1 && C === 0 || Q === 1 && C === 1 && PA(f, 2) || Q === 1 && C === 1 && PA(f, 4) && e > 100 || Q === 1 && C > 1 && PA(f, 8) ? w = A[Q] + (C > 0 ? t[C - 1] : "") + w : Q === 1 && C > 0 && (w = t[C - 1] + w), B = Math.floor(B / 10);
  }
  return (e < 0 ? r : "") + w;
}, $o = "十百千萬", Aa = "拾佰仟萬", ea = "マイナス", An = "마이너스", ai = function(e, A, t) {
  var r = t ? ". " : "", a = t ? "、" : "", f = t ? ", " : "", B = t ? " " : "";
  switch (A) {
    case 0:
      return "•" + B;
    case 1:
      return "◦" + B;
    case 2:
      return "◾" + B;
    case 5:
      var w = LA(e, 48, 57, !0, r);
      return w.length < 4 ? "0" + w : w;
    case 4:
      return Je(e, "〇一二三四五六七八九", a);
    case 6:
      return ut(e, 1, 3999, qo, 3, r).toLowerCase();
    case 7:
      return ut(e, 1, 3999, qo, 3, r);
    case 8:
      return LA(e, 945, 969, !1, r);
    case 9:
      return LA(e, 97, 122, !1, r);
    case 10:
      return LA(e, 65, 90, !1, r);
    case 11:
      return LA(e, 1632, 1641, !0, r);
    case 12:
    case 49:
      return ut(e, 1, 9999, Zo, 3, r);
    case 35:
      return ut(e, 1, 9999, Zo, 3, r).toLowerCase();
    case 13:
      return LA(e, 2534, 2543, !0, r);
    case 14:
    case 30:
      return LA(e, 6112, 6121, !0, r);
    case 15:
      return Je(e, "子丑寅卯辰巳午未申酉戌亥", a);
    case 16:
      return Je(e, "甲乙丙丁戊己庚辛壬癸", a);
    case 17:
    case 48:
      return Fe(e, "零一二三四五六七八九", $o, "負", a, 14);
    case 47:
      return Fe(e, "零壹貳參肆伍陸柒捌玖", Aa, "負", a, 15);
    case 42:
      return Fe(e, "零一二三四五六七八九", $o, "负", a, 14);
    case 41:
      return Fe(e, "零壹贰叁肆伍陆柒捌玖", Aa, "负", a, 15);
    case 26:
      return Fe(e, "〇一二三四五六七八九", "十百千万", ea, a, 0);
    case 25:
      return Fe(e, "零壱弐参四伍六七八九", "拾百千万", ea, a, 7);
    case 31:
      return Fe(e, "영일이삼사오육칠팔구", "십백천만", An, f, 7);
    case 33:
      return Fe(e, "零一二三四五六七八九", "十百千萬", An, f, 0);
    case 32:
      return Fe(e, "零壹貳參四五六七八九", "拾百千", An, f, 7);
    case 18:
      return LA(e, 2406, 2415, !0, r);
    case 20:
      return ut(e, 1, 19999, fg, 3, r);
    case 21:
      return LA(e, 2790, 2799, !0, r);
    case 22:
      return LA(e, 2662, 2671, !0, r);
    case 22:
      return ut(e, 1, 10999, gg, 3, r);
    case 23:
      return Je(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return Je(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return LA(e, 3302, 3311, !0, r);
    case 28:
      return Je(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", a);
    case 29:
      return Je(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", a);
    case 34:
      return LA(e, 3792, 3801, !0, r);
    case 37:
      return LA(e, 6160, 6169, !0, r);
    case 38:
      return LA(e, 4160, 4169, !0, r);
    case 39:
      return LA(e, 2918, 2927, !0, r);
    case 40:
      return LA(e, 1776, 1785, !0, r);
    case 43:
      return LA(e, 3046, 3055, !0, r);
    case 44:
      return LA(e, 3174, 3183, !0, r);
    case 45:
      return LA(e, 3664, 3673, !0, r);
    case 46:
      return LA(e, 3872, 3881, !0, r);
    default:
      return LA(e, 48, 57, !0, r);
  }
}, Vc = "data-html2canvas-ignore", ta = function() {
  function e(A, t, r) {
    if (this.context = A, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new dg(), this.quoteDepth = 0, !t.ownerDocument)
      throw new Error("Cloned element does not have an owner document");
    this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
  }
  return e.prototype.toIFrame = function(A, t) {
    var r = this, a = pg(A, t);
    if (!a.contentWindow)
      return Promise.reject("Unable to find iframe window");
    var f = A.defaultView.pageXOffset, B = A.defaultView.pageYOffset, w = a.contentWindow, C = w.document, Q = wg(a).then(function() {
      return JA(r, 0, void 0, function() {
        var y, x;
        return YA(this, function(E) {
          switch (E.label) {
            case 0:
              return this.scrolledElements.forEach(bg), w && (w.scrollTo(t.left, t.top), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || w.scrollY === t.top && w.scrollX === t.left || (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(w.scrollX - t.left, w.scrollY - t.top, 0, 0))), y = this.options.onclone, (x = this.clonedReferenceElement) === void 0 ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : C.fonts && C.fonts.ready ? [4, C.fonts.ready] : [3, 2];
            case 1:
              E.sent(), E.label = 2;
            case 2:
              return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, mg(C)] : [3, 4];
            case 3:
              E.sent(), E.label = 4;
            case 4:
              return typeof y == "function" ? [2, Promise.resolve().then(function() {
                return y(C, x);
              }).then(function() {
                return a;
              })] : [2, a];
          }
        });
      });
    });
    return C.open(), C.write(vg(document.doctype) + "<html></html>"), yg(this.referenceElement.ownerDocument, f, B), C.replaceChild(C.adoptNode(this.documentElement), C.documentElement), C.close(), Q;
  }, e.prototype.createElementClone = function(A) {
    if (Gn(A, 2), Pc(A))
      return this.createCanvasClone(A);
    if (Jo(A))
      return this.createVideoClone(A);
    if (Xo(A))
      return this.createStyleClone(A);
    var t = A.cloneNode(!1);
    return Jn(t) && (Jn(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), zo(t) ? this.createCustomElementClone(t) : t;
  }, e.prototype.createCustomElementClone = function(A) {
    var t = document.createElement("html2canvascustomelement");
    return en(A.style, t), t;
  }, e.prototype.createStyleClone = function(A) {
    try {
      var t = A.sheet;
      if (t && t.cssRules) {
        var r = [].slice.call(t.cssRules, 0).reduce(function(f, B) {
          return B && typeof B.cssText == "string" ? f + B.cssText : f;
        }, ""), a = A.cloneNode(!1);
        return a.textContent = r, a;
      }
    } catch (f) {
      if (this.context.logger.error("Unable to access cssRules property", f), f.name !== "SecurityError")
        throw f;
    }
    return A.cloneNode(!1);
  }, e.prototype.createCanvasClone = function(A) {
    var t;
    if (this.options.inlineImages && A.ownerDocument) {
      var r = A.ownerDocument.createElement("img");
      try {
        return r.src = A.toDataURL(), r;
      } catch {
        this.context.logger.info("Unable to inline canvas contents, canvas is tainted", A);
      }
    }
    var a = A.cloneNode(!1);
    try {
      a.width = A.width, a.height = A.height;
      var f = A.getContext("2d"), B = a.getContext("2d");
      if (B)
        if (!this.options.allowTaint && f)
          B.putImageData(f.getImageData(0, 0, A.width, A.height), 0, 0);
        else {
          var w = (t = A.getContext("webgl2")) !== null && t !== void 0 ? t : A.getContext("webgl");
          if (w) {
            var C = w.getContextAttributes();
            (C == null ? void 0 : C.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A);
          }
          B.drawImage(A, 0, 0);
        }
      return a;
    } catch {
      this.context.logger.info("Unable to clone canvas as it is tainted", A);
    }
    return a;
  }, e.prototype.createVideoClone = function(A) {
    var t = A.ownerDocument.createElement("canvas");
    t.width = A.offsetWidth, t.height = A.offsetHeight;
    var r = t.getContext("2d");
    try {
      return r && (r.drawImage(A, 0, 0, t.width, t.height), this.options.allowTaint || r.getImageData(0, 0, t.width, t.height)), t;
    } catch {
      this.context.logger.info("Unable to clone video as it is tainted", A);
    }
    var a = A.ownerDocument.createElement("canvas");
    return a.width = A.offsetWidth, a.height = A.offsetHeight, a;
  }, e.prototype.appendChildNode = function(A, t, r) {
    kt(t) && (t.tagName === "SCRIPT" || t.hasAttribute(Vc) || typeof this.options.ignoreElements == "function" && this.options.ignoreElements(t)) || this.options.copyStyles && kt(t) && Xo(t) || A.appendChild(this.cloneNode(t, r));
  }, e.prototype.cloneChildNodes = function(A, t, r) {
    for (var a = this, f = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; f; f = f.nextSibling)
      if (kt(f) && Nc(f) && typeof f.assignedNodes == "function") {
        var B = f.assignedNodes();
        B.length && B.forEach(function(w) {
          return a.appendChildNode(t, w, r);
        });
      } else
        this.appendChildNode(t, f, r);
  }, e.prototype.cloneNode = function(A, t) {
    if (Rc(A))
      return document.createTextNode(A.data);
    if (!A.ownerDocument)
      return A.cloneNode(!1);
    var r = A.ownerDocument.defaultView;
    if (r && kt(A) && (Yn(A) || nr(A))) {
      var a = this.createElementClone(A);
      a.style.transitionProperty = "none";
      var f = r.getComputedStyle(A), B = r.getComputedStyle(A, ":before"), w = r.getComputedStyle(A, ":after");
      this.referenceElement === A && Yn(a) && (this.clonedReferenceElement = a), ms(a) && Qg(a);
      var C = this.counters.parse(new Ro(this.context, f)), Q = this.resolvePseudoContent(A, a, B, ri.BEFORE);
      zo(A) && (t = !0), Jo(A) || this.cloneChildNodes(A, a, t), Q && a.insertBefore(Q, a.firstChild);
      var y = this.resolvePseudoContent(A, a, w, ri.AFTER);
      return y && a.appendChild(y), this.counters.pop(C), (f && (this.options.copyStyles || nr(A)) && !jc(A) || t) && en(f, a), A.scrollTop === 0 && A.scrollLeft === 0 || this.scrolledElements.push([a, A.scrollLeft, A.scrollTop]), (fr(A) || pr(A)) && (fr(a) || pr(a)) && (a.value = A.value), a;
    }
    return A.cloneNode(!1);
  }, e.prototype.resolvePseudoContent = function(A, t, r, a) {
    var f = this;
    if (r) {
      var B = r.content, w = t.ownerDocument;
      if (w && B && B !== "none" && B !== "-moz-alt-content" && r.display !== "none") {
        this.counters.parse(new Ro(this.context, r));
        var C = new Kd(this.context, r), Q = w.createElement("html2canvaspseudoelement");
        en(r, Q), C.content.forEach(function(x) {
          if (x.type === 0)
            Q.appendChild(w.createTextNode(x.value));
          else if (x.type === 22) {
            var E = w.createElement("img");
            E.src = x.value, E.style.opacity = "1", Q.appendChild(E);
          } else if (x.type === 18) {
            if (x.name === "attr") {
              var _ = x.values.filter(yA);
              _.length && Q.appendChild(w.createTextNode(A.getAttribute(_[0].value) || ""));
            } else if (x.name === "counter") {
              var S = x.values.filter(St), D = S[0], m = S[1];
              if (D && yA(D)) {
                var q = f.counters.getCounterValue(D.value), rA = m && yA(m) ? Nn.parse(f.context, m.value) : 3;
                Q.appendChild(w.createTextNode(ai(q, rA, !1)));
              }
            } else if (x.name === "counters") {
              var oA = x.values.filter(St), d = (D = oA[0], oA[1]);
              if (m = oA[2], D && yA(D)) {
                var o = f.counters.getCounterValues(D.value), c = m && yA(m) ? Nn.parse(f.context, m.value) : 3, g = d && d.type === 0 ? d.value : "", i = o.map(function(n) {
                  return ai(n, c, !1);
                }).join(g);
                Q.appendChild(w.createTextNode(i));
              }
            }
          } else if (x.type === 20)
            switch (x.value) {
              case "open-quote":
                Q.appendChild(w.createTextNode(Mo(C.quotes, f.quoteDepth++, !0)));
                break;
              case "close-quote":
                Q.appendChild(w.createTextNode(Mo(C.quotes, --f.quoteDepth, !1)));
                break;
              default:
                Q.appendChild(w.createTextNode(x.value));
            }
        }), Q.className = Xn + " " + zn;
        var y = a === ri.BEFORE ? " " + Xn : " " + zn;
        return nr(t) ? t.className.baseValue += y : t.className += y, Q;
      }
    }
  }, e.destroy = function(A) {
    return !!A.parentNode && (A.parentNode.removeChild(A), !0);
  }, e;
}();
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(ri || (ri = {}));
var CA, pg = function(e, A) {
  var t = e.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = A.width.toString(), t.height = A.height.toString(), t.scrolling = "no", t.setAttribute(Vc, "true"), e.body.appendChild(t), t;
}, Bg = function(e) {
  return new Promise(function(A) {
    e.complete ? A() : e.src ? (e.onload = A, e.onerror = A) : A();
  });
}, mg = function(e) {
  return Promise.all([].slice.call(e.images, 0).map(Bg));
}, wg = function(e) {
  return new Promise(function(A, t) {
    var r = e.contentWindow;
    if (!r)
      return t("No window assigned for iframe");
    var a = r.document;
    r.onload = e.onload = function() {
      r.onload = e.onload = null;
      var f = setInterval(function() {
        a.body.childNodes.length > 0 && a.readyState === "complete" && (clearInterval(f), A(e));
      }, 50);
    };
  });
}, Cg = ["all", "d", "content"], en = function(e, A) {
  for (var t = e.length - 1; t >= 0; t--) {
    var r = e.item(t);
    Cg.indexOf(r) === -1 && A.style.setProperty(r, e.getPropertyValue(r));
  }
  return A;
}, vg = function(e) {
  var A = "";
  return e && (A += "<!DOCTYPE ", e.name && (A += e.name), e.internalSubset && (A += e.internalSubset), e.publicId && (A += '"' + e.publicId + '"'), e.systemId && (A += '"' + e.systemId + '"'), A += ">"), A;
}, yg = function(e, A, t) {
  e && e.defaultView && (A !== e.defaultView.pageXOffset || t !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, t);
}, bg = function(e) {
  var A = e[0], t = e[1], r = e[2];
  A.scrollLeft = t, A.scrollTop = r;
}, Xn = "___html2canvas___pseudoelement_before", zn = "___html2canvas___pseudoelement_after", ia = `{
    content: "" !important;
    display: none !important;
}`, Qg = function(e) {
  kg(e, "." + Xn + ":before" + ia + `
         .` + zn + ":after" + ia);
}, kg = function(e, A) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = A, e.appendChild(r);
  }
}, Wc = function() {
  function e() {
  }
  return e.getOrigin = function(A) {
    var t = e._link;
    return t ? (t.href = A, t.href = t.href, t.protocol + t.hostname + t.port) : "about:blank";
  }, e.isSameOrigin = function(A) {
    return e.getOrigin(A) === e._origin;
  }, e.setContext = function(A) {
    e._link = A.document.createElement("a"), e._origin = e.getOrigin(A.location.href);
  }, e._origin = "about:blank", e;
}(), xg = function() {
  function e(A, t) {
    this.context = A, this._options = t, this._cache = {};
  }
  return e.prototype.addImage = function(A) {
    var t = Promise.resolve();
    return this.has(A) || (rn(A) || Sg(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {
    }), t;
  }, e.prototype.match = function(A) {
    return this._cache[A];
  }, e.prototype.loadImage = function(A) {
    return JA(this, 0, void 0, function() {
      var t, r, a, f, B = this;
      return YA(this, function(w) {
        switch (w.label) {
          case 0:
            return t = Wc.isSameOrigin(A), r = !tn(A) && this._options.useCORS === !0 && GA.SUPPORT_CORS_IMAGES && !t, a = !tn(A) && !t && !rn(A) && typeof this._options.proxy == "string" && GA.SUPPORT_CORS_XHR && !r, t || this._options.allowTaint !== !1 || tn(A) || rn(A) || a || r ? (f = A, a ? [4, this.proxy(f)] : [3, 2]) : [2];
          case 1:
            f = w.sent(), w.label = 2;
          case 2:
            return this.context.logger.debug("Added image " + A.substring(0, 256)), [4, new Promise(function(C, Q) {
              var y = new Image();
              y.onload = function() {
                return C(y);
              }, y.onerror = Q, (Ig(f) || r) && (y.crossOrigin = "anonymous"), y.src = f, y.complete === !0 && setTimeout(function() {
                return C(y);
              }, 500), B._options.imageTimeout > 0 && setTimeout(function() {
                return Q("Timed out (" + B._options.imageTimeout + "ms) loading image");
              }, B._options.imageTimeout);
            })];
          case 3:
            return [2, w.sent()];
        }
      });
    });
  }, e.prototype.has = function(A) {
    return this._cache[A] !== void 0;
  }, e.prototype.keys = function() {
    return Promise.resolve(Object.keys(this._cache));
  }, e.prototype.proxy = function(A) {
    var t = this, r = this._options.proxy;
    if (!r)
      throw new Error("No proxy defined");
    var a = A.substring(0, 256);
    return new Promise(function(f, B) {
      var w = GA.SUPPORT_RESPONSE_TYPE ? "blob" : "text", C = new XMLHttpRequest();
      C.onload = function() {
        if (C.status === 200)
          if (w === "text")
            f(C.response);
          else {
            var x = new FileReader();
            x.addEventListener("load", function() {
              return f(x.result);
            }, !1), x.addEventListener("error", function(E) {
              return B(E);
            }, !1), x.readAsDataURL(C.response);
          }
        else
          B("Failed to proxy resource " + a + " with status code " + C.status);
      }, C.onerror = B;
      var Q = r.indexOf("?") > -1 ? "&" : "?";
      if (C.open("GET", "" + r + Q + "url=" + encodeURIComponent(A) + "&responseType=" + w), w !== "text" && C instanceof XMLHttpRequest && (C.responseType = w), t._options.imageTimeout) {
        var y = t._options.imageTimeout;
        C.timeout = y, C.ontimeout = function() {
          return B("Timed out (" + y + "ms) proxying " + a);
        };
      }
      C.send();
    });
  }, e;
}(), Fg = /^data:image\/svg\+xml/i, Ug = /^data:image\/.*;base64,/i, Eg = /^data:image\/.*/i, Sg = function(e) {
  return GA.SUPPORT_SVG_DRAWING || !Tg(e);
}, tn = function(e) {
  return Eg.test(e);
}, Ig = function(e) {
  return Ug.test(e);
}, rn = function(e) {
  return e.substr(0, 4) === "blob";
}, Tg = function(e) {
  return e.substr(-3).toLowerCase() === "svg" || Fg.test(e);
}, aA = function() {
  function e(A, t) {
    this.type = 0, this.x = A, this.y = t;
  }
  return e.prototype.add = function(A, t) {
    return new e(this.x + A, this.y + t);
  }, e;
}(), dt = function(e, A, t) {
  return new aA(e.x + (A.x - e.x) * t, e.y + (A.y - e.y) * t);
}, Ni = function() {
  function e(A, t, r, a) {
    this.type = 1, this.start = A, this.startControl = t, this.endControl = r, this.end = a;
  }
  return e.prototype.subdivide = function(A, t) {
    var r = dt(this.start, this.startControl, A), a = dt(this.startControl, this.endControl, A), f = dt(this.endControl, this.end, A), B = dt(r, a, A), w = dt(a, f, A), C = dt(B, w, A);
    return t ? new e(this.start, r, B, C) : new e(C, w, f, this.end);
  }, e.prototype.add = function(A, t) {
    return new e(this.start.add(A, t), this.startControl.add(A, t), this.endControl.add(A, t), this.end.add(A, t));
  }, e.prototype.reverse = function() {
    return new e(this.end, this.endControl, this.startControl, this.start);
  }, e;
}(), oe = function(e) {
  return e.type === 1;
}, _g = function(e) {
  var A = e.styles, t = e.bounds, r = zt(A.borderTopLeftRadius, t.width, t.height), a = r[0], f = r[1], B = zt(A.borderTopRightRadius, t.width, t.height), w = B[0], C = B[1], Q = zt(A.borderBottomRightRadius, t.width, t.height), y = Q[0], x = Q[1], E = zt(A.borderBottomLeftRadius, t.width, t.height), _ = E[0], S = E[1], D = [];
  D.push((a + w) / t.width), D.push((_ + y) / t.width), D.push((f + S) / t.height), D.push((C + x) / t.height);
  var m = Math.max.apply(Math, D);
  m > 1 && (a /= m, f /= m, w /= m, C /= m, y /= m, x /= m, _ /= m, S /= m);
  var q = t.width - w, rA = t.height - x, oA = t.width - y, d = t.height - S, o = A.borderTopWidth, c = A.borderRightWidth, g = A.borderBottomWidth, i = A.borderLeftWidth, n = UA(A.paddingTop, e.bounds.width), s = UA(A.paddingRight, e.bounds.width), u = UA(A.paddingBottom, e.bounds.width), l = UA(A.paddingLeft, e.bounds.width);
  this.topLeftBorderDoubleOuterBox = a > 0 || f > 0 ? SA(t.left + i / 3, t.top + o / 3, a - i / 3, f - o / 3, CA.TOP_LEFT) : new aA(t.left + i / 3, t.top + o / 3), this.topRightBorderDoubleOuterBox = a > 0 || f > 0 ? SA(t.left + q, t.top + o / 3, w - c / 3, C - o / 3, CA.TOP_RIGHT) : new aA(t.left + t.width - c / 3, t.top + o / 3), this.bottomRightBorderDoubleOuterBox = y > 0 || x > 0 ? SA(t.left + oA, t.top + rA, y - c / 3, x - g / 3, CA.BOTTOM_RIGHT) : new aA(t.left + t.width - c / 3, t.top + t.height - g / 3), this.bottomLeftBorderDoubleOuterBox = _ > 0 || S > 0 ? SA(t.left + i / 3, t.top + d, _ - i / 3, S - g / 3, CA.BOTTOM_LEFT) : new aA(t.left + i / 3, t.top + t.height - g / 3), this.topLeftBorderDoubleInnerBox = a > 0 || f > 0 ? SA(t.left + 2 * i / 3, t.top + 2 * o / 3, a - 2 * i / 3, f - 2 * o / 3, CA.TOP_LEFT) : new aA(t.left + 2 * i / 3, t.top + 2 * o / 3), this.topRightBorderDoubleInnerBox = a > 0 || f > 0 ? SA(t.left + q, t.top + 2 * o / 3, w - 2 * c / 3, C - 2 * o / 3, CA.TOP_RIGHT) : new aA(t.left + t.width - 2 * c / 3, t.top + 2 * o / 3), this.bottomRightBorderDoubleInnerBox = y > 0 || x > 0 ? SA(t.left + oA, t.top + rA, y - 2 * c / 3, x - 2 * g / 3, CA.BOTTOM_RIGHT) : new aA(t.left + t.width - 2 * c / 3, t.top + t.height - 2 * g / 3), this.bottomLeftBorderDoubleInnerBox = _ > 0 || S > 0 ? SA(t.left + 2 * i / 3, t.top + d, _ - 2 * i / 3, S - 2 * g / 3, CA.BOTTOM_LEFT) : new aA(t.left + 2 * i / 3, t.top + t.height - 2 * g / 3), this.topLeftBorderStroke = a > 0 || f > 0 ? SA(t.left + i / 2, t.top + o / 2, a - i / 2, f - o / 2, CA.TOP_LEFT) : new aA(t.left + i / 2, t.top + o / 2), this.topRightBorderStroke = a > 0 || f > 0 ? SA(t.left + q, t.top + o / 2, w - c / 2, C - o / 2, CA.TOP_RIGHT) : new aA(t.left + t.width - c / 2, t.top + o / 2), this.bottomRightBorderStroke = y > 0 || x > 0 ? SA(t.left + oA, t.top + rA, y - c / 2, x - g / 2, CA.BOTTOM_RIGHT) : new aA(t.left + t.width - c / 2, t.top + t.height - g / 2), this.bottomLeftBorderStroke = _ > 0 || S > 0 ? SA(t.left + i / 2, t.top + d, _ - i / 2, S - g / 2, CA.BOTTOM_LEFT) : new aA(t.left + i / 2, t.top + t.height - g / 2), this.topLeftBorderBox = a > 0 || f > 0 ? SA(t.left, t.top, a, f, CA.TOP_LEFT) : new aA(t.left, t.top), this.topRightBorderBox = w > 0 || C > 0 ? SA(t.left + q, t.top, w, C, CA.TOP_RIGHT) : new aA(t.left + t.width, t.top), this.bottomRightBorderBox = y > 0 || x > 0 ? SA(t.left + oA, t.top + rA, y, x, CA.BOTTOM_RIGHT) : new aA(t.left + t.width, t.top + t.height), this.bottomLeftBorderBox = _ > 0 || S > 0 ? SA(t.left, t.top + d, _, S, CA.BOTTOM_LEFT) : new aA(t.left, t.top + t.height), this.topLeftPaddingBox = a > 0 || f > 0 ? SA(t.left + i, t.top + o, Math.max(0, a - i), Math.max(0, f - o), CA.TOP_LEFT) : new aA(t.left + i, t.top + o), this.topRightPaddingBox = w > 0 || C > 0 ? SA(t.left + Math.min(q, t.width - c), t.top + o, q > t.width + c ? 0 : Math.max(0, w - c), Math.max(0, C - o), CA.TOP_RIGHT) : new aA(t.left + t.width - c, t.top + o), this.bottomRightPaddingBox = y > 0 || x > 0 ? SA(t.left + Math.min(oA, t.width - i), t.top + Math.min(rA, t.height - g), Math.max(0, y - c), Math.max(0, x - g), CA.BOTTOM_RIGHT) : new aA(t.left + t.width - c, t.top + t.height - g), this.bottomLeftPaddingBox = _ > 0 || S > 0 ? SA(t.left + i, t.top + Math.min(d, t.height - g), Math.max(0, _ - i), Math.max(0, S - g), CA.BOTTOM_LEFT) : new aA(t.left + i, t.top + t.height - g), this.topLeftContentBox = a > 0 || f > 0 ? SA(t.left + i + l, t.top + o + n, Math.max(0, a - (i + l)), Math.max(0, f - (o + n)), CA.TOP_LEFT) : new aA(t.left + i + l, t.top + o + n), this.topRightContentBox = w > 0 || C > 0 ? SA(t.left + Math.min(q, t.width + i + l), t.top + o + n, q > t.width + i + l ? 0 : w - i + l, C - (o + n), CA.TOP_RIGHT) : new aA(t.left + t.width - (c + s), t.top + o + n), this.bottomRightContentBox = y > 0 || x > 0 ? SA(t.left + Math.min(oA, t.width - (i + l)), t.top + Math.min(rA, t.height + o + n), Math.max(0, y - (c + s)), x - (g + u), CA.BOTTOM_RIGHT) : new aA(t.left + t.width - (c + s), t.top + t.height - (g + u)), this.bottomLeftContentBox = _ > 0 || S > 0 ? SA(t.left + i + l, t.top + d, Math.max(0, _ - (i + l)), S - (g + u), CA.BOTTOM_LEFT) : new aA(t.left + i + l, t.top + t.height - (g + u));
};
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(CA || (CA = {}));
var SA = function(e, A, t, r, a) {
  var f = (Math.sqrt(2) - 1) / 3 * 4, B = t * f, w = r * f, C = e + t, Q = A + r;
  switch (a) {
    case CA.TOP_LEFT:
      return new Ni(new aA(e, Q), new aA(e, Q - w), new aA(C - B, A), new aA(C, A));
    case CA.TOP_RIGHT:
      return new Ni(new aA(e, A), new aA(e + B, A), new aA(C, Q - w), new aA(C, Q));
    case CA.BOTTOM_RIGHT:
      return new Ni(new aA(C, A), new aA(C, A + w), new aA(e + B, Q), new aA(e, Q));
    case CA.BOTTOM_LEFT:
    default:
      return new Ni(new aA(C, Q), new aA(C - B, Q), new aA(e, A + w), new aA(e, A));
  }
}, Br = function(e) {
  return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox];
}, mr = function(e) {
  return [e.topLeftPaddingBox, e.topRightPaddingBox, e.bottomRightPaddingBox, e.bottomLeftPaddingBox];
}, Lg = function(e, A, t) {
  this.offsetX = e, this.offsetY = A, this.matrix = t, this.type = 0, this.target = 6;
}, Gi = function(e, A) {
  this.path = e, this.target = A, this.type = 1;
}, Og = function(e) {
  this.opacity = e, this.type = 2, this.target = 6;
}, Yc = function(e) {
  return e.type === 1;
}, ra = function(e, A) {
  return e.length === A.length && e.some(function(t, r) {
    return t === A[r];
  });
}, Jc = function(e) {
  this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
}, Xc = function() {
  function e(A, t) {
    if (this.container = A, this.parent = t, this.effects = [], this.curves = new _g(this.container), this.container.styles.opacity < 1 && this.effects.push(new Og(this.container.styles.opacity)), this.container.styles.transform !== null) {
      var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, a = this.container.bounds.top + this.container.styles.transformOrigin[1].number, f = this.container.styles.transform;
      this.effects.push(new Lg(r, a, f));
    }
    if (this.container.styles.overflowX !== 0) {
      var B = Br(this.curves), w = mr(this.curves);
      ra(B, w) ? this.effects.push(new Gi(B, 6)) : (this.effects.push(new Gi(B, 2)), this.effects.push(new Gi(w, 4)));
    }
  }
  return e.prototype.getEffects = function(A) {
    for (var t = [2, 3].indexOf(this.container.styles.position) === -1, r = this.parent, a = this.effects.slice(0); r; ) {
      var f = r.effects.filter(function(C) {
        return !Yc(C);
      });
      if (t || r.container.styles.position !== 0 || !r.parent) {
        if (a.unshift.apply(a, f), t = [2, 3].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
          var B = Br(r.curves), w = mr(r.curves);
          ra(B, w) || a.unshift(new Gi(w, 6));
        }
      } else
        a.unshift.apply(a, f);
      r = r.parent;
    }
    return a.filter(function(C) {
      return PA(C.target, A);
    });
  }, e;
}(), qn = function(e, A, t, r) {
  e.container.elements.forEach(function(a) {
    var f = PA(a.flags, 4), B = PA(a.flags, 2), w = new Xc(a, e);
    PA(a.styles.display, 2048) && r.push(w);
    var C = PA(a.flags, 8) ? [] : r;
    if (f || B) {
      var Q = f || a.styles.isPositioned() ? t : A, y = new Jc(w);
      if (a.styles.isPositioned() || a.styles.opacity < 1 || a.styles.isTransformed()) {
        var x = a.styles.zIndex.order;
        if (x < 0) {
          var E = 0;
          Q.negativeZIndex.some(function(S, D) {
            return x > S.element.container.styles.zIndex.order ? (E = D, !1) : E > 0;
          }), Q.negativeZIndex.splice(E, 0, y);
        } else if (x > 0) {
          var _ = 0;
          Q.positiveZIndex.some(function(S, D) {
            return x >= S.element.container.styles.zIndex.order ? (_ = D + 1, !1) : _ > 0;
          }), Q.positiveZIndex.splice(_, 0, y);
        } else
          Q.zeroOrAutoZIndexOrTransformedOrOpacity.push(y);
      } else
        a.styles.isFloating() ? Q.nonPositionedFloats.push(y) : Q.nonPositionedInlineLevel.push(y);
      qn(w, y, f ? y : t, C);
    } else
      a.styles.isInlineLevel() ? A.inlineLevel.push(w) : A.nonInlineLevel.push(w), qn(w, A, t, C);
    PA(a.flags, 8) && zc(a, C);
  });
}, zc = function(e, A) {
  for (var t = e instanceof Wn ? e.start : 1, r = e instanceof Wn && e.reversed, a = 0; a < A.length; a++) {
    var f = A[a];
    f.container instanceof _c && typeof f.container.value == "number" && f.container.value !== 0 && (t = f.container.value), f.listValue = ai(t, f.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, na = function(e, A) {
  switch (A) {
    case 0:
      return ne(e.topLeftBorderBox, e.topLeftPaddingBox, e.topRightBorderBox, e.topRightPaddingBox);
    case 1:
      return ne(e.topRightBorderBox, e.topRightPaddingBox, e.bottomRightBorderBox, e.bottomRightPaddingBox);
    case 2:
      return ne(e.bottomRightBorderBox, e.bottomRightPaddingBox, e.bottomLeftBorderBox, e.bottomLeftPaddingBox);
    default:
      return ne(e.bottomLeftBorderBox, e.bottomLeftPaddingBox, e.topLeftBorderBox, e.topLeftPaddingBox);
  }
}, Vi = function(e, A) {
  var t = [];
  return oe(e) ? t.push(e.subdivide(0.5, !1)) : t.push(e), oe(A) ? t.push(A.subdivide(0.5, !0)) : t.push(A), t;
}, ne = function(e, A, t, r) {
  var a = [];
  return oe(e) ? a.push(e.subdivide(0.5, !1)) : a.push(e), oe(t) ? a.push(t.subdivide(0.5, !0)) : a.push(t), oe(r) ? a.push(r.subdivide(0.5, !0).reverse()) : a.push(r), oe(A) ? a.push(A.subdivide(0.5, !1).reverse()) : a.push(A), a;
}, sa = function(e) {
  var A = e.bounds, t = e.styles;
  return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, wr = function(e) {
  var A = e.styles, t = e.bounds, r = UA(A.paddingLeft, t.width), a = UA(A.paddingRight, t.width), f = UA(A.paddingTop, t.width), B = UA(A.paddingBottom, t.width);
  return t.add(r + A.borderLeftWidth, f + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + r + a), -(A.borderTopWidth + A.borderBottomWidth + f + B));
}, nn = function(e, A, t) {
  var r = function(Q, y) {
    return Q === 0 ? y.bounds : Q === 2 ? wr(y) : sa(y);
  }(vt(e.styles.backgroundOrigin, A), e), a = function(Q, y) {
    return Q === 0 ? y.bounds : Q === 2 ? wr(y) : sa(y);
  }(vt(e.styles.backgroundClip, A), e), f = Hg(vt(e.styles.backgroundSize, A), t, r), B = f[0], w = f[1], C = zt(vt(e.styles.backgroundPosition, A), r.width - B, r.height - w);
  return [Dg(vt(e.styles.backgroundRepeat, A), C, f, r, a), Math.round(r.left + C[0]), Math.round(r.top + C[1]), B, w];
}, gt = function(e) {
  return yA(e) && e.value === Ft.AUTO;
}, Wi = function(e) {
  return typeof e == "number";
}, Hg = function(e, A, t) {
  var r = A[0], a = A[1], f = A[2], B = e[0], w = e[1];
  if (!B)
    return [0, 0];
  if (RA(B) && w && RA(w))
    return [UA(B, t.width), UA(w, t.height)];
  var C = Wi(f);
  if (yA(B) && (B.value === Ft.CONTAIN || B.value === Ft.COVER))
    return Wi(f) ? t.width / t.height < f != (B.value === Ft.COVER) ? [t.width, t.width / f] : [t.height * f, t.height] : [t.width, t.height];
  var Q = Wi(r), y = Wi(a), x = Q || y;
  if (gt(B) && (!w || gt(w)))
    return Q && y ? [r, a] : C || x ? x && C ? [Q ? r : a * f, y ? a : r / f] : [Q ? r : t.width, y ? a : t.height] : [t.width, t.height];
  if (C) {
    var E = 0, _ = 0;
    return RA(B) ? E = UA(B, t.width) : RA(w) && (_ = UA(w, t.height)), gt(B) ? E = _ * f : w && !gt(w) || (_ = E / f), [E, _];
  }
  var S = null, D = null;
  if (RA(B) ? S = UA(B, t.width) : w && RA(w) && (D = UA(w, t.height)), S === null || w && !gt(w) || (D = Q && y ? S / r * a : t.height), D !== null && gt(B) && (S = Q && y ? D / a * r : t.width), S !== null && D !== null)
    return [S, D];
  throw new Error("Unable to calculate background-size for element");
}, vt = function(e, A) {
  var t = e[A];
  return t === void 0 ? e[0] : t;
}, Dg = function(e, A, t, r, a) {
  var f = A[0], B = A[1], w = t[0], C = t[1];
  switch (e) {
    case 2:
      return [new aA(Math.round(r.left), Math.round(r.top + B)), new aA(Math.round(r.left + r.width), Math.round(r.top + B)), new aA(Math.round(r.left + r.width), Math.round(C + r.top + B)), new aA(Math.round(r.left), Math.round(C + r.top + B))];
    case 3:
      return [new aA(Math.round(r.left + f), Math.round(r.top)), new aA(Math.round(r.left + f + w), Math.round(r.top)), new aA(Math.round(r.left + f + w), Math.round(r.height + r.top)), new aA(Math.round(r.left + f), Math.round(r.height + r.top))];
    case 1:
      return [new aA(Math.round(r.left + f), Math.round(r.top + B)), new aA(Math.round(r.left + f + w), Math.round(r.top + B)), new aA(Math.round(r.left + f + w), Math.round(r.top + B + C)), new aA(Math.round(r.left + f), Math.round(r.top + B + C))];
    default:
      return [new aA(Math.round(a.left), Math.round(a.top)), new aA(Math.round(a.left + a.width), Math.round(a.top)), new aA(Math.round(a.left + a.width), Math.round(a.height + a.top)), new aA(Math.round(a.left), Math.round(a.height + a.top))];
  }
}, oa = "Hidden Text", Mg = function() {
  function e(A) {
    this._data = {}, this._document = A;
  }
  return e.prototype.parseMetrics = function(A, t) {
    var r = this._document.createElement("div"), a = this._document.createElement("img"), f = this._document.createElement("span"), B = this._document.body;
    r.style.visibility = "hidden", r.style.fontFamily = A, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", B.appendChild(r), a.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", a.width = 1, a.height = 1, a.style.margin = "0", a.style.padding = "0", a.style.verticalAlign = "baseline", f.style.fontFamily = A, f.style.fontSize = t, f.style.margin = "0", f.style.padding = "0", f.appendChild(this._document.createTextNode(oa)), r.appendChild(f), r.appendChild(a);
    var w = a.offsetTop - f.offsetTop + 2;
    r.removeChild(f), r.appendChild(this._document.createTextNode(oa)), r.style.lineHeight = "normal", a.style.verticalAlign = "super";
    var C = a.offsetTop - r.offsetTop + 2;
    return B.removeChild(r), { baseline: w, middle: C };
  }, e.prototype.getMetrics = function(A, t) {
    var r = A + " " + t;
    return this._data[r] === void 0 && (this._data[r] = this.parseMetrics(A, t)), this._data[r];
  }, e;
}(), qc = function(e, A) {
  this.context = e, this.options = A;
}, Rg = function(e) {
  function A(t, r) {
    var a = e.call(this, t, r) || this;
    return a._activeEffects = [], a.canvas = r.canvas ? r.canvas : document.createElement("canvas"), a.ctx = a.canvas.getContext("2d"), r.canvas || (a.canvas.width = Math.floor(r.width * r.scale), a.canvas.height = Math.floor(r.height * r.scale), a.canvas.style.width = r.width + "px", a.canvas.style.height = r.height + "px"), a.fontMetrics = new Mg(document), a.ctx.scale(a.options.scale, a.options.scale), a.ctx.translate(-r.x, -r.y), a.ctx.textBaseline = "bottom", a._activeEffects = [], a.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), a;
  }
  return fe(A, e), A.prototype.applyEffects = function(t) {
    for (var r = this; this._activeEffects.length; )
      this.popEffect();
    t.forEach(function(a) {
      return r.applyEffect(a);
    });
  }, A.prototype.applyEffect = function(t) {
    this.ctx.save(), function(r) {
      return r.type === 2;
    }(t) && (this.ctx.globalAlpha = t.opacity), function(r) {
      return r.type === 0;
    }(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), Yc(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
  }, A.prototype.popEffect = function() {
    this._activeEffects.pop(), this.ctx.restore();
  }, A.prototype.renderStack = function(t) {
    return JA(this, 0, void 0, function() {
      return YA(this, function(r) {
        switch (r.label) {
          case 0:
            return t.element.container.styles.isVisible() ? [4, this.renderStackContent(t)] : [3, 2];
          case 1:
            r.sent(), r.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, A.prototype.renderNode = function(t) {
    return JA(this, 0, void 0, function() {
      return YA(this, function(r) {
        switch (r.label) {
          case 0:
            return PA(t.container.flags, 16), t.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(t)] : [3, 3];
          case 1:
            return r.sent(), [4, this.renderNodeContent(t)];
          case 2:
            r.sent(), r.label = 3;
          case 3:
            return [2];
        }
      });
    });
  }, A.prototype.renderTextWithLetterSpacing = function(t, r, a) {
    var f = this;
    r === 0 ? this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + a) : ps(t.text).reduce(function(B, w) {
      return f.ctx.fillText(w, B, t.bounds.top + a), B + f.ctx.measureText(w).width;
    }, t.bounds.left);
  }, A.prototype.createFontStyle = function(t) {
    var r = t.fontVariant.filter(function(B) {
      return B === "normal" || B === "small-caps";
    }).join(""), a = Gg(t.fontFamily).join(", "), f = oi(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
    return [[t.fontStyle, r, t.fontWeight, f, a].join(" "), a, f];
  }, A.prototype.renderTextNode = function(t, r) {
    return JA(this, 0, void 0, function() {
      var a, f, B, w, C, Q, y, x, E = this;
      return YA(this, function(_) {
        return a = this.createFontStyle(r), f = a[0], B = a[1], w = a[2], this.ctx.font = f, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", C = this.fontMetrics.getMetrics(B, w), Q = C.baseline, y = C.middle, x = r.paintOrder, t.textBounds.forEach(function(S) {
          x.forEach(function(D) {
            switch (D) {
              case 0:
                E.ctx.fillStyle = jA(r.color), E.renderTextWithLetterSpacing(S, r.letterSpacing, Q);
                var m = r.textShadow;
                m.length && S.text.trim().length && (m.slice(0).reverse().forEach(function(q) {
                  E.ctx.shadowColor = jA(q.color), E.ctx.shadowOffsetX = q.offsetX.number * E.options.scale, E.ctx.shadowOffsetY = q.offsetY.number * E.options.scale, E.ctx.shadowBlur = q.blur.number, E.renderTextWithLetterSpacing(S, r.letterSpacing, Q);
                }), E.ctx.shadowColor = "", E.ctx.shadowOffsetX = 0, E.ctx.shadowOffsetY = 0, E.ctx.shadowBlur = 0), r.textDecorationLine.length && (E.ctx.fillStyle = jA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(q) {
                  switch (q) {
                    case 1:
                      E.ctx.fillRect(S.bounds.left, Math.round(S.bounds.top + Q), S.bounds.width, 1);
                      break;
                    case 2:
                      E.ctx.fillRect(S.bounds.left, Math.round(S.bounds.top), S.bounds.width, 1);
                      break;
                    case 3:
                      E.ctx.fillRect(S.bounds.left, Math.ceil(S.bounds.top + y), S.bounds.width, 1);
                  }
                }));
                break;
              case 1:
                r.webkitTextStrokeWidth && S.text.trim().length && (E.ctx.strokeStyle = jA(r.webkitTextStrokeColor), E.ctx.lineWidth = r.webkitTextStrokeWidth, E.ctx.lineJoin = window.chrome ? "miter" : "round", E.ctx.strokeText(S.text, S.bounds.left, S.bounds.top + Q)), E.ctx.strokeStyle = "", E.ctx.lineWidth = 0, E.ctx.lineJoin = "miter";
            }
          });
        }), [2];
      });
    });
  }, A.prototype.renderReplacedElement = function(t, r, a) {
    if (a && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
      var f = wr(t), B = mr(r);
      this.path(B), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(a, 0, 0, t.intrinsicWidth, t.intrinsicHeight, f.left, f.top, f.width, f.height), this.ctx.restore();
    }
  }, A.prototype.renderNodeContent = function(t) {
    return JA(this, 0, void 0, function() {
      var r, a, f, B, w, C, Q, y, x, E, _, S, D, m, q, rA, oA, d;
      return YA(this, function(o) {
        switch (o.label) {
          case 0:
            this.applyEffects(t.getEffects(4)), r = t.container, a = t.curves, f = r.styles, B = 0, w = r.textNodes, o.label = 1;
          case 1:
            return B < w.length ? (C = w[B], [4, this.renderTextNode(C, f)]) : [3, 4];
          case 2:
            o.sent(), o.label = 3;
          case 3:
            return B++, [3, 1];
          case 4:
            if (!(r instanceof Sc))
              return [3, 8];
            o.label = 5;
          case 5:
            return o.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
          case 6:
            return q = o.sent(), this.renderReplacedElement(r, a, q), [3, 8];
          case 7:
            return o.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
          case 8:
            if (r instanceof Ic && this.renderReplacedElement(r, a, r.canvas), !(r instanceof Tc))
              return [3, 12];
            o.label = 9;
          case 9:
            return o.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
          case 10:
            return q = o.sent(), this.renderReplacedElement(r, a, q), [3, 12];
          case 11:
            return o.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
          case 12:
            return r instanceof Hc && r.tree ? [4, new A(this.context, { scale: this.options.scale, backgroundColor: r.backgroundColor, x: 0, y: 0, width: r.width, height: r.height }).render(r.tree)] : [3, 14];
          case 13:
            Q = o.sent(), r.width && r.height && this.ctx.drawImage(Q, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), o.label = 14;
          case 14:
            if (r instanceof Bs && (y = Math.min(r.bounds.width, r.bounds.height), r.type === dr ? r.checked && (this.ctx.save(), this.path([new aA(r.bounds.left + 0.39363 * y, r.bounds.top + 0.79 * y), new aA(r.bounds.left + 0.16 * y, r.bounds.top + 0.5549 * y), new aA(r.bounds.left + 0.27347 * y, r.bounds.top + 0.44071 * y), new aA(r.bounds.left + 0.39694 * y, r.bounds.top + 0.5649 * y), new aA(r.bounds.left + 0.72983 * y, r.bounds.top + 0.23 * y), new aA(r.bounds.left + 0.84 * y, r.bounds.top + 0.34085 * y), new aA(r.bounds.left + 0.39363 * y, r.bounds.top + 0.79 * y)]), this.ctx.fillStyle = jA(Yo), this.ctx.fill(), this.ctx.restore()) : r.type === gr && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + y / 2, r.bounds.top + y / 2, y / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = jA(Yo), this.ctx.fill(), this.ctx.restore())), Kg(r) && r.value.length) {
              switch (x = this.createFontStyle(f), oA = x[0], E = x[1], _ = this.fontMetrics.getMetrics(oA, E).baseline, this.ctx.font = oA, this.ctx.fillStyle = jA(f.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = jg(r.styles.textAlign), d = wr(r), S = 0, r.styles.textAlign) {
                case 1:
                  S += d.width / 2;
                  break;
                case 2:
                  S += d.width;
              }
              D = d.add(S, 0, 0, -d.height / 2 + 1), this.ctx.save(), this.path([new aA(d.left, d.top), new aA(d.left + d.width, d.top), new aA(d.left + d.width, d.top + d.height), new aA(d.left, d.top + d.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new ni(r.value, D), f.letterSpacing, _), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
            }
            if (!PA(r.styles.display, 2048))
              return [3, 20];
            if (r.styles.listStyleImage === null)
              return [3, 19];
            if ((m = r.styles.listStyleImage).type !== 0)
              return [3, 18];
            q = void 0, rA = m.url, o.label = 15;
          case 15:
            return o.trys.push([15, 17, , 18]), [4, this.context.cache.match(rA)];
          case 16:
            return q = o.sent(), this.ctx.drawImage(q, r.bounds.left - (q.width + 10), r.bounds.top), [3, 18];
          case 17:
            return o.sent(), this.context.logger.error("Error loading list-style-image " + rA), [3, 18];
          case 18:
            return [3, 20];
          case 19:
            t.listValue && r.styles.listStyleType !== -1 && (oA = this.createFontStyle(f)[0], this.ctx.font = oA, this.ctx.fillStyle = jA(f.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", d = new Le(r.bounds.left, r.bounds.top + UA(r.styles.paddingTop, r.bounds.width), r.bounds.width, Oo(f.lineHeight, f.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new ni(t.listValue, d), f.letterSpacing, Oo(f.lineHeight, f.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), o.label = 20;
          case 20:
            return [2];
        }
      });
    });
  }, A.prototype.renderStackContent = function(t) {
    return JA(this, 0, void 0, function() {
      var r, a, f, B, w, C, Q, y, x, E, _, S, D, m, q;
      return YA(this, function(rA) {
        switch (rA.label) {
          case 0:
            return PA(t.element.container.flags, 16), [4, this.renderNodeBackgroundAndBorders(t.element)];
          case 1:
            rA.sent(), r = 0, a = t.negativeZIndex, rA.label = 2;
          case 2:
            return r < a.length ? (q = a[r], [4, this.renderStack(q)]) : [3, 5];
          case 3:
            rA.sent(), rA.label = 4;
          case 4:
            return r++, [3, 2];
          case 5:
            return [4, this.renderNodeContent(t.element)];
          case 6:
            rA.sent(), f = 0, B = t.nonInlineLevel, rA.label = 7;
          case 7:
            return f < B.length ? (q = B[f], [4, this.renderNode(q)]) : [3, 10];
          case 8:
            rA.sent(), rA.label = 9;
          case 9:
            return f++, [3, 7];
          case 10:
            w = 0, C = t.nonPositionedFloats, rA.label = 11;
          case 11:
            return w < C.length ? (q = C[w], [4, this.renderStack(q)]) : [3, 14];
          case 12:
            rA.sent(), rA.label = 13;
          case 13:
            return w++, [3, 11];
          case 14:
            Q = 0, y = t.nonPositionedInlineLevel, rA.label = 15;
          case 15:
            return Q < y.length ? (q = y[Q], [4, this.renderStack(q)]) : [3, 18];
          case 16:
            rA.sent(), rA.label = 17;
          case 17:
            return Q++, [3, 15];
          case 18:
            x = 0, E = t.inlineLevel, rA.label = 19;
          case 19:
            return x < E.length ? (q = E[x], [4, this.renderNode(q)]) : [3, 22];
          case 20:
            rA.sent(), rA.label = 21;
          case 21:
            return x++, [3, 19];
          case 22:
            _ = 0, S = t.zeroOrAutoZIndexOrTransformedOrOpacity, rA.label = 23;
          case 23:
            return _ < S.length ? (q = S[_], [4, this.renderStack(q)]) : [3, 26];
          case 24:
            rA.sent(), rA.label = 25;
          case 25:
            return _++, [3, 23];
          case 26:
            D = 0, m = t.positiveZIndex, rA.label = 27;
          case 27:
            return D < m.length ? (q = m[D], [4, this.renderStack(q)]) : [3, 30];
          case 28:
            rA.sent(), rA.label = 29;
          case 29:
            return D++, [3, 27];
          case 30:
            return [2];
        }
      });
    });
  }, A.prototype.mask = function(t) {
    this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(t.slice(0).reverse()), this.ctx.closePath();
  }, A.prototype.path = function(t) {
    this.ctx.beginPath(), this.formatPath(t), this.ctx.closePath();
  }, A.prototype.formatPath = function(t) {
    var r = this;
    t.forEach(function(a, f) {
      var B = oe(a) ? a.start : a;
      f === 0 ? r.ctx.moveTo(B.x, B.y) : r.ctx.lineTo(B.x, B.y), oe(a) && r.ctx.bezierCurveTo(a.startControl.x, a.startControl.y, a.endControl.x, a.endControl.y, a.end.x, a.end.y);
    });
  }, A.prototype.renderRepeat = function(t, r, a, f) {
    this.path(t), this.ctx.fillStyle = r, this.ctx.translate(a, f), this.ctx.fill(), this.ctx.translate(-a, -f);
  }, A.prototype.resizeImage = function(t, r, a) {
    var f;
    if (t.width === r && t.height === a)
      return t;
    var B = ((f = this.canvas.ownerDocument) !== null && f !== void 0 ? f : document).createElement("canvas");
    return B.width = Math.max(1, r), B.height = Math.max(1, a), B.getContext("2d").drawImage(t, 0, 0, t.width, t.height, 0, 0, r, a), B;
  }, A.prototype.renderBackgroundImage = function(t) {
    return JA(this, 0, void 0, function() {
      var r, a, f, B, w, C;
      return YA(this, function(Q) {
        switch (Q.label) {
          case 0:
            r = t.styles.backgroundImage.length - 1, a = function(y) {
              var x, E, _, S, D, m, q, rA, oA, d, o, c, g, i, n, s, u, l, h, p, v, b, F, U, k, T, H, K, P, X, W;
              return YA(this, function(I) {
                switch (I.label) {
                  case 0:
                    if (y.type !== 0)
                      return [3, 5];
                    x = void 0, E = y.url, I.label = 1;
                  case 1:
                    return I.trys.push([1, 3, , 4]), [4, f.context.cache.match(E)];
                  case 2:
                    return x = I.sent(), [3, 4];
                  case 3:
                    return I.sent(), f.context.logger.error("Error loading background-image " + E), [3, 4];
                  case 4:
                    return x && (_ = nn(t, r, [x.width, x.height, x.width / x.height]), s = _[0], b = _[1], F = _[2], h = _[3], p = _[4], i = f.ctx.createPattern(f.resizeImage(x, h, p), "repeat"), f.renderRepeat(s, i, b, F)), [3, 6];
                  case 5:
                    y.type === 1 ? (S = nn(t, r, [null, null, null]), s = S[0], b = S[1], F = S[2], h = S[3], p = S[4], D = vu(y.angle, h, p), m = D[0], q = D[1], rA = D[2], oA = D[3], d = D[4], (o = document.createElement("canvas")).width = h, o.height = p, c = o.getContext("2d"), g = c.createLinearGradient(q, oA, rA, d), _o(y.stops, m).forEach(function(L) {
                      return g.addColorStop(L.stop, jA(L.color));
                    }), c.fillStyle = g, c.fillRect(0, 0, h, p), h > 0 && p > 0 && (i = f.ctx.createPattern(o, "repeat"), f.renderRepeat(s, i, b, F))) : function(L) {
                      return L.type === 2;
                    }(y) && (n = nn(t, r, [null, null, null]), s = n[0], u = n[1], l = n[2], h = n[3], p = n[4], v = y.position.length === 0 ? [gs] : y.position, b = UA(v[0], h), F = UA(v[v.length - 1], p), U = function(L, R, G, Y, M) {
                      var O = 0, j = 0;
                      switch (L.size) {
                        case 0:
                          L.shape === 0 ? O = j = Math.min(Math.abs(R), Math.abs(R - Y), Math.abs(G), Math.abs(G - M)) : L.shape === 1 && (O = Math.min(Math.abs(R), Math.abs(R - Y)), j = Math.min(Math.abs(G), Math.abs(G - M)));
                          break;
                        case 2:
                          if (L.shape === 0)
                            O = j = Math.min(le(R, G), le(R, G - M), le(R - Y, G), le(R - Y, G - M));
                          else if (L.shape === 1) {
                            var J = Math.min(Math.abs(G), Math.abs(G - M)) / Math.min(Math.abs(R), Math.abs(R - Y)), N = Lo(Y, M, R, G, !0), z = N[0], AA = N[1];
                            j = J * (O = le(z - R, (AA - G) / J));
                          }
                          break;
                        case 1:
                          L.shape === 0 ? O = j = Math.max(Math.abs(R), Math.abs(R - Y), Math.abs(G), Math.abs(G - M)) : L.shape === 1 && (O = Math.max(Math.abs(R), Math.abs(R - Y)), j = Math.max(Math.abs(G), Math.abs(G - M)));
                          break;
                        case 3:
                          if (L.shape === 0)
                            O = j = Math.max(le(R, G), le(R, G - M), le(R - Y, G), le(R - Y, G - M));
                          else if (L.shape === 1) {
                            J = Math.max(Math.abs(G), Math.abs(G - M)) / Math.max(Math.abs(R), Math.abs(R - Y));
                            var tA = Lo(Y, M, R, G, !1);
                            z = tA[0], AA = tA[1], j = J * (O = le(z - R, (AA - G) / J));
                          }
                      }
                      return Array.isArray(L.size) && (O = UA(L.size[0], Y), j = L.size.length === 2 ? UA(L.size[1], M) : O), [O, j];
                    }(y, b, F, h, p), k = U[0], T = U[1], k > 0 && T > 0 && (H = f.ctx.createRadialGradient(u + b, l + F, 0, u + b, l + F, k), _o(y.stops, 2 * k).forEach(function(L) {
                      return H.addColorStop(L.stop, jA(L.color));
                    }), f.path(s), f.ctx.fillStyle = H, k !== T ? (K = t.bounds.left + 0.5 * t.bounds.width, P = t.bounds.top + 0.5 * t.bounds.height, W = 1 / (X = T / k), f.ctx.save(), f.ctx.translate(K, P), f.ctx.transform(1, 0, 0, X, 0, 0), f.ctx.translate(-K, -P), f.ctx.fillRect(u, W * (l - P) + P, h, p * W), f.ctx.restore()) : f.ctx.fill())), I.label = 6;
                  case 6:
                    return r--, [2];
                }
              });
            }, f = this, B = 0, w = t.styles.backgroundImage.slice(0).reverse(), Q.label = 1;
          case 1:
            return B < w.length ? (C = w[B], [5, a(C)]) : [3, 4];
          case 2:
            Q.sent(), Q.label = 3;
          case 3:
            return B++, [3, 1];
          case 4:
            return [2];
        }
      });
    });
  }, A.prototype.renderSolidBorder = function(t, r, a) {
    return JA(this, 0, void 0, function() {
      return YA(this, function(f) {
        return this.path(na(a, r)), this.ctx.fillStyle = jA(t), this.ctx.fill(), [2];
      });
    });
  }, A.prototype.renderDoubleBorder = function(t, r, a, f) {
    return JA(this, 0, void 0, function() {
      var B, w;
      return YA(this, function(C) {
        switch (C.label) {
          case 0:
            return r < 3 ? [4, this.renderSolidBorder(t, a, f)] : [3, 2];
          case 1:
            return C.sent(), [2];
          case 2:
            return B = function(Q, y) {
              switch (y) {
                case 0:
                  return ne(Q.topLeftBorderBox, Q.topLeftBorderDoubleOuterBox, Q.topRightBorderBox, Q.topRightBorderDoubleOuterBox);
                case 1:
                  return ne(Q.topRightBorderBox, Q.topRightBorderDoubleOuterBox, Q.bottomRightBorderBox, Q.bottomRightBorderDoubleOuterBox);
                case 2:
                  return ne(Q.bottomRightBorderBox, Q.bottomRightBorderDoubleOuterBox, Q.bottomLeftBorderBox, Q.bottomLeftBorderDoubleOuterBox);
                default:
                  return ne(Q.bottomLeftBorderBox, Q.bottomLeftBorderDoubleOuterBox, Q.topLeftBorderBox, Q.topLeftBorderDoubleOuterBox);
              }
            }(f, a), this.path(B), this.ctx.fillStyle = jA(t), this.ctx.fill(), w = function(Q, y) {
              switch (y) {
                case 0:
                  return ne(Q.topLeftBorderDoubleInnerBox, Q.topLeftPaddingBox, Q.topRightBorderDoubleInnerBox, Q.topRightPaddingBox);
                case 1:
                  return ne(Q.topRightBorderDoubleInnerBox, Q.topRightPaddingBox, Q.bottomRightBorderDoubleInnerBox, Q.bottomRightPaddingBox);
                case 2:
                  return ne(Q.bottomRightBorderDoubleInnerBox, Q.bottomRightPaddingBox, Q.bottomLeftBorderDoubleInnerBox, Q.bottomLeftPaddingBox);
                default:
                  return ne(Q.bottomLeftBorderDoubleInnerBox, Q.bottomLeftPaddingBox, Q.topLeftBorderDoubleInnerBox, Q.topLeftPaddingBox);
              }
            }(f, a), this.path(w), this.ctx.fill(), [2];
        }
      });
    });
  }, A.prototype.renderNodeBackgroundAndBorders = function(t) {
    return JA(this, 0, void 0, function() {
      var r, a, f, B, w, C, Q, y, x = this;
      return YA(this, function(E) {
        switch (E.label) {
          case 0:
            return this.applyEffects(t.getEffects(2)), r = t.container.styles, a = !Pe(r.backgroundColor) || r.backgroundImage.length, f = [{ style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth }, { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth }, { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth }, { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }], B = Pg(vt(r.backgroundClip, 0), t.curves), a || r.boxShadow.length ? (this.ctx.save(), this.path(B), this.ctx.clip(), Pe(r.backgroundColor) || (this.ctx.fillStyle = jA(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
          case 1:
            E.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(_) {
              x.ctx.save();
              var S, D, m, q, rA, oA = Br(t.curves), d = _.inset ? 0 : 1e4, o = (S = oA, D = -d + (_.inset ? 1 : -1) * _.spread.number, m = (_.inset ? 1 : -1) * _.spread.number, q = _.spread.number * (_.inset ? -2 : 2), rA = _.spread.number * (_.inset ? -2 : 2), S.map(function(c, g) {
                switch (g) {
                  case 0:
                    return c.add(D, m);
                  case 1:
                    return c.add(D + q, m);
                  case 2:
                    return c.add(D + q, m + rA);
                  case 3:
                    return c.add(D, m + rA);
                }
                return c;
              }));
              _.inset ? (x.path(oA), x.ctx.clip(), x.mask(o)) : (x.mask(oA), x.ctx.clip(), x.path(o)), x.ctx.shadowOffsetX = _.offsetX.number + d, x.ctx.shadowOffsetY = _.offsetY.number, x.ctx.shadowColor = jA(_.color), x.ctx.shadowBlur = _.blur.number, x.ctx.fillStyle = _.inset ? jA(_.color) : "rgba(0,0,0,1)", x.ctx.fill(), x.ctx.restore();
            }), E.label = 2;
          case 2:
            w = 0, C = 0, Q = f, E.label = 3;
          case 3:
            return C < Q.length ? (y = Q[C]).style !== 0 && !Pe(y.color) && y.width > 0 ? y.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(y.color, y.width, w, t.curves, 2)] : [3, 11] : [3, 13];
          case 4:
            return E.sent(), [3, 11];
          case 5:
            return y.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(y.color, y.width, w, t.curves, 3)];
          case 6:
            return E.sent(), [3, 11];
          case 7:
            return y.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(y.color, y.width, w, t.curves)];
          case 8:
            return E.sent(), [3, 11];
          case 9:
            return [4, this.renderSolidBorder(y.color, w, t.curves)];
          case 10:
            E.sent(), E.label = 11;
          case 11:
            w++, E.label = 12;
          case 12:
            return C++, [3, 3];
          case 13:
            return [2];
        }
      });
    });
  }, A.prototype.renderDashedDottedBorder = function(t, r, a, f, B) {
    return JA(this, 0, void 0, function() {
      var w, C, Q, y, x, E, _, S, D, m, q, rA, oA, d, o, c;
      return YA(this, function(g) {
        return this.ctx.save(), w = function(i, n) {
          switch (n) {
            case 0:
              return Vi(i.topLeftBorderStroke, i.topRightBorderStroke);
            case 1:
              return Vi(i.topRightBorderStroke, i.bottomRightBorderStroke);
            case 2:
              return Vi(i.bottomRightBorderStroke, i.bottomLeftBorderStroke);
            default:
              return Vi(i.bottomLeftBorderStroke, i.topLeftBorderStroke);
          }
        }(f, a), C = na(f, a), B === 2 && (this.path(C), this.ctx.clip()), oe(C[0]) ? (Q = C[0].start.x, y = C[0].start.y) : (Q = C[0].x, y = C[0].y), oe(C[1]) ? (x = C[1].end.x, E = C[1].end.y) : (x = C[1].x, E = C[1].y), _ = Math.abs(a === 0 || a === 2 ? Q - x : y - E), this.ctx.beginPath(), B === 3 ? this.formatPath(w) : this.formatPath(C.slice(0, 2)), S = r < 3 ? 3 * r : 2 * r, D = r < 3 ? 2 * r : r, B === 3 && (S = r, D = r), m = !0, _ <= 2 * S ? m = !1 : _ <= 2 * S + D ? (S *= q = _ / (2 * S + D), D *= q) : (rA = Math.floor((_ + D) / (S + D)), oA = (_ - rA * S) / (rA - 1), D = (d = (_ - (rA + 1) * S) / rA) <= 0 || Math.abs(D - oA) < Math.abs(D - d) ? oA : d), m && (B === 3 ? this.ctx.setLineDash([0, S + D]) : this.ctx.setLineDash([S, D])), B === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = 2 * r + 1.1, this.ctx.strokeStyle = jA(t), this.ctx.stroke(), this.ctx.setLineDash([]), B === 2 && (oe(C[0]) && (o = C[3], c = C[0], this.ctx.beginPath(), this.formatPath([new aA(o.end.x, o.end.y), new aA(c.start.x, c.start.y)]), this.ctx.stroke()), oe(C[1]) && (o = C[1], c = C[2], this.ctx.beginPath(), this.formatPath([new aA(o.end.x, o.end.y), new aA(c.start.x, c.start.y)]), this.ctx.stroke())), this.ctx.restore(), [2];
      });
    });
  }, A.prototype.render = function(t) {
    return JA(this, 0, void 0, function() {
      var r;
      return YA(this, function(a) {
        switch (a.label) {
          case 0:
            return this.options.backgroundColor && (this.ctx.fillStyle = jA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), f = new Xc(t, null), B = new Jc(f), qn(f, B, B, w = []), zc(f.container, w), r = B, [4, this.renderStack(r)];
          case 1:
            return a.sent(), this.applyEffects([]), [2, this.canvas];
        }
        var f, B, w;
      });
    });
  }, A;
}(qc), Kg = function(e) {
  return e instanceof Oc || e instanceof Lc || e instanceof Bs && e.type !== gr && e.type !== dr;
}, Pg = function(e, A) {
  switch (e) {
    case 0:
      return Br(A);
    case 2:
      return function(t) {
        return [t.topLeftContentBox, t.topRightContentBox, t.bottomRightContentBox, t.bottomLeftContentBox];
      }(A);
    default:
      return mr(A);
  }
}, jg = function(e) {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    default:
      return "left";
  }
}, Ng = ["-apple-system", "system-ui"], Gg = function(e) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function(A) {
    return Ng.indexOf(A) === -1;
  }) : e;
}, Vg = function(e) {
  function A(t, r) {
    var a = e.call(this, t, r) || this;
    return a.canvas = r.canvas ? r.canvas : document.createElement("canvas"), a.ctx = a.canvas.getContext("2d"), a.options = r, a.canvas.width = Math.floor(r.width * r.scale), a.canvas.height = Math.floor(r.height * r.scale), a.canvas.style.width = r.width + "px", a.canvas.style.height = r.height + "px", a.ctx.scale(a.options.scale, a.options.scale), a.ctx.translate(-r.x, -r.y), a.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), a;
  }
  return fe(A, e), A.prototype.render = function(t) {
    return JA(this, 0, void 0, function() {
      var r, a;
      return YA(this, function(f) {
        switch (f.label) {
          case 0:
            return r = Vn(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, Wg(r)];
          case 1:
            return a = f.sent(), this.options.backgroundColor && (this.ctx.fillStyle = jA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(a, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
        }
      });
    });
  }, A;
}(qc), Wg = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, Yg = function() {
  function e(A) {
    var t = A.id, r = A.enabled;
    this.id = t, this.enabled = r, this.start = Date.now();
  }
  return e.prototype.debug = function() {
    for (var A = [], t = 0; t < arguments.length; t++)
      A[t] = arguments[t];
    this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Ui([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
  }, e.prototype.getTime = function() {
    return Date.now() - this.start;
  }, e.prototype.info = function() {
    for (var A = [], t = 0; t < arguments.length; t++)
      A[t] = arguments[t];
    this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Ui([this.id, this.getTime() + "ms"], A));
  }, e.prototype.warn = function() {
    for (var A = [], t = 0; t < arguments.length; t++)
      A[t] = arguments[t];
    this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Ui([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
  }, e.prototype.error = function() {
    for (var A = [], t = 0; t < arguments.length; t++)
      A[t] = arguments[t];
    this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Ui([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
  }, e.instances = {}, e;
}(), Jg = function() {
  function e(A, t) {
    var r;
    this.windowBounds = t, this.instanceName = "#" + e.instanceCount++, this.logger = new Yg({ id: this.instanceName, enabled: A.logging }), this.cache = (r = A.cache) !== null && r !== void 0 ? r : new xg(this, A);
  }
  return e.instanceCount = 1, e;
}();
typeof window < "u" && Wc.setContext(window);
var Xg = function(e, A) {
  return JA(void 0, 0, void 0, function() {
    var t, r, a, f, B, w, C, Q, y, x, E, _, S, D, m, q, rA, oA, d, o, c, g, i, n, s, u, l, h, p, v, b, F, U, k, T, H, K, P;
    return YA(this, function(X) {
      switch (X.label) {
        case 0:
          if (!e || typeof e != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (!(t = e.ownerDocument))
            throw new Error("Element is not attached to a Document");
          if (!(r = t.defaultView))
            throw new Error("Document is not attached to a Window");
          return a = { allowTaint: (g = A.allowTaint) !== null && g !== void 0 && g, imageTimeout: (i = A.imageTimeout) !== null && i !== void 0 ? i : 15e3, proxy: A.proxy, useCORS: (n = A.useCORS) !== null && n !== void 0 && n }, f = _n({ logging: (s = A.logging) === null || s === void 0 || s, cache: A.cache }, a), B = { windowWidth: (u = A.windowWidth) !== null && u !== void 0 ? u : r.innerWidth, windowHeight: (l = A.windowHeight) !== null && l !== void 0 ? l : r.innerHeight, scrollX: (h = A.scrollX) !== null && h !== void 0 ? h : r.pageXOffset, scrollY: (p = A.scrollY) !== null && p !== void 0 ? p : r.pageYOffset }, w = new Le(B.scrollX, B.scrollY, B.windowWidth, B.windowHeight), C = new Jg(f, w), Q = (v = A.foreignObjectRendering) !== null && v !== void 0 && v, y = { allowTaint: (b = A.allowTaint) !== null && b !== void 0 && b, onclone: A.onclone, ignoreElements: A.ignoreElements, inlineImages: Q, copyStyles: Q }, C.logger.debug("Starting document clone with size " + w.width + "x" + w.height + " scrolled to " + -w.left + "," + -w.top), x = new ta(C, e, y), (E = x.clonedReferenceElement) ? [4, x.toIFrame(t, w)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return _ = X.sent(), S = ms(E) || E.tagName === "HTML" ? function(W) {
            var I = W.body, L = W.documentElement;
            if (!I || !L)
              throw new Error("Unable to get document size");
            var R = Math.max(Math.max(I.scrollWidth, L.scrollWidth), Math.max(I.offsetWidth, L.offsetWidth), Math.max(I.clientWidth, L.clientWidth)), G = Math.max(Math.max(I.scrollHeight, L.scrollHeight), Math.max(I.offsetHeight, L.offsetHeight), Math.max(I.clientHeight, L.clientHeight));
            return new Le(0, 0, R, G);
          }(E.ownerDocument) : Ir(C, E), D = S.width, m = S.height, q = S.left, rA = S.top, oA = zg(C, E, A.backgroundColor), d = { canvas: A.canvas, backgroundColor: oA, scale: (U = (F = A.scale) !== null && F !== void 0 ? F : r.devicePixelRatio) !== null && U !== void 0 ? U : 1, x: ((k = A.x) !== null && k !== void 0 ? k : 0) + q, y: ((T = A.y) !== null && T !== void 0 ? T : 0) + rA, width: (H = A.width) !== null && H !== void 0 ? H : Math.ceil(D), height: (K = A.height) !== null && K !== void 0 ? K : Math.ceil(m) }, Q ? (C.logger.debug("Document cloned, using foreign object rendering"), [4, new Vg(C, d).render(E)]) : [3, 3];
        case 2:
          return o = X.sent(), [3, 5];
        case 3:
          return C.logger.debug("Document cloned, element located at " + q + "," + rA + " with size " + D + "x" + m + " using computed rendering"), C.logger.debug("Starting DOM parsing"), c = Mc(C, E), oA === c.styles.backgroundColor && (c.styles.backgroundColor = Te.TRANSPARENT), C.logger.debug("Starting renderer for element at " + d.x + "," + d.y + " with size " + d.width + "x" + d.height), [4, new Rg(C, d).render(c)];
        case 4:
          o = X.sent(), X.label = 5;
        case 5:
          return ((P = A.removeContainer) === null || P === void 0 || P) && (ta.destroy(_) || C.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), C.logger.debug("Finished rendering"), [2, o];
      }
    });
  });
}, zg = function(e, A, t) {
  var r = A.ownerDocument, a = r.documentElement ? ti(e, getComputedStyle(r.documentElement).backgroundColor) : Te.TRANSPARENT, f = r.body ? ti(e, getComputedStyle(r.body).backgroundColor) : Te.TRANSPARENT, B = typeof t == "string" ? ti(e, t) : t === null ? Te.TRANSPARENT : 4294967295;
  return A === r.documentElement ? Pe(a) ? Pe(f) ? B : f : a : B;
};
const ws = "shakeSdk: ", QA = (e) => {
}, Zc = (e) => {
  console.info(`${ws} ${e}`);
}, zA = (e) => {
  console.warn(`${ws} ${e}`);
}, Cs = (e) => {
  console.error(`${ws} ${e}`);
};
class vs {
  constructor() {
    V(this, "captureScreenshot", async (A) => {
      try {
        const t = window.innerWidth, r = window.innerHeight, a = window.scrollX, f = window.scrollY, B = await function(w, C) {
          return C === void 0 && (C = {}), Xg(w, C);
        }(A, { x: a, y: f, width: t, height: r, scrollX: 0, scrollY: 0, allowTaint: !0, useCORS: !0, backgroundColor: "transparent", logging: !1 });
        return await this.getBlobFromCanvas(B);
      } catch (t) {
        Cs(t.message);
      }
      return null;
    });
    V(this, "getBlobFromCanvas", (A) => new Promise((t) => {
      A.toBlob((r) => {
        t(r);
      });
    }));
  }
}
const It = () => {
  const e = navigator.userAgent;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e) || window.ontouchstart !== void 0;
};
let Zn = "";
const $c = () => {
  if (It()) {
    const e = document.getElementsByTagName("body")[0];
    Zn = e.style.overflow, e.style.overflow = "hidden";
  }
}, Al = async () => {
  const e = await _t(), A = Cl(e);
  document.body.appendChild(A), nt.isShakeOpened = !0, $c();
};
var EA = ((e) => (e[e.IMAGE = 0] = "IMAGE", e[e.VIDEO = 1] = "VIDEO", e[e.FILE = 2] = "FILE", e))(EA || {});
function sr(e) {
  const A = new Date(e);
  return `${A.getUTCFullYear()}-${(A.getUTCMonth() + 1).toString().padStart(2, "0")}-${A.getUTCDate().toString().padStart(2, "0")}T${A.getUTCHours().toString().padStart(2, "0")}:${A.getUTCMinutes().toString().padStart(2, "0")}:${A.getUTCSeconds().toString().padStart(2, "0")}.${A.getUTCMilliseconds().toString().padStart(3, "0")}Z`;
}
const ys = (e, A) => e === EA.IMAGE ? `image_${sr((/* @__PURE__ */ new Date()).toString())}.` + A : e === EA.VIDEO ? `video_${sr((/* @__PURE__ */ new Date()).toString())}.` + A : e === EA.FILE ? `file_${sr((/* @__PURE__ */ new Date()).toString())}.` + A : "", el = (e) => {
  const A = { "video/webm": "webm", "video/mp4": "mp4", "video/x-matroska": "mkv", "image/png": "png", "image/jpeg": "jpg", "image/gif": "gif", "image/webp": "webp" };
  for (const t in A)
    if (e.includes(t))
      return A[t];
  return "";
};
async function bs(e, A) {
  A || (A = el(e.type));
  const t = ys(EA.IMAGE, A);
  await Qs(e, EA.IMAGE, t);
}
async function tl(e, A) {
  A || (A = el(e.type));
  const t = ys(EA.VIDEO, A);
  await Qs(e, EA.VIDEO, t);
}
async function Qs(e, A, t) {
  const r = { type: A, data: e, name: t, timestamp: (/* @__PURE__ */ new Date()).getTime() };
  await hA.attachmentsManager.addAttachment(r);
}
function il() {
  return new Promise((e, A) => {
    const t = indexedDB.open(kA, 4);
    t.onerror = function() {
      A("Error opening database");
    }, t.onsuccess = function(r) {
      const a = r.target.result.transaction([it], "readonly").objectStore(it).get(0);
      a.onsuccess = function(f) {
        const B = f.target.result;
        e(B);
      }, a.onerror = function() {
        A("Error retrieving state from IndexedDB");
      };
    }, t.onupgradeneeded = xA;
  });
}
const Ge = (e = !0) => {
  if (!nt.isShakeOpened)
    return;
  nt.isShakeOpened = !1;
  const A = document.getElementById(di);
  if (A) {
    A.remove();
    const t = WA.localStorage;
    e && (Tf(), t.clearShakeState(), new Promise((r, a) => {
      const f = indexedDB.open(kA, 4);
      f.onerror = function() {
        a("Error opening database");
      }, f.onsuccess = function(B) {
        const w = B.target.result.transaction([it], "readwrite").objectStore(it).clear();
        w.onsuccess = function() {
          r("State deleted successfully from IndexedDB");
        }, w.onerror = function() {
          a("Error deleting state from IndexedDB");
        };
      }, f.onupgradeneeded = xA;
    }), new Promise((r, a) => {
      const f = indexedDB.open(kA, 4);
      f.onsuccess = function(B) {
        const w = B.target.result.transaction([ge], "readwrite").objectStore(ge).clear();
        w.onsuccess = function() {
          r("All files deleted successfully from IndexedDB");
        }, w.onerror = function() {
          a("Error deleting files from IndexedDB");
        };
      }, f.onerror = IA(a), f.onupgradeneeded = xA;
    }));
  }
  It() && (document.getElementsByTagName("body")[0].style.overflow = Zn, Zn = "body.style.overflow");
}, ks = () => {
  Ge(!1);
  const e = uc("data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20width='16px'%20height='16px'%20viewBox='0%200%2032%2032'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform='translate(-35.852326,-90.237974)'%3e%3cpath%20style='fill:%23ff0000'%20d='m%2067.852325,106.23797%20a%2016,16%200%200%201%20-16,16%2016,16%200%200%201%20-16,-16%2016,16%200%200%201%2016,-15.999997%2016,16%200%200%201%2016,15.999997%20z'/%3e%3c/g%3e%3c/svg%3e", "white", "#d3d3d3", () => {
    e.remove(), (async () => {
      const A = await new vs().captureScreenshot(document.body);
      A && await bs(A), await Al();
    })();
  });
  document.body.appendChild(e);
}, xr = class xr {
  constructor() {
    V(this, "onStartListener", null);
    V(this, "onStopListener", null);
    V(this, "stream", null);
    V(this, "mediaRecorder", null);
    V(this, "recordedChunks", []);
    V(this, "timeout", null);
    V(this, "isRecording", !1);
    V(this, "start", async () => {
      this.isRecording || (this.stream = await navigator.mediaDevices.getDisplayMedia({ video: !0 }), this.mediaRecorder = new MediaRecorder(this.stream, { mimeType: aa() }), this.mediaRecorder.onstart = () => {
        var A;
        this.startTimer(), (A = this.onStartListener) == null || A.call(this), this.isRecording = !0;
      }, this.mediaRecorder.ondataavailable = (A) => {
        A.data.size > 0 && this.recordedChunks.push(A.data);
      }, this.mediaRecorder.onstop = () => {
        var t;
        this.stopTimer();
        const A = new Blob(this.recordedChunks, { type: aa() });
        (t = this.onStopListener) == null || t.call(this, A), this.isRecording = !1;
      }, this.mediaRecorder.start());
    });
    V(this, "stop", () => {
      var A;
      if ((A = this.mediaRecorder) == null || A.stop(), this.stream) {
        const t = this.stream.getTracks();
        for (let r = 0; r < t.length; r++)
          t[r].stop();
      }
    });
    V(this, "startTimer", () => {
      this.stopTimer(), this.timeout = window.setTimeout(() => {
        this.stop();
      }, xr.SCREEN_RECORDING_TIME);
    });
    V(this, "stopTimer", () => {
      this.timeout && (window.clearTimeout(this.timeout), this.timeout = null);
    });
  }
};
V(xr, "SCREEN_RECORDING_TIME", 3e4);
let $n = xr;
const aa = () => MediaRecorder.isTypeSupported("video/webm; codecs=vp9") ? "video/webm; codecs=vp9" : MediaRecorder.isTypeSupported("video/webm; codecs=vp8") ? "video/webm; codecs=vp8" : MediaRecorder.isTypeSupported("video/mp4") ? "video/mp4" : void 0, xs = async () => {
  try {
    const e = uc("data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20width='15px'%20height='15px'%20viewBox='0%200%2032%2032'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%3e%3crect%20stroke='%23000'%20rx='3'%20stroke-width='0'%20height='32'%20width='32'%20y='0'%20x='0'%20fill='%23ffffff'/%3e%3c/g%3e%3c/svg%3e", "red", "#d90000", () => {
      A.stop();
    }), A = new $n();
    A.onStartListener = () => {
      document.body.appendChild(e), Ge(!1);
    }, A.onStopListener = (t) => {
      e.remove(), (async (r) => {
        await tl(r), await Al();
      })(t);
    }, await A.start();
  } catch (e) {
    Cs(e == null ? void 0 : e.message);
  }
}, Cr = (e, A) => {
  const t = Sr(e), r = je(A), a = document.createElement("div");
  a.classList.add("shake-sdk-sheet"), a.appendChild(t), a.appendChild(r);
  const f = document.createElement("div");
  f.classList.add("shake-sdk-sheet-background"), f.appendChild(a), f.onclick = () => B.remove();
  const B = document.createElement("div"), w = B.attachShadow({ mode: "open" });
  return w.appendChild(f), Ve(w), B;
}, rl = (e, A) => {
  const t = Sr(e), r = document.createElement("div");
  r.classList.add("shake-sdk-sheet"), r.appendChild(t), A.forEach((w) => {
    r.appendChild(qg(w, () => {
      w.onClick(), f.remove();
    }));
  });
  const a = document.createElement("div");
  a.classList.add("shake-sdk-sheet-background"), a.appendChild(r), a.onclick = () => f.remove();
  const f = document.createElement("div"), B = f.attachShadow({ mode: "open" });
  return B.appendChild(a), Ve(B), f;
}, qg = (e, A) => {
  const t = KA(e.icon), r = je(e.text), a = document.createElement("button");
  return a.classList.add("shake-sdk-sheet-item"), a.onclick = A, a.appendChild(t), a.appendChild(r), a;
}, ci = (e) => {
  document.body.appendChild(e);
};
class li {
  constructor(A, t, r = 4e3) {
    V(this, "title");
    V(this, "message");
    V(this, "time");
    V(this, "element");
    this.title = A, this.message = t, this.time = r, this.element = null;
    const a = uA();
    a.classList.add("toast-notification"), this.element = a;
    const f = document.getElementsByClassName("toast-notification");
    a.style.marginBottom = 55 * f.length + "px";
    const B = uA();
    if (B.classList.add("content-container"), this.title) {
      const E = uA();
      E.classList.add("title-container"), E.textContent = this.title, B.appendChild(E);
    }
    const w = uA();
    w.classList.add("message-container"), w.textContent = this.message, B.appendChild(w), a.appendChild(B);
    const C = uA();
    C.classList.add("close-notification");
    const Q = KA("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14021_39143)'%3e%3cpath%20d='M16%208L8%2016'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16%2016.001L8%208.00098'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14021_39143'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
    C.appendChild(Q), a.append(C);
    const y = document.createElement("div"), x = y.attachShadow({ mode: "open" });
    x.appendChild(a), Ve(x), document.body.appendChild(y), setTimeout(function() {
      y.remove();
    }, this.time), C.addEventListener("click", () => {
      a.remove();
    });
  }
}
const nl = () => Cr(fA().shake_sdk_dialog_attachment_count_limit_title, fA().shake_sdk_dialog_attachment_count_limit_message), Fs = async () => (await _t()).length >= 10, sl = async (e) => {
  if (await (async (t) => (await _t()).find((r) => r.name === t))(e.name))
    return;
  const A = window.innerWidth > 1024;
  if (((t) => t.size > 10485760)(e)) {
    const t = e.size / 1048576;
    if (A) {
      let r = fA().shake_sdk_dialog_attachment_size_limit_message;
      r = r.replace("%", t.toFixed(0)), new li(fA().shake_sdk_dialog_attachment_size_limit_title, r);
    } else
      ci(((r) => {
        let a = fA().shake_sdk_dialog_attachment_size_limit_message;
        return a = a.replace("%", r.toFixed(0)), Cr(fA().shake_sdk_dialog_attachment_size_limit_title, a);
      })(t));
  } else
    await Fs() ? A ? new li(fA().shake_sdk_dialog_attachment_count_limit_title, fA().shake_sdk_dialog_attachment_count_limit_message) : ci(nl()) : await async function(t) {
      var f;
      const r = new Blob([t], { type: t.type }), a = ((f = t.name.split(".").reverse()) == null ? void 0 : f[0]) ?? "";
      t.type.startsWith("image") ? await bs(r, a) : t.type.startsWith("video") ? await tl(r, a) : await Qs(r, EA.FILE, t.name);
    }(e);
}, ca = (e) => {
  const A = (t) => {
    t.preventDefault(), t.stopPropagation();
  };
  ["dragenter", "dragover", "dragleave", "drop"].forEach((t) => {
    e.addEventListener(t, A, !1);
  }), ["dragenter", "dragover"].forEach((t) => {
    e.addEventListener(t, () => {
      e.classList.add("hover");
    }, !1);
  }), ["dragleave", "drop"].forEach((t) => {
    e.addEventListener(t, () => {
      e.classList.remove("hover");
    }, !1);
  }), e.addEventListener("drop", async (t) => {
    var f;
    const r = t.dataTransfer, a = (f = r == null ? void 0 : r.files) == null ? void 0 : f[0];
    a && await sl(a);
  }, !1);
}, ol = "data:image/svg+xml,%3csvg%20width='23'%20height='23'%20viewBox='0%200%2023%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15050_29400)'%3e%3cpath%20d='M11.3994%207.80005V15'%20stroke='%238E8E93'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.9998%2011.4001H7.7998'%20stroke='%238E8E93'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15050_29400'%3e%3crect%20width='21.6'%20height='21.6'%20fill='white'%20transform='translate(0.599609%200.600098)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", hi = (e) => {
  const A = document.createElement("img");
  A.draggable = !1, A.src = e;
  const t = document.createElement("button");
  return t.classList.add("shake-sdk-circle-button"), t.appendChild(A), t;
}, sn = ({ img: e, text: A, onClick: t }) => {
  const r = document.createElement("button");
  return r.classList.add("shake-sdk-context-menu-item"), r.onclick = t, r.appendChild(KA(e)), r.appendChild(((a) => {
    const f = document.createElement("p");
    return f.classList.add("shake-sdk-text-p2"), f.innerText = a, f;
  })(A)), r;
}, Zg = (e) => {
  const A = [];
  A.push(sn({ img: lc, text: fA().shake_sdk_dialog_add_attachment_grab_screenshot, onClick: ks })), It() || A.push(sn({ img: hc, text: fA().shake_sdk_dialog_add_attachment_record_screen, onClick: xs })), A.push(sn({ img: "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15055_29723)'%3e%3cpath%20d='M15.3453%205.345L12.9887%202.98833C12.6762%202.67583%2012.252%202.5%2011.8103%202.5H5.83366C4.91283%202.5%204.16699%203.24583%204.16699%204.16667V15.8333C4.16699%2016.7542%204.91283%2017.5%205.83366%2017.5H14.167C15.0878%2017.5%2015.8337%2016.7542%2015.8337%2015.8333V6.52333C15.8337%206.08167%2015.6578%205.6575%2015.3453%205.345Z'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15.8337%206.66667H12.5003C12.0403%206.66667%2011.667%206.29333%2011.667%205.83333V2.5'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15055_29723'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", text: fA().shake_sdk_dialog_add_attachment_browse_locations, onClick: ds }));
  const { menu: t, toggle: r } = ((a, f, B) => {
    let w = !1;
    const C = uA();
    return C.classList.add("shake-sdk-context-menu"), f.forEach((Q) => C.appendChild(Q)), document.addEventListener("click", function(Q) {
      w && Q.target !== a && (C.style.display = "none", w = !1);
    }), { menu: C, toggle: () => {
      w ? (C.style.display = "none", w = !1) : (C.style.display = "block", w = !0), C.style.left = a.getBoundingClientRect().left + "px", C.style.top = a.getBoundingClientRect().top + "px";
    } };
  })(e, A);
  return e.onclick = async (a) => {
    a.stopPropagation(), await Fs() ? new li(fA().shake_sdk_dialog_attachment_count_limit_title, fA().shake_sdk_dialog_attachment_count_limit_message) : r();
  }, t;
}, al = "data:image/svg+xml,%3csvg%20width='31'%20height='32'%20viewBox='0%200%2031%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.7285%2013.4543L17.8197%2018.5455'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.8197%2013.4545L12.7285%2018.5457'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Rr = ({ src: e, controls: A, autoplay: t }) => {
  const r = document.createElement("video");
  return r.classList.add("shake-sdk-video"), r.src = e, r.controls = A ?? !1, r.preload = "metadata", r.autoplay = t ?? !1, r.loop = !0, r;
}, $g = (e) => {
  const A = uA();
  return A.classList.add("shake-sdk-attachment-title-box"), A.appendChild(Ie(e)), A;
}, Af = (e) => {
  const A = uA();
  A.classList.add("shake-sdk-file-thumbnail");
  const t = Ie(e);
  return A.appendChild(t), A;
}, ef = (e, A) => {
  const t = hA.attachmentsManager, r = /* @__PURE__ */ new Map();
  let a = e.length - 1;
  const f = (x) => Array.from(r.keys()).find((E) => E === x.name) ?? x.name, B = (x) => {
    a = Array.from(r.keys()).indexOf(f(x)), Q();
  }, w = (x) => {
    t.removeAttachment(x);
  }, C = (x) => {
    const E = y.lastChild;
    E && y.removeChild(E);
    const _ = ((S, D, m) => {
      const q = hi(al);
      let rA, oA;
      q.classList.add("shake-sdk-attachment-remove"), q.onclick = (n) => {
        n.stopPropagation(), m(S);
      };
      const d = URL.createObjectURL(S.drawingData ?? S.data);
      S.type == EA.IMAGE ? (rA = fA().shake_sdk_dialog_add_attachment_type_image, oA = KA(d)) : S.type == EA.VIDEO ? (rA = fA().shake_sdk_dialog_add_attachment_type_video, oA = Rr({ src: d + "#t=0.1", autoplay: !0 })) : (rA = fA().shake_sdk_dialog_add_attachment_type_file, oA = Af(S.name)), oA.classList.add("shake-sdk-attachment-item-thumbnail");
      const o = us();
      o.classList.add("shake-sdk-attachment-item-card"), o.appendChild(oA), o.appendChild(q);
      const c = $g(rA), g = uA();
      g.classList.add("shake-sdk-attachment-item-title"), g.appendChild(c);
      const i = uA();
      return i.classList.add("shake-sdk-attachment-item"), i.draggable = !1, i.onclick = () => D(S), i.appendChild(o), i.appendChild(g), i;
    })(x, B, w);
    r.set(x.name, _), y.appendChild(_), y.appendChild((() => {
      const S = hi(ol);
      S.classList.add("shake-sdk-attachment-add-button");
      const D = uA();
      return D.classList.add("shake-sdk-attachments-add-item"), D.appendChild(S), D.appendChild(Zg(S)), D;
    })());
  };
  t.removeObservers.push((x) => {
    const E = r.get(f(x));
    E && (E.remove(), r.delete(f(x)), r.size - 1 < a && (a = r.size - 1), Q());
  }), t.updateObservers.push((x) => {
    const E = r.get(f(x));
    E && ((_, S) => {
      const D = URL.createObjectURL(S.drawingData ?? S.data), m = _.getElementsByClassName("shake-sdk-attachment-item-thumbnail");
      S.type == EA.IMAGE && (m[0].src = D), S.type == EA.VIDEO && (m[0].src = D);
    })(E, x);
  }), t.addObservers.push((x) => {
    C(x), a = r.size - 1, Q();
  });
  const Q = () => {
    if (a < 0)
      return void A(null);
    const x = Array.from(r.keys())[a], E = Array.from(r.values())[a], _ = "shake-sdk-attachment-item-selected", S = Array.from(r.values());
    if (S) {
      for (const D of S)
        D.classList.remove(_);
      E == null || E.classList.add(_);
    }
    A(x);
  }, y = uA();
  return y.classList.add("shake-sdk-attachments-items"), e.forEach((x) => C(x)), Q(), y;
};
var TA = ((e) => (e.PENCIL = "pencil", e.BLUR = "blur", e.ELLIPSE = "ellipse", e.RECT = "rect", e))(TA || {}), Zt = {};
const on = rh(Object.freeze(Object.defineProperty({ __proto__: null, default: {} }, Symbol.toStringTag, { value: "Module" })));
(function(e) {
  /*! Fabric.js Copyright 2008-2015, Printio (Juriy Zaytsev, Maxim Chernyak) */
  var A, t, r, a, f, B, w, C, Q, y, x, E, _, S, D, m = m || { version: "5.3.0" };
  if (e.fabric = m, typeof document < "u" && typeof window < "u")
    document instanceof (typeof HTMLDocument < "u" ? HTMLDocument : Document) ? m.document = document : m.document = document.implementation.createHTMLDocument(""), m.window = window;
  else {
    var q = new on.JSDOM(decodeURIComponent("%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E"), { features: { FetchExternalResources: ["img"] }, resources: "usable" }).window;
    m.document = q.document, m.jsdomImplForWrapper = on.implForWrapper, m.nodeCanvas = on.Canvas, m.window = q, DOMParser = m.window.DOMParser;
  }
  function rA(d, o) {
    var c = d.canvas, g = o.targetCanvas, i = g.getContext("2d");
    i.translate(0, g.height), i.scale(1, -1);
    var n = c.height - g.height;
    i.drawImage(c, 0, n, g.width, g.height, 0, 0, g.width, g.height);
  }
  function oA(d, o) {
    var c = o.targetCanvas.getContext("2d"), g = o.destinationWidth, i = o.destinationHeight, n = g * i * 4, s = new Uint8Array(this.imageBuffer, 0, n), u = new Uint8ClampedArray(this.imageBuffer, 0, n);
    d.readPixels(0, 0, g, i, d.RGBA, d.UNSIGNED_BYTE, s);
    var l = new ImageData(u, g, i);
    c.putImageData(l, 0, 0);
  }
  m.isTouchSupported = "ontouchstart" in m.window || "ontouchstart" in m.document || m.window && m.window.navigator && m.window.navigator.maxTouchPoints > 0, m.isLikelyNode = typeof Buffer < "u" && typeof window > "u", m.SHARED_ATTRIBUTES = ["display", "transform", "fill", "fill-opacity", "fill-rule", "opacity", "stroke", "stroke-dasharray", "stroke-linecap", "stroke-dashoffset", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "id", "paint-order", "vector-effect", "instantiated_by_use", "clip-path"], m.DPI = 96, m.reNum = "(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:[eE][-+]?\\d+)?)", m.commaWsp = "(?:\\s+,?\\s*|,\\s*)", m.rePathCommand = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:[eE][-+]?\d+)?)/gi, m.reNonWord = /[ \n\.,;!\?\-]/, m.fontPaths = {}, m.iMatrix = [1, 0, 0, 1, 0, 0], m.svgNS = "http://www.w3.org/2000/svg", m.perfLimitSizeTotal = 2097152, m.maxCacheSideLimit = 4096, m.minCacheSideLimit = 256, m.charWidthsCache = {}, m.textureSize = 2048, m.disableStyleCopyPaste = !1, m.enableGLFiltering = !0, m.devicePixelRatio = m.window.devicePixelRatio || m.window.webkitDevicePixelRatio || m.window.mozDevicePixelRatio || 1, m.browserShadowBlurConstant = 1, m.arcToSegmentsCache = {}, m.boundsOfCurveCache = {}, m.cachesBoundsOfCurve = !0, m.forceGLPutImageData = !1, m.initFilterBackend = function() {
    return m.enableGLFiltering && m.isWebglSupported && m.isWebglSupported(m.textureSize) ? (console.log("max texture size: " + m.maxTextureSize), new m.WebglFilterBackend({ tileSize: m.textureSize })) : m.Canvas2dFilterBackend ? new m.Canvas2dFilterBackend() : void 0;
  }, typeof document < "u" && typeof window < "u" && (window.fabric = m), function() {
    function d(c, g) {
      if (this.__eventListeners[c]) {
        var i = this.__eventListeners[c];
        g ? i[i.indexOf(g)] = !1 : m.util.array.fill(i, !1);
      }
    }
    function o(c, g) {
      var i = (function() {
        g.apply(this, arguments), this.off(c, i);
      }).bind(this);
      this.on(c, i);
    }
    m.Observable = { fire: function(c, g) {
      if (!this.__eventListeners)
        return this;
      var i = this.__eventListeners[c];
      if (!i)
        return this;
      for (var n = 0, s = i.length; n < s; n++)
        i[n] && i[n].call(this, g || {});
      return this.__eventListeners[c] = i.filter(function(u) {
        return u !== !1;
      }), this;
    }, on: function(c, g) {
      if (this.__eventListeners || (this.__eventListeners = {}), arguments.length === 1)
        for (var i in c)
          this.on(i, c[i]);
      else
        this.__eventListeners[c] || (this.__eventListeners[c] = []), this.__eventListeners[c].push(g);
      return this;
    }, once: function(c, g) {
      if (arguments.length === 1)
        for (var i in c)
          o.call(this, i, c[i]);
      else
        o.call(this, c, g);
      return this;
    }, off: function(c, g) {
      if (!this.__eventListeners)
        return this;
      if (arguments.length === 0)
        for (c in this.__eventListeners)
          d.call(this, c);
      else if (arguments.length === 1 && typeof arguments[0] == "object")
        for (var i in c)
          d.call(this, i, c[i]);
      else
        d.call(this, c, g);
      return this;
    } };
  }(), m.Collection = { _objects: [], add: function() {
    if (this._objects.push.apply(this._objects, arguments), this._onObjectAdded)
      for (var d = 0, o = arguments.length; d < o; d++)
        this._onObjectAdded(arguments[d]);
    return this.renderOnAddRemove && this.requestRenderAll(), this;
  }, insertAt: function(d, o, c) {
    var g = this._objects;
    return c ? g[o] = d : g.splice(o, 0, d), this._onObjectAdded && this._onObjectAdded(d), this.renderOnAddRemove && this.requestRenderAll(), this;
  }, remove: function() {
    for (var d, o = this._objects, c = !1, g = 0, i = arguments.length; g < i; g++)
      (d = o.indexOf(arguments[g])) !== -1 && (c = !0, o.splice(d, 1), this._onObjectRemoved && this._onObjectRemoved(arguments[g]));
    return this.renderOnAddRemove && c && this.requestRenderAll(), this;
  }, forEachObject: function(d, o) {
    for (var c = this.getObjects(), g = 0, i = c.length; g < i; g++)
      d.call(o, c[g], g, c);
    return this;
  }, getObjects: function(d) {
    return d === void 0 ? this._objects.concat() : this._objects.filter(function(o) {
      return o.type === d;
    });
  }, item: function(d) {
    return this._objects[d];
  }, isEmpty: function() {
    return this._objects.length === 0;
  }, size: function() {
    return this._objects.length;
  }, contains: function(d, o) {
    return this._objects.indexOf(d) > -1 || !!o && this._objects.some(function(c) {
      return typeof c.contains == "function" && c.contains(d, !0);
    });
  }, complexity: function() {
    return this._objects.reduce(function(d, o) {
      return d += o.complexity ? o.complexity() : 0;
    }, 0);
  } }, m.CommonMethods = { _setOptions: function(d) {
    for (var o in d)
      this.set(o, d[o]);
  }, _initGradient: function(d, o) {
    !d || !d.colorStops || d instanceof m.Gradient || this.set(o, new m.Gradient(d));
  }, _initPattern: function(d, o, c) {
    !d || !d.source || d instanceof m.Pattern ? c && c() : this.set(o, new m.Pattern(d, c));
  }, _setObject: function(d) {
    for (var o in d)
      this._set(o, d[o]);
  }, set: function(d, o) {
    return typeof d == "object" ? this._setObject(d) : this._set(d, o), this;
  }, _set: function(d, o) {
    this[d] = o;
  }, toggle: function(d) {
    var o = this.get(d);
    return typeof o == "boolean" && this.set(d, !o), this;
  }, get: function(d) {
    return this[d];
  } }, function(d) {
    var o = Math.sqrt, c = Math.atan2, g = Math.pow, i = Math.PI / 180, n = Math.PI / 2;
    m.util = { cos: function(s) {
      if (s === 0)
        return 1;
      switch (s < 0 && (s = -s), s / n) {
        case 1:
        case 3:
          return 0;
        case 2:
          return -1;
      }
      return Math.cos(s);
    }, sin: function(s) {
      if (s === 0)
        return 0;
      var u = 1;
      switch (s < 0 && (u = -1), s / n) {
        case 1:
          return u;
        case 2:
          return 0;
        case 3:
          return -u;
      }
      return Math.sin(s);
    }, removeFromArray: function(s, u) {
      var l = s.indexOf(u);
      return l !== -1 && s.splice(l, 1), s;
    }, getRandomInt: function(s, u) {
      return Math.floor(Math.random() * (u - s + 1)) + s;
    }, degreesToRadians: function(s) {
      return s * i;
    }, radiansToDegrees: function(s) {
      return s / i;
    }, rotatePoint: function(s, u, l) {
      var h = new m.Point(s.x - u.x, s.y - u.y), p = m.util.rotateVector(h, l);
      return new m.Point(p.x, p.y).addEquals(u);
    }, rotateVector: function(s, u) {
      var l = m.util.sin(u), h = m.util.cos(u);
      return { x: s.x * h - s.y * l, y: s.x * l + s.y * h };
    }, createVector: function(s, u) {
      return new m.Point(u.x - s.x, u.y - s.y);
    }, calcAngleBetweenVectors: function(s, u) {
      return Math.acos((s.x * u.x + s.y * u.y) / (Math.hypot(s.x, s.y) * Math.hypot(u.x, u.y)));
    }, getHatVector: function(s) {
      return new m.Point(s.x, s.y).multiply(1 / Math.hypot(s.x, s.y));
    }, getBisector: function(s, u, l) {
      var h = m.util.createVector(s, u), p = m.util.createVector(s, l), v = m.util.calcAngleBetweenVectors(h, p), b = v * (m.util.calcAngleBetweenVectors(m.util.rotateVector(h, v), p) === 0 ? 1 : -1) / 2;
      return { vector: m.util.getHatVector(m.util.rotateVector(h, b)), angle: v };
    }, projectStrokeOnPoints: function(s, u, l) {
      var h = [], p = u.strokeWidth / 2, v = u.strokeUniform ? new m.Point(1 / u.scaleX, 1 / u.scaleY) : new m.Point(1, 1), b = function(F) {
        var U = p / Math.hypot(F.x, F.y);
        return new m.Point(F.x * U * v.x, F.y * U * v.y);
      };
      return s.length <= 1 || s.forEach(function(F, U) {
        var k, T, H = new m.Point(F.x, F.y);
        U === 0 ? (T = s[U + 1], k = l ? b(m.util.createVector(T, H)).addEquals(H) : s[s.length - 1]) : U === s.length - 1 ? (k = s[U - 1], T = l ? b(m.util.createVector(k, H)).addEquals(H) : s[0]) : (k = s[U - 1], T = s[U + 1]);
        var K, P, X = m.util.getBisector(H, k, T), W = X.vector, I = X.angle;
        if (u.strokeLineJoin === "miter" && (K = -p / Math.sin(I / 2), P = new m.Point(W.x * K * v.x, W.y * K * v.y), Math.hypot(P.x, P.y) / p <= u.strokeMiterLimit))
          return h.push(H.add(P)), void h.push(H.subtract(P));
        K = -p * Math.SQRT2, P = new m.Point(W.x * K * v.x, W.y * K * v.y), h.push(H.add(P)), h.push(H.subtract(P));
      }), h;
    }, transformPoint: function(s, u, l) {
      return l ? new m.Point(u[0] * s.x + u[2] * s.y, u[1] * s.x + u[3] * s.y) : new m.Point(u[0] * s.x + u[2] * s.y + u[4], u[1] * s.x + u[3] * s.y + u[5]);
    }, makeBoundingBoxFromPoints: function(s, u) {
      if (u)
        for (var l = 0; l < s.length; l++)
          s[l] = m.util.transformPoint(s[l], u);
      var h = [s[0].x, s[1].x, s[2].x, s[3].x], p = m.util.array.min(h), v = m.util.array.max(h) - p, b = [s[0].y, s[1].y, s[2].y, s[3].y], F = m.util.array.min(b);
      return { left: p, top: F, width: v, height: m.util.array.max(b) - F };
    }, invertTransform: function(s) {
      var u = 1 / (s[0] * s[3] - s[1] * s[2]), l = [u * s[3], -u * s[1], -u * s[2], u * s[0]], h = m.util.transformPoint({ x: s[4], y: s[5] }, l, !0);
      return l[4] = -h.x, l[5] = -h.y, l;
    }, toFixed: function(s, u) {
      return parseFloat(Number(s).toFixed(u));
    }, parseUnit: function(s, u) {
      var l = /\D{0,2}$/.exec(s), h = parseFloat(s);
      switch (u || (u = m.Text.DEFAULT_SVG_FONT_SIZE), l[0]) {
        case "mm":
          return h * m.DPI / 25.4;
        case "cm":
          return h * m.DPI / 2.54;
        case "in":
          return h * m.DPI;
        case "pt":
          return h * m.DPI / 72;
        case "pc":
          return h * m.DPI / 72 * 12;
        case "em":
          return h * u;
        default:
          return h;
      }
    }, falseFunction: function() {
      return !1;
    }, getKlass: function(s, u) {
      return s = m.util.string.camelize(s.charAt(0).toUpperCase() + s.slice(1)), m.util.resolveNamespace(u)[s];
    }, getSvgAttributes: function(s) {
      var u = ["instantiated_by_use", "style", "id", "class"];
      switch (s) {
        case "linearGradient":
          u = u.concat(["x1", "y1", "x2", "y2", "gradientUnits", "gradientTransform"]);
          break;
        case "radialGradient":
          u = u.concat(["gradientUnits", "gradientTransform", "cx", "cy", "r", "fx", "fy", "fr"]);
          break;
        case "stop":
          u = u.concat(["offset", "stop-color", "stop-opacity"]);
      }
      return u;
    }, resolveNamespace: function(s) {
      if (!s)
        return m;
      var u, l = s.split("."), h = l.length, p = d || m.window;
      for (u = 0; u < h; ++u)
        p = p[l[u]];
      return p;
    }, loadImage: function(s, u, l, h) {
      if (s) {
        var p = m.util.createImage(), v = function() {
          u && u.call(l, p, !1), p = p.onload = p.onerror = null;
        };
        p.onload = v, p.onerror = function() {
          m.log("Error loading " + p.src), u && u.call(l, null, !0), p = p.onload = p.onerror = null;
        }, s.indexOf("data") !== 0 && h != null && (p.crossOrigin = h), s.substring(0, 14) === "data:image/svg" && (p.onload = null, m.util.loadImageInDom(p, v)), p.src = s;
      } else
        u && u.call(l, s);
    }, loadImageInDom: function(s, u) {
      var l = m.document.createElement("div");
      l.style.width = l.style.height = "1px", l.style.left = l.style.top = "-100%", l.style.position = "absolute", l.appendChild(s), m.document.querySelector("body").appendChild(l), s.onload = function() {
        u(), l.parentNode.removeChild(l), l = null;
      };
    }, enlivenObjects: function(s, u, l, h) {
      var p = [], v = 0, b = (s = s || []).length;
      function F() {
        ++v === b && u && u(p.filter(function(U) {
          return U;
        }));
      }
      b ? s.forEach(function(U, k) {
        U && U.type ? m.util.getKlass(U.type, l).fromObject(U, function(T, H) {
          H || (p[k] = T), h && h(U, T, H), F();
        }) : F();
      }) : u && u(p);
    }, enlivenObjectEnlivables: function(s, u, l) {
      var h = m.Object.ENLIVEN_PROPS.filter(function(p) {
        return !!s[p];
      });
      m.util.enlivenObjects(h.map(function(p) {
        return s[p];
      }), function(p) {
        var v = {};
        h.forEach(function(b, F) {
          v[b] = p[F], u && (u[b] = p[F]);
        }), l && l(v);
      });
    }, enlivenPatterns: function(s, u) {
      function l() {
        ++p === v && u && u(h);
      }
      var h = [], p = 0, v = (s = s || []).length;
      v ? s.forEach(function(b, F) {
        b && b.source ? new m.Pattern(b, function(U) {
          h[F] = U, l();
        }) : (h[F] = b, l());
      }) : u && u(h);
    }, groupSVGElements: function(s, u, l) {
      var h;
      return s && s.length === 1 ? (l !== void 0 && (s[0].sourcePath = l), s[0]) : (u && (u.width && u.height ? u.centerPoint = { x: u.width / 2, y: u.height / 2 } : (delete u.width, delete u.height)), h = new m.Group(s, u), l !== void 0 && (h.sourcePath = l), h);
    }, populateWithProperties: function(s, u, l) {
      if (l && Array.isArray(l))
        for (var h = 0, p = l.length; h < p; h++)
          l[h] in s && (u[l[h]] = s[l[h]]);
    }, createCanvasElement: function() {
      return m.document.createElement("canvas");
    }, copyCanvasElement: function(s) {
      var u = m.util.createCanvasElement();
      return u.width = s.width, u.height = s.height, u.getContext("2d").drawImage(s, 0, 0), u;
    }, toDataURL: function(s, u, l) {
      return s.toDataURL("image/" + u, l);
    }, createImage: function() {
      return m.document.createElement("img");
    }, multiplyTransformMatrices: function(s, u, l) {
      return [s[0] * u[0] + s[2] * u[1], s[1] * u[0] + s[3] * u[1], s[0] * u[2] + s[2] * u[3], s[1] * u[2] + s[3] * u[3], l ? 0 : s[0] * u[4] + s[2] * u[5] + s[4], l ? 0 : s[1] * u[4] + s[3] * u[5] + s[5]];
    }, qrDecompose: function(s) {
      var u = c(s[1], s[0]), l = g(s[0], 2) + g(s[1], 2), h = o(l), p = (s[0] * s[3] - s[2] * s[1]) / h, v = c(s[0] * s[2] + s[1] * s[3], l);
      return { angle: u / i, scaleX: h, scaleY: p, skewX: v / i, skewY: 0, translateX: s[4], translateY: s[5] };
    }, calcRotateMatrix: function(s) {
      if (!s.angle)
        return m.iMatrix.concat();
      var u = m.util.degreesToRadians(s.angle), l = m.util.cos(u), h = m.util.sin(u);
      return [l, h, -h, l, 0, 0];
    }, calcDimensionsMatrix: function(s) {
      var u = s.scaleX === void 0 ? 1 : s.scaleX, l = s.scaleY === void 0 ? 1 : s.scaleY, h = [s.flipX ? -u : u, 0, 0, s.flipY ? -l : l, 0, 0], p = m.util.multiplyTransformMatrices, v = m.util.degreesToRadians;
      return s.skewX && (h = p(h, [1, 0, Math.tan(v(s.skewX)), 1], !0)), s.skewY && (h = p(h, [1, Math.tan(v(s.skewY)), 0, 1], !0)), h;
    }, composeMatrix: function(s) {
      var u = [1, 0, 0, 1, s.translateX || 0, s.translateY || 0], l = m.util.multiplyTransformMatrices;
      return s.angle && (u = l(u, m.util.calcRotateMatrix(s))), (s.scaleX !== 1 || s.scaleY !== 1 || s.skewX || s.skewY || s.flipX || s.flipY) && (u = l(u, m.util.calcDimensionsMatrix(s))), u;
    }, resetObjectTransform: function(s) {
      s.scaleX = 1, s.scaleY = 1, s.skewX = 0, s.skewY = 0, s.flipX = !1, s.flipY = !1, s.rotate(0);
    }, saveObjectTransform: function(s) {
      return { scaleX: s.scaleX, scaleY: s.scaleY, skewX: s.skewX, skewY: s.skewY, angle: s.angle, left: s.left, flipX: s.flipX, flipY: s.flipY, top: s.top };
    }, isTransparent: function(s, u, l, h) {
      h > 0 && (u > h ? u -= h : u = 0, l > h ? l -= h : l = 0);
      var p, v = !0, b = s.getImageData(u, l, 2 * h || 1, 2 * h || 1), F = b.data.length;
      for (p = 3; p < F && (v = b.data[p] <= 0); p += 4)
        ;
      return b = null, v;
    }, parsePreserveAspectRatioAttribute: function(s) {
      var u, l = "meet", h = s.split(" ");
      return h && h.length && ((l = h.pop()) !== "meet" && l !== "slice" ? (u = l, l = "meet") : h.length && (u = h.pop())), { meetOrSlice: l, alignX: u !== "none" ? u.slice(1, 4) : "none", alignY: u !== "none" ? u.slice(5, 8) : "none" };
    }, clearFabricFontCache: function(s) {
      (s = (s || "").toLowerCase()) ? m.charWidthsCache[s] && delete m.charWidthsCache[s] : m.charWidthsCache = {};
    }, limitDimsByArea: function(s, u) {
      var l = Math.sqrt(u * s), h = Math.floor(u / l);
      return { x: Math.floor(l), y: h };
    }, capValue: function(s, u, l) {
      return Math.max(s, Math.min(u, l));
    }, findScaleToFit: function(s, u) {
      return Math.min(u.width / s.width, u.height / s.height);
    }, findScaleToCover: function(s, u) {
      return Math.max(u.width / s.width, u.height / s.height);
    }, matrixToSVG: function(s) {
      return "matrix(" + s.map(function(u) {
        return m.util.toFixed(u, m.Object.NUM_FRACTION_DIGITS);
      }).join(" ") + ")";
    }, removeTransformFromObject: function(s, u) {
      var l = m.util.invertTransform(u), h = m.util.multiplyTransformMatrices(l, s.calcOwnMatrix());
      m.util.applyTransformToObject(s, h);
    }, addTransformToObject: function(s, u) {
      m.util.applyTransformToObject(s, m.util.multiplyTransformMatrices(u, s.calcOwnMatrix()));
    }, applyTransformToObject: function(s, u) {
      var l = m.util.qrDecompose(u), h = new m.Point(l.translateX, l.translateY);
      s.flipX = !1, s.flipY = !1, s.set("scaleX", l.scaleX), s.set("scaleY", l.scaleY), s.skewX = l.skewX, s.skewY = l.skewY, s.angle = l.angle, s.setPositionByOrigin(h, "center", "center");
    }, sizeAfterTransform: function(s, u, l) {
      var h = s / 2, p = u / 2, v = [{ x: -h, y: -p }, { x: h, y: -p }, { x: -h, y: p }, { x: h, y: p }], b = m.util.calcDimensionsMatrix(l), F = m.util.makeBoundingBoxFromPoints(v, b);
      return { x: F.width, y: F.height };
    }, mergeClipPaths: function(s, u) {
      var l = s, h = u;
      l.inverted && !h.inverted && (l = u, h = s), m.util.applyTransformToObject(h, m.util.multiplyTransformMatrices(m.util.invertTransform(l.calcTransformMatrix()), h.calcTransformMatrix()));
      var p = l.inverted && h.inverted;
      return p && (l.inverted = h.inverted = !1), new m.Group([l], { clipPath: h, inverted: p });
    }, hasStyleChanged: function(s, u, l) {
      return l = l || !1, s.fill !== u.fill || s.stroke !== u.stroke || s.strokeWidth !== u.strokeWidth || s.fontSize !== u.fontSize || s.fontFamily !== u.fontFamily || s.fontWeight !== u.fontWeight || s.fontStyle !== u.fontStyle || s.textBackgroundColor !== u.textBackgroundColor || s.deltaY !== u.deltaY || l && (s.overline !== u.overline || s.underline !== u.underline || s.linethrough !== u.linethrough);
    }, stylesToArray: function(s, u) {
      s = m.util.object.clone(s, !0);
      for (var l = u.split(`
`), h = -1, p = {}, v = [], b = 0; b < l.length; b++)
        if (s[b])
          for (var F = 0; F < l[b].length; F++) {
            h++;
            var U = s[b][F];
            U && Object.keys(U).length > 0 && (m.util.hasStyleChanged(p, U, !0) ? v.push({ start: h, end: h + 1, style: U }) : v[v.length - 1].end++), p = U || {};
          }
        else
          h += l[b].length;
      return v;
    }, stylesFromArray: function(s, u) {
      if (!Array.isArray(s))
        return s;
      for (var l = u.split(`
`), h = -1, p = 0, v = {}, b = 0; b < l.length; b++)
        for (var F = 0; F < l[b].length; F++)
          h++, s[p] && s[p].start <= h && h < s[p].end && (v[b] = v[b] || {}, v[b][F] = Object.assign({}, s[p].style), h === s[p].end - 1 && p++);
      return v;
    } };
  }(e), function() {
    var d = Array.prototype.join, o = { m: 2, l: 2, h: 1, v: 1, c: 6, s: 4, q: 4, t: 2, a: 7 }, c = { m: "l", M: "L" };
    function g(U, k, T, H, K, P, X, W, I, L, R) {
      var G = m.util.cos(U), Y = m.util.sin(U), M = m.util.cos(k), O = m.util.sin(k), j = T * K * M - H * P * O + X, J = H * K * M + T * P * O + W;
      return ["C", L + I * (-T * K * Y - H * P * G), R + I * (-H * K * Y + T * P * G), j + I * (T * K * O + H * P * M), J + I * (H * K * O - T * P * M), j, J];
    }
    function i(U, k, T, H) {
      var K = Math.atan2(k, U), P = Math.atan2(H, T);
      return P >= K ? P - K : 2 * Math.PI - (K - P);
    }
    function n(U, k, T) {
      for (var H = T[1], K = T[2], P = T[3], X = T[4], W = T[5], I = function(G, Y, M, O, j, J, N) {
        var z = Math.PI, AA = N * z / 180, tA = m.util.sin(AA), iA = m.util.cos(AA), $ = 0, nA = 0, Z = -iA * G * 0.5 - tA * Y * 0.5, lA = -iA * Y * 0.5 + tA * G * 0.5, sA = (M = Math.abs(M)) * M, dA = (O = Math.abs(O)) * O, wA = lA * lA, qA = Z * Z, Qe = sA * dA - sA * wA - dA * qA, We = 0;
        if (Qe < 0) {
          var _A = Math.sqrt(1 - Qe / (sA * dA));
          M *= _A, O *= _A;
        } else
          We = (j === J ? -1 : 1) * Math.sqrt(Qe / (sA * wA + dA * qA));
        var ee = We * M * lA / O, ke = -We * O * Z / M, ot = iA * ee - tA * ke + 0.5 * G, Ot = tA * ee + iA * ke + 0.5 * Y, jr = i(1, 0, (Z - ee) / M, (lA - ke) / O), at = i((Z - ee) / M, (lA - ke) / O, (-Z - ee) / M, (-lA - ke) / O);
        J === 0 && at > 0 ? at -= 2 * z : J === 1 && at < 0 && (at += 2 * z);
        for (var Hs = Math.ceil(Math.abs(at / z * 2)), Ci = [], Ht = at / Hs, Rl = 8 / 3 * Math.sin(Ht / 4) * Math.sin(Ht / 4) / Math.sin(Ht / 2), Nr = jr + Ht, Dt = 0; Dt < Hs; Dt++)
          Ci[Dt] = g(jr, Nr, iA, tA, M, O, ot, Ot, Rl, $, nA), $ = Ci[Dt][5], nA = Ci[Dt][6], jr = Nr, Nr += Ht;
        return Ci;
      }(T[6] - U, T[7] - k, H, K, X, W, P), L = 0, R = I.length; L < R; L++)
        I[L][1] += U, I[L][2] += k, I[L][3] += U, I[L][4] += k, I[L][5] += U, I[L][6] += k;
      return I;
    }
    function s(U, k, T, H) {
      return Math.sqrt((T - U) * (T - U) + (H - k) * (H - k));
    }
    function u(U, k, T, H, K, P, X, W) {
      return function(I) {
        var L, R = (L = I) * L * L, G = function(O) {
          return 3 * O * O * (1 - O);
        }(I), Y = function(O) {
          return 3 * O * (1 - O) * (1 - O);
        }(I), M = function(O) {
          return (1 - O) * (1 - O) * (1 - O);
        }(I);
        return { x: X * R + K * G + T * Y + U * M, y: W * R + P * G + H * Y + k * M };
      };
    }
    function l(U, k, T, H, K, P, X, W) {
      return function(I) {
        var L = 1 - I, R = 3 * L * L * (T - U) + 6 * L * I * (K - T) + 3 * I * I * (X - K), G = 3 * L * L * (H - k) + 6 * L * I * (P - H) + 3 * I * I * (W - P);
        return Math.atan2(G, R);
      };
    }
    function h(U, k, T, H, K, P) {
      return function(X) {
        var W, I = (W = X) * W, L = function(G) {
          return 2 * G * (1 - G);
        }(X), R = function(G) {
          return (1 - G) * (1 - G);
        }(X);
        return { x: K * I + T * L + U * R, y: P * I + H * L + k * R };
      };
    }
    function p(U, k, T, H, K, P) {
      return function(X) {
        var W = 1 - X, I = 2 * W * (T - U) + 2 * X * (K - T), L = 2 * W * (H - k) + 2 * X * (P - H);
        return Math.atan2(L, I);
      };
    }
    function v(U, k, T) {
      var H, K, P = { x: k, y: T }, X = 0;
      for (K = 1; K <= 100; K += 1)
        H = U(K / 100), X += s(P.x, P.y, H.x, H.y), P = H;
      return X;
    }
    function b(U, k) {
      for (var T, H, K, P = 0, X = 0, W = U.iterator, I = { x: U.x, y: U.y }, L = 0.01, R = U.angleFinder; X < k && L > 1e-4; )
        T = W(P), K = P, (H = s(I.x, I.y, T.x, T.y)) + X > k ? (P -= L, L /= 2) : (I = T, P += L, X += H);
      return T.angle = R(K), T;
    }
    function F(U) {
      for (var k, T, H, K, P = 0, X = U.length, W = 0, I = 0, L = 0, R = 0, G = [], Y = 0; Y < X; Y++) {
        switch (H = { x: W, y: I, command: (k = U[Y])[0] }, k[0]) {
          case "M":
            H.length = 0, L = W = k[1], R = I = k[2];
            break;
          case "L":
            H.length = s(W, I, k[1], k[2]), W = k[1], I = k[2];
            break;
          case "C":
            T = u(W, I, k[1], k[2], k[3], k[4], k[5], k[6]), K = l(W, I, k[1], k[2], k[3], k[4], k[5], k[6]), H.iterator = T, H.angleFinder = K, H.length = v(T, W, I), W = k[5], I = k[6];
            break;
          case "Q":
            T = h(W, I, k[1], k[2], k[3], k[4]), K = p(W, I, k[1], k[2], k[3], k[4]), H.iterator = T, H.angleFinder = K, H.length = v(T, W, I), W = k[3], I = k[4];
            break;
          case "Z":
          case "z":
            H.destX = L, H.destY = R, H.length = s(W, I, L, R), W = L, I = R;
        }
        P += H.length, G.push(H);
      }
      return G.push({ length: P, x: W, y: I }), G;
    }
    m.util.joinPath = function(U) {
      return U.map(function(k) {
        return k.join(" ");
      }).join(" ");
    }, m.util.parsePath = function(U) {
      var k, T, H, K, P, X = [], W = [], I = m.rePathCommand, L = "[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?\\s*", R = "(" + L + ")" + m.commaWsp, G = "([01])" + m.commaWsp + "?", Y = new RegExp(R + "?" + R + "?" + R + G + G + R + "?(" + L + ")", "g");
      if (!U || !U.match)
        return X;
      for (var M, O = 0, j = (P = U.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi)).length; O < j; O++) {
        K = (k = P[O]).slice(1).trim(), W.length = 0;
        var J = k.charAt(0);
        if (M = [J], J.toLowerCase() === "a")
          for (var N; N = Y.exec(K); )
            for (var z = 1; z < N.length; z++)
              W.push(N[z]);
        else
          for (; H = I.exec(K); )
            W.push(H[0]);
        z = 0;
        for (var AA = W.length; z < AA; z++)
          T = parseFloat(W[z]), isNaN(T) || M.push(T);
        var tA = o[J.toLowerCase()], iA = c[J] || J;
        if (M.length - 1 > tA)
          for (var $ = 1, nA = M.length; $ < nA; $ += tA)
            X.push([J].concat(M.slice($, $ + tA))), J = iA;
        else
          X.push(M);
      }
      return X;
    }, m.util.makePathSimpler = function(U) {
      var k, T, H, K, P, X, W = 0, I = 0, L = U.length, R = 0, G = 0, Y = [];
      for (T = 0; T < L; ++T) {
        switch (H = !1, (k = U[T].slice(0))[0]) {
          case "l":
            k[0] = "L", k[1] += W, k[2] += I;
          case "L":
            W = k[1], I = k[2];
            break;
          case "h":
            k[1] += W;
          case "H":
            k[0] = "L", k[2] = I, W = k[1];
            break;
          case "v":
            k[1] += I;
          case "V":
            k[0] = "L", I = k[1], k[1] = W, k[2] = I;
            break;
          case "m":
            k[0] = "M", k[1] += W, k[2] += I;
          case "M":
            W = k[1], I = k[2], R = k[1], G = k[2];
            break;
          case "c":
            k[0] = "C", k[1] += W, k[2] += I, k[3] += W, k[4] += I, k[5] += W, k[6] += I;
          case "C":
            P = k[3], X = k[4], W = k[5], I = k[6];
            break;
          case "s":
            k[0] = "S", k[1] += W, k[2] += I, k[3] += W, k[4] += I;
          case "S":
            K === "C" ? (P = 2 * W - P, X = 2 * I - X) : (P = W, X = I), W = k[3], I = k[4], k[0] = "C", k[5] = k[3], k[6] = k[4], k[3] = k[1], k[4] = k[2], k[1] = P, k[2] = X, P = k[3], X = k[4];
            break;
          case "q":
            k[0] = "Q", k[1] += W, k[2] += I, k[3] += W, k[4] += I;
          case "Q":
            P = k[1], X = k[2], W = k[3], I = k[4];
            break;
          case "t":
            k[0] = "T", k[1] += W, k[2] += I;
          case "T":
            K === "Q" ? (P = 2 * W - P, X = 2 * I - X) : (P = W, X = I), k[0] = "Q", W = k[1], I = k[2], k[1] = P, k[2] = X, k[3] = W, k[4] = I;
            break;
          case "a":
            k[0] = "A", k[6] += W, k[7] += I;
          case "A":
            H = !0, Y = Y.concat(n(W, I, k)), W = k[6], I = k[7];
            break;
          case "z":
          case "Z":
            W = R, I = G;
        }
        H || Y.push(k), K = k[0];
      }
      return Y;
    }, m.util.getSmoothPathFromPoints = function(U, k) {
      var T, H = [], K = new m.Point(U[0].x, U[0].y), P = new m.Point(U[1].x, U[1].y), X = U.length, W = 1, I = 0, L = X > 2;
      for (k = k || 0, L && (W = U[2].x < P.x ? -1 : U[2].x === P.x ? 0 : 1, I = U[2].y < P.y ? -1 : U[2].y === P.y ? 0 : 1), H.push(["M", K.x - W * k, K.y - I * k]), T = 1; T < X; T++) {
        if (!K.eq(P)) {
          var R = K.midPointFrom(P);
          H.push(["Q", K.x, K.y, R.x, R.y]);
        }
        K = U[T], T + 1 < U.length && (P = U[T + 1]);
      }
      return L && (W = K.x > U[T - 2].x ? 1 : K.x === U[T - 2].x ? 0 : -1, I = K.y > U[T - 2].y ? 1 : K.y === U[T - 2].y ? 0 : -1), H.push(["L", K.x + W * k, K.y + I * k]), H;
    }, m.util.getPathSegmentsInfo = F, m.util.getBoundsOfCurve = function(U, k, T, H, K, P, X, W) {
      var I;
      if (m.cachesBoundsOfCurve && (I = d.call(arguments), m.boundsOfCurveCache[I]))
        return m.boundsOfCurveCache[I];
      var L, R, G, Y, M, O, j, J, N = Math.sqrt, z = Math.min, AA = Math.max, tA = Math.abs, iA = [], $ = [[], []];
      R = 6 * U - 12 * T + 6 * K, L = -3 * U + 9 * T - 9 * K + 3 * X, G = 3 * T - 3 * U;
      for (var nA = 0; nA < 2; ++nA)
        if (nA > 0 && (R = 6 * k - 12 * H + 6 * P, L = -3 * k + 9 * H - 9 * P + 3 * W, G = 3 * H - 3 * k), tA(L) < 1e-12) {
          if (tA(R) < 1e-12)
            continue;
          0 < (Y = -G / R) && Y < 1 && iA.push(Y);
        } else
          (j = R * R - 4 * G * L) < 0 || (0 < (M = (-R + (J = N(j))) / (2 * L)) && M < 1 && iA.push(M), 0 < (O = (-R - J) / (2 * L)) && O < 1 && iA.push(O));
      for (var Z, lA, sA, dA = iA.length, wA = dA; dA--; )
        Z = (sA = 1 - (Y = iA[dA])) * sA * sA * U + 3 * sA * sA * Y * T + 3 * sA * Y * Y * K + Y * Y * Y * X, $[0][dA] = Z, lA = sA * sA * sA * k + 3 * sA * sA * Y * H + 3 * sA * Y * Y * P + Y * Y * Y * W, $[1][dA] = lA;
      $[0][wA] = U, $[1][wA] = k, $[0][wA + 1] = X, $[1][wA + 1] = W;
      var qA = [{ x: z.apply(null, $[0]), y: z.apply(null, $[1]) }, { x: AA.apply(null, $[0]), y: AA.apply(null, $[1]) }];
      return m.cachesBoundsOfCurve && (m.boundsOfCurveCache[I] = qA), qA;
    }, m.util.getPointOnPath = function(U, k, T) {
      T || (T = F(U));
      for (var H = 0; k - T[H].length > 0 && H < T.length - 2; )
        k -= T[H].length, H++;
      var K, P = T[H], X = k / P.length, W = P.command, I = U[H];
      switch (W) {
        case "M":
          return { x: P.x, y: P.y, angle: 0 };
        case "Z":
        case "z":
          return (K = new m.Point(P.x, P.y).lerp(new m.Point(P.destX, P.destY), X)).angle = Math.atan2(P.destY - P.y, P.destX - P.x), K;
        case "L":
          return (K = new m.Point(P.x, P.y).lerp(new m.Point(I[1], I[2]), X)).angle = Math.atan2(I[2] - P.y, I[1] - P.x), K;
        case "C":
        case "Q":
          return b(P, k);
      }
    }, m.util.transformPath = function(U, k, T) {
      return T && (k = m.util.multiplyTransformMatrices(k, [1, 0, 0, 1, -T.x, -T.y])), U.map(function(H) {
        for (var K = H.slice(0), P = {}, X = 1; X < H.length - 1; X += 2)
          P.x = H[X], P.y = H[X + 1], P = m.util.transformPoint(P, k), K[X] = P.x, K[X + 1] = P.y;
        return K;
      });
    };
  }(), function() {
    var d = Array.prototype.slice;
    function o(c, g, i) {
      if (c && c.length !== 0) {
        var n = c.length - 1, s = g ? c[n][g] : c[n];
        if (g)
          for (; n--; )
            i(c[n][g], s) && (s = c[n][g]);
        else
          for (; n--; )
            i(c[n], s) && (s = c[n]);
        return s;
      }
    }
    m.util.array = { fill: function(c, g) {
      for (var i = c.length; i--; )
        c[i] = g;
      return c;
    }, invoke: function(c, g) {
      for (var i = d.call(arguments, 2), n = [], s = 0, u = c.length; s < u; s++)
        n[s] = i.length ? c[s][g].apply(c[s], i) : c[s][g].call(c[s]);
      return n;
    }, min: function(c, g) {
      return o(c, g, function(i, n) {
        return i < n;
      });
    }, max: function(c, g) {
      return o(c, g, function(i, n) {
        return i >= n;
      });
    } };
  }(), function() {
    function d(o, c, g) {
      if (g)
        if (!m.isLikelyNode && c instanceof Element)
          o = c;
        else if (c instanceof Array) {
          o = [];
          for (var i = 0, n = c.length; i < n; i++)
            o[i] = d({}, c[i], g);
        } else if (c && typeof c == "object")
          for (var s in c)
            s === "canvas" || s === "group" ? o[s] = null : c.hasOwnProperty(s) && (o[s] = d({}, c[s], g));
        else
          o = c;
      else
        for (var s in c)
          o[s] = c[s];
      return o;
    }
    m.util.object = { extend: d, clone: function(o, c) {
      return d({}, o, c);
    } }, m.util.object.extend(m.util, m.Observable);
  }(), function() {
    function d(o, c) {
      var g = o.charCodeAt(c);
      if (isNaN(g))
        return "";
      if (g < 55296 || g > 57343)
        return o.charAt(c);
      if (55296 <= g && g <= 56319) {
        if (o.length <= c + 1)
          throw "High surrogate without following low surrogate";
        var i = o.charCodeAt(c + 1);
        if (56320 > i || i > 57343)
          throw "High surrogate without following low surrogate";
        return o.charAt(c) + o.charAt(c + 1);
      }
      if (c === 0)
        throw "Low surrogate without preceding high surrogate";
      var n = o.charCodeAt(c - 1);
      if (55296 > n || n > 56319)
        throw "Low surrogate without preceding high surrogate";
      return !1;
    }
    m.util.string = { camelize: function(o) {
      return o.replace(/-+(.)?/g, function(c, g) {
        return g ? g.toUpperCase() : "";
      });
    }, capitalize: function(o, c) {
      return o.charAt(0).toUpperCase() + (c ? o.slice(1) : o.slice(1).toLowerCase());
    }, escapeXml: function(o) {
      return o.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }, graphemeSplit: function(o) {
      var c, g = 0, i = [];
      for (g = 0; g < o.length; g++)
        (c = d(o, g)) !== !1 && i.push(c);
      return i;
    } };
  }(), function() {
    var d = Array.prototype.slice, o = function() {
    }, c = function() {
      for (var s in { toString: 1 })
        if (s === "toString")
          return !1;
      return !0;
    }(), g = function(s, u, l) {
      for (var h in u)
        h in s.prototype && typeof s.prototype[h] == "function" && (u[h] + "").indexOf("callSuper") > -1 ? s.prototype[h] = /* @__PURE__ */ function(p) {
          return function() {
            var v = this.constructor.superclass;
            this.constructor.superclass = l;
            var b = u[p].apply(this, arguments);
            if (this.constructor.superclass = v, p !== "initialize")
              return b;
          };
        }(h) : s.prototype[h] = u[h], c && (u.toString !== Object.prototype.toString && (s.prototype.toString = u.toString), u.valueOf !== Object.prototype.valueOf && (s.prototype.valueOf = u.valueOf));
    };
    function i() {
    }
    function n(s) {
      for (var u = null, l = this; l.constructor.superclass; ) {
        var h = l.constructor.superclass.prototype[s];
        if (l[s] !== h) {
          u = h;
          break;
        }
        l = l.constructor.superclass.prototype;
      }
      return u ? arguments.length > 1 ? u.apply(this, d.call(arguments, 1)) : u.call(this) : console.log("tried to callSuper " + s + ", method not found in prototype chain", this);
    }
    m.util.createClass = function() {
      var s = null, u = d.call(arguments, 0);
      function l() {
        this.initialize.apply(this, arguments);
      }
      typeof u[0] == "function" && (s = u.shift()), l.superclass = s, l.subclasses = [], s && (i.prototype = s.prototype, l.prototype = new i(), s.subclasses.push(l));
      for (var h = 0, p = u.length; h < p; h++)
        g(l, u[h], s);
      return l.prototype.initialize || (l.prototype.initialize = o), l.prototype.constructor = l, l.prototype.callSuper = n, l;
    };
  }(), A = !!m.document.createElement("div").attachEvent, t = ["touchstart", "touchmove", "touchend"], m.util.addListener = function(d, o, c, g) {
    d && d.addEventListener(o, c, !A && g);
  }, m.util.removeListener = function(d, o, c, g) {
    d && d.removeEventListener(o, c, !A && g);
  }, m.util.getPointer = function(d) {
    var o = d.target, c = m.util.getScrollLeftTop(o), g = function(i) {
      var n = i.changedTouches;
      return n && n[0] ? n[0] : i;
    }(d);
    return { x: g.clientX + c.left, y: g.clientY + c.top };
  }, m.util.isTouchEvent = function(d) {
    return t.indexOf(d.type) > -1 || d.pointerType === "touch";
  }, r = m.document.createElement("div"), a = typeof r.style.opacity == "string", f = typeof r.style.filter == "string", B = /alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/, w = function(d) {
    return d;
  }, a ? w = function(d, o) {
    return d.style.opacity = o, d;
  } : f && (w = function(d, o) {
    var c = d.style;
    return d.currentStyle && !d.currentStyle.hasLayout && (c.zoom = 1), B.test(c.filter) ? (o = o >= 0.9999 ? "" : "alpha(opacity=" + 100 * o + ")", c.filter = c.filter.replace(B, o)) : c.filter += " alpha(opacity=" + 100 * o + ")", d;
  }), m.util.setStyle = function(d, o) {
    var c = d.style;
    if (!c)
      return d;
    if (typeof o == "string")
      return d.style.cssText += ";" + o, o.indexOf("opacity") > -1 ? w(d, o.match(/opacity:\s*(\d?\.?\d*)/)[1]) : d;
    for (var g in o)
      if (g === "opacity")
        w(d, o[g]);
      else {
        var i = g === "float" || g === "cssFloat" ? c.styleFloat === void 0 ? "cssFloat" : "styleFloat" : g;
        c.setProperty(i, o[g]);
      }
    return d;
  }, function() {
    var d = Array.prototype.slice, o, c, g, i, n = function(l) {
      return d.call(l, 0);
    };
    try {
      o = n(m.document.childNodes) instanceof Array;
    } catch {
    }
    function s(l, h) {
      var p = m.document.createElement(l);
      for (var v in h)
        v === "class" ? p.className = h[v] : v === "for" ? p.htmlFor = h[v] : p.setAttribute(v, h[v]);
      return p;
    }
    function u(l) {
      for (var h = 0, p = 0, v = m.document.documentElement, b = m.document.body || { scrollLeft: 0, scrollTop: 0 }; l && (l.parentNode || l.host) && ((l = l.parentNode || l.host) === m.document ? (h = b.scrollLeft || v.scrollLeft || 0, p = b.scrollTop || v.scrollTop || 0) : (h += l.scrollLeft || 0, p += l.scrollTop || 0), l.nodeType !== 1 || l.style.position !== "fixed"); )
        ;
      return { left: h, top: p };
    }
    o || (n = function(l) {
      for (var h = new Array(l.length), p = l.length; p--; )
        h[p] = l[p];
      return h;
    }), c = m.document.defaultView && m.document.defaultView.getComputedStyle ? function(l, h) {
      var p = m.document.defaultView.getComputedStyle(l, null);
      return p ? p[h] : void 0;
    } : function(l, h) {
      var p = l.style[h];
      return !p && l.currentStyle && (p = l.currentStyle[h]), p;
    }, g = m.document.documentElement.style, i = "userSelect" in g ? "userSelect" : "MozUserSelect" in g ? "MozUserSelect" : "WebkitUserSelect" in g ? "WebkitUserSelect" : "KhtmlUserSelect" in g ? "KhtmlUserSelect" : "", m.util.makeElementUnselectable = function(l) {
      return l.onselectstart !== void 0 && (l.onselectstart = m.util.falseFunction), i ? l.style[i] = "none" : typeof l.unselectable == "string" && (l.unselectable = "on"), l;
    }, m.util.makeElementSelectable = function(l) {
      return l.onselectstart !== void 0 && (l.onselectstart = null), i ? l.style[i] = "" : typeof l.unselectable == "string" && (l.unselectable = ""), l;
    }, m.util.setImageSmoothing = function(l, h) {
      l.imageSmoothingEnabled = l.imageSmoothingEnabled || l.webkitImageSmoothingEnabled || l.mozImageSmoothingEnabled || l.msImageSmoothingEnabled || l.oImageSmoothingEnabled, l.imageSmoothingEnabled = h;
    }, m.util.getById = function(l) {
      return typeof l == "string" ? m.document.getElementById(l) : l;
    }, m.util.toArray = n, m.util.addClass = function(l, h) {
      l && (" " + l.className + " ").indexOf(" " + h + " ") === -1 && (l.className += (l.className ? " " : "") + h);
    }, m.util.makeElement = s, m.util.wrapElement = function(l, h, p) {
      return typeof h == "string" && (h = s(h, p)), l.parentNode && l.parentNode.replaceChild(h, l), h.appendChild(l), h;
    }, m.util.getScrollLeftTop = u, m.util.getElementOffset = function(l) {
      var h, p, v = l && l.ownerDocument, b = { left: 0, top: 0 }, F = { left: 0, top: 0 }, U = { borderLeftWidth: "left", borderTopWidth: "top", paddingLeft: "left", paddingTop: "top" };
      if (!v)
        return F;
      for (var k in U)
        F[U[k]] += parseInt(c(l, k), 10) || 0;
      return h = v.documentElement, l.getBoundingClientRect !== void 0 && (b = l.getBoundingClientRect()), p = u(l), { left: b.left + p.left - (h.clientLeft || 0) + F.left, top: b.top + p.top - (h.clientTop || 0) + F.top };
    }, m.util.getNodeCanvas = function(l) {
      var h = m.jsdomImplForWrapper(l);
      return h._canvas || h._image;
    }, m.util.cleanUpJsdomNode = function(l) {
      if (m.isLikelyNode) {
        var h = m.jsdomImplForWrapper(l);
        h && (h._image = null, h._canvas = null, h._currentSrc = null, h._attributes = null, h._classList = null);
      }
    };
  }(), function() {
    function d() {
    }
    m.util.request = function(o, c) {
      c || (c = {});
      var g = c.method ? c.method.toUpperCase() : "GET", i = c.onComplete || function() {
      }, n = new m.window.XMLHttpRequest(), s = c.body || c.parameters;
      return n.onreadystatechange = function() {
        n.readyState === 4 && (i(n), n.onreadystatechange = d);
      }, g === "GET" && (s = null, typeof c.parameters == "string" && (o = function(u, l) {
        return u + (/\?/.test(u) ? "&" : "?") + l;
      }(o, c.parameters))), n.open(g, o, !0), g !== "POST" && g !== "PUT" || n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.send(s), n;
    };
  }(), m.log = console.log, m.warn = console.warn, function() {
    var d = m.util.object.extend, o = m.util.object.clone, c = [];
    function g() {
      return !1;
    }
    function i(l, h, p, v) {
      return -p * Math.cos(l / v * (Math.PI / 2)) + p + h;
    }
    m.util.object.extend(c, { cancelAll: function() {
      var l = this.splice(0);
      return l.forEach(function(h) {
        h.cancel();
      }), l;
    }, cancelByCanvas: function(l) {
      if (!l)
        return [];
      var h = this.filter(function(p) {
        return typeof p.target == "object" && p.target.canvas === l;
      });
      return h.forEach(function(p) {
        p.cancel();
      }), h;
    }, cancelByTarget: function(l) {
      var h = this.findAnimationsByTarget(l);
      return h.forEach(function(p) {
        p.cancel();
      }), h;
    }, findAnimationIndex: function(l) {
      return this.indexOf(this.findAnimation(l));
    }, findAnimation: function(l) {
      return this.find(function(h) {
        return h.cancel === l;
      });
    }, findAnimationsByTarget: function(l) {
      return l ? this.filter(function(h) {
        return h.target === l;
      }) : [];
    } });
    var n = m.window.requestAnimationFrame || m.window.webkitRequestAnimationFrame || m.window.mozRequestAnimationFrame || m.window.oRequestAnimationFrame || m.window.msRequestAnimationFrame || function(l) {
      return m.window.setTimeout(l, 1e3 / 60);
    }, s = m.window.cancelAnimationFrame || m.window.clearTimeout;
    function u() {
      return n.apply(m.window, arguments);
    }
    m.util.animate = function(l) {
      l || (l = {});
      var h, p = !1, v = function() {
        var b = m.runningAnimations.indexOf(h);
        return b > -1 && m.runningAnimations.splice(b, 1)[0];
      };
      return h = d(o(l), { cancel: function() {
        return p = !0, v();
      }, currentValue: "startValue" in l ? l.startValue : 0, completionRate: 0, durationRate: 0 }), m.runningAnimations.push(h), u(function(b) {
        var F, U = b || +/* @__PURE__ */ new Date(), k = l.duration || 500, T = U + k, H = l.onChange || g, K = l.abort || g, P = l.onComplete || g, X = l.easing || i, W = "startValue" in l && l.startValue.length > 0, I = "startValue" in l ? l.startValue : 0, L = "endValue" in l ? l.endValue : 100, R = l.byValue || (W ? I.map(function(G, Y) {
          return L[Y] - I[Y];
        }) : L - I);
        l.onStart && l.onStart(), function G(Y) {
          var M = (F = Y || +/* @__PURE__ */ new Date()) > T ? k : F - U, O = M / k, j = W ? I.map(function(N, z) {
            return X(M, I[z], R[z], k);
          }) : X(M, I, R, k), J = Math.abs(W ? (j[0] - I[0]) / R[0] : (j - I) / R);
          if (h.currentValue = W ? j.slice() : j, h.completionRate = J, h.durationRate = O, !p) {
            if (!K(j, J, O))
              return F > T ? (h.currentValue = W ? L.slice() : L, h.completionRate = 1, h.durationRate = 1, H(W ? L.slice() : L, 1, 1), P(L, 1, 1), void v()) : (H(j, J, O), void u(G));
            v();
          }
        }(U);
      }), h.cancel;
    }, m.util.requestAnimFrame = u, m.util.cancelAnimFrame = function() {
      return s.apply(m.window, arguments);
    }, m.runningAnimations = c;
  }(), function() {
    function d(o, c, g) {
      var i = "rgba(" + parseInt(o[0] + g * (c[0] - o[0]), 10) + "," + parseInt(o[1] + g * (c[1] - o[1]), 10) + "," + parseInt(o[2] + g * (c[2] - o[2]), 10);
      return i += "," + (o && c ? parseFloat(o[3] + g * (c[3] - o[3])) : 1), i += ")";
    }
    m.util.animateColor = function(o, c, g, i) {
      var n = new m.Color(o).getSource(), s = new m.Color(c).getSource(), u = i.onComplete, l = i.onChange;
      return i = i || {}, m.util.animate(m.util.object.extend(i, { duration: g || 500, startValue: n, endValue: s, byValue: s, easing: function(h, p, v, b) {
        return d(p, v, i.colorEasing ? i.colorEasing(h, b) : 1 - Math.cos(h / b * (Math.PI / 2)));
      }, onComplete: function(h, p, v) {
        if (u)
          return u(d(s, s, 0), p, v);
      }, onChange: function(h, p, v) {
        if (l) {
          if (Array.isArray(h))
            return l(d(h, h, 0), p, v);
          l(h, p, v);
        }
      } }));
    };
  }(), function() {
    function d(i, n, s, u) {
      return i < Math.abs(n) ? (i = n, u = s / 4) : u = n === 0 && i === 0 ? s / (2 * Math.PI) * Math.asin(1) : s / (2 * Math.PI) * Math.asin(n / i), { a: i, c: n, p: s, s: u };
    }
    function o(i, n, s) {
      return i.a * Math.pow(2, 10 * (n -= 1)) * Math.sin((n * s - i.s) * (2 * Math.PI) / i.p);
    }
    function c(i, n, s, u) {
      return s - g(u - i, 0, s, u) + n;
    }
    function g(i, n, s, u) {
      return (i /= u) < 1 / 2.75 ? s * (7.5625 * i * i) + n : i < 2 / 2.75 ? s * (7.5625 * (i -= 1.5 / 2.75) * i + 0.75) + n : i < 2.5 / 2.75 ? s * (7.5625 * (i -= 2.25 / 2.75) * i + 0.9375) + n : s * (7.5625 * (i -= 2.625 / 2.75) * i + 0.984375) + n;
    }
    m.util.ease = { easeInQuad: function(i, n, s, u) {
      return s * (i /= u) * i + n;
    }, easeOutQuad: function(i, n, s, u) {
      return -s * (i /= u) * (i - 2) + n;
    }, easeInOutQuad: function(i, n, s, u) {
      return (i /= u / 2) < 1 ? s / 2 * i * i + n : -s / 2 * (--i * (i - 2) - 1) + n;
    }, easeInCubic: function(i, n, s, u) {
      return s * (i /= u) * i * i + n;
    }, easeOutCubic: function(i, n, s, u) {
      return s * ((i = i / u - 1) * i * i + 1) + n;
    }, easeInOutCubic: function(i, n, s, u) {
      return (i /= u / 2) < 1 ? s / 2 * i * i * i + n : s / 2 * ((i -= 2) * i * i + 2) + n;
    }, easeInQuart: function(i, n, s, u) {
      return s * (i /= u) * i * i * i + n;
    }, easeOutQuart: function(i, n, s, u) {
      return -s * ((i = i / u - 1) * i * i * i - 1) + n;
    }, easeInOutQuart: function(i, n, s, u) {
      return (i /= u / 2) < 1 ? s / 2 * i * i * i * i + n : -s / 2 * ((i -= 2) * i * i * i - 2) + n;
    }, easeInQuint: function(i, n, s, u) {
      return s * (i /= u) * i * i * i * i + n;
    }, easeOutQuint: function(i, n, s, u) {
      return s * ((i = i / u - 1) * i * i * i * i + 1) + n;
    }, easeInOutQuint: function(i, n, s, u) {
      return (i /= u / 2) < 1 ? s / 2 * i * i * i * i * i + n : s / 2 * ((i -= 2) * i * i * i * i + 2) + n;
    }, easeInSine: function(i, n, s, u) {
      return -s * Math.cos(i / u * (Math.PI / 2)) + s + n;
    }, easeOutSine: function(i, n, s, u) {
      return s * Math.sin(i / u * (Math.PI / 2)) + n;
    }, easeInOutSine: function(i, n, s, u) {
      return -s / 2 * (Math.cos(Math.PI * i / u) - 1) + n;
    }, easeInExpo: function(i, n, s, u) {
      return i === 0 ? n : s * Math.pow(2, 10 * (i / u - 1)) + n;
    }, easeOutExpo: function(i, n, s, u) {
      return i === u ? n + s : s * (1 - Math.pow(2, -10 * i / u)) + n;
    }, easeInOutExpo: function(i, n, s, u) {
      return i === 0 ? n : i === u ? n + s : (i /= u / 2) < 1 ? s / 2 * Math.pow(2, 10 * (i - 1)) + n : s / 2 * (2 - Math.pow(2, -10 * --i)) + n;
    }, easeInCirc: function(i, n, s, u) {
      return -s * (Math.sqrt(1 - (i /= u) * i) - 1) + n;
    }, easeOutCirc: function(i, n, s, u) {
      return s * Math.sqrt(1 - (i = i / u - 1) * i) + n;
    }, easeInOutCirc: function(i, n, s, u) {
      return (i /= u / 2) < 1 ? -s / 2 * (Math.sqrt(1 - i * i) - 1) + n : s / 2 * (Math.sqrt(1 - (i -= 2) * i) + 1) + n;
    }, easeInElastic: function(i, n, s, u) {
      var l = 0;
      return i === 0 ? n : (i /= u) === 1 ? n + s : (l || (l = 0.3 * u), -o(d(s, s, l, 1.70158), i, u) + n);
    }, easeOutElastic: function(i, n, s, u) {
      var l = 0;
      if (i === 0)
        return n;
      if ((i /= u) === 1)
        return n + s;
      l || (l = 0.3 * u);
      var h = d(s, s, l, 1.70158);
      return h.a * Math.pow(2, -10 * i) * Math.sin((i * u - h.s) * (2 * Math.PI) / h.p) + h.c + n;
    }, easeInOutElastic: function(i, n, s, u) {
      var l = 0;
      if (i === 0)
        return n;
      if ((i /= u / 2) === 2)
        return n + s;
      l || (l = u * (0.3 * 1.5));
      var h = d(s, s, l, 1.70158);
      return i < 1 ? -0.5 * o(h, i, u) + n : h.a * Math.pow(2, -10 * (i -= 1)) * Math.sin((i * u - h.s) * (2 * Math.PI) / h.p) * 0.5 + h.c + n;
    }, easeInBack: function(i, n, s, u, l) {
      return l === void 0 && (l = 1.70158), s * (i /= u) * i * ((l + 1) * i - l) + n;
    }, easeOutBack: function(i, n, s, u, l) {
      return l === void 0 && (l = 1.70158), s * ((i = i / u - 1) * i * ((l + 1) * i + l) + 1) + n;
    }, easeInOutBack: function(i, n, s, u, l) {
      return l === void 0 && (l = 1.70158), (i /= u / 2) < 1 ? s / 2 * (i * i * ((1 + (l *= 1.525)) * i - l)) + n : s / 2 * ((i -= 2) * i * ((1 + (l *= 1.525)) * i + l) + 2) + n;
    }, easeInBounce: c, easeOutBounce: g, easeInOutBounce: function(i, n, s, u) {
      return i < u / 2 ? 0.5 * c(2 * i, 0, s, u) + n : 0.5 * g(2 * i - u, 0, s, u) + 0.5 * s + n;
    } };
  }(), function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.util.object.extend, g = o.util.object.clone, i = o.util.toFixed, n = o.util.parseUnit, s = o.util.multiplyTransformMatrices, u = { cx: "left", x: "left", r: "radius", cy: "top", y: "top", display: "visible", visibility: "visible", transform: "transformMatrix", "fill-opacity": "fillOpacity", "fill-rule": "fillRule", "font-family": "fontFamily", "font-size": "fontSize", "font-style": "fontStyle", "font-weight": "fontWeight", "letter-spacing": "charSpacing", "paint-order": "paintFirst", "stroke-dasharray": "strokeDashArray", "stroke-dashoffset": "strokeDashOffset", "stroke-linecap": "strokeLineCap", "stroke-linejoin": "strokeLineJoin", "stroke-miterlimit": "strokeMiterLimit", "stroke-opacity": "strokeOpacity", "stroke-width": "strokeWidth", "text-decoration": "textDecoration", "text-anchor": "textAnchor", opacity: "opacity", "clip-path": "clipPath", "clip-rule": "clipRule", "vector-effect": "strokeUniform", "image-rendering": "imageSmoothing" }, l = { stroke: "strokeOpacity", fill: "fillOpacity" }, h = "font-size", p = "clip-path";
    function v(I) {
      return I in u ? u[I] : I;
    }
    function b(I, L, R, G) {
      var Y, M = Array.isArray(L);
      if (I !== "fill" && I !== "stroke" || L !== "none") {
        if (I === "strokeUniform")
          return L === "non-scaling-stroke";
        if (I === "strokeDashArray")
          L = L === "none" ? null : L.replace(/,/g, " ").split(/\s+/).map(parseFloat);
        else if (I === "transformMatrix")
          L = R && R.transformMatrix ? s(R.transformMatrix, o.parseTransformAttribute(L)) : o.parseTransformAttribute(L);
        else if (I === "visible")
          L = L !== "none" && L !== "hidden", R && R.visible === !1 && (L = !1);
        else if (I === "opacity")
          L = parseFloat(L), R && R.opacity !== void 0 && (L *= R.opacity);
        else if (I === "textAnchor")
          L = L === "start" ? "left" : L === "end" ? "right" : "center";
        else if (I === "charSpacing")
          Y = n(L, G) / G * 1e3;
        else if (I === "paintFirst") {
          var O = L.indexOf("fill"), j = L.indexOf("stroke");
          L = "fill", (O > -1 && j > -1 && j < O || O === -1 && j > -1) && (L = "stroke");
        } else {
          if (I === "href" || I === "xlink:href" || I === "font")
            return L;
          if (I === "imageSmoothing")
            return L === "optimizeQuality";
          Y = M ? L.map(n) : n(L, G);
        }
      } else
        L = "";
      return !M && isNaN(Y) ? L : Y;
    }
    function F(I) {
      return new RegExp("^(" + I.join("|") + ")\\b", "i");
    }
    function U(I, L) {
      var R, G, Y, M, O = [];
      for (Y = 0, M = L.length; Y < M; Y++)
        R = L[Y], G = I.getElementsByTagName(R), O = O.concat(Array.prototype.slice.call(G));
      return O;
    }
    function k(I, L) {
      var R, G = !0;
      return (R = T(I, L.pop())) && L.length && (G = function(Y, M) {
        for (var O, j = !0; Y.parentNode && Y.parentNode.nodeType === 1 && M.length; )
          j && (O = M.pop()), j = T(Y = Y.parentNode, O);
        return M.length === 0;
      }(I, L)), R && G && L.length === 0;
    }
    function T(I, L) {
      var R, G, Y = I.nodeName, M = I.getAttribute("class"), O = I.getAttribute("id");
      if (R = new RegExp("^" + Y, "i"), L = L.replace(R, ""), O && L.length && (R = new RegExp("#" + O + "(?![a-zA-Z\\-]+)", "i"), L = L.replace(R, "")), M && L.length)
        for (G = (M = M.split(" ")).length; G--; )
          R = new RegExp("\\." + M[G] + "(?![a-zA-Z\\-]+)", "i"), L = L.replace(R, "");
      return L.length === 0;
    }
    function H(I, L) {
      var R;
      if (I.getElementById && (R = I.getElementById(L)), R)
        return R;
      var G, Y, M, O = I.getElementsByTagName("*");
      for (Y = 0, M = O.length; Y < M; Y++)
        if (L === (G = O[Y]).getAttribute("id"))
          return G;
    }
    o.svgValidTagNamesRegEx = F(["path", "circle", "polygon", "polyline", "ellipse", "rect", "line", "image", "text"]), o.svgViewBoxElementsRegEx = F(["symbol", "image", "marker", "pattern", "view", "svg"]), o.svgInvalidAncestorsRegEx = F(["pattern", "defs", "symbol", "metadata", "clipPath", "mask", "desc"]), o.svgValidParentsRegEx = F(["symbol", "g", "a", "svg", "clipPath", "defs"]), o.cssRules = {}, o.gradientDefs = {}, o.clipPaths = {}, o.parseTransformAttribute = function() {
      function I(j, J, N) {
        j[N] = Math.tan(o.util.degreesToRadians(J[0]));
      }
      var L = o.iMatrix, R = o.reNum, G = o.commaWsp, Y = "(?:" + ("(?:(matrix)\\s*\\(\\s*(" + R + ")" + G + "(" + R + ")" + G + "(" + R + ")" + G + "(" + R + ")" + G + "(" + R + ")" + G + "(" + R + ")\\s*\\))") + "|" + ("(?:(translate)\\s*\\(\\s*(" + R + ")(?:" + G + "(" + R + "))?\\s*\\))") + "|" + ("(?:(scale)\\s*\\(\\s*(" + R + ")(?:" + G + "(" + R + "))?\\s*\\))") + "|" + ("(?:(rotate)\\s*\\(\\s*(" + R + ")(?:" + G + "(" + R + ")" + G + "(" + R + "))?\\s*\\))") + "|" + ("(?:(skewX)\\s*\\(\\s*(" + R + ")\\s*\\))") + "|" + ("(?:(skewY)\\s*\\(\\s*(" + R + ")\\s*\\))") + ")", M = new RegExp("^\\s*(?:" + ("(?:" + Y + "(?:" + G + "*" + Y + ")*)") + "?)\\s*$"), O = new RegExp(Y, "g");
      return function(j) {
        var J = L.concat(), N = [];
        if (!j || j && !M.test(j))
          return J;
        j.replace(O, function(AA) {
          var tA = new RegExp(Y).exec(AA).filter(function(nA) {
            return !!nA;
          }), iA = tA[1], $ = tA.slice(2).map(parseFloat);
          switch (iA) {
            case "translate":
              (function(nA, Z) {
                nA[4] = Z[0], Z.length === 2 && (nA[5] = Z[1]);
              })(J, $);
              break;
            case "rotate":
              $[0] = o.util.degreesToRadians($[0]), function(nA, Z) {
                var lA = o.util.cos(Z[0]), sA = o.util.sin(Z[0]), dA = 0, wA = 0;
                Z.length === 3 && (dA = Z[1], wA = Z[2]), nA[0] = lA, nA[1] = sA, nA[2] = -sA, nA[3] = lA, nA[4] = dA - (lA * dA - sA * wA), nA[5] = wA - (sA * dA + lA * wA);
              }(J, $);
              break;
            case "scale":
              (function(nA, Z) {
                var lA = Z[0], sA = Z.length === 2 ? Z[1] : Z[0];
                nA[0] = lA, nA[3] = sA;
              })(J, $);
              break;
            case "skewX":
              I(J, $, 2);
              break;
            case "skewY":
              I(J, $, 1);
              break;
            case "matrix":
              J = $;
          }
          N.push(J.concat()), J = L.concat();
        });
        for (var z = N[0]; N.length > 1; )
          N.shift(), z = o.util.multiplyTransformMatrices(z, N[0]);
        return z;
      };
    }();
    var K = new RegExp("^\\s*(" + o.reNum + "+)\\s*,?\\s*(" + o.reNum + "+)\\s*,?\\s*(" + o.reNum + "+)\\s*,?\\s*(" + o.reNum + "+)\\s*$");
    function P(I) {
      if (!o.svgViewBoxElementsRegEx.test(I.nodeName))
        return {};
      var L, R, G, Y, M, O, j = I.getAttribute("viewBox"), J = 1, N = 1, z = I.getAttribute("width"), AA = I.getAttribute("height"), tA = I.getAttribute("x") || 0, iA = I.getAttribute("y") || 0, $ = I.getAttribute("preserveAspectRatio") || "", nA = !j || !(j = j.match(K)), Z = !z || !AA || z === "100%" || AA === "100%", lA = nA && Z, sA = {}, dA = "", wA = 0, qA = 0;
      if (sA.width = 0, sA.height = 0, sA.toBeParsed = lA, nA && (tA || iA) && I.parentNode && I.parentNode.nodeName !== "#document" && (dA = " translate(" + n(tA) + " " + n(iA) + ") ", M = (I.getAttribute("transform") || "") + dA, I.setAttribute("transform", M), I.removeAttribute("x"), I.removeAttribute("y")), lA)
        return sA;
      if (nA)
        return sA.width = n(z), sA.height = n(AA), sA;
      if (L = -parseFloat(j[1]), R = -parseFloat(j[2]), G = parseFloat(j[3]), Y = parseFloat(j[4]), sA.minX = L, sA.minY = R, sA.viewBoxWidth = G, sA.viewBoxHeight = Y, Z ? (sA.width = G, sA.height = Y) : (sA.width = n(z), sA.height = n(AA), J = sA.width / G, N = sA.height / Y), ($ = o.util.parsePreserveAspectRatioAttribute($)).alignX !== "none" && ($.meetOrSlice === "meet" && (N = J = J > N ? N : J), $.meetOrSlice === "slice" && (N = J = J > N ? J : N), wA = sA.width - G * J, qA = sA.height - Y * J, $.alignX === "Mid" && (wA /= 2), $.alignY === "Mid" && (qA /= 2), $.alignX === "Min" && (wA = 0), $.alignY === "Min" && (qA = 0)), J === 1 && N === 1 && L === 0 && R === 0 && tA === 0 && iA === 0)
        return sA;
      if ((tA || iA) && I.parentNode.nodeName !== "#document" && (dA = " translate(" + n(tA) + " " + n(iA) + ") "), M = dA + " matrix(" + J + " 0 0 " + N + " " + (L * J + wA) + " " + (R * N + qA) + ") ", I.nodeName === "svg") {
        for (O = I.ownerDocument.createElementNS(o.svgNS, "g"); I.firstChild; )
          O.appendChild(I.firstChild);
        I.appendChild(O);
      } else
        (O = I).removeAttribute("x"), O.removeAttribute("y"), M = O.getAttribute("transform") + M;
      return O.setAttribute("transform", M), sA;
    }
    function X(I, L) {
      var R = "xlink:href", G = H(I, L.getAttribute(R).slice(1));
      if (G && G.getAttribute(R) && X(I, G), ["gradientTransform", "x1", "x2", "y1", "y2", "gradientUnits", "cx", "cy", "r", "fx", "fy"].forEach(function(M) {
        G && !L.hasAttribute(M) && G.hasAttribute(M) && L.setAttribute(M, G.getAttribute(M));
      }), !L.children.length)
        for (var Y = G.cloneNode(!0); Y.firstChild; )
          L.appendChild(Y.firstChild);
      L.removeAttribute(R);
    }
    o.parseSVGDocument = function(I, L, R, G) {
      if (I) {
        (function(tA) {
          for (var iA = U(tA, ["use", "svg:use"]), $ = 0; iA.length && $ < iA.length; ) {
            var nA = iA[$], Z = nA.getAttribute("xlink:href") || nA.getAttribute("href");
            if (Z === null)
              return;
            var lA, sA, dA, wA, qA = Z.slice(1), Qe = nA.getAttribute("x") || 0, We = nA.getAttribute("y") || 0, _A = H(tA, qA).cloneNode(!0), ee = (_A.getAttribute("transform") || "") + " translate(" + Qe + ", " + We + ")", ke = iA.length, ot = o.svgNS;
            if (P(_A), /^svg$/i.test(_A.nodeName)) {
              var Ot = _A.ownerDocument.createElementNS(ot, "g");
              for (sA = 0, wA = (dA = _A.attributes).length; sA < wA; sA++)
                lA = dA.item(sA), Ot.setAttributeNS(ot, lA.nodeName, lA.nodeValue);
              for (; _A.firstChild; )
                Ot.appendChild(_A.firstChild);
              _A = Ot;
            }
            for (sA = 0, wA = (dA = nA.attributes).length; sA < wA; sA++)
              (lA = dA.item(sA)).nodeName !== "x" && lA.nodeName !== "y" && lA.nodeName !== "xlink:href" && lA.nodeName !== "href" && (lA.nodeName === "transform" ? ee = lA.nodeValue + " " + ee : _A.setAttribute(lA.nodeName, lA.nodeValue));
            _A.setAttribute("transform", ee), _A.setAttribute("instantiated_by_use", "1"), _A.removeAttribute("id"), nA.parentNode.replaceChild(_A, nA), iA.length === ke && $++;
          }
        })(I);
        var Y, M, O = o.Object.__uid++, j = P(I), J = o.util.toArray(I.getElementsByTagName("*"));
        if (j.crossOrigin = G && G.crossOrigin, j.svgUid = O, J.length === 0 && o.isLikelyNode) {
          var N = [];
          for (Y = 0, M = (J = I.selectNodes('//*[name(.)!="svg"]')).length; Y < M; Y++)
            N[Y] = J[Y];
          J = N;
        }
        var z = J.filter(function(tA) {
          return P(tA), o.svgValidTagNamesRegEx.test(tA.nodeName.replace("svg:", "")) && !function(iA, $) {
            for (; iA && (iA = iA.parentNode); )
              if (iA.nodeName && $.test(iA.nodeName.replace("svg:", "")) && !iA.getAttribute("instantiated_by_use"))
                return !0;
            return !1;
          }(tA, o.svgInvalidAncestorsRegEx);
        });
        if (!z || z && !z.length)
          L && L([], {});
        else {
          var AA = {};
          J.filter(function(tA) {
            return tA.nodeName.replace("svg:", "") === "clipPath";
          }).forEach(function(tA) {
            var iA = tA.getAttribute("id");
            AA[iA] = o.util.toArray(tA.getElementsByTagName("*")).filter(function($) {
              return o.svgValidTagNamesRegEx.test($.nodeName.replace("svg:", ""));
            });
          }), o.gradientDefs[O] = o.getGradientDefs(I), o.cssRules[O] = o.getCSSRules(I), o.clipPaths[O] = AA, o.parseElements(z, function(tA, iA) {
            L && (L(tA, j, iA, J), delete o.gradientDefs[O], delete o.cssRules[O], delete o.clipPaths[O]);
          }, g(j), R, G);
        }
      }
    };
    var W = new RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(" + o.reNum + "(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|" + o.reNum + "))?\\s+(.*)");
    c(o, { parseFontDeclaration: function(I, L) {
      var R = I.match(W);
      if (R) {
        var G = R[1], Y = R[3], M = R[4], O = R[5], j = R[6];
        G && (L.fontStyle = G), Y && (L.fontWeight = isNaN(parseFloat(Y)) ? Y : parseFloat(Y)), M && (L.fontSize = n(M)), j && (L.fontFamily = j), O && (L.lineHeight = O === "normal" ? 1 : O);
      }
    }, getGradientDefs: function(I) {
      var L, R = U(I, ["linearGradient", "radialGradient", "svg:linearGradient", "svg:radialGradient"]), G = 0, Y = {};
      for (G = R.length; G--; )
        (L = R[G]).getAttribute("xlink:href") && X(I, L), Y[L.getAttribute("id")] = L;
      return Y;
    }, parseAttributes: function(I, L, R) {
      if (I) {
        var G, Y, M, O = {};
        R === void 0 && (R = I.getAttribute("svgUid")), I.parentNode && o.svgValidParentsRegEx.test(I.parentNode.nodeName) && (O = o.parseAttributes(I.parentNode, L, R));
        var j = L.reduce(function($, nA) {
          return (G = I.getAttribute(nA)) && ($[nA] = G), $;
        }, {}), J = c(function($, nA) {
          var Z = {};
          for (var lA in o.cssRules[nA])
            if (k($, lA.split(" ")))
              for (var sA in o.cssRules[nA][lA])
                Z[sA] = o.cssRules[nA][lA][sA];
          return Z;
        }(I, R), o.parseStyleAttribute(I));
        j = c(j, J), J[p] && I.setAttribute(p, J[p]), Y = M = O.fontSize || o.Text.DEFAULT_SVG_FONT_SIZE, j[h] && (j[h] = Y = n(j[h], M));
        var N, z, AA = {};
        for (var tA in j)
          z = b(N = v(tA), j[tA], O, Y), AA[N] = z;
        AA && AA.font && o.parseFontDeclaration(AA.font, AA);
        var iA = c(O, AA);
        return o.svgValidParentsRegEx.test(I.nodeName) ? iA : function($) {
          for (var nA in l)
            if ($[l[nA]] !== void 0 && $[nA] !== "") {
              if ($[nA] === void 0) {
                if (!o.Object.prototype[nA])
                  continue;
                $[nA] = o.Object.prototype[nA];
              }
              if ($[nA].indexOf("url(") !== 0) {
                var Z = new o.Color($[nA]);
                $[nA] = Z.setAlpha(i(Z.getAlpha() * $[l[nA]], 2)).toRgba();
              }
            }
          return $;
        }(iA);
      }
    }, parseElements: function(I, L, R, G, Y) {
      new o.ElementsParser(I, L, R, G, Y).parse();
    }, parseStyleAttribute: function(I) {
      var L = {}, R = I.getAttribute("style");
      return R && (typeof R == "string" ? function(G, Y) {
        var M, O;
        G.replace(/;\s*$/, "").split(";").forEach(function(j) {
          var J = j.split(":");
          M = J[0].trim().toLowerCase(), O = J[1].trim(), Y[M] = O;
        });
      }(R, L) : function(G, Y) {
        var M, O;
        for (var j in G)
          G[j] !== void 0 && (M = j.toLowerCase(), O = G[j], Y[M] = O);
      }(R, L)), L;
    }, parsePointsAttribute: function(I) {
      if (!I)
        return null;
      var L, R, G = [];
      for (L = 0, R = (I = (I = I.replace(/,/g, " ").trim()).split(/\s+/)).length; L < R; L += 2)
        G.push({ x: parseFloat(I[L]), y: parseFloat(I[L + 1]) });
      return G;
    }, getCSSRules: function(I) {
      var L, R, G = I.getElementsByTagName("style"), Y = {};
      for (L = 0, R = G.length; L < R; L++) {
        var M = G[L].textContent;
        (M = M.replace(/\/\*[\s\S]*?\*\//g, "")).trim() !== "" && M.split("}").filter(function(O) {
          return O.trim();
        }).forEach(function(O) {
          var j = O.split("{"), J = {}, N = j[1].trim().split(";").filter(function(iA) {
            return iA.trim();
          });
          for (L = 0, R = N.length; L < R; L++) {
            var z = N[L].split(":"), AA = z[0].trim(), tA = z[1].trim();
            J[AA] = tA;
          }
          (O = j[0].trim()).split(",").forEach(function(iA) {
            (iA = iA.replace(/^svg/i, "").trim()) !== "" && (Y[iA] ? o.util.object.extend(Y[iA], J) : Y[iA] = o.util.object.clone(J));
          });
        });
      }
      return Y;
    }, loadSVGFromURL: function(I, L, R, G) {
      I = I.replace(/^\n\s*/, "").trim(), new o.util.request(I, { method: "get", onComplete: function(Y) {
        var M = Y.responseXML;
        if (!M || !M.documentElement)
          return L && L(null), !1;
        o.parseSVGDocument(M.documentElement, function(O, j, J, N) {
          L && L(O, j, J, N);
        }, R, G);
      } });
    }, loadSVGFromString: function(I, L, R, G) {
      var Y = new o.window.DOMParser().parseFromString(I.trim(), "text/xml");
      o.parseSVGDocument(Y.documentElement, function(M, O, j, J) {
        L(M, O, j, J);
      }, R, G);
    } });
  }(e), m.ElementsParser = function(d, o, c, g, i, n) {
    this.elements = d, this.callback = o, this.options = c, this.reviver = g, this.svgUid = c && c.svgUid || 0, this.parsingOptions = i, this.regexUrl = /^url\(['"]?#([^'"]+)['"]?\)/g, this.doc = n;
  }, (C = m.ElementsParser.prototype).parse = function() {
    this.instances = new Array(this.elements.length), this.numElements = this.elements.length, this.createObjects();
  }, C.createObjects = function() {
    var d = this;
    this.elements.forEach(function(o, c) {
      o.setAttribute("svgUid", d.svgUid), d.createObject(o, c);
    });
  }, C.findTag = function(d) {
    return m[m.util.string.capitalize(d.tagName.replace("svg:", ""))];
  }, C.createObject = function(d, o) {
    var c = this.findTag(d);
    if (c && c.fromElement)
      try {
        c.fromElement(d, this.createCallback(o, d), this.options);
      } catch (g) {
        m.log(g);
      }
    else
      this.checkIfDone();
  }, C.createCallback = function(d, o) {
    var c = this;
    return function(g) {
      var i;
      c.resolveGradient(g, o, "fill"), c.resolveGradient(g, o, "stroke"), g instanceof m.Image && g._originalElement && (i = g.parsePreserveAspectRatioAttribute(o)), g._removeTransformMatrix(i), c.resolveClipPath(g, o), c.reviver && c.reviver(o, g), c.instances[d] = g, c.checkIfDone();
    };
  }, C.extractPropertyDefinition = function(d, o, c) {
    var g = d[o], i = this.regexUrl;
    if (i.test(g)) {
      i.lastIndex = 0;
      var n = i.exec(g)[1];
      return i.lastIndex = 0, m[c][this.svgUid][n];
    }
  }, C.resolveGradient = function(d, o, c) {
    var g = this.extractPropertyDefinition(d, c, "gradientDefs");
    if (g) {
      var i = o.getAttribute(c + "-opacity"), n = m.Gradient.fromElement(g, d, i, this.options);
      d.set(c, n);
    }
  }, C.createClipPathCallback = function(d, o) {
    return function(c) {
      c._removeTransformMatrix(), c.fillRule = c.clipRule, o.push(c);
    };
  }, C.resolveClipPath = function(d, o) {
    var c, g, i, n, s = this.extractPropertyDefinition(d, "clipPath", "clipPaths");
    if (s) {
      i = [], g = m.util.invertTransform(d.calcTransformMatrix());
      for (var u = s[0].parentNode, l = o; l.parentNode && l.getAttribute("clip-path") !== d.clipPath; )
        l = l.parentNode;
      l.parentNode.appendChild(u);
      for (var h = 0; h < s.length; h++)
        c = s[h], this.findTag(c).fromElement(c, this.createClipPathCallback(d, i), this.options);
      s = i.length === 1 ? i[0] : new m.Group(i), n = m.util.multiplyTransformMatrices(g, s.calcTransformMatrix()), s.clipPath && this.resolveClipPath(s, l);
      var p = m.util.qrDecompose(n);
      s.flipX = !1, s.flipY = !1, s.set("scaleX", p.scaleX), s.set("scaleY", p.scaleY), s.angle = p.angle, s.skewX = p.skewX, s.skewY = 0, s.setPositionByOrigin({ x: p.translateX, y: p.translateY }, "center", "center"), d.clipPath = s;
    } else
      delete d.clipPath;
  }, C.checkIfDone = function() {
    --this.numElements == 0 && (this.instances = this.instances.filter(function(d) {
      return d != null;
    }), this.callback(this.instances, this.elements));
  }, function(d) {
    var o = d.fabric || (d.fabric = {});
    function c(g, i) {
      this.x = g, this.y = i;
    }
    o.Point ? o.warn("fabric.Point is already defined") : (o.Point = c, c.prototype = { type: "point", constructor: c, add: function(g) {
      return new c(this.x + g.x, this.y + g.y);
    }, addEquals: function(g) {
      return this.x += g.x, this.y += g.y, this;
    }, scalarAdd: function(g) {
      return new c(this.x + g, this.y + g);
    }, scalarAddEquals: function(g) {
      return this.x += g, this.y += g, this;
    }, subtract: function(g) {
      return new c(this.x - g.x, this.y - g.y);
    }, subtractEquals: function(g) {
      return this.x -= g.x, this.y -= g.y, this;
    }, scalarSubtract: function(g) {
      return new c(this.x - g, this.y - g);
    }, scalarSubtractEquals: function(g) {
      return this.x -= g, this.y -= g, this;
    }, multiply: function(g) {
      return new c(this.x * g, this.y * g);
    }, multiplyEquals: function(g) {
      return this.x *= g, this.y *= g, this;
    }, divide: function(g) {
      return new c(this.x / g, this.y / g);
    }, divideEquals: function(g) {
      return this.x /= g, this.y /= g, this;
    }, eq: function(g) {
      return this.x === g.x && this.y === g.y;
    }, lt: function(g) {
      return this.x < g.x && this.y < g.y;
    }, lte: function(g) {
      return this.x <= g.x && this.y <= g.y;
    }, gt: function(g) {
      return this.x > g.x && this.y > g.y;
    }, gte: function(g) {
      return this.x >= g.x && this.y >= g.y;
    }, lerp: function(g, i) {
      return i === void 0 && (i = 0.5), i = Math.max(Math.min(1, i), 0), new c(this.x + (g.x - this.x) * i, this.y + (g.y - this.y) * i);
    }, distanceFrom: function(g) {
      var i = this.x - g.x, n = this.y - g.y;
      return Math.sqrt(i * i + n * n);
    }, midPointFrom: function(g) {
      return this.lerp(g);
    }, min: function(g) {
      return new c(Math.min(this.x, g.x), Math.min(this.y, g.y));
    }, max: function(g) {
      return new c(Math.max(this.x, g.x), Math.max(this.y, g.y));
    }, toString: function() {
      return this.x + "," + this.y;
    }, setXY: function(g, i) {
      return this.x = g, this.y = i, this;
    }, setX: function(g) {
      return this.x = g, this;
    }, setY: function(g) {
      return this.y = g, this;
    }, setFromPoint: function(g) {
      return this.x = g.x, this.y = g.y, this;
    }, swap: function(g) {
      var i = this.x, n = this.y;
      this.x = g.x, this.y = g.y, g.x = i, g.y = n;
    }, clone: function() {
      return new c(this.x, this.y);
    } });
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {});
    function c(g) {
      this.status = g, this.points = [];
    }
    o.Intersection ? o.warn("fabric.Intersection is already defined") : (o.Intersection = c, o.Intersection.prototype = { constructor: c, appendPoint: function(g) {
      return this.points.push(g), this;
    }, appendPoints: function(g) {
      return this.points = this.points.concat(g), this;
    } }, o.Intersection.intersectLineLine = function(g, i, n, s) {
      var u, l = (s.x - n.x) * (g.y - n.y) - (s.y - n.y) * (g.x - n.x), h = (i.x - g.x) * (g.y - n.y) - (i.y - g.y) * (g.x - n.x), p = (s.y - n.y) * (i.x - g.x) - (s.x - n.x) * (i.y - g.y);
      if (p !== 0) {
        var v = l / p, b = h / p;
        0 <= v && v <= 1 && 0 <= b && b <= 1 ? (u = new c("Intersection")).appendPoint(new o.Point(g.x + v * (i.x - g.x), g.y + v * (i.y - g.y))) : u = new c();
      } else
        u = new c(l === 0 || h === 0 ? "Coincident" : "Parallel");
      return u;
    }, o.Intersection.intersectLinePolygon = function(g, i, n) {
      var s, u, l, h, p = new c(), v = n.length;
      for (h = 0; h < v; h++)
        s = n[h], u = n[(h + 1) % v], l = c.intersectLineLine(g, i, s, u), p.appendPoints(l.points);
      return p.points.length > 0 && (p.status = "Intersection"), p;
    }, o.Intersection.intersectPolygonPolygon = function(g, i) {
      var n, s = new c(), u = g.length;
      for (n = 0; n < u; n++) {
        var l = g[n], h = g[(n + 1) % u], p = c.intersectLinePolygon(l, h, i);
        s.appendPoints(p.points);
      }
      return s.points.length > 0 && (s.status = "Intersection"), s;
    }, o.Intersection.intersectPolygonRectangle = function(g, i, n) {
      var s = i.min(n), u = i.max(n), l = new o.Point(u.x, s.y), h = new o.Point(s.x, u.y), p = c.intersectLinePolygon(s, l, g), v = c.intersectLinePolygon(l, u, g), b = c.intersectLinePolygon(u, h, g), F = c.intersectLinePolygon(h, s, g), U = new c();
      return U.appendPoints(p.points), U.appendPoints(v.points), U.appendPoints(b.points), U.appendPoints(F.points), U.points.length > 0 && (U.status = "Intersection"), U;
    });
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {});
    function c(i) {
      i ? this._tryParsingColor(i) : this.setSource([0, 0, 0, 1]);
    }
    function g(i, n, s) {
      return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? i + 6 * (n - i) * s : s < 0.5 ? n : s < 2 / 3 ? i + (n - i) * (2 / 3 - s) * 6 : i;
    }
    o.Color ? o.warn("fabric.Color is already defined.") : (o.Color = c, o.Color.prototype = { _tryParsingColor: function(i) {
      var n;
      i in c.colorNameMap && (i = c.colorNameMap[i]), i === "transparent" && (n = [255, 255, 255, 0]), n || (n = c.sourceFromHex(i)), n || (n = c.sourceFromRgb(i)), n || (n = c.sourceFromHsl(i)), n || (n = [0, 0, 0, 1]), n && this.setSource(n);
    }, _rgbToHsl: function(i, n, s) {
      i /= 255, n /= 255, s /= 255;
      var u, l, h, p = o.util.array.max([i, n, s]), v = o.util.array.min([i, n, s]);
      if (h = (p + v) / 2, p === v)
        u = l = 0;
      else {
        var b = p - v;
        switch (l = h > 0.5 ? b / (2 - p - v) : b / (p + v), p) {
          case i:
            u = (n - s) / b + (n < s ? 6 : 0);
            break;
          case n:
            u = (s - i) / b + 2;
            break;
          case s:
            u = (i - n) / b + 4;
        }
        u /= 6;
      }
      return [Math.round(360 * u), Math.round(100 * l), Math.round(100 * h)];
    }, getSource: function() {
      return this._source;
    }, setSource: function(i) {
      this._source = i;
    }, toRgb: function() {
      var i = this.getSource();
      return "rgb(" + i[0] + "," + i[1] + "," + i[2] + ")";
    }, toRgba: function() {
      var i = this.getSource();
      return "rgba(" + i[0] + "," + i[1] + "," + i[2] + "," + i[3] + ")";
    }, toHsl: function() {
      var i = this.getSource(), n = this._rgbToHsl(i[0], i[1], i[2]);
      return "hsl(" + n[0] + "," + n[1] + "%," + n[2] + "%)";
    }, toHsla: function() {
      var i = this.getSource(), n = this._rgbToHsl(i[0], i[1], i[2]);
      return "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + i[3] + ")";
    }, toHex: function() {
      var i, n, s, u = this.getSource();
      return i = (i = u[0].toString(16)).length === 1 ? "0" + i : i, n = (n = u[1].toString(16)).length === 1 ? "0" + n : n, s = (s = u[2].toString(16)).length === 1 ? "0" + s : s, i.toUpperCase() + n.toUpperCase() + s.toUpperCase();
    }, toHexa: function() {
      var i, n = this.getSource();
      return i = (i = (i = Math.round(255 * n[3])).toString(16)).length === 1 ? "0" + i : i, this.toHex() + i.toUpperCase();
    }, getAlpha: function() {
      return this.getSource()[3];
    }, setAlpha: function(i) {
      var n = this.getSource();
      return n[3] = i, this.setSource(n), this;
    }, toGrayscale: function() {
      var i = this.getSource(), n = parseInt((0.3 * i[0] + 0.59 * i[1] + 0.11 * i[2]).toFixed(0), 10), s = i[3];
      return this.setSource([n, n, n, s]), this;
    }, toBlackWhite: function(i) {
      var n = this.getSource(), s = (0.3 * n[0] + 0.59 * n[1] + 0.11 * n[2]).toFixed(0), u = n[3];
      return i = i || 127, s = Number(s) < Number(i) ? 0 : 255, this.setSource([s, s, s, u]), this;
    }, overlayWith: function(i) {
      i instanceof c || (i = new c(i));
      var n, s = [], u = this.getAlpha(), l = this.getSource(), h = i.getSource();
      for (n = 0; n < 3; n++)
        s.push(Math.round(0.5 * l[n] + 0.5 * h[n]));
      return s[3] = u, this.setSource(s), this;
    } }, o.Color.reRGBa = /^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/i, o.Color.reHSLa = /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/i, o.Color.reHex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, o.Color.colorNameMap = { aliceblue: "#F0F8FF", antiquewhite: "#FAEBD7", aqua: "#00FFFF", aquamarine: "#7FFFD4", azure: "#F0FFFF", beige: "#F5F5DC", bisque: "#FFE4C4", black: "#000000", blanchedalmond: "#FFEBCD", blue: "#0000FF", blueviolet: "#8A2BE2", brown: "#A52A2A", burlywood: "#DEB887", cadetblue: "#5F9EA0", chartreuse: "#7FFF00", chocolate: "#D2691E", coral: "#FF7F50", cornflowerblue: "#6495ED", cornsilk: "#FFF8DC", crimson: "#DC143C", cyan: "#00FFFF", darkblue: "#00008B", darkcyan: "#008B8B", darkgoldenrod: "#B8860B", darkgray: "#A9A9A9", darkgrey: "#A9A9A9", darkgreen: "#006400", darkkhaki: "#BDB76B", darkmagenta: "#8B008B", darkolivegreen: "#556B2F", darkorange: "#FF8C00", darkorchid: "#9932CC", darkred: "#8B0000", darksalmon: "#E9967A", darkseagreen: "#8FBC8F", darkslateblue: "#483D8B", darkslategray: "#2F4F4F", darkslategrey: "#2F4F4F", darkturquoise: "#00CED1", darkviolet: "#9400D3", deeppink: "#FF1493", deepskyblue: "#00BFFF", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1E90FF", firebrick: "#B22222", floralwhite: "#FFFAF0", forestgreen: "#228B22", fuchsia: "#FF00FF", gainsboro: "#DCDCDC", ghostwhite: "#F8F8FF", gold: "#FFD700", goldenrod: "#DAA520", gray: "#808080", grey: "#808080", green: "#008000", greenyellow: "#ADFF2F", honeydew: "#F0FFF0", hotpink: "#FF69B4", indianred: "#CD5C5C", indigo: "#4B0082", ivory: "#FFFFF0", khaki: "#F0E68C", lavender: "#E6E6FA", lavenderblush: "#FFF0F5", lawngreen: "#7CFC00", lemonchiffon: "#FFFACD", lightblue: "#ADD8E6", lightcoral: "#F08080", lightcyan: "#E0FFFF", lightgoldenrodyellow: "#FAFAD2", lightgray: "#D3D3D3", lightgrey: "#D3D3D3", lightgreen: "#90EE90", lightpink: "#FFB6C1", lightsalmon: "#FFA07A", lightseagreen: "#20B2AA", lightskyblue: "#87CEFA", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#B0C4DE", lightyellow: "#FFFFE0", lime: "#00FF00", limegreen: "#32CD32", linen: "#FAF0E6", magenta: "#FF00FF", maroon: "#800000", mediumaquamarine: "#66CDAA", mediumblue: "#0000CD", mediumorchid: "#BA55D3", mediumpurple: "#9370DB", mediumseagreen: "#3CB371", mediumslateblue: "#7B68EE", mediumspringgreen: "#00FA9A", mediumturquoise: "#48D1CC", mediumvioletred: "#C71585", midnightblue: "#191970", mintcream: "#F5FFFA", mistyrose: "#FFE4E1", moccasin: "#FFE4B5", navajowhite: "#FFDEAD", navy: "#000080", oldlace: "#FDF5E6", olive: "#808000", olivedrab: "#6B8E23", orange: "#FFA500", orangered: "#FF4500", orchid: "#DA70D6", palegoldenrod: "#EEE8AA", palegreen: "#98FB98", paleturquoise: "#AFEEEE", palevioletred: "#DB7093", papayawhip: "#FFEFD5", peachpuff: "#FFDAB9", peru: "#CD853F", pink: "#FFC0CB", plum: "#DDA0DD", powderblue: "#B0E0E6", purple: "#800080", rebeccapurple: "#663399", red: "#FF0000", rosybrown: "#BC8F8F", royalblue: "#4169E1", saddlebrown: "#8B4513", salmon: "#FA8072", sandybrown: "#F4A460", seagreen: "#2E8B57", seashell: "#FFF5EE", sienna: "#A0522D", silver: "#C0C0C0", skyblue: "#87CEEB", slateblue: "#6A5ACD", slategray: "#708090", slategrey: "#708090", snow: "#FFFAFA", springgreen: "#00FF7F", steelblue: "#4682B4", tan: "#D2B48C", teal: "#008080", thistle: "#D8BFD8", tomato: "#FF6347", turquoise: "#40E0D0", violet: "#EE82EE", wheat: "#F5DEB3", white: "#FFFFFF", whitesmoke: "#F5F5F5", yellow: "#FFFF00", yellowgreen: "#9ACD32" }, o.Color.fromRgb = function(i) {
      return c.fromSource(c.sourceFromRgb(i));
    }, o.Color.sourceFromRgb = function(i) {
      var n = i.match(c.reRGBa);
      if (n) {
        var s = parseInt(n[1], 10) / (/%$/.test(n[1]) ? 100 : 1) * (/%$/.test(n[1]) ? 255 : 1), u = parseInt(n[2], 10) / (/%$/.test(n[2]) ? 100 : 1) * (/%$/.test(n[2]) ? 255 : 1), l = parseInt(n[3], 10) / (/%$/.test(n[3]) ? 100 : 1) * (/%$/.test(n[3]) ? 255 : 1);
        return [parseInt(s, 10), parseInt(u, 10), parseInt(l, 10), n[4] ? parseFloat(n[4]) : 1];
      }
    }, o.Color.fromRgba = c.fromRgb, o.Color.fromHsl = function(i) {
      return c.fromSource(c.sourceFromHsl(i));
    }, o.Color.sourceFromHsl = function(i) {
      var n = i.match(c.reHSLa);
      if (n) {
        var s, u, l, h = (parseFloat(n[1]) % 360 + 360) % 360 / 360, p = parseFloat(n[2]) / (/%$/.test(n[2]) ? 100 : 1), v = parseFloat(n[3]) / (/%$/.test(n[3]) ? 100 : 1);
        if (p === 0)
          s = u = l = v;
        else {
          var b = v <= 0.5 ? v * (p + 1) : v + p - v * p, F = 2 * v - b;
          s = g(F, b, h + 1 / 3), u = g(F, b, h), l = g(F, b, h - 1 / 3);
        }
        return [Math.round(255 * s), Math.round(255 * u), Math.round(255 * l), n[4] ? parseFloat(n[4]) : 1];
      }
    }, o.Color.fromHsla = c.fromHsl, o.Color.fromHex = function(i) {
      return c.fromSource(c.sourceFromHex(i));
    }, o.Color.sourceFromHex = function(i) {
      if (i.match(c.reHex)) {
        var n = i.slice(i.indexOf("#") + 1), s = n.length === 3 || n.length === 4, u = n.length === 8 || n.length === 4, l = s ? n.charAt(0) + n.charAt(0) : n.substring(0, 2), h = s ? n.charAt(1) + n.charAt(1) : n.substring(2, 4), p = s ? n.charAt(2) + n.charAt(2) : n.substring(4, 6), v = u ? s ? n.charAt(3) + n.charAt(3) : n.substring(6, 8) : "FF";
        return [parseInt(l, 16), parseInt(h, 16), parseInt(p, 16), parseFloat((parseInt(v, 16) / 255).toFixed(2))];
      }
    }, o.Color.fromSource = function(i) {
      var n = new c();
      return n.setSource(i), n;
    });
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {}), c = ["e", "se", "s", "sw", "w", "nw", "n", "ne", "e"], g = ["ns", "nesw", "ew", "nwse"], i = {}, n = "left", s = "top", u = "right", l = "bottom", h = "center", p = { top: l, bottom: s, left: u, right: n, center: h }, v = o.util.radiansToDegrees, b = Math.sign || function(M) {
      return (M > 0) - (M < 0) || +M;
    };
    function F(M, O) {
      var j = M.angle + v(Math.atan2(O.y, O.x)) + 360;
      return Math.round(j % 360 / 45);
    }
    function U(M, O) {
      var j = O.transform.target, J = j.canvas, N = o.util.object.clone(O);
      N.target = j, J && J.fire("object:" + M, N), j.fire(M, O);
    }
    function k(M, O) {
      var j = O.canvas, J = M[j.uniScaleKey];
      return j.uniformScaling && !J || !j.uniformScaling && J;
    }
    function T(M) {
      return M.originX === h && M.originY === h;
    }
    function H(M, O, j) {
      var J = M.lockScalingX, N = M.lockScalingY;
      return !(!J || !N) || !(O || !J && !N || !j) || !(!J || O !== "x") || !(!N || O !== "y");
    }
    function K(M, O, j, J) {
      return { e: M, transform: O, pointer: { x: j, y: J } };
    }
    function P(M) {
      return function(O, j, J, N) {
        var z = j.target, AA = z.getCenterPoint(), tA = z.translateToOriginPoint(AA, j.originX, j.originY), iA = M(O, j, J, N);
        return z.setPositionByOrigin(tA, j.originX, j.originY), iA;
      };
    }
    function X(M, O) {
      return function(j, J, N, z) {
        var AA = O(j, J, N, z);
        return AA && U(M, K(j, J, N, z)), AA;
      };
    }
    function W(M, O, j, J, N) {
      var z = M.target, AA = z.controls[M.corner], tA = z.canvas.getZoom(), iA = z.padding / tA, $ = z.toLocalPoint(new o.Point(J, N), O, j);
      return $.x >= iA && ($.x -= iA), $.x <= -iA && ($.x += iA), $.y >= iA && ($.y -= iA), $.y <= iA && ($.y += iA), $.x -= AA.offsetX, $.y -= AA.offsetY, $;
    }
    function I(M) {
      return M.flipX !== M.flipY;
    }
    function L(M, O, j, J, N) {
      if (M[O] !== 0) {
        var z = N / M._getTransformedDimensions()[J] * M[j];
        M.set(j, z);
      }
    }
    function R(M, O, j, J) {
      var N, z = O.target, AA = z._getTransformedDimensions(0, z.skewY), tA = W(O, O.originX, O.originY, j, J), iA = Math.abs(2 * tA.x) - AA.x, $ = z.skewX;
      iA < 2 ? N = 0 : (N = v(Math.atan2(iA / z.scaleX, AA.y / z.scaleY)), O.originX === n && O.originY === l && (N = -N), O.originX === u && O.originY === s && (N = -N), I(z) && (N = -N));
      var nA = $ !== N;
      if (nA) {
        var Z = z._getTransformedDimensions().y;
        z.set("skewX", N), L(z, "skewY", "scaleY", "y", Z);
      }
      return nA;
    }
    function G(M, O, j, J) {
      var N, z = O.target, AA = z._getTransformedDimensions(z.skewX, 0), tA = W(O, O.originX, O.originY, j, J), iA = Math.abs(2 * tA.y) - AA.y, $ = z.skewY;
      iA < 2 ? N = 0 : (N = v(Math.atan2(iA / z.scaleY, AA.x / z.scaleX)), O.originX === n && O.originY === l && (N = -N), O.originX === u && O.originY === s && (N = -N), I(z) && (N = -N));
      var nA = $ !== N;
      if (nA) {
        var Z = z._getTransformedDimensions().x;
        z.set("skewY", N), L(z, "skewX", "scaleX", "x", Z);
      }
      return nA;
    }
    function Y(M, O, j, J, N) {
      N = N || {};
      var z, AA, tA, iA, $, nA, Z = O.target, lA = Z.lockScalingX, sA = Z.lockScalingY, dA = N.by, wA = k(M, Z), qA = H(Z, dA, wA), Qe = O.gestureScale;
      if (qA)
        return !1;
      if (Qe)
        AA = O.scaleX * Qe, tA = O.scaleY * Qe;
      else {
        if (z = W(O, O.originX, O.originY, j, J), $ = dA !== "y" ? b(z.x) : 1, nA = dA !== "x" ? b(z.y) : 1, O.signX || (O.signX = $), O.signY || (O.signY = nA), Z.lockScalingFlip && (O.signX !== $ || O.signY !== nA))
          return !1;
        if (iA = Z._getTransformedDimensions(), wA && !dA) {
          var We = Math.abs(z.x) + Math.abs(z.y), _A = O.original, ee = We / (Math.abs(iA.x * _A.scaleX / Z.scaleX) + Math.abs(iA.y * _A.scaleY / Z.scaleY));
          AA = _A.scaleX * ee, tA = _A.scaleY * ee;
        } else
          AA = Math.abs(z.x * Z.scaleX / iA.x), tA = Math.abs(z.y * Z.scaleY / iA.y);
        T(O) && (AA *= 2, tA *= 2), O.signX !== $ && dA !== "y" && (O.originX = p[O.originX], AA *= -1, O.signX = $), O.signY !== nA && dA !== "x" && (O.originY = p[O.originY], tA *= -1, O.signY = nA);
      }
      var ke = Z.scaleX, ot = Z.scaleY;
      return dA ? (dA === "x" && Z.set("scaleX", AA), dA === "y" && Z.set("scaleY", tA)) : (!lA && Z.set("scaleX", AA), !sA && Z.set("scaleY", tA)), ke !== Z.scaleX || ot !== Z.scaleY;
    }
    i.scaleCursorStyleHandler = function(M, O, j) {
      var J = k(M, j), N = "";
      if (O.x !== 0 && O.y === 0 ? N = "x" : O.x === 0 && O.y !== 0 && (N = "y"), H(j, N, J))
        return "not-allowed";
      var z = F(j, O);
      return c[z] + "-resize";
    }, i.skewCursorStyleHandler = function(M, O, j) {
      var J = "not-allowed";
      if (O.x !== 0 && j.lockSkewingY || O.y !== 0 && j.lockSkewingX)
        return J;
      var N = F(j, O) % 4;
      return g[N] + "-resize";
    }, i.scaleSkewCursorStyleHandler = function(M, O, j) {
      return M[j.canvas.altActionKey] ? i.skewCursorStyleHandler(M, O, j) : i.scaleCursorStyleHandler(M, O, j);
    }, i.rotationWithSnapping = X("rotating", P(function(M, O, j, J) {
      var N = O, z = N.target, AA = z.translateToOriginPoint(z.getCenterPoint(), N.originX, N.originY);
      if (z.lockRotation)
        return !1;
      var tA, iA = Math.atan2(N.ey - AA.y, N.ex - AA.x), $ = Math.atan2(J - AA.y, j - AA.x), nA = v($ - iA + N.theta);
      if (z.snapAngle > 0) {
        var Z = z.snapAngle, lA = z.snapThreshold || Z, sA = Math.ceil(nA / Z) * Z, dA = Math.floor(nA / Z) * Z;
        Math.abs(nA - dA) < lA ? nA = dA : Math.abs(nA - sA) < lA && (nA = sA);
      }
      return nA < 0 && (nA = 360 + nA), nA %= 360, tA = z.angle !== nA, z.angle = nA, tA;
    })), i.scalingEqually = X("scaling", P(function(M, O, j, J) {
      return Y(M, O, j, J);
    })), i.scalingX = X("scaling", P(function(M, O, j, J) {
      return Y(M, O, j, J, { by: "x" });
    })), i.scalingY = X("scaling", P(function(M, O, j, J) {
      return Y(M, O, j, J, { by: "y" });
    })), i.scalingYOrSkewingX = function(M, O, j, J) {
      return M[O.target.canvas.altActionKey] ? i.skewHandlerX(M, O, j, J) : i.scalingY(M, O, j, J);
    }, i.scalingXOrSkewingY = function(M, O, j, J) {
      return M[O.target.canvas.altActionKey] ? i.skewHandlerY(M, O, j, J) : i.scalingX(M, O, j, J);
    }, i.changeWidth = X("resizing", P(function(M, O, j, J) {
      var N = O.target, z = W(O, O.originX, O.originY, j, J), AA = N.strokeWidth / (N.strokeUniform ? N.scaleX : 1), tA = T(O) ? 2 : 1, iA = N.width, $ = Math.abs(z.x * tA / N.scaleX) - AA;
      return N.set("width", Math.max($, 0)), iA !== $;
    })), i.skewHandlerX = function(M, O, j, J) {
      var N, z = O.target, AA = z.skewX, tA = O.originY;
      return !z.lockSkewingX && (AA === 0 ? N = W(O, h, h, j, J).x > 0 ? n : u : (AA > 0 && (N = tA === s ? n : u), AA < 0 && (N = tA === s ? u : n), I(z) && (N = N === n ? u : n)), O.originX = N, X("skewing", P(R))(M, O, j, J));
    }, i.skewHandlerY = function(M, O, j, J) {
      var N, z = O.target, AA = z.skewY, tA = O.originX;
      return !z.lockSkewingY && (AA === 0 ? N = W(O, h, h, j, J).y > 0 ? s : l : (AA > 0 && (N = tA === n ? s : l), AA < 0 && (N = tA === n ? l : s), I(z) && (N = N === s ? l : s)), O.originY = N, X("skewing", P(G))(M, O, j, J));
    }, i.dragHandler = function(M, O, j, J) {
      var N = O.target, z = j - O.offsetX, AA = J - O.offsetY, tA = !N.get("lockMovementX") && N.left !== z, iA = !N.get("lockMovementY") && N.top !== AA;
      return tA && N.set("left", z), iA && N.set("top", AA), (tA || iA) && U("moving", K(M, O, j, J)), tA || iA;
    }, i.scaleOrSkewActionName = function(M, O, j) {
      var J = M[j.canvas.altActionKey];
      return O.x === 0 ? J ? "skewX" : "scaleY" : O.y === 0 ? J ? "skewY" : "scaleX" : void 0;
    }, i.rotationStyleHandler = function(M, O, j) {
      return j.lockRotation ? "not-allowed" : O.cursorStyle;
    }, i.fireEvent = U, i.wrapWithFixedAnchor = P, i.wrapWithFireEvent = X, i.getLocalPoint = W, o.controlsUtils = i;
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.util.degreesToRadians, g = o.controlsUtils;
    g.renderCircleControl = function(i, n, s, u, l) {
      u = u || {};
      var h, p = this.sizeX || u.cornerSize || l.cornerSize, v = this.sizeY || u.cornerSize || l.cornerSize, b = u.transparentCorners !== void 0 ? u.transparentCorners : l.transparentCorners, F = b ? "stroke" : "fill", U = !b && (u.cornerStrokeColor || l.cornerStrokeColor), k = n, T = s;
      i.save(), i.fillStyle = u.cornerColor || l.cornerColor, i.strokeStyle = u.cornerStrokeColor || l.cornerStrokeColor, p > v ? (h = p, i.scale(1, v / p), T = s * p / v) : v > p ? (h = v, i.scale(p / v, 1), k = n * v / p) : h = p, i.lineWidth = 1, i.beginPath(), i.arc(k, T, h / 2, 0, 2 * Math.PI, !1), i[F](), U && i.stroke(), i.restore();
    }, g.renderSquareControl = function(i, n, s, u, l) {
      u = u || {};
      var h = this.sizeX || u.cornerSize || l.cornerSize, p = this.sizeY || u.cornerSize || l.cornerSize, v = u.transparentCorners !== void 0 ? u.transparentCorners : l.transparentCorners, b = v ? "stroke" : "fill", F = !v && (u.cornerStrokeColor || l.cornerStrokeColor), U = h / 2, k = p / 2;
      i.save(), i.fillStyle = u.cornerColor || l.cornerColor, i.strokeStyle = u.cornerStrokeColor || l.cornerStrokeColor, i.lineWidth = 1, i.translate(n, s), i.rotate(c(l.angle)), i[b + "Rect"](-U, -k, h, p), F && i.strokeRect(-U, -k, h, p), i.restore();
    };
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {});
    o.Control = function(c) {
      for (var g in c)
        this[g] = c[g];
    }, o.Control.prototype = { visible: !0, actionName: "scale", angle: 0, x: 0, y: 0, offsetX: 0, offsetY: 0, sizeX: null, sizeY: null, touchSizeX: null, touchSizeY: null, cursorStyle: "crosshair", withConnection: !1, actionHandler: function() {
    }, mouseDownHandler: function() {
    }, mouseUpHandler: function() {
    }, getActionHandler: function() {
      return this.actionHandler;
    }, getMouseDownHandler: function() {
      return this.mouseDownHandler;
    }, getMouseUpHandler: function() {
      return this.mouseUpHandler;
    }, cursorStyleHandler: function(c, g) {
      return g.cursorStyle;
    }, getActionName: function(c, g) {
      return g.actionName;
    }, getVisibility: function(c, g) {
      var i = c._controlsVisibility;
      return i && i[g] !== void 0 ? i[g] : this.visible;
    }, setVisibility: function(c) {
      this.visible = c;
    }, positionHandler: function(c, g) {
      return o.util.transformPoint({ x: this.x * c.x + this.offsetX, y: this.y * c.y + this.offsetY }, g);
    }, calcCornerCoords: function(c, g, i, n, s) {
      var u, l, h, p, v = s ? this.touchSizeX : this.sizeX, b = s ? this.touchSizeY : this.sizeY;
      if (v && b && v !== b) {
        var F = Math.atan2(b, v), U = Math.sqrt(v * v + b * b) / 2, k = F - o.util.degreesToRadians(c), T = Math.PI / 2 - F - o.util.degreesToRadians(c);
        u = U * o.util.cos(k), l = U * o.util.sin(k), h = U * o.util.cos(T), p = U * o.util.sin(T);
      } else
        U = 0.7071067812 * (v && b ? v : g), k = o.util.degreesToRadians(45 - c), u = h = U * o.util.cos(k), l = p = U * o.util.sin(k);
      return { tl: { x: i - p, y: n - h }, tr: { x: i + u, y: n - l }, bl: { x: i - u, y: n + l }, br: { x: i + p, y: n + h } };
    }, render: function(c, g, i, n, s) {
      ((n = n || {}).cornerStyle || s.cornerStyle) === "circle" ? o.controlsUtils.renderCircleControl.call(this, c, g, i, n, s) : o.controlsUtils.renderSquareControl.call(this, c, g, i, n, s);
    } };
  }(e), function() {
    function d(c, g) {
      var i, n, s, u, l = c.getAttribute("style"), h = c.getAttribute("offset") || 0;
      if (h = (h = parseFloat(h) / (/%$/.test(h) ? 100 : 1)) < 0 ? 0 : h > 1 ? 1 : h, l) {
        var p = l.split(/\s*;\s*/);
        for (p[p.length - 1] === "" && p.pop(), u = p.length; u--; ) {
          var v = p[u].split(/\s*:\s*/), b = v[0].trim(), F = v[1].trim();
          b === "stop-color" ? i = F : b === "stop-opacity" && (s = F);
        }
      }
      return i || (i = c.getAttribute("stop-color") || "rgb(0,0,0)"), s || (s = c.getAttribute("stop-opacity")), n = (i = new m.Color(i)).getAlpha(), s = isNaN(parseFloat(s)) ? 1 : parseFloat(s), s *= n * g, { offset: h, color: i.toRgb(), opacity: s };
    }
    var o = m.util.object.clone;
    m.Gradient = m.util.createClass({ offsetX: 0, offsetY: 0, gradientTransform: null, gradientUnits: "pixels", type: "linear", initialize: function(c) {
      c || (c = {}), c.coords || (c.coords = {});
      var g, i = this;
      Object.keys(c).forEach(function(n) {
        i[n] = c[n];
      }), this.id ? this.id += "_" + m.Object.__uid++ : this.id = m.Object.__uid++, g = { x1: c.coords.x1 || 0, y1: c.coords.y1 || 0, x2: c.coords.x2 || 0, y2: c.coords.y2 || 0 }, this.type === "radial" && (g.r1 = c.coords.r1 || 0, g.r2 = c.coords.r2 || 0), this.coords = g, this.colorStops = c.colorStops.slice();
    }, addColorStop: function(c) {
      for (var g in c) {
        var i = new m.Color(c[g]);
        this.colorStops.push({ offset: parseFloat(g), color: i.toRgb(), opacity: i.getAlpha() });
      }
      return this;
    }, toObject: function(c) {
      var g = { type: this.type, coords: this.coords, colorStops: this.colorStops, offsetX: this.offsetX, offsetY: this.offsetY, gradientUnits: this.gradientUnits, gradientTransform: this.gradientTransform ? this.gradientTransform.concat() : this.gradientTransform };
      return m.util.populateWithProperties(this, g, c), g;
    }, toSVG: function(c, g) {
      var i, n, s, u, l = o(this.coords, !0), h = (g = g || {}, o(this.colorStops, !0)), p = l.r1 > l.r2, v = this.gradientTransform ? this.gradientTransform.concat() : m.iMatrix.concat(), b = -this.offsetX, F = -this.offsetY, U = !!g.additionalTransform, k = this.gradientUnits === "pixels" ? "userSpaceOnUse" : "objectBoundingBox";
      if (h.sort(function(P, X) {
        return P.offset - X.offset;
      }), k === "objectBoundingBox" ? (b /= c.width, F /= c.height) : (b += c.width / 2, F += c.height / 2), c.type === "path" && this.gradientUnits !== "percentage" && (b -= c.pathOffset.x, F -= c.pathOffset.y), v[4] -= b, v[5] -= F, u = 'id="SVGID_' + this.id + '" gradientUnits="' + k + '"', u += ' gradientTransform="' + (U ? g.additionalTransform + " " : "") + m.util.matrixToSVG(v) + '" ', this.type === "linear" ? s = ["<linearGradient ", u, ' x1="', l.x1, '" y1="', l.y1, '" x2="', l.x2, '" y2="', l.y2, `">
`] : this.type === "radial" && (s = ["<radialGradient ", u, ' cx="', p ? l.x1 : l.x2, '" cy="', p ? l.y1 : l.y2, '" r="', p ? l.r1 : l.r2, '" fx="', p ? l.x2 : l.x1, '" fy="', p ? l.y2 : l.y1, `">
`]), this.type === "radial") {
        if (p)
          for ((h = h.concat()).reverse(), i = 0, n = h.length; i < n; i++)
            h[i].offset = 1 - h[i].offset;
        var T = Math.min(l.r1, l.r2);
        if (T > 0) {
          var H = T / Math.max(l.r1, l.r2);
          for (i = 0, n = h.length; i < n; i++)
            h[i].offset += H * (1 - h[i].offset);
        }
      }
      for (i = 0, n = h.length; i < n; i++) {
        var K = h[i];
        s.push("<stop ", 'offset="', 100 * K.offset + "%", '" style="stop-color:', K.color, K.opacity !== void 0 ? ";stop-opacity: " + K.opacity : ";", `"/>
`);
      }
      return s.push(this.type === "linear" ? `</linearGradient>
` : `</radialGradient>
`), s.join("");
    }, toLive: function(c) {
      var g, i, n, s = m.util.object.clone(this.coords);
      if (this.type) {
        for (this.type === "linear" ? g = c.createLinearGradient(s.x1, s.y1, s.x2, s.y2) : this.type === "radial" && (g = c.createRadialGradient(s.x1, s.y1, s.r1, s.x2, s.y2, s.r2)), i = 0, n = this.colorStops.length; i < n; i++) {
          var u = this.colorStops[i].color, l = this.colorStops[i].opacity, h = this.colorStops[i].offset;
          l !== void 0 && (u = new m.Color(u).setAlpha(l).toRgba()), g.addColorStop(h, u);
        }
        return g;
      }
    } }), m.util.object.extend(m.Gradient, { fromElement: function(c, g, i, n) {
      var s = parseFloat(i) / (/%$/.test(i) ? 100 : 1);
      s = s < 0 ? 0 : s > 1 ? 1 : s, isNaN(s) && (s = 1);
      var u, l, h, p, v = c.getElementsByTagName("stop"), b = c.getAttribute("gradientUnits") === "userSpaceOnUse" ? "pixels" : "percentage", F = c.getAttribute("gradientTransform") || "", U = [], k = 0, T = 0;
      for (c.nodeName === "linearGradient" || c.nodeName === "LINEARGRADIENT" ? (u = "linear", l = function(H) {
        return { x1: H.getAttribute("x1") || 0, y1: H.getAttribute("y1") || 0, x2: H.getAttribute("x2") || "100%", y2: H.getAttribute("y2") || 0 };
      }(c)) : (u = "radial", l = function(H) {
        return { x1: H.getAttribute("fx") || H.getAttribute("cx") || "50%", y1: H.getAttribute("fy") || H.getAttribute("cy") || "50%", r1: 0, x2: H.getAttribute("cx") || "50%", y2: H.getAttribute("cy") || "50%", r2: H.getAttribute("r") || "50%" };
      }(c)), h = v.length; h--; )
        U.push(d(v[h], s));
      return p = m.parseTransformAttribute(F), function(H, K, P, X) {
        var W, I;
        Object.keys(K).forEach(function(L) {
          (W = K[L]) === "Infinity" ? I = 1 : W === "-Infinity" ? I = 0 : (I = parseFloat(K[L], 10), typeof W == "string" && /^(\d+\.\d+)%|(\d+)%$/.test(W) && (I *= 0.01, X === "pixels" && (L !== "x1" && L !== "x2" && L !== "r2" || (I *= P.viewBoxWidth || P.width), L !== "y1" && L !== "y2" || (I *= P.viewBoxHeight || P.height)))), K[L] = I;
        });
      }(0, l, n, b), b === "pixels" && (k = -g.left, T = -g.top), new m.Gradient({ id: c.getAttribute("id"), type: u, coords: l, colorStops: U, gradientUnits: b, gradientTransform: p, offsetX: k, offsetY: T });
    } });
  }(), Q = m.util.toFixed, m.Pattern = m.util.createClass({ repeat: "repeat", offsetX: 0, offsetY: 0, crossOrigin: "", patternTransform: null, initialize: function(d, o) {
    if (d || (d = {}), this.id = m.Object.__uid++, this.setOptions(d), !d.source || d.source && typeof d.source != "string")
      o && o(this);
    else {
      var c = this;
      this.source = m.util.createImage(), m.util.loadImage(d.source, function(g, i) {
        c.source = g, o && o(c, i);
      }, null, this.crossOrigin);
    }
  }, toObject: function(d) {
    var o, c, g = m.Object.NUM_FRACTION_DIGITS;
    return typeof this.source.src == "string" ? o = this.source.src : typeof this.source == "object" && this.source.toDataURL && (o = this.source.toDataURL()), c = { type: "pattern", source: o, repeat: this.repeat, crossOrigin: this.crossOrigin, offsetX: Q(this.offsetX, g), offsetY: Q(this.offsetY, g), patternTransform: this.patternTransform ? this.patternTransform.concat() : null }, m.util.populateWithProperties(this, c, d), c;
  }, toSVG: function(d) {
    var o = typeof this.source == "function" ? this.source() : this.source, c = o.width / d.width, g = o.height / d.height, i = this.offsetX / d.width, n = this.offsetY / d.height, s = "";
    return this.repeat !== "repeat-x" && this.repeat !== "no-repeat" || (g = 1, n && (g += Math.abs(n))), this.repeat !== "repeat-y" && this.repeat !== "no-repeat" || (c = 1, i && (c += Math.abs(i))), o.src ? s = o.src : o.toDataURL && (s = o.toDataURL()), '<pattern id="SVGID_' + this.id + '" x="' + i + '" y="' + n + '" width="' + c + '" height="' + g + `">
<image x="0" y="0" width="` + o.width + '" height="' + o.height + '" xlink:href="' + s + `"></image>
</pattern>
`;
  }, setOptions: function(d) {
    for (var o in d)
      this[o] = d[o];
  }, toLive: function(d) {
    var o = this.source;
    return !o || o.src !== void 0 && (!o.complete || o.naturalWidth === 0 || o.naturalHeight === 0) ? "" : d.createPattern(o, this.repeat);
  } }), function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.util.toFixed;
    o.Shadow ? o.warn("fabric.Shadow is already defined.") : (o.Shadow = o.util.createClass({ color: "rgb(0,0,0)", blur: 0, offsetX: 0, offsetY: 0, affectStroke: !1, includeDefaultValues: !0, nonScaling: !1, initialize: function(g) {
      for (var i in typeof g == "string" && (g = this._parseShadow(g)), g)
        this[i] = g[i];
      this.id = o.Object.__uid++;
    }, _parseShadow: function(g) {
      var i = g.trim(), n = o.Shadow.reOffsetsAndBlur.exec(i) || [];
      return { color: (i.replace(o.Shadow.reOffsetsAndBlur, "") || "rgb(0,0,0)").trim(), offsetX: parseFloat(n[1], 10) || 0, offsetY: parseFloat(n[2], 10) || 0, blur: parseFloat(n[3], 10) || 0 };
    }, toString: function() {
      return [this.offsetX, this.offsetY, this.blur, this.color].join("px ");
    }, toSVG: function(g) {
      var i = 40, n = 40, s = o.Object.NUM_FRACTION_DIGITS, u = o.util.rotateVector({ x: this.offsetX, y: this.offsetY }, o.util.degreesToRadians(-g.angle)), l = new o.Color(this.color);
      return g.width && g.height && (i = 100 * c((Math.abs(u.x) + this.blur) / g.width, s) + 20, n = 100 * c((Math.abs(u.y) + this.blur) / g.height, s) + 20), g.flipX && (u.x *= -1), g.flipY && (u.y *= -1), '<filter id="SVGID_' + this.id + '" y="-' + n + '%" height="' + (100 + 2 * n) + '%" x="-' + i + '%" width="' + (100 + 2 * i) + `%" >
	<feGaussianBlur in="SourceAlpha" stdDeviation="` + c(this.blur ? this.blur / 2 : 0, s) + `"></feGaussianBlur>
	<feOffset dx="` + c(u.x, s) + '" dy="' + c(u.y, s) + `" result="oBlur" ></feOffset>
	<feFlood flood-color="` + l.toRgb() + '" flood-opacity="' + l.getAlpha() + `"/>
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
      var g = {}, i = o.Shadow.prototype;
      return ["color", "blur", "offsetX", "offsetY", "affectStroke", "nonScaling"].forEach(function(n) {
        this[n] !== i[n] && (g[n] = this[n]);
      }, this), g;
    } }), o.Shadow.reOffsetsAndBlur = /(?:\s|^)(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(\d+(?:\.\d*)?(?:px)?)?(?:\s?|$)(?:$|\s)/);
  }(e), function() {
    if (m.StaticCanvas)
      m.warn("fabric.StaticCanvas is already defined.");
    else {
      var d = m.util.object.extend, o = m.util.getElementOffset, c = m.util.removeFromArray, g = m.util.toFixed, i = m.util.transformPoint, n = m.util.invertTransform, s = m.util.getNodeCanvas, u = m.util.createCanvasElement, l = new Error("Could not initialize `canvas` element");
      m.StaticCanvas = m.util.createClass(m.CommonMethods, { initialize: function(h, p) {
        p || (p = {}), this.renderAndResetBound = this.renderAndReset.bind(this), this.requestRenderAllBound = this.requestRenderAll.bind(this), this._initStatic(h, p);
      }, backgroundColor: "", backgroundImage: null, overlayColor: "", overlayImage: null, includeDefaultValues: !0, stateful: !1, renderOnAddRemove: !0, controlsAboveOverlay: !1, allowTouchScrolling: !1, imageSmoothingEnabled: !0, viewportTransform: m.iMatrix.concat(), backgroundVpt: !0, overlayVpt: !0, enableRetinaScaling: !0, vptCoords: {}, skipOffscreen: !0, clipPath: void 0, _initStatic: function(h, p) {
        var v = this.requestRenderAllBound;
        this._objects = [], this._createLowerCanvas(h), this._initOptions(p), this.interactive || this._initRetinaScaling(), p.overlayImage && this.setOverlayImage(p.overlayImage, v), p.backgroundImage && this.setBackgroundImage(p.backgroundImage, v), p.backgroundColor && this.setBackgroundColor(p.backgroundColor, v), p.overlayColor && this.setOverlayColor(p.overlayColor, v), this.calcOffset();
      }, _isRetinaScaling: function() {
        return m.devicePixelRatio > 1 && this.enableRetinaScaling;
      }, getRetinaScaling: function() {
        return this._isRetinaScaling() ? Math.max(1, m.devicePixelRatio) : 1;
      }, _initRetinaScaling: function() {
        if (this._isRetinaScaling()) {
          var h = m.devicePixelRatio;
          this.__initRetinaScaling(h, this.lowerCanvasEl, this.contextContainer), this.upperCanvasEl && this.__initRetinaScaling(h, this.upperCanvasEl, this.contextTop);
        }
      }, __initRetinaScaling: function(h, p, v) {
        p.setAttribute("width", this.width * h), p.setAttribute("height", this.height * h), v.scale(h, h);
      }, calcOffset: function() {
        return this._offset = o(this.lowerCanvasEl), this;
      }, setOverlayImage: function(h, p, v) {
        return this.__setBgOverlayImage("overlayImage", h, p, v);
      }, setBackgroundImage: function(h, p, v) {
        return this.__setBgOverlayImage("backgroundImage", h, p, v);
      }, setOverlayColor: function(h, p) {
        return this.__setBgOverlayColor("overlayColor", h, p);
      }, setBackgroundColor: function(h, p) {
        return this.__setBgOverlayColor("backgroundColor", h, p);
      }, __setBgOverlayImage: function(h, p, v, b) {
        return typeof p == "string" ? m.util.loadImage(p, function(F, U) {
          if (F) {
            var k = new m.Image(F, b);
            this[h] = k, k.canvas = this;
          }
          v && v(F, U);
        }, this, b && b.crossOrigin) : (b && p.setOptions(b), this[h] = p, p && (p.canvas = this), v && v(p, !1)), this;
      }, __setBgOverlayColor: function(h, p, v) {
        return this[h] = p, this._initGradient(p, h), this._initPattern(p, h, v), this;
      }, _createCanvasElement: function() {
        var h = u();
        if (!h || (h.style || (h.style = {}), h.getContext === void 0))
          throw l;
        return h;
      }, _initOptions: function(h) {
        var p = this.lowerCanvasEl;
        this._setOptions(h), this.width = this.width || parseInt(p.width, 10) || 0, this.height = this.height || parseInt(p.height, 10) || 0, this.lowerCanvasEl.style && (p.width = this.width, p.height = this.height, p.style.width = this.width + "px", p.style.height = this.height + "px", this.viewportTransform = this.viewportTransform.slice());
      }, _createLowerCanvas: function(h) {
        h && h.getContext ? this.lowerCanvasEl = h : this.lowerCanvasEl = m.util.getById(h) || this._createCanvasElement(), m.util.addClass(this.lowerCanvasEl, "lower-canvas"), this._originalCanvasStyle = this.lowerCanvasEl.style, this.interactive && this._applyCanvasStyle(this.lowerCanvasEl), this.contextContainer = this.lowerCanvasEl.getContext("2d");
      }, getWidth: function() {
        return this.width;
      }, getHeight: function() {
        return this.height;
      }, setWidth: function(h, p) {
        return this.setDimensions({ width: h }, p);
      }, setHeight: function(h, p) {
        return this.setDimensions({ height: h }, p);
      }, setDimensions: function(h, p) {
        var v;
        for (var b in p = p || {}, h)
          v = h[b], p.cssOnly || (this._setBackstoreDimension(b, h[b]), v += "px", this.hasLostContext = !0), p.backstoreOnly || this._setCssDimension(b, v);
        return this._isCurrentlyDrawing && this.freeDrawingBrush && this.freeDrawingBrush._setBrushStyles(this.contextTop), this._initRetinaScaling(), this.calcOffset(), p.cssOnly || this.requestRenderAll(), this;
      }, _setBackstoreDimension: function(h, p) {
        return this.lowerCanvasEl[h] = p, this.upperCanvasEl && (this.upperCanvasEl[h] = p), this.cacheCanvasEl && (this.cacheCanvasEl[h] = p), this[h] = p, this;
      }, _setCssDimension: function(h, p) {
        return this.lowerCanvasEl.style[h] = p, this.upperCanvasEl && (this.upperCanvasEl.style[h] = p), this.wrapperEl && (this.wrapperEl.style[h] = p), this;
      }, getZoom: function() {
        return this.viewportTransform[0];
      }, setViewportTransform: function(h) {
        var p, v, b, F = this._activeObject, U = this.backgroundImage, k = this.overlayImage;
        for (this.viewportTransform = h, v = 0, b = this._objects.length; v < b; v++)
          (p = this._objects[v]).group || p.setCoords(!0);
        return F && F.setCoords(), U && U.setCoords(!0), k && k.setCoords(!0), this.calcViewportBoundaries(), this.renderOnAddRemove && this.requestRenderAll(), this;
      }, zoomToPoint: function(h, p) {
        var v = h, b = this.viewportTransform.slice(0);
        h = i(h, n(this.viewportTransform)), b[0] = p, b[3] = p;
        var F = i(h, b);
        return b[4] += v.x - F.x, b[5] += v.y - F.y, this.setViewportTransform(b);
      }, setZoom: function(h) {
        return this.zoomToPoint(new m.Point(0, 0), h), this;
      }, absolutePan: function(h) {
        var p = this.viewportTransform.slice(0);
        return p[4] = -h.x, p[5] = -h.y, this.setViewportTransform(p);
      }, relativePan: function(h) {
        return this.absolutePan(new m.Point(-h.x - this.viewportTransform[4], -h.y - this.viewportTransform[5]));
      }, getElement: function() {
        return this.lowerCanvasEl;
      }, _onObjectAdded: function(h) {
        this.stateful && h.setupState(), h._set("canvas", this), h.setCoords(), this.fire("object:added", { target: h }), h.fire("added");
      }, _onObjectRemoved: function(h) {
        this.fire("object:removed", { target: h }), h.fire("removed"), delete h.canvas;
      }, clearContext: function(h) {
        return h.clearRect(0, 0, this.width, this.height), this;
      }, getContext: function() {
        return this.contextContainer;
      }, clear: function() {
        return this.remove.apply(this, this.getObjects()), this.backgroundImage = null, this.overlayImage = null, this.backgroundColor = "", this.overlayColor = "", this._hasITextHandlers && (this.off("mouse:up", this._mouseUpITextHandler), this._iTextInstances = null, this._hasITextHandlers = !1), this.clearContext(this.contextContainer), this.fire("canvas:cleared"), this.renderOnAddRemove && this.requestRenderAll(), this;
      }, renderAll: function() {
        var h = this.contextContainer;
        return this.renderCanvas(h, this._objects), this;
      }, renderAndReset: function() {
        this.isRendering = 0, this.renderAll();
      }, requestRenderAll: function() {
        return this.isRendering || (this.isRendering = m.util.requestAnimFrame(this.renderAndResetBound)), this;
      }, calcViewportBoundaries: function() {
        var h = {}, p = this.width, v = this.height, b = n(this.viewportTransform);
        return h.tl = i({ x: 0, y: 0 }, b), h.br = i({ x: p, y: v }, b), h.tr = new m.Point(h.br.x, h.tl.y), h.bl = new m.Point(h.tl.x, h.br.y), this.vptCoords = h, h;
      }, cancelRequestedRender: function() {
        this.isRendering && (m.util.cancelAnimFrame(this.isRendering), this.isRendering = 0);
      }, renderCanvas: function(h, p) {
        var v = this.viewportTransform, b = this.clipPath;
        this.cancelRequestedRender(), this.calcViewportBoundaries(), this.clearContext(h), m.util.setImageSmoothing(h, this.imageSmoothingEnabled), this.fire("before:render", { ctx: h }), this._renderBackground(h), h.save(), h.transform(v[0], v[1], v[2], v[3], v[4], v[5]), this._renderObjects(h, p), h.restore(), !this.controlsAboveOverlay && this.interactive && this.drawControls(h), b && (b.canvas = this, b.shouldCache(), b._transformDone = !0, b.renderCache({ forClipping: !0 }), this.drawClipPathOnCanvas(h)), this._renderOverlay(h), this.controlsAboveOverlay && this.interactive && this.drawControls(h), this.fire("after:render", { ctx: h });
      }, drawClipPathOnCanvas: function(h) {
        var p = this.viewportTransform, v = this.clipPath;
        h.save(), h.transform(p[0], p[1], p[2], p[3], p[4], p[5]), h.globalCompositeOperation = "destination-in", v.transform(h), h.scale(1 / v.zoomX, 1 / v.zoomY), h.drawImage(v._cacheCanvas, -v.cacheTranslationX, -v.cacheTranslationY), h.restore();
      }, _renderObjects: function(h, p) {
        var v, b;
        for (v = 0, b = p.length; v < b; ++v)
          p[v] && p[v].render(h);
      }, _renderBackgroundOrOverlay: function(h, p) {
        var v = this[p + "Color"], b = this[p + "Image"], F = this.viewportTransform, U = this[p + "Vpt"];
        if (v || b) {
          if (v) {
            h.save(), h.beginPath(), h.moveTo(0, 0), h.lineTo(this.width, 0), h.lineTo(this.width, this.height), h.lineTo(0, this.height), h.closePath(), h.fillStyle = v.toLive ? v.toLive(h, this) : v, U && h.transform(F[0], F[1], F[2], F[3], F[4], F[5]), h.transform(1, 0, 0, 1, v.offsetX || 0, v.offsetY || 0);
            var k = v.gradientTransform || v.patternTransform;
            k && h.transform(k[0], k[1], k[2], k[3], k[4], k[5]), h.fill(), h.restore();
          }
          b && (h.save(), U && h.transform(F[0], F[1], F[2], F[3], F[4], F[5]), b.render(h), h.restore());
        }
      }, _renderBackground: function(h) {
        this._renderBackgroundOrOverlay(h, "background");
      }, _renderOverlay: function(h) {
        this._renderBackgroundOrOverlay(h, "overlay");
      }, getCenter: function() {
        return { top: this.height / 2, left: this.width / 2 };
      }, getCenterPoint: function() {
        return new m.Point(this.width / 2, this.height / 2);
      }, centerObjectH: function(h) {
        return this._centerObject(h, new m.Point(this.getCenterPoint().x, h.getCenterPoint().y));
      }, centerObjectV: function(h) {
        return this._centerObject(h, new m.Point(h.getCenterPoint().x, this.getCenterPoint().y));
      }, centerObject: function(h) {
        var p = this.getCenterPoint();
        return this._centerObject(h, p);
      }, viewportCenterObject: function(h) {
        var p = this.getVpCenter();
        return this._centerObject(h, p);
      }, viewportCenterObjectH: function(h) {
        var p = this.getVpCenter();
        return this._centerObject(h, new m.Point(p.x, h.getCenterPoint().y)), this;
      }, viewportCenterObjectV: function(h) {
        var p = this.getVpCenter();
        return this._centerObject(h, new m.Point(h.getCenterPoint().x, p.y));
      }, getVpCenter: function() {
        var h = this.getCenterPoint(), p = n(this.viewportTransform);
        return i(h, p);
      }, _centerObject: function(h, p) {
        return h.setPositionByOrigin(p, "center", "center"), h.setCoords(), this.renderOnAddRemove && this.requestRenderAll(), this;
      }, toDatalessJSON: function(h) {
        return this.toDatalessObject(h);
      }, toObject: function(h) {
        return this._toObjectMethod("toObject", h);
      }, toDatalessObject: function(h) {
        return this._toObjectMethod("toDatalessObject", h);
      }, _toObjectMethod: function(h, p) {
        var v = this.clipPath, b = { version: m.version, objects: this._toObjects(h, p) };
        return v && !v.excludeFromExport && (b.clipPath = this._toObject(this.clipPath, h, p)), d(b, this.__serializeBgOverlay(h, p)), m.util.populateWithProperties(this, b, p), b;
      }, _toObjects: function(h, p) {
        return this._objects.filter(function(v) {
          return !v.excludeFromExport;
        }).map(function(v) {
          return this._toObject(v, h, p);
        }, this);
      }, _toObject: function(h, p, v) {
        var b;
        this.includeDefaultValues || (b = h.includeDefaultValues, h.includeDefaultValues = !1);
        var F = h[p](v);
        return this.includeDefaultValues || (h.includeDefaultValues = b), F;
      }, __serializeBgOverlay: function(h, p) {
        var v = {}, b = this.backgroundImage, F = this.overlayImage, U = this.backgroundColor, k = this.overlayColor;
        return U && U.toObject ? U.excludeFromExport || (v.background = U.toObject(p)) : U && (v.background = U), k && k.toObject ? k.excludeFromExport || (v.overlay = k.toObject(p)) : k && (v.overlay = k), b && !b.excludeFromExport && (v.backgroundImage = this._toObject(b, h, p)), F && !F.excludeFromExport && (v.overlayImage = this._toObject(F, h, p)), v;
      }, svgViewportTransformation: !0, toSVG: function(h, p) {
        h || (h = {}), h.reviver = p;
        var v = [];
        return this._setSVGPreamble(v, h), this._setSVGHeader(v, h), this.clipPath && v.push('<g clip-path="url(#' + this.clipPath.clipPathId + `)" >
`), this._setSVGBgOverlayColor(v, "background"), this._setSVGBgOverlayImage(v, "backgroundImage", p), this._setSVGObjects(v, p), this.clipPath && v.push(`</g>
`), this._setSVGBgOverlayColor(v, "overlay"), this._setSVGBgOverlayImage(v, "overlayImage", p), v.push("</svg>"), v.join("");
      }, _setSVGPreamble: function(h, p) {
        p.suppressPreamble || h.push('<?xml version="1.0" encoding="', p.encoding || "UTF-8", `" standalone="no" ?>
`, '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ', `"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
`);
      }, _setSVGHeader: function(h, p) {
        var v, b = p.width || this.width, F = p.height || this.height, U = 'viewBox="0 0 ' + this.width + " " + this.height + '" ', k = m.Object.NUM_FRACTION_DIGITS;
        p.viewBox ? U = 'viewBox="' + p.viewBox.x + " " + p.viewBox.y + " " + p.viewBox.width + " " + p.viewBox.height + '" ' : this.svgViewportTransformation && (v = this.viewportTransform, U = 'viewBox="' + g(-v[4] / v[0], k) + " " + g(-v[5] / v[3], k) + " " + g(this.width / v[0], k) + " " + g(this.height / v[3], k) + '" '), h.push("<svg ", 'xmlns="http://www.w3.org/2000/svg" ', 'xmlns:xlink="http://www.w3.org/1999/xlink" ', 'version="1.1" ', 'width="', b, '" ', 'height="', F, '" ', U, `xml:space="preserve">
`, "<desc>Created with Fabric.js ", m.version, `</desc>
`, `<defs>
`, this.createSVGFontFacesMarkup(), this.createSVGRefElementsMarkup(), this.createSVGClipPathMarkup(p), `</defs>
`);
      }, createSVGClipPathMarkup: function(h) {
        var p = this.clipPath;
        return p ? (p.clipPathId = "CLIPPATH_" + m.Object.__uid++, '<clipPath id="' + p.clipPathId + `" >
` + this.clipPath.toClipPathSVG(h.reviver) + `</clipPath>
`) : "";
      }, createSVGRefElementsMarkup: function() {
        var h = this;
        return ["background", "overlay"].map(function(p) {
          var v = h[p + "Color"];
          if (v && v.toLive) {
            var b = h[p + "Vpt"], F = h.viewportTransform, U = { width: h.width / (b ? F[0] : 1), height: h.height / (b ? F[3] : 1) };
            return v.toSVG(U, { additionalTransform: b ? m.util.matrixToSVG(F) : "" });
          }
        }).join("");
      }, createSVGFontFacesMarkup: function() {
        var h, p, v, b, F, U, k, T, H = "", K = {}, P = m.fontPaths, X = [];
        for (this._objects.forEach(function I(L) {
          X.push(L), L._objects && L._objects.forEach(I);
        }), k = 0, T = X.length; k < T; k++)
          if (p = (h = X[k]).fontFamily, h.type.indexOf("text") !== -1 && !K[p] && P[p] && (K[p] = !0, h.styles))
            for (F in v = h.styles)
              for (U in b = v[F])
                !K[p = b[U].fontFamily] && P[p] && (K[p] = !0);
        for (var W in K)
          H += [`		@font-face {
`, "			font-family: '", W, `';
`, "			src: url('", P[W], `');
`, `		}
`].join("");
        return H && (H = ['	<style type="text/css">', `<![CDATA[
`, H, "]]>", `</style>
`].join("")), H;
      }, _setSVGObjects: function(h, p) {
        var v, b, F, U = this._objects;
        for (b = 0, F = U.length; b < F; b++)
          (v = U[b]).excludeFromExport || this._setSVGObject(h, v, p);
      }, _setSVGObject: function(h, p, v) {
        h.push(p.toSVG(v));
      }, _setSVGBgOverlayImage: function(h, p, v) {
        this[p] && !this[p].excludeFromExport && this[p].toSVG && h.push(this[p].toSVG(v));
      }, _setSVGBgOverlayColor: function(h, p) {
        var v = this[p + "Color"], b = this.viewportTransform, F = this.width, U = this.height;
        if (v)
          if (v.toLive) {
            var k = v.repeat, T = m.util.invertTransform(b), H = this[p + "Vpt"] ? m.util.matrixToSVG(T) : "";
            h.push('<rect transform="' + H + " translate(", F / 2, ",", U / 2, ')"', ' x="', v.offsetX - F / 2, '" y="', v.offsetY - U / 2, '" ', 'width="', k === "repeat-y" || k === "no-repeat" ? v.source.width : F, '" height="', k === "repeat-x" || k === "no-repeat" ? v.source.height : U, '" fill="url(#SVGID_' + v.id + ')"', `></rect>
`);
          } else
            h.push('<rect x="0" y="0" width="100%" height="100%" ', 'fill="', v, '"', `></rect>
`);
      }, sendToBack: function(h) {
        if (!h)
          return this;
        var p, v, b, F = this._activeObject;
        if (h === F && h.type === "activeSelection")
          for (p = (b = F._objects).length; p--; )
            v = b[p], c(this._objects, v), this._objects.unshift(v);
        else
          c(this._objects, h), this._objects.unshift(h);
        return this.renderOnAddRemove && this.requestRenderAll(), this;
      }, bringToFront: function(h) {
        if (!h)
          return this;
        var p, v, b, F = this._activeObject;
        if (h === F && h.type === "activeSelection")
          for (b = F._objects, p = 0; p < b.length; p++)
            v = b[p], c(this._objects, v), this._objects.push(v);
        else
          c(this._objects, h), this._objects.push(h);
        return this.renderOnAddRemove && this.requestRenderAll(), this;
      }, sendBackwards: function(h, p) {
        if (!h)
          return this;
        var v, b, F, U, k, T = this._activeObject, H = 0;
        if (h === T && h.type === "activeSelection")
          for (k = T._objects, v = 0; v < k.length; v++)
            b = k[v], (F = this._objects.indexOf(b)) > 0 + H && (U = F - 1, c(this._objects, b), this._objects.splice(U, 0, b)), H++;
        else
          (F = this._objects.indexOf(h)) !== 0 && (U = this._findNewLowerIndex(h, F, p), c(this._objects, h), this._objects.splice(U, 0, h));
        return this.renderOnAddRemove && this.requestRenderAll(), this;
      }, _findNewLowerIndex: function(h, p, v) {
        var b, F;
        if (v) {
          for (b = p, F = p - 1; F >= 0; --F)
            if (h.intersectsWithObject(this._objects[F]) || h.isContainedWithinObject(this._objects[F]) || this._objects[F].isContainedWithinObject(h)) {
              b = F;
              break;
            }
        } else
          b = p - 1;
        return b;
      }, bringForward: function(h, p) {
        if (!h)
          return this;
        var v, b, F, U, k, T = this._activeObject, H = 0;
        if (h === T && h.type === "activeSelection")
          for (v = (k = T._objects).length; v--; )
            b = k[v], (F = this._objects.indexOf(b)) < this._objects.length - 1 - H && (U = F + 1, c(this._objects, b), this._objects.splice(U, 0, b)), H++;
        else
          (F = this._objects.indexOf(h)) !== this._objects.length - 1 && (U = this._findNewUpperIndex(h, F, p), c(this._objects, h), this._objects.splice(U, 0, h));
        return this.renderOnAddRemove && this.requestRenderAll(), this;
      }, _findNewUpperIndex: function(h, p, v) {
        var b, F, U;
        if (v) {
          for (b = p, F = p + 1, U = this._objects.length; F < U; ++F)
            if (h.intersectsWithObject(this._objects[F]) || h.isContainedWithinObject(this._objects[F]) || this._objects[F].isContainedWithinObject(h)) {
              b = F;
              break;
            }
        } else
          b = p + 1;
        return b;
      }, moveTo: function(h, p) {
        return c(this._objects, h), this._objects.splice(p, 0, h), this.renderOnAddRemove && this.requestRenderAll();
      }, dispose: function() {
        return this.isRendering && (m.util.cancelAnimFrame(this.isRendering), this.isRendering = 0), this.forEachObject(function(h) {
          h.dispose && h.dispose();
        }), this._objects = [], this.backgroundImage && this.backgroundImage.dispose && this.backgroundImage.dispose(), this.backgroundImage = null, this.overlayImage && this.overlayImage.dispose && this.overlayImage.dispose(), this.overlayImage = null, this._iTextInstances = null, this.contextContainer = null, this.lowerCanvasEl.classList.remove("lower-canvas"), m.util.setStyle(this.lowerCanvasEl, this._originalCanvasStyle), delete this._originalCanvasStyle, this.lowerCanvasEl.setAttribute("width", this.width), this.lowerCanvasEl.setAttribute("height", this.height), m.util.cleanUpJsdomNode(this.lowerCanvasEl), this.lowerCanvasEl = void 0, this;
      }, toString: function() {
        return "#<fabric.Canvas (" + this.complexity() + "): { objects: " + this._objects.length + " }>";
      } }), d(m.StaticCanvas.prototype, m.Observable), d(m.StaticCanvas.prototype, m.Collection), d(m.StaticCanvas.prototype, m.DataURLExporter), d(m.StaticCanvas, { EMPTY_JSON: '{"objects": [], "background": "white"}', supports: function(h) {
        var p = u();
        if (!p || !p.getContext)
          return null;
        var v = p.getContext("2d");
        return v && h === "setLineDash" ? v.setLineDash !== void 0 : null;
      } }), m.StaticCanvas.prototype.toJSON = m.StaticCanvas.prototype.toObject, m.isLikelyNode && (m.StaticCanvas.prototype.createPNGStream = function() {
        var h = s(this.lowerCanvasEl);
        return h && h.createPNGStream();
      }, m.StaticCanvas.prototype.createJPEGStream = function(h) {
        var p = s(this.lowerCanvasEl);
        return p && p.createJPEGStream(h);
      });
    }
  }(), m.BaseBrush = m.util.createClass({ color: "rgb(0, 0, 0)", width: 1, shadow: null, strokeLineCap: "round", strokeLineJoin: "round", strokeMiterLimit: 10, strokeDashArray: null, limitedToCanvasSize: !1, _setBrushStyles: function(d) {
    d.strokeStyle = this.color, d.lineWidth = this.width, d.lineCap = this.strokeLineCap, d.miterLimit = this.strokeMiterLimit, d.lineJoin = this.strokeLineJoin, d.setLineDash(this.strokeDashArray || []);
  }, _saveAndTransform: function(d) {
    var o = this.canvas.viewportTransform;
    d.save(), d.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
  }, _setShadow: function() {
    if (this.shadow) {
      var d = this.canvas, o = this.shadow, c = d.contextTop, g = d.getZoom();
      d && d._isRetinaScaling() && (g *= m.devicePixelRatio), c.shadowColor = o.color, c.shadowBlur = o.blur * g, c.shadowOffsetX = o.offsetX * g, c.shadowOffsetY = o.offsetY * g;
    }
  }, needsFullRender: function() {
    return new m.Color(this.color).getAlpha() < 1 || !!this.shadow;
  }, _resetShadow: function() {
    var d = this.canvas.contextTop;
    d.shadowColor = "", d.shadowBlur = d.shadowOffsetX = d.shadowOffsetY = 0;
  }, _isOutSideCanvas: function(d) {
    return d.x < 0 || d.x > this.canvas.getWidth() || d.y < 0 || d.y > this.canvas.getHeight();
  } }), m.PencilBrush = m.util.createClass(m.BaseBrush, { decimate: 0.4, drawStraightLine: !1, straightLineKey: "shiftKey", initialize: function(d) {
    this.canvas = d, this._points = [];
  }, needsFullRender: function() {
    return this.callSuper("needsFullRender") || this._hasStraightLine;
  }, _drawSegment: function(d, o, c) {
    var g = o.midPointFrom(c);
    return d.quadraticCurveTo(o.x, o.y, g.x, g.y), g;
  }, onMouseDown: function(d, o) {
    this.canvas._isMainEvent(o.e) && (this.drawStraightLine = o.e[this.straightLineKey], this._prepareForDrawing(d), this._captureDrawingPath(d), this._render());
  }, onMouseMove: function(d, o) {
    if (this.canvas._isMainEvent(o.e) && (this.drawStraightLine = o.e[this.straightLineKey], (this.limitedToCanvasSize !== !0 || !this._isOutSideCanvas(d)) && this._captureDrawingPath(d) && this._points.length > 1))
      if (this.needsFullRender())
        this.canvas.clearContext(this.canvas.contextTop), this._render();
      else {
        var c = this._points, g = c.length, i = this.canvas.contextTop;
        this._saveAndTransform(i), this.oldEnd && (i.beginPath(), i.moveTo(this.oldEnd.x, this.oldEnd.y)), this.oldEnd = this._drawSegment(i, c[g - 2], c[g - 1], !0), i.stroke(), i.restore();
      }
  }, onMouseUp: function(d) {
    return !this.canvas._isMainEvent(d.e) || (this.drawStraightLine = !1, this.oldEnd = void 0, this._finalizeAndAddPath(), !1);
  }, _prepareForDrawing: function(d) {
    var o = new m.Point(d.x, d.y);
    this._reset(), this._addPoint(o), this.canvas.contextTop.moveTo(o.x, o.y);
  }, _addPoint: function(d) {
    return !(this._points.length > 1 && d.eq(this._points[this._points.length - 1]) || (this.drawStraightLine && this._points.length > 1 && (this._hasStraightLine = !0, this._points.pop()), this._points.push(d), 0));
  }, _reset: function() {
    this._points = [], this._setBrushStyles(this.canvas.contextTop), this._setShadow(), this._hasStraightLine = !1;
  }, _captureDrawingPath: function(d) {
    var o = new m.Point(d.x, d.y);
    return this._addPoint(o);
  }, _render: function(d) {
    var o, c, g = this._points[0], i = this._points[1];
    if (d = d || this.canvas.contextTop, this._saveAndTransform(d), d.beginPath(), this._points.length === 2 && g.x === i.x && g.y === i.y) {
      var n = this.width / 1e3;
      g = new m.Point(g.x, g.y), i = new m.Point(i.x, i.y), g.x -= n, i.x += n;
    }
    for (d.moveTo(g.x, g.y), o = 1, c = this._points.length; o < c; o++)
      this._drawSegment(d, g, i), g = this._points[o], i = this._points[o + 1];
    d.lineTo(g.x, g.y), d.stroke(), d.restore();
  }, convertPointsToSVGPath: function(d) {
    var o = this.width / 1e3;
    return m.util.getSmoothPathFromPoints(d, o);
  }, _isEmptySVGPath: function(d) {
    return m.util.joinPath(d) === "M 0 0 Q 0 0 0 0 L 0 0";
  }, createPath: function(d) {
    var o = new m.Path(d, { fill: null, stroke: this.color, strokeWidth: this.width, strokeLineCap: this.strokeLineCap, strokeMiterLimit: this.strokeMiterLimit, strokeLineJoin: this.strokeLineJoin, strokeDashArray: this.strokeDashArray });
    return this.shadow && (this.shadow.affectStroke = !0, o.shadow = new m.Shadow(this.shadow)), o;
  }, decimatePoints: function(d, o) {
    if (d.length <= 2)
      return d;
    var c, g = this.canvas.getZoom(), i = Math.pow(o / g, 2), n = d.length - 1, s = d[0], u = [s];
    for (c = 1; c < n - 1; c++)
      Math.pow(s.x - d[c].x, 2) + Math.pow(s.y - d[c].y, 2) >= i && (s = d[c], u.push(s));
    return u.push(d[n]), u;
  }, _finalizeAndAddPath: function() {
    this.canvas.contextTop.closePath(), this.decimate && (this._points = this.decimatePoints(this._points, this.decimate));
    var d = this.convertPointsToSVGPath(this._points);
    if (this._isEmptySVGPath(d))
      this.canvas.requestRenderAll();
    else {
      var o = this.createPath(d);
      this.canvas.clearContext(this.canvas.contextTop), this.canvas.fire("before:path:created", { path: o }), this.canvas.add(o), this.canvas.requestRenderAll(), o.setCoords(), this._resetShadow(), this.canvas.fire("path:created", { path: o });
    }
  } }), m.CircleBrush = m.util.createClass(m.BaseBrush, { width: 10, initialize: function(d) {
    this.canvas = d, this.points = [];
  }, drawDot: function(d) {
    var o = this.addPoint(d), c = this.canvas.contextTop;
    this._saveAndTransform(c), this.dot(c, o), c.restore();
  }, dot: function(d, o) {
    d.fillStyle = o.fill, d.beginPath(), d.arc(o.x, o.y, o.radius, 0, 2 * Math.PI, !1), d.closePath(), d.fill();
  }, onMouseDown: function(d) {
    this.points.length = 0, this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.drawDot(d);
  }, _render: function() {
    var d, o, c = this.canvas.contextTop, g = this.points;
    for (this._saveAndTransform(c), d = 0, o = g.length; d < o; d++)
      this.dot(c, g[d]);
    c.restore();
  }, onMouseMove: function(d) {
    this.limitedToCanvasSize === !0 && this._isOutSideCanvas(d) || (this.needsFullRender() ? (this.canvas.clearContext(this.canvas.contextTop), this.addPoint(d), this._render()) : this.drawDot(d));
  }, onMouseUp: function() {
    var d, o, c = this.canvas.renderOnAddRemove;
    this.canvas.renderOnAddRemove = !1;
    var g = [];
    for (d = 0, o = this.points.length; d < o; d++) {
      var i = this.points[d], n = new m.Circle({ radius: i.radius, left: i.x, top: i.y, originX: "center", originY: "center", fill: i.fill });
      this.shadow && (n.shadow = new m.Shadow(this.shadow)), g.push(n);
    }
    var s = new m.Group(g);
    s.canvas = this.canvas, this.canvas.fire("before:path:created", { path: s }), this.canvas.add(s), this.canvas.fire("path:created", { path: s }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = c, this.canvas.requestRenderAll();
  }, addPoint: function(d) {
    var o = new m.Point(d.x, d.y), c = m.util.getRandomInt(Math.max(0, this.width - 20), this.width + 20) / 2, g = new m.Color(this.color).setAlpha(m.util.getRandomInt(0, 100) / 100).toRgba();
    return o.radius = c, o.fill = g, this.points.push(o), o;
  } }), m.SprayBrush = m.util.createClass(m.BaseBrush, { width: 10, density: 20, dotWidth: 1, dotWidthVariance: 1, randomOpacity: !1, optimizeOverlapping: !0, initialize: function(d) {
    this.canvas = d, this.sprayChunks = [];
  }, onMouseDown: function(d) {
    this.sprayChunks.length = 0, this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.addSprayChunk(d), this.render(this.sprayChunkPoints);
  }, onMouseMove: function(d) {
    this.limitedToCanvasSize === !0 && this._isOutSideCanvas(d) || (this.addSprayChunk(d), this.render(this.sprayChunkPoints));
  }, onMouseUp: function() {
    var d = this.canvas.renderOnAddRemove;
    this.canvas.renderOnAddRemove = !1;
    for (var o = [], c = 0, g = this.sprayChunks.length; c < g; c++)
      for (var i = this.sprayChunks[c], n = 0, s = i.length; n < s; n++) {
        var u = new m.Rect({ width: i[n].width, height: i[n].width, left: i[n].x + 1, top: i[n].y + 1, originX: "center", originY: "center", fill: this.color });
        o.push(u);
      }
    this.optimizeOverlapping && (o = this._getOptimizedRects(o));
    var l = new m.Group(o);
    this.shadow && l.set("shadow", new m.Shadow(this.shadow)), this.canvas.fire("before:path:created", { path: l }), this.canvas.add(l), this.canvas.fire("path:created", { path: l }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = d, this.canvas.requestRenderAll();
  }, _getOptimizedRects: function(d) {
    var o, c, g, i = {};
    for (c = 0, g = d.length; c < g; c++)
      i[o = d[c].left + "" + d[c].top] || (i[o] = d[c]);
    var n = [];
    for (o in i)
      n.push(i[o]);
    return n;
  }, render: function(d) {
    var o, c, g = this.canvas.contextTop;
    for (g.fillStyle = this.color, this._saveAndTransform(g), o = 0, c = d.length; o < c; o++) {
      var i = d[o];
      i.opacity !== void 0 && (g.globalAlpha = i.opacity), g.fillRect(i.x, i.y, i.width, i.width);
    }
    g.restore();
  }, _render: function() {
    var d, o, c = this.canvas.contextTop;
    for (c.fillStyle = this.color, this._saveAndTransform(c), d = 0, o = this.sprayChunks.length; d < o; d++)
      this.render(this.sprayChunks[d]);
    c.restore();
  }, addSprayChunk: function(d) {
    this.sprayChunkPoints = [];
    var o, c, g, i, n = this.width / 2;
    for (i = 0; i < this.density; i++) {
      o = m.util.getRandomInt(d.x - n, d.x + n), c = m.util.getRandomInt(d.y - n, d.y + n), g = this.dotWidthVariance ? m.util.getRandomInt(Math.max(1, this.dotWidth - this.dotWidthVariance), this.dotWidth + this.dotWidthVariance) : this.dotWidth;
      var s = new m.Point(o, c);
      s.width = g, this.randomOpacity && (s.opacity = m.util.getRandomInt(0, 100) / 100), this.sprayChunkPoints.push(s);
    }
    this.sprayChunks.push(this.sprayChunkPoints);
  } }), m.PatternBrush = m.util.createClass(m.PencilBrush, { getPatternSrc: function() {
    var d = m.util.createCanvasElement(), o = d.getContext("2d");
    return d.width = d.height = 25, o.fillStyle = this.color, o.beginPath(), o.arc(10, 10, 10, 0, 2 * Math.PI, !1), o.closePath(), o.fill(), d;
  }, getPatternSrcFunction: function() {
    return String(this.getPatternSrc).replace("this.color", '"' + this.color + '"');
  }, getPattern: function(d) {
    return d.createPattern(this.source || this.getPatternSrc(), "repeat");
  }, _setBrushStyles: function(d) {
    this.callSuper("_setBrushStyles", d), d.strokeStyle = this.getPattern(d);
  }, createPath: function(d) {
    var o = this.callSuper("createPath", d), c = o._getLeftTopCoords().scalarAdd(o.strokeWidth / 2);
    return o.stroke = new m.Pattern({ source: this.source || this.getPatternSrcFunction(), offsetX: -c.x, offsetY: -c.y }), o;
  } }), function() {
    var d = m.util.getPointer, o = m.util.degreesToRadians, c = m.util.isTouchEvent;
    for (var g in m.Canvas = m.util.createClass(m.StaticCanvas, { initialize: function(i, n) {
      n || (n = {}), this.renderAndResetBound = this.renderAndReset.bind(this), this.requestRenderAllBound = this.requestRenderAll.bind(this), this._initStatic(i, n), this._initInteractive(), this._createCacheCanvas();
    }, uniformScaling: !0, uniScaleKey: "shiftKey", centeredScaling: !1, centeredRotation: !1, centeredKey: "altKey", altActionKey: "shiftKey", interactive: !0, selection: !0, selectionKey: "shiftKey", altSelectionKey: null, selectionColor: "rgba(100, 100, 255, 0.3)", selectionDashArray: [], selectionBorderColor: "rgba(255, 255, 255, 0.3)", selectionLineWidth: 1, selectionFullyContained: !1, hoverCursor: "move", moveCursor: "move", defaultCursor: "default", freeDrawingCursor: "crosshair", notAllowedCursor: "not-allowed", containerClass: "canvas-container", perPixelTargetFind: !1, targetFindTolerance: 0, skipTargetFind: !1, isDrawingMode: !1, preserveObjectStacking: !1, snapAngle: 0, snapThreshold: null, stopContextMenu: !1, fireRightClick: !1, fireMiddleClick: !1, targets: [], enablePointerEvents: !1, _hoveredTarget: null, _hoveredTargets: [], _initInteractive: function() {
      this._currentTransform = null, this._groupSelector = null, this._initWrapperElement(), this._createUpperCanvas(), this._initEventListeners(), this._initRetinaScaling(), this.freeDrawingBrush = m.PencilBrush && new m.PencilBrush(this), this.calcOffset();
    }, _chooseObjectsToRender: function() {
      var i, n, s, u = this.getActiveObjects();
      if (u.length > 0 && !this.preserveObjectStacking) {
        n = [], s = [];
        for (var l = 0, h = this._objects.length; l < h; l++)
          i = this._objects[l], u.indexOf(i) === -1 ? n.push(i) : s.push(i);
        u.length > 1 && (this._activeObject._objects = s), n.push.apply(n, s);
      } else
        n = this._objects;
      return n;
    }, renderAll: function() {
      !this.contextTopDirty || this._groupSelector || this.isDrawingMode || (this.clearContext(this.contextTop), this.contextTopDirty = !1), this.hasLostContext && (this.renderTopLayer(this.contextTop), this.hasLostContext = !1);
      var i = this.contextContainer;
      return this.renderCanvas(i, this._chooseObjectsToRender()), this;
    }, renderTopLayer: function(i) {
      i.save(), this.isDrawingMode && this._isCurrentlyDrawing && (this.freeDrawingBrush && this.freeDrawingBrush._render(), this.contextTopDirty = !0), this.selection && this._groupSelector && (this._drawSelection(i), this.contextTopDirty = !0), i.restore();
    }, renderTop: function() {
      var i = this.contextTop;
      return this.clearContext(i), this.renderTopLayer(i), this.fire("after:render"), this;
    }, _normalizePointer: function(i, n) {
      var s = i.calcTransformMatrix(), u = m.util.invertTransform(s), l = this.restorePointerVpt(n);
      return m.util.transformPoint(l, u);
    }, isTargetTransparent: function(i, n, s) {
      if (i.shouldCache() && i._cacheCanvas && i !== this._activeObject) {
        var u = this._normalizePointer(i, { x: n, y: s }), l = Math.max(i.cacheTranslationX + u.x * i.zoomX, 0), h = Math.max(i.cacheTranslationY + u.y * i.zoomY, 0);
        return m.util.isTransparent(i._cacheContext, Math.round(l), Math.round(h), this.targetFindTolerance);
      }
      var p = this.contextCache, v = i.selectionBackgroundColor, b = this.viewportTransform;
      return i.selectionBackgroundColor = "", this.clearContext(p), p.save(), p.transform(b[0], b[1], b[2], b[3], b[4], b[5]), i.render(p), p.restore(), i.selectionBackgroundColor = v, m.util.isTransparent(p, n, s, this.targetFindTolerance);
    }, _isSelectionKeyPressed: function(i) {
      return Array.isArray(this.selectionKey) ? !!this.selectionKey.find(function(n) {
        return i[n] === !0;
      }) : i[this.selectionKey];
    }, _shouldClearSelection: function(i, n) {
      var s = this.getActiveObjects(), u = this._activeObject;
      return !n || n && u && s.length > 1 && s.indexOf(n) === -1 && u !== n && !this._isSelectionKeyPressed(i) || n && !n.evented || n && !n.selectable && u && u !== n;
    }, _shouldCenterTransform: function(i, n, s) {
      var u;
      if (i)
        return n === "scale" || n === "scaleX" || n === "scaleY" || n === "resizing" ? u = this.centeredScaling || i.centeredScaling : n === "rotate" && (u = this.centeredRotation || i.centeredRotation), u ? !s : s;
    }, _getOriginFromCorner: function(i, n) {
      var s = { x: i.originX, y: i.originY };
      return n === "ml" || n === "tl" || n === "bl" ? s.x = "right" : n !== "mr" && n !== "tr" && n !== "br" || (s.x = "left"), n === "tl" || n === "mt" || n === "tr" ? s.y = "bottom" : n !== "bl" && n !== "mb" && n !== "br" || (s.y = "top"), s;
    }, _getActionFromCorner: function(i, n, s, u) {
      if (!n || !i)
        return "drag";
      var l = u.controls[n];
      return l.getActionName(s, l, u);
    }, _setupCurrentTransform: function(i, n, s) {
      if (n) {
        var u = this.getPointer(i), l = n.__corner, h = n.controls[l], p = s && l ? h.getActionHandler(i, n, h) : m.controlsUtils.dragHandler, v = this._getActionFromCorner(s, l, i, n), b = this._getOriginFromCorner(n, l), F = i[this.centeredKey], U = { target: n, action: v, actionHandler: p, corner: l, scaleX: n.scaleX, scaleY: n.scaleY, skewX: n.skewX, skewY: n.skewY, offsetX: u.x - n.left, offsetY: u.y - n.top, originX: b.x, originY: b.y, ex: u.x, ey: u.y, lastX: u.x, lastY: u.y, theta: o(n.angle), width: n.width * n.scaleX, shiftKey: i.shiftKey, altKey: F, original: m.util.saveObjectTransform(n) };
        this._shouldCenterTransform(n, v, F) && (U.originX = "center", U.originY = "center"), U.original.originX = b.x, U.original.originY = b.y, this._currentTransform = U, this._beforeTransform(i);
      }
    }, setCursor: function(i) {
      this.upperCanvasEl.style.cursor = i;
    }, _drawSelection: function(i) {
      var n = this._groupSelector, s = new m.Point(n.ex, n.ey), u = m.util.transformPoint(s, this.viewportTransform), l = new m.Point(n.ex + n.left, n.ey + n.top), h = m.util.transformPoint(l, this.viewportTransform), p = Math.min(u.x, h.x), v = Math.min(u.y, h.y), b = Math.max(u.x, h.x), F = Math.max(u.y, h.y), U = this.selectionLineWidth / 2;
      this.selectionColor && (i.fillStyle = this.selectionColor, i.fillRect(p, v, b - p, F - v)), this.selectionLineWidth && this.selectionBorderColor && (i.lineWidth = this.selectionLineWidth, i.strokeStyle = this.selectionBorderColor, p += U, v += U, b -= U, F -= U, m.Object.prototype._setLineDash.call(this, i, this.selectionDashArray), i.strokeRect(p, v, b - p, F - v));
    }, findTarget: function(i, n) {
      if (!this.skipTargetFind) {
        var s, u, l = this.getPointer(i, !0), h = this._activeObject, p = this.getActiveObjects(), v = c(i), b = p.length > 1 && !n || p.length === 1;
        if (this.targets = [], b && h._findTargetCorner(l, v) || p.length > 1 && !n && h === this._searchPossibleTargets([h], l))
          return h;
        if (p.length === 1 && h === this._searchPossibleTargets([h], l)) {
          if (!this.preserveObjectStacking)
            return h;
          s = h, u = this.targets, this.targets = [];
        }
        var F = this._searchPossibleTargets(this._objects, l);
        return i[this.altSelectionKey] && F && s && F !== s && (F = s, this.targets = u), F;
      }
    }, _checkTarget: function(i, n, s) {
      if (n && n.visible && n.evented && n.containsPoint(i) && (!this.perPixelTargetFind && !n.perPixelTargetFind || n.isEditing || !this.isTargetTransparent(n, s.x, s.y)))
        return !0;
    }, _searchPossibleTargets: function(i, n) {
      for (var s, u, l = i.length; l--; ) {
        var h = i[l], p = h.group ? this._normalizePointer(h.group, n) : n;
        if (this._checkTarget(p, h, n)) {
          (s = i[l]).subTargetCheck && s instanceof m.Group && (u = this._searchPossibleTargets(s._objects, n)) && this.targets.push(u);
          break;
        }
      }
      return s;
    }, restorePointerVpt: function(i) {
      return m.util.transformPoint(i, m.util.invertTransform(this.viewportTransform));
    }, getPointer: function(i, n) {
      if (this._absolutePointer && !n)
        return this._absolutePointer;
      if (this._pointer && n)
        return this._pointer;
      var s, u = d(i), l = this.upperCanvasEl, h = l.getBoundingClientRect(), p = h.width || 0, v = h.height || 0;
      p && v || ("top" in h && "bottom" in h && (v = Math.abs(h.top - h.bottom)), "right" in h && "left" in h && (p = Math.abs(h.right - h.left))), this.calcOffset(), u.x = u.x - this._offset.left, u.y = u.y - this._offset.top, n || (u = this.restorePointerVpt(u));
      var b = this.getRetinaScaling();
      return b !== 1 && (u.x /= b, u.y /= b), s = p === 0 || v === 0 ? { width: 1, height: 1 } : { width: l.width / p, height: l.height / v }, { x: u.x * s.width, y: u.y * s.height };
    }, _createUpperCanvas: function() {
      var i = this.lowerCanvasEl.className.replace(/\s*lower-canvas\s*/, ""), n = this.lowerCanvasEl, s = this.upperCanvasEl;
      s ? s.className = "" : (s = this._createCanvasElement(), this.upperCanvasEl = s), m.util.addClass(s, "upper-canvas " + i), this.wrapperEl.appendChild(s), this._copyCanvasStyle(n, s), this._applyCanvasStyle(s), this.contextTop = s.getContext("2d");
    }, getTopContext: function() {
      return this.contextTop;
    }, _createCacheCanvas: function() {
      this.cacheCanvasEl = this._createCanvasElement(), this.cacheCanvasEl.setAttribute("width", this.width), this.cacheCanvasEl.setAttribute("height", this.height), this.contextCache = this.cacheCanvasEl.getContext("2d");
    }, _initWrapperElement: function() {
      this.wrapperEl = m.util.wrapElement(this.lowerCanvasEl, "div", { class: this.containerClass }), m.util.setStyle(this.wrapperEl, { width: this.width + "px", height: this.height + "px", position: "relative" }), m.util.makeElementUnselectable(this.wrapperEl);
    }, _applyCanvasStyle: function(i) {
      var n = this.width || i.width, s = this.height || i.height;
      m.util.setStyle(i, { position: "absolute", width: n + "px", height: s + "px", left: 0, top: 0, "touch-action": this.allowTouchScrolling ? "manipulation" : "none", "-ms-touch-action": this.allowTouchScrolling ? "manipulation" : "none" }), i.width = n, i.height = s, m.util.makeElementUnselectable(i);
    }, _copyCanvasStyle: function(i, n) {
      n.style.cssText = i.style.cssText;
    }, getSelectionContext: function() {
      return this.contextTop;
    }, getSelectionElement: function() {
      return this.upperCanvasEl;
    }, getActiveObject: function() {
      return this._activeObject;
    }, getActiveObjects: function() {
      var i = this._activeObject;
      return i ? i.type === "activeSelection" && i._objects ? i._objects.slice(0) : [i] : [];
    }, _onObjectRemoved: function(i) {
      i === this._activeObject && (this.fire("before:selection:cleared", { target: i }), this._discardActiveObject(), this.fire("selection:cleared", { target: i }), i.fire("deselected")), i === this._hoveredTarget && (this._hoveredTarget = null, this._hoveredTargets = []), this.callSuper("_onObjectRemoved", i);
    }, _fireSelectionEvents: function(i, n) {
      var s = !1, u = this.getActiveObjects(), l = [], h = [];
      i.forEach(function(p) {
        u.indexOf(p) === -1 && (s = !0, p.fire("deselected", { e: n, target: p }), h.push(p));
      }), u.forEach(function(p) {
        i.indexOf(p) === -1 && (s = !0, p.fire("selected", { e: n, target: p }), l.push(p));
      }), i.length > 0 && u.length > 0 ? s && this.fire("selection:updated", { e: n, selected: l, deselected: h }) : u.length > 0 ? this.fire("selection:created", { e: n, selected: l }) : i.length > 0 && this.fire("selection:cleared", { e: n, deselected: h });
    }, setActiveObject: function(i, n) {
      var s = this.getActiveObjects();
      return this._setActiveObject(i, n), this._fireSelectionEvents(s, n), this;
    }, _setActiveObject: function(i, n) {
      return this._activeObject !== i && !!this._discardActiveObject(n, i) && !i.onSelect({ e: n }) && (this._activeObject = i, !0);
    }, _discardActiveObject: function(i, n) {
      var s = this._activeObject;
      if (s) {
        if (s.onDeselect({ e: i, object: n }))
          return !1;
        this._activeObject = null;
      }
      return !0;
    }, discardActiveObject: function(i) {
      var n = this.getActiveObjects(), s = this.getActiveObject();
      return n.length && this.fire("before:selection:cleared", { target: s, e: i }), this._discardActiveObject(i), this._fireSelectionEvents(n, i), this;
    }, dispose: function() {
      var i = this.wrapperEl;
      return this.removeListeners(), i.removeChild(this.upperCanvasEl), i.removeChild(this.lowerCanvasEl), this.contextCache = null, this.contextTop = null, ["upperCanvasEl", "cacheCanvasEl"].forEach((function(n) {
        m.util.cleanUpJsdomNode(this[n]), this[n] = void 0;
      }).bind(this)), i.parentNode && i.parentNode.replaceChild(this.lowerCanvasEl, this.wrapperEl), delete this.wrapperEl, m.StaticCanvas.prototype.dispose.call(this), this;
    }, clear: function() {
      return this.discardActiveObject(), this.clearContext(this.contextTop), this.callSuper("clear");
    }, drawControls: function(i) {
      var n = this._activeObject;
      n && n._renderControls(i);
    }, _toObject: function(i, n, s) {
      var u = this._realizeGroupTransformOnObject(i), l = this.callSuper("_toObject", i, n, s);
      return this._unwindGroupTransformOnObject(i, u), l;
    }, _realizeGroupTransformOnObject: function(i) {
      if (i.group && i.group.type === "activeSelection" && this._activeObject === i.group) {
        var n = {};
        return ["angle", "flipX", "flipY", "left", "scaleX", "scaleY", "skewX", "skewY", "top"].forEach(function(s) {
          n[s] = i[s];
        }), m.util.addTransformToObject(i, this._activeObject.calcOwnMatrix()), n;
      }
      return null;
    }, _unwindGroupTransformOnObject: function(i, n) {
      n && i.set(n);
    }, _setSVGObject: function(i, n, s) {
      var u = this._realizeGroupTransformOnObject(n);
      this.callSuper("_setSVGObject", i, n, s), this._unwindGroupTransformOnObject(n, u);
    }, setViewportTransform: function(i) {
      this.renderOnAddRemove && this._activeObject && this._activeObject.isEditing && this._activeObject.clearContextTop(), m.StaticCanvas.prototype.setViewportTransform.call(this, i);
    } }), m.StaticCanvas)
      g !== "prototype" && (m.Canvas[g] = m.StaticCanvas[g]);
  }(), function() {
    var d = m.util.addListener, o = m.util.removeListener, c = { passive: !1 };
    function g(i, n) {
      return i.button && i.button === n - 1;
    }
    m.util.object.extend(m.Canvas.prototype, { mainTouchId: null, _initEventListeners: function() {
      this.removeListeners(), this._bindEvents(), this.addOrRemove(d, "add");
    }, _getEventPrefix: function() {
      return this.enablePointerEvents ? "pointer" : "mouse";
    }, addOrRemove: function(i, n) {
      var s = this.upperCanvasEl, u = this._getEventPrefix();
      i(m.window, "resize", this._onResize), i(s, u + "down", this._onMouseDown), i(s, u + "move", this._onMouseMove, c), i(s, u + "out", this._onMouseOut), i(s, u + "enter", this._onMouseEnter), i(s, "wheel", this._onMouseWheel), i(s, "contextmenu", this._onContextMenu), i(s, "dblclick", this._onDoubleClick), i(s, "dragover", this._onDragOver), i(s, "dragenter", this._onDragEnter), i(s, "dragleave", this._onDragLeave), i(s, "drop", this._onDrop), this.enablePointerEvents || i(s, "touchstart", this._onTouchStart, c), typeof eventjs < "u" && n in eventjs && (eventjs[n](s, "gesture", this._onGesture), eventjs[n](s, "drag", this._onDrag), eventjs[n](s, "orientation", this._onOrientationChange), eventjs[n](s, "shake", this._onShake), eventjs[n](s, "longpress", this._onLongPress));
    }, removeListeners: function() {
      this.addOrRemove(o, "remove");
      var i = this._getEventPrefix();
      o(m.document, i + "up", this._onMouseUp), o(m.document, "touchend", this._onTouchEnd, c), o(m.document, i + "move", this._onMouseMove, c), o(m.document, "touchmove", this._onMouseMove, c);
    }, _bindEvents: function() {
      this.eventsBound || (this._onMouseDown = this._onMouseDown.bind(this), this._onTouchStart = this._onTouchStart.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this._onMouseUp = this._onMouseUp.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._onResize = this._onResize.bind(this), this._onGesture = this._onGesture.bind(this), this._onDrag = this._onDrag.bind(this), this._onShake = this._onShake.bind(this), this._onLongPress = this._onLongPress.bind(this), this._onOrientationChange = this._onOrientationChange.bind(this), this._onMouseWheel = this._onMouseWheel.bind(this), this._onMouseOut = this._onMouseOut.bind(this), this._onMouseEnter = this._onMouseEnter.bind(this), this._onContextMenu = this._onContextMenu.bind(this), this._onDoubleClick = this._onDoubleClick.bind(this), this._onDragOver = this._onDragOver.bind(this), this._onDragEnter = this._simpleEventHandler.bind(this, "dragenter"), this._onDragLeave = this._simpleEventHandler.bind(this, "dragleave"), this._onDrop = this._onDrop.bind(this), this.eventsBound = !0);
    }, _onGesture: function(i, n) {
      this.__onTransformGesture && this.__onTransformGesture(i, n);
    }, _onDrag: function(i, n) {
      this.__onDrag && this.__onDrag(i, n);
    }, _onMouseWheel: function(i) {
      this.__onMouseWheel(i);
    }, _onMouseOut: function(i) {
      var n = this._hoveredTarget;
      this.fire("mouse:out", { target: n, e: i }), this._hoveredTarget = null, n && n.fire("mouseout", { e: i });
      var s = this;
      this._hoveredTargets.forEach(function(u) {
        s.fire("mouse:out", { target: n, e: i }), u && n.fire("mouseout", { e: i });
      }), this._hoveredTargets = [];
    }, _onMouseEnter: function(i) {
      this._currentTransform || this.findTarget(i) || (this.fire("mouse:over", { target: null, e: i }), this._hoveredTarget = null, this._hoveredTargets = []);
    }, _onOrientationChange: function(i, n) {
      this.__onOrientationChange && this.__onOrientationChange(i, n);
    }, _onShake: function(i, n) {
      this.__onShake && this.__onShake(i, n);
    }, _onLongPress: function(i, n) {
      this.__onLongPress && this.__onLongPress(i, n);
    }, _onDragOver: function(i) {
      i.preventDefault();
      var n = this._simpleEventHandler("dragover", i);
      this._fireEnterLeaveEvents(n, i);
    }, _onDrop: function(i) {
      return this._simpleEventHandler("drop:before", i), this._simpleEventHandler("drop", i);
    }, _onContextMenu: function(i) {
      return this.stopContextMenu && (i.stopPropagation(), i.preventDefault()), !1;
    }, _onDoubleClick: function(i) {
      this._cacheTransformEventData(i), this._handleEvent(i, "dblclick"), this._resetTransformEventData(i);
    }, getPointerId: function(i) {
      var n = i.changedTouches;
      return n ? n[0] && n[0].identifier : this.enablePointerEvents ? i.pointerId : -1;
    }, _isMainEvent: function(i) {
      return i.isPrimary === !0 || i.isPrimary !== !1 && (i.type === "touchend" && i.touches.length === 0 || !i.changedTouches || i.changedTouches[0].identifier === this.mainTouchId);
    }, _onTouchStart: function(i) {
      i.preventDefault(), this.mainTouchId === null && (this.mainTouchId = this.getPointerId(i)), this.__onMouseDown(i), this._resetTransformEventData();
      var n = this.upperCanvasEl, s = this._getEventPrefix();
      d(m.document, "touchend", this._onTouchEnd, c), d(m.document, "touchmove", this._onMouseMove, c), o(n, s + "down", this._onMouseDown);
    }, _onMouseDown: function(i) {
      this.__onMouseDown(i), this._resetTransformEventData();
      var n = this.upperCanvasEl, s = this._getEventPrefix();
      o(n, s + "move", this._onMouseMove, c), d(m.document, s + "up", this._onMouseUp), d(m.document, s + "move", this._onMouseMove, c);
    }, _onTouchEnd: function(i) {
      if (!(i.touches.length > 0)) {
        this.__onMouseUp(i), this._resetTransformEventData(), this.mainTouchId = null;
        var n = this._getEventPrefix();
        o(m.document, "touchend", this._onTouchEnd, c), o(m.document, "touchmove", this._onMouseMove, c);
        var s = this;
        this._willAddMouseDown && clearTimeout(this._willAddMouseDown), this._willAddMouseDown = setTimeout(function() {
          d(s.upperCanvasEl, n + "down", s._onMouseDown), s._willAddMouseDown = 0;
        }, 400);
      }
    }, _onMouseUp: function(i) {
      this.__onMouseUp(i), this._resetTransformEventData();
      var n = this.upperCanvasEl, s = this._getEventPrefix();
      this._isMainEvent(i) && (o(m.document, s + "up", this._onMouseUp), o(m.document, s + "move", this._onMouseMove, c), d(n, s + "move", this._onMouseMove, c));
    }, _onMouseMove: function(i) {
      !this.allowTouchScrolling && i.preventDefault && i.preventDefault(), this.__onMouseMove(i);
    }, _onResize: function() {
      this.calcOffset();
    }, _shouldRender: function(i) {
      var n = this._activeObject;
      return !!(!!n != !!i || n && i && n !== i) || (n && n.isEditing, !1);
    }, __onMouseUp: function(i) {
      var n, s = this._currentTransform, u = this._groupSelector, l = !1, h = !u || u.left === 0 && u.top === 0;
      if (this._cacheTransformEventData(i), n = this._target, this._handleEvent(i, "up:before"), g(i, 3))
        this.fireRightClick && this._handleEvent(i, "up", 3, h);
      else {
        if (g(i, 2))
          return this.fireMiddleClick && this._handleEvent(i, "up", 2, h), void this._resetTransformEventData();
        if (this.isDrawingMode && this._isCurrentlyDrawing)
          this._onMouseUpInDrawingMode(i);
        else if (this._isMainEvent(i)) {
          if (s && (this._finalizeCurrentTransform(i), l = s.actionPerformed), !h) {
            var p = n === this._activeObject;
            this._maybeGroupObjects(i), l || (l = this._shouldRender(n) || !p && n === this._activeObject);
          }
          var v, b;
          if (n) {
            if (v = n._findTargetCorner(this.getPointer(i, !0), m.util.isTouchEvent(i)), n.selectable && n !== this._activeObject && n.activeOn === "up")
              this.setActiveObject(n, i), l = !0;
            else {
              var F = n.controls[v], U = F && F.getMouseUpHandler(i, n, F);
              U && U(i, s, (b = this.getPointer(i)).x, b.y);
            }
            n.isMoving = !1;
          }
          if (s && (s.target !== n || s.corner !== v)) {
            var k = s.target && s.target.controls[s.corner], T = k && k.getMouseUpHandler(i, n, F);
            b = b || this.getPointer(i), T && T(i, s, b.x, b.y);
          }
          this._setCursorFromEvent(i, n), this._handleEvent(i, "up", 1, h), this._groupSelector = null, this._currentTransform = null, n && (n.__corner = 0), l ? this.requestRenderAll() : h || this.renderTop();
        }
      }
    }, _simpleEventHandler: function(i, n) {
      var s = this.findTarget(n), u = this.targets, l = { e: n, target: s, subTargets: u };
      if (this.fire(i, l), s && s.fire(i, l), !u)
        return s;
      for (var h = 0; h < u.length; h++)
        u[h].fire(i, l);
      return s;
    }, _handleEvent: function(i, n, s, u) {
      var l = this._target, h = this.targets || [], p = { e: i, target: l, subTargets: h, button: s || 1, isClick: u || !1, pointer: this._pointer, absolutePointer: this._absolutePointer, transform: this._currentTransform };
      n === "up" && (p.currentTarget = this.findTarget(i), p.currentSubTargets = this.targets), this.fire("mouse:" + n, p), l && l.fire("mouse" + n, p);
      for (var v = 0; v < h.length; v++)
        h[v].fire("mouse" + n, p);
    }, _finalizeCurrentTransform: function(i) {
      var n = this._currentTransform, s = n.target, u = { e: i, target: s, transform: n, action: n.action };
      s._scaling && (s._scaling = !1), s.setCoords(), (n.actionPerformed || this.stateful && s.hasStateChanged()) && this._fire("modified", u);
    }, _onMouseDownInDrawingMode: function(i) {
      this._isCurrentlyDrawing = !0, this.getActiveObject() && this.discardActiveObject(i).requestRenderAll();
      var n = this.getPointer(i);
      this.freeDrawingBrush.onMouseDown(n, { e: i, pointer: n }), this._handleEvent(i, "down");
    }, _onMouseMoveInDrawingMode: function(i) {
      if (this._isCurrentlyDrawing) {
        var n = this.getPointer(i);
        this.freeDrawingBrush.onMouseMove(n, { e: i, pointer: n });
      }
      this.setCursor(this.freeDrawingCursor), this._handleEvent(i, "move");
    }, _onMouseUpInDrawingMode: function(i) {
      var n = this.getPointer(i);
      this._isCurrentlyDrawing = this.freeDrawingBrush.onMouseUp({ e: i, pointer: n }), this._handleEvent(i, "up");
    }, __onMouseDown: function(i) {
      this._cacheTransformEventData(i), this._handleEvent(i, "down:before");
      var n = this._target;
      if (g(i, 3))
        this.fireRightClick && this._handleEvent(i, "down", 3);
      else if (g(i, 2))
        this.fireMiddleClick && this._handleEvent(i, "down", 2);
      else if (this.isDrawingMode)
        this._onMouseDownInDrawingMode(i);
      else if (this._isMainEvent(i) && !this._currentTransform) {
        var s = this._pointer;
        this._previousPointer = s;
        var u = this._shouldRender(n), l = this._shouldGroup(i, n);
        if (this._shouldClearSelection(i, n) ? this.discardActiveObject(i) : l && (this._handleGrouping(i, n), n = this._activeObject), !this.selection || n && (n.selectable || n.isEditing || n === this._activeObject) || (this._groupSelector = { ex: this._absolutePointer.x, ey: this._absolutePointer.y, top: 0, left: 0 }), n) {
          var h = n === this._activeObject;
          n.selectable && n.activeOn === "down" && this.setActiveObject(n, i);
          var p = n._findTargetCorner(this.getPointer(i, !0), m.util.isTouchEvent(i));
          if (n.__corner = p, n === this._activeObject && (p || !l)) {
            this._setupCurrentTransform(i, n, h);
            var v = n.controls[p], b = (s = this.getPointer(i), v && v.getMouseDownHandler(i, n, v));
            b && b(i, this._currentTransform, s.x, s.y);
          }
        }
        this._handleEvent(i, "down"), (u || l) && this.requestRenderAll();
      }
    }, _resetTransformEventData: function() {
      this._target = null, this._pointer = null, this._absolutePointer = null;
    }, _cacheTransformEventData: function(i) {
      this._resetTransformEventData(), this._pointer = this.getPointer(i, !0), this._absolutePointer = this.restorePointerVpt(this._pointer), this._target = this._currentTransform ? this._currentTransform.target : this.findTarget(i) || null;
    }, _beforeTransform: function(i) {
      var n = this._currentTransform;
      this.stateful && n.target.saveState(), this.fire("before:transform", { e: i, transform: n });
    }, __onMouseMove: function(i) {
      var n, s;
      if (this._handleEvent(i, "move:before"), this._cacheTransformEventData(i), this.isDrawingMode)
        this._onMouseMoveInDrawingMode(i);
      else if (this._isMainEvent(i)) {
        var u = this._groupSelector;
        u ? (s = this._absolutePointer, u.left = s.x - u.ex, u.top = s.y - u.ey, this.renderTop()) : this._currentTransform ? this._transformObject(i) : (n = this.findTarget(i) || null, this._setCursorFromEvent(i, n), this._fireOverOutEvents(n, i)), this._handleEvent(i, "move"), this._resetTransformEventData();
      }
    }, _fireOverOutEvents: function(i, n) {
      var s = this._hoveredTarget, u = this._hoveredTargets, l = this.targets, h = Math.max(u.length, l.length);
      this.fireSyntheticInOutEvents(i, n, { oldTarget: s, evtOut: "mouseout", canvasEvtOut: "mouse:out", evtIn: "mouseover", canvasEvtIn: "mouse:over" });
      for (var p = 0; p < h; p++)
        this.fireSyntheticInOutEvents(l[p], n, { oldTarget: u[p], evtOut: "mouseout", evtIn: "mouseover" });
      this._hoveredTarget = i, this._hoveredTargets = this.targets.concat();
    }, _fireEnterLeaveEvents: function(i, n) {
      var s = this._draggedoverTarget, u = this._hoveredTargets, l = this.targets, h = Math.max(u.length, l.length);
      this.fireSyntheticInOutEvents(i, n, { oldTarget: s, evtOut: "dragleave", evtIn: "dragenter" });
      for (var p = 0; p < h; p++)
        this.fireSyntheticInOutEvents(l[p], n, { oldTarget: u[p], evtOut: "dragleave", evtIn: "dragenter" });
      this._draggedoverTarget = i;
    }, fireSyntheticInOutEvents: function(i, n, s) {
      var u, l, h, p = s.oldTarget, v = p !== i, b = s.canvasEvtIn, F = s.canvasEvtOut;
      v && (u = { e: n, target: i, previousTarget: p }, l = { e: n, target: p, nextTarget: i }), h = i && v, p && v && (F && this.fire(F, l), p.fire(s.evtOut, l)), h && (b && this.fire(b, u), i.fire(s.evtIn, u));
    }, __onMouseWheel: function(i) {
      this._cacheTransformEventData(i), this._handleEvent(i, "wheel"), this._resetTransformEventData();
    }, _transformObject: function(i) {
      var n = this.getPointer(i), s = this._currentTransform;
      s.reset = !1, s.shiftKey = i.shiftKey, s.altKey = i[this.centeredKey], this._performTransformAction(i, s, n), s.actionPerformed && this.requestRenderAll();
    }, _performTransformAction: function(i, n, s) {
      var u = s.x, l = s.y, h = n.action, p = !1, v = n.actionHandler;
      v && (p = v(i, n, u, l)), h === "drag" && p && (n.target.isMoving = !0, this.setCursor(n.target.moveCursor || this.moveCursor)), n.actionPerformed = n.actionPerformed || p;
    }, _fire: m.controlsUtils.fireEvent, _setCursorFromEvent: function(i, n) {
      if (!n)
        return this.setCursor(this.defaultCursor), !1;
      var s = n.hoverCursor || this.hoverCursor, u = this._activeObject && this._activeObject.type === "activeSelection" ? this._activeObject : null, l = (!u || !u.contains(n)) && n._findTargetCorner(this.getPointer(i, !0));
      l ? this.setCursor(this.getCornerCursor(l, n, i)) : (n.subTargetCheck && this.targets.concat().reverse().map(function(h) {
        s = h.hoverCursor || s;
      }), this.setCursor(s));
    }, getCornerCursor: function(i, n, s) {
      var u = n.controls[i];
      return u.cursorStyleHandler(s, u, n);
    } });
  }(), y = Math.min, x = Math.max, m.util.object.extend(m.Canvas.prototype, { _shouldGroup: function(d, o) {
    var c = this._activeObject;
    return c && this._isSelectionKeyPressed(d) && o && o.selectable && this.selection && (c !== o || c.type === "activeSelection") && !o.onSelect({ e: d });
  }, _handleGrouping: function(d, o) {
    var c = this._activeObject;
    c.__corner || (o !== c || (o = this.findTarget(d, !0)) && o.selectable) && (c && c.type === "activeSelection" ? this._updateActiveSelection(o, d) : this._createActiveSelection(o, d));
  }, _updateActiveSelection: function(d, o) {
    var c = this._activeObject, g = c._objects.slice(0);
    c.contains(d) ? (c.removeWithUpdate(d), this._hoveredTarget = d, this._hoveredTargets = this.targets.concat(), c.size() === 1 && this._setActiveObject(c.item(0), o)) : (c.addWithUpdate(d), this._hoveredTarget = c, this._hoveredTargets = this.targets.concat()), this._fireSelectionEvents(g, o);
  }, _createActiveSelection: function(d, o) {
    var c = this.getActiveObjects(), g = this._createGroup(d);
    this._hoveredTarget = g, this._setActiveObject(g, o), this._fireSelectionEvents(c, o);
  }, _createGroup: function(d) {
    var o = this._objects, c = o.indexOf(this._activeObject) < o.indexOf(d) ? [this._activeObject, d] : [d, this._activeObject];
    return this._activeObject.isEditing && this._activeObject.exitEditing(), new m.ActiveSelection(c, { canvas: this });
  }, _groupSelectedObjects: function(d) {
    var o, c = this._collectObjects(d);
    c.length === 1 ? this.setActiveObject(c[0], d) : c.length > 1 && (o = new m.ActiveSelection(c.reverse(), { canvas: this }), this.setActiveObject(o, d));
  }, _collectObjects: function(d) {
    for (var o, c = [], g = this._groupSelector.ex, i = this._groupSelector.ey, n = g + this._groupSelector.left, s = i + this._groupSelector.top, u = new m.Point(y(g, n), y(i, s)), l = new m.Point(x(g, n), x(i, s)), h = !this.selectionFullyContained, p = g === n && i === s, v = this._objects.length; v-- && !((o = this._objects[v]) && o.selectable && o.visible && (h && o.intersectsWithRect(u, l, !0) || o.isContainedWithinRect(u, l, !0) || h && o.containsPoint(u, null, !0) || h && o.containsPoint(l, null, !0)) && (c.push(o), p)); )
      ;
    return c.length > 1 && (c = c.filter(function(b) {
      return !b.onSelect({ e: d });
    })), c;
  }, _maybeGroupObjects: function(d) {
    this.selection && this._groupSelector && this._groupSelectedObjects(d), this.setCursor(this.defaultCursor), this._groupSelector = null;
  } }), m.util.object.extend(m.StaticCanvas.prototype, { toDataURL: function(d) {
    d || (d = {});
    var o = d.format || "png", c = d.quality || 1, g = (d.multiplier || 1) * (d.enableRetinaScaling ? this.getRetinaScaling() : 1), i = this.toCanvasElement(g, d);
    return m.util.toDataURL(i, o, c);
  }, toCanvasElement: function(d, o) {
    d = d || 1;
    var c = ((o = o || {}).width || this.width) * d, g = (o.height || this.height) * d, i = this.getZoom(), n = this.width, s = this.height, u = i * d, l = this.viewportTransform, h = (l[4] - (o.left || 0)) * d, p = (l[5] - (o.top || 0)) * d, v = this.interactive, b = [u, 0, 0, u, h, p], F = this.enableRetinaScaling, U = m.util.createCanvasElement(), k = this.contextTop;
    return U.width = c, U.height = g, this.contextTop = null, this.enableRetinaScaling = !1, this.interactive = !1, this.viewportTransform = b, this.width = c, this.height = g, this.calcViewportBoundaries(), this.renderCanvas(U.getContext("2d"), this._objects), this.viewportTransform = l, this.width = n, this.height = s, this.calcViewportBoundaries(), this.interactive = v, this.enableRetinaScaling = F, this.contextTop = k, U;
  } }), m.util.object.extend(m.StaticCanvas.prototype, { loadFromJSON: function(d, o, c) {
    if (d) {
      var g = typeof d == "string" ? JSON.parse(d) : m.util.object.clone(d), i = this, n = g.clipPath, s = this.renderOnAddRemove;
      return this.renderOnAddRemove = !1, delete g.clipPath, this._enlivenObjects(g.objects, function(u) {
        i.clear(), i._setBgOverlay(g, function() {
          n ? i._enlivenObjects([n], function(l) {
            i.clipPath = l[0], i.__setupCanvas.call(i, g, u, s, o);
          }) : i.__setupCanvas.call(i, g, u, s, o);
        });
      }, c), this;
    }
  }, __setupCanvas: function(d, o, c, g) {
    var i = this;
    o.forEach(function(n, s) {
      i.insertAt(n, s);
    }), this.renderOnAddRemove = c, delete d.objects, delete d.backgroundImage, delete d.overlayImage, delete d.background, delete d.overlay, this._setOptions(d), this.renderAll(), g && g();
  }, _setBgOverlay: function(d, o) {
    var c = { backgroundColor: !1, overlayColor: !1, backgroundImage: !1, overlayImage: !1 };
    if (d.backgroundImage || d.overlayImage || d.background || d.overlay) {
      var g = function() {
        c.backgroundImage && c.overlayImage && c.backgroundColor && c.overlayColor && o && o();
      };
      this.__setBgOverlay("backgroundImage", d.backgroundImage, c, g), this.__setBgOverlay("overlayImage", d.overlayImage, c, g), this.__setBgOverlay("backgroundColor", d.background, c, g), this.__setBgOverlay("overlayColor", d.overlay, c, g);
    } else
      o && o();
  }, __setBgOverlay: function(d, o, c, g) {
    var i = this;
    if (!o)
      return c[d] = !0, void (g && g());
    d === "backgroundImage" || d === "overlayImage" ? m.util.enlivenObjects([o], function(n) {
      i[d] = n[0], c[d] = !0, g && g();
    }) : this["set" + m.util.string.capitalize(d, !0)](o, function() {
      c[d] = !0, g && g();
    });
  }, _enlivenObjects: function(d, o, c) {
    d && d.length !== 0 ? m.util.enlivenObjects(d, function(g) {
      o && o(g);
    }, null, c) : o && o([]);
  }, _toDataURL: function(d, o) {
    this.clone(function(c) {
      o(c.toDataURL(d));
    });
  }, _toDataURLWithMultiplier: function(d, o, c) {
    this.clone(function(g) {
      c(g.toDataURLWithMultiplier(d, o));
    });
  }, clone: function(d, o) {
    var c = JSON.stringify(this.toJSON(o));
    this.cloneWithoutData(function(g) {
      g.loadFromJSON(c, function() {
        d && d(g);
      });
    });
  }, cloneWithoutData: function(d) {
    var o = m.util.createCanvasElement();
    o.width = this.width, o.height = this.height;
    var c = new m.Canvas(o);
    this.backgroundImage ? (c.setBackgroundImage(this.backgroundImage.src, function() {
      c.renderAll(), d && d(c);
    }), c.backgroundImageOpacity = this.backgroundImageOpacity, c.backgroundImageStretch = this.backgroundImageStretch) : d && d(c);
  } }), function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.util.object.extend, g = o.util.object.clone, i = o.util.toFixed, n = o.util.string.capitalize, s = o.util.degreesToRadians, u = !o.isLikelyNode;
    o.Object || (o.Object = o.util.createClass(o.CommonMethods, { type: "object", originX: "left", originY: "top", top: 0, left: 0, width: 0, height: 0, scaleX: 1, scaleY: 1, flipX: !1, flipY: !1, opacity: 1, angle: 0, skewX: 0, skewY: 0, cornerSize: 13, touchCornerSize: 24, transparentCorners: !0, hoverCursor: null, moveCursor: null, padding: 0, borderColor: "rgb(178,204,255)", borderDashArray: null, cornerColor: "rgb(178,204,255)", cornerStrokeColor: null, cornerStyle: "rect", cornerDashArray: null, centeredScaling: !1, centeredRotation: !0, fill: "rgb(0,0,0)", fillRule: "nonzero", globalCompositeOperation: "source-over", backgroundColor: "", selectionBackgroundColor: "", stroke: null, strokeWidth: 1, strokeDashArray: null, strokeDashOffset: 0, strokeLineCap: "butt", strokeLineJoin: "miter", strokeMiterLimit: 4, shadow: null, borderOpacityWhenMoving: 0.4, borderScaleFactor: 1, minScaleLimit: 0, selectable: !0, evented: !0, visible: !0, hasControls: !0, hasBorders: !0, perPixelTargetFind: !1, includeDefaultValues: !0, lockMovementX: !1, lockMovementY: !1, lockRotation: !1, lockScalingX: !1, lockScalingY: !1, lockSkewingX: !1, lockSkewingY: !1, lockScalingFlip: !1, excludeFromExport: !1, objectCaching: u, statefullCache: !1, noScaleCache: !0, strokeUniform: !1, dirty: !0, __corner: 0, paintFirst: "fill", activeOn: "down", stateProperties: "top left width height scaleX scaleY flipX flipY originX originY transformMatrix stroke strokeWidth strokeDashArray strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit angle opacity fill globalCompositeOperation shadow visible backgroundColor skewX skewY fillRule paintFirst clipPath strokeUniform".split(" "), cacheProperties: "fill stroke strokeWidth strokeDashArray width height paintFirst strokeUniform strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit backgroundColor clipPath".split(" "), colorProperties: "fill stroke backgroundColor".split(" "), clipPath: void 0, inverted: !1, absolutePositioned: !1, initialize: function(l) {
      l && this.setOptions(l);
    }, _createCacheCanvas: function() {
      this._cacheProperties = {}, this._cacheCanvas = o.util.createCanvasElement(), this._cacheContext = this._cacheCanvas.getContext("2d"), this._updateCacheCanvas(), this.dirty = !0;
    }, _limitCacheSize: function(l) {
      var h = o.perfLimitSizeTotal, p = l.width, v = l.height, b = o.maxCacheSideLimit, F = o.minCacheSideLimit;
      if (p <= b && v <= b && p * v <= h)
        return p < F && (l.width = F), v < F && (l.height = F), l;
      var U = p / v, k = o.util.limitDimsByArea(U, h), T = o.util.capValue, H = T(F, k.x, b), K = T(F, k.y, b);
      return p > H && (l.zoomX /= p / H, l.width = H, l.capped = !0), v > K && (l.zoomY /= v / K, l.height = K, l.capped = !0), l;
    }, _getCacheCanvasDimensions: function() {
      var l = this.getTotalObjectScaling(), h = this._getTransformedDimensions(0, 0), p = h.x * l.scaleX / this.scaleX, v = h.y * l.scaleY / this.scaleY;
      return { width: p + 2, height: v + 2, zoomX: l.scaleX, zoomY: l.scaleY, x: p, y: v };
    }, _updateCacheCanvas: function() {
      var l = this.canvas;
      if (this.noScaleCache && l && l._currentTransform) {
        var h = l._currentTransform.target, p = l._currentTransform.action;
        if (this === h && p.slice && p.slice(0, 5) === "scale")
          return !1;
      }
      var v, b, F = this._cacheCanvas, U = this._limitCacheSize(this._getCacheCanvasDimensions()), k = o.minCacheSideLimit, T = U.width, H = U.height, K = U.zoomX, P = U.zoomY, X = T !== this.cacheWidth || H !== this.cacheHeight, W = this.zoomX !== K || this.zoomY !== P, I = X || W, L = 0, R = 0, G = !1;
      if (X) {
        var Y = this._cacheCanvas.width, M = this._cacheCanvas.height, O = T > Y || H > M;
        G = O || (T < 0.9 * Y || H < 0.9 * M) && Y > k && M > k, O && !U.capped && (T > k || H > k) && (L = 0.1 * T, R = 0.1 * H);
      }
      return this instanceof o.Text && this.path && (I = !0, G = !0, L += this.getHeightOfLine(0) * this.zoomX, R += this.getHeightOfLine(0) * this.zoomY), !!I && (G ? (F.width = Math.ceil(T + L), F.height = Math.ceil(H + R)) : (this._cacheContext.setTransform(1, 0, 0, 1, 0, 0), this._cacheContext.clearRect(0, 0, F.width, F.height)), v = U.x / 2, b = U.y / 2, this.cacheTranslationX = Math.round(F.width / 2 - v) + v, this.cacheTranslationY = Math.round(F.height / 2 - b) + b, this.cacheWidth = T, this.cacheHeight = H, this._cacheContext.translate(this.cacheTranslationX, this.cacheTranslationY), this._cacheContext.scale(K, P), this.zoomX = K, this.zoomY = P, !0);
    }, setOptions: function(l) {
      this._setOptions(l), this._initGradient(l.fill, "fill"), this._initGradient(l.stroke, "stroke"), this._initPattern(l.fill, "fill"), this._initPattern(l.stroke, "stroke");
    }, transform: function(l) {
      var h = this.group && !this.group._transformDone || this.group && this.canvas && l === this.canvas.contextTop, p = this.calcTransformMatrix(!h);
      l.transform(p[0], p[1], p[2], p[3], p[4], p[5]);
    }, toObject: function(l) {
      var h = o.Object.NUM_FRACTION_DIGITS, p = { type: this.type, version: o.version, originX: this.originX, originY: this.originY, left: i(this.left, h), top: i(this.top, h), width: i(this.width, h), height: i(this.height, h), fill: this.fill && this.fill.toObject ? this.fill.toObject() : this.fill, stroke: this.stroke && this.stroke.toObject ? this.stroke.toObject() : this.stroke, strokeWidth: i(this.strokeWidth, h), strokeDashArray: this.strokeDashArray ? this.strokeDashArray.concat() : this.strokeDashArray, strokeLineCap: this.strokeLineCap, strokeDashOffset: this.strokeDashOffset, strokeLineJoin: this.strokeLineJoin, strokeUniform: this.strokeUniform, strokeMiterLimit: i(this.strokeMiterLimit, h), scaleX: i(this.scaleX, h), scaleY: i(this.scaleY, h), angle: i(this.angle, h), flipX: this.flipX, flipY: this.flipY, opacity: i(this.opacity, h), shadow: this.shadow && this.shadow.toObject ? this.shadow.toObject() : this.shadow, visible: this.visible, backgroundColor: this.backgroundColor, fillRule: this.fillRule, paintFirst: this.paintFirst, globalCompositeOperation: this.globalCompositeOperation, skewX: i(this.skewX, h), skewY: i(this.skewY, h) };
      return this.clipPath && !this.clipPath.excludeFromExport && (p.clipPath = this.clipPath.toObject(l), p.clipPath.inverted = this.clipPath.inverted, p.clipPath.absolutePositioned = this.clipPath.absolutePositioned), o.util.populateWithProperties(this, p, l), this.includeDefaultValues || (p = this._removeDefaultValues(p)), p;
    }, toDatalessObject: function(l) {
      return this.toObject(l);
    }, _removeDefaultValues: function(l) {
      var h = o.util.getKlass(l.type).prototype;
      return h.stateProperties.forEach(function(p) {
        p !== "left" && p !== "top" && (l[p] === h[p] && delete l[p], Array.isArray(l[p]) && Array.isArray(h[p]) && l[p].length === 0 && h[p].length === 0 && delete l[p]);
      }), l;
    }, toString: function() {
      return "#<fabric." + n(this.type) + ">";
    }, getObjectScaling: function() {
      if (!this.group)
        return { scaleX: this.scaleX, scaleY: this.scaleY };
      var l = o.util.qrDecompose(this.calcTransformMatrix());
      return { scaleX: Math.abs(l.scaleX), scaleY: Math.abs(l.scaleY) };
    }, getTotalObjectScaling: function() {
      var l = this.getObjectScaling(), h = l.scaleX, p = l.scaleY;
      if (this.canvas) {
        var v = this.canvas.getZoom(), b = this.canvas.getRetinaScaling();
        h *= v * b, p *= v * b;
      }
      return { scaleX: h, scaleY: p };
    }, getObjectOpacity: function() {
      var l = this.opacity;
      return this.group && (l *= this.group.getObjectOpacity()), l;
    }, _set: function(l, h) {
      var p = l === "scaleX" || l === "scaleY", v = this[l] !== h, b = !1;
      return p && (h = this._constrainScale(h)), l === "scaleX" && h < 0 ? (this.flipX = !this.flipX, h *= -1) : l === "scaleY" && h < 0 ? (this.flipY = !this.flipY, h *= -1) : l !== "shadow" || !h || h instanceof o.Shadow ? l === "dirty" && this.group && this.group.set("dirty", h) : h = new o.Shadow(h), this[l] = h, v && (b = this.group && this.group.isOnACache(), this.cacheProperties.indexOf(l) > -1 ? (this.dirty = !0, b && this.group.set("dirty", !0)) : b && this.stateProperties.indexOf(l) > -1 && this.group.set("dirty", !0)), this;
    }, setOnGroup: function() {
    }, getViewportTransform: function() {
      return this.canvas && this.canvas.viewportTransform ? this.canvas.viewportTransform : o.iMatrix.concat();
    }, isNotVisible: function() {
      return this.opacity === 0 || !this.width && !this.height && this.strokeWidth === 0 || !this.visible;
    }, render: function(l) {
      this.isNotVisible() || this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (l.save(), this._setupCompositeOperation(l), this.drawSelectionBackground(l), this.transform(l), this._setOpacity(l), this._setShadow(l, this), this.shouldCache() ? (this.renderCache(), this.drawCacheOnCanvas(l)) : (this._removeCacheCanvas(), this.dirty = !1, this.drawObject(l), this.objectCaching && this.statefullCache && this.saveState({ propertySet: "cacheProperties" })), l.restore());
    }, renderCache: function(l) {
      l = l || {}, this._cacheCanvas && this._cacheContext || this._createCacheCanvas(), this.isCacheDirty() && (this.statefullCache && this.saveState({ propertySet: "cacheProperties" }), this.drawObject(this._cacheContext, l.forClipping), this.dirty = !1);
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
    }, drawClipPathOnCache: function(l, h) {
      if (l.save(), h.inverted ? l.globalCompositeOperation = "destination-out" : l.globalCompositeOperation = "destination-in", h.absolutePositioned) {
        var p = o.util.invertTransform(this.calcTransformMatrix());
        l.transform(p[0], p[1], p[2], p[3], p[4], p[5]);
      }
      h.transform(l), l.scale(1 / h.zoomX, 1 / h.zoomY), l.drawImage(h._cacheCanvas, -h.cacheTranslationX, -h.cacheTranslationY), l.restore();
    }, drawObject: function(l, h) {
      var p = this.fill, v = this.stroke;
      h ? (this.fill = "black", this.stroke = "", this._setClippingProperties(l)) : this._renderBackground(l), this._render(l), this._drawClipPath(l, this.clipPath), this.fill = p, this.stroke = v;
    }, _drawClipPath: function(l, h) {
      h && (h.canvas = this.canvas, h.shouldCache(), h._transformDone = !0, h.renderCache({ forClipping: !0 }), this.drawClipPathOnCache(l, h));
    }, drawCacheOnCanvas: function(l) {
      l.scale(1 / this.zoomX, 1 / this.zoomY), l.drawImage(this._cacheCanvas, -this.cacheTranslationX, -this.cacheTranslationY);
    }, isCacheDirty: function(l) {
      if (this.isNotVisible())
        return !1;
      if (this._cacheCanvas && this._cacheContext && !l && this._updateCacheCanvas())
        return !0;
      if (this.dirty || this.clipPath && this.clipPath.absolutePositioned || this.statefullCache && this.hasStateChanged("cacheProperties")) {
        if (this._cacheCanvas && this._cacheContext && !l) {
          var h = this.cacheWidth / this.zoomX, p = this.cacheHeight / this.zoomY;
          this._cacheContext.clearRect(-h / 2, -p / 2, h, p);
        }
        return !0;
      }
      return !1;
    }, _renderBackground: function(l) {
      if (this.backgroundColor) {
        var h = this._getNonTransformedDimensions();
        l.fillStyle = this.backgroundColor, l.fillRect(-h.x / 2, -h.y / 2, h.x, h.y), this._removeShadow(l);
      }
    }, _setOpacity: function(l) {
      this.group && !this.group._transformDone ? l.globalAlpha = this.getObjectOpacity() : l.globalAlpha *= this.opacity;
    }, _setStrokeStyles: function(l, h) {
      var p = h.stroke;
      p && (l.lineWidth = h.strokeWidth, l.lineCap = h.strokeLineCap, l.lineDashOffset = h.strokeDashOffset, l.lineJoin = h.strokeLineJoin, l.miterLimit = h.strokeMiterLimit, p.toLive ? p.gradientUnits === "percentage" || p.gradientTransform || p.patternTransform ? this._applyPatternForTransformedGradient(l, p) : (l.strokeStyle = p.toLive(l, this), this._applyPatternGradientTransform(l, p)) : l.strokeStyle = h.stroke);
    }, _setFillStyles: function(l, h) {
      var p = h.fill;
      p && (p.toLive ? (l.fillStyle = p.toLive(l, this), this._applyPatternGradientTransform(l, h.fill)) : l.fillStyle = p);
    }, _setClippingProperties: function(l) {
      l.globalAlpha = 1, l.strokeStyle = "transparent", l.fillStyle = "#000000";
    }, _setLineDash: function(l, h) {
      h && h.length !== 0 && (1 & h.length && h.push.apply(h, h), l.setLineDash(h));
    }, _renderControls: function(l, h) {
      var p, v, b, F = this.getViewportTransform(), U = this.calcTransformMatrix();
      v = (h = h || {}).hasBorders !== void 0 ? h.hasBorders : this.hasBorders, b = h.hasControls !== void 0 ? h.hasControls : this.hasControls, U = o.util.multiplyTransformMatrices(F, U), p = o.util.qrDecompose(U), l.save(), l.translate(p.translateX, p.translateY), l.lineWidth = 1 * this.borderScaleFactor, this.group || (l.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1), this.flipX && (p.angle -= 180), l.rotate(s(this.group ? p.angle : this.angle)), h.forActiveSelection || this.group ? v && this.drawBordersInGroup(l, p, h) : v && this.drawBorders(l, h), b && this.drawControls(l, h), l.restore();
    }, _setShadow: function(l) {
      if (this.shadow) {
        var h, p = this.shadow, v = this.canvas, b = v && v.viewportTransform[0] || 1, F = v && v.viewportTransform[3] || 1;
        h = p.nonScaling ? { scaleX: 1, scaleY: 1 } : this.getObjectScaling(), v && v._isRetinaScaling() && (b *= o.devicePixelRatio, F *= o.devicePixelRatio), l.shadowColor = p.color, l.shadowBlur = p.blur * o.browserShadowBlurConstant * (b + F) * (h.scaleX + h.scaleY) / 4, l.shadowOffsetX = p.offsetX * b * h.scaleX, l.shadowOffsetY = p.offsetY * F * h.scaleY;
      }
    }, _removeShadow: function(l) {
      this.shadow && (l.shadowColor = "", l.shadowBlur = l.shadowOffsetX = l.shadowOffsetY = 0);
    }, _applyPatternGradientTransform: function(l, h) {
      if (!h || !h.toLive)
        return { offsetX: 0, offsetY: 0 };
      var p = h.gradientTransform || h.patternTransform, v = -this.width / 2 + h.offsetX || 0, b = -this.height / 2 + h.offsetY || 0;
      return h.gradientUnits === "percentage" ? l.transform(this.width, 0, 0, this.height, v, b) : l.transform(1, 0, 0, 1, v, b), p && l.transform(p[0], p[1], p[2], p[3], p[4], p[5]), { offsetX: v, offsetY: b };
    }, _renderPaintInOrder: function(l) {
      this.paintFirst === "stroke" ? (this._renderStroke(l), this._renderFill(l)) : (this._renderFill(l), this._renderStroke(l));
    }, _render: function() {
    }, _renderFill: function(l) {
      this.fill && (l.save(), this._setFillStyles(l, this), this.fillRule === "evenodd" ? l.fill("evenodd") : l.fill(), l.restore());
    }, _renderStroke: function(l) {
      if (this.stroke && this.strokeWidth !== 0) {
        if (this.shadow && !this.shadow.affectStroke && this._removeShadow(l), l.save(), this.strokeUniform && this.group) {
          var h = this.getObjectScaling();
          l.scale(1 / h.scaleX, 1 / h.scaleY);
        } else
          this.strokeUniform && l.scale(1 / this.scaleX, 1 / this.scaleY);
        this._setLineDash(l, this.strokeDashArray), this._setStrokeStyles(l, this), l.stroke(), l.restore();
      }
    }, _applyPatternForTransformedGradient: function(l, h) {
      var p, v = this._limitCacheSize(this._getCacheCanvasDimensions()), b = o.util.createCanvasElement(), F = this.canvas.getRetinaScaling(), U = v.x / this.scaleX / F, k = v.y / this.scaleY / F;
      b.width = U, b.height = k, (p = b.getContext("2d")).beginPath(), p.moveTo(0, 0), p.lineTo(U, 0), p.lineTo(U, k), p.lineTo(0, k), p.closePath(), p.translate(U / 2, k / 2), p.scale(v.zoomX / this.scaleX / F, v.zoomY / this.scaleY / F), this._applyPatternGradientTransform(p, h), p.fillStyle = h.toLive(l), p.fill(), l.translate(-this.width / 2 - this.strokeWidth / 2, -this.height / 2 - this.strokeWidth / 2), l.scale(F * this.scaleX / v.zoomX, F * this.scaleY / v.zoomY), l.strokeStyle = p.createPattern(b, "no-repeat");
    }, _findCenterFromElement: function() {
      return { x: this.left + this.width / 2, y: this.top + this.height / 2 };
    }, _assignTransformMatrixProps: function() {
      if (this.transformMatrix) {
        var l = o.util.qrDecompose(this.transformMatrix);
        this.flipX = !1, this.flipY = !1, this.set("scaleX", l.scaleX), this.set("scaleY", l.scaleY), this.angle = l.angle, this.skewX = l.skewX, this.skewY = 0;
      }
    }, _removeTransformMatrix: function(l) {
      var h = this._findCenterFromElement();
      this.transformMatrix && (this._assignTransformMatrixProps(), h = o.util.transformPoint(h, this.transformMatrix)), this.transformMatrix = null, l && (this.scaleX *= l.scaleX, this.scaleY *= l.scaleY, this.cropX = l.cropX, this.cropY = l.cropY, h.x += l.offsetLeft, h.y += l.offsetTop, this.width = l.width, this.height = l.height), this.setPositionByOrigin(h, "center", "center");
    }, clone: function(l, h) {
      var p = this.toObject(h);
      this.constructor.fromObject ? this.constructor.fromObject(p, l) : o.Object._fromObject("Object", p, l);
    }, cloneAsImage: function(l, h) {
      var p = this.toCanvasElement(h);
      return l && l(new o.Image(p)), this;
    }, toCanvasElement: function(l) {
      l || (l = {});
      var h = o.util, p = h.saveObjectTransform(this), v = this.group, b = this.shadow, F = Math.abs, U = (l.multiplier || 1) * (l.enableRetinaScaling ? o.devicePixelRatio : 1);
      delete this.group, l.withoutTransform && h.resetObjectTransform(this), l.withoutShadow && (this.shadow = null);
      var k, T, H, K, P = o.util.createCanvasElement(), X = this.getBoundingRect(!0, !0), W = this.shadow, I = { x: 0, y: 0 };
      W && (T = W.blur, k = W.nonScaling ? { scaleX: 1, scaleY: 1 } : this.getObjectScaling(), I.x = 2 * Math.round(F(W.offsetX) + T) * F(k.scaleX), I.y = 2 * Math.round(F(W.offsetY) + T) * F(k.scaleY)), H = X.width + I.x, K = X.height + I.y, P.width = Math.ceil(H), P.height = Math.ceil(K);
      var L = new o.StaticCanvas(P, { enableRetinaScaling: !1, renderOnAddRemove: !1, skipOffscreen: !1 });
      l.format === "jpeg" && (L.backgroundColor = "#fff"), this.setPositionByOrigin(new o.Point(L.width / 2, L.height / 2), "center", "center");
      var R = this.canvas;
      L.add(this);
      var G = L.toCanvasElement(U || 1, l);
      return this.shadow = b, this.set("canvas", R), v && (this.group = v), this.set(p).setCoords(), L._objects = [], L.dispose(), L = null, G;
    }, toDataURL: function(l) {
      return l || (l = {}), o.util.toDataURL(this.toCanvasElement(l), l.format || "png", l.quality || 1);
    }, isType: function(l) {
      return arguments.length > 1 ? Array.from(arguments).includes(this.type) : this.type === l;
    }, complexity: function() {
      return 1;
    }, toJSON: function(l) {
      return this.toObject(l);
    }, rotate: function(l) {
      var h = (this.originX !== "center" || this.originY !== "center") && this.centeredRotation;
      return h && this._setOriginToCenter(), this.set("angle", l), h && this._resetOrigin(), this;
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
    }, getLocalPointer: function(l, h) {
      h = h || this.canvas.getPointer(l);
      var p = new o.Point(h.x, h.y), v = this._getLeftTopCoords();
      return this.angle && (p = o.util.rotatePoint(p, v, s(-this.angle))), { x: p.x - v.x, y: p.y - v.y };
    }, _setupCompositeOperation: function(l) {
      this.globalCompositeOperation && (l.globalCompositeOperation = this.globalCompositeOperation);
    }, dispose: function() {
      o.runningAnimations && o.runningAnimations.cancelByTarget(this);
    } }), o.util.createAccessors && o.util.createAccessors(o.Object), c(o.Object.prototype, o.Observable), o.Object.NUM_FRACTION_DIGITS = 2, o.Object.ENLIVEN_PROPS = ["clipPath"], o.Object._fromObject = function(l, h, p, v) {
      var b = o[l];
      h = g(h, !0), o.util.enlivenPatterns([h.fill, h.stroke], function(F) {
        F[0] !== void 0 && (h.fill = F[0]), F[1] !== void 0 && (h.stroke = F[1]), o.util.enlivenObjectEnlivables(h, h, function() {
          var U = v ? new b(h[v], h) : new b(h);
          p && p(U);
        });
      });
    }, o.Object.__uid = 0);
  }(e), E = m.util.degreesToRadians, _ = { left: -0.5, center: 0, right: 0.5 }, S = { top: -0.5, center: 0, bottom: 0.5 }, m.util.object.extend(m.Object.prototype, { translateToGivenOrigin: function(d, o, c, g, i) {
    var n, s, u, l = d.x, h = d.y;
    return typeof o == "string" ? o = _[o] : o -= 0.5, typeof g == "string" ? g = _[g] : g -= 0.5, typeof c == "string" ? c = S[c] : c -= 0.5, typeof i == "string" ? i = S[i] : i -= 0.5, s = i - c, ((n = g - o) || s) && (u = this._getTransformedDimensions(), l = d.x + n * u.x, h = d.y + s * u.y), new m.Point(l, h);
  }, translateToCenterPoint: function(d, o, c) {
    var g = this.translateToGivenOrigin(d, o, c, "center", "center");
    return this.angle ? m.util.rotatePoint(g, d, E(this.angle)) : g;
  }, translateToOriginPoint: function(d, o, c) {
    var g = this.translateToGivenOrigin(d, "center", "center", o, c);
    return this.angle ? m.util.rotatePoint(g, d, E(this.angle)) : g;
  }, getCenterPoint: function() {
    var d = new m.Point(this.left, this.top);
    return this.translateToCenterPoint(d, this.originX, this.originY);
  }, getPointByOrigin: function(d, o) {
    var c = this.getCenterPoint();
    return this.translateToOriginPoint(c, d, o);
  }, toLocalPoint: function(d, o, c) {
    var g, i, n = this.getCenterPoint();
    return g = o !== void 0 && c !== void 0 ? this.translateToGivenOrigin(n, "center", "center", o, c) : new m.Point(this.left, this.top), i = new m.Point(d.x, d.y), this.angle && (i = m.util.rotatePoint(i, n, -E(this.angle))), i.subtractEquals(g);
  }, setPositionByOrigin: function(d, o, c) {
    var g = this.translateToCenterPoint(d, o, c), i = this.translateToOriginPoint(g, this.originX, this.originY);
    this.set("left", i.x), this.set("top", i.y);
  }, adjustPosition: function(d) {
    var o, c, g = E(this.angle), i = this.getScaledWidth(), n = m.util.cos(g) * i, s = m.util.sin(g) * i;
    o = typeof this.originX == "string" ? _[this.originX] : this.originX - 0.5, c = typeof d == "string" ? _[d] : d - 0.5, this.left += n * (c - o), this.top += s * (c - o), this.setCoords(), this.originX = d;
  }, _setOriginToCenter: function() {
    this._originalOriginX = this.originX, this._originalOriginY = this.originY;
    var d = this.getCenterPoint();
    this.originX = "center", this.originY = "center", this.left = d.x, this.top = d.y;
  }, _resetOrigin: function() {
    var d = this.translateToOriginPoint(this.getCenterPoint(), this._originalOriginX, this._originalOriginY);
    this.originX = this._originalOriginX, this.originY = this._originalOriginY, this.left = d.x, this.top = d.y, this._originalOriginX = null, this._originalOriginY = null;
  }, _getLeftTopCoords: function() {
    return this.translateToOriginPoint(this.getCenterPoint(), "left", "top");
  } }), function() {
    var d = m.util, o = d.degreesToRadians, c = d.multiplyTransformMatrices, g = d.transformPoint;
    d.object.extend(m.Object.prototype, { oCoords: null, aCoords: null, lineCoords: null, ownMatrixCache: null, matrixCache: null, controls: {}, _getCoords: function(i, n) {
      return n ? i ? this.calcACoords() : this.calcLineCoords() : (this.aCoords && this.lineCoords || this.setCoords(!0), i ? this.aCoords : this.lineCoords);
    }, getCoords: function(i, n) {
      return s = this._getCoords(i, n), [new m.Point(s.tl.x, s.tl.y), new m.Point(s.tr.x, s.tr.y), new m.Point(s.br.x, s.br.y), new m.Point(s.bl.x, s.bl.y)];
      var s;
    }, intersectsWithRect: function(i, n, s, u) {
      var l = this.getCoords(s, u);
      return m.Intersection.intersectPolygonRectangle(l, i, n).status === "Intersection";
    }, intersectsWithObject: function(i, n, s) {
      return m.Intersection.intersectPolygonPolygon(this.getCoords(n, s), i.getCoords(n, s)).status === "Intersection" || i.isContainedWithinObject(this, n, s) || this.isContainedWithinObject(i, n, s);
    }, isContainedWithinObject: function(i, n, s) {
      for (var u = this.getCoords(n, s), l = n ? i.aCoords : i.lineCoords, h = 0, p = i._getImageLines(l); h < 4; h++)
        if (!i.containsPoint(u[h], p))
          return !1;
      return !0;
    }, isContainedWithinRect: function(i, n, s, u) {
      var l = this.getBoundingRect(s, u);
      return l.left >= i.x && l.left + l.width <= n.x && l.top >= i.y && l.top + l.height <= n.y;
    }, containsPoint: function(i, n, s, u) {
      var l = this._getCoords(s, u), h = (n = n || this._getImageLines(l), this._findCrossPoints(i, n));
      return h !== 0 && h % 2 == 1;
    }, isOnScreen: function(i) {
      if (!this.canvas)
        return !1;
      var n = this.canvas.vptCoords.tl, s = this.canvas.vptCoords.br;
      return !!this.getCoords(!0, i).some(function(u) {
        return u.x <= s.x && u.x >= n.x && u.y <= s.y && u.y >= n.y;
      }) || !!this.intersectsWithRect(n, s, !0, i) || this._containsCenterOfCanvas(n, s, i);
    }, _containsCenterOfCanvas: function(i, n, s) {
      var u = { x: (i.x + n.x) / 2, y: (i.y + n.y) / 2 };
      return !!this.containsPoint(u, null, !0, s);
    }, isPartiallyOnScreen: function(i) {
      if (!this.canvas)
        return !1;
      var n = this.canvas.vptCoords.tl, s = this.canvas.vptCoords.br;
      return !!this.intersectsWithRect(n, s, !0, i) || this.getCoords(!0, i).every(function(u) {
        return (u.x >= s.x || u.x <= n.x) && (u.y >= s.y || u.y <= n.y);
      }) && this._containsCenterOfCanvas(n, s, i);
    }, _getImageLines: function(i) {
      return { topline: { o: i.tl, d: i.tr }, rightline: { o: i.tr, d: i.br }, bottomline: { o: i.br, d: i.bl }, leftline: { o: i.bl, d: i.tl } };
    }, _findCrossPoints: function(i, n) {
      var s, u, l, h = 0;
      for (var p in n)
        if (!((l = n[p]).o.y < i.y && l.d.y < i.y || l.o.y >= i.y && l.d.y >= i.y || (l.o.x === l.d.x && l.o.x >= i.x ? u = l.o.x : (s = (l.d.y - l.o.y) / (l.d.x - l.o.x), u = -(i.y - 0 * i.x - (l.o.y - s * l.o.x)) / (0 - s)), u >= i.x && (h += 1), h !== 2)))
          break;
      return h;
    }, getBoundingRect: function(i, n) {
      var s = this.getCoords(i, n);
      return d.makeBoundingBoxFromPoints(s);
    }, getScaledWidth: function() {
      return this._getTransformedDimensions().x;
    }, getScaledHeight: function() {
      return this._getTransformedDimensions().y;
    }, _constrainScale: function(i) {
      return Math.abs(i) < this.minScaleLimit ? i < 0 ? -this.minScaleLimit : this.minScaleLimit : i === 0 ? 1e-4 : i;
    }, scale: function(i) {
      return this._set("scaleX", i), this._set("scaleY", i), this.setCoords();
    }, scaleToWidth: function(i, n) {
      var s = this.getBoundingRect(n).width / this.getScaledWidth();
      return this.scale(i / this.width / s);
    }, scaleToHeight: function(i, n) {
      var s = this.getBoundingRect(n).height / this.getScaledHeight();
      return this.scale(i / this.height / s);
    }, calcLineCoords: function() {
      var i = this.getViewportTransform(), n = this.padding, s = o(this.angle), u = d.cos(s) * n, l = d.sin(s) * n, h = u + l, p = u - l, v = this.calcACoords(), b = { tl: g(v.tl, i), tr: g(v.tr, i), bl: g(v.bl, i), br: g(v.br, i) };
      return n && (b.tl.x -= p, b.tl.y -= h, b.tr.x += h, b.tr.y -= p, b.bl.x -= h, b.bl.y += p, b.br.x += p, b.br.y += h), b;
    }, calcOCoords: function() {
      var i = this._calcRotateMatrix(), n = this._calcTranslateMatrix(), s = this.getViewportTransform(), u = c(s, n), l = c(u, i), h = (l = c(l, [1 / s[0], 0, 0, 1 / s[3], 0, 0]), this._calculateCurrentDimensions()), p = {};
      return this.forEachControl(function(v, b, F) {
        p[b] = v.positionHandler(h, l, F);
      }), p;
    }, calcACoords: function() {
      var i = this._calcRotateMatrix(), n = this._calcTranslateMatrix(), s = c(n, i), u = this._getTransformedDimensions(), l = u.x / 2, h = u.y / 2;
      return { tl: g({ x: -l, y: -h }, s), tr: g({ x: l, y: -h }, s), bl: g({ x: -l, y: h }, s), br: g({ x: l, y: h }, s) };
    }, setCoords: function(i) {
      return this.aCoords = this.calcACoords(), this.lineCoords = this.group ? this.aCoords : this.calcLineCoords(), i || (this.oCoords = this.calcOCoords(), this._setCornerCoords && this._setCornerCoords()), this;
    }, _calcRotateMatrix: function() {
      return d.calcRotateMatrix(this);
    }, _calcTranslateMatrix: function() {
      var i = this.getCenterPoint();
      return [1, 0, 0, 1, i.x, i.y];
    }, transformMatrixKey: function(i) {
      var n = "_", s = "";
      return !i && this.group && (s = this.group.transformMatrixKey(i) + n), s + this.top + n + this.left + n + this.scaleX + n + this.scaleY + n + this.skewX + n + this.skewY + n + this.angle + n + this.originX + n + this.originY + n + this.width + n + this.height + n + this.strokeWidth + this.flipX + this.flipY;
    }, calcTransformMatrix: function(i) {
      var n = this.calcOwnMatrix();
      if (i || !this.group)
        return n;
      var s = this.transformMatrixKey(i), u = this.matrixCache || (this.matrixCache = {});
      return u.key === s ? u.value : (this.group && (n = c(this.group.calcTransformMatrix(!1), n)), u.key = s, u.value = n, n);
    }, calcOwnMatrix: function() {
      var i = this.transformMatrixKey(!0), n = this.ownMatrixCache || (this.ownMatrixCache = {});
      if (n.key === i)
        return n.value;
      var s = this._calcTranslateMatrix(), u = { angle: this.angle, translateX: s[4], translateY: s[5], scaleX: this.scaleX, scaleY: this.scaleY, skewX: this.skewX, skewY: this.skewY, flipX: this.flipX, flipY: this.flipY };
      return n.key = i, n.value = d.composeMatrix(u), n.value;
    }, _getNonTransformedDimensions: function() {
      var i = this.strokeWidth;
      return { x: this.width + i, y: this.height + i };
    }, _getTransformedDimensions: function(i, n) {
      i === void 0 && (i = this.skewX), n === void 0 && (n = this.skewY);
      var s, u, l, h = i === 0 && n === 0;
      if (this.strokeUniform ? (u = this.width, l = this.height) : (u = (s = this._getNonTransformedDimensions()).x, l = s.y), h)
        return this._finalizeDimensions(u * this.scaleX, l * this.scaleY);
      var p = d.sizeAfterTransform(u, l, { scaleX: this.scaleX, scaleY: this.scaleY, skewX: i, skewY: n });
      return this._finalizeDimensions(p.x, p.y);
    }, _finalizeDimensions: function(i, n) {
      return this.strokeUniform ? { x: i + this.strokeWidth, y: n + this.strokeWidth } : { x: i, y: n };
    }, _calculateCurrentDimensions: function() {
      var i = this.getViewportTransform(), n = this._getTransformedDimensions();
      return g(n, i, !0).scalarAdd(2 * this.padding);
    } });
  }(), m.util.object.extend(m.Object.prototype, { sendToBack: function() {
    return this.group ? m.StaticCanvas.prototype.sendToBack.call(this.group, this) : this.canvas && this.canvas.sendToBack(this), this;
  }, bringToFront: function() {
    return this.group ? m.StaticCanvas.prototype.bringToFront.call(this.group, this) : this.canvas && this.canvas.bringToFront(this), this;
  }, sendBackwards: function(d) {
    return this.group ? m.StaticCanvas.prototype.sendBackwards.call(this.group, this, d) : this.canvas && this.canvas.sendBackwards(this, d), this;
  }, bringForward: function(d) {
    return this.group ? m.StaticCanvas.prototype.bringForward.call(this.group, this, d) : this.canvas && this.canvas.bringForward(this, d), this;
  }, moveTo: function(d) {
    return this.group && this.group.type !== "activeSelection" ? m.StaticCanvas.prototype.moveTo.call(this.group, this, d) : this.canvas && this.canvas.moveTo(this, d), this;
  } }), function() {
    function d(c, g) {
      if (g) {
        if (g.toLive)
          return c + ": url(#SVGID_" + g.id + "); ";
        var i = new m.Color(g), n = c + ": " + i.toRgb() + "; ", s = i.getAlpha();
        return s !== 1 && (n += c + "-opacity: " + s.toString() + "; "), n;
      }
      return c + ": none; ";
    }
    var o = m.util.toFixed;
    m.util.object.extend(m.Object.prototype, { getSvgStyles: function(c) {
      var g = this.fillRule ? this.fillRule : "nonzero", i = this.strokeWidth ? this.strokeWidth : "0", n = this.strokeDashArray ? this.strokeDashArray.join(" ") : "none", s = this.strokeDashOffset ? this.strokeDashOffset : "0", u = this.strokeLineCap ? this.strokeLineCap : "butt", l = this.strokeLineJoin ? this.strokeLineJoin : "miter", h = this.strokeMiterLimit ? this.strokeMiterLimit : "4", p = this.opacity !== void 0 ? this.opacity : "1", v = this.visible ? "" : " visibility: hidden;", b = c ? "" : this.getSvgFilter(), F = d("fill", this.fill);
      return [d("stroke", this.stroke), "stroke-width: ", i, "; ", "stroke-dasharray: ", n, "; ", "stroke-linecap: ", u, "; ", "stroke-dashoffset: ", s, "; ", "stroke-linejoin: ", l, "; ", "stroke-miterlimit: ", h, "; ", F, "fill-rule: ", g, "; ", "opacity: ", p, ";", b, v].join("");
    }, getSvgSpanStyles: function(c, g) {
      var i = "; ", n = c.fontFamily ? "font-family: " + (c.fontFamily.indexOf("'") === -1 && c.fontFamily.indexOf('"') === -1 ? "'" + c.fontFamily + "'" : c.fontFamily) + i : "", s = c.strokeWidth ? "stroke-width: " + c.strokeWidth + i : "", u = (n = n, c.fontSize ? "font-size: " + c.fontSize + "px" + i : ""), l = c.fontStyle ? "font-style: " + c.fontStyle + i : "", h = c.fontWeight ? "font-weight: " + c.fontWeight + i : "", p = c.fill ? d("fill", c.fill) : "", v = c.stroke ? d("stroke", c.stroke) : "", b = this.getSvgTextDecoration(c);
      return b && (b = "text-decoration: " + b + i), [v, s, n, u, l, h, b, p, c.deltaY ? "baseline-shift: " + -c.deltaY + "; " : "", g ? "white-space: pre; " : ""].join("");
    }, getSvgTextDecoration: function(c) {
      return ["overline", "underline", "line-through"].filter(function(g) {
        return c[g.replace("-", "")];
      }).join(" ");
    }, getSvgFilter: function() {
      return this.shadow ? "filter: url(#SVGID_" + this.shadow.id + ");" : "";
    }, getSvgCommons: function() {
      return [this.id ? 'id="' + this.id + '" ' : "", this.clipPath ? 'clip-path="url(#' + this.clipPath.clipPathId + ')" ' : ""].join("");
    }, getSvgTransform: function(c, g) {
      var i = c ? this.calcTransformMatrix() : this.calcOwnMatrix();
      return 'transform="' + m.util.matrixToSVG(i) + (g || "") + '" ';
    }, _setSVGBg: function(c) {
      if (this.backgroundColor) {
        var g = m.Object.NUM_FRACTION_DIGITS;
        c.push("		<rect ", this._getFillAttributes(this.backgroundColor), ' x="', o(-this.width / 2, g), '" y="', o(-this.height / 2, g), '" width="', o(this.width, g), '" height="', o(this.height, g), `"></rect>
`);
      }
    }, toSVG: function(c) {
      return this._createBaseSVGMarkup(this._toSVG(c), { reviver: c });
    }, toClipPathSVG: function(c) {
      return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(c), { reviver: c });
    }, _createBaseClipPathSVGMarkup: function(c, g) {
      var i = (g = g || {}).reviver, n = g.additionalTransform || "", s = [this.getSvgTransform(!0, n), this.getSvgCommons()].join(""), u = c.indexOf("COMMON_PARTS");
      return c[u] = s, i ? i(c.join("")) : c.join("");
    }, _createBaseSVGMarkup: function(c, g) {
      var i, n, s = (g = g || {}).noStyle, u = g.reviver, l = s ? "" : 'style="' + this.getSvgStyles() + '" ', h = g.withShadow ? 'style="' + this.getSvgFilter() + '" ' : "", p = this.clipPath, v = this.strokeUniform ? 'vector-effect="non-scaling-stroke" ' : "", b = p && p.absolutePositioned, F = this.stroke, U = this.fill, k = this.shadow, T = [], H = c.indexOf("COMMON_PARTS"), K = g.additionalTransform;
      return p && (p.clipPathId = "CLIPPATH_" + m.Object.__uid++, n = '<clipPath id="' + p.clipPathId + `" >
` + p.toClipPathSVG(u) + `</clipPath>
`), b && T.push("<g ", h, this.getSvgCommons(), ` >
`), T.push("<g ", this.getSvgTransform(!1), b ? "" : h + this.getSvgCommons(), ` >
`), i = [l, v, s ? "" : this.addPaintOrder(), " ", K ? 'transform="' + K + '" ' : ""].join(""), c[H] = i, U && U.toLive && T.push(U.toSVG(this)), F && F.toLive && T.push(F.toSVG(this)), k && T.push(k.toSVG(this)), p && T.push(n), T.push(c.join("")), T.push(`</g>
`), b && T.push(`</g>
`), u ? u(T.join("")) : T.join("");
    }, addPaintOrder: function() {
      return this.paintFirst !== "fill" ? ' paint-order="' + this.paintFirst + '" ' : "";
    } });
  }(), function() {
    var d = m.util.object.extend, o = "stateProperties";
    function c(i, n, s) {
      var u = {};
      s.forEach(function(l) {
        u[l] = i[l];
      }), d(i[n], u, !0);
    }
    function g(i, n, s) {
      if (i === n)
        return !0;
      if (Array.isArray(i)) {
        if (!Array.isArray(n) || i.length !== n.length)
          return !1;
        for (var u = 0, l = i.length; u < l; u++)
          if (!g(i[u], n[u]))
            return !1;
        return !0;
      }
      if (i && typeof i == "object") {
        var h, p = Object.keys(i);
        if (!n || typeof n != "object" || !s && p.length !== Object.keys(n).length)
          return !1;
        for (u = 0, l = p.length; u < l; u++)
          if ((h = p[u]) !== "canvas" && h !== "group" && !g(i[h], n[h]))
            return !1;
        return !0;
      }
    }
    m.util.object.extend(m.Object.prototype, { hasStateChanged: function(i) {
      var n = "_" + (i = i || o);
      return Object.keys(this[n]).length < this[i].length || !g(this[n], this, !0);
    }, saveState: function(i) {
      var n = i && i.propertySet || o, s = "_" + n;
      return this[s] ? (c(this, s, this[n]), i && i.stateProperties && c(this, s, i.stateProperties), this) : this.setupState(i);
    }, setupState: function(i) {
      var n = (i = i || {}).propertySet || o;
      return i.propertySet = n, this["_" + n] = {}, this.saveState(i), this;
    } });
  }(), function() {
    var d = m.util.degreesToRadians;
    m.util.object.extend(m.Object.prototype, { _findTargetCorner: function(o, c) {
      if (!this.hasControls || this.group || !this.canvas || this.canvas._activeObject !== this)
        return !1;
      var g, i, n, s = o.x, u = o.y, l = Object.keys(this.oCoords), h = l.length - 1;
      for (this.__corner = 0; h >= 0; h--)
        if (n = l[h], this.isControlVisible(n) && (i = this._getImageLines(c ? this.oCoords[n].touchCorner : this.oCoords[n].corner), (g = this._findCrossPoints({ x: s, y: u }, i)) !== 0 && g % 2 == 1))
          return this.__corner = n, n;
      return !1;
    }, forEachControl: function(o) {
      for (var c in this.controls)
        o(this.controls[c], c, this);
    }, _setCornerCoords: function() {
      var o = this.oCoords;
      for (var c in o) {
        var g = this.controls[c];
        o[c].corner = g.calcCornerCoords(this.angle, this.cornerSize, o[c].x, o[c].y, !1), o[c].touchCorner = g.calcCornerCoords(this.angle, this.touchCornerSize, o[c].x, o[c].y, !0);
      }
    }, drawSelectionBackground: function(o) {
      if (!this.selectionBackgroundColor || this.canvas && !this.canvas.interactive || this.canvas && this.canvas._activeObject !== this)
        return this;
      o.save();
      var c = this.getCenterPoint(), g = this._calculateCurrentDimensions(), i = this.canvas.viewportTransform;
      return o.translate(c.x, c.y), o.scale(1 / i[0], 1 / i[3]), o.rotate(d(this.angle)), o.fillStyle = this.selectionBackgroundColor, o.fillRect(-g.x / 2, -g.y / 2, g.x, g.y), o.restore(), this;
    }, drawBorders: function(o, c) {
      c = c || {};
      var g = this._calculateCurrentDimensions(), i = this.borderScaleFactor, n = g.x + i, s = g.y + i, u = c.hasControls !== void 0 ? c.hasControls : this.hasControls, l = !1;
      return o.save(), o.strokeStyle = c.borderColor || this.borderColor, this._setLineDash(o, c.borderDashArray || this.borderDashArray), o.strokeRect(-n / 2, -s / 2, n, s), u && (o.beginPath(), this.forEachControl(function(h, p, v) {
        h.withConnection && h.getVisibility(v, p) && (l = !0, o.moveTo(h.x * n, h.y * s), o.lineTo(h.x * n + h.offsetX, h.y * s + h.offsetY));
      }), l && o.stroke()), o.restore(), this;
    }, drawBordersInGroup: function(o, c, g) {
      g = g || {};
      var i = m.util.sizeAfterTransform(this.width, this.height, c), n = this.strokeWidth, s = this.strokeUniform, u = this.borderScaleFactor, l = i.x + n * (s ? this.canvas.getZoom() : c.scaleX) + u, h = i.y + n * (s ? this.canvas.getZoom() : c.scaleY) + u;
      return o.save(), this._setLineDash(o, g.borderDashArray || this.borderDashArray), o.strokeStyle = g.borderColor || this.borderColor, o.strokeRect(-l / 2, -h / 2, l, h), o.restore(), this;
    }, drawControls: function(o, c) {
      c = c || {}, o.save();
      var g, i, n = this.canvas.getRetinaScaling();
      return o.setTransform(n, 0, 0, n, 0, 0), o.strokeStyle = o.fillStyle = c.cornerColor || this.cornerColor, this.transparentCorners || (o.strokeStyle = c.cornerStrokeColor || this.cornerStrokeColor), this._setLineDash(o, c.cornerDashArray || this.cornerDashArray), this.setCoords(), this.group && (g = this.group.calcTransformMatrix()), this.forEachControl(function(s, u, l) {
        i = l.oCoords[u], s.getVisibility(l, u) && (g && (i = m.util.transformPoint(i, g)), s.render(o, i.x, i.y, c, l));
      }), o.restore(), this;
    }, isControlVisible: function(o) {
      return this.controls[o] && this.controls[o].getVisibility(this, o);
    }, setControlVisible: function(o, c) {
      return this._controlsVisibility || (this._controlsVisibility = {}), this._controlsVisibility[o] = c, this;
    }, setControlsVisibility: function(o) {
      for (var c in o || (o = {}), o)
        this.setControlVisible(c, o[c]);
      return this;
    }, onDeselect: function() {
    }, onSelect: function() {
    } });
  }(), m.util.object.extend(m.StaticCanvas.prototype, { FX_DURATION: 500, fxCenterObjectH: function(d, o) {
    var c = function() {
    }, g = (o = o || {}).onComplete || c, i = o.onChange || c, n = this;
    return m.util.animate({ target: this, startValue: d.left, endValue: this.getCenterPoint().x, duration: this.FX_DURATION, onChange: function(s) {
      d.set("left", s), n.requestRenderAll(), i();
    }, onComplete: function() {
      d.setCoords(), g();
    } });
  }, fxCenterObjectV: function(d, o) {
    var c = function() {
    }, g = (o = o || {}).onComplete || c, i = o.onChange || c, n = this;
    return m.util.animate({ target: this, startValue: d.top, endValue: this.getCenterPoint().y, duration: this.FX_DURATION, onChange: function(s) {
      d.set("top", s), n.requestRenderAll(), i();
    }, onComplete: function() {
      d.setCoords(), g();
    } });
  }, fxRemove: function(d, o) {
    var c = function() {
    }, g = (o = o || {}).onComplete || c, i = o.onChange || c, n = this;
    return m.util.animate({ target: this, startValue: d.opacity, endValue: 0, duration: this.FX_DURATION, onChange: function(s) {
      d.set("opacity", s), n.requestRenderAll(), i();
    }, onComplete: function() {
      n.remove(d), g();
    } });
  } }), m.util.object.extend(m.Object.prototype, { animate: function() {
    if (arguments[0] && typeof arguments[0] == "object") {
      var d, o, c = [], g = [];
      for (d in arguments[0])
        c.push(d);
      for (var i = 0, n = c.length; i < n; i++)
        d = c[i], o = i !== n - 1, g.push(this._animate(d, arguments[0][d], arguments[1], o));
      return g;
    }
    return this._animate.apply(this, arguments);
  }, _animate: function(d, o, c, g) {
    var i, n = this;
    o = o.toString(), c = c ? m.util.object.clone(c) : {}, ~d.indexOf(".") && (i = d.split("."));
    var s = n.colorProperties.indexOf(d) > -1 || i && n.colorProperties.indexOf(i[1]) > -1, u = i ? this.get(i[0])[i[1]] : this.get(d);
    "from" in c || (c.from = u), s || (o = ~o.indexOf("=") ? u + parseFloat(o.replace("=", "")) : parseFloat(o));
    var l = { target: this, startValue: c.from, endValue: o, byValue: c.by, easing: c.easing, duration: c.duration, abort: c.abort && function(h, p, v) {
      return c.abort.call(n, h, p, v);
    }, onChange: function(h, p, v) {
      i ? n[i[0]][i[1]] = h : n.set(d, h), g || c.onChange && c.onChange(h, p, v);
    }, onComplete: function(h, p, v) {
      g || (n.setCoords(), c.onComplete && c.onComplete(h, p, v));
    } };
    return s ? m.util.animateColor(l.startValue, l.endValue, l.duration, l) : m.util.animate(l);
  } }), function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.util.object.extend, g = o.util.object.clone, i = { x1: 1, x2: 1, y1: 1, y2: 1 };
    function n(s, u) {
      var l = s.origin, h = s.axis1, p = s.axis2, v = s.dimension, b = u.nearest, F = u.center, U = u.farthest;
      return function() {
        switch (this.get(l)) {
          case b:
            return Math.min(this.get(h), this.get(p));
          case F:
            return Math.min(this.get(h), this.get(p)) + 0.5 * this.get(v);
          case U:
            return Math.max(this.get(h), this.get(p));
        }
      };
    }
    o.Line ? o.warn("fabric.Line is already defined") : (o.Line = o.util.createClass(o.Object, { type: "line", x1: 0, y1: 0, x2: 0, y2: 0, cacheProperties: o.Object.prototype.cacheProperties.concat("x1", "x2", "y1", "y2"), initialize: function(s, u) {
      s || (s = [0, 0, 0, 0]), this.callSuper("initialize", u), this.set("x1", s[0]), this.set("y1", s[1]), this.set("x2", s[2]), this.set("y2", s[3]), this._setWidthHeight(u);
    }, _setWidthHeight: function(s) {
      s || (s = {}), this.width = Math.abs(this.x2 - this.x1), this.height = Math.abs(this.y2 - this.y1), this.left = "left" in s ? s.left : this._getLeftToOriginX(), this.top = "top" in s ? s.top : this._getTopToOriginY();
    }, _set: function(s, u) {
      return this.callSuper("_set", s, u), i[s] !== void 0 && this._setWidthHeight(), this;
    }, _getLeftToOriginX: n({ origin: "originX", axis1: "x1", axis2: "x2", dimension: "width" }, { nearest: "left", center: "center", farthest: "right" }), _getTopToOriginY: n({ origin: "originY", axis1: "y1", axis2: "y2", dimension: "height" }, { nearest: "top", center: "center", farthest: "bottom" }), _render: function(s) {
      s.beginPath();
      var u = this.calcLinePoints();
      s.moveTo(u.x1, u.y1), s.lineTo(u.x2, u.y2), s.lineWidth = this.strokeWidth;
      var l = s.strokeStyle;
      s.strokeStyle = this.stroke || s.fillStyle, this.stroke && this._renderStroke(s), s.strokeStyle = l;
    }, _findCenterFromElement: function() {
      return { x: (this.x1 + this.x2) / 2, y: (this.y1 + this.y2) / 2 };
    }, toObject: function(s) {
      return c(this.callSuper("toObject", s), this.calcLinePoints());
    }, _getNonTransformedDimensions: function() {
      var s = this.callSuper("_getNonTransformedDimensions");
      return this.strokeLineCap === "butt" && (this.width === 0 && (s.y -= this.strokeWidth), this.height === 0 && (s.x -= this.strokeWidth)), s;
    }, calcLinePoints: function() {
      var s = this.x1 <= this.x2 ? -1 : 1, u = this.y1 <= this.y2 ? -1 : 1, l = s * this.width * 0.5, h = u * this.height * 0.5;
      return { x1: l, x2: s * this.width * -0.5, y1: h, y2: u * this.height * -0.5 };
    }, _toSVG: function() {
      var s = this.calcLinePoints();
      return ["<line ", "COMMON_PARTS", 'x1="', s.x1, '" y1="', s.y1, '" x2="', s.x2, '" y2="', s.y2, `" />
`];
    } }), o.Line.ATTRIBUTE_NAMES = o.SHARED_ATTRIBUTES.concat("x1 y1 x2 y2".split(" ")), o.Line.fromElement = function(s, u, l) {
      l = l || {};
      var h = o.parseAttributes(s, o.Line.ATTRIBUTE_NAMES), p = [h.x1 || 0, h.y1 || 0, h.x2 || 0, h.y2 || 0];
      u(new o.Line(p, c(h, l)));
    }, o.Line.fromObject = function(s, u) {
      var l = g(s, !0);
      l.points = [s.x1, s.y1, s.x2, s.y2], o.Object._fromObject("Line", l, function(h) {
        delete h.points, u && u(h);
      }, "points");
    });
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.util.degreesToRadians;
    o.Circle ? o.warn("fabric.Circle is already defined.") : (o.Circle = o.util.createClass(o.Object, { type: "circle", radius: 0, startAngle: 0, endAngle: 360, cacheProperties: o.Object.prototype.cacheProperties.concat("radius", "startAngle", "endAngle"), _set: function(g, i) {
      return this.callSuper("_set", g, i), g === "radius" && this.setRadius(i), this;
    }, toObject: function(g) {
      return this.callSuper("toObject", ["radius", "startAngle", "endAngle"].concat(g));
    }, _toSVG: function() {
      var g, i = (this.endAngle - this.startAngle) % 360;
      if (i === 0)
        g = ["<circle ", "COMMON_PARTS", 'cx="0" cy="0" ', 'r="', this.radius, `" />
`];
      else {
        var n = c(this.startAngle), s = c(this.endAngle), u = this.radius;
        g = ['<path d="M ' + o.util.cos(n) * u + " " + o.util.sin(n) * u, " A " + u + " " + u, " 0 ", +(i > 180 ? "1" : "0") + " 1", " " + o.util.cos(s) * u + " " + o.util.sin(s) * u, '" ', "COMMON_PARTS", ` />
`];
      }
      return g;
    }, _render: function(g) {
      g.beginPath(), g.arc(0, 0, this.radius, c(this.startAngle), c(this.endAngle), !1), this._renderPaintInOrder(g);
    }, getRadiusX: function() {
      return this.get("radius") * this.get("scaleX");
    }, getRadiusY: function() {
      return this.get("radius") * this.get("scaleY");
    }, setRadius: function(g) {
      return this.radius = g, this.set("width", 2 * g).set("height", 2 * g);
    } }), o.Circle.ATTRIBUTE_NAMES = o.SHARED_ATTRIBUTES.concat("cx cy r".split(" ")), o.Circle.fromElement = function(g, i) {
      var n, s = o.parseAttributes(g, o.Circle.ATTRIBUTE_NAMES);
      if (!("radius" in (n = s) && n.radius >= 0))
        throw new Error("value of `r` attribute is required and can not be negative");
      s.left = (s.left || 0) - s.radius, s.top = (s.top || 0) - s.radius, i(new o.Circle(s));
    }, o.Circle.fromObject = function(g, i) {
      o.Object._fromObject("Circle", g, i);
    });
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {});
    o.Triangle ? o.warn("fabric.Triangle is already defined") : (o.Triangle = o.util.createClass(o.Object, { type: "triangle", width: 100, height: 100, _render: function(c) {
      var g = this.width / 2, i = this.height / 2;
      c.beginPath(), c.moveTo(-g, i), c.lineTo(0, -i), c.lineTo(g, i), c.closePath(), this._renderPaintInOrder(c);
    }, _toSVG: function() {
      var c = this.width / 2, g = this.height / 2;
      return ["<polygon ", "COMMON_PARTS", 'points="', [-c + " " + g, "0 " + -g, c + " " + g].join(","), '" />'];
    } }), o.Triangle.fromObject = function(c, g) {
      return o.Object._fromObject("Triangle", c, g);
    });
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {}), c = 2 * Math.PI;
    o.Ellipse ? o.warn("fabric.Ellipse is already defined.") : (o.Ellipse = o.util.createClass(o.Object, { type: "ellipse", rx: 0, ry: 0, cacheProperties: o.Object.prototype.cacheProperties.concat("rx", "ry"), initialize: function(g) {
      this.callSuper("initialize", g), this.set("rx", g && g.rx || 0), this.set("ry", g && g.ry || 0);
    }, _set: function(g, i) {
      switch (this.callSuper("_set", g, i), g) {
        case "rx":
          this.rx = i, this.set("width", 2 * i);
          break;
        case "ry":
          this.ry = i, this.set("height", 2 * i);
      }
      return this;
    }, getRx: function() {
      return this.get("rx") * this.get("scaleX");
    }, getRy: function() {
      return this.get("ry") * this.get("scaleY");
    }, toObject: function(g) {
      return this.callSuper("toObject", ["rx", "ry"].concat(g));
    }, _toSVG: function() {
      return ["<ellipse ", "COMMON_PARTS", 'cx="0" cy="0" ', 'rx="', this.rx, '" ry="', this.ry, `" />
`];
    }, _render: function(g) {
      g.beginPath(), g.save(), g.transform(1, 0, 0, this.ry / this.rx, 0, 0), g.arc(0, 0, this.rx, 0, c, !1), g.restore(), this._renderPaintInOrder(g);
    } }), o.Ellipse.ATTRIBUTE_NAMES = o.SHARED_ATTRIBUTES.concat("cx cy rx ry".split(" ")), o.Ellipse.fromElement = function(g, i) {
      var n = o.parseAttributes(g, o.Ellipse.ATTRIBUTE_NAMES);
      n.left = (n.left || 0) - n.rx, n.top = (n.top || 0) - n.ry, i(new o.Ellipse(n));
    }, o.Ellipse.fromObject = function(g, i) {
      o.Object._fromObject("Ellipse", g, i);
    });
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.util.object.extend;
    o.Rect ? o.warn("fabric.Rect is already defined") : (o.Rect = o.util.createClass(o.Object, { stateProperties: o.Object.prototype.stateProperties.concat("rx", "ry"), type: "rect", rx: 0, ry: 0, cacheProperties: o.Object.prototype.cacheProperties.concat("rx", "ry"), initialize: function(g) {
      this.callSuper("initialize", g), this._initRxRy();
    }, _initRxRy: function() {
      this.rx && !this.ry ? this.ry = this.rx : this.ry && !this.rx && (this.rx = this.ry);
    }, _render: function(g) {
      var i = this.rx ? Math.min(this.rx, this.width / 2) : 0, n = this.ry ? Math.min(this.ry, this.height / 2) : 0, s = this.width, u = this.height, l = -this.width / 2, h = -this.height / 2, p = i !== 0 || n !== 0, v = 0.4477152502;
      g.beginPath(), g.moveTo(l + i, h), g.lineTo(l + s - i, h), p && g.bezierCurveTo(l + s - v * i, h, l + s, h + v * n, l + s, h + n), g.lineTo(l + s, h + u - n), p && g.bezierCurveTo(l + s, h + u - v * n, l + s - v * i, h + u, l + s - i, h + u), g.lineTo(l + i, h + u), p && g.bezierCurveTo(l + v * i, h + u, l, h + u - v * n, l, h + u - n), g.lineTo(l, h + n), p && g.bezierCurveTo(l, h + v * n, l + v * i, h, l + i, h), g.closePath(), this._renderPaintInOrder(g);
    }, toObject: function(g) {
      return this.callSuper("toObject", ["rx", "ry"].concat(g));
    }, _toSVG: function() {
      return ["<rect ", "COMMON_PARTS", 'x="', -this.width / 2, '" y="', -this.height / 2, '" rx="', this.rx, '" ry="', this.ry, '" width="', this.width, '" height="', this.height, `" />
`];
    } }), o.Rect.ATTRIBUTE_NAMES = o.SHARED_ATTRIBUTES.concat("x y rx ry width height".split(" ")), o.Rect.fromElement = function(g, i, n) {
      if (!g)
        return i(null);
      n = n || {};
      var s = o.parseAttributes(g, o.Rect.ATTRIBUTE_NAMES);
      s.left = s.left || 0, s.top = s.top || 0, s.height = s.height || 0, s.width = s.width || 0;
      var u = new o.Rect(c(n ? o.util.object.clone(n) : {}, s));
      u.visible = u.visible && u.width > 0 && u.height > 0, i(u);
    }, o.Rect.fromObject = function(g, i) {
      return o.Object._fromObject("Rect", g, i);
    });
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.util.object.extend, g = o.util.array.min, i = o.util.array.max, n = o.util.toFixed, s = o.util.projectStrokeOnPoints;
    o.Polyline ? o.warn("fabric.Polyline is already defined") : (o.Polyline = o.util.createClass(o.Object, { type: "polyline", points: null, exactBoundingBox: !1, cacheProperties: o.Object.prototype.cacheProperties.concat("points"), initialize: function(u, l) {
      l = l || {}, this.points = u || [], this.callSuper("initialize", l), this._setPositionDimensions(l);
    }, _projectStrokeOnPoints: function() {
      return s(this.points, this, !0);
    }, _setPositionDimensions: function(u) {
      var l, h = this._calcDimensions(u), p = this.exactBoundingBox ? this.strokeWidth : 0;
      this.width = h.width - p, this.height = h.height - p, u.fromSVG || (l = this.translateToGivenOrigin({ x: h.left - this.strokeWidth / 2 + p / 2, y: h.top - this.strokeWidth / 2 + p / 2 }, "left", "top", this.originX, this.originY)), u.left === void 0 && (this.left = u.fromSVG ? h.left : l.x), u.top === void 0 && (this.top = u.fromSVG ? h.top : l.y), this.pathOffset = { x: h.left + this.width / 2 + p / 2, y: h.top + this.height / 2 + p / 2 };
    }, _calcDimensions: function() {
      var u = this.exactBoundingBox ? this._projectStrokeOnPoints() : this.points, l = g(u, "x") || 0, h = g(u, "y") || 0;
      return { left: l, top: h, width: (i(u, "x") || 0) - l, height: (i(u, "y") || 0) - h };
    }, toObject: function(u) {
      return c(this.callSuper("toObject", u), { points: this.points.concat() });
    }, _toSVG: function() {
      for (var u = [], l = this.pathOffset.x, h = this.pathOffset.y, p = o.Object.NUM_FRACTION_DIGITS, v = 0, b = this.points.length; v < b; v++)
        u.push(n(this.points[v].x - l, p), ",", n(this.points[v].y - h, p), " ");
      return ["<" + this.type + " ", "COMMON_PARTS", 'points="', u.join(""), `" />
`];
    }, commonRender: function(u) {
      var l, h = this.points.length, p = this.pathOffset.x, v = this.pathOffset.y;
      if (!h || isNaN(this.points[h - 1].y))
        return !1;
      u.beginPath(), u.moveTo(this.points[0].x - p, this.points[0].y - v);
      for (var b = 0; b < h; b++)
        l = this.points[b], u.lineTo(l.x - p, l.y - v);
      return !0;
    }, _render: function(u) {
      this.commonRender(u) && this._renderPaintInOrder(u);
    }, complexity: function() {
      return this.get("points").length;
    } }), o.Polyline.ATTRIBUTE_NAMES = o.SHARED_ATTRIBUTES.concat(), o.Polyline.fromElementGenerator = function(u) {
      return function(l, h, p) {
        if (!l)
          return h(null);
        p || (p = {});
        var v = o.parsePointsAttribute(l.getAttribute("points")), b = o.parseAttributes(l, o[u].ATTRIBUTE_NAMES);
        b.fromSVG = !0, h(new o[u](v, c(b, p)));
      };
    }, o.Polyline.fromElement = o.Polyline.fromElementGenerator("Polyline"), o.Polyline.fromObject = function(u, l) {
      return o.Object._fromObject("Polyline", u, l, "points");
    });
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.util.projectStrokeOnPoints;
    o.Polygon ? o.warn("fabric.Polygon is already defined") : (o.Polygon = o.util.createClass(o.Polyline, { type: "polygon", _projectStrokeOnPoints: function() {
      return c(this.points, this);
    }, _render: function(g) {
      this.commonRender(g) && (g.closePath(), this._renderPaintInOrder(g));
    } }), o.Polygon.ATTRIBUTE_NAMES = o.SHARED_ATTRIBUTES.concat(), o.Polygon.fromElement = o.Polyline.fromElementGenerator("Polygon"), o.Polygon.fromObject = function(g, i) {
      o.Object._fromObject("Polygon", g, i, "points");
    });
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.util.array.min, g = o.util.array.max, i = o.util.object.extend, n = o.util.object.clone, s = o.util.toFixed;
    o.Path ? o.warn("fabric.Path is already defined") : (o.Path = o.util.createClass(o.Object, { type: "path", path: null, cacheProperties: o.Object.prototype.cacheProperties.concat("path", "fillRule"), stateProperties: o.Object.prototype.stateProperties.concat("path"), initialize: function(u, l) {
      delete (l = n(l || {})).path, this.callSuper("initialize", l), this._setPath(u || [], l);
    }, _setPath: function(u, l) {
      this.path = o.util.makePathSimpler(Array.isArray(u) ? u : o.util.parsePath(u)), o.Polyline.prototype._setPositionDimensions.call(this, l || {});
    }, _renderPathCommands: function(u) {
      var l, h = 0, p = 0, v = 0, b = 0, F = 0, U = 0, k = -this.pathOffset.x, T = -this.pathOffset.y;
      u.beginPath();
      for (var H = 0, K = this.path.length; H < K; ++H)
        switch ((l = this.path[H])[0]) {
          case "L":
            v = l[1], b = l[2], u.lineTo(v + k, b + T);
            break;
          case "M":
            h = v = l[1], p = b = l[2], u.moveTo(v + k, b + T);
            break;
          case "C":
            v = l[5], b = l[6], F = l[3], U = l[4], u.bezierCurveTo(l[1] + k, l[2] + T, F + k, U + T, v + k, b + T);
            break;
          case "Q":
            u.quadraticCurveTo(l[1] + k, l[2] + T, l[3] + k, l[4] + T), v = l[3], b = l[4], F = l[1], U = l[2];
            break;
          case "z":
          case "Z":
            v = h, b = p, u.closePath();
        }
    }, _render: function(u) {
      this._renderPathCommands(u), this._renderPaintInOrder(u);
    }, toString: function() {
      return "#<fabric.Path (" + this.complexity() + '): { "top": ' + this.top + ', "left": ' + this.left + " }>";
    }, toObject: function(u) {
      return i(this.callSuper("toObject", u), { path: this.path.map(function(l) {
        return l.slice();
      }) });
    }, toDatalessObject: function(u) {
      var l = this.toObject(["sourcePath"].concat(u));
      return l.sourcePath && delete l.path, l;
    }, _toSVG: function() {
      return ["<path ", "COMMON_PARTS", 'd="', o.util.joinPath(this.path), '" stroke-linecap="round" ', `/>
`];
    }, _getOffsetTransform: function() {
      var u = o.Object.NUM_FRACTION_DIGITS;
      return " translate(" + s(-this.pathOffset.x, u) + ", " + s(-this.pathOffset.y, u) + ")";
    }, toClipPathSVG: function(u) {
      var l = this._getOffsetTransform();
      return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(), { reviver: u, additionalTransform: l });
    }, toSVG: function(u) {
      var l = this._getOffsetTransform();
      return this._createBaseSVGMarkup(this._toSVG(), { reviver: u, additionalTransform: l });
    }, complexity: function() {
      return this.path.length;
    }, _calcDimensions: function() {
      for (var u, l, h = [], p = [], v = 0, b = 0, F = 0, U = 0, k = 0, T = this.path.length; k < T; ++k) {
        switch ((u = this.path[k])[0]) {
          case "L":
            F = u[1], U = u[2], l = [];
            break;
          case "M":
            v = F = u[1], b = U = u[2], l = [];
            break;
          case "C":
            l = o.util.getBoundsOfCurve(F, U, u[1], u[2], u[3], u[4], u[5], u[6]), F = u[5], U = u[6];
            break;
          case "Q":
            l = o.util.getBoundsOfCurve(F, U, u[1], u[2], u[1], u[2], u[3], u[4]), F = u[3], U = u[4];
            break;
          case "z":
          case "Z":
            F = v, U = b;
        }
        l.forEach(function(P) {
          h.push(P.x), p.push(P.y);
        }), h.push(F), p.push(U);
      }
      var H = c(h) || 0, K = c(p) || 0;
      return { left: H, top: K, width: (g(h) || 0) - H, height: (g(p) || 0) - K };
    } }), o.Path.fromObject = function(u, l) {
      if (typeof u.sourcePath == "string") {
        var h = u.sourcePath;
        o.loadSVGFromURL(h, function(p) {
          var v = p[0];
          v.setOptions(u), u.clipPath ? o.util.enlivenObjects([u.clipPath], function(b) {
            v.clipPath = b[0], l && l(v);
          }) : l && l(v);
        });
      } else
        o.Object._fromObject("Path", u, l, "path");
    }, o.Path.ATTRIBUTE_NAMES = o.SHARED_ATTRIBUTES.concat(["d"]), o.Path.fromElement = function(u, l, h) {
      var p = o.parseAttributes(u, o.Path.ATTRIBUTE_NAMES);
      p.fromSVG = !0, l(new o.Path(p.d, i(p, h)));
    });
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.util.array.min, g = o.util.array.max;
    o.Group || (o.Group = o.util.createClass(o.Object, o.Collection, { type: "group", strokeWidth: 0, subTargetCheck: !1, cacheProperties: [], useSetOnGroup: !1, initialize: function(i, n, s) {
      n = n || {}, this._objects = [], s && this.callSuper("initialize", n), this._objects = i || [];
      for (var u = this._objects.length; u--; )
        this._objects[u].group = this;
      if (s)
        this._updateObjectsACoords();
      else {
        var l = n && n.centerPoint;
        n.originX !== void 0 && (this.originX = n.originX), n.originY !== void 0 && (this.originY = n.originY), l || this._calcBounds(), this._updateObjectsCoords(l), delete n.centerPoint, this.callSuper("initialize", n);
      }
      this.setCoords();
    }, _updateObjectsACoords: function() {
      for (var i = this._objects.length; i--; )
        this._objects[i].setCoords(!0);
    }, _updateObjectsCoords: function(i) {
      i = i || this.getCenterPoint();
      for (var n = this._objects.length; n--; )
        this._updateObjectCoords(this._objects[n], i);
    }, _updateObjectCoords: function(i, n) {
      var s = i.left, u = i.top;
      i.set({ left: s - n.x, top: u - n.y }), i.group = this, i.setCoords(!0);
    }, toString: function() {
      return "#<fabric.Group: (" + this.complexity() + ")>";
    }, addWithUpdate: function(i) {
      var n = !!this.group;
      return this._restoreObjectsState(), o.util.resetObjectTransform(this), i && (n && o.util.removeTransformFromObject(i, this.group.calcTransformMatrix()), this._objects.push(i), i.group = this, i._set("canvas", this.canvas)), this._calcBounds(), this._updateObjectsCoords(), this.dirty = !0, n ? this.group.addWithUpdate() : this.setCoords(), this;
    }, removeWithUpdate: function(i) {
      return this._restoreObjectsState(), o.util.resetObjectTransform(this), this.remove(i), this._calcBounds(), this._updateObjectsCoords(), this.setCoords(), this.dirty = !0, this;
    }, _onObjectAdded: function(i) {
      this.dirty = !0, i.group = this, i._set("canvas", this.canvas);
    }, _onObjectRemoved: function(i) {
      this.dirty = !0, delete i.group;
    }, _set: function(i, n) {
      var s = this._objects.length;
      if (this.useSetOnGroup)
        for (; s--; )
          this._objects[s].setOnGroup(i, n);
      if (i === "canvas")
        for (; s--; )
          this._objects[s]._set(i, n);
      o.Object.prototype._set.call(this, i, n);
    }, toObject: function(i) {
      var n = this.includeDefaultValues, s = this._objects.filter(function(l) {
        return !l.excludeFromExport;
      }).map(function(l) {
        var h = l.includeDefaultValues;
        l.includeDefaultValues = n;
        var p = l.toObject(i);
        return l.includeDefaultValues = h, p;
      }), u = o.Object.prototype.toObject.call(this, i);
      return u.objects = s, u;
    }, toDatalessObject: function(i) {
      var n, s = this.sourcePath;
      if (s)
        n = s;
      else {
        var u = this.includeDefaultValues;
        n = this._objects.map(function(h) {
          var p = h.includeDefaultValues;
          h.includeDefaultValues = u;
          var v = h.toDatalessObject(i);
          return h.includeDefaultValues = p, v;
        });
      }
      var l = o.Object.prototype.toDatalessObject.call(this, i);
      return l.objects = n, l;
    }, render: function(i) {
      this._transformDone = !0, this.callSuper("render", i), this._transformDone = !1;
    }, shouldCache: function() {
      var i = o.Object.prototype.shouldCache.call(this);
      if (i) {
        for (var n = 0, s = this._objects.length; n < s; n++)
          if (this._objects[n].willDrawShadow())
            return this.ownCaching = !1, !1;
      }
      return i;
    }, willDrawShadow: function() {
      if (o.Object.prototype.willDrawShadow.call(this))
        return !0;
      for (var i = 0, n = this._objects.length; i < n; i++)
        if (this._objects[i].willDrawShadow())
          return !0;
      return !1;
    }, isOnACache: function() {
      return this.ownCaching || this.group && this.group.isOnACache();
    }, drawObject: function(i) {
      for (var n = 0, s = this._objects.length; n < s; n++)
        this._objects[n].render(i);
      this._drawClipPath(i, this.clipPath);
    }, isCacheDirty: function(i) {
      if (this.callSuper("isCacheDirty", i))
        return !0;
      if (!this.statefullCache)
        return !1;
      for (var n = 0, s = this._objects.length; n < s; n++)
        if (this._objects[n].isCacheDirty(!0)) {
          if (this._cacheCanvas) {
            var u = this.cacheWidth / this.zoomX, l = this.cacheHeight / this.zoomY;
            this._cacheContext.clearRect(-u / 2, -l / 2, u, l);
          }
          return !0;
        }
      return !1;
    }, _restoreObjectsState: function() {
      var i = this.calcOwnMatrix();
      return this._objects.forEach(function(n) {
        o.util.addTransformToObject(n, i), delete n.group, n.setCoords();
      }), this;
    }, destroy: function() {
      return this._objects.forEach(function(i) {
        i.set("dirty", !0);
      }), this._restoreObjectsState();
    }, dispose: function() {
      this.callSuper("dispose"), this.forEachObject(function(i) {
        i.dispose && i.dispose();
      }), this._objects = [];
    }, toActiveSelection: function() {
      if (this.canvas) {
        var i = this._objects, n = this.canvas;
        this._objects = [];
        var s = this.toObject();
        delete s.objects;
        var u = new o.ActiveSelection([]);
        return u.set(s), u.type = "activeSelection", n.remove(this), i.forEach(function(l) {
          l.group = u, l.dirty = !0, n.add(l);
        }), u.canvas = n, u._objects = i, n._activeObject = u, u.setCoords(), u;
      }
    }, ungroupOnCanvas: function() {
      return this._restoreObjectsState();
    }, setObjectsCoords: function() {
      return this.forEachObject(function(i) {
        i.setCoords(!0);
      }), this;
    }, _calcBounds: function(i) {
      for (var n, s, u, l, h = [], p = [], v = ["tr", "br", "bl", "tl"], b = 0, F = this._objects.length, U = v.length; b < F; ++b) {
        for (u = (n = this._objects[b]).calcACoords(), l = 0; l < U; l++)
          s = v[l], h.push(u[s].x), p.push(u[s].y);
        n.aCoords = u;
      }
      this._getBounds(h, p, i);
    }, _getBounds: function(i, n, s) {
      var u = new o.Point(c(i), c(n)), l = new o.Point(g(i), g(n)), h = u.y || 0, p = u.x || 0, v = l.x - u.x || 0, b = l.y - u.y || 0;
      this.width = v, this.height = b, s || this.setPositionByOrigin({ x: p, y: h }, "left", "top");
    }, _toSVG: function(i) {
      for (var n = ["<g ", "COMMON_PARTS", ` >
`], s = 0, u = this._objects.length; s < u; s++)
        n.push("		", this._objects[s].toSVG(i));
      return n.push(`</g>
`), n;
    }, getSvgStyles: function() {
      var i = this.opacity !== void 0 && this.opacity !== 1 ? "opacity: " + this.opacity + ";" : "", n = this.visible ? "" : " visibility: hidden;";
      return [i, this.getSvgFilter(), n].join("");
    }, toClipPathSVG: function(i) {
      for (var n = [], s = 0, u = this._objects.length; s < u; s++)
        n.push("	", this._objects[s].toClipPathSVG(i));
      return this._createBaseClipPathSVGMarkup(n, { reviver: i });
    } }), o.Group.fromObject = function(i, n) {
      var s = i.objects, u = o.util.object.clone(i, !0);
      delete u.objects, typeof s != "string" ? o.util.enlivenObjects(s, function(l) {
        o.util.enlivenObjectEnlivables(i, u, function() {
          n && n(new o.Group(l, u, !0));
        });
      }) : o.loadSVGFromURL(s, function(l) {
        var h = o.util.groupSVGElements(l, i, s), p = u.clipPath;
        delete u.clipPath, h.set(u), p ? o.util.enlivenObjects([p], function(v) {
          h.clipPath = v[0], n && n(h);
        }) : n && n(h);
      });
    });
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {});
    o.ActiveSelection || (o.ActiveSelection = o.util.createClass(o.Group, { type: "activeSelection", initialize: function(c, g) {
      g = g || {}, this._objects = c || [];
      for (var i = this._objects.length; i--; )
        this._objects[i].group = this;
      g.originX && (this.originX = g.originX), g.originY && (this.originY = g.originY), this._calcBounds(), this._updateObjectsCoords(), o.Object.prototype.initialize.call(this, g), this.setCoords();
    }, toGroup: function() {
      var c = this._objects.concat();
      this._objects = [];
      var g = o.Object.prototype.toObject.call(this), i = new o.Group([]);
      if (delete g.type, i.set(g), c.forEach(function(s) {
        s.canvas.remove(s), s.group = i;
      }), i._objects = c, !this.canvas)
        return i;
      var n = this.canvas;
      return n.add(i), n._activeObject = i, i.setCoords(), i;
    }, onDeselect: function() {
      return this.destroy(), !1;
    }, toString: function() {
      return "#<fabric.ActiveSelection: (" + this.complexity() + ")>";
    }, shouldCache: function() {
      return !1;
    }, isOnACache: function() {
      return !1;
    }, _renderControls: function(c, g, i) {
      c.save(), c.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1, this.callSuper("_renderControls", c, g), (i = i || {}).hasControls === void 0 && (i.hasControls = !1), i.forActiveSelection = !0;
      for (var n = 0, s = this._objects.length; n < s; n++)
        this._objects[n]._renderControls(c, i);
      c.restore();
    } }), o.ActiveSelection.fromObject = function(c, g) {
      o.util.enlivenObjects(c.objects, function(i) {
        delete c.objects, g && g(new o.ActiveSelection(i, c, !0));
      });
    });
  }(e), function(d) {
    var o = m.util.object.extend;
    d.fabric || (d.fabric = {}), d.fabric.Image ? m.warn("fabric.Image is already defined.") : (m.Image = m.util.createClass(m.Object, { type: "image", strokeWidth: 0, srcFromAttribute: !1, _lastScaleX: 1, _lastScaleY: 1, _filterScalingX: 1, _filterScalingY: 1, minimumScaleTrigger: 0.5, stateProperties: m.Object.prototype.stateProperties.concat("cropX", "cropY"), cacheProperties: m.Object.prototype.cacheProperties.concat("cropX", "cropY"), cacheKey: "", cropX: 0, cropY: 0, imageSmoothing: !0, initialize: function(c, g) {
      g || (g = {}), this.filters = [], this.cacheKey = "texture" + m.Object.__uid++, this.callSuper("initialize", g), this._initElement(c, g);
    }, getElement: function() {
      return this._element || {};
    }, setElement: function(c, g) {
      return this.removeTexture(this.cacheKey), this.removeTexture(this.cacheKey + "_filtered"), this._element = c, this._originalElement = c, this._initConfig(g), this.filters.length !== 0 && this.applyFilters(), this.resizeFilter && this.applyResizeFilters(), this;
    }, removeTexture: function(c) {
      var g = m.filterBackend;
      g && g.evictCachesForKey && g.evictCachesForKey(c);
    }, dispose: function() {
      this.callSuper("dispose"), this.removeTexture(this.cacheKey), this.removeTexture(this.cacheKey + "_filtered"), this._cacheContext = void 0, ["_originalElement", "_element", "_filteredEl", "_cacheCanvas"].forEach((function(c) {
        m.util.cleanUpJsdomNode(this[c]), this[c] = void 0;
      }).bind(this));
    }, getCrossOrigin: function() {
      return this._originalElement && (this._originalElement.crossOrigin || null);
    }, getOriginalSize: function() {
      var c = this.getElement();
      return { width: c.naturalWidth || c.width, height: c.naturalHeight || c.height };
    }, _stroke: function(c) {
      if (this.stroke && this.strokeWidth !== 0) {
        var g = this.width / 2, i = this.height / 2;
        c.beginPath(), c.moveTo(-g, -i), c.lineTo(g, -i), c.lineTo(g, i), c.lineTo(-g, i), c.lineTo(-g, -i), c.closePath();
      }
    }, toObject: function(c) {
      var g = [];
      this.filters.forEach(function(n) {
        n && g.push(n.toObject());
      });
      var i = o(this.callSuper("toObject", ["cropX", "cropY"].concat(c)), { src: this.getSrc(), crossOrigin: this.getCrossOrigin(), filters: g });
      return this.resizeFilter && (i.resizeFilter = this.resizeFilter.toObject()), i;
    }, hasCrop: function() {
      return this.cropX || this.cropY || this.width < this._element.width || this.height < this._element.height;
    }, _toSVG: function() {
      var c, g = [], i = [], n = this._element, s = -this.width / 2, u = -this.height / 2, l = "", h = "";
      if (!n)
        return [];
      if (this.hasCrop()) {
        var p = m.Object.__uid++;
        g.push('<clipPath id="imageCrop_' + p + `">
`, '	<rect x="' + s + '" y="' + u + '" width="' + this.width + '" height="' + this.height + `" />
`, `</clipPath>
`), l = ' clip-path="url(#imageCrop_' + p + ')" ';
      }
      if (this.imageSmoothing || (h = '" image-rendering="optimizeSpeed'), i.push("	<image ", "COMMON_PARTS", 'xlink:href="', this.getSvgSrc(!0), '" x="', s - this.cropX, '" y="', u - this.cropY, '" width="', n.width || n.naturalWidth, '" height="', n.height || n.height, h, '"', l, `></image>
`), this.stroke || this.strokeDashArray) {
        var v = this.fill;
        this.fill = null, c = ["	<rect ", 'x="', s, '" y="', u, '" width="', this.width, '" height="', this.height, '" style="', this.getSvgStyles(), `"/>
`], this.fill = v;
      }
      return g = this.paintFirst !== "fill" ? g.concat(c, i) : g.concat(i, c);
    }, getSrc: function(c) {
      var g = c ? this._element : this._originalElement;
      return g ? g.toDataURL ? g.toDataURL() : this.srcFromAttribute ? g.getAttribute("src") : g.src : this.src || "";
    }, setSrc: function(c, g, i) {
      return m.util.loadImage(c, function(n, s) {
        this.setElement(n, i), this._setWidthHeight(), g && g(this, s);
      }, this, i && i.crossOrigin), this;
    }, toString: function() {
      return '#<fabric.Image: { src: "' + this.getSrc() + '" }>';
    }, applyResizeFilters: function() {
      var c = this.resizeFilter, g = this.minimumScaleTrigger, i = this.getTotalObjectScaling(), n = i.scaleX, s = i.scaleY, u = this._filteredEl || this._originalElement;
      if (this.group && this.set("dirty", !0), !c || n > g && s > g)
        return this._element = u, this._filterScalingX = 1, this._filterScalingY = 1, this._lastScaleX = n, void (this._lastScaleY = s);
      m.filterBackend || (m.filterBackend = m.initFilterBackend());
      var l = m.util.createCanvasElement(), h = this._filteredEl ? this.cacheKey + "_filtered" : this.cacheKey, p = u.width, v = u.height;
      l.width = p, l.height = v, this._element = l, this._lastScaleX = c.scaleX = n, this._lastScaleY = c.scaleY = s, m.filterBackend.applyFilters([c], u, p, v, this._element, h), this._filterScalingX = l.width / this._originalElement.width, this._filterScalingY = l.height / this._originalElement.height;
    }, applyFilters: function(c) {
      if (c = (c = c || this.filters || []).filter(function(u) {
        return u && !u.isNeutralState();
      }), this.set("dirty", !0), this.removeTexture(this.cacheKey + "_filtered"), c.length === 0)
        return this._element = this._originalElement, this._filteredEl = null, this._filterScalingX = 1, this._filterScalingY = 1, this;
      var g = this._originalElement, i = g.naturalWidth || g.width, n = g.naturalHeight || g.height;
      if (this._element === this._originalElement) {
        var s = m.util.createCanvasElement();
        s.width = i, s.height = n, this._element = s, this._filteredEl = s;
      } else
        this._element = this._filteredEl, this._filteredEl.getContext("2d").clearRect(0, 0, i, n), this._lastScaleX = 1, this._lastScaleY = 1;
      return m.filterBackend || (m.filterBackend = m.initFilterBackend()), m.filterBackend.applyFilters(c, this._originalElement, i, n, this._element, this.cacheKey), this._originalElement.width === this._element.width && this._originalElement.height === this._element.height || (this._filterScalingX = this._element.width / this._originalElement.width, this._filterScalingY = this._element.height / this._originalElement.height), this;
    }, _render: function(c) {
      m.util.setImageSmoothing(c, this.imageSmoothing), this.isMoving !== !0 && this.resizeFilter && this._needsResize() && this.applyResizeFilters(), this._stroke(c), this._renderPaintInOrder(c);
    }, drawCacheOnCanvas: function(c) {
      m.util.setImageSmoothing(c, this.imageSmoothing), m.Object.prototype.drawCacheOnCanvas.call(this, c);
    }, shouldCache: function() {
      return this.needsItsOwnCache();
    }, _renderFill: function(c) {
      var g = this._element;
      if (g) {
        var i = this._filterScalingX, n = this._filterScalingY, s = this.width, u = this.height, l = Math.min, h = Math.max, p = h(this.cropX, 0), v = h(this.cropY, 0), b = g.naturalWidth || g.width, F = g.naturalHeight || g.height, U = p * i, k = v * n, T = l(s * i, b - U), H = l(u * n, F - k), K = -s / 2, P = -u / 2, X = l(s, b / i - p), W = l(u, F / n - v);
        g && c.drawImage(g, U, k, T, H, K, P, X, W);
      }
    }, _needsResize: function() {
      var c = this.getTotalObjectScaling();
      return c.scaleX !== this._lastScaleX || c.scaleY !== this._lastScaleY;
    }, _resetWidthHeight: function() {
      this.set(this.getOriginalSize());
    }, _initElement: function(c, g) {
      this.setElement(m.util.getById(c), g), m.util.addClass(this.getElement(), m.Image.CSS_CANVAS);
    }, _initConfig: function(c) {
      c || (c = {}), this.setOptions(c), this._setWidthHeight(c);
    }, _initFilters: function(c, g) {
      c && c.length ? m.util.enlivenObjects(c, function(i) {
        g && g(i);
      }, "fabric.Image.filters") : g && g();
    }, _setWidthHeight: function(c) {
      c || (c = {});
      var g = this.getElement();
      this.width = c.width || g.naturalWidth || g.width || 0, this.height = c.height || g.naturalHeight || g.height || 0;
    }, parsePreserveAspectRatioAttribute: function() {
      var c, g = m.util.parsePreserveAspectRatioAttribute(this.preserveAspectRatio || ""), i = this._element.width, n = this._element.height, s = 1, u = 1, l = 0, h = 0, p = 0, v = 0, b = this.width, F = this.height, U = { width: b, height: F };
      return !g || g.alignX === "none" && g.alignY === "none" ? (s = b / i, u = F / n) : (g.meetOrSlice === "meet" && (c = (b - i * (s = u = m.util.findScaleToFit(this._element, U))) / 2, g.alignX === "Min" && (l = -c), g.alignX === "Max" && (l = c), c = (F - n * u) / 2, g.alignY === "Min" && (h = -c), g.alignY === "Max" && (h = c)), g.meetOrSlice === "slice" && (c = i - b / (s = u = m.util.findScaleToCover(this._element, U)), g.alignX === "Mid" && (p = c / 2), g.alignX === "Max" && (p = c), c = n - F / u, g.alignY === "Mid" && (v = c / 2), g.alignY === "Max" && (v = c), i = b / s, n = F / u)), { width: i, height: n, scaleX: s, scaleY: u, offsetLeft: l, offsetTop: h, cropX: p, cropY: v };
    } }), m.Image.CSS_CANVAS = "canvas-img", m.Image.prototype.getSvgSrc = m.Image.prototype.getSrc, m.Image.fromObject = function(c, g) {
      var i = m.util.object.clone(c);
      m.util.loadImage(i.src, function(n, s) {
        s ? g && g(null, !0) : m.Image.prototype._initFilters.call(i, i.filters, function(u) {
          i.filters = u || [], m.Image.prototype._initFilters.call(i, [i.resizeFilter], function(l) {
            i.resizeFilter = l[0], m.util.enlivenObjectEnlivables(i, i, function() {
              var h = new m.Image(n, i);
              g(h, !1);
            });
          });
        });
      }, null, i.crossOrigin);
    }, m.Image.fromURL = function(c, g, i) {
      m.util.loadImage(c, function(n, s) {
        g && g(new m.Image(n, i), s);
      }, null, i && i.crossOrigin);
    }, m.Image.ATTRIBUTE_NAMES = m.SHARED_ATTRIBUTES.concat("x y width height preserveAspectRatio xlink:href crossOrigin image-rendering".split(" ")), m.Image.fromElement = function(c, g, i) {
      var n = m.parseAttributes(c, m.Image.ATTRIBUTE_NAMES);
      m.Image.fromURL(n["xlink:href"], g, o(i ? m.util.object.clone(i) : {}, n));
    });
  }(e), m.util.object.extend(m.Object.prototype, { _getAngleValueForStraighten: function() {
    var d = this.angle % 360;
    return d > 0 ? 90 * Math.round((d - 1) / 90) : 90 * Math.round(d / 90);
  }, straighten: function() {
    return this.rotate(this._getAngleValueForStraighten());
  }, fxStraighten: function(d) {
    var o = function() {
    }, c = (d = d || {}).onComplete || o, g = d.onChange || o, i = this;
    return m.util.animate({ target: this, startValue: this.get("angle"), endValue: this._getAngleValueForStraighten(), duration: this.FX_DURATION, onChange: function(n) {
      i.rotate(n), g();
    }, onComplete: function() {
      i.setCoords(), c();
    } });
  } }), m.util.object.extend(m.StaticCanvas.prototype, { straightenObject: function(d) {
    return d.straighten(), this.requestRenderAll(), this;
  }, fxStraightenObject: function(d) {
    return d.fxStraighten({ onChange: this.requestRenderAllBound });
  } }), function() {
    function d(c, g) {
      var i = "precision " + g + ` float;
void main(){}`, n = c.createShader(c.FRAGMENT_SHADER);
      return c.shaderSource(n, i), c.compileShader(n), !!c.getShaderParameter(n, c.COMPILE_STATUS);
    }
    function o(c) {
      c && c.tileSize && (this.tileSize = c.tileSize), this.setupGLContext(this.tileSize, this.tileSize), this.captureGPUInfo();
    }
    m.isWebglSupported = function(c) {
      if (m.isLikelyNode)
        return !1;
      c = c || m.WebglFilterBackend.prototype.tileSize;
      var g = document.createElement("canvas"), i = g.getContext("webgl") || g.getContext("experimental-webgl"), n = !1;
      if (i) {
        m.maxTextureSize = i.getParameter(i.MAX_TEXTURE_SIZE), n = m.maxTextureSize >= c;
        for (var s = ["highp", "mediump", "lowp"], u = 0; u < 3; u++)
          if (d(i, s[u])) {
            m.webGlPrecision = s[u];
            break;
          }
      }
      return this.isSupported = n, n;
    }, m.WebglFilterBackend = o, o.prototype = { tileSize: 2048, resources: {}, setupGLContext: function(c, g) {
      this.dispose(), this.createWebGLCanvas(c, g), this.aPosition = new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]), this.chooseFastestCopyGLTo2DMethod(c, g);
    }, chooseFastestCopyGLTo2DMethod: function(c, g) {
      var i, n = window.performance !== void 0;
      try {
        new ImageData(1, 1), i = !0;
      } catch {
        i = !1;
      }
      var s = typeof ArrayBuffer < "u", u = typeof Uint8ClampedArray < "u";
      if (n && i && s && u) {
        var l = m.util.createCanvasElement(), h = new ArrayBuffer(c * g * 4);
        if (m.forceGLPutImageData)
          return this.imageBuffer = h, void (this.copyGLTo2D = oA);
        var p, v, b = { imageBuffer: h, destinationWidth: c, destinationHeight: g, targetCanvas: l };
        l.width = c, l.height = g, p = window.performance.now(), rA.call(b, this.gl, b), v = window.performance.now() - p, p = window.performance.now(), oA.call(b, this.gl, b), v > window.performance.now() - p ? (this.imageBuffer = h, this.copyGLTo2D = oA) : this.copyGLTo2D = rA;
      }
    }, createWebGLCanvas: function(c, g) {
      var i = m.util.createCanvasElement();
      i.width = c, i.height = g;
      var n = { alpha: !0, premultipliedAlpha: !1, depth: !1, stencil: !1, antialias: !1 }, s = i.getContext("webgl", n);
      s || (s = i.getContext("experimental-webgl", n)), s && (s.clearColor(0, 0, 0, 0), this.canvas = i, this.gl = s);
    }, applyFilters: function(c, g, i, n, s, u) {
      var l, h = this.gl;
      u && (l = this.getCachedTexture(u, g));
      var p = { originalWidth: g.width || g.originalWidth, originalHeight: g.height || g.originalHeight, sourceWidth: i, sourceHeight: n, destinationWidth: i, destinationHeight: n, context: h, sourceTexture: this.createTexture(h, i, n, !l && g), targetTexture: this.createTexture(h, i, n), originalTexture: l || this.createTexture(h, i, n, !l && g), passes: c.length, webgl: !0, aPosition: this.aPosition, programCache: this.programCache, pass: 0, filterBackend: this, targetCanvas: s }, v = h.createFramebuffer();
      return h.bindFramebuffer(h.FRAMEBUFFER, v), c.forEach(function(b) {
        b && b.applyTo(p);
      }), function(b) {
        var F = b.targetCanvas, U = F.width, k = F.height, T = b.destinationWidth, H = b.destinationHeight;
        U === T && k === H || (F.width = T, F.height = H);
      }(p), this.copyGLTo2D(h, p), h.bindTexture(h.TEXTURE_2D, null), h.deleteTexture(p.sourceTexture), h.deleteTexture(p.targetTexture), h.deleteFramebuffer(v), s.getContext("2d").setTransform(1, 0, 0, 1, 0, 0), p;
    }, dispose: function() {
      this.canvas && (this.canvas = null, this.gl = null), this.clearWebGLCaches();
    }, clearWebGLCaches: function() {
      this.programCache = {}, this.textureCache = {};
    }, createTexture: function(c, g, i, n, s) {
      var u = c.createTexture();
      return c.bindTexture(c.TEXTURE_2D, u), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, s || c.NEAREST), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, s || c.NEAREST), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE), n ? c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, c.RGBA, c.UNSIGNED_BYTE, n) : c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, g, i, 0, c.RGBA, c.UNSIGNED_BYTE, null), u;
    }, getCachedTexture: function(c, g) {
      if (this.textureCache[c])
        return this.textureCache[c];
      var i = this.createTexture(this.gl, g.width, g.height, g);
      return this.textureCache[c] = i, i;
    }, evictCachesForKey: function(c) {
      this.textureCache[c] && (this.gl.deleteTexture(this.textureCache[c]), delete this.textureCache[c]);
    }, copyGLTo2D: rA, captureGPUInfo: function() {
      if (this.gpuInfo)
        return this.gpuInfo;
      var c = this.gl, g = { renderer: "", vendor: "" };
      if (!c)
        return g;
      var i = c.getExtension("WEBGL_debug_renderer_info");
      if (i) {
        var n = c.getParameter(i.UNMASKED_RENDERER_WEBGL), s = c.getParameter(i.UNMASKED_VENDOR_WEBGL);
        n && (g.renderer = n.toLowerCase()), s && (g.vendor = s.toLowerCase());
      }
      return this.gpuInfo = g, g;
    } };
  }(), function() {
    var d = function() {
    };
    function o() {
    }
    m.Canvas2dFilterBackend = o, o.prototype = { evictCachesForKey: d, dispose: d, clearWebGLCaches: d, resources: {}, applyFilters: function(c, g, i, n, s) {
      var u = s.getContext("2d");
      u.drawImage(g, 0, 0, i, n);
      var l = { sourceWidth: i, sourceHeight: n, imageData: u.getImageData(0, 0, i, n), originalEl: g, originalImageData: u.getImageData(0, 0, i, n), canvasEl: s, ctx: u, filterBackend: this };
      return c.forEach(function(h) {
        h.applyTo(l);
      }), l.imageData.width === i && l.imageData.height === n || (s.width = l.imageData.width, s.height = l.imageData.height), u.putImageData(l.imageData, 0, 0), l;
    } };
  }(), m.Image = m.Image || {}, m.Image.filters = m.Image.filters || {}, m.Image.filters.BaseFilter = m.util.createClass({ type: "BaseFilter", vertexSource: `attribute vec2 aPosition;
varying vec2 vTexCoord;
void main() {
vTexCoord = aPosition;
gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
}`, fragmentSource: `precision highp float;
varying vec2 vTexCoord;
uniform sampler2D uTexture;
void main() {
gl_FragColor = texture2D(uTexture, vTexCoord);
}`, initialize: function(d) {
    d && this.setOptions(d);
  }, setOptions: function(d) {
    for (var o in d)
      this[o] = d[o];
  }, createProgram: function(d, o, c) {
    o = o || this.fragmentSource, c = c || this.vertexSource, m.webGlPrecision !== "highp" && (o = o.replace(/precision highp float/g, "precision " + m.webGlPrecision + " float"));
    var g = d.createShader(d.VERTEX_SHADER);
    if (d.shaderSource(g, c), d.compileShader(g), !d.getShaderParameter(g, d.COMPILE_STATUS))
      throw new Error("Vertex shader compile error for " + this.type + ": " + d.getShaderInfoLog(g));
    var i = d.createShader(d.FRAGMENT_SHADER);
    if (d.shaderSource(i, o), d.compileShader(i), !d.getShaderParameter(i, d.COMPILE_STATUS))
      throw new Error("Fragment shader compile error for " + this.type + ": " + d.getShaderInfoLog(i));
    var n = d.createProgram();
    if (d.attachShader(n, g), d.attachShader(n, i), d.linkProgram(n), !d.getProgramParameter(n, d.LINK_STATUS))
      throw new Error('Shader link error for "${this.type}" ' + d.getProgramInfoLog(n));
    var s = this.getAttributeLocations(d, n), u = this.getUniformLocations(d, n) || {};
    return u.uStepW = d.getUniformLocation(n, "uStepW"), u.uStepH = d.getUniformLocation(n, "uStepH"), { program: n, attributeLocations: s, uniformLocations: u };
  }, getAttributeLocations: function(d, o) {
    return { aPosition: d.getAttribLocation(o, "aPosition") };
  }, getUniformLocations: function() {
    return {};
  }, sendAttributeData: function(d, o, c) {
    var g = o.aPosition, i = d.createBuffer();
    d.bindBuffer(d.ARRAY_BUFFER, i), d.enableVertexAttribArray(g), d.vertexAttribPointer(g, 2, d.FLOAT, !1, 0, 0), d.bufferData(d.ARRAY_BUFFER, c, d.STATIC_DRAW);
  }, _setupFrameBuffer: function(d) {
    var o, c, g = d.context;
    d.passes > 1 ? (o = d.destinationWidth, c = d.destinationHeight, d.sourceWidth === o && d.sourceHeight === c || (g.deleteTexture(d.targetTexture), d.targetTexture = d.filterBackend.createTexture(g, o, c)), g.framebufferTexture2D(g.FRAMEBUFFER, g.COLOR_ATTACHMENT0, g.TEXTURE_2D, d.targetTexture, 0)) : (g.bindFramebuffer(g.FRAMEBUFFER, null), g.finish());
  }, _swapTextures: function(d) {
    d.passes--, d.pass++;
    var o = d.targetTexture;
    d.targetTexture = d.sourceTexture, d.sourceTexture = o;
  }, isNeutralState: function() {
    var d = this.mainParameter, o = m.Image.filters[this.type].prototype;
    if (d) {
      if (Array.isArray(o[d])) {
        for (var c = o[d].length; c--; )
          if (this[d][c] !== o[d][c])
            return !1;
        return !0;
      }
      return o[d] === this[d];
    }
    return !1;
  }, applyTo: function(d) {
    d.webgl ? (this._setupFrameBuffer(d), this.applyToWebGL(d), this._swapTextures(d)) : this.applyTo2d(d);
  }, retrieveShader: function(d) {
    return d.programCache.hasOwnProperty(this.type) || (d.programCache[this.type] = this.createProgram(d.context)), d.programCache[this.type];
  }, applyToWebGL: function(d) {
    var o = d.context, c = this.retrieveShader(d);
    d.pass === 0 && d.originalTexture ? o.bindTexture(o.TEXTURE_2D, d.originalTexture) : o.bindTexture(o.TEXTURE_2D, d.sourceTexture), o.useProgram(c.program), this.sendAttributeData(o, c.attributeLocations, d.aPosition), o.uniform1f(c.uniformLocations.uStepW, 1 / d.sourceWidth), o.uniform1f(c.uniformLocations.uStepH, 1 / d.sourceHeight), this.sendUniformData(o, c.uniformLocations), o.viewport(0, 0, d.destinationWidth, d.destinationHeight), o.drawArrays(o.TRIANGLE_STRIP, 0, 4);
  }, bindAdditionalTexture: function(d, o, c) {
    d.activeTexture(c), d.bindTexture(d.TEXTURE_2D, o), d.activeTexture(d.TEXTURE0);
  }, unbindAdditionalTexture: function(d, o) {
    d.activeTexture(o), d.bindTexture(d.TEXTURE_2D, null), d.activeTexture(d.TEXTURE0);
  }, getMainParameter: function() {
    return this[this.mainParameter];
  }, setMainParameter: function(d) {
    this[this.mainParameter] = d;
  }, sendUniformData: function() {
  }, createHelpLayer: function(d) {
    if (!d.helpLayer) {
      var o = document.createElement("canvas");
      o.width = d.sourceWidth, o.height = d.sourceHeight, d.helpLayer = o;
    }
  }, toObject: function() {
    var d = { type: this.type }, o = this.mainParameter;
    return o && (d[o] = this[o]), d;
  }, toJSON: function() {
    return this.toObject();
  } }), m.Image.filters.BaseFilter.fromObject = function(d, o) {
    var c = new m.Image.filters[d.type](d);
    return o && o(c), c;
  }, function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.Image.filters, g = o.util.createClass;
    c.ColorMatrix = g(c.BaseFilter, { type: "ColorMatrix", fragmentSource: `precision highp float;
uniform sampler2D uTexture;
varying vec2 vTexCoord;
uniform mat4 uColorMatrix;
uniform vec4 uConstants;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
color *= uColorMatrix;
color += uConstants;
gl_FragColor = color;
}`, matrix: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], mainParameter: "matrix", colorsOnly: !0, initialize: function(i) {
      this.callSuper("initialize", i), this.matrix = this.matrix.slice(0);
    }, applyTo2d: function(i) {
      var n, s, u, l, h, p = i.imageData.data, v = p.length, b = this.matrix, F = this.colorsOnly;
      for (h = 0; h < v; h += 4)
        n = p[h], s = p[h + 1], u = p[h + 2], F ? (p[h] = n * b[0] + s * b[1] + u * b[2] + 255 * b[4], p[h + 1] = n * b[5] + s * b[6] + u * b[7] + 255 * b[9], p[h + 2] = n * b[10] + s * b[11] + u * b[12] + 255 * b[14]) : (l = p[h + 3], p[h] = n * b[0] + s * b[1] + u * b[2] + l * b[3] + 255 * b[4], p[h + 1] = n * b[5] + s * b[6] + u * b[7] + l * b[8] + 255 * b[9], p[h + 2] = n * b[10] + s * b[11] + u * b[12] + l * b[13] + 255 * b[14], p[h + 3] = n * b[15] + s * b[16] + u * b[17] + l * b[18] + 255 * b[19]);
    }, getUniformLocations: function(i, n) {
      return { uColorMatrix: i.getUniformLocation(n, "uColorMatrix"), uConstants: i.getUniformLocation(n, "uConstants") };
    }, sendUniformData: function(i, n) {
      var s = this.matrix, u = [s[0], s[1], s[2], s[3], s[5], s[6], s[7], s[8], s[10], s[11], s[12], s[13], s[15], s[16], s[17], s[18]], l = [s[4], s[9], s[14], s[19]];
      i.uniformMatrix4fv(n.uColorMatrix, !1, u), i.uniform4fv(n.uConstants, l);
    } }), o.Image.filters.ColorMatrix.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.Image.filters, g = o.util.createClass;
    c.Brightness = g(c.BaseFilter, { type: "Brightness", fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uBrightness;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
color.rgb += uBrightness;
gl_FragColor = color;
}`, brightness: 0, mainParameter: "brightness", applyTo2d: function(i) {
      if (this.brightness !== 0) {
        var n, s = i.imageData.data, u = s.length, l = Math.round(255 * this.brightness);
        for (n = 0; n < u; n += 4)
          s[n] = s[n] + l, s[n + 1] = s[n + 1] + l, s[n + 2] = s[n + 2] + l;
      }
    }, getUniformLocations: function(i, n) {
      return { uBrightness: i.getUniformLocation(n, "uBrightness") };
    }, sendUniformData: function(i, n) {
      i.uniform1f(n.uBrightness, this.brightness);
    } }), o.Image.filters.Brightness.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.util.object.extend, g = o.Image.filters, i = o.util.createClass;
    g.Convolute = i(g.BaseFilter, { type: "Convolute", opaque: !1, matrix: [0, 0, 0, 0, 1, 0, 0, 0, 0], fragmentSource: { Convolute_3_1: `precision highp float;
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
}` }, retrieveShader: function(n) {
      var s = Math.sqrt(this.matrix.length), u = this.type + "_" + s + "_" + (this.opaque ? 1 : 0), l = this.fragmentSource[u];
      return n.programCache.hasOwnProperty(u) || (n.programCache[u] = this.createProgram(n.context, l)), n.programCache[u];
    }, applyTo2d: function(n) {
      var s, u, l, h, p, v, b, F, U, k, T, H, K, P = n.imageData, X = P.data, W = this.matrix, I = Math.round(Math.sqrt(W.length)), L = Math.floor(I / 2), R = P.width, G = P.height, Y = n.ctx.createImageData(R, G), M = Y.data, O = this.opaque ? 1 : 0;
      for (T = 0; T < G; T++)
        for (k = 0; k < R; k++) {
          for (p = 4 * (T * R + k), s = 0, u = 0, l = 0, h = 0, K = 0; K < I; K++)
            for (H = 0; H < I; H++)
              v = k + H - L, (b = T + K - L) < 0 || b >= G || v < 0 || v >= R || (F = 4 * (b * R + v), U = W[K * I + H], s += X[F] * U, u += X[F + 1] * U, l += X[F + 2] * U, O || (h += X[F + 3] * U));
          M[p] = s, M[p + 1] = u, M[p + 2] = l, M[p + 3] = O ? X[p + 3] : h;
        }
      n.imageData = Y;
    }, getUniformLocations: function(n, s) {
      return { uMatrix: n.getUniformLocation(s, "uMatrix"), uOpaque: n.getUniformLocation(s, "uOpaque"), uHalfSize: n.getUniformLocation(s, "uHalfSize"), uSize: n.getUniformLocation(s, "uSize") };
    }, sendUniformData: function(n, s) {
      n.uniform1fv(s.uMatrix, this.matrix);
    }, toObject: function() {
      return c(this.callSuper("toObject"), { opaque: this.opaque, matrix: this.matrix });
    } }), o.Image.filters.Convolute.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.Image.filters, g = o.util.createClass;
    c.Grayscale = g(c.BaseFilter, { type: "Grayscale", fragmentSource: { average: `precision highp float;
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
}` }, mode: "average", mainParameter: "mode", applyTo2d: function(i) {
      var n, s, u = i.imageData.data, l = u.length, h = this.mode;
      for (n = 0; n < l; n += 4)
        h === "average" ? s = (u[n] + u[n + 1] + u[n + 2]) / 3 : h === "lightness" ? s = (Math.min(u[n], u[n + 1], u[n + 2]) + Math.max(u[n], u[n + 1], u[n + 2])) / 2 : h === "luminosity" && (s = 0.21 * u[n] + 0.72 * u[n + 1] + 0.07 * u[n + 2]), u[n] = s, u[n + 1] = s, u[n + 2] = s;
    }, retrieveShader: function(i) {
      var n = this.type + "_" + this.mode;
      if (!i.programCache.hasOwnProperty(n)) {
        var s = this.fragmentSource[this.mode];
        i.programCache[n] = this.createProgram(i.context, s);
      }
      return i.programCache[n];
    }, getUniformLocations: function(i, n) {
      return { uMode: i.getUniformLocation(n, "uMode") };
    }, sendUniformData: function(i, n) {
      i.uniform1i(n.uMode, 1);
    }, isNeutralState: function() {
      return !1;
    } }), o.Image.filters.Grayscale.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.Image.filters, g = o.util.createClass;
    c.Invert = g(c.BaseFilter, { type: "Invert", fragmentSource: `precision highp float;
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
}`, invert: !0, mainParameter: "invert", applyTo2d: function(i) {
      var n, s = i.imageData.data, u = s.length;
      for (n = 0; n < u; n += 4)
        s[n] = 255 - s[n], s[n + 1] = 255 - s[n + 1], s[n + 2] = 255 - s[n + 2];
    }, isNeutralState: function() {
      return !this.invert;
    }, getUniformLocations: function(i, n) {
      return { uInvert: i.getUniformLocation(n, "uInvert") };
    }, sendUniformData: function(i, n) {
      i.uniform1i(n.uInvert, this.invert);
    } }), o.Image.filters.Invert.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.util.object.extend, g = o.Image.filters, i = o.util.createClass;
    g.Noise = i(g.BaseFilter, { type: "Noise", fragmentSource: `precision highp float;
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
}`, mainParameter: "noise", noise: 0, applyTo2d: function(n) {
      if (this.noise !== 0) {
        var s, u, l = n.imageData.data, h = l.length, p = this.noise;
        for (s = 0, h = l.length; s < h; s += 4)
          u = (0.5 - Math.random()) * p, l[s] += u, l[s + 1] += u, l[s + 2] += u;
      }
    }, getUniformLocations: function(n, s) {
      return { uNoise: n.getUniformLocation(s, "uNoise"), uSeed: n.getUniformLocation(s, "uSeed") };
    }, sendUniformData: function(n, s) {
      n.uniform1f(s.uNoise, this.noise / 255), n.uniform1f(s.uSeed, Math.random());
    }, toObject: function() {
      return c(this.callSuper("toObject"), { noise: this.noise });
    } }), o.Image.filters.Noise.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.Image.filters, g = o.util.createClass;
    c.Pixelate = g(c.BaseFilter, { type: "Pixelate", blocksize: 4, mainParameter: "blocksize", fragmentSource: `precision highp float;
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
}`, applyTo2d: function(i) {
      var n, s, u, l, h, p, v, b, F, U, k, T = i.imageData, H = T.data, K = T.height, P = T.width;
      for (s = 0; s < K; s += this.blocksize)
        for (u = 0; u < P; u += this.blocksize)
          for (l = H[n = 4 * s * P + 4 * u], h = H[n + 1], p = H[n + 2], v = H[n + 3], U = Math.min(s + this.blocksize, K), k = Math.min(u + this.blocksize, P), b = s; b < U; b++)
            for (F = u; F < k; F++)
              H[n = 4 * b * P + 4 * F] = l, H[n + 1] = h, H[n + 2] = p, H[n + 3] = v;
    }, isNeutralState: function() {
      return this.blocksize === 1;
    }, getUniformLocations: function(i, n) {
      return { uBlocksize: i.getUniformLocation(n, "uBlocksize"), uStepW: i.getUniformLocation(n, "uStepW"), uStepH: i.getUniformLocation(n, "uStepH") };
    }, sendUniformData: function(i, n) {
      i.uniform1f(n.uBlocksize, this.blocksize);
    } }), o.Image.filters.Pixelate.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.util.object.extend, g = o.Image.filters, i = o.util.createClass;
    g.RemoveColor = i(g.BaseFilter, { type: "RemoveColor", color: "#FFFFFF", fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform vec4 uLow;
uniform vec4 uHigh;
varying vec2 vTexCoord;
void main() {
gl_FragColor = texture2D(uTexture, vTexCoord);
if(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {
gl_FragColor.a = 0.0;
}
}`, distance: 0.02, useAlpha: !1, applyTo2d: function(n) {
      var s, u, l, h, p = n.imageData.data, v = 255 * this.distance, b = new o.Color(this.color).getSource(), F = [b[0] - v, b[1] - v, b[2] - v], U = [b[0] + v, b[1] + v, b[2] + v];
      for (s = 0; s < p.length; s += 4)
        u = p[s], l = p[s + 1], h = p[s + 2], u > F[0] && l > F[1] && h > F[2] && u < U[0] && l < U[1] && h < U[2] && (p[s + 3] = 0);
    }, getUniformLocations: function(n, s) {
      return { uLow: n.getUniformLocation(s, "uLow"), uHigh: n.getUniformLocation(s, "uHigh") };
    }, sendUniformData: function(n, s) {
      var u = new o.Color(this.color).getSource(), l = parseFloat(this.distance), h = [0 + u[0] / 255 - l, 0 + u[1] / 255 - l, 0 + u[2] / 255 - l, 1], p = [u[0] / 255 + l, u[1] / 255 + l, u[2] / 255 + l, 1];
      n.uniform4fv(s.uLow, h), n.uniform4fv(s.uHigh, p);
    }, toObject: function() {
      return c(this.callSuper("toObject"), { color: this.color, distance: this.distance });
    } }), o.Image.filters.RemoveColor.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.Image.filters, g = o.util.createClass, i = { Brownie: [0.5997, 0.34553, -0.27082, 0, 0.186, -0.0377, 0.86095, 0.15059, 0, -0.1449, 0.24113, -0.07441, 0.44972, 0, -0.02965, 0, 0, 0, 1, 0], Vintage: [0.62793, 0.32021, -0.03965, 0, 0.03784, 0.02578, 0.64411, 0.03259, 0, 0.02926, 0.0466, -0.08512, 0.52416, 0, 0.02023, 0, 0, 0, 1, 0], Kodachrome: [1.12855, -0.39673, -0.03992, 0, 0.24991, -0.16404, 1.08352, -0.05498, 0, 0.09698, -0.16786, -0.56034, 1.60148, 0, 0.13972, 0, 0, 0, 1, 0], Technicolor: [1.91252, -0.85453, -0.09155, 0, 0.04624, -0.30878, 1.76589, -0.10601, 0, -0.27589, -0.2311, -0.75018, 1.84759, 0, 0.12137, 0, 0, 0, 1, 0], Polaroid: [1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016, -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0], Sepia: [0.393, 0.769, 0.189, 0, 0, 0.349, 0.686, 0.168, 0, 0, 0.272, 0.534, 0.131, 0, 0, 0, 0, 0, 1, 0], BlackWhite: [1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 0, 0, 0, 1, 0] };
    for (var n in i)
      c[n] = g(c.ColorMatrix, { type: n, matrix: i[n], mainParameter: !1, colorsOnly: !0 }), o.Image.filters[n].fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(d) {
    var o = d.fabric, c = o.Image.filters, g = o.util.createClass;
    c.BlendColor = g(c.BaseFilter, { type: "BlendColor", color: "#F95C63", mode: "multiply", alpha: 1, fragmentSource: { multiply: `gl_FragColor.rgb *= uColor.rgb;
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
` }, buildSource: function(i) {
      return `precision highp float;
uniform sampler2D uTexture;
uniform vec4 uColor;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
gl_FragColor = color;
if (color.a > 0.0) {
` + this.fragmentSource[i] + `}
}`;
    }, retrieveShader: function(i) {
      var n, s = this.type + "_" + this.mode;
      return i.programCache.hasOwnProperty(s) || (n = this.buildSource(this.mode), i.programCache[s] = this.createProgram(i.context, n)), i.programCache[s];
    }, applyTo2d: function(i) {
      var n, s, u, l, h, p, v, b = i.imageData.data, F = b.length, U = 1 - this.alpha;
      n = (v = new o.Color(this.color).getSource())[0] * this.alpha, s = v[1] * this.alpha, u = v[2] * this.alpha;
      for (var k = 0; k < F; k += 4)
        switch (l = b[k], h = b[k + 1], p = b[k + 2], this.mode) {
          case "multiply":
            b[k] = l * n / 255, b[k + 1] = h * s / 255, b[k + 2] = p * u / 255;
            break;
          case "screen":
            b[k] = 255 - (255 - l) * (255 - n) / 255, b[k + 1] = 255 - (255 - h) * (255 - s) / 255, b[k + 2] = 255 - (255 - p) * (255 - u) / 255;
            break;
          case "add":
            b[k] = l + n, b[k + 1] = h + s, b[k + 2] = p + u;
            break;
          case "diff":
          case "difference":
            b[k] = Math.abs(l - n), b[k + 1] = Math.abs(h - s), b[k + 2] = Math.abs(p - u);
            break;
          case "subtract":
            b[k] = l - n, b[k + 1] = h - s, b[k + 2] = p - u;
            break;
          case "darken":
            b[k] = Math.min(l, n), b[k + 1] = Math.min(h, s), b[k + 2] = Math.min(p, u);
            break;
          case "lighten":
            b[k] = Math.max(l, n), b[k + 1] = Math.max(h, s), b[k + 2] = Math.max(p, u);
            break;
          case "overlay":
            b[k] = n < 128 ? 2 * l * n / 255 : 255 - 2 * (255 - l) * (255 - n) / 255, b[k + 1] = s < 128 ? 2 * h * s / 255 : 255 - 2 * (255 - h) * (255 - s) / 255, b[k + 2] = u < 128 ? 2 * p * u / 255 : 255 - 2 * (255 - p) * (255 - u) / 255;
            break;
          case "exclusion":
            b[k] = n + l - 2 * n * l / 255, b[k + 1] = s + h - 2 * s * h / 255, b[k + 2] = u + p - 2 * u * p / 255;
            break;
          case "tint":
            b[k] = n + l * U, b[k + 1] = s + h * U, b[k + 2] = u + p * U;
        }
    }, getUniformLocations: function(i, n) {
      return { uColor: i.getUniformLocation(n, "uColor") };
    }, sendUniformData: function(i, n) {
      var s = new o.Color(this.color).getSource();
      s[0] = this.alpha * s[0] / 255, s[1] = this.alpha * s[1] / 255, s[2] = this.alpha * s[2] / 255, s[3] = this.alpha, i.uniform4fv(n.uColor, s);
    }, toObject: function() {
      return { type: this.type, color: this.color, mode: this.mode, alpha: this.alpha };
    } }), o.Image.filters.BlendColor.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(d) {
    var o = d.fabric, c = o.Image.filters, g = o.util.createClass;
    c.BlendImage = g(c.BaseFilter, { type: "BlendImage", image: null, mode: "multiply", alpha: 1, vertexSource: `attribute vec2 aPosition;
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
}` }, retrieveShader: function(i) {
      var n = this.type + "_" + this.mode, s = this.fragmentSource[this.mode];
      return i.programCache.hasOwnProperty(n) || (i.programCache[n] = this.createProgram(i.context, s)), i.programCache[n];
    }, applyToWebGL: function(i) {
      var n = i.context, s = this.createTexture(i.filterBackend, this.image);
      this.bindAdditionalTexture(n, s, n.TEXTURE1), this.callSuper("applyToWebGL", i), this.unbindAdditionalTexture(n, n.TEXTURE1);
    }, createTexture: function(i, n) {
      return i.getCachedTexture(n.cacheKey, n._element);
    }, calculateMatrix: function() {
      var i = this.image, n = i._element.width, s = i._element.height;
      return [1 / i.scaleX, 0, 0, 0, 1 / i.scaleY, 0, -i.left / n, -i.top / s, 1];
    }, applyTo2d: function(i) {
      var n, s, u, l, h, p, v, b, F, U, k, T = i.imageData, H = i.filterBackend.resources, K = T.data, P = K.length, X = T.width, W = T.height, I = this.image;
      H.blendImage || (H.blendImage = o.util.createCanvasElement()), U = (F = H.blendImage).getContext("2d"), F.width !== X || F.height !== W ? (F.width = X, F.height = W) : U.clearRect(0, 0, X, W), U.setTransform(I.scaleX, 0, 0, I.scaleY, I.left, I.top), U.drawImage(I._element, 0, 0, X, W), k = U.getImageData(0, 0, X, W).data;
      for (var L = 0; L < P; L += 4)
        switch (h = K[L], p = K[L + 1], v = K[L + 2], b = K[L + 3], n = k[L], s = k[L + 1], u = k[L + 2], l = k[L + 3], this.mode) {
          case "multiply":
            K[L] = h * n / 255, K[L + 1] = p * s / 255, K[L + 2] = v * u / 255, K[L + 3] = b * l / 255;
            break;
          case "mask":
            K[L + 3] = l;
        }
    }, getUniformLocations: function(i, n) {
      return { uTransformMatrix: i.getUniformLocation(n, "uTransformMatrix"), uImage: i.getUniformLocation(n, "uImage") };
    }, sendUniformData: function(i, n) {
      var s = this.calculateMatrix();
      i.uniform1i(n.uImage, 1), i.uniformMatrix3fv(n.uTransformMatrix, !1, s);
    }, toObject: function() {
      return { type: this.type, image: this.image && this.image.toObject(), mode: this.mode, alpha: this.alpha };
    } }), o.Image.filters.BlendImage.fromObject = function(i, n) {
      o.Image.fromObject(i.image, function(s) {
        var u = o.util.object.clone(i);
        u.image = s, n(new o.Image.filters.BlendImage(u));
      });
    };
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {}), c = Math.pow, g = Math.floor, i = Math.sqrt, n = Math.abs, s = Math.round, u = Math.sin, l = Math.ceil, h = o.Image.filters, p = o.util.createClass;
    h.Resize = p(h.BaseFilter, { type: "Resize", resizeType: "hermite", scaleX: 1, scaleY: 1, lanczosLobes: 3, getUniformLocations: function(v, b) {
      return { uDelta: v.getUniformLocation(b, "uDelta"), uTaps: v.getUniformLocation(b, "uTaps") };
    }, sendUniformData: function(v, b) {
      v.uniform2fv(b.uDelta, this.horizontal ? [1 / this.width, 0] : [0, 1 / this.height]), v.uniform1fv(b.uTaps, this.taps);
    }, retrieveShader: function(v) {
      var b = this.getFilterWindow(), F = this.type + "_" + b;
      if (!v.programCache.hasOwnProperty(F)) {
        var U = this.generateShader(b);
        v.programCache[F] = this.createProgram(v.context, U);
      }
      return v.programCache[F];
    }, getFilterWindow: function() {
      var v = this.tempScale;
      return Math.ceil(this.lanczosLobes / v);
    }, getTaps: function() {
      for (var v = this.lanczosCreate(this.lanczosLobes), b = this.tempScale, F = this.getFilterWindow(), U = new Array(F), k = 1; k <= F; k++)
        U[k - 1] = v(k * b);
      return U;
    }, generateShader: function(v) {
      for (var b = new Array(v), F = this.fragmentSourceTOP, U = 1; U <= v; U++)
        b[U - 1] = U + ".0 * uDelta";
      return F += "uniform float uTaps[" + v + `];
`, F += `void main() {
`, F += `  vec4 color = texture2D(uTexture, vTexCoord);
`, F += `  float sum = 1.0;
`, b.forEach(function(k, T) {
        F += "  color += texture2D(uTexture, vTexCoord + " + k + ") * uTaps[" + T + `];
`, F += "  color += texture2D(uTexture, vTexCoord - " + k + ") * uTaps[" + T + `];
`, F += "  sum += 2.0 * uTaps[" + T + `];
`;
      }), F += `  gl_FragColor = color / sum;
`, F += "}";
    }, fragmentSourceTOP: `precision highp float;
uniform sampler2D uTexture;
uniform vec2 uDelta;
varying vec2 vTexCoord;
`, applyTo: function(v) {
      v.webgl ? (v.passes++, this.width = v.sourceWidth, this.horizontal = !0, this.dW = Math.round(this.width * this.scaleX), this.dH = v.sourceHeight, this.tempScale = this.dW / this.width, this.taps = this.getTaps(), v.destinationWidth = this.dW, this._setupFrameBuffer(v), this.applyToWebGL(v), this._swapTextures(v), v.sourceWidth = v.destinationWidth, this.height = v.sourceHeight, this.horizontal = !1, this.dH = Math.round(this.height * this.scaleY), this.tempScale = this.dH / this.height, this.taps = this.getTaps(), v.destinationHeight = this.dH, this._setupFrameBuffer(v), this.applyToWebGL(v), this._swapTextures(v), v.sourceHeight = v.destinationHeight) : this.applyTo2d(v);
    }, isNeutralState: function() {
      return this.scaleX === 1 && this.scaleY === 1;
    }, lanczosCreate: function(v) {
      return function(b) {
        if (b >= v || b <= -v)
          return 0;
        if (b < 11920929e-14 && b > -11920929e-14)
          return 1;
        var F = (b *= Math.PI) / v;
        return u(b) / b * u(F) / F;
      };
    }, applyTo2d: function(v) {
      var b = v.imageData, F = this.scaleX, U = this.scaleY;
      this.rcpScaleX = 1 / F, this.rcpScaleY = 1 / U;
      var k, T = b.width, H = b.height, K = s(T * F), P = s(H * U);
      this.resizeType === "sliceHack" ? k = this.sliceByTwo(v, T, H, K, P) : this.resizeType === "hermite" ? k = this.hermiteFastResize(v, T, H, K, P) : this.resizeType === "bilinear" ? k = this.bilinearFiltering(v, T, H, K, P) : this.resizeType === "lanczos" && (k = this.lanczosResize(v, T, H, K, P)), v.imageData = k;
    }, sliceByTwo: function(v, b, F, U, k) {
      var T, H, K = v.imageData, P = 0.5, X = !1, W = !1, I = b * P, L = F * P, R = o.filterBackend.resources, G = 0, Y = 0, M = b, O = 0;
      for (R.sliceByTwo || (R.sliceByTwo = document.createElement("canvas")), ((T = R.sliceByTwo).width < 1.5 * b || T.height < F) && (T.width = 1.5 * b, T.height = F), (H = T.getContext("2d")).clearRect(0, 0, 1.5 * b, F), H.putImageData(K, 0, 0), U = g(U), k = g(k); !X || !W; )
        b = I, F = L, U < g(I * P) ? I = g(I * P) : (I = U, X = !0), k < g(L * P) ? L = g(L * P) : (L = k, W = !0), H.drawImage(T, G, Y, b, F, M, O, I, L), G = M, Y = O, O += L;
      return H.getImageData(G, Y, U, k);
    }, lanczosResize: function(v, b, F, U, k) {
      var T = v.imageData.data, H = v.ctx.createImageData(U, k), K = H.data, P = this.lanczosCreate(this.lanczosLobes), X = this.rcpScaleX, W = this.rcpScaleY, I = 2 / this.rcpScaleX, L = 2 / this.rcpScaleY, R = l(X * this.lanczosLobes / 2), G = l(W * this.lanczosLobes / 2), Y = {}, M = {}, O = {};
      return function j(J) {
        var N, z, AA, tA, iA, $, nA, Z, lA, sA, dA;
        for (M.x = (J + 0.5) * X, O.x = g(M.x), N = 0; N < k; N++) {
          for (M.y = (N + 0.5) * W, O.y = g(M.y), iA = 0, $ = 0, nA = 0, Z = 0, lA = 0, z = O.x - R; z <= O.x + R; z++)
            if (!(z < 0 || z >= b)) {
              sA = g(1e3 * n(z - M.x)), Y[sA] || (Y[sA] = {});
              for (var wA = O.y - G; wA <= O.y + G; wA++)
                wA < 0 || wA >= F || (dA = g(1e3 * n(wA - M.y)), Y[sA][dA] || (Y[sA][dA] = P(i(c(sA * I, 2) + c(dA * L, 2)) / 1e3)), (AA = Y[sA][dA]) > 0 && (iA += AA, $ += AA * T[tA = 4 * (wA * b + z)], nA += AA * T[tA + 1], Z += AA * T[tA + 2], lA += AA * T[tA + 3]));
            }
          K[tA = 4 * (N * U + J)] = $ / iA, K[tA + 1] = nA / iA, K[tA + 2] = Z / iA, K[tA + 3] = lA / iA;
        }
        return ++J < U ? j(J) : H;
      }(0);
    }, bilinearFiltering: function(v, b, F, U, k) {
      var T, H, K, P, X, W, I, L, R, G = 0, Y = this.rcpScaleX, M = this.rcpScaleY, O = 4 * (b - 1), j = v.imageData.data, J = v.ctx.createImageData(U, k), N = J.data;
      for (K = 0; K < k; K++)
        for (P = 0; P < U; P++)
          for (X = Y * P - (T = g(Y * P)), W = M * K - (H = g(M * K)), R = 4 * (H * b + T), I = 0; I < 4; I++)
            L = j[R + I] * (1 - X) * (1 - W) + j[R + 4 + I] * X * (1 - W) + j[R + O + I] * W * (1 - X) + j[R + O + 4 + I] * X * W, N[G++] = L;
      return J;
    }, hermiteFastResize: function(v, b, F, U, k) {
      for (var T = this.rcpScaleX, H = this.rcpScaleY, K = l(T / 2), P = l(H / 2), X = v.imageData.data, W = v.ctx.createImageData(U, k), I = W.data, L = 0; L < k; L++)
        for (var R = 0; R < U; R++) {
          for (var G = 4 * (R + L * U), Y = 0, M = 0, O = 0, j = 0, J = 0, N = 0, z = 0, AA = (L + 0.5) * H, tA = g(L * H); tA < (L + 1) * H; tA++)
            for (var iA = n(AA - (tA + 0.5)) / P, $ = (R + 0.5) * T, nA = iA * iA, Z = g(R * T); Z < (R + 1) * T; Z++) {
              var lA = n($ - (Z + 0.5)) / K, sA = i(nA + lA * lA);
              sA > 1 && sA < -1 || (Y = 2 * sA * sA * sA - 3 * sA * sA + 1) > 0 && (z += Y * X[(lA = 4 * (Z + tA * b)) + 3], O += Y, X[lA + 3] < 255 && (Y = Y * X[lA + 3] / 250), j += Y * X[lA], J += Y * X[lA + 1], N += Y * X[lA + 2], M += Y);
            }
          I[G] = j / M, I[G + 1] = J / M, I[G + 2] = N / M, I[G + 3] = z / O;
        }
      return W;
    }, toObject: function() {
      return { type: this.type, scaleX: this.scaleX, scaleY: this.scaleY, resizeType: this.resizeType, lanczosLobes: this.lanczosLobes };
    } }), o.Image.filters.Resize.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.Image.filters, g = o.util.createClass;
    c.Contrast = g(c.BaseFilter, { type: "Contrast", fragmentSource: `precision highp float;
uniform sampler2D uTexture;
uniform float uContrast;
varying vec2 vTexCoord;
void main() {
vec4 color = texture2D(uTexture, vTexCoord);
float contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));
color.rgb = contrastF * (color.rgb - 0.5) + 0.5;
gl_FragColor = color;
}`, contrast: 0, mainParameter: "contrast", applyTo2d: function(i) {
      if (this.contrast !== 0) {
        var n, s = i.imageData.data, u = s.length, l = Math.floor(255 * this.contrast), h = 259 * (l + 255) / (255 * (259 - l));
        for (n = 0; n < u; n += 4)
          s[n] = h * (s[n] - 128) + 128, s[n + 1] = h * (s[n + 1] - 128) + 128, s[n + 2] = h * (s[n + 2] - 128) + 128;
      }
    }, getUniformLocations: function(i, n) {
      return { uContrast: i.getUniformLocation(n, "uContrast") };
    }, sendUniformData: function(i, n) {
      i.uniform1f(n.uContrast, this.contrast);
    } }), o.Image.filters.Contrast.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.Image.filters, g = o.util.createClass;
    c.Saturation = g(c.BaseFilter, { type: "Saturation", fragmentSource: `precision highp float;
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
}`, saturation: 0, mainParameter: "saturation", applyTo2d: function(i) {
      if (this.saturation !== 0) {
        var n, s, u = i.imageData.data, l = u.length, h = -this.saturation;
        for (n = 0; n < l; n += 4)
          s = Math.max(u[n], u[n + 1], u[n + 2]), u[n] += s !== u[n] ? (s - u[n]) * h : 0, u[n + 1] += s !== u[n + 1] ? (s - u[n + 1]) * h : 0, u[n + 2] += s !== u[n + 2] ? (s - u[n + 2]) * h : 0;
      }
    }, getUniformLocations: function(i, n) {
      return { uSaturation: i.getUniformLocation(n, "uSaturation") };
    }, sendUniformData: function(i, n) {
      i.uniform1f(n.uSaturation, -this.saturation);
    } }), o.Image.filters.Saturation.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.Image.filters, g = o.util.createClass;
    c.Vibrance = g(c.BaseFilter, { type: "Vibrance", fragmentSource: `precision highp float;
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
}`, vibrance: 0, mainParameter: "vibrance", applyTo2d: function(i) {
      if (this.vibrance !== 0) {
        var n, s, u, l, h = i.imageData.data, p = h.length, v = -this.vibrance;
        for (n = 0; n < p; n += 4)
          s = Math.max(h[n], h[n + 1], h[n + 2]), u = (h[n] + h[n + 1] + h[n + 2]) / 3, l = 2 * Math.abs(s - u) / 255 * v, h[n] += s !== h[n] ? (s - h[n]) * l : 0, h[n + 1] += s !== h[n + 1] ? (s - h[n + 1]) * l : 0, h[n + 2] += s !== h[n + 2] ? (s - h[n + 2]) * l : 0;
      }
    }, getUniformLocations: function(i, n) {
      return { uVibrance: i.getUniformLocation(n, "uVibrance") };
    }, sendUniformData: function(i, n) {
      i.uniform1f(n.uVibrance, -this.vibrance);
    } }), o.Image.filters.Vibrance.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.Image.filters, g = o.util.createClass;
    c.Blur = g(c.BaseFilter, { type: "Blur", fragmentSource: `precision highp float;
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
}`, blur: 0, mainParameter: "blur", applyTo: function(i) {
      i.webgl ? (this.aspectRatio = i.sourceWidth / i.sourceHeight, i.passes++, this._setupFrameBuffer(i), this.horizontal = !0, this.applyToWebGL(i), this._swapTextures(i), this._setupFrameBuffer(i), this.horizontal = !1, this.applyToWebGL(i), this._swapTextures(i)) : this.applyTo2d(i);
    }, applyTo2d: function(i) {
      i.imageData = this.simpleBlur(i);
    }, simpleBlur: function(i) {
      var n, s, u = i.filterBackend.resources, l = i.imageData.width, h = i.imageData.height;
      u.blurLayer1 || (u.blurLayer1 = o.util.createCanvasElement(), u.blurLayer2 = o.util.createCanvasElement()), n = u.blurLayer1, s = u.blurLayer2, n.width === l && n.height === h || (s.width = n.width = l, s.height = n.height = h);
      var p, v, b, F, U = n.getContext("2d"), k = s.getContext("2d"), T = 15, H = 0.06 * this.blur * 0.5;
      for (U.putImageData(i.imageData, 0, 0), k.clearRect(0, 0, l, h), F = -15; F <= T; F++)
        b = H * (v = F / T) * l + (p = (Math.random() - 0.5) / 4), k.globalAlpha = 1 - Math.abs(v), k.drawImage(n, b, p), U.drawImage(s, 0, 0), k.globalAlpha = 1, k.clearRect(0, 0, s.width, s.height);
      for (F = -15; F <= T; F++)
        b = H * (v = F / T) * h + (p = (Math.random() - 0.5) / 4), k.globalAlpha = 1 - Math.abs(v), k.drawImage(n, p, b), U.drawImage(s, 0, 0), k.globalAlpha = 1, k.clearRect(0, 0, s.width, s.height);
      i.ctx.drawImage(n, 0, 0);
      var K = i.ctx.getImageData(0, 0, n.width, n.height);
      return U.globalAlpha = 1, U.clearRect(0, 0, n.width, n.height), K;
    }, getUniformLocations: function(i, n) {
      return { delta: i.getUniformLocation(n, "uDelta") };
    }, sendUniformData: function(i, n) {
      var s = this.chooseRightDelta();
      i.uniform2fv(n.delta, s);
    }, chooseRightDelta: function() {
      var i, n = 1, s = [0, 0];
      return this.horizontal ? this.aspectRatio > 1 && (n = 1 / this.aspectRatio) : this.aspectRatio < 1 && (n = this.aspectRatio), i = n * this.blur * 0.12, this.horizontal ? s[0] = i : s[1] = i, s;
    } }), c.Blur.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.Image.filters, g = o.util.createClass;
    c.Gamma = g(c.BaseFilter, { type: "Gamma", fragmentSource: `precision highp float;
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
}`, gamma: [1, 1, 1], mainParameter: "gamma", initialize: function(i) {
      this.gamma = [1, 1, 1], c.BaseFilter.prototype.initialize.call(this, i);
    }, applyTo2d: function(i) {
      var n, s = i.imageData.data, u = this.gamma, l = s.length, h = 1 / u[0], p = 1 / u[1], v = 1 / u[2];
      for (this.rVals || (this.rVals = new Uint8Array(256), this.gVals = new Uint8Array(256), this.bVals = new Uint8Array(256)), n = 0, l = 256; n < l; n++)
        this.rVals[n] = 255 * Math.pow(n / 255, h), this.gVals[n] = 255 * Math.pow(n / 255, p), this.bVals[n] = 255 * Math.pow(n / 255, v);
      for (n = 0, l = s.length; n < l; n += 4)
        s[n] = this.rVals[s[n]], s[n + 1] = this.gVals[s[n + 1]], s[n + 2] = this.bVals[s[n + 2]];
    }, getUniformLocations: function(i, n) {
      return { uGamma: i.getUniformLocation(n, "uGamma") };
    }, sendUniformData: function(i, n) {
      i.uniform3fv(n.uGamma, this.gamma);
    } }), o.Image.filters.Gamma.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.Image.filters, g = o.util.createClass;
    c.Composed = g(c.BaseFilter, { type: "Composed", subFilters: [], initialize: function(i) {
      this.callSuper("initialize", i), this.subFilters = this.subFilters.slice(0);
    }, applyTo: function(i) {
      i.passes += this.subFilters.length - 1, this.subFilters.forEach(function(n) {
        n.applyTo(i);
      });
    }, toObject: function() {
      return o.util.object.extend(this.callSuper("toObject"), { subFilters: this.subFilters.map(function(i) {
        return i.toObject();
      }) });
    }, isNeutralState: function() {
      return !this.subFilters.some(function(i) {
        return !i.isNeutralState();
      });
    } }), o.Image.filters.Composed.fromObject = function(i, n) {
      var s = (i.subFilters || []).map(function(l) {
        return new o.Image.filters[l.type](l);
      }), u = new o.Image.filters.Composed({ subFilters: s });
      return n && n(u), u;
    };
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.Image.filters, g = o.util.createClass;
    c.HueRotation = g(c.ColorMatrix, { type: "HueRotation", rotation: 0, mainParameter: "rotation", calculateMatrix: function() {
      var i = this.rotation * Math.PI, n = o.util.cos(i), s = o.util.sin(i), u = 1 / 3, l = Math.sqrt(u) * s, h = 1 - n;
      this.matrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], this.matrix[0] = n + h / 3, this.matrix[1] = u * h - l, this.matrix[2] = u * h + l, this.matrix[5] = u * h + l, this.matrix[6] = n + u * h, this.matrix[7] = u * h - l, this.matrix[10] = u * h - l, this.matrix[11] = u * h + l, this.matrix[12] = n + u * h;
    }, isNeutralState: function(i) {
      return this.calculateMatrix(), c.BaseFilter.prototype.isNeutralState.call(this, i);
    }, applyTo: function(i) {
      this.calculateMatrix(), c.BaseFilter.prototype.applyTo.call(this, i);
    } }), o.Image.filters.HueRotation.fromObject = o.Image.filters.BaseFilter.fromObject;
  }(e), function(d) {
    var o = d.fabric || (d.fabric = {}), c = o.util.object.clone;
    if (o.Text)
      o.warn("fabric.Text is already defined");
    else {
      var g = "fontFamily fontWeight fontSize text underline overline linethrough textAlign fontStyle lineHeight textBackgroundColor charSpacing styles direction path pathStartOffset pathSide pathAlign".split(" ");
      o.Text = o.util.createClass(o.Object, { _dimensionAffectingProps: ["fontSize", "fontWeight", "fontFamily", "fontStyle", "lineHeight", "text", "charSpacing", "textAlign", "styles", "path", "pathStartOffset", "pathSide", "pathAlign"], _reNewline: /\r?\n/, _reSpacesAndTabs: /[ \t\r]/g, _reSpaceAndTab: /[ \t\r]/, _reWords: /\S+/g, type: "text", fontSize: 40, fontWeight: "normal", fontFamily: "Times New Roman", underline: !1, overline: !1, linethrough: !1, textAlign: "left", fontStyle: "normal", lineHeight: 1.16, superscript: { size: 0.6, baseline: -0.35 }, subscript: { size: 0.6, baseline: 0.11 }, textBackgroundColor: "", stateProperties: o.Object.prototype.stateProperties.concat(g), cacheProperties: o.Object.prototype.cacheProperties.concat(g), stroke: null, shadow: null, path: null, pathStartOffset: 0, pathSide: "left", pathAlign: "baseline", _fontSizeFraction: 0.222, offsets: { underline: 0.1, linethrough: -0.315, overline: -0.88 }, _fontSizeMult: 1.13, charSpacing: 0, styles: null, _measuringContext: null, deltaY: 0, direction: "ltr", _styleProperties: ["stroke", "strokeWidth", "fill", "fontFamily", "fontSize", "fontWeight", "fontStyle", "underline", "overline", "linethrough", "deltaY", "textBackgroundColor"], __charBounds: [], CACHE_FONT_SIZE: 400, MIN_TEXT_WIDTH: 2, initialize: function(i, n) {
        this.styles = n && n.styles || {}, this.text = i, this.__skipDimension = !0, this.callSuper("initialize", n), this.path && this.setPathInfo(), this.__skipDimension = !1, this.initDimensions(), this.setCoords(), this.setupState({ propertySet: "_dimensionAffectingProps" });
      }, setPathInfo: function() {
        var i = this.path;
        i && (i.segmentsInfo = o.util.getPathSegmentsInfo(i.path));
      }, getMeasuringContext: function() {
        return o._measuringContext || (o._measuringContext = this.canvas && this.canvas.contextCache || o.util.createCanvasElement().getContext("2d")), o._measuringContext;
      }, _splitText: function() {
        var i = this._splitTextIntoLines(this.text);
        return this.textLines = i.lines, this._textLines = i.graphemeLines, this._unwrappedTextLines = i._unwrappedLines, this._text = i.graphemeText, i;
      }, initDimensions: function() {
        this.__skipDimension || (this._splitText(), this._clearCache(), this.path ? (this.width = this.path.width, this.height = this.path.height) : (this.width = this.calcTextWidth() || this.cursorWidth || this.MIN_TEXT_WIDTH, this.height = this.calcTextHeight()), this.textAlign.indexOf("justify") !== -1 && this.enlargeSpaces(), this.saveState({ propertySet: "_dimensionAffectingProps" }));
      }, enlargeSpaces: function() {
        for (var i, n, s, u, l, h, p, v = 0, b = this._textLines.length; v < b; v++)
          if ((this.textAlign === "justify" || v !== b - 1 && !this.isEndOfWrapping(v)) && (u = 0, l = this._textLines[v], (n = this.getLineWidth(v)) < this.width && (p = this.textLines[v].match(this._reSpacesAndTabs)))) {
            s = p.length, i = (this.width - n) / s;
            for (var F = 0, U = l.length; F <= U; F++)
              h = this.__charBounds[v][F], this._reSpaceAndTab.test(l[F]) ? (h.width += i, h.kernedWidth += i, h.left += u, u += i) : h.left += u;
          }
      }, isEndOfWrapping: function(i) {
        return i === this._textLines.length - 1;
      }, missingNewlineOffset: function() {
        return 1;
      }, toString: function() {
        return "#<fabric.Text (" + this.complexity() + '): { "text": "' + this.text + '", "fontFamily": "' + this.fontFamily + '" }>';
      }, _getCacheCanvasDimensions: function() {
        var i = this.callSuper("_getCacheCanvasDimensions"), n = this.fontSize;
        return i.width += n * i.zoomX, i.height += n * i.zoomY, i;
      }, _render: function(i) {
        var n = this.path;
        n && !n.isNotVisible() && n._render(i), this._setTextStyles(i), this._renderTextLinesBackground(i), this._renderTextDecoration(i, "underline"), this._renderText(i), this._renderTextDecoration(i, "overline"), this._renderTextDecoration(i, "linethrough");
      }, _renderText: function(i) {
        this.paintFirst === "stroke" ? (this._renderTextStroke(i), this._renderTextFill(i)) : (this._renderTextFill(i), this._renderTextStroke(i));
      }, _setTextStyles: function(i, n, s) {
        if (i.textBaseline = "alphabetical", this.path)
          switch (this.pathAlign) {
            case "center":
              i.textBaseline = "middle";
              break;
            case "ascender":
              i.textBaseline = "top";
              break;
            case "descender":
              i.textBaseline = "bottom";
          }
        i.font = this._getFontDeclaration(n, s);
      }, calcTextWidth: function() {
        for (var i = this.getLineWidth(0), n = 1, s = this._textLines.length; n < s; n++) {
          var u = this.getLineWidth(n);
          u > i && (i = u);
        }
        return i;
      }, _renderTextLine: function(i, n, s, u, l, h) {
        this._renderChars(i, n, s, u, l, h);
      }, _renderTextLinesBackground: function(i) {
        if (this.textBackgroundColor || this.styleHas("textBackgroundColor")) {
          for (var n, s, u, l, h, p, v, b = i.fillStyle, F = this._getLeftOffset(), U = this._getTopOffset(), k = 0, T = 0, H = this.path, K = 0, P = this._textLines.length; K < P; K++)
            if (n = this.getHeightOfLine(K), this.textBackgroundColor || this.styleHas("textBackgroundColor", K)) {
              u = this._textLines[K], s = this._getLineLeftOffset(K), T = 0, k = 0, l = this.getValueOfPropertyAt(K, 0, "textBackgroundColor");
              for (var X = 0, W = u.length; X < W; X++)
                h = this.__charBounds[K][X], p = this.getValueOfPropertyAt(K, X, "textBackgroundColor"), H ? (i.save(), i.translate(h.renderLeft, h.renderTop), i.rotate(h.angle), i.fillStyle = p, p && i.fillRect(-h.width / 2, -n / this.lineHeight * (1 - this._fontSizeFraction), h.width, n / this.lineHeight), i.restore()) : p !== l ? (v = F + s + k, this.direction === "rtl" && (v = this.width - v - T), i.fillStyle = l, l && i.fillRect(v, U, T, n / this.lineHeight), k = h.left, T = h.width, l = p) : T += h.kernedWidth;
              p && !H && (v = F + s + k, this.direction === "rtl" && (v = this.width - v - T), i.fillStyle = p, i.fillRect(v, U, T, n / this.lineHeight)), U += n;
            } else
              U += n;
          i.fillStyle = b, this._removeShadow(i);
        }
      }, getFontCache: function(i) {
        var n = i.fontFamily.toLowerCase();
        o.charWidthsCache[n] || (o.charWidthsCache[n] = {});
        var s = o.charWidthsCache[n], u = i.fontStyle.toLowerCase() + "_" + (i.fontWeight + "").toLowerCase();
        return s[u] || (s[u] = {}), s[u];
      }, _measureChar: function(i, n, s, u) {
        var l, h, p, v, b = this.getFontCache(n), F = s + i, U = this._getFontDeclaration(n) === this._getFontDeclaration(u), k = n.fontSize / this.CACHE_FONT_SIZE;
        if (s && b[s] !== void 0 && (p = b[s]), b[i] !== void 0 && (v = l = b[i]), U && b[F] !== void 0 && (v = (h = b[F]) - p), l === void 0 || p === void 0 || h === void 0) {
          var T = this.getMeasuringContext();
          this._setTextStyles(T, n, !0);
        }
        return l === void 0 && (v = l = T.measureText(i).width, b[i] = l), p === void 0 && U && s && (p = T.measureText(s).width, b[s] = p), U && h === void 0 && (h = T.measureText(F).width, b[F] = h, v = h - p), { width: l * k, kernedWidth: v * k };
      }, getHeightOfChar: function(i, n) {
        return this.getValueOfPropertyAt(i, n, "fontSize");
      }, measureLine: function(i) {
        var n = this._measureLine(i);
        return this.charSpacing !== 0 && (n.width -= this._getWidthOfCharSpacing()), n.width < 0 && (n.width = 0), n;
      }, _measureLine: function(i) {
        var n, s, u, l, h, p, v = 0, b = this._textLines[i], F = new Array(b.length), U = 0, k = this.path, T = this.pathSide === "right";
        for (this.__charBounds[i] = F, n = 0; n < b.length; n++)
          s = b[n], l = this._getGraphemeBox(s, i, n, u), F[n] = l, v += l.kernedWidth, u = s;
        if (F[n] = { left: l ? l.left + l.width : 0, width: 0, kernedWidth: 0, height: this.fontSize }, k) {
          switch (p = k.segmentsInfo[k.segmentsInfo.length - 1].length, (h = o.util.getPointOnPath(k.path, 0, k.segmentsInfo)).x += k.pathOffset.x, h.y += k.pathOffset.y, this.textAlign) {
            case "left":
              U = T ? p - v : 0;
              break;
            case "center":
              U = (p - v) / 2;
              break;
            case "right":
              U = T ? 0 : p - v;
          }
          for (U += this.pathStartOffset * (T ? -1 : 1), n = T ? b.length - 1 : 0; T ? n >= 0 : n < b.length; T ? n-- : n++)
            l = F[n], U > p ? U %= p : U < 0 && (U += p), this._setGraphemeOnPath(U, l, h), U += l.kernedWidth;
        }
        return { width: v, numOfSpaces: 0 };
      }, _setGraphemeOnPath: function(i, n, s) {
        var u = i + n.kernedWidth / 2, l = this.path, h = o.util.getPointOnPath(l.path, u, l.segmentsInfo);
        n.renderLeft = h.x - s.x, n.renderTop = h.y - s.y, n.angle = h.angle + (this.pathSide === "right" ? Math.PI : 0);
      }, _getGraphemeBox: function(i, n, s, u, l) {
        var h, p = this.getCompleteStyleDeclaration(n, s), v = u ? this.getCompleteStyleDeclaration(n, s - 1) : {}, b = this._measureChar(i, p, u, v), F = b.kernedWidth, U = b.width;
        this.charSpacing !== 0 && (U += h = this._getWidthOfCharSpacing(), F += h);
        var k = { width: U, left: 0, height: p.fontSize, kernedWidth: F, deltaY: p.deltaY };
        if (s > 0 && !l) {
          var T = this.__charBounds[n][s - 1];
          k.left = T.left + T.width + b.kernedWidth - b.width;
        }
        return k;
      }, getHeightOfLine: function(i) {
        if (this.__lineHeights[i])
          return this.__lineHeights[i];
        for (var n = this._textLines[i], s = this.getHeightOfChar(i, 0), u = 1, l = n.length; u < l; u++)
          s = Math.max(this.getHeightOfChar(i, u), s);
        return this.__lineHeights[i] = s * this.lineHeight * this._fontSizeMult;
      }, calcTextHeight: function() {
        for (var i, n = 0, s = 0, u = this._textLines.length; s < u; s++)
          i = this.getHeightOfLine(s), n += s === u - 1 ? i / this.lineHeight : i;
        return n;
      }, _getLeftOffset: function() {
        return this.direction === "ltr" ? -this.width / 2 : this.width / 2;
      }, _getTopOffset: function() {
        return -this.height / 2;
      }, _renderTextCommon: function(i, n) {
        i.save();
        for (var s = 0, u = this._getLeftOffset(), l = this._getTopOffset(), h = 0, p = this._textLines.length; h < p; h++) {
          var v = this.getHeightOfLine(h), b = v / this.lineHeight, F = this._getLineLeftOffset(h);
          this._renderTextLine(n, i, this._textLines[h], u + F, l + s + b, h), s += v;
        }
        i.restore();
      }, _renderTextFill: function(i) {
        (this.fill || this.styleHas("fill")) && this._renderTextCommon(i, "fillText");
      }, _renderTextStroke: function(i) {
        (this.stroke && this.strokeWidth !== 0 || !this.isEmptyStyles()) && (this.shadow && !this.shadow.affectStroke && this._removeShadow(i), i.save(), this._setLineDash(i, this.strokeDashArray), i.beginPath(), this._renderTextCommon(i, "strokeText"), i.closePath(), i.restore());
      }, _renderChars: function(i, n, s, u, l, h) {
        var p, v, b, F, U, k = this.getHeightOfLine(h), T = this.textAlign.indexOf("justify") !== -1, H = "", K = 0, P = this.path, X = !T && this.charSpacing === 0 && this.isEmptyStyles(h) && !P, W = this.direction === "ltr", I = this.direction === "ltr" ? 1 : -1, L = n.canvas.getAttribute("dir");
        if (n.save(), L !== this.direction && (n.canvas.setAttribute("dir", W ? "ltr" : "rtl"), n.direction = W ? "ltr" : "rtl", n.textAlign = W ? "left" : "right"), l -= k * this._fontSizeFraction / this.lineHeight, X)
          return this._renderChar(i, n, h, 0, s.join(""), u, l, k), void n.restore();
        for (var R = 0, G = s.length - 1; R <= G; R++)
          F = R === G || this.charSpacing || P, H += s[R], b = this.__charBounds[h][R], K === 0 ? (u += I * (b.kernedWidth - b.width), K += b.width) : K += b.kernedWidth, T && !F && this._reSpaceAndTab.test(s[R]) && (F = !0), F || (p = p || this.getCompleteStyleDeclaration(h, R), v = this.getCompleteStyleDeclaration(h, R + 1), F = o.util.hasStyleChanged(p, v, !1)), F && (P ? (n.save(), n.translate(b.renderLeft, b.renderTop), n.rotate(b.angle), this._renderChar(i, n, h, R, H, -K / 2, 0, k), n.restore()) : (U = u, this._renderChar(i, n, h, R, H, U, l, k)), H = "", p = v, u += I * K, K = 0);
        n.restore();
      }, _applyPatternGradientTransformText: function(i) {
        var n, s = o.util.createCanvasElement(), u = this.width + this.strokeWidth, l = this.height + this.strokeWidth;
        return s.width = u, s.height = l, (n = s.getContext("2d")).beginPath(), n.moveTo(0, 0), n.lineTo(u, 0), n.lineTo(u, l), n.lineTo(0, l), n.closePath(), n.translate(u / 2, l / 2), n.fillStyle = i.toLive(n), this._applyPatternGradientTransform(n, i), n.fill(), n.createPattern(s, "no-repeat");
      }, handleFiller: function(i, n, s) {
        var u, l;
        return s.toLive ? s.gradientUnits === "percentage" || s.gradientTransform || s.patternTransform ? (u = -this.width / 2, l = -this.height / 2, i.translate(u, l), i[n] = this._applyPatternGradientTransformText(s), { offsetX: u, offsetY: l }) : (i[n] = s.toLive(i, this), this._applyPatternGradientTransform(i, s)) : (i[n] = s, { offsetX: 0, offsetY: 0 });
      }, _setStrokeStyles: function(i, n) {
        return i.lineWidth = n.strokeWidth, i.lineCap = this.strokeLineCap, i.lineDashOffset = this.strokeDashOffset, i.lineJoin = this.strokeLineJoin, i.miterLimit = this.strokeMiterLimit, this.handleFiller(i, "strokeStyle", n.stroke);
      }, _setFillStyles: function(i, n) {
        return this.handleFiller(i, "fillStyle", n.fill);
      }, _renderChar: function(i, n, s, u, l, h, p) {
        var v, b, F = this._getStyleDeclaration(s, u), U = this.getCompleteStyleDeclaration(s, u), k = i === "fillText" && U.fill, T = i === "strokeText" && U.stroke && U.strokeWidth;
        (T || k) && (n.save(), k && (v = this._setFillStyles(n, U)), T && (b = this._setStrokeStyles(n, U)), n.font = this._getFontDeclaration(U), F && F.textBackgroundColor && this._removeShadow(n), F && F.deltaY && (p += F.deltaY), k && n.fillText(l, h - v.offsetX, p - v.offsetY), T && n.strokeText(l, h - b.offsetX, p - b.offsetY), n.restore());
      }, setSuperscript: function(i, n) {
        return this._setScript(i, n, this.superscript);
      }, setSubscript: function(i, n) {
        return this._setScript(i, n, this.subscript);
      }, _setScript: function(i, n, s) {
        var u = this.get2DCursorLocation(i, !0), l = this.getValueOfPropertyAt(u.lineIndex, u.charIndex, "fontSize"), h = this.getValueOfPropertyAt(u.lineIndex, u.charIndex, "deltaY"), p = { fontSize: l * s.size, deltaY: h + l * s.baseline };
        return this.setSelectionStyles(p, i, n), this;
      }, _getLineLeftOffset: function(i) {
        var n = this.getLineWidth(i), s = this.width - n, u = this.textAlign, l = this.direction, h = 0, p = this.isEndOfWrapping(i);
        return u === "justify" || u === "justify-center" && !p || u === "justify-right" && !p || u === "justify-left" && !p ? 0 : (u === "center" && (h = s / 2), u === "right" && (h = s), u === "justify-center" && (h = s / 2), u === "justify-right" && (h = s), l === "rtl" && (h -= s), h);
      }, _clearCache: function() {
        this.__lineWidths = [], this.__lineHeights = [], this.__charBounds = [];
      }, _shouldClearDimensionCache: function() {
        var i = this._forceClearCache;
        return i || (i = this.hasStateChanged("_dimensionAffectingProps")), i && (this.dirty = !0, this._forceClearCache = !1), i;
      }, getLineWidth: function(i) {
        if (this.__lineWidths[i] !== void 0)
          return this.__lineWidths[i];
        var n = this.measureLine(i).width;
        return this.__lineWidths[i] = n, n;
      }, _getWidthOfCharSpacing: function() {
        return this.charSpacing !== 0 ? this.fontSize * this.charSpacing / 1e3 : 0;
      }, getValueOfPropertyAt: function(i, n, s) {
        var u = this._getStyleDeclaration(i, n);
        return u && u[s] !== void 0 ? u[s] : this[s];
      }, _renderTextDecoration: function(i, n) {
        if (this[n] || this.styleHas(n)) {
          for (var s, u, l, h, p, v, b, F, U, k, T, H, K, P, X, W, I = this._getLeftOffset(), L = this._getTopOffset(), R = this.path, G = this._getWidthOfCharSpacing(), Y = this.offsets[n], M = 0, O = this._textLines.length; M < O; M++)
            if (s = this.getHeightOfLine(M), this[n] || this.styleHas(n, M)) {
              b = this._textLines[M], P = s / this.lineHeight, h = this._getLineLeftOffset(M), k = 0, T = 0, F = this.getValueOfPropertyAt(M, 0, n), W = this.getValueOfPropertyAt(M, 0, "fill"), U = L + P * (1 - this._fontSizeFraction), u = this.getHeightOfChar(M, 0), p = this.getValueOfPropertyAt(M, 0, "deltaY");
              for (var j = 0, J = b.length; j < J; j++)
                if (H = this.__charBounds[M][j], K = this.getValueOfPropertyAt(M, j, n), X = this.getValueOfPropertyAt(M, j, "fill"), l = this.getHeightOfChar(M, j), v = this.getValueOfPropertyAt(M, j, "deltaY"), R && K && X)
                  i.save(), i.fillStyle = W, i.translate(H.renderLeft, H.renderTop), i.rotate(H.angle), i.fillRect(-H.kernedWidth / 2, Y * l + v, H.kernedWidth, this.fontSize / 15), i.restore();
                else if ((K !== F || X !== W || l !== u || v !== p) && T > 0) {
                  var N = I + h + k;
                  this.direction === "rtl" && (N = this.width - N - T), F && W && (i.fillStyle = W, i.fillRect(N, U + Y * u + p, T, this.fontSize / 15)), k = H.left, T = H.width, F = K, W = X, u = l, p = v;
                } else
                  T += H.kernedWidth;
              N = I + h + k, this.direction === "rtl" && (N = this.width - N - T), i.fillStyle = X, K && X && i.fillRect(N, U + Y * u + p, T - G, this.fontSize / 15), L += s;
            } else
              L += s;
          this._removeShadow(i);
        }
      }, _getFontDeclaration: function(i, n) {
        var s = i || this, u = this.fontFamily, l = o.Text.genericFonts.indexOf(u.toLowerCase()) > -1, h = u === void 0 || u.indexOf("'") > -1 || u.indexOf(",") > -1 || u.indexOf('"') > -1 || l ? s.fontFamily : '"' + s.fontFamily + '"';
        return [o.isLikelyNode ? s.fontWeight : s.fontStyle, o.isLikelyNode ? s.fontStyle : s.fontWeight, n ? this.CACHE_FONT_SIZE + "px" : s.fontSize + "px", h].join(" ");
      }, render: function(i) {
        this.visible && (this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (this._shouldClearDimensionCache() && this.initDimensions(), this.callSuper("render", i)));
      }, _splitTextIntoLines: function(i) {
        for (var n = i.split(this._reNewline), s = new Array(n.length), u = [`
`], l = [], h = 0; h < n.length; h++)
          s[h] = o.util.string.graphemeSplit(n[h]), l = l.concat(s[h], u);
        return l.pop(), { _unwrappedLines: s, lines: n, graphemeText: l, graphemeLines: s };
      }, toObject: function(i) {
        var n = g.concat(i), s = this.callSuper("toObject", n);
        return s.styles = o.util.stylesToArray(this.styles, this.text), s.path && (s.path = this.path.toObject()), s;
      }, set: function(i, n) {
        this.callSuper("set", i, n);
        var s = !1, u = !1;
        if (typeof i == "object")
          for (var l in i)
            l === "path" && this.setPathInfo(), s = s || this._dimensionAffectingProps.indexOf(l) !== -1, u = u || l === "path";
        else
          s = this._dimensionAffectingProps.indexOf(i) !== -1, u = i === "path";
        return u && this.setPathInfo(), s && (this.initDimensions(), this.setCoords()), this;
      }, complexity: function() {
        return 1;
      } }), o.Text.ATTRIBUTE_NAMES = o.SHARED_ATTRIBUTES.concat("x y dx dy font-family font-style font-weight font-size letter-spacing text-decoration text-anchor".split(" ")), o.Text.DEFAULT_SVG_FONT_SIZE = 16, o.Text.fromElement = function(i, n, s) {
        if (!i)
          return n(null);
        var u = o.parseAttributes(i, o.Text.ATTRIBUTE_NAMES), l = u.textAnchor || "left";
        if ((s = o.util.object.extend(s ? c(s) : {}, u)).top = s.top || 0, s.left = s.left || 0, u.textDecoration) {
          var h = u.textDecoration;
          h.indexOf("underline") !== -1 && (s.underline = !0), h.indexOf("overline") !== -1 && (s.overline = !0), h.indexOf("line-through") !== -1 && (s.linethrough = !0), delete s.textDecoration;
        }
        "dx" in u && (s.left += u.dx), "dy" in u && (s.top += u.dy), "fontSize" in s || (s.fontSize = o.Text.DEFAULT_SVG_FONT_SIZE);
        var p = "";
        "textContent" in i ? p = i.textContent : "firstChild" in i && i.firstChild !== null && "data" in i.firstChild && i.firstChild.data !== null && (p = i.firstChild.data), p = p.replace(/^\s+|\s+$|\n+/g, "").replace(/\s+/g, " ");
        var v = s.strokeWidth;
        s.strokeWidth = 0;
        var b = new o.Text(p, s), F = b.getScaledHeight() / b.height, U = ((b.height + b.strokeWidth) * b.lineHeight - b.height) * F, k = b.getScaledHeight() + U, T = 0;
        l === "center" && (T = b.getScaledWidth() / 2), l === "right" && (T = b.getScaledWidth()), b.set({ left: b.left - T, top: b.top - (k - b.fontSize * (0.07 + b._fontSizeFraction)) / b.lineHeight, strokeWidth: v !== void 0 ? v : 1 }), n(b);
      }, o.Text.fromObject = function(i, n) {
        var s = c(i), u = i.path;
        return delete s.path, o.Object._fromObject("Text", s, function(l) {
          l.styles = o.util.stylesFromArray(i.styles, i.text), u ? o.Object._fromObject("Path", u, function(h) {
            l.set("path", h), n(l);
          }, "path") : n(l);
        }, "text");
      }, o.Text.genericFonts = ["sans-serif", "serif", "cursive", "fantasy", "monospace"], o.util.createAccessors && o.util.createAccessors(o.Text);
    }
  }(e), m.util.object.extend(m.Text.prototype, { isEmptyStyles: function(d) {
    if (!this.styles || d !== void 0 && !this.styles[d])
      return !0;
    var o = d === void 0 ? this.styles : { line: this.styles[d] };
    for (var c in o)
      for (var g in o[c])
        for (var i in o[c][g])
          return !1;
    return !0;
  }, styleHas: function(d, o) {
    if (!this.styles || !d || d === "" || o !== void 0 && !this.styles[o])
      return !1;
    var c = o === void 0 ? this.styles : { 0: this.styles[o] };
    for (var g in c)
      for (var i in c[g])
        if (c[g][i][d] !== void 0)
          return !0;
    return !1;
  }, cleanStyle: function(d) {
    if (!this.styles || !d || d === "")
      return !1;
    var o, c, g = this.styles, i = 0, n = !0, s = 0;
    for (var u in g) {
      for (var l in o = 0, g[u]) {
        var h;
        i++, (h = g[u][l]).hasOwnProperty(d) ? (c ? h[d] !== c && (n = !1) : c = h[d], h[d] === this[d] && delete h[d]) : n = !1, Object.keys(h).length !== 0 ? o++ : delete g[u][l];
      }
      o === 0 && delete g[u];
    }
    for (var p = 0; p < this._textLines.length; p++)
      s += this._textLines[p].length;
    n && i === s && (this[d] = c, this.removeStyle(d));
  }, removeStyle: function(d) {
    if (this.styles && d && d !== "") {
      var o, c, g, i = this.styles;
      for (c in i) {
        for (g in o = i[c])
          delete o[g][d], Object.keys(o[g]).length === 0 && delete o[g];
        Object.keys(o).length === 0 && delete i[c];
      }
    }
  }, _extendStyles: function(d, o) {
    var c = this.get2DCursorLocation(d);
    this._getLineStyle(c.lineIndex) || this._setLineStyle(c.lineIndex), this._getStyleDeclaration(c.lineIndex, c.charIndex) || this._setStyleDeclaration(c.lineIndex, c.charIndex, {}), m.util.object.extend(this._getStyleDeclaration(c.lineIndex, c.charIndex), o);
  }, get2DCursorLocation: function(d, o) {
    d === void 0 && (d = this.selectionStart);
    for (var c = o ? this._unwrappedTextLines : this._textLines, g = c.length, i = 0; i < g; i++) {
      if (d <= c[i].length)
        return { lineIndex: i, charIndex: d };
      d -= c[i].length + this.missingNewlineOffset(i);
    }
    return { lineIndex: i - 1, charIndex: c[i - 1].length < d ? c[i - 1].length : d };
  }, getSelectionStyles: function(d, o, c) {
    d === void 0 && (d = this.selectionStart || 0), o === void 0 && (o = this.selectionEnd || d);
    for (var g = [], i = d; i < o; i++)
      g.push(this.getStyleAtPosition(i, c));
    return g;
  }, getStyleAtPosition: function(d, o) {
    var c = this.get2DCursorLocation(d);
    return (o ? this.getCompleteStyleDeclaration(c.lineIndex, c.charIndex) : this._getStyleDeclaration(c.lineIndex, c.charIndex)) || {};
  }, setSelectionStyles: function(d, o, c) {
    o === void 0 && (o = this.selectionStart || 0), c === void 0 && (c = this.selectionEnd || o);
    for (var g = o; g < c; g++)
      this._extendStyles(g, d);
    return this._forceClearCache = !0, this;
  }, _getStyleDeclaration: function(d, o) {
    var c = this.styles && this.styles[d];
    return c ? c[o] : null;
  }, getCompleteStyleDeclaration: function(d, o) {
    for (var c, g = this._getStyleDeclaration(d, o) || {}, i = {}, n = 0; n < this._styleProperties.length; n++)
      i[c = this._styleProperties[n]] = g[c] === void 0 ? this[c] : g[c];
    return i;
  }, _setStyleDeclaration: function(d, o, c) {
    this.styles[d][o] = c;
  }, _deleteStyleDeclaration: function(d, o) {
    delete this.styles[d][o];
  }, _getLineStyle: function(d) {
    return !!this.styles[d];
  }, _setLineStyle: function(d) {
    this.styles[d] = {};
  }, _deleteLineStyle: function(d) {
    delete this.styles[d];
  } }), function() {
    function d(o) {
      o.textDecoration && (o.textDecoration.indexOf("underline") > -1 && (o.underline = !0), o.textDecoration.indexOf("line-through") > -1 && (o.linethrough = !0), o.textDecoration.indexOf("overline") > -1 && (o.overline = !0), delete o.textDecoration);
    }
    m.IText = m.util.createClass(m.Text, m.Observable, { type: "i-text", selectionStart: 0, selectionEnd: 0, selectionColor: "rgba(17,119,255,0.3)", isEditing: !1, editable: !0, editingBorderColor: "rgba(102,153,255,0.25)", cursorWidth: 2, cursorColor: "", cursorDelay: 1e3, cursorDuration: 600, caching: !0, hiddenTextareaContainer: null, _reSpace: /\s|\n/, _currentCursorOpacity: 0, _selectionDirection: null, _abortCursorAnimation: !1, __widthOfSpace: [], inCompositionMode: !1, initialize: function(o, c) {
      this.callSuper("initialize", o, c), this.initBehavior();
    }, setSelectionStart: function(o) {
      o = Math.max(o, 0), this._updateAndFire("selectionStart", o);
    }, setSelectionEnd: function(o) {
      o = Math.min(o, this.text.length), this._updateAndFire("selectionEnd", o);
    }, _updateAndFire: function(o, c) {
      this[o] !== c && (this._fireSelectionChanged(), this[o] = c), this._updateTextarea();
    }, _fireSelectionChanged: function() {
      this.fire("selection:changed"), this.canvas && this.canvas.fire("text:selection:changed", { target: this });
    }, initDimensions: function() {
      this.isEditing && this.initDelayedCursor(), this.clearContextTop(), this.callSuper("initDimensions");
    }, render: function(o) {
      this.clearContextTop(), this.callSuper("render", o), this.cursorOffsetCache = {}, this.renderCursorOrSelection();
    }, _render: function(o) {
      this.callSuper("_render", o);
    }, clearContextTop: function(o) {
      if (this.isEditing && this.canvas && this.canvas.contextTop) {
        var c = this.canvas.contextTop, g = this.canvas.viewportTransform;
        c.save(), c.transform(g[0], g[1], g[2], g[3], g[4], g[5]), this.transform(c), this._clearTextArea(c), o || c.restore();
      }
    }, renderCursorOrSelection: function() {
      if (this.isEditing && this.canvas && this.canvas.contextTop) {
        var o = this._getCursorBoundaries(), c = this.canvas.contextTop;
        this.clearContextTop(!0), this.selectionStart === this.selectionEnd ? this.renderCursor(o, c) : this.renderSelection(o, c), c.restore();
      }
    }, _clearTextArea: function(o) {
      var c = this.width + 4, g = this.height + 4;
      o.clearRect(-c / 2, -g / 2, c, g);
    }, _getCursorBoundaries: function(o) {
      o === void 0 && (o = this.selectionStart);
      var c = this._getLeftOffset(), g = this._getTopOffset(), i = this._getCursorBoundariesOffsets(o);
      return { left: c, top: g, leftOffset: i.left, topOffset: i.top };
    }, _getCursorBoundariesOffsets: function(o) {
      if (this.cursorOffsetCache && "top" in this.cursorOffsetCache)
        return this.cursorOffsetCache;
      var c, g, i, n, s = 0, u = 0, l = this.get2DCursorLocation(o);
      i = l.charIndex, g = l.lineIndex;
      for (var h = 0; h < g; h++)
        s += this.getHeightOfLine(h);
      c = this._getLineLeftOffset(g);
      var p = this.__charBounds[g][i];
      return p && (u = p.left), this.charSpacing !== 0 && i === this._textLines[g].length && (u -= this._getWidthOfCharSpacing()), n = { top: s, left: c + (u > 0 ? u : 0) }, this.direction === "rtl" && (n.left *= -1), this.cursorOffsetCache = n, this.cursorOffsetCache;
    }, renderCursor: function(o, c) {
      var g = this.get2DCursorLocation(), i = g.lineIndex, n = g.charIndex > 0 ? g.charIndex - 1 : 0, s = this.getValueOfPropertyAt(i, n, "fontSize"), u = this.scaleX * this.canvas.getZoom(), l = this.cursorWidth / u, h = o.topOffset, p = this.getValueOfPropertyAt(i, n, "deltaY");
      h += (1 - this._fontSizeFraction) * this.getHeightOfLine(i) / this.lineHeight - s * (1 - this._fontSizeFraction), this.inCompositionMode && this.renderSelection(o, c), c.fillStyle = this.cursorColor || this.getValueOfPropertyAt(i, n, "fill"), c.globalAlpha = this.__isMousedown ? 1 : this._currentCursorOpacity, c.fillRect(o.left + o.leftOffset - l / 2, h + o.top + p, l, s);
    }, renderSelection: function(o, c) {
      for (var g = this.inCompositionMode ? this.hiddenTextarea.selectionStart : this.selectionStart, i = this.inCompositionMode ? this.hiddenTextarea.selectionEnd : this.selectionEnd, n = this.textAlign.indexOf("justify") !== -1, s = this.get2DCursorLocation(g), u = this.get2DCursorLocation(i), l = s.lineIndex, h = u.lineIndex, p = s.charIndex < 0 ? 0 : s.charIndex, v = u.charIndex < 0 ? 0 : u.charIndex, b = l; b <= h; b++) {
        var F, U = this._getLineLeftOffset(b) || 0, k = this.getHeightOfLine(b), T = 0, H = 0;
        if (b === l && (T = this.__charBounds[l][p].left), b >= l && b < h)
          H = n && !this.isEndOfWrapping(b) ? this.width : this.getLineWidth(b) || 5;
        else if (b === h)
          if (v === 0)
            H = this.__charBounds[h][v].left;
          else {
            var K = this._getWidthOfCharSpacing();
            H = this.__charBounds[h][v - 1].left + this.__charBounds[h][v - 1].width - K;
          }
        F = k, (this.lineHeight < 1 || b === h && this.lineHeight > 1) && (k /= this.lineHeight);
        var P = o.left + U + T, X = H - T, W = k, I = 0;
        this.inCompositionMode ? (c.fillStyle = this.compositionColor || "black", W = 1, I = k) : c.fillStyle = this.selectionColor, this.direction === "rtl" && (P = this.width - P - X), c.fillRect(P, o.top + o.topOffset + I, X, W), o.topOffset += F;
      }
    }, getCurrentCharFontSize: function() {
      var o = this._getCurrentCharIndex();
      return this.getValueOfPropertyAt(o.l, o.c, "fontSize");
    }, getCurrentCharColor: function() {
      var o = this._getCurrentCharIndex();
      return this.getValueOfPropertyAt(o.l, o.c, "fill");
    }, _getCurrentCharIndex: function() {
      var o = this.get2DCursorLocation(this.selectionStart, !0), c = o.charIndex > 0 ? o.charIndex - 1 : 0;
      return { l: o.lineIndex, c };
    } }), m.IText.fromObject = function(o, c) {
      var g = m.util.stylesFromArray(o.styles, o.text), i = Object.assign({}, o, { styles: g });
      if (d(i), i.styles)
        for (var n in i.styles)
          for (var s in i.styles[n])
            d(i.styles[n][s]);
      m.Object._fromObject("IText", i, c, "text");
    };
  }(), D = m.util.object.clone, m.util.object.extend(m.IText.prototype, { initBehavior: function() {
    this.initAddedHandler(), this.initRemovedHandler(), this.initCursorSelectionHandlers(), this.initDoubleClickSimulation(), this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
  }, onDeselect: function() {
    this.isEditing && this.exitEditing(), this.selected = !1;
  }, initAddedHandler: function() {
    var d = this;
    this.on("added", function() {
      var o = d.canvas;
      o && (o._hasITextHandlers || (o._hasITextHandlers = !0, d._initCanvasHandlers(o)), o._iTextInstances = o._iTextInstances || [], o._iTextInstances.push(d));
    });
  }, initRemovedHandler: function() {
    var d = this;
    this.on("removed", function() {
      var o = d.canvas;
      o && (o._iTextInstances = o._iTextInstances || [], m.util.removeFromArray(o._iTextInstances, d), o._iTextInstances.length === 0 && (o._hasITextHandlers = !1, d._removeCanvasHandlers(o)));
    });
  }, _initCanvasHandlers: function(d) {
    d._mouseUpITextHandler = function() {
      d._iTextInstances && d._iTextInstances.forEach(function(o) {
        o.__isMousedown = !1;
      });
    }, d.on("mouse:up", d._mouseUpITextHandler);
  }, _removeCanvasHandlers: function(d) {
    d.off("mouse:up", d._mouseUpITextHandler);
  }, _tick: function() {
    this._currentTickState = this._animateCursor(this, 1, this.cursorDuration, "_onTickComplete");
  }, _animateCursor: function(d, o, c, g) {
    var i;
    return i = { isAborted: !1, abort: function() {
      this.isAborted = !0;
    } }, d.animate("_currentCursorOpacity", o, { duration: c, onComplete: function() {
      i.isAborted || d[g]();
    }, onChange: function() {
      d.canvas && d.selectionStart === d.selectionEnd && d.renderCursorOrSelection();
    }, abort: function() {
      return i.isAborted;
    } }), i;
  }, _onTickComplete: function() {
    var d = this;
    this._cursorTimeout1 && clearTimeout(this._cursorTimeout1), this._cursorTimeout1 = setTimeout(function() {
      d._currentTickCompleteState = d._animateCursor(d, 0, this.cursorDuration / 2, "_tick");
    }, 100);
  }, initDelayedCursor: function(d) {
    var o = this, c = d ? 0 : this.cursorDelay;
    this.abortCursorAnimation(), this._currentCursorOpacity = 1, this._cursorTimeout2 = setTimeout(function() {
      o._tick();
    }, c);
  }, abortCursorAnimation: function() {
    var d = this._currentTickState || this._currentTickCompleteState, o = this.canvas;
    this._currentTickState && this._currentTickState.abort(), this._currentTickCompleteState && this._currentTickCompleteState.abort(), clearTimeout(this._cursorTimeout1), clearTimeout(this._cursorTimeout2), this._currentCursorOpacity = 0, d && o && o.clearContext(o.contextTop || o.contextContainer);
  }, selectAll: function() {
    return this.selectionStart = 0, this.selectionEnd = this._text.length, this._fireSelectionChanged(), this._updateTextarea(), this;
  }, getSelectedText: function() {
    return this._text.slice(this.selectionStart, this.selectionEnd).join("");
  }, findWordBoundaryLeft: function(d) {
    var o = 0, c = d - 1;
    if (this._reSpace.test(this._text[c]))
      for (; this._reSpace.test(this._text[c]); )
        o++, c--;
    for (; /\S/.test(this._text[c]) && c > -1; )
      o++, c--;
    return d - o;
  }, findWordBoundaryRight: function(d) {
    var o = 0, c = d;
    if (this._reSpace.test(this._text[c]))
      for (; this._reSpace.test(this._text[c]); )
        o++, c++;
    for (; /\S/.test(this._text[c]) && c < this._text.length; )
      o++, c++;
    return d + o;
  }, findLineBoundaryLeft: function(d) {
    for (var o = 0, c = d - 1; !/\n/.test(this._text[c]) && c > -1; )
      o++, c--;
    return d - o;
  }, findLineBoundaryRight: function(d) {
    for (var o = 0, c = d; !/\n/.test(this._text[c]) && c < this._text.length; )
      o++, c++;
    return d + o;
  }, searchWordBoundary: function(d, o) {
    for (var c = this._text, g = this._reSpace.test(c[d]) ? d - 1 : d, i = c[g], n = m.reNonWord; !n.test(i) && g > 0 && g < c.length; )
      i = c[g += o];
    return n.test(i) && (g += o === 1 ? 0 : 1), g;
  }, selectWord: function(d) {
    d = d || this.selectionStart;
    var o = this.searchWordBoundary(d, -1), c = this.searchWordBoundary(d, 1);
    this.selectionStart = o, this.selectionEnd = c, this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection();
  }, selectLine: function(d) {
    d = d || this.selectionStart;
    var o = this.findLineBoundaryLeft(d), c = this.findLineBoundaryRight(d);
    return this.selectionStart = o, this.selectionEnd = c, this._fireSelectionChanged(), this._updateTextarea(), this;
  }, enterEditing: function(d) {
    if (!this.isEditing && this.editable)
      return this.canvas && (this.canvas.calcOffset(), this.exitEditingOnOthers(this.canvas)), this.isEditing = !0, this.initHiddenTextarea(d), this.hiddenTextarea.focus(), this.hiddenTextarea.value = this.text, this._updateTextarea(), this._saveEditingProps(), this._setEditingProps(), this._textBeforeEdit = this.text, this._tick(), this.fire("editing:entered"), this._fireSelectionChanged(), this.canvas ? (this.canvas.fire("text:editing:entered", { target: this }), this.initMouseMoveHandler(), this.canvas.requestRenderAll(), this) : this;
  }, exitEditingOnOthers: function(d) {
    d._iTextInstances && d._iTextInstances.forEach(function(o) {
      o.selected = !1, o.isEditing && o.exitEditing();
    });
  }, initMouseMoveHandler: function() {
    this.canvas.on("mouse:move", this.mouseMoveHandler);
  }, mouseMoveHandler: function(d) {
    if (this.__isMousedown && this.isEditing) {
      document.activeElement !== this.hiddenTextarea && this.hiddenTextarea.focus();
      var o = this.getSelectionStartFromPointer(d.e), c = this.selectionStart, g = this.selectionEnd;
      (o === this.__selectionStartOnMouseDown && c !== g || c !== o && g !== o) && (o > this.__selectionStartOnMouseDown ? (this.selectionStart = this.__selectionStartOnMouseDown, this.selectionEnd = o) : (this.selectionStart = o, this.selectionEnd = this.__selectionStartOnMouseDown), this.selectionStart === c && this.selectionEnd === g || (this.restartCursorIfNeeded(), this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection()));
    }
  }, _setEditingProps: function() {
    this.hoverCursor = "text", this.canvas && (this.canvas.defaultCursor = this.canvas.moveCursor = "text"), this.borderColor = this.editingBorderColor, this.hasControls = this.selectable = !1, this.lockMovementX = this.lockMovementY = !0;
  }, fromStringToGraphemeSelection: function(d, o, c) {
    var g = c.slice(0, d), i = m.util.string.graphemeSplit(g).length;
    if (d === o)
      return { selectionStart: i, selectionEnd: i };
    var n = c.slice(d, o);
    return { selectionStart: i, selectionEnd: i + m.util.string.graphemeSplit(n).length };
  }, fromGraphemeToStringSelection: function(d, o, c) {
    var g = c.slice(0, d).join("").length;
    return d === o ? { selectionStart: g, selectionEnd: g } : { selectionStart: g, selectionEnd: g + c.slice(d, o).join("").length };
  }, _updateTextarea: function() {
    if (this.cursorOffsetCache = {}, this.hiddenTextarea) {
      if (!this.inCompositionMode) {
        var d = this.fromGraphemeToStringSelection(this.selectionStart, this.selectionEnd, this._text);
        this.hiddenTextarea.selectionStart = d.selectionStart, this.hiddenTextarea.selectionEnd = d.selectionEnd;
      }
      this.updateTextareaPosition();
    }
  }, updateFromTextArea: function() {
    if (this.hiddenTextarea) {
      this.cursorOffsetCache = {}, this.text = this.hiddenTextarea.value, this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords());
      var d = this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart, this.hiddenTextarea.selectionEnd, this.hiddenTextarea.value);
      this.selectionEnd = this.selectionStart = d.selectionEnd, this.inCompositionMode || (this.selectionStart = d.selectionStart), this.updateTextareaPosition();
    }
  }, updateTextareaPosition: function() {
    if (this.selectionStart === this.selectionEnd) {
      var d = this._calcTextareaPosition();
      this.hiddenTextarea.style.left = d.left, this.hiddenTextarea.style.top = d.top;
    }
  }, _calcTextareaPosition: function() {
    if (!this.canvas)
      return { x: 1, y: 1 };
    var d = this.inCompositionMode ? this.compositionStart : this.selectionStart, o = this._getCursorBoundaries(d), c = this.get2DCursorLocation(d), g = c.lineIndex, i = c.charIndex, n = this.getValueOfPropertyAt(g, i, "fontSize") * this.lineHeight, s = o.leftOffset, u = this.calcTransformMatrix(), l = { x: o.left + s, y: o.top + o.topOffset + n }, h = this.canvas.getRetinaScaling(), p = this.canvas.upperCanvasEl, v = p.width / h, b = p.height / h, F = v - n, U = b - n, k = p.clientWidth / v, T = p.clientHeight / b;
    return l = m.util.transformPoint(l, u), (l = m.util.transformPoint(l, this.canvas.viewportTransform)).x *= k, l.y *= T, l.x < 0 && (l.x = 0), l.x > F && (l.x = F), l.y < 0 && (l.y = 0), l.y > U && (l.y = U), l.x += this.canvas._offset.left, l.y += this.canvas._offset.top, { left: l.x + "px", top: l.y + "px", fontSize: n + "px", charHeight: n };
  }, _saveEditingProps: function() {
    this._savedProps = { hasControls: this.hasControls, borderColor: this.borderColor, lockMovementX: this.lockMovementX, lockMovementY: this.lockMovementY, hoverCursor: this.hoverCursor, selectable: this.selectable, defaultCursor: this.canvas && this.canvas.defaultCursor, moveCursor: this.canvas && this.canvas.moveCursor };
  }, _restoreEditingProps: function() {
    this._savedProps && (this.hoverCursor = this._savedProps.hoverCursor, this.hasControls = this._savedProps.hasControls, this.borderColor = this._savedProps.borderColor, this.selectable = this._savedProps.selectable, this.lockMovementX = this._savedProps.lockMovementX, this.lockMovementY = this._savedProps.lockMovementY, this.canvas && (this.canvas.defaultCursor = this._savedProps.defaultCursor, this.canvas.moveCursor = this._savedProps.moveCursor));
  }, exitEditing: function() {
    var d = this._textBeforeEdit !== this.text, o = this.hiddenTextarea;
    return this.selected = !1, this.isEditing = !1, this.selectionEnd = this.selectionStart, o && (o.blur && o.blur(), o.parentNode && o.parentNode.removeChild(o)), this.hiddenTextarea = null, this.abortCursorAnimation(), this._restoreEditingProps(), this._currentCursorOpacity = 0, this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this.fire("editing:exited"), d && this.fire("modified"), this.canvas && (this.canvas.off("mouse:move", this.mouseMoveHandler), this.canvas.fire("text:editing:exited", { target: this }), d && this.canvas.fire("object:modified", { target: this })), this;
  }, _removeExtraneousStyles: function() {
    for (var d in this.styles)
      this._textLines[d] || delete this.styles[d];
  }, removeStyleFromTo: function(d, o) {
    var c, g, i = this.get2DCursorLocation(d, !0), n = this.get2DCursorLocation(o, !0), s = i.lineIndex, u = i.charIndex, l = n.lineIndex, h = n.charIndex;
    if (s !== l) {
      if (this.styles[s])
        for (c = u; c < this._unwrappedTextLines[s].length; c++)
          delete this.styles[s][c];
      if (this.styles[l])
        for (c = h; c < this._unwrappedTextLines[l].length; c++)
          (g = this.styles[l][c]) && (this.styles[s] || (this.styles[s] = {}), this.styles[s][u + c - h] = g);
      for (c = s + 1; c <= l; c++)
        delete this.styles[c];
      this.shiftLineStyles(l, s - l);
    } else if (this.styles[s]) {
      g = this.styles[s];
      var p, v, b = h - u;
      for (c = u; c < h; c++)
        delete g[c];
      for (v in this.styles[s])
        (p = parseInt(v, 10)) >= h && (g[p - b] = g[v], delete g[v]);
    }
  }, shiftLineStyles: function(d, o) {
    var c = D(this.styles);
    for (var g in this.styles) {
      var i = parseInt(g, 10);
      i > d && (this.styles[i + o] = c[i], c[i - o] || delete this.styles[i]);
    }
  }, restartCursorIfNeeded: function() {
    this._currentTickState && !this._currentTickState.isAborted && this._currentTickCompleteState && !this._currentTickCompleteState.isAborted || this.initDelayedCursor();
  }, insertNewlineStyleObject: function(d, o, c, g) {
    var i, n = {}, s = !1, u = this._unwrappedTextLines[d].length === o;
    for (var l in c || (c = 1), this.shiftLineStyles(d, c), this.styles[d] && (i = this.styles[d][o === 0 ? o : o - 1]), this.styles[d]) {
      var h = parseInt(l, 10);
      h >= o && (s = !0, n[h - o] = this.styles[d][l], u && o === 0 || delete this.styles[d][l]);
    }
    var p = !1;
    for (s && !u && (this.styles[d + c] = n, p = !0), p && c--; c > 0; )
      g && g[c - 1] ? this.styles[d + c] = { 0: D(g[c - 1]) } : i ? this.styles[d + c] = { 0: D(i) } : delete this.styles[d + c], c--;
    this._forceClearCache = !0;
  }, insertCharStyleObject: function(d, o, c, g) {
    this.styles || (this.styles = {});
    var i = this.styles[d], n = i ? D(i) : {};
    for (var s in c || (c = 1), n) {
      var u = parseInt(s, 10);
      u >= o && (i[u + c] = n[u], n[u - c] || delete i[u]);
    }
    if (this._forceClearCache = !0, g)
      for (; c--; )
        Object.keys(g[c]).length && (this.styles[d] || (this.styles[d] = {}), this.styles[d][o + c] = D(g[c]));
    else if (i)
      for (var l = i[o ? o - 1 : 1]; l && c--; )
        this.styles[d][o + c] = D(l);
  }, insertNewStyleBlock: function(d, o, c) {
    for (var g = this.get2DCursorLocation(o, !0), i = [0], n = 0, s = 0; s < d.length; s++)
      d[s] === `
` ? i[++n] = 0 : i[n]++;
    for (i[0] > 0 && (this.insertCharStyleObject(g.lineIndex, g.charIndex, i[0], c), c = c && c.slice(i[0] + 1)), n && this.insertNewlineStyleObject(g.lineIndex, g.charIndex + i[0], n), s = 1; s < n; s++)
      i[s] > 0 ? this.insertCharStyleObject(g.lineIndex + s, 0, i[s], c) : c && this.styles[g.lineIndex + s] && c[0] && (this.styles[g.lineIndex + s][0] = c[0]), c = c && c.slice(i[s] + 1);
    i[s] > 0 && this.insertCharStyleObject(g.lineIndex + s, 0, i[s], c);
  }, setSelectionStartEndWithShift: function(d, o, c) {
    c <= d ? (o === d ? this._selectionDirection = "left" : this._selectionDirection === "right" && (this._selectionDirection = "left", this.selectionEnd = d), this.selectionStart = c) : c > d && c < o ? this._selectionDirection === "right" ? this.selectionEnd = c : this.selectionStart = c : (o === d ? this._selectionDirection = "right" : this._selectionDirection === "left" && (this._selectionDirection = "right", this.selectionStart = o), this.selectionEnd = c);
  }, setSelectionInBoundaries: function() {
    var d = this.text.length;
    this.selectionStart > d ? this.selectionStart = d : this.selectionStart < 0 && (this.selectionStart = 0), this.selectionEnd > d ? this.selectionEnd = d : this.selectionEnd < 0 && (this.selectionEnd = 0);
  } }), m.util.object.extend(m.IText.prototype, { initDoubleClickSimulation: function() {
    this.__lastClickTime = +/* @__PURE__ */ new Date(), this.__lastLastClickTime = +/* @__PURE__ */ new Date(), this.__lastPointer = {}, this.on("mousedown", this.onMouseDown);
  }, onMouseDown: function(d) {
    if (this.canvas) {
      this.__newClickTime = +/* @__PURE__ */ new Date();
      var o = d.pointer;
      this.isTripleClick(o) && (this.fire("tripleclick", d), this._stopEvent(d.e)), this.__lastLastClickTime = this.__lastClickTime, this.__lastClickTime = this.__newClickTime, this.__lastPointer = o, this.__lastIsEditing = this.isEditing, this.__lastSelected = this.selected;
    }
  }, isTripleClick: function(d) {
    return this.__newClickTime - this.__lastClickTime < 500 && this.__lastClickTime - this.__lastLastClickTime < 500 && this.__lastPointer.x === d.x && this.__lastPointer.y === d.y;
  }, _stopEvent: function(d) {
    d.preventDefault && d.preventDefault(), d.stopPropagation && d.stopPropagation();
  }, initCursorSelectionHandlers: function() {
    this.initMousedownHandler(), this.initMouseupHandler(), this.initClicks();
  }, doubleClickHandler: function(d) {
    this.isEditing && this.selectWord(this.getSelectionStartFromPointer(d.e));
  }, tripleClickHandler: function(d) {
    this.isEditing && this.selectLine(this.getSelectionStartFromPointer(d.e));
  }, initClicks: function() {
    this.on("mousedblclick", this.doubleClickHandler), this.on("tripleclick", this.tripleClickHandler);
  }, _mouseDownHandler: function(d) {
    !this.canvas || !this.editable || d.e.button && d.e.button !== 1 || (this.__isMousedown = !0, this.selected && (this.inCompositionMode = !1, this.setCursorByClick(d.e)), this.isEditing && (this.__selectionStartOnMouseDown = this.selectionStart, this.selectionStart === this.selectionEnd && this.abortCursorAnimation(), this.renderCursorOrSelection()));
  }, _mouseDownHandlerBefore: function(d) {
    !this.canvas || !this.editable || d.e.button && d.e.button !== 1 || (this.selected = this === this.canvas._activeObject);
  }, initMousedownHandler: function() {
    this.on("mousedown", this._mouseDownHandler), this.on("mousedown:before", this._mouseDownHandlerBefore);
  }, initMouseupHandler: function() {
    this.on("mouseup", this.mouseUpHandler);
  }, mouseUpHandler: function(d) {
    if (this.__isMousedown = !1, !(!this.editable || this.group || d.transform && d.transform.actionPerformed || d.e.button && d.e.button !== 1)) {
      if (this.canvas) {
        var o = this.canvas._activeObject;
        if (o && o !== this)
          return;
      }
      this.__lastSelected && !this.__corner ? (this.selected = !1, this.__lastSelected = !1, this.enterEditing(d.e), this.selectionStart === this.selectionEnd ? this.initDelayedCursor(!0) : this.renderCursorOrSelection()) : this.selected = !0;
    }
  }, setCursorByClick: function(d) {
    var o = this.getSelectionStartFromPointer(d), c = this.selectionStart, g = this.selectionEnd;
    d.shiftKey ? this.setSelectionStartEndWithShift(c, g, o) : (this.selectionStart = o, this.selectionEnd = o), this.isEditing && (this._fireSelectionChanged(), this._updateTextarea());
  }, getSelectionStartFromPointer: function(d) {
    for (var o, c = this.getLocalPointer(d), g = 0, i = 0, n = 0, s = 0, u = 0, l = 0, h = this._textLines.length; l < h && n <= c.y; l++)
      n += this.getHeightOfLine(l) * this.scaleY, u = l, l > 0 && (s += this._textLines[l - 1].length + this.missingNewlineOffset(l - 1));
    i = this._getLineLeftOffset(u) * this.scaleX, o = this._textLines[u], this.direction === "rtl" && (c.x = this.width * this.scaleX - c.x + i);
    for (var p = 0, v = o.length; p < v && (g = i, (i += this.__charBounds[u][p].kernedWidth * this.scaleX) <= c.x); p++)
      s++;
    return this._getNewSelectionStartFromOffset(c, g, i, s, v);
  }, _getNewSelectionStartFromOffset: function(d, o, c, g, i) {
    var n = d.x - o, s = c - d.x, u = g + (s > n || s < 0 ? 0 : 1);
    return this.flipX && (u = i - u), u > this._text.length && (u = this._text.length), u;
  } }), m.util.object.extend(m.IText.prototype, { initHiddenTextarea: function() {
    this.hiddenTextarea = m.document.createElement("textarea"), this.hiddenTextarea.setAttribute("autocapitalize", "off"), this.hiddenTextarea.setAttribute("autocorrect", "off"), this.hiddenTextarea.setAttribute("autocomplete", "off"), this.hiddenTextarea.setAttribute("spellcheck", "false"), this.hiddenTextarea.setAttribute("data-fabric-hiddentextarea", ""), this.hiddenTextarea.setAttribute("wrap", "off");
    var d = this._calcTextareaPosition();
    this.hiddenTextarea.style.cssText = "position: absolute; top: " + d.top + "; left: " + d.left + "; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; padding-top: " + d.fontSize + ";", this.hiddenTextareaContainer ? this.hiddenTextareaContainer.appendChild(this.hiddenTextarea) : m.document.body.appendChild(this.hiddenTextarea), m.util.addListener(this.hiddenTextarea, "keydown", this.onKeyDown.bind(this)), m.util.addListener(this.hiddenTextarea, "keyup", this.onKeyUp.bind(this)), m.util.addListener(this.hiddenTextarea, "input", this.onInput.bind(this)), m.util.addListener(this.hiddenTextarea, "copy", this.copy.bind(this)), m.util.addListener(this.hiddenTextarea, "cut", this.copy.bind(this)), m.util.addListener(this.hiddenTextarea, "paste", this.paste.bind(this)), m.util.addListener(this.hiddenTextarea, "compositionstart", this.onCompositionStart.bind(this)), m.util.addListener(this.hiddenTextarea, "compositionupdate", this.onCompositionUpdate.bind(this)), m.util.addListener(this.hiddenTextarea, "compositionend", this.onCompositionEnd.bind(this)), !this._clickHandlerInitialized && this.canvas && (m.util.addListener(this.canvas.upperCanvasEl, "click", this.onClick.bind(this)), this._clickHandlerInitialized = !0);
  }, keysMap: { 9: "exitEditing", 27: "exitEditing", 33: "moveCursorUp", 34: "moveCursorDown", 35: "moveCursorRight", 36: "moveCursorLeft", 37: "moveCursorLeft", 38: "moveCursorUp", 39: "moveCursorRight", 40: "moveCursorDown" }, keysMapRtl: { 9: "exitEditing", 27: "exitEditing", 33: "moveCursorUp", 34: "moveCursorDown", 35: "moveCursorLeft", 36: "moveCursorRight", 37: "moveCursorRight", 38: "moveCursorUp", 39: "moveCursorLeft", 40: "moveCursorDown" }, ctrlKeysMapUp: { 67: "copy", 88: "cut" }, ctrlKeysMapDown: { 65: "selectAll" }, onClick: function() {
    this.hiddenTextarea && this.hiddenTextarea.focus();
  }, onKeyDown: function(d) {
    if (this.isEditing) {
      var o = this.direction === "rtl" ? this.keysMapRtl : this.keysMap;
      if (d.keyCode in o)
        this[o[d.keyCode]](d);
      else {
        if (!(d.keyCode in this.ctrlKeysMapDown) || !d.ctrlKey && !d.metaKey)
          return;
        this[this.ctrlKeysMapDown[d.keyCode]](d);
      }
      d.stopImmediatePropagation(), d.preventDefault(), d.keyCode >= 33 && d.keyCode <= 40 ? (this.inCompositionMode = !1, this.clearContextTop(), this.renderCursorOrSelection()) : this.canvas && this.canvas.requestRenderAll();
    }
  }, onKeyUp: function(d) {
    !this.isEditing || this._copyDone || this.inCompositionMode ? this._copyDone = !1 : d.keyCode in this.ctrlKeysMapUp && (d.ctrlKey || d.metaKey) && (this[this.ctrlKeysMapUp[d.keyCode]](d), d.stopImmediatePropagation(), d.preventDefault(), this.canvas && this.canvas.requestRenderAll());
  }, onInput: function(d) {
    var o = this.fromPaste;
    if (this.fromPaste = !1, d && d.stopPropagation(), this.isEditing) {
      var c, g, i, n, s, u = this._splitTextIntoLines(this.hiddenTextarea.value).graphemeText, l = this._text.length, h = u.length, p = h - l, v = this.selectionStart, b = this.selectionEnd, F = v !== b;
      if (this.hiddenTextarea.value === "")
        return this.styles = {}, this.updateFromTextArea(), this.fire("changed"), void (this.canvas && (this.canvas.fire("text:changed", { target: this }), this.canvas.requestRenderAll()));
      var U = this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart, this.hiddenTextarea.selectionEnd, this.hiddenTextarea.value), k = v > U.selectionStart;
      F ? (c = this._text.slice(v, b), p += b - v) : h < l && (c = k ? this._text.slice(b + p, b) : this._text.slice(v, v - p)), g = u.slice(U.selectionEnd - p, U.selectionEnd), c && c.length && (g.length && (i = this.getSelectionStyles(v, v + 1, !1), i = g.map(function() {
        return i[0];
      })), F ? (n = v, s = b) : k ? (n = b - c.length, s = b) : (n = b, s = b + c.length), this.removeStyleFromTo(n, s)), g.length && (o && g.join("") === m.copiedText && !m.disableStyleCopyPaste && (i = m.copiedTextStyle), this.insertNewStyleBlock(g, v, i)), this.updateFromTextArea(), this.fire("changed"), this.canvas && (this.canvas.fire("text:changed", { target: this }), this.canvas.requestRenderAll());
    }
  }, onCompositionStart: function() {
    this.inCompositionMode = !0;
  }, onCompositionEnd: function() {
    this.inCompositionMode = !1;
  }, onCompositionUpdate: function(d) {
    this.compositionStart = d.target.selectionStart, this.compositionEnd = d.target.selectionEnd, this.updateTextareaPosition();
  }, copy: function() {
    this.selectionStart !== this.selectionEnd && (m.copiedText = this.getSelectedText(), m.disableStyleCopyPaste ? m.copiedTextStyle = null : m.copiedTextStyle = this.getSelectionStyles(this.selectionStart, this.selectionEnd, !0), this._copyDone = !0);
  }, paste: function() {
    this.fromPaste = !0;
  }, _getClipboardData: function(d) {
    return d && d.clipboardData || m.window.clipboardData;
  }, _getWidthBeforeCursor: function(d, o) {
    var c, g = this._getLineLeftOffset(d);
    return o > 0 && (g += (c = this.__charBounds[d][o - 1]).left + c.width), g;
  }, getDownCursorOffset: function(d, o) {
    var c = this._getSelectionForOffset(d, o), g = this.get2DCursorLocation(c), i = g.lineIndex;
    if (i === this._textLines.length - 1 || d.metaKey || d.keyCode === 34)
      return this._text.length - c;
    var n = g.charIndex, s = this._getWidthBeforeCursor(i, n), u = this._getIndexOnLine(i + 1, s);
    return this._textLines[i].slice(n).length + u + 1 + this.missingNewlineOffset(i);
  }, _getSelectionForOffset: function(d, o) {
    return d.shiftKey && this.selectionStart !== this.selectionEnd && o ? this.selectionEnd : this.selectionStart;
  }, getUpCursorOffset: function(d, o) {
    var c = this._getSelectionForOffset(d, o), g = this.get2DCursorLocation(c), i = g.lineIndex;
    if (i === 0 || d.metaKey || d.keyCode === 33)
      return -c;
    var n = g.charIndex, s = this._getWidthBeforeCursor(i, n), u = this._getIndexOnLine(i - 1, s), l = this._textLines[i].slice(0, n), h = this.missingNewlineOffset(i - 1);
    return -this._textLines[i - 1].length + u - l.length + (1 - h);
  }, _getIndexOnLine: function(d, o) {
    for (var c, g, i = this._textLines[d], n = this._getLineLeftOffset(d), s = 0, u = 0, l = i.length; u < l; u++)
      if ((n += c = this.__charBounds[d][u].width) > o) {
        g = !0;
        var h = n - c, p = n, v = Math.abs(h - o);
        s = Math.abs(p - o) < v ? u : u - 1;
        break;
      }
    return g || (s = i.length - 1), s;
  }, moveCursorDown: function(d) {
    this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorUpOrDown("Down", d);
  }, moveCursorUp: function(d) {
    this.selectionStart === 0 && this.selectionEnd === 0 || this._moveCursorUpOrDown("Up", d);
  }, _moveCursorUpOrDown: function(d, o) {
    var c = this["get" + d + "CursorOffset"](o, this._selectionDirection === "right");
    o.shiftKey ? this.moveCursorWithShift(c) : this.moveCursorWithoutShift(c), c !== 0 && (this.setSelectionInBoundaries(), this.abortCursorAnimation(), this._currentCursorOpacity = 1, this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea());
  }, moveCursorWithShift: function(d) {
    var o = this._selectionDirection === "left" ? this.selectionStart + d : this.selectionEnd + d;
    return this.setSelectionStartEndWithShift(this.selectionStart, this.selectionEnd, o), d !== 0;
  }, moveCursorWithoutShift: function(d) {
    return d < 0 ? (this.selectionStart += d, this.selectionEnd = this.selectionStart) : (this.selectionEnd += d, this.selectionStart = this.selectionEnd), d !== 0;
  }, moveCursorLeft: function(d) {
    this.selectionStart === 0 && this.selectionEnd === 0 || this._moveCursorLeftOrRight("Left", d);
  }, _move: function(d, o, c) {
    var g;
    if (d.altKey)
      g = this["findWordBoundary" + c](this[o]);
    else {
      if (!d.metaKey && d.keyCode !== 35 && d.keyCode !== 36)
        return this[o] += c === "Left" ? -1 : 1, !0;
      g = this["findLineBoundary" + c](this[o]);
    }
    if (g !== void 0 && this[o] !== g)
      return this[o] = g, !0;
  }, _moveLeft: function(d, o) {
    return this._move(d, o, "Left");
  }, _moveRight: function(d, o) {
    return this._move(d, o, "Right");
  }, moveCursorLeftWithoutShift: function(d) {
    var o = !0;
    return this._selectionDirection = "left", this.selectionEnd === this.selectionStart && this.selectionStart !== 0 && (o = this._moveLeft(d, "selectionStart")), this.selectionEnd = this.selectionStart, o;
  }, moveCursorLeftWithShift: function(d) {
    return this._selectionDirection === "right" && this.selectionStart !== this.selectionEnd ? this._moveLeft(d, "selectionEnd") : this.selectionStart !== 0 ? (this._selectionDirection = "left", this._moveLeft(d, "selectionStart")) : void 0;
  }, moveCursorRight: function(d) {
    this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorLeftOrRight("Right", d);
  }, _moveCursorLeftOrRight: function(d, o) {
    var c = "moveCursor" + d + "With";
    this._currentCursorOpacity = 1, o.shiftKey ? c += "Shift" : c += "outShift", this[c](o) && (this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea());
  }, moveCursorRightWithShift: function(d) {
    return this._selectionDirection === "left" && this.selectionStart !== this.selectionEnd ? this._moveRight(d, "selectionStart") : this.selectionEnd !== this._text.length ? (this._selectionDirection = "right", this._moveRight(d, "selectionEnd")) : void 0;
  }, moveCursorRightWithoutShift: function(d) {
    var o = !0;
    return this._selectionDirection = "right", this.selectionStart === this.selectionEnd ? (o = this._moveRight(d, "selectionStart"), this.selectionEnd = this.selectionStart) : this.selectionStart = this.selectionEnd, o;
  }, removeChars: function(d, o) {
    o === void 0 && (o = d + 1), this.removeStyleFromTo(d, o), this._text.splice(d, o - d), this.text = this._text.join(""), this.set("dirty", !0), this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this._removeExtraneousStyles();
  }, insertChars: function(d, o, c, g) {
    g === void 0 && (g = c), g > c && this.removeStyleFromTo(c, g);
    var i = m.util.string.graphemeSplit(d);
    this.insertNewStyleBlock(i, c, o), this._text = [].concat(this._text.slice(0, c), i, this._text.slice(g)), this.text = this._text.join(""), this.set("dirty", !0), this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this._removeExtraneousStyles();
  } }), function() {
    var d = m.util.toFixed, o = /  +/g;
    m.util.object.extend(m.Text.prototype, { _toSVG: function() {
      var c = this._getSVGLeftTopOffsets(), g = this._getSVGTextAndBg(c.textTop, c.textLeft);
      return this._wrapSVGTextAndBg(g);
    }, toSVG: function(c) {
      return this._createBaseSVGMarkup(this._toSVG(), { reviver: c, noStyle: !0, withShadow: !0 });
    }, _getSVGLeftTopOffsets: function() {
      return { textLeft: -this.width / 2, textTop: -this.height / 2, lineTop: this.getHeightOfLine(0) };
    }, _wrapSVGTextAndBg: function(c) {
      var g = this.getSvgTextDecoration(this);
      return [c.textBgRects.join(""), '		<text xml:space="preserve" ', this.fontFamily ? 'font-family="' + this.fontFamily.replace(/"/g, "'") + '" ' : "", this.fontSize ? 'font-size="' + this.fontSize + '" ' : "", this.fontStyle ? 'font-style="' + this.fontStyle + '" ' : "", this.fontWeight ? 'font-weight="' + this.fontWeight + '" ' : "", g ? 'text-decoration="' + g + '" ' : "", 'style="', this.getSvgStyles(!0), '"', this.addPaintOrder(), " >", c.textSpans.join(""), `</text>
`];
    }, _getSVGTextAndBg: function(c, g) {
      var i, n = [], s = [], u = c;
      this._setSVGBg(s);
      for (var l = 0, h = this._textLines.length; l < h; l++)
        i = this._getLineLeftOffset(l), (this.textBackgroundColor || this.styleHas("textBackgroundColor", l)) && this._setSVGTextLineBg(s, l, g + i, u), this._setSVGTextLineText(n, l, g + i, u), u += this.getHeightOfLine(l);
      return { textSpans: n, textBgRects: s };
    }, _createTextCharSpan: function(c, g, i, n) {
      var s = c !== c.trim() || c.match(o), u = this.getSvgSpanStyles(g, s), l = u ? 'style="' + u + '"' : "", h = g.deltaY, p = "", v = m.Object.NUM_FRACTION_DIGITS;
      return h && (p = ' dy="' + d(h, v) + '" '), ['<tspan x="', d(i, v), '" y="', d(n, v), '" ', p, l, ">", m.util.string.escapeXml(c), "</tspan>"].join("");
    }, _setSVGTextLineText: function(c, g, i, n) {
      var s, u, l, h, p, v = this.getHeightOfLine(g), b = this.textAlign.indexOf("justify") !== -1, F = "", U = 0, k = this._textLines[g];
      n += v * (1 - this._fontSizeFraction) / this.lineHeight;
      for (var T = 0, H = k.length - 1; T <= H; T++)
        p = T === H || this.charSpacing, F += k[T], l = this.__charBounds[g][T], U === 0 ? (i += l.kernedWidth - l.width, U += l.width) : U += l.kernedWidth, b && !p && this._reSpaceAndTab.test(k[T]) && (p = !0), p || (s = s || this.getCompleteStyleDeclaration(g, T), u = this.getCompleteStyleDeclaration(g, T + 1), p = m.util.hasStyleChanged(s, u, !0)), p && (h = this._getStyleDeclaration(g, T) || {}, c.push(this._createTextCharSpan(F, h, i, n)), F = "", s = u, i += U, U = 0);
    }, _pushTextBgRect: function(c, g, i, n, s, u) {
      var l = m.Object.NUM_FRACTION_DIGITS;
      c.push("		<rect ", this._getFillAttributes(g), ' x="', d(i, l), '" y="', d(n, l), '" width="', d(s, l), '" height="', d(u, l), `"></rect>
`);
    }, _setSVGTextLineBg: function(c, g, i, n) {
      for (var s, u, l = this._textLines[g], h = this.getHeightOfLine(g) / this.lineHeight, p = 0, v = 0, b = this.getValueOfPropertyAt(g, 0, "textBackgroundColor"), F = 0, U = l.length; F < U; F++)
        s = this.__charBounds[g][F], (u = this.getValueOfPropertyAt(g, F, "textBackgroundColor")) !== b ? (b && this._pushTextBgRect(c, b, i + v, n, p, h), v = s.left, p = s.width, b = u) : p += s.kernedWidth;
      u && this._pushTextBgRect(c, u, i + v, n, p, h);
    }, _getFillAttributes: function(c) {
      var g = c && typeof c == "string" ? new m.Color(c) : "";
      return g && g.getSource() && g.getAlpha() !== 1 ? 'opacity="' + g.getAlpha() + '" fill="' + g.setAlpha(1).toRgb() + '"' : 'fill="' + c + '"';
    }, _getSVGLineTopOffset: function(c) {
      for (var g, i = 0, n = 0; n < c; n++)
        i += this.getHeightOfLine(n);
      return g = this.getHeightOfLine(n), { lineTop: i, offset: (this._fontSizeMult - this._fontSizeFraction) * g / (this.lineHeight * this._fontSizeMult) };
    }, getSvgStyles: function(c) {
      return m.Object.prototype.getSvgStyles.call(this, c) + " white-space: pre;";
    } });
  }(), function(d) {
    var o = d.fabric || (d.fabric = {});
    o.Textbox = o.util.createClass(o.IText, o.Observable, { type: "textbox", minWidth: 20, dynamicMinWidth: 2, __cachedLines: null, lockScalingFlip: !0, noScaleCache: !1, _dimensionAffectingProps: o.Text.prototype._dimensionAffectingProps.concat("width"), _wordJoiners: /[ \t\r]/, splitByGrapheme: !1, initDimensions: function() {
      this.__skipDimension || (this.isEditing && this.initDelayedCursor(), this.clearContextTop(), this._clearCache(), this.dynamicMinWidth = 0, this._styleMap = this._generateStyleMap(this._splitText()), this.dynamicMinWidth > this.width && this._set("width", this.dynamicMinWidth), this.textAlign.indexOf("justify") !== -1 && this.enlargeSpaces(), this.height = this.calcTextHeight(), this.saveState({ propertySet: "_dimensionAffectingProps" }));
    }, _generateStyleMap: function(c) {
      for (var g = 0, i = 0, n = 0, s = {}, u = 0; u < c.graphemeLines.length; u++)
        c.graphemeText[n] === `
` && u > 0 ? (i = 0, n++, g++) : !this.splitByGrapheme && this._reSpaceAndTab.test(c.graphemeText[n]) && u > 0 && (i++, n++), s[u] = { line: g, offset: i }, n += c.graphemeLines[u].length, i += c.graphemeLines[u].length;
      return s;
    }, styleHas: function(c, g) {
      if (this._styleMap && !this.isWrapping) {
        var i = this._styleMap[g];
        i && (g = i.line);
      }
      return o.Text.prototype.styleHas.call(this, c, g);
    }, isEmptyStyles: function(c) {
      if (!this.styles)
        return !0;
      var g, i, n = 0, s = !1, u = this._styleMap[c], l = this._styleMap[c + 1];
      for (var h in u && (c = u.line, n = u.offset), l && (s = l.line === c, g = l.offset), i = c === void 0 ? this.styles : { line: this.styles[c] })
        for (var p in i[h])
          if (p >= n && (!s || p < g))
            for (var v in i[h][p])
              return !1;
      return !0;
    }, _getStyleDeclaration: function(c, g) {
      if (this._styleMap && !this.isWrapping) {
        var i = this._styleMap[c];
        if (!i)
          return null;
        c = i.line, g = i.offset + g;
      }
      return this.callSuper("_getStyleDeclaration", c, g);
    }, _setStyleDeclaration: function(c, g, i) {
      var n = this._styleMap[c];
      c = n.line, g = n.offset + g, this.styles[c][g] = i;
    }, _deleteStyleDeclaration: function(c, g) {
      var i = this._styleMap[c];
      c = i.line, g = i.offset + g, delete this.styles[c][g];
    }, _getLineStyle: function(c) {
      var g = this._styleMap[c];
      return !!this.styles[g.line];
    }, _setLineStyle: function(c) {
      var g = this._styleMap[c];
      this.styles[g.line] = {};
    }, _wrapText: function(c, g) {
      var i, n = [];
      for (this.isWrapping = !0, i = 0; i < c.length; i++)
        n = n.concat(this._wrapLine(c[i], i, g));
      return this.isWrapping = !1, n;
    }, _measureWord: function(c, g, i) {
      var n, s = 0;
      i = i || 0;
      for (var u = 0, l = c.length; u < l; u++)
        s += this._getGraphemeBox(c[u], g, u + i, n, !0).kernedWidth, n = c[u];
      return s;
    }, _wrapLine: function(c, g, i, n) {
      var s = 0, u = this.splitByGrapheme, l = [], h = [], p = u ? o.util.string.graphemeSplit(c) : c.split(this._wordJoiners), v = "", b = 0, F = u ? "" : " ", U = 0, k = 0, T = 0, H = !0, K = this._getWidthOfCharSpacing();
      n = n || 0, p.length === 0 && p.push([]), i -= n;
      for (var P = 0; P < p.length; P++)
        v = u ? p[P] : o.util.string.graphemeSplit(p[P]), U = this._measureWord(v, g, b), b += v.length, (s += k + U - K) > i && !H ? (l.push(h), h = [], s = U, H = !0) : s += K, H || u || h.push(F), h = h.concat(v), k = u ? 0 : this._measureWord([F], g, b), b++, H = !1, U > T && (T = U);
      return P && l.push(h), T + n > this.dynamicMinWidth && (this.dynamicMinWidth = T - K + n), l;
    }, isEndOfWrapping: function(c) {
      return !this._styleMap[c + 1] || this._styleMap[c + 1].line !== this._styleMap[c].line;
    }, missingNewlineOffset: function(c) {
      return this.splitByGrapheme ? this.isEndOfWrapping(c) ? 1 : 0 : 1;
    }, _splitTextIntoLines: function(c) {
      for (var g = o.Text.prototype._splitTextIntoLines.call(this, c), i = this._wrapText(g.lines, this.width), n = new Array(i.length), s = 0; s < i.length; s++)
        n[s] = i[s].join("");
      return g.lines = n, g.graphemeLines = i, g;
    }, getMinWidth: function() {
      return Math.max(this.minWidth, this.dynamicMinWidth);
    }, _removeExtraneousStyles: function() {
      var c = {};
      for (var g in this._styleMap)
        this._textLines[g] && (c[this._styleMap[g].line] = 1);
      for (var g in this.styles)
        c[g] || delete this.styles[g];
    }, toObject: function(c) {
      return this.callSuper("toObject", ["minWidth", "splitByGrapheme"].concat(c));
    } }), o.Textbox.fromObject = function(c, g) {
      var i = o.util.stylesFromArray(c.styles, c.text), n = Object.assign({}, c, { styles: i });
      return o.Object._fromObject("Textbox", n, g, "text");
    };
  }(e), function() {
    var d = m.controlsUtils, o = d.scaleSkewCursorStyleHandler, c = d.scaleCursorStyleHandler, g = d.scalingEqually, i = d.scalingYOrSkewingX, n = d.scalingXOrSkewingY, s = d.scaleOrSkewActionName, u = m.Object.prototype.controls;
    if (u.ml = new m.Control({ x: -0.5, y: 0, cursorStyleHandler: o, actionHandler: n, getActionName: s }), u.mr = new m.Control({ x: 0.5, y: 0, cursorStyleHandler: o, actionHandler: n, getActionName: s }), u.mb = new m.Control({ x: 0, y: 0.5, cursorStyleHandler: o, actionHandler: i, getActionName: s }), u.mt = new m.Control({ x: 0, y: -0.5, cursorStyleHandler: o, actionHandler: i, getActionName: s }), u.tl = new m.Control({ x: -0.5, y: -0.5, cursorStyleHandler: c, actionHandler: g }), u.tr = new m.Control({ x: 0.5, y: -0.5, cursorStyleHandler: c, actionHandler: g }), u.bl = new m.Control({ x: -0.5, y: 0.5, cursorStyleHandler: c, actionHandler: g }), u.br = new m.Control({ x: 0.5, y: 0.5, cursorStyleHandler: c, actionHandler: g }), u.mtr = new m.Control({ x: 0, y: -0.5, actionHandler: d.rotationWithSnapping, cursorStyleHandler: d.rotationStyleHandler, offsetY: -40, withConnection: !0, actionName: "rotate" }), m.Textbox) {
      var l = m.Textbox.prototype.controls = {};
      l.mtr = u.mtr, l.tr = u.tr, l.br = u.br, l.tl = u.tl, l.bl = u.bl, l.mt = u.mt, l.mb = u.mb, l.mr = new m.Control({ x: 0.5, y: 0, actionHandler: d.changeWidth, cursorStyleHandler: o, actionName: "resizing" }), l.ml = new m.Control({ x: -0.5, y: 0, actionHandler: d.changeWidth, cursorStyleHandler: o, actionName: "resizing" });
    }
  }();
})(Zt);
const an = (e) => {
  const A = document.createElement("div");
  return A.classList.add("shake-sdk-divider-vertical"), A;
}, cl = ["#ff0000", "#ffcc00", "#00c274", "#0000FF", "#6552ff", "#808080"], tf = (e, A) => {
  const t = uA();
  t.classList.add("shake-sdk-palette");
  const r = cl.map((f) => {
    const B = ((w, C) => {
      const Q = rt();
      return Q.classList.add("shake-sdk-color-button"), Q.id = w, C ? (Q.style.background = "transparent", Q.style.border = `2px solid ${w}`) : (Q.style.background = w, Q.style.border = "none"), Q;
    })(f, A === f);
    return B.onclick = () => {
      e(f), ((w, C) => {
        C.forEach((Q) => {
          Q.style.background = Q.id, Q.style.border = "none";
        }), w.style.background = "transparent", w.style.border = `2px solid ${w.id}`;
      })(B, r);
    }, t.appendChild(B), B;
  }), a = rt();
  return a.classList.add("shake-sdk-palette-close"), a.onclick = () => e(null), a.appendChild(KA("data:image/svg+xml,%3csvg%20width='50'%20height='51'%20viewBox='0%200%2050%2051'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.834%2021.5598L29.1673%2029.8931'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M29.1673%2021.56L20.834%2029.8933'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), t.appendChild(a), t;
}, ll = (e, A) => {
  const t = new DOMParser().parseFromString(e, "image/svg+xml").documentElement;
  return A && ie(t, A), t;
}, hl = (e, A) => {
  const t = new XMLHttpRequest();
  t.open("GET", e, !0), t.onreadystatechange = function() {
    t.readyState === 4 && t.status === 200 && A(t.responseText);
  }, t.send();
}, ie = (e, A) => {
  let t;
  t = e.querySelectorAll("path"), t.forEach(function(r) {
    r.style.stroke = A;
  }), t = e.querySelectorAll("circle"), t.forEach(function(r) {
    r.style.stroke = A;
  }), t = e.querySelectorAll("rect"), t.forEach(function(r) {
    r.style.stroke = A;
  });
}, ft = (e, A) => {
  const t = uA();
  t.classList.add("shake-sdk-tooltip");
  const r = ((f) => {
    const B = document.createElement("p");
    return B.classList.add("shake-sdk-text-tooltip"), B.innerText = f, B;
  })(A);
  t.appendChild(r);
  const a = () => {
    t.style.display = "none";
  };
  return e.addEventListener("mouseover", () => {
    t.style.display = "block";
    const f = e.getBoundingClientRect();
    t.style.left = f.left - f.width + "px", t.style.top = f.top - f.height - 40 + "px";
  }), e.addEventListener("mouseout", a), e.addEventListener("click", a), t;
}, pt = (e, A, t) => {
  const r = rt();
  return r.classList.add("shake-sdk-attachments-drawing-button"), t && (r.onclick = t), hl(e, (a) => {
    r.appendChild(ll(a, A));
  }), r;
}, ul = (e) => {
  const A = WA.localStorage, t = hA.attachmentsManager;
  let r, a = A.getDrawingColor() ?? cl[0], f = A.getDrawingOption() ?? TA.PENCIL;
  const B = () => {
    r == null || r.remove(), r = function(v, b, F, U) {
      const k = document.createElement("canvas");
      k.classList.add("shake-sdk-canvas");
      const T = k.getContext("2d");
      k.width = v.clientWidth, k.height = v.clientHeight;
      const H = new Zt.fabric.Canvas(k);
      let K = !1, P = 0, X = 0, W = null, I = null;
      const L = (j) => {
        K = !K;
        const J = k.getBoundingClientRect();
        return P = M(j) - J.left, X = O(j) - J.top, F === TA.RECT ? (W = new Zt.fabric.Rect({ left: P, top: X, width: 0, height: 0, fill: "transparent", stroke: b, strokeWidth: 4, cornerColor: b, cornerSize: 6, transparentCorners: !0, selectable: !1 }), void H.add(W)) : F === TA.ELLIPSE ? (I = new Zt.fabric.Ellipse({ left: P, top: X, rx: 0, ry: 0, fill: "transparent", stroke: b, strokeWidth: 4, selectable: !1 }), void H.add(I)) : void 0;
      }, R = (j) => {
        if (!K)
          return;
        const J = k.getBoundingClientRect(), N = M(j) - J.left, z = O(j) - J.top;
        if (F === TA.RECT && W)
          return W.set({ width: N - P, height: z - X }), void H.renderAll();
        if (F === TA.ELLIPSE && I) {
          const iA = Math.abs(N - P) / 2, $ = Math.abs(z - X) / 2;
          return I.set({ rx: iA, ry: $, left: N > P ? P : N, top: z > X ? X : z }).setCoords(), void H.renderAll();
        }
        const AA = F === TA.BLUR;
        AA && T && (T.filter = "blur(10px)");
        const tA = new Zt.fabric.Line([P, X, N, z], { stroke: AA ? "rgba(128, 128, 128, 0.8)" : b, strokeWidth: AA ? 20 : 4, fill: AA ? "rgba(128, 128, 128, 0.8)" : void 0, fillRule: AA ? "solid" : void 0, selectable: !0 });
        H.add(tA), P = N, X = z;
      }, G = () => {
        K && Y(), K = !1;
      }, Y = async () => {
        const j = document.createElement("canvas"), J = j.getContext("2d");
        j.width = v.naturalWidth, j.height = v.naturalHeight, J == null || J.drawImage(v, 0, 0, j.width, j.height), J == null || J.drawImage(k, 0, 0, v.naturalWidth, v.naturalHeight), v.src = j.toDataURL(), j.toBlob((N) => {
          U(N ?? new Blob());
        });
      };
      k.addEventListener("mousedown", L, { passive: !0 }), k.addEventListener("mousemove", R, { passive: !0 }), k.addEventListener("mouseup", G, { passive: !0 }), k.addEventListener("mouseleave", G, { passive: !0 }), k.addEventListener("touchstart", L, { passive: !0 }), k.addEventListener("touchmove", R, { passive: !0 }), k.addEventListener("touchend", G, { passive: !0 }), k.addEventListener("touchcancel", G, { passive: !0 });
      const M = (j) => It() ? j.touches[0].clientX : j.clientX, O = (j) => It() ? j.touches[0].clientY : j.clientY;
      return window.onresize = () => {
        k.width = v.clientWidth, k.height = v.clientHeight, H.setWidth(v.clientWidth), H.setHeight(v.clientHeight), H.renderAll();
      }, k;
    }(l, a, f, (v) => {
      e.drawingData = v, t.updateAttachment(e);
    }), h.appendChild(r);
  }, w = () => {
    const v = "#636366";
    ie(E, v), ie(S, v), ie(m, v), ie(rA, v), f === TA.BLUR && ie(E, a), f === TA.PENCIL && ie(S, a), f === TA.ELLIPSE && ie(m, a), f === TA.RECT && ie(rA, a);
  }, C = [], Q = [], y = pt("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_3795_450)'%3e%3cpath%20d='M20.036%2016.036C22.272%2011.6048%2020.4924%206.2%2016.0612%203.96402C13.515%202.67923%2010.5102%202.67923%207.96399%203.96402'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M3.96395%207.96399C1.72797%2012.3952%203.50756%2017.8%207.93877%2020.036C10.4849%2021.3208%2013.4898%2021.3208%2016.036%2020.036'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M4%204L20%2020'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_3795_450'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", void 0, () => {
    l.src = URL.createObjectURL(e.data), e.drawingData = e.data, t.updateAttachment(e), B();
  }), x = ft(y, "Clear");
  C.push(y), C.push(an()), Q.push(x);
  const E = pt("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_3795_444)'%3e%3cpath%20d='M16.775%209H4.225C3.548%209%203%208.452%203%207.775V4.225C3%203.548%203.548%203%204.225%203H16.776C17.452%203%2018%203.548%2018%204.225V7.776C18%208.452%2017.452%209%2016.775%209Z'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2022H10C9.448%2022%209%2021.552%209%2021V16C9%2015.448%209.448%2015%2010%2015H12C12.552%2015%2013%2015.448%2013%2016V21C13%2021.552%2012.552%2022%2012%2022Z'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M11%2015V13C11%2012.448%2011.448%2012%2012%2012H20C20.552%2012%2021%2011.552%2021%2011V7C21%206.448%2020.552%206%2020%206H18'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_3795_444'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", f === TA.BLUR ? a : void 0, () => {
    f = TA.BLUR, A.setDrawingOption(TA.BLUR), w(), ie(E, a), B();
  }), _ = ft(E, "Blur");
  C.push(E), C.push(an()), Q.push(_);
  const S = pt("data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='pen-draw%201'%20clip-path='url(%23clip0_15248_22176)'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M10.9258%2016.8278C14.5704%2020.4725%2019.5591%2021.3965%2022.0616%2018.8905C24.171%2016.7812%2023.8431%2012.9172%2021.5156%209.57349'%20stroke='%23636366'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_2'%20d='M18.4802%206.4306C14.097%203.05893%208.61602%202.63776%205.56285%205.69093C2.14569%209.1081%203.06969%2015.5714%207.62552%2020.1273C9.62034%2022.1549%2012.0861%2023.6572%2014.8029%2024.4999'%20stroke='%23636366'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_3'%20d='M14.4897%2014.4666L16.6679%2014.0303C16.9828%2013.9683%2017.2726%2013.8149%2017.5009%2013.5893L23.8615%207.23327C24.7143%206.38002%2024.7143%204.99719%2023.8615%204.14394C23.0083%203.29121%2021.6255%203.29121%2020.7722%204.14394L14.4115%2010.4999C14.1842%2010.7276%2014.0291%2011.0174%2013.9659%2011.3329L13.5342%2013.5111C13.4495%2013.9541%2013.74%2014.3819%2014.183%2014.4666C14.2843%2014.486%2014.3884%2014.486%2014.4897%2014.4666Z'%20stroke='%23636366'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15248_22176'%3e%3crect%20width='28'%20height='28'%20fill='none'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", f === TA.PENCIL ? a : void 0, () => {
    f = TA.PENCIL, A.setDrawingOption(TA.PENCIL), w(), ie(S, a), B();
  }), D = ft(S, "Pen");
  C.push(S), Q.push(D);
  const m = pt("data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='10.5'%20cy='10.5'%20r='9.5'%20stroke='%23636366'%20stroke-width='2'/%3e%3c/svg%3e", f === TA.ELLIPSE ? a : void 0, () => {
    f = TA.ELLIPSE, A.setDrawingOption(TA.ELLIPSE), w(), ie(m, a), B();
  }), q = ft(m, "Circle");
  C.push(m), Q.push(q);
  const rA = pt("data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='1'%20width='20'%20height='20'%20rx='3'%20stroke='%23636366'%20stroke-width='2'/%3e%3c/svg%3e", f === TA.RECT ? a : void 0, () => {
    f = TA.RECT, A.setDrawingOption(TA.RECT), w(), B();
  }), oA = ft(rA, "Rectangle");
  C.push(rA), C.push(an()), Q.push(oA);
  const d = pt("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_16266_21838)'%3e%3cpath%20d='M16.2969%208.19898C16.2969%208.47458%2016.0735%208.698%2015.7979%208.698C15.5222%208.698%2015.2988%208.47458%2015.2988%208.19898C15.2988%207.92337%2015.5222%207.69995%2015.7979%207.69995'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15.7988%207.69995C16.0744%207.69995%2016.2979%207.92337%2016.2979%208.19898'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.498%206.59912C12.498%206.87473%2012.2746%207.09815%2011.999%207.09815C11.7234%207.09815%2011.5%206.87473%2011.5%206.59912C11.5%206.32352%2011.7234%206.1001%2011.999%206.1001'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%206.1001C12.2756%206.1001%2012.499%206.32352%2012.499%206.59912'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.69922%208.19898C8.69922%208.47458%208.4758%208.698%208.2002%208.698C7.92459%208.698%207.70117%208.47458%207.70117%208.19898C7.70117%207.92337%207.92459%207.69995%208.2002%207.69995'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.20117%207.69995C8.47678%207.69995%208.7002%207.92337%208.7002%208.19898'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M7.09766%2011.999C7.09766%2012.2746%206.87424%2012.498%206.59863%2012.498C6.32303%2012.498%206.09961%2012.2746%206.09961%2011.999C6.09961%2011.7234%206.32303%2011.5%206.59863%2011.5'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M6.59961%2011.5C6.87521%2011.5%207.09863%2011.7234%207.09863%2011.999'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.69922%2015.7991C8.69922%2016.0747%208.4758%2016.2981%208.2002%2016.2981C7.92459%2016.2981%207.70117%2016.0747%207.70117%2015.7991C7.70117%2015.5235%207.92459%2015.3%208.2002%2015.3'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.20117%2015.3C8.47678%2015.3%208.7002%2015.5235%208.7002%2015.7991'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M11.9995%2021C6.94455%2021%202.86255%2016.832%203.00355%2011.745C3.13355%207.04903%207.04855%203.13403%2011.7445%203.00403C16.8315%202.86303%2020.9995%206.94503%2020.9995%2012V13C20.9995%2014.105%2020.1045%2015%2018.9995%2015H16.9365C15.6075%2015%2014.6485%2016.272%2015.0135%2017.549L15.2705%2018.45C15.6365%2019.728%2014.6765%2021%2013.3485%2021H11.9995Z'%20stroke='%23636366'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_16266_21838'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", void 0, () => {
    i.style.display = "flex", g.style.display = "none";
  }), o = ft(d, "Choose color");
  C.push(d), Q.push(o);
  const c = tf((v) => {
    v && (a = v, A.setDrawingColor(v), w(), B()), i.style.display = "none", g.style.display = "flex";
  }, a), g = uA();
  g.classList.add("shake-sdk-drawing-toolbox-buttons"), C.map((v) => g.appendChild(v)), Q.map((v) => g.appendChild(v));
  const i = uA();
  i.classList.add("shake-sdk-drawing-toolbox-colors"), i.appendChild(c);
  const n = uA();
  n.classList.add("shake-sdk-drawing-toolbox"), n.appendChild(g), n.appendChild(i);
  const s = uA();
  s.classList.add("shake-sdk-image-preview-toolbox-container"), s.appendChild(n);
  const u = URL.createObjectURL(e.drawingData ?? e.data), l = KA(u);
  l.classList.add("shake-sdk-image-preview-image"), l.addEventListener("load", B, { passive: !0 });
  const h = uA();
  h.appendChild(l), h.classList.add("shake-sdk-image-preview-image-container");
  const p = uA();
  return p.classList.add("shake-sdk-image-preview"), p.appendChild(h), p.appendChild(s), p;
}, rf = (e) => {
  const A = uA();
  A.classList.add("shake-sdk-attachments-preview");
  const t = e.type == EA.IMAGE ? ul(e) : ((r) => {
    const a = uA();
    a.classList.add("shake-sdk-video-preview");
    const f = URL.createObjectURL(r), B = Rr({ src: f + "#t=0.1", controls: !0 });
    return B.addEventListener("loadeddata", () => {
      a.appendChild(B);
    }, !1), a;
  })(e.data);
  return A.appendChild(t), A;
}, As = "shake-sdk-attachments-card", nf = (e) => {
  const A = us();
  A.id = As;
  const t = uA();
  t.classList.add("shake-sdk-attachments-page");
  const r = (() => {
    const y = rt();
    y.appendChild(KA(hc)), y.appendChild(vo(fA().shake_sdk_dialog_add_attachment_record_screen)), y.onclick = xs;
    const x = rt();
    x.appendChild(KA(lc)), x.appendChild(vo(fA().shake_sdk_dialog_add_attachment_grab_screenshot)), x.onclick = ks;
    const E = uA();
    E.classList.add("shake-sdk-attachments-empty-buttons"), E.appendChild(x), E.appendChild(y);
    const _ = uA();
    _.classList.add("shake-sdk-attachments-empty-dragdrop"), _.appendChild(KA("data:image/png;base64,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")), _.appendChild(Ie("Click to attach a file or drag it here")), _.onclick = ds;
    const S = uA();
    return S.classList.add("shake-sdk-attachments-empty"), S.appendChild(_), S.appendChild(E), ca(_), S;
  })(), a = uA();
  a.classList.add("shake-sdk-attachments-list-wrap"), ca(a);
  const f = uA();
  f.classList.add("shake-sdk-attachments-preview-wrap");
  const B = () => {
    r.remove(), A.appendChild(t);
  }, w = () => {
    t.remove(), A.appendChild(r);
  };
  let C = "";
  const Q = ef(e, (y) => {
    C !== y && (C = y ?? "", y ? (t.parentNode || B(), Va(y ?? "").then((x) => {
      f.innerText = "", f.appendChild(rf(x));
    })) : (r.parentNode || w(), f.innerText = ""));
  });
  return a.appendChild(Q), t.appendChild(a), t.appendChild(f), e.length > 0 ? B() : w(), A;
}, dl = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2040%2040'%20stroke-width='2'%20stroke='currentColor'%20class='size-6'%3e%3cpath%20transform='translate(7,%209)'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M6%2018%2018%206M6%206l12%2012'%20/%3e%3c/svg%3e", es = "email", sf = ({ icon: e, text: A }) => {
  const t = Ie(A);
  t.classList.add("shake-sdk-bottom-navigation-button-text");
  const r = KA(fi);
  r.classList.add("shake-sdk-bottom-navigation-notification-icon");
  const a = document.createElement("button");
  return a.classList.add("shake-sdk-bottom-navigation-button"), hl(e, (f) => {
    a.appendChild(ll(f)), a.appendChild(t), a.appendChild(r);
  }), { setBadgeVisible: (f) => {
    r.style.visibility = f ? "visible" : "hidden";
  }, button: a };
}, ui = new ac();
function jt(e) {
  return new Promise((A, t) => {
    const r = [], a = indexedDB.open(kA, 4);
    a.onsuccess = function(f) {
      const B = f.target.result.transaction([de], "readonly").objectStore(de).openCursor();
      B.onsuccess = function(w) {
        const C = w.target.result;
        C ? ((!e || C.value.ticketId === e) && r.push({ id: C.value.id, body: C.value.body, synced: C.value.synced, failed: C.value.failed, read: C.value.read, ticketId: C.value.ticketId, created: C.value.created, senderId: C.value.senderId }), C.continue()) : A(r);
      }, B.onerror = function() {
        t("Error retrieving chat messages from IndexedDB");
      };
    }, a.onerror = IA(t), a.onupgradeneeded = xA;
  });
}
const Yi = (e) => new Promise((A, t) => {
  const r = indexedDB.open(kA, 4);
  r.onsuccess = function(a) {
    const f = a.target.result.transaction([de], "readwrite"), B = f.objectStore(de);
    e.forEach((w) => B.put(w)), f.oncomplete = () => {
      ui.notifyChange(), A("Chat messages written successfully to IndexedDB");
    }, f.onerror = () => {
      t("Error writing chat messages to IndexedDB");
    };
  }, r.onerror = IA(t), r.onupgradeneeded = xA;
}), gl = (e, A, t = Us("")) => {
  let r = [];
  const a = document.createElement("div");
  a.classList.add("shake-sdk-list-items");
  const f = document.createElement("div");
  return f.classList.add("shake-sdk-list"), f.appendChild(a), f.appendChild(t), t.style.display = "none", { container: f, list: a, setData: (B) => {
    for (B.forEach((w, C) => {
      if (C >= r.length || e(w, r[C])) {
        const Q = document.createElement("div");
        Q.classList.add("shake-sdk-list-item");
        const y = A(w);
        Q.appendChild(y), C < a.children.length ? a.replaceChild(Q, a.children[C]) : a.appendChild(Q);
      }
    }); a.children.length > B.length; )
      a.removeChild(a.lastChild);
    B.length <= 0 ? (t.style.display = "flex", a.style.display = "none") : (t.style.display = "none", a.style.display = "flex"), r = B;
  } };
}, Us = (e) => {
  const A = document.createElement("img");
  A.classList.add("shake-sdk-list-empty-img"), A.src = "data:image/svg+xml,%3csvg%20width='46'%20height='46'%20viewBox='0%200%2046%2046'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_16500_1594)'%3e%3cpath%20d='M36.3282%2043.25H9.67122C7.55331%2043.25%205.83789%2041.5346%205.83789%2039.4167V24.0833C5.83789%2021.9654%207.55331%2020.25%209.67122%2020.25H36.3282C38.4461%2020.25%2040.1616%2021.9654%2040.1616%2024.0833V39.4167C40.1616%2041.5346%2038.4442%2043.25%2036.3282%2043.25Z'%20stroke='%23C7C7CC'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.16602%2017.25V15.3333C9.16602%2013.2154%2010.8814%2011.5%2012.9993%2011.5H32.9998C35.1177%2011.5%2036.8331%2013.2154%2036.8331%2015.3333V17.25'%20stroke='%23C7C7CC'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.4883%208.5V6.58333C12.4883%204.46542%2014.2037%202.75%2016.3216%202.75H29.6789C31.7968%202.75%2033.5122%204.46542%2033.5122%206.58333V8.5'%20stroke='%23C7C7CC'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M27.7528%2027.1218L18.2461%2036.6285'%20stroke='%23C7C7CC'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_16500_1594'%3e%3crect%20width='46'%20height='46'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
  const t = document.createElement("p");
  t.classList.add("shake-sdk-list-empty-text"), t.innerHTML = e;
  const r = document.createElement("div");
  return r.classList.add("shake-sdk-list-empty"), r.appendChild(A), r.appendChild(t), r;
}, Es = ({ title: e, onBackClick: A, onCloseClick: t, onlyMobile: r = !0 }) => {
  const a = vr({ image: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2040%2040'%20stroke-width='2'%20stroke='currentColor'%20class='size-6'%3e%3cpath%20stroke-linecap='round'%20transform='translate(0,%208)'%20stroke-linejoin='round'%20d='M10.5%2019.5%203%2012m0%200%207.5-7.5M3%2012h18'%20/%3e%3c/svg%3e", onClick: () => A == null ? void 0 : A() }), f = KA(fi);
  f.classList.add("shake-sdk-toolbar-notification-icon");
  const B = document.createElement("div");
  B.classList.add("shake-sdk-toolbar-back-container"), B.appendChild(a), B.appendChild(f);
  const w = vr({ image: dl, onClick: () => t == null ? void 0 : t() });
  w.classList.add("shake-sdk-toolbar-close-button");
  const C = je(e ?? "");
  C.classList.add("shake-sdk-toolbar-title");
  const Q = document.createElement("div");
  return Q.classList.add(A ? "shake-sdk-toolbar" : "shake-sdk-toolbar-only-close"), r && Q.classList.add("shake-sdk-toolbar-hideable"), A && Q.appendChild(B), e && Q.appendChild(C), t && Q.appendChild(w), { container: Q, setBadgeVisible: (y) => {
    f.style.visibility = y ? "visible" : "hidden";
  } };
}, vr = ({ image: e, onClick: A }) => {
  const t = KA(e), r = document.createElement("button");
  return r.classList.add("shake-sdk-toolbar-button"), r.onclick = A, r.appendChild(t), r;
};
var Ss = ((e) => (e.MOBILE_SDK = "MOBILE_SDK", e))(Ss || {});
const la = (e) => {
  const A = navigator.language ?? "en-US";
  return e.toLocaleDateString(A, { day: "numeric", weekday: "short" }) + ", " + e.toLocaleTimeString(A, { minute: "numeric", hour: "numeric" });
}, of = (e) => {
  const A = new Date(e), t = Math.floor((Date.now() - A.getTime()) / 1e3);
  let r = Math.floor(t / 31536e3);
  return r >= 1 ? `${r}y` : (r = Math.floor(t / 2592e3), r >= 1 ? `${r}mo` : (r = Math.floor(t / 86400), r >= 1 ? `${r}d` : (r = Math.floor(t / 3600), r >= 1 ? `${r}h` : (r = Math.floor(t / 60), r >= 1 ? `${r}m` : "Now"))));
}, cn = (e, A) => {
  if (!A)
    return null;
  const t = e.find((r) => r.id === A.senderId);
  return (t == null ? void 0 : t.role) === Ss.MOBILE_SDK ? "sender" : "recipient";
}, af = (e) => e.type === "sender" ? ((A) => {
  const t = je(A.message);
  t.classList.add("shake-sdk-chat-message-sender-bubble-text");
  const r = uA();
  r.classList.add("shake-sdk-chat-message-sender-bubble"), A.roundedCorners && r.classList.add("shake-sdk-chat-message-sender-bubble-rounded"), r.appendChild(t);
  const a = KA("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20d='M27,30.375L27,18M6.75,36V18c0,-6.213%205.037,-11.25%2011.25,-11.25h18c6.213,0%2011.25,5.037%2011.25,11.25v18c0,6.213%20-5.037,11.25%20-11.25,11.25H18c-6.213,0%20-11.25,-5.037%20-11.25,-11.25z'%20stroke-linejoin='round'%20stroke-width='4'%20fill='%2300000000'%20stroke='%23f04f4f'%20fill-rule='evenodd'%20stroke-linecap='round'/%3e%3cpath%20d='M27,35.888c-0.062,0%20-0.113,0.05%20-0.113,0.112s0.05,0.112%200.113,0.112c0.062,0%200.113,-0.05%200.113,-0.112s-0.05,-0.112%20-0.113,-0.112'%20stroke-linejoin='round'%20stroke-width='4'%20fill='%2300000000'%20stroke='%23f04f4f'%20fill-rule='evenodd'%20stroke-linecap='round'/%3e%3c/svg%3e"), f = uA();
  f.classList.add("shake-sdk-chat-message-sender-bubble-container"), A.showError && f.appendChild(a), f.appendChild(r);
  const B = la(new Date(A.timestamp)), w = Ie(B), C = Ie(fA().shake_sdk_chat_screen_error_message);
  C.classList.add("shake-sdk-chat-message-sender-error");
  const Q = uA();
  Q.classList.add("shake-sdk-chat-message-sender-info"), A.showError ? Q.appendChild(C) : Q.appendChild(w);
  const y = uA();
  return y.classList.add("shake-sdk-chat-message-sender"), y.appendChild(f), (A.showTime || A.showError) && y.appendChild(Q), A.showError && (y.classList.add("shake-sdk-chat-message-sender-error-state"), y.onclick = () => A.onClick(A)), y;
})(e) : ((A) => {
  const t = je(A.message), r = uA();
  r.classList.add("shake-sdk-chat-message-recipient-bubble"), A.roundedCorners && r.classList.add("shake-sdk-chat-message-recipient-bubble-rounded"), r.appendChild(t);
  const a = la(new Date(A.timestamp)), f = Ie(a), B = uA();
  B.classList.add("shake-sdk-chat-message-recipient-info"), B.appendChild(f);
  const w = uA();
  return w.classList.add("shake-sdk-chat-message-recipient"), w.appendChild(r), A.showTime && w.appendChild(B), w;
})(e), cf = (e, A) => e.id !== A.id || e.showError !== A.showError, lf = (e) => {
  const A = () => {
    t.style.height = "auto", t.style.height = t.scrollHeight + "px", a.disabled = !t.value.trim();
  }, t = document.createElement("textarea");
  t.classList.add("shake-sdk-chat-message-input-text"), t.placeholder = fA().shake_sdk_chat_screen_input_hint, t.rows = 1, t.addEventListener("input", A), t.autofocus = !0;
  const r = document.createElement("img");
  r.classList.add("shake-sdk-chat-message-input-send-icon"), r.src = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2051'%3e%3cpath%20d='M13,27L41,27M27,41L41,27%2027,13'%20stroke-linecap='round'%20stroke-width='4'%20fill='%2300000000'%20stroke='%23FFF'/%3e%3c/svg%3e";
  const a = document.createElement("button");
  a.classList.add("shake-sdk-chat-message-input-send"), a.onclick = async () => {
    const w = t.value;
    t.value = "", await (async (C, Q) => {
      const y = await hA.shakeService.getUser();
      if (y && y.userId) {
        const x = Q.trim();
        await hA.shakeService.sendChatMessage(y.userId, C, x);
      }
    })(e, w), A();
  }, a.disabled = !t.value.trim(), a.appendChild(r);
  const f = uA();
  f.classList.add("shake-sdk-chat-message-send-container"), f.appendChild(a);
  const B = uA();
  return B.classList.add("shake-sdk-chat-message-input"), B.appendChild(t), B.appendChild(f), B;
}, hf = (e, A, t) => {
  const r = async () => {
    const C = hA.shakeService, Q = await C.getChatMessages(A), y = await (async (x, E) => {
      const _ = [], S = hA.shakeService;
      if (await S.getUser()) {
        const D = await S.getChatParticipants();
        x.forEach((m, q) => {
          const rA = x[q - 1], oA = x[q + 1], d = cn(D, m), o = cn(D, rA), c = cn(D, oA);
          _.push({ id: m.id, message: m.text, timestamp: m.timestamp, roundedCorners: c !== d, showTime: o !== d, showError: m.failed, type: d, onClick: E });
        });
      }
      return _;
    })(Q, (x) => (async (E) => {
      const _ = await hA.shakeService.getUser();
      _ && _.userId && await hA.shakeService.retryChatMessage(_.userId, E);
    })(x.id));
    f.setData(y), f.list.scrollTop = 0, (async (x) => {
      const E = hA.shakeService, _ = await E.getUser();
      _ && _.userId && await E.sendReadReceipt(x, _.userId);
    })(A);
  }, a = Es({ title: e ?? fA().shake_sdk_chat_screen_title, onBackClick: t, onCloseClick: Ge, onlyMobile: !1 }), f = gl(cf, af, Us(fA().shake_sdk_chat_screen_empty_list));
  f.list.classList.add("shake-sdk-chat-screen-message-list");
  const B = lf(A), w = uA();
  return w.classList.add("shake-sdk-chat-screen"), w.appendChild(a.container), w.appendChild(f.container), w.appendChild(B), pi(w, () => {
    ui.addObserver(r), Is(w, () => {
      ui.removeObserver(r);
    });
  }), Bi(w, (C) => {
    a.setBadgeVisible(C);
  }, A), w;
}, uf = (e) => ((A) => {
  const t = KA(A.image);
  t.classList.add("shake-sdk-ticket-item-thumbnail");
  const r = je(A.title);
  r.classList.add("shake-sdk-ticket-item-title");
  const a = Ie(A.subtitle), f = uA();
  f.classList.add("shake-sdk-ticket-item-text-container"), f.appendChild(r), f.appendChild(a);
  const B = Ie(A.time), w = KA(fi), C = uA();
  C.classList.add("shake-sdk-ticket-item-time-container"), C.appendChild(B), A.read || C.appendChild(w);
  const Q = uA();
  return Q.classList.add("shake-sdk-ticket-item"), Q.appendChild(t), Q.appendChild(f), Q.appendChild(C), Q.onclick = A.onPress, Q;
})(e), df = (e, A) => e.id !== A.id || e.read !== A.read || e.title !== A.title || e.time !== A.time, ha = (e) => {
  const A = async () => {
    const w = hA.shakeService, C = ((Q, y) => Q.map((x) => ({ id: x.id, title: x.title, subtitle: x.type, time: x.timeFrame, image: x.screenshot, read: x.read, onPress: () => y(x.id) })))(await w.getTickets(), e);
    f.setData(C);
  }, t = Es({ onCloseClick: () => Ge() }), r = Sr(fA().shake_sdk_home_screen_title);
  r.classList.add("shake-sdk-home-screen-title");
  const a = je(fA().shake_sdk_home_screen_subtitle);
  a.classList.add("shake-sdk-home-screen-subtitle");
  const f = gl(df, uf, Us(fA().shake_sdk_home_screen_empty_list));
  f.container.classList.add("shake-sdk-home-screen-list");
  const B = uA();
  return B.classList.add("shake-sdk-home-screen"), B.appendChild(t.container), B.appendChild(r), B.appendChild(a), B.appendChild(f.container), pi(B, () => {
    Et.addObserver(A), Is(B, () => {
      Et.removeObserver(A);
    });
  }), Bi(B, (w) => {
    t.setBadgeVisible(w);
  }), B;
}, gf = ({ label: e, items: A, onChange: t, value: r }) => {
  var x;
  const a = document.createElement("label");
  a.textContent = e, a.classList.add("shake-sdk-select-dropdown-label");
  const f = uA();
  f.classList.add("shake-sdk-select-dropdown-chosen");
  const B = KA("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='caret-down-icon'%20clip-path='url(%23clip0_15248_22126)'%3e%3cpath%20id='Vector'%20d='M8%2010L12%2014L16%2010'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15248_22126'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  B.classList.add("shake-sdk-dropdown-icon");
  const w = uA();
  w.classList.add("shake-sdk-select-dropdown"), w.appendChild(B), w.appendChild(a), w.append(f);
  const C = document.createElement("ul");
  C.classList.add("shake-sdk-select-options"), A.forEach((E, _) => {
    const S = document.createElement("li");
    S.classList.add("shake-sdk-select-option"), S.dataset.value = E.value, S.textContent = E.label, S.addEventListener("click", function() {
      f.textContent = S.textContent, C.style.display = "none", S.dataset.value && t(_);
    }), C.appendChild(S);
  }), f.textContent = ((x = A[r]) == null ? void 0 : x.value) ?? "";
  const Q = Array.from(C.children).find((E) => {
    var S;
    const _ = (S = A[r]) == null ? void 0 : S.value;
    return E.dataset.value === _;
  });
  Q && (f.textContent = Q.textContent), w.addEventListener("click", function(E) {
    E.stopPropagation(), window.innerWidth > 1024 ? (C.style.display = C.style.display === "block" ? "none" : "block", C.style.display === "block" ? w.classList.add("active") : w.classList.remove("active")) : ci(((_, S, D) => {
      const m = [];
      return S.forEach((q, rA) => {
        m.push({ text: q.label, icon: q.icon ?? "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='27dp'%20height='27dp'%20viewBox='0%200%2054%2054'%3e%3cpath%20fill='%2300000000'%20fill-rule='evenodd'%20d='m7.864,30.296%20l2.689,3.52%200.58,4.38a5.426,5.426%200,0%200,4.662%204.666l4.392,0.588%203.517,2.686a5.425,5.425%200,0%200,6.59%200l3.519,-2.689h-0.005l4.383,-0.58a5.426,5.426%200,0%200,4.667%20-4.662l0.585,-4.392c0,0.002%201.359,-1.778%202.689,-3.517a5.428,5.428%200,0%200,0%20-6.59l-2.684,-3.521%20-0.581,-4.381a5.426,5.426%200,0%200,-4.662%20-4.667l-4.394,-0.585%20-3.517,-2.686a5.425,5.425%200,0%200,-6.59%200l-3.52,2.687h0.005l-4.383,0.582a5.426,5.426%200,0%200,-4.666%204.662l-0.588,4.392c0,-0.002%20-1.358,1.778%20-2.688,3.517a5.431,5.431%200,0%200,0%206.59h0z'%20stroke-width='3.38'%20stroke='%2361F0B6'%20stroke-linejoin='round'%20stroke-linecap='round'/%3e%3cpath%20fill='%2300000000'%20fill-rule='evenodd'%20d='m33.307,23.855%20l-7.878,7.877%20-4.731,-4.727'%20stroke-width='3.38'%20stroke='%2361F0B6'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", onClick: () => {
          D(q, rA);
        } });
      }), rl(_, m);
    })(e, A, (_, S) => {
      f.textContent = _.label, t(S);
    }));
  }), w.addEventListener("focus", function() {
    w.classList.add("active");
  }), w.addEventListener("blur", function() {
    w.classList.remove("active");
  }), document.addEventListener("click", (E) => {
    const _ = E.target;
    w.contains(_) || C.contains(_) || (C.style.display = "none", w.classList.remove("active"));
  });
  const y = uA();
  return y.appendChild(w), y.appendChild(C), y;
}, ln = ({ onChange: e, maxLength: A, rows: t, value: r, label: a, isError: f, onError: B, error: w, required: C }) => {
  const Q = () => {
    w && ((f == null ? void 0 : f(E.value)) ?? !1 ? (E.classList.add("shake-sdk-textarea-error"), _.style.display = "flex") : (E.classList.remove("shake-sdk-textarea-error"), _.style.display = "none"));
  }, y = () => {
    B == null || B((f == null ? void 0 : f(E.value)) ?? !1), e(E.value), E.style.height = "auto", E.style.height = E.scrollHeight + "px";
  }, x = document.createElement("label");
  x.textContent = a, x.classList.add("shake-sdk-textarea-label");
  const E = document.createElement("textarea");
  E.classList.add("shake-sdk-textarea"), E.rows = t ?? 1, E.maxLength = A ?? 1e4, E.textContent = r ?? null, E.addEventListener("input", () => y()), E.addEventListener("blur", () => Q());
  const _ = document.createElement("p");
  _.innerText = w ?? "", _.classList.add("shake-sdk-textarea-error-text");
  const S = KA(fi);
  S.classList.add("shake-sdk-textarea-required-icon");
  const D = document.createElement("div");
  return D.classList.add("shake-sdk-textarea-container"), D.appendChild(x), D.appendChild(E), D.appendChild(_), C && D.appendChild(S), pi(E, () => {
    y(), Q();
  }), D;
}, ff = (e) => {
  const A = uA();
  A.classList.add("shake-sdk-file-thumbnail-small");
  const t = je(e);
  return A.appendChild(t), A;
}, fl = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2040%2040'%20stroke-width='2'%20stroke='currentColor'%20class='size-6'%3e%3cpath%20transform='translate(7,%209)'%20color='%23FFFFFF'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M6%2018%2018%206M6%206l12%2012'%20/%3e%3c/svg%3e", pf = (e) => {
  QA(`Opening image: ${e.name}`), document.body.appendChild(((A) => {
    const t = vr({ image: fl, onClick: () => {
      B.remove();
    } }), r = uA();
    r.classList.add("shake-sdk-image-preview-toolbar-fs"), r.appendChild(t);
    const a = uA();
    a.classList.add("shake-sdk-image-preview-content-fs"), a.appendChild(ul(A));
    const f = uA();
    f.classList.add("shake-sdk-image-preview-root-fs"), f.appendChild(r), f.append(a);
    const B = document.createElement("div"), w = B.attachShadow({ mode: "open" });
    return Ve(w), w.appendChild(f), B;
  })(e));
}, Bf = (e) => {
  QA("Opening video: " + e.name), document.body.appendChild(((A) => {
    const t = vr({ image: fl, onClick: () => {
      w.remove();
    } }), r = uA();
    r.classList.add("shake-sdk-video-preview-toolbar-fs"), r.appendChild(t);
    const a = URL.createObjectURL(A), f = Rr({ src: a, controls: !0, autoplay: !0 });
    f.classList.add("shake-sdk-video-preview-fs");
    const B = uA();
    B.classList.add("shake-sdk-video-preview-root-fs"), B.appendChild(r), B.appendChild(f);
    const w = document.createElement("div"), C = w.attachShadow({ mode: "open" });
    return Ve(C), C.appendChild(B), w;
  })(e.data));
}, mf = () => {
  const e = hA.attachmentsManager, A = /* @__PURE__ */ new Map(), t = async () => {
    await Fs() ? ci(nl()) : ci((() => {
      const w = [];
      return w.push({ text: fA().shake_sdk_dialog_add_attachment_grab_screenshot, icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20fill='%2300000000'%20d='M13.5,6.75h-2.25c-2.485,0%20-4.5,2.015%20-4.5,4.5v2.25M40.5,47.25h2.25c2.485,0%204.5,-2.015%204.5,-4.5V40.5M6.75,40.5v2.25c0,2.485%202.015,4.5%204.5,4.5h2.25M47.25,13.5v-2.25c0,-2.485%20-2.015,-4.5%20-4.5,-4.5H40.5'%20stroke-width='3.38'%20stroke='%234CD266'/%3e%3c/svg%3e", onClick: ks }), It() || w.push({ text: fA().shake_sdk_dialog_add_attachment_record_screen, icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20fill='%2300000000'%20d='M37.487,32.702L32.57,29.67v-5.342l4.918,-3.03c0.382,-0.236%200.861,-0.247%201.253,-0.028%200.392,0.218%200.635,0.632%200.635,1.08v9.297c0,0.45%20-0.243,0.863%20-0.635,1.081%20-0.392,0.219%20-0.871,0.208%20-1.253,-0.027z'%20stroke-width='3.375'%20stroke='%23FF9C0A'/%3e%3cpath%20fill='%2300000000'%20d='M16.275,18.956L30.919,18.956A1.65,1.65%200,0%201,32.569%2020.606L32.569,33.393A1.65,1.65%200,0%201,30.919%2035.043L16.275,35.043A1.65,1.65%200,0%201,14.625%2033.393L14.625,20.606A1.65,1.65%200,0%201,16.275%2018.956z'%20stroke-width='3.375'%20stroke='%23FF9C0A'/%3e%3cpath%20fill='%2300000000'%20d='M11.75,6.75L42.25,6.75A5,5%200,0%201,47.25%2011.75L47.25,42.25A5,5%200,0%201,42.25%2047.25L11.75,47.25A5,5%200,0%201,6.75%2042.25L6.75,11.75A5,5%200,0%201,11.75%206.75z'%20stroke-width='3.375'%20stroke='%23FF9C0A'/%3e%3c/svg%3e", onClick: xs }), w.push({ text: fA().shake_sdk_dialog_add_attachment_browse_locations, icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20fill='%2300000000'%20d='M27,47.25c-11.184,0%20-20.25,-9.066%20-20.25,-20.25S15.816,6.75%2027,6.75%2047.25,15.816%2047.25,27%2038.184,47.25%2027,47.25l-0,0z'%20stroke-width='3.38'%20stroke='%2364B1FD'/%3e%3cpath%20fill='%2300000000'%20d='M26.998,26.156c-0.466,0.003%20-0.841,0.382%20-0.84,0.847%200.002,0.465%200.38,0.842%200.846,0.84%200.465,0%200.842,-0.378%200.842,-0.843%20-0.002,-0.467%20-0.382,-0.844%20-0.848,-0.844M35.998,26.156c-0.466,0.003%20-0.841,0.382%20-0.84,0.847%200.002,0.465%200.38,0.842%200.846,0.84%200.465,0%200.842,-0.378%200.842,-0.843%20-0.002,-0.467%20-0.382,-0.844%20-0.848,-0.844M17.998,26.156c-0.466,0.003%20-0.841,0.382%20-0.84,0.847%200.002,0.465%200.38,0.842%200.846,0.84%200.465,0%200.842,-0.378%200.842,-0.843%20-0.002,-0.467%20-0.382,-0.844%20-0.848,-0.844'%20stroke-width='3.38'%20stroke='%2364B1FD'/%3e%3c/svg%3e", onClick: ds }), rl(fA().shake_sdk_dialog_add_attachment, w);
    })());
  }, r = async (w) => {
    const C = await Va(w.name);
    w.type == EA.IMAGE ? pf(C) : w.type == EA.VIDEO && Bf(C);
  }, a = (w) => {
    e.removeAttachment(w);
  }, f = (w) => {
    const C = B.lastChild;
    C && B.removeChild(C);
    const Q = ((y, x, E) => {
      const _ = hi(al);
      let S;
      _.classList.add("shake-sdk-attachment-item-remove-small"), _.onclick = (q) => {
        q.stopPropagation(), E(y);
      };
      const D = URL.createObjectURL(y.drawingData ?? y.data);
      S = y.type == EA.IMAGE ? KA(D) : y.type == EA.VIDEO ? Rr({ src: D + "#t=0.1", autoplay: !0 }) : ff(y.name), S.classList.add("shake-sdk-attachment-item-thumbnail-small"), S.onclick = () => x(y);
      const m = uA();
      return m.classList.add("shake-sdk-attachment-item-small"), m.appendChild(S), m.appendChild(_), m;
    })(w, r, a);
    A.set(w.name, Q), B.appendChild(Q), B.appendChild(((y) => {
      const x = hi(ol);
      x.classList.add("shake-sdk-attachment-add-button-small"), x.onclick = y;
      const E = uA();
      return E.classList.add("shake-sdk-attachments-add-item-small"), E.appendChild(x), E;
    })(t));
  };
  e.removeObservers.push((w) => {
    const C = A.get(w.name);
    C && (C.remove(), A.delete(w.name));
  }), e.updateObservers.push((w) => {
    const C = A.get(w.name);
    C && ((Q, y) => {
      const x = URL.createObjectURL(y.drawingData ?? y.data), E = Q.getElementsByClassName("shake-sdk-attachment-item-thumbnail-small");
      y.type == EA.IMAGE && (E[0].src = x), y.type == EA.VIDEO && (E[0].src = x);
    })(C, w);
  }), e.addObservers.push((w) => {
    f(w);
  });
  const B = uA();
  return B.classList.add("shake-sdk-attachments-items-small"), (async () => (await _t()).forEach((w) => f(w)))(), B;
};
function hn() {
  return new Promise((e, A) => {
    const t = indexedDB.open(kA, 4);
    t.onsuccess = function(r) {
      const a = r.target.result.transaction([et], "readonly").objectStore(et).get(0);
      a.onsuccess = function(f) {
        const B = f.target.result;
        e(B);
      }, a.onerror = function() {
        A("Error retrieving user from IndexedDB");
      };
    }, t.onerror = IA(A), t.onupgradeneeded = xA;
  });
}
const Ut = (e) => new Promise((A, t) => {
  const r = indexedDB.open(kA, 4);
  r.onsuccess = function(a) {
    const f = a.target.result.transaction([et], "readwrite").objectStore(et).put(e);
    f.onsuccess = function() {
      A("User written successfully to IndexedDB");
    }, f.onerror = function() {
      t("Error writing user to IndexedDB");
    };
  }, r.onerror = IA(t), r.onupgradeneeded = xA;
}), pl = async () => {
  const e = await hA.shakeService.getUser();
  e && hA.chatWebSocket.connect(e.userId);
}, Kr = async () => {
  try {
    const e = await hA.shakeService.getUser();
    if (!e)
      return void QA("User not existing. Skip sync.");
    if (e.isSynced)
      QA("User already synced.");
    else {
      const A = hA.shakeService;
      e.userId ? (await A.updateUser(), QA("User updated.")) : (await A.registerUser(), QA("User registered."), await st(), await pl());
    }
  } catch (e) {
    QA("Failed to sync user. " + (e == null ? void 0 : e.message));
  }
};
function ua() {
  return new Promise((e, A) => {
    const t = [], r = indexedDB.open(kA, 4);
    r.onsuccess = function(a) {
      const f = a.target.result.transaction([tt], "readonly").objectStore(tt).openCursor();
      f.onsuccess = function(B) {
        const w = B.target.result;
        w ? (t.push({ id: w.value.id, name: w.value.name, role: w.value.role }), w.continue()) : e(t);
      }, f.onerror = function() {
        A("Error retrieving chat participants from IndexedDB");
      };
    }, r.onerror = IA(A), r.onupgradeneeded = xA;
  });
}
const Bl = async () => {
  try {
    await hA.shakeService.getUser() ? (await new Promise((e, A) => {
      const t = indexedDB.open(kA, 4);
      t.onsuccess = function(r) {
        const a = r.target.result.transaction([et], "readwrite").objectStore(et).clear();
        a.onsuccess = function() {
          e("All users deleted successfully from IndexedDB");
        }, a.onerror = function() {
          A("Error deleting users from IndexedDB");
        };
      }, t.onerror = IA(A), t.onupgradeneeded = xA;
    }), await new Promise((e, A) => {
      const t = indexedDB.open(kA, 4);
      t.onsuccess = function(r) {
        const a = r.target.result.transaction([_e], "readwrite").objectStore(_e).clear();
        a.onsuccess = function() {
          Et.notifyChange(), e("All tickets deleted successfully from IndexedDB");
        }, a.onerror = function() {
          A("Error deleting tickets from IndexedDB");
        };
      }, t.onerror = IA(A), t.onupgradeneeded = xA;
    }), await new Promise((e, A) => {
      const t = indexedDB.open(kA, 4);
      t.onsuccess = function(r) {
        const a = r.target.result.transaction([tt], "readwrite").objectStore(tt).clear();
        a.onsuccess = function() {
          e("All chat participants deleted successfully from IndexedDB");
        }, a.onerror = function() {
          A("Error deleting chat participants from IndexedDB");
        };
      }, t.onerror = IA(A), t.onupgradeneeded = xA;
    }), await new Promise((e, A) => {
      const t = indexedDB.open(kA, 4);
      t.onsuccess = function(r) {
        const a = r.target.result.transaction([de], "readwrite").objectStore(de).clear();
        a.onsuccess = function() {
          ui.notifyChange(), e("All chat messages deleted successfully from IndexedDB");
        }, a.onerror = function() {
          A("Error deleting chat messages from IndexedDB");
        };
      }, t.onerror = IA(A), t.onupgradeneeded = xA;
    }), await (async () => {
      await hA.shakeService.getUser() && hA.chatWebSocket.disconnect();
    })(), WA.localStorage.setFetchTicketsTime(null), QA("User unregistered.")) : zA("User not registered.");
  } catch (e) {
    QA("Failed to unregister user. " + (e == null ? void 0 : e.message));
  }
}, ml = 256, wf = async (e) => {
  try {
    if (!e)
      return void zA("Cannot register user. Id not provided.");
    if (e.length > ml)
      return void zA("Cannot register user. Max id length is 256");
    const A = await hA.shakeService.getUser();
    if (A) {
      if (A.endUserId === e)
        return void QA("User already registered.");
      zA("Switching registered user."), await Bl();
    }
    await Cf(e), await Kr();
  } catch (A) {
    QA("Failed to register user. " + (A == null ? void 0 : A.message));
  }
}, Cf = async (e) => {
  await Ut({ id: 0, endUserId: e, isSynced: !1 });
}, wl = (e) => {
  hA.userRequestsQueue.add(() => vf(e));
}, vf = async (e) => {
  try {
    if (!e)
      return void zA("Cannot update user. Metadata not provided.");
    if (JSON.stringify(e).length > 51200)
      return void zA("Cannot update user. Max metadata size is 51200");
    const A = await hA.shakeService.getUser();
    A ? (await yf(A, e), await Kr()) : zA("Cannot update user. User not registerd.");
  } catch (A) {
    QA("Failed to update user. " + (A == null ? void 0 : A.message));
  }
}, yf = async (e, A) => {
  const t = { ...e, id: 0, metadata: A, isSynced: !1 };
  await Ut(t);
}, yr = (e = !0) => {
  if (e)
    if (window.innerWidth < 1024) {
      const A = Cr(fA().shake_sdk_dialog_ticket_sent_title, fA().shake_sdk_dialog_ticket_sent_message);
      document.body.append(A), setTimeout(() => A.remove(), 3e3);
    } else
      new li(fA().shake_sdk_dialog_ticket_sent_title, fA().shake_sdk_dialog_ticket_sent_message);
  else if (window.innerWidth < 1024) {
    const A = Cr("Ooops", fA().shake_sdk_error_message);
    document.body.append(A), setTimeout(() => A.remove(), 3e3);
  } else
    new li(fA().shake_sdk_error_title, fA().shake_sdk_error_message);
}, bf = async (e) => {
  const A = hA.shakeService, t = await A.getUser(), r = e.find((a) => a.label == ue.email);
  return r && r.value && t && !t.metadata[es] && (wl({ [es]: r.value }), e = e.filter((a) => a.label !== ue.email)), e;
}, Qf = (e) => {
  const A = [];
  return e.items.forEach((t) => {
    if (t instanceof Fr && A.push({ type: Qt.TITLE, value: t.value ?? "", label: t.key }), t instanceof ja && A.push({ type: Qt.TEXT_INPUT, value: t.value ?? "", label: t.key }), t instanceof as && A.push({ type: Qt.EMAIL, value: t.value ?? "", label: t.key }), t instanceof Ur) {
      const r = t.items[t.value ?? 0];
      A.push({ type: Qt.PICKER, value: r.key, label: t.key });
    }
  }), A;
}, kf = (e) => {
  const A = [];
  return e.items.forEach((t) => {
    if (t instanceof Ur) {
      const r = t.items[t.value ?? 0];
      r && r.tag && A.push(r.tag);
    }
  }), A;
}, xf = (e, A) => {
  let t = !1;
  const r = () => {
    w.disabled = y() || t, B.textContent = t ? fA().shake_sdk_new_ticket_submit_button_loading : fA().shake_sdk_new_ticket_submit_button_text;
  }, a = Es({ onCloseClick: Ge, onBackClick: e }), f = Sr(fA().shake_sdk_new_ticket_title);
  f.classList.add("shake-sdk-new-ticket-title");
  const B = cc(fA().shake_sdk_new_ticket_submit_button_text), w = rt();
  w.disabled = !0, w.onclick = async () => {
    t = !0, r(), await (async (E) => {
      try {
        const _ = await il();
        if (_) {
          const S = hA.shakeService;
          let D = Qf(E);
          const m = kf(E);
          D = await bf(D), _.tags.push(...m), _.custom_fields = D;
          const q = await _t();
          await S.sendUserFeedback(_, q), st(), yr(!0), Ge(), QA("Ticket sent successfully.");
        }
      } catch (_) {
        yr(!1), QA("Error sending user feedback: " + (_ == null ? void 0 : _.message));
      }
    })(Q), t = !1, r();
  }, w.appendChild(B);
  const { formElement: C, shakeForm: Q, hasFormError: y } = Ff(A, r), x = uA();
  return x.classList.add("shake-sdk-new-ticket"), x.appendChild(a.container), x.appendChild(f), x.appendChild(C), x.appendChild(w), r(), Bi(x, (E) => {
    a.setBadgeVisible(E);
  }), pi(C, () => {
    var _;
    (_ = C.getElementsByTagName("textarea")[0]) == null || _.focus();
  }), x;
}, Ff = (e, A) => {
  var w;
  const t = WA.localStorage.getShakeState(), r = bA.config.shakeForm.clone();
  e || (r.items = r.items.filter((C) => C.key != ue.email));
  const a = {}, f = (C, Q) => {
    a[C] = Q;
  }, B = uA();
  return B.classList.add("shake-sdk-new-ticket-form"), (w = r == null ? void 0 : r.items) == null || w.forEach((C) => {
    if (C instanceof Fr) {
      C.value = t.formValues[C.key] ?? C.value;
      const Q = ln({ onChange: (y) => {
        C.value = y, t.setFormValue(C.key, y), A();
      }, onError: (y) => f(C.key, y), maxLength: 1e4, rows: C.lines, value: C.value, label: C.label, required: C.required, isError: (y) => !!C.required && !y.trim(), error: "" });
      B.appendChild(Q);
    }
    if (C instanceof ja) {
      C.value = t.formValues[C.key] ?? C.value;
      const Q = ln({ onChange: (y) => {
        C.value = y, t.setFormValue(C.key, y), A();
      }, onError: (y) => f(C.key, y), maxLength: 1e4, rows: C.lines, value: C.value, label: C.label, required: C.required, isError: (y) => !!C.required && !y.trim(), error: "" });
      B.appendChild(Q);
    }
    if (C instanceof as) {
      C.value = t.formValues[C.key] ?? C.value;
      const Q = ln({ onChange: (y) => {
        C.value = y, t.setFormValue(C.key, y), A();
      }, onError: (y) => f(C.key, y), maxLength: 100, rows: 1, value: C.value, label: C.label, required: C.required, isError: (y) => C.required ? !Ms(y.trim()) : !!(!Ms(y.trim()) && y.trim()), error: fA().shake_sdk_new_ticket_email_error });
      B.appendChild(Q);
    }
    if (C instanceof Ur) {
      C.value = t.formValues[C.key] ? Number(t.formValues[C.key]) : C.value;
      const Q = gf({ onChange: (y) => {
        C.value = y, t.setFormValue(C.key, y), f(C.key, !1), A();
      }, label: C.label, items: Uf(C.items), value: C.value ?? 0 });
      B.appendChild(Q);
    }
    if (C instanceof cs) {
      const Q = mf();
      B.appendChild(Q);
    }
  }), { formElement: B, shakeForm: r, hasFormError: () => Object.values(a).includes(!0) };
}, Uf = (e) => e.map((A) => ({ label: A.label, value: A.label, icon: A.icon })), Ef = (e, A) => {
  let t, r, a;
  const f = () => {
    r || (r = ha(w), y.appendChild(r)), r && (r.style.display = "flex"), a && (a.style.display = "none"), t && (t.style.display = "none"), x.setVisible(!0), (() => {
      var D;
      const _ = (D = document.getElementById(di)) == null ? void 0 : D.shadowRoot, S = _ == null ? void 0 : _.querySelector(`#${As}`);
      S != null && S.classList.contains("shake-sdk-attachments-card-hidden") || (S == null || S.classList.remove("shake-sdk-attachments-card-visible"), S == null || S.classList.add("shake-sdk-attachments-card-hidden"));
    })();
  }, B = async () => {
    var _;
    if (!t) {
      const S = await hA.shakeService.getUser(), D = !S || S && !((_ = S.metadata) != null && _[es]);
      t = xf(f, D), y.appendChild(t);
    }
    r && (r.style.display = "none"), a && (a.style.display = "none"), t && (t.style.display = "flex"), x.setVisible(!0), (() => {
      var m;
      const S = (m = document.getElementById(di)) == null ? void 0 : m.shadowRoot, D = S == null ? void 0 : S.querySelector(`#${As}`);
      D != null && D.classList.contains("shake-sdk-attachments-card-visible") || (D == null || D.classList.remove("shake-sdk-attachments-card-hidden"), D == null || D.classList.add("shake-sdk-attachments-card-visible"));
    })();
  }, w = async (_) => {
    if (!a) {
      const S = await hA.shakeService.getTicket(_);
      a = hf(S == null ? void 0 : S.title, _, () => {
        C(), a == null || a.remove(), a = null;
      }), y.appendChild(a);
    }
    r && (r.style.display = "none"), a && (a.style.display = "flex"), t && (t.style.display = "none"), x.setVisible(!1);
  }, C = () => {
    r || (r = ha(w), y.appendChild(r)), r && (r.style.display = "flex"), a && (a.style.display = "none"), t && (t.style.display = "none"), x.setVisible(!0);
  }, Q = hi(dl);
  Q.classList.add("shake-sdk-close-button"), Q.onclick = () => Ge(!0);
  const y = uA();
  y.classList.add("shake-sdk-main-card-content");
  const x = ((_, S) => {
    let D = -1;
    const m = document.createElement("div");
    m.classList.add("shake-sdk-bottom-navigation");
    const q = _.map((rA) => sf(rA));
    return q.forEach((rA, oA) => {
      m.appendChild(rA.button), rA.button.onclick = () => {
        D !== oA && (D = oA, q.forEach((d) => d.button.classList.remove("selected")), rA.button.classList.add("selected"), S(oA));
      };
    }), { setBadgeVisibility: (rA, oA) => {
      q[rA].setBadgeVisible(oA);
    }, setVisible: (rA) => {
      const oA = "shake-sdk-bottom-navigation-hidden";
      rA ? m.classList.remove(oA) : m.classList.add(oA);
    }, setSelectedIndex: (rA) => {
      var oA, d;
      (d = (oA = q[rA]) == null ? void 0 : oA.button) == null || d.click();
    }, container: m };
  })(Sf, async (_) => {
    _ === Ji && f(), _ === un && B();
  }), E = us();
  return E.classList.add("shake-sdk-main-card"), E.appendChild(Q), E.appendChild(y), E.appendChild(x.container), Bi(E, (_) => {
    x.setBadgeVisibility(0, _);
  }), A ? (x.setSelectedIndex(Ji), w(A)) : e === bt.HOME_SCREEN ? x.setSelectedIndex(Ji) : e === bt.NEW_TICKET ? x.setSelectedIndex(un) : bA.config.defaultScreen === bt.HOME_SCREEN ? x.setSelectedIndex(Ji) : bA.config.defaultScreen === bt.NEW_TICKET && x.setSelectedIndex(un), E;
}, Ji = 0, un = 1, Sf = [{ icon: "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_16237_35431)'%3e%3cpath%20d='M26.456%2011.0654L18.456%204.84276C17.012%203.71876%2014.9893%203.71876%2013.544%204.84276L5.544%2011.0654C4.56933%2011.8228%204%2012.9881%204%2014.2228V24.0001C4%2026.2094%205.79067%2028.0001%208%2028.0001H24C26.2093%2028.0001%2028%2026.2094%2028%2024.0001V14.2228C28%2012.9881%2027.4307%2011.8228%2026.456%2011.0654Z'%20stroke='%238E8E93'%20stroke-width='2'/%3e%3cpath%20d='M21.3327%2018.9841C18.386%2021.9308%2013.61%2021.9308%2010.666%2018.9841'%20stroke='%238E8E93'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_16237_35431'%3e%3crect%20width='32'%20height='32'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", text: "Home" }, { icon: "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_16237_35451)'%3e%3cpath%20d='M12.4863%2019.2321C16.6517%2023.3974%2022.353%2024.4534%2025.213%2021.5894C27.6237%2019.1787%2027.249%2014.7627%2024.589%2010.9414'%20stroke='%238E8E93'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M21.1202%207.34946C16.1109%203.49613%209.84688%203.0148%206.35755%206.50413C2.45221%2010.4095%203.50821%2017.7961%208.71488%2023.0028C10.9947%2025.3201%2013.8127%2027.037%2016.9175%2028.0001'%20stroke='%238E8E93'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.558%2016.5334L19.0473%2016.0347C19.4073%2015.9639%2019.7384%2015.7886%2019.9993%2015.5307L27.2687%208.2667C28.2432%207.29155%2028.2432%205.71118%2027.2687%204.73603C26.2935%203.76149%2024.7131%203.76149%2023.738%204.73603L16.4687%2012C16.2088%2012.2603%2016.0316%2012.5915%2015.9593%2012.952L15.466%2015.4414C15.3692%2015.9477%2015.7012%2016.4366%2016.2075%2016.5334C16.3233%2016.5555%2016.4422%2016.5555%2016.558%2016.5334Z'%20stroke='%238E8E93'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_16237_35451'%3e%3crect%20width='32'%20height='32'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", text: "New ticket" }], di = "shake-sdk-root", Cl = (e, A, t) => {
  const r = bA.config.shakeForm, a = !!(r != null && r.items.find((_) => _.key === ue.attachments)), f = nf(e), B = uA();
  B.classList.add("shake-sdk-content-left"), a && B.appendChild(f);
  const w = Ef(A, t), C = uA();
  C.classList.add("shake-sdk-content-right"), C.appendChild(w), uA().classList.add("shake-sdk-content-wrap");
  const Q = uA();
  Q.classList.add("shake-sdk-content"), Q.appendChild(B), Q.appendChild(C);
  const y = document.createElement("input");
  y.type = "file", y.id = "fileInput", y.style.content = "display: none", y.addEventListener("change", async (_) => {
    var m;
    const S = _.target, D = (m = S == null ? void 0 : S.files) == null ? void 0 : m[0];
    D && await sl(D), y.value = "";
  });
  const x = document.createElement("div");
  x.appendChild(y), x.id = di;
  const E = x.attachShadow({ mode: "open" });
  return E.appendChild(Q), Ve(E), x;
}, Is = (e, A) => {
  const t = vl((r, a, f) => {
    let B = e.parentNode;
    for (; B; ) {
      if (B.nodeType === r)
        return;
      B = B.parentNode;
    }
    A(), t.forEach((w) => w.disconnect());
  });
}, pi = (e, A) => {
  const t = vl((r, a, f) => {
    e.parentNode !== null && (A(), t.forEach((B) => B.disconnect()));
  });
}, vl = (e) => {
  var f;
  const A = (f = document.getElementById(di)) == null ? void 0 : f.shadowRoot, t = new MutationObserver((B, w) => {
    e(Node.DOCUMENT_FRAGMENT_NODE, B, w);
  }), r = new MutationObserver((B, w) => {
    e(Node.DOCUMENT_NODE, B, w);
  }), a = [t, r];
  return document && r.observe(document, { childList: !0, subtree: !0 }), A && t.observe(A, { childList: !0, subtree: !0 }), a;
}, Bi = async (e, A, t) => {
  const r = async () => {
    const a = hA.shakeService, f = (await a.getTickets()).filter((B) => B.id !== t).filter((B) => !B.read).length > 0;
    A(f);
  };
  pi(e, () => {
    Et.addObserver(r), Is(e, () => {
      Et.removeObserver(r);
    });
  });
}, yl = "shake-sdk-main-button-root";
let Ae;
const If = () => {
  const e = KA("data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14931_603)'%3e%3cpath%20d='M8.19434%2012.6212C10.9278%2015.3547%2014.6693%2016.0477%2016.5462%2014.1682C18.1282%2012.5862%2017.8823%209.68817%2016.1367%207.18042'%20stroke='%23B77DFF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.8599%204.82319C10.5725%202.29444%206.46177%201.97857%204.1719%204.26844C1.60902%206.83132%202.30202%2011.6788%205.7189%2015.0957C7.21501%2016.6164%209.06436%2017.7431%2011.1019%2018.3752'%20stroke='%23B77DFF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.8666%2010.8501L12.5002%2010.5228C12.7364%2010.4764%2012.9537%2010.3613%2013.1249%2010.1921L17.8954%205.42507C18.535%204.78514%2018.535%203.74801%2017.8954%203.10807C17.2555%202.46853%2016.2184%202.46853%2015.5784%203.10807L10.8079%207.87507C10.6374%208.04585%2010.5211%208.2632%2010.4737%208.49982L10.1499%2010.1334C10.0864%2010.4657%2010.3043%2010.7865%2010.6365%2010.8501C10.7125%2010.8646%2010.7906%2010.8646%2010.8666%2010.8501Z'%20stroke='%23880FFF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14931_603'%3e%3crect%20width='21'%20height='21'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  e.alt = "Send feedback icon", e.classList.add("shake-sdk-main-button-icon");
  const A = cc(fA().shake_sdk_main_button_title);
  A.classList.add("shake-sdk-main-button-text");
  const t = KA(fi);
  t.classList.add("shake-sdk-main-button-notification"), Ae = rt(), Ae.classList.add("shake-sdk-main-button"), Ae.appendChild(e), Ae.appendChild(A), Ae.appendChild(t), Ae.addEventListener("mousedown", (f) => {
    f.stopPropagation(), f.preventDefault(), br();
  });
  const r = document.createElement("div");
  r.id = yl;
  const a = r.attachShadow({ mode: "open" });
  return Ve(a), a.appendChild(Ae), Bi(r, (f) => {
    t.style.visibility = f ? "visible" : "hidden";
  }), r;
}, Tf = () => {
  Ae && (Ae.style.transition = "transform 0.3s ease", Ae.style.transform = "translateX(0) rotate(-90deg)");
};
class nt {
  constructor() {
    V(this, "_language", ar.EN);
    V(this, "_defaultScreen", bt.NEW_TICKET);
    V(this, "_floatingButtonEnabled", !0);
    V(this, "_shakeForm", Vl());
    V(this, "_networkRequestsFilter", null);
    V(this, "_sensitiveDataRedaction", !0);
  }
  get language() {
    return this._language;
  }
  set language(A) {
    this._language = A;
  }
  get defaultScreen() {
    return this._defaultScreen;
  }
  set defaultScreen(A) {
    this._defaultScreen = A;
  }
  get floatingButtonEnabled() {
    return this._floatingButtonEnabled;
  }
  set floatingButtonEnabled(A) {
    this._floatingButtonEnabled = A, bl();
  }
  get shakeForm() {
    return this._shakeForm;
  }
  set shakeForm(A) {
    A = _f(A), this._shakeForm = A;
  }
  get networkRequestsFilter() {
    return this._networkRequestsFilter;
  }
  set networkRequestsFilter(A) {
    this._networkRequestsFilter = A;
  }
  get sensitiveDataRedaction() {
    return this._sensitiveDataRedaction;
  }
  set sensitiveDataRedaction(A) {
    this._sensitiveDataRedaction = A;
  }
}
V(nt, "isShakeOpened", !1);
const bl = () => {
  if (WA.localStorage.isSDKEnabled())
    if (bA.config.floatingButtonEnabled) {
      const e = If();
      document.body.appendChild(e);
    } else {
      const e = document.getElementById(yl);
      e == null || e.remove();
    }
}, _f = (e) => {
  let A = !1, t = !1;
  return e.items = e.items.filter((r) => r instanceof Fr ? !A && (A = !0) : !(r instanceof cs) || !t && (t = !0)), e;
};
var dn, gn, ts = { exports: {} };
dn = ts, gn = ts.exports, function(e, A) {
  var t = "function", r = "undefined", a = "object", f = "string", B = "major", w = "model", C = "name", Q = "type", y = "vendor", x = "version", E = "architecture", _ = "console", S = "mobile", D = "tablet", m = "smarttv", q = "wearable", rA = "embedded", oA = "Amazon", d = "Apple", o = "ASUS", c = "BlackBerry", g = "Browser", i = "Chrome", n = "Firefox", s = "Google", u = "Huawei", l = "LG", h = "Microsoft", p = "Motorola", v = "Opera", b = "Samsung", F = "Sharp", U = "Sony", k = "Xiaomi", T = "Zebra", H = "Facebook", K = "Chromium OS", P = "Mac OS", X = function(N) {
    for (var z = {}, AA = 0; AA < N.length; AA++)
      z[N[AA].toUpperCase()] = N[AA];
    return z;
  }, W = function(N, z) {
    return typeof N === f && I(z).indexOf(I(N)) !== -1;
  }, I = function(N) {
    return N.toLowerCase();
  }, L = function(N, z) {
    if (typeof N === f)
      return N = N.replace(/^\s\s*/, ""), typeof z === r ? N : N.substring(0, 500);
  }, R = function(N, z) {
    for (var AA, tA, iA, $, nA, Z, lA = 0; lA < z.length && !nA; ) {
      var sA = z[lA], dA = z[lA + 1];
      for (AA = tA = 0; AA < sA.length && !nA && sA[AA]; )
        if (nA = sA[AA++].exec(N))
          for (iA = 0; iA < dA.length; iA++)
            Z = nA[++tA], typeof ($ = dA[iA]) === a && $.length > 0 ? $.length === 2 ? typeof $[1] == t ? this[$[0]] = $[1].call(this, Z) : this[$[0]] = $[1] : $.length === 3 ? typeof $[1] !== t || $[1].exec && $[1].test ? this[$[0]] = Z ? Z.replace($[1], $[2]) : A : this[$[0]] = Z ? $[1].call(this, Z, $[2]) : A : $.length === 4 && (this[$[0]] = Z ? $[3].call(this, Z.replace($[1], $[2])) : A) : this[$] = Z || A;
      lA += 2;
    }
  }, G = function(N, z) {
    for (var AA in z)
      if (typeof z[AA] === a && z[AA].length > 0) {
        for (var tA = 0; tA < z[AA].length; tA++)
          if (W(z[AA][tA], N))
            return AA === "?" ? A : AA;
      } else if (W(z[AA], N))
        return AA === "?" ? A : AA;
    return N;
  }, Y = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" }, M = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [x, [C, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [x, [C, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [C, x], [/opios[\/ ]+([\w\.]+)/i], [x, [C, v + " Mini"]], [/\bopr\/([\w\.]+)/i], [x, [C, v]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [x, [C, "Baidu"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [C, x], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [x, [C, "UC" + g]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [x, [C, "WeChat"]], [/konqueror\/([\w\.]+)/i], [x, [C, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [x, [C, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [x, [C, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [x, [C, "Smart Lenovo " + g]], [/(avast|avg)\/([\w\.]+)/i], [[C, /(.+)/, "$1 Secure " + g], x], [/\bfocus\/([\w\.]+)/i], [x, [C, n + " Focus"]], [/\bopt\/([\w\.]+)/i], [x, [C, v + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [x, [C, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [x, [C, "Dolphin"]], [/coast\/([\w\.]+)/i], [x, [C, v + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [x, [C, "MIUI " + g]], [/fxios\/([-\w\.]+)/i], [x, [C, n]], [/\bqihu|(qi?ho?o?|360)browser/i], [[C, "360 " + g]], [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i], [[C, /(.+)/, "$1 " + g], x], [/samsungbrowser\/([\w\.]+)/i], [x, [C, b + " Internet"]], [/(comodo_dragon)\/([\w\.]+)/i], [[C, /_/g, " "], x], [/metasr[\/ ]?([\d\.]+)/i], [x, [C, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[C, "Sogou Mobile"], x], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i], [C, x], [/(lbbrowser)/i, /\[(linkedin)app\]/i], [C], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[C, H], x], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [C, x], [/\bgsa\/([\w\.]+) .*safari\//i], [x, [C, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [x, [C, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [x, [C, i + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[C, i + " WebView"], x], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [x, [C, "Android " + g]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [C, x], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [x, [C, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [x, C], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [C, [x, G, { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }]], [/(webkit|khtml)\/([\w\.]+)/i], [C, x], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[C, "Netscape"], x], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [x, [C, n + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [C, x], [/(cobalt)\/([\w\.]+)/i], [C, [x, /master.|lts./, ""]]], cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[E, "amd64"]], [/(ia32(?=;))/i], [[E, I]], [/((?:i[346]|x)86)[;\)]/i], [[E, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[E, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[E, "armhf"]], [/windows (ce|mobile); ppc;/i], [[E, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[E, /ower/, "", I]], [/(sun4\w)[;\)]/i], [[E, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[E, I]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [w, [y, b], [Q, D]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [w, [y, b], [Q, S]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [w, [y, d], [Q, S]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [w, [y, d], [Q, D]], [/(macintosh);/i], [w, [y, d]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [w, [y, F], [Q, S]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [w, [y, u], [Q, D]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [w, [y, u], [Q, S]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[w, /_/g, " "], [y, k], [Q, S]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[w, /_/g, " "], [y, k], [Q, D]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [w, [y, "OPPO"], [Q, S]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [w, [y, "Vivo"], [Q, S]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [w, [y, "Realme"], [Q, S]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [w, [y, p], [Q, S]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [w, [y, p], [Q, D]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [w, [y, l], [Q, D]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [w, [y, l], [Q, S]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [w, [y, "Lenovo"], [Q, D]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[w, /_/g, " "], [y, "Nokia"], [Q, S]], [/(pixel c)\b/i], [w, [y, s], [Q, D]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [w, [y, s], [Q, S]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [w, [y, U], [Q, S]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[w, "Xperia Tablet"], [y, U], [Q, D]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [w, [y, "OnePlus"], [Q, S]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [w, [y, oA], [Q, D]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[w, /(.+)/g, "Fire Phone $1"], [y, oA], [Q, S]], [/(playbook);[-\w\),; ]+(rim)/i], [w, y, [Q, D]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [w, [y, c], [Q, S]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [w, [y, o], [Q, D]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [w, [y, o], [Q, S]], [/(nexus 9)/i], [w, [y, "HTC"], [Q, D]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [y, [w, /_/g, " "], [Q, S]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [w, [y, "Acer"], [Q, D]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [w, [y, "Meizu"], [Q, S]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [w, [y, "Ulefone"], [Q, S]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [y, w, [Q, S]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [y, w, [Q, D]], [/(surface duo)/i], [w, [y, h], [Q, D]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [w, [y, "Fairphone"], [Q, S]], [/(u304aa)/i], [w, [y, "AT&T"], [Q, S]], [/\bsie-(\w*)/i], [w, [y, "Siemens"], [Q, S]], [/\b(rct\w+) b/i], [w, [y, "RCA"], [Q, D]], [/\b(venue[\d ]{2,7}) b/i], [w, [y, "Dell"], [Q, D]], [/\b(q(?:mv|ta)\w+) b/i], [w, [y, "Verizon"], [Q, D]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [w, [y, "Barnes & Noble"], [Q, D]], [/\b(tm\d{3}\w+) b/i], [w, [y, "NuVision"], [Q, D]], [/\b(k88) b/i], [w, [y, "ZTE"], [Q, D]], [/\b(nx\d{3}j) b/i], [w, [y, "ZTE"], [Q, S]], [/\b(gen\d{3}) b.+49h/i], [w, [y, "Swiss"], [Q, S]], [/\b(zur\d{3}) b/i], [w, [y, "Swiss"], [Q, D]], [/\b((zeki)?tb.*\b) b/i], [w, [y, "Zeki"], [Q, D]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[y, "Dragon Touch"], w, [Q, D]], [/\b(ns-?\w{0,9}) b/i], [w, [y, "Insignia"], [Q, D]], [/\b((nxa|next)-?\w{0,9}) b/i], [w, [y, "NextBook"], [Q, D]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[y, "Voice"], w, [Q, S]], [/\b(lvtel\-)?(v1[12]) b/i], [[y, "LvTel"], w, [Q, S]], [/\b(ph-1) /i], [w, [y, "Essential"], [Q, S]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [w, [y, "Envizen"], [Q, D]], [/\b(trio[-\w\. ]+) b/i], [w, [y, "MachSpeed"], [Q, D]], [/\btu_(1491) b/i], [w, [y, "Rotor"], [Q, D]], [/(shield[\w ]+) b/i], [w, [y, "Nvidia"], [Q, D]], [/(sprint) (\w+)/i], [y, w, [Q, S]], [/(kin\.[onetw]{3})/i], [[w, /\./g, " "], [y, h], [Q, S]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [w, [y, T], [Q, D]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [w, [y, T], [Q, S]], [/smart-tv.+(samsung)/i], [y, [Q, m]], [/hbbtv.+maple;(\d+)/i], [[w, /^/, "SmartTV"], [y, b], [Q, m]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[y, l], [Q, m]], [/(apple) ?tv/i], [y, [w, d + " TV"], [Q, m]], [/crkey/i], [[w, i + "cast"], [y, s], [Q, m]], [/droid.+aft(\w+)( bui|\))/i], [w, [y, oA], [Q, m]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [w, [y, F], [Q, m]], [/(bravia[\w ]+)( bui|\))/i], [w, [y, U], [Q, m]], [/(mitv-\w{5}) bui/i], [w, [y, k], [Q, m]], [/Hbbtv.*(technisat) (.*);/i], [y, w, [Q, m]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[y, L], [w, L], [Q, m]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[Q, m]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [y, w, [Q, _]], [/droid.+; (shield) bui/i], [w, [y, "Nvidia"], [Q, _]], [/(playstation [345portablevi]+)/i], [w, [y, U], [Q, _]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [w, [y, h], [Q, _]], [/((pebble))app/i], [y, w, [Q, q]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [w, [y, d], [Q, q]], [/droid.+; (glass) \d/i], [w, [y, s], [Q, q]], [/droid.+; (wt63?0{2,3})\)/i], [w, [y, T], [Q, q]], [/(quest( 2| pro)?)/i], [w, [y, H], [Q, q]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [y, [Q, rA]], [/(aeobc)\b/i], [w, [y, oA], [Q, rA]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [w, [Q, S]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [w, [Q, D]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[Q, D]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[Q, S]], [/(android[-\w\. ]{0,9});.+buil/i], [w, [y, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [x, [C, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [x, [C, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [C, x], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [x, C]], os: [[/microsoft (windows) (vista|xp)/i], [C, x], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [C, [x, G, Y]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[x, G, Y], [C, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[x, /_/g, "."], [C, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[C, P], [x, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [x, C], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [C, x], [/\(bb(10);/i], [x, [C, c]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [x, [C, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [x, [C, n + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [x, [C, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [x, [C, "watchOS"]], [/crkey\/([\d\.]+)/i], [x, [C, i + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[C, K], x], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [C, x], [/(sunos) ?([\w\.\d]*)/i], [[C, "Solaris"], x], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [C, x]] }, O = function(N, z) {
    if (typeof N === a && (z = N, N = A), !(this instanceof O))
      return new O(N, z).getResult();
    var AA = typeof e !== r && e.navigator ? e.navigator : A, tA = N || (AA && AA.userAgent ? AA.userAgent : ""), iA = AA && AA.userAgentData ? AA.userAgentData : A, $ = z ? function(Z, lA) {
      var sA = {};
      for (var dA in Z)
        lA[dA] && lA[dA].length % 2 == 0 ? sA[dA] = lA[dA].concat(Z[dA]) : sA[dA] = Z[dA];
      return sA;
    }(M, z) : M, nA = AA && AA.userAgent == tA;
    return this.getBrowser = function() {
      var Z = {};
      return Z[C] = A, Z[x] = A, R.call(Z, tA, $.browser), Z[B] = function(lA) {
        return typeof lA === f ? lA.replace(/[^\d\.]/g, "").split(".")[0] : A;
      }(Z[x]), nA && AA && AA.brave && typeof AA.brave.isBrave == t && (Z[C] = "Brave"), Z;
    }, this.getCPU = function() {
      var Z = {};
      return Z[E] = A, R.call(Z, tA, $.cpu), Z;
    }, this.getDevice = function() {
      var Z = {};
      return Z[y] = A, Z[w] = A, Z[Q] = A, R.call(Z, tA, $.device), nA && !Z[Q] && iA && iA.mobile && (Z[Q] = S), nA && Z[w] == "Macintosh" && AA && typeof AA.standalone !== r && AA.maxTouchPoints && AA.maxTouchPoints > 2 && (Z[w] = "iPad", Z[Q] = D), Z;
    }, this.getEngine = function() {
      var Z = {};
      return Z[C] = A, Z[x] = A, R.call(Z, tA, $.engine), Z;
    }, this.getOS = function() {
      var Z = {};
      return Z[C] = A, Z[x] = A, R.call(Z, tA, $.os), nA && !Z[C] && iA && iA.platform != "Unknown" && (Z[C] = iA.platform.replace(/chrome os/i, K).replace(/macos/i, P)), Z;
    }, this.getResult = function() {
      return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
    }, this.getUA = function() {
      return tA;
    }, this.setUA = function(Z) {
      return tA = typeof Z === f && Z.length > 500 ? L(Z, 500) : Z, this;
    }, this.setUA(tA), this;
  };
  O.VERSION = "1.0.37", O.BROWSER = X([C, x, B]), O.CPU = X([E]), O.DEVICE = X([w, y, Q, _, S, m, D, q, rA]), O.ENGINE = O.OS = X([C, x]), dn.exports && (gn = dn.exports = O), gn.UAParser = O;
  var j = typeof e !== r && (e.jQuery || e.Zepto);
  if (j && !j.ua) {
    var J = new O();
    j.ua = J.getResult(), j.ua.get = function() {
      return J.getUA();
    }, j.ua.set = function(N) {
      J.setUA(N);
      var z = J.getResult();
      for (var AA in z)
        j.ua[AA] = z[AA];
    };
  }
}(typeof window == "object" ? window : th);
var Lf = ts.exports;
class ze {
  constructor() {
    V(this, "_tags", []);
    V(this, "_isConsoleLogsEnabled", !0);
    V(this, "_isCustomLogsEnabled", !0);
    V(this, "_isNetworkRequestsEnabled", !0);
    V(this, "_isScreenChangesEnabled", !0);
    V(this, "_isSystemEventsEnabled", !0);
    V(this, "_isUserActionsEnabled", !0);
    V(this, "enableActivityHistory", (A) => {
      this.isConsoleLogsEnabled = A, this.isCustomLogsEnabled = A, this.isNetworkRequestsEnabled = A, this.isScreenChangesEnabled = A, this.isUserActionsEnabled = A, this.isSystemEventsEnabled = A;
    });
  }
  get tags() {
    return [...this._tags];
  }
  set tags(A) {
    let t = [...A];
    t.length > 20 && (t = t.slice(0, 20), zA("Cannot set tags. 1-20 tags allowed.")), this._tags = t.filter((r) => r.length > 0 && r.length <= 100);
  }
  get isConsoleLogsEnabled() {
    return this._isConsoleLogsEnabled;
  }
  set isConsoleLogsEnabled(A) {
    A != this._isConsoleLogsEnabled && (this._isConsoleLogsEnabled = A, ((t) => {
      if (!WA.localStorage.isSDKEnabled())
        return;
      const r = hA.consoleLogsTracker;
      t ? r.start() : r.stop();
    })(A));
  }
  get isCustomLogsEnabled() {
    return this._isCustomLogsEnabled;
  }
  set isCustomLogsEnabled(A) {
    this._isCustomLogsEnabled = A;
  }
  get isNetworkRequestsEnabled() {
    return this._isNetworkRequestsEnabled;
  }
  set isNetworkRequestsEnabled(A) {
    A != this._isNetworkRequestsEnabled && (this._isNetworkRequestsEnabled = A, ((t) => {
      if (!WA.localStorage.isSDKEnabled())
        return;
      const r = hA.networkRequestsTracker;
      t ? r.start() : r.stop();
    })(A));
  }
  get isScreenChangesEnabled() {
    return this._isScreenChangesEnabled;
  }
  set isScreenChangesEnabled(A) {
    A != this._isScreenChangesEnabled && (this._isScreenChangesEnabled = A, ((t) => {
      if (!WA.localStorage.isSDKEnabled())
        return;
      const r = hA.screenChangeTracker;
      t ? r.start() : r.stop();
    })(A));
  }
  get isSystemEventsEnabled() {
    return this._isSystemEventsEnabled;
  }
  set isSystemEventsEnabled(A) {
    A != this._isSystemEventsEnabled && (this._isSystemEventsEnabled = A, ((t) => {
      if (!WA.localStorage.isSDKEnabled())
        return;
      const r = hA.systemEventTracker;
      t ? r.start() : r.stop();
    })(A));
  }
  get isUserActionsEnabled() {
    return this._isUserActionsEnabled;
  }
  set isUserActionsEnabled(A) {
    A != this._isUserActionsEnabled && (this._isUserActionsEnabled = A, ((t) => {
      if (!WA.localStorage.isSDKEnabled())
        return;
      const r = hA.userActionTracker;
      t ? r.start() : r.stop();
    })(A));
  }
}
V(ze, "metadata", {});
const Ql = "2.5.1", da = 5242880;
async function kl() {
  var a, f, B, w, C;
  const e = new Lf.UAParser(navigator.userAgent), A = await Mf().then((Q) => Q), t = bA.report.tags, r = await hA.shakeService.getUser();
  return { app_user_id: (r == null ? void 0 : r.userId) ?? null, timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, issue_reported_time: sr((/* @__PURE__ */ new Date()).toString()), device: Of(), browser_name: ((a = e.getBrowser()) == null ? void 0 : a.name) ?? "", browser_version: ((f = e.getBrowser()) == null ? void 0 : f.version) ?? "", current_view: window.location.pathname, screen_height: ga().height, screen_width: ga().width, metadata_: ze.metadata, sdk_version: Ql, report_type: Pa.MANUAL, screen_density: window.devicePixelRatio || 1, locale: window.navigator.language || null, os_version: ((B = e.getOS()) == null ? void 0 : B.version) ?? "", os_name: ((w = e.getOS()) == null ? void 0 : w.name) ?? "", device_orientation: Df(), battery_level: A == null ? void 0 : A.level, battery_status: A != null && A.charging ? 1 : 0, font_scale: Rf(), network_type: Kf(), permissions: await Gf().then((Q) => Q), browser_height: fa().height, browser_width: fa().width, cookies_enabled: Pf(), is_mobile: jf(), cpu_arch: ((C = e.getCPU()) == null ? void 0 : C.architecture) ?? "", app_version: "1.0", log: await Hf(), tags: t, fullstory_session: Vf() };
}
function Of() {
  const e = navigator.userAgent;
  return e.match(/Android/i) ? "Android Device" : e.match(/iPhone|iPad|iPod/i) ? "iOS Device" : e.match(/Windows Phone/i) ? "Windows Phone" : e.match(/Windows/i) ? "Windows PC" : e.match(/Macintosh|Mac OS/i) ? "Macintosh" : e.match(/Linux/i) ? "Linux PC" : null;
}
const Hf = async () => {
  const e = {};
  try {
    const A = [], t = [], r = [], a = [], f = [], B = [], w = await new Promise((y, x) => {
      const E = indexedDB.open(kA, 4), _ = [];
      E.onsuccess = function(S) {
        const D = S.target.result.transaction([Ee], "readonly").objectStore(Ee).openCursor();
        D.onsuccess = function(m) {
          const q = m.target.result;
          if (q) {
            switch (q.value.event_type) {
              case DA.CONSOLE_LOG:
                _.push({ message: q.value.message, timestamp: q.value.timestamp, event_type: q.value.event_type, type: q.value.type });
                break;
              case DA.CUSTOM_LOG:
                _.push({ message: q.value.message, level: q.value.level, timestamp: q.value.timestamp, event_type: q.value.event_type });
                break;
              case DA.NETWORK_REQUEST:
                _.push({ method: q.value.method, status_code: q.value.status_code, url: q.value.url, request_body: q.value.request_body, request_headers: q.value.request_headers, response_body: q.value.response_body, response_headers: q.value.response_headers, duration: q.value.duration, start: q.value.start, timestamp: q.value.timestamp, event_type: q.value.event_type });
                break;
              case DA.NOTIFICATION_EVENT:
                _.push({ title: q.value.title, description: q.value.description, timestamp: q.value.timestamp, event_type: q.value.event_type });
                break;
              case DA.SYSTEM_EVENT:
                _.push({ state: q.value.state, timestamp: q.value.timestamp, event_type: q.value.event_type });
                break;
              case DA.VIEW_CONTROLLER:
                _.push({ view_controller: q.value.view_controller, method: q.value.method, timestamp: q.value.timestamp, event_type: q.value.event_type });
                break;
              case DA.USER_ACTION:
                _.push({ class_name: q.value.class_name, property: q.value.property, touch_type: q.value.touch_type, property_type: q.value.property_type, timestamp: q.value.timestamp, event_type: q.value.event_type });
            }
            q.continue();
          } else
            _.sort((rA, oA) => rA.timestamp < oA.timestamp ? 1 : rA.timestamp == oA.timestamp ? 0 : -1), y(_);
        }, D.onerror = function() {
          x("Error retrieving activity history from IndexedDB");
        };
      }, E.onerror = IA(x), E.onupgradeneeded = xA;
    });
    let C = 0;
    const Q = new TextEncoder();
    w.forEach((y) => {
      const x = JSON.stringify(y), E = Q.encode(x).length;
      if (C + E < da && E < da)
        switch (C += E, y.event_type) {
          case DA.CONSOLE_LOG:
            A.push(y);
            break;
          case DA.CUSTOM_LOG:
            t.push(y);
            break;
          case DA.NETWORK_REQUEST:
            r.push(y);
            break;
          case DA.SYSTEM_EVENT:
            f.push(y);
            break;
          case DA.USER_ACTION:
            a.push(y);
            break;
          case DA.VIEW_CONTROLLER:
            B.push(y);
        }
    }), bA.report.isConsoleLogsEnabled && (e.console_log_events = A), bA.report.isCustomLogsEnabled && (e.custom_log_events = t), bA.report.isNetworkRequestsEnabled && (e.network_requests = r), bA.report.isUserActionsEnabled && (e.user_taps = a), bA.report.isSystemEventsEnabled && (e.system_events = f), bA.report.isScreenChangesEnabled && (e.view_controller_history = B);
  } catch (A) {
    Cs("Failed to read activity histroy. " + (A == null ? void 0 : A.message));
  }
  return e;
};
function ga() {
  return { width: window.screen.width, height: window.screen.height };
}
function fa() {
  return { width: window.innerWidth || document.documentElement.clientWidth, height: window.innerHeight || document.documentElement.clientHeight };
}
function Df() {
  const e = window.screen.orientation;
  return e ? e.type.toLocaleLowerCase().includes("landscape-primary") ? 0 : e.type.toLocaleLowerCase().includes("landscape-secondary") ? 180 : e.type.toLocaleLowerCase().includes("portrait-primary") ? 90 : e.type.toLocaleLowerCase().includes("portrait-secondary") ? 270 : null : null;
}
const Mf = async () => {
  if (!("getBattery" in navigator))
    return null;
  try {
    return await navigator.getBattery();
  } catch (e) {
    return QA("Error getting battery status: " + (e == null ? void 0 : e.message)), null;
  }
}, Rf = () => {
  const e = document.createElement("div");
  e.style.fontSize = "1rem", document.body.appendChild(e);
  const A = window.getComputedStyle(e), t = A.getPropertyValue("font-size") ? parseFloat(A.getPropertyValue("font-size")) : null;
  return document.body.removeChild(e), t;
}, Kf = () => {
  const e = "onLine" in navigator && navigator.onLine || !1;
  return "connection" in navigator && e && navigator.connection.effectiveType || null;
}, Pf = () => "cookieEnabled" in navigator && navigator.cookieEnabled || null, jf = () => {
  var e;
  return "userAgentData" in navigator ? (e = navigator.userAgentData) == null ? void 0 : e.mobile : null;
};
async function Nf(e) {
  try {
    return await navigator.permissions.query({ name: e });
  } catch (A) {
    return QA("Error checking permission status: " + A.message), null;
  }
}
async function Gf() {
  const e = [];
  for (const A of Nl)
    try {
      const t = await Nf(A);
      t && t.state && t.state === "granted" && e.push({ name: A, state: t.state });
    } catch (t) {
      QA("Error checking permission status: " + t.message);
    }
  return e;
}
function Vf() {
  const e = localStorage.getItem("_fs_uid");
  if (e)
    return e;
  {
    const A = document.cookie.split("; ").find((t) => t.startsWith("fs_uid="));
    if (A)
      return A.split("=")[1];
  }
  return null;
}
const Wf = new vs(), br = async (e = null, A = null, t = !0) => {
  if (nt.isShakeOpened)
    return;
  nt.isShakeOpened = !0, hA.shakeService.registerApp(), st(), (async () => {
    const w = hA.shakeService, C = await w.getUser();
    C && C.userId && await w.sendFailedReadReceipts(C.userId);
  })(), Ae && (Ae.style.transition = "transform 0.3s ease", Ae.style.transform = "translateX(100px) rotate(-90deg)");
  let r = await il();
  if (!r) {
    if (t) {
      const w = await Wf.captureScreenshot(document.body);
      w && await bs(w);
    }
    r = await kl(), await (a = r, new Promise((w, C) => {
      const Q = indexedDB.open(kA, 4);
      Q.onerror = function() {
        C("Error opening database");
      }, Q.onsuccess = function(y) {
        const x = y.target.result.transaction([it], "readwrite").objectStore(it).put(a, 0);
        x.onsuccess = function() {
          w("State written successfully to IndexedDB");
        }, x.onerror = function() {
          C("Error writing state to IndexedDB");
        };
      }, Q.onupgradeneeded = xA;
    }));
  }
  var a;
  const f = await _t(), B = Cl(f, e, A);
  document.body.appendChild(B), $c();
}, pa = "shakeTicketId", xl = async () => {
  const e = new URLSearchParams(window.location.search).get(pa);
  if (e) {
    await st();
    const A = await Vt(e);
    A && await br(null, A.id, !1), Yf(pa);
  } else {
    const A = (await hA.shakeService.getChatMessages()).filter((t) => !t.read)[0];
    A && await br(null, A.ticketId, !1);
  }
}, Yf = (e) => {
  const A = new URLSearchParams(location.search);
  A.delete(e), history.replaceState(null, "", "?" + A + location.hash);
}, st = async () => {
  const e = await hA.shakeService.getUser();
  if (e && e.userId) {
    const A = WA.localStorage, t = hA.shakeService, r = A.getFetchTicketsTime(), a = await t.fetchTickets(e.userId, r), f = await Jf();
    A.setFetchTicketsTime(f), a.length > 0 && (xl(), (async () => {
      try {
        const B = document.createElement("audio");
        B.src = "data:audio/mpeg;base64,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", await (B == null ? void 0 : B.play());
      } catch {
      }
    })());
  }
}, Jf = async () => {
  let e = null;
  const A = (await hA.shakeService.getTickets())[0];
  if (A) {
    const t = A.lastActivity;
    e = new Date(t).getTime() + 1;
  }
  return e;
};
class Xf {
  constructor(A) {
    V(this, "socket", null);
    V(this, "serverUrl");
    V(this, "reconnectListener", zf());
    V(this, "connect", (A) => {
      var t;
      try {
        if (QA("Connecting chat web socket."), (t = this.socket) == null ? void 0 : t.connected)
          return;
        const r = { query: { app_user_id: A }, extraHeaders: { "X-API-KEY": At.apiKey }, transports: ["websocket"] };
        this.socket = er(`${this.serverUrl}mobile`, r), this.socket.on("ticket_chat_added", () => {
          st();
        }), this.reconnectListener.reset(), this.socket.on("connect", this.reconnectListener.call), this.socket.connect(), QA("Chat web socket connected.");
      } catch (r) {
        QA(`Chat web socket error. ${r == null ? void 0 : r.message}`);
      }
    });
    V(this, "disconnect", () => {
      try {
        if (!this.socket)
          return null;
        this.socket.close(), this.socket = null, QA("Chat web socket disconnected.");
      } catch (A) {
        QA(`Failed to disconnect socket server.${A == null ? void 0 : A.message}`);
      }
    });
    this.serverUrl = A;
  }
}
const zf = () => {
  let e = 0;
  return { call: () => {
    e++, e > 1 && st();
  }, reset: () => {
    e = 0;
  } };
};
function Fl(e, A) {
  return function() {
    return e.apply(A, arguments);
  };
}
const { toString: qf } = Object.prototype, { getPrototypeOf: Ts } = Object, Qr = /* @__PURE__ */ ((e) => (A) => {
  const t = qf.call(A);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), be = (e) => (e = e.toLowerCase(), (A) => Qr(A) === e), Pr = (e) => (A) => typeof A === e, { isArray: yt } = Array, $t = Pr("undefined"), Ba = be("ArrayBuffer"), Zf = Pr("string"), te = Pr("function"), ma = Pr("number"), Xi = (e) => e !== null && typeof e == "object", zi = (e) => {
  if (Qr(e) !== "object")
    return !1;
  const A = Ts(e);
  return !(A !== null && A !== Object.prototype && Object.getPrototypeOf(A) !== null || Symbol.toStringTag in e || Symbol.iterator in e);
}, $f = be("Date"), Ap = be("File"), ep = be("Blob"), tp = be("FileList"), ip = be("URLSearchParams");
function Ai(e, A, { allOwnKeys: t = !1 } = {}) {
  if (e == null)
    return;
  let r, a;
  if (typeof e != "object" && (e = [e]), yt(e))
    for (r = 0, a = e.length; r < a; r++)
      A.call(null, e[r], r, e);
  else {
    const f = t ? Object.getOwnPropertyNames(e) : Object.keys(e), B = f.length;
    let w;
    for (r = 0; r < B; r++)
      w = f[r], A.call(null, e[w], w, e);
  }
}
function wa(e, A) {
  A = A.toLowerCase();
  const t = Object.keys(e);
  let r, a = t.length;
  for (; a-- > 0; )
    if (r = t[a], A === r.toLowerCase())
      return r;
  return null;
}
const Ul = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ca = (e) => !$t(e) && e !== Ul, rp = (fn = typeof Uint8Array < "u" && Ts(Uint8Array), (e) => fn && e instanceof fn);
var fn;
const np = be("HTMLFormElement"), va = (({ hasOwnProperty: e }) => (A, t) => e.call(A, t))(Object.prototype), sp = be("RegExp"), ya = (e, A) => {
  const t = Object.getOwnPropertyDescriptors(e), r = {};
  Ai(t, (a, f) => {
    let B;
    (B = A(a, f, e)) !== !1 && (r[f] = B || a);
  }), Object.defineProperties(e, r);
}, pn = "abcdefghijklmnopqrstuvwxyz", ba = "0123456789", Qa = { DIGIT: ba, ALPHA: pn, ALPHA_DIGIT: pn + pn.toUpperCase() + ba }, op = be("AsyncFunction"), eA = { isArray: yt, isArrayBuffer: Ba, isBuffer: function(e) {
  return e !== null && !$t(e) && e.constructor !== null && !$t(e.constructor) && te(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}, isFormData: (e) => {
  let A;
  return e && (typeof FormData == "function" && e instanceof FormData || te(e.append) && ((A = Qr(e)) === "formdata" || A === "object" && te(e.toString) && e.toString() === "[object FormData]"));
}, isArrayBufferView: function(e) {
  let A;
  return A = typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && Ba(e.buffer), A;
}, isString: Zf, isNumber: ma, isBoolean: (e) => e === !0 || e === !1, isObject: Xi, isPlainObject: zi, isUndefined: $t, isDate: $f, isFile: Ap, isBlob: ep, isRegExp: sp, isFunction: te, isStream: (e) => Xi(e) && te(e.pipe), isURLSearchParams: ip, isTypedArray: rp, isFileList: tp, forEach: Ai, merge: function e() {
  const { caseless: A } = Ca(this) && this || {}, t = {}, r = (a, f) => {
    const B = A && wa(t, f) || f;
    zi(t[B]) && zi(a) ? t[B] = e(t[B], a) : zi(a) ? t[B] = e({}, a) : yt(a) ? t[B] = a.slice() : t[B] = a;
  };
  for (let a = 0, f = arguments.length; a < f; a++)
    arguments[a] && Ai(arguments[a], r);
  return t;
}, extend: (e, A, t, { allOwnKeys: r } = {}) => (Ai(A, (a, f) => {
  t && te(a) ? e[f] = Fl(a, t) : e[f] = a;
}, { allOwnKeys: r }), e), trim: (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), stripBOM: (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), inherits: (e, A, t, r) => {
  e.prototype = Object.create(A.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", { value: A.prototype }), t && Object.assign(e.prototype, t);
}, toFlatObject: (e, A, t, r) => {
  let a, f, B;
  const w = {};
  if (A = A || {}, e == null)
    return A;
  do {
    for (a = Object.getOwnPropertyNames(e), f = a.length; f-- > 0; )
      B = a[f], r && !r(B, e, A) || w[B] || (A[B] = e[B], w[B] = !0);
    e = t !== !1 && Ts(e);
  } while (e && (!t || t(e, A)) && e !== Object.prototype);
  return A;
}, kindOf: Qr, kindOfTest: be, endsWith: (e, A, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= A.length;
  const r = e.indexOf(A, t);
  return r !== -1 && r === t;
}, toArray: (e) => {
  if (!e)
    return null;
  if (yt(e))
    return e;
  let A = e.length;
  if (!ma(A))
    return null;
  const t = new Array(A);
  for (; A-- > 0; )
    t[A] = e[A];
  return t;
}, forEachEntry: (e, A) => {
  const t = (e && e[Symbol.iterator]).call(e);
  let r;
  for (; (r = t.next()) && !r.done; ) {
    const a = r.value;
    A.call(e, a[0], a[1]);
  }
}, matchAll: (e, A) => {
  let t;
  const r = [];
  for (; (t = e.exec(A)) !== null; )
    r.push(t);
  return r;
}, isHTMLForm: np, hasOwnProperty: va, hasOwnProp: va, reduceDescriptors: ya, freezeMethods: (e) => {
  ya(e, (A, t) => {
    if (te(e) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const r = e[t];
    te(r) && (A.enumerable = !1, "writable" in A ? A.writable = !1 : A.set || (A.set = () => {
      throw Error("Can not rewrite read-only method '" + t + "'");
    }));
  });
}, toObjectSet: (e, A) => {
  const t = {}, r = (a) => {
    a.forEach((f) => {
      t[f] = !0;
    });
  };
  return yt(e) ? r(e) : r(String(e).split(A)), t;
}, toCamelCase: (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(A, t, r) {
  return t.toUpperCase() + r;
}), noop: () => {
}, toFiniteNumber: (e, A) => (e = +e, Number.isFinite(e) ? e : A), findKey: wa, global: Ul, isContextDefined: Ca, ALPHABET: Qa, generateString: (e = 16, A = Qa.ALPHA_DIGIT) => {
  let t = "";
  const { length: r } = A;
  for (; e--; )
    t += A[Math.random() * r | 0];
  return t;
}, isSpecCompliantForm: function(e) {
  return !!(e && te(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}, toJSONObject: (e) => {
  const A = new Array(10), t = (r, a) => {
    if (Xi(r)) {
      if (A.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        A[a] = r;
        const f = yt(r) ? [] : {};
        return Ai(r, (B, w) => {
          const C = t(B, a + 1);
          !$t(C) && (f[w] = C);
        }), A[a] = void 0, f;
      }
    }
    return r;
  };
  return t(e, 0);
}, isAsyncFn: op, isThenable: (e) => e && (Xi(e) || te(e)) && te(e.then) && te(e.catch) };
function mA(e, A, t, r, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", A && (this.code = A), t && (this.config = t), r && (this.request = r), a && (this.response = a);
}
eA.inherits(mA, Error, { toJSON: function() {
  return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: eA.toJSONObject(this.config), code: this.code, status: this.response && this.response.status ? this.response.status : null };
} });
const ka = mA.prototype, xa = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e) => {
  xa[e] = { value: e };
}), Object.defineProperties(mA, xa), Object.defineProperty(ka, "isAxiosError", { value: !0 }), mA.from = (e, A, t, r, a, f) => {
  const B = Object.create(ka);
  return eA.toFlatObject(e, B, function(w) {
    return w !== Error.prototype;
  }, (w) => w !== "isAxiosError"), mA.call(B, e.message, A, t, r, a), B.cause = e, B.name = e.name, f && Object.assign(B, f), B;
};
function Bn(e) {
  return eA.isPlainObject(e) || eA.isArray(e);
}
function El(e) {
  return eA.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Fa(e, A, t) {
  return e ? e.concat(A).map(function(r, a) {
    return r = El(r), !t && a ? "[" + r + "]" : r;
  }).join(t ? "." : "") : A;
}
const ap = eA.toFlatObject(eA, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function kr(e, A, t) {
  if (!eA.isObject(e))
    throw new TypeError("target must be an object");
  A = A || new FormData();
  const r = (t = eA.toFlatObject(t, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function(E, _) {
    return !eA.isUndefined(_[E]);
  })).metaTokens, a = t.visitor || Q, f = t.dots, B = t.indexes, w = (t.Blob || typeof Blob < "u" && Blob) && eA.isSpecCompliantForm(A);
  if (!eA.isFunction(a))
    throw new TypeError("visitor must be a function");
  function C(E) {
    if (E === null)
      return "";
    if (eA.isDate(E))
      return E.toISOString();
    if (!w && eA.isBlob(E))
      throw new mA("Blob is not supported. Use a Buffer instead.");
    return eA.isArrayBuffer(E) || eA.isTypedArray(E) ? w && typeof Blob == "function" ? new Blob([E]) : Buffer.from(E) : E;
  }
  function Q(E, _, S) {
    let D = E;
    if (E && !S && typeof E == "object") {
      if (eA.endsWith(_, "{}"))
        _ = r ? _ : _.slice(0, -2), E = JSON.stringify(E);
      else if (eA.isArray(E) && function(m) {
        return eA.isArray(m) && !m.some(Bn);
      }(E) || (eA.isFileList(E) || eA.endsWith(_, "[]")) && (D = eA.toArray(E)))
        return _ = El(_), D.forEach(function(m, q) {
          !eA.isUndefined(m) && m !== null && A.append(B === !0 ? Fa([_], q, f) : B === null ? _ : _ + "[]", C(m));
        }), !1;
    }
    return !!Bn(E) || (A.append(Fa(S, _, f), C(E)), !1);
  }
  const y = [], x = Object.assign(ap, { defaultVisitor: Q, convertValue: C, isVisitable: Bn });
  if (!eA.isObject(e))
    throw new TypeError("data must be an object");
  return function E(_, S) {
    if (!eA.isUndefined(_)) {
      if (y.indexOf(_) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      y.push(_), eA.forEach(_, function(D, m) {
        (!(eA.isUndefined(D) || D === null) && a.call(A, D, eA.isString(m) ? m.trim() : m, S, x)) === !0 && E(D, S ? S.concat(m) : [m]);
      }), y.pop();
    }
  }(e), A;
}
function Ua(e) {
  const A = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(t) {
    return A[t];
  });
}
function _s(e, A) {
  this._pairs = [], e && kr(e, this, A);
}
const Ea = _s.prototype;
function cp(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Sl(e, A, t) {
  if (!A)
    return e;
  const r = t && t.encode || cp, a = t && t.serialize;
  let f;
  if (f = a ? a(A, t) : eA.isURLSearchParams(A) ? A.toString() : new _s(A, t).toString(r), f) {
    const B = e.indexOf("#");
    B !== -1 && (e = e.slice(0, B)), e += (e.indexOf("?") === -1 ? "?" : "&") + f;
  }
  return e;
}
Ea.append = function(e, A) {
  this._pairs.push([e, A]);
}, Ea.toString = function(e) {
  const A = e ? function(t) {
    return e.call(this, t, Ua);
  } : Ua;
  return this._pairs.map(function(t) {
    return A(t[0]) + "=" + A(t[1]);
  }, "").join("&");
};
class Sa {
  constructor() {
    this.handlers = [];
  }
  use(A, t, r) {
    return this.handlers.push({ fulfilled: A, rejected: t, synchronous: !!r && r.synchronous, runWhen: r ? r.runWhen : null }), this.handlers.length - 1;
  }
  eject(A) {
    this.handlers[A] && (this.handlers[A] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(A) {
    eA.forEach(this.handlers, function(t) {
      t !== null && A(t);
    });
  }
}
const Il = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 }, lp = { isBrowser: !0, classes: { URLSearchParams: typeof URLSearchParams < "u" ? URLSearchParams : _s, FormData: typeof FormData < "u" ? FormData : null, Blob: typeof Blob < "u" ? Blob : null }, protocols: ["http", "https", "file", "blob", "url", "data"] }, Tl = typeof window < "u" && typeof document < "u", hp = (Ia = typeof navigator < "u" && navigator.product, Tl && ["ReactNative", "NativeScript", "NS"].indexOf(Ia) < 0);
var Ia;
const up = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", we = { ...Object.freeze(Object.defineProperty({ __proto__: null, hasBrowserEnv: Tl, hasStandardBrowserEnv: hp, hasStandardBrowserWebWorkerEnv: up }, Symbol.toStringTag, { value: "Module" })), ...lp };
function _l(e) {
  function A(t, r, a, f) {
    let B = t[f++];
    if (B === "__proto__")
      return !0;
    const w = Number.isFinite(+B), C = f >= t.length;
    return B = !B && eA.isArray(a) ? a.length : B, C ? (eA.hasOwnProp(a, B) ? a[B] = [a[B], r] : a[B] = r, !w) : (a[B] && eA.isObject(a[B]) || (a[B] = []), A(t, r, a[B], f) && eA.isArray(a[B]) && (a[B] = function(Q) {
      const y = {}, x = Object.keys(Q);
      let E;
      const _ = x.length;
      let S;
      for (E = 0; E < _; E++)
        S = x[E], y[S] = Q[S];
      return y;
    }(a[B])), !w);
  }
  if (eA.isFormData(e) && eA.isFunction(e.entries)) {
    const t = {};
    return eA.forEachEntry(e, (r, a) => {
      A(function(f) {
        return eA.matchAll(/\w+|\[(\w*)]/g, f).map((B) => B[0] === "[]" ? "" : B[1] || B[0]);
      }(r), a, t, 0);
    }), t;
  }
  return null;
}
const mi = { transitional: Il, adapter: ["xhr", "http"], transformRequest: [function(e, A) {
  const t = A.getContentType() || "", r = t.indexOf("application/json") > -1, a = eA.isObject(e);
  if (a && eA.isHTMLForm(e) && (e = new FormData(e)), eA.isFormData(e))
    return r ? JSON.stringify(_l(e)) : e;
  if (eA.isArrayBuffer(e) || eA.isBuffer(e) || eA.isStream(e) || eA.isFile(e) || eA.isBlob(e))
    return e;
  if (eA.isArrayBufferView(e))
    return e.buffer;
  if (eA.isURLSearchParams(e))
    return A.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
  let f;
  if (a) {
    if (t.indexOf("application/x-www-form-urlencoded") > -1)
      return function(B, w) {
        return kr(B, new we.classes.URLSearchParams(), Object.assign({ visitor: function(C, Q, y, x) {
          return we.isNode && eA.isBuffer(C) ? (this.append(Q, C.toString("base64")), !1) : x.defaultVisitor.apply(this, arguments);
        } }, w));
      }(e, this.formSerializer).toString();
    if ((f = eA.isFileList(e)) || t.indexOf("multipart/form-data") > -1) {
      const B = this.env && this.env.FormData;
      return kr(f ? { "files[]": e } : e, B && new B(), this.formSerializer);
    }
  }
  return a || r ? (A.setContentType("application/json", !1), function(B, w, C) {
    if (eA.isString(B))
      try {
        return (w || JSON.parse)(B), eA.trim(B);
      } catch (Q) {
        if (Q.name !== "SyntaxError")
          throw Q;
      }
    return (C || JSON.stringify)(B);
  }(e)) : e;
}], transformResponse: [function(e) {
  const A = this.transitional || mi.transitional, t = A && A.forcedJSONParsing, r = this.responseType === "json";
  if (e && eA.isString(e) && (t && !this.responseType || r)) {
    const a = !(A && A.silentJSONParsing) && r;
    try {
      return JSON.parse(e);
    } catch (f) {
      if (a)
        throw f.name === "SyntaxError" ? mA.from(f, mA.ERR_BAD_RESPONSE, this, null, this.response) : f;
    }
  }
  return e;
}], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: we.classes.FormData, Blob: we.classes.Blob }, validateStatus: function(e) {
  return e >= 200 && e < 300;
}, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
eA.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  mi.headers[e] = {};
});
const dp = eA.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]), Ta = Symbol("internals");
function Nt(e) {
  return e && String(e).trim().toLowerCase();
}
function or(e) {
  return e === !1 || e == null ? e : eA.isArray(e) ? e.map(or) : String(e);
}
function mn(e, A, t, r, a) {
  return eA.isFunction(r) ? r.call(this, A, t) : (a && (A = t), eA.isString(A) ? eA.isString(r) ? A.indexOf(r) !== -1 : eA.isRegExp(r) ? r.test(A) : void 0 : void 0);
}
class ce {
  constructor(A) {
    A && this.set(A);
  }
  set(A, t, r) {
    const a = this;
    function f(w, C, Q) {
      const y = Nt(C);
      if (!y)
        throw new Error("header name must be a non-empty string");
      const x = eA.findKey(a, y);
      (!x || a[x] === void 0 || Q === !0 || Q === void 0 && a[x] !== !1) && (a[x || C] = or(w));
    }
    const B = (w, C) => eA.forEach(w, (Q, y) => f(Q, y, C));
    return eA.isPlainObject(A) || A instanceof this.constructor ? B(A, t) : eA.isString(A) && (A = A.trim()) && !((w) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(w.trim()))(A) ? B(((w) => {
      const C = {};
      let Q, y, x;
      return w && w.split(`
`).forEach(function(E) {
        x = E.indexOf(":"), Q = E.substring(0, x).trim().toLowerCase(), y = E.substring(x + 1).trim(), !Q || C[Q] && dp[Q] || (Q === "set-cookie" ? C[Q] ? C[Q].push(y) : C[Q] = [y] : C[Q] = C[Q] ? C[Q] + ", " + y : y);
      }), C;
    })(A), t) : A != null && f(t, A, r), this;
  }
  get(A, t) {
    if (A = Nt(A)) {
      const r = eA.findKey(this, A);
      if (r) {
        const a = this[r];
        if (!t)
          return a;
        if (t === !0)
          return function(f) {
            const B = /* @__PURE__ */ Object.create(null), w = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
            let C;
            for (; C = w.exec(f); )
              B[C[1]] = C[2];
            return B;
          }(a);
        if (eA.isFunction(t))
          return t.call(this, a, r);
        if (eA.isRegExp(t))
          return t.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(A, t) {
    if (A = Nt(A)) {
      const r = eA.findKey(this, A);
      return !(!r || this[r] === void 0 || t && !mn(0, this[r], r, t));
    }
    return !1;
  }
  delete(A, t) {
    const r = this;
    let a = !1;
    function f(B) {
      if (B = Nt(B)) {
        const w = eA.findKey(r, B);
        !w || t && !mn(0, r[w], w, t) || (delete r[w], a = !0);
      }
    }
    return eA.isArray(A) ? A.forEach(f) : f(A), a;
  }
  clear(A) {
    const t = Object.keys(this);
    let r = t.length, a = !1;
    for (; r--; ) {
      const f = t[r];
      A && !mn(0, this[f], f, A, !0) || (delete this[f], a = !0);
    }
    return a;
  }
  normalize(A) {
    const t = this, r = {};
    return eA.forEach(this, (a, f) => {
      const B = eA.findKey(r, f);
      if (B)
        return t[B] = or(a), void delete t[f];
      const w = A ? function(C) {
        return C.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (Q, y, x) => y.toUpperCase() + x);
      }(f) : String(f).trim();
      w !== f && delete t[f], t[w] = or(a), r[w] = !0;
    }), this;
  }
  concat(...A) {
    return this.constructor.concat(this, ...A);
  }
  toJSON(A) {
    const t = /* @__PURE__ */ Object.create(null);
    return eA.forEach(this, (r, a) => {
      r != null && r !== !1 && (t[a] = A && eA.isArray(r) ? r.join(", ") : r);
    }), t;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([A, t]) => A + ": " + t).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(A) {
    return A instanceof this ? A : new this(A);
  }
  static concat(A, ...t) {
    const r = new this(A);
    return t.forEach((a) => r.set(a)), r;
  }
  static accessor(A) {
    const t = (this[Ta] = this[Ta] = { accessors: {} }).accessors, r = this.prototype;
    function a(f) {
      const B = Nt(f);
      t[B] || (function(w, C) {
        const Q = eA.toCamelCase(" " + C);
        ["get", "set", "has"].forEach((y) => {
          Object.defineProperty(w, y + Q, { value: function(x, E, _) {
            return this[y].call(this, C, x, E, _);
          }, configurable: !0 });
        });
      }(r, f), t[B] = !0);
    }
    return eA.isArray(A) ? A.forEach(a) : a(A), this;
  }
}
function wn(e, A) {
  const t = this || mi, r = A || t, a = ce.from(r.headers);
  let f = r.data;
  return eA.forEach(e, function(B) {
    f = B.call(t, f, a.normalize(), A ? A.status : void 0);
  }), a.normalize(), f;
}
function Ll(e) {
  return !(!e || !e.__CANCEL__);
}
function wi(e, A, t) {
  mA.call(this, e ?? "canceled", mA.ERR_CANCELED, A, t), this.name = "CanceledError";
}
ce.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), eA.reduceDescriptors(ce.prototype, ({ value: e }, A) => {
  let t = A[0].toUpperCase() + A.slice(1);
  return { get: () => e, set(r) {
    this[t] = r;
  } };
}), eA.freezeMethods(ce), eA.inherits(wi, mA, { __CANCEL__: !0 });
const gp = we.hasStandardBrowserEnv ? { write(e, A, t, r, a, f) {
  const B = [e + "=" + encodeURIComponent(A)];
  eA.isNumber(t) && B.push("expires=" + new Date(t).toGMTString()), eA.isString(r) && B.push("path=" + r), eA.isString(a) && B.push("domain=" + a), f === !0 && B.push("secure"), document.cookie = B.join("; ");
}, read(e) {
  const A = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
  return A ? decodeURIComponent(A[3]) : null;
}, remove(e) {
  this.write(e, "", Date.now() - 864e5);
} } : { write() {
}, read: () => null, remove() {
} };
function Ol(e, A) {
  return e && !function(t) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
  }(A) ? function(t, r) {
    return r ? t.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : t;
  }(e, A) : A;
}
const fp = we.hasStandardBrowserEnv ? function() {
  const e = /(msie|trident)/i.test(navigator.userAgent), A = document.createElement("a");
  let t;
  function r(a) {
    let f = a;
    return e && (A.setAttribute("href", f), f = A.href), A.setAttribute("href", f), { href: A.href, protocol: A.protocol ? A.protocol.replace(/:$/, "") : "", host: A.host, search: A.search ? A.search.replace(/^\?/, "") : "", hash: A.hash ? A.hash.replace(/^#/, "") : "", hostname: A.hostname, port: A.port, pathname: A.pathname.charAt(0) === "/" ? A.pathname : "/" + A.pathname };
  }
  return t = r(window.location.href), function(a) {
    const f = eA.isString(a) ? r(a) : a;
    return f.protocol === t.protocol && f.host === t.host;
  };
}() : function() {
  return !0;
};
function _a(e, A) {
  let t = 0;
  const r = function(a, f) {
    a = a || 10;
    const B = new Array(a), w = new Array(a);
    let C, Q = 0, y = 0;
    return f = f !== void 0 ? f : 1e3, function(x) {
      const E = Date.now(), _ = w[y];
      C || (C = E), B[Q] = x, w[Q] = E;
      let S = y, D = 0;
      for (; S !== Q; )
        D += B[S++], S %= a;
      if (Q = (Q + 1) % a, Q === y && (y = (y + 1) % a), E - C < f)
        return;
      const m = _ && E - _;
      return m ? Math.round(1e3 * D / m) : void 0;
    };
  }(50, 250);
  return (a) => {
    const f = a.loaded, B = a.lengthComputable ? a.total : void 0, w = f - t, C = r(w);
    t = f;
    const Q = { loaded: f, total: B, progress: B ? f / B : void 0, bytes: w, rate: C || void 0, estimated: C && B && f <= B ? (B - f) / C : void 0, event: a };
    Q[A ? "download" : "upload"] = !0, e(Q);
  };
}
const pp = typeof XMLHttpRequest < "u" && function(e) {
  return new Promise(function(A, t) {
    let r = e.data;
    const a = ce.from(e.headers).normalize();
    let f, B, { responseType: w, withXSRFToken: C } = e;
    function Q() {
      e.cancelToken && e.cancelToken.unsubscribe(f), e.signal && e.signal.removeEventListener("abort", f);
    }
    if (eA.isFormData(r)) {
      if (we.hasStandardBrowserEnv || we.hasStandardBrowserWebWorkerEnv)
        a.setContentType(!1);
      else if ((B = a.getContentType()) !== !1) {
        const [S, ...D] = B ? B.split(";").map((m) => m.trim()).filter(Boolean) : [];
        a.setContentType([S || "multipart/form-data", ...D].join("; "));
      }
    }
    let y = new XMLHttpRequest();
    if (e.auth) {
      const S = e.auth.username || "", D = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      a.set("Authorization", "Basic " + btoa(S + ":" + D));
    }
    const x = Ol(e.baseURL, e.url);
    function E() {
      if (!y)
        return;
      const S = ce.from("getAllResponseHeaders" in y && y.getAllResponseHeaders());
      (function(D, m, q) {
        const rA = q.config.validateStatus;
        q.status && rA && !rA(q.status) ? m(new mA("Request failed with status code " + q.status, [mA.ERR_BAD_REQUEST, mA.ERR_BAD_RESPONSE][Math.floor(q.status / 100) - 4], q.config, q.request, q)) : D(q);
      })(function(D) {
        A(D), Q();
      }, function(D) {
        t(D), Q();
      }, { data: w && w !== "text" && w !== "json" ? y.response : y.responseText, status: y.status, statusText: y.statusText, headers: S, config: e, request: y }), y = null;
    }
    if (y.open(e.method.toUpperCase(), Sl(x, e.params, e.paramsSerializer), !0), y.timeout = e.timeout, "onloadend" in y ? y.onloadend = E : y.onreadystatechange = function() {
      y && y.readyState === 4 && (y.status !== 0 || y.responseURL && y.responseURL.indexOf("file:") === 0) && setTimeout(E);
    }, y.onabort = function() {
      y && (t(new mA("Request aborted", mA.ECONNABORTED, e, y)), y = null);
    }, y.onerror = function() {
      t(new mA("Network Error", mA.ERR_NETWORK, e, y)), y = null;
    }, y.ontimeout = function() {
      let S = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const D = e.transitional || Il;
      e.timeoutErrorMessage && (S = e.timeoutErrorMessage), t(new mA(S, D.clarifyTimeoutError ? mA.ETIMEDOUT : mA.ECONNABORTED, e, y)), y = null;
    }, we.hasStandardBrowserEnv && (C && eA.isFunction(C) && (C = C(e)), C || C !== !1 && fp(x))) {
      const S = e.xsrfHeaderName && e.xsrfCookieName && gp.read(e.xsrfCookieName);
      S && a.set(e.xsrfHeaderName, S);
    }
    r === void 0 && a.setContentType(null), "setRequestHeader" in y && eA.forEach(a.toJSON(), function(S, D) {
      y.setRequestHeader(D, S);
    }), eA.isUndefined(e.withCredentials) || (y.withCredentials = !!e.withCredentials), w && w !== "json" && (y.responseType = e.responseType), typeof e.onDownloadProgress == "function" && y.addEventListener("progress", _a(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && y.upload && y.upload.addEventListener("progress", _a(e.onUploadProgress)), (e.cancelToken || e.signal) && (f = (S) => {
      y && (t(!S || S.type ? new wi(null, e, y) : S), y.abort(), y = null);
    }, e.cancelToken && e.cancelToken.subscribe(f), e.signal && (e.signal.aborted ? f() : e.signal.addEventListener("abort", f)));
    const _ = function(S) {
      const D = /^([-+\w]{1,25})(:?\/\/|:)/.exec(S);
      return D && D[1] || "";
    }(x);
    _ && we.protocols.indexOf(_) === -1 ? t(new mA("Unsupported protocol " + _ + ":", mA.ERR_BAD_REQUEST, e)) : y.send(r || null);
  });
}, Hl = { http: null, xhr: pp };
eA.forEach(Hl, (e, A) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: A });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: A });
  }
});
const La = (e) => `- ${e}`, Bp = (e) => eA.isFunction(e) || e === null || e === !1, Dl = (e) => {
  e = eA.isArray(e) ? e : [e];
  const { length: A } = e;
  let t, r;
  const a = {};
  for (let f = 0; f < A; f++) {
    let B;
    if (t = e[f], r = t, !Bp(t) && (r = Hl[(B = String(t)).toLowerCase()], r === void 0))
      throw new mA(`Unknown adapter '${B}'`);
    if (r)
      break;
    a[B || "#" + f] = r;
  }
  if (!r) {
    const f = Object.entries(a).map(([B, w]) => `adapter ${B} ` + (w === !1 ? "is not supported by the environment" : "is not available in the build"));
    throw new mA("There is no suitable adapter to dispatch the request " + (A ? f.length > 1 ? `since :
` + f.map(La).join(`
`) : " " + La(f[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT");
  }
  return r;
};
function Cn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new wi(null, e);
}
function Oa(e) {
  return Cn(e), e.headers = ce.from(e.headers), e.data = wn.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Dl(e.adapter || mi.adapter)(e).then(function(A) {
    return Cn(e), A.data = wn.call(e, e.transformResponse, A), A.headers = ce.from(A.headers), A;
  }, function(A) {
    return Ll(A) || (Cn(e), A && A.response && (A.response.data = wn.call(e, e.transformResponse, A.response), A.response.headers = ce.from(A.response.headers))), Promise.reject(A);
  });
}
const Ha = (e) => e instanceof ce ? { ...e } : e;
function Tt(e, A) {
  A = A || {};
  const t = {};
  function r(Q, y, x) {
    return eA.isPlainObject(Q) && eA.isPlainObject(y) ? eA.merge.call({ caseless: x }, Q, y) : eA.isPlainObject(y) ? eA.merge({}, y) : eA.isArray(y) ? y.slice() : y;
  }
  function a(Q, y, x) {
    return eA.isUndefined(y) ? eA.isUndefined(Q) ? void 0 : r(void 0, Q, x) : r(Q, y, x);
  }
  function f(Q, y) {
    if (!eA.isUndefined(y))
      return r(void 0, y);
  }
  function B(Q, y) {
    return eA.isUndefined(y) ? eA.isUndefined(Q) ? void 0 : r(void 0, Q) : r(void 0, y);
  }
  function w(Q, y, x) {
    return x in A ? r(Q, y) : x in e ? r(void 0, Q) : void 0;
  }
  const C = { url: f, method: f, data: f, baseURL: B, transformRequest: B, transformResponse: B, paramsSerializer: B, timeout: B, timeoutMessage: B, withCredentials: B, withXSRFToken: B, adapter: B, responseType: B, xsrfCookieName: B, xsrfHeaderName: B, onUploadProgress: B, onDownloadProgress: B, decompress: B, maxContentLength: B, maxBodyLength: B, beforeRedirect: B, transport: B, httpAgent: B, httpsAgent: B, cancelToken: B, socketPath: B, responseEncoding: B, validateStatus: w, headers: (Q, y) => a(Ha(Q), Ha(y), !0) };
  return eA.forEach(Object.keys(Object.assign({}, e, A)), function(Q) {
    const y = C[Q] || a, x = y(e[Q], A[Q], Q);
    eA.isUndefined(x) && y !== w || (t[Q] = x);
  }), t;
}
const mp = "1.6.8", Ls = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, A) => {
  Ls[e] = function(t) {
    return typeof t === e || "a" + (A < 1 ? "n " : " ") + e;
  };
});
const Da = {};
Ls.transitional = function(e, A, t) {
  function r(a, f) {
    return "[Axios v1.6.8] Transitional option '" + a + "'" + f + (t ? ". " + t : "");
  }
  return (a, f, B) => {
    if (e === !1)
      throw new mA(r(f, " has been removed" + (A ? " in " + A : "")), mA.ERR_DEPRECATED);
    return A && !Da[f] && (Da[f] = !0, console.warn(r(f, " has been deprecated since v" + A + " and will be removed in the near future"))), !e || e(a, f, B);
  };
};
const is = { assertOptions: function(e, A, t) {
  if (typeof e != "object")
    throw new mA("options must be an object", mA.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let a = r.length;
  for (; a-- > 0; ) {
    const f = r[a], B = A[f];
    if (B) {
      const w = e[f], C = w === void 0 || B(w, f, e);
      if (C !== !0)
        throw new mA("option " + f + " must be " + C, mA.ERR_BAD_OPTION_VALUE);
    } else if (t !== !0)
      throw new mA("Unknown option " + f, mA.ERR_BAD_OPTION);
  }
}, validators: Ls }, Oe = is.validators;
class $e {
  constructor(A) {
    this.defaults = A, this.interceptors = { request: new Sa(), response: new Sa() };
  }
  async request(A, t) {
    try {
      return await this._request(A, t);
    } catch (r) {
      if (r instanceof Error) {
        let a;
        Error.captureStackTrace ? Error.captureStackTrace(a = {}) : a = new Error();
        const f = a.stack ? a.stack.replace(/^.+\n/, "") : "";
        r.stack ? f && !String(r.stack).endsWith(f.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + f) : r.stack = f;
      }
      throw r;
    }
  }
  _request(A, t) {
    typeof A == "string" ? (t = t || {}).url = A : t = A || {}, t = Tt(this.defaults, t);
    const { transitional: r, paramsSerializer: a, headers: f } = t;
    r !== void 0 && is.assertOptions(r, { silentJSONParsing: Oe.transitional(Oe.boolean), forcedJSONParsing: Oe.transitional(Oe.boolean), clarifyTimeoutError: Oe.transitional(Oe.boolean) }, !1), a != null && (eA.isFunction(a) ? t.paramsSerializer = { serialize: a } : is.assertOptions(a, { encode: Oe.function, serialize: Oe.function }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let B = f && eA.merge(f.common, f[t.method]);
    f && eA.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (S) => {
      delete f[S];
    }), t.headers = ce.concat(B, f);
    const w = [];
    let C = !0;
    this.interceptors.request.forEach(function(S) {
      typeof S.runWhen == "function" && S.runWhen(t) === !1 || (C = C && S.synchronous, w.unshift(S.fulfilled, S.rejected));
    });
    const Q = [];
    let y;
    this.interceptors.response.forEach(function(S) {
      Q.push(S.fulfilled, S.rejected);
    });
    let x, E = 0;
    if (!C) {
      const S = [Oa.bind(this), void 0];
      for (S.unshift.apply(S, w), S.push.apply(S, Q), x = S.length, y = Promise.resolve(t); E < x; )
        y = y.then(S[E++], S[E++]);
      return y;
    }
    x = w.length;
    let _ = t;
    for (E = 0; E < x; ) {
      const S = w[E++], D = w[E++];
      try {
        _ = S(_);
      } catch (m) {
        D.call(this, m);
        break;
      }
    }
    try {
      y = Oa.call(this, _);
    } catch (S) {
      return Promise.reject(S);
    }
    for (E = 0, x = Q.length; E < x; )
      y = y.then(Q[E++], Q[E++]);
    return y;
  }
  getUri(A) {
    return Sl(Ol((A = Tt(this.defaults, A)).baseURL, A.url), A.params, A.paramsSerializer);
  }
}
eA.forEach(["delete", "get", "head", "options"], function(e) {
  $e.prototype[e] = function(A, t) {
    return this.request(Tt(t || {}, { method: e, url: A, data: (t || {}).data }));
  };
}), eA.forEach(["post", "put", "patch"], function(e) {
  function A(t) {
    return function(r, a, f) {
      return this.request(Tt(f || {}, { method: e, headers: t ? { "Content-Type": "multipart/form-data" } : {}, url: r, data: a }));
    };
  }
  $e.prototype[e] = A(), $e.prototype[e + "Form"] = A(!0);
});
class Os {
  constructor(A) {
    if (typeof A != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(a) {
      t = a;
    });
    const r = this;
    this.promise.then((a) => {
      if (!r._listeners)
        return;
      let f = r._listeners.length;
      for (; f-- > 0; )
        r._listeners[f](a);
      r._listeners = null;
    }), this.promise.then = (a) => {
      let f;
      const B = new Promise((w) => {
        r.subscribe(w), f = w;
      }).then(a);
      return B.cancel = function() {
        r.unsubscribe(f);
      }, B;
    }, A(function(a, f, B) {
      r.reason || (r.reason = new wi(a, f, B), t(r.reason));
    });
  }
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  subscribe(A) {
    this.reason ? A(this.reason) : this._listeners ? this._listeners.push(A) : this._listeners = [A];
  }
  unsubscribe(A) {
    if (!this._listeners)
      return;
    const t = this._listeners.indexOf(A);
    t !== -1 && this._listeners.splice(t, 1);
  }
  static source() {
    let A;
    return { token: new Os(function(t) {
      A = t;
    }), cancel: A };
  }
}
const rs = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
Object.entries(rs).forEach(([e, A]) => {
  rs[A] = e;
});
const OA = function e(A) {
  const t = new $e(A), r = Fl($e.prototype.request, t);
  return eA.extend(r, $e.prototype, t, { allOwnKeys: !0 }), eA.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(a) {
    return e(Tt(A, a));
  }, r;
}(mi);
OA.Axios = $e, OA.CanceledError = wi, OA.CancelToken = Os, OA.isCancel = Ll, OA.VERSION = mp, OA.toFormData = kr, OA.AxiosError = mA, OA.Cancel = OA.CanceledError, OA.all = function(e) {
  return Promise.all(e);
}, OA.spread = function(e) {
  return function(A) {
    return e.apply(null, A);
  };
}, OA.isAxiosError = function(e) {
  return eA.isObject(e) && e.isAxiosError === !0;
}, OA.mergeConfig = Tt, OA.AxiosHeaders = ce, OA.formToJSON = (e) => _l(eA.isHTMLForm(e) ? new FormData(e) : e), OA.getAdapter = Dl, OA.HttpStatusCode = rs, OA.default = OA;
const qe = class qe {
  constructor() {
    V(this, "axios");
    OA.defaults.withCredentials = !1, this.axios = OA.create({ baseURL: Ga.apiBaseUrl });
  }
  static getInstance() {
    return qe.instance || (qe.instance = new qe()), qe.instance;
  }
  get({ resource: A, config: t }) {
    return this.axios.get(A, t);
  }
  post({ resource: A, data: t, config: r }) {
    return this.axios.post(A, t, r);
  }
  patch({ resource: A, data: t, config: r }) {
    return this.axios.patch(A, this.formatPatchData(t), r);
  }
  put({ resource: A, data: t, config: r }) {
    return this.axios.put(A, t, r);
  }
  delete({ resource: A, config: t }) {
    return this.axios.delete(A, t);
  }
  formatPatchData(A) {
    return Object.keys(A).map((t) => ({ op: "replace", path: "/" + t, value: A[t] }));
  }
};
V(qe, "instance");
let ns = qe;
class wp {
  constructor({ apiKey: A, version: t, bundleId: r, deviceId: a }) {
    V(this, "baseApi");
    V(this, "apiKey");
    V(this, "version");
    V(this, "bundleId");
    V(this, "deviceId");
    this.baseApi = ns.getInstance(), this.apiKey = A, this.version = t, this.bundleId = r, this.deviceId = a, this.setDefaultHeaders();
  }
  setDefaultHeaders() {
    this.baseApi.axios.interceptors.request.use((A) => (A.headers && (A.headers["X-OS"] = "Web", A.headers["X-PLATFORM"] = "Web", A.headers["X-API-KEY"] = this.apiKey, A.headers["X-DEVICE-ID"] = this.deviceId, A.headers["X-APP-ID"] = this.bundleId, A.headers["X-SHAKE-VERSION"] = this.version), A), (A) => Promise.reject(A));
  }
  registerApp() {
    return this.baseApi.get({ resource: "/issue_tracking/apps" });
  }
  sendFeedback(A) {
    return this.baseApi.post({ resource: "/issue_tracking/apps", data: A, config: { headers: { "Content-Type": "application/json" } } });
  }
  registerUser(A) {
    return this.baseApi.post({ resource: "/user_model/app_user", data: A, config: { headers: { "Content-Type": "application/json" } } });
  }
  unregisterUser(A) {
    return this.baseApi.delete({ resource: "/user_model/app_user", config: { params: { device_token: A }, headers: { "Content-Type": "application/json" } } });
  }
  updateUser(A, t) {
    return this.baseApi.post({ resource: `/user_model/app_user/${A}`, data: t, config: { headers: { "Content-Type": "application/json" } } });
  }
  fetchTickets(A, t) {
    return this.baseApi.get({ resource: `/user_model/app_user/${A}/tickets_sync`, config: { params: { last_sync: t }, headers: { "Content-Type": "application/json" } } });
  }
  replyTicket(A, t) {
    return this.baseApi.post({ resource: `/user_model/app_user/${A}/tickets/reply`, data: t, config: { headers: { "Content-Type": "application/json" } } });
  }
  readTicket(A, t) {
    return this.baseApi.post({ resource: `/user_model/app_user/${A}/tickets/read`, data: t, config: { headers: { "Content-Type": "application/json" } } });
  }
  uploadFile(A) {
    const t = new FormData();
    return t.append("file", A), this.baseApi.post({ resource: "/files", data: t, config: { headers: { "Content-Type": "multipart/form-data" } } });
  }
}
const Cp = (e) => {
  const A = vp(e), t = yp(e);
  return { id: e.id, screenshot: A, created: e.created, type: e.type, lastActivity: t, title: e.title, syncedRead: !0 };
}, vp = (e) => {
  var A;
  return ((A = e.screenshot_url) == null ? void 0 : A.includes("screenshot_not_available")) === !0 ? null : e.screenshot_url;
}, yp = (e) => e.messages.length <= 0 ? e.created : (e.messages.sort((A, t) => A.created < t.created ? 1 : A.created == t.created ? 0 : -1), e.messages[0].created), Ma = (e) => ({ id: e.id, screenshot: e.screenshot, timeFrame: of(e.lastActivity), lastActivity: e.lastActivity, title: e.title, type: e.type }), Ml = (e, A) => ({ id: A.id, body: A.message, synced: !0, failed: !1, read: A.is_read, ticketId: e, created: A.created, senderId: A.user_id }), Ra = (e) => e.map((A) => bp(A)), bp = (e) => ({ id: e.id, text: e.body, synced: e.synced, failed: e.failed, ticketId: e.ticketId, timestamp: e.created, senderId: e.senderId, read: e.read }), Qp = (e) => ({ id: e.id, name: e.name, role: e.role }), kp = (e) => (e.messages ?? []).map((A) => Ml(e.id, A));
class xp {
  constructor() {
    V(this, "data", WA.localStorage);
    V(this, "shakeApi", null);
    V(this, "init", () => {
      const A = { apiKey: At.apiKey, bundleId: At.appDomain, version: Ql, deviceId: this.data.getShakeDeviceId() ?? "" };
      this.shakeApi = new wp(A);
    });
    V(this, "getUser", async () => {
      const A = await hn();
      return A ? ((t) => ({ id: t.id, userId: t.userId, endUserId: t.endUserId, metadata: t.metadata, isSynced: t.isSynced }))(A) : null;
    });
    V(this, "getTicket", async (A) => {
      let t = null;
      const r = await Vt(A);
      return r && (t = Ma(r)), t;
    });
    V(this, "getTickets", async () => {
      const A = await Co(), t = await jt(), r = ((f) => f.map((B) => Ma(B)))(A), a = Ra(t);
      return r.sort((f, B) => f.lastActivity < B.lastActivity ? 1 : f.lastActivity == B.lastActivity ? 0 : -1), r.forEach((f) => {
        f.read = !a.find((B) => B.ticketId === f.id && !B.read);
      }), r;
    });
    V(this, "getChatMessages", async (A) => {
      const t = await jt(A);
      return Ra(t).sort((r, a) => r.timestamp < a.timestamp ? 1 : r.timestamp == a.timestamp ? 0 : -1);
    });
    V(this, "getChatParticipants", async () => ((A) => A.map((t) => {
      return { id: (r = t).id, name: r.name, role: r.role };
      var r;
    }))(await ua()));
    V(this, "retryChatMessage", async (A, t) => {
      const r = await (a = t, new Promise((f, B) => {
        const w = indexedDB.open(kA, 4);
        w.onsuccess = function(C) {
          const Q = C.target.result.transaction([de], "readonly").objectStore(de).get(a);
          Q.onsuccess = function(y) {
            const x = y.target.result;
            f(x);
          }, Q.onerror = function() {
            B("Error retrieving chat message from IndexedDB");
          };
        }, w.onerror = IA(B), w.onupgradeneeded = xA;
      }));
      var a;
      r && await this.syncChatMessage(A, r);
    });
    V(this, "sendReadReceipt", async (A, t) => {
      const r = await Vt(A);
      r && (await jt(A)).find((f) => !f.read) && await this.syncReadReceipt(r, t);
    });
    V(this, "sendFailedReadReceipts", async (A) => {
      (await Co()).filter((t) => !t.syncedRead).forEach((t) => {
        this.syncReadReceipt(t, A);
      });
    });
    V(this, "syncReadReceipt", async (A, t) => {
      var r;
      try {
        const a = await jt(A.id);
        a.forEach((B) => B.read = !0), await Yi(a);
        const f = { ticket_id: A.id, ticket_type: A.type };
        await ((r = this.shakeApi) == null ? void 0 : r.readTicket(t, f)), A.syncedRead = !0, await Fi([A]);
      } catch {
        A.syncedRead = !1, await Fi([A]);
      }
    });
    V(this, "updateTicketLastActivity", async (A) => {
      const t = await Vt(A);
      if (t) {
        const r = await jt(A);
        r.sort((a, f) => a.created < f.created ? 1 : a.created == f.created ? 0 : -1), t.lastActivity = r.length > 0 ? r[0].created : t.created, await Fi([t]);
      }
    });
  }
  async registerApp() {
    var A;
    if (this.shakeApi)
      try {
        await this.shakeApi.registerApp(), this.data.setAppRegistered(!0), this.data.setAppActive(!0);
      } catch (t) {
        ((A = t.response) == null ? void 0 : A.status) === 404 ? (this.data.setAppRegistered(!0), this.data.setAppActive(!1)) : QA("Error registering app: " + (t == null ? void 0 : t.message));
      }
  }
  async registerUser() {
    if (!this.shakeApi)
      return;
    const A = await hn();
    if (!A)
      return;
    const t = { end_user_id: A.endUserId, metadata_: A.metadata }, r = await this.shakeApi.registerUser(t), a = { ...A, userId: r.data.id, endUserId: r.data.end_user_id, metadata: r.data.metadata_, isSynced: !0 };
    await Ut(a);
  }
  async updateUser() {
    var t;
    if (!this.shakeApi)
      return;
    const A = await hn();
    if (A)
      try {
        const r = { end_user_id: A.endUserId, metadata_: A.metadata }, a = await this.shakeApi.updateUser(A.userId, r), f = { ...A, userId: a.data.id, endUserId: a.data.end_user_id, metadata: a.data.metadata_, isSynced: !0 };
        await Ut(f);
      } catch (r) {
        if (((t = r == null ? void 0 : r.response) == null ? void 0 : t.status) !== 403)
          throw r;
        {
          Zc("Cannot update user, user id already exists");
          const a = { ...A, isSynced: !0 };
          await Ut(a);
        }
      }
  }
  async fetchTickets(A, t) {
    if (!this.shakeApi)
      return [];
    const r = await this.shakeApi.fetchTickets(A, t), a = r.data.tickets, f = r.data.users, B = ((y) => y.map((x) => Cp(x)))(a), w = ((y) => y.flatMap((x) => kp(x)))(a), C = f.map((y) => Qp(y));
    var Q;
    return await Fi(B), await Yi(w), await (Q = C, new Promise((y, x) => {
      const E = indexedDB.open(kA, 4);
      E.onsuccess = function(_) {
        const S = _.target.result.transaction([tt], "readwrite"), D = S.objectStore(tt);
        Q.forEach((m) => D.put(m)), S.oncomplete = () => {
          y("Chat participants written successfully to IndexedDB");
        }, S.onerror = () => {
          x("Error writing chat participants to IndexedDB");
        };
      }, E.onerror = IA(x), E.onupgradeneeded = xA;
    })), ((y) => {
      const x = [];
      return y.tickets.forEach((E) => {
        var S;
        const _ = (S = E.messages.filter((D) => !D.is_read)) == null ? void 0 : S[0];
        _ && x.push({ title: E.title, message: _ == null ? void 0 : _.message, ticketId: E.id, created: _ == null ? void 0 : _.created });
      }), x;
    })(r.data);
  }
  async sendChatMessage(A, t, r) {
    var w;
    if (!this.shakeApi)
      return;
    const a = await ua(), f = ((w = a.find((C) => C.role === Ss.MOBILE_SDK)) == null ? void 0 : w.id) ?? "", B = { id: Na(), body: r, synced: !1, failed: !1, read: !0, ticketId: t, created: (/* @__PURE__ */ new Date()).toISOString(), senderId: f };
    await Yi([B]), await this.syncChatMessage(A, B), await this.updateTicketLastActivity(t);
  }
  async syncChatMessage(A, t) {
    if (this.shakeApi)
      try {
        const r = await Vt(t.ticketId), a = { ticket_id: t.ticketId, ticket_type: (r == null ? void 0 : r.type) ?? "feedback", message: t.body }, f = await this.shakeApi.replyTicket(A, a), B = Ml(t.ticketId, f.data);
        await function(w, C) {
          return new Promise((Q, y) => {
            const x = indexedDB.open(kA, 4);
            x.onsuccess = function(E) {
              const _ = E.target.result.transaction([de], "readwrite").objectStore(de), S = _.delete(w.id);
              S.onsuccess = function() {
                _.put(C).onsuccess = () => {
                  ui.notifyChange(), Q("Chat message replaced successfully in IndexedDB");
                };
              }, S.onerror = function() {
                y("Error deleting chat message from IndexedDB");
              };
            }, x.onerror = IA(y), x.onupgradeneeded = xA;
          });
        }(t, B), await this.updateTicketLastActivity(t.ticketId);
      } catch {
        t.failed = !0, await Yi([t]);
      }
  }
  async sendUserFeedback(A, t) {
    if (!this.shakeApi)
      return;
    let r, a, f = [];
    t.length && (r = await this.uploadScreenshot(t), a = await this.uploadVideo(t), f = await this.uploadAttachments(t)), A.screenshot_url = r, A.video_url = a, A.files = f, await this.shakeApi.sendFeedback(A);
  }
  async uploadScreenshot(A) {
    const t = A.find((r) => r.type === EA.IMAGE);
    if (t) {
      const r = this.convertAttachmentToFile(t);
      return await this.uploadFile(r);
    }
  }
  async uploadVideo(A) {
    const t = A.find((r) => r.type === EA.VIDEO);
    if (t) {
      const r = this.convertAttachmentToFile(t);
      return await this.uploadFile(r);
    }
  }
  async uploadAttachments(A) {
    const t = A.find((B) => B.type === EA.IMAGE), r = A.find((B) => B.type === EA.VIDEO), a = A.filter((B) => B.name !== (t == null ? void 0 : t.name) && B.name !== (r == null ? void 0 : r.name)).slice(0, 9), f = await this.convertAttachmentsToFiles(a) ?? [];
    return await this.uploadFiles(f) ?? [];
  }
  async uploadFiles(A) {
    const t = [];
    return await Promise.all(A.map(async (r) => {
      await this.uploadFile(r).then((a) => {
        a && t.push({ url: a });
      });
    })), t;
  }
  async uploadFile(A) {
    if (this.shakeApi)
      try {
        const { data: t } = await this.shakeApi.uploadFile(A);
        return t.url;
      } catch (t) {
        QA("Error uploading file: " + (t == null ? void 0 : t.message));
      }
  }
  convertAttachmentToFile(A) {
    return new File([A.drawingData ?? A.data], A.name, { type: A.data.type });
  }
  async convertAttachmentsToFiles(A) {
    return A.map((t) => this.convertAttachmentToFile(t));
  }
}
const si = class si {
};
V(si, "storageProvider", new zl()), V(si, "localStorage", new Xl(si.storageProvider));
let WA = si;
class hA {
}
V(hA, "shakeService", new xp()), V(hA, "consoleLogsTracker", new Zl()), V(hA, "networkRequestsTracker", new eh()), V(hA, "screenChangeTracker", new oh()), V(hA, "userActionTracker", new ch()), V(hA, "systemEventTracker", new ah()), V(hA, "customLogTracker", new $l()), V(hA, "attachmentsManager", new ql()), V(hA, "userRequestsQueue", new Jl()), V(hA, "chatWebSocket", new Xf(Ga.webSocketUrl));
const Ka = 5120, Fp = { takeScreenshot: !0, showSuccessMessage: !1 }, Up = (e) => {
  const A = [];
  return e && A.push({ type: Qt.TITLE, value: e, label: "Title" }), A;
}, Ep = async (e) => {
  try {
    if (!e)
      return void zA("Cannot update user. Id not provided.");
    if (e.length > ml)
      return void zA("Cannot update user. Max id length is 256");
    const A = await hA.shakeService.getUser();
    A ? (await Sp(A, e), await Kr()) : zA("Cannot update user. User not registerd.");
  } catch (A) {
    QA("Failed to update user. " + (A == null ? void 0 : A.message));
  }
}, Sp = async (e, A) => {
  const t = { ...e, id: 0, endUserId: A, isSynced: !1 };
  await Ut(t);
}, Ip = () => {
  var e, A;
  e = "Escape", A = Ge, document.addEventListener("keydown", (t) => {
    t.key === e && A();
  });
}, FA = class FA {
  static async start(A, t) {
    this.localStorage.getShakeDeviceId() || this.localStorage.setShakeDeviceId(Na()), this.isLoading || this.isStarted || (this.isLoading = !0, A ? (At.apiKey = A, At.appDomain = t, hA.shakeService.init(), this.localStorage.isSDKEnabled() ? this.setupShake() : (await (async () => {
      WA.localStorage.isAppRegistered() || await hA.shakeService.registerApp();
    })(), this.localStorage.isSDKEnabled() && this.setupShake(), this.isLoading = !1)) : zA("Cannot start Shake. Api key is empty."));
  }
  static setupShake() {
    Zc("Shake started."), bA.report.isConsoleLogsEnabled && hA.consoleLogsTracker.start(), bA.report.isNetworkRequestsEnabled && hA.networkRequestsTracker.start(), bA.report.isScreenChangesEnabled && hA.screenChangeTracker.start(), bA.report.isSystemEventsEnabled && hA.systemEventTracker.start(), bA.report.isUserActionsEnabled && hA.userActionTracker.start(), bl(), Ip(), hA.userRequestsQueue.add(Kr), pl(), (async () => (await hA.shakeService.getTickets()).length > 0 && await st())(), xl(), this.isStarted = !0;
  }
};
V(FA, "config", new nt()), V(FA, "report", new ze()), V(FA, "localStorage", WA.localStorage), V(FA, "isLoading", !1), V(FA, "isStarted", !1), V(FA, "show", async (A) => await FA.ifSDKEnabled(async () => {
  await br(A, null);
})), V(FA, "registerUser", async (A) => await FA.ifSDKEnabled(async () => {
  var t;
  t = A, hA.userRequestsQueue.add(() => wf(t));
})), V(FA, "updateUserId", async (A) => await FA.ifSDKEnabled(async () => {
  var t;
  t = A, hA.userRequestsQueue.add(() => Ep(t));
})), V(FA, "updateUserMetadata", async (A) => await FA.ifSDKEnabled(async () => {
  wl(A);
})), V(FA, "unregisterUser", async () => await FA.ifSDKEnabled(async () => {
  hA.userRequestsQueue.add(Bl);
})), V(FA, "silentReport", async (A, t) => await FA.ifSDKEnabled(async () => {
  await (async (r, a = Fp) => {
    try {
      const f = hA.shakeService, B = [];
      if (a.takeScreenshot) {
        const C = await new vs().captureScreenshot(document.body);
        C && B.push({ data: C, type: EA.IMAGE, name: ys(EA.IMAGE, "jpg"), timestamp: (/* @__PURE__ */ new Date()).getTime() });
      }
      const w = await kl();
      w.tags.push("silent"), w.custom_fields = Up(r), await f.sendUserFeedback(w, B), a.showSuccessMessage && yr(!0), QA("Silent report sent successfully.");
    } catch (f) {
      a.showSuccessMessage && yr(!1), QA("Error sending silent report: " + (f == null ? void 0 : f.message));
    }
  })(A, t);
})), V(FA, "log", async (A, t) => await FA.ifSDKEnabled(async () => {
  await hA.customLogTracker.captureEvent(A, t);
})), V(FA, "setMetadata", (A, t) => {
  ((r, a) => {
    if (!r)
      return;
    const f = String(r);
    let B = String(a);
    if (Object.keys(ze.metadata).length >= 100)
      return void zA("Cannot set metadata. Limit of 100 items reached.");
    B.length > Ka && (zA("Truncating metadata value. Value exceeded 5120 chars."), B = B.substring(0, Ka)), ze.metadata[f] = B;
  })(A, t);
}), V(FA, "removeMetadata", (A) => {
  ((t) => {
    delete ze.metadata[t];
  })(A);
}), V(FA, "clearMetadata", () => {
  ze.metadata = {};
}), V(FA, "ifSDKEnabled", async (A) => FA.localStorage.isSDKEnabled() ? (await A(), !0) : (zA("Please call Shake.start(apiKey) before using Shake."), !1));
let ss = FA;
const bA = ss;
export {
  ue as DefaultFormKeys,
  ar as Language,
  jl as LogLevel,
  cs as ShakeAttachments,
  as as ShakeEmail,
  os as ShakeForm,
  gi as ShakeFormComponent,
  Ur as ShakePicker,
  Lp as ShakePickerItem,
  bt as ShakeScreen,
  ja as ShakeTextInput,
  Fr as ShakeTitle,
  bA as default,
  Vl as defaultShakeForm
};
//# sourceMappingURL=browser.js.map
