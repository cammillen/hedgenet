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
import { NavigationContainer } from '@react-navigation/native';
import SearchBarInactive from './src/components/SearchBarInactive.js';
import SearchBarActive from './src/components/SearchBarActive.js';
import Background from './src/components/Background.js';
import BoxWithButton from './src/components/BottomMenuBar.js';
import IndexFundCard from './src/components/IndexFundCard.js';
import BottomMenuBarBackground from './src/components/BottomMenuBar.js';
import TabNavigator from './src/components/SliderBar';

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
          <TopMenuBar screen = {'Home'}/>
          <SearchBarInactive/>
          <FundLabel name={fundName} />      
          <ValueCard cashBalance={cash} delta={difference} />
          <IndexFundCard markets={[{ marketName: 'DOW', growth: 0.0357 }, { marketName: 'S&P', growth: 0.0196 }, { marketName: 'NASDAQ', growth: 0.0285 }]} />
          <MyPositions />
          <TabNavigator/>
          {/* <PositionsLoop stocks={['Google','Blackberry','Coca-Cola','Netflix','Apple','Alibaba','Amazon','Advanced Micro Devices','Dell','LG','Meta','Microsoft','Sony','Spotify','Tesla','Twitter','Virgin']} /> */}
          <View style={styles.bottomMenuBarContainer}>
            <BottomMenuBarBackground/>
          </View>
        </View>
      </Background>
    </NavigationContainer>
  );
}

// Style sheet with custom styles: 

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

  //DUMMY VARIABLES
  let cash = 19654850;
  let difference = 6637849;
  let fundName = "My Portfolio";
  //let fundName = "MMMMMMMMMMM";

  //REPLACE ALL WITH BACKEND CALLS