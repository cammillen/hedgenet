// Help Center Screen
// Chnage everything with PLaceholder in, only 2 things to change. 

import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { StatusBar } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopMenuBar from '../components/TopMenuBar.js';
import SliderBar from '../components/SliderBar.js';
import Background from '../components/Background.js';
import BottomMenuBar from '../components/BottomMenuBar.js';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';

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
      <View style={styles.container} >
        <TopMenuBar screen={Screen} />
        <View style={styles.container} onLayout={onLayoutRootView}>
            <View style={styles.fullComp}>
            <TouchableOpacity  onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../assets/icons/ArrowLeft_Green.png')}
                        style={styles.ArrowLeft_GreenIcon}
                    />      
            </TouchableOpacity>
            <Text style={[globalFonts.H4(globalColors.others.white.color), {marginLeft:16}]}>Help Center</Text>
            </View>
        
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
});