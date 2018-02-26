import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {TextInput} from '../../components/FormComponent';
import OverlaySpinner from '../../components/OverlaySpinnerComponent/OverlaySpinner.component';
// import translations from '../../i18n';
import styles from './signUp.style';
import {DefaultButton} from '../../components/FormComponent';
import {Field} from 'redux-form';
import {noop} from 'lodash';

export const fields = {
  EMAIL: 'email',
  PASSWORD: 'password',
  CONFIRM_PASSWORD: 'confirmPassword',
};

export default class LoginComponent extends Component {

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    handleSubmit: PropTypes.func,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool,
  };

  render () {
    const {loading, handleSubmit = noop, invalid, submitting} = this.props;
    return (
      <View style={styles.container}>
        <View style={{padding: 20}}>
          <Field
            name={fields.EMAIL}
            component={TextInput}
            placeholder={'Username'}
            theme={'primary'}
          />
          <View style={styles.verticalSpacer} />
          <Field
            name={fields.PASSWORD}
            component={TextInput}
            placeholder={'Password'}
            theme={'primary'}
            secureTextEntry={true}
          />
          <View style={styles.verticalSpacer} />
          <Field
            name={fields.CONFIRM_PASSWORD}
            component={TextInput}
            placeholder={'Confirm Password'}
            theme={'primary'}
            secureTextEntry={true}
          />
          <DefaultButton
            onPress={handleSubmit}
            disabled={invalid || submitting}
            text={'Sign Up'}
            textStyle={styles.loginText}
            style={styles.loginStyle}
          />
          {
            loading && <OverlaySpinner />
          }
        </View>
      </View>
    );
  }
}
