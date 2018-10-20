import { wrapActionTypes } from '../../utils';

const types = {
  INITIALIZE_SUCCESS: 'INITIALIZE_SUCCESS',
  RESIZE_SUCCESS: 'RESIZE_SUCCESS',

  FAILURE: 'FAILURE'
};

export default wrapActionTypes('app')(types);