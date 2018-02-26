import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, ListView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import OverlayModal from '../../ModalComponent/OverlayModal/OverlayModal.component';
import Touchable from '../../TouchableComponent/Touchable.component';
import {noop, result, find} from 'lodash';
import styles from './PickerView.styles.android';
import {listViewComparator} from '../../../utils/transformer.util';

const ds = new ListView.DataSource({rowHasChanged: listViewComparator});

export default class PickerView extends Component {

  static propTypes = {
    options: PropTypes.array.isRequired,
    selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    labelKey: PropTypes.string,
    valueKey: PropTypes.string,
    onSelect: PropTypes.func,
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    modalVisible: PropTypes.bool,
    disabled: PropTypes.bool,
    arrowPickerStyle: PropTypes.object,
    textPickerStyle: PropTypes.object,
    confirmText: PropTypes.string,
  };

  static defaultProps = {
    options: [],
    selectedValue: '',
    labelKey: '',
    valueKey: '',
    onSelect: noop,
    showModal: noop,
    hideModal: noop,
    modalVisible: false,
    disabled: false,
    arrowPickerStyle: {},
    textPickerStyle: {},
  };

  optionSelected = (option) => () => {
    this.props.onSelect(option);
    this.props.hideModal();
  }

  renderItem = (option) => (
    <Touchable onPress={this.optionSelected(option[this.props.valueKey])}>
      <Text style={styles.modalFontStyle}>{option[this.props.labelKey]}</Text>
    </Touchable>
  )

  render () {
    const {
      options = [],
      selectedValue,
      disabled,
      showModal, hideModal, modalVisible, arrowPickerStyle = {}, textPickerStyle = {},
      valueKey, labelKey
    } = this.props;
    const selectedLabelObj = find(options, (listItem) => listItem[valueKey] === selectedValue);
    const wrapperStyle = disabled ? {...styles.textStyle, ...textPickerStyle, ...styles.disabled} : {...styles.textStyle, ...textPickerStyle};
    return  (
      <View>
        <Touchable onPress={showModal} style={styles.textBoxStyle} disabled={disabled}>
          <Text style={wrapperStyle}>{result(selectedLabelObj, labelKey, '')}</Text>
          <Icon name='ios-arrow-down' size={30} style={[styles.arrowDownStyle, arrowPickerStyle]} />
        </Touchable>
        <OverlayModal visible={modalVisible} onClose={hideModal} closeOnTouchOutside>
          <ListView
            style={styles.modalContainer}
            dataSource={ds.cloneWithRows(options)}
            renderRow={this.renderItem}
          />
        </OverlayModal>
      </View>
    );
  }
}
