// Documentation: 
// This feeds into the FundMembers.js - there isnt anything to change or do on this page, all the backend integration is in Fund Members.
// Just need to add logic for the remove button. 

import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;

function ToggleOption(params) {

    const navigation = useNavigation();
    const { width } = Dimensions.get('window');
    const [isSelected, setIsSelected] = useState(false);
    const toggleSelection = () => {
        setIsSelected(!isSelected);
    }
    const unselectedIcon = require('../../assets/icons/Selected.png');
    const selectedIcon = require('../../assets/icons/Unselected.png');
    const iconSource = isSelected ? selectedIcon : unselectedIcon;
    
    return (
        
        <View style={styles.container}>

            <View style={styles.iconTextFlexBox}>
                {/* Image:  */}
                {/* TO DO BACKEND: Connect to backend */}
                <Image source={params.icon} style={styles.icon} />
                {/* Title and Tags Vertical Box:  */}
                <View style={styles.textFlexBox}>
                    <Text style={[globalFonts.H6(globalColors.others.white.color), {marginBottom: 7}]}>{params.title}</Text>
                    <Text style={[globalFonts.BodyMedium.Medium(globalColors.others.white.color), { lineHeight: 22 }]}>{params.text}</Text>
                </View>
            </View>
            {/* Toggle Button: */}
            <TouchableOpacity style={[styles.toggleButton, isSelected && styles.toggleButtonSelected]} onPress={toggleSelection}>
                {isSelected && <View style={styles.toggleButtonFill} />}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        paddingBottom: 20,
        borderBottomColor: globalColors.dark._3.color,
        borderBottomWidth: 1,
        backgroundColor: 'rgba(27,172,75,0)',
        marginLeft: 24,
        marginRight: 24
      },
    iconTextFlexBox:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textFlexBox:{
        marginLeft: 16,
        flex: 1,
    },
    icon:{
        marginRight: 10,
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    toggleButton:{
        marginLeft: 10,
        right: 0,
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: globalColors.primary._500.color,
        borderRadius: 100,
    },

    toggleButtonFill:{
        position: 'absolute',
        backgroundColor: globalColors.primary._500.color,
        width: 15,
        height: 15,
        borderRadius: 100,
    },
});

export default ToggleOption;