import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DatePickerIOS, View, Text} from 'react-native';
import Touchable from '../../TouchableComponent/Touchable.component';
import OverlayModal from '../../OverlayModalComponent/OverlayModal.component';
import styles from './DatePickerView.styles';
import moment from 'moment';
import {language} from '../../../config/language';

export default class DatePickerView extends Component {

  static propTypes = {
    selectedValue: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    textPickerStyle: PropTypes.object,
    onDateChange: PropTypes.func,
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    modalVisible: PropTypes.bool,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    theme: PropTypes.string,
    mode: PropTypes.string,
  };

  render () {
    const {
      theme,
      mode,
      selectedValue,
      onDateChange,
      showModal,
      hideModal,
      modalVisible,
      textPickerStyle,
      placeholder,
      disabled
    } = this.props;
    let timeFormat = 'DD MMM YYYY';
    if (mode === 'time') {
      timeFormat = 'kk:mm';
    } else if (mode === 'datetime') {
      timeFormat = 'DD MMM YYYY kk:mm';
    }

    return (
      <View>
        <Touchable onPress={showModal} style={styles.textBoxStyle} disabled={disabled}>
          {
            selectedValue ?
              <Text style={[styles.input[theme], textPickerStyle]}>{moment(selectedValue).format(timeFormat)}</Text> :
              <Text style={[styles.input[theme], styles.placeholder[theme]]}>{placeholder}</Text>
          }
        </Touchable>
        <OverlayModal
          animationType='fade'
          visible={modalVisible}
          containerStyles={styles.overlayContainer}
          innerContainerStyles={styles.innerOverlay}
          onClose={hideModal}
          closeOnTouchOutside
        >
          <View style={styles.modalContainer}>
            <View style={styles.buttonContainer}>
              <Touchable onPress={hideModal}>
                <Text style={styles.buttonStyle}>
                  {language.DATE_PICKER__DONE}
                </Text>
              </Touchable>
            </View>

            <View>
              <DatePickerIOS
                style={styles.bottomPicker}
                date={new Date(moment(selectedValue).format())}
                mode={mode}
                onDateChange={onDateChange}
              />
            </View>
          </View>
        </OverlayModal>
      </View>
    );
  }
}
