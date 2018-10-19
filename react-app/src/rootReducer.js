import { combineReducers } from 'redux';

import appReducer from './app/state/reducers';
import authReducer from './app/auth/state/reducers';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer
});

export default rootReducer;