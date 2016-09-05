
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import _ from 'lodash';
import moment from 'moment';

import PixTouchableIOS from '../../components/PixTouchable';

class AuthorCell extends Component {
  render() {
    const { news } = this.props;
    const { html, author, published_at } = news;

    const publishedAt = moment(published_at).format('LL');
    const readTime = _.round(_.words(html).length / 130) + 1;

    let cell = (
      <View>
        <View style={styles.authorSection}>
          <Image source={require('./img/me.png')} style={styles.authorImage} />
          <View style={styles.authorName}>
            <Text numberOfLines={1} style={styles.authorText}>
              {author}
            </Text>
            <Text numberOfLines={1} style={styles.dateText}>
              {publishedAt} - {readTime} min read
            </Text>
          </View>
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
  cell: {
    paddingVertical: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
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
    marginBottom: 20
  },
  authorText: {
    flex: 1,
    fontFamily: 'HelveticaNeue',
    fontSize: 14,
    color: '#00ab6b',
    marginRight: 10,
    marginLeft: 10,
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
  titleSection: {
    flexDirection: 'row',
    // marginBottom: 10,
  },
  newsTitle: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'HelveticaNeue-bold',
    lineHeight: 24,
    color: '#000000',
    marginBottom: 4,
    marginRight: 10,
  },
  newsImage: {
    height: 210,
    width: 345,
    marginBottom: 15,
  },
  newsText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'normal',
    fontFamily: 'HelveticaNeue-bold',
    lineHeight: 24,
    color: '#000000',
    marginBottom: 4,
    marginRight: 10,
  },
});

export default AuthorCell;
