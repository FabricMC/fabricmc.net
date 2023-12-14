import { S as M, i as O, s as S, h as T, e as b, c as h, u as A, r as j, v as D, d as k, f as H, t as g, a as v, g as L, j as m, n as $, o as w, m as J, p as C, q as N, l as R, w as W, x as q, y as E } from "./index.3ed5914c.js";
import { c as U } from "./Api.f22ea594.js";
import F from "./DownloadIcon.fd237c91.js";
function I(a, e, t) {
  const n = a.slice();
  return n[9] = e[t], n;
}
function z(a) {
  let e, t, n = (
    /*error*/
    a[13].message + ""
  ), c, s, f;
  return {
    c() {
      e = b("p"), t = g("Error: "), c = g(n), s = v(), f = b("p"), f.innerHTML = `For support please visit one of our
      <a href="/discuss">community discussion</a>
      groups.`, L(e, "color", "red");
    },
    m(u, d) {
      h(u, e, d), m(e, t), m(e, c), h(u, s, d), h(u, f, d);
    },
    p: $,
    i: $,
    o: $,
    d(u) {
      u && k(e), u && k(s), u && k(f);
    }
  };
}
function B(a) {
  let e, t, n, c, s, f, u;
  function d(_, y) {
    if (
      /*expertOptions*/
      _[0]
    )
      return G;
  }
  let p = d(a), r = p && p(a);
  const l = [P, K], o = [];
  function i(_, y) {
    return (
      /*win32*/
      _[2] ? 0 : 1
    );
  }
  return s = i(a), f = o[s] = l[s](a), {
    c() {
      r && r.c(), e = v(), t = b("div"), n = b("p"), n.textContent = `The Minecraft and Fabric Loader versions can be selected in the installer, this download
        works for every version we support.`, c = v(), f.c(), w(t, "class", "download");
    },
    m(_, y) {
      r && r.m(_, y), h(_, e, y), h(_, t, y), m(t, n), m(t, c), o[s].m(t, null), u = !0;
    },
    p(_, y) {
      p === (p = d(_)) && r ? r.p(_, y) : (r && r.d(1), r = p && p(_), r && (r.c(), r.m(e.parentNode, e))), f.p(_, y);
    },
    i(_) {
      u || (j(f), u = !0);
    },
    o(_) {
      D(f), u = !1;
    },
    d(_) {
      r && r.d(_), _ && k(e), _ && k(t), o[s].d();
    }
  };
}
function G(a) {
  let e, t, n, c, s, f, u, d, p = (
    /*data*/
    a[8]
  ), r = [];
  for (let l = 0; l < p.length; l += 1)
    r[l] = V(I(a, p, l));
  return {
    c() {
      e = g(`Installer Version:
      `), t = b("select");
      for (let l = 0; l < r.length; l += 1)
        r[l].c();
      n = v(), c = b("br"), s = v(), f = b("br"), L(t, "min-width", "200px"), /*selectedVersion*/
      a[1] === void 0 && J(() => (
        /*select_change_handler*/
        a[6].call(t)
      ));
    },
    m(l, o) {
      h(l, e, o), h(l, t, o);
      for (let i = 0; i < r.length; i += 1)
        r[i] && r[i].m(t, null);
      C(
        t,
        /*selectedVersion*/
        a[1],
        !0
      ), h(l, n, o), h(l, c, o), h(l, s, o), h(l, f, o), u || (d = N(
        t,
        "change",
        /*select_change_handler*/
        a[6]
      ), u = !0);
    },
    p(l, o) {
      if (o & /*versions*/
      8) {
        p = /*data*/
        l[8];
        let i;
        for (i = 0; i < p.length; i += 1) {
          const _ = I(l, p, i);
          r[i] ? r[i].p(_, o) : (r[i] = V(_), r[i].c(), r[i].m(t, null));
        }
        for (; i < r.length; i += 1)
          r[i].d(1);
        r.length = p.length;
      }
      o & /*selectedVersion, versions*/
      10 && C(
        t,
        /*selectedVersion*/
        l[1]
      );
    },
    d(l) {
      l && k(e), l && k(t), R(r, l), l && k(n), l && k(c), l && k(s), l && k(f), u = !1, d();
    }
  };
}
function V(a) {
  let e, t = (
    /*version*/
    a[9].version + ""
  ), n;
  return {
    c() {
      e = b("option"), n = g(t), e.__value = /*version*/
      a[9].url, e.value = e.__value;
    },
    m(c, s) {
      h(c, e, s), m(e, n);
    },
    p: $,
    d(c) {
      c && k(e);
    }
  };
}
function K(a) {
  let e, t, n, c, s, f, u, d, p, r, l;
  return n = new F({}), {
    c() {
      e = b("p"), t = b("a"), W(n.$$.fragment), c = g(" Download installer (Universal/.JAR)"), s = v(), f = b("br"), u = v(), d = b("a"), p = g("Download for Windows"), w(t, "class", "button primary large"), w(
        t,
        "href",
        /*selectedVersion*/
        a[1]
      ), w(d, "href", r = /*selectedVersion*/
      a[1].replace(".jar", ".exe"));
    },
    m(o, i) {
      h(o, e, i), m(e, t), q(n, t, null), m(t, c), m(e, s), m(e, f), m(e, u), m(e, d), m(d, p), l = !0;
    },
    p(o, i) {
      (!l || i & /*selectedVersion, versions*/
      10) && w(
        t,
        "href",
        /*selectedVersion*/
        o[1]
      ), (!l || i & /*selectedVersion, versions*/
      10 && r !== (r = /*selectedVersion*/
      o[1].replace(".jar", ".exe"))) && w(d, "href", r);
    },
    i(o) {
      l || (j(n.$$.fragment, o), l = !0);
    },
    o(o) {
      D(n.$$.fragment, o), l = !1;
    },
    d(o) {
      o && k(e), E(n);
    }
  };
}
function P(a) {
  let e, t, n, c, s, f, u, d, p, r, l;
  return n = new F({}), {
    c() {
      e = b("p"), t = b("a"), W(n.$$.fragment), c = g(" Download for Windows"), f = v(), u = b("br"), d = v(), p = b("a"), r = g("Download universal jar"), w(t, "class", "button primary large"), w(t, "href", s = /*selectedVersion*/
      a[1].replace(".jar", ".exe")), w(
        p,
        "href",
        /*selectedVersion*/
        a[1]
      );
    },
    m(o, i) {
      h(o, e, i), m(e, t), q(n, t, null), m(t, c), m(e, f), m(e, u), m(e, d), m(e, p), m(p, r), l = !0;
    },
    p(o, i) {
      (!l || i & /*selectedVersion, versions*/
      10 && s !== (s = /*selectedVersion*/
      o[1].replace(".jar", ".exe"))) && w(t, "href", s), (!l || i & /*selectedVersion, versions*/
      10) && w(
        p,
        "href",
        /*selectedVersion*/
        o[1]
      );
    },
    i(o) {
      l || (j(n.$$.fragment, o), l = !0);
    },
    o(o) {
      D(n.$$.fragment, o), l = !1;
    },
    d(o) {
      o && k(e), E(n);
    }
  };
}
function Q(a) {
  let e;
  return {
    c() {
      e = b("p"), e.textContent = "Loading versions..";
    },
    m(t, n) {
      h(t, e, n);
    },
    p: $,
    i: $,
    o: $,
    d(t) {
      t && k(e);
    }
  };
}
function X(a) {
  let e, t, n = {
    ctx: a,
    current: null,
    token: null,
    hasCatch: !0,
    pending: Q,
    then: B,
    catch: z,
    value: 8,
    error: 13,
    blocks: [, , ,]
  };
  return T(
    /*versions*/
    a[3],
    n
  ), {
    c() {
      e = b("main"), n.block.c();
    },
    m(c, s) {
      h(c, e, s), n.block.m(e, n.anchor = null), n.mount = () => e, n.anchor = null, t = !0;
    },
    p(c, [s]) {
      a = c, A(n, a, s);
    },
    i(c) {
      t || (j(n.block), t = !0);
    },
    o(c) {
      for (let s = 0; s < 3; s += 1) {
        const f = n.blocks[s];
        D(f);
      }
      t = !1;
    },
    d(c) {
      c && k(e), n.block.d(), n.token = null, n = null;
    }
  };
}
function Y(a, e, t) {
  const n = navigator.platform == "Win32";
  let c = !1, s = "", f = u();
  async function u() {
    var o;
    const l = await U();
    return t(1, s = ((o = l.find((i) => i.stable)) == null ? void 0 : o.url) ?? ""), l;
  }
  function d() {
    t(0, c = !0);
  }
  async function p() {
    return (await f).find((l) => l.url === s);
  }
  function r() {
    s = H(this), t(1, s), t(3, f);
  }
  return [
    c,
    s,
    n,
    f,
    d,
    p,
    r
  ];
}
class te extends M {
  constructor(e) {
    super(), O(this, e, Y, X, S, {});
  }
}
export {
  te as default
};
