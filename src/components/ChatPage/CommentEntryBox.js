import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { post1comments } from '../../backend/dummyCommentData.js';

const CommentEntryBox = () => {
  const [comment, setComment] = useState('');

  // BACKEND TO DO: NEED TO ADD BACKEND TO ADD NEW COMMENT TO DATABASE

  const handleCommentSubmit = () => {
    // Update the list of comments with the new comment
    const newComment = {
      username: 'yourUsername',
      timesincepost: 'now',
      imagesource: require('../../assets/dummyprofilepictures/1.png'),
      commentcontent: comment,
      upvotes: '0',
    };
    post1comments.push(newComment);

    // Clear the comment input
    setComment('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.commentBox} onPress={handleCommentSubmit}>
        <TextInput
          style={styles.commentInput}
          placeholder="Add a comment..."
          placeholderTextColor={globalColors.greyscale._500.color}
          onChangeText={(text) => setComment(text)}
          value={comment}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commentBox: {
    backgroundColor: globalColors.dark._2.color,
    padding: 10,
    paddingLeft: 15,
    borderRadius: 10
  },
  commentInput: {
    ...globalFonts.BodyLarge.Regular(globalColors.others.white.color)

  },
});

export default CommentEntryBox;
