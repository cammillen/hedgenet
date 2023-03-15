// PLaceholder Screen
// Chnage everything with PLaceholder in, only 2 things to change. 

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopMenuBar from '../components/TopMenuBar.js';
import Background from '../components/Background.js';
import BottomMenuBar from '../components/BottomMenuBar.js';
import TextWithSort from '../components/SectionHeaders/TextWithSort.js';
import TopMoversHeader from '../components/TopMoversHeader';
import GlobalLinearGradients from '../components/LinearGradients.js';
import MyPositions from '../components/MyPositions.js';

import DummyStocks from '../assets/stocks/dummyStockData.js';

export default function TopMoversSearch (route) {

  const Screen = 'Search';

  const sortedStocks = Object.entries(DummyStocks).sort((a, b) => {
    const aChange = Math.abs((a[1].shareValue - a[1].previousValue) / a[1].previousValue);
    const bChange = Math.abs((b[1].shareValue - b[1].previousValue) / b[1].previousValue);
    return bChange - aChange;
  });
  const filteredStocks = sortedStocks.slice(0,topMoversNum).map(stock => stock[0]);

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
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container} onLayout={onLayoutRootView}>
        <TopMenuBar screen={Screen} />
        <TopMoversHeader />
        <TextWithSort title={topMoversNum + ' Companies'} rightTitle={'Asc. Order'}/>
        {/* <GlobalLinearGradients color1={'#000'} color2={'transparent'} style={'verticalDownOverlap'} dimensionSize={10} /> */}
        <MyPositions stocks={filteredStocks} paddingBottom={150} bottomText={'See More'}/>
        <View style={styles.bottomMenuBarContainer}>
          <BottomMenuBar />
        </View>
      </View>
    </Background>
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

const topMoversNum = 25; //IMPORTANT -- WE NEED TO DECIDE HOW MANY STOCKS ARE CONSIDERED TOP MOVERS