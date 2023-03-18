// Notifications  Screen

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopMenuBar from '../components/TopMenuBar.js';
import { NavigationContainer } from '@react-navigation/native';
import Background from '../components/Background.js';
import BottomMenuBar from '../components/BottomMenuBar.js';
import TextWithFilter from '../components/SectionHeaders/TextWithFilterArrowBack.js';
import SliderBar from '../components/SliderBar';
import MyNewsfeed from '../components/MyNewsfeed.js';


const newsfeed = [
  {username:'j3natools',fund:'UCL Fintech',tag:'sell@TSLA',trade:5231.75,date:'2023-03-16T18:10:53'},
  {username:'t0rr3s',fund:'UCL Fintech',tag:'buy@NVDA',trade:-1000.00,date:'2023-03-16T18:00:22'},
  {username:'arranjames',fund:'UCL Fintech',tags:['sell@HLN','buy@JD','hold@BEZ'],date:'2023-03-16T08:19:59',upvotes:345,comments:92,
  message:'The conflicts of the CTO with the regional management is bad news for Haleon. I see more decrease in its stock price soon, so sell@HLN. Financials look healthy for JD Sports, so buy@JD as the company looks healthy. I think hold@BEZ, as no big news, either positive or negative for the company.'},
  {username:'coqboi',fund:'LSE Sustainable Finance',tag:'buy@FTSA',trade:-500.00,date:'2023-03-15T10:10:12'},
  {username:'doughgirl',fund:'UCL Fintech',tag:'sell@GTSA',trade:23231.22,date:'2023-03-15T10:01:53'},
  {username:'duttidatti',fund:'LSE Sustainable Finance',tag:'sell@YUAS',trade:19222.11,date:'2023-03-15T09:56:23'},
  {username:'willsqeen',fund:'LSE Sustainable Finance',tags:['sell@GBH','buy@LSD','hold@PCP'],date:'2023-03-15T20:20:34',upvotes:201,comments:56,
  message:'The conflicts of the CTO with the regional management is bad news for Haleon. I see more decrease in its stock price soon, so sell@GBH. Financials look healthy for JD Sports, so buy@LSD as the company looks healthy. I think hold@PCP, as no big news, either positive or negative for the company.'},
  {username:'marisss',fund:'UCL Fintech',tag:'buy@NVDA',trade:-1000.00,date:'2023-03-14T19:56:45'},
]

//backend call to notifications -- treat Daily Review as the fund!
const uniqueFunds = [...new Set(newsfeed.filter(news => news.fund).map(news => news.fund))].filter(Boolean);  
let screens = [() => <MyNewsfeed newsfeed={newsfeed} paddingBottom={150} bottomText={'See More'}/>]

export default function Newsfeed () {

  const Screen = 'Social';

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

  if (screens.length <= uniqueFunds.length) { //why on god's green earth does this loop run multiple times?
    uniqueFunds.forEach(element => 
      screens.push(
      () => <MyNewsfeed key={element} newsfeed={newsfeed.filter(news => news.fund == element)} paddingBottom={150} bottomText={'See More'} />
    ));
  }

  return ( 
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container} onLayout={onLayoutRootView}>
        <TopMenuBar screen={'Social'} />
        <TextWithFilter title={'Newsfeed'} rightTitle={'Filter'} />
        <SliderBar bottomspacing={150} titles={['All',...uniqueFunds]} screens={screens} />
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