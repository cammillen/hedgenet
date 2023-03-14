// USAGE DOCUMENTATION:
// it looks like: {  Fund Analytics        View Members ->   }
// e.g. "<TextRightArrowHeader leftTitle="Fund Analytics" rightTitle="View Members" navigatepage="NavigatedPage"/>"

import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function TextRightArrowHeader(params) {
    const navigation = useNavigation();
    const toPassOn = params.params;
    
    return (
        <View style={styles.container}>
            <Text style={globalFonts.H5(globalColors.others.white.color)}>{params.leftTitle}</Text>
            <TouchableOpacity style={styles.rightContainer} onPress={() => navigation.navigate(params.navigatePage,{toPassOn})}>
                <Text style={globalFonts.BodyMedium.semiBold(globalColors.primary._500.color)}>{params.rightTitle}</Text>
                <Image source={require('../../assets/icons/ArrowRightGreen.png')} style={styles.icon} />
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
    rightContainer:{
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