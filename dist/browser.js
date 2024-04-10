var Ko = Object.defineProperty;
var Ro = (e, t, n) => t in e ? Ko(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var sA = (e, t, n) => (Ro(e, typeof t != "symbol" ? t + "" : t, n), n);
import "./main.css";
class jA {
}
sA(jA, "clientId", ""), sA(jA, "clientSecret", ""), sA(jA, "bundleId", "");
let be;
const jo = new Uint8Array(16);
function Vo() {
  if (!be && (be = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !be))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return be(jo);
}
const IA = [];
for (let e = 0; e < 256; ++e)
  IA.push((e + 256).toString(16).slice(1));
const Jr = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
function Go(e, t, n) {
  if (Jr.randomUUID && !t && !e)
    return Jr.randomUUID();
  const l = (e = e || {}).random || (e.rng || Vo)();
  if (l[6] = 15 & l[6] | 64, l[8] = 63 & l[8] | 128, t) {
    n = n || 0;
    for (let g = 0; g < 16; ++g)
      t[n + g] = l[g];
    return t;
  }
  return function(g, B = 0) {
    return IA[g[B + 0]] + IA[g[B + 1]] + IA[g[B + 2]] + IA[g[B + 3]] + "-" + IA[g[B + 4]] + IA[g[B + 5]] + "-" + IA[g[B + 6]] + IA[g[B + 7]] + "-" + IA[g[B + 8]] + IA[g[B + 9]] + "-" + IA[g[B + 10]] + IA[g[B + 11]] + IA[g[B + 12]] + IA[g[B + 13]] + IA[g[B + 14]] + IA[g[B + 15]];
  }(l);
}
class No {
  constructor(t) {
    sA(this, "baseApi");
    this.baseApi = t;
  }
  getToken(t, n) {
    const l = new FormData();
    return l.append("grant_type", "client_credentials"), l.append("client_id", t), l.append("client_secret", n), this.baseApi.postAuth({ resource: "token", data: l, config: { headers: { "Content-Type": "application/x-www-form-urlencoded" } } });
  }
  registerApp(t, n, l, g) {
    return this.baseApi.post({ resource: "/issue_tracking/apps", data: { platform: g, os: n, bundle_id: t, check_archived: l } });
  }
}
const Hi = { production: !1, name: "uat", apiHost: "https://api.staging5h4k3.com/api/1.0/", oAuthHost: "https://api.staging5h4k3.com/auth/oauth2/" };
function Cs(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Xo } = Object.prototype, { getPrototypeOf: Tr } = Object, Ai = (Oi = /* @__PURE__ */ Object.create(null), (e) => {
  const t = Xo.call(e);
  return Oi[t] || (Oi[t] = t.slice(8, -1).toLowerCase());
});
var Oi;
const it = (e) => (e = e.toLowerCase(), (t) => Ai(t) === e), Ci = (e) => (t) => typeof t === e, { isArray: Ot } = Array, Ae = Ci("undefined"), qr = it("ArrayBuffer"), Wo = Ci("string"), XA = Ci("function"), Zr = Ci("number"), Qe = (e) => e !== null && typeof e == "object", Fe = (e) => {
  if (Ai(e) !== "object")
    return !1;
  const t = Tr(e);
  return !(t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.toStringTag in e || Symbol.iterator in e);
}, Yo = it("Date"), zo = it("File"), Jo = it("Blob"), qo = it("FileList"), Zo = it("URLSearchParams");
function te(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e == null)
    return;
  let l, g;
  if (typeof e != "object" && (e = [e]), Ot(e))
    for (l = 0, g = e.length; l < g; l++)
      t.call(null, e[l], l, e);
  else {
    const B = n ? Object.getOwnPropertyNames(e) : Object.keys(e), m = B.length;
    let v;
    for (l = 0; l < m; l++)
      v = B[l], t.call(null, e[v], v, e);
  }
}
function $r(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let l, g = n.length;
  for (; g-- > 0; )
    if (l = n[g], t === l.toLowerCase())
      return l;
  return null;
}
const vs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, An = (e) => !Ae(e) && e !== vs, $o = (Li = typeof Uint8Array < "u" && Tr(Uint8Array), (e) => Li && e instanceof Li);
var Li;
const Aa = it("HTMLFormElement"), tn = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), ta = it("RegExp"), en = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), l = {};
  te(n, (g, B) => {
    let m;
    (m = t(g, B, e)) !== !1 && (l[B] = m || g);
  }), Object.defineProperties(e, l);
}, Di = "abcdefghijklmnopqrstuvwxyz", rn = "0123456789", nn = { DIGIT: rn, ALPHA: Di, ALPHA_DIGIT: Di + Di.toUpperCase() + rn }, ea = it("AsyncFunction"), $ = { isArray: Ot, isArrayBuffer: qr, isBuffer: function(e) {
  return e !== null && !Ae(e) && e.constructor !== null && !Ae(e.constructor) && XA(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}, isFormData: (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || XA(e.append) && ((t = Ai(e)) === "formdata" || t === "object" && XA(e.toString) && e.toString() === "[object FormData]"));
}, isArrayBufferView: function(e) {
  let t;
  return t = typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && qr(e.buffer), t;
}, isString: Wo, isNumber: Zr, isBoolean: (e) => e === !0 || e === !1, isObject: Qe, isPlainObject: Fe, isUndefined: Ae, isDate: Yo, isFile: zo, isBlob: Jo, isRegExp: ta, isFunction: XA, isStream: (e) => Qe(e) && XA(e.pipe), isURLSearchParams: Zo, isTypedArray: $o, isFileList: qo, forEach: te, merge: function e() {
  const { caseless: t } = An(this) && this || {}, n = {}, l = (g, B) => {
    const m = t && $r(n, B) || B;
    Fe(n[m]) && Fe(g) ? n[m] = e(n[m], g) : Fe(g) ? n[m] = e({}, g) : Ot(g) ? n[m] = g.slice() : n[m] = g;
  };
  for (let g = 0, B = arguments.length; g < B; g++)
    arguments[g] && te(arguments[g], l);
  return n;
}, extend: (e, t, n, { allOwnKeys: l } = {}) => (te(t, (g, B) => {
  n && XA(g) ? e[B] = Cs(g, n) : e[B] = g;
}, { allOwnKeys: l }), e), trim: (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), stripBOM: (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), inherits: (e, t, n, l) => {
  e.prototype = Object.create(t.prototype, l), e.prototype.constructor = e, Object.defineProperty(e, "super", { value: t.prototype }), n && Object.assign(e.prototype, n);
}, toFlatObject: (e, t, n, l) => {
  let g, B, m;
  const v = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (g = Object.getOwnPropertyNames(e), B = g.length; B-- > 0; )
      m = g[B], l && !l(m, e, t) || v[m] || (t[m] = e[m], v[m] = !0);
    e = n !== !1 && Tr(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, kindOf: Ai, kindOfTest: it, endsWith: (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const l = e.indexOf(t, n);
  return l !== -1 && l === n;
}, toArray: (e) => {
  if (!e)
    return null;
  if (Ot(e))
    return e;
  let t = e.length;
  if (!Zr(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, forEachEntry: (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let l;
  for (; (l = n.next()) && !l.done; ) {
    const g = l.value;
    t.call(e, g[0], g[1]);
  }
}, matchAll: (e, t) => {
  let n;
  const l = [];
  for (; (n = e.exec(t)) !== null; )
    l.push(n);
  return l;
}, isHTMLForm: Aa, hasOwnProperty: tn, hasOwnProp: tn, reduceDescriptors: en, freezeMethods: (e) => {
  en(e, (t, n) => {
    if (XA(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const l = e[n];
    XA(l) && (t.enumerable = !1, "writable" in t ? t.writable = !1 : t.set || (t.set = () => {
      throw Error("Can not rewrite read-only method '" + n + "'");
    }));
  });
}, toObjectSet: (e, t) => {
  const n = {}, l = (g) => {
    g.forEach((B) => {
      n[B] = !0;
    });
  };
  return Ot(e) ? l(e) : l(String(e).split(t)), n;
}, toCamelCase: (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(t, n, l) {
  return n.toUpperCase() + l;
}), noop: () => {
}, toFiniteNumber: (e, t) => (e = +e, Number.isFinite(e) ? e : t), findKey: $r, global: vs, isContextDefined: An, ALPHABET: nn, generateString: (e = 16, t = nn.ALPHA_DIGIT) => {
  let n = "";
  const { length: l } = t;
  for (; e--; )
    n += t[Math.random() * l | 0];
  return n;
}, isSpecCompliantForm: function(e) {
  return !!(e && XA(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}, toJSONObject: (e) => {
  const t = new Array(10), n = (l, g) => {
    if (Qe(l)) {
      if (t.indexOf(l) >= 0)
        return;
      if (!("toJSON" in l)) {
        t[g] = l;
        const B = Ot(l) ? [] : {};
        return te(l, (m, v) => {
          const b = n(m, g + 1);
          !Ae(b) && (B[v] = b);
        }), t[g] = void 0, B;
      }
    }
    return l;
  };
  return n(e, 0);
}, isAsyncFn: ea, isThenable: (e) => e && (Qe(e) || XA(e)) && XA(e.then) && XA(e.catch) };
function fA(e, t, n, l, g) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), l && (this.request = l), g && (this.response = g);
}
$.inherits(fA, Error, { toJSON: function() {
  return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: $.toJSONObject(this.config), code: this.code, status: this.response && this.response.status ? this.response.status : null };
} });
const sn = fA.prototype, on = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e) => {
  on[e] = { value: e };
}), Object.defineProperties(fA, on), Object.defineProperty(sn, "isAxiosError", { value: !0 }), fA.from = (e, t, n, l, g, B) => {
  const m = Object.create(sn);
  return $.toFlatObject(e, m, function(v) {
    return v !== Error.prototype;
  }, (v) => v !== "isAxiosError"), fA.call(m, e.message, t, n, l, g), m.cause = e, m.name = e.name, B && Object.assign(m, B), m;
};
function Mi(e) {
  return $.isPlainObject(e) || $.isArray(e);
}
function ys(e) {
  return $.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function an(e, t, n) {
  return e ? e.concat(t).map(function(l, g) {
    return l = ys(l), !n && g ? "[" + l + "]" : l;
  }).join(n ? "." : "") : t;
}
const ia = $.toFlatObject($, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function ti(e, t, n) {
  if (!$.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData();
  const l = (n = $.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function(I, M) {
    return !$.isUndefined(M[I]);
  })).metaTokens, g = n.visitor || Q, B = n.dots, m = n.indexes, v = (n.Blob || typeof Blob < "u" && Blob) && $.isSpecCompliantForm(t);
  if (!$.isFunction(g))
    throw new TypeError("visitor must be a function");
  function b(I) {
    if (I === null)
      return "";
    if ($.isDate(I))
      return I.toISOString();
    if (!v && $.isBlob(I))
      throw new fA("Blob is not supported. Use a Buffer instead.");
    return $.isArrayBuffer(I) || $.isTypedArray(I) ? v && typeof Blob == "function" ? new Blob([I]) : Buffer.from(I) : I;
  }
  function Q(I, M, O) {
    let R = I;
    if (I && !O && typeof I == "object") {
      if ($.endsWith(M, "{}"))
        M = l ? M : M.slice(0, -2), I = JSON.stringify(I);
      else if ($.isArray(I) && function(p) {
        return $.isArray(p) && !p.some(Mi);
      }(I) || ($.isFileList(I) || $.endsWith(M, "[]")) && (R = $.toArray(I)))
        return M = ys(M), R.forEach(function(p, AA) {
          !$.isUndefined(p) && p !== null && t.append(m === !0 ? an([M], AA, B) : m === null ? M : M + "[]", b(p));
        }), !1;
    }
    return !!Mi(I) || (t.append(an(O, M, B), b(I)), !1);
  }
  const y = [], E = Object.assign(ia, { defaultVisitor: Q, convertValue: b, isVisitable: Mi });
  if (!$.isObject(e))
    throw new TypeError("data must be an object");
  return function I(M, O) {
    if (!$.isUndefined(M)) {
      if (y.indexOf(M) !== -1)
        throw Error("Circular reference detected in " + O.join("."));
      y.push(M), $.forEach(M, function(R, p) {
        (!($.isUndefined(R) || R === null) && g.call(t, R, $.isString(p) ? p.trim() : p, O, E)) === !0 && I(R, O ? O.concat(p) : [p]);
      }), y.pop();
    }
  }(e), t;
}
function cn(e) {
  const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function Ir(e, t) {
  this._pairs = [], e && ti(e, this, t);
}
const ln = Ir.prototype;
function ra(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function bs(e, t, n) {
  if (!t)
    return e;
  const l = n && n.encode || ra, g = n && n.serialize;
  let B;
  if (B = g ? g(t, n) : $.isURLSearchParams(t) ? t.toString() : new Ir(t, n).toString(l), B) {
    const m = e.indexOf("#");
    m !== -1 && (e = e.slice(0, m)), e += (e.indexOf("?") === -1 ? "?" : "&") + B;
  }
  return e;
}
ln.append = function(e, t) {
  this._pairs.push([e, t]);
}, ln.toString = function(e) {
  const t = e ? function(n) {
    return e.call(this, n, cn);
  } : cn;
  return this._pairs.map(function(n) {
    return t(n[0]) + "=" + t(n[1]);
  }, "").join("&");
};
class hn {
  constructor() {
    this.handlers = [];
  }
  use(t, n, l) {
    return this.handlers.push({ fulfilled: t, rejected: n, synchronous: !!l && l.synchronous, runWhen: l ? l.runWhen : null }), this.handlers.length - 1;
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    $.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Qs = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 }, na = { isBrowser: !0, classes: { URLSearchParams: typeof URLSearchParams < "u" ? URLSearchParams : Ir, FormData: typeof FormData < "u" ? FormData : null, Blob: typeof Blob < "u" ? Blob : null }, protocols: ["http", "https", "file", "blob", "url", "data"] }, Fs = typeof window < "u" && typeof document < "u", sa = (un = typeof navigator < "u" && navigator.product, Fs && ["ReactNative", "NativeScript", "NS"].indexOf(un) < 0);
var un;
const oa = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", tt = { ...Object.freeze(Object.defineProperty({ __proto__: null, hasBrowserEnv: Fs, hasStandardBrowserEnv: sa, hasStandardBrowserWebWorkerEnv: oa }, Symbol.toStringTag, { value: "Module" })), ...na };
function xs(e) {
  function t(n, l, g, B) {
    let m = n[B++];
    if (m === "__proto__")
      return !0;
    const v = Number.isFinite(+m), b = B >= n.length;
    return m = !m && $.isArray(g) ? g.length : m, b ? ($.hasOwnProp(g, m) ? g[m] = [g[m], l] : g[m] = l, !v) : (g[m] && $.isObject(g[m]) || (g[m] = []), t(n, l, g[m], B) && $.isArray(g[m]) && (g[m] = function(Q) {
      const y = {}, E = Object.keys(Q);
      let I;
      const M = E.length;
      let O;
      for (I = 0; I < M; I++)
        O = E[I], y[O] = Q[O];
      return y;
    }(g[m])), !v);
  }
  if ($.isFormData(e) && $.isFunction(e.entries)) {
    const n = {};
    return $.forEachEntry(e, (l, g) => {
      t(function(B) {
        return $.matchAll(/\w+|\[(\w*)]/g, B).map((m) => m[0] === "[]" ? "" : m[1] || m[0]);
      }(l), g, n, 0);
    }), n;
  }
  return null;
}
const Hr = { transitional: Qs, adapter: ["xhr", "http"], transformRequest: [function(e, t) {
  const n = t.getContentType() || "", l = n.indexOf("application/json") > -1, g = $.isObject(e);
  if (g && $.isHTMLForm(e) && (e = new FormData(e)), $.isFormData(e))
    return l ? JSON.stringify(xs(e)) : e;
  if ($.isArrayBuffer(e) || $.isBuffer(e) || $.isStream(e) || $.isFile(e) || $.isBlob(e))
    return e;
  if ($.isArrayBufferView(e))
    return e.buffer;
  if ($.isURLSearchParams(e))
    return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
  let B;
  if (g) {
    if (n.indexOf("application/x-www-form-urlencoded") > -1)
      return function(m, v) {
        return ti(m, new tt.classes.URLSearchParams(), Object.assign({ visitor: function(b, Q, y, E) {
          return tt.isNode && $.isBuffer(b) ? (this.append(Q, b.toString("base64")), !1) : E.defaultVisitor.apply(this, arguments);
        } }, v));
      }(e, this.formSerializer).toString();
    if ((B = $.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
      const m = this.env && this.env.FormData;
      return ti(B ? { "files[]": e } : e, m && new m(), this.formSerializer);
    }
  }
  return g || l ? (t.setContentType("application/json", !1), function(m, v, b) {
    if ($.isString(m))
      try {
        return (v || JSON.parse)(m), $.trim(m);
      } catch (Q) {
        if (Q.name !== "SyntaxError")
          throw Q;
      }
    return (b || JSON.stringify)(m);
  }(e)) : e;
}], transformResponse: [function(e) {
  const t = this.transitional || Hr.transitional, n = t && t.forcedJSONParsing, l = this.responseType === "json";
  if (e && $.isString(e) && (n && !this.responseType || l)) {
    const g = !(t && t.silentJSONParsing) && l;
    try {
      return JSON.parse(e);
    } catch (B) {
      if (g)
        throw B.name === "SyntaxError" ? fA.from(B, fA.ERR_BAD_RESPONSE, this, null, this.response) : B;
    }
  }
  return e;
}], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: tt.classes.FormData, Blob: tt.classes.Blob }, validateStatus: function(e) {
  return e >= 200 && e < 300;
}, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
$.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Hr.headers[e] = {};
});
const Or = Hr, aa = $.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]), dn = Symbol("internals");
function Jt(e) {
  return e && String(e).trim().toLowerCase();
}
function Xe(e) {
  return e === !1 || e == null ? e : $.isArray(e) ? e.map(Xe) : String(e);
}
function Pi(e, t, n, l, g) {
  return $.isFunction(l) ? l.call(this, t, n) : (g && (t = n), $.isString(t) ? $.isString(l) ? t.indexOf(l) !== -1 : $.isRegExp(l) ? l.test(t) : void 0 : void 0);
}
class We {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, l) {
    const g = this;
    function B(v, b, Q) {
      const y = Jt(b);
      if (!y)
        throw new Error("header name must be a non-empty string");
      const E = $.findKey(g, y);
      (!E || g[E] === void 0 || Q === !0 || Q === void 0 && g[E] !== !1) && (g[E || b] = Xe(v));
    }
    const m = (v, b) => $.forEach(v, (Q, y) => B(Q, y, b));
    return $.isPlainObject(t) || t instanceof this.constructor ? m(t, n) : $.isString(t) && (t = t.trim()) && !((v) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(v.trim()))(t) ? m(((v) => {
      const b = {};
      let Q, y, E;
      return v && v.split(`
`).forEach(function(I) {
        E = I.indexOf(":"), Q = I.substring(0, E).trim().toLowerCase(), y = I.substring(E + 1).trim(), !Q || b[Q] && aa[Q] || (Q === "set-cookie" ? b[Q] ? b[Q].push(y) : b[Q] = [y] : b[Q] = b[Q] ? b[Q] + ", " + y : y);
      }), b;
    })(t), n) : t != null && B(n, t, l), this;
  }
  get(t, n) {
    if (t = Jt(t)) {
      const l = $.findKey(this, t);
      if (l) {
        const g = this[l];
        if (!n)
          return g;
        if (n === !0)
          return function(B) {
            const m = /* @__PURE__ */ Object.create(null), v = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
            let b;
            for (; b = v.exec(B); )
              m[b[1]] = b[2];
            return m;
          }(g);
        if ($.isFunction(n))
          return n.call(this, g, l);
        if ($.isRegExp(n))
          return n.exec(g);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Jt(t)) {
      const l = $.findKey(this, t);
      return !(!l || this[l] === void 0 || n && !Pi(0, this[l], l, n));
    }
    return !1;
  }
  delete(t, n) {
    const l = this;
    let g = !1;
    function B(m) {
      if (m = Jt(m)) {
        const v = $.findKey(l, m);
        !v || n && !Pi(0, l[v], v, n) || (delete l[v], g = !0);
      }
    }
    return $.isArray(t) ? t.forEach(B) : B(t), g;
  }
  clear(t) {
    const n = Object.keys(this);
    let l = n.length, g = !1;
    for (; l--; ) {
      const B = n[l];
      t && !Pi(0, this[B], B, t, !0) || (delete this[B], g = !0);
    }
    return g;
  }
  normalize(t) {
    const n = this, l = {};
    return $.forEach(this, (g, B) => {
      const m = $.findKey(l, B);
      if (m)
        return n[m] = Xe(g), void delete n[B];
      const v = t ? function(b) {
        return b.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (Q, y, E) => y.toUpperCase() + E);
      }(B) : String(B).trim();
      v !== B && delete n[B], n[v] = Xe(g), l[v] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return $.forEach(this, (l, g) => {
      l != null && l !== !1 && (n[g] = t && $.isArray(l) ? l.join(", ") : l);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const l = new this(t);
    return n.forEach((g) => l.set(g)), l;
  }
  static accessor(t) {
    const n = (this[dn] = this[dn] = { accessors: {} }).accessors, l = this.prototype;
    function g(B) {
      const m = Jt(B);
      n[m] || (function(v, b) {
        const Q = $.toCamelCase(" " + b);
        ["get", "set", "has"].forEach((y) => {
          Object.defineProperty(v, y + Q, { value: function(E, I, M) {
            return this[y].call(this, b, E, I, M);
          }, configurable: !0 });
        });
      }(l, B), n[m] = !0);
    }
    return $.isArray(t) ? t.forEach(g) : g(t), this;
  }
}
We.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), $.reduceDescriptors(We.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return { get: () => e, set(l) {
    this[n] = l;
  } };
}), $.freezeMethods(We);
const lt = We;
function Ki(e, t) {
  const n = this || Or, l = t || n, g = lt.from(l.headers);
  let B = l.data;
  return $.forEach(e, function(m) {
    B = m.call(n, B, g.normalize(), t ? t.status : void 0);
  }), g.normalize(), B;
}
function Us(e) {
  return !(!e || !e.__CANCEL__);
}
function Ce(e, t, n) {
  fA.call(this, e ?? "canceled", fA.ERR_CANCELED, t, n), this.name = "CanceledError";
}
$.inherits(Ce, fA, { __CANCEL__: !0 });
const ca = tt.hasStandardBrowserEnv ? { write(e, t, n, l, g, B) {
  const m = [e + "=" + encodeURIComponent(t)];
  $.isNumber(n) && m.push("expires=" + new Date(n).toGMTString()), $.isString(l) && m.push("path=" + l), $.isString(g) && m.push("domain=" + g), B === !0 && m.push("secure"), document.cookie = m.join("; ");
}, read(e) {
  const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
  return t ? decodeURIComponent(t[3]) : null;
}, remove(e) {
  this.write(e, "", Date.now() - 864e5);
} } : { write() {
}, read: () => null, remove() {
} };
function Es(e, t) {
  return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? function(n, l) {
    return l ? n.replace(/\/?\/$/, "") + "/" + l.replace(/^\/+/, "") : n;
  }(e, t) : t;
}
const la = tt.hasStandardBrowserEnv ? function() {
  const e = /(msie|trident)/i.test(navigator.userAgent), t = document.createElement("a");
  let n;
  function l(g) {
    let B = g;
    return e && (t.setAttribute("href", B), B = t.href), t.setAttribute("href", B), { href: t.href, protocol: t.protocol ? t.protocol.replace(/:$/, "") : "", host: t.host, search: t.search ? t.search.replace(/^\?/, "") : "", hash: t.hash ? t.hash.replace(/^#/, "") : "", hostname: t.hostname, port: t.port, pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname };
  }
  return n = l(window.location.href), function(g) {
    const B = $.isString(g) ? l(g) : g;
    return B.protocol === n.protocol && B.host === n.host;
  };
}() : function() {
  return !0;
};
function gn(e, t) {
  let n = 0;
  const l = function(g, B) {
    g = g || 10;
    const m = new Array(g), v = new Array(g);
    let b, Q = 0, y = 0;
    return B = B !== void 0 ? B : 1e3, function(E) {
      const I = Date.now(), M = v[y];
      b || (b = I), m[Q] = E, v[Q] = I;
      let O = y, R = 0;
      for (; O !== Q; )
        R += m[O++], O %= g;
      if (Q = (Q + 1) % g, Q === y && (y = (y + 1) % g), I - b < B)
        return;
      const p = M && I - M;
      return p ? Math.round(1e3 * R / p) : void 0;
    };
  }(50, 250);
  return (g) => {
    const B = g.loaded, m = g.lengthComputable ? g.total : void 0, v = B - n, b = l(v);
    n = B;
    const Q = { loaded: B, total: m, progress: m ? B / m : void 0, bytes: v, rate: b || void 0, estimated: b && m && B <= m ? (m - B) / b : void 0, event: g };
    Q[t ? "download" : "upload"] = !0, e(Q);
  };
}
const _s = { http: null, xhr: typeof XMLHttpRequest < "u" && function(e) {
  return new Promise(function(t, n) {
    let l = e.data;
    const g = lt.from(e.headers).normalize();
    let B, m, { responseType: v, withXSRFToken: b } = e;
    function Q() {
      e.cancelToken && e.cancelToken.unsubscribe(B), e.signal && e.signal.removeEventListener("abort", B);
    }
    if ($.isFormData(l)) {
      if (tt.hasStandardBrowserEnv || tt.hasStandardBrowserWebWorkerEnv)
        g.setContentType(!1);
      else if ((m = g.getContentType()) !== !1) {
        const [O, ...R] = m ? m.split(";").map((p) => p.trim()).filter(Boolean) : [];
        g.setContentType([O || "multipart/form-data", ...R].join("; "));
      }
    }
    let y = new XMLHttpRequest();
    if (e.auth) {
      const O = e.auth.username || "", R = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      g.set("Authorization", "Basic " + btoa(O + ":" + R));
    }
    const E = Es(e.baseURL, e.url);
    function I() {
      if (!y)
        return;
      const O = lt.from("getAllResponseHeaders" in y && y.getAllResponseHeaders());
      (function(R, p, AA) {
        const rA = AA.config.validateStatus;
        AA.status && rA && !rA(AA.status) ? p(new fA("Request failed with status code " + AA.status, [fA.ERR_BAD_REQUEST, fA.ERR_BAD_RESPONSE][Math.floor(AA.status / 100) - 4], AA.config, AA.request, AA)) : R(AA);
      })(function(R) {
        t(R), Q();
      }, function(R) {
        n(R), Q();
      }, { data: v && v !== "text" && v !== "json" ? y.response : y.responseText, status: y.status, statusText: y.statusText, headers: O, config: e, request: y }), y = null;
    }
    if (y.open(e.method.toUpperCase(), bs(E, e.params, e.paramsSerializer), !0), y.timeout = e.timeout, "onloadend" in y ? y.onloadend = I : y.onreadystatechange = function() {
      y && y.readyState === 4 && (y.status !== 0 || y.responseURL && y.responseURL.indexOf("file:") === 0) && setTimeout(I);
    }, y.onabort = function() {
      y && (n(new fA("Request aborted", fA.ECONNABORTED, e, y)), y = null);
    }, y.onerror = function() {
      n(new fA("Network Error", fA.ERR_NETWORK, e, y)), y = null;
    }, y.ontimeout = function() {
      let O = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const R = e.transitional || Qs;
      e.timeoutErrorMessage && (O = e.timeoutErrorMessage), n(new fA(O, R.clarifyTimeoutError ? fA.ETIMEDOUT : fA.ECONNABORTED, e, y)), y = null;
    }, tt.hasStandardBrowserEnv && (b && $.isFunction(b) && (b = b(e)), b || b !== !1 && la(E))) {
      const O = e.xsrfHeaderName && e.xsrfCookieName && ca.read(e.xsrfCookieName);
      O && g.set(e.xsrfHeaderName, O);
    }
    l === void 0 && g.setContentType(null), "setRequestHeader" in y && $.forEach(g.toJSON(), function(O, R) {
      y.setRequestHeader(R, O);
    }), $.isUndefined(e.withCredentials) || (y.withCredentials = !!e.withCredentials), v && v !== "json" && (y.responseType = e.responseType), typeof e.onDownloadProgress == "function" && y.addEventListener("progress", gn(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && y.upload && y.upload.addEventListener("progress", gn(e.onUploadProgress)), (e.cancelToken || e.signal) && (B = (O) => {
      y && (n(!O || O.type ? new Ce(null, e, y) : O), y.abort(), y = null);
    }, e.cancelToken && e.cancelToken.subscribe(B), e.signal && (e.signal.aborted ? B() : e.signal.addEventListener("abort", B)));
    const M = function(O) {
      const R = /^([-+\w]{1,25})(:?\/\/|:)/.exec(O);
      return R && R[1] || "";
    }(E);
    M && tt.protocols.indexOf(M) === -1 ? n(new fA("Unsupported protocol " + M + ":", fA.ERR_BAD_REQUEST, e)) : y.send(l || null);
  });
} };
$.forEach(_s, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const fn = (e) => `- ${e}`, ha = (e) => $.isFunction(e) || e === null || e === !1, ks = (e) => {
  e = $.isArray(e) ? e : [e];
  const { length: t } = e;
  let n, l;
  const g = {};
  for (let B = 0; B < t; B++) {
    let m;
    if (n = e[B], l = n, !ha(n) && (l = _s[(m = String(n)).toLowerCase()], l === void 0))
      throw new fA(`Unknown adapter '${m}'`);
    if (l)
      break;
    g[m || "#" + B] = l;
  }
  if (!l) {
    const B = Object.entries(g).map(([m, v]) => `adapter ${m} ` + (v === !1 ? "is not supported by the environment" : "is not available in the build"));
    throw new fA("There is no suitable adapter to dispatch the request " + (t ? B.length > 1 ? `since :
` + B.map(fn).join(`
`) : " " + fn(B[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT");
  }
  return l;
};
function Ri(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ce(null, e);
}
function pn(e) {
  return Ri(e), e.headers = lt.from(e.headers), e.data = Ki.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ks(e.adapter || Or.adapter)(e).then(function(t) {
    return Ri(e), t.data = Ki.call(e, e.transformResponse, t), t.headers = lt.from(t.headers), t;
  }, function(t) {
    return Us(t) || (Ri(e), t && t.response && (t.response.data = Ki.call(e, e.transformResponse, t.response), t.response.headers = lt.from(t.response.headers))), Promise.reject(t);
  });
}
const Bn = (e) => e instanceof lt ? e.toJSON() : e;
function Vt(e, t) {
  t = t || {};
  const n = {};
  function l(Q, y, E) {
    return $.isPlainObject(Q) && $.isPlainObject(y) ? $.merge.call({ caseless: E }, Q, y) : $.isPlainObject(y) ? $.merge({}, y) : $.isArray(y) ? y.slice() : y;
  }
  function g(Q, y, E) {
    return $.isUndefined(y) ? $.isUndefined(Q) ? void 0 : l(void 0, Q, E) : l(Q, y, E);
  }
  function B(Q, y) {
    if (!$.isUndefined(y))
      return l(void 0, y);
  }
  function m(Q, y) {
    return $.isUndefined(y) ? $.isUndefined(Q) ? void 0 : l(void 0, Q) : l(void 0, y);
  }
  function v(Q, y, E) {
    return E in t ? l(Q, y) : E in e ? l(void 0, Q) : void 0;
  }
  const b = { url: B, method: B, data: B, baseURL: m, transformRequest: m, transformResponse: m, paramsSerializer: m, timeout: m, timeoutMessage: m, withCredentials: m, withXSRFToken: m, adapter: m, responseType: m, xsrfCookieName: m, xsrfHeaderName: m, onUploadProgress: m, onDownloadProgress: m, decompress: m, maxContentLength: m, maxBodyLength: m, beforeRedirect: m, transport: m, httpAgent: m, httpsAgent: m, cancelToken: m, socketPath: m, responseEncoding: m, validateStatus: v, headers: (Q, y) => g(Bn(Q), Bn(y), !0) };
  return $.forEach(Object.keys(Object.assign({}, e, t)), function(Q) {
    const y = b[Q] || g, E = y(e[Q], t[Q], Q);
    $.isUndefined(E) && y !== v || (n[Q] = E);
  }), n;
}
const ua = "1.6.7", Lr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Lr[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const wn = {};
Lr.transitional = function(e, t, n) {
  function l(g, B) {
    return "[Axios v1.6.7] Transitional option '" + g + "'" + B + (n ? ". " + n : "");
  }
  return (g, B, m) => {
    if (e === !1)
      throw new fA(l(B, " has been removed" + (t ? " in " + t : "")), fA.ERR_DEPRECATED);
    return t && !wn[B] && (wn[B] = !0, console.warn(l(B, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(g, B, m);
  };
};
const Ar = { assertOptions: function(e, t, n) {
  if (typeof e != "object")
    throw new fA("options must be an object", fA.ERR_BAD_OPTION_VALUE);
  const l = Object.keys(e);
  let g = l.length;
  for (; g-- > 0; ) {
    const B = l[g], m = t[B];
    if (m) {
      const v = e[B], b = v === void 0 || m(v, B, e);
      if (b !== !0)
        throw new fA("option " + B + " must be " + b, fA.ERR_BAD_OPTION_VALUE);
    } else if (n !== !0)
      throw new fA("Unknown option " + B, fA.ERR_BAD_OPTION);
  }
}, validators: Lr }, dt = Ar.validators;
class Ye {
  constructor(t) {
    this.defaults = t, this.interceptors = { request: new hn(), response: new hn() };
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (l) {
      if (l instanceof Error) {
        let g;
        Error.captureStackTrace ? Error.captureStackTrace(g = {}) : g = new Error();
        const B = g.stack ? g.stack.replace(/^.+\n/, "") : "";
        l.stack ? B && !String(l.stack).endsWith(B.replace(/^.+\n.+\n/, "")) && (l.stack += `
` + B) : l.stack = B;
      }
      throw l;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}).url = t : n = t || {}, n = Vt(this.defaults, n);
    const { transitional: l, paramsSerializer: g, headers: B } = n;
    l !== void 0 && Ar.assertOptions(l, { silentJSONParsing: dt.transitional(dt.boolean), forcedJSONParsing: dt.transitional(dt.boolean), clarifyTimeoutError: dt.transitional(dt.boolean) }, !1), g != null && ($.isFunction(g) ? n.paramsSerializer = { serialize: g } : Ar.assertOptions(g, { encode: dt.function, serialize: dt.function }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let m = B && $.merge(B.common, B[n.method]);
    B && $.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (O) => {
      delete B[O];
    }), n.headers = lt.concat(m, B);
    const v = [];
    let b = !0;
    this.interceptors.request.forEach(function(O) {
      typeof O.runWhen == "function" && O.runWhen(n) === !1 || (b = b && O.synchronous, v.unshift(O.fulfilled, O.rejected));
    });
    const Q = [];
    let y;
    this.interceptors.response.forEach(function(O) {
      Q.push(O.fulfilled, O.rejected);
    });
    let E, I = 0;
    if (!b) {
      const O = [pn.bind(this), void 0];
      for (O.unshift.apply(O, v), O.push.apply(O, Q), E = O.length, y = Promise.resolve(n); I < E; )
        y = y.then(O[I++], O[I++]);
      return y;
    }
    E = v.length;
    let M = n;
    for (I = 0; I < E; ) {
      const O = v[I++], R = v[I++];
      try {
        M = O(M);
      } catch (p) {
        R.call(this, p);
        break;
      }
    }
    try {
      y = pn.call(this, M);
    } catch (O) {
      return Promise.reject(O);
    }
    for (I = 0, E = Q.length; I < E; )
      y = y.then(Q[I++], Q[I++]);
    return y;
  }
  getUri(t) {
    return bs(Es((t = Vt(this.defaults, t)).baseURL, t.url), t.params, t.paramsSerializer);
  }
}
$.forEach(["delete", "get", "head", "options"], function(e) {
  Ye.prototype[e] = function(t, n) {
    return this.request(Vt(n || {}, { method: e, url: t, data: (n || {}).data }));
  };
}), $.forEach(["post", "put", "patch"], function(e) {
  function t(n) {
    return function(l, g, B) {
      return this.request(Vt(B || {}, { method: e, headers: n ? { "Content-Type": "multipart/form-data" } : {}, url: l, data: g }));
    };
  }
  Ye.prototype[e] = t(), Ye.prototype[e + "Form"] = t(!0);
});
const ze = Ye;
class Dr {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(g) {
      n = g;
    });
    const l = this;
    this.promise.then((g) => {
      if (!l._listeners)
        return;
      let B = l._listeners.length;
      for (; B-- > 0; )
        l._listeners[B](g);
      l._listeners = null;
    }), this.promise.then = (g) => {
      let B;
      const m = new Promise((v) => {
        l.subscribe(v), B = v;
      }).then(g);
      return m.cancel = function() {
        l.unsubscribe(B);
      }, m;
    }, t(function(g, B, m) {
      l.reason || (l.reason = new Ce(g, B, m), n(l.reason));
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
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return { token: new Dr(function(n) {
      t = n;
    }), cancel: t };
  }
}
const da = Dr, tr = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
Object.entries(tr).forEach(([e, t]) => {
  tr[t] = e;
});
const ga = tr, bA = function e(t) {
  const n = new ze(t), l = Cs(ze.prototype.request, n);
  return $.extend(l, ze.prototype, n, { allOwnKeys: !0 }), $.extend(l, n, null, { allOwnKeys: !0 }), l.create = function(g) {
    return e(Vt(t, g));
  }, l;
}(Or);
bA.Axios = ze, bA.CanceledError = Ce, bA.CancelToken = da, bA.isCancel = Us, bA.VERSION = ua, bA.toFormData = ti, bA.AxiosError = fA, bA.Cancel = bA.CanceledError, bA.all = function(e) {
  return Promise.all(e);
}, bA.spread = function(e) {
  return function(t) {
    return e.apply(null, t);
  };
}, bA.isAxiosError = function(e) {
  return $.isObject(e) && e.isAxiosError === !0;
}, bA.mergeConfig = Vt, bA.AxiosHeaders = lt, bA.formToJSON = (e) => xs($.isHTMLForm(e) ? new FormData(e) : e), bA.getAdapter = ks, bA.HttpStatusCode = ga, bA.default = bA;
var fa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ba(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function l() {
      return this instanceof l ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(l) {
    var g = Object.getOwnPropertyDescriptor(e, l);
    Object.defineProperty(n, l, g.get ? g : { enumerable: !0, get: function() {
      return e[l];
    } });
  }), n;
}
const wa = pa(typeof self == "object" ? self.FormData : window.FormData), ct = "shake.sdk.appToken", mn = "shake.sdk.isAppRegistered", Cn = "shake.sdk.isAppActive", vn = "shake.sdk.isShakeOpened", yn = "shake.sdk.shakeState", bn = "shake.sdk.shakeDeviceId", Qn = "shake.sdk.shakeChosenColor", Fn = "shake.sdk.shakeChosenDrawingOption", Qt = class Qt {
  constructor(t, n, l, g) {
    sA(this, "instance");
    sA(this, "instanceAuth");
    sA(this, "version");
    sA(this, "bundleId");
    sA(this, "deviceId");
    sA(this, "storageProvider");
    sA(this, "handlers", {});
    bA.defaults.withCredentials = !1, this.storageProvider = t, this.bundleId = l, this.deviceId = g, this.version = n, this.instance = bA.create({ baseURL: Hi.apiHost }), this.instanceAuth = bA.create({ baseURL: Hi.oAuthHost }), this.setRequestInterceptors(), this.setResponseInterceptors();
  }
  static getInstance(t, n, l, g) {
    return Qt.serviceInstance || (Qt.serviceInstance = new Qt(t, n, l, g)), Qt.serviceInstance;
  }
  addTokenToRequest(t) {
    var l;
    const n = this.storageProvider.getObject(ct);
    return n && n.access_token && !((l = t == null ? void 0 : t.url) != null && l.startsWith("http://localhost:5000/auth/oauth2/")) && t.headers && (t.headers.authorization = `${n.token_type} ${n.access_token}`), t;
  }
  addHeadersToRequest(t) {
    var n;
    return (n = t == null ? void 0 : t.url) != null && n.startsWith("http://localhost:5000/auth/oauth2/") || t.headers && (t.headers["X-DEVICE-ID"] = this.deviceId, t.headers["X-APP-ID"] = this.bundleId, t.headers["X-SHAKE-VERSION"] = this.version), t;
  }
  refreshToken() {
    const t = new wa();
    return t.append("grant_type", "client_credentials"), t.append("client_id", jA.clientId), t.append("client_secret", jA.clientSecret), this.postAuth({ resource: "token", data: t, config: { headers: { "Content-Type": "application/x-www-form-urlencoded" } } }).then((n) => (n && n.data && n.data.access_token && this.storageProvider.setObject(ct, n.data), n));
  }
  handle401Error(t) {
    if (this.hasTokensInStorage())
      return this.refreshToken().then((n) => {
        var l, g;
        return n ? (this.storageProvider.setObject(ct, n.data), (g = (l = this.handlers).renewTokenHandler) == null || g.call(l, n.data), this.addTokenToRequest(t)) : new Promise(() => {
          this.storageProvider.removeItem(ct);
        });
      }).catch(() => (this.storageProvider.getObject(ct), new Promise(() => {
        this.storageProvider.removeItem(ct);
      })));
  }
  hasTokensInStorage() {
    return !!this.storageProvider.getObject(ct);
  }
  setRequestInterceptors() {
    this.instance.interceptors.request.use((t) => (this.addTokenToRequest(t), this.addHeadersToRequest(t), t), (t) => Promise.reject(t)), this.instanceAuth.interceptors.request.use((t) => t, (t) => Promise.reject(t));
  }
  setResponseInterceptors() {
    this.instance.interceptors.response.use((t) => t, (t) => {
      var l, g, B, m, v;
      const n = t.config;
      return n && !n._retry && ((l = t.response) == null ? void 0 : l.status) === 401 && n.url !== `${Hi.oAuthHost}token` ? (n._retry = !0, (g = this.handle401Error(n)) == null ? void 0 : g.then(() => this.instance(n))) : n && !n._retry && ((B = t.response) == null ? void 0 : B.status) === 402 ? (v = (m = this.handlers).handle402Error) == null ? void 0 : v.call(m) : Promise.reject(t);
    });
  }
  injectRenewTokenHandler(t) {
    this.handlers = { ...this.handlers, renewTokenHandler: t };
  }
  inject402ErrorHandler(t) {
    this.handlers = { ...this.handlers, handle402Error: t };
  }
  get({ resource: t, config: n }) {
    return this.instance.get(t, n);
  }
  post({ resource: t, data: n, config: l }) {
    return this.instance.post(t, n, l);
  }
  postAuth({ resource: t, data: n, config: l }) {
    return this.instanceAuth.post(t, n, l);
  }
  patch({ resource: t, data: n, config: l }) {
    return this.instance.patch(t, this.formatPatchData(n), l);
  }
  put({ resource: t, data: n, config: l }) {
    return this.instance.put(t, n, l);
  }
  delete({ resource: t, config: n }) {
    return this.instance.delete(t, n);
  }
  formatPatchData(t) {
    return Object.keys(t).map((n) => ({ op: "replace", path: "/" + n, value: t[n] }));
  }
};
sA(Qt, "serviceInstance");
let fe = Qt;
var Ss = ((e) => (e.WEB = "Web", e))(Ss || {}), ei = ((e) => (e.WEB = "Web", e))(ei || {}), ce = ((e) => (e.SUGGESTION = "improvement", e.BUG = "bug", e.QUESTION = "question", e))(ce || {}), Ts = ((e) => (e.MANUAL = "manual", e.AUTOMATIC = "automatic", e))(Ts || {}), ii = ((e) => (e.TITLE = "title", e.TEXT_INPUT = "text_input", e.EMAIL = "email", e.PICKER = "picker", e))(ii || {});
const ma = ["geolocation", "camera", "microphone", "notifications", "persistent-storage", "screen-wake-lock"];
class Ca {
  constructor() {
    sA(this, "ticket", null);
    sA(this, "description", "");
    sA(this, "feedbackType", ce.BUG);
  }
}
class va {
  constructor(t) {
    sA(this, "storageProvider");
    sA(this, "isSDKEnabled", () => this.isAppRegistered() && this.isAppActive());
    sA(this, "isAppRegistered", () => this.storageProvider.getBoolean(mn));
    sA(this, "setAppRegistered", (t) => this.storageProvider.setBoolean(mn, t));
    sA(this, "isAppActive", () => this.storageProvider.getBoolean(Cn));
    sA(this, "setAppActive", (t) => this.storageProvider.setBoolean(Cn, t));
    sA(this, "isShakeOpened", () => this.storageProvider.getBoolean(vn) ?? !1);
    sA(this, "setShakeOpened", (t) => this.storageProvider.setBoolean(vn, t));
    sA(this, "getShakeState", () => this.storageProvider.getObject(yn) ?? new Ca());
    sA(this, "setShakeState", (t) => this.storageProvider.setObject(yn, t));
    sA(this, "getShakeDeviceId", () => this.storageProvider.getString(bn));
    sA(this, "setShakeDeviceId", (t) => this.storageProvider.setString(bn, t));
    sA(this, "getShakeChosenColor", () => this.storageProvider.getString(Qn));
    sA(this, "setShakeChosenColor", (t) => this.storageProvider.setString(Qn, t));
    sA(this, "getShakeChosenDrawingOption", () => this.storageProvider.getString(Fn));
    sA(this, "setShakeChosenDrawingOption", (t) => this.storageProvider.setString(Fn, t));
    this.storageProvider = t;
  }
}
const ve = "shake_sdk", VA = "files";
function vi() {
  return new Promise((e, t) => {
    const n = indexedDB.open(ve, 1), l = [];
    n.onerror = function() {
      t("Error opening database");
    }, n.onsuccess = function(g) {
      const B = g.target.result.transaction([VA], "readonly").objectStore(VA).openCursor();
      B.onsuccess = function(m) {
        const v = m.target.result;
        v ? (l.push({ name: v.value.name, data: v.value.drawingData ? v.value.drawingData : v.value.data, type: v.value.type, timestamp: v.value.timestamp }), v.continue()) : (l.sort((b, Q) => b.timestamp == Q.timestamp ? 0 : b.timestamp > Q.timestamp ? 1 : -1), e(l));
      }, B.onerror = function() {
        t("Error retrieving files from IndexedDB");
      };
    }, n.onupgradeneeded = function(g) {
      g.target.result.createObjectStore(VA, { keyPath: "name" });
    };
  });
}
const er = (e) => new Promise((t, n) => {
  const l = indexedDB.open(ve, 1);
  l.onerror = function() {
    n("Error opening database");
  }, l.onsuccess = function(g) {
    const B = g.target.result.transaction([VA], "readwrite").objectStore(VA).put(e);
    B.onsuccess = function() {
      t("File written successfully to IndexedDB");
    }, B.onerror = function() {
      n("Error writing file to IndexedDB");
    };
  }, l.onupgradeneeded = function(g) {
    g.target.result.createObjectStore(VA, { keyPath: "name" });
  };
});
function xn(e) {
  return new Promise((t, n) => {
    const l = indexedDB.open(ve, 1);
    l.onerror = function() {
      n("Error opening database");
    }, l.onsuccess = function(g) {
      const B = g.target.result.transaction([VA], "readwrite").objectStore(VA).delete(e);
      B.onsuccess = function() {
        t("File deleted successfully from IndexedDB");
      }, B.onerror = function() {
        n("Error deleting file from IndexedDB");
      };
    }, l.onupgradeneeded = function(g) {
      g.target.result.createObjectStore(VA, { keyPath: "name" });
    };
  });
}
class ya {
  constructor() {
    sA(this, "addObservers", []);
    sA(this, "removeObservers", []);
    sA(this, "updateObservers", []);
    sA(this, "addAttachment", async (t) => {
      await er(t), this.notifyAdded(t);
    });
    sA(this, "removeAttachment", async (t) => {
      await xn(t.name), this.notifyRemoved(t);
    });
    sA(this, "updateAttachment", async (t) => {
      await xn(t.name), await er(t), this.notifyUpdated(t);
    });
    sA(this, "notifyAdded", (t) => this.addObservers.forEach((n) => n(t)));
    sA(this, "notifyRemoved", (t) => this.removeObservers.forEach((n) => n(t)));
    sA(this, "notifyUpdated", (t) => this.updateObservers.forEach((n) => n(t)));
  }
}
class ba {
  getString(t) {
    return localStorage.getItem(t);
  }
  setString(t, n) {
    localStorage.setItem(t, n);
  }
  getBoolean(t) {
    return localStorage.getItem(t) === "true";
  }
  setBoolean(t, n) {
    localStorage.setItem(t, String(n));
  }
  removeItem(t) {
    localStorage.removeItem(t);
  }
  getObject(t) {
    const n = localStorage.getItem(t);
    return n ? JSON.parse(n) : null;
  }
  setObject(t, n) {
    localStorage.setItem(t, JSON.stringify(n));
  }
}
const Rt = class Rt {
};
sA(Rt, "storageProvider", new ba()), sA(Rt, "localStorage", new va(Rt.storageProvider)), sA(Rt, "attachmentsManager", new ya());
let QA = Rt;
const yi = "shakeSdk: ", yA = (e) => {
  console.debug(`${yi} ${e}`);
}, Un = (e) => {
  console.info(`${yi} ${e}`);
}, Et = (e) => {
  console.warn(`${yi} ${e}`);
}, Is = (e) => {
  console.error(`${yi} ${e}`);
}, Mr = "0.1.0";
class Qa {
  constructor() {
    sA(this, "data", QA.localStorage);
    sA(this, "storage", QA.storageProvider);
    sA(this, "authApi");
    const t = fe.getInstance(QA.storageProvider, Mr, jA.bundleId, this.data.getShakeDeviceId() ?? "");
    this.authApi = new No(t);
  }
  async getToken(t, n) {
    const l = this.storage.getObject(ct);
    if (l)
      return l;
    try {
      const { data: g } = await this.authApi.getToken(t, n);
      return this.storage.setObject(ct, g), g ?? null;
    } catch (g) {
      return yA("Error getting token: " + (g == null ? void 0 : g.message)), null;
    }
  }
  async registerApp(t) {
    if (!t)
      return !1;
    try {
      return await this.authApi.registerApp(jA.bundleId, ei.WEB, !1, Ss.WEB), !0;
    } catch (n) {
      return yA("Error registering the app: " + (n == null ? void 0 : n.message)), !1;
    }
  }
  async authenticate(t, n) {
    var l;
    try {
      const g = await this.getToken(t, n);
      if (!g)
        return;
      const B = await this.registerApp(g);
      this.data.setAppRegistered(B), this.data.setAppActive(!0);
    } catch (g) {
      yA("Error initializing the app: " + (g == null ? void 0 : g.message)), ((l = g.response) == null ? void 0 : l.status) === 404 && (yA("App archived"), this.data.setAppRegistered(!1), this.data.setAppActive(!1));
    }
  }
}
class Fa {
  constructor({ storage: t, version: n, bundleId: l, deviceId: g }) {
    sA(this, "baseApi");
    this.baseApi = fe.getInstance(t, n, l, g);
  }
  sendFeedback(t, n) {
    return this.baseApi.post({ resource: `/issue_tracking/apps/${t}`, data: { bundle_id: t, ...n }, config: { headers: { "Content-Type": "application/json" } } });
  }
}
class xa {
  constructor({ storage: t, version: n, bundleId: l, deviceId: g }) {
    sA(this, "baseApi");
    this.baseApi = fe.getInstance(t, n, l, g);
  }
  uploadFile(t) {
    const n = new FormData();
    return n.append("file", t), this.baseApi.post({ resource: "/files", data: n, config: { headers: { "Content-Type": "multipart/form-data" } } });
  }
}
var _A = ((e) => (e[e.IMAGE = 0] = "IMAGE", e[e.VIDEO = 1] = "VIDEO", e))(_A || {});
class Ua {
  constructor() {
    sA(this, "data", QA.localStorage);
    sA(this, "feedbackApi");
    sA(this, "filesApi");
    sA(this, "baseApiParams", { storage: QA.storageProvider, version: Mr, bundleId: jA.bundleId, deviceId: this.data.getShakeDeviceId() ?? "" });
    this.feedbackApi = new Fa(this.baseApiParams), this.filesApi = new xa(this.baseApiParams);
  }
  async sendUserFeedback(t, n) {
    let l, g, B = [];
    n.length && (l = await this.uploadScreenshot(n), g = await this.uploadVideo(n), B = await this.uploadAttachments(n)), t.screenshot_url = l, t.video_url = g, t.files = B;
    try {
      await this.feedbackApi.sendFeedback(jA.bundleId, t), yA("Ticket sent successfully.");
    } catch (m) {
      return yA("Error sending user feedback: " + (m == null ? void 0 : m.message)), null;
    }
  }
  async uploadScreenshot(t) {
    const n = t.find((l) => l.type === _A.IMAGE);
    if (n) {
      const l = this.convertAttachmentToFile(n);
      return await this.uploadFile(l);
    }
  }
  async uploadVideo(t) {
    const n = t.find((l) => l.type === _A.VIDEO);
    if (n) {
      const l = this.convertAttachmentToFile(n);
      return await this.uploadFile(l);
    }
  }
  async uploadAttachments(t) {
    const n = t.find((m) => m.type === _A.IMAGE), l = t.find((m) => m.type === _A.VIDEO), g = t.filter((m) => m.name !== (n == null ? void 0 : n.name) && m.name !== (l == null ? void 0 : l.name)).slice(0, 9), B = await this.convertAttachmentsToFiles(g) ?? [];
    return await this.sendFiles(B) ?? [];
  }
  async uploadFile(t) {
    try {
      const { data: n } = await this.filesApi.uploadFile(t);
      return n.url;
    } catch (n) {
      return void yA("Error uploading file: " + (n == null ? void 0 : n.message));
    }
  }
  convertAttachmentToFile(t) {
    return new File([t.drawingData ?? t.data], t.name, { type: t.data.type });
  }
  async convertAttachmentsToFiles(t) {
    return t.map((n) => this.convertAttachmentToFile(n));
  }
  async sendFiles(t) {
    const n = [];
    return await Promise.all(t.map(async (l) => {
      await this.uploadFile(l).then((g) => {
        g && n.push({ url: g });
      });
    })), n;
  }
}
class Gt {
}
sA(Gt, "shakeAuthService", new Qa()), sA(Gt, "shakeFeedbackService", new Ua());
var ri = ((e) => (e[e.EN = 0] = "EN", e))(ri || {});
const Nt = () => {
  const e = document.createElement("button");
  return e.classList.add("shake-sdk-button"), e;
}, ZA = (e) => {
  const t = document.createElement("img");
  return t.classList.add("shake-sdk-image"), e && (t.src = e), t;
}, Hs = (e) => {
  const t = document.createElement("p");
  return t.classList.add("shake-sdk-text-p1"), t.innerText = e, t;
}, Pr = (e) => {
  const t = document.createElement("p");
  return t.classList.add("shake-sdk-text-h2"), t.innerText = e, t;
}, En = (e) => {
  const t = document.createElement("p");
  return t.classList.add("shake-sdk-text-button"), t.innerText = e, t;
}, Os = (e) => {
  const t = document.createElement("p");
  return t.classList.add("shake-sdk-text-accent-button"), t.innerText = e, t;
}, gA = async (e) => new CSSStyleSheet().replace(e), vt = (e) => {
  (async () => await Promise.all([gA(".shake-sdk-bubble{padding:0;border-radius:100px;border-width:0;cursor:pointer;display:flex;align-items:center;justify-content:center;position:fixed;background-color:#fff;width:50px;height:50px;z-index:2147483647;transition:none}"), gA(".shake-sdk-button{background-color:var(--shake-sdk-color-accent);padding:9px 20px 11px;border-radius:var(--shake-sdk-border-radius-light);display:flex;justify-content:center;align-items:center;cursor:pointer;border:none}.shake-sdk-button:disabled{cursor:not-allowed;opacity:.3}"), gA(".shake-sdk-card{flex:1;background-color:var(--shake-sdk-bg-color-primary);border-radius:var(--shake-sdk-border-radius)}"), gA(".shake-sdk-circle-button{padding:0;border-radius:100px;border-width:0;cursor:pointer;display:flex;align-items:center;justify-content:center}"), gA(""), gA(""), gA(".shake-sdk-context-menu{position:fixed;display:none;width:260px;z-index:2147483647;transform:translate(20%,-25%);border-radius:10px;border-width:1px;border-color:var(--shake-sdk-bg-color-outline);padding:8px 0;background-color:var(--shake-sdk-bg-color-primary-inversed-highlight);box-shadow:0 2px 10px #1c1c1e}"), gA(".shake-sdk-context-menu-header{background-color:transparent;border:0;display:flex;width:100%;padding:8px 20px;cursor:pointer}.shake-sdk-context-menu-header-text{color:var(--shake-sdk-text-color-secondary);font-size:12px}"), gA(".shake-sdk-context-menu-item{background-color:transparent;border:0;display:flex;width:100%;padding:8px 20px;cursor:pointer}.shake-sdk-context-menu-item:hover{background-color:var(--shake-sdk-bg-color-outline)}.shake-sdk-context-menu-item img{width:20px;height:20px;margin-right:10px}.shake-sdk-context-menu-item p{color:var(--shake-sdk-text-color-popup-menu-item)}"), gA(".shake-sdk-select-dropdown{border-radius:var(--shake-sdk-border-radius-light);border:1px solid var(--shake-sdk-bg-color-primary-highlight);background:var(--shake-sdk-bg-color-secondary);padding:9px 18px 12px 12px;display:flex;flex-direction:column;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.shake-sdk-select-dropdown.active{border:1px solid var(--shake-sdk-color-accent)}.shake-sdk-dropdown-icon{position:absolute;right:16px;top:16px;cursor:pointer}.shake-sdk-select-dropdown-label{font-size:12px;color:var(--shake-sdk-text-color-secondary);font-family:Roobert,serif;-webkit-font-smoothing:antialiased;cursor:pointer;-webkit-user-select:none;user-select:none}.shake-sdk-select-dropdown-chosen{color:var(--shake-sdk-text-color-primary)}.shake-sdk-select-options{padding:8px 0;margin-top:2px;background:var(--shake-sdk-bg-color-secondary);border-radius:var(--shake-sdk-border-radius-light);border:1px solid var(--shake-sdk-bg-color-primary-highlight);list-style-type:none;display:none;position:absolute;width:333px;z-index:1}.shake-sdk-select-option{list-style-type:none;font-family:Roobert,serif;padding:10px 20px 12px 12px;cursor:pointer;color:var(--shake-sdk-text-color-primary);font-size:14px;font-weight:500}.shake-sdk-select-option:hover{background-color:var(--shake-sdk-bg-color-primary-highlight)}"), gA(".shake-sdk-sheet-background{position:fixed;top:0;left:0;width:100%;height:100%;z-index:2147483647;display:flex;flex-direction:column-reverse;background-color:#000000b3;box-sizing:border-box}.shake-sdk-sheet{padding:40px;display:flex;flex-direction:column;background-color:var(--shake-sdk-bg-color-primary);border-radius:var(--shake-sdk-border-radius) var(--shake-sdk-border-radius) 0 0}.shake-sdk-sheet>p{text-align:center;margin-bottom:25px}.shake-sdk-sheet-item{cursor:pointer;display:flex;flex-direction:row;background-color:transparent;border:0;padding:12px;margin:0}.shake-sdk-sheet-item:hover{background-color:var(--shake-sdk-bg-color-primary-highlight)}.shake-sdk-sheet-item img{text-align:center;margin-right:12px;width:27px;height:27px}"), gA(".shake-sdk-text-p1{font-size:16px;font-weight:500;line-height:20px;letter-spacing:0;color:var(--shake-sdk-text-color-primary);-webkit-font-smoothing:antialiased;margin:0}.shake-sdk-text-p2{font-size:14px;font-weight:500;line-height:18px;letter-spacing:0;color:var(--shake-sdk-text-color-secondary);-webkit-font-smoothing:antialiased;margin:0}.shake-sdk-text-p3{color:var(--shake-sdk-text-color-secondary);font-size:12px;font-weight:500;line-height:16px;letter-spacing:0;-webkit-font-smoothing:antialiased;margin:0}.shake-sdk-text-h2{font-size:24px;font-weight:700;line-height:32px;letter-spacing:0;color:var(--shake-sdk-text-color-primary);-webkit-font-smoothing:antialiased;margin:0}.shake-sdk-text-button{font-size:14px;font-weight:500;line-height:18px;letter-spacing:0;color:var(--shake-sdk-button-accent-text-color);-webkit-font-smoothing:antialiased;margin:0}.shake-sdk-text-accent-button{font-size:14px;font-weight:700;line-height:20px;letter-spacing:0;color:var(--shake-sdk-button-accent-text-color);-webkit-font-smoothing:antialiased;margin:0}"), gA(".shake-sdk-textarea-container{width:100%;display:flex;position:relative;z-index:0}.shake-sdk-textarea{flex:1;background-color:transparent;border:1px solid var(--shake-sdk-bg-color-primary-highlight);border-radius:var(--shake-sdk-border-radius-light);font-family:Roobert,serif;padding:28px 12px 12px;resize:none;width:100%;color:var(--shake-sdk-text-color-primary);font-size:16px}.shake-sdk-textarea:focus-visible{outline:none;border:1px solid var(--shake-sdk-color-accent)}.shake-sdk-textarea::placeholder{color:var(--shake-sdk-text-color-secondary)}.shake-sdk-textarea-label{position:absolute;font-family:Roobert,serif;top:28px;left:2px;font-size:12px;color:var(--shake-sdk-text-color-secondary);pointer-events:none;transform-origin:top left;transform:translateY(-50%) translate(10px)}"), gA(".toast-notification{width:300px;max-height:min-content;bottom:0;margin-bottom:20px;opacity:1;margin-left:0;top:20px;right:20px;position:fixed;z-index:2147483647;display:flex;flex-direction:row;cursor:default;border:1px solid var(--shake-sdk-bg-color-outline);border-radius:var(--shake-sdk-border-radius-light);background:var(--shake-sdk-bg-color-primary-inversed-highlight);color:var(--shake-sdk-text-color-popup-menu-item);box-shadow:0 2px 10px var(--shake-sdk-bg-color-primary-inversed)}.message-container{width:88%;padding-bottom:14px;padding-left:20px;color:var(--shake-sdk-text-color-popup-menu-item);border-radius:var(--shake-sdk-border-radius-light);cursor:default;font-size:14px;font-family:Roobert,serif;background:var(--shake-sdk-bg-color-primary-inversed-highlight)}.title-container{width:88%;padding-left:20px;padding-bottom:4px;color:var(--shake-sdk-text-color-popup-menu-item);border-radius:var(--shake-sdk-border-radius-light);cursor:default;font-size:16px;font-family:Roobert,serif;background:var(--shake-sdk-bg-color-primary-inversed-highlight)}.content-container{width:88%;padding-top:14px;padding-left:20px;color:var(--shake-sdk-text-color-popup-menu-item);border-radius:var(--shake-sdk-border-radius-light);cursor:default;font-size:14px;font-family:Roobert,serif;background:var(--shake-sdk-bg-color-primary-inversed-highlight);display:flex;flex-direction:column}.close-notification{width:12%;height:32px}.close-notification>img{padding-top:8px;padding-left:5px;font-weight:900;color:var(--shake-sdk-text-color-popup-menu-item);cursor:pointer}"), gA(".shake-sdk-toolbar{width:100%;height:32px;background-color:transparent;display:flex;flex-direction:row;justify-content:right}.shake-sdk-toolbar-button{display:flex;align-items:center;justify-content:center;border:none;cursor:pointer;width:32px;height:32px;background-color:transparent;margin-left:-10px}.shake-sdk-toolbar-button:hover{opacity:.7}@media only screen and (min-width: 1025px){.shake-sdk-toolbar{display:none}}"), gA(".shake-sdk-video{width:100%}"), gA(".shake-sdk-main-button{position:fixed;top:50%;right:-32px;height:28px;min-width:138px;z-index:2147483647;transform:rotate(-90deg);margin-top:-14px;border-radius:var(--shake-sdk-button-border-radius);background:var(--shake-sdk-pureWhite);padding:4px 10px 3px 7px;border:1px solid var(--shake-sdk-grey30)}.shake-sdk-main-button-icon{margin-right:4px;width:21px;height:21px;border-radius:4px}.shake-sdk-main-button-text{color:var(--shake-sdk-text-color-primary);letter-spacing:-.04em}"), gA(".shake-sdk-content{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;background-color:#000000b3;z-index:2147483647;overflow:hidden}.shake-sdk-content-wrap{flex:1;display:flex;flex-direction:row;padding:40px}.shake-sdk-content-left{display:flex;flex:1;margin-right:20px;position:relative}.shake-sdk-content-right{display:flex}.shake-sdk-close-button{position:absolute;top:-15px;left:-15px;width:40px;height:40px}@media only screen and (max-width: 1024px){.shake-sdk-content-wrap{background-color:var(--shake-sdk-bg-color-primary);padding:0}.shake-sdk-content-left{display:none}.shake-sdk-content-right{flex:1}.shake-sdk-close-button{display:none}}.shake-sdk-content p,h1,h2,h3,ul,li,label,div{font-family:Roobert,serif;margin:0}.shake-sdk-sheet p,h1,h2,h3,ul,li,label,div{font-family:Roobert,serif}.shake-sdk-content *{scrollbar-width:thin;scrollbar-color:#2C2C2E transparent}.shake-sdk-content *::-webkit-scrollbar{width:6px}.shake-sdk-content *::-webkit-scrollbar-track{background:none}.shake-sdk-content *::-webkit-scrollbar-thumb{background-color:#2c2c2e;border-radius:10px}.shake-sdk-content ::-webkit-scrollbar-corner{background-color:transparent}"), gA(".shake-sdk-new-ticket{padding:32px 20px;display:flex;flex-direction:column;justify-content:space-between;width:336px;background-color:var(--shake-sdk-bg-color-primary)}.shake-sdk-new-ticket-form{display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden}.shake-sdk-new-ticket-title{padding-bottom:32px}.shake-sdk-styled-textarea{padding-top:12px;margin-bottom:12px}.shake-sdk-submit-button{background-color:var(--shake-sdk-color-accent);padding:9px 20px 11px;border-radius:var(--shake-sdk-border-radius-light)}.shake-sdk-new-ticket *{scrollbar-color:#e8e8e8 transparent!important}.shake-sdk-new-ticket *::-webkit-scrollbar-thumb{background-color:#e8e8e8!important}@media only screen and (max-width: 1024px){.shake-sdk-new-ticket{width:0}}"), gA(".shake-sdk-attachments-items-small{display:flex;flex-direction:row;min-height:210px;width:100%;overflow-x:auto;overflow-y:hidden}@media only screen and (min-width: 1025px){.shake-sdk-attachments-items-small{display:none}}"), gA(".shake-sdk-attachment-item-small{display:flex;min-width:100px;max-width:100px;height:200px;margin-right:10px;cursor:pointer;overflow:hidden;position:relative}.shake-sdk-attachment-item-remove-small{position:absolute;top:15px;right:15px;width:30px;height:30px;background-color:var(--shake-sdk-bg-color-primary-inversed);opacity:.7}.shake-sdk-attachment-item-thumbnail-small{background-color:#000;height:100%;width:100%;object-fit:cover;border-radius:10px}"), gA(".shake-sdk-attachments-add-item-small{display:flex;min-width:100px;max-width:100px;height:200px;margin-right:10px;align-items:center;justify-content:center;overflow:hidden;position:relative}.shake-sdk-attachment-add-button-small{width:29px;height:29px;cursor:pointer;background-color:var(--shake-sdk-bg-color-secondary)}"), gA(".shake-sdk-attachments-card{padding:20px;display:flex;flex-direction:row;background-color:var(--shake-sdk-bg-color-primary-inversed)}.shake-sdk-attachments-page{display:flex;flex-direction:row;width:100%}.shake-sdk-attachments-list-wrap{display:flex;flex-direction:row;flex:0;margin-right:12px}.shake-sdk-attachments-preview-wrap{display:flex;flex-direction:row;flex:1}.shake-sdk-attachments-preview-colors{width:200px;transform:translate(10%,120%);border:1px solid var(--shake-sdk-bg-color-outline)}@media only screen and (max-width: 1024px){.shake-sdk-attachments-card{display:none}}"), gA(".shake-sdk-attachments-items{display:flex;flex-direction:column;overflow:auto;overflow-x:hidden}"), gA(".shake-sdk-attachments-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1}.shake-sdk-attachments-empty img{margin-right:10px}.shake-sdk-attachments-empty button{height:36px;margin-right:20px;background-color:var(--shake-sdk-button-color);color:var(--shake-sdk-button-text-color);border:1px solid var(--shake-sdk-button-border-color)}.shake-sdk-attachments-empty button:hover{opacity:.7}.shake-sdk-attachments-empty>div{display:flex;flex-direction:row;margin-top:20px}.shake-sdk-attachments-empty>p{max-width:300px;text-align:center;font-size:18px}"), gA(".shake-sdk-attachment-item{width:140px;display:flex;flex-direction:column;margin-bottom:20px;cursor:pointer}.shake-sdk-attachment-item-card{position:relative;padding:8px;background-color:transparent}.shake-sdk-attachment-item-selected .shake-sdk-attachment-item-card{background-color:var(--shake-sdk-bg-color-primary-inversed-highlight)}.shake-sdk-attachment-remove{position:absolute;top:15px;right:15px;width:30px;height:30px;background-color:var(--shake-sdk-bg-color-primary-inversed);opacity:.7}.shake-sdk-attachment-item-thumbnail{background-color:transparent;width:100%;height:61px;object-fit:cover;border-radius:10px}.shake-sdk-attachment-item-title{display:flex;justify-content:center}.shake-sdk-attachment-title-box{display:flex;width:78px;height:20px;margin:2px;text-align:center;align-items:center;justify-content:center;border-radius:4px;background-color:transparent}.shake-sdk-attachment-item-selected .shake-sdk-attachment-title-box{background-color:var(--shake-sdk-color-accent-dark)}.shake-sdk-attachment-title-box p{color:var(--shake-sdk-button-accent-text-color)}"), gA(".shake-sdk-attachments-add-item{width:140px;display:flex;align-items:center;justify-content:center}.shake-sdk-attachment-add-button{width:29px;height:29px;background-color:var(--shake-sdk-bg-color-primary-inversed-highlight)}"), gA(".shake-sdk-attachments-preview{margin-top:36px;flex:1;overflow:hidden;width:100%}"), gA(".shake-sdk-image-previw-root{display:flex;flex-direction:column;flex:1}.shake-sdk-image-preview{width:100%;max-width:100%;height:auto;max-height:100%;position:relative;-webkit-user-select:none;user-select:none;background-color:transparent}.shake-sdk-image-preview-image{border-radius:10px;display:block;width:100%;height:auto}.shake-sdk-image-preview-toolbox-container{display:flex;justify-content:center;width:100%;margin-top:50px}.shake-sdk-image-preview-toolbox{width:192px;height:48px;flex-shrink:0;display:flex;justify-content:center;border-radius:10px;border:1px solid var(--shake-sdk-bg-color-outline);background:var(--shake-sdk-bg-color-primary-inversed-highlight)}"), gA(".shake-sdk-video-preview{height:100%}.shake-sdk-video-preview video{border-radius:10px;display:block;max-width:100%;max-height:100%;height:auto;width:auto}"), gA(".shake-sdk-image-preview-root-fs{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;background-color:#000;z-index:2147483647}.shake-sdk-image-preview-toolbar-fs{width:100%;flex:0 0 32px;background-color:transparent;display:flex;flex-direction:row;justify-content:right}.shake-sdk-image-preview-content-fs{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;padding:32px}.shake-sdk-image-preview-fs{display:block;max-width:100%;max-height:70vh;height:auto;width:auto;border-radius:10px}"), gA(".shake-sdk-video-preview-root-fs{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;background-color:#000;z-index:2147483647}.shake-sdk-video-preview-toolbar-fs{width:100%;height:32px;background-color:transparent;display:flex;flex-direction:row;justify-content:right}.shake-sdk-video-preview-fs{width:100%;height:100%}"), gA(`.shake-sdk-canvas{position:absolute;cursor:url("data:image/svg+xml,%3csvg%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Pen,%20Square%202'%20clip-path='url(%23clip0_15240_1054)'%3e%3cg%20id='Group'%3e%3cg%20id='Vector'%20filter='url(%23filter0_d_15240_1054)'%3e%3cpath%20d='M17.4366%2030.7725C17.092%2031.1171%2016.6263%2031.3096%2016.1405%2031.3096H12.4463V27.6155C12.4463%2027.1296%2012.6406%2026.664%2012.9835%2026.3193L25.6775%2013.6161C26.9095%2012.3841%2028.9078%2012.3841%2030.1398%2013.6161C31.3736%2014.8481%2031.3718%2016.8465%2030.1398%2018.0785L17.4366%2030.7725Z'%20fill='white'/%3e%3cpath%20d='M10.9463%2031.3096C10.9463%2032.1381%2011.6179%2032.8096%2012.4463%2032.8096H16.1405C17.0238%2032.8096%2017.8709%2032.4593%2018.4969%2031.8335C18.497%2031.8334%2018.4972%2031.8333%2018.4973%2031.8331L31.2001%2019.1395L31.2005%2019.1391C33.0172%2017.3224%2033.0213%2014.3737%2031.1997%2012.5547C29.3818%2010.7377%2026.4343%2010.738%2024.6168%2012.5555L24.6164%2012.5559L11.9224%2025.259L11.92%2025.2615C11.3009%2025.8839%2010.9463%2026.7285%2010.9463%2027.6155V31.3096Z'%20stroke='white'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cpath%20id='Vector_2'%20d='M17.4366%2030.7725C17.092%2031.1171%2016.6263%2031.3096%2016.1405%2031.3096H12.4463V27.6155C12.4463%2027.1296%2012.6406%2026.664%2012.9835%2026.3193L25.6775%2013.6161C26.9095%2012.3841%2028.9078%2012.3841%2030.1398%2013.6161C31.3736%2014.8481%2031.3718%2016.8465%2030.1398%2018.0785L17.4366%2030.7725Z'%20fill='white'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_3'%20d='M21.6328%2017.6733L26.0878%2022.1283'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_4'%20d='M29.2484%2018.9675L30.9021%2020.6212C31.7711%2021.492%2031.7711%2022.9019%2030.9021%2023.7709L27.8936%2026.7794'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_15240_1054'%20x='7.44629'%20y='9.69214'%20width='28.6182'%20height='28.6174'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='2'/%3e%3cfeGaussianBlur%20stdDeviation='1'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_15240_1054'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_15240_1054'%20result='shape'/%3e%3c/filter%3e%3cclipPath%20id='clip0_15240_1054'%3e%3crect%20width='44'%20height='44'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"),auto;top:0;left:0;height:100%;z-index:99999;width:100%}`), gA(".shake-sdk-attachments-drawing-button{outline:none;border:none;background:transparent;padding:8px}.shake-sdk-attachments-drawing-button svg{width:22px;height:22px}.shake-sdk-attachments-drawing-button svg path,.shake-sdk-attachments-drawing-button svg rect{stroke:var(--shake-sdk-text-color-secondary);transition:stroke .3s ease}.shake-sdk-attachments-drawing-button:hover svg path{stroke:var(--shake-sdk-button-accent-text-color)}.shake-sdk-attachments-drawing-button:hover svg rect{stroke:var(--shake-sdk-button-accent-text-color)}.shake-sdk-attachments-drawing-button:hover svg circle{stroke:var(--shake-sdk-button-accent-text-color)}.shake-sdk-attachments-drawing-button.additional-active svg path{stroke:var(--shake-sdk-button-accent-text-color)}.shake-sdk-attachments-drawing-button.additional-active svg rect{stroke:var(--shake-sdk-button-accent-text-color)}.shake-sdk-attachments-drawing-button.additional-active svg circle{stroke:var(--shake-sdk-button-accent-text-color)}"), gA(".shake-sdk-attachments-colored-button{outline:none;border:none;background:transparent;border-radius:50%;height:20px;width:20px;margin-left:6px;margin-right:6px;padding:0}")]))().then((t) => e.adoptedStyleSheets = t);
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
var ir = function(e, t) {
  return ir = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, l) {
    n.__proto__ = l;
  } || function(n, l) {
    for (var g in l)
      Object.prototype.hasOwnProperty.call(l, g) && (n[g] = l[g]);
  }, ir(e, t);
};
function $A(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  function n() {
    this.constructor = e;
  }
  ir(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var rr = function() {
  return rr = Object.assign || function(e) {
    for (var t, n = 1, l = arguments.length; n < l; n++)
      for (var g in t = arguments[n])
        Object.prototype.hasOwnProperty.call(t, g) && (e[g] = t[g]);
    return e;
  }, rr.apply(this, arguments);
};
function MA(e, t, n, l) {
  return new (n || (n = Promise))(function(g, B) {
    function m(Q) {
      try {
        b(l.next(Q));
      } catch (y) {
        B(y);
      }
    }
    function v(Q) {
      try {
        b(l.throw(Q));
      } catch (y) {
        B(y);
      }
    }
    function b(Q) {
      var y;
      Q.done ? g(Q.value) : (y = Q.value, y instanceof n ? y : new n(function(E) {
        E(y);
      })).then(m, v);
    }
    b((l = l.apply(e, t || [])).next());
  });
}
function LA(e, t) {
  var n, l, g, B, m = { label: 0, sent: function() {
    if (1 & g[0])
      throw g[1];
    return g[1];
  }, trys: [], ops: [] };
  return B = { next: v(0), throw: v(1), return: v(2) }, typeof Symbol == "function" && (B[Symbol.iterator] = function() {
    return this;
  }), B;
  function v(b) {
    return function(Q) {
      return function(y) {
        if (n)
          throw new TypeError("Generator is already executing.");
        for (; m; )
          try {
            if (n = 1, l && (g = 2 & y[0] ? l.return : y[0] ? l.throw || ((g = l.return) && g.call(l), 0) : l.next) && !(g = g.call(l, y[1])).done)
              return g;
            switch (l = 0, g && (y = [2 & y[0], g.value]), y[0]) {
              case 0:
              case 1:
                g = y;
                break;
              case 4:
                return m.label++, { value: y[1], done: !1 };
              case 5:
                m.label++, l = y[1], y = [0];
                continue;
              case 7:
                y = m.ops.pop(), m.trys.pop();
                continue;
              default:
                if (g = m.trys, !((g = g.length > 0 && g[g.length - 1]) || y[0] !== 6 && y[0] !== 2)) {
                  m = 0;
                  continue;
                }
                if (y[0] === 3 && (!g || y[1] > g[0] && y[1] < g[3])) {
                  m.label = y[1];
                  break;
                }
                if (y[0] === 6 && m.label < g[1]) {
                  m.label = g[1], g = y;
                  break;
                }
                if (g && m.label < g[2]) {
                  m.label = g[2], m.ops.push(y);
                  break;
                }
                g[2] && m.ops.pop(), m.trys.pop();
                continue;
            }
            y = t.call(e, m);
          } catch (E) {
            y = [6, E], l = 0;
          } finally {
            n = g = 0;
          }
        if (5 & y[0])
          throw y[1];
        return { value: y[0] ? y[1] : void 0, done: !0 };
      }([b, Q]);
    };
  }
}
function xe(e, t, n) {
  if (n || arguments.length === 2)
    for (var l, g = 0, B = t.length; g < B; g++)
      !l && g in t || (l || (l = Array.prototype.slice.call(t, 0, g)), l[g] = t[g]);
  return e.concat(l || t);
}
for (var ut = function() {
  function e(t, n, l, g) {
    this.left = t, this.top = n, this.width = l, this.height = g;
  }
  return e.prototype.add = function(t, n, l, g) {
    return new e(this.left + t, this.top + n, this.width + l, this.height + g);
  }, e.fromClientRect = function(t, n) {
    return new e(n.left + t.windowBounds.left, n.top + t.windowBounds.top, n.width, n.height);
  }, e.fromDOMRectList = function(t, n) {
    var l = Array.from(n).find(function(g) {
      return g.width !== 0;
    });
    return l ? new e(l.left + t.windowBounds.left, l.top + t.windowBounds.top, l.width, l.height) : e.EMPTY;
  }, e.EMPTY = new e(0, 0, 0, 0), e;
}(), bi = function(e, t) {
  return ut.fromClientRect(e, t.getBoundingClientRect());
}, ni = function(e) {
  for (var t = [], n = 0, l = e.length; n < l; ) {
    var g = e.charCodeAt(n++);
    if (g >= 55296 && g <= 56319 && n < l) {
      var B = e.charCodeAt(n++);
      (64512 & B) == 56320 ? t.push(((1023 & g) << 10) + (1023 & B) + 65536) : (t.push(g), n--);
    } else
      t.push(g);
  }
  return t;
}, EA = function() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var n = e.length;
  if (!n)
    return "";
  for (var l = [], g = -1, B = ""; ++g < n; ) {
    var m = e[g];
    m <= 65535 ? l.push(m) : (m -= 65536, l.push(55296 + (m >> 10), m % 1024 + 56320)), (g + 1 === n || l.length > 16384) && (B += String.fromCharCode.apply(String, l), l.length = 0);
  }
  return B;
}, Ea = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _a = typeof Uint8Array > "u" ? [] : new Uint8Array(256), Ue = 0; Ue < 64; Ue++)
  _a[Ea.charCodeAt(Ue)] = Ue;
for (var ka = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ee = typeof Uint8Array > "u" ? [] : new Uint8Array(256), Ee = 0; Ee < 64; Ee++)
  ee[ka.charCodeAt(Ee)] = Ee;
for (var _n = function(e, t, n) {
  return e.slice ? e.slice(t, n) : new Uint16Array(Array.prototype.slice.call(e, t, n));
}, Sa = function() {
  function e(t, n, l, g, B, m) {
    this.initialValue = t, this.errorValue = n, this.highStart = l, this.highValueIndex = g, this.index = B, this.data = m;
  }
  return e.prototype.get = function(t) {
    var n;
    if (t >= 0) {
      if (t < 55296 || t > 56319 && t <= 65535)
        return n = ((n = this.index[t >> 5]) << 2) + (31 & t), this.data[n];
      if (t <= 65535)
        return n = ((n = this.index[2048 + (t - 55296 >> 5)]) << 2) + (31 & t), this.data[n];
      if (t < this.highStart)
        return n = 2080 + (t >> 11), n = this.index[n], n += t >> 5 & 63, n = ((n = this.index[n]) << 2) + (31 & t), this.data[n];
      if (t <= 1114111)
        return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, e;
}(), Ta = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ia = typeof Uint8Array > "u" ? [] : new Uint8Array(256), _e = 0; _e < 64; _e++)
  Ia[Ta.charCodeAt(_e)] = _e;
var ft = 10, nr = 13, ie = 15, ke = 17, qt = 18, Ha = 19, kn = 20, sr = 21, Zt = 22, _t = 24, GA = 25, re = 26, ne = 27, kt = 28, Lt = 30, Se = 32, Te = 33, or = 34, ar = 35, le = 37, cr = 38, Je = 39, qe = 40, Sn = 42, Oa = [9001, 65288], dA = "×", Ie = "÷", lr = function(e, t) {
  var n, l, g, B = function(y) {
    var E, I, M, O, R, p = 0.75 * y.length, AA = y.length, rA = 0;
    y[y.length - 1] === "=" && (p--, y[y.length - 2] === "=" && p--);
    var oA = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && Uint8Array.prototype.slice !== void 0 ? new ArrayBuffer(p) : new Array(p), u = Array.isArray(oA) ? oA : new Uint8Array(oA);
    for (E = 0; E < AA; E += 4)
      I = ee[y.charCodeAt(E)], M = ee[y.charCodeAt(E + 1)], O = ee[y.charCodeAt(E + 2)], R = ee[y.charCodeAt(E + 3)], u[rA++] = I << 2 | M >> 4, u[rA++] = (15 & M) << 4 | O >> 2, u[rA++] = (3 & O) << 6 | 63 & R;
    return oA;
  }(e), m = Array.isArray(B) ? function(y) {
    for (var E = y.length, I = [], M = 0; M < E; M += 4)
      I.push(y[M + 3] << 24 | y[M + 2] << 16 | y[M + 1] << 8 | y[M]);
    return I;
  }(B) : new Uint32Array(B), v = Array.isArray(B) ? function(y) {
    for (var E = y.length, I = [], M = 0; M < E; M += 2)
      I.push(y[M + 1] << 8 | y[M]);
    return I;
  }(B) : new Uint16Array(B), b = _n(v, 12, m[4] / 2), Q = m[5] === 2 ? _n(v, (24 + m[4]) / 2) : (n = m, l = Math.ceil((24 + m[4]) / 4), n.slice ? n.slice(l, g) : new Uint32Array(Array.prototype.slice.call(n, l, g)));
  return new Sa(m[0], m[1], m[2], m[3], b, Q);
}("KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA=="), ot = [Lt, 36], hr = [1, 2, 3, 5], Ls = [ft, 8], Tn = [ne, re], La = hr.concat(Ls), In = [cr, Je, qe, or, ar], Da = [ie, nr], ji = function(e, t, n, l) {
  var g = l[n];
  if (Array.isArray(e) ? e.indexOf(g) !== -1 : e === g)
    for (var B = n; B <= l.length; ) {
      if ((b = l[++B]) === t)
        return !0;
      if (b !== ft)
        break;
    }
  if (g === ft)
    for (B = n; B > 0; ) {
      var m = l[--B];
      if (Array.isArray(e) ? e.indexOf(m) !== -1 : e === m)
        for (var v = n; v <= l.length; ) {
          var b;
          if ((b = l[++v]) === t)
            return !0;
          if (b !== ft)
            break;
        }
      if (m !== ft)
        break;
    }
  return !1;
}, Hn = function(e, t) {
  for (var n = e; n >= 0; ) {
    var l = t[n];
    if (l !== ft)
      return l;
    n--;
  }
  return 0;
}, Ma = function(e, t, n, l, g) {
  if (n[l] === 0)
    return dA;
  var B = l - 1;
  if (Array.isArray(g) && g[B] === !0)
    return dA;
  var m = B - 1, v = B + 1, b = t[B], Q = m >= 0 ? t[m] : 0, y = t[v];
  if (b === 2 && y === 3)
    return dA;
  if (hr.indexOf(b) !== -1)
    return "!";
  if (hr.indexOf(y) !== -1 || Ls.indexOf(y) !== -1)
    return dA;
  if (Hn(B, t) === 8)
    return Ie;
  if (lr.get(e[B]) === 11 || (b === Se || b === Te) && lr.get(e[v]) === 11 || b === 7 || y === 7 || b === 9 || [ft, nr, ie].indexOf(b) === -1 && y === 9 || [ke, qt, Ha, _t, kt].indexOf(y) !== -1 || Hn(B, t) === Zt || ji(23, Zt, B, t) || ji([ke, qt], sr, B, t) || ji(12, 12, B, t))
    return dA;
  if (b === ft)
    return Ie;
  if (b === 23 || y === 23)
    return dA;
  if (y === 16 || b === 16)
    return Ie;
  if ([nr, ie, sr].indexOf(y) !== -1 || b === 14 || Q === 36 && Da.indexOf(b) !== -1 || b === kt && y === 36 || y === kn || ot.indexOf(y) !== -1 && b === GA || ot.indexOf(b) !== -1 && y === GA || b === ne && [le, Se, Te].indexOf(y) !== -1 || [le, Se, Te].indexOf(b) !== -1 && y === re || ot.indexOf(b) !== -1 && Tn.indexOf(y) !== -1 || Tn.indexOf(b) !== -1 && ot.indexOf(y) !== -1 || [ne, re].indexOf(b) !== -1 && (y === GA || [Zt, ie].indexOf(y) !== -1 && t[v + 1] === GA) || [Zt, ie].indexOf(b) !== -1 && y === GA || b === GA && [GA, kt, _t].indexOf(y) !== -1)
    return dA;
  if ([GA, kt, _t, ke, qt].indexOf(y) !== -1)
    for (var E = B; E >= 0; ) {
      if ((I = t[E]) === GA)
        return dA;
      if ([kt, _t].indexOf(I) === -1)
        break;
      E--;
    }
  if ([ne, re].indexOf(y) !== -1)
    for (E = [ke, qt].indexOf(b) !== -1 ? m : B; E >= 0; ) {
      var I;
      if ((I = t[E]) === GA)
        return dA;
      if ([kt, _t].indexOf(I) === -1)
        break;
      E--;
    }
  if (cr === b && [cr, Je, or, ar].indexOf(y) !== -1 || [Je, or].indexOf(b) !== -1 && [Je, qe].indexOf(y) !== -1 || [qe, ar].indexOf(b) !== -1 && y === qe || In.indexOf(b) !== -1 && [kn, re].indexOf(y) !== -1 || In.indexOf(y) !== -1 && b === ne || ot.indexOf(b) !== -1 && ot.indexOf(y) !== -1 || b === _t && ot.indexOf(y) !== -1 || ot.concat(GA).indexOf(b) !== -1 && y === Zt && Oa.indexOf(e[v]) === -1 || ot.concat(GA).indexOf(y) !== -1 && b === qt)
    return dA;
  if (b === 41 && y === 41) {
    for (var M = n[B], O = 1; M > 0 && t[--M] === 41; )
      O++;
    if (O % 2 != 0)
      return dA;
  }
  return b === Se && y === Te ? dA : Ie;
}, Pa = function(e, t) {
  t || (t = { lineBreak: "normal", wordBreak: "normal" });
  var n = function(v, b) {
    b === void 0 && (b = "strict");
    var Q = [], y = [], E = [];
    return v.forEach(function(I, M) {
      var O = lr.get(I);
      if (O > 50 ? (E.push(!0), O -= 50) : E.push(!1), ["normal", "auto", "loose"].indexOf(b) !== -1 && [8208, 8211, 12316, 12448].indexOf(I) !== -1)
        return y.push(M), Q.push(16);
      if (O === 4 || O === 11) {
        if (M === 0)
          return y.push(M), Q.push(Lt);
        var R = Q[M - 1];
        return La.indexOf(R) === -1 ? (y.push(y[M - 1]), Q.push(R)) : (y.push(M), Q.push(Lt));
      }
      return y.push(M), O === 31 ? Q.push(b === "strict" ? sr : le) : O === Sn || O === 29 ? Q.push(Lt) : O === 43 ? I >= 131072 && I <= 196605 || I >= 196608 && I <= 262141 ? Q.push(le) : Q.push(Lt) : void Q.push(O);
    }), [y, Q, E];
  }(e, t.lineBreak), l = n[0], g = n[1], B = n[2];
  t.wordBreak !== "break-all" && t.wordBreak !== "break-word" || (g = g.map(function(v) {
    return [GA, Lt, Sn].indexOf(v) !== -1 ? le : v;
  }));
  var m = t.wordBreak === "keep-all" ? B.map(function(v, b) {
    return v && e[b] >= 19968 && e[b] <= 40959;
  }) : void 0;
  return [l, g, m];
}, Ka = function() {
  function e(t, n, l, g) {
    this.codePoints = t, this.required = n === "!", this.start = l, this.end = g;
  }
  return e.prototype.slice = function() {
    return EA.apply(void 0, this.codePoints.slice(this.start, this.end));
  }, e;
}(), RA = 45, Ft = 43, At = -1, PA = function(e) {
  return e >= 48 && e <= 57;
}, St = function(e) {
  return PA(e) || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}, He = function(e) {
  return e === 10 || e === 9 || e === 32;
}, si = function(e) {
  return function(t) {
    return function(n) {
      return n >= 97 && n <= 122;
    }(t) || function(n) {
      return n >= 65 && n <= 90;
    }(t);
  }(e) || function(t) {
    return t >= 128;
  }(e) || e === 95;
}, On = function(e) {
  return si(e) || PA(e) || e === RA;
}, Ra = function(e) {
  return e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e === 127;
}, gt = function(e, t) {
  return e === 92 && t !== 10;
}, Oe = function(e, t, n) {
  return e === RA ? si(t) || gt(t, n) : !!si(e) || !(e !== 92 || !gt(e, t));
}, Vi = function(e, t, n) {
  return e === Ft || e === RA ? !!PA(t) || t === 46 && PA(n) : PA(e === 46 ? t : e);
}, ja = function(e) {
  var t = 0, n = 1;
  e[t] !== Ft && e[t] !== RA || (e[t] === RA && (n = -1), t++);
  for (var l = []; PA(e[t]); )
    l.push(e[t++]);
  var g = l.length ? parseInt(EA.apply(void 0, l), 10) : 0;
  e[t] === 46 && t++;
  for (var B = []; PA(e[t]); )
    B.push(e[t++]);
  var m = B.length, v = m ? parseInt(EA.apply(void 0, B), 10) : 0;
  e[t] !== 69 && e[t] !== 101 || t++;
  var b = 1;
  e[t] !== Ft && e[t] !== RA || (e[t] === RA && (b = -1), t++);
  for (var Q = []; PA(e[t]); )
    Q.push(e[t++]);
  var y = Q.length ? parseInt(EA.apply(void 0, Q), 10) : 0;
  return n * (g + v * Math.pow(10, -m)) * Math.pow(10, b * y);
}, Va = { type: 2 }, Ga = { type: 3 }, Na = { type: 4 }, Xa = { type: 13 }, Wa = { type: 8 }, Ya = { type: 21 }, za = { type: 9 }, Ja = { type: 10 }, qa = { type: 11 }, Za = { type: 12 }, $a = { type: 14 }, Le = { type: 23 }, Ac = { type: 1 }, tc = { type: 25 }, ec = { type: 24 }, ic = { type: 26 }, rc = { type: 27 }, nc = { type: 28 }, sc = { type: 29 }, oc = { type: 31 }, ur = { type: 32 }, Ds = function() {
  function e() {
    this._value = [];
  }
  return e.prototype.write = function(t) {
    this._value = this._value.concat(ni(t));
  }, e.prototype.read = function() {
    for (var t = [], n = this.consumeToken(); n !== ur; )
      t.push(n), n = this.consumeToken();
    return t;
  }, e.prototype.consumeToken = function() {
    var t = this.consumeCodePoint();
    switch (t) {
      case 34:
        return this.consumeStringToken(34);
      case 35:
        var n = this.peekCodePoint(0), l = this.peekCodePoint(1), g = this.peekCodePoint(2);
        if (On(n) || gt(l, g)) {
          var B = Oe(n, l, g) ? 2 : 1;
          return { type: 5, value: this.consumeName(), flags: B };
        }
        break;
      case 36:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), Xa;
        break;
      case 39:
        return this.consumeStringToken(39);
      case 40:
        return Va;
      case 41:
        return Ga;
      case 42:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), $a;
        break;
      case Ft:
        if (Vi(t, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(t), this.consumeNumericToken();
        break;
      case 44:
        return Na;
      case RA:
        var m = t, v = this.peekCodePoint(0), b = this.peekCodePoint(1);
        if (Vi(m, v, b))
          return this.reconsumeCodePoint(t), this.consumeNumericToken();
        if (Oe(m, v, b))
          return this.reconsumeCodePoint(t), this.consumeIdentLikeToken();
        if (v === RA && b === 62)
          return this.consumeCodePoint(), this.consumeCodePoint(), ec;
        break;
      case 46:
        if (Vi(t, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(t), this.consumeNumericToken();
        break;
      case 47:
        if (this.peekCodePoint(0) === 42)
          for (this.consumeCodePoint(); ; ) {
            var Q = this.consumeCodePoint();
            if (Q === 42 && (Q = this.consumeCodePoint()) === 47)
              return this.consumeToken();
            if (Q === At)
              return this.consumeToken();
          }
        break;
      case 58:
        return ic;
      case 59:
        return rc;
      case 60:
        if (this.peekCodePoint(0) === 33 && this.peekCodePoint(1) === RA && this.peekCodePoint(2) === RA)
          return this.consumeCodePoint(), this.consumeCodePoint(), tc;
        break;
      case 64:
        var y = this.peekCodePoint(0), E = this.peekCodePoint(1), I = this.peekCodePoint(2);
        if (Oe(y, E, I))
          return { type: 7, value: this.consumeName() };
        break;
      case 91:
        return nc;
      case 92:
        if (gt(t, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(t), this.consumeIdentLikeToken();
        break;
      case 93:
        return sc;
      case 61:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), Wa;
        break;
      case 123:
        return qa;
      case 125:
        return Za;
      case 117:
      case 85:
        var M = this.peekCodePoint(0), O = this.peekCodePoint(1);
        return M !== Ft || !St(O) && O !== 63 || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(t), this.consumeIdentLikeToken();
      case 124:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), za;
        if (this.peekCodePoint(0) === 124)
          return this.consumeCodePoint(), Ya;
        break;
      case 126:
        if (this.peekCodePoint(0) === 61)
          return this.consumeCodePoint(), Ja;
        break;
      case At:
        return ur;
    }
    return He(t) ? (this.consumeWhiteSpace(), oc) : PA(t) ? (this.reconsumeCodePoint(t), this.consumeNumericToken()) : si(t) ? (this.reconsumeCodePoint(t), this.consumeIdentLikeToken()) : { type: 6, value: EA(t) };
  }, e.prototype.consumeCodePoint = function() {
    var t = this._value.shift();
    return t === void 0 ? -1 : t;
  }, e.prototype.reconsumeCodePoint = function(t) {
    this._value.unshift(t);
  }, e.prototype.peekCodePoint = function(t) {
    return t >= this._value.length ? -1 : this._value[t];
  }, e.prototype.consumeUnicodeRangeToken = function() {
    for (var t = [], n = this.consumeCodePoint(); St(n) && t.length < 6; )
      t.push(n), n = this.consumeCodePoint();
    for (var l = !1; n === 63 && t.length < 6; )
      t.push(n), n = this.consumeCodePoint(), l = !0;
    if (l)
      return { type: 30, start: parseInt(EA.apply(void 0, t.map(function(m) {
        return m === 63 ? 48 : m;
      })), 16), end: parseInt(EA.apply(void 0, t.map(function(m) {
        return m === 63 ? 70 : m;
      })), 16) };
    var g = parseInt(EA.apply(void 0, t), 16);
    if (this.peekCodePoint(0) === RA && St(this.peekCodePoint(1))) {
      this.consumeCodePoint(), n = this.consumeCodePoint();
      for (var B = []; St(n) && B.length < 6; )
        B.push(n), n = this.consumeCodePoint();
      return { type: 30, start: g, end: parseInt(EA.apply(void 0, B), 16) };
    }
    return { type: 30, start: g, end: g };
  }, e.prototype.consumeIdentLikeToken = function() {
    var t = this.consumeName();
    return t.toLowerCase() === "url" && this.peekCodePoint(0) === 40 ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === 40 ? (this.consumeCodePoint(), { type: 19, value: t }) : { type: 20, value: t };
  }, e.prototype.consumeUrlToken = function() {
    var t = [];
    if (this.consumeWhiteSpace(), this.peekCodePoint(0) === At)
      return { type: 22, value: "" };
    var n = this.peekCodePoint(0);
    if (n === 39 || n === 34) {
      var l = this.consumeStringToken(this.consumeCodePoint());
      return l.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === At || this.peekCodePoint(0) === 41) ? (this.consumeCodePoint(), { type: 22, value: l.value }) : (this.consumeBadUrlRemnants(), Le);
    }
    for (; ; ) {
      var g = this.consumeCodePoint();
      if (g === At || g === 41)
        return { type: 22, value: EA.apply(void 0, t) };
      if (He(g))
        return this.consumeWhiteSpace(), this.peekCodePoint(0) === At || this.peekCodePoint(0) === 41 ? (this.consumeCodePoint(), { type: 22, value: EA.apply(void 0, t) }) : (this.consumeBadUrlRemnants(), Le);
      if (g === 34 || g === 39 || g === 40 || Ra(g))
        return this.consumeBadUrlRemnants(), Le;
      if (g === 92) {
        if (!gt(g, this.peekCodePoint(0)))
          return this.consumeBadUrlRemnants(), Le;
        t.push(this.consumeEscapedCodePoint());
      } else
        t.push(g);
    }
  }, e.prototype.consumeWhiteSpace = function() {
    for (; He(this.peekCodePoint(0)); )
      this.consumeCodePoint();
  }, e.prototype.consumeBadUrlRemnants = function() {
    for (; ; ) {
      var t = this.consumeCodePoint();
      if (t === 41 || t === At)
        return;
      gt(t, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
    }
  }, e.prototype.consumeStringSlice = function(t) {
    for (var n = ""; t > 0; ) {
      var l = Math.min(5e4, t);
      n += EA.apply(void 0, this._value.splice(0, l)), t -= l;
    }
    return this._value.shift(), n;
  }, e.prototype.consumeStringToken = function(t) {
    for (var n = "", l = 0; ; ) {
      var g = this._value[l];
      if (g === At || g === void 0 || g === t)
        return { type: 0, value: n += this.consumeStringSlice(l) };
      if (g === 10)
        return this._value.splice(0, l), Ac;
      if (g === 92) {
        var B = this._value[l + 1];
        B !== At && B !== void 0 && (B === 10 ? (n += this.consumeStringSlice(l), l = -1, this._value.shift()) : gt(g, B) && (n += this.consumeStringSlice(l), n += EA(this.consumeEscapedCodePoint()), l = -1));
      }
      l++;
    }
  }, e.prototype.consumeNumber = function() {
    var t = [], n = 4, l = this.peekCodePoint(0);
    for (l !== Ft && l !== RA || t.push(this.consumeCodePoint()); PA(this.peekCodePoint(0)); )
      t.push(this.consumeCodePoint());
    l = this.peekCodePoint(0);
    var g = this.peekCodePoint(1);
    if (l === 46 && PA(g))
      for (t.push(this.consumeCodePoint(), this.consumeCodePoint()), n = 8; PA(this.peekCodePoint(0)); )
        t.push(this.consumeCodePoint());
    l = this.peekCodePoint(0), g = this.peekCodePoint(1);
    var B = this.peekCodePoint(2);
    if ((l === 69 || l === 101) && ((g === Ft || g === RA) && PA(B) || PA(g)))
      for (t.push(this.consumeCodePoint(), this.consumeCodePoint()), n = 8; PA(this.peekCodePoint(0)); )
        t.push(this.consumeCodePoint());
    return [ja(t), n];
  }, e.prototype.consumeNumericToken = function() {
    var t = this.consumeNumber(), n = t[0], l = t[1], g = this.peekCodePoint(0), B = this.peekCodePoint(1), m = this.peekCodePoint(2);
    return Oe(g, B, m) ? { type: 15, number: n, flags: l, unit: this.consumeName() } : g === 37 ? (this.consumeCodePoint(), { type: 16, number: n, flags: l }) : { type: 17, number: n, flags: l };
  }, e.prototype.consumeEscapedCodePoint = function() {
    var t = this.consumeCodePoint();
    if (St(t)) {
      for (var n = EA(t); St(this.peekCodePoint(0)) && n.length < 6; )
        n += EA(this.consumeCodePoint());
      He(this.peekCodePoint(0)) && this.consumeCodePoint();
      var l = parseInt(n, 16);
      return l === 0 || function(g) {
        return g >= 55296 && g <= 57343;
      }(l) || l > 1114111 ? 65533 : l;
    }
    return t === At ? 65533 : t;
  }, e.prototype.consumeName = function() {
    for (var t = ""; ; ) {
      var n = this.consumeCodePoint();
      if (On(n))
        t += EA(n);
      else {
        if (!gt(n, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(n), t;
        t += EA(this.consumeEscapedCodePoint());
      }
    }
  }, e;
}(), Ms = function() {
  function e(t) {
    this._tokens = t;
  }
  return e.create = function(t) {
    var n = new Ds();
    return n.write(t), new e(n.read());
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
    var n = this.consumeComponentValue();
    do
      t = this.consumeToken();
    while (t.type === 31);
    if (t.type === 32)
      return n;
    throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
  }, e.prototype.parseComponentValues = function() {
    for (var t = []; ; ) {
      var n = this.consumeComponentValue();
      if (n.type === 32)
        return t;
      t.push(n), t.push();
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
    for (var n = { type: t, values: [] }, l = this.consumeToken(); ; ) {
      if (l.type === 32 || cc(l, t))
        return n;
      this.reconsumeToken(l), n.values.push(this.consumeComponentValue()), l = this.consumeToken();
    }
  }, e.prototype.consumeFunction = function(t) {
    for (var n = { name: t.value, values: [], type: 18 }; ; ) {
      var l = this.consumeToken();
      if (l.type === 32 || l.type === 3)
        return n;
      this.reconsumeToken(l), n.values.push(this.consumeComponentValue());
    }
  }, e.prototype.consumeToken = function() {
    var t = this._tokens.shift();
    return t === void 0 ? ur : t;
  }, e.prototype.reconsumeToken = function(t) {
    this._tokens.unshift(t);
  }, e;
}(), pe = function(e) {
  return e.type === 15;
}, Dt = function(e) {
  return e.type === 17;
}, wA = function(e) {
  return e.type === 20;
}, ac = function(e) {
  return e.type === 0;
}, dr = function(e, t) {
  return wA(e) && e.value === t;
}, Ln = function(e) {
  return e.type !== 31;
}, Xt = function(e) {
  return e.type !== 31 && e.type !== 4;
}, et = function(e) {
  var t = [], n = [];
  return e.forEach(function(l) {
    if (l.type === 4) {
      if (n.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      return t.push(n), void (n = []);
    }
    l.type !== 31 && n.push(l);
  }), n.length && t.push(n), t;
}, cc = function(e, t) {
  return t === 11 && e.type === 12 || t === 28 && e.type === 29 || t === 2 && e.type === 3;
}, Ct = function(e) {
  return e.type === 17 || e.type === 15;
}, kA = function(e) {
  return e.type === 16 || Ct(e);
}, Ps = function(e) {
  return e.length > 1 ? [e[0], e[1]] : [e[0]];
}, OA = { type: 17, number: 0, flags: 4 }, Kr = { type: 16, number: 50, flags: 4 }, pt = { type: 16, number: 100, flags: 4 }, se = function(e, t, n) {
  var l = e[0], g = e[1];
  return [mA(l, t), mA(g !== void 0 ? g : l, n)];
}, mA = function(e, t) {
  if (e.type === 16)
    return e.number / 100 * t;
  if (pe(e))
    switch (e.unit) {
      case "rem":
      case "em":
        return 16 * e.number;
      default:
        return e.number;
    }
  return e.number;
}, Ks = "grad", Rs = "turn", Qi = function(e, t) {
  if (t.type === 15)
    switch (t.unit) {
      case "deg":
        return Math.PI * t.number / 180;
      case Ks:
        return Math.PI / 200 * t.number;
      case "rad":
        return t.number;
      case Rs:
        return 2 * Math.PI * t.number;
    }
  throw new Error("Unsupported angle type");
}, js = function(e) {
  return e.type === 15 && (e.unit === "deg" || e.unit === Ks || e.unit === "rad" || e.unit === Rs);
}, Vs = function(e) {
  switch (e.filter(wA).map(function(t) {
    return t.value;
  }).join(" ")) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [OA, OA];
    case "to top":
    case "bottom":
      return JA(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [OA, pt];
    case "to right":
    case "left":
      return JA(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [pt, pt];
    case "to bottom":
    case "top":
      return JA(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [pt, OA];
    case "to left":
    case "right":
      return JA(270);
  }
  return 0;
}, JA = function(e) {
  return Math.PI * e / 180;
}, wt = function(e, t) {
  if (t.type === 18) {
    var n = lc[t.name];
    if (n === void 0)
      throw new Error('Attempting to parse an unsupported color function "' + t.name + '"');
    return n(e, t.values);
  }
  if (t.type === 5) {
    if (t.value.length === 3) {
      var l = t.value.substring(0, 1), g = t.value.substring(1, 2), B = t.value.substring(2, 3);
      return Bt(parseInt(l + l, 16), parseInt(g + g, 16), parseInt(B + B, 16), 1);
    }
    if (t.value.length === 4) {
      l = t.value.substring(0, 1), g = t.value.substring(1, 2), B = t.value.substring(2, 3);
      var m = t.value.substring(3, 4);
      return Bt(parseInt(l + l, 16), parseInt(g + g, 16), parseInt(B + B, 16), parseInt(m + m, 16) / 255);
    }
    if (t.value.length === 6)
      return l = t.value.substring(0, 2), g = t.value.substring(2, 4), B = t.value.substring(4, 6), Bt(parseInt(l, 16), parseInt(g, 16), parseInt(B, 16), 1);
    if (t.value.length === 8)
      return l = t.value.substring(0, 2), g = t.value.substring(2, 4), B = t.value.substring(4, 6), m = t.value.substring(6, 8), Bt(parseInt(l, 16), parseInt(g, 16), parseInt(B, 16), parseInt(m, 16) / 255);
  }
  if (t.type === 20) {
    var v = ht[t.value.toUpperCase()];
    if (v !== void 0)
      return v;
  }
  return ht.TRANSPARENT;
}, mt = function(e) {
  return (255 & e) == 0;
}, TA = function(e) {
  var t = 255 & e, n = 255 & e >> 8, l = 255 & e >> 16, g = 255 & e >> 24;
  return t < 255 ? "rgba(" + g + "," + l + "," + n + "," + t / 255 + ")" : "rgb(" + g + "," + l + "," + n + ")";
}, Bt = function(e, t, n, l) {
  return (e << 24 | t << 16 | n << 8 | Math.round(255 * l) << 0) >>> 0;
}, Dn = function(e, t) {
  if (e.type === 17)
    return e.number;
  if (e.type === 16) {
    var n = t === 3 ? 1 : 255;
    return t === 3 ? e.number / 100 * n : Math.round(e.number / 100 * n);
  }
  return 0;
}, Mn = function(e, t) {
  var n = t.filter(Xt);
  if (n.length === 3) {
    var l = n.map(Dn), g = l[0], B = l[1], m = l[2];
    return Bt(g, B, m, 1);
  }
  if (n.length === 4) {
    var v = n.map(Dn), b = (g = v[0], B = v[1], m = v[2], v[3]);
    return Bt(g, B, m, b);
  }
  return 0;
};
function Gi(e, t, n) {
  return n < 0 && (n += 1), n >= 1 && (n -= 1), n < 1 / 6 ? (t - e) * n * 6 + e : n < 0.5 ? t : n < 2 / 3 ? 6 * (t - e) * (2 / 3 - n) + e : e;
}
var Pn = function(e, t) {
  var n = t.filter(Xt), l = n[0], g = n[1], B = n[2], m = n[3], v = (l.type === 17 ? JA(l.number) : Qi(e, l)) / (2 * Math.PI), b = kA(g) ? g.number / 100 : 0, Q = kA(B) ? B.number / 100 : 0, y = m !== void 0 && kA(m) ? mA(m, 1) : 1;
  if (b === 0)
    return Bt(255 * Q, 255 * Q, 255 * Q, 1);
  var E = Q <= 0.5 ? Q * (b + 1) : Q + b - Q * b, I = 2 * Q - E, M = Gi(I, E, v + 1 / 3), O = Gi(I, E, v), R = Gi(I, E, v - 1 / 3);
  return Bt(255 * M, 255 * O, 255 * R, y);
}, lc = { hsl: Pn, hsla: Pn, rgb: Mn, rgba: Mn }, he = function(e, t) {
  return wt(e, Ms.create(t).parseComponentValue());
}, ht = { ALICEBLUE: 4042850303, ANTIQUEWHITE: 4209760255, AQUA: 16777215, AQUAMARINE: 2147472639, AZURE: 4043309055, BEIGE: 4126530815, BISQUE: 4293182719, BLACK: 255, BLANCHEDALMOND: 4293643775, BLUE: 65535, BLUEVIOLET: 2318131967, BROWN: 2771004159, BURLYWOOD: 3736635391, CADETBLUE: 1604231423, CHARTREUSE: 2147418367, CHOCOLATE: 3530104575, CORAL: 4286533887, CORNFLOWERBLUE: 1687547391, CORNSILK: 4294499583, CRIMSON: 3692313855, CYAN: 16777215, DARKBLUE: 35839, DARKCYAN: 9145343, DARKGOLDENROD: 3095837695, DARKGRAY: 2846468607, DARKGREEN: 6553855, DARKGREY: 2846468607, DARKKHAKI: 3182914559, DARKMAGENTA: 2332068863, DARKOLIVEGREEN: 1433087999, DARKORANGE: 4287365375, DARKORCHID: 2570243327, DARKRED: 2332033279, DARKSALMON: 3918953215, DARKSEAGREEN: 2411499519, DARKSLATEBLUE: 1211993087, DARKSLATEGRAY: 793726975, DARKSLATEGREY: 793726975, DARKTURQUOISE: 13554175, DARKVIOLET: 2483082239, DEEPPINK: 4279538687, DEEPSKYBLUE: 12582911, DIMGRAY: 1768516095, DIMGREY: 1768516095, DODGERBLUE: 512819199, FIREBRICK: 2988581631, FLORALWHITE: 4294635775, FORESTGREEN: 579543807, FUCHSIA: 4278255615, GAINSBORO: 3705462015, GHOSTWHITE: 4177068031, GOLD: 4292280575, GOLDENROD: 3668254975, GRAY: 2155905279, GREEN: 8388863, GREENYELLOW: 2919182335, GREY: 2155905279, HONEYDEW: 4043305215, HOTPINK: 4285117695, INDIANRED: 3445382399, INDIGO: 1258324735, IVORY: 4294963455, KHAKI: 4041641215, LAVENDER: 3873897215, LAVENDERBLUSH: 4293981695, LAWNGREEN: 2096890111, LEMONCHIFFON: 4294626815, LIGHTBLUE: 2916673279, LIGHTCORAL: 4034953471, LIGHTCYAN: 3774873599, LIGHTGOLDENRODYELLOW: 4210742015, LIGHTGRAY: 3553874943, LIGHTGREEN: 2431553791, LIGHTGREY: 3553874943, LIGHTPINK: 4290167295, LIGHTSALMON: 4288707327, LIGHTSEAGREEN: 548580095, LIGHTSKYBLUE: 2278488831, LIGHTSLATEGRAY: 2005441023, LIGHTSLATEGREY: 2005441023, LIGHTSTEELBLUE: 2965692159, LIGHTYELLOW: 4294959359, LIME: 16711935, LIMEGREEN: 852308735, LINEN: 4210091775, MAGENTA: 4278255615, MAROON: 2147483903, MEDIUMAQUAMARINE: 1724754687, MEDIUMBLUE: 52735, MEDIUMORCHID: 3126187007, MEDIUMPURPLE: 2473647103, MEDIUMSEAGREEN: 1018393087, MEDIUMSLATEBLUE: 2070474495, MEDIUMSPRINGGREEN: 16423679, MEDIUMTURQUOISE: 1221709055, MEDIUMVIOLETRED: 3340076543, MIDNIGHTBLUE: 421097727, MINTCREAM: 4127193855, MISTYROSE: 4293190143, MOCCASIN: 4293178879, NAVAJOWHITE: 4292783615, NAVY: 33023, OLDLACE: 4260751103, OLIVE: 2155872511, OLIVEDRAB: 1804477439, ORANGE: 4289003775, ORANGERED: 4282712319, ORCHID: 3664828159, PALEGOLDENROD: 4008225535, PALEGREEN: 2566625535, PALETURQUOISE: 2951671551, PALEVIOLETRED: 3681588223, PAPAYAWHIP: 4293907967, PEACHPUFF: 4292524543, PERU: 3448061951, PINK: 4290825215, PLUM: 3718307327, POWDERBLUE: 2967529215, PURPLE: 2147516671, REBECCAPURPLE: 1714657791, RED: 4278190335, ROSYBROWN: 3163525119, ROYALBLUE: 1097458175, SADDLEBROWN: 2336560127, SALMON: 4202722047, SANDYBROWN: 4104413439, SEAGREEN: 780883967, SEASHELL: 4294307583, SIENNA: 2689740287, SILVER: 3233857791, SKYBLUE: 2278484991, SLATEBLUE: 1784335871, SLATEGRAY: 1887473919, SLATEGREY: 1887473919, SNOW: 4294638335, SPRINGGREEN: 16744447, STEELBLUE: 1182971135, TAN: 3535047935, TEAL: 8421631, THISTLE: 3636451583, TOMATO: 4284696575, TRANSPARENT: 0, TURQUOISE: 1088475391, VIOLET: 4001558271, WHEAT: 4125012991, WHITE: 4294967295, WHITESMOKE: 4126537215, YELLOW: 4294902015, YELLOWGREEN: 2597139199 }, hc = { name: "background-clip", initialValue: "border-box", prefix: !1, type: 1, parse: function(e, t) {
  return t.map(function(n) {
    if (wA(n))
      switch (n.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, uc = { name: "background-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, oi = function(e, t) {
  var n = wt(e, t[0]), l = t[1];
  return l && kA(l) ? { color: n, stop: l } : { color: n, stop: null };
}, Kn = function(e, t) {
  var n = e[0], l = e[e.length - 1];
  n.stop === null && (n.stop = OA), l.stop === null && (l.stop = pt);
  for (var g = [], B = 0, m = 0; m < e.length; m++) {
    var v = e[m].stop;
    if (v !== null) {
      var b = mA(v, t);
      b > B ? g.push(b) : g.push(B), B = b;
    } else
      g.push(null);
  }
  var Q = null;
  for (m = 0; m < g.length; m++) {
    var y = g[m];
    if (y === null)
      Q === null && (Q = m);
    else if (Q !== null) {
      for (var E = m - Q, I = (y - g[Q - 1]) / (E + 1), M = 1; M <= E; M++)
        g[Q + M - 1] = I * M;
      Q = null;
    }
  }
  return e.map(function(O, R) {
    return { color: O.color, stop: Math.max(Math.min(1, g[R] / t), 0) };
  });
}, dc = function(e, t, n) {
  var l = typeof e == "number" ? e : function(y, E, I) {
    var M = E / 2, O = I / 2, R = mA(y[0], E) - M, p = O - mA(y[1], I);
    return (Math.atan2(p, R) + 2 * Math.PI) % (2 * Math.PI);
  }(e, t, n), g = Math.abs(t * Math.sin(l)) + Math.abs(n * Math.cos(l)), B = t / 2, m = n / 2, v = g / 2, b = Math.sin(l - Math.PI / 2) * v, Q = Math.cos(l - Math.PI / 2) * v;
  return [g, B - Q, B + Q, m - b, m + b];
}, qA = function(e, t) {
  return Math.sqrt(e * e + t * t);
}, Rn = function(e, t, n, l, g) {
  return [[0, 0], [0, t], [e, 0], [e, t]].reduce(function(B, m) {
    var v = m[0], b = m[1], Q = qA(n - v, l - b);
    return (g ? Q < B.optimumDistance : Q > B.optimumDistance) ? { optimumCorner: m, optimumDistance: Q } : B;
  }, { optimumDistance: g ? 1 / 0 : -1 / 0, optimumCorner: null }).optimumCorner;
}, De = function(e, t) {
  var n = JA(180), l = [];
  return et(t).forEach(function(g, B) {
    if (B === 0) {
      var m = g[0];
      if (m.type === 20 && ["top", "left", "right", "bottom"].indexOf(m.value) !== -1)
        return void (n = Vs(g));
      if (js(m))
        return void (n = (Qi(e, m) + JA(270)) % JA(360));
    }
    var v = oi(e, g);
    l.push(v);
  }), { angle: n, stops: l, type: 1 };
}, Gs = "closest-side", Ns = "farthest-side", Xs = "closest-corner", Ws = "farthest-corner", Ys = "circle", zs = "ellipse", Js = "cover", qs = "contain", Me = function(e, t) {
  var n = 0, l = 3, g = [], B = [];
  return et(t).forEach(function(m, v) {
    var b = !0;
    if (v === 0 ? b = m.reduce(function(y, E) {
      if (wA(E))
        switch (E.value) {
          case "center":
            return B.push(Kr), !1;
          case "top":
          case "left":
            return B.push(OA), !1;
          case "right":
          case "bottom":
            return B.push(pt), !1;
        }
      else if (kA(E) || Ct(E))
        return B.push(E), !1;
      return y;
    }, b) : v === 1 && (b = m.reduce(function(y, E) {
      if (wA(E))
        switch (E.value) {
          case Ys:
            return n = 0, !1;
          case zs:
            return n = 1, !1;
          case qs:
          case Gs:
            return l = 0, !1;
          case Ns:
            return l = 1, !1;
          case Xs:
            return l = 2, !1;
          case Js:
          case Ws:
            return l = 3, !1;
        }
      else if (Ct(E) || kA(E))
        return Array.isArray(l) || (l = []), l.push(E), !1;
      return y;
    }, b)), b) {
      var Q = oi(e, m);
      g.push(Q);
    }
  }), { size: l, shape: n, stops: g, position: B, type: 2 };
}, Rr = function(e, t) {
  if (t.type === 22) {
    var n = { url: t.value, type: 0 };
    return e.cache.addImage(t.value), n;
  }
  if (t.type === 18) {
    var l = Zs[t.name];
    if (l === void 0)
      throw new Error('Attempting to parse an unsupported image function "' + t.name + '"');
    return l(e, t.values);
  }
  throw new Error("Unsupported image type " + t.type);
}, jt, Zs = { "linear-gradient": function(e, t) {
  var n = JA(180), l = [];
  return et(t).forEach(function(g, B) {
    if (B === 0) {
      var m = g[0];
      if (m.type === 20 && m.value === "to")
        return void (n = Vs(g));
      if (js(m))
        return void (n = Qi(e, m));
    }
    var v = oi(e, g);
    l.push(v);
  }), { angle: n, stops: l, type: 1 };
}, "-moz-linear-gradient": De, "-ms-linear-gradient": De, "-o-linear-gradient": De, "-webkit-linear-gradient": De, "radial-gradient": function(e, t) {
  var n = 0, l = 3, g = [], B = [];
  return et(t).forEach(function(m, v) {
    var b = !0;
    if (v === 0) {
      var Q = !1;
      b = m.reduce(function(E, I) {
        if (Q)
          if (wA(I))
            switch (I.value) {
              case "center":
                return B.push(Kr), E;
              case "top":
              case "left":
                return B.push(OA), E;
              case "right":
              case "bottom":
                return B.push(pt), E;
            }
          else
            (kA(I) || Ct(I)) && B.push(I);
        else if (wA(I))
          switch (I.value) {
            case Ys:
              return n = 0, !1;
            case zs:
              return n = 1, !1;
            case "at":
              return Q = !0, !1;
            case Gs:
              return l = 0, !1;
            case Js:
            case Ns:
              return l = 1, !1;
            case qs:
            case Xs:
              return l = 2, !1;
            case Ws:
              return l = 3, !1;
          }
        else if (Ct(I) || kA(I))
          return Array.isArray(l) || (l = []), l.push(I), !1;
        return E;
      }, b);
    }
    if (b) {
      var y = oi(e, m);
      g.push(y);
    }
  }), { size: l, shape: n, stops: g, position: B, type: 2 };
}, "-moz-radial-gradient": Me, "-ms-radial-gradient": Me, "-o-radial-gradient": Me, "-webkit-radial-gradient": Me, "-webkit-gradient": function(e, t) {
  var n = JA(180), l = [], g = 1;
  return et(t).forEach(function(B, m) {
    var v = B[0];
    if (m === 0) {
      if (wA(v) && v.value === "linear")
        return void (g = 1);
      if (wA(v) && v.value === "radial")
        return void (g = 2);
    }
    if (v.type === 18) {
      if (v.name === "from") {
        var b = wt(e, v.values[0]);
        l.push({ stop: OA, color: b });
      } else if (v.name === "to")
        b = wt(e, v.values[0]), l.push({ stop: pt, color: b });
      else if (v.name === "color-stop") {
        var Q = v.values.filter(Xt);
        if (Q.length === 2) {
          b = wt(e, Q[1]);
          var y = Q[0];
          Dt(y) && l.push({ stop: { type: 16, number: 100 * y.number, flags: y.flags }, color: b });
        }
      }
    }
  }), g === 1 ? { angle: (n + JA(180)) % JA(360), stops: l, type: g } : { size: 3, shape: 0, stops: l, position: [], type: g };
} }, gc = { name: "background-image", initialValue: "none", type: 1, prefix: !1, parse: function(e, t) {
  if (t.length === 0)
    return [];
  var n = t[0];
  return n.type === 20 && n.value === "none" ? [] : t.filter(function(l) {
    return Xt(l) && function(g) {
      return !(g.type === 20 && g.value === "none" || g.type === 18 && !Zs[g.name]);
    }(l);
  }).map(function(l) {
    return Rr(e, l);
  });
} }, fc = { name: "background-origin", initialValue: "border-box", prefix: !1, type: 1, parse: function(e, t) {
  return t.map(function(n) {
    if (wA(n))
      switch (n.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, pc = { name: "background-position", initialValue: "0% 0%", type: 1, prefix: !1, parse: function(e, t) {
  return et(t).map(function(n) {
    return n.filter(kA);
  }).map(Ps);
} }, Bc = { name: "background-repeat", initialValue: "repeat", prefix: !1, type: 1, parse: function(e, t) {
  return et(t).map(function(n) {
    return n.filter(wA).map(function(l) {
      return l.value;
    }).join(" ");
  }).map(wc);
} }, wc = function(e) {
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
})(jt || (jt = {}));
var ai, mc = { name: "background-size", initialValue: "0", prefix: !1, type: 1, parse: function(e, t) {
  return et(t).map(function(n) {
    return n.filter(Cc);
  });
} }, Cc = function(e) {
  return wA(e) || kA(e);
}, Fi = function(e) {
  return { name: "border-" + e + "-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" };
}, vc = Fi("top"), yc = Fi("right"), bc = Fi("bottom"), Qc = Fi("left"), xi = function(e) {
  return { name: "border-radius-" + e, initialValue: "0 0", prefix: !1, type: 1, parse: function(t, n) {
    return Ps(n.filter(kA));
  } };
}, Fc = xi("top-left"), xc = xi("top-right"), Uc = xi("bottom-right"), Ec = xi("bottom-left"), Ui = function(e) {
  return { name: "border-" + e + "-style", initialValue: "solid", prefix: !1, type: 2, parse: function(t, n) {
    switch (n) {
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
}, _c = Ui("top"), kc = Ui("right"), Sc = Ui("bottom"), Tc = Ui("left"), Ei = function(e) {
  return { name: "border-" + e + "-width", initialValue: "0", type: 0, prefix: !1, parse: function(t, n) {
    return pe(n) ? n.number : 0;
  } };
}, Ic = Ei("top"), Hc = Ei("right"), Oc = Ei("bottom"), Lc = Ei("left"), Dc = { name: "color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, Mc = { name: "direction", initialValue: "ltr", prefix: !1, type: 2, parse: function(e, t) {
  return t === "rtl" ? 1 : 0;
} }, Pc = { name: "display", initialValue: "inline-block", prefix: !1, type: 1, parse: function(e, t) {
  return t.filter(wA).reduce(function(n, l) {
    return n | Kc(l.value);
  }, 0);
} }, Kc = function(e) {
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
}, Rc = { name: "float", initialValue: "none", prefix: !1, type: 2, parse: function(e, t) {
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
} }, jc = { name: "letter-spacing", initialValue: "0", prefix: !1, type: 0, parse: function(e, t) {
  return t.type === 20 && t.value === "normal" ? 0 : t.type === 17 || t.type === 15 ? t.number : 0;
} };
(function(e) {
  e.NORMAL = "normal", e.STRICT = "strict";
})(ai || (ai = {}));
var ue, Vc = { name: "line-break", initialValue: "normal", prefix: !1, type: 2, parse: function(e, t) {
  return t === "strict" ? ai.STRICT : ai.NORMAL;
} }, Gc = { name: "line-height", initialValue: "normal", prefix: !1, type: 4 }, jn = function(e, t) {
  return wA(e) && e.value === "normal" ? 1.2 * t : e.type === 17 ? t * e.number : kA(e) ? mA(e, t) : t;
}, Nc = { name: "list-style-image", initialValue: "none", type: 0, prefix: !1, parse: function(e, t) {
  return t.type === 20 && t.value === "none" ? null : Rr(e, t);
} }, Xc = { name: "list-style-position", initialValue: "outside", prefix: !1, type: 2, parse: function(e, t) {
  return t === "inside" ? 0 : 1;
} }, gr = { name: "list-style-type", initialValue: "none", prefix: !1, type: 2, parse: function(e, t) {
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
} }, _i = function(e) {
  return { name: "margin-" + e, initialValue: "0", prefix: !1, type: 4 };
}, Wc = _i("top"), Yc = _i("right"), zc = _i("bottom"), Jc = _i("left"), qc = { name: "overflow", initialValue: "visible", prefix: !1, type: 1, parse: function(e, t) {
  return t.filter(wA).map(function(n) {
    switch (n.value) {
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
} }, Zc = { name: "overflow-wrap", initialValue: "normal", prefix: !1, type: 2, parse: function(e, t) {
  return t === "break-word" ? "break-word" : "normal";
} }, ki = function(e) {
  return { name: "padding-" + e, initialValue: "0", prefix: !1, type: 3, format: "length-percentage" };
}, $c = ki("top"), Al = ki("right"), tl = ki("bottom"), el = ki("left"), il = { name: "text-align", initialValue: "left", prefix: !1, type: 2, parse: function(e, t) {
  switch (t) {
    case "right":
      return 2;
    case "center":
    case "justify":
      return 1;
    default:
      return 0;
  }
} }, rl = { name: "position", initialValue: "static", prefix: !1, type: 2, parse: function(e, t) {
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
} }, nl = { name: "text-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(e, t) {
  return t.length === 1 && dr(t[0], "none") ? [] : et(t).map(function(n) {
    for (var l = { color: ht.TRANSPARENT, offsetX: OA, offsetY: OA, blur: OA }, g = 0, B = 0; B < n.length; B++) {
      var m = n[B];
      Ct(m) ? (g === 0 ? l.offsetX = m : g === 1 ? l.offsetY = m : l.blur = m, g++) : l.color = wt(e, m);
    }
    return l;
  });
} }, sl = { name: "text-transform", initialValue: "none", prefix: !1, type: 2, parse: function(e, t) {
  switch (t) {
    case "uppercase":
      return 2;
    case "lowercase":
      return 1;
    case "capitalize":
      return 3;
  }
  return 0;
} }, ol = { name: "transform", initialValue: "none", prefix: !0, type: 0, parse: function(e, t) {
  if (t.type === 20 && t.value === "none")
    return null;
  if (t.type === 18) {
    var n = al[t.name];
    if (n === void 0)
      throw new Error('Attempting to parse an unsupported transform function "' + t.name + '"');
    return n(t.values);
  }
  return null;
} }, al = { matrix: function(e) {
  var t = e.filter(function(n) {
    return n.type === 17;
  }).map(function(n) {
    return n.number;
  });
  return t.length === 6 ? t : null;
}, matrix3d: function(e) {
  var t = e.filter(function(b) {
    return b.type === 17;
  }).map(function(b) {
    return b.number;
  }), n = t[0], l = t[1];
  t[2], t[3];
  var g = t[4], B = t[5];
  t[6], t[7], t[8], t[9], t[10], t[11];
  var m = t[12], v = t[13];
  return t[14], t[15], t.length === 16 ? [n, l, g, B, m, v] : null;
} }, Vn = { type: 16, number: 50, flags: 4 }, cl = [Vn, Vn], ll = { name: "transform-origin", initialValue: "50% 50%", prefix: !0, type: 1, parse: function(e, t) {
  var n = t.filter(kA);
  return n.length !== 2 ? cl : [n[0], n[1]];
} }, hl = { name: "visible", initialValue: "none", prefix: !1, type: 2, parse: function(e, t) {
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
})(ue || (ue = {}));
for (var ul = { name: "word-break", initialValue: "normal", prefix: !1, type: 2, parse: function(e, t) {
  switch (t) {
    case "break-all":
      return ue.BREAK_ALL;
    case "keep-all":
      return ue.KEEP_ALL;
    default:
      return ue.NORMAL;
  }
} }, dl = { name: "z-index", initialValue: "auto", prefix: !1, type: 0, parse: function(e, t) {
  if (t.type === 20)
    return { auto: !0, order: 0 };
  if (Dt(t))
    return { auto: !1, order: t.number };
  throw new Error("Invalid z-index number parsed");
} }, Gn = function(e, t) {
  if (t.type === 15)
    switch (t.unit.toLowerCase()) {
      case "s":
        return 1e3 * t.number;
      case "ms":
        return t.number;
    }
  throw new Error("Unsupported time type");
}, gl = { name: "opacity", initialValue: "1", type: 0, prefix: !1, parse: function(e, t) {
  return Dt(t) ? t.number : 1;
} }, fl = { name: "text-decoration-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, pl = { name: "text-decoration-line", initialValue: "none", prefix: !1, type: 1, parse: function(e, t) {
  return t.filter(wA).map(function(n) {
    switch (n.value) {
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
  }).filter(function(n) {
    return n !== 0;
  });
} }, Bl = { name: "font-family", initialValue: "", prefix: !1, type: 1, parse: function(e, t) {
  var n = [], l = [];
  return t.forEach(function(g) {
    switch (g.type) {
      case 20:
      case 0:
        n.push(g.value);
        break;
      case 17:
        n.push(g.number.toString());
        break;
      case 4:
        l.push(n.join(" ")), n.length = 0;
    }
  }), n.length && l.push(n.join(" ")), l.map(function(g) {
    return g.indexOf(" ") === -1 ? g : "'" + g + "'";
  });
} }, wl = { name: "font-size", initialValue: "0", prefix: !1, type: 3, format: "length" }, ml = { name: "font-weight", initialValue: "normal", type: 0, prefix: !1, parse: function(e, t) {
  return Dt(t) ? t.number : wA(t) && t.value === "bold" ? 700 : 400;
} }, Cl = { name: "font-variant", initialValue: "none", type: 1, prefix: !1, parse: function(e, t) {
  return t.filter(wA).map(function(n) {
    return n.value;
  });
} }, vl = { name: "font-style", initialValue: "normal", prefix: !1, type: 2, parse: function(e, t) {
  switch (t) {
    case "oblique":
      return "oblique";
    case "italic":
      return "italic";
    default:
      return "normal";
  }
} }, SA = function(e, t) {
  return (e & t) != 0;
}, yl = { name: "content", initialValue: "none", type: 1, prefix: !1, parse: function(e, t) {
  if (t.length === 0)
    return [];
  var n = t[0];
  return n.type === 20 && n.value === "none" ? [] : t;
} }, bl = { name: "counter-increment", initialValue: "none", prefix: !0, type: 1, parse: function(e, t) {
  if (t.length === 0)
    return null;
  var n = t[0];
  if (n.type === 20 && n.value === "none")
    return null;
  for (var l = [], g = t.filter(Ln), B = 0; B < g.length; B++) {
    var m = g[B], v = g[B + 1];
    if (m.type === 20) {
      var b = v && Dt(v) ? v.number : 1;
      l.push({ counter: m.value, increment: b });
    }
  }
  return l;
} }, Ql = { name: "counter-reset", initialValue: "none", prefix: !0, type: 1, parse: function(e, t) {
  if (t.length === 0)
    return [];
  for (var n = [], l = t.filter(Ln), g = 0; g < l.length; g++) {
    var B = l[g], m = l[g + 1];
    if (wA(B) && B.value !== "none") {
      var v = m && Dt(m) ? m.number : 0;
      n.push({ counter: B.value, reset: v });
    }
  }
  return n;
} }, Fl = { name: "duration", initialValue: "0s", prefix: !1, type: 1, parse: function(e, t) {
  return t.filter(pe).map(function(n) {
    return Gn(e, n);
  });
} }, xl = { name: "quotes", initialValue: "none", prefix: !0, type: 1, parse: function(e, t) {
  if (t.length === 0)
    return null;
  var n = t[0];
  if (n.type === 20 && n.value === "none")
    return null;
  var l = [], g = t.filter(ac);
  if (g.length % 2 != 0)
    return null;
  for (var B = 0; B < g.length; B += 2) {
    var m = g[B].value, v = g[B + 1].value;
    l.push({ open: m, close: v });
  }
  return l;
} }, Nn = function(e, t, n) {
  if (!e)
    return "";
  var l = e[Math.min(t, e.length - 1)];
  return l ? n ? l.open : l.close : "";
}, Ul = { name: "box-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(e, t) {
  return t.length === 1 && dr(t[0], "none") ? [] : et(t).map(function(n) {
    for (var l = { color: 255, offsetX: OA, offsetY: OA, blur: OA, spread: OA, inset: !1 }, g = 0, B = 0; B < n.length; B++) {
      var m = n[B];
      dr(m, "inset") ? l.inset = !0 : Ct(m) ? (g === 0 ? l.offsetX = m : g === 1 ? l.offsetY = m : g === 2 ? l.blur = m : l.spread = m, g++) : l.color = wt(e, m);
    }
    return l;
  });
} }, El = { name: "paint-order", initialValue: "normal", prefix: !1, type: 1, parse: function(e, t) {
  var n = [];
  return t.filter(wA).forEach(function(l) {
    switch (l.value) {
      case "stroke":
        n.push(1);
        break;
      case "fill":
        n.push(0);
        break;
      case "markers":
        n.push(2);
    }
  }), [0, 1, 2].forEach(function(l) {
    n.indexOf(l) === -1 && n.push(l);
  }), n;
} }, _l = { name: "-webkit-text-stroke-color", initialValue: "currentcolor", prefix: !1, type: 3, format: "color" }, kl = { name: "-webkit-text-stroke-width", initialValue: "0", type: 0, prefix: !1, parse: function(e, t) {
  return pe(t) ? t.number : 0;
} }, Sl = function() {
  function e(t, n) {
    var l, g;
    this.animationDuration = cA(t, Fl, n.animationDuration), this.backgroundClip = cA(t, hc, n.backgroundClip), this.backgroundColor = cA(t, uc, n.backgroundColor), this.backgroundImage = cA(t, gc, n.backgroundImage), this.backgroundOrigin = cA(t, fc, n.backgroundOrigin), this.backgroundPosition = cA(t, pc, n.backgroundPosition), this.backgroundRepeat = cA(t, Bc, n.backgroundRepeat), this.backgroundSize = cA(t, mc, n.backgroundSize), this.borderTopColor = cA(t, vc, n.borderTopColor), this.borderRightColor = cA(t, yc, n.borderRightColor), this.borderBottomColor = cA(t, bc, n.borderBottomColor), this.borderLeftColor = cA(t, Qc, n.borderLeftColor), this.borderTopLeftRadius = cA(t, Fc, n.borderTopLeftRadius), this.borderTopRightRadius = cA(t, xc, n.borderTopRightRadius), this.borderBottomRightRadius = cA(t, Uc, n.borderBottomRightRadius), this.borderBottomLeftRadius = cA(t, Ec, n.borderBottomLeftRadius), this.borderTopStyle = cA(t, _c, n.borderTopStyle), this.borderRightStyle = cA(t, kc, n.borderRightStyle), this.borderBottomStyle = cA(t, Sc, n.borderBottomStyle), this.borderLeftStyle = cA(t, Tc, n.borderLeftStyle), this.borderTopWidth = cA(t, Ic, n.borderTopWidth), this.borderRightWidth = cA(t, Hc, n.borderRightWidth), this.borderBottomWidth = cA(t, Oc, n.borderBottomWidth), this.borderLeftWidth = cA(t, Lc, n.borderLeftWidth), this.boxShadow = cA(t, Ul, n.boxShadow), this.color = cA(t, Dc, n.color), this.direction = cA(t, Mc, n.direction), this.display = cA(t, Pc, n.display), this.float = cA(t, Rc, n.cssFloat), this.fontFamily = cA(t, Bl, n.fontFamily), this.fontSize = cA(t, wl, n.fontSize), this.fontStyle = cA(t, vl, n.fontStyle), this.fontVariant = cA(t, Cl, n.fontVariant), this.fontWeight = cA(t, ml, n.fontWeight), this.letterSpacing = cA(t, jc, n.letterSpacing), this.lineBreak = cA(t, Vc, n.lineBreak), this.lineHeight = cA(t, Gc, n.lineHeight), this.listStyleImage = cA(t, Nc, n.listStyleImage), this.listStylePosition = cA(t, Xc, n.listStylePosition), this.listStyleType = cA(t, gr, n.listStyleType), this.marginTop = cA(t, Wc, n.marginTop), this.marginRight = cA(t, Yc, n.marginRight), this.marginBottom = cA(t, zc, n.marginBottom), this.marginLeft = cA(t, Jc, n.marginLeft), this.opacity = cA(t, gl, n.opacity);
    var B = cA(t, qc, n.overflow);
    this.overflowX = B[0], this.overflowY = B[B.length > 1 ? 1 : 0], this.overflowWrap = cA(t, Zc, n.overflowWrap), this.paddingTop = cA(t, $c, n.paddingTop), this.paddingRight = cA(t, Al, n.paddingRight), this.paddingBottom = cA(t, tl, n.paddingBottom), this.paddingLeft = cA(t, el, n.paddingLeft), this.paintOrder = cA(t, El, n.paintOrder), this.position = cA(t, rl, n.position), this.textAlign = cA(t, il, n.textAlign), this.textDecorationColor = cA(t, fl, (l = n.textDecorationColor) !== null && l !== void 0 ? l : n.color), this.textDecorationLine = cA(t, pl, (g = n.textDecorationLine) !== null && g !== void 0 ? g : n.textDecoration), this.textShadow = cA(t, nl, n.textShadow), this.textTransform = cA(t, sl, n.textTransform), this.transform = cA(t, ol, n.transform), this.transformOrigin = cA(t, ll, n.transformOrigin), this.visibility = cA(t, hl, n.visibility), this.webkitTextStrokeColor = cA(t, _l, n.webkitTextStrokeColor), this.webkitTextStrokeWidth = cA(t, kl, n.webkitTextStrokeWidth), this.wordBreak = cA(t, ul, n.wordBreak), this.zIndex = cA(t, dl, n.zIndex);
  }
  return e.prototype.isVisible = function() {
    return this.display > 0 && this.opacity > 0 && this.visibility === 0;
  }, e.prototype.isTransparent = function() {
    return mt(this.backgroundColor);
  }, e.prototype.isTransformed = function() {
    return this.transform !== null;
  }, e.prototype.isPositioned = function() {
    return this.position !== 0;
  }, e.prototype.isPositionedWithZIndex = function() {
    return this.isPositioned() && !this.zIndex.auto;
  }, e.prototype.isFloating = function() {
    return this.float !== 0;
  }, e.prototype.isInlineLevel = function() {
    return SA(this.display, 4) || SA(this.display, 33554432) || SA(this.display, 268435456) || SA(this.display, 536870912) || SA(this.display, 67108864) || SA(this.display, 134217728);
  }, e;
}(), Tl = function(e, t) {
  this.content = cA(e, yl, t.content), this.quotes = cA(e, xl, t.quotes);
}, Xn = function(e, t) {
  this.counterIncrement = cA(e, bl, t.counterIncrement), this.counterReset = cA(e, Ql, t.counterReset);
}, cA = function(e, t, n) {
  var l = new Ds(), g = n != null ? n.toString() : t.initialValue;
  l.write(g);
  var B = new Ms(l.read());
  switch (t.type) {
    case 2:
      var m = B.parseComponentValue();
      return t.parse(e, wA(m) ? m.value : t.initialValue);
    case 0:
      return t.parse(e, B.parseComponentValue());
    case 1:
      return t.parse(e, B.parseComponentValues());
    case 4:
      return B.parseComponentValue();
    case 3:
      switch (t.format) {
        case "angle":
          return Qi(e, B.parseComponentValue());
        case "color":
          return wt(e, B.parseComponentValue());
        case "image":
          return Rr(e, B.parseComponentValue());
        case "length":
          var v = B.parseComponentValue();
          return Ct(v) ? v : OA;
        case "length-percentage":
          var b = B.parseComponentValue();
          return kA(b) ? b : OA;
        case "time":
          return Gn(e, B.parseComponentValue());
      }
  }
}, fr = function(e, t) {
  var n = function(l) {
    switch (l.getAttribute("data-html2canvas-debug")) {
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
  return n === 1 || t === n;
}, rt = function(e, t) {
  this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, fr(t, 3), this.styles = new Sl(e, window.getComputedStyle(t, null)), wr(t) && (this.styles.animationDuration.some(function(n) {
    return n > 0;
  }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = bi(this.context, t), fr(t, 4) && (this.flags |= 16);
}, Il = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", oe = typeof Uint8Array > "u" ? [] : new Uint8Array(256), Pe = 0; Pe < 64; Pe++)
  oe[Il.charCodeAt(Pe)] = Pe;
for (var Wn = function(e, t, n) {
  return e.slice ? e.slice(t, n) : new Uint16Array(Array.prototype.slice.call(e, t, n));
}, Hl = function() {
  function e(t, n, l, g, B, m) {
    this.initialValue = t, this.errorValue = n, this.highStart = l, this.highValueIndex = g, this.index = B, this.data = m;
  }
  return e.prototype.get = function(t) {
    var n;
    if (t >= 0) {
      if (t < 55296 || t > 56319 && t <= 65535)
        return n = ((n = this.index[t >> 5]) << 2) + (31 & t), this.data[n];
      if (t <= 65535)
        return n = ((n = this.index[2048 + (t - 55296 >> 5)]) << 2) + (31 & t), this.data[n];
      if (t < this.highStart)
        return n = 2080 + (t >> 11), n = this.index[n], n += t >> 5 & 63, n = ((n = this.index[n]) << 2) + (31 & t), this.data[n];
      if (t <= 1114111)
        return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, e;
}(), Ol = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ll = typeof Uint8Array > "u" ? [] : new Uint8Array(256), Ke = 0; Ke < 64; Ke++)
  Ll[Ol.charCodeAt(Ke)] = Ke;
var de, Yn = 8, Ni = 9, zn = 11, Jn = 12, Dl = function() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var n = e.length;
  if (!n)
    return "";
  for (var l = [], g = -1, B = ""; ++g < n; ) {
    var m = e[g];
    m <= 65535 ? l.push(m) : (m -= 65536, l.push(55296 + (m >> 10), m % 1024 + 56320)), (g + 1 === n || l.length > 16384) && (B += String.fromCharCode.apply(String, l), l.length = 0);
  }
  return B;
}, Ml = function(e, t) {
  var n, l, g, B = function(y) {
    var E, I, M, O, R, p = 0.75 * y.length, AA = y.length, rA = 0;
    y[y.length - 1] === "=" && (p--, y[y.length - 2] === "=" && p--);
    var oA = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && Uint8Array.prototype.slice !== void 0 ? new ArrayBuffer(p) : new Array(p), u = Array.isArray(oA) ? oA : new Uint8Array(oA);
    for (E = 0; E < AA; E += 4)
      I = oe[y.charCodeAt(E)], M = oe[y.charCodeAt(E + 1)], O = oe[y.charCodeAt(E + 2)], R = oe[y.charCodeAt(E + 3)], u[rA++] = I << 2 | M >> 4, u[rA++] = (15 & M) << 4 | O >> 2, u[rA++] = (3 & O) << 6 | 63 & R;
    return oA;
  }(e), m = Array.isArray(B) ? function(y) {
    for (var E = y.length, I = [], M = 0; M < E; M += 4)
      I.push(y[M + 3] << 24 | y[M + 2] << 16 | y[M + 1] << 8 | y[M]);
    return I;
  }(B) : new Uint32Array(B), v = Array.isArray(B) ? function(y) {
    for (var E = y.length, I = [], M = 0; M < E; M += 2)
      I.push(y[M + 1] << 8 | y[M]);
    return I;
  }(B) : new Uint16Array(B), b = Wn(v, 12, m[4] / 2), Q = m[5] === 2 ? Wn(v, (24 + m[4]) / 2) : (n = m, l = Math.ceil((24 + m[4]) / 4), n.slice ? n.slice(l, g) : new Uint32Array(Array.prototype.slice.call(n, l, g)));
  return new Hl(m[0], m[1], m[2], m[3], b, Q);
}("AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA="), WA = "×", Pl = function(e) {
  return Ml.get(e);
}, Kl = function(e, t, n) {
  var l = n - 2, g = t[l], B = t[n - 1], m = t[n];
  if (B === 2 && m === 3)
    return WA;
  if (B === 2 || B === 3 || B === 4 || m === 2 || m === 3 || m === 4)
    return "÷";
  if (B === Yn && [Yn, Ni, zn, Jn].indexOf(m) !== -1 || !(B !== zn && B !== Ni || m !== Ni && m !== 10) || (B === Jn || B === 10) && m === 10 || m === 13 || m === 5 || m === 7 || B === 1)
    return WA;
  if (B === 13 && m === 14) {
    for (; g === 5; )
      g = t[--l];
    if (g === 14)
      return WA;
  }
  if (B === 15 && m === 15) {
    for (var v = 0; g === 15; )
      v++, g = t[--l];
    if (v % 2 == 0)
      return WA;
  }
  return "÷";
}, Rl = function(e) {
  var t = function(m) {
    for (var v = [], b = 0, Q = m.length; b < Q; ) {
      var y = m.charCodeAt(b++);
      if (y >= 55296 && y <= 56319 && b < Q) {
        var E = m.charCodeAt(b++);
        (64512 & E) == 56320 ? v.push(((1023 & y) << 10) + (1023 & E) + 65536) : (v.push(y), b--);
      } else
        v.push(y);
    }
    return v;
  }(e), n = t.length, l = 0, g = 0, B = t.map(Pl);
  return { next: function() {
    if (l >= n)
      return { done: !0, value: null };
    for (var m = WA; l < n && (m = Kl(0, B, ++l)) === WA; )
      ;
    if (m !== WA || l === n) {
      var v = Dl.apply(null, t.slice(g, l));
      return g = l, { value: v, done: !1 };
    }
    return { done: !0, value: null };
  } };
}, qn = function(e) {
  return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255;
}, pr = function(e, t, n, l, g) {
  var B = "http://www.w3.org/2000/svg", m = document.createElementNS(B, "svg"), v = document.createElementNS(B, "foreignObject");
  return m.setAttributeNS(null, "width", e.toString()), m.setAttributeNS(null, "height", t.toString()), v.setAttributeNS(null, "width", "100%"), v.setAttributeNS(null, "height", "100%"), v.setAttributeNS(null, "x", n.toString()), v.setAttributeNS(null, "y", l.toString()), v.setAttributeNS(null, "externalResourcesRequired", "true"), m.appendChild(v), v.appendChild(g), m;
}, Zn = function(e) {
  return new Promise(function(t, n) {
    var l = new Image();
    l.onload = function() {
      return t(l);
    }, l.onerror = n, l.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, HA = { get SUPPORT_RANGE_BOUNDS() {
  var e = function(t) {
    if (t.createRange) {
      var n = t.createRange();
      if (n.getBoundingClientRect) {
        var l = t.createElement("boundtest");
        l.style.height = "123px", l.style.display = "block", t.body.appendChild(l), n.selectNode(l);
        var g = n.getBoundingClientRect(), B = Math.round(g.height);
        if (t.body.removeChild(l), B === 123)
          return !0;
      }
    }
    return !1;
  }(document);
  return Object.defineProperty(HA, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
}, get SUPPORT_WORD_BREAKING() {
  var e = HA.SUPPORT_RANGE_BOUNDS && function(t) {
    var n = t.createElement("boundtest");
    n.style.width = "50px", n.style.display = "block", n.style.fontSize = "12px", n.style.letterSpacing = "0px", n.style.wordSpacing = "0px", t.body.appendChild(n);
    var l = t.createRange();
    n.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var g = n.firstChild, B = ni(g.data).map(function(Q) {
      return EA(Q);
    }), m = 0, v = {}, b = B.every(function(Q, y) {
      l.setStart(g, m), l.setEnd(g, m + Q.length);
      var E = l.getBoundingClientRect();
      m += Q.length;
      var I = E.x > v.x || E.y > v.y;
      return v = E, y === 0 || I;
    });
    return t.body.removeChild(n), b;
  }(document);
  return Object.defineProperty(HA, "SUPPORT_WORD_BREAKING", { value: e }), e;
}, get SUPPORT_SVG_DRAWING() {
  var e = function(t) {
    var n = new Image(), l = t.createElement("canvas"), g = l.getContext("2d");
    if (!g)
      return !1;
    n.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
      g.drawImage(n, 0, 0), l.toDataURL();
    } catch {
      return !1;
    }
    return !0;
  }(document);
  return Object.defineProperty(HA, "SUPPORT_SVG_DRAWING", { value: e }), e;
}, get SUPPORT_FOREIGNOBJECT_DRAWING() {
  var e = typeof Array.from == "function" && typeof window.fetch == "function" ? function(t) {
    var n = t.createElement("canvas"), l = 100;
    n.width = l, n.height = l;
    var g = n.getContext("2d");
    if (!g)
      return Promise.reject(!1);
    g.fillStyle = "rgb(0, 255, 0)", g.fillRect(0, 0, l, l);
    var B = new Image(), m = n.toDataURL();
    B.src = m;
    var v = pr(l, l, 0, 0, B);
    return g.fillStyle = "red", g.fillRect(0, 0, l, l), Zn(v).then(function(b) {
      g.drawImage(b, 0, 0);
      var Q = g.getImageData(0, 0, l, l).data;
      g.fillStyle = "red", g.fillRect(0, 0, l, l);
      var y = t.createElement("div");
      return y.style.backgroundImage = "url(" + m + ")", y.style.height = l + "px", qn(Q) ? Zn(pr(l, l, 0, 0, y)) : Promise.reject(!1);
    }).then(function(b) {
      return g.drawImage(b, 0, 0), qn(g.getImageData(0, 0, l, l).data);
    }).catch(function() {
      return !1;
    });
  }(document) : Promise.resolve(!1);
  return Object.defineProperty(HA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
}, get SUPPORT_CORS_IMAGES() {
  var e = new Image().crossOrigin !== void 0;
  return Object.defineProperty(HA, "SUPPORT_CORS_IMAGES", { value: e }), e;
}, get SUPPORT_RESPONSE_TYPE() {
  var e = typeof new XMLHttpRequest().responseType == "string";
  return Object.defineProperty(HA, "SUPPORT_RESPONSE_TYPE", { value: e }), e;
}, get SUPPORT_CORS_XHR() {
  var e = "withCredentials" in new XMLHttpRequest();
  return Object.defineProperty(HA, "SUPPORT_CORS_XHR", { value: e }), e;
}, get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
  var e = !(typeof Intl > "u" || !Intl.Segmenter);
  return Object.defineProperty(HA, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: e }), e;
} }, ge = function(e, t) {
  this.text = e, this.bounds = t;
}, jl = function(e, t) {
  var n = t.ownerDocument;
  if (n) {
    var l = n.createElement("html2canvaswrapper");
    l.appendChild(t.cloneNode(!0));
    var g = t.parentNode;
    if (g) {
      g.replaceChild(l, t);
      var B = bi(e, l);
      return l.firstChild && g.replaceChild(l.firstChild, l), B;
    }
  }
  return ut.EMPTY;
}, $n = function(e, t, n) {
  var l = e.ownerDocument;
  if (!l)
    throw new Error("Node has no owner document");
  var g = l.createRange();
  return g.setStart(e, t), g.setEnd(e, t + n), g;
}, jr = function(e) {
  if (HA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(t.segment(e)).map(function(n) {
      return n.segment;
    });
  }
  return function(n) {
    for (var l, g = Rl(n), B = []; !(l = g.next()).done; )
      l.value && B.push(l.value.slice());
    return B;
  }(e);
}, Vl = function(e, t) {
  return t.letterSpacing !== 0 ? jr(e) : function(n, l) {
    if (HA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var g = new Intl.Segmenter(void 0, { granularity: "word" });
      return Array.from(g.segment(n)).map(function(B) {
        return B.segment;
      });
    }
    return Nl(n, l);
  }(e, t);
}, Gl = [32, 160, 4961, 65792, 65793, 4153, 4241], Nl = function(e, t) {
  for (var n, l = function(m, v) {
    var b = ni(m), Q = Pa(b, v), y = Q[0], E = Q[1], I = Q[2], M = b.length, O = 0, R = 0;
    return { next: function() {
      if (R >= M)
        return { done: !0, value: null };
      for (var p = dA; R < M && (p = Ma(b, E, y, ++R, I)) === dA; )
        ;
      if (p !== dA || R === M) {
        var AA = new Ka(b, p, O, R);
        return O = R, { value: AA, done: !1 };
      }
      return { done: !0, value: null };
    } };
  }(e, { lineBreak: t.lineBreak, wordBreak: t.overflowWrap === "break-word" ? "break-word" : t.wordBreak }), g = [], B = function() {
    if (n.value) {
      var m = n.value.slice(), v = ni(m), b = "";
      v.forEach(function(Q) {
        Gl.indexOf(Q) === -1 ? b += EA(Q) : (b.length && g.push(b), g.push(EA(Q)), b = "");
      }), b.length && g.push(b);
    }
  }; !(n = l.next()).done; )
    B();
  return g;
}, Xl = function(e, t, n) {
  this.text = Wl(t.data, n.textTransform), this.textBounds = function(l, g, B, m) {
    var v = Vl(g, B), b = [], Q = 0;
    return v.forEach(function(y) {
      if (B.textDecorationLine.length || y.trim().length > 0)
        if (HA.SUPPORT_RANGE_BOUNDS) {
          var E = $n(m, Q, y.length).getClientRects();
          if (E.length > 1) {
            var I = jr(y), M = 0;
            I.forEach(function(R) {
              b.push(new ge(R, ut.fromDOMRectList(l, $n(m, M + Q, R.length).getClientRects()))), M += R.length;
            });
          } else
            b.push(new ge(y, ut.fromDOMRectList(l, E)));
        } else {
          var O = m.splitText(y.length);
          b.push(new ge(y, jl(l, m))), m = O;
        }
      else
        HA.SUPPORT_RANGE_BOUNDS || (m = m.splitText(y.length));
      Q += y.length;
    }), b;
  }(e, this.text, n, t);
}, Wl = function(e, t) {
  switch (t) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(Yl, zl);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, Yl = /(^|\s|:|-|\(|\))([a-z])/g, zl = function(e, t, n) {
  return e.length > 0 ? t + n.toUpperCase() : e;
}, $s = function(e) {
  function t(n, l) {
    var g = e.call(this, n, l) || this;
    return g.src = l.currentSrc || l.src, g.intrinsicWidth = l.naturalWidth, g.intrinsicHeight = l.naturalHeight, g.context.cache.addImage(g.src), g;
  }
  return $A(t, e), t;
}(rt), Ao = function(e) {
  function t(n, l) {
    var g = e.call(this, n, l) || this;
    return g.canvas = l, g.intrinsicWidth = l.width, g.intrinsicHeight = l.height, g;
  }
  return $A(t, e), t;
}(rt), to = function(e) {
  function t(n, l) {
    var g = e.call(this, n, l) || this, B = new XMLSerializer(), m = bi(n, l);
    return l.setAttribute("width", m.width + "px"), l.setAttribute("height", m.height + "px"), g.svg = "data:image/svg+xml," + encodeURIComponent(B.serializeToString(l)), g.intrinsicWidth = l.width.baseVal.value, g.intrinsicHeight = l.height.baseVal.value, g.context.cache.addImage(g.svg), g;
  }
  return $A(t, e), t;
}(rt), eo = function(e) {
  function t(n, l) {
    var g = e.call(this, n, l) || this;
    return g.value = l.value, g;
  }
  return $A(t, e), t;
}(rt), Br = function(e) {
  function t(n, l) {
    var g = e.call(this, n, l) || this;
    return g.start = l.start, g.reversed = typeof l.reversed == "boolean" && l.reversed === !0, g;
  }
  return $A(t, e), t;
}(rt), Jl = [{ type: 15, flags: 0, unit: "px", number: 3 }], ql = [{ type: 16, flags: 0, number: 50 }], ci = "checkbox", li = "radio", Zl = "password", As = 707406591, Vr = function(e) {
  function t(n, l) {
    var g, B, m, v = e.call(this, n, l) || this;
    switch (v.type = l.type.toLowerCase(), v.checked = l.checked, v.value = (B = (g = l).type === Zl ? new Array(g.value.length + 1).join("•") : g.value).length === 0 ? g.placeholder || "" : B, v.type !== ci && v.type !== li || (v.styles.backgroundColor = 3739148031, v.styles.borderTopColor = v.styles.borderRightColor = v.styles.borderBottomColor = v.styles.borderLeftColor = 2779096575, v.styles.borderTopWidth = v.styles.borderRightWidth = v.styles.borderBottomWidth = v.styles.borderLeftWidth = 1, v.styles.borderTopStyle = v.styles.borderRightStyle = v.styles.borderBottomStyle = v.styles.borderLeftStyle = 1, v.styles.backgroundClip = [0], v.styles.backgroundOrigin = [0], v.bounds = (m = v.bounds).width > m.height ? new ut(m.left + (m.width - m.height) / 2, m.top, m.height, m.height) : m.width < m.height ? new ut(m.left, m.top + (m.height - m.width) / 2, m.width, m.width) : m), v.type) {
      case ci:
        v.styles.borderTopRightRadius = v.styles.borderTopLeftRadius = v.styles.borderBottomRightRadius = v.styles.borderBottomLeftRadius = Jl;
        break;
      case li:
        v.styles.borderTopRightRadius = v.styles.borderTopLeftRadius = v.styles.borderBottomRightRadius = v.styles.borderBottomLeftRadius = ql;
    }
    return v;
  }
  return $A(t, e), t;
}(rt), io = function(e) {
  function t(n, l) {
    var g = e.call(this, n, l) || this, B = l.options[l.selectedIndex || 0];
    return g.value = B && B.text || "", g;
  }
  return $A(t, e), t;
}(rt), ro = function(e) {
  function t(n, l) {
    var g = e.call(this, n, l) || this;
    return g.value = l.value, g;
  }
  return $A(t, e), t;
}(rt), no = function(e) {
  function t(n, l) {
    var g = e.call(this, n, l) || this;
    g.src = l.src, g.width = parseInt(l.width, 10) || 0, g.height = parseInt(l.height, 10) || 0, g.backgroundColor = g.styles.backgroundColor;
    try {
      if (l.contentWindow && l.contentWindow.document && l.contentWindow.document.documentElement) {
        g.tree = oo(n, l.contentWindow.document.documentElement);
        var B = l.contentWindow.document.documentElement ? he(n, getComputedStyle(l.contentWindow.document.documentElement).backgroundColor) : ht.TRANSPARENT, m = l.contentWindow.document.body ? he(n, getComputedStyle(l.contentWindow.document.body).backgroundColor) : ht.TRANSPARENT;
        g.backgroundColor = mt(B) ? mt(m) ? g.styles.backgroundColor : m : B;
      }
    } catch {
    }
    return g;
  }
  return $A(t, e), t;
}(rt), $l = ["OL", "UL", "MENU"], Ze = function(e, t, n, l) {
  for (var g = t.firstChild, B = void 0; g; g = B)
    if (B = g.nextSibling, ao(g) && g.data.trim().length > 0)
      n.textNodes.push(new Xl(e, g, n.styles));
    else if (Pt(g))
      if (uo(g) && g.assignedNodes)
        g.assignedNodes().forEach(function(v) {
          return Ze(e, v, n, l);
        });
      else {
        var m = so(e, g);
        m.styles.isVisible() && (Ah(g, m, l) ? m.flags |= 4 : th(m.styles) && (m.flags |= 2), $l.indexOf(g.tagName) !== -1 && (m.flags |= 8), n.elements.push(m), g.slot, g.shadowRoot ? Ze(e, g.shadowRoot, m, l) : hi(g) || co(g) || ui(g) || Ze(e, g, m, l));
      }
}, so = function(e, t) {
  return mr(t) ? new $s(e, t) : lo(t) ? new Ao(e, t) : co(t) ? new to(e, t) : eh(t) ? new eo(e, t) : ih(t) ? new Br(e, t) : rh(t) ? new Vr(e, t) : ui(t) ? new io(e, t) : hi(t) ? new ro(e, t) : ho(t) ? new no(e, t) : new rt(e, t);
}, oo = function(e, t) {
  var n = so(e, t);
  return n.flags |= 4, Ze(e, t, n, n), n;
}, Ah = function(e, t, n) {
  return t.styles.isPositionedWithZIndex() || t.styles.opacity < 1 || t.styles.isTransformed() || Gr(e) && n.styles.isTransparent();
}, th = function(e) {
  return e.isPositioned() || e.isFloating();
}, ao = function(e) {
  return e.nodeType === Node.TEXT_NODE;
}, Pt = function(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}, wr = function(e) {
  return Pt(e) && e.style !== void 0 && !$e(e);
}, $e = function(e) {
  return typeof e.className == "object";
}, eh = function(e) {
  return e.tagName === "LI";
}, ih = function(e) {
  return e.tagName === "OL";
}, rh = function(e) {
  return e.tagName === "INPUT";
}, co = function(e) {
  return e.tagName === "svg";
}, Gr = function(e) {
  return e.tagName === "BODY";
}, lo = function(e) {
  return e.tagName === "CANVAS";
}, ts = function(e) {
  return e.tagName === "VIDEO";
}, mr = function(e) {
  return e.tagName === "IMG";
}, ho = function(e) {
  return e.tagName === "IFRAME";
}, es = function(e) {
  return e.tagName === "STYLE";
}, hi = function(e) {
  return e.tagName === "TEXTAREA";
}, ui = function(e) {
  return e.tagName === "SELECT";
}, uo = function(e) {
  return e.tagName === "SLOT";
}, is = function(e) {
  return e.tagName.indexOf("-") > 0;
}, nh = function() {
  function e() {
    this.counters = {};
  }
  return e.prototype.getCounterValue = function(t) {
    var n = this.counters[t];
    return n && n.length ? n[n.length - 1] : 1;
  }, e.prototype.getCounterValues = function(t) {
    var n = this.counters[t];
    return n || [];
  }, e.prototype.pop = function(t) {
    var n = this;
    t.forEach(function(l) {
      return n.counters[l].pop();
    });
  }, e.prototype.parse = function(t) {
    var n = this, l = t.counterIncrement, g = t.counterReset, B = !0;
    l !== null && l.forEach(function(v) {
      var b = n.counters[v.counter];
      b && v.increment !== 0 && (B = !1, b.length || b.push(1), b[Math.max(0, b.length - 1)] += v.increment);
    });
    var m = [];
    return B && g.forEach(function(v) {
      var b = n.counters[v.counter];
      m.push(v.counter), b || (b = n.counters[v.counter] = []), b.push(v.reset);
    }), m;
  }, e;
}(), rs = { integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"] }, ns = { integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"] }, sh = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"] }, oh = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"] }, Tt = function(e, t, n, l, g, B) {
  return e < t || e > n ? Be(e, g, B.length > 0) : l.integers.reduce(function(m, v, b) {
    for (; e >= v; )
      e -= v, m += l.values[b];
    return m;
  }, "") + B;
}, go = function(e, t, n, l) {
  var g = "";
  do
    n || e--, g = l(e) + g, e /= t;
  while (e * t >= t);
  return g;
}, xA = function(e, t, n, l, g) {
  var B = n - t + 1;
  return (e < 0 ? "-" : "") + (go(Math.abs(e), B, l, function(m) {
    return EA(Math.floor(m % B) + t);
  }) + g);
}, bt = function(e, t, n) {
  n === void 0 && (n = ". ");
  var l = t.length;
  return go(Math.abs(e), l, !1, function(g) {
    return t[Math.floor(g % l)];
  }) + n;
}, at = function(e, t, n, l, g, B) {
  if (e < -9999 || e > 9999)
    return Be(e, 4, g.length > 0);
  var m = Math.abs(e), v = g;
  if (m === 0)
    return t[0] + v;
  for (var b = 0; m > 0 && b <= 4; b++) {
    var Q = m % 10;
    Q === 0 && SA(B, 1) && v !== "" ? v = t[Q] + v : Q > 1 || Q === 1 && b === 0 || Q === 1 && b === 1 && SA(B, 2) || Q === 1 && b === 1 && SA(B, 4) && e > 100 || Q === 1 && b > 1 && SA(B, 8) ? v = t[Q] + (b > 0 ? n[b - 1] : "") + v : Q === 1 && b > 0 && (v = n[b - 1] + v), m = Math.floor(m / 10);
  }
  return (e < 0 ? l : "") + v;
}, ss = "十百千萬", os = "拾佰仟萬", as = "マイナス", Xi = "마이너스", Be = function(e, t, n) {
  var l = n ? ". " : "", g = n ? "、" : "", B = n ? ", " : "", m = n ? " " : "";
  switch (t) {
    case 0:
      return "•" + m;
    case 1:
      return "◦" + m;
    case 2:
      return "◾" + m;
    case 5:
      var v = xA(e, 48, 57, !0, l);
      return v.length < 4 ? "0" + v : v;
    case 4:
      return bt(e, "〇一二三四五六七八九", g);
    case 6:
      return Tt(e, 1, 3999, rs, 3, l).toLowerCase();
    case 7:
      return Tt(e, 1, 3999, rs, 3, l);
    case 8:
      return xA(e, 945, 969, !1, l);
    case 9:
      return xA(e, 97, 122, !1, l);
    case 10:
      return xA(e, 65, 90, !1, l);
    case 11:
      return xA(e, 1632, 1641, !0, l);
    case 12:
    case 49:
      return Tt(e, 1, 9999, ns, 3, l);
    case 35:
      return Tt(e, 1, 9999, ns, 3, l).toLowerCase();
    case 13:
      return xA(e, 2534, 2543, !0, l);
    case 14:
    case 30:
      return xA(e, 6112, 6121, !0, l);
    case 15:
      return bt(e, "子丑寅卯辰巳午未申酉戌亥", g);
    case 16:
      return bt(e, "甲乙丙丁戊己庚辛壬癸", g);
    case 17:
    case 48:
      return at(e, "零一二三四五六七八九", ss, "負", g, 14);
    case 47:
      return at(e, "零壹貳參肆伍陸柒捌玖", os, "負", g, 15);
    case 42:
      return at(e, "零一二三四五六七八九", ss, "负", g, 14);
    case 41:
      return at(e, "零壹贰叁肆伍陆柒捌玖", os, "负", g, 15);
    case 26:
      return at(e, "〇一二三四五六七八九", "十百千万", as, g, 0);
    case 25:
      return at(e, "零壱弐参四伍六七八九", "拾百千万", as, g, 7);
    case 31:
      return at(e, "영일이삼사오육칠팔구", "십백천만", Xi, B, 7);
    case 33:
      return at(e, "零一二三四五六七八九", "十百千萬", Xi, B, 0);
    case 32:
      return at(e, "零壹貳參四五六七八九", "拾百千", Xi, B, 7);
    case 18:
      return xA(e, 2406, 2415, !0, l);
    case 20:
      return Tt(e, 1, 19999, oh, 3, l);
    case 21:
      return xA(e, 2790, 2799, !0, l);
    case 22:
      return xA(e, 2662, 2671, !0, l);
    case 22:
      return Tt(e, 1, 10999, sh, 3, l);
    case 23:
      return bt(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return bt(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return xA(e, 3302, 3311, !0, l);
    case 28:
      return bt(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", g);
    case 29:
      return bt(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", g);
    case 34:
      return xA(e, 3792, 3801, !0, l);
    case 37:
      return xA(e, 6160, 6169, !0, l);
    case 38:
      return xA(e, 4160, 4169, !0, l);
    case 39:
      return xA(e, 2918, 2927, !0, l);
    case 40:
      return xA(e, 1776, 1785, !0, l);
    case 43:
      return xA(e, 3046, 3055, !0, l);
    case 44:
      return xA(e, 3174, 3183, !0, l);
    case 45:
      return xA(e, 3664, 3673, !0, l);
    case 46:
      return xA(e, 3872, 3881, !0, l);
    default:
      return xA(e, 48, 57, !0, l);
  }
}, fo = "data-html2canvas-ignore", cs = function() {
  function e(t, n, l) {
    if (this.context = t, this.options = l, this.scrolledElements = [], this.referenceElement = n, this.counters = new nh(), this.quoteDepth = 0, !n.ownerDocument)
      throw new Error("Cloned element does not have an owner document");
    this.documentElement = this.cloneNode(n.ownerDocument.documentElement, !1);
  }
  return e.prototype.toIFrame = function(t, n) {
    var l = this, g = ah(t, n);
    if (!g.contentWindow)
      return Promise.reject("Unable to find iframe window");
    var B = t.defaultView.pageXOffset, m = t.defaultView.pageYOffset, v = g.contentWindow, b = v.document, Q = hh(g).then(function() {
      return MA(l, void 0, void 0, function() {
        var y, E;
        return LA(this, function(I) {
          switch (I.label) {
            case 0:
              return this.scrolledElements.forEach(fh), v && (v.scrollTo(n.left, n.top), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || v.scrollY === n.top && v.scrollX === n.left || (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(v.scrollX - n.left, v.scrollY - n.top, 0, 0))), y = this.options.onclone, (E = this.clonedReferenceElement) === void 0 ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : b.fonts && b.fonts.ready ? [4, b.fonts.ready] : [3, 2];
            case 1:
              I.sent(), I.label = 2;
            case 2:
              return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, lh(b)] : [3, 4];
            case 3:
              I.sent(), I.label = 4;
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
    return b.open(), b.write(dh(document.doctype) + "<html></html>"), gh(this.referenceElement.ownerDocument, B, m), b.replaceChild(b.adoptNode(this.documentElement), b.documentElement), b.close(), Q;
  }, e.prototype.createElementClone = function(t) {
    if (fr(t, 2), lo(t))
      return this.createCanvasClone(t);
    if (ts(t))
      return this.createVideoClone(t);
    if (es(t))
      return this.createStyleClone(t);
    var n = t.cloneNode(!1);
    return mr(n) && (mr(t) && t.currentSrc && t.currentSrc !== t.src && (n.src = t.currentSrc, n.srcset = ""), n.loading === "lazy" && (n.loading = "eager")), is(n) ? this.createCustomElementClone(n) : n;
  }, e.prototype.createCustomElementClone = function(t) {
    var n = document.createElement("html2canvascustomelement");
    return Wi(t.style, n), n;
  }, e.prototype.createStyleClone = function(t) {
    try {
      var n = t.sheet;
      if (n && n.cssRules) {
        var l = [].slice.call(n.cssRules, 0).reduce(function(B, m) {
          return m && typeof m.cssText == "string" ? B + m.cssText : B;
        }, ""), g = t.cloneNode(!1);
        return g.textContent = l, g;
      }
    } catch (B) {
      if (this.context.logger.error("Unable to access cssRules property", B), B.name !== "SecurityError")
        throw B;
    }
    return t.cloneNode(!1);
  }, e.prototype.createCanvasClone = function(t) {
    var n;
    if (this.options.inlineImages && t.ownerDocument) {
      var l = t.ownerDocument.createElement("img");
      try {
        return l.src = t.toDataURL(), l;
      } catch {
        this.context.logger.info("Unable to inline canvas contents, canvas is tainted", t);
      }
    }
    var g = t.cloneNode(!1);
    try {
      g.width = t.width, g.height = t.height;
      var B = t.getContext("2d"), m = g.getContext("2d");
      if (m)
        if (!this.options.allowTaint && B)
          m.putImageData(B.getImageData(0, 0, t.width, t.height), 0, 0);
        else {
          var v = (n = t.getContext("webgl2")) !== null && n !== void 0 ? n : t.getContext("webgl");
          if (v) {
            var b = v.getContextAttributes();
            (b == null ? void 0 : b.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", t);
          }
          m.drawImage(t, 0, 0);
        }
      return g;
    } catch {
      this.context.logger.info("Unable to clone canvas as it is tainted", t);
    }
    return g;
  }, e.prototype.createVideoClone = function(t) {
    var n = t.ownerDocument.createElement("canvas");
    n.width = t.offsetWidth, n.height = t.offsetHeight;
    var l = n.getContext("2d");
    try {
      return l && (l.drawImage(t, 0, 0, n.width, n.height), this.options.allowTaint || l.getImageData(0, 0, n.width, n.height)), n;
    } catch {
      this.context.logger.info("Unable to clone video as it is tainted", t);
    }
    var g = t.ownerDocument.createElement("canvas");
    return g.width = t.offsetWidth, g.height = t.offsetHeight, g;
  }, e.prototype.appendChildNode = function(t, n, l) {
    Pt(n) && (n.tagName === "SCRIPT" || n.hasAttribute(fo) || typeof this.options.ignoreElements == "function" && this.options.ignoreElements(n)) || this.options.copyStyles && Pt(n) && es(n) || t.appendChild(this.cloneNode(n, l));
  }, e.prototype.cloneChildNodes = function(t, n, l) {
    for (var g = this, B = t.shadowRoot ? t.shadowRoot.firstChild : t.firstChild; B; B = B.nextSibling)
      if (Pt(B) && uo(B) && typeof B.assignedNodes == "function") {
        var m = B.assignedNodes();
        m.length && m.forEach(function(v) {
          return g.appendChildNode(n, v, l);
        });
      } else
        this.appendChildNode(n, B, l);
  }, e.prototype.cloneNode = function(t, n) {
    if (ao(t))
      return document.createTextNode(t.data);
    if (!t.ownerDocument)
      return t.cloneNode(!1);
    var l = t.ownerDocument.defaultView;
    if (l && Pt(t) && (wr(t) || $e(t))) {
      var g = this.createElementClone(t);
      g.style.transitionProperty = "none";
      var B = l.getComputedStyle(t), m = l.getComputedStyle(t, ":before"), v = l.getComputedStyle(t, ":after");
      this.referenceElement === t && wr(g) && (this.clonedReferenceElement = g), Gr(g) && ph(g);
      var b = this.counters.parse(new Xn(this.context, B)), Q = this.resolvePseudoContent(t, g, m, de.BEFORE);
      is(t) && (n = !0), ts(t) || this.cloneChildNodes(t, g, n), Q && g.insertBefore(Q, g.firstChild);
      var y = this.resolvePseudoContent(t, g, v, de.AFTER);
      return y && g.appendChild(y), this.counters.pop(b), (B && (this.options.copyStyles || $e(t)) && !ho(t) || n) && Wi(B, g), t.scrollTop === 0 && t.scrollLeft === 0 || this.scrolledElements.push([g, t.scrollLeft, t.scrollTop]), (hi(t) || ui(t)) && (hi(g) || ui(g)) && (g.value = t.value), g;
    }
    return t.cloneNode(!1);
  }, e.prototype.resolvePseudoContent = function(t, n, l, g) {
    var B = this;
    if (l) {
      var m = l.content, v = n.ownerDocument;
      if (v && m && m !== "none" && m !== "-moz-alt-content" && l.display !== "none") {
        this.counters.parse(new Xn(this.context, l));
        var b = new Tl(this.context, l), Q = v.createElement("html2canvaspseudoelement");
        Wi(l, Q), b.content.forEach(function(E) {
          if (E.type === 0)
            Q.appendChild(v.createTextNode(E.value));
          else if (E.type === 22) {
            var I = v.createElement("img");
            I.src = E.value, I.style.opacity = "1", Q.appendChild(I);
          } else if (E.type === 18) {
            if (E.name === "attr") {
              var M = E.values.filter(wA);
              M.length && Q.appendChild(v.createTextNode(t.getAttribute(M[0].value) || ""));
            } else if (E.name === "counter") {
              var O = E.values.filter(Xt), R = O[0], p = O[1];
              if (R && wA(R)) {
                var AA = B.counters.getCounterValue(R.value), rA = p && wA(p) ? gr.parse(B.context, p.value) : 3;
                Q.appendChild(v.createTextNode(Be(AA, rA, !1)));
              }
            } else if (E.name === "counters") {
              var oA = E.values.filter(Xt), u = (R = oA[0], oA[1]);
              if (p = oA[2], R && wA(R)) {
                var s = B.counters.getCounterValues(R.value), o = p && wA(p) ? gr.parse(B.context, p.value) : 3, d = u && u.type === 0 ? u.value : "", A = s.map(function(i) {
                  return Be(i, o, !1);
                }).join(d);
                Q.appendChild(v.createTextNode(A));
              }
            }
          } else if (E.type === 20)
            switch (E.value) {
              case "open-quote":
                Q.appendChild(v.createTextNode(Nn(b.quotes, B.quoteDepth++, !0)));
                break;
              case "close-quote":
                Q.appendChild(v.createTextNode(Nn(b.quotes, --B.quoteDepth, !1)));
                break;
              default:
                Q.appendChild(v.createTextNode(E.value));
            }
        }), Q.className = Cr + " " + vr;
        var y = g === de.BEFORE ? " " + Cr : " " + vr;
        return $e(n) ? n.className.baseValue += y : n.className += y, Q;
      }
    }
  }, e.destroy = function(t) {
    return !!t.parentNode && (t.parentNode.removeChild(t), !0);
  }, e;
}();
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(de || (de = {}));
var BA, ah = function(e, t) {
  var n = e.createElement("iframe");
  return n.className = "html2canvas-container", n.style.visibility = "hidden", n.style.position = "fixed", n.style.left = "-10000px", n.style.top = "0px", n.style.border = "0", n.width = t.width.toString(), n.height = t.height.toString(), n.scrolling = "no", n.setAttribute(fo, "true"), e.body.appendChild(n), n;
}, ch = function(e) {
  return new Promise(function(t) {
    e.complete ? t() : e.src ? (e.onload = t, e.onerror = t) : t();
  });
}, lh = function(e) {
  return Promise.all([].slice.call(e.images, 0).map(ch));
}, hh = function(e) {
  return new Promise(function(t, n) {
    var l = e.contentWindow;
    if (!l)
      return n("No window assigned for iframe");
    var g = l.document;
    l.onload = e.onload = function() {
      l.onload = e.onload = null;
      var B = setInterval(function() {
        g.body.childNodes.length > 0 && g.readyState === "complete" && (clearInterval(B), t(e));
      }, 50);
    };
  });
}, uh = ["all", "d", "content"], Wi = function(e, t) {
  for (var n = e.length - 1; n >= 0; n--) {
    var l = e.item(n);
    uh.indexOf(l) === -1 && t.style.setProperty(l, e.getPropertyValue(l));
  }
  return t;
}, dh = function(e) {
  var t = "";
  return e && (t += "<!DOCTYPE ", e.name && (t += e.name), e.internalSubset && (t += e.internalSubset), e.publicId && (t += '"' + e.publicId + '"'), e.systemId && (t += '"' + e.systemId + '"'), t += ">"), t;
}, gh = function(e, t, n) {
  e && e.defaultView && (t !== e.defaultView.pageXOffset || n !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(t, n);
}, fh = function(e) {
  var t = e[0], n = e[1], l = e[2];
  t.scrollLeft = n, t.scrollTop = l;
}, Cr = "___html2canvas___pseudoelement_before", vr = "___html2canvas___pseudoelement_after", ls = `{
    content: "" !important;
    display: none !important;
}`, ph = function(e) {
  Bh(e, "." + Cr + ":before" + ls + `
         .` + vr + ":after" + ls);
}, Bh = function(e, t) {
  var n = e.ownerDocument;
  if (n) {
    var l = n.createElement("style");
    l.textContent = t, e.appendChild(l);
  }
}, po = function() {
  function e() {
  }
  return e.getOrigin = function(t) {
    var n = e._link;
    return n ? (n.href = t, n.href = n.href, n.protocol + n.hostname + n.port) : "about:blank";
  }, e.isSameOrigin = function(t) {
    return e.getOrigin(t) === e._origin;
  }, e.setContext = function(t) {
    e._link = t.document.createElement("a"), e._origin = e.getOrigin(t.location.href);
  }, e._origin = "about:blank", e;
}(), wh = function() {
  function e(t, n) {
    this.context = t, this._options = n, this._cache = {};
  }
  return e.prototype.addImage = function(t) {
    var n = Promise.resolve();
    return this.has(t) || (zi(t) || yh(t)) && (this._cache[t] = this.loadImage(t)).catch(function() {
    }), n;
  }, e.prototype.match = function(t) {
    return this._cache[t];
  }, e.prototype.loadImage = function(t) {
    return MA(this, void 0, void 0, function() {
      var n, l, g, B, m = this;
      return LA(this, function(v) {
        switch (v.label) {
          case 0:
            return n = po.isSameOrigin(t), l = !Yi(t) && this._options.useCORS === !0 && HA.SUPPORT_CORS_IMAGES && !n, g = !Yi(t) && !n && !zi(t) && typeof this._options.proxy == "string" && HA.SUPPORT_CORS_XHR && !l, n || this._options.allowTaint !== !1 || Yi(t) || zi(t) || g || l ? (B = t, g ? [4, this.proxy(B)] : [3, 2]) : [2];
          case 1:
            B = v.sent(), v.label = 2;
          case 2:
            return this.context.logger.debug("Added image " + t.substring(0, 256)), [4, new Promise(function(b, Q) {
              var y = new Image();
              y.onload = function() {
                return b(y);
              }, y.onerror = Q, (bh(B) || l) && (y.crossOrigin = "anonymous"), y.src = B, y.complete === !0 && setTimeout(function() {
                return b(y);
              }, 500), m._options.imageTimeout > 0 && setTimeout(function() {
                return Q("Timed out (" + m._options.imageTimeout + "ms) loading image");
              }, m._options.imageTimeout);
            })];
          case 3:
            return [2, v.sent()];
        }
      });
    });
  }, e.prototype.has = function(t) {
    return this._cache[t] !== void 0;
  }, e.prototype.keys = function() {
    return Promise.resolve(Object.keys(this._cache));
  }, e.prototype.proxy = function(t) {
    var n = this, l = this._options.proxy;
    if (!l)
      throw new Error("No proxy defined");
    var g = t.substring(0, 256);
    return new Promise(function(B, m) {
      var v = HA.SUPPORT_RESPONSE_TYPE ? "blob" : "text", b = new XMLHttpRequest();
      b.onload = function() {
        if (b.status === 200)
          if (v === "text")
            B(b.response);
          else {
            var E = new FileReader();
            E.addEventListener("load", function() {
              return B(E.result);
            }, !1), E.addEventListener("error", function(I) {
              return m(I);
            }, !1), E.readAsDataURL(b.response);
          }
        else
          m("Failed to proxy resource " + g + " with status code " + b.status);
      }, b.onerror = m;
      var Q = l.indexOf("?") > -1 ? "&" : "?";
      if (b.open("GET", "" + l + Q + "url=" + encodeURIComponent(t) + "&responseType=" + v), v !== "text" && b instanceof XMLHttpRequest && (b.responseType = v), n._options.imageTimeout) {
        var y = n._options.imageTimeout;
        b.timeout = y, b.ontimeout = function() {
          return m("Timed out (" + y + "ms) proxying " + g);
        };
      }
      b.send();
    });
  }, e;
}(), mh = /^data:image\/svg\+xml/i, Ch = /^data:image\/.*;base64,/i, vh = /^data:image\/.*/i, yh = function(e) {
  return HA.SUPPORT_SVG_DRAWING || !Qh(e);
}, Yi = function(e) {
  return vh.test(e);
}, bh = function(e) {
  return Ch.test(e);
}, zi = function(e) {
  return e.substr(0, 4) === "blob";
}, Qh = function(e) {
  return e.substr(-3).toLowerCase() === "svg" || mh.test(e);
}, aA = function() {
  function e(t, n) {
    this.type = 0, this.x = t, this.y = n;
  }
  return e.prototype.add = function(t, n) {
    return new e(this.x + t, this.y + n);
  }, e;
}(), It = function(e, t, n) {
  return new aA(e.x + (t.x - e.x) * n, e.y + (t.y - e.y) * n);
}, Re = function() {
  function e(t, n, l, g) {
    this.type = 1, this.start = t, this.startControl = n, this.endControl = l, this.end = g;
  }
  return e.prototype.subdivide = function(t, n) {
    var l = It(this.start, this.startControl, t), g = It(this.startControl, this.endControl, t), B = It(this.endControl, this.end, t), m = It(l, g, t), v = It(g, B, t), b = It(m, v, t);
    return n ? new e(this.start, l, m, b) : new e(b, v, B, this.end);
  }, e.prototype.add = function(t, n) {
    return new e(this.start.add(t, n), this.startControl.add(t, n), this.endControl.add(t, n), this.end.add(t, n));
  }, e.prototype.reverse = function() {
    return new e(this.end, this.endControl, this.startControl, this.start);
  }, e;
}(), zA = function(e) {
  return e.type === 1;
}, Fh = function(e) {
  var t = e.styles, n = e.bounds, l = se(t.borderTopLeftRadius, n.width, n.height), g = l[0], B = l[1], m = se(t.borderTopRightRadius, n.width, n.height), v = m[0], b = m[1], Q = se(t.borderBottomRightRadius, n.width, n.height), y = Q[0], E = Q[1], I = se(t.borderBottomLeftRadius, n.width, n.height), M = I[0], O = I[1], R = [];
  R.push((g + v) / n.width), R.push((M + y) / n.width), R.push((B + O) / n.height), R.push((b + E) / n.height);
  var p = Math.max.apply(Math, R);
  p > 1 && (g /= p, B /= p, v /= p, b /= p, y /= p, E /= p, M /= p, O /= p);
  var AA = n.width - v, rA = n.height - E, oA = n.width - y, u = n.height - O, s = t.borderTopWidth, o = t.borderRightWidth, d = t.borderBottomWidth, A = t.borderLeftWidth, i = mA(t.paddingTop, e.bounds.width), r = mA(t.paddingRight, e.bounds.width), h = mA(t.paddingBottom, e.bounds.width), a = mA(t.paddingLeft, e.bounds.width);
  this.topLeftBorderDoubleOuterBox = g > 0 || B > 0 ? vA(n.left + A / 3, n.top + s / 3, g - A / 3, B - s / 3, BA.TOP_LEFT) : new aA(n.left + A / 3, n.top + s / 3), this.topRightBorderDoubleOuterBox = g > 0 || B > 0 ? vA(n.left + AA, n.top + s / 3, v - o / 3, b - s / 3, BA.TOP_RIGHT) : new aA(n.left + n.width - o / 3, n.top + s / 3), this.bottomRightBorderDoubleOuterBox = y > 0 || E > 0 ? vA(n.left + oA, n.top + rA, y - o / 3, E - d / 3, BA.BOTTOM_RIGHT) : new aA(n.left + n.width - o / 3, n.top + n.height - d / 3), this.bottomLeftBorderDoubleOuterBox = M > 0 || O > 0 ? vA(n.left + A / 3, n.top + u, M - A / 3, O - d / 3, BA.BOTTOM_LEFT) : new aA(n.left + A / 3, n.top + n.height - d / 3), this.topLeftBorderDoubleInnerBox = g > 0 || B > 0 ? vA(n.left + 2 * A / 3, n.top + 2 * s / 3, g - 2 * A / 3, B - 2 * s / 3, BA.TOP_LEFT) : new aA(n.left + 2 * A / 3, n.top + 2 * s / 3), this.topRightBorderDoubleInnerBox = g > 0 || B > 0 ? vA(n.left + AA, n.top + 2 * s / 3, v - 2 * o / 3, b - 2 * s / 3, BA.TOP_RIGHT) : new aA(n.left + n.width - 2 * o / 3, n.top + 2 * s / 3), this.bottomRightBorderDoubleInnerBox = y > 0 || E > 0 ? vA(n.left + oA, n.top + rA, y - 2 * o / 3, E - 2 * d / 3, BA.BOTTOM_RIGHT) : new aA(n.left + n.width - 2 * o / 3, n.top + n.height - 2 * d / 3), this.bottomLeftBorderDoubleInnerBox = M > 0 || O > 0 ? vA(n.left + 2 * A / 3, n.top + u, M - 2 * A / 3, O - 2 * d / 3, BA.BOTTOM_LEFT) : new aA(n.left + 2 * A / 3, n.top + n.height - 2 * d / 3), this.topLeftBorderStroke = g > 0 || B > 0 ? vA(n.left + A / 2, n.top + s / 2, g - A / 2, B - s / 2, BA.TOP_LEFT) : new aA(n.left + A / 2, n.top + s / 2), this.topRightBorderStroke = g > 0 || B > 0 ? vA(n.left + AA, n.top + s / 2, v - o / 2, b - s / 2, BA.TOP_RIGHT) : new aA(n.left + n.width - o / 2, n.top + s / 2), this.bottomRightBorderStroke = y > 0 || E > 0 ? vA(n.left + oA, n.top + rA, y - o / 2, E - d / 2, BA.BOTTOM_RIGHT) : new aA(n.left + n.width - o / 2, n.top + n.height - d / 2), this.bottomLeftBorderStroke = M > 0 || O > 0 ? vA(n.left + A / 2, n.top + u, M - A / 2, O - d / 2, BA.BOTTOM_LEFT) : new aA(n.left + A / 2, n.top + n.height - d / 2), this.topLeftBorderBox = g > 0 || B > 0 ? vA(n.left, n.top, g, B, BA.TOP_LEFT) : new aA(n.left, n.top), this.topRightBorderBox = v > 0 || b > 0 ? vA(n.left + AA, n.top, v, b, BA.TOP_RIGHT) : new aA(n.left + n.width, n.top), this.bottomRightBorderBox = y > 0 || E > 0 ? vA(n.left + oA, n.top + rA, y, E, BA.BOTTOM_RIGHT) : new aA(n.left + n.width, n.top + n.height), this.bottomLeftBorderBox = M > 0 || O > 0 ? vA(n.left, n.top + u, M, O, BA.BOTTOM_LEFT) : new aA(n.left, n.top + n.height), this.topLeftPaddingBox = g > 0 || B > 0 ? vA(n.left + A, n.top + s, Math.max(0, g - A), Math.max(0, B - s), BA.TOP_LEFT) : new aA(n.left + A, n.top + s), this.topRightPaddingBox = v > 0 || b > 0 ? vA(n.left + Math.min(AA, n.width - o), n.top + s, AA > n.width + o ? 0 : Math.max(0, v - o), Math.max(0, b - s), BA.TOP_RIGHT) : new aA(n.left + n.width - o, n.top + s), this.bottomRightPaddingBox = y > 0 || E > 0 ? vA(n.left + Math.min(oA, n.width - A), n.top + Math.min(rA, n.height - d), Math.max(0, y - o), Math.max(0, E - d), BA.BOTTOM_RIGHT) : new aA(n.left + n.width - o, n.top + n.height - d), this.bottomLeftPaddingBox = M > 0 || O > 0 ? vA(n.left + A, n.top + Math.min(u, n.height - d), Math.max(0, M - A), Math.max(0, O - d), BA.BOTTOM_LEFT) : new aA(n.left + A, n.top + n.height - d), this.topLeftContentBox = g > 0 || B > 0 ? vA(n.left + A + a, n.top + s + i, Math.max(0, g - (A + a)), Math.max(0, B - (s + i)), BA.TOP_LEFT) : new aA(n.left + A + a, n.top + s + i), this.topRightContentBox = v > 0 || b > 0 ? vA(n.left + Math.min(AA, n.width + A + a), n.top + s + i, AA > n.width + A + a ? 0 : v - A + a, b - (s + i), BA.TOP_RIGHT) : new aA(n.left + n.width - (o + r), n.top + s + i), this.bottomRightContentBox = y > 0 || E > 0 ? vA(n.left + Math.min(oA, n.width - (A + a)), n.top + Math.min(rA, n.height + s + i), Math.max(0, y - (o + r)), E - (d + h), BA.BOTTOM_RIGHT) : new aA(n.left + n.width - (o + r), n.top + n.height - (d + h)), this.bottomLeftContentBox = M > 0 || O > 0 ? vA(n.left + A + a, n.top + u, Math.max(0, M - (A + a)), O - (d + h), BA.BOTTOM_LEFT) : new aA(n.left + A + a, n.top + n.height - (d + h));
};
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(BA || (BA = {}));
var vA = function(e, t, n, l, g) {
  var B = (Math.sqrt(2) - 1) / 3 * 4, m = n * B, v = l * B, b = e + n, Q = t + l;
  switch (g) {
    case BA.TOP_LEFT:
      return new Re(new aA(e, Q), new aA(e, Q - v), new aA(b - m, t), new aA(b, t));
    case BA.TOP_RIGHT:
      return new Re(new aA(e, t), new aA(e + m, t), new aA(b, Q - v), new aA(b, Q));
    case BA.BOTTOM_RIGHT:
      return new Re(new aA(b, t), new aA(b, t + v), new aA(e + m, Q), new aA(e, Q));
    case BA.BOTTOM_LEFT:
    default:
      return new Re(new aA(b, Q), new aA(b - m, Q), new aA(e, t + v), new aA(e, t));
  }
}, di = function(e) {
  return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox];
}, gi = function(e) {
  return [e.topLeftPaddingBox, e.topRightPaddingBox, e.bottomRightPaddingBox, e.bottomLeftPaddingBox];
}, xh = function(e, t, n) {
  this.offsetX = e, this.offsetY = t, this.matrix = n, this.type = 0, this.target = 6;
}, je = function(e, t) {
  this.path = e, this.target = t, this.type = 1;
}, Uh = function(e) {
  this.opacity = e, this.type = 2, this.target = 6;
}, Bo = function(e) {
  return e.type === 1;
}, hs = function(e, t) {
  return e.length === t.length && e.some(function(n, l) {
    return n === t[l];
  });
}, wo = function(e) {
  this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
}, mo = function() {
  function e(t, n) {
    if (this.container = t, this.parent = n, this.effects = [], this.curves = new Fh(this.container), this.container.styles.opacity < 1 && this.effects.push(new Uh(this.container.styles.opacity)), this.container.styles.transform !== null) {
      var l = this.container.bounds.left + this.container.styles.transformOrigin[0].number, g = this.container.bounds.top + this.container.styles.transformOrigin[1].number, B = this.container.styles.transform;
      this.effects.push(new xh(l, g, B));
    }
    if (this.container.styles.overflowX !== 0) {
      var m = di(this.curves), v = gi(this.curves);
      hs(m, v) ? this.effects.push(new je(m, 6)) : (this.effects.push(new je(m, 2)), this.effects.push(new je(v, 4)));
    }
  }
  return e.prototype.getEffects = function(t) {
    for (var n = [2, 3].indexOf(this.container.styles.position) === -1, l = this.parent, g = this.effects.slice(0); l; ) {
      var B = l.effects.filter(function(b) {
        return !Bo(b);
      });
      if (n || l.container.styles.position !== 0 || !l.parent) {
        if (g.unshift.apply(g, B), n = [2, 3].indexOf(l.container.styles.position) === -1, l.container.styles.overflowX !== 0) {
          var m = di(l.curves), v = gi(l.curves);
          hs(m, v) || g.unshift(new je(v, 6));
        }
      } else
        g.unshift.apply(g, B);
      l = l.parent;
    }
    return g.filter(function(b) {
      return SA(b.target, t);
    });
  }, e;
}(), yr = function(e, t, n, l) {
  e.container.elements.forEach(function(g) {
    var B = SA(g.flags, 4), m = SA(g.flags, 2), v = new mo(g, e);
    SA(g.styles.display, 2048) && l.push(v);
    var b = SA(g.flags, 8) ? [] : l;
    if (B || m) {
      var Q = B || g.styles.isPositioned() ? n : t, y = new wo(v);
      if (g.styles.isPositioned() || g.styles.opacity < 1 || g.styles.isTransformed()) {
        var E = g.styles.zIndex.order;
        if (E < 0) {
          var I = 0;
          Q.negativeZIndex.some(function(O, R) {
            return E > O.element.container.styles.zIndex.order ? (I = R, !1) : I > 0;
          }), Q.negativeZIndex.splice(I, 0, y);
        } else if (E > 0) {
          var M = 0;
          Q.positiveZIndex.some(function(O, R) {
            return E >= O.element.container.styles.zIndex.order ? (M = R + 1, !1) : M > 0;
          }), Q.positiveZIndex.splice(M, 0, y);
        } else
          Q.zeroOrAutoZIndexOrTransformedOrOpacity.push(y);
      } else
        g.styles.isFloating() ? Q.nonPositionedFloats.push(y) : Q.nonPositionedInlineLevel.push(y);
      yr(v, y, B ? y : n, b);
    } else
      g.styles.isInlineLevel() ? t.inlineLevel.push(v) : t.nonInlineLevel.push(v), yr(v, t, n, b);
    SA(g.flags, 8) && Co(g, b);
  });
}, Co = function(e, t) {
  for (var n = e instanceof Br ? e.start : 1, l = e instanceof Br && e.reversed, g = 0; g < t.length; g++) {
    var B = t[g];
    B.container instanceof eo && typeof B.container.value == "number" && B.container.value !== 0 && (n = B.container.value), B.listValue = Be(n, B.container.styles.listStyleType, !0), n += l ? -1 : 1;
  }
}, us = function(e, t) {
  switch (t) {
    case 0:
      return YA(e.topLeftBorderBox, e.topLeftPaddingBox, e.topRightBorderBox, e.topRightPaddingBox);
    case 1:
      return YA(e.topRightBorderBox, e.topRightPaddingBox, e.bottomRightBorderBox, e.bottomRightPaddingBox);
    case 2:
      return YA(e.bottomRightBorderBox, e.bottomRightPaddingBox, e.bottomLeftBorderBox, e.bottomLeftPaddingBox);
    default:
      return YA(e.bottomLeftBorderBox, e.bottomLeftPaddingBox, e.topLeftBorderBox, e.topLeftPaddingBox);
  }
}, Ve = function(e, t) {
  var n = [];
  return zA(e) ? n.push(e.subdivide(0.5, !1)) : n.push(e), zA(t) ? n.push(t.subdivide(0.5, !0)) : n.push(t), n;
}, YA = function(e, t, n, l) {
  var g = [];
  return zA(e) ? g.push(e.subdivide(0.5, !1)) : g.push(e), zA(n) ? g.push(n.subdivide(0.5, !0)) : g.push(n), zA(l) ? g.push(l.subdivide(0.5, !0).reverse()) : g.push(l), zA(t) ? g.push(t.subdivide(0.5, !1).reverse()) : g.push(t), g;
}, ds = function(e) {
  var t = e.bounds, n = e.styles;
  return t.add(n.borderLeftWidth, n.borderTopWidth, -(n.borderRightWidth + n.borderLeftWidth), -(n.borderTopWidth + n.borderBottomWidth));
}, fi = function(e) {
  var t = e.styles, n = e.bounds, l = mA(t.paddingLeft, n.width), g = mA(t.paddingRight, n.width), B = mA(t.paddingTop, n.width), m = mA(t.paddingBottom, n.width);
  return n.add(l + t.borderLeftWidth, B + t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth + l + g), -(t.borderTopWidth + t.borderBottomWidth + B + m));
}, Ji = function(e, t, n) {
  var l = function(Q, y) {
    return Q === 0 ? y.bounds : Q === 2 ? fi(y) : ds(y);
  }(Mt(e.styles.backgroundOrigin, t), e), g = function(Q, y) {
    return Q === 0 ? y.bounds : Q === 2 ? fi(y) : ds(y);
  }(Mt(e.styles.backgroundClip, t), e), B = Eh(Mt(e.styles.backgroundSize, t), n, l), m = B[0], v = B[1], b = se(Mt(e.styles.backgroundPosition, t), l.width - m, l.height - v);
  return [_h(Mt(e.styles.backgroundRepeat, t), b, B, l, g), Math.round(l.left + b[0]), Math.round(l.top + b[1]), m, v];
}, Ht = function(e) {
  return wA(e) && e.value === jt.AUTO;
}, Ge = function(e) {
  return typeof e == "number";
}, Eh = function(e, t, n) {
  var l = t[0], g = t[1], B = t[2], m = e[0], v = e[1];
  if (!m)
    return [0, 0];
  if (kA(m) && v && kA(v))
    return [mA(m, n.width), mA(v, n.height)];
  var b = Ge(B);
  if (wA(m) && (m.value === jt.CONTAIN || m.value === jt.COVER))
    return Ge(B) ? n.width / n.height < B != (m.value === jt.COVER) ? [n.width, n.width / B] : [n.height * B, n.height] : [n.width, n.height];
  var Q = Ge(l), y = Ge(g), E = Q || y;
  if (Ht(m) && (!v || Ht(v)))
    return Q && y ? [l, g] : b || E ? E && b ? [Q ? l : g * B, y ? g : l / B] : [Q ? l : n.width, y ? g : n.height] : [n.width, n.height];
  if (b) {
    var I = 0, M = 0;
    return kA(m) ? I = mA(m, n.width) : kA(v) && (M = mA(v, n.height)), Ht(m) ? I = M * B : v && !Ht(v) || (M = I / B), [I, M];
  }
  var O = null, R = null;
  if (kA(m) ? O = mA(m, n.width) : v && kA(v) && (R = mA(v, n.height)), O === null || v && !Ht(v) || (R = Q && y ? O / l * g : n.height), R !== null && Ht(m) && (O = Q && y ? R / g * l : n.width), O !== null && R !== null)
    return [O, R];
  throw new Error("Unable to calculate background-size for element");
}, Mt = function(e, t) {
  var n = e[t];
  return n === void 0 ? e[0] : n;
}, _h = function(e, t, n, l, g) {
  var B = t[0], m = t[1], v = n[0], b = n[1];
  switch (e) {
    case 2:
      return [new aA(Math.round(l.left), Math.round(l.top + m)), new aA(Math.round(l.left + l.width), Math.round(l.top + m)), new aA(Math.round(l.left + l.width), Math.round(b + l.top + m)), new aA(Math.round(l.left), Math.round(b + l.top + m))];
    case 3:
      return [new aA(Math.round(l.left + B), Math.round(l.top)), new aA(Math.round(l.left + B + v), Math.round(l.top)), new aA(Math.round(l.left + B + v), Math.round(l.height + l.top)), new aA(Math.round(l.left + B), Math.round(l.height + l.top))];
    case 1:
      return [new aA(Math.round(l.left + B), Math.round(l.top + m)), new aA(Math.round(l.left + B + v), Math.round(l.top + m)), new aA(Math.round(l.left + B + v), Math.round(l.top + m + b)), new aA(Math.round(l.left + B), Math.round(l.top + m + b))];
    default:
      return [new aA(Math.round(g.left), Math.round(g.top)), new aA(Math.round(g.left + g.width), Math.round(g.top)), new aA(Math.round(g.left + g.width), Math.round(g.height + g.top)), new aA(Math.round(g.left), Math.round(g.height + g.top))];
  }
}, gs = "Hidden Text", kh = function() {
  function e(t) {
    this._data = {}, this._document = t;
  }
  return e.prototype.parseMetrics = function(t, n) {
    var l = this._document.createElement("div"), g = this._document.createElement("img"), B = this._document.createElement("span"), m = this._document.body;
    l.style.visibility = "hidden", l.style.fontFamily = t, l.style.fontSize = n, l.style.margin = "0", l.style.padding = "0", l.style.whiteSpace = "nowrap", m.appendChild(l), g.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", g.width = 1, g.height = 1, g.style.margin = "0", g.style.padding = "0", g.style.verticalAlign = "baseline", B.style.fontFamily = t, B.style.fontSize = n, B.style.margin = "0", B.style.padding = "0", B.appendChild(this._document.createTextNode(gs)), l.appendChild(B), l.appendChild(g);
    var v = g.offsetTop - B.offsetTop + 2;
    l.removeChild(B), l.appendChild(this._document.createTextNode(gs)), l.style.lineHeight = "normal", g.style.verticalAlign = "super";
    var b = g.offsetTop - l.offsetTop + 2;
    return m.removeChild(l), { baseline: v, middle: b };
  }, e.prototype.getMetrics = function(t, n) {
    var l = t + " " + n;
    return this._data[l] === void 0 && (this._data[l] = this.parseMetrics(t, n)), this._data[l];
  }, e;
}(), vo = function(e, t) {
  this.context = e, this.options = t;
}, Sh = function(e) {
  function t(n, l) {
    var g = e.call(this, n, l) || this;
    return g._activeEffects = [], g.canvas = l.canvas ? l.canvas : document.createElement("canvas"), g.ctx = g.canvas.getContext("2d"), l.canvas || (g.canvas.width = Math.floor(l.width * l.scale), g.canvas.height = Math.floor(l.height * l.scale), g.canvas.style.width = l.width + "px", g.canvas.style.height = l.height + "px"), g.fontMetrics = new kh(document), g.ctx.scale(g.options.scale, g.options.scale), g.ctx.translate(-l.x, -l.y), g.ctx.textBaseline = "bottom", g._activeEffects = [], g.context.logger.debug("Canvas renderer initialized (" + l.width + "x" + l.height + ") with scale " + l.scale), g;
  }
  return $A(t, e), t.prototype.applyEffects = function(n) {
    for (var l = this; this._activeEffects.length; )
      this.popEffect();
    n.forEach(function(g) {
      return l.applyEffect(g);
    });
  }, t.prototype.applyEffect = function(n) {
    this.ctx.save(), function(l) {
      return l.type === 2;
    }(n) && (this.ctx.globalAlpha = n.opacity), function(l) {
      return l.type === 0;
    }(n) && (this.ctx.translate(n.offsetX, n.offsetY), this.ctx.transform(n.matrix[0], n.matrix[1], n.matrix[2], n.matrix[3], n.matrix[4], n.matrix[5]), this.ctx.translate(-n.offsetX, -n.offsetY)), Bo(n) && (this.path(n.path), this.ctx.clip()), this._activeEffects.push(n);
  }, t.prototype.popEffect = function() {
    this._activeEffects.pop(), this.ctx.restore();
  }, t.prototype.renderStack = function(n) {
    return MA(this, void 0, void 0, function() {
      return LA(this, function(l) {
        switch (l.label) {
          case 0:
            return n.element.container.styles.isVisible() ? [4, this.renderStackContent(n)] : [3, 2];
          case 1:
            l.sent(), l.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, t.prototype.renderNode = function(n) {
    return MA(this, void 0, void 0, function() {
      return LA(this, function(l) {
        switch (l.label) {
          case 0:
            return SA(n.container.flags, 16), n.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(n)] : [3, 3];
          case 1:
            return l.sent(), [4, this.renderNodeContent(n)];
          case 2:
            l.sent(), l.label = 3;
          case 3:
            return [2];
        }
      });
    });
  }, t.prototype.renderTextWithLetterSpacing = function(n, l, g) {
    var B = this;
    l === 0 ? this.ctx.fillText(n.text, n.bounds.left, n.bounds.top + g) : jr(n.text).reduce(function(m, v) {
      return B.ctx.fillText(v, m, n.bounds.top + g), m + B.ctx.measureText(v).width;
    }, n.bounds.left);
  }, t.prototype.createFontStyle = function(n) {
    var l = n.fontVariant.filter(function(m) {
      return m === "normal" || m === "small-caps";
    }).join(""), g = Lh(n.fontFamily).join(", "), B = pe(n.fontSize) ? "" + n.fontSize.number + n.fontSize.unit : n.fontSize.number + "px";
    return [[n.fontStyle, l, n.fontWeight, B, g].join(" "), g, B];
  }, t.prototype.renderTextNode = function(n, l) {
    return MA(this, void 0, void 0, function() {
      var g, B, m, v, b, Q, y, E, I = this;
      return LA(this, function(M) {
        return g = this.createFontStyle(l), B = g[0], m = g[1], v = g[2], this.ctx.font = B, this.ctx.direction = l.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", b = this.fontMetrics.getMetrics(m, v), Q = b.baseline, y = b.middle, E = l.paintOrder, n.textBounds.forEach(function(O) {
          E.forEach(function(R) {
            switch (R) {
              case 0:
                I.ctx.fillStyle = TA(l.color), I.renderTextWithLetterSpacing(O, l.letterSpacing, Q);
                var p = l.textShadow;
                p.length && O.text.trim().length && (p.slice(0).reverse().forEach(function(AA) {
                  I.ctx.shadowColor = TA(AA.color), I.ctx.shadowOffsetX = AA.offsetX.number * I.options.scale, I.ctx.shadowOffsetY = AA.offsetY.number * I.options.scale, I.ctx.shadowBlur = AA.blur.number, I.renderTextWithLetterSpacing(O, l.letterSpacing, Q);
                }), I.ctx.shadowColor = "", I.ctx.shadowOffsetX = 0, I.ctx.shadowOffsetY = 0, I.ctx.shadowBlur = 0), l.textDecorationLine.length && (I.ctx.fillStyle = TA(l.textDecorationColor || l.color), l.textDecorationLine.forEach(function(AA) {
                  switch (AA) {
                    case 1:
                      I.ctx.fillRect(O.bounds.left, Math.round(O.bounds.top + Q), O.bounds.width, 1);
                      break;
                    case 2:
                      I.ctx.fillRect(O.bounds.left, Math.round(O.bounds.top), O.bounds.width, 1);
                      break;
                    case 3:
                      I.ctx.fillRect(O.bounds.left, Math.ceil(O.bounds.top + y), O.bounds.width, 1);
                  }
                }));
                break;
              case 1:
                l.webkitTextStrokeWidth && O.text.trim().length && (I.ctx.strokeStyle = TA(l.webkitTextStrokeColor), I.ctx.lineWidth = l.webkitTextStrokeWidth, I.ctx.lineJoin = window.chrome ? "miter" : "round", I.ctx.strokeText(O.text, O.bounds.left, O.bounds.top + Q)), I.ctx.strokeStyle = "", I.ctx.lineWidth = 0, I.ctx.lineJoin = "miter";
            }
          });
        }), [2];
      });
    });
  }, t.prototype.renderReplacedElement = function(n, l, g) {
    if (g && n.intrinsicWidth > 0 && n.intrinsicHeight > 0) {
      var B = fi(n), m = gi(l);
      this.path(m), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(g, 0, 0, n.intrinsicWidth, n.intrinsicHeight, B.left, B.top, B.width, B.height), this.ctx.restore();
    }
  }, t.prototype.renderNodeContent = function(n) {
    return MA(this, void 0, void 0, function() {
      var l, g, B, m, v, b, Q, y, E, I, M, O, R, p, AA, rA, oA, u;
      return LA(this, function(s) {
        switch (s.label) {
          case 0:
            this.applyEffects(n.getEffects(4)), l = n.container, g = n.curves, B = l.styles, m = 0, v = l.textNodes, s.label = 1;
          case 1:
            return m < v.length ? (b = v[m], [4, this.renderTextNode(b, B)]) : [3, 4];
          case 2:
            s.sent(), s.label = 3;
          case 3:
            return m++, [3, 1];
          case 4:
            if (!(l instanceof $s))
              return [3, 8];
            s.label = 5;
          case 5:
            return s.trys.push([5, 7, , 8]), [4, this.context.cache.match(l.src)];
          case 6:
            return AA = s.sent(), this.renderReplacedElement(l, g, AA), [3, 8];
          case 7:
            return s.sent(), this.context.logger.error("Error loading image " + l.src), [3, 8];
          case 8:
            if (l instanceof Ao && this.renderReplacedElement(l, g, l.canvas), !(l instanceof to))
              return [3, 12];
            s.label = 9;
          case 9:
            return s.trys.push([9, 11, , 12]), [4, this.context.cache.match(l.svg)];
          case 10:
            return AA = s.sent(), this.renderReplacedElement(l, g, AA), [3, 12];
          case 11:
            return s.sent(), this.context.logger.error("Error loading svg " + l.svg.substring(0, 255)), [3, 12];
          case 12:
            return l instanceof no && l.tree ? [4, new t(this.context, { scale: this.options.scale, backgroundColor: l.backgroundColor, x: 0, y: 0, width: l.width, height: l.height }).render(l.tree)] : [3, 14];
          case 13:
            Q = s.sent(), l.width && l.height && this.ctx.drawImage(Q, 0, 0, l.width, l.height, l.bounds.left, l.bounds.top, l.bounds.width, l.bounds.height), s.label = 14;
          case 14:
            if (l instanceof Vr && (y = Math.min(l.bounds.width, l.bounds.height), l.type === ci ? l.checked && (this.ctx.save(), this.path([new aA(l.bounds.left + 0.39363 * y, l.bounds.top + 0.79 * y), new aA(l.bounds.left + 0.16 * y, l.bounds.top + 0.5549 * y), new aA(l.bounds.left + 0.27347 * y, l.bounds.top + 0.44071 * y), new aA(l.bounds.left + 0.39694 * y, l.bounds.top + 0.5649 * y), new aA(l.bounds.left + 0.72983 * y, l.bounds.top + 0.23 * y), new aA(l.bounds.left + 0.84 * y, l.bounds.top + 0.34085 * y), new aA(l.bounds.left + 0.39363 * y, l.bounds.top + 0.79 * y)]), this.ctx.fillStyle = TA(As), this.ctx.fill(), this.ctx.restore()) : l.type === li && l.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(l.bounds.left + y / 2, l.bounds.top + y / 2, y / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = TA(As), this.ctx.fill(), this.ctx.restore())), Th(l) && l.value.length) {
              switch (E = this.createFontStyle(B), oA = E[0], I = E[1], M = this.fontMetrics.getMetrics(oA, I).baseline, this.ctx.font = oA, this.ctx.fillStyle = TA(B.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = Hh(l.styles.textAlign), u = fi(l), O = 0, l.styles.textAlign) {
                case 1:
                  O += u.width / 2;
                  break;
                case 2:
                  O += u.width;
              }
              R = u.add(O, 0, 0, -u.height / 2 + 1), this.ctx.save(), this.path([new aA(u.left, u.top), new aA(u.left + u.width, u.top), new aA(u.left + u.width, u.top + u.height), new aA(u.left, u.top + u.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new ge(l.value, R), B.letterSpacing, M), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
            }
            if (!SA(l.styles.display, 2048))
              return [3, 20];
            if (l.styles.listStyleImage === null)
              return [3, 19];
            if ((p = l.styles.listStyleImage).type !== 0)
              return [3, 18];
            AA = void 0, rA = p.url, s.label = 15;
          case 15:
            return s.trys.push([15, 17, , 18]), [4, this.context.cache.match(rA)];
          case 16:
            return AA = s.sent(), this.ctx.drawImage(AA, l.bounds.left - (AA.width + 10), l.bounds.top), [3, 18];
          case 17:
            return s.sent(), this.context.logger.error("Error loading list-style-image " + rA), [3, 18];
          case 18:
            return [3, 20];
          case 19:
            n.listValue && l.styles.listStyleType !== -1 && (oA = this.createFontStyle(B)[0], this.ctx.font = oA, this.ctx.fillStyle = TA(B.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", u = new ut(l.bounds.left, l.bounds.top + mA(l.styles.paddingTop, l.bounds.width), l.bounds.width, jn(B.lineHeight, B.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new ge(n.listValue, u), B.letterSpacing, jn(B.lineHeight, B.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), s.label = 20;
          case 20:
            return [2];
        }
      });
    });
  }, t.prototype.renderStackContent = function(n) {
    return MA(this, void 0, void 0, function() {
      var l, g, B, m, v, b, Q, y, E, I, M, O, R, p, AA;
      return LA(this, function(rA) {
        switch (rA.label) {
          case 0:
            return SA(n.element.container.flags, 16), [4, this.renderNodeBackgroundAndBorders(n.element)];
          case 1:
            rA.sent(), l = 0, g = n.negativeZIndex, rA.label = 2;
          case 2:
            return l < g.length ? (AA = g[l], [4, this.renderStack(AA)]) : [3, 5];
          case 3:
            rA.sent(), rA.label = 4;
          case 4:
            return l++, [3, 2];
          case 5:
            return [4, this.renderNodeContent(n.element)];
          case 6:
            rA.sent(), B = 0, m = n.nonInlineLevel, rA.label = 7;
          case 7:
            return B < m.length ? (AA = m[B], [4, this.renderNode(AA)]) : [3, 10];
          case 8:
            rA.sent(), rA.label = 9;
          case 9:
            return B++, [3, 7];
          case 10:
            v = 0, b = n.nonPositionedFloats, rA.label = 11;
          case 11:
            return v < b.length ? (AA = b[v], [4, this.renderStack(AA)]) : [3, 14];
          case 12:
            rA.sent(), rA.label = 13;
          case 13:
            return v++, [3, 11];
          case 14:
            Q = 0, y = n.nonPositionedInlineLevel, rA.label = 15;
          case 15:
            return Q < y.length ? (AA = y[Q], [4, this.renderStack(AA)]) : [3, 18];
          case 16:
            rA.sent(), rA.label = 17;
          case 17:
            return Q++, [3, 15];
          case 18:
            E = 0, I = n.inlineLevel, rA.label = 19;
          case 19:
            return E < I.length ? (AA = I[E], [4, this.renderNode(AA)]) : [3, 22];
          case 20:
            rA.sent(), rA.label = 21;
          case 21:
            return E++, [3, 19];
          case 22:
            M = 0, O = n.zeroOrAutoZIndexOrTransformedOrOpacity, rA.label = 23;
          case 23:
            return M < O.length ? (AA = O[M], [4, this.renderStack(AA)]) : [3, 26];
          case 24:
            rA.sent(), rA.label = 25;
          case 25:
            return M++, [3, 23];
          case 26:
            R = 0, p = n.positiveZIndex, rA.label = 27;
          case 27:
            return R < p.length ? (AA = p[R], [4, this.renderStack(AA)]) : [3, 30];
          case 28:
            rA.sent(), rA.label = 29;
          case 29:
            return R++, [3, 27];
          case 30:
            return [2];
        }
      });
    });
  }, t.prototype.mask = function(n) {
    this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(n.slice(0).reverse()), this.ctx.closePath();
  }, t.prototype.path = function(n) {
    this.ctx.beginPath(), this.formatPath(n), this.ctx.closePath();
  }, t.prototype.formatPath = function(n) {
    var l = this;
    n.forEach(function(g, B) {
      var m = zA(g) ? g.start : g;
      B === 0 ? l.ctx.moveTo(m.x, m.y) : l.ctx.lineTo(m.x, m.y), zA(g) && l.ctx.bezierCurveTo(g.startControl.x, g.startControl.y, g.endControl.x, g.endControl.y, g.end.x, g.end.y);
    });
  }, t.prototype.renderRepeat = function(n, l, g, B) {
    this.path(n), this.ctx.fillStyle = l, this.ctx.translate(g, B), this.ctx.fill(), this.ctx.translate(-g, -B);
  }, t.prototype.resizeImage = function(n, l, g) {
    var B;
    if (n.width === l && n.height === g)
      return n;
    var m = ((B = this.canvas.ownerDocument) !== null && B !== void 0 ? B : document).createElement("canvas");
    return m.width = Math.max(1, l), m.height = Math.max(1, g), m.getContext("2d").drawImage(n, 0, 0, n.width, n.height, 0, 0, l, g), m;
  }, t.prototype.renderBackgroundImage = function(n) {
    return MA(this, void 0, void 0, function() {
      var l, g, B, m, v, b;
      return LA(this, function(Q) {
        switch (Q.label) {
          case 0:
            l = n.styles.backgroundImage.length - 1, g = function(y) {
              var E, I, M, O, R, p, AA, rA, oA, u, s, o, d, A, i, r, h, a, c, f, w, C, x, U, F, k, H, L, K, W, V;
              return LA(this, function(_) {
                switch (_.label) {
                  case 0:
                    if (y.type !== 0)
                      return [3, 5];
                    E = void 0, I = y.url, _.label = 1;
                  case 1:
                    return _.trys.push([1, 3, , 4]), [4, B.context.cache.match(I)];
                  case 2:
                    return E = _.sent(), [3, 4];
                  case 3:
                    return _.sent(), B.context.logger.error("Error loading background-image " + I), [3, 4];
                  case 4:
                    return E && (M = Ji(n, l, [E.width, E.height, E.width / E.height]), r = M[0], C = M[1], x = M[2], c = M[3], f = M[4], A = B.ctx.createPattern(B.resizeImage(E, c, f), "repeat"), B.renderRepeat(r, A, C, x)), [3, 6];
                  case 5:
                    y.type === 1 ? (O = Ji(n, l, [null, null, null]), r = O[0], C = O[1], x = O[2], c = O[3], f = O[4], R = dc(y.angle, c, f), p = R[0], AA = R[1], rA = R[2], oA = R[3], u = R[4], (s = document.createElement("canvas")).width = c, s.height = f, o = s.getContext("2d"), d = o.createLinearGradient(AA, oA, rA, u), Kn(y.stops, p).forEach(function(S) {
                      return d.addColorStop(S.stop, TA(S.color));
                    }), o.fillStyle = d, o.fillRect(0, 0, c, f), c > 0 && f > 0 && (A = B.ctx.createPattern(s, "repeat"), B.renderRepeat(r, A, C, x))) : function(S) {
                      return S.type === 2;
                    }(y) && (i = Ji(n, l, [null, null, null]), r = i[0], h = i[1], a = i[2], c = i[3], f = i[4], w = y.position.length === 0 ? [Kr] : y.position, C = mA(w[0], c), x = mA(w[w.length - 1], f), U = function(S, P, G, X, D) {
                      var T = 0, j = 0;
                      switch (S.size) {
                        case 0:
                          S.shape === 0 ? T = j = Math.min(Math.abs(P), Math.abs(P - X), Math.abs(G), Math.abs(G - D)) : S.shape === 1 && (T = Math.min(Math.abs(P), Math.abs(P - X)), j = Math.min(Math.abs(G), Math.abs(G - D)));
                          break;
                        case 2:
                          if (S.shape === 0)
                            T = j = Math.min(qA(P, G), qA(P, G - D), qA(P - X, G), qA(P - X, G - D));
                          else if (S.shape === 1) {
                            var Y = Math.min(Math.abs(G), Math.abs(G - D)) / Math.min(Math.abs(P), Math.abs(P - X)), N = Rn(X, D, P, G, !0), z = N[0], Z = N[1];
                            j = Y * (T = qA(z - P, (Z - G) / Y));
                          }
                          break;
                        case 1:
                          S.shape === 0 ? T = j = Math.max(Math.abs(P), Math.abs(P - X), Math.abs(G), Math.abs(G - D)) : S.shape === 1 && (T = Math.max(Math.abs(P), Math.abs(P - X)), j = Math.max(Math.abs(G), Math.abs(G - D)));
                          break;
                        case 3:
                          if (S.shape === 0)
                            T = j = Math.max(qA(P, G), qA(P, G - D), qA(P - X, G), qA(P - X, G - D));
                          else if (S.shape === 1) {
                            Y = Math.max(Math.abs(G), Math.abs(G - D)) / Math.max(Math.abs(P), Math.abs(P - X));
                            var tA = Rn(X, D, P, G, !1);
                            z = tA[0], Z = tA[1], j = Y * (T = qA(z - P, (Z - G) / Y));
                          }
                      }
                      return Array.isArray(S.size) && (T = mA(S.size[0], X), j = S.size.length === 2 ? mA(S.size[1], D) : T), [T, j];
                    }(y, C, x, c, f), F = U[0], k = U[1], F > 0 && k > 0 && (H = B.ctx.createRadialGradient(h + C, a + x, 0, h + C, a + x, F), Kn(y.stops, 2 * F).forEach(function(S) {
                      return H.addColorStop(S.stop, TA(S.color));
                    }), B.path(r), B.ctx.fillStyle = H, F !== k ? (L = n.bounds.left + 0.5 * n.bounds.width, K = n.bounds.top + 0.5 * n.bounds.height, V = 1 / (W = k / F), B.ctx.save(), B.ctx.translate(L, K), B.ctx.transform(1, 0, 0, W, 0, 0), B.ctx.translate(-L, -K), B.ctx.fillRect(h, V * (a - K) + K, c, f * V), B.ctx.restore()) : B.ctx.fill())), _.label = 6;
                  case 6:
                    return l--, [2];
                }
              });
            }, B = this, m = 0, v = n.styles.backgroundImage.slice(0).reverse(), Q.label = 1;
          case 1:
            return m < v.length ? (b = v[m], [5, g(b)]) : [3, 4];
          case 2:
            Q.sent(), Q.label = 3;
          case 3:
            return m++, [3, 1];
          case 4:
            return [2];
        }
      });
    });
  }, t.prototype.renderSolidBorder = function(n, l, g) {
    return MA(this, void 0, void 0, function() {
      return LA(this, function(B) {
        return this.path(us(g, l)), this.ctx.fillStyle = TA(n), this.ctx.fill(), [2];
      });
    });
  }, t.prototype.renderDoubleBorder = function(n, l, g, B) {
    return MA(this, void 0, void 0, function() {
      var m, v;
      return LA(this, function(b) {
        switch (b.label) {
          case 0:
            return l < 3 ? [4, this.renderSolidBorder(n, g, B)] : [3, 2];
          case 1:
            return b.sent(), [2];
          case 2:
            return m = function(Q, y) {
              switch (y) {
                case 0:
                  return YA(Q.topLeftBorderBox, Q.topLeftBorderDoubleOuterBox, Q.topRightBorderBox, Q.topRightBorderDoubleOuterBox);
                case 1:
                  return YA(Q.topRightBorderBox, Q.topRightBorderDoubleOuterBox, Q.bottomRightBorderBox, Q.bottomRightBorderDoubleOuterBox);
                case 2:
                  return YA(Q.bottomRightBorderBox, Q.bottomRightBorderDoubleOuterBox, Q.bottomLeftBorderBox, Q.bottomLeftBorderDoubleOuterBox);
                default:
                  return YA(Q.bottomLeftBorderBox, Q.bottomLeftBorderDoubleOuterBox, Q.topLeftBorderBox, Q.topLeftBorderDoubleOuterBox);
              }
            }(B, g), this.path(m), this.ctx.fillStyle = TA(n), this.ctx.fill(), v = function(Q, y) {
              switch (y) {
                case 0:
                  return YA(Q.topLeftBorderDoubleInnerBox, Q.topLeftPaddingBox, Q.topRightBorderDoubleInnerBox, Q.topRightPaddingBox);
                case 1:
                  return YA(Q.topRightBorderDoubleInnerBox, Q.topRightPaddingBox, Q.bottomRightBorderDoubleInnerBox, Q.bottomRightPaddingBox);
                case 2:
                  return YA(Q.bottomRightBorderDoubleInnerBox, Q.bottomRightPaddingBox, Q.bottomLeftBorderDoubleInnerBox, Q.bottomLeftPaddingBox);
                default:
                  return YA(Q.bottomLeftBorderDoubleInnerBox, Q.bottomLeftPaddingBox, Q.topLeftBorderDoubleInnerBox, Q.topLeftPaddingBox);
              }
            }(B, g), this.path(v), this.ctx.fill(), [2];
        }
      });
    });
  }, t.prototype.renderNodeBackgroundAndBorders = function(n) {
    return MA(this, void 0, void 0, function() {
      var l, g, B, m, v, b, Q, y, E = this;
      return LA(this, function(I) {
        switch (I.label) {
          case 0:
            return this.applyEffects(n.getEffects(2)), l = n.container.styles, g = !mt(l.backgroundColor) || l.backgroundImage.length, B = [{ style: l.borderTopStyle, color: l.borderTopColor, width: l.borderTopWidth }, { style: l.borderRightStyle, color: l.borderRightColor, width: l.borderRightWidth }, { style: l.borderBottomStyle, color: l.borderBottomColor, width: l.borderBottomWidth }, { style: l.borderLeftStyle, color: l.borderLeftColor, width: l.borderLeftWidth }], m = Ih(Mt(l.backgroundClip, 0), n.curves), g || l.boxShadow.length ? (this.ctx.save(), this.path(m), this.ctx.clip(), mt(l.backgroundColor) || (this.ctx.fillStyle = TA(l.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(n.container)]) : [3, 2];
          case 1:
            I.sent(), this.ctx.restore(), l.boxShadow.slice(0).reverse().forEach(function(M) {
              E.ctx.save();
              var O, R, p, AA, rA, oA = di(n.curves), u = M.inset ? 0 : 1e4, s = (O = oA, R = -u + (M.inset ? 1 : -1) * M.spread.number, p = (M.inset ? 1 : -1) * M.spread.number, AA = M.spread.number * (M.inset ? -2 : 2), rA = M.spread.number * (M.inset ? -2 : 2), O.map(function(o, d) {
                switch (d) {
                  case 0:
                    return o.add(R, p);
                  case 1:
                    return o.add(R + AA, p);
                  case 2:
                    return o.add(R + AA, p + rA);
                  case 3:
                    return o.add(R, p + rA);
                }
                return o;
              }));
              M.inset ? (E.path(oA), E.ctx.clip(), E.mask(s)) : (E.mask(oA), E.ctx.clip(), E.path(s)), E.ctx.shadowOffsetX = M.offsetX.number + u, E.ctx.shadowOffsetY = M.offsetY.number, E.ctx.shadowColor = TA(M.color), E.ctx.shadowBlur = M.blur.number, E.ctx.fillStyle = M.inset ? TA(M.color) : "rgba(0,0,0,1)", E.ctx.fill(), E.ctx.restore();
            }), I.label = 2;
          case 2:
            v = 0, b = 0, Q = B, I.label = 3;
          case 3:
            return b < Q.length ? (y = Q[b]).style !== 0 && !mt(y.color) && y.width > 0 ? y.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(y.color, y.width, v, n.curves, 2)] : [3, 11] : [3, 13];
          case 4:
            return I.sent(), [3, 11];
          case 5:
            return y.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(y.color, y.width, v, n.curves, 3)];
          case 6:
            return I.sent(), [3, 11];
          case 7:
            return y.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(y.color, y.width, v, n.curves)];
          case 8:
            return I.sent(), [3, 11];
          case 9:
            return [4, this.renderSolidBorder(y.color, v, n.curves)];
          case 10:
            I.sent(), I.label = 11;
          case 11:
            v++, I.label = 12;
          case 12:
            return b++, [3, 3];
          case 13:
            return [2];
        }
      });
    });
  }, t.prototype.renderDashedDottedBorder = function(n, l, g, B, m) {
    return MA(this, void 0, void 0, function() {
      var v, b, Q, y, E, I, M, O, R, p, AA, rA, oA, u, s, o;
      return LA(this, function(d) {
        return this.ctx.save(), v = function(A, i) {
          switch (i) {
            case 0:
              return Ve(A.topLeftBorderStroke, A.topRightBorderStroke);
            case 1:
              return Ve(A.topRightBorderStroke, A.bottomRightBorderStroke);
            case 2:
              return Ve(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
            default:
              return Ve(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
          }
        }(B, g), b = us(B, g), m === 2 && (this.path(b), this.ctx.clip()), zA(b[0]) ? (Q = b[0].start.x, y = b[0].start.y) : (Q = b[0].x, y = b[0].y), zA(b[1]) ? (E = b[1].end.x, I = b[1].end.y) : (E = b[1].x, I = b[1].y), M = Math.abs(g === 0 || g === 2 ? Q - E : y - I), this.ctx.beginPath(), m === 3 ? this.formatPath(v) : this.formatPath(b.slice(0, 2)), O = l < 3 ? 3 * l : 2 * l, R = l < 3 ? 2 * l : l, m === 3 && (O = l, R = l), p = !0, M <= 2 * O ? p = !1 : M <= 2 * O + R ? (O *= AA = M / (2 * O + R), R *= AA) : (rA = Math.floor((M + R) / (O + R)), oA = (M - rA * O) / (rA - 1), R = (u = (M - (rA + 1) * O) / rA) <= 0 || Math.abs(R - oA) < Math.abs(R - u) ? oA : u), p && (m === 3 ? this.ctx.setLineDash([0, O + R]) : this.ctx.setLineDash([O, R])), m === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = l) : this.ctx.lineWidth = 2 * l + 1.1, this.ctx.strokeStyle = TA(n), this.ctx.stroke(), this.ctx.setLineDash([]), m === 2 && (zA(b[0]) && (s = b[3], o = b[0], this.ctx.beginPath(), this.formatPath([new aA(s.end.x, s.end.y), new aA(o.start.x, o.start.y)]), this.ctx.stroke()), zA(b[1]) && (s = b[1], o = b[2], this.ctx.beginPath(), this.formatPath([new aA(s.end.x, s.end.y), new aA(o.start.x, o.start.y)]), this.ctx.stroke())), this.ctx.restore(), [2];
      });
    });
  }, t.prototype.render = function(n) {
    return MA(this, void 0, void 0, function() {
      var l;
      return LA(this, function(g) {
        switch (g.label) {
          case 0:
            return this.options.backgroundColor && (this.ctx.fillStyle = TA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), B = new mo(n, null), m = new wo(B), yr(B, m, m, v = []), Co(B.container, v), l = m, [4, this.renderStack(l)];
          case 1:
            return g.sent(), this.applyEffects([]), [2, this.canvas];
        }
        var B, m, v;
      });
    });
  }, t;
}(vo), Th = function(e) {
  return e instanceof ro || e instanceof io || e instanceof Vr && e.type !== li && e.type !== ci;
}, Ih = function(e, t) {
  switch (e) {
    case 0:
      return di(t);
    case 2:
      return function(n) {
        return [n.topLeftContentBox, n.topRightContentBox, n.bottomRightContentBox, n.bottomLeftContentBox];
      }(t);
    default:
      return gi(t);
  }
}, Hh = function(e) {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    default:
      return "left";
  }
}, Oh = ["-apple-system", "system-ui"], Lh = function(e) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function(t) {
    return Oh.indexOf(t) === -1;
  }) : e;
}, Dh = function(e) {
  function t(n, l) {
    var g = e.call(this, n, l) || this;
    return g.canvas = l.canvas ? l.canvas : document.createElement("canvas"), g.ctx = g.canvas.getContext("2d"), g.options = l, g.canvas.width = Math.floor(l.width * l.scale), g.canvas.height = Math.floor(l.height * l.scale), g.canvas.style.width = l.width + "px", g.canvas.style.height = l.height + "px", g.ctx.scale(g.options.scale, g.options.scale), g.ctx.translate(-l.x, -l.y), g.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + l.width + "x" + l.height + " at " + l.x + "," + l.y + ") with scale " + l.scale), g;
  }
  return $A(t, e), t.prototype.render = function(n) {
    return MA(this, void 0, void 0, function() {
      var l, g;
      return LA(this, function(B) {
        switch (B.label) {
          case 0:
            return l = pr(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, n), [4, Mh(l)];
          case 1:
            return g = B.sent(), this.options.backgroundColor && (this.ctx.fillStyle = TA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(g, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
        }
      });
    });
  }, t;
}(vo), Mh = function(e) {
  return new Promise(function(t, n) {
    var l = new Image();
    l.onload = function() {
      t(l);
    }, l.onerror = n, l.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
  });
}, Ph = function() {
  function e(t) {
    var n = t.id, l = t.enabled;
    this.id = n, this.enabled = l, this.start = Date.now();
  }
  return e.prototype.debug = function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, xe([this.id, this.getTime() + "ms"], t)) : this.info.apply(this, t));
  }, e.prototype.getTime = function() {
    return Date.now() - this.start;
  }, e.prototype.info = function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, xe([this.id, this.getTime() + "ms"], t));
  }, e.prototype.warn = function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, xe([this.id, this.getTime() + "ms"], t)) : this.info.apply(this, t));
  }, e.prototype.error = function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, xe([this.id, this.getTime() + "ms"], t)) : this.info.apply(this, t));
  }, e.instances = {}, e;
}(), Kh = function() {
  function e(t, n) {
    var l;
    this.windowBounds = n, this.instanceName = "#" + e.instanceCount++, this.logger = new Ph({ id: this.instanceName, enabled: t.logging }), this.cache = (l = t.cache) !== null && l !== void 0 ? l : new wh(this, t);
  }
  return e.instanceCount = 1, e;
}();
typeof window < "u" && po.setContext(window);
var Rh = function(e, t) {
  return MA(void 0, void 0, void 0, function() {
    var n, l, g, B, m, v, b, Q, y, E, I, M, O, R, p, AA, rA, oA, u, s, o, d, A, i, r, h, a, c, f, w, C, x, U, F, k, H, L, K;
    return LA(this, function(W) {
      switch (W.label) {
        case 0:
          if (!e || typeof e != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (!(n = e.ownerDocument))
            throw new Error("Element is not attached to a Document");
          if (!(l = n.defaultView))
            throw new Error("Document is not attached to a Window");
          return g = { allowTaint: (d = t.allowTaint) !== null && d !== void 0 && d, imageTimeout: (A = t.imageTimeout) !== null && A !== void 0 ? A : 15e3, proxy: t.proxy, useCORS: (i = t.useCORS) !== null && i !== void 0 && i }, B = rr({ logging: (r = t.logging) === null || r === void 0 || r, cache: t.cache }, g), m = { windowWidth: (h = t.windowWidth) !== null && h !== void 0 ? h : l.innerWidth, windowHeight: (a = t.windowHeight) !== null && a !== void 0 ? a : l.innerHeight, scrollX: (c = t.scrollX) !== null && c !== void 0 ? c : l.pageXOffset, scrollY: (f = t.scrollY) !== null && f !== void 0 ? f : l.pageYOffset }, v = new ut(m.scrollX, m.scrollY, m.windowWidth, m.windowHeight), b = new Kh(B, v), Q = (w = t.foreignObjectRendering) !== null && w !== void 0 && w, y = { allowTaint: (C = t.allowTaint) !== null && C !== void 0 && C, onclone: t.onclone, ignoreElements: t.ignoreElements, inlineImages: Q, copyStyles: Q }, b.logger.debug("Starting document clone with size " + v.width + "x" + v.height + " scrolled to " + -v.left + "," + -v.top), E = new cs(b, e, y), (I = E.clonedReferenceElement) ? [4, E.toIFrame(n, v)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return M = W.sent(), O = Gr(I) || I.tagName === "HTML" ? function(V) {
            var _ = V.body, S = V.documentElement;
            if (!_ || !S)
              throw new Error("Unable to get document size");
            var P = Math.max(Math.max(_.scrollWidth, S.scrollWidth), Math.max(_.offsetWidth, S.offsetWidth), Math.max(_.clientWidth, S.clientWidth)), G = Math.max(Math.max(_.scrollHeight, S.scrollHeight), Math.max(_.offsetHeight, S.offsetHeight), Math.max(_.clientHeight, S.clientHeight));
            return new ut(0, 0, P, G);
          }(I.ownerDocument) : bi(b, I), R = O.width, p = O.height, AA = O.left, rA = O.top, oA = jh(b, I, t.backgroundColor), u = { canvas: t.canvas, backgroundColor: oA, scale: (U = (x = t.scale) !== null && x !== void 0 ? x : l.devicePixelRatio) !== null && U !== void 0 ? U : 1, x: ((F = t.x) !== null && F !== void 0 ? F : 0) + AA, y: ((k = t.y) !== null && k !== void 0 ? k : 0) + rA, width: (H = t.width) !== null && H !== void 0 ? H : Math.ceil(R), height: (L = t.height) !== null && L !== void 0 ? L : Math.ceil(p) }, Q ? (b.logger.debug("Document cloned, using foreign object rendering"), [4, new Dh(b, u).render(I)]) : [3, 3];
        case 2:
          return s = W.sent(), [3, 5];
        case 3:
          return b.logger.debug("Document cloned, element located at " + AA + "," + rA + " with size " + R + "x" + p + " using computed rendering"), b.logger.debug("Starting DOM parsing"), o = oo(b, I), oA === o.styles.backgroundColor && (o.styles.backgroundColor = ht.TRANSPARENT), b.logger.debug("Starting renderer for element at " + u.x + "," + u.y + " with size " + u.width + "x" + u.height), [4, new Sh(b, u).render(o)];
        case 4:
          s = W.sent(), W.label = 5;
        case 5:
          return ((K = t.removeContainer) === null || K === void 0 || K) && (cs.destroy(M) || b.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), b.logger.debug("Finished rendering"), [2, s];
      }
    });
  });
}, jh = function(e, t, n) {
  var l = t.ownerDocument, g = l.documentElement ? he(e, getComputedStyle(l.documentElement).backgroundColor) : ht.TRANSPARENT, B = l.body ? he(e, getComputedStyle(l.body).backgroundColor) : ht.TRANSPARENT, m = typeof n == "string" ? he(e, n) : n === null ? ht.TRANSPARENT : 4294967295;
  return t === l.documentElement ? mt(g) ? mt(B) ? m : B : g : m;
};
class Nr {
  constructor() {
    sA(this, "captureScreenshot", async (t) => {
      try {
        const n = window.innerWidth, l = window.innerHeight, g = window.scrollX, B = window.scrollY, m = await function(v, b) {
          return b === void 0 && (b = {}), Rh(v, b);
        }(t, { x: g, y: B, width: n, height: l, scrollX: 0, scrollY: 0, allowTaint: !0, useCORS: !0, backgroundColor: "transparent" });
        return await this.getBlobFromCanvas(m);
      } catch (n) {
        Is(n.message);
      }
      return null;
    });
    sA(this, "getBlobFromCanvas", (t) => new Promise((n) => {
      t.toBlob((l) => {
        n(l);
      });
    }));
  }
}
const we = (e) => {
  const t = document.createElement("img");
  t.src = e;
  const n = document.createElement("button");
  return n.classList.add("shake-sdk-circle-button"), n.appendChild(t), n;
}, uA = () => {
  const e = document.createElement("div");
  return e.classList.add("shake-sdk-container"), e;
}, Xr = () => {
  const e = document.createElement("div");
  return e.classList.add("shake-sdk-card"), e;
}, yo = (e, t, n, l) => {
  const g = document.createElement("img");
  g.src = e, g.setAttribute("draggable", "false");
  const B = document.createElement("button");
  B.classList.add("shake-sdk-bubble"), B.style.backgroundColor = t, B.style.boxShadow = `0 2px 2px ${n}`, B.appendChild(g);
  const m = document.createElement("div"), v = m.attachShadow({ mode: "open" });
  return vt(v), v.appendChild(B), Vh(B, l), m;
}, Vh = (e, t) => {
  let n = !1, l = 0, g = 0, B = !1;
  e.style.left = window.innerWidth - e.offsetWidth - 100 + "px", e.style.top = window.innerHeight - e.offsetHeight - 100 + "px", e.addEventListener("mousedown", function(m) {
    n = !0, B = !1, l = m.clientX - e.getBoundingClientRect().left, g = m.clientY - e.getBoundingClientRect().top;
  }), document.addEventListener("mousemove", function(m) {
    if (n) {
      const v = m.clientX - l, b = m.clientY - g, Q = window.innerWidth - e.offsetWidth, y = window.innerHeight - e.offsetHeight;
      e.style.left = Math.min(Math.max(0, v), Q) + "px", e.style.top = Math.min(Math.max(0, b), y) + "px", (Math.abs(m.movementX) > 2 || Math.abs(m.movementY) > 2) && (B = !0);
    }
  }), e.addEventListener("mouseup", function() {
    n && (n = !1, B || t());
  });
};
function br(e) {
  const t = new Date(e);
  return `${t.getUTCFullYear()}-${(t.getUTCMonth() + 1).toString().padStart(2, "0")}-${t.getUTCDate().toString().padStart(2, "0")}T${t.getUTCHours().toString().padStart(2, "0")}:${t.getUTCMinutes().toString().padStart(2, "0")}:${t.getUTCSeconds().toString().padStart(2, "0")}.${t.getUTCMilliseconds().toString().padStart(3, "0")}Z`;
}
const bo = (e) => e === _A.IMAGE ? `screenshot_${br((/* @__PURE__ */ new Date()).toString())}.jpg` : e === _A.VIDEO ? `screen_recording_${br((/* @__PURE__ */ new Date()).toString())}.mp4` : "";
async function Qo(e) {
  await Fo(e, _A.IMAGE);
}
async function Fo(e, t) {
  if (!e)
    return;
  const n = { type: t, data: e, name: bo(t), timestamp: (/* @__PURE__ */ new Date()).getTime() };
  await er(n);
}
const xo = async () => {
  yA("Returning to Shake.");
  const e = QA.localStorage.getShakeState(), t = await vi(), n = Lo(e, t);
  document.body.appendChild(n), QA.localStorage.setShakeOpened(!0);
}, me = (e = !0) => {
  yA("Shake closed");
  const t = QA.localStorage;
  e && (pu(), t.setShakeState(null), new Promise((l, g) => {
    const B = indexedDB.open(ve, 1);
    B.onerror = function() {
      g("Error opening database");
    }, B.onsuccess = function(m) {
      const v = m.target.result.transaction([VA], "readwrite").objectStore(VA).clear();
      v.onsuccess = function() {
        l("All files deleted successfully from IndexedDB");
      }, v.onerror = function() {
        g("Error deleting files from IndexedDB");
      };
    };
  }));
  const n = document.getElementById("shake-sdk-root");
  n == null || n.remove(), t.setShakeOpened(!1);
}, Wr = () => {
  yA("Grab screenshot clicked."), me(!1);
  const e = yo("data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20width='16px'%20height='16px'%20viewBox='0%200%2032%2032'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20transform='translate(-35.852326,-90.237974)'%3e%3cpath%20style='fill:%23ff0000'%20d='m%2067.852325,106.23797%20a%2016,16%200%200%201%20-16,16%2016,16%200%200%201%20-16,-16%2016,16%200%200%201%2016,-15.999997%2016,16%200%200%201%2016,15.999997%20z'/%3e%3c/g%3e%3c/svg%3e", "white", "#d3d3d3", () => {
    e.remove(), (async () => {
      yA("Capture screenshot click");
      const t = await new Nr().captureScreenshot(document.body);
      t && await Qo(t), await xo();
    })();
  });
  document.body.appendChild(e);
}, mi = class mi {
  constructor() {
    sA(this, "onStartListener", null);
    sA(this, "onStopListener", null);
    sA(this, "stream", null);
    sA(this, "mediaRecorder", null);
    sA(this, "recordedChunks", []);
    sA(this, "timeout", null);
    sA(this, "isRecording", !1);
    sA(this, "start", async () => {
      this.isRecording || (this.stream = await navigator.mediaDevices.getDisplayMedia({ video: !0 }), this.mediaRecorder = new MediaRecorder(this.stream), this.mediaRecorder.onstart = () => {
        var t;
        this.startTimer(), (t = this.onStartListener) == null || t.call(this), this.isRecording = !0;
      }, this.mediaRecorder.ondataavailable = (t) => {
        t.data.size > 0 && this.recordedChunks.push(t.data);
      }, this.mediaRecorder.onstop = () => {
        var n;
        this.stopTimer();
        const t = new Blob(this.recordedChunks, { type: "video/mp4" });
        (n = this.onStopListener) == null || n.call(this, t), this.isRecording = !1;
      }, this.mediaRecorder.start());
    });
    sA(this, "stop", () => {
      var t;
      if ((t = this.mediaRecorder) == null || t.stop(), this.stream) {
        const n = this.stream.getTracks();
        for (let l = 0; l < n.length; l++)
          n[l].stop();
      }
    });
    sA(this, "startTimer", () => {
      this.stopTimer(), this.timeout = window.setTimeout(() => {
        this.stop();
      }, mi.SCREEN_RECORDING_TIME);
    });
    sA(this, "stopTimer", () => {
      this.timeout && (window.clearTimeout(this.timeout), this.timeout = null);
    });
  }
};
sA(mi, "SCREEN_RECORDING_TIME", 3e4);
let Qr = mi;
const Gh = async (e) => {
  yA("Stop recording click."), await async function(t) {
    await Fo(t, _A.VIDEO);
  }(e), await xo();
}, Yr = async () => {
  yA("Record recording click.");
  try {
    const e = yo("data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20width='15px'%20height='15px'%20viewBox='0%200%2032%2032'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%3e%3crect%20stroke='%23000'%20rx='3'%20stroke-width='0'%20height='32'%20width='32'%20y='0'%20x='0'%20fill='%23ffffff'/%3e%3c/g%3e%3c/svg%3e", "red", "#d90000", () => {
      t.stop();
    }), t = new Qr();
    t.onStartListener = () => {
      document.body.appendChild(e), me(!1);
    }, t.onStopListener = (n) => {
      e.remove(), Gh(n);
    }, await t.start();
  } catch (e) {
    Is(e == null ? void 0 : e.message);
  }
}, Nh = { shake_sdk_dialog_add_attachment: "Add attachment", shake_sdk_dialog_add_attachment_grab_screenshot: "Grab screenshot", shake_sdk_dialog_add_attachment_record_screen: "Record screen", shake_sdk_dialog_add_attachment_browse_locations: "Browse other locations", shake_sdk_dialog_add_attachment_type_video: "Video", shake_sdk_dialog_add_attachment_type_image: "Screenshot", shake_sdk_dialog_ticket_sent_title: "Done.", shake_sdk_dialog_ticket_sent_message: "Your ticket was sent.", shake_sdk_dialog_attachment_limit_title: "File not attached", shake_sdk_dialog_attachment_limit_message: "A maximum of 10 files can be attached to a feedback form.", shake_sdk_error_message: "Something went wrong.", shake_sdk_main_button_title: "Send feedback", shake_sdk_ticket_form_title: "New ticket", shake_sdk_new_ticket_feedback_type_title: "Ticket type", shake_sdk_new_ticket_feedback_type_bug: "Bug report", shake_sdk_new_ticket_feedback_type_question: "Question", shake_sdk_new_ticket_feedback_type_suggestion: "Improvement suggestion", shake_sdk_ticket_form_description_placeholder: "Description", shake_sdk_ticket_form_submit_button_text: "Submit", shake_sdk_ticket_form_submit_button_text_loading: "Submiting..." }, CA = () => {
  if (ri.EN === ri.EN)
    return Nh;
}, Uo = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15055_29642)'%3e%3cpath%20d='M12.3994%208.47314C13.6969%209.77065%2013.6969%2011.8743%2012.3994%2013.1719C11.1019%2014.4694%208.99819%2014.4694%207.70068%2013.1719C6.40316%2011.8743%206.40316%209.77065%207.70068%208.47314C8.99819%207.17562%2011.1019%207.17562%2012.3994%208.47314Z'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.5%207.49992V14.9999C17.5%2015.9208%2016.7542%2016.6666%2015.8333%2016.6666H4.16667C3.24583%2016.6666%202.5%2015.9208%202.5%2014.9999V7.49992C2.5%206.57908%203.24583%205.83325%204.16667%205.83325H5.83333L7.05167%203.74659C7.20083%203.49075%207.475%203.33325%207.77167%203.33325H12.1917C12.4842%203.33325%2012.755%203.48659%2012.9058%203.73659L14.1667%205.83325H15.8333C16.7542%205.83325%2017.5%206.57908%2017.5%207.49992Z'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15055_29642'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Eo = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15055_29718)'%3e%3cpath%20d='M10.9375%2014.7916H4.375C3.33917%2014.7916%202.5%2013.9524%202.5%2012.9166V7.08325C2.5%206.04742%203.33917%205.20825%204.375%205.20825H10.9375C11.9733%205.20825%2012.8125%206.04742%2012.8125%207.08325V12.9166C12.8125%2013.9524%2011.9733%2014.7916%2010.9375%2014.7916Z'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.8125%2010.9141L15.975%2013.4591C16.5883%2013.9533%2017.5%2013.5166%2017.5%2012.7291V7.27077C17.5%206.48327%2016.5883%206.04661%2015.975%206.54077L12.8125%209.08577'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15055_29718'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", _o = "data:image/svg+xml,%3csvg%20width='23'%20height='23'%20viewBox='0%200%2023%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15050_29400)'%3e%3cpath%20d='M11.3994%207.80005V15'%20stroke='%238E8E93'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.9998%2011.4001H7.7998'%20stroke='%238E8E93'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15050_29400'%3e%3crect%20width='21.6'%20height='21.6'%20fill='white'%20transform='translate(0.599609%200.600098)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", ko = (e, t, n) => {
  let l = !1;
  const g = uA();
  return g.classList.add("shake-sdk-context-menu"), t.forEach((B) => g.appendChild(B)), document.addEventListener("click", function(B) {
    l && B.target !== e && (g.style.display = "none", l = !1);
  }), { menu: g, toggle: () => {
    l ? (g.style.display = "none", l = !1) : (g.style.display = n ? "flex" : "block", l = !0), g.style.left = e.getBoundingClientRect().left + "px", g.style.top = e.getBoundingClientRect().top + "px";
  } };
}, fs = ({ img: e, text: t, onClick: n }) => {
  const l = document.createElement("button");
  return l.classList.add("shake-sdk-context-menu-item"), l.onclick = n, l.appendChild(ZA(e)), l.appendChild(((g) => {
    const B = document.createElement("p");
    return B.classList.add("shake-sdk-text-p2"), B.innerText = g, B;
  })(t)), l;
};
class Fr {
  constructor(t, n, l) {
    sA(this, "title");
    sA(this, "message");
    sA(this, "time");
    sA(this, "element");
    this.title = l, this.message = t, this.time = n, this.element = null;
    const g = uA();
    g.classList.add("toast-notification"), this.element = g;
    const B = document.getElementsByClassName("toast-notification");
    g.style.marginBottom = 55 * B.length + "px";
    const m = uA();
    if (m.classList.add("content-container"), this.title) {
      const I = uA();
      I.classList.add("title-container"), I.textContent = this.title, m.appendChild(I);
    }
    const v = uA();
    v.classList.add("message-container"), v.textContent = this.message, m.appendChild(v), g.appendChild(m);
    const b = uA();
    b.classList.add("close-notification");
    const Q = ZA("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14021_39143)'%3e%3cpath%20d='M16%208L8%2016'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16%2016.001L8%208.00098'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14021_39143'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
    b.appendChild(Q), g.append(b);
    const y = document.createElement("div"), E = y.attachShadow({ mode: "open" });
    E.appendChild(g), vt(E), document.body.appendChild(y), setTimeout(function() {
      y.remove();
    }, this.time), b.addEventListener("click", () => {
      g.remove();
    });
  }
}
const So = async () => (await vi()).length >= 10, pi = () => {
  const e = navigator.userAgent;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e);
}, Xh = () => {
  const e = we(_o);
  e.classList.add("shake-sdk-attachment-add-button");
  const t = uA();
  return t.classList.add("shake-sdk-attachments-add-item"), t.appendChild(e), t.appendChild(((n) => {
    const l = [];
    l.push(fs({ img: Uo, text: CA().shake_sdk_dialog_add_attachment_grab_screenshot, onClick: Wr })), pi() || l.push(fs({ img: Eo, text: CA().shake_sdk_dialog_add_attachment_record_screen, onClick: Yr }));
    const { menu: g, toggle: B } = ko(n, l);
    return n.onclick = async (m) => {
      m.stopPropagation(), await So() ? new Fr(CA().shake_sdk_dialog_attachment_limit_message, 4e3, CA().shake_sdk_dialog_attachment_limit_title) : B();
    }, g;
  })(e)), t;
}, Si = ({ src: e, controls: t, autoplay: n }) => {
  const l = document.createElement("video");
  return l.classList.add("shake-sdk-video"), l.src = e, l.controls = t ?? !1, l.preload = "metadata", l.autoplay = n ?? !1, l.loop = !0, l;
}, To = "data:image/svg+xml,%3csvg%20width='31'%20height='32'%20viewBox='0%200%2031%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.7285%2013.4543L17.8197%2018.5455'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.8197%2013.4545L12.7285%2018.5457'%20stroke='%23F2F2F7'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Wh = (e) => {
  const t = uA();
  return t.classList.add("shake-sdk-attachment-title-box"), t.appendChild(((n) => {
    const l = document.createElement("p");
    return l.classList.add("shake-sdk-text-p3"), l.innerText = n, l;
  })(e)), t;
}, Yh = (e, t) => {
  const n = QA.attachmentsManager, l = /* @__PURE__ */ new Map();
  let g = e.length - 1;
  const B = (y) => Array.from(l.keys()).find((E) => E === y.name) ?? y.name, m = (y) => {
    g = Array.from(l.keys()).indexOf(B(y)), b();
  }, v = (y) => {
    n.removeAttachment(y);
  };
  n.removeObservers.push((y) => {
    const E = l.get(B(y));
    E && (E.remove(), l.delete(B(y)), l.size - 1 < g && (g = l.size - 1), b());
  }), n.updateObservers.push((y) => {
    const E = l.get(B(y));
    E && ((I, M) => {
      const O = URL.createObjectURL(M.drawingData ?? M.data), R = I.getElementsByClassName("shake-sdk-attachment-item-thumbnail");
      M.type == _A.IMAGE && (R[0].src = O), M.type == _A.VIDEO && (R[0].src = O);
    })(E, y);
  });
  const b = () => {
    if (g < 0)
      return void t(null);
    const y = Array.from(l.keys())[g], E = Array.from(l.values())[g], I = "shake-sdk-attachment-item-selected", M = Array.from(l.values());
    if (M) {
      for (const O of M)
        O.classList.remove(I);
      E == null || E.classList.add(I);
    }
    t(y);
  }, Q = uA();
  return Q.classList.add("shake-sdk-attachments-items"), e.forEach((y) => {
    const E = e.find((M) => M.name === B(y));
    if (!E)
      return;
    const I = ((M, O, R) => {
      const p = we(To);
      let AA;
      p.classList.add("shake-sdk-attachment-remove"), p.onclick = (A) => {
        A.stopPropagation(), R(M);
      };
      const rA = URL.createObjectURL(M.drawingData ?? M.data);
      AA = M.type == _A.IMAGE ? ZA(rA) : Si({ src: rA + "#t=0.1", autoplay: !0 }), AA.classList.add("shake-sdk-attachment-item-thumbnail");
      const oA = Xr();
      oA.classList.add("shake-sdk-attachment-item-card"), oA.appendChild(AA), oA.appendChild(p);
      const u = M.type == _A.IMAGE ? CA().shake_sdk_dialog_add_attachment_type_image : CA().shake_sdk_dialog_add_attachment_type_video, s = Wh(u), o = uA();
      o.classList.add("shake-sdk-attachment-item-title"), o.appendChild(s);
      const d = uA();
      return d.classList.add("shake-sdk-attachment-item"), d.onclick = () => O(M), d.appendChild(oA), d.appendChild(o), d;
    })(E, m, v);
    l.set(y.name, I), Q.appendChild(I);
  }), Q.appendChild(Xh()), b(), Q;
};
var UA = ((e) => (e.PENCIL = "pencil", e.BLUR = "blur", e.ELLIPSE = "ellipse", e.RECT = "rect", e))(UA || {}), ae = {};
const qi = Ba(Object.freeze(Object.defineProperty({ __proto__: null, default: {} }, Symbol.toStringTag, { value: "Module" })));
(function(e) {
  /*! Fabric.js Copyright 2008-2015, Printio (Juriy Zaytsev, Maxim Chernyak) */
  var t, n, l, g, B, m, v, b, Q, y, E, I, M, O, R, p = p || { version: "5.3.0" };
  if (e.fabric = p, typeof document < "u" && typeof window < "u")
    document instanceof (typeof HTMLDocument < "u" ? HTMLDocument : Document) ? p.document = document : p.document = document.implementation.createHTMLDocument(""), p.window = window;
  else {
    var AA = new qi.JSDOM(decodeURIComponent("%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E"), { features: { FetchExternalResources: ["img"] }, resources: "usable" }).window;
    p.document = AA.document, p.jsdomImplForWrapper = qi.implForWrapper, p.nodeCanvas = qi.Canvas, p.window = AA, DOMParser = p.window.DOMParser;
  }
  function rA(u, s) {
    var o = u.canvas, d = s.targetCanvas, A = d.getContext("2d");
    A.translate(0, d.height), A.scale(1, -1);
    var i = o.height - d.height;
    A.drawImage(o, 0, i, d.width, d.height, 0, 0, d.width, d.height);
  }
  function oA(u, s) {
    var o = s.targetCanvas.getContext("2d"), d = s.destinationWidth, A = s.destinationHeight, i = d * A * 4, r = new Uint8Array(this.imageBuffer, 0, i), h = new Uint8ClampedArray(this.imageBuffer, 0, i);
    u.readPixels(0, 0, d, A, u.RGBA, u.UNSIGNED_BYTE, r);
    var a = new ImageData(h, d, A);
    o.putImageData(a, 0, 0);
  }
  p.isTouchSupported = "ontouchstart" in p.window || "ontouchstart" in p.document || p.window && p.window.navigator && p.window.navigator.maxTouchPoints > 0, p.isLikelyNode = typeof Buffer < "u" && typeof window > "u", p.SHARED_ATTRIBUTES = ["display", "transform", "fill", "fill-opacity", "fill-rule", "opacity", "stroke", "stroke-dasharray", "stroke-linecap", "stroke-dashoffset", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "id", "paint-order", "vector-effect", "instantiated_by_use", "clip-path"], p.DPI = 96, p.reNum = "(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:[eE][-+]?\\d+)?)", p.commaWsp = "(?:\\s+,?\\s*|,\\s*)", p.rePathCommand = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:[eE][-+]?\d+)?)/gi, p.reNonWord = /[ \n\.,;!\?\-]/, p.fontPaths = {}, p.iMatrix = [1, 0, 0, 1, 0, 0], p.svgNS = "http://www.w3.org/2000/svg", p.perfLimitSizeTotal = 2097152, p.maxCacheSideLimit = 4096, p.minCacheSideLimit = 256, p.charWidthsCache = {}, p.textureSize = 2048, p.disableStyleCopyPaste = !1, p.enableGLFiltering = !0, p.devicePixelRatio = p.window.devicePixelRatio || p.window.webkitDevicePixelRatio || p.window.mozDevicePixelRatio || 1, p.browserShadowBlurConstant = 1, p.arcToSegmentsCache = {}, p.boundsOfCurveCache = {}, p.cachesBoundsOfCurve = !0, p.forceGLPutImageData = !1, p.initFilterBackend = function() {
    return p.enableGLFiltering && p.isWebglSupported && p.isWebglSupported(p.textureSize) ? (console.log("max texture size: " + p.maxTextureSize), new p.WebglFilterBackend({ tileSize: p.textureSize })) : p.Canvas2dFilterBackend ? new p.Canvas2dFilterBackend() : void 0;
  }, typeof document < "u" && typeof window < "u" && (window.fabric = p), function() {
    function u(o, d) {
      if (this.__eventListeners[o]) {
        var A = this.__eventListeners[o];
        d ? A[A.indexOf(d)] = !1 : p.util.array.fill(A, !1);
      }
    }
    function s(o, d) {
      var A = (function() {
        d.apply(this, arguments), this.off(o, A);
      }).bind(this);
      this.on(o, A);
    }
    p.Observable = { fire: function(o, d) {
      if (!this.__eventListeners)
        return this;
      var A = this.__eventListeners[o];
      if (!A)
        return this;
      for (var i = 0, r = A.length; i < r; i++)
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
  }(), p.Collection = { _objects: [], add: function() {
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
  } }, p.CommonMethods = { _setOptions: function(u) {
    for (var s in u)
      this.set(s, u[s]);
  }, _initGradient: function(u, s) {
    !u || !u.colorStops || u instanceof p.Gradient || this.set(s, new p.Gradient(u));
  }, _initPattern: function(u, s, o) {
    !u || !u.source || u instanceof p.Pattern ? o && o() : this.set(s, new p.Pattern(u, o));
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
    p.util = { cos: function(r) {
      if (r === 0)
        return 1;
      switch (r < 0 && (r = -r), r / i) {
        case 1:
        case 3:
          return 0;
        case 2:
          return -1;
      }
      return Math.cos(r);
    }, sin: function(r) {
      if (r === 0)
        return 0;
      var h = 1;
      switch (r < 0 && (h = -1), r / i) {
        case 1:
          return h;
        case 2:
          return 0;
        case 3:
          return -h;
      }
      return Math.sin(r);
    }, removeFromArray: function(r, h) {
      var a = r.indexOf(h);
      return a !== -1 && r.splice(a, 1), r;
    }, getRandomInt: function(r, h) {
      return Math.floor(Math.random() * (h - r + 1)) + r;
    }, degreesToRadians: function(r) {
      return r * A;
    }, radiansToDegrees: function(r) {
      return r / A;
    }, rotatePoint: function(r, h, a) {
      var c = new p.Point(r.x - h.x, r.y - h.y), f = p.util.rotateVector(c, a);
      return new p.Point(f.x, f.y).addEquals(h);
    }, rotateVector: function(r, h) {
      var a = p.util.sin(h), c = p.util.cos(h);
      return { x: r.x * c - r.y * a, y: r.x * a + r.y * c };
    }, createVector: function(r, h) {
      return new p.Point(h.x - r.x, h.y - r.y);
    }, calcAngleBetweenVectors: function(r, h) {
      return Math.acos((r.x * h.x + r.y * h.y) / (Math.hypot(r.x, r.y) * Math.hypot(h.x, h.y)));
    }, getHatVector: function(r) {
      return new p.Point(r.x, r.y).multiply(1 / Math.hypot(r.x, r.y));
    }, getBisector: function(r, h, a) {
      var c = p.util.createVector(r, h), f = p.util.createVector(r, a), w = p.util.calcAngleBetweenVectors(c, f), C = w * (p.util.calcAngleBetweenVectors(p.util.rotateVector(c, w), f) === 0 ? 1 : -1) / 2;
      return { vector: p.util.getHatVector(p.util.rotateVector(c, C)), angle: w };
    }, projectStrokeOnPoints: function(r, h, a) {
      var c = [], f = h.strokeWidth / 2, w = h.strokeUniform ? new p.Point(1 / h.scaleX, 1 / h.scaleY) : new p.Point(1, 1), C = function(x) {
        var U = f / Math.hypot(x.x, x.y);
        return new p.Point(x.x * U * w.x, x.y * U * w.y);
      };
      return r.length <= 1 || r.forEach(function(x, U) {
        var F, k, H = new p.Point(x.x, x.y);
        U === 0 ? (k = r[U + 1], F = a ? C(p.util.createVector(k, H)).addEquals(H) : r[r.length - 1]) : U === r.length - 1 ? (F = r[U - 1], k = a ? C(p.util.createVector(F, H)).addEquals(H) : r[0]) : (F = r[U - 1], k = r[U + 1]);
        var L, K, W = p.util.getBisector(H, F, k), V = W.vector, _ = W.angle;
        if (h.strokeLineJoin === "miter" && (L = -f / Math.sin(_ / 2), K = new p.Point(V.x * L * w.x, V.y * L * w.y), Math.hypot(K.x, K.y) / f <= h.strokeMiterLimit))
          return c.push(H.add(K)), void c.push(H.subtract(K));
        L = -f * Math.SQRT2, K = new p.Point(V.x * L * w.x, V.y * L * w.y), c.push(H.add(K)), c.push(H.subtract(K));
      }), c;
    }, transformPoint: function(r, h, a) {
      return a ? new p.Point(h[0] * r.x + h[2] * r.y, h[1] * r.x + h[3] * r.y) : new p.Point(h[0] * r.x + h[2] * r.y + h[4], h[1] * r.x + h[3] * r.y + h[5]);
    }, makeBoundingBoxFromPoints: function(r, h) {
      if (h)
        for (var a = 0; a < r.length; a++)
          r[a] = p.util.transformPoint(r[a], h);
      var c = [r[0].x, r[1].x, r[2].x, r[3].x], f = p.util.array.min(c), w = p.util.array.max(c) - f, C = [r[0].y, r[1].y, r[2].y, r[3].y], x = p.util.array.min(C);
      return { left: f, top: x, width: w, height: p.util.array.max(C) - x };
    }, invertTransform: function(r) {
      var h = 1 / (r[0] * r[3] - r[1] * r[2]), a = [h * r[3], -h * r[1], -h * r[2], h * r[0]], c = p.util.transformPoint({ x: r[4], y: r[5] }, a, !0);
      return a[4] = -c.x, a[5] = -c.y, a;
    }, toFixed: function(r, h) {
      return parseFloat(Number(r).toFixed(h));
    }, parseUnit: function(r, h) {
      var a = /\D{0,2}$/.exec(r), c = parseFloat(r);
      switch (h || (h = p.Text.DEFAULT_SVG_FONT_SIZE), a[0]) {
        case "mm":
          return c * p.DPI / 25.4;
        case "cm":
          return c * p.DPI / 2.54;
        case "in":
          return c * p.DPI;
        case "pt":
          return c * p.DPI / 72;
        case "pc":
          return c * p.DPI / 72 * 12;
        case "em":
          return c * h;
        default:
          return c;
      }
    }, falseFunction: function() {
      return !1;
    }, getKlass: function(r, h) {
      return r = p.util.string.camelize(r.charAt(0).toUpperCase() + r.slice(1)), p.util.resolveNamespace(h)[r];
    }, getSvgAttributes: function(r) {
      var h = ["instantiated_by_use", "style", "id", "class"];
      switch (r) {
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
    }, resolveNamespace: function(r) {
      if (!r)
        return p;
      var h, a = r.split("."), c = a.length, f = u || p.window;
      for (h = 0; h < c; ++h)
        f = f[a[h]];
      return f;
    }, loadImage: function(r, h, a, c) {
      if (r) {
        var f = p.util.createImage(), w = function() {
          h && h.call(a, f, !1), f = f.onload = f.onerror = null;
        };
        f.onload = w, f.onerror = function() {
          p.log("Error loading " + f.src), h && h.call(a, null, !0), f = f.onload = f.onerror = null;
        }, r.indexOf("data") !== 0 && c != null && (f.crossOrigin = c), r.substring(0, 14) === "data:image/svg" && (f.onload = null, p.util.loadImageInDom(f, w)), f.src = r;
      } else
        h && h.call(a, r);
    }, loadImageInDom: function(r, h) {
      var a = p.document.createElement("div");
      a.style.width = a.style.height = "1px", a.style.left = a.style.top = "-100%", a.style.position = "absolute", a.appendChild(r), p.document.querySelector("body").appendChild(a), r.onload = function() {
        h(), a.parentNode.removeChild(a), a = null;
      };
    }, enlivenObjects: function(r, h, a, c) {
      var f = [], w = 0, C = (r = r || []).length;
      function x() {
        ++w === C && h && h(f.filter(function(U) {
          return U;
        }));
      }
      C ? r.forEach(function(U, F) {
        U && U.type ? p.util.getKlass(U.type, a).fromObject(U, function(k, H) {
          H || (f[F] = k), c && c(U, k, H), x();
        }) : x();
      }) : h && h(f);
    }, enlivenObjectEnlivables: function(r, h, a) {
      var c = p.Object.ENLIVEN_PROPS.filter(function(f) {
        return !!r[f];
      });
      p.util.enlivenObjects(c.map(function(f) {
        return r[f];
      }), function(f) {
        var w = {};
        c.forEach(function(C, x) {
          w[C] = f[x], h && (h[C] = f[x]);
        }), a && a(w);
      });
    }, enlivenPatterns: function(r, h) {
      function a() {
        ++f === w && h && h(c);
      }
      var c = [], f = 0, w = (r = r || []).length;
      w ? r.forEach(function(C, x) {
        C && C.source ? new p.Pattern(C, function(U) {
          c[x] = U, a();
        }) : (c[x] = C, a());
      }) : h && h(c);
    }, groupSVGElements: function(r, h, a) {
      var c;
      return r && r.length === 1 ? (a !== void 0 && (r[0].sourcePath = a), r[0]) : (h && (h.width && h.height ? h.centerPoint = { x: h.width / 2, y: h.height / 2 } : (delete h.width, delete h.height)), c = new p.Group(r, h), a !== void 0 && (c.sourcePath = a), c);
    }, populateWithProperties: function(r, h, a) {
      if (a && Array.isArray(a))
        for (var c = 0, f = a.length; c < f; c++)
          a[c] in r && (h[a[c]] = r[a[c]]);
    }, createCanvasElement: function() {
      return p.document.createElement("canvas");
    }, copyCanvasElement: function(r) {
      var h = p.util.createCanvasElement();
      return h.width = r.width, h.height = r.height, h.getContext("2d").drawImage(r, 0, 0), h;
    }, toDataURL: function(r, h, a) {
      return r.toDataURL("image/" + h, a);
    }, createImage: function() {
      return p.document.createElement("img");
    }, multiplyTransformMatrices: function(r, h, a) {
      return [r[0] * h[0] + r[2] * h[1], r[1] * h[0] + r[3] * h[1], r[0] * h[2] + r[2] * h[3], r[1] * h[2] + r[3] * h[3], a ? 0 : r[0] * h[4] + r[2] * h[5] + r[4], a ? 0 : r[1] * h[4] + r[3] * h[5] + r[5]];
    }, qrDecompose: function(r) {
      var h = o(r[1], r[0]), a = d(r[0], 2) + d(r[1], 2), c = s(a), f = (r[0] * r[3] - r[2] * r[1]) / c, w = o(r[0] * r[2] + r[1] * r[3], a);
      return { angle: h / A, scaleX: c, scaleY: f, skewX: w / A, skewY: 0, translateX: r[4], translateY: r[5] };
    }, calcRotateMatrix: function(r) {
      if (!r.angle)
        return p.iMatrix.concat();
      var h = p.util.degreesToRadians(r.angle), a = p.util.cos(h), c = p.util.sin(h);
      return [a, c, -c, a, 0, 0];
    }, calcDimensionsMatrix: function(r) {
      var h = r.scaleX === void 0 ? 1 : r.scaleX, a = r.scaleY === void 0 ? 1 : r.scaleY, c = [r.flipX ? -h : h, 0, 0, r.flipY ? -a : a, 0, 0], f = p.util.multiplyTransformMatrices, w = p.util.degreesToRadians;
      return r.skewX && (c = f(c, [1, 0, Math.tan(w(r.skewX)), 1], !0)), r.skewY && (c = f(c, [1, Math.tan(w(r.skewY)), 0, 1], !0)), c;
    }, composeMatrix: function(r) {
      var h = [1, 0, 0, 1, r.translateX || 0, r.translateY || 0], a = p.util.multiplyTransformMatrices;
      return r.angle && (h = a(h, p.util.calcRotateMatrix(r))), (r.scaleX !== 1 || r.scaleY !== 1 || r.skewX || r.skewY || r.flipX || r.flipY) && (h = a(h, p.util.calcDimensionsMatrix(r))), h;
    }, resetObjectTransform: function(r) {
      r.scaleX = 1, r.scaleY = 1, r.skewX = 0, r.skewY = 0, r.flipX = !1, r.flipY = !1, r.rotate(0);
    }, saveObjectTransform: function(r) {
      return { scaleX: r.scaleX, scaleY: r.scaleY, skewX: r.skewX, skewY: r.skewY, angle: r.angle, left: r.left, flipX: r.flipX, flipY: r.flipY, top: r.top };
    }, isTransparent: function(r, h, a, c) {
      c > 0 && (h > c ? h -= c : h = 0, a > c ? a -= c : a = 0);
      var f, w = !0, C = r.getImageData(h, a, 2 * c || 1, 2 * c || 1), x = C.data.length;
      for (f = 3; f < x && (w = C.data[f] <= 0); f += 4)
        ;
      return C = null, w;
    }, parsePreserveAspectRatioAttribute: function(r) {
      var h, a = "meet", c = r.split(" ");
      return c && c.length && ((a = c.pop()) !== "meet" && a !== "slice" ? (h = a, a = "meet") : c.length && (h = c.pop())), { meetOrSlice: a, alignX: h !== "none" ? h.slice(1, 4) : "none", alignY: h !== "none" ? h.slice(5, 8) : "none" };
    }, clearFabricFontCache: function(r) {
      (r = (r || "").toLowerCase()) ? p.charWidthsCache[r] && delete p.charWidthsCache[r] : p.charWidthsCache = {};
    }, limitDimsByArea: function(r, h) {
      var a = Math.sqrt(h * r), c = Math.floor(h / a);
      return { x: Math.floor(a), y: c };
    }, capValue: function(r, h, a) {
      return Math.max(r, Math.min(h, a));
    }, findScaleToFit: function(r, h) {
      return Math.min(h.width / r.width, h.height / r.height);
    }, findScaleToCover: function(r, h) {
      return Math.max(h.width / r.width, h.height / r.height);
    }, matrixToSVG: function(r) {
      return "matrix(" + r.map(function(h) {
        return p.util.toFixed(h, p.Object.NUM_FRACTION_DIGITS);
      }).join(" ") + ")";
    }, removeTransformFromObject: function(r, h) {
      var a = p.util.invertTransform(h), c = p.util.multiplyTransformMatrices(a, r.calcOwnMatrix());
      p.util.applyTransformToObject(r, c);
    }, addTransformToObject: function(r, h) {
      p.util.applyTransformToObject(r, p.util.multiplyTransformMatrices(h, r.calcOwnMatrix()));
    }, applyTransformToObject: function(r, h) {
      var a = p.util.qrDecompose(h), c = new p.Point(a.translateX, a.translateY);
      r.flipX = !1, r.flipY = !1, r.set("scaleX", a.scaleX), r.set("scaleY", a.scaleY), r.skewX = a.skewX, r.skewY = a.skewY, r.angle = a.angle, r.setPositionByOrigin(c, "center", "center");
    }, sizeAfterTransform: function(r, h, a) {
      var c = r / 2, f = h / 2, w = [{ x: -c, y: -f }, { x: c, y: -f }, { x: -c, y: f }, { x: c, y: f }], C = p.util.calcDimensionsMatrix(a), x = p.util.makeBoundingBoxFromPoints(w, C);
      return { x: x.width, y: x.height };
    }, mergeClipPaths: function(r, h) {
      var a = r, c = h;
      a.inverted && !c.inverted && (a = h, c = r), p.util.applyTransformToObject(c, p.util.multiplyTransformMatrices(p.util.invertTransform(a.calcTransformMatrix()), c.calcTransformMatrix()));
      var f = a.inverted && c.inverted;
      return f && (a.inverted = c.inverted = !1), new p.Group([a], { clipPath: c, inverted: f });
    }, hasStyleChanged: function(r, h, a) {
      return a = a || !1, r.fill !== h.fill || r.stroke !== h.stroke || r.strokeWidth !== h.strokeWidth || r.fontSize !== h.fontSize || r.fontFamily !== h.fontFamily || r.fontWeight !== h.fontWeight || r.fontStyle !== h.fontStyle || r.textBackgroundColor !== h.textBackgroundColor || r.deltaY !== h.deltaY || a && (r.overline !== h.overline || r.underline !== h.underline || r.linethrough !== h.linethrough);
    }, stylesToArray: function(r, h) {
      r = p.util.object.clone(r, !0);
      for (var a = h.split(`
`), c = -1, f = {}, w = [], C = 0; C < a.length; C++)
        if (r[C])
          for (var x = 0; x < a[C].length; x++) {
            c++;
            var U = r[C][x];
            U && Object.keys(U).length > 0 && (p.util.hasStyleChanged(f, U, !0) ? w.push({ start: c, end: c + 1, style: U }) : w[w.length - 1].end++), f = U || {};
          }
        else
          c += a[C].length;
      return w;
    }, stylesFromArray: function(r, h) {
      if (!Array.isArray(r))
        return r;
      for (var a = h.split(`
`), c = -1, f = 0, w = {}, C = 0; C < a.length; C++)
        for (var x = 0; x < a[C].length; x++)
          c++, r[f] && r[f].start <= c && c < r[f].end && (w[C] = w[C] || {}, w[C][x] = Object.assign({}, r[f].style), c === r[f].end - 1 && f++);
      return w;
    } };
  }(e), function() {
    var u = Array.prototype.join, s = { m: 2, l: 2, h: 1, v: 1, c: 6, s: 4, q: 4, t: 2, a: 7 }, o = { m: "l", M: "L" };
    function d(U, F, k, H, L, K, W, V, _, S, P) {
      var G = p.util.cos(U), X = p.util.sin(U), D = p.util.cos(F), T = p.util.sin(F), j = k * L * D - H * K * T + W, Y = H * L * D + k * K * T + V;
      return ["C", S + _ * (-k * L * X - H * K * G), P + _ * (-H * L * X + k * K * G), j + _ * (k * L * T + H * K * D), Y + _ * (H * L * T - k * K * D), j, Y];
    }
    function A(U, F, k, H) {
      var L = Math.atan2(F, U), K = Math.atan2(H, k);
      return K >= L ? K - L : 2 * Math.PI - (L - K);
    }
    function i(U, F, k) {
      for (var H = k[1], L = k[2], K = k[3], W = k[4], V = k[5], _ = function(G, X, D, T, j, Y, N) {
        var z = Math.PI, Z = N * z / 180, tA = p.util.sin(Z), eA = p.util.cos(Z), q = 0, iA = 0, J = -eA * G * 0.5 - tA * X * 0.5, lA = -eA * X * 0.5 + tA * G * 0.5, nA = (D = Math.abs(D)) * D, hA = (T = Math.abs(T)) * T, pA = lA * lA, KA = J * J, nt = nA * hA - nA * pA - hA * KA, yt = 0;
        if (nt < 0) {
          var FA = Math.sqrt(1 - nt / (nA * hA));
          D *= FA, T *= FA;
        } else
          yt = (j === Y ? -1 : 1) * Math.sqrt(nt / (nA * pA + hA * KA));
        var NA = yt * D * lA / T, st = -yt * T * J / D, xt = eA * NA - tA * st + 0.5 * G, Wt = tA * NA + eA * st + 0.5 * X, Ti = A(1, 0, (J - NA) / D, (lA - st) / T), Ut = A((J - NA) / D, (lA - st) / T, (-J - NA) / D, (-lA - st) / T);
        Y === 0 && Ut > 0 ? Ut -= 2 * z : Y === 1 && Ut < 0 && (Ut += 2 * z);
        for (var zr = Math.ceil(Math.abs(Ut / z * 2)), ye = [], Yt = Ut / zr, Po = 8 / 3 * Math.sin(Yt / 4) * Math.sin(Yt / 4) / Math.sin(Yt / 2), Ii = Ti + Yt, zt = 0; zt < zr; zt++)
          ye[zt] = d(Ti, Ii, eA, tA, D, T, xt, Wt, Po, q, iA), q = ye[zt][5], iA = ye[zt][6], Ti = Ii, Ii += Yt;
        return ye;
      }(k[6] - U, k[7] - F, H, L, W, V, K), S = 0, P = _.length; S < P; S++)
        _[S][1] += U, _[S][2] += F, _[S][3] += U, _[S][4] += F, _[S][5] += U, _[S][6] += F;
      return _;
    }
    function r(U, F, k, H) {
      return Math.sqrt((k - U) * (k - U) + (H - F) * (H - F));
    }
    function h(U, F, k, H, L, K, W, V) {
      return function(_) {
        var S, P = (S = _) * S * S, G = function(T) {
          return 3 * T * T * (1 - T);
        }(_), X = function(T) {
          return 3 * T * (1 - T) * (1 - T);
        }(_), D = function(T) {
          return (1 - T) * (1 - T) * (1 - T);
        }(_);
        return { x: W * P + L * G + k * X + U * D, y: V * P + K * G + H * X + F * D };
      };
    }
    function a(U, F, k, H, L, K, W, V) {
      return function(_) {
        var S = 1 - _, P = 3 * S * S * (k - U) + 6 * S * _ * (L - k) + 3 * _ * _ * (W - L), G = 3 * S * S * (H - F) + 6 * S * _ * (K - H) + 3 * _ * _ * (V - K);
        return Math.atan2(G, P);
      };
    }
    function c(U, F, k, H, L, K) {
      return function(W) {
        var V, _ = (V = W) * V, S = function(G) {
          return 2 * G * (1 - G);
        }(W), P = function(G) {
          return (1 - G) * (1 - G);
        }(W);
        return { x: L * _ + k * S + U * P, y: K * _ + H * S + F * P };
      };
    }
    function f(U, F, k, H, L, K) {
      return function(W) {
        var V = 1 - W, _ = 2 * V * (k - U) + 2 * W * (L - k), S = 2 * V * (H - F) + 2 * W * (K - H);
        return Math.atan2(S, _);
      };
    }
    function w(U, F, k) {
      var H, L, K = { x: F, y: k }, W = 0;
      for (L = 1; L <= 100; L += 1)
        H = U(L / 100), W += r(K.x, K.y, H.x, H.y), K = H;
      return W;
    }
    function C(U, F) {
      for (var k, H, L, K = 0, W = 0, V = U.iterator, _ = { x: U.x, y: U.y }, S = 0.01, P = U.angleFinder; W < F && S > 1e-4; )
        k = V(K), L = K, (H = r(_.x, _.y, k.x, k.y)) + W > F ? (K -= S, S /= 2) : (_ = k, K += S, W += H);
      return k.angle = P(L), k;
    }
    function x(U) {
      for (var F, k, H, L, K = 0, W = U.length, V = 0, _ = 0, S = 0, P = 0, G = [], X = 0; X < W; X++) {
        switch (H = { x: V, y: _, command: (F = U[X])[0] }, F[0]) {
          case "M":
            H.length = 0, S = V = F[1], P = _ = F[2];
            break;
          case "L":
            H.length = r(V, _, F[1], F[2]), V = F[1], _ = F[2];
            break;
          case "C":
            k = h(V, _, F[1], F[2], F[3], F[4], F[5], F[6]), L = a(V, _, F[1], F[2], F[3], F[4], F[5], F[6]), H.iterator = k, H.angleFinder = L, H.length = w(k, V, _), V = F[5], _ = F[6];
            break;
          case "Q":
            k = c(V, _, F[1], F[2], F[3], F[4]), L = f(V, _, F[1], F[2], F[3], F[4]), H.iterator = k, H.angleFinder = L, H.length = w(k, V, _), V = F[3], _ = F[4];
            break;
          case "Z":
          case "z":
            H.destX = S, H.destY = P, H.length = r(V, _, S, P), V = S, _ = P;
        }
        K += H.length, G.push(H);
      }
      return G.push({ length: K, x: V, y: _ }), G;
    }
    p.util.joinPath = function(U) {
      return U.map(function(F) {
        return F.join(" ");
      }).join(" ");
    }, p.util.parsePath = function(U) {
      var F, k, H, L, K, W = [], V = [], _ = p.rePathCommand, S = "[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?\\s*", P = "(" + S + ")" + p.commaWsp, G = "([01])" + p.commaWsp + "?", X = new RegExp(P + "?" + P + "?" + P + G + G + P + "?(" + S + ")", "g");
      if (!U || !U.match)
        return W;
      for (var D, T = 0, j = (K = U.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi)).length; T < j; T++) {
        L = (F = K[T]).slice(1).trim(), V.length = 0;
        var Y = F.charAt(0);
        if (D = [Y], Y.toLowerCase() === "a")
          for (var N; N = X.exec(L); )
            for (var z = 1; z < N.length; z++)
              V.push(N[z]);
        else
          for (; H = _.exec(L); )
            V.push(H[0]);
        z = 0;
        for (var Z = V.length; z < Z; z++)
          k = parseFloat(V[z]), isNaN(k) || D.push(k);
        var tA = s[Y.toLowerCase()], eA = o[Y] || Y;
        if (D.length - 1 > tA)
          for (var q = 1, iA = D.length; q < iA; q += tA)
            W.push([Y].concat(D.slice(q, q + tA))), Y = eA;
        else
          W.push(D);
      }
      return W;
    }, p.util.makePathSimpler = function(U) {
      var F, k, H, L, K, W, V = 0, _ = 0, S = U.length, P = 0, G = 0, X = [];
      for (k = 0; k < S; ++k) {
        switch (H = !1, (F = U[k].slice(0))[0]) {
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
            V = F[1], _ = F[2], P = F[1], G = F[2];
            break;
          case "c":
            F[0] = "C", F[1] += V, F[2] += _, F[3] += V, F[4] += _, F[5] += V, F[6] += _;
          case "C":
            K = F[3], W = F[4], V = F[5], _ = F[6];
            break;
          case "s":
            F[0] = "S", F[1] += V, F[2] += _, F[3] += V, F[4] += _;
          case "S":
            L === "C" ? (K = 2 * V - K, W = 2 * _ - W) : (K = V, W = _), V = F[3], _ = F[4], F[0] = "C", F[5] = F[3], F[6] = F[4], F[3] = F[1], F[4] = F[2], F[1] = K, F[2] = W, K = F[3], W = F[4];
            break;
          case "q":
            F[0] = "Q", F[1] += V, F[2] += _, F[3] += V, F[4] += _;
          case "Q":
            K = F[1], W = F[2], V = F[3], _ = F[4];
            break;
          case "t":
            F[0] = "T", F[1] += V, F[2] += _;
          case "T":
            L === "Q" ? (K = 2 * V - K, W = 2 * _ - W) : (K = V, W = _), F[0] = "Q", V = F[1], _ = F[2], F[1] = K, F[2] = W, F[3] = V, F[4] = _;
            break;
          case "a":
            F[0] = "A", F[6] += V, F[7] += _;
          case "A":
            H = !0, X = X.concat(i(V, _, F)), V = F[6], _ = F[7];
            break;
          case "z":
          case "Z":
            V = P, _ = G;
        }
        H || X.push(F), L = F[0];
      }
      return X;
    }, p.util.getSmoothPathFromPoints = function(U, F) {
      var k, H = [], L = new p.Point(U[0].x, U[0].y), K = new p.Point(U[1].x, U[1].y), W = U.length, V = 1, _ = 0, S = W > 2;
      for (F = F || 0, S && (V = U[2].x < K.x ? -1 : U[2].x === K.x ? 0 : 1, _ = U[2].y < K.y ? -1 : U[2].y === K.y ? 0 : 1), H.push(["M", L.x - V * F, L.y - _ * F]), k = 1; k < W; k++) {
        if (!L.eq(K)) {
          var P = L.midPointFrom(K);
          H.push(["Q", L.x, L.y, P.x, P.y]);
        }
        L = U[k], k + 1 < U.length && (K = U[k + 1]);
      }
      return S && (V = L.x > U[k - 2].x ? 1 : L.x === U[k - 2].x ? 0 : -1, _ = L.y > U[k - 2].y ? 1 : L.y === U[k - 2].y ? 0 : -1), H.push(["L", L.x + V * F, L.y + _ * F]), H;
    }, p.util.getPathSegmentsInfo = x, p.util.getBoundsOfCurve = function(U, F, k, H, L, K, W, V) {
      var _;
      if (p.cachesBoundsOfCurve && (_ = u.call(arguments), p.boundsOfCurveCache[_]))
        return p.boundsOfCurveCache[_];
      var S, P, G, X, D, T, j, Y, N = Math.sqrt, z = Math.min, Z = Math.max, tA = Math.abs, eA = [], q = [[], []];
      P = 6 * U - 12 * k + 6 * L, S = -3 * U + 9 * k - 9 * L + 3 * W, G = 3 * k - 3 * U;
      for (var iA = 0; iA < 2; ++iA)
        if (iA > 0 && (P = 6 * F - 12 * H + 6 * K, S = -3 * F + 9 * H - 9 * K + 3 * V, G = 3 * H - 3 * F), tA(S) < 1e-12) {
          if (tA(P) < 1e-12)
            continue;
          0 < (X = -G / P) && X < 1 && eA.push(X);
        } else
          (j = P * P - 4 * G * S) < 0 || (0 < (D = (-P + (Y = N(j))) / (2 * S)) && D < 1 && eA.push(D), 0 < (T = (-P - Y) / (2 * S)) && T < 1 && eA.push(T));
      for (var J, lA, nA, hA = eA.length, pA = hA; hA--; )
        J = (nA = 1 - (X = eA[hA])) * nA * nA * U + 3 * nA * nA * X * k + 3 * nA * X * X * L + X * X * X * W, q[0][hA] = J, lA = nA * nA * nA * F + 3 * nA * nA * X * H + 3 * nA * X * X * K + X * X * X * V, q[1][hA] = lA;
      q[0][pA] = U, q[1][pA] = F, q[0][pA + 1] = W, q[1][pA + 1] = V;
      var KA = [{ x: z.apply(null, q[0]), y: z.apply(null, q[1]) }, { x: Z.apply(null, q[0]), y: Z.apply(null, q[1]) }];
      return p.cachesBoundsOfCurve && (p.boundsOfCurveCache[_] = KA), KA;
    }, p.util.getPointOnPath = function(U, F, k) {
      k || (k = x(U));
      for (var H = 0; F - k[H].length > 0 && H < k.length - 2; )
        F -= k[H].length, H++;
      var L, K = k[H], W = F / K.length, V = K.command, _ = U[H];
      switch (V) {
        case "M":
          return { x: K.x, y: K.y, angle: 0 };
        case "Z":
        case "z":
          return (L = new p.Point(K.x, K.y).lerp(new p.Point(K.destX, K.destY), W)).angle = Math.atan2(K.destY - K.y, K.destX - K.x), L;
        case "L":
          return (L = new p.Point(K.x, K.y).lerp(new p.Point(_[1], _[2]), W)).angle = Math.atan2(_[2] - K.y, _[1] - K.x), L;
        case "C":
        case "Q":
          return C(K, F);
      }
    }, p.util.transformPath = function(U, F, k) {
      return k && (F = p.util.multiplyTransformMatrices(F, [1, 0, 0, 1, -k.x, -k.y])), U.map(function(H) {
        for (var L = H.slice(0), K = {}, W = 1; W < H.length - 1; W += 2)
          K.x = H[W], K.y = H[W + 1], K = p.util.transformPoint(K, F), L[W] = K.x, L[W + 1] = K.y;
        return L;
      });
    };
  }(), function() {
    var u = Array.prototype.slice;
    function s(o, d, A) {
      if (o && o.length !== 0) {
        var i = o.length - 1, r = d ? o[i][d] : o[i];
        if (d)
          for (; i--; )
            A(o[i][d], r) && (r = o[i][d]);
        else
          for (; i--; )
            A(o[i], r) && (r = o[i]);
        return r;
      }
    }
    p.util.array = { fill: function(o, d) {
      for (var A = o.length; A--; )
        o[A] = d;
      return o;
    }, invoke: function(o, d) {
      for (var A = u.call(arguments, 2), i = [], r = 0, h = o.length; r < h; r++)
        i[r] = A.length ? o[r][d].apply(o[r], A) : o[r][d].call(o[r]);
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
        if (!p.isLikelyNode && o instanceof Element)
          s = o;
        else if (o instanceof Array) {
          s = [];
          for (var A = 0, i = o.length; A < i; A++)
            s[A] = u({}, o[A], d);
        } else if (o && typeof o == "object")
          for (var r in o)
            r === "canvas" || r === "group" ? s[r] = null : o.hasOwnProperty(r) && (s[r] = u({}, o[r], d));
        else
          s = o;
      else
        for (var r in o)
          s[r] = o[r];
      return s;
    }
    p.util.object = { extend: u, clone: function(s, o) {
      return u({}, s, o);
    } }, p.util.object.extend(p.util, p.Observable);
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
    p.util.string = { camelize: function(s) {
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
      for (var r in { toString: 1 })
        if (r === "toString")
          return !1;
      return !0;
    }(), d = function(r, h, a) {
      for (var c in h)
        c in r.prototype && typeof r.prototype[c] == "function" && (h[c] + "").indexOf("callSuper") > -1 ? r.prototype[c] = /* @__PURE__ */ function(f) {
          return function() {
            var w = this.constructor.superclass;
            this.constructor.superclass = a;
            var C = h[f].apply(this, arguments);
            if (this.constructor.superclass = w, f !== "initialize")
              return C;
          };
        }(c) : r.prototype[c] = h[c], o && (h.toString !== Object.prototype.toString && (r.prototype.toString = h.toString), h.valueOf !== Object.prototype.valueOf && (r.prototype.valueOf = h.valueOf));
    };
    function A() {
    }
    function i(r) {
      for (var h = null, a = this; a.constructor.superclass; ) {
        var c = a.constructor.superclass.prototype[r];
        if (a[r] !== c) {
          h = c;
          break;
        }
        a = a.constructor.superclass.prototype;
      }
      return h ? arguments.length > 1 ? h.apply(this, u.call(arguments, 1)) : h.call(this) : console.log("tried to callSuper " + r + ", method not found in prototype chain", this);
    }
    p.util.createClass = function() {
      var r = null, h = u.call(arguments, 0);
      function a() {
        this.initialize.apply(this, arguments);
      }
      typeof h[0] == "function" && (r = h.shift()), a.superclass = r, a.subclasses = [], r && (A.prototype = r.prototype, a.prototype = new A(), r.subclasses.push(a));
      for (var c = 0, f = h.length; c < f; c++)
        d(a, h[c], r);
      return a.prototype.initialize || (a.prototype.initialize = s), a.prototype.constructor = a, a.prototype.callSuper = i, a;
    };
  }(), t = !!p.document.createElement("div").attachEvent, n = ["touchstart", "touchmove", "touchend"], p.util.addListener = function(u, s, o, d) {
    u && u.addEventListener(s, o, !t && d);
  }, p.util.removeListener = function(u, s, o, d) {
    u && u.removeEventListener(s, o, !t && d);
  }, p.util.getPointer = function(u) {
    var s = u.target, o = p.util.getScrollLeftTop(s), d = function(A) {
      var i = A.changedTouches;
      return i && i[0] ? i[0] : A;
    }(u);
    return { x: d.clientX + o.left, y: d.clientY + o.top };
  }, p.util.isTouchEvent = function(u) {
    return n.indexOf(u.type) > -1 || u.pointerType === "touch";
  }, l = p.document.createElement("div"), g = typeof l.style.opacity == "string", B = typeof l.style.filter == "string", m = /alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/, v = function(u) {
    return u;
  }, g ? v = function(u, s) {
    return u.style.opacity = s, u;
  } : B && (v = function(u, s) {
    var o = u.style;
    return u.currentStyle && !u.currentStyle.hasLayout && (o.zoom = 1), m.test(o.filter) ? (s = s >= 0.9999 ? "" : "alpha(opacity=" + 100 * s + ")", o.filter = o.filter.replace(m, s)) : o.filter += " alpha(opacity=" + 100 * s + ")", u;
  }), p.util.setStyle = function(u, s) {
    var o = u.style;
    if (!o)
      return u;
    if (typeof s == "string")
      return u.style.cssText += ";" + s, s.indexOf("opacity") > -1 ? v(u, s.match(/opacity:\s*(\d?\.?\d*)/)[1]) : u;
    for (var d in s)
      if (d === "opacity")
        v(u, s[d]);
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
      s = i(p.document.childNodes) instanceof Array;
    } catch {
    }
    function r(a, c) {
      var f = p.document.createElement(a);
      for (var w in c)
        w === "class" ? f.className = c[w] : w === "for" ? f.htmlFor = c[w] : f.setAttribute(w, c[w]);
      return f;
    }
    function h(a) {
      for (var c = 0, f = 0, w = p.document.documentElement, C = p.document.body || { scrollLeft: 0, scrollTop: 0 }; a && (a.parentNode || a.host) && ((a = a.parentNode || a.host) === p.document ? (c = C.scrollLeft || w.scrollLeft || 0, f = C.scrollTop || w.scrollTop || 0) : (c += a.scrollLeft || 0, f += a.scrollTop || 0), a.nodeType !== 1 || a.style.position !== "fixed"); )
        ;
      return { left: c, top: f };
    }
    s || (i = function(a) {
      for (var c = new Array(a.length), f = a.length; f--; )
        c[f] = a[f];
      return c;
    }), o = p.document.defaultView && p.document.defaultView.getComputedStyle ? function(a, c) {
      var f = p.document.defaultView.getComputedStyle(a, null);
      return f ? f[c] : void 0;
    } : function(a, c) {
      var f = a.style[c];
      return !f && a.currentStyle && (f = a.currentStyle[c]), f;
    }, d = p.document.documentElement.style, A = "userSelect" in d ? "userSelect" : "MozUserSelect" in d ? "MozUserSelect" : "WebkitUserSelect" in d ? "WebkitUserSelect" : "KhtmlUserSelect" in d ? "KhtmlUserSelect" : "", p.util.makeElementUnselectable = function(a) {
      return a.onselectstart !== void 0 && (a.onselectstart = p.util.falseFunction), A ? a.style[A] = "none" : typeof a.unselectable == "string" && (a.unselectable = "on"), a;
    }, p.util.makeElementSelectable = function(a) {
      return a.onselectstart !== void 0 && (a.onselectstart = null), A ? a.style[A] = "" : typeof a.unselectable == "string" && (a.unselectable = ""), a;
    }, p.util.setImageSmoothing = function(a, c) {
      a.imageSmoothingEnabled = a.imageSmoothingEnabled || a.webkitImageSmoothingEnabled || a.mozImageSmoothingEnabled || a.msImageSmoothingEnabled || a.oImageSmoothingEnabled, a.imageSmoothingEnabled = c;
    }, p.util.getById = function(a) {
      return typeof a == "string" ? p.document.getElementById(a) : a;
    }, p.util.toArray = i, p.util.addClass = function(a, c) {
      a && (" " + a.className + " ").indexOf(" " + c + " ") === -1 && (a.className += (a.className ? " " : "") + c);
    }, p.util.makeElement = r, p.util.wrapElement = function(a, c, f) {
      return typeof c == "string" && (c = r(c, f)), a.parentNode && a.parentNode.replaceChild(c, a), c.appendChild(a), c;
    }, p.util.getScrollLeftTop = h, p.util.getElementOffset = function(a) {
      var c, f, w = a && a.ownerDocument, C = { left: 0, top: 0 }, x = { left: 0, top: 0 }, U = { borderLeftWidth: "left", borderTopWidth: "top", paddingLeft: "left", paddingTop: "top" };
      if (!w)
        return x;
      for (var F in U)
        x[U[F]] += parseInt(o(a, F), 10) || 0;
      return c = w.documentElement, a.getBoundingClientRect !== void 0 && (C = a.getBoundingClientRect()), f = h(a), { left: C.left + f.left - (c.clientLeft || 0) + x.left, top: C.top + f.top - (c.clientTop || 0) + x.top };
    }, p.util.getNodeCanvas = function(a) {
      var c = p.jsdomImplForWrapper(a);
      return c._canvas || c._image;
    }, p.util.cleanUpJsdomNode = function(a) {
      if (p.isLikelyNode) {
        var c = p.jsdomImplForWrapper(a);
        c && (c._image = null, c._canvas = null, c._currentSrc = null, c._attributes = null, c._classList = null);
      }
    };
  }(), function() {
    function u() {
    }
    p.util.request = function(s, o) {
      o || (o = {});
      var d = o.method ? o.method.toUpperCase() : "GET", A = o.onComplete || function() {
      }, i = new p.window.XMLHttpRequest(), r = o.body || o.parameters;
      return i.onreadystatechange = function() {
        i.readyState === 4 && (A(i), i.onreadystatechange = u);
      }, d === "GET" && (r = null, typeof o.parameters == "string" && (s = function(h, a) {
        return h + (/\?/.test(h) ? "&" : "?") + a;
      }(s, o.parameters))), i.open(d, s, !0), d !== "POST" && d !== "PUT" || i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.send(r), i;
    };
  }(), p.log = console.log, p.warn = console.warn, function() {
    var u = p.util.object.extend, s = p.util.object.clone, o = [];
    function d() {
      return !1;
    }
    function A(a, c, f, w) {
      return -f * Math.cos(a / w * (Math.PI / 2)) + f + c;
    }
    p.util.object.extend(o, { cancelAll: function() {
      var a = this.splice(0);
      return a.forEach(function(c) {
        c.cancel();
      }), a;
    }, cancelByCanvas: function(a) {
      if (!a)
        return [];
      var c = this.filter(function(f) {
        return typeof f.target == "object" && f.target.canvas === a;
      });
      return c.forEach(function(f) {
        f.cancel();
      }), c;
    }, cancelByTarget: function(a) {
      var c = this.findAnimationsByTarget(a);
      return c.forEach(function(f) {
        f.cancel();
      }), c;
    }, findAnimationIndex: function(a) {
      return this.indexOf(this.findAnimation(a));
    }, findAnimation: function(a) {
      return this.find(function(c) {
        return c.cancel === a;
      });
    }, findAnimationsByTarget: function(a) {
      return a ? this.filter(function(c) {
        return c.target === a;
      }) : [];
    } });
    var i = p.window.requestAnimationFrame || p.window.webkitRequestAnimationFrame || p.window.mozRequestAnimationFrame || p.window.oRequestAnimationFrame || p.window.msRequestAnimationFrame || function(a) {
      return p.window.setTimeout(a, 1e3 / 60);
    }, r = p.window.cancelAnimationFrame || p.window.clearTimeout;
    function h() {
      return i.apply(p.window, arguments);
    }
    p.util.animate = function(a) {
      a || (a = {});
      var c, f = !1, w = function() {
        var C = p.runningAnimations.indexOf(c);
        return C > -1 && p.runningAnimations.splice(C, 1)[0];
      };
      return c = u(s(a), { cancel: function() {
        return f = !0, w();
      }, currentValue: "startValue" in a ? a.startValue : 0, completionRate: 0, durationRate: 0 }), p.runningAnimations.push(c), h(function(C) {
        var x, U = C || +/* @__PURE__ */ new Date(), F = a.duration || 500, k = U + F, H = a.onChange || d, L = a.abort || d, K = a.onComplete || d, W = a.easing || A, V = "startValue" in a && a.startValue.length > 0, _ = "startValue" in a ? a.startValue : 0, S = "endValue" in a ? a.endValue : 100, P = a.byValue || (V ? _.map(function(G, X) {
          return S[X] - _[X];
        }) : S - _);
        a.onStart && a.onStart(), function G(X) {
          var D = (x = X || +/* @__PURE__ */ new Date()) > k ? F : x - U, T = D / F, j = V ? _.map(function(N, z) {
            return W(D, _[z], P[z], F);
          }) : W(D, _, P, F), Y = Math.abs(V ? (j[0] - _[0]) / P[0] : (j - _) / P);
          if (c.currentValue = V ? j.slice() : j, c.completionRate = Y, c.durationRate = T, !f) {
            if (!L(j, Y, T))
              return x > k ? (c.currentValue = V ? S.slice() : S, c.completionRate = 1, c.durationRate = 1, H(V ? S.slice() : S, 1, 1), K(S, 1, 1), void w()) : (H(j, Y, T), void h(G));
            w();
          }
        }(U);
      }), c.cancel;
    }, p.util.requestAnimFrame = h, p.util.cancelAnimFrame = function() {
      return r.apply(p.window, arguments);
    }, p.runningAnimations = o;
  }(), function() {
    function u(s, o, d) {
      var A = "rgba(" + parseInt(s[0] + d * (o[0] - s[0]), 10) + "," + parseInt(s[1] + d * (o[1] - s[1]), 10) + "," + parseInt(s[2] + d * (o[2] - s[2]), 10);
      return A += "," + (s && o ? parseFloat(s[3] + d * (o[3] - s[3])) : 1), A += ")";
    }
    p.util.animateColor = function(s, o, d, A) {
      var i = new p.Color(s).getSource(), r = new p.Color(o).getSource(), h = A.onComplete, a = A.onChange;
      return A = A || {}, p.util.animate(p.util.object.extend(A, { duration: d || 500, startValue: i, endValue: r, byValue: r, easing: function(c, f, w, C) {
        return u(f, w, A.colorEasing ? A.colorEasing(c, C) : 1 - Math.cos(c / C * (Math.PI / 2)));
      }, onComplete: function(c, f, w) {
        if (h)
          return h(u(r, r, 0), f, w);
      }, onChange: function(c, f, w) {
        if (a) {
          if (Array.isArray(c))
            return a(u(c, c, 0), f, w);
          a(c, f, w);
        }
      } }));
    };
  }(), function() {
    function u(A, i, r, h) {
      return A < Math.abs(i) ? (A = i, h = r / 4) : h = i === 0 && A === 0 ? r / (2 * Math.PI) * Math.asin(1) : r / (2 * Math.PI) * Math.asin(i / A), { a: A, c: i, p: r, s: h };
    }
    function s(A, i, r) {
      return A.a * Math.pow(2, 10 * (i -= 1)) * Math.sin((i * r - A.s) * (2 * Math.PI) / A.p);
    }
    function o(A, i, r, h) {
      return r - d(h - A, 0, r, h) + i;
    }
    function d(A, i, r, h) {
      return (A /= h) < 1 / 2.75 ? r * (7.5625 * A * A) + i : A < 2 / 2.75 ? r * (7.5625 * (A -= 1.5 / 2.75) * A + 0.75) + i : A < 2.5 / 2.75 ? r * (7.5625 * (A -= 2.25 / 2.75) * A + 0.9375) + i : r * (7.5625 * (A -= 2.625 / 2.75) * A + 0.984375) + i;
    }
    p.util.ease = { easeInQuad: function(A, i, r, h) {
      return r * (A /= h) * A + i;
    }, easeOutQuad: function(A, i, r, h) {
      return -r * (A /= h) * (A - 2) + i;
    }, easeInOutQuad: function(A, i, r, h) {
      return (A /= h / 2) < 1 ? r / 2 * A * A + i : -r / 2 * (--A * (A - 2) - 1) + i;
    }, easeInCubic: function(A, i, r, h) {
      return r * (A /= h) * A * A + i;
    }, easeOutCubic: function(A, i, r, h) {
      return r * ((A = A / h - 1) * A * A + 1) + i;
    }, easeInOutCubic: function(A, i, r, h) {
      return (A /= h / 2) < 1 ? r / 2 * A * A * A + i : r / 2 * ((A -= 2) * A * A + 2) + i;
    }, easeInQuart: function(A, i, r, h) {
      return r * (A /= h) * A * A * A + i;
    }, easeOutQuart: function(A, i, r, h) {
      return -r * ((A = A / h - 1) * A * A * A - 1) + i;
    }, easeInOutQuart: function(A, i, r, h) {
      return (A /= h / 2) < 1 ? r / 2 * A * A * A * A + i : -r / 2 * ((A -= 2) * A * A * A - 2) + i;
    }, easeInQuint: function(A, i, r, h) {
      return r * (A /= h) * A * A * A * A + i;
    }, easeOutQuint: function(A, i, r, h) {
      return r * ((A = A / h - 1) * A * A * A * A + 1) + i;
    }, easeInOutQuint: function(A, i, r, h) {
      return (A /= h / 2) < 1 ? r / 2 * A * A * A * A * A + i : r / 2 * ((A -= 2) * A * A * A * A + 2) + i;
    }, easeInSine: function(A, i, r, h) {
      return -r * Math.cos(A / h * (Math.PI / 2)) + r + i;
    }, easeOutSine: function(A, i, r, h) {
      return r * Math.sin(A / h * (Math.PI / 2)) + i;
    }, easeInOutSine: function(A, i, r, h) {
      return -r / 2 * (Math.cos(Math.PI * A / h) - 1) + i;
    }, easeInExpo: function(A, i, r, h) {
      return A === 0 ? i : r * Math.pow(2, 10 * (A / h - 1)) + i;
    }, easeOutExpo: function(A, i, r, h) {
      return A === h ? i + r : r * (1 - Math.pow(2, -10 * A / h)) + i;
    }, easeInOutExpo: function(A, i, r, h) {
      return A === 0 ? i : A === h ? i + r : (A /= h / 2) < 1 ? r / 2 * Math.pow(2, 10 * (A - 1)) + i : r / 2 * (2 - Math.pow(2, -10 * --A)) + i;
    }, easeInCirc: function(A, i, r, h) {
      return -r * (Math.sqrt(1 - (A /= h) * A) - 1) + i;
    }, easeOutCirc: function(A, i, r, h) {
      return r * Math.sqrt(1 - (A = A / h - 1) * A) + i;
    }, easeInOutCirc: function(A, i, r, h) {
      return (A /= h / 2) < 1 ? -r / 2 * (Math.sqrt(1 - A * A) - 1) + i : r / 2 * (Math.sqrt(1 - (A -= 2) * A) + 1) + i;
    }, easeInElastic: function(A, i, r, h) {
      var a = 0;
      return A === 0 ? i : (A /= h) === 1 ? i + r : (a || (a = 0.3 * h), -s(u(r, r, a, 1.70158), A, h) + i);
    }, easeOutElastic: function(A, i, r, h) {
      var a = 0;
      if (A === 0)
        return i;
      if ((A /= h) === 1)
        return i + r;
      a || (a = 0.3 * h);
      var c = u(r, r, a, 1.70158);
      return c.a * Math.pow(2, -10 * A) * Math.sin((A * h - c.s) * (2 * Math.PI) / c.p) + c.c + i;
    }, easeInOutElastic: function(A, i, r, h) {
      var a = 0;
      if (A === 0)
        return i;
      if ((A /= h / 2) === 2)
        return i + r;
      a || (a = h * (0.3 * 1.5));
      var c = u(r, r, a, 1.70158);
      return A < 1 ? -0.5 * s(c, A, h) + i : c.a * Math.pow(2, -10 * (A -= 1)) * Math.sin((A * h - c.s) * (2 * Math.PI) / c.p) * 0.5 + c.c + i;
    }, easeInBack: function(A, i, r, h, a) {
      return a === void 0 && (a = 1.70158), r * (A /= h) * A * ((a + 1) * A - a) + i;
    }, easeOutBack: function(A, i, r, h, a) {
      return a === void 0 && (a = 1.70158), r * ((A = A / h - 1) * A * ((a + 1) * A + a) + 1) + i;
    }, easeInOutBack: function(A, i, r, h, a) {
      return a === void 0 && (a = 1.70158), (A /= h / 2) < 1 ? r / 2 * (A * A * ((1 + (a *= 1.525)) * A - a)) + i : r / 2 * ((A -= 2) * A * ((1 + (a *= 1.525)) * A + a) + 2) + i;
    }, easeInBounce: o, easeOutBounce: d, easeInOutBounce: function(A, i, r, h) {
      return A < h / 2 ? 0.5 * o(2 * A, 0, r, h) + i : 0.5 * d(2 * A - h, 0, r, h) + 0.5 * r + i;
    } };
  }(), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.util.object.extend, d = s.util.object.clone, A = s.util.toFixed, i = s.util.parseUnit, r = s.util.multiplyTransformMatrices, h = { cx: "left", x: "left", r: "radius", cy: "top", y: "top", display: "visible", visibility: "visible", transform: "transformMatrix", "fill-opacity": "fillOpacity", "fill-rule": "fillRule", "font-family": "fontFamily", "font-size": "fontSize", "font-style": "fontStyle", "font-weight": "fontWeight", "letter-spacing": "charSpacing", "paint-order": "paintFirst", "stroke-dasharray": "strokeDashArray", "stroke-dashoffset": "strokeDashOffset", "stroke-linecap": "strokeLineCap", "stroke-linejoin": "strokeLineJoin", "stroke-miterlimit": "strokeMiterLimit", "stroke-opacity": "strokeOpacity", "stroke-width": "strokeWidth", "text-decoration": "textDecoration", "text-anchor": "textAnchor", opacity: "opacity", "clip-path": "clipPath", "clip-rule": "clipRule", "vector-effect": "strokeUniform", "image-rendering": "imageSmoothing" }, a = { stroke: "strokeOpacity", fill: "fillOpacity" }, c = "font-size", f = "clip-path";
    function w(_) {
      return _ in h ? h[_] : _;
    }
    function C(_, S, P, G) {
      var X, D = Array.isArray(S);
      if (_ !== "fill" && _ !== "stroke" || S !== "none") {
        if (_ === "strokeUniform")
          return S === "non-scaling-stroke";
        if (_ === "strokeDashArray")
          S = S === "none" ? null : S.replace(/,/g, " ").split(/\s+/).map(parseFloat);
        else if (_ === "transformMatrix")
          S = P && P.transformMatrix ? r(P.transformMatrix, s.parseTransformAttribute(S)) : s.parseTransformAttribute(S);
        else if (_ === "visible")
          S = S !== "none" && S !== "hidden", P && P.visible === !1 && (S = !1);
        else if (_ === "opacity")
          S = parseFloat(S), P && P.opacity !== void 0 && (S *= P.opacity);
        else if (_ === "textAnchor")
          S = S === "start" ? "left" : S === "end" ? "right" : "center";
        else if (_ === "charSpacing")
          X = i(S, G) / G * 1e3;
        else if (_ === "paintFirst") {
          var T = S.indexOf("fill"), j = S.indexOf("stroke");
          S = "fill", (T > -1 && j > -1 && j < T || T === -1 && j > -1) && (S = "stroke");
        } else {
          if (_ === "href" || _ === "xlink:href" || _ === "font")
            return S;
          if (_ === "imageSmoothing")
            return S === "optimizeQuality";
          X = D ? S.map(i) : i(S, G);
        }
      } else
        S = "";
      return !D && isNaN(X) ? S : X;
    }
    function x(_) {
      return new RegExp("^(" + _.join("|") + ")\\b", "i");
    }
    function U(_, S) {
      var P, G, X, D, T = [];
      for (X = 0, D = S.length; X < D; X++)
        P = S[X], G = _.getElementsByTagName(P), T = T.concat(Array.prototype.slice.call(G));
      return T;
    }
    function F(_, S) {
      var P, G = !0;
      return (P = k(_, S.pop())) && S.length && (G = function(X, D) {
        for (var T, j = !0; X.parentNode && X.parentNode.nodeType === 1 && D.length; )
          j && (T = D.pop()), j = k(X = X.parentNode, T);
        return D.length === 0;
      }(_, S)), P && G && S.length === 0;
    }
    function k(_, S) {
      var P, G, X = _.nodeName, D = _.getAttribute("class"), T = _.getAttribute("id");
      if (P = new RegExp("^" + X, "i"), S = S.replace(P, ""), T && S.length && (P = new RegExp("#" + T + "(?![a-zA-Z\\-]+)", "i"), S = S.replace(P, "")), D && S.length)
        for (G = (D = D.split(" ")).length; G--; )
          P = new RegExp("\\." + D[G] + "(?![a-zA-Z\\-]+)", "i"), S = S.replace(P, "");
      return S.length === 0;
    }
    function H(_, S) {
      var P;
      if (_.getElementById && (P = _.getElementById(S)), P)
        return P;
      var G, X, D, T = _.getElementsByTagName("*");
      for (X = 0, D = T.length; X < D; X++)
        if (S === (G = T[X]).getAttribute("id"))
          return G;
    }
    s.svgValidTagNamesRegEx = x(["path", "circle", "polygon", "polyline", "ellipse", "rect", "line", "image", "text"]), s.svgViewBoxElementsRegEx = x(["symbol", "image", "marker", "pattern", "view", "svg"]), s.svgInvalidAncestorsRegEx = x(["pattern", "defs", "symbol", "metadata", "clipPath", "mask", "desc"]), s.svgValidParentsRegEx = x(["symbol", "g", "a", "svg", "clipPath", "defs"]), s.cssRules = {}, s.gradientDefs = {}, s.clipPaths = {}, s.parseTransformAttribute = function() {
      function _(j, Y, N) {
        j[N] = Math.tan(s.util.degreesToRadians(Y[0]));
      }
      var S = s.iMatrix, P = s.reNum, G = s.commaWsp, X = "(?:" + ("(?:(matrix)\\s*\\(\\s*(" + P + ")" + G + "(" + P + ")" + G + "(" + P + ")" + G + "(" + P + ")" + G + "(" + P + ")" + G + "(" + P + ")\\s*\\))") + "|" + ("(?:(translate)\\s*\\(\\s*(" + P + ")(?:" + G + "(" + P + "))?\\s*\\))") + "|" + ("(?:(scale)\\s*\\(\\s*(" + P + ")(?:" + G + "(" + P + "))?\\s*\\))") + "|" + ("(?:(rotate)\\s*\\(\\s*(" + P + ")(?:" + G + "(" + P + ")" + G + "(" + P + "))?\\s*\\))") + "|" + ("(?:(skewX)\\s*\\(\\s*(" + P + ")\\s*\\))") + "|" + ("(?:(skewY)\\s*\\(\\s*(" + P + ")\\s*\\))") + ")", D = new RegExp("^\\s*(?:" + ("(?:" + X + "(?:" + G + "*" + X + ")*)") + "?)\\s*$"), T = new RegExp(X, "g");
      return function(j) {
        var Y = S.concat(), N = [];
        if (!j || j && !D.test(j))
          return Y;
        j.replace(T, function(Z) {
          var tA = new RegExp(X).exec(Z).filter(function(iA) {
            return !!iA;
          }), eA = tA[1], q = tA.slice(2).map(parseFloat);
          switch (eA) {
            case "translate":
              (function(iA, J) {
                iA[4] = J[0], J.length === 2 && (iA[5] = J[1]);
              })(Y, q);
              break;
            case "rotate":
              q[0] = s.util.degreesToRadians(q[0]), function(iA, J) {
                var lA = s.util.cos(J[0]), nA = s.util.sin(J[0]), hA = 0, pA = 0;
                J.length === 3 && (hA = J[1], pA = J[2]), iA[0] = lA, iA[1] = nA, iA[2] = -nA, iA[3] = lA, iA[4] = hA - (lA * hA - nA * pA), iA[5] = pA - (nA * hA + lA * pA);
              }(Y, q);
              break;
            case "scale":
              (function(iA, J) {
                var lA = J[0], nA = J.length === 2 ? J[1] : J[0];
                iA[0] = lA, iA[3] = nA;
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
          N.push(Y.concat()), Y = S.concat();
        });
        for (var z = N[0]; N.length > 1; )
          N.shift(), z = s.util.multiplyTransformMatrices(z, N[0]);
        return z;
      };
    }();
    var L = new RegExp("^\\s*(" + s.reNum + "+)\\s*,?\\s*(" + s.reNum + "+)\\s*,?\\s*(" + s.reNum + "+)\\s*,?\\s*(" + s.reNum + "+)\\s*$");
    function K(_) {
      if (!s.svgViewBoxElementsRegEx.test(_.nodeName))
        return {};
      var S, P, G, X, D, T, j = _.getAttribute("viewBox"), Y = 1, N = 1, z = _.getAttribute("width"), Z = _.getAttribute("height"), tA = _.getAttribute("x") || 0, eA = _.getAttribute("y") || 0, q = _.getAttribute("preserveAspectRatio") || "", iA = !j || !(j = j.match(L)), J = !z || !Z || z === "100%" || Z === "100%", lA = iA && J, nA = {}, hA = "", pA = 0, KA = 0;
      if (nA.width = 0, nA.height = 0, nA.toBeParsed = lA, iA && (tA || eA) && _.parentNode && _.parentNode.nodeName !== "#document" && (hA = " translate(" + i(tA) + " " + i(eA) + ") ", D = (_.getAttribute("transform") || "") + hA, _.setAttribute("transform", D), _.removeAttribute("x"), _.removeAttribute("y")), lA)
        return nA;
      if (iA)
        return nA.width = i(z), nA.height = i(Z), nA;
      if (S = -parseFloat(j[1]), P = -parseFloat(j[2]), G = parseFloat(j[3]), X = parseFloat(j[4]), nA.minX = S, nA.minY = P, nA.viewBoxWidth = G, nA.viewBoxHeight = X, J ? (nA.width = G, nA.height = X) : (nA.width = i(z), nA.height = i(Z), Y = nA.width / G, N = nA.height / X), (q = s.util.parsePreserveAspectRatioAttribute(q)).alignX !== "none" && (q.meetOrSlice === "meet" && (N = Y = Y > N ? N : Y), q.meetOrSlice === "slice" && (N = Y = Y > N ? Y : N), pA = nA.width - G * Y, KA = nA.height - X * Y, q.alignX === "Mid" && (pA /= 2), q.alignY === "Mid" && (KA /= 2), q.alignX === "Min" && (pA = 0), q.alignY === "Min" && (KA = 0)), Y === 1 && N === 1 && S === 0 && P === 0 && tA === 0 && eA === 0)
        return nA;
      if ((tA || eA) && _.parentNode.nodeName !== "#document" && (hA = " translate(" + i(tA) + " " + i(eA) + ") "), D = hA + " matrix(" + Y + " 0 0 " + N + " " + (S * Y + pA) + " " + (P * N + KA) + ") ", _.nodeName === "svg") {
        for (T = _.ownerDocument.createElementNS(s.svgNS, "g"); _.firstChild; )
          T.appendChild(_.firstChild);
        _.appendChild(T);
      } else
        (T = _).removeAttribute("x"), T.removeAttribute("y"), D = T.getAttribute("transform") + D;
      return T.setAttribute("transform", D), nA;
    }
    function W(_, S) {
      var P = "xlink:href", G = H(_, S.getAttribute(P).slice(1));
      if (G && G.getAttribute(P) && W(_, G), ["gradientTransform", "x1", "x2", "y1", "y2", "gradientUnits", "cx", "cy", "r", "fx", "fy"].forEach(function(D) {
        G && !S.hasAttribute(D) && G.hasAttribute(D) && S.setAttribute(D, G.getAttribute(D));
      }), !S.children.length)
        for (var X = G.cloneNode(!0); X.firstChild; )
          S.appendChild(X.firstChild);
      S.removeAttribute(P);
    }
    s.parseSVGDocument = function(_, S, P, G) {
      if (_) {
        (function(tA) {
          for (var eA = U(tA, ["use", "svg:use"]), q = 0; eA.length && q < eA.length; ) {
            var iA = eA[q], J = iA.getAttribute("xlink:href") || iA.getAttribute("href");
            if (J === null)
              return;
            var lA, nA, hA, pA, KA = J.slice(1), nt = iA.getAttribute("x") || 0, yt = iA.getAttribute("y") || 0, FA = H(tA, KA).cloneNode(!0), NA = (FA.getAttribute("transform") || "") + " translate(" + nt + ", " + yt + ")", st = eA.length, xt = s.svgNS;
            if (K(FA), /^svg$/i.test(FA.nodeName)) {
              var Wt = FA.ownerDocument.createElementNS(xt, "g");
              for (nA = 0, pA = (hA = FA.attributes).length; nA < pA; nA++)
                lA = hA.item(nA), Wt.setAttributeNS(xt, lA.nodeName, lA.nodeValue);
              for (; FA.firstChild; )
                Wt.appendChild(FA.firstChild);
              FA = Wt;
            }
            for (nA = 0, pA = (hA = iA.attributes).length; nA < pA; nA++)
              (lA = hA.item(nA)).nodeName !== "x" && lA.nodeName !== "y" && lA.nodeName !== "xlink:href" && lA.nodeName !== "href" && (lA.nodeName === "transform" ? NA = lA.nodeValue + " " + NA : FA.setAttribute(lA.nodeName, lA.nodeValue));
            FA.setAttribute("transform", NA), FA.setAttribute("instantiated_by_use", "1"), FA.removeAttribute("id"), iA.parentNode.replaceChild(FA, iA), eA.length === st && q++;
          }
        })(_);
        var X, D, T = s.Object.__uid++, j = K(_), Y = s.util.toArray(_.getElementsByTagName("*"));
        if (j.crossOrigin = G && G.crossOrigin, j.svgUid = T, Y.length === 0 && s.isLikelyNode) {
          var N = [];
          for (X = 0, D = (Y = _.selectNodes('//*[name(.)!="svg"]')).length; X < D; X++)
            N[X] = Y[X];
          Y = N;
        }
        var z = Y.filter(function(tA) {
          return K(tA), s.svgValidTagNamesRegEx.test(tA.nodeName.replace("svg:", "")) && !function(eA, q) {
            for (; eA && (eA = eA.parentNode); )
              if (eA.nodeName && q.test(eA.nodeName.replace("svg:", "")) && !eA.getAttribute("instantiated_by_use"))
                return !0;
            return !1;
          }(tA, s.svgInvalidAncestorsRegEx);
        });
        if (!z || z && !z.length)
          S && S([], {});
        else {
          var Z = {};
          Y.filter(function(tA) {
            return tA.nodeName.replace("svg:", "") === "clipPath";
          }).forEach(function(tA) {
            var eA = tA.getAttribute("id");
            Z[eA] = s.util.toArray(tA.getElementsByTagName("*")).filter(function(q) {
              return s.svgValidTagNamesRegEx.test(q.nodeName.replace("svg:", ""));
            });
          }), s.gradientDefs[T] = s.getGradientDefs(_), s.cssRules[T] = s.getCSSRules(_), s.clipPaths[T] = Z, s.parseElements(z, function(tA, eA) {
            S && (S(tA, j, eA, Y), delete s.gradientDefs[T], delete s.cssRules[T], delete s.clipPaths[T]);
          }, d(j), P, G);
        }
      }
    };
    var V = new RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(" + s.reNum + "(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|" + s.reNum + "))?\\s+(.*)");
    o(s, { parseFontDeclaration: function(_, S) {
      var P = _.match(V);
      if (P) {
        var G = P[1], X = P[3], D = P[4], T = P[5], j = P[6];
        G && (S.fontStyle = G), X && (S.fontWeight = isNaN(parseFloat(X)) ? X : parseFloat(X)), D && (S.fontSize = i(D)), j && (S.fontFamily = j), T && (S.lineHeight = T === "normal" ? 1 : T);
      }
    }, getGradientDefs: function(_) {
      var S, P = U(_, ["linearGradient", "radialGradient", "svg:linearGradient", "svg:radialGradient"]), G = 0, X = {};
      for (G = P.length; G--; )
        (S = P[G]).getAttribute("xlink:href") && W(_, S), X[S.getAttribute("id")] = S;
      return X;
    }, parseAttributes: function(_, S, P) {
      if (_) {
        var G, X, D, T = {};
        P === void 0 && (P = _.getAttribute("svgUid")), _.parentNode && s.svgValidParentsRegEx.test(_.parentNode.nodeName) && (T = s.parseAttributes(_.parentNode, S, P));
        var j = S.reduce(function(q, iA) {
          return (G = _.getAttribute(iA)) && (q[iA] = G), q;
        }, {}), Y = o(function(q, iA) {
          var J = {};
          for (var lA in s.cssRules[iA])
            if (F(q, lA.split(" ")))
              for (var nA in s.cssRules[iA][lA])
                J[nA] = s.cssRules[iA][lA][nA];
          return J;
        }(_, P), s.parseStyleAttribute(_));
        j = o(j, Y), Y[f] && _.setAttribute(f, Y[f]), X = D = T.fontSize || s.Text.DEFAULT_SVG_FONT_SIZE, j[c] && (j[c] = X = i(j[c], D));
        var N, z, Z = {};
        for (var tA in j)
          z = C(N = w(tA), j[tA], T, X), Z[N] = z;
        Z && Z.font && s.parseFontDeclaration(Z.font, Z);
        var eA = o(T, Z);
        return s.svgValidParentsRegEx.test(_.nodeName) ? eA : function(q) {
          for (var iA in a)
            if (q[a[iA]] !== void 0 && q[iA] !== "") {
              if (q[iA] === void 0) {
                if (!s.Object.prototype[iA])
                  continue;
                q[iA] = s.Object.prototype[iA];
              }
              if (q[iA].indexOf("url(") !== 0) {
                var J = new s.Color(q[iA]);
                q[iA] = J.setAlpha(A(J.getAlpha() * q[a[iA]], 2)).toRgba();
              }
            }
          return q;
        }(eA);
      }
    }, parseElements: function(_, S, P, G, X) {
      new s.ElementsParser(_, S, P, G, X).parse();
    }, parseStyleAttribute: function(_) {
      var S = {}, P = _.getAttribute("style");
      return P && (typeof P == "string" ? function(G, X) {
        var D, T;
        G.replace(/;\s*$/, "").split(";").forEach(function(j) {
          var Y = j.split(":");
          D = Y[0].trim().toLowerCase(), T = Y[1].trim(), X[D] = T;
        });
      }(P, S) : function(G, X) {
        var D, T;
        for (var j in G)
          G[j] !== void 0 && (D = j.toLowerCase(), T = G[j], X[D] = T);
      }(P, S)), S;
    }, parsePointsAttribute: function(_) {
      if (!_)
        return null;
      var S, P, G = [];
      for (S = 0, P = (_ = (_ = _.replace(/,/g, " ").trim()).split(/\s+/)).length; S < P; S += 2)
        G.push({ x: parseFloat(_[S]), y: parseFloat(_[S + 1]) });
      return G;
    }, getCSSRules: function(_) {
      var S, P, G = _.getElementsByTagName("style"), X = {};
      for (S = 0, P = G.length; S < P; S++) {
        var D = G[S].textContent;
        (D = D.replace(/\/\*[\s\S]*?\*\//g, "")).trim() !== "" && D.split("}").filter(function(T) {
          return T.trim();
        }).forEach(function(T) {
          var j = T.split("{"), Y = {}, N = j[1].trim().split(";").filter(function(eA) {
            return eA.trim();
          });
          for (S = 0, P = N.length; S < P; S++) {
            var z = N[S].split(":"), Z = z[0].trim(), tA = z[1].trim();
            Y[Z] = tA;
          }
          (T = j[0].trim()).split(",").forEach(function(eA) {
            (eA = eA.replace(/^svg/i, "").trim()) !== "" && (X[eA] ? s.util.object.extend(X[eA], Y) : X[eA] = s.util.object.clone(Y));
          });
        });
      }
      return X;
    }, loadSVGFromURL: function(_, S, P, G) {
      _ = _.replace(/^\n\s*/, "").trim(), new s.util.request(_, { method: "get", onComplete: function(X) {
        var D = X.responseXML;
        if (!D || !D.documentElement)
          return S && S(null), !1;
        s.parseSVGDocument(D.documentElement, function(T, j, Y, N) {
          S && S(T, j, Y, N);
        }, P, G);
      } });
    }, loadSVGFromString: function(_, S, P, G) {
      var X = new s.window.DOMParser().parseFromString(_.trim(), "text/xml");
      s.parseSVGDocument(X.documentElement, function(D, T, j, Y) {
        S(D, T, j, Y);
      }, P, G);
    } });
  }(e), p.ElementsParser = function(u, s, o, d, A, i) {
    this.elements = u, this.callback = s, this.options = o, this.reviver = d, this.svgUid = o && o.svgUid || 0, this.parsingOptions = A, this.regexUrl = /^url\(['"]?#([^'"]+)['"]?\)/g, this.doc = i;
  }, (b = p.ElementsParser.prototype).parse = function() {
    this.instances = new Array(this.elements.length), this.numElements = this.elements.length, this.createObjects();
  }, b.createObjects = function() {
    var u = this;
    this.elements.forEach(function(s, o) {
      s.setAttribute("svgUid", u.svgUid), u.createObject(s, o);
    });
  }, b.findTag = function(u) {
    return p[p.util.string.capitalize(u.tagName.replace("svg:", ""))];
  }, b.createObject = function(u, s) {
    var o = this.findTag(u);
    if (o && o.fromElement)
      try {
        o.fromElement(u, this.createCallback(s, u), this.options);
      } catch (d) {
        p.log(d);
      }
    else
      this.checkIfDone();
  }, b.createCallback = function(u, s) {
    var o = this;
    return function(d) {
      var A;
      o.resolveGradient(d, s, "fill"), o.resolveGradient(d, s, "stroke"), d instanceof p.Image && d._originalElement && (A = d.parsePreserveAspectRatioAttribute(s)), d._removeTransformMatrix(A), o.resolveClipPath(d, s), o.reviver && o.reviver(s, d), o.instances[u] = d, o.checkIfDone();
    };
  }, b.extractPropertyDefinition = function(u, s, o) {
    var d = u[s], A = this.regexUrl;
    if (A.test(d)) {
      A.lastIndex = 0;
      var i = A.exec(d)[1];
      return A.lastIndex = 0, p[o][this.svgUid][i];
    }
  }, b.resolveGradient = function(u, s, o) {
    var d = this.extractPropertyDefinition(u, o, "gradientDefs");
    if (d) {
      var A = s.getAttribute(o + "-opacity"), i = p.Gradient.fromElement(d, u, A, this.options);
      u.set(o, i);
    }
  }, b.createClipPathCallback = function(u, s) {
    return function(o) {
      o._removeTransformMatrix(), o.fillRule = o.clipRule, s.push(o);
    };
  }, b.resolveClipPath = function(u, s) {
    var o, d, A, i, r = this.extractPropertyDefinition(u, "clipPath", "clipPaths");
    if (r) {
      A = [], d = p.util.invertTransform(u.calcTransformMatrix());
      for (var h = r[0].parentNode, a = s; a.parentNode && a.getAttribute("clip-path") !== u.clipPath; )
        a = a.parentNode;
      a.parentNode.appendChild(h);
      for (var c = 0; c < r.length; c++)
        o = r[c], this.findTag(o).fromElement(o, this.createClipPathCallback(u, A), this.options);
      r = A.length === 1 ? A[0] : new p.Group(A), i = p.util.multiplyTransformMatrices(d, r.calcTransformMatrix()), r.clipPath && this.resolveClipPath(r, a);
      var f = p.util.qrDecompose(i);
      r.flipX = !1, r.flipY = !1, r.set("scaleX", f.scaleX), r.set("scaleY", f.scaleY), r.angle = f.angle, r.skewX = f.skewX, r.skewY = 0, r.setPositionByOrigin({ x: f.translateX, y: f.translateY }, "center", "center"), u.clipPath = r;
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
    } }, s.Intersection.intersectLineLine = function(d, A, i, r) {
      var h, a = (r.x - i.x) * (d.y - i.y) - (r.y - i.y) * (d.x - i.x), c = (A.x - d.x) * (d.y - i.y) - (A.y - d.y) * (d.x - i.x), f = (r.y - i.y) * (A.x - d.x) - (r.x - i.x) * (A.y - d.y);
      if (f !== 0) {
        var w = a / f, C = c / f;
        0 <= w && w <= 1 && 0 <= C && C <= 1 ? (h = new o("Intersection")).appendPoint(new s.Point(d.x + w * (A.x - d.x), d.y + w * (A.y - d.y))) : h = new o();
      } else
        h = new o(a === 0 || c === 0 ? "Coincident" : "Parallel");
      return h;
    }, s.Intersection.intersectLinePolygon = function(d, A, i) {
      var r, h, a, c, f = new o(), w = i.length;
      for (c = 0; c < w; c++)
        r = i[c], h = i[(c + 1) % w], a = o.intersectLineLine(d, A, r, h), f.appendPoints(a.points);
      return f.points.length > 0 && (f.status = "Intersection"), f;
    }, s.Intersection.intersectPolygonPolygon = function(d, A) {
      var i, r = new o(), h = d.length;
      for (i = 0; i < h; i++) {
        var a = d[i], c = d[(i + 1) % h], f = o.intersectLinePolygon(a, c, A);
        r.appendPoints(f.points);
      }
      return r.points.length > 0 && (r.status = "Intersection"), r;
    }, s.Intersection.intersectPolygonRectangle = function(d, A, i) {
      var r = A.min(i), h = A.max(i), a = new s.Point(h.x, r.y), c = new s.Point(r.x, h.y), f = o.intersectLinePolygon(r, a, d), w = o.intersectLinePolygon(a, h, d), C = o.intersectLinePolygon(h, c, d), x = o.intersectLinePolygon(c, r, d), U = new o();
      return U.appendPoints(f.points), U.appendPoints(w.points), U.appendPoints(C.points), U.appendPoints(x.points), U.points.length > 0 && (U.status = "Intersection"), U;
    });
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {});
    function o(A) {
      A ? this._tryParsingColor(A) : this.setSource([0, 0, 0, 1]);
    }
    function d(A, i, r) {
      return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? A + 6 * (i - A) * r : r < 0.5 ? i : r < 2 / 3 ? A + (i - A) * (2 / 3 - r) * 6 : A;
    }
    s.Color ? s.warn("fabric.Color is already defined.") : (s.Color = o, s.Color.prototype = { _tryParsingColor: function(A) {
      var i;
      A in o.colorNameMap && (A = o.colorNameMap[A]), A === "transparent" && (i = [255, 255, 255, 0]), i || (i = o.sourceFromHex(A)), i || (i = o.sourceFromRgb(A)), i || (i = o.sourceFromHsl(A)), i || (i = [0, 0, 0, 1]), i && this.setSource(i);
    }, _rgbToHsl: function(A, i, r) {
      A /= 255, i /= 255, r /= 255;
      var h, a, c, f = s.util.array.max([A, i, r]), w = s.util.array.min([A, i, r]);
      if (c = (f + w) / 2, f === w)
        h = a = 0;
      else {
        var C = f - w;
        switch (a = c > 0.5 ? C / (2 - f - w) : C / (f + w), f) {
          case A:
            h = (i - r) / C + (i < r ? 6 : 0);
            break;
          case i:
            h = (r - A) / C + 2;
            break;
          case r:
            h = (A - i) / C + 4;
        }
        h /= 6;
      }
      return [Math.round(360 * h), Math.round(100 * a), Math.round(100 * c)];
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
      var A, i, r, h = this.getSource();
      return A = (A = h[0].toString(16)).length === 1 ? "0" + A : A, i = (i = h[1].toString(16)).length === 1 ? "0" + i : i, r = (r = h[2].toString(16)).length === 1 ? "0" + r : r, A.toUpperCase() + i.toUpperCase() + r.toUpperCase();
    }, toHexa: function() {
      var A, i = this.getSource();
      return A = (A = (A = Math.round(255 * i[3])).toString(16)).length === 1 ? "0" + A : A, this.toHex() + A.toUpperCase();
    }, getAlpha: function() {
      return this.getSource()[3];
    }, setAlpha: function(A) {
      var i = this.getSource();
      return i[3] = A, this.setSource(i), this;
    }, toGrayscale: function() {
      var A = this.getSource(), i = parseInt((0.3 * A[0] + 0.59 * A[1] + 0.11 * A[2]).toFixed(0), 10), r = A[3];
      return this.setSource([i, i, i, r]), this;
    }, toBlackWhite: function(A) {
      var i = this.getSource(), r = (0.3 * i[0] + 0.59 * i[1] + 0.11 * i[2]).toFixed(0), h = i[3];
      return A = A || 127, r = Number(r) < Number(A) ? 0 : 255, this.setSource([r, r, r, h]), this;
    }, overlayWith: function(A) {
      A instanceof o || (A = new o(A));
      var i, r = [], h = this.getAlpha(), a = this.getSource(), c = A.getSource();
      for (i = 0; i < 3; i++)
        r.push(Math.round(0.5 * a[i] + 0.5 * c[i]));
      return r[3] = h, this.setSource(r), this;
    } }, s.Color.reRGBa = /^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/i, s.Color.reHSLa = /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/i, s.Color.reHex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, s.Color.colorNameMap = { aliceblue: "#F0F8FF", antiquewhite: "#FAEBD7", aqua: "#00FFFF", aquamarine: "#7FFFD4", azure: "#F0FFFF", beige: "#F5F5DC", bisque: "#FFE4C4", black: "#000000", blanchedalmond: "#FFEBCD", blue: "#0000FF", blueviolet: "#8A2BE2", brown: "#A52A2A", burlywood: "#DEB887", cadetblue: "#5F9EA0", chartreuse: "#7FFF00", chocolate: "#D2691E", coral: "#FF7F50", cornflowerblue: "#6495ED", cornsilk: "#FFF8DC", crimson: "#DC143C", cyan: "#00FFFF", darkblue: "#00008B", darkcyan: "#008B8B", darkgoldenrod: "#B8860B", darkgray: "#A9A9A9", darkgrey: "#A9A9A9", darkgreen: "#006400", darkkhaki: "#BDB76B", darkmagenta: "#8B008B", darkolivegreen: "#556B2F", darkorange: "#FF8C00", darkorchid: "#9932CC", darkred: "#8B0000", darksalmon: "#E9967A", darkseagreen: "#8FBC8F", darkslateblue: "#483D8B", darkslategray: "#2F4F4F", darkslategrey: "#2F4F4F", darkturquoise: "#00CED1", darkviolet: "#9400D3", deeppink: "#FF1493", deepskyblue: "#00BFFF", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1E90FF", firebrick: "#B22222", floralwhite: "#FFFAF0", forestgreen: "#228B22", fuchsia: "#FF00FF", gainsboro: "#DCDCDC", ghostwhite: "#F8F8FF", gold: "#FFD700", goldenrod: "#DAA520", gray: "#808080", grey: "#808080", green: "#008000", greenyellow: "#ADFF2F", honeydew: "#F0FFF0", hotpink: "#FF69B4", indianred: "#CD5C5C", indigo: "#4B0082", ivory: "#FFFFF0", khaki: "#F0E68C", lavender: "#E6E6FA", lavenderblush: "#FFF0F5", lawngreen: "#7CFC00", lemonchiffon: "#FFFACD", lightblue: "#ADD8E6", lightcoral: "#F08080", lightcyan: "#E0FFFF", lightgoldenrodyellow: "#FAFAD2", lightgray: "#D3D3D3", lightgrey: "#D3D3D3", lightgreen: "#90EE90", lightpink: "#FFB6C1", lightsalmon: "#FFA07A", lightseagreen: "#20B2AA", lightskyblue: "#87CEFA", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#B0C4DE", lightyellow: "#FFFFE0", lime: "#00FF00", limegreen: "#32CD32", linen: "#FAF0E6", magenta: "#FF00FF", maroon: "#800000", mediumaquamarine: "#66CDAA", mediumblue: "#0000CD", mediumorchid: "#BA55D3", mediumpurple: "#9370DB", mediumseagreen: "#3CB371", mediumslateblue: "#7B68EE", mediumspringgreen: "#00FA9A", mediumturquoise: "#48D1CC", mediumvioletred: "#C71585", midnightblue: "#191970", mintcream: "#F5FFFA", mistyrose: "#FFE4E1", moccasin: "#FFE4B5", navajowhite: "#FFDEAD", navy: "#000080", oldlace: "#FDF5E6", olive: "#808000", olivedrab: "#6B8E23", orange: "#FFA500", orangered: "#FF4500", orchid: "#DA70D6", palegoldenrod: "#EEE8AA", palegreen: "#98FB98", paleturquoise: "#AFEEEE", palevioletred: "#DB7093", papayawhip: "#FFEFD5", peachpuff: "#FFDAB9", peru: "#CD853F", pink: "#FFC0CB", plum: "#DDA0DD", powderblue: "#B0E0E6", purple: "#800080", rebeccapurple: "#663399", red: "#FF0000", rosybrown: "#BC8F8F", royalblue: "#4169E1", saddlebrown: "#8B4513", salmon: "#FA8072", sandybrown: "#F4A460", seagreen: "#2E8B57", seashell: "#FFF5EE", sienna: "#A0522D", silver: "#C0C0C0", skyblue: "#87CEEB", slateblue: "#6A5ACD", slategray: "#708090", slategrey: "#708090", snow: "#FFFAFA", springgreen: "#00FF7F", steelblue: "#4682B4", tan: "#D2B48C", teal: "#008080", thistle: "#D8BFD8", tomato: "#FF6347", turquoise: "#40E0D0", violet: "#EE82EE", wheat: "#F5DEB3", white: "#FFFFFF", whitesmoke: "#F5F5F5", yellow: "#FFFF00", yellowgreen: "#9ACD32" }, s.Color.fromRgb = function(A) {
      return o.fromSource(o.sourceFromRgb(A));
    }, s.Color.sourceFromRgb = function(A) {
      var i = A.match(o.reRGBa);
      if (i) {
        var r = parseInt(i[1], 10) / (/%$/.test(i[1]) ? 100 : 1) * (/%$/.test(i[1]) ? 255 : 1), h = parseInt(i[2], 10) / (/%$/.test(i[2]) ? 100 : 1) * (/%$/.test(i[2]) ? 255 : 1), a = parseInt(i[3], 10) / (/%$/.test(i[3]) ? 100 : 1) * (/%$/.test(i[3]) ? 255 : 1);
        return [parseInt(r, 10), parseInt(h, 10), parseInt(a, 10), i[4] ? parseFloat(i[4]) : 1];
      }
    }, s.Color.fromRgba = o.fromRgb, s.Color.fromHsl = function(A) {
      return o.fromSource(o.sourceFromHsl(A));
    }, s.Color.sourceFromHsl = function(A) {
      var i = A.match(o.reHSLa);
      if (i) {
        var r, h, a, c = (parseFloat(i[1]) % 360 + 360) % 360 / 360, f = parseFloat(i[2]) / (/%$/.test(i[2]) ? 100 : 1), w = parseFloat(i[3]) / (/%$/.test(i[3]) ? 100 : 1);
        if (f === 0)
          r = h = a = w;
        else {
          var C = w <= 0.5 ? w * (f + 1) : w + f - w * f, x = 2 * w - C;
          r = d(x, C, c + 1 / 3), h = d(x, C, c), a = d(x, C, c - 1 / 3);
        }
        return [Math.round(255 * r), Math.round(255 * h), Math.round(255 * a), i[4] ? parseFloat(i[4]) : 1];
      }
    }, s.Color.fromHsla = o.fromHsl, s.Color.fromHex = function(A) {
      return o.fromSource(o.sourceFromHex(A));
    }, s.Color.sourceFromHex = function(A) {
      if (A.match(o.reHex)) {
        var i = A.slice(A.indexOf("#") + 1), r = i.length === 3 || i.length === 4, h = i.length === 8 || i.length === 4, a = r ? i.charAt(0) + i.charAt(0) : i.substring(0, 2), c = r ? i.charAt(1) + i.charAt(1) : i.substring(2, 4), f = r ? i.charAt(2) + i.charAt(2) : i.substring(4, 6), w = h ? r ? i.charAt(3) + i.charAt(3) : i.substring(6, 8) : "FF";
        return [parseInt(a, 16), parseInt(c, 16), parseInt(f, 16), parseFloat((parseInt(w, 16) / 255).toFixed(2))];
      }
    }, s.Color.fromSource = function(A) {
      var i = new o();
      return i.setSource(A), i;
    });
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = ["e", "se", "s", "sw", "w", "nw", "n", "ne", "e"], d = ["ns", "nesw", "ew", "nwse"], A = {}, i = "left", r = "top", h = "right", a = "bottom", c = "center", f = { top: a, bottom: r, left: h, right: i, center: c }, w = s.util.radiansToDegrees, C = Math.sign || function(D) {
      return (D > 0) - (D < 0) || +D;
    };
    function x(D, T) {
      var j = D.angle + w(Math.atan2(T.y, T.x)) + 360;
      return Math.round(j % 360 / 45);
    }
    function U(D, T) {
      var j = T.transform.target, Y = j.canvas, N = s.util.object.clone(T);
      N.target = j, Y && Y.fire("object:" + D, N), j.fire(D, T);
    }
    function F(D, T) {
      var j = T.canvas, Y = D[j.uniScaleKey];
      return j.uniformScaling && !Y || !j.uniformScaling && Y;
    }
    function k(D) {
      return D.originX === c && D.originY === c;
    }
    function H(D, T, j) {
      var Y = D.lockScalingX, N = D.lockScalingY;
      return !(!Y || !N) || !(T || !Y && !N || !j) || !(!Y || T !== "x") || !(!N || T !== "y");
    }
    function L(D, T, j, Y) {
      return { e: D, transform: T, pointer: { x: j, y: Y } };
    }
    function K(D) {
      return function(T, j, Y, N) {
        var z = j.target, Z = z.getCenterPoint(), tA = z.translateToOriginPoint(Z, j.originX, j.originY), eA = D(T, j, Y, N);
        return z.setPositionByOrigin(tA, j.originX, j.originY), eA;
      };
    }
    function W(D, T) {
      return function(j, Y, N, z) {
        var Z = T(j, Y, N, z);
        return Z && U(D, L(j, Y, N, z)), Z;
      };
    }
    function V(D, T, j, Y, N) {
      var z = D.target, Z = z.controls[D.corner], tA = z.canvas.getZoom(), eA = z.padding / tA, q = z.toLocalPoint(new s.Point(Y, N), T, j);
      return q.x >= eA && (q.x -= eA), q.x <= -eA && (q.x += eA), q.y >= eA && (q.y -= eA), q.y <= eA && (q.y += eA), q.x -= Z.offsetX, q.y -= Z.offsetY, q;
    }
    function _(D) {
      return D.flipX !== D.flipY;
    }
    function S(D, T, j, Y, N) {
      if (D[T] !== 0) {
        var z = N / D._getTransformedDimensions()[Y] * D[j];
        D.set(j, z);
      }
    }
    function P(D, T, j, Y) {
      var N, z = T.target, Z = z._getTransformedDimensions(0, z.skewY), tA = V(T, T.originX, T.originY, j, Y), eA = Math.abs(2 * tA.x) - Z.x, q = z.skewX;
      eA < 2 ? N = 0 : (N = w(Math.atan2(eA / z.scaleX, Z.y / z.scaleY)), T.originX === i && T.originY === a && (N = -N), T.originX === h && T.originY === r && (N = -N), _(z) && (N = -N));
      var iA = q !== N;
      if (iA) {
        var J = z._getTransformedDimensions().y;
        z.set("skewX", N), S(z, "skewY", "scaleY", "y", J);
      }
      return iA;
    }
    function G(D, T, j, Y) {
      var N, z = T.target, Z = z._getTransformedDimensions(z.skewX, 0), tA = V(T, T.originX, T.originY, j, Y), eA = Math.abs(2 * tA.y) - Z.y, q = z.skewY;
      eA < 2 ? N = 0 : (N = w(Math.atan2(eA / z.scaleY, Z.x / z.scaleX)), T.originX === i && T.originY === a && (N = -N), T.originX === h && T.originY === r && (N = -N), _(z) && (N = -N));
      var iA = q !== N;
      if (iA) {
        var J = z._getTransformedDimensions().x;
        z.set("skewY", N), S(z, "skewX", "scaleX", "x", J);
      }
      return iA;
    }
    function X(D, T, j, Y, N) {
      N = N || {};
      var z, Z, tA, eA, q, iA, J = T.target, lA = J.lockScalingX, nA = J.lockScalingY, hA = N.by, pA = F(D, J), KA = H(J, hA, pA), nt = T.gestureScale;
      if (KA)
        return !1;
      if (nt)
        Z = T.scaleX * nt, tA = T.scaleY * nt;
      else {
        if (z = V(T, T.originX, T.originY, j, Y), q = hA !== "y" ? C(z.x) : 1, iA = hA !== "x" ? C(z.y) : 1, T.signX || (T.signX = q), T.signY || (T.signY = iA), J.lockScalingFlip && (T.signX !== q || T.signY !== iA))
          return !1;
        if (eA = J._getTransformedDimensions(), pA && !hA) {
          var yt = Math.abs(z.x) + Math.abs(z.y), FA = T.original, NA = yt / (Math.abs(eA.x * FA.scaleX / J.scaleX) + Math.abs(eA.y * FA.scaleY / J.scaleY));
          Z = FA.scaleX * NA, tA = FA.scaleY * NA;
        } else
          Z = Math.abs(z.x * J.scaleX / eA.x), tA = Math.abs(z.y * J.scaleY / eA.y);
        k(T) && (Z *= 2, tA *= 2), T.signX !== q && hA !== "y" && (T.originX = f[T.originX], Z *= -1, T.signX = q), T.signY !== iA && hA !== "x" && (T.originY = f[T.originY], tA *= -1, T.signY = iA);
      }
      var st = J.scaleX, xt = J.scaleY;
      return hA ? (hA === "x" && J.set("scaleX", Z), hA === "y" && J.set("scaleY", tA)) : (!lA && J.set("scaleX", Z), !nA && J.set("scaleY", tA)), st !== J.scaleX || xt !== J.scaleY;
    }
    A.scaleCursorStyleHandler = function(D, T, j) {
      var Y = F(D, j), N = "";
      if (T.x !== 0 && T.y === 0 ? N = "x" : T.x === 0 && T.y !== 0 && (N = "y"), H(j, N, Y))
        return "not-allowed";
      var z = x(j, T);
      return o[z] + "-resize";
    }, A.skewCursorStyleHandler = function(D, T, j) {
      var Y = "not-allowed";
      if (T.x !== 0 && j.lockSkewingY || T.y !== 0 && j.lockSkewingX)
        return Y;
      var N = x(j, T) % 4;
      return d[N] + "-resize";
    }, A.scaleSkewCursorStyleHandler = function(D, T, j) {
      return D[j.canvas.altActionKey] ? A.skewCursorStyleHandler(D, T, j) : A.scaleCursorStyleHandler(D, T, j);
    }, A.rotationWithSnapping = W("rotating", K(function(D, T, j, Y) {
      var N = T, z = N.target, Z = z.translateToOriginPoint(z.getCenterPoint(), N.originX, N.originY);
      if (z.lockRotation)
        return !1;
      var tA, eA = Math.atan2(N.ey - Z.y, N.ex - Z.x), q = Math.atan2(Y - Z.y, j - Z.x), iA = w(q - eA + N.theta);
      if (z.snapAngle > 0) {
        var J = z.snapAngle, lA = z.snapThreshold || J, nA = Math.ceil(iA / J) * J, hA = Math.floor(iA / J) * J;
        Math.abs(iA - hA) < lA ? iA = hA : Math.abs(iA - nA) < lA && (iA = nA);
      }
      return iA < 0 && (iA = 360 + iA), iA %= 360, tA = z.angle !== iA, z.angle = iA, tA;
    })), A.scalingEqually = W("scaling", K(function(D, T, j, Y) {
      return X(D, T, j, Y);
    })), A.scalingX = W("scaling", K(function(D, T, j, Y) {
      return X(D, T, j, Y, { by: "x" });
    })), A.scalingY = W("scaling", K(function(D, T, j, Y) {
      return X(D, T, j, Y, { by: "y" });
    })), A.scalingYOrSkewingX = function(D, T, j, Y) {
      return D[T.target.canvas.altActionKey] ? A.skewHandlerX(D, T, j, Y) : A.scalingY(D, T, j, Y);
    }, A.scalingXOrSkewingY = function(D, T, j, Y) {
      return D[T.target.canvas.altActionKey] ? A.skewHandlerY(D, T, j, Y) : A.scalingX(D, T, j, Y);
    }, A.changeWidth = W("resizing", K(function(D, T, j, Y) {
      var N = T.target, z = V(T, T.originX, T.originY, j, Y), Z = N.strokeWidth / (N.strokeUniform ? N.scaleX : 1), tA = k(T) ? 2 : 1, eA = N.width, q = Math.abs(z.x * tA / N.scaleX) - Z;
      return N.set("width", Math.max(q, 0)), eA !== q;
    })), A.skewHandlerX = function(D, T, j, Y) {
      var N, z = T.target, Z = z.skewX, tA = T.originY;
      return !z.lockSkewingX && (Z === 0 ? N = V(T, c, c, j, Y).x > 0 ? i : h : (Z > 0 && (N = tA === r ? i : h), Z < 0 && (N = tA === r ? h : i), _(z) && (N = N === i ? h : i)), T.originX = N, W("skewing", K(P))(D, T, j, Y));
    }, A.skewHandlerY = function(D, T, j, Y) {
      var N, z = T.target, Z = z.skewY, tA = T.originX;
      return !z.lockSkewingY && (Z === 0 ? N = V(T, c, c, j, Y).y > 0 ? r : a : (Z > 0 && (N = tA === i ? r : a), Z < 0 && (N = tA === i ? a : r), _(z) && (N = N === r ? a : r)), T.originY = N, W("skewing", K(G))(D, T, j, Y));
    }, A.dragHandler = function(D, T, j, Y) {
      var N = T.target, z = j - T.offsetX, Z = Y - T.offsetY, tA = !N.get("lockMovementX") && N.left !== z, eA = !N.get("lockMovementY") && N.top !== Z;
      return tA && N.set("left", z), eA && N.set("top", Z), (tA || eA) && U("moving", L(D, T, j, Y)), tA || eA;
    }, A.scaleOrSkewActionName = function(D, T, j) {
      var Y = D[j.canvas.altActionKey];
      return T.x === 0 ? Y ? "skewX" : "scaleY" : T.y === 0 ? Y ? "skewY" : "scaleX" : void 0;
    }, A.rotationStyleHandler = function(D, T, j) {
      return j.lockRotation ? "not-allowed" : T.cursorStyle;
    }, A.fireEvent = U, A.wrapWithFixedAnchor = K, A.wrapWithFireEvent = W, A.getLocalPoint = V, s.controlsUtils = A;
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.util.degreesToRadians, d = s.controlsUtils;
    d.renderCircleControl = function(A, i, r, h, a) {
      h = h || {};
      var c, f = this.sizeX || h.cornerSize || a.cornerSize, w = this.sizeY || h.cornerSize || a.cornerSize, C = h.transparentCorners !== void 0 ? h.transparentCorners : a.transparentCorners, x = C ? "stroke" : "fill", U = !C && (h.cornerStrokeColor || a.cornerStrokeColor), F = i, k = r;
      A.save(), A.fillStyle = h.cornerColor || a.cornerColor, A.strokeStyle = h.cornerStrokeColor || a.cornerStrokeColor, f > w ? (c = f, A.scale(1, w / f), k = r * f / w) : w > f ? (c = w, A.scale(f / w, 1), F = i * w / f) : c = f, A.lineWidth = 1, A.beginPath(), A.arc(F, k, c / 2, 0, 2 * Math.PI, !1), A[x](), U && A.stroke(), A.restore();
    }, d.renderSquareControl = function(A, i, r, h, a) {
      h = h || {};
      var c = this.sizeX || h.cornerSize || a.cornerSize, f = this.sizeY || h.cornerSize || a.cornerSize, w = h.transparentCorners !== void 0 ? h.transparentCorners : a.transparentCorners, C = w ? "stroke" : "fill", x = !w && (h.cornerStrokeColor || a.cornerStrokeColor), U = c / 2, F = f / 2;
      A.save(), A.fillStyle = h.cornerColor || a.cornerColor, A.strokeStyle = h.cornerStrokeColor || a.cornerStrokeColor, A.lineWidth = 1, A.translate(i, r), A.rotate(o(a.angle)), A[C + "Rect"](-U, -F, c, f), x && A.strokeRect(-U, -F, c, f), A.restore();
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
    }, calcCornerCoords: function(o, d, A, i, r) {
      var h, a, c, f, w = r ? this.touchSizeX : this.sizeX, C = r ? this.touchSizeY : this.sizeY;
      if (w && C && w !== C) {
        var x = Math.atan2(C, w), U = Math.sqrt(w * w + C * C) / 2, F = x - s.util.degreesToRadians(o), k = Math.PI / 2 - x - s.util.degreesToRadians(o);
        h = U * s.util.cos(F), a = U * s.util.sin(F), c = U * s.util.cos(k), f = U * s.util.sin(k);
      } else
        U = 0.7071067812 * (w && C ? w : d), F = s.util.degreesToRadians(45 - o), h = c = U * s.util.cos(F), a = f = U * s.util.sin(F);
      return { tl: { x: A - f, y: i - c }, tr: { x: A + h, y: i - a }, bl: { x: A - h, y: i + a }, br: { x: A + f, y: i + c } };
    }, render: function(o, d, A, i, r) {
      ((i = i || {}).cornerStyle || r.cornerStyle) === "circle" ? s.controlsUtils.renderCircleControl.call(this, o, d, A, i, r) : s.controlsUtils.renderSquareControl.call(this, o, d, A, i, r);
    } };
  }(e), function() {
    function u(o, d) {
      var A, i, r, h, a = o.getAttribute("style"), c = o.getAttribute("offset") || 0;
      if (c = (c = parseFloat(c) / (/%$/.test(c) ? 100 : 1)) < 0 ? 0 : c > 1 ? 1 : c, a) {
        var f = a.split(/\s*;\s*/);
        for (f[f.length - 1] === "" && f.pop(), h = f.length; h--; ) {
          var w = f[h].split(/\s*:\s*/), C = w[0].trim(), x = w[1].trim();
          C === "stop-color" ? A = x : C === "stop-opacity" && (r = x);
        }
      }
      return A || (A = o.getAttribute("stop-color") || "rgb(0,0,0)"), r || (r = o.getAttribute("stop-opacity")), i = (A = new p.Color(A)).getAlpha(), r = isNaN(parseFloat(r)) ? 1 : parseFloat(r), r *= i * d, { offset: c, color: A.toRgb(), opacity: r };
    }
    var s = p.util.object.clone;
    p.Gradient = p.util.createClass({ offsetX: 0, offsetY: 0, gradientTransform: null, gradientUnits: "pixels", type: "linear", initialize: function(o) {
      o || (o = {}), o.coords || (o.coords = {});
      var d, A = this;
      Object.keys(o).forEach(function(i) {
        A[i] = o[i];
      }), this.id ? this.id += "_" + p.Object.__uid++ : this.id = p.Object.__uid++, d = { x1: o.coords.x1 || 0, y1: o.coords.y1 || 0, x2: o.coords.x2 || 0, y2: o.coords.y2 || 0 }, this.type === "radial" && (d.r1 = o.coords.r1 || 0, d.r2 = o.coords.r2 || 0), this.coords = d, this.colorStops = o.colorStops.slice();
    }, addColorStop: function(o) {
      for (var d in o) {
        var A = new p.Color(o[d]);
        this.colorStops.push({ offset: parseFloat(d), color: A.toRgb(), opacity: A.getAlpha() });
      }
      return this;
    }, toObject: function(o) {
      var d = { type: this.type, coords: this.coords, colorStops: this.colorStops, offsetX: this.offsetX, offsetY: this.offsetY, gradientUnits: this.gradientUnits, gradientTransform: this.gradientTransform ? this.gradientTransform.concat() : this.gradientTransform };
      return p.util.populateWithProperties(this, d, o), d;
    }, toSVG: function(o, d) {
      var A, i, r, h, a = s(this.coords, !0), c = (d = d || {}, s(this.colorStops, !0)), f = a.r1 > a.r2, w = this.gradientTransform ? this.gradientTransform.concat() : p.iMatrix.concat(), C = -this.offsetX, x = -this.offsetY, U = !!d.additionalTransform, F = this.gradientUnits === "pixels" ? "userSpaceOnUse" : "objectBoundingBox";
      if (c.sort(function(K, W) {
        return K.offset - W.offset;
      }), F === "objectBoundingBox" ? (C /= o.width, x /= o.height) : (C += o.width / 2, x += o.height / 2), o.type === "path" && this.gradientUnits !== "percentage" && (C -= o.pathOffset.x, x -= o.pathOffset.y), w[4] -= C, w[5] -= x, h = 'id="SVGID_' + this.id + '" gradientUnits="' + F + '"', h += ' gradientTransform="' + (U ? d.additionalTransform + " " : "") + p.util.matrixToSVG(w) + '" ', this.type === "linear" ? r = ["<linearGradient ", h, ' x1="', a.x1, '" y1="', a.y1, '" x2="', a.x2, '" y2="', a.y2, `">
`] : this.type === "radial" && (r = ["<radialGradient ", h, ' cx="', f ? a.x1 : a.x2, '" cy="', f ? a.y1 : a.y2, '" r="', f ? a.r1 : a.r2, '" fx="', f ? a.x2 : a.x1, '" fy="', f ? a.y2 : a.y1, `">
`]), this.type === "radial") {
        if (f)
          for ((c = c.concat()).reverse(), A = 0, i = c.length; A < i; A++)
            c[A].offset = 1 - c[A].offset;
        var k = Math.min(a.r1, a.r2);
        if (k > 0) {
          var H = k / Math.max(a.r1, a.r2);
          for (A = 0, i = c.length; A < i; A++)
            c[A].offset += H * (1 - c[A].offset);
        }
      }
      for (A = 0, i = c.length; A < i; A++) {
        var L = c[A];
        r.push("<stop ", 'offset="', 100 * L.offset + "%", '" style="stop-color:', L.color, L.opacity !== void 0 ? ";stop-opacity: " + L.opacity : ";", `"/>
`);
      }
      return r.push(this.type === "linear" ? `</linearGradient>
` : `</radialGradient>
`), r.join("");
    }, toLive: function(o) {
      var d, A, i, r = p.util.object.clone(this.coords);
      if (this.type) {
        for (this.type === "linear" ? d = o.createLinearGradient(r.x1, r.y1, r.x2, r.y2) : this.type === "radial" && (d = o.createRadialGradient(r.x1, r.y1, r.r1, r.x2, r.y2, r.r2)), A = 0, i = this.colorStops.length; A < i; A++) {
          var h = this.colorStops[A].color, a = this.colorStops[A].opacity, c = this.colorStops[A].offset;
          a !== void 0 && (h = new p.Color(h).setAlpha(a).toRgba()), d.addColorStop(c, h);
        }
        return d;
      }
    } }), p.util.object.extend(p.Gradient, { fromElement: function(o, d, A, i) {
      var r = parseFloat(A) / (/%$/.test(A) ? 100 : 1);
      r = r < 0 ? 0 : r > 1 ? 1 : r, isNaN(r) && (r = 1);
      var h, a, c, f, w = o.getElementsByTagName("stop"), C = o.getAttribute("gradientUnits") === "userSpaceOnUse" ? "pixels" : "percentage", x = o.getAttribute("gradientTransform") || "", U = [], F = 0, k = 0;
      for (o.nodeName === "linearGradient" || o.nodeName === "LINEARGRADIENT" ? (h = "linear", a = function(H) {
        return { x1: H.getAttribute("x1") || 0, y1: H.getAttribute("y1") || 0, x2: H.getAttribute("x2") || "100%", y2: H.getAttribute("y2") || 0 };
      }(o)) : (h = "radial", a = function(H) {
        return { x1: H.getAttribute("fx") || H.getAttribute("cx") || "50%", y1: H.getAttribute("fy") || H.getAttribute("cy") || "50%", r1: 0, x2: H.getAttribute("cx") || "50%", y2: H.getAttribute("cy") || "50%", r2: H.getAttribute("r") || "50%" };
      }(o)), c = w.length; c--; )
        U.push(u(w[c], r));
      return f = p.parseTransformAttribute(x), function(H, L, K, W) {
        var V, _;
        Object.keys(L).forEach(function(S) {
          (V = L[S]) === "Infinity" ? _ = 1 : V === "-Infinity" ? _ = 0 : (_ = parseFloat(L[S], 10), typeof V == "string" && /^(\d+\.\d+)%|(\d+)%$/.test(V) && (_ *= 0.01, W === "pixels" && (S !== "x1" && S !== "x2" && S !== "r2" || (_ *= K.viewBoxWidth || K.width), S !== "y1" && S !== "y2" || (_ *= K.viewBoxHeight || K.height)))), L[S] = _;
        });
      }(0, a, i, C), C === "pixels" && (F = -d.left, k = -d.top), new p.Gradient({ id: o.getAttribute("id"), type: h, coords: a, colorStops: U, gradientUnits: C, gradientTransform: f, offsetX: F, offsetY: k });
    } });
  }(), Q = p.util.toFixed, p.Pattern = p.util.createClass({ repeat: "repeat", offsetX: 0, offsetY: 0, crossOrigin: "", patternTransform: null, initialize: function(u, s) {
    if (u || (u = {}), this.id = p.Object.__uid++, this.setOptions(u), !u.source || u.source && typeof u.source != "string")
      s && s(this);
    else {
      var o = this;
      this.source = p.util.createImage(), p.util.loadImage(u.source, function(d, A) {
        o.source = d, s && s(o, A);
      }, null, this.crossOrigin);
    }
  }, toObject: function(u) {
    var s, o, d = p.Object.NUM_FRACTION_DIGITS;
    return typeof this.source.src == "string" ? s = this.source.src : typeof this.source == "object" && this.source.toDataURL && (s = this.source.toDataURL()), o = { type: "pattern", source: s, repeat: this.repeat, crossOrigin: this.crossOrigin, offsetX: Q(this.offsetX, d), offsetY: Q(this.offsetY, d), patternTransform: this.patternTransform ? this.patternTransform.concat() : null }, p.util.populateWithProperties(this, o, u), o;
  }, toSVG: function(u) {
    var s = typeof this.source == "function" ? this.source() : this.source, o = s.width / u.width, d = s.height / u.height, A = this.offsetX / u.width, i = this.offsetY / u.height, r = "";
    return this.repeat !== "repeat-x" && this.repeat !== "no-repeat" || (d = 1, i && (d += Math.abs(i))), this.repeat !== "repeat-y" && this.repeat !== "no-repeat" || (o = 1, A && (o += Math.abs(A))), s.src ? r = s.src : s.toDataURL && (r = s.toDataURL()), '<pattern id="SVGID_' + this.id + '" x="' + A + '" y="' + i + '" width="' + o + '" height="' + d + `">
<image x="0" y="0" width="` + s.width + '" height="' + s.height + '" xlink:href="' + r + `"></image>
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
      var A = 40, i = 40, r = s.Object.NUM_FRACTION_DIGITS, h = s.util.rotateVector({ x: this.offsetX, y: this.offsetY }, s.util.degreesToRadians(-d.angle)), a = new s.Color(this.color);
      return d.width && d.height && (A = 100 * o((Math.abs(h.x) + this.blur) / d.width, r) + 20, i = 100 * o((Math.abs(h.y) + this.blur) / d.height, r) + 20), d.flipX && (h.x *= -1), d.flipY && (h.y *= -1), '<filter id="SVGID_' + this.id + '" y="-' + i + '%" height="' + (100 + 2 * i) + '%" x="-' + A + '%" width="' + (100 + 2 * A) + `%" >
	<feGaussianBlur in="SourceAlpha" stdDeviation="` + o(this.blur ? this.blur / 2 : 0, r) + `"></feGaussianBlur>
	<feOffset dx="` + o(h.x, r) + '" dy="' + o(h.y, r) + `" result="oBlur" ></feOffset>
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
    if (p.StaticCanvas)
      p.warn("fabric.StaticCanvas is already defined.");
    else {
      var u = p.util.object.extend, s = p.util.getElementOffset, o = p.util.removeFromArray, d = p.util.toFixed, A = p.util.transformPoint, i = p.util.invertTransform, r = p.util.getNodeCanvas, h = p.util.createCanvasElement, a = new Error("Could not initialize `canvas` element");
      p.StaticCanvas = p.util.createClass(p.CommonMethods, { initialize: function(c, f) {
        f || (f = {}), this.renderAndResetBound = this.renderAndReset.bind(this), this.requestRenderAllBound = this.requestRenderAll.bind(this), this._initStatic(c, f);
      }, backgroundColor: "", backgroundImage: null, overlayColor: "", overlayImage: null, includeDefaultValues: !0, stateful: !1, renderOnAddRemove: !0, controlsAboveOverlay: !1, allowTouchScrolling: !1, imageSmoothingEnabled: !0, viewportTransform: p.iMatrix.concat(), backgroundVpt: !0, overlayVpt: !0, enableRetinaScaling: !0, vptCoords: {}, skipOffscreen: !0, clipPath: void 0, _initStatic: function(c, f) {
        var w = this.requestRenderAllBound;
        this._objects = [], this._createLowerCanvas(c), this._initOptions(f), this.interactive || this._initRetinaScaling(), f.overlayImage && this.setOverlayImage(f.overlayImage, w), f.backgroundImage && this.setBackgroundImage(f.backgroundImage, w), f.backgroundColor && this.setBackgroundColor(f.backgroundColor, w), f.overlayColor && this.setOverlayColor(f.overlayColor, w), this.calcOffset();
      }, _isRetinaScaling: function() {
        return p.devicePixelRatio > 1 && this.enableRetinaScaling;
      }, getRetinaScaling: function() {
        return this._isRetinaScaling() ? Math.max(1, p.devicePixelRatio) : 1;
      }, _initRetinaScaling: function() {
        if (this._isRetinaScaling()) {
          var c = p.devicePixelRatio;
          this.__initRetinaScaling(c, this.lowerCanvasEl, this.contextContainer), this.upperCanvasEl && this.__initRetinaScaling(c, this.upperCanvasEl, this.contextTop);
        }
      }, __initRetinaScaling: function(c, f, w) {
        f.setAttribute("width", this.width * c), f.setAttribute("height", this.height * c), w.scale(c, c);
      }, calcOffset: function() {
        return this._offset = s(this.lowerCanvasEl), this;
      }, setOverlayImage: function(c, f, w) {
        return this.__setBgOverlayImage("overlayImage", c, f, w);
      }, setBackgroundImage: function(c, f, w) {
        return this.__setBgOverlayImage("backgroundImage", c, f, w);
      }, setOverlayColor: function(c, f) {
        return this.__setBgOverlayColor("overlayColor", c, f);
      }, setBackgroundColor: function(c, f) {
        return this.__setBgOverlayColor("backgroundColor", c, f);
      }, __setBgOverlayImage: function(c, f, w, C) {
        return typeof f == "string" ? p.util.loadImage(f, function(x, U) {
          if (x) {
            var F = new p.Image(x, C);
            this[c] = F, F.canvas = this;
          }
          w && w(x, U);
        }, this, C && C.crossOrigin) : (C && f.setOptions(C), this[c] = f, f && (f.canvas = this), w && w(f, !1)), this;
      }, __setBgOverlayColor: function(c, f, w) {
        return this[c] = f, this._initGradient(f, c), this._initPattern(f, c, w), this;
      }, _createCanvasElement: function() {
        var c = h();
        if (!c || (c.style || (c.style = {}), c.getContext === void 0))
          throw a;
        return c;
      }, _initOptions: function(c) {
        var f = this.lowerCanvasEl;
        this._setOptions(c), this.width = this.width || parseInt(f.width, 10) || 0, this.height = this.height || parseInt(f.height, 10) || 0, this.lowerCanvasEl.style && (f.width = this.width, f.height = this.height, f.style.width = this.width + "px", f.style.height = this.height + "px", this.viewportTransform = this.viewportTransform.slice());
      }, _createLowerCanvas: function(c) {
        c && c.getContext ? this.lowerCanvasEl = c : this.lowerCanvasEl = p.util.getById(c) || this._createCanvasElement(), p.util.addClass(this.lowerCanvasEl, "lower-canvas"), this._originalCanvasStyle = this.lowerCanvasEl.style, this.interactive && this._applyCanvasStyle(this.lowerCanvasEl), this.contextContainer = this.lowerCanvasEl.getContext("2d");
      }, getWidth: function() {
        return this.width;
      }, getHeight: function() {
        return this.height;
      }, setWidth: function(c, f) {
        return this.setDimensions({ width: c }, f);
      }, setHeight: function(c, f) {
        return this.setDimensions({ height: c }, f);
      }, setDimensions: function(c, f) {
        var w;
        for (var C in f = f || {}, c)
          w = c[C], f.cssOnly || (this._setBackstoreDimension(C, c[C]), w += "px", this.hasLostContext = !0), f.backstoreOnly || this._setCssDimension(C, w);
        return this._isCurrentlyDrawing && this.freeDrawingBrush && this.freeDrawingBrush._setBrushStyles(this.contextTop), this._initRetinaScaling(), this.calcOffset(), f.cssOnly || this.requestRenderAll(), this;
      }, _setBackstoreDimension: function(c, f) {
        return this.lowerCanvasEl[c] = f, this.upperCanvasEl && (this.upperCanvasEl[c] = f), this.cacheCanvasEl && (this.cacheCanvasEl[c] = f), this[c] = f, this;
      }, _setCssDimension: function(c, f) {
        return this.lowerCanvasEl.style[c] = f, this.upperCanvasEl && (this.upperCanvasEl.style[c] = f), this.wrapperEl && (this.wrapperEl.style[c] = f), this;
      }, getZoom: function() {
        return this.viewportTransform[0];
      }, setViewportTransform: function(c) {
        var f, w, C, x = this._activeObject, U = this.backgroundImage, F = this.overlayImage;
        for (this.viewportTransform = c, w = 0, C = this._objects.length; w < C; w++)
          (f = this._objects[w]).group || f.setCoords(!0);
        return x && x.setCoords(), U && U.setCoords(!0), F && F.setCoords(!0), this.calcViewportBoundaries(), this.renderOnAddRemove && this.requestRenderAll(), this;
      }, zoomToPoint: function(c, f) {
        var w = c, C = this.viewportTransform.slice(0);
        c = A(c, i(this.viewportTransform)), C[0] = f, C[3] = f;
        var x = A(c, C);
        return C[4] += w.x - x.x, C[5] += w.y - x.y, this.setViewportTransform(C);
      }, setZoom: function(c) {
        return this.zoomToPoint(new p.Point(0, 0), c), this;
      }, absolutePan: function(c) {
        var f = this.viewportTransform.slice(0);
        return f[4] = -c.x, f[5] = -c.y, this.setViewportTransform(f);
      }, relativePan: function(c) {
        return this.absolutePan(new p.Point(-c.x - this.viewportTransform[4], -c.y - this.viewportTransform[5]));
      }, getElement: function() {
        return this.lowerCanvasEl;
      }, _onObjectAdded: function(c) {
        this.stateful && c.setupState(), c._set("canvas", this), c.setCoords(), this.fire("object:added", { target: c }), c.fire("added");
      }, _onObjectRemoved: function(c) {
        this.fire("object:removed", { target: c }), c.fire("removed"), delete c.canvas;
      }, clearContext: function(c) {
        return c.clearRect(0, 0, this.width, this.height), this;
      }, getContext: function() {
        return this.contextContainer;
      }, clear: function() {
        return this.remove.apply(this, this.getObjects()), this.backgroundImage = null, this.overlayImage = null, this.backgroundColor = "", this.overlayColor = "", this._hasITextHandlers && (this.off("mouse:up", this._mouseUpITextHandler), this._iTextInstances = null, this._hasITextHandlers = !1), this.clearContext(this.contextContainer), this.fire("canvas:cleared"), this.renderOnAddRemove && this.requestRenderAll(), this;
      }, renderAll: function() {
        var c = this.contextContainer;
        return this.renderCanvas(c, this._objects), this;
      }, renderAndReset: function() {
        this.isRendering = 0, this.renderAll();
      }, requestRenderAll: function() {
        return this.isRendering || (this.isRendering = p.util.requestAnimFrame(this.renderAndResetBound)), this;
      }, calcViewportBoundaries: function() {
        var c = {}, f = this.width, w = this.height, C = i(this.viewportTransform);
        return c.tl = A({ x: 0, y: 0 }, C), c.br = A({ x: f, y: w }, C), c.tr = new p.Point(c.br.x, c.tl.y), c.bl = new p.Point(c.tl.x, c.br.y), this.vptCoords = c, c;
      }, cancelRequestedRender: function() {
        this.isRendering && (p.util.cancelAnimFrame(this.isRendering), this.isRendering = 0);
      }, renderCanvas: function(c, f) {
        var w = this.viewportTransform, C = this.clipPath;
        this.cancelRequestedRender(), this.calcViewportBoundaries(), this.clearContext(c), p.util.setImageSmoothing(c, this.imageSmoothingEnabled), this.fire("before:render", { ctx: c }), this._renderBackground(c), c.save(), c.transform(w[0], w[1], w[2], w[3], w[4], w[5]), this._renderObjects(c, f), c.restore(), !this.controlsAboveOverlay && this.interactive && this.drawControls(c), C && (C.canvas = this, C.shouldCache(), C._transformDone = !0, C.renderCache({ forClipping: !0 }), this.drawClipPathOnCanvas(c)), this._renderOverlay(c), this.controlsAboveOverlay && this.interactive && this.drawControls(c), this.fire("after:render", { ctx: c });
      }, drawClipPathOnCanvas: function(c) {
        var f = this.viewportTransform, w = this.clipPath;
        c.save(), c.transform(f[0], f[1], f[2], f[3], f[4], f[5]), c.globalCompositeOperation = "destination-in", w.transform(c), c.scale(1 / w.zoomX, 1 / w.zoomY), c.drawImage(w._cacheCanvas, -w.cacheTranslationX, -w.cacheTranslationY), c.restore();
      }, _renderObjects: function(c, f) {
        var w, C;
        for (w = 0, C = f.length; w < C; ++w)
          f[w] && f[w].render(c);
      }, _renderBackgroundOrOverlay: function(c, f) {
        var w = this[f + "Color"], C = this[f + "Image"], x = this.viewportTransform, U = this[f + "Vpt"];
        if (w || C) {
          if (w) {
            c.save(), c.beginPath(), c.moveTo(0, 0), c.lineTo(this.width, 0), c.lineTo(this.width, this.height), c.lineTo(0, this.height), c.closePath(), c.fillStyle = w.toLive ? w.toLive(c, this) : w, U && c.transform(x[0], x[1], x[2], x[3], x[4], x[5]), c.transform(1, 0, 0, 1, w.offsetX || 0, w.offsetY || 0);
            var F = w.gradientTransform || w.patternTransform;
            F && c.transform(F[0], F[1], F[2], F[3], F[4], F[5]), c.fill(), c.restore();
          }
          C && (c.save(), U && c.transform(x[0], x[1], x[2], x[3], x[4], x[5]), C.render(c), c.restore());
        }
      }, _renderBackground: function(c) {
        this._renderBackgroundOrOverlay(c, "background");
      }, _renderOverlay: function(c) {
        this._renderBackgroundOrOverlay(c, "overlay");
      }, getCenter: function() {
        return { top: this.height / 2, left: this.width / 2 };
      }, getCenterPoint: function() {
        return new p.Point(this.width / 2, this.height / 2);
      }, centerObjectH: function(c) {
        return this._centerObject(c, new p.Point(this.getCenterPoint().x, c.getCenterPoint().y));
      }, centerObjectV: function(c) {
        return this._centerObject(c, new p.Point(c.getCenterPoint().x, this.getCenterPoint().y));
      }, centerObject: function(c) {
        var f = this.getCenterPoint();
        return this._centerObject(c, f);
      }, viewportCenterObject: function(c) {
        var f = this.getVpCenter();
        return this._centerObject(c, f);
      }, viewportCenterObjectH: function(c) {
        var f = this.getVpCenter();
        return this._centerObject(c, new p.Point(f.x, c.getCenterPoint().y)), this;
      }, viewportCenterObjectV: function(c) {
        var f = this.getVpCenter();
        return this._centerObject(c, new p.Point(c.getCenterPoint().x, f.y));
      }, getVpCenter: function() {
        var c = this.getCenterPoint(), f = i(this.viewportTransform);
        return A(c, f);
      }, _centerObject: function(c, f) {
        return c.setPositionByOrigin(f, "center", "center"), c.setCoords(), this.renderOnAddRemove && this.requestRenderAll(), this;
      }, toDatalessJSON: function(c) {
        return this.toDatalessObject(c);
      }, toObject: function(c) {
        return this._toObjectMethod("toObject", c);
      }, toDatalessObject: function(c) {
        return this._toObjectMethod("toDatalessObject", c);
      }, _toObjectMethod: function(c, f) {
        var w = this.clipPath, C = { version: p.version, objects: this._toObjects(c, f) };
        return w && !w.excludeFromExport && (C.clipPath = this._toObject(this.clipPath, c, f)), u(C, this.__serializeBgOverlay(c, f)), p.util.populateWithProperties(this, C, f), C;
      }, _toObjects: function(c, f) {
        return this._objects.filter(function(w) {
          return !w.excludeFromExport;
        }).map(function(w) {
          return this._toObject(w, c, f);
        }, this);
      }, _toObject: function(c, f, w) {
        var C;
        this.includeDefaultValues || (C = c.includeDefaultValues, c.includeDefaultValues = !1);
        var x = c[f](w);
        return this.includeDefaultValues || (c.includeDefaultValues = C), x;
      }, __serializeBgOverlay: function(c, f) {
        var w = {}, C = this.backgroundImage, x = this.overlayImage, U = this.backgroundColor, F = this.overlayColor;
        return U && U.toObject ? U.excludeFromExport || (w.background = U.toObject(f)) : U && (w.background = U), F && F.toObject ? F.excludeFromExport || (w.overlay = F.toObject(f)) : F && (w.overlay = F), C && !C.excludeFromExport && (w.backgroundImage = this._toObject(C, c, f)), x && !x.excludeFromExport && (w.overlayImage = this._toObject(x, c, f)), w;
      }, svgViewportTransformation: !0, toSVG: function(c, f) {
        c || (c = {}), c.reviver = f;
        var w = [];
        return this._setSVGPreamble(w, c), this._setSVGHeader(w, c), this.clipPath && w.push('<g clip-path="url(#' + this.clipPath.clipPathId + `)" >
`), this._setSVGBgOverlayColor(w, "background"), this._setSVGBgOverlayImage(w, "backgroundImage", f), this._setSVGObjects(w, f), this.clipPath && w.push(`</g>
`), this._setSVGBgOverlayColor(w, "overlay"), this._setSVGBgOverlayImage(w, "overlayImage", f), w.push("</svg>"), w.join("");
      }, _setSVGPreamble: function(c, f) {
        f.suppressPreamble || c.push('<?xml version="1.0" encoding="', f.encoding || "UTF-8", `" standalone="no" ?>
`, '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ', `"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
`);
      }, _setSVGHeader: function(c, f) {
        var w, C = f.width || this.width, x = f.height || this.height, U = 'viewBox="0 0 ' + this.width + " " + this.height + '" ', F = p.Object.NUM_FRACTION_DIGITS;
        f.viewBox ? U = 'viewBox="' + f.viewBox.x + " " + f.viewBox.y + " " + f.viewBox.width + " " + f.viewBox.height + '" ' : this.svgViewportTransformation && (w = this.viewportTransform, U = 'viewBox="' + d(-w[4] / w[0], F) + " " + d(-w[5] / w[3], F) + " " + d(this.width / w[0], F) + " " + d(this.height / w[3], F) + '" '), c.push("<svg ", 'xmlns="http://www.w3.org/2000/svg" ', 'xmlns:xlink="http://www.w3.org/1999/xlink" ', 'version="1.1" ', 'width="', C, '" ', 'height="', x, '" ', U, `xml:space="preserve">
`, "<desc>Created with Fabric.js ", p.version, `</desc>
`, `<defs>
`, this.createSVGFontFacesMarkup(), this.createSVGRefElementsMarkup(), this.createSVGClipPathMarkup(f), `</defs>
`);
      }, createSVGClipPathMarkup: function(c) {
        var f = this.clipPath;
        return f ? (f.clipPathId = "CLIPPATH_" + p.Object.__uid++, '<clipPath id="' + f.clipPathId + `" >
` + this.clipPath.toClipPathSVG(c.reviver) + `</clipPath>
`) : "";
      }, createSVGRefElementsMarkup: function() {
        var c = this;
        return ["background", "overlay"].map(function(f) {
          var w = c[f + "Color"];
          if (w && w.toLive) {
            var C = c[f + "Vpt"], x = c.viewportTransform, U = { width: c.width / (C ? x[0] : 1), height: c.height / (C ? x[3] : 1) };
            return w.toSVG(U, { additionalTransform: C ? p.util.matrixToSVG(x) : "" });
          }
        }).join("");
      }, createSVGFontFacesMarkup: function() {
        var c, f, w, C, x, U, F, k, H = "", L = {}, K = p.fontPaths, W = [];
        for (this._objects.forEach(function _(S) {
          W.push(S), S._objects && S._objects.forEach(_);
        }), F = 0, k = W.length; F < k; F++)
          if (f = (c = W[F]).fontFamily, c.type.indexOf("text") !== -1 && !L[f] && K[f] && (L[f] = !0, c.styles))
            for (x in w = c.styles)
              for (U in C = w[x])
                !L[f = C[U].fontFamily] && K[f] && (L[f] = !0);
        for (var V in L)
          H += [`		@font-face {
`, "			font-family: '", V, `';
`, "			src: url('", K[V], `');
`, `		}
`].join("");
        return H && (H = ['	<style type="text/css">', `<![CDATA[
`, H, "]]>", `</style>
`].join("")), H;
      }, _setSVGObjects: function(c, f) {
        var w, C, x, U = this._objects;
        for (C = 0, x = U.length; C < x; C++)
          (w = U[C]).excludeFromExport || this._setSVGObject(c, w, f);
      }, _setSVGObject: function(c, f, w) {
        c.push(f.toSVG(w));
      }, _setSVGBgOverlayImage: function(c, f, w) {
        this[f] && !this[f].excludeFromExport && this[f].toSVG && c.push(this[f].toSVG(w));
      }, _setSVGBgOverlayColor: function(c, f) {
        var w = this[f + "Color"], C = this.viewportTransform, x = this.width, U = this.height;
        if (w)
          if (w.toLive) {
            var F = w.repeat, k = p.util.invertTransform(C), H = this[f + "Vpt"] ? p.util.matrixToSVG(k) : "";
            c.push('<rect transform="' + H + " translate(", x / 2, ",", U / 2, ')"', ' x="', w.offsetX - x / 2, '" y="', w.offsetY - U / 2, '" ', 'width="', F === "repeat-y" || F === "no-repeat" ? w.source.width : x, '" height="', F === "repeat-x" || F === "no-repeat" ? w.source.height : U, '" fill="url(#SVGID_' + w.id + ')"', `></rect>
`);
          } else
            c.push('<rect x="0" y="0" width="100%" height="100%" ', 'fill="', w, '"', `></rect>
`);
      }, sendToBack: function(c) {
        if (!c)
          return this;
        var f, w, C, x = this._activeObject;
        if (c === x && c.type === "activeSelection")
          for (f = (C = x._objects).length; f--; )
            w = C[f], o(this._objects, w), this._objects.unshift(w);
        else
          o(this._objects, c), this._objects.unshift(c);
        return this.renderOnAddRemove && this.requestRenderAll(), this;
      }, bringToFront: function(c) {
        if (!c)
          return this;
        var f, w, C, x = this._activeObject;
        if (c === x && c.type === "activeSelection")
          for (C = x._objects, f = 0; f < C.length; f++)
            w = C[f], o(this._objects, w), this._objects.push(w);
        else
          o(this._objects, c), this._objects.push(c);
        return this.renderOnAddRemove && this.requestRenderAll(), this;
      }, sendBackwards: function(c, f) {
        if (!c)
          return this;
        var w, C, x, U, F, k = this._activeObject, H = 0;
        if (c === k && c.type === "activeSelection")
          for (F = k._objects, w = 0; w < F.length; w++)
            C = F[w], (x = this._objects.indexOf(C)) > 0 + H && (U = x - 1, o(this._objects, C), this._objects.splice(U, 0, C)), H++;
        else
          (x = this._objects.indexOf(c)) !== 0 && (U = this._findNewLowerIndex(c, x, f), o(this._objects, c), this._objects.splice(U, 0, c));
        return this.renderOnAddRemove && this.requestRenderAll(), this;
      }, _findNewLowerIndex: function(c, f, w) {
        var C, x;
        if (w) {
          for (C = f, x = f - 1; x >= 0; --x)
            if (c.intersectsWithObject(this._objects[x]) || c.isContainedWithinObject(this._objects[x]) || this._objects[x].isContainedWithinObject(c)) {
              C = x;
              break;
            }
        } else
          C = f - 1;
        return C;
      }, bringForward: function(c, f) {
        if (!c)
          return this;
        var w, C, x, U, F, k = this._activeObject, H = 0;
        if (c === k && c.type === "activeSelection")
          for (w = (F = k._objects).length; w--; )
            C = F[w], (x = this._objects.indexOf(C)) < this._objects.length - 1 - H && (U = x + 1, o(this._objects, C), this._objects.splice(U, 0, C)), H++;
        else
          (x = this._objects.indexOf(c)) !== this._objects.length - 1 && (U = this._findNewUpperIndex(c, x, f), o(this._objects, c), this._objects.splice(U, 0, c));
        return this.renderOnAddRemove && this.requestRenderAll(), this;
      }, _findNewUpperIndex: function(c, f, w) {
        var C, x, U;
        if (w) {
          for (C = f, x = f + 1, U = this._objects.length; x < U; ++x)
            if (c.intersectsWithObject(this._objects[x]) || c.isContainedWithinObject(this._objects[x]) || this._objects[x].isContainedWithinObject(c)) {
              C = x;
              break;
            }
        } else
          C = f + 1;
        return C;
      }, moveTo: function(c, f) {
        return o(this._objects, c), this._objects.splice(f, 0, c), this.renderOnAddRemove && this.requestRenderAll();
      }, dispose: function() {
        return this.isRendering && (p.util.cancelAnimFrame(this.isRendering), this.isRendering = 0), this.forEachObject(function(c) {
          c.dispose && c.dispose();
        }), this._objects = [], this.backgroundImage && this.backgroundImage.dispose && this.backgroundImage.dispose(), this.backgroundImage = null, this.overlayImage && this.overlayImage.dispose && this.overlayImage.dispose(), this.overlayImage = null, this._iTextInstances = null, this.contextContainer = null, this.lowerCanvasEl.classList.remove("lower-canvas"), p.util.setStyle(this.lowerCanvasEl, this._originalCanvasStyle), delete this._originalCanvasStyle, this.lowerCanvasEl.setAttribute("width", this.width), this.lowerCanvasEl.setAttribute("height", this.height), p.util.cleanUpJsdomNode(this.lowerCanvasEl), this.lowerCanvasEl = void 0, this;
      }, toString: function() {
        return "#<fabric.Canvas (" + this.complexity() + "): { objects: " + this._objects.length + " }>";
      } }), u(p.StaticCanvas.prototype, p.Observable), u(p.StaticCanvas.prototype, p.Collection), u(p.StaticCanvas.prototype, p.DataURLExporter), u(p.StaticCanvas, { EMPTY_JSON: '{"objects": [], "background": "white"}', supports: function(c) {
        var f = h();
        if (!f || !f.getContext)
          return null;
        var w = f.getContext("2d");
        return w && c === "setLineDash" ? w.setLineDash !== void 0 : null;
      } }), p.StaticCanvas.prototype.toJSON = p.StaticCanvas.prototype.toObject, p.isLikelyNode && (p.StaticCanvas.prototype.createPNGStream = function() {
        var c = r(this.lowerCanvasEl);
        return c && c.createPNGStream();
      }, p.StaticCanvas.prototype.createJPEGStream = function(c) {
        var f = r(this.lowerCanvasEl);
        return f && f.createJPEGStream(c);
      });
    }
  }(), p.BaseBrush = p.util.createClass({ color: "rgb(0, 0, 0)", width: 1, shadow: null, strokeLineCap: "round", strokeLineJoin: "round", strokeMiterLimit: 10, strokeDashArray: null, limitedToCanvasSize: !1, _setBrushStyles: function(u) {
    u.strokeStyle = this.color, u.lineWidth = this.width, u.lineCap = this.strokeLineCap, u.miterLimit = this.strokeMiterLimit, u.lineJoin = this.strokeLineJoin, u.setLineDash(this.strokeDashArray || []);
  }, _saveAndTransform: function(u) {
    var s = this.canvas.viewportTransform;
    u.save(), u.transform(s[0], s[1], s[2], s[3], s[4], s[5]);
  }, _setShadow: function() {
    if (this.shadow) {
      var u = this.canvas, s = this.shadow, o = u.contextTop, d = u.getZoom();
      u && u._isRetinaScaling() && (d *= p.devicePixelRatio), o.shadowColor = s.color, o.shadowBlur = s.blur * d, o.shadowOffsetX = s.offsetX * d, o.shadowOffsetY = s.offsetY * d;
    }
  }, needsFullRender: function() {
    return new p.Color(this.color).getAlpha() < 1 || !!this.shadow;
  }, _resetShadow: function() {
    var u = this.canvas.contextTop;
    u.shadowColor = "", u.shadowBlur = u.shadowOffsetX = u.shadowOffsetY = 0;
  }, _isOutSideCanvas: function(u) {
    return u.x < 0 || u.x > this.canvas.getWidth() || u.y < 0 || u.y > this.canvas.getHeight();
  } }), p.PencilBrush = p.util.createClass(p.BaseBrush, { decimate: 0.4, drawStraightLine: !1, straightLineKey: "shiftKey", initialize: function(u) {
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
    var s = new p.Point(u.x, u.y);
    this._reset(), this._addPoint(s), this.canvas.contextTop.moveTo(s.x, s.y);
  }, _addPoint: function(u) {
    return !(this._points.length > 1 && u.eq(this._points[this._points.length - 1]) || (this.drawStraightLine && this._points.length > 1 && (this._hasStraightLine = !0, this._points.pop()), this._points.push(u), 0));
  }, _reset: function() {
    this._points = [], this._setBrushStyles(this.canvas.contextTop), this._setShadow(), this._hasStraightLine = !1;
  }, _captureDrawingPath: function(u) {
    var s = new p.Point(u.x, u.y);
    return this._addPoint(s);
  }, _render: function(u) {
    var s, o, d = this._points[0], A = this._points[1];
    if (u = u || this.canvas.contextTop, this._saveAndTransform(u), u.beginPath(), this._points.length === 2 && d.x === A.x && d.y === A.y) {
      var i = this.width / 1e3;
      d = new p.Point(d.x, d.y), A = new p.Point(A.x, A.y), d.x -= i, A.x += i;
    }
    for (u.moveTo(d.x, d.y), s = 1, o = this._points.length; s < o; s++)
      this._drawSegment(u, d, A), d = this._points[s], A = this._points[s + 1];
    u.lineTo(d.x, d.y), u.stroke(), u.restore();
  }, convertPointsToSVGPath: function(u) {
    var s = this.width / 1e3;
    return p.util.getSmoothPathFromPoints(u, s);
  }, _isEmptySVGPath: function(u) {
    return p.util.joinPath(u) === "M 0 0 Q 0 0 0 0 L 0 0";
  }, createPath: function(u) {
    var s = new p.Path(u, { fill: null, stroke: this.color, strokeWidth: this.width, strokeLineCap: this.strokeLineCap, strokeMiterLimit: this.strokeMiterLimit, strokeLineJoin: this.strokeLineJoin, strokeDashArray: this.strokeDashArray });
    return this.shadow && (this.shadow.affectStroke = !0, s.shadow = new p.Shadow(this.shadow)), s;
  }, decimatePoints: function(u, s) {
    if (u.length <= 2)
      return u;
    var o, d = this.canvas.getZoom(), A = Math.pow(s / d, 2), i = u.length - 1, r = u[0], h = [r];
    for (o = 1; o < i - 1; o++)
      Math.pow(r.x - u[o].x, 2) + Math.pow(r.y - u[o].y, 2) >= A && (r = u[o], h.push(r));
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
  } }), p.CircleBrush = p.util.createClass(p.BaseBrush, { width: 10, initialize: function(u) {
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
      var A = this.points[u], i = new p.Circle({ radius: A.radius, left: A.x, top: A.y, originX: "center", originY: "center", fill: A.fill });
      this.shadow && (i.shadow = new p.Shadow(this.shadow)), d.push(i);
    }
    var r = new p.Group(d);
    r.canvas = this.canvas, this.canvas.fire("before:path:created", { path: r }), this.canvas.add(r), this.canvas.fire("path:created", { path: r }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = o, this.canvas.requestRenderAll();
  }, addPoint: function(u) {
    var s = new p.Point(u.x, u.y), o = p.util.getRandomInt(Math.max(0, this.width - 20), this.width + 20) / 2, d = new p.Color(this.color).setAlpha(p.util.getRandomInt(0, 100) / 100).toRgba();
    return s.radius = o, s.fill = d, this.points.push(s), s;
  } }), p.SprayBrush = p.util.createClass(p.BaseBrush, { width: 10, density: 20, dotWidth: 1, dotWidthVariance: 1, randomOpacity: !1, optimizeOverlapping: !0, initialize: function(u) {
    this.canvas = u, this.sprayChunks = [];
  }, onMouseDown: function(u) {
    this.sprayChunks.length = 0, this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.addSprayChunk(u), this.render(this.sprayChunkPoints);
  }, onMouseMove: function(u) {
    this.limitedToCanvasSize === !0 && this._isOutSideCanvas(u) || (this.addSprayChunk(u), this.render(this.sprayChunkPoints));
  }, onMouseUp: function() {
    var u = this.canvas.renderOnAddRemove;
    this.canvas.renderOnAddRemove = !1;
    for (var s = [], o = 0, d = this.sprayChunks.length; o < d; o++)
      for (var A = this.sprayChunks[o], i = 0, r = A.length; i < r; i++) {
        var h = new p.Rect({ width: A[i].width, height: A[i].width, left: A[i].x + 1, top: A[i].y + 1, originX: "center", originY: "center", fill: this.color });
        s.push(h);
      }
    this.optimizeOverlapping && (s = this._getOptimizedRects(s));
    var a = new p.Group(s);
    this.shadow && a.set("shadow", new p.Shadow(this.shadow)), this.canvas.fire("before:path:created", { path: a }), this.canvas.add(a), this.canvas.fire("path:created", { path: a }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = u, this.canvas.requestRenderAll();
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
      s = p.util.getRandomInt(u.x - i, u.x + i), o = p.util.getRandomInt(u.y - i, u.y + i), d = this.dotWidthVariance ? p.util.getRandomInt(Math.max(1, this.dotWidth - this.dotWidthVariance), this.dotWidth + this.dotWidthVariance) : this.dotWidth;
      var r = new p.Point(s, o);
      r.width = d, this.randomOpacity && (r.opacity = p.util.getRandomInt(0, 100) / 100), this.sprayChunkPoints.push(r);
    }
    this.sprayChunks.push(this.sprayChunkPoints);
  } }), p.PatternBrush = p.util.createClass(p.PencilBrush, { getPatternSrc: function() {
    var u = p.util.createCanvasElement(), s = u.getContext("2d");
    return u.width = u.height = 25, s.fillStyle = this.color, s.beginPath(), s.arc(10, 10, 10, 0, 2 * Math.PI, !1), s.closePath(), s.fill(), u;
  }, getPatternSrcFunction: function() {
    return String(this.getPatternSrc).replace("this.color", '"' + this.color + '"');
  }, getPattern: function(u) {
    return u.createPattern(this.source || this.getPatternSrc(), "repeat");
  }, _setBrushStyles: function(u) {
    this.callSuper("_setBrushStyles", u), u.strokeStyle = this.getPattern(u);
  }, createPath: function(u) {
    var s = this.callSuper("createPath", u), o = s._getLeftTopCoords().scalarAdd(s.strokeWidth / 2);
    return s.stroke = new p.Pattern({ source: this.source || this.getPatternSrcFunction(), offsetX: -o.x, offsetY: -o.y }), s;
  } }), function() {
    var u = p.util.getPointer, s = p.util.degreesToRadians, o = p.util.isTouchEvent;
    for (var d in p.Canvas = p.util.createClass(p.StaticCanvas, { initialize: function(A, i) {
      i || (i = {}), this.renderAndResetBound = this.renderAndReset.bind(this), this.requestRenderAllBound = this.requestRenderAll.bind(this), this._initStatic(A, i), this._initInteractive(), this._createCacheCanvas();
    }, uniformScaling: !0, uniScaleKey: "shiftKey", centeredScaling: !1, centeredRotation: !1, centeredKey: "altKey", altActionKey: "shiftKey", interactive: !0, selection: !0, selectionKey: "shiftKey", altSelectionKey: null, selectionColor: "rgba(100, 100, 255, 0.3)", selectionDashArray: [], selectionBorderColor: "rgba(255, 255, 255, 0.3)", selectionLineWidth: 1, selectionFullyContained: !1, hoverCursor: "move", moveCursor: "move", defaultCursor: "default", freeDrawingCursor: "crosshair", notAllowedCursor: "not-allowed", containerClass: "canvas-container", perPixelTargetFind: !1, targetFindTolerance: 0, skipTargetFind: !1, isDrawingMode: !1, preserveObjectStacking: !1, snapAngle: 0, snapThreshold: null, stopContextMenu: !1, fireRightClick: !1, fireMiddleClick: !1, targets: [], enablePointerEvents: !1, _hoveredTarget: null, _hoveredTargets: [], _initInteractive: function() {
      this._currentTransform = null, this._groupSelector = null, this._initWrapperElement(), this._createUpperCanvas(), this._initEventListeners(), this._initRetinaScaling(), this.freeDrawingBrush = p.PencilBrush && new p.PencilBrush(this), this.calcOffset();
    }, _chooseObjectsToRender: function() {
      var A, i, r, h = this.getActiveObjects();
      if (h.length > 0 && !this.preserveObjectStacking) {
        i = [], r = [];
        for (var a = 0, c = this._objects.length; a < c; a++)
          A = this._objects[a], h.indexOf(A) === -1 ? i.push(A) : r.push(A);
        h.length > 1 && (this._activeObject._objects = r), i.push.apply(i, r);
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
      var r = A.calcTransformMatrix(), h = p.util.invertTransform(r), a = this.restorePointerVpt(i);
      return p.util.transformPoint(a, h);
    }, isTargetTransparent: function(A, i, r) {
      if (A.shouldCache() && A._cacheCanvas && A !== this._activeObject) {
        var h = this._normalizePointer(A, { x: i, y: r }), a = Math.max(A.cacheTranslationX + h.x * A.zoomX, 0), c = Math.max(A.cacheTranslationY + h.y * A.zoomY, 0);
        return p.util.isTransparent(A._cacheContext, Math.round(a), Math.round(c), this.targetFindTolerance);
      }
      var f = this.contextCache, w = A.selectionBackgroundColor, C = this.viewportTransform;
      return A.selectionBackgroundColor = "", this.clearContext(f), f.save(), f.transform(C[0], C[1], C[2], C[3], C[4], C[5]), A.render(f), f.restore(), A.selectionBackgroundColor = w, p.util.isTransparent(f, i, r, this.targetFindTolerance);
    }, _isSelectionKeyPressed: function(A) {
      return Array.isArray(this.selectionKey) ? !!this.selectionKey.find(function(i) {
        return A[i] === !0;
      }) : A[this.selectionKey];
    }, _shouldClearSelection: function(A, i) {
      var r = this.getActiveObjects(), h = this._activeObject;
      return !i || i && h && r.length > 1 && r.indexOf(i) === -1 && h !== i && !this._isSelectionKeyPressed(A) || i && !i.evented || i && !i.selectable && h && h !== i;
    }, _shouldCenterTransform: function(A, i, r) {
      var h;
      if (A)
        return i === "scale" || i === "scaleX" || i === "scaleY" || i === "resizing" ? h = this.centeredScaling || A.centeredScaling : i === "rotate" && (h = this.centeredRotation || A.centeredRotation), h ? !r : r;
    }, _getOriginFromCorner: function(A, i) {
      var r = { x: A.originX, y: A.originY };
      return i === "ml" || i === "tl" || i === "bl" ? r.x = "right" : i !== "mr" && i !== "tr" && i !== "br" || (r.x = "left"), i === "tl" || i === "mt" || i === "tr" ? r.y = "bottom" : i !== "bl" && i !== "mb" && i !== "br" || (r.y = "top"), r;
    }, _getActionFromCorner: function(A, i, r, h) {
      if (!i || !A)
        return "drag";
      var a = h.controls[i];
      return a.getActionName(r, a, h);
    }, _setupCurrentTransform: function(A, i, r) {
      if (i) {
        var h = this.getPointer(A), a = i.__corner, c = i.controls[a], f = r && a ? c.getActionHandler(A, i, c) : p.controlsUtils.dragHandler, w = this._getActionFromCorner(r, a, A, i), C = this._getOriginFromCorner(i, a), x = A[this.centeredKey], U = { target: i, action: w, actionHandler: f, corner: a, scaleX: i.scaleX, scaleY: i.scaleY, skewX: i.skewX, skewY: i.skewY, offsetX: h.x - i.left, offsetY: h.y - i.top, originX: C.x, originY: C.y, ex: h.x, ey: h.y, lastX: h.x, lastY: h.y, theta: s(i.angle), width: i.width * i.scaleX, shiftKey: A.shiftKey, altKey: x, original: p.util.saveObjectTransform(i) };
        this._shouldCenterTransform(i, w, x) && (U.originX = "center", U.originY = "center"), U.original.originX = C.x, U.original.originY = C.y, this._currentTransform = U, this._beforeTransform(A);
      }
    }, setCursor: function(A) {
      this.upperCanvasEl.style.cursor = A;
    }, _drawSelection: function(A) {
      var i = this._groupSelector, r = new p.Point(i.ex, i.ey), h = p.util.transformPoint(r, this.viewportTransform), a = new p.Point(i.ex + i.left, i.ey + i.top), c = p.util.transformPoint(a, this.viewportTransform), f = Math.min(h.x, c.x), w = Math.min(h.y, c.y), C = Math.max(h.x, c.x), x = Math.max(h.y, c.y), U = this.selectionLineWidth / 2;
      this.selectionColor && (A.fillStyle = this.selectionColor, A.fillRect(f, w, C - f, x - w)), this.selectionLineWidth && this.selectionBorderColor && (A.lineWidth = this.selectionLineWidth, A.strokeStyle = this.selectionBorderColor, f += U, w += U, C -= U, x -= U, p.Object.prototype._setLineDash.call(this, A, this.selectionDashArray), A.strokeRect(f, w, C - f, x - w));
    }, findTarget: function(A, i) {
      if (!this.skipTargetFind) {
        var r, h, a = this.getPointer(A, !0), c = this._activeObject, f = this.getActiveObjects(), w = o(A), C = f.length > 1 && !i || f.length === 1;
        if (this.targets = [], C && c._findTargetCorner(a, w) || f.length > 1 && !i && c === this._searchPossibleTargets([c], a))
          return c;
        if (f.length === 1 && c === this._searchPossibleTargets([c], a)) {
          if (!this.preserveObjectStacking)
            return c;
          r = c, h = this.targets, this.targets = [];
        }
        var x = this._searchPossibleTargets(this._objects, a);
        return A[this.altSelectionKey] && x && r && x !== r && (x = r, this.targets = h), x;
      }
    }, _checkTarget: function(A, i, r) {
      if (i && i.visible && i.evented && i.containsPoint(A) && (!this.perPixelTargetFind && !i.perPixelTargetFind || i.isEditing || !this.isTargetTransparent(i, r.x, r.y)))
        return !0;
    }, _searchPossibleTargets: function(A, i) {
      for (var r, h, a = A.length; a--; ) {
        var c = A[a], f = c.group ? this._normalizePointer(c.group, i) : i;
        if (this._checkTarget(f, c, i)) {
          (r = A[a]).subTargetCheck && r instanceof p.Group && (h = this._searchPossibleTargets(r._objects, i)) && this.targets.push(h);
          break;
        }
      }
      return r;
    }, restorePointerVpt: function(A) {
      return p.util.transformPoint(A, p.util.invertTransform(this.viewportTransform));
    }, getPointer: function(A, i) {
      if (this._absolutePointer && !i)
        return this._absolutePointer;
      if (this._pointer && i)
        return this._pointer;
      var r, h = u(A), a = this.upperCanvasEl, c = a.getBoundingClientRect(), f = c.width || 0, w = c.height || 0;
      f && w || ("top" in c && "bottom" in c && (w = Math.abs(c.top - c.bottom)), "right" in c && "left" in c && (f = Math.abs(c.right - c.left))), this.calcOffset(), h.x = h.x - this._offset.left, h.y = h.y - this._offset.top, i || (h = this.restorePointerVpt(h));
      var C = this.getRetinaScaling();
      return C !== 1 && (h.x /= C, h.y /= C), r = f === 0 || w === 0 ? { width: 1, height: 1 } : { width: a.width / f, height: a.height / w }, { x: h.x * r.width, y: h.y * r.height };
    }, _createUpperCanvas: function() {
      var A = this.lowerCanvasEl.className.replace(/\s*lower-canvas\s*/, ""), i = this.lowerCanvasEl, r = this.upperCanvasEl;
      r ? r.className = "" : (r = this._createCanvasElement(), this.upperCanvasEl = r), p.util.addClass(r, "upper-canvas " + A), this.wrapperEl.appendChild(r), this._copyCanvasStyle(i, r), this._applyCanvasStyle(r), this.contextTop = r.getContext("2d");
    }, getTopContext: function() {
      return this.contextTop;
    }, _createCacheCanvas: function() {
      this.cacheCanvasEl = this._createCanvasElement(), this.cacheCanvasEl.setAttribute("width", this.width), this.cacheCanvasEl.setAttribute("height", this.height), this.contextCache = this.cacheCanvasEl.getContext("2d");
    }, _initWrapperElement: function() {
      this.wrapperEl = p.util.wrapElement(this.lowerCanvasEl, "div", { class: this.containerClass }), p.util.setStyle(this.wrapperEl, { width: this.width + "px", height: this.height + "px", position: "relative" }), p.util.makeElementUnselectable(this.wrapperEl);
    }, _applyCanvasStyle: function(A) {
      var i = this.width || A.width, r = this.height || A.height;
      p.util.setStyle(A, { position: "absolute", width: i + "px", height: r + "px", left: 0, top: 0, "touch-action": this.allowTouchScrolling ? "manipulation" : "none", "-ms-touch-action": this.allowTouchScrolling ? "manipulation" : "none" }), A.width = i, A.height = r, p.util.makeElementUnselectable(A);
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
      var r = !1, h = this.getActiveObjects(), a = [], c = [];
      A.forEach(function(f) {
        h.indexOf(f) === -1 && (r = !0, f.fire("deselected", { e: i, target: f }), c.push(f));
      }), h.forEach(function(f) {
        A.indexOf(f) === -1 && (r = !0, f.fire("selected", { e: i, target: f }), a.push(f));
      }), A.length > 0 && h.length > 0 ? r && this.fire("selection:updated", { e: i, selected: a, deselected: c }) : h.length > 0 ? this.fire("selection:created", { e: i, selected: a }) : A.length > 0 && this.fire("selection:cleared", { e: i, deselected: c });
    }, setActiveObject: function(A, i) {
      var r = this.getActiveObjects();
      return this._setActiveObject(A, i), this._fireSelectionEvents(r, i), this;
    }, _setActiveObject: function(A, i) {
      return this._activeObject !== A && !!this._discardActiveObject(i, A) && !A.onSelect({ e: i }) && (this._activeObject = A, !0);
    }, _discardActiveObject: function(A, i) {
      var r = this._activeObject;
      if (r) {
        if (r.onDeselect({ e: A, object: i }))
          return !1;
        this._activeObject = null;
      }
      return !0;
    }, discardActiveObject: function(A) {
      var i = this.getActiveObjects(), r = this.getActiveObject();
      return i.length && this.fire("before:selection:cleared", { target: r, e: A }), this._discardActiveObject(A), this._fireSelectionEvents(i, A), this;
    }, dispose: function() {
      var A = this.wrapperEl;
      return this.removeListeners(), A.removeChild(this.upperCanvasEl), A.removeChild(this.lowerCanvasEl), this.contextCache = null, this.contextTop = null, ["upperCanvasEl", "cacheCanvasEl"].forEach((function(i) {
        p.util.cleanUpJsdomNode(this[i]), this[i] = void 0;
      }).bind(this)), A.parentNode && A.parentNode.replaceChild(this.lowerCanvasEl, this.wrapperEl), delete this.wrapperEl, p.StaticCanvas.prototype.dispose.call(this), this;
    }, clear: function() {
      return this.discardActiveObject(), this.clearContext(this.contextTop), this.callSuper("clear");
    }, drawControls: function(A) {
      var i = this._activeObject;
      i && i._renderControls(A);
    }, _toObject: function(A, i, r) {
      var h = this._realizeGroupTransformOnObject(A), a = this.callSuper("_toObject", A, i, r);
      return this._unwindGroupTransformOnObject(A, h), a;
    }, _realizeGroupTransformOnObject: function(A) {
      if (A.group && A.group.type === "activeSelection" && this._activeObject === A.group) {
        var i = {};
        return ["angle", "flipX", "flipY", "left", "scaleX", "scaleY", "skewX", "skewY", "top"].forEach(function(r) {
          i[r] = A[r];
        }), p.util.addTransformToObject(A, this._activeObject.calcOwnMatrix()), i;
      }
      return null;
    }, _unwindGroupTransformOnObject: function(A, i) {
      i && A.set(i);
    }, _setSVGObject: function(A, i, r) {
      var h = this._realizeGroupTransformOnObject(i);
      this.callSuper("_setSVGObject", A, i, r), this._unwindGroupTransformOnObject(i, h);
    }, setViewportTransform: function(A) {
      this.renderOnAddRemove && this._activeObject && this._activeObject.isEditing && this._activeObject.clearContextTop(), p.StaticCanvas.prototype.setViewportTransform.call(this, A);
    } }), p.StaticCanvas)
      d !== "prototype" && (p.Canvas[d] = p.StaticCanvas[d]);
  }(), function() {
    var u = p.util.addListener, s = p.util.removeListener, o = { passive: !1 };
    function d(A, i) {
      return A.button && A.button === i - 1;
    }
    p.util.object.extend(p.Canvas.prototype, { mainTouchId: null, _initEventListeners: function() {
      this.removeListeners(), this._bindEvents(), this.addOrRemove(u, "add");
    }, _getEventPrefix: function() {
      return this.enablePointerEvents ? "pointer" : "mouse";
    }, addOrRemove: function(A, i) {
      var r = this.upperCanvasEl, h = this._getEventPrefix();
      A(p.window, "resize", this._onResize), A(r, h + "down", this._onMouseDown), A(r, h + "move", this._onMouseMove, o), A(r, h + "out", this._onMouseOut), A(r, h + "enter", this._onMouseEnter), A(r, "wheel", this._onMouseWheel), A(r, "contextmenu", this._onContextMenu), A(r, "dblclick", this._onDoubleClick), A(r, "dragover", this._onDragOver), A(r, "dragenter", this._onDragEnter), A(r, "dragleave", this._onDragLeave), A(r, "drop", this._onDrop), this.enablePointerEvents || A(r, "touchstart", this._onTouchStart, o), typeof eventjs < "u" && i in eventjs && (eventjs[i](r, "gesture", this._onGesture), eventjs[i](r, "drag", this._onDrag), eventjs[i](r, "orientation", this._onOrientationChange), eventjs[i](r, "shake", this._onShake), eventjs[i](r, "longpress", this._onLongPress));
    }, removeListeners: function() {
      this.addOrRemove(s, "remove");
      var A = this._getEventPrefix();
      s(p.document, A + "up", this._onMouseUp), s(p.document, "touchend", this._onTouchEnd, o), s(p.document, A + "move", this._onMouseMove, o), s(p.document, "touchmove", this._onMouseMove, o);
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
      var r = this;
      this._hoveredTargets.forEach(function(h) {
        r.fire("mouse:out", { target: i, e: A }), h && i.fire("mouseout", { e: A });
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
      var i = this.upperCanvasEl, r = this._getEventPrefix();
      u(p.document, "touchend", this._onTouchEnd, o), u(p.document, "touchmove", this._onMouseMove, o), s(i, r + "down", this._onMouseDown);
    }, _onMouseDown: function(A) {
      this.__onMouseDown(A), this._resetTransformEventData();
      var i = this.upperCanvasEl, r = this._getEventPrefix();
      s(i, r + "move", this._onMouseMove, o), u(p.document, r + "up", this._onMouseUp), u(p.document, r + "move", this._onMouseMove, o);
    }, _onTouchEnd: function(A) {
      if (!(A.touches.length > 0)) {
        this.__onMouseUp(A), this._resetTransformEventData(), this.mainTouchId = null;
        var i = this._getEventPrefix();
        s(p.document, "touchend", this._onTouchEnd, o), s(p.document, "touchmove", this._onMouseMove, o);
        var r = this;
        this._willAddMouseDown && clearTimeout(this._willAddMouseDown), this._willAddMouseDown = setTimeout(function() {
          u(r.upperCanvasEl, i + "down", r._onMouseDown), r._willAddMouseDown = 0;
        }, 400);
      }
    }, _onMouseUp: function(A) {
      this.__onMouseUp(A), this._resetTransformEventData();
      var i = this.upperCanvasEl, r = this._getEventPrefix();
      this._isMainEvent(A) && (s(p.document, r + "up", this._onMouseUp), s(p.document, r + "move", this._onMouseMove, o), u(i, r + "move", this._onMouseMove, o));
    }, _onMouseMove: function(A) {
      !this.allowTouchScrolling && A.preventDefault && A.preventDefault(), this.__onMouseMove(A);
    }, _onResize: function() {
      this.calcOffset();
    }, _shouldRender: function(A) {
      var i = this._activeObject;
      return !!(!!i != !!A || i && A && i !== A) || (i && i.isEditing, !1);
    }, __onMouseUp: function(A) {
      var i, r = this._currentTransform, h = this._groupSelector, a = !1, c = !h || h.left === 0 && h.top === 0;
      if (this._cacheTransformEventData(A), i = this._target, this._handleEvent(A, "up:before"), d(A, 3))
        this.fireRightClick && this._handleEvent(A, "up", 3, c);
      else {
        if (d(A, 2))
          return this.fireMiddleClick && this._handleEvent(A, "up", 2, c), void this._resetTransformEventData();
        if (this.isDrawingMode && this._isCurrentlyDrawing)
          this._onMouseUpInDrawingMode(A);
        else if (this._isMainEvent(A)) {
          if (r && (this._finalizeCurrentTransform(A), a = r.actionPerformed), !c) {
            var f = i === this._activeObject;
            this._maybeGroupObjects(A), a || (a = this._shouldRender(i) || !f && i === this._activeObject);
          }
          var w, C;
          if (i) {
            if (w = i._findTargetCorner(this.getPointer(A, !0), p.util.isTouchEvent(A)), i.selectable && i !== this._activeObject && i.activeOn === "up")
              this.setActiveObject(i, A), a = !0;
            else {
              var x = i.controls[w], U = x && x.getMouseUpHandler(A, i, x);
              U && U(A, r, (C = this.getPointer(A)).x, C.y);
            }
            i.isMoving = !1;
          }
          if (r && (r.target !== i || r.corner !== w)) {
            var F = r.target && r.target.controls[r.corner], k = F && F.getMouseUpHandler(A, i, x);
            C = C || this.getPointer(A), k && k(A, r, C.x, C.y);
          }
          this._setCursorFromEvent(A, i), this._handleEvent(A, "up", 1, c), this._groupSelector = null, this._currentTransform = null, i && (i.__corner = 0), a ? this.requestRenderAll() : c || this.renderTop();
        }
      }
    }, _simpleEventHandler: function(A, i) {
      var r = this.findTarget(i), h = this.targets, a = { e: i, target: r, subTargets: h };
      if (this.fire(A, a), r && r.fire(A, a), !h)
        return r;
      for (var c = 0; c < h.length; c++)
        h[c].fire(A, a);
      return r;
    }, _handleEvent: function(A, i, r, h) {
      var a = this._target, c = this.targets || [], f = { e: A, target: a, subTargets: c, button: r || 1, isClick: h || !1, pointer: this._pointer, absolutePointer: this._absolutePointer, transform: this._currentTransform };
      i === "up" && (f.currentTarget = this.findTarget(A), f.currentSubTargets = this.targets), this.fire("mouse:" + i, f), a && a.fire("mouse" + i, f);
      for (var w = 0; w < c.length; w++)
        c[w].fire("mouse" + i, f);
    }, _finalizeCurrentTransform: function(A) {
      var i = this._currentTransform, r = i.target, h = { e: A, target: r, transform: i, action: i.action };
      r._scaling && (r._scaling = !1), r.setCoords(), (i.actionPerformed || this.stateful && r.hasStateChanged()) && this._fire("modified", h);
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
        var r = this._pointer;
        this._previousPointer = r;
        var h = this._shouldRender(i), a = this._shouldGroup(A, i);
        if (this._shouldClearSelection(A, i) ? this.discardActiveObject(A) : a && (this._handleGrouping(A, i), i = this._activeObject), !this.selection || i && (i.selectable || i.isEditing || i === this._activeObject) || (this._groupSelector = { ex: this._absolutePointer.x, ey: this._absolutePointer.y, top: 0, left: 0 }), i) {
          var c = i === this._activeObject;
          i.selectable && i.activeOn === "down" && this.setActiveObject(i, A);
          var f = i._findTargetCorner(this.getPointer(A, !0), p.util.isTouchEvent(A));
          if (i.__corner = f, i === this._activeObject && (f || !a)) {
            this._setupCurrentTransform(A, i, c);
            var w = i.controls[f], C = (r = this.getPointer(A), w && w.getMouseDownHandler(A, i, w));
            C && C(A, this._currentTransform, r.x, r.y);
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
      var i, r;
      if (this._handleEvent(A, "move:before"), this._cacheTransformEventData(A), this.isDrawingMode)
        this._onMouseMoveInDrawingMode(A);
      else if (this._isMainEvent(A)) {
        var h = this._groupSelector;
        h ? (r = this._absolutePointer, h.left = r.x - h.ex, h.top = r.y - h.ey, this.renderTop()) : this._currentTransform ? this._transformObject(A) : (i = this.findTarget(A) || null, this._setCursorFromEvent(A, i), this._fireOverOutEvents(i, A)), this._handleEvent(A, "move"), this._resetTransformEventData();
      }
    }, _fireOverOutEvents: function(A, i) {
      var r = this._hoveredTarget, h = this._hoveredTargets, a = this.targets, c = Math.max(h.length, a.length);
      this.fireSyntheticInOutEvents(A, i, { oldTarget: r, evtOut: "mouseout", canvasEvtOut: "mouse:out", evtIn: "mouseover", canvasEvtIn: "mouse:over" });
      for (var f = 0; f < c; f++)
        this.fireSyntheticInOutEvents(a[f], i, { oldTarget: h[f], evtOut: "mouseout", evtIn: "mouseover" });
      this._hoveredTarget = A, this._hoveredTargets = this.targets.concat();
    }, _fireEnterLeaveEvents: function(A, i) {
      var r = this._draggedoverTarget, h = this._hoveredTargets, a = this.targets, c = Math.max(h.length, a.length);
      this.fireSyntheticInOutEvents(A, i, { oldTarget: r, evtOut: "dragleave", evtIn: "dragenter" });
      for (var f = 0; f < c; f++)
        this.fireSyntheticInOutEvents(a[f], i, { oldTarget: h[f], evtOut: "dragleave", evtIn: "dragenter" });
      this._draggedoverTarget = A;
    }, fireSyntheticInOutEvents: function(A, i, r) {
      var h, a, c, f = r.oldTarget, w = f !== A, C = r.canvasEvtIn, x = r.canvasEvtOut;
      w && (h = { e: i, target: A, previousTarget: f }, a = { e: i, target: f, nextTarget: A }), c = A && w, f && w && (x && this.fire(x, a), f.fire(r.evtOut, a)), c && (C && this.fire(C, h), A.fire(r.evtIn, h));
    }, __onMouseWheel: function(A) {
      this._cacheTransformEventData(A), this._handleEvent(A, "wheel"), this._resetTransformEventData();
    }, _transformObject: function(A) {
      var i = this.getPointer(A), r = this._currentTransform;
      r.reset = !1, r.shiftKey = A.shiftKey, r.altKey = A[this.centeredKey], this._performTransformAction(A, r, i), r.actionPerformed && this.requestRenderAll();
    }, _performTransformAction: function(A, i, r) {
      var h = r.x, a = r.y, c = i.action, f = !1, w = i.actionHandler;
      w && (f = w(A, i, h, a)), c === "drag" && f && (i.target.isMoving = !0, this.setCursor(i.target.moveCursor || this.moveCursor)), i.actionPerformed = i.actionPerformed || f;
    }, _fire: p.controlsUtils.fireEvent, _setCursorFromEvent: function(A, i) {
      if (!i)
        return this.setCursor(this.defaultCursor), !1;
      var r = i.hoverCursor || this.hoverCursor, h = this._activeObject && this._activeObject.type === "activeSelection" ? this._activeObject : null, a = (!h || !h.contains(i)) && i._findTargetCorner(this.getPointer(A, !0));
      a ? this.setCursor(this.getCornerCursor(a, i, A)) : (i.subTargetCheck && this.targets.concat().reverse().map(function(c) {
        r = c.hoverCursor || r;
      }), this.setCursor(r));
    }, getCornerCursor: function(A, i, r) {
      var h = i.controls[A];
      return h.cursorStyleHandler(r, h, i);
    } });
  }(), y = Math.min, E = Math.max, p.util.object.extend(p.Canvas.prototype, { _shouldGroup: function(u, s) {
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
    return this._activeObject.isEditing && this._activeObject.exitEditing(), new p.ActiveSelection(o, { canvas: this });
  }, _groupSelectedObjects: function(u) {
    var s, o = this._collectObjects(u);
    o.length === 1 ? this.setActiveObject(o[0], u) : o.length > 1 && (s = new p.ActiveSelection(o.reverse(), { canvas: this }), this.setActiveObject(s, u));
  }, _collectObjects: function(u) {
    for (var s, o = [], d = this._groupSelector.ex, A = this._groupSelector.ey, i = d + this._groupSelector.left, r = A + this._groupSelector.top, h = new p.Point(y(d, i), y(A, r)), a = new p.Point(E(d, i), E(A, r)), c = !this.selectionFullyContained, f = d === i && A === r, w = this._objects.length; w-- && !((s = this._objects[w]) && s.selectable && s.visible && (c && s.intersectsWithRect(h, a, !0) || s.isContainedWithinRect(h, a, !0) || c && s.containsPoint(h, null, !0) || c && s.containsPoint(a, null, !0)) && (o.push(s), f)); )
      ;
    return o.length > 1 && (o = o.filter(function(C) {
      return !C.onSelect({ e: u });
    })), o;
  }, _maybeGroupObjects: function(u) {
    this.selection && this._groupSelector && this._groupSelectedObjects(u), this.setCursor(this.defaultCursor), this._groupSelector = null;
  } }), p.util.object.extend(p.StaticCanvas.prototype, { toDataURL: function(u) {
    u || (u = {});
    var s = u.format || "png", o = u.quality || 1, d = (u.multiplier || 1) * (u.enableRetinaScaling ? this.getRetinaScaling() : 1), A = this.toCanvasElement(d, u);
    return p.util.toDataURL(A, s, o);
  }, toCanvasElement: function(u, s) {
    u = u || 1;
    var o = ((s = s || {}).width || this.width) * u, d = (s.height || this.height) * u, A = this.getZoom(), i = this.width, r = this.height, h = A * u, a = this.viewportTransform, c = (a[4] - (s.left || 0)) * u, f = (a[5] - (s.top || 0)) * u, w = this.interactive, C = [h, 0, 0, h, c, f], x = this.enableRetinaScaling, U = p.util.createCanvasElement(), F = this.contextTop;
    return U.width = o, U.height = d, this.contextTop = null, this.enableRetinaScaling = !1, this.interactive = !1, this.viewportTransform = C, this.width = o, this.height = d, this.calcViewportBoundaries(), this.renderCanvas(U.getContext("2d"), this._objects), this.viewportTransform = a, this.width = i, this.height = r, this.calcViewportBoundaries(), this.interactive = w, this.enableRetinaScaling = x, this.contextTop = F, U;
  } }), p.util.object.extend(p.StaticCanvas.prototype, { loadFromJSON: function(u, s, o) {
    if (u) {
      var d = typeof u == "string" ? JSON.parse(u) : p.util.object.clone(u), A = this, i = d.clipPath, r = this.renderOnAddRemove;
      return this.renderOnAddRemove = !1, delete d.clipPath, this._enlivenObjects(d.objects, function(h) {
        A.clear(), A._setBgOverlay(d, function() {
          i ? A._enlivenObjects([i], function(a) {
            A.clipPath = a[0], A.__setupCanvas.call(A, d, h, r, s);
          }) : A.__setupCanvas.call(A, d, h, r, s);
        });
      }, o), this;
    }
  }, __setupCanvas: function(u, s, o, d) {
    var A = this;
    s.forEach(function(i, r) {
      A.insertAt(i, r);
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
    u === "backgroundImage" || u === "overlayImage" ? p.util.enlivenObjects([s], function(i) {
      A[u] = i[0], o[u] = !0, d && d();
    }) : this["set" + p.util.string.capitalize(u, !0)](s, function() {
      o[u] = !0, d && d();
    });
  }, _enlivenObjects: function(u, s, o) {
    u && u.length !== 0 ? p.util.enlivenObjects(u, function(d) {
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
    var s = p.util.createCanvasElement();
    s.width = this.width, s.height = this.height;
    var o = new p.Canvas(s);
    this.backgroundImage ? (o.setBackgroundImage(this.backgroundImage.src, function() {
      o.renderAll(), u && u(o);
    }), o.backgroundImageOpacity = this.backgroundImageOpacity, o.backgroundImageStretch = this.backgroundImageStretch) : u && u(o);
  } }), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.util.object.extend, d = s.util.object.clone, A = s.util.toFixed, i = s.util.string.capitalize, r = s.util.degreesToRadians, h = !s.isLikelyNode;
    s.Object || (s.Object = s.util.createClass(s.CommonMethods, { type: "object", originX: "left", originY: "top", top: 0, left: 0, width: 0, height: 0, scaleX: 1, scaleY: 1, flipX: !1, flipY: !1, opacity: 1, angle: 0, skewX: 0, skewY: 0, cornerSize: 13, touchCornerSize: 24, transparentCorners: !0, hoverCursor: null, moveCursor: null, padding: 0, borderColor: "rgb(178,204,255)", borderDashArray: null, cornerColor: "rgb(178,204,255)", cornerStrokeColor: null, cornerStyle: "rect", cornerDashArray: null, centeredScaling: !1, centeredRotation: !0, fill: "rgb(0,0,0)", fillRule: "nonzero", globalCompositeOperation: "source-over", backgroundColor: "", selectionBackgroundColor: "", stroke: null, strokeWidth: 1, strokeDashArray: null, strokeDashOffset: 0, strokeLineCap: "butt", strokeLineJoin: "miter", strokeMiterLimit: 4, shadow: null, borderOpacityWhenMoving: 0.4, borderScaleFactor: 1, minScaleLimit: 0, selectable: !0, evented: !0, visible: !0, hasControls: !0, hasBorders: !0, perPixelTargetFind: !1, includeDefaultValues: !0, lockMovementX: !1, lockMovementY: !1, lockRotation: !1, lockScalingX: !1, lockScalingY: !1, lockSkewingX: !1, lockSkewingY: !1, lockScalingFlip: !1, excludeFromExport: !1, objectCaching: h, statefullCache: !1, noScaleCache: !0, strokeUniform: !1, dirty: !0, __corner: 0, paintFirst: "fill", activeOn: "down", stateProperties: "top left width height scaleX scaleY flipX flipY originX originY transformMatrix stroke strokeWidth strokeDashArray strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit angle opacity fill globalCompositeOperation shadow visible backgroundColor skewX skewY fillRule paintFirst clipPath strokeUniform".split(" "), cacheProperties: "fill stroke strokeWidth strokeDashArray width height paintFirst strokeUniform strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit backgroundColor clipPath".split(" "), colorProperties: "fill stroke backgroundColor".split(" "), clipPath: void 0, inverted: !1, absolutePositioned: !1, initialize: function(a) {
      a && this.setOptions(a);
    }, _createCacheCanvas: function() {
      this._cacheProperties = {}, this._cacheCanvas = s.util.createCanvasElement(), this._cacheContext = this._cacheCanvas.getContext("2d"), this._updateCacheCanvas(), this.dirty = !0;
    }, _limitCacheSize: function(a) {
      var c = s.perfLimitSizeTotal, f = a.width, w = a.height, C = s.maxCacheSideLimit, x = s.minCacheSideLimit;
      if (f <= C && w <= C && f * w <= c)
        return f < x && (a.width = x), w < x && (a.height = x), a;
      var U = f / w, F = s.util.limitDimsByArea(U, c), k = s.util.capValue, H = k(x, F.x, C), L = k(x, F.y, C);
      return f > H && (a.zoomX /= f / H, a.width = H, a.capped = !0), w > L && (a.zoomY /= w / L, a.height = L, a.capped = !0), a;
    }, _getCacheCanvasDimensions: function() {
      var a = this.getTotalObjectScaling(), c = this._getTransformedDimensions(0, 0), f = c.x * a.scaleX / this.scaleX, w = c.y * a.scaleY / this.scaleY;
      return { width: f + 2, height: w + 2, zoomX: a.scaleX, zoomY: a.scaleY, x: f, y: w };
    }, _updateCacheCanvas: function() {
      var a = this.canvas;
      if (this.noScaleCache && a && a._currentTransform) {
        var c = a._currentTransform.target, f = a._currentTransform.action;
        if (this === c && f.slice && f.slice(0, 5) === "scale")
          return !1;
      }
      var w, C, x = this._cacheCanvas, U = this._limitCacheSize(this._getCacheCanvasDimensions()), F = s.minCacheSideLimit, k = U.width, H = U.height, L = U.zoomX, K = U.zoomY, W = k !== this.cacheWidth || H !== this.cacheHeight, V = this.zoomX !== L || this.zoomY !== K, _ = W || V, S = 0, P = 0, G = !1;
      if (W) {
        var X = this._cacheCanvas.width, D = this._cacheCanvas.height, T = k > X || H > D;
        G = T || (k < 0.9 * X || H < 0.9 * D) && X > F && D > F, T && !U.capped && (k > F || H > F) && (S = 0.1 * k, P = 0.1 * H);
      }
      return this instanceof s.Text && this.path && (_ = !0, G = !0, S += this.getHeightOfLine(0) * this.zoomX, P += this.getHeightOfLine(0) * this.zoomY), !!_ && (G ? (x.width = Math.ceil(k + S), x.height = Math.ceil(H + P)) : (this._cacheContext.setTransform(1, 0, 0, 1, 0, 0), this._cacheContext.clearRect(0, 0, x.width, x.height)), w = U.x / 2, C = U.y / 2, this.cacheTranslationX = Math.round(x.width / 2 - w) + w, this.cacheTranslationY = Math.round(x.height / 2 - C) + C, this.cacheWidth = k, this.cacheHeight = H, this._cacheContext.translate(this.cacheTranslationX, this.cacheTranslationY), this._cacheContext.scale(L, K), this.zoomX = L, this.zoomY = K, !0);
    }, setOptions: function(a) {
      this._setOptions(a), this._initGradient(a.fill, "fill"), this._initGradient(a.stroke, "stroke"), this._initPattern(a.fill, "fill"), this._initPattern(a.stroke, "stroke");
    }, transform: function(a) {
      var c = this.group && !this.group._transformDone || this.group && this.canvas && a === this.canvas.contextTop, f = this.calcTransformMatrix(!c);
      a.transform(f[0], f[1], f[2], f[3], f[4], f[5]);
    }, toObject: function(a) {
      var c = s.Object.NUM_FRACTION_DIGITS, f = { type: this.type, version: s.version, originX: this.originX, originY: this.originY, left: A(this.left, c), top: A(this.top, c), width: A(this.width, c), height: A(this.height, c), fill: this.fill && this.fill.toObject ? this.fill.toObject() : this.fill, stroke: this.stroke && this.stroke.toObject ? this.stroke.toObject() : this.stroke, strokeWidth: A(this.strokeWidth, c), strokeDashArray: this.strokeDashArray ? this.strokeDashArray.concat() : this.strokeDashArray, strokeLineCap: this.strokeLineCap, strokeDashOffset: this.strokeDashOffset, strokeLineJoin: this.strokeLineJoin, strokeUniform: this.strokeUniform, strokeMiterLimit: A(this.strokeMiterLimit, c), scaleX: A(this.scaleX, c), scaleY: A(this.scaleY, c), angle: A(this.angle, c), flipX: this.flipX, flipY: this.flipY, opacity: A(this.opacity, c), shadow: this.shadow && this.shadow.toObject ? this.shadow.toObject() : this.shadow, visible: this.visible, backgroundColor: this.backgroundColor, fillRule: this.fillRule, paintFirst: this.paintFirst, globalCompositeOperation: this.globalCompositeOperation, skewX: A(this.skewX, c), skewY: A(this.skewY, c) };
      return this.clipPath && !this.clipPath.excludeFromExport && (f.clipPath = this.clipPath.toObject(a), f.clipPath.inverted = this.clipPath.inverted, f.clipPath.absolutePositioned = this.clipPath.absolutePositioned), s.util.populateWithProperties(this, f, a), this.includeDefaultValues || (f = this._removeDefaultValues(f)), f;
    }, toDatalessObject: function(a) {
      return this.toObject(a);
    }, _removeDefaultValues: function(a) {
      var c = s.util.getKlass(a.type).prototype;
      return c.stateProperties.forEach(function(f) {
        f !== "left" && f !== "top" && (a[f] === c[f] && delete a[f], Array.isArray(a[f]) && Array.isArray(c[f]) && a[f].length === 0 && c[f].length === 0 && delete a[f]);
      }), a;
    }, toString: function() {
      return "#<fabric." + i(this.type) + ">";
    }, getObjectScaling: function() {
      if (!this.group)
        return { scaleX: this.scaleX, scaleY: this.scaleY };
      var a = s.util.qrDecompose(this.calcTransformMatrix());
      return { scaleX: Math.abs(a.scaleX), scaleY: Math.abs(a.scaleY) };
    }, getTotalObjectScaling: function() {
      var a = this.getObjectScaling(), c = a.scaleX, f = a.scaleY;
      if (this.canvas) {
        var w = this.canvas.getZoom(), C = this.canvas.getRetinaScaling();
        c *= w * C, f *= w * C;
      }
      return { scaleX: c, scaleY: f };
    }, getObjectOpacity: function() {
      var a = this.opacity;
      return this.group && (a *= this.group.getObjectOpacity()), a;
    }, _set: function(a, c) {
      var f = a === "scaleX" || a === "scaleY", w = this[a] !== c, C = !1;
      return f && (c = this._constrainScale(c)), a === "scaleX" && c < 0 ? (this.flipX = !this.flipX, c *= -1) : a === "scaleY" && c < 0 ? (this.flipY = !this.flipY, c *= -1) : a !== "shadow" || !c || c instanceof s.Shadow ? a === "dirty" && this.group && this.group.set("dirty", c) : c = new s.Shadow(c), this[a] = c, w && (C = this.group && this.group.isOnACache(), this.cacheProperties.indexOf(a) > -1 ? (this.dirty = !0, C && this.group.set("dirty", !0)) : C && this.stateProperties.indexOf(a) > -1 && this.group.set("dirty", !0)), this;
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
    }, drawClipPathOnCache: function(a, c) {
      if (a.save(), c.inverted ? a.globalCompositeOperation = "destination-out" : a.globalCompositeOperation = "destination-in", c.absolutePositioned) {
        var f = s.util.invertTransform(this.calcTransformMatrix());
        a.transform(f[0], f[1], f[2], f[3], f[4], f[5]);
      }
      c.transform(a), a.scale(1 / c.zoomX, 1 / c.zoomY), a.drawImage(c._cacheCanvas, -c.cacheTranslationX, -c.cacheTranslationY), a.restore();
    }, drawObject: function(a, c) {
      var f = this.fill, w = this.stroke;
      c ? (this.fill = "black", this.stroke = "", this._setClippingProperties(a)) : this._renderBackground(a), this._render(a), this._drawClipPath(a, this.clipPath), this.fill = f, this.stroke = w;
    }, _drawClipPath: function(a, c) {
      c && (c.canvas = this.canvas, c.shouldCache(), c._transformDone = !0, c.renderCache({ forClipping: !0 }), this.drawClipPathOnCache(a, c));
    }, drawCacheOnCanvas: function(a) {
      a.scale(1 / this.zoomX, 1 / this.zoomY), a.drawImage(this._cacheCanvas, -this.cacheTranslationX, -this.cacheTranslationY);
    }, isCacheDirty: function(a) {
      if (this.isNotVisible())
        return !1;
      if (this._cacheCanvas && this._cacheContext && !a && this._updateCacheCanvas())
        return !0;
      if (this.dirty || this.clipPath && this.clipPath.absolutePositioned || this.statefullCache && this.hasStateChanged("cacheProperties")) {
        if (this._cacheCanvas && this._cacheContext && !a) {
          var c = this.cacheWidth / this.zoomX, f = this.cacheHeight / this.zoomY;
          this._cacheContext.clearRect(-c / 2, -f / 2, c, f);
        }
        return !0;
      }
      return !1;
    }, _renderBackground: function(a) {
      if (this.backgroundColor) {
        var c = this._getNonTransformedDimensions();
        a.fillStyle = this.backgroundColor, a.fillRect(-c.x / 2, -c.y / 2, c.x, c.y), this._removeShadow(a);
      }
    }, _setOpacity: function(a) {
      this.group && !this.group._transformDone ? a.globalAlpha = this.getObjectOpacity() : a.globalAlpha *= this.opacity;
    }, _setStrokeStyles: function(a, c) {
      var f = c.stroke;
      f && (a.lineWidth = c.strokeWidth, a.lineCap = c.strokeLineCap, a.lineDashOffset = c.strokeDashOffset, a.lineJoin = c.strokeLineJoin, a.miterLimit = c.strokeMiterLimit, f.toLive ? f.gradientUnits === "percentage" || f.gradientTransform || f.patternTransform ? this._applyPatternForTransformedGradient(a, f) : (a.strokeStyle = f.toLive(a, this), this._applyPatternGradientTransform(a, f)) : a.strokeStyle = c.stroke);
    }, _setFillStyles: function(a, c) {
      var f = c.fill;
      f && (f.toLive ? (a.fillStyle = f.toLive(a, this), this._applyPatternGradientTransform(a, c.fill)) : a.fillStyle = f);
    }, _setClippingProperties: function(a) {
      a.globalAlpha = 1, a.strokeStyle = "transparent", a.fillStyle = "#000000";
    }, _setLineDash: function(a, c) {
      c && c.length !== 0 && (1 & c.length && c.push.apply(c, c), a.setLineDash(c));
    }, _renderControls: function(a, c) {
      var f, w, C, x = this.getViewportTransform(), U = this.calcTransformMatrix();
      w = (c = c || {}).hasBorders !== void 0 ? c.hasBorders : this.hasBorders, C = c.hasControls !== void 0 ? c.hasControls : this.hasControls, U = s.util.multiplyTransformMatrices(x, U), f = s.util.qrDecompose(U), a.save(), a.translate(f.translateX, f.translateY), a.lineWidth = 1 * this.borderScaleFactor, this.group || (a.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1), this.flipX && (f.angle -= 180), a.rotate(r(this.group ? f.angle : this.angle)), c.forActiveSelection || this.group ? w && this.drawBordersInGroup(a, f, c) : w && this.drawBorders(a, c), C && this.drawControls(a, c), a.restore();
    }, _setShadow: function(a) {
      if (this.shadow) {
        var c, f = this.shadow, w = this.canvas, C = w && w.viewportTransform[0] || 1, x = w && w.viewportTransform[3] || 1;
        c = f.nonScaling ? { scaleX: 1, scaleY: 1 } : this.getObjectScaling(), w && w._isRetinaScaling() && (C *= s.devicePixelRatio, x *= s.devicePixelRatio), a.shadowColor = f.color, a.shadowBlur = f.blur * s.browserShadowBlurConstant * (C + x) * (c.scaleX + c.scaleY) / 4, a.shadowOffsetX = f.offsetX * C * c.scaleX, a.shadowOffsetY = f.offsetY * x * c.scaleY;
      }
    }, _removeShadow: function(a) {
      this.shadow && (a.shadowColor = "", a.shadowBlur = a.shadowOffsetX = a.shadowOffsetY = 0);
    }, _applyPatternGradientTransform: function(a, c) {
      if (!c || !c.toLive)
        return { offsetX: 0, offsetY: 0 };
      var f = c.gradientTransform || c.patternTransform, w = -this.width / 2 + c.offsetX || 0, C = -this.height / 2 + c.offsetY || 0;
      return c.gradientUnits === "percentage" ? a.transform(this.width, 0, 0, this.height, w, C) : a.transform(1, 0, 0, 1, w, C), f && a.transform(f[0], f[1], f[2], f[3], f[4], f[5]), { offsetX: w, offsetY: C };
    }, _renderPaintInOrder: function(a) {
      this.paintFirst === "stroke" ? (this._renderStroke(a), this._renderFill(a)) : (this._renderFill(a), this._renderStroke(a));
    }, _render: function() {
    }, _renderFill: function(a) {
      this.fill && (a.save(), this._setFillStyles(a, this), this.fillRule === "evenodd" ? a.fill("evenodd") : a.fill(), a.restore());
    }, _renderStroke: function(a) {
      if (this.stroke && this.strokeWidth !== 0) {
        if (this.shadow && !this.shadow.affectStroke && this._removeShadow(a), a.save(), this.strokeUniform && this.group) {
          var c = this.getObjectScaling();
          a.scale(1 / c.scaleX, 1 / c.scaleY);
        } else
          this.strokeUniform && a.scale(1 / this.scaleX, 1 / this.scaleY);
        this._setLineDash(a, this.strokeDashArray), this._setStrokeStyles(a, this), a.stroke(), a.restore();
      }
    }, _applyPatternForTransformedGradient: function(a, c) {
      var f, w = this._limitCacheSize(this._getCacheCanvasDimensions()), C = s.util.createCanvasElement(), x = this.canvas.getRetinaScaling(), U = w.x / this.scaleX / x, F = w.y / this.scaleY / x;
      C.width = U, C.height = F, (f = C.getContext("2d")).beginPath(), f.moveTo(0, 0), f.lineTo(U, 0), f.lineTo(U, F), f.lineTo(0, F), f.closePath(), f.translate(U / 2, F / 2), f.scale(w.zoomX / this.scaleX / x, w.zoomY / this.scaleY / x), this._applyPatternGradientTransform(f, c), f.fillStyle = c.toLive(a), f.fill(), a.translate(-this.width / 2 - this.strokeWidth / 2, -this.height / 2 - this.strokeWidth / 2), a.scale(x * this.scaleX / w.zoomX, x * this.scaleY / w.zoomY), a.strokeStyle = f.createPattern(C, "no-repeat");
    }, _findCenterFromElement: function() {
      return { x: this.left + this.width / 2, y: this.top + this.height / 2 };
    }, _assignTransformMatrixProps: function() {
      if (this.transformMatrix) {
        var a = s.util.qrDecompose(this.transformMatrix);
        this.flipX = !1, this.flipY = !1, this.set("scaleX", a.scaleX), this.set("scaleY", a.scaleY), this.angle = a.angle, this.skewX = a.skewX, this.skewY = 0;
      }
    }, _removeTransformMatrix: function(a) {
      var c = this._findCenterFromElement();
      this.transformMatrix && (this._assignTransformMatrixProps(), c = s.util.transformPoint(c, this.transformMatrix)), this.transformMatrix = null, a && (this.scaleX *= a.scaleX, this.scaleY *= a.scaleY, this.cropX = a.cropX, this.cropY = a.cropY, c.x += a.offsetLeft, c.y += a.offsetTop, this.width = a.width, this.height = a.height), this.setPositionByOrigin(c, "center", "center");
    }, clone: function(a, c) {
      var f = this.toObject(c);
      this.constructor.fromObject ? this.constructor.fromObject(f, a) : s.Object._fromObject("Object", f, a);
    }, cloneAsImage: function(a, c) {
      var f = this.toCanvasElement(c);
      return a && a(new s.Image(f)), this;
    }, toCanvasElement: function(a) {
      a || (a = {});
      var c = s.util, f = c.saveObjectTransform(this), w = this.group, C = this.shadow, x = Math.abs, U = (a.multiplier || 1) * (a.enableRetinaScaling ? s.devicePixelRatio : 1);
      delete this.group, a.withoutTransform && c.resetObjectTransform(this), a.withoutShadow && (this.shadow = null);
      var F, k, H, L, K = s.util.createCanvasElement(), W = this.getBoundingRect(!0, !0), V = this.shadow, _ = { x: 0, y: 0 };
      V && (k = V.blur, F = V.nonScaling ? { scaleX: 1, scaleY: 1 } : this.getObjectScaling(), _.x = 2 * Math.round(x(V.offsetX) + k) * x(F.scaleX), _.y = 2 * Math.round(x(V.offsetY) + k) * x(F.scaleY)), H = W.width + _.x, L = W.height + _.y, K.width = Math.ceil(H), K.height = Math.ceil(L);
      var S = new s.StaticCanvas(K, { enableRetinaScaling: !1, renderOnAddRemove: !1, skipOffscreen: !1 });
      a.format === "jpeg" && (S.backgroundColor = "#fff"), this.setPositionByOrigin(new s.Point(S.width / 2, S.height / 2), "center", "center");
      var P = this.canvas;
      S.add(this);
      var G = S.toCanvasElement(U || 1, a);
      return this.shadow = C, this.set("canvas", P), w && (this.group = w), this.set(f).setCoords(), S._objects = [], S.dispose(), S = null, G;
    }, toDataURL: function(a) {
      return a || (a = {}), s.util.toDataURL(this.toCanvasElement(a), a.format || "png", a.quality || 1);
    }, isType: function(a) {
      return arguments.length > 1 ? Array.from(arguments).includes(this.type) : this.type === a;
    }, complexity: function() {
      return 1;
    }, toJSON: function(a) {
      return this.toObject(a);
    }, rotate: function(a) {
      var c = (this.originX !== "center" || this.originY !== "center") && this.centeredRotation;
      return c && this._setOriginToCenter(), this.set("angle", a), c && this._resetOrigin(), this;
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
    }, getLocalPointer: function(a, c) {
      c = c || this.canvas.getPointer(a);
      var f = new s.Point(c.x, c.y), w = this._getLeftTopCoords();
      return this.angle && (f = s.util.rotatePoint(f, w, r(-this.angle))), { x: f.x - w.x, y: f.y - w.y };
    }, _setupCompositeOperation: function(a) {
      this.globalCompositeOperation && (a.globalCompositeOperation = this.globalCompositeOperation);
    }, dispose: function() {
      s.runningAnimations && s.runningAnimations.cancelByTarget(this);
    } }), s.util.createAccessors && s.util.createAccessors(s.Object), o(s.Object.prototype, s.Observable), s.Object.NUM_FRACTION_DIGITS = 2, s.Object.ENLIVEN_PROPS = ["clipPath"], s.Object._fromObject = function(a, c, f, w) {
      var C = s[a];
      c = d(c, !0), s.util.enlivenPatterns([c.fill, c.stroke], function(x) {
        x[0] !== void 0 && (c.fill = x[0]), x[1] !== void 0 && (c.stroke = x[1]), s.util.enlivenObjectEnlivables(c, c, function() {
          var U = w ? new C(c[w], c) : new C(c);
          f && f(U);
        });
      });
    }, s.Object.__uid = 0);
  }(e), I = p.util.degreesToRadians, M = { left: -0.5, center: 0, right: 0.5 }, O = { top: -0.5, center: 0, bottom: 0.5 }, p.util.object.extend(p.Object.prototype, { translateToGivenOrigin: function(u, s, o, d, A) {
    var i, r, h, a = u.x, c = u.y;
    return typeof s == "string" ? s = M[s] : s -= 0.5, typeof d == "string" ? d = M[d] : d -= 0.5, typeof o == "string" ? o = O[o] : o -= 0.5, typeof A == "string" ? A = O[A] : A -= 0.5, r = A - o, ((i = d - s) || r) && (h = this._getTransformedDimensions(), a = u.x + i * h.x, c = u.y + r * h.y), new p.Point(a, c);
  }, translateToCenterPoint: function(u, s, o) {
    var d = this.translateToGivenOrigin(u, s, o, "center", "center");
    return this.angle ? p.util.rotatePoint(d, u, I(this.angle)) : d;
  }, translateToOriginPoint: function(u, s, o) {
    var d = this.translateToGivenOrigin(u, "center", "center", s, o);
    return this.angle ? p.util.rotatePoint(d, u, I(this.angle)) : d;
  }, getCenterPoint: function() {
    var u = new p.Point(this.left, this.top);
    return this.translateToCenterPoint(u, this.originX, this.originY);
  }, getPointByOrigin: function(u, s) {
    var o = this.getCenterPoint();
    return this.translateToOriginPoint(o, u, s);
  }, toLocalPoint: function(u, s, o) {
    var d, A, i = this.getCenterPoint();
    return d = s !== void 0 && o !== void 0 ? this.translateToGivenOrigin(i, "center", "center", s, o) : new p.Point(this.left, this.top), A = new p.Point(u.x, u.y), this.angle && (A = p.util.rotatePoint(A, i, -I(this.angle))), A.subtractEquals(d);
  }, setPositionByOrigin: function(u, s, o) {
    var d = this.translateToCenterPoint(u, s, o), A = this.translateToOriginPoint(d, this.originX, this.originY);
    this.set("left", A.x), this.set("top", A.y);
  }, adjustPosition: function(u) {
    var s, o, d = I(this.angle), A = this.getScaledWidth(), i = p.util.cos(d) * A, r = p.util.sin(d) * A;
    s = typeof this.originX == "string" ? M[this.originX] : this.originX - 0.5, o = typeof u == "string" ? M[u] : u - 0.5, this.left += i * (o - s), this.top += r * (o - s), this.setCoords(), this.originX = u;
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
    var u = p.util, s = u.degreesToRadians, o = u.multiplyTransformMatrices, d = u.transformPoint;
    u.object.extend(p.Object.prototype, { oCoords: null, aCoords: null, lineCoords: null, ownMatrixCache: null, matrixCache: null, controls: {}, _getCoords: function(A, i) {
      return i ? A ? this.calcACoords() : this.calcLineCoords() : (this.aCoords && this.lineCoords || this.setCoords(!0), A ? this.aCoords : this.lineCoords);
    }, getCoords: function(A, i) {
      return r = this._getCoords(A, i), [new p.Point(r.tl.x, r.tl.y), new p.Point(r.tr.x, r.tr.y), new p.Point(r.br.x, r.br.y), new p.Point(r.bl.x, r.bl.y)];
      var r;
    }, intersectsWithRect: function(A, i, r, h) {
      var a = this.getCoords(r, h);
      return p.Intersection.intersectPolygonRectangle(a, A, i).status === "Intersection";
    }, intersectsWithObject: function(A, i, r) {
      return p.Intersection.intersectPolygonPolygon(this.getCoords(i, r), A.getCoords(i, r)).status === "Intersection" || A.isContainedWithinObject(this, i, r) || this.isContainedWithinObject(A, i, r);
    }, isContainedWithinObject: function(A, i, r) {
      for (var h = this.getCoords(i, r), a = i ? A.aCoords : A.lineCoords, c = 0, f = A._getImageLines(a); c < 4; c++)
        if (!A.containsPoint(h[c], f))
          return !1;
      return !0;
    }, isContainedWithinRect: function(A, i, r, h) {
      var a = this.getBoundingRect(r, h);
      return a.left >= A.x && a.left + a.width <= i.x && a.top >= A.y && a.top + a.height <= i.y;
    }, containsPoint: function(A, i, r, h) {
      var a = this._getCoords(r, h), c = (i = i || this._getImageLines(a), this._findCrossPoints(A, i));
      return c !== 0 && c % 2 == 1;
    }, isOnScreen: function(A) {
      if (!this.canvas)
        return !1;
      var i = this.canvas.vptCoords.tl, r = this.canvas.vptCoords.br;
      return !!this.getCoords(!0, A).some(function(h) {
        return h.x <= r.x && h.x >= i.x && h.y <= r.y && h.y >= i.y;
      }) || !!this.intersectsWithRect(i, r, !0, A) || this._containsCenterOfCanvas(i, r, A);
    }, _containsCenterOfCanvas: function(A, i, r) {
      var h = { x: (A.x + i.x) / 2, y: (A.y + i.y) / 2 };
      return !!this.containsPoint(h, null, !0, r);
    }, isPartiallyOnScreen: function(A) {
      if (!this.canvas)
        return !1;
      var i = this.canvas.vptCoords.tl, r = this.canvas.vptCoords.br;
      return !!this.intersectsWithRect(i, r, !0, A) || this.getCoords(!0, A).every(function(h) {
        return (h.x >= r.x || h.x <= i.x) && (h.y >= r.y || h.y <= i.y);
      }) && this._containsCenterOfCanvas(i, r, A);
    }, _getImageLines: function(A) {
      return { topline: { o: A.tl, d: A.tr }, rightline: { o: A.tr, d: A.br }, bottomline: { o: A.br, d: A.bl }, leftline: { o: A.bl, d: A.tl } };
    }, _findCrossPoints: function(A, i) {
      var r, h, a, c = 0;
      for (var f in i)
        if (!((a = i[f]).o.y < A.y && a.d.y < A.y || a.o.y >= A.y && a.d.y >= A.y || (a.o.x === a.d.x && a.o.x >= A.x ? h = a.o.x : (r = (a.d.y - a.o.y) / (a.d.x - a.o.x), h = -(A.y - 0 * A.x - (a.o.y - r * a.o.x)) / (0 - r)), h >= A.x && (c += 1), c !== 2)))
          break;
      return c;
    }, getBoundingRect: function(A, i) {
      var r = this.getCoords(A, i);
      return u.makeBoundingBoxFromPoints(r);
    }, getScaledWidth: function() {
      return this._getTransformedDimensions().x;
    }, getScaledHeight: function() {
      return this._getTransformedDimensions().y;
    }, _constrainScale: function(A) {
      return Math.abs(A) < this.minScaleLimit ? A < 0 ? -this.minScaleLimit : this.minScaleLimit : A === 0 ? 1e-4 : A;
    }, scale: function(A) {
      return this._set("scaleX", A), this._set("scaleY", A), this.setCoords();
    }, scaleToWidth: function(A, i) {
      var r = this.getBoundingRect(i).width / this.getScaledWidth();
      return this.scale(A / this.width / r);
    }, scaleToHeight: function(A, i) {
      var r = this.getBoundingRect(i).height / this.getScaledHeight();
      return this.scale(A / this.height / r);
    }, calcLineCoords: function() {
      var A = this.getViewportTransform(), i = this.padding, r = s(this.angle), h = u.cos(r) * i, a = u.sin(r) * i, c = h + a, f = h - a, w = this.calcACoords(), C = { tl: d(w.tl, A), tr: d(w.tr, A), bl: d(w.bl, A), br: d(w.br, A) };
      return i && (C.tl.x -= f, C.tl.y -= c, C.tr.x += c, C.tr.y -= f, C.bl.x -= c, C.bl.y += f, C.br.x += f, C.br.y += c), C;
    }, calcOCoords: function() {
      var A = this._calcRotateMatrix(), i = this._calcTranslateMatrix(), r = this.getViewportTransform(), h = o(r, i), a = o(h, A), c = (a = o(a, [1 / r[0], 0, 0, 1 / r[3], 0, 0]), this._calculateCurrentDimensions()), f = {};
      return this.forEachControl(function(w, C, x) {
        f[C] = w.positionHandler(c, a, x);
      }), f;
    }, calcACoords: function() {
      var A = this._calcRotateMatrix(), i = this._calcTranslateMatrix(), r = o(i, A), h = this._getTransformedDimensions(), a = h.x / 2, c = h.y / 2;
      return { tl: d({ x: -a, y: -c }, r), tr: d({ x: a, y: -c }, r), bl: d({ x: -a, y: c }, r), br: d({ x: a, y: c }, r) };
    }, setCoords: function(A) {
      return this.aCoords = this.calcACoords(), this.lineCoords = this.group ? this.aCoords : this.calcLineCoords(), A || (this.oCoords = this.calcOCoords(), this._setCornerCoords && this._setCornerCoords()), this;
    }, _calcRotateMatrix: function() {
      return u.calcRotateMatrix(this);
    }, _calcTranslateMatrix: function() {
      var A = this.getCenterPoint();
      return [1, 0, 0, 1, A.x, A.y];
    }, transformMatrixKey: function(A) {
      var i = "_", r = "";
      return !A && this.group && (r = this.group.transformMatrixKey(A) + i), r + this.top + i + this.left + i + this.scaleX + i + this.scaleY + i + this.skewX + i + this.skewY + i + this.angle + i + this.originX + i + this.originY + i + this.width + i + this.height + i + this.strokeWidth + this.flipX + this.flipY;
    }, calcTransformMatrix: function(A) {
      var i = this.calcOwnMatrix();
      if (A || !this.group)
        return i;
      var r = this.transformMatrixKey(A), h = this.matrixCache || (this.matrixCache = {});
      return h.key === r ? h.value : (this.group && (i = o(this.group.calcTransformMatrix(!1), i)), h.key = r, h.value = i, i);
    }, calcOwnMatrix: function() {
      var A = this.transformMatrixKey(!0), i = this.ownMatrixCache || (this.ownMatrixCache = {});
      if (i.key === A)
        return i.value;
      var r = this._calcTranslateMatrix(), h = { angle: this.angle, translateX: r[4], translateY: r[5], scaleX: this.scaleX, scaleY: this.scaleY, skewX: this.skewX, skewY: this.skewY, flipX: this.flipX, flipY: this.flipY };
      return i.key = A, i.value = u.composeMatrix(h), i.value;
    }, _getNonTransformedDimensions: function() {
      var A = this.strokeWidth;
      return { x: this.width + A, y: this.height + A };
    }, _getTransformedDimensions: function(A, i) {
      A === void 0 && (A = this.skewX), i === void 0 && (i = this.skewY);
      var r, h, a, c = A === 0 && i === 0;
      if (this.strokeUniform ? (h = this.width, a = this.height) : (h = (r = this._getNonTransformedDimensions()).x, a = r.y), c)
        return this._finalizeDimensions(h * this.scaleX, a * this.scaleY);
      var f = u.sizeAfterTransform(h, a, { scaleX: this.scaleX, scaleY: this.scaleY, skewX: A, skewY: i });
      return this._finalizeDimensions(f.x, f.y);
    }, _finalizeDimensions: function(A, i) {
      return this.strokeUniform ? { x: A + this.strokeWidth, y: i + this.strokeWidth } : { x: A, y: i };
    }, _calculateCurrentDimensions: function() {
      var A = this.getViewportTransform(), i = this._getTransformedDimensions();
      return d(i, A, !0).scalarAdd(2 * this.padding);
    } });
  }(), p.util.object.extend(p.Object.prototype, { sendToBack: function() {
    return this.group ? p.StaticCanvas.prototype.sendToBack.call(this.group, this) : this.canvas && this.canvas.sendToBack(this), this;
  }, bringToFront: function() {
    return this.group ? p.StaticCanvas.prototype.bringToFront.call(this.group, this) : this.canvas && this.canvas.bringToFront(this), this;
  }, sendBackwards: function(u) {
    return this.group ? p.StaticCanvas.prototype.sendBackwards.call(this.group, this, u) : this.canvas && this.canvas.sendBackwards(this, u), this;
  }, bringForward: function(u) {
    return this.group ? p.StaticCanvas.prototype.bringForward.call(this.group, this, u) : this.canvas && this.canvas.bringForward(this, u), this;
  }, moveTo: function(u) {
    return this.group && this.group.type !== "activeSelection" ? p.StaticCanvas.prototype.moveTo.call(this.group, this, u) : this.canvas && this.canvas.moveTo(this, u), this;
  } }), function() {
    function u(o, d) {
      if (d) {
        if (d.toLive)
          return o + ": url(#SVGID_" + d.id + "); ";
        var A = new p.Color(d), i = o + ": " + A.toRgb() + "; ", r = A.getAlpha();
        return r !== 1 && (i += o + "-opacity: " + r.toString() + "; "), i;
      }
      return o + ": none; ";
    }
    var s = p.util.toFixed;
    p.util.object.extend(p.Object.prototype, { getSvgStyles: function(o) {
      var d = this.fillRule ? this.fillRule : "nonzero", A = this.strokeWidth ? this.strokeWidth : "0", i = this.strokeDashArray ? this.strokeDashArray.join(" ") : "none", r = this.strokeDashOffset ? this.strokeDashOffset : "0", h = this.strokeLineCap ? this.strokeLineCap : "butt", a = this.strokeLineJoin ? this.strokeLineJoin : "miter", c = this.strokeMiterLimit ? this.strokeMiterLimit : "4", f = this.opacity !== void 0 ? this.opacity : "1", w = this.visible ? "" : " visibility: hidden;", C = o ? "" : this.getSvgFilter(), x = u("fill", this.fill);
      return [u("stroke", this.stroke), "stroke-width: ", A, "; ", "stroke-dasharray: ", i, "; ", "stroke-linecap: ", h, "; ", "stroke-dashoffset: ", r, "; ", "stroke-linejoin: ", a, "; ", "stroke-miterlimit: ", c, "; ", x, "fill-rule: ", d, "; ", "opacity: ", f, ";", C, w].join("");
    }, getSvgSpanStyles: function(o, d) {
      var A = "; ", i = o.fontFamily ? "font-family: " + (o.fontFamily.indexOf("'") === -1 && o.fontFamily.indexOf('"') === -1 ? "'" + o.fontFamily + "'" : o.fontFamily) + A : "", r = o.strokeWidth ? "stroke-width: " + o.strokeWidth + A : "", h = (i = i, o.fontSize ? "font-size: " + o.fontSize + "px" + A : ""), a = o.fontStyle ? "font-style: " + o.fontStyle + A : "", c = o.fontWeight ? "font-weight: " + o.fontWeight + A : "", f = o.fill ? u("fill", o.fill) : "", w = o.stroke ? u("stroke", o.stroke) : "", C = this.getSvgTextDecoration(o);
      return C && (C = "text-decoration: " + C + A), [w, r, i, h, a, c, C, f, o.deltaY ? "baseline-shift: " + -o.deltaY + "; " : "", d ? "white-space: pre; " : ""].join("");
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
      return 'transform="' + p.util.matrixToSVG(A) + (d || "") + '" ';
    }, _setSVGBg: function(o) {
      if (this.backgroundColor) {
        var d = p.Object.NUM_FRACTION_DIGITS;
        o.push("		<rect ", this._getFillAttributes(this.backgroundColor), ' x="', s(-this.width / 2, d), '" y="', s(-this.height / 2, d), '" width="', s(this.width, d), '" height="', s(this.height, d), `"></rect>
`);
      }
    }, toSVG: function(o) {
      return this._createBaseSVGMarkup(this._toSVG(o), { reviver: o });
    }, toClipPathSVG: function(o) {
      return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(o), { reviver: o });
    }, _createBaseClipPathSVGMarkup: function(o, d) {
      var A = (d = d || {}).reviver, i = d.additionalTransform || "", r = [this.getSvgTransform(!0, i), this.getSvgCommons()].join(""), h = o.indexOf("COMMON_PARTS");
      return o[h] = r, A ? A(o.join("")) : o.join("");
    }, _createBaseSVGMarkup: function(o, d) {
      var A, i, r = (d = d || {}).noStyle, h = d.reviver, a = r ? "" : 'style="' + this.getSvgStyles() + '" ', c = d.withShadow ? 'style="' + this.getSvgFilter() + '" ' : "", f = this.clipPath, w = this.strokeUniform ? 'vector-effect="non-scaling-stroke" ' : "", C = f && f.absolutePositioned, x = this.stroke, U = this.fill, F = this.shadow, k = [], H = o.indexOf("COMMON_PARTS"), L = d.additionalTransform;
      return f && (f.clipPathId = "CLIPPATH_" + p.Object.__uid++, i = '<clipPath id="' + f.clipPathId + `" >
` + f.toClipPathSVG(h) + `</clipPath>
`), C && k.push("<g ", c, this.getSvgCommons(), ` >
`), k.push("<g ", this.getSvgTransform(!1), C ? "" : c + this.getSvgCommons(), ` >
`), A = [a, w, r ? "" : this.addPaintOrder(), " ", L ? 'transform="' + L + '" ' : ""].join(""), o[H] = A, U && U.toLive && k.push(U.toSVG(this)), x && x.toLive && k.push(x.toSVG(this)), F && k.push(F.toSVG(this)), f && k.push(i), k.push(o.join("")), k.push(`</g>
`), C && k.push(`</g>
`), h ? h(k.join("")) : k.join("");
    }, addPaintOrder: function() {
      return this.paintFirst !== "fill" ? ' paint-order="' + this.paintFirst + '" ' : "";
    } });
  }(), function() {
    var u = p.util.object.extend, s = "stateProperties";
    function o(A, i, r) {
      var h = {};
      r.forEach(function(a) {
        h[a] = A[a];
      }), u(A[i], h, !0);
    }
    function d(A, i, r) {
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
        var c, f = Object.keys(A);
        if (!i || typeof i != "object" || !r && f.length !== Object.keys(i).length)
          return !1;
        for (h = 0, a = f.length; h < a; h++)
          if ((c = f[h]) !== "canvas" && c !== "group" && !d(A[c], i[c]))
            return !1;
        return !0;
      }
    }
    p.util.object.extend(p.Object.prototype, { hasStateChanged: function(A) {
      var i = "_" + (A = A || s);
      return Object.keys(this[i]).length < this[A].length || !d(this[i], this, !0);
    }, saveState: function(A) {
      var i = A && A.propertySet || s, r = "_" + i;
      return this[r] ? (o(this, r, this[i]), A && A.stateProperties && o(this, r, A.stateProperties), this) : this.setupState(A);
    }, setupState: function(A) {
      var i = (A = A || {}).propertySet || s;
      return A.propertySet = i, this["_" + i] = {}, this.saveState(A), this;
    } });
  }(), function() {
    var u = p.util.degreesToRadians;
    p.util.object.extend(p.Object.prototype, { _findTargetCorner: function(s, o) {
      if (!this.hasControls || this.group || !this.canvas || this.canvas._activeObject !== this)
        return !1;
      var d, A, i, r = s.x, h = s.y, a = Object.keys(this.oCoords), c = a.length - 1;
      for (this.__corner = 0; c >= 0; c--)
        if (i = a[c], this.isControlVisible(i) && (A = this._getImageLines(o ? this.oCoords[i].touchCorner : this.oCoords[i].corner), (d = this._findCrossPoints({ x: r, y: h }, A)) !== 0 && d % 2 == 1))
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
      var d = this._calculateCurrentDimensions(), A = this.borderScaleFactor, i = d.x + A, r = d.y + A, h = o.hasControls !== void 0 ? o.hasControls : this.hasControls, a = !1;
      return s.save(), s.strokeStyle = o.borderColor || this.borderColor, this._setLineDash(s, o.borderDashArray || this.borderDashArray), s.strokeRect(-i / 2, -r / 2, i, r), h && (s.beginPath(), this.forEachControl(function(c, f, w) {
        c.withConnection && c.getVisibility(w, f) && (a = !0, s.moveTo(c.x * i, c.y * r), s.lineTo(c.x * i + c.offsetX, c.y * r + c.offsetY));
      }), a && s.stroke()), s.restore(), this;
    }, drawBordersInGroup: function(s, o, d) {
      d = d || {};
      var A = p.util.sizeAfterTransform(this.width, this.height, o), i = this.strokeWidth, r = this.strokeUniform, h = this.borderScaleFactor, a = A.x + i * (r ? this.canvas.getZoom() : o.scaleX) + h, c = A.y + i * (r ? this.canvas.getZoom() : o.scaleY) + h;
      return s.save(), this._setLineDash(s, d.borderDashArray || this.borderDashArray), s.strokeStyle = d.borderColor || this.borderColor, s.strokeRect(-a / 2, -c / 2, a, c), s.restore(), this;
    }, drawControls: function(s, o) {
      o = o || {}, s.save();
      var d, A, i = this.canvas.getRetinaScaling();
      return s.setTransform(i, 0, 0, i, 0, 0), s.strokeStyle = s.fillStyle = o.cornerColor || this.cornerColor, this.transparentCorners || (s.strokeStyle = o.cornerStrokeColor || this.cornerStrokeColor), this._setLineDash(s, o.cornerDashArray || this.cornerDashArray), this.setCoords(), this.group && (d = this.group.calcTransformMatrix()), this.forEachControl(function(r, h, a) {
        A = a.oCoords[h], r.getVisibility(a, h) && (d && (A = p.util.transformPoint(A, d)), r.render(s, A.x, A.y, o, a));
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
  }(), p.util.object.extend(p.StaticCanvas.prototype, { FX_DURATION: 500, fxCenterObjectH: function(u, s) {
    var o = function() {
    }, d = (s = s || {}).onComplete || o, A = s.onChange || o, i = this;
    return p.util.animate({ target: this, startValue: u.left, endValue: this.getCenterPoint().x, duration: this.FX_DURATION, onChange: function(r) {
      u.set("left", r), i.requestRenderAll(), A();
    }, onComplete: function() {
      u.setCoords(), d();
    } });
  }, fxCenterObjectV: function(u, s) {
    var o = function() {
    }, d = (s = s || {}).onComplete || o, A = s.onChange || o, i = this;
    return p.util.animate({ target: this, startValue: u.top, endValue: this.getCenterPoint().y, duration: this.FX_DURATION, onChange: function(r) {
      u.set("top", r), i.requestRenderAll(), A();
    }, onComplete: function() {
      u.setCoords(), d();
    } });
  }, fxRemove: function(u, s) {
    var o = function() {
    }, d = (s = s || {}).onComplete || o, A = s.onChange || o, i = this;
    return p.util.animate({ target: this, startValue: u.opacity, endValue: 0, duration: this.FX_DURATION, onChange: function(r) {
      u.set("opacity", r), i.requestRenderAll(), A();
    }, onComplete: function() {
      i.remove(u), d();
    } });
  } }), p.util.object.extend(p.Object.prototype, { animate: function() {
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
    s = s.toString(), o = o ? p.util.object.clone(o) : {}, ~u.indexOf(".") && (A = u.split("."));
    var r = i.colorProperties.indexOf(u) > -1 || A && i.colorProperties.indexOf(A[1]) > -1, h = A ? this.get(A[0])[A[1]] : this.get(u);
    "from" in o || (o.from = h), r || (s = ~s.indexOf("=") ? h + parseFloat(s.replace("=", "")) : parseFloat(s));
    var a = { target: this, startValue: o.from, endValue: s, byValue: o.by, easing: o.easing, duration: o.duration, abort: o.abort && function(c, f, w) {
      return o.abort.call(i, c, f, w);
    }, onChange: function(c, f, w) {
      A ? i[A[0]][A[1]] = c : i.set(u, c), d || o.onChange && o.onChange(c, f, w);
    }, onComplete: function(c, f, w) {
      d || (i.setCoords(), o.onComplete && o.onComplete(c, f, w));
    } };
    return r ? p.util.animateColor(a.startValue, a.endValue, a.duration, a) : p.util.animate(a);
  } }), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.util.object.extend, d = s.util.object.clone, A = { x1: 1, x2: 1, y1: 1, y2: 1 };
    function i(r, h) {
      var a = r.origin, c = r.axis1, f = r.axis2, w = r.dimension, C = h.nearest, x = h.center, U = h.farthest;
      return function() {
        switch (this.get(a)) {
          case C:
            return Math.min(this.get(c), this.get(f));
          case x:
            return Math.min(this.get(c), this.get(f)) + 0.5 * this.get(w);
          case U:
            return Math.max(this.get(c), this.get(f));
        }
      };
    }
    s.Line ? s.warn("fabric.Line is already defined") : (s.Line = s.util.createClass(s.Object, { type: "line", x1: 0, y1: 0, x2: 0, y2: 0, cacheProperties: s.Object.prototype.cacheProperties.concat("x1", "x2", "y1", "y2"), initialize: function(r, h) {
      r || (r = [0, 0, 0, 0]), this.callSuper("initialize", h), this.set("x1", r[0]), this.set("y1", r[1]), this.set("x2", r[2]), this.set("y2", r[3]), this._setWidthHeight(h);
    }, _setWidthHeight: function(r) {
      r || (r = {}), this.width = Math.abs(this.x2 - this.x1), this.height = Math.abs(this.y2 - this.y1), this.left = "left" in r ? r.left : this._getLeftToOriginX(), this.top = "top" in r ? r.top : this._getTopToOriginY();
    }, _set: function(r, h) {
      return this.callSuper("_set", r, h), A[r] !== void 0 && this._setWidthHeight(), this;
    }, _getLeftToOriginX: i({ origin: "originX", axis1: "x1", axis2: "x2", dimension: "width" }, { nearest: "left", center: "center", farthest: "right" }), _getTopToOriginY: i({ origin: "originY", axis1: "y1", axis2: "y2", dimension: "height" }, { nearest: "top", center: "center", farthest: "bottom" }), _render: function(r) {
      r.beginPath();
      var h = this.calcLinePoints();
      r.moveTo(h.x1, h.y1), r.lineTo(h.x2, h.y2), r.lineWidth = this.strokeWidth;
      var a = r.strokeStyle;
      r.strokeStyle = this.stroke || r.fillStyle, this.stroke && this._renderStroke(r), r.strokeStyle = a;
    }, _findCenterFromElement: function() {
      return { x: (this.x1 + this.x2) / 2, y: (this.y1 + this.y2) / 2 };
    }, toObject: function(r) {
      return o(this.callSuper("toObject", r), this.calcLinePoints());
    }, _getNonTransformedDimensions: function() {
      var r = this.callSuper("_getNonTransformedDimensions");
      return this.strokeLineCap === "butt" && (this.width === 0 && (r.y -= this.strokeWidth), this.height === 0 && (r.x -= this.strokeWidth)), r;
    }, calcLinePoints: function() {
      var r = this.x1 <= this.x2 ? -1 : 1, h = this.y1 <= this.y2 ? -1 : 1, a = r * this.width * 0.5, c = h * this.height * 0.5;
      return { x1: a, x2: r * this.width * -0.5, y1: c, y2: h * this.height * -0.5 };
    }, _toSVG: function() {
      var r = this.calcLinePoints();
      return ["<line ", "COMMON_PARTS", 'x1="', r.x1, '" y1="', r.y1, '" x2="', r.x2, '" y2="', r.y2, `" />
`];
    } }), s.Line.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat("x1 y1 x2 y2".split(" ")), s.Line.fromElement = function(r, h, a) {
      a = a || {};
      var c = s.parseAttributes(r, s.Line.ATTRIBUTE_NAMES), f = [c.x1 || 0, c.y1 || 0, c.x2 || 0, c.y2 || 0];
      h(new s.Line(f, o(c, a)));
    }, s.Line.fromObject = function(r, h) {
      var a = d(r, !0);
      a.points = [r.x1, r.y1, r.x2, r.y2], s.Object._fromObject("Line", a, function(c) {
        delete c.points, h && h(c);
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
        var i = o(this.startAngle), r = o(this.endAngle), h = this.radius;
        d = ['<path d="M ' + s.util.cos(i) * h + " " + s.util.sin(i) * h, " A " + h + " " + h, " 0 ", +(A > 180 ? "1" : "0") + " 1", " " + s.util.cos(r) * h + " " + s.util.sin(r) * h, '" ', "COMMON_PARTS", ` />
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
      var i, r = s.parseAttributes(d, s.Circle.ATTRIBUTE_NAMES);
      if (!("radius" in (i = r) && i.radius >= 0))
        throw new Error("value of `r` attribute is required and can not be negative");
      r.left = (r.left || 0) - r.radius, r.top = (r.top || 0) - r.radius, A(new s.Circle(r));
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
      var A = this.rx ? Math.min(this.rx, this.width / 2) : 0, i = this.ry ? Math.min(this.ry, this.height / 2) : 0, r = this.width, h = this.height, a = -this.width / 2, c = -this.height / 2, f = A !== 0 || i !== 0, w = 0.4477152502;
      d.beginPath(), d.moveTo(a + A, c), d.lineTo(a + r - A, c), f && d.bezierCurveTo(a + r - w * A, c, a + r, c + w * i, a + r, c + i), d.lineTo(a + r, c + h - i), f && d.bezierCurveTo(a + r, c + h - w * i, a + r - w * A, c + h, a + r - A, c + h), d.lineTo(a + A, c + h), f && d.bezierCurveTo(a + w * A, c + h, a, c + h - w * i, a, c + h - i), d.lineTo(a, c + i), f && d.bezierCurveTo(a, c + w * i, a + w * A, c, a + A, c), d.closePath(), this._renderPaintInOrder(d);
    }, toObject: function(d) {
      return this.callSuper("toObject", ["rx", "ry"].concat(d));
    }, _toSVG: function() {
      return ["<rect ", "COMMON_PARTS", 'x="', -this.width / 2, '" y="', -this.height / 2, '" rx="', this.rx, '" ry="', this.ry, '" width="', this.width, '" height="', this.height, `" />
`];
    } }), s.Rect.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat("x y rx ry width height".split(" ")), s.Rect.fromElement = function(d, A, i) {
      if (!d)
        return A(null);
      i = i || {};
      var r = s.parseAttributes(d, s.Rect.ATTRIBUTE_NAMES);
      r.left = r.left || 0, r.top = r.top || 0, r.height = r.height || 0, r.width = r.width || 0;
      var h = new s.Rect(o(i ? s.util.object.clone(i) : {}, r));
      h.visible = h.visible && h.width > 0 && h.height > 0, A(h);
    }, s.Rect.fromObject = function(d, A) {
      return s.Object._fromObject("Rect", d, A);
    });
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.util.object.extend, d = s.util.array.min, A = s.util.array.max, i = s.util.toFixed, r = s.util.projectStrokeOnPoints;
    s.Polyline ? s.warn("fabric.Polyline is already defined") : (s.Polyline = s.util.createClass(s.Object, { type: "polyline", points: null, exactBoundingBox: !1, cacheProperties: s.Object.prototype.cacheProperties.concat("points"), initialize: function(h, a) {
      a = a || {}, this.points = h || [], this.callSuper("initialize", a), this._setPositionDimensions(a);
    }, _projectStrokeOnPoints: function() {
      return r(this.points, this, !0);
    }, _setPositionDimensions: function(h) {
      var a, c = this._calcDimensions(h), f = this.exactBoundingBox ? this.strokeWidth : 0;
      this.width = c.width - f, this.height = c.height - f, h.fromSVG || (a = this.translateToGivenOrigin({ x: c.left - this.strokeWidth / 2 + f / 2, y: c.top - this.strokeWidth / 2 + f / 2 }, "left", "top", this.originX, this.originY)), h.left === void 0 && (this.left = h.fromSVG ? c.left : a.x), h.top === void 0 && (this.top = h.fromSVG ? c.top : a.y), this.pathOffset = { x: c.left + this.width / 2 + f / 2, y: c.top + this.height / 2 + f / 2 };
    }, _calcDimensions: function() {
      var h = this.exactBoundingBox ? this._projectStrokeOnPoints() : this.points, a = d(h, "x") || 0, c = d(h, "y") || 0;
      return { left: a, top: c, width: (A(h, "x") || 0) - a, height: (A(h, "y") || 0) - c };
    }, toObject: function(h) {
      return o(this.callSuper("toObject", h), { points: this.points.concat() });
    }, _toSVG: function() {
      for (var h = [], a = this.pathOffset.x, c = this.pathOffset.y, f = s.Object.NUM_FRACTION_DIGITS, w = 0, C = this.points.length; w < C; w++)
        h.push(i(this.points[w].x - a, f), ",", i(this.points[w].y - c, f), " ");
      return ["<" + this.type + " ", "COMMON_PARTS", 'points="', h.join(""), `" />
`];
    }, commonRender: function(h) {
      var a, c = this.points.length, f = this.pathOffset.x, w = this.pathOffset.y;
      if (!c || isNaN(this.points[c - 1].y))
        return !1;
      h.beginPath(), h.moveTo(this.points[0].x - f, this.points[0].y - w);
      for (var C = 0; C < c; C++)
        a = this.points[C], h.lineTo(a.x - f, a.y - w);
      return !0;
    }, _render: function(h) {
      this.commonRender(h) && this._renderPaintInOrder(h);
    }, complexity: function() {
      return this.get("points").length;
    } }), s.Polyline.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat(), s.Polyline.fromElementGenerator = function(h) {
      return function(a, c, f) {
        if (!a)
          return c(null);
        f || (f = {});
        var w = s.parsePointsAttribute(a.getAttribute("points")), C = s.parseAttributes(a, s[h].ATTRIBUTE_NAMES);
        C.fromSVG = !0, c(new s[h](w, o(C, f)));
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
    var s = u.fabric || (u.fabric = {}), o = s.util.array.min, d = s.util.array.max, A = s.util.object.extend, i = s.util.object.clone, r = s.util.toFixed;
    s.Path ? s.warn("fabric.Path is already defined") : (s.Path = s.util.createClass(s.Object, { type: "path", path: null, cacheProperties: s.Object.prototype.cacheProperties.concat("path", "fillRule"), stateProperties: s.Object.prototype.stateProperties.concat("path"), initialize: function(h, a) {
      delete (a = i(a || {})).path, this.callSuper("initialize", a), this._setPath(h || [], a);
    }, _setPath: function(h, a) {
      this.path = s.util.makePathSimpler(Array.isArray(h) ? h : s.util.parsePath(h)), s.Polyline.prototype._setPositionDimensions.call(this, a || {});
    }, _renderPathCommands: function(h) {
      var a, c = 0, f = 0, w = 0, C = 0, x = 0, U = 0, F = -this.pathOffset.x, k = -this.pathOffset.y;
      h.beginPath();
      for (var H = 0, L = this.path.length; H < L; ++H)
        switch ((a = this.path[H])[0]) {
          case "L":
            w = a[1], C = a[2], h.lineTo(w + F, C + k);
            break;
          case "M":
            c = w = a[1], f = C = a[2], h.moveTo(w + F, C + k);
            break;
          case "C":
            w = a[5], C = a[6], x = a[3], U = a[4], h.bezierCurveTo(a[1] + F, a[2] + k, x + F, U + k, w + F, C + k);
            break;
          case "Q":
            h.quadraticCurveTo(a[1] + F, a[2] + k, a[3] + F, a[4] + k), w = a[3], C = a[4], x = a[1], U = a[2];
            break;
          case "z":
          case "Z":
            w = c, C = f, h.closePath();
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
      return " translate(" + r(-this.pathOffset.x, h) + ", " + r(-this.pathOffset.y, h) + ")";
    }, toClipPathSVG: function(h) {
      var a = this._getOffsetTransform();
      return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(), { reviver: h, additionalTransform: a });
    }, toSVG: function(h) {
      var a = this._getOffsetTransform();
      return this._createBaseSVGMarkup(this._toSVG(), { reviver: h, additionalTransform: a });
    }, complexity: function() {
      return this.path.length;
    }, _calcDimensions: function() {
      for (var h, a, c = [], f = [], w = 0, C = 0, x = 0, U = 0, F = 0, k = this.path.length; F < k; ++F) {
        switch ((h = this.path[F])[0]) {
          case "L":
            x = h[1], U = h[2], a = [];
            break;
          case "M":
            w = x = h[1], C = U = h[2], a = [];
            break;
          case "C":
            a = s.util.getBoundsOfCurve(x, U, h[1], h[2], h[3], h[4], h[5], h[6]), x = h[5], U = h[6];
            break;
          case "Q":
            a = s.util.getBoundsOfCurve(x, U, h[1], h[2], h[1], h[2], h[3], h[4]), x = h[3], U = h[4];
            break;
          case "z":
          case "Z":
            x = w, U = C;
        }
        a.forEach(function(K) {
          c.push(K.x), f.push(K.y);
        }), c.push(x), f.push(U);
      }
      var H = o(c) || 0, L = o(f) || 0;
      return { left: H, top: L, width: (d(c) || 0) - H, height: (d(f) || 0) - L };
    } }), s.Path.fromObject = function(h, a) {
      if (typeof h.sourcePath == "string") {
        var c = h.sourcePath;
        s.loadSVGFromURL(c, function(f) {
          var w = f[0];
          w.setOptions(h), h.clipPath ? s.util.enlivenObjects([h.clipPath], function(C) {
            w.clipPath = C[0], a && a(w);
          }) : a && a(w);
        });
      } else
        s.Object._fromObject("Path", h, a, "path");
    }, s.Path.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat(["d"]), s.Path.fromElement = function(h, a, c) {
      var f = s.parseAttributes(h, s.Path.ATTRIBUTE_NAMES);
      f.fromSVG = !0, a(new s.Path(f.d, A(f, c)));
    });
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.util.array.min, d = s.util.array.max;
    s.Group || (s.Group = s.util.createClass(s.Object, s.Collection, { type: "group", strokeWidth: 0, subTargetCheck: !1, cacheProperties: [], useSetOnGroup: !1, initialize: function(A, i, r) {
      i = i || {}, this._objects = [], r && this.callSuper("initialize", i), this._objects = A || [];
      for (var h = this._objects.length; h--; )
        this._objects[h].group = this;
      if (r)
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
      var r = A.left, h = A.top;
      A.set({ left: r - i.x, top: h - i.y }), A.group = this, A.setCoords(!0);
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
      var r = this._objects.length;
      if (this.useSetOnGroup)
        for (; r--; )
          this._objects[r].setOnGroup(A, i);
      if (A === "canvas")
        for (; r--; )
          this._objects[r]._set(A, i);
      s.Object.prototype._set.call(this, A, i);
    }, toObject: function(A) {
      var i = this.includeDefaultValues, r = this._objects.filter(function(a) {
        return !a.excludeFromExport;
      }).map(function(a) {
        var c = a.includeDefaultValues;
        a.includeDefaultValues = i;
        var f = a.toObject(A);
        return a.includeDefaultValues = c, f;
      }), h = s.Object.prototype.toObject.call(this, A);
      return h.objects = r, h;
    }, toDatalessObject: function(A) {
      var i, r = this.sourcePath;
      if (r)
        i = r;
      else {
        var h = this.includeDefaultValues;
        i = this._objects.map(function(c) {
          var f = c.includeDefaultValues;
          c.includeDefaultValues = h;
          var w = c.toDatalessObject(A);
          return c.includeDefaultValues = f, w;
        });
      }
      var a = s.Object.prototype.toDatalessObject.call(this, A);
      return a.objects = i, a;
    }, render: function(A) {
      this._transformDone = !0, this.callSuper("render", A), this._transformDone = !1;
    }, shouldCache: function() {
      var A = s.Object.prototype.shouldCache.call(this);
      if (A) {
        for (var i = 0, r = this._objects.length; i < r; i++)
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
      for (var i = 0, r = this._objects.length; i < r; i++)
        this._objects[i].render(A);
      this._drawClipPath(A, this.clipPath);
    }, isCacheDirty: function(A) {
      if (this.callSuper("isCacheDirty", A))
        return !0;
      if (!this.statefullCache)
        return !1;
      for (var i = 0, r = this._objects.length; i < r; i++)
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
        var r = this.toObject();
        delete r.objects;
        var h = new s.ActiveSelection([]);
        return h.set(r), h.type = "activeSelection", i.remove(this), A.forEach(function(a) {
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
      for (var i, r, h, a, c = [], f = [], w = ["tr", "br", "bl", "tl"], C = 0, x = this._objects.length, U = w.length; C < x; ++C) {
        for (h = (i = this._objects[C]).calcACoords(), a = 0; a < U; a++)
          r = w[a], c.push(h[r].x), f.push(h[r].y);
        i.aCoords = h;
      }
      this._getBounds(c, f, A);
    }, _getBounds: function(A, i, r) {
      var h = new s.Point(o(A), o(i)), a = new s.Point(d(A), d(i)), c = h.y || 0, f = h.x || 0, w = a.x - h.x || 0, C = a.y - h.y || 0;
      this.width = w, this.height = C, r || this.setPositionByOrigin({ x: f, y: c }, "left", "top");
    }, _toSVG: function(A) {
      for (var i = ["<g ", "COMMON_PARTS", ` >
`], r = 0, h = this._objects.length; r < h; r++)
        i.push("		", this._objects[r].toSVG(A));
      return i.push(`</g>
`), i;
    }, getSvgStyles: function() {
      var A = this.opacity !== void 0 && this.opacity !== 1 ? "opacity: " + this.opacity + ";" : "", i = this.visible ? "" : " visibility: hidden;";
      return [A, this.getSvgFilter(), i].join("");
    }, toClipPathSVG: function(A) {
      for (var i = [], r = 0, h = this._objects.length; r < h; r++)
        i.push("	", this._objects[r].toClipPathSVG(A));
      return this._createBaseClipPathSVGMarkup(i, { reviver: A });
    } }), s.Group.fromObject = function(A, i) {
      var r = A.objects, h = s.util.object.clone(A, !0);
      delete h.objects, typeof r != "string" ? s.util.enlivenObjects(r, function(a) {
        s.util.enlivenObjectEnlivables(A, h, function() {
          i && i(new s.Group(a, h, !0));
        });
      }) : s.loadSVGFromURL(r, function(a) {
        var c = s.util.groupSVGElements(a, A, r), f = h.clipPath;
        delete h.clipPath, c.set(h), f ? s.util.enlivenObjects([f], function(w) {
          c.clipPath = w[0], i && i(c);
        }) : i && i(c);
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
      if (delete d.type, A.set(d), o.forEach(function(r) {
        r.canvas.remove(r), r.group = A;
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
      for (var i = 0, r = this._objects.length; i < r; i++)
        this._objects[i]._renderControls(o, A);
      o.restore();
    } }), s.ActiveSelection.fromObject = function(o, d) {
      s.util.enlivenObjects(o.objects, function(A) {
        delete o.objects, d && d(new s.ActiveSelection(A, o, !0));
      });
    });
  }(e), function(u) {
    var s = p.util.object.extend;
    u.fabric || (u.fabric = {}), u.fabric.Image ? p.warn("fabric.Image is already defined.") : (p.Image = p.util.createClass(p.Object, { type: "image", strokeWidth: 0, srcFromAttribute: !1, _lastScaleX: 1, _lastScaleY: 1, _filterScalingX: 1, _filterScalingY: 1, minimumScaleTrigger: 0.5, stateProperties: p.Object.prototype.stateProperties.concat("cropX", "cropY"), cacheProperties: p.Object.prototype.cacheProperties.concat("cropX", "cropY"), cacheKey: "", cropX: 0, cropY: 0, imageSmoothing: !0, initialize: function(o, d) {
      d || (d = {}), this.filters = [], this.cacheKey = "texture" + p.Object.__uid++, this.callSuper("initialize", d), this._initElement(o, d);
    }, getElement: function() {
      return this._element || {};
    }, setElement: function(o, d) {
      return this.removeTexture(this.cacheKey), this.removeTexture(this.cacheKey + "_filtered"), this._element = o, this._originalElement = o, this._initConfig(d), this.filters.length !== 0 && this.applyFilters(), this.resizeFilter && this.applyResizeFilters(), this;
    }, removeTexture: function(o) {
      var d = p.filterBackend;
      d && d.evictCachesForKey && d.evictCachesForKey(o);
    }, dispose: function() {
      this.callSuper("dispose"), this.removeTexture(this.cacheKey), this.removeTexture(this.cacheKey + "_filtered"), this._cacheContext = void 0, ["_originalElement", "_element", "_filteredEl", "_cacheCanvas"].forEach((function(o) {
        p.util.cleanUpJsdomNode(this[o]), this[o] = void 0;
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
      var o, d = [], A = [], i = this._element, r = -this.width / 2, h = -this.height / 2, a = "", c = "";
      if (!i)
        return [];
      if (this.hasCrop()) {
        var f = p.Object.__uid++;
        d.push('<clipPath id="imageCrop_' + f + `">
`, '	<rect x="' + r + '" y="' + h + '" width="' + this.width + '" height="' + this.height + `" />
`, `</clipPath>
`), a = ' clip-path="url(#imageCrop_' + f + ')" ';
      }
      if (this.imageSmoothing || (c = '" image-rendering="optimizeSpeed'), A.push("	<image ", "COMMON_PARTS", 'xlink:href="', this.getSvgSrc(!0), '" x="', r - this.cropX, '" y="', h - this.cropY, '" width="', i.width || i.naturalWidth, '" height="', i.height || i.height, c, '"', a, `></image>
`), this.stroke || this.strokeDashArray) {
        var w = this.fill;
        this.fill = null, o = ["	<rect ", 'x="', r, '" y="', h, '" width="', this.width, '" height="', this.height, '" style="', this.getSvgStyles(), `"/>
`], this.fill = w;
      }
      return d = this.paintFirst !== "fill" ? d.concat(o, A) : d.concat(A, o);
    }, getSrc: function(o) {
      var d = o ? this._element : this._originalElement;
      return d ? d.toDataURL ? d.toDataURL() : this.srcFromAttribute ? d.getAttribute("src") : d.src : this.src || "";
    }, setSrc: function(o, d, A) {
      return p.util.loadImage(o, function(i, r) {
        this.setElement(i, A), this._setWidthHeight(), d && d(this, r);
      }, this, A && A.crossOrigin), this;
    }, toString: function() {
      return '#<fabric.Image: { src: "' + this.getSrc() + '" }>';
    }, applyResizeFilters: function() {
      var o = this.resizeFilter, d = this.minimumScaleTrigger, A = this.getTotalObjectScaling(), i = A.scaleX, r = A.scaleY, h = this._filteredEl || this._originalElement;
      if (this.group && this.set("dirty", !0), !o || i > d && r > d)
        return this._element = h, this._filterScalingX = 1, this._filterScalingY = 1, this._lastScaleX = i, void (this._lastScaleY = r);
      p.filterBackend || (p.filterBackend = p.initFilterBackend());
      var a = p.util.createCanvasElement(), c = this._filteredEl ? this.cacheKey + "_filtered" : this.cacheKey, f = h.width, w = h.height;
      a.width = f, a.height = w, this._element = a, this._lastScaleX = o.scaleX = i, this._lastScaleY = o.scaleY = r, p.filterBackend.applyFilters([o], h, f, w, this._element, c), this._filterScalingX = a.width / this._originalElement.width, this._filterScalingY = a.height / this._originalElement.height;
    }, applyFilters: function(o) {
      if (o = (o = o || this.filters || []).filter(function(h) {
        return h && !h.isNeutralState();
      }), this.set("dirty", !0), this.removeTexture(this.cacheKey + "_filtered"), o.length === 0)
        return this._element = this._originalElement, this._filteredEl = null, this._filterScalingX = 1, this._filterScalingY = 1, this;
      var d = this._originalElement, A = d.naturalWidth || d.width, i = d.naturalHeight || d.height;
      if (this._element === this._originalElement) {
        var r = p.util.createCanvasElement();
        r.width = A, r.height = i, this._element = r, this._filteredEl = r;
      } else
        this._element = this._filteredEl, this._filteredEl.getContext("2d").clearRect(0, 0, A, i), this._lastScaleX = 1, this._lastScaleY = 1;
      return p.filterBackend || (p.filterBackend = p.initFilterBackend()), p.filterBackend.applyFilters(o, this._originalElement, A, i, this._element, this.cacheKey), this._originalElement.width === this._element.width && this._originalElement.height === this._element.height || (this._filterScalingX = this._element.width / this._originalElement.width, this._filterScalingY = this._element.height / this._originalElement.height), this;
    }, _render: function(o) {
      p.util.setImageSmoothing(o, this.imageSmoothing), this.isMoving !== !0 && this.resizeFilter && this._needsResize() && this.applyResizeFilters(), this._stroke(o), this._renderPaintInOrder(o);
    }, drawCacheOnCanvas: function(o) {
      p.util.setImageSmoothing(o, this.imageSmoothing), p.Object.prototype.drawCacheOnCanvas.call(this, o);
    }, shouldCache: function() {
      return this.needsItsOwnCache();
    }, _renderFill: function(o) {
      var d = this._element;
      if (d) {
        var A = this._filterScalingX, i = this._filterScalingY, r = this.width, h = this.height, a = Math.min, c = Math.max, f = c(this.cropX, 0), w = c(this.cropY, 0), C = d.naturalWidth || d.width, x = d.naturalHeight || d.height, U = f * A, F = w * i, k = a(r * A, C - U), H = a(h * i, x - F), L = -r / 2, K = -h / 2, W = a(r, C / A - f), V = a(h, x / i - w);
        d && o.drawImage(d, U, F, k, H, L, K, W, V);
      }
    }, _needsResize: function() {
      var o = this.getTotalObjectScaling();
      return o.scaleX !== this._lastScaleX || o.scaleY !== this._lastScaleY;
    }, _resetWidthHeight: function() {
      this.set(this.getOriginalSize());
    }, _initElement: function(o, d) {
      this.setElement(p.util.getById(o), d), p.util.addClass(this.getElement(), p.Image.CSS_CANVAS);
    }, _initConfig: function(o) {
      o || (o = {}), this.setOptions(o), this._setWidthHeight(o);
    }, _initFilters: function(o, d) {
      o && o.length ? p.util.enlivenObjects(o, function(A) {
        d && d(A);
      }, "fabric.Image.filters") : d && d();
    }, _setWidthHeight: function(o) {
      o || (o = {});
      var d = this.getElement();
      this.width = o.width || d.naturalWidth || d.width || 0, this.height = o.height || d.naturalHeight || d.height || 0;
    }, parsePreserveAspectRatioAttribute: function() {
      var o, d = p.util.parsePreserveAspectRatioAttribute(this.preserveAspectRatio || ""), A = this._element.width, i = this._element.height, r = 1, h = 1, a = 0, c = 0, f = 0, w = 0, C = this.width, x = this.height, U = { width: C, height: x };
      return !d || d.alignX === "none" && d.alignY === "none" ? (r = C / A, h = x / i) : (d.meetOrSlice === "meet" && (o = (C - A * (r = h = p.util.findScaleToFit(this._element, U))) / 2, d.alignX === "Min" && (a = -o), d.alignX === "Max" && (a = o), o = (x - i * h) / 2, d.alignY === "Min" && (c = -o), d.alignY === "Max" && (c = o)), d.meetOrSlice === "slice" && (o = A - C / (r = h = p.util.findScaleToCover(this._element, U)), d.alignX === "Mid" && (f = o / 2), d.alignX === "Max" && (f = o), o = i - x / h, d.alignY === "Mid" && (w = o / 2), d.alignY === "Max" && (w = o), A = C / r, i = x / h)), { width: A, height: i, scaleX: r, scaleY: h, offsetLeft: a, offsetTop: c, cropX: f, cropY: w };
    } }), p.Image.CSS_CANVAS = "canvas-img", p.Image.prototype.getSvgSrc = p.Image.prototype.getSrc, p.Image.fromObject = function(o, d) {
      var A = p.util.object.clone(o);
      p.util.loadImage(A.src, function(i, r) {
        r ? d && d(null, !0) : p.Image.prototype._initFilters.call(A, A.filters, function(h) {
          A.filters = h || [], p.Image.prototype._initFilters.call(A, [A.resizeFilter], function(a) {
            A.resizeFilter = a[0], p.util.enlivenObjectEnlivables(A, A, function() {
              var c = new p.Image(i, A);
              d(c, !1);
            });
          });
        });
      }, null, A.crossOrigin);
    }, p.Image.fromURL = function(o, d, A) {
      p.util.loadImage(o, function(i, r) {
        d && d(new p.Image(i, A), r);
      }, null, A && A.crossOrigin);
    }, p.Image.ATTRIBUTE_NAMES = p.SHARED_ATTRIBUTES.concat("x y width height preserveAspectRatio xlink:href crossOrigin image-rendering".split(" ")), p.Image.fromElement = function(o, d, A) {
      var i = p.parseAttributes(o, p.Image.ATTRIBUTE_NAMES);
      p.Image.fromURL(i["xlink:href"], d, s(A ? p.util.object.clone(A) : {}, i));
    });
  }(e), p.util.object.extend(p.Object.prototype, { _getAngleValueForStraighten: function() {
    var u = this.angle % 360;
    return u > 0 ? 90 * Math.round((u - 1) / 90) : 90 * Math.round(u / 90);
  }, straighten: function() {
    return this.rotate(this._getAngleValueForStraighten());
  }, fxStraighten: function(u) {
    var s = function() {
    }, o = (u = u || {}).onComplete || s, d = u.onChange || s, A = this;
    return p.util.animate({ target: this, startValue: this.get("angle"), endValue: this._getAngleValueForStraighten(), duration: this.FX_DURATION, onChange: function(i) {
      A.rotate(i), d();
    }, onComplete: function() {
      A.setCoords(), o();
    } });
  } }), p.util.object.extend(p.StaticCanvas.prototype, { straightenObject: function(u) {
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
    p.isWebglSupported = function(o) {
      if (p.isLikelyNode)
        return !1;
      o = o || p.WebglFilterBackend.prototype.tileSize;
      var d = document.createElement("canvas"), A = d.getContext("webgl") || d.getContext("experimental-webgl"), i = !1;
      if (A) {
        p.maxTextureSize = A.getParameter(A.MAX_TEXTURE_SIZE), i = p.maxTextureSize >= o;
        for (var r = ["highp", "mediump", "lowp"], h = 0; h < 3; h++)
          if (u(A, r[h])) {
            p.webGlPrecision = r[h];
            break;
          }
      }
      return this.isSupported = i, i;
    }, p.WebglFilterBackend = s, s.prototype = { tileSize: 2048, resources: {}, setupGLContext: function(o, d) {
      this.dispose(), this.createWebGLCanvas(o, d), this.aPosition = new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]), this.chooseFastestCopyGLTo2DMethod(o, d);
    }, chooseFastestCopyGLTo2DMethod: function(o, d) {
      var A, i = window.performance !== void 0;
      try {
        new ImageData(1, 1), A = !0;
      } catch {
        A = !1;
      }
      var r = typeof ArrayBuffer < "u", h = typeof Uint8ClampedArray < "u";
      if (i && A && r && h) {
        var a = p.util.createCanvasElement(), c = new ArrayBuffer(o * d * 4);
        if (p.forceGLPutImageData)
          return this.imageBuffer = c, void (this.copyGLTo2D = oA);
        var f, w, C = { imageBuffer: c, destinationWidth: o, destinationHeight: d, targetCanvas: a };
        a.width = o, a.height = d, f = window.performance.now(), rA.call(C, this.gl, C), w = window.performance.now() - f, f = window.performance.now(), oA.call(C, this.gl, C), w > window.performance.now() - f ? (this.imageBuffer = c, this.copyGLTo2D = oA) : this.copyGLTo2D = rA;
      }
    }, createWebGLCanvas: function(o, d) {
      var A = p.util.createCanvasElement();
      A.width = o, A.height = d;
      var i = { alpha: !0, premultipliedAlpha: !1, depth: !1, stencil: !1, antialias: !1 }, r = A.getContext("webgl", i);
      r || (r = A.getContext("experimental-webgl", i)), r && (r.clearColor(0, 0, 0, 0), this.canvas = A, this.gl = r);
    }, applyFilters: function(o, d, A, i, r, h) {
      var a, c = this.gl;
      h && (a = this.getCachedTexture(h, d));
      var f = { originalWidth: d.width || d.originalWidth, originalHeight: d.height || d.originalHeight, sourceWidth: A, sourceHeight: i, destinationWidth: A, destinationHeight: i, context: c, sourceTexture: this.createTexture(c, A, i, !a && d), targetTexture: this.createTexture(c, A, i), originalTexture: a || this.createTexture(c, A, i, !a && d), passes: o.length, webgl: !0, aPosition: this.aPosition, programCache: this.programCache, pass: 0, filterBackend: this, targetCanvas: r }, w = c.createFramebuffer();
      return c.bindFramebuffer(c.FRAMEBUFFER, w), o.forEach(function(C) {
        C && C.applyTo(f);
      }), function(C) {
        var x = C.targetCanvas, U = x.width, F = x.height, k = C.destinationWidth, H = C.destinationHeight;
        U === k && F === H || (x.width = k, x.height = H);
      }(f), this.copyGLTo2D(c, f), c.bindTexture(c.TEXTURE_2D, null), c.deleteTexture(f.sourceTexture), c.deleteTexture(f.targetTexture), c.deleteFramebuffer(w), r.getContext("2d").setTransform(1, 0, 0, 1, 0, 0), f;
    }, dispose: function() {
      this.canvas && (this.canvas = null, this.gl = null), this.clearWebGLCaches();
    }, clearWebGLCaches: function() {
      this.programCache = {}, this.textureCache = {};
    }, createTexture: function(o, d, A, i, r) {
      var h = o.createTexture();
      return o.bindTexture(o.TEXTURE_2D, h), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MAG_FILTER, r || o.NEAREST), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MIN_FILTER, r || o.NEAREST), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_S, o.CLAMP_TO_EDGE), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_T, o.CLAMP_TO_EDGE), i ? o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, o.RGBA, o.UNSIGNED_BYTE, i) : o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, d, A, 0, o.RGBA, o.UNSIGNED_BYTE, null), h;
    }, getCachedTexture: function(o, d) {
      if (this.textureCache[o])
        return this.textureCache[o];
      var A = this.createTexture(this.gl, d.width, d.height, d);
      return this.textureCache[o] = A, A;
    }, evictCachesForKey: function(o) {
      this.textureCache[o] && (this.gl.deleteTexture(this.textureCache[o]), delete this.textureCache[o]);
    }, copyGLTo2D: rA, captureGPUInfo: function() {
      if (this.gpuInfo)
        return this.gpuInfo;
      var o = this.gl, d = { renderer: "", vendor: "" };
      if (!o)
        return d;
      var A = o.getExtension("WEBGL_debug_renderer_info");
      if (A) {
        var i = o.getParameter(A.UNMASKED_RENDERER_WEBGL), r = o.getParameter(A.UNMASKED_VENDOR_WEBGL);
        i && (d.renderer = i.toLowerCase()), r && (d.vendor = r.toLowerCase());
      }
      return this.gpuInfo = d, d;
    } };
  }(), function() {
    var u = function() {
    };
    function s() {
    }
    p.Canvas2dFilterBackend = s, s.prototype = { evictCachesForKey: u, dispose: u, clearWebGLCaches: u, resources: {}, applyFilters: function(o, d, A, i, r) {
      var h = r.getContext("2d");
      h.drawImage(d, 0, 0, A, i);
      var a = { sourceWidth: A, sourceHeight: i, imageData: h.getImageData(0, 0, A, i), originalEl: d, originalImageData: h.getImageData(0, 0, A, i), canvasEl: r, ctx: h, filterBackend: this };
      return o.forEach(function(c) {
        c.applyTo(a);
      }), a.imageData.width === A && a.imageData.height === i || (r.width = a.imageData.width, r.height = a.imageData.height), h.putImageData(a.imageData, 0, 0), a;
    } };
  }(), p.Image = p.Image || {}, p.Image.filters = p.Image.filters || {}, p.Image.filters.BaseFilter = p.util.createClass({ type: "BaseFilter", vertexSource: `attribute vec2 aPosition;
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
    s = s || this.fragmentSource, o = o || this.vertexSource, p.webGlPrecision !== "highp" && (s = s.replace(/precision highp float/g, "precision " + p.webGlPrecision + " float"));
    var d = u.createShader(u.VERTEX_SHADER);
    if (u.shaderSource(d, o), u.compileShader(d), !u.getShaderParameter(d, u.COMPILE_STATUS))
      throw new Error("Vertex shader compile error for " + this.type + ": " + u.getShaderInfoLog(d));
    var A = u.createShader(u.FRAGMENT_SHADER);
    if (u.shaderSource(A, s), u.compileShader(A), !u.getShaderParameter(A, u.COMPILE_STATUS))
      throw new Error("Fragment shader compile error for " + this.type + ": " + u.getShaderInfoLog(A));
    var i = u.createProgram();
    if (u.attachShader(i, d), u.attachShader(i, A), u.linkProgram(i), !u.getProgramParameter(i, u.LINK_STATUS))
      throw new Error('Shader link error for "${this.type}" ' + u.getProgramInfoLog(i));
    var r = this.getAttributeLocations(u, i), h = this.getUniformLocations(u, i) || {};
    return h.uStepW = u.getUniformLocation(i, "uStepW"), h.uStepH = u.getUniformLocation(i, "uStepH"), { program: i, attributeLocations: r, uniformLocations: h };
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
    var u = this.mainParameter, s = p.Image.filters[this.type].prototype;
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
  } }), p.Image.filters.BaseFilter.fromObject = function(u, s) {
    var o = new p.Image.filters[u.type](u);
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
      var i, r, h, a, c, f = A.imageData.data, w = f.length, C = this.matrix, x = this.colorsOnly;
      for (c = 0; c < w; c += 4)
        i = f[c], r = f[c + 1], h = f[c + 2], x ? (f[c] = i * C[0] + r * C[1] + h * C[2] + 255 * C[4], f[c + 1] = i * C[5] + r * C[6] + h * C[7] + 255 * C[9], f[c + 2] = i * C[10] + r * C[11] + h * C[12] + 255 * C[14]) : (a = f[c + 3], f[c] = i * C[0] + r * C[1] + h * C[2] + a * C[3] + 255 * C[4], f[c + 1] = i * C[5] + r * C[6] + h * C[7] + a * C[8] + 255 * C[9], f[c + 2] = i * C[10] + r * C[11] + h * C[12] + a * C[13] + 255 * C[14], f[c + 3] = i * C[15] + r * C[16] + h * C[17] + a * C[18] + 255 * C[19]);
    }, getUniformLocations: function(A, i) {
      return { uColorMatrix: A.getUniformLocation(i, "uColorMatrix"), uConstants: A.getUniformLocation(i, "uConstants") };
    }, sendUniformData: function(A, i) {
      var r = this.matrix, h = [r[0], r[1], r[2], r[3], r[5], r[6], r[7], r[8], r[10], r[11], r[12], r[13], r[15], r[16], r[17], r[18]], a = [r[4], r[9], r[14], r[19]];
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
        var i, r = A.imageData.data, h = r.length, a = Math.round(255 * this.brightness);
        for (i = 0; i < h; i += 4)
          r[i] = r[i] + a, r[i + 1] = r[i + 1] + a, r[i + 2] = r[i + 2] + a;
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
      var r = Math.sqrt(this.matrix.length), h = this.type + "_" + r + "_" + (this.opaque ? 1 : 0), a = this.fragmentSource[h];
      return i.programCache.hasOwnProperty(h) || (i.programCache[h] = this.createProgram(i.context, a)), i.programCache[h];
    }, applyTo2d: function(i) {
      var r, h, a, c, f, w, C, x, U, F, k, H, L, K = i.imageData, W = K.data, V = this.matrix, _ = Math.round(Math.sqrt(V.length)), S = Math.floor(_ / 2), P = K.width, G = K.height, X = i.ctx.createImageData(P, G), D = X.data, T = this.opaque ? 1 : 0;
      for (k = 0; k < G; k++)
        for (F = 0; F < P; F++) {
          for (f = 4 * (k * P + F), r = 0, h = 0, a = 0, c = 0, L = 0; L < _; L++)
            for (H = 0; H < _; H++)
              w = F + H - S, (C = k + L - S) < 0 || C >= G || w < 0 || w >= P || (x = 4 * (C * P + w), U = V[L * _ + H], r += W[x] * U, h += W[x + 1] * U, a += W[x + 2] * U, T || (c += W[x + 3] * U));
          D[f] = r, D[f + 1] = h, D[f + 2] = a, D[f + 3] = T ? W[f + 3] : c;
        }
      i.imageData = X;
    }, getUniformLocations: function(i, r) {
      return { uMatrix: i.getUniformLocation(r, "uMatrix"), uOpaque: i.getUniformLocation(r, "uOpaque"), uHalfSize: i.getUniformLocation(r, "uHalfSize"), uSize: i.getUniformLocation(r, "uSize") };
    }, sendUniformData: function(i, r) {
      i.uniform1fv(r.uMatrix, this.matrix);
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
      var i, r, h = A.imageData.data, a = h.length, c = this.mode;
      for (i = 0; i < a; i += 4)
        c === "average" ? r = (h[i] + h[i + 1] + h[i + 2]) / 3 : c === "lightness" ? r = (Math.min(h[i], h[i + 1], h[i + 2]) + Math.max(h[i], h[i + 1], h[i + 2])) / 2 : c === "luminosity" && (r = 0.21 * h[i] + 0.72 * h[i + 1] + 0.07 * h[i + 2]), h[i] = r, h[i + 1] = r, h[i + 2] = r;
    }, retrieveShader: function(A) {
      var i = this.type + "_" + this.mode;
      if (!A.programCache.hasOwnProperty(i)) {
        var r = this.fragmentSource[this.mode];
        A.programCache[i] = this.createProgram(A.context, r);
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
      var i, r = A.imageData.data, h = r.length;
      for (i = 0; i < h; i += 4)
        r[i] = 255 - r[i], r[i + 1] = 255 - r[i + 1], r[i + 2] = 255 - r[i + 2];
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
        var r, h, a = i.imageData.data, c = a.length, f = this.noise;
        for (r = 0, c = a.length; r < c; r += 4)
          h = (0.5 - Math.random()) * f, a[r] += h, a[r + 1] += h, a[r + 2] += h;
      }
    }, getUniformLocations: function(i, r) {
      return { uNoise: i.getUniformLocation(r, "uNoise"), uSeed: i.getUniformLocation(r, "uSeed") };
    }, sendUniformData: function(i, r) {
      i.uniform1f(r.uNoise, this.noise / 255), i.uniform1f(r.uSeed, Math.random());
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
      var i, r, h, a, c, f, w, C, x, U, F, k = A.imageData, H = k.data, L = k.height, K = k.width;
      for (r = 0; r < L; r += this.blocksize)
        for (h = 0; h < K; h += this.blocksize)
          for (a = H[i = 4 * r * K + 4 * h], c = H[i + 1], f = H[i + 2], w = H[i + 3], U = Math.min(r + this.blocksize, L), F = Math.min(h + this.blocksize, K), C = r; C < U; C++)
            for (x = h; x < F; x++)
              H[i = 4 * C * K + 4 * x] = a, H[i + 1] = c, H[i + 2] = f, H[i + 3] = w;
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
      var r, h, a, c, f = i.imageData.data, w = 255 * this.distance, C = new s.Color(this.color).getSource(), x = [C[0] - w, C[1] - w, C[2] - w], U = [C[0] + w, C[1] + w, C[2] + w];
      for (r = 0; r < f.length; r += 4)
        h = f[r], a = f[r + 1], c = f[r + 2], h > x[0] && a > x[1] && c > x[2] && h < U[0] && a < U[1] && c < U[2] && (f[r + 3] = 0);
    }, getUniformLocations: function(i, r) {
      return { uLow: i.getUniformLocation(r, "uLow"), uHigh: i.getUniformLocation(r, "uHigh") };
    }, sendUniformData: function(i, r) {
      var h = new s.Color(this.color).getSource(), a = parseFloat(this.distance), c = [0 + h[0] / 255 - a, 0 + h[1] / 255 - a, 0 + h[2] / 255 - a, 1], f = [h[0] / 255 + a, h[1] / 255 + a, h[2] / 255 + a, 1];
      i.uniform4fv(r.uLow, c), i.uniform4fv(r.uHigh, f);
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
      var i, r = this.type + "_" + this.mode;
      return A.programCache.hasOwnProperty(r) || (i = this.buildSource(this.mode), A.programCache[r] = this.createProgram(A.context, i)), A.programCache[r];
    }, applyTo2d: function(A) {
      var i, r, h, a, c, f, w, C = A.imageData.data, x = C.length, U = 1 - this.alpha;
      i = (w = new s.Color(this.color).getSource())[0] * this.alpha, r = w[1] * this.alpha, h = w[2] * this.alpha;
      for (var F = 0; F < x; F += 4)
        switch (a = C[F], c = C[F + 1], f = C[F + 2], this.mode) {
          case "multiply":
            C[F] = a * i / 255, C[F + 1] = c * r / 255, C[F + 2] = f * h / 255;
            break;
          case "screen":
            C[F] = 255 - (255 - a) * (255 - i) / 255, C[F + 1] = 255 - (255 - c) * (255 - r) / 255, C[F + 2] = 255 - (255 - f) * (255 - h) / 255;
            break;
          case "add":
            C[F] = a + i, C[F + 1] = c + r, C[F + 2] = f + h;
            break;
          case "diff":
          case "difference":
            C[F] = Math.abs(a - i), C[F + 1] = Math.abs(c - r), C[F + 2] = Math.abs(f - h);
            break;
          case "subtract":
            C[F] = a - i, C[F + 1] = c - r, C[F + 2] = f - h;
            break;
          case "darken":
            C[F] = Math.min(a, i), C[F + 1] = Math.min(c, r), C[F + 2] = Math.min(f, h);
            break;
          case "lighten":
            C[F] = Math.max(a, i), C[F + 1] = Math.max(c, r), C[F + 2] = Math.max(f, h);
            break;
          case "overlay":
            C[F] = i < 128 ? 2 * a * i / 255 : 255 - 2 * (255 - a) * (255 - i) / 255, C[F + 1] = r < 128 ? 2 * c * r / 255 : 255 - 2 * (255 - c) * (255 - r) / 255, C[F + 2] = h < 128 ? 2 * f * h / 255 : 255 - 2 * (255 - f) * (255 - h) / 255;
            break;
          case "exclusion":
            C[F] = i + a - 2 * i * a / 255, C[F + 1] = r + c - 2 * r * c / 255, C[F + 2] = h + f - 2 * h * f / 255;
            break;
          case "tint":
            C[F] = i + a * U, C[F + 1] = r + c * U, C[F + 2] = h + f * U;
        }
    }, getUniformLocations: function(A, i) {
      return { uColor: A.getUniformLocation(i, "uColor") };
    }, sendUniformData: function(A, i) {
      var r = new s.Color(this.color).getSource();
      r[0] = this.alpha * r[0] / 255, r[1] = this.alpha * r[1] / 255, r[2] = this.alpha * r[2] / 255, r[3] = this.alpha, A.uniform4fv(i.uColor, r);
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
      var i = this.type + "_" + this.mode, r = this.fragmentSource[this.mode];
      return A.programCache.hasOwnProperty(i) || (A.programCache[i] = this.createProgram(A.context, r)), A.programCache[i];
    }, applyToWebGL: function(A) {
      var i = A.context, r = this.createTexture(A.filterBackend, this.image);
      this.bindAdditionalTexture(i, r, i.TEXTURE1), this.callSuper("applyToWebGL", A), this.unbindAdditionalTexture(i, i.TEXTURE1);
    }, createTexture: function(A, i) {
      return A.getCachedTexture(i.cacheKey, i._element);
    }, calculateMatrix: function() {
      var A = this.image, i = A._element.width, r = A._element.height;
      return [1 / A.scaleX, 0, 0, 0, 1 / A.scaleY, 0, -A.left / i, -A.top / r, 1];
    }, applyTo2d: function(A) {
      var i, r, h, a, c, f, w, C, x, U, F, k = A.imageData, H = A.filterBackend.resources, L = k.data, K = L.length, W = k.width, V = k.height, _ = this.image;
      H.blendImage || (H.blendImage = s.util.createCanvasElement()), U = (x = H.blendImage).getContext("2d"), x.width !== W || x.height !== V ? (x.width = W, x.height = V) : U.clearRect(0, 0, W, V), U.setTransform(_.scaleX, 0, 0, _.scaleY, _.left, _.top), U.drawImage(_._element, 0, 0, W, V), F = U.getImageData(0, 0, W, V).data;
      for (var S = 0; S < K; S += 4)
        switch (c = L[S], f = L[S + 1], w = L[S + 2], C = L[S + 3], i = F[S], r = F[S + 1], h = F[S + 2], a = F[S + 3], this.mode) {
          case "multiply":
            L[S] = c * i / 255, L[S + 1] = f * r / 255, L[S + 2] = w * h / 255, L[S + 3] = C * a / 255;
            break;
          case "mask":
            L[S + 3] = a;
        }
    }, getUniformLocations: function(A, i) {
      return { uTransformMatrix: A.getUniformLocation(i, "uTransformMatrix"), uImage: A.getUniformLocation(i, "uImage") };
    }, sendUniformData: function(A, i) {
      var r = this.calculateMatrix();
      A.uniform1i(i.uImage, 1), A.uniformMatrix3fv(i.uTransformMatrix, !1, r);
    }, toObject: function() {
      return { type: this.type, image: this.image && this.image.toObject(), mode: this.mode, alpha: this.alpha };
    } }), s.Image.filters.BlendImage.fromObject = function(A, i) {
      s.Image.fromObject(A.image, function(r) {
        var h = s.util.object.clone(A);
        h.image = r, i(new s.Image.filters.BlendImage(h));
      });
    };
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = Math.pow, d = Math.floor, A = Math.sqrt, i = Math.abs, r = Math.round, h = Math.sin, a = Math.ceil, c = s.Image.filters, f = s.util.createClass;
    c.Resize = f(c.BaseFilter, { type: "Resize", resizeType: "hermite", scaleX: 1, scaleY: 1, lanczosLobes: 3, getUniformLocations: function(w, C) {
      return { uDelta: w.getUniformLocation(C, "uDelta"), uTaps: w.getUniformLocation(C, "uTaps") };
    }, sendUniformData: function(w, C) {
      w.uniform2fv(C.uDelta, this.horizontal ? [1 / this.width, 0] : [0, 1 / this.height]), w.uniform1fv(C.uTaps, this.taps);
    }, retrieveShader: function(w) {
      var C = this.getFilterWindow(), x = this.type + "_" + C;
      if (!w.programCache.hasOwnProperty(x)) {
        var U = this.generateShader(C);
        w.programCache[x] = this.createProgram(w.context, U);
      }
      return w.programCache[x];
    }, getFilterWindow: function() {
      var w = this.tempScale;
      return Math.ceil(this.lanczosLobes / w);
    }, getTaps: function() {
      for (var w = this.lanczosCreate(this.lanczosLobes), C = this.tempScale, x = this.getFilterWindow(), U = new Array(x), F = 1; F <= x; F++)
        U[F - 1] = w(F * C);
      return U;
    }, generateShader: function(w) {
      for (var C = new Array(w), x = this.fragmentSourceTOP, U = 1; U <= w; U++)
        C[U - 1] = U + ".0 * uDelta";
      return x += "uniform float uTaps[" + w + `];
`, x += `void main() {
`, x += `  vec4 color = texture2D(uTexture, vTexCoord);
`, x += `  float sum = 1.0;
`, C.forEach(function(F, k) {
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
`, applyTo: function(w) {
      w.webgl ? (w.passes++, this.width = w.sourceWidth, this.horizontal = !0, this.dW = Math.round(this.width * this.scaleX), this.dH = w.sourceHeight, this.tempScale = this.dW / this.width, this.taps = this.getTaps(), w.destinationWidth = this.dW, this._setupFrameBuffer(w), this.applyToWebGL(w), this._swapTextures(w), w.sourceWidth = w.destinationWidth, this.height = w.sourceHeight, this.horizontal = !1, this.dH = Math.round(this.height * this.scaleY), this.tempScale = this.dH / this.height, this.taps = this.getTaps(), w.destinationHeight = this.dH, this._setupFrameBuffer(w), this.applyToWebGL(w), this._swapTextures(w), w.sourceHeight = w.destinationHeight) : this.applyTo2d(w);
    }, isNeutralState: function() {
      return this.scaleX === 1 && this.scaleY === 1;
    }, lanczosCreate: function(w) {
      return function(C) {
        if (C >= w || C <= -w)
          return 0;
        if (C < 11920929e-14 && C > -11920929e-14)
          return 1;
        var x = (C *= Math.PI) / w;
        return h(C) / C * h(x) / x;
      };
    }, applyTo2d: function(w) {
      var C = w.imageData, x = this.scaleX, U = this.scaleY;
      this.rcpScaleX = 1 / x, this.rcpScaleY = 1 / U;
      var F, k = C.width, H = C.height, L = r(k * x), K = r(H * U);
      this.resizeType === "sliceHack" ? F = this.sliceByTwo(w, k, H, L, K) : this.resizeType === "hermite" ? F = this.hermiteFastResize(w, k, H, L, K) : this.resizeType === "bilinear" ? F = this.bilinearFiltering(w, k, H, L, K) : this.resizeType === "lanczos" && (F = this.lanczosResize(w, k, H, L, K)), w.imageData = F;
    }, sliceByTwo: function(w, C, x, U, F) {
      var k, H, L = w.imageData, K = 0.5, W = !1, V = !1, _ = C * K, S = x * K, P = s.filterBackend.resources, G = 0, X = 0, D = C, T = 0;
      for (P.sliceByTwo || (P.sliceByTwo = document.createElement("canvas")), ((k = P.sliceByTwo).width < 1.5 * C || k.height < x) && (k.width = 1.5 * C, k.height = x), (H = k.getContext("2d")).clearRect(0, 0, 1.5 * C, x), H.putImageData(L, 0, 0), U = d(U), F = d(F); !W || !V; )
        C = _, x = S, U < d(_ * K) ? _ = d(_ * K) : (_ = U, W = !0), F < d(S * K) ? S = d(S * K) : (S = F, V = !0), H.drawImage(k, G, X, C, x, D, T, _, S), G = D, X = T, T += S;
      return H.getImageData(G, X, U, F);
    }, lanczosResize: function(w, C, x, U, F) {
      var k = w.imageData.data, H = w.ctx.createImageData(U, F), L = H.data, K = this.lanczosCreate(this.lanczosLobes), W = this.rcpScaleX, V = this.rcpScaleY, _ = 2 / this.rcpScaleX, S = 2 / this.rcpScaleY, P = a(W * this.lanczosLobes / 2), G = a(V * this.lanczosLobes / 2), X = {}, D = {}, T = {};
      return function j(Y) {
        var N, z, Z, tA, eA, q, iA, J, lA, nA, hA;
        for (D.x = (Y + 0.5) * W, T.x = d(D.x), N = 0; N < F; N++) {
          for (D.y = (N + 0.5) * V, T.y = d(D.y), eA = 0, q = 0, iA = 0, J = 0, lA = 0, z = T.x - P; z <= T.x + P; z++)
            if (!(z < 0 || z >= C)) {
              nA = d(1e3 * i(z - D.x)), X[nA] || (X[nA] = {});
              for (var pA = T.y - G; pA <= T.y + G; pA++)
                pA < 0 || pA >= x || (hA = d(1e3 * i(pA - D.y)), X[nA][hA] || (X[nA][hA] = K(A(o(nA * _, 2) + o(hA * S, 2)) / 1e3)), (Z = X[nA][hA]) > 0 && (eA += Z, q += Z * k[tA = 4 * (pA * C + z)], iA += Z * k[tA + 1], J += Z * k[tA + 2], lA += Z * k[tA + 3]));
            }
          L[tA = 4 * (N * U + Y)] = q / eA, L[tA + 1] = iA / eA, L[tA + 2] = J / eA, L[tA + 3] = lA / eA;
        }
        return ++Y < U ? j(Y) : H;
      }(0);
    }, bilinearFiltering: function(w, C, x, U, F) {
      var k, H, L, K, W, V, _, S, P, G = 0, X = this.rcpScaleX, D = this.rcpScaleY, T = 4 * (C - 1), j = w.imageData.data, Y = w.ctx.createImageData(U, F), N = Y.data;
      for (L = 0; L < F; L++)
        for (K = 0; K < U; K++)
          for (W = X * K - (k = d(X * K)), V = D * L - (H = d(D * L)), P = 4 * (H * C + k), _ = 0; _ < 4; _++)
            S = j[P + _] * (1 - W) * (1 - V) + j[P + 4 + _] * W * (1 - V) + j[P + T + _] * V * (1 - W) + j[P + T + 4 + _] * W * V, N[G++] = S;
      return Y;
    }, hermiteFastResize: function(w, C, x, U, F) {
      for (var k = this.rcpScaleX, H = this.rcpScaleY, L = a(k / 2), K = a(H / 2), W = w.imageData.data, V = w.ctx.createImageData(U, F), _ = V.data, S = 0; S < F; S++)
        for (var P = 0; P < U; P++) {
          for (var G = 4 * (P + S * U), X = 0, D = 0, T = 0, j = 0, Y = 0, N = 0, z = 0, Z = (S + 0.5) * H, tA = d(S * H); tA < (S + 1) * H; tA++)
            for (var eA = i(Z - (tA + 0.5)) / K, q = (P + 0.5) * k, iA = eA * eA, J = d(P * k); J < (P + 1) * k; J++) {
              var lA = i(q - (J + 0.5)) / L, nA = A(iA + lA * lA);
              nA > 1 && nA < -1 || (X = 2 * nA * nA * nA - 3 * nA * nA + 1) > 0 && (z += X * W[(lA = 4 * (J + tA * C)) + 3], T += X, W[lA + 3] < 255 && (X = X * W[lA + 3] / 250), j += X * W[lA], Y += X * W[lA + 1], N += X * W[lA + 2], D += X);
            }
          _[G] = j / D, _[G + 1] = Y / D, _[G + 2] = N / D, _[G + 3] = z / T;
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
        var i, r = A.imageData.data, h = r.length, a = Math.floor(255 * this.contrast), c = 259 * (a + 255) / (255 * (259 - a));
        for (i = 0; i < h; i += 4)
          r[i] = c * (r[i] - 128) + 128, r[i + 1] = c * (r[i + 1] - 128) + 128, r[i + 2] = c * (r[i + 2] - 128) + 128;
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
        var i, r, h = A.imageData.data, a = h.length, c = -this.saturation;
        for (i = 0; i < a; i += 4)
          r = Math.max(h[i], h[i + 1], h[i + 2]), h[i] += r !== h[i] ? (r - h[i]) * c : 0, h[i + 1] += r !== h[i + 1] ? (r - h[i + 1]) * c : 0, h[i + 2] += r !== h[i + 2] ? (r - h[i + 2]) * c : 0;
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
        var i, r, h, a, c = A.imageData.data, f = c.length, w = -this.vibrance;
        for (i = 0; i < f; i += 4)
          r = Math.max(c[i], c[i + 1], c[i + 2]), h = (c[i] + c[i + 1] + c[i + 2]) / 3, a = 2 * Math.abs(r - h) / 255 * w, c[i] += r !== c[i] ? (r - c[i]) * a : 0, c[i + 1] += r !== c[i + 1] ? (r - c[i + 1]) * a : 0, c[i + 2] += r !== c[i + 2] ? (r - c[i + 2]) * a : 0;
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
      var i, r, h = A.filterBackend.resources, a = A.imageData.width, c = A.imageData.height;
      h.blurLayer1 || (h.blurLayer1 = s.util.createCanvasElement(), h.blurLayer2 = s.util.createCanvasElement()), i = h.blurLayer1, r = h.blurLayer2, i.width === a && i.height === c || (r.width = i.width = a, r.height = i.height = c);
      var f, w, C, x, U = i.getContext("2d"), F = r.getContext("2d"), k = 15, H = 0.06 * this.blur * 0.5;
      for (U.putImageData(A.imageData, 0, 0), F.clearRect(0, 0, a, c), x = -15; x <= k; x++)
        C = H * (w = x / k) * a + (f = (Math.random() - 0.5) / 4), F.globalAlpha = 1 - Math.abs(w), F.drawImage(i, C, f), U.drawImage(r, 0, 0), F.globalAlpha = 1, F.clearRect(0, 0, r.width, r.height);
      for (x = -15; x <= k; x++)
        C = H * (w = x / k) * c + (f = (Math.random() - 0.5) / 4), F.globalAlpha = 1 - Math.abs(w), F.drawImage(i, f, C), U.drawImage(r, 0, 0), F.globalAlpha = 1, F.clearRect(0, 0, r.width, r.height);
      A.ctx.drawImage(i, 0, 0);
      var L = A.ctx.getImageData(0, 0, i.width, i.height);
      return U.globalAlpha = 1, U.clearRect(0, 0, i.width, i.height), L;
    }, getUniformLocations: function(A, i) {
      return { delta: A.getUniformLocation(i, "uDelta") };
    }, sendUniformData: function(A, i) {
      var r = this.chooseRightDelta();
      A.uniform2fv(i.delta, r);
    }, chooseRightDelta: function() {
      var A, i = 1, r = [0, 0];
      return this.horizontal ? this.aspectRatio > 1 && (i = 1 / this.aspectRatio) : this.aspectRatio < 1 && (i = this.aspectRatio), A = i * this.blur * 0.12, this.horizontal ? r[0] = A : r[1] = A, r;
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
      var i, r = A.imageData.data, h = this.gamma, a = r.length, c = 1 / h[0], f = 1 / h[1], w = 1 / h[2];
      for (this.rVals || (this.rVals = new Uint8Array(256), this.gVals = new Uint8Array(256), this.bVals = new Uint8Array(256)), i = 0, a = 256; i < a; i++)
        this.rVals[i] = 255 * Math.pow(i / 255, c), this.gVals[i] = 255 * Math.pow(i / 255, f), this.bVals[i] = 255 * Math.pow(i / 255, w);
      for (i = 0, a = r.length; i < a; i += 4)
        r[i] = this.rVals[r[i]], r[i + 1] = this.gVals[r[i + 1]], r[i + 2] = this.bVals[r[i + 2]];
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
      var r = (A.subFilters || []).map(function(a) {
        return new s.Image.filters[a.type](a);
      }), h = new s.Image.filters.Composed({ subFilters: r });
      return i && i(h), h;
    };
  }(e), function(u) {
    var s = u.fabric || (u.fabric = {}), o = s.Image.filters, d = s.util.createClass;
    o.HueRotation = d(o.ColorMatrix, { type: "HueRotation", rotation: 0, mainParameter: "rotation", calculateMatrix: function() {
      var A = this.rotation * Math.PI, i = s.util.cos(A), r = s.util.sin(A), h = 1 / 3, a = Math.sqrt(h) * r, c = 1 - i;
      this.matrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], this.matrix[0] = i + c / 3, this.matrix[1] = h * c - a, this.matrix[2] = h * c + a, this.matrix[5] = h * c + a, this.matrix[6] = i + h * c, this.matrix[7] = h * c - a, this.matrix[10] = h * c - a, this.matrix[11] = h * c + a, this.matrix[12] = i + h * c;
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
        for (var A, i, r, h, a, c, f, w = 0, C = this._textLines.length; w < C; w++)
          if ((this.textAlign === "justify" || w !== C - 1 && !this.isEndOfWrapping(w)) && (h = 0, a = this._textLines[w], (i = this.getLineWidth(w)) < this.width && (f = this.textLines[w].match(this._reSpacesAndTabs)))) {
            r = f.length, A = (this.width - i) / r;
            for (var x = 0, U = a.length; x <= U; x++)
              c = this.__charBounds[w][x], this._reSpaceAndTab.test(a[x]) ? (c.width += A, c.kernedWidth += A, c.left += h, h += A) : c.left += h;
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
      }, _setTextStyles: function(A, i, r) {
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
        A.font = this._getFontDeclaration(i, r);
      }, calcTextWidth: function() {
        for (var A = this.getLineWidth(0), i = 1, r = this._textLines.length; i < r; i++) {
          var h = this.getLineWidth(i);
          h > A && (A = h);
        }
        return A;
      }, _renderTextLine: function(A, i, r, h, a, c) {
        this._renderChars(A, i, r, h, a, c);
      }, _renderTextLinesBackground: function(A) {
        if (this.textBackgroundColor || this.styleHas("textBackgroundColor")) {
          for (var i, r, h, a, c, f, w, C = A.fillStyle, x = this._getLeftOffset(), U = this._getTopOffset(), F = 0, k = 0, H = this.path, L = 0, K = this._textLines.length; L < K; L++)
            if (i = this.getHeightOfLine(L), this.textBackgroundColor || this.styleHas("textBackgroundColor", L)) {
              h = this._textLines[L], r = this._getLineLeftOffset(L), k = 0, F = 0, a = this.getValueOfPropertyAt(L, 0, "textBackgroundColor");
              for (var W = 0, V = h.length; W < V; W++)
                c = this.__charBounds[L][W], f = this.getValueOfPropertyAt(L, W, "textBackgroundColor"), H ? (A.save(), A.translate(c.renderLeft, c.renderTop), A.rotate(c.angle), A.fillStyle = f, f && A.fillRect(-c.width / 2, -i / this.lineHeight * (1 - this._fontSizeFraction), c.width, i / this.lineHeight), A.restore()) : f !== a ? (w = x + r + F, this.direction === "rtl" && (w = this.width - w - k), A.fillStyle = a, a && A.fillRect(w, U, k, i / this.lineHeight), F = c.left, k = c.width, a = f) : k += c.kernedWidth;
              f && !H && (w = x + r + F, this.direction === "rtl" && (w = this.width - w - k), A.fillStyle = f, A.fillRect(w, U, k, i / this.lineHeight)), U += i;
            } else
              U += i;
          A.fillStyle = C, this._removeShadow(A);
        }
      }, getFontCache: function(A) {
        var i = A.fontFamily.toLowerCase();
        s.charWidthsCache[i] || (s.charWidthsCache[i] = {});
        var r = s.charWidthsCache[i], h = A.fontStyle.toLowerCase() + "_" + (A.fontWeight + "").toLowerCase();
        return r[h] || (r[h] = {}), r[h];
      }, _measureChar: function(A, i, r, h) {
        var a, c, f, w, C = this.getFontCache(i), x = r + A, U = this._getFontDeclaration(i) === this._getFontDeclaration(h), F = i.fontSize / this.CACHE_FONT_SIZE;
        if (r && C[r] !== void 0 && (f = C[r]), C[A] !== void 0 && (w = a = C[A]), U && C[x] !== void 0 && (w = (c = C[x]) - f), a === void 0 || f === void 0 || c === void 0) {
          var k = this.getMeasuringContext();
          this._setTextStyles(k, i, !0);
        }
        return a === void 0 && (w = a = k.measureText(A).width, C[A] = a), f === void 0 && U && r && (f = k.measureText(r).width, C[r] = f), U && c === void 0 && (c = k.measureText(x).width, C[x] = c, w = c - f), { width: a * F, kernedWidth: w * F };
      }, getHeightOfChar: function(A, i) {
        return this.getValueOfPropertyAt(A, i, "fontSize");
      }, measureLine: function(A) {
        var i = this._measureLine(A);
        return this.charSpacing !== 0 && (i.width -= this._getWidthOfCharSpacing()), i.width < 0 && (i.width = 0), i;
      }, _measureLine: function(A) {
        var i, r, h, a, c, f, w = 0, C = this._textLines[A], x = new Array(C.length), U = 0, F = this.path, k = this.pathSide === "right";
        for (this.__charBounds[A] = x, i = 0; i < C.length; i++)
          r = C[i], a = this._getGraphemeBox(r, A, i, h), x[i] = a, w += a.kernedWidth, h = r;
        if (x[i] = { left: a ? a.left + a.width : 0, width: 0, kernedWidth: 0, height: this.fontSize }, F) {
          switch (f = F.segmentsInfo[F.segmentsInfo.length - 1].length, (c = s.util.getPointOnPath(F.path, 0, F.segmentsInfo)).x += F.pathOffset.x, c.y += F.pathOffset.y, this.textAlign) {
            case "left":
              U = k ? f - w : 0;
              break;
            case "center":
              U = (f - w) / 2;
              break;
            case "right":
              U = k ? 0 : f - w;
          }
          for (U += this.pathStartOffset * (k ? -1 : 1), i = k ? C.length - 1 : 0; k ? i >= 0 : i < C.length; k ? i-- : i++)
            a = x[i], U > f ? U %= f : U < 0 && (U += f), this._setGraphemeOnPath(U, a, c), U += a.kernedWidth;
        }
        return { width: w, numOfSpaces: 0 };
      }, _setGraphemeOnPath: function(A, i, r) {
        var h = A + i.kernedWidth / 2, a = this.path, c = s.util.getPointOnPath(a.path, h, a.segmentsInfo);
        i.renderLeft = c.x - r.x, i.renderTop = c.y - r.y, i.angle = c.angle + (this.pathSide === "right" ? Math.PI : 0);
      }, _getGraphemeBox: function(A, i, r, h, a) {
        var c, f = this.getCompleteStyleDeclaration(i, r), w = h ? this.getCompleteStyleDeclaration(i, r - 1) : {}, C = this._measureChar(A, f, h, w), x = C.kernedWidth, U = C.width;
        this.charSpacing !== 0 && (U += c = this._getWidthOfCharSpacing(), x += c);
        var F = { width: U, left: 0, height: f.fontSize, kernedWidth: x, deltaY: f.deltaY };
        if (r > 0 && !a) {
          var k = this.__charBounds[i][r - 1];
          F.left = k.left + k.width + C.kernedWidth - C.width;
        }
        return F;
      }, getHeightOfLine: function(A) {
        if (this.__lineHeights[A])
          return this.__lineHeights[A];
        for (var i = this._textLines[A], r = this.getHeightOfChar(A, 0), h = 1, a = i.length; h < a; h++)
          r = Math.max(this.getHeightOfChar(A, h), r);
        return this.__lineHeights[A] = r * this.lineHeight * this._fontSizeMult;
      }, calcTextHeight: function() {
        for (var A, i = 0, r = 0, h = this._textLines.length; r < h; r++)
          A = this.getHeightOfLine(r), i += r === h - 1 ? A / this.lineHeight : A;
        return i;
      }, _getLeftOffset: function() {
        return this.direction === "ltr" ? -this.width / 2 : this.width / 2;
      }, _getTopOffset: function() {
        return -this.height / 2;
      }, _renderTextCommon: function(A, i) {
        A.save();
        for (var r = 0, h = this._getLeftOffset(), a = this._getTopOffset(), c = 0, f = this._textLines.length; c < f; c++) {
          var w = this.getHeightOfLine(c), C = w / this.lineHeight, x = this._getLineLeftOffset(c);
          this._renderTextLine(i, A, this._textLines[c], h + x, a + r + C, c), r += w;
        }
        A.restore();
      }, _renderTextFill: function(A) {
        (this.fill || this.styleHas("fill")) && this._renderTextCommon(A, "fillText");
      }, _renderTextStroke: function(A) {
        (this.stroke && this.strokeWidth !== 0 || !this.isEmptyStyles()) && (this.shadow && !this.shadow.affectStroke && this._removeShadow(A), A.save(), this._setLineDash(A, this.strokeDashArray), A.beginPath(), this._renderTextCommon(A, "strokeText"), A.closePath(), A.restore());
      }, _renderChars: function(A, i, r, h, a, c) {
        var f, w, C, x, U, F = this.getHeightOfLine(c), k = this.textAlign.indexOf("justify") !== -1, H = "", L = 0, K = this.path, W = !k && this.charSpacing === 0 && this.isEmptyStyles(c) && !K, V = this.direction === "ltr", _ = this.direction === "ltr" ? 1 : -1, S = i.canvas.getAttribute("dir");
        if (i.save(), S !== this.direction && (i.canvas.setAttribute("dir", V ? "ltr" : "rtl"), i.direction = V ? "ltr" : "rtl", i.textAlign = V ? "left" : "right"), a -= F * this._fontSizeFraction / this.lineHeight, W)
          return this._renderChar(A, i, c, 0, r.join(""), h, a, F), void i.restore();
        for (var P = 0, G = r.length - 1; P <= G; P++)
          x = P === G || this.charSpacing || K, H += r[P], C = this.__charBounds[c][P], L === 0 ? (h += _ * (C.kernedWidth - C.width), L += C.width) : L += C.kernedWidth, k && !x && this._reSpaceAndTab.test(r[P]) && (x = !0), x || (f = f || this.getCompleteStyleDeclaration(c, P), w = this.getCompleteStyleDeclaration(c, P + 1), x = s.util.hasStyleChanged(f, w, !1)), x && (K ? (i.save(), i.translate(C.renderLeft, C.renderTop), i.rotate(C.angle), this._renderChar(A, i, c, P, H, -L / 2, 0, F), i.restore()) : (U = h, this._renderChar(A, i, c, P, H, U, a, F)), H = "", f = w, h += _ * L, L = 0);
        i.restore();
      }, _applyPatternGradientTransformText: function(A) {
        var i, r = s.util.createCanvasElement(), h = this.width + this.strokeWidth, a = this.height + this.strokeWidth;
        return r.width = h, r.height = a, (i = r.getContext("2d")).beginPath(), i.moveTo(0, 0), i.lineTo(h, 0), i.lineTo(h, a), i.lineTo(0, a), i.closePath(), i.translate(h / 2, a / 2), i.fillStyle = A.toLive(i), this._applyPatternGradientTransform(i, A), i.fill(), i.createPattern(r, "no-repeat");
      }, handleFiller: function(A, i, r) {
        var h, a;
        return r.toLive ? r.gradientUnits === "percentage" || r.gradientTransform || r.patternTransform ? (h = -this.width / 2, a = -this.height / 2, A.translate(h, a), A[i] = this._applyPatternGradientTransformText(r), { offsetX: h, offsetY: a }) : (A[i] = r.toLive(A, this), this._applyPatternGradientTransform(A, r)) : (A[i] = r, { offsetX: 0, offsetY: 0 });
      }, _setStrokeStyles: function(A, i) {
        return A.lineWidth = i.strokeWidth, A.lineCap = this.strokeLineCap, A.lineDashOffset = this.strokeDashOffset, A.lineJoin = this.strokeLineJoin, A.miterLimit = this.strokeMiterLimit, this.handleFiller(A, "strokeStyle", i.stroke);
      }, _setFillStyles: function(A, i) {
        return this.handleFiller(A, "fillStyle", i.fill);
      }, _renderChar: function(A, i, r, h, a, c, f) {
        var w, C, x = this._getStyleDeclaration(r, h), U = this.getCompleteStyleDeclaration(r, h), F = A === "fillText" && U.fill, k = A === "strokeText" && U.stroke && U.strokeWidth;
        (k || F) && (i.save(), F && (w = this._setFillStyles(i, U)), k && (C = this._setStrokeStyles(i, U)), i.font = this._getFontDeclaration(U), x && x.textBackgroundColor && this._removeShadow(i), x && x.deltaY && (f += x.deltaY), F && i.fillText(a, c - w.offsetX, f - w.offsetY), k && i.strokeText(a, c - C.offsetX, f - C.offsetY), i.restore());
      }, setSuperscript: function(A, i) {
        return this._setScript(A, i, this.superscript);
      }, setSubscript: function(A, i) {
        return this._setScript(A, i, this.subscript);
      }, _setScript: function(A, i, r) {
        var h = this.get2DCursorLocation(A, !0), a = this.getValueOfPropertyAt(h.lineIndex, h.charIndex, "fontSize"), c = this.getValueOfPropertyAt(h.lineIndex, h.charIndex, "deltaY"), f = { fontSize: a * r.size, deltaY: c + a * r.baseline };
        return this.setSelectionStyles(f, A, i), this;
      }, _getLineLeftOffset: function(A) {
        var i = this.getLineWidth(A), r = this.width - i, h = this.textAlign, a = this.direction, c = 0, f = this.isEndOfWrapping(A);
        return h === "justify" || h === "justify-center" && !f || h === "justify-right" && !f || h === "justify-left" && !f ? 0 : (h === "center" && (c = r / 2), h === "right" && (c = r), h === "justify-center" && (c = r / 2), h === "justify-right" && (c = r), a === "rtl" && (c -= r), c);
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
      }, getValueOfPropertyAt: function(A, i, r) {
        var h = this._getStyleDeclaration(A, i);
        return h && h[r] !== void 0 ? h[r] : this[r];
      }, _renderTextDecoration: function(A, i) {
        if (this[i] || this.styleHas(i)) {
          for (var r, h, a, c, f, w, C, x, U, F, k, H, L, K, W, V, _ = this._getLeftOffset(), S = this._getTopOffset(), P = this.path, G = this._getWidthOfCharSpacing(), X = this.offsets[i], D = 0, T = this._textLines.length; D < T; D++)
            if (r = this.getHeightOfLine(D), this[i] || this.styleHas(i, D)) {
              C = this._textLines[D], K = r / this.lineHeight, c = this._getLineLeftOffset(D), F = 0, k = 0, x = this.getValueOfPropertyAt(D, 0, i), V = this.getValueOfPropertyAt(D, 0, "fill"), U = S + K * (1 - this._fontSizeFraction), h = this.getHeightOfChar(D, 0), f = this.getValueOfPropertyAt(D, 0, "deltaY");
              for (var j = 0, Y = C.length; j < Y; j++)
                if (H = this.__charBounds[D][j], L = this.getValueOfPropertyAt(D, j, i), W = this.getValueOfPropertyAt(D, j, "fill"), a = this.getHeightOfChar(D, j), w = this.getValueOfPropertyAt(D, j, "deltaY"), P && L && W)
                  A.save(), A.fillStyle = V, A.translate(H.renderLeft, H.renderTop), A.rotate(H.angle), A.fillRect(-H.kernedWidth / 2, X * a + w, H.kernedWidth, this.fontSize / 15), A.restore();
                else if ((L !== x || W !== V || a !== h || w !== f) && k > 0) {
                  var N = _ + c + F;
                  this.direction === "rtl" && (N = this.width - N - k), x && V && (A.fillStyle = V, A.fillRect(N, U + X * h + f, k, this.fontSize / 15)), F = H.left, k = H.width, x = L, V = W, h = a, f = w;
                } else
                  k += H.kernedWidth;
              N = _ + c + F, this.direction === "rtl" && (N = this.width - N - k), A.fillStyle = W, L && W && A.fillRect(N, U + X * h + f, k - G, this.fontSize / 15), S += r;
            } else
              S += r;
          this._removeShadow(A);
        }
      }, _getFontDeclaration: function(A, i) {
        var r = A || this, h = this.fontFamily, a = s.Text.genericFonts.indexOf(h.toLowerCase()) > -1, c = h === void 0 || h.indexOf("'") > -1 || h.indexOf(",") > -1 || h.indexOf('"') > -1 || a ? r.fontFamily : '"' + r.fontFamily + '"';
        return [s.isLikelyNode ? r.fontWeight : r.fontStyle, s.isLikelyNode ? r.fontStyle : r.fontWeight, i ? this.CACHE_FONT_SIZE + "px" : r.fontSize + "px", c].join(" ");
      }, render: function(A) {
        this.visible && (this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (this._shouldClearDimensionCache() && this.initDimensions(), this.callSuper("render", A)));
      }, _splitTextIntoLines: function(A) {
        for (var i = A.split(this._reNewline), r = new Array(i.length), h = [`
`], a = [], c = 0; c < i.length; c++)
          r[c] = s.util.string.graphemeSplit(i[c]), a = a.concat(r[c], h);
        return a.pop(), { _unwrappedLines: r, lines: i, graphemeText: a, graphemeLines: r };
      }, toObject: function(A) {
        var i = d.concat(A), r = this.callSuper("toObject", i);
        return r.styles = s.util.stylesToArray(this.styles, this.text), r.path && (r.path = this.path.toObject()), r;
      }, set: function(A, i) {
        this.callSuper("set", A, i);
        var r = !1, h = !1;
        if (typeof A == "object")
          for (var a in A)
            a === "path" && this.setPathInfo(), r = r || this._dimensionAffectingProps.indexOf(a) !== -1, h = h || a === "path";
        else
          r = this._dimensionAffectingProps.indexOf(A) !== -1, h = A === "path";
        return h && this.setPathInfo(), r && (this.initDimensions(), this.setCoords()), this;
      }, complexity: function() {
        return 1;
      } }), s.Text.ATTRIBUTE_NAMES = s.SHARED_ATTRIBUTES.concat("x y dx dy font-family font-style font-weight font-size letter-spacing text-decoration text-anchor".split(" ")), s.Text.DEFAULT_SVG_FONT_SIZE = 16, s.Text.fromElement = function(A, i, r) {
        if (!A)
          return i(null);
        var h = s.parseAttributes(A, s.Text.ATTRIBUTE_NAMES), a = h.textAnchor || "left";
        if ((r = s.util.object.extend(r ? o(r) : {}, h)).top = r.top || 0, r.left = r.left || 0, h.textDecoration) {
          var c = h.textDecoration;
          c.indexOf("underline") !== -1 && (r.underline = !0), c.indexOf("overline") !== -1 && (r.overline = !0), c.indexOf("line-through") !== -1 && (r.linethrough = !0), delete r.textDecoration;
        }
        "dx" in h && (r.left += h.dx), "dy" in h && (r.top += h.dy), "fontSize" in r || (r.fontSize = s.Text.DEFAULT_SVG_FONT_SIZE);
        var f = "";
        "textContent" in A ? f = A.textContent : "firstChild" in A && A.firstChild !== null && "data" in A.firstChild && A.firstChild.data !== null && (f = A.firstChild.data), f = f.replace(/^\s+|\s+$|\n+/g, "").replace(/\s+/g, " ");
        var w = r.strokeWidth;
        r.strokeWidth = 0;
        var C = new s.Text(f, r), x = C.getScaledHeight() / C.height, U = ((C.height + C.strokeWidth) * C.lineHeight - C.height) * x, F = C.getScaledHeight() + U, k = 0;
        a === "center" && (k = C.getScaledWidth() / 2), a === "right" && (k = C.getScaledWidth()), C.set({ left: C.left - k, top: C.top - (F - C.fontSize * (0.07 + C._fontSizeFraction)) / C.lineHeight, strokeWidth: w !== void 0 ? w : 1 }), i(C);
      }, s.Text.fromObject = function(A, i) {
        var r = o(A), h = A.path;
        return delete r.path, s.Object._fromObject("Text", r, function(a) {
          a.styles = s.util.stylesFromArray(A.styles, A.text), h ? s.Object._fromObject("Path", h, function(c) {
            a.set("path", c), i(a);
          }, "path") : i(a);
        }, "text");
      }, s.Text.genericFonts = ["sans-serif", "serif", "cursive", "fantasy", "monospace"], s.util.createAccessors && s.util.createAccessors(s.Text);
    }
  }(e), p.util.object.extend(p.Text.prototype, { isEmptyStyles: function(u) {
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
    var s, o, d = this.styles, A = 0, i = !0, r = 0;
    for (var h in d) {
      for (var a in s = 0, d[h]) {
        var c;
        A++, (c = d[h][a]).hasOwnProperty(u) ? (o ? c[u] !== o && (i = !1) : o = c[u], c[u] === this[u] && delete c[u]) : i = !1, Object.keys(c).length !== 0 ? s++ : delete d[h][a];
      }
      s === 0 && delete d[h];
    }
    for (var f = 0; f < this._textLines.length; f++)
      r += this._textLines[f].length;
    i && A === r && (this[u] = o, this.removeStyle(u));
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
    this._getLineStyle(o.lineIndex) || this._setLineStyle(o.lineIndex), this._getStyleDeclaration(o.lineIndex, o.charIndex) || this._setStyleDeclaration(o.lineIndex, o.charIndex, {}), p.util.object.extend(this._getStyleDeclaration(o.lineIndex, o.charIndex), s);
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
    p.IText = p.util.createClass(p.Text, p.Observable, { type: "i-text", selectionStart: 0, selectionEnd: 0, selectionColor: "rgba(17,119,255,0.3)", isEditing: !1, editable: !0, editingBorderColor: "rgba(102,153,255,0.25)", cursorWidth: 2, cursorColor: "", cursorDelay: 1e3, cursorDuration: 600, caching: !0, hiddenTextareaContainer: null, _reSpace: /\s|\n/, _currentCursorOpacity: 0, _selectionDirection: null, _abortCursorAnimation: !1, __widthOfSpace: [], inCompositionMode: !1, initialize: function(s, o) {
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
      var o, d, A, i, r = 0, h = 0, a = this.get2DCursorLocation(s);
      A = a.charIndex, d = a.lineIndex;
      for (var c = 0; c < d; c++)
        r += this.getHeightOfLine(c);
      o = this._getLineLeftOffset(d);
      var f = this.__charBounds[d][A];
      return f && (h = f.left), this.charSpacing !== 0 && A === this._textLines[d].length && (h -= this._getWidthOfCharSpacing()), i = { top: r, left: o + (h > 0 ? h : 0) }, this.direction === "rtl" && (i.left *= -1), this.cursorOffsetCache = i, this.cursorOffsetCache;
    }, renderCursor: function(s, o) {
      var d = this.get2DCursorLocation(), A = d.lineIndex, i = d.charIndex > 0 ? d.charIndex - 1 : 0, r = this.getValueOfPropertyAt(A, i, "fontSize"), h = this.scaleX * this.canvas.getZoom(), a = this.cursorWidth / h, c = s.topOffset, f = this.getValueOfPropertyAt(A, i, "deltaY");
      c += (1 - this._fontSizeFraction) * this.getHeightOfLine(A) / this.lineHeight - r * (1 - this._fontSizeFraction), this.inCompositionMode && this.renderSelection(s, o), o.fillStyle = this.cursorColor || this.getValueOfPropertyAt(A, i, "fill"), o.globalAlpha = this.__isMousedown ? 1 : this._currentCursorOpacity, o.fillRect(s.left + s.leftOffset - a / 2, c + s.top + f, a, r);
    }, renderSelection: function(s, o) {
      for (var d = this.inCompositionMode ? this.hiddenTextarea.selectionStart : this.selectionStart, A = this.inCompositionMode ? this.hiddenTextarea.selectionEnd : this.selectionEnd, i = this.textAlign.indexOf("justify") !== -1, r = this.get2DCursorLocation(d), h = this.get2DCursorLocation(A), a = r.lineIndex, c = h.lineIndex, f = r.charIndex < 0 ? 0 : r.charIndex, w = h.charIndex < 0 ? 0 : h.charIndex, C = a; C <= c; C++) {
        var x, U = this._getLineLeftOffset(C) || 0, F = this.getHeightOfLine(C), k = 0, H = 0;
        if (C === a && (k = this.__charBounds[a][f].left), C >= a && C < c)
          H = i && !this.isEndOfWrapping(C) ? this.width : this.getLineWidth(C) || 5;
        else if (C === c)
          if (w === 0)
            H = this.__charBounds[c][w].left;
          else {
            var L = this._getWidthOfCharSpacing();
            H = this.__charBounds[c][w - 1].left + this.__charBounds[c][w - 1].width - L;
          }
        x = F, (this.lineHeight < 1 || C === c && this.lineHeight > 1) && (F /= this.lineHeight);
        var K = s.left + U + k, W = H - k, V = F, _ = 0;
        this.inCompositionMode ? (o.fillStyle = this.compositionColor || "black", V = 1, _ = F) : o.fillStyle = this.selectionColor, this.direction === "rtl" && (K = this.width - K - W), o.fillRect(K, s.top + s.topOffset + _, W, V), s.topOffset += x;
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
    } }), p.IText.fromObject = function(s, o) {
      var d = p.util.stylesFromArray(s.styles, s.text), A = Object.assign({}, s, { styles: d });
      if (u(A), A.styles)
        for (var i in A.styles)
          for (var r in A.styles[i])
            u(A.styles[i][r]);
      p.Object._fromObject("IText", A, o, "text");
    };
  }(), R = p.util.object.clone, p.util.object.extend(p.IText.prototype, { initBehavior: function() {
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
      s && (s._iTextInstances = s._iTextInstances || [], p.util.removeFromArray(s._iTextInstances, u), s._iTextInstances.length === 0 && (s._hasITextHandlers = !1, u._removeCanvasHandlers(s)));
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
    for (var o = this._text, d = this._reSpace.test(o[u]) ? u - 1 : u, A = o[d], i = p.reNonWord; !i.test(A) && d > 0 && d < o.length; )
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
    var d = o.slice(0, u), A = p.util.string.graphemeSplit(d).length;
    if (u === s)
      return { selectionStart: A, selectionEnd: A };
    var i = o.slice(u, s);
    return { selectionStart: A, selectionEnd: A + p.util.string.graphemeSplit(i).length };
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
    var u = this.inCompositionMode ? this.compositionStart : this.selectionStart, s = this._getCursorBoundaries(u), o = this.get2DCursorLocation(u), d = o.lineIndex, A = o.charIndex, i = this.getValueOfPropertyAt(d, A, "fontSize") * this.lineHeight, r = s.leftOffset, h = this.calcTransformMatrix(), a = { x: s.left + r, y: s.top + s.topOffset + i }, c = this.canvas.getRetinaScaling(), f = this.canvas.upperCanvasEl, w = f.width / c, C = f.height / c, x = w - i, U = C - i, F = f.clientWidth / w, k = f.clientHeight / C;
    return a = p.util.transformPoint(a, h), (a = p.util.transformPoint(a, this.canvas.viewportTransform)).x *= F, a.y *= k, a.x < 0 && (a.x = 0), a.x > x && (a.x = x), a.y < 0 && (a.y = 0), a.y > U && (a.y = U), a.x += this.canvas._offset.left, a.y += this.canvas._offset.top, { left: a.x + "px", top: a.y + "px", fontSize: i + "px", charHeight: i };
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
    var o, d, A = this.get2DCursorLocation(u, !0), i = this.get2DCursorLocation(s, !0), r = A.lineIndex, h = A.charIndex, a = i.lineIndex, c = i.charIndex;
    if (r !== a) {
      if (this.styles[r])
        for (o = h; o < this._unwrappedTextLines[r].length; o++)
          delete this.styles[r][o];
      if (this.styles[a])
        for (o = c; o < this._unwrappedTextLines[a].length; o++)
          (d = this.styles[a][o]) && (this.styles[r] || (this.styles[r] = {}), this.styles[r][h + o - c] = d);
      for (o = r + 1; o <= a; o++)
        delete this.styles[o];
      this.shiftLineStyles(a, r - a);
    } else if (this.styles[r]) {
      d = this.styles[r];
      var f, w, C = c - h;
      for (o = h; o < c; o++)
        delete d[o];
      for (w in this.styles[r])
        (f = parseInt(w, 10)) >= c && (d[f - C] = d[w], delete d[w]);
    }
  }, shiftLineStyles: function(u, s) {
    var o = R(this.styles);
    for (var d in this.styles) {
      var A = parseInt(d, 10);
      A > u && (this.styles[A + s] = o[A], o[A - s] || delete this.styles[A]);
    }
  }, restartCursorIfNeeded: function() {
    this._currentTickState && !this._currentTickState.isAborted && this._currentTickCompleteState && !this._currentTickCompleteState.isAborted || this.initDelayedCursor();
  }, insertNewlineStyleObject: function(u, s, o, d) {
    var A, i = {}, r = !1, h = this._unwrappedTextLines[u].length === s;
    for (var a in o || (o = 1), this.shiftLineStyles(u, o), this.styles[u] && (A = this.styles[u][s === 0 ? s : s - 1]), this.styles[u]) {
      var c = parseInt(a, 10);
      c >= s && (r = !0, i[c - s] = this.styles[u][a], h && s === 0 || delete this.styles[u][a]);
    }
    var f = !1;
    for (r && !h && (this.styles[u + o] = i, f = !0), f && o--; o > 0; )
      d && d[o - 1] ? this.styles[u + o] = { 0: R(d[o - 1]) } : A ? this.styles[u + o] = { 0: R(A) } : delete this.styles[u + o], o--;
    this._forceClearCache = !0;
  }, insertCharStyleObject: function(u, s, o, d) {
    this.styles || (this.styles = {});
    var A = this.styles[u], i = A ? R(A) : {};
    for (var r in o || (o = 1), i) {
      var h = parseInt(r, 10);
      h >= s && (A[h + o] = i[h], i[h - o] || delete A[h]);
    }
    if (this._forceClearCache = !0, d)
      for (; o--; )
        Object.keys(d[o]).length && (this.styles[u] || (this.styles[u] = {}), this.styles[u][s + o] = R(d[o]));
    else if (A)
      for (var a = A[s ? s - 1 : 1]; a && o--; )
        this.styles[u][s + o] = R(a);
  }, insertNewStyleBlock: function(u, s, o) {
    for (var d = this.get2DCursorLocation(s, !0), A = [0], i = 0, r = 0; r < u.length; r++)
      u[r] === `
` ? A[++i] = 0 : A[i]++;
    for (A[0] > 0 && (this.insertCharStyleObject(d.lineIndex, d.charIndex, A[0], o), o = o && o.slice(A[0] + 1)), i && this.insertNewlineStyleObject(d.lineIndex, d.charIndex + A[0], i), r = 1; r < i; r++)
      A[r] > 0 ? this.insertCharStyleObject(d.lineIndex + r, 0, A[r], o) : o && this.styles[d.lineIndex + r] && o[0] && (this.styles[d.lineIndex + r][0] = o[0]), o = o && o.slice(A[r] + 1);
    A[r] > 0 && this.insertCharStyleObject(d.lineIndex + r, 0, A[r], o);
  }, setSelectionStartEndWithShift: function(u, s, o) {
    o <= u ? (s === u ? this._selectionDirection = "left" : this._selectionDirection === "right" && (this._selectionDirection = "left", this.selectionEnd = u), this.selectionStart = o) : o > u && o < s ? this._selectionDirection === "right" ? this.selectionEnd = o : this.selectionStart = o : (s === u ? this._selectionDirection = "right" : this._selectionDirection === "left" && (this._selectionDirection = "right", this.selectionStart = s), this.selectionEnd = o);
  }, setSelectionInBoundaries: function() {
    var u = this.text.length;
    this.selectionStart > u ? this.selectionStart = u : this.selectionStart < 0 && (this.selectionStart = 0), this.selectionEnd > u ? this.selectionEnd = u : this.selectionEnd < 0 && (this.selectionEnd = 0);
  } }), p.util.object.extend(p.IText.prototype, { initDoubleClickSimulation: function() {
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
    for (var s, o = this.getLocalPointer(u), d = 0, A = 0, i = 0, r = 0, h = 0, a = 0, c = this._textLines.length; a < c && i <= o.y; a++)
      i += this.getHeightOfLine(a) * this.scaleY, h = a, a > 0 && (r += this._textLines[a - 1].length + this.missingNewlineOffset(a - 1));
    A = this._getLineLeftOffset(h) * this.scaleX, s = this._textLines[h], this.direction === "rtl" && (o.x = this.width * this.scaleX - o.x + A);
    for (var f = 0, w = s.length; f < w && (d = A, (A += this.__charBounds[h][f].kernedWidth * this.scaleX) <= o.x); f++)
      r++;
    return this._getNewSelectionStartFromOffset(o, d, A, r, w);
  }, _getNewSelectionStartFromOffset: function(u, s, o, d, A) {
    var i = u.x - s, r = o - u.x, h = d + (r > i || r < 0 ? 0 : 1);
    return this.flipX && (h = A - h), h > this._text.length && (h = this._text.length), h;
  } }), p.util.object.extend(p.IText.prototype, { initHiddenTextarea: function() {
    this.hiddenTextarea = p.document.createElement("textarea"), this.hiddenTextarea.setAttribute("autocapitalize", "off"), this.hiddenTextarea.setAttribute("autocorrect", "off"), this.hiddenTextarea.setAttribute("autocomplete", "off"), this.hiddenTextarea.setAttribute("spellcheck", "false"), this.hiddenTextarea.setAttribute("data-fabric-hiddentextarea", ""), this.hiddenTextarea.setAttribute("wrap", "off");
    var u = this._calcTextareaPosition();
    this.hiddenTextarea.style.cssText = "position: absolute; top: " + u.top + "; left: " + u.left + "; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; padding-top: " + u.fontSize + ";", this.hiddenTextareaContainer ? this.hiddenTextareaContainer.appendChild(this.hiddenTextarea) : p.document.body.appendChild(this.hiddenTextarea), p.util.addListener(this.hiddenTextarea, "keydown", this.onKeyDown.bind(this)), p.util.addListener(this.hiddenTextarea, "keyup", this.onKeyUp.bind(this)), p.util.addListener(this.hiddenTextarea, "input", this.onInput.bind(this)), p.util.addListener(this.hiddenTextarea, "copy", this.copy.bind(this)), p.util.addListener(this.hiddenTextarea, "cut", this.copy.bind(this)), p.util.addListener(this.hiddenTextarea, "paste", this.paste.bind(this)), p.util.addListener(this.hiddenTextarea, "compositionstart", this.onCompositionStart.bind(this)), p.util.addListener(this.hiddenTextarea, "compositionupdate", this.onCompositionUpdate.bind(this)), p.util.addListener(this.hiddenTextarea, "compositionend", this.onCompositionEnd.bind(this)), !this._clickHandlerInitialized && this.canvas && (p.util.addListener(this.canvas.upperCanvasEl, "click", this.onClick.bind(this)), this._clickHandlerInitialized = !0);
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
      var o, d, A, i, r, h = this._splitTextIntoLines(this.hiddenTextarea.value).graphemeText, a = this._text.length, c = h.length, f = c - a, w = this.selectionStart, C = this.selectionEnd, x = w !== C;
      if (this.hiddenTextarea.value === "")
        return this.styles = {}, this.updateFromTextArea(), this.fire("changed"), void (this.canvas && (this.canvas.fire("text:changed", { target: this }), this.canvas.requestRenderAll()));
      var U = this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart, this.hiddenTextarea.selectionEnd, this.hiddenTextarea.value), F = w > U.selectionStart;
      x ? (o = this._text.slice(w, C), f += C - w) : c < a && (o = F ? this._text.slice(C + f, C) : this._text.slice(w, w - f)), d = h.slice(U.selectionEnd - f, U.selectionEnd), o && o.length && (d.length && (A = this.getSelectionStyles(w, w + 1, !1), A = d.map(function() {
        return A[0];
      })), x ? (i = w, r = C) : F ? (i = C - o.length, r = C) : (i = C, r = C + o.length), this.removeStyleFromTo(i, r)), d.length && (s && d.join("") === p.copiedText && !p.disableStyleCopyPaste && (A = p.copiedTextStyle), this.insertNewStyleBlock(d, w, A)), this.updateFromTextArea(), this.fire("changed"), this.canvas && (this.canvas.fire("text:changed", { target: this }), this.canvas.requestRenderAll());
    }
  }, onCompositionStart: function() {
    this.inCompositionMode = !0;
  }, onCompositionEnd: function() {
    this.inCompositionMode = !1;
  }, onCompositionUpdate: function(u) {
    this.compositionStart = u.target.selectionStart, this.compositionEnd = u.target.selectionEnd, this.updateTextareaPosition();
  }, copy: function() {
    this.selectionStart !== this.selectionEnd && (p.copiedText = this.getSelectedText(), p.disableStyleCopyPaste ? p.copiedTextStyle = null : p.copiedTextStyle = this.getSelectionStyles(this.selectionStart, this.selectionEnd, !0), this._copyDone = !0);
  }, paste: function() {
    this.fromPaste = !0;
  }, _getClipboardData: function(u) {
    return u && u.clipboardData || p.window.clipboardData;
  }, _getWidthBeforeCursor: function(u, s) {
    var o, d = this._getLineLeftOffset(u);
    return s > 0 && (d += (o = this.__charBounds[u][s - 1]).left + o.width), d;
  }, getDownCursorOffset: function(u, s) {
    var o = this._getSelectionForOffset(u, s), d = this.get2DCursorLocation(o), A = d.lineIndex;
    if (A === this._textLines.length - 1 || u.metaKey || u.keyCode === 34)
      return this._text.length - o;
    var i = d.charIndex, r = this._getWidthBeforeCursor(A, i), h = this._getIndexOnLine(A + 1, r);
    return this._textLines[A].slice(i).length + h + 1 + this.missingNewlineOffset(A);
  }, _getSelectionForOffset: function(u, s) {
    return u.shiftKey && this.selectionStart !== this.selectionEnd && s ? this.selectionEnd : this.selectionStart;
  }, getUpCursorOffset: function(u, s) {
    var o = this._getSelectionForOffset(u, s), d = this.get2DCursorLocation(o), A = d.lineIndex;
    if (A === 0 || u.metaKey || u.keyCode === 33)
      return -o;
    var i = d.charIndex, r = this._getWidthBeforeCursor(A, i), h = this._getIndexOnLine(A - 1, r), a = this._textLines[A].slice(0, i), c = this.missingNewlineOffset(A - 1);
    return -this._textLines[A - 1].length + h - a.length + (1 - c);
  }, _getIndexOnLine: function(u, s) {
    for (var o, d, A = this._textLines[u], i = this._getLineLeftOffset(u), r = 0, h = 0, a = A.length; h < a; h++)
      if ((i += o = this.__charBounds[u][h].width) > s) {
        d = !0;
        var c = i - o, f = i, w = Math.abs(c - s);
        r = Math.abs(f - s) < w ? h : h - 1;
        break;
      }
    return d || (r = A.length - 1), r;
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
    var A = p.util.string.graphemeSplit(u);
    this.insertNewStyleBlock(A, o, s), this._text = [].concat(this._text.slice(0, o), A, this._text.slice(d)), this.text = this._text.join(""), this.set("dirty", !0), this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this._removeExtraneousStyles();
  } }), function() {
    var u = p.util.toFixed, s = /  +/g;
    p.util.object.extend(p.Text.prototype, { _toSVG: function() {
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
      var A, i = [], r = [], h = o;
      this._setSVGBg(r);
      for (var a = 0, c = this._textLines.length; a < c; a++)
        A = this._getLineLeftOffset(a), (this.textBackgroundColor || this.styleHas("textBackgroundColor", a)) && this._setSVGTextLineBg(r, a, d + A, h), this._setSVGTextLineText(i, a, d + A, h), h += this.getHeightOfLine(a);
      return { textSpans: i, textBgRects: r };
    }, _createTextCharSpan: function(o, d, A, i) {
      var r = o !== o.trim() || o.match(s), h = this.getSvgSpanStyles(d, r), a = h ? 'style="' + h + '"' : "", c = d.deltaY, f = "", w = p.Object.NUM_FRACTION_DIGITS;
      return c && (f = ' dy="' + u(c, w) + '" '), ['<tspan x="', u(A, w), '" y="', u(i, w), '" ', f, a, ">", p.util.string.escapeXml(o), "</tspan>"].join("");
    }, _setSVGTextLineText: function(o, d, A, i) {
      var r, h, a, c, f, w = this.getHeightOfLine(d), C = this.textAlign.indexOf("justify") !== -1, x = "", U = 0, F = this._textLines[d];
      i += w * (1 - this._fontSizeFraction) / this.lineHeight;
      for (var k = 0, H = F.length - 1; k <= H; k++)
        f = k === H || this.charSpacing, x += F[k], a = this.__charBounds[d][k], U === 0 ? (A += a.kernedWidth - a.width, U += a.width) : U += a.kernedWidth, C && !f && this._reSpaceAndTab.test(F[k]) && (f = !0), f || (r = r || this.getCompleteStyleDeclaration(d, k), h = this.getCompleteStyleDeclaration(d, k + 1), f = p.util.hasStyleChanged(r, h, !0)), f && (c = this._getStyleDeclaration(d, k) || {}, o.push(this._createTextCharSpan(x, c, A, i)), x = "", r = h, A += U, U = 0);
    }, _pushTextBgRect: function(o, d, A, i, r, h) {
      var a = p.Object.NUM_FRACTION_DIGITS;
      o.push("		<rect ", this._getFillAttributes(d), ' x="', u(A, a), '" y="', u(i, a), '" width="', u(r, a), '" height="', u(h, a), `"></rect>
`);
    }, _setSVGTextLineBg: function(o, d, A, i) {
      for (var r, h, a = this._textLines[d], c = this.getHeightOfLine(d) / this.lineHeight, f = 0, w = 0, C = this.getValueOfPropertyAt(d, 0, "textBackgroundColor"), x = 0, U = a.length; x < U; x++)
        r = this.__charBounds[d][x], (h = this.getValueOfPropertyAt(d, x, "textBackgroundColor")) !== C ? (C && this._pushTextBgRect(o, C, A + w, i, f, c), w = r.left, f = r.width, C = h) : f += r.kernedWidth;
      h && this._pushTextBgRect(o, h, A + w, i, f, c);
    }, _getFillAttributes: function(o) {
      var d = o && typeof o == "string" ? new p.Color(o) : "";
      return d && d.getSource() && d.getAlpha() !== 1 ? 'opacity="' + d.getAlpha() + '" fill="' + d.setAlpha(1).toRgb() + '"' : 'fill="' + o + '"';
    }, _getSVGLineTopOffset: function(o) {
      for (var d, A = 0, i = 0; i < o; i++)
        A += this.getHeightOfLine(i);
      return d = this.getHeightOfLine(i), { lineTop: A, offset: (this._fontSizeMult - this._fontSizeFraction) * d / (this.lineHeight * this._fontSizeMult) };
    }, getSvgStyles: function(o) {
      return p.Object.prototype.getSvgStyles.call(this, o) + " white-space: pre;";
    } });
  }(), function(u) {
    var s = u.fabric || (u.fabric = {});
    s.Textbox = s.util.createClass(s.IText, s.Observable, { type: "textbox", minWidth: 20, dynamicMinWidth: 2, __cachedLines: null, lockScalingFlip: !0, noScaleCache: !1, _dimensionAffectingProps: s.Text.prototype._dimensionAffectingProps.concat("width"), _wordJoiners: /[ \t\r]/, splitByGrapheme: !1, initDimensions: function() {
      this.__skipDimension || (this.isEditing && this.initDelayedCursor(), this.clearContextTop(), this._clearCache(), this.dynamicMinWidth = 0, this._styleMap = this._generateStyleMap(this._splitText()), this.dynamicMinWidth > this.width && this._set("width", this.dynamicMinWidth), this.textAlign.indexOf("justify") !== -1 && this.enlargeSpaces(), this.height = this.calcTextHeight(), this.saveState({ propertySet: "_dimensionAffectingProps" }));
    }, _generateStyleMap: function(o) {
      for (var d = 0, A = 0, i = 0, r = {}, h = 0; h < o.graphemeLines.length; h++)
        o.graphemeText[i] === `
` && h > 0 ? (A = 0, i++, d++) : !this.splitByGrapheme && this._reSpaceAndTab.test(o.graphemeText[i]) && h > 0 && (A++, i++), r[h] = { line: d, offset: A }, i += o.graphemeLines[h].length, A += o.graphemeLines[h].length;
      return r;
    }, styleHas: function(o, d) {
      if (this._styleMap && !this.isWrapping) {
        var A = this._styleMap[d];
        A && (d = A.line);
      }
      return s.Text.prototype.styleHas.call(this, o, d);
    }, isEmptyStyles: function(o) {
      if (!this.styles)
        return !0;
      var d, A, i = 0, r = !1, h = this._styleMap[o], a = this._styleMap[o + 1];
      for (var c in h && (o = h.line, i = h.offset), a && (r = a.line === o, d = a.offset), A = o === void 0 ? this.styles : { line: this.styles[o] })
        for (var f in A[c])
          if (f >= i && (!r || f < d))
            for (var w in A[c][f])
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
      var i, r = 0;
      A = A || 0;
      for (var h = 0, a = o.length; h < a; h++)
        r += this._getGraphemeBox(o[h], d, h + A, i, !0).kernedWidth, i = o[h];
      return r;
    }, _wrapLine: function(o, d, A, i) {
      var r = 0, h = this.splitByGrapheme, a = [], c = [], f = h ? s.util.string.graphemeSplit(o) : o.split(this._wordJoiners), w = "", C = 0, x = h ? "" : " ", U = 0, F = 0, k = 0, H = !0, L = this._getWidthOfCharSpacing();
      i = i || 0, f.length === 0 && f.push([]), A -= i;
      for (var K = 0; K < f.length; K++)
        w = h ? f[K] : s.util.string.graphemeSplit(f[K]), U = this._measureWord(w, d, C), C += w.length, (r += F + U - L) > A && !H ? (a.push(c), c = [], r = U, H = !0) : r += L, H || h || c.push(x), c = c.concat(w), F = h ? 0 : this._measureWord([x], d, C), C++, H = !1, U > k && (k = U);
      return K && a.push(c), k + i > this.dynamicMinWidth && (this.dynamicMinWidth = k - L + i), a;
    }, isEndOfWrapping: function(o) {
      return !this._styleMap[o + 1] || this._styleMap[o + 1].line !== this._styleMap[o].line;
    }, missingNewlineOffset: function(o) {
      return this.splitByGrapheme ? this.isEndOfWrapping(o) ? 1 : 0 : 1;
    }, _splitTextIntoLines: function(o) {
      for (var d = s.Text.prototype._splitTextIntoLines.call(this, o), A = this._wrapText(d.lines, this.width), i = new Array(A.length), r = 0; r < A.length; r++)
        i[r] = A[r].join("");
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
    var u = p.controlsUtils, s = u.scaleSkewCursorStyleHandler, o = u.scaleCursorStyleHandler, d = u.scalingEqually, A = u.scalingYOrSkewingX, i = u.scalingXOrSkewingY, r = u.scaleOrSkewActionName, h = p.Object.prototype.controls;
    if (h.ml = new p.Control({ x: -0.5, y: 0, cursorStyleHandler: s, actionHandler: i, getActionName: r }), h.mr = new p.Control({ x: 0.5, y: 0, cursorStyleHandler: s, actionHandler: i, getActionName: r }), h.mb = new p.Control({ x: 0, y: 0.5, cursorStyleHandler: s, actionHandler: A, getActionName: r }), h.mt = new p.Control({ x: 0, y: -0.5, cursorStyleHandler: s, actionHandler: A, getActionName: r }), h.tl = new p.Control({ x: -0.5, y: -0.5, cursorStyleHandler: o, actionHandler: d }), h.tr = new p.Control({ x: 0.5, y: -0.5, cursorStyleHandler: o, actionHandler: d }), h.bl = new p.Control({ x: -0.5, y: 0.5, cursorStyleHandler: o, actionHandler: d }), h.br = new p.Control({ x: 0.5, y: 0.5, cursorStyleHandler: o, actionHandler: d }), h.mtr = new p.Control({ x: 0, y: -0.5, actionHandler: u.rotationWithSnapping, cursorStyleHandler: u.rotationStyleHandler, offsetY: -40, withConnection: !0, actionName: "rotate" }), p.Textbox) {
      var a = p.Textbox.prototype.controls = {};
      a.mtr = h.mtr, a.tr = h.tr, a.br = h.br, a.tl = h.tl, a.bl = h.bl, a.mt = h.mt, a.mb = h.mb, a.mr = new p.Control({ x: 0.5, y: 0, actionHandler: u.changeWidth, cursorStyleHandler: s, actionName: "resizing" }), a.ml = new p.Control({ x: -0.5, y: 0, actionHandler: u.changeWidth, cursorStyleHandler: s, actionName: "resizing" });
    }
  }();
})(ae);
const $t = (e, t, n, l) => {
  const g = Nt();
  return g.classList.add("shake-sdk-attachments-drawing-button"), t && g.classList.add("additional-active"), n && (g.onclick = n), ((B, m) => {
    const v = new XMLHttpRequest();
    v.open("GET", B, !0), v.onreadystatechange = function() {
      v.readyState === 4 && v.status === 200 && m(v.responseText);
    }, v.send();
  })(e, (B) => {
    g.appendChild(((m, v) => {
      const b = new DOMParser().parseFromString(m, "image/svg+xml").documentElement, Q = b.querySelectorAll("path");
      return v && Q.forEach(function(y) {
        y.style.stroke = v;
      }), b;
    })(B, l));
  }), g;
}, Ne = (e, t) => {
  t.map((n) => {
    n.classList.remove("additional-active"), e === n && n.classList.add("additional-active");
  });
}, ps = ["#ff0000", "#ffcc00", "#00c274", "#0000FF", "#6552ff", "#808080"], Io = (e) => {
  const t = QA.localStorage, n = QA.attachmentsManager;
  let l, g = t.getShakeChosenColor() ?? ps[0], B = t.getShakeChosenDrawingOption() ?? UA.PENCIL;
  const m = () => {
    l == null || l.remove(), l = function(oA, u, s, o, d) {
      const A = document.createElement("canvas");
      A.classList.add("shake-sdk-canvas");
      const i = A.getContext("2d");
      A.width = oA.clientWidth, A.height = oA.clientHeight;
      const r = new ae.fabric.Canvas(A);
      let h = !1, a = 0, c = 0, f = null, w = null;
      const C = (L) => {
        h = !h;
        const K = A.getBoundingClientRect();
        return a = k(L) - K.left + 22, c = H(L) - K.top + 22, o === UA.RECT ? (f = new ae.fabric.Rect({ left: a, top: c, width: 0, height: 0, fill: "transparent", stroke: s, strokeWidth: 4, cornerColor: s, cornerSize: 6, transparentCorners: !1, selectable: !0 }), void r.add(f)) : o === UA.ELLIPSE ? (w = new ae.fabric.Ellipse({ left: a, top: c, rx: 0, ry: 0, fill: "transparent", stroke: s, strokeWidth: 4, selectable: !0 }), void r.add(w)) : void 0;
      }, x = (L) => {
        if (!h)
          return;
        const K = A.getBoundingClientRect(), W = k(L) - K.left + 22, V = H(L) - K.top + 22;
        if (o === UA.RECT)
          return void (f && (f.set({ width: W - a, height: V - c }), r.renderAll()));
        if (o === UA.ELLIPSE && w) {
          const P = Math.abs(W - a) / 2, G = Math.abs(V - c) / 2;
          return w.set({ rx: P, ry: G, left: W > a ? a : W, top: V > c ? c : V }).setCoords(), void r.renderAll();
        }
        const _ = o === UA.BLUR;
        _ && i && (i.filter = "blur(10px)");
        const S = new ae.fabric.Line([a, c, W, V], { stroke: _ ? "rgba(128, 128, 128, 0.8)" : s, strokeWidth: _ ? 20 : 4, fill: _ ? "rgba(128, 128, 128, 0.8)" : void 0, fillRule: _ ? "solid" : void 0, selectable: !0 });
        r.add(S), a = W, c = V;
      }, U = () => {
        h = !1, F();
      }, F = async () => {
        const L = document.createElement("canvas"), K = L.getContext("2d");
        L.width = u.naturalWidth, L.height = u.naturalHeight, K == null || K.drawImage(u, 0, 0, L.width, L.height), K == null || K.drawImage(A, 0, 0, u.naturalWidth, u.naturalHeight), u.src = L.toDataURL(), L.toBlob((W) => {
          d(W ?? new Blob());
        });
      };
      A.addEventListener("mousedown", C), A.addEventListener("mousemove", x), A.addEventListener("mouseup", U), A.addEventListener("touchstart", C), A.addEventListener("touchmove", x), A.addEventListener("touchend", U);
      const k = (L) => pi() ? L.touches[0].clientX : L.clientX, H = (L) => pi() ? L.touches[0].clientY : L.clientY;
      return window.onresize = () => {
        A.width = oA.clientWidth, A.height = oA.clientHeight, r.setWidth(oA.clientWidth), r.setHeight(oA.clientHeight), r.renderAll();
      }, A;
    }(AA, p, g, B, (oA) => {
      e.drawingData = oA, n.updateAttachment(e);
    }), AA.appendChild(l);
  }, v = [], b = $t("data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='pen-draw%201'%20clip-path='url(%23clip0_15248_22176)'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M10.9258%2016.8278C14.5704%2020.4725%2019.5591%2021.3965%2022.0616%2018.8905C24.171%2016.7812%2023.8431%2012.9172%2021.5156%209.57349'%20stroke='%236552FF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_2'%20d='M18.4802%206.4306C14.097%203.05893%208.61602%202.63776%205.56285%205.69093C2.14569%209.1081%203.06969%2015.5714%207.62552%2020.1273C9.62034%2022.1549%2012.0861%2023.6572%2014.8029%2024.4999'%20stroke='%236552FF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20id='Vector_3'%20d='M14.4897%2014.4666L16.6679%2014.0303C16.9828%2013.9683%2017.2726%2013.8149%2017.5009%2013.5893L23.8615%207.23327C24.7143%206.38002%2024.7143%204.99719%2023.8615%204.14394C23.0083%203.29121%2021.6255%203.29121%2020.7722%204.14394L14.4115%2010.4999C14.1842%2010.7276%2014.0291%2011.0174%2013.9659%2011.3329L13.5342%2013.5111C13.4495%2013.9541%2013.74%2014.3819%2014.183%2014.4666C14.2843%2014.486%2014.3884%2014.486%2014.4897%2014.4666Z'%20stroke='%236552FF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15248_22176'%3e%3crect%20width='28'%20height='28'%20fill='none'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", B === UA.PENCIL, () => {
    B = UA.PENCIL, t.setShakeChosenDrawingOption(UA.PENCIL), m();
  }, g), Q = $t("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_3795_450)'%3e%3cpath%20d='M20.036%2016.036C22.272%2011.6048%2020.4924%206.2%2016.0612%203.96402C13.515%202.67923%2010.5102%202.67923%207.96399%203.96402'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M3.96395%207.96399C1.72797%2012.3952%203.50756%2017.8%207.93877%2020.036C10.4849%2021.3208%2013.4898%2021.3208%2016.036%2020.036'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M4%204L20%2020'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_3795_450'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", void 0, () => {
    p.src = URL.createObjectURL(e.data), e.drawingData = e.data, n.updateAttachment(e), m();
  });
  v.push(Q);
  const y = $t("data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='1'%20width='20'%20height='20'%20rx='3'%20stroke='%23D1D1D6'%20stroke-width='2'/%3e%3c/svg%3e", B === UA.RECT, () => {
    B = UA.RECT, t.setShakeChosenDrawingOption(UA.RECT), Ne(y, v), m();
  });
  v.push(y);
  const E = $t("data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20opacity='0.7'%20cx='10.5'%20cy='10.5'%20r='9.5'%20stroke='%23D1D1D6'%20stroke-width='2'/%3e%3c/svg%3e", B === UA.ELLIPSE, () => {
    B = UA.ELLIPSE, t.setShakeChosenDrawingOption(UA.ELLIPSE), Ne(E, v), m();
  });
  v.push(E);
  const I = $t("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_3795_444)'%3e%3cpath%20d='M16.775%209H4.225C3.548%209%203%208.452%203%207.775V4.225C3%203.548%203.548%203%204.225%203H16.776C17.452%203%2018%203.548%2018%204.225V7.776C18%208.452%2017.452%209%2016.775%209Z'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2022H10C9.448%2022%209%2021.552%209%2021V16C9%2015.448%209.448%2015%2010%2015H12C12.552%2015%2013%2015.448%2013%2016V21C13%2021.552%2012.552%2022%2012%2022Z'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M11%2015V13C11%2012.448%2011.448%2012%2012%2012H20C20.552%2012%2021%2011.552%2021%2011V7C21%206.448%2020.552%206%2020%206H18'%20stroke='%23AEAEB2'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_3795_444'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", B === UA.BLUR, () => {
    B = UA.BLUR, t.setShakeChosenDrawingOption(UA.BLUR), Ne(I, v), m();
  });
  v.push(I);
  const M = uA();
  M.classList.add("shake-sdk-image-preview-toolbox"), M.appendChild(b), M.appendChild(((oA, u) => {
    const s = ps.map((A) => {
      const i = ((r, h) => {
        const a = Nt();
        return a.classList.add("shake-sdk-attachments-colored-button"), a.id = r, h ? (a.style.background = "transparent", a.style.border = `2px solid ${r}`) : (a.style.background = r, a.style.border = "none"), a;
      })(A, u === A);
      return i.onclick = () => {
        g = A, t.setShakeChosenColor(A), ((r, h) => {
          r.querySelectorAll("path").forEach(function(a) {
            a.style.stroke = h;
          });
        })(oA, A), ((r, h) => {
          h.forEach((a) => {
            a.style.background = a.id, a.style.border = "none";
          }), r.style.background = "transparent", r.style.border = `2px solid ${r.id}`;
        })(i, s), m();
      }, i;
    }), { menu: o, toggle: d } = ko(oA, s, !0);
    return oA.onclick = async (A) => {
      Ne(b, v), B = UA.PENCIL, t.setShakeChosenDrawingOption(UA.PENCIL), m(), A.stopPropagation(), d();
    }, o.classList.add("shake-sdk-attachments-preview-colors"), o;
  })(b, g)), v.map((oA) => M.appendChild(oA));
  const O = uA();
  O.classList.add("shake-sdk-image-preview-toolbox-container"), O.appendChild(M);
  const R = URL.createObjectURL(e.drawingData ?? e.data), p = ZA(R);
  p.classList.add("shake-sdk-image-preview-image"), p.addEventListener("load", m);
  const AA = uA();
  AA.classList.add("shake-sdk-image-preview-image-container"), AA.appendChild(p);
  const rA = uA();
  return rA.classList.add("shake-sdk-image-preview"), rA.appendChild(AA), rA.appendChild(O), rA;
}, zh = (e) => {
  const t = uA();
  t.classList.add("shake-sdk-attachments-preview");
  const n = e.type == _A.IMAGE ? Io(e) : ((l) => {
    const g = uA();
    g.classList.add("shake-sdk-video-preview");
    const B = URL.createObjectURL(l), m = Si({ src: B + "#t=0.1", controls: !0 });
    return m.addEventListener("loadeddata", () => {
      g.appendChild(m);
    }, !1), g;
  })(e.data);
  return t.appendChild(n), t;
}, Jh = (e) => {
  const t = Xr();
  t.classList.add("shake-sdk-attachments-card");
  const n = uA();
  n.classList.add("shake-sdk-attachments-page");
  const l = (() => {
    const Q = Nt();
    Q.appendChild(ZA(Eo)), Q.appendChild(En(CA().shake_sdk_dialog_add_attachment_record_screen)), Q.onclick = Yr;
    const y = Nt();
    y.appendChild(ZA(Uo)), y.appendChild(En(CA().shake_sdk_dialog_add_attachment_grab_screenshot)), y.onclick = Wr;
    const E = uA();
    E.appendChild(y), E.appendChild(Q);
    const I = uA();
    return I.classList.add("shake-sdk-attachments-empty"), I.appendChild(E), I;
  })(), g = uA();
  g.classList.add("shake-sdk-attachments-list-wrap");
  const B = uA();
  B.classList.add("shake-sdk-attachments-preview-wrap");
  const m = () => {
    l.remove(), t.appendChild(n);
  }, v = () => {
    n.remove(), t.appendChild(l);
  }, b = Yh(e, (Q) => {
    var y;
    Q ? (n.parentNode || m(), (y = Q ?? "", new Promise((E, I) => {
      const M = indexedDB.open(ve, 1);
      M.onerror = function() {
        I("Error opening database");
      }, M.onsuccess = function(O) {
        const R = O.target.result.transaction([VA], "readonly").objectStore(VA).get(y);
        R.onsuccess = function(p) {
          const AA = p.target.result;
          AA ? E(AA) : I("File not found in IndexedDB");
        }, R.onerror = function() {
          I("Error reading file from IndexedDB");
        };
      }, M.onupgradeneeded = function(O) {
        O.target.result.createObjectStore(VA, { keyPath: "name" });
      };
    })).then((E) => {
      B.innerText = "", B.appendChild(zh(E));
    })) : l.parentNode || v();
  });
  return g.appendChild(b), n.appendChild(g), n.appendChild(B), e.length > 0 ? m() : v(), t;
}, Ho = (e, t) => {
  const n = Pr(e), l = document.createElement("div");
  l.classList.add("shake-sdk-sheet"), l.appendChild(n), t.forEach((v) => {
    l.appendChild(qh(v, () => {
      v.onClick(), B.remove();
    }));
  });
  const g = document.createElement("div");
  g.classList.add("shake-sdk-sheet-background"), g.appendChild(l), g.onclick = () => B.remove();
  const B = document.createElement("div"), m = B.attachShadow({ mode: "open" });
  return m.appendChild(g), vt(m), B;
}, qh = (e, t) => {
  const n = ZA(e.icon), l = Hs(e.text), g = document.createElement("button");
  return g.classList.add("shake-sdk-sheet-item"), g.onclick = t, g.appendChild(n), g.appendChild(l), g;
}, xr = (e) => {
  document.body.appendChild(e);
}, Zh = ({ label: e, items: t, onSelectionChange: n, selectedValue: l }) => {
  const g = uA(), B = uA();
  B.classList.add("shake-sdk-select-dropdown");
  const m = ZA("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='caret-down-icon'%20clip-path='url(%23clip0_15248_22126)'%3e%3cpath%20id='Vector'%20d='M8%2010L12%2014L16%2010'%20stroke='%23636366'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15248_22126'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  m.classList.add("shake-sdk-dropdown-icon"), B.appendChild(m);
  const v = document.createElement("label");
  v.textContent = e, v.classList.add("shake-sdk-select-dropdown-label");
  const b = uA();
  b.classList.add("shake-sdk-select-dropdown-chosen"), B.appendChild(v);
  const Q = document.createElement("ul");
  Q.classList.add("shake-sdk-select-options"), t.forEach((E) => {
    const I = document.createElement("li");
    I.classList.add("shake-sdk-select-option"), I.dataset.value = E.value, I.textContent = E.label, I.addEventListener("click", function() {
      b.textContent = I.textContent, Q.style.display = "none", I.dataset.value && n(I.dataset.value);
    }), Q.appendChild(I);
  });
  const y = Array.from(Q.children).find((E) => E.dataset.value === l);
  return y && (b.textContent = y.textContent), B.addEventListener("click", function(E) {
    E.stopPropagation(), window.innerWidth > 1024 ? (Q.style.display = Q.style.display === "block" ? "none" : "block", Q.style.display === "block" ? B.classList.add("active") : B.classList.remove("active")) : xr(((I, M, O) => {
      const R = [];
      return M.forEach((p) => {
        R.push({ text: p.label, icon: p.icon, onClick: () => {
          O(p);
        } });
      }), Ho(I, R);
    })(e, t, (I) => {
      b.textContent = I.label, n(l);
    }));
  }), B.addEventListener("focus", function() {
    B.classList.add("active");
  }), B.addEventListener("blur", function() {
    B.classList.remove("active");
  }), document.addEventListener("click", (E) => {
    const I = E.target;
    B.contains(I) || Q.contains(I) || (Q.style.display = "none", B.classList.remove("active"));
  }), B.append(b), g.appendChild(B), g.appendChild(Q), g;
}, Ur = "data:image/svg+xml,%3csvg%20width='50'%20height='51'%20viewBox='0%200%2050%2051'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.834%2021.5598L29.1673%2029.8931'%20stroke='%231C1C1E'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M29.1673%2021.56L20.834%2029.8933'%20stroke='%231C1C1E'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Bi = ({ image: e, onClick: t }) => {
  const n = ZA(e), l = document.createElement("button");
  return l.classList.add("shake-sdk-toolbar-button"), l.onclick = t, l.appendChild(n), l;
}, $h = () => ((e, t) => {
  const n = Pr(e), l = Hs(t), g = document.createElement("div");
  g.classList.add("shake-sdk-sheet"), g.appendChild(n), g.appendChild(l);
  const B = document.createElement("div");
  B.classList.add("shake-sdk-sheet-background"), B.appendChild(g), B.onclick = () => m.remove();
  const m = document.createElement("div"), v = m.attachShadow({ mode: "open" });
  return v.appendChild(B), vt(v), m;
})(CA().shake_sdk_dialog_attachment_limit_title, CA().shake_sdk_dialog_attachment_limit_message), Oo = "data:image/svg+xml,%3csvg%20width='50'%20height='51'%20viewBox='0%200%2050%2051'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.834%2021.5598L29.1673%2029.8931'%20stroke='%23FFFFFF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M29.1673%2021.56L20.834%2029.8933'%20stroke='%23FFFFFF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Au = (e) => {
  yA(`Opening image: ${e.name}`), document.body.appendChild(((t) => {
    const n = Bi({ image: Oo, onClick: () => {
      B.remove();
    } }), l = uA();
    l.classList.add("shake-sdk-image-preview-toolbar-fs"), l.appendChild(n);
    const g = uA();
    g.classList.add("shake-sdk-image-preview-root-fs"), g.appendChild(l), g.appendChild(Io(t));
    const B = document.createElement("div"), m = B.attachShadow({ mode: "open" });
    return vt(m), m.appendChild(g), B;
  })(e));
}, tu = (e) => {
  yA("Opening video: " + e.name), document.body.appendChild(((t) => {
    const n = Bi({ image: Oo, onClick: () => {
      v.remove();
    } }), l = uA();
    l.classList.add("shake-sdk-video-preview-toolbar-fs"), l.appendChild(n);
    const g = URL.createObjectURL(t), B = Si({ src: g, controls: !0, autoplay: !0 });
    B.classList.add("shake-sdk-video-preview-fs");
    const m = uA();
    m.classList.add("shake-sdk-video-preview-root-fs"), m.appendChild(l), m.appendChild(B);
    const v = document.createElement("div"), b = v.attachShadow({ mode: "open" });
    return vt(b), b.appendChild(m), v;
  })(e.data));
}, eu = (e) => {
  const t = QA.attachmentsManager, n = /* @__PURE__ */ new Map(), l = (v) => {
    v.type == _A.IMAGE ? Au(v) : v.type == _A.VIDEO && tu(v);
  }, g = (v) => {
    t.removeAttachment(v);
  };
  t.removeObservers.push((v) => {
    const b = n.get(v.name);
    b && (b.remove(), n.delete(v.name));
  }), t.updateObservers.push((v) => {
    const b = n.get(v.name);
    b && ((Q, y) => {
      const E = URL.createObjectURL(y.drawingData ?? y.data), I = Q.getElementsByClassName("shake-sdk-attachment-item-thumbnail-small");
      y.type == _A.IMAGE && (I[0].src = E), y.type == _A.VIDEO && (I[0].src = E);
    })(b, v);
  });
  const B = uA();
  B.classList.add("shake-sdk-attachments-items-small"), e.forEach((v) => {
    const b = ((Q, y, E) => {
      const I = we(To);
      let M;
      I.classList.add("shake-sdk-attachment-item-remove-small"), I.onclick = (p) => {
        p.stopPropagation(), E(Q);
      };
      const O = URL.createObjectURL(Q.drawingData ?? Q.data);
      M = Q.type == _A.IMAGE ? ZA(O) : Si({ src: O + "#t=0.1", autoplay: !0 }), M.classList.add("shake-sdk-attachment-item-thumbnail-small"), M.onclick = () => y(Q);
      const R = uA();
      return R.classList.add("shake-sdk-attachment-item-small"), R.appendChild(M), R.appendChild(I), R;
    })(v, l, g);
    n.set(v.name, b), B.appendChild(b);
  });
  const m = ((v) => {
    const b = we(_o);
    b.classList.add("shake-sdk-attachment-add-button-small"), b.onclick = v;
    const Q = uA();
    return Q.classList.add("shake-sdk-attachments-add-item-small"), Q.appendChild(b), Q;
  })(async () => {
    await So() ? xr($h()) : xr((() => {
      const v = [];
      return v.push({ text: CA().shake_sdk_dialog_add_attachment_grab_screenshot, icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20fill='%2300000000'%20d='M13.5,6.75h-2.25c-2.485,0%20-4.5,2.015%20-4.5,4.5v2.25M40.5,47.25h2.25c2.485,0%204.5,-2.015%204.5,-4.5V40.5M6.75,40.5v2.25c0,2.485%202.015,4.5%204.5,4.5h2.25M47.25,13.5v-2.25c0,-2.485%20-2.015,-4.5%20-4.5,-4.5H40.5'%20stroke-width='3.38'%20stroke='%234CD266'/%3e%3c/svg%3e", onClick: Wr }), pi() || v.push({ text: CA().shake_sdk_dialog_add_attachment_record_screen, icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20fill='%2300000000'%20d='M37.487,32.702L32.57,29.67v-5.342l4.918,-3.03c0.382,-0.236%200.861,-0.247%201.253,-0.028%200.392,0.218%200.635,0.632%200.635,1.08v9.297c0,0.45%20-0.243,0.863%20-0.635,1.081%20-0.392,0.219%20-0.871,0.208%20-1.253,-0.027z'%20stroke-width='3.375'%20stroke='%23FF9C0A'/%3e%3cpath%20fill='%2300000000'%20d='M16.275,18.956L30.919,18.956A1.65,1.65%200,0%201,32.569%2020.606L32.569,33.393A1.65,1.65%200,0%201,30.919%2035.043L16.275,35.043A1.65,1.65%200,0%201,14.625%2033.393L14.625,20.606A1.65,1.65%200,0%201,16.275%2018.956z'%20stroke-width='3.375'%20stroke='%23FF9C0A'/%3e%3cpath%20fill='%2300000000'%20d='M11.75,6.75L42.25,6.75A5,5%200,0%201,47.25%2011.75L47.25,42.25A5,5%200,0%201,42.25%2047.25L11.75,47.25A5,5%200,0%201,6.75%2042.25L6.75,11.75A5,5%200,0%201,11.75%206.75z'%20stroke-width='3.375'%20stroke='%23FF9C0A'/%3e%3c/svg%3e", onClick: Yr }), Ho(CA().shake_sdk_dialog_add_attachment, v);
    })());
  });
  return B.appendChild(m), B;
}, Er = (e) => {
  e ? new Fr(CA().shake_sdk_dialog_ticket_sent_message, 4e3, CA().shake_sdk_dialog_ticket_sent_title) : new Fr(CA().shake_sdk_error_message, 4e3);
}, iu = (e, t) => [{ type: ii.TITLE, value: e, label: "Title" }, { type: ii.PICKER, value: t, label: "Ticket type" }], ru = [{ icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20fill='%2300000000'%20d='m40.5,15.75%20l-2.25,4.5%20-3,2.063M11.25,27h6.997M35.752,27h6.998M13.5,6.75h-2.25a4.499,4.499%200,0%200,-4.5%204.5v2.25M40.5,47.25h2.25c2.486,0%204.5,-2.014%204.5,-4.5V40.5M6.75,40.5v2.25c0,2.486%202.014,4.5%204.5,4.5h2.25M47.25,13.5v-2.25c0,-2.486%20-2.014,-4.5%20-4.5,-4.5H40.5M13.5,15.75l2.25,4.5%203,2.063M27.999,38.25h-2a6.75,6.75%200,0%201,-6.75%20-6.75v-6.75c0,-2.486%202.014,-4.5%204.5,-4.5h6.5c2.486,0%204.5,2.014%204.5,4.5v6.75a6.75,6.75%200,0%201,-6.75%206.75zM13.5,38.25l2.25,-4.5%203,-2.063M40.5,38.25l-2.25,-4.5%20-3,-2.063M31.5,20.25h-9v-4.5a2.25,2.25%200,0%201,2.25%20-2.25h4.5a2.25,2.25%200,0%201,2.25%202.25v4.5z'%20stroke-width='3.38'%20stroke='%23B77DFF'/%3e%3c/svg%3e", value: ce.BUG, label: CA().shake_sdk_new_ticket_feedback_type_bug }, { icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20fill='%2300000000'%20d='M42.75,47.25h-31.5a4.499,4.499%200,0%201,-4.5%20-4.5v-31.5c0,-2.486%202.014,-4.5%204.5,-4.5h31.5c2.486,0%204.5,2.014%204.5,4.5v31.5c0,2.486%20-2.014,4.5%20-4.5,4.5z'%20stroke-width='3.38'%20stroke='%23FF9F0A'/%3e%3cpath%20fill='%2300000000'%20d='M27,29.813v-0.563c0,-1.838%201.136,-2.835%202.275,-3.6%201.111,-0.75%202.225,-1.726%202.225,-3.526%200,-2.486%20-2.014,-4.5%20-4.5,-4.5a4.499,4.499%200,0%200,-4.5%204.5M26.998,36a0.563,0.563%200,1%200,0.005%201.125,0.563%200.563,0%200,0%20-0.005,-1.125'%20stroke-width='3.38'%20stroke='%23FF9F0A'/%3e%3c/svg%3e", value: ce.QUESTION, label: CA().shake_sdk_new_ticket_feedback_type_question }, { icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='54'%20height='54'%3e%3cpath%20fill='%2300000000'%20d='M31.275,47.25h0a20.507,20.507%200,0%200,15.417%20-15.417M38.25,22.5V9M31.5,15.75H45M6.75,22.725h0A20.504,20.504%200,0%201,22.167%207.304M22.167,47.25h0A20.511,20.511%200,0%201,6.75%2031.833'%20stroke-width='3.38'%20stroke='%23D75ED7'/%3e%3c/svg%3e", value: ce.SUGGESTION, label: CA().shake_sdk_new_ticket_feedback_type_suggestion }], nu = (e, t) => {
  let n = e.feedbackType, l = e.description, g = !0, B = !1;
  const m = Xr();
  m.classList.add("shake-sdk-new-ticket");
  const v = uA();
  v.classList.add("shake-sdk-new-ticket-form");
  const b = ((p = me, AA = !1, rA = () => {
  }) => {
    const oA = Bi({ image: Ur, onClick: () => rA() }), u = Bi({ image: Ur, onClick: p }), s = document.createElement("div");
    return s.classList.add("shake-sdk-toolbar"), AA && s.appendChild(oA), s.appendChild(u), s;
  })(), Q = Pr(CA().shake_sdk_ticket_form_title);
  Q.classList.add("shake-sdk-new-ticket-title"), m.appendChild(Q);
  const y = Nt();
  function E() {
    g = !l.trim() || B, y.disabled = g, I.textContent = B ? CA().shake_sdk_ticket_form_submit_button_text_loading : CA().shake_sdk_ticket_form_submit_button_text;
  }
  y.disabled = !0, y.onclick = async () => {
    B = !0, E(), await (async ({ feedbackType: p, description: AA }) => {
      yA("Ticket submitted.");
      const rA = Gt.shakeFeedbackService, oA = QA.localStorage.getShakeState(), u = await vi(), s = oA.ticket;
      s && (s.tags.push(p), s.custom_fields = iu(AA, p), await rA.sendUserFeedback(s, u).then(() => Er(!0)).catch(() => Er())), me();
    })({ feedbackType: n, description: l }), B = !1;
  };
  const I = Os(CA().shake_sdk_ticket_form_submit_button_text);
  y.appendChild(I);
  const M = Zh({ label: CA().shake_sdk_new_ticket_feedback_type_title, items: ru, onSelectionChange: (p) => {
    n = p;
    const AA = QA.localStorage.getShakeState();
    AA && (AA.feedbackType = p, QA.localStorage.setShakeState(AA));
  }, selectedValue: n });
  v.appendChild(b), v.appendChild(Q), v.appendChild(M);
  const O = (({ onChange: p, maxLength: AA, value: rA, label: oA }) => {
    const u = uA();
    u.classList.add("shake-sdk-textarea-container");
    const s = document.createElement("label");
    s.textContent = oA, s.classList.add("shake-sdk-textarea-label");
    const o = document.createElement("textarea");
    return o.classList.add("shake-sdk-textarea"), o.rows = 12, o.textContent = rA || null, o.addEventListener("input", function(d) {
      let A = d.target.value;
      AA && A.length > AA && (A = A.slice(0, AA), d.target.value = A), p(d.target.value);
    }), u.appendChild(s), u.appendChild(o), u;
  })({ onChange: (p) => {
    l = p;
    const AA = QA.localStorage.getShakeState();
    AA && (AA.description = p, QA.localStorage.setShakeState(AA), E());
  }, maxLength: 1e4, value: l, label: CA().shake_sdk_ticket_form_description_placeholder });
  O.classList.add("shake-sdk-styled-textarea"), v.appendChild(O);
  const R = eu(t);
  return v.appendChild(R), m.appendChild(v), m.appendChild(y), m;
}, Lo = (e, t) => {
  const n = we(Ur);
  n.classList.add("shake-sdk-close-button"), n.onclick = () => me(!0);
  const l = Jh(t), g = uA();
  g.classList.add("shake-sdk-content-left"), g.appendChild(n), g.appendChild(l);
  const B = nu(e, t), m = uA();
  m.classList.add("shake-sdk-content-right"), m.appendChild(B);
  const v = uA();
  v.classList.add("shake-sdk-content-wrap"), v.appendChild(g), v.appendChild(m);
  const b = uA();
  b.classList.add("shake-sdk-content"), b.appendChild(v);
  const Q = document.createElement("div");
  Q.id = "shake-sdk-root";
  const y = Q.attachShadow({ mode: "open" });
  return y.appendChild(b), vt(y), Q;
};
var Zi, $i, _r = { exports: {} };
Zi = _r, $i = _r.exports, function(e, t) {
  var n = "function", l = "undefined", g = "object", B = "string", m = "major", v = "model", b = "name", Q = "type", y = "vendor", E = "version", I = "architecture", M = "console", O = "mobile", R = "tablet", p = "smarttv", AA = "wearable", rA = "embedded", oA = "Amazon", u = "Apple", s = "ASUS", o = "BlackBerry", d = "Browser", A = "Chrome", i = "Firefox", r = "Google", h = "Huawei", a = "LG", c = "Microsoft", f = "Motorola", w = "Opera", C = "Samsung", x = "Sharp", U = "Sony", F = "Xiaomi", k = "Zebra", H = "Facebook", L = "Chromium OS", K = "Mac OS", W = function(N) {
    for (var z = {}, Z = 0; Z < N.length; Z++)
      z[N[Z].toUpperCase()] = N[Z];
    return z;
  }, V = function(N, z) {
    return typeof N === B && _(z).indexOf(_(N)) !== -1;
  }, _ = function(N) {
    return N.toLowerCase();
  }, S = function(N, z) {
    if (typeof N === B)
      return N = N.replace(/^\s\s*/, ""), typeof z === l ? N : N.substring(0, 500);
  }, P = function(N, z) {
    for (var Z, tA, eA, q, iA, J, lA = 0; lA < z.length && !iA; ) {
      var nA = z[lA], hA = z[lA + 1];
      for (Z = tA = 0; Z < nA.length && !iA && nA[Z]; )
        if (iA = nA[Z++].exec(N))
          for (eA = 0; eA < hA.length; eA++)
            J = iA[++tA], typeof (q = hA[eA]) === g && q.length > 0 ? q.length === 2 ? typeof q[1] == n ? this[q[0]] = q[1].call(this, J) : this[q[0]] = q[1] : q.length === 3 ? typeof q[1] !== n || q[1].exec && q[1].test ? this[q[0]] = J ? J.replace(q[1], q[2]) : t : this[q[0]] = J ? q[1].call(this, J, q[2]) : t : q.length === 4 && (this[q[0]] = J ? q[3].call(this, J.replace(q[1], q[2])) : t) : this[q] = J || t;
      lA += 2;
    }
  }, G = function(N, z) {
    for (var Z in z)
      if (typeof z[Z] === g && z[Z].length > 0) {
        for (var tA = 0; tA < z[Z].length; tA++)
          if (V(z[Z][tA], N))
            return Z === "?" ? t : Z;
      } else if (V(z[Z], N))
        return Z === "?" ? t : Z;
    return N;
  }, X = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" }, D = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [E, [b, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [E, [b, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [b, E], [/opios[\/ ]+([\w\.]+)/i], [E, [b, w + " Mini"]], [/\bopr\/([\w\.]+)/i], [E, [b, w]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [E, [b, "Baidu"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [b, E], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [E, [b, "UC" + d]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [E, [b, "WeChat"]], [/konqueror\/([\w\.]+)/i], [E, [b, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [E, [b, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [E, [b, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [E, [b, "Smart Lenovo " + d]], [/(avast|avg)\/([\w\.]+)/i], [[b, /(.+)/, "$1 Secure " + d], E], [/\bfocus\/([\w\.]+)/i], [E, [b, i + " Focus"]], [/\bopt\/([\w\.]+)/i], [E, [b, w + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [E, [b, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [E, [b, "Dolphin"]], [/coast\/([\w\.]+)/i], [E, [b, w + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [E, [b, "MIUI " + d]], [/fxios\/([-\w\.]+)/i], [E, [b, i]], [/\bqihu|(qi?ho?o?|360)browser/i], [[b, "360 " + d]], [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i], [[b, /(.+)/, "$1 " + d], E], [/samsungbrowser\/([\w\.]+)/i], [E, [b, C + " Internet"]], [/(comodo_dragon)\/([\w\.]+)/i], [[b, /_/g, " "], E], [/metasr[\/ ]?([\d\.]+)/i], [E, [b, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[b, "Sogou Mobile"], E], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i], [b, E], [/(lbbrowser)/i, /\[(linkedin)app\]/i], [b], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[b, H], E], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [b, E], [/\bgsa\/([\w\.]+) .*safari\//i], [E, [b, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [E, [b, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [E, [b, A + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[b, A + " WebView"], E], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [E, [b, "Android " + d]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [b, E], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [E, [b, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [E, b], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [b, [E, G, { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }]], [/(webkit|khtml)\/([\w\.]+)/i], [b, E], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[b, "Netscape"], E], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [E, [b, i + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [b, E], [/(cobalt)\/([\w\.]+)/i], [b, [E, /master.|lts./, ""]]], cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[I, "amd64"]], [/(ia32(?=;))/i], [[I, _]], [/((?:i[346]|x)86)[;\)]/i], [[I, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[I, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[I, "armhf"]], [/windows (ce|mobile); ppc;/i], [[I, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[I, /ower/, "", _]], [/(sun4\w)[;\)]/i], [[I, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[I, _]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [v, [y, C], [Q, R]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [v, [y, C], [Q, O]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [v, [y, u], [Q, O]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [v, [y, u], [Q, R]], [/(macintosh);/i], [v, [y, u]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [v, [y, x], [Q, O]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [v, [y, h], [Q, R]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [v, [y, h], [Q, O]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[v, /_/g, " "], [y, F], [Q, O]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[v, /_/g, " "], [y, F], [Q, R]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [v, [y, "OPPO"], [Q, O]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [v, [y, "Vivo"], [Q, O]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [v, [y, "Realme"], [Q, O]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [v, [y, f], [Q, O]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [v, [y, f], [Q, R]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [v, [y, a], [Q, R]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [v, [y, a], [Q, O]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [v, [y, "Lenovo"], [Q, R]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[v, /_/g, " "], [y, "Nokia"], [Q, O]], [/(pixel c)\b/i], [v, [y, r], [Q, R]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [v, [y, r], [Q, O]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [v, [y, U], [Q, O]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[v, "Xperia Tablet"], [y, U], [Q, R]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [v, [y, "OnePlus"], [Q, O]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [v, [y, oA], [Q, R]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[v, /(.+)/g, "Fire Phone $1"], [y, oA], [Q, O]], [/(playbook);[-\w\),; ]+(rim)/i], [v, y, [Q, R]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [v, [y, o], [Q, O]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [v, [y, s], [Q, R]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [v, [y, s], [Q, O]], [/(nexus 9)/i], [v, [y, "HTC"], [Q, R]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [y, [v, /_/g, " "], [Q, O]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [v, [y, "Acer"], [Q, R]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [v, [y, "Meizu"], [Q, O]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [v, [y, "Ulefone"], [Q, O]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [y, v, [Q, O]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [y, v, [Q, R]], [/(surface duo)/i], [v, [y, c], [Q, R]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [v, [y, "Fairphone"], [Q, O]], [/(u304aa)/i], [v, [y, "AT&T"], [Q, O]], [/\bsie-(\w*)/i], [v, [y, "Siemens"], [Q, O]], [/\b(rct\w+) b/i], [v, [y, "RCA"], [Q, R]], [/\b(venue[\d ]{2,7}) b/i], [v, [y, "Dell"], [Q, R]], [/\b(q(?:mv|ta)\w+) b/i], [v, [y, "Verizon"], [Q, R]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [v, [y, "Barnes & Noble"], [Q, R]], [/\b(tm\d{3}\w+) b/i], [v, [y, "NuVision"], [Q, R]], [/\b(k88) b/i], [v, [y, "ZTE"], [Q, R]], [/\b(nx\d{3}j) b/i], [v, [y, "ZTE"], [Q, O]], [/\b(gen\d{3}) b.+49h/i], [v, [y, "Swiss"], [Q, O]], [/\b(zur\d{3}) b/i], [v, [y, "Swiss"], [Q, R]], [/\b((zeki)?tb.*\b) b/i], [v, [y, "Zeki"], [Q, R]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[y, "Dragon Touch"], v, [Q, R]], [/\b(ns-?\w{0,9}) b/i], [v, [y, "Insignia"], [Q, R]], [/\b((nxa|next)-?\w{0,9}) b/i], [v, [y, "NextBook"], [Q, R]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[y, "Voice"], v, [Q, O]], [/\b(lvtel\-)?(v1[12]) b/i], [[y, "LvTel"], v, [Q, O]], [/\b(ph-1) /i], [v, [y, "Essential"], [Q, O]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [v, [y, "Envizen"], [Q, R]], [/\b(trio[-\w\. ]+) b/i], [v, [y, "MachSpeed"], [Q, R]], [/\btu_(1491) b/i], [v, [y, "Rotor"], [Q, R]], [/(shield[\w ]+) b/i], [v, [y, "Nvidia"], [Q, R]], [/(sprint) (\w+)/i], [y, v, [Q, O]], [/(kin\.[onetw]{3})/i], [[v, /\./g, " "], [y, c], [Q, O]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [v, [y, k], [Q, R]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [v, [y, k], [Q, O]], [/smart-tv.+(samsung)/i], [y, [Q, p]], [/hbbtv.+maple;(\d+)/i], [[v, /^/, "SmartTV"], [y, C], [Q, p]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[y, a], [Q, p]], [/(apple) ?tv/i], [y, [v, u + " TV"], [Q, p]], [/crkey/i], [[v, A + "cast"], [y, r], [Q, p]], [/droid.+aft(\w+)( bui|\))/i], [v, [y, oA], [Q, p]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [v, [y, x], [Q, p]], [/(bravia[\w ]+)( bui|\))/i], [v, [y, U], [Q, p]], [/(mitv-\w{5}) bui/i], [v, [y, F], [Q, p]], [/Hbbtv.*(technisat) (.*);/i], [y, v, [Q, p]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[y, S], [v, S], [Q, p]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[Q, p]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [y, v, [Q, M]], [/droid.+; (shield) bui/i], [v, [y, "Nvidia"], [Q, M]], [/(playstation [345portablevi]+)/i], [v, [y, U], [Q, M]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [v, [y, c], [Q, M]], [/((pebble))app/i], [y, v, [Q, AA]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [v, [y, u], [Q, AA]], [/droid.+; (glass) \d/i], [v, [y, r], [Q, AA]], [/droid.+; (wt63?0{2,3})\)/i], [v, [y, k], [Q, AA]], [/(quest( 2| pro)?)/i], [v, [y, H], [Q, AA]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [y, [Q, rA]], [/(aeobc)\b/i], [v, [y, oA], [Q, rA]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [v, [Q, O]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [v, [Q, R]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[Q, R]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[Q, O]], [/(android[-\w\. ]{0,9});.+buil/i], [v, [y, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [E, [b, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [E, [b, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [b, E], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [E, b]], os: [[/microsoft (windows) (vista|xp)/i], [b, E], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [b, [E, G, X]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[E, G, X], [b, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[E, /_/g, "."], [b, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[b, K], [E, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [E, b], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [b, E], [/\(bb(10);/i], [E, [b, o]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [E, [b, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [E, [b, i + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [E, [b, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [E, [b, "watchOS"]], [/crkey\/([\d\.]+)/i], [E, [b, A + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[b, L], E], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [b, E], [/(sunos) ?([\w\.\d]*)/i], [[b, "Solaris"], E], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [b, E]] }, T = function(N, z) {
    if (typeof N === g && (z = N, N = t), !(this instanceof T))
      return new T(N, z).getResult();
    var Z = typeof e !== l && e.navigator ? e.navigator : t, tA = N || (Z && Z.userAgent ? Z.userAgent : ""), eA = Z && Z.userAgentData ? Z.userAgentData : t, q = z ? function(J, lA) {
      var nA = {};
      for (var hA in J)
        lA[hA] && lA[hA].length % 2 == 0 ? nA[hA] = lA[hA].concat(J[hA]) : nA[hA] = J[hA];
      return nA;
    }(D, z) : D, iA = Z && Z.userAgent == tA;
    return this.getBrowser = function() {
      var J = {};
      return J[b] = t, J[E] = t, P.call(J, tA, q.browser), J[m] = function(lA) {
        return typeof lA === B ? lA.replace(/[^\d\.]/g, "").split(".")[0] : t;
      }(J[E]), iA && Z && Z.brave && typeof Z.brave.isBrave == n && (J[b] = "Brave"), J;
    }, this.getCPU = function() {
      var J = {};
      return J[I] = t, P.call(J, tA, q.cpu), J;
    }, this.getDevice = function() {
      var J = {};
      return J[y] = t, J[v] = t, J[Q] = t, P.call(J, tA, q.device), iA && !J[Q] && eA && eA.mobile && (J[Q] = O), iA && J[v] == "Macintosh" && Z && typeof Z.standalone !== l && Z.maxTouchPoints && Z.maxTouchPoints > 2 && (J[v] = "iPad", J[Q] = R), J;
    }, this.getEngine = function() {
      var J = {};
      return J[b] = t, J[E] = t, P.call(J, tA, q.engine), J;
    }, this.getOS = function() {
      var J = {};
      return J[b] = t, J[E] = t, P.call(J, tA, q.os), iA && !J[b] && eA && eA.platform != "Unknown" && (J[b] = eA.platform.replace(/chrome os/i, L).replace(/macos/i, K)), J;
    }, this.getResult = function() {
      return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
    }, this.getUA = function() {
      return tA;
    }, this.setUA = function(J) {
      return tA = typeof J === B && J.length > 500 ? S(J, 500) : J, this;
    }, this.setUA(tA), this;
  };
  T.VERSION = "1.0.37", T.BROWSER = W([b, E, m]), T.CPU = W([I]), T.DEVICE = W([v, y, Q, M, O, p, R, AA, rA]), T.ENGINE = T.OS = W([b, E]), Zi.exports && ($i = Zi.exports = T), $i.UAParser = T;
  var j = typeof e !== l && (e.jQuery || e.Zepto);
  if (j && !j.ua) {
    var Y = new T();
    j.ua = Y.getResult(), j.ua.get = function() {
      return Y.getUA();
    }, j.ua.set = function(N) {
      Y.setUA(N);
      var z = Y.getResult();
      for (var Z in z)
        j.ua[Z] = z[Z];
    };
  }
}(typeof window == "object" ? window : fa);
var su = _r.exports;
class Kt {
}
sA(Kt, "metadata", {});
async function Do() {
  const e = new su.UAParser(navigator.userAgent), t = await cu().then((n) => n);
  return { timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, issue_reported_time: br((/* @__PURE__ */ new Date()).toString()), os: ei.WEB, device: ou(), browser_name: e.getBrowser().name, browser_version: e.getBrowser().version, current_view: window.location.pathname, screen_height: Bs().height, screen_width: Bs().width, metadata_: Kt.metadata, sdk_version: Mr, platform: ei.WEB, report_type: Ts.MANUAL, screen_density: window.devicePixelRatio || 1, locale: window.navigator.language || null, os_version: e.getOS().version, os_name: e.getOS().name, device_orientation: au(), battery_level: t == null ? void 0 : t.level, battery_status: t != null && t.charging ? 1 : 0, font_scale: lu(), network_type: hu(), permissions: await fu().then((n) => n), browser_height: ws().height, browser_width: ws().width, cookies_enabled: uu(), is_mobile: du(), cpu_arch: e.getCPU().architecture, app_version: "1.0", tags: [] };
}
function ou() {
  const e = navigator.userAgent;
  return e.match(/Android/i) ? "Android Device" : e.match(/iPhone|iPad|iPod/i) ? "iOS Device" : e.match(/Windows Phone/i) ? "Windows Phone" : e.match(/Windows/i) ? "Windows PC" : e.match(/Macintosh|Mac OS/i) ? "Macintosh" : e.match(/Linux/i) ? "Linux PC" : null;
}
function Bs() {
  return { width: window.screen.width, height: window.screen.height };
}
function ws() {
  return { width: window.innerWidth || document.documentElement.clientWidth, height: window.innerHeight || document.documentElement.clientHeight };
}
function au() {
  const e = window.screen.orientation;
  return e ? e.type.toLocaleLowerCase().includes("landscape-primary") ? 0 : e.type.toLocaleLowerCase().includes("landscape-secondary") ? 180 : e.type.toLocaleLowerCase().includes("portrait-primary") ? 90 : e.type.toLocaleLowerCase().includes("portrait-secondary") ? 270 : null : null;
}
const cu = async () => {
  if (!("getBattery" in navigator))
    return null;
  try {
    return await navigator.getBattery();
  } catch (e) {
    return yA("Error getting battery status: " + (e == null ? void 0 : e.message)), null;
  }
}, lu = () => {
  const e = document.createElement("div");
  e.style.fontSize = "1rem", document.body.appendChild(e);
  const t = window.getComputedStyle(e), n = t.getPropertyValue("font-size") ? parseFloat(t.getPropertyValue("font-size")) : null;
  return document.body.removeChild(e), n;
}, hu = () => {
  const e = "onLine" in navigator && navigator.onLine || !1;
  return "connection" in navigator && e && navigator.connection.effectiveType || null;
}, uu = () => "cookieEnabled" in navigator && navigator.cookieEnabled || null, du = () => {
  var e;
  return "userAgentData" in navigator ? (e = navigator.userAgentData) == null ? void 0 : e.mobile : null;
};
async function gu(e) {
  try {
    return await navigator.permissions.query({ name: e });
  } catch (t) {
    return yA("Error checking permission status: " + t.message), null;
  }
}
async function fu() {
  const e = [];
  for (const t of ma)
    try {
      const n = await gu(t);
      n && n.state && n.state === "granted" && e.push({ name: t, state: n.state });
    } catch (n) {
      yA("Error checking permission status: " + n.message);
    }
  return e;
}
const Mo = async () => {
  yA("Shake opened.");
  const e = QA.localStorage;
  Gt.shakeAuthService.authenticate(jA.clientId, jA.clientSecret), Bu();
  const t = e.getShakeState();
  if (!t.ticket) {
    const g = await new Nr().captureScreenshot(document.body);
    g && await Qo(g), t.ticket = await Do(), e.setShakeState(t);
  }
  const n = await vi(), l = Lo(t, n);
  document.body.appendChild(l), e.setShakeOpened(!0);
}, wi = "shake-sdk-main-button-root", pu = () => {
  const e = document.getElementById(wi);
  e && (e.style.display = "flex");
}, Bu = () => {
  const e = document.getElementById(wi);
  e && (e.style.display = "none");
};
class wu {
  constructor() {
    sA(this, "_language", ri.EN);
    sA(this, "_floatingButtonEnabled", !0);
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
    this._floatingButtonEnabled = t, kr();
  }
}
const kr = () => {
  if (QA.localStorage.isSDKEnabled())
    if (Sr.config.floatingButtonEnabled) {
      const e = (() => {
        const t = Nt();
        t.classList.add("shake-sdk-main-button");
        const n = ZA("data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14931_603)'%3e%3cpath%20d='M8.19434%2012.6212C10.9278%2015.3547%2014.6693%2016.0477%2016.5462%2014.1682C18.1282%2012.5862%2017.8823%209.68817%2016.1367%207.18042'%20stroke='%23B77DFF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.8599%204.82319C10.5725%202.29444%206.46177%201.97857%204.1719%204.26844C1.60902%206.83132%202.30202%2011.6788%205.7189%2015.0957C7.21501%2016.6164%209.06436%2017.7431%2011.1019%2018.3752'%20stroke='%23B77DFF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.8666%2010.8501L12.5002%2010.5228C12.7364%2010.4764%2012.9537%2010.3613%2013.1249%2010.1921L17.8954%205.42507C18.535%204.78514%2018.535%203.74801%2017.8954%203.10807C17.2555%202.46853%2016.2184%202.46853%2015.5784%203.10807L10.8079%207.87507C10.6374%208.04585%2010.5211%208.2632%2010.4737%208.49982L10.1499%2010.1334C10.0864%2010.4657%2010.3043%2010.7865%2010.6365%2010.8501C10.7125%2010.8646%2010.7906%2010.8646%2010.8666%2010.8501Z'%20stroke='%23880FFF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14931_603'%3e%3crect%20width='21'%20height='21'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
        n.alt = "Send feedback icon", n.classList.add("shake-sdk-main-button-icon");
        const l = Os(CA().shake_sdk_main_button_title);
        l.classList.add("shake-sdk-main-button-text"), t.appendChild(n), t.appendChild(l), t.addEventListener("mousedown", (m) => {
          m.stopPropagation(), m.preventDefault(), Mo();
        });
        const g = document.createElement("div");
        g.id = wi;
        const B = g.attachShadow({ mode: "open" });
        return vt(B), B.appendChild(t), g;
      })();
      document.body.appendChild(e);
    } else {
      const e = document.getElementById(wi);
      e == null || e.remove();
    }
}, ms = 5120, mu = { takeScreenshot: !0, showSuccessMessage: !1 }, Cu = (e) => {
  const t = [];
  return e && t.push({ type: ii.TITLE, value: e, label: "Title" }), t;
}, DA = class DA {
  static async start(t, n, l) {
    if (this.localStorage.getShakeDeviceId() || this.localStorage.setShakeDeviceId(Go()), !this.isLoading)
      if (this.isLoading = !0, t)
        if (n)
          if (l) {
            if (jA.clientId = t, jA.clientSecret = n, jA.bundleId = l, this.localStorage.isSDKEnabled())
              return kr(), void Un("Shake started.");
            await this.shakeAuthService.authenticate(t, n).finally(() => this.isLoading = !1), this.localStorage.isSDKEnabled() && (kr(), Un("Shake started."));
          } else
            Et("Shake not started. Bundle id is empty.");
        else
          Et("Cannot start Shake. Client secret is empty.");
      else
        Et("Cannot start Shake. Client id is empty.");
  }
};
sA(DA, "config", new wu()), sA(DA, "isLoading", !1), sA(DA, "localStorage", QA.localStorage), sA(DA, "shakeAuthService", Gt.shakeAuthService), sA(DA, "show", async () => await DA.ifSDKEnabled(async () => {
  await Mo();
})), sA(DA, "silentReport", async (t, n) => await DA.ifSDKEnabled(async () => {
  await (async (l, g = mu) => {
    yA("Silent report called.");
    const B = Gt.shakeFeedbackService, m = [];
    if (g.takeScreenshot) {
      const b = await new Nr().captureScreenshot(document.body);
      b && m.push({ data: b, type: _A.IMAGE, name: bo(_A.IMAGE), timestamp: (/* @__PURE__ */ new Date()).getTime() });
    }
    const v = await Do();
    v.tags.push("silent"), v.custom_fields = Cu(l), await B.sendUserFeedback(v, m), g.showSuccessMessage && Er(!0);
  })(t, n);
})), sA(DA, "setMetadata", (t, n) => {
  ((l, g) => {
    if (yA(`Set metadata: ${l}`), Object.keys(Kt.metadata).length >= 100)
      return void Et("Cannot set metadata. Limit of 100 items reached.");
    g.length > ms && (Et("Truncating metadata value. Value exceeded 5120 chars."), g = g.substring(0, ms)), Kt.metadata[l] = g;
  })(t, n);
}), sA(DA, "removeMetadata", (t) => {
  ((n) => {
    yA(`Removing metadata: ${n}`), delete Kt.metadata[n];
  })(t);
}), sA(DA, "clearMetadata", () => {
  yA("Clearing metadata"), Kt.metadata = {};
}), sA(DA, "ifSDKEnabled", async (t) => DA.localStorage.isSDKEnabled() ? (await t(), !0) : (Et("Please call Shake.start(clientId, clientSecret) before using Shake."), !1));
let Sr = DA;
export {
  Sr as default
};
//# sourceMappingURL=browser.js.map
