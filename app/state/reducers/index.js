import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {CLEAN_APP_STATE} from '../actions/common.action';
import Navigator from '../../routes/';

const nav = (state, action) => (
  Navigator.router.getStateForAction(action, state)
);

const appReducers = combineReducers({
  nav,
  form: formReducer,
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
