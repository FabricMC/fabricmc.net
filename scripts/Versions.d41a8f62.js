import { S as U, i as W, s as X, h as Z, a as V, e as d, c as p, u as $, n as C, d as f, f as x, t as _, g as P, j as u, m as ee, o as te, p as K, q as ne, k as T, l as se } from "./index.1b882cd4.js";
import { d as le, b as oe, a as ie, k as re, l as ae } from "./Api.93a83966.js";
function Q(l, t, o) {
  const n = l.slice();
  return n[9] = t[o], n;
}
function pe(l) {
  let t, o, n = l[12].message + "", c, i, r;
  return {
    c() {
      t = d("p"), o = _("Error: "), c = _(n), i = V(), r = d("p"), r.innerHTML = `For support please visit one of our
        <a href="/discuss">community discussion</a>
        groups.`, P(t, "color", "red");
    },
    m(s, k) {
      p(s, t, k), u(t, o), u(t, c), p(s, i, k), p(s, r, k);
    },
    p: C,
    d(s) {
      s && f(t), s && f(i), s && f(r);
    }
  };
}
function fe(l) {
  let t, o, n, c, i, r, s, k, w, L, h, v, M, Y, F, z, N, H, j, S, q, g, B, E, D, G, A, O, I, y = l[4], b = [];
  for (let e = 0; e < y.length; e += 1)
    b[e] = R(Q(l, y, e));
  return {
    c() {
      t = d("p"), o = _(`Minecraft Version:
        `), n = d("select");
      for (let e = 0; e < b.length; e += 1)
        b[e].c();
      c = V(), i = d("div"), r = d("pre"), s = d("code"), k = _(`
minecraft_version=`), w = _(l[0]), L = _(`
yarn_mappings=`), h = _(l[1]), v = _(`
loader_version=`), M = _(l[2]), Y = _(`

#Fabric api
fabric_version=`), F = _(l[3]), z = _(`
        `), N = V(), H = d("h4"), H.textContent = "Automatically update mappings", j = V(), S = d("p"), S.innerHTML = 'Mappings can be auto updated by using the following command. See the <a href="https://fabricmc.net/wiki/tutorial:migratemappings">wiki page</a> for more help.', q = V(), g = d("code"), B = _('gradlew migrateMappings --mappings "'), E = _(l[1]), D = _('"'), G = V(), A = d("p"), A.innerHTML = 'Note: The fabric-api version may not be the correct version for the given Minecraft version in some situations. Check the <a href="https://minecraft.curseforge.com/projects/fabric/files">CurseForge</a> page if you run into issues.', P(n, "min-width", "200px"), l[0] === void 0 && ee(() => l[5].call(n)), P(i, "margin-bottom", "15px"), te(g, "class", "copy-code svelte-sbpww1");
    },
    m(e, a) {
      p(e, t, a), u(t, o), u(t, n);
      for (let m = 0; m < b.length; m += 1)
        b[m].m(n, null);
      K(n, l[0]), p(e, c, a), p(e, i, a), u(i, r), u(r, s), u(s, k), u(s, w), u(s, L), u(s, h), u(s, v), u(s, M), u(s, Y), u(s, F), u(s, z), p(e, N, a), p(e, H, a), p(e, j, a), p(e, S, a), p(e, q, a), p(e, g, a), u(g, B), u(g, E), u(g, D), p(e, G, a), p(e, A, a), O || (I = ne(n, "change", l[5]), O = !0);
    },
    p(e, a) {
      if (a & 16) {
        y = e[4];
        let m;
        for (m = 0; m < y.length; m += 1) {
          const J = Q(e, y, m);
          b[m] ? b[m].p(J, a) : (b[m] = R(J), b[m].c(), b[m].m(n, null));
        }
        for (; m < b.length; m += 1)
          b[m].d(1);
        b.length = y.length;
      }
      a & 17 && K(n, e[0]), a & 1 && T(w, e[0]), a & 2 && T(h, e[1]), a & 4 && T(M, e[2]), a & 8 && T(F, e[3]), a & 2 && T(E, e[1]);
    },
    d(e) {
      e && f(t), se(b, e), e && f(c), e && f(i), e && f(N), e && f(H), e && f(j), e && f(S), e && f(q), e && f(g), e && f(G), e && f(A), O = !1, I();
    }
  };
}
function R(l) {
  let t, o = l[9] + "", n;
  return {
    c() {
      t = d("option"), n = _(o), t.__value = l[9], t.value = t.__value;
    },
    m(c, i) {
      p(c, t, i), u(t, n);
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
      t = d("p"), t.textContent = "Loading versions..";
    },
    m(o, n) {
      p(o, t, n);
    },
    p: C,
    d(o) {
      o && f(t);
    }
  };
}
function ce(l) {
  let t, o, n, c, i = {
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
  return Z(l[4], i), {
    c() {
      i.block.c(), t = V(), o = d("h4"), o.textContent = "Loom", n = V(), c = d("p"), c.innerHTML = "The recommended loom version is <strong>1.1-SNAPSHOT</strong>. This is usually defined near the top of your  build.gradle file.";
    },
    m(r, s) {
      i.block.m(r, i.anchor = s), i.mount = () => t.parentNode, i.anchor = t, p(r, t, s), p(r, o, s), p(r, n, s), p(r, c, s);
    },
    p(r, [s]) {
      l = r, $(i, l, s);
    },
    i: C,
    o: C,
    d(r) {
      i.block.d(r), i.token = null, i = null, r && f(t), r && f(o), r && f(n), r && f(c);
    }
  };
}
function me(l, t, o) {
  let n, c, i, r, s = le().then((h) => (o(0, n = h.find((v) => v.stable).version), h.map((v) => v.version)));
  oe().then((h) => (o(2, i = h.find((v) => v.stable).version), h));
  const k = ie(), w = re();
  function L() {
    n = x(this), o(0, n), o(4, s);
  }
  return l.$$.update = () => {
    l.$$.dirty & 1 && k.then((h) => {
      var v;
      return o(1, c = ((v = h.find((M) => M.gameVersion == n)) == null ? void 0 : v.version) || "unknown");
    }), l.$$.dirty & 1 && w.then((h) => o(3, r = h.filter((v) => ae(v, n)).pop()));
  }, [
    n,
    c,
    i,
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
