// import {connect} from 'react-redux';
// import {restoreSession, loadMessages, sendMessage} from '../state/thunks/firebase.thunk';
// import {validateSession} from '../state/thunks/common.thunk';
// import RoutingPage from '../pages/index.page';
// import {fields} from '../pages/Login/login.page';
// import {result, isEmpty} from 'lodash';
// import {reduxForm} from 'redux-form';
// import {validateRequiredFields} from '../utils/validator.util';
//
// const formConfig = {
//   form: 'SkckIndexForm',
//   destroyOnUnmount: true,
//   onSubmit: (values, dispatch) => {
//     dispatch(validateSession(values));
//   },
//   validate: (values) => {
//     const {
//       EMAIL,
//       PASSWORD,
//     } = fields;
//     return validateRequiredFields(values, [EMAIL, PASSWORD]);
//   },
//   initialValues: {
//     email: '',
//     password: '',
//   },
// };
//
// const NavigationForm = reduxForm(formConfig)(RoutingPage);
//
// const mapStateToProps = (state) => ({
//   restoring: result(state, 'session.restoring'),
//   logged: !isEmpty(result(state, 'session.user')),
//   loading: result(state, 'session.loading'),
//   error: result(state, 'session.error'),
//   buttonTitle: result(state, 'buttonTitle'),
//   chat: result(state, 'chat'),
//   session: result(state, 'session'),
// });
//
// const mapDispatchToProps = (dispatch) => ({
//   restore: () => dispatch(restoreSession()),
//   loadMessages: () => dispatch(loadMessages()),
//   sendMessage: () => dispatch(sendMessage()),
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(NavigationForm);
