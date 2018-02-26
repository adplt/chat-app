import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, StatusBar} from 'react-native';
import {theme} from './styles/core.style';
import OverlaySpinner from './components/OverlaySpinnerComponent/OverlaySpinner.component';
import {setNetworkStatus, resetNetworkBar} from './state/actions/common.action';
import {ConnectedRoutes} from './routes/router';
import OfflineBar from './components/OfflineBarComponent/OfflineBar.component';
import {setCurrentLanguage} from './state/thunks/common.thunk';
import {get, storageKeys} from './utils/storage.util';
import {noop, result} from 'lodash';
import {loginUser} from './state/thunks/firebase.thunk';

const mapStateToProps = (state) => ({
  spinner: result(state, 'spinner'),
  networkStatus: result(state, 'networkStatus'),
  currentLanguage: result(state, 'currentLanguage'),
  highlightText: result(state, 'highlightText'),
});

const mapDispatchToProps = (dispatch) => ({
  initializeLanguage: () => get(storageKeys['LANGUAGE']).
    then((currentLanguageId) => {
      dispatch(setCurrentLanguage(currentLanguageId || 'id'));
    }),
  resetNetworkBar: () => dispatch(resetNetworkBar()),
  setNetworkStatus: (isConnected) => dispatch(setNetworkStatus(isConnected)),
  loginUser: () => dispatch(loginUser('tya.atria@yahoo.com', 'admin123')), // tya.atria@yahoo.com atriadplt@gmail.com
});

class AppComponent extends PureComponent {

  static propTypes = {
    currentLanguage: PropTypes.object,
    highlightText: PropTypes.bool,
    initializeLanguage: PropTypes.func,
    initializeAppNotification: PropTypes.func,
    networkStatus: PropTypes.object,
    resetNetworkBar: PropTypes.func,
    setNetworkStatus: PropTypes.func,
    spinner: PropTypes.bool,
    loginUser: PropTypes.func,
  };

  componentWillMount () {
    const {initializeLanguage = noop, loginUser = noop} = this.props;
    initializeLanguage();
    // loginUser();
  }

  render () {
    const {highlightText, networkStatus, resetNetworkBar, setNetworkStatus, spinner} = this.props;
    return (
      <View style={{flexGrow: 1}}>
        <OfflineBar
          highlightText={highlightText}
          networkStatus={networkStatus}
          resetNetworkBar={resetNetworkBar}
          setNetworkStatus={setNetworkStatus}
        />
        <StatusBar barStyle='light-content' backgroundColor={theme.primary} />
        <ConnectedRoutes />
        <OverlaySpinner showSpinner={spinner}/>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
