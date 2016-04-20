import {
  LOGIN,
  LOGOUT,
} from '../actions/constants';

const initialState = {
  loggedIn: false,
  user: {
    id: null,
    name: '',
  },
};

export function auth(state = initialState, action) {
  switch (action.type) {
  case LOGIN:
    return {
      loggedIn: true,
      user: {
        id: 1,
        name: action.payload.username,
      },
    };
  case LOGOUT:
    return {
      loggedIn: false,
      user: {
        id: null,
        name: '',
      },
    };
  default:
    return state;
  }
}
