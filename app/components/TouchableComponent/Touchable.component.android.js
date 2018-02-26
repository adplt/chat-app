import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableNativeFeedback, View, Platform} from 'react-native';
import {theme} from '../../styles/core.styles';
import noop from 'lodash/noop';

class Touchable extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    children: PropTypes.node,
    highlightColor: PropTypes.string,
    interval: PropTypes.number,
  };

  static defaultProps = {
    interval: 0,
  };

  isCalled = false;
  timer = 0;

  componentWillUnmount () {
    clearTimeout(this.timer);
  }

  callOnceInInterval = (functionTobeCalled) => (...args) => {
    const {interval} = this.props;
    if (!this.isCalled) {
      this.isCalled = true;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.isCalled = false;
      }, interval);
      return functionTobeCalled(...args);
    }
  };

  render () {
    const {onPress = noop, disabled, children, highlightColor = theme.inputBackground, ...extraProps} = this.props;
    const onpressHandler = this.callOnceInInterval(onPress);
    const background = (Platform.Version >= 21) ? TouchableNativeFeedback.Ripple(highlightColor) : TouchableNativeFeedback.SelectableBackground();
    const foregroundRippleSupport = TouchableNativeFeedback.canUseNativeForeground();
    return (
      <TouchableNativeFeedback onPress={onpressHandler} disabled={disabled} useForeground={foregroundRippleSupport} background={background}>
        <View {...extraProps}>
          {children}
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default Touchable;
