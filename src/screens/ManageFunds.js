// Manage Funds Page

import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { StatusBar } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopMenuBar from '../components/TopMenuBar.js';
import Background from '../components/Background.js';
import BottomMenuBar from '../components/BottomMenuBar.js';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import TextWithSort from '../components/SectionHeaders/TextWithSort.js';
import MyTradingHistory from '../components/MyTradingHistory';

export default function ManageFunds () {

  const Screen = 'ManageFunds';

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

  const navigation = useNavigation();
  let name = details[0].name
  if (name.length > 13) { name = name.substring(0,12) + '...';} 
  let username = details[0].username
  if (username.length > 8) { username = username.substring(0,7) + '...';} 

  return ( 
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container} onLayout={onLayoutRootView}>
        <TopMenuBar screen={Screen} />
        <View style={styles.toptextbox}>
          {/* TO DO: BACKEND link profile name, image and email up with backend */}
          <View style={styles.box1}>
            <View style={styles.fullComp}>
              <TouchableOpacity  onPress={() => navigation.goBack()}>
                      <Image
                          source={require('../assets/icons/ArrowLeft_Green.png')}
                          style={styles.ArrowLeft_GreenIcon}
                      />      
              </TouchableOpacity>
            </View>  
              <Image style={styles.image} source={details[0].image} />
                <View style={styles.profileVertical}>
                  <Text style={[globalFonts.H6(globalColors.others.white.color), {paddingBottom: 3}]}>{name}</Text>
                  <Text style={[globalFonts.BodyMedium.Medium(globalColors.greyscale._300.color), {marginTop: 8}]}>{username} • £{details[0].balance}</Text>
                </View>
            <View style={styles.cashavailable}>
                    <Text style={[globalFonts.BodyMedium.Medium(globalColors.greyscale._50.color)]}>Cash Available</Text>
                  <Text style={[globalFonts.H6(globalColors.others.white.color), {marginTop: 8}]}>£{details[0].cashavailable}</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginTop: 61, marginLeft: 117}}>
              <View style={{borderColor:globalColors.primary._500.color, borderWidth: 1, borderRadius: 6, height: 24, display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft:10, paddingRight: 10}}>
                <Text style={[globalFonts.BodyXSmall.semiBold(globalColors.primary._500.color)]}>{details[0].university}</Text>
              </View>
              <View style={{borderColor:globalColors.primary._500.color, borderWidth: 1, borderRadius: 6, height: 24, display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft:10, paddingRight: 10, marginLeft:8}}>
                <Text style={[globalFonts.BodyXSmall.semiBold(globalColors.primary._500.color)]}>{details[0].bestfund}</Text>
              </View>
              <View style={{borderColor:globalColors.primary._500.color, borderWidth: 1, borderRadius: 6, height: 24, display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft:10, paddingRight: 10, marginLeft:8}}>
                <Text style={[globalFonts.BodyXSmall.semiBold(globalColors.primary._500.color)]}>{details[0].index}</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.addfunds}>
            <Image source={require('../assets/icons/walletwhite.png')} style={{width: 20, height: 20}}/>
            <Text style={[globalFonts.BodyLarge.Bold(globalColors.others.white.color), {marginLeft: 16}]}>Add Funds</Text>
        </TouchableOpacity>
        <View style={{paddingBottom: 140, marginTop: 18}}>
          <TextWithSort title={'Trading History'} rightTitle={'Recently'} />
        </View>
        <ScrollView style={{ marginTop: -120}} contentContainerStyle={{ flexGrow: 1 }} alwaysBounceVertical={true}>
        <MyTradingHistory stocks={['Tesla', 'Blackberry', 'Coca-Cola', 'Netflix', 'Apple']} paddingBottom={170} bottomText={'See More'}/>
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
  fullComp:{
    position: 'absolute',
    width: 28,
    height: 28,
    left: 0,
    top: 28.5,
  },  
  bottomMenuBarContainer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -5,
    marginLeft: 5,
  },
  toptextbox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 26,
    //marginRight: 24,
    marginLeft: 24
  },
  ArrowLeft_GreenIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  box1: {
    height:85
  },
  image: {
    position: 'absolute',
    width: 60,
    height: 60,
    marginLeft: 40 
  },
  profileVertical: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 116,
    position: 'absolute'
  },
  cashavailable: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    left: 270,
    height: 57,
    gap: 4,
    position: 'absolute',
  },
  addfunds: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    marginLeft: 24,
    marginRight: 24,
    backgroundColor: globalColors.primary._500.color,
    borderRadius: 100,
    height: 58,
  }
});

//NEEDS TO BE LINKED WITH DATABASE
const details = [
  {
    image: require('../assets/icons/ProfilePlaceholder.png'),
    name: 'Omiros Smit',
    username: 'omismit',
    balance: '87,323.22',
    university: 'UCL',
    bestfund: 'AgTech',
    index: 'FTSE 500',
    cashavailable: '125,000'
  },
]
const info = [
  {
    trades: 2921,
    followers: 234,
    following: 134,
  }
]