// PLaceholder Screen
// Chnage everything with PLaceholder in, only 2 things to change. 

import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation } from '@react-navigation/native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import TopMenuBar from '../components/TopMenuBar.js';
import Background from '../components/Background.js';
import BottomMenuBar from '../components/BottomMenuBar.js';
import SearchBarActive from '../components/SearchBarActive.js';
import CategorySearchScroller from '../components/CategorySearchScroller.js';
import TopMovers from '../components/TopMoversScroller.js';

import DummyStocks from '../assets/stocks/dummyStockData.js';
import categoryList from '../assets/categories.js';


export default function Search () {

  const Screen = 'Search';

  const sortedStocks = Object.entries(DummyStocks).sort((a, b) => {
    const aChange = Math.abs((a[1].shareValue - a[1].previousValue) / a[1].previousValue);
    const bChange = Math.abs((b[1].shareValue - b[1].previousValue) / b[1].previousValue);
    return bChange - aChange;
  });
  const filteredStocks = sortedStocks.slice(0,10).map(stock => stock[0]);

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
        <SearchBarActive />
        <View style={{height:24 /* Generic spacing */}}/>
        <ScrollView horizontal={false}>
            <CategorySearchScroller categories={categoryList}/>
            <TopMovers stocks={filteredStocks}/>
        </ScrollView>
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