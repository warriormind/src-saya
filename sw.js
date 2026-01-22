// Service Worker for SAYA Website - Offline Functionality
const CACHE_NAME = 'saya-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/saya-website.html',
  '/index.html',
  '/index.css',
  '/manifest.json',
  'Hapitec Company Logo/Hapitec Fully Transparent.png'
];

// Install event - cache essential assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching app shell');
      return cache.addAll(ASSETS_TO_CACHE).catch(() => {
        // Continue even if some assets fail to cache
        console.log('Some assets could not be cached on install');
      });
    })
  );
  self.skipWaiting(); // Activate immediately
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim(); // Claim all clients
});

// Fetch event - network first, then cache, then offline page
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle HTML documents
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful responses
          if (response && response.status === 200 && response.type === 'basic') {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Return cached version or offline page
          return caches.match(request).then((response) => {
            return response || caches.match('/saya-website.html');
          });
        })
    );
    return;
  }

  // Handle other assets (CSS, JS, images, etc.)
  event.respondWith(
    caches.match(request).then((response) => {
      // Return from cache if available
      if (response) {
        return response;
      }

      // Otherwise try network
      return fetch(request)
        .then((response) => {
          // Cache successful responses
          if (response && response.status === 200 && response.type === 'basic') {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Return placeholder for failed images
          if (request.destination === 'image') {
            return new Response(
              '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect fill="#f0f0f0" width="100" height="100"/><text x="50" y="50" text-anchor="middle" dy=".3em" fill="#999" font-size="12">Offline</text></svg>',
              { headers: { 'Content-Type': 'image/svg+xml' } }
            );
          }
          return null;
        });
    })
  );
});

// Background sync for future enhancements
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-membership') {
    event.waitUntil(syncMembershipData());
  }
});

function syncMembershipData() {
  // Placeholder for future sync functionality
  return Promise.resolve();
}
