import React from 'react';
import renderer from 'react-test-renderer';
import OfflineBar from '../OfflineBar.component';

describe('OfflineBar component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<OfflineBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
