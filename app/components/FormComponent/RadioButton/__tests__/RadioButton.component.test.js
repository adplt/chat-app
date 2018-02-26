import React from 'react';
import renderer from 'react-test-renderer';
import RadioButton from '../RadioButton.component';
import {shallow, configure} from 'enzyme';
import noop from 'lodash/noop';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Radio Button component', () => {
  it('renders correctly', () => {
    const options = [{label: 'xxx', value: 'xxx'}];
    const input = {value: {value: 'xxx'}, onChange: noop};
    const tree = renderer.create(<RadioButton options={options} input ={input}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('it should return true for the selected option', () => {
    const input = {value: {value: 'xxx'}};
    const selectedOption = {value: 'xxx'};
    const wrapper = shallow(<RadioButton input={input}/>);
    expect(wrapper.instance().setSelectedOption(selectedOption, selectedOption)).toBeTruthy();
  });
});
