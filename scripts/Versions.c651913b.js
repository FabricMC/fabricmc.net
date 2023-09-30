import { S as U, i as W, s as X, h as Z, a as V, e as b, c as p, u as $, n as C, d as f, f as x, t as _, g as P, j as u, m as ee, o as te, p as K, q as ne, k as T, l as se } from "./index.61dc58cf.js";
import { d as le, b as ie, a as oe, k as re, l as ae } from "./Api.380e8059.js";
function Q(l, t, i) {
  const n = l.slice();
  return n[9] = t[i], n;
}
function pe(l) {
  let t, i, n = (
    /*error*/
    l[12].message + ""
  ), c, o, r;
  return {
    c() {
      t = b("p"), i = _("Error: "), c = _(n), o = V(), r = b("p"), r.innerHTML = `For support please visit one of our
        <a href="/discuss">community discussion</a>
        groups.`, P(t, "color", "red");
    },
    m(s, k) {
      p(s, t, k), u(t, i), u(t, c), p(s, o, k), p(s, r, k);
    },
    p: C,
    d(s) {
      s && f(t), s && f(o), s && f(r);
    }
  };
}
function fe(l) {
  let t, i, n, c, o, r, s, k, w, L, h, v, M, Y, F, z, N, H, j, S, q, g, B, E, D, G, A, O, I, y = (
    /*gameVersions*/
    l[4]
  ), d = [];
  for (let e = 0; e < y.length; e += 1)
    d[e] = R(Q(l, y, e));
  return {
    c() {
      t = b("p"), i = _(`Minecraft Version:
        `), n = b("select");
      for (let e = 0; e < d.length; e += 1)
        d[e].c();
      c = V(), o = b("div"), r = b("pre"), s = b("code"), k = _(`
minecraft_version=`), w = _(
        /*minecraftVersion*/
        l[0]
      ), L = _(`
yarn_mappings=`), h = _(
        /*yarnVersion*/
        l[1]
      ), v = _(`
loader_version=`), M = _(
        /*loaderVersion*/
        l[2]
      ), Y = _(`

#Fabric api
fabric_version=`), F = _(
        /*apiVersion*/
        l[3]
      ), z = _(`
        `), N = V(), H = b("h4"), H.textContent = "Automatically update mappings", j = V(), S = b("p"), S.innerHTML = 'Mappings can be auto updated by using the following command. See the <a href="https://fabricmc.net/wiki/tutorial:migratemappings">wiki page</a> for more help.', q = V(), g = b("code"), B = _('gradlew migrateMappings --mappings "'), E = _(
        /*yarnVersion*/
        l[1]
      ), D = _('"'), G = V(), A = b("p"), A.innerHTML = 'Note: The fabric-api version may not be the correct version for the given Minecraft version in some situations. Check the <a href="https://minecraft.curseforge.com/projects/fabric/files">CurseForge</a> page if you run into issues.', P(n, "min-width", "200px"), /*minecraftVersion*/
      l[0] === void 0 && ee(() => (
        /*select_change_handler*/
        l[5].call(n)
      )), P(o, "margin-bottom", "15px"), te(g, "class", "copy-code svelte-sbpww1");
    },
    m(e, a) {
      p(e, t, a), u(t, i), u(t, n);
      for (let m = 0; m < d.length; m += 1)
        d[m] && d[m].m(n, null);
      K(
        n,
        /*minecraftVersion*/
        l[0],
        !0
      ), p(e, c, a), p(e, o, a), u(o, r), u(r, s), u(s, k), u(s, w), u(s, L), u(s, h), u(s, v), u(s, M), u(s, Y), u(s, F), u(s, z), p(e, N, a), p(e, H, a), p(e, j, a), p(e, S, a), p(e, q, a), p(e, g, a), u(g, B), u(g, E), u(g, D), p(e, G, a), p(e, A, a), O || (I = ne(
        n,
        "change",
        /*select_change_handler*/
        l[5]
      ), O = !0);
    },
    p(e, a) {
      if (a & /*gameVersions*/
      16) {
        y = /*gameVersions*/
        e[4];
        let m;
        for (m = 0; m < y.length; m += 1) {
          const J = Q(e, y, m);
          d[m] ? d[m].p(J, a) : (d[m] = R(J), d[m].c(), d[m].m(n, null));
        }
        for (; m < d.length; m += 1)
          d[m].d(1);
        d.length = y.length;
      }
      a & /*minecraftVersion, gameVersions*/
      17 && K(
        n,
        /*minecraftVersion*/
        e[0]
      ), a & /*minecraftVersion*/
      1 && T(
        w,
        /*minecraftVersion*/
        e[0]
      ), a & /*yarnVersion*/
      2 && T(
        h,
        /*yarnVersion*/
        e[1]
      ), a & /*loaderVersion*/
      4 && T(
        M,
        /*loaderVersion*/
        e[2]
      ), a & /*apiVersion*/
      8 && T(
        F,
        /*apiVersion*/
        e[3]
      ), a & /*yarnVersion*/
      2 && T(
        E,
        /*yarnVersion*/
        e[1]
      );
    },
    d(e) {
      e && f(t), se(d, e), e && f(c), e && f(o), e && f(N), e && f(H), e && f(j), e && f(S), e && f(q), e && f(g), e && f(G), e && f(A), O = !1, I();
    }
  };
}
function R(l) {
  let t, i = (
    /*version*/
    l[9] + ""
  ), n;
  return {
    c() {
      t = b("option"), n = _(i), t.__value = /*version*/
      l[9], t.value = t.__value;
    },
    m(c, o) {
      p(c, t, o), u(t, n);
    },
    p: C,
    d(c) {
      c && f(t);
    }
  };
}
function ue(l) {
  let t;
  return {
    c() {
      t = b("p"), t.textContent = "Loading versions..";
    },
    m(i, n) {
      p(i, t, n);
    },
    p: C,
    d(i) {
      i && f(t);
    }
  };
}
function ce(l) {
  let t, i, n, c, o = {
    ctx: l,
    current: null,
    token: null,
    hasCatch: !0,
    pending: ue,
    then: fe,
    catch: pe,
    value: 4,
    error: 12
  };
  return Z(
    /*gameVersions*/
    l[4],
    o
  ), {
    c() {
      o.block.c(), t = V(), i = b("h4"), i.textContent = "Loom", n = V(), c = b("p"), c.innerHTML = "The recommended loom version is <strong>1.4-SNAPSHOT</strong>. This is usually defined near the top of your build.gradle file.";
    },
    m(r, s) {
      o.block.m(r, o.anchor = s), o.mount = () => t.parentNode, o.anchor = t, p(r, t, s), p(r, i, s), p(r, n, s), p(r, c, s);
    },
    p(r, [s]) {
      l = r, $(o, l, s);
    },
    i: C,
    o: C,
    d(r) {
      o.block.d(r), o.token = null, o = null, r && f(t), r && f(i), r && f(n), r && f(c);
    }
  };
}
function me(l, t, i) {
  let n, c, o, r, s = le().then((h) => (i(0, n = h.find((v) => v.stable).version), h.map((v) => v.version)));
  ie().then((h) => (i(2, o = h.find((v) => v.stable).version), h));
  const k = oe(), w = re();
  function L() {
    n = x(this), i(0, n), i(4, s);
  }
  return l.$$.update = () => {
    l.$$.dirty & /*minecraftVersion*/
    1 && k.then((h) => {
      var v;
      return i(1, c = ((v = h.find((M) => M.gameVersion == n)) == null ? void 0 : v.version) || "unknown");
    }), l.$$.dirty & /*minecraftVersion*/
    1 && w.then((h) => i(3, r = h.filter((v) => ae(v, n)).pop()));
  }, [
    n,
    c,
    o,
    r,
    s,
    L
  ];
}
class be extends U {
  constructor(t) {
    super(), W(this, t, me, ce, X, {});
  }
}
export {
  be as default
};
