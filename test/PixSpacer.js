import React, { View, Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PixSpacer from '../app/components/PixSpacer';

describe('<PixSpacer />', () => {
  it('should render : View', () => {
    const spacer = shallow(<PixSpacer style={{ paddingVertical: 5 }} />);
    expect(spacer.find(View)).to.have.length(1);
    // expect(spacer.length).to.equal(1);
  });
});
