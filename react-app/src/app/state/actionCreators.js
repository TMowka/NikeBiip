import types from './types';

export const initializeSuccess = (auth, db) => ({
  type: types.INITIALIZE_SUCCESS,
  payload: { auth, db }
});

export const resizeSuccess = (width, height) => ({
  type: types.RESIZE_SUCCESS,
  payload: { width, height }
});

export const failure = error => ({
  type: types.FAILURE,
  payload: error
});