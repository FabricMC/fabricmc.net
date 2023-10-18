import { S as _, i as $, s as b, e as u, w as C, a as f, o as I, c as h, x as v, j as p, q as w, r as U, v as V, d as x, y as R, A as S } from "./index.61dc58cf.js";
import k from "./LegacyVersion.4c4e7fdf.js";
import "./Api.96f42ec7.js";
function q(o) {
  let t, e, a, c, l, n, s, i, m, g = {};
  return e = new k({ props: g }), o[2](e), {
    c() {
      t = u("main"), C(e.$$.fragment), a = f(), c = u("br"), l = f(), n = u("button"), n.textContent = "Copy MCUpdater Import entry", I(n, "class", "button primary large");
    },
    m(r, d) {
      h(r, t, d), v(e, t, null), p(t, a), p(t, c), p(t, l), p(t, n), s = !0, i || (m = w(
        n,
        "click",
        /*copyImportEntry*/
        o[1]
      ), i = !0);
    },
    p(r, [d]) {
      const y = {};
      e.$set(y);
    },
    i(r) {
      s || (U(e.$$.fragment, r), s = !0);
    },
    o(r) {
      V(e.$$.fragment, r), s = !1;
    },
    d(r) {
      r && x(t), o[2](null), R(e), i = !1, m();
    }
  };
}
function L(o, t) {
  return `<Import url="${`https://fabricmc.net/download/mcupdater?yarn=${encodeURIComponent(o)}&amp;loader=${encodeURIComponent(t)}`}">fabric</Import>`;
}
function M(o, t, e) {
  let a;
  async function c() {
    const { yarnVersion: n, loaderVersion: s } = await a.getSelectedVersions(), i = L(n, s);
    return navigator.clipboard.writeText(i);
  }
  function l(n) {
    S[n ? "unshift" : "push"](() => {
      a = n, e(0, a);
    });
  }
  return [a, c, l];
}
class T extends _ {
  constructor(t) {
    super(), $(this, t, M, q, b, {});
  }
}
export {
  T as default
};
