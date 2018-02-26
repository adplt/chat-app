import {setLanguage} from '../actions/common.action';
import {setCurrentLang} from '../../config/language';
import {loginUser} from './firebase.thunk';
import {isEmpty, result} from 'lodash';
import {NavigationActions} from 'react-navigation';

export const setCurrentLanguage = (languageId) => (dispatch) => {
  if (!['id', 'en'].includes(languageId)) { // If asyncstorage contains anything else except 'id' or 'en', use 'id'
    languageId = 'id';
  }
  setCurrentLang(languageId);
  return dispatch(setLanguage(languageId));
};

export const validateSession = (user) => (dispatch, getState) => {
  const {session} = getState();
  return isEmpty(result(session, 'user', {})) ?
    dispatch(loginUser(user['username'], user['password'])) :
    dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'DashboardPage'})
      ]
    }));
};
