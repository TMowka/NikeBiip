import types from './types';

const initialState = {
  user: null,
  pending: false,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNIN_PENDING: {
      return {
        ...state,
        pending: true
      };
    }

    case types.SIGNIN_SUCCESS: {
      return {
        ...state,
        pending: false,
        user: action.payload,
        error: null
      };
    }

    case types.SIGNOUT_SUCCESS: {
      return {
        ...state,
        user: null,
        error: null
      };
    }

    case types.FAILURE: {
      return {
        ...state,
        error: action.payload,
        pending: false
      };
    }

    default: {
      return state;
    }
  }
};

export default authReducer;