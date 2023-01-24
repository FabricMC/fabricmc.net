import { S as I, i as J, s as K, h as H, e as f, t as g, a as v, o as O, c as _, j as u, q as E, u as M, n as V, d as p, f as T, g as G, m as B, p as y, l as D, b as P } from "./index.1b882cd4.js";
import { d as Q, b as R, e as U } from "./Api.422bb251.js";
function j(o, e, t) {
  const n = o.slice();
  return n[10] = e[t], n;
}
function N(o, e, t) {
  const n = o.slice();
  return n[10] = e[t], n;
}
function W(o) {
  let e, t, n = o[13].message + "", i, c, s;
  return {
    c() {
      e = f("p"), t = g("Error: "), i = g(n), c = v(), s = f("p"), s.innerHTML = `For support please vist one of our
      <a href="/discuss">community discussion</a>
      groups.`, G(e, "color", "red");
    },
    m(l, a) {
      _(l, e, a), u(e, t), u(e, i), _(l, c, a), _(l, s, a);
    },
    p: V,
    d(l) {
      l && p(e), l && p(c), l && p(s);
    }
  };
}
function X(o) {
  let e, t, n, i, c = o[9], s = [];
  for (let l = 0; l < c.length; l += 1)
    s[l] = z(N(o, c, l));
  return {
    c() {
      e = g(`Game version:
    `), t = f("select");
      for (let l = 0; l < s.length; l += 1)
        s[l].c();
      G(t, "min-width", "200px"), o[1] === void 0 && B(() => o[7].call(t));
    },
    m(l, a) {
      _(l, e, a), _(l, t, a);
      for (let r = 0; r < s.length; r += 1)
        s[r].m(t, null);
      y(t, o[1]), n || (i = E(t, "change", o[7]), n = !0);
    },
    p(l, a) {
      if (a & 9) {
        c = l[9];
        let r;
        for (r = 0; r < c.length; r += 1) {
          const h = N(l, c, r);
          s[r] ? s[r].p(h, a) : (s[r] = z(h), s[r].c(), s[r].m(t, null));
        }
        for (; r < s.length; r += 1)
          s[r].d(1);
        s.length = c.length;
      }
      a & 10 && y(t, l[1]);
    },
    d(l) {
      l && p(e), l && p(t), D(s, l), n = !1, i();
    }
  };
}
function Y(o) {
  let e, t = o[10].version + "", n;
  return {
    c() {
      e = f("option"), n = g(t), e.__value = o[10].version, e.value = e.__value;
    },
    m(i, c) {
      _(i, e, c), u(e, n);
    },
    p: V,
    d(i) {
      i && p(e);
    }
  };
}
function z(o) {
  let e, t = (o[10].stable || o[0]) && Y(o);
  return {
    c() {
      t && t.c(), e = P();
    },
    m(n, i) {
      t && t.m(n, i), _(n, e, i);
    },
    p(n, i) {
      n[10].stable || n[0] ? t ? t.p(n, i) : (t = Y(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      t && t.d(n), n && p(e);
    }
  };
}
function Z(o) {
  let e;
  return {
    c() {
      e = f("p"), e.textContent = "Loading versions..";
    },
    m(t, n) {
      _(t, e, n);
    },
    p: V,
    d(t) {
      t && p(e);
    }
  };
}
function $(o) {
  let e, t, n = o[13].message + "", i, c, s;
  return {
    c() {
      e = f("p"), t = g("Error: "), i = g(n), c = v(), s = f("p"), s.innerHTML = `For support please vist one of our
      <a href="/discuss">community discussion</a>
      groups.`, G(e, "color", "red");
    },
    m(l, a) {
      _(l, e, a), u(e, t), u(e, i), _(l, c, a), _(l, s, a);
    },
    p: V,
    d(l) {
      l && p(e), l && p(c), l && p(s);
    }
  };
}
function x(o) {
  let e, t, n, i, c = o[9], s = [];
  for (let l = 0; l < c.length; l += 1)
    s[l] = A(j(o, c, l));
  return {
    c() {
      e = g(`Loader version:
    `), t = f("select");
      for (let l = 0; l < s.length; l += 1)
        s[l].c();
      G(t, "min-width", "200px"), o[2] === void 0 && B(() => o[8].call(t));
    },
    m(l, a) {
      _(l, e, a), _(l, t, a);
      for (let r = 0; r < s.length; r += 1)
        s[r].m(t, null);
      y(t, o[2]), n || (i = E(t, "change", o[8]), n = !0);
    },
    p(l, a) {
      if (a & 16) {
        c = l[9];
        let r;
        for (r = 0; r < c.length; r += 1) {
          const h = j(l, c, r);
          s[r] ? s[r].p(h, a) : (s[r] = A(h), s[r].c(), s[r].m(t, null));
        }
        for (; r < s.length; r += 1)
          s[r].d(1);
        s.length = c.length;
      }
      a & 20 && y(t, l[2]);
    },
    d(l) {
      l && p(e), l && p(t), D(s, l), n = !1, i();
    }
  };
}
function A(o) {
  let e, t = o[10].version + "", n;
  return {
    c() {
      e = f("option"), n = g(t), e.__value = o[10].version, e.value = e.__value;
    },
    m(i, c) {
      _(i, e, c), u(e, n);
    },
    p: V,
    d(i) {
      i && p(e);
    }
  };
}
function ee(o) {
  let e;
  return {
    c() {
      e = f("p"), e.textContent = "Loading versions..";
    },
    m(t, n) {
      _(t, e, n);
    },
    p: V,
    d(t) {
      t && p(e);
    }
  };
}
function te(o) {
  let e, t, n, i, c, s, l, a, r, h, w, k, d, C, q, F, m = {
    ctx: o,
    current: null,
    token: null,
    hasCatch: !0,
    pending: Z,
    then: X,
    catch: W,
    value: 9,
    error: 13
  };
  H(o[3], m);
  let b = {
    ctx: o,
    current: null,
    token: null,
    hasCatch: !0,
    pending: ee,
    then: x,
    catch: $,
    value: 9,
    error: 13
  };
  return H(o[4], b), {
    c() {
      e = f("main"), t = f("label"), n = f("input"), i = g(`
    Show snapshot versions`), c = v(), s = f("br"), l = v(), a = f("br"), r = v(), m.block.c(), h = v(), w = f("br"), k = v(), d = f("br"), C = v(), b.block.c(), O(n, "type", "checkbox");
    },
    m(L, S) {
      _(L, e, S), u(e, t), u(t, n), n.checked = o[0], u(t, i), u(e, c), u(e, s), u(e, l), u(e, a), u(e, r), m.block.m(e, m.anchor = null), m.mount = () => e, m.anchor = h, u(e, h), u(e, w), u(e, k), u(e, d), u(e, C), b.block.m(e, b.anchor = null), b.mount = () => e, b.anchor = null, q || (F = E(n, "change", o[6]), q = !0);
    },
    p(L, [S]) {
      o = L, S & 1 && (n.checked = o[0]), M(m, o, S), M(b, o, S);
    },
    i: V,
    o: V,
    d(L) {
      L && p(e), m.block.d(), m.token = null, m = null, b.block.d(), b.token = null, b = null, q = !1, F();
    }
  };
}
function le(o, e, t) {
  let n = !1, i = "", c = "", s = Q().then((k) => {
    var d;
    return t(1, i = ((d = k.find((C) => C.stable || n)) == null ? void 0 : d.version) ?? ""), k;
  }), l = R().then((k) => {
    var d;
    return t(2, c = ((d = k[0]) == null ? void 0 : d.version) ?? ""), k;
  });
  async function a() {
    var d;
    return {
      yarnVersion: ((d = await U(i)) == null ? void 0 : d.version) ?? "",
      loaderVersion: c,
      selectedGameVersion: i
    };
  }
  function r() {
    n = this.checked, t(0, n);
  }
  function h() {
    i = T(this), t(1, i), t(3, s);
  }
  function w() {
    c = T(this), t(2, c), t(4, l);
  }
  return [
    n,
    i,
    c,
    s,
    l,
    a,
    r,
    h,
    w
  ];
}
class se extends I {
  constructor(e) {
    super(), J(this, e, le, te, K, { getSelectedVersions: 5 });
  }
  get getSelectedVersions() {
    return this.$$.ctx[5];
  }
}
export {
  se as default
};
