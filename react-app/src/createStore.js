import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';

const persistentState = undefined;

const store = createStore(rootReducer, persistentState, applyMiddleware(thunk));

export default store;