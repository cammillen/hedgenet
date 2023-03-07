import React from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import FundCard from './FundCard.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextRightArrowHeader from './Section Headers/TextRightArrowHeader.js';
import FundGraph from './Graphs/FundGraph.js'

function FundDashBoardContent() {
    const navigation = useNavigation();
    
    return (
        <View>
            <FundCard/>
            <TextRightArrowHeader leftTitle="Fund Analytics" rightTitle="View Members"/>
            <FundGraph/>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default FundDashBoardContent;