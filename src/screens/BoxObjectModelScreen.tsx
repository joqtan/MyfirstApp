import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Box Object Model</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
  text: {
    padding: 10,
    fontSize: 20,
    width: 150,
    borderWidth: 2,
    backgroundColor: 'blue',
  },
});
