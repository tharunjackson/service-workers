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

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

// Fetch event - serves cached content when available
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // Not in cache - fetch from network
        return fetch(event.request);
      })
  );
});