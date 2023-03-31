import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopMenuBar from '../components/TopMenuBar.js';
import Background from '../components/Background.js';
import BottomMenuBar from '../components/BottomMenuBar.js';
import ChatPageHeader from '../components/SectionHeaders/ChatPageHeader';
import ChatPageContent from '../components/ChatPage/ChatPageContent.js';
import SliderBar from '../components/SliderBar';
import { useNavigation } from '@react-navigation/native';
//Backend TO DO: this has to import the real backend data 
import { fund1posts, fund2posts } from '../backend/dummyPostData';

export default function Chat () {
  const navigation = useNavigation();

  const Screen = 'Chat';

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
        <TopMenuBar screen={Screen} />
        {/* TO DO: NAVIGATION link the header to the create a post popup */}
        <ChatPageHeader name={'My Funds'} marginBottom={5}  buttonnavigation={'Profile'}/>
        <SliderBar titles={titles} screens={screens} />
        <View style={styles.bottomMenuBarContainer}>
          <BottomMenuBar />
        </View>
      </View>
    </Background>
  );
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

// Slider Bar Implementation
// TO DO: you need to create a loop that inputs the list of all the funds they are a member of
// You then need to add the logic that creates the dictionary of posts associated which each fund, and the enter it into posts={}

const titles = ['UCL FinTech Fund', 'LSE Sustainable Finance']; 
const screens = [
  () => <ChatPageContent posts={fund1posts}  />,
  () => <ChatPageContent posts={fund2posts}  />,
];

