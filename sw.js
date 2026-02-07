const CACHE_NAME = 'game-cache-v1';

// On install, the browser will cache your game's files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        './',
        'index.html',
        'style.css',
        'script.js'
        // Add other core files here if needed
      ]);
    })
  );
});

// Intercepts requests and serves them from cache if offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
