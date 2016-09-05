import React, { View, Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PixListCell from '../../app/components/PixListCell';

describe('<PixListCell />', () => {
  it('should render : View', () => {
    const wrapper = shallow(<PixListCell />);
    expect(wrapper.length).to.equal(1);
  });
});
