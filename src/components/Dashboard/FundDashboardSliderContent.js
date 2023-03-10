import React from 'react';
import { View, ScrollView, StyleSheet, Text} from 'react-native';
import FundCard from './FundCard.js';
import { useNavigation } from '@react-navigation/native';
import TextRightArrowHeader from '../SectionHeaders/TextRightArrowHeader.js';
import FundGraph from '../Graphs/FundGraph.js';
import KeyStatistics from './KeyStatistics.js'
import TextWithSort from '../SectionHeaders/TextWithSort.js';
import MyPositions from '../MyPositions.js';
// import MyTradingHistoryItem from './MyTradingHistoryItem.js';

function FundDashboardSliderContent() {
    const navigation = useNavigation();
    
    return (
        <ScrollView >
            {/* <MyTradingHistoryItem/> */}
            <FundCard/>
            <TextRightArrowHeader leftTitle="Fund Analytics" rightTitle="View Members" navigatepage="FundMembers"/>
            <FundGraph/>
            <KeyStatistics/>
            <TextWithSort title="My Positions" />
            {/* TO DO BACKEND: Add logic for which positions are shown here:  */}
            <MyPositions stocks={['Microsoft', 'Sony', 'Spotify', 'Tesla']} paddingBottom={30} bottomText={'See More'}/>
            <TextWithSort title="My Trading History" />
            {/* Delete when done:  */}
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            {/* Make sure to add padding to bottom of last component so you can scroll and see all.  */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
   
    },
);

export default FundDashboardSliderContent;