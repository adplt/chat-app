import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {CLEAN_APP_STATE} from '../actions/common.action';
import Navigator from '../../routes/';
import spinner from './spinner.reducer';
import networkStatus from './networkStatus.reducer';
import language from './language.reducer';
import highlightText from './highlightText.reducer';
import chat from './chat.reducer';
import session from './session.reducer';

const nav = (state, action) => (
  Navigator.router.getStateForAction(action, state)
);

const appReducers = combineReducers({
  nav,
  form: formReducer,
  spinner,
  networkStatus,
  currentLanguage: language,
  highlightText,
  chat,
  session,
});


const rootReducer = (state, action) => {
  if (action.type.startsWith('Navigation/')) {
    const {routeName} = action;
    const lastRoute = state.nav.routes[state.nav.routes.length - 1];
    if (routeName === lastRoute.routeName) {
      return state;
    }
  }
  if (action.type === CLEAN_APP_STATE) {
    return appReducers({
      currentLanguage: state.currentLanguage,
      networkStatus: state.networkStatus,
      nav: state.nav,
    }, action);
  }
  return appReducers(state, action);
};

export default rootReducer;
