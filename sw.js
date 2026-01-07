self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('dinheiro-cache').then(cache => {
      return cache.addAll(['./']);
    })
  );
});
