import React from 'react';
import PropTypes from 'prop-types';
import {addNavigationHelpers} from 'react-navigation';
import {connect} from 'react-redux';
import Routes from './index';
import {
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';

const addListener = createReduxBoundAddListener('root');

class RouterWrapper extends React.Component {

  static propTypes = {
    nav: PropTypes.object,
    dispatch: PropTypes.func
  }

  render () {
    const {dispatch, nav} = this.props;
    return (<Routes navigation={addNavigationHelpers({dispatch, state: nav, addListener})} />);
  }
}

const mapStateToProps = ({nav}) => ({nav});

const mapDispatchToProps = (dispatch) => ({dispatch});

export const ConnectedRoutes = connect(mapStateToProps, mapDispatchToProps)(RouterWrapper);

export default Routes;