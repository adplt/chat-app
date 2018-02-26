import {theme} from '../../../styles/core.style';
import {
  fontSizeMedium,
  fontSizeLarge,
  fontWeightBold,
  textPrimayColor
} from '../../../styles/common.style';

export default {
  input: {
    primary: {
      ...fontSizeMedium,
      padding: 10,
      height: 50,
    },
    secondary: {
      ...fontSizeMedium,
      ...textPrimayColor,
      paddingVertical: 10,
    },
  },
  container: {
    primary: {
      backgroundColor: theme.inputBackground,
      marginBottom: 10,
    },
    secondary: {
      backgroundColor: theme.transparent,
      borderBottomWidth: 1,
      borderBottomColor: theme.textInputBorder,
    },
  },
  leftIcon: {
    color: theme.white,
  },
  rightIcon: {
    color: theme.white,
  },
  label: {
    ...fontSizeLarge,
    ...fontWeightBold,
    marginTop: 10,
    marginBottom: 5,
  },
  disabledInput: {
    backgroundColor: theme.disabledGrey,
  }
};
