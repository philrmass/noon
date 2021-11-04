import { SET_FORECAST, SET_WEATHER } from './constants';

const defaultState = {
  forecast: null,
  summary: '',
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case SET_FORECAST: 
      return {
        ...state,
        forecast: action.value,
      };
    case SET_WEATHER: 
      return {
        ...state,
        summary: action.value,
      };
    default:
      return state;
  }
}
