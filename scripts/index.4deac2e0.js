function k() {
}
function B(t) {
  return !!t && (typeof t == "object" || typeof t == "function") && typeof t.then == "function";
}
function O(t) {
  return t();
}
function C() {
  return /* @__PURE__ */ Object.create(null);
}
function y(t) {
  t.forEach(O);
}
function P(t) {
  return typeof t == "function";
}
function W(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function D(t) {
  return Object.keys(t).length === 0;
}
function X(t, e) {
  t.appendChild(e);
}
function Y(t, e, n) {
  t.insertBefore(e, n || null);
}
function L(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Z(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function tt(t) {
  return document.createElement(t);
}
function q(t) {
  return document.createTextNode(t);
}
function et() {
  return q(" ");
}
function nt() {
  return q("");
}
function rt(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function ct(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function st(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function F(t) {
  return Array.from(t.childNodes);
}
function ut(t, e) {
  e = "" + e, t.data !== e && (t.data = e);
}
function ot(t, e) {
  t.value = e ?? "";
}
function at(t, e, n, r) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? "important" : "");
}
function lt(t, e, n) {
  for (let r = 0; r < t.options.length; r += 1) {
    const s = t.options[r];
    if (s.__value === e) {
      s.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function it(t) {
  const e = t.querySelector(":checked");
  return e && e.__value;
}
let g;
function l(t) {
  g = t;
}
function I() {
  if (!g)
    throw new Error("Function called outside component initialization");
  return g;
}
const _ = [], S = [];
let p = [];
const N = [], M = /* @__PURE__ */ Promise.resolve();
let v = !1;
function T() {
  v || (v = !0, M.then(E));
}
function w(t) {
  p.push(t);
}
const x = /* @__PURE__ */ new Set();
let h = 0;
function E() {
  if (h !== 0)
    return;
  const t = g;
  do {
    try {
      for (; h < _.length; ) {
        const e = _[h];
        h++, l(e), G(e.$$);
      }
    } catch (e) {
      throw _.length = 0, h = 0, e;
    }
    for (l(null), _.length = 0, h = 0; S.length; )
      S.pop()();
    for (let e = 0; e < p.length; e += 1) {
      const n = p[e];
      x.has(n) || (x.add(n), n());
    }
    p.length = 0;
  } while (_.length);
  for (; N.length; )
    N.pop()();
  v = !1, x.clear(), l(t);
}
function G(t) {
  if (t.fragment !== null) {
    t.update(), y(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(w);
  }
}
function H(t) {
  const e = [], n = [];
  p.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), p = e;
}
const b = /* @__PURE__ */ new Set();
let f;
function J() {
  f = {
    r: 0,
    c: [],
    p: f
    // parent group
  };
}
function K() {
  f.r || y(f.c), f = f.p;
}
function z(t, e) {
  t && t.i && (b.delete(t), t.i(e));
}
function Q(t, e, n, r) {
  if (t && t.o) {
    if (b.has(t))
      return;
    b.add(t), f.c.push(() => {
      b.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function ft(t, e) {
  const n = e.token = {};
  function r(s, o, i, $) {
    if (e.token !== n)
      return;
    e.resolved = $;
    let a = e.ctx;
    i !== void 0 && (a = a.slice(), a[i] = $);
    const c = s && (e.current = s)(a);
    let m = !1;
    e.block && (e.blocks ? e.blocks.forEach((u, d) => {
      d !== o && u && (J(), Q(u, 1, 1, () => {
        e.blocks[d] === u && (e.blocks[d] = null);
      }), K());
    }) : e.block.d(1), c.c(), z(c, 1), c.m(e.mount(), e.anchor), m = !0), e.block = c, e.blocks && (e.blocks[o] = c), m && E();
  }
  if (B(t)) {
    const s = I();
    if (t.then((o) => {
      l(s), r(e.then, 1, e.value, o), l(null);
    }, (o) => {
      if (l(s), r(e.catch, 2, e.error, o), l(null), !e.hasCatch)
        throw o;
    }), e.current !== e.pending)
      return r(e.pending, 0), !0;
  } else {
    if (e.current !== e.then)
      return r(e.then, 1, e.value, t), !0;
    e.resolved = t;
  }
}
function dt(t, e, n) {
  const r = e.slice(), { resolved: s } = t;
  t.current === t.then && (r[t.value] = s), t.current === t.catch && (r[t.error] = s), t.block.p(r, n);
}
function ht(t) {
  t && t.c();
}
function R(t, e, n, r) {
  const { fragment: s, after_update: o } = t.$$;
  s && s.m(e, n), r || w(() => {
    const i = t.$$.on_mount.map(O).filter(P);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : y(i), t.$$.on_mount = [];
  }), o.forEach(w);
}
function U(t, e) {
  const n = t.$$;
  n.fragment !== null && (H(n.after_update), y(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function V(t, e) {
  t.$$.dirty[0] === -1 && (_.push(t), T(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function _t(t, e, n, r, s, o, i, $ = [-1]) {
  const a = g;
  l(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: k,
    not_equal: s,
    bound: C(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: C(),
    dirty: $,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  i && i(c.root);
  let m = !1;
  if (c.ctx = n ? n(t, e.props || {}, (u, d, ...j) => {
    const A = j.length ? j[0] : d;
    return c.ctx && s(c.ctx[u], c.ctx[u] = A) && (!c.skip_bound && c.bound[u] && c.bound[u](A), m && V(t, u)), d;
  }) : [], c.update(), m = !0, y(c.before_update), c.fragment = r ? r(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const u = F(e.target);
      c.fragment && c.fragment.l(u), u.forEach(L);
    } else
      c.fragment && c.fragment.c();
    e.intro && z(t.$$.fragment), R(t, e.target, e.anchor, e.customElement), E();
  }
  l(a);
}
class pt {
  $destroy() {
    U(this, 1), this.$destroy = k;
  }
  $on(e, n) {
    if (!P(n))
      return k;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const s = r.indexOf(n);
      s !== -1 && r.splice(s, 1);
    };
  }
  $set(e) {
    this.$$set && !D(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
export {
  ut as A,
  y as B,
  ot as C,
  J as D,
  K as E,
  pt as S,
  et as a,
  nt as b,
  Y as c,
  L as d,
  tt as e,
  at as f,
  X as g,
  ft as h,
  _t as i,
  Z as j,
  st as k,
  lt as l,
  rt as m,
  k as n,
  z as o,
  Q as p,
  it as q,
  w as r,
  W as s,
  q as t,
  dt as u,
  ht as v,
  R as w,
  U as x,
  ct as y,
  S as z
};
