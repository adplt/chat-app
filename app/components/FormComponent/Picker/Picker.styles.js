import {theme} from '../../../styles/core.style';
import {fontSizeLarge, fontWeightBold} from '../../../styles/common.style';

export default {
  container: {
    primary: {
      justifyContent: 'center',
      height: 50,
      marginBottom: 10,
      borderWidth: 0.5,
      borderRadius: 3,
      borderColor: theme.black,
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
