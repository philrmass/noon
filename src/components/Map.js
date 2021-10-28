import { useEffect, useState } from 'react';

import { setupMap } from '../utilities/map';
import styles from './Map.module.css';

//??? select tile set
//??? get position, zoom map
export default function Map() {
  const id = 'mapId';
  const [text, setText] = useState('');

  useEffect(() => {
    const map = setupMap(id);
    if ('geolocation' in navigator) {
      setText('geo is ok');
      navigator.geolocation.getCurrentPosition((position) => {
        setText(`geo is [${position.coords.latitude} ${position.coords.longitude}]`);
        const point = [position.coords.latitude, position.coords.longitude];
        map.setView(point, 13, { animation: true });        
      });
    } else {
      setText('geo NOT ok');
    }
    console.log('MAP', map);
  }, []);

  return (
    <>
      <div className={styles.text}>{`[${text}]`}</div>
      <div id={id} className={styles.map}></div>
    </>
  );
}
