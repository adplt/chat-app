import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DatePickerAndroid, TimePickerAndroid, View, Text} from 'react-native';
import Touchable from '../../TouchableComponent/Touchable.component';
import styles from './DatePickerView.styles';
import moment from 'moment';

export default class DatePickerView extends Component {

  static propTypes = {
    onDateChange: PropTypes.func,
    selectedValue: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    placeholder: PropTypes.string,
    textPickerStyle: PropTypes.object,
    theme: PropTypes.string,
    mode: PropTypes.string,
    disabled: PropTypes.bool,
  };

  onDatePicked = ({action, year, month, day, hour, minute}) => {
    const {mode, selectedValue} = this.props;
    if (mode === 'date' || mode === 'datetime') {
      if (action !== DatePickerAndroid.dismissedAction) {
        const hourTime = moment(selectedValue).hour();
        const minuteTime = moment(selectedValue).minute();
        this.props.onDateChange(moment({year, month, day, hour: hourTime, minute: minuteTime}).toDate());
      }
    } else {
      if (action !== TimePickerAndroid.dismissedAction) {
        const yearTime = moment(selectedValue).year();
        const monthTime = moment(selectedValue).month();
        const dayTime = moment(selectedValue).date();
        this.props.onDateChange(moment({year: yearTime, month: monthTime, day: dayTime, hour, minute}).toDate());
      }
    }
  };

  showPicker = () => {
    const {mode} = this.props;
    if (mode === 'date' || mode === 'datetime') {
      DatePickerAndroid.open({
        date: new Date(moment(this.props.selectedValue).format()),
      }).then(this.onDatePicked);
    } else {
      TimePickerAndroid.open({
        is24Hour: true,
        hour: moment(this.props.selectedValue).hour(),
        minute: moment(this.props.selectedValue).minute(),
      }).then(this.onDatePicked);
    }
  };

  render () {
    const {theme = 'primary', selectedValue, placeholder, textPickerStyle, mode, disabled} = this.props;
    let timeFormat = 'DD MMM YYYY';
    if (mode === 'time') {
      timeFormat = 'kk:mm';
    }

    return (
      <View>
        <Touchable onPress={this.showPicker} style={styles.textBoxStyle} disabled={disabled}>
          {
            selectedValue ?
              <Text style={[styles.input[theme], textPickerStyle]}>{moment(selectedValue).format(timeFormat)}</Text> :
              <Text style={[styles.input[theme], styles.placeholder[theme]]}>{placeholder}</Text>
          }
        </Touchable>
      </View>
    );
  }
}
