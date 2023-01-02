import { S as R, i as U, s as X, h as Z, a as w, e as h, c as f, u as $, n as M, d as p, f as x, t as m, g as G, j as c, m as ee, o as te, p as J, q as se, k as F, l as le } from "./index.js";
import { d as ie, a as ne, k as oe } from "./Api.js";
function K(l, e, s) {
  const i = l.slice();
  return i[8] = e[s], i;
}
function re(l) {
  let e, s, i = l[11].message + "", a, r, o;
  return {
    c() {
      e = h("p"), s = m("Error: "), a = m(i), r = w(), o = h("p"), o.innerHTML = `For support please visit one of our
        <a href="/discuss">community discussion</a>
        groups.`, G(e, "color", "red");
    },
    m(n, k) {
      f(n, e, k), c(e, s), c(e, a), f(n, r, k), f(n, o, k);
    },
    p: M,
    d(n) {
      n && p(e), n && p(r), n && p(o);
    }
  };
}
function ae(l) {
  let e, s, i, a, r, o, n, k, g, T, v, b, C, O, A, P, N, L, j, H, q, W, Y, B, z, E, S, V, D, y = l[4], d = [];
  for (let t = 0; t < y.length; t += 1)
    d[t] = Q(K(l, y, t));
  return {
    c() {
      e = h("p"), s = m(`Minecraft Version:
        `), i = h("select");
      for (let t = 0; t < d.length; t += 1)
        d[t].c();
      a = w(), r = h("div"), o = h("pre"), n = h("code"), k = m(`
minecraft_version=`), g = m(l[0]), T = m(`
yarn_mappings=`), v = m(l[1]), b = m(`
loader_version=`), C = m(l[3]), O = m(`

#Fabric api
fabric_version=`), A = m(l[2]), P = m(`
        `), N = w(), L = h("h4"), L.textContent = "Automatically update mappings", j = w(), H = h("p"), H.innerHTML = 'Mappings can be auto updated by using the following command. See the <a href="https://fabricmc.net/wiki/tutorial:migratemappings">wiki page</a> for more help.', q = w(), W = h("code"), Y = m('gradlew migrateMappings --mappings "'), B = m(l[1]), z = m('"'), E = w(), S = h("p"), S.innerHTML = 'Note: The fabric-api version may not be the correct version for the given Minecraft version in some situations. Check the <a href="https://minecraft.curseforge.com/projects/fabric/files">CurseForge</a> page if you run into issues.', G(i, "min-width", "200px"), l[0] === void 0 && ee(() => l[5].call(i)), G(r, "margin-bottom", "15px"), te(W, "class", "copy-code svelte-sbpww1");
    },
    m(t, u) {
      f(t, e, u), c(e, s), c(e, i);
      for (let _ = 0; _ < d.length; _ += 1)
        d[_].m(i, null);
      J(i, l[0]), f(t, a, u), f(t, r, u), c(r, o), c(o, n), c(n, k), c(n, g), c(n, T), c(n, v), c(n, b), c(n, C), c(n, O), c(n, A), c(n, P), f(t, N, u), f(t, L, u), f(t, j, u), f(t, H, u), f(t, q, u), f(t, W, u), c(W, Y), c(W, B), c(W, z), f(t, E, u), f(t, S, u), V || (D = se(i, "change", l[5]), V = !0);
    },
    p(t, u) {
      if (u & 16) {
        y = t[4];
        let _;
        for (_ = 0; _ < y.length; _ += 1) {
          const I = K(t, y, _);
          d[_] ? d[_].p(I, u) : (d[_] = Q(I), d[_].c(), d[_].m(i, null));
        }
        for (; _ < d.length; _ += 1)
          d[_].d(1);
        d.length = y.length;
      }
      u & 17 && J(i, t[0]), u & 1 && F(g, t[0]), u & 2 && F(v, t[1]), u & 4 && F(A, t[2]), u & 2 && F(B, t[1]);
    },
    d(t) {
      t && p(e), le(d, t), t && p(a), t && p(r), t && p(N), t && p(L), t && p(j), t && p(H), t && p(q), t && p(W), t && p(E), t && p(S), V = !1, D();
    }
  };
}
function Q(l) {
  let e, s = l[8] + "", i;
  return {
    c() {
      e = h("option"), i = m(s), e.__value = l[8], e.value = e.__value;
    },
    m(a, r) {
      f(a, e, r), c(e, i);
    },
    p: M,
    d(a) {
      a && p(e);
    }
  };
}
function fe(l) {
  let e;
  return {
    c() {
      e = h("p"), e.textContent = "Loading versions..";
    },
    m(s, i) {
      f(s, e, i);
    },
    p: M,
    d(s) {
      s && p(e);
    }
  };
}
function pe(l) {
  let e, s, i, a, r = {
    ctx: l,
    current: null,
    token: null,
    hasCatch: !0,
    pending: fe,
    then: ae,
    catch: re,
    value: 4,
    error: 11
  };
  return Z(l[4], r), {
    c() {
      r.block.c(), e = w(), s = h("h4"), s.textContent = "Loom", i = w(), a = h("p"), a.innerHTML = "The recommended loom version is <strong>1.0-SNAPSHOT</strong>. This is usually defined near the top of your  build.gradle file.";
    },
    m(o, n) {
      r.block.m(o, r.anchor = n), r.mount = () => e.parentNode, r.anchor = e, f(o, e, n), f(o, s, n), f(o, i, n), f(o, a, n);
    },
    p(o, [n]) {
      l = o, $(r, l, n);
    },
    i: M,
    o: M,
    d(o) {
      r.block.d(o), r.token = null, r = null, o && p(e), o && p(s), o && p(i), o && p(a);
    }
  };
}
function ue(l, e) {
  if (!e)
    return !1;
  let s = e;
  return [
    "1.14",
    "1.15",
    "1.16",
    "1.17",
    "1.18",
    "1.19",
    "20w14infinite",
    "1.18_experimental"
  ].forEach((a) => {
    e.startsWith(a) && (s = a);
  }), e.startsWith("22w13oneblockatatime") ? s = "22w13oneblockatatime" : e.startsWith("22w") ? s = "1.19.3" : e.startsWith("1.18.2") ? s = "1.18.2" : e.startsWith("1.19.1") ? s = "1.19.1" : e.startsWith("1.19.2") ? s = "1.19.2" : e.startsWith("1.19.3") ? s = "1.19.3" : e.startsWith("21w") ? s = "1.18" : e.startsWith("20w") ? s = "1.17" : (e.startsWith("19w") || e.startsWith("18w")) && (s = "1.14"), l.endsWith("-" + s) || l.endsWith("+" + s);
}
function ce(l, e, s) {
  let i, a, r, o, n = ie().then((v) => (s(0, i = v.find((b) => b.stable).version), v.map((b) => b.version)));
  const k = ne(), g = oe();
  function T() {
    i = x(this), s(0, i), s(4, n);
  }
  return l.$$.update = () => {
    l.$$.dirty & 1 && k.then((v) => {
      var b;
      return s(1, a = ((b = v.find((C) => C.gameVersion == i)) == null ? void 0 : b.version) || "unknown");
    }), l.$$.dirty & 1 && g.then((v) => s(2, o = v.filter((b) => ue(b, i)).pop()));
  }, [
    i,
    a,
    o,
    r,
    n,
    T
  ];
}
class he extends R {
  constructor(e) {
    super(), U(this, e, ce, pe, X, {});
  }
}
export {
  he as default
};
