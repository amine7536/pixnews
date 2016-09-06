
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import _ from 'lodash';
import moment from 'moment';

const Author = (props) => {
  const { html, author, author_image, published_at } = props;
  const publishedAt = moment(published_at).format('LL');
  const readTime = _.round(_.words(html).length / 130) + 1;

  return (
    <View style={styles.authorSection}>
      <Image source={{ uri: author_image }} style={styles.authorImage} />
      <View style={styles.authorName}>
        <Text numberOfLines={1} style={styles.authorText}>
          {author}
        </Text>
        <Text numberOfLines={1} style={styles.dateText}>
          {publishedAt} - {readTime} min read
        </Text>
      </View>
    </View>
  );
};

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

export default Author;
