import { S as U, i as W, s as X, h as Z, a as g, e as b, c as p, u as $, n as C, d as f, f as x, t as _, g as P, j as u, m as ee, o as te, p as K, q as se, k as T, l as ne } from "./index.61dc58cf.js";
import { d as le, b as ie, a as oe, k as re, l as ae } from "./Api.f22ea594.js";
function Q(l, t, i) {
  const s = l.slice();
  return s[9] = t[i], s;
}
function pe(l) {
  let t, i, s = (
    /*error*/
    l[12].message + ""
  ), c, o, r;
  return {
    c() {
      t = b("p"), i = _("Error: "), c = _(s), o = g(), r = b("p"), r.innerHTML = `For support please visit one of our
        <a href="/discuss">community discussion</a>
        groups.`, P(t, "color", "red");
    },
    m(n, V) {
      p(n, t, V), u(t, i), u(t, c), p(n, o, V), p(n, r, V);
    },
    p: C,
    d(n) {
      n && f(t), n && f(o), n && f(r);
    }
  };
}
function fe(l) {
  let t, i, s, c, o, r, n, V, M, L, h, k, v, Y, F, z, N, H, j, S, q, y, B, E, D, G, A, O, I, w = (
    /*gameVersions*/
    l[4]
  ), d = [];
  for (let e = 0; e < w.length; e += 1)
    d[e] = R(Q(l, w, e));
  return {
    c() {
      t = b("p"), i = _(`Minecraft Version:
        `), s = b("select");
      for (let e = 0; e < d.length; e += 1)
        d[e].c();
      c = g(), o = b("div"), r = b("pre"), n = b("code"), V = _(`
minecraft_version=`), M = _(
        /*minecraftVersion*/
        l[0]
      ), L = _(`
yarn_mappings=`), h = _(
        /*yarnVersion*/
        l[1]
      ), k = _(`
loader_version=`), v = _(
        /*loaderVersion*/
        l[2]
      ), Y = _(`

#Fabric api
fabric_version=`), F = _(
        /*apiVersion*/
        l[3]
      ), z = _(`
        `), N = g(), H = b("h4"), H.textContent = "Automatically update mappings", j = g(), S = b("p"), S.innerHTML = 'Mappings can be auto updated by using the following command. See the <a href="https://fabricmc.net/wiki/tutorial:migratemappings">wiki page</a> for more help.', q = g(), y = b("code"), B = _('gradlew migrateMappings --mappings "'), E = _(
        /*yarnVersion*/
        l[1]
      ), D = _('"'), G = g(), A = b("p"), A.innerHTML = 'Note: The fabric-api version may not be the correct version for the given Minecraft version in some situations. Check the <a href="https://minecraft.curseforge.com/projects/fabric/files">CurseForge</a> page if you run into issues.', P(s, "min-width", "200px"), /*minecraftVersion*/
      l[0] === void 0 && ee(() => (
        /*select_change_handler*/
        l[5].call(s)
      )), P(o, "margin-bottom", "15px"), te(y, "class", "copy-code svelte-sbpww1");
    },
    m(e, a) {
      p(e, t, a), u(t, i), u(t, s);
      for (let m = 0; m < d.length; m += 1)
        d[m] && d[m].m(s, null);
      K(
        s,
        /*minecraftVersion*/
        l[0],
        !0
      ), p(e, c, a), p(e, o, a), u(o, r), u(r, n), u(n, V), u(n, M), u(n, L), u(n, h), u(n, k), u(n, v), u(n, Y), u(n, F), u(n, z), p(e, N, a), p(e, H, a), p(e, j, a), p(e, S, a), p(e, q, a), p(e, y, a), u(y, B), u(y, E), u(y, D), p(e, G, a), p(e, A, a), O || (I = se(
        s,
        "change",
        /*select_change_handler*/
        l[5]
      ), O = !0);
    },
    p(e, a) {
      if (a & /*gameVersions*/
      16) {
        w = /*gameVersions*/
        e[4];
        let m;
        for (m = 0; m < w.length; m += 1) {
          const J = Q(e, w, m);
          d[m] ? d[m].p(J, a) : (d[m] = R(J), d[m].c(), d[m].m(s, null));
        }
        for (; m < d.length; m += 1)
          d[m].d(1);
        d.length = w.length;
      }
      a & /*minecraftVersion, gameVersions*/
      17 && K(
        s,
        /*minecraftVersion*/
        e[0]
      ), a & /*minecraftVersion*/
      1 && T(
        M,
        /*minecraftVersion*/
        e[0]
      ), a & /*yarnVersion*/
      2 && T(
        h,
        /*yarnVersion*/
        e[1]
      ), a & /*loaderVersion*/
      4 && T(
        v,
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
      e && f(t), ne(d, e), e && f(c), e && f(o), e && f(N), e && f(H), e && f(j), e && f(S), e && f(q), e && f(y), e && f(G), e && f(A), O = !1, I();
    }
  };
}
function R(l) {
  let t, i = (
    /*version*/
    l[9] + ""
  ), s;
  return {
    c() {
      t = b("option"), s = _(i), t.__value = /*version*/
      l[9], t.value = t.__value;
    },
    m(c, o) {
      p(c, t, o), u(t, s);
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
    m(i, s) {
      p(i, t, s);
    },
    p: C,
    d(i) {
      i && f(t);
    }
  };
}
function ce(l) {
  let t, i, s, c, o = {
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
      o.block.c(), t = g(), i = b("h4"), i.textContent = "Loom", s = g(), c = b("p"), c.innerHTML = "The recommended loom version is <strong>1.4-SNAPSHOT</strong>. This is usually defined near the top of your build.gradle file.";
    },
    m(r, n) {
      o.block.m(r, o.anchor = n), o.mount = () => t.parentNode, o.anchor = t, p(r, t, n), p(r, i, n), p(r, s, n), p(r, c, n);
    },
    p(r, [n]) {
      l = r, $(o, l, n);
    },
    i: C,
    o: C,
    d(r) {
      o.block.d(r), o.token = null, o = null, r && f(t), r && f(i), r && f(s), r && f(c);
    }
  };
}
function me(l, t, i) {
  let s, c, o, r, n = le().then((h) => {
    i(0, s = h.find((v) => v.stable).version);
    const k = h[0];
    return h.filter((v) => v.stable || v == k).map((v) => v.version);
  });
  ie().then((h) => (i(2, o = h.find((k) => k.stable).version), h));
  const V = oe(), M = re();
  function L() {
    s = x(this), i(0, s), i(4, n);
  }
  return l.$$.update = () => {
    l.$$.dirty & /*minecraftVersion*/
    1 && V.then((h) => {
      var k;
      return i(1, c = ((k = h.find((v) => v.gameVersion == s)) == null ? void 0 : k.version) || "unknown");
    }), l.$$.dirty & /*minecraftVersion*/
    1 && M.then((h) => i(3, r = h.filter((k) => ae(k, s)).pop()));
  }, [
    s,
    c,
    o,
    r,
    n,
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
