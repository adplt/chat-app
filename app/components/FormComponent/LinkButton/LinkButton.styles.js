import {fontSizeSmall, fontWeightBold} from '../../../styles/common.style';
import {theme} from '../../../styles/core.style';

export default {
  textStyle: {
    ...fontSizeSmall,
    ...fontWeightBold,
    color: theme.secondary,
  }
};
