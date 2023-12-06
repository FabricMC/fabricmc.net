import { S as T, i as z, s as A, h as S, e as h, c as d, u as W, r as j, v as C, d as m, f as H, t as y, a as $, g as q, j as k, n as v, o as w, b as J, m as R, p as D, q as E, l as U, w as F, x as M, y as N, z as B } from "./index.61dc58cf.js";
import { c as G } from "./Api.f22ea594.js";
import O from "./DownloadIcon.214b8f5e.js";
function I(o, e, t) {
  const l = o.slice();
  return l[9] = e[t], l;
}
function K(o) {
  let e, t, l = (
    /*error*/
    o[13].message + ""
  ), n, r, a;
  return {
    c() {
      e = h("p"), t = y("Error: "), n = y(l), r = $(), a = h("p"), a.innerHTML = `For support please visit one of our
      <a href="/discuss">community discussion</a>
      groups.`, q(e, "color", "red");
    },
    m(u, _) {
      d(u, e, _), k(e, t), k(e, n), d(u, r, _), d(u, a, _);
    },
    p: v,
    i: v,
    o: v,
    d(u) {
      u && m(e), u && m(r), u && m(a);
    }
  };
}
function P(o) {
  let e, t, l, n, r, a, u;
  function _(b, g) {
    return (
      /*expertOptions*/
      b[0] ? X : Q
    );
  }
  let p = _(o), c = p(o);
  const i = [le, te], s = [];
  function f(b, g) {
    return (
      /*win32*/
      b[2] ? 0 : 1
    );
  }
  return r = f(o), a = s[r] = i[r](o), {
    c() {
      c.c(), e = $(), t = h("div"), l = h("p"), l.textContent = `The Minecraft and Fabric Loader versions can be selected in the installer, this download
        works for every version we support.`, n = $(), a.c(), w(t, "class", "download");
    },
    m(b, g) {
      c.m(b, g), d(b, e, g), d(b, t, g), k(t, l), k(t, n), s[r].m(t, null), u = !0;
    },
    p(b, g) {
      p === (p = _(b)) && c ? c.p(b, g) : (c.d(1), c = p(b), c && (c.c(), c.m(e.parentNode, e))), a.p(b, g);
    },
    i(b) {
      u || (j(a), u = !0);
    },
    o(b) {
      C(a), u = !1;
    },
    d(b) {
      c.d(b), b && m(e), b && m(t), s[r].d();
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
  let e, t, l, n, r, a, u, _, p = (
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
      l = $(), n = h("br"), r = $(), a = h("br"), q(t, "min-width", "200px"), /*selectedVersion*/
      o[1] === void 0 && R(() => (
        /*select_change_handler*/
        o[6].call(t)
      ));
    },
    m(i, s) {
      d(i, e, s), d(i, t, s);
      for (let f = 0; f < c.length; f += 1)
        c[f] && c[f].m(t, null);
      D(
        t,
        /*selectedVersion*/
        o[1],
        !0
      ), d(i, l, s), d(i, n, s), d(i, r, s), d(i, a, s), u || (_ = E(
        t,
        "change",
        /*select_change_handler*/
        o[6]
      ), u = !0);
    },
    p(i, s) {
      if (s & /*versions*/
      8) {
        p = /*data*/
        i[8];
        let f;
        for (f = 0; f < p.length; f += 1) {
          const b = I(i, p, f);
          c[f] ? c[f].p(b, s) : (c[f] = L(b), c[f].c(), c[f].m(t, null));
        }
        for (; f < c.length; f += 1)
          c[f].d(1);
        c.length = p.length;
      }
      s & /*selectedVersion, versions*/
      10 && D(
        t,
        /*selectedVersion*/
        i[1]
      );
    },
    d(i) {
      i && m(e), i && m(t), U(c, i), i && m(l), i && m(n), i && m(r), i && m(a), u = !1, _();
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
    m(a, u) {
      d(a, e, u), l && l.m(e, null), k(e, t), n && n.m(e, null);
    },
    p(a, u) {
      var _;
      /*latest*/
      (_ = a[12]) != null && _.stable && l.p(a, u), /*expertOptions*/
      a[0] ? n && (n.d(1), n = null) : n ? n.p(a, u) : (n = V(a), n.c(), n.m(e, null));
    },
    d(a) {
      a && m(e), l && l.d(), n && n.d();
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
    m(r, a) {
      d(r, e, a), d(r, l, a), d(r, n, a);
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
  let e, t, l, n, r, a, u, _, p, c, i;
  return l = new O({}), {
    c() {
      e = h("p"), t = h("a"), F(l.$$.fragment), n = y(" Download installer (Universal/.JAR)"), r = $(), a = h("br"), u = $(), _ = h("a"), p = y("Download for Windows"), w(t, "class", "button primary large"), w(
        t,
        "href",
        /*selectedVersion*/
        o[1]
      ), w(_, "href", c = /*selectedVersion*/
      o[1].replace(".jar", ".exe"));
    },
    m(s, f) {
      d(s, e, f), k(e, t), M(l, t, null), k(t, n), k(e, r), k(e, a), k(e, u), k(e, _), k(_, p), i = !0;
    },
    p(s, f) {
      (!i || f & /*selectedVersion, versions*/
      10) && w(
        t,
        "href",
        /*selectedVersion*/
        s[1]
      ), (!i || f & /*selectedVersion, versions*/
      10 && c !== (c = /*selectedVersion*/
      s[1].replace(".jar", ".exe"))) && w(_, "href", c);
    },
    i(s) {
      i || (j(l.$$.fragment, s), i = !0);
    },
    o(s) {
      C(l.$$.fragment, s), i = !1;
    },
    d(s) {
      s && m(e), N(l);
    }
  };
}
function le(o) {
  let e, t, l, n, r, a, u, _, p, c, i;
  return l = new O({}), {
    c() {
      e = h("p"), t = h("a"), F(l.$$.fragment), n = y(" Download for Windows"), a = $(), u = h("br"), _ = $(), p = h("a"), c = y("Download universal jar"), w(t, "class", "button primary large"), w(t, "href", r = /*selectedVersion*/
      o[1].replace(".jar", ".exe")), w(
        p,
        "href",
        /*selectedVersion*/
        o[1]
      );
    },
    m(s, f) {
      d(s, e, f), k(e, t), M(l, t, null), k(t, n), k(e, a), k(e, u), k(e, _), k(e, p), k(p, c), i = !0;
    },
    p(s, f) {
      (!i || f & /*selectedVersion, versions*/
      10 && r !== (r = /*selectedVersion*/
      s[1].replace(".jar", ".exe"))) && w(t, "href", r), (!i || f & /*selectedVersion, versions*/
      10) && w(
        p,
        "href",
        /*selectedVersion*/
        s[1]
      );
    },
    i(s) {
      i || (j(l.$$.fragment, s), i = !0);
    },
    o(s) {
      C(l.$$.fragment, s), i = !1;
    },
    d(s) {
      s && m(e), N(l);
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
      t || (j(l.block), t = !0);
    },
    o(n) {
      for (let r = 0; r < 3; r += 1) {
        const a = l.blocks[r];
        C(a);
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
  let n = !1, r = "", a = u();
  async function u() {
    var s;
    const i = await G();
    return t(1, r = ((s = i.find((f) => f.stable)) == null ? void 0 : s.url) ?? ""), i;
  }
  function _() {
    t(0, n = !0);
  }
  async function p() {
    return (await a).find((i) => i.url === r);
  }
  function c() {
    r = H(this), t(1, r), t(3, a);
  }
  return [
    n,
    r,
    l,
    a,
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
