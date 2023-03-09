// USAGE DOCUMENTATION:
// it looks like: {  Fund Analytics        View Members ->   }
// e.g. "<TextRightArrowHeader leftTitle="Fund Analytics" rightTitle="View Members"/>"

import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function LeftArrowTextHeader(params) {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <Text style={globalFonts.H5(globalColors.others.white.color)}>Top Performers</Text>
            <TouchableOpacity style={styles.subContainer} onPress={{/*Must define some backend call to sort data*/}}>
                <Image source={require('../assets/icons/ArrowRightGreen.png')} style={styles.rightIcon} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 24,
        marginRight: 24,
    },
    rightIcon:{
        width: 19.58,
        height: 17.83,
        resizeMode: 'contain',
    }
});