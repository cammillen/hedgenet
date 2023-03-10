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


export default function Search () {

  const Screen = 'Search';

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
            <CategorySearchScroller categories={['✅ All Stocks','🚀 Visionary','🍔 Food & Drink','😎 Lifestyle','🎇 Entertainment','💻 Tech Giants','📺 Social Media','🚗 Car & Bikes','🦠 Covid-19','🚀 Recommended Buys','🎮 Games','🖥 Electronics']}/>
            <TopMovers stocks={stocklist}/>
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

const stocklist = [
    {name: 'Spotify', ticker: 'SPTF', growth: 12.37},
    {name: 'Twitter', ticker: 'TWTR', growth: -9.29},
    {name: 'Apple', ticker: 'AAPL', growth: 8.16},
    {name: 'Netflix', ticker: 'NFLX', growth: -7.55},
    {name: 'Amazon', ticker: 'AMZN', growth: 6.11}
];//important that this is an array!