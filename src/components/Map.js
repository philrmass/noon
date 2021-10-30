import { useEffect, useState } from 'react';
import L from 'leaflet';

import { setupMap } from '../utilities/map';
import styles from './Map.module.css';

//??? select tile set
//??? get position, zoom map
export default function Map() {
  const id = 'mapId';
  const [text, setText] = useState('');
  const [map, setMap] = useState();

  useEffect(() => {
    setMap(setupMap(id));
  }, []);

  const locate = () => {
    /*
    const pt = [45, -122];
    map.setView(pt);
    //const marker = L.marker(pt).addTo(map);
    var circle = L.circle(pt, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 5,
    }).addTo(map);
    setText(`Locate to [${pt[0]} ${pt[1]}] (${typeof circle})`);
    */

    if (map && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const pt = [pos.coords.latitude, pos.coords.longitude];

        map.setView(pt);
        var marker = L.circle(pt, {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: 5,
        }).addTo(map);
        //const marker = L.marker(pt).addTo(map);
        setText(`Locate to [${pt[0]} ${pt[1]}] (${typeof marker})`);
      });
    }
  };

  return (
    <>
      <div className={styles.controls}>
        <button className='button' onClick={locate}>
          Locate
        </button>
        <div className={styles.text}>{`[${text}]`}</div>
      </div>
      <div id={id} className={styles.map}></div>
    </>
  );
}
