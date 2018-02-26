// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import {ActivityIndicator} from 'react-native';
// import DashboardPage from '../containers/Dashboard/dashboard.container';
// import LoginPage from './Login/login.page';
// // import styles from '../styles/core.style';
// import {noop} from 'lodash';
//
// export default class App extends Component {
//
//   static propTypes = {
//     restoring: PropTypes.bool.isRequired,
//     logged: PropTypes.bool.isRequired,
//     loading: PropTypes.bool.isRequired,
//     error: PropTypes.string,
//     chat: PropTypes.object,
//     session: PropTypes.object,
//     loadMessages: PropTypes.func,
//     sendMessage: PropTypes.func,
//     handleSubmit: PropTypes.func,
//   };
//
//   render () {
//     const {
//       restoring,
//       logged,
//       loading,
//       error,
//       chat,
//       session,
//       loadMessages,
//       sendMessage,
//       handleSubmit = noop,
//     } = this.props;
//     if (restoring) return <ActivityIndicator style={{}} />; // styles.activityIndicator
//     else {
//       if (logged) return <DashboardPage
//         chat={chat}
//         session={session}
//         loadMessages={loadMessages}
//         sendMessage={sendMessage}
//       />;
//       else return <LoginPage
//         loading={loading}
//         error={error}
//         handleSubmit={handleSubmit}
//       />;
//     }
//   }
// }
