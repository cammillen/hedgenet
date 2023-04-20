import React from 'react';
import { View, StyleSheet, Image, Button, Text } from 'react-native';
import { StatusBar, Dimensions } from 'react-native';
import { useCallback, useState, useRef } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopMenuBar from '../../components/TopMenuBar.js';
import Background from '../../components/Background.js';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;
let password = '';

export default function SignUp9 () {

  const Screen = 'Sign Up';
  const navigation = useNavigation();
  const [password, setPassword] = useState('');

  const [fontsLoaded] = useFonts({
    'Urbanist-Bold': require('../../assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist-SemiBold': require('../../assets/fonts/Urbanist-SemiBold.ttf'),
    'Urbanist-Medium': require('../../assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist-Regular': require('../../assets/fonts/Urbanist-Regular.ttf'),
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
        <View style={styles.toptextbox}>
            <View style={styles.fullComp}>
              <TouchableOpacity  onPress={() => navigation.goBack()}>
                      <Image
                          source={require('../../assets/icons/ArrowLeft_Green.png')}
                          style={styles.ArrowLeft_GreenIcon}
                      />      
              </TouchableOpacity>
            </View>
            <View style={styles.questionbox}>
              <View style={[{display: 'flex'}, {flexDirection: 'column'}, {alignItems: 'flex-start'}]}>
                <Text style={globalFonts.H3(globalColors.others.white.color)}>Set your PIN code 🔐</Text>
                <Text style={[globalFonts.BodyXLarge.Regular(globalColors.others.white.color), {marginTop: 16}]}>Add a PIN to make your account more secure. We may ask for a PIN for every stock transaction.</Text>
              </View>    
            </View>
            <View style={[{display: 'flex'}, {flexDirection: 'row'}, {alignItems: 'flex-start'}, {marginTop: 16}, {marginRight: 24}]}>
                <TextInput 
                    style={styles.textinput}
                    password = {password}
                    onChangeText={setPassword}
                    autoCapitalize='none'
                    keyboardType='numeric'
                    maxLength={4}
                />
            </View> 
        </View> 
      </View>
      <View style={styles.bottomgreybutton}>
          <TouchableOpacity style={styles.continuebutton} onPress={() => {if (!isNaN(password) && password > 0) { console.log(`Password: ${password}`)}}}>
              <Text style={[globalFonts.BodyLarge.Bold(globalColors.others.white.color), {marginLeft: 16}]}>Continue</Text>
          </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  fullComp:{
    position: 'absolute',
    width: 28,
    height: 28,
    left: 0,
    top: 28.5,
  },
  bottomgreybutton:{
    backgroundColor: globalColors.dark._1.color,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: 118,
    left:0,
    right: 0,
    bottom: 0,
  },
  continuebutton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    height: 58,
    width: 340,
    backgroundColor: globalColors.primary._500.color,
    marginTop: 24,
    marginLeft: 24,
  },
  questionbox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 72
  },
  textinput: {
    ...globalFonts.H4(globalColors.greyscale._500.color),
    paddingTop: 16,
    borderWidth: 1,
    paddingBottom: 8,
    borderBottomColor: globalColors.status.success.color,
    width: screenWidth -48,
  },
  textContainer2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
    width: 84
  }

});