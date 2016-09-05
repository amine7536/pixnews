
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import HTMLView from 'react-native-htmlview';
import _ from 'lodash';

import PixTouchableIOS from '../../components/PixTouchable';

class NewsCell extends Component {
  render() {
    const { news } = this.props;
    const { image, title, html } = news;

    let excerpt;
    if (this.props.truncate) {
      excerpt = _.truncate(html, { length: this.props.truncate });
    } else {
      excerpt = html;
    }

    let cell = (
      <View>
        <View style={styles.titleSection}>
          <Text numberOfLines={2} style={styles.newsTitle}>
            {title}
          </Text>
        </View>
        <Image source={{ uri: image }} style={styles.newsImage} />
        <HTMLView
          style={styles.newsText}
          stylesheet={htmlStyles}
          value={excerpt}
        />
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

const htmlStyles = StyleSheet.create({
  p: {
    fontSize: 16,
    fontWeight: 'normal',
    fontFamily: 'HelveticaNeue-bold',
    lineHeight: 24,
    color: '#000000',
  }
});

const styles = StyleSheet.create({
  cell: {
    paddingVertical: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
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

export default NewsCell;
