// USAGE DOCUMENTATION:
// it looks like: {  <- Admin Panel          Call Poll {Icon}   }

import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function AdminPanelHeader() {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>

            {/* Back Icon and "Admin Panel:" */}
            <View style={styles.leftContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                    <Image source={require('../../assets/icons/ArrowRightGreen.png')} style={styles.arrowIcon} />
                </TouchableOpacity>
                <Text style={globalFonts.H4(globalColors.others.white.color)}>Admin Panel</Text>
            </View>

            {/* Call Poll and Poll Icon: */}
            <TouchableOpacity style={styles.rightContainer} onPress={() => navigation.navigate('PollPopop')}>
                <Text style={globalFonts.H6(globalColors.primary._500.color)}>Call Poll</Text>
                <Image source={require('../../assets/icons/ChartGreenOutline.png')} style={styles.icon} />                
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
        paddingTop: 26,
        marginBottom: 5,
    },
    leftContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rightContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    arrowIcon:{
        marginLeft: 5,
        width: 28,
        height: 28,
        transform: [{ rotate: '180deg' }],
        resizeMode: 'contain',
        marginRight: 16,
    },
    icon:{
        marginLeft: 5,
        width: 24,
        height: 24,
        resizeMode: 'contain',
    }
});