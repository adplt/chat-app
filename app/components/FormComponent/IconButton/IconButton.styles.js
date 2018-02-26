import {fontSizeSmall, textPrimayColor} from '../../../styles/common.style';
import {theme} from '../../../styles/core.style';

export default {
  container: {
    flexDirection: 'row',
  },

  buttonText: {
    ...fontSizeSmall,
    ...textPrimayColor,
    letterSpacing: 1.5,
    paddingLeft: 5,
  },

  icon: {
    color: theme.white,
  }
};
