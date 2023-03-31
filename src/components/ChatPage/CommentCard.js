// DOCUMENTATION: 
{/* <CommentCard
username ={'cameronrmillen'}
timesincepost={'1'}
imagesource={require('../assets/icons/ProfilePlaceholder.png')}
commentcontent={'I dont think that this is a good idea, we should hold onto TSLA, they are a great company!'}
upvotes={'123'}
/> */}

import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function CommentCard(props) {
    const navigation = useNavigation();
    const { imagesource, username, timesincepost, commentcontent, upvotes  } = props;
    
    return (
        <View style={styles.outerContainer}>
            <View style={styles.imageTitleContainer}>
                <Image source={imagesource} style={[styles.profileIcon, { marginRight: 14}]} />
                <View style={styles.usernameStrategyVertContainer}>
                    <Text style={[globalFonts.BodySmall.semiBold(globalColors.others.white.color), { paddingBottom: 5}]}>u/{username} • {timesincepost}h</Text>
                    <Text style={[globalFonts.BodyLarge.Medium(globalColors.others.white.color), { paddingBottom: 5}]}>{commentcontent}</Text>
                </View>
            </View>
            <View style={styles.bottomButtons}>
                <View style={styles.upvoteCommentsHBox}>
                    <Image
                    source={require('../../assets/icons/UpVotes.png')}
                    style={[styles.icon, { marginRight: 12 }]}
                    />
                    <Text style={[globalFonts.BodyLarge.Medium(globalColors.others.white.color), { marginRight: 15 }]}>{upvotes}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer:{
        marginHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: globalColors.dark._3.color,
        paddingBottom: 16,
        marginBottom: 20,
    },
    imageTitleContainer:{
        flexDirection: 'row',
        alignItems: 'left',
        paddingBottom: 16,
    },
    profileIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        borderColor: globalColors.primary._500.color,
        borderWidth: 2,
        borderRadius: 100, 
    },
    usernameStrategyVertContainer:{
        paddingTop: 3,
        flex: 1,
    },
    title: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
      },
    bottomButtons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    upvoteCommentsHBox:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
});

export default CommentCard;