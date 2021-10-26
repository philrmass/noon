import { GET_WEATHER, SET_WEATHER } from './constants';

export function getWeather() {
  return { type: GET_WEATHER };
}

export function setWeather(forecast) {
  return { type: SET_WEATHER, forecast };
}
