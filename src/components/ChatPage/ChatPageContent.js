import React from 'react';
import { Text, ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import PostCard from './PostCard';

function ChatPageContent({ posts }) {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
    <Text style={styles.text}>Discussion</Text>
      {posts.map((post, index) => (
        <PostCard
            username={post.username}
            timesincepost={post.timesincepost}
            strategy1={post.strategy1}
            strategy2={post.strategy2}
            strategy3={post.strategy3}
            imagesource={post.imagesource}
            postcontent={post.postcontent}
            upvotes={post.upvotes}
            comments={post.comments}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 130,
  },
  text:{
    ...globalFonts.H5(globalColors.others.white.color),
    paddingVertical: 24,
    marginLeft: 24


  },
});

export default ChatPageContent;

