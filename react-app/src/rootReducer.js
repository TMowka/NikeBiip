import { combineReducers } from 'redux';

import authReducer from './app/auth/state/reducers';

const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;