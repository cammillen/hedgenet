// Help Center Screen

import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { StatusBar } from 'react-native';
import { useCallback, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopMenuBar from '../components/TopMenuBar.js';
import Background from '../components/Background.js';
import BottomMenuBar from '../components/BottomMenuBar.js';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

export default function HelpCenter () {

  const Screen = 'Help Center';

  const [fontsLoaded] = useFonts({
    'Urbanist-Bold': require('../assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist-SemiBold': require('../assets/fonts/Urbanist-SemiBold.ttf'),
    'Urbanist-Medium': require('../assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist-Regular': require('../assets/fonts/Urbanist-Regular.ttf'),
  });

  SplashScreen.preventAutoHideAsync(); 

  const navigation = useNavigation();
  const [isSelected, setIsSelected] = useState('FAQ');
  const handlePress = (screen) => {
    navigation.navigate(screen);
    setIsSelected(screen);
  };

  const [showTextBoxes, setShowTextBoxes] = useState(false);

  const toggleTextBoxes = () => {
    setShowTextBoxes(!showTextBoxes);
  };

  const [showButtons, setShowButtons] = useState(false);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  return ( 
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container} >
        <TopMenuBar screen={Screen} />
        <View style={styles.container} >
            <View style={styles.fullComp}>
            <TouchableOpacity  onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../assets/icons/ArrowLeft_Green.png')}
                        style={styles.ArrowLeft_GreenIcon}
                    />      
            </TouchableOpacity>
            <Text style={[globalFonts.H4(globalColors.others.white.color), {marginLeft:16}]}>Help Center</Text>
            </View>
            <View style={styles.box1}>
                <View style={styles.buttonContainer}>
                <TouchableOpacity
                        onPress={() => { handlePress('FAQ'); setShowTextBoxes(true); setShowButtons(false); }}
                        style={[styles.button, isSelected === 'FAQ' ? {borderBottomColor: globalColors.status.success.color} : { borderBottomColor: globalColors.others.black.color }]}
                        >
                        <Text style={[globalFonts.BodyXLarge.semiBold(isSelected === 'FAQ' ? globalColors.status.success.color : globalColors.greyscale._700.color), { marginBottom: 12 }]}>FAQ</Text>     
                </TouchableOpacity>
                <TouchableOpacity
                        onPress={() => { handlePress('ContactUs'); setShowTextBoxes(false); setShowButtons(true); }} 
                        style={[styles.button, isSelected === 'ContactUs' ? {borderBottomColor: globalColors.status.success.color} : { borderBottomColor: globalColors.others.black.color }]}
                        >
                        <Text style={[globalFonts.BodyXLarge.semiBold(isSelected === 'ContactUs' ? globalColors.status.success.color : globalColors.greyscale._700.color), { marginBottom: 12 }]}>Contact Us</Text>   
                </TouchableOpacity>
                </View>
            </View>
            {showTextBoxes && (
            <View style={styles.textBoxContainer}>
              <TouchableOpacity onPress={toggleTextBoxes}>
                <Text style={[globalFonts.BodyXLarge.Medium(globalColors.greyscale._700.color), { marginBottom: 12 }]}>Textbox 1</Text>   
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleTextBoxes}>
                <Text style={[globalFonts.BodyXLarge.Medium(globalColors.greyscale._700.color), { marginBottom: 12 }]}>Textbox 2</Text>   
              </TouchableOpacity>
            </View>
            )}
            {showButtons && (
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom:150 }}>    
            <View style={styles.buttonGridContainer}>
              <TouchableOpacity style={styles.greybutton}>
                <Text style={[globalFonts.BodyXLarge.Bold(globalColors.others.white.color)]}>Customer Service</Text>   
              </TouchableOpacity>
              <TouchableOpacity style={styles.greybutton}>
                <Text style={[globalFonts.BodyXLarge.Bold(globalColors.others.white.color)]}>WhatsApp</Text>   
              </TouchableOpacity>
              <TouchableOpacity style={styles.greybutton}>
                <Text style={[globalFonts.BodyXLarge.Bold(globalColors.others.white.color)]}>Website</Text>   
              </TouchableOpacity>
              <TouchableOpacity style={styles.greybutton}>
                <Text style={[globalFonts.BodyXLarge.Bold(globalColors.others.white.color)]}>Facebook</Text>   
              </TouchableOpacity>
              <TouchableOpacity style={styles.greybutton}>
                <Text style={[globalFonts.BodyXLarge.Bold(globalColors.others.white.color)]}>Twitter</Text>   
              </TouchableOpacity>
              <TouchableOpacity style={styles.greybutton}>
                <Text style={[globalFonts.BodyXLarge.Bold(globalColors.others.white.color)]}>Instagram</Text>   
              </TouchableOpacity>
            </View>
            </ScrollView>
            )}
        <View style={styles.bottomMenuBarContainer}>
          <BottomMenuBar />
        </View>
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
  bottomMenuBarContainer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -5,
    marginLeft: 5,
  },
  box1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 24,
    marginTop: 16,
    height: 41
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    height:41,
    marginRight:24,
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 176,
    flexGrow: 1,
    gap: 12,
    borderBottomWidth: 4,
  },
  textBoxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    backgroundColor: globalColors.dark._2.colors
  },
  buttonGridContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginRight: 24,
    marginLeft: 24,
  },
  greybutton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: globalColors.dark._2.color,
    borderColor: globalColors.dark._3.color,
    borderRadius: 20,
    right: 0,
    alignSelf: 'stretch',
    height: 72,
    marginTop: 24,
    padding: 24,
    gap: 16
  }
});

const titles = ['FAQ', 'Contact us'];
const screens = [
    () => <FAQ/>,
    () => <ContactUs/>,
  ];