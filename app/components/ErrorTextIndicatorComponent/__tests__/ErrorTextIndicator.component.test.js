import React from 'react';
import renderer from 'react-test-renderer';
import ErrorTextIndicator from '../ErrorTextIndicator.component';

describe('ErrorTextIndicator component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <ErrorTextIndicator />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
