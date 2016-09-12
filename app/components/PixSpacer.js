import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

const PixSpacer = (props) => {
  return (
    <View style={[styles.spacer, props.style || {}]} />
  );
};

PixSpacer.propTypes = {
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  spacer: {
    paddingVertical: 5
  },
});

export default PixSpacer;
