import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Card = props => {
  const {text} = props;

  return (
    <View style={styles.cardWrapper}>
      <View style={styles.leftIcon} />
      <Text style={styles.itemTextStyle}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    position: 'absolute',
    width: 320,
    height: 69,
    left: 40,
    top: 160,
    backgroundColor: '#D9F1DB',
    borderRadius: 5,
    alignItems: 'center',
  },
  itemTextStyle: {
    flex: 1,
    flexWrap: 'wrap',
    width: 170,
    height: 20,
    paddingRight: 25,
    top: 25,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 22,
    lineHeight: 22,
    // textAlign: 'right',
  },
  leftIcon: {
    position: 'absolute',
    width: 18,
    height: 19,
    left: 20,
    top: 25,
    backgroundColor: '#319B94',
    borderRadius: 50,
  },
});

export default Card;
