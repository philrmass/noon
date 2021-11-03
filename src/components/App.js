import { Redirect, Route, Switch } from 'react-router-dom';

import version from '../version';
import styles from './App.module.css';

import Home from './Home.js';
import Map from './Map.js';
import Weather from './Weather.js';

export default function App() {
  return (
    <main className={styles.app}>
      <Switch>
        <Route path='/weather'><Weather /></Route>
        <Route path='/map'><Map /></Route>
        <Route exact path='/'><Home /></Route>
        <Redirect to='/'/>
      </Switch>
      <div className={styles.version}>{version}</div>
    </main>
  );
}
