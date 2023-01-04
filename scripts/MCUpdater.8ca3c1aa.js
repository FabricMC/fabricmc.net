import { S as _, i as $, s as b, e as u, w as C, a as f, c as I, x as h, j as p, q as v, r as w, v as U, d as V, y as x, A as R } from "./index.1b882cd4.js";
import S from "./LegacyVersion.e4d4c73a.js";
import "./Api.449832db.js";
function k(o) {
  let t, e, a, c, l, n, s, i, m, g = {};
  return e = new S({ props: g }), o[2](e), {
    c() {
      t = u("main"), C(e.$$.fragment), a = f(), c = u("br"), l = f(), n = u("button"), n.textContent = "Copy MCUpdater Import entry";
    },
    m(r, d) {
      I(r, t, d), h(e, t, null), p(t, a), p(t, c), p(t, l), p(t, n), s = !0, i || (m = v(n, "click", o[1]), i = !0);
    },
    p(r, [d]) {
      const y = {};
      e.$set(y);
    },
    i(r) {
      s || (w(e.$$.fragment, r), s = !0);
    },
    o(r) {
      U(e.$$.fragment, r), s = !1;
    },
    d(r) {
      r && V(t), o[2](null), x(e), i = !1, m();
    }
  };
}
function q(o, t) {
  return `<Import url="${`https://fabricmc.net/download/mcupdater?yarn=${encodeURIComponent(o)}&amp;loader=${encodeURIComponent(t)}`}">fabric</Import>`;
}
function L(o, t, e) {
  let a;
  async function c() {
    const { yarnVersion: n, loaderVersion: s } = await a.getSelectedVersions(), i = q(n, s);
    return navigator.clipboard.writeText(i);
  }
  function l(n) {
    R[n ? "unshift" : "push"](() => {
      a = n, e(0, a);
    });
  }
  return [a, c, l];
}
class E extends _ {
  constructor(t) {
    super(), $(this, t, L, k, b, {});
  }
}
export {
  E as default
};
