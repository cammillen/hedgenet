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
import MyNotifications from '../components/MyNotifications.js';


const notifications = [
  {fund:'Daily Review',date:'2023-03-14',performance:0.075},
  {fund:'UCL Fintech',stock:'Google',userShares:0.0014,date:'2023-03-14'},
  {fund:'Personal',stock:'Blackberry',userShares:0.2,date:'2023-03-14'},
  {fund:'Daily Review',date:'2023-03-13',performance:-0.005},
  {fund:'UCL Fintech',stock:'Virgin',userShares:0.13,date:'2023-03-13'},
  {fund:'LSE Sustainable Finance',stock:'Amazon',userShares:0.009,date:'2023-03-13'},
  {fund:'Personal',stock:'Apple',userShares:0.04,date:'2023-03-13'},
  {fund:'Daily Review',date:'2023-03-12',performance:0.130},
  {fund:'LSE Sustainable Finance',stock:'Amazon',userShares:0.009,date:'2023-03-12'},
  {fund:'Personal',stock:'Apple',userShares:0.03,date:'2023-03-12'},
]//in actual, pass time in, too. Can calculate value thus; performance calculated from current value

//backend call to notifications -- treat Daily Review as the fund!
const uniqueFunds = [...new Set(notifications.filter(notification => notification.fund !== 'Daily Review').map(notification => notification.fund))].filter(Boolean);  
let screens = [() => <MyNotifications notifications={notifications} paddingBottom={150} bottomText={'See More'}/>]

export default function Notifications () {

  const Screen = 'Notifications';

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
      () => <MyNotifications key={element} notifications={notifications.filter(notification => notification.fund == element)} paddingBottom={150} bottomText={'See More'} />
    ));
  }

  return ( 
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container} onLayout={onLayoutRootView}>
        <TopMenuBar screen={'Social'} />
        <TextWithFilter title={'Notifications'} rightTitle={'Filter'} />
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