// this just needs to direct to search bar page on tap.
import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, TextInput, View } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SearchBarActive() {
    return(
        <View style={styles.fullComp}>
            <Image
                source={require('../assets/icons/ArrowLeft_Green.png')}
                style={styles.ArrowLeft_GreenIcon}
            />      
            <TextInput 
                selectionColor={globalColors.others.white.color}
                autoFocus={true}
                style={styles.input}
                placeholder=""
                placeholderTextColor = {globalColors.others.white.color}
                color = {globalColors.others.white.color}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    fullComp:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 24,
        marginTop: 24,
        marginRight: 24,
    },
    input:{
        caretColor: globalColors.others.white.color,
        marginLeft: 10,
        flex: 1,
        backgroundColor: globalColors.dark._2.color,
        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 18,
        paddingBottom: 18,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: globalColors.primary._500.color,
        backgroundColor: '#020E06',
    },
    iconTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
    },
    searchIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    filterIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    ArrowLeft_GreenIcon: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
    },
});

