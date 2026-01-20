const CACHE_NAME = 'medalcode-v1';
const URLS_TO_CACHE = [
  '/',
  '/site.webmanifest',
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  '/styles/global.css' // This might be built into something else, so maybe skip specific assets unless we know the build path
];

// Install Event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Omit errors if files don't exist (like specific CSS bundles)
      return cache.addAll(URLS_TO_CACHE).catch(err => console.log('SW: Cache addAll error', err));
    })
  );
  self.skipWaiting();
});

// Activate Event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event
self.addEventListener('fetch', (event) => {
  // Navigation requests (HTML pages)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // If network works, return response and cache it
          const resClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, resClone);
          });
          return response;
        })
        .catch(() => {
          // If network fails, try cache
          return caches.match(event.request).then((response) => {
            if (response) return response;
            // Fallback to home page if specific page not in cache
            return caches.match('/');
          });
        })
    );
    return;
  }

  // Asset requests (Images, CSS, JS)
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached response if found
      if (cachedResponse) {
        // Optional: Update cache in background (Stale-while-revalidate)
        fetch(event.request).then(response => {
             if(response && response.status === 200) {
                 const resClone = response.clone();
                 caches.open(CACHE_NAME).then(cache => cache.put(event.request, resClone));
             }
        }).catch(() => {});
        
        return cachedResponse;
      }

      // If not in cache, fetch from network
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});
