var Ko = Object.defineProperty;
var ko = (e, A, t) => A in e ? Ko(e, A, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[A] = t;
var E = (e, A, t) => (ko(e, typeof A != "symbol" ? A + "" : A, t), t);
import "./main.css";
var Cs = ((e) => (e.WEB = "Web", e))(Cs || {}), ht = ((e) => (e.WEB = "Web", e))(ht || {});
const EA = "shake.sdk.appToken", Yt = "shake.sdk.isAppRegistered", Zt = "shake.sdk.isAppActive", nn = "shake.sdk.isShakeOpened", sn = "shake.sdk.shakeState", on = "shake.sdk.shakeDeviceId";
class Do {
  constructor(A) {
    E(this, "baseApi");
    this.baseApi = A;
  }
  getToken(A, t) {
    const r = new FormData();
    return r.append("grant_type", "client_credentials"), r.append("client_id", A), r.append("client_secret", t), this.baseApi.postAuth({ resource: "token", data: r, config: { headers: { "Content-Type": "application/x-www-form-urlencoded" } } });
  }
  registerApp(A, t, r, n) {
    return this.baseApi.post({ resource: "/issue_tracking/apps", data: { platform: n, os: t, bundle_id: A, check_archived: r } });
  }
}
const IA = (e) => {
  const A = document.createElement("img");
  return A.classList.add("shake-sdk-image"), A.src = e, A;
}, Us = () => {
  const e = document.createElement("button");
  return e.classList.add("shake-sdk-button"), e;
}, Fs = (e) => {
  const A = document.createElement("p");
  return A.classList.add("shake-sdk-text-h2"), A.innerText = e, A;
}, ps = (e) => {
  const A = document.createElement("p");
  return A.classList.add("shake-sdk-text-button"), A.innerText = e, A;
};
var Ue;
let Ct = (Ue = class {
}, E(Ue, "clientId", ""), E(Ue, "clientSecret", ""), E(Ue, "bundleId", ""), Ue);
var ve = ((e) => (e.SUGGESTION = "improvement", e.BUG = "bug", e.QUESTION = "question", e))(ve || {}), fs = ((e) => (e.MANUAL = "manual", e.AUTOMATIC = "automatic", e))(fs || {}), wr = ((e) => (e.TITLE = "title", e.TEXT_INPUT = "text_input", e.EMAIL = "email", e.PICKER = "picker", e))(wr || {});
const So = ["geolocation", "camera", "microphone", "notifications", "persistent-storage", "screen-wake-lock"];
class Ut {
  constructor() {
    E(this, "attachments", []);
    E(this, "description", "");
    E(this, "feedbackType", ve.SUGGESTION);
  }
}
const Se = (e) => {
  const A = document.createElement("img");
  A.src = e;
  const t = document.createElement("button");
  return t.classList.add("shake-sdk-circle-button"), t.appendChild(A), t;
}, K = () => {
  const e = document.createElement("div");
  return e.classList.add("shake-sdk-container"), e;
}, dr = "data:image/svg+xml,%3csvg%20width='50'%20height='51'%20viewBox='0%200%2050%2051'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.834%2021.5598L29.1673%2029.8931'%20stroke='%231C1C1E'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M29.1673%2021.56L20.834%2029.8933'%20stroke='%231C1C1E'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
class xo {
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
class Oo {
  constructor(A) {
    E(this, "localStorage");
    E(this, "isShakeOpened", () => this.localStorage.getBoolean(nn) ?? !1);
    E(this, "setShakeOpened", (A) => this.localStorage.setBoolean(nn, A));
    E(this, "getShakeState", () => this.localStorage.getObject(sn));
    E(this, "setShakeState", (A) => this.localStorage.setObject(sn, A));
    E(this, "getShakeDeviceId", () => this.localStorage.getString(on));
    E(this, "setShakeDeviceId", (A) => this.localStorage.setString(on, A));
    this.localStorage = A;
  }
}
class To {
  constructor() {
    E(this, "addObservers", []);
    E(this, "removeObservers", []);
    E(this, "addAttachment", (A) => {
      const t = V.data.getShakeState();
      t == null || t.attachments.push(A), V.data.setShakeState(t), this.notifyAdded(A);
    });
    E(this, "removeAttachment", (A) => {
      const t = V.data.getShakeState();
      t && (t.attachments = t.attachments.filter((r) => r.name !== A.name)), V.data.setShakeState(t), this.notifyRemoved(A);
    });
    E(this, "notifyAdded", (A) => this.addObservers.forEach((t) => t(A)));
    E(this, "notifyRemoved", (A) => this.removeObservers.forEach((t) => t(A)));
  }
}
const le = class le {
};
E(le, "storage", new xo()), E(le, "data", new Oo(le.storage)), E(le, "attachmentsManager", new To());
let V = le;
const xe = (e = !0) => {
  const A = V.data;
  e && (wc(), A.setShakeState(null));
  const t = document.getElementById("shake-sdk-root");
  t == null || t.remove(), A.setShakeOpened(!1);
}, Pr = () => {
  const e = document.createElement("div");
  return e.classList.add("shake-sdk-card"), e;
}, ms = "data:image/svg+xml,%3csvg%20width='31'%20height='32'%20viewBox='0%200%2031%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.7285%2013.4543L17.8197%2018.5455'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.8197%2013.4545L12.7285%2018.5457'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Mo = (e) => {
  const A = K();
  return A.classList.add("shake-sdk-attachment-title-box"), A.appendChild(((t) => {
    const r = document.createElement("p");
    return r.classList.add("shake-sdk-text-p3"), r.innerText = t, r;
  })(e)), A;
}, Ot = ({ src: e, controls: A, autoplay: t }) => {
  const r = document.createElement("video");
  return r.classList.add("shake-sdk-video"), r.src = e, r.controls = A ?? !1, r.preload = "metadata", r.autoplay = t ?? !1, r.loop = !0, r;
};
var cA = ((e) => (e[e.IMAGE = 0] = "IMAGE", e[e.VIDEO = 1] = "VIDEO", e))(cA || {});
const Ro = { shake_sdk_dialog_add_attachment: "Add attachment", shake_sdk_dialog_add_attachment_grab_screenshot: "Grab screenshot", shake_sdk_dialog_add_attachment_record_screen: "Record screen", shake_sdk_dialog_add_attachment_browse_locations: "Browse other locations", shake_sdk_dialog_add_attachment_type_video: "Video", shake_sdk_dialog_add_attachment_type_image: "Screenshot", shake_sdk_dialog_ticket_sent_title: "Done.", shake_sdk_dialog_ticket_sent_message: "Your ticket was sent.", shake_sdk_error_message: "Something went wrong.", shake_sdk_main_button_title: "Send feedback", shake_sdk_ticket_form_title: "New ticket", shake_sdk_new_ticket_feedback_type_title: "Feedback type", shake_sdk_new_ticket_feedback_type_bug: "Bug report", shake_sdk_new_ticket_feedback_type_question: "Question", shake_sdk_new_ticket_feedback_type_suggestion: "Improvement suggestion", shake_sdk_ticket_form_description_placeholder: "Description", shake_sdk_ticket_form_submit_button_text: "Submit", shake_sdk_ticket_form_submit_button_text_loading: "Submiting..." };
var Nr = ((e) => (e[e.EN = 0] = "EN", e))(Nr || {});
class Qr {
}
E(Qr, "language", Nr.EN), E(Qr, "bundleId", "");
const X = (e = Qr.language) => (Nr.EN, Ro), Es = "data:image/svg+xml,%3csvg%20width='23'%20height='23'%20viewBox='0%200%2023%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15050_29400)'%3e%3cpath%20d='M11.3994%207.80005V15'%20stroke='%238E8E93'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.9998%2011.4001H7.7998'%20stroke='%238E8E93'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15050_29400'%3e%3crect%20width='21.6'%20height='21.6'%20fill='white'%20transform='translate(0.599609%200.600098)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", an = ({ img: e, text: A, onClick: t }) => {
  const r = document.createElement("button");
  return r.classList.add("shake-sdk-context-menu-item"), r.onclick = t, r.appendChild(IA(e)), r.appendChild(((n) => {
    const s = document.createElement("p");
    return s.classList.add("shake-sdk-text-p2"), s.innerText = n, s;
  })(A)), r;
}, xt = class xt {
  constructor() {
    E(this, "onStartListener", null);
    E(this, "onStopListener", null);
    E(this, "mediaRecorder", null);
    E(this, "recordedChunks", []);
    E(this, "timeout", null);
    E(this, "isRecording", !1);
    E(this, "start", async () => {
      if (this.isRecording)
        return;
      const A = await navigator.mediaDevices.getDisplayMedia({ video: !0 });
      this.mediaRecorder = new MediaRecorder(A), this.mediaRecorder.onstart = () => {
        var t;
        this.startTimer(), (t = this.onStartListener) == null || t.call(this), this.isRecording = !0;
      }, this.mediaRecorder.ondataavailable = (t) => {
        t.data.size > 0 && this.recordedChunks.push(t.data);
      }, this.mediaRecorder.onstop = () => {
        var n;
        this.stopTimer();
        const t = new Blob(this.recordedChunks, { type: "video/webm" }), r = URL.createObjectURL(t);
        (n = this.onStopListener) == null || n.call(this, r), this.isRecording = !1;
      }, this.mediaRecorder.start();
    });
    E(this, "stop", () => {
      var A;
      (A = this.mediaRecorder) == null || A.stop();
    });
    E(this, "startTimer", () => {
      this.stopTimer(), this.timeout = window.setTimeout(() => {
        var A;
        (A = this.mediaRecorder) == null || A.stop();
      }, xt.SCREEN_RECORDING_TIME);
    });
    E(this, "stopTimer", () => {
      this.timeout && (window.clearTimeout(this.timeout), this.timeout = null);
    });
  }
};
E(xt, "SCREEN_RECORDING_TIME", 3e4);
let hr = xt;
function Hs() {
  const e = Uo(V.data.getShakeState() ?? new Ut());
  document.body.appendChild(e), V.data.setShakeOpened(!0);
}
function Cr(e) {
  const A = new Date(e);
  return `${A.getUTCFullYear()}-${(A.getUTCMonth() + 1).toString().padStart(2, "0")}-${A.getUTCDate().toString().padStart(2, "0")}T${A.getUTCHours().toString().padStart(2, "0")}:${A.getUTCMinutes().toString().padStart(2, "0")}:${A.getUTCSeconds().toString().padStart(2, "0")}.${A.getUTCMilliseconds().toString().padStart(3, "0")}Z`;
}
function ys(e, A) {
  const t = V.data.getShakeState(), r = { data: e, type: A, name: (n = A, n === cA.IMAGE ? `screenshot_${Cr((/* @__PURE__ */ new Date()).toString())}.jpg` : n === cA.VIDEO ? `screen_recording_${Cr((/* @__PURE__ */ new Date()).toString())}.mp4` : "") };
  var n;
  t == null || t.attachments.push(r), V.data.setShakeState(t);
}
const Is = () => {
  const e = new hr();
  e.onStartListener = () => {
    xe(!1);
  }, e.onStopListener = (A) => {
    ys(A, cA.VIDEO), Hs();
  }, e.start();
}, Go = (e, A) => {
  let t = !1, r = 0, n = 0, s = !1;
  e.style.left = window.innerWidth - e.offsetWidth - 100 + "px", e.style.top = window.innerHeight - e.offsetHeight - 100 + "px", e.addEventListener("mousedown", function(o) {
    t = !0, s = !1, r = o.clientX - e.getBoundingClientRect().left, n = o.clientY - e.getBoundingClientRect().top;
  }), document.addEventListener("mousemove", function(o) {
    if (t) {
      const i = o.clientX - r, B = o.clientY - n, c = window.innerWidth - e.offsetWidth, a = window.innerHeight - e.offsetHeight;
      e.style.left = Math.min(Math.max(0, i), c) + "px", e.style.top = Math.min(Math.max(0, B), a) + "px", (Math.abs(o.movementX) > 2 || Math.abs(o.movementY) > 2) && (s = !0);
    }
  }), e.addEventListener("mouseup", function() {
    t && (t = !1, s || A());
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
var Ur = function(e, A) {
  return Ur = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, Ur(e, A);
};
function FA(e, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  function t() {
    this.constructor = e;
  }
  Ur(e, A), e.prototype = A === null ? Object.create(A) : (t.prototype = A.prototype, new t());
}
var Fr = function() {
  return Fr = Object.assign || function(e) {
    for (var A, t = 1, r = arguments.length; t < r; t++)
      for (var n in A = arguments[t])
        Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n]);
    return e;
  }, Fr.apply(this, arguments);
};
function eA(e, A, t, r) {
  return new (t || (t = Promise))(function(n, s) {
    function o(c) {
      try {
        B(r.next(c));
      } catch (a) {
        s(a);
      }
    }
    function i(c) {
      try {
        B(r.throw(c));
      } catch (a) {
        s(a);
      }
    }
    function B(c) {
      var a;
      c.done ? n(c.value) : (a = c.value, a instanceof t ? a : new t(function(l) {
        l(a);
      })).then(o, i);
    }
    B((r = r.apply(e, A || [])).next());
  });
}
function z(e, A) {
  var t, r, n, s, o = { label: 0, sent: function() {
    if (1 & n[0])
      throw n[1];
    return n[1];
  }, trys: [], ops: [] };
  return s = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function i(B) {
    return function(c) {
      return function(a) {
        if (t)
          throw new TypeError("Generator is already executing.");
        for (; o; )
          try {
            if (t = 1, r && (n = 2 & a[0] ? r.return : a[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, a[1])).done)
              return n;
            switch (r = 0, n && (a = [2 & a[0], n.value]), a[0]) {
              case 0:
              case 1:
                n = a;
                break;
              case 4:
                return o.label++, { value: a[1], done: !1 };
              case 5:
                o.label++, r = a[1], a = [0];
                continue;
              case 7:
                a = o.ops.pop(), o.trys.pop();
                continue;
              default:
                if (n = o.trys, !((n = n.length > 0 && n[n.length - 1]) || a[0] !== 6 && a[0] !== 2)) {
                  o = 0;
                  continue;
                }
                if (a[0] === 3 && (!n || a[1] > n[0] && a[1] < n[3])) {
                  o.label = a[1];
                  break;
                }
                if (a[0] === 6 && o.label < n[1]) {
                  o.label = n[1], n = a;
                  break;
                }
                if (n && o.label < n[2]) {
                  o.label = n[2], o.ops.push(a);
                  break;
                }
                n[2] && o.ops.pop(), o.trys.pop();
                continue;
            }
            a = A.call(e, o);
          } catch (l) {
            a = [6, l], r = 0;
          } finally {
            t = n = 0;
          }
        if (5 & a[0])
          throw a[1];
        return { value: a[0] ? a[1] : void 0, done: !0 };
      }([B, c]);
    };
  }
}
function Ve(e, A, t) {
  if (t || arguments.length === 2)
    for (var r, n = 0, s = A.length; n < s; n++)
      !r && n in A || (r || (r = Array.prototype.slice.call(A, 0, n)), r[n] = A[n]);
  return e.concat(r || A);
}
for (var xA = function() {
  function e(A, t, r, n) {
    this.left = A, this.top = t, this.width = r, this.height = n;
  }
  return e.prototype.add = function(A, t, r, n) {
    return new e(this.left + A, this.top + t, this.width + r, this.height + n);
  }, e.fromClientRect = function(A, t) {
    return new e(t.left + A.windowBounds.left, t.top + A.windowBounds.top, t.width, t.height);
  }, e.fromDOMRectList = function(A, t) {
    var r = Array.from(t).find(function(n) {
      return n.width !== 0;
    });
    return r ? new e(r.left + A.windowBounds.left, r.top + A.windowBounds.top, r.width, r.height) : e.EMPTY;
  }, e.EMPTY = new e(0, 0, 0, 0), e;
}(), Tt = function(e, A) {
  return xA.fromClientRect(e, A.getBoundingClientRect());
}, Ft = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var n = e.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var s = e.charCodeAt(t++);
      (64512 & s) == 56320 ? A.push(((1023 & n) << 10) + (1023 & s) + 65536) : (A.push(n), t--);
    } else
      A.push(n);
  }
  return A;
}, N = function() {
  for (var e = [], A = 0; A < arguments.length; A++)
    e[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var t = e.length;
  if (!t)
    return "";
  for (var r = [], n = -1, s = ""; ++n < t; ) {
    var o = e[n];
    o <= 65535 ? r.push(o) : (o -= 65536, r.push(55296 + (o >> 10), o % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (s += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return s;
}, Vo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Po = typeof Uint8Array > "u" ? [] : new Uint8Array(256), Pe = 0; Pe < 64; Pe++)
  Po[Vo.charCodeAt(Pe)] = Pe;
for (var No = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Fe = typeof Uint8Array > "u" ? [] : new Uint8Array(256), Ne = 0; Ne < 64; Ne++)
  Fe[No.charCodeAt(Ne)] = Ne;
for (var Bn = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, _o = function() {
  function e(A, t, r, n, s, o) {
    this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = s, this.data = o;
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
}(), Jo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Xo = typeof Uint8Array > "u" ? [] : new Uint8Array(256), _e = 0; _e < 64; _e++)
  Xo[Jo.charCodeAt(_e)] = _e;
var VA = 10, pr = 13, pe = 15, Je = 17, Qe = 18, Wo = 19, cn = 20, fr = 21, he = 22, Ae = 24, BA = 25, fe = 26, me = 27, ee = 28, oe = 30, Xe = 32, We = 33, mr = 34, Er = 35, be = 37, Hr = 38, Bt = 39, ct = 40, ln = 42, Yo = [9001, 65288], b = "×", Ye = "÷", yr = function(e, A) {
  var t, r, n, s = function(a) {
    var l, u, w, g, d, h = 0.75 * a.length, C = a.length, F = 0;
    a[a.length - 1] === "=" && (h--, a[a.length - 2] === "=" && h--);
    var y = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && Uint8Array.prototype.slice !== void 0 ? new ArrayBuffer(h) : new Array(h), p = Array.isArray(y) ? y : new Uint8Array(y);
    for (l = 0; l < C; l += 4)
      u = Fe[a.charCodeAt(l)], w = Fe[a.charCodeAt(l + 1)], g = Fe[a.charCodeAt(l + 2)], d = Fe[a.charCodeAt(l + 3)], p[F++] = u << 2 | w >> 4, p[F++] = (15 & w) << 4 | g >> 2, p[F++] = (3 & g) << 6 | 63 & d;
    return y;
  }(e), o = Array.isArray(s) ? function(a) {
    for (var l = a.length, u = [], w = 0; w < l; w += 4)
      u.push(a[w + 3] << 24 | a[w + 2] << 16 | a[w + 1] << 8 | a[w]);
    return u;
  }(s) : new Uint32Array(s), i = Array.isArray(s) ? function(a) {
    for (var l = a.length, u = [], w = 0; w < l; w += 2)
      u.push(a[w + 1] << 8 | a[w]);
    return u;
  }(s) : new Uint16Array(s), B = Bn(i, 12, o[4] / 2), c = o[5] === 2 ? Bn(i, (24 + o[4]) / 2) : (t = o, r = Math.ceil((24 + o[4]) / 4), t.slice ? t.slice(r, n) : new Uint32Array(Array.prototype.slice.call(t, r, n)));
  return new _o(o[0], o[1], o[2], o[3], B, c);
}("KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA=="), KA = [oe, 36], Ir = [1, 2, 3, 5], vs = [VA, 8], un = [me, fe], Zo = Ir.concat(vs), gn = [Hr, Bt, ct, mr, Er], jo = [pe, pr], jt = function(e, A, t, r) {
  var n = r[t];
  if (Array.isArray(e) ? e.indexOf(n) !== -1 : e === n)
    for (var s = t; s <= r.length; ) {
      if ((B = r[++s]) === A)
        return !0;
      if (B !== VA)
        break;
    }
  if (n === VA)
    for (s = t; s > 0; ) {
      var o = r[--s];
      if (Array.isArray(e) ? e.indexOf(o) !== -1 : e === o)
        for (var i = t; i <= r.length; ) {
          var B;
          if ((B = r[++i]) === A)
            return !0;
          if (B !== VA)
            break;
        }
      if (o !== VA)
        break;
    }
  return !1;
}, wn = function(e, A) {
  for (var t = e; t >= 0; ) {
    var r = A[t];
    if (r !== VA)
      return r;
    t--;
  }
  return 0;
}, qo = function(e, A, t, r, n) {
  if (t[r] === 0)
    return b;
  var s = r - 1;
  if (Array.isArray(n) && n[s] === !0)
    return b;
  var o = s - 1, i = s + 1, B = A[s], c = o >= 0 ? A[o] : 0, a = A[i];
  if (B === 2 && a === 3)
    return b;
  if (Ir.indexOf(B) !== -1)
    return "!";
  if (Ir.indexOf(a) !== -1 || vs.indexOf(a) !== -1)
    return b;
  if (wn(s, A) === 8)
    return Ye;
  if (yr.get(e[s]) === 11 || (B === Xe || B === We) && yr.get(e[i]) === 11 || B === 7 || a === 7 || B === 9 || [VA, pr, pe].indexOf(B) === -1 && a === 9 || [Je, Qe, Wo, Ae, ee].indexOf(a) !== -1 || wn(s, A) === he || jt(23, he, s, A) || jt([Je, Qe], fr, s, A) || jt(12, 12, s, A))
    return b;
  if (B === VA)
    return Ye;
  if (B === 23 || a === 23)
    return b;
  if (a === 16 || B === 16)
    return Ye;
  if ([pr, pe, fr].indexOf(a) !== -1 || B === 14 || c === 36 && jo.indexOf(B) !== -1 || B === ee && a === 36 || a === cn || KA.indexOf(a) !== -1 && B === BA || KA.indexOf(B) !== -1 && a === BA || B === me && [be, Xe, We].indexOf(a) !== -1 || [be, Xe, We].indexOf(B) !== -1 && a === fe || KA.indexOf(B) !== -1 && un.indexOf(a) !== -1 || un.indexOf(B) !== -1 && KA.indexOf(a) !== -1 || [me, fe].indexOf(B) !== -1 && (a === BA || [he, pe].indexOf(a) !== -1 && A[i + 1] === BA) || [he, pe].indexOf(B) !== -1 && a === BA || B === BA && [BA, ee, Ae].indexOf(a) !== -1)
    return b;
  if ([BA, ee, Ae, Je, Qe].indexOf(a) !== -1)
    for (var l = s; l >= 0; ) {
      if ((u = A[l]) === BA)
        return b;
      if ([ee, Ae].indexOf(u) === -1)
        break;
      l--;
    }
  if ([me, fe].indexOf(a) !== -1)
    for (l = [Je, Qe].indexOf(B) !== -1 ? o : s; l >= 0; ) {
      var u;
      if ((u = A[l]) === BA)
        return b;
      if ([ee, Ae].indexOf(u) === -1)
        break;
      l--;
    }
  if (Hr === B && [Hr, Bt, mr, Er].indexOf(a) !== -1 || [Bt, mr].indexOf(B) !== -1 && [Bt, ct].indexOf(a) !== -1 || [ct, Er].indexOf(B) !== -1 && a === ct || gn.indexOf(B) !== -1 && [cn, fe].indexOf(a) !== -1 || gn.indexOf(a) !== -1 && B === me || KA.indexOf(B) !== -1 && KA.indexOf(a) !== -1 || B === Ae && KA.indexOf(a) !== -1 || KA.concat(BA).indexOf(B) !== -1 && a === he && Yo.indexOf(e[i]) === -1 || KA.concat(BA).indexOf(a) !== -1 && B === Qe)
    return b;
  if (B === 41 && a === 41) {
    for (var w = t[s], g = 1; w > 0 && A[--w] === 41; )
      g++;
    if (g % 2 != 0)
      return b;
  }
  return B === Xe && a === We ? b : Ye;
}, zo = function(e, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var t = function(i, B) {
    B === void 0 && (B = "strict");
    var c = [], a = [], l = [];
    return i.forEach(function(u, w) {
      var g = yr.get(u);
      if (g > 50 ? (l.push(!0), g -= 50) : l.push(!1), ["normal", "auto", "loose"].indexOf(B) !== -1 && [8208, 8211, 12316, 12448].indexOf(u) !== -1)
        return a.push(w), c.push(16);
      if (g === 4 || g === 11) {
        if (w === 0)
          return a.push(w), c.push(oe);
        var d = c[w - 1];
        return Zo.indexOf(d) === -1 ? (a.push(a[w - 1]), c.push(d)) : (a.push(w), c.push(oe));
      }
      return a.push(w), g === 31 ? c.push(B === "strict" ? fr : be) : g === ln || g === 29 ? c.push(oe) : g === 43 ? u >= 131072 && u <= 196605 || u >= 196608 && u <= 262141 ? c.push(be) : c.push(oe) : void c.push(g);
    }), [a, c, l];
  }(e, A.lineBreak), r = t[0], n = t[1], s = t[2];
  A.wordBreak !== "break-all" && A.wordBreak !== "break-word" || (n = n.map(function(i) {
    return [BA, oe, ln].indexOf(i) !== -1 ? be : i;
  }));
  var o = A.wordBreak === "keep-all" ? s.map(function(i, B) {
    return i && e[B] >= 19968 && e[B] <= 40959;
  }) : void 0;
  return [r, n, o];
}, $o = function() {
  function e(A, t, r, n) {
    this.codePoints = A, this.required = t === "!", this.start = r, this.end = n;
  }
  return e.prototype.slice = function() {
    return N.apply(void 0, this.codePoints.slice(this.start, this.end));
  }, e;
}(), sA = 45, zA = 43, mA = -1, tA = function(e) {
  return e >= 48 && e <= 57;
}, te = function(e) {
  return tA(e) || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}, Ze = function(e) {
  return e === 10 || e === 9 || e === 32;
}, pt = function(e) {
  return function(A) {
    return function(t) {
      return t >= 97 && t <= 122;
    }(A) || function(t) {
      return t >= 65 && t <= 90;
    }(A);
  }(e) || function(A) {
    return A >= 128;
  }(e) || e === 95;
}, dn = function(e) {
  return pt(e) || tA(e) || e === sA;
}, Ai = function(e) {
  return e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e === 127;
}, GA = function(e, A) {
  return e === 92 && A !== 10;
}, je = function(e, A, t) {
  return e === sA ? pt(A) || GA(A, t) : !!pt(e) || !(e !== 92 || !GA(e, A));
}, qt = function(e, A, t) {
  return e === zA || e === sA ? !!tA(A) || A === 46 && tA(t) : tA(e === 46 ? A : e);
}, ei = function(e) {
  var A = 0, t = 1;
  e[A] !== zA && e[A] !== sA || (e[A] === sA && (t = -1), A++);
  for (var r = []; tA(e[A]); )
    r.push(e[A++]);
  var n = r.length ? parseInt(N.apply(void 0, r), 10) : 0;
  e[A] === 46 && A++;
  for (var s = []; tA(e[A]); )
    s.push(e[A++]);
  var o = s.length, i = o ? parseInt(N.apply(void 0, s), 10) : 0;
  e[A] !== 69 && e[A] !== 101 || A++;
  var B = 1;
  e[A] !== zA && e[A] !== sA || (e[A] === sA && (B = -1), A++);
  for (var c = []; tA(e[A]); )
    c.push(e[A++]);
  var a = c.length ? parseInt(N.apply(void 0, c), 10) : 0;
  return t * (n + i * Math.pow(10, -o)) * Math.pow(10, B * a);
}, ti = { type: 2 }, ri = { type: 3 }, ni = { type: 4 }, si = { type: 13 }, oi = { type: 8 }, ii = { type: 21 }, ai = { type: 9 }, Bi = { type: 10 }, ci = { type: 11 }, li = { type: 12 }, ui = { type: 14 }, qe = { type: 23 }, gi = { type: 1 }, wi = { type: 25 }, di = { type: 24 }, Qi = { type: 26 }, hi = { type: 27 }, Ci = { type: 28 }, Ui = { type: 29 }, Fi = { type: 31 }, vr = { type: 32 }, bs = function() {
  function e() {
    this._value = [];
  }
  return e.prototype.write = function(A) {
    this._value = this._value.concat(Ft(A));
  }, e.prototype.read = function() {
    for (var A = [], t = this.consumeToken(); t !== vr; )
      A.push(t), t = this.consumeToken();
    return A;
  }, e.prototype.consumeToken = function() {
    var A = this.consumeCodePoint();
    switch (A) {
      case 34:
        return this.consumeStringToken(34);
      case 35:
        var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
        if (dn(t) || GA(r, n)) {
          var s = je(t, r, n) ? 2 : 1;
          return { type: 5, value: this.consumeName(), flags: s };
        }
        break;
      case 36:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), si;
        break;
      case 39:
        return this.consumeStringToken(39);
      case 40:
        return ti;
      case 41:
        return ri;
      case 42:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), ui;
        break;
      case zA:
        if (qt(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case 44:
        return ni;
      case sA:
        var o = A, i = this.peekCodePoint(0), B = this.peekCodePoint(1);
        if (qt(o, i, B))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        if (je(o, i, B))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        if (i === sA && B === 62)
          return this.consumeCodePoint(), this.consumeCodePoint(), di;
        break;
      case 46:
        if (qt(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case 47:
        if (this.peekCodePoint(0) === 42)
          for (this.consumeCodePoint(); ; ) {
            var c = this.consumeCodePoint();
            if (c === 42 && (c = this.consumeCodePoint()) === 47)
              return this.consumeToken();
            if (c === mA)
              return this.consumeToken();
          }
        break;
      case 58:
        return Qi;
      case 59:
        return hi;
      case 60:
        if (this.peekCodePoint(0) === 33 && this.peekCodePoint(1) === sA && this.peekCodePoint(2) === sA)
          return this.consumeCodePoint(), this.consumeCodePoint(), wi;
        break;
      case 64:
        var a = this.peekCodePoint(0), l = this.peekCodePoint(1), u = this.peekCodePoint(2);
        if (je(a, l, u))
          return { type: 7, value: this.consumeName() };
        break;
      case 91:
        return Ci;
      case 92:
        if (GA(A, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        break;
      case 93:
        return Ui;
      case 61:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), oi;
        break;
      case 123:
        return ci;
      case 125:
        return li;
      case 117:
      case 85:
        var w = this.peekCodePoint(0), g = this.peekCodePoint(1);
        return w !== zA || !te(g) && g !== 63 || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
      case 124:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), ai;
        if (this.peekCodePoint(0) === 124)
          return this.consumeCodePoint(), ii;
        break;
      case 126:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), Bi;
        break;
      case mA:
        return vr;
    }
    return Ze(A) ? (this.consumeWhiteSpace(), Fi) : tA(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : pt(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: N(A) };
  }, e.prototype.consumeCodePoint = function() {
    var A = this._value.shift();
    return A === void 0 ? -1 : A;
  }, e.prototype.reconsumeCodePoint = function(A) {
    this._value.unshift(A);
  }, e.prototype.peekCodePoint = function(A) {
    return A >= this._value.length ? -1 : this._value[A];
  }, e.prototype.consumeUnicodeRangeToken = function() {
    for (var A = [], t = this.consumeCodePoint(); te(t) && A.length < 6; )
      A.push(t), t = this.consumeCodePoint();
    for (var r = !1; t === 63 && A.length < 6; )
      A.push(t), t = this.consumeCodePoint(), r = !0;
    if (r)
      return { type: 30, start: parseInt(N.apply(void 0, A.map(function(o) {
        return o === 63 ? 48 : o;
      })), 16), end: parseInt(N.apply(void 0, A.map(function(o) {
        return o === 63 ? 70 : o;
      })), 16) };
    var n = parseInt(N.apply(void 0, A), 16);
    if (this.peekCodePoint(0) === sA && te(this.peekCodePoint(1))) {
      this.consumeCodePoint(), t = this.consumeCodePoint();
      for (var s = []; te(t) && s.length < 6; )
        s.push(t), t = this.consumeCodePoint();
      return { type: 30, start: n, end: parseInt(N.apply(void 0, s), 16) };
    }
    return { type: 30, start: n, end: n };
  }, e.prototype.consumeIdentLikeToken = function() {
    var A = this.consumeName();
    return A.toLowerCase() === "url" && this.peekCodePoint(0) === 40 ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === 40 ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
  }, e.prototype.consumeUrlToken = function() {
    var A = [];
    if (this.consumeWhiteSpace(), this.peekCodePoint(0) === mA)
      return { type: 22, value: "" };
    var t = this.peekCodePoint(0);
    if (t === 39 || t === 34) {
      var r = this.consumeStringToken(this.consumeCodePoint());
      return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === mA || this.peekCodePoint(0) === 41) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), qe);
    }
    for (; ; ) {
      var n = this.consumeCodePoint();
      if (n === mA || n === 41)
        return { type: 22, value: N.apply(void 0, A) };
      if (Ze(n))
        return this.consumeWhiteSpace(), this.peekCodePoint(0) === mA || this.peekCodePoint(0) === 41 ? (this.consumeCodePoint(), { type: 22, value: N.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), qe);
      if (n === 34 || n === 39 || n === 40 || Ai(n))
        return this.consumeBadUrlRemnants(), qe;
      if (n === 92) {
        if (!GA(n, this.peekCodePoint(0)))
          return this.consumeBadUrlRemnants(), qe;
        A.push(this.consumeEscapedCodePoint());
      } else
        A.push(n);
    }
  }, e.prototype.consumeWhiteSpace = function() {
    for (; Ze(this.peekCodePoint(0)); )
      this.consumeCodePoint();
  }, e.prototype.consumeBadUrlRemnants = function() {
    for (; ; ) {
      var A = this.consumeCodePoint();
      if (A === 41 || A === mA)
        return;
      GA(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
    }
  }, e.prototype.consumeStringSlice = function(A) {
    for (var t = ""; A > 0; ) {
      var r = Math.min(5e4, A);
      t += N.apply(void 0, this._value.splice(0, r)), A -= r;
    }
    return this._value.shift(), t;
  }, e.prototype.consumeStringToken = function(A) {
    for (var t = "", r = 0; ; ) {
      var n = this._value[r];
      if (n === mA || n === void 0 || n === A)
        return { type: 0, value: t += this.consumeStringSlice(r) };
      if (n === 10)
        return this._value.splice(0, r), gi;
      if (n === 92) {
        var s = this._value[r + 1];
        s !== mA && s !== void 0 && (s === 10 ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : GA(n, s) && (t += this.consumeStringSlice(r), t += N(this.consumeEscapedCodePoint()), r = -1));
      }
      r++;
    }
  }, e.prototype.consumeNumber = function() {
    var A = [], t = 4, r = this.peekCodePoint(0);
    for (r !== zA && r !== sA || A.push(this.consumeCodePoint()); tA(this.peekCodePoint(0)); )
      A.push(this.consumeCodePoint());
    r = this.peekCodePoint(0);
    var n = this.peekCodePoint(1);
    if (r === 46 && tA(n))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = 8; tA(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    r = this.peekCodePoint(0), n = this.peekCodePoint(1);
    var s = this.peekCodePoint(2);
    if ((r === 69 || r === 101) && ((n === zA || n === sA) && tA(s) || tA(n)))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = 8; tA(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    return [ei(A), t];
  }, e.prototype.consumeNumericToken = function() {
    var A = this.consumeNumber(), t = A[0], r = A[1], n = this.peekCodePoint(0), s = this.peekCodePoint(1), o = this.peekCodePoint(2);
    return je(n, s, o) ? { type: 15, number: t, flags: r, unit: this.consumeName() } : n === 37 ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
  }, e.prototype.consumeEscapedCodePoint = function() {
    var A = this.consumeCodePoint();
    if (te(A)) {
      for (var t = N(A); te(this.peekCodePoint(0)) && t.length < 6; )
        t += N(this.consumeCodePoint());
      Ze(this.peekCodePoint(0)) && this.consumeCodePoint();
      var r = parseInt(t, 16);
      return r === 0 || function(n) {
        return n >= 55296 && n <= 57343;
      }(r) || r > 1114111 ? 65533 : r;
    }
    return A === mA ? 65533 : A;
  }, e.prototype.consumeName = function() {
    for (var A = ""; ; ) {
      var t = this.consumeCodePoint();
      if (dn(t))
        A += N(t);
      else {
        if (!GA(t, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(t), A;
        A += N(this.consumeEscapedCodePoint());
      }
    }
  }, e;
}(), Ls = function() {
  function e(A) {
    this._tokens = A;
  }
  return e.create = function(A) {
    var t = new bs();
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
      if (r.type === 32 || fi(r, A))
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
    return A === void 0 ? vr : A;
  }, e.prototype.reconsumeToken = function(A) {
    this._tokens.unshift(A);
  }, e;
}(), Oe = function(e) {
  return e.type === 15;
}, ie = function(e) {
  return e.type === 17;
}, x = function(e) {
  return e.type === 20;
}, pi = function(e) {
  return e.type === 0;
}, br = function(e, A) {
  return x(e) && e.value === A;
}, Qn = function(e) {
  return e.type !== 31;
}, ge = function(e) {
  return e.type !== 31 && e.type !== 4;
}, yA = function(e) {
  var A = [], t = [];
  return e.forEach(function(r) {
    if (r.type === 4) {
      if (t.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      return A.push(t), void (t = []);
    }
    r.type !== 31 && t.push(r);
  }), t.length && A.push(t), A;
}, fi = function(e, A) {
  return A === 11 && e.type === 12 || A === 28 && e.type === 29 || A === 2 && e.type === 3;
}, XA = function(e) {
  return e.type === 17 || e.type === 15;
}, _ = function(e) {
  return e.type === 16 || XA(e);
}, Ks = function(e) {
  return e.length > 1 ? [e[0], e[1]] : [e[0]];
}, q = { type: 17, number: 0, flags: 4 }, _r = { type: 16, number: 50, flags: 4 }, PA = { type: 16, number: 100, flags: 4 }, Ee = function(e, A, t) {
  var r = e[0], n = e[1];
  return [M(r, A), M(n !== void 0 ? n : r, t)];
}, M = function(e, A) {
  if (e.type === 16)
    return e.number / 100 * A;
  if (Oe(e))
    switch (e.unit) {
      case "rem":
      case "em":
        return 16 * e.number;
      default:
        return e.number;
    }
  return e.number;
}, ks = "grad", Ds = "turn", Mt = function(e, A) {
  if (A.type === 15)
    switch (A.unit) {
      case "deg":
        return Math.PI * A.number / 180;
      case ks:
        return Math.PI / 200 * A.number;
      case "rad":
        return A.number;
      case Ds:
        return 2 * Math.PI * A.number;
    }
  throw new Error("Unsupported angle type");
}, Ss = function(e) {
  return e.type === 15 && (e.unit === "deg" || e.unit === ks || e.unit === "rad" || e.unit === Ds);
}, xs = function(e) {
  switch (e.filter(x).map(function(A) {
    return A.value;
  }).join(" ")) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [q, q];
    case "to top":
    case "bottom":
      return hA(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [q, PA];
    case "to right":
    case "left":
      return hA(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [PA, PA];
    case "to bottom":
    case "top":
      return hA(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [PA, q];
    case "to left":
    case "right":
      return hA(270);
  }
  return 0;
}, hA = function(e) {
  return Math.PI * e / 180;
}, _A = function(e, A) {
  if (A.type === 18) {
    var t = mi[A.name];
    if (t === void 0)
      throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
    return t(e, A.values);
  }
  if (A.type === 5) {
    if (A.value.length === 3) {
      var r = A.value.substring(0, 1), n = A.value.substring(1, 2), s = A.value.substring(2, 3);
      return NA(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(s + s, 16), 1);
    }
    if (A.value.length === 4) {
      r = A.value.substring(0, 1), n = A.value.substring(1, 2), s = A.value.substring(2, 3);
      var o = A.value.substring(3, 4);
      return NA(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(s + s, 16), parseInt(o + o, 16) / 255);
    }
    if (A.value.length === 6)
      return r = A.value.substring(0, 2), n = A.value.substring(2, 4), s = A.value.substring(4, 6), NA(parseInt(r, 16), parseInt(n, 16), parseInt(s, 16), 1);
    if (A.value.length === 8)
      return r = A.value.substring(0, 2), n = A.value.substring(2, 4), s = A.value.substring(4, 6), o = A.value.substring(6, 8), NA(parseInt(r, 16), parseInt(n, 16), parseInt(s, 16), parseInt(o, 16) / 255);
  }
  if (A.type === 20) {
    var i = DA[A.value.toUpperCase()];
    if (i !== void 0)
      return i;
  }
  return DA.TRANSPARENT;
}, JA = function(e) {
  return (255 & e) == 0;
}, Y = function(e) {
  var A = 255 & e, t = 255 & e >> 8, r = 255 & e >> 16, n = 255 & e >> 24;
  return A < 255 ? "rgba(" + n + "," + r + "," + t + "," + A / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
}, NA = function(e, A, t, r) {
  return (e << 24 | A << 16 | t << 8 | Math.round(255 * r) << 0) >>> 0;
}, hn = function(e, A) {
  if (e.type === 17)
    return e.number;
  if (e.type === 16) {
    var t = A === 3 ? 1 : 255;
    return A === 3 ? e.number / 100 * t : Math.round(e.number / 100 * t);
  }
  return 0;
}, Cn = function(e, A) {
  var t = A.filter(ge);
  if (t.length === 3) {
    var r = t.map(hn), n = r[0], s = r[1], o = r[2];
    return NA(n, s, o, 1);
  }
  if (t.length === 4) {
    var i = t.map(hn), B = (n = i[0], s = i[1], o = i[2], i[3]);
    return NA(n, s, o, B);
  }
  return 0;
};
function zt(e, A, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (A - e) * t * 6 + e : t < 0.5 ? A : t < 2 / 3 ? 6 * (A - e) * (2 / 3 - t) + e : e;
}
var Un = function(e, A) {
  var t = A.filter(ge), r = t[0], n = t[1], s = t[2], o = t[3], i = (r.type === 17 ? hA(r.number) : Mt(e, r)) / (2 * Math.PI), B = _(n) ? n.number / 100 : 0, c = _(s) ? s.number / 100 : 0, a = o !== void 0 && _(o) ? M(o, 1) : 1;
  if (B === 0)
    return NA(255 * c, 255 * c, 255 * c, 1);
  var l = c <= 0.5 ? c * (B + 1) : c + B - c * B, u = 2 * c - l, w = zt(u, l, i + 1 / 3), g = zt(u, l, i), d = zt(u, l, i - 1 / 3);
  return NA(255 * w, 255 * g, 255 * d, a);
}, mi = { hsl: Un, hsla: Un, rgb: Cn, rgba: Cn }, Le = function(e, A) {
  return _A(e, Ls.create(A).parseComponentValue());
}, DA = { ALICEBLUE: 4042850303, ANTIQUEWHITE: 4209760255, AQUA: 16777215, AQUAMARINE: 2147472639, AZURE: 4043309055, BEIGE: 4126530815, BISQUE: 4293182719, BLACK: 255, BLANCHEDALMOND: 4293643775, BLUE: 65535, BLUEVIOLET: 2318131967, BROWN: 2771004159, BURLYWOOD: 3736635391, CADETBLUE: 1604231423, CHARTREUSE: 2147418367, CHOCOLATE: 3530104575, CORAL: 4286533887, CORNFLOWERBLUE: 1687547391, CORNSILK: 4294499583, CRIMSON: 3692313855, CYAN: 16777215, DARKBLUE: 35839, DARKCYAN: 9145343, DARKGOLDENROD: 3095837695, DARKGRAY: 2846468607, DARKGREEN: 6553855, DARKGREY: 2846468607, DARKKHAKI: 3182914559, DARKMAGENTA: 2332068863, DARKOLIVEGREEN: 1433087999, DARKORANGE: 4287365375, DARKORCHID: 2570243327, DARKRED: 2332033279, DARKSALMON: 3918953215, DARKSEAGREEN: 2411499519, DARKSLATEBLUE: 1211993087, DARKSLATEGRAY: 793726975, DARKSLATEGREY: 793726975, DARKTURQUOISE: 13554175, DARKVIOLET: 2483082239, DEEPPINK: 4279538687, DEEPSKYBLUE: 12582911, DIMGRAY: 1768516095, DIMGREY: 1768516095, DODGERBLUE: 512819199, FIREBRICK: 2988581631, FLORALWHITE: 4294635775, FORESTGREEN: 579543807, FUCHSIA: 4278255615, GAINSBORO: 3705462015, GHOSTWHITE: 4177068031, GOLD: 4292280575, GOLDENROD: 3668254975, GRAY: 2155905279, GREEN: 8388863, GREENYELLOW: 2919182335, GREY: 2155905279, HONEYDEW: 4043305215, HOTPINK: 4285117695, INDIANRED: 3445382399, INDIGO: 1258324735, IVORY: 4294963455, KHAKI: 4041641215, LAVENDER: 3873897215, LAVENDERBLUSH: 4293981695, LAWNGREEN: 2096890111, LEMONCHIFFON: 4294626815, LIGHTBLUE: 2916673279, LIGHTCORAL: 4034953471, LIGHTCYAN: 3774873599, LIGHTGOLDENRODYELLOW: 4210742015, LIGHTGRAY: 3553874943, LIGHTGREEN: 2431553791, LIGHTGREY: 3553874943, LIGHTPINK: 4290167295, LIGHTSALMON: 4288707327, LIGHTSEAGREEN: 548580095, LIGHTSKYBLUE: 2278488831, LIGHTSLATEGRAY: 2005441023, LIGHTSLATEGREY: 2005441023, LIGHTSTEELBLUE: 2965692159, LIGHTYELLOW: 4294959359, LIME: 16711935, LIMEGREEN: 852308735, LINEN: 4210091775, MAGENTA: 4278255615, MAROON: 2147483903, MEDIUMAQUAMARINE: 1724754687, MEDIUMBLUE: 52735, MEDIUMORCHID: 3126187007, MEDIUMPURPLE: 2473647103, MEDIUMSEAGREEN: 1018393087, MEDIUMSLATEBLUE: 2070474495, MEDIUMSPRINGGREEN: 16423679, MEDIUMTURQUOISE: 1221709055, MEDIUMVIOLETRED: 3340076543, MIDNIGHTBLUE: 421097727, MINTCREAM: 4127193855, MISTYROSE: 4293190143, MOCCASIN: 4293178879, NAVAJOWHITE: 4292783615, NAVY: 33023, OLDLACE: 4260751103, OLIVE: 2155872511, OLIVEDRAB: 1804477439, ORANGE: 4289003775, ORANGERED: 4282712319, ORCHID: 3664828159, PALEGOLDENROD: 4008225535, PALEGREEN: 2566625535, PALETURQUOISE: 2951671551, PALEVIOLETRED: 3681588223, PAPAYAWHIP: 4293907967, PEACHPUFF: 4292524543, PERU: 3448061951, PINK: 4290825215, PLUM: 3718307327, POWDERBLUE: 2967529215, PURPLE: 2147516671, REBECCAPURPLE: 1714657791, RED: 4278190335, ROSYBROWN: 3163525119, ROYALBLUE: 1097458175, SADDLEBROWN: 2336560127, SALMON: 4202722047, SANDYBROWN: 4104413439, SEAGREEN: 780883967, SEASHELL: 4294307583, SIENNA: 2689740287, SILVER: 3233857791, SKYBLUE: 2278484991, SLATEBLUE: 1784335871, SLATEGRAY: 1887473919, SLATEGREY: 1887473919, SNOW: 4294638335, SPRINGGREEN: 16744447, STEELBLUE: 1182971135, TAN: 3535047935, TEAL: 8421631, THISTLE: 3636451583, TOMATO: 4284696575, TRANSPARENT: 0, TURQUOISE: 1088475391, VIOLET: 4001558271, WHEAT: 4125012991, WHITE: 4294967295, WHITESMOKE: 4126537215, YELLOW: 4294902015, YELLOWGREEN: 2597139199 }, Ei = { name: "background-clip", initialValue: "border-box", prefix: !1, type: 1, parse: function(e, A) {
  return A.map(function(t) {
    if (x(t))
      switch (t.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, Hi = { name: "background-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, ft = function(e, A) {
  var t = _A(e, A[0]), r = A[1];
  return r && _(r) ? { color: t, stop: r } : { color: t, stop: null };
}, Fn = function(e, A) {
  var t = e[0], r = e[e.length - 1];
  t.stop === null && (t.stop = q), r.stop === null && (r.stop = PA);
  for (var n = [], s = 0, o = 0; o < e.length; o++) {
    var i = e[o].stop;
    if (i !== null) {
      var B = M(i, A);
      B > s ? n.push(B) : n.push(s), s = B;
    } else
      n.push(null);
  }
  var c = null;
  for (o = 0; o < n.length; o++) {
    var a = n[o];
    if (a === null)
      c === null && (c = o);
    else if (c !== null) {
      for (var l = o - c, u = (a - n[c - 1]) / (l + 1), w = 1; w <= l; w++)
        n[c + w - 1] = u * w;
      c = null;
    }
  }
  return e.map(function(g, d) {
    return { color: g.color, stop: Math.max(Math.min(1, n[d] / A), 0) };
  });
}, yi = function(e, A, t) {
  var r = typeof e == "number" ? e : function(a, l, u) {
    var w = l / 2, g = u / 2, d = M(a[0], l) - w, h = g - M(a[1], u);
    return (Math.atan2(h, d) + 2 * Math.PI) % (2 * Math.PI);
  }(e, A, t), n = Math.abs(A * Math.sin(r)) + Math.abs(t * Math.cos(r)), s = A / 2, o = t / 2, i = n / 2, B = Math.sin(r - Math.PI / 2) * i, c = Math.cos(r - Math.PI / 2) * i;
  return [n, s - c, s + c, o - B, o + B];
}, UA = function(e, A) {
  return Math.sqrt(e * e + A * A);
}, pn = function(e, A, t, r, n) {
  return [[0, 0], [0, A], [e, 0], [e, A]].reduce(function(s, o) {
    var i = o[0], B = o[1], c = UA(t - i, r - B);
    return (n ? c < s.optimumDistance : c > s.optimumDistance) ? { optimumCorner: o, optimumDistance: c } : s;
  }, { optimumDistance: n ? 1 / 0 : -1 / 0, optimumCorner: null }).optimumCorner;
}, ze = function(e, A) {
  var t = hA(180), r = [];
  return yA(A).forEach(function(n, s) {
    if (s === 0) {
      var o = n[0];
      if (o.type === 20 && ["top", "left", "right", "bottom"].indexOf(o.value) !== -1)
        return void (t = xs(n));
      if (Ss(o))
        return void (t = (Mt(e, o) + hA(270)) % hA(360));
    }
    var i = ft(e, n);
    r.push(i);
  }), { angle: t, stops: r, type: 1 };
}, Os = "closest-side", Ts = "farthest-side", Ms = "closest-corner", Rs = "farthest-corner", Gs = "circle", Vs = "ellipse", Ps = "cover", Ns = "contain", $e = function(e, A) {
  var t = 0, r = 3, n = [], s = [];
  return yA(A).forEach(function(o, i) {
    var B = !0;
    if (i === 0 ? B = o.reduce(function(a, l) {
      if (x(l))
        switch (l.value) {
          case "center":
            return s.push(_r), !1;
          case "top":
          case "left":
            return s.push(q), !1;
          case "right":
          case "bottom":
            return s.push(PA), !1;
        }
      else if (_(l) || XA(l))
        return s.push(l), !1;
      return a;
    }, B) : i === 1 && (B = o.reduce(function(a, l) {
      if (x(l))
        switch (l.value) {
          case Gs:
            return t = 0, !1;
          case Vs:
            return t = 1, !1;
          case Ns:
          case Os:
            return r = 0, !1;
          case Ts:
            return r = 1, !1;
          case Ms:
            return r = 2, !1;
          case Ps:
          case Rs:
            return r = 3, !1;
        }
      else if (XA(l) || _(l))
        return Array.isArray(r) || (r = []), r.push(l), !1;
      return a;
    }, B)), B) {
      var c = ft(e, o);
      n.push(c);
    }
  }), { size: r, shape: t, stops: n, position: s, type: 2 };
}, Jr = function(e, A) {
  if (A.type === 22) {
    var t = { url: A.value, type: 0 };
    return e.cache.addImage(A.value), t;
  }
  if (A.type === 18) {
    var r = _s[A.name];
    if (r === void 0)
      throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
    return r(e, A.values);
  }
  throw new Error("Unsupported image type " + A.type);
}, ue, _s = { "linear-gradient": function(e, A) {
  var t = hA(180), r = [];
  return yA(A).forEach(function(n, s) {
    if (s === 0) {
      var o = n[0];
      if (o.type === 20 && o.value === "to")
        return void (t = xs(n));
      if (Ss(o))
        return void (t = Mt(e, o));
    }
    var i = ft(e, n);
    r.push(i);
  }), { angle: t, stops: r, type: 1 };
}, "-moz-linear-gradient": ze, "-ms-linear-gradient": ze, "-o-linear-gradient": ze, "-webkit-linear-gradient": ze, "radial-gradient": function(e, A) {
  var t = 0, r = 3, n = [], s = [];
  return yA(A).forEach(function(o, i) {
    var B = !0;
    if (i === 0) {
      var c = !1;
      B = o.reduce(function(l, u) {
        if (c)
          if (x(u))
            switch (u.value) {
              case "center":
                return s.push(_r), l;
              case "top":
              case "left":
                return s.push(q), l;
              case "right":
              case "bottom":
                return s.push(PA), l;
            }
          else
            (_(u) || XA(u)) && s.push(u);
        else if (x(u))
          switch (u.value) {
            case Gs:
              return t = 0, !1;
            case Vs:
              return t = 1, !1;
            case "at":
              return c = !0, !1;
            case Os:
              return r = 0, !1;
            case Ps:
            case Ts:
              return r = 1, !1;
            case Ns:
            case Ms:
              return r = 2, !1;
            case Rs:
              return r = 3, !1;
          }
        else if (XA(u) || _(u))
          return Array.isArray(r) || (r = []), r.push(u), !1;
        return l;
      }, B);
    }
    if (B) {
      var a = ft(e, o);
      n.push(a);
    }
  }), { size: r, shape: t, stops: n, position: s, type: 2 };
}, "-moz-radial-gradient": $e, "-ms-radial-gradient": $e, "-o-radial-gradient": $e, "-webkit-radial-gradient": $e, "-webkit-gradient": function(e, A) {
  var t = hA(180), r = [], n = 1;
  return yA(A).forEach(function(s, o) {
    var i = s[0];
    if (o === 0) {
      if (x(i) && i.value === "linear")
        return void (n = 1);
      if (x(i) && i.value === "radial")
        return void (n = 2);
    }
    if (i.type === 18) {
      if (i.name === "from") {
        var B = _A(e, i.values[0]);
        r.push({ stop: q, color: B });
      } else if (i.name === "to")
        B = _A(e, i.values[0]), r.push({ stop: PA, color: B });
      else if (i.name === "color-stop") {
        var c = i.values.filter(ge);
        if (c.length === 2) {
          B = _A(e, c[1]);
          var a = c[0];
          ie(a) && r.push({ stop: { type: 16, number: 100 * a.number, flags: a.flags }, color: B });
        }
      }
    }
  }), n === 1 ? { angle: (t + hA(180)) % hA(360), stops: r, type: n } : { size: 3, shape: 0, stops: r, position: [], type: n };
} }, Ii = { name: "background-image", initialValue: "none", type: 1, prefix: !1, parse: function(e, A) {
  if (A.length === 0)
    return [];
  var t = A[0];
  return t.type === 20 && t.value === "none" ? [] : A.filter(function(r) {
    return ge(r) && function(n) {
      return !(n.type === 20 && n.value === "none" || n.type === 18 && !_s[n.name]);
    }(r);
  }).map(function(r) {
    return Jr(e, r);
  });
} }, vi = { name: "background-origin", initialValue: "border-box", prefix: !1, type: 1, parse: function(e, A) {
  return A.map(function(t) {
    if (x(t))
      switch (t.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, bi = { name: "background-position", initialValue: "0% 0%", type: 1, prefix: !1, parse: function(e, A) {
  return yA(A).map(function(t) {
    return t.filter(_);
  }).map(Ks);
} }, Li = { name: "background-repeat", initialValue: "repeat", prefix: !1, type: 1, parse: function(e, A) {
  return yA(A).map(function(t) {
    return t.filter(x).map(function(r) {
      return r.value;
    }).join(" ");
  }).map(Ki);
} }, Ki = function(e) {
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
})(ue || (ue = {}));
var mt, ki = { name: "background-size", initialValue: "0", prefix: !1, type: 1, parse: function(e, A) {
  return yA(A).map(function(t) {
    return t.filter(Di);
  });
} }, Di = function(e) {
  return x(e) || _(e);
}, Rt = function(e) {
  return { name: "border-" + e + "-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" };
}, Si = Rt("top"), xi = Rt("right"), Oi = Rt("bottom"), Ti = Rt("left"), Gt = function(e) {
  return { name: "border-radius-" + e, initialValue: "0 0", prefix: !1, type: 1, parse: function(A, t) {
    return Ks(t.filter(_));
  } };
}, Mi = Gt("top-left"), Ri = Gt("top-right"), Gi = Gt("bottom-right"), Vi = Gt("bottom-left"), Vt = function(e) {
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
}, Pi = Vt("top"), Ni = Vt("right"), _i = Vt("bottom"), Ji = Vt("left"), Pt = function(e) {
  return { name: "border-" + e + "-width", initialValue: "0", type: 0, prefix: !1, parse: function(A, t) {
    return Oe(t) ? t.number : 0;
  } };
}, Xi = Pt("top"), Wi = Pt("right"), Yi = Pt("bottom"), Zi = Pt("left"), ji = { name: "color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, qi = { name: "direction", initialValue: "ltr", prefix: !1, type: 2, parse: function(e, A) {
  return A === "rtl" ? 1 : 0;
} }, zi = { name: "display", initialValue: "inline-block", prefix: !1, type: 1, parse: function(e, A) {
  return A.filter(x).reduce(function(t, r) {
    return t | $i(r.value);
  }, 0);
} }, $i = function(e) {
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
}, Aa = { name: "float", initialValue: "none", prefix: !1, type: 2, parse: function(e, A) {
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
} }, ea = { name: "letter-spacing", initialValue: "0", prefix: !1, type: 0, parse: function(e, A) {
  return A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0;
} };
(function(e) {
  e.NORMAL = "normal", e.STRICT = "strict";
})(mt || (mt = {}));
var Ke, ta = { name: "line-break", initialValue: "normal", prefix: !1, type: 2, parse: function(e, A) {
  return A === "strict" ? mt.STRICT : mt.NORMAL;
} }, ra = { name: "line-height", initialValue: "normal", prefix: !1, type: 4 }, fn = function(e, A) {
  return x(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : _(e) ? M(e, A) : A;
}, na = { name: "list-style-image", initialValue: "none", type: 0, prefix: !1, parse: function(e, A) {
  return A.type === 20 && A.value === "none" ? null : Jr(e, A);
} }, sa = { name: "list-style-position", initialValue: "outside", prefix: !1, type: 2, parse: function(e, A) {
  return A === "inside" ? 0 : 1;
} }, Lr = { name: "list-style-type", initialValue: "none", prefix: !1, type: 2, parse: function(e, A) {
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
} }, Nt = function(e) {
  return { name: "margin-" + e, initialValue: "0", prefix: !1, type: 4 };
}, oa = Nt("top"), ia = Nt("right"), aa = Nt("bottom"), Ba = Nt("left"), ca = { name: "overflow", initialValue: "visible", prefix: !1, type: 1, parse: function(e, A) {
  return A.filter(x).map(function(t) {
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
} }, la = { name: "overflow-wrap", initialValue: "normal", prefix: !1, type: 2, parse: function(e, A) {
  return A === "break-word" ? "break-word" : "normal";
} }, _t = function(e) {
  return { name: "padding-" + e, initialValue: "0", prefix: !1, type: 3, format: "length-percentage" };
}, ua = _t("top"), ga = _t("right"), wa = _t("bottom"), da = _t("left"), Qa = { name: "text-align", initialValue: "left", prefix: !1, type: 2, parse: function(e, A) {
  switch (A) {
    case "right":
      return 2;
    case "center":
    case "justify":
      return 1;
    default:
      return 0;
  }
} }, ha = { name: "position", initialValue: "static", prefix: !1, type: 2, parse: function(e, A) {
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
} }, Ca = { name: "text-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(e, A) {
  return A.length === 1 && br(A[0], "none") ? [] : yA(A).map(function(t) {
    for (var r = { color: DA.TRANSPARENT, offsetX: q, offsetY: q, blur: q }, n = 0, s = 0; s < t.length; s++) {
      var o = t[s];
      XA(o) ? (n === 0 ? r.offsetX = o : n === 1 ? r.offsetY = o : r.blur = o, n++) : r.color = _A(e, o);
    }
    return r;
  });
} }, Ua = { name: "text-transform", initialValue: "none", prefix: !1, type: 2, parse: function(e, A) {
  switch (A) {
    case "uppercase":
      return 2;
    case "lowercase":
      return 1;
    case "capitalize":
      return 3;
  }
  return 0;
} }, Fa = { name: "transform", initialValue: "none", prefix: !0, type: 0, parse: function(e, A) {
  if (A.type === 20 && A.value === "none")
    return null;
  if (A.type === 18) {
    var t = pa[A.name];
    if (t === void 0)
      throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
    return t(A.values);
  }
  return null;
} }, pa = { matrix: function(e) {
  var A = e.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return A.length === 6 ? A : null;
}, matrix3d: function(e) {
  var A = e.filter(function(B) {
    return B.type === 17;
  }).map(function(B) {
    return B.number;
  }), t = A[0], r = A[1];
  A[2], A[3];
  var n = A[4], s = A[5];
  A[6], A[7], A[8], A[9], A[10], A[11];
  var o = A[12], i = A[13];
  return A[14], A[15], A.length === 16 ? [t, r, n, s, o, i] : null;
} }, mn = { type: 16, number: 50, flags: 4 }, fa = [mn, mn], ma = { name: "transform-origin", initialValue: "50% 50%", prefix: !0, type: 1, parse: function(e, A) {
  var t = A.filter(_);
  return t.length !== 2 ? fa : [t[0], t[1]];
} }, Ea = { name: "visible", initialValue: "none", prefix: !1, type: 2, parse: function(e, A) {
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
})(Ke || (Ke = {}));
for (var Ha = { name: "word-break", initialValue: "normal", prefix: !1, type: 2, parse: function(e, A) {
  switch (A) {
    case "break-all":
      return Ke.BREAK_ALL;
    case "keep-all":
      return Ke.KEEP_ALL;
    default:
      return Ke.NORMAL;
  }
} }, ya = { name: "z-index", initialValue: "auto", prefix: !1, type: 0, parse: function(e, A) {
  if (A.type === 20)
    return { auto: !0, order: 0 };
  if (ie(A))
    return { auto: !1, order: A.number };
  throw new Error("Invalid z-index number parsed");
} }, En = function(e, A) {
  if (A.type === 15)
    switch (A.unit.toLowerCase()) {
      case "s":
        return 1e3 * A.number;
      case "ms":
        return A.number;
    }
  throw new Error("Unsupported time type");
}, Ia = { name: "opacity", initialValue: "1", type: 0, prefix: !1, parse: function(e, A) {
  return ie(A) ? A.number : 1;
} }, va = { name: "text-decoration-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, ba = { name: "text-decoration-line", initialValue: "none", prefix: !1, type: 1, parse: function(e, A) {
  return A.filter(x).map(function(t) {
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
} }, La = { name: "font-family", initialValue: "", prefix: !1, type: 1, parse: function(e, A) {
  var t = [], r = [];
  return A.forEach(function(n) {
    switch (n.type) {
      case 20:
      case 0:
        t.push(n.value);
        break;
      case 17:
        t.push(n.number.toString());
        break;
      case 4:
        r.push(t.join(" ")), t.length = 0;
    }
  }), t.length && r.push(t.join(" ")), r.map(function(n) {
    return n.indexOf(" ") === -1 ? n : "'" + n + "'";
  });
} }, Ka = { name: "font-size", initialValue: "0", prefix: !1, type: 3, format: "length" }, ka = { name: "font-weight", initialValue: "normal", type: 0, prefix: !1, parse: function(e, A) {
  return ie(A) ? A.number : x(A) && A.value === "bold" ? 700 : 400;
} }, Da = { name: "font-variant", initialValue: "none", type: 1, prefix: !1, parse: function(e, A) {
  return A.filter(x).map(function(t) {
    return t.value;
  });
} }, Sa = { name: "font-style", initialValue: "normal", prefix: !1, type: 2, parse: function(e, A) {
  switch (A) {
    case "oblique":
      return "oblique";
    case "italic":
      return "italic";
    default:
      return "normal";
  }
} }, W = function(e, A) {
  return (e & A) != 0;
}, xa = { name: "content", initialValue: "none", type: 1, prefix: !1, parse: function(e, A) {
  if (A.length === 0)
    return [];
  var t = A[0];
  return t.type === 20 && t.value === "none" ? [] : A;
} }, Oa = { name: "counter-increment", initialValue: "none", prefix: !0, type: 1, parse: function(e, A) {
  if (A.length === 0)
    return null;
  var t = A[0];
  if (t.type === 20 && t.value === "none")
    return null;
  for (var r = [], n = A.filter(Qn), s = 0; s < n.length; s++) {
    var o = n[s], i = n[s + 1];
    if (o.type === 20) {
      var B = i && ie(i) ? i.number : 1;
      r.push({ counter: o.value, increment: B });
    }
  }
  return r;
} }, Ta = { name: "counter-reset", initialValue: "none", prefix: !0, type: 1, parse: function(e, A) {
  if (A.length === 0)
    return [];
  for (var t = [], r = A.filter(Qn), n = 0; n < r.length; n++) {
    var s = r[n], o = r[n + 1];
    if (x(s) && s.value !== "none") {
      var i = o && ie(o) ? o.number : 0;
      t.push({ counter: s.value, reset: i });
    }
  }
  return t;
} }, Ma = { name: "duration", initialValue: "0s", prefix: !1, type: 1, parse: function(e, A) {
  return A.filter(Oe).map(function(t) {
    return En(e, t);
  });
} }, Ra = { name: "quotes", initialValue: "none", prefix: !0, type: 1, parse: function(e, A) {
  if (A.length === 0)
    return null;
  var t = A[0];
  if (t.type === 20 && t.value === "none")
    return null;
  var r = [], n = A.filter(pi);
  if (n.length % 2 != 0)
    return null;
  for (var s = 0; s < n.length; s += 2) {
    var o = n[s].value, i = n[s + 1].value;
    r.push({ open: o, close: i });
  }
  return r;
} }, Hn = function(e, A, t) {
  if (!e)
    return "";
  var r = e[Math.min(A, e.length - 1)];
  return r ? t ? r.open : r.close : "";
}, Ga = { name: "box-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(e, A) {
  return A.length === 1 && br(A[0], "none") ? [] : yA(A).map(function(t) {
    for (var r = { color: 255, offsetX: q, offsetY: q, blur: q, spread: q, inset: !1 }, n = 0, s = 0; s < t.length; s++) {
      var o = t[s];
      br(o, "inset") ? r.inset = !0 : XA(o) ? (n === 0 ? r.offsetX = o : n === 1 ? r.offsetY = o : n === 2 ? r.blur = o : r.spread = o, n++) : r.color = _A(e, o);
    }
    return r;
  });
} }, Va = { name: "paint-order", initialValue: "normal", prefix: !1, type: 1, parse: function(e, A) {
  var t = [];
  return A.filter(x).forEach(function(r) {
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
} }, Pa = { name: "-webkit-text-stroke-color", initialValue: "currentcolor", prefix: !1, type: 3, format: "color" }, Na = { name: "-webkit-text-stroke-width", initialValue: "0", type: 0, prefix: !1, parse: function(e, A) {
  return Oe(A) ? A.number : 0;
} }, _a = function() {
  function e(A, t) {
    var r, n;
    this.animationDuration = m(A, Ma, t.animationDuration), this.backgroundClip = m(A, Ei, t.backgroundClip), this.backgroundColor = m(A, Hi, t.backgroundColor), this.backgroundImage = m(A, Ii, t.backgroundImage), this.backgroundOrigin = m(A, vi, t.backgroundOrigin), this.backgroundPosition = m(A, bi, t.backgroundPosition), this.backgroundRepeat = m(A, Li, t.backgroundRepeat), this.backgroundSize = m(A, ki, t.backgroundSize), this.borderTopColor = m(A, Si, t.borderTopColor), this.borderRightColor = m(A, xi, t.borderRightColor), this.borderBottomColor = m(A, Oi, t.borderBottomColor), this.borderLeftColor = m(A, Ti, t.borderLeftColor), this.borderTopLeftRadius = m(A, Mi, t.borderTopLeftRadius), this.borderTopRightRadius = m(A, Ri, t.borderTopRightRadius), this.borderBottomRightRadius = m(A, Gi, t.borderBottomRightRadius), this.borderBottomLeftRadius = m(A, Vi, t.borderBottomLeftRadius), this.borderTopStyle = m(A, Pi, t.borderTopStyle), this.borderRightStyle = m(A, Ni, t.borderRightStyle), this.borderBottomStyle = m(A, _i, t.borderBottomStyle), this.borderLeftStyle = m(A, Ji, t.borderLeftStyle), this.borderTopWidth = m(A, Xi, t.borderTopWidth), this.borderRightWidth = m(A, Wi, t.borderRightWidth), this.borderBottomWidth = m(A, Yi, t.borderBottomWidth), this.borderLeftWidth = m(A, Zi, t.borderLeftWidth), this.boxShadow = m(A, Ga, t.boxShadow), this.color = m(A, ji, t.color), this.direction = m(A, qi, t.direction), this.display = m(A, zi, t.display), this.float = m(A, Aa, t.cssFloat), this.fontFamily = m(A, La, t.fontFamily), this.fontSize = m(A, Ka, t.fontSize), this.fontStyle = m(A, Sa, t.fontStyle), this.fontVariant = m(A, Da, t.fontVariant), this.fontWeight = m(A, ka, t.fontWeight), this.letterSpacing = m(A, ea, t.letterSpacing), this.lineBreak = m(A, ta, t.lineBreak), this.lineHeight = m(A, ra, t.lineHeight), this.listStyleImage = m(A, na, t.listStyleImage), this.listStylePosition = m(A, sa, t.listStylePosition), this.listStyleType = m(A, Lr, t.listStyleType), this.marginTop = m(A, oa, t.marginTop), this.marginRight = m(A, ia, t.marginRight), this.marginBottom = m(A, aa, t.marginBottom), this.marginLeft = m(A, Ba, t.marginLeft), this.opacity = m(A, Ia, t.opacity);
    var s = m(A, ca, t.overflow);
    this.overflowX = s[0], this.overflowY = s[s.length > 1 ? 1 : 0], this.overflowWrap = m(A, la, t.overflowWrap), this.paddingTop = m(A, ua, t.paddingTop), this.paddingRight = m(A, ga, t.paddingRight), this.paddingBottom = m(A, wa, t.paddingBottom), this.paddingLeft = m(A, da, t.paddingLeft), this.paintOrder = m(A, Va, t.paintOrder), this.position = m(A, ha, t.position), this.textAlign = m(A, Qa, t.textAlign), this.textDecorationColor = m(A, va, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = m(A, ba, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = m(A, Ca, t.textShadow), this.textTransform = m(A, Ua, t.textTransform), this.transform = m(A, Fa, t.transform), this.transformOrigin = m(A, ma, t.transformOrigin), this.visibility = m(A, Ea, t.visibility), this.webkitTextStrokeColor = m(A, Pa, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = m(A, Na, t.webkitTextStrokeWidth), this.wordBreak = m(A, Ha, t.wordBreak), this.zIndex = m(A, ya, t.zIndex);
  }
  return e.prototype.isVisible = function() {
    return this.display > 0 && this.opacity > 0 && this.visibility === 0;
  }, e.prototype.isTransparent = function() {
    return JA(this.backgroundColor);
  }, e.prototype.isTransformed = function() {
    return this.transform !== null;
  }, e.prototype.isPositioned = function() {
    return this.position !== 0;
  }, e.prototype.isPositionedWithZIndex = function() {
    return this.isPositioned() && !this.zIndex.auto;
  }, e.prototype.isFloating = function() {
    return this.float !== 0;
  }, e.prototype.isInlineLevel = function() {
    return W(this.display, 4) || W(this.display, 33554432) || W(this.display, 268435456) || W(this.display, 536870912) || W(this.display, 67108864) || W(this.display, 134217728);
  }, e;
}(), Ja = function(e, A) {
  this.content = m(e, xa, A.content), this.quotes = m(e, Ra, A.quotes);
}, yn = function(e, A) {
  this.counterIncrement = m(e, Oa, A.counterIncrement), this.counterReset = m(e, Ta, A.counterReset);
}, m = function(e, A, t) {
  var r = new bs(), n = t != null ? t.toString() : A.initialValue;
  r.write(n);
  var s = new Ls(r.read());
  switch (A.type) {
    case 2:
      var o = s.parseComponentValue();
      return A.parse(e, x(o) ? o.value : A.initialValue);
    case 0:
      return A.parse(e, s.parseComponentValue());
    case 1:
      return A.parse(e, s.parseComponentValues());
    case 4:
      return s.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return Mt(e, s.parseComponentValue());
        case "color":
          return _A(e, s.parseComponentValue());
        case "image":
          return Jr(e, s.parseComponentValue());
        case "length":
          var i = s.parseComponentValue();
          return XA(i) ? i : q;
        case "length-percentage":
          var B = s.parseComponentValue();
          return _(B) ? B : q;
        case "time":
          return En(e, s.parseComponentValue());
      }
  }
}, Kr = function(e, A) {
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
}, vA = function(e, A) {
  this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, Kr(A, 3), this.styles = new _a(e, window.getComputedStyle(A, null)), Sr(A) && (this.styles.animationDuration.some(function(t) {
    return t > 0;
  }) && (A.style.animationDuration = "0s"), this.styles.transform !== null && (A.style.transform = "none")), this.bounds = Tt(this.context, A), Kr(A, 4) && (this.flags |= 16);
}, Xa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", He = typeof Uint8Array > "u" ? [] : new Uint8Array(256), At = 0; At < 64; At++)
  He[Xa.charCodeAt(At)] = At;
for (var In = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, Wa = function() {
  function e(A, t, r, n, s, o) {
    this.initialValue = A, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = s, this.data = o;
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
}(), Ya = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Za = typeof Uint8Array > "u" ? [] : new Uint8Array(256), et = 0; et < 64; et++)
  Za[Ya.charCodeAt(et)] = et;
var ke, vn = 8, $t = 9, bn = 11, Ln = 12, ja = function() {
  for (var e = [], A = 0; A < arguments.length; A++)
    e[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var t = e.length;
  if (!t)
    return "";
  for (var r = [], n = -1, s = ""; ++n < t; ) {
    var o = e[n];
    o <= 65535 ? r.push(o) : (o -= 65536, r.push(55296 + (o >> 10), o % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (s += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return s;
}, qa = function(e, A) {
  var t, r, n, s = function(a) {
    var l, u, w, g, d, h = 0.75 * a.length, C = a.length, F = 0;
    a[a.length - 1] === "=" && (h--, a[a.length - 2] === "=" && h--);
    var y = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && Uint8Array.prototype.slice !== void 0 ? new ArrayBuffer(h) : new Array(h), p = Array.isArray(y) ? y : new Uint8Array(y);
    for (l = 0; l < C; l += 4)
      u = He[a.charCodeAt(l)], w = He[a.charCodeAt(l + 1)], g = He[a.charCodeAt(l + 2)], d = He[a.charCodeAt(l + 3)], p[F++] = u << 2 | w >> 4, p[F++] = (15 & w) << 4 | g >> 2, p[F++] = (3 & g) << 6 | 63 & d;
    return y;
  }(e), o = Array.isArray(s) ? function(a) {
    for (var l = a.length, u = [], w = 0; w < l; w += 4)
      u.push(a[w + 3] << 24 | a[w + 2] << 16 | a[w + 1] << 8 | a[w]);
    return u;
  }(s) : new Uint32Array(s), i = Array.isArray(s) ? function(a) {
    for (var l = a.length, u = [], w = 0; w < l; w += 2)
      u.push(a[w + 1] << 8 | a[w]);
    return u;
  }(s) : new Uint16Array(s), B = In(i, 12, o[4] / 2), c = o[5] === 2 ? In(i, (24 + o[4]) / 2) : (t = o, r = Math.ceil((24 + o[4]) / 4), t.slice ? t.slice(r, n) : new Uint32Array(Array.prototype.slice.call(t, r, n)));
  return new Wa(o[0], o[1], o[2], o[3], B, c);
}("AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA="), wA = "×", za = function(e) {
  return qa.get(e);
}, $a = function(e, A, t) {
  var r = t - 2, n = A[r], s = A[t - 1], o = A[t];
  if (s === 2 && o === 3)
    return wA;
  if (s === 2 || s === 3 || s === 4 || o === 2 || o === 3 || o === 4)
    return "÷";
  if (s === vn && [vn, $t, bn, Ln].indexOf(o) !== -1 || !(s !== bn && s !== $t || o !== $t && o !== 10) || (s === Ln || s === 10) && o === 10 || o === 13 || o === 5 || o === 7 || s === 1)
    return wA;
  if (s === 13 && o === 14) {
    for (; n === 5; )
      n = A[--r];
    if (n === 14)
      return wA;
  }
  if (s === 15 && o === 15) {
    for (var i = 0; n === 15; )
      i++, n = A[--r];
    if (i % 2 == 0)
      return wA;
  }
  return "÷";
}, AB = function(e) {
  var A = function(o) {
    for (var i = [], B = 0, c = o.length; B < c; ) {
      var a = o.charCodeAt(B++);
      if (a >= 55296 && a <= 56319 && B < c) {
        var l = o.charCodeAt(B++);
        (64512 & l) == 56320 ? i.push(((1023 & a) << 10) + (1023 & l) + 65536) : (i.push(a), B--);
      } else
        i.push(a);
    }
    return i;
  }(e), t = A.length, r = 0, n = 0, s = A.map(za);
  return { next: function() {
    if (r >= t)
      return { done: !0, value: null };
    for (var o = wA; r < t && (o = $a(0, s, ++r)) === wA; )
      ;
    if (o !== wA || r === t) {
      var i = ja.apply(null, A.slice(n, r));
      return n = r, { value: i, done: !1 };
    }
    return { done: !0, value: null };
  } };
}, Kn = function(e) {
  return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255;
}, kr = function(e, A, t, r, n) {
  var s = "http://www.w3.org/2000/svg", o = document.createElementNS(s, "svg"), i = document.createElementNS(s, "foreignObject");
  return o.setAttributeNS(null, "width", e.toString()), o.setAttributeNS(null, "height", A.toString()), i.setAttributeNS(null, "width", "100%"), i.setAttributeNS(null, "height", "100%"), i.setAttributeNS(null, "x", t.toString()), i.setAttributeNS(null, "y", r.toString()), i.setAttributeNS(null, "externalResourcesRequired", "true"), o.appendChild(i), i.appendChild(n), o;
}, kn = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      return A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, j = { get SUPPORT_RANGE_BOUNDS() {
  var e = function(A) {
    if (A.createRange) {
      var t = A.createRange();
      if (t.getBoundingClientRect) {
        var r = A.createElement("boundtest");
        r.style.height = "123px", r.style.display = "block", A.body.appendChild(r), t.selectNode(r);
        var n = t.getBoundingClientRect(), s = Math.round(n.height);
        if (A.body.removeChild(r), s === 123)
          return !0;
      }
    }
    return !1;
  }(document);
  return Object.defineProperty(j, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
}, get SUPPORT_WORD_BREAKING() {
  var e = j.SUPPORT_RANGE_BOUNDS && function(A) {
    var t = A.createElement("boundtest");
    t.style.width = "50px", t.style.display = "block", t.style.fontSize = "12px", t.style.letterSpacing = "0px", t.style.wordSpacing = "0px", A.body.appendChild(t);
    var r = A.createRange();
    t.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var n = t.firstChild, s = Ft(n.data).map(function(c) {
      return N(c);
    }), o = 0, i = {}, B = s.every(function(c, a) {
      r.setStart(n, o), r.setEnd(n, o + c.length);
      var l = r.getBoundingClientRect();
      o += c.length;
      var u = l.x > i.x || l.y > i.y;
      return i = l, a === 0 || u;
    });
    return A.body.removeChild(t), B;
  }(document);
  return Object.defineProperty(j, "SUPPORT_WORD_BREAKING", { value: e }), e;
}, get SUPPORT_SVG_DRAWING() {
  var e = function(A) {
    var t = new Image(), r = A.createElement("canvas"), n = r.getContext("2d");
    if (!n)
      return !1;
    t.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
      n.drawImage(t, 0, 0), r.toDataURL();
    } catch {
      return !1;
    }
    return !0;
  }(document);
  return Object.defineProperty(j, "SUPPORT_SVG_DRAWING", { value: e }), e;
}, get SUPPORT_FOREIGNOBJECT_DRAWING() {
  var e = typeof Array.from == "function" && typeof window.fetch == "function" ? function(A) {
    var t = A.createElement("canvas"), r = 100;
    t.width = r, t.height = r;
    var n = t.getContext("2d");
    if (!n)
      return Promise.reject(!1);
    n.fillStyle = "rgb(0, 255, 0)", n.fillRect(0, 0, r, r);
    var s = new Image(), o = t.toDataURL();
    s.src = o;
    var i = kr(r, r, 0, 0, s);
    return n.fillStyle = "red", n.fillRect(0, 0, r, r), kn(i).then(function(B) {
      n.drawImage(B, 0, 0);
      var c = n.getImageData(0, 0, r, r).data;
      n.fillStyle = "red", n.fillRect(0, 0, r, r);
      var a = A.createElement("div");
      return a.style.backgroundImage = "url(" + o + ")", a.style.height = r + "px", Kn(c) ? kn(kr(r, r, 0, 0, a)) : Promise.reject(!1);
    }).then(function(B) {
      return n.drawImage(B, 0, 0), Kn(n.getImageData(0, 0, r, r).data);
    }).catch(function() {
      return !1;
    });
  }(document) : Promise.resolve(!1);
  return Object.defineProperty(j, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
}, get SUPPORT_CORS_IMAGES() {
  var e = new Image().crossOrigin !== void 0;
  return Object.defineProperty(j, "SUPPORT_CORS_IMAGES", { value: e }), e;
}, get SUPPORT_RESPONSE_TYPE() {
  var e = typeof new XMLHttpRequest().responseType == "string";
  return Object.defineProperty(j, "SUPPORT_RESPONSE_TYPE", { value: e }), e;
}, get SUPPORT_CORS_XHR() {
  var e = "withCredentials" in new XMLHttpRequest();
  return Object.defineProperty(j, "SUPPORT_CORS_XHR", { value: e }), e;
}, get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
  var e = !(typeof Intl > "u" || !Intl.Segmenter);
  return Object.defineProperty(j, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: e }), e;
} }, De = function(e, A) {
  this.text = e, this.bounds = A;
}, eB = function(e, A) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(A.cloneNode(!0));
    var n = A.parentNode;
    if (n) {
      n.replaceChild(r, A);
      var s = Tt(e, r);
      return r.firstChild && n.replaceChild(r.firstChild, r), s;
    }
  }
  return xA.EMPTY;
}, Dn = function(e, A, t) {
  var r = e.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  var n = r.createRange();
  return n.setStart(e, A), n.setEnd(e, A + t), n;
}, Xr = function(e) {
  if (j.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(A.segment(e)).map(function(t) {
      return t.segment;
    });
  }
  return function(t) {
    for (var r, n = AB(t), s = []; !(r = n.next()).done; )
      r.value && s.push(r.value.slice());
    return s;
  }(e);
}, tB = function(e, A) {
  return A.letterSpacing !== 0 ? Xr(e) : function(t, r) {
    if (j.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var n = new Intl.Segmenter(void 0, { granularity: "word" });
      return Array.from(n.segment(t)).map(function(s) {
        return s.segment;
      });
    }
    return nB(t, r);
  }(e, A);
}, rB = [32, 160, 4961, 65792, 65793, 4153, 4241], nB = function(e, A) {
  for (var t, r = function(o, i) {
    var B = Ft(o), c = zo(B, i), a = c[0], l = c[1], u = c[2], w = B.length, g = 0, d = 0;
    return { next: function() {
      if (d >= w)
        return { done: !0, value: null };
      for (var h = b; d < w && (h = qo(B, l, a, ++d, u)) === b; )
        ;
      if (h !== b || d === w) {
        var C = new $o(B, h, g, d);
        return g = d, { value: C, done: !1 };
      }
      return { done: !0, value: null };
    } };
  }(e, { lineBreak: A.lineBreak, wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak }), n = [], s = function() {
    if (t.value) {
      var o = t.value.slice(), i = Ft(o), B = "";
      i.forEach(function(c) {
        rB.indexOf(c) === -1 ? B += N(c) : (B.length && n.push(B), n.push(N(c)), B = "");
      }), B.length && n.push(B);
    }
  }; !(t = r.next()).done; )
    s();
  return n;
}, sB = function(e, A, t) {
  this.text = oB(A.data, t.textTransform), this.textBounds = function(r, n, s, o) {
    var i = tB(n, s), B = [], c = 0;
    return i.forEach(function(a) {
      if (s.textDecorationLine.length || a.trim().length > 0)
        if (j.SUPPORT_RANGE_BOUNDS) {
          var l = Dn(o, c, a.length).getClientRects();
          if (l.length > 1) {
            var u = Xr(a), w = 0;
            u.forEach(function(d) {
              B.push(new De(d, xA.fromDOMRectList(r, Dn(o, w + c, d.length).getClientRects()))), w += d.length;
            });
          } else
            B.push(new De(a, xA.fromDOMRectList(r, l)));
        } else {
          var g = o.splitText(a.length);
          B.push(new De(a, eB(r, o))), o = g;
        }
      else
        j.SUPPORT_RANGE_BOUNDS || (o = o.splitText(a.length));
      c += a.length;
    }), B;
  }(e, this.text, t, A);
}, oB = function(e, A) {
  switch (A) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(iB, aB);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, iB = /(^|\s|:|-|\(|\))([a-z])/g, aB = function(e, A, t) {
  return e.length > 0 ? A + t.toUpperCase() : e;
}, Js = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this;
    return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
  }
  return FA(A, e), A;
}(vA), Xs = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this;
    return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
  }
  return FA(A, e), A;
}(vA), Ws = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this, s = new XMLSerializer(), o = Tt(t, r);
    return r.setAttribute("width", o.width + "px"), r.setAttribute("height", o.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
  }
  return FA(A, e), A;
}(vA), Ys = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this;
    return n.value = r.value, n;
  }
  return FA(A, e), A;
}(vA), Dr = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this;
    return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === !0, n;
  }
  return FA(A, e), A;
}(vA), BB = [{ type: 15, flags: 0, unit: "px", number: 3 }], cB = [{ type: 16, flags: 0, number: 50 }], Et = "checkbox", Ht = "radio", lB = "password", Sn = 707406591, Wr = function(e) {
  function A(t, r) {
    var n, s, o, i = e.call(this, t, r) || this;
    switch (i.type = r.type.toLowerCase(), i.checked = r.checked, i.value = (s = (n = r).type === lB ? new Array(n.value.length + 1).join("•") : n.value).length === 0 ? n.placeholder || "" : s, i.type !== Et && i.type !== Ht || (i.styles.backgroundColor = 3739148031, i.styles.borderTopColor = i.styles.borderRightColor = i.styles.borderBottomColor = i.styles.borderLeftColor = 2779096575, i.styles.borderTopWidth = i.styles.borderRightWidth = i.styles.borderBottomWidth = i.styles.borderLeftWidth = 1, i.styles.borderTopStyle = i.styles.borderRightStyle = i.styles.borderBottomStyle = i.styles.borderLeftStyle = 1, i.styles.backgroundClip = [0], i.styles.backgroundOrigin = [0], i.bounds = (o = i.bounds).width > o.height ? new xA(o.left + (o.width - o.height) / 2, o.top, o.height, o.height) : o.width < o.height ? new xA(o.left, o.top + (o.height - o.width) / 2, o.width, o.width) : o), i.type) {
      case Et:
        i.styles.borderTopRightRadius = i.styles.borderTopLeftRadius = i.styles.borderBottomRightRadius = i.styles.borderBottomLeftRadius = BB;
        break;
      case Ht:
        i.styles.borderTopRightRadius = i.styles.borderTopLeftRadius = i.styles.borderBottomRightRadius = i.styles.borderBottomLeftRadius = cB;
    }
    return i;
  }
  return FA(A, e), A;
}(vA), Zs = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this, s = r.options[r.selectedIndex || 0];
    return n.value = s && s.text || "", n;
  }
  return FA(A, e), A;
}(vA), js = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this;
    return n.value = r.value, n;
  }
  return FA(A, e), A;
}(vA), qs = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this;
    n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
    try {
      if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
        n.tree = $s(t, r.contentWindow.document.documentElement);
        var s = r.contentWindow.document.documentElement ? Le(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : DA.TRANSPARENT, o = r.contentWindow.document.body ? Le(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : DA.TRANSPARENT;
        n.backgroundColor = JA(s) ? JA(o) ? n.styles.backgroundColor : o : s;
      }
    } catch {
    }
    return n;
  }
  return FA(A, e), A;
}(vA), uB = ["OL", "UL", "MENU"], lt = function(e, A, t, r) {
  for (var n = A.firstChild, s = void 0; n; n = s)
    if (s = n.nextSibling, Ao(n) && n.data.trim().length > 0)
      t.textNodes.push(new sB(e, n, t.styles));
    else if (ce(n))
      if (no(n) && n.assignedNodes)
        n.assignedNodes().forEach(function(i) {
          return lt(e, i, t, r);
        });
      else {
        var o = zs(e, n);
        o.styles.isVisible() && (gB(n, o, r) ? o.flags |= 4 : wB(o.styles) && (o.flags |= 2), uB.indexOf(n.tagName) !== -1 && (o.flags |= 8), t.elements.push(o), n.slot, n.shadowRoot ? lt(e, n.shadowRoot, o, r) : yt(n) || eo(n) || It(n) || lt(e, n, o, r));
      }
}, zs = function(e, A) {
  return xr(A) ? new Js(e, A) : to(A) ? new Xs(e, A) : eo(A) ? new Ws(e, A) : dB(A) ? new Ys(e, A) : QB(A) ? new Dr(e, A) : hB(A) ? new Wr(e, A) : It(A) ? new Zs(e, A) : yt(A) ? new js(e, A) : ro(A) ? new qs(e, A) : new vA(e, A);
}, $s = function(e, A) {
  var t = zs(e, A);
  return t.flags |= 4, lt(e, A, t, t), t;
}, gB = function(e, A, t) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || Yr(e) && t.styles.isTransparent();
}, wB = function(e) {
  return e.isPositioned() || e.isFloating();
}, Ao = function(e) {
  return e.nodeType === Node.TEXT_NODE;
}, ce = function(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}, Sr = function(e) {
  return ce(e) && e.style !== void 0 && !ut(e);
}, ut = function(e) {
  return typeof e.className == "object";
}, dB = function(e) {
  return e.tagName === "LI";
}, QB = function(e) {
  return e.tagName === "OL";
}, hB = function(e) {
  return e.tagName === "INPUT";
}, eo = function(e) {
  return e.tagName === "svg";
}, Yr = function(e) {
  return e.tagName === "BODY";
}, to = function(e) {
  return e.tagName === "CANVAS";
}, xn = function(e) {
  return e.tagName === "VIDEO";
}, xr = function(e) {
  return e.tagName === "IMG";
}, ro = function(e) {
  return e.tagName === "IFRAME";
}, On = function(e) {
  return e.tagName === "STYLE";
}, yt = function(e) {
  return e.tagName === "TEXTAREA";
}, It = function(e) {
  return e.tagName === "SELECT";
}, no = function(e) {
  return e.tagName === "SLOT";
}, Tn = function(e) {
  return e.tagName.indexOf("-") > 0;
}, CB = function() {
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
    var t = this, r = A.counterIncrement, n = A.counterReset, s = !0;
    r !== null && r.forEach(function(i) {
      var B = t.counters[i.counter];
      B && i.increment !== 0 && (s = !1, B.length || B.push(1), B[Math.max(0, B.length - 1)] += i.increment);
    });
    var o = [];
    return s && n.forEach(function(i) {
      var B = t.counters[i.counter];
      o.push(i.counter), B || (B = t.counters[i.counter] = []), B.push(i.reset);
    }), o;
  }, e;
}(), Mn = { integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"] }, Rn = { integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"] }, UB = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"] }, FB = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"] }, re = function(e, A, t, r, n, s) {
  return e < A || e > t ? Te(e, n, s.length > 0) : r.integers.reduce(function(o, i, B) {
    for (; e >= i; )
      e -= i, o += r.values[B];
    return o;
  }, "") + s;
}, so = function(e, A, t, r) {
  var n = "";
  do
    t || e--, n = r(e) + n, e /= A;
  while (e * A >= A);
  return n;
}, P = function(e, A, t, r, n) {
  var s = t - A + 1;
  return (e < 0 ? "-" : "") + (so(Math.abs(e), s, r, function(o) {
    return N(Math.floor(o % s) + A);
  }) + n);
}, jA = function(e, A, t) {
  t === void 0 && (t = ". ");
  var r = A.length;
  return so(Math.abs(e), r, !1, function(n) {
    return A[Math.floor(n % r)];
  }) + t;
}, kA = function(e, A, t, r, n, s) {
  if (e < -9999 || e > 9999)
    return Te(e, 4, n.length > 0);
  var o = Math.abs(e), i = n;
  if (o === 0)
    return A[0] + i;
  for (var B = 0; o > 0 && B <= 4; B++) {
    var c = o % 10;
    c === 0 && W(s, 1) && i !== "" ? i = A[c] + i : c > 1 || c === 1 && B === 0 || c === 1 && B === 1 && W(s, 2) || c === 1 && B === 1 && W(s, 4) && e > 100 || c === 1 && B > 1 && W(s, 8) ? i = A[c] + (B > 0 ? t[B - 1] : "") + i : c === 1 && B > 0 && (i = t[B - 1] + i), o = Math.floor(o / 10);
  }
  return (e < 0 ? r : "") + i;
}, Gn = "十百千萬", Vn = "拾佰仟萬", Pn = "マイナス", Ar = "마이너스", Te = function(e, A, t) {
  var r = t ? ". " : "", n = t ? "、" : "", s = t ? ", " : "", o = t ? " " : "";
  switch (A) {
    case 0:
      return "•" + o;
    case 1:
      return "◦" + o;
    case 2:
      return "◾" + o;
    case 5:
      var i = P(e, 48, 57, !0, r);
      return i.length < 4 ? "0" + i : i;
    case 4:
      return jA(e, "〇一二三四五六七八九", n);
    case 6:
      return re(e, 1, 3999, Mn, 3, r).toLowerCase();
    case 7:
      return re(e, 1, 3999, Mn, 3, r);
    case 8:
      return P(e, 945, 969, !1, r);
    case 9:
      return P(e, 97, 122, !1, r);
    case 10:
      return P(e, 65, 90, !1, r);
    case 11:
      return P(e, 1632, 1641, !0, r);
    case 12:
    case 49:
      return re(e, 1, 9999, Rn, 3, r);
    case 35:
      return re(e, 1, 9999, Rn, 3, r).toLowerCase();
    case 13:
      return P(e, 2534, 2543, !0, r);
    case 14:
    case 30:
      return P(e, 6112, 6121, !0, r);
    case 15:
      return jA(e, "子丑寅卯辰巳午未申酉戌亥", n);
    case 16:
      return jA(e, "甲乙丙丁戊己庚辛壬癸", n);
    case 17:
    case 48:
      return kA(e, "零一二三四五六七八九", Gn, "負", n, 14);
    case 47:
      return kA(e, "零壹貳參肆伍陸柒捌玖", Vn, "負", n, 15);
    case 42:
      return kA(e, "零一二三四五六七八九", Gn, "负", n, 14);
    case 41:
      return kA(e, "零壹贰叁肆伍陆柒捌玖", Vn, "负", n, 15);
    case 26:
      return kA(e, "〇一二三四五六七八九", "十百千万", Pn, n, 0);
    case 25:
      return kA(e, "零壱弐参四伍六七八九", "拾百千万", Pn, n, 7);
    case 31:
      return kA(e, "영일이삼사오육칠팔구", "십백천만", Ar, s, 7);
    case 33:
      return kA(e, "零一二三四五六七八九", "十百千萬", Ar, s, 0);
    case 32:
      return kA(e, "零壹貳參四五六七八九", "拾百千", Ar, s, 7);
    case 18:
      return P(e, 2406, 2415, !0, r);
    case 20:
      return re(e, 1, 19999, FB, 3, r);
    case 21:
      return P(e, 2790, 2799, !0, r);
    case 22:
      return P(e, 2662, 2671, !0, r);
    case 22:
      return re(e, 1, 10999, UB, 3, r);
    case 23:
      return jA(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return jA(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return P(e, 3302, 3311, !0, r);
    case 28:
      return jA(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
    case 29:
      return jA(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
    case 34:
      return P(e, 3792, 3801, !0, r);
    case 37:
      return P(e, 6160, 6169, !0, r);
    case 38:
      return P(e, 4160, 4169, !0, r);
    case 39:
      return P(e, 2918, 2927, !0, r);
    case 40:
      return P(e, 1776, 1785, !0, r);
    case 43:
      return P(e, 3046, 3055, !0, r);
    case 44:
      return P(e, 3174, 3183, !0, r);
    case 45:
      return P(e, 3664, 3673, !0, r);
    case 46:
      return P(e, 3872, 3881, !0, r);
    default:
      return P(e, 48, 57, !0, r);
  }
}, oo = "data-html2canvas-ignore", Nn = function() {
  function e(A, t, r) {
    if (this.context = A, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new CB(), this.quoteDepth = 0, !t.ownerDocument)
      throw new Error("Cloned element does not have an owner document");
    this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
  }
  return e.prototype.toIFrame = function(A, t) {
    var r = this, n = pB(A, t);
    if (!n.contentWindow)
      return Promise.reject("Unable to find iframe window");
    var s = A.defaultView.pageXOffset, o = A.defaultView.pageYOffset, i = n.contentWindow, B = i.document, c = EB(n).then(function() {
      return eA(r, void 0, void 0, function() {
        var a, l;
        return z(this, function(u) {
          switch (u.label) {
            case 0:
              return this.scrolledElements.forEach(vB), i && (i.scrollTo(t.left, t.top), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || i.scrollY === t.top && i.scrollX === t.left || (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(i.scrollX - t.left, i.scrollY - t.top, 0, 0))), a = this.options.onclone, (l = this.clonedReferenceElement) === void 0 ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : B.fonts && B.fonts.ready ? [4, B.fonts.ready] : [3, 2];
            case 1:
              u.sent(), u.label = 2;
            case 2:
              return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, mB(B)] : [3, 4];
            case 3:
              u.sent(), u.label = 4;
            case 4:
              return typeof a == "function" ? [2, Promise.resolve().then(function() {
                return a(B, l);
              }).then(function() {
                return n;
              })] : [2, n];
          }
        });
      });
    });
    return B.open(), B.write(yB(document.doctype) + "<html></html>"), IB(this.referenceElement.ownerDocument, s, o), B.replaceChild(B.adoptNode(this.documentElement), B.documentElement), B.close(), c;
  }, e.prototype.createElementClone = function(A) {
    if (Kr(A, 2), to(A))
      return this.createCanvasClone(A);
    if (xn(A))
      return this.createVideoClone(A);
    if (On(A))
      return this.createStyleClone(A);
    var t = A.cloneNode(!1);
    return xr(t) && (xr(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Tn(t) ? this.createCustomElementClone(t) : t;
  }, e.prototype.createCustomElementClone = function(A) {
    var t = document.createElement("html2canvascustomelement");
    return er(A.style, t), t;
  }, e.prototype.createStyleClone = function(A) {
    try {
      var t = A.sheet;
      if (t && t.cssRules) {
        var r = [].slice.call(t.cssRules, 0).reduce(function(s, o) {
          return o && typeof o.cssText == "string" ? s + o.cssText : s;
        }, ""), n = A.cloneNode(!1);
        return n.textContent = r, n;
      }
    } catch (s) {
      if (this.context.logger.error("Unable to access cssRules property", s), s.name !== "SecurityError")
        throw s;
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
    var n = A.cloneNode(!1);
    try {
      n.width = A.width, n.height = A.height;
      var s = A.getContext("2d"), o = n.getContext("2d");
      if (o)
        if (!this.options.allowTaint && s)
          o.putImageData(s.getImageData(0, 0, A.width, A.height), 0, 0);
        else {
          var i = (t = A.getContext("webgl2")) !== null && t !== void 0 ? t : A.getContext("webgl");
          if (i) {
            var B = i.getContextAttributes();
            (B == null ? void 0 : B.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A);
          }
          o.drawImage(A, 0, 0);
        }
      return n;
    } catch {
      this.context.logger.info("Unable to clone canvas as it is tainted", A);
    }
    return n;
  }, e.prototype.createVideoClone = function(A) {
    var t = A.ownerDocument.createElement("canvas");
    t.width = A.offsetWidth, t.height = A.offsetHeight;
    var r = t.getContext("2d");
    try {
      return r && (r.drawImage(A, 0, 0, t.width, t.height), this.options.allowTaint || r.getImageData(0, 0, t.width, t.height)), t;
    } catch {
      this.context.logger.info("Unable to clone video as it is tainted", A);
    }
    var n = A.ownerDocument.createElement("canvas");
    return n.width = A.offsetWidth, n.height = A.offsetHeight, n;
  }, e.prototype.appendChildNode = function(A, t, r) {
    ce(t) && (t.tagName === "SCRIPT" || t.hasAttribute(oo) || typeof this.options.ignoreElements == "function" && this.options.ignoreElements(t)) || this.options.copyStyles && ce(t) && On(t) || A.appendChild(this.cloneNode(t, r));
  }, e.prototype.cloneChildNodes = function(A, t, r) {
    for (var n = this, s = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; s; s = s.nextSibling)
      if (ce(s) && no(s) && typeof s.assignedNodes == "function") {
        var o = s.assignedNodes();
        o.length && o.forEach(function(i) {
          return n.appendChildNode(t, i, r);
        });
      } else
        this.appendChildNode(t, s, r);
  }, e.prototype.cloneNode = function(A, t) {
    if (Ao(A))
      return document.createTextNode(A.data);
    if (!A.ownerDocument)
      return A.cloneNode(!1);
    var r = A.ownerDocument.defaultView;
    if (r && ce(A) && (Sr(A) || ut(A))) {
      var n = this.createElementClone(A);
      n.style.transitionProperty = "none";
      var s = r.getComputedStyle(A), o = r.getComputedStyle(A, ":before"), i = r.getComputedStyle(A, ":after");
      this.referenceElement === A && Sr(n) && (this.clonedReferenceElement = n), Yr(n) && bB(n);
      var B = this.counters.parse(new yn(this.context, s)), c = this.resolvePseudoContent(A, n, o, ke.BEFORE);
      Tn(A) && (t = !0), xn(A) || this.cloneChildNodes(A, n, t), c && n.insertBefore(c, n.firstChild);
      var a = this.resolvePseudoContent(A, n, i, ke.AFTER);
      return a && n.appendChild(a), this.counters.pop(B), (s && (this.options.copyStyles || ut(A)) && !ro(A) || t) && er(s, n), A.scrollTop === 0 && A.scrollLeft === 0 || this.scrolledElements.push([n, A.scrollLeft, A.scrollTop]), (yt(A) || It(A)) && (yt(n) || It(n)) && (n.value = A.value), n;
    }
    return A.cloneNode(!1);
  }, e.prototype.resolvePseudoContent = function(A, t, r, n) {
    var s = this;
    if (r) {
      var o = r.content, i = t.ownerDocument;
      if (i && o && o !== "none" && o !== "-moz-alt-content" && r.display !== "none") {
        this.counters.parse(new yn(this.context, r));
        var B = new Ja(this.context, r), c = i.createElement("html2canvaspseudoelement");
        er(r, c), B.content.forEach(function(l) {
          if (l.type === 0)
            c.appendChild(i.createTextNode(l.value));
          else if (l.type === 22) {
            var u = i.createElement("img");
            u.src = l.value, u.style.opacity = "1", c.appendChild(u);
          } else if (l.type === 18) {
            if (l.name === "attr") {
              var w = l.values.filter(x);
              w.length && c.appendChild(i.createTextNode(A.getAttribute(w[0].value) || ""));
            } else if (l.name === "counter") {
              var g = l.values.filter(ge), d = g[0], h = g[1];
              if (d && x(d)) {
                var C = s.counters.getCounterValue(d.value), F = h && x(h) ? Lr.parse(s.context, h.value) : 3;
                c.appendChild(i.createTextNode(Te(C, F, !1)));
              }
            } else if (l.name === "counters") {
              var y = l.values.filter(ge), p = (d = y[0], y[1]);
              if (h = y[2], d && x(d)) {
                var U = s.counters.getCounterValues(d.value), I = h && x(h) ? Lr.parse(s.context, h.value) : 3, v = p && p.type === 0 ? p.value : "", H = U.map(function(D) {
                  return Te(D, I, !1);
                }).join(v);
                c.appendChild(i.createTextNode(H));
              }
            }
          } else if (l.type === 20)
            switch (l.value) {
              case "open-quote":
                c.appendChild(i.createTextNode(Hn(B.quotes, s.quoteDepth++, !0)));
                break;
              case "close-quote":
                c.appendChild(i.createTextNode(Hn(B.quotes, --s.quoteDepth, !1)));
                break;
              default:
                c.appendChild(i.createTextNode(l.value));
            }
        }), c.className = Or + " " + Tr;
        var a = n === ke.BEFORE ? " " + Or : " " + Tr;
        return ut(t) ? t.className.baseValue += a : t.className += a, c;
      }
    }
  }, e.destroy = function(A) {
    return !!A.parentNode && (A.parentNode.removeChild(A), !0);
  }, e;
}();
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(ke || (ke = {}));
var k, pB = function(e, A) {
  var t = e.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = A.width.toString(), t.height = A.height.toString(), t.scrolling = "no", t.setAttribute(oo, "true"), e.body.appendChild(t), t;
}, fB = function(e) {
  return new Promise(function(A) {
    e.complete ? A() : e.src ? (e.onload = A, e.onerror = A) : A();
  });
}, mB = function(e) {
  return Promise.all([].slice.call(e.images, 0).map(fB));
}, EB = function(e) {
  return new Promise(function(A, t) {
    var r = e.contentWindow;
    if (!r)
      return t("No window assigned for iframe");
    var n = r.document;
    r.onload = e.onload = function() {
      r.onload = e.onload = null;
      var s = setInterval(function() {
        n.body.childNodes.length > 0 && n.readyState === "complete" && (clearInterval(s), A(e));
      }, 50);
    };
  });
}, HB = ["all", "d", "content"], er = function(e, A) {
  for (var t = e.length - 1; t >= 0; t--) {
    var r = e.item(t);
    HB.indexOf(r) === -1 && A.style.setProperty(r, e.getPropertyValue(r));
  }
  return A;
}, yB = function(e) {
  var A = "";
  return e && (A += "<!DOCTYPE ", e.name && (A += e.name), e.internalSubset && (A += e.internalSubset), e.publicId && (A += '"' + e.publicId + '"'), e.systemId && (A += '"' + e.systemId + '"'), A += ">"), A;
}, IB = function(e, A, t) {
  e && e.defaultView && (A !== e.defaultView.pageXOffset || t !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, t);
}, vB = function(e) {
  var A = e[0], t = e[1], r = e[2];
  A.scrollLeft = t, A.scrollTop = r;
}, Or = "___html2canvas___pseudoelement_before", Tr = "___html2canvas___pseudoelement_after", _n = `{
    content: "" !important;
    display: none !important;
}`, bB = function(e) {
  LB(e, "." + Or + ":before" + _n + `
         .` + Tr + ":after" + _n);
}, LB = function(e, A) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = A, e.appendChild(r);
  }
}, io = function() {
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
}(), KB = function() {
  function e(A, t) {
    this.context = A, this._options = t, this._cache = {};
  }
  return e.prototype.addImage = function(A) {
    var t = Promise.resolve();
    return this.has(A) || (rr(A) || xB(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {
    }), t;
  }, e.prototype.match = function(A) {
    return this._cache[A];
  }, e.prototype.loadImage = function(A) {
    return eA(this, void 0, void 0, function() {
      var t, r, n, s, o = this;
      return z(this, function(i) {
        switch (i.label) {
          case 0:
            return t = io.isSameOrigin(A), r = !tr(A) && this._options.useCORS === !0 && j.SUPPORT_CORS_IMAGES && !t, n = !tr(A) && !t && !rr(A) && typeof this._options.proxy == "string" && j.SUPPORT_CORS_XHR && !r, t || this._options.allowTaint !== !1 || tr(A) || rr(A) || n || r ? (s = A, n ? [4, this.proxy(s)] : [3, 2]) : [2];
          case 1:
            s = i.sent(), i.label = 2;
          case 2:
            return this.context.logger.debug("Added image " + A.substring(0, 256)), [4, new Promise(function(B, c) {
              var a = new Image();
              a.onload = function() {
                return B(a);
              }, a.onerror = c, (OB(s) || r) && (a.crossOrigin = "anonymous"), a.src = s, a.complete === !0 && setTimeout(function() {
                return B(a);
              }, 500), o._options.imageTimeout > 0 && setTimeout(function() {
                return c("Timed out (" + o._options.imageTimeout + "ms) loading image");
              }, o._options.imageTimeout);
            })];
          case 3:
            return [2, i.sent()];
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
    var n = A.substring(0, 256);
    return new Promise(function(s, o) {
      var i = j.SUPPORT_RESPONSE_TYPE ? "blob" : "text", B = new XMLHttpRequest();
      B.onload = function() {
        if (B.status === 200)
          if (i === "text")
            s(B.response);
          else {
            var l = new FileReader();
            l.addEventListener("load", function() {
              return s(l.result);
            }, !1), l.addEventListener("error", function(u) {
              return o(u);
            }, !1), l.readAsDataURL(B.response);
          }
        else
          o("Failed to proxy resource " + n + " with status code " + B.status);
      }, B.onerror = o;
      var c = r.indexOf("?") > -1 ? "&" : "?";
      if (B.open("GET", "" + r + c + "url=" + encodeURIComponent(A) + "&responseType=" + i), i !== "text" && B instanceof XMLHttpRequest && (B.responseType = i), t._options.imageTimeout) {
        var a = t._options.imageTimeout;
        B.timeout = a, B.ontimeout = function() {
          return o("Timed out (" + a + "ms) proxying " + n);
        };
      }
      B.send();
    });
  }, e;
}(), kB = /^data:image\/svg\+xml/i, DB = /^data:image\/.*;base64,/i, SB = /^data:image\/.*/i, xB = function(e) {
  return j.SUPPORT_SVG_DRAWING || !TB(e);
}, tr = function(e) {
  return SB.test(e);
}, OB = function(e) {
  return DB.test(e);
}, rr = function(e) {
  return e.substr(0, 4) === "blob";
}, TB = function(e) {
  return e.substr(-3).toLowerCase() === "svg" || kB.test(e);
}, f = function() {
  function e(A, t) {
    this.type = 0, this.x = A, this.y = t;
  }
  return e.prototype.add = function(A, t) {
    return new e(this.x + A, this.y + t);
  }, e;
}(), ne = function(e, A, t) {
  return new f(e.x + (A.x - e.x) * t, e.y + (A.y - e.y) * t);
}, tt = function() {
  function e(A, t, r, n) {
    this.type = 1, this.start = A, this.startControl = t, this.endControl = r, this.end = n;
  }
  return e.prototype.subdivide = function(A, t) {
    var r = ne(this.start, this.startControl, A), n = ne(this.startControl, this.endControl, A), s = ne(this.endControl, this.end, A), o = ne(r, n, A), i = ne(n, s, A), B = ne(o, i, A);
    return t ? new e(this.start, r, o, B) : new e(B, i, s, this.end);
  }, e.prototype.add = function(A, t) {
    return new e(this.start.add(A, t), this.startControl.add(A, t), this.endControl.add(A, t), this.end.add(A, t));
  }, e.prototype.reverse = function() {
    return new e(this.end, this.endControl, this.startControl, this.start);
  }, e;
}(), QA = function(e) {
  return e.type === 1;
}, MB = function(e) {
  var A = e.styles, t = e.bounds, r = Ee(A.borderTopLeftRadius, t.width, t.height), n = r[0], s = r[1], o = Ee(A.borderTopRightRadius, t.width, t.height), i = o[0], B = o[1], c = Ee(A.borderBottomRightRadius, t.width, t.height), a = c[0], l = c[1], u = Ee(A.borderBottomLeftRadius, t.width, t.height), w = u[0], g = u[1], d = [];
  d.push((n + i) / t.width), d.push((w + a) / t.width), d.push((s + g) / t.height), d.push((B + l) / t.height);
  var h = Math.max.apply(Math, d);
  h > 1 && (n /= h, s /= h, i /= h, B /= h, a /= h, l /= h, w /= h, g /= h);
  var C = t.width - i, F = t.height - l, y = t.width - a, p = t.height - g, U = A.borderTopWidth, I = A.borderRightWidth, v = A.borderBottomWidth, H = A.borderLeftWidth, D = M(A.paddingTop, e.bounds.width), rA = M(A.paddingRight, e.bounds.width), oA = M(A.paddingBottom, e.bounds.width), J = M(A.paddingLeft, e.bounds.width);
  this.topLeftBorderDoubleOuterBox = n > 0 || s > 0 ? R(t.left + H / 3, t.top + U / 3, n - H / 3, s - U / 3, k.TOP_LEFT) : new f(t.left + H / 3, t.top + U / 3), this.topRightBorderDoubleOuterBox = n > 0 || s > 0 ? R(t.left + C, t.top + U / 3, i - I / 3, B - U / 3, k.TOP_RIGHT) : new f(t.left + t.width - I / 3, t.top + U / 3), this.bottomRightBorderDoubleOuterBox = a > 0 || l > 0 ? R(t.left + y, t.top + F, a - I / 3, l - v / 3, k.BOTTOM_RIGHT) : new f(t.left + t.width - I / 3, t.top + t.height - v / 3), this.bottomLeftBorderDoubleOuterBox = w > 0 || g > 0 ? R(t.left + H / 3, t.top + p, w - H / 3, g - v / 3, k.BOTTOM_LEFT) : new f(t.left + H / 3, t.top + t.height - v / 3), this.topLeftBorderDoubleInnerBox = n > 0 || s > 0 ? R(t.left + 2 * H / 3, t.top + 2 * U / 3, n - 2 * H / 3, s - 2 * U / 3, k.TOP_LEFT) : new f(t.left + 2 * H / 3, t.top + 2 * U / 3), this.topRightBorderDoubleInnerBox = n > 0 || s > 0 ? R(t.left + C, t.top + 2 * U / 3, i - 2 * I / 3, B - 2 * U / 3, k.TOP_RIGHT) : new f(t.left + t.width - 2 * I / 3, t.top + 2 * U / 3), this.bottomRightBorderDoubleInnerBox = a > 0 || l > 0 ? R(t.left + y, t.top + F, a - 2 * I / 3, l - 2 * v / 3, k.BOTTOM_RIGHT) : new f(t.left + t.width - 2 * I / 3, t.top + t.height - 2 * v / 3), this.bottomLeftBorderDoubleInnerBox = w > 0 || g > 0 ? R(t.left + 2 * H / 3, t.top + p, w - 2 * H / 3, g - 2 * v / 3, k.BOTTOM_LEFT) : new f(t.left + 2 * H / 3, t.top + t.height - 2 * v / 3), this.topLeftBorderStroke = n > 0 || s > 0 ? R(t.left + H / 2, t.top + U / 2, n - H / 2, s - U / 2, k.TOP_LEFT) : new f(t.left + H / 2, t.top + U / 2), this.topRightBorderStroke = n > 0 || s > 0 ? R(t.left + C, t.top + U / 2, i - I / 2, B - U / 2, k.TOP_RIGHT) : new f(t.left + t.width - I / 2, t.top + U / 2), this.bottomRightBorderStroke = a > 0 || l > 0 ? R(t.left + y, t.top + F, a - I / 2, l - v / 2, k.BOTTOM_RIGHT) : new f(t.left + t.width - I / 2, t.top + t.height - v / 2), this.bottomLeftBorderStroke = w > 0 || g > 0 ? R(t.left + H / 2, t.top + p, w - H / 2, g - v / 2, k.BOTTOM_LEFT) : new f(t.left + H / 2, t.top + t.height - v / 2), this.topLeftBorderBox = n > 0 || s > 0 ? R(t.left, t.top, n, s, k.TOP_LEFT) : new f(t.left, t.top), this.topRightBorderBox = i > 0 || B > 0 ? R(t.left + C, t.top, i, B, k.TOP_RIGHT) : new f(t.left + t.width, t.top), this.bottomRightBorderBox = a > 0 || l > 0 ? R(t.left + y, t.top + F, a, l, k.BOTTOM_RIGHT) : new f(t.left + t.width, t.top + t.height), this.bottomLeftBorderBox = w > 0 || g > 0 ? R(t.left, t.top + p, w, g, k.BOTTOM_LEFT) : new f(t.left, t.top + t.height), this.topLeftPaddingBox = n > 0 || s > 0 ? R(t.left + H, t.top + U, Math.max(0, n - H), Math.max(0, s - U), k.TOP_LEFT) : new f(t.left + H, t.top + U), this.topRightPaddingBox = i > 0 || B > 0 ? R(t.left + Math.min(C, t.width - I), t.top + U, C > t.width + I ? 0 : Math.max(0, i - I), Math.max(0, B - U), k.TOP_RIGHT) : new f(t.left + t.width - I, t.top + U), this.bottomRightPaddingBox = a > 0 || l > 0 ? R(t.left + Math.min(y, t.width - H), t.top + Math.min(F, t.height - v), Math.max(0, a - I), Math.max(0, l - v), k.BOTTOM_RIGHT) : new f(t.left + t.width - I, t.top + t.height - v), this.bottomLeftPaddingBox = w > 0 || g > 0 ? R(t.left + H, t.top + Math.min(p, t.height - v), Math.max(0, w - H), Math.max(0, g - v), k.BOTTOM_LEFT) : new f(t.left + H, t.top + t.height - v), this.topLeftContentBox = n > 0 || s > 0 ? R(t.left + H + J, t.top + U + D, Math.max(0, n - (H + J)), Math.max(0, s - (U + D)), k.TOP_LEFT) : new f(t.left + H + J, t.top + U + D), this.topRightContentBox = i > 0 || B > 0 ? R(t.left + Math.min(C, t.width + H + J), t.top + U + D, C > t.width + H + J ? 0 : i - H + J, B - (U + D), k.TOP_RIGHT) : new f(t.left + t.width - (I + rA), t.top + U + D), this.bottomRightContentBox = a > 0 || l > 0 ? R(t.left + Math.min(y, t.width - (H + J)), t.top + Math.min(F, t.height + U + D), Math.max(0, a - (I + rA)), l - (v + oA), k.BOTTOM_RIGHT) : new f(t.left + t.width - (I + rA), t.top + t.height - (v + oA)), this.bottomLeftContentBox = w > 0 || g > 0 ? R(t.left + H + J, t.top + p, Math.max(0, w - (H + J)), g - (v + oA), k.BOTTOM_LEFT) : new f(t.left + H + J, t.top + t.height - (v + oA));
};
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(k || (k = {}));
var R = function(e, A, t, r, n) {
  var s = (Math.sqrt(2) - 1) / 3 * 4, o = t * s, i = r * s, B = e + t, c = A + r;
  switch (n) {
    case k.TOP_LEFT:
      return new tt(new f(e, c), new f(e, c - i), new f(B - o, A), new f(B, A));
    case k.TOP_RIGHT:
      return new tt(new f(e, A), new f(e + o, A), new f(B, c - i), new f(B, c));
    case k.BOTTOM_RIGHT:
      return new tt(new f(B, A), new f(B, A + i), new f(e + o, c), new f(e, c));
    case k.BOTTOM_LEFT:
    default:
      return new tt(new f(B, c), new f(B - o, c), new f(e, A + i), new f(e, A));
  }
}, vt = function(e) {
  return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox];
}, bt = function(e) {
  return [e.topLeftPaddingBox, e.topRightPaddingBox, e.bottomRightPaddingBox, e.bottomLeftPaddingBox];
}, RB = function(e, A, t) {
  this.offsetX = e, this.offsetY = A, this.matrix = t, this.type = 0, this.target = 6;
}, rt = function(e, A) {
  this.path = e, this.target = A, this.type = 1;
}, GB = function(e) {
  this.opacity = e, this.type = 2, this.target = 6;
}, ao = function(e) {
  return e.type === 1;
}, Jn = function(e, A) {
  return e.length === A.length && e.some(function(t, r) {
    return t === A[r];
  });
}, Bo = function(e) {
  this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
}, co = function() {
  function e(A, t) {
    if (this.container = A, this.parent = t, this.effects = [], this.curves = new MB(this.container), this.container.styles.opacity < 1 && this.effects.push(new GB(this.container.styles.opacity)), this.container.styles.transform !== null) {
      var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, s = this.container.styles.transform;
      this.effects.push(new RB(r, n, s));
    }
    if (this.container.styles.overflowX !== 0) {
      var o = vt(this.curves), i = bt(this.curves);
      Jn(o, i) ? this.effects.push(new rt(o, 6)) : (this.effects.push(new rt(o, 2)), this.effects.push(new rt(i, 4)));
    }
  }
  return e.prototype.getEffects = function(A) {
    for (var t = [2, 3].indexOf(this.container.styles.position) === -1, r = this.parent, n = this.effects.slice(0); r; ) {
      var s = r.effects.filter(function(B) {
        return !ao(B);
      });
      if (t || r.container.styles.position !== 0 || !r.parent) {
        if (n.unshift.apply(n, s), t = [2, 3].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
          var o = vt(r.curves), i = bt(r.curves);
          Jn(o, i) || n.unshift(new rt(i, 6));
        }
      } else
        n.unshift.apply(n, s);
      r = r.parent;
    }
    return n.filter(function(B) {
      return W(B.target, A);
    });
  }, e;
}(), Mr = function(e, A, t, r) {
  e.container.elements.forEach(function(n) {
    var s = W(n.flags, 4), o = W(n.flags, 2), i = new co(n, e);
    W(n.styles.display, 2048) && r.push(i);
    var B = W(n.flags, 8) ? [] : r;
    if (s || o) {
      var c = s || n.styles.isPositioned() ? t : A, a = new Bo(i);
      if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
        var l = n.styles.zIndex.order;
        if (l < 0) {
          var u = 0;
          c.negativeZIndex.some(function(g, d) {
            return l > g.element.container.styles.zIndex.order ? (u = d, !1) : u > 0;
          }), c.negativeZIndex.splice(u, 0, a);
        } else if (l > 0) {
          var w = 0;
          c.positiveZIndex.some(function(g, d) {
            return l >= g.element.container.styles.zIndex.order ? (w = d + 1, !1) : w > 0;
          }), c.positiveZIndex.splice(w, 0, a);
        } else
          c.zeroOrAutoZIndexOrTransformedOrOpacity.push(a);
      } else
        n.styles.isFloating() ? c.nonPositionedFloats.push(a) : c.nonPositionedInlineLevel.push(a);
      Mr(i, a, s ? a : t, B);
    } else
      n.styles.isInlineLevel() ? A.inlineLevel.push(i) : A.nonInlineLevel.push(i), Mr(i, A, t, B);
    W(n.flags, 8) && lo(n, B);
  });
}, lo = function(e, A) {
  for (var t = e instanceof Dr ? e.start : 1, r = e instanceof Dr && e.reversed, n = 0; n < A.length; n++) {
    var s = A[n];
    s.container instanceof Ys && typeof s.container.value == "number" && s.container.value !== 0 && (t = s.container.value), s.listValue = Te(t, s.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, Xn = function(e, A) {
  switch (A) {
    case 0:
      return dA(e.topLeftBorderBox, e.topLeftPaddingBox, e.topRightBorderBox, e.topRightPaddingBox);
    case 1:
      return dA(e.topRightBorderBox, e.topRightPaddingBox, e.bottomRightBorderBox, e.bottomRightPaddingBox);
    case 2:
      return dA(e.bottomRightBorderBox, e.bottomRightPaddingBox, e.bottomLeftBorderBox, e.bottomLeftPaddingBox);
    default:
      return dA(e.bottomLeftBorderBox, e.bottomLeftPaddingBox, e.topLeftBorderBox, e.topLeftPaddingBox);
  }
}, nt = function(e, A) {
  var t = [];
  return QA(e) ? t.push(e.subdivide(0.5, !1)) : t.push(e), QA(A) ? t.push(A.subdivide(0.5, !0)) : t.push(A), t;
}, dA = function(e, A, t, r) {
  var n = [];
  return QA(e) ? n.push(e.subdivide(0.5, !1)) : n.push(e), QA(t) ? n.push(t.subdivide(0.5, !0)) : n.push(t), QA(r) ? n.push(r.subdivide(0.5, !0).reverse()) : n.push(r), QA(A) ? n.push(A.subdivide(0.5, !1).reverse()) : n.push(A), n;
}, Wn = function(e) {
  var A = e.bounds, t = e.styles;
  return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, Lt = function(e) {
  var A = e.styles, t = e.bounds, r = M(A.paddingLeft, t.width), n = M(A.paddingRight, t.width), s = M(A.paddingTop, t.width), o = M(A.paddingBottom, t.width);
  return t.add(r + A.borderLeftWidth, s + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + r + n), -(A.borderTopWidth + A.borderBottomWidth + s + o));
}, nr = function(e, A, t) {
  var r = function(c, a) {
    return c === 0 ? a.bounds : c === 2 ? Lt(a) : Wn(a);
  }(ae(e.styles.backgroundOrigin, A), e), n = function(c, a) {
    return c === 0 ? a.bounds : c === 2 ? Lt(a) : Wn(a);
  }(ae(e.styles.backgroundClip, A), e), s = VB(ae(e.styles.backgroundSize, A), t, r), o = s[0], i = s[1], B = Ee(ae(e.styles.backgroundPosition, A), r.width - o, r.height - i);
  return [PB(ae(e.styles.backgroundRepeat, A), B, s, r, n), Math.round(r.left + B[0]), Math.round(r.top + B[1]), o, i];
}, se = function(e) {
  return x(e) && e.value === ue.AUTO;
}, st = function(e) {
  return typeof e == "number";
}, VB = function(e, A, t) {
  var r = A[0], n = A[1], s = A[2], o = e[0], i = e[1];
  if (!o)
    return [0, 0];
  if (_(o) && i && _(i))
    return [M(o, t.width), M(i, t.height)];
  var B = st(s);
  if (x(o) && (o.value === ue.CONTAIN || o.value === ue.COVER))
    return st(s) ? t.width / t.height < s != (o.value === ue.COVER) ? [t.width, t.width / s] : [t.height * s, t.height] : [t.width, t.height];
  var c = st(r), a = st(n), l = c || a;
  if (se(o) && (!i || se(i)))
    return c && a ? [r, n] : B || l ? l && B ? [c ? r : n * s, a ? n : r / s] : [c ? r : t.width, a ? n : t.height] : [t.width, t.height];
  if (B) {
    var u = 0, w = 0;
    return _(o) ? u = M(o, t.width) : _(i) && (w = M(i, t.height)), se(o) ? u = w * s : i && !se(i) || (w = u / s), [u, w];
  }
  var g = null, d = null;
  if (_(o) ? g = M(o, t.width) : i && _(i) && (d = M(i, t.height)), g === null || i && !se(i) || (d = c && a ? g / r * n : t.height), d !== null && se(o) && (g = c && a ? d / n * r : t.width), g !== null && d !== null)
    return [g, d];
  throw new Error("Unable to calculate background-size for element");
}, ae = function(e, A) {
  var t = e[A];
  return t === void 0 ? e[0] : t;
}, PB = function(e, A, t, r, n) {
  var s = A[0], o = A[1], i = t[0], B = t[1];
  switch (e) {
    case 2:
      return [new f(Math.round(r.left), Math.round(r.top + o)), new f(Math.round(r.left + r.width), Math.round(r.top + o)), new f(Math.round(r.left + r.width), Math.round(B + r.top + o)), new f(Math.round(r.left), Math.round(B + r.top + o))];
    case 3:
      return [new f(Math.round(r.left + s), Math.round(r.top)), new f(Math.round(r.left + s + i), Math.round(r.top)), new f(Math.round(r.left + s + i), Math.round(r.height + r.top)), new f(Math.round(r.left + s), Math.round(r.height + r.top))];
    case 1:
      return [new f(Math.round(r.left + s), Math.round(r.top + o)), new f(Math.round(r.left + s + i), Math.round(r.top + o)), new f(Math.round(r.left + s + i), Math.round(r.top + o + B)), new f(Math.round(r.left + s), Math.round(r.top + o + B))];
    default:
      return [new f(Math.round(n.left), Math.round(n.top)), new f(Math.round(n.left + n.width), Math.round(n.top)), new f(Math.round(n.left + n.width), Math.round(n.height + n.top)), new f(Math.round(n.left), Math.round(n.height + n.top))];
  }
}, Yn = "Hidden Text", NB = function() {
  function e(A) {
    this._data = {}, this._document = A;
  }
  return e.prototype.parseMetrics = function(A, t) {
    var r = this._document.createElement("div"), n = this._document.createElement("img"), s = this._document.createElement("span"), o = this._document.body;
    r.style.visibility = "hidden", r.style.fontFamily = A, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", o.appendChild(r), n.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", s.style.fontFamily = A, s.style.fontSize = t, s.style.margin = "0", s.style.padding = "0", s.appendChild(this._document.createTextNode(Yn)), r.appendChild(s), r.appendChild(n);
    var i = n.offsetTop - s.offsetTop + 2;
    r.removeChild(s), r.appendChild(this._document.createTextNode(Yn)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
    var B = n.offsetTop - r.offsetTop + 2;
    return o.removeChild(r), { baseline: i, middle: B };
  }, e.prototype.getMetrics = function(A, t) {
    var r = A + " " + t;
    return this._data[r] === void 0 && (this._data[r] = this.parseMetrics(A, t)), this._data[r];
  }, e;
}(), uo = function(e, A) {
  this.context = e, this.options = A;
}, _B = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this;
    return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new NB(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
  }
  return FA(A, e), A.prototype.applyEffects = function(t) {
    for (var r = this; this._activeEffects.length; )
      this.popEffect();
    t.forEach(function(n) {
      return r.applyEffect(n);
    });
  }, A.prototype.applyEffect = function(t) {
    this.ctx.save(), function(r) {
      return r.type === 2;
    }(t) && (this.ctx.globalAlpha = t.opacity), function(r) {
      return r.type === 0;
    }(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), ao(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
  }, A.prototype.popEffect = function() {
    this._activeEffects.pop(), this.ctx.restore();
  }, A.prototype.renderStack = function(t) {
    return eA(this, void 0, void 0, function() {
      return z(this, function(r) {
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
    return eA(this, void 0, void 0, function() {
      return z(this, function(r) {
        switch (r.label) {
          case 0:
            return W(t.container.flags, 16), t.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(t)] : [3, 3];
          case 1:
            return r.sent(), [4, this.renderNodeContent(t)];
          case 2:
            r.sent(), r.label = 3;
          case 3:
            return [2];
        }
      });
    });
  }, A.prototype.renderTextWithLetterSpacing = function(t, r, n) {
    var s = this;
    r === 0 ? this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + n) : Xr(t.text).reduce(function(o, i) {
      return s.ctx.fillText(i, o, t.bounds.top + n), o + s.ctx.measureText(i).width;
    }, t.bounds.left);
  }, A.prototype.createFontStyle = function(t) {
    var r = t.fontVariant.filter(function(o) {
      return o === "normal" || o === "small-caps";
    }).join(""), n = ZB(t.fontFamily).join(", "), s = Oe(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
    return [[t.fontStyle, r, t.fontWeight, s, n].join(" "), n, s];
  }, A.prototype.renderTextNode = function(t, r) {
    return eA(this, void 0, void 0, function() {
      var n, s, o, i, B, c, a, l, u = this;
      return z(this, function(w) {
        return n = this.createFontStyle(r), s = n[0], o = n[1], i = n[2], this.ctx.font = s, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", B = this.fontMetrics.getMetrics(o, i), c = B.baseline, a = B.middle, l = r.paintOrder, t.textBounds.forEach(function(g) {
          l.forEach(function(d) {
            switch (d) {
              case 0:
                u.ctx.fillStyle = Y(r.color), u.renderTextWithLetterSpacing(g, r.letterSpacing, c);
                var h = r.textShadow;
                h.length && g.text.trim().length && (h.slice(0).reverse().forEach(function(C) {
                  u.ctx.shadowColor = Y(C.color), u.ctx.shadowOffsetX = C.offsetX.number * u.options.scale, u.ctx.shadowOffsetY = C.offsetY.number * u.options.scale, u.ctx.shadowBlur = C.blur.number, u.renderTextWithLetterSpacing(g, r.letterSpacing, c);
                }), u.ctx.shadowColor = "", u.ctx.shadowOffsetX = 0, u.ctx.shadowOffsetY = 0, u.ctx.shadowBlur = 0), r.textDecorationLine.length && (u.ctx.fillStyle = Y(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(C) {
                  switch (C) {
                    case 1:
                      u.ctx.fillRect(g.bounds.left, Math.round(g.bounds.top + c), g.bounds.width, 1);
                      break;
                    case 2:
                      u.ctx.fillRect(g.bounds.left, Math.round(g.bounds.top), g.bounds.width, 1);
                      break;
                    case 3:
                      u.ctx.fillRect(g.bounds.left, Math.ceil(g.bounds.top + a), g.bounds.width, 1);
                  }
                }));
                break;
              case 1:
                r.webkitTextStrokeWidth && g.text.trim().length && (u.ctx.strokeStyle = Y(r.webkitTextStrokeColor), u.ctx.lineWidth = r.webkitTextStrokeWidth, u.ctx.lineJoin = window.chrome ? "miter" : "round", u.ctx.strokeText(g.text, g.bounds.left, g.bounds.top + c)), u.ctx.strokeStyle = "", u.ctx.lineWidth = 0, u.ctx.lineJoin = "miter";
            }
          });
        }), [2];
      });
    });
  }, A.prototype.renderReplacedElement = function(t, r, n) {
    if (n && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
      var s = Lt(t), o = bt(r);
      this.path(o), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, s.left, s.top, s.width, s.height), this.ctx.restore();
    }
  }, A.prototype.renderNodeContent = function(t) {
    return eA(this, void 0, void 0, function() {
      var r, n, s, o, i, B, c, a, l, u, w, g, d, h, C, F, y, p;
      return z(this, function(U) {
        switch (U.label) {
          case 0:
            this.applyEffects(t.getEffects(4)), r = t.container, n = t.curves, s = r.styles, o = 0, i = r.textNodes, U.label = 1;
          case 1:
            return o < i.length ? (B = i[o], [4, this.renderTextNode(B, s)]) : [3, 4];
          case 2:
            U.sent(), U.label = 3;
          case 3:
            return o++, [3, 1];
          case 4:
            if (!(r instanceof Js))
              return [3, 8];
            U.label = 5;
          case 5:
            return U.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
          case 6:
            return C = U.sent(), this.renderReplacedElement(r, n, C), [3, 8];
          case 7:
            return U.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
          case 8:
            if (r instanceof Xs && this.renderReplacedElement(r, n, r.canvas), !(r instanceof Ws))
              return [3, 12];
            U.label = 9;
          case 9:
            return U.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
          case 10:
            return C = U.sent(), this.renderReplacedElement(r, n, C), [3, 12];
          case 11:
            return U.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
          case 12:
            return r instanceof qs && r.tree ? [4, new A(this.context, { scale: this.options.scale, backgroundColor: r.backgroundColor, x: 0, y: 0, width: r.width, height: r.height }).render(r.tree)] : [3, 14];
          case 13:
            c = U.sent(), r.width && r.height && this.ctx.drawImage(c, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), U.label = 14;
          case 14:
            if (r instanceof Wr && (a = Math.min(r.bounds.width, r.bounds.height), r.type === Et ? r.checked && (this.ctx.save(), this.path([new f(r.bounds.left + 0.39363 * a, r.bounds.top + 0.79 * a), new f(r.bounds.left + 0.16 * a, r.bounds.top + 0.5549 * a), new f(r.bounds.left + 0.27347 * a, r.bounds.top + 0.44071 * a), new f(r.bounds.left + 0.39694 * a, r.bounds.top + 0.5649 * a), new f(r.bounds.left + 0.72983 * a, r.bounds.top + 0.23 * a), new f(r.bounds.left + 0.84 * a, r.bounds.top + 0.34085 * a), new f(r.bounds.left + 0.39363 * a, r.bounds.top + 0.79 * a)]), this.ctx.fillStyle = Y(Sn), this.ctx.fill(), this.ctx.restore()) : r.type === Ht && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + a / 2, r.bounds.top + a / 2, a / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = Y(Sn), this.ctx.fill(), this.ctx.restore())), JB(r) && r.value.length) {
              switch (l = this.createFontStyle(s), y = l[0], u = l[1], w = this.fontMetrics.getMetrics(y, u).baseline, this.ctx.font = y, this.ctx.fillStyle = Y(s.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = WB(r.styles.textAlign), p = Lt(r), g = 0, r.styles.textAlign) {
                case 1:
                  g += p.width / 2;
                  break;
                case 2:
                  g += p.width;
              }
              d = p.add(g, 0, 0, -p.height / 2 + 1), this.ctx.save(), this.path([new f(p.left, p.top), new f(p.left + p.width, p.top), new f(p.left + p.width, p.top + p.height), new f(p.left, p.top + p.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new De(r.value, d), s.letterSpacing, w), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
            }
            if (!W(r.styles.display, 2048))
              return [3, 20];
            if (r.styles.listStyleImage === null)
              return [3, 19];
            if ((h = r.styles.listStyleImage).type !== 0)
              return [3, 18];
            C = void 0, F = h.url, U.label = 15;
          case 15:
            return U.trys.push([15, 17, , 18]), [4, this.context.cache.match(F)];
          case 16:
            return C = U.sent(), this.ctx.drawImage(C, r.bounds.left - (C.width + 10), r.bounds.top), [3, 18];
          case 17:
            return U.sent(), this.context.logger.error("Error loading list-style-image " + F), [3, 18];
          case 18:
            return [3, 20];
          case 19:
            t.listValue && r.styles.listStyleType !== -1 && (y = this.createFontStyle(s)[0], this.ctx.font = y, this.ctx.fillStyle = Y(s.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", p = new xA(r.bounds.left, r.bounds.top + M(r.styles.paddingTop, r.bounds.width), r.bounds.width, fn(s.lineHeight, s.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new De(t.listValue, p), s.letterSpacing, fn(s.lineHeight, s.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), U.label = 20;
          case 20:
            return [2];
        }
      });
    });
  }, A.prototype.renderStackContent = function(t) {
    return eA(this, void 0, void 0, function() {
      var r, n, s, o, i, B, c, a, l, u, w, g, d, h, C;
      return z(this, function(F) {
        switch (F.label) {
          case 0:
            return W(t.element.container.flags, 16), [4, this.renderNodeBackgroundAndBorders(t.element)];
          case 1:
            F.sent(), r = 0, n = t.negativeZIndex, F.label = 2;
          case 2:
            return r < n.length ? (C = n[r], [4, this.renderStack(C)]) : [3, 5];
          case 3:
            F.sent(), F.label = 4;
          case 4:
            return r++, [3, 2];
          case 5:
            return [4, this.renderNodeContent(t.element)];
          case 6:
            F.sent(), s = 0, o = t.nonInlineLevel, F.label = 7;
          case 7:
            return s < o.length ? (C = o[s], [4, this.renderNode(C)]) : [3, 10];
          case 8:
            F.sent(), F.label = 9;
          case 9:
            return s++, [3, 7];
          case 10:
            i = 0, B = t.nonPositionedFloats, F.label = 11;
          case 11:
            return i < B.length ? (C = B[i], [4, this.renderStack(C)]) : [3, 14];
          case 12:
            F.sent(), F.label = 13;
          case 13:
            return i++, [3, 11];
          case 14:
            c = 0, a = t.nonPositionedInlineLevel, F.label = 15;
          case 15:
            return c < a.length ? (C = a[c], [4, this.renderStack(C)]) : [3, 18];
          case 16:
            F.sent(), F.label = 17;
          case 17:
            return c++, [3, 15];
          case 18:
            l = 0, u = t.inlineLevel, F.label = 19;
          case 19:
            return l < u.length ? (C = u[l], [4, this.renderNode(C)]) : [3, 22];
          case 20:
            F.sent(), F.label = 21;
          case 21:
            return l++, [3, 19];
          case 22:
            w = 0, g = t.zeroOrAutoZIndexOrTransformedOrOpacity, F.label = 23;
          case 23:
            return w < g.length ? (C = g[w], [4, this.renderStack(C)]) : [3, 26];
          case 24:
            F.sent(), F.label = 25;
          case 25:
            return w++, [3, 23];
          case 26:
            d = 0, h = t.positiveZIndex, F.label = 27;
          case 27:
            return d < h.length ? (C = h[d], [4, this.renderStack(C)]) : [3, 30];
          case 28:
            F.sent(), F.label = 29;
          case 29:
            return d++, [3, 27];
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
    t.forEach(function(n, s) {
      var o = QA(n) ? n.start : n;
      s === 0 ? r.ctx.moveTo(o.x, o.y) : r.ctx.lineTo(o.x, o.y), QA(n) && r.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y);
    });
  }, A.prototype.renderRepeat = function(t, r, n, s) {
    this.path(t), this.ctx.fillStyle = r, this.ctx.translate(n, s), this.ctx.fill(), this.ctx.translate(-n, -s);
  }, A.prototype.resizeImage = function(t, r, n) {
    var s;
    if (t.width === r && t.height === n)
      return t;
    var o = ((s = this.canvas.ownerDocument) !== null && s !== void 0 ? s : document).createElement("canvas");
    return o.width = Math.max(1, r), o.height = Math.max(1, n), o.getContext("2d").drawImage(t, 0, 0, t.width, t.height, 0, 0, r, n), o;
  }, A.prototype.renderBackgroundImage = function(t) {
    return eA(this, void 0, void 0, function() {
      var r, n, s, o, i, B;
      return z(this, function(c) {
        switch (c.label) {
          case 0:
            r = t.styles.backgroundImage.length - 1, n = function(a) {
              var l, u, w, g, d, h, C, F, y, p, U, I, v, H, D, rA, oA, J, $, AA, OA, lA, uA, WA, pA, TA, YA, ZA, LA, MA, $A;
              return z(this, function(nA) {
                switch (nA.label) {
                  case 0:
                    if (a.type !== 0)
                      return [3, 5];
                    l = void 0, u = a.url, nA.label = 1;
                  case 1:
                    return nA.trys.push([1, 3, , 4]), [4, s.context.cache.match(u)];
                  case 2:
                    return l = nA.sent(), [3, 4];
                  case 3:
                    return nA.sent(), s.context.logger.error("Error loading background-image " + u), [3, 4];
                  case 4:
                    return l && (w = nr(t, r, [l.width, l.height, l.width / l.height]), rA = w[0], lA = w[1], uA = w[2], $ = w[3], AA = w[4], H = s.ctx.createPattern(s.resizeImage(l, $, AA), "repeat"), s.renderRepeat(rA, H, lA, uA)), [3, 6];
                  case 5:
                    a.type === 1 ? (g = nr(t, r, [null, null, null]), rA = g[0], lA = g[1], uA = g[2], $ = g[3], AA = g[4], d = yi(a.angle, $, AA), h = d[0], C = d[1], F = d[2], y = d[3], p = d[4], (U = document.createElement("canvas")).width = $, U.height = AA, I = U.getContext("2d"), v = I.createLinearGradient(C, y, F, p), Fn(a.stops, h).forEach(function(S) {
                      return v.addColorStop(S.stop, Y(S.color));
                    }), I.fillStyle = v, I.fillRect(0, 0, $, AA), $ > 0 && AA > 0 && (H = s.ctx.createPattern(U, "repeat"), s.renderRepeat(rA, H, lA, uA))) : function(S) {
                      return S.type === 2;
                    }(a) && (D = nr(t, r, [null, null, null]), rA = D[0], oA = D[1], J = D[2], $ = D[3], AA = D[4], OA = a.position.length === 0 ? [_r] : a.position, lA = M(OA[0], $), uA = M(OA[OA.length - 1], AA), WA = function(S, O, T, iA, aA) {
                      var CA = 0, fA = 0;
                      switch (S.size) {
                        case 0:
                          S.shape === 0 ? CA = fA = Math.min(Math.abs(O), Math.abs(O - iA), Math.abs(T), Math.abs(T - aA)) : S.shape === 1 && (CA = Math.min(Math.abs(O), Math.abs(O - iA)), fA = Math.min(Math.abs(T), Math.abs(T - aA)));
                          break;
                        case 2:
                          if (S.shape === 0)
                            CA = fA = Math.min(UA(O, T), UA(O, T - aA), UA(O - iA, T), UA(O - iA, T - aA));
                          else if (S.shape === 1) {
                            var de = Math.min(Math.abs(T), Math.abs(T - aA)) / Math.min(Math.abs(O), Math.abs(O - iA)), tn = pn(iA, aA, O, T, !0), Xt = tn[0], Wt = tn[1];
                            fA = de * (CA = UA(Xt - O, (Wt - T) / de));
                          }
                          break;
                        case 1:
                          S.shape === 0 ? CA = fA = Math.max(Math.abs(O), Math.abs(O - iA), Math.abs(T), Math.abs(T - aA)) : S.shape === 1 && (CA = Math.max(Math.abs(O), Math.abs(O - iA)), fA = Math.max(Math.abs(T), Math.abs(T - aA)));
                          break;
                        case 3:
                          if (S.shape === 0)
                            CA = fA = Math.max(UA(O, T), UA(O, T - aA), UA(O - iA, T), UA(O - iA, T - aA));
                          else if (S.shape === 1) {
                            de = Math.max(Math.abs(T), Math.abs(T - aA)) / Math.max(Math.abs(O), Math.abs(O - iA));
                            var rn = pn(iA, aA, O, T, !1);
                            Xt = rn[0], Wt = rn[1], fA = de * (CA = UA(Xt - O, (Wt - T) / de));
                          }
                      }
                      return Array.isArray(S.size) && (CA = M(S.size[0], iA), fA = S.size.length === 2 ? M(S.size[1], aA) : CA), [CA, fA];
                    }(a, lA, uA, $, AA), pA = WA[0], TA = WA[1], pA > 0 && TA > 0 && (YA = s.ctx.createRadialGradient(oA + lA, J + uA, 0, oA + lA, J + uA, pA), Fn(a.stops, 2 * pA).forEach(function(S) {
                      return YA.addColorStop(S.stop, Y(S.color));
                    }), s.path(rA), s.ctx.fillStyle = YA, pA !== TA ? (ZA = t.bounds.left + 0.5 * t.bounds.width, LA = t.bounds.top + 0.5 * t.bounds.height, $A = 1 / (MA = TA / pA), s.ctx.save(), s.ctx.translate(ZA, LA), s.ctx.transform(1, 0, 0, MA, 0, 0), s.ctx.translate(-ZA, -LA), s.ctx.fillRect(oA, $A * (J - LA) + LA, $, AA * $A), s.ctx.restore()) : s.ctx.fill())), nA.label = 6;
                  case 6:
                    return r--, [2];
                }
              });
            }, s = this, o = 0, i = t.styles.backgroundImage.slice(0).reverse(), c.label = 1;
          case 1:
            return o < i.length ? (B = i[o], [5, n(B)]) : [3, 4];
          case 2:
            c.sent(), c.label = 3;
          case 3:
            return o++, [3, 1];
          case 4:
            return [2];
        }
      });
    });
  }, A.prototype.renderSolidBorder = function(t, r, n) {
    return eA(this, void 0, void 0, function() {
      return z(this, function(s) {
        return this.path(Xn(n, r)), this.ctx.fillStyle = Y(t), this.ctx.fill(), [2];
      });
    });
  }, A.prototype.renderDoubleBorder = function(t, r, n, s) {
    return eA(this, void 0, void 0, function() {
      var o, i;
      return z(this, function(B) {
        switch (B.label) {
          case 0:
            return r < 3 ? [4, this.renderSolidBorder(t, n, s)] : [3, 2];
          case 1:
            return B.sent(), [2];
          case 2:
            return o = function(c, a) {
              switch (a) {
                case 0:
                  return dA(c.topLeftBorderBox, c.topLeftBorderDoubleOuterBox, c.topRightBorderBox, c.topRightBorderDoubleOuterBox);
                case 1:
                  return dA(c.topRightBorderBox, c.topRightBorderDoubleOuterBox, c.bottomRightBorderBox, c.bottomRightBorderDoubleOuterBox);
                case 2:
                  return dA(c.bottomRightBorderBox, c.bottomRightBorderDoubleOuterBox, c.bottomLeftBorderBox, c.bottomLeftBorderDoubleOuterBox);
                default:
                  return dA(c.bottomLeftBorderBox, c.bottomLeftBorderDoubleOuterBox, c.topLeftBorderBox, c.topLeftBorderDoubleOuterBox);
              }
            }(s, n), this.path(o), this.ctx.fillStyle = Y(t), this.ctx.fill(), i = function(c, a) {
              switch (a) {
                case 0:
                  return dA(c.topLeftBorderDoubleInnerBox, c.topLeftPaddingBox, c.topRightBorderDoubleInnerBox, c.topRightPaddingBox);
                case 1:
                  return dA(c.topRightBorderDoubleInnerBox, c.topRightPaddingBox, c.bottomRightBorderDoubleInnerBox, c.bottomRightPaddingBox);
                case 2:
                  return dA(c.bottomRightBorderDoubleInnerBox, c.bottomRightPaddingBox, c.bottomLeftBorderDoubleInnerBox, c.bottomLeftPaddingBox);
                default:
                  return dA(c.bottomLeftBorderDoubleInnerBox, c.bottomLeftPaddingBox, c.topLeftBorderDoubleInnerBox, c.topLeftPaddingBox);
              }
            }(s, n), this.path(i), this.ctx.fill(), [2];
        }
      });
    });
  }, A.prototype.renderNodeBackgroundAndBorders = function(t) {
    return eA(this, void 0, void 0, function() {
      var r, n, s, o, i, B, c, a, l = this;
      return z(this, function(u) {
        switch (u.label) {
          case 0:
            return this.applyEffects(t.getEffects(2)), r = t.container.styles, n = !JA(r.backgroundColor) || r.backgroundImage.length, s = [{ style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth }, { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth }, { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth }, { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }], o = XB(ae(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(o), this.ctx.clip(), JA(r.backgroundColor) || (this.ctx.fillStyle = Y(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
          case 1:
            u.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(w) {
              l.ctx.save();
              var g, d, h, C, F, y = vt(t.curves), p = w.inset ? 0 : 1e4, U = (g = y, d = -p + (w.inset ? 1 : -1) * w.spread.number, h = (w.inset ? 1 : -1) * w.spread.number, C = w.spread.number * (w.inset ? -2 : 2), F = w.spread.number * (w.inset ? -2 : 2), g.map(function(I, v) {
                switch (v) {
                  case 0:
                    return I.add(d, h);
                  case 1:
                    return I.add(d + C, h);
                  case 2:
                    return I.add(d + C, h + F);
                  case 3:
                    return I.add(d, h + F);
                }
                return I;
              }));
              w.inset ? (l.path(y), l.ctx.clip(), l.mask(U)) : (l.mask(y), l.ctx.clip(), l.path(U)), l.ctx.shadowOffsetX = w.offsetX.number + p, l.ctx.shadowOffsetY = w.offsetY.number, l.ctx.shadowColor = Y(w.color), l.ctx.shadowBlur = w.blur.number, l.ctx.fillStyle = w.inset ? Y(w.color) : "rgba(0,0,0,1)", l.ctx.fill(), l.ctx.restore();
            }), u.label = 2;
          case 2:
            i = 0, B = 0, c = s, u.label = 3;
          case 3:
            return B < c.length ? (a = c[B]).style !== 0 && !JA(a.color) && a.width > 0 ? a.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(a.color, a.width, i, t.curves, 2)] : [3, 11] : [3, 13];
          case 4:
            return u.sent(), [3, 11];
          case 5:
            return a.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(a.color, a.width, i, t.curves, 3)];
          case 6:
            return u.sent(), [3, 11];
          case 7:
            return a.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(a.color, a.width, i, t.curves)];
          case 8:
            return u.sent(), [3, 11];
          case 9:
            return [4, this.renderSolidBorder(a.color, i, t.curves)];
          case 10:
            u.sent(), u.label = 11;
          case 11:
            i++, u.label = 12;
          case 12:
            return B++, [3, 3];
          case 13:
            return [2];
        }
      });
    });
  }, A.prototype.renderDashedDottedBorder = function(t, r, n, s, o) {
    return eA(this, void 0, void 0, function() {
      var i, B, c, a, l, u, w, g, d, h, C, F, y, p, U, I;
      return z(this, function(v) {
        return this.ctx.save(), i = function(H, D) {
          switch (D) {
            case 0:
              return nt(H.topLeftBorderStroke, H.topRightBorderStroke);
            case 1:
              return nt(H.topRightBorderStroke, H.bottomRightBorderStroke);
            case 2:
              return nt(H.bottomRightBorderStroke, H.bottomLeftBorderStroke);
            default:
              return nt(H.bottomLeftBorderStroke, H.topLeftBorderStroke);
          }
        }(s, n), B = Xn(s, n), o === 2 && (this.path(B), this.ctx.clip()), QA(B[0]) ? (c = B[0].start.x, a = B[0].start.y) : (c = B[0].x, a = B[0].y), QA(B[1]) ? (l = B[1].end.x, u = B[1].end.y) : (l = B[1].x, u = B[1].y), w = Math.abs(n === 0 || n === 2 ? c - l : a - u), this.ctx.beginPath(), o === 3 ? this.formatPath(i) : this.formatPath(B.slice(0, 2)), g = r < 3 ? 3 * r : 2 * r, d = r < 3 ? 2 * r : r, o === 3 && (g = r, d = r), h = !0, w <= 2 * g ? h = !1 : w <= 2 * g + d ? (g *= C = w / (2 * g + d), d *= C) : (F = Math.floor((w + d) / (g + d)), y = (w - F * g) / (F - 1), d = (p = (w - (F + 1) * g) / F) <= 0 || Math.abs(d - y) < Math.abs(d - p) ? y : p), h && (o === 3 ? this.ctx.setLineDash([0, g + d]) : this.ctx.setLineDash([g, d])), o === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = 2 * r + 1.1, this.ctx.strokeStyle = Y(t), this.ctx.stroke(), this.ctx.setLineDash([]), o === 2 && (QA(B[0]) && (U = B[3], I = B[0], this.ctx.beginPath(), this.formatPath([new f(U.end.x, U.end.y), new f(I.start.x, I.start.y)]), this.ctx.stroke()), QA(B[1]) && (U = B[1], I = B[2], this.ctx.beginPath(), this.formatPath([new f(U.end.x, U.end.y), new f(I.start.x, I.start.y)]), this.ctx.stroke())), this.ctx.restore(), [2];
      });
    });
  }, A.prototype.render = function(t) {
    return eA(this, void 0, void 0, function() {
      var r;
      return z(this, function(n) {
        switch (n.label) {
          case 0:
            return this.options.backgroundColor && (this.ctx.fillStyle = Y(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), s = new co(t, null), o = new Bo(s), Mr(s, o, o, i = []), lo(s.container, i), r = o, [4, this.renderStack(r)];
          case 1:
            return n.sent(), this.applyEffects([]), [2, this.canvas];
        }
        var s, o, i;
      });
    });
  }, A;
}(uo), JB = function(e) {
  return e instanceof js || e instanceof Zs || e instanceof Wr && e.type !== Ht && e.type !== Et;
}, XB = function(e, A) {
  switch (e) {
    case 0:
      return vt(A);
    case 2:
      return function(t) {
        return [t.topLeftContentBox, t.topRightContentBox, t.bottomRightContentBox, t.bottomLeftContentBox];
      }(A);
    default:
      return bt(A);
  }
}, WB = function(e) {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    default:
      return "left";
  }
}, YB = ["-apple-system", "system-ui"], ZB = function(e) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function(A) {
    return YB.indexOf(A) === -1;
  }) : e;
}, jB = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this;
    return n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = r, n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px", n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), n;
  }
  return FA(A, e), A.prototype.render = function(t) {
    return eA(this, void 0, void 0, function() {
      var r, n;
      return z(this, function(s) {
        switch (s.label) {
          case 0:
            return r = kr(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, qB(r)];
          case 1:
            return n = s.sent(), this.options.backgroundColor && (this.ctx.fillStyle = Y(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
        }
      });
    });
  }, A;
}(uo), qB = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, zB = function() {
  function e(A) {
    var t = A.id, r = A.enabled;
    this.id = t, this.enabled = r, this.start = Date.now();
  }
  return e.prototype.debug = function() {
    for (var A = [], t = 0; t < arguments.length; t++)
      A[t] = arguments[t];
    this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Ve([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
  }, e.prototype.getTime = function() {
    return Date.now() - this.start;
  }, e.prototype.info = function() {
    for (var A = [], t = 0; t < arguments.length; t++)
      A[t] = arguments[t];
    this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Ve([this.id, this.getTime() + "ms"], A));
  }, e.prototype.warn = function() {
    for (var A = [], t = 0; t < arguments.length; t++)
      A[t] = arguments[t];
    this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Ve([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
  }, e.prototype.error = function() {
    for (var A = [], t = 0; t < arguments.length; t++)
      A[t] = arguments[t];
    this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Ve([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
  }, e.instances = {}, e;
}(), $B = function() {
  function e(A, t) {
    var r;
    this.windowBounds = t, this.instanceName = "#" + e.instanceCount++, this.logger = new zB({ id: this.instanceName, enabled: A.logging }), this.cache = (r = A.cache) !== null && r !== void 0 ? r : new KB(this, A);
  }
  return e.instanceCount = 1, e;
}();
typeof window < "u" && io.setContext(window);
var Ac = function(e, A) {
  return eA(void 0, void 0, void 0, function() {
    var t, r, n, s, o, i, B, c, a, l, u, w, g, d, h, C, F, y, p, U, I, v, H, D, rA, oA, J, $, AA, OA, lA, uA, WA, pA, TA, YA, ZA, LA;
    return z(this, function(MA) {
      switch (MA.label) {
        case 0:
          if (!e || typeof e != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (!(t = e.ownerDocument))
            throw new Error("Element is not attached to a Document");
          if (!(r = t.defaultView))
            throw new Error("Document is not attached to a Window");
          return n = { allowTaint: (v = A.allowTaint) !== null && v !== void 0 && v, imageTimeout: (H = A.imageTimeout) !== null && H !== void 0 ? H : 15e3, proxy: A.proxy, useCORS: (D = A.useCORS) !== null && D !== void 0 && D }, s = Fr({ logging: (rA = A.logging) === null || rA === void 0 || rA, cache: A.cache }, n), o = { windowWidth: (oA = A.windowWidth) !== null && oA !== void 0 ? oA : r.innerWidth, windowHeight: (J = A.windowHeight) !== null && J !== void 0 ? J : r.innerHeight, scrollX: ($ = A.scrollX) !== null && $ !== void 0 ? $ : r.pageXOffset, scrollY: (AA = A.scrollY) !== null && AA !== void 0 ? AA : r.pageYOffset }, i = new xA(o.scrollX, o.scrollY, o.windowWidth, o.windowHeight), B = new $B(s, i), c = (OA = A.foreignObjectRendering) !== null && OA !== void 0 && OA, a = { allowTaint: (lA = A.allowTaint) !== null && lA !== void 0 && lA, onclone: A.onclone, ignoreElements: A.ignoreElements, inlineImages: c, copyStyles: c }, B.logger.debug("Starting document clone with size " + i.width + "x" + i.height + " scrolled to " + -i.left + "," + -i.top), l = new Nn(B, e, a), (u = l.clonedReferenceElement) ? [4, l.toIFrame(t, i)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return w = MA.sent(), g = Yr(u) || u.tagName === "HTML" ? function($A) {
            var nA = $A.body, S = $A.documentElement;
            if (!nA || !S)
              throw new Error("Unable to get document size");
            var O = Math.max(Math.max(nA.scrollWidth, S.scrollWidth), Math.max(nA.offsetWidth, S.offsetWidth), Math.max(nA.clientWidth, S.clientWidth)), T = Math.max(Math.max(nA.scrollHeight, S.scrollHeight), Math.max(nA.offsetHeight, S.offsetHeight), Math.max(nA.clientHeight, S.clientHeight));
            return new xA(0, 0, O, T);
          }(u.ownerDocument) : Tt(B, u), d = g.width, h = g.height, C = g.left, F = g.top, y = ec(B, u, A.backgroundColor), p = { canvas: A.canvas, backgroundColor: y, scale: (WA = (uA = A.scale) !== null && uA !== void 0 ? uA : r.devicePixelRatio) !== null && WA !== void 0 ? WA : 1, x: ((pA = A.x) !== null && pA !== void 0 ? pA : 0) + C, y: ((TA = A.y) !== null && TA !== void 0 ? TA : 0) + F, width: (YA = A.width) !== null && YA !== void 0 ? YA : Math.ceil(d), height: (ZA = A.height) !== null && ZA !== void 0 ? ZA : Math.ceil(h) }, c ? (B.logger.debug("Document cloned, using foreign object rendering"), [4, new jB(B, p).render(u)]) : [3, 3];
        case 2:
          return U = MA.sent(), [3, 5];
        case 3:
          return B.logger.debug("Document cloned, element located at " + C + "," + F + " with size " + d + "x" + h + " using computed rendering"), B.logger.debug("Starting DOM parsing"), I = $s(B, u), y === I.styles.backgroundColor && (I.styles.backgroundColor = DA.TRANSPARENT), B.logger.debug("Starting renderer for element at " + p.x + "," + p.y + " with size " + p.width + "x" + p.height), [4, new _B(B, p).render(I)];
        case 4:
          U = MA.sent(), MA.label = 5;
        case 5:
          return ((LA = A.removeContainer) === null || LA === void 0 || LA) && (Nn.destroy(w) || B.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), B.logger.debug("Finished rendering"), [2, U];
      }
    });
  });
}, ec = function(e, A, t) {
  var r = A.ownerDocument, n = r.documentElement ? Le(e, getComputedStyle(r.documentElement).backgroundColor) : DA.TRANSPARENT, s = r.body ? Le(e, getComputedStyle(r.body).backgroundColor) : DA.TRANSPARENT, o = typeof t == "string" ? Le(e, t) : t === null ? DA.TRANSPARENT : 4294967295;
  return A === r.documentElement ? JA(n) ? JA(s) ? o : s : n : o;
};
class tc {
  async captureScreenshot() {
    var A, t;
    return (A = document.body, t === void 0 && (t = {}), Ac(A, t)).then((r) => r);
  }
}
const go = async () => {
  await new tc().captureScreenshot().then((A) => {
    const t = document.createElement("img");
    t.src = A.toDataURL(), ys(t.src, cA.IMAGE);
  }).catch((A) => {
    console.error("Error capturing screenshot:", A);
  });
}, wo = () => {
  xe(!1);
  let e = null;
  e = ((A, t) => {
    const r = document.createElement("img");
    r.src = A, r.setAttribute("draggable", "false");
    const n = document.createElement("button");
    return n.classList.add("shake-sdk-bubble"), n.appendChild(r), Go(n, t), n;
  })("data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20width='16px'%20height='16px'%20viewBox='0%200%2032%2032'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform='translate(-35.852326,-90.237974)'%3e%3cpath%20style='fill:%23ff0000'%20d='m%2067.852325,106.23797%20a%2016,16%200%200%201%20-16,16%2016,16%200%200%201%20-16,-16%2016,16%200%200%201%2016,-15.999997%2016,16%200%200%201%2016,15.999997%20z'/%3e%3c/g%3e%3c/svg%3e", () => (async (A = null) => {
    A == null || A.remove(), await go(), Hs();
  })(e)), document.body.appendChild(e);
}, rc = (e) => ((A, t) => {
  let r = !1;
  const n = K();
  return n.classList.add("shake-sdk-context-menu"), t.forEach((s) => n.appendChild(s)), document.addEventListener("click", function(s) {
    r && s.target !== A && (n.style.display = "none", r = !1);
  }), A.onclick = (s) => {
    s.stopPropagation(), r ? (n.style.display = "none", r = !1) : (n.style.display = "block", r = !0), n.style.left = A.getBoundingClientRect().left + "px", n.style.top = A.getBoundingClientRect().top + "px";
  }, n;
})(e, [an({ img: "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15055_29642)'%3e%3cpath%20d='M12.3994%208.47314C13.6969%209.77065%2013.6969%2011.8743%2012.3994%2013.1719C11.1019%2014.4694%208.99819%2014.4694%207.70068%2013.1719C6.40316%2011.8743%206.40316%209.77065%207.70068%208.47314C8.99819%207.17562%2011.1019%207.17562%2012.3994%208.47314Z'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.5%207.49992V14.9999C17.5%2015.9208%2016.7542%2016.6666%2015.8333%2016.6666H4.16667C3.24583%2016.6666%202.5%2015.9208%202.5%2014.9999V7.49992C2.5%206.57908%203.24583%205.83325%204.16667%205.83325H5.83333L7.05167%203.74659C7.20083%203.49075%207.475%203.33325%207.77167%203.33325H12.1917C12.4842%203.33325%2012.755%203.48659%2012.9058%203.73659L14.1667%205.83325H15.8333C16.7542%205.83325%2017.5%206.57908%2017.5%207.49992Z'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15055_29642'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", text: X().shake_sdk_dialog_add_attachment_grab_screenshot, onClick: wo }), an({ img: "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15055_29718)'%3e%3cpath%20d='M10.9375%2014.7916H4.375C3.33917%2014.7916%202.5%2013.9524%202.5%2012.9166V7.08325C2.5%206.04742%203.33917%205.20825%204.375%205.20825H10.9375C11.9733%205.20825%2012.8125%206.04742%2012.8125%207.08325V12.9166C12.8125%2013.9524%2011.9733%2014.7916%2010.9375%2014.7916Z'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.8125%2010.9141L15.975%2013.4591C16.5883%2013.9533%2017.5%2013.5166%2017.5%2012.7291V7.27077C17.5%206.48327%2016.5883%206.04661%2015.975%206.54077L12.8125%209.08577'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15055_29718'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", text: X().shake_sdk_dialog_add_attachment_record_screen, onClick: Is })]), nc = ({ attachments: e, onAttachmentPreviewChanged: A }) => {
  const t = V.attachmentsManager, r = /* @__PURE__ */ new Map();
  let n = 0;
  const s = (c) => {
    n = Array.from(r.keys()).indexOf(c), i();
  }, o = (c) => {
    t.removeAttachment(c);
  };
  t.removeObservers.push((c) => {
    const a = r.get(c);
    a == null || a.remove(), r.delete(c), r.size - 1 < n && (n = r.size - 1), i();
  });
  const i = () => {
    if (n < 0)
      return void A(null);
    const c = Array.from(r.keys())[n], a = Array.from(r.values())[n], l = "shake-sdk-attachment-item-selected", u = document.getElementsByClassName(l);
    for (const w of u)
      w.classList.remove(l);
    a == null || a.classList.add(l), A(c);
  }, B = K();
  return B.classList.add("shake-sdk-attachments-items"), e.forEach((c) => {
    const a = ((l, u, w) => {
      const g = Se(ms);
      let d;
      g.classList.add("shake-sdk-attachment-remove"), g.onclick = (U) => {
        U.stopPropagation(), w(l);
      }, d = l.type == cA.IMAGE ? IA(l.data) : Ot({ src: l.data + "#t=3", autoplay: !0 }), d.classList.add("shake-sdk-attachment-item-thumbnail");
      const h = Pr();
      h.classList.add("shake-sdk-attachment-item-card"), h.appendChild(d), h.appendChild(g);
      const C = l.type == cA.IMAGE ? X().shake_sdk_dialog_add_attachment_type_image : X().shake_sdk_dialog_add_attachment_type_video, F = Mo(C), y = K();
      y.classList.add("shake-sdk-attachment-item-title"), y.appendChild(F);
      const p = K();
      return p.classList.add("shake-sdk-attachment-item"), p.onclick = () => u(l), p.appendChild(h), p.appendChild(y), p;
    })(c, s, o);
    r.set(c, a), B.appendChild(a);
  }), B.appendChild((() => {
    const c = Se(Es);
    c.classList.add("shake-sdk-attachment-add-button");
    const a = K();
    return a.classList.add("shake-sdk-attachments-add-item"), a.appendChild(c), a.appendChild(rc(c)), a;
  })()), i(), B;
}, sc = (e) => {
  const A = K();
  return A.classList.add("shake-sdk-attachments-preview"), e && (e.type == cA.IMAGE ? A.appendChild(((t) => {
    const r = IA(t), n = K();
    return n.classList.add("shake-sdk-image-preview"), n.appendChild(r), n;
  })(e.data)) : A.appendChild(((t) => {
    const r = Ot({ src: t, controls: !0, autoplay: !1 }), n = K();
    return n.classList.add("shake-sdk-video-preview"), n.appendChild(r), n;
  })(e.data))), A;
}, Qo = (e, A) => {
  const t = Fs(e), r = document.createElement("div");
  r.classList.add("shake-sdk-sheet"), r.appendChild(t), A.forEach((s) => {
    r.appendChild(oc(s, () => {
      s.onClick(), n.remove();
    }));
  });
  const n = document.createElement("div");
  return n.classList.add("shake-sdk-sheet-root"), n.appendChild(r), n.onclick = () => n.remove(), n;
}, oc = (e, A) => {
  const t = IA(e.icon), r = ((s) => {
    const o = document.createElement("p");
    return o.classList.add("shake-sdk-text-p1"), o.innerText = s, o;
  })(e.text), n = document.createElement("button");
  return n.classList.add("shake-sdk-sheet-item"), n.onclick = A, n.appendChild(t), n.appendChild(r), n;
}, ho = (e) => {
  document.body.appendChild(e);
}, ic = ({ label: e, items: A, onSelectionChange: t, selectedValue: r }) => {
  const n = K(), s = K();
  s.classList.add("shake-sdk-select-dropdown");
  const o = IA("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='caret-down-icon'%20clip-path='url(%23clip0_15248_22126)'%3e%3cpath%20id='Vector'%20d='M8%2010L12%2014L16%2010'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15248_22126'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  o.classList.add("shake-sdk-dropdown-icon"), s.appendChild(o);
  const i = document.createElement("label");
  i.textContent = e, i.classList.add("shake-sdk-select-dropdown-label");
  const B = K();
  B.classList.add("shake-sdk-select-dropdown-chosen"), s.appendChild(i);
  const c = document.createElement("ul");
  c.classList.add("shake-sdk-select-options"), A.forEach((l) => {
    const u = document.createElement("li");
    u.classList.add("shake-sdk-select-option"), u.dataset.value = l.value, u.textContent = l.label, u.addEventListener("click", function() {
      B.textContent = u.textContent, c.style.display = "none", u.dataset.value && t(u.dataset.value);
    }), c.appendChild(u);
  });
  const a = Array.from(c.children).find((l) => l.dataset.value === r);
  return a && (B.textContent = a.textContent), s.addEventListener("click", function() {
    window.innerWidth > 1024 ? (c.style.display = c.style.display === "block" ? "none" : "block", c.style.display === "block" ? s.classList.add("active") : s.classList.remove("active")) : ho(((l, u, w) => {
      const g = [];
      return u.forEach((d) => {
        g.push({ text: d.label, icon: d.icon, onClick: () => {
          w(d);
        } });
      }), Qo(l, g);
    })(e, A, (l) => {
      B.textContent = l.label, t(r);
    }));
  }), s.addEventListener("focus", function() {
    s.classList.add("active");
  }), s.addEventListener("blur", function() {
    s.classList.remove("active");
  }), document.addEventListener("click", (l) => {
    const u = l.target;
    s.contains(u) || c.contains(u) || (c.style.display = "none", s.classList.remove("active"));
  }), s.append(B), n.appendChild(s), n.appendChild(c), n;
}, Kt = ({ image: e, onClick: A }) => {
  const t = IA(e), r = document.createElement("button");
  return r.classList.add("shake-sdk-toolbar-button"), r.onclick = A, r.appendChild(t), r;
}, Co = "data:image/svg+xml,%3csvg%20width='50'%20height='51'%20viewBox='0%200%2050%2051'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.834%2021.5598L29.1673%2029.8931'%20stroke='%23FFFFFF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M29.1673%2021.56L20.834%2029.8933'%20stroke='%23FFFFFF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", ac = (e) => {
  document.body.appendChild(((A) => {
    const t = Kt({ image: Co, onClick: () => {
      o.remove();
    } }), r = K();
    r.classList.add("shake-sdk-image-preview-toolbar-fs"), r.appendChild(t);
    const n = IA(A);
    n.classList.add("shake-sdk-image-preview-fs");
    const s = K();
    s.classList.add("shake-sdk-image-preview-content-fs"), s.appendChild(n);
    const o = K();
    return o.classList.add("shake-sdk-image-preview-root-fs"), o.appendChild(r), o.appendChild(s), o;
  })(e.data));
}, Bc = (e) => {
  document.body.appendChild(((A) => {
    const t = Kt({ image: Co, onClick: () => {
      s.remove();
    } }), r = K();
    r.classList.add("shake-sdk-video-preview-toolbar-fs"), r.appendChild(t);
    const n = Ot({ src: A, controls: !0, autoplay: !0 });
    n.classList.add("shake-sdk-video-preview-fs");
    const s = K();
    return s.classList.add("shake-sdk-video-preview-root-fs"), s.appendChild(r), s.appendChild(n), s;
  })(e.data));
}, cc = (e) => {
  const A = V.attachmentsManager, t = /* @__PURE__ */ new Map(), r = (i) => {
    i.type == cA.IMAGE ? ac(i) : i.type == cA.VIDEO && Bc(i);
  }, n = (i) => {
    A.removeAttachment(i);
  };
  A.removeObservers.push((i) => {
    const B = t.get(i);
    B == null || B.remove(), t.delete(i);
  });
  const s = K();
  s.classList.add("shake-sdk-attachments-items-small"), e.forEach((i) => {
    const B = ((c, a, l) => {
      const u = Se(ms);
      u.classList.add("shake-sdk-attachment-item-remove-small"), u.onclick = (d) => {
        d.stopPropagation(), l(c);
      };
      const w = c.type == cA.IMAGE ? IA(c.data) : Ot({ src: c.data + "#t=3", autoplay: !0 });
      w.classList.add("shake-sdk-attachment-item-thumbnail-small"), w.onclick = () => a(c);
      const g = K();
      return g.classList.add("shake-sdk-attachment-item-small"), g.appendChild(w), g.appendChild(u), g;
    })(i, r, n);
    t.set(i, B), s.appendChild(B);
  });
  const o = ((i) => {
    const B = Se(Es);
    B.classList.add("shake-sdk-attachment-add-button-small"), B.onclick = i;
    const c = K();
    return c.classList.add("shake-sdk-attachments-add-item-small"), c.appendChild(B), c;
  })(() => {
    ho((() => {
      const i = [{ text: X().shake_sdk_dialog_add_attachment_grab_screenshot, icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%20viewportWidth='54'%20viewportHeight='54'%3e%3cpath%20fill='%2300000000'%20fill-rule='evenOdd'%20d='M13.5,6.75h-2.25c-2.485,0%20-4.5,2.015%20-4.5,4.5v2.25M40.5,47.25h2.25c2.485,0%204.5,-2.015%204.5,-4.5V40.5M6.75,40.5v2.25c0,2.485%202.015,4.5%204.5,4.5h2.25M47.25,13.5v-2.25c0,-2.485%20-2.015,-4.5%20-4.5,-4.5H40.5'%20stroke-width='3.38'%20stroke='%234CD266'%20strokeLineCap='round'%20strokeLineJoin='round'/%3e%3c/svg%3e", onClick: wo }, { text: X().shake_sdk_dialog_add_attachment_record_screen, icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%20viewportWidth='54'%20viewportHeight='54'%3e%3cpath%20fill='%2300000000'%20fill-rule='evenOdd'%20d='M37.487,32.702L32.57,29.67v-5.342l4.918,-3.03c0.382,-0.236%200.861,-0.247%201.253,-0.028%200.392,0.218%200.635,0.632%200.635,1.08v9.297c0,0.45%20-0.243,0.863%20-0.635,1.081%20-0.392,0.219%20-0.871,0.208%20-1.253,-0.027z'%20stroke-width='3.375'%20stroke='%23FF9C0A'%20strokeLineCap='round'%20strokeLineJoin='round'/%3e%3cpath%20fill='%2300000000'%20fill-rule='evenOdd'%20d='M16.275,18.956L30.919,18.956A1.65,1.65%200,0%201,32.569%2020.606L32.569,33.393A1.65,1.65%200,0%201,30.919%2035.043L16.275,35.043A1.65,1.65%200,0%201,14.625%2033.393L14.625,20.606A1.65,1.65%200,0%201,16.275%2018.956z'%20stroke-width='3.375'%20stroke='%23FF9C0A'%20strokeLineCap='round'%20strokeLineJoin='round'/%3e%3cpath%20fill='%2300000000'%20fill-rule='evenOdd'%20d='M11.75,6.75L42.25,6.75A5,5%200,0%201,47.25%2011.75L47.25,42.25A5,5%200,0%201,42.25%2047.25L11.75,47.25A5,5%200,0%201,6.75%2042.25L6.75,11.75A5,5%200,0%201,11.75%206.75z'%20stroke-width='3.375'%20stroke='%23FF9C0A'%20strokeLineCap='round'%20strokeLineJoin='round'/%3e%3c/svg%3e", onClick: Is }];
      return Qo(X().shake_sdk_dialog_add_attachment, i);
    })());
  });
  return s.appendChild(o), s;
}, lc = [{ icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%20viewportWidth='54'%20viewportHeight='54'%3e%3cpath%20fill='%2300000000'%20fill-rule='evenOdd'%20d='m40.5,15.75%20l-2.25,4.5%20-3,2.063M11.25,27h6.997M35.752,27h6.998M13.5,6.75h-2.25a4.499,4.499%200,0%200,-4.5%204.5v2.25M40.5,47.25h2.25c2.486,0%204.5,-2.014%204.5,-4.5V40.5M6.75,40.5v2.25c0,2.486%202.014,4.5%204.5,4.5h2.25M47.25,13.5v-2.25c0,-2.486%20-2.014,-4.5%20-4.5,-4.5H40.5M13.5,15.75l2.25,4.5%203,2.063M27.999,38.25h-2a6.75,6.75%200,0%201,-6.75%20-6.75v-6.75c0,-2.486%202.014,-4.5%204.5,-4.5h6.5c2.486,0%204.5,2.014%204.5,4.5v6.75a6.75,6.75%200,0%201,-6.75%206.75zM13.5,38.25l2.25,-4.5%203,-2.063M40.5,38.25l-2.25,-4.5%20-3,-2.063M31.5,20.25h-9v-4.5a2.25,2.25%200,0%201,2.25%20-2.25h4.5a2.25,2.25%200,0%201,2.25%202.25v4.5z'%20stroke-width='3.38'%20stroke='%23B77DFF'%20strokeLineCap='round'%20strokeLineJoin='round'/%3e%3c/svg%3e", value: ve.BUG, label: X().shake_sdk_new_ticket_feedback_type_bug }, { icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%20viewportWidth='54'%20viewportHeight='54'%3e%3cpath%20fill='%2300000000'%20fill-rule='evenOdd'%20d='M42.75,47.25h-31.5a4.499,4.499%200,0%201,-4.5%20-4.5v-31.5c0,-2.486%202.014,-4.5%204.5,-4.5h31.5c2.486,0%204.5,2.014%204.5,4.5v31.5c0,2.486%20-2.014,4.5%20-4.5,4.5z'%20stroke-width='3.38'%20stroke='%23FF9F0A'%20strokeLineCap='round'%20strokeLineJoin='round'/%3e%3cpath%20fill='%2300000000'%20fill-rule='evenOdd'%20d='M27,29.813v-0.563c0,-1.838%201.136,-2.835%202.275,-3.6%201.111,-0.75%202.225,-1.726%202.225,-3.526%200,-2.486%20-2.014,-4.5%20-4.5,-4.5a4.499,4.499%200,0%200,-4.5%204.5M26.998,36a0.563,0.563%200,1%200,0.005%201.125,0.563%200.563,0%200,0%20-0.005,-1.125'%20stroke-width='3.38'%20stroke='%23FF9F0A'%20strokeLineCap='round'%20strokeLineJoin='round'/%3e%3c/svg%3e", value: ve.QUESTION, label: X().shake_sdk_new_ticket_feedback_type_question }, { icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%20viewportWidth='54'%20viewportHeight='54'%3e%3cpath%20fill='%2300000000'%20fill-rule='evenOdd'%20d='M31.275,47.25h0a20.507,20.507%200,0%200,15.417%20-15.417M38.25,22.5V9M31.5,15.75H45M6.75,22.725h0A20.504,20.504%200,0%201,22.167%207.304M22.167,47.25h0A20.511,20.511%200,0%201,6.75%2031.833'%20stroke-width='3.38'%20stroke='%23D75ED7'%20strokeLineCap='round'%20strokeLineJoin='round'/%3e%3c/svg%3e", value: ve.SUGGESTION, label: X().shake_sdk_new_ticket_feedback_type_suggestion }], uc = (e) => {
  let A = e.feedbackType, t = e.description, r = !0, n = !1;
  const s = Pr();
  s.classList.add("shake-sdk-new-ticket");
  const o = K();
  o.classList.add("shake-sdk-new-ticket-form");
  const i = ((d = xe, h = !1, C = () => {
  }) => {
    const F = Kt({ image: dr, onClick: () => C() }), y = Kt({ image: dr, onClick: d }), p = document.createElement("div");
    return p.classList.add("shake-sdk-toolbar"), h && p.appendChild(F), p.appendChild(y), p;
  })();
  i.classList.add("shake-sdk-new-ticket-toolbar");
  const B = Fs(X().shake_sdk_ticket_form_title);
  B.classList.add("shake-sdk-new-ticket-title"), s.appendChild(B);
  const c = Us();
  function a() {
    r = !t.trim() || n, c.disabled = r, l.textContent = n ? X().shake_sdk_ticket_form_submit_button_text_loading : X().shake_sdk_ticket_form_submit_button_text;
  }
  c.disabled = !0, c.onclick = async () => {
    n = !0, a(), await async function({ feedbackType: d, description: h }) {
      const C = V.data.getShakeState() ?? new Ut(), F = Re.shakeFeedbackService;
      let y, p, U = [];
      if (C.attachments.length) {
        const I = C.attachments.find((D) => D.type === cA.IMAGE);
        y = await F.getFirstByType(I);
        const v = C.attachments.find((D) => D.type === cA.VIDEO);
        p = await F.getFirstByType(v);
        const H = await F.convertAttachmentsToFiles(C.attachments.filter((D) => D.data !== (I == null ? void 0 : I.data) && D.data !== (v == null ? void 0 : v.data)).slice(0, 9)) ?? [];
        U = await F.sendFiles(H) ?? [];
      }
      await F.sendUserFeedback(d, h, y, p, U), xe();
    }({ feedbackType: A, description: t }), n = !1;
  }, c.classList.add("shake-sdk-submit-button");
  const l = ps(X().shake_sdk_ticket_form_submit_button_text);
  c.appendChild(l);
  const u = ic({ label: X().shake_sdk_new_ticket_feedback_type_title, items: lc, onSelectionChange: (d) => {
    A = d, e.feedbackType = d, V.data.setShakeState(e);
  }, selectedValue: A });
  o.appendChild(i), o.appendChild(B), o.appendChild(u);
  const w = (({ onChange: d, maxLength: h, value: C, label: F }) => {
    const y = K();
    y.classList.add("shake-sdk-textarea-container");
    const p = document.createElement("label");
    p.textContent = F, p.classList.add("shake-sdk-textarea-label");
    const U = document.createElement("textarea");
    return U.classList.add("shake-sdk-textarea"), U.rows = 12, U.textContent = C || null, U.addEventListener("input", function(I) {
      let v = I.target.value;
      h && v.length > h && (v = v.slice(0, h), I.target.value = v), d(I.target.value);
    }), y.appendChild(p), y.appendChild(U), y;
  })({ onChange: (d) => {
    t = d, e.description = d, V.data.setShakeState(e), a();
  }, maxLength: 1e4, value: t, label: X().shake_sdk_ticket_form_description_placeholder });
  w.classList.add("shake-sdk-styled-textarea"), o.appendChild(w);
  const g = cc(e.attachments);
  return o.appendChild(g), s.appendChild(o), s.appendChild(c), s;
}, Uo = (e) => {
  const A = Se(dr);
  A.classList.add("shake-sdk-close-button"), A.onclick = () => xe(!0);
  const t = ((B) => {
    const c = Pr(), a = K();
    a.classList.add("shake-sdk-attachments-preview-wrap");
    const l = nc({ attachments: B, onAttachmentPreviewChanged: (w) => {
      a.innerText = "", a.appendChild(sc(w));
    } }), u = K();
    return u.classList.add("shake-sdk-attachments-list-wrap"), u.appendChild(l), c.classList.add("shake-sdk-attachments-card"), c.appendChild(u), c.appendChild(a), c;
  })(e.attachments), r = K();
  r.classList.add("shake-sdk-content-left"), r.appendChild(A), r.appendChild(t);
  const n = uc(e), s = K();
  s.classList.add("shake-sdk-content-right"), s.appendChild(n);
  const o = K();
  o.classList.add("shake-sdk-content"), o.appendChild(r), o.appendChild(s);
  const i = K();
  return i.id = "shake-sdk-root", i.appendChild(o), i;
}, Zr = "shake-sdk-main-button", gc = () => {
  const e = Us();
  e.id = Zr;
  const A = IA("data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14931_603)'%3e%3cpath%20d='M8.19434%2012.6212C10.9278%2015.3547%2014.6693%2016.0477%2016.5462%2014.1682C18.1282%2012.5862%2017.8823%209.68817%2016.1367%207.18042'%20stroke='%23B77DFF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.8599%204.82319C10.5725%202.29444%206.46177%201.97857%204.1719%204.26844C1.60902%206.83132%202.30202%2011.6788%205.7189%2015.0957C7.21501%2016.6164%209.06436%2017.7431%2011.1019%2018.3752'%20stroke='%23B77DFF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.8666%2010.8501L12.5002%2010.5228C12.7364%2010.4764%2012.9537%2010.3613%2013.1249%2010.1921L17.8954%205.42507C18.535%204.78514%2018.535%203.74801%2017.8954%203.10807C17.2555%202.46853%2016.2184%202.46853%2015.5784%203.10807L10.8079%207.87507C10.6374%208.04585%2010.5211%208.2632%2010.4737%208.49982L10.1499%2010.1334C10.0864%2010.4657%2010.3043%2010.7865%2010.6365%2010.8501C10.7125%2010.8646%2010.7906%2010.8646%2010.8666%2010.8501Z'%20stroke='%23880FFF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14931_603'%3e%3crect%20width='21'%20height='21'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  A.alt = "Send feedback icon", A.classList.add("shake-sdk-main-button-icon");
  const t = ps(X().shake_sdk_main_button_title);
  return t.classList.add("shake-sdk-main-button-text"), e.appendChild(A), e.appendChild(t), e.addEventListener("mousedown", (r) => {
    r.stopPropagation(), r.preventDefault(), (async () => {
      const n = V.data;
      Re.shakeAuthService.authenticate(Ct.clientId, Ct.clientSecret), dc(), n.getShakeState() || n.setShakeState(new Ut()), await go();
      const s = Uo(n.getShakeState() ?? new Ut());
      document.body.appendChild(s), n.setShakeOpened(!0);
    })();
  }), e;
}, wc = () => {
  const e = document.getElementById(Zr);
  e && (e.style.display = "flex");
}, dc = () => {
  const e = document.getElementById(Zr);
  e && (e.style.display = "none");
}, Rr = "0.1.0";
function Fo(e, A) {
  return function() {
    return e.apply(A, arguments);
  };
}
const { toString: Qc } = Object.prototype, { getPrototypeOf: jr } = Object, kt = (sr = /* @__PURE__ */ Object.create(null), (e) => {
  const A = Qc.call(e);
  return sr[A] || (sr[A] = A.slice(8, -1).toLowerCase());
});
var sr;
const bA = (e) => (e = e.toLowerCase(), (A) => kt(A) === e), Jt = (e) => (A) => typeof A === e, { isArray: Be } = Array, ye = Jt("undefined"), Zn = bA("ArrayBuffer"), hc = Jt("string"), gA = Jt("function"), jn = Jt("number"), ot = (e) => e !== null && typeof e == "object", it = (e) => {
  if (kt(e) !== "object")
    return !1;
  const A = jr(e);
  return !(A !== null && A !== Object.prototype && Object.getPrototypeOf(A) !== null || Symbol.toStringTag in e || Symbol.iterator in e);
}, Cc = bA("Date"), Uc = bA("File"), Fc = bA("Blob"), pc = bA("FileList"), fc = bA("URLSearchParams");
function Ie(e, A, { allOwnKeys: t = !1 } = {}) {
  if (e == null)
    return;
  let r, n;
  if (typeof e != "object" && (e = [e]), Be(e))
    for (r = 0, n = e.length; r < n; r++)
      A.call(null, e[r], r, e);
  else {
    const s = t ? Object.getOwnPropertyNames(e) : Object.keys(e), o = s.length;
    let i;
    for (r = 0; r < o; r++)
      i = s[r], A.call(null, e[i], i, e);
  }
}
function qn(e, A) {
  A = A.toLowerCase();
  const t = Object.keys(e);
  let r, n = t.length;
  for (; n-- > 0; )
    if (r = t[n], A === r.toLowerCase())
      return r;
  return null;
}
const po = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, zn = (e) => !ye(e) && e !== po, mc = (or = typeof Uint8Array < "u" && jr(Uint8Array), (e) => or && e instanceof or);
var or;
const Ec = bA("HTMLFormElement"), $n = (({ hasOwnProperty: e }) => (A, t) => e.call(A, t))(Object.prototype), Hc = bA("RegExp"), As = (e, A) => {
  const t = Object.getOwnPropertyDescriptors(e), r = {};
  Ie(t, (n, s) => {
    let o;
    (o = A(n, s, e)) !== !1 && (r[s] = o || n);
  }), Object.defineProperties(e, r);
}, ir = "abcdefghijklmnopqrstuvwxyz", es = "0123456789", ts = { DIGIT: es, ALPHA: ir, ALPHA_DIGIT: ir + ir.toUpperCase() + es }, yc = bA("AsyncFunction"), Q = { isArray: Be, isArrayBuffer: Zn, isBuffer: function(e) {
  return e !== null && !ye(e) && e.constructor !== null && !ye(e.constructor) && gA(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}, isFormData: (e) => {
  let A;
  return e && (typeof FormData == "function" && e instanceof FormData || gA(e.append) && ((A = kt(e)) === "formdata" || A === "object" && gA(e.toString) && e.toString() === "[object FormData]"));
}, isArrayBufferView: function(e) {
  let A;
  return A = typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && Zn(e.buffer), A;
}, isString: hc, isNumber: jn, isBoolean: (e) => e === !0 || e === !1, isObject: ot, isPlainObject: it, isUndefined: ye, isDate: Cc, isFile: Uc, isBlob: Fc, isRegExp: Hc, isFunction: gA, isStream: (e) => ot(e) && gA(e.pipe), isURLSearchParams: fc, isTypedArray: mc, isFileList: pc, forEach: Ie, merge: function e() {
  const { caseless: A } = zn(this) && this || {}, t = {}, r = (n, s) => {
    const o = A && qn(t, s) || s;
    it(t[o]) && it(n) ? t[o] = e(t[o], n) : it(n) ? t[o] = e({}, n) : Be(n) ? t[o] = n.slice() : t[o] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && Ie(arguments[n], r);
  return t;
}, extend: (e, A, t, { allOwnKeys: r } = {}) => (Ie(A, (n, s) => {
  t && gA(n) ? e[s] = Fo(n, t) : e[s] = n;
}, { allOwnKeys: r }), e), trim: (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), stripBOM: (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), inherits: (e, A, t, r) => {
  e.prototype = Object.create(A.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", { value: A.prototype }), t && Object.assign(e.prototype, t);
}, toFlatObject: (e, A, t, r) => {
  let n, s, o;
  const i = {};
  if (A = A || {}, e == null)
    return A;
  do {
    for (n = Object.getOwnPropertyNames(e), s = n.length; s-- > 0; )
      o = n[s], r && !r(o, e, A) || i[o] || (A[o] = e[o], i[o] = !0);
    e = t !== !1 && jr(e);
  } while (e && (!t || t(e, A)) && e !== Object.prototype);
  return A;
}, kindOf: kt, kindOfTest: bA, endsWith: (e, A, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= A.length;
  const r = e.indexOf(A, t);
  return r !== -1 && r === t;
}, toArray: (e) => {
  if (!e)
    return null;
  if (Be(e))
    return e;
  let A = e.length;
  if (!jn(A))
    return null;
  const t = new Array(A);
  for (; A-- > 0; )
    t[A] = e[A];
  return t;
}, forEachEntry: (e, A) => {
  const t = (e && e[Symbol.iterator]).call(e);
  let r;
  for (; (r = t.next()) && !r.done; ) {
    const n = r.value;
    A.call(e, n[0], n[1]);
  }
}, matchAll: (e, A) => {
  let t;
  const r = [];
  for (; (t = e.exec(A)) !== null; )
    r.push(t);
  return r;
}, isHTMLForm: Ec, hasOwnProperty: $n, hasOwnProp: $n, reduceDescriptors: As, freezeMethods: (e) => {
  As(e, (A, t) => {
    if (gA(e) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const r = e[t];
    gA(r) && (A.enumerable = !1, "writable" in A ? A.writable = !1 : A.set || (A.set = () => {
      throw Error("Can not rewrite read-only method '" + t + "'");
    }));
  });
}, toObjectSet: (e, A) => {
  const t = {}, r = (n) => {
    n.forEach((s) => {
      t[s] = !0;
    });
  };
  return Be(e) ? r(e) : r(String(e).split(A)), t;
}, toCamelCase: (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(A, t, r) {
  return t.toUpperCase() + r;
}), noop: () => {
}, toFiniteNumber: (e, A) => (e = +e, Number.isFinite(e) ? e : A), findKey: qn, global: po, isContextDefined: zn, ALPHABET: ts, generateString: (e = 16, A = ts.ALPHA_DIGIT) => {
  let t = "";
  const { length: r } = A;
  for (; e--; )
    t += A[Math.random() * r | 0];
  return t;
}, isSpecCompliantForm: function(e) {
  return !!(e && gA(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}, toJSONObject: (e) => {
  const A = new Array(10), t = (r, n) => {
    if (ot(r)) {
      if (A.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        A[n] = r;
        const s = Be(r) ? [] : {};
        return Ie(r, (o, i) => {
          const B = t(o, n + 1);
          !ye(B) && (s[i] = B);
        }), A[n] = void 0, s;
      }
    }
    return r;
  };
  return t(e, 0);
}, isAsyncFn: yc, isThenable: (e) => e && (ot(e) || gA(e)) && gA(e.then) && gA(e.catch) };
function L(e, A, t, r, n) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", A && (this.code = A), t && (this.config = t), r && (this.request = r), n && (this.response = n);
}
Q.inherits(L, Error, { toJSON: function() {
  return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: Q.toJSONObject(this.config), code: this.code, status: this.response && this.response.status ? this.response.status : null };
} });
const rs = L.prototype, ns = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e) => {
  ns[e] = { value: e };
}), Object.defineProperties(L, ns), Object.defineProperty(rs, "isAxiosError", { value: !0 }), L.from = (e, A, t, r, n, s) => {
  const o = Object.create(rs);
  return Q.toFlatObject(e, o, function(i) {
    return i !== Error.prototype;
  }, (i) => i !== "isAxiosError"), L.call(o, e.message, A, t, r, n), o.cause = e, o.name = e.name, s && Object.assign(o, s), o;
};
function ar(e) {
  return Q.isPlainObject(e) || Q.isArray(e);
}
function fo(e) {
  return Q.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ss(e, A, t) {
  return e ? e.concat(A).map(function(r, n) {
    return r = fo(r), !t && n ? "[" + r + "]" : r;
  }).join(t ? "." : "") : A;
}
const Ic = Q.toFlatObject(Q, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Dt(e, A, t) {
  if (!Q.isObject(e))
    throw new TypeError("target must be an object");
  A = A || new FormData();
  const r = (t = Q.toFlatObject(t, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function(u, w) {
    return !Q.isUndefined(w[u]);
  })).metaTokens, n = t.visitor || c, s = t.dots, o = t.indexes, i = (t.Blob || typeof Blob < "u" && Blob) && Q.isSpecCompliantForm(A);
  if (!Q.isFunction(n))
    throw new TypeError("visitor must be a function");
  function B(u) {
    if (u === null)
      return "";
    if (Q.isDate(u))
      return u.toISOString();
    if (!i && Q.isBlob(u))
      throw new L("Blob is not supported. Use a Buffer instead.");
    return Q.isArrayBuffer(u) || Q.isTypedArray(u) ? i && typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function c(u, w, g) {
    let d = u;
    if (u && !g && typeof u == "object") {
      if (Q.endsWith(w, "{}"))
        w = r ? w : w.slice(0, -2), u = JSON.stringify(u);
      else if (Q.isArray(u) && function(h) {
        return Q.isArray(h) && !h.some(ar);
      }(u) || (Q.isFileList(u) || Q.endsWith(w, "[]")) && (d = Q.toArray(u)))
        return w = fo(w), d.forEach(function(h, C) {
          !Q.isUndefined(h) && h !== null && A.append(o === !0 ? ss([w], C, s) : o === null ? w : w + "[]", B(h));
        }), !1;
    }
    return !!ar(u) || (A.append(ss(g, w, s), B(u)), !1);
  }
  const a = [], l = Object.assign(Ic, { defaultVisitor: c, convertValue: B, isVisitable: ar });
  if (!Q.isObject(e))
    throw new TypeError("data must be an object");
  return function u(w, g) {
    if (!Q.isUndefined(w)) {
      if (a.indexOf(w) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      a.push(w), Q.forEach(w, function(d, h) {
        (!(Q.isUndefined(d) || d === null) && n.call(A, d, Q.isString(h) ? h.trim() : h, g, l)) === !0 && u(d, g ? g.concat(h) : [h]);
      }), a.pop();
    }
  }(e), A;
}
function os(e) {
  const A = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(t) {
    return A[t];
  });
}
function qr(e, A) {
  this._pairs = [], e && Dt(e, this, A);
}
const is = qr.prototype;
function vc(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function mo(e, A, t) {
  if (!A)
    return e;
  const r = t && t.encode || vc, n = t && t.serialize;
  let s;
  if (s = n ? n(A, t) : Q.isURLSearchParams(A) ? A.toString() : new qr(A, t).toString(r), s) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
is.append = function(e, A) {
  this._pairs.push([e, A]);
}, is.toString = function(e) {
  const A = e ? function(t) {
    return e.call(this, t, os);
  } : os;
  return this._pairs.map(function(t) {
    return A(t[0]) + "=" + A(t[1]);
  }, "").join("&");
};
class as {
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
    Q.forEach(this.handlers, function(t) {
      t !== null && A(t);
    });
  }
}
const Eo = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 }, bc = { isBrowser: !0, classes: { URLSearchParams: typeof URLSearchParams < "u" ? URLSearchParams : qr, FormData: typeof FormData < "u" ? FormData : null, Blob: typeof Blob < "u" ? Blob : null }, protocols: ["http", "https", "file", "blob", "url", "data"] }, Ho = typeof window < "u" && typeof document < "u", Lc = (Bs = typeof navigator < "u" && navigator.product, Ho && ["ReactNative", "NativeScript", "NS"].indexOf(Bs) < 0);
var Bs;
const Kc = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", HA = { ...Object.freeze(Object.defineProperty({ __proto__: null, hasBrowserEnv: Ho, hasStandardBrowserEnv: Lc, hasStandardBrowserWebWorkerEnv: Kc }, Symbol.toStringTag, { value: "Module" })), ...bc };
function yo(e) {
  function A(t, r, n, s) {
    let o = t[s++];
    if (o === "__proto__")
      return !0;
    const i = Number.isFinite(+o), B = s >= t.length;
    return o = !o && Q.isArray(n) ? n.length : o, B ? (Q.hasOwnProp(n, o) ? n[o] = [n[o], r] : n[o] = r, !i) : (n[o] && Q.isObject(n[o]) || (n[o] = []), A(t, r, n[o], s) && Q.isArray(n[o]) && (n[o] = function(c) {
      const a = {}, l = Object.keys(c);
      let u;
      const w = l.length;
      let g;
      for (u = 0; u < w; u++)
        g = l[u], a[g] = c[g];
      return a;
    }(n[o])), !i);
  }
  if (Q.isFormData(e) && Q.isFunction(e.entries)) {
    const t = {};
    return Q.forEachEntry(e, (r, n) => {
      A(function(s) {
        return Q.matchAll(/\w+|\[(\w*)]/g, s).map((o) => o[0] === "[]" ? "" : o[1] || o[0]);
      }(r), n, t, 0);
    }), t;
  }
  return null;
}
const zr = { transitional: Eo, adapter: ["xhr", "http"], transformRequest: [function(e, A) {
  const t = A.getContentType() || "", r = t.indexOf("application/json") > -1, n = Q.isObject(e);
  if (n && Q.isHTMLForm(e) && (e = new FormData(e)), Q.isFormData(e))
    return r ? JSON.stringify(yo(e)) : e;
  if (Q.isArrayBuffer(e) || Q.isBuffer(e) || Q.isStream(e) || Q.isFile(e) || Q.isBlob(e))
    return e;
  if (Q.isArrayBufferView(e))
    return e.buffer;
  if (Q.isURLSearchParams(e))
    return A.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
  let s;
  if (n) {
    if (t.indexOf("application/x-www-form-urlencoded") > -1)
      return function(o, i) {
        return Dt(o, new HA.classes.URLSearchParams(), Object.assign({ visitor: function(B, c, a, l) {
          return HA.isNode && Q.isBuffer(B) ? (this.append(c, B.toString("base64")), !1) : l.defaultVisitor.apply(this, arguments);
        } }, i));
      }(e, this.formSerializer).toString();
    if ((s = Q.isFileList(e)) || t.indexOf("multipart/form-data") > -1) {
      const o = this.env && this.env.FormData;
      return Dt(s ? { "files[]": e } : e, o && new o(), this.formSerializer);
    }
  }
  return n || r ? (A.setContentType("application/json", !1), function(o, i, B) {
    if (Q.isString(o))
      try {
        return (i || JSON.parse)(o), Q.trim(o);
      } catch (c) {
        if (c.name !== "SyntaxError")
          throw c;
      }
    return (B || JSON.stringify)(o);
  }(e)) : e;
}], transformResponse: [function(e) {
  const A = this.transitional || zr.transitional, t = A && A.forcedJSONParsing, r = this.responseType === "json";
  if (e && Q.isString(e) && (t && !this.responseType || r)) {
    const n = !(A && A.silentJSONParsing) && r;
    try {
      return JSON.parse(e);
    } catch (s) {
      if (n)
        throw s.name === "SyntaxError" ? L.from(s, L.ERR_BAD_RESPONSE, this, null, this.response) : s;
    }
  }
  return e;
}], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: HA.classes.FormData, Blob: HA.classes.Blob }, validateStatus: function(e) {
  return e >= 200 && e < 300;
}, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
Q.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  zr.headers[e] = {};
});
const $r = zr, kc = Q.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]), cs = Symbol("internals");
function Ce(e) {
  return e && String(e).trim().toLowerCase();
}
function gt(e) {
  return e === !1 || e == null ? e : Q.isArray(e) ? e.map(gt) : String(e);
}
function Br(e, A, t, r, n) {
  return Q.isFunction(r) ? r.call(this, A, t) : (n && (A = t), Q.isString(A) ? Q.isString(r) ? A.indexOf(r) !== -1 : Q.isRegExp(r) ? r.test(A) : void 0 : void 0);
}
class wt {
  constructor(A) {
    A && this.set(A);
  }
  set(A, t, r) {
    const n = this;
    function s(i, B, c) {
      const a = Ce(B);
      if (!a)
        throw new Error("header name must be a non-empty string");
      const l = Q.findKey(n, a);
      (!l || n[l] === void 0 || c === !0 || c === void 0 && n[l] !== !1) && (n[l || B] = gt(i));
    }
    const o = (i, B) => Q.forEach(i, (c, a) => s(c, a, B));
    return Q.isPlainObject(A) || A instanceof this.constructor ? o(A, t) : Q.isString(A) && (A = A.trim()) && !((i) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim()))(A) ? o(((i) => {
      const B = {};
      let c, a, l;
      return i && i.split(`
`).forEach(function(u) {
        l = u.indexOf(":"), c = u.substring(0, l).trim().toLowerCase(), a = u.substring(l + 1).trim(), !c || B[c] && kc[c] || (c === "set-cookie" ? B[c] ? B[c].push(a) : B[c] = [a] : B[c] = B[c] ? B[c] + ", " + a : a);
      }), B;
    })(A), t) : A != null && s(t, A, r), this;
  }
  get(A, t) {
    if (A = Ce(A)) {
      const r = Q.findKey(this, A);
      if (r) {
        const n = this[r];
        if (!t)
          return n;
        if (t === !0)
          return function(s) {
            const o = /* @__PURE__ */ Object.create(null), i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
            let B;
            for (; B = i.exec(s); )
              o[B[1]] = B[2];
            return o;
          }(n);
        if (Q.isFunction(t))
          return t.call(this, n, r);
        if (Q.isRegExp(t))
          return t.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(A, t) {
    if (A = Ce(A)) {
      const r = Q.findKey(this, A);
      return !(!r || this[r] === void 0 || t && !Br(0, this[r], r, t));
    }
    return !1;
  }
  delete(A, t) {
    const r = this;
    let n = !1;
    function s(o) {
      if (o = Ce(o)) {
        const i = Q.findKey(r, o);
        !i || t && !Br(0, r[i], i, t) || (delete r[i], n = !0);
      }
    }
    return Q.isArray(A) ? A.forEach(s) : s(A), n;
  }
  clear(A) {
    const t = Object.keys(this);
    let r = t.length, n = !1;
    for (; r--; ) {
      const s = t[r];
      A && !Br(0, this[s], s, A, !0) || (delete this[s], n = !0);
    }
    return n;
  }
  normalize(A) {
    const t = this, r = {};
    return Q.forEach(this, (n, s) => {
      const o = Q.findKey(r, s);
      if (o)
        return t[o] = gt(n), void delete t[s];
      const i = A ? function(B) {
        return B.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (c, a, l) => a.toUpperCase() + l);
      }(s) : String(s).trim();
      i !== s && delete t[s], t[i] = gt(n), r[i] = !0;
    }), this;
  }
  concat(...A) {
    return this.constructor.concat(this, ...A);
  }
  toJSON(A) {
    const t = /* @__PURE__ */ Object.create(null);
    return Q.forEach(this, (r, n) => {
      r != null && r !== !1 && (t[n] = A && Q.isArray(r) ? r.join(", ") : r);
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
    return t.forEach((n) => r.set(n)), r;
  }
  static accessor(A) {
    const t = (this[cs] = this[cs] = { accessors: {} }).accessors, r = this.prototype;
    function n(s) {
      const o = Ce(s);
      t[o] || (function(i, B) {
        const c = Q.toCamelCase(" " + B);
        ["get", "set", "has"].forEach((a) => {
          Object.defineProperty(i, a + c, { value: function(l, u, w) {
            return this[a].call(this, B, l, u, w);
          }, configurable: !0 });
        });
      }(r, s), t[o] = !0);
    }
    return Q.isArray(A) ? A.forEach(n) : n(A), this;
  }
}
wt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), Q.reduceDescriptors(wt.prototype, ({ value: e }, A) => {
  let t = A[0].toUpperCase() + A.slice(1);
  return { get: () => e, set(r) {
    this[t] = r;
  } };
}), Q.freezeMethods(wt);
const SA = wt;
function cr(e, A) {
  const t = this || $r, r = A || t, n = SA.from(r.headers);
  let s = r.data;
  return Q.forEach(e, function(o) {
    s = o.call(t, s, n.normalize(), A ? A.status : void 0);
  }), n.normalize(), s;
}
function Io(e) {
  return !(!e || !e.__CANCEL__);
}
function Ge(e, A, t) {
  L.call(this, e ?? "canceled", L.ERR_CANCELED, A, t), this.name = "CanceledError";
}
Q.inherits(Ge, L, { __CANCEL__: !0 });
const Dc = HA.hasStandardBrowserEnv ? { write(e, A, t, r, n, s) {
  const o = [e + "=" + encodeURIComponent(A)];
  Q.isNumber(t) && o.push("expires=" + new Date(t).toGMTString()), Q.isString(r) && o.push("path=" + r), Q.isString(n) && o.push("domain=" + n), s === !0 && o.push("secure"), document.cookie = o.join("; ");
}, read(e) {
  const A = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
  return A ? decodeURIComponent(A[3]) : null;
}, remove(e) {
  this.write(e, "", Date.now() - 864e5);
} } : { write() {
}, read: () => null, remove() {
} };
function vo(e, A) {
  return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(A) ? function(t, r) {
    return r ? t.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : t;
  }(e, A) : A;
}
const Sc = HA.hasStandardBrowserEnv ? function() {
  const e = /(msie|trident)/i.test(navigator.userAgent), A = document.createElement("a");
  let t;
  function r(n) {
    let s = n;
    return e && (A.setAttribute("href", s), s = A.href), A.setAttribute("href", s), { href: A.href, protocol: A.protocol ? A.protocol.replace(/:$/, "") : "", host: A.host, search: A.search ? A.search.replace(/^\?/, "") : "", hash: A.hash ? A.hash.replace(/^#/, "") : "", hostname: A.hostname, port: A.port, pathname: A.pathname.charAt(0) === "/" ? A.pathname : "/" + A.pathname };
  }
  return t = r(window.location.href), function(n) {
    const s = Q.isString(n) ? r(n) : n;
    return s.protocol === t.protocol && s.host === t.host;
  };
}() : function() {
  return !0;
};
function ls(e, A) {
  let t = 0;
  const r = function(n, s) {
    n = n || 10;
    const o = new Array(n), i = new Array(n);
    let B, c = 0, a = 0;
    return s = s !== void 0 ? s : 1e3, function(l) {
      const u = Date.now(), w = i[a];
      B || (B = u), o[c] = l, i[c] = u;
      let g = a, d = 0;
      for (; g !== c; )
        d += o[g++], g %= n;
      if (c = (c + 1) % n, c === a && (a = (a + 1) % n), u - B < s)
        return;
      const h = w && u - w;
      return h ? Math.round(1e3 * d / h) : void 0;
    };
  }(50, 250);
  return (n) => {
    const s = n.loaded, o = n.lengthComputable ? n.total : void 0, i = s - t, B = r(i);
    t = s;
    const c = { loaded: s, total: o, progress: o ? s / o : void 0, bytes: i, rate: B || void 0, estimated: B && o && s <= o ? (o - s) / B : void 0, event: n };
    c[A ? "download" : "upload"] = !0, e(c);
  };
}
const bo = { http: null, xhr: typeof XMLHttpRequest < "u" && function(e) {
  return new Promise(function(A, t) {
    let r = e.data;
    const n = SA.from(e.headers).normalize();
    let s, o, { responseType: i, withXSRFToken: B } = e;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s);
    }
    if (Q.isFormData(r)) {
      if (HA.hasStandardBrowserEnv || HA.hasStandardBrowserWebWorkerEnv)
        n.setContentType(!1);
      else if ((o = n.getContentType()) !== !1) {
        const [g, ...d] = o ? o.split(";").map((h) => h.trim()).filter(Boolean) : [];
        n.setContentType([g || "multipart/form-data", ...d].join("; "));
      }
    }
    let a = new XMLHttpRequest();
    if (e.auth) {
      const g = e.auth.username || "", d = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      n.set("Authorization", "Basic " + btoa(g + ":" + d));
    }
    const l = vo(e.baseURL, e.url);
    function u() {
      if (!a)
        return;
      const g = SA.from("getAllResponseHeaders" in a && a.getAllResponseHeaders());
      (function(d, h, C) {
        const F = C.config.validateStatus;
        C.status && F && !F(C.status) ? h(new L("Request failed with status code " + C.status, [L.ERR_BAD_REQUEST, L.ERR_BAD_RESPONSE][Math.floor(C.status / 100) - 4], C.config, C.request, C)) : d(C);
      })(function(d) {
        A(d), c();
      }, function(d) {
        t(d), c();
      }, { data: i && i !== "text" && i !== "json" ? a.response : a.responseText, status: a.status, statusText: a.statusText, headers: g, config: e, request: a }), a = null;
    }
    if (a.open(e.method.toUpperCase(), mo(l, e.params, e.paramsSerializer), !0), a.timeout = e.timeout, "onloadend" in a ? a.onloadend = u : a.onreadystatechange = function() {
      a && a.readyState === 4 && (a.status !== 0 || a.responseURL && a.responseURL.indexOf("file:") === 0) && setTimeout(u);
    }, a.onabort = function() {
      a && (t(new L("Request aborted", L.ECONNABORTED, e, a)), a = null);
    }, a.onerror = function() {
      t(new L("Network Error", L.ERR_NETWORK, e, a)), a = null;
    }, a.ontimeout = function() {
      let g = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const d = e.transitional || Eo;
      e.timeoutErrorMessage && (g = e.timeoutErrorMessage), t(new L(g, d.clarifyTimeoutError ? L.ETIMEDOUT : L.ECONNABORTED, e, a)), a = null;
    }, HA.hasStandardBrowserEnv && (B && Q.isFunction(B) && (B = B(e)), B || B !== !1 && Sc(l))) {
      const g = e.xsrfHeaderName && e.xsrfCookieName && Dc.read(e.xsrfCookieName);
      g && n.set(e.xsrfHeaderName, g);
    }
    r === void 0 && n.setContentType(null), "setRequestHeader" in a && Q.forEach(n.toJSON(), function(g, d) {
      a.setRequestHeader(d, g);
    }), Q.isUndefined(e.withCredentials) || (a.withCredentials = !!e.withCredentials), i && i !== "json" && (a.responseType = e.responseType), typeof e.onDownloadProgress == "function" && a.addEventListener("progress", ls(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && a.upload && a.upload.addEventListener("progress", ls(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = (g) => {
      a && (t(!g || g.type ? new Ge(null, e, a) : g), a.abort(), a = null);
    }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
    const w = function(g) {
      const d = /^([-+\w]{1,25})(:?\/\/|:)/.exec(g);
      return d && d[1] || "";
    }(l);
    w && HA.protocols.indexOf(w) === -1 ? t(new L("Unsupported protocol " + w + ":", L.ERR_BAD_REQUEST, e)) : a.send(r || null);
  });
} };
Q.forEach(bo, (e, A) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: A });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: A });
  }
});
const us = (e) => `- ${e}`, xc = (e) => Q.isFunction(e) || e === null || e === !1, Lo = (e) => {
  e = Q.isArray(e) ? e : [e];
  const { length: A } = e;
  let t, r;
  const n = {};
  for (let s = 0; s < A; s++) {
    let o;
    if (t = e[s], r = t, !xc(t) && (r = bo[(o = String(t)).toLowerCase()], r === void 0))
      throw new L(`Unknown adapter '${o}'`);
    if (r)
      break;
    n[o || "#" + s] = r;
  }
  if (!r) {
    const s = Object.entries(n).map(([o, i]) => `adapter ${o} ` + (i === !1 ? "is not supported by the environment" : "is not available in the build"));
    throw new L("There is no suitable adapter to dispatch the request " + (A ? s.length > 1 ? `since :
` + s.map(us).join(`
`) : " " + us(s[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT");
  }
  return r;
};
function lr(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ge(null, e);
}
function gs(e) {
  return lr(e), e.headers = SA.from(e.headers), e.data = cr.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Lo(e.adapter || $r.adapter)(e).then(function(A) {
    return lr(e), A.data = cr.call(e, e.transformResponse, A), A.headers = SA.from(A.headers), A;
  }, function(A) {
    return Io(A) || (lr(e), A && A.response && (A.response.data = cr.call(e, e.transformResponse, A.response), A.response.headers = SA.from(A.response.headers))), Promise.reject(A);
  });
}
const ws = (e) => e instanceof SA ? e.toJSON() : e;
function we(e, A) {
  A = A || {};
  const t = {};
  function r(c, a, l) {
    return Q.isPlainObject(c) && Q.isPlainObject(a) ? Q.merge.call({ caseless: l }, c, a) : Q.isPlainObject(a) ? Q.merge({}, a) : Q.isArray(a) ? a.slice() : a;
  }
  function n(c, a, l) {
    return Q.isUndefined(a) ? Q.isUndefined(c) ? void 0 : r(void 0, c, l) : r(c, a, l);
  }
  function s(c, a) {
    if (!Q.isUndefined(a))
      return r(void 0, a);
  }
  function o(c, a) {
    return Q.isUndefined(a) ? Q.isUndefined(c) ? void 0 : r(void 0, c) : r(void 0, a);
  }
  function i(c, a, l) {
    return l in A ? r(c, a) : l in e ? r(void 0, c) : void 0;
  }
  const B = { url: s, method: s, data: s, baseURL: o, transformRequest: o, transformResponse: o, paramsSerializer: o, timeout: o, timeoutMessage: o, withCredentials: o, withXSRFToken: o, adapter: o, responseType: o, xsrfCookieName: o, xsrfHeaderName: o, onUploadProgress: o, onDownloadProgress: o, decompress: o, maxContentLength: o, maxBodyLength: o, beforeRedirect: o, transport: o, httpAgent: o, httpsAgent: o, cancelToken: o, socketPath: o, responseEncoding: o, validateStatus: i, headers: (c, a) => n(ws(c), ws(a), !0) };
  return Q.forEach(Object.keys(Object.assign({}, e, A)), function(c) {
    const a = B[c] || n, l = a(e[c], A[c], c);
    Q.isUndefined(l) && a !== i || (t[c] = l);
  }), t;
}
const Oc = "1.6.7", An = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, A) => {
  An[e] = function(t) {
    return typeof t === e || "a" + (A < 1 ? "n " : " ") + e;
  };
});
const ds = {};
An.transitional = function(e, A, t) {
  function r(n, s) {
    return "[Axios v1.6.7] Transitional option '" + n + "'" + s + (t ? ". " + t : "");
  }
  return (n, s, o) => {
    if (e === !1)
      throw new L(r(s, " has been removed" + (A ? " in " + A : "")), L.ERR_DEPRECATED);
    return A && !ds[s] && (ds[s] = !0, console.warn(r(s, " has been deprecated since v" + A + " and will be removed in the near future"))), !e || e(n, s, o);
  };
};
const Gr = { assertOptions: function(e, A, t) {
  if (typeof e != "object")
    throw new L("options must be an object", L.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let n = r.length;
  for (; n-- > 0; ) {
    const s = r[n], o = A[s];
    if (o) {
      const i = e[s], B = i === void 0 || o(i, s, e);
      if (B !== !0)
        throw new L("option " + s + " must be " + B, L.ERR_BAD_OPTION_VALUE);
    } else if (t !== !0)
      throw new L("Unknown option " + s, L.ERR_BAD_OPTION);
  }
}, validators: An }, RA = Gr.validators;
class dt {
  constructor(A) {
    this.defaults = A, this.interceptors = { request: new as(), response: new as() };
  }
  async request(A, t) {
    try {
      return await this._request(A, t);
    } catch (r) {
      if (r instanceof Error) {
        let n;
        Error.captureStackTrace ? Error.captureStackTrace(n = {}) : n = new Error();
        const s = n.stack ? n.stack.replace(/^.+\n/, "") : "";
        r.stack ? s && !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + s) : r.stack = s;
      }
      throw r;
    }
  }
  _request(A, t) {
    typeof A == "string" ? (t = t || {}).url = A : t = A || {}, t = we(this.defaults, t);
    const { transitional: r, paramsSerializer: n, headers: s } = t;
    r !== void 0 && Gr.assertOptions(r, { silentJSONParsing: RA.transitional(RA.boolean), forcedJSONParsing: RA.transitional(RA.boolean), clarifyTimeoutError: RA.transitional(RA.boolean) }, !1), n != null && (Q.isFunction(n) ? t.paramsSerializer = { serialize: n } : Gr.assertOptions(n, { encode: RA.function, serialize: RA.function }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let o = s && Q.merge(s.common, s[t.method]);
    s && Q.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (g) => {
      delete s[g];
    }), t.headers = SA.concat(o, s);
    const i = [];
    let B = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(t) === !1 || (B = B && g.synchronous, i.unshift(g.fulfilled, g.rejected));
    });
    const c = [];
    let a;
    this.interceptors.response.forEach(function(g) {
      c.push(g.fulfilled, g.rejected);
    });
    let l, u = 0;
    if (!B) {
      const g = [gs.bind(this), void 0];
      for (g.unshift.apply(g, i), g.push.apply(g, c), l = g.length, a = Promise.resolve(t); u < l; )
        a = a.then(g[u++], g[u++]);
      return a;
    }
    l = i.length;
    let w = t;
    for (u = 0; u < l; ) {
      const g = i[u++], d = i[u++];
      try {
        w = g(w);
      } catch (h) {
        d.call(this, h);
        break;
      }
    }
    try {
      a = gs.call(this, w);
    } catch (g) {
      return Promise.reject(g);
    }
    for (u = 0, l = c.length; u < l; )
      a = a.then(c[u++], c[u++]);
    return a;
  }
  getUri(A) {
    return mo(vo((A = we(this.defaults, A)).baseURL, A.url), A.params, A.paramsSerializer);
  }
}
Q.forEach(["delete", "get", "head", "options"], function(e) {
  dt.prototype[e] = function(A, t) {
    return this.request(we(t || {}, { method: e, url: A, data: (t || {}).data }));
  };
}), Q.forEach(["post", "put", "patch"], function(e) {
  function A(t) {
    return function(r, n, s) {
      return this.request(we(s || {}, { method: e, headers: t ? { "Content-Type": "multipart/form-data" } : {}, url: r, data: n }));
    };
  }
  dt.prototype[e] = A(), dt.prototype[e + "Form"] = A(!0);
});
const Qt = dt;
class en {
  constructor(A) {
    if (typeof A != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(n) {
      t = n;
    });
    const r = this;
    this.promise.then((n) => {
      if (!r._listeners)
        return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](n);
      r._listeners = null;
    }), this.promise.then = (n) => {
      let s;
      const o = new Promise((i) => {
        r.subscribe(i), s = i;
      }).then(n);
      return o.cancel = function() {
        r.unsubscribe(s);
      }, o;
    }, A(function(n, s, o) {
      r.reason || (r.reason = new Ge(n, s, o), t(r.reason));
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
    return { token: new en(function(t) {
      A = t;
    }), cancel: A };
  }
}
const Tc = en, Vr = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
Object.entries(Vr).forEach(([e, A]) => {
  Vr[A] = e;
});
const Mc = Vr, G = function e(A) {
  const t = new Qt(A), r = Fo(Qt.prototype.request, t);
  return Q.extend(r, Qt.prototype, t, { allOwnKeys: !0 }), Q.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(n) {
    return e(we(A, n));
  }, r;
}($r);
function Rc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
G.Axios = Qt, G.CanceledError = Ge, G.CancelToken = Tc, G.isCancel = Io, G.VERSION = Oc, G.toFormData = Dt, G.AxiosError = L, G.Cancel = G.CanceledError, G.all = function(e) {
  return Promise.all(e);
}, G.spread = function(e) {
  return function(A) {
    return e.apply(null, A);
  };
}, G.isAxiosError = function(e) {
  return Q.isObject(e) && e.isAxiosError === !0;
}, G.mergeConfig = we, G.AxiosHeaders = SA, G.formToJSON = (e) => yo(Q.isHTMLForm(e) ? new FormData(e) : e), G.getAdapter = Lo, G.HttpStatusCode = Mc, G.default = G;
const Gc = Rc(typeof self == "object" ? self.FormData : window.FormData), ur = { production: !1, name: "uat", apiHost: "https://api.staging5h4k3.com/api/1.0/", oAuthHost: "https://api.staging5h4k3.com/auth/oauth2/" }, qA = class qA {
  constructor(A, t, r, n) {
    E(this, "instance");
    E(this, "instanceAuth");
    E(this, "version");
    E(this, "bundleId");
    E(this, "deviceId");
    E(this, "storageProvider");
    E(this, "handlers", {});
    G.defaults.withCredentials = !1, this.storageProvider = A, this.bundleId = r, this.deviceId = n, this.version = t, this.instance = G.create({ baseURL: ur.apiHost }), this.instanceAuth = G.create({ baseURL: ur.oAuthHost }), this.setRequestInterceptors(), this.setResponseInterceptors();
  }
  static getInstance(A, t, r, n) {
    return qA.serviceInstance || (qA.serviceInstance = new qA(A, t, r, n)), qA.serviceInstance;
  }
  addTokenToRequest(A) {
    var r;
    const t = this.storageProvider.getObject(EA);
    return t && t.access_token && !((r = A == null ? void 0 : A.url) != null && r.startsWith("http://localhost:5000/auth/oauth2/")) && A.headers && (A.headers.authorization = `${t.token_type} ${t.access_token}`), A;
  }
  addHeadersToRequest(A) {
    var t;
    return (t = A == null ? void 0 : A.url) != null && t.startsWith("http://localhost:5000/auth/oauth2/") || A.headers && (A.headers["X-DEVICE-ID"] = this.deviceId, A.headers["X-APP-ID"] = this.bundleId, A.headers["X-SHAKE-VERSION"] = this.version), A;
  }
  refreshToken() {
    var r;
    const A = new Gc(), t = (r = this.storageProvider.getObject(EA)) == null ? void 0 : r.refresh_token;
    return A.append("refresh_token", t), A.append("grant_type", "refresh_token"), A.append("client_id", "shake_dashboard"), this.postAuth({ resource: "token", data: A, config: { headers: { "Content-Type": "application/x-www-form-urlencoded" } } }).then((n) => (n && n.data && n.data.access_token && this.storageProvider.setObject(EA, n.data), n));
  }
  handle401Error(A) {
    if (this.hasTokensInStorage())
      return this.refreshToken().then((t) => {
        var r, n;
        return t ? (this.storageProvider.setObject(EA, t.data), (n = (r = this.handlers).renewTokenHandler) == null || n.call(r, t.data), this.addTokenToRequest(A)) : new Promise(() => {
          this.storageProvider.removeItem(EA), location.reload();
        });
      }).catch(() => (this.storageProvider.getObject(EA), new Promise(() => {
        this.storageProvider.removeItem(EA), location.reload();
      })));
  }
  hasTokensInStorage() {
    return !!this.storageProvider.getObject(EA);
  }
  setRequestInterceptors() {
    this.instance.interceptors.request.use((A) => (this.addTokenToRequest(A), this.addHeadersToRequest(A), A), (A) => Promise.reject(A)), this.instanceAuth.interceptors.request.use((A) => A, (A) => Promise.reject(A));
  }
  setResponseInterceptors() {
    this.instance.interceptors.response.use((A) => A, (A) => {
      var r, n, s, o, i;
      const t = A.config;
      return t && !t._retry && ((r = A.response) == null ? void 0 : r.status) === 401 && t.url !== `${ur.oAuthHost}token` ? (t._retry = !0, (n = this.handle401Error(t)) == null ? void 0 : n.then(() => this.instance(t))) : t && !t._retry && ((s = A.response) == null ? void 0 : s.status) === 402 ? (i = (o = this.handlers).handle402Error) == null ? void 0 : i.call(o) : Promise.reject(A);
    });
  }
  injectRenewTokenHandler(A) {
    this.handlers = { ...this.handlers, renewTokenHandler: A };
  }
  inject402ErrorHandler(A) {
    this.handlers = { ...this.handlers, handle402Error: A };
  }
  get({ resource: A, config: t }) {
    return this.instance.get(A, t);
  }
  post({ resource: A, data: t, config: r }) {
    return this.instance.post(A, t, r);
  }
  postAuth({ resource: A, data: t, config: r }) {
    return this.instanceAuth.post(A, t, r);
  }
  patch({ resource: A, data: t, config: r }) {
    return this.instance.patch(A, this.formatPatchData(t), r);
  }
  put({ resource: A, data: t, config: r }) {
    return this.instance.put(A, t, r);
  }
  delete({ resource: A, config: t }) {
    return this.instance.delete(A, t);
  }
  formatPatchData(A) {
    return Object.keys(A).map((t) => ({ op: "replace", path: "/" + t, value: A[t] }));
  }
};
E(qA, "serviceInstance");
let Me = qA;
function St() {
  return window.location.hostname === "localhost" ? "localhost.com" : window.location.hostname;
}
class Vc {
  constructor() {
    E(this, "data", V.data);
    E(this, "storage", V.storage);
    E(this, "authApi");
    const A = Me.getInstance(V.storage, Rr, St(), this.data.getShakeDeviceId() ?? "");
    this.authApi = new Do(A);
  }
  async getToken(A, t) {
    const r = await this.storage.getObject(EA);
    if (r)
      return r;
    try {
      const { data: n } = await this.authApi.getToken(A, t);
      return await this.storage.setObject(EA, n), n ?? null;
    } catch (n) {
      return console.error(n), null;
    }
  }
  async registerApp(A) {
    if (!A)
      return !1;
    try {
      return await this.authApi.registerApp(St(), ht.WEB, !1, Cs.WEB), !0;
    } catch (t) {
      return console.error(t), !1;
    }
  }
  isAppRegisteredAndActive() {
    return this.storage.getBoolean(Yt) && this.storage.getBoolean(Zt);
  }
  showButton() {
    const A = gc();
    document.body.appendChild(A);
  }
  async authenticate(A, t) {
    var r;
    try {
      const n = await this.getToken(A, t);
      if (!n)
        return;
      const s = await this.registerApp(n);
      this.storage.setBoolean(Yt, s), this.storage.setBoolean(Zt, !0);
    } catch (n) {
      console.error("Error initializing the app:", n), ((r = n.response) == null ? void 0 : r.status) === 404 && (this.storage.setBoolean(Zt, !1), this.storage.setBoolean(Yt, !1));
    }
  }
}
class Pc {
  constructor({ storage: A, version: t, bundleId: r, deviceId: n }) {
    E(this, "baseApi");
    this.baseApi = Me.getInstance(A, t, r, n);
  }
  sendFeedback(A, t) {
    return this.baseApi.post({ resource: `/issue_tracking/apps/${A}`, data: { bundle_id: A, ...t }, config: { headers: { "Content-Type": "application/json" } } });
  }
}
class Nc {
  constructor({ storage: A, version: t, bundleId: r, deviceId: n }) {
    E(this, "baseApi");
    this.baseApi = Me.getInstance(A, t, r, n);
  }
  getBlob(A, t) {
    return G.get(A, { responseType: "arraybuffer" }).then((r) => new File([r.data], t, { type: r.data.type }));
  }
  sendFiles(A) {
    const t = new FormData();
    return t.append("file", A), this.baseApi.post({ resource: "/files", data: t, config: { headers: { "Content-Type": "multipart/form-data" } } });
  }
}
function _c() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
function Jc() {
  const e = navigator.userAgent;
  return e.match(/Android/i) ? "Android Device" : e.match(/iPhone|iPad|iPod/i) ? "iOS Device" : e.match(/Windows Phone/i) ? "Windows Phone" : e.match(/Windows/i) ? "Windows PC" : e.match(/Macintosh|Mac OS/i) ? "Macintosh" : e.match(/Linux/i) ? "Linux PC" : null;
}
function Xc() {
  const e = navigator.userAgent;
  return e.indexOf("Chrome") !== -1 ? "Google Chrome" : e.indexOf("Firefox") !== -1 ? "Mozilla Firefox" : e.indexOf("Safari") !== -1 ? "Apple Safari" : e.indexOf("MSIE") !== -1 || e.indexOf("Trident") !== -1 ? "Internet Explorer" : e.indexOf("Edge") !== -1 ? "Microsoft Edge" : e.indexOf("Opera") !== -1 || e.indexOf("OPR") !== -1 ? "Opera" : null;
}
function Wc() {
  const e = navigator.userAgent;
  let A = null;
  const t = /Chrome\/([0-9.]+)/, r = /Firefox\/([0-9.]+)/, n = /Version\/([0-9.]+).*Safari/, s = /Edge\/([0-9.]+)/, o = /MSIE ([0-9.]+)/;
  return t.test(e) ? A = e.match(t)[1] : r.test(e) ? A = e.match(r)[1] : n.test(e) ? A = e.match(n)[1] : s.test(e) ? A = e.match(s)[1] : o.test(e) && (A = e.match(o)[1]), A;
}
function Yc() {
  return window.location.href;
}
function Qs() {
  return { width: window.screen.width, height: window.screen.height };
}
function Zc(e, A) {
  return [{ type: wr.TITLE, value: e, label: "Title" }, { type: wr.PICKER, value: A, label: "Feedback type" }];
}
function jc() {
  const e = navigator.userAgent;
  let A = null;
  const t = e.match(/Windows\s([^;)]+)/);
  t && t[1] && (A = `Windows ${t[1].trim()}`);
  const r = e.match(/(Macintosh|Mac OS X) (\d+[._]\d+[._]\d+)/);
  r && r[1] && r[2] && (A = `macOS ${r[2].replace(/_/g, ".")}`);
  const n = e.match(/Linux\s([^;)]+)/);
  n && n[1] && (A = `Linux ${n[1].trim()}`);
  const s = e.match(/Android\s([^;)]+)/);
  s && s[1] && (A = `Android ${s[1].trim()}`);
  const o = e.match(/iPhone|iPad|iPod\s([^;)]+)/);
  o && o[1] && (A = `iOS ${o[1].trim()}`);
  const i = e.match(/Intel|AMD|x86_64\s([^;)]+)/);
  return i && i[1] && (A = `CPU (${i[1].trim()})`), A;
}
function qc() {
  const e = window.screen.orientation;
  return e ? e.type.toLocaleLowerCase().includes("landscape-primary") ? 0 : e.type.toLocaleLowerCase().includes("landscape-secondary") ? 180 : e.type.toLocaleLowerCase().includes("portrait-primary") ? 90 : e.type.toLocaleLowerCase().includes("portrait-secondary") ? 270 : null : null;
}
const zc = async () => {
  if (!("getBattery" in navigator))
    return null;
  try {
    return await navigator.getBattery();
  } catch (e) {
    return console.error("Error getting battery information:", e), null;
  }
}, $c = () => {
  const e = document.createElement("div");
  e.style.fontSize = "1rem", document.body.appendChild(e);
  const A = window.getComputedStyle(e), t = A.getPropertyValue("font-size") ? Number(A.getPropertyValue("font-size")) : null;
  return document.body.removeChild(e), t;
}, Al = () => "connection" in navigator && navigator.connection.effectiveType || null;
async function el(e) {
  try {
    return await navigator.permissions.query({ name: e });
  } catch (A) {
    return console.error("Error checking permission status:", A), null;
  }
}
async function tl() {
  const e = [];
  for (const A of So)
    try {
      const t = await el(A);
      t && t.state && e.push({ name: A, state: t.state });
    } catch {
      return [];
    }
  return e;
}
class rl {
  constructor(A, t, r) {
    E(this, "title");
    E(this, "message");
    E(this, "time");
    E(this, "element");
    this.title = r, this.message = A, this.time = t, this.element = null;
    const n = K();
    n.classList.add("toast-notification"), this.element = n;
    const s = document.getElementsByClassName("toast-notification");
    n.style.marginBottom = 55 * s.length + "px";
    const o = K();
    if (o.classList.add("content-container"), this.title) {
      const a = K();
      a.classList.add("title-container"), a.textContent = this.title, o.appendChild(a);
    }
    const i = K();
    i.classList.add("message-container"), i.textContent = this.message, o.appendChild(i), n.appendChild(o);
    const B = K();
    B.classList.add("close-notification");
    const c = IA("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14021_39143)'%3e%3cpath%20d='M16%208L8%2016'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16%2016.001L8%208.00098'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14021_39143'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
    B.appendChild(c), n.append(B), document.body.appendChild(n), setTimeout(function() {
      n.remove();
    }, this.time), B.addEventListener("click", () => {
      n.remove();
    });
  }
}
class nl {
  constructor() {
    E(this, "data", V.data);
    E(this, "feedbackApi");
    E(this, "filesApi");
    E(this, "baseApiParams", { storage: V.storage, version: Rr, bundleId: St(), deviceId: this.data.getShakeDeviceId() ?? "" });
    this.feedbackApi = new Pc(this.baseApiParams), this.filesApi = new Nc(this.baseApiParams);
  }
  async sendUserFeedback(A, t, r, n, s) {
    try {
      await this.feedbackApi.sendFeedback(St(), await async function(o, i, B, c, a) {
        const l = await zc().then((u) => u);
        return { custom_fields: Zc(i, o), timezone: _c(), issue_reported_time: Cr((/* @__PURE__ */ new Date()).toString()), os: ht.WEB, device: Jc(), browser: Xc(), browser_version: Wc(), current_view: Yc(), screen_height: Qs().height, screen_width: Qs().width, sdk_version: Rr, platform: ht.WEB, report_type: fs.MANUAL, screen_density: window.devicePixelRatio || 1, screenshot_url: B, video_url: c, files: a, app_version: "1.0", locale: window.navigator.language || null, os_version: jc(), device_orientation: qc(), battery_level: l.level, battery_status: l.charging ? 1 : 0, font_scale: $c(), network_type: Al(), permissions: await tl().then((u) => u) };
      }(A, t, r, n, s)), new rl(X().shake_sdk_dialog_ticket_sent_message, 4e3, X().shake_sdk_dialog_ticket_sent_title);
    } catch (o) {
      return console.error(o), null;
    }
  }
  async sendFile(A) {
    try {
      const { data: t } = await this.filesApi.sendFiles(A);
      return t.url;
    } catch (t) {
      return void console.error(t);
    }
  }
  async createFile(A) {
    try {
      return await this.filesApi.getBlob(A.data, A.name);
    } catch (t) {
      return console.error(t), null;
    }
  }
  async convertAttachmentsToFiles(A) {
    if (!A)
      return;
    const t = [];
    return await Promise.all(A.map(async (r) => {
      const n = await this.createFile(r);
      n && t.push(n);
    })), t;
  }
  async sendFiles(A) {
    const t = [];
    return await Promise.all(A.map(async (r) => {
      await this.sendFile(r).then((n) => {
        n && t.push({ url: n });
      });
    })), t;
  }
  async getFirstByType(A) {
    if (!A)
      return;
    let t;
    if (A) {
      const r = await this.createFile(A);
      r && (t = await this.sendFile(r));
    }
    return t;
  }
}
class Re {
}
E(Re, "shakeAuthService", new Vc()), E(Re, "shakeFeedbackService", new nl());
let at;
const sl = new Uint8Array(16);
function ol() {
  if (!at && (at = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !at))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return at(sl);
}
const Z = [];
for (let e = 0; e < 256; ++e)
  Z.push((e + 256).toString(16).slice(1));
const hs = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
function il(e, A, t) {
  if (hs.randomUUID && !A && !e)
    return hs.randomUUID();
  const r = (e = e || {}).random || (e.rng || ol)();
  if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, A) {
    t = t || 0;
    for (let n = 0; n < 16; ++n)
      A[t + n] = r[n];
    return A;
  }
  return function(n, s = 0) {
    return Z[n[s + 0]] + Z[n[s + 1]] + Z[n[s + 2]] + Z[n[s + 3]] + "-" + Z[n[s + 4]] + Z[n[s + 5]] + "-" + Z[n[s + 6]] + Z[n[s + 7]] + "-" + Z[n[s + 8]] + Z[n[s + 9]] + "-" + Z[n[s + 10]] + Z[n[s + 11]] + Z[n[s + 12]] + Z[n[s + 13]] + Z[n[s + 14]] + Z[n[s + 15]];
  }(r);
}
class gr {
  static async start(A, t) {
    this.data.getShakeDeviceId() || await this.data.setShakeDeviceId(il()), this.isLoading || (this.isLoading = !0, A ? t ? (Ct.clientId = A, Ct.clientSecret = t, this.shakeAuthService.isAppRegisteredAndActive() ? this.shakeAuthService.showButton() : (await this.shakeAuthService.authenticate(A, t).finally(() => this.isLoading = !1), this.shakeAuthService.isAppRegisteredAndActive() && this.shakeAuthService.showButton())) : console.warn("Shake not started. Client secret is empty.") : console.warn("Shake not started. Client id is empty."));
  }
}
E(gr, "isLoading", !1), E(gr, "data", V.data), E(gr, "shakeAuthService", Re.shakeAuthService);
export {
  gr as default
};
//# sourceMappingURL=browser.js.map
