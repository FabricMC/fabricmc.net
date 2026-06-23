import { S as R, i as W, s as X, h as Z, a as T, e as b, c as a, u as g, n as I, d as p, q as $, t as _, f as O, g as m, r as x, l as D, m as ee, A as C, j as te } from "./index.4deac2e0.js";
import { c as le } from "./minecraft.13f4fc12.js";
import { d as ne, b as oe, a as ie, k as se, l as re } from "./Api.fd2c0b6d.js";
function J(o, e, l) {
  const i = o.slice();
  return i[10] = e[l], i;
}
function fe(o) {
  let e, l, i = (
    /*error*/
    o[13].message + ""
  ), t, r, h;
  return {
    c() {
      e = b("p"), l = _("Error: "), t = _(i), r = T(), h = b("p"), h.innerHTML = `For support please visit one of our
        <a href="/discuss/">community discussion</a>
        groups.`, O(e, "color", "red");
    },
    m(s, f) {
      a(s, e, f), m(e, l), m(e, t), a(s, r, f), a(s, h, f);
    },
    p: I,
    d(s) {
      s && p(e), s && p(r), s && p(h);
    }
  };
}
function ae(o) {
  let e, l, i, t, r, h, s, f, c, H, v, y, L, M, P, N, U, Y, w, E, j, q, G, F = (
    /*gameVersions*/
    o[5]
  ), k = [];
  for (let n = 0; n < F.length; n += 1)
    k[n] = K(J(o, F, n));
  let V = !/*isUnobfuscated*/
  o[4] && Q(o);
  function z(n, d) {
    return (
      /*apiVersion*/
      n[3] ? ce : pe
    );
  }
  let S = z(o), A = S(o);
  return {
    c() {
      e = b("h2"), e.textContent = "Latest Versions", l = T(), i = b("p"), i.innerHTML = "Select a Minecraft version to get the recommended versions of Fabric Loader, Yarn, and Fabric API for your <code>gradle.properties</code> file.", t = T(), r = b("p"), h = _(`Minecraft Version:
        `), s = b("select");
      for (let n = 0; n < k.length; n += 1)
        k[n].c();
      f = T(), c = b("div"), H = b("pre"), v = b("code"), y = _("minecraft_version="), L = _(
        /*minecraftVersion*/
        o[0]
      ), M = _(`
`), V && V.c(), P = _("loader_version="), N = _(
        /*loaderVersion*/
        o[2]
      ), U = _(`
loom_version=1.17-SNAPSHOT

`), A.c(), Y = T(), w = b("p"), w.innerHTML = "<strong>Important Note:</strong> In some cases, such as snapshots or special releases, the <code>fabric-api</code> version might not align perfectly with your Minecraft version.", E = T(), j = b("p"), j.innerHTML = 'If you encounter issues, double-check the latest release of Fabric API on <a href="https://modrinth.com/mod/fabric-api">Modrinth</a> or <a href="https://minecraft.curseforge.com/projects/fabric/files">CurseForge</a>.', O(s, "min-width", "200px"), /*minecraftVersion*/
      o[0] === void 0 && x(() => (
        /*select_change_handler*/
        o[6].call(s)
      )), O(c, "margin-bottom", "15px");
    },
    m(n, d) {
      a(n, e, d), a(n, l, d), a(n, i, d), a(n, t, d), a(n, r, d), m(r, h), m(r, s);
      for (let u = 0; u < k.length; u += 1)
        k[u] && k[u].m(s, null);
      D(
        s,
        /*minecraftVersion*/
        o[0],
        !0
      ), a(n, f, d), a(n, c, d), m(c, H), m(H, v), m(v, y), m(v, L), m(v, M), V && V.m(v, null), m(v, P), m(v, N), m(v, U), A.m(v, null), m(c, Y), m(c, w), m(c, E), m(c, j), q || (G = ee(
        s,
        "change",
        /*select_change_handler*/
        o[6]
      ), q = !0);
    },
    p(n, d) {
      if (d & /*gameVersions*/
      32) {
        F = /*gameVersions*/
        n[5];
        let u;
        for (u = 0; u < F.length; u += 1) {
          const B = J(n, F, u);
          k[u] ? k[u].p(B, d) : (k[u] = K(B), k[u].c(), k[u].m(s, null));
        }
        for (; u < k.length; u += 1)
          k[u].d(1);
        k.length = F.length;
      }
      d & /*minecraftVersion, gameVersions*/
      33 && D(
        s,
        /*minecraftVersion*/
        n[0]
      ), d & /*minecraftVersion*/
      1 && C(
        L,
        /*minecraftVersion*/
        n[0]
      ), /*isUnobfuscated*/
      n[4] ? V && (V.d(1), V = null) : V ? V.p(n, d) : (V = Q(n), V.c(), V.m(v, P)), d & /*loaderVersion*/
      4 && C(
        N,
        /*loaderVersion*/
        n[2]
      ), S === (S = z(n)) && A ? A.p(n, d) : (A.d(1), A = S(n), A && (A.c(), A.m(v, null)));
    },
    d(n) {
      n && p(e), n && p(l), n && p(i), n && p(t), n && p(r), te(k, n), n && p(f), n && p(c), V && V.d(), A.d(), q = !1, G();
    }
  };
}
function K(o) {
  let e, l = (
    /*version*/
    o[10] + ""
  ), i;
  return {
    c() {
      e = b("option"), i = _(l), e.__value = /*version*/
      o[10], e.value = e.__value;
    },
    m(t, r) {
      a(t, e, r), m(e, i);
    },
    p: I,
    d(t) {
      t && p(e);
    }
  };
}
function Q(o) {
  let e, l, i;
  return {
    c() {
      e = _("yarn_mappings="), l = _(
        /*yarnVersion*/
        o[1]
      ), i = _(`
`);
    },
    m(t, r) {
      a(t, e, r), a(t, l, r), a(t, i, r);
    },
    p(t, r) {
      r & /*yarnVersion*/
      2 && C(
        l,
        /*yarnVersion*/
        t[1]
      );
    },
    d(t) {
      t && p(e), t && p(l), t && p(i);
    }
  };
}
function pe(o) {
  let e;
  return {
    c() {
      e = _(`# No Fabric API version available
# fabric_api_version=
`);
    },
    m(l, i) {
      a(l, e, i);
    },
    p: I,
    d(l) {
      l && p(e);
    }
  };
}
function ce(o) {
  let e, l, i;
  return {
    c() {
      e = _(`# Fabric API
fabric_api_version=`), l = _(
        /*apiVersion*/
        o[3]
      ), i = _(`
`);
    },
    m(t, r) {
      a(t, e, r), a(t, l, r), a(t, i, r);
    },
    p(t, r) {
      r & /*apiVersion*/
      8 && C(
        l,
        /*apiVersion*/
        t[3]
      );
    },
    d(t) {
      t && p(e), t && p(l), t && p(i);
    }
  };
}
function ue(o) {
  let e;
  return {
    c() {
      e = b("p"), e.textContent = "Loading versions...";
    },
    m(l, i) {
      a(l, e, i);
    },
    p: I,
    d(l) {
      l && p(e);
    }
  };
}
function me(o) {
  let e, l, i, t, r, h, s = {
    ctx: o,
    current: null,
    token: null,
    hasCatch: !0,
    pending: ue,
    then: ae,
    catch: fe,
    value: 5,
    error: 13
  };
  return Z(
    /*gameVersions*/
    o[5],
    s
  ), {
    c() {
      s.block.c(), e = T(), l = b("hr"), i = T(), t = b("h2"), t.textContent = "Loom", r = T(), h = b("p"), h.innerHTML = "The recommended loom version is <strong>1.17-SNAPSHOT</strong>. This is usually defined near the top of your build.gradle file.";
    },
    m(f, c) {
      s.block.m(f, s.anchor = c), s.mount = () => e.parentNode, s.anchor = e, a(f, e, c), a(f, l, c), a(f, i, c), a(f, t, c), a(f, r, c), a(f, h, c);
    },
    p(f, [c]) {
      o = f, g(s, o, c);
    },
    i: I,
    o: I,
    d(f) {
      s.block.d(f), s.token = null, s = null, f && p(e), f && p(l), f && p(i), f && p(t), f && p(r), f && p(h);
    }
  };
}
function _e(o, e, l) {
  let i, t, r, h, s, f = ne().then((y) => {
    l(0, t = y.find((M) => M.stable).version);
    const L = y[0];
    return y.filter((M) => M.stable || M == L).map((M) => M.version);
  });
  oe().then((y) => (l(2, h = y.find((L) => L.stable).version), y));
  const c = ie(), H = se();
  function v() {
    t = $(this), l(0, t), l(5, f);
  }
  return o.$$.update = () => {
    o.$$.dirty & /*minecraftVersion*/
    1 && c.then((y) => {
      var L;
      return l(1, r = ((L = y.find((M) => M.gameVersion == t)) == null ? void 0 : L.version) || "unknown");
    }), o.$$.dirty & /*minecraftVersion*/
    1 && H.then((y) => l(3, s = y.filter((L) => re(L, t)).pop())), o.$$.dirty & /*minecraftVersion*/
    1 && l(4, i = le(t || "1.99"));
  }, [
    t,
    r,
    h,
    s,
    i,
    f,
    v
  ];
}
class ke extends R {
  constructor(e) {
    super(), W(this, e, _e, me, X, {});
  }
}
export {
  ke as default
};
