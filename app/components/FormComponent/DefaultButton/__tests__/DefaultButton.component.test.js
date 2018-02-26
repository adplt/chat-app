import React from 'react';
import renderer from 'react-test-renderer';
import DefaultButton from '../DefaultButton.component';

describe('Default Button component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DefaultButton/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
