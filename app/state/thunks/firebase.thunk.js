import firebaseService from '../../utils/firebaseService.util';
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

/* SESSION */

export const restoreSession = () => (dispatch) => {
  dispatch(sessionRestoring());
  let unsubscribe = firebaseService.auth().
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
  firebaseService.auth().
    signInWithEmailAndPassword(email, password).
    catch((error) => {
      dispatch(sessionError(error.message));
    });
  let unsubscribe = firebaseService.auth().
    onAuthStateChanged((user) => {
      if (user) {
        dispatch(sessionSuccess(user));
        unsubscribe();
      }
    });
};

export const signupUser = (email, password) => (dispatch) => {
  dispatch(sessionLoading());
  firebaseService.auth().
    createUserWithEmailAndPassword(email, password).
    catch((error) => {
      dispatch(sessionError(error.message));
    });
  let unsubscribe = firebaseService.auth().
    onAuthStateChanged((user) => {
      if (user) {
        dispatch(sessionSuccess(user));
        unsubscribe();
      }
    });
};

export const logoutUser = () => (dispatch) => {
  dispatch(sessionLoading());
  firebaseService.auth().
    signOut().
    then(() => dispatch(sessionLogout())).
    catch((error) => {
      dispatch(sessionError(error.message));
    });
};

/* ************************************************************************************************************ */

/* CHAT */

const FIREBASE_REF_MESSAGES = firebaseService.database().ref('Messages');
const FIREBASE_REF_MESSAGES_LIMIT = 20;

export const loadMessages = () => (dispatch) => {
  FIREBASE_REF_MESSAGES.limitToLast(FIREBASE_REF_MESSAGES_LIMIT).
    on('value', (snapshot) => {
      dispatch(chatLoadMessageSuccess(snapshot.val()));
    }, (errorObject) => {
      dispatch(chatLoadMessageError(errorObject.message));
    });
};

export const sendMessage = (message) => (dispatch) => {
  dispatch(chatMessageLoading());
  let currentUser = firebaseService.auth().currentUser;
  let createdAt = new Date().getTime();
  let chatMessage = {
    text: message,
    createdAt: createdAt,
    user: {
      id: currentUser.uid,
      email: currentUser.email
    }
  };
  FIREBASE_REF_MESSAGES.push().set(chatMessage, (error) => {
    if (error) {
      dispatch(chatMessageError(error.message));
    } else {
      dispatch(chatMessageSuccess());
    }
  });
};
