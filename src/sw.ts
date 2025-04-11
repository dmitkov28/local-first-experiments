declare const self: ServiceWorkerGlobalScope;

import { precacheAndRoute } from "workbox-precaching";

// Use the injected manifest
precacheAndRoute(self.__WB_MANIFEST);

// src/sw.ts
self.addEventListener('install', (_: ExtendableEvent) => {
  console.log('Hello from the service worker!');
  self.skipWaiting();
});

self.addEventListener('activate', (event: ExtendableEvent) => {
  event.waitUntil(self.clients.claim());
});