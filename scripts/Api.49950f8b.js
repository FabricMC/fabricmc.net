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
async function d(s) {
  return r(n, "/v2/versions/yarn/" + s);
}
async function W(s, t) {
  return r(n, `/v2/versions/loader/${s}/${t}/profile/json`);
}
async function b() {
  return f(o, "/jdlist.txt").then((s) => s.split(`
`));
}
async function m(s) {
  return (await r(
    n,
    `/v2/versions/yarn/${s}?limit=1`
  ))[0];
}
function h() {
  return c("/net/fabricmc/fabric-api/fabric-api/maven-metadata.xml");
}
function x() {
  return c("/net/fabricmc/fabric-language-kotlin/maven-metadata.xml");
}
async function A(s) {
  return (await h()).filter((e) => v(e, s)).pop();
}
function v(s, t) {
  if (!t)
    return !1;
  let e = t;
  return ["1.14", "1.15", "1.16", "1.17", "1.18", "1.19", "1.20", "20w14infinite", "1.18_experimental"].forEach((i) => {
    t.startsWith(i) && (e = i);
  }), t.startsWith("22w13oneblockatatime") ? e = "22w13oneblockatatime" : t.startsWith("23w") ? e = "1.20" : t.startsWith("22w") ? e = "1.19.3" : t.startsWith("1.18.2") ? e = "1.18.2" : t.startsWith("1.19.1") ? e = "1.19.1" : t.startsWith("1.19.2") ? e = "1.19.2" : t.startsWith("1.19.3") ? e = "1.19.3" : t.startsWith("1.19.4") ? e = "1.19.4" : t.startsWith("1.20.1") ? e = "1.20.1" : t.startsWith("21w") ? e = "1.18" : t.startsWith("20w") ? e = "1.17" : (t.startsWith("19w") || t.startsWith("18w")) && (e = "1.14"), s.endsWith("-" + e) || s.endsWith("+" + e);
}
async function c(s) {
  let t = await f(o, s), a = new DOMParser().parseFromString(t, "text/xml");
  return Array.from(a.getElementsByTagName("version")).map((u) => u.childNodes[0].nodeValue);
}
async function r(s, t) {
  return await (await l(s, t)).json();
}
async function f(s, t) {
  return await (await l(s, t)).text();
}
async function l(s, t) {
  for (var e of s)
    try {
      const a = await fetch(e + t);
      if (a.ok)
        return a;
      console.error(await a.text());
    } catch (a) {
      console.error(a);
    }
  throw new Error(`Failed to fetch: ${s[0] + t}`);
}
export {
  y as a,
  w as b,
  p as c,
  g as d,
  m as e,
  W as f,
  b as g,
  A as h,
  d as i,
  x as j,
  h as k,
  v as l
};
