const n = ["https://meta.fabricmc.net", "https://meta2.fabricmc.net"], o = ["https://maven.fabricmc.net", "https://maven2.fabricmc.net"];
async function v() {
  return r(n, "/v2/versions/installer");
}
async function g() {
  return r(n, "/v2/versions/game");
}
async function w() {
  return r(n, "/v2/versions/loader");
}
async function y() {
  return r(n, "/v2/versions/yarn");
}
async function d(e) {
  return r(n, "/v2/versions/yarn/" + e);
}
async function W(e, t) {
  return r(n, `/v2/versions/loader/${e}/${t}/profile/json`);
}
async function m() {
  return f(o, "/jdlist.txt").then((e) => e.split(`
`));
}
async function b(e) {
  return (await r(
    n,
    `/v2/versions/yarn/${e}?limit=1`
  ))[0];
}
function u() {
  return c("/net/fabricmc/fabric-api/fabric-api/maven-metadata.xml");
}
function x() {
  return c("/net/fabricmc/fabric-language-kotlin/maven-metadata.xml");
}
async function A(e) {
  return (await u()).filter((a) => h(a, e)).pop();
}
function h(e, t) {
  if (!t)
    return !1;
  let a = t;
  return ["1.14", "1.15", "1.16", "1.17", "1.18", "1.19", "1.20", "20w14infinite", "1.18_experimental"].forEach((i) => {
    t.startsWith(i) && (a = i);
  }), t.startsWith("22w13oneblockatatime") ? a = "22w13oneblockatatime" : t.startsWith("23w") ? a = "1.20" : t.startsWith("22w") ? a = "1.19.3" : t.startsWith("1.18.2") ? a = "1.18.2" : t.startsWith("1.19.1") ? a = "1.19.1" : t.startsWith("1.19.2") ? a = "1.19.2" : t.startsWith("1.19.3") ? a = "1.19.3" : t.startsWith("1.19.4") ? a = "1.19.4" : t.startsWith("1.20.1") ? a = "1.20.1" : t.startsWith("21w") ? a = "1.18" : t.startsWith("20w") ? a = "1.17" : (t.startsWith("19w") || t.startsWith("18w")) && (a = "1.14"), e.endsWith("-" + a) || e.endsWith("+" + a);
}
let p = (e) => {
  let a = new DOMParser().parseFromString(e, "text/xml");
  return Array.from(a.getElementsByTagName("version")).map((s) => s.childNodes[0].nodeValue);
};
async function c(e) {
  let t = await f(o, e);
  return p(t);
}
async function r(e, t) {
  return await (await l(e, t)).json();
}
async function f(e, t) {
  return await (await l(e, t)).text();
}
async function l(e, t) {
  for (var a of e)
    try {
      const s = await fetch(a + t);
      if (s.ok)
        return s;
      console.error(await s.text());
    } catch (s) {
      console.error(s);
    }
  throw new Error(`Failed to fetch: ${e[0] + t}`);
}
export {
  y as a,
  w as b,
  v as c,
  g as d,
  W as e,
  b as f,
  m as g,
  A as h,
  d as i,
  x as j,
  u as k,
  h as l
};
