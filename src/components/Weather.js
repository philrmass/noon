import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cln from 'classnames';

import { getWeather } from '../redux/weatherActions';
import styles from './Weather.module.css';

export default function Weather() {
  const [openNumber, setOpenNumber] = useState(null);
  const dis = useDispatch();
  const forecast = useSelector(state => state.weather.forecast);
  const periods = forecast?.properties?.periods ?? [];

  const buildPeriod = (per) => {
    const isOpen = per.number === openNumber;
    const classes = cln({
      [styles.period]: true,
      [styles.night]: !per.isDaytime,
    });

    return (
      <div
        key={per.number}
        className={classes}
        onClick={() => setOpenNumber(i => i === per.number ? null : per.number)}
      >
        <div>
          <div className={styles.name}>{per.name}</div>
          <div className={styles.temp}>
            {`${per.temperature} ${per.temperatureUnit}`}
          </div>
        </div>
        {!isOpen &&
        <div>{per.shortForecast}</div>
        }
        {isOpen &&
        <div className={styles.forecast}>{per.detailedForecast}</div>
        }
      </div>
    );
  };

  return (
    <div className={styles.weather}>
      <div className={styles.nav}>
        <Link to='/'>Home</Link>
        <Link to='/map'>Map</Link>
      </div>
      <button className='button' onClick={() => dis(getWeather())}>
        Get Weather
      </button>
      <div className={styles.periods}>
        {periods.map(period => buildPeriod(period))}
      </div>
    </div>
  );
}
