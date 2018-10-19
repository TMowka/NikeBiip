import types from './types';

export const initializeSuccess = (auth, db) => ({
  type: types.INITIALIZE_SUCCESS,
  payload: { auth, db }
});

export const failure = error => ({
  type: types.FAILURE,
  payload: error
});