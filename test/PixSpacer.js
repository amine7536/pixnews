import React, { View, Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PixSpacer from '../app/components/PixSpacer';

describe('<PixSpacer />', () => {
  it('should render vertical spacer', () => {
    const wrapper = shallow(<PixSpacer />);
    expect(wrapper.length).to.equal(1);
  });
});
