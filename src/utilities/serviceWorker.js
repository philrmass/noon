const appName = 'noon';

function isDev() {
  return window.location.hostname === 'localhost';
}

function getServiceWorkerUrl() {
  const base = isDev() ? '/' : `/${appName}/`;
  return `${base}serviceWorker.js`;
}

export function registerServiceWorker() {
  if (navigator.serviceWorker) {
    const url = getServiceWorkerUrl();
    navigator.serviceWorker.register(url).then((reg) => {
      reg.onupdatefound = () => {
        const sw = reg.installing;
        if (sw !== null) {
          sw.onstatechange = () => {
          };
          sw.onupdatefound = () => {
          };
          sw.oncontrollerchange = () => {
          };
        }
      };
    }).catch(() => {
    });
  }
}
