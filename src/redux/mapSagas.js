import { put, takeEvery } from 'redux-saga/effects';

import { UPDATE_LOCATION } from './constants';
import { setLocation } from './mapActions';

function* updateLocationSaga(action) {
  try {
    //??? add or move location marker on map

    console.warn('updateLoc', action.location);
    yield put(setLocation(action.location));
  } catch (err) {
    console.error('Error updating location', err);
  }
}

const sagas = [
  takeEvery(UPDATE_LOCATION, updateLocationSaga),
];

export default sagas;
