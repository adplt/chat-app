import React, {PureComponent} from 'react';
import {View, Text, WebView} from 'react-native';
import {RadioButtons} from 'react-native-radio-buttons';
import styles from './RadioButton.styles';
import Touchable from '../../TouchableComponent/Touchable.component';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

export default class RadioButton extends PureComponent {

  static propTypes = {
    options: PropTypes.array,
    input: PropTypes.object,
    onPressRadioButton: PropTypes.func,
    warningText: PropTypes.string,
    renderContainer: PropTypes.object,
    renderRow: PropTypes.bool,
    label: PropTypes.string,
    labelStyle: PropTypes.object,
    value: PropTypes.any,
  }

  static defaultProps = {
    options: [], // option = [{label: '', value: ''}, ...]
    input: {
      onChange: noop,
    }
  }

  setSelectedOption = (selectedOption, option) => option.value === this.props.input.value.value;

  renderOption = (option, selected, onSelect, index) => {
    const {onPressRadioButton = noop, warningText = ''} = this.props;
    return (<Touchable onPress={onSelect} key={index}>
      <View>
        <View style={styles.optionStyle}>
          <View style={styles.buttonStyle}>{selected && <View style={styles.buttonActive} />}</View>
          <View style={styles.labelContainer}>
            <Text style={styles.textStyle} onPress={onPressRadioButton}>{option.label}</Text>
            <Text style={styles.textStyle}>{option.sublabel}</Text>
          </View>
        </View>
        {
          warningText !== '' &&
          <View style={styles.webViewContainer}>
            <WebView style={styles.webViewStyle} source={{html: warningText}}/>
          </View>
        }
      </View>
    </Touchable>);
  }

  renderOptionRow = (option, selected, onSelect, index) => {
    const {onPressRadioButton = noop, warningText = ''} = this.props;
    return (
      <View style={styles.halfWidth} key={index}>
        <Touchable onPress={onSelect}>
          <View>
            <View style={styles.optionStyle}>
              <View style={styles.buttonStyle}>{selected && <View style={styles.buttonActive} />}</View>
              <View style={styles.labelContainer}>
                <Text style={styles.textStyle} onPress={onPressRadioButton}>{option.label}</Text>
                <Text style={styles.textStyle}>{option.sublabel}</Text>
              </View>
            </View>
            {
              warningText !== '' &&
              <View style={styles.webViewContainer}>
                <WebView style={styles.webViewStyle} source={{html: warningText}}/>
              </View>
            }
          </View>
        </Touchable>
      </View>
    );
  }

  renderContainer = (optionNodes) => <View>{optionNodes}</View>

  renderContainerRow = (optionNodes) => <View style={styles.renderContainerRow}>{optionNodes}</View>

  render () {
    const {options, input, renderRow = false, label, labelStyle, value} = this.props;
    return (
      <View>
        {
          !isEmpty(label) &&
            <Text style={[styles.label, labelStyle]}>{label}</Text>
        }
        <View style={styles.radioButton}>
          <RadioButtons
            options={options}
            onSelection={input.onChange}
            selectedOption={value}
            renderOption={renderRow ? this.renderOptionRow : this.renderOption}
            renderContainer={renderRow ? this.renderContainerRow : this.renderContainer}
            testOptionEqual={this.setSelectedOption}
          />
        </View>
      </View>
    );
  }
}
