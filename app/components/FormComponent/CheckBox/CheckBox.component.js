import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from 'react-native-checkbox';
import styles from './CheckBox.styles';
import noop from 'lodash/noop';
import Touchable from '../../TouchableComponent/Touchable.component';

const CustomCheckBox = ({input = {}, containerStyle = {}, labelStyle = {}, disabled = false, ...extraProps}) => {
  const changeHandler = !disabled ? (changedVal) => input.onChange(!changedVal) : noop;
  return (
    <Touchable onPress={noop}>
      <CheckBox
        underlayColor='transparent' labelStyle={[styles.labelStyle, labelStyle]}
        checked={!!input.value} containerStyle={[styles.containerStyle, containerStyle]} onChange={changeHandler}
        checkboxStyle={styles.checkboxStyle}
        {...extraProps}
      />
    </Touchable>

  );
};

CustomCheckBox.propTypes = {
  input: PropTypes.object,
  containerStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  disabled: PropTypes.bool
};

export default CustomCheckBox;
