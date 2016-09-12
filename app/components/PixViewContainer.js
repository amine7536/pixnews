import React from 'react';
import { View } from 'react-native';

import { ApplicationStyles } from '../theme';

const PixViewContainer = (props) => {
  return (
    <View style={[ApplicationStyles.mainContainer, props.style || {}]}>
      {props.children}
    </View>
  );
};

export default PixViewContainer;
