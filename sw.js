const CACHE = 'nosuggest-v1';

/* Core app shell — precached on install so there's always something to
   serve offline. This is a single-page app, so the shell is just the
   page itself; add any other same-origin static assets here (manifest,
   icons) if you want them available offline too. */
const APP_SHELL = [
  '/',
  '/index.html',
  '/manifest.json',
  '/nosuggest-logo-v2-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(APP_SHELL))
      .catch(() => {}) // never block install on a precache failure
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return; // don't try to cache POST/etc.

  // Network first — always fetch fresh, fall back to cache.
  // On a successful network response, store a copy so the cache stays
  // up to date and offline fallback actually has something recent to serve.
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(cache => cache.put(e.request, copy)).catch(() => {});
        return res;
      })
      .catch(() =>
        caches.match(e.request).then(cached =>
          cached || (e.request.mode === 'navigate' ? caches.match('/index.html') : undefined)
        )
      )
  );
});
