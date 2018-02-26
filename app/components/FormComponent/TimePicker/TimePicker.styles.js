import {theme} from '../../../styles/core.style';
import {fontSizeLarge, fontWeightBold} from '../../../styles/common.style';

export default {
  container: {
    primary: {
      backgroundColor: theme.inputBackground,
    },
    secondary: {
      backgroundColor: theme.transparent,
      borderBottomWidth: 1,
      borderBottomColor: theme.textInputBorder,
    }
  },
  iosPickerBackgroundColor: {
    backgroundColor: theme.white
  },
  label: {
    ...fontSizeLarge,
    ...fontWeightBold,
    marginTop: 10,
    marginBottom: 5,
  },
};
