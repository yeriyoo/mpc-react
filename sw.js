// public/sw.js
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);

  // 같은 출처만 처리
  if (url.origin !== self.location.origin) return;

  // 텍스트 리소스만 처리 (필요하면 여기에 확장)
  if (!/\.(js|css|html|json|svg)$/.test(url.pathname)) return;

  event.respondWith((async () => {
    try {
      const networkResponse = await fetch(req);
      if (!networkResponse || networkResponse.type === 'opaque') {
        return networkResponse;
      }

      // 안전하게 body를 복사하려면 arrayBuffer 사용
      const buffer = await networkResponse.arrayBuffer();
      const newHeaders = new Headers(networkResponse.headers);
      newHeaders.set('X-Content-Type-Options', 'nosniff');

      return new Response(buffer, {
        status: networkResponse.status,
        statusText: networkResponse.statusText,
        headers: newHeaders
      });
    } catch (err) {
      // 네트워크 실패 시 기본 네트워크 동작(혹은 캐시 대체)
      return fetch(req);
    }
  })());
});
