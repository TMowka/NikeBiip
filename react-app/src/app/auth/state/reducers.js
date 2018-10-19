import types from './types';

const initialState = {
  user: null,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload
      };
    }

    default: {
      return state;
    }
  }
};

export default authReducer;