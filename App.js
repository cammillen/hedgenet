import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { globalColors } from './src/styles/Colors.js';
import { globalFonts } from './src/styles/Fonts.js';

// Loading the custom fonts (you have to use this at the start of every screen): 

SplashScreen.preventAutoHideAsync(); 

export default function App() {
  const [fontsLoaded] = useFonts({
    'Urbanist-Bold': require('./src/assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist-SemiBold': require('./src/assets/fonts/Urbanist-SemiBold.ttf'),
    'Urbanist-Medium': require('./src/assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist-Regular': require('./src/assets/fonts/Urbanist-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

// Custom fonts loaded, code below is for the screen: 

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={globalFonts.BodyXLarge.Regular(globalColors.main.green.color)}>Urbanist Bold</Text>
      <Text style={globalFonts.BodyLarge.Regular(globalColors.main.yellow.color)}>Urbanist Bold</Text>
      <Text style={globalFonts.BodyMedium.Regular(globalColors.main.green.color)}>Urbanist Bold</Text>
      <Text style={globalFonts.BodySmall.Regular(globalColors.main.yellow.color)}>Urbanist Bold</Text>
      <Text style={globalFonts.BodyXSmall.Regular(globalColors.main.green.color)}>Urbanist Bold</Text>
      <Text style={{ fontSize: 30, color: globalColors.main.yellow.color }}>Platform Default</Text>
    </View>
  );
}

// Style sheet with custom styles: 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
