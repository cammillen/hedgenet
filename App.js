import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainDrawerNavigator from './src/navigation/MainDrawerNavigator.js';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';

const App = () => {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={_cacheResourcesAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
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
  ];

  const cacheImages = images.map((image) => {
    return Asset.fromModule(image).downloadAsync();
  });

  await Promise.all(cacheImages);
}

export default App;