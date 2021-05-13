import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Heading = () => {
  return <Text style={styles.textStyle}>Shopping List</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    position: 'absolute',
    width: 285,
    height: 33,
    paddingRight: 60,
    top: 87,
    fontFamily: 'Josefin Sans Thin',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 32.1647,
    lineHeight: 32,
    textAlign: 'right',
    color: '#0B562E',
  },
});

export default Heading;
