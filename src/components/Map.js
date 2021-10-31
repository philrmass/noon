import { useEffect, useState } from 'react';

import { addDot, setupMap } from '../utilities/map';
import styles from './Map.module.css';

export default function Map() {
  const id = 'mapId';
  const [text, setText] = useState('');
  const [map, setMap] = useState();
  const [watchId, setWatchId] = useState(null);

  useEffect(() => {
    setMap(setupMap(id));
  }, []);

  const locate = () => {
    if (map && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const pt = [pos.coords.latitude, pos.coords.longitude];
        setText(`Locate [${pt[0].toFixed(6)} ${pt[1].toFixed(6)}] ${(new Date()).toLocaleTimeString()}`);
        map.setView(pt);
        addDot(map, pt, { color: '#08f', fillColor: '#08f' });
      });
    }
  };

  const track = () => {
    if (map && navigator.geolocation) {
      setWatchId(id => {
        if (id) {
          navigator.geolocation.clearWatch(id);
          return null;
        }

        return navigator.geolocation.watchPosition(pos => {
          const pt = [pos.coords.latitude, pos.coords.longitude];
          setText(`Watch [${pt[0].toFixed(6)} ${pt[1].toFixed(6)}] ${(new Date()).toLocaleTimeString()}`);
          map.setView(pt);
          addDot(map, pt);
        });
      });
    }
  };

  return (
    <>
      <div className={styles.controls}>
        <button className='button' onClick={locate}>
          Locate
        </button>
        <button className='button' onClick={track}>
          {watchId ? 'Stop' : 'Track'}
        </button>
        <div className={styles.text}>{text}</div>
      </div>
      <div id={id} className={styles.map}></div>
    </>
  );
}
