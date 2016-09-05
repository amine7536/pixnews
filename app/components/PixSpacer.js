import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';


const PixSpacer = (props) => {
  return (
    <View style={[styles.spacer, props.style || {}]} />
  );
};

const styles = StyleSheet.create({
  spacer: {
    paddingVertical: 5
  },
});

export default PixSpacer;
