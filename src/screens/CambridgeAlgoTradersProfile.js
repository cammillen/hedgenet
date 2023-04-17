//Settings
//Navigation for buttons need to be added here.
import React, {useEffect} from 'react';
import { View, StyleSheet, Image, Text, Dimensions, Pressable} from 'react-native';
import { StatusBar } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopMenuBar from '../components/TopMenuBar.js';
import Background from '../components/Background.js';
import { useNavigation } from '@react-navigation/native';
import BottomMenuBar from '../components/BottomMenuBar.js';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { ScrollView } from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Language from './Language.js';
import MyPositions from '../components/MyPositions.js';
import KeyStaticButton from '../components/KeyStaticButton.js';

const screenWidth = Dimensions.get('window').width;

export default function CambridgeAlgoTradersProfile () {

  const Screen = 'Fund Profile';

  const KeyStaticsNames=['Open', 'Stocks', 'High', 'Profit/Loss', 'Low', 'Total Investment'];
  const KeyStaticsValues=['£78,14.12', '41 Companies', '£14,785.25', '+£45,254.452', '£41,452.425', '-£45,452.45']

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

  return ( 
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container} onLayout={onLayoutRootView}>
        <TopMenuBar screen={Screen} />
        <View style={styles.fullComp}>
          <TouchableOpacity  onPress={() => navigation.goBack()} style={{flex: 1, justifyContent: 'center',}}>
            <Image
              source={require('../assets/icons/ArrowLeft_Green.png')}
              style={styles.ArrowLeft_GreenIcon}
            />      
          </TouchableOpacity>
          <Image 
            source={require('../assets/funds/UCLFoodTech.png')} 
            style={styles.FundImage}
          />
          <View style={[styles.FundNameGroup, {flex: 6}]}>
            <Text style={[globalFonts.H6(globalColors.others.white.color), {marginTop: 5, marginLeft: 5, alignItems: 'flex-start', fontSize: 16}]}>
              Cambridge Algo Traders
            </Text>
            <Text style={[globalFonts.H6(globalColors.others.white.color), {marginTop: 5, marginLeft: 5, alignItems: 'flex-start', fontSize: 12}]}>
              145 Members - 1782 Stocks
            </Text>
            <View style={styles.FundNameGroupButtonGroup}>
              <TouchableOpacity style={{borderWidth: 2, borderColor: '#12D18E', marginRight: 5, borderRadius: 5, flex: 1}}>
                <Text style={[globalFonts.H6('#12D18E'), {fontSize: 10}]}>
                Cambridge
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{borderWidth: 2, borderColor: '#12D18E', marginRight: 5, borderRadius: 5}}>
                <Text style={[globalFonts.H6('#12D18E'), {fontSize: 10}]}>
                  Algo
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{borderWidth: 2, borderColor: '#12D18E', marginRight: 5, borderRadius: 5}}>
                <Text style={[globalFonts.H6('#12D18E'), {fontSize: 10}]}>
                  S&P 147
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.FundNameGroup}>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={[globalFonts.H6(globalColors.others.white.color), {marginTop: 5, marginLeft: 5, fontSize: 12}]}>
                Market Cap
              </Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={[globalFonts.H6(globalColors.others.white.color), {marginTop: 5, marginLeft: 5, fontSize: 16}]}>
                £78,145.23
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.InfoGroup}>
          <View style={{flex: 1, flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={[globalFonts.H6('white'), {fontSize: 18}]}>
              78
            </Text>
            <Text style={[globalFonts.H6('white'), {fontSize: 14}]}>
              Members
            </Text>
          </View>
          <View style={{flex: 1, flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={[globalFonts.H6('white'), {fontSize: 18}]}>
              147
            </Text>
            <Text style={[globalFonts.H6('white'), {fontSize: 14}]}>
              Trades
            </Text>
          </View>
          <View style={{flex: 1, flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={[globalFonts.H6('white'), {fontSize: 18}]}>
              +17.28%
            </Text>
            <Text style={[globalFonts.H6('white'), {fontSize: 14}]}>
              Total Gains
            </Text>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={true}>
          <View style={{flexDirection: 'column', marginTop: 20}}>
            <View style={styles.TitleGroup}>
              <View style={{flex: 1, alignItems: 'flex-start'}}>
                <Text style={[globalFonts.H6('white'), {fontSize: 18}]}>
                  Fund Analytics
                </Text>
              </View>
              <TouchableOpacity style={{flex:1, alignItems: 'flex-end'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={[globalFonts.H6('#0faa73'), {fontSize: 16}]}>
                    View Members 
                  </Text>
                  <Image
                    source={require('../assets/icons/ArrowRightGreen.png')}
                    style={{height: 25, width: 25, marginLeft: 5}}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <Image 
              source={require('../assets/graphs(delete)/FundGraphPlaceholder.png')}
              style={styles.graph}
            />
            <View style={styles.TitleGroup}>
              <View style={{flex: 1, alignItems: 'flex-start'}}>
                <Text style={[globalFonts.H6('white'), {fontSize: 18}]}>
                  Key Statics
                </Text>
              </View>
            </View>
            <View style={styles.KeyStatics}>
              {
                KeyStaticsNames.map((value, index) => {
                    return(
                      <KeyStaticButton key={index} name={KeyStaticsNames[index]} value={KeyStaticsValues[index]} />
                    );
                  }
                )
              }
            </View>
            <View style={styles.TitleGroup}>
              <View style={{flex: 1, alignItems: 'flex-start'}}>
                <Text style={[globalFonts.H6('white'), {fontSize: 18}]}>
                  Collective Positions
                </Text>
              </View>
              <TouchableOpacity style={{flex:1, alignItems: 'flex-end'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={[globalFonts.H6('#0faa73'), {fontSize: 16}]}>
                    Asc. Order
                  </Text>
                  <Image
                    source={require('../assets/icons/UpDownArrow.png')}
                    style={{height: 20, width: 25, marginLeft: 10}}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <MyPositions stocks={['Google', 'Netflix', 'Amazon', 'Blackberry', 'Coca-Cola', 'Apple', 'Sony']} paddingBottom={10} bottomText={'See More'}/>
            <TouchableOpacity style={styles.LeaveFundButton} onPress={() => navigation.goBack()} >
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                <Image
                  source = {require('../assets/icons/LeaveFund.png')}
                  style = {{width: 20, height: 20, marginRight: 10}}
                />
                <Text style={{color: 'white', fontSize: 20}}>Leave Fund</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  // top menu
  fullComp:{
    flexDirection: 'row', 
    marginLeft: 24,
    marginTop: 24,
    marginRight: 24,
    height: 100
  },
  container: {
    height: 250,
    flex: 1
  },
  ArrowLeft_GreenIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain'
  },
  FundImage: {
    width: 80,
    aspectRatio: 1,
    flex: 2,
    marginTop: 0,
    justifyContent: 'flex-end',
    marginLeft: 10
  },
  FundNameGroup: {
    flex: 3, 
    width: '100%', 
    height: 30,
    flexDirection: 'column',
    marginLeft: 10
  },
  FundNameGroupButtonGroup: {
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 5,
  },
  InfoGroup: {
    marginTop: 10,
    marginLeft: 34,
    marginRight: 34,
    maginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    borderBottomWidth: 2,
    borderColor: '#303238'
  },

  // main board
  TitleGroup: {
    flexDirection: 'row',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10
  },
  graph: {
    width: screenWidth,
    height: 0.44 * screenWidth,
    resizeMode: 'contain'
  },
  KeyStatics: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  LeaveFundButton: {
    backgroundColor: '#F75555',
    height: 60,
    borderRadius: 20,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
  }
});
