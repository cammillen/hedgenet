// PLaceholder Screen
// Chnage everything with PLaceholder in, only 2 things to change. 

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useRoute } from '@react-navigation/native';
import TopMenuBar from '../components/TopMenuBar.js';
import Background from '../components/Background.js';
import BottomMenuBar from '../components/BottomMenuBar.js';
import LeftArrowTextHeader from '../components/SectionHeaders/LeftArrowTextHeader';
import SearchBarInactive from '../components/SearchBarInactive.js';
import TextRightArrowHeader from '../components/SectionHeaders/TextRightArrowHeader.js';
import TopPerformers from '../components/BrowseFundsTopPerformers.js';
import TextWithSort from '../components/SectionHeaders/TextWithSort.js';
import BrowseFunds from '../components/BrowseFunds.js';

import DummyFunds from '../assets/funds/dummyFundData.js';



export default function Leaderboard () {

  const Screen = 'Leaderboard';
  const route = useRoute();
  const { country, uni } = route.params;

  const sortedFundsCountry = Object.entries(DummyFunds).filter(([, fund]) => fund.country === country).sort((a, b) => {
    const aChange = (a[1].fundValue - a[1].previousValue) / a[1].previousValue;
    const bChange = (b[1].fundValue - b[1].previousValue) / b[1].previousValue;
    return bChange - aChange;
  });
  const filteredFundsCountry = sortedFundsCountry.slice(0, 10).map(fund => fund[0]);

  const sortedFundsUni = Object.entries(DummyFunds).filter(([, fund]) => fund.uni === uni).sort((a, b) => {
    const aChange = (a[1].fundValue - a[1].previousValue) / a[1].previousValue;
    const bChange = (b[1].fundValue - b[1].previousValue) / b[1].previousValue;
    return bChange - aChange;
  });
  const filteredFundsUni = sortedFundsUni.slice(0, 10).map(fund => fund[0]);

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
        <TopMenuBar screen={'Home'} />
        <LeftArrowTextHeader leftTitle={Screen} />
        <SearchBarInactive />
        <View style={{height:24}}/>
        <TextRightArrowHeader leftTitle={'Top '+country+' Performers'} rightTitle={''} navigatePage={'CountryLeaderboard'} params={country} />
        <View style={{height:20}}/>
        <TopPerformers funds={filteredFundsCountry} />
        <TextWithSort title={'Top '+uni+' Funds'} rightTitle={'Asc. Order'} />
        <BrowseFunds funds={filteredFundsUni} paddingBottom={150}/>
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
