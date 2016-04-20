import {
  LOGIN,
  LOGOUT,
} from './constants';

export function login(fields) {
  return {
    type: LOGIN,
    payload: {
      username: fields.username.value,
      password: fields.password.value,
    },
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
