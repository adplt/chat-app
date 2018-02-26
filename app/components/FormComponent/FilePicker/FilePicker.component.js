import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
// import RNFetchBlob from 'react-native-fetch-blob';
import {View, Text} from 'react-native';
// import {DocumentPicker, DocumentPickerUtil} from 'react-native-document-picker';
import {DefaultButton} from '../../FormComponent';
import styles from './FilePicker.styles';
import {noop, result} from 'lodash';
import ErrorTextIndicator from '../../ErrorTextIndicatorComponent/ErrorTextIndicator.component';
import {language} from '../../../config/language';

export default class FilePicker extends PureComponent {

  static propTypes = {
    disabled: PropTypes.bool,
    meta: PropTypes.object,
    placeholder: PropTypes.string,
    input: PropTypes.object,
    theme: PropTypes.string,
    mode: PropTypes.string,
    containerStyle: PropTypes.object,
    label: PropTypes.string,
    labelStyle: PropTypes.object,
  };

  static defaultProps = {
    input: {onChange: noop, value: {}},
    mode: 'date',
    theme: 'primary',
    disabled: false,
    label: '',
  };

  state = {
    modalVisible: false
  };

  showModal = () => this.setState({modalVisible: true});

  hideModal = () => this.setState({modalVisible: false});

  _showPicker = () => {
    // const {onChange} = this.props.input;
    // DocumentPicker.show({
    //   filetype: [DocumentPickerUtil.allFiles()],
    // }, (error, res) => {
    //   res;
    //   // RNFetchBlob.fs.readFile(result(res, 'uri', ''), 'base64').then((data) => {
    //   //   onChange({file: data, fileName: result(res, 'fileName')});
    //   // }).catch(() => {
    //   //
    //   // });
    // });
  };

  render () {
    const {
      meta,
      labelStyle,
      disabled,
      input
    } = this.props;
    const err = !disabled && (meta && meta.touched && !meta.active && meta.error);
    return (
      <View>
        <Text style={[styles.label, labelStyle]}>{result(input, 'value.fileName', language.FILE_PICKER__BUTTON_PLACEHOLDER)}</Text>
        <DefaultButton onPress={this._showPicker} text={language.FILE_PICKER__BUTTON_TEXT}/>
        {err && <ErrorTextIndicator text={err}/>}
      </View>
    );
  }
}
