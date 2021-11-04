import { all } from 'redux-saga/effects';

import mapSagas from './mapSagas';
import weatherSagas from './weatherSagas';

export default function* rootSaga() {
  yield all([
    ...mapSagas,
    ...weatherSagas,
  ]);
}
