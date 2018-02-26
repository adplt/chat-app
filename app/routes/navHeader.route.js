import React from 'react';
import {Image} from 'react-native';
import {theme} from '../styles/core.style';
// import translations from '../../../../i18n';

export const navigationOptions = {
  headerBrand: {
    headerTintColor: theme.contrast,
    headerStyle: {
      backgroundColor: theme.brand,
      borderBottomWidth: 0,
      shadowColor: theme.contrast,
      elevation: 0
    },
    tabBarVisible: {visible: false}
  },
};

export const tabBarOptions = {
  tabBarOptions: {
    swipeEnabled: true,
    activeTintColor: '#88cc88',
    inactiveTintColor: '#aaaaaa',
    showIcon: true,
    scrollEnabled: false,
    indicatorStyle: {
      borderTopColor: '#000000',
      borderTopWidth: 2,
    },
    style: {
      backgroundColor: '#ffffff',
    },
    labelStyle: {
      fontSize: 12,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
  },
  lazyLoad: true,
  tabBarPosition: 'bottom'
};

export const headerNavBoarding = () => ({
  headerTintColor: theme.contrast,
  headerStyle: {...navigationOptions.headerBrand.headerStyle},
  title: 'Chat Bot - Botria',

});

export const headerNavDashboard = () => ({
  headerTintColor: theme.contrast,
  headerStyle: {...navigationOptions.headerBrand.headerStyle},
  title: 'Chat Bot - Botria',

});

export const loginNav = () => ({
  tabBarLabel: 'Login', // translations.t('login'),
  tabBarIcon: <Image
    source={{uri: 'https://firebase.google.com/_static/images/firebase/touchicon-180.png'}}
    style={{tintColor: '#FFFFFF'}}
  />,
});
