const n = ["https://meta.fabricmc.net", "https://meta2.fabricmc.net"], o = ["https://maven.fabricmc.net", "https://maven2.fabricmc.net"];
async function p() {
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
async function m(e, t) {
  return r(n, `/v2/versions/loader/${e}/${t}/profile/json`);
}
async function W() {
  return f(o, "/jdlist.txt").then((e) => e.split(`
`));
}
async function b(e) {
  return (await r(
    n,
    `/v2/versions/yarn/${e}?limit=1`
  ))[0];
}
function h() {
  return c("/net/fabricmc/fabric-api/fabric-api/maven-metadata.xml");
}
function x() {
  return c("/net/fabricmc/fabric-language-kotlin/maven-metadata.xml");
}
async function A(e) {
  return (await h()).filter((s) => v(s, e)).pop();
}
function v(e, t) {
  if (!t)
    return !1;
  let s = t;
  return ["1.14", "1.15", "1.16", "1.17", "1.18", "1.19", "1.20", "20w14infinite", "1.18_experimental"].forEach((i) => {
    t.startsWith(i) && (s = i);
  }), t.startsWith("22w13oneblockatatime") ? s = "22w13oneblockatatime" : t.startsWith("23w") ? s = "1.20" : t.startsWith("22w") ? s = "1.19.3" : t.startsWith("1.18.2") ? s = "1.18.2" : t.startsWith("1.19.1") ? s = "1.19.1" : t.startsWith("1.19.2") ? s = "1.19.2" : t.startsWith("1.19.3") ? s = "1.19.3" : t.startsWith("1.19.4") ? s = "1.19.4" : t.startsWith("21w") ? s = "1.18" : t.startsWith("20w") ? s = "1.17" : (t.startsWith("19w") || t.startsWith("18w")) && (s = "1.14"), e.endsWith("-" + s) || e.endsWith("+" + s);
}
async function c(e) {
  let t = await f(o, e), a = new DOMParser().parseFromString(t, "text/xml");
  return Array.from(a.getElementsByTagName("version")).map((u) => u.childNodes[0].nodeValue);
}
async function r(e, t) {
  return await (await l(e, t)).json();
}
async function f(e, t) {
  return await (await l(e, t)).text();
}
async function l(e, t) {
  for (var s of e)
    try {
      const a = await fetch(s + t);
      if (a.ok)
        return a;
      console.error(await a.text());
    } catch (a) {
      console.error(a);
    }
  throw new Error(`Failed to fetch: ${e[0] + t}`);
}
export {
  y as a,
  w as b,
  p as c,
  g as d,
  b as e,
  m as f,
  W as g,
  A as h,
  d as i,
  x as j,
  h as k,
  v as l
};
