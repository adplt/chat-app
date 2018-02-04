import {createAction} from 'redux-actions';

export const CHAT_MESSAGE_LOADING = 'CHAT_MESSAGE_LOADING';
export const CHAT_MESSAGE_ERROR = 'CHAT_MESSAGE_ERROR';
export const CHAT_MESSAGE_SUCCESS = 'CHAT_MESSAGE_SUCCESS';
export const CHAT_MESSAGE_UPDATE = 'CHAT_MESSAGE_UPDATE';
export const CHAT_LOAD_MESSAGES_SUCCESS = 'CHAT_LOAD_MESSAGES_SUCCESS';
export const CHAT_LOAD_MESSAGES_ERROR = 'CHAT_LOAD_MESSAGES_ERROR';

/* *********************************************************************************************** */

export const chatMessageLoading = createAction(CHAT_MESSAGE_LOADING);
export const chatMessageError = createAction(CHAT_MESSAGE_ERROR);
export const chatMessageSuccess = createAction(CHAT_MESSAGE_SUCCESS);
export const chatMessageUpdate = createAction(CHAT_MESSAGE_UPDATE);
export const chatLoadMessageSuccess = createAction(CHAT_LOAD_MESSAGES_SUCCESS);
export const chatLoadMessageError = createAction(CHAT_LOAD_MESSAGES_ERROR);
