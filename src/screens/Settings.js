//Settings
//Navigation for buttons need to be added here.
import React from 'react';
import { View, StyleSheet, Image, Text} from 'react-native';
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

export default function Settings () {

  const Screen = 'Settings';

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

  const renderButton = ({ image, text }) => (
    <TouchableOpacity onPress={() => navigation.navigate(text)}>
      <View style={styles.buttonContainer}>
        <Image source={image} style={styles.buttonImage} />
        <Text style={[globalFonts.H5(globalColors.others.white.color), {marginLeft:20}]}>{text}</Text>
        <Image
            source={require('../assets/icons/ArrowRightWhite.png')}
            style={styles.ArrowRightWhite}
        />   
      </View>
    </TouchableOpacity>
  );

  const renderButton2 = ({ image, text, text2 }) => (
    <TouchableOpacity onPress={() => navigation.navigate(text)}>
      <View style={styles.buttonContainer}>
        <Image source={image} style={styles.buttonImage} />
        <Text style={[globalFonts.H5(globalColors.others.white.color), {marginLeft:20}]}>{text}</Text>
        <Text style={[globalFonts.BodyXLarge.semiBold(globalColors.others.white.color), {marginLeft: 50}]}>{text2}</Text>
        <Image
            source={require('../assets/icons/ArrowRightWhite.png')}
            style={styles.ArrowRightWhite}
        />   
      </View>
    </TouchableOpacity>
  );

  const renderButton3 = ({ image, text, text2 }) => (
    <TouchableOpacity onPress={() => navigation.navigate(text)}>
      <View style={styles.buttonContainer}>
        <Image source={image} style={styles.buttonImage} />
        <Text style={[globalFonts.H5(globalColors.others.white.color), {marginLeft:20}]}>{text}</Text>
        <Text style={[globalFonts.BodyXLarge.semiBold(globalColors.others.white.color), {marginLeft: 90}]}>{text2}</Text>
        <Image
            source={require('../assets/icons/ArrowRightWhite.png')}
            style={styles.ArrowRightWhite}
        />   
      </View>
    </TouchableOpacity>
  );


  const renderButton5 = ({ image, text, text2 }) => (
    <TouchableOpacity onPress={() => navigation.navigate(text)}>
      <View style={styles.buttonContainer}>
        <Image source={image} style={styles.buttonImage} />
        <Text style={[globalFonts.H5(globalColors.others.white.color), {marginLeft:20}]}>{text}</Text>
        <Text style={[globalFonts.BodyXLarge.semiBold(globalColors.others.white.color), {marginLeft: 90}]}>{text2}</Text>
        <Image
            source={require('../assets/icons/ArrowRightWhite.png')}
            style={styles.ArrowRightWhite}
        />   
      </View>
    </TouchableOpacity>
  );
  

  const renderButton6 = ({ image, text, text2 }) => (
    <TouchableOpacity onPress={() => navigation.navigate(text)}>
      <View style={styles.buttonContainer}>
        <Image source={image} style={styles.buttonImage} />
        <Text style={[globalFonts.H5(globalColors.others.white.color), {marginLeft:20}]}>{text}</Text>
        <Text style={[globalFonts.BodyXLarge.semiBold(globalColors.others.white.color), {marginLeft: 90}]}>{text2}</Text>
        <Image
            source={require('../assets/icons/ArrowRightWhite.png')}
            style={styles.ArrowRightWhite}
        />   
      </View>
    </TouchableOpacity>
  );


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
          <Text style={[globalFonts.H4(globalColors.others.white.color), {marginLeft:16}]}> Settings</Text>
        </View>   
        <View style={styles.bigbox}>
          <View style={styles.scrollbox}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} alwaysBounceVertical={true}>
              <View style={{paddingBottom: 100}}>
            <View style={styles.containerfreestock}>
            <Image 
              source={require('../assets/PictureSettings1.png')}
              style={styles.image1}
            />
            <View style={styles.textbox}>
              <Text style={globalFonts.H5(globalColors.others.white.color)}>Get free stock 💰</Text>
              <Text style={[globalFonts.BodyMedium.Medium(globalColors.others.white.color), {marginTop:4}]}>Refer your friends & unlock up to </Text>
              <Text style={[globalFonts.BodyMedium.Medium(globalColors.others.white.color)]}>$100 of free stock per friend</Text>
            </View>
          </View>
              {renderButton6({
                image: require('../assets/PictureSettings2.png'),
                text: 'ProfileSettings',
              })}
              {renderButton({
                image: require('../assets/PictureSettings3.png'),
                text: 'NotificationSettings',
              })}
              {renderButton({
                image: require('../assets/PictureSettings4.png'),
                text: 'SecuritySettings',
              })}
              {renderButton2({
                image: require('../assets/PictureSettings5.png'),
                text: 'Language',
                text2: 'English (US)',
              })}
              {renderButton3({
                image: require('../assets/PictureSettings6.png'),
                text: 'Currency',
                text2: '$ (USD)'
              })}
              {renderButton({
                image: require('../assets/PictureSettings7.png'),
                text: 'Help Center',
              })}
              {renderButton5({
                image: require('../assets/PictureSettings8.png'),
                text: 'Legal',
              })}
              {renderButton({
                image: require('../assets/PictureSettings9.png'),
                text: 'About Hedgenet',
              })}
              {renderButton({
                image: require('../assets/PictureSettings10.png'),
                text: 'Close Your Account',
              })}
              {renderButton({
                image: require('../assets/PictureSettings11.png'),
                text: 'Logout',
              })}
              </View>
            </ScrollView>
          </View>  
          </View>   
        <View style={styles.bottomMenuBarContainer}>
          <BottomMenuBar />
        </View> 
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  fullComp:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 24,
    marginTop: 24,
    marginRight: 24,
  },
  container: {
    flex: 1,
  },
  ArrowLeft_GreenIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  ArrowRightWhite: {
    position: 'absolute',
    width: 20,
    height: 20,
    resizeMode: 'contain',
    right: 0,
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
    gap: 15,
    position: 'absolute',
    width: 382,
    height: 48,
    //paddingTop: 26,
    top: 119,
  },
  bigbox:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 24,
    marginLeft: 24,
    marginRight:24
  },
  scrollbox: {
    height: 600,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerfreestock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 116,
    backgroundColor: globalColors.dark._2.color,
    borderColor: globalColors.dark._3.color,
    borderRadius: 24,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24
  },
  buttonImage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height:56,
    width:56
  },
  divider: {
    ...globalColors.dark._3.color,
    height: 10,
    marginTop: 84,
  },
  image1: {
    width:100,
    height: 66.55,
  },
  textbox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 20
  },
});
