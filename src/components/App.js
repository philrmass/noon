import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import L from 'leaflet';

import { getWeather } from '../redux/weatherActions';
import styles from './App.module.css';

export default function App() {
  const dis = useDispatch();
  const weather = useSelector(state => state.weather.forecast);
  const version = '0.0.1';

  useEffect(() => {
    console.log('Map setup');
    const map = window.L.map('mapId').setView([51.505, -0.09], 13);
    const tileLayer = getTileLayer(0);
    tileLayer.addTo(map);
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <div className={styles.weather}>
          <button onClick={() => dis(getWeather())}>
            Get Weather
          </button>
          <div>{`Weather: ${weather}`}</div>
        </div>
        <div id='mapId' className={styles.map}></div>
      </div>
      <div className={styles.version}>{version}</div>
    </div>
  );
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
