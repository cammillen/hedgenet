// PLaceholder Screen
// Chnage everything with PLaceholder in, only 2 things to change. 

import React, {useState} from 'react';
import { View, StyleSheet, Text, Image, TextInput, Select, Button } from 'react-native';
import { StatusBar, DatePickerIOS } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopMenuBar from '../components/TopMenuBar.js';
import Background from '../components/Background.js';
import BottomMenuBar from '../components/BottomMenuBar.js';
import { globalFonts } from '../styles/Fonts.js';
import { globalColors } from '../styles/Colors.js';
import { inline } from 'react-native-web/dist/cjs/exports/StyleSheet/compiler/index.js';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import SelectDropdown from 'react-native-select-dropdown'
import {Dropdown} from 'react-native-element-dropdown';


export default function Profile () {

  const navigation = useNavigation();
  
  const Screen = 'Settings';

  const [fontsLoaded] = useFonts({
    'Urbanist-Bold': require('../assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist-SemiBold': require('../assets/fonts/Urbanist-SemiBold.ttf'),
    'Urbanist-Medium': require('../assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist-Regular': require('../assets/fonts/Urbanist-Regular.ttf'),
  });

  const buttonText = ["Privacy Policy", "Rate us", "Visit Our Website"];

  SplashScreen.preventAutoHideAsync(); 

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const RenderButton = (props) => {
    const arrowText=">";
    return(
      <TouchableOpacity onPress={() => navigation.navigate(props.text)} style={{marginTop: 20, marginBottom: 20}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{alignItems: 'flex-start', flex:8}}>
            <Text style={[globalFonts.H5(globalColors.others.white.color)]}>{props.text}</Text>
          </View>
          <View style={{alignItems: 'flex-end', flex:1, justifyContent: 'center'}}>
            <Image
              source={require('../assets/icons/ArrowRightWhite.png')}
              style={{height: 20, width: 20}}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  
  return ( 
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container} onLayout={onLayoutRootView}>
        <TopMenuBar screen={Screen} />
        <View style={styles.fullComp}>
          <TouchableOpacity  onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/icons/ArrowLeft_Green.png')}
              style={styles.ArrowLeft_GreenIcon}
            />
          </TouchableOpacity>
          <Text style={[globalFonts.H4(globalColors.others.white.color), {marginLeft:16}]}>About eeee</Text>
        </View>
        <View style={styles.bigbox}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} alwaysBounceVertical={true}>
            <View style={{paddingBottom: 20, flexDirection: 'column', borderBottomWidth: 2, borderColor: '#303238'}}>
              <View style={{paddingBottom: 20}}>
                <Image 
                  source={require('../assets/icons/HedgenetGreen.png')}
                  style={styles.image1}
                />
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={[globalFonts.H5(globalColors.others.white.color), {fontSize: 25}]}>eee v1.2.32</Text>
              </View>
            </View>
            <View style={{paddingBottom: 20, flexDirection: 'column'}}>
              {
                buttonText.map((value, index) => <RenderButton key={index} text={value}/>)
              }
            </View>
          </ScrollView>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  //header
  container: {
    flex: 1,
  },
  ArrowLeft_GreenIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  fullComp:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 24,
    marginTop: 24,
    marginRight: 24,
  },
  image1: {
    width: 150,
    height: 150,
    alignSelf: 'center'
  },

  // body
  bigbox:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 8,
    marginRight:  8,
  },
});