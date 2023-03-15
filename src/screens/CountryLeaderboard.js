// PLaceholder Screen
// Chnage everything with PLaceholder in, only 2 things to change. 

import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useRoute } from '@react-navigation/native';
import TopMenuBar from '../components/TopMenuBar.js';
import Background from '../components/Background.js';
import BottomMenuBar from '../components/BottomMenuBar.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BrowseFunds from '../components/BrowseFunds.js';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import GlobalLinearGradients from '../components/LinearGradients.js';


import DummyFunds from '../assets/funds/dummyFundData.js';

export default function CountryLeaderboard () {

  const navigation = useNavigation();

  const Screen = 'Leaderboard';
  const route = useRoute();
  const country = route.params.toPassOn;

  const sortedFundsCountry = Object.entries(DummyFunds).filter(([, fund]) => fund.country === country).sort((a, b) => {
    const aChange = (a[1].fundValue - a[1].previousValue) / a[1].previousValue;
    const bChange = (b[1].fundValue - b[1].previousValue) / b[1].previousValue;
    return bChange - aChange;
  });
  const filteredFundsCountry = sortedFundsCountry.slice(0, 25).map(fund => fund[0]);

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
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../assets/icons/ArrowLeft_Green.png')} style={[styles.arrowIcon, { marginRight: 16}]} />
          </TouchableOpacity>  
          <Text style={globalFonts.H4(globalColors.others.white.color)}>{country+' Leaderboard'}</Text>
        </View>
        <View style={{height:7}}/>
        {/* <GlobalLinearGradients color1={'#000'} color2={'transparent'} style={'verticalDownOverlap'} dimensionSize={10} /> */}
        <BrowseFunds funds={filteredFundsCountry} paddingBottom={150}/>
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
  header: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    height: 38,
    marginTop: 26,
    marginLeft:24
  },
arrowIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain'
},
});
