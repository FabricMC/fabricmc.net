import { S as K, i as Q, s as R, h as W, a as T, e as _, c as p, u as X, n as H, d as u, q as Z, t as v, f as j, g as c, r as $, l as z, m as x, A as I, j as ee } from "./index.4deac2e0.js";
import { m as te } from "./minecraft.358dc340.js";
import { d as ne, b as oe, a as se, k as le, l as ie } from "./Api.3a6c4b44.js";
function B(o, e, s) {
  const r = o.slice();
  return r[10] = e[s], r;
}
function re(o) {
  let e, s, r = (
    /*error*/
    o[13].message + ""
  ), n, f, d;
  return {
    c() {
      e = _("p"), s = v("Error: "), n = v(r), f = T(), d = _("p"), d.innerHTML = `For support please visit one of our
        <a href="/discuss/">community discussion</a>
        groups.`, j(e, "color", "red");
    },
    m(l, i) {
      p(l, e, i), c(e, s), c(e, n), p(l, f, i), p(l, d, i);
    },
    p: H,
    d(l) {
      l && u(e), l && u(f), l && u(d);
    }
  };
}
function fe(o) {
  let e, s, r, n, f, d, l, i, a, F, V, L, M, y, S, C, q, P, O, U, w, Y, N, g, E, A = (
    /*gameVersions*/
    o[5]
  ), b = [];
  for (let t = 0; t < A.length; t += 1)
    b[t] = D(B(o, A, t));
  let k = !/*isUnobfuscated*/
  o[4] && J(o);
  return {
    c() {
      e = _("h2"), e.textContent = "Latest Versions", s = T(), r = _("p"), r.innerHTML = "Select a Minecraft version to get the recommended versions of Fabric Loader, Yarn, and Fabric API for your <code>gradle.properties</code> file.", n = T(), f = _("p"), d = v(`Minecraft Version:
        `), l = _("select");
      for (let t = 0; t < b.length; t += 1)
        b[t].c();
      i = T(), a = _("div"), F = _("pre"), V = _("code"), L = v(`
minecraft_version=`), M = v(
        /*minecraftVersion*/
        o[0]
      ), y = v(`
`), k && k.c(), S = v("loader_version="), C = v(
        /*loaderVersion*/
        o[2]
      ), q = v(`
loom_version=1.14-SNAPSHOT

# Fabric API
fabric_api_version=`), P = v(
        /*apiVersion*/
        o[3]
      ), O = v(`
        `), U = T(), w = _("p"), w.innerHTML = "<strong>Important Note:</strong> In some cases, such as snapshots or special releases, the <code>fabric-api</code> version might not align perfectly with your Minecraft version.", Y = T(), N = _("p"), N.innerHTML = 'If you encounter issues, double-check the latest release of Fabric API on <a href="https://modrinth.com/mod/fabric-api">Modrinth</a> or <a href="https://minecraft.curseforge.com/projects/fabric/files">CurseForge</a>.', j(l, "min-width", "200px"), /*minecraftVersion*/
      o[0] === void 0 && $(() => (
        /*select_change_handler*/
        o[6].call(l)
      )), j(a, "margin-bottom", "15px");
    },
    m(t, h) {
      p(t, e, h), p(t, s, h), p(t, r, h), p(t, n, h), p(t, f, h), c(f, d), c(f, l);
      for (let m = 0; m < b.length; m += 1)
        b[m] && b[m].m(l, null);
      z(
        l,
        /*minecraftVersion*/
        o[0],
        !0
      ), p(t, i, h), p(t, a, h), c(a, F), c(F, V), c(V, L), c(V, M), c(V, y), k && k.m(V, null), c(V, S), c(V, C), c(V, q), c(V, P), c(V, O), c(a, U), c(a, w), c(a, Y), c(a, N), g || (E = x(
        l,
        "change",
        /*select_change_handler*/
        o[6]
      ), g = !0);
    },
    p(t, h) {
      if (h & /*gameVersions*/
      32) {
        A = /*gameVersions*/
        t[5];
        let m;
        for (m = 0; m < A.length; m += 1) {
          const G = B(t, A, m);
          b[m] ? b[m].p(G, h) : (b[m] = D(G), b[m].c(), b[m].m(l, null));
        }
        for (; m < b.length; m += 1)
          b[m].d(1);
        b.length = A.length;
      }
      h & /*minecraftVersion, gameVersions*/
      33 && z(
        l,
        /*minecraftVersion*/
        t[0]
      ), h & /*minecraftVersion*/
      1 && I(
        M,
        /*minecraftVersion*/
        t[0]
      ), /*isUnobfuscated*/
      t[4] ? k && (k.d(1), k = null) : k ? k.p(t, h) : (k = J(t), k.c(), k.m(V, S)), h & /*loaderVersion*/
      4 && I(
        C,
        /*loaderVersion*/
        t[2]
      ), h & /*apiVersion*/
      8 && I(
        P,
        /*apiVersion*/
        t[3]
      );
    },
    d(t) {
      t && u(e), t && u(s), t && u(r), t && u(n), t && u(f), ee(b, t), t && u(i), t && u(a), k && k.d(), g = !1, E();
    }
  };
}
function D(o) {
  let e, s = (
    /*version*/
    o[10] + ""
  ), r;
  return {
    c() {
      e = _("option"), r = v(s), e.__value = /*version*/
      o[10], e.value = e.__value;
    },
    m(n, f) {
      p(n, e, f), c(e, r);
    },
    p: H,
    d(n) {
      n && u(e);
    }
  };
}
function J(o) {
  let e, s, r;
  return {
    c() {
      e = v("yarn_mappings="), s = v(
        /*yarnVersion*/
        o[1]
      ), r = v(`
`);
    },
    m(n, f) {
      p(n, e, f), p(n, s, f), p(n, r, f);
    },
    p(n, f) {
      f & /*yarnVersion*/
      2 && I(
        s,
        /*yarnVersion*/
        n[1]
      );
    },
    d(n) {
      n && u(e), n && u(s), n && u(r);
    }
  };
}
function ae(o) {
  let e;
  return {
    c() {
      e = _("p"), e.textContent = "Loading versions...";
    },
    m(s, r) {
      p(s, e, r);
    },
    p: H,
    d(s) {
      s && u(e);
    }
  };
}
function pe(o) {
  let e, s, r, n, f, d, l = {
    ctx: o,
    current: null,
    token: null,
    hasCatch: !0,
    pending: ae,
    then: fe,
    catch: re,
    value: 5,
    error: 13
  };
  return W(
    /*gameVersions*/
    o[5],
    l
  ), {
    c() {
      l.block.c(), e = T(), s = _("hr"), r = T(), n = _("h2"), n.textContent = "Loom", f = T(), d = _("p"), d.innerHTML = "The recommended loom version is <strong>1.14-SNAPSHOT</strong>. This is usually defined near the top of your build.gradle file.";
    },
    m(i, a) {
      l.block.m(i, l.anchor = a), l.mount = () => e.parentNode, l.anchor = e, p(i, e, a), p(i, s, a), p(i, r, a), p(i, n, a), p(i, f, a), p(i, d, a);
    },
    p(i, [a]) {
      o = i, X(l, o, a);
    },
    i: H,
    o: H,
    d(i) {
      l.block.d(i), l.token = null, l = null, i && u(e), i && u(s), i && u(r), i && u(n), i && u(f), i && u(d);
    }
  };
}
function ue(o, e, s) {
  let r, n, f, d, l, i = ne().then((L) => {
    s(0, n = L.find((y) => y.stable).version);
    const M = L[0];
    return L.filter((y) => y.stable || y == M).map((y) => y.version);
  });
  oe().then((L) => (s(2, d = L.find((M) => M.stable).version), L));
  const a = se(), F = le();
  function V() {
    n = Z(this), s(0, n), s(5, i);
  }
  return o.$$.update = () => {
    o.$$.dirty & /*minecraftVersion*/
    1 && a.then((L) => {
      var M;
      return s(1, f = ((M = L.find((y) => y.gameVersion == n)) == null ? void 0 : M.version) || "unknown");
    }), o.$$.dirty & /*minecraftVersion*/
    1 && F.then((L) => s(3, l = L.filter((M) => ie(M, n)).pop())), o.$$.dirty & /*minecraftVersion*/
    1 && s(4, r = te(n || "1.99"));
  }, [
    n,
    f,
    d,
    l,
    r,
    i,
    V
  ];
}
class de extends K {
  constructor(e) {
    super(), Q(this, e, ue, pe, R, {});
  }
}
export {
  de as default
};
