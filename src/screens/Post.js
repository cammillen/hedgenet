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

export default function Post (props) {

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

  const { imagesource, username, timesincepost, strategy1, strategy2, strategy3, postcontent, upvotes, comments  } = props.route.params;

  return ( 
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container} onLayout={onLayoutRootView}>
        <TopMenuBar screen={Screen} />
        <ScrollView>
        <PostHeader title="Fund Post" />
        <PostCard
            username ={username}
            timesincepost={timesincepost}
            strategy1={strategy1} strategy2={strategy2} strategy3={strategy3}
            imagesource={imagesource}
            postcontent={postcontent}
            upvotes={upvotes}
            comments={comments}
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
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
