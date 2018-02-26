import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Picker} from 'react-native';
import styles from './DocumentPicker.styles';

export default class DocumentPicker extends Component {

  static propTypes = {
    options: PropTypes.array.isRequired,
    selectedValue: PropTypes.string,
    onSelect: PropTypes.func,
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    modalVisible: PropTypes.bool,
    arrowPickerStyle: PropTypes.object,
    textPickerStyle: PropTypes.object
  };

  renderItem = (option, i) => (
    <Picker.Item
      key={`option${i}`}
      value={option}
      label={option}
    />
  );

  render () {
    const {options = [], selectedValue, onSelect} = this.props;
    return  (
      <Picker style={styles.picker} selectedValue={selectedValue} onValueChange={onSelect}>
        {options.map(this.renderItem)}
      </Picker>
    );
  }
}
