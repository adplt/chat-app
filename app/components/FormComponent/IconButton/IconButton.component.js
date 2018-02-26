import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {isEmpty} from 'lodash';
import Touchable from '../../TouchableComponent/Touchable.component';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './IconButton.styles';

const IconButton = ({disabled = false, onPress, highlightColor = 'white', highlightOpacity = 0.5, name, size = 30, text = '', style = {}, textStyle = {}, iconStyle = {}}) => (
  <Touchable onPress={onPress} disabled={disabled} highlightColor={highlightColor} activeOpacity={highlightOpacity}>
    <View style={[styles.container, style]}>
      <Icon style={[styles.icon, iconStyle]} name={name} size={size} />
      {!isEmpty(text) && <Text style={[styles.buttonText, textStyle]}>{text}</Text>}
    </View>
  </Touchable>
);

IconButton.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  highlightColor: PropTypes.string,
  highlightOpacity: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  textStyle: PropTypes.object,
  iconStyle: PropTypes.object,
};

export default IconButton;
