import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {DatePickerIOS, View, Text} from 'react-native';
import Touchable from '../../TouchableComponent/Touchable.component';
import OverlayModal from '../../OverlayModalComponent/OverlayModal.component';
import styles from './TimePickerView.styles';
import moment from 'moment';

export default class DatePickerView extends PureComponent {

  static propTypes = {
    selectedValue: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    textPickerStyle: PropTypes.object,
    onDateChange: PropTypes.func,
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    modalVisible: PropTypes.bool,
    placeholder: PropTypes.string,
    theme: PropTypes.string,
  };

  render () {
    const {
      theme = 'primary',
      selectedValue,
      onDateChange,
      showModal,
      hideModal,
      modalVisible,
      textPickerStyle,
      placeholder
    } = this.props;
    return (
      <View>
        <Touchable onPress={showModal} style={styles.textBoxStyle}>
          {
            selectedValue ?
              <Text style={[styles.input[theme], textPickerStyle]}>{
                moment(selectedValue).format('DD MMM YYYY')
              }</Text> :
              <Text style={[styles.input[theme], styles.placeholder[theme]]}>{
                placeholder
              }</Text>
          }
        </Touchable>
        <OverlayModal
          animationType='fade'
          visible={modalVisible}
          containerStyles={styles.overlayContainer}
          innerContainerStyles={styles.innerOverlay}
        >
          <View style={styles.modalContainer}>
            <View style={styles.buttonContainer}>
              <Touchable onPress={hideModal}>
                <Text style={styles.buttonStyle}>
                  {'Done'}
                </Text>
              </Touchable>
            </View>
            <View>
              <DatePickerIOS
                style={styles.bottomPicker}
                date={selectedValue}
                mode='time'
                onDateChange={onDateChange}
              />
            </View>
          </View>
        </OverlayModal>
      </View>
    );
  }
}
