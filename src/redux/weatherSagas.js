import { put, takeEvery } from 'redux-saga/effects';

import { GET_WEATHER } from './constants';
import { setWeather } from './weatherActions';

function* getWeatherSaga() {
  try {
    const url = 'https://api.weather.gov/points/43.615,-84.247';
    const response = yield fetch(url);
    const json = yield response.json();

    const forecastUrl = json?.properties?.forecast;
    const forecastResponse = yield fetch(forecastUrl);
    const forecastJson = yield forecastResponse.json();

    const period = forecastJson?.properties?.periods[0];
    const forecast = period?.detailedForecast;

    yield put(setWeather(forecast));
  } catch (err) {
    console.error('Error getting weather', err);
  }
}

const sagas = [
  takeEvery(GET_WEATHER, getWeatherSaga),
];

export default sagas;
