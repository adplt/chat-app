import {connect} from 'react-redux';
import DashboardPage from '../../pages/Dashboard/dashboard.page';
import {result} from 'lodash';
import {loadMessages, sendMessage} from '../../state/thunks/firebase.thunk';

const mapStateToProps = (state) => ({
  chat: result(state, 'chat', {}),
  session: result(state, 'session', {}),
});

const mapDispatchToProps = (dispatch) => ({
  loadMessages: () => dispatch(loadMessages()),
  sendMessage: (message) => dispatch(sendMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
