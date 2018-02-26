import {theme} from '../../../styles/core.style';
import {
  containerRowCenter,
  fontSizeNormal,
  textLight,
} from '../../../styles/common.style';

const button = {
  ...containerRowCenter,
  borderRadius: 2,
  paddingHorizontal: 15,
  height: 56,
};

const buttonText = {
  ...fontSizeNormal,
  ...textLight,
  fontWeight: theme.fontWeightBold,
};

export default {
  container: {
    ...containerRowCenter,
    backgroundColor: theme.buttonBg,
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 56
  },
  buttonPrimary: {
    ...button,
    backgroundColor: theme.primary,
  },
  buttonSecondary: {
    ...button,
    backgroundColor: theme.secondary,
  },
  buttonDisabled: {
    backgroundColor: theme.buttonDisabledBg,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56
  },
  buttonTextPrimary: {
    ...buttonText,
    color: theme.secondary,
  },
  buttonTextSecondary: {
    ...buttonText,
    color: theme.primary,
  },
  buttonTextDisabled: {
    ...fontSizeNormal,
    ...textLight,
    fontWeight: theme.fontWeightBold,
  },
};
