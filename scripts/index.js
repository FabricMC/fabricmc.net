function N() {
}
function z(t) {
  return t && typeof t == "object" && typeof t.then == "function";
}
function O(t) {
  return t();
}
function A() {
  return /* @__PURE__ */ Object.create(null);
}
function g(t) {
  t.forEach(O);
}
function B(t) {
  return typeof t == "function";
}
function V(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function L(t) {
  return Object.keys(t).length === 0;
}
function W(t, e) {
  t.appendChild(e);
}
function X(t, e, n) {
  t.insertBefore(e, n || null);
}
function T(t) {
  t.parentNode.removeChild(t);
}
function Y(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function Z(t) {
  return document.createElement(t);
}
function P(t) {
  return document.createTextNode(t);
}
function tt() {
  return P(" ");
}
function et() {
  return P("");
}
function nt(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function rt(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function ct(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function D(t) {
  return Array.from(t.childNodes);
}
function st(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function ut(t, e, n, r) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? "important" : "");
}
function ot(t, e) {
  for (let n = 0; n < t.options.length; n += 1) {
    const r = t.options[n];
    if (r.__value === e) {
      r.selected = !0;
      return;
    }
  }
  t.selectedIndex = -1;
}
function lt(t) {
  const e = t.querySelector(":checked") || t.options[0];
  return e && e.__value;
}
let m;
function a(t) {
  m = t;
}
function F() {
  if (!m)
    throw new Error("Function called outside component initialization");
  return m;
}
const p = [], S = [], b = [], C = [], I = Promise.resolve();
let k = !1;
function M() {
  k || (k = !0, I.then(w));
}
function v(t) {
  b.push(t);
}
const x = /* @__PURE__ */ new Set();
let y = 0;
function w() {
  const t = m;
  do {
    for (; y < p.length; ) {
      const e = p[y];
      y++, a(e), G(e.$$);
    }
    for (a(null), p.length = 0, y = 0; S.length; )
      S.pop()();
    for (let e = 0; e < b.length; e += 1) {
      const n = b[e];
      x.has(n) || (x.add(n), n());
    }
    b.length = 0;
  } while (p.length);
  for (; C.length; )
    C.pop()();
  k = !1, x.clear(), a(t);
}
function G(t) {
  if (t.fragment !== null) {
    t.update(), g(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(v);
  }
}
const $ = /* @__PURE__ */ new Set();
let f;
function H() {
  f = {
    r: 0,
    c: [],
    p: f
  };
}
function J() {
  f.r || g(f.c), f = f.p;
}
function q(t, e) {
  t && t.i && ($.delete(t), t.i(e));
}
function K(t, e, n, r) {
  if (t && t.o) {
    if ($.has(t))
      return;
    $.add(t), f.c.push(() => {
      $.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function at(t, e) {
  const n = e.token = {};
  function r(s, l, i, d) {
    if (e.token !== n)
      return;
    e.resolved = d;
    let u = e.ctx;
    i !== void 0 && (u = u.slice(), u[i] = d);
    const c = s && (e.current = s)(u);
    let _ = !1;
    e.block && (e.blocks ? e.blocks.forEach((o, h) => {
      h !== l && o && (H(), K(o, 1, 1, () => {
        e.blocks[h] === o && (e.blocks[h] = null);
      }), J());
    }) : e.block.d(1), c.c(), q(c, 1), c.m(e.mount(), e.anchor), _ = !0), e.block = c, e.blocks && (e.blocks[l] = c), _ && w();
  }
  if (z(t)) {
    const s = F();
    if (t.then((l) => {
      a(s), r(e.then, 1, e.value, l), a(null);
    }, (l) => {
      if (a(s), r(e.catch, 2, e.error, l), a(null), !e.hasCatch)
        throw l;
    }), e.current !== e.pending)
      return r(e.pending, 0), !0;
  } else {
    if (e.current !== e.then)
      return r(e.then, 1, e.value, t), !0;
    e.resolved = t;
  }
}
function it(t, e, n) {
  const r = e.slice(), { resolved: s } = t;
  t.current === t.then && (r[t.value] = s), t.current === t.catch && (r[t.error] = s), t.block.p(r, n);
}
function ft(t) {
  t && t.c();
}
function Q(t, e, n, r) {
  const { fragment: s, on_mount: l, on_destroy: i, after_update: d } = t.$$;
  s && s.m(e, n), r || v(() => {
    const u = l.map(O).filter(B);
    i ? i.push(...u) : g(u), t.$$.on_mount = [];
  }), d.forEach(v);
}
function R(t, e) {
  const n = t.$$;
  n.fragment !== null && (g(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function U(t, e) {
  t.$$.dirty[0] === -1 && (p.push(t), M(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function dt(t, e, n, r, s, l, i, d = [-1]) {
  const u = m;
  a(t);
  const c = t.$$ = {
    fragment: null,
    ctx: null,
    props: l,
    update: N,
    not_equal: s,
    bound: A(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    callbacks: A(),
    dirty: d,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  i && i(c.root);
  let _ = !1;
  if (c.ctx = n ? n(t, e.props || {}, (o, h, ...E) => {
    const j = E.length ? E[0] : h;
    return c.ctx && s(c.ctx[o], c.ctx[o] = j) && (!c.skip_bound && c.bound[o] && c.bound[o](j), _ && U(t, o)), h;
  }) : [], c.update(), _ = !0, g(c.before_update), c.fragment = r ? r(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const o = D(e.target);
      c.fragment && c.fragment.l(o), o.forEach(T);
    } else
      c.fragment && c.fragment.c();
    e.intro && q(t.$$.fragment), Q(t, e.target, e.anchor, e.customElement), w();
  }
  a(u);
}
class ht {
  $destroy() {
    R(this, 1), this.$destroy = N;
  }
  $on(e, n) {
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const s = r.indexOf(n);
      s !== -1 && r.splice(s, 1);
    };
  }
  $set(e) {
    this.$$set && !L(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
export {
  S as A,
  g as B,
  ht as S,
  tt as a,
  et as b,
  X as c,
  T as d,
  Z as e,
  lt as f,
  ut as g,
  at as h,
  dt as i,
  W as j,
  st as k,
  Y as l,
  v as m,
  N as n,
  ct as o,
  ot as p,
  nt as q,
  q as r,
  V as s,
  P as t,
  it as u,
  K as v,
  ft as w,
  Q as x,
  R as y,
  rt as z
};
