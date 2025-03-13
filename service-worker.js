const CACHE_NAME = "flip-clock-cache-v1";
const urlsToCache = [
  "index.html",
  "timer.html",
  "manifest.json",
  "icon.png",
  "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js",
  "https://cdn.jsdelivr.net/npm/flipclock@0.7.8/compiled/flipclock.min.js",
  "https://cdn.jsdelivr.net/npm/flipclock@0.7.8/compiled/flipclock.css"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
