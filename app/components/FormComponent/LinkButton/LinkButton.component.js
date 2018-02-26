import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import styles from './LinkButton.styles';
import Touchable from '../../TouchableComponent/Touchable.component';

const LinkButton = ({
  disabled = false,
  onPress,
  highlightColor = 'white',
  highlightOpacity = 0.5,
  text,
  textStyle = {}
}) => (
  <Touchable onPress={onPress} disabled={disabled} highlightColor={highlightColor} activeOpacity={highlightOpacity}>
    <Text style={[styles.textStyle, textStyle]}>{text}</Text>
  </Touchable>
);

LinkButton.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  highlightColor: PropTypes.string,
  highlightOpacity: PropTypes.number,
  text: PropTypes.string,
  textStyle: PropTypes.object,
};

export default LinkButton;
