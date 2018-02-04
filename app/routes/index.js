import React from 'react';
import {StackNavigator} from 'react-navigation';
import MainPage from '../pages/Main/main.page';

export default StackNavigator({
  MainPage: {
    screen: MainPage
  },
}, {
  navigationOptions: {
    // header: null,
    gesturesEnabled: false,
  }
});
