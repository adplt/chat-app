import React from 'react';
import {View, Image, Text} from 'react-native';
import {theme} from '../styles/core.style';
// import translations from '../../../../i18n';
// import {IconButton} from '../components/FormComponent';

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

// <IconButton name={'ios-cart'} size={32} />

export const headerNavBoarding = (navigation) => ({
  headerTintColor: theme.contrast,
  headerStyle: {...navigationOptions.headerBrand.headerStyle},
  header: <View style={{height: 60, marginTop: 20, justifyContent: 'center'}}>
    <Text style={{color: '#FFFFFF', textAlign: 'center'}}>{navigation.navigationOptions.title}</Text>
    <View style={{alignItems: 'flex-end'}} />
  </View>
});

export const headerNavDashboard = (navigation) => ({
  headerTintColor: theme.contrast,
  headerStyle: {...navigationOptions.headerBrand.headerStyle},
  header: <View style={{height: 60, marginTop: 20, justifyContent: 'center'}}>
    <Text style={{color: '#FFFFFF', textAlign: 'center'}}>{navigation.navigationOptions.title}</Text>
  </View>
});

export const loginNav = () => ({
  tabBarLabel: 'Login', // translations.t('login'),
  tabBarIcon: <Image
    source={{uri: 'https://firebase.google.com/_static/images/firebase/touchicon-180.png'}}
    style={{tintColor: '#FFFFFF'}}
  />,
});
