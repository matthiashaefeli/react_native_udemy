import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const VIEW_HEIGHT = 100;
const VIEW_WIDTH = 100;

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  )
};

const styles = StyleSheet.create({
  parentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOneStyle: {
    height: VIEW_HEIGHT,
    width: VIEW_WIDTH,
    backgroundColor: 'red',
  },
  viewTwoStyle: {
    height: VIEW_HEIGHT,
    width: VIEW_WIDTH,
    backgroundColor: 'green',
    top: 100
  },
  viewThreeStyle: {
    height: VIEW_HEIGHT,
    width: VIEW_WIDTH,
    backgroundColor: 'blue',
  }
});

export default BoxScreen;