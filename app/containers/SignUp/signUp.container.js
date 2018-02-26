import {connect} from 'react-redux';
import SignUp, {fields} from '../../pages/SignUp/signUp.page';
import {result, isEmpty} from 'lodash';
import {loadMessages, sendMessage} from '../../state/thunks/firebase.thunk';
import {validateRequiredFields} from '../../utils/validator.util';
import {signupUser} from '../../state/thunks/firebase.thunk';
import {reduxForm} from 'redux-form';

const formConfig = {
  form: 'signUpForm',
  destroyOnUnmount: true,
  onSubmit: (values, dispatch) => {
    dispatch(signupUser(values['email'], values['password']));
  },
  validate: (values) => {
    const {
      EMAIL,
      PASSWORD,
      CONFIRM_PASSWORD,
    } = fields;
    let error = {};
    error = validateRequiredFields(values, [EMAIL, PASSWORD, CONFIRM_PASSWORD]);
    if (values[PASSWORD] !== values[CONFIRM_PASSWORD]) {
      error[PASSWORD] = 'Password Didn\'t match';
      error[CONFIRM_PASSWORD] = 'Confirm Password Didn\'t match';
    }
    return error;
  },
  initialValues: {
    email: '',
    password: '',
    confirmPassword: '',
  },
};

const LoginForm = reduxForm(formConfig)(SignUp);

const mapStateToProps = (state) => ({
  restoring: result(state, 'session.restoring'),
  logged: !isEmpty(result(state, 'session.user')),
  loading: result(state, 'session.loading'),
  error: result(state, 'session.error'),
  buttonTitle: result(state, 'buttonTitle'),
  chat: result(state, 'chat'),
  session: result(state, 'session'),
});

const mapDispatchToProps = (dispatch) => ({
  loadMessages: () => dispatch(loadMessages()),
  sendMessage: (message) => dispatch(sendMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
