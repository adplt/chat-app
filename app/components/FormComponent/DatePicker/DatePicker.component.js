import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import DatePickerView from './DatePickerView.component';
import styles from './DatePicker.styles';
import noop from 'lodash/noop';
import ErrorTextIndicator from '../../ErrorTextIndicatorComponent/ErrorTextIndicator.component';
import isEmpty from 'lodash/isEmpty';

export default class DatePickerComponent extends PureComponent {

  static propTypes = {
    disabled: PropTypes.bool,
    meta: PropTypes.object,
    placeholder: PropTypes.string,
    input: PropTypes.object,
    theme: PropTypes.string,
    mode: PropTypes.string,
    containerStyle: PropTypes.object,
    label: PropTypes.string,
    labelStyle: PropTypes.object,
    style: PropTypes.object,
    currentValue: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    onValChange: PropTypes.func,
  };

  static defaultProps = {
    input: {onChange: noop, value: ''},
    style: {},
    mode: 'date',
    theme: 'primary',
    disabled: false,
    label: '',
    currentValue: new Date(),
    onValChange: noop,
  };

  state = {
    modalVisible: false
  };

  showModal = () => this.setState({modalVisible: true});

  hideModal = () => this.setState({modalVisible: false});

  onDateChange = (date) => {
    const {onValChange, input} = this.props;
    input.onChange(date);
    onValChange(date);
  };

  render () {
    const {
      meta,
      mode,
      input,
      placeholder,
      containerStyle,
      theme,
      disabled,
      label,
      labelStyle,
      style,
      currentValue
    } = this.props;
    const err = !disabled && (meta && meta.touched && !meta.active && meta.error);
    const wrapperStyle = disabled
      ? [styles.container[theme], styles.disabledInput]
      : styles.container[theme];
    return (
      <View style={style}>
        {
          !isEmpty(label) &&
            <Text style={[styles.label, labelStyle]}>{label}</Text>
        }
        <View style={[wrapperStyle, containerStyle]}>
          <DatePickerView
            selectedValue={input.value || currentValue}
            placeholder={placeholder}
            onDateChange={this.onDateChange}
            modalVisible={this.state.modalVisible}
            showModal={this.showModal}
            hideModal={this.hideModal}
            theme={theme}
            mode={mode}
            disabled={disabled}
          />
        </View>
        {err && <ErrorTextIndicator text={err}/>}
      </View>
    );
  }
}
