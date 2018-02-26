import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch} from 'react-native';
import {noop} from 'lodash';
import {theme} from '../../../styles/core.style';

export default class Toggle extends PureComponent {

  static propTypes = {
    input: PropTypes.bool,
    currentValue: PropTypes.bool,
    onValChange: PropTypes.func,
  };

  static defaultProps = {
    onValChange: noop
  };

  _onToggleChange = (value) => {
    const {onValChange} = this.props;
    onValChange(value);
  }

  render () {
    const {currentValue} = this.props;
    return (
      <Switch
        onValueChange={this._onToggleChange}
        value={currentValue}
        onTintColor={theme.tertiary}
        tintColor={theme.tertiary}
      />
    );
  }
}
