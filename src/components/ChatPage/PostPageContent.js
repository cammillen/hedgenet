import React from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PostCard from './PostCard';
import CommentCard from './CommentCard';
import CommentSectionEntry from './CommentSectionEntry';

function ChatPageContent() {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
        <PostCard
          username ={'cameronrmillen'}
          timesincepost={'1'}
          strategy1={'sell@TSLA'} strategy2={'buy@MSFT'} strategy3={'hold@NVDA'}
          imagesource={require('../../assets/icons/ProfilePlaceholder.png')}
          postcontent={'I really think that we should sell@TSLA this week due to the recent rumors about the quarterly report and Elon Musk being a hairy alien. We should also buy@MSFT as there has been speculation that Gates was good friends with Epstein which could see the share price rocket as his popularity grows. I think we should also hold@NVDA as their new tech that allows Incels to fly may take off, so we should see what happens next week.'}
          upvotes={'123'}
          comments={'10'}
        />
        <CommentSectionEntry 
          totalcomments={'10'}
          imagesource={require('../../assets/icons/ProfilePlaceholder.png')}
        />
        <CommentCard
          username ={'cameronrmillen'}
          timesincepost={'1'}
          imagesource={require('../../assets/icons/ProfilePlaceholder.png')}
          commentcontent={'I dont think that this is a good idea, we should hold onto TSLA, they are a great company!'}
          upvotes={'123'}
        />
        </View>
    );
}

const styles = StyleSheet.create({
});

export default ChatPageContent;