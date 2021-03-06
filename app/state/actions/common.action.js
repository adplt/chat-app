import {createAction} from 'redux-actions';

// Network connection bar
// Network connection bar action creators
export const HIGHLIGHT_NETWORK_BAR = 'HIGHLIGHT_NETWORK_BAR';
export const RESET_NETWORK_BAR = 'RESET_NETWORK_BAR';

// NETWORK STATUS action constants
export const SET_NETWORK_STATUS = 'SET_NETWORK_STATUS';

// CLEAN REDUX STATE
export const CLEAN_APP_STATE = 'CLEAN_APP_STATE';

// LANGUAGE action constant
export const SET_LANGUAGE = 'SET_LANGUAGE';

export const SHOW_SPINNER = 'SHOW_SPINNER';
export const HIDE_SPINNER = 'HIDE_SPINNER';

/* *********************************************************************************************** */

export const highlightNetworkBar = createAction(HIGHLIGHT_NETWORK_BAR);
export const resetNetworkBar = createAction(RESET_NETWORK_BAR);

// NETWORK STATUS action creators
export const setNetworkStatus = createAction(SET_NETWORK_STATUS);

export const cleanAppState = createAction(CLEAN_APP_STATE);

export const setLanguage = createAction(SET_LANGUAGE);

export const showSpinner = createAction(SHOW_SPINNER);
export const hideSpinner = createAction(HIDE_SPINNER);
