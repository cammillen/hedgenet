import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainDrawerNavigator from './src/navigation/MainDrawerNavigator.js';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
//import SplashScreen from './src/components/SplashScreen.js'; // Make sure to import the SplashScreen component
//import SplashScreen from 'react-native-splash-screen';


const App = () => {
  const [isReady, setIsReady] = useState(false);
  //const [showSplash, setShowSplash] = useState(true);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={_cacheResourcesAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  //if (showSplash) {
  //  return <SplashScreen onReady={() => setShowSplash(false)} />;
  //}

  //useEffect(() => {
  //  SplashScreen.show({
  //    imageArray: [
  //      require('./src/assets/SplashFrames/1.png'),
  //      require('./src/assets/SplashFrames/2.png'),
  //      require('./src/assets/SplashFrames/3.png'),
  //      require('./src/assets/SplashFrames/4.png'),
  //      require('./src/assets/SplashFrames/5.png'),
  //      require('./src/assets/SplashFrames/6.png'),
  //      require('./src/assets/SplashFrames/7.png'),
  //      require('./src/assets/SplashFrames/8.png'),
  //      require('./src/assets/SplashFrames/9.png'),
  //      require('./src/assets/SplashFrames/10.png'),
  //      require('./src/assets/SplashFrames/11.png'),
  //      require('./src/assets/SplashFrames/12.png'),
  //      require('./src/assets/SplashFrames/13.png'),
  //      require('./src/assets/SplashFrames/14.png'),
  //      require('./src/assets/SplashFrames/15.png'),
  //      require('./src/assets/SplashFrames/16.png'),
  //      require('./src/assets/SplashFrames/17.png'),
  //      require('./src/assets/SplashFrames/18.png')
  //    ],
  //    backgroundColor: '#000000',
  //  });
  //}, []);

  return (
    <NavigationContainer>
      <MainDrawerNavigator />
    </NavigationContainer>
  );
};

async function _cacheResourcesAsync() {
  const images = [
    require('./src/assets/AndroidBackground.png'),
    require('./src/assets/IOSBackground.png'),
    // Add any other image assets used in the Home screen
  ];

  const cacheImages = images.map((image) => {
    return Asset.fromModule(image).downloadAsync();
  });

  const cacheFonts = Font.loadAsync({
    'Urbanist-Bold': require('./src/assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist-SemiBold': require('./src/assets/fonts/Urbanist-SemiBold.ttf'),
    'Urbanist-Medium': require('./src/assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist-Regular': require('./src/assets/fonts/Urbanist-Regular.ttf'),
  });

  await Promise.all([...cacheImages, cacheFonts]);
}

export default App;
