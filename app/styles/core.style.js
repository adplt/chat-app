import {Platform} from 'react-native';

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;

let theme = {
  // Color Variables
  white: '#FFFFFF',
  black: '#000000',
  grey: '#ccc',
  red: '#ED1D25',
  paleRed: '#DE5050',
  rouge: '#98252b',
  buttonDisabledBg: '#BDBDBD',
  lightGrey: 'rgba(43, 43, 43, 0.6)',
  green: '#4ed07d',
  barBG: '#424242',
  barButton: '#4DD0E1',
  starColor: '#f8e81c',

  // Named Color Variables
  cargBg: '#FA4560',
  contrast: '#ffffff',
  whiteGrey: '#f9f9f9',
  light: '#d8ecf2',
  buttonTextColor: '#ffffff',
  disabledGrey: '#cac6c6',
  containerGrey: 'rgba(0,0,0, 0.09)',
  borderGrey: '#979797',
  cardGrey: 'rgba(201, 198, 198, 0.2)',
  disabledText: 'rgba(0, 0, 0, 0.3)',
  cardVerticalSpacing: 10,
  overlayBackground: 'rgba(0, 0, 0, 0.75)',
  primaryUnHighlighted: '#BDBDBD',
  text: '#000',
  header: '#ED1D25',
  textLightGrey: '#666',
  background: '#FFF',
  buttonBg: '#ED1D25',
  errorColor: '#F00',
  primary: '#392d2c',
  secondary: '#F5F5F5',
  tertiary: '#392d2c',
  brand: '#3F51B5',
  budgetText: '#00a6b8',
  endPointDot: '#00a6b8',
  activeBackgroundColor: '#e7e6e6',
  inputBackground: '#f0f1f1',
  buttonPickerColor: '#007AFF',
  textGrey: '#9E9E9E',
  transparent: 'transparent',
  dotColor: '#dadada',
  activeDotColor: '#646464',
  lineSeparatorColor: '#e3e9ec',
  landingText: '#383838',
  engagementBackground: 'rgba(216, 236, 242, 0.8)',
  timelineBorder: '#979797',
  textInputBorder: '#979797',
  imageOverlay: 'rgba(0, 0, 0, 0.3)',
  tabBarTopColor: 'rgba(0, 0, 0, .2)',
  tabBarBackgroundColor: '#f4f4f4',
  darkWhite: '#f4f4f4',
  iconCameraBackground: '#d8d8d8',
  bannerSearchPlaceholder: 'rgba(216, 236, 242, 0.7)',
  // fonSizes
  fontSizeXS: Platform.OS === 'ios' ? 11 : 11,
  fontSizeSmall: Platform.OS === 'ios' ? 14 : 12,
  fontSizeNormal: Platform.OS === 'ios' ? 17 : 14,
  fontSizeMedium: Platform.OS === 'ios' ? 19 : 16,
  fontSizeLarge: Platform.OS === 'ios' ? 21 : 18,
  fontSizeXL: Platform.OS === 'ios' ? 24 : 21,
  fontSizeXXL: Platform.OS === 'ios' ? 39 : 36,
  fontWeightLight: Platform.OS === 'ios' ? '400' : '300',
  fontWeightRegular: Platform.OS === 'ios' ? '500' : '400',
  fontWeightMedium: Platform.OS === 'ios' ? '600' : '500',
  fontWeightBold: Platform.OS === 'ios' ? '800' : '700',
  fontWeightExtraBold: Platform.OS === 'ios' ? '900' : '800',
  placeholderTextColor: '#878787',
  bottomBorderHighlighted: 2,
  bottomBorderRegular: 1,
  padding: 30,
  paddingSpace: 5,

  spinnerSizeLarge: Platform.OS === 'ios' ? 'large' : 80
};

const textBasic = {
  color: theme.text,
  fontWeight: theme.fontWeightRegular,
  fontSize: theme.fontSizeNormal
};

const textStyles = {
  textXS: {
    ...textBasic,
    fontSize: theme.fontSizeXS,
  },

  textSM: {
    ...textBasic,
    fontSize: theme.fontSizeSmall,
  },

  text: {
    ...textBasic,
  },

  textMD: {
    ...textBasic,
    fontSize: theme.fontSizeMedium
  },

  textLG: {
    ...textBasic,
    fontSize: theme.fontSizeLarge
  },

  textXL: {
    ...textBasic,
    fontSize: theme.fontSizeXL
  },

  textXXL: {
    ...textBasic,
    fontSize: theme.fontSizeXXL
  }
};

const headerMaxHeight = 191;
const HEADER_MAX_HEIGHT = 191;

export {
  theme,
  textStyles,
  headerMaxHeight,
  APPBAR_HEIGHT,
  STATUSBAR_HEIGHT,
  TITLE_OFFSET,
  HEADER_MAX_HEIGHT,
};
