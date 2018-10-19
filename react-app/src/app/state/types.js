import { wrapActionTypes } from '../../utils';

const types = {
  INITIALIZE_SUCCESS: 'INITIALIZE_SUCCESS',

  FAILURE: 'FAILURE'
};

export default wrapActionTypes('app')(types);