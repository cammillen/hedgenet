// PLaceholder Screen
// Chnage everything with PLaceholder in, only 2 things to change. 

import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { StatusBar, Dimensions } from 'react-native';
import { useCallback } from 'react';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopMenuBar from '../components/TopMenuBar.js';
import { NavigationContainer } from '@react-navigation/native';
import Background from '../components/Background.js';
import BottomMenuBar from '../components/BottomMenuBar.js';
import Button from '../components/OnBoarding/OnBoardingButton';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { TextInput } from 'react-native-gesture-handler';


export default function LogInEmail () {

  const Screen = 'LogInEmail';
  const [email, setEmail] = useState('');
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
          <View style={styles.textContainer}>
            <TouchableOpacity >
              <Text style={styles.text2}>{'<-'}</Text>
            </TouchableOpacity>
            <View>
                <Text style={styles.text1}>Hello there 👋</Text>
            </View>
            <View>
                <Text style={styles.text2}>Please enter your account email address. We will send an OTP code for verification in the next step.</Text>
            </View>
            <View>
                <Text style={styles.text3}>Email</Text>
            </View>
            <TextInput 
              style={styles.textinput}
              placeholder = 'tom.ainsley@yourdomain.com'
              placeholderTextColor={globalColors.greyscale._500.color}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize='none'
            />
          </View>
          <View style={styles.buttonContainer}>  
            <TouchableOpacity style={styles.button}>
              <Text style={[globalFonts.BodyLarge.Bold(globalColors.others.white.color), {marginBottom:18}, {marginRight:18} ]}>Continue</Text>
            </TouchableOpacity>
          </View>
      </View> 

        
    </Background>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: globalColors.dark._3.color,
    width:Dimensions.get('window').width,
    height:118,
    padding: 0,
    right:0,
    bottom: 0,
  },    
  bottomMenuBarContainer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -5,
    marginLeft: 5,
  },
  button: {
    backgroundColor: globalColors.status.success.color,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      paddingTop: 18,
      paddingLeft:16,
      //paddingRight: 16,
      //paddingBottom: 18,
      width: 382,
      height: 58,
      gap: 10,
      marginTop: 24,
      marginLeft: 6
    
  },
  text1: {
    ...globalFonts.H3(globalColors.others.white.color),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 24,
  },
  text2: {
    ...globalFonts.BodyXLarge.Regular(globalColors.others.white.color),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 12,
  },
  text3: {
    ...globalFonts.BodyLarge.Bold(globalColors.others.white.color),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 32,
  },
  text4: {
    ...globalFonts.BodyLarge.Bold(globalColors.others.white.color),
    display: 'flex',
    alignItems: 'center',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 24,
    paddingTop: 16,
    paddingLeft: 24,
    paddingRight: 24 
  },
  textinput: {
    ...globalFonts.H4(globalColors.greyscale._500.color),
    paddingTop: 16,
    borderWidth: 1,
    paddingBottom: 8,
    borderBottomColor: globalColors.status.success.color,
  }
});