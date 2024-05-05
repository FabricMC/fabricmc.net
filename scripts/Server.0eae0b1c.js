import { S as qe, i as Fe, s as Je, h as Me, e as i, c as g, u as Ue, o as Le, p as Se, d as k, q as re, t as I, a as b, f as O, g as s, n as F, v as Ge, k as _, r as oe, l as H, w as Te, m as se, A as ge, j as ae, x as ze, B as Ae } from "./index.4deac2e0.js";
import { d as Be, b as De, c as Ee } from "./Api.4fd96799.js";
import He from "./DownloadIcon.39c279f6.js";
function ke(n, e, r) {
  const o = n.slice();
  return o[11] = e[r], o;
}
function we(n, e, r) {
  const o = n.slice();
  return o[11] = e[r], o;
}
function Ce(n, e, r) {
  const o = n.slice();
  return o[11] = e[r], o;
}
function Oe(n) {
  let e, r, o = (
    /*error*/
    n[18].message + ""
  ), c, a, m;
  return {
    c() {
      e = i("p"), r = I("Error: "), c = I(o), a = b(), m = i("p"), m.innerHTML = `For support please visit one of our
    <a href="/discuss/">community discussion</a>
    groups.`, O(e, "color", "red");
    },
    m(f, h) {
      g(f, e, h), s(e, r), s(e, c), g(f, a, h), g(f, m, h);
    },
    p: F,
    i: F,
    o: F,
    d(f) {
      f && k(e), f && k(a), f && k(m);
    }
  };
}
function Pe(n) {
  let e, r, o, c, a, m, f, h, G, V, y, J, T, K, j, L, w, C, z, ie, ce, Q, P, fe, R, N, W, S, Y, ue, Z, _e, X, he, $, x, q, ee, me, te, de, A, pe, le, ve, M, ne, be, B = (
    /*data*/
    n[10].game
  ), d = [];
  for (let t = 0; t < B.length; t += 1)
    d[t] = Ve(Ce(n, B, t));
  let D = (
    /*data*/
    n[10].loader
  ), p = [];
  for (let t = 0; t < D.length; t += 1)
    p[t] = je(we(n, D, t));
  let E = (
    /*data*/
    n[10].installer
  ), v = [];
  for (let t = 0; t < E.length; t += 1)
    v[t] = Ie(ke(n, E, t));
  return z = new He({}), {
    c() {
      e = i("div"), r = i("div"), o = i("label"), o.textContent = "Minecraft Version:", c = b(), a = i("select");
      for (let t = 0; t < d.length; t += 1)
        d[t].c();
      m = b(), f = i("div"), h = i("label"), h.textContent = "Fabric Loader Version:", G = b(), V = i("select");
      for (let t = 0; t < p.length; t += 1)
        p[t].c();
      y = b(), J = i("div"), T = i("label"), T.textContent = "Installer Version:", K = b(), j = i("select");
      for (let t = 0; t < v.length; t += 1)
        v[t].c();
      L = b(), w = i("div"), C = i("a"), Ge(z.$$.fragment), ie = I("Executable Server (.jar)"), ce = b(), Q = i("p"), P = i("a"), fe = I("Download installer for older versions or manual installation"), R = b(), N = i("p"), N.textContent = "The executable jar is a small launcher that will start the Fabric enabled Minecraft server using the versions specified above. There is no need to use an installer when using this method.", W = b(), S = i("div"), Y = i("h4"), Y.textContent = "CLI download:", ue = b(), Z = i("p"), Z.textContent = "Use the following command to download the executable server launcher to the current directory", _e = b(), X = i("code"), he = I("curl -OJ "), $ = I(
        /*serverJarUrl*/
        n[5]
      ), x = b(), q = i("div"), ee = i("h4"), ee.textContent = "Launch command:", me = b(), te = i("p"), te.textContent = "Use the following command to run the executable server launcher with 2GB of ram. After a small wait the Minecraft server will be ready.", de = b(), A = i("code"), pe = I("java -Xmx2G -jar "), le = I(
        /*serverJarFilename*/
        n[4]
      ), ve = I(" nogui"), _(o, "for", "minecraft-version"), _(a, "id", "minecraft-version"), O(a, "min-width", "200px"), /*gameVersion*/
      n[0] === void 0 && oe(() => (
        /*select0_change_handler*/
        n[7].call(a)
      )), _(r, "class", "form-line"), _(h, "for", "loader-version"), _(V, "id", "loader-version"), O(V, "min-width", "200px"), /*loaderVersion*/
      n[1] === void 0 && oe(() => (
        /*select1_change_handler*/
        n[8].call(V)
      )), _(f, "class", "form-line"), _(T, "for", "installer-version"), _(j, "id", "installer-version"), O(j, "min-width", "200px"), /*installerVersion*/
      n[2] === void 0 && oe(() => (
        /*select2_change_handler*/
        n[9].call(j)
      )), _(J, "class", "form-line"), _(C, "class", "button primary large"), _(
        C,
        "href",
        /*serverJarUrl*/
        n[5]
      ), _(w, "class", "download"), _(
        P,
        "href",
        /*installerJarUrl*/
        n[3]
      ), _(e, "class", "download"), _(X, "class", "svelte-l8qzb7"), O(S, "margin-bottom", "15px"), _(A, "class", "svelte-l8qzb7"), O(q, "margin-bottom", "15px");
    },
    m(t, u) {
      g(t, e, u), s(e, r), s(r, o), s(r, c), s(r, a);
      for (let l = 0; l < d.length; l += 1)
        d[l] && d[l].m(a, null);
      H(
        a,
        /*gameVersion*/
        n[0],
        !0
      ), s(e, m), s(e, f), s(f, h), s(f, G), s(f, V);
      for (let l = 0; l < p.length; l += 1)
        p[l] && p[l].m(V, null);
      H(
        V,
        /*loaderVersion*/
        n[1],
        !0
      ), s(e, y), s(e, J), s(J, T), s(J, K), s(J, j);
      for (let l = 0; l < v.length; l += 1)
        v[l] && v[l].m(j, null);
      H(
        j,
        /*installerVersion*/
        n[2],
        !0
      ), s(e, L), s(e, w), s(w, C), Te(z, C, null), s(C, ie), s(e, ce), s(e, Q), s(Q, P), s(P, fe), g(t, R, u), g(t, N, u), g(t, W, u), g(t, S, u), s(S, Y), s(S, ue), s(S, Z), s(S, _e), s(S, X), s(X, he), s(X, $), g(t, x, u), g(t, q, u), s(q, ee), s(q, me), s(q, te), s(q, de), s(q, A), s(A, pe), s(A, le), s(A, ve), M = !0, ne || (be = [
        se(
          a,
          "change",
          /*select0_change_handler*/
          n[7]
        ),
        se(
          V,
          "change",
          /*select1_change_handler*/
          n[8]
        ),
        se(
          j,
          "change",
          /*select2_change_handler*/
          n[9]
        )
      ], ne = !0);
    },
    p(t, u) {
      if (u & /*versions*/
      64) {
        B = /*data*/
        t[10].game;
        let l;
        for (l = 0; l < B.length; l += 1) {
          const U = Ce(t, B, l);
          d[l] ? d[l].p(U, u) : (d[l] = Ve(U), d[l].c(), d[l].m(a, null));
        }
        for (; l < d.length; l += 1)
          d[l].d(1);
        d.length = B.length;
      }
      if (u & /*gameVersion, versions*/
      65 && H(
        a,
        /*gameVersion*/
        t[0]
      ), u & /*versions*/
      64) {
        D = /*data*/
        t[10].loader;
        let l;
        for (l = 0; l < D.length; l += 1) {
          const U = we(t, D, l);
          p[l] ? p[l].p(U, u) : (p[l] = je(U), p[l].c(), p[l].m(V, null));
        }
        for (; l < p.length; l += 1)
          p[l].d(1);
        p.length = D.length;
      }
      if (u & /*loaderVersion, versions*/
      66 && H(
        V,
        /*loaderVersion*/
        t[1]
      ), u & /*versions*/
      64) {
        E = /*data*/
        t[10].installer;
        let l;
        for (l = 0; l < E.length; l += 1) {
          const U = ke(t, E, l);
          v[l] ? v[l].p(U, u) : (v[l] = Ie(U), v[l].c(), v[l].m(j, null));
        }
        for (; l < v.length; l += 1)
          v[l].d(1);
        v.length = E.length;
      }
      u & /*installerVersion, versions*/
      68 && H(
        j,
        /*installerVersion*/
        t[2]
      ), (!M || u & /*serverJarUrl*/
      32) && _(
        C,
        "href",
        /*serverJarUrl*/
        t[5]
      ), (!M || u & /*installerJarUrl*/
      8) && _(
        P,
        "href",
        /*installerJarUrl*/
        t[3]
      ), (!M || u & /*serverJarUrl*/
      32) && ge(
        $,
        /*serverJarUrl*/
        t[5]
      ), (!M || u & /*serverJarFilename*/
      16) && ge(
        le,
        /*serverJarFilename*/
        t[4]
      );
    },
    i(t) {
      M || (Le(z.$$.fragment, t), M = !0);
    },
    o(t) {
      Se(z.$$.fragment, t), M = !1;
    },
    d(t) {
      t && k(e), ae(d, t), ae(p, t), ae(v, t), ze(z), t && k(R), t && k(N), t && k(W), t && k(S), t && k(x), t && k(q), ne = !1, Ae(be);
    }
  };
}
function Ve(n) {
  let e, r = (
    /*version*/
    n[11].version + ""
  ), o;
  return {
    c() {
      e = i("option"), o = I(r), e.__value = /*version*/
      n[11].version, e.value = e.__value;
    },
    m(c, a) {
      g(c, e, a), s(e, o);
    },
    p: F,
    d(c) {
      c && k(e);
    }
  };
}
function je(n) {
  let e, r = (
    /*version*/
    n[11].version + ""
  ), o;
  return {
    c() {
      e = i("option"), o = I(r), e.__value = /*version*/
      n[11].version, e.value = e.__value;
    },
    m(c, a) {
      g(c, e, a), s(e, o);
    },
    p: F,
    d(c) {
      c && k(e);
    }
  };
}
function Ie(n) {
  let e, r = (
    /*version*/
    n[11].version + ""
  ), o;
  return {
    c() {
      e = i("option"), o = I(r), e.__value = /*version*/
      n[11].version, e.value = e.__value;
    },
    m(c, a) {
      g(c, e, a), s(e, o);
    },
    p: F,
    d(c) {
      c && k(e);
    }
  };
}
function Xe(n) {
  let e;
  return {
    c() {
      e = i("p"), e.textContent = "Loading versions..";
    },
    m(r, o) {
      g(r, e, o);
    },
    p: F,
    i: F,
    o: F,
    d(r) {
      r && k(e);
    }
  };
}
function ye(n) {
  let e, r, o = {
    ctx: n,
    current: null,
    token: null,
    hasCatch: !0,
    pending: Xe,
    then: Pe,
    catch: Oe,
    value: 10,
    error: 18,
    blocks: [, , ,]
  };
  return Me(
    /*versions*/
    n[6],
    o
  ), {
    c() {
      e = i("main"), o.block.c();
    },
    m(c, a) {
      g(c, e, a), o.block.m(e, o.anchor = null), o.mount = () => e, o.anchor = null, r = !0;
    },
    p(c, [a]) {
      n = c, Ue(o, n, a);
    },
    i(c) {
      r || (Le(o.block), r = !0);
    },
    o(c) {
      for (let a = 0; a < 3; a += 1) {
        const m = o.blocks[a];
        Se(m);
      }
      r = !1;
    },
    d(c) {
      c && k(e), o.block.d(), o.token = null, o = null;
    }
  };
}
function Ke(n, e, r) {
  let o, c, a, m, f, h, G = Promise.all([Be(), De(), Ee()]).then(([T, K, j]) => {
    const L = {
      game: T,
      loader: K.filter((w) => {
        const C = w.version.split(".");
        return parseInt(C[0]) > 0 || parseInt(C[1]) >= 12;
      }),
      installer: j.filter((w) => {
        const C = w.version.split(".");
        return parseInt(C[0]) > 0 || parseInt(C[1]) >= 8;
      })
    };
    return r(0, m = (L.game.find((w) => w.stable) || L.game[0]).version), r(1, f = (L.loader.find((w) => w.stable) || L.loader[0]).version), r(2, h = (L.installer.find((w) => w.stable) || L.installer[0]).version), L;
  });
  function V() {
    m = re(this), r(0, m), r(6, G);
  }
  function y() {
    f = re(this), r(1, f), r(6, G);
  }
  function J() {
    h = re(this), r(2, h), r(6, G);
  }
  return n.$$.update = () => {
    n.$$.dirty & /*gameVersion, loaderVersion, installerVersion*/
    7 && r(5, o = `https://meta.fabricmc.net/v2/versions/loader/${m}/${f}/${h}/server/jar`), n.$$.dirty & /*gameVersion, loaderVersion, installerVersion*/
    7 && r(4, c = `fabric-server-mc.${m}-loader.${f}-launcher.${h}.jar`), n.$$.dirty & /*installerVersion*/
    4 && r(3, a = `https://maven.fabricmc.net/net/fabricmc/fabric-installer/${h}/fabric-installer-${h}.jar`);
  }, [
    m,
    f,
    h,
    a,
    c,
    o,
    G,
    V,
    y,
    J
  ];
}
class We extends qe {
  constructor(e) {
    super(), Fe(this, e, Ke, ye, Je, {});
  }
}
export {
  We as default
};
