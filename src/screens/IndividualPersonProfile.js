// My Account page

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
import BrowseFunds from '../components/BrowseFunds.js';
import TextWithSort from '../components/SectionHeaders/TextWithSort.js';
import MyPositions from '../components/MyPositions.js';
import MyTradingHistory from '../components/MyTradingHistory';

export default function IndividualPersonProfile () {

  const Screen = 'Individual Person Profile';

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
            <View style={styles.editprofile}>
              <TouchableOpacity onPress={() => {}} >
                <Text style={[globalFonts.BodyMedium.semiBold(globalColors.others.white.color)]}>Following</Text>
              </TouchableOpacity>
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
          <View style={styles.box2}>
            <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 29}}>
              <Text style={[globalFonts.H6(globalColors.others.white.color)]}>{info[0].trades}</Text>
              <Text style={[globalFonts.BodyMedium.Medium(globalColors.greyscale._300.color)]}>Trades</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 81}}>
              <Text style={[globalFonts.H6(globalColors.others.white.color)]}>{info[0].followers}</Text>
              <Text style={[globalFonts.BodyMedium.Medium(globalColors.greyscale._300.color)]}>Followers</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 81}}>
              <Text style={[globalFonts.H6(globalColors.others.white.color)]}>{info[0].following}</Text>
              <Text style={[globalFonts.BodyMedium.Medium(globalColors.greyscale._300.color)]}>Following</Text>
            </View>
          </View>
        </View>
        <ScrollView style={{ marginTop: 18}} contentContainerStyle={{ flexGrow: 1 }} alwaysBounceVertical={true}>
        <View style={{paddingBottom: 140}}>
          <TextWithSort title={'${name}  Funds'} rightTitle={'Asc. Order'} />
          <BrowseFunds funds={['Fintech Algo', 'UCL Agtech']} paddingBottom={10}/>
          <TextWithSort title={'My Open Positions'} rightTitle={'Asc. Order'} />
          <MyPositions stocks={['Tesla', 'Blackberry', 'Coca-Cola', 'Netflix', 'Apple']} paddingBottom={10} bottomText={'See More'}/>
          <TextWithSort title={'Trading History'} rightTitle={'Recently'} />
          <MyTradingHistory stocks={['Tesla', 'Blackberry', 'Coca-Cola', 'Netflix', 'Apple']} paddingBottom={10} bottomText={'See More'}/>
          <TouchableOpacity onPress={() => {}} style={styles.closeacc}>
              <Image source={require('../assets/icons/LeaveFund.png')} style={{width: 20, height: 20}}/>
              <Text style={[globalFonts.BodyLarge.Bold(globalColors.others.white.color), {marginLeft: 16}]}>Close Account</Text>
          </TouchableOpacity>
        </View>
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
  editprofile: {
    backgroundColor: globalColors.greyscale._900.color,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    left: 259,
    top: 12,
    width: 104,
    height: 32,
    borderRadius: 100,
    gap: 4,
    position: 'absolute',
  },
  box2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 16
  },
  closeacc: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 9,
    marginLeft: 24,
    marginRight: 24,
    backgroundColor: globalColors.status.error.color,
    borderRadius: 16,
    height: 58,
  }
});

//NEEDS TO BE LINKED WITH DATABASE
const details = [
  {
    image: require('../assets/icons/ProfilePlaceholder.png'),
    name: 'Peter Lookman',
    username: 'peterlok',
    balance: '87,323.22',
    university: 'UCL',
    bestfund: 'AgTech',
    index: 'FTSE 500',
    state: 'following'
  },
]
const info = [
  {
    trades: 593,
    followers: 45,
    following: 32,
  }
]