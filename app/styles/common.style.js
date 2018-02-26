import {theme, textStyles} from './core.style';

export const textAlignCenter = {
  textAlign: 'center'
};

export const textAlignRight = {
  textAlign: 'right'
};

export const textAlignLeft = {
  textAlign: 'left'
};

export const backgroundColorWhite = {
  backgroundColor: theme.white,
};

export const flex_1 = {
  flex: 1
};

export const flexGrow_1 = {
  flexGrow: 1
};

export const flexRow = {
  flexDirection: 'row'
};

export const flexColumn = {
  flexDirection: 'column'
};

export const fontSizeSmall = {
  ...textStyles.textSM
};

export const fontSizeExtraSmall = {
  ...textStyles.textXS
};

export const fontSizeLarge = {
  ...textStyles.textLG // font size 18
};

export const fontSizeMedium = {
  ...textStyles.textMD
};

export const fontSizeNormal = {
  ...textStyles.text // font size 14
};

export const fontSizeXL = {
  ...textStyles.textXL
};

export const fontSizeXXL = {
  ...textStyles.textXXL
};

export const errorText = {
  ...textStyles.textSM,
  color: theme.errorColor,
};

export const fontWeightLight = {
  fontWeight: theme.fontWeightLight,
};

export const fontWeightRegular = {
  fontWeight: theme.fontWeightRegular,
};

export const fontWeightMedium = {
  fontWeight: theme.fontWeightMedium,
};

export const fontWeightBold = {
  fontWeight: theme.fontWeightBold,
};

export const fontWeightExtraBold = {
  fontWeight: theme.fontWeightExtraBold,
};

export const justifyContentCenter = {
  justifyContent: 'center'
};

export const textPrimayColor = {
  color: theme.primary
};

export const textWhiteColor = {
  color: theme.white
};

export const textLight = {
  color: theme.light
};

export const alignItemsCenter = {
  alignItems: 'center'
};

export const alignItemsFlexEnd = {
  alignItems: 'flex-end'
};

export const alignItemsFlexStart = {
  alignItems: 'flex-start'
};

export const contentContainer = {
  padding: theme.padding
};

export const paddingHorizontal = {
  paddingHorizontal: theme.padding
};

export const paddingVertical = {
  paddingVertical: theme.padding
};

export const verticalSpacer = {
  marginVertical: theme.paddingSpace
};

export const horizontalSpacer = {
  marginHorizontal: theme.padding
};

export const containerWhite = {
  backgroundColor: theme.white
};

export const containerPrimaryColor = {
  backgroundColor: theme.primary
};

export const containerTransparentColor = {
  backgroundColor: theme.transparent
};

export const fullPage = {
  flex: 1,
  justifyContent: 'space-between'
};

export const scrollPage = {
  flexGrow: 1,
  justifyContent: 'space-between'
};

export const containerRowCenter = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

export const containerColumnCenter = {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

export const containerColumnSpaceBetween = {
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const containerColumnFlexStart = {
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
};

export const containerColumnFlexEnd = {
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
};

export const containerRowSpaceBetween = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const containerRowFlexStart = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
};

export const lineBig = {
  backgroundColor: '#00a6b8',
  height: 7,
};

export const backgroundTransparent = {
  backgroundColor: theme.transparent,
};
