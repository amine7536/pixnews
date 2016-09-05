import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';

const PixListCell = (props) => {
  const { style } = props;
  return (
    <View
      style={[styles.cell, style || {}]}
      {...props}
    />
  );
};

PixListCell.propTypes = {
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  cell: {
    paddingVertical: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});

export default PixListCell;
