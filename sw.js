const CACHE = 'traductor-v2';
const ASSETS = [
  '/proyecto-traductor/',
  '/proyecto-traductor/index.html',
  '/proyecto-traductor/manifest.json',
  '/proyecto-traductor/icon-192.png',
  '/proyecto-traductor/icon-512.png',
  'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=DM+Mono:wght@300;400&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Network-first for API calls, cache-first for assets
  const isApi = e.request.url.includes('googleapis.com/translate') ||
                e.request.url.includes('generativelanguage') ||
                e.request.url.includes('dictionaryapi');
  if (isApi) {
    e.respondWith(fetch(e.request).catch(() => new Response('offline', { status: 503 })));
  } else {
    e.respondWith(
      caches.match(e.request).then(r => r || fetch(e.request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      }))
    );
  }
});
