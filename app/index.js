import React from 'react';
import {AppRegistry} from 'react-native';
import {wrapObjectInFunction} from './utils/transformer.util';
import {Provider} from 'react-redux';
import {initStore} from './state/store';
import {initializeHTTPInterceptors} from './utils/http.util';
import App from './App.container';
import 'moment/locale/id';

// import {setJSExceptionHandler} from 'react-native-exception-handler';
// import errorHandler from './utils/errorHandler.util';

const store = initStore();
// setJSExceptionHandler(errorHandler);
initializeHTTPInterceptors(store);

// ===========================================
// CONFIG FOR MAKING NETWORK REQUEST SHOW UP
// ON DEBUGGER
// ===========================================
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
GLOBAL.FormData = GLOBAL.originalFormData || GLOBAL.FormData;
// ===========================================

const MyApp = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

export default MyApp;
AppRegistry.registerComponent('chat-app', wrapObjectInFunction(MyApp));
