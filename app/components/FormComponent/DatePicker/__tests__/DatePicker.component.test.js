import React from 'react';
import renderer from 'react-test-renderer';
import DatePicker from '../DatePicker.component';
import noop from 'lodash/noop';

describe('DatePicker component', () => {
  it('renders correctly', () => {
    const input = {onChange: noop, value: new Date('2000-01-01')};
    const tree = renderer.create(<DatePicker input={input}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
