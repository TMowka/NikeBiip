import {
  signInPending, signInSuccess, signOutSuccess, failure
} from './actionCreators';

export const signIn = (email, password/*, rememberMe*/) => {
  return async (dispatch, getState) => {
    dispatch(signInPending());
    const app = getState().app;

    try {
      const response = await app.auth.signInWithEmailAndPassword(email, password);
      dispatch(signInSuccess(response.user));
    } catch (error) {
      console.warn('[auth - actions]', error);
      dispatch(failure(error));
    }
  };
};

export const signOut = () => {
  return dispatch => {
    try {
      dispatch(signOutSuccess());
    } catch (error) {
      console.warn('[auth - actions]', error);
      dispatch(failure(error));
    }
  };
};