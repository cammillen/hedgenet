import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SvgUri from 'react-native-svg-uri'; // import the react-native-svg-uri library

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Open up App.js to start working on your app!</Text>
      <Text>Add extra text here its cool.</Text>
      <SvgUri
        width="100"
        height="100"
        source={require('./src/assets/icons/light/Activity.svg')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});