import React from 'react';
import {StackNavigator} from 'react-navigation';
import MainPage from '../containers/Main/main.container';
import * as navHeaders from './navHeader.route';

export default StackNavigator({
  MainPage: {
    screen: MainPage,
    navigationOptions: navHeaders.GoalsNavConfig
  },
}, {
  navigationOptions: {
    // header: null,
    gesturesEnabled: false,
  }
});
