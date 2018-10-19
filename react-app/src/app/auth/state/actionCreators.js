import types from './types';

export const loginSuccess = user => ({
  type: types.LOGIN_SUCCESS,
  payload: user
});