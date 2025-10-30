// public/sw.js
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // 같은 오리진에서만 작동
  if (url.origin !== self.location.origin) return;

  // JS, CSS, HTML, JSON, SVG만 처리
  if (!/\.(js|css|html|json|svg)$/.test(url.pathname)) return;

  event.respondWith(
    (async () => {
      try {
        const networkResponse = await fetch(req);
        // opaque 응답은 수정 불가
        if (!networkResponse || networkResponse.type === 'opaque') return networkResponse;

        // 성공 응답(200)만 수정
        if (networkResponse.ok) {
          const buffer = await networkResponse.arrayBuffer();
          const newHeaders = new Headers(networkResponse.headers);
          newHeaders.set('X-Content-Type-Options', 'nosniff');

          return new Response(buffer, {
            status: networkResponse.status,
            statusText: networkResponse.statusText,
            headers: newHeaders,
          });
        }

        return networkResponse;
      } catch (err) {
        return fetch(req);
      }
    })()
  );
});
