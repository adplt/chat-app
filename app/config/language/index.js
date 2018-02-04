import English from './English';
import Indonesia from './Indonesia';
import result from 'lodash/result';
import {set, storageKeys} from '../../utils/storage.util';

const current = {
  id: 'id'
};

const languageMap = {
  en: {id: 'en', label: 'English', translation: English},
  id: {id: 'id', label: 'Indonesia', translation: Indonesia}
};

module.exports = {
  get language () {
    const selectedLangugage = languageMap[result(current, 'id', 'id')];
    return selectedLangugage.translation;
  },
  setCurrentLang (languageId) {
    set(storageKeys['LANGUAGE'], languageId);
    current.id = languageId;
    return languageId;
  },
  languageMap
};
