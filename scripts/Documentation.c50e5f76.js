import { S as L, i as M, s as N, h as O, e as p, a as V, b as P, c as u, u as Y, n as b, d, t as v, f as q, g as _, j as $, k as x, l as D, m as E } from "./index.4deac2e0.js";
import { g as H, a as T, b as W } from "./Api.4fd96799.js";
function w(o, t, l) {
  const e = o.slice();
  return e[2] = t[l], e;
}
function A(o, t, l) {
  const e = o.slice();
  return e[5] = t[l], e;
}
function j(o) {
  let t, l, e = (
    /*error*/
    o[8].message + ""
  ), n, r, a;
  return {
    c() {
      t = p("p"), l = v("Error: "), n = v(e), r = V(), a = p("p"), a.innerHTML = `For support please visit one of our
        <a href="/discuss/">community discussion</a>
        groups.`, q(t, "color", "red");
    },
    m(i, h) {
      u(i, t, h), _(t, l), _(t, n), u(i, r, h), u(i, a, h);
    },
    p: b,
    d(i) {
      i && d(t), i && d(r), i && d(a);
    }
  };
}
function z(o) {
  let t, l = (
    /*data*/
    o[0]
  ), e = [];
  for (let n = 0; n < l.length; n += 1)
    e[n] = J(w(o, l, n));
  return {
    c() {
      for (let n = 0; n < e.length; n += 1)
        e[n].c();
      t = P();
    },
    m(n, r) {
      for (let a = 0; a < e.length; a += 1)
        e[a] && e[a].m(n, r);
      u(n, t, r);
    },
    p(n, r) {
      if (r & /*data, handleSelectChange*/
      1) {
        l = /*data*/
        n[0];
        let a;
        for (a = 0; a < l.length; a += 1) {
          const i = w(n, l, a);
          e[a] ? e[a].p(i, r) : (e[a] = J(i), e[a].c(), e[a].m(t.parentNode, t));
        }
        for (; a < e.length; a += 1)
          e[a].d(1);
        e.length = l.length;
      }
    },
    d(n) {
      $(e, n), n && d(t);
    }
  };
}
function C(o) {
  let t, l = (
    /*version*/
    o[5] + ""
  ), e;
  return {
    c() {
      t = p("option"), e = v(l), t.__value = /*version*/
      o[5], t.value = t.__value;
    },
    m(n, r) {
      u(n, t, r), _(t, e);
    },
    p: b,
    d(n) {
      n && d(t);
    }
  };
}
function J(o) {
  let t, l, e, n, r = (
    /*project*/
    o[2].name + ""
  ), a, i, h, k, y, m = (
    /*project*/
    o[2].versions
  ), f = [];
  for (let s = 0; s < m.length; s += 1)
    f[s] = C(A(o, m, s));
  function I(...s) {
    return (
      /*change_handler*/
      o[1](
        /*project*/
        o[2],
        ...s
      )
    );
  }
  return {
    c() {
      t = p("div"), l = p("select"), e = p("option"), n = v("Select "), a = v(r), i = v(" Version");
      for (let s = 0; s < f.length; s += 1)
        f[s].c();
      h = V(), e.__value = "Select " + /*project*/
      o[2].name + " Version", e.value = e.__value, x(t, "class", "javadoc-selector");
    },
    m(s, g) {
      u(s, t, g), _(t, l), _(l, e), _(e, n), _(e, a), _(e, i);
      for (let c = 0; c < f.length; c += 1)
        f[c] && f[c].m(l, null);
      D(l, "Select " + /*project*/
      o[2].name + " Version"), _(t, h), k || (y = E(l, "change", I), k = !0);
    },
    p(s, g) {
      if (o = s, g & /*data*/
      1) {
        m = /*project*/
        o[2].versions;
        let c;
        for (c = 0; c < m.length; c += 1) {
          const F = A(o, m, c);
          f[c] ? f[c].p(F, g) : (f[c] = C(F), f[c].c(), f[c].m(l, null));
        }
        for (; c < f.length; c += 1)
          f[c].d(1);
        f.length = m.length;
      }
    },
    d(s) {
      s && d(t), $(f, s), k = !1, y();
    }
  };
}
function B(o) {
  let t;
  return {
    c() {
      t = p("p"), t.textContent = "Loading versions..";
    },
    m(l, e) {
      u(l, t, e);
    },
    p: b,
    d(l) {
      l && d(t);
    }
  };
}
function G(o) {
  let t, l, e, n = {
    ctx: o,
    current: null,
    token: null,
    hasCatch: !0,
    pending: B,
    then: z,
    catch: j,
    value: 0,
    error: 8
  };
  return O(
    /*data*/
    o[0],
    n
  ), {
    c() {
      t = p("div"), l = V(), e = P(), n.block.c();
    },
    m(r, a) {
      u(r, t, a), u(r, l, a), u(r, e, a), n.block.m(r, n.anchor = a), n.mount = () => e.parentNode, n.anchor = e;
    },
    p(r, [a]) {
      o = r, Y(n, o, a);
    },
    i: b,
    o: b,
    d(r) {
      r && d(t), r && d(l), r && d(e), n.block.d(r), n.token = null, n = null;
    }
  };
}
function K(o, t) {
  const l = o.target.value;
  l.includes("Select") || window.location.assign(`https://maven.fabricmc.net/docs/${t.prefix}${l}/`);
}
function S(o, t, l) {
  return o.filter((e) => e.startsWith(t)).map((e) => e.slice(t.length)).sort((e, n) => l.indexOf(e) - l.indexOf(n));
}
function Q(o) {
  return [Promise.all([H(), T(), W()]).then(([e, n, r]) => {
    const a = S(e, "fabric-api-", []).reverse();
    return [
      {
        name: "Minecraft (Yarn)",
        desc: "Javadoc documentation for Minecraft generated from the comments in the yarn mappings.",
        prefix: "yarn-",
        versions: S(e, "yarn-", n.map((i) => i.version)),
        selected: "Select Version"
      },
      {
        name: "Fabric API",
        desc: "Javadoc documentation for Fabric API",
        prefix: "fabric-api-",
        versions: a,
        selected: "Select Version"
      },
      {
        name: "Fabric Loader",
        desc: "Javadoc documentation for Fabric API",
        prefix: "fabric-loader-",
        versions: S(e, "fabric-loader-", r.map((i) => i.version)),
        selected: "Select Version"
      }
    ];
  }), (e, n) => K(n, e)];
}
class X extends L {
  constructor(t) {
    super(), M(this, t, Q, G, N, {});
  }
}
export {
  X as default
};
