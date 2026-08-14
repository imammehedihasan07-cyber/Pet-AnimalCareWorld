const CACHE_NAME = 'petcare-v2';

// Install Event: Cache essential assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                '/',
                '/en/',
                '/bn/',
                '/hi/',
                '/assets/css/variables.css',
                '/assets/css/global.css',
                '/assets/css/header.css',
                '/assets/css/footer.css',
                '/assets/css/responsive.css',
                '/assets/css/hero.css',
                '/assets/js/app.js',
                '/assets/js/language.js',
                '/assets/js/navigation.js',
                '/assets/js/search-index.js'
            ]);
        })
    );
    self.skipWaiting();
});

// Activate Event: Clear old outdated caches safely
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('Clearing old cache:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch Event: Network-first or Stale-While-Revalidate strategy for HTML, Cache-first for assets
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // Fetch from network first to keep content fresh, fallback to cache if offline
            const fetchPromise = fetch(event.request).then((networkResponse) => {
                // Optional: Update cache dynamically with new network responses if needed
                return networkResponse;
            }).catch(() => {
                return cachedResponse;
            });

            return cachedResponse || fetchPromise;
        })
    );
});