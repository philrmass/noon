import { put, select, takeEvery } from 'redux-saga/effects';

import { GET_WEATHER } from './constants';
import { setForecast, setWeather } from './weatherActions';

function* getWeatherSaga() {
  try {
    const loc = yield select(state => state.map.location);
    const url = `https://api.weather.gov/points/${loc[0].toFixed(4)},${loc[1].toFixed(4)}`;
    const response = yield fetch(url);
    const json = yield response.json();

    const forecastUrl = json?.properties?.forecast;
    const forecastResponse = yield fetch(forecastUrl);
    const forecastJson = yield forecastResponse.json();

    const hourlyUrl = json?.properties?.forecastHourly;
    const hourlyResponse = yield fetch(hourlyUrl);
    const hourlyJson = yield hourlyResponse.json();

    console.log('H', json?.properties);
    yield put(setForecast(forecastJson));
    //??? add hourly
  } catch (err) {
    console.error('Error getting weather', err);
  }
}

const sagas = [
  takeEvery(GET_WEATHER, getWeatherSaga),
];

export default sagas;
