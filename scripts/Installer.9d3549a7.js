import { S as T, i as z, s as A, h as S, e as h, c as d, u as W, r as C, v as D, d as m, f as H, t as y, a as $, g as q, j as k, n as v, o as w, b as J, m as R, p as g, q as E, l as U, w as F, x as M, y as N, z as B } from "./index.61dc58cf.js";
import { c as G } from "./Api.96f42ec7.js";
import O from "./DownloadIcon.214b8f5e.js";
function I(o, e, t) {
  const l = o.slice();
  return l[9] = e[t], l;
}
function K(o) {
  let e, t, l = (
    /*error*/
    o[13].message + ""
  ), n, r, s;
  return {
    c() {
      e = h("p"), t = y("Error: "), n = y(l), r = $(), s = h("p"), s.innerHTML = `For support please visit one of our
      <a href="/discuss">community discussion</a>
      groups.`, q(e, "color", "red");
    },
    m(u, _) {
      d(u, e, _), k(e, t), k(e, n), d(u, r, _), d(u, s, _);
    },
    p: v,
    i: v,
    o: v,
    d(u) {
      u && m(e), u && m(r), u && m(s);
    }
  };
}
function P(o) {
  let e, t, l, n, r, s, u;
  function _(b, j) {
    return (
      /*expertOptions*/
      b[0] ? X : Q
    );
  }
  let p = _(o), c = p(o);
  const i = [le, te], a = [];
  function f(b, j) {
    return (
      /*win32*/
      b[2] ? 0 : 1
    );
  }
  return r = f(o), s = a[r] = i[r](o), {
    c() {
      c.c(), e = $(), t = h("div"), l = h("p"), l.textContent = `The Minecraft and Fabric Loader versions can be selected in the installer, this download
        works for every version we support.`, n = $(), s.c(), w(t, "class", "download");
    },
    m(b, j) {
      c.m(b, j), d(b, e, j), d(b, t, j), k(t, l), k(t, n), a[r].m(t, null), u = !0;
    },
    p(b, j) {
      p === (p = _(b)) && c ? c.p(b, j) : (c.d(1), c = p(b), c && (c.c(), c.m(e.parentNode, e))), s.p(b, j);
    },
    i(b) {
      u || (C(s), u = !0);
    },
    o(b) {
      D(s), u = !1;
    },
    d(b) {
      c.d(b), b && m(e), b && m(t), a[r].d();
    }
  };
}
function Q(o) {
  let e, t = {
    ctx: o,
    current: null,
    token: null,
    hasCatch: !1,
    pending: ee,
    then: Z,
    catch: Y,
    value: 12
  };
  return S(
    /*getVersion*/
    o[5](),
    t
  ), {
    c() {
      e = J(), t.block.c();
    },
    m(l, n) {
      d(l, e, n), t.block.m(l, t.anchor = n), t.mount = () => e.parentNode, t.anchor = e;
    },
    p(l, n) {
      o = l, W(t, o, n);
    },
    d(l) {
      l && m(e), t.block.d(l), t.token = null, t = null;
    }
  };
}
function X(o) {
  let e, t, l, n, r, s, u, _, p = (
    /*data*/
    o[8]
  ), c = [];
  for (let i = 0; i < p.length; i += 1)
    c[i] = L(I(o, p, i));
  return {
    c() {
      e = y(`Installer Version:
      `), t = h("select");
      for (let i = 0; i < c.length; i += 1)
        c[i].c();
      l = $(), n = h("br"), r = $(), s = h("br"), q(t, "min-width", "200px"), /*selectedVersion*/
      o[1] === void 0 && R(() => (
        /*select_change_handler*/
        o[6].call(t)
      ));
    },
    m(i, a) {
      d(i, e, a), d(i, t, a);
      for (let f = 0; f < c.length; f += 1)
        c[f] && c[f].m(t, null);
      g(
        t,
        /*selectedVersion*/
        o[1],
        !0
      ), d(i, l, a), d(i, n, a), d(i, r, a), d(i, s, a), u || (_ = E(
        t,
        "change",
        /*select_change_handler*/
        o[6]
      ), u = !0);
    },
    p(i, a) {
      if (a & /*versions*/
      8) {
        p = /*data*/
        i[8];
        let f;
        for (f = 0; f < p.length; f += 1) {
          const b = I(i, p, f);
          c[f] ? c[f].p(b, a) : (c[f] = L(b), c[f].c(), c[f].m(t, null));
        }
        for (; f < c.length; f += 1)
          c[f].d(1);
        c.length = p.length;
      }
      a & /*selectedVersion, versions*/
      10 && g(
        t,
        /*selectedVersion*/
        i[1]
      );
    },
    d(i) {
      i && m(e), i && m(t), U(c, i), i && m(l), i && m(n), i && m(r), i && m(s), u = !1, _();
    }
  };
}
function Y(o) {
  return { c: v, m: v, p: v, d: v };
}
function Z(o) {
  var r;
  let e, t, l = (
    /*latest*/
    ((r = o[12]) == null ? void 0 : r.stable) && x(o)
  ), n = !/*expertOptions*/
  o[0] && V(o);
  return {
    c() {
      e = h("p"), l && l.c(), t = $(), n && n.c();
    },
    m(s, u) {
      d(s, e, u), l && l.m(e, null), k(e, t), n && n.m(e, null);
    },
    p(s, u) {
      var _;
      /*latest*/
      (_ = s[12]) != null && _.stable && l.p(s, u), /*expertOptions*/
      s[0] ? n && (n.d(1), n = null) : n ? n.p(s, u) : (n = V(s), n.c(), n.m(e, null));
    },
    d(s) {
      s && m(e), l && l.d(), n && n.d();
    }
  };
}
function x(o) {
  let e, t = (
    /*latest*/
    o[12].version + ""
  ), l, n;
  return {
    c() {
      e = y("Installer Version: "), l = y(t), n = y(" (Latest)");
    },
    m(r, s) {
      d(r, e, s), d(r, l, s), d(r, n, s);
    },
    p: v,
    d(r) {
      r && m(e), r && m(l), r && m(n);
    }
  };
}
function V(o) {
  let e, t, l;
  return {
    c() {
      e = h("a"), e.textContent = "Show other versions", w(e, "href", "#");
    },
    m(n, r) {
      d(n, e, r), t || (l = E(e, "click", B(
        /*showExpertOptions*/
        o[4]
      )), t = !0);
    },
    p: v,
    d(n) {
      n && m(e), t = !1, l();
    }
  };
}
function ee(o) {
  return { c: v, m: v, p: v, d: v };
}
function L(o) {
  let e, t = (
    /*version*/
    o[9].version + ""
  ), l;
  return {
    c() {
      e = h("option"), l = y(t), e.__value = /*version*/
      o[9].url, e.value = e.__value;
    },
    m(n, r) {
      d(n, e, r), k(e, l);
    },
    p: v,
    d(n) {
      n && m(e);
    }
  };
}
function te(o) {
  let e, t, l, n, r, s, u, _, p, c, i;
  return l = new O({}), {
    c() {
      e = h("p"), t = h("a"), F(l.$$.fragment), n = y(" Download installer (Universal/.JAR)"), r = $(), s = h("br"), u = $(), _ = h("a"), p = y("Download for Windows"), w(t, "class", "button primary large"), w(
        t,
        "href",
        /*selectedVersion*/
        o[1]
      ), w(_, "href", c = /*selectedVersion*/
      o[1].replace(".jar", ".exe"));
    },
    m(a, f) {
      d(a, e, f), k(e, t), M(l, t, null), k(t, n), k(e, r), k(e, s), k(e, u), k(e, _), k(_, p), i = !0;
    },
    p(a, f) {
      (!i || f & /*selectedVersion, versions*/
      10) && w(
        t,
        "href",
        /*selectedVersion*/
        a[1]
      ), (!i || f & /*selectedVersion, versions*/
      10 && c !== (c = /*selectedVersion*/
      a[1].replace(".jar", ".exe"))) && w(_, "href", c);
    },
    i(a) {
      i || (C(l.$$.fragment, a), i = !0);
    },
    o(a) {
      D(l.$$.fragment, a), i = !1;
    },
    d(a) {
      a && m(e), N(l);
    }
  };
}
function le(o) {
  let e, t, l, n, r, s, u, _, p, c, i;
  return l = new O({}), {
    c() {
      e = h("p"), t = h("a"), F(l.$$.fragment), n = y(" Download for Windows"), s = $(), u = h("br"), _ = $(), p = h("a"), c = y("Download universal jar"), w(t, "class", "button primary"), w(t, "href", r = /*selectedVersion*/
      o[1].replace(".jar", ".exe")), w(
        p,
        "href",
        /*selectedVersion*/
        o[1]
      );
    },
    m(a, f) {
      d(a, e, f), k(e, t), M(l, t, null), k(t, n), k(e, s), k(e, u), k(e, _), k(e, p), k(p, c), i = !0;
    },
    p(a, f) {
      (!i || f & /*selectedVersion, versions*/
      10 && r !== (r = /*selectedVersion*/
      a[1].replace(".jar", ".exe"))) && w(t, "href", r), (!i || f & /*selectedVersion, versions*/
      10) && w(
        p,
        "href",
        /*selectedVersion*/
        a[1]
      );
    },
    i(a) {
      i || (C(l.$$.fragment, a), i = !0);
    },
    o(a) {
      D(l.$$.fragment, a), i = !1;
    },
    d(a) {
      a && m(e), N(l);
    }
  };
}
function ne(o) {
  let e;
  return {
    c() {
      e = h("p"), e.textContent = "Loading versions..";
    },
    m(t, l) {
      d(t, e, l);
    },
    p: v,
    i: v,
    o: v,
    d(t) {
      t && m(e);
    }
  };
}
function re(o) {
  let e, t, l = {
    ctx: o,
    current: null,
    token: null,
    hasCatch: !0,
    pending: ne,
    then: P,
    catch: K,
    value: 8,
    error: 13,
    blocks: [, , ,]
  };
  return S(
    /*versions*/
    o[3],
    l
  ), {
    c() {
      e = h("main"), l.block.c();
    },
    m(n, r) {
      d(n, e, r), l.block.m(e, l.anchor = null), l.mount = () => e, l.anchor = null, t = !0;
    },
    p(n, [r]) {
      o = n, W(l, o, r);
    },
    i(n) {
      t || (C(l.block), t = !0);
    },
    o(n) {
      for (let r = 0; r < 3; r += 1) {
        const s = l.blocks[r];
        D(s);
      }
      t = !1;
    },
    d(n) {
      n && m(e), l.block.d(), l.token = null, l = null;
    }
  };
}
function oe(o, e, t) {
  const l = navigator.platform == "Win32";
  let n = !1, r = "", s = u();
  async function u() {
    var a;
    const i = await G();
    return t(1, r = ((a = i.find((f) => f.stable)) == null ? void 0 : a.url) ?? ""), i;
  }
  function _() {
    t(0, n = !0);
  }
  async function p() {
    return (await s).find((i) => i.url === r);
  }
  function c() {
    r = H(this), t(1, r), t(3, s);
  }
  return [
    n,
    r,
    l,
    s,
    _,
    p,
    c
  ];
}
class ce extends T {
  constructor(e) {
    super(), z(this, e, oe, re, A, {});
  }
}
export {
  ce as default
};
