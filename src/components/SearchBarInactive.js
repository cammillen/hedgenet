// this just needs to direct to search bar page on tap.
import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SearchBarInactive() {

    const navigation = useNavigation();

    return(  
        <TouchableOpacity onPress={() => navigation.navigate('Search')} style={styles.searchBox}>
            {/* NAVIGATION Add code to redirect to Search.js (search page) when the box is pressed. */}
            <View style={styles.iconTextContainer}>
                <Image
                source={require('../assets/icons/Search.png')}
                style={[styles.searchIcon, { marginRight: 12 }]}
                />
                <Text style={globalFonts.BodyLarge.Regular(globalColors.greyscale._600.color)}>Search</Text>
            </View>
            {/* NAVIGATION Add code for the filter popup when the filter icon is pressed. */}
            <TouchableOpacity onPress={() => navigation.navigate('FilterSearch')}>
            <Image
                source={require('../assets/icons/Filter.png')}
                style={[styles.filterIcon, { marginRight: 5 }]}
            />
            </TouchableOpacity>
        </TouchableOpacity>
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
        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 18,
        paddingBottom: 18,
        borderRadius: 16
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
});