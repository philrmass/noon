import L from 'leaflet';

export function addDot(map, pt, options = {}) {
  const allOptions = {
    color: '#f00',
    fillColor: '#f00',
    fillOpacity: 1,
    radius: 1,
    ...options,
  };

  L.circle(pt, allOptions).addTo(map);
}

function getTileLayer(index) {
  switch (index) {
    case 2:
      return L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      });
    case 1:
      return L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
      });
    case 0:
    default:
      return L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        });
  }
}

export function setupMap() {
  const lat = 45.520;
  const long = -122.66553;
  const map = window.L.map('mapId').setView([lat, long], 19);
  const tileLayer = getTileLayer(0);
  tileLayer.addTo(map);

  return map;
}
