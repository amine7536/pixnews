import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';


const ViewContainer = (props) => {
  return (
    <View style={[styles.viewContainer, props.style || {}]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});

export default ViewContainer;
