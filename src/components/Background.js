// This is the standard background with the squares on it.
// There also needs to be another part which is the black background underneath it that allows for the scrollable behaviour. 

import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const backgroundImage = require('../assets/background.png');

export default function Background(props) {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        {props.children}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
