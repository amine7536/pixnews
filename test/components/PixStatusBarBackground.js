import React, { View } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import StatusBarBackground from '../../app/components/StatusBarBackground';

describe('<StatusBarBackground />', () => {
  it('should render : View', () => {
    const wrapper = shallow(<StatusBarBackground />);
    expect(wrapper.find(View)).to.have.length(1);
  });
});
