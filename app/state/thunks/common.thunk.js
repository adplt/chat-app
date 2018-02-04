import {setLanguage} from '../actions/common.action';
import {setCurrentLang} from '../../config/language';

export const setCurrentLanguage = (languageId) => (dispatch) => {
  if (!['id', 'en'].includes(languageId)) { // If asyncstorage contains anything else except 'id' or 'en', use 'id'
    languageId = 'id';
  }
  setCurrentLang(languageId);
  return dispatch(setLanguage(languageId));
};
