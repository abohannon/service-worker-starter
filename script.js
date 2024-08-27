let registration = null;

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js', { scope: './' })
      .then((res) => {
        console.log('Service Worker registered');
        registration = res;
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  }
}

function unregisterServiceWorker() {
  if (registration) {
    registration.unregister()
      .then(() => {
        console.log('Service Worker unregistered');
      })
      .catch((error) => {
        console.error('Service Worker unregistration failed:', error);
      });
  }
}

window.addEventListener('click', () => {
  fetch('./pr-open.png')
    .then(res => console.log('From script.js:', res))
})

registerServiceWorker();
