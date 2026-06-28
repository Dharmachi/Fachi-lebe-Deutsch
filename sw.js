/* Fachi 學德語 — Service Worker(离线缓存,网络优先) */
const CACHE = "fachi-de-v1";
const ASSETS = ["./", "index.html", "style.css", "app.js", "data.js", "manifest.json", "icon.svg"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()).catch(() => {}));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())
  );
});

// 网络优先:在线时取最新(方便你更新内容),离线时回退缓存
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then((resp) => {
      const copy = resp.clone();
      caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {});
      return resp;
    }).catch(() => caches.match(e.request).then((r) => r || caches.match("index.html")))
  );
});
