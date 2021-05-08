import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={style.container}>
      <Text style={style.box1}>Box 1</Text>
      <Text style={style.box2}>Box 2</Text>
      <Text style={style.box3}>Box 3</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28c4d9',
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  box1: {
    // flex: 1,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    // alignSelf: 'center',
  },
  box2: {
    // flex: 1,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    // alignSelf: 'flex-start',
  },
  box3: {
    // flex: 2,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    // alignSelf: 'flex-end',
  },
});
