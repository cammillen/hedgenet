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
        <ChatPageHeader name={'My Funds'} marginBottom={10}  buttonnavigation={'Profile'}/>
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

// DUMMY DATA:
  // BACKEND TO DO: need to populate this dictionary with the posts for each fund.
    // Fund 1:
const fund1posts = [
  {
    username: 'cameronrmillen',
    timesincepost: '1',
    strategy1: 'sell@TSLA',
    strategy2: 'buy@MSFT',
    strategy3: 'hold@NVDA',
    imagesource: require('../assets/icons/ProfilePlaceholder.png'),
    postcontent:
      'I really think that we should sell@TSLA this week due to the recent rumors about the quarterly report and Elon Musk being a hairy alien. We should also buy@MSFT as there has been speculation that Gates was good friends with Epstein which could see the share price rocket as his popularity grows. I think we should also hold@NVDA as their new tech that allows Incels to fly may take off, so we should see what happens next week.',
    upvotes: '123',
    comments: '10',
  },
  {
      username: 'johndoe',
      timesincepost: '2',
      strategy1: 'sell@AAPL',
      strategy2: 'buy@GOOG',
      strategy3: 'hold@AMZN',
      imagesource: require('../assets/icons/ProfilePlaceholder.png'),
      postcontent:
        'I think it\'s a good time to sell@AAPL as the stock has reached its peak. If you\'re looking for a good stock to buy, I recommend buying@GOOG as it has strong growth potential. As for AMZN, it\'s a solid stock to hold for the long-term.',
      upvotes: '50',
      comments: '5',
    },
    {
      username: 'janedoe',
      timesincepost: '3',
      strategy1: 'sell@AMC',
      strategy2: 'buy@BTC',
      strategy3: 'hold@TSLA',
      imagesource: require('../assets/icons/ProfilePlaceholder.png'),
      postcontent:
        'I believe it\'s time to sell@AMC as the stock has been overhyped. For those looking for high-risk, high-reward investments, I recommend buying@BTC. TSLA is also a good stock to hold for the long-term.',
      upvotes: '80',
      comments: '8',
    },
    {
      username: 'bobsmith',
      timesincepost: '5',
      strategy1: 'sell@DIS',
      strategy2: 'buy@NIO',
      strategy3: 'hold@AAPL',
      imagesource: require('../assets/icons/ProfilePlaceholder.png'),
      postcontent:
        'If you\'re holding DIS stock, I recommend selling@DIS as it has hit its ceiling. For a good stock to buy, I recommend buying@NIO as the company has a promising future in the electric vehicle space. AAPL is also a solid stock to hold for the long-term.',
      upvotes: '20',
      comments: '2',
    },  
];
    // Fund 2:
const fund2posts = [
  {
    username: 'janedoe',
    timesincepost: '1',
    strategy1: 'buy@AMC',
    strategy2: 'sell@GOOG',
    strategy3: 'hold@AAPL',
    imagesource: require('../assets/icons/ProfilePlaceholder.png'),
    postcontent:
      'I think it\'s a good time to buy@AMC as it has strong growth potential. For those looking to sell, I recommend selling@GOOG. AAPL is also a solid stock to hold for the long-term.',
    upvotes: '25',
    comments: '3',
  },
  {
    username: 'johndoe',
    timesincepost: '2',
    strategy1: 'buy@TSLA',
    strategy2: 'sell@NIO',
    strategy3: 'hold@MSFT',
    imagesource: require('../assets/icons/ProfilePlaceholder.png'),
    postcontent:
      'I believe it\'s time to buy@TSLA as the company has a promising future. If you\'re holding NIO stock, I recommend selling@NIO. MSFT is also a solid stock to hold for the long-term.',
    upvotes: '40',
    comments: '4',
  },
  {
    username: 'bobsmith',
    timesincepost: '3',
    strategy1: 'sell@AAPL',
    strategy2: 'buy@AMZN',
    strategy3: 'hold@TSLA',
    imagesource: require('../assets/icons/ProfilePlaceholder.png'),
    postcontent:
      'I think it\'s time to sell@AAPL as the company is facing challenges with its latest products. I recommend buying@AMZN as the company has strong growth potential. TSLA is also a good stock to hold for the long-term.',
    upvotes: '35',
    comments: '2',
  },
  {
    username: 'cameronrmillen',
    timesincepost: '4',
    strategy1: 'hold@GOOG',
    strategy2: 'sell@BTC',
    strategy3: 'buy@NIO',
    imagesource: require('../assets/icons/ProfilePlaceholder.png'),
    postcontent:
      'I think it\'s a good idea to hold@GOOG for now, as the stock has been performing well. For those looking to sell, I recommend selling@BTC. Buying@NIO is also a good option as the company has a promising future in the electric vehicle space.',
    upvotes: '15',
    comments: '1',
  },
];
