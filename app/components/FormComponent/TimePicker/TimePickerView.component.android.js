import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {DatePickerAndroid, View, Text} from 'react-native';
import Touchable from '../../TouchableComponent/Touchable.component';
import styles from './TimePickerView.styles';
import moment from 'moment';

export default class DatePickerView extends PureComponent {

  static propTypes = {
    onDateChange: PropTypes.func,
    selectedValue: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    placeholder: PropTypes.string,
    textPickerStyle: PropTypes.object,
    theme: PropTypes.string,
  };

  onDatePicked = ({action, year, month, day}) => {
    if (action !== DatePickerAndroid.dismissedAction) {
      this.props.onDateChange(moment(`${month}-${day}-${year}`, 'MM-DD-YYYY'));
    }
  };

  showPicker = () => {
    DatePickerAndroid.open({
      date: new Date(),
    }).then(this.onDatePicked);
  };

  render () {
    const {theme = 'primary', selectedValue, placeholder, textPickerStyle} = this.props;
    return (
      <View>
        <Touchable onPress={this.showPicker}>
          {
            selectedValue ?
              <Text style={[styles.input[theme], textPickerStyle]}>{moment(selectedValue).format('DD MMM YYYY')}</Text> :
              <Text style={[styles.input[theme], styles.placeholder[theme]]}>{placeholder}</Text>
          }
        </Touchable>
      </View>
    );
  }
}
