import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainDrawerNavigator from './src/navigation/MainDrawerNavigator.js';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import SplashScreen from './src/components/SplashScreen'; // Make sure to import the SplashScreen component

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={_cacheResourcesAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  if (showSplash) {
    return <SplashScreen onReady={() => setShowSplash(false)} />;
  }

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
