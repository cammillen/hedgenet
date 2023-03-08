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
            <View style={styles.subContainer}>
                <TouchableOpacity onPress={() => navigation.navigate(params.lastPage)}>
                    <Image source={require('../assets/icons/ArrowLeft_Green.png')} style={styles.icon} />
                </TouchableOpacity>
            <Text style={globalFonts.BodyMedium.semiBold(globalColors.others.white.color)}>{params.leftTitle}</Text>
            </View>
            <View style={styles.subContainer}>
                <Text style={globalFonts.H5(globalColors.primary._500.color)}>Asc. Order{/*must change to be variable*/}</Text>
                <TouchableOpacity style={styles.subContainer} onPress={{/*Must define some backend call to sort data*/}}>
                    <Image source={require('../assets/icons/UpdDownArrow.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>
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
    subContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon:{
        marginLeft: 5,
        width: 24,
        height: 24,
        resizeMode: 'contain'
    }
});