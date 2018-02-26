import {theme} from '../../../styles/core.style';
import {viewPortWidth} from '../../../utils/device.util';
import {
  fontWeightBold,
  fontSizeMedium,
  textPrimayColor
} from '../../../styles/common.style';

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
    },
  },
  overlayContainer: {
    justifyContent: 'flex-end',
    padding: 0,
  },
  innerOverlay: {
    backgroundColor: 'transparent',
    padding: 0,
  },
  textBoxStyle: {
    height: 50,
    justifyContent: 'center',
  },
  modalContainer: {
    width: viewPortWidth,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    backgroundColor: theme.inputBackground,
  },
  buttonContainer: {
    width: viewPortWidth,
    padding: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  bottomPicker: {
    width: viewPortWidth,
    backgroundColor: theme.white,
  },
  buttonStyle: {
    ...fontSizeMedium,
    ...fontWeightBold,
    color: theme.buttonPickerColor,
  },
  placeholder: {
    primary: {
      ...fontSizeMedium,
      color: theme.placeholderTextColor,
    },
    secondary: {
      ...fontSizeMedium,
      color: theme.placeholderTextColor,
    },
  },
};
