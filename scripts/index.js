function k() {
}
function B(t) {
  return t && typeof t == "object" && typeof t.then == "function";
}
function O(t) {
  return t();
}
function C() {
  return /* @__PURE__ */ Object.create(null);
}
function m(t) {
  t.forEach(O);
}
function P(t) {
  return typeof t == "function";
}
function V(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function D(t) {
  return Object.keys(t).length === 0;
}
function W(t, e) {
  t.appendChild(e);
}
function X(t, e, n) {
  t.insertBefore(e, n || null);
}
function L(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Y(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function Z(t) {
  return document.createElement(t);
}
function q(t) {
  return document.createTextNode(t);
}
function tt() {
  return q(" ");
}
function et() {
  return q("");
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
function T(t) {
  return Array.from(t.childNodes);
}
function st(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function ut(t, e) {
  t.value = e ?? "";
}
function ot(t, e, n, r) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? "important" : "");
}
function at(t, e) {
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
let p;
function l(t) {
  p = t;
}
function F() {
  if (!p)
    throw new Error("Function called outside component initialization");
  return p;
}
const _ = [], S = [], $ = [], N = [], I = Promise.resolve();
let v = !1;
function M() {
  v || (v = !0, I.then(E));
}
function w(t) {
  $.push(t);
}
const x = /* @__PURE__ */ new Set();
let y = 0;
function E() {
  const t = p;
  do {
    for (; y < _.length; ) {
      const e = _[y];
      y++, l(e), G(e.$$);
    }
    for (l(null), _.length = 0, y = 0; S.length; )
      S.pop()();
    for (let e = 0; e < $.length; e += 1) {
      const n = $[e];
      x.has(n) || (x.add(n), n());
    }
    $.length = 0;
  } while (_.length);
  for (; N.length; )
    N.pop()();
  v = !1, x.clear(), l(t);
}
function G(t) {
  if (t.fragment !== null) {
    t.update(), m(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(w);
  }
}
const b = /* @__PURE__ */ new Set();
let f;
function H() {
  f = {
    r: 0,
    c: [],
    p: f
  };
}
function J() {
  f.r || m(f.c), f = f.p;
}
function z(t, e) {
  t && t.i && (b.delete(t), t.i(e));
}
function K(t, e, n, r) {
  if (t && t.o) {
    if (b.has(t))
      return;
    b.add(t), f.c.push(() => {
      b.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function it(t, e) {
  const n = e.token = {};
  function r(s, o, i, g) {
    if (e.token !== n)
      return;
    e.resolved = g;
    let a = e.ctx;
    i !== void 0 && (a = a.slice(), a[i] = g);
    const c = s && (e.current = s)(a);
    let h = !1;
    e.block && (e.blocks ? e.blocks.forEach((u, d) => {
      d !== o && u && (H(), K(u, 1, 1, () => {
        e.blocks[d] === u && (e.blocks[d] = null);
      }), J());
    }) : e.block.d(1), c.c(), z(c, 1), c.m(e.mount(), e.anchor), h = !0), e.block = c, e.blocks && (e.blocks[o] = c), h && E();
  }
  if (B(t)) {
    const s = F();
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
function ft(t, e, n) {
  const r = e.slice(), { resolved: s } = t;
  t.current === t.then && (r[t.value] = s), t.current === t.catch && (r[t.error] = s), t.block.p(r, n);
}
function dt(t) {
  t && t.c();
}
function Q(t, e, n, r) {
  const { fragment: s, after_update: o } = t.$$;
  s && s.m(e, n), r || w(() => {
    const i = t.$$.on_mount.map(O).filter(P);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : m(i), t.$$.on_mount = [];
  }), o.forEach(w);
}
function R(t, e) {
  const n = t.$$;
  n.fragment !== null && (m(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function U(t, e) {
  t.$$.dirty[0] === -1 && (_.push(t), M(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ht(t, e, n, r, s, o, i, g = [-1]) {
  const a = p;
  l(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    props: o,
    update: k,
    not_equal: s,
    bound: C(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    callbacks: C(),
    dirty: g,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  i && i(c.root);
  let h = !1;
  if (c.ctx = n ? n(t, e.props || {}, (u, d, ...j) => {
    const A = j.length ? j[0] : d;
    return c.ctx && s(c.ctx[u], c.ctx[u] = A) && (!c.skip_bound && c.bound[u] && c.bound[u](A), h && U(t, u)), d;
  }) : [], c.update(), h = !0, m(c.before_update), c.fragment = r ? r(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const u = T(e.target);
      c.fragment && c.fragment.l(u), u.forEach(L);
    } else
      c.fragment && c.fragment.c();
    e.intro && z(t.$$.fragment), Q(t, e.target, e.anchor, e.customElement), E();
  }
  l(a);
}
class _t {
  $destroy() {
    R(this, 1), this.$destroy = k;
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
  S as A,
  m as B,
  ut as C,
  H as D,
  J as E,
  _t as S,
  tt as a,
  et as b,
  X as c,
  L as d,
  Z as e,
  lt as f,
  ot as g,
  it as h,
  ht as i,
  W as j,
  st as k,
  Y as l,
  w as m,
  k as n,
  ct as o,
  at as p,
  nt as q,
  z as r,
  V as s,
  q as t,
  ft as u,
  K as v,
  dt as w,
  Q as x,
  R as y,
  rt as z
};
