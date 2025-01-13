import { S as I, i as J, s as K, h as H, e as f, t as g, a as v, k as O, c as _, g as u, m as E, u as M, n as V, d as p, q as T, f as G, r as B, l as y, j as D, b as P } from "./index.4deac2e0.js";
import { d as Q, b as R, f as U } from "./Api.280716b7.js";
function j(s, e, t) {
  const n = s.slice();
  return n[10] = e[t], n;
}
function N(s, e, t) {
  const n = s.slice();
  return n[10] = e[t], n;
}
function W(s) {
  let e, t, n = (
    /*error*/
    s[13].message + ""
  ), i, c, o;
  return {
    c() {
      e = f("p"), t = g("Error: "), i = g(n), c = v(), o = f("p"), o.innerHTML = `For support please vist one of our
      <a href="/discuss/">community discussion</a>
      groups.`, G(e, "color", "red");
    },
    m(l, a) {
      _(l, e, a), u(e, t), u(e, i), _(l, c, a), _(l, o, a);
    },
    p: V,
    d(l) {
      l && p(e), l && p(c), l && p(o);
    }
  };
}
function X(s) {
  let e, t, n, i, c = (
    /*data*/
    s[9]
  ), o = [];
  for (let l = 0; l < c.length; l += 1)
    o[l] = z(N(s, c, l));
  return {
    c() {
      e = g(`Game version:
    `), t = f("select");
      for (let l = 0; l < o.length; l += 1)
        o[l].c();
      G(t, "min-width", "200px"), /*selectedGameVersion*/
      s[1] === void 0 && B(() => (
        /*select_change_handler*/
        s[7].call(t)
      ));
    },
    m(l, a) {
      _(l, e, a), _(l, t, a);
      for (let r = 0; r < o.length; r += 1)
        o[r] && o[r].m(t, null);
      y(
        t,
        /*selectedGameVersion*/
        s[1],
        !0
      ), n || (i = E(
        t,
        "change",
        /*select_change_handler*/
        s[7]
      ), n = !0);
    },
    p(l, a) {
      if (a & /*gameVersions, listSnapshots*/
      9) {
        c = /*data*/
        l[9];
        let r;
        for (r = 0; r < c.length; r += 1) {
          const h = N(l, c, r);
          o[r] ? o[r].p(h, a) : (o[r] = z(h), o[r].c(), o[r].m(t, null));
        }
        for (; r < o.length; r += 1)
          o[r].d(1);
        o.length = c.length;
      }
      a & /*selectedGameVersion, gameVersions*/
      10 && y(
        t,
        /*selectedGameVersion*/
        l[1]
      );
    },
    d(l) {
      l && p(e), l && p(t), D(o, l), n = !1, i();
    }
  };
}
function Y(s) {
  let e, t = (
    /*version*/
    s[10].version + ""
  ), n;
  return {
    c() {
      e = f("option"), n = g(t), e.__value = /*version*/
      s[10].version, e.value = e.__value;
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
function z(s) {
  let e, t = (
    /*version*/
    (s[10].stable || /*listSnapshots*/
    s[0]) && Y(s)
  );
  return {
    c() {
      t && t.c(), e = P();
    },
    m(n, i) {
      t && t.m(n, i), _(n, e, i);
    },
    p(n, i) {
      /*version*/
      n[10].stable || /*listSnapshots*/
      n[0] ? t ? t.p(n, i) : (t = Y(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      t && t.d(n), n && p(e);
    }
  };
}
function Z(s) {
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
function $(s) {
  let e, t, n = (
    /*error*/
    s[13].message + ""
  ), i, c, o;
  return {
    c() {
      e = f("p"), t = g("Error: "), i = g(n), c = v(), o = f("p"), o.innerHTML = `For support please vist one of our
      <a href="/discuss/">community discussion</a>
      groups.`, G(e, "color", "red");
    },
    m(l, a) {
      _(l, e, a), u(e, t), u(e, i), _(l, c, a), _(l, o, a);
    },
    p: V,
    d(l) {
      l && p(e), l && p(c), l && p(o);
    }
  };
}
function x(s) {
  let e, t, n, i, c = (
    /*data*/
    s[9]
  ), o = [];
  for (let l = 0; l < c.length; l += 1)
    o[l] = A(j(s, c, l));
  return {
    c() {
      e = g(`Loader version:
    `), t = f("select");
      for (let l = 0; l < o.length; l += 1)
        o[l].c();
      G(t, "min-width", "200px"), /*selectedLoaderVersion*/
      s[2] === void 0 && B(() => (
        /*select_change_handler_1*/
        s[8].call(t)
      ));
    },
    m(l, a) {
      _(l, e, a), _(l, t, a);
      for (let r = 0; r < o.length; r += 1)
        o[r] && o[r].m(t, null);
      y(
        t,
        /*selectedLoaderVersion*/
        s[2],
        !0
      ), n || (i = E(
        t,
        "change",
        /*select_change_handler_1*/
        s[8]
      ), n = !0);
    },
    p(l, a) {
      if (a & /*loaderVersions*/
      16) {
        c = /*data*/
        l[9];
        let r;
        for (r = 0; r < c.length; r += 1) {
          const h = j(l, c, r);
          o[r] ? o[r].p(h, a) : (o[r] = A(h), o[r].c(), o[r].m(t, null));
        }
        for (; r < o.length; r += 1)
          o[r].d(1);
        o.length = c.length;
      }
      a & /*selectedLoaderVersion, loaderVersions*/
      20 && y(
        t,
        /*selectedLoaderVersion*/
        l[2]
      );
    },
    d(l) {
      l && p(e), l && p(t), D(o, l), n = !1, i();
    }
  };
}
function A(s) {
  let e, t = (
    /*version*/
    s[10].version + ""
  ), n;
  return {
    c() {
      e = f("option"), n = g(t), e.__value = /*version*/
      s[10].version, e.value = e.__value;
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
function ee(s) {
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
function te(s) {
  let e, t, n, i, c, o, l, a, r, h, w, k, d, C, q, F, m = {
    ctx: s,
    current: null,
    token: null,
    hasCatch: !0,
    pending: Z,
    then: X,
    catch: W,
    value: 9,
    error: 13
  };
  H(
    /*gameVersions*/
    s[3],
    m
  );
  let b = {
    ctx: s,
    current: null,
    token: null,
    hasCatch: !0,
    pending: ee,
    then: x,
    catch: $,
    value: 9,
    error: 13
  };
  return H(
    /*loaderVersions*/
    s[4],
    b
  ), {
    c() {
      e = f("main"), t = f("label"), n = f("input"), i = g(`
    Show snapshot versions`), c = v(), o = f("br"), l = v(), a = f("br"), r = v(), m.block.c(), h = v(), w = f("br"), k = v(), d = f("br"), C = v(), b.block.c(), O(n, "type", "checkbox");
    },
    m(L, S) {
      _(L, e, S), u(e, t), u(t, n), n.checked = /*listSnapshots*/
      s[0], u(t, i), u(e, c), u(e, o), u(e, l), u(e, a), u(e, r), m.block.m(e, m.anchor = null), m.mount = () => e, m.anchor = h, u(e, h), u(e, w), u(e, k), u(e, d), u(e, C), b.block.m(e, b.anchor = null), b.mount = () => e, b.anchor = null, q || (F = E(
        n,
        "change",
        /*input_change_handler*/
        s[6]
      ), q = !0);
    },
    p(L, [S]) {
      s = L, S & /*listSnapshots*/
      1 && (n.checked = /*listSnapshots*/
      s[0]), M(m, s, S), M(b, s, S);
    },
    i: V,
    o: V,
    d(L) {
      L && p(e), m.block.d(), m.token = null, m = null, b.block.d(), b.token = null, b = null, q = !1, F();
    }
  };
}
function le(s, e, t) {
  let n = !1, i = "", c = "", o = Q().then((k) => {
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
    i = T(this), t(1, i), t(3, o);
  }
  function w() {
    c = T(this), t(2, c), t(4, l);
  }
  return [
    n,
    i,
    c,
    o,
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
