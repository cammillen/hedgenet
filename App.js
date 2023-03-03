// Import all packages: 

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { globalColors } from './src/styles/Colors.js';
import { globalFonts } from './src/styles/Fonts.js';
import TopMenuBar from './src/components/TopMenuBar.js';
import ValueCard from './src/components/ValueCard.js';
import FundLabel from './src/components/FundLabel.js';
import MyPositions from './src/components/MyPositions.js';
import PositionsLoop from './src/components/PositionsLoop.js';
import SliderBar from './src/components/SliderBar.js';
import { NavigationContainer } from '@react-navigation/native';
import SearchBarInactive from './src/components/SearchBarInactive.js';
import SearchBarActive from './src/components/SearchBarActive.js';
import Background from './src/components/Background.js';

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
  //add following below inactive variant:        <SearchBarActive/>
  return (
    <NavigationContainer>
      <Background>
          <StatusBar barStyle="light-content" backgroundColor="#000" />
        <View style={styles.container} onLayout={onLayoutRootView}>
          <TopMenuBar />
          <SearchBarInactive/>
            <FundLabel name={fundName} />      
          <ValueCard cashBalance={cash} delta={difference} />
          <SliderBar />
          <MyPositions />
          <PositionsLoop stocks={['Google','Blackberry','Coca-Cola','Netflix']} />
        </View>
        </Background>
    </NavigationContainer>
  );
}

// Style sheet with custom styles: 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 55,
  },
});

  //DUMMY VARIABLES
  let cash = 19654850;
  let difference = 6637849;
  let fundName = "My Portfolio";
  //let fundName = "MMMMMMMMMMM";

  //REPLACE ALL WITH BACKEND CALLS