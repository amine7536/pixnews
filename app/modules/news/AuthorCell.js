
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import _ from 'lodash';

import moment from 'moment';
import PixTouchableIOS from '../../components/PixTouchable';

import AuthorAvatar from './AuthorAvatar';

class AuthorCell extends Component {
  render() {
    const { news } = this.props;
    const publishedAt = moment(news.published_at).format('LL');
    const readTime = _.round(_.words(news.html).length / 130) + 1;

    let cell = (
      <View style={styles.authorSection}>
        <AuthorAvatar author_image={news.author_image} />
        <View style={styles.authorName}>
          <Text numberOfLines={1} style={styles.authorText}>
            {news.author}
          </Text>
          <Text numberOfLines={1} style={styles.dateText}>
            {publishedAt} - {readTime} min read
          </Text>
        </View>
      </View>
    );

    if (this.props.onPress) {
      cell = (
        <PixTouchableIOS onPress={this.props.onPress}>
          {cell}
        </PixTouchableIOS>
      );
    }

    return cell;
  }
}

const styles = StyleSheet.create({
  authorImage: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  authorName: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  authorSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    // marginBottom: 20
  },
  authorText: {
    flex: 1,
    fontFamily: 'HelveticaNeue',
    fontSize: 14,
    color: '#00ab6b',
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 4,
  },
  dateText: {
    flex: 1,
    fontFamily: 'HelveticaNeue',
    fontSize: 10,
    color: '#9e9e9e',
    marginBottom: 4,
    marginRight: 10,
    marginLeft: 10,
  },
});

export default AuthorCell;
