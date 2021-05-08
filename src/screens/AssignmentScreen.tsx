import React from 'react';
import {StyleSheet, View} from 'react-native';

export const AssignmentScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.purpleBox} />
      <View style={style.orangeBox} />
      <View style={style.blueBox} />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: '#28425b',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  purpleBox: {
    width: 100,
    height: 100,
    // top: 100,
    // flex: 1,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856d6',
    // alignSelf: 'flex-end',
  },
  orangeBox: {
    width: 100,
    height: 100,
    // flex: 1,
    // left: 100,
    top: 50,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#f0a23b',
    // alignSelf: 'center',
  },
  blueBox: {
    width: 100,
    height: 100,
    // flex: 2,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28c4d9',
    // alignSelf: 'flex-end',
  },
});
