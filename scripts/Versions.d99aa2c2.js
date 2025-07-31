import { S as le, i as ne, s as ie, h as re, a as k, e as c, c as l, u as pe, n as C, d as n, q as fe, t as h, f as B, g as a, r as ae, k as ue, l as te, m as me, A, j as ce } from "./index.4deac2e0.js";
import { d as _e, b as de, a as be, k as he, l as ve } from "./Api.5986d176.js";
function se(o, t, p) {
  const f = o.slice();
  return f[9] = t[p], f;
}
function Ve(o) {
  let t, p, f = (
    /*error*/
    o[12].message + ""
  ), _, d, v;
  return {
    c() {
      t = c("p"), p = h("Error: "), _ = h(f), d = k(), v = c("p"), v.innerHTML = `For support please visit one of our
        <a href="/discuss/">community discussion</a>
        groups.`, B(t, "color", "red");
    },
    m(s, i) {
      l(s, t, i), a(t, p), a(t, _), l(s, d, i), l(s, v, i);
    },
    p: C,
    d(s) {
      s && n(t), s && n(d), s && n(v);
    }
  };
}
function ke(o) {
  let t, p, f, _, d, v, s, i, m, T, u, y, M, D, I, J, P, Q, N, R, W, Y, X, j, q, O, U, F, E, H, G, L, Z, K, $, g, S, z, x, w = (
    /*gameVersions*/
    o[4]
  ), V = [];
  for (let e = 0; e < w.length; e += 1)
    V[e] = oe(se(o, w, e));
  return {
    c() {
      t = c("h2"), t.textContent = "Latest Versions", p = k(), f = c("p"), f.innerHTML = "Select a Minecraft version to get the recommended versions of Fabric Loader, Yarn, and Fabric API for your <code>gradle.properties</code> file.", _ = k(), d = c("p"), v = h(`Minecraft Version:
        `), s = c("select");
      for (let e = 0; e < V.length; e += 1)
        V[e].c();
      i = k(), m = c("div"), T = c("pre"), u = c("code"), y = h(`
minecraft_version=`), M = h(
        /*minecraftVersion*/
        o[0]
      ), D = h(`
yarn_mappings=`), I = h(
        /*yarnVersion*/
        o[1]
      ), J = h(`
loader_version=`), P = h(
        /*loaderVersion*/
        o[2]
      ), Q = h(`
loom_version=1.11-SNAPSHOT

# Fabric API
fabric_version=`), N = h(
        /*apiVersion*/
        o[3]
      ), R = h(`
        `), W = k(), Y = c("p"), Y.innerHTML = "<strong>Important Note:</strong> In some cases, such as snapshots or special releases, the <code>fabric-api</code> version might not align perfectly with your Minecraft version.", X = k(), j = c("p"), j.innerHTML = 'If you encounter issues, double-check the latest release of Fabric API on <a href="https://modrinth.com/mod/fabric-api">Modrinth</a> or <a href="https://minecraft.curseforge.com/projects/fabric/files">CurseForge</a>.', q = k(), O = c("hr"), U = k(), F = c("h2"), F.textContent = "Automatically Update Mappings", E = k(), H = c("p"), H.textContent = "Keep your project up-to-date with the correct Yarn mappings using this automatic update command:", G = k(), L = c("code"), Z = h('gradlew migrateMappings --mappings "'), K = h(
        /*yarnVersion*/
        o[1]
      ), $ = h('"'), g = k(), S = c("p"), S.innerHTML = 'For more information on this command, you should refer to the <a href="https://fabricmc.net/wiki/tutorial:migratemappings">Updating Yarn Mappings</a> wiki page.', B(s, "min-width", "200px"), /*minecraftVersion*/
      o[0] === void 0 && ae(() => (
        /*select_change_handler*/
        o[5].call(s)
      )), B(m, "margin-bottom", "15px"), ue(L, "class", "copy-code svelte-sbpww1");
    },
    m(e, r) {
      l(e, t, r), l(e, p, r), l(e, f, r), l(e, _, r), l(e, d, r), a(d, v), a(d, s);
      for (let b = 0; b < V.length; b += 1)
        V[b] && V[b].m(s, null);
      te(
        s,
        /*minecraftVersion*/
        o[0],
        !0
      ), l(e, i, r), l(e, m, r), a(m, T), a(T, u), a(u, y), a(u, M), a(u, D), a(u, I), a(u, J), a(u, P), a(u, Q), a(u, N), a(u, R), a(m, W), a(m, Y), a(m, X), a(m, j), l(e, q, r), l(e, O, r), l(e, U, r), l(e, F, r), l(e, E, r), l(e, H, r), l(e, G, r), l(e, L, r), a(L, Z), a(L, K), a(L, $), l(e, g, r), l(e, S, r), z || (x = me(
        s,
        "change",
        /*select_change_handler*/
        o[5]
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
          V[b] ? V[b].p(ee, r) : (V[b] = oe(ee), V[b].c(), V[b].m(s, null));
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
        I,
        /*yarnVersion*/
        e[1]
      ), r & /*loaderVersion*/
      4 && A(
        P,
        /*loaderVersion*/
        e[2]
      ), r & /*apiVersion*/
      8 && A(
        N,
        /*apiVersion*/
        e[3]
      ), r & /*yarnVersion*/
      2 && A(
        K,
        /*yarnVersion*/
        e[1]
      );
    },
    d(e) {
      e && n(t), e && n(p), e && n(f), e && n(_), e && n(d), ce(V, e), e && n(i), e && n(m), e && n(q), e && n(O), e && n(U), e && n(F), e && n(E), e && n(H), e && n(G), e && n(L), e && n(g), e && n(S), z = !1, x();
    }
  };
}
function oe(o) {
  let t, p = (
    /*version*/
    o[9] + ""
  ), f;
  return {
    c() {
      t = c("option"), f = h(p), t.__value = /*version*/
      o[9], t.value = t.__value;
    },
    m(_, d) {
      l(_, t, d), a(t, f);
    },
    p: C,
    d(_) {
      _ && n(t);
    }
  };
}
function Me(o) {
  let t;
  return {
    c() {
      t = c("p"), t.textContent = "Loading versions...";
    },
    m(p, f) {
      l(p, t, f);
    },
    p: C,
    d(p) {
      p && n(t);
    }
  };
}
function ye(o) {
  let t, p, f, _, d, v, s = {
    ctx: o,
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
    o[4],
    s
  ), {
    c() {
      s.block.c(), t = k(), p = c("hr"), f = k(), _ = c("h2"), _.textContent = "Loom", d = k(), v = c("p"), v.innerHTML = "The recommended loom version is <strong>1.11-SNAPSHOT</strong>. This is usually defined near the top of your build.gradle file.";
    },
    m(i, m) {
      s.block.m(i, s.anchor = m), s.mount = () => t.parentNode, s.anchor = t, l(i, t, m), l(i, p, m), l(i, f, m), l(i, _, m), l(i, d, m), l(i, v, m);
    },
    p(i, [m]) {
      o = i, pe(s, o, m);
    },
    i: C,
    o: C,
    d(i) {
      s.block.d(i), s.token = null, s = null, i && n(t), i && n(p), i && n(f), i && n(_), i && n(d), i && n(v);
    }
  };
}
function Le(o, t, p) {
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
  return o.$$.update = () => {
    o.$$.dirty & /*minecraftVersion*/
    1 && i.then((u) => {
      var y;
      return p(1, _ = ((y = u.find((M) => M.gameVersion == f)) == null ? void 0 : y.version) || "unknown");
    }), o.$$.dirty & /*minecraftVersion*/
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
class Ae extends le {
  constructor(t) {
    super(), ne(this, t, Le, ye, ie, {});
  }
}
export {
  Ae as default
};
