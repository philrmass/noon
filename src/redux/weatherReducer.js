import { SET_WEATHER } from './constants';

const defaultState = {
  forecast: '',
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case SET_WEATHER: 
      return {
        ...state,
        forecast: action.forecast,
      };
    default:
      return state;
  }
}
