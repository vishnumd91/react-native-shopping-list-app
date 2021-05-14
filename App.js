/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Card from './components/CardComponent/card';
import Heading from './components/HeadingComponent/heading';

const App = () => {
  return (
    <View style={styles.container}>
      <Heading />
      <Card text={'This is a List'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 1920,
    height: 1080,
    backgroundColor: '#C8CBC7',
  },
});

export default App;
