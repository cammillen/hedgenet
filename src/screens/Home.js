// Import all packages: 

import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopMenuBar from '../components/TopMenuBar.js';
import ValueCard from '../components/ValueCard.js';
import LogoHeader from '../components/SectionHeaders/LogoHeader.js';
import TextWithSort from '../components/SectionHeaders/TextWithSort.js';
import MyPositions from '../components/MyPositions.js';
import SearchBarInactive from '../components/SearchBarInactive.js';
import Background from '../components/Background.js';
import BottomMenuBar from '../components/BottomMenuBar.js';
import SliderBar from '../components/SliderBar';
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
          {/* TO DO: Need to make sure you have done the logout modal below:  */}
          <LogoHeader name={'My Portfolio'} marginBottom={15} buttonnavigation={'LogoutModal'} />  
            <ValueCard cashBalance={cash} delta={difference} />
            <IndexFundCard markets={[{ marketName: 'DOW', growth: 0.0357 }, { marketName: 'S&P', growth: 0.0196 }, { marketName: 'NASDAQ', growth: 0.0285 }]} />
            <TextWithSort title='My Positions' />
            <SliderBar bottomspacing={150} titles={titles} screens={screens} />
          <View style={styles.bottomMenuBarContainer}>
            <BottomMenuBar/>
          </View>
        </View>
      </Background>
  );
}

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

  // Slider Bar Arguments (TO DO: Link to Backend): 

  const titles = ['Personal', 'UCL FinTech Fund', 'LSE Sustainable Finance Fund'];
  const screens = [
    // TO DO: Link to backend
    // paddingBottom is passed in so you can see the last stock - so it isnt covered by bottom menu bar.
    () => <MyPositions stocks={['Tesla', 'Blackberry', 'Coca-Cola', 'Netflix', 'Apple']} paddingBottom={150} bottomText={'See More'}/>,
    () => <MyPositions stocks={['Amazon', 'Advanced Micro Devices', 'Dell', 'LG', 'Meta']} paddingBottom={150} bottomText={'See More'}/>,
    () => <MyPositions stocks={['Microsoft', 'Sony', 'Spotify', 'Tesla']} paddingBottom={150} bottomText={'See More'} />,
  ];

// Value Card Arguments (TO DO: Link to Backend):
const cash = 19654850;
const difference = 6637849;
const fundName = "My Portfolio";
  