import {theme} from '../styles/core.style';

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

export const GoalsNavConfig = () => ({
  headerTintColor: theme.contrast,
  headerStyle: {
    ...navigationOptions.headerBrand.headerStyle
  },
  title: 'Chat Bot - Botria',
});
