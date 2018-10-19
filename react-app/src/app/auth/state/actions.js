import {
  loginSuccess
} from './actionCreators';

export const autoLogin = () => {
  return dispatch => {
    console.log('autoLogin');
    dispatch(loginSuccess);
  };
};