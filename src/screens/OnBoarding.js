//OnBoarding Screen

import React from 'react';
import { View, StyleSheet} from 'react-native';
import { StatusBar } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopMenuBar from '../components/TopMenuBar.js';
import { NavigationContainer } from '@react-navigation/native';
import Background from '../components/Background.js';
import BottomMenuBar from '../components/BottomMenuBar.js';
import Button from '../components/OnBoarding/OnBoardingButton.js';
import { globalColors } from '../styles/Colors.js';
import Index from '../components/OnBoarding/Carousel.js';
import Carousel, {Pagination} from 'react-native-reanimated-carousel';

export default function OnBoarding () {

  const Screen = 'OnBoarding';

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
          <Index/>
      </View>
      <View style={styles.buttonContainer}>  
          <View style={styles.buttonWrapper}>
            <Button color={globalColors.dark._3.color} title="Continue with Google" />
          </View>
          <View style={styles.buttonWrapper}>
            <Button color={globalColors.primary._500.color} title="Sign up" />
          </View>
          <View style={styles.buttonWrapper}>
            <Button color={globalColors.dark._3.color} title="Sign in" />
          </View>
      </View>    
    </Background>
  )
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 90,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    //justifyContent: 'space-between',
    paddingVertical: 500,
    marginBottom:0,
    marginTop: 16,
    //bottom: 0,
    gap:16
  },    
  bottomMenuBarContainer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -5,
    marginLeft: 5,
  },
  buttonWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 16,
    marginRight: 24,
    marginLeft: 24,
  },
});