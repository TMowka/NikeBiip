import { wrapActionTypes } from '../../../utils';

const types = {
  SIGNIN_PENDING: 'SIGNIN_PENDING',
  SIGNIN_SUCCESS: 'SIGNIN_SUCCESS',

  FAILURE: 'FAILURE'
};

export default wrapActionTypes('auth')(types);