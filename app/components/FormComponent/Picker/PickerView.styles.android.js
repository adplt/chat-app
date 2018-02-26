import {theme} from '../../../styles/core.styles';
import {fontSizeNormal, flex_1} from '../../../styles/common.styles';

export default {
  modalContainer: {
    alignSelf: 'stretch'
  },

  modalFontStyle: {
    fontSize: theme.fontSizeLarge,
    color: theme.text,
    paddingTop: theme.cardVerticalSpacing,
    paddingBottom: theme.cardVerticalSpacing,
  },

  arrowDownStyle: {
    color: theme.primary,
    paddingRight: 15
  },

  textBoxStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 50
  },

  textStyle: {
    ...flex_1,
    ...fontSizeNormal,
    paddingLeft: 10,
  },

  disabled: {
    color: theme.disabledText,
  }
};
