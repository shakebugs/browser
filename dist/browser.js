var Po = Object.defineProperty;
var No = (e, A, t) => A in e ? Po(e, A, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[A] = t;
var E = (e, A, t) => (No(e, typeof A != "symbol" ? A + "" : A, t), t);
import "./main.css";
var vs = ((e) => (e.WEB = "Web", e))(vs || {}), It = ((e) => (e.WEB = "Web", e))(It || {});
const VA = "shake.sdk.appToken", rr = "shake.sdk.isAppRegistered", nr = "shake.sdk.isAppActive", dn = "shake.sdk.isShakeOpened", hn = "shake.sdk.shakeState", Qn = "shake.sdk.shakeDeviceId";
class _o {
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
const _A = (e) => {
  const A = document.createElement("img");
  return A.classList.add("shake-sdk-image"), A.src = e, A;
}, Ls = () => {
  const e = document.createElement("button");
  return e.classList.add("shake-sdk-button"), e;
}, Ks = (e) => {
  const A = document.createElement("p");
  return A.classList.add("shake-sdk-text-h2"), A.innerText = e, A;
}, ks = (e) => {
  const A = document.createElement("p");
  return A.classList.add("shake-sdk-text-button"), A.innerText = e, A;
};
var Le;
let vt = (Le = class {
}, E(Le, "clientId", ""), E(Le, "clientSecret", ""), E(Le, "bundleId", ""), Le);
var Re = ((e) => (e.SUGGESTION = "improvement", e.BUG = "bug", e.QUESTION = "question", e))(Re || {}), Ds = ((e) => (e.MANUAL = "manual", e.AUTOMATIC = "automatic", e))(Ds || {}), Hr = ((e) => (e.TITLE = "title", e.TEXT_INPUT = "text_input", e.EMAIL = "email", e.PICKER = "picker", e))(Hr || {});
const Jo = ["geolocation", "camera", "microphone", "notifications", "persistent-storage", "screen-wake-lock"];
class Lt {
  constructor() {
    E(this, "attachments", []);
    E(this, "description", "");
    E(this, "feedbackType", Re.BUG);
  }
}
const Je = (e) => {
  const A = document.createElement("img");
  A.src = e;
  const t = document.createElement("button");
  return t.classList.add("shake-sdk-circle-button"), t.appendChild(A), t;
}, x = () => {
  const e = document.createElement("div");
  return e.classList.add("shake-sdk-container"), e;
}, yr = "data:image/svg+xml,%3csvg%20width='50'%20height='51'%20viewBox='0%200%2050%2051'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.834%2021.5598L29.1673%2029.8931'%20stroke='%231C1C1E'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M29.1673%2021.56L20.834%2029.8933'%20stroke='%231C1C1E'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
class Xo {
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
class Wo {
  constructor(A) {
    E(this, "localStorage");
    E(this, "isShakeOpened", () => this.localStorage.getBoolean(dn) ?? !1);
    E(this, "setShakeOpened", (A) => this.localStorage.setBoolean(dn, A));
    E(this, "getShakeState", () => this.localStorage.getObject(hn));
    E(this, "setShakeState", (A) => this.localStorage.setObject(hn, A));
    E(this, "getShakeDeviceId", () => this.localStorage.getString(Qn));
    E(this, "setShakeDeviceId", (A) => this.localStorage.setString(Qn, A));
    this.localStorage = A;
  }
}
class Yo {
  constructor() {
    E(this, "addObservers", []);
    E(this, "removeObservers", []);
    E(this, "addAttachment", (A) => {
      const t = Y.data.getShakeState();
      t == null || t.attachments.push(A), Y.data.setShakeState(t), this.notifyAdded(A);
    });
    E(this, "removeAttachment", (A) => {
      const t = Y.data.getShakeState();
      t && (t.attachments = t.attachments.filter((r) => r.name !== A.name)), Y.data.setShakeState(t), this.notifyRemoved(A);
    });
    E(this, "notifyAdded", (A) => this.addObservers.forEach((t) => t(A)));
    E(this, "notifyRemoved", (A) => this.removeObservers.forEach((t) => t(A)));
  }
}
const me = class me {
};
E(me, "storage", new Xo()), E(me, "data", new Wo(me.storage)), E(me, "attachmentsManager", new Yo());
let Y = me;
const Xe = (e = !0) => {
  const A = Y.data;
  e && (Hc(), A.setShakeState(null));
  const t = document.getElementById("shake-sdk-root");
  t == null || t.remove(), A.setShakeOpened(!1);
}, An = () => {
  const e = document.createElement("div");
  return e.classList.add("shake-sdk-card"), e;
}, Ss = "data:image/svg+xml,%3csvg%20width='31'%20height='32'%20viewBox='0%200%2031%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.7285%2013.4543L17.8197%2018.5455'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.8197%2013.4545L12.7285%2018.5457'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Zo = (e) => {
  const A = x();
  return A.classList.add("shake-sdk-attachment-title-box"), A.appendChild(((t) => {
    const r = document.createElement("p");
    return r.classList.add("shake-sdk-text-p3"), r.innerText = t, r;
  })(e)), A;
}, Wt = ({ src: e, controls: A, autoplay: t }) => {
  const r = document.createElement("video");
  return r.classList.add("shake-sdk-video"), r.src = e, r.controls = A ?? !1, r.preload = "metadata", r.autoplay = t ?? !1, r.loop = !0, r;
};
var mA = ((e) => (e[e.IMAGE = 0] = "IMAGE", e[e.VIDEO = 1] = "VIDEO", e))(mA || {});
const jo = { shake_sdk_dialog_add_attachment: "Add attachment", shake_sdk_dialog_add_attachment_grab_screenshot: "Grab screenshot", shake_sdk_dialog_add_attachment_record_screen: "Record screen", shake_sdk_dialog_add_attachment_browse_locations: "Browse other locations", shake_sdk_dialog_add_attachment_type_video: "Video", shake_sdk_dialog_add_attachment_type_image: "Screenshot", shake_sdk_dialog_ticket_sent_title: "Done.", shake_sdk_dialog_ticket_sent_message: "Your ticket was sent.", shake_sdk_error_message: "Something went wrong.", shake_sdk_main_button_title: "Send feedback", shake_sdk_ticket_form_title: "New ticket", shake_sdk_new_ticket_feedback_type_title: "Ticket type", shake_sdk_new_ticket_feedback_type_bug: "Bug report", shake_sdk_new_ticket_feedback_type_question: "Question", shake_sdk_new_ticket_feedback_type_suggestion: "Improvement suggestion", shake_sdk_ticket_form_description_placeholder: "Description", shake_sdk_ticket_form_submit_button_text: "Submit", shake_sdk_ticket_form_submit_button_text_loading: "Submiting..." };
var en = ((e) => (e[e.EN = 0] = "EN", e))(en || {});
class br {
}
E(br, "language", en.EN), E(br, "bundleId", "");
const tA = (e = br.language) => (en.EN, jo), xs = "data:image/svg+xml,%3csvg%20width='23'%20height='23'%20viewBox='0%200%2023%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15050_29400)'%3e%3cpath%20d='M11.3994%207.80005V15'%20stroke='%238E8E93'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.9998%2011.4001H7.7998'%20stroke='%238E8E93'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15050_29400'%3e%3crect%20width='21.6'%20height='21.6'%20fill='white'%20transform='translate(0.599609%200.600098)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Cn = ({ img: e, text: A, onClick: t }) => {
  const r = document.createElement("button");
  return r.classList.add("shake-sdk-context-menu-item"), r.onclick = t, r.appendChild(_A(e)), r.appendChild(((n) => {
    const s = document.createElement("p");
    return s.classList.add("shake-sdk-text-p2"), s.innerText = n, s;
  })(A)), r;
}, Xt = class Xt {
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
      }, Xt.SCREEN_RECORDING_TIME);
    });
    E(this, "stopTimer", () => {
      this.timeout && (window.clearTimeout(this.timeout), this.timeout = null);
    });
  }
};
E(Xt, "SCREEN_RECORDING_TIME", 3e4);
let Ir = Xt;
function Ts() {
  const e = Lo(Y.data.getShakeState() ?? new Lt());
  document.body.appendChild(e), Y.data.setShakeOpened(!0);
}
function vr(e) {
  const A = new Date(e);
  return `${A.getUTCFullYear()}-${(A.getUTCMonth() + 1).toString().padStart(2, "0")}-${A.getUTCDate().toString().padStart(2, "0")}T${A.getUTCHours().toString().padStart(2, "0")}:${A.getUTCMinutes().toString().padStart(2, "0")}:${A.getUTCSeconds().toString().padStart(2, "0")}.${A.getUTCMilliseconds().toString().padStart(3, "0")}Z`;
}
function Os(e, A) {
  const t = Y.data.getShakeState(), r = { data: e, type: A, name: (n = A, n === mA.IMAGE ? `screenshot_${vr((/* @__PURE__ */ new Date()).toString())}.jpg` : n === mA.VIDEO ? `screen_recording_${vr((/* @__PURE__ */ new Date()).toString())}.mp4` : "") };
  var n;
  t == null || t.attachments.push(r), Y.data.setShakeState(t);
}
const Ms = () => {
  const e = new Ir();
  e.onStartListener = () => {
    Xe(!1);
  }, e.onStopListener = (A) => {
    Os(A, mA.VIDEO), Ts();
  }, e.start();
}, qo = (e, A) => {
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
var Lr = function(e, A) {
  return Lr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, Lr(e, A);
};
function SA(e, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  function t() {
    this.constructor = e;
  }
  Lr(e, A), e.prototype = A === null ? Object.create(A) : (t.prototype = A.prototype, new t());
}
var Kr = function() {
  return Kr = Object.assign || function(e) {
    for (var A, t = 1, r = arguments.length; t < r; t++)
      for (var n in A = arguments[t])
        Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n]);
    return e;
  }, Kr.apply(this, arguments);
};
function hA(e, A, t, r) {
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
function gA(e, A) {
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
function ze(e, A, t) {
  if (t || arguments.length === 2)
    for (var r, n = 0, s = A.length; n < s; n++)
      !r && n in A || (r || (r = Array.prototype.slice.call(A, 0, n)), r[n] = A[n]);
  return e.concat(r || A);
}
for (var $A = function() {
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
}(), Yt = function(e, A) {
  return $A.fromClientRect(e, A.getBoundingClientRect());
}, Kt = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var n = e.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var s = e.charCodeAt(t++);
      (64512 & s) == 56320 ? A.push(((1023 & n) << 10) + (1023 & s) + 65536) : (A.push(n), t--);
    } else
      A.push(n);
  }
  return A;
}, j = function() {
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
}, zo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", $o = typeof Uint8Array > "u" ? [] : new Uint8Array(256), $e = 0; $e < 64; $e++)
  $o[zo.charCodeAt($e)] = $e;
for (var Ai = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ke = typeof Uint8Array > "u" ? [] : new Uint8Array(256), At = 0; At < 64; At++)
  Ke[Ai.charCodeAt(At)] = At;
for (var Un = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, ei = function() {
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
}(), ti = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ri = typeof Uint8Array > "u" ? [] : new Uint8Array(256), et = 0; et < 64; et++)
  ri[ti.charCodeAt(et)] = et;
var te = 10, kr = 13, ke = 15, tt = 17, be = 18, ni = 19, pn = 20, Dr = 21, Ie = 22, ue = 24, fA = 25, De = 26, Se = 27, we = 28, Ce = 30, rt = 32, nt = 33, Sr = 34, xr = 35, Ge = 37, Tr = 38, pt = 39, Ft = 40, Fn = 42, si = [9001, 65288], K = "×", st = "÷", Or = function(e, A) {
  var t, r, n, s = function(a) {
    var l, u, g, w, d, Q = 0.75 * a.length, C = a.length, p = 0;
    a[a.length - 1] === "=" && (Q--, a[a.length - 2] === "=" && Q--);
    var y = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && Uint8Array.prototype.slice !== void 0 ? new ArrayBuffer(Q) : new Array(Q), F = Array.isArray(y) ? y : new Uint8Array(y);
    for (l = 0; l < C; l += 4)
      u = Ke[a.charCodeAt(l)], g = Ke[a.charCodeAt(l + 1)], w = Ke[a.charCodeAt(l + 2)], d = Ke[a.charCodeAt(l + 3)], F[p++] = u << 2 | g >> 4, F[p++] = (15 & g) << 4 | w >> 2, F[p++] = (3 & w) << 6 | 63 & d;
    return y;
  }(e), o = Array.isArray(s) ? function(a) {
    for (var l = a.length, u = [], g = 0; g < l; g += 4)
      u.push(a[g + 3] << 24 | a[g + 2] << 16 | a[g + 1] << 8 | a[g]);
    return u;
  }(s) : new Uint32Array(s), i = Array.isArray(s) ? function(a) {
    for (var l = a.length, u = [], g = 0; g < l; g += 2)
      u.push(a[g + 1] << 8 | a[g]);
    return u;
  }(s) : new Uint16Array(s), B = Un(i, 12, o[4] / 2), c = o[5] === 2 ? Un(i, (24 + o[4]) / 2) : (t = o, r = Math.ceil((24 + o[4]) / 4), t.slice ? t.slice(r, n) : new Uint32Array(Array.prototype.slice.call(t, r, n)));
  return new ei(o[0], o[1], o[2], o[3], B, c);
}("KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA=="), ZA = [Ce, 36], Mr = [1, 2, 3, 5], Rs = [te, 8], fn = [Se, De], oi = Mr.concat(Rs), mn = [Tr, pt, Ft, Sr, xr], ii = [ke, kr], sr = function(e, A, t, r) {
  var n = r[t];
  if (Array.isArray(e) ? e.indexOf(n) !== -1 : e === n)
    for (var s = t; s <= r.length; ) {
      if ((B = r[++s]) === A)
        return !0;
      if (B !== te)
        break;
    }
  if (n === te)
    for (s = t; s > 0; ) {
      var o = r[--s];
      if (Array.isArray(e) ? e.indexOf(o) !== -1 : e === o)
        for (var i = t; i <= r.length; ) {
          var B;
          if ((B = r[++i]) === A)
            return !0;
          if (B !== te)
            break;
        }
      if (o !== te)
        break;
    }
  return !1;
}, En = function(e, A) {
  for (var t = e; t >= 0; ) {
    var r = A[t];
    if (r !== te)
      return r;
    t--;
  }
  return 0;
}, ai = function(e, A, t, r, n) {
  if (t[r] === 0)
    return K;
  var s = r - 1;
  if (Array.isArray(n) && n[s] === !0)
    return K;
  var o = s - 1, i = s + 1, B = A[s], c = o >= 0 ? A[o] : 0, a = A[i];
  if (B === 2 && a === 3)
    return K;
  if (Mr.indexOf(B) !== -1)
    return "!";
  if (Mr.indexOf(a) !== -1 || Rs.indexOf(a) !== -1)
    return K;
  if (En(s, A) === 8)
    return st;
  if (Or.get(e[s]) === 11 || (B === rt || B === nt) && Or.get(e[i]) === 11 || B === 7 || a === 7 || B === 9 || [te, kr, ke].indexOf(B) === -1 && a === 9 || [tt, be, ni, ue, we].indexOf(a) !== -1 || En(s, A) === Ie || sr(23, Ie, s, A) || sr([tt, be], Dr, s, A) || sr(12, 12, s, A))
    return K;
  if (B === te)
    return st;
  if (B === 23 || a === 23)
    return K;
  if (a === 16 || B === 16)
    return st;
  if ([kr, ke, Dr].indexOf(a) !== -1 || B === 14 || c === 36 && ii.indexOf(B) !== -1 || B === we && a === 36 || a === pn || ZA.indexOf(a) !== -1 && B === fA || ZA.indexOf(B) !== -1 && a === fA || B === Se && [Ge, rt, nt].indexOf(a) !== -1 || [Ge, rt, nt].indexOf(B) !== -1 && a === De || ZA.indexOf(B) !== -1 && fn.indexOf(a) !== -1 || fn.indexOf(B) !== -1 && ZA.indexOf(a) !== -1 || [Se, De].indexOf(B) !== -1 && (a === fA || [Ie, ke].indexOf(a) !== -1 && A[i + 1] === fA) || [Ie, ke].indexOf(B) !== -1 && a === fA || B === fA && [fA, we, ue].indexOf(a) !== -1)
    return K;
  if ([fA, we, ue, tt, be].indexOf(a) !== -1)
    for (var l = s; l >= 0; ) {
      if ((u = A[l]) === fA)
        return K;
      if ([we, ue].indexOf(u) === -1)
        break;
      l--;
    }
  if ([Se, De].indexOf(a) !== -1)
    for (l = [tt, be].indexOf(B) !== -1 ? o : s; l >= 0; ) {
      var u;
      if ((u = A[l]) === fA)
        return K;
      if ([we, ue].indexOf(u) === -1)
        break;
      l--;
    }
  if (Tr === B && [Tr, pt, Sr, xr].indexOf(a) !== -1 || [pt, Sr].indexOf(B) !== -1 && [pt, Ft].indexOf(a) !== -1 || [Ft, xr].indexOf(B) !== -1 && a === Ft || mn.indexOf(B) !== -1 && [pn, De].indexOf(a) !== -1 || mn.indexOf(a) !== -1 && B === Se || ZA.indexOf(B) !== -1 && ZA.indexOf(a) !== -1 || B === ue && ZA.indexOf(a) !== -1 || ZA.concat(fA).indexOf(B) !== -1 && a === Ie && si.indexOf(e[i]) === -1 || ZA.concat(fA).indexOf(a) !== -1 && B === be)
    return K;
  if (B === 41 && a === 41) {
    for (var g = t[s], w = 1; g > 0 && A[--g] === 41; )
      w++;
    if (w % 2 != 0)
      return K;
  }
  return B === rt && a === nt ? K : st;
}, Bi = function(e, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var t = function(i, B) {
    B === void 0 && (B = "strict");
    var c = [], a = [], l = [];
    return i.forEach(function(u, g) {
      var w = Or.get(u);
      if (w > 50 ? (l.push(!0), w -= 50) : l.push(!1), ["normal", "auto", "loose"].indexOf(B) !== -1 && [8208, 8211, 12316, 12448].indexOf(u) !== -1)
        return a.push(g), c.push(16);
      if (w === 4 || w === 11) {
        if (g === 0)
          return a.push(g), c.push(Ce);
        var d = c[g - 1];
        return oi.indexOf(d) === -1 ? (a.push(a[g - 1]), c.push(d)) : (a.push(g), c.push(Ce));
      }
      return a.push(g), w === 31 ? c.push(B === "strict" ? Dr : Ge) : w === Fn || w === 29 ? c.push(Ce) : w === 43 ? u >= 131072 && u <= 196605 || u >= 196608 && u <= 262141 ? c.push(Ge) : c.push(Ce) : void c.push(w);
    }), [a, c, l];
  }(e, A.lineBreak), r = t[0], n = t[1], s = t[2];
  A.wordBreak !== "break-all" && A.wordBreak !== "break-word" || (n = n.map(function(i) {
    return [fA, Ce, Fn].indexOf(i) !== -1 ? Ge : i;
  }));
  var o = A.wordBreak === "keep-all" ? s.map(function(i, B) {
    return i && e[B] >= 19968 && e[B] <= 40959;
  }) : void 0;
  return [r, n, o];
}, ci = function() {
  function e(A, t, r, n) {
    this.codePoints = A, this.required = t === "!", this.start = r, this.end = n;
  }
  return e.prototype.slice = function() {
    return j.apply(void 0, this.codePoints.slice(this.start, this.end));
  }, e;
}(), UA = 45, le = 43, GA = -1, QA = function(e) {
  return e >= 48 && e <= 57;
}, ge = function(e) {
  return QA(e) || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}, ot = function(e) {
  return e === 10 || e === 9 || e === 32;
}, kt = function(e) {
  return function(A) {
    return function(t) {
      return t >= 97 && t <= 122;
    }(A) || function(t) {
      return t >= 65 && t <= 90;
    }(A);
  }(e) || function(A) {
    return A >= 128;
  }(e) || e === 95;
}, Hn = function(e) {
  return kt(e) || QA(e) || e === UA;
}, li = function(e) {
  return e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e === 127;
}, ee = function(e, A) {
  return e === 92 && A !== 10;
}, it = function(e, A, t) {
  return e === UA ? kt(A) || ee(A, t) : !!kt(e) || !(e !== 92 || !ee(e, A));
}, or = function(e, A, t) {
  return e === le || e === UA ? !!QA(A) || A === 46 && QA(t) : QA(e === 46 ? A : e);
}, ui = function(e) {
  var A = 0, t = 1;
  e[A] !== le && e[A] !== UA || (e[A] === UA && (t = -1), A++);
  for (var r = []; QA(e[A]); )
    r.push(e[A++]);
  var n = r.length ? parseInt(j.apply(void 0, r), 10) : 0;
  e[A] === 46 && A++;
  for (var s = []; QA(e[A]); )
    s.push(e[A++]);
  var o = s.length, i = o ? parseInt(j.apply(void 0, s), 10) : 0;
  e[A] !== 69 && e[A] !== 101 || A++;
  var B = 1;
  e[A] !== le && e[A] !== UA || (e[A] === UA && (B = -1), A++);
  for (var c = []; QA(e[A]); )
    c.push(e[A++]);
  var a = c.length ? parseInt(j.apply(void 0, c), 10) : 0;
  return t * (n + i * Math.pow(10, -o)) * Math.pow(10, B * a);
}, wi = { type: 2 }, gi = { type: 3 }, di = { type: 4 }, hi = { type: 13 }, Qi = { type: 8 }, Ci = { type: 21 }, Ui = { type: 9 }, pi = { type: 10 }, Fi = { type: 11 }, fi = { type: 12 }, mi = { type: 14 }, at = { type: 23 }, Ei = { type: 1 }, Hi = { type: 25 }, yi = { type: 24 }, bi = { type: 26 }, Ii = { type: 27 }, vi = { type: 28 }, Li = { type: 29 }, Ki = { type: 31 }, Rr = { type: 32 }, Gs = function() {
  function e() {
    this._value = [];
  }
  return e.prototype.write = function(A) {
    this._value = this._value.concat(Kt(A));
  }, e.prototype.read = function() {
    for (var A = [], t = this.consumeToken(); t !== Rr; )
      A.push(t), t = this.consumeToken();
    return A;
  }, e.prototype.consumeToken = function() {
    var A = this.consumeCodePoint();
    switch (A) {
      case 34:
        return this.consumeStringToken(34);
      case 35:
        var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
        if (Hn(t) || ee(r, n)) {
          var s = it(t, r, n) ? 2 : 1;
          return { type: 5, value: this.consumeName(), flags: s };
        }
        break;
      case 36:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), hi;
        break;
      case 39:
        return this.consumeStringToken(39);
      case 40:
        return wi;
      case 41:
        return gi;
      case 42:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), mi;
        break;
      case le:
        if (or(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case 44:
        return di;
      case UA:
        var o = A, i = this.peekCodePoint(0), B = this.peekCodePoint(1);
        if (or(o, i, B))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        if (it(o, i, B))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        if (i === UA && B === 62)
          return this.consumeCodePoint(), this.consumeCodePoint(), yi;
        break;
      case 46:
        if (or(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case 47:
        if (this.peekCodePoint(0) === 42)
          for (this.consumeCodePoint(); ; ) {
            var c = this.consumeCodePoint();
            if (c === 42 && (c = this.consumeCodePoint()) === 47)
              return this.consumeToken();
            if (c === GA)
              return this.consumeToken();
          }
        break;
      case 58:
        return bi;
      case 59:
        return Ii;
      case 60:
        if (this.peekCodePoint(0) === 33 && this.peekCodePoint(1) === UA && this.peekCodePoint(2) === UA)
          return this.consumeCodePoint(), this.consumeCodePoint(), Hi;
        break;
      case 64:
        var a = this.peekCodePoint(0), l = this.peekCodePoint(1), u = this.peekCodePoint(2);
        if (it(a, l, u))
          return { type: 7, value: this.consumeName() };
        break;
      case 91:
        return vi;
      case 92:
        if (ee(A, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        break;
      case 93:
        return Li;
      case 61:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), Qi;
        break;
      case 123:
        return Fi;
      case 125:
        return fi;
      case 117:
      case 85:
        var g = this.peekCodePoint(0), w = this.peekCodePoint(1);
        return g !== le || !ge(w) && w !== 63 || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
      case 124:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), Ui;
        if (this.peekCodePoint(0) === 124)
          return this.consumeCodePoint(), Ci;
        break;
      case 126:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), pi;
        break;
      case GA:
        return Rr;
    }
    return ot(A) ? (this.consumeWhiteSpace(), Ki) : QA(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : kt(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: j(A) };
  }, e.prototype.consumeCodePoint = function() {
    var A = this._value.shift();
    return A === void 0 ? -1 : A;
  }, e.prototype.reconsumeCodePoint = function(A) {
    this._value.unshift(A);
  }, e.prototype.peekCodePoint = function(A) {
    return A >= this._value.length ? -1 : this._value[A];
  }, e.prototype.consumeUnicodeRangeToken = function() {
    for (var A = [], t = this.consumeCodePoint(); ge(t) && A.length < 6; )
      A.push(t), t = this.consumeCodePoint();
    for (var r = !1; t === 63 && A.length < 6; )
      A.push(t), t = this.consumeCodePoint(), r = !0;
    if (r)
      return { type: 30, start: parseInt(j.apply(void 0, A.map(function(o) {
        return o === 63 ? 48 : o;
      })), 16), end: parseInt(j.apply(void 0, A.map(function(o) {
        return o === 63 ? 70 : o;
      })), 16) };
    var n = parseInt(j.apply(void 0, A), 16);
    if (this.peekCodePoint(0) === UA && ge(this.peekCodePoint(1))) {
      this.consumeCodePoint(), t = this.consumeCodePoint();
      for (var s = []; ge(t) && s.length < 6; )
        s.push(t), t = this.consumeCodePoint();
      return { type: 30, start: n, end: parseInt(j.apply(void 0, s), 16) };
    }
    return { type: 30, start: n, end: n };
  }, e.prototype.consumeIdentLikeToken = function() {
    var A = this.consumeName();
    return A.toLowerCase() === "url" && this.peekCodePoint(0) === 40 ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === 40 ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
  }, e.prototype.consumeUrlToken = function() {
    var A = [];
    if (this.consumeWhiteSpace(), this.peekCodePoint(0) === GA)
      return { type: 22, value: "" };
    var t = this.peekCodePoint(0);
    if (t === 39 || t === 34) {
      var r = this.consumeStringToken(this.consumeCodePoint());
      return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === GA || this.peekCodePoint(0) === 41) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), at);
    }
    for (; ; ) {
      var n = this.consumeCodePoint();
      if (n === GA || n === 41)
        return { type: 22, value: j.apply(void 0, A) };
      if (ot(n))
        return this.consumeWhiteSpace(), this.peekCodePoint(0) === GA || this.peekCodePoint(0) === 41 ? (this.consumeCodePoint(), { type: 22, value: j.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), at);
      if (n === 34 || n === 39 || n === 40 || li(n))
        return this.consumeBadUrlRemnants(), at;
      if (n === 92) {
        if (!ee(n, this.peekCodePoint(0)))
          return this.consumeBadUrlRemnants(), at;
        A.push(this.consumeEscapedCodePoint());
      } else
        A.push(n);
    }
  }, e.prototype.consumeWhiteSpace = function() {
    for (; ot(this.peekCodePoint(0)); )
      this.consumeCodePoint();
  }, e.prototype.consumeBadUrlRemnants = function() {
    for (; ; ) {
      var A = this.consumeCodePoint();
      if (A === 41 || A === GA)
        return;
      ee(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
    }
  }, e.prototype.consumeStringSlice = function(A) {
    for (var t = ""; A > 0; ) {
      var r = Math.min(5e4, A);
      t += j.apply(void 0, this._value.splice(0, r)), A -= r;
    }
    return this._value.shift(), t;
  }, e.prototype.consumeStringToken = function(A) {
    for (var t = "", r = 0; ; ) {
      var n = this._value[r];
      if (n === GA || n === void 0 || n === A)
        return { type: 0, value: t += this.consumeStringSlice(r) };
      if (n === 10)
        return this._value.splice(0, r), Ei;
      if (n === 92) {
        var s = this._value[r + 1];
        s !== GA && s !== void 0 && (s === 10 ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : ee(n, s) && (t += this.consumeStringSlice(r), t += j(this.consumeEscapedCodePoint()), r = -1));
      }
      r++;
    }
  }, e.prototype.consumeNumber = function() {
    var A = [], t = 4, r = this.peekCodePoint(0);
    for (r !== le && r !== UA || A.push(this.consumeCodePoint()); QA(this.peekCodePoint(0)); )
      A.push(this.consumeCodePoint());
    r = this.peekCodePoint(0);
    var n = this.peekCodePoint(1);
    if (r === 46 && QA(n))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = 8; QA(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    r = this.peekCodePoint(0), n = this.peekCodePoint(1);
    var s = this.peekCodePoint(2);
    if ((r === 69 || r === 101) && ((n === le || n === UA) && QA(s) || QA(n)))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = 8; QA(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    return [ui(A), t];
  }, e.prototype.consumeNumericToken = function() {
    var A = this.consumeNumber(), t = A[0], r = A[1], n = this.peekCodePoint(0), s = this.peekCodePoint(1), o = this.peekCodePoint(2);
    return it(n, s, o) ? { type: 15, number: t, flags: r, unit: this.consumeName() } : n === 37 ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
  }, e.prototype.consumeEscapedCodePoint = function() {
    var A = this.consumeCodePoint();
    if (ge(A)) {
      for (var t = j(A); ge(this.peekCodePoint(0)) && t.length < 6; )
        t += j(this.consumeCodePoint());
      ot(this.peekCodePoint(0)) && this.consumeCodePoint();
      var r = parseInt(t, 16);
      return r === 0 || function(n) {
        return n >= 55296 && n <= 57343;
      }(r) || r > 1114111 ? 65533 : r;
    }
    return A === GA ? 65533 : A;
  }, e.prototype.consumeName = function() {
    for (var A = ""; ; ) {
      var t = this.consumeCodePoint();
      if (Hn(t))
        A += j(t);
      else {
        if (!ee(t, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(t), A;
        A += j(this.consumeEscapedCodePoint());
      }
    }
  }, e;
}(), Vs = function() {
  function e(A) {
    this._tokens = A;
  }
  return e.create = function(A) {
    var t = new Gs();
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
      if (r.type === 32 || Di(r, A))
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
    return A === void 0 ? Rr : A;
  }, e.prototype.reconsumeToken = function(A) {
    this._tokens.unshift(A);
  }, e;
}(), We = function(e) {
  return e.type === 15;
}, Ue = function(e) {
  return e.type === 17;
}, P = function(e) {
  return e.type === 20;
}, ki = function(e) {
  return e.type === 0;
}, Gr = function(e, A) {
  return P(e) && e.value === A;
}, yn = function(e) {
  return e.type !== 31;
}, He = function(e) {
  return e.type !== 31 && e.type !== 4;
}, NA = function(e) {
  var A = [], t = [];
  return e.forEach(function(r) {
    if (r.type === 4) {
      if (t.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      return A.push(t), void (t = []);
    }
    r.type !== 31 && t.push(r);
  }), t.length && A.push(t), A;
}, Di = function(e, A) {
  return A === 11 && e.type === 12 || A === 28 && e.type === 29 || A === 2 && e.type === 3;
}, ie = function(e) {
  return e.type === 17 || e.type === 15;
}, z = function(e) {
  return e.type === 16 || ie(e);
}, Ps = function(e) {
  return e.length > 1 ? [e[0], e[1]] : [e[0]];
}, cA = { type: 17, number: 0, flags: 4 }, tn = { type: 16, number: 50, flags: 4 }, re = { type: 16, number: 100, flags: 4 }, xe = function(e, A, t) {
  var r = e[0], n = e[1];
  return [N(r, A), N(n !== void 0 ? n : r, t)];
}, N = function(e, A) {
  if (e.type === 16)
    return e.number / 100 * A;
  if (We(e))
    switch (e.unit) {
      case "rem":
      case "em":
        return 16 * e.number;
      default:
        return e.number;
    }
  return e.number;
}, Ns = "grad", _s = "turn", Zt = function(e, A) {
  if (A.type === 15)
    switch (A.unit) {
      case "deg":
        return Math.PI * A.number / 180;
      case Ns:
        return Math.PI / 200 * A.number;
      case "rad":
        return A.number;
      case _s:
        return 2 * Math.PI * A.number;
    }
  throw new Error("Unsupported angle type");
}, Js = function(e) {
  return e.type === 15 && (e.unit === "deg" || e.unit === Ns || e.unit === "rad" || e.unit === _s);
}, Xs = function(e) {
  switch (e.filter(P).map(function(A) {
    return A.value;
  }).join(" ")) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [cA, cA];
    case "to top":
    case "bottom":
      return KA(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [cA, re];
    case "to right":
    case "left":
      return KA(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [re, re];
    case "to bottom":
    case "top":
      return KA(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [re, cA];
    case "to left":
    case "right":
      return KA(270);
  }
  return 0;
}, KA = function(e) {
  return Math.PI * e / 180;
}, se = function(e, A) {
  if (A.type === 18) {
    var t = Si[A.name];
    if (t === void 0)
      throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
    return t(e, A.values);
  }
  if (A.type === 5) {
    if (A.value.length === 3) {
      var r = A.value.substring(0, 1), n = A.value.substring(1, 2), s = A.value.substring(2, 3);
      return ne(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(s + s, 16), 1);
    }
    if (A.value.length === 4) {
      r = A.value.substring(0, 1), n = A.value.substring(1, 2), s = A.value.substring(2, 3);
      var o = A.value.substring(3, 4);
      return ne(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(s + s, 16), parseInt(o + o, 16) / 255);
    }
    if (A.value.length === 6)
      return r = A.value.substring(0, 2), n = A.value.substring(2, 4), s = A.value.substring(4, 6), ne(parseInt(r, 16), parseInt(n, 16), parseInt(s, 16), 1);
    if (A.value.length === 8)
      return r = A.value.substring(0, 2), n = A.value.substring(2, 4), s = A.value.substring(4, 6), o = A.value.substring(6, 8), ne(parseInt(r, 16), parseInt(n, 16), parseInt(s, 16), parseInt(o, 16) / 255);
  }
  if (A.type === 20) {
    var i = qA[A.value.toUpperCase()];
    if (i !== void 0)
      return i;
  }
  return qA.TRANSPARENT;
}, oe = function(e) {
  return (255 & e) == 0;
}, sA = function(e) {
  var A = 255 & e, t = 255 & e >> 8, r = 255 & e >> 16, n = 255 & e >> 24;
  return A < 255 ? "rgba(" + n + "," + r + "," + t + "," + A / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
}, ne = function(e, A, t, r) {
  return (e << 24 | A << 16 | t << 8 | Math.round(255 * r) << 0) >>> 0;
}, bn = function(e, A) {
  if (e.type === 17)
    return e.number;
  if (e.type === 16) {
    var t = A === 3 ? 1 : 255;
    return A === 3 ? e.number / 100 * t : Math.round(e.number / 100 * t);
  }
  return 0;
}, In = function(e, A) {
  var t = A.filter(He);
  if (t.length === 3) {
    var r = t.map(bn), n = r[0], s = r[1], o = r[2];
    return ne(n, s, o, 1);
  }
  if (t.length === 4) {
    var i = t.map(bn), B = (n = i[0], s = i[1], o = i[2], i[3]);
    return ne(n, s, o, B);
  }
  return 0;
};
function ir(e, A, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (A - e) * t * 6 + e : t < 0.5 ? A : t < 2 / 3 ? 6 * (A - e) * (2 / 3 - t) + e : e;
}
var vn = function(e, A) {
  var t = A.filter(He), r = t[0], n = t[1], s = t[2], o = t[3], i = (r.type === 17 ? KA(r.number) : Zt(e, r)) / (2 * Math.PI), B = z(n) ? n.number / 100 : 0, c = z(s) ? s.number / 100 : 0, a = o !== void 0 && z(o) ? N(o, 1) : 1;
  if (B === 0)
    return ne(255 * c, 255 * c, 255 * c, 1);
  var l = c <= 0.5 ? c * (B + 1) : c + B - c * B, u = 2 * c - l, g = ir(u, l, i + 1 / 3), w = ir(u, l, i), d = ir(u, l, i - 1 / 3);
  return ne(255 * g, 255 * w, 255 * d, a);
}, Si = { hsl: vn, hsla: vn, rgb: In, rgba: In }, Ve = function(e, A) {
  return se(e, Vs.create(A).parseComponentValue());
}, qA = { ALICEBLUE: 4042850303, ANTIQUEWHITE: 4209760255, AQUA: 16777215, AQUAMARINE: 2147472639, AZURE: 4043309055, BEIGE: 4126530815, BISQUE: 4293182719, BLACK: 255, BLANCHEDALMOND: 4293643775, BLUE: 65535, BLUEVIOLET: 2318131967, BROWN: 2771004159, BURLYWOOD: 3736635391, CADETBLUE: 1604231423, CHARTREUSE: 2147418367, CHOCOLATE: 3530104575, CORAL: 4286533887, CORNFLOWERBLUE: 1687547391, CORNSILK: 4294499583, CRIMSON: 3692313855, CYAN: 16777215, DARKBLUE: 35839, DARKCYAN: 9145343, DARKGOLDENROD: 3095837695, DARKGRAY: 2846468607, DARKGREEN: 6553855, DARKGREY: 2846468607, DARKKHAKI: 3182914559, DARKMAGENTA: 2332068863, DARKOLIVEGREEN: 1433087999, DARKORANGE: 4287365375, DARKORCHID: 2570243327, DARKRED: 2332033279, DARKSALMON: 3918953215, DARKSEAGREEN: 2411499519, DARKSLATEBLUE: 1211993087, DARKSLATEGRAY: 793726975, DARKSLATEGREY: 793726975, DARKTURQUOISE: 13554175, DARKVIOLET: 2483082239, DEEPPINK: 4279538687, DEEPSKYBLUE: 12582911, DIMGRAY: 1768516095, DIMGREY: 1768516095, DODGERBLUE: 512819199, FIREBRICK: 2988581631, FLORALWHITE: 4294635775, FORESTGREEN: 579543807, FUCHSIA: 4278255615, GAINSBORO: 3705462015, GHOSTWHITE: 4177068031, GOLD: 4292280575, GOLDENROD: 3668254975, GRAY: 2155905279, GREEN: 8388863, GREENYELLOW: 2919182335, GREY: 2155905279, HONEYDEW: 4043305215, HOTPINK: 4285117695, INDIANRED: 3445382399, INDIGO: 1258324735, IVORY: 4294963455, KHAKI: 4041641215, LAVENDER: 3873897215, LAVENDERBLUSH: 4293981695, LAWNGREEN: 2096890111, LEMONCHIFFON: 4294626815, LIGHTBLUE: 2916673279, LIGHTCORAL: 4034953471, LIGHTCYAN: 3774873599, LIGHTGOLDENRODYELLOW: 4210742015, LIGHTGRAY: 3553874943, LIGHTGREEN: 2431553791, LIGHTGREY: 3553874943, LIGHTPINK: 4290167295, LIGHTSALMON: 4288707327, LIGHTSEAGREEN: 548580095, LIGHTSKYBLUE: 2278488831, LIGHTSLATEGRAY: 2005441023, LIGHTSLATEGREY: 2005441023, LIGHTSTEELBLUE: 2965692159, LIGHTYELLOW: 4294959359, LIME: 16711935, LIMEGREEN: 852308735, LINEN: 4210091775, MAGENTA: 4278255615, MAROON: 2147483903, MEDIUMAQUAMARINE: 1724754687, MEDIUMBLUE: 52735, MEDIUMORCHID: 3126187007, MEDIUMPURPLE: 2473647103, MEDIUMSEAGREEN: 1018393087, MEDIUMSLATEBLUE: 2070474495, MEDIUMSPRINGGREEN: 16423679, MEDIUMTURQUOISE: 1221709055, MEDIUMVIOLETRED: 3340076543, MIDNIGHTBLUE: 421097727, MINTCREAM: 4127193855, MISTYROSE: 4293190143, MOCCASIN: 4293178879, NAVAJOWHITE: 4292783615, NAVY: 33023, OLDLACE: 4260751103, OLIVE: 2155872511, OLIVEDRAB: 1804477439, ORANGE: 4289003775, ORANGERED: 4282712319, ORCHID: 3664828159, PALEGOLDENROD: 4008225535, PALEGREEN: 2566625535, PALETURQUOISE: 2951671551, PALEVIOLETRED: 3681588223, PAPAYAWHIP: 4293907967, PEACHPUFF: 4292524543, PERU: 3448061951, PINK: 4290825215, PLUM: 3718307327, POWDERBLUE: 2967529215, PURPLE: 2147516671, REBECCAPURPLE: 1714657791, RED: 4278190335, ROSYBROWN: 3163525119, ROYALBLUE: 1097458175, SADDLEBROWN: 2336560127, SALMON: 4202722047, SANDYBROWN: 4104413439, SEAGREEN: 780883967, SEASHELL: 4294307583, SIENNA: 2689740287, SILVER: 3233857791, SKYBLUE: 2278484991, SLATEBLUE: 1784335871, SLATEGRAY: 1887473919, SLATEGREY: 1887473919, SNOW: 4294638335, SPRINGGREEN: 16744447, STEELBLUE: 1182971135, TAN: 3535047935, TEAL: 8421631, THISTLE: 3636451583, TOMATO: 4284696575, TRANSPARENT: 0, TURQUOISE: 1088475391, VIOLET: 4001558271, WHEAT: 4125012991, WHITE: 4294967295, WHITESMOKE: 4126537215, YELLOW: 4294902015, YELLOWGREEN: 2597139199 }, xi = { name: "background-clip", initialValue: "border-box", prefix: !1, type: 1, parse: function(e, A) {
  return A.map(function(t) {
    if (P(t))
      switch (t.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, Ti = { name: "background-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, Dt = function(e, A) {
  var t = se(e, A[0]), r = A[1];
  return r && z(r) ? { color: t, stop: r } : { color: t, stop: null };
}, Ln = function(e, A) {
  var t = e[0], r = e[e.length - 1];
  t.stop === null && (t.stop = cA), r.stop === null && (r.stop = re);
  for (var n = [], s = 0, o = 0; o < e.length; o++) {
    var i = e[o].stop;
    if (i !== null) {
      var B = N(i, A);
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
      for (var l = o - c, u = (a - n[c - 1]) / (l + 1), g = 1; g <= l; g++)
        n[c + g - 1] = u * g;
      c = null;
    }
  }
  return e.map(function(w, d) {
    return { color: w.color, stop: Math.max(Math.min(1, n[d] / A), 0) };
  });
}, Oi = function(e, A, t) {
  var r = typeof e == "number" ? e : function(a, l, u) {
    var g = l / 2, w = u / 2, d = N(a[0], l) - g, Q = w - N(a[1], u);
    return (Math.atan2(Q, d) + 2 * Math.PI) % (2 * Math.PI);
  }(e, A, t), n = Math.abs(A * Math.sin(r)) + Math.abs(t * Math.cos(r)), s = A / 2, o = t / 2, i = n / 2, B = Math.sin(r - Math.PI / 2) * i, c = Math.cos(r - Math.PI / 2) * i;
  return [n, s - c, s + c, o - B, o + B];
}, DA = function(e, A) {
  return Math.sqrt(e * e + A * A);
}, Kn = function(e, A, t, r, n) {
  return [[0, 0], [0, A], [e, 0], [e, A]].reduce(function(s, o) {
    var i = o[0], B = o[1], c = DA(t - i, r - B);
    return (n ? c < s.optimumDistance : c > s.optimumDistance) ? { optimumCorner: o, optimumDistance: c } : s;
  }, { optimumDistance: n ? 1 / 0 : -1 / 0, optimumCorner: null }).optimumCorner;
}, Bt = function(e, A) {
  var t = KA(180), r = [];
  return NA(A).forEach(function(n, s) {
    if (s === 0) {
      var o = n[0];
      if (o.type === 20 && ["top", "left", "right", "bottom"].indexOf(o.value) !== -1)
        return void (t = Xs(n));
      if (Js(o))
        return void (t = (Zt(e, o) + KA(270)) % KA(360));
    }
    var i = Dt(e, n);
    r.push(i);
  }), { angle: t, stops: r, type: 1 };
}, Ws = "closest-side", Ys = "farthest-side", Zs = "closest-corner", js = "farthest-corner", qs = "circle", zs = "ellipse", $s = "cover", Ao = "contain", ct = function(e, A) {
  var t = 0, r = 3, n = [], s = [];
  return NA(A).forEach(function(o, i) {
    var B = !0;
    if (i === 0 ? B = o.reduce(function(a, l) {
      if (P(l))
        switch (l.value) {
          case "center":
            return s.push(tn), !1;
          case "top":
          case "left":
            return s.push(cA), !1;
          case "right":
          case "bottom":
            return s.push(re), !1;
        }
      else if (z(l) || ie(l))
        return s.push(l), !1;
      return a;
    }, B) : i === 1 && (B = o.reduce(function(a, l) {
      if (P(l))
        switch (l.value) {
          case qs:
            return t = 0, !1;
          case zs:
            return t = 1, !1;
          case Ao:
          case Ws:
            return r = 0, !1;
          case Ys:
            return r = 1, !1;
          case Zs:
            return r = 2, !1;
          case $s:
          case js:
            return r = 3, !1;
        }
      else if (ie(l) || z(l))
        return Array.isArray(r) || (r = []), r.push(l), !1;
      return a;
    }, B)), B) {
      var c = Dt(e, o);
      n.push(c);
    }
  }), { size: r, shape: t, stops: n, position: s, type: 2 };
}, rn = function(e, A) {
  if (A.type === 22) {
    var t = { url: A.value, type: 0 };
    return e.cache.addImage(A.value), t;
  }
  if (A.type === 18) {
    var r = eo[A.name];
    if (r === void 0)
      throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
    return r(e, A.values);
  }
  throw new Error("Unsupported image type " + A.type);
}, Ee, eo = { "linear-gradient": function(e, A) {
  var t = KA(180), r = [];
  return NA(A).forEach(function(n, s) {
    if (s === 0) {
      var o = n[0];
      if (o.type === 20 && o.value === "to")
        return void (t = Xs(n));
      if (Js(o))
        return void (t = Zt(e, o));
    }
    var i = Dt(e, n);
    r.push(i);
  }), { angle: t, stops: r, type: 1 };
}, "-moz-linear-gradient": Bt, "-ms-linear-gradient": Bt, "-o-linear-gradient": Bt, "-webkit-linear-gradient": Bt, "radial-gradient": function(e, A) {
  var t = 0, r = 3, n = [], s = [];
  return NA(A).forEach(function(o, i) {
    var B = !0;
    if (i === 0) {
      var c = !1;
      B = o.reduce(function(l, u) {
        if (c)
          if (P(u))
            switch (u.value) {
              case "center":
                return s.push(tn), l;
              case "top":
              case "left":
                return s.push(cA), l;
              case "right":
              case "bottom":
                return s.push(re), l;
            }
          else
            (z(u) || ie(u)) && s.push(u);
        else if (P(u))
          switch (u.value) {
            case qs:
              return t = 0, !1;
            case zs:
              return t = 1, !1;
            case "at":
              return c = !0, !1;
            case Ws:
              return r = 0, !1;
            case $s:
            case Ys:
              return r = 1, !1;
            case Ao:
            case Zs:
              return r = 2, !1;
            case js:
              return r = 3, !1;
          }
        else if (ie(u) || z(u))
          return Array.isArray(r) || (r = []), r.push(u), !1;
        return l;
      }, B);
    }
    if (B) {
      var a = Dt(e, o);
      n.push(a);
    }
  }), { size: r, shape: t, stops: n, position: s, type: 2 };
}, "-moz-radial-gradient": ct, "-ms-radial-gradient": ct, "-o-radial-gradient": ct, "-webkit-radial-gradient": ct, "-webkit-gradient": function(e, A) {
  var t = KA(180), r = [], n = 1;
  return NA(A).forEach(function(s, o) {
    var i = s[0];
    if (o === 0) {
      if (P(i) && i.value === "linear")
        return void (n = 1);
      if (P(i) && i.value === "radial")
        return void (n = 2);
    }
    if (i.type === 18) {
      if (i.name === "from") {
        var B = se(e, i.values[0]);
        r.push({ stop: cA, color: B });
      } else if (i.name === "to")
        B = se(e, i.values[0]), r.push({ stop: re, color: B });
      else if (i.name === "color-stop") {
        var c = i.values.filter(He);
        if (c.length === 2) {
          B = se(e, c[1]);
          var a = c[0];
          Ue(a) && r.push({ stop: { type: 16, number: 100 * a.number, flags: a.flags }, color: B });
        }
      }
    }
  }), n === 1 ? { angle: (t + KA(180)) % KA(360), stops: r, type: n } : { size: 3, shape: 0, stops: r, position: [], type: n };
} }, Mi = { name: "background-image", initialValue: "none", type: 1, prefix: !1, parse: function(e, A) {
  if (A.length === 0)
    return [];
  var t = A[0];
  return t.type === 20 && t.value === "none" ? [] : A.filter(function(r) {
    return He(r) && function(n) {
      return !(n.type === 20 && n.value === "none" || n.type === 18 && !eo[n.name]);
    }(r);
  }).map(function(r) {
    return rn(e, r);
  });
} }, Ri = { name: "background-origin", initialValue: "border-box", prefix: !1, type: 1, parse: function(e, A) {
  return A.map(function(t) {
    if (P(t))
      switch (t.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, Gi = { name: "background-position", initialValue: "0% 0%", type: 1, prefix: !1, parse: function(e, A) {
  return NA(A).map(function(t) {
    return t.filter(z);
  }).map(Ps);
} }, Vi = { name: "background-repeat", initialValue: "repeat", prefix: !1, type: 1, parse: function(e, A) {
  return NA(A).map(function(t) {
    return t.filter(P).map(function(r) {
      return r.value;
    }).join(" ");
  }).map(Pi);
} }, Pi = function(e) {
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
})(Ee || (Ee = {}));
var St, Ni = { name: "background-size", initialValue: "0", prefix: !1, type: 1, parse: function(e, A) {
  return NA(A).map(function(t) {
    return t.filter(_i);
  });
} }, _i = function(e) {
  return P(e) || z(e);
}, jt = function(e) {
  return { name: "border-" + e + "-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" };
}, Ji = jt("top"), Xi = jt("right"), Wi = jt("bottom"), Yi = jt("left"), qt = function(e) {
  return { name: "border-radius-" + e, initialValue: "0 0", prefix: !1, type: 1, parse: function(A, t) {
    return Ps(t.filter(z));
  } };
}, Zi = qt("top-left"), ji = qt("top-right"), qi = qt("bottom-right"), zi = qt("bottom-left"), zt = function(e) {
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
}, $i = zt("top"), Aa = zt("right"), ea = zt("bottom"), ta = zt("left"), $t = function(e) {
  return { name: "border-" + e + "-width", initialValue: "0", type: 0, prefix: !1, parse: function(A, t) {
    return We(t) ? t.number : 0;
  } };
}, ra = $t("top"), na = $t("right"), sa = $t("bottom"), oa = $t("left"), ia = { name: "color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, aa = { name: "direction", initialValue: "ltr", prefix: !1, type: 2, parse: function(e, A) {
  return A === "rtl" ? 1 : 0;
} }, Ba = { name: "display", initialValue: "inline-block", prefix: !1, type: 1, parse: function(e, A) {
  return A.filter(P).reduce(function(t, r) {
    return t | ca(r.value);
  }, 0);
} }, ca = function(e) {
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
}, la = { name: "float", initialValue: "none", prefix: !1, type: 2, parse: function(e, A) {
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
} }, ua = { name: "letter-spacing", initialValue: "0", prefix: !1, type: 0, parse: function(e, A) {
  return A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0;
} };
(function(e) {
  e.NORMAL = "normal", e.STRICT = "strict";
})(St || (St = {}));
var Pe, wa = { name: "line-break", initialValue: "normal", prefix: !1, type: 2, parse: function(e, A) {
  return A === "strict" ? St.STRICT : St.NORMAL;
} }, ga = { name: "line-height", initialValue: "normal", prefix: !1, type: 4 }, kn = function(e, A) {
  return P(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : z(e) ? N(e, A) : A;
}, da = { name: "list-style-image", initialValue: "none", type: 0, prefix: !1, parse: function(e, A) {
  return A.type === 20 && A.value === "none" ? null : rn(e, A);
} }, ha = { name: "list-style-position", initialValue: "outside", prefix: !1, type: 2, parse: function(e, A) {
  return A === "inside" ? 0 : 1;
} }, Vr = { name: "list-style-type", initialValue: "none", prefix: !1, type: 2, parse: function(e, A) {
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
} }, Ar = function(e) {
  return { name: "margin-" + e, initialValue: "0", prefix: !1, type: 4 };
}, Qa = Ar("top"), Ca = Ar("right"), Ua = Ar("bottom"), pa = Ar("left"), Fa = { name: "overflow", initialValue: "visible", prefix: !1, type: 1, parse: function(e, A) {
  return A.filter(P).map(function(t) {
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
} }, fa = { name: "overflow-wrap", initialValue: "normal", prefix: !1, type: 2, parse: function(e, A) {
  return A === "break-word" ? "break-word" : "normal";
} }, er = function(e) {
  return { name: "padding-" + e, initialValue: "0", prefix: !1, type: 3, format: "length-percentage" };
}, ma = er("top"), Ea = er("right"), Ha = er("bottom"), ya = er("left"), ba = { name: "text-align", initialValue: "left", prefix: !1, type: 2, parse: function(e, A) {
  switch (A) {
    case "right":
      return 2;
    case "center":
    case "justify":
      return 1;
    default:
      return 0;
  }
} }, Ia = { name: "position", initialValue: "static", prefix: !1, type: 2, parse: function(e, A) {
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
} }, va = { name: "text-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(e, A) {
  return A.length === 1 && Gr(A[0], "none") ? [] : NA(A).map(function(t) {
    for (var r = { color: qA.TRANSPARENT, offsetX: cA, offsetY: cA, blur: cA }, n = 0, s = 0; s < t.length; s++) {
      var o = t[s];
      ie(o) ? (n === 0 ? r.offsetX = o : n === 1 ? r.offsetY = o : r.blur = o, n++) : r.color = se(e, o);
    }
    return r;
  });
} }, La = { name: "text-transform", initialValue: "none", prefix: !1, type: 2, parse: function(e, A) {
  switch (A) {
    case "uppercase":
      return 2;
    case "lowercase":
      return 1;
    case "capitalize":
      return 3;
  }
  return 0;
} }, Ka = { name: "transform", initialValue: "none", prefix: !0, type: 0, parse: function(e, A) {
  if (A.type === 20 && A.value === "none")
    return null;
  if (A.type === 18) {
    var t = ka[A.name];
    if (t === void 0)
      throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
    return t(A.values);
  }
  return null;
} }, ka = { matrix: function(e) {
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
} }, Dn = { type: 16, number: 50, flags: 4 }, Da = [Dn, Dn], Sa = { name: "transform-origin", initialValue: "50% 50%", prefix: !0, type: 1, parse: function(e, A) {
  var t = A.filter(z);
  return t.length !== 2 ? Da : [t[0], t[1]];
} }, xa = { name: "visible", initialValue: "none", prefix: !1, type: 2, parse: function(e, A) {
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
})(Pe || (Pe = {}));
for (var Ta = { name: "word-break", initialValue: "normal", prefix: !1, type: 2, parse: function(e, A) {
  switch (A) {
    case "break-all":
      return Pe.BREAK_ALL;
    case "keep-all":
      return Pe.KEEP_ALL;
    default:
      return Pe.NORMAL;
  }
} }, Oa = { name: "z-index", initialValue: "auto", prefix: !1, type: 0, parse: function(e, A) {
  if (A.type === 20)
    return { auto: !0, order: 0 };
  if (Ue(A))
    return { auto: !1, order: A.number };
  throw new Error("Invalid z-index number parsed");
} }, Sn = function(e, A) {
  if (A.type === 15)
    switch (A.unit.toLowerCase()) {
      case "s":
        return 1e3 * A.number;
      case "ms":
        return A.number;
    }
  throw new Error("Unsupported time type");
}, Ma = { name: "opacity", initialValue: "1", type: 0, prefix: !1, parse: function(e, A) {
  return Ue(A) ? A.number : 1;
} }, Ra = { name: "text-decoration-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, Ga = { name: "text-decoration-line", initialValue: "none", prefix: !1, type: 1, parse: function(e, A) {
  return A.filter(P).map(function(t) {
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
} }, Va = { name: "font-family", initialValue: "", prefix: !1, type: 1, parse: function(e, A) {
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
} }, Pa = { name: "font-size", initialValue: "0", prefix: !1, type: 3, format: "length" }, Na = { name: "font-weight", initialValue: "normal", type: 0, prefix: !1, parse: function(e, A) {
  return Ue(A) ? A.number : P(A) && A.value === "bold" ? 700 : 400;
} }, _a = { name: "font-variant", initialValue: "none", type: 1, prefix: !1, parse: function(e, A) {
  return A.filter(P).map(function(t) {
    return t.value;
  });
} }, Ja = { name: "font-style", initialValue: "normal", prefix: !1, type: 2, parse: function(e, A) {
  switch (A) {
    case "oblique":
      return "oblique";
    case "italic":
      return "italic";
    default:
      return "normal";
  }
} }, rA = function(e, A) {
  return (e & A) != 0;
}, Xa = { name: "content", initialValue: "none", type: 1, prefix: !1, parse: function(e, A) {
  if (A.length === 0)
    return [];
  var t = A[0];
  return t.type === 20 && t.value === "none" ? [] : A;
} }, Wa = { name: "counter-increment", initialValue: "none", prefix: !0, type: 1, parse: function(e, A) {
  if (A.length === 0)
    return null;
  var t = A[0];
  if (t.type === 20 && t.value === "none")
    return null;
  for (var r = [], n = A.filter(yn), s = 0; s < n.length; s++) {
    var o = n[s], i = n[s + 1];
    if (o.type === 20) {
      var B = i && Ue(i) ? i.number : 1;
      r.push({ counter: o.value, increment: B });
    }
  }
  return r;
} }, Ya = { name: "counter-reset", initialValue: "none", prefix: !0, type: 1, parse: function(e, A) {
  if (A.length === 0)
    return [];
  for (var t = [], r = A.filter(yn), n = 0; n < r.length; n++) {
    var s = r[n], o = r[n + 1];
    if (P(s) && s.value !== "none") {
      var i = o && Ue(o) ? o.number : 0;
      t.push({ counter: s.value, reset: i });
    }
  }
  return t;
} }, Za = { name: "duration", initialValue: "0s", prefix: !1, type: 1, parse: function(e, A) {
  return A.filter(We).map(function(t) {
    return Sn(e, t);
  });
} }, ja = { name: "quotes", initialValue: "none", prefix: !0, type: 1, parse: function(e, A) {
  if (A.length === 0)
    return null;
  var t = A[0];
  if (t.type === 20 && t.value === "none")
    return null;
  var r = [], n = A.filter(ki);
  if (n.length % 2 != 0)
    return null;
  for (var s = 0; s < n.length; s += 2) {
    var o = n[s].value, i = n[s + 1].value;
    r.push({ open: o, close: i });
  }
  return r;
} }, xn = function(e, A, t) {
  if (!e)
    return "";
  var r = e[Math.min(A, e.length - 1)];
  return r ? t ? r.open : r.close : "";
}, qa = { name: "box-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(e, A) {
  return A.length === 1 && Gr(A[0], "none") ? [] : NA(A).map(function(t) {
    for (var r = { color: 255, offsetX: cA, offsetY: cA, blur: cA, spread: cA, inset: !1 }, n = 0, s = 0; s < t.length; s++) {
      var o = t[s];
      Gr(o, "inset") ? r.inset = !0 : ie(o) ? (n === 0 ? r.offsetX = o : n === 1 ? r.offsetY = o : n === 2 ? r.blur = o : r.spread = o, n++) : r.color = se(e, o);
    }
    return r;
  });
} }, za = { name: "paint-order", initialValue: "normal", prefix: !1, type: 1, parse: function(e, A) {
  var t = [];
  return A.filter(P).forEach(function(r) {
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
} }, $a = { name: "-webkit-text-stroke-color", initialValue: "currentcolor", prefix: !1, type: 3, format: "color" }, AB = { name: "-webkit-text-stroke-width", initialValue: "0", type: 0, prefix: !1, parse: function(e, A) {
  return We(A) ? A.number : 0;
} }, eB = function() {
  function e(A, t) {
    var r, n;
    this.animationDuration = m(A, Za, t.animationDuration), this.backgroundClip = m(A, xi, t.backgroundClip), this.backgroundColor = m(A, Ti, t.backgroundColor), this.backgroundImage = m(A, Mi, t.backgroundImage), this.backgroundOrigin = m(A, Ri, t.backgroundOrigin), this.backgroundPosition = m(A, Gi, t.backgroundPosition), this.backgroundRepeat = m(A, Vi, t.backgroundRepeat), this.backgroundSize = m(A, Ni, t.backgroundSize), this.borderTopColor = m(A, Ji, t.borderTopColor), this.borderRightColor = m(A, Xi, t.borderRightColor), this.borderBottomColor = m(A, Wi, t.borderBottomColor), this.borderLeftColor = m(A, Yi, t.borderLeftColor), this.borderTopLeftRadius = m(A, Zi, t.borderTopLeftRadius), this.borderTopRightRadius = m(A, ji, t.borderTopRightRadius), this.borderBottomRightRadius = m(A, qi, t.borderBottomRightRadius), this.borderBottomLeftRadius = m(A, zi, t.borderBottomLeftRadius), this.borderTopStyle = m(A, $i, t.borderTopStyle), this.borderRightStyle = m(A, Aa, t.borderRightStyle), this.borderBottomStyle = m(A, ea, t.borderBottomStyle), this.borderLeftStyle = m(A, ta, t.borderLeftStyle), this.borderTopWidth = m(A, ra, t.borderTopWidth), this.borderRightWidth = m(A, na, t.borderRightWidth), this.borderBottomWidth = m(A, sa, t.borderBottomWidth), this.borderLeftWidth = m(A, oa, t.borderLeftWidth), this.boxShadow = m(A, qa, t.boxShadow), this.color = m(A, ia, t.color), this.direction = m(A, aa, t.direction), this.display = m(A, Ba, t.display), this.float = m(A, la, t.cssFloat), this.fontFamily = m(A, Va, t.fontFamily), this.fontSize = m(A, Pa, t.fontSize), this.fontStyle = m(A, Ja, t.fontStyle), this.fontVariant = m(A, _a, t.fontVariant), this.fontWeight = m(A, Na, t.fontWeight), this.letterSpacing = m(A, ua, t.letterSpacing), this.lineBreak = m(A, wa, t.lineBreak), this.lineHeight = m(A, ga, t.lineHeight), this.listStyleImage = m(A, da, t.listStyleImage), this.listStylePosition = m(A, ha, t.listStylePosition), this.listStyleType = m(A, Vr, t.listStyleType), this.marginTop = m(A, Qa, t.marginTop), this.marginRight = m(A, Ca, t.marginRight), this.marginBottom = m(A, Ua, t.marginBottom), this.marginLeft = m(A, pa, t.marginLeft), this.opacity = m(A, Ma, t.opacity);
    var s = m(A, Fa, t.overflow);
    this.overflowX = s[0], this.overflowY = s[s.length > 1 ? 1 : 0], this.overflowWrap = m(A, fa, t.overflowWrap), this.paddingTop = m(A, ma, t.paddingTop), this.paddingRight = m(A, Ea, t.paddingRight), this.paddingBottom = m(A, Ha, t.paddingBottom), this.paddingLeft = m(A, ya, t.paddingLeft), this.paintOrder = m(A, za, t.paintOrder), this.position = m(A, Ia, t.position), this.textAlign = m(A, ba, t.textAlign), this.textDecorationColor = m(A, Ra, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = m(A, Ga, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = m(A, va, t.textShadow), this.textTransform = m(A, La, t.textTransform), this.transform = m(A, Ka, t.transform), this.transformOrigin = m(A, Sa, t.transformOrigin), this.visibility = m(A, xa, t.visibility), this.webkitTextStrokeColor = m(A, $a, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = m(A, AB, t.webkitTextStrokeWidth), this.wordBreak = m(A, Ta, t.wordBreak), this.zIndex = m(A, Oa, t.zIndex);
  }
  return e.prototype.isVisible = function() {
    return this.display > 0 && this.opacity > 0 && this.visibility === 0;
  }, e.prototype.isTransparent = function() {
    return oe(this.backgroundColor);
  }, e.prototype.isTransformed = function() {
    return this.transform !== null;
  }, e.prototype.isPositioned = function() {
    return this.position !== 0;
  }, e.prototype.isPositionedWithZIndex = function() {
    return this.isPositioned() && !this.zIndex.auto;
  }, e.prototype.isFloating = function() {
    return this.float !== 0;
  }, e.prototype.isInlineLevel = function() {
    return rA(this.display, 4) || rA(this.display, 33554432) || rA(this.display, 268435456) || rA(this.display, 536870912) || rA(this.display, 67108864) || rA(this.display, 134217728);
  }, e;
}(), tB = function(e, A) {
  this.content = m(e, Xa, A.content), this.quotes = m(e, ja, A.quotes);
}, Tn = function(e, A) {
  this.counterIncrement = m(e, Wa, A.counterIncrement), this.counterReset = m(e, Ya, A.counterReset);
}, m = function(e, A, t) {
  var r = new Gs(), n = t != null ? t.toString() : A.initialValue;
  r.write(n);
  var s = new Vs(r.read());
  switch (A.type) {
    case 2:
      var o = s.parseComponentValue();
      return A.parse(e, P(o) ? o.value : A.initialValue);
    case 0:
      return A.parse(e, s.parseComponentValue());
    case 1:
      return A.parse(e, s.parseComponentValues());
    case 4:
      return s.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return Zt(e, s.parseComponentValue());
        case "color":
          return se(e, s.parseComponentValue());
        case "image":
          return rn(e, s.parseComponentValue());
        case "length":
          var i = s.parseComponentValue();
          return ie(i) ? i : cA;
        case "length-percentage":
          var B = s.parseComponentValue();
          return z(B) ? B : cA;
        case "time":
          return Sn(e, s.parseComponentValue());
      }
  }
}, Pr = function(e, A) {
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
}, JA = function(e, A) {
  this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, Pr(A, 3), this.styles = new eB(e, window.getComputedStyle(A, null)), Jr(A) && (this.styles.animationDuration.some(function(t) {
    return t > 0;
  }) && (A.style.animationDuration = "0s"), this.styles.transform !== null && (A.style.transform = "none")), this.bounds = Yt(this.context, A), Pr(A, 4) && (this.flags |= 16);
}, rB = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Te = typeof Uint8Array > "u" ? [] : new Uint8Array(256), lt = 0; lt < 64; lt++)
  Te[rB.charCodeAt(lt)] = lt;
for (var On = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, nB = function() {
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
}(), sB = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", oB = typeof Uint8Array > "u" ? [] : new Uint8Array(256), ut = 0; ut < 64; ut++)
  oB[sB.charCodeAt(ut)] = ut;
var Ne, Mn = 8, ar = 9, Rn = 11, Gn = 12, iB = function() {
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
}, aB = function(e, A) {
  var t, r, n, s = function(a) {
    var l, u, g, w, d, Q = 0.75 * a.length, C = a.length, p = 0;
    a[a.length - 1] === "=" && (Q--, a[a.length - 2] === "=" && Q--);
    var y = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && Uint8Array.prototype.slice !== void 0 ? new ArrayBuffer(Q) : new Array(Q), F = Array.isArray(y) ? y : new Uint8Array(y);
    for (l = 0; l < C; l += 4)
      u = Te[a.charCodeAt(l)], g = Te[a.charCodeAt(l + 1)], w = Te[a.charCodeAt(l + 2)], d = Te[a.charCodeAt(l + 3)], F[p++] = u << 2 | g >> 4, F[p++] = (15 & g) << 4 | w >> 2, F[p++] = (3 & w) << 6 | 63 & d;
    return y;
  }(e), o = Array.isArray(s) ? function(a) {
    for (var l = a.length, u = [], g = 0; g < l; g += 4)
      u.push(a[g + 3] << 24 | a[g + 2] << 16 | a[g + 1] << 8 | a[g]);
    return u;
  }(s) : new Uint32Array(s), i = Array.isArray(s) ? function(a) {
    for (var l = a.length, u = [], g = 0; g < l; g += 2)
      u.push(a[g + 1] << 8 | a[g]);
    return u;
  }(s) : new Uint16Array(s), B = On(i, 12, o[4] / 2), c = o[5] === 2 ? On(i, (24 + o[4]) / 2) : (t = o, r = Math.ceil((24 + o[4]) / 4), t.slice ? t.slice(r, n) : new Uint32Array(Array.prototype.slice.call(t, r, n)));
  return new nB(o[0], o[1], o[2], o[3], B, c);
}("AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA="), IA = "×", BB = function(e) {
  return aB.get(e);
}, cB = function(e, A, t) {
  var r = t - 2, n = A[r], s = A[t - 1], o = A[t];
  if (s === 2 && o === 3)
    return IA;
  if (s === 2 || s === 3 || s === 4 || o === 2 || o === 3 || o === 4)
    return "÷";
  if (s === Mn && [Mn, ar, Rn, Gn].indexOf(o) !== -1 || !(s !== Rn && s !== ar || o !== ar && o !== 10) || (s === Gn || s === 10) && o === 10 || o === 13 || o === 5 || o === 7 || s === 1)
    return IA;
  if (s === 13 && o === 14) {
    for (; n === 5; )
      n = A[--r];
    if (n === 14)
      return IA;
  }
  if (s === 15 && o === 15) {
    for (var i = 0; n === 15; )
      i++, n = A[--r];
    if (i % 2 == 0)
      return IA;
  }
  return "÷";
}, lB = function(e) {
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
  }(e), t = A.length, r = 0, n = 0, s = A.map(BB);
  return { next: function() {
    if (r >= t)
      return { done: !0, value: null };
    for (var o = IA; r < t && (o = cB(0, s, ++r)) === IA; )
      ;
    if (o !== IA || r === t) {
      var i = iB.apply(null, A.slice(n, r));
      return n = r, { value: i, done: !1 };
    }
    return { done: !0, value: null };
  } };
}, Vn = function(e) {
  return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255;
}, Nr = function(e, A, t, r, n) {
  var s = "http://www.w3.org/2000/svg", o = document.createElementNS(s, "svg"), i = document.createElementNS(s, "foreignObject");
  return o.setAttributeNS(null, "width", e.toString()), o.setAttributeNS(null, "height", A.toString()), i.setAttributeNS(null, "width", "100%"), i.setAttributeNS(null, "height", "100%"), i.setAttributeNS(null, "x", t.toString()), i.setAttributeNS(null, "y", r.toString()), i.setAttributeNS(null, "externalResourcesRequired", "true"), o.appendChild(i), i.appendChild(n), o;
}, Pn = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      return A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, BA = { get SUPPORT_RANGE_BOUNDS() {
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
  return Object.defineProperty(BA, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
}, get SUPPORT_WORD_BREAKING() {
  var e = BA.SUPPORT_RANGE_BOUNDS && function(A) {
    var t = A.createElement("boundtest");
    t.style.width = "50px", t.style.display = "block", t.style.fontSize = "12px", t.style.letterSpacing = "0px", t.style.wordSpacing = "0px", A.body.appendChild(t);
    var r = A.createRange();
    t.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var n = t.firstChild, s = Kt(n.data).map(function(c) {
      return j(c);
    }), o = 0, i = {}, B = s.every(function(c, a) {
      r.setStart(n, o), r.setEnd(n, o + c.length);
      var l = r.getBoundingClientRect();
      o += c.length;
      var u = l.x > i.x || l.y > i.y;
      return i = l, a === 0 || u;
    });
    return A.body.removeChild(t), B;
  }(document);
  return Object.defineProperty(BA, "SUPPORT_WORD_BREAKING", { value: e }), e;
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
  return Object.defineProperty(BA, "SUPPORT_SVG_DRAWING", { value: e }), e;
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
    var i = Nr(r, r, 0, 0, s);
    return n.fillStyle = "red", n.fillRect(0, 0, r, r), Pn(i).then(function(B) {
      n.drawImage(B, 0, 0);
      var c = n.getImageData(0, 0, r, r).data;
      n.fillStyle = "red", n.fillRect(0, 0, r, r);
      var a = A.createElement("div");
      return a.style.backgroundImage = "url(" + o + ")", a.style.height = r + "px", Vn(c) ? Pn(Nr(r, r, 0, 0, a)) : Promise.reject(!1);
    }).then(function(B) {
      return n.drawImage(B, 0, 0), Vn(n.getImageData(0, 0, r, r).data);
    }).catch(function() {
      return !1;
    });
  }(document) : Promise.resolve(!1);
  return Object.defineProperty(BA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
}, get SUPPORT_CORS_IMAGES() {
  var e = new Image().crossOrigin !== void 0;
  return Object.defineProperty(BA, "SUPPORT_CORS_IMAGES", { value: e }), e;
}, get SUPPORT_RESPONSE_TYPE() {
  var e = typeof new XMLHttpRequest().responseType == "string";
  return Object.defineProperty(BA, "SUPPORT_RESPONSE_TYPE", { value: e }), e;
}, get SUPPORT_CORS_XHR() {
  var e = "withCredentials" in new XMLHttpRequest();
  return Object.defineProperty(BA, "SUPPORT_CORS_XHR", { value: e }), e;
}, get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
  var e = !(typeof Intl > "u" || !Intl.Segmenter);
  return Object.defineProperty(BA, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: e }), e;
} }, _e = function(e, A) {
  this.text = e, this.bounds = A;
}, uB = function(e, A) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(A.cloneNode(!0));
    var n = A.parentNode;
    if (n) {
      n.replaceChild(r, A);
      var s = Yt(e, r);
      return r.firstChild && n.replaceChild(r.firstChild, r), s;
    }
  }
  return $A.EMPTY;
}, Nn = function(e, A, t) {
  var r = e.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  var n = r.createRange();
  return n.setStart(e, A), n.setEnd(e, A + t), n;
}, nn = function(e) {
  if (BA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(A.segment(e)).map(function(t) {
      return t.segment;
    });
  }
  return function(t) {
    for (var r, n = lB(t), s = []; !(r = n.next()).done; )
      r.value && s.push(r.value.slice());
    return s;
  }(e);
}, wB = function(e, A) {
  return A.letterSpacing !== 0 ? nn(e) : function(t, r) {
    if (BA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var n = new Intl.Segmenter(void 0, { granularity: "word" });
      return Array.from(n.segment(t)).map(function(s) {
        return s.segment;
      });
    }
    return dB(t, r);
  }(e, A);
}, gB = [32, 160, 4961, 65792, 65793, 4153, 4241], dB = function(e, A) {
  for (var t, r = function(o, i) {
    var B = Kt(o), c = Bi(B, i), a = c[0], l = c[1], u = c[2], g = B.length, w = 0, d = 0;
    return { next: function() {
      if (d >= g)
        return { done: !0, value: null };
      for (var Q = K; d < g && (Q = ai(B, l, a, ++d, u)) === K; )
        ;
      if (Q !== K || d === g) {
        var C = new ci(B, Q, w, d);
        return w = d, { value: C, done: !1 };
      }
      return { done: !0, value: null };
    } };
  }(e, { lineBreak: A.lineBreak, wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak }), n = [], s = function() {
    if (t.value) {
      var o = t.value.slice(), i = Kt(o), B = "";
      i.forEach(function(c) {
        gB.indexOf(c) === -1 ? B += j(c) : (B.length && n.push(B), n.push(j(c)), B = "");
      }), B.length && n.push(B);
    }
  }; !(t = r.next()).done; )
    s();
  return n;
}, hB = function(e, A, t) {
  this.text = QB(A.data, t.textTransform), this.textBounds = function(r, n, s, o) {
    var i = wB(n, s), B = [], c = 0;
    return i.forEach(function(a) {
      if (s.textDecorationLine.length || a.trim().length > 0)
        if (BA.SUPPORT_RANGE_BOUNDS) {
          var l = Nn(o, c, a.length).getClientRects();
          if (l.length > 1) {
            var u = nn(a), g = 0;
            u.forEach(function(d) {
              B.push(new _e(d, $A.fromDOMRectList(r, Nn(o, g + c, d.length).getClientRects()))), g += d.length;
            });
          } else
            B.push(new _e(a, $A.fromDOMRectList(r, l)));
        } else {
          var w = o.splitText(a.length);
          B.push(new _e(a, uB(r, o))), o = w;
        }
      else
        BA.SUPPORT_RANGE_BOUNDS || (o = o.splitText(a.length));
      c += a.length;
    }), B;
  }(e, this.text, t, A);
}, QB = function(e, A) {
  switch (A) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(CB, UB);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, CB = /(^|\s|:|-|\(|\))([a-z])/g, UB = function(e, A, t) {
  return e.length > 0 ? A + t.toUpperCase() : e;
}, to = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this;
    return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
  }
  return SA(A, e), A;
}(JA), ro = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this;
    return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
  }
  return SA(A, e), A;
}(JA), no = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this, s = new XMLSerializer(), o = Yt(t, r);
    return r.setAttribute("width", o.width + "px"), r.setAttribute("height", o.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
  }
  return SA(A, e), A;
}(JA), so = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this;
    return n.value = r.value, n;
  }
  return SA(A, e), A;
}(JA), _r = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this;
    return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === !0, n;
  }
  return SA(A, e), A;
}(JA), pB = [{ type: 15, flags: 0, unit: "px", number: 3 }], FB = [{ type: 16, flags: 0, number: 50 }], xt = "checkbox", Tt = "radio", fB = "password", _n = 707406591, sn = function(e) {
  function A(t, r) {
    var n, s, o, i = e.call(this, t, r) || this;
    switch (i.type = r.type.toLowerCase(), i.checked = r.checked, i.value = (s = (n = r).type === fB ? new Array(n.value.length + 1).join("•") : n.value).length === 0 ? n.placeholder || "" : s, i.type !== xt && i.type !== Tt || (i.styles.backgroundColor = 3739148031, i.styles.borderTopColor = i.styles.borderRightColor = i.styles.borderBottomColor = i.styles.borderLeftColor = 2779096575, i.styles.borderTopWidth = i.styles.borderRightWidth = i.styles.borderBottomWidth = i.styles.borderLeftWidth = 1, i.styles.borderTopStyle = i.styles.borderRightStyle = i.styles.borderBottomStyle = i.styles.borderLeftStyle = 1, i.styles.backgroundClip = [0], i.styles.backgroundOrigin = [0], i.bounds = (o = i.bounds).width > o.height ? new $A(o.left + (o.width - o.height) / 2, o.top, o.height, o.height) : o.width < o.height ? new $A(o.left, o.top + (o.height - o.width) / 2, o.width, o.width) : o), i.type) {
      case xt:
        i.styles.borderTopRightRadius = i.styles.borderTopLeftRadius = i.styles.borderBottomRightRadius = i.styles.borderBottomLeftRadius = pB;
        break;
      case Tt:
        i.styles.borderTopRightRadius = i.styles.borderTopLeftRadius = i.styles.borderBottomRightRadius = i.styles.borderBottomLeftRadius = FB;
    }
    return i;
  }
  return SA(A, e), A;
}(JA), oo = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this, s = r.options[r.selectedIndex || 0];
    return n.value = s && s.text || "", n;
  }
  return SA(A, e), A;
}(JA), io = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this;
    return n.value = r.value, n;
  }
  return SA(A, e), A;
}(JA), ao = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this;
    n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
    try {
      if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
        n.tree = co(t, r.contentWindow.document.documentElement);
        var s = r.contentWindow.document.documentElement ? Ve(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : qA.TRANSPARENT, o = r.contentWindow.document.body ? Ve(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : qA.TRANSPARENT;
        n.backgroundColor = oe(s) ? oe(o) ? n.styles.backgroundColor : o : s;
      }
    } catch {
    }
    return n;
  }
  return SA(A, e), A;
}(JA), mB = ["OL", "UL", "MENU"], ft = function(e, A, t, r) {
  for (var n = A.firstChild, s = void 0; n; n = s)
    if (s = n.nextSibling, lo(n) && n.data.trim().length > 0)
      t.textNodes.push(new hB(e, n, t.styles));
    else if (fe(n))
      if (ho(n) && n.assignedNodes)
        n.assignedNodes().forEach(function(i) {
          return ft(e, i, t, r);
        });
      else {
        var o = Bo(e, n);
        o.styles.isVisible() && (EB(n, o, r) ? o.flags |= 4 : HB(o.styles) && (o.flags |= 2), mB.indexOf(n.tagName) !== -1 && (o.flags |= 8), t.elements.push(o), n.slot, n.shadowRoot ? ft(e, n.shadowRoot, o, r) : Ot(n) || uo(n) || Mt(n) || ft(e, n, o, r));
      }
}, Bo = function(e, A) {
  return Xr(A) ? new to(e, A) : wo(A) ? new ro(e, A) : uo(A) ? new no(e, A) : yB(A) ? new so(e, A) : bB(A) ? new _r(e, A) : IB(A) ? new sn(e, A) : Mt(A) ? new oo(e, A) : Ot(A) ? new io(e, A) : go(A) ? new ao(e, A) : new JA(e, A);
}, co = function(e, A) {
  var t = Bo(e, A);
  return t.flags |= 4, ft(e, A, t, t), t;
}, EB = function(e, A, t) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || on(e) && t.styles.isTransparent();
}, HB = function(e) {
  return e.isPositioned() || e.isFloating();
}, lo = function(e) {
  return e.nodeType === Node.TEXT_NODE;
}, fe = function(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}, Jr = function(e) {
  return fe(e) && e.style !== void 0 && !mt(e);
}, mt = function(e) {
  return typeof e.className == "object";
}, yB = function(e) {
  return e.tagName === "LI";
}, bB = function(e) {
  return e.tagName === "OL";
}, IB = function(e) {
  return e.tagName === "INPUT";
}, uo = function(e) {
  return e.tagName === "svg";
}, on = function(e) {
  return e.tagName === "BODY";
}, wo = function(e) {
  return e.tagName === "CANVAS";
}, Jn = function(e) {
  return e.tagName === "VIDEO";
}, Xr = function(e) {
  return e.tagName === "IMG";
}, go = function(e) {
  return e.tagName === "IFRAME";
}, Xn = function(e) {
  return e.tagName === "STYLE";
}, Ot = function(e) {
  return e.tagName === "TEXTAREA";
}, Mt = function(e) {
  return e.tagName === "SELECT";
}, ho = function(e) {
  return e.tagName === "SLOT";
}, Wn = function(e) {
  return e.tagName.indexOf("-") > 0;
}, vB = function() {
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
}(), Yn = { integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"] }, Zn = { integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"] }, LB = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"] }, KB = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"] }, de = function(e, A, t, r, n, s) {
  return e < A || e > t ? Ye(e, n, s.length > 0) : r.integers.reduce(function(o, i, B) {
    for (; e >= i; )
      e -= i, o += r.values[B];
    return o;
  }, "") + s;
}, Qo = function(e, A, t, r) {
  var n = "";
  do
    t || e--, n = r(e) + n, e /= A;
  while (e * A >= A);
  return n;
}, Z = function(e, A, t, r, n) {
  var s = t - A + 1;
  return (e < 0 ? "-" : "") + (Qo(Math.abs(e), s, r, function(o) {
    return j(Math.floor(o % s) + A);
  }) + n);
}, Be = function(e, A, t) {
  t === void 0 && (t = ". ");
  var r = A.length;
  return Qo(Math.abs(e), r, !1, function(n) {
    return A[Math.floor(n % r)];
  }) + t;
}, jA = function(e, A, t, r, n, s) {
  if (e < -9999 || e > 9999)
    return Ye(e, 4, n.length > 0);
  var o = Math.abs(e), i = n;
  if (o === 0)
    return A[0] + i;
  for (var B = 0; o > 0 && B <= 4; B++) {
    var c = o % 10;
    c === 0 && rA(s, 1) && i !== "" ? i = A[c] + i : c > 1 || c === 1 && B === 0 || c === 1 && B === 1 && rA(s, 2) || c === 1 && B === 1 && rA(s, 4) && e > 100 || c === 1 && B > 1 && rA(s, 8) ? i = A[c] + (B > 0 ? t[B - 1] : "") + i : c === 1 && B > 0 && (i = t[B - 1] + i), o = Math.floor(o / 10);
  }
  return (e < 0 ? r : "") + i;
}, jn = "十百千萬", qn = "拾佰仟萬", zn = "マイナス", Br = "마이너스", Ye = function(e, A, t) {
  var r = t ? ". " : "", n = t ? "、" : "", s = t ? ", " : "", o = t ? " " : "";
  switch (A) {
    case 0:
      return "•" + o;
    case 1:
      return "◦" + o;
    case 2:
      return "◾" + o;
    case 5:
      var i = Z(e, 48, 57, !0, r);
      return i.length < 4 ? "0" + i : i;
    case 4:
      return Be(e, "〇一二三四五六七八九", n);
    case 6:
      return de(e, 1, 3999, Yn, 3, r).toLowerCase();
    case 7:
      return de(e, 1, 3999, Yn, 3, r);
    case 8:
      return Z(e, 945, 969, !1, r);
    case 9:
      return Z(e, 97, 122, !1, r);
    case 10:
      return Z(e, 65, 90, !1, r);
    case 11:
      return Z(e, 1632, 1641, !0, r);
    case 12:
    case 49:
      return de(e, 1, 9999, Zn, 3, r);
    case 35:
      return de(e, 1, 9999, Zn, 3, r).toLowerCase();
    case 13:
      return Z(e, 2534, 2543, !0, r);
    case 14:
    case 30:
      return Z(e, 6112, 6121, !0, r);
    case 15:
      return Be(e, "子丑寅卯辰巳午未申酉戌亥", n);
    case 16:
      return Be(e, "甲乙丙丁戊己庚辛壬癸", n);
    case 17:
    case 48:
      return jA(e, "零一二三四五六七八九", jn, "負", n, 14);
    case 47:
      return jA(e, "零壹貳參肆伍陸柒捌玖", qn, "負", n, 15);
    case 42:
      return jA(e, "零一二三四五六七八九", jn, "负", n, 14);
    case 41:
      return jA(e, "零壹贰叁肆伍陆柒捌玖", qn, "负", n, 15);
    case 26:
      return jA(e, "〇一二三四五六七八九", "十百千万", zn, n, 0);
    case 25:
      return jA(e, "零壱弐参四伍六七八九", "拾百千万", zn, n, 7);
    case 31:
      return jA(e, "영일이삼사오육칠팔구", "십백천만", Br, s, 7);
    case 33:
      return jA(e, "零一二三四五六七八九", "十百千萬", Br, s, 0);
    case 32:
      return jA(e, "零壹貳參四五六七八九", "拾百千", Br, s, 7);
    case 18:
      return Z(e, 2406, 2415, !0, r);
    case 20:
      return de(e, 1, 19999, KB, 3, r);
    case 21:
      return Z(e, 2790, 2799, !0, r);
    case 22:
      return Z(e, 2662, 2671, !0, r);
    case 22:
      return de(e, 1, 10999, LB, 3, r);
    case 23:
      return Be(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return Be(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return Z(e, 3302, 3311, !0, r);
    case 28:
      return Be(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
    case 29:
      return Be(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
    case 34:
      return Z(e, 3792, 3801, !0, r);
    case 37:
      return Z(e, 6160, 6169, !0, r);
    case 38:
      return Z(e, 4160, 4169, !0, r);
    case 39:
      return Z(e, 2918, 2927, !0, r);
    case 40:
      return Z(e, 1776, 1785, !0, r);
    case 43:
      return Z(e, 3046, 3055, !0, r);
    case 44:
      return Z(e, 3174, 3183, !0, r);
    case 45:
      return Z(e, 3664, 3673, !0, r);
    case 46:
      return Z(e, 3872, 3881, !0, r);
    default:
      return Z(e, 48, 57, !0, r);
  }
}, Co = "data-html2canvas-ignore", $n = function() {
  function e(A, t, r) {
    if (this.context = A, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new vB(), this.quoteDepth = 0, !t.ownerDocument)
      throw new Error("Cloned element does not have an owner document");
    this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
  }
  return e.prototype.toIFrame = function(A, t) {
    var r = this, n = kB(A, t);
    if (!n.contentWindow)
      return Promise.reject("Unable to find iframe window");
    var s = A.defaultView.pageXOffset, o = A.defaultView.pageYOffset, i = n.contentWindow, B = i.document, c = xB(n).then(function() {
      return hA(r, void 0, void 0, function() {
        var a, l;
        return gA(this, function(u) {
          switch (u.label) {
            case 0:
              return this.scrolledElements.forEach(RB), i && (i.scrollTo(t.left, t.top), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || i.scrollY === t.top && i.scrollX === t.left || (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(i.scrollX - t.left, i.scrollY - t.top, 0, 0))), a = this.options.onclone, (l = this.clonedReferenceElement) === void 0 ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : B.fonts && B.fonts.ready ? [4, B.fonts.ready] : [3, 2];
            case 1:
              u.sent(), u.label = 2;
            case 2:
              return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, SB(B)] : [3, 4];
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
    return B.open(), B.write(OB(document.doctype) + "<html></html>"), MB(this.referenceElement.ownerDocument, s, o), B.replaceChild(B.adoptNode(this.documentElement), B.documentElement), B.close(), c;
  }, e.prototype.createElementClone = function(A) {
    if (Pr(A, 2), wo(A))
      return this.createCanvasClone(A);
    if (Jn(A))
      return this.createVideoClone(A);
    if (Xn(A))
      return this.createStyleClone(A);
    var t = A.cloneNode(!1);
    return Xr(t) && (Xr(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Wn(t) ? this.createCustomElementClone(t) : t;
  }, e.prototype.createCustomElementClone = function(A) {
    var t = document.createElement("html2canvascustomelement");
    return cr(A.style, t), t;
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
    fe(t) && (t.tagName === "SCRIPT" || t.hasAttribute(Co) || typeof this.options.ignoreElements == "function" && this.options.ignoreElements(t)) || this.options.copyStyles && fe(t) && Xn(t) || A.appendChild(this.cloneNode(t, r));
  }, e.prototype.cloneChildNodes = function(A, t, r) {
    for (var n = this, s = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; s; s = s.nextSibling)
      if (fe(s) && ho(s) && typeof s.assignedNodes == "function") {
        var o = s.assignedNodes();
        o.length && o.forEach(function(i) {
          return n.appendChildNode(t, i, r);
        });
      } else
        this.appendChildNode(t, s, r);
  }, e.prototype.cloneNode = function(A, t) {
    if (lo(A))
      return document.createTextNode(A.data);
    if (!A.ownerDocument)
      return A.cloneNode(!1);
    var r = A.ownerDocument.defaultView;
    if (r && fe(A) && (Jr(A) || mt(A))) {
      var n = this.createElementClone(A);
      n.style.transitionProperty = "none";
      var s = r.getComputedStyle(A), o = r.getComputedStyle(A, ":before"), i = r.getComputedStyle(A, ":after");
      this.referenceElement === A && Jr(n) && (this.clonedReferenceElement = n), on(n) && GB(n);
      var B = this.counters.parse(new Tn(this.context, s)), c = this.resolvePseudoContent(A, n, o, Ne.BEFORE);
      Wn(A) && (t = !0), Jn(A) || this.cloneChildNodes(A, n, t), c && n.insertBefore(c, n.firstChild);
      var a = this.resolvePseudoContent(A, n, i, Ne.AFTER);
      return a && n.appendChild(a), this.counters.pop(B), (s && (this.options.copyStyles || mt(A)) && !go(A) || t) && cr(s, n), A.scrollTop === 0 && A.scrollLeft === 0 || this.scrolledElements.push([n, A.scrollLeft, A.scrollTop]), (Ot(A) || Mt(A)) && (Ot(n) || Mt(n)) && (n.value = A.value), n;
    }
    return A.cloneNode(!1);
  }, e.prototype.resolvePseudoContent = function(A, t, r, n) {
    var s = this;
    if (r) {
      var o = r.content, i = t.ownerDocument;
      if (i && o && o !== "none" && o !== "-moz-alt-content" && r.display !== "none") {
        this.counters.parse(new Tn(this.context, r));
        var B = new tB(this.context, r), c = i.createElement("html2canvaspseudoelement");
        cr(r, c), B.content.forEach(function(l) {
          if (l.type === 0)
            c.appendChild(i.createTextNode(l.value));
          else if (l.type === 22) {
            var u = i.createElement("img");
            u.src = l.value, u.style.opacity = "1", c.appendChild(u);
          } else if (l.type === 18) {
            if (l.name === "attr") {
              var g = l.values.filter(P);
              g.length && c.appendChild(i.createTextNode(A.getAttribute(g[0].value) || ""));
            } else if (l.name === "counter") {
              var w = l.values.filter(He), d = w[0], Q = w[1];
              if (d && P(d)) {
                var C = s.counters.getCounterValue(d.value), p = Q && P(Q) ? Vr.parse(s.context, Q.value) : 3;
                c.appendChild(i.createTextNode(Ye(C, p, !1)));
              }
            } else if (l.name === "counters") {
              var y = l.values.filter(He), F = (d = y[0], y[1]);
              if (Q = y[2], d && P(d)) {
                var U = s.counters.getCounterValues(d.value), b = Q && P(Q) ? Vr.parse(s.context, Q.value) : 3, I = F && F.type === 0 ? F.value : "", H = U.map(function(k) {
                  return Ye(k, b, !1);
                }).join(I);
                c.appendChild(i.createTextNode(H));
              }
            }
          } else if (l.type === 20)
            switch (l.value) {
              case "open-quote":
                c.appendChild(i.createTextNode(xn(B.quotes, s.quoteDepth++, !0)));
                break;
              case "close-quote":
                c.appendChild(i.createTextNode(xn(B.quotes, --s.quoteDepth, !1)));
                break;
              default:
                c.appendChild(i.createTextNode(l.value));
            }
        }), c.className = Wr + " " + Yr;
        var a = n === Ne.BEFORE ? " " + Wr : " " + Yr;
        return mt(t) ? t.className.baseValue += a : t.className += a, c;
      }
    }
  }, e.destroy = function(A) {
    return !!A.parentNode && (A.parentNode.removeChild(A), !0);
  }, e;
}();
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Ne || (Ne = {}));
var G, kB = function(e, A) {
  var t = e.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = A.width.toString(), t.height = A.height.toString(), t.scrolling = "no", t.setAttribute(Co, "true"), e.body.appendChild(t), t;
}, DB = function(e) {
  return new Promise(function(A) {
    e.complete ? A() : e.src ? (e.onload = A, e.onerror = A) : A();
  });
}, SB = function(e) {
  return Promise.all([].slice.call(e.images, 0).map(DB));
}, xB = function(e) {
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
}, TB = ["all", "d", "content"], cr = function(e, A) {
  for (var t = e.length - 1; t >= 0; t--) {
    var r = e.item(t);
    TB.indexOf(r) === -1 && A.style.setProperty(r, e.getPropertyValue(r));
  }
  return A;
}, OB = function(e) {
  var A = "";
  return e && (A += "<!DOCTYPE ", e.name && (A += e.name), e.internalSubset && (A += e.internalSubset), e.publicId && (A += '"' + e.publicId + '"'), e.systemId && (A += '"' + e.systemId + '"'), A += ">"), A;
}, MB = function(e, A, t) {
  e && e.defaultView && (A !== e.defaultView.pageXOffset || t !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, t);
}, RB = function(e) {
  var A = e[0], t = e[1], r = e[2];
  A.scrollLeft = t, A.scrollTop = r;
}, Wr = "___html2canvas___pseudoelement_before", Yr = "___html2canvas___pseudoelement_after", As = `{
    content: "" !important;
    display: none !important;
}`, GB = function(e) {
  VB(e, "." + Wr + ":before" + As + `
         .` + Yr + ":after" + As);
}, VB = function(e, A) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = A, e.appendChild(r);
  }
}, Uo = function() {
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
}(), PB = function() {
  function e(A, t) {
    this.context = A, this._options = t, this._cache = {};
  }
  return e.prototype.addImage = function(A) {
    var t = Promise.resolve();
    return this.has(A) || (ur(A) || XB(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {
    }), t;
  }, e.prototype.match = function(A) {
    return this._cache[A];
  }, e.prototype.loadImage = function(A) {
    return hA(this, void 0, void 0, function() {
      var t, r, n, s, o = this;
      return gA(this, function(i) {
        switch (i.label) {
          case 0:
            return t = Uo.isSameOrigin(A), r = !lr(A) && this._options.useCORS === !0 && BA.SUPPORT_CORS_IMAGES && !t, n = !lr(A) && !t && !ur(A) && typeof this._options.proxy == "string" && BA.SUPPORT_CORS_XHR && !r, t || this._options.allowTaint !== !1 || lr(A) || ur(A) || n || r ? (s = A, n ? [4, this.proxy(s)] : [3, 2]) : [2];
          case 1:
            s = i.sent(), i.label = 2;
          case 2:
            return this.context.logger.debug("Added image " + A.substring(0, 256)), [4, new Promise(function(B, c) {
              var a = new Image();
              a.onload = function() {
                return B(a);
              }, a.onerror = c, (WB(s) || r) && (a.crossOrigin = "anonymous"), a.src = s, a.complete === !0 && setTimeout(function() {
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
      var i = BA.SUPPORT_RESPONSE_TYPE ? "blob" : "text", B = new XMLHttpRequest();
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
}(), NB = /^data:image\/svg\+xml/i, _B = /^data:image\/.*;base64,/i, JB = /^data:image\/.*/i, XB = function(e) {
  return BA.SUPPORT_SVG_DRAWING || !YB(e);
}, lr = function(e) {
  return JB.test(e);
}, WB = function(e) {
  return _B.test(e);
}, ur = function(e) {
  return e.substr(0, 4) === "blob";
}, YB = function(e) {
  return e.substr(-3).toLowerCase() === "svg" || NB.test(e);
}, f = function() {
  function e(A, t) {
    this.type = 0, this.x = A, this.y = t;
  }
  return e.prototype.add = function(A, t) {
    return new e(this.x + A, this.y + t);
  }, e;
}(), he = function(e, A, t) {
  return new f(e.x + (A.x - e.x) * t, e.y + (A.y - e.y) * t);
}, wt = function() {
  function e(A, t, r, n) {
    this.type = 1, this.start = A, this.startControl = t, this.endControl = r, this.end = n;
  }
  return e.prototype.subdivide = function(A, t) {
    var r = he(this.start, this.startControl, A), n = he(this.startControl, this.endControl, A), s = he(this.endControl, this.end, A), o = he(r, n, A), i = he(n, s, A), B = he(o, i, A);
    return t ? new e(this.start, r, o, B) : new e(B, i, s, this.end);
  }, e.prototype.add = function(A, t) {
    return new e(this.start.add(A, t), this.startControl.add(A, t), this.endControl.add(A, t), this.end.add(A, t));
  }, e.prototype.reverse = function() {
    return new e(this.end, this.endControl, this.startControl, this.start);
  }, e;
}(), LA = function(e) {
  return e.type === 1;
}, ZB = function(e) {
  var A = e.styles, t = e.bounds, r = xe(A.borderTopLeftRadius, t.width, t.height), n = r[0], s = r[1], o = xe(A.borderTopRightRadius, t.width, t.height), i = o[0], B = o[1], c = xe(A.borderBottomRightRadius, t.width, t.height), a = c[0], l = c[1], u = xe(A.borderBottomLeftRadius, t.width, t.height), g = u[0], w = u[1], d = [];
  d.push((n + i) / t.width), d.push((g + a) / t.width), d.push((s + w) / t.height), d.push((B + l) / t.height);
  var Q = Math.max.apply(Math, d);
  Q > 1 && (n /= Q, s /= Q, i /= Q, B /= Q, a /= Q, l /= Q, g /= Q, w /= Q);
  var C = t.width - i, p = t.height - l, y = t.width - a, F = t.height - w, U = A.borderTopWidth, b = A.borderRightWidth, I = A.borderBottomWidth, H = A.borderLeftWidth, k = N(A.paddingTop, e.bounds.width), $ = N(A.paddingRight, e.bounds.width), lA = N(A.paddingBottom, e.bounds.width), J = N(A.paddingLeft, e.bounds.width);
  this.topLeftBorderDoubleOuterBox = n > 0 || s > 0 ? _(t.left + H / 3, t.top + U / 3, n - H / 3, s - U / 3, G.TOP_LEFT) : new f(t.left + H / 3, t.top + U / 3), this.topRightBorderDoubleOuterBox = n > 0 || s > 0 ? _(t.left + C, t.top + U / 3, i - b / 3, B - U / 3, G.TOP_RIGHT) : new f(t.left + t.width - b / 3, t.top + U / 3), this.bottomRightBorderDoubleOuterBox = a > 0 || l > 0 ? _(t.left + y, t.top + p, a - b / 3, l - I / 3, G.BOTTOM_RIGHT) : new f(t.left + t.width - b / 3, t.top + t.height - I / 3), this.bottomLeftBorderDoubleOuterBox = g > 0 || w > 0 ? _(t.left + H / 3, t.top + F, g - H / 3, w - I / 3, G.BOTTOM_LEFT) : new f(t.left + H / 3, t.top + t.height - I / 3), this.topLeftBorderDoubleInnerBox = n > 0 || s > 0 ? _(t.left + 2 * H / 3, t.top + 2 * U / 3, n - 2 * H / 3, s - 2 * U / 3, G.TOP_LEFT) : new f(t.left + 2 * H / 3, t.top + 2 * U / 3), this.topRightBorderDoubleInnerBox = n > 0 || s > 0 ? _(t.left + C, t.top + 2 * U / 3, i - 2 * b / 3, B - 2 * U / 3, G.TOP_RIGHT) : new f(t.left + t.width - 2 * b / 3, t.top + 2 * U / 3), this.bottomRightBorderDoubleInnerBox = a > 0 || l > 0 ? _(t.left + y, t.top + p, a - 2 * b / 3, l - 2 * I / 3, G.BOTTOM_RIGHT) : new f(t.left + t.width - 2 * b / 3, t.top + t.height - 2 * I / 3), this.bottomLeftBorderDoubleInnerBox = g > 0 || w > 0 ? _(t.left + 2 * H / 3, t.top + F, g - 2 * H / 3, w - 2 * I / 3, G.BOTTOM_LEFT) : new f(t.left + 2 * H / 3, t.top + t.height - 2 * I / 3), this.topLeftBorderStroke = n > 0 || s > 0 ? _(t.left + H / 2, t.top + U / 2, n - H / 2, s - U / 2, G.TOP_LEFT) : new f(t.left + H / 2, t.top + U / 2), this.topRightBorderStroke = n > 0 || s > 0 ? _(t.left + C, t.top + U / 2, i - b / 2, B - U / 2, G.TOP_RIGHT) : new f(t.left + t.width - b / 2, t.top + U / 2), this.bottomRightBorderStroke = a > 0 || l > 0 ? _(t.left + y, t.top + p, a - b / 2, l - I / 2, G.BOTTOM_RIGHT) : new f(t.left + t.width - b / 2, t.top + t.height - I / 2), this.bottomLeftBorderStroke = g > 0 || w > 0 ? _(t.left + H / 2, t.top + F, g - H / 2, w - I / 2, G.BOTTOM_LEFT) : new f(t.left + H / 2, t.top + t.height - I / 2), this.topLeftBorderBox = n > 0 || s > 0 ? _(t.left, t.top, n, s, G.TOP_LEFT) : new f(t.left, t.top), this.topRightBorderBox = i > 0 || B > 0 ? _(t.left + C, t.top, i, B, G.TOP_RIGHT) : new f(t.left + t.width, t.top), this.bottomRightBorderBox = a > 0 || l > 0 ? _(t.left + y, t.top + p, a, l, G.BOTTOM_RIGHT) : new f(t.left + t.width, t.top + t.height), this.bottomLeftBorderBox = g > 0 || w > 0 ? _(t.left, t.top + F, g, w, G.BOTTOM_LEFT) : new f(t.left, t.top + t.height), this.topLeftPaddingBox = n > 0 || s > 0 ? _(t.left + H, t.top + U, Math.max(0, n - H), Math.max(0, s - U), G.TOP_LEFT) : new f(t.left + H, t.top + U), this.topRightPaddingBox = i > 0 || B > 0 ? _(t.left + Math.min(C, t.width - b), t.top + U, C > t.width + b ? 0 : Math.max(0, i - b), Math.max(0, B - U), G.TOP_RIGHT) : new f(t.left + t.width - b, t.top + U), this.bottomRightPaddingBox = a > 0 || l > 0 ? _(t.left + Math.min(y, t.width - H), t.top + Math.min(p, t.height - I), Math.max(0, a - b), Math.max(0, l - I), G.BOTTOM_RIGHT) : new f(t.left + t.width - b, t.top + t.height - I), this.bottomLeftPaddingBox = g > 0 || w > 0 ? _(t.left + H, t.top + Math.min(F, t.height - I), Math.max(0, g - H), Math.max(0, w - I), G.BOTTOM_LEFT) : new f(t.left + H, t.top + t.height - I), this.topLeftContentBox = n > 0 || s > 0 ? _(t.left + H + J, t.top + U + k, Math.max(0, n - (H + J)), Math.max(0, s - (U + k)), G.TOP_LEFT) : new f(t.left + H + J, t.top + U + k), this.topRightContentBox = i > 0 || B > 0 ? _(t.left + Math.min(C, t.width + H + J), t.top + U + k, C > t.width + H + J ? 0 : i - H + J, B - (U + k), G.TOP_RIGHT) : new f(t.left + t.width - (b + $), t.top + U + k), this.bottomRightContentBox = a > 0 || l > 0 ? _(t.left + Math.min(y, t.width - (H + J)), t.top + Math.min(p, t.height + U + k), Math.max(0, a - (b + $)), l - (I + lA), G.BOTTOM_RIGHT) : new f(t.left + t.width - (b + $), t.top + t.height - (I + lA)), this.bottomLeftContentBox = g > 0 || w > 0 ? _(t.left + H + J, t.top + F, Math.max(0, g - (H + J)), w - (I + lA), G.BOTTOM_LEFT) : new f(t.left + H + J, t.top + t.height - (I + lA));
};
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(G || (G = {}));
var _ = function(e, A, t, r, n) {
  var s = (Math.sqrt(2) - 1) / 3 * 4, o = t * s, i = r * s, B = e + t, c = A + r;
  switch (n) {
    case G.TOP_LEFT:
      return new wt(new f(e, c), new f(e, c - i), new f(B - o, A), new f(B, A));
    case G.TOP_RIGHT:
      return new wt(new f(e, A), new f(e + o, A), new f(B, c - i), new f(B, c));
    case G.BOTTOM_RIGHT:
      return new wt(new f(B, A), new f(B, A + i), new f(e + o, c), new f(e, c));
    case G.BOTTOM_LEFT:
    default:
      return new wt(new f(B, c), new f(B - o, c), new f(e, A + i), new f(e, A));
  }
}, Rt = function(e) {
  return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox];
}, Gt = function(e) {
  return [e.topLeftPaddingBox, e.topRightPaddingBox, e.bottomRightPaddingBox, e.bottomLeftPaddingBox];
}, jB = function(e, A, t) {
  this.offsetX = e, this.offsetY = A, this.matrix = t, this.type = 0, this.target = 6;
}, gt = function(e, A) {
  this.path = e, this.target = A, this.type = 1;
}, qB = function(e) {
  this.opacity = e, this.type = 2, this.target = 6;
}, po = function(e) {
  return e.type === 1;
}, es = function(e, A) {
  return e.length === A.length && e.some(function(t, r) {
    return t === A[r];
  });
}, Fo = function(e) {
  this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
}, fo = function() {
  function e(A, t) {
    if (this.container = A, this.parent = t, this.effects = [], this.curves = new ZB(this.container), this.container.styles.opacity < 1 && this.effects.push(new qB(this.container.styles.opacity)), this.container.styles.transform !== null) {
      var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, s = this.container.styles.transform;
      this.effects.push(new jB(r, n, s));
    }
    if (this.container.styles.overflowX !== 0) {
      var o = Rt(this.curves), i = Gt(this.curves);
      es(o, i) ? this.effects.push(new gt(o, 6)) : (this.effects.push(new gt(o, 2)), this.effects.push(new gt(i, 4)));
    }
  }
  return e.prototype.getEffects = function(A) {
    for (var t = [2, 3].indexOf(this.container.styles.position) === -1, r = this.parent, n = this.effects.slice(0); r; ) {
      var s = r.effects.filter(function(B) {
        return !po(B);
      });
      if (t || r.container.styles.position !== 0 || !r.parent) {
        if (n.unshift.apply(n, s), t = [2, 3].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
          var o = Rt(r.curves), i = Gt(r.curves);
          es(o, i) || n.unshift(new gt(i, 6));
        }
      } else
        n.unshift.apply(n, s);
      r = r.parent;
    }
    return n.filter(function(B) {
      return rA(B.target, A);
    });
  }, e;
}(), Zr = function(e, A, t, r) {
  e.container.elements.forEach(function(n) {
    var s = rA(n.flags, 4), o = rA(n.flags, 2), i = new fo(n, e);
    rA(n.styles.display, 2048) && r.push(i);
    var B = rA(n.flags, 8) ? [] : r;
    if (s || o) {
      var c = s || n.styles.isPositioned() ? t : A, a = new Fo(i);
      if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
        var l = n.styles.zIndex.order;
        if (l < 0) {
          var u = 0;
          c.negativeZIndex.some(function(w, d) {
            return l > w.element.container.styles.zIndex.order ? (u = d, !1) : u > 0;
          }), c.negativeZIndex.splice(u, 0, a);
        } else if (l > 0) {
          var g = 0;
          c.positiveZIndex.some(function(w, d) {
            return l >= w.element.container.styles.zIndex.order ? (g = d + 1, !1) : g > 0;
          }), c.positiveZIndex.splice(g, 0, a);
        } else
          c.zeroOrAutoZIndexOrTransformedOrOpacity.push(a);
      } else
        n.styles.isFloating() ? c.nonPositionedFloats.push(a) : c.nonPositionedInlineLevel.push(a);
      Zr(i, a, s ? a : t, B);
    } else
      n.styles.isInlineLevel() ? A.inlineLevel.push(i) : A.nonInlineLevel.push(i), Zr(i, A, t, B);
    rA(n.flags, 8) && mo(n, B);
  });
}, mo = function(e, A) {
  for (var t = e instanceof _r ? e.start : 1, r = e instanceof _r && e.reversed, n = 0; n < A.length; n++) {
    var s = A[n];
    s.container instanceof so && typeof s.container.value == "number" && s.container.value !== 0 && (t = s.container.value), s.listValue = Ye(t, s.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, ts = function(e, A) {
  switch (A) {
    case 0:
      return vA(e.topLeftBorderBox, e.topLeftPaddingBox, e.topRightBorderBox, e.topRightPaddingBox);
    case 1:
      return vA(e.topRightBorderBox, e.topRightPaddingBox, e.bottomRightBorderBox, e.bottomRightPaddingBox);
    case 2:
      return vA(e.bottomRightBorderBox, e.bottomRightPaddingBox, e.bottomLeftBorderBox, e.bottomLeftPaddingBox);
    default:
      return vA(e.bottomLeftBorderBox, e.bottomLeftPaddingBox, e.topLeftBorderBox, e.topLeftPaddingBox);
  }
}, dt = function(e, A) {
  var t = [];
  return LA(e) ? t.push(e.subdivide(0.5, !1)) : t.push(e), LA(A) ? t.push(A.subdivide(0.5, !0)) : t.push(A), t;
}, vA = function(e, A, t, r) {
  var n = [];
  return LA(e) ? n.push(e.subdivide(0.5, !1)) : n.push(e), LA(t) ? n.push(t.subdivide(0.5, !0)) : n.push(t), LA(r) ? n.push(r.subdivide(0.5, !0).reverse()) : n.push(r), LA(A) ? n.push(A.subdivide(0.5, !1).reverse()) : n.push(A), n;
}, rs = function(e) {
  var A = e.bounds, t = e.styles;
  return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, Vt = function(e) {
  var A = e.styles, t = e.bounds, r = N(A.paddingLeft, t.width), n = N(A.paddingRight, t.width), s = N(A.paddingTop, t.width), o = N(A.paddingBottom, t.width);
  return t.add(r + A.borderLeftWidth, s + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + r + n), -(A.borderTopWidth + A.borderBottomWidth + s + o));
}, wr = function(e, A, t) {
  var r = function(c, a) {
    return c === 0 ? a.bounds : c === 2 ? Vt(a) : rs(a);
  }(pe(e.styles.backgroundOrigin, A), e), n = function(c, a) {
    return c === 0 ? a.bounds : c === 2 ? Vt(a) : rs(a);
  }(pe(e.styles.backgroundClip, A), e), s = zB(pe(e.styles.backgroundSize, A), t, r), o = s[0], i = s[1], B = xe(pe(e.styles.backgroundPosition, A), r.width - o, r.height - i);
  return [$B(pe(e.styles.backgroundRepeat, A), B, s, r, n), Math.round(r.left + B[0]), Math.round(r.top + B[1]), o, i];
}, Qe = function(e) {
  return P(e) && e.value === Ee.AUTO;
}, ht = function(e) {
  return typeof e == "number";
}, zB = function(e, A, t) {
  var r = A[0], n = A[1], s = A[2], o = e[0], i = e[1];
  if (!o)
    return [0, 0];
  if (z(o) && i && z(i))
    return [N(o, t.width), N(i, t.height)];
  var B = ht(s);
  if (P(o) && (o.value === Ee.CONTAIN || o.value === Ee.COVER))
    return ht(s) ? t.width / t.height < s != (o.value === Ee.COVER) ? [t.width, t.width / s] : [t.height * s, t.height] : [t.width, t.height];
  var c = ht(r), a = ht(n), l = c || a;
  if (Qe(o) && (!i || Qe(i)))
    return c && a ? [r, n] : B || l ? l && B ? [c ? r : n * s, a ? n : r / s] : [c ? r : t.width, a ? n : t.height] : [t.width, t.height];
  if (B) {
    var u = 0, g = 0;
    return z(o) ? u = N(o, t.width) : z(i) && (g = N(i, t.height)), Qe(o) ? u = g * s : i && !Qe(i) || (g = u / s), [u, g];
  }
  var w = null, d = null;
  if (z(o) ? w = N(o, t.width) : i && z(i) && (d = N(i, t.height)), w === null || i && !Qe(i) || (d = c && a ? w / r * n : t.height), d !== null && Qe(o) && (w = c && a ? d / n * r : t.width), w !== null && d !== null)
    return [w, d];
  throw new Error("Unable to calculate background-size for element");
}, pe = function(e, A) {
  var t = e[A];
  return t === void 0 ? e[0] : t;
}, $B = function(e, A, t, r, n) {
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
}, ns = "Hidden Text", Ac = function() {
  function e(A) {
    this._data = {}, this._document = A;
  }
  return e.prototype.parseMetrics = function(A, t) {
    var r = this._document.createElement("div"), n = this._document.createElement("img"), s = this._document.createElement("span"), o = this._document.body;
    r.style.visibility = "hidden", r.style.fontFamily = A, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", o.appendChild(r), n.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", s.style.fontFamily = A, s.style.fontSize = t, s.style.margin = "0", s.style.padding = "0", s.appendChild(this._document.createTextNode(ns)), r.appendChild(s), r.appendChild(n);
    var i = n.offsetTop - s.offsetTop + 2;
    r.removeChild(s), r.appendChild(this._document.createTextNode(ns)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
    var B = n.offsetTop - r.offsetTop + 2;
    return o.removeChild(r), { baseline: i, middle: B };
  }, e.prototype.getMetrics = function(A, t) {
    var r = A + " " + t;
    return this._data[r] === void 0 && (this._data[r] = this.parseMetrics(A, t)), this._data[r];
  }, e;
}(), Eo = function(e, A) {
  this.context = e, this.options = A;
}, ec = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this;
    return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new Ac(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
  }
  return SA(A, e), A.prototype.applyEffects = function(t) {
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
    }(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), po(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
  }, A.prototype.popEffect = function() {
    this._activeEffects.pop(), this.ctx.restore();
  }, A.prototype.renderStack = function(t) {
    return hA(this, void 0, void 0, function() {
      return gA(this, function(r) {
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
    return hA(this, void 0, void 0, function() {
      return gA(this, function(r) {
        switch (r.label) {
          case 0:
            return rA(t.container.flags, 16), t.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(t)] : [3, 3];
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
    r === 0 ? this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + n) : nn(t.text).reduce(function(o, i) {
      return s.ctx.fillText(i, o, t.bounds.top + n), o + s.ctx.measureText(i).width;
    }, t.bounds.left);
  }, A.prototype.createFontStyle = function(t) {
    var r = t.fontVariant.filter(function(o) {
      return o === "normal" || o === "small-caps";
    }).join(""), n = oc(t.fontFamily).join(", "), s = We(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
    return [[t.fontStyle, r, t.fontWeight, s, n].join(" "), n, s];
  }, A.prototype.renderTextNode = function(t, r) {
    return hA(this, void 0, void 0, function() {
      var n, s, o, i, B, c, a, l, u = this;
      return gA(this, function(g) {
        return n = this.createFontStyle(r), s = n[0], o = n[1], i = n[2], this.ctx.font = s, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", B = this.fontMetrics.getMetrics(o, i), c = B.baseline, a = B.middle, l = r.paintOrder, t.textBounds.forEach(function(w) {
          l.forEach(function(d) {
            switch (d) {
              case 0:
                u.ctx.fillStyle = sA(r.color), u.renderTextWithLetterSpacing(w, r.letterSpacing, c);
                var Q = r.textShadow;
                Q.length && w.text.trim().length && (Q.slice(0).reverse().forEach(function(C) {
                  u.ctx.shadowColor = sA(C.color), u.ctx.shadowOffsetX = C.offsetX.number * u.options.scale, u.ctx.shadowOffsetY = C.offsetY.number * u.options.scale, u.ctx.shadowBlur = C.blur.number, u.renderTextWithLetterSpacing(w, r.letterSpacing, c);
                }), u.ctx.shadowColor = "", u.ctx.shadowOffsetX = 0, u.ctx.shadowOffsetY = 0, u.ctx.shadowBlur = 0), r.textDecorationLine.length && (u.ctx.fillStyle = sA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(C) {
                  switch (C) {
                    case 1:
                      u.ctx.fillRect(w.bounds.left, Math.round(w.bounds.top + c), w.bounds.width, 1);
                      break;
                    case 2:
                      u.ctx.fillRect(w.bounds.left, Math.round(w.bounds.top), w.bounds.width, 1);
                      break;
                    case 3:
                      u.ctx.fillRect(w.bounds.left, Math.ceil(w.bounds.top + a), w.bounds.width, 1);
                  }
                }));
                break;
              case 1:
                r.webkitTextStrokeWidth && w.text.trim().length && (u.ctx.strokeStyle = sA(r.webkitTextStrokeColor), u.ctx.lineWidth = r.webkitTextStrokeWidth, u.ctx.lineJoin = window.chrome ? "miter" : "round", u.ctx.strokeText(w.text, w.bounds.left, w.bounds.top + c)), u.ctx.strokeStyle = "", u.ctx.lineWidth = 0, u.ctx.lineJoin = "miter";
            }
          });
        }), [2];
      });
    });
  }, A.prototype.renderReplacedElement = function(t, r, n) {
    if (n && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
      var s = Vt(t), o = Gt(r);
      this.path(o), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, s.left, s.top, s.width, s.height), this.ctx.restore();
    }
  }, A.prototype.renderNodeContent = function(t) {
    return hA(this, void 0, void 0, function() {
      var r, n, s, o, i, B, c, a, l, u, g, w, d, Q, C, p, y, F;
      return gA(this, function(U) {
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
            if (!(r instanceof to))
              return [3, 8];
            U.label = 5;
          case 5:
            return U.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
          case 6:
            return C = U.sent(), this.renderReplacedElement(r, n, C), [3, 8];
          case 7:
            return U.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
          case 8:
            if (r instanceof ro && this.renderReplacedElement(r, n, r.canvas), !(r instanceof no))
              return [3, 12];
            U.label = 9;
          case 9:
            return U.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
          case 10:
            return C = U.sent(), this.renderReplacedElement(r, n, C), [3, 12];
          case 11:
            return U.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
          case 12:
            return r instanceof ao && r.tree ? [4, new A(this.context, { scale: this.options.scale, backgroundColor: r.backgroundColor, x: 0, y: 0, width: r.width, height: r.height }).render(r.tree)] : [3, 14];
          case 13:
            c = U.sent(), r.width && r.height && this.ctx.drawImage(c, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), U.label = 14;
          case 14:
            if (r instanceof sn && (a = Math.min(r.bounds.width, r.bounds.height), r.type === xt ? r.checked && (this.ctx.save(), this.path([new f(r.bounds.left + 0.39363 * a, r.bounds.top + 0.79 * a), new f(r.bounds.left + 0.16 * a, r.bounds.top + 0.5549 * a), new f(r.bounds.left + 0.27347 * a, r.bounds.top + 0.44071 * a), new f(r.bounds.left + 0.39694 * a, r.bounds.top + 0.5649 * a), new f(r.bounds.left + 0.72983 * a, r.bounds.top + 0.23 * a), new f(r.bounds.left + 0.84 * a, r.bounds.top + 0.34085 * a), new f(r.bounds.left + 0.39363 * a, r.bounds.top + 0.79 * a)]), this.ctx.fillStyle = sA(_n), this.ctx.fill(), this.ctx.restore()) : r.type === Tt && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + a / 2, r.bounds.top + a / 2, a / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = sA(_n), this.ctx.fill(), this.ctx.restore())), tc(r) && r.value.length) {
              switch (l = this.createFontStyle(s), y = l[0], u = l[1], g = this.fontMetrics.getMetrics(y, u).baseline, this.ctx.font = y, this.ctx.fillStyle = sA(s.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = nc(r.styles.textAlign), F = Vt(r), w = 0, r.styles.textAlign) {
                case 1:
                  w += F.width / 2;
                  break;
                case 2:
                  w += F.width;
              }
              d = F.add(w, 0, 0, -F.height / 2 + 1), this.ctx.save(), this.path([new f(F.left, F.top), new f(F.left + F.width, F.top), new f(F.left + F.width, F.top + F.height), new f(F.left, F.top + F.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new _e(r.value, d), s.letterSpacing, g), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
            }
            if (!rA(r.styles.display, 2048))
              return [3, 20];
            if (r.styles.listStyleImage === null)
              return [3, 19];
            if ((Q = r.styles.listStyleImage).type !== 0)
              return [3, 18];
            C = void 0, p = Q.url, U.label = 15;
          case 15:
            return U.trys.push([15, 17, , 18]), [4, this.context.cache.match(p)];
          case 16:
            return C = U.sent(), this.ctx.drawImage(C, r.bounds.left - (C.width + 10), r.bounds.top), [3, 18];
          case 17:
            return U.sent(), this.context.logger.error("Error loading list-style-image " + p), [3, 18];
          case 18:
            return [3, 20];
          case 19:
            t.listValue && r.styles.listStyleType !== -1 && (y = this.createFontStyle(s)[0], this.ctx.font = y, this.ctx.fillStyle = sA(s.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", F = new $A(r.bounds.left, r.bounds.top + N(r.styles.paddingTop, r.bounds.width), r.bounds.width, kn(s.lineHeight, s.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new _e(t.listValue, F), s.letterSpacing, kn(s.lineHeight, s.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), U.label = 20;
          case 20:
            return [2];
        }
      });
    });
  }, A.prototype.renderStackContent = function(t) {
    return hA(this, void 0, void 0, function() {
      var r, n, s, o, i, B, c, a, l, u, g, w, d, Q, C;
      return gA(this, function(p) {
        switch (p.label) {
          case 0:
            return rA(t.element.container.flags, 16), [4, this.renderNodeBackgroundAndBorders(t.element)];
          case 1:
            p.sent(), r = 0, n = t.negativeZIndex, p.label = 2;
          case 2:
            return r < n.length ? (C = n[r], [4, this.renderStack(C)]) : [3, 5];
          case 3:
            p.sent(), p.label = 4;
          case 4:
            return r++, [3, 2];
          case 5:
            return [4, this.renderNodeContent(t.element)];
          case 6:
            p.sent(), s = 0, o = t.nonInlineLevel, p.label = 7;
          case 7:
            return s < o.length ? (C = o[s], [4, this.renderNode(C)]) : [3, 10];
          case 8:
            p.sent(), p.label = 9;
          case 9:
            return s++, [3, 7];
          case 10:
            i = 0, B = t.nonPositionedFloats, p.label = 11;
          case 11:
            return i < B.length ? (C = B[i], [4, this.renderStack(C)]) : [3, 14];
          case 12:
            p.sent(), p.label = 13;
          case 13:
            return i++, [3, 11];
          case 14:
            c = 0, a = t.nonPositionedInlineLevel, p.label = 15;
          case 15:
            return c < a.length ? (C = a[c], [4, this.renderStack(C)]) : [3, 18];
          case 16:
            p.sent(), p.label = 17;
          case 17:
            return c++, [3, 15];
          case 18:
            l = 0, u = t.inlineLevel, p.label = 19;
          case 19:
            return l < u.length ? (C = u[l], [4, this.renderNode(C)]) : [3, 22];
          case 20:
            p.sent(), p.label = 21;
          case 21:
            return l++, [3, 19];
          case 22:
            g = 0, w = t.zeroOrAutoZIndexOrTransformedOrOpacity, p.label = 23;
          case 23:
            return g < w.length ? (C = w[g], [4, this.renderStack(C)]) : [3, 26];
          case 24:
            p.sent(), p.label = 25;
          case 25:
            return g++, [3, 23];
          case 26:
            d = 0, Q = t.positiveZIndex, p.label = 27;
          case 27:
            return d < Q.length ? (C = Q[d], [4, this.renderStack(C)]) : [3, 30];
          case 28:
            p.sent(), p.label = 29;
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
      var o = LA(n) ? n.start : n;
      s === 0 ? r.ctx.moveTo(o.x, o.y) : r.ctx.lineTo(o.x, o.y), LA(n) && r.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y);
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
    return hA(this, void 0, void 0, function() {
      var r, n, s, o, i, B;
      return gA(this, function(c) {
        switch (c.label) {
          case 0:
            r = t.styles.backgroundImage.length - 1, n = function(a) {
              var l, u, g, w, d, Q, C, p, y, F, U, b, I, H, k, $, lA, J, AA, nA, pA, oA, dA, EA, CA, HA, xA, TA, yA, FA, WA;
              return gA(this, function(q) {
                switch (q.label) {
                  case 0:
                    if (a.type !== 0)
                      return [3, 5];
                    l = void 0, u = a.url, q.label = 1;
                  case 1:
                    return q.trys.push([1, 3, , 4]), [4, s.context.cache.match(u)];
                  case 2:
                    return l = q.sent(), [3, 4];
                  case 3:
                    return q.sent(), s.context.logger.error("Error loading background-image " + u), [3, 4];
                  case 4:
                    return l && (g = wr(t, r, [l.width, l.height, l.width / l.height]), $ = g[0], oA = g[1], dA = g[2], AA = g[3], nA = g[4], H = s.ctx.createPattern(s.resizeImage(l, AA, nA), "repeat"), s.renderRepeat($, H, oA, dA)), [3, 6];
                  case 5:
                    a.type === 1 ? (w = wr(t, r, [null, null, null]), $ = w[0], oA = w[1], dA = w[2], AA = w[3], nA = w[4], d = Oi(a.angle, AA, nA), Q = d[0], C = d[1], p = d[2], y = d[3], F = d[4], (U = document.createElement("canvas")).width = AA, U.height = nA, b = U.getContext("2d"), I = b.createLinearGradient(C, y, p, F), Ln(a.stops, Q).forEach(function(S) {
                      return I.addColorStop(S.stop, sA(S.color));
                    }), b.fillStyle = I, b.fillRect(0, 0, AA, nA), AA > 0 && nA > 0 && (H = s.ctx.createPattern(U, "repeat"), s.renderRepeat($, H, oA, dA))) : function(S) {
                      return S.type === 2;
                    }(a) && (k = wr(t, r, [null, null, null]), $ = k[0], lA = k[1], J = k[2], AA = k[3], nA = k[4], pA = a.position.length === 0 ? [tn] : a.position, oA = N(pA[0], AA), dA = N(pA[pA.length - 1], nA), EA = function(S, T, M, uA, wA) {
                      var X = 0, iA = 0;
                      switch (S.size) {
                        case 0:
                          S.shape === 0 ? X = iA = Math.min(Math.abs(T), Math.abs(T - uA), Math.abs(M), Math.abs(M - wA)) : S.shape === 1 && (X = Math.min(Math.abs(T), Math.abs(T - uA)), iA = Math.min(Math.abs(M), Math.abs(M - wA)));
                          break;
                        case 2:
                          if (S.shape === 0)
                            X = iA = Math.min(DA(T, M), DA(T, M - wA), DA(T - uA, M), DA(T - uA, M - wA));
                          else if (S.shape === 1) {
                            var OA = Math.min(Math.abs(M), Math.abs(M - wA)) / Math.min(Math.abs(T), Math.abs(T - uA)), O = Kn(uA, wA, T, M, !0), V = O[0], L = O[1];
                            iA = OA * (X = DA(V - T, (L - M) / OA));
                          }
                          break;
                        case 1:
                          S.shape === 0 ? X = iA = Math.max(Math.abs(T), Math.abs(T - uA), Math.abs(M), Math.abs(M - wA)) : S.shape === 1 && (X = Math.max(Math.abs(T), Math.abs(T - uA)), iA = Math.max(Math.abs(M), Math.abs(M - wA)));
                          break;
                        case 3:
                          if (S.shape === 0)
                            X = iA = Math.max(DA(T, M), DA(T, M - wA), DA(T - uA, M), DA(T - uA, M - wA));
                          else if (S.shape === 1) {
                            OA = Math.max(Math.abs(M), Math.abs(M - wA)) / Math.max(Math.abs(T), Math.abs(T - uA));
                            var eA = Kn(uA, wA, T, M, !1);
                            V = eA[0], L = eA[1], iA = OA * (X = DA(V - T, (L - M) / OA));
                          }
                      }
                      return Array.isArray(S.size) && (X = N(S.size[0], uA), iA = S.size.length === 2 ? N(S.size[1], wA) : X), [X, iA];
                    }(a, oA, dA, AA, nA), CA = EA[0], HA = EA[1], CA > 0 && HA > 0 && (xA = s.ctx.createRadialGradient(lA + oA, J + dA, 0, lA + oA, J + dA, CA), Ln(a.stops, 2 * CA).forEach(function(S) {
                      return xA.addColorStop(S.stop, sA(S.color));
                    }), s.path($), s.ctx.fillStyle = xA, CA !== HA ? (TA = t.bounds.left + 0.5 * t.bounds.width, yA = t.bounds.top + 0.5 * t.bounds.height, WA = 1 / (FA = HA / CA), s.ctx.save(), s.ctx.translate(TA, yA), s.ctx.transform(1, 0, 0, FA, 0, 0), s.ctx.translate(-TA, -yA), s.ctx.fillRect(lA, WA * (J - yA) + yA, AA, nA * WA), s.ctx.restore()) : s.ctx.fill())), q.label = 6;
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
    return hA(this, void 0, void 0, function() {
      return gA(this, function(s) {
        return this.path(ts(n, r)), this.ctx.fillStyle = sA(t), this.ctx.fill(), [2];
      });
    });
  }, A.prototype.renderDoubleBorder = function(t, r, n, s) {
    return hA(this, void 0, void 0, function() {
      var o, i;
      return gA(this, function(B) {
        switch (B.label) {
          case 0:
            return r < 3 ? [4, this.renderSolidBorder(t, n, s)] : [3, 2];
          case 1:
            return B.sent(), [2];
          case 2:
            return o = function(c, a) {
              switch (a) {
                case 0:
                  return vA(c.topLeftBorderBox, c.topLeftBorderDoubleOuterBox, c.topRightBorderBox, c.topRightBorderDoubleOuterBox);
                case 1:
                  return vA(c.topRightBorderBox, c.topRightBorderDoubleOuterBox, c.bottomRightBorderBox, c.bottomRightBorderDoubleOuterBox);
                case 2:
                  return vA(c.bottomRightBorderBox, c.bottomRightBorderDoubleOuterBox, c.bottomLeftBorderBox, c.bottomLeftBorderDoubleOuterBox);
                default:
                  return vA(c.bottomLeftBorderBox, c.bottomLeftBorderDoubleOuterBox, c.topLeftBorderBox, c.topLeftBorderDoubleOuterBox);
              }
            }(s, n), this.path(o), this.ctx.fillStyle = sA(t), this.ctx.fill(), i = function(c, a) {
              switch (a) {
                case 0:
                  return vA(c.topLeftBorderDoubleInnerBox, c.topLeftPaddingBox, c.topRightBorderDoubleInnerBox, c.topRightPaddingBox);
                case 1:
                  return vA(c.topRightBorderDoubleInnerBox, c.topRightPaddingBox, c.bottomRightBorderDoubleInnerBox, c.bottomRightPaddingBox);
                case 2:
                  return vA(c.bottomRightBorderDoubleInnerBox, c.bottomRightPaddingBox, c.bottomLeftBorderDoubleInnerBox, c.bottomLeftPaddingBox);
                default:
                  return vA(c.bottomLeftBorderDoubleInnerBox, c.bottomLeftPaddingBox, c.topLeftBorderDoubleInnerBox, c.topLeftPaddingBox);
              }
            }(s, n), this.path(i), this.ctx.fill(), [2];
        }
      });
    });
  }, A.prototype.renderNodeBackgroundAndBorders = function(t) {
    return hA(this, void 0, void 0, function() {
      var r, n, s, o, i, B, c, a, l = this;
      return gA(this, function(u) {
        switch (u.label) {
          case 0:
            return this.applyEffects(t.getEffects(2)), r = t.container.styles, n = !oe(r.backgroundColor) || r.backgroundImage.length, s = [{ style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth }, { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth }, { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth }, { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }], o = rc(pe(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(o), this.ctx.clip(), oe(r.backgroundColor) || (this.ctx.fillStyle = sA(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
          case 1:
            u.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(g) {
              l.ctx.save();
              var w, d, Q, C, p, y = Rt(t.curves), F = g.inset ? 0 : 1e4, U = (w = y, d = -F + (g.inset ? 1 : -1) * g.spread.number, Q = (g.inset ? 1 : -1) * g.spread.number, C = g.spread.number * (g.inset ? -2 : 2), p = g.spread.number * (g.inset ? -2 : 2), w.map(function(b, I) {
                switch (I) {
                  case 0:
                    return b.add(d, Q);
                  case 1:
                    return b.add(d + C, Q);
                  case 2:
                    return b.add(d + C, Q + p);
                  case 3:
                    return b.add(d, Q + p);
                }
                return b;
              }));
              g.inset ? (l.path(y), l.ctx.clip(), l.mask(U)) : (l.mask(y), l.ctx.clip(), l.path(U)), l.ctx.shadowOffsetX = g.offsetX.number + F, l.ctx.shadowOffsetY = g.offsetY.number, l.ctx.shadowColor = sA(g.color), l.ctx.shadowBlur = g.blur.number, l.ctx.fillStyle = g.inset ? sA(g.color) : "rgba(0,0,0,1)", l.ctx.fill(), l.ctx.restore();
            }), u.label = 2;
          case 2:
            i = 0, B = 0, c = s, u.label = 3;
          case 3:
            return B < c.length ? (a = c[B]).style !== 0 && !oe(a.color) && a.width > 0 ? a.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(a.color, a.width, i, t.curves, 2)] : [3, 11] : [3, 13];
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
    return hA(this, void 0, void 0, function() {
      var i, B, c, a, l, u, g, w, d, Q, C, p, y, F, U, b;
      return gA(this, function(I) {
        return this.ctx.save(), i = function(H, k) {
          switch (k) {
            case 0:
              return dt(H.topLeftBorderStroke, H.topRightBorderStroke);
            case 1:
              return dt(H.topRightBorderStroke, H.bottomRightBorderStroke);
            case 2:
              return dt(H.bottomRightBorderStroke, H.bottomLeftBorderStroke);
            default:
              return dt(H.bottomLeftBorderStroke, H.topLeftBorderStroke);
          }
        }(s, n), B = ts(s, n), o === 2 && (this.path(B), this.ctx.clip()), LA(B[0]) ? (c = B[0].start.x, a = B[0].start.y) : (c = B[0].x, a = B[0].y), LA(B[1]) ? (l = B[1].end.x, u = B[1].end.y) : (l = B[1].x, u = B[1].y), g = Math.abs(n === 0 || n === 2 ? c - l : a - u), this.ctx.beginPath(), o === 3 ? this.formatPath(i) : this.formatPath(B.slice(0, 2)), w = r < 3 ? 3 * r : 2 * r, d = r < 3 ? 2 * r : r, o === 3 && (w = r, d = r), Q = !0, g <= 2 * w ? Q = !1 : g <= 2 * w + d ? (w *= C = g / (2 * w + d), d *= C) : (p = Math.floor((g + d) / (w + d)), y = (g - p * w) / (p - 1), d = (F = (g - (p + 1) * w) / p) <= 0 || Math.abs(d - y) < Math.abs(d - F) ? y : F), Q && (o === 3 ? this.ctx.setLineDash([0, w + d]) : this.ctx.setLineDash([w, d])), o === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = 2 * r + 1.1, this.ctx.strokeStyle = sA(t), this.ctx.stroke(), this.ctx.setLineDash([]), o === 2 && (LA(B[0]) && (U = B[3], b = B[0], this.ctx.beginPath(), this.formatPath([new f(U.end.x, U.end.y), new f(b.start.x, b.start.y)]), this.ctx.stroke()), LA(B[1]) && (U = B[1], b = B[2], this.ctx.beginPath(), this.formatPath([new f(U.end.x, U.end.y), new f(b.start.x, b.start.y)]), this.ctx.stroke())), this.ctx.restore(), [2];
      });
    });
  }, A.prototype.render = function(t) {
    return hA(this, void 0, void 0, function() {
      var r;
      return gA(this, function(n) {
        switch (n.label) {
          case 0:
            return this.options.backgroundColor && (this.ctx.fillStyle = sA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), s = new fo(t, null), o = new Fo(s), Zr(s, o, o, i = []), mo(s.container, i), r = o, [4, this.renderStack(r)];
          case 1:
            return n.sent(), this.applyEffects([]), [2, this.canvas];
        }
        var s, o, i;
      });
    });
  }, A;
}(Eo), tc = function(e) {
  return e instanceof io || e instanceof oo || e instanceof sn && e.type !== Tt && e.type !== xt;
}, rc = function(e, A) {
  switch (e) {
    case 0:
      return Rt(A);
    case 2:
      return function(t) {
        return [t.topLeftContentBox, t.topRightContentBox, t.bottomRightContentBox, t.bottomLeftContentBox];
      }(A);
    default:
      return Gt(A);
  }
}, nc = function(e) {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    default:
      return "left";
  }
}, sc = ["-apple-system", "system-ui"], oc = function(e) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function(A) {
    return sc.indexOf(A) === -1;
  }) : e;
}, ic = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this;
    return n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = r, n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px", n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), n;
  }
  return SA(A, e), A.prototype.render = function(t) {
    return hA(this, void 0, void 0, function() {
      var r, n;
      return gA(this, function(s) {
        switch (s.label) {
          case 0:
            return r = Nr(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, ac(r)];
          case 1:
            return n = s.sent(), this.options.backgroundColor && (this.ctx.fillStyle = sA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
        }
      });
    });
  }, A;
}(Eo), ac = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, Bc = function() {
  function e(A) {
    var t = A.id, r = A.enabled;
    this.id = t, this.enabled = r, this.start = Date.now();
  }
  return e.prototype.debug = function() {
    for (var A = [], t = 0; t < arguments.length; t++)
      A[t] = arguments[t];
    this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, ze([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
  }, e.prototype.getTime = function() {
    return Date.now() - this.start;
  }, e.prototype.info = function() {
    for (var A = [], t = 0; t < arguments.length; t++)
      A[t] = arguments[t];
    this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, ze([this.id, this.getTime() + "ms"], A));
  }, e.prototype.warn = function() {
    for (var A = [], t = 0; t < arguments.length; t++)
      A[t] = arguments[t];
    this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, ze([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
  }, e.prototype.error = function() {
    for (var A = [], t = 0; t < arguments.length; t++)
      A[t] = arguments[t];
    this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, ze([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
  }, e.instances = {}, e;
}(), cc = function() {
  function e(A, t) {
    var r;
    this.windowBounds = t, this.instanceName = "#" + e.instanceCount++, this.logger = new Bc({ id: this.instanceName, enabled: A.logging }), this.cache = (r = A.cache) !== null && r !== void 0 ? r : new PB(this, A);
  }
  return e.instanceCount = 1, e;
}();
typeof window < "u" && Uo.setContext(window);
var lc = function(e, A) {
  return hA(void 0, void 0, void 0, function() {
    var t, r, n, s, o, i, B, c, a, l, u, g, w, d, Q, C, p, y, F, U, b, I, H, k, $, lA, J, AA, nA, pA, oA, dA, EA, CA, HA, xA, TA, yA;
    return gA(this, function(FA) {
      switch (FA.label) {
        case 0:
          if (!e || typeof e != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (!(t = e.ownerDocument))
            throw new Error("Element is not attached to a Document");
          if (!(r = t.defaultView))
            throw new Error("Document is not attached to a Window");
          return n = { allowTaint: (I = A.allowTaint) !== null && I !== void 0 && I, imageTimeout: (H = A.imageTimeout) !== null && H !== void 0 ? H : 15e3, proxy: A.proxy, useCORS: (k = A.useCORS) !== null && k !== void 0 && k }, s = Kr({ logging: ($ = A.logging) === null || $ === void 0 || $, cache: A.cache }, n), o = { windowWidth: (lA = A.windowWidth) !== null && lA !== void 0 ? lA : r.innerWidth, windowHeight: (J = A.windowHeight) !== null && J !== void 0 ? J : r.innerHeight, scrollX: (AA = A.scrollX) !== null && AA !== void 0 ? AA : r.pageXOffset, scrollY: (nA = A.scrollY) !== null && nA !== void 0 ? nA : r.pageYOffset }, i = new $A(o.scrollX, o.scrollY, o.windowWidth, o.windowHeight), B = new cc(s, i), c = (pA = A.foreignObjectRendering) !== null && pA !== void 0 && pA, a = { allowTaint: (oA = A.allowTaint) !== null && oA !== void 0 && oA, onclone: A.onclone, ignoreElements: A.ignoreElements, inlineImages: c, copyStyles: c }, B.logger.debug("Starting document clone with size " + i.width + "x" + i.height + " scrolled to " + -i.left + "," + -i.top), l = new $n(B, e, a), (u = l.clonedReferenceElement) ? [4, l.toIFrame(t, i)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return g = FA.sent(), w = on(u) || u.tagName === "HTML" ? function(WA) {
            var q = WA.body, S = WA.documentElement;
            if (!q || !S)
              throw new Error("Unable to get document size");
            var T = Math.max(Math.max(q.scrollWidth, S.scrollWidth), Math.max(q.offsetWidth, S.offsetWidth), Math.max(q.clientWidth, S.clientWidth)), M = Math.max(Math.max(q.scrollHeight, S.scrollHeight), Math.max(q.offsetHeight, S.offsetHeight), Math.max(q.clientHeight, S.clientHeight));
            return new $A(0, 0, T, M);
          }(u.ownerDocument) : Yt(B, u), d = w.width, Q = w.height, C = w.left, p = w.top, y = uc(B, u, A.backgroundColor), F = { canvas: A.canvas, backgroundColor: y, scale: (EA = (dA = A.scale) !== null && dA !== void 0 ? dA : r.devicePixelRatio) !== null && EA !== void 0 ? EA : 1, x: ((CA = A.x) !== null && CA !== void 0 ? CA : 0) + C, y: ((HA = A.y) !== null && HA !== void 0 ? HA : 0) + p, width: (xA = A.width) !== null && xA !== void 0 ? xA : Math.ceil(d), height: (TA = A.height) !== null && TA !== void 0 ? TA : Math.ceil(Q) }, c ? (B.logger.debug("Document cloned, using foreign object rendering"), [4, new ic(B, F).render(u)]) : [3, 3];
        case 2:
          return U = FA.sent(), [3, 5];
        case 3:
          return B.logger.debug("Document cloned, element located at " + C + "," + p + " with size " + d + "x" + Q + " using computed rendering"), B.logger.debug("Starting DOM parsing"), b = co(B, u), y === b.styles.backgroundColor && (b.styles.backgroundColor = qA.TRANSPARENT), B.logger.debug("Starting renderer for element at " + F.x + "," + F.y + " with size " + F.width + "x" + F.height), [4, new ec(B, F).render(b)];
        case 4:
          U = FA.sent(), FA.label = 5;
        case 5:
          return ((yA = A.removeContainer) === null || yA === void 0 || yA) && ($n.destroy(g) || B.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), B.logger.debug("Finished rendering"), [2, U];
      }
    });
  });
}, uc = function(e, A, t) {
  var r = A.ownerDocument, n = r.documentElement ? Ve(e, getComputedStyle(r.documentElement).backgroundColor) : qA.TRANSPARENT, s = r.body ? Ve(e, getComputedStyle(r.body).backgroundColor) : qA.TRANSPARENT, o = typeof t == "string" ? Ve(e, t) : t === null ? qA.TRANSPARENT : 4294967295;
  return A === r.documentElement ? oe(n) ? oe(s) ? o : s : n : o;
};
class wc {
  async captureScreenshot() {
    const A = window.innerWidth, t = window.innerHeight, r = window.scrollX, n = window.scrollY;
    var s, o;
    return (s = document.body, o = { x: r, y: n, width: A, height: t, scrollX: 0, scrollY: 0 }, o === void 0 && (o = {}), lc(s, o)).then((i) => i);
  }
}
const Ho = async () => {
  await new wc().captureScreenshot().then((A) => {
    const t = document.createElement("img");
    t.src = A.toDataURL(), Os(t.src, mA.IMAGE);
  }).catch((A) => {
    console.error("Error capturing screenshot:", A);
  });
}, yo = () => {
  Xe(!1);
  let e = null;
  e = ((A, t) => {
    const r = document.createElement("img");
    r.src = A, r.setAttribute("draggable", "false");
    const n = document.createElement("button");
    return n.classList.add("shake-sdk-bubble"), n.appendChild(r), qo(n, t), n;
  })("data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20width='16px'%20height='16px'%20viewBox='0%200%2032%2032'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform='translate(-35.852326,-90.237974)'%3e%3cpath%20style='fill:%23ff0000'%20d='m%2067.852325,106.23797%20a%2016,16%200%200%201%20-16,16%2016,16%200%200%201%20-16,-16%2016,16%200%200%201%2016,-15.999997%2016,16%200%200%201%2016,15.999997%20z'/%3e%3c/g%3e%3c/svg%3e", () => (async (A = null) => {
    A == null || A.remove(), await Ho(), Ts();
  })(e)), document.body.appendChild(e);
}, gc = (e) => ((A, t) => {
  let r = !1;
  const n = x();
  return n.classList.add("shake-sdk-context-menu"), t.forEach((s) => n.appendChild(s)), document.addEventListener("click", function(s) {
    r && s.target !== A && (n.style.display = "none", r = !1);
  }), A.onclick = (s) => {
    s.stopPropagation(), r ? (n.style.display = "none", r = !1) : (n.style.display = "block", r = !0), n.style.left = A.getBoundingClientRect().left + "px", n.style.top = A.getBoundingClientRect().top + "px";
  }, n;
})(e, [Cn({ img: "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15055_29642)'%3e%3cpath%20d='M12.3994%208.47314C13.6969%209.77065%2013.6969%2011.8743%2012.3994%2013.1719C11.1019%2014.4694%208.99819%2014.4694%207.70068%2013.1719C6.40316%2011.8743%206.40316%209.77065%207.70068%208.47314C8.99819%207.17562%2011.1019%207.17562%2012.3994%208.47314Z'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.5%207.49992V14.9999C17.5%2015.9208%2016.7542%2016.6666%2015.8333%2016.6666H4.16667C3.24583%2016.6666%202.5%2015.9208%202.5%2014.9999V7.49992C2.5%206.57908%203.24583%205.83325%204.16667%205.83325H5.83333L7.05167%203.74659C7.20083%203.49075%207.475%203.33325%207.77167%203.33325H12.1917C12.4842%203.33325%2012.755%203.48659%2012.9058%203.73659L14.1667%205.83325H15.8333C16.7542%205.83325%2017.5%206.57908%2017.5%207.49992Z'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15055_29642'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", text: tA().shake_sdk_dialog_add_attachment_grab_screenshot, onClick: yo }), Cn({ img: "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15055_29718)'%3e%3cpath%20d='M10.9375%2014.7916H4.375C3.33917%2014.7916%202.5%2013.9524%202.5%2012.9166V7.08325C2.5%206.04742%203.33917%205.20825%204.375%205.20825H10.9375C11.9733%205.20825%2012.8125%206.04742%2012.8125%207.08325V12.9166C12.8125%2013.9524%2011.9733%2014.7916%2010.9375%2014.7916Z'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.8125%2010.9141L15.975%2013.4591C16.5883%2013.9533%2017.5%2013.5166%2017.5%2012.7291V7.27077C17.5%206.48327%2016.5883%206.04661%2015.975%206.54077L12.8125%209.08577'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15055_29718'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", text: tA().shake_sdk_dialog_add_attachment_record_screen, onClick: Ms })]), dc = ({ attachments: e, onAttachmentPreviewChanged: A }) => {
  const t = Y.attachmentsManager, r = /* @__PURE__ */ new Map();
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
    for (const g of u)
      g.classList.remove(l);
    a == null || a.classList.add(l), A(c);
  }, B = x();
  return B.classList.add("shake-sdk-attachments-items"), e.forEach((c) => {
    const a = ((l, u, g) => {
      const w = Je(Ss);
      let d;
      w.classList.add("shake-sdk-attachment-remove"), w.onclick = (U) => {
        U.stopPropagation(), g(l);
      }, d = l.type == mA.IMAGE ? _A(l.data) : Wt({ src: l.data + "#t=3", autoplay: !0 }), d.classList.add("shake-sdk-attachment-item-thumbnail");
      const Q = An();
      Q.classList.add("shake-sdk-attachment-item-card"), Q.appendChild(d), Q.appendChild(w);
      const C = l.type == mA.IMAGE ? tA().shake_sdk_dialog_add_attachment_type_image : tA().shake_sdk_dialog_add_attachment_type_video, p = Zo(C), y = x();
      y.classList.add("shake-sdk-attachment-item-title"), y.appendChild(p);
      const F = x();
      return F.classList.add("shake-sdk-attachment-item"), F.onclick = () => u(l), F.appendChild(Q), F.appendChild(y), F;
    })(c, s, o);
    r.set(c, a), B.appendChild(a);
  }), B.appendChild((() => {
    const c = Je(xs);
    c.classList.add("shake-sdk-attachment-add-button");
    const a = x();
    return a.classList.add("shake-sdk-attachments-add-item"), a.appendChild(c), a.appendChild(gc(c)), a;
  })()), i(), B;
}, hc = (e) => {
  const A = x();
  return A.classList.add("shake-sdk-attachments-preview"), e && (e.type == mA.IMAGE ? A.appendChild(((t) => {
    const r = _A(t), n = x();
    return n.classList.add("shake-sdk-image-preview"), n.appendChild(r), n;
  })(e.data)) : A.appendChild(((t) => {
    const r = Wt({ src: t, controls: !0, autoplay: !1 }), n = x();
    return n.classList.add("shake-sdk-video-preview"), n.appendChild(r), n;
  })(e.data))), A;
}, bo = (e, A) => {
  const t = Ks(e), r = document.createElement("div");
  r.classList.add("shake-sdk-sheet"), r.appendChild(t), A.forEach((s) => {
    r.appendChild(Qc(s, () => {
      s.onClick(), n.remove();
    }));
  });
  const n = document.createElement("div");
  return n.classList.add("shake-sdk-sheet-root"), n.appendChild(r), n.onclick = () => n.remove(), n;
}, Qc = (e, A) => {
  const t = _A(e.icon), r = ((s) => {
    const o = document.createElement("p");
    return o.classList.add("shake-sdk-text-p1"), o.innerText = s, o;
  })(e.text), n = document.createElement("button");
  return n.classList.add("shake-sdk-sheet-item"), n.onclick = A, n.appendChild(t), n.appendChild(r), n;
}, Io = (e) => {
  document.body.appendChild(e);
}, Cc = ({ label: e, items: A, onSelectionChange: t, selectedValue: r }) => {
  const n = x(), s = x();
  s.classList.add("shake-sdk-select-dropdown");
  const o = _A("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='caret-down-icon'%20clip-path='url(%23clip0_15248_22126)'%3e%3cpath%20id='Vector'%20d='M8%2010L12%2014L16%2010'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15248_22126'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  o.classList.add("shake-sdk-dropdown-icon"), s.appendChild(o);
  const i = document.createElement("label");
  i.textContent = e, i.classList.add("shake-sdk-select-dropdown-label");
  const B = x();
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
    window.innerWidth > 1024 ? (c.style.display = c.style.display === "block" ? "none" : "block", c.style.display === "block" ? s.classList.add("active") : s.classList.remove("active")) : Io(((l, u, g) => {
      const w = [];
      return u.forEach((d) => {
        w.push({ text: d.label, icon: d.icon, onClick: () => {
          g(d);
        } });
      }), bo(l, w);
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
}, Pt = ({ image: e, onClick: A }) => {
  const t = _A(e), r = document.createElement("button");
  return r.classList.add("shake-sdk-toolbar-button"), r.onclick = A, r.appendChild(t), r;
}, vo = "data:image/svg+xml,%3csvg%20width='50'%20height='51'%20viewBox='0%200%2050%2051'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.834%2021.5598L29.1673%2029.8931'%20stroke='%23FFFFFF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M29.1673%2021.56L20.834%2029.8933'%20stroke='%23FFFFFF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Uc = (e) => {
  document.body.appendChild(((A) => {
    const t = Pt({ image: vo, onClick: () => {
      o.remove();
    } }), r = x();
    r.classList.add("shake-sdk-image-preview-toolbar-fs"), r.appendChild(t);
    const n = _A(A);
    n.classList.add("shake-sdk-image-preview-fs");
    const s = x();
    s.classList.add("shake-sdk-image-preview-content-fs"), s.appendChild(n);
    const o = x();
    return o.classList.add("shake-sdk-image-preview-root-fs"), o.appendChild(r), o.appendChild(s), o;
  })(e.data));
}, pc = (e) => {
  document.body.appendChild(((A) => {
    const t = Pt({ image: vo, onClick: () => {
      s.remove();
    } }), r = x();
    r.classList.add("shake-sdk-video-preview-toolbar-fs"), r.appendChild(t);
    const n = Wt({ src: A, controls: !0, autoplay: !0 });
    n.classList.add("shake-sdk-video-preview-fs");
    const s = x();
    return s.classList.add("shake-sdk-video-preview-root-fs"), s.appendChild(r), s.appendChild(n), s;
  })(e.data));
}, Fc = (e) => {
  const A = Y.attachmentsManager, t = /* @__PURE__ */ new Map(), r = (i) => {
    i.type == mA.IMAGE ? Uc(i) : i.type == mA.VIDEO && pc(i);
  }, n = (i) => {
    A.removeAttachment(i);
  };
  A.removeObservers.push((i) => {
    const B = t.get(i);
    B == null || B.remove(), t.delete(i);
  });
  const s = x();
  s.classList.add("shake-sdk-attachments-items-small"), e.forEach((i) => {
    const B = ((c, a, l) => {
      const u = Je(Ss);
      u.classList.add("shake-sdk-attachment-item-remove-small"), u.onclick = (d) => {
        d.stopPropagation(), l(c);
      };
      const g = c.type == mA.IMAGE ? _A(c.data) : Wt({ src: c.data + "#t=3", autoplay: !0 });
      g.classList.add("shake-sdk-attachment-item-thumbnail-small"), g.onclick = () => a(c);
      const w = x();
      return w.classList.add("shake-sdk-attachment-item-small"), w.appendChild(g), w.appendChild(u), w;
    })(i, r, n);
    t.set(i, B), s.appendChild(B);
  });
  const o = ((i) => {
    const B = Je(xs);
    B.classList.add("shake-sdk-attachment-add-button-small"), B.onclick = i;
    const c = x();
    return c.classList.add("shake-sdk-attachments-add-item-small"), c.appendChild(B), c;
  })(() => {
    Io((() => {
      const i = [{ text: tA().shake_sdk_dialog_add_attachment_grab_screenshot, icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%20viewportWidth='54'%20viewportHeight='54'%3e%3cpath%20fill='%2300000000'%20fill-rule='evenOdd'%20d='M13.5,6.75h-2.25c-2.485,0%20-4.5,2.015%20-4.5,4.5v2.25M40.5,47.25h2.25c2.485,0%204.5,-2.015%204.5,-4.5V40.5M6.75,40.5v2.25c0,2.485%202.015,4.5%204.5,4.5h2.25M47.25,13.5v-2.25c0,-2.485%20-2.015,-4.5%20-4.5,-4.5H40.5'%20stroke-width='3.38'%20stroke='%234CD266'%20strokeLineCap='round'%20strokeLineJoin='round'/%3e%3c/svg%3e", onClick: yo }, { text: tA().shake_sdk_dialog_add_attachment_record_screen, icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%20viewportWidth='54'%20viewportHeight='54'%3e%3cpath%20fill='%2300000000'%20fill-rule='evenOdd'%20d='M37.487,32.702L32.57,29.67v-5.342l4.918,-3.03c0.382,-0.236%200.861,-0.247%201.253,-0.028%200.392,0.218%200.635,0.632%200.635,1.08v9.297c0,0.45%20-0.243,0.863%20-0.635,1.081%20-0.392,0.219%20-0.871,0.208%20-1.253,-0.027z'%20stroke-width='3.375'%20stroke='%23FF9C0A'%20strokeLineCap='round'%20strokeLineJoin='round'/%3e%3cpath%20fill='%2300000000'%20fill-rule='evenOdd'%20d='M16.275,18.956L30.919,18.956A1.65,1.65%200,0%201,32.569%2020.606L32.569,33.393A1.65,1.65%200,0%201,30.919%2035.043L16.275,35.043A1.65,1.65%200,0%201,14.625%2033.393L14.625,20.606A1.65,1.65%200,0%201,16.275%2018.956z'%20stroke-width='3.375'%20stroke='%23FF9C0A'%20strokeLineCap='round'%20strokeLineJoin='round'/%3e%3cpath%20fill='%2300000000'%20fill-rule='evenOdd'%20d='M11.75,6.75L42.25,6.75A5,5%200,0%201,47.25%2011.75L47.25,42.25A5,5%200,0%201,42.25%2047.25L11.75,47.25A5,5%200,0%201,6.75%2042.25L6.75,11.75A5,5%200,0%201,11.75%206.75z'%20stroke-width='3.375'%20stroke='%23FF9C0A'%20strokeLineCap='round'%20strokeLineJoin='round'/%3e%3c/svg%3e", onClick: Ms }];
      return bo(tA().shake_sdk_dialog_add_attachment, i);
    })());
  });
  return s.appendChild(o), s;
}, fc = [{ icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%20viewportWidth='54'%20viewportHeight='54'%3e%3cpath%20fill='%2300000000'%20fill-rule='evenOdd'%20d='m40.5,15.75%20l-2.25,4.5%20-3,2.063M11.25,27h6.997M35.752,27h6.998M13.5,6.75h-2.25a4.499,4.499%200,0%200,-4.5%204.5v2.25M40.5,47.25h2.25c2.486,0%204.5,-2.014%204.5,-4.5V40.5M6.75,40.5v2.25c0,2.486%202.014,4.5%204.5,4.5h2.25M47.25,13.5v-2.25c0,-2.486%20-2.014,-4.5%20-4.5,-4.5H40.5M13.5,15.75l2.25,4.5%203,2.063M27.999,38.25h-2a6.75,6.75%200,0%201,-6.75%20-6.75v-6.75c0,-2.486%202.014,-4.5%204.5,-4.5h6.5c2.486,0%204.5,2.014%204.5,4.5v6.75a6.75,6.75%200,0%201,-6.75%206.75zM13.5,38.25l2.25,-4.5%203,-2.063M40.5,38.25l-2.25,-4.5%20-3,-2.063M31.5,20.25h-9v-4.5a2.25,2.25%200,0%201,2.25%20-2.25h4.5a2.25,2.25%200,0%201,2.25%202.25v4.5z'%20stroke-width='3.38'%20stroke='%23B77DFF'%20strokeLineCap='round'%20strokeLineJoin='round'/%3e%3c/svg%3e", value: Re.BUG, label: tA().shake_sdk_new_ticket_feedback_type_bug }, { icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%20viewportWidth='54'%20viewportHeight='54'%3e%3cpath%20fill='%2300000000'%20fill-rule='evenOdd'%20d='M42.75,47.25h-31.5a4.499,4.499%200,0%201,-4.5%20-4.5v-31.5c0,-2.486%202.014,-4.5%204.5,-4.5h31.5c2.486,0%204.5,2.014%204.5,4.5v31.5c0,2.486%20-2.014,4.5%20-4.5,4.5z'%20stroke-width='3.38'%20stroke='%23FF9F0A'%20strokeLineCap='round'%20strokeLineJoin='round'/%3e%3cpath%20fill='%2300000000'%20fill-rule='evenOdd'%20d='M27,29.813v-0.563c0,-1.838%201.136,-2.835%202.275,-3.6%201.111,-0.75%202.225,-1.726%202.225,-3.526%200,-2.486%20-2.014,-4.5%20-4.5,-4.5a4.499,4.499%200,0%200,-4.5%204.5M26.998,36a0.563,0.563%200,1%200,0.005%201.125,0.563%200.563,0%200,0%20-0.005,-1.125'%20stroke-width='3.38'%20stroke='%23FF9F0A'%20strokeLineCap='round'%20strokeLineJoin='round'/%3e%3c/svg%3e", value: Re.QUESTION, label: tA().shake_sdk_new_ticket_feedback_type_question }, { icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%20viewportWidth='54'%20viewportHeight='54'%3e%3cpath%20fill='%2300000000'%20fill-rule='evenOdd'%20d='M31.275,47.25h0a20.507,20.507%200,0%200,15.417%20-15.417M38.25,22.5V9M31.5,15.75H45M6.75,22.725h0A20.504,20.504%200,0%201,22.167%207.304M22.167,47.25h0A20.511,20.511%200,0%201,6.75%2031.833'%20stroke-width='3.38'%20stroke='%23D75ED7'%20strokeLineCap='round'%20strokeLineJoin='round'/%3e%3c/svg%3e", value: Re.SUGGESTION, label: tA().shake_sdk_new_ticket_feedback_type_suggestion }], mc = (e) => {
  let A = e.feedbackType, t = e.description, r = !0, n = !1;
  const s = An();
  s.classList.add("shake-sdk-new-ticket");
  const o = x();
  o.classList.add("shake-sdk-new-ticket-form");
  const i = ((d = Xe, Q = !1, C = () => {
  }) => {
    const p = Pt({ image: yr, onClick: () => C() }), y = Pt({ image: yr, onClick: d }), F = document.createElement("div");
    return F.classList.add("shake-sdk-toolbar"), Q && F.appendChild(p), F.appendChild(y), F;
  })();
  i.classList.add("shake-sdk-new-ticket-toolbar");
  const B = Ks(tA().shake_sdk_ticket_form_title);
  B.classList.add("shake-sdk-new-ticket-title"), s.appendChild(B);
  const c = Ls();
  function a() {
    r = !t.trim() || n, c.disabled = r, l.textContent = n ? tA().shake_sdk_ticket_form_submit_button_text_loading : tA().shake_sdk_ticket_form_submit_button_text;
  }
  c.disabled = !0, c.onclick = async () => {
    n = !0, a(), await async function({ feedbackType: d, description: Q }) {
      const C = Y.data.getShakeState() ?? new Lt(), p = je.shakeFeedbackService;
      let y, F, U = [];
      if (C.attachments.length) {
        const b = C.attachments.find((k) => k.type === mA.IMAGE);
        y = await p.getFirstByType(b);
        const I = C.attachments.find((k) => k.type === mA.VIDEO);
        F = await p.getFirstByType(I);
        const H = await p.convertAttachmentsToFiles(C.attachments.filter((k) => k.data !== (b == null ? void 0 : b.data) && k.data !== (I == null ? void 0 : I.data)).slice(0, 9)) ?? [];
        U = await p.sendFiles(H) ?? [];
      }
      await p.sendUserFeedback(d, Q, y, F, U), Xe();
    }({ feedbackType: A, description: t }), n = !1;
  }, c.classList.add("shake-sdk-submit-button");
  const l = ks(tA().shake_sdk_ticket_form_submit_button_text);
  c.appendChild(l);
  const u = Cc({ label: tA().shake_sdk_new_ticket_feedback_type_title, items: fc, onSelectionChange: (d) => {
    A = d, e.feedbackType = d, Y.data.setShakeState(e);
  }, selectedValue: A });
  o.appendChild(i), o.appendChild(B), o.appendChild(u);
  const g = (({ onChange: d, maxLength: Q, value: C, label: p }) => {
    const y = x();
    y.classList.add("shake-sdk-textarea-container");
    const F = document.createElement("label");
    F.textContent = p, F.classList.add("shake-sdk-textarea-label");
    const U = document.createElement("textarea");
    return U.classList.add("shake-sdk-textarea"), U.rows = 12, U.textContent = C || null, U.addEventListener("input", function(b) {
      let I = b.target.value;
      Q && I.length > Q && (I = I.slice(0, Q), b.target.value = I), d(b.target.value);
    }), y.appendChild(F), y.appendChild(U), y;
  })({ onChange: (d) => {
    t = d, e.description = d, Y.data.setShakeState(e), a();
  }, maxLength: 1e4, value: t, label: tA().shake_sdk_ticket_form_description_placeholder });
  g.classList.add("shake-sdk-styled-textarea"), o.appendChild(g);
  const w = Fc(e.attachments);
  return o.appendChild(w), s.appendChild(o), s.appendChild(c), s;
}, Lo = (e) => {
  const A = Je(yr);
  A.classList.add("shake-sdk-close-button"), A.onclick = () => Xe(!0);
  const t = ((B) => {
    const c = An(), a = x();
    a.classList.add("shake-sdk-attachments-preview-wrap");
    const l = dc({ attachments: B, onAttachmentPreviewChanged: (g) => {
      a.innerText = "", a.appendChild(hc(g));
    } }), u = x();
    return u.classList.add("shake-sdk-attachments-list-wrap"), u.appendChild(l), c.classList.add("shake-sdk-attachments-card"), c.appendChild(u), c.appendChild(a), c;
  })(e.attachments), r = x();
  r.classList.add("shake-sdk-content-left"), r.appendChild(A), r.appendChild(t);
  const n = mc(e), s = x();
  s.classList.add("shake-sdk-content-right"), s.appendChild(n);
  const o = x();
  o.classList.add("shake-sdk-content"), o.appendChild(r), o.appendChild(s);
  const i = x();
  return i.id = "shake-sdk-root", i.appendChild(o), i;
}, an = "shake-sdk-main-button", Ec = () => {
  const e = Ls();
  e.id = an;
  const A = _A("data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14931_603)'%3e%3cpath%20d='M8.19434%2012.6212C10.9278%2015.3547%2014.6693%2016.0477%2016.5462%2014.1682C18.1282%2012.5862%2017.8823%209.68817%2016.1367%207.18042'%20stroke='%23B77DFF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.8599%204.82319C10.5725%202.29444%206.46177%201.97857%204.1719%204.26844C1.60902%206.83132%202.30202%2011.6788%205.7189%2015.0957C7.21501%2016.6164%209.06436%2017.7431%2011.1019%2018.3752'%20stroke='%23B77DFF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.8666%2010.8501L12.5002%2010.5228C12.7364%2010.4764%2012.9537%2010.3613%2013.1249%2010.1921L17.8954%205.42507C18.535%204.78514%2018.535%203.74801%2017.8954%203.10807C17.2555%202.46853%2016.2184%202.46853%2015.5784%203.10807L10.8079%207.87507C10.6374%208.04585%2010.5211%208.2632%2010.4737%208.49982L10.1499%2010.1334C10.0864%2010.4657%2010.3043%2010.7865%2010.6365%2010.8501C10.7125%2010.8646%2010.7906%2010.8646%2010.8666%2010.8501Z'%20stroke='%23880FFF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14931_603'%3e%3crect%20width='21'%20height='21'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  A.alt = "Send feedback icon", A.classList.add("shake-sdk-main-button-icon");
  const t = ks(tA().shake_sdk_main_button_title);
  return t.classList.add("shake-sdk-main-button-text"), e.appendChild(A), e.appendChild(t), e.addEventListener("mousedown", (r) => {
    r.stopPropagation(), r.preventDefault(), (async () => {
      const n = Y.data;
      je.shakeAuthService.authenticate(vt.clientId, vt.clientSecret), yc(), n.getShakeState() || n.setShakeState(new Lt()), await Ho();
      const s = Lo(n.getShakeState() ?? new Lt());
      document.body.appendChild(s), n.setShakeOpened(!0);
    })();
  }), e;
}, Hc = () => {
  const e = document.getElementById(an);
  e && (e.style.display = "flex");
}, yc = () => {
  const e = document.getElementById(an);
  e && (e.style.display = "none");
}, jr = "0.1.0";
function Ko(e, A) {
  return function() {
    return e.apply(A, arguments);
  };
}
const { toString: bc } = Object.prototype, { getPrototypeOf: Bn } = Object, Nt = (gr = /* @__PURE__ */ Object.create(null), (e) => {
  const A = bc.call(e);
  return gr[A] || (gr[A] = A.slice(8, -1).toLowerCase());
});
var gr;
const XA = (e) => (e = e.toLowerCase(), (A) => Nt(A) === e), tr = (e) => (A) => typeof A === e, { isArray: Fe } = Array, Oe = tr("undefined"), ss = XA("ArrayBuffer"), Ic = tr("string"), bA = tr("function"), os = tr("number"), Qt = (e) => e !== null && typeof e == "object", Ct = (e) => {
  if (Nt(e) !== "object")
    return !1;
  const A = Bn(e);
  return !(A !== null && A !== Object.prototype && Object.getPrototypeOf(A) !== null || Symbol.toStringTag in e || Symbol.iterator in e);
}, vc = XA("Date"), Lc = XA("File"), Kc = XA("Blob"), kc = XA("FileList"), Dc = XA("URLSearchParams");
function Me(e, A, { allOwnKeys: t = !1 } = {}) {
  if (e == null)
    return;
  let r, n;
  if (typeof e != "object" && (e = [e]), Fe(e))
    for (r = 0, n = e.length; r < n; r++)
      A.call(null, e[r], r, e);
  else {
    const s = t ? Object.getOwnPropertyNames(e) : Object.keys(e), o = s.length;
    let i;
    for (r = 0; r < o; r++)
      i = s[r], A.call(null, e[i], i, e);
  }
}
function is(e, A) {
  A = A.toLowerCase();
  const t = Object.keys(e);
  let r, n = t.length;
  for (; n-- > 0; )
    if (r = t[n], A === r.toLowerCase())
      return r;
  return null;
}
const ko = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, as = (e) => !Oe(e) && e !== ko, Sc = (dr = typeof Uint8Array < "u" && Bn(Uint8Array), (e) => dr && e instanceof dr);
var dr;
const xc = XA("HTMLFormElement"), Bs = (({ hasOwnProperty: e }) => (A, t) => e.call(A, t))(Object.prototype), Tc = XA("RegExp"), cs = (e, A) => {
  const t = Object.getOwnPropertyDescriptors(e), r = {};
  Me(t, (n, s) => {
    let o;
    (o = A(n, s, e)) !== !1 && (r[s] = o || n);
  }), Object.defineProperties(e, r);
}, hr = "abcdefghijklmnopqrstuvwxyz", ls = "0123456789", us = { DIGIT: ls, ALPHA: hr, ALPHA_DIGIT: hr + hr.toUpperCase() + ls }, Oc = XA("AsyncFunction"), h = { isArray: Fe, isArrayBuffer: ss, isBuffer: function(e) {
  return e !== null && !Oe(e) && e.constructor !== null && !Oe(e.constructor) && bA(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}, isFormData: (e) => {
  let A;
  return e && (typeof FormData == "function" && e instanceof FormData || bA(e.append) && ((A = Nt(e)) === "formdata" || A === "object" && bA(e.toString) && e.toString() === "[object FormData]"));
}, isArrayBufferView: function(e) {
  let A;
  return A = typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && ss(e.buffer), A;
}, isString: Ic, isNumber: os, isBoolean: (e) => e === !0 || e === !1, isObject: Qt, isPlainObject: Ct, isUndefined: Oe, isDate: vc, isFile: Lc, isBlob: Kc, isRegExp: Tc, isFunction: bA, isStream: (e) => Qt(e) && bA(e.pipe), isURLSearchParams: Dc, isTypedArray: Sc, isFileList: kc, forEach: Me, merge: function e() {
  const { caseless: A } = as(this) && this || {}, t = {}, r = (n, s) => {
    const o = A && is(t, s) || s;
    Ct(t[o]) && Ct(n) ? t[o] = e(t[o], n) : Ct(n) ? t[o] = e({}, n) : Fe(n) ? t[o] = n.slice() : t[o] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && Me(arguments[n], r);
  return t;
}, extend: (e, A, t, { allOwnKeys: r } = {}) => (Me(A, (n, s) => {
  t && bA(n) ? e[s] = Ko(n, t) : e[s] = n;
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
    e = t !== !1 && Bn(e);
  } while (e && (!t || t(e, A)) && e !== Object.prototype);
  return A;
}, kindOf: Nt, kindOfTest: XA, endsWith: (e, A, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= A.length;
  const r = e.indexOf(A, t);
  return r !== -1 && r === t;
}, toArray: (e) => {
  if (!e)
    return null;
  if (Fe(e))
    return e;
  let A = e.length;
  if (!os(A))
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
}, isHTMLForm: xc, hasOwnProperty: Bs, hasOwnProp: Bs, reduceDescriptors: cs, freezeMethods: (e) => {
  cs(e, (A, t) => {
    if (bA(e) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const r = e[t];
    bA(r) && (A.enumerable = !1, "writable" in A ? A.writable = !1 : A.set || (A.set = () => {
      throw Error("Can not rewrite read-only method '" + t + "'");
    }));
  });
}, toObjectSet: (e, A) => {
  const t = {}, r = (n) => {
    n.forEach((s) => {
      t[s] = !0;
    });
  };
  return Fe(e) ? r(e) : r(String(e).split(A)), t;
}, toCamelCase: (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(A, t, r) {
  return t.toUpperCase() + r;
}), noop: () => {
}, toFiniteNumber: (e, A) => (e = +e, Number.isFinite(e) ? e : A), findKey: is, global: ko, isContextDefined: as, ALPHABET: us, generateString: (e = 16, A = us.ALPHA_DIGIT) => {
  let t = "";
  const { length: r } = A;
  for (; e--; )
    t += A[Math.random() * r | 0];
  return t;
}, isSpecCompliantForm: function(e) {
  return !!(e && bA(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}, toJSONObject: (e) => {
  const A = new Array(10), t = (r, n) => {
    if (Qt(r)) {
      if (A.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        A[n] = r;
        const s = Fe(r) ? [] : {};
        return Me(r, (o, i) => {
          const B = t(o, n + 1);
          !Oe(B) && (s[i] = B);
        }), A[n] = void 0, s;
      }
    }
    return r;
  };
  return t(e, 0);
}, isAsyncFn: Oc, isThenable: (e) => e && (Qt(e) || bA(e)) && bA(e.then) && bA(e.catch) };
function D(e, A, t, r, n) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", A && (this.code = A), t && (this.config = t), r && (this.request = r), n && (this.response = n);
}
h.inherits(D, Error, { toJSON: function() {
  return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: h.toJSONObject(this.config), code: this.code, status: this.response && this.response.status ? this.response.status : null };
} });
const ws = D.prototype, gs = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e) => {
  gs[e] = { value: e };
}), Object.defineProperties(D, gs), Object.defineProperty(ws, "isAxiosError", { value: !0 }), D.from = (e, A, t, r, n, s) => {
  const o = Object.create(ws);
  return h.toFlatObject(e, o, function(i) {
    return i !== Error.prototype;
  }, (i) => i !== "isAxiosError"), D.call(o, e.message, A, t, r, n), o.cause = e, o.name = e.name, s && Object.assign(o, s), o;
};
function Qr(e) {
  return h.isPlainObject(e) || h.isArray(e);
}
function Do(e) {
  return h.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ds(e, A, t) {
  return e ? e.concat(A).map(function(r, n) {
    return r = Do(r), !t && n ? "[" + r + "]" : r;
  }).join(t ? "." : "") : A;
}
const Mc = h.toFlatObject(h, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function _t(e, A, t) {
  if (!h.isObject(e))
    throw new TypeError("target must be an object");
  A = A || new FormData();
  const r = (t = h.toFlatObject(t, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function(u, g) {
    return !h.isUndefined(g[u]);
  })).metaTokens, n = t.visitor || c, s = t.dots, o = t.indexes, i = (t.Blob || typeof Blob < "u" && Blob) && h.isSpecCompliantForm(A);
  if (!h.isFunction(n))
    throw new TypeError("visitor must be a function");
  function B(u) {
    if (u === null)
      return "";
    if (h.isDate(u))
      return u.toISOString();
    if (!i && h.isBlob(u))
      throw new D("Blob is not supported. Use a Buffer instead.");
    return h.isArrayBuffer(u) || h.isTypedArray(u) ? i && typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function c(u, g, w) {
    let d = u;
    if (u && !w && typeof u == "object") {
      if (h.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), u = JSON.stringify(u);
      else if (h.isArray(u) && function(Q) {
        return h.isArray(Q) && !Q.some(Qr);
      }(u) || (h.isFileList(u) || h.endsWith(g, "[]")) && (d = h.toArray(u)))
        return g = Do(g), d.forEach(function(Q, C) {
          !h.isUndefined(Q) && Q !== null && A.append(o === !0 ? ds([g], C, s) : o === null ? g : g + "[]", B(Q));
        }), !1;
    }
    return !!Qr(u) || (A.append(ds(w, g, s), B(u)), !1);
  }
  const a = [], l = Object.assign(Mc, { defaultVisitor: c, convertValue: B, isVisitable: Qr });
  if (!h.isObject(e))
    throw new TypeError("data must be an object");
  return function u(g, w) {
    if (!h.isUndefined(g)) {
      if (a.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      a.push(g), h.forEach(g, function(d, Q) {
        (!(h.isUndefined(d) || d === null) && n.call(A, d, h.isString(Q) ? Q.trim() : Q, w, l)) === !0 && u(d, w ? w.concat(Q) : [Q]);
      }), a.pop();
    }
  }(e), A;
}
function hs(e) {
  const A = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(t) {
    return A[t];
  });
}
function cn(e, A) {
  this._pairs = [], e && _t(e, this, A);
}
const Qs = cn.prototype;
function Rc(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function So(e, A, t) {
  if (!A)
    return e;
  const r = t && t.encode || Rc, n = t && t.serialize;
  let s;
  if (s = n ? n(A, t) : h.isURLSearchParams(A) ? A.toString() : new cn(A, t).toString(r), s) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
Qs.append = function(e, A) {
  this._pairs.push([e, A]);
}, Qs.toString = function(e) {
  const A = e ? function(t) {
    return e.call(this, t, hs);
  } : hs;
  return this._pairs.map(function(t) {
    return A(t[0]) + "=" + A(t[1]);
  }, "").join("&");
};
class Cs {
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
    h.forEach(this.handlers, function(t) {
      t !== null && A(t);
    });
  }
}
const xo = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 }, Gc = { isBrowser: !0, classes: { URLSearchParams: typeof URLSearchParams < "u" ? URLSearchParams : cn, FormData: typeof FormData < "u" ? FormData : null, Blob: typeof Blob < "u" ? Blob : null }, protocols: ["http", "https", "file", "blob", "url", "data"] }, To = typeof window < "u" && typeof document < "u", Vc = (Us = typeof navigator < "u" && navigator.product, To && ["ReactNative", "NativeScript", "NS"].indexOf(Us) < 0);
var Us;
const Pc = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", PA = { ...Object.freeze(Object.defineProperty({ __proto__: null, hasBrowserEnv: To, hasStandardBrowserEnv: Vc, hasStandardBrowserWebWorkerEnv: Pc }, Symbol.toStringTag, { value: "Module" })), ...Gc };
function Oo(e) {
  function A(t, r, n, s) {
    let o = t[s++];
    if (o === "__proto__")
      return !0;
    const i = Number.isFinite(+o), B = s >= t.length;
    return o = !o && h.isArray(n) ? n.length : o, B ? (h.hasOwnProp(n, o) ? n[o] = [n[o], r] : n[o] = r, !i) : (n[o] && h.isObject(n[o]) || (n[o] = []), A(t, r, n[o], s) && h.isArray(n[o]) && (n[o] = function(c) {
      const a = {}, l = Object.keys(c);
      let u;
      const g = l.length;
      let w;
      for (u = 0; u < g; u++)
        w = l[u], a[w] = c[w];
      return a;
    }(n[o])), !i);
  }
  if (h.isFormData(e) && h.isFunction(e.entries)) {
    const t = {};
    return h.forEachEntry(e, (r, n) => {
      A(function(s) {
        return h.matchAll(/\w+|\[(\w*)]/g, s).map((o) => o[0] === "[]" ? "" : o[1] || o[0]);
      }(r), n, t, 0);
    }), t;
  }
  return null;
}
const ln = { transitional: xo, adapter: ["xhr", "http"], transformRequest: [function(e, A) {
  const t = A.getContentType() || "", r = t.indexOf("application/json") > -1, n = h.isObject(e);
  if (n && h.isHTMLForm(e) && (e = new FormData(e)), h.isFormData(e))
    return r ? JSON.stringify(Oo(e)) : e;
  if (h.isArrayBuffer(e) || h.isBuffer(e) || h.isStream(e) || h.isFile(e) || h.isBlob(e))
    return e;
  if (h.isArrayBufferView(e))
    return e.buffer;
  if (h.isURLSearchParams(e))
    return A.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
  let s;
  if (n) {
    if (t.indexOf("application/x-www-form-urlencoded") > -1)
      return function(o, i) {
        return _t(o, new PA.classes.URLSearchParams(), Object.assign({ visitor: function(B, c, a, l) {
          return PA.isNode && h.isBuffer(B) ? (this.append(c, B.toString("base64")), !1) : l.defaultVisitor.apply(this, arguments);
        } }, i));
      }(e, this.formSerializer).toString();
    if ((s = h.isFileList(e)) || t.indexOf("multipart/form-data") > -1) {
      const o = this.env && this.env.FormData;
      return _t(s ? { "files[]": e } : e, o && new o(), this.formSerializer);
    }
  }
  return n || r ? (A.setContentType("application/json", !1), function(o, i, B) {
    if (h.isString(o))
      try {
        return (i || JSON.parse)(o), h.trim(o);
      } catch (c) {
        if (c.name !== "SyntaxError")
          throw c;
      }
    return (B || JSON.stringify)(o);
  }(e)) : e;
}], transformResponse: [function(e) {
  const A = this.transitional || ln.transitional, t = A && A.forcedJSONParsing, r = this.responseType === "json";
  if (e && h.isString(e) && (t && !this.responseType || r)) {
    const n = !(A && A.silentJSONParsing) && r;
    try {
      return JSON.parse(e);
    } catch (s) {
      if (n)
        throw s.name === "SyntaxError" ? D.from(s, D.ERR_BAD_RESPONSE, this, null, this.response) : s;
    }
  }
  return e;
}], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: PA.classes.FormData, Blob: PA.classes.Blob }, validateStatus: function(e) {
  return e >= 200 && e < 300;
}, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
h.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ln.headers[e] = {};
});
const un = ln, Nc = h.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]), ps = Symbol("internals");
function ve(e) {
  return e && String(e).trim().toLowerCase();
}
function Et(e) {
  return e === !1 || e == null ? e : h.isArray(e) ? e.map(Et) : String(e);
}
function Cr(e, A, t, r, n) {
  return h.isFunction(r) ? r.call(this, A, t) : (n && (A = t), h.isString(A) ? h.isString(r) ? A.indexOf(r) !== -1 : h.isRegExp(r) ? r.test(A) : void 0 : void 0);
}
class Ht {
  constructor(A) {
    A && this.set(A);
  }
  set(A, t, r) {
    const n = this;
    function s(i, B, c) {
      const a = ve(B);
      if (!a)
        throw new Error("header name must be a non-empty string");
      const l = h.findKey(n, a);
      (!l || n[l] === void 0 || c === !0 || c === void 0 && n[l] !== !1) && (n[l || B] = Et(i));
    }
    const o = (i, B) => h.forEach(i, (c, a) => s(c, a, B));
    return h.isPlainObject(A) || A instanceof this.constructor ? o(A, t) : h.isString(A) && (A = A.trim()) && !((i) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim()))(A) ? o(((i) => {
      const B = {};
      let c, a, l;
      return i && i.split(`
`).forEach(function(u) {
        l = u.indexOf(":"), c = u.substring(0, l).trim().toLowerCase(), a = u.substring(l + 1).trim(), !c || B[c] && Nc[c] || (c === "set-cookie" ? B[c] ? B[c].push(a) : B[c] = [a] : B[c] = B[c] ? B[c] + ", " + a : a);
      }), B;
    })(A), t) : A != null && s(t, A, r), this;
  }
  get(A, t) {
    if (A = ve(A)) {
      const r = h.findKey(this, A);
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
        if (h.isFunction(t))
          return t.call(this, n, r);
        if (h.isRegExp(t))
          return t.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(A, t) {
    if (A = ve(A)) {
      const r = h.findKey(this, A);
      return !(!r || this[r] === void 0 || t && !Cr(0, this[r], r, t));
    }
    return !1;
  }
  delete(A, t) {
    const r = this;
    let n = !1;
    function s(o) {
      if (o = ve(o)) {
        const i = h.findKey(r, o);
        !i || t && !Cr(0, r[i], i, t) || (delete r[i], n = !0);
      }
    }
    return h.isArray(A) ? A.forEach(s) : s(A), n;
  }
  clear(A) {
    const t = Object.keys(this);
    let r = t.length, n = !1;
    for (; r--; ) {
      const s = t[r];
      A && !Cr(0, this[s], s, A, !0) || (delete this[s], n = !0);
    }
    return n;
  }
  normalize(A) {
    const t = this, r = {};
    return h.forEach(this, (n, s) => {
      const o = h.findKey(r, s);
      if (o)
        return t[o] = Et(n), void delete t[s];
      const i = A ? function(B) {
        return B.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (c, a, l) => a.toUpperCase() + l);
      }(s) : String(s).trim();
      i !== s && delete t[s], t[i] = Et(n), r[i] = !0;
    }), this;
  }
  concat(...A) {
    return this.constructor.concat(this, ...A);
  }
  toJSON(A) {
    const t = /* @__PURE__ */ Object.create(null);
    return h.forEach(this, (r, n) => {
      r != null && r !== !1 && (t[n] = A && h.isArray(r) ? r.join(", ") : r);
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
    const t = (this[ps] = this[ps] = { accessors: {} }).accessors, r = this.prototype;
    function n(s) {
      const o = ve(s);
      t[o] || (function(i, B) {
        const c = h.toCamelCase(" " + B);
        ["get", "set", "has"].forEach((a) => {
          Object.defineProperty(i, a + c, { value: function(l, u, g) {
            return this[a].call(this, B, l, u, g);
          }, configurable: !0 });
        });
      }(r, s), t[o] = !0);
    }
    return h.isArray(A) ? A.forEach(n) : n(A), this;
  }
}
Ht.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), h.reduceDescriptors(Ht.prototype, ({ value: e }, A) => {
  let t = A[0].toUpperCase() + A.slice(1);
  return { get: () => e, set(r) {
    this[t] = r;
  } };
}), h.freezeMethods(Ht);
const zA = Ht;
function Ur(e, A) {
  const t = this || un, r = A || t, n = zA.from(r.headers);
  let s = r.data;
  return h.forEach(e, function(o) {
    s = o.call(t, s, n.normalize(), A ? A.status : void 0);
  }), n.normalize(), s;
}
function Mo(e) {
  return !(!e || !e.__CANCEL__);
}
function qe(e, A, t) {
  D.call(this, e ?? "canceled", D.ERR_CANCELED, A, t), this.name = "CanceledError";
}
h.inherits(qe, D, { __CANCEL__: !0 });
const _c = PA.hasStandardBrowserEnv ? { write(e, A, t, r, n, s) {
  const o = [e + "=" + encodeURIComponent(A)];
  h.isNumber(t) && o.push("expires=" + new Date(t).toGMTString()), h.isString(r) && o.push("path=" + r), h.isString(n) && o.push("domain=" + n), s === !0 && o.push("secure"), document.cookie = o.join("; ");
}, read(e) {
  const A = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
  return A ? decodeURIComponent(A[3]) : null;
}, remove(e) {
  this.write(e, "", Date.now() - 864e5);
} } : { write() {
}, read: () => null, remove() {
} };
function Ro(e, A) {
  return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(A) ? function(t, r) {
    return r ? t.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : t;
  }(e, A) : A;
}
const Jc = PA.hasStandardBrowserEnv ? function() {
  const e = /(msie|trident)/i.test(navigator.userAgent), A = document.createElement("a");
  let t;
  function r(n) {
    let s = n;
    return e && (A.setAttribute("href", s), s = A.href), A.setAttribute("href", s), { href: A.href, protocol: A.protocol ? A.protocol.replace(/:$/, "") : "", host: A.host, search: A.search ? A.search.replace(/^\?/, "") : "", hash: A.hash ? A.hash.replace(/^#/, "") : "", hostname: A.hostname, port: A.port, pathname: A.pathname.charAt(0) === "/" ? A.pathname : "/" + A.pathname };
  }
  return t = r(window.location.href), function(n) {
    const s = h.isString(n) ? r(n) : n;
    return s.protocol === t.protocol && s.host === t.host;
  };
}() : function() {
  return !0;
};
function Fs(e, A) {
  let t = 0;
  const r = function(n, s) {
    n = n || 10;
    const o = new Array(n), i = new Array(n);
    let B, c = 0, a = 0;
    return s = s !== void 0 ? s : 1e3, function(l) {
      const u = Date.now(), g = i[a];
      B || (B = u), o[c] = l, i[c] = u;
      let w = a, d = 0;
      for (; w !== c; )
        d += o[w++], w %= n;
      if (c = (c + 1) % n, c === a && (a = (a + 1) % n), u - B < s)
        return;
      const Q = g && u - g;
      return Q ? Math.round(1e3 * d / Q) : void 0;
    };
  }(50, 250);
  return (n) => {
    const s = n.loaded, o = n.lengthComputable ? n.total : void 0, i = s - t, B = r(i);
    t = s;
    const c = { loaded: s, total: o, progress: o ? s / o : void 0, bytes: i, rate: B || void 0, estimated: B && o && s <= o ? (o - s) / B : void 0, event: n };
    c[A ? "download" : "upload"] = !0, e(c);
  };
}
const Go = { http: null, xhr: typeof XMLHttpRequest < "u" && function(e) {
  return new Promise(function(A, t) {
    let r = e.data;
    const n = zA.from(e.headers).normalize();
    let s, o, { responseType: i, withXSRFToken: B } = e;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s);
    }
    if (h.isFormData(r)) {
      if (PA.hasStandardBrowserEnv || PA.hasStandardBrowserWebWorkerEnv)
        n.setContentType(!1);
      else if ((o = n.getContentType()) !== !1) {
        const [w, ...d] = o ? o.split(";").map((Q) => Q.trim()).filter(Boolean) : [];
        n.setContentType([w || "multipart/form-data", ...d].join("; "));
      }
    }
    let a = new XMLHttpRequest();
    if (e.auth) {
      const w = e.auth.username || "", d = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      n.set("Authorization", "Basic " + btoa(w + ":" + d));
    }
    const l = Ro(e.baseURL, e.url);
    function u() {
      if (!a)
        return;
      const w = zA.from("getAllResponseHeaders" in a && a.getAllResponseHeaders());
      (function(d, Q, C) {
        const p = C.config.validateStatus;
        C.status && p && !p(C.status) ? Q(new D("Request failed with status code " + C.status, [D.ERR_BAD_REQUEST, D.ERR_BAD_RESPONSE][Math.floor(C.status / 100) - 4], C.config, C.request, C)) : d(C);
      })(function(d) {
        A(d), c();
      }, function(d) {
        t(d), c();
      }, { data: i && i !== "text" && i !== "json" ? a.response : a.responseText, status: a.status, statusText: a.statusText, headers: w, config: e, request: a }), a = null;
    }
    if (a.open(e.method.toUpperCase(), So(l, e.params, e.paramsSerializer), !0), a.timeout = e.timeout, "onloadend" in a ? a.onloadend = u : a.onreadystatechange = function() {
      a && a.readyState === 4 && (a.status !== 0 || a.responseURL && a.responseURL.indexOf("file:") === 0) && setTimeout(u);
    }, a.onabort = function() {
      a && (t(new D("Request aborted", D.ECONNABORTED, e, a)), a = null);
    }, a.onerror = function() {
      t(new D("Network Error", D.ERR_NETWORK, e, a)), a = null;
    }, a.ontimeout = function() {
      let w = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const d = e.transitional || xo;
      e.timeoutErrorMessage && (w = e.timeoutErrorMessage), t(new D(w, d.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED, e, a)), a = null;
    }, PA.hasStandardBrowserEnv && (B && h.isFunction(B) && (B = B(e)), B || B !== !1 && Jc(l))) {
      const w = e.xsrfHeaderName && e.xsrfCookieName && _c.read(e.xsrfCookieName);
      w && n.set(e.xsrfHeaderName, w);
    }
    r === void 0 && n.setContentType(null), "setRequestHeader" in a && h.forEach(n.toJSON(), function(w, d) {
      a.setRequestHeader(d, w);
    }), h.isUndefined(e.withCredentials) || (a.withCredentials = !!e.withCredentials), i && i !== "json" && (a.responseType = e.responseType), typeof e.onDownloadProgress == "function" && a.addEventListener("progress", Fs(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && a.upload && a.upload.addEventListener("progress", Fs(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = (w) => {
      a && (t(!w || w.type ? new qe(null, e, a) : w), a.abort(), a = null);
    }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
    const g = function(w) {
      const d = /^([-+\w]{1,25})(:?\/\/|:)/.exec(w);
      return d && d[1] || "";
    }(l);
    g && PA.protocols.indexOf(g) === -1 ? t(new D("Unsupported protocol " + g + ":", D.ERR_BAD_REQUEST, e)) : a.send(r || null);
  });
} };
h.forEach(Go, (e, A) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: A });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: A });
  }
});
const fs = (e) => `- ${e}`, Xc = (e) => h.isFunction(e) || e === null || e === !1, Vo = (e) => {
  e = h.isArray(e) ? e : [e];
  const { length: A } = e;
  let t, r;
  const n = {};
  for (let s = 0; s < A; s++) {
    let o;
    if (t = e[s], r = t, !Xc(t) && (r = Go[(o = String(t)).toLowerCase()], r === void 0))
      throw new D(`Unknown adapter '${o}'`);
    if (r)
      break;
    n[o || "#" + s] = r;
  }
  if (!r) {
    const s = Object.entries(n).map(([o, i]) => `adapter ${o} ` + (i === !1 ? "is not supported by the environment" : "is not available in the build"));
    throw new D("There is no suitable adapter to dispatch the request " + (A ? s.length > 1 ? `since :
` + s.map(fs).join(`
`) : " " + fs(s[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT");
  }
  return r;
};
function pr(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new qe(null, e);
}
function ms(e) {
  return pr(e), e.headers = zA.from(e.headers), e.data = Ur.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Vo(e.adapter || un.adapter)(e).then(function(A) {
    return pr(e), A.data = Ur.call(e, e.transformResponse, A), A.headers = zA.from(A.headers), A;
  }, function(A) {
    return Mo(A) || (pr(e), A && A.response && (A.response.data = Ur.call(e, e.transformResponse, A.response), A.response.headers = zA.from(A.response.headers))), Promise.reject(A);
  });
}
const Es = (e) => e instanceof zA ? e.toJSON() : e;
function ye(e, A) {
  A = A || {};
  const t = {};
  function r(c, a, l) {
    return h.isPlainObject(c) && h.isPlainObject(a) ? h.merge.call({ caseless: l }, c, a) : h.isPlainObject(a) ? h.merge({}, a) : h.isArray(a) ? a.slice() : a;
  }
  function n(c, a, l) {
    return h.isUndefined(a) ? h.isUndefined(c) ? void 0 : r(void 0, c, l) : r(c, a, l);
  }
  function s(c, a) {
    if (!h.isUndefined(a))
      return r(void 0, a);
  }
  function o(c, a) {
    return h.isUndefined(a) ? h.isUndefined(c) ? void 0 : r(void 0, c) : r(void 0, a);
  }
  function i(c, a, l) {
    return l in A ? r(c, a) : l in e ? r(void 0, c) : void 0;
  }
  const B = { url: s, method: s, data: s, baseURL: o, transformRequest: o, transformResponse: o, paramsSerializer: o, timeout: o, timeoutMessage: o, withCredentials: o, withXSRFToken: o, adapter: o, responseType: o, xsrfCookieName: o, xsrfHeaderName: o, onUploadProgress: o, onDownloadProgress: o, decompress: o, maxContentLength: o, maxBodyLength: o, beforeRedirect: o, transport: o, httpAgent: o, httpsAgent: o, cancelToken: o, socketPath: o, responseEncoding: o, validateStatus: i, headers: (c, a) => n(Es(c), Es(a), !0) };
  return h.forEach(Object.keys(Object.assign({}, e, A)), function(c) {
    const a = B[c] || n, l = a(e[c], A[c], c);
    h.isUndefined(l) && a !== i || (t[c] = l);
  }), t;
}
const Wc = "1.6.7", wn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, A) => {
  wn[e] = function(t) {
    return typeof t === e || "a" + (A < 1 ? "n " : " ") + e;
  };
});
const Hs = {};
wn.transitional = function(e, A, t) {
  function r(n, s) {
    return "[Axios v1.6.7] Transitional option '" + n + "'" + s + (t ? ". " + t : "");
  }
  return (n, s, o) => {
    if (e === !1)
      throw new D(r(s, " has been removed" + (A ? " in " + A : "")), D.ERR_DEPRECATED);
    return A && !Hs[s] && (Hs[s] = !0, console.warn(r(s, " has been deprecated since v" + A + " and will be removed in the near future"))), !e || e(n, s, o);
  };
};
const qr = { assertOptions: function(e, A, t) {
  if (typeof e != "object")
    throw new D("options must be an object", D.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let n = r.length;
  for (; n-- > 0; ) {
    const s = r[n], o = A[s];
    if (o) {
      const i = e[s], B = i === void 0 || o(i, s, e);
      if (B !== !0)
        throw new D("option " + s + " must be " + B, D.ERR_BAD_OPTION_VALUE);
    } else if (t !== !0)
      throw new D("Unknown option " + s, D.ERR_BAD_OPTION);
  }
}, validators: wn }, Ae = qr.validators;
class yt {
  constructor(A) {
    this.defaults = A, this.interceptors = { request: new Cs(), response: new Cs() };
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
    typeof A == "string" ? (t = t || {}).url = A : t = A || {}, t = ye(this.defaults, t);
    const { transitional: r, paramsSerializer: n, headers: s } = t;
    r !== void 0 && qr.assertOptions(r, { silentJSONParsing: Ae.transitional(Ae.boolean), forcedJSONParsing: Ae.transitional(Ae.boolean), clarifyTimeoutError: Ae.transitional(Ae.boolean) }, !1), n != null && (h.isFunction(n) ? t.paramsSerializer = { serialize: n } : qr.assertOptions(n, { encode: Ae.function, serialize: Ae.function }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let o = s && h.merge(s.common, s[t.method]);
    s && h.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (w) => {
      delete s[w];
    }), t.headers = zA.concat(o, s);
    const i = [];
    let B = !0;
    this.interceptors.request.forEach(function(w) {
      typeof w.runWhen == "function" && w.runWhen(t) === !1 || (B = B && w.synchronous, i.unshift(w.fulfilled, w.rejected));
    });
    const c = [];
    let a;
    this.interceptors.response.forEach(function(w) {
      c.push(w.fulfilled, w.rejected);
    });
    let l, u = 0;
    if (!B) {
      const w = [ms.bind(this), void 0];
      for (w.unshift.apply(w, i), w.push.apply(w, c), l = w.length, a = Promise.resolve(t); u < l; )
        a = a.then(w[u++], w[u++]);
      return a;
    }
    l = i.length;
    let g = t;
    for (u = 0; u < l; ) {
      const w = i[u++], d = i[u++];
      try {
        g = w(g);
      } catch (Q) {
        d.call(this, Q);
        break;
      }
    }
    try {
      a = ms.call(this, g);
    } catch (w) {
      return Promise.reject(w);
    }
    for (u = 0, l = c.length; u < l; )
      a = a.then(c[u++], c[u++]);
    return a;
  }
  getUri(A) {
    return So(Ro((A = ye(this.defaults, A)).baseURL, A.url), A.params, A.paramsSerializer);
  }
}
h.forEach(["delete", "get", "head", "options"], function(e) {
  yt.prototype[e] = function(A, t) {
    return this.request(ye(t || {}, { method: e, url: A, data: (t || {}).data }));
  };
}), h.forEach(["post", "put", "patch"], function(e) {
  function A(t) {
    return function(r, n, s) {
      return this.request(ye(s || {}, { method: e, headers: t ? { "Content-Type": "multipart/form-data" } : {}, url: r, data: n }));
    };
  }
  yt.prototype[e] = A(), yt.prototype[e + "Form"] = A(!0);
});
const bt = yt;
class gn {
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
      r.reason || (r.reason = new qe(n, s, o), t(r.reason));
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
    return { token: new gn(function(t) {
      A = t;
    }), cancel: A };
  }
}
const Yc = gn, zr = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
Object.entries(zr).forEach(([e, A]) => {
  zr[A] = e;
});
const Zc = zr, W = function e(A) {
  const t = new bt(A), r = Ko(bt.prototype.request, t);
  return h.extend(r, bt.prototype, t, { allOwnKeys: !0 }), h.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(n) {
    return e(ye(A, n));
  }, r;
}(un);
W.Axios = bt, W.CanceledError = qe, W.CancelToken = Yc, W.isCancel = Mo, W.VERSION = Wc, W.toFormData = _t, W.AxiosError = D, W.Cancel = W.CanceledError, W.all = function(e) {
  return Promise.all(e);
}, W.spread = function(e) {
  return function(A) {
    return e.apply(null, A);
  };
}, W.isAxiosError = function(e) {
  return h.isObject(e) && e.isAxiosError === !0;
}, W.mergeConfig = ye, W.AxiosHeaders = zA, W.formToJSON = (e) => Oo(h.isHTMLForm(e) ? new FormData(e) : e), W.getAdapter = Vo, W.HttpStatusCode = Zc, W.default = W;
var jc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function qc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const zc = qc(typeof self == "object" ? self.FormData : window.FormData), Fr = { production: !1, name: "uat", apiHost: "https://api.staging5h4k3.com/api/1.0/", oAuthHost: "https://api.staging5h4k3.com/auth/oauth2/" }, ce = class ce {
  constructor(A, t, r, n) {
    E(this, "instance");
    E(this, "instanceAuth");
    E(this, "version");
    E(this, "bundleId");
    E(this, "deviceId");
    E(this, "storageProvider");
    E(this, "handlers", {});
    W.defaults.withCredentials = !1, this.storageProvider = A, this.bundleId = r, this.deviceId = n, this.version = t, this.instance = W.create({ baseURL: Fr.apiHost }), this.instanceAuth = W.create({ baseURL: Fr.oAuthHost }), this.setRequestInterceptors(), this.setResponseInterceptors();
  }
  static getInstance(A, t, r, n) {
    return ce.serviceInstance || (ce.serviceInstance = new ce(A, t, r, n)), ce.serviceInstance;
  }
  addTokenToRequest(A) {
    var r;
    const t = this.storageProvider.getObject(VA);
    return t && t.access_token && !((r = A == null ? void 0 : A.url) != null && r.startsWith("http://localhost:5000/auth/oauth2/")) && A.headers && (A.headers.authorization = `${t.token_type} ${t.access_token}`), A;
  }
  addHeadersToRequest(A) {
    var t;
    return (t = A == null ? void 0 : A.url) != null && t.startsWith("http://localhost:5000/auth/oauth2/") || A.headers && (A.headers["X-DEVICE-ID"] = this.deviceId, A.headers["X-APP-ID"] = this.bundleId, A.headers["X-SHAKE-VERSION"] = this.version), A;
  }
  refreshToken() {
    var r;
    const A = new zc(), t = (r = this.storageProvider.getObject(VA)) == null ? void 0 : r.refresh_token;
    return A.append("refresh_token", t), A.append("grant_type", "refresh_token"), A.append("client_id", "shake_dashboard"), this.postAuth({ resource: "token", data: A, config: { headers: { "Content-Type": "application/x-www-form-urlencoded" } } }).then((n) => (n && n.data && n.data.access_token && this.storageProvider.setObject(VA, n.data), n));
  }
  handle401Error(A) {
    if (this.hasTokensInStorage())
      return this.refreshToken().then((t) => {
        var r, n;
        return t ? (this.storageProvider.setObject(VA, t.data), (n = (r = this.handlers).renewTokenHandler) == null || n.call(r, t.data), this.addTokenToRequest(A)) : new Promise(() => {
          this.storageProvider.removeItem(VA), location.reload();
        });
      }).catch(() => (this.storageProvider.getObject(VA), new Promise(() => {
        this.storageProvider.removeItem(VA), location.reload();
      })));
  }
  hasTokensInStorage() {
    return !!this.storageProvider.getObject(VA);
  }
  setRequestInterceptors() {
    this.instance.interceptors.request.use((A) => (this.addTokenToRequest(A), this.addHeadersToRequest(A), A), (A) => Promise.reject(A)), this.instanceAuth.interceptors.request.use((A) => A, (A) => Promise.reject(A));
  }
  setResponseInterceptors() {
    this.instance.interceptors.response.use((A) => A, (A) => {
      var r, n, s, o, i;
      const t = A.config;
      return t && !t._retry && ((r = A.response) == null ? void 0 : r.status) === 401 && t.url !== `${Fr.oAuthHost}token` ? (t._retry = !0, (n = this.handle401Error(t)) == null ? void 0 : n.then(() => this.instance(t))) : t && !t._retry && ((s = A.response) == null ? void 0 : s.status) === 402 ? (i = (o = this.handlers).handle402Error) == null ? void 0 : i.call(o) : Promise.reject(A);
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
E(ce, "serviceInstance");
let Ze = ce;
function Jt() {
  return window.location.hostname === "localhost" ? "localhost.com" : window.location.hostname;
}
class $c {
  constructor() {
    E(this, "data", Y.data);
    E(this, "storage", Y.storage);
    E(this, "authApi");
    const A = Ze.getInstance(Y.storage, jr, Jt(), this.data.getShakeDeviceId() ?? "");
    this.authApi = new _o(A);
  }
  async getToken(A, t) {
    const r = await this.storage.getObject(VA);
    if (r)
      return r;
    try {
      const { data: n } = await this.authApi.getToken(A, t);
      return await this.storage.setObject(VA, n), n ?? null;
    } catch (n) {
      return console.error(n), null;
    }
  }
  async registerApp(A) {
    if (!A)
      return !1;
    try {
      return await this.authApi.registerApp(Jt(), It.WEB, !1, vs.WEB), !0;
    } catch (t) {
      return console.error(t), !1;
    }
  }
  isAppRegisteredAndActive() {
    return this.storage.getBoolean(rr) && this.storage.getBoolean(nr);
  }
  showButton() {
    const A = Ec();
    document.body.appendChild(A);
  }
  async authenticate(A, t) {
    var r;
    try {
      const n = await this.getToken(A, t);
      if (!n)
        return;
      const s = await this.registerApp(n);
      this.storage.setBoolean(rr, s), this.storage.setBoolean(nr, !0);
    } catch (n) {
      console.error("Error initializing the app:", n), ((r = n.response) == null ? void 0 : r.status) === 404 && (this.storage.setBoolean(nr, !1), this.storage.setBoolean(rr, !1));
    }
  }
}
class Al {
  constructor({ storage: A, version: t, bundleId: r, deviceId: n }) {
    E(this, "baseApi");
    this.baseApi = Ze.getInstance(A, t, r, n);
  }
  sendFeedback(A, t) {
    return this.baseApi.post({ resource: `/issue_tracking/apps/${A}`, data: { bundle_id: A, ...t }, config: { headers: { "Content-Type": "application/json" } } });
  }
}
class el {
  constructor({ storage: A, version: t, bundleId: r, deviceId: n }) {
    E(this, "baseApi");
    this.baseApi = Ze.getInstance(A, t, r, n);
  }
  getBlob(A, t) {
    return W.get(A, { responseType: "arraybuffer" }).then((r) => new File([r.data], t, { type: r.data.type }));
  }
  sendFiles(A) {
    const t = new FormData();
    return t.append("file", A), this.baseApi.post({ resource: "/files", data: t, config: { headers: { "Content-Type": "multipart/form-data" } } });
  }
}
var fr, mr, $r = { exports: {} };
fr = $r, mr = $r.exports, function(e, A) {
  var t = "function", r = "undefined", n = "object", s = "string", o = "major", i = "model", B = "name", c = "type", a = "vendor", l = "version", u = "architecture", g = "console", w = "mobile", d = "tablet", Q = "smarttv", C = "wearable", p = "embedded", y = "Amazon", F = "Apple", U = "ASUS", b = "BlackBerry", I = "Browser", H = "Chrome", k = "Firefox", $ = "Google", lA = "Huawei", J = "LG", AA = "Microsoft", nA = "Motorola", pA = "Opera", oA = "Samsung", dA = "Sharp", EA = "Sony", CA = "Xiaomi", HA = "Zebra", xA = "Facebook", TA = "Chromium OS", yA = "Mac OS", FA = function(O) {
    for (var V = {}, L = 0; L < O.length; L++)
      V[O[L].toUpperCase()] = O[L];
    return V;
  }, WA = function(O, V) {
    return typeof O === s && q(V).indexOf(q(O)) !== -1;
  }, q = function(O) {
    return O.toLowerCase();
  }, S = function(O, V) {
    if (typeof O === s)
      return O = O.replace(/^\s\s*/, ""), typeof V === r ? O : O.substring(0, 500);
  }, T = function(O, V) {
    for (var L, eA, MA, R, YA, v, kA = 0; kA < V.length && !YA; ) {
      var ae = V[kA], RA = V[kA + 1];
      for (L = eA = 0; L < ae.length && !YA && ae[L]; )
        if (YA = ae[L++].exec(O))
          for (MA = 0; MA < RA.length; MA++)
            v = YA[++eA], typeof (R = RA[MA]) === n && R.length > 0 ? R.length === 2 ? typeof R[1] == t ? this[R[0]] = R[1].call(this, v) : this[R[0]] = R[1] : R.length === 3 ? typeof R[1] !== t || R[1].exec && R[1].test ? this[R[0]] = v ? v.replace(R[1], R[2]) : A : this[R[0]] = v ? R[1].call(this, v, R[2]) : A : R.length === 4 && (this[R[0]] = v ? R[3].call(this, v.replace(R[1], R[2])) : A) : this[R] = v || A;
      kA += 2;
    }
  }, M = function(O, V) {
    for (var L in V)
      if (typeof V[L] === n && V[L].length > 0) {
        for (var eA = 0; eA < V[L].length; eA++)
          if (WA(V[L][eA], O))
            return L === "?" ? A : L;
      } else if (WA(V[L], O))
        return L === "?" ? A : L;
    return O;
  }, uA = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" }, wA = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [l, [B, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [l, [B, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [B, l], [/opios[\/ ]+([\w\.]+)/i], [l, [B, pA + " Mini"]], [/\bopr\/([\w\.]+)/i], [l, [B, pA]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [l, [B, "Baidu"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [B, l], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [l, [B, "UC" + I]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [l, [B, "WeChat"]], [/konqueror\/([\w\.]+)/i], [l, [B, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [l, [B, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [l, [B, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [l, [B, "Smart Lenovo " + I]], [/(avast|avg)\/([\w\.]+)/i], [[B, /(.+)/, "$1 Secure " + I], l], [/\bfocus\/([\w\.]+)/i], [l, [B, k + " Focus"]], [/\bopt\/([\w\.]+)/i], [l, [B, pA + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [l, [B, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [l, [B, "Dolphin"]], [/coast\/([\w\.]+)/i], [l, [B, pA + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [l, [B, "MIUI " + I]], [/fxios\/([-\w\.]+)/i], [l, [B, k]], [/\bqihu|(qi?ho?o?|360)browser/i], [[B, "360 " + I]], [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i], [[B, /(.+)/, "$1 " + I], l], [/samsungbrowser\/([\w\.]+)/i], [l, [B, oA + " Internet"]], [/(comodo_dragon)\/([\w\.]+)/i], [[B, /_/g, " "], l], [/metasr[\/ ]?([\d\.]+)/i], [l, [B, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[B, "Sogou Mobile"], l], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i], [B, l], [/(lbbrowser)/i, /\[(linkedin)app\]/i], [B], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[B, xA], l], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [B, l], [/\bgsa\/([\w\.]+) .*safari\//i], [l, [B, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [l, [B, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [l, [B, H + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[B, H + " WebView"], l], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [l, [B, "Android " + I]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [B, l], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [l, [B, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [l, B], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [B, [l, M, { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }]], [/(webkit|khtml)\/([\w\.]+)/i], [B, l], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[B, "Netscape"], l], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [l, [B, k + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [B, l], [/(cobalt)\/([\w\.]+)/i], [B, [l, /master.|lts./, ""]]], cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[u, "amd64"]], [/(ia32(?=;))/i], [[u, q]], [/((?:i[346]|x)86)[;\)]/i], [[u, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[u, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[u, "armhf"]], [/windows (ce|mobile); ppc;/i], [[u, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[u, /ower/, "", q]], [/(sun4\w)[;\)]/i], [[u, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[u, q]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [i, [a, oA], [c, d]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [i, [a, oA], [c, w]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [i, [a, F], [c, w]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [i, [a, F], [c, d]], [/(macintosh);/i], [i, [a, F]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [i, [a, dA], [c, w]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [i, [a, lA], [c, d]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [i, [a, lA], [c, w]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[i, /_/g, " "], [a, CA], [c, w]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[i, /_/g, " "], [a, CA], [c, d]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [i, [a, "OPPO"], [c, w]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [i, [a, "Vivo"], [c, w]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [i, [a, "Realme"], [c, w]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [i, [a, nA], [c, w]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [i, [a, nA], [c, d]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [i, [a, J], [c, d]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [i, [a, J], [c, w]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [i, [a, "Lenovo"], [c, d]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[i, /_/g, " "], [a, "Nokia"], [c, w]], [/(pixel c)\b/i], [i, [a, $], [c, d]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [i, [a, $], [c, w]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [i, [a, EA], [c, w]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[i, "Xperia Tablet"], [a, EA], [c, d]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [i, [a, "OnePlus"], [c, w]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [i, [a, y], [c, d]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[i, /(.+)/g, "Fire Phone $1"], [a, y], [c, w]], [/(playbook);[-\w\),; ]+(rim)/i], [i, a, [c, d]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [i, [a, b], [c, w]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [i, [a, U], [c, d]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [i, [a, U], [c, w]], [/(nexus 9)/i], [i, [a, "HTC"], [c, d]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [a, [i, /_/g, " "], [c, w]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [i, [a, "Acer"], [c, d]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [i, [a, "Meizu"], [c, w]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [i, [a, "Ulefone"], [c, w]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [a, i, [c, w]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [a, i, [c, d]], [/(surface duo)/i], [i, [a, AA], [c, d]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [i, [a, "Fairphone"], [c, w]], [/(u304aa)/i], [i, [a, "AT&T"], [c, w]], [/\bsie-(\w*)/i], [i, [a, "Siemens"], [c, w]], [/\b(rct\w+) b/i], [i, [a, "RCA"], [c, d]], [/\b(venue[\d ]{2,7}) b/i], [i, [a, "Dell"], [c, d]], [/\b(q(?:mv|ta)\w+) b/i], [i, [a, "Verizon"], [c, d]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [i, [a, "Barnes & Noble"], [c, d]], [/\b(tm\d{3}\w+) b/i], [i, [a, "NuVision"], [c, d]], [/\b(k88) b/i], [i, [a, "ZTE"], [c, d]], [/\b(nx\d{3}j) b/i], [i, [a, "ZTE"], [c, w]], [/\b(gen\d{3}) b.+49h/i], [i, [a, "Swiss"], [c, w]], [/\b(zur\d{3}) b/i], [i, [a, "Swiss"], [c, d]], [/\b((zeki)?tb.*\b) b/i], [i, [a, "Zeki"], [c, d]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[a, "Dragon Touch"], i, [c, d]], [/\b(ns-?\w{0,9}) b/i], [i, [a, "Insignia"], [c, d]], [/\b((nxa|next)-?\w{0,9}) b/i], [i, [a, "NextBook"], [c, d]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[a, "Voice"], i, [c, w]], [/\b(lvtel\-)?(v1[12]) b/i], [[a, "LvTel"], i, [c, w]], [/\b(ph-1) /i], [i, [a, "Essential"], [c, w]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [i, [a, "Envizen"], [c, d]], [/\b(trio[-\w\. ]+) b/i], [i, [a, "MachSpeed"], [c, d]], [/\btu_(1491) b/i], [i, [a, "Rotor"], [c, d]], [/(shield[\w ]+) b/i], [i, [a, "Nvidia"], [c, d]], [/(sprint) (\w+)/i], [a, i, [c, w]], [/(kin\.[onetw]{3})/i], [[i, /\./g, " "], [a, AA], [c, w]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [i, [a, HA], [c, d]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [i, [a, HA], [c, w]], [/smart-tv.+(samsung)/i], [a, [c, Q]], [/hbbtv.+maple;(\d+)/i], [[i, /^/, "SmartTV"], [a, oA], [c, Q]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[a, J], [c, Q]], [/(apple) ?tv/i], [a, [i, F + " TV"], [c, Q]], [/crkey/i], [[i, H + "cast"], [a, $], [c, Q]], [/droid.+aft(\w+)( bui|\))/i], [i, [a, y], [c, Q]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [i, [a, dA], [c, Q]], [/(bravia[\w ]+)( bui|\))/i], [i, [a, EA], [c, Q]], [/(mitv-\w{5}) bui/i], [i, [a, CA], [c, Q]], [/Hbbtv.*(technisat) (.*);/i], [a, i, [c, Q]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[a, S], [i, S], [c, Q]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[c, Q]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [a, i, [c, g]], [/droid.+; (shield) bui/i], [i, [a, "Nvidia"], [c, g]], [/(playstation [345portablevi]+)/i], [i, [a, EA], [c, g]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [i, [a, AA], [c, g]], [/((pebble))app/i], [a, i, [c, C]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [i, [a, F], [c, C]], [/droid.+; (glass) \d/i], [i, [a, $], [c, C]], [/droid.+; (wt63?0{2,3})\)/i], [i, [a, HA], [c, C]], [/(quest( 2| pro)?)/i], [i, [a, xA], [c, C]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [a, [c, p]], [/(aeobc)\b/i], [i, [a, y], [c, p]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [i, [c, w]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [i, [c, d]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[c, d]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[c, w]], [/(android[-\w\. ]{0,9});.+buil/i], [i, [a, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [l, [B, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [l, [B, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [B, l], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [l, B]], os: [[/microsoft (windows) (vista|xp)/i], [B, l], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [B, [l, M, uA]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[l, M, uA], [B, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[l, /_/g, "."], [B, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[B, yA], [l, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [l, B], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [B, l], [/\(bb(10);/i], [l, [B, b]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [l, [B, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [l, [B, k + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [l, [B, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [l, [B, "watchOS"]], [/crkey\/([\d\.]+)/i], [l, [B, H + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[B, TA], l], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [B, l], [/(sunos) ?([\w\.\d]*)/i], [[B, "Solaris"], l], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [B, l]] }, X = function(O, V) {
    if (typeof O === n && (V = O, O = A), !(this instanceof X))
      return new X(O, V).getResult();
    var L = typeof e !== r && e.navigator ? e.navigator : A, eA = O || (L && L.userAgent ? L.userAgent : ""), MA = L && L.userAgentData ? L.userAgentData : A, R = V ? function(v, kA) {
      var ae = {};
      for (var RA in v)
        kA[RA] && kA[RA].length % 2 == 0 ? ae[RA] = kA[RA].concat(v[RA]) : ae[RA] = v[RA];
      return ae;
    }(wA, V) : wA, YA = L && L.userAgent == eA;
    return this.getBrowser = function() {
      var v = {};
      return v[B] = A, v[l] = A, T.call(v, eA, R.browser), v[o] = function(kA) {
        return typeof kA === s ? kA.replace(/[^\d\.]/g, "").split(".")[0] : A;
      }(v[l]), YA && L && L.brave && typeof L.brave.isBrave == t && (v[B] = "Brave"), v;
    }, this.getCPU = function() {
      var v = {};
      return v[u] = A, T.call(v, eA, R.cpu), v;
    }, this.getDevice = function() {
      var v = {};
      return v[a] = A, v[i] = A, v[c] = A, T.call(v, eA, R.device), YA && !v[c] && MA && MA.mobile && (v[c] = w), YA && v[i] == "Macintosh" && L && typeof L.standalone !== r && L.maxTouchPoints && L.maxTouchPoints > 2 && (v[i] = "iPad", v[c] = d), v;
    }, this.getEngine = function() {
      var v = {};
      return v[B] = A, v[l] = A, T.call(v, eA, R.engine), v;
    }, this.getOS = function() {
      var v = {};
      return v[B] = A, v[l] = A, T.call(v, eA, R.os), YA && !v[B] && MA && MA.platform != "Unknown" && (v[B] = MA.platform.replace(/chrome os/i, TA).replace(/macos/i, yA)), v;
    }, this.getResult = function() {
      return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
    }, this.getUA = function() {
      return eA;
    }, this.setUA = function(v) {
      return eA = typeof v === s && v.length > 500 ? S(v, 500) : v, this;
    }, this.setUA(eA), this;
  };
  X.VERSION = "1.0.37", X.BROWSER = FA([B, l, o]), X.CPU = FA([u]), X.DEVICE = FA([i, a, c, g, w, Q, d, C, p]), X.ENGINE = X.OS = FA([B, l]), fr.exports && (mr = fr.exports = X), mr.UAParser = X;
  var iA = typeof e !== r && (e.jQuery || e.Zepto);
  if (iA && !iA.ua) {
    var OA = new X();
    iA.ua = OA.getResult(), iA.ua.get = function() {
      return OA.getUA();
    }, iA.ua.set = function(O) {
      OA.setUA(O);
      var V = OA.getResult();
      for (var L in V)
        iA.ua[L] = V[L];
    };
  }
}(typeof window == "object" ? window : jc);
var tl = $r.exports;
function rl() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
function nl() {
  const e = navigator.userAgent;
  return e.match(/Android/i) ? "Android Device" : e.match(/iPhone|iPad|iPod/i) ? "iOS Device" : e.match(/Windows Phone/i) ? "Windows Phone" : e.match(/Windows/i) ? "Windows PC" : e.match(/Macintosh|Mac OS/i) ? "Macintosh" : e.match(/Linux/i) ? "Linux PC" : null;
}
function sl() {
  return window.location.pathname;
}
function ys() {
  return { width: window.screen.width, height: window.screen.height };
}
function bs() {
  return { width: window.innerWidth || document.documentElement.clientWidth, height: window.innerHeight || document.documentElement.clientHeight };
}
function ol(e, A) {
  return [{ type: Hr.TITLE, value: e, label: "Title" }, { type: Hr.PICKER, value: A, label: "Ticket type" }];
}
function il() {
  const e = window.screen.orientation;
  return e ? e.type.toLocaleLowerCase().includes("landscape-primary") ? 0 : e.type.toLocaleLowerCase().includes("landscape-secondary") ? 180 : e.type.toLocaleLowerCase().includes("portrait-primary") ? 90 : e.type.toLocaleLowerCase().includes("portrait-secondary") ? 270 : null : null;
}
const al = async () => {
  if (!("getBattery" in navigator))
    return null;
  try {
    return await navigator.getBattery();
  } catch (e) {
    return console.error("Error getting battery information:", e), null;
  }
}, Bl = () => {
  const e = document.createElement("div");
  e.style.fontSize = "1rem", document.body.appendChild(e);
  const A = window.getComputedStyle(e), t = A.getPropertyValue("font-size") ? parseFloat(A.getPropertyValue("font-size")) : null;
  return document.body.removeChild(e), t;
}, cl = () => {
  const e = "onLine" in navigator && navigator.onLine || !1;
  return "connection" in navigator && e ? navigator.connection.effectiveType || null : "offline";
}, ll = () => "cookieEnabled" in navigator && navigator.cookieEnabled || null, ul = () => {
  var e;
  return "userAgentData" in navigator ? (e = navigator.userAgentData) == null ? void 0 : e.mobile : null;
};
async function wl(e) {
  try {
    return await navigator.permissions.query({ name: e });
  } catch (A) {
    return console.error("Error checking permission status:", A), null;
  }
}
async function gl() {
  const e = [];
  for (const A of Jo)
    try {
      const t = await wl(A);
      t && t.state && t.state === "granted" && e.push({ name: A, state: t.state });
    } catch {
      return [];
    }
  return e;
}
class dl {
  constructor(A, t, r) {
    E(this, "title");
    E(this, "message");
    E(this, "time");
    E(this, "element");
    this.title = r, this.message = A, this.time = t, this.element = null;
    const n = x();
    n.classList.add("toast-notification"), this.element = n;
    const s = document.getElementsByClassName("toast-notification");
    n.style.marginBottom = 55 * s.length + "px";
    const o = x();
    if (o.classList.add("content-container"), this.title) {
      const a = x();
      a.classList.add("title-container"), a.textContent = this.title, o.appendChild(a);
    }
    const i = x();
    i.classList.add("message-container"), i.textContent = this.message, o.appendChild(i), n.appendChild(o);
    const B = x();
    B.classList.add("close-notification");
    const c = _A("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14021_39143)'%3e%3cpath%20d='M16%208L8%2016'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16%2016.001L8%208.00098'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14021_39143'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
    B.appendChild(c), n.append(B), document.body.appendChild(n), setTimeout(function() {
      n.remove();
    }, this.time), B.addEventListener("click", () => {
      n.remove();
    });
  }
}
class hl {
  constructor() {
    E(this, "data", Y.data);
    E(this, "feedbackApi");
    E(this, "filesApi");
    E(this, "baseApiParams", { storage: Y.storage, version: jr, bundleId: Jt(), deviceId: this.data.getShakeDeviceId() ?? "" });
    this.feedbackApi = new Al(this.baseApiParams), this.filesApi = new el(this.baseApiParams);
  }
  async sendUserFeedback(A, t, r, n, s) {
    try {
      await this.feedbackApi.sendFeedback(Jt(), await async function(o, i, B, c, a) {
        const l = new tl.UAParser(navigator.userAgent), u = await al().then((g) => g);
        return { custom_fields: ol(i, o), timezone: rl(), issue_reported_time: vr((/* @__PURE__ */ new Date()).toString()), os: It.WEB, device: nl(), browser_name: l.getBrowser().name, browser_version: l.getBrowser().version, current_view: sl(), screen_height: ys().height, screen_width: ys().width, sdk_version: jr, platform: It.WEB, report_type: Ds.MANUAL, screen_density: window.devicePixelRatio || 1, screenshot_url: B, video_url: c, files: a, locale: window.navigator.language || null, os_version: l.getOS().version, os_name: l.getOS().name, device_orientation: il(), battery_level: u.level, battery_status: u.charging ? 1 : 0, font_scale: Bl(), network_type: cl(), permissions: await gl().then((g) => g), browser_height: bs().height, browser_width: bs().width, cookies_enabled: ll(), is_mobile: ul(), cpu_arch: l.getCPU().architecture, app_version: "1.0" };
      }(A, t, r, n, s)), new dl(tA().shake_sdk_dialog_ticket_sent_message, 4e3, tA().shake_sdk_dialog_ticket_sent_title);
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
class je {
}
E(je, "shakeAuthService", new $c()), E(je, "shakeFeedbackService", new hl());
let Ut;
const Ql = new Uint8Array(16);
function Cl() {
  if (!Ut && (Ut = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Ut))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Ut(Ql);
}
const aA = [];
for (let e = 0; e < 256; ++e)
  aA.push((e + 256).toString(16).slice(1));
const Is = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
function Ul(e, A, t) {
  if (Is.randomUUID && !A && !e)
    return Is.randomUUID();
  const r = (e = e || {}).random || (e.rng || Cl)();
  if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, A) {
    t = t || 0;
    for (let n = 0; n < 16; ++n)
      A[t + n] = r[n];
    return A;
  }
  return function(n, s = 0) {
    return aA[n[s + 0]] + aA[n[s + 1]] + aA[n[s + 2]] + aA[n[s + 3]] + "-" + aA[n[s + 4]] + aA[n[s + 5]] + "-" + aA[n[s + 6]] + aA[n[s + 7]] + "-" + aA[n[s + 8]] + aA[n[s + 9]] + "-" + aA[n[s + 10]] + aA[n[s + 11]] + aA[n[s + 12]] + aA[n[s + 13]] + aA[n[s + 14]] + aA[n[s + 15]];
  }(r);
}
class Er {
  static async start(A, t) {
    this.data.getShakeDeviceId() || await this.data.setShakeDeviceId(Ul()), this.isLoading || (this.isLoading = !0, A ? t ? (vt.clientId = A, vt.clientSecret = t, this.shakeAuthService.isAppRegisteredAndActive() ? this.shakeAuthService.showButton() : (await this.shakeAuthService.authenticate(A, t).finally(() => this.isLoading = !1), this.shakeAuthService.isAppRegisteredAndActive() && this.shakeAuthService.showButton())) : console.warn("Shake not started. Client secret is empty.") : console.warn("Shake not started. Client id is empty."));
  }
}
E(Er, "isLoading", !1), E(Er, "data", Y.data), E(Er, "shakeAuthService", je.shakeAuthService);
export {
  Er as default
};
//# sourceMappingURL=browser.js.map
