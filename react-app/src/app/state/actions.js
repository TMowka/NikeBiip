import {
  initializeSuccess, failure
} from './actionCreators';
import firebase from '../../libs/firebase';

export const initialize = () => {
  return dispatch => {
    try {
      firebase.initialize();

      dispatch(initializeSuccess(firebase.auth, firebase.db));
    } catch (error) {
      console.warn('[app - actions]', error);
      dispatch(failure(error));
    }
  };
};