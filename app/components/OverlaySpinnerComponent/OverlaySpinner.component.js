import React from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator, Platform} from 'react-native';
import ScrollableOverlayModal from '../OverlayModalComponent/OverlayModal.component';

class OverlaySpinner extends React.Component {

  static propTypes = {
    showSpinner: PropTypes.bool,
  }

  render () {
    const {showSpinner} = this.props;
    return (
      <ScrollableOverlayModal visible={showSpinner}>
        <ActivityIndicator
          color={'#CCC'}
          size={Platform.OS === 'ios' ? 'large' : 80} />
      </ScrollableOverlayModal>
    );
  }
}

export default OverlaySpinner;
