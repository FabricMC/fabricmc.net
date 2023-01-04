const s = ["https://meta.fabricmc.net", "https://meta2.fabricmc.net"], o = ["https://maven.fabricmc.net", "https://maven2.fabricmc.net"];
async function p() {
  return r(s, "/v2/versions/installer");
}
async function g() {
  return r(s, "/v2/versions/game");
}
async function w() {
  return r(s, "/v2/versions/loader");
}
async function y() {
  return r(s, "/v2/versions/yarn");
}
async function d(e) {
  return r(s, "/v2/versions/yarn/" + e);
}
async function m(e, t) {
  return r(s, `/v2/versions/loader/${e}/${t}/profile/json`);
}
async function b() {
  return f(o, "/jdlist.txt").then((e) => e.split(`
`));
}
async function W(e) {
  return (await r(
    s,
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
  return (await h()).filter((n) => v(n, e)).pop();
}
function v(e, t) {
  if (!t)
    return !1;
  let n = t;
  return ["1.14", "1.15", "1.16", "1.17", "1.18", "1.19", "20w14infinite", "1.18_experimental"].forEach((i) => {
    t.startsWith(i) && (n = i);
  }), t.startsWith("22w13oneblockatatime") ? n = "22w13oneblockatatime" : t.startsWith("22w") ? n = "1.19.3" : t.startsWith("1.18.2") ? n = "1.18.2" : t.startsWith("1.19.1") ? n = "1.19.1" : t.startsWith("1.19.2") ? n = "1.19.2" : t.startsWith("1.19.3") ? n = "1.19.3" : t.startsWith("21w") ? n = "1.18" : t.startsWith("20w") ? n = "1.17" : (t.startsWith("19w") || t.startsWith("18w")) && (n = "1.14"), e.endsWith("-" + n) || e.endsWith("+" + n);
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
  for (var n of e)
    try {
      const a = await fetch(n + t);
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
  W as e,
  m as f,
  b as g,
  A as h,
  d as i,
  x as j,
  h as k,
  v as l
};
