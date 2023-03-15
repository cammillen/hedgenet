//OTP Screen

import React from 'react';
import { View, StyleSheet, Text, Pressable, ScrollView, TouchableOpacity} from 'react-native';
import { StatusBar, Dimensions, KeyboardAvoidingView } from 'react-native';
import { useCallback } from 'react';
import { useState, useRef, useEffect } from 'react';
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


export default function OTP () {

    const [inputValues, setInputValues] = useState({
      input1: '',
      input2: '',
      input3: '',
      input4: '',
    });

    const [activeInput, setActiveInput] = useState('input1');
  
    const inputRefs = {
      input1Ref: useRef(),
      input2Ref: useRef(),
      input3Ref: useRef(),
      input4Ref: useRef(),
    };

    const handleInputChange = (inputName, inputValue) => {
      setInputValues({ ...inputValues, [inputName]: inputValue });
      if (inputValue.length === 1) {
        switch (inputName) {
          case 'input1':
            inputRefs.input2Ref.current.focus();
            break;
          case 'input2':
            inputRefs.input3Ref.current.focus();
            break;
          case 'input3':
            inputRefs.input4Ref.current.focus();
            break;
          case 'input4':
            if (inputValue) {
              handleSubmit();
            }
            break;
          default:
            break;
        }
      }
      if (inputValue && inputName !== 'input4') {
        setActiveInput(`input${parseInt(inputName.slice(-1))+1}`);
      }
    };
    
    const handleSubmit = () => {
      // Do something with the inputValues object
      console.log(inputValues);
    };
  
    const [timeRemaining, setTimeRemaining] = useState(120);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) =>
        prevTimeRemaining > 0 ? prevTimeRemaining - 1 : 0
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const Screen = 'Profile';
  
  
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
                <Text style={styles.text1}>You’ve got mail 📩</Text>
            </View>
            <View>
                <Text style={styles.text2}>We have sent the OTP verification code to your email address. Check your email and enter the code below.</Text>
            </View>
          </View>
          <View style={styles.textContainer2}>
          <View style={styles.textContainer3}>
          <TextInput
            value={inputValues.input1}
            onChangeText={(text) => handleInputChange('input1', text)} 
              maxLength={1}
              style={[styles.textinput, activeInput === 'input1' && { borderColor: globalColors.status.success.color }]}
              //style={styles.textinput}
              keyboardType="numeric"
              textAlign='center'
              alignItems='center'
              ref={inputRefs.input1Ref}
              onFocus={() => setActiveInput('input1')}
            />
            <TextInput 
              value={inputValues.input2}
              onChangeText={(text) => handleInputChange('input2', text)}
              maxLength={1}
              style={[styles.textinput, activeInput === 'input2' && { borderColor: globalColors.status.success.color }]}
              //style={styles.textinput}
              keyboardType="numeric"
              textAlign='center'
              alignItems='center'
              ref={inputRefs.input2Ref}            />
            <TextInput
              value={inputValues.input3}
              onChangeText={(text) => handleInputChange('input3', text)} 
              maxLength={1}
              style={[styles.textinput, activeInput === 'input3' && { borderColor: globalColors.status.success.color }]}
              //style={styles.textinput}
              keyboardType="numeric"
              textAlign='center'
              alignItems='center'
              ref={inputRefs.input3Ref}            />
            <TextInput
              value={inputValues.input4}
              onChangeText={(text) => handleInputChange('input4', text)} 
              maxLength={1}
              style={[styles.textinput, activeInput === 'input4' && { borderColor: globalColors.status.success.color }]}
              //style={styles.textinput}
              keyboardType="numeric"
              textAlign='center'
              alignItems='center'
              ref={inputRefs.input4Ref}            />
        </View>
            <View>
                <Text style={[styles.text5,{paddingTop:40}]}>Didn't receive email?</Text>
            </View>
            <View>
                <Text style={[styles.text5, {paddingTop:16}]}>You can resend code in{' '}
                <Text style={{color:globalColors.status.success.color}}> {formatTime(timeRemaining)} </Text>
                </Text>
            </View>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={[globalFonts.BodyLarge.Bold(globalColors.others.white.color), {marginBottom:18}, {marginRight:18}]}>Confirm</Text>
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
    width:Dimensions.get('window').width,
    height:118,
    padding: 0,
    right:0,
    bottom: 0,
  },    
  bottomMenuBarContainer: {
    flex:1,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -5,
    marginLeft: 5,
  },
  button: {
    flex: 1,
    backgroundColor: globalColors.status.success.color,
    position: 'absolute',
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
      marginLeft: 6,
      marginBottom: 0,
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
  text5: {
    ...globalFonts.BodyLarge.Medium(globalColors.others.white.color),
    display: 'flex',
    alignItems: 'center',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 24,
    paddingTop: 47,
    paddingLeft: 24,
    paddingRight: 24 
  },
  textContainer2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
    paddingTop: 16,
    paddingLeft: 24,
    paddingRight: 24 
  },
  textContainer3: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    paddingTop: 16,
    marginLeft:24,
    //paddingLeft: 24,
    //paddingRight: 24 
  },
  textinput: {
    ...globalFonts.H3(globalColors.others.white.color),
    borderRadius: 16,
    marginLeft: 16,
    paddingTop: 16,
    borderWidth: 1,
    paddingBottom: 8,
    backgroundColor: globalColors.dark._2.color,
    width:84,
    height:70,
    alignItems: 'center',
  }, 
});