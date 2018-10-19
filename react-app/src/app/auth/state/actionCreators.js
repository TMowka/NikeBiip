import types from './types';

export const signInPending = () => ({
  type: types.SIGNIN_PENDING
});

export const signInSuccess = user => ({
  type: types.SIGNIN_SUCCESS,
  payload: user
});

export const failure = error => ({
  type: types.FAILURE,
  payload: error
});