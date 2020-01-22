import React from 'react';
import { StyleSheet, Text, View, StatusBar, YellowBox } from 'react-native';

import Routes from './src/routes';

/*YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);*/

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello OmniStack!!</Text>
    </View>
 
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alingItems: 'center',
    justifyContent: 'center,'
  },
});