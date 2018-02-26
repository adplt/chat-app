import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import styles from './DefaultButton.styles';
import Touchable from '../../TouchableComponent/Touchable.component';

const DefaultButton = (props) => {
  const {
    children,
    disabled = false,
    onPress,
    highlightColor = 'white',
    highlightOpacity = 0.5,
    text,
    style = {},
    textStyle = {},
    disabledStyle = {},
    theme = 'primary'
  } = props;
  let viewStyle = [theme === 'primary' ? styles.buttonPrimary : styles.buttonSecondary, style];
  let buttonTextStyle = [theme === 'primary' ? styles.buttonTextPrimary : styles.buttonTextSecondary, textStyle];
  if (disabled) {
    viewStyle = [style, styles.buttonDisabled, disabledStyle];
    buttonTextStyle = [styles.buttonText, styles.buttonTextDisabled];
  }
  const nestedChildren = children || (<Text style={buttonTextStyle}>{text}</Text>);
  return (
    <Touchable onPress={onPress} disabled={disabled} highlightColor={highlightColor} activeOpacity={highlightOpacity}>
      <View style={viewStyle}>
        {nestedChildren}
      </View>
    </Touchable>
  );
};

DefaultButton.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  children: PropTypes.node,
  highlightOpacity: PropTypes.number,
  disabledStyle: PropTypes.object,
  textStyle: PropTypes.object,
  text: PropTypes.string,
  buttonType: PropTypes.string,
  style: PropTypes.object,
  highlightColor: PropTypes.string,
  theme: PropTypes.string,
};

export default DefaultButton;
