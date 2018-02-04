/** Currently using AsyncStorage , we may end up  using Realm **/
import {AsyncStorage} from 'react-native';

export const storageKeys = {
  'LANGUAGE': 'language',
  'USER_DATA': 'userData',
};
// methods for storing and retrieving objects
export const set = (key, value) => AsyncStorage.setItem(key, JSON.stringify(value));

export const get = (key) => AsyncStorage.getItem(key).then((value) => JSON.parse(value));

export const remove = (key) => AsyncStorage.removeItem(key);
