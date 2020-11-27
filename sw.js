//installing service worker

self.addEventListener('install', evt => {
    console.log('Service Worker has been installed');
} );

//Activate service worker
self.addEventListener('activate', evt => {
    console.log('Service Worker has been Activated');
} );