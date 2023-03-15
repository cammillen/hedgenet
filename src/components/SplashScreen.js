import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const splashFrames = [
  // Add all your image frames here
  require('../assets/SplashFrames/1.png'),
  require('../assets/SplashFrames/2.png'),
  require('../assets/SplashFrames/3.png'),
  require('../assets/SplashFrames/4.png'),
  require('../assets/SplashFrames/5.png'),
  require('../assets/SplashFrames/6.png'),
  require('../assets/SplashFrames/7.png'),
  require('../assets/SplashFrames/8.png'),
  require('../assets/SplashFrames/9.png'),
  require('../assets/SplashFrames/10.png'),
  require('../assets/SplashFrames/11.png'),
  require('../assets/SplashFrames/12.png'),
  require('../assets/SplashFrames/13.png'),
  require('../assets/SplashFrames/14.png'),
  require('../assets/SplashFrames/15.png'),
  require('../assets/SplashFrames/16.png'),
  require('../assets/SplashFrames/17.png'),
  require('../assets/SplashFrames/18.png'),
];

const SplashScreen = ({ onReady }) => {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFrameIndex((prevIndex) => (prevIndex + 1) % splashFrames.length);
    }, 10); // Adjust this value to control the speed of the animation

    const timeoutId = setTimeout(() => {
      if (onReady) {
        onReady();
      }
    }, 2120); // Adjust this value to control the duration of the splash screen

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [onReady]);

  return (
    <View style={styles.container}>
      <Image
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
        }}
        source={splashFrames[currentFrameIndex]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000', // Set background color based on your design
  },
});

export default SplashScreen;
