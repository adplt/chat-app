import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import DatePickerView from './TimePickerView.component';
import styles from './TimePicker.styles';
import {noop, isEmpty} from 'lodash';
import ErrorTextIndicator from '../../ErrorTextIndicatorComponent/ErrorTextIndicator.component';

export default class DatePickerComponent extends PureComponent {

  static propTypes = {
    disabled: PropTypes.bool,
    meta: PropTypes.object,
    itemList: PropTypes.array,
    labelKey: PropTypes.string,
    placeholder: PropTypes.string,
    currentValue: PropTypes.string,
    input: PropTypes.object,
    pickerStyle: PropTypes.object,
    arrowPickerStyle: PropTypes.object,
    textPickerStyle: PropTypes.object,
    theme: PropTypes.string,
    label: PropTypes.string,
    containerStyle: PropTypes.object,
    labelStyle: PropTypes.object,
    onValChange: PropTypes.func
  };

  static defaultProps = {
    input: {onChange: noop, value: {}},
    disabled: false,
    labelStyle: {},
    theme: 'primary',
    label: '',
  };

  state = {
    modalVisible: false
  };

  showModal = () => this.setState({modalVisible: true});

  hideModal = () => this.setState({modalVisible: false});

  onDateChange = (date) => {
    this.props.input.onChange(date);
  };

  render () {
    const {
      meta,
      input,
      placeholder,
      containerStyle,
      labelStyle,
      theme,
      disabled,
      label,
    } = this.props;

    const err = !disabled && (meta && meta.touched && !meta.active && meta.error);
    const wrapperStyle = disabled
      ? [styles.container[theme], styles.disabledInput]
      : styles.container[theme];
    return (
      <View>
        {
          !isEmpty(label) &&
          <Text style={[styles.label, labelStyle]}>{label}</Text>
        }
        <View style={[wrapperStyle, containerStyle]}>
          <DatePickerView
            selectedValue={input.value}
            placeholder={placeholder}
            onDateChange={this.onDateChange}
            modalVisible={this.state.modalVisible}
            showModal={this.showModal}
            hideModal={this.hideModal}
            theme={theme}
          />
        </View>
        {err && <ErrorTextIndicator text={err}/>}
      </View>
    );
  }
}
