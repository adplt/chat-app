import {createAction} from 'redux-actions';

export const SESSION_RESTORING = 'SESSION_RESTORING';
export const SESSION_LOADING = 'SESSION_LOADING';
export const SESSION_SUCCESS = 'SESSION_SUCCESS';
export const SESSION_ERROR = 'SESSION_ERROR';
export const SESSION_LOGOUT = 'SESSION_LOGOUT';

/* *********************************************************************************************** */

export const sessionRestoring = createAction(SESSION_RESTORING);
export const sessionLoading = createAction(SESSION_LOADING);
export const sessionSuccess = createAction(SESSION_SUCCESS);
export const sessionError = createAction(SESSION_ERROR);
export const sessionLogout = createAction(SESSION_LOGOUT);
