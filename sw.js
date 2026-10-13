const CACHE = 'nosuggest-v3';
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
      .catch(() => {})
  );
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    const upgrading = keys.some(key => key !== CACHE);
    await Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)));
    await self.clients.claim();
    if(upgrading){
      const wins = await self.clients.matchAll({type: 'window', includeUncontrolled: true});
      wins.forEach(c => c.navigate(c.url).catch(() => {}));
    }
  })());
});
self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return;
  if(new URL(e.request.url).origin !== self.location.origin) return;
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
