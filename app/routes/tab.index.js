import React from 'react';
import {TabNavigator} from 'react-navigation';
import LoginPage from '../containers/Login/login.container';
import SignUpPage from '../containers/SignUp/signUp.container';
import * as navHeaders from './navHeader.route';

export default TabNavigator({
  LoginPage: {
    screen: LoginPage,
    navigationOptions: {
      title: 'Login',
    }
  },
  SignUpPage: {
    screen: SignUpPage,
    navigationOptions: {
      title: 'Sign Up',
    }
  },
}, navHeaders.tabBarOptions);
