import React from 'react';
import renderer from 'react-test-renderer';
import OverlaySpinner from '../OverlaySpinner.component';

describe('OverlayModal component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<OverlaySpinner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
