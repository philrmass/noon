import { combineReducers } from 'redux';

import mapReducer from './mapReducer';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  map: mapReducer,
  weather: weatherReducer,
});

export default rootReducer;

