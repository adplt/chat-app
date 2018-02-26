import {theme} from '../../../styles/core.styles';
import {
  fontSizeMedium, fontWeightMedium,
  textPrimayColor
} from '../../../styles/common.styles';

export default {
  input: {
    primary: {
      ...fontSizeMedium,
      padding: 10,
      height: 50,
      borderWidth: 0.25,
      borderRadius: 3,
      borderColor: theme.grey,
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
    ...fontSizeMedium,
    ...fontWeightMedium,
    marginTop: 10,
    marginBottom: 5,
  },
  disabledInput: {
    backgroundColor: theme.disabledGrey,
  }
};
