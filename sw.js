<<<<<<< HEAD
// importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('restaurants').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/restaurant.html',
       '/cache-polyfill.js',
       '/js/dbhelper.js',
       '/js/main.js',
       '/js/restaurant_info.js',
       '/img/1.jpg',
       '/img/2.jpg',
       '/img/3.jpg',
       '/img/4.jpg',
       '/img/5.jpg',
       '/img/6.jpg',
       '/img/7.jpg',
       '/img/8.jpg',
       '/img/9.jpg',
       '/img/10.jpg',
       '/data/restaurants.json',
       '/css/styles.css'

    //    '/index.html?homescreen=1',
    //    '/?homescreen=1',
    //    '/styles/main.css',
    //    '/scripts/main.min.js',
    //    '/sounds/airhorn.mp3'
     ]);
   })
 );
});

// self.addEventListener('fetch', function(event) {
//     console.log(event.request.url);
 
// });

self.addEventListener('fetch', function(event) {

  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
       return response || fetch(event.request);
    })
  );
  
=======
// importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('restaurants').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/restaurant.html',
       '/cache-polyfill.js',
       '/js/dbhelper.js',
       '/js/main.js',
       '/js/restaurant_info.js',
       '/img/1.jpg',
       '/img/2.jpg',
       '/img/3.jpg',
       '/img/4.jpg',
       '/img/5.jpg',
       '/img/6.jpg',
       '/img/7.jpg',
       '/img/8.jpg',
       '/img/9.jpg',
       '/img/10.jpg',
       '/data/restaurants.json',
       '/css/styles.css'

    //    '/index.html?homescreen=1',
    //    '/?homescreen=1',
    //    '/styles/main.css',
    //    '/scripts/main.min.js',
    //    '/sounds/airhorn.mp3'
     ]);
   })
 );
});

// self.addEventListener('fetch', function(event) {
//     console.log(event.request.url);
 
// });

self.addEventListener('fetch', function(event) {

  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
       return response || fetch(event.request);
    })
  );
  
>>>>>>> 284b28173ac548b0eee8c0c7be0660b47a064226
});