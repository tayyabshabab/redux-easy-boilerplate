import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { items } from './items';
import { auth } from './auth';

const rootReducer = combineReducers({
  form: formReducer,
  /* your reducers */
  items,
  auth,
});

export default rootReducer;
