import {connect} from 'react-redux';
import LoginPage, {fields} from '../../pages/Login/login.page';
import {result, isEmpty} from 'lodash';
import {loadMessages, sendMessage} from '../../state/thunks/firebase.thunk';
import {validateRequiredFields} from '../../utils/validator.util';
import {loginUser} from '../../state/thunks/firebase.thunk';
import {reduxForm} from 'redux-form';

const formConfig = {
  form: 'loginForm',
  destroyOnUnmount: true,
  onSubmit: (values, dispatch) => {
    dispatch(loginUser(values['email'], values['password']));
  },
  validate: (values) => {
    const {
      EMAIL,
      PASSWORD,
    } = fields;
    return validateRequiredFields(values, [EMAIL, PASSWORD]);
  },
  initialValues: {
    email: '',
    password: '',
  },
};

const LoginForm = reduxForm(formConfig)(LoginPage);

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
