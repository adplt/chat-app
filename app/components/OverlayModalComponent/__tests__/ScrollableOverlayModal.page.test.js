import React from 'react';
import renderer from 'react-test-renderer';
import ScrollableOverlayModal from '../ScrollableOverlayModal.component';

describe('ScrollableOverlayModal component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ScrollableOverlayModal />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
