import {fontSizeMedium, fontSizeSmall, textPrimayColor} from '../../../styles/common.styles';
import {theme} from '../../../styles/core.styles';

export default {
  input: {
    primary: {
      ...fontSizeSmall,
    },
    secondary: {
      ...fontSizeMedium,
      ...textPrimayColor,
      paddingVertical: 10,
    }
  },
  textStyle: {
    ...fontSizeSmall,
  },
  placeholder: {
    primary: {
      ...fontSizeSmall,
      color: theme.placeholderTextColor,
    },
    secondary: {
      ...fontSizeMedium,
      color: theme.placeholderTextColor,
    },
  },
};
