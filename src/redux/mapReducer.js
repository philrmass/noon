import { SET_LOCATION } from './constants';

const defaultState = {
  location: [45.4782, -122.6454],
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case SET_LOCATION: 
      return {
        ...state,
        location: action.location,
      };
    default:
      return state;
  }
}
