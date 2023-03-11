//Browse Screen

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopMenuBar from '../components/TopMenuBar.js';
import { NavigationContainer } from '@react-navigation/native';
import Background from '../components/Background.js';
import BottomMenuBar from '../components/BottomMenuBar.js';
import LeftArrowTextHeader from '../components/Section Headers/LeftArrowTextHeader.js';
import TopPerformers from '../components/BrowseFundsTopPerformersHeaders.js';
import BrowseFundsHeader from '../components/BrowseFundsHeader.js';
import BrowseFunds from '../components/BrowseFunds.js';

export default function Browse () {

  const Screen = 'Browse';

  const [fontsLoaded] = useFonts({
    'Urbanist-Bold': require('../assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist-SemiBold': require('../assets/fonts/Urbanist-SemiBold.ttf'),
    'Urbanist-Medium': require('../assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist-Regular': require('../assets/fonts/Urbanist-Regular.ttf'),
  });

  SplashScreen.preventAutoHideAsync(); 

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return ( 
    <NavigationContainer>
    <Background>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container} onLayout={onLayoutRootView}>
        <TopMenuBar screen = {Screen}/>
        <LeftArrowTextHeader lastPage={'Home'} leftTitle={'Browse Funds'}/>
        <SearchBarInactive/>
        <TopPerformers funds={funds}/>
        <BrowseFundsHeader category={'UCL'} />
        <BrowseFunds funds={['Fintech Algo', 'UCL Agtech']} paddingBottom={150}/>
        <View style={styles.bottomMenuBarContainer}>
          <BottomMenuBar/>
        </View>
      </View>
    </Background>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomMenuBarContainer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -5,
    marginLeft: 5,
  },
});

const funds = ['Cambr Invest', 'Oxford Traders', 'UCL Fintech', 'StAnd Algo'];