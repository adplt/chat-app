import React from 'react';
import {StackNavigator} from 'react-navigation';
import DashboardPage from '../containers/Dashboard/dashboard.container';
import dashboardPage from './tab.index';
import * as navHeaders from './navHeader.route';

export default StackNavigator({
  BoardingPage: {
    screen: dashboardPage,
    navigationOptions: navHeaders.headerNavBoarding,
  },
  DashboardPage: {
    screen: DashboardPage,
    navigationOptions: navHeaders.headerNavDashboard,
  },
}, {
  navigationOptions: {
    // header: null,
    gesturesEnabled: false,
  }
});
