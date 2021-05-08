import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  //   Dimensions,
  useWindowDimensions,
} from 'react-native';

// const {width, height} = Dimensions.get('window');

export const DimensionsScreen = () => {
  const {width, height} = useWindowDimensions();

  return (
    <>
      <View style={styles.container}>
        <View style={{...styles.purpleBox, width: width * 0.2}} />
        <View style={styles.orangeBox} />
      </View>
      <Text style={styles.title}>
        W:{width} H:{height}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    backgroundColor: 'red',
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    width: '50%',
    height: '50%',
  },
  orangeBox: {
    backgroundColor: '#f0a23b',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});
