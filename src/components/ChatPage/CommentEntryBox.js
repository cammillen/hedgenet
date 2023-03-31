import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';

const CommentEntryBox = () => {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = () => {
    // Do something with the comment, e.g. send it to a variable or list
    console.log(`Submitted comment: ${comment}`);
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
