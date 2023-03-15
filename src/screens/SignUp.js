// PLaceholder Screen
// Chnage everything with PLaceholder in, only 2 things to change. 

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useState} from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Background from '../components/Background.js';
import { Button, ProgressBar } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

export default function SignUp () {

  const Screen = 'SignUp';

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

  const Stack = createStackNavigator();

const SignUpScreen1 = ({ navigation }) => {
  const [progress, setProgress] = useState(0);

  const handleContinue = () => {
    setProgress(0.25);
    navigation.navigate('SignUpScreen2');
  };


  return ( 
    <Background>
    <View style={styles.container}>
        <ProgressBar progress={progress} color={'blue'} />
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container} onLayout={onLayoutRootView}>
      <Button mode="contained" onPress={handleContinue}>
        Continue
      </Button>
        </View>
      </View>
    </Background>
  );
};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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