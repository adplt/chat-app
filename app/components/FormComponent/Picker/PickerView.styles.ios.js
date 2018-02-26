import {theme} from '../../../styles/core.style';
import {
  fontSizeSmall, flex_1, containerRowSpaceBetween,
  fontWeightBold, textPrimayColor
} from '../../../styles/common.style';
import {viewportWidth} from '../../../utils/device.util';

export default {
  overlayContainer: {
    justifyContent: 'flex-end',
    padding: 0,
  },
  innerOverlay: {
    backgroundColor: theme.transparent,
    padding: 0,
  },
  modalContainer: {
    width: viewportWidth,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    backgroundColor: theme.inputBackground,
  },
  arrowDownStyle: {
    color: theme.primary,
    paddingRight: 15
  },

  arrowStyle: {
    color: theme.buttonPickerColor,
  },

  textBoxStyle: {
    ...containerRowSpaceBetween,
    height: 50,
  },
  buttonStyle: {
    ...fontSizeSmall,
    ...fontWeightBold,
    color: theme.buttonPickerColor,
  },
  rightArrow: {
    color: theme.buttonPickerColor
  },
  leftArrow: {
    color: theme.buttonPickerColor,
  },
  buttonContainer: {
    ...containerRowSpaceBetween,
    width: viewportWidth,
    height: 50,
    padding: 20,
  },
  arrowContainer: {
    flexDirection: 'row',
  },
  bottomPicker: {
    width: viewportWidth,
  },
  paddingRight: {
    paddingRight: 20
  },
  paddingLeft: {
    paddingLeft: 20
  },
  textStyle: {
    ...flex_1,
    ...fontSizeSmall,
    ...textPrimayColor,
    paddingLeft: 10,
  },
};
