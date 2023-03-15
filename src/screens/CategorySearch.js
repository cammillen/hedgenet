// PLaceholder Screen
// Chnage everything with PLaceholder in, only 2 things to change. 

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { globalColors } from '../styles/Colors.js';
import TopMenuBar from '../components/TopMenuBar.js';
import Background from '../components/Background.js';
import BottomMenuBar from '../components/BottomMenuBar.js';
import CategorySearchHeader from '../components/CategorySearchHeader.js';
import MyPositions from '../components/MyPositions.js';
import GlobalLinearGradients from '../components/LinearGradients.js';

import DummyStocks from '../assets/stocks/dummyStockData.js';

export default function CategorySearch (route) {

  const Screen = 'CategorySearch';
  let category = route.route.params.element;
  const filteredStocks = route.route.params.element != '✅ All Stocks' ? Object.entries(DummyStocks).filter(([key, value]) =>
    value.tags.includes(category)).map(([key, value]) => key) : Object.entries(DummyStocks).map(([key, value]) => key);

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
      <TopMenuBar screen={'Search'} />
      <CategorySearchHeader category={category}/>
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
