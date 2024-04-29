import { S as j, i as G, s as H, h as L, e as h, a as k, b as E, c as p, u as T, n as A, d as _, f as W, t as g, g as N, j as m, k as C, l as V, m as Y, o as F, p as M, q as z } from "./index.61dc58cf.js";
import { g as B, a as K, b as Q } from "./Api.d20d53e7.js";
function O(a, t, s) {
  const n = a.slice();
  return n[2] = t[s], n[3] = t, n[4] = s, n;
}
function S(a, t, s) {
  const n = a.slice();
  return n[5] = t[s], n;
}
function R(a) {
  let t, s, n = (
    /*error*/
    a[8].message + ""
  ), r, e, l;
  return {
    c() {
      t = h("p"), s = g("Error: "), r = g(n), e = k(), l = h("p"), l.innerHTML = `For support please visit one of our
        <a href="/discuss/">community discussion</a>
        groups.`, N(t, "color", "red");
    },
    m(o, i) {
      p(o, t, i), m(t, s), m(t, r), p(o, e, i), p(o, l, i);
    },
    p(o, i) {
      i & /*data*/
      1 && n !== (n = /*error*/
      o[8].message + "") && C(r, n);
    },
    d(o) {
      o && _(t), o && _(e), o && _(l);
    }
  };
}
function U(a) {
  let t, s, n, r = (
    /*data*/
    a[0]
  ), e = [];
  for (let l = 0; l < r.length; l += 1)
    e[l] = y(O(a, r, l));
  return {
    c() {
      t = h("p"), t.textContent = "Online Javadoc is available for each project and the game itself using the links below, but also through your IDE directly.", s = k();
      for (let l = 0; l < e.length; l += 1)
        e[l].c();
      n = E();
    },
    m(l, o) {
      p(l, t, o), p(l, s, o);
      for (let i = 0; i < e.length; i += 1)
        e[i] && e[i].m(l, o);
      p(l, n, o);
    },
    p(l, o) {
      if (o & /*data*/
      1) {
        r = /*data*/
        l[0];
        let i;
        for (i = 0; i < r.length; i += 1) {
          const d = O(l, r, i);
          e[i] ? e[i].p(d, o) : (e[i] = y(d), e[i].c(), e[i].m(n.parentNode, n));
        }
        for (; i < e.length; i += 1)
          e[i].d(1);
        e.length = r.length;
      }
    },
    d(l) {
      l && _(t), l && _(s), V(e, l), l && _(n);
    }
  };
}
function q(a) {
  let t, s = (
    /*version*/
    a[5] + ""
  ), n, r;
  return {
    c() {
      t = h("option"), n = g(s), t.__value = r = /*version*/
      a[5], t.value = t.__value;
    },
    m(e, l) {
      p(e, t, l), m(t, n);
    },
    p(e, l) {
      l & /*data*/
      1 && s !== (s = /*version*/
      e[5] + "") && C(n, s), l & /*data*/
      1 && r !== (r = /*version*/
      e[5]) && (t.__value = r, t.value = t.__value);
    },
    d(e) {
      e && _(t);
    }
  };
}
function y(a) {
  let t, s = (
    /*project*/
    a[2].name + ""
  ), n, r, e, l, o, i, d, I, J, P, b = (
    /*project*/
    a[2].versions
  ), f = [];
  for (let u = 0; u < b.length; u += 1)
    f[u] = q(S(a, b, u));
  function $() {
    a[1].call(
      e,
      /*each_value*/
      a[3],
      /*project_index*/
      a[4]
    );
  }
  return {
    c() {
      t = h("p"), n = g(s), r = g(`:
            `), e = h("select");
      for (let u = 0; u < f.length; u += 1)
        f[u].c();
      l = k(), o = h("a"), i = g("Go to JavaDoc"), I = k(), N(e, "min-width", "200px"), /*project*/
      a[2].selected === void 0 && Y($), F(o, "class", "jdbutton"), F(o, "href", d = "https://maven.fabricmc.net/docs/" + /*project*/
      a[2].prefix + /*project*/
      a[2].selected + "/");
    },
    m(u, v) {
      p(u, t, v), m(t, n), m(t, r), m(t, e);
      for (let c = 0; c < f.length; c += 1)
        f[c] && f[c].m(e, null);
      M(
        e,
        /*project*/
        a[2].selected,
        !0
      ), m(t, l), m(t, o), m(o, i), m(t, I), J || (P = z(e, "change", $), J = !0);
    },
    p(u, v) {
      if (a = u, v & /*data*/
      1 && s !== (s = /*project*/
      a[2].name + "") && C(n, s), v & /*data*/
      1) {
        b = /*project*/
        a[2].versions;
        let c;
        for (c = 0; c < b.length; c += 1) {
          const D = S(a, b, c);
          f[c] ? f[c].p(D, v) : (f[c] = q(D), f[c].c(), f[c].m(e, null));
        }
        for (; c < f.length; c += 1)
          f[c].d(1);
        f.length = b.length;
      }
      v & /*data*/
      1 && M(
        e,
        /*project*/
        a[2].selected
      ), v & /*data*/
      1 && d !== (d = "https://maven.fabricmc.net/docs/" + /*project*/
      a[2].prefix + /*project*/
      a[2].selected + "/") && F(o, "href", d);
    },
    d(u) {
      u && _(t), V(f, u), J = !1, P();
    }
  };
}
function X(a) {
  let t;
  return {
    c() {
      t = h("p"), t.textContent = "Loading versions..";
    },
    m(s, n) {
      p(s, t, n);
    },
    p: A,
    d(s) {
      s && _(t);
    }
  };
}
function Z(a) {
  let t, s, n, r, e = {
    ctx: a,
    current: null,
    token: null,
    hasCatch: !0,
    pending: X,
    then: U,
    catch: R,
    value: 0,
    error: 8
  };
  return L(r = /*data*/
  a[0], e), {
    c() {
      t = h("div"), s = k(), n = E(), e.block.c();
    },
    m(l, o) {
      p(l, t, o), p(l, s, o), p(l, n, o), e.block.m(l, e.anchor = o), e.mount = () => n.parentNode, e.anchor = n;
    },
    p(l, [o]) {
      a = l, e.ctx = a, o & /*data*/
      1 && r !== (r = /*data*/
      a[0]) && L(r, e) || T(e, a, o);
    },
    i: A,
    o: A,
    d(l) {
      l && _(t), l && _(s), l && _(n), e.block.d(l), e.token = null, e = null;
    }
  };
}
function w(a, t, s) {
  return a.filter((n) => n.startsWith(t)).map((n) => n.slice(t.length)).sort((n, r) => s.indexOf(n) - s.indexOf(r));
}
function x(a, t, s) {
  let n = Promise.all([B(), K(), Q()]).then(([e, l, o]) => {
    const i = w(e, "fabric-api-", []).reverse();
    return [
      {
        name: "Minecraft (yarn mappings)",
        desc: "Javadoc documentation for Minecraft generated from the comments in the yarn mappings.",
        prefix: "yarn-",
        versions: w(e, "yarn-", l.map((d) => d.version)),
        selected: l[0].version
      },
      {
        name: "Fabric API",
        desc: "Javadoc documentation for Fabric API",
        prefix: "fabric-api-",
        versions: i,
        selected: i[0]
      },
      {
        name: "Fabric Loader",
        desc: "Javadoc documentation for Fabric API",
        prefix: "fabric-loader-",
        versions: w(e, "fabric-loader-", o.map((d) => d.version)),
        selected: o[0].version
      }
    ];
  });
  function r(e, l) {
    e[l].selected = W(this), s(0, n);
  }
  return [n, r];
}
class le extends j {
  constructor(t) {
    super(), G(this, t, x, Z, H, {});
  }
}
export {
  le as default
};
