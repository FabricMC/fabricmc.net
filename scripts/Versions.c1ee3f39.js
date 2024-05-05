import { S as oe, i as ne, s as ie, h as re, a as k, e as c, c as o, u as pe, n as C, d as n, q as fe, t as h, f as B, g as a, r as ae, k as ue, l as te, m as me, A, j as ce } from "./index.4deac2e0.js";
import { d as _e, b as de, a as be, k as he, l as ve } from "./Api.4fd96799.js";
function se(l, t, p) {
  const f = l.slice();
  return f[9] = t[p], f;
}
function Ve(l) {
  let t, p, f = (
    /*error*/
    l[12].message + ""
  ), _, d, v;
  return {
    c() {
      t = c("p"), p = h("Error: "), _ = h(f), d = k(), v = c("p"), v.innerHTML = `For support please visit one of our
        <a href="/discuss/">community discussion</a>
        groups.`, B(t, "color", "red");
    },
    m(s, i) {
      o(s, t, i), a(t, p), a(t, _), o(s, d, i), o(s, v, i);
    },
    p: C,
    d(s) {
      s && n(t), s && n(d), s && n(v);
    }
  };
}
function ke(l) {
  let t, p, f, _, d, v, s, i, m, T, u, y, M, D, S, J, P, Q, Y, R, W, j, X, N, q, U, E, F, G, H, K, L, Z, O, $, g, I, z, x, w = (
    /*gameVersions*/
    l[4]
  ), V = [];
  for (let e = 0; e < w.length; e += 1)
    V[e] = le(se(l, w, e));
  return {
    c() {
      t = c("h2"), t.textContent = "Latest Versions", p = k(), f = c("p"), f.innerHTML = "Select a Minecraft version to get the recommended versions of Fabric Loader, Yarn, and Fabric API for your <code>gradle.properties</code> file.", _ = k(), d = c("p"), v = h(`Minecraft Version:
        `), s = c("select");
      for (let e = 0; e < V.length; e += 1)
        V[e].c();
      i = k(), m = c("div"), T = c("pre"), u = c("code"), y = h(`
minecraft_version=`), M = h(
        /*minecraftVersion*/
        l[0]
      ), D = h(`
yarn_mappings=`), S = h(
        /*yarnVersion*/
        l[1]
      ), J = h(`
loader_version=`), P = h(
        /*loaderVersion*/
        l[2]
      ), Q = h(`

# Fabric API
fabric_version=`), Y = h(
        /*apiVersion*/
        l[3]
      ), R = h(`
        `), W = k(), j = c("p"), j.innerHTML = "<strong>Important Note:</strong> In some cases, such as snapshots or special releases, the <code>fabric-api</code> version might not align perfectly with your Minecraft version.", X = k(), N = c("p"), N.innerHTML = 'If you encounter issues, double-check the latest release of Fabric API on <a href="https://modrinth.com/mod/fabric-api">Modrinth</a> or <a href="https://minecraft.curseforge.com/projects/fabric/files">CurseForge</a>.', q = k(), U = c("hr"), E = k(), F = c("h2"), F.textContent = "Automatically Update Mappings", G = k(), H = c("p"), H.textContent = "Keep your project up-to-date with the correct Yarn mappings using this automatic update command:", K = k(), L = c("code"), Z = h('gradlew migrateMappings --mappings "'), O = h(
        /*yarnVersion*/
        l[1]
      ), $ = h('"'), g = k(), I = c("p"), I.innerHTML = 'For more information on this command, you should refer to the <a href="https://fabricmc.net/wiki/tutorial:migratemappings">Updating Yarn Mappings</a> wiki page.', B(s, "min-width", "200px"), /*minecraftVersion*/
      l[0] === void 0 && ae(() => (
        /*select_change_handler*/
        l[5].call(s)
      )), B(m, "margin-bottom", "15px"), ue(L, "class", "copy-code svelte-sbpww1");
    },
    m(e, r) {
      o(e, t, r), o(e, p, r), o(e, f, r), o(e, _, r), o(e, d, r), a(d, v), a(d, s);
      for (let b = 0; b < V.length; b += 1)
        V[b] && V[b].m(s, null);
      te(
        s,
        /*minecraftVersion*/
        l[0],
        !0
      ), o(e, i, r), o(e, m, r), a(m, T), a(T, u), a(u, y), a(u, M), a(u, D), a(u, S), a(u, J), a(u, P), a(u, Q), a(u, Y), a(u, R), a(m, W), a(m, j), a(m, X), a(m, N), o(e, q, r), o(e, U, r), o(e, E, r), o(e, F, r), o(e, G, r), o(e, H, r), o(e, K, r), o(e, L, r), a(L, Z), a(L, O), a(L, $), o(e, g, r), o(e, I, r), z || (x = me(
        s,
        "change",
        /*select_change_handler*/
        l[5]
      ), z = !0);
    },
    p(e, r) {
      if (r & /*gameVersions*/
      16) {
        w = /*gameVersions*/
        e[4];
        let b;
        for (b = 0; b < w.length; b += 1) {
          const ee = se(e, w, b);
          V[b] ? V[b].p(ee, r) : (V[b] = le(ee), V[b].c(), V[b].m(s, null));
        }
        for (; b < V.length; b += 1)
          V[b].d(1);
        V.length = w.length;
      }
      r & /*minecraftVersion, gameVersions*/
      17 && te(
        s,
        /*minecraftVersion*/
        e[0]
      ), r & /*minecraftVersion*/
      1 && A(
        M,
        /*minecraftVersion*/
        e[0]
      ), r & /*yarnVersion*/
      2 && A(
        S,
        /*yarnVersion*/
        e[1]
      ), r & /*loaderVersion*/
      4 && A(
        P,
        /*loaderVersion*/
        e[2]
      ), r & /*apiVersion*/
      8 && A(
        Y,
        /*apiVersion*/
        e[3]
      ), r & /*yarnVersion*/
      2 && A(
        O,
        /*yarnVersion*/
        e[1]
      );
    },
    d(e) {
      e && n(t), e && n(p), e && n(f), e && n(_), e && n(d), ce(V, e), e && n(i), e && n(m), e && n(q), e && n(U), e && n(E), e && n(F), e && n(G), e && n(H), e && n(K), e && n(L), e && n(g), e && n(I), z = !1, x();
    }
  };
}
function le(l) {
  let t, p = (
    /*version*/
    l[9] + ""
  ), f;
  return {
    c() {
      t = c("option"), f = h(p), t.__value = /*version*/
      l[9], t.value = t.__value;
    },
    m(_, d) {
      o(_, t, d), a(t, f);
    },
    p: C,
    d(_) {
      _ && n(t);
    }
  };
}
function Me(l) {
  let t;
  return {
    c() {
      t = c("p"), t.textContent = "Loading versions...";
    },
    m(p, f) {
      o(p, t, f);
    },
    p: C,
    d(p) {
      p && n(t);
    }
  };
}
function ye(l) {
  let t, p, f, _, d, v, s = {
    ctx: l,
    current: null,
    token: null,
    hasCatch: !0,
    pending: Me,
    then: ke,
    catch: Ve,
    value: 4,
    error: 12
  };
  return re(
    /*gameVersions*/
    l[4],
    s
  ), {
    c() {
      s.block.c(), t = k(), p = c("hr"), f = k(), _ = c("h2"), _.textContent = "Loom", d = k(), v = c("p"), v.innerHTML = "The recommended loom version is <strong>1.6-SNAPSHOT</strong>. This is usually defined near the top of your build.gradle file.";
    },
    m(i, m) {
      s.block.m(i, s.anchor = m), s.mount = () => t.parentNode, s.anchor = t, o(i, t, m), o(i, p, m), o(i, f, m), o(i, _, m), o(i, d, m), o(i, v, m);
    },
    p(i, [m]) {
      l = i, pe(s, l, m);
    },
    i: C,
    o: C,
    d(i) {
      s.block.d(i), s.token = null, s = null, i && n(t), i && n(p), i && n(f), i && n(_), i && n(d), i && n(v);
    }
  };
}
function Le(l, t, p) {
  let f, _, d, v, s = _e().then((u) => {
    p(0, f = u.find((M) => M.stable).version);
    const y = u[0];
    return u.filter((M) => M.stable || M == y).map((M) => M.version);
  });
  de().then((u) => (p(2, d = u.find((y) => y.stable).version), u));
  const i = be(), m = he();
  function T() {
    f = fe(this), p(0, f), p(4, s);
  }
  return l.$$.update = () => {
    l.$$.dirty & /*minecraftVersion*/
    1 && i.then((u) => {
      var y;
      return p(1, _ = ((y = u.find((M) => M.gameVersion == f)) == null ? void 0 : y.version) || "unknown");
    }), l.$$.dirty & /*minecraftVersion*/
    1 && m.then((u) => p(3, v = u.filter((y) => ve(y, f)).pop()));
  }, [
    f,
    _,
    d,
    v,
    s,
    T
  ];
}
class Ae extends oe {
  constructor(t) {
    super(), ne(this, t, Le, ye, ie, {});
  }
}
export {
  Ae as default
};
