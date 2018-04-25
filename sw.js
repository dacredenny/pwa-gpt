var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/bundle.js',
];

self.addEventListener('install', function(event) {
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});