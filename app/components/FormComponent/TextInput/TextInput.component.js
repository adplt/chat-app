import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, Text} from 'react-native';
import ErrorTextIndicator from '../../ErrorTextIndicatorComponent/ErrorTextIndicator.component';
import styles from './TextInput.styles';
import {theme as colorTheme} from '../../../styles/core.style';
import {noop, isEmpty} from 'lodash';

export default class TextInputComponent extends PureComponent {

  static propTypes = {
    containerStyle: PropTypes.object,
    disabled: PropTypes.bool,
    input: PropTypes.object,
    inputStyles: PropTypes.object,
    labelStyle: PropTypes.object,
    leftIcon: PropTypes.bool,
    leftIconName: PropTypes.string,
    leftIconSize: PropTypes.number,
    leftIconStyle: PropTypes.object,
    meta: PropTypes.object,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChangeText: PropTypes.func,
    onInputChange: PropTypes.func,
    placeholderTextColor: PropTypes.string,
    label: PropTypes.string,
    theme: PropTypes.string,
    value: PropTypes.any,
  };

  _inputRef = null;

  _setRef = (ref) => {
    this._inputRef = ref; // ref is required to access the target value in case of onblur and onfocus
  };

  componentWillReceiveProps (nextProps) {
    this._inputRef._lastNativeText = nextProps.input && nextProps.input.value;
  }

  // used _lastNativeText because android doesnt pass targetEvent in onBlur and onFocus
  _onBlurHandler = (inputProps) => () => {
    const {onBlur, onInputChange} = inputProps;
    const val = this._inputRef._lastNativeText;
    onBlur(val);
    onInputChange(val);
  };

  _onFocusHandler = (inputProps) => () => {
    const {onFocus, onInputChange} = inputProps;
    const val = this._inputRef._lastNativeText;
    onFocus(val);
    onInputChange(val);
  };

  _onChangeTextHandler = (inputProps) => (val) => {
    const {onChange, onInputChange} = inputProps;
    onChange(val);
    onInputChange(val);
  };

  render () {
    const {
      containerStyle = {},
      disabled = false,
      input = {},
      inputStyles = {},
      labelStyle = {},
      label = '',
      meta,
      onFocus = noop,
      onBlur = noop,
      onChangeText = noop,
      onInputChange = noop,
      placeholderTextColor,
      theme = 'primary',
      value,
      ...extraProps
    } = this.props;
    const err = !disabled && (meta && meta.touched && !meta.active && meta.error);
    const wrapperStyle = disabled
      ? [styles.container[theme], styles.disabledInput]
      : styles.container[theme];
    const onChange = onChangeText;
    const inputProps = {onChange, onFocus, onBlur, onInputChange, value, ...input};
    return (
      <View>
        {
          !isEmpty(label) &&
            <Text style={[styles.label, labelStyle]}>{label}</Text>
        }
        <View style={[wrapperStyle, containerStyle]}>
          <TextInput
            {...extraProps}
            value={inputProps.value}
            ref={this._setRef}
            style={[styles.input[theme], inputStyles]}
            onChangeText={this._onChangeTextHandler(inputProps)}
            underlineColorAndroid={'transparent'}
            onFocus={this._onFocusHandler(inputProps)}
            onBlur={this._onBlurHandler(inputProps, input.value)}
            editable={!disabled}
            placeholderTextColor={placeholderTextColor || colorTheme.placeholderTextColor}
          />
        </View>
        {err && <ErrorTextIndicator text={err}/>}
      </View>
    );
  }
}
