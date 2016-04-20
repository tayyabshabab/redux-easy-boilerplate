import { browserHistory } from 'react-router';

/**
 * Forwards the user
 * @param {string} location The route the user should be forwarded to
 */
export function redirectTo(location) {
  console.log('redirectTo(' + location + ')');
  browserHistory.push(location);
}
