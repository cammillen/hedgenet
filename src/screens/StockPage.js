//Individual Stock Screens. Must make appropriate backend and api calls

import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import TopMenuBar from '../components/TopMenuBar.js';
import Background from '../components/Background.js';
import BottomMenuBar from '../components/BottomMenuBar.js';
import { NavigationContainer } from '@react-navigation/native';
import StockHeader from '../components/StockPage/StockHeader.js';
import MarketStats from '../components/StockPage/MarketStats.js';
import StockGraphVisual from '../components/StockPage/StockGraphVisual.js';
import StockHeaderCard from '../components/StockPage/StockHeaderCard.js';
import WhatExpert from '../components/StockPage/WhatExpert.js';
import EarningShare from '../components/StockPage/EarningShare.js';
import StockPriceCard from '../components/StockPage/StockPriceCard.js';
import StockPosition from '../components/StockPage/StockPosition.js';
import NewsSection from '../components/StockPage/NewsSection';
import MarketCap from '../components/StockPage/MarketCap.js';
import StoryBlocks from '../components/StockPage/StoryBlocks.js';
import MarketStatsDetails from '../components/StockPage/MarketStatsDetails.js';
import SliderBar from '../components/StockPage/SliderBar.js';

import DummyStocks from '../assets/stocks/dummyStockData.js';

export default function StockPage (route) {

  const { params } = route.route;
  const stockName = params?.stockName;
  const Screen = 'Stock Page';

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
          <StockHeader stockName={stockName}/>
          <ScrollView alwaysBounceVertical={true}>
            <StockGraphVisual stockName={stockName} />
            <StockHeaderCard />
            <StockPriceCard delta={DummyStocks[stockName].shareValue - DummyStocks[stockName].previousValue} price={DummyStocks[stockName].shareValue} />
            <StockPosition ticker={DummyStocks[stockName].ticker} />
            <MarketStats ticker={DummyStocks[stockName].ticker}/>
            <MarketCap stockName={stockName} ticker={DummyStocks[stockName].ticker}/>
            <WhatExpert/>
            <EarningShare/>
            <NewsSection/>
            <StoryBlocks/>
          </ScrollView >
          
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