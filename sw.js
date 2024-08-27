self.addEventListener('install', (event) => {
  console.log('Service worker installed')

  event.waitUntil(
    caches.open('v1')
      .then(cache => {
        cache.addAll([
          './index.html',
          './script.js',
          './pr-open.png',
        ])
        console.log('Assets cached')
      })
      .catch(err => console.error('Could not cache:', err))
  )
});
