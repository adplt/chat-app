import {theme} from '../../../styles/core.style';
import {fontSizeMedium, fontWeightMedium} from '../../../styles/common.style';

export default {
  container: {
    primary: {
      backgroundColor: theme.inputBackground,
      marginBottom: 10,
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
    ...fontSizeMedium,
    ...fontWeightMedium,
    marginTop: 10,
    marginBottom: 5,
  },
  disabledInput: {
    backgroundColor: theme.disabledGrey,
  }
};
