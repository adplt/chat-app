import {
  CHAT_MESSAGE_LOADING,
  CHAT_MESSAGE_ERROR,
  CHAT_MESSAGE_SUCCESS,
  CHAT_MESSAGE_UPDATE,
  CHAT_LOAD_MESSAGES_SUCCESS,
  CHAT_LOAD_MESSAGES_ERROR
} from '../actions/chat.action';

const initialState = {
  sending: false,
  sendingError: null,
  message: '',
  messages: {},
  loadMessagesError: null
};

const language = (state = initialState, action) => {
  switch (action.type) {
  case CHAT_MESSAGE_LOADING:
    return {...state, sending: true, sendingError: null};
  case CHAT_MESSAGE_ERROR:
    return {...state, sending: true, sendingError: null};
  case CHAT_MESSAGE_SUCCESS:
    return {...state, sending: true, sendingError: null};
  case CHAT_MESSAGE_UPDATE:
    return {...state, sending: true, sendingError: null};
  case CHAT_LOAD_MESSAGES_SUCCESS:
    return {...state, sending: true, sendingError: null};
  case CHAT_LOAD_MESSAGES_ERROR:
    return {...state, sending: true, sendingError: null};
  default:
    return state;
  }
};

export default language;
