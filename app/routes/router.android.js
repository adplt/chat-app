import React from 'react';
import PropTypes from 'prop-types';
import {addNavigationHelpers} from 'react-navigation';
import {connect} from 'react-redux';
import {BackHandler} from 'react-native';
import Routes from './index';
import {getCurrentRouteName} from '../utils/transformer.util';

class RouterWrapper extends React.Component {

  static propTypes = {
    nav: PropTypes.object,
    dispatch: PropTypes.func,
    showSpinner: PropTypes.bool,
  }

  componentDidMount () { // FROM: https://github.com/react-community/react-navigation/issues/117
    BackHandler.addEventListener('backPress', () => {
      const {dispatch, nav, showSpinner} = this.props;
      const currentRoute = getCurrentRouteName(nav);
      if (currentRoute === 'Landing') { // exit the app from landing page
        return false;
      }
      if (['HomeScreen'].includes(currentRoute) || showSpinner) { // Don't go back if spinner or payment modal is visible or from main tabs
        return true;
      } else { // in all the other cases, navigate back
        dispatch({type: 'Navigation/BACK'});
        return true;
      }
    });
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('backPress');
  }

  render () {
    const {dispatch, nav} = this.props;
    return (<Routes navigation={addNavigationHelpers({dispatch, state: nav})} />);
  }
}

const mapStateToProps = ({nav, showSpinner}) => ({nav, showSpinner});

const mapDispatchToProps = (dispatch) => ({dispatch});

export const ConnectedRoutes = connect(mapStateToProps, mapDispatchToProps)(RouterWrapper);

export default Routes;
