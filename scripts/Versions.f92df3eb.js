import { S as K, i as Q, s as R, h as U, a as M, e as _, c as u, u as W, n as A, d as m, q as X, t as V, f as w, g as f, r as Z, l as B, m as $, A as g, j as x } from "./index.4deac2e0.js";
import { d as ee, b as te, a as ne, k as oe, l as se } from "./Api.322fe952.js";
function D(o, e, l) {
  const r = o.slice();
  return r[9] = e[l], r;
}
function le(o) {
  let e, l, r = (
    /*error*/
    o[12].message + ""
  ), p, c, h;
  return {
    c() {
      e = _("p"), l = V("Error: "), p = V(r), c = M(), h = _("p"), h.innerHTML = `For support please visit one of our
        <a href="/discuss/">community discussion</a>
        groups.`, w(e, "color", "red");
    },
    m(n, s) {
      u(n, e, s), f(e, l), f(e, p), u(n, c, s), u(n, h, s);
    },
    p: A,
    d(n) {
      n && m(e), n && m(c), n && m(h);
    }
  };
}
function re(o) {
  let e, l, r, p, c, h, n, s, a, y, i, L, k, N, F, j, H, q, S, O, Y, C, E, I, P, G, T = (
    /*gameVersions*/
    o[4]
  ), b = [];
  for (let t = 0; t < T.length; t += 1)
    b[t] = J(D(o, T, t));
  return {
    c() {
      e = _("h2"), e.textContent = "Latest Versions", l = M(), r = _("p"), r.innerHTML = "Select a Minecraft version to get the recommended versions of Fabric Loader, Yarn, and Fabric API for your <code>gradle.properties</code> file.", p = M(), c = _("p"), h = V(`Minecraft Version:
        `), n = _("select");
      for (let t = 0; t < b.length; t += 1)
        b[t].c();
      s = M(), a = _("div"), y = _("pre"), i = _("code"), L = V(`
minecraft_version=`), k = V(
        /*minecraftVersion*/
        o[0]
      ), N = V(`
yarn_mappings=`), F = V(
        /*yarnVersion*/
        o[1]
      ), j = V(`
loader_version=`), H = V(
        /*loaderVersion*/
        o[2]
      ), q = V(`
loom_version=1.14-SNAPSHOT

# Fabric API
fabric_version=`), S = V(
        /*apiVersion*/
        o[3]
      ), O = V(`
        `), Y = M(), C = _("p"), C.innerHTML = "<strong>Important Note:</strong> In some cases, such as snapshots or special releases, the <code>fabric-api</code> version might not align perfectly with your Minecraft version.", E = M(), I = _("p"), I.innerHTML = 'If you encounter issues, double-check the latest release of Fabric API on <a href="https://modrinth.com/mod/fabric-api">Modrinth</a> or <a href="https://minecraft.curseforge.com/projects/fabric/files">CurseForge</a>.', w(n, "min-width", "200px"), /*minecraftVersion*/
      o[0] === void 0 && Z(() => (
        /*select_change_handler*/
        o[5].call(n)
      )), w(a, "margin-bottom", "15px");
    },
    m(t, v) {
      u(t, e, v), u(t, l, v), u(t, r, v), u(t, p, v), u(t, c, v), f(c, h), f(c, n);
      for (let d = 0; d < b.length; d += 1)
        b[d] && b[d].m(n, null);
      B(
        n,
        /*minecraftVersion*/
        o[0],
        !0
      ), u(t, s, v), u(t, a, v), f(a, y), f(y, i), f(i, L), f(i, k), f(i, N), f(i, F), f(i, j), f(i, H), f(i, q), f(i, S), f(i, O), f(a, Y), f(a, C), f(a, E), f(a, I), P || (G = $(
        n,
        "change",
        /*select_change_handler*/
        o[5]
      ), P = !0);
    },
    p(t, v) {
      if (v & /*gameVersions*/
      16) {
        T = /*gameVersions*/
        t[4];
        let d;
        for (d = 0; d < T.length; d += 1) {
          const z = D(t, T, d);
          b[d] ? b[d].p(z, v) : (b[d] = J(z), b[d].c(), b[d].m(n, null));
        }
        for (; d < b.length; d += 1)
          b[d].d(1);
        b.length = T.length;
      }
      v & /*minecraftVersion, gameVersions*/
      17 && B(
        n,
        /*minecraftVersion*/
        t[0]
      ), v & /*minecraftVersion*/
      1 && g(
        k,
        /*minecraftVersion*/
        t[0]
      ), v & /*yarnVersion*/
      2 && g(
        F,
        /*yarnVersion*/
        t[1]
      ), v & /*loaderVersion*/
      4 && g(
        H,
        /*loaderVersion*/
        t[2]
      ), v & /*apiVersion*/
      8 && g(
        S,
        /*apiVersion*/
        t[3]
      );
    },
    d(t) {
      t && m(e), t && m(l), t && m(r), t && m(p), t && m(c), x(b, t), t && m(s), t && m(a), P = !1, G();
    }
  };
}
function J(o) {
  let e, l = (
    /*version*/
    o[9] + ""
  ), r;
  return {
    c() {
      e = _("option"), r = V(l), e.__value = /*version*/
      o[9], e.value = e.__value;
    },
    m(p, c) {
      u(p, e, c), f(e, r);
    },
    p: A,
    d(p) {
      p && m(e);
    }
  };
}
function ie(o) {
  let e;
  return {
    c() {
      e = _("p"), e.textContent = "Loading versions...";
    },
    m(l, r) {
      u(l, e, r);
    },
    p: A,
    d(l) {
      l && m(e);
    }
  };
}
function ae(o) {
  let e, l, r, p, c, h, n = {
    ctx: o,
    current: null,
    token: null,
    hasCatch: !0,
    pending: ie,
    then: re,
    catch: le,
    value: 4,
    error: 12
  };
  return U(
    /*gameVersions*/
    o[4],
    n
  ), {
    c() {
      n.block.c(), e = M(), l = _("hr"), r = M(), p = _("h2"), p.textContent = "Loom", c = M(), h = _("p"), h.innerHTML = "The recommended loom version is <strong>1.14-SNAPSHOT</strong>. This is usually defined near the top of your build.gradle file.";
    },
    m(s, a) {
      n.block.m(s, n.anchor = a), n.mount = () => e.parentNode, n.anchor = e, u(s, e, a), u(s, l, a), u(s, r, a), u(s, p, a), u(s, c, a), u(s, h, a);
    },
    p(s, [a]) {
      o = s, W(n, o, a);
    },
    i: A,
    o: A,
    d(s) {
      n.block.d(s), n.token = null, n = null, s && m(e), s && m(l), s && m(r), s && m(p), s && m(c), s && m(h);
    }
  };
}
function fe(o, e, l) {
  let r, p, c, h, n = ee().then((i) => {
    l(0, r = i.find((k) => k.stable).version);
    const L = i[0];
    return i.filter((k) => k.stable || k == L).map((k) => k.version);
  });
  te().then((i) => (l(2, c = i.find((L) => L.stable).version), i));
  const s = ne(), a = oe();
  function y() {
    r = X(this), l(0, r), l(4, n);
  }
  return o.$$.update = () => {
    o.$$.dirty & /*minecraftVersion*/
    1 && s.then((i) => {
      var L;
      return l(1, p = ((L = i.find((k) => k.gameVersion == r)) == null ? void 0 : L.version) || "unknown");
    }), o.$$.dirty & /*minecraftVersion*/
    1 && a.then((i) => l(3, h = i.filter((L) => se(L, r)).pop()));
  }, [
    r,
    p,
    c,
    h,
    n,
    y
  ];
}
class ue extends K {
  constructor(e) {
    super(), Q(this, e, fe, ae, R, {});
  }
}
export {
  ue as default
};
