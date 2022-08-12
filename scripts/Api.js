async function o() {
  return n("https://meta.fabricmc.net/v2/versions/installer");
}
async function c() {
  return n("https://meta.fabricmc.net/v2/versions/game");
}
async function f() {
  return n("https://meta.fabricmc.net/v2/versions/loader");
}
async function m() {
  return n("https://meta.fabricmc.net/v2/versions/yarn");
}
async function l(t, e) {
  return n(`https://meta.fabricmc.net/v2/versions/loader/${t}/${e}/profile/json`);
}
async function u() {
  return a("https://maven.fabricmc.net/jdlist.txt").then((t) => t.split(`
`));
}
async function v(t) {
  return (await n(
    `https://meta.fabricmc.net/v2/versions/yarn/${t}?limit=1`
  ))[0];
}
async function p() {
  let t = await a("https://maven.fabricmc.net/net/fabricmc/fabric-api/fabric-api/maven-metadata.xml"), s = new DOMParser().parseFromString(t, "text/xml");
  return Array.from(s.getElementsByTagName("version")).map((r) => r.childNodes[0].nodeValue);
}
async function n(t) {
  const e = await fetch(t);
  if (e.ok)
    return await e.json();
  throw new Error(`Failed to fetch versions (Code: ${e.status})`);
}
async function a(t) {
  const e = await fetch(t);
  if (e.ok)
    return await e.text();
  throw new Error(`Failed to fetch versions (Code: ${e.status})`);
}
export {
  m as a,
  f as b,
  o as c,
  c as d,
  v as e,
  l as f,
  u as g,
  p as h
};
