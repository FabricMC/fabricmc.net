import { S as g, i as $, s as h, e as p, w as b, a as y, o as v, c as w, x as C, j as m, q as x, r as T, v as k, d as A, y as P, A as S } from "./index.61dc58cf.js";
import { e as V } from "./Api.d20d53e7.js";
import j from "./LegacyVersion.11280451.js";
function D(o) {
  let t, e, r, c, u, i, n, l, s, d = {};
  return e = new j({ props: d }), o[2](e), {
    c() {
      t = p("main"), b(e.$$.fragment), r = y(), c = p("br"), u = y(), i = p("button"), i.textContent = "Download bin/version.json file", v(i, "class", "button primary large");
    },
    m(a, f) {
      w(a, t, f), C(e, t, null), m(t, r), m(t, c), m(t, u), m(t, i), n = !0, l || (s = x(
        i,
        "click",
        /*downloadJson*/
        o[1]
      ), l = !0);
    },
    p(a, [f]) {
      const _ = {};
      e.$set(_);
    },
    i(a) {
      n || (T(e.$$.fragment, a), n = !0);
    },
    o(a) {
      k(e.$$.fragment, a), n = !1;
    },
    d(a) {
      a && A(t), o[2](null), P(e), l = !1, s();
    }
  };
}
function J(o, t) {
  var e = document.createElement("a");
  e.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(t)), e.setAttribute("download", o), e.style.display = "none", document.body.appendChild(e), e.click(), document.body.removeChild(e);
}
function q(o, t, e) {
  let r;
  async function c() {
    const { selectedGameVersion: n, loaderVersion: l } = await r.getSelectedVersions();
    J("version.json", await u(n, l));
  }
  async function u(n, l) {
    const s = await V(n, l), d = {
      id: n,
      inheritsFrom: s.inheritsFrom,
      releaseTime: s.releaseTime,
      time: s.time,
      type: s.type,
      minecraftArguments: "--username ${auth_player_name} --version ${version_name} --gameDir ${game_directory} --assetsDir ${assets_root} --assetIndex ${assets_index_name} --uuid ${auth_uuid} --accessToken ${auth_access_token} --userType ${user_type} --versionType ${version_type}",
      libraries: s.libraries,
      mainClass: s.mainClass
    };
    return JSON.stringify(d, null, 2);
  }
  function i(n) {
    S[n ? "unshift" : "push"](() => {
      r = n, e(0, r);
    });
  }
  return [r, c, i];
}
class E extends g {
  constructor(t) {
    super(), $(this, t, q, D, h, {});
  }
}
export {
  E as default
};
