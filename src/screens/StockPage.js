//Individual Stock Screens. Must take stockname as parameter and make appropriate backend and api calls

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { globalColors } from './src/styles/Colors.js';
import { globalFonts } from './src/styles/Fonts.js';
import TopMenuBar from './src/components/TopMenuBar.js';
import { NavigationContainer } from '@react-navigation/native';
import Background from './src/components/Background.js';
import BottomMenuBar from './src/components/BottomMenuBar.js';
import StockHeader from './src/components/StockHeader.js';
import StockGraphVisual from './src/components/StockGraphVisual.js';


export default function Chat () {

  const Screen = 'Profile';

  SplashScreen.preventAutoHideAsync(); 

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const [fontsLoaded] = useFonts({
    'Urbanist-Bold': require('./src/assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist-SemiBold': require('./src/assets/fonts/Urbanist-SemiBold.ttf'),
    'Urbanist-Medium': require('./src/assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist-Regular': require('./src/assets/fonts/Urbanist-Regular.ttf'),
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    bottomMenuBarContainer:{
      position: 'absolute',
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: -5,
      marginLeft: 5,
    },
  });

  return ( 
    <NavigationContainer>
    <Background>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container} onLayout={onLayoutRootView}>
        <TopMenuBar screen = {Screen}/>
        <StockHeader stockName={'Blackberry'}/>
        <StockGraphVisual stockName={'Blackverry'}/>
        <View style={styles.bottomMenuBarContainer}>
          <BottomMenuBar/>
        </View>
      </View>
    </Background>
    </NavigationContainer>
  );
};