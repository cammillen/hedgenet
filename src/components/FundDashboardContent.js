import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import FundCard from './FundCard.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextRightArrowHeader from './Section Headers/TextRightArrowHeader.js';
import FundGraph from './Graphs/FundGraph.js';
import KeyStatistics from './KeyStatistics.js'

function FundDashBoardContent() {
    const navigation = useNavigation();
    
    return (
        <ScrollView >
            <FundCard/>
            <TextRightArrowHeader leftTitle="Fund Analytics" rightTitle="View Members"/>
            <FundGraph/>
            <KeyStatistics/>
            
            {/* Make sure to add padding to bottom of last component so you can scroll and see all.  */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({

});

export default FundDashBoardContent;