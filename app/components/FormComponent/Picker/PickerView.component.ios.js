import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Text, View, PickerIOS} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import OverlayModal from '../../OverlayModalComponent/OverlayModal.component';
import styles from './PickerView.styles';
import {findIndex, find, noop, result} from 'lodash';
import Touchable from '../../TouchableComponent/Touchable.component';
import {theme} from '../../../styles/core.style';

export default class PickerView extends PureComponent {

  static propTypes = {
    options: PropTypes.array.isRequired,
    confirmText: PropTypes.string,
    selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    labelKey: PropTypes.string,
    valueKey: PropTypes.string,
    itemStyle: PropTypes.object,
    onSelect: PropTypes.func,
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    modalVisible: PropTypes.bool,
    disabled: PropTypes.bool,
    arrowPickerStyle: PropTypes.object,
    textPickerStyle: PropTypes.object,
    textBoxStyle: PropTypes.object,
  };

  static defaultProps = {
    options: [],
    confirmText: '',
    selectedValue: '',
    labelKey: '',
    valueKey: '',
    onSelect: noop,
    showModal: noop,
    hideModal: noop,
    modalVisible: false,
    disabled: false,
    itemStyle: {},
    arrowPickerStyle: {},
    textPickerStyle: {},
    textBoxStyle: {},
  };

  onPressNext = () => {
    const {options, selectedValue, onSelect, valueKey} = this.props;
    const maxIndex = options.length - 1;
    const selectedIndex = selectedValue ? findIndex(options, (option) => option[valueKey] === selectedValue) : 0;
    if (selectedIndex < maxIndex) {
      onSelect(options[selectedIndex + 1][valueKey]);
    }
  };

  onPressPrevious = () => {
    const {options, selectedValue, onSelect, valueKey} = this.props;
    const selectedIndex = findIndex(options, (option) => option[valueKey] === selectedValue);
    if (selectedIndex > 0) {
      onSelect(options[selectedIndex - 1][valueKey]);
    }
  };

  renderItem = (option, i) => (
    <PickerIOS.Item
      key={`option${i}`}
      value={option[this.props.valueKey]}
      label={option[this.props.labelKey]}
    />
  );

  render () {
    const itemStyle = this.props.itemStyle || {};
    const {
      options,
      confirmText, selectedValue, labelKey, valueKey,
      onSelect, showModal, hideModal,
      modalVisible, disabled,
      textBoxStyle, arrowPickerStyle, textPickerStyle,
    } = this.props;
    let disabledStyle = {};
    if (disabled) {
      disabledStyle = {color: theme.disabledText};
    }
    const selectedLabelObj = find(options, (listItem) => listItem[valueKey] === selectedValue);
    return (
      <View>
        <Touchable disabled={disabled} style={[styles.textBoxStyle, textBoxStyle]} onPress={showModal}>
          <Text style={[styles.textStyle, textPickerStyle, disabledStyle]}>
            {result(selectedLabelObj, labelKey, '')}
          </Text>
          <Icon name='ios-arrow-down' size={30} style={[styles.arrowDownStyle, arrowPickerStyle]} />
        </Touchable>
        <OverlayModal
          animationType='fade'
          visible={modalVisible}
          containerStyles={styles.overlayContainer}
          innerContainerStyles={styles.innerOverlay}
        >
          <View style={styles.modalContainer}>
            <View style={styles.buttonContainer}>
              <View style={styles.arrowContainer}>
                <Touchable style={styles.paddingRight} onPress={this.onPressPrevious}>
                  <Icon name={'ios-arrow-back'} size={30} style={styles.arrowStyle}/>
                </Touchable>
                <Touchable style={styles.paddingLeft} onPress={this.onPressNext}>
                  <Icon name={'ios-arrow-forward'} size={30} style={styles.arrowStyle}/>
                </Touchable>
              </View>
              <Touchable onPress={hideModal}>
                <Text style={styles.buttonStyle}>
                  {confirmText || 'Done'}
                </Text>
              </Touchable>
            </View>
            <View>
              <PickerIOS
                style={styles.bottomPicker}
                selectedValue={selectedValue}
                onValueChange={onSelect}
                itemStyle={itemStyle}
              >
                {
                  options.map(this.renderItem)
                }
              </PickerIOS>
            </View>
          </View>
        </OverlayModal>
      </View>
    );
  }
}
