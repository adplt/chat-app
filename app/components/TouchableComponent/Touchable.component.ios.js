import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import noop from 'lodash/noop';

class Touchable extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    children: PropTypes.node,
    highlightOpacity: PropTypes.number,
    interval: PropTypes.number
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
    const {onPress = noop, disabled, children, highlightOpacity, ...extraProps} = this.props;
    const onpressHandler = this.callOnceInInterval(onPress);
    return (
      <TouchableOpacity {...extraProps} onPress={onpressHandler} disabled={disabled} useForeground={true} activeOpacity={highlightOpacity}>
        {children}
      </TouchableOpacity>
    );
  }
}

export default Touchable;
