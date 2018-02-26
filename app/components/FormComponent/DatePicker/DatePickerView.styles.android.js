import {fontSizeMedium, fontSizeSmall, textPrimayColor} from '../../../styles/common.styles';
import {theme} from '../../../styles/core.styles';

export default {
  input: {
    primary: {
      ...fontSizeMedium,
      padding: 10,
    },
    secondary: {
      ...fontSizeMedium,
      ...textPrimayColor,
      paddingVertical: 10,
    }
  },

  textBoxStyle: {
    height: 50,
    justifyContent: 'center',
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
