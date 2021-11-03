import version from '../version';
import styles from './App.module.css';

import Map from './Map.js';
import Weather from './Weather.js';

export default function App() {
  return (
    <div className={styles.app}>
      <Weather />
      <Map />
      <div className={styles.version}>{version}</div>
    </div>
  );
}
