import React, { View, Text, Image } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from "sinon";

import Author from '../../app/modules/news/Author';
import AuthorCell from '../../app/modules/news/AuthorCell';


describe('<AuthorCell />', () => {
  const mockData = {
    html: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: 'https://cdn-images-1.medium.com/max/600/1*d0dbtek229yFBQv4G06b0w.png',
    published_at: '2016-07-14T23:31:20.167Z',
    author: 'The New York Times',
    author_image: 'http://stlpi.org/wp-content/uploads/2014/08/NYTimes-logo.jpg',
  };

  it('should render : Author', () => {
    const wrapper = shallow(
      <AuthorCell
        news={mockData}
      />
    );
    expect(wrapper.find(Author)).to.have.length(1);
  });

  it('should have +news+ prop', () => {
    const wrapper = shallow(
      <AuthorCell
        news={mockData}
      />
    );
    /* eslint no-unused-expressions: 0 */
    expect(wrapper.props().news).to.be.defined;
  });

  it('should handle button presses', () => {
    const onPress = sinon.spy();
    const wrapper = shallow(
      <AuthorCell
        onPress={onPress}
        news={mockData}
      />);
    wrapper.simulate('press');
    expect(onPress.calledOnce).to.equal(true);
  });
});
