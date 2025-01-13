import { S as T, i as A, s as H, h as S, e as h, c as m, u as W, o as j, p as C, d as b, q as J, t as y, a as $, f as q, g as k, n as w, k as v, b as R, r as U, l as D, m as E, j as z, v as F, w as M, x as N, y as B } from "./index.4deac2e0.js";
import { c as G } from "./Api.280716b7.js";
import O from "./DownloadIcon.39c279f6.js";
function V(r, e, t) {
  const l = r.slice();
  return l[10] = e[t], l;
}
function K(r) {
  let e, t, l = (
    /*error*/
    r[14].message + ""
  ), n, o, s;
  return {
    c() {
      e = h("p"), t = y("Error: "), n = y(l), o = $(), s = h("p"), s.innerHTML = `For support please visit one of our
      <a href="/discuss/">community discussion</a>
      groups.`, q(e, "color", "red");
    },
    m(u, d) {
      m(u, e, d), k(e, t), k(e, n), m(u, o, d), m(u, s, d);
    },
    p: w,
    i: w,
    o: w,
    d(u) {
      u && b(e), u && b(o), u && b(s);
    }
  };
}
function P(r) {
  let e, t, l, n, o, s, u;
  function d(p, g) {
    if (
      /*expertOptions*/
      p[1]
    )
      return X;
    if (
      /*showVersionSelection*/
      p[0]
    )
      return Q;
  }
  let _ = d(r), f = _ && _(r);
  const i = [le, te], a = [];
  function c(p, g) {
    return (
      /*win32*/
      p[3] ? 0 : 1
    );
  }
  return o = c(r), s = a[o] = i[o](r), {
    c() {
      f && f.c(), e = $(), t = h("div"), l = h("p"), l.textContent = `The Minecraft and Fabric Loader versions can be selected in the installer, this download
        works for every version we support.`, n = $(), s.c(), v(t, "class", "download");
    },
    m(p, g) {
      f && f.m(p, g), m(p, e, g), m(p, t, g), k(t, l), k(t, n), a[o].m(t, null), u = !0;
    },
    p(p, g) {
      _ === (_ = d(p)) && f ? f.p(p, g) : (f && f.d(1), f = _ && _(p), f && (f.c(), f.m(e.parentNode, e))), s.p(p, g);
    },
    i(p) {
      u || (j(s), u = !0);
    },
    o(p) {
      C(s), u = !1;
    },
    d(p) {
      f && f.d(p), p && b(e), p && b(t), a[o].d();
    }
  };
}
function Q(r) {
  let e, t = {
    ctx: r,
    current: null,
    token: null,
    hasCatch: !1,
    pending: ee,
    then: Z,
    catch: Y,
    value: 13
  };
  return S(
    /*getVersion*/
    r[6](),
    t
  ), {
    c() {
      e = R(), t.block.c();
    },
    m(l, n) {
      m(l, e, n), t.block.m(l, t.anchor = n), t.mount = () => e.parentNode, t.anchor = e;
    },
    p(l, n) {
      r = l, W(t, r, n);
    },
    d(l) {
      l && b(e), t.block.d(l), t.token = null, t = null;
    }
  };
}
function X(r) {
  let e, t, l, n, o, s, u, d, _ = (
    /*data*/
    r[9]
  ), f = [];
  for (let i = 0; i < _.length; i += 1)
    f[i] = L(V(r, _, i));
  return {
    c() {
      e = y(`Installer Version:
      `), t = h("select");
      for (let i = 0; i < f.length; i += 1)
        f[i].c();
      l = $(), n = h("br"), o = $(), s = h("br"), q(t, "min-width", "200px"), /*selectedVersion*/
      r[2] === void 0 && U(() => (
        /*select_change_handler*/
        r[7].call(t)
      ));
    },
    m(i, a) {
      m(i, e, a), m(i, t, a);
      for (let c = 0; c < f.length; c += 1)
        f[c] && f[c].m(t, null);
      D(
        t,
        /*selectedVersion*/
        r[2],
        !0
      ), m(i, l, a), m(i, n, a), m(i, o, a), m(i, s, a), u || (d = E(
        t,
        "change",
        /*select_change_handler*/
        r[7]
      ), u = !0);
    },
    p(i, a) {
      if (a & /*versions*/
      16) {
        _ = /*data*/
        i[9];
        let c;
        for (c = 0; c < _.length; c += 1) {
          const p = V(i, _, c);
          f[c] ? f[c].p(p, a) : (f[c] = L(p), f[c].c(), f[c].m(t, null));
        }
        for (; c < f.length; c += 1)
          f[c].d(1);
        f.length = _.length;
      }
      a & /*selectedVersion, versions*/
      20 && D(
        t,
        /*selectedVersion*/
        i[2]
      );
    },
    d(i) {
      i && b(e), i && b(t), z(f, i), i && b(l), i && b(n), i && b(o), i && b(s), u = !1, d();
    }
  };
}
function Y(r) {
  return { c: w, m: w, p: w, d: w };
}
function Z(r) {
  var o;
  let e, t, l = (
    /*latest*/
    ((o = r[13]) == null ? void 0 : o.stable) && x(r)
  ), n = !/*expertOptions*/
  r[1] && I(r);
  return {
    c() {
      e = h("p"), l && l.c(), t = $(), n && n.c();
    },
    m(s, u) {
      m(s, e, u), l && l.m(e, null), k(e, t), n && n.m(e, null);
    },
    p(s, u) {
      var d;
      /*latest*/
      (d = s[13]) != null && d.stable && l.p(s, u), /*expertOptions*/
      s[1] ? n && (n.d(1), n = null) : n ? n.p(s, u) : (n = I(s), n.c(), n.m(e, null));
    },
    d(s) {
      s && b(e), l && l.d(), n && n.d();
    }
  };
}
function x(r) {
  let e, t = (
    /*latest*/
    r[13].version + ""
  ), l, n;
  return {
    c() {
      e = y("Installer Version: "), l = y(t), n = y(" (Latest)");
    },
    m(o, s) {
      m(o, e, s), m(o, l, s), m(o, n, s);
    },
    p: w,
    d(o) {
      o && b(e), o && b(l), o && b(n);
    }
  };
}
function I(r) {
  let e, t, l;
  return {
    c() {
      e = h("a"), e.textContent = "Show beta versions", v(e, "href", "#");
    },
    m(n, o) {
      m(n, e, o), t || (l = E(e, "click", B(
        /*showExpertOptions*/
        r[5]
      )), t = !0);
    },
    p: w,
    d(n) {
      n && b(e), t = !1, l();
    }
  };
}
function ee(r) {
  return { c: w, m: w, p: w, d: w };
}
function L(r) {
  let e, t = (
    /*version*/
    r[10].version + ""
  ), l;
  return {
    c() {
      e = h("option"), l = y(t), e.__value = /*version*/
      r[10].url, e.value = e.__value;
    },
    m(n, o) {
      m(n, e, o), k(e, l);
    },
    p: w,
    d(n) {
      n && b(e);
    }
  };
}
function te(r) {
  let e, t, l, n, o, s, u, d, _, f, i;
  return l = new O({}), {
    c() {
      e = h("p"), t = h("a"), F(l.$$.fragment), n = y(" Download installer (Universal/.JAR)"), o = $(), s = h("br"), u = $(), d = h("a"), _ = y("Download for Windows"), v(t, "class", "button primary large"), v(
        t,
        "href",
        /*selectedVersion*/
        r[2]
      ), v(d, "href", f = /*selectedVersion*/
      r[2].replace(".jar", ".exe"));
    },
    m(a, c) {
      m(a, e, c), k(e, t), M(l, t, null), k(t, n), k(e, o), k(e, s), k(e, u), k(e, d), k(d, _), i = !0;
    },
    p(a, c) {
      (!i || c & /*selectedVersion, versions*/
      20) && v(
        t,
        "href",
        /*selectedVersion*/
        a[2]
      ), (!i || c & /*selectedVersion, versions*/
      20 && f !== (f = /*selectedVersion*/
      a[2].replace(".jar", ".exe"))) && v(d, "href", f);
    },
    i(a) {
      i || (j(l.$$.fragment, a), i = !0);
    },
    o(a) {
      C(l.$$.fragment, a), i = !1;
    },
    d(a) {
      a && b(e), N(l);
    }
  };
}
function le(r) {
  let e, t, l, n, o, s, u, d, _, f, i;
  return l = new O({}), {
    c() {
      e = h("p"), t = h("a"), F(l.$$.fragment), n = y(" Download for Windows"), s = $(), u = h("br"), d = $(), _ = h("a"), f = y("Download universal jar"), v(t, "class", "button primary large"), v(t, "href", o = /*selectedVersion*/
      r[2].replace(".jar", ".exe")), v(
        _,
        "href",
        /*selectedVersion*/
        r[2]
      );
    },
    m(a, c) {
      m(a, e, c), k(e, t), M(l, t, null), k(t, n), k(e, s), k(e, u), k(e, d), k(e, _), k(_, f), i = !0;
    },
    p(a, c) {
      (!i || c & /*selectedVersion, versions*/
      20 && o !== (o = /*selectedVersion*/
      a[2].replace(".jar", ".exe"))) && v(t, "href", o), (!i || c & /*selectedVersion, versions*/
      20) && v(
        _,
        "href",
        /*selectedVersion*/
        a[2]
      );
    },
    i(a) {
      i || (j(l.$$.fragment, a), i = !0);
    },
    o(a) {
      C(l.$$.fragment, a), i = !1;
    },
    d(a) {
      a && b(e), N(l);
    }
  };
}
function ne(r) {
  let e;
  return {
    c() {
      e = h("p"), e.textContent = "Loading versions..";
    },
    m(t, l) {
      m(t, e, l);
    },
    p: w,
    i: w,
    o: w,
    d(t) {
      t && b(e);
    }
  };
}
function re(r) {
  let e, t, l = {
    ctx: r,
    current: null,
    token: null,
    hasCatch: !0,
    pending: ne,
    then: P,
    catch: K,
    value: 9,
    error: 14,
    blocks: [, , ,]
  };
  return S(
    /*versions*/
    r[4],
    l
  ), {
    c() {
      e = h("main"), l.block.c();
    },
    m(n, o) {
      m(n, e, o), l.block.m(e, l.anchor = null), l.mount = () => e, l.anchor = null, t = !0;
    },
    p(n, [o]) {
      r = n, W(l, r, o);
    },
    i(n) {
      t || (j(l.block), t = !0);
    },
    o(n) {
      for (let o = 0; o < 3; o += 1) {
        const s = l.blocks[o];
        C(s);
      }
      t = !1;
    },
    d(n) {
      n && b(e), l.block.d(), l.token = null, l = null;
    }
  };
}
function oe(r, e, t) {
  const l = navigator.platform == "Win32";
  let n = !1, o = !1, s = "", u = d();
  async function d() {
    var c;
    const a = await G();
    return t(2, s = ((c = a.find((p) => p.stable)) == null ? void 0 : c.url) ?? ""), t(0, n = a[0].stable == !1), a;
  }
  function _() {
    t(1, o = !0);
  }
  async function f() {
    return (await u).find((a) => a.url === s);
  }
  function i() {
    s = J(this), t(2, s), t(4, u);
  }
  return [
    n,
    o,
    s,
    l,
    u,
    _,
    f,
    i
  ];
}
class fe extends T {
  constructor(e) {
    super(), A(this, e, oe, re, H, {});
  }
}
export {
  fe as default
};
