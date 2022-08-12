import { S as I, i as J, s as K, h as H, e as f, t as v, a as V, o as O, c as _, j as u, q as E, u as M, n as L, d as p, f as T, g as q, m as B, p as G, l as D, b as P } from "./index.js";
import { d as Q, b as R, e as U } from "./Api.js";
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
      e = f("p"), t = v("Error: "), i = v(n), c = V(), s = f("p"), s.innerHTML = `For support please vist one of our
      <a href="/discuss">community discussion</a>
      groups.`, q(e, "color", "red");
    },
    m(l, a) {
      _(l, e, a), u(e, t), u(e, i), _(l, c, a), _(l, s, a);
    },
    p: L,
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
      e = v(`Game version:
    `), t = f("select");
      for (let l = 0; l < s.length; l += 1)
        s[l].c();
      q(t, "min-width", "200px"), o[1] === void 0 && B(() => o[7].call(t));
    },
    m(l, a) {
      _(l, e, a), _(l, t, a);
      for (let r = 0; r < s.length; r += 1)
        s[r].m(t, null);
      G(t, o[1]), n || (i = E(t, "change", o[7]), n = !0);
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
      a & 10 && G(t, l[1]);
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
      e = f("option"), n = v(t), e.__value = o[10].version, e.value = e.__value;
    },
    m(i, c) {
      _(i, e, c), u(e, n);
    },
    p: L,
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
    p: L,
    d(t) {
      t && p(e);
    }
  };
}
function $(o) {
  let e, t, n = o[13].message + "", i, c, s;
  return {
    c() {
      e = f("p"), t = v("Error: "), i = v(n), c = V(), s = f("p"), s.innerHTML = `For support please vist one of our
      <a href="/discuss">community discussion</a>
      groups.`, q(e, "color", "red");
    },
    m(l, a) {
      _(l, e, a), u(e, t), u(e, i), _(l, c, a), _(l, s, a);
    },
    p: L,
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
      e = v(`Loader version:
    `), t = f("select");
      for (let l = 0; l < s.length; l += 1)
        s[l].c();
      q(t, "min-width", "200px"), o[2] === void 0 && B(() => o[8].call(t));
    },
    m(l, a) {
      _(l, e, a), _(l, t, a);
      for (let r = 0; r < s.length; r += 1)
        s[r].m(t, null);
      G(t, o[2]), n || (i = E(t, "change", o[8]), n = !0);
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
      a & 20 && G(t, l[2]);
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
      e = f("option"), n = v(t), e.__value = o[10].version, e.value = e.__value;
    },
    m(i, c) {
      _(i, e, c), u(e, n);
    },
    p: L,
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
    p: L,
    d(t) {
      t && p(e);
    }
  };
}
function te(o) {
  let e, t, n, i, c, s, l, a, r, h, y, g, d, m, S, F, b = {
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
  H(o[3], b);
  let k = {
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
  return H(o[4], k), {
    c() {
      e = f("main"), t = f("label"), n = f("input"), i = v(`
    Show snapshot versions`), c = V(), s = f("br"), l = V(), a = f("br"), r = V(), b.block.c(), h = V(), y = f("br"), g = V(), d = f("br"), m = V(), k.block.c(), O(n, "type", "checkbox");
    },
    m(w, C) {
      _(w, e, C), u(e, t), u(t, n), n.checked = o[0], u(t, i), u(e, c), u(e, s), u(e, l), u(e, a), u(e, r), b.block.m(e, b.anchor = null), b.mount = () => e, b.anchor = h, u(e, h), u(e, y), u(e, g), u(e, d), u(e, m), k.block.m(e, k.anchor = null), k.mount = () => e, k.anchor = null, S || (F = E(n, "change", o[6]), S = !0);
    },
    p(w, [C]) {
      o = w, C & 1 && (n.checked = o[0]), M(b, o, C), M(k, o, C);
    },
    i: L,
    o: L,
    d(w) {
      w && p(e), b.block.d(), b.token = null, b = null, k.block.d(), k.token = null, k = null, S = !1, F();
    }
  };
}
function le(o, e, t) {
  let n = !1, i = "", c = "", s = Q().then((g) => {
    var d, m;
    return t(1, i = (m = (d = g.find((S) => S.stable || n)) == null ? void 0 : d.version) != null ? m : ""), g;
  }), l = R().then((g) => {
    var d, m;
    return t(2, c = (m = (d = g[0]) == null ? void 0 : d.version) != null ? m : ""), g;
  });
  async function a() {
    var d, m;
    return {
      yarnVersion: (m = (d = await U(i)) == null ? void 0 : d.version) != null ? m : "",
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
  function y() {
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
    y
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
