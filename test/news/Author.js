import React, { View, Text, Image } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Author from '../../app/modules/news/Author';

describe('<Author />', () => {
  const mockData = {
    html: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: 'https://cdn-images-1.medium.com/max/600/1*d0dbtek229yFBQv4G06b0w.png',
    published_at: '2016-07-14T23:31:20.167Z',
    author: 'The New York Times',
    author_image: 'http://stlpi.org/wp-content/uploads/2014/08/NYTimes-logo.jpg',
  };

  it('should render : View, Image, Text', () => {
    const wrapper = shallow(<Author news={mockData} />);
    expect(wrapper.find(View)).to.have.length(2);
    expect(wrapper.find(Image)).to.have.length(1);
    expect(wrapper.find(Text)).to.have.length(2);
    expect(
      wrapper.contains(
        <View>
          <Image source={{ uri: 'https://cdn-images-1.medium.com/max/600/1*d0dbtek229yFBQv4G06b0w.png' }} />
          <View>
            <Text>
              The New York Times
            </Text>
            <Text>
              July 15 - 3 min read
            </Text>
          </View>
        </View>
      )
    ).to.equal(true);
  });
});
