import { UPDATE_LOCATION, SET_LOCATION } from './constants';

export function setLocation(location) {
  return { type: SET_LOCATION, location };
}

export function updateLocation(location) {
  return { type: UPDATE_LOCATION, location };
}
