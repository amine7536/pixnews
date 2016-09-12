import React, { TouchableHighlight } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PixTouchable from '../../app/components/PixTouchable';

describe('<PixTouchable />', () => {
  it('should render : TouchableHighlight', () => {
    const wrapper = shallow(<PixTouchable />);
    expect(wrapper.find(TouchableHighlight)).to.have.length(1);
  });
});
