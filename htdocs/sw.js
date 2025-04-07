// Service worker code goes in here!
var cacheVersion = "v1";
var cachedAssets = [
  "/css/global.css",
  "/js/debounce.js",
  "/js/nav.js",
  "/js/attach-nav.js",
  "/img/global/jeremy.svg",
  "/img/global/icon-github.svg",
  "/img/global/icon-email.svg",
  "/img/global/icon-twitter.svg",
  "/img/global/icon-linked-in.svg"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(cacheVersion).then(function(cache) {
      return cache.addAll(cachedAssets);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

// Activate event - Claims control immediately
self.addEventListener("activate", function(event) {
  return self.clients.claim();
});