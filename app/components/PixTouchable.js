import React from 'react';
import { TouchableHighlight } from 'react-native';

const PixTouchableIOS = (props) => {
  return (
    <TouchableHighlight
      accessibilityTraits="button"
      // underlayColor="#3C5EAE"
      underlayColor="rgba(0, 0, 0, 0)"
      {...props}
    />
  );
};

export default PixTouchableIOS;
