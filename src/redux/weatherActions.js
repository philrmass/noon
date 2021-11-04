import {
  GET_WEATHER,
  SET_FORECAST,
  SET_WEATHER,
} from './constants';

export function getWeather() {
  return { type: GET_WEATHER };
}

export function setForecast(value) {
  return { type: SET_FORECAST, value };
}

export function setWeather(value) {
  return { type: SET_WEATHER, value };
}
