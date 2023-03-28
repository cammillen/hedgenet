import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function PostCard(props) {
    const navigation = useNavigation();
    const { imagesource, username, timesincepost, strategy1, strategy2, strategy3, postcontent, upvotes, comments  } = props;
    
    return (
        <View style={styles.outerContainer}>
            <View style={styles.imageTitleContainer}>
                <Image source={props.imagesource} style={[styles.profileIcon, { marginRight: 14}]} />
                <View style={styles.usernameStrategyVertContainer}>
                    <Text style={[globalFonts.BodySmall.semiBold(globalColors.others.white.color), { paddingBottom: 5}]}>u/{username} • {timesincepost}h</Text>
                    <Text style={[globalFonts.BodyXLarge.semiBold(globalColors.others.white.color), styles.title]} numberOfLines={1}>{strategy1} • {strategy2} • {strategy3}</Text>
                </View>
            </View>
            {/* TO D0: add the logic so if there is a sell@ or a buy@ it goes green */}
            <Text style={[globalFonts.BodyLarge.Medium(globalColors.others.white.color)]}>{postcontent}</Text>
            <View style={styles.bottomButtons}>
                <View style={styles.upvoteCommentsHBox}>
                    <Image
                    source={require('../../assets/icons/UpVotes.png')}
                    style={[styles.icon, { marginRight: 12 }]}
                    />
                    <Text style={[globalFonts.BodyLarge.Medium(globalColors.others.white.color)]}>{upvotes}</Text>
                    <Image
                    source={require('../../assets/icons/Chat.png')}
                    style={[styles.icon, { marginRight: 12 }]}
                    />
                    <Text style={[globalFonts.BodyLarge.Medium(globalColors.others.white.color)]}>{comments}</Text>
                </View>

            </View>

            
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer:{
        marginHorizontal: 24

    },
    imageTitleContainer:{
        flexDirection: 'row',
        alignItems: 'left',
        paddingBottom: 16,
    },
    profileIcon: {
        width: 48,
        height: 48,
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

    },
    upvoteCommentsHBox:{
        flexDirection: 'row'

    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
});

export default PostCard;