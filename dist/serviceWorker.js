const appName = 'noon';

function isDev() {
  return self.location.hostname === 'localhost';
}

function filePaths(files) {
  const base = isDev() ? '/' : `/${appName}/`;
  return files.map((file) => `${base}${file}`);
}

function getCacheName() {
  return `${appName}-cache`;
}

function getCacheFiles() {
  const cacheFiles = [
    '',
    'favicon.ico',
    'logo192.png',
    'logo512.png',
    'logoApple.png',
    'manifest.json',
  ];
  return filePaths(cacheFiles);
}

self.oninstall = (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(getCacheName());
    const files = getCacheFiles();
    return cache.addAll(files);
  })());
};

self.onfetch = (event) => {
  event.respondWith((async () => {
    const cache = await caches.open(getCacheName());
    const cached = await cache.match(event.request);
    if (cached) {
      return cached;
    }
    //??? save fetched file to cache
    return fetch(event.request);
  })());
};

self.onmessage = () => {
  //caches.delete(getCacheName());
};
