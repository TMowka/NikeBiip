import types from './types';

const initialState = {
  auth: null,
  database: null,
  window: {
    width: 800,
    height: 600
  },
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

    case types.RESIZE_SUCCESS: {
      return {
        ...state,
        window: {
          width: action.payload.width,
          height: action.payload.height
        }
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