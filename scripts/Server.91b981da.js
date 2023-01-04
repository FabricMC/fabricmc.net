import { S as qe, i as Fe, s as Je, h as Me, e as i, c as p, u as Ue, r as Le, v as Se, d as v, f as oe, t as I, a as d, g as O, j as s, n as F, w as Ge, o as _, m as re, p as H, x as Te, q as se, k as ge, l as ae, y as ze, B as Be } from "./index.1b882cd4.js";
import { d as De, b as Ee, c as Ae } from "./Api.067a7637.js";
import He from "./DownloadIcon.81b5365d.js";
function ke(l, e, o) {
  const r = l.slice();
  return r[11] = e[o], r;
}
function we(l, e, o) {
  const r = l.slice();
  return r[11] = e[o], r;
}
function Ce(l, e, o) {
  const r = l.slice();
  return r[11] = e[o], r;
}
function Oe(l) {
  let e, o, r = l[18].message + "", c, a, m;
  return {
    c() {
      e = i("p"), o = I("Error: "), c = I(r), a = d(), m = i("p"), m.innerHTML = `For support please visit one of our
    <a href="/discuss">community discussion</a>
    groups.`, O(e, "color", "red");
    },
    m(f, h) {
      p(f, e, h), s(e, o), s(e, c), p(f, a, h), p(f, m, h);
    },
    p: F,
    i: F,
    o: F,
    d(f) {
      f && v(e), f && v(a), f && v(m);
    }
  };
}
function Pe(l) {
  let e, o, r, c, a, m, f, h, G, V, y, J, T, K, j, L, b, C, z, ie, ce, Q, P, fe, R, N, W, S, Y, ue, Z, _e, X, he, $, x, q, ee, me, te, de, B, pe, le, ve, M, ne, be, D = l[10].game, g = [];
  for (let t = 0; t < D.length; t += 1)
    g[t] = Ve(Ce(l, D, t));
  let E = l[10].loader, k = [];
  for (let t = 0; t < E.length; t += 1)
    k[t] = je(we(l, E, t));
  let A = l[10].installer, w = [];
  for (let t = 0; t < A.length; t += 1)
    w[t] = Ie(ke(l, A, t));
  return z = new He({}), {
    c() {
      e = i("div"), o = i("div"), r = i("label"), r.textContent = "Minecraft Version:", c = d(), a = i("select");
      for (let t = 0; t < g.length; t += 1)
        g[t].c();
      m = d(), f = i("div"), h = i("label"), h.textContent = "Fabric Loader Version:", G = d(), V = i("select");
      for (let t = 0; t < k.length; t += 1)
        k[t].c();
      y = d(), J = i("div"), T = i("label"), T.textContent = "Installer Version:", K = d(), j = i("select");
      for (let t = 0; t < w.length; t += 1)
        w[t].c();
      L = d(), b = i("div"), C = i("a"), Ge(z.$$.fragment), ie = I(" Executable Server (.jar)"), ce = d(), Q = i("p"), P = i("a"), fe = I("Download installer for older versions or manual installation"), R = d(), N = i("p"), N.textContent = "The executable jar is a small launcher that will start the Fabric enabled Minecraft server using the versions specified above. There is no need to use an installer when using this method.", W = d(), S = i("div"), Y = i("h4"), Y.textContent = "CLI download:", ue = d(), Z = i("p"), Z.textContent = "Use the following command to download the executable server launcher to the current directory", _e = d(), X = i("code"), he = I("curl -OJ "), $ = I(l[5]), x = d(), q = i("div"), ee = i("h4"), ee.textContent = "Launch command:", me = d(), te = i("p"), te.textContent = "Use the following command to run the executable server launcher with 2GB of ram. After a small wait the Minecraft server will be ready.", de = d(), B = i("code"), pe = I("java -Xmx2G -jar "), le = I(l[4]), ve = I(" nogui"), _(r, "for", "minecraft-version"), _(a, "id", "minecraft-version"), O(a, "min-width", "200px"), l[0] === void 0 && re(() => l[7].call(a)), _(o, "class", "form-line"), _(h, "for", "loader-version"), _(V, "id", "loader-version"), O(V, "min-width", "200px"), l[1] === void 0 && re(() => l[8].call(V)), _(f, "class", "form-line"), _(T, "for", "installer-version"), _(j, "id", "installer-version"), O(j, "min-width", "200px"), l[2] === void 0 && re(() => l[9].call(j)), _(J, "class", "form-line"), _(C, "class", "button"), _(C, "href", l[5]), _(b, "class", "download"), _(P, "href", l[3]), _(e, "class", "download"), _(X, "class", "svelte-l8qzb7"), O(S, "margin-bottom", "15px"), _(B, "class", "svelte-l8qzb7"), O(q, "margin-bottom", "15px");
    },
    m(t, u) {
      p(t, e, u), s(e, o), s(o, r), s(o, c), s(o, a);
      for (let n = 0; n < g.length; n += 1)
        g[n].m(a, null);
      H(a, l[0]), s(e, m), s(e, f), s(f, h), s(f, G), s(f, V);
      for (let n = 0; n < k.length; n += 1)
        k[n].m(V, null);
      H(V, l[1]), s(e, y), s(e, J), s(J, T), s(J, K), s(J, j);
      for (let n = 0; n < w.length; n += 1)
        w[n].m(j, null);
      H(j, l[2]), s(e, L), s(e, b), s(b, C), Te(z, C, null), s(C, ie), s(e, ce), s(e, Q), s(Q, P), s(P, fe), p(t, R, u), p(t, N, u), p(t, W, u), p(t, S, u), s(S, Y), s(S, ue), s(S, Z), s(S, _e), s(S, X), s(X, he), s(X, $), p(t, x, u), p(t, q, u), s(q, ee), s(q, me), s(q, te), s(q, de), s(q, B), s(B, pe), s(B, le), s(B, ve), M = !0, ne || (be = [
        se(a, "change", l[7]),
        se(V, "change", l[8]),
        se(j, "change", l[9])
      ], ne = !0);
    },
    p(t, u) {
      if (u & 64) {
        D = t[10].game;
        let n;
        for (n = 0; n < D.length; n += 1) {
          const U = Ce(t, D, n);
          g[n] ? g[n].p(U, u) : (g[n] = Ve(U), g[n].c(), g[n].m(a, null));
        }
        for (; n < g.length; n += 1)
          g[n].d(1);
        g.length = D.length;
      }
      if (u & 65 && H(a, t[0]), u & 64) {
        E = t[10].loader;
        let n;
        for (n = 0; n < E.length; n += 1) {
          const U = we(t, E, n);
          k[n] ? k[n].p(U, u) : (k[n] = je(U), k[n].c(), k[n].m(V, null));
        }
        for (; n < k.length; n += 1)
          k[n].d(1);
        k.length = E.length;
      }
      if (u & 66 && H(V, t[1]), u & 64) {
        A = t[10].installer;
        let n;
        for (n = 0; n < A.length; n += 1) {
          const U = ke(t, A, n);
          w[n] ? w[n].p(U, u) : (w[n] = Ie(U), w[n].c(), w[n].m(j, null));
        }
        for (; n < w.length; n += 1)
          w[n].d(1);
        w.length = A.length;
      }
      u & 68 && H(j, t[2]), (!M || u & 32) && _(C, "href", t[5]), (!M || u & 8) && _(P, "href", t[3]), (!M || u & 32) && ge($, t[5]), (!M || u & 16) && ge(le, t[4]);
    },
    i(t) {
      M || (Le(z.$$.fragment, t), M = !0);
    },
    o(t) {
      Se(z.$$.fragment, t), M = !1;
    },
    d(t) {
      t && v(e), ae(g, t), ae(k, t), ae(w, t), ze(z), t && v(R), t && v(N), t && v(W), t && v(S), t && v(x), t && v(q), ne = !1, Be(be);
    }
  };
}
function Ve(l) {
  let e, o = l[11].version + "", r;
  return {
    c() {
      e = i("option"), r = I(o), e.__value = l[11].version, e.value = e.__value;
    },
    m(c, a) {
      p(c, e, a), s(e, r);
    },
    p: F,
    d(c) {
      c && v(e);
    }
  };
}
function je(l) {
  let e, o = l[11].version + "", r;
  return {
    c() {
      e = i("option"), r = I(o), e.__value = l[11].version, e.value = e.__value;
    },
    m(c, a) {
      p(c, e, a), s(e, r);
    },
    p: F,
    d(c) {
      c && v(e);
    }
  };
}
function Ie(l) {
  let e, o = l[11].version + "", r;
  return {
    c() {
      e = i("option"), r = I(o), e.__value = l[11].version, e.value = e.__value;
    },
    m(c, a) {
      p(c, e, a), s(e, r);
    },
    p: F,
    d(c) {
      c && v(e);
    }
  };
}
function Xe(l) {
  let e;
  return {
    c() {
      e = i("p"), e.textContent = "Loading versions..";
    },
    m(o, r) {
      p(o, e, r);
    },
    p: F,
    i: F,
    o: F,
    d(o) {
      o && v(e);
    }
  };
}
function ye(l) {
  let e, o, r = {
    ctx: l,
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
  return Me(l[6], r), {
    c() {
      e = i("main"), r.block.c();
    },
    m(c, a) {
      p(c, e, a), r.block.m(e, r.anchor = null), r.mount = () => e, r.anchor = null, o = !0;
    },
    p(c, [a]) {
      l = c, Ue(r, l, a);
    },
    i(c) {
      o || (Le(r.block), o = !0);
    },
    o(c) {
      for (let a = 0; a < 3; a += 1) {
        const m = r.blocks[a];
        Se(m);
      }
      o = !1;
    },
    d(c) {
      c && v(e), r.block.d(), r.token = null, r = null;
    }
  };
}
function Ke(l, e, o) {
  let r, c, a, m, f, h, G = Promise.all([De(), Ee(), Ae()]).then(([T, K, j]) => {
    const L = {
      game: T,
      loader: K.filter((b) => {
        const C = b.version.split(".");
        return parseInt(C[0]) > 0 || parseInt(C[1]) >= 12;
      }),
      installer: j.filter((b) => {
        const C = b.version.split(".");
        return parseInt(C[0]) > 0 || parseInt(C[1]) >= 8;
      })
    };
    return o(0, m = (L.game.find((b) => b.stable) || L.game[0]).version), o(1, f = (L.loader.find((b) => b.stable) || L.loader[0]).version), o(2, h = (L.installer.find((b) => b.stable) || L.installer[0]).version), L;
  });
  function V() {
    m = oe(this), o(0, m), o(6, G);
  }
  function y() {
    f = oe(this), o(1, f), o(6, G);
  }
  function J() {
    h = oe(this), o(2, h), o(6, G);
  }
  return l.$$.update = () => {
    l.$$.dirty & 7 && o(5, r = `https://meta.fabricmc.net/v2/versions/loader/${m}/${f}/${h}/server/jar`), l.$$.dirty & 7 && o(4, c = `fabric-server-mc.${m}-loader.${f}-launcher.${h}.jar`), l.$$.dirty & 4 && o(3, a = `https://maven.fabricmc.net/net/fabricmc/fabric-installer/${h}/fabric-installer-${h}.jar`);
  }, [
    m,
    f,
    h,
    a,
    c,
    r,
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
