// USAGE DOCUMENTATION:
// it looks like: {  Fund Analytics        View Members ->   }
// e.g. "<TextRightArrowHeader leftTitle="Fund Analytics" rightTitle="View Members"/>"

import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'react-native-svg';

export default function LeftArrowTextHeader(params) {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <TouchableOpacity onPress={() => navigation.navigate(params.lastPage)}>
                    <Image source={require('../../assets/icons/ArrowLeft_Green.png')} style={styles.leftIcon} />
                </TouchableOpacity>
            <Text style={globalFonts.H4(globalColors.others.white.color)}>{params.leftTitle}</Text>
            </View>
            <View style={styles.subContainer}>
                <Text style={globalFonts.H6(globalColors.primary._500.color)}>Asc. Order  {/*must change to be variable*/}</Text>
                <TouchableOpacity style={styles.subContainer} onPress={{/*Must define some backend call to sort data*/}}>
                    <Image source={require('../../assets/icons/UpDownArrow.png')} style={styles.rightIcon} />
                </TouchableOpacity>
            </View>
            <LinearGradient colors={['#000','transparent']} style={{height: 24, marginBottom: -24, zIndex: 999}} />
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
    leftIcon:{
        width: 15.81,
        height: 19.25,
        resizeMode: 'contain',
        marginRight: 16
    },
    rightIcon:{
        width: 19.58,
        height: 17.83,
        resizeMode: 'contain',
    }
});