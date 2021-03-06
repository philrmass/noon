import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { addDot, setupMap } from '../utilities/map';
import { updateLocation } from '../redux/mapActions';
import styles from './Map.module.css';

export default function Map() {
  const id = 'mapId';
  const [text, setText] = useState('');
  const [map, setMap] = useState();
  const [watchId, setWatchId] = useState(null);
  const dis = useDispatch();

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
        dis(updateLocation(pt));
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
          dis(updateLocation(pt));
        });
      });
    }
  };

  return (
    <>
      <div className={styles.nav}>
        <Link to='/'>Home</Link>
        <Link to='/weather'>Weather</Link>
      </div>
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
