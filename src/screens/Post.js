import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopMenuBar from '../components/TopMenuBar.js';
import Background from '../components/Background.js';
import BottomMenuBar from '../components/BottomMenuBar.js';
import PostHeader from '../components/SectionHeaders/PostHeader.js';
import PostCard from '../components/ChatPage/PostCard.js';
import CommentSectionEntry from '../components/ChatPage/CommentSectionEntry.js';
import { ScrollView } from 'react-native-gesture-handler';
import CommentCard from '../components/ChatPage/CommentCard.js';
import { useRoute } from '@react-navigation/native';

export default function Post () {

  const Screen = 'Post';

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
        <ScrollView>
        <PostHeader title="Fund Post" />
        <PostCard
            username ={'cameronrmillen'}
            timesincepost={'1'}
            strategy1={'sell@TSLA'} strategy2={'buy@MSFT'} strategy3={'hold@NVDA'}
            imagesource={require('../assets/icons/ProfilePlaceholder.png')}
            postcontent={'I really think that we should sell@TSLA this week due to the recent rumors about the quarterly report and Elon Musk being a hairy alien. We should also buy@MSFT as there has been speculation that Gates was good friends with Epstein which could see the share price rocket as his popularity grows. I think we should also hold@NVDA as their new tech that allows Incels to fly may take off, so we should see what happens next week.'}
            upvotes={'123'}
            comments={'10'}
        />
        <CommentSectionEntry 
            totalcomments={'10'}
            imagesource={require('../assets/icons/ProfilePlaceholder.png')}
        />
        <CommentCard
            username ={'cameronrmillen'}
            timesincepost={'1'}
            imagesource={require('../assets/icons/ProfilePlaceholder.png')}
            commentcontent={'I dont think that this is a good idea, we should hold onto TSLA, they are a great company!'}
            upvotes={'123'}
        />
        </ScrollView>
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
