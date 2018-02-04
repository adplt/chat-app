import {
  SESSION_RESTORING,
  SESSION_LOADING,
  SESSION_SUCCESS,
  SESSION_ERROR,
  SESSION_LOGOUT,
} from '../actions/session.action';

const initialState = {
  restoring: false,
  loading: false,
  user: null,
  error: null
};

const session = (state = initialState, action) => {
  switch (action.type) {
  case SESSION_RESTORING:
    return {...state, restoring: true};
  case SESSION_LOADING:
    return {...state, restoring: false, loading: true, error: null};
  case SESSION_SUCCESS: {
    const {displayName, email, phoneNumber, photoURL, metadata, uid} = action.payload;
    return {restoring: false, loading: false, user: {
      displayName,
      email,
      phoneNumber,
      photoURL,
      metadata,
      uid,
    }, error: null};
  }
  case SESSION_ERROR:
    return {restoring: false, loading: false, user: null, error: action.payload};
  case SESSION_LOGOUT:
    return initialState;
  default:
    return state;
  }
};

export default session;
