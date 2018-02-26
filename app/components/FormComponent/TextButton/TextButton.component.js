import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import Touchable from '../../TouchableComponent/Touchable.component';
import styles from './TextButton.styles';

const TextButton = ({
  disabled = false,
  onPress,
  highlightColor = 'white',
  highlightOpacity = 0.5,
  text = '',
  style = {},
  textStyle = {}
}) => (
  <Touchable
    onPress={onPress}
    disabled={disabled}
    highlightColor={highlightColor}
    activeOpacity={highlightOpacity}>
    <View style={{...style}}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </View>
  </Touchable>
);

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
  highlightColor: PropTypes.string,
  highlightOpacity: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  style: PropTypes.object,
  textStyle: PropTypes.object,
};

export default TextButton;
