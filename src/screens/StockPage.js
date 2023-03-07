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
import StockHeader from '../components/StockHeader.js';
import StockGraphVisual from '../components/StockGraphVisual.js';
import StockHeaderCard from '../components/StockHeaderCard.js';
import StockPriceCard from '../components/StockPriceCard.js';
import StockPosition from '../components/StockPosition.js';

export default function StockPage (route) {

  const { params } = route.route;
  const stockName = params?.stockName;
  const Screen = 'StockPage';

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
  //replace all backend data calls with a single file for consistency
  const temporaryStockValues = {
    Blackberry: {stockPrice: 7105, difference:217, ticker:'BLCB'},
  };

  return ( 
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container} onLayout={onLayoutRootView}>
        <TopMenuBar screen={Screen} />
        <ScrollView >

          <StockHeader stockName={stockName}/>
          <StockGraphVisual stockName={stockName} />
          <StockHeaderCard />
          <StockPriceCard delta={temporaryStockValues[stockName].difference} price={temporaryStockValues[stockName].stockPrice} />
          <StockPosition ticker={temporaryStockValues[stockName].ticker} />

        </ ScrollView>
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
