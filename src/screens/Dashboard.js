//Dashboard Screen

//Imports
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopMenuBar from '../components/TopMenuBar.js';
import Background from '../components/Background.js';
import BottomMenuBar from '../components/BottomMenuBar.js';
import SearchBarInactive from '../components/SearchBarInactive.js';
import LogoHeader from '../components/SectionHeaders/LogoHeader.js';
import FundDashboardSliderContent from '../components/Dashboard/FundDashboardSliderContent';
import SliderBar from '../components/SliderBar';


export default function Dashboard () {

  const Screen = 'Dashboard';

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
        <SearchBarInactive/>
        {/* TO DO: LOGIC Make sure logic is added for access to admin panel */}
        <LogoHeader name={'My Funds'} marginBottom={-5}  buttonnavigation={'AdminPanel'}/>
        <SliderBar titles={titles} screens={screens} />
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

  // Slider Bar Arguments (TO DO: Link to Backend): 

  const titles = ['Personal', 'UCL FinTech Fund', 'LSE Sustainable Finance Fund'];
  const screens = [
    // TO DO: Link to backend
    () => <FundDashboardSliderContent/>,
    () => <FundDashboardSliderContent/>,
    () => <FundDashboardSliderContent/>,
  ];
