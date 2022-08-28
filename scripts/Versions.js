import { S as R, i as U, s as X, h as Z, a as w, e as h, c as p, u as $, n as C, d as u, f as x, t as m, g as G, j as c, m as ee, o as te, p as J, q as se, k as T, l as le } from "./index.js";
import { d as ie, a as ne, b as oe, h as re } from "./Api.js";
function K(l, e, s) {
  const i = l.slice();
  return i[9] = e[s], i;
}
function ae(l) {
  let e, s, i = l[12].message + "", a, o, r;
  return {
    c() {
      e = h("p"), s = m("Error: "), a = m(i), o = w(), r = h("p"), r.innerHTML = `For support please visit one of our
        <a href="/discuss">community discussion</a>
        groups.`, G(e, "color", "red");
    },
    m(n, k) {
      p(n, e, k), c(e, s), c(e, a), p(n, o, k), p(n, r, k);
    },
    p: C,
    d(n) {
      n && u(e), n && u(o), n && u(r);
    }
  };
}
function fe(l) {
  let e, s, i, a, o, r, n, k, y, L, b, v, M, O, V, P, A, H, N, S, j, W, Y, q, z, B, F, E, D, g = l[4], d = [];
  for (let t = 0; t < g.length; t += 1)
    d[t] = Q(K(l, g, t));
  return {
    c() {
      e = h("p"), s = m(`Minecraft Version:
        `), i = h("select");
      for (let t = 0; t < d.length; t += 1)
        d[t].c();
      a = w(), o = h("div"), r = h("pre"), n = h("code"), k = m(`
minecraft_version=`), y = m(l[0]), L = m(`
yarn_mappings=`), b = m(l[1]), v = m(`
loader_version=`), M = m(l[2]), O = m(`

#Fabric api
fabric_version=`), V = m(l[3]), P = m(`
        `), A = w(), H = h("h4"), H.textContent = "Automatically update mappings", N = w(), S = h("p"), S.innerHTML = 'Mappings can be auto updated by using the following command. See the <a href="https://fabricmc.net/wiki/tutorial:migratemappings">wiki page</a> for more help.', j = w(), W = h("code"), Y = m('gradlew migrateMappings --mappings "'), q = m(l[1]), z = m('"'), B = w(), F = h("p"), F.innerHTML = 'Note: The fabric-api version may not be the correct version for the given Minecraft version in some situations. Check the <a href="https://minecraft.curseforge.com/projects/fabric/files">CurseForge</a> page if you run into issues.', G(i, "min-width", "200px"), l[0] === void 0 && ee(() => l[5].call(i)), G(o, "margin-bottom", "15px"), te(W, "class", "copy-code svelte-sbpww1");
    },
    m(t, f) {
      p(t, e, f), c(e, s), c(e, i);
      for (let _ = 0; _ < d.length; _ += 1)
        d[_].m(i, null);
      J(i, l[0]), p(t, a, f), p(t, o, f), c(o, r), c(r, n), c(n, k), c(n, y), c(n, L), c(n, b), c(n, v), c(n, M), c(n, O), c(n, V), c(n, P), p(t, A, f), p(t, H, f), p(t, N, f), p(t, S, f), p(t, j, f), p(t, W, f), c(W, Y), c(W, q), c(W, z), p(t, B, f), p(t, F, f), E || (D = se(i, "change", l[5]), E = !0);
    },
    p(t, f) {
      if (f & 16) {
        g = t[4];
        let _;
        for (_ = 0; _ < g.length; _ += 1) {
          const I = K(t, g, _);
          d[_] ? d[_].p(I, f) : (d[_] = Q(I), d[_].c(), d[_].m(i, null));
        }
        for (; _ < d.length; _ += 1)
          d[_].d(1);
        d.length = g.length;
      }
      f & 17 && J(i, t[0]), f & 1 && T(y, t[0]), f & 2 && T(b, t[1]), f & 4 && T(M, t[2]), f & 8 && T(V, t[3]), f & 2 && T(q, t[1]);
    },
    d(t) {
      t && u(e), le(d, t), t && u(a), t && u(o), t && u(A), t && u(H), t && u(N), t && u(S), t && u(j), t && u(W), t && u(B), t && u(F), E = !1, D();
    }
  };
}
function Q(l) {
  let e, s = l[9] + "", i;
  return {
    c() {
      e = h("option"), i = m(s), e.__value = l[9], e.value = e.__value;
    },
    m(a, o) {
      p(a, e, o), c(e, i);
    },
    p: C,
    d(a) {
      a && u(e);
    }
  };
}
function pe(l) {
  let e;
  return {
    c() {
      e = h("p"), e.textContent = "Loading versions..";
    },
    m(s, i) {
      p(s, e, i);
    },
    p: C,
    d(s) {
      s && u(e);
    }
  };
}
function ue(l) {
  let e, s, i, a, o = {
    ctx: l,
    current: null,
    token: null,
    hasCatch: !0,
    pending: pe,
    then: fe,
    catch: ae,
    value: 4,
    error: 12
  };
  return Z(l[4], o), {
    c() {
      o.block.c(), e = w(), s = h("h4"), s.textContent = "Loom", i = w(), a = h("p"), a.innerHTML = "The recommended loom version is <strong>1.0-SNAPSHOT</strong>. This is usually defined near the top of your  build.gradle file.";
    },
    m(r, n) {
      o.block.m(r, o.anchor = n), o.mount = () => e.parentNode, o.anchor = e, p(r, e, n), p(r, s, n), p(r, i, n), p(r, a, n);
    },
    p(r, [n]) {
      l = r, $(o, l, n);
    },
    i: C,
    o: C,
    d(r) {
      o.block.d(r), o.token = null, o = null, r && u(e), r && u(s), r && u(i), r && u(a);
    }
  };
}
function ce(l, e) {
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
  }), e.startsWith("22w13oneblockatatime") ? s = "22w13oneblockatatime" : e.startsWith("22w") ? s = "1.19" : e.startsWith("1.18.2") ? s = "1.18.2" : e.startsWith("1.19.1") ? s = "1.19.1" : e.startsWith("1.19.2") ? s = "1.19.2" : e.startsWith("21w") ? s = "1.18" : e.startsWith("20w") ? s = "1.17" : (e.startsWith("19w") || e.startsWith("18w")) && (s = "1.14"), l.endsWith("-" + s) || l.endsWith("+" + s);
}
function _e(l, e, s) {
  let i, a, o, r, n = ie().then((b) => (s(0, i = b.find((v) => v.stable).version), b.map((v) => v.version)));
  const k = ne();
  oe().then((b) => (s(2, o = b.find((v) => v.stable).version), b));
  const y = re();
  function L() {
    i = x(this), s(0, i), s(4, n);
  }
  return l.$$.update = () => {
    l.$$.dirty & 1 && k.then((b) => {
      var v;
      return s(1, a = ((v = b.find((M) => M.gameVersion == i)) == null ? void 0 : v.version) || "unknown");
    }), l.$$.dirty & 1 && y.then((b) => s(3, r = b.filter((v) => ce(v, i)).pop()));
  }, [
    i,
    a,
    o,
    r,
    n,
    L
  ];
}
class de extends R {
  constructor(e) {
    super(), U(this, e, _e, ue, X, {});
  }
}
export {
  de as default
};
