import types from './types';

const initialState = {
  auth: null,
  database: null,
  error: null
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INITIALIZE_SUCCESS: {
      return {
        ...state,
        auth: action.payload.auth,
        database: action.payload.db,
        error: null
      };
    }

    case types.FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
};

export default appReducer;