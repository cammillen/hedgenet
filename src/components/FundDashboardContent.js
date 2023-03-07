import React from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import FundCard from './FundCard.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function FundDashBoardContent() {
    const navigation = useNavigation();
    
    return (
        <View>
            <FundCard/>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default FundDashBoardContent;