import {theme} from '../../../styles/core.style';
import {fontSizeLarge, fontWeightBold} from '../../../styles/common.style';

export default {
  container: {
    justifyContent: 'center',
    marginTop: 10,
    paddingLeft: 10,
    height: 50,
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

  fileButton: {
    height: 50,
    backgroundColor: theme.inputBackground,
  }
};
