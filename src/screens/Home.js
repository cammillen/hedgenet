// Import all packages: 

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopMenuBar from '../components/TopMenuBar.js';
import ValueCard from '../components/ValueCard.js';
import LogoHeader from '../components/LogoHeader.js';
import MyPositions from '../components/MyPositions.js';
import SearchBarInactive from '../components/SearchBarInactive.js';
import Background from '../components/Background.js';
import BottomMenuBar from '../components/BottomMenuBar.js';
import TabNavigator from '../components/SliderBar';
import IndexFundCard from '../components/IndexFundCard.js';

// Loading the custom fonts (you have to use this at the start of every screen): 

SplashScreen.preventAutoHideAsync(); 


export default function Home() {

  const Screen = 'Home';

  const [fontsLoaded] = useFonts({
    'Urbanist-Bold': require('../assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist-SemiBold': require('../assets/fonts/Urbanist-SemiBold.ttf'),
    'Urbanist-Medium': require('../assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist-Regular': require('../assets/fonts/Urbanist-Regular.ttf'),
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
      <Background>
          <StatusBar barStyle="light-content" backgroundColor="#000" />
        <View style={styles.container} onLayout={onLayoutRootView}>
          <TopMenuBar screen = {'Home'}/>
          <SearchBarInactive/>
          <LogoHeader name={'My Portfolio'} />      
          <ValueCard cashBalance={cash} delta={difference} />
          <IndexFundCard markets={[{ marketName: 'DOW', growth: 0.0357 }, { marketName: 'S&P', growth: 0.0196 }, { marketName: 'NASDAQ', growth: 0.0285 }]} />
          <MyPositions />
          <TabNavigator/>
          {/* <PositionsLoop stocks={['Google','Blackberry','Coca-Cola','Netflix','Apple','Alibaba','Amazon','Advanced Micro Devices','Dell','LG','Meta','Microsoft','Sony','Spotify','Tesla','Twitter','Virgin']} /> */}
          <View style={styles.bottomMenuBarContainer}>
            <BottomMenuBar/>
          </View>
        </View>
      </Background>
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