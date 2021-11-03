import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getWeather } from '../redux/weatherActions';
import styles from './Weather.module.css';

export default function Weather() {
  const dis = useDispatch();
  const weather = useSelector(state => state.weather.forecast);

  return (
    <div className={styles.weather}>
      <div className={styles.nav}>
        <Link to='/'>Home</Link>
        <Link to='/map'>Map</Link>
      </div>
      <button className='button' onClick={() => dis(getWeather())}>
        Get Weather
      </button>
      <div className={styles.text}>{weather}</div>
    </div>
  );
}
