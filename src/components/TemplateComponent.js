import React from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Placeholder() {
    const navigation = useNavigation();
    
    return (
        <View>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default Placeholder;