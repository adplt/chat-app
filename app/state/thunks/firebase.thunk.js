import firebaseService from 'react-native-firebase';
import {
  sessionRestoring,
  sessionSuccess,
  sessionLogout,
  sessionLoading,
  sessionError,
} from '../actions/session.action';
import {
  chatLoadMessageSuccess,
  chatLoadMessageError,
  chatMessageLoading,
  chatMessageError,
  chatMessageSuccess,
} from '../actions/chat.action';

const FIREBASE_REF_MESSAGES = firebaseService.database().ref('Messages');
const FIREBASE_REF_MESSAGES_LIMIT = 20;

/* SESSION */

export const restoreSession = () => (dispatch) => {
  dispatch(sessionRestoring());
  const unsubscribe = firebaseService.auth().
    onAuthStateChanged((user) => {
      if (user) {
        dispatch(sessionSuccess(user));
        unsubscribe();
      } else {
        dispatch(sessionLogout());
        unsubscribe();
      }
    });
};

export const loginUser = (email, password) => (dispatch) => {
  dispatch(sessionLoading());
  firebaseService.auth().signInAndRetrieveDataWithEmailAndPassword(email, password).
    catch((error) => {
      dispatch(sessionError(error.message));
    });
  const unsubscribe = firebaseService.auth().
    onAuthStateChanged((user) => {
      if (user) {
        dispatch(sessionSuccess(user));
        unsubscribe();
      }
    });
};

export const signupUser = (email, password) => (dispatch) => {
  dispatch(sessionLoading());
  firebaseService.auth().createUserWithEmailAndPassword(email, password).
    catch((error) => {
      dispatch(sessionError(error.message));
    });
  const unsubscribe = firebaseService.
    auth().
    onAuthStateChanged((user) => {
      if (user) {
        dispatch(sessionSuccess(user));
        unsubscribe();
      }
    });
};

export const logoutUser = () => (dispatch) => {
  dispatch(sessionLoading());
  return firebaseService.auth().signOut().
    then(() => dispatch(sessionLogout())).
    catch((error) => {
      dispatch(sessionError(error.message));
    });
};

/* ************************************************************************************************************ */

/* CHAT */

export const loadMessages = () => (dispatch) =>
  FIREBASE_REF_MESSAGES.
    limitToLast(FIREBASE_REF_MESSAGES_LIMIT).
    orderByChild('createdAt').
    on('value', (snapshot) => {
      let returnArr = [];
      snapshot.forEach((childSnapshot) => {
        const item = childSnapshot.val();
        item._id = childSnapshot.key;
        returnArr.push(item);
      });
      dispatch(chatLoadMessageSuccess(returnArr));
    }, (errorObject) => {
      dispatch(chatLoadMessageError(errorObject.message));
    });

export const sendMessage = (message) => (dispatch) => {
  dispatch(chatMessageLoading());
  const currentUser = firebaseService.auth().currentUser;
  const chatMessage = {
    text: message,
    createdAt: new Date().getTime(),
    user: {
      _id: currentUser.uid,
      name: currentUser.email,
      avatar: currentUser.uid === 'kMINSAgPNcRMSxSZveZH1MUdHYq2' ?
        'http://jefflau.net/content/images/2016/07/react-logo-1000-transparent.png' :
        'https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png',
    },
  };
  return FIREBASE_REF_MESSAGES.
    push().
    set(chatMessage, (error) => {
      if (error) {
        dispatch(chatMessageError(error.message));
      } else {
        // chatMessage
        dispatch(chatMessageSuccess());
      }
    });
};
