import React, { View, Text, Image } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import AuthorAvatar from '../../app/modules/news/AuthorAvatar';

describe('<AuthorAvatar />', () => {
  const author_image = 'http://placehold.it/50x50';

  it('should render : Image', () => {
    const wrapper = shallow(<AuthorAvatar author_image={author_image} />);
    console.log(wrapper.debug());
    expect(wrapper.find(Image)).to.have.length(1);
    /* eslint no-unused-expressions: 0 */
    expect(wrapper.find(Image).props().author_image).to.be.defined;
  });
});
