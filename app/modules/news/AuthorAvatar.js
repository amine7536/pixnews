
import React from 'react';
import { StyleSheet, Image } from 'react-native';

const AuthorAvatar = (props) => {
  const { author_image } = props;
  return (
    <Image source={{ uri: author_image }} style={styles.authorImage} />
  );
};

const styles = StyleSheet.create({
  authorImage: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
});

export default AuthorAvatar;
