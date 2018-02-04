import React from 'react';
import PropTypes from 'prop-types';
import {View, ScrollView, TouchableWithoutFeedback} from 'react-native';
import noop from 'lodash/noop';
import styles from './ScrollableOverlayModal.component.style';

class ScrollableOverlayModal extends React.Component {

  static propTypes = {
    children: PropTypes.object,
    visible: PropTypes.bool,
    onDismiss: PropTypes.func,
  }

  render () {
    const {children, visible = false, onDismiss = noop} = this.props;
    return (
      visible ?
        <TouchableWithoutFeedback onPress={onDismiss}>
          <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
              {children}
            </ScrollView>
          </View>
        </TouchableWithoutFeedback> : null
    );
  }
}

export default ScrollableOverlayModal;
