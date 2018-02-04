import {SET_NETWORK_STATUS} from '../actions/common.action';

const defaultState = {isConnected: true};
const networkStatus = (state = defaultState, action) => {
  switch (action.type) {
  case SET_NETWORK_STATUS:
    return {isConnected: action.payload};
  default:
    return state;
  }
};

export default networkStatus;
