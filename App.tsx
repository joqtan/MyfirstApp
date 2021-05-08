import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {AssignmentScreen} from './src/screens/AssignmentScreen';
// import {FlexScreen} from './src/screens/FlexScreen';
// import {PositionScreen} from './src/screens/PositionScreen';
// import {DimensionsScreen} from './src/screens/DimensionsScreen';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
// import {CounterScreen} from './src/screens/CounterScreen';
// import {HelloWorldScreen} from './src/screens/HelloWorldScreen';

export const App = () => {
  return (
    //<HelloWorldScreen />;
    // <CounterScreen />
    // <BoxObjectModelScreen />
    // <PositionScreen />
    // <FlexScreen />
    <SafeAreaView style={styles.saw}>
      <AssignmentScreen />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  saw: {flex: 1, backgroundColor: '#28425b'},
});
