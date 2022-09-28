const INIT_MSG = "SW:";

console.log("SW: Hola Mundo Violeta!");

self.addEventListener("install", (event) => {
  console.log(INIT_MSG, "install");
  const promiseCache = caches.open('cache-v1.1').then((cache) => {
    return cache.addAll([
      '/',
      '/index.html',
      '/images/lapras.png',
      '/css/style.css',
      'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
      'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
      '/pages/Dividir.html',
      '/pages/Sumar.html',
      '/pages/Restar.html',
      '/pages/Multiplicar.html',
    ])
  })

  event.waitUntil(promiseCache)
});


self.addEventListener("fetch", (event) => {
  
  const respCache = caches.match(event.request)
  event.respondWith(respCache)
});