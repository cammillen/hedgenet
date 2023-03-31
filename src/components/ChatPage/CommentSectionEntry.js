// DOCUMENTATION: 
// <CommentSectionEntry 
// totalcomments={'10'}
// imagesource={require('../assets/icons/ProfilePlaceholder.png')}
// />

import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CommentEntryBox from './CommentEntryBox';

function CommentSectionEntry(props) {
    const navigation = useNavigation();
    const { totalcomments, imagesource } = props;

    return (
        <View style={styles.outerContainer}>
            <View style={styles.textContainer}>
                <Text style={[globalFonts.H5(globalColors.others.white.color), { marginRight: 10}]}>Comments</Text>
                <Text style={[globalFonts.BodyLarge.Medium(globalColors.others.white.color), { marginBottom: 1}]}>{totalcomments}</Text>
            </View>
            <View style={styles.commentOuterContainer}>
                <Image source={props.imagesource} style={[styles.profileIcon, { marginRight: 14}]} />
                <CommentEntryBox/>
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
    textContainer:{
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    commentOuterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    profileIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        borderColor: globalColors.primary._500.color,
        borderWidth: 2,
        borderRadius: 100, 
    },
});

export default CommentSectionEntry;