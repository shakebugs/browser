var $o = Object.defineProperty;
var Ai = (e, A, t) => A in e ? $o(e, A, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[A] = t;
var F = (e, A, t) => (Ai(e, typeof A != "symbol" ? A + "" : A, t), t);
import "./main.css";
class DA {
}
F(DA, "clientId", ""), F(DA, "clientSecret", ""), F(DA, "bundleId", "");
let nt;
const ei = new Uint8Array(16);
function ti() {
  if (!nt && (nt = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !nt))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return nt(ei);
}
const BA = [];
for (let e = 0; e < 256; ++e)
  BA.push((e + 256).toString(16).slice(1));
const pn = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
function ri(e, A, t) {
  if (pn.randomUUID && !A && !e)
    return pn.randomUUID();
  const r = (e = e || {}).random || (e.rng || ti)();
  if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, A) {
    t = t || 0;
    for (let n = 0; n < 16; ++n)
      A[t + n] = r[n];
    return A;
  }
  return function(n, s = 0) {
    return BA[n[s + 0]] + BA[n[s + 1]] + BA[n[s + 2]] + BA[n[s + 3]] + "-" + BA[n[s + 4]] + BA[n[s + 5]] + "-" + BA[n[s + 6]] + BA[n[s + 7]] + "-" + BA[n[s + 8]] + BA[n[s + 9]] + "-" + BA[n[s + 10]] + BA[n[s + 11]] + BA[n[s + 12]] + BA[n[s + 13]] + BA[n[s + 14]] + BA[n[s + 15]];
  }(r);
}
class ni {
  constructor(A) {
    F(this, "baseApi");
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
const cr = { production: !1, name: "uat", apiHost: "https://api.staging5h4k3.com/api/1.0/", oAuthHost: "https://api.staging5h4k3.com/auth/oauth2/" };
function Ts(e, A) {
  return function() {
    return e.apply(A, arguments);
  };
}
const { toString: si } = Object.prototype, { getPrototypeOf: tn } = Object, St = (Br = /* @__PURE__ */ Object.create(null), (e) => {
  const A = si.call(e);
  return Br[A] || (Br[A] = A.slice(8, -1).toLowerCase());
});
var Br;
const YA = (e) => (e = e.toLowerCase(), (A) => St(A) === e), $t = (e) => (A) => typeof A === e, { isArray: ye } = Array, Me = $t("undefined"), Cn = YA("ArrayBuffer"), oi = $t("string"), IA = $t("function"), fn = $t("number"), st = (e) => e !== null && typeof e == "object", ot = (e) => {
  if (St(e) !== "object")
    return !1;
  const A = tn(e);
  return !(A !== null && A !== Object.prototype && Object.getPrototypeOf(A) !== null || Symbol.toStringTag in e || Symbol.iterator in e);
}, ii = YA("Date"), ai = YA("File"), ci = YA("Blob"), Bi = YA("FileList"), li = YA("URLSearchParams");
function Re(e, A, { allOwnKeys: t = !1 } = {}) {
  if (e == null)
    return;
  let r, n;
  if (typeof e != "object" && (e = [e]), ye(e))
    for (r = 0, n = e.length; r < n; r++)
      A.call(null, e[r], r, e);
  else {
    const s = t ? Object.getOwnPropertyNames(e) : Object.keys(e), o = s.length;
    let i;
    for (r = 0; r < o; r++)
      i = s[r], A.call(null, e[i], i, e);
  }
}
function Un(e, A) {
  A = A.toLowerCase();
  const t = Object.keys(e);
  let r, n = t.length;
  for (; n-- > 0; )
    if (r = t[n], A === r.toLowerCase())
      return r;
  return null;
}
const Os = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Fn = (e) => !Me(e) && e !== Os, di = (lr = typeof Uint8Array < "u" && tn(Uint8Array), (e) => lr && e instanceof lr);
var lr;
const ui = YA("HTMLFormElement"), mn = (({ hasOwnProperty: e }) => (A, t) => e.call(A, t))(Object.prototype), gi = YA("RegExp"), yn = (e, A) => {
  const t = Object.getOwnPropertyDescriptors(e), r = {};
  Re(t, (n, s) => {
    let o;
    (o = A(n, s, e)) !== !1 && (r[s] = o || n);
  }), Object.defineProperties(e, r);
}, dr = "abcdefghijklmnopqrstuvwxyz", En = "0123456789", bn = { DIGIT: En, ALPHA: dr, ALPHA_DIGIT: dr + dr.toUpperCase() + En }, wi = YA("AsyncFunction"), h = { isArray: ye, isArrayBuffer: Cn, isBuffer: function(e) {
  return e !== null && !Me(e) && e.constructor !== null && !Me(e.constructor) && IA(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}, isFormData: (e) => {
  let A;
  return e && (typeof FormData == "function" && e instanceof FormData || IA(e.append) && ((A = St(e)) === "formdata" || A === "object" && IA(e.toString) && e.toString() === "[object FormData]"));
}, isArrayBufferView: function(e) {
  let A;
  return A = typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && Cn(e.buffer), A;
}, isString: oi, isNumber: fn, isBoolean: (e) => e === !0 || e === !1, isObject: st, isPlainObject: ot, isUndefined: Me, isDate: ii, isFile: ai, isBlob: ci, isRegExp: gi, isFunction: IA, isStream: (e) => st(e) && IA(e.pipe), isURLSearchParams: li, isTypedArray: di, isFileList: Bi, forEach: Re, merge: function e() {
  const { caseless: A } = Fn(this) && this || {}, t = {}, r = (n, s) => {
    const o = A && Un(t, s) || s;
    ot(t[o]) && ot(n) ? t[o] = e(t[o], n) : ot(n) ? t[o] = e({}, n) : ye(n) ? t[o] = n.slice() : t[o] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && Re(arguments[n], r);
  return t;
}, extend: (e, A, t, { allOwnKeys: r } = {}) => (Re(A, (n, s) => {
  t && IA(n) ? e[s] = Ts(n, t) : e[s] = n;
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
    e = t !== !1 && tn(e);
  } while (e && (!t || t(e, A)) && e !== Object.prototype);
  return A;
}, kindOf: St, kindOfTest: YA, endsWith: (e, A, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= A.length;
  const r = e.indexOf(A, t);
  return r !== -1 && r === t;
}, toArray: (e) => {
  if (!e)
    return null;
  if (ye(e))
    return e;
  let A = e.length;
  if (!fn(A))
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
}, isHTMLForm: ui, hasOwnProperty: mn, hasOwnProp: mn, reduceDescriptors: yn, freezeMethods: (e) => {
  yn(e, (A, t) => {
    if (IA(e) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const r = e[t];
    IA(r) && (A.enumerable = !1, "writable" in A ? A.writable = !1 : A.set || (A.set = () => {
      throw Error("Can not rewrite read-only method '" + t + "'");
    }));
  });
}, toObjectSet: (e, A) => {
  const t = {}, r = (n) => {
    n.forEach((s) => {
      t[s] = !0;
    });
  };
  return ye(e) ? r(e) : r(String(e).split(A)), t;
}, toCamelCase: (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(A, t, r) {
  return t.toUpperCase() + r;
}), noop: () => {
}, toFiniteNumber: (e, A) => (e = +e, Number.isFinite(e) ? e : A), findKey: Un, global: Os, isContextDefined: Fn, ALPHABET: bn, generateString: (e = 16, A = bn.ALPHA_DIGIT) => {
  let t = "";
  const { length: r } = A;
  for (; e--; )
    t += A[Math.random() * r | 0];
  return t;
}, isSpecCompliantForm: function(e) {
  return !!(e && IA(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}, toJSONObject: (e) => {
  const A = new Array(10), t = (r, n) => {
    if (st(r)) {
      if (A.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        A[n] = r;
        const s = ye(r) ? [] : {};
        return Re(r, (o, i) => {
          const c = t(o, n + 1);
          !Me(c) && (s[i] = c);
        }), A[n] = void 0, s;
      }
    }
    return r;
  };
  return t(e, 0);
}, isAsyncFn: wi, isThenable: (e) => e && (st(e) || IA(e)) && IA(e.then) && IA(e.catch) };
function K(e, A, t, r, n) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", A && (this.code = A), t && (this.config = t), r && (this.request = r), n && (this.response = n);
}
h.inherits(K, Error, { toJSON: function() {
  return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: h.toJSONObject(this.config), code: this.code, status: this.response && this.response.status ? this.response.status : null };
} });
const Hn = K.prototype, vn = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e) => {
  vn[e] = { value: e };
}), Object.defineProperties(K, vn), Object.defineProperty(Hn, "isAxiosError", { value: !0 }), K.from = (e, A, t, r, n, s) => {
  const o = Object.create(Hn);
  return h.toFlatObject(e, o, function(i) {
    return i !== Error.prototype;
  }, (i) => i !== "isAxiosError"), K.call(o, e.message, A, t, r, n), o.cause = e, o.name = e.name, s && Object.assign(o, s), o;
};
function ur(e) {
  return h.isPlainObject(e) || h.isArray(e);
}
function Ms(e) {
  return h.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function kn(e, A, t) {
  return e ? e.concat(A).map(function(r, n) {
    return r = Ms(r), !t && n ? "[" + r + "]" : r;
  }).join(t ? "." : "") : A;
}
const hi = h.toFlatObject(h, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Dt(e, A, t) {
  if (!h.isObject(e))
    throw new TypeError("target must be an object");
  A = A || new FormData();
  const r = (t = h.toFlatObject(t, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function(d, g) {
    return !h.isUndefined(g[d]);
  })).metaTokens, n = t.visitor || B, s = t.dots, o = t.indexes, i = (t.Blob || typeof Blob < "u" && Blob) && h.isSpecCompliantForm(A);
  if (!h.isFunction(n))
    throw new TypeError("visitor must be a function");
  function c(d) {
    if (d === null)
      return "";
    if (h.isDate(d))
      return d.toISOString();
    if (!i && h.isBlob(d))
      throw new K("Blob is not supported. Use a Buffer instead.");
    return h.isArrayBuffer(d) || h.isTypedArray(d) ? i && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function B(d, g, u) {
    let w = d;
    if (d && !u && typeof d == "object") {
      if (h.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), d = JSON.stringify(d);
      else if (h.isArray(d) && function(Q) {
        return h.isArray(Q) && !Q.some(ur);
      }(d) || (h.isFileList(d) || h.endsWith(g, "[]")) && (w = h.toArray(d)))
        return g = Ms(g), w.forEach(function(Q, p) {
          !h.isUndefined(Q) && Q !== null && A.append(o === !0 ? kn([g], p, s) : o === null ? g : g + "[]", c(Q));
        }), !1;
    }
    return !!ur(d) || (A.append(kn(u, g, s), c(d)), !1);
  }
  const a = [], l = Object.assign(hi, { defaultVisitor: B, convertValue: c, isVisitable: ur });
  if (!h.isObject(e))
    throw new TypeError("data must be an object");
  return function d(g, u) {
    if (!h.isUndefined(g)) {
      if (a.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + u.join("."));
      a.push(g), h.forEach(g, function(w, Q) {
        (!(h.isUndefined(w) || w === null) && n.call(A, w, h.isString(Q) ? Q.trim() : Q, u, l)) === !0 && d(w, u ? u.concat(Q) : [Q]);
      }), a.pop();
    }
  }(e), A;
}
function In(e) {
  const A = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(t) {
    return A[t];
  });
}
function rn(e, A) {
  this._pairs = [], e && Dt(e, this, A);
}
const xn = rn.prototype;
function Qi(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Rs(e, A, t) {
  if (!A)
    return e;
  const r = t && t.encode || Qi, n = t && t.serialize;
  let s;
  if (s = n ? n(A, t) : h.isURLSearchParams(A) ? A.toString() : new rn(A, t).toString(r), s) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
xn.append = function(e, A) {
  this._pairs.push([e, A]);
}, xn.toString = function(e) {
  const A = e ? function(t) {
    return e.call(this, t, In);
  } : In;
  return this._pairs.map(function(t) {
    return A(t[0]) + "=" + A(t[1]);
  }, "").join("&");
};
class Kn {
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
const Gs = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 }, pi = { isBrowser: !0, classes: { URLSearchParams: typeof URLSearchParams < "u" ? URLSearchParams : rn, FormData: typeof FormData < "u" ? FormData : null, Blob: typeof Blob < "u" ? Blob : null }, protocols: ["http", "https", "file", "blob", "url", "data"] }, Vs = typeof window < "u" && typeof document < "u", Ci = (Ln = typeof navigator < "u" && navigator.product, Vs && ["ReactNative", "NativeScript", "NS"].indexOf(Ln) < 0);
var Ln;
const fi = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", XA = { ...Object.freeze(Object.defineProperty({ __proto__: null, hasBrowserEnv: Vs, hasStandardBrowserEnv: Ci, hasStandardBrowserWebWorkerEnv: fi }, Symbol.toStringTag, { value: "Module" })), ...pi };
function Ps(e) {
  function A(t, r, n, s) {
    let o = t[s++];
    if (o === "__proto__")
      return !0;
    const i = Number.isFinite(+o), c = s >= t.length;
    return o = !o && h.isArray(n) ? n.length : o, c ? (h.hasOwnProp(n, o) ? n[o] = [n[o], r] : n[o] = r, !i) : (n[o] && h.isObject(n[o]) || (n[o] = []), A(t, r, n[o], s) && h.isArray(n[o]) && (n[o] = function(B) {
      const a = {}, l = Object.keys(B);
      let d;
      const g = l.length;
      let u;
      for (d = 0; d < g; d++)
        u = l[d], a[u] = B[u];
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
const nn = { transitional: Gs, adapter: ["xhr", "http"], transformRequest: [function(e, A) {
  const t = A.getContentType() || "", r = t.indexOf("application/json") > -1, n = h.isObject(e);
  if (n && h.isHTMLForm(e) && (e = new FormData(e)), h.isFormData(e))
    return r && r ? JSON.stringify(Ps(e)) : e;
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
        return Dt(o, new XA.classes.URLSearchParams(), Object.assign({ visitor: function(c, B, a, l) {
          return XA.isNode && h.isBuffer(c) ? (this.append(B, c.toString("base64")), !1) : l.defaultVisitor.apply(this, arguments);
        } }, i));
      }(e, this.formSerializer).toString();
    if ((s = h.isFileList(e)) || t.indexOf("multipart/form-data") > -1) {
      const o = this.env && this.env.FormData;
      return Dt(s ? { "files[]": e } : e, o && new o(), this.formSerializer);
    }
  }
  return n || r ? (A.setContentType("application/json", !1), function(o, i, c) {
    if (h.isString(o))
      try {
        return (i || JSON.parse)(o), h.trim(o);
      } catch (B) {
        if (B.name !== "SyntaxError")
          throw B;
      }
    return (c || JSON.stringify)(o);
  }(e)) : e;
}], transformResponse: [function(e) {
  const A = this.transitional || nn.transitional, t = A && A.forcedJSONParsing, r = this.responseType === "json";
  if (e && h.isString(e) && (t && !this.responseType || r)) {
    const n = !(A && A.silentJSONParsing) && r;
    try {
      return JSON.parse(e);
    } catch (s) {
      if (n)
        throw s.name === "SyntaxError" ? K.from(s, K.ERR_BAD_RESPONSE, this, null, this.response) : s;
    }
  }
  return e;
}], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: XA.classes.FormData, Blob: XA.classes.Blob }, validateStatus: function(e) {
  return e >= 200 && e < 300;
}, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
h.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  nn.headers[e] = {};
});
const sn = nn, Ui = h.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]), Sn = Symbol("internals");
function De(e) {
  return e && String(e).trim().toLowerCase();
}
function bt(e) {
  return e === !1 || e == null ? e : h.isArray(e) ? e.map(bt) : String(e);
}
function gr(e, A, t, r, n) {
  return h.isFunction(r) ? r.call(this, A, t) : (n && (A = t), h.isString(A) ? h.isString(r) ? A.indexOf(r) !== -1 : h.isRegExp(r) ? r.test(A) : void 0 : void 0);
}
class Ht {
  constructor(A) {
    A && this.set(A);
  }
  set(A, t, r) {
    const n = this;
    function s(i, c, B) {
      const a = De(c);
      if (!a)
        throw new Error("header name must be a non-empty string");
      const l = h.findKey(n, a);
      (!l || n[l] === void 0 || B === !0 || B === void 0 && n[l] !== !1) && (n[l || c] = bt(i));
    }
    const o = (i, c) => h.forEach(i, (B, a) => s(B, a, c));
    return h.isPlainObject(A) || A instanceof this.constructor ? o(A, t) : h.isString(A) && (A = A.trim()) && !((i) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim()))(A) ? o(((i) => {
      const c = {};
      let B, a, l;
      return i && i.split(`
`).forEach(function(d) {
        l = d.indexOf(":"), B = d.substring(0, l).trim().toLowerCase(), a = d.substring(l + 1).trim(), !B || c[B] && Ui[B] || (B === "set-cookie" ? c[B] ? c[B].push(a) : c[B] = [a] : c[B] = c[B] ? c[B] + ", " + a : a);
      }), c;
    })(A), t) : A != null && s(t, A, r), this;
  }
  get(A, t) {
    if (A = De(A)) {
      const r = h.findKey(this, A);
      if (r) {
        const n = this[r];
        if (!t)
          return n;
        if (t === !0)
          return function(s) {
            const o = /* @__PURE__ */ Object.create(null), i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
            let c;
            for (; c = i.exec(s); )
              o[c[1]] = c[2];
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
    if (A = De(A)) {
      const r = h.findKey(this, A);
      return !(!r || this[r] === void 0 || t && !gr(0, this[r], r, t));
    }
    return !1;
  }
  delete(A, t) {
    const r = this;
    let n = !1;
    function s(o) {
      if (o = De(o)) {
        const i = h.findKey(r, o);
        !i || t && !gr(0, r[i], i, t) || (delete r[i], n = !0);
      }
    }
    return h.isArray(A) ? A.forEach(s) : s(A), n;
  }
  clear(A) {
    const t = Object.keys(this);
    let r = t.length, n = !1;
    for (; r--; ) {
      const s = t[r];
      A && !gr(0, this[s], s, A, !0) || (delete this[s], n = !0);
    }
    return n;
  }
  normalize(A) {
    const t = this, r = {};
    return h.forEach(this, (n, s) => {
      const o = h.findKey(r, s);
      if (o)
        return t[o] = bt(n), void delete t[s];
      const i = A ? function(c) {
        return c.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (B, a, l) => a.toUpperCase() + l);
      }(s) : String(s).trim();
      i !== s && delete t[s], t[i] = bt(n), r[i] = !0;
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
    const t = (this[Sn] = this[Sn] = { accessors: {} }).accessors, r = this.prototype;
    function n(s) {
      const o = De(s);
      t[o] || (function(i, c) {
        const B = h.toCamelCase(" " + c);
        ["get", "set", "has"].forEach((a) => {
          Object.defineProperty(i, a + B, { value: function(l, d, g) {
            return this[a].call(this, c, l, d, g);
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
const ee = Ht;
function wr(e, A) {
  const t = this || sn, r = A || t, n = ee.from(r.headers);
  let s = r.data;
  return h.forEach(e, function(o) {
    s = o.call(t, s, n.normalize(), A ? A.status : void 0);
  }), n.normalize(), s;
}
function Ns(e) {
  return !(!e || !e.__CANCEL__);
}
function rt(e, A, t) {
  K.call(this, e ?? "canceled", K.ERR_CANCELED, A, t), this.name = "CanceledError";
}
h.inherits(rt, K, { __CANCEL__: !0 });
const Fi = XA.hasStandardBrowserEnv ? { write(e, A, t, r, n, s) {
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
function _s(e, A) {
  return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(A) ? function(t, r) {
    return r ? t.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : t;
  }(e, A) : A;
}
const mi = XA.hasStandardBrowserEnv ? function() {
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
function Dn(e, A) {
  let t = 0;
  const r = function(n, s) {
    n = n || 10;
    const o = new Array(n), i = new Array(n);
    let c, B = 0, a = 0;
    return s = s !== void 0 ? s : 1e3, function(l) {
      const d = Date.now(), g = i[a];
      c || (c = d), o[B] = l, i[B] = d;
      let u = a, w = 0;
      for (; u !== B; )
        w += o[u++], u %= n;
      if (B = (B + 1) % n, B === a && (a = (a + 1) % n), d - c < s)
        return;
      const Q = g && d - g;
      return Q ? Math.round(1e3 * w / Q) : void 0;
    };
  }(50, 250);
  return (n) => {
    const s = n.loaded, o = n.lengthComputable ? n.total : void 0, i = s - t, c = r(i);
    t = s;
    const B = { loaded: s, total: o, progress: o ? s / o : void 0, bytes: i, rate: c || void 0, estimated: c && o && s <= o ? (o - s) / c : void 0, event: n };
    B[A ? "download" : "upload"] = !0, e(B);
  };
}
const Js = { http: null, xhr: typeof XMLHttpRequest < "u" && function(e) {
  return new Promise(function(A, t) {
    let r = e.data;
    const n = ee.from(e.headers).normalize();
    let s, o, { responseType: i, withXSRFToken: c } = e;
    function B() {
      e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s);
    }
    if (h.isFormData(r)) {
      if (XA.hasStandardBrowserEnv || XA.hasStandardBrowserWebWorkerEnv)
        n.setContentType(!1);
      else if ((o = n.getContentType()) !== !1) {
        const [u, ...w] = o ? o.split(";").map((Q) => Q.trim()).filter(Boolean) : [];
        n.setContentType([u || "multipart/form-data", ...w].join("; "));
      }
    }
    let a = new XMLHttpRequest();
    if (e.auth) {
      const u = e.auth.username || "", w = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      n.set("Authorization", "Basic " + btoa(u + ":" + w));
    }
    const l = _s(e.baseURL, e.url);
    function d() {
      if (!a)
        return;
      const u = ee.from("getAllResponseHeaders" in a && a.getAllResponseHeaders());
      (function(w, Q, p) {
        const f = p.config.validateStatus;
        p.status && f && !f(p.status) ? Q(new K("Request failed with status code " + p.status, [K.ERR_BAD_REQUEST, K.ERR_BAD_RESPONSE][Math.floor(p.status / 100) - 4], p.config, p.request, p)) : w(p);
      })(function(w) {
        A(w), B();
      }, function(w) {
        t(w), B();
      }, { data: i && i !== "text" && i !== "json" ? a.response : a.responseText, status: a.status, statusText: a.statusText, headers: u, config: e, request: a }), a = null;
    }
    if (a.open(e.method.toUpperCase(), Rs(l, e.params, e.paramsSerializer), !0), a.timeout = e.timeout, "onloadend" in a ? a.onloadend = d : a.onreadystatechange = function() {
      a && a.readyState === 4 && (a.status !== 0 || a.responseURL && a.responseURL.indexOf("file:") === 0) && setTimeout(d);
    }, a.onabort = function() {
      a && (t(new K("Request aborted", K.ECONNABORTED, e, a)), a = null);
    }, a.onerror = function() {
      t(new K("Network Error", K.ERR_NETWORK, e, a)), a = null;
    }, a.ontimeout = function() {
      let u = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const w = e.transitional || Gs;
      e.timeoutErrorMessage && (u = e.timeoutErrorMessage), t(new K(u, w.clarifyTimeoutError ? K.ETIMEDOUT : K.ECONNABORTED, e, a)), a = null;
    }, XA.hasStandardBrowserEnv && (c && h.isFunction(c) && (c = c(e)), c || c !== !1 && mi(l))) {
      const u = e.xsrfHeaderName && e.xsrfCookieName && Fi.read(e.xsrfCookieName);
      u && n.set(e.xsrfHeaderName, u);
    }
    r === void 0 && n.setContentType(null), "setRequestHeader" in a && h.forEach(n.toJSON(), function(u, w) {
      a.setRequestHeader(w, u);
    }), h.isUndefined(e.withCredentials) || (a.withCredentials = !!e.withCredentials), i && i !== "json" && (a.responseType = e.responseType), typeof e.onDownloadProgress == "function" && a.addEventListener("progress", Dn(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && a.upload && a.upload.addEventListener("progress", Dn(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = (u) => {
      a && (t(!u || u.type ? new rt(null, e, a) : u), a.abort(), a = null);
    }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
    const g = function(u) {
      const w = /^([-+\w]{1,25})(:?\/\/|:)/.exec(u);
      return w && w[1] || "";
    }(l);
    g && XA.protocols.indexOf(g) === -1 ? t(new K("Unsupported protocol " + g + ":", K.ERR_BAD_REQUEST, e)) : a.send(r || null);
  });
} };
h.forEach(Js, (e, A) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: A });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: A });
  }
});
const Tn = (e) => `- ${e}`, yi = (e) => h.isFunction(e) || e === null || e === !1, Xs = (e) => {
  e = h.isArray(e) ? e : [e];
  const { length: A } = e;
  let t, r;
  const n = {};
  for (let s = 0; s < A; s++) {
    let o;
    if (t = e[s], r = t, !yi(t) && (r = Js[(o = String(t)).toLowerCase()], r === void 0))
      throw new K(`Unknown adapter '${o}'`);
    if (r)
      break;
    n[o || "#" + s] = r;
  }
  if (!r) {
    const s = Object.entries(n).map(([o, i]) => `adapter ${o} ` + (i === !1 ? "is not supported by the environment" : "is not available in the build"));
    throw new K("There is no suitable adapter to dispatch the request " + (A ? s.length > 1 ? `since :
` + s.map(Tn).join(`
`) : " " + Tn(s[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT");
  }
  return r;
};
function hr(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new rt(null, e);
}
function On(e) {
  return hr(e), e.headers = ee.from(e.headers), e.data = wr.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Xs(e.adapter || sn.adapter)(e).then(function(A) {
    return hr(e), A.data = wr.call(e, e.transformResponse, A), A.headers = ee.from(A.headers), A;
  }, function(A) {
    return Ns(A) || (hr(e), A && A.response && (A.response.data = wr.call(e, e.transformResponse, A.response), A.response.headers = ee.from(A.response.headers))), Promise.reject(A);
  });
}
const Mn = (e) => e instanceof ee ? e.toJSON() : e;
function Ke(e, A) {
  A = A || {};
  const t = {};
  function r(B, a, l) {
    return h.isPlainObject(B) && h.isPlainObject(a) ? h.merge.call({ caseless: l }, B, a) : h.isPlainObject(a) ? h.merge({}, a) : h.isArray(a) ? a.slice() : a;
  }
  function n(B, a, l) {
    return h.isUndefined(a) ? h.isUndefined(B) ? void 0 : r(void 0, B, l) : r(B, a, l);
  }
  function s(B, a) {
    if (!h.isUndefined(a))
      return r(void 0, a);
  }
  function o(B, a) {
    return h.isUndefined(a) ? h.isUndefined(B) ? void 0 : r(void 0, B) : r(void 0, a);
  }
  function i(B, a, l) {
    return l in A ? r(B, a) : l in e ? r(void 0, B) : void 0;
  }
  const c = { url: s, method: s, data: s, baseURL: o, transformRequest: o, transformResponse: o, paramsSerializer: o, timeout: o, timeoutMessage: o, withCredentials: o, withXSRFToken: o, adapter: o, responseType: o, xsrfCookieName: o, xsrfHeaderName: o, onUploadProgress: o, onDownloadProgress: o, decompress: o, maxContentLength: o, maxBodyLength: o, beforeRedirect: o, transport: o, httpAgent: o, httpsAgent: o, cancelToken: o, socketPath: o, responseEncoding: o, validateStatus: i, headers: (B, a) => n(Mn(B), Mn(a), !0) };
  return h.forEach(Object.keys(Object.assign({}, e, A)), function(B) {
    const a = c[B] || n, l = a(e[B], A[B], B);
    h.isUndefined(l) && a !== i || (t[B] = l);
  }), t;
}
const Ei = "1.6.6", on = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, A) => {
  on[e] = function(t) {
    return typeof t === e || "a" + (A < 1 ? "n " : " ") + e;
  };
});
const Rn = {};
on.transitional = function(e, A, t) {
  function r(n, s) {
    return "[Axios v1.6.6] Transitional option '" + n + "'" + s + (t ? ". " + t : "");
  }
  return (n, s, o) => {
    if (e === !1)
      throw new K(r(s, " has been removed" + (A ? " in " + A : "")), K.ERR_DEPRECATED);
    return A && !Rn[s] && (Rn[s] = !0, console.warn(r(s, " has been deprecated since v" + A + " and will be removed in the near future"))), !e || e(n, s, o);
  };
};
const vr = { assertOptions: function(e, A, t) {
  if (typeof e != "object")
    throw new K("options must be an object", K.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let n = r.length;
  for (; n-- > 0; ) {
    const s = r[n], o = A[s];
    if (o) {
      const i = e[s], c = i === void 0 || o(i, s, e);
      if (c !== !0)
        throw new K("option " + s + " must be " + c, K.ERR_BAD_OPTION_VALUE);
    } else if (t !== !0)
      throw new K("Unknown option " + s, K.ERR_BAD_OPTION);
  }
}, validators: on }, ne = vr.validators;
class vt {
  constructor(A) {
    this.defaults = A, this.interceptors = { request: new Kn(), response: new Kn() };
  }
  async request(A, t) {
    try {
      return await this._request(A, t);
    } catch (r) {
      const n = {};
      throw Error.captureStackTrace ? Error.captureStackTrace(n) : n.stack = new Error().stack, n.stack = n.stack.replace(/^.+\n/, ""), r.stack.endsWith(n.stack.replace(/^.+\n.+\n/, "")) || (r.stack += `
` + n.stack), r;
    }
  }
  _request(A, t) {
    typeof A == "string" ? (t = t || {}).url = A : t = A || {}, t = Ke(this.defaults, t);
    const { transitional: r, paramsSerializer: n, headers: s } = t;
    r !== void 0 && vr.assertOptions(r, { silentJSONParsing: ne.transitional(ne.boolean), forcedJSONParsing: ne.transitional(ne.boolean), clarifyTimeoutError: ne.transitional(ne.boolean) }, !1), n != null && (h.isFunction(n) ? t.paramsSerializer = { serialize: n } : vr.assertOptions(n, { encode: ne.function, serialize: ne.function }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let o = s && h.merge(s.common, s[t.method]);
    s && h.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (u) => {
      delete s[u];
    }), t.headers = ee.concat(o, s);
    const i = [];
    let c = !0;
    this.interceptors.request.forEach(function(u) {
      typeof u.runWhen == "function" && u.runWhen(t) === !1 || (c = c && u.synchronous, i.unshift(u.fulfilled, u.rejected));
    });
    const B = [];
    let a;
    this.interceptors.response.forEach(function(u) {
      B.push(u.fulfilled, u.rejected);
    });
    let l, d = 0;
    if (!c) {
      const u = [On.bind(this), void 0];
      for (u.unshift.apply(u, i), u.push.apply(u, B), l = u.length, a = Promise.resolve(t); d < l; )
        a = a.then(u[d++], u[d++]);
      return a;
    }
    l = i.length;
    let g = t;
    for (d = 0; d < l; ) {
      const u = i[d++], w = i[d++];
      try {
        g = u(g);
      } catch (Q) {
        w.call(this, Q);
        break;
      }
    }
    try {
      a = On.call(this, g);
    } catch (u) {
      return Promise.reject(u);
    }
    for (d = 0, l = B.length; d < l; )
      a = a.then(B[d++], B[d++]);
    return a;
  }
  getUri(A) {
    return Rs(_s((A = Ke(this.defaults, A)).baseURL, A.url), A.params, A.paramsSerializer);
  }
}
h.forEach(["delete", "get", "head", "options"], function(e) {
  vt.prototype[e] = function(A, t) {
    return this.request(Ke(t || {}, { method: e, url: A, data: (t || {}).data }));
  };
}), h.forEach(["post", "put", "patch"], function(e) {
  function A(t) {
    return function(r, n, s) {
      return this.request(Ke(s || {}, { method: e, headers: t ? { "Content-Type": "multipart/form-data" } : {}, url: r, data: n }));
    };
  }
  vt.prototype[e] = A(), vt.prototype[e + "Form"] = A(!0);
});
const kt = vt;
class an {
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
      r.reason || (r.reason = new rt(n, s, o), t(r.reason));
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
    return { token: new an(function(t) {
      A = t;
    }), cancel: A };
  }
}
const bi = an, kr = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
Object.entries(kr).forEach(([e, A]) => {
  kr[A] = e;
});
const Hi = kr, Y = function e(A) {
  const t = new kt(A), r = Ts(kt.prototype.request, t);
  return h.extend(r, kt.prototype, t, { allOwnKeys: !0 }), h.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(n) {
    return e(Ke(A, n));
  }, r;
}(sn);
Y.Axios = kt, Y.CanceledError = rt, Y.CancelToken = bi, Y.isCancel = Ns, Y.VERSION = Ei, Y.toFormData = Dt, Y.AxiosError = K, Y.Cancel = Y.CanceledError, Y.all = function(e) {
  return Promise.all(e);
}, Y.spread = function(e) {
  return function(A) {
    return e.apply(null, A);
  };
}, Y.isAxiosError = function(e) {
  return h.isObject(e) && e.isAxiosError === !0;
}, Y.mergeConfig = Ke, Y.AxiosHeaders = ee, Y.formToJSON = (e) => Ps(h.isHTMLForm(e) ? new FormData(e) : e), Y.getAdapter = Xs, Y.HttpStatusCode = Hi, Y.default = Y;
var vi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ki(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const Ii = ki(typeof self == "object" ? self.FormData : window.FormData), JA = "shake.sdk.appToken", Gn = "shake.sdk.isAppRegistered", Vn = "shake.sdk.isAppActive", Pn = "shake.sdk.isShakeOpened", Nn = "shake.sdk.shakeState", _n = "shake.sdk.shakeDeviceId", we = class we {
  constructor(A, t, r, n) {
    F(this, "instance");
    F(this, "instanceAuth");
    F(this, "version");
    F(this, "bundleId");
    F(this, "deviceId");
    F(this, "storageProvider");
    F(this, "handlers", {});
    Y.defaults.withCredentials = !1, this.storageProvider = A, this.bundleId = r, this.deviceId = n, this.version = t, this.instance = Y.create({ baseURL: cr.apiHost }), this.instanceAuth = Y.create({ baseURL: cr.oAuthHost }), this.setRequestInterceptors(), this.setResponseInterceptors();
  }
  static getInstance(A, t, r, n) {
    return we.serviceInstance || (we.serviceInstance = new we(A, t, r, n)), we.serviceInstance;
  }
  addTokenToRequest(A) {
    var r;
    const t = this.storageProvider.getObject(JA);
    return t && t.access_token && !((r = A == null ? void 0 : A.url) != null && r.startsWith("http://localhost:5000/auth/oauth2/")) && A.headers && (A.headers.authorization = `${t.token_type} ${t.access_token}`), A;
  }
  addHeadersToRequest(A) {
    var t;
    return (t = A == null ? void 0 : A.url) != null && t.startsWith("http://localhost:5000/auth/oauth2/") || A.headers && (A.headers["X-DEVICE-ID"] = this.deviceId, A.headers["X-APP-ID"] = this.bundleId, A.headers["X-SHAKE-VERSION"] = this.version), A;
  }
  refreshToken() {
    var r;
    const A = new Ii(), t = (r = this.storageProvider.getObject(JA)) == null ? void 0 : r.refresh_token;
    return A.append("refresh_token", t), A.append("grant_type", "refresh_token"), A.append("client_id", "shake_dashboard"), this.postAuth({ resource: "token", data: A, config: { headers: { "Content-Type": "application/x-www-form-urlencoded" } } }).then((n) => (n && n.data && n.data.access_token && this.storageProvider.setObject(JA, n.data), n));
  }
  handle401Error(A) {
    if (this.hasTokensInStorage())
      return this.refreshToken().then((t) => {
        var r, n;
        return t ? (this.storageProvider.setObject(JA, t.data), (n = (r = this.handlers).renewTokenHandler) == null || n.call(r, t.data), this.addTokenToRequest(A)) : new Promise(() => {
          this.storageProvider.removeItem(JA), location.reload();
        });
      }).catch(() => (this.storageProvider.getObject(JA), new Promise(() => {
        this.storageProvider.removeItem(JA), location.reload();
      })));
  }
  hasTokensInStorage() {
    return !!this.storageProvider.getObject(JA);
  }
  setRequestInterceptors() {
    this.instance.interceptors.request.use((A) => (this.addTokenToRequest(A), this.addHeadersToRequest(A), A), (A) => Promise.reject(A)), this.instanceAuth.interceptors.request.use((A) => A, (A) => Promise.reject(A));
  }
  setResponseInterceptors() {
    this.instance.interceptors.response.use((A) => A, (A) => {
      var r, n, s, o, i;
      const t = A.config;
      return t && !t._retry && ((r = A.response) == null ? void 0 : r.status) === 401 && t.url !== `${cr.oAuthHost}token` ? (t._retry = !0, (n = this.handle401Error(t)) == null ? void 0 : n.then(() => this.instance(t))) : t && !t._retry && ((s = A.response) == null ? void 0 : s.status) === 402 ? (i = (o = this.handlers).handle402Error) == null ? void 0 : i.call(o) : Promise.reject(A);
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
F(we, "serviceInstance");
let ze = we;
var Ws = ((e) => (e.WEB = "Web", e))(Ws || {}), Tt = ((e) => (e.WEB = "Web", e))(Tt || {}), Xe = ((e) => (e.SUGGESTION = "improvement", e.BUG = "bug", e.QUESTION = "question", e))(Xe || {}), Ys = ((e) => (e.MANUAL = "manual", e.AUTOMATIC = "automatic", e))(Ys || {}), Ot = ((e) => (e.TITLE = "title", e.TEXT_INPUT = "text_input", e.EMAIL = "email", e.PICKER = "picker", e))(Ot || {});
const xi = ["geolocation", "camera", "microphone", "notifications", "persistent-storage", "screen-wake-lock"];
class Ki {
  constructor() {
    F(this, "ticket", null);
    F(this, "attachments", []);
    F(this, "description", "");
    F(this, "feedbackType", Xe.BUG);
  }
}
class Li {
  constructor(A) {
    F(this, "storageProvider");
    F(this, "isSDKEnabled", () => this.isAppRegistered() && this.isAppActive());
    F(this, "isAppRegistered", () => this.storageProvider.getBoolean(Gn));
    F(this, "setAppRegistered", (A) => this.storageProvider.setBoolean(Gn, A));
    F(this, "isAppActive", () => this.storageProvider.getBoolean(Vn));
    F(this, "setAppActive", (A) => this.storageProvider.setBoolean(Vn, A));
    F(this, "isShakeOpened", () => this.storageProvider.getBoolean(Pn) ?? !1);
    F(this, "setShakeOpened", (A) => this.storageProvider.setBoolean(Pn, A));
    F(this, "getShakeState", () => this.storageProvider.getObject(Nn) ?? new Ki());
    F(this, "setShakeState", (A) => this.storageProvider.setObject(Nn, A));
    F(this, "getShakeDeviceId", () => this.storageProvider.getString(_n));
    F(this, "setShakeDeviceId", (A) => this.storageProvider.setString(_n, A));
    this.storageProvider = A;
  }
}
class Si {
  constructor() {
    F(this, "addObservers", []);
    F(this, "removeObservers", []);
    F(this, "addAttachment", (A, t) => {
      A == null || A.attachments.push(t), j.localStorage.setShakeState(A), this.notifyAdded(t);
    });
    F(this, "removeAttachment", (A, t) => {
      A.attachments = A.attachments.filter((r) => r.name !== t.name), j.localStorage.setShakeState(A), this.notifyRemoved(t);
    });
    F(this, "notifyAdded", (A) => this.addObservers.forEach((t) => t(A)));
    F(this, "notifyRemoved", (A) => this.removeObservers.forEach((t) => t(A)));
  }
}
class Di {
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
const Ie = class Ie {
};
F(Ie, "storageProvider", new Di()), F(Ie, "localStorage", new Li(Ie.storageProvider)), F(Ie, "attachmentsManager", new Si());
let j = Ie;
const cn = "shakeSdk: ", Z = (e) => {
  console.debug(`${cn} ${e}`);
}, Jn = (e) => {
  console.info(`${cn} ${e}`);
}, Qe = (e) => {
  console.warn(`${cn} ${e}`);
}, Bn = "0.1.0";
class Ti {
  constructor() {
    F(this, "data", j.localStorage);
    F(this, "storage", j.storageProvider);
    F(this, "authApi");
    const A = ze.getInstance(j.storageProvider, Bn, DA.bundleId, this.data.getShakeDeviceId() ?? "");
    this.authApi = new ni(A);
  }
  async getToken(A, t) {
    const r = this.storage.getObject(JA);
    if (r)
      return r;
    try {
      const { data: n } = await this.authApi.getToken(A, t);
      return this.storage.setObject(JA, n), n ?? null;
    } catch (n) {
      return Z("Error getting token: " + (n == null ? void 0 : n.message)), null;
    }
  }
  async registerApp(A) {
    if (!A)
      return !1;
    try {
      return await this.authApi.registerApp(DA.bundleId, Tt.WEB, !1, Ws.WEB), !0;
    } catch (t) {
      return Z("Error registering the app: " + (t == null ? void 0 : t.message)), !1;
    }
  }
  async authenticate(A, t) {
    var r;
    try {
      const n = await this.getToken(A, t);
      if (!n)
        return;
      const s = await this.registerApp(n);
      this.data.setAppRegistered(s), this.data.setAppActive(!0);
    } catch (n) {
      Z("Error initializing the app: " + (n == null ? void 0 : n.message)), ((r = n.response) == null ? void 0 : r.status) === 404 && (Z("App archived"), this.data.setAppRegistered(!1), this.data.setAppActive(!1));
    }
  }
}
class Oi {
  constructor({ storage: A, version: t, bundleId: r, deviceId: n }) {
    F(this, "baseApi");
    this.baseApi = ze.getInstance(A, t, r, n);
  }
  sendFeedback(A, t) {
    return this.baseApi.post({ resource: `/issue_tracking/apps/${A}`, data: { bundle_id: A, ...t }, config: { headers: { "Content-Type": "application/json" } } });
  }
}
class Mi {
  constructor({ storage: A, version: t, bundleId: r, deviceId: n }) {
    F(this, "baseApi");
    this.baseApi = ze.getInstance(A, t, r, n);
  }
  uploadFile(A) {
    const t = new FormData();
    return t.append("file", A), this.baseApi.post({ resource: "/files", data: t, config: { headers: { "Content-Type": "multipart/form-data" } } });
  }
}
var uA = ((e) => (e[e.IMAGE = 0] = "IMAGE", e[e.VIDEO = 1] = "VIDEO", e))(uA || {});
class Ri {
  constructor() {
    F(this, "data", j.localStorage);
    F(this, "feedbackApi");
    F(this, "filesApi");
    F(this, "baseApiParams", { storage: j.storageProvider, version: Bn, bundleId: DA.bundleId, deviceId: this.data.getShakeDeviceId() ?? "" });
    this.feedbackApi = new Oi(this.baseApiParams), this.filesApi = new Mi(this.baseApiParams);
  }
  async sendUserFeedback(A, t) {
    let r, n, s = [];
    t.length && (r = await this.uploadScreenshot(t), n = await this.uploadVideo(t), s = await this.uploadAttachments(t)), A.screenshot_url = r, A.video_url = n, A.files = s;
    try {
      await this.feedbackApi.sendFeedback(DA.bundleId, A), Z("Ticket sent successfully.");
    } catch (o) {
      return Z("Error sending user feedback: " + (o == null ? void 0 : o.message)), null;
    }
  }
  async uploadScreenshot(A) {
    const t = A.find((r) => r.type === uA.IMAGE);
    if (t) {
      const r = await this.convertAttachmentToFile(t);
      if (r)
        return await this.uploadFile(r);
    }
  }
  async uploadVideo(A) {
    const t = A.find((r) => r.type === uA.VIDEO);
    if (t) {
      const r = await this.convertAttachmentToFile(t);
      if (r)
        return await this.uploadFile(r);
    }
  }
  async uploadAttachments(A) {
    const t = A.find((o) => o.type === uA.IMAGE), r = A.find((o) => o.type === uA.VIDEO), n = A.filter((o) => o.data !== (t == null ? void 0 : t.data) && o.data !== (r == null ? void 0 : r.data)).slice(0, 9), s = await this.convertAttachmentsToFiles(n) ?? [];
    return await this.sendFiles(s) ?? [];
  }
  async uploadFile(A) {
    try {
      const { data: t } = await this.filesApi.uploadFile(A);
      return t.url;
    } catch (t) {
      return void Z("Error uploading file: " + (t == null ? void 0 : t.message));
    }
  }
  async blobToFile(A) {
    try {
      return Y.get(A.data, { responseType: "arraybuffer" }).then((t) => new File([t.data], A.name, { type: t.data.type }));
    } catch {
      return null;
    }
  }
  async convertAttachmentsToFiles(A) {
    const t = [];
    return await Promise.all(A.map(async (r) => {
      const n = await this.blobToFile(r);
      n && t.push(n);
    })), t;
  }
  async convertAttachmentToFile(A) {
    return this.blobToFile(A);
  }
  async sendFiles(A) {
    const t = [];
    return await Promise.all(A.map(async (r) => {
      await this.uploadFile(r).then((n) => {
        n && t.push({ url: n });
      });
    })), t;
  }
}
class Le {
}
F(Le, "shakeAuthService", new Ti()), F(Le, "shakeFeedbackService", new Ri());
var Mt = ((e) => (e[e.EN = 0] = "EN", e))(Mt || {});
const Zs = () => {
  const e = document.createElement("button");
  return e.classList.add("shake-sdk-button"), e;
}, ZA = (e) => {
  const A = document.createElement("img");
  return A.classList.add("shake-sdk-image"), A.src = e, A;
}, js = (e) => {
  const A = document.createElement("p");
  return A.classList.add("shake-sdk-text-h2"), A.innerText = e, A;
}, qs = (e) => {
  const A = document.createElement("p");
  return A.classList.add("shake-sdk-text-button"), A.innerText = e, A;
}, O = async (e) => new CSSStyleSheet().replace(e);
let de;
(async () => [await O(".shake-sdk-bubble{padding:0;border-radius:100px;border-width:0;cursor:pointer;display:flex;align-items:center;justify-content:center;position:fixed;background-color:#fff;width:50px;height:50px;box-shadow:0 2px 2px #e1e1e1;z-index:2147483647;transition:none}"), await O(".shake-sdk-button{border-radius:var(--shake-sdk-button-border-radius);border:1px solid var(--shake-sdk-grey30);background:var(--shake-sdk-pureWhite);padding:4px 10px 3px 7px;display:flex;justify-content:center;align-items:center;cursor:pointer}.shake-sdk-button:disabled{cursor:not-allowed;opacity:.3}"), await O(".shake-sdk-card{flex:1;background-color:var(--shake-sdk-bg-color-primary);border-radius:var(--shake-sdk-border-radius)}"), await O(".shake-sdk-circle-button{padding:0;border-radius:100px;border-width:0;cursor:pointer;display:flex;align-items:center;justify-content:center}"), await O(""), await O(""), await O(".shake-sdk-context-menu{position:fixed;display:none;width:260px;z-index:2147483647;transform:translate(20%,-25%);border-radius:10px;border-width:1px;border-color:var(--shake-sdk-bg-color-outline);padding:8px 0;background-color:var(--shake-sdk-bg-color-primary-inversed-highlight);box-shadow:0 2px 10px #1c1c1e}"), await O(".shake-sdk-context-menu-header{background-color:transparent;border:0;display:flex;width:100%;padding:8px 20px;cursor:pointer}.shake-sdk-context-menu-header-text{color:var(--shake-sdk-text-color-secondary);font-size:12px}"), await O(".shake-sdk-context-menu-item{background-color:transparent;border:0;display:flex;width:100%;padding:8px 20px;cursor:pointer}.shake-sdk-context-menu-item:hover{background-color:var(--shake-sdk-bg-color-outline)}.shake-sdk-context-menu-item img{width:20px;height:20px;margin-right:10px}.shake-sdk-context-menu-item p{color:var(--shake-sdk-text-color-popup-menu-item)}"), await O(".shake-sdk-select-dropdown{border-radius:var(--shake-sdk-border-radius-light);border:1px solid var(--shake-sdk-bg-color-primary-highlight);background:var(--shake-sdk-bg-color-secondary);padding:9px 18px 12px 12px;display:flex;flex-direction:column;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.shake-sdk-select-dropdown.active{border:1px solid var(--shake-sdk-color-accent)}.shake-sdk-dropdown-icon{position:absolute;right:16px;top:16px;cursor:pointer}.shake-sdk-select-dropdown-label{font-size:12px;color:var(--shake-sdk-text-color-secondary);font-family:Roobert,serif;-webkit-font-smoothing:antialiased;cursor:pointer;-webkit-user-select:none;user-select:none}.shake-sdk-select-dropdown-chosen{color:var(--shake-sdk-text-color-primary)}.shake-sdk-select-options{padding:8px 0;margin-top:2px;background:var(--shake-sdk-bg-color-secondary);border-radius:var(--shake-sdk-border-radius-light);border:1px solid var(--shake-sdk-bg-color-primary-highlight);list-style-type:none;display:none;position:absolute;width:333px;z-index:1}.shake-sdk-select-option{list-style-type:none;font-family:Roobert,serif;padding:10px 20px 12px 12px;cursor:pointer;color:var(--shake-sdk-text-color-primary);font-size:14px;font-weight:500}.shake-sdk-select-option:hover{background-color:var(--shake-sdk-bg-color-primary-highlight)}"), await O(".shake-sdk-sheet-background{position:fixed;top:0;left:0;width:100%;height:100%;z-index:2147483647;display:flex;flex-direction:column-reverse;background-color:#000000b3;box-sizing:border-box}.shake-sdk-sheet{padding:40px;display:flex;flex-direction:column;background-color:var(--shake-sdk-bg-color-primary);border-radius:var(--shake-sdk-border-radius) var(--shake-sdk-border-radius) 0 0}.shake-sdk-sheet>p{text-align:center;margin-bottom:25px}.shake-sdk-sheet-item{cursor:pointer;display:flex;flex-direction:row;background-color:transparent;border:0;padding:12px;margin:0}.shake-sdk-sheet-item:hover{background-color:var(--shake-sdk-bg-color-primary-highlight)}.shake-sdk-sheet-item img{text-align:center;margin-right:12px;width:27px;height:27px}"), await O(".shake-sdk-text-p1{font-size:16px;font-weight:500;line-height:20px;letter-spacing:0;color:var(--shake-sdk-text-color-primary);-webkit-font-smoothing:antialiased;margin:0}.shake-sdk-text-p2{font-size:14px;font-weight:500;line-height:18px;letter-spacing:0;color:var(--shake-sdk-text-color-secondary);-webkit-font-smoothing:antialiased;margin:0}.shake-sdk-text-p3{color:var(--shake-sdk-text-color-secondary);font-size:12px;font-weight:500;line-height:16px;letter-spacing:0;-webkit-font-smoothing:antialiased;margin:0}.shake-sdk-text-h2{font-size:24px;font-weight:700;line-height:32px;letter-spacing:0;color:var(--shake-sdk-text-color-primary);-webkit-font-smoothing:antialiased;margin:0}.shake-sdk-text-button{font-size:14px;font-weight:700;line-height:20px;letter-spacing:0;color:var(--shake-sdk-text-color-accent-button);-webkit-font-smoothing:antialiased;margin:0}"), await O(".shake-sdk-textarea-container{width:100%;display:flex;position:relative;z-index:0}.shake-sdk-textarea{flex:1;background-color:transparent;border:1px solid var(--shake-sdk-bg-color-primary-highlight);border-radius:var(--shake-sdk-border-radius-light);font-family:Roobert,serif;padding:28px 12px 12px;resize:none;width:100%;color:var(--shake-sdk-text-color-primary);font-size:16px}.shake-sdk-textarea:focus-visible{outline:none;border:1px solid var(--shake-sdk-color-accent)}.shake-sdk-textarea::placeholder{color:var(--shake-sdk-text-color-secondary)}.shake-sdk-textarea-label{position:absolute;font-family:Roobert,serif;top:28px;left:2px;font-size:12px;color:var(--shake-sdk-text-color-secondary);pointer-events:none;transform-origin:top left;transform:translateY(-50%) translate(10px)}"), await O(".toast-notification{width:300px;max-height:min-content;bottom:0;margin-bottom:20px;opacity:.8;margin-left:0;top:20px;right:20px;position:fixed;z-index:2147483647;display:flex;flex-direction:row;cursor:default;border:1px solid var(--shake-sdk-bg-color-outline);border-radius:var(--shake-sdk-border-radius-light);background:var(--shake-sdk-bg-color-primary-inversed-highlight);color:var(--shake-sdk-text-color-popup-menu-item);box-shadow:0 2px 10px var(--shake-sdk-bg-color-primary-inversed)}.message-container{width:88%;padding-bottom:14px;padding-left:20px;color:var(--shake-sdk-text-color-popup-menu-item);border-radius:var(--shake-sdk-border-radius-light);cursor:default;font-size:14px;font-family:Roobert,serif;background:var(--shake-sdk-bg-color-primary-inversed-highlight)}.title-container{width:88%;padding-left:20px;padding-bottom:4px;color:var(--shake-sdk-text-color-popup-menu-item);border-radius:var(--shake-sdk-border-radius-light);cursor:default;font-size:16px;font-family:Roobert,serif;background:var(--shake-sdk-bg-color-primary-inversed-highlight)}.content-container{width:88%;padding-top:14px;padding-left:20px;color:var(--shake-sdk-text-color-popup-menu-item);border-radius:var(--shake-sdk-border-radius-light);cursor:default;font-size:14px;font-family:Roobert,serif;background:var(--shake-sdk-bg-color-primary-inversed-highlight);display:flex;flex-direction:column}.close-notification{width:12%;height:32px}.close-notification>img{padding-top:8px;padding-left:5px;font-weight:900;color:var(--shake-sdk-text-color-popup-menu-item);cursor:pointer}"), await O(".shake-sdk-toolbar{width:100%;height:32px;background-color:transparent;display:flex;flex-direction:row;justify-content:right}.shake-sdk-toolbar-button{display:flex;align-items:center;justify-content:center;border:none;cursor:pointer;width:32px;height:32px;background-color:transparent;margin-left:-10px}.shake-sdk-toolbar-button:hover{opacity:.7}@media only screen and (min-width: 1025px){.shake-sdk-toolbar{display:none}}"), await O(".shake-sdk-video{width:100%}"), await O(".shake-sdk-main-button{position:fixed;top:50%;right:-32px;height:28px;min-width:138px;z-index:2147483647;transform:rotate(-90deg);margin-top:-14px}.shake-sdk-main-button-icon{margin-right:4px;width:21px;height:21px;border-radius:4px}.shake-sdk-main-button-text{color:var(--shake-sdk-text-color-primary);letter-spacing:-.04em}"), await O(".shake-sdk-content{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;background-color:#000000b3;z-index:2147483647;overflow:hidden}.shake-sdk-content-wrap{flex:1;display:flex;flex-direction:row;padding:40px}.shake-sdk-content-left{display:flex;flex:1;margin-right:20px;position:relative}.shake-sdk-content-right{display:flex}.shake-sdk-close-button{position:absolute;top:-15px;left:-15px;width:40px;height:40px}@media only screen and (max-width: 1024px){.shake-sdk-content-wrap{background-color:var(--shake-sdk-bg-color-primary);padding:0}.shake-sdk-content-left{display:none}.shake-sdk-content-right{flex:1}.shake-sdk-close-button{display:none}}.shake-sdk-content p,h1,h2,h3,ul,li,label,div{font-family:Roobert,serif;margin:0}.shake-sdk-sheet p,h1,h2,h3,ul,li,label,div{font-family:Roobert,serif}.shake-sdk-content *{scrollbar-width:thin;scrollbar-color:#2C2C2E transparent}.shake-sdk-content *::-webkit-scrollbar{width:10px}.shake-sdk-content *::-webkit-scrollbar-track{background:none}.shake-sdk-content *::-webkit-scrollbar-thumb{background-color:#2c2c2e;border-radius:10px}.shake-sdk-content ::-webkit-scrollbar-corner{background-color:transparent}"), await O(".shake-sdk-new-ticket{padding:32px 20px;display:flex;flex-direction:column;background-color:var(--shake-sdk-bg-color-primary);justify-content:space-between;width:336px}.shake-sdk-new-ticket-form{display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden}.shake-sdk-new-ticket-title{padding-bottom:32px}.shake-sdk-styled-textarea{padding-top:12px;margin-bottom:12px}.shake-sdk-submit-button{background-color:var(--shake-sdk-color-accent);padding:9px 20px 11px;border-radius:var(--shake-sdk-border-radius-light)}.shake-sdk-new-ticket *{scrollbar-color:#e8e8e8 transparent!important}.shake-sdk-new-ticket *::-webkit-scrollbar-thumb{background-color:#e8e8e8!important}"), await O(".shake-sdk-attachments-items-small{display:flex;flex-direction:row;min-height:210px;width:100%;overflow-x:auto;overflow-y:hidden}@media only screen and (min-width: 1025px){.shake-sdk-attachments-items-small{display:none}}"), await O(".shake-sdk-attachment-item-small{display:flex;min-width:100px;max-width:100px;height:200px;margin-right:10px;cursor:pointer;overflow:hidden;position:relative}.shake-sdk-attachment-item-remove-small{position:absolute;top:15px;right:15px;width:30px;height:30px;background-color:var(--shake-sdk-bg-color-primary-inversed);opacity:.7}.shake-sdk-attachment-item-thumbnail-small{background-color:#000;height:100%;width:100%;object-fit:cover;border-radius:10px}"), await O(".shake-sdk-attachments-add-item-small{display:flex;min-width:100px;max-width:100px;height:200px;margin-right:10px;align-items:center;justify-content:center;overflow:hidden;position:relative}.shake-sdk-attachment-add-button-small{width:29px;height:29px;cursor:pointer;background-color:var(--shake-sdk-bg-color-secondary)}"), await O(".shake-sdk-attachments-card{padding:20px;display:flex;flex-direction:row;background-color:var(--shake-sdk-bg-color-primary-inversed)}.shake-sdk-attachments-list-wrap{display:flex;flex-direction:row;flex:0;margin-right:12px}.shake-sdk-attachments-preview-wrap{display:flex;flex-direction:row;flex:1}@media only screen and (max-width: 1024px){.shake-sdk-attachments-card{display:none}}"), await O(".shake-sdk-attachments-items{display:flex;flex-direction:column;overflow:auto;overflow-x:hidden}"), await O(".shake-sdk-attachment-item{width:140px;display:flex;flex-direction:column;margin-bottom:20px;cursor:pointer}.shake-sdk-attachment-item-card{position:relative;padding:8px;background-color:transparent}.shake-sdk-attachment-item-selected .shake-sdk-attachment-item-card{background-color:var(--shake-sdk-bg-color-primary-inversed-highlight)}.shake-sdk-attachment-remove{position:absolute;top:15px;right:15px;width:30px;height:30px;background-color:var(--shake-sdk-bg-color-primary-inversed);opacity:.7}.shake-sdk-attachment-item-thumbnail{background-color:#fff;width:100%;height:61px;object-fit:cover;border-radius:10px}.shake-sdk-attachment-item-title{display:flex;justify-content:center}.shake-sdk-attachment-title-box{display:flex;width:78px;height:20px;margin:2px;text-align:center;align-items:center;justify-content:center;border-radius:4px;background-color:transparent}.shake-sdk-attachment-item-selected .shake-sdk-attachment-title-box{background-color:var(--shake-sdk-color-accent-dark)}.shake-sdk-attachment-title-box p{color:var(--shake-sdk-text-color-accent-button)}"), await O(".shake-sdk-attachments-add-item{width:140px;display:flex;align-items:center;justify-content:center}.shake-sdk-attachment-add-button{width:29px;height:29px;background-color:var(--shake-sdk-bg-color-primary-inversed-highlight)}"), await O(".shake-sdk-attachments-preview{margin-top:36px;flex:1;overflow:hidden}"), await O(".shake-sdk-image-preview{height:100%}.shake-sdk-image-preview img{border-radius:10px;display:block;max-width:100%;max-height:100%;height:auto;width:auto}"), await O(".shake-sdk-video-preview{height:100%}.shake-sdk-video-preview video{border-radius:10px;display:block;max-width:100%;max-height:100%;height:auto;width:auto}"), await O(".shake-sdk-image-preview-root-fs{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;background-color:#000;z-index:2147483647}.shake-sdk-image-preview-toolbar-fs{width:100%;flex:0 0 32px;background-color:transparent;display:flex;flex-direction:row;justify-content:right}.shake-sdk-image-preview-content-fs{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;padding:32px}.shake-sdk-image-preview-fs{display:block;max-width:100%;max-height:100%;height:auto;width:auto;border-radius:10px}"), await O(".shake-sdk-video-preview-root-fs{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;background-color:#000;z-index:2147483647}.shake-sdk-video-preview-toolbar-fs{width:100%;height:32px;background-color:transparent;display:flex;flex-direction:row;justify-content:right}.shake-sdk-video-preview-fs{width:100%;height:100%}")])().then((e) => de = e);
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
var Ir = function(e, A) {
  return Ir = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, Ir(e, A);
};
function MA(e, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  function t() {
    this.constructor = e;
  }
  Ir(e, A), e.prototype = A === null ? Object.create(A) : (t.prototype = A.prototype, new t());
}
var xr = function() {
  return xr = Object.assign || function(e) {
    for (var A, t = 1, r = arguments.length; t < r; t++)
      for (var n in A = arguments[t])
        Object.prototype.hasOwnProperty.call(A, n) && (e[n] = A[n]);
    return e;
  }, xr.apply(this, arguments);
};
function fA(e, A, t, r) {
  return new (t || (t = Promise))(function(n, s) {
    function o(B) {
      try {
        c(r.next(B));
      } catch (a) {
        s(a);
      }
    }
    function i(B) {
      try {
        c(r.throw(B));
      } catch (a) {
        s(a);
      }
    }
    function c(B) {
      var a;
      B.done ? n(B.value) : (a = B.value, a instanceof t ? a : new t(function(l) {
        l(a);
      })).then(o, i);
    }
    c((r = r.apply(e, A || [])).next());
  });
}
function QA(e, A) {
  var t, r, n, s, o = { label: 0, sent: function() {
    if (1 & n[0])
      throw n[1];
    return n[1];
  }, trys: [], ops: [] };
  return s = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function i(c) {
    return function(B) {
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
      }([c, B]);
    };
  }
}
function it(e, A, t) {
  if (t || arguments.length === 2)
    for (var r, n = 0, s = A.length; n < s; n++)
      !r && n in A || (r || (r = Array.prototype.slice.call(A, 0, n)), r[n] = A[n]);
  return e.concat(r || A);
}
for (var re = function() {
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
}(), Ar = function(e, A) {
  return re.fromClientRect(e, A.getBoundingClientRect());
}, Rt = function(e) {
  for (var A = [], t = 0, r = e.length; t < r; ) {
    var n = e.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var s = e.charCodeAt(t++);
      (64512 & s) == 56320 ? A.push(((1023 & n) << 10) + (1023 & s) + 65536) : (A.push(n), t--);
    } else
      A.push(n);
  }
  return A;
}, z = function() {
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
}, Gi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Vi = typeof Uint8Array > "u" ? [] : new Uint8Array(256), at = 0; at < 64; at++)
  Vi[Gi.charCodeAt(at)] = at;
for (var Pi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ge = typeof Uint8Array > "u" ? [] : new Uint8Array(256), ct = 0; ct < 64; ct++)
  Ge[Pi.charCodeAt(ct)] = ct;
for (var Xn = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, Ni = function() {
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
}(), _i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ji = typeof Uint8Array > "u" ? [] : new Uint8Array(256), Bt = 0; Bt < 64; Bt++)
  Ji[_i.charCodeAt(Bt)] = Bt;
var oe = 10, Kr = 13, Ve = 15, lt = 17, Te = 18, Xi = 19, Wn = 20, Lr = 21, Oe = 22, pe = 24, bA = 25, Pe = 26, Ne = 27, Ce = 28, Ee = 30, dt = 32, ut = 33, Sr = 34, Dr = 35, We = 37, Tr = 38, It = 39, xt = 40, Yn = 42, Wi = [9001, 65288], x = "×", gt = "÷", Or = function(e, A) {
  var t, r, n, s = function(a) {
    var l, d, g, u, w, Q = 0.75 * a.length, p = a.length, f = 0;
    a[a.length - 1] === "=" && (Q--, a[a.length - 2] === "=" && Q--);
    var E = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && Uint8Array.prototype.slice !== void 0 ? new ArrayBuffer(Q) : new Array(Q), U = Array.isArray(E) ? E : new Uint8Array(E);
    for (l = 0; l < p; l += 4)
      d = Ge[a.charCodeAt(l)], g = Ge[a.charCodeAt(l + 1)], u = Ge[a.charCodeAt(l + 2)], w = Ge[a.charCodeAt(l + 3)], U[f++] = d << 2 | g >> 4, U[f++] = (15 & g) << 4 | u >> 2, U[f++] = (3 & u) << 6 | 63 & w;
    return E;
  }(e), o = Array.isArray(s) ? function(a) {
    for (var l = a.length, d = [], g = 0; g < l; g += 4)
      d.push(a[g + 3] << 24 | a[g + 2] << 16 | a[g + 1] << 8 | a[g]);
    return d;
  }(s) : new Uint32Array(s), i = Array.isArray(s) ? function(a) {
    for (var l = a.length, d = [], g = 0; g < l; g += 2)
      d.push(a[g + 1] << 8 | a[g]);
    return d;
  }(s) : new Uint16Array(s), c = Xn(i, 12, o[4] / 2), B = o[5] === 2 ? Xn(i, (24 + o[4]) / 2) : (t = o, r = Math.ceil((24 + o[4]) / 4), t.slice ? t.slice(r, n) : new Uint32Array(Array.prototype.slice.call(t, r, n)));
  return new Ni(o[0], o[1], o[2], o[3], c, B);
}("KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA=="), $A = [Ee, 36], Mr = [1, 2, 3, 5], zs = [oe, 8], Zn = [Ne, Pe], Yi = Mr.concat(zs), jn = [Tr, It, xt, Sr, Dr], Zi = [Ve, Kr], Qr = function(e, A, t, r) {
  var n = r[t];
  if (Array.isArray(e) ? e.indexOf(n) !== -1 : e === n)
    for (var s = t; s <= r.length; ) {
      if ((c = r[++s]) === A)
        return !0;
      if (c !== oe)
        break;
    }
  if (n === oe)
    for (s = t; s > 0; ) {
      var o = r[--s];
      if (Array.isArray(e) ? e.indexOf(o) !== -1 : e === o)
        for (var i = t; i <= r.length; ) {
          var c;
          if ((c = r[++i]) === A)
            return !0;
          if (c !== oe)
            break;
        }
      if (o !== oe)
        break;
    }
  return !1;
}, qn = function(e, A) {
  for (var t = e; t >= 0; ) {
    var r = A[t];
    if (r !== oe)
      return r;
    t--;
  }
  return 0;
}, ji = function(e, A, t, r, n) {
  if (t[r] === 0)
    return x;
  var s = r - 1;
  if (Array.isArray(n) && n[s] === !0)
    return x;
  var o = s - 1, i = s + 1, c = A[s], B = o >= 0 ? A[o] : 0, a = A[i];
  if (c === 2 && a === 3)
    return x;
  if (Mr.indexOf(c) !== -1)
    return "!";
  if (Mr.indexOf(a) !== -1 || zs.indexOf(a) !== -1)
    return x;
  if (qn(s, A) === 8)
    return gt;
  if (Or.get(e[s]) === 11 || (c === dt || c === ut) && Or.get(e[i]) === 11 || c === 7 || a === 7 || c === 9 || [oe, Kr, Ve].indexOf(c) === -1 && a === 9 || [lt, Te, Xi, pe, Ce].indexOf(a) !== -1 || qn(s, A) === Oe || Qr(23, Oe, s, A) || Qr([lt, Te], Lr, s, A) || Qr(12, 12, s, A))
    return x;
  if (c === oe)
    return gt;
  if (c === 23 || a === 23)
    return x;
  if (a === 16 || c === 16)
    return gt;
  if ([Kr, Ve, Lr].indexOf(a) !== -1 || c === 14 || B === 36 && Zi.indexOf(c) !== -1 || c === Ce && a === 36 || a === Wn || $A.indexOf(a) !== -1 && c === bA || $A.indexOf(c) !== -1 && a === bA || c === Ne && [We, dt, ut].indexOf(a) !== -1 || [We, dt, ut].indexOf(c) !== -1 && a === Pe || $A.indexOf(c) !== -1 && Zn.indexOf(a) !== -1 || Zn.indexOf(c) !== -1 && $A.indexOf(a) !== -1 || [Ne, Pe].indexOf(c) !== -1 && (a === bA || [Oe, Ve].indexOf(a) !== -1 && A[i + 1] === bA) || [Oe, Ve].indexOf(c) !== -1 && a === bA || c === bA && [bA, Ce, pe].indexOf(a) !== -1)
    return x;
  if ([bA, Ce, pe, lt, Te].indexOf(a) !== -1)
    for (var l = s; l >= 0; ) {
      if ((d = A[l]) === bA)
        return x;
      if ([Ce, pe].indexOf(d) === -1)
        break;
      l--;
    }
  if ([Ne, Pe].indexOf(a) !== -1)
    for (l = [lt, Te].indexOf(c) !== -1 ? o : s; l >= 0; ) {
      var d;
      if ((d = A[l]) === bA)
        return x;
      if ([Ce, pe].indexOf(d) === -1)
        break;
      l--;
    }
  if (Tr === c && [Tr, It, Sr, Dr].indexOf(a) !== -1 || [It, Sr].indexOf(c) !== -1 && [It, xt].indexOf(a) !== -1 || [xt, Dr].indexOf(c) !== -1 && a === xt || jn.indexOf(c) !== -1 && [Wn, Pe].indexOf(a) !== -1 || jn.indexOf(a) !== -1 && c === Ne || $A.indexOf(c) !== -1 && $A.indexOf(a) !== -1 || c === pe && $A.indexOf(a) !== -1 || $A.concat(bA).indexOf(c) !== -1 && a === Oe && Wi.indexOf(e[i]) === -1 || $A.concat(bA).indexOf(a) !== -1 && c === Te)
    return x;
  if (c === 41 && a === 41) {
    for (var g = t[s], u = 1; g > 0 && A[--g] === 41; )
      u++;
    if (u % 2 != 0)
      return x;
  }
  return c === dt && a === ut ? x : gt;
}, qi = function(e, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var t = function(i, c) {
    c === void 0 && (c = "strict");
    var B = [], a = [], l = [];
    return i.forEach(function(d, g) {
      var u = Or.get(d);
      if (u > 50 ? (l.push(!0), u -= 50) : l.push(!1), ["normal", "auto", "loose"].indexOf(c) !== -1 && [8208, 8211, 12316, 12448].indexOf(d) !== -1)
        return a.push(g), B.push(16);
      if (u === 4 || u === 11) {
        if (g === 0)
          return a.push(g), B.push(Ee);
        var w = B[g - 1];
        return Yi.indexOf(w) === -1 ? (a.push(a[g - 1]), B.push(w)) : (a.push(g), B.push(Ee));
      }
      return a.push(g), u === 31 ? B.push(c === "strict" ? Lr : We) : u === Yn || u === 29 ? B.push(Ee) : u === 43 ? d >= 131072 && d <= 196605 || d >= 196608 && d <= 262141 ? B.push(We) : B.push(Ee) : void B.push(u);
    }), [a, B, l];
  }(e, A.lineBreak), r = t[0], n = t[1], s = t[2];
  A.wordBreak !== "break-all" && A.wordBreak !== "break-word" || (n = n.map(function(i) {
    return [bA, Ee, Yn].indexOf(i) !== -1 ? We : i;
  }));
  var o = A.wordBreak === "keep-all" ? s.map(function(i, c) {
    return i && e[c] >= 19968 && e[c] <= 40959;
  }) : void 0;
  return [r, n, o];
}, zi = function() {
  function e(A, t, r, n) {
    this.codePoints = A, this.required = t === "!", this.start = r, this.end = n;
  }
  return e.prototype.slice = function() {
    return z.apply(void 0, this.codePoints.slice(this.start, this.end));
  }, e;
}(), mA = 45, he = 43, _A = -1, UA = function(e) {
  return e >= 48 && e <= 57;
}, fe = function(e) {
  return UA(e) || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}, wt = function(e) {
  return e === 10 || e === 9 || e === 32;
}, Gt = function(e) {
  return function(A) {
    return function(t) {
      return t >= 97 && t <= 122;
    }(A) || function(t) {
      return t >= 65 && t <= 90;
    }(A);
  }(e) || function(A) {
    return A >= 128;
  }(e) || e === 95;
}, zn = function(e) {
  return Gt(e) || UA(e) || e === mA;
}, $i = function(e) {
  return e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e === 127;
}, se = function(e, A) {
  return e === 92 && A !== 10;
}, ht = function(e, A, t) {
  return e === mA ? Gt(A) || se(A, t) : !!Gt(e) || !(e !== 92 || !se(e, A));
}, pr = function(e, A, t) {
  return e === he || e === mA ? !!UA(A) || A === 46 && UA(t) : UA(e === 46 ? A : e);
}, Aa = function(e) {
  var A = 0, t = 1;
  e[A] !== he && e[A] !== mA || (e[A] === mA && (t = -1), A++);
  for (var r = []; UA(e[A]); )
    r.push(e[A++]);
  var n = r.length ? parseInt(z.apply(void 0, r), 10) : 0;
  e[A] === 46 && A++;
  for (var s = []; UA(e[A]); )
    s.push(e[A++]);
  var o = s.length, i = o ? parseInt(z.apply(void 0, s), 10) : 0;
  e[A] !== 69 && e[A] !== 101 || A++;
  var c = 1;
  e[A] !== he && e[A] !== mA || (e[A] === mA && (c = -1), A++);
  for (var B = []; UA(e[A]); )
    B.push(e[A++]);
  var a = B.length ? parseInt(z.apply(void 0, B), 10) : 0;
  return t * (n + i * Math.pow(10, -o)) * Math.pow(10, c * a);
}, ea = { type: 2 }, ta = { type: 3 }, ra = { type: 4 }, na = { type: 13 }, sa = { type: 8 }, oa = { type: 21 }, ia = { type: 9 }, aa = { type: 10 }, ca = { type: 11 }, Ba = { type: 12 }, la = { type: 14 }, Qt = { type: 23 }, da = { type: 1 }, ua = { type: 25 }, ga = { type: 24 }, wa = { type: 26 }, ha = { type: 27 }, Qa = { type: 28 }, pa = { type: 29 }, Ca = { type: 31 }, Rr = { type: 32 }, $s = function() {
  function e() {
    this._value = [];
  }
  return e.prototype.write = function(A) {
    this._value = this._value.concat(Rt(A));
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
        if (zn(t) || se(r, n)) {
          var s = ht(t, r, n) ? 2 : 1;
          return { type: 5, value: this.consumeName(), flags: s };
        }
        break;
      case 36:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), na;
        break;
      case 39:
        return this.consumeStringToken(39);
      case 40:
        return ea;
      case 41:
        return ta;
      case 42:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), la;
        break;
      case he:
        if (pr(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case 44:
        return ra;
      case mA:
        var o = A, i = this.peekCodePoint(0), c = this.peekCodePoint(1);
        if (pr(o, i, c))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        if (ht(o, i, c))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        if (i === mA && c === 62)
          return this.consumeCodePoint(), this.consumeCodePoint(), ga;
        break;
      case 46:
        if (pr(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case 47:
        if (this.peekCodePoint(0) === 42)
          for (this.consumeCodePoint(); ; ) {
            var B = this.consumeCodePoint();
            if (B === 42 && (B = this.consumeCodePoint()) === 47)
              return this.consumeToken();
            if (B === _A)
              return this.consumeToken();
          }
        break;
      case 58:
        return wa;
      case 59:
        return ha;
      case 60:
        if (this.peekCodePoint(0) === 33 && this.peekCodePoint(1) === mA && this.peekCodePoint(2) === mA)
          return this.consumeCodePoint(), this.consumeCodePoint(), ua;
        break;
      case 64:
        var a = this.peekCodePoint(0), l = this.peekCodePoint(1), d = this.peekCodePoint(2);
        if (ht(a, l, d))
          return { type: 7, value: this.consumeName() };
        break;
      case 91:
        return Qa;
      case 92:
        if (se(A, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        break;
      case 93:
        return pa;
      case 61:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), sa;
        break;
      case 123:
        return ca;
      case 125:
        return Ba;
      case 117:
      case 85:
        var g = this.peekCodePoint(0), u = this.peekCodePoint(1);
        return g !== he || !fe(u) && u !== 63 || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
      case 124:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), ia;
        if (this.peekCodePoint(0) === 124)
          return this.consumeCodePoint(), oa;
        break;
      case 126:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), aa;
        break;
      case _A:
        return Rr;
    }
    return wt(A) ? (this.consumeWhiteSpace(), Ca) : UA(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : Gt(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: z(A) };
  }, e.prototype.consumeCodePoint = function() {
    var A = this._value.shift();
    return A === void 0 ? -1 : A;
  }, e.prototype.reconsumeCodePoint = function(A) {
    this._value.unshift(A);
  }, e.prototype.peekCodePoint = function(A) {
    return A >= this._value.length ? -1 : this._value[A];
  }, e.prototype.consumeUnicodeRangeToken = function() {
    for (var A = [], t = this.consumeCodePoint(); fe(t) && A.length < 6; )
      A.push(t), t = this.consumeCodePoint();
    for (var r = !1; t === 63 && A.length < 6; )
      A.push(t), t = this.consumeCodePoint(), r = !0;
    if (r)
      return { type: 30, start: parseInt(z.apply(void 0, A.map(function(o) {
        return o === 63 ? 48 : o;
      })), 16), end: parseInt(z.apply(void 0, A.map(function(o) {
        return o === 63 ? 70 : o;
      })), 16) };
    var n = parseInt(z.apply(void 0, A), 16);
    if (this.peekCodePoint(0) === mA && fe(this.peekCodePoint(1))) {
      this.consumeCodePoint(), t = this.consumeCodePoint();
      for (var s = []; fe(t) && s.length < 6; )
        s.push(t), t = this.consumeCodePoint();
      return { type: 30, start: n, end: parseInt(z.apply(void 0, s), 16) };
    }
    return { type: 30, start: n, end: n };
  }, e.prototype.consumeIdentLikeToken = function() {
    var A = this.consumeName();
    return A.toLowerCase() === "url" && this.peekCodePoint(0) === 40 ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === 40 ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
  }, e.prototype.consumeUrlToken = function() {
    var A = [];
    if (this.consumeWhiteSpace(), this.peekCodePoint(0) === _A)
      return { type: 22, value: "" };
    var t = this.peekCodePoint(0);
    if (t === 39 || t === 34) {
      var r = this.consumeStringToken(this.consumeCodePoint());
      return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === _A || this.peekCodePoint(0) === 41) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), Qt);
    }
    for (; ; ) {
      var n = this.consumeCodePoint();
      if (n === _A || n === 41)
        return { type: 22, value: z.apply(void 0, A) };
      if (wt(n))
        return this.consumeWhiteSpace(), this.peekCodePoint(0) === _A || this.peekCodePoint(0) === 41 ? (this.consumeCodePoint(), { type: 22, value: z.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), Qt);
      if (n === 34 || n === 39 || n === 40 || $i(n))
        return this.consumeBadUrlRemnants(), Qt;
      if (n === 92) {
        if (!se(n, this.peekCodePoint(0)))
          return this.consumeBadUrlRemnants(), Qt;
        A.push(this.consumeEscapedCodePoint());
      } else
        A.push(n);
    }
  }, e.prototype.consumeWhiteSpace = function() {
    for (; wt(this.peekCodePoint(0)); )
      this.consumeCodePoint();
  }, e.prototype.consumeBadUrlRemnants = function() {
    for (; ; ) {
      var A = this.consumeCodePoint();
      if (A === 41 || A === _A)
        return;
      se(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
    }
  }, e.prototype.consumeStringSlice = function(A) {
    for (var t = ""; A > 0; ) {
      var r = Math.min(5e4, A);
      t += z.apply(void 0, this._value.splice(0, r)), A -= r;
    }
    return this._value.shift(), t;
  }, e.prototype.consumeStringToken = function(A) {
    for (var t = "", r = 0; ; ) {
      var n = this._value[r];
      if (n === _A || n === void 0 || n === A)
        return { type: 0, value: t += this.consumeStringSlice(r) };
      if (n === 10)
        return this._value.splice(0, r), da;
      if (n === 92) {
        var s = this._value[r + 1];
        s !== _A && s !== void 0 && (s === 10 ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : se(n, s) && (t += this.consumeStringSlice(r), t += z(this.consumeEscapedCodePoint()), r = -1));
      }
      r++;
    }
  }, e.prototype.consumeNumber = function() {
    var A = [], t = 4, r = this.peekCodePoint(0);
    for (r !== he && r !== mA || A.push(this.consumeCodePoint()); UA(this.peekCodePoint(0)); )
      A.push(this.consumeCodePoint());
    r = this.peekCodePoint(0);
    var n = this.peekCodePoint(1);
    if (r === 46 && UA(n))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = 8; UA(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    r = this.peekCodePoint(0), n = this.peekCodePoint(1);
    var s = this.peekCodePoint(2);
    if ((r === 69 || r === 101) && ((n === he || n === mA) && UA(s) || UA(n)))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = 8; UA(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    return [Aa(A), t];
  }, e.prototype.consumeNumericToken = function() {
    var A = this.consumeNumber(), t = A[0], r = A[1], n = this.peekCodePoint(0), s = this.peekCodePoint(1), o = this.peekCodePoint(2);
    return ht(n, s, o) ? { type: 15, number: t, flags: r, unit: this.consumeName() } : n === 37 ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
  }, e.prototype.consumeEscapedCodePoint = function() {
    var A = this.consumeCodePoint();
    if (fe(A)) {
      for (var t = z(A); fe(this.peekCodePoint(0)) && t.length < 6; )
        t += z(this.consumeCodePoint());
      wt(this.peekCodePoint(0)) && this.consumeCodePoint();
      var r = parseInt(t, 16);
      return r === 0 || function(n) {
        return n >= 55296 && n <= 57343;
      }(r) || r > 1114111 ? 65533 : r;
    }
    return A === _A ? 65533 : A;
  }, e.prototype.consumeName = function() {
    for (var A = ""; ; ) {
      var t = this.consumeCodePoint();
      if (zn(t))
        A += z(t);
      else {
        if (!se(t, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(t), A;
        A += z(this.consumeEscapedCodePoint());
      }
    }
  }, e;
}(), Ao = function() {
  function e(A) {
    this._tokens = A;
  }
  return e.create = function(A) {
    var t = new $s();
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
      if (r.type === 32 || Ua(r, A))
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
}(), $e = function(e) {
  return e.type === 15;
}, be = function(e) {
  return e.type === 17;
}, P = function(e) {
  return e.type === 20;
}, fa = function(e) {
  return e.type === 0;
}, Gr = function(e, A) {
  return P(e) && e.value === A;
}, $n = function(e) {
  return e.type !== 31;
}, Se = function(e) {
  return e.type !== 31 && e.type !== 4;
}, WA = function(e) {
  var A = [], t = [];
  return e.forEach(function(r) {
    if (r.type === 4) {
      if (t.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      return A.push(t), void (t = []);
    }
    r.type !== 31 && t.push(r);
  }), t.length && A.push(t), A;
}, Ua = function(e, A) {
  return A === 11 && e.type === 12 || A === 28 && e.type === 29 || A === 2 && e.type === 3;
}, le = function(e) {
  return e.type === 17 || e.type === 15;
}, AA = function(e) {
  return e.type === 16 || le(e);
}, eo = function(e) {
  return e.length > 1 ? [e[0], e[1]] : [e[0]];
}, dA = { type: 17, number: 0, flags: 4 }, ln = { type: 16, number: 50, flags: 4 }, ie = { type: 16, number: 100, flags: 4 }, _e = function(e, A, t) {
  var r = e[0], n = e[1];
  return [_(r, A), _(n !== void 0 ? n : r, t)];
}, _ = function(e, A) {
  if (e.type === 16)
    return e.number / 100 * A;
  if ($e(e))
    switch (e.unit) {
      case "rem":
      case "em":
        return 16 * e.number;
      default:
        return e.number;
    }
  return e.number;
}, to = "grad", ro = "turn", er = function(e, A) {
  if (A.type === 15)
    switch (A.unit) {
      case "deg":
        return Math.PI * A.number / 180;
      case to:
        return Math.PI / 200 * A.number;
      case "rad":
        return A.number;
      case ro:
        return 2 * Math.PI * A.number;
    }
  throw new Error("Unsupported angle type");
}, no = function(e) {
  return e.type === 15 && (e.unit === "deg" || e.unit === to || e.unit === "rad" || e.unit === ro);
}, so = function(e) {
  switch (e.filter(P).map(function(A) {
    return A.value;
  }).join(" ")) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [dA, dA];
    case "to top":
    case "bottom":
      return SA(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [dA, ie];
    case "to right":
    case "left":
      return SA(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [ie, ie];
    case "to bottom":
    case "top":
      return SA(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [ie, dA];
    case "to left":
    case "right":
      return SA(270);
  }
  return 0;
}, SA = function(e) {
  return Math.PI * e / 180;
}, ce = function(e, A) {
  if (A.type === 18) {
    var t = Fa[A.name];
    if (t === void 0)
      throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
    return t(e, A.values);
  }
  if (A.type === 5) {
    if (A.value.length === 3) {
      var r = A.value.substring(0, 1), n = A.value.substring(1, 2), s = A.value.substring(2, 3);
      return ae(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(s + s, 16), 1);
    }
    if (A.value.length === 4) {
      r = A.value.substring(0, 1), n = A.value.substring(1, 2), s = A.value.substring(2, 3);
      var o = A.value.substring(3, 4);
      return ae(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(s + s, 16), parseInt(o + o, 16) / 255);
    }
    if (A.value.length === 6)
      return r = A.value.substring(0, 2), n = A.value.substring(2, 4), s = A.value.substring(4, 6), ae(parseInt(r, 16), parseInt(n, 16), parseInt(s, 16), 1);
    if (A.value.length === 8)
      return r = A.value.substring(0, 2), n = A.value.substring(2, 4), s = A.value.substring(4, 6), o = A.value.substring(6, 8), ae(parseInt(r, 16), parseInt(n, 16), parseInt(s, 16), parseInt(o, 16) / 255);
  }
  if (A.type === 20) {
    var i = te[A.value.toUpperCase()];
    if (i !== void 0)
      return i;
  }
  return te.TRANSPARENT;
}, Be = function(e) {
  return (255 & e) == 0;
}, iA = function(e) {
  var A = 255 & e, t = 255 & e >> 8, r = 255 & e >> 16, n = 255 & e >> 24;
  return A < 255 ? "rgba(" + n + "," + r + "," + t + "," + A / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
}, ae = function(e, A, t, r) {
  return (e << 24 | A << 16 | t << 8 | Math.round(255 * r) << 0) >>> 0;
}, As = function(e, A) {
  if (e.type === 17)
    return e.number;
  if (e.type === 16) {
    var t = A === 3 ? 1 : 255;
    return A === 3 ? e.number / 100 * t : Math.round(e.number / 100 * t);
  }
  return 0;
}, es = function(e, A) {
  var t = A.filter(Se);
  if (t.length === 3) {
    var r = t.map(As), n = r[0], s = r[1], o = r[2];
    return ae(n, s, o, 1);
  }
  if (t.length === 4) {
    var i = t.map(As), c = (n = i[0], s = i[1], o = i[2], i[3]);
    return ae(n, s, o, c);
  }
  return 0;
};
function Cr(e, A, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (A - e) * t * 6 + e : t < 0.5 ? A : t < 2 / 3 ? 6 * (A - e) * (2 / 3 - t) + e : e;
}
var ts = function(e, A) {
  var t = A.filter(Se), r = t[0], n = t[1], s = t[2], o = t[3], i = (r.type === 17 ? SA(r.number) : er(e, r)) / (2 * Math.PI), c = AA(n) ? n.number / 100 : 0, B = AA(s) ? s.number / 100 : 0, a = o !== void 0 && AA(o) ? _(o, 1) : 1;
  if (c === 0)
    return ae(255 * B, 255 * B, 255 * B, 1);
  var l = B <= 0.5 ? B * (c + 1) : B + c - B * c, d = 2 * B - l, g = Cr(d, l, i + 1 / 3), u = Cr(d, l, i), w = Cr(d, l, i - 1 / 3);
  return ae(255 * g, 255 * u, 255 * w, a);
}, Fa = { hsl: ts, hsla: ts, rgb: es, rgba: es }, Ye = function(e, A) {
  return ce(e, Ao.create(A).parseComponentValue());
}, te = { ALICEBLUE: 4042850303, ANTIQUEWHITE: 4209760255, AQUA: 16777215, AQUAMARINE: 2147472639, AZURE: 4043309055, BEIGE: 4126530815, BISQUE: 4293182719, BLACK: 255, BLANCHEDALMOND: 4293643775, BLUE: 65535, BLUEVIOLET: 2318131967, BROWN: 2771004159, BURLYWOOD: 3736635391, CADETBLUE: 1604231423, CHARTREUSE: 2147418367, CHOCOLATE: 3530104575, CORAL: 4286533887, CORNFLOWERBLUE: 1687547391, CORNSILK: 4294499583, CRIMSON: 3692313855, CYAN: 16777215, DARKBLUE: 35839, DARKCYAN: 9145343, DARKGOLDENROD: 3095837695, DARKGRAY: 2846468607, DARKGREEN: 6553855, DARKGREY: 2846468607, DARKKHAKI: 3182914559, DARKMAGENTA: 2332068863, DARKOLIVEGREEN: 1433087999, DARKORANGE: 4287365375, DARKORCHID: 2570243327, DARKRED: 2332033279, DARKSALMON: 3918953215, DARKSEAGREEN: 2411499519, DARKSLATEBLUE: 1211993087, DARKSLATEGRAY: 793726975, DARKSLATEGREY: 793726975, DARKTURQUOISE: 13554175, DARKVIOLET: 2483082239, DEEPPINK: 4279538687, DEEPSKYBLUE: 12582911, DIMGRAY: 1768516095, DIMGREY: 1768516095, DODGERBLUE: 512819199, FIREBRICK: 2988581631, FLORALWHITE: 4294635775, FORESTGREEN: 579543807, FUCHSIA: 4278255615, GAINSBORO: 3705462015, GHOSTWHITE: 4177068031, GOLD: 4292280575, GOLDENROD: 3668254975, GRAY: 2155905279, GREEN: 8388863, GREENYELLOW: 2919182335, GREY: 2155905279, HONEYDEW: 4043305215, HOTPINK: 4285117695, INDIANRED: 3445382399, INDIGO: 1258324735, IVORY: 4294963455, KHAKI: 4041641215, LAVENDER: 3873897215, LAVENDERBLUSH: 4293981695, LAWNGREEN: 2096890111, LEMONCHIFFON: 4294626815, LIGHTBLUE: 2916673279, LIGHTCORAL: 4034953471, LIGHTCYAN: 3774873599, LIGHTGOLDENRODYELLOW: 4210742015, LIGHTGRAY: 3553874943, LIGHTGREEN: 2431553791, LIGHTGREY: 3553874943, LIGHTPINK: 4290167295, LIGHTSALMON: 4288707327, LIGHTSEAGREEN: 548580095, LIGHTSKYBLUE: 2278488831, LIGHTSLATEGRAY: 2005441023, LIGHTSLATEGREY: 2005441023, LIGHTSTEELBLUE: 2965692159, LIGHTYELLOW: 4294959359, LIME: 16711935, LIMEGREEN: 852308735, LINEN: 4210091775, MAGENTA: 4278255615, MAROON: 2147483903, MEDIUMAQUAMARINE: 1724754687, MEDIUMBLUE: 52735, MEDIUMORCHID: 3126187007, MEDIUMPURPLE: 2473647103, MEDIUMSEAGREEN: 1018393087, MEDIUMSLATEBLUE: 2070474495, MEDIUMSPRINGGREEN: 16423679, MEDIUMTURQUOISE: 1221709055, MEDIUMVIOLETRED: 3340076543, MIDNIGHTBLUE: 421097727, MINTCREAM: 4127193855, MISTYROSE: 4293190143, MOCCASIN: 4293178879, NAVAJOWHITE: 4292783615, NAVY: 33023, OLDLACE: 4260751103, OLIVE: 2155872511, OLIVEDRAB: 1804477439, ORANGE: 4289003775, ORANGERED: 4282712319, ORCHID: 3664828159, PALEGOLDENROD: 4008225535, PALEGREEN: 2566625535, PALETURQUOISE: 2951671551, PALEVIOLETRED: 3681588223, PAPAYAWHIP: 4293907967, PEACHPUFF: 4292524543, PERU: 3448061951, PINK: 4290825215, PLUM: 3718307327, POWDERBLUE: 2967529215, PURPLE: 2147516671, REBECCAPURPLE: 1714657791, RED: 4278190335, ROSYBROWN: 3163525119, ROYALBLUE: 1097458175, SADDLEBROWN: 2336560127, SALMON: 4202722047, SANDYBROWN: 4104413439, SEAGREEN: 780883967, SEASHELL: 4294307583, SIENNA: 2689740287, SILVER: 3233857791, SKYBLUE: 2278484991, SLATEBLUE: 1784335871, SLATEGRAY: 1887473919, SLATEGREY: 1887473919, SNOW: 4294638335, SPRINGGREEN: 16744447, STEELBLUE: 1182971135, TAN: 3535047935, TEAL: 8421631, THISTLE: 3636451583, TOMATO: 4284696575, TRANSPARENT: 0, TURQUOISE: 1088475391, VIOLET: 4001558271, WHEAT: 4125012991, WHITE: 4294967295, WHITESMOKE: 4126537215, YELLOW: 4294902015, YELLOWGREEN: 2597139199 }, ma = { name: "background-clip", initialValue: "border-box", prefix: !1, type: 1, parse: function(e, A) {
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
} }, ya = { name: "background-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, Vt = function(e, A) {
  var t = ce(e, A[0]), r = A[1];
  return r && AA(r) ? { color: t, stop: r } : { color: t, stop: null };
}, rs = function(e, A) {
  var t = e[0], r = e[e.length - 1];
  t.stop === null && (t.stop = dA), r.stop === null && (r.stop = ie);
  for (var n = [], s = 0, o = 0; o < e.length; o++) {
    var i = e[o].stop;
    if (i !== null) {
      var c = _(i, A);
      c > s ? n.push(c) : n.push(s), s = c;
    } else
      n.push(null);
  }
  var B = null;
  for (o = 0; o < n.length; o++) {
    var a = n[o];
    if (a === null)
      B === null && (B = o);
    else if (B !== null) {
      for (var l = o - B, d = (a - n[B - 1]) / (l + 1), g = 1; g <= l; g++)
        n[B + g - 1] = d * g;
      B = null;
    }
  }
  return e.map(function(u, w) {
    return { color: u.color, stop: Math.max(Math.min(1, n[w] / A), 0) };
  });
}, Ea = function(e, A, t) {
  var r = typeof e == "number" ? e : function(a, l, d) {
    var g = l / 2, u = d / 2, w = _(a[0], l) - g, Q = u - _(a[1], d);
    return (Math.atan2(Q, w) + 2 * Math.PI) % (2 * Math.PI);
  }(e, A, t), n = Math.abs(A * Math.sin(r)) + Math.abs(t * Math.cos(r)), s = A / 2, o = t / 2, i = n / 2, c = Math.sin(r - Math.PI / 2) * i, B = Math.cos(r - Math.PI / 2) * i;
  return [n, s - B, s + B, o - c, o + c];
}, OA = function(e, A) {
  return Math.sqrt(e * e + A * A);
}, ns = function(e, A, t, r, n) {
  return [[0, 0], [0, A], [e, 0], [e, A]].reduce(function(s, o) {
    var i = o[0], c = o[1], B = OA(t - i, r - c);
    return (n ? B < s.optimumDistance : B > s.optimumDistance) ? { optimumCorner: o, optimumDistance: B } : s;
  }, { optimumDistance: n ? 1 / 0 : -1 / 0, optimumCorner: null }).optimumCorner;
}, pt = function(e, A) {
  var t = SA(180), r = [];
  return WA(A).forEach(function(n, s) {
    if (s === 0) {
      var o = n[0];
      if (o.type === 20 && ["top", "left", "right", "bottom"].indexOf(o.value) !== -1)
        return void (t = so(n));
      if (no(o))
        return void (t = (er(e, o) + SA(270)) % SA(360));
    }
    var i = Vt(e, n);
    r.push(i);
  }), { angle: t, stops: r, type: 1 };
}, oo = "closest-side", io = "farthest-side", ao = "closest-corner", co = "farthest-corner", Bo = "circle", lo = "ellipse", uo = "cover", go = "contain", Ct = function(e, A) {
  var t = 0, r = 3, n = [], s = [];
  return WA(A).forEach(function(o, i) {
    var c = !0;
    if (i === 0 ? c = o.reduce(function(a, l) {
      if (P(l))
        switch (l.value) {
          case "center":
            return s.push(ln), !1;
          case "top":
          case "left":
            return s.push(dA), !1;
          case "right":
          case "bottom":
            return s.push(ie), !1;
        }
      else if (AA(l) || le(l))
        return s.push(l), !1;
      return a;
    }, c) : i === 1 && (c = o.reduce(function(a, l) {
      if (P(l))
        switch (l.value) {
          case Bo:
            return t = 0, !1;
          case lo:
            return t = 1, !1;
          case go:
          case oo:
            return r = 0, !1;
          case io:
            return r = 1, !1;
          case ao:
            return r = 2, !1;
          case uo:
          case co:
            return r = 3, !1;
        }
      else if (le(l) || AA(l))
        return Array.isArray(r) || (r = []), r.push(l), !1;
      return a;
    }, c)), c) {
      var B = Vt(e, o);
      n.push(B);
    }
  }), { size: r, shape: t, stops: n, position: s, type: 2 };
}, dn = function(e, A) {
  if (A.type === 22) {
    var t = { url: A.value, type: 0 };
    return e.cache.addImage(A.value), t;
  }
  if (A.type === 18) {
    var r = wo[A.name];
    if (r === void 0)
      throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
    return r(e, A.values);
  }
  throw new Error("Unsupported image type " + A.type);
}, xe, wo = { "linear-gradient": function(e, A) {
  var t = SA(180), r = [];
  return WA(A).forEach(function(n, s) {
    if (s === 0) {
      var o = n[0];
      if (o.type === 20 && o.value === "to")
        return void (t = so(n));
      if (no(o))
        return void (t = er(e, o));
    }
    var i = Vt(e, n);
    r.push(i);
  }), { angle: t, stops: r, type: 1 };
}, "-moz-linear-gradient": pt, "-ms-linear-gradient": pt, "-o-linear-gradient": pt, "-webkit-linear-gradient": pt, "radial-gradient": function(e, A) {
  var t = 0, r = 3, n = [], s = [];
  return WA(A).forEach(function(o, i) {
    var c = !0;
    if (i === 0) {
      var B = !1;
      c = o.reduce(function(l, d) {
        if (B)
          if (P(d))
            switch (d.value) {
              case "center":
                return s.push(ln), l;
              case "top":
              case "left":
                return s.push(dA), l;
              case "right":
              case "bottom":
                return s.push(ie), l;
            }
          else
            (AA(d) || le(d)) && s.push(d);
        else if (P(d))
          switch (d.value) {
            case Bo:
              return t = 0, !1;
            case lo:
              return t = 1, !1;
            case "at":
              return B = !0, !1;
            case oo:
              return r = 0, !1;
            case uo:
            case io:
              return r = 1, !1;
            case go:
            case ao:
              return r = 2, !1;
            case co:
              return r = 3, !1;
          }
        else if (le(d) || AA(d))
          return Array.isArray(r) || (r = []), r.push(d), !1;
        return l;
      }, c);
    }
    if (c) {
      var a = Vt(e, o);
      n.push(a);
    }
  }), { size: r, shape: t, stops: n, position: s, type: 2 };
}, "-moz-radial-gradient": Ct, "-ms-radial-gradient": Ct, "-o-radial-gradient": Ct, "-webkit-radial-gradient": Ct, "-webkit-gradient": function(e, A) {
  var t = SA(180), r = [], n = 1;
  return WA(A).forEach(function(s, o) {
    var i = s[0];
    if (o === 0) {
      if (P(i) && i.value === "linear")
        return void (n = 1);
      if (P(i) && i.value === "radial")
        return void (n = 2);
    }
    if (i.type === 18) {
      if (i.name === "from") {
        var c = ce(e, i.values[0]);
        r.push({ stop: dA, color: c });
      } else if (i.name === "to")
        c = ce(e, i.values[0]), r.push({ stop: ie, color: c });
      else if (i.name === "color-stop") {
        var B = i.values.filter(Se);
        if (B.length === 2) {
          c = ce(e, B[1]);
          var a = B[0];
          be(a) && r.push({ stop: { type: 16, number: 100 * a.number, flags: a.flags }, color: c });
        }
      }
    }
  }), n === 1 ? { angle: (t + SA(180)) % SA(360), stops: r, type: n } : { size: 3, shape: 0, stops: r, position: [], type: n };
} }, ba = { name: "background-image", initialValue: "none", type: 1, prefix: !1, parse: function(e, A) {
  if (A.length === 0)
    return [];
  var t = A[0];
  return t.type === 20 && t.value === "none" ? [] : A.filter(function(r) {
    return Se(r) && function(n) {
      return !(n.type === 20 && n.value === "none" || n.type === 18 && !wo[n.name]);
    }(r);
  }).map(function(r) {
    return dn(e, r);
  });
} }, Ha = { name: "background-origin", initialValue: "border-box", prefix: !1, type: 1, parse: function(e, A) {
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
} }, va = { name: "background-position", initialValue: "0% 0%", type: 1, prefix: !1, parse: function(e, A) {
  return WA(A).map(function(t) {
    return t.filter(AA);
  }).map(eo);
} }, ka = { name: "background-repeat", initialValue: "repeat", prefix: !1, type: 1, parse: function(e, A) {
  return WA(A).map(function(t) {
    return t.filter(P).map(function(r) {
      return r.value;
    }).join(" ");
  }).map(Ia);
} }, Ia = function(e) {
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
})(xe || (xe = {}));
var Pt, xa = { name: "background-size", initialValue: "0", prefix: !1, type: 1, parse: function(e, A) {
  return WA(A).map(function(t) {
    return t.filter(Ka);
  });
} }, Ka = function(e) {
  return P(e) || AA(e);
}, tr = function(e) {
  return { name: "border-" + e + "-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" };
}, La = tr("top"), Sa = tr("right"), Da = tr("bottom"), Ta = tr("left"), rr = function(e) {
  return { name: "border-radius-" + e, initialValue: "0 0", prefix: !1, type: 1, parse: function(A, t) {
    return eo(t.filter(AA));
  } };
}, Oa = rr("top-left"), Ma = rr("top-right"), Ra = rr("bottom-right"), Ga = rr("bottom-left"), nr = function(e) {
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
}, Va = nr("top"), Pa = nr("right"), Na = nr("bottom"), _a = nr("left"), sr = function(e) {
  return { name: "border-" + e + "-width", initialValue: "0", type: 0, prefix: !1, parse: function(A, t) {
    return $e(t) ? t.number : 0;
  } };
}, Ja = sr("top"), Xa = sr("right"), Wa = sr("bottom"), Ya = sr("left"), Za = { name: "color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, ja = { name: "direction", initialValue: "ltr", prefix: !1, type: 2, parse: function(e, A) {
  return A === "rtl" ? 1 : 0;
} }, qa = { name: "display", initialValue: "inline-block", prefix: !1, type: 1, parse: function(e, A) {
  return A.filter(P).reduce(function(t, r) {
    return t | za(r.value);
  }, 0);
} }, za = function(e) {
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
}, $a = { name: "float", initialValue: "none", prefix: !1, type: 2, parse: function(e, A) {
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
} }, Ac = { name: "letter-spacing", initialValue: "0", prefix: !1, type: 0, parse: function(e, A) {
  return A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0;
} };
(function(e) {
  e.NORMAL = "normal", e.STRICT = "strict";
})(Pt || (Pt = {}));
var Ze, ec = { name: "line-break", initialValue: "normal", prefix: !1, type: 2, parse: function(e, A) {
  return A === "strict" ? Pt.STRICT : Pt.NORMAL;
} }, tc = { name: "line-height", initialValue: "normal", prefix: !1, type: 4 }, ss = function(e, A) {
  return P(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : AA(e) ? _(e, A) : A;
}, rc = { name: "list-style-image", initialValue: "none", type: 0, prefix: !1, parse: function(e, A) {
  return A.type === 20 && A.value === "none" ? null : dn(e, A);
} }, nc = { name: "list-style-position", initialValue: "outside", prefix: !1, type: 2, parse: function(e, A) {
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
} }, or = function(e) {
  return { name: "margin-" + e, initialValue: "0", prefix: !1, type: 4 };
}, sc = or("top"), oc = or("right"), ic = or("bottom"), ac = or("left"), cc = { name: "overflow", initialValue: "visible", prefix: !1, type: 1, parse: function(e, A) {
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
} }, Bc = { name: "overflow-wrap", initialValue: "normal", prefix: !1, type: 2, parse: function(e, A) {
  return A === "break-word" ? "break-word" : "normal";
} }, ir = function(e) {
  return { name: "padding-" + e, initialValue: "0", prefix: !1, type: 3, format: "length-percentage" };
}, lc = ir("top"), dc = ir("right"), uc = ir("bottom"), gc = ir("left"), wc = { name: "text-align", initialValue: "left", prefix: !1, type: 2, parse: function(e, A) {
  switch (A) {
    case "right":
      return 2;
    case "center":
    case "justify":
      return 1;
    default:
      return 0;
  }
} }, hc = { name: "position", initialValue: "static", prefix: !1, type: 2, parse: function(e, A) {
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
} }, Qc = { name: "text-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(e, A) {
  return A.length === 1 && Gr(A[0], "none") ? [] : WA(A).map(function(t) {
    for (var r = { color: te.TRANSPARENT, offsetX: dA, offsetY: dA, blur: dA }, n = 0, s = 0; s < t.length; s++) {
      var o = t[s];
      le(o) ? (n === 0 ? r.offsetX = o : n === 1 ? r.offsetY = o : r.blur = o, n++) : r.color = ce(e, o);
    }
    return r;
  });
} }, pc = { name: "text-transform", initialValue: "none", prefix: !1, type: 2, parse: function(e, A) {
  switch (A) {
    case "uppercase":
      return 2;
    case "lowercase":
      return 1;
    case "capitalize":
      return 3;
  }
  return 0;
} }, Cc = { name: "transform", initialValue: "none", prefix: !0, type: 0, parse: function(e, A) {
  if (A.type === 20 && A.value === "none")
    return null;
  if (A.type === 18) {
    var t = fc[A.name];
    if (t === void 0)
      throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
    return t(A.values);
  }
  return null;
} }, fc = { matrix: function(e) {
  var A = e.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return A.length === 6 ? A : null;
}, matrix3d: function(e) {
  var A = e.filter(function(c) {
    return c.type === 17;
  }).map(function(c) {
    return c.number;
  }), t = A[0], r = A[1];
  A[2], A[3];
  var n = A[4], s = A[5];
  A[6], A[7], A[8], A[9], A[10], A[11];
  var o = A[12], i = A[13];
  return A[14], A[15], A.length === 16 ? [t, r, n, s, o, i] : null;
} }, os = { type: 16, number: 50, flags: 4 }, Uc = [os, os], Fc = { name: "transform-origin", initialValue: "50% 50%", prefix: !0, type: 1, parse: function(e, A) {
  var t = A.filter(AA);
  return t.length !== 2 ? Uc : [t[0], t[1]];
} }, mc = { name: "visible", initialValue: "none", prefix: !1, type: 2, parse: function(e, A) {
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
})(Ze || (Ze = {}));
for (var yc = { name: "word-break", initialValue: "normal", prefix: !1, type: 2, parse: function(e, A) {
  switch (A) {
    case "break-all":
      return Ze.BREAK_ALL;
    case "keep-all":
      return Ze.KEEP_ALL;
    default:
      return Ze.NORMAL;
  }
} }, Ec = { name: "z-index", initialValue: "auto", prefix: !1, type: 0, parse: function(e, A) {
  if (A.type === 20)
    return { auto: !0, order: 0 };
  if (be(A))
    return { auto: !1, order: A.number };
  throw new Error("Invalid z-index number parsed");
} }, is = function(e, A) {
  if (A.type === 15)
    switch (A.unit.toLowerCase()) {
      case "s":
        return 1e3 * A.number;
      case "ms":
        return A.number;
    }
  throw new Error("Unsupported time type");
}, bc = { name: "opacity", initialValue: "1", type: 0, prefix: !1, parse: function(e, A) {
  return be(A) ? A.number : 1;
} }, Hc = { name: "text-decoration-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, vc = { name: "text-decoration-line", initialValue: "none", prefix: !1, type: 1, parse: function(e, A) {
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
} }, kc = { name: "font-family", initialValue: "", prefix: !1, type: 1, parse: function(e, A) {
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
} }, Ic = { name: "font-size", initialValue: "0", prefix: !1, type: 3, format: "length" }, xc = { name: "font-weight", initialValue: "normal", type: 0, prefix: !1, parse: function(e, A) {
  return be(A) ? A.number : P(A) && A.value === "bold" ? 700 : 400;
} }, Kc = { name: "font-variant", initialValue: "none", type: 1, prefix: !1, parse: function(e, A) {
  return A.filter(P).map(function(t) {
    return t.value;
  });
} }, Lc = { name: "font-style", initialValue: "normal", prefix: !1, type: 2, parse: function(e, A) {
  switch (A) {
    case "oblique":
      return "oblique";
    case "italic":
      return "italic";
    default:
      return "normal";
  }
} }, nA = function(e, A) {
  return (e & A) != 0;
}, Sc = { name: "content", initialValue: "none", type: 1, prefix: !1, parse: function(e, A) {
  if (A.length === 0)
    return [];
  var t = A[0];
  return t.type === 20 && t.value === "none" ? [] : A;
} }, Dc = { name: "counter-increment", initialValue: "none", prefix: !0, type: 1, parse: function(e, A) {
  if (A.length === 0)
    return null;
  var t = A[0];
  if (t.type === 20 && t.value === "none")
    return null;
  for (var r = [], n = A.filter($n), s = 0; s < n.length; s++) {
    var o = n[s], i = n[s + 1];
    if (o.type === 20) {
      var c = i && be(i) ? i.number : 1;
      r.push({ counter: o.value, increment: c });
    }
  }
  return r;
} }, Tc = { name: "counter-reset", initialValue: "none", prefix: !0, type: 1, parse: function(e, A) {
  if (A.length === 0)
    return [];
  for (var t = [], r = A.filter($n), n = 0; n < r.length; n++) {
    var s = r[n], o = r[n + 1];
    if (P(s) && s.value !== "none") {
      var i = o && be(o) ? o.number : 0;
      t.push({ counter: s.value, reset: i });
    }
  }
  return t;
} }, Oc = { name: "duration", initialValue: "0s", prefix: !1, type: 1, parse: function(e, A) {
  return A.filter($e).map(function(t) {
    return is(e, t);
  });
} }, Mc = { name: "quotes", initialValue: "none", prefix: !0, type: 1, parse: function(e, A) {
  if (A.length === 0)
    return null;
  var t = A[0];
  if (t.type === 20 && t.value === "none")
    return null;
  var r = [], n = A.filter(fa);
  if (n.length % 2 != 0)
    return null;
  for (var s = 0; s < n.length; s += 2) {
    var o = n[s].value, i = n[s + 1].value;
    r.push({ open: o, close: i });
  }
  return r;
} }, as = function(e, A, t) {
  if (!e)
    return "";
  var r = e[Math.min(A, e.length - 1)];
  return r ? t ? r.open : r.close : "";
}, Rc = { name: "box-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(e, A) {
  return A.length === 1 && Gr(A[0], "none") ? [] : WA(A).map(function(t) {
    for (var r = { color: 255, offsetX: dA, offsetY: dA, blur: dA, spread: dA, inset: !1 }, n = 0, s = 0; s < t.length; s++) {
      var o = t[s];
      Gr(o, "inset") ? r.inset = !0 : le(o) ? (n === 0 ? r.offsetX = o : n === 1 ? r.offsetY = o : n === 2 ? r.blur = o : r.spread = o, n++) : r.color = ce(e, o);
    }
    return r;
  });
} }, Gc = { name: "paint-order", initialValue: "normal", prefix: !1, type: 1, parse: function(e, A) {
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
} }, Vc = { name: "-webkit-text-stroke-color", initialValue: "currentcolor", prefix: !1, type: 3, format: "color" }, Pc = { name: "-webkit-text-stroke-width", initialValue: "0", type: 0, prefix: !1, parse: function(e, A) {
  return $e(A) ? A.number : 0;
} }, Nc = function() {
  function e(A, t) {
    var r, n;
    this.animationDuration = y(A, Oc, t.animationDuration), this.backgroundClip = y(A, ma, t.backgroundClip), this.backgroundColor = y(A, ya, t.backgroundColor), this.backgroundImage = y(A, ba, t.backgroundImage), this.backgroundOrigin = y(A, Ha, t.backgroundOrigin), this.backgroundPosition = y(A, va, t.backgroundPosition), this.backgroundRepeat = y(A, ka, t.backgroundRepeat), this.backgroundSize = y(A, xa, t.backgroundSize), this.borderTopColor = y(A, La, t.borderTopColor), this.borderRightColor = y(A, Sa, t.borderRightColor), this.borderBottomColor = y(A, Da, t.borderBottomColor), this.borderLeftColor = y(A, Ta, t.borderLeftColor), this.borderTopLeftRadius = y(A, Oa, t.borderTopLeftRadius), this.borderTopRightRadius = y(A, Ma, t.borderTopRightRadius), this.borderBottomRightRadius = y(A, Ra, t.borderBottomRightRadius), this.borderBottomLeftRadius = y(A, Ga, t.borderBottomLeftRadius), this.borderTopStyle = y(A, Va, t.borderTopStyle), this.borderRightStyle = y(A, Pa, t.borderRightStyle), this.borderBottomStyle = y(A, Na, t.borderBottomStyle), this.borderLeftStyle = y(A, _a, t.borderLeftStyle), this.borderTopWidth = y(A, Ja, t.borderTopWidth), this.borderRightWidth = y(A, Xa, t.borderRightWidth), this.borderBottomWidth = y(A, Wa, t.borderBottomWidth), this.borderLeftWidth = y(A, Ya, t.borderLeftWidth), this.boxShadow = y(A, Rc, t.boxShadow), this.color = y(A, Za, t.color), this.direction = y(A, ja, t.direction), this.display = y(A, qa, t.display), this.float = y(A, $a, t.cssFloat), this.fontFamily = y(A, kc, t.fontFamily), this.fontSize = y(A, Ic, t.fontSize), this.fontStyle = y(A, Lc, t.fontStyle), this.fontVariant = y(A, Kc, t.fontVariant), this.fontWeight = y(A, xc, t.fontWeight), this.letterSpacing = y(A, Ac, t.letterSpacing), this.lineBreak = y(A, ec, t.lineBreak), this.lineHeight = y(A, tc, t.lineHeight), this.listStyleImage = y(A, rc, t.listStyleImage), this.listStylePosition = y(A, nc, t.listStylePosition), this.listStyleType = y(A, Vr, t.listStyleType), this.marginTop = y(A, sc, t.marginTop), this.marginRight = y(A, oc, t.marginRight), this.marginBottom = y(A, ic, t.marginBottom), this.marginLeft = y(A, ac, t.marginLeft), this.opacity = y(A, bc, t.opacity);
    var s = y(A, cc, t.overflow);
    this.overflowX = s[0], this.overflowY = s[s.length > 1 ? 1 : 0], this.overflowWrap = y(A, Bc, t.overflowWrap), this.paddingTop = y(A, lc, t.paddingTop), this.paddingRight = y(A, dc, t.paddingRight), this.paddingBottom = y(A, uc, t.paddingBottom), this.paddingLeft = y(A, gc, t.paddingLeft), this.paintOrder = y(A, Gc, t.paintOrder), this.position = y(A, hc, t.position), this.textAlign = y(A, wc, t.textAlign), this.textDecorationColor = y(A, Hc, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = y(A, vc, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = y(A, Qc, t.textShadow), this.textTransform = y(A, pc, t.textTransform), this.transform = y(A, Cc, t.transform), this.transformOrigin = y(A, Fc, t.transformOrigin), this.visibility = y(A, mc, t.visibility), this.webkitTextStrokeColor = y(A, Vc, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = y(A, Pc, t.webkitTextStrokeWidth), this.wordBreak = y(A, yc, t.wordBreak), this.zIndex = y(A, Ec, t.zIndex);
  }
  return e.prototype.isVisible = function() {
    return this.display > 0 && this.opacity > 0 && this.visibility === 0;
  }, e.prototype.isTransparent = function() {
    return Be(this.backgroundColor);
  }, e.prototype.isTransformed = function() {
    return this.transform !== null;
  }, e.prototype.isPositioned = function() {
    return this.position !== 0;
  }, e.prototype.isPositionedWithZIndex = function() {
    return this.isPositioned() && !this.zIndex.auto;
  }, e.prototype.isFloating = function() {
    return this.float !== 0;
  }, e.prototype.isInlineLevel = function() {
    return nA(this.display, 4) || nA(this.display, 33554432) || nA(this.display, 268435456) || nA(this.display, 536870912) || nA(this.display, 67108864) || nA(this.display, 134217728);
  }, e;
}(), _c = function(e, A) {
  this.content = y(e, Sc, A.content), this.quotes = y(e, Mc, A.quotes);
}, cs = function(e, A) {
  this.counterIncrement = y(e, Dc, A.counterIncrement), this.counterReset = y(e, Tc, A.counterReset);
}, y = function(e, A, t) {
  var r = new $s(), n = t != null ? t.toString() : A.initialValue;
  r.write(n);
  var s = new Ao(r.read());
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
          return er(e, s.parseComponentValue());
        case "color":
          return ce(e, s.parseComponentValue());
        case "image":
          return dn(e, s.parseComponentValue());
        case "length":
          var i = s.parseComponentValue();
          return le(i) ? i : dA;
        case "length-percentage":
          var c = s.parseComponentValue();
          return AA(c) ? c : dA;
        case "time":
          return is(e, s.parseComponentValue());
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
}, jA = function(e, A) {
  this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, Pr(A, 3), this.styles = new Nc(e, window.getComputedStyle(A, null)), Jr(A) && (this.styles.animationDuration.some(function(t) {
    return t > 0;
  }) && (A.style.animationDuration = "0s"), this.styles.transform !== null && (A.style.transform = "none")), this.bounds = Ar(this.context, A), Pr(A, 4) && (this.flags |= 16);
}, Jc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Je = typeof Uint8Array > "u" ? [] : new Uint8Array(256), ft = 0; ft < 64; ft++)
  Je[Jc.charCodeAt(ft)] = ft;
for (var Bs = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, Xc = function() {
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
}(), Wc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Yc = typeof Uint8Array > "u" ? [] : new Uint8Array(256), Ut = 0; Ut < 64; Ut++)
  Yc[Wc.charCodeAt(Ut)] = Ut;
var je, ls = 8, fr = 9, ds = 11, us = 12, Zc = function() {
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
}, jc = function(e, A) {
  var t, r, n, s = function(a) {
    var l, d, g, u, w, Q = 0.75 * a.length, p = a.length, f = 0;
    a[a.length - 1] === "=" && (Q--, a[a.length - 2] === "=" && Q--);
    var E = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && Uint8Array.prototype.slice !== void 0 ? new ArrayBuffer(Q) : new Array(Q), U = Array.isArray(E) ? E : new Uint8Array(E);
    for (l = 0; l < p; l += 4)
      d = Je[a.charCodeAt(l)], g = Je[a.charCodeAt(l + 1)], u = Je[a.charCodeAt(l + 2)], w = Je[a.charCodeAt(l + 3)], U[f++] = d << 2 | g >> 4, U[f++] = (15 & g) << 4 | u >> 2, U[f++] = (3 & u) << 6 | 63 & w;
    return E;
  }(e), o = Array.isArray(s) ? function(a) {
    for (var l = a.length, d = [], g = 0; g < l; g += 4)
      d.push(a[g + 3] << 24 | a[g + 2] << 16 | a[g + 1] << 8 | a[g]);
    return d;
  }(s) : new Uint32Array(s), i = Array.isArray(s) ? function(a) {
    for (var l = a.length, d = [], g = 0; g < l; g += 2)
      d.push(a[g + 1] << 8 | a[g]);
    return d;
  }(s) : new Uint16Array(s), c = Bs(i, 12, o[4] / 2), B = o[5] === 2 ? Bs(i, (24 + o[4]) / 2) : (t = o, r = Math.ceil((24 + o[4]) / 4), t.slice ? t.slice(r, n) : new Uint32Array(Array.prototype.slice.call(t, r, n)));
  return new Xc(o[0], o[1], o[2], o[3], c, B);
}("AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA="), xA = "×", qc = function(e) {
  return jc.get(e);
}, zc = function(e, A, t) {
  var r = t - 2, n = A[r], s = A[t - 1], o = A[t];
  if (s === 2 && o === 3)
    return xA;
  if (s === 2 || s === 3 || s === 4 || o === 2 || o === 3 || o === 4)
    return "÷";
  if (s === ls && [ls, fr, ds, us].indexOf(o) !== -1 || !(s !== ds && s !== fr || o !== fr && o !== 10) || (s === us || s === 10) && o === 10 || o === 13 || o === 5 || o === 7 || s === 1)
    return xA;
  if (s === 13 && o === 14) {
    for (; n === 5; )
      n = A[--r];
    if (n === 14)
      return xA;
  }
  if (s === 15 && o === 15) {
    for (var i = 0; n === 15; )
      i++, n = A[--r];
    if (i % 2 == 0)
      return xA;
  }
  return "÷";
}, $c = function(e) {
  var A = function(o) {
    for (var i = [], c = 0, B = o.length; c < B; ) {
      var a = o.charCodeAt(c++);
      if (a >= 55296 && a <= 56319 && c < B) {
        var l = o.charCodeAt(c++);
        (64512 & l) == 56320 ? i.push(((1023 & a) << 10) + (1023 & l) + 65536) : (i.push(a), c--);
      } else
        i.push(a);
    }
    return i;
  }(e), t = A.length, r = 0, n = 0, s = A.map(qc);
  return { next: function() {
    if (r >= t)
      return { done: !0, value: null };
    for (var o = xA; r < t && (o = zc(0, s, ++r)) === xA; )
      ;
    if (o !== xA || r === t) {
      var i = Zc.apply(null, A.slice(n, r));
      return n = r, { value: i, done: !1 };
    }
    return { done: !0, value: null };
  } };
}, gs = function(e) {
  return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255;
}, Nr = function(e, A, t, r, n) {
  var s = "http://www.w3.org/2000/svg", o = document.createElementNS(s, "svg"), i = document.createElementNS(s, "foreignObject");
  return o.setAttributeNS(null, "width", e.toString()), o.setAttributeNS(null, "height", A.toString()), i.setAttributeNS(null, "width", "100%"), i.setAttributeNS(null, "height", "100%"), i.setAttributeNS(null, "x", t.toString()), i.setAttributeNS(null, "y", r.toString()), i.setAttributeNS(null, "externalResourcesRequired", "true"), o.appendChild(i), i.appendChild(n), o;
}, ws = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      return A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, lA = { get SUPPORT_RANGE_BOUNDS() {
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
  return Object.defineProperty(lA, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
}, get SUPPORT_WORD_BREAKING() {
  var e = lA.SUPPORT_RANGE_BOUNDS && function(A) {
    var t = A.createElement("boundtest");
    t.style.width = "50px", t.style.display = "block", t.style.fontSize = "12px", t.style.letterSpacing = "0px", t.style.wordSpacing = "0px", A.body.appendChild(t);
    var r = A.createRange();
    t.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var n = t.firstChild, s = Rt(n.data).map(function(B) {
      return z(B);
    }), o = 0, i = {}, c = s.every(function(B, a) {
      r.setStart(n, o), r.setEnd(n, o + B.length);
      var l = r.getBoundingClientRect();
      o += B.length;
      var d = l.x > i.x || l.y > i.y;
      return i = l, a === 0 || d;
    });
    return A.body.removeChild(t), c;
  }(document);
  return Object.defineProperty(lA, "SUPPORT_WORD_BREAKING", { value: e }), e;
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
  return Object.defineProperty(lA, "SUPPORT_SVG_DRAWING", { value: e }), e;
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
    return n.fillStyle = "red", n.fillRect(0, 0, r, r), ws(i).then(function(c) {
      n.drawImage(c, 0, 0);
      var B = n.getImageData(0, 0, r, r).data;
      n.fillStyle = "red", n.fillRect(0, 0, r, r);
      var a = A.createElement("div");
      return a.style.backgroundImage = "url(" + o + ")", a.style.height = r + "px", gs(B) ? ws(Nr(r, r, 0, 0, a)) : Promise.reject(!1);
    }).then(function(c) {
      return n.drawImage(c, 0, 0), gs(n.getImageData(0, 0, r, r).data);
    }).catch(function() {
      return !1;
    });
  }(document) : Promise.resolve(!1);
  return Object.defineProperty(lA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
}, get SUPPORT_CORS_IMAGES() {
  var e = new Image().crossOrigin !== void 0;
  return Object.defineProperty(lA, "SUPPORT_CORS_IMAGES", { value: e }), e;
}, get SUPPORT_RESPONSE_TYPE() {
  var e = typeof new XMLHttpRequest().responseType == "string";
  return Object.defineProperty(lA, "SUPPORT_RESPONSE_TYPE", { value: e }), e;
}, get SUPPORT_CORS_XHR() {
  var e = "withCredentials" in new XMLHttpRequest();
  return Object.defineProperty(lA, "SUPPORT_CORS_XHR", { value: e }), e;
}, get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
  var e = !(typeof Intl > "u" || !Intl.Segmenter);
  return Object.defineProperty(lA, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: e }), e;
} }, qe = function(e, A) {
  this.text = e, this.bounds = A;
}, AB = function(e, A) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(A.cloneNode(!0));
    var n = A.parentNode;
    if (n) {
      n.replaceChild(r, A);
      var s = Ar(e, r);
      return r.firstChild && n.replaceChild(r.firstChild, r), s;
    }
  }
  return re.EMPTY;
}, hs = function(e, A, t) {
  var r = e.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  var n = r.createRange();
  return n.setStart(e, A), n.setEnd(e, A + t), n;
}, un = function(e) {
  if (lA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(A.segment(e)).map(function(t) {
      return t.segment;
    });
  }
  return function(t) {
    for (var r, n = $c(t), s = []; !(r = n.next()).done; )
      r.value && s.push(r.value.slice());
    return s;
  }(e);
}, eB = function(e, A) {
  return A.letterSpacing !== 0 ? un(e) : function(t, r) {
    if (lA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var n = new Intl.Segmenter(void 0, { granularity: "word" });
      return Array.from(n.segment(t)).map(function(s) {
        return s.segment;
      });
    }
    return rB(t, r);
  }(e, A);
}, tB = [32, 160, 4961, 65792, 65793, 4153, 4241], rB = function(e, A) {
  for (var t, r = function(o, i) {
    var c = Rt(o), B = qi(c, i), a = B[0], l = B[1], d = B[2], g = c.length, u = 0, w = 0;
    return { next: function() {
      if (w >= g)
        return { done: !0, value: null };
      for (var Q = x; w < g && (Q = ji(c, l, a, ++w, d)) === x; )
        ;
      if (Q !== x || w === g) {
        var p = new zi(c, Q, u, w);
        return u = w, { value: p, done: !1 };
      }
      return { done: !0, value: null };
    } };
  }(e, { lineBreak: A.lineBreak, wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak }), n = [], s = function() {
    if (t.value) {
      var o = t.value.slice(), i = Rt(o), c = "";
      i.forEach(function(B) {
        tB.indexOf(B) === -1 ? c += z(B) : (c.length && n.push(c), n.push(z(B)), c = "");
      }), c.length && n.push(c);
    }
  }; !(t = r.next()).done; )
    s();
  return n;
}, nB = function(e, A, t) {
  this.text = sB(A.data, t.textTransform), this.textBounds = function(r, n, s, o) {
    var i = eB(n, s), c = [], B = 0;
    return i.forEach(function(a) {
      if (s.textDecorationLine.length || a.trim().length > 0)
        if (lA.SUPPORT_RANGE_BOUNDS) {
          var l = hs(o, B, a.length).getClientRects();
          if (l.length > 1) {
            var d = un(a), g = 0;
            d.forEach(function(w) {
              c.push(new qe(w, re.fromDOMRectList(r, hs(o, g + B, w.length).getClientRects()))), g += w.length;
            });
          } else
            c.push(new qe(a, re.fromDOMRectList(r, l)));
        } else {
          var u = o.splitText(a.length);
          c.push(new qe(a, AB(r, o))), o = u;
        }
      else
        lA.SUPPORT_RANGE_BOUNDS || (o = o.splitText(a.length));
      B += a.length;
    }), c;
  }(e, this.text, t, A);
}, sB = function(e, A) {
  switch (A) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(oB, iB);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, oB = /(^|\s|:|-|\(|\))([a-z])/g, iB = function(e, A, t) {
  return e.length > 0 ? A + t.toUpperCase() : e;
}, ho = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this;
    return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
  }
  return MA(A, e), A;
}(jA), Qo = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this;
    return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
  }
  return MA(A, e), A;
}(jA), po = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this, s = new XMLSerializer(), o = Ar(t, r);
    return r.setAttribute("width", o.width + "px"), r.setAttribute("height", o.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
  }
  return MA(A, e), A;
}(jA), Co = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this;
    return n.value = r.value, n;
  }
  return MA(A, e), A;
}(jA), _r = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this;
    return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === !0, n;
  }
  return MA(A, e), A;
}(jA), aB = [{ type: 15, flags: 0, unit: "px", number: 3 }], cB = [{ type: 16, flags: 0, number: 50 }], Nt = "checkbox", _t = "radio", BB = "password", Qs = 707406591, gn = function(e) {
  function A(t, r) {
    var n, s, o, i = e.call(this, t, r) || this;
    switch (i.type = r.type.toLowerCase(), i.checked = r.checked, i.value = (s = (n = r).type === BB ? new Array(n.value.length + 1).join("•") : n.value).length === 0 ? n.placeholder || "" : s, i.type !== Nt && i.type !== _t || (i.styles.backgroundColor = 3739148031, i.styles.borderTopColor = i.styles.borderRightColor = i.styles.borderBottomColor = i.styles.borderLeftColor = 2779096575, i.styles.borderTopWidth = i.styles.borderRightWidth = i.styles.borderBottomWidth = i.styles.borderLeftWidth = 1, i.styles.borderTopStyle = i.styles.borderRightStyle = i.styles.borderBottomStyle = i.styles.borderLeftStyle = 1, i.styles.backgroundClip = [0], i.styles.backgroundOrigin = [0], i.bounds = (o = i.bounds).width > o.height ? new re(o.left + (o.width - o.height) / 2, o.top, o.height, o.height) : o.width < o.height ? new re(o.left, o.top + (o.height - o.width) / 2, o.width, o.width) : o), i.type) {
      case Nt:
        i.styles.borderTopRightRadius = i.styles.borderTopLeftRadius = i.styles.borderBottomRightRadius = i.styles.borderBottomLeftRadius = aB;
        break;
      case _t:
        i.styles.borderTopRightRadius = i.styles.borderTopLeftRadius = i.styles.borderBottomRightRadius = i.styles.borderBottomLeftRadius = cB;
    }
    return i;
  }
  return MA(A, e), A;
}(jA), fo = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this, s = r.options[r.selectedIndex || 0];
    return n.value = s && s.text || "", n;
  }
  return MA(A, e), A;
}(jA), Uo = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this;
    return n.value = r.value, n;
  }
  return MA(A, e), A;
}(jA), Fo = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this;
    n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
    try {
      if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
        n.tree = yo(t, r.contentWindow.document.documentElement);
        var s = r.contentWindow.document.documentElement ? Ye(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : te.TRANSPARENT, o = r.contentWindow.document.body ? Ye(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : te.TRANSPARENT;
        n.backgroundColor = Be(s) ? Be(o) ? n.styles.backgroundColor : o : s;
      }
    } catch {
    }
    return n;
  }
  return MA(A, e), A;
}(jA), lB = ["OL", "UL", "MENU"], Kt = function(e, A, t, r) {
  for (var n = A.firstChild, s = void 0; n; n = s)
    if (s = n.nextSibling, Eo(n) && n.data.trim().length > 0)
      t.textNodes.push(new nB(e, n, t.styles));
    else if (ve(n))
      if (ko(n) && n.assignedNodes)
        n.assignedNodes().forEach(function(i) {
          return Kt(e, i, t, r);
        });
      else {
        var o = mo(e, n);
        o.styles.isVisible() && (dB(n, o, r) ? o.flags |= 4 : uB(o.styles) && (o.flags |= 2), lB.indexOf(n.tagName) !== -1 && (o.flags |= 8), t.elements.push(o), n.slot, n.shadowRoot ? Kt(e, n.shadowRoot, o, r) : Jt(n) || bo(n) || Xt(n) || Kt(e, n, o, r));
      }
}, mo = function(e, A) {
  return Xr(A) ? new ho(e, A) : Ho(A) ? new Qo(e, A) : bo(A) ? new po(e, A) : gB(A) ? new Co(e, A) : wB(A) ? new _r(e, A) : hB(A) ? new gn(e, A) : Xt(A) ? new fo(e, A) : Jt(A) ? new Uo(e, A) : vo(A) ? new Fo(e, A) : new jA(e, A);
}, yo = function(e, A) {
  var t = mo(e, A);
  return t.flags |= 4, Kt(e, A, t, t), t;
}, dB = function(e, A, t) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || wn(e) && t.styles.isTransparent();
}, uB = function(e) {
  return e.isPositioned() || e.isFloating();
}, Eo = function(e) {
  return e.nodeType === Node.TEXT_NODE;
}, ve = function(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}, Jr = function(e) {
  return ve(e) && e.style !== void 0 && !Lt(e);
}, Lt = function(e) {
  return typeof e.className == "object";
}, gB = function(e) {
  return e.tagName === "LI";
}, wB = function(e) {
  return e.tagName === "OL";
}, hB = function(e) {
  return e.tagName === "INPUT";
}, bo = function(e) {
  return e.tagName === "svg";
}, wn = function(e) {
  return e.tagName === "BODY";
}, Ho = function(e) {
  return e.tagName === "CANVAS";
}, ps = function(e) {
  return e.tagName === "VIDEO";
}, Xr = function(e) {
  return e.tagName === "IMG";
}, vo = function(e) {
  return e.tagName === "IFRAME";
}, Cs = function(e) {
  return e.tagName === "STYLE";
}, Jt = function(e) {
  return e.tagName === "TEXTAREA";
}, Xt = function(e) {
  return e.tagName === "SELECT";
}, ko = function(e) {
  return e.tagName === "SLOT";
}, fs = function(e) {
  return e.tagName.indexOf("-") > 0;
}, QB = function() {
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
      var c = t.counters[i.counter];
      c && i.increment !== 0 && (s = !1, c.length || c.push(1), c[Math.max(0, c.length - 1)] += i.increment);
    });
    var o = [];
    return s && n.forEach(function(i) {
      var c = t.counters[i.counter];
      o.push(i.counter), c || (c = t.counters[i.counter] = []), c.push(i.reset);
    }), o;
  }, e;
}(), Us = { integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"] }, Fs = { integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"] }, pB = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"] }, CB = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"] }, Ue = function(e, A, t, r, n, s) {
  return e < A || e > t ? At(e, n, s.length > 0) : r.integers.reduce(function(o, i, c) {
    for (; e >= i; )
      e -= i, o += r.values[c];
    return o;
  }, "") + s;
}, Io = function(e, A, t, r) {
  var n = "";
  do
    t || e--, n = r(e) + n, e /= A;
  while (e * A >= A);
  return n;
}, q = function(e, A, t, r, n) {
  var s = t - A + 1;
  return (e < 0 ? "-" : "") + (Io(Math.abs(e), s, r, function(o) {
    return z(Math.floor(o % s) + A);
  }) + n);
}, ge = function(e, A, t) {
  t === void 0 && (t = ". ");
  var r = A.length;
  return Io(Math.abs(e), r, !1, function(n) {
    return A[Math.floor(n % r)];
  }) + t;
}, Ae = function(e, A, t, r, n, s) {
  if (e < -9999 || e > 9999)
    return At(e, 4, n.length > 0);
  var o = Math.abs(e), i = n;
  if (o === 0)
    return A[0] + i;
  for (var c = 0; o > 0 && c <= 4; c++) {
    var B = o % 10;
    B === 0 && nA(s, 1) && i !== "" ? i = A[B] + i : B > 1 || B === 1 && c === 0 || B === 1 && c === 1 && nA(s, 2) || B === 1 && c === 1 && nA(s, 4) && e > 100 || B === 1 && c > 1 && nA(s, 8) ? i = A[B] + (c > 0 ? t[c - 1] : "") + i : B === 1 && c > 0 && (i = t[c - 1] + i), o = Math.floor(o / 10);
  }
  return (e < 0 ? r : "") + i;
}, ms = "十百千萬", ys = "拾佰仟萬", Es = "マイナス", Ur = "마이너스", At = function(e, A, t) {
  var r = t ? ". " : "", n = t ? "、" : "", s = t ? ", " : "", o = t ? " " : "";
  switch (A) {
    case 0:
      return "•" + o;
    case 1:
      return "◦" + o;
    case 2:
      return "◾" + o;
    case 5:
      var i = q(e, 48, 57, !0, r);
      return i.length < 4 ? "0" + i : i;
    case 4:
      return ge(e, "〇一二三四五六七八九", n);
    case 6:
      return Ue(e, 1, 3999, Us, 3, r).toLowerCase();
    case 7:
      return Ue(e, 1, 3999, Us, 3, r);
    case 8:
      return q(e, 945, 969, !1, r);
    case 9:
      return q(e, 97, 122, !1, r);
    case 10:
      return q(e, 65, 90, !1, r);
    case 11:
      return q(e, 1632, 1641, !0, r);
    case 12:
    case 49:
      return Ue(e, 1, 9999, Fs, 3, r);
    case 35:
      return Ue(e, 1, 9999, Fs, 3, r).toLowerCase();
    case 13:
      return q(e, 2534, 2543, !0, r);
    case 14:
    case 30:
      return q(e, 6112, 6121, !0, r);
    case 15:
      return ge(e, "子丑寅卯辰巳午未申酉戌亥", n);
    case 16:
      return ge(e, "甲乙丙丁戊己庚辛壬癸", n);
    case 17:
    case 48:
      return Ae(e, "零一二三四五六七八九", ms, "負", n, 14);
    case 47:
      return Ae(e, "零壹貳參肆伍陸柒捌玖", ys, "負", n, 15);
    case 42:
      return Ae(e, "零一二三四五六七八九", ms, "负", n, 14);
    case 41:
      return Ae(e, "零壹贰叁肆伍陆柒捌玖", ys, "负", n, 15);
    case 26:
      return Ae(e, "〇一二三四五六七八九", "十百千万", Es, n, 0);
    case 25:
      return Ae(e, "零壱弐参四伍六七八九", "拾百千万", Es, n, 7);
    case 31:
      return Ae(e, "영일이삼사오육칠팔구", "십백천만", Ur, s, 7);
    case 33:
      return Ae(e, "零一二三四五六七八九", "十百千萬", Ur, s, 0);
    case 32:
      return Ae(e, "零壹貳參四五六七八九", "拾百千", Ur, s, 7);
    case 18:
      return q(e, 2406, 2415, !0, r);
    case 20:
      return Ue(e, 1, 19999, CB, 3, r);
    case 21:
      return q(e, 2790, 2799, !0, r);
    case 22:
      return q(e, 2662, 2671, !0, r);
    case 22:
      return Ue(e, 1, 10999, pB, 3, r);
    case 23:
      return ge(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return ge(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return q(e, 3302, 3311, !0, r);
    case 28:
      return ge(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
    case 29:
      return ge(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
    case 34:
      return q(e, 3792, 3801, !0, r);
    case 37:
      return q(e, 6160, 6169, !0, r);
    case 38:
      return q(e, 4160, 4169, !0, r);
    case 39:
      return q(e, 2918, 2927, !0, r);
    case 40:
      return q(e, 1776, 1785, !0, r);
    case 43:
      return q(e, 3046, 3055, !0, r);
    case 44:
      return q(e, 3174, 3183, !0, r);
    case 45:
      return q(e, 3664, 3673, !0, r);
    case 46:
      return q(e, 3872, 3881, !0, r);
    default:
      return q(e, 48, 57, !0, r);
  }
}, xo = "data-html2canvas-ignore", bs = function() {
  function e(A, t, r) {
    if (this.context = A, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new QB(), this.quoteDepth = 0, !t.ownerDocument)
      throw new Error("Cloned element does not have an owner document");
    this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
  }
  return e.prototype.toIFrame = function(A, t) {
    var r = this, n = fB(A, t);
    if (!n.contentWindow)
      return Promise.reject("Unable to find iframe window");
    var s = A.defaultView.pageXOffset, o = A.defaultView.pageYOffset, i = n.contentWindow, c = i.document, B = mB(n).then(function() {
      return fA(r, void 0, void 0, function() {
        var a, l;
        return QA(this, function(d) {
          switch (d.label) {
            case 0:
              return this.scrolledElements.forEach(HB), i && (i.scrollTo(t.left, t.top), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || i.scrollY === t.top && i.scrollX === t.left || (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(i.scrollX - t.left, i.scrollY - t.top, 0, 0))), a = this.options.onclone, (l = this.clonedReferenceElement) === void 0 ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : c.fonts && c.fonts.ready ? [4, c.fonts.ready] : [3, 2];
            case 1:
              d.sent(), d.label = 2;
            case 2:
              return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, FB(c)] : [3, 4];
            case 3:
              d.sent(), d.label = 4;
            case 4:
              return typeof a == "function" ? [2, Promise.resolve().then(function() {
                return a(c, l);
              }).then(function() {
                return n;
              })] : [2, n];
          }
        });
      });
    });
    return c.open(), c.write(EB(document.doctype) + "<html></html>"), bB(this.referenceElement.ownerDocument, s, o), c.replaceChild(c.adoptNode(this.documentElement), c.documentElement), c.close(), B;
  }, e.prototype.createElementClone = function(A) {
    if (Pr(A, 2), Ho(A))
      return this.createCanvasClone(A);
    if (ps(A))
      return this.createVideoClone(A);
    if (Cs(A))
      return this.createStyleClone(A);
    var t = A.cloneNode(!1);
    return Xr(t) && (Xr(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), fs(t) ? this.createCustomElementClone(t) : t;
  }, e.prototype.createCustomElementClone = function(A) {
    var t = document.createElement("html2canvascustomelement");
    return Fr(A.style, t), t;
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
            var c = i.getContextAttributes();
            (c == null ? void 0 : c.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A);
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
    ve(t) && (t.tagName === "SCRIPT" || t.hasAttribute(xo) || typeof this.options.ignoreElements == "function" && this.options.ignoreElements(t)) || this.options.copyStyles && ve(t) && Cs(t) || A.appendChild(this.cloneNode(t, r));
  }, e.prototype.cloneChildNodes = function(A, t, r) {
    for (var n = this, s = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; s; s = s.nextSibling)
      if (ve(s) && ko(s) && typeof s.assignedNodes == "function") {
        var o = s.assignedNodes();
        o.length && o.forEach(function(i) {
          return n.appendChildNode(t, i, r);
        });
      } else
        this.appendChildNode(t, s, r);
  }, e.prototype.cloneNode = function(A, t) {
    if (Eo(A))
      return document.createTextNode(A.data);
    if (!A.ownerDocument)
      return A.cloneNode(!1);
    var r = A.ownerDocument.defaultView;
    if (r && ve(A) && (Jr(A) || Lt(A))) {
      var n = this.createElementClone(A);
      n.style.transitionProperty = "none";
      var s = r.getComputedStyle(A), o = r.getComputedStyle(A, ":before"), i = r.getComputedStyle(A, ":after");
      this.referenceElement === A && Jr(n) && (this.clonedReferenceElement = n), wn(n) && vB(n);
      var c = this.counters.parse(new cs(this.context, s)), B = this.resolvePseudoContent(A, n, o, je.BEFORE);
      fs(A) && (t = !0), ps(A) || this.cloneChildNodes(A, n, t), B && n.insertBefore(B, n.firstChild);
      var a = this.resolvePseudoContent(A, n, i, je.AFTER);
      return a && n.appendChild(a), this.counters.pop(c), (s && (this.options.copyStyles || Lt(A)) && !vo(A) || t) && Fr(s, n), A.scrollTop === 0 && A.scrollLeft === 0 || this.scrolledElements.push([n, A.scrollLeft, A.scrollTop]), (Jt(A) || Xt(A)) && (Jt(n) || Xt(n)) && (n.value = A.value), n;
    }
    return A.cloneNode(!1);
  }, e.prototype.resolvePseudoContent = function(A, t, r, n) {
    var s = this;
    if (r) {
      var o = r.content, i = t.ownerDocument;
      if (i && o && o !== "none" && o !== "-moz-alt-content" && r.display !== "none") {
        this.counters.parse(new cs(this.context, r));
        var c = new _c(this.context, r), B = i.createElement("html2canvaspseudoelement");
        Fr(r, B), c.content.forEach(function(l) {
          if (l.type === 0)
            B.appendChild(i.createTextNode(l.value));
          else if (l.type === 22) {
            var d = i.createElement("img");
            d.src = l.value, d.style.opacity = "1", B.appendChild(d);
          } else if (l.type === 18) {
            if (l.name === "attr") {
              var g = l.values.filter(P);
              g.length && B.appendChild(i.createTextNode(A.getAttribute(g[0].value) || ""));
            } else if (l.name === "counter") {
              var u = l.values.filter(Se), w = u[0], Q = u[1];
              if (w && P(w)) {
                var p = s.counters.getCounterValue(w.value), f = Q && P(Q) ? Vr.parse(s.context, Q.value) : 3;
                B.appendChild(i.createTextNode(At(p, f, !1)));
              }
            } else if (l.name === "counters") {
              var E = l.values.filter(Se), U = (w = E[0], E[1]);
              if (Q = E[2], w && P(w)) {
                var C = s.counters.getCounterValues(w.value), H = Q && P(Q) ? Vr.parse(s.context, Q.value) : 3, k = U && U.type === 0 ? U.value : "", b = C.map(function(N) {
                  return At(N, H, !1);
                }).join(k);
                B.appendChild(i.createTextNode(b));
              }
            }
          } else if (l.type === 20)
            switch (l.value) {
              case "open-quote":
                B.appendChild(i.createTextNode(as(c.quotes, s.quoteDepth++, !0)));
                break;
              case "close-quote":
                B.appendChild(i.createTextNode(as(c.quotes, --s.quoteDepth, !1)));
                break;
              default:
                B.appendChild(i.createTextNode(l.value));
            }
        }), B.className = Wr + " " + Yr;
        var a = n === je.BEFORE ? " " + Wr : " " + Yr;
        return Lt(t) ? t.className.baseValue += a : t.className += a, B;
      }
    }
  }, e.destroy = function(A) {
    return !!A.parentNode && (A.parentNode.removeChild(A), !0);
  }, e;
}();
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(je || (je = {}));
var G, fB = function(e, A) {
  var t = e.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = A.width.toString(), t.height = A.height.toString(), t.scrolling = "no", t.setAttribute(xo, "true"), e.body.appendChild(t), t;
}, UB = function(e) {
  return new Promise(function(A) {
    e.complete ? A() : e.src ? (e.onload = A, e.onerror = A) : A();
  });
}, FB = function(e) {
  return Promise.all([].slice.call(e.images, 0).map(UB));
}, mB = function(e) {
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
}, yB = ["all", "d", "content"], Fr = function(e, A) {
  for (var t = e.length - 1; t >= 0; t--) {
    var r = e.item(t);
    yB.indexOf(r) === -1 && A.style.setProperty(r, e.getPropertyValue(r));
  }
  return A;
}, EB = function(e) {
  var A = "";
  return e && (A += "<!DOCTYPE ", e.name && (A += e.name), e.internalSubset && (A += e.internalSubset), e.publicId && (A += '"' + e.publicId + '"'), e.systemId && (A += '"' + e.systemId + '"'), A += ">"), A;
}, bB = function(e, A, t) {
  e && e.defaultView && (A !== e.defaultView.pageXOffset || t !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, t);
}, HB = function(e) {
  var A = e[0], t = e[1], r = e[2];
  A.scrollLeft = t, A.scrollTop = r;
}, Wr = "___html2canvas___pseudoelement_before", Yr = "___html2canvas___pseudoelement_after", Hs = `{
    content: "" !important;
    display: none !important;
}`, vB = function(e) {
  kB(e, "." + Wr + ":before" + Hs + `
         .` + Yr + ":after" + Hs);
}, kB = function(e, A) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = A, e.appendChild(r);
  }
}, Ko = function() {
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
}(), IB = function() {
  function e(A, t) {
    this.context = A, this._options = t, this._cache = {};
  }
  return e.prototype.addImage = function(A) {
    var t = Promise.resolve();
    return this.has(A) || (yr(A) || SB(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {
    }), t;
  }, e.prototype.match = function(A) {
    return this._cache[A];
  }, e.prototype.loadImage = function(A) {
    return fA(this, void 0, void 0, function() {
      var t, r, n, s, o = this;
      return QA(this, function(i) {
        switch (i.label) {
          case 0:
            return t = Ko.isSameOrigin(A), r = !mr(A) && this._options.useCORS === !0 && lA.SUPPORT_CORS_IMAGES && !t, n = !mr(A) && !t && !yr(A) && typeof this._options.proxy == "string" && lA.SUPPORT_CORS_XHR && !r, t || this._options.allowTaint !== !1 || mr(A) || yr(A) || n || r ? (s = A, n ? [4, this.proxy(s)] : [3, 2]) : [2];
          case 1:
            s = i.sent(), i.label = 2;
          case 2:
            return this.context.logger.debug("Added image " + A.substring(0, 256)), [4, new Promise(function(c, B) {
              var a = new Image();
              a.onload = function() {
                return c(a);
              }, a.onerror = B, (DB(s) || r) && (a.crossOrigin = "anonymous"), a.src = s, a.complete === !0 && setTimeout(function() {
                return c(a);
              }, 500), o._options.imageTimeout > 0 && setTimeout(function() {
                return B("Timed out (" + o._options.imageTimeout + "ms) loading image");
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
      var i = lA.SUPPORT_RESPONSE_TYPE ? "blob" : "text", c = new XMLHttpRequest();
      c.onload = function() {
        if (c.status === 200)
          if (i === "text")
            s(c.response);
          else {
            var l = new FileReader();
            l.addEventListener("load", function() {
              return s(l.result);
            }, !1), l.addEventListener("error", function(d) {
              return o(d);
            }, !1), l.readAsDataURL(c.response);
          }
        else
          o("Failed to proxy resource " + n + " with status code " + c.status);
      }, c.onerror = o;
      var B = r.indexOf("?") > -1 ? "&" : "?";
      if (c.open("GET", "" + r + B + "url=" + encodeURIComponent(A) + "&responseType=" + i), i !== "text" && c instanceof XMLHttpRequest && (c.responseType = i), t._options.imageTimeout) {
        var a = t._options.imageTimeout;
        c.timeout = a, c.ontimeout = function() {
          return o("Timed out (" + a + "ms) proxying " + n);
        };
      }
      c.send();
    });
  }, e;
}(), xB = /^data:image\/svg\+xml/i, KB = /^data:image\/.*;base64,/i, LB = /^data:image\/.*/i, SB = function(e) {
  return lA.SUPPORT_SVG_DRAWING || !TB(e);
}, mr = function(e) {
  return LB.test(e);
}, DB = function(e) {
  return KB.test(e);
}, yr = function(e) {
  return e.substr(0, 4) === "blob";
}, TB = function(e) {
  return e.substr(-3).toLowerCase() === "svg" || xB.test(e);
}, m = function() {
  function e(A, t) {
    this.type = 0, this.x = A, this.y = t;
  }
  return e.prototype.add = function(A, t) {
    return new e(this.x + A, this.y + t);
  }, e;
}(), Fe = function(e, A, t) {
  return new m(e.x + (A.x - e.x) * t, e.y + (A.y - e.y) * t);
}, Ft = function() {
  function e(A, t, r, n) {
    this.type = 1, this.start = A, this.startControl = t, this.endControl = r, this.end = n;
  }
  return e.prototype.subdivide = function(A, t) {
    var r = Fe(this.start, this.startControl, A), n = Fe(this.startControl, this.endControl, A), s = Fe(this.endControl, this.end, A), o = Fe(r, n, A), i = Fe(n, s, A), c = Fe(o, i, A);
    return t ? new e(this.start, r, o, c) : new e(c, i, s, this.end);
  }, e.prototype.add = function(A, t) {
    return new e(this.start.add(A, t), this.startControl.add(A, t), this.endControl.add(A, t), this.end.add(A, t));
  }, e.prototype.reverse = function() {
    return new e(this.end, this.endControl, this.startControl, this.start);
  }, e;
}(), LA = function(e) {
  return e.type === 1;
}, OB = function(e) {
  var A = e.styles, t = e.bounds, r = _e(A.borderTopLeftRadius, t.width, t.height), n = r[0], s = r[1], o = _e(A.borderTopRightRadius, t.width, t.height), i = o[0], c = o[1], B = _e(A.borderBottomRightRadius, t.width, t.height), a = B[0], l = B[1], d = _e(A.borderBottomLeftRadius, t.width, t.height), g = d[0], u = d[1], w = [];
  w.push((n + i) / t.width), w.push((g + a) / t.width), w.push((s + u) / t.height), w.push((c + l) / t.height);
  var Q = Math.max.apply(Math, w);
  Q > 1 && (n /= Q, s /= Q, i /= Q, c /= Q, a /= Q, l /= Q, g /= Q, u /= Q);
  var p = t.width - i, f = t.height - l, E = t.width - a, U = t.height - u, C = A.borderTopWidth, H = A.borderRightWidth, k = A.borderBottomWidth, b = A.borderLeftWidth, N = _(A.paddingTop, e.bounds.width), eA = _(A.paddingRight, e.bounds.width), gA = _(A.paddingBottom, e.bounds.width), X = _(A.paddingLeft, e.bounds.width);
  this.topLeftBorderDoubleOuterBox = n > 0 || s > 0 ? J(t.left + b / 3, t.top + C / 3, n - b / 3, s - C / 3, G.TOP_LEFT) : new m(t.left + b / 3, t.top + C / 3), this.topRightBorderDoubleOuterBox = n > 0 || s > 0 ? J(t.left + p, t.top + C / 3, i - H / 3, c - C / 3, G.TOP_RIGHT) : new m(t.left + t.width - H / 3, t.top + C / 3), this.bottomRightBorderDoubleOuterBox = a > 0 || l > 0 ? J(t.left + E, t.top + f, a - H / 3, l - k / 3, G.BOTTOM_RIGHT) : new m(t.left + t.width - H / 3, t.top + t.height - k / 3), this.bottomLeftBorderDoubleOuterBox = g > 0 || u > 0 ? J(t.left + b / 3, t.top + U, g - b / 3, u - k / 3, G.BOTTOM_LEFT) : new m(t.left + b / 3, t.top + t.height - k / 3), this.topLeftBorderDoubleInnerBox = n > 0 || s > 0 ? J(t.left + 2 * b / 3, t.top + 2 * C / 3, n - 2 * b / 3, s - 2 * C / 3, G.TOP_LEFT) : new m(t.left + 2 * b / 3, t.top + 2 * C / 3), this.topRightBorderDoubleInnerBox = n > 0 || s > 0 ? J(t.left + p, t.top + 2 * C / 3, i - 2 * H / 3, c - 2 * C / 3, G.TOP_RIGHT) : new m(t.left + t.width - 2 * H / 3, t.top + 2 * C / 3), this.bottomRightBorderDoubleInnerBox = a > 0 || l > 0 ? J(t.left + E, t.top + f, a - 2 * H / 3, l - 2 * k / 3, G.BOTTOM_RIGHT) : new m(t.left + t.width - 2 * H / 3, t.top + t.height - 2 * k / 3), this.bottomLeftBorderDoubleInnerBox = g > 0 || u > 0 ? J(t.left + 2 * b / 3, t.top + U, g - 2 * b / 3, u - 2 * k / 3, G.BOTTOM_LEFT) : new m(t.left + 2 * b / 3, t.top + t.height - 2 * k / 3), this.topLeftBorderStroke = n > 0 || s > 0 ? J(t.left + b / 2, t.top + C / 2, n - b / 2, s - C / 2, G.TOP_LEFT) : new m(t.left + b / 2, t.top + C / 2), this.topRightBorderStroke = n > 0 || s > 0 ? J(t.left + p, t.top + C / 2, i - H / 2, c - C / 2, G.TOP_RIGHT) : new m(t.left + t.width - H / 2, t.top + C / 2), this.bottomRightBorderStroke = a > 0 || l > 0 ? J(t.left + E, t.top + f, a - H / 2, l - k / 2, G.BOTTOM_RIGHT) : new m(t.left + t.width - H / 2, t.top + t.height - k / 2), this.bottomLeftBorderStroke = g > 0 || u > 0 ? J(t.left + b / 2, t.top + U, g - b / 2, u - k / 2, G.BOTTOM_LEFT) : new m(t.left + b / 2, t.top + t.height - k / 2), this.topLeftBorderBox = n > 0 || s > 0 ? J(t.left, t.top, n, s, G.TOP_LEFT) : new m(t.left, t.top), this.topRightBorderBox = i > 0 || c > 0 ? J(t.left + p, t.top, i, c, G.TOP_RIGHT) : new m(t.left + t.width, t.top), this.bottomRightBorderBox = a > 0 || l > 0 ? J(t.left + E, t.top + f, a, l, G.BOTTOM_RIGHT) : new m(t.left + t.width, t.top + t.height), this.bottomLeftBorderBox = g > 0 || u > 0 ? J(t.left, t.top + U, g, u, G.BOTTOM_LEFT) : new m(t.left, t.top + t.height), this.topLeftPaddingBox = n > 0 || s > 0 ? J(t.left + b, t.top + C, Math.max(0, n - b), Math.max(0, s - C), G.TOP_LEFT) : new m(t.left + b, t.top + C), this.topRightPaddingBox = i > 0 || c > 0 ? J(t.left + Math.min(p, t.width - H), t.top + C, p > t.width + H ? 0 : Math.max(0, i - H), Math.max(0, c - C), G.TOP_RIGHT) : new m(t.left + t.width - H, t.top + C), this.bottomRightPaddingBox = a > 0 || l > 0 ? J(t.left + Math.min(E, t.width - b), t.top + Math.min(f, t.height - k), Math.max(0, a - H), Math.max(0, l - k), G.BOTTOM_RIGHT) : new m(t.left + t.width - H, t.top + t.height - k), this.bottomLeftPaddingBox = g > 0 || u > 0 ? J(t.left + b, t.top + Math.min(U, t.height - k), Math.max(0, g - b), Math.max(0, u - k), G.BOTTOM_LEFT) : new m(t.left + b, t.top + t.height - k), this.topLeftContentBox = n > 0 || s > 0 ? J(t.left + b + X, t.top + C + N, Math.max(0, n - (b + X)), Math.max(0, s - (C + N)), G.TOP_LEFT) : new m(t.left + b + X, t.top + C + N), this.topRightContentBox = i > 0 || c > 0 ? J(t.left + Math.min(p, t.width + b + X), t.top + C + N, p > t.width + b + X ? 0 : i - b + X, c - (C + N), G.TOP_RIGHT) : new m(t.left + t.width - (H + eA), t.top + C + N), this.bottomRightContentBox = a > 0 || l > 0 ? J(t.left + Math.min(E, t.width - (b + X)), t.top + Math.min(f, t.height + C + N), Math.max(0, a - (H + eA)), l - (k + gA), G.BOTTOM_RIGHT) : new m(t.left + t.width - (H + eA), t.top + t.height - (k + gA)), this.bottomLeftContentBox = g > 0 || u > 0 ? J(t.left + b + X, t.top + U, Math.max(0, g - (b + X)), u - (k + gA), G.BOTTOM_LEFT) : new m(t.left + b + X, t.top + t.height - (k + gA));
};
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(G || (G = {}));
var J = function(e, A, t, r, n) {
  var s = (Math.sqrt(2) - 1) / 3 * 4, o = t * s, i = r * s, c = e + t, B = A + r;
  switch (n) {
    case G.TOP_LEFT:
      return new Ft(new m(e, B), new m(e, B - i), new m(c - o, A), new m(c, A));
    case G.TOP_RIGHT:
      return new Ft(new m(e, A), new m(e + o, A), new m(c, B - i), new m(c, B));
    case G.BOTTOM_RIGHT:
      return new Ft(new m(c, A), new m(c, A + i), new m(e + o, B), new m(e, B));
    case G.BOTTOM_LEFT:
    default:
      return new Ft(new m(c, B), new m(c - o, B), new m(e, A + i), new m(e, A));
  }
}, Wt = function(e) {
  return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox];
}, Yt = function(e) {
  return [e.topLeftPaddingBox, e.topRightPaddingBox, e.bottomRightPaddingBox, e.bottomLeftPaddingBox];
}, MB = function(e, A, t) {
  this.offsetX = e, this.offsetY = A, this.matrix = t, this.type = 0, this.target = 6;
}, mt = function(e, A) {
  this.path = e, this.target = A, this.type = 1;
}, RB = function(e) {
  this.opacity = e, this.type = 2, this.target = 6;
}, Lo = function(e) {
  return e.type === 1;
}, vs = function(e, A) {
  return e.length === A.length && e.some(function(t, r) {
    return t === A[r];
  });
}, So = function(e) {
  this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
}, Do = function() {
  function e(A, t) {
    if (this.container = A, this.parent = t, this.effects = [], this.curves = new OB(this.container), this.container.styles.opacity < 1 && this.effects.push(new RB(this.container.styles.opacity)), this.container.styles.transform !== null) {
      var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, s = this.container.styles.transform;
      this.effects.push(new MB(r, n, s));
    }
    if (this.container.styles.overflowX !== 0) {
      var o = Wt(this.curves), i = Yt(this.curves);
      vs(o, i) ? this.effects.push(new mt(o, 6)) : (this.effects.push(new mt(o, 2)), this.effects.push(new mt(i, 4)));
    }
  }
  return e.prototype.getEffects = function(A) {
    for (var t = [2, 3].indexOf(this.container.styles.position) === -1, r = this.parent, n = this.effects.slice(0); r; ) {
      var s = r.effects.filter(function(c) {
        return !Lo(c);
      });
      if (t || r.container.styles.position !== 0 || !r.parent) {
        if (n.unshift.apply(n, s), t = [2, 3].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
          var o = Wt(r.curves), i = Yt(r.curves);
          vs(o, i) || n.unshift(new mt(i, 6));
        }
      } else
        n.unshift.apply(n, s);
      r = r.parent;
    }
    return n.filter(function(c) {
      return nA(c.target, A);
    });
  }, e;
}(), Zr = function(e, A, t, r) {
  e.container.elements.forEach(function(n) {
    var s = nA(n.flags, 4), o = nA(n.flags, 2), i = new Do(n, e);
    nA(n.styles.display, 2048) && r.push(i);
    var c = nA(n.flags, 8) ? [] : r;
    if (s || o) {
      var B = s || n.styles.isPositioned() ? t : A, a = new So(i);
      if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
        var l = n.styles.zIndex.order;
        if (l < 0) {
          var d = 0;
          B.negativeZIndex.some(function(u, w) {
            return l > u.element.container.styles.zIndex.order ? (d = w, !1) : d > 0;
          }), B.negativeZIndex.splice(d, 0, a);
        } else if (l > 0) {
          var g = 0;
          B.positiveZIndex.some(function(u, w) {
            return l >= u.element.container.styles.zIndex.order ? (g = w + 1, !1) : g > 0;
          }), B.positiveZIndex.splice(g, 0, a);
        } else
          B.zeroOrAutoZIndexOrTransformedOrOpacity.push(a);
      } else
        n.styles.isFloating() ? B.nonPositionedFloats.push(a) : B.nonPositionedInlineLevel.push(a);
      Zr(i, a, s ? a : t, c);
    } else
      n.styles.isInlineLevel() ? A.inlineLevel.push(i) : A.nonInlineLevel.push(i), Zr(i, A, t, c);
    nA(n.flags, 8) && To(n, c);
  });
}, To = function(e, A) {
  for (var t = e instanceof _r ? e.start : 1, r = e instanceof _r && e.reversed, n = 0; n < A.length; n++) {
    var s = A[n];
    s.container instanceof Co && typeof s.container.value == "number" && s.container.value !== 0 && (t = s.container.value), s.listValue = At(t, s.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, ks = function(e, A) {
  switch (A) {
    case 0:
      return KA(e.topLeftBorderBox, e.topLeftPaddingBox, e.topRightBorderBox, e.topRightPaddingBox);
    case 1:
      return KA(e.topRightBorderBox, e.topRightPaddingBox, e.bottomRightBorderBox, e.bottomRightPaddingBox);
    case 2:
      return KA(e.bottomRightBorderBox, e.bottomRightPaddingBox, e.bottomLeftBorderBox, e.bottomLeftPaddingBox);
    default:
      return KA(e.bottomLeftBorderBox, e.bottomLeftPaddingBox, e.topLeftBorderBox, e.topLeftPaddingBox);
  }
}, yt = function(e, A) {
  var t = [];
  return LA(e) ? t.push(e.subdivide(0.5, !1)) : t.push(e), LA(A) ? t.push(A.subdivide(0.5, !0)) : t.push(A), t;
}, KA = function(e, A, t, r) {
  var n = [];
  return LA(e) ? n.push(e.subdivide(0.5, !1)) : n.push(e), LA(t) ? n.push(t.subdivide(0.5, !0)) : n.push(t), LA(r) ? n.push(r.subdivide(0.5, !0).reverse()) : n.push(r), LA(A) ? n.push(A.subdivide(0.5, !1).reverse()) : n.push(A), n;
}, Is = function(e) {
  var A = e.bounds, t = e.styles;
  return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, Zt = function(e) {
  var A = e.styles, t = e.bounds, r = _(A.paddingLeft, t.width), n = _(A.paddingRight, t.width), s = _(A.paddingTop, t.width), o = _(A.paddingBottom, t.width);
  return t.add(r + A.borderLeftWidth, s + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + r + n), -(A.borderTopWidth + A.borderBottomWidth + s + o));
}, Er = function(e, A, t) {
  var r = function(B, a) {
    return B === 0 ? a.bounds : B === 2 ? Zt(a) : Is(a);
  }(He(e.styles.backgroundOrigin, A), e), n = function(B, a) {
    return B === 0 ? a.bounds : B === 2 ? Zt(a) : Is(a);
  }(He(e.styles.backgroundClip, A), e), s = GB(He(e.styles.backgroundSize, A), t, r), o = s[0], i = s[1], c = _e(He(e.styles.backgroundPosition, A), r.width - o, r.height - i);
  return [VB(He(e.styles.backgroundRepeat, A), c, s, r, n), Math.round(r.left + c[0]), Math.round(r.top + c[1]), o, i];
}, me = function(e) {
  return P(e) && e.value === xe.AUTO;
}, Et = function(e) {
  return typeof e == "number";
}, GB = function(e, A, t) {
  var r = A[0], n = A[1], s = A[2], o = e[0], i = e[1];
  if (!o)
    return [0, 0];
  if (AA(o) && i && AA(i))
    return [_(o, t.width), _(i, t.height)];
  var c = Et(s);
  if (P(o) && (o.value === xe.CONTAIN || o.value === xe.COVER))
    return Et(s) ? t.width / t.height < s != (o.value === xe.COVER) ? [t.width, t.width / s] : [t.height * s, t.height] : [t.width, t.height];
  var B = Et(r), a = Et(n), l = B || a;
  if (me(o) && (!i || me(i)))
    return B && a ? [r, n] : c || l ? l && c ? [B ? r : n * s, a ? n : r / s] : [B ? r : t.width, a ? n : t.height] : [t.width, t.height];
  if (c) {
    var d = 0, g = 0;
    return AA(o) ? d = _(o, t.width) : AA(i) && (g = _(i, t.height)), me(o) ? d = g * s : i && !me(i) || (g = d / s), [d, g];
  }
  var u = null, w = null;
  if (AA(o) ? u = _(o, t.width) : i && AA(i) && (w = _(i, t.height)), u === null || i && !me(i) || (w = B && a ? u / r * n : t.height), w !== null && me(o) && (u = B && a ? w / n * r : t.width), u !== null && w !== null)
    return [u, w];
  throw new Error("Unable to calculate background-size for element");
}, He = function(e, A) {
  var t = e[A];
  return t === void 0 ? e[0] : t;
}, VB = function(e, A, t, r, n) {
  var s = A[0], o = A[1], i = t[0], c = t[1];
  switch (e) {
    case 2:
      return [new m(Math.round(r.left), Math.round(r.top + o)), new m(Math.round(r.left + r.width), Math.round(r.top + o)), new m(Math.round(r.left + r.width), Math.round(c + r.top + o)), new m(Math.round(r.left), Math.round(c + r.top + o))];
    case 3:
      return [new m(Math.round(r.left + s), Math.round(r.top)), new m(Math.round(r.left + s + i), Math.round(r.top)), new m(Math.round(r.left + s + i), Math.round(r.height + r.top)), new m(Math.round(r.left + s), Math.round(r.height + r.top))];
    case 1:
      return [new m(Math.round(r.left + s), Math.round(r.top + o)), new m(Math.round(r.left + s + i), Math.round(r.top + o)), new m(Math.round(r.left + s + i), Math.round(r.top + o + c)), new m(Math.round(r.left + s), Math.round(r.top + o + c))];
    default:
      return [new m(Math.round(n.left), Math.round(n.top)), new m(Math.round(n.left + n.width), Math.round(n.top)), new m(Math.round(n.left + n.width), Math.round(n.height + n.top)), new m(Math.round(n.left), Math.round(n.height + n.top))];
  }
}, xs = "Hidden Text", PB = function() {
  function e(A) {
    this._data = {}, this._document = A;
  }
  return e.prototype.parseMetrics = function(A, t) {
    var r = this._document.createElement("div"), n = this._document.createElement("img"), s = this._document.createElement("span"), o = this._document.body;
    r.style.visibility = "hidden", r.style.fontFamily = A, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", o.appendChild(r), n.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", s.style.fontFamily = A, s.style.fontSize = t, s.style.margin = "0", s.style.padding = "0", s.appendChild(this._document.createTextNode(xs)), r.appendChild(s), r.appendChild(n);
    var i = n.offsetTop - s.offsetTop + 2;
    r.removeChild(s), r.appendChild(this._document.createTextNode(xs)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
    var c = n.offsetTop - r.offsetTop + 2;
    return o.removeChild(r), { baseline: i, middle: c };
  }, e.prototype.getMetrics = function(A, t) {
    var r = A + " " + t;
    return this._data[r] === void 0 && (this._data[r] = this.parseMetrics(A, t)), this._data[r];
  }, e;
}(), Oo = function(e, A) {
  this.context = e, this.options = A;
}, NB = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this;
    return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new PB(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
  }
  return MA(A, e), A.prototype.applyEffects = function(t) {
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
    }(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), Lo(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
  }, A.prototype.popEffect = function() {
    this._activeEffects.pop(), this.ctx.restore();
  }, A.prototype.renderStack = function(t) {
    return fA(this, void 0, void 0, function() {
      return QA(this, function(r) {
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
    return fA(this, void 0, void 0, function() {
      return QA(this, function(r) {
        switch (r.label) {
          case 0:
            return nA(t.container.flags, 16), t.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(t)] : [3, 3];
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
    r === 0 ? this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + n) : un(t.text).reduce(function(o, i) {
      return s.ctx.fillText(i, o, t.bounds.top + n), o + s.ctx.measureText(i).width;
    }, t.bounds.left);
  }, A.prototype.createFontStyle = function(t) {
    var r = t.fontVariant.filter(function(o) {
      return o === "normal" || o === "small-caps";
    }).join(""), n = YB(t.fontFamily).join(", "), s = $e(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
    return [[t.fontStyle, r, t.fontWeight, s, n].join(" "), n, s];
  }, A.prototype.renderTextNode = function(t, r) {
    return fA(this, void 0, void 0, function() {
      var n, s, o, i, c, B, a, l, d = this;
      return QA(this, function(g) {
        return n = this.createFontStyle(r), s = n[0], o = n[1], i = n[2], this.ctx.font = s, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", c = this.fontMetrics.getMetrics(o, i), B = c.baseline, a = c.middle, l = r.paintOrder, t.textBounds.forEach(function(u) {
          l.forEach(function(w) {
            switch (w) {
              case 0:
                d.ctx.fillStyle = iA(r.color), d.renderTextWithLetterSpacing(u, r.letterSpacing, B);
                var Q = r.textShadow;
                Q.length && u.text.trim().length && (Q.slice(0).reverse().forEach(function(p) {
                  d.ctx.shadowColor = iA(p.color), d.ctx.shadowOffsetX = p.offsetX.number * d.options.scale, d.ctx.shadowOffsetY = p.offsetY.number * d.options.scale, d.ctx.shadowBlur = p.blur.number, d.renderTextWithLetterSpacing(u, r.letterSpacing, B);
                }), d.ctx.shadowColor = "", d.ctx.shadowOffsetX = 0, d.ctx.shadowOffsetY = 0, d.ctx.shadowBlur = 0), r.textDecorationLine.length && (d.ctx.fillStyle = iA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(p) {
                  switch (p) {
                    case 1:
                      d.ctx.fillRect(u.bounds.left, Math.round(u.bounds.top + B), u.bounds.width, 1);
                      break;
                    case 2:
                      d.ctx.fillRect(u.bounds.left, Math.round(u.bounds.top), u.bounds.width, 1);
                      break;
                    case 3:
                      d.ctx.fillRect(u.bounds.left, Math.ceil(u.bounds.top + a), u.bounds.width, 1);
                  }
                }));
                break;
              case 1:
                r.webkitTextStrokeWidth && u.text.trim().length && (d.ctx.strokeStyle = iA(r.webkitTextStrokeColor), d.ctx.lineWidth = r.webkitTextStrokeWidth, d.ctx.lineJoin = window.chrome ? "miter" : "round", d.ctx.strokeText(u.text, u.bounds.left, u.bounds.top + B)), d.ctx.strokeStyle = "", d.ctx.lineWidth = 0, d.ctx.lineJoin = "miter";
            }
          });
        }), [2];
      });
    });
  }, A.prototype.renderReplacedElement = function(t, r, n) {
    if (n && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
      var s = Zt(t), o = Yt(r);
      this.path(o), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, s.left, s.top, s.width, s.height), this.ctx.restore();
    }
  }, A.prototype.renderNodeContent = function(t) {
    return fA(this, void 0, void 0, function() {
      var r, n, s, o, i, c, B, a, l, d, g, u, w, Q, p, f, E, U;
      return QA(this, function(C) {
        switch (C.label) {
          case 0:
            this.applyEffects(t.getEffects(4)), r = t.container, n = t.curves, s = r.styles, o = 0, i = r.textNodes, C.label = 1;
          case 1:
            return o < i.length ? (c = i[o], [4, this.renderTextNode(c, s)]) : [3, 4];
          case 2:
            C.sent(), C.label = 3;
          case 3:
            return o++, [3, 1];
          case 4:
            if (!(r instanceof ho))
              return [3, 8];
            C.label = 5;
          case 5:
            return C.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
          case 6:
            return p = C.sent(), this.renderReplacedElement(r, n, p), [3, 8];
          case 7:
            return C.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
          case 8:
            if (r instanceof Qo && this.renderReplacedElement(r, n, r.canvas), !(r instanceof po))
              return [3, 12];
            C.label = 9;
          case 9:
            return C.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
          case 10:
            return p = C.sent(), this.renderReplacedElement(r, n, p), [3, 12];
          case 11:
            return C.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
          case 12:
            return r instanceof Fo && r.tree ? [4, new A(this.context, { scale: this.options.scale, backgroundColor: r.backgroundColor, x: 0, y: 0, width: r.width, height: r.height }).render(r.tree)] : [3, 14];
          case 13:
            B = C.sent(), r.width && r.height && this.ctx.drawImage(B, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), C.label = 14;
          case 14:
            if (r instanceof gn && (a = Math.min(r.bounds.width, r.bounds.height), r.type === Nt ? r.checked && (this.ctx.save(), this.path([new m(r.bounds.left + 0.39363 * a, r.bounds.top + 0.79 * a), new m(r.bounds.left + 0.16 * a, r.bounds.top + 0.5549 * a), new m(r.bounds.left + 0.27347 * a, r.bounds.top + 0.44071 * a), new m(r.bounds.left + 0.39694 * a, r.bounds.top + 0.5649 * a), new m(r.bounds.left + 0.72983 * a, r.bounds.top + 0.23 * a), new m(r.bounds.left + 0.84 * a, r.bounds.top + 0.34085 * a), new m(r.bounds.left + 0.39363 * a, r.bounds.top + 0.79 * a)]), this.ctx.fillStyle = iA(Qs), this.ctx.fill(), this.ctx.restore()) : r.type === _t && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + a / 2, r.bounds.top + a / 2, a / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = iA(Qs), this.ctx.fill(), this.ctx.restore())), _B(r) && r.value.length) {
              switch (l = this.createFontStyle(s), E = l[0], d = l[1], g = this.fontMetrics.getMetrics(E, d).baseline, this.ctx.font = E, this.ctx.fillStyle = iA(s.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = XB(r.styles.textAlign), U = Zt(r), u = 0, r.styles.textAlign) {
                case 1:
                  u += U.width / 2;
                  break;
                case 2:
                  u += U.width;
              }
              w = U.add(u, 0, 0, -U.height / 2 + 1), this.ctx.save(), this.path([new m(U.left, U.top), new m(U.left + U.width, U.top), new m(U.left + U.width, U.top + U.height), new m(U.left, U.top + U.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new qe(r.value, w), s.letterSpacing, g), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
            }
            if (!nA(r.styles.display, 2048))
              return [3, 20];
            if (r.styles.listStyleImage === null)
              return [3, 19];
            if ((Q = r.styles.listStyleImage).type !== 0)
              return [3, 18];
            p = void 0, f = Q.url, C.label = 15;
          case 15:
            return C.trys.push([15, 17, , 18]), [4, this.context.cache.match(f)];
          case 16:
            return p = C.sent(), this.ctx.drawImage(p, r.bounds.left - (p.width + 10), r.bounds.top), [3, 18];
          case 17:
            return C.sent(), this.context.logger.error("Error loading list-style-image " + f), [3, 18];
          case 18:
            return [3, 20];
          case 19:
            t.listValue && r.styles.listStyleType !== -1 && (E = this.createFontStyle(s)[0], this.ctx.font = E, this.ctx.fillStyle = iA(s.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", U = new re(r.bounds.left, r.bounds.top + _(r.styles.paddingTop, r.bounds.width), r.bounds.width, ss(s.lineHeight, s.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new qe(t.listValue, U), s.letterSpacing, ss(s.lineHeight, s.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), C.label = 20;
          case 20:
            return [2];
        }
      });
    });
  }, A.prototype.renderStackContent = function(t) {
    return fA(this, void 0, void 0, function() {
      var r, n, s, o, i, c, B, a, l, d, g, u, w, Q, p;
      return QA(this, function(f) {
        switch (f.label) {
          case 0:
            return nA(t.element.container.flags, 16), [4, this.renderNodeBackgroundAndBorders(t.element)];
          case 1:
            f.sent(), r = 0, n = t.negativeZIndex, f.label = 2;
          case 2:
            return r < n.length ? (p = n[r], [4, this.renderStack(p)]) : [3, 5];
          case 3:
            f.sent(), f.label = 4;
          case 4:
            return r++, [3, 2];
          case 5:
            return [4, this.renderNodeContent(t.element)];
          case 6:
            f.sent(), s = 0, o = t.nonInlineLevel, f.label = 7;
          case 7:
            return s < o.length ? (p = o[s], [4, this.renderNode(p)]) : [3, 10];
          case 8:
            f.sent(), f.label = 9;
          case 9:
            return s++, [3, 7];
          case 10:
            i = 0, c = t.nonPositionedFloats, f.label = 11;
          case 11:
            return i < c.length ? (p = c[i], [4, this.renderStack(p)]) : [3, 14];
          case 12:
            f.sent(), f.label = 13;
          case 13:
            return i++, [3, 11];
          case 14:
            B = 0, a = t.nonPositionedInlineLevel, f.label = 15;
          case 15:
            return B < a.length ? (p = a[B], [4, this.renderStack(p)]) : [3, 18];
          case 16:
            f.sent(), f.label = 17;
          case 17:
            return B++, [3, 15];
          case 18:
            l = 0, d = t.inlineLevel, f.label = 19;
          case 19:
            return l < d.length ? (p = d[l], [4, this.renderNode(p)]) : [3, 22];
          case 20:
            f.sent(), f.label = 21;
          case 21:
            return l++, [3, 19];
          case 22:
            g = 0, u = t.zeroOrAutoZIndexOrTransformedOrOpacity, f.label = 23;
          case 23:
            return g < u.length ? (p = u[g], [4, this.renderStack(p)]) : [3, 26];
          case 24:
            f.sent(), f.label = 25;
          case 25:
            return g++, [3, 23];
          case 26:
            w = 0, Q = t.positiveZIndex, f.label = 27;
          case 27:
            return w < Q.length ? (p = Q[w], [4, this.renderStack(p)]) : [3, 30];
          case 28:
            f.sent(), f.label = 29;
          case 29:
            return w++, [3, 27];
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
    return fA(this, void 0, void 0, function() {
      var r, n, s, o, i, c;
      return QA(this, function(B) {
        switch (B.label) {
          case 0:
            r = t.styles.backgroundImage.length - 1, n = function(a) {
              var l, d, g, u, w, Q, p, f, E, U, C, H, k, b, N, eA, gA, X, tA, oA, yA, aA, pA, HA, FA, vA, RA, GA, kA, EA, qA;
              return QA(this, function($) {
                switch ($.label) {
                  case 0:
                    if (a.type !== 0)
                      return [3, 5];
                    l = void 0, d = a.url, $.label = 1;
                  case 1:
                    return $.trys.push([1, 3, , 4]), [4, s.context.cache.match(d)];
                  case 2:
                    return l = $.sent(), [3, 4];
                  case 3:
                    return $.sent(), s.context.logger.error("Error loading background-image " + d), [3, 4];
                  case 4:
                    return l && (g = Er(t, r, [l.width, l.height, l.width / l.height]), eA = g[0], aA = g[1], pA = g[2], tA = g[3], oA = g[4], b = s.ctx.createPattern(s.resizeImage(l, tA, oA), "repeat"), s.renderRepeat(eA, b, aA, pA)), [3, 6];
                  case 5:
                    a.type === 1 ? (u = Er(t, r, [null, null, null]), eA = u[0], aA = u[1], pA = u[2], tA = u[3], oA = u[4], w = Ea(a.angle, tA, oA), Q = w[0], p = w[1], f = w[2], E = w[3], U = w[4], (C = document.createElement("canvas")).width = tA, C.height = oA, H = C.getContext("2d"), k = H.createLinearGradient(p, E, f, U), rs(a.stops, Q).forEach(function(L) {
                      return k.addColorStop(L.stop, iA(L.color));
                    }), H.fillStyle = k, H.fillRect(0, 0, tA, oA), tA > 0 && oA > 0 && (b = s.ctx.createPattern(C, "repeat"), s.renderRepeat(eA, b, aA, pA))) : function(L) {
                      return L.type === 2;
                    }(a) && (N = Er(t, r, [null, null, null]), eA = N[0], gA = N[1], X = N[2], tA = N[3], oA = N[4], yA = a.position.length === 0 ? [ln] : a.position, aA = _(yA[0], tA), pA = _(yA[yA.length - 1], oA), HA = function(L, D, M, wA, hA) {
                      var W = 0, cA = 0;
                      switch (L.size) {
                        case 0:
                          L.shape === 0 ? W = cA = Math.min(Math.abs(D), Math.abs(D - wA), Math.abs(M), Math.abs(M - hA)) : L.shape === 1 && (W = Math.min(Math.abs(D), Math.abs(D - wA)), cA = Math.min(Math.abs(M), Math.abs(M - hA)));
                          break;
                        case 2:
                          if (L.shape === 0)
                            W = cA = Math.min(OA(D, M), OA(D, M - hA), OA(D - wA, M), OA(D - wA, M - hA));
                          else if (L.shape === 1) {
                            var VA = Math.min(Math.abs(M), Math.abs(M - hA)) / Math.min(Math.abs(D), Math.abs(D - wA)), T = ns(wA, hA, D, M, !0), V = T[0], I = T[1];
                            cA = VA * (W = OA(V - D, (I - M) / VA));
                          }
                          break;
                        case 1:
                          L.shape === 0 ? W = cA = Math.max(Math.abs(D), Math.abs(D - wA), Math.abs(M), Math.abs(M - hA)) : L.shape === 1 && (W = Math.max(Math.abs(D), Math.abs(D - wA)), cA = Math.max(Math.abs(M), Math.abs(M - hA)));
                          break;
                        case 3:
                          if (L.shape === 0)
                            W = cA = Math.max(OA(D, M), OA(D, M - hA), OA(D - wA, M), OA(D - wA, M - hA));
                          else if (L.shape === 1) {
                            VA = Math.max(Math.abs(M), Math.abs(M - hA)) / Math.max(Math.abs(D), Math.abs(D - wA));
                            var rA = ns(wA, hA, D, M, !1);
                            V = rA[0], I = rA[1], cA = VA * (W = OA(V - D, (I - M) / VA));
                          }
                      }
                      return Array.isArray(L.size) && (W = _(L.size[0], wA), cA = L.size.length === 2 ? _(L.size[1], hA) : W), [W, cA];
                    }(a, aA, pA, tA, oA), FA = HA[0], vA = HA[1], FA > 0 && vA > 0 && (RA = s.ctx.createRadialGradient(gA + aA, X + pA, 0, gA + aA, X + pA, FA), rs(a.stops, 2 * FA).forEach(function(L) {
                      return RA.addColorStop(L.stop, iA(L.color));
                    }), s.path(eA), s.ctx.fillStyle = RA, FA !== vA ? (GA = t.bounds.left + 0.5 * t.bounds.width, kA = t.bounds.top + 0.5 * t.bounds.height, qA = 1 / (EA = vA / FA), s.ctx.save(), s.ctx.translate(GA, kA), s.ctx.transform(1, 0, 0, EA, 0, 0), s.ctx.translate(-GA, -kA), s.ctx.fillRect(gA, qA * (X - kA) + kA, tA, oA * qA), s.ctx.restore()) : s.ctx.fill())), $.label = 6;
                  case 6:
                    return r--, [2];
                }
              });
            }, s = this, o = 0, i = t.styles.backgroundImage.slice(0).reverse(), B.label = 1;
          case 1:
            return o < i.length ? (c = i[o], [5, n(c)]) : [3, 4];
          case 2:
            B.sent(), B.label = 3;
          case 3:
            return o++, [3, 1];
          case 4:
            return [2];
        }
      });
    });
  }, A.prototype.renderSolidBorder = function(t, r, n) {
    return fA(this, void 0, void 0, function() {
      return QA(this, function(s) {
        return this.path(ks(n, r)), this.ctx.fillStyle = iA(t), this.ctx.fill(), [2];
      });
    });
  }, A.prototype.renderDoubleBorder = function(t, r, n, s) {
    return fA(this, void 0, void 0, function() {
      var o, i;
      return QA(this, function(c) {
        switch (c.label) {
          case 0:
            return r < 3 ? [4, this.renderSolidBorder(t, n, s)] : [3, 2];
          case 1:
            return c.sent(), [2];
          case 2:
            return o = function(B, a) {
              switch (a) {
                case 0:
                  return KA(B.topLeftBorderBox, B.topLeftBorderDoubleOuterBox, B.topRightBorderBox, B.topRightBorderDoubleOuterBox);
                case 1:
                  return KA(B.topRightBorderBox, B.topRightBorderDoubleOuterBox, B.bottomRightBorderBox, B.bottomRightBorderDoubleOuterBox);
                case 2:
                  return KA(B.bottomRightBorderBox, B.bottomRightBorderDoubleOuterBox, B.bottomLeftBorderBox, B.bottomLeftBorderDoubleOuterBox);
                default:
                  return KA(B.bottomLeftBorderBox, B.bottomLeftBorderDoubleOuterBox, B.topLeftBorderBox, B.topLeftBorderDoubleOuterBox);
              }
            }(s, n), this.path(o), this.ctx.fillStyle = iA(t), this.ctx.fill(), i = function(B, a) {
              switch (a) {
                case 0:
                  return KA(B.topLeftBorderDoubleInnerBox, B.topLeftPaddingBox, B.topRightBorderDoubleInnerBox, B.topRightPaddingBox);
                case 1:
                  return KA(B.topRightBorderDoubleInnerBox, B.topRightPaddingBox, B.bottomRightBorderDoubleInnerBox, B.bottomRightPaddingBox);
                case 2:
                  return KA(B.bottomRightBorderDoubleInnerBox, B.bottomRightPaddingBox, B.bottomLeftBorderDoubleInnerBox, B.bottomLeftPaddingBox);
                default:
                  return KA(B.bottomLeftBorderDoubleInnerBox, B.bottomLeftPaddingBox, B.topLeftBorderDoubleInnerBox, B.topLeftPaddingBox);
              }
            }(s, n), this.path(i), this.ctx.fill(), [2];
        }
      });
    });
  }, A.prototype.renderNodeBackgroundAndBorders = function(t) {
    return fA(this, void 0, void 0, function() {
      var r, n, s, o, i, c, B, a, l = this;
      return QA(this, function(d) {
        switch (d.label) {
          case 0:
            return this.applyEffects(t.getEffects(2)), r = t.container.styles, n = !Be(r.backgroundColor) || r.backgroundImage.length, s = [{ style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth }, { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth }, { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth }, { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }], o = JB(He(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(o), this.ctx.clip(), Be(r.backgroundColor) || (this.ctx.fillStyle = iA(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
          case 1:
            d.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(g) {
              l.ctx.save();
              var u, w, Q, p, f, E = Wt(t.curves), U = g.inset ? 0 : 1e4, C = (u = E, w = -U + (g.inset ? 1 : -1) * g.spread.number, Q = (g.inset ? 1 : -1) * g.spread.number, p = g.spread.number * (g.inset ? -2 : 2), f = g.spread.number * (g.inset ? -2 : 2), u.map(function(H, k) {
                switch (k) {
                  case 0:
                    return H.add(w, Q);
                  case 1:
                    return H.add(w + p, Q);
                  case 2:
                    return H.add(w + p, Q + f);
                  case 3:
                    return H.add(w, Q + f);
                }
                return H;
              }));
              g.inset ? (l.path(E), l.ctx.clip(), l.mask(C)) : (l.mask(E), l.ctx.clip(), l.path(C)), l.ctx.shadowOffsetX = g.offsetX.number + U, l.ctx.shadowOffsetY = g.offsetY.number, l.ctx.shadowColor = iA(g.color), l.ctx.shadowBlur = g.blur.number, l.ctx.fillStyle = g.inset ? iA(g.color) : "rgba(0,0,0,1)", l.ctx.fill(), l.ctx.restore();
            }), d.label = 2;
          case 2:
            i = 0, c = 0, B = s, d.label = 3;
          case 3:
            return c < B.length ? (a = B[c]).style !== 0 && !Be(a.color) && a.width > 0 ? a.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(a.color, a.width, i, t.curves, 2)] : [3, 11] : [3, 13];
          case 4:
            return d.sent(), [3, 11];
          case 5:
            return a.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(a.color, a.width, i, t.curves, 3)];
          case 6:
            return d.sent(), [3, 11];
          case 7:
            return a.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(a.color, a.width, i, t.curves)];
          case 8:
            return d.sent(), [3, 11];
          case 9:
            return [4, this.renderSolidBorder(a.color, i, t.curves)];
          case 10:
            d.sent(), d.label = 11;
          case 11:
            i++, d.label = 12;
          case 12:
            return c++, [3, 3];
          case 13:
            return [2];
        }
      });
    });
  }, A.prototype.renderDashedDottedBorder = function(t, r, n, s, o) {
    return fA(this, void 0, void 0, function() {
      var i, c, B, a, l, d, g, u, w, Q, p, f, E, U, C, H;
      return QA(this, function(k) {
        return this.ctx.save(), i = function(b, N) {
          switch (N) {
            case 0:
              return yt(b.topLeftBorderStroke, b.topRightBorderStroke);
            case 1:
              return yt(b.topRightBorderStroke, b.bottomRightBorderStroke);
            case 2:
              return yt(b.bottomRightBorderStroke, b.bottomLeftBorderStroke);
            default:
              return yt(b.bottomLeftBorderStroke, b.topLeftBorderStroke);
          }
        }(s, n), c = ks(s, n), o === 2 && (this.path(c), this.ctx.clip()), LA(c[0]) ? (B = c[0].start.x, a = c[0].start.y) : (B = c[0].x, a = c[0].y), LA(c[1]) ? (l = c[1].end.x, d = c[1].end.y) : (l = c[1].x, d = c[1].y), g = Math.abs(n === 0 || n === 2 ? B - l : a - d), this.ctx.beginPath(), o === 3 ? this.formatPath(i) : this.formatPath(c.slice(0, 2)), u = r < 3 ? 3 * r : 2 * r, w = r < 3 ? 2 * r : r, o === 3 && (u = r, w = r), Q = !0, g <= 2 * u ? Q = !1 : g <= 2 * u + w ? (u *= p = g / (2 * u + w), w *= p) : (f = Math.floor((g + w) / (u + w)), E = (g - f * u) / (f - 1), w = (U = (g - (f + 1) * u) / f) <= 0 || Math.abs(w - E) < Math.abs(w - U) ? E : U), Q && (o === 3 ? this.ctx.setLineDash([0, u + w]) : this.ctx.setLineDash([u, w])), o === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = 2 * r + 1.1, this.ctx.strokeStyle = iA(t), this.ctx.stroke(), this.ctx.setLineDash([]), o === 2 && (LA(c[0]) && (C = c[3], H = c[0], this.ctx.beginPath(), this.formatPath([new m(C.end.x, C.end.y), new m(H.start.x, H.start.y)]), this.ctx.stroke()), LA(c[1]) && (C = c[1], H = c[2], this.ctx.beginPath(), this.formatPath([new m(C.end.x, C.end.y), new m(H.start.x, H.start.y)]), this.ctx.stroke())), this.ctx.restore(), [2];
      });
    });
  }, A.prototype.render = function(t) {
    return fA(this, void 0, void 0, function() {
      var r;
      return QA(this, function(n) {
        switch (n.label) {
          case 0:
            return this.options.backgroundColor && (this.ctx.fillStyle = iA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), s = new Do(t, null), o = new So(s), Zr(s, o, o, i = []), To(s.container, i), r = o, [4, this.renderStack(r)];
          case 1:
            return n.sent(), this.applyEffects([]), [2, this.canvas];
        }
        var s, o, i;
      });
    });
  }, A;
}(Oo), _B = function(e) {
  return e instanceof Uo || e instanceof fo || e instanceof gn && e.type !== _t && e.type !== Nt;
}, JB = function(e, A) {
  switch (e) {
    case 0:
      return Wt(A);
    case 2:
      return function(t) {
        return [t.topLeftContentBox, t.topRightContentBox, t.bottomRightContentBox, t.bottomLeftContentBox];
      }(A);
    default:
      return Yt(A);
  }
}, XB = function(e) {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    default:
      return "left";
  }
}, WB = ["-apple-system", "system-ui"], YB = function(e) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function(A) {
    return WB.indexOf(A) === -1;
  }) : e;
}, ZB = function(e) {
  function A(t, r) {
    var n = e.call(this, t, r) || this;
    return n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = r, n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px", n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), n;
  }
  return MA(A, e), A.prototype.render = function(t) {
    return fA(this, void 0, void 0, function() {
      var r, n;
      return QA(this, function(s) {
        switch (s.label) {
          case 0:
            return r = Nr(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, jB(r)];
          case 1:
            return n = s.sent(), this.options.backgroundColor && (this.ctx.fillStyle = iA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
        }
      });
    });
  }, A;
}(Oo), jB = function(e) {
  return new Promise(function(A, t) {
    var r = new Image();
    r.onload = function() {
      A(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, qB = function() {
  function e(A) {
    var t = A.id, r = A.enabled;
    this.id = t, this.enabled = r, this.start = Date.now();
  }
  return e.prototype.debug = function() {
    for (var A = [], t = 0; t < arguments.length; t++)
      A[t] = arguments[t];
    this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, it([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
  }, e.prototype.getTime = function() {
    return Date.now() - this.start;
  }, e.prototype.info = function() {
    for (var A = [], t = 0; t < arguments.length; t++)
      A[t] = arguments[t];
    this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, it([this.id, this.getTime() + "ms"], A));
  }, e.prototype.warn = function() {
    for (var A = [], t = 0; t < arguments.length; t++)
      A[t] = arguments[t];
    this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, it([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
  }, e.prototype.error = function() {
    for (var A = [], t = 0; t < arguments.length; t++)
      A[t] = arguments[t];
    this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, it([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
  }, e.instances = {}, e;
}(), zB = function() {
  function e(A, t) {
    var r;
    this.windowBounds = t, this.instanceName = "#" + e.instanceCount++, this.logger = new qB({ id: this.instanceName, enabled: A.logging }), this.cache = (r = A.cache) !== null && r !== void 0 ? r : new IB(this, A);
  }
  return e.instanceCount = 1, e;
}();
typeof window < "u" && Ko.setContext(window);
var $B = function(e, A) {
  return fA(void 0, void 0, void 0, function() {
    var t, r, n, s, o, i, c, B, a, l, d, g, u, w, Q, p, f, E, U, C, H, k, b, N, eA, gA, X, tA, oA, yA, aA, pA, HA, FA, vA, RA, GA, kA;
    return QA(this, function(EA) {
      switch (EA.label) {
        case 0:
          if (!e || typeof e != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (!(t = e.ownerDocument))
            throw new Error("Element is not attached to a Document");
          if (!(r = t.defaultView))
            throw new Error("Document is not attached to a Window");
          return n = { allowTaint: (k = A.allowTaint) !== null && k !== void 0 && k, imageTimeout: (b = A.imageTimeout) !== null && b !== void 0 ? b : 15e3, proxy: A.proxy, useCORS: (N = A.useCORS) !== null && N !== void 0 && N }, s = xr({ logging: (eA = A.logging) === null || eA === void 0 || eA, cache: A.cache }, n), o = { windowWidth: (gA = A.windowWidth) !== null && gA !== void 0 ? gA : r.innerWidth, windowHeight: (X = A.windowHeight) !== null && X !== void 0 ? X : r.innerHeight, scrollX: (tA = A.scrollX) !== null && tA !== void 0 ? tA : r.pageXOffset, scrollY: (oA = A.scrollY) !== null && oA !== void 0 ? oA : r.pageYOffset }, i = new re(o.scrollX, o.scrollY, o.windowWidth, o.windowHeight), c = new zB(s, i), B = (yA = A.foreignObjectRendering) !== null && yA !== void 0 && yA, a = { allowTaint: (aA = A.allowTaint) !== null && aA !== void 0 && aA, onclone: A.onclone, ignoreElements: A.ignoreElements, inlineImages: B, copyStyles: B }, c.logger.debug("Starting document clone with size " + i.width + "x" + i.height + " scrolled to " + -i.left + "," + -i.top), l = new bs(c, e, a), (d = l.clonedReferenceElement) ? [4, l.toIFrame(t, i)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return g = EA.sent(), u = wn(d) || d.tagName === "HTML" ? function(qA) {
            var $ = qA.body, L = qA.documentElement;
            if (!$ || !L)
              throw new Error("Unable to get document size");
            var D = Math.max(Math.max($.scrollWidth, L.scrollWidth), Math.max($.offsetWidth, L.offsetWidth), Math.max($.clientWidth, L.clientWidth)), M = Math.max(Math.max($.scrollHeight, L.scrollHeight), Math.max($.offsetHeight, L.offsetHeight), Math.max($.clientHeight, L.clientHeight));
            return new re(0, 0, D, M);
          }(d.ownerDocument) : Ar(c, d), w = u.width, Q = u.height, p = u.left, f = u.top, E = Al(c, d, A.backgroundColor), U = { canvas: A.canvas, backgroundColor: E, scale: (HA = (pA = A.scale) !== null && pA !== void 0 ? pA : r.devicePixelRatio) !== null && HA !== void 0 ? HA : 1, x: ((FA = A.x) !== null && FA !== void 0 ? FA : 0) + p, y: ((vA = A.y) !== null && vA !== void 0 ? vA : 0) + f, width: (RA = A.width) !== null && RA !== void 0 ? RA : Math.ceil(w), height: (GA = A.height) !== null && GA !== void 0 ? GA : Math.ceil(Q) }, B ? (c.logger.debug("Document cloned, using foreign object rendering"), [4, new ZB(c, U).render(d)]) : [3, 3];
        case 2:
          return C = EA.sent(), [3, 5];
        case 3:
          return c.logger.debug("Document cloned, element located at " + p + "," + f + " with size " + w + "x" + Q + " using computed rendering"), c.logger.debug("Starting DOM parsing"), H = yo(c, d), E === H.styles.backgroundColor && (H.styles.backgroundColor = te.TRANSPARENT), c.logger.debug("Starting renderer for element at " + U.x + "," + U.y + " with size " + U.width + "x" + U.height), [4, new NB(c, U).render(H)];
        case 4:
          C = EA.sent(), EA.label = 5;
        case 5:
          return ((kA = A.removeContainer) === null || kA === void 0 || kA) && (bs.destroy(g) || c.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), c.logger.debug("Finished rendering"), [2, C];
      }
    });
  });
}, Al = function(e, A, t) {
  var r = A.ownerDocument, n = r.documentElement ? Ye(e, getComputedStyle(r.documentElement).backgroundColor) : te.TRANSPARENT, s = r.body ? Ye(e, getComputedStyle(r.body).backgroundColor) : te.TRANSPARENT, o = typeof t == "string" ? Ye(e, t) : t === null ? te.TRANSPARENT : 4294967295;
  return A === r.documentElement ? Be(n) ? Be(s) ? o : s : n : o;
};
class hn {
  async captureScreenshot() {
    const A = window.innerWidth, t = window.innerHeight, r = window.scrollX, n = window.scrollY;
    var s, o;
    return (await (s = document.body, o = { x: r, y: n, width: A, height: t, scrollX: 0, scrollY: 0, allowTaint: !0, useCORS: !0 }, o === void 0 && (o = {}), $B(s, o))).toDataURL();
  }
}
const et = (e) => {
  const A = document.createElement("img");
  A.src = e;
  const t = document.createElement("button");
  return t.classList.add("shake-sdk-circle-button"), t.appendChild(A), t;
}, S = () => {
  const e = document.createElement("div");
  return e.classList.add("shake-sdk-container"), e;
}, Qn = () => {
  const e = document.createElement("div");
  return e.classList.add("shake-sdk-card"), e;
}, Mo = "data:image/svg+xml,%3csvg%20width='23'%20height='23'%20viewBox='0%200%2023%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15050_29400)'%3e%3cpath%20d='M11.3994%207.80005V15'%20stroke='%238E8E93'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.9998%2011.4001H7.7998'%20stroke='%238E8E93'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15050_29400'%3e%3crect%20width='21.6'%20height='21.6'%20fill='white'%20transform='translate(0.599609%200.600098)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Ks = ({ img: e, text: A, onClick: t }) => {
  const r = document.createElement("button");
  return r.classList.add("shake-sdk-context-menu-item"), r.onclick = t, r.appendChild(ZA(e)), r.appendChild(((n) => {
    const s = document.createElement("p");
    return s.classList.add("shake-sdk-text-p2"), s.innerText = n, s;
  })(A)), r;
}, el = (e, A) => {
  let t = !1, r = 0, n = 0, s = !1;
  e.style.left = window.innerWidth - e.offsetWidth - 100 + "px", e.style.top = window.innerHeight - e.offsetHeight - 100 + "px", e.addEventListener("mousedown", function(o) {
    t = !0, s = !1, r = o.clientX - e.getBoundingClientRect().left, n = o.clientY - e.getBoundingClientRect().top;
  }), document.addEventListener("mousemove", function(o) {
    if (t) {
      const i = o.clientX - r, c = o.clientY - n, B = window.innerWidth - e.offsetWidth, a = window.innerHeight - e.offsetHeight;
      e.style.left = Math.min(Math.max(0, i), B) + "px", e.style.top = Math.min(Math.max(0, c), a) + "px", (Math.abs(o.movementX) > 2 || Math.abs(o.movementY) > 2) && (s = !0);
    }
  }), e.addEventListener("mouseup", function() {
    t && (t = !1, s || A());
  });
};
function jr(e) {
  const A = new Date(e);
  return `${A.getUTCFullYear()}-${(A.getUTCMonth() + 1).toString().padStart(2, "0")}-${A.getUTCDate().toString().padStart(2, "0")}T${A.getUTCHours().toString().padStart(2, "0")}:${A.getUTCMinutes().toString().padStart(2, "0")}:${A.getUTCSeconds().toString().padStart(2, "0")}.${A.getUTCMilliseconds().toString().padStart(3, "0")}Z`;
}
const Ro = (e) => e === uA.IMAGE ? `screenshot_${jr((/* @__PURE__ */ new Date()).toString())}.jpg` : e === uA.VIDEO ? `screen_recording_${jr((/* @__PURE__ */ new Date()).toString())}.mp4` : "";
function Go(e) {
  Vo(e, uA.IMAGE);
}
function Vo(e, A) {
  const t = j.localStorage.getShakeState(), r = { data: e, type: A, name: Ro(A) };
  t == null || t.attachments.push(r), j.localStorage.setShakeState(t);
}
function Po() {
  Z("Returning to Shake.");
  const e = jo(j.localStorage.getShakeState());
  document.body.appendChild(e), j.localStorage.setShakeOpened(!0);
}
const tt = (e = !0) => {
  Z("Shake closed");
  const A = j.localStorage;
  e && (Hl(), A.setShakeState(null));
  const t = document.getElementById("shake-sdk-root");
  t == null || t.remove(), A.setShakeOpened(!1);
}, No = () => {
  Z("Grab screenshot clicked."), tt(!1);
  const e = ((A, t) => {
    const r = document.createElement("img");
    r.src = A, r.setAttribute("draggable", "false");
    const n = document.createElement("button");
    n.classList.add("shake-sdk-bubble"), n.appendChild(r);
    const s = document.createElement("div"), o = s.attachShadow({ mode: "open" });
    return o.adoptedStyleSheets = de, o.appendChild(n), el(n, t), s;
  })("data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20width='16px'%20height='16px'%20viewBox='0%200%2032%2032'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform='translate(-35.852326,-90.237974)'%3e%3cpath%20style='fill:%23ff0000'%20d='m%2067.852325,106.23797%20a%2016,16%200%200%201%20-16,16%2016,16%200%200%201%20-16,-16%2016,16%200%200%201%2016,-15.999997%2016,16%200%200%201%2016,15.999997%20z'/%3e%3c/g%3e%3c/svg%3e", () => {
    e.remove(), (async () => (Z("Capture screenshot click"), Go(await new hn().captureScreenshot()), Po()))();
  });
  document.body.appendChild(e);
}, zt = class zt {
  constructor() {
    F(this, "onStartListener", null);
    F(this, "onStopListener", null);
    F(this, "mediaRecorder", null);
    F(this, "recordedChunks", []);
    F(this, "timeout", null);
    F(this, "isRecording", !1);
    F(this, "start", async () => {
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
    F(this, "stop", () => {
      var A;
      (A = this.mediaRecorder) == null || A.stop();
    });
    F(this, "startTimer", () => {
      this.stopTimer(), this.timeout = window.setTimeout(() => {
        var A;
        (A = this.mediaRecorder) == null || A.stop();
      }, zt.SCREEN_RECORDING_TIME);
    });
    F(this, "stopTimer", () => {
      this.timeout && (window.clearTimeout(this.timeout), this.timeout = null);
    });
  }
};
F(zt, "SCREEN_RECORDING_TIME", 3e4);
let qr = zt;
const tl = async (e) => {
  Z("Stop recording click."), function(A) {
    Vo(A, uA.VIDEO);
  }(e), Po();
}, _o = () => {
  Z("Record recording click."), tt(!1);
  const e = new qr();
  e.onStopListener = tl, e.start();
}, rl = { shake_sdk_dialog_add_attachment: "Add attachment", shake_sdk_dialog_add_attachment_grab_screenshot: "Grab screenshot", shake_sdk_dialog_add_attachment_record_screen: "Record screen", shake_sdk_dialog_add_attachment_browse_locations: "Browse other locations", shake_sdk_dialog_add_attachment_type_video: "Video", shake_sdk_dialog_add_attachment_type_image: "Screenshot", shake_sdk_dialog_ticket_sent_title: "Done.", shake_sdk_dialog_ticket_sent_message: "Your ticket was sent.", shake_sdk_error_message: "Something went wrong.", shake_sdk_main_button_title: "Send feedback", shake_sdk_ticket_form_title: "New ticket", shake_sdk_new_ticket_feedback_type_title: "Ticket type", shake_sdk_new_ticket_feedback_type_bug: "Bug report", shake_sdk_new_ticket_feedback_type_question: "Question", shake_sdk_new_ticket_feedback_type_suggestion: "Improvement suggestion", shake_sdk_ticket_form_description_placeholder: "Description", shake_sdk_ticket_form_submit_button_text: "Submit", shake_sdk_ticket_form_submit_button_text_loading: "Submiting..." }, sA = () => {
  if (Mt.EN === Mt.EN)
    return rl;
}, nl = (e) => ((A, t) => {
  let r = !1;
  const n = S();
  return n.classList.add("shake-sdk-context-menu"), t.forEach((s) => n.appendChild(s)), document.addEventListener("click", function(s) {
    r && s.target !== A && (n.style.display = "none", r = !1);
  }), A.onclick = (s) => {
    s.stopPropagation(), r ? (n.style.display = "none", r = !1) : (n.style.display = "block", r = !0), n.style.left = A.getBoundingClientRect().left + "px", n.style.top = A.getBoundingClientRect().top + "px";
  }, n;
})(e, [Ks({ img: "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15055_29642)'%3e%3cpath%20d='M12.3994%208.47314C13.6969%209.77065%2013.6969%2011.8743%2012.3994%2013.1719C11.1019%2014.4694%208.99819%2014.4694%207.70068%2013.1719C6.40316%2011.8743%206.40316%209.77065%207.70068%208.47314C8.99819%207.17562%2011.1019%207.17562%2012.3994%208.47314Z'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.5%207.49992V14.9999C17.5%2015.9208%2016.7542%2016.6666%2015.8333%2016.6666H4.16667C3.24583%2016.6666%202.5%2015.9208%202.5%2014.9999V7.49992C2.5%206.57908%203.24583%205.83325%204.16667%205.83325H5.83333L7.05167%203.74659C7.20083%203.49075%207.475%203.33325%207.77167%203.33325H12.1917C12.4842%203.33325%2012.755%203.48659%2012.9058%203.73659L14.1667%205.83325H15.8333C16.7542%205.83325%2017.5%206.57908%2017.5%207.49992Z'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15055_29642'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", text: sA().shake_sdk_dialog_add_attachment_grab_screenshot, onClick: No }), Ks({ img: "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15055_29718)'%3e%3cpath%20d='M10.9375%2014.7916H4.375C3.33917%2014.7916%202.5%2013.9524%202.5%2012.9166V7.08325C2.5%206.04742%203.33917%205.20825%204.375%205.20825H10.9375C11.9733%205.20825%2012.8125%206.04742%2012.8125%207.08325V12.9166C12.8125%2013.9524%2011.9733%2014.7916%2010.9375%2014.7916Z'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.8125%2010.9141L15.975%2013.4591C16.5883%2013.9533%2017.5%2013.5166%2017.5%2012.7291V7.27077C17.5%206.48327%2016.5883%206.04661%2015.975%206.54077L12.8125%209.08577'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15055_29718'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", text: sA().shake_sdk_dialog_add_attachment_record_screen, onClick: _o })]), ar = ({ src: e, controls: A, autoplay: t }) => {
  const r = document.createElement("video");
  return r.classList.add("shake-sdk-video"), r.src = e, r.controls = A ?? !1, r.preload = "metadata", r.autoplay = t ?? !1, r.loop = !0, r;
}, Jo = "data:image/svg+xml,%3csvg%20width='31'%20height='32'%20viewBox='0%200%2031%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.7285%2013.4543L17.8197%2018.5455'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.8197%2013.4545L12.7285%2018.5457'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", sl = (e) => {
  const A = S();
  return A.classList.add("shake-sdk-attachment-title-box"), A.appendChild(((t) => {
    const r = document.createElement("p");
    return r.classList.add("shake-sdk-text-p3"), r.innerText = t, r;
  })(e)), A;
}, ol = ({ shakeState: e, onAttachmentPreviewChanged: A }) => {
  const t = j.attachmentsManager, r = /* @__PURE__ */ new Map();
  let n = 0;
  const s = (B) => {
    n = Array.from(r.keys()).indexOf(B), i();
  }, o = (B) => {
    t.removeAttachment(e, B);
  };
  t.removeObservers.push((B) => {
    const a = r.get(B);
    a == null || a.remove(), r.delete(B), r.size - 1 < n && (n = r.size - 1), i();
  });
  const i = () => {
    if (n < 0)
      return void A(null);
    const B = Array.from(r.keys())[n], a = Array.from(r.values())[n], l = "shake-sdk-attachment-item-selected", d = Array.from(r.values());
    if (d) {
      for (const g of d)
        g.classList.remove(l);
      a == null || a.classList.add(l);
    }
    A(B);
  }, c = S();
  return c.classList.add("shake-sdk-attachments-items"), e.attachments.forEach((B) => {
    const a = ((l, d, g) => {
      const u = et(Jo);
      let w;
      u.classList.add("shake-sdk-attachment-remove"), u.onclick = (C) => {
        C.stopPropagation(), g(l);
      }, w = l.type == uA.IMAGE ? ZA(l.data) : ar({ src: l.data + "#t=3", autoplay: !0 }), w.classList.add("shake-sdk-attachment-item-thumbnail");
      const Q = Qn();
      Q.classList.add("shake-sdk-attachment-item-card"), Q.appendChild(w), Q.appendChild(u);
      const p = l.type == uA.IMAGE ? sA().shake_sdk_dialog_add_attachment_type_image : sA().shake_sdk_dialog_add_attachment_type_video, f = sl(p), E = S();
      E.classList.add("shake-sdk-attachment-item-title"), E.appendChild(f);
      const U = S();
      return U.classList.add("shake-sdk-attachment-item"), U.onclick = () => d(l), U.appendChild(Q), U.appendChild(E), U;
    })(B, s, o);
    r.set(B, a), c.appendChild(a);
  }), c.appendChild((() => {
    const B = et(Mo);
    B.classList.add("shake-sdk-attachment-add-button");
    const a = S();
    return a.classList.add("shake-sdk-attachments-add-item"), a.appendChild(B), a.appendChild(nl(B)), a;
  })()), i(), c;
}, il = (e) => {
  const A = S();
  return A.classList.add("shake-sdk-attachments-preview"), e && (e.type == uA.IMAGE ? A.appendChild(((t) => {
    const r = ZA(t), n = S();
    return n.classList.add("shake-sdk-image-preview"), n.appendChild(r), n;
  })(e.data)) : A.appendChild(((t) => {
    const r = ar({ src: t, controls: !0, autoplay: !1 }), n = S();
    return n.classList.add("shake-sdk-video-preview"), n.appendChild(r), n;
  })(e.data))), A;
}, Xo = (e, A) => {
  const t = js(e), r = document.createElement("div");
  r.classList.add("shake-sdk-sheet"), r.appendChild(t), A.forEach((i) => {
    r.appendChild(al(i, () => {
      i.onClick(), s.remove();
    }));
  });
  const n = document.createElement("div");
  n.classList.add("shake-sdk-sheet-background"), n.appendChild(r), n.onclick = () => s.remove();
  const s = document.createElement("div"), o = s.attachShadow({ mode: "open" });
  return o.appendChild(n), o.adoptedStyleSheets = de, s;
}, al = (e, A) => {
  const t = ZA(e.icon), r = ((s) => {
    const o = document.createElement("p");
    return o.classList.add("shake-sdk-text-p1"), o.innerText = s, o;
  })(e.text), n = document.createElement("button");
  return n.classList.add("shake-sdk-sheet-item"), n.onclick = A, n.appendChild(t), n.appendChild(r), n;
}, Wo = (e) => {
  document.body.appendChild(e);
}, cl = ({ label: e, items: A, onSelectionChange: t, selectedValue: r }) => {
  const n = S(), s = S();
  s.classList.add("shake-sdk-select-dropdown");
  const o = ZA("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='caret-down-icon'%20clip-path='url(%23clip0_15248_22126)'%3e%3cpath%20id='Vector'%20d='M8%2010L12%2014L16%2010'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15248_22126'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  o.classList.add("shake-sdk-dropdown-icon"), s.appendChild(o);
  const i = document.createElement("label");
  i.textContent = e, i.classList.add("shake-sdk-select-dropdown-label");
  const c = S();
  c.classList.add("shake-sdk-select-dropdown-chosen"), s.appendChild(i);
  const B = document.createElement("ul");
  B.classList.add("shake-sdk-select-options"), A.forEach((l) => {
    const d = document.createElement("li");
    d.classList.add("shake-sdk-select-option"), d.dataset.value = l.value, d.textContent = l.label, d.addEventListener("click", function() {
      c.textContent = d.textContent, B.style.display = "none", d.dataset.value && t(d.dataset.value);
    }), B.appendChild(d);
  });
  const a = Array.from(B.children).find((l) => l.dataset.value === r);
  return a && (c.textContent = a.textContent), s.addEventListener("click", function(l) {
    l.stopPropagation(), window.innerWidth > 1024 ? (B.style.display = B.style.display === "block" ? "none" : "block", B.style.display === "block" ? s.classList.add("active") : s.classList.remove("active")) : Wo(((d, g, u) => {
      const w = [];
      return g.forEach((Q) => {
        w.push({ text: Q.label, icon: Q.icon, onClick: () => {
          u(Q);
        } });
      }), Xo(d, w);
    })(e, A, (d) => {
      c.textContent = d.label, t(r);
    }));
  }), s.addEventListener("focus", function() {
    s.classList.add("active");
  }), s.addEventListener("blur", function() {
    s.classList.remove("active");
  }), document.addEventListener("click", (l) => {
    const d = l.target;
    s.contains(d) || B.contains(d) || (B.style.display = "none", s.classList.remove("active"));
  }), s.append(c), n.appendChild(s), n.appendChild(B), n;
}, zr = "data:image/svg+xml,%3csvg%20width='50'%20height='51'%20viewBox='0%200%2050%2051'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.834%2021.5598L29.1673%2029.8931'%20stroke='%231C1C1E'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M29.1673%2021.56L20.834%2029.8933'%20stroke='%231C1C1E'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", jt = ({ image: e, onClick: A }) => {
  const t = ZA(e), r = document.createElement("button");
  return r.classList.add("shake-sdk-toolbar-button"), r.onclick = A, r.appendChild(t), r;
}, Yo = "data:image/svg+xml,%3csvg%20width='50'%20height='51'%20viewBox='0%200%2050%2051'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.834%2021.5598L29.1673%2029.8931'%20stroke='%23FFFFFF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M29.1673%2021.56L20.834%2029.8933'%20stroke='%23FFFFFF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Bl = (e) => {
  Z(`Opening image: ${e.name}`), document.body.appendChild(((A) => {
    const t = jt({ image: Yo, onClick: () => {
      i.remove();
    } }), r = S();
    r.classList.add("shake-sdk-image-preview-toolbar-fs"), r.appendChild(t);
    const n = ZA(A);
    n.classList.add("shake-sdk-image-preview-fs");
    const s = S();
    s.classList.add("shake-sdk-image-preview-content-fs"), s.appendChild(n);
    const o = S();
    o.classList.add("shake-sdk-image-preview-root-fs"), o.appendChild(r), o.appendChild(s);
    const i = document.createElement("div"), c = i.attachShadow({ mode: "open" });
    return c.adoptedStyleSheets = de, c.appendChild(o), i;
  })(e.data));
}, ll = (e) => {
  Z("Opening video: " + e.name), document.body.appendChild(((A) => {
    const t = jt({ image: Yo, onClick: () => {
      o.remove();
    } }), r = S();
    r.classList.add("shake-sdk-video-preview-toolbar-fs"), r.appendChild(t);
    const n = ar({ src: A, controls: !0, autoplay: !0 });
    n.classList.add("shake-sdk-video-preview-fs");
    const s = S();
    s.classList.add("shake-sdk-video-preview-root-fs"), s.appendChild(r), s.appendChild(n);
    const o = document.createElement("div"), i = o.attachShadow({ mode: "open" });
    return i.adoptedStyleSheets = de, i.appendChild(s), o;
  })(e.data));
}, dl = (e) => {
  const A = j.attachmentsManager, t = /* @__PURE__ */ new Map(), r = (i) => {
    i.type == uA.IMAGE ? Bl(i) : i.type == uA.VIDEO && ll(i);
  }, n = (i) => {
    A.removeAttachment(e, i);
  };
  A.removeObservers.push((i) => {
    const c = t.get(i);
    c == null || c.remove(), t.delete(i);
  });
  const s = S();
  s.classList.add("shake-sdk-attachments-items-small"), e.attachments.forEach((i) => {
    const c = ((B, a, l) => {
      const d = et(Jo);
      d.classList.add("shake-sdk-attachment-item-remove-small"), d.onclick = (w) => {
        w.stopPropagation(), l(B);
      };
      const g = B.type == uA.IMAGE ? ZA(B.data) : ar({ src: B.data + "#t=3", autoplay: !0 });
      g.classList.add("shake-sdk-attachment-item-thumbnail-small"), g.onclick = () => a(B);
      const u = S();
      return u.classList.add("shake-sdk-attachment-item-small"), u.appendChild(g), u.appendChild(d), u;
    })(i, r, n);
    t.set(i, c), s.appendChild(c);
  });
  const o = ((i) => {
    const c = et(Mo);
    c.classList.add("shake-sdk-attachment-add-button-small"), c.onclick = i;
    const B = S();
    return B.classList.add("shake-sdk-attachments-add-item-small"), B.appendChild(c), B;
  })(() => {
    Wo((() => {
      const i = [{ text: sA().shake_sdk_dialog_add_attachment_grab_screenshot, icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20fill='%2300000000'%20d='M13.5,6.75h-2.25c-2.485,0%20-4.5,2.015%20-4.5,4.5v2.25M40.5,47.25h2.25c2.485,0%204.5,-2.015%204.5,-4.5V40.5M6.75,40.5v2.25c0,2.485%202.015,4.5%204.5,4.5h2.25M47.25,13.5v-2.25c0,-2.485%20-2.015,-4.5%20-4.5,-4.5H40.5'%20stroke-width='3.38'%20stroke='%234CD266'/%3e%3c/svg%3e", onClick: No }, { text: sA().shake_sdk_dialog_add_attachment_record_screen, icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20fill='%2300000000'%20d='M37.487,32.702L32.57,29.67v-5.342l4.918,-3.03c0.382,-0.236%200.861,-0.247%201.253,-0.028%200.392,0.218%200.635,0.632%200.635,1.08v9.297c0,0.45%20-0.243,0.863%20-0.635,1.081%20-0.392,0.219%20-0.871,0.208%20-1.253,-0.027z'%20stroke-width='3.375'%20stroke='%23FF9C0A'/%3e%3cpath%20fill='%2300000000'%20d='M16.275,18.956L30.919,18.956A1.65,1.65%200,0%201,32.569%2020.606L32.569,33.393A1.65,1.65%200,0%201,30.919%2035.043L16.275,35.043A1.65,1.65%200,0%201,14.625%2033.393L14.625,20.606A1.65,1.65%200,0%201,16.275%2018.956z'%20stroke-width='3.375'%20stroke='%23FF9C0A'/%3e%3cpath%20fill='%2300000000'%20d='M11.75,6.75L42.25,6.75A5,5%200,0%201,47.25%2011.75L47.25,42.25A5,5%200,0%201,42.25%2047.25L11.75,47.25A5,5%200,0%201,6.75%2042.25L6.75,11.75A5,5%200,0%201,11.75%206.75z'%20stroke-width='3.375'%20stroke='%23FF9C0A'/%3e%3c/svg%3e", onClick: _o }];
      return Xo(sA().shake_sdk_dialog_add_attachment, i);
    })());
  });
  return s.appendChild(o), s;
};
class ul {
  constructor(A, t, r) {
    F(this, "title");
    F(this, "message");
    F(this, "time");
    F(this, "element");
    this.title = r, this.message = A, this.time = t, this.element = null;
    const n = S();
    n.classList.add("toast-notification"), this.element = n;
    const s = document.getElementsByClassName("toast-notification");
    n.style.marginBottom = 55 * s.length + "px";
    const o = S();
    if (o.classList.add("content-container"), this.title) {
      const d = S();
      d.classList.add("title-container"), d.textContent = this.title, o.appendChild(d);
    }
    const i = S();
    i.classList.add("message-container"), i.textContent = this.message, o.appendChild(i), n.appendChild(o);
    const c = S();
    c.classList.add("close-notification");
    const B = ZA("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14021_39143)'%3e%3cpath%20d='M16%208L8%2016'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16%2016.001L8%208.00098'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14021_39143'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
    c.appendChild(B), n.append(c);
    const a = document.createElement("div"), l = a.attachShadow({ mode: "open" });
    l.appendChild(n), l.adoptedStyleSheets = de, document.body.appendChild(a), setTimeout(function() {
      a.remove();
    }, this.time), c.addEventListener("click", () => {
      n.remove();
    });
  }
}
const Zo = () => {
  new ul(sA().shake_sdk_dialog_ticket_sent_message, 4e3, sA().shake_sdk_dialog_ticket_sent_title);
}, gl = (e, A) => [{ type: Ot.TITLE, value: e, label: "Title" }, { type: Ot.PICKER, value: A, label: "Ticket type" }], wl = [{ icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20fill='%2300000000'%20d='m40.5,15.75%20l-2.25,4.5%20-3,2.063M11.25,27h6.997M35.752,27h6.998M13.5,6.75h-2.25a4.499,4.499%200,0%200,-4.5%204.5v2.25M40.5,47.25h2.25c2.486,0%204.5,-2.014%204.5,-4.5V40.5M6.75,40.5v2.25c0,2.486%202.014,4.5%204.5,4.5h2.25M47.25,13.5v-2.25c0,-2.486%20-2.014,-4.5%20-4.5,-4.5H40.5M13.5,15.75l2.25,4.5%203,2.063M27.999,38.25h-2a6.75,6.75%200,0%201,-6.75%20-6.75v-6.75c0,-2.486%202.014,-4.5%204.5,-4.5h6.5c2.486,0%204.5,2.014%204.5,4.5v6.75a6.75,6.75%200,0%201,-6.75%206.75zM13.5,38.25l2.25,-4.5%203,-2.063M40.5,38.25l-2.25,-4.5%20-3,-2.063M31.5,20.25h-9v-4.5a2.25,2.25%200,0%201,2.25%20-2.25h4.5a2.25,2.25%200,0%201,2.25%202.25v4.5z'%20stroke-width='3.38'%20stroke='%23B77DFF'/%3e%3c/svg%3e", value: Xe.BUG, label: sA().shake_sdk_new_ticket_feedback_type_bug }, { icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20fill='%2300000000'%20d='M42.75,47.25h-31.5a4.499,4.499%200,0%201,-4.5%20-4.5v-31.5c0,-2.486%202.014,-4.5%204.5,-4.5h31.5c2.486,0%204.5,2.014%204.5,4.5v31.5c0,2.486%20-2.014,4.5%20-4.5,4.5z'%20stroke-width='3.38'%20stroke='%23FF9F0A'/%3e%3cpath%20fill='%2300000000'%20d='M27,29.813v-0.563c0,-1.838%201.136,-2.835%202.275,-3.6%201.111,-0.75%202.225,-1.726%202.225,-3.526%200,-2.486%20-2.014,-4.5%20-4.5,-4.5a4.499,4.499%200,0%200,-4.5%204.5M26.998,36a0.563,0.563%200,1%200,0.005%201.125,0.563%200.563,0%200,0%20-0.005,-1.125'%20stroke-width='3.38'%20stroke='%23FF9F0A'/%3e%3c/svg%3e", value: Xe.QUESTION, label: sA().shake_sdk_new_ticket_feedback_type_question }, { icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20fill='%2300000000'%20d='M31.275,47.25h0a20.507,20.507%200,0%200,15.417%20-15.417M38.25,22.5V9M31.5,15.75H45M6.75,22.725h0A20.504,20.504%200,0%201,22.167%207.304M22.167,47.25h0A20.511,20.511%200,0%201,6.75%2031.833'%20stroke-width='3.38'%20stroke='%23D75ED7'/%3e%3c/svg%3e", value: Xe.SUGGESTION, label: sA().shake_sdk_new_ticket_feedback_type_suggestion }], hl = (e) => {
  let A = e.feedbackType, t = e.description, r = !0, n = !1;
  const s = Qn();
  s.classList.add("shake-sdk-new-ticket");
  const o = S();
  o.classList.add("shake-sdk-new-ticket-form");
  const i = ((w = tt, Q = !1, p = () => {
  }) => {
    const f = jt({ image: zr, onClick: () => p() }), E = jt({ image: zr, onClick: w }), U = document.createElement("div");
    return U.classList.add("shake-sdk-toolbar"), Q && U.appendChild(f), U.appendChild(E), U;
  })(), c = js(sA().shake_sdk_ticket_form_title);
  c.classList.add("shake-sdk-new-ticket-title"), s.appendChild(c);
  const B = Zs();
  function a() {
    r = !t.trim() || n, B.disabled = r, l.textContent = n ? sA().shake_sdk_ticket_form_submit_button_text_loading : sA().shake_sdk_ticket_form_submit_button_text;
  }
  B.disabled = !0, B.onclick = async () => {
    n = !0, a(), await (async ({ feedbackType: w, description: Q }) => {
      Z("Ticket submitted.");
      const p = j.localStorage.getShakeState(), f = Le.shakeFeedbackService, E = p.ticket;
      E && (E.tags.push(w), E.custom_fields = gl(Q, w), await f.sendUserFeedback(E, p.attachments)), Zo(), tt();
    })({ feedbackType: A, description: t }), n = !1;
  }, B.classList.add("shake-sdk-submit-button");
  const l = qs(sA().shake_sdk_ticket_form_submit_button_text);
  B.appendChild(l);
  const d = cl({ label: sA().shake_sdk_new_ticket_feedback_type_title, items: wl, onSelectionChange: (w) => {
    A = w, e.feedbackType = w, j.localStorage.setShakeState(e);
  }, selectedValue: A });
  o.appendChild(i), o.appendChild(c), o.appendChild(d);
  const g = (({ onChange: w, maxLength: Q, value: p, label: f }) => {
    const E = S();
    E.classList.add("shake-sdk-textarea-container");
    const U = document.createElement("label");
    U.textContent = f, U.classList.add("shake-sdk-textarea-label");
    const C = document.createElement("textarea");
    return C.classList.add("shake-sdk-textarea"), C.rows = 12, C.textContent = p || null, C.addEventListener("input", function(H) {
      let k = H.target.value;
      Q && k.length > Q && (k = k.slice(0, Q), H.target.value = k), w(H.target.value);
    }), E.appendChild(U), E.appendChild(C), E;
  })({ onChange: (w) => {
    t = w, e.description = w, j.localStorage.setShakeState(e), a();
  }, maxLength: 1e4, value: t, label: sA().shake_sdk_ticket_form_description_placeholder });
  g.classList.add("shake-sdk-styled-textarea"), o.appendChild(g);
  const u = dl(e);
  return o.appendChild(u), s.appendChild(o), s.appendChild(B), s;
}, jo = (e) => {
  const A = et(zr);
  A.classList.add("shake-sdk-close-button"), A.onclick = () => tt(!0);
  const t = ((a) => {
    const l = Qn(), d = S();
    d.classList.add("shake-sdk-attachments-preview-wrap");
    const g = ol({ shakeState: a, onAttachmentPreviewChanged: (w) => {
      d.innerText = "", d.appendChild(il(w));
    } }), u = S();
    return u.classList.add("shake-sdk-attachments-list-wrap"), u.appendChild(g), l.classList.add("shake-sdk-attachments-card"), l.appendChild(u), l.appendChild(d), l;
  })(e), r = S();
  r.classList.add("shake-sdk-content-left"), r.appendChild(A), r.appendChild(t);
  const n = hl(e), s = S();
  s.classList.add("shake-sdk-content-right"), s.appendChild(n);
  const o = S();
  o.classList.add("shake-sdk-content-wrap"), o.appendChild(r), o.appendChild(s);
  const i = S();
  i.classList.add("shake-sdk-content"), i.appendChild(o);
  const c = document.createElement("div");
  c.id = "shake-sdk-root";
  const B = c.attachShadow({ mode: "open" });
  return B.appendChild(i), B.adoptedStyleSheets = de, c;
};
var br, Hr, $r = { exports: {} };
br = $r, Hr = $r.exports, function(e, A) {
  var t = "function", r = "undefined", n = "object", s = "string", o = "major", i = "model", c = "name", B = "type", a = "vendor", l = "version", d = "architecture", g = "console", u = "mobile", w = "tablet", Q = "smarttv", p = "wearable", f = "embedded", E = "Amazon", U = "Apple", C = "ASUS", H = "BlackBerry", k = "Browser", b = "Chrome", N = "Firefox", eA = "Google", gA = "Huawei", X = "LG", tA = "Microsoft", oA = "Motorola", yA = "Opera", aA = "Samsung", pA = "Sharp", HA = "Sony", FA = "Xiaomi", vA = "Zebra", RA = "Facebook", GA = "Chromium OS", kA = "Mac OS", EA = function(T) {
    for (var V = {}, I = 0; I < T.length; I++)
      V[T[I].toUpperCase()] = T[I];
    return V;
  }, qA = function(T, V) {
    return typeof T === s && $(V).indexOf($(T)) !== -1;
  }, $ = function(T) {
    return T.toLowerCase();
  }, L = function(T, V) {
    if (typeof T === s)
      return T = T.replace(/^\s\s*/, ""), typeof V === r ? T : T.substring(0, 500);
  }, D = function(T, V) {
    for (var I, rA, PA, R, zA, v, TA = 0; TA < V.length && !zA; ) {
      var ue = V[TA], NA = V[TA + 1];
      for (I = rA = 0; I < ue.length && !zA && ue[I]; )
        if (zA = ue[I++].exec(T))
          for (PA = 0; PA < NA.length; PA++)
            v = zA[++rA], typeof (R = NA[PA]) === n && R.length > 0 ? R.length === 2 ? typeof R[1] == t ? this[R[0]] = R[1].call(this, v) : this[R[0]] = R[1] : R.length === 3 ? typeof R[1] !== t || R[1].exec && R[1].test ? this[R[0]] = v ? v.replace(R[1], R[2]) : A : this[R[0]] = v ? R[1].call(this, v, R[2]) : A : R.length === 4 && (this[R[0]] = v ? R[3].call(this, v.replace(R[1], R[2])) : A) : this[R] = v || A;
      TA += 2;
    }
  }, M = function(T, V) {
    for (var I in V)
      if (typeof V[I] === n && V[I].length > 0) {
        for (var rA = 0; rA < V[I].length; rA++)
          if (qA(V[I][rA], T))
            return I === "?" ? A : I;
      } else if (qA(V[I], T))
        return I === "?" ? A : I;
    return T;
  }, wA = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" }, hA = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [l, [c, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [l, [c, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [c, l], [/opios[\/ ]+([\w\.]+)/i], [l, [c, yA + " Mini"]], [/\bopr\/([\w\.]+)/i], [l, [c, yA]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [l, [c, "Baidu"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [c, l], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [l, [c, "UC" + k]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [l, [c, "WeChat"]], [/konqueror\/([\w\.]+)/i], [l, [c, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [l, [c, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [l, [c, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [l, [c, "Smart Lenovo " + k]], [/(avast|avg)\/([\w\.]+)/i], [[c, /(.+)/, "$1 Secure " + k], l], [/\bfocus\/([\w\.]+)/i], [l, [c, N + " Focus"]], [/\bopt\/([\w\.]+)/i], [l, [c, yA + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [l, [c, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [l, [c, "Dolphin"]], [/coast\/([\w\.]+)/i], [l, [c, yA + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [l, [c, "MIUI " + k]], [/fxios\/([-\w\.]+)/i], [l, [c, N]], [/\bqihu|(qi?ho?o?|360)browser/i], [[c, "360 " + k]], [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i], [[c, /(.+)/, "$1 " + k], l], [/samsungbrowser\/([\w\.]+)/i], [l, [c, aA + " Internet"]], [/(comodo_dragon)\/([\w\.]+)/i], [[c, /_/g, " "], l], [/metasr[\/ ]?([\d\.]+)/i], [l, [c, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[c, "Sogou Mobile"], l], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i], [c, l], [/(lbbrowser)/i, /\[(linkedin)app\]/i], [c], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[c, RA], l], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [c, l], [/\bgsa\/([\w\.]+) .*safari\//i], [l, [c, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [l, [c, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [l, [c, b + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[c, b + " WebView"], l], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [l, [c, "Android " + k]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [c, l], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [l, [c, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [l, c], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [c, [l, M, { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }]], [/(webkit|khtml)\/([\w\.]+)/i], [c, l], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[c, "Netscape"], l], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [l, [c, N + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [c, l], [/(cobalt)\/([\w\.]+)/i], [c, [l, /master.|lts./, ""]]], cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[d, "amd64"]], [/(ia32(?=;))/i], [[d, $]], [/((?:i[346]|x)86)[;\)]/i], [[d, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[d, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[d, "armhf"]], [/windows (ce|mobile); ppc;/i], [[d, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[d, /ower/, "", $]], [/(sun4\w)[;\)]/i], [[d, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[d, $]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [i, [a, aA], [B, w]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [i, [a, aA], [B, u]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [i, [a, U], [B, u]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [i, [a, U], [B, w]], [/(macintosh);/i], [i, [a, U]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [i, [a, pA], [B, u]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [i, [a, gA], [B, w]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [i, [a, gA], [B, u]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[i, /_/g, " "], [a, FA], [B, u]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[i, /_/g, " "], [a, FA], [B, w]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [i, [a, "OPPO"], [B, u]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [i, [a, "Vivo"], [B, u]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [i, [a, "Realme"], [B, u]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [i, [a, oA], [B, u]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [i, [a, oA], [B, w]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [i, [a, X], [B, w]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [i, [a, X], [B, u]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [i, [a, "Lenovo"], [B, w]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[i, /_/g, " "], [a, "Nokia"], [B, u]], [/(pixel c)\b/i], [i, [a, eA], [B, w]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [i, [a, eA], [B, u]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [i, [a, HA], [B, u]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[i, "Xperia Tablet"], [a, HA], [B, w]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [i, [a, "OnePlus"], [B, u]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [i, [a, E], [B, w]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[i, /(.+)/g, "Fire Phone $1"], [a, E], [B, u]], [/(playbook);[-\w\),; ]+(rim)/i], [i, a, [B, w]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [i, [a, H], [B, u]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [i, [a, C], [B, w]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [i, [a, C], [B, u]], [/(nexus 9)/i], [i, [a, "HTC"], [B, w]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [a, [i, /_/g, " "], [B, u]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [i, [a, "Acer"], [B, w]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [i, [a, "Meizu"], [B, u]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [i, [a, "Ulefone"], [B, u]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [a, i, [B, u]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [a, i, [B, w]], [/(surface duo)/i], [i, [a, tA], [B, w]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [i, [a, "Fairphone"], [B, u]], [/(u304aa)/i], [i, [a, "AT&T"], [B, u]], [/\bsie-(\w*)/i], [i, [a, "Siemens"], [B, u]], [/\b(rct\w+) b/i], [i, [a, "RCA"], [B, w]], [/\b(venue[\d ]{2,7}) b/i], [i, [a, "Dell"], [B, w]], [/\b(q(?:mv|ta)\w+) b/i], [i, [a, "Verizon"], [B, w]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [i, [a, "Barnes & Noble"], [B, w]], [/\b(tm\d{3}\w+) b/i], [i, [a, "NuVision"], [B, w]], [/\b(k88) b/i], [i, [a, "ZTE"], [B, w]], [/\b(nx\d{3}j) b/i], [i, [a, "ZTE"], [B, u]], [/\b(gen\d{3}) b.+49h/i], [i, [a, "Swiss"], [B, u]], [/\b(zur\d{3}) b/i], [i, [a, "Swiss"], [B, w]], [/\b((zeki)?tb.*\b) b/i], [i, [a, "Zeki"], [B, w]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[a, "Dragon Touch"], i, [B, w]], [/\b(ns-?\w{0,9}) b/i], [i, [a, "Insignia"], [B, w]], [/\b((nxa|next)-?\w{0,9}) b/i], [i, [a, "NextBook"], [B, w]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[a, "Voice"], i, [B, u]], [/\b(lvtel\-)?(v1[12]) b/i], [[a, "LvTel"], i, [B, u]], [/\b(ph-1) /i], [i, [a, "Essential"], [B, u]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [i, [a, "Envizen"], [B, w]], [/\b(trio[-\w\. ]+) b/i], [i, [a, "MachSpeed"], [B, w]], [/\btu_(1491) b/i], [i, [a, "Rotor"], [B, w]], [/(shield[\w ]+) b/i], [i, [a, "Nvidia"], [B, w]], [/(sprint) (\w+)/i], [a, i, [B, u]], [/(kin\.[onetw]{3})/i], [[i, /\./g, " "], [a, tA], [B, u]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [i, [a, vA], [B, w]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [i, [a, vA], [B, u]], [/smart-tv.+(samsung)/i], [a, [B, Q]], [/hbbtv.+maple;(\d+)/i], [[i, /^/, "SmartTV"], [a, aA], [B, Q]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[a, X], [B, Q]], [/(apple) ?tv/i], [a, [i, U + " TV"], [B, Q]], [/crkey/i], [[i, b + "cast"], [a, eA], [B, Q]], [/droid.+aft(\w+)( bui|\))/i], [i, [a, E], [B, Q]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [i, [a, pA], [B, Q]], [/(bravia[\w ]+)( bui|\))/i], [i, [a, HA], [B, Q]], [/(mitv-\w{5}) bui/i], [i, [a, FA], [B, Q]], [/Hbbtv.*(technisat) (.*);/i], [a, i, [B, Q]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[a, L], [i, L], [B, Q]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[B, Q]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [a, i, [B, g]], [/droid.+; (shield) bui/i], [i, [a, "Nvidia"], [B, g]], [/(playstation [345portablevi]+)/i], [i, [a, HA], [B, g]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [i, [a, tA], [B, g]], [/((pebble))app/i], [a, i, [B, p]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [i, [a, U], [B, p]], [/droid.+; (glass) \d/i], [i, [a, eA], [B, p]], [/droid.+; (wt63?0{2,3})\)/i], [i, [a, vA], [B, p]], [/(quest( 2| pro)?)/i], [i, [a, RA], [B, p]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [a, [B, f]], [/(aeobc)\b/i], [i, [a, E], [B, f]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [i, [B, u]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [i, [B, w]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[B, w]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[B, u]], [/(android[-\w\. ]{0,9});.+buil/i], [i, [a, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [l, [c, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [l, [c, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [c, l], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [l, c]], os: [[/microsoft (windows) (vista|xp)/i], [c, l], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [c, [l, M, wA]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[l, M, wA], [c, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[l, /_/g, "."], [c, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[c, kA], [l, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [l, c], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [c, l], [/\(bb(10);/i], [l, [c, H]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [l, [c, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [l, [c, N + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [l, [c, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [l, [c, "watchOS"]], [/crkey\/([\d\.]+)/i], [l, [c, b + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[c, GA], l], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [c, l], [/(sunos) ?([\w\.\d]*)/i], [[c, "Solaris"], l], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [c, l]] }, W = function(T, V) {
    if (typeof T === n && (V = T, T = A), !(this instanceof W))
      return new W(T, V).getResult();
    var I = typeof e !== r && e.navigator ? e.navigator : A, rA = T || (I && I.userAgent ? I.userAgent : ""), PA = I && I.userAgentData ? I.userAgentData : A, R = V ? function(v, TA) {
      var ue = {};
      for (var NA in v)
        TA[NA] && TA[NA].length % 2 == 0 ? ue[NA] = TA[NA].concat(v[NA]) : ue[NA] = v[NA];
      return ue;
    }(hA, V) : hA, zA = I && I.userAgent == rA;
    return this.getBrowser = function() {
      var v = {};
      return v[c] = A, v[l] = A, D.call(v, rA, R.browser), v[o] = function(TA) {
        return typeof TA === s ? TA.replace(/[^\d\.]/g, "").split(".")[0] : A;
      }(v[l]), zA && I && I.brave && typeof I.brave.isBrave == t && (v[c] = "Brave"), v;
    }, this.getCPU = function() {
      var v = {};
      return v[d] = A, D.call(v, rA, R.cpu), v;
    }, this.getDevice = function() {
      var v = {};
      return v[a] = A, v[i] = A, v[B] = A, D.call(v, rA, R.device), zA && !v[B] && PA && PA.mobile && (v[B] = u), zA && v[i] == "Macintosh" && I && typeof I.standalone !== r && I.maxTouchPoints && I.maxTouchPoints > 2 && (v[i] = "iPad", v[B] = w), v;
    }, this.getEngine = function() {
      var v = {};
      return v[c] = A, v[l] = A, D.call(v, rA, R.engine), v;
    }, this.getOS = function() {
      var v = {};
      return v[c] = A, v[l] = A, D.call(v, rA, R.os), zA && !v[c] && PA && PA.platform != "Unknown" && (v[c] = PA.platform.replace(/chrome os/i, GA).replace(/macos/i, kA)), v;
    }, this.getResult = function() {
      return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
    }, this.getUA = function() {
      return rA;
    }, this.setUA = function(v) {
      return rA = typeof v === s && v.length > 500 ? L(v, 500) : v, this;
    }, this.setUA(rA), this;
  };
  W.VERSION = "1.0.37", W.BROWSER = EA([c, l, o]), W.CPU = EA([d]), W.DEVICE = EA([i, a, B, g, u, Q, w, p, f]), W.ENGINE = W.OS = EA([c, l]), br.exports && (Hr = br.exports = W), Hr.UAParser = W;
  var cA = typeof e !== r && (e.jQuery || e.Zepto);
  if (cA && !cA.ua) {
    var VA = new W();
    cA.ua = VA.getResult(), cA.ua.get = function() {
      return VA.getUA();
    }, cA.ua.set = function(T) {
      VA.setUA(T);
      var V = VA.getResult();
      for (var I in V)
        cA.ua[I] = V[I];
    };
  }
}(typeof window == "object" ? window : vi);
var Ql = $r.exports;
class ke {
}
F(ke, "metadata", {});
async function qo() {
  const e = new Ql.UAParser(navigator.userAgent), A = await fl().then((t) => (console.log("a"), t));
  return console.log(A), { timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, issue_reported_time: jr((/* @__PURE__ */ new Date()).toString()), os: Tt.WEB, device: pl(), browser_name: e.getBrowser().name, browser_version: e.getBrowser().version, current_view: window.location.pathname, screen_height: Ls().height, screen_width: Ls().width, metadata_: ke.metadata, sdk_version: Bn, platform: Tt.WEB, report_type: Ys.MANUAL, screen_density: window.devicePixelRatio || 1, locale: window.navigator.language || null, os_version: e.getOS().version, os_name: e.getOS().name, device_orientation: Cl(), battery_level: A == null ? void 0 : A.level, battery_status: A != null && A.charging ? 1 : 0, font_scale: Ul(), network_type: Fl(), permissions: await bl().then((t) => t), browser_height: Ss().height, browser_width: Ss().width, cookies_enabled: ml(), is_mobile: yl(), cpu_arch: e.getCPU().architecture, app_version: "1.0", tags: [] };
}
function pl() {
  const e = navigator.userAgent;
  return e.match(/Android/i) ? "Android Device" : e.match(/iPhone|iPad|iPod/i) ? "iOS Device" : e.match(/Windows Phone/i) ? "Windows Phone" : e.match(/Windows/i) ? "Windows PC" : e.match(/Macintosh|Mac OS/i) ? "Macintosh" : e.match(/Linux/i) ? "Linux PC" : null;
}
function Ls() {
  return { width: window.screen.width, height: window.screen.height };
}
function Ss() {
  return { width: window.innerWidth || document.documentElement.clientWidth, height: window.innerHeight || document.documentElement.clientHeight };
}
function Cl() {
  const e = window.screen.orientation;
  return e ? e.type.toLocaleLowerCase().includes("landscape-primary") ? 0 : e.type.toLocaleLowerCase().includes("landscape-secondary") ? 180 : e.type.toLocaleLowerCase().includes("portrait-primary") ? 90 : e.type.toLocaleLowerCase().includes("portrait-secondary") ? 270 : null : null;
}
const fl = async () => {
  if (!("getBattery" in navigator))
    return null;
  try {
    return await navigator.getBattery();
  } catch (e) {
    return Z("Error getting battery status: " + (e == null ? void 0 : e.message)), null;
  }
}, Ul = () => {
  const e = document.createElement("div");
  e.style.fontSize = "1rem", document.body.appendChild(e);
  const A = window.getComputedStyle(e), t = A.getPropertyValue("font-size") ? parseFloat(A.getPropertyValue("font-size")) : null;
  return document.body.removeChild(e), t;
}, Fl = () => {
  const e = "onLine" in navigator && navigator.onLine || !1;
  return "connection" in navigator && e ? navigator.connection.effectiveType || null : "offline";
}, ml = () => "cookieEnabled" in navigator && navigator.cookieEnabled || null, yl = () => {
  var e;
  return "userAgentData" in navigator ? (e = navigator.userAgentData) == null ? void 0 : e.mobile : null;
};
async function El(e) {
  try {
    return await navigator.permissions.query({ name: e });
  } catch (A) {
    return Z("Error checking permission status: " + A.message), null;
  }
}
async function bl() {
  const e = [];
  for (const A of xi)
    try {
      const t = await El(A);
      t && t.state && t.state === "granted" && e.push({ name: A, state: t.state });
    } catch {
      return [];
    }
  return e;
}
const zo = async () => {
  Z("Shake opened.");
  const e = j.localStorage;
  Le.shakeAuthService.authenticate(DA.clientId, DA.clientSecret), vl(), Go(await new hn().captureScreenshot());
  const A = await qo(), t = e.getShakeState();
  t.ticket = A, e.setShakeState(t);
  const r = jo(t);
  document.body.appendChild(r), e.setShakeOpened(!0);
}, qt = "shake-sdk-main-button-root", Hl = () => {
  const e = document.getElementById(qt);
  e && (e.style.display = "flex");
}, vl = () => {
  const e = document.getElementById(qt);
  e && (e.style.display = "none");
};
class kl {
  constructor() {
    F(this, "_language", Mt.EN);
    F(this, "_floatingButtonEnabled", !0);
  }
  get language() {
    return this._language;
  }
  set language(A) {
    this._language = A;
  }
  get floatingButtonEnabled() {
    return this._floatingButtonEnabled;
  }
  set floatingButtonEnabled(A) {
    this._floatingButtonEnabled = A, An();
  }
}
const An = () => {
  if (j.localStorage.isSDKEnabled())
    if (en.config.floatingButtonEnabled) {
      const e = (() => {
        const A = Zs();
        A.classList.add("shake-sdk-main-button");
        const t = ZA("data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14931_603)'%3e%3cpath%20d='M8.19434%2012.6212C10.9278%2015.3547%2014.6693%2016.0477%2016.5462%2014.1682C18.1282%2012.5862%2017.8823%209.68817%2016.1367%207.18042'%20stroke='%23B77DFF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.8599%204.82319C10.5725%202.29444%206.46177%201.97857%204.1719%204.26844C1.60902%206.83132%202.30202%2011.6788%205.7189%2015.0957C7.21501%2016.6164%209.06436%2017.7431%2011.1019%2018.3752'%20stroke='%23B77DFF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.8666%2010.8501L12.5002%2010.5228C12.7364%2010.4764%2012.9537%2010.3613%2013.1249%2010.1921L17.8954%205.42507C18.535%204.78514%2018.535%203.74801%2017.8954%203.10807C17.2555%202.46853%2016.2184%202.46853%2015.5784%203.10807L10.8079%207.87507C10.6374%208.04585%2010.5211%208.2632%2010.4737%208.49982L10.1499%2010.1334C10.0864%2010.4657%2010.3043%2010.7865%2010.6365%2010.8501C10.7125%2010.8646%2010.7906%2010.8646%2010.8666%2010.8501Z'%20stroke='%23880FFF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14931_603'%3e%3crect%20width='21'%20height='21'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
        t.alt = "Send feedback icon", t.classList.add("shake-sdk-main-button-icon");
        const r = qs(sA().shake_sdk_main_button_title);
        r.classList.add("shake-sdk-main-button-text"), A.appendChild(t), A.appendChild(r), A.addEventListener("mousedown", (o) => {
          o.stopPropagation(), o.preventDefault(), zo();
        });
        const n = document.createElement("div");
        n.id = qt;
        const s = n.attachShadow({ mode: "open" });
        return s.adoptedStyleSheets = de, s.appendChild(A), n;
      })();
      document.body.appendChild(e);
    } else {
      const e = document.getElementById(qt);
      e == null || e.remove();
    }
}, Ds = 5120, Il = { takeScreenshot: !0, showSuccessMessage: !1 }, xl = (e) => {
  const A = [];
  return e && A.push({ type: Ot.TITLE, value: e, label: "Title" }), A;
}, CA = class CA {
  static async start(A, t, r) {
    if (this.localStorage.getShakeDeviceId() || this.localStorage.setShakeDeviceId(ri()), !this.isLoading)
      if (this.isLoading = !0, A)
        if (t)
          if (r) {
            if (DA.clientId = A, DA.clientSecret = t, DA.bundleId = r, this.localStorage.isSDKEnabled())
              return An(), void Jn("Shake started.");
            await this.shakeAuthService.authenticate(A, t).finally(() => this.isLoading = !1), this.localStorage.isSDKEnabled() && (An(), Jn("Shake started."));
          } else
            Qe("Shake not started. Bundle id is empty.");
        else
          Qe("Cannot start Shake. Client secret is empty.");
      else
        Qe("Cannot start Shake. Client id is empty.");
  }
};
F(CA, "config", new kl()), F(CA, "isLoading", !1), F(CA, "localStorage", j.localStorage), F(CA, "shakeAuthService", Le.shakeAuthService), F(CA, "show", async () => await CA.ifSDKEnabled(async () => {
  await zo();
})), F(CA, "silentReport", async (A, t) => await CA.ifSDKEnabled(async () => {
  await (async (r, n = Il) => {
    Z("Silent report called.");
    const s = Le.shakeFeedbackService, o = [];
    if (n.takeScreenshot) {
      const c = await new hn().captureScreenshot();
      o.push({ data: c, type: uA.IMAGE, name: Ro(uA.IMAGE) });
    }
    const i = await qo();
    i.tags.push("silent"), i.custom_fields = xl(r), await s.sendUserFeedback(i, o), n.showSuccessMessage && Zo();
  })(A, t);
})), F(CA, "setMetadata", (A, t) => {
  ((r, n) => {
    if (Z(`Set metadata: ${r}`), Object.keys(ke.metadata).length >= 100)
      return void Qe("Cannot set metadata. Limit of 100 items reached.");
    n.length > Ds && (Qe("Truncating metadata value. Value exceeded 5120 chars."), n = n.substring(0, Ds)), ke.metadata[r] = n;
  })(A, t);
}), F(CA, "removeMetadata", (A) => {
  ((t) => {
    Z(`Removing metadata: ${t}`), delete ke.metadata[t];
  })(A);
}), F(CA, "clearMetadata", () => {
  Z("Clearing metadata"), ke.metadata = {};
}), F(CA, "ifSDKEnabled", async (A) => CA.localStorage.isSDKEnabled() ? (await A(), !0) : (Qe("Please call Shake.start(clientId, clientSecret) before using Shake."), !1));
let en = CA;
export {
  en as default
};
//# sourceMappingURL=browser.js.map
