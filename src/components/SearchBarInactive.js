// this just needs to direct to search bar page on tap.
import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';

export default function SearchBar() {
    return( // Need to add functionality so that when you press it you get redirected to the search page. 
        <View style={styles.searchBox}> 
            <View style={styles.iconTextContainer}>
                <Image
                source={require('../assets/icons/Search.png')}
                style={[styles.searchIcon, { marginRight: 12 }]}
                />
                <Text style={globalFonts.BodyLarge.Regular(globalColors.greyscale._600.color)}>Search</Text>
            </View>
            <Image
                source={require('../assets/icons/Filter.png')}
                style={[styles.filterIcon, { marginRight: 12 }]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBox:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: globalColors.dark._2.color,
        marginLeft: 24,
        marginRight: 24,
        marginTop: 24,
        padding: 14,
        borderRadius: 16
    },
    iconTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
});