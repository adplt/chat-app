import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import PickerView from './PickerView.component';
import styles from './Picker.styles';
import {find, noop, isEmpty, findIndex} from 'lodash';
import ErrorTextIndicator from '../../ErrorTextIndicatorComponent/ErrorTextIndicator.component';
import {language} from '../../../config/language';

export default class Picker extends PureComponent {

  static propTypes = {
    itemList: PropTypes.array,
    labelKey: PropTypes.string,
    valueKey: PropTypes.string,
    placeholder: PropTypes.string,
    currentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    meta: PropTypes.object,
    input: PropTypes.object,
    pickerStyle: PropTypes.object,
    arrowPickerStyle: PropTypes.object,
    textPickerStyle: PropTypes.object,
    textBoxStyle: PropTypes.object,
    labelStyle: PropTypes.object,
    theme: PropTypes.string,
    label: PropTypes.string,
    onValChange: PropTypes.func,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    itemList: [],
    input: {onChange: noop, value: ''},
    onValChange: noop,
    pickerStyle: {},
    textBoxStyle: {},
    arrowPickerStyle: {},
    textPickerStyle: {},
    labelStyle: {},
    theme: 'primary',
    labelKey: 'label',
    valueKey: 'value',
    label: '',
    currentValue: '',
    disabled: false,
  };

  state = {
    modalVisible: false
  };

  componentWillMount () {
    const {valueKey, onValChange, input, currentValue} = this.props;
    const list = this.props.placeholder ? [{[this.props.valueKey]: '', [this.props.labelKey]: this.props.placeholder}, ...this.props.itemList] : [...this.props.itemList];
    const value = input.value || currentValue;
    const index = findIndex(list, (listItem) => listItem[valueKey] === value);
    if (index < 0) {
      input.onChange(list[0][valueKey]);
      onValChange(list[0][valueKey]);
    }
  }

  showModal = () => this.setState({modalVisible: true});

  hideModal = () => this.setState({modalVisible: false});

  onPickerChange = (value) => {
    const {valueKey, onValChange, input} = this.props;
    const list = this.props.placeholder ? [{[this.props.valueKey]: '', [this.props.labelKey]: this.props.placeholder}, ...this.props.itemList] : [...this.props.itemList];
    const selectedObj = find(list, (listItem) => listItem[valueKey] === value);
    input.onChange(selectedObj[valueKey] || '');
    onValChange(selectedObj[valueKey] || '');
  };

  render () {
    const {
      meta,
      input,
      labelKey,
      valueKey,
      currentValue,
      pickerStyle,
      textBoxStyle,
      arrowPickerStyle,
      textPickerStyle,
      theme,
      label,
      labelStyle,
      disabled = false,
    } = this.props;
    const list = this.props.placeholder ? [{[this.props.valueKey]: '', [this.props.labelKey]: this.props.placeholder}, ...this.props.itemList] : [...this.props.itemList];
    const err = !disabled && (meta && meta.touched && !meta.active && meta.error);
    return (
      <View>
        {
          !isEmpty(label) &&
            <Text style={[styles.label, labelStyle]}>{label}</Text>
        }
        <View style={[styles.container[theme], pickerStyle]}>
          <PickerView
            itemStyle={styles.iosPickerBackgroundColor}
            options={list}
            confirmText={language.COMMON__DONE}
            onSelect={this.onPickerChange}
            selectedValue={input.value || currentValue || list[0][valueKey]}
            showModal={this.showModal}
            hideModal={this.hideModal}
            modalVisible={this.state.modalVisible}
            arrowPickerStyle={arrowPickerStyle}
            textPickerStyle={textPickerStyle}
            textBoxStyle={textBoxStyle}
            disabled={disabled}
            labelKey={labelKey}
            valueKey={valueKey}
          />
        </View>
        {err && <ErrorTextIndicator text={err}/>}
      </View>
    );
  }
}
