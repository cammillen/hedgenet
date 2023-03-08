import React from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ToggleOption from './ToggleOption.js';

function FundSettings() {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Voting Strategy</Text>
            <ToggleOption title={"Daily Poll"} text={"A poll is created daily to decide fund investment strategy."} icon={require('../../assets/icons/DailyPoll.png')}/>
            <ToggleOption title={"Weekly Poll"} text={"A poll is created weekly to decide fund investment strategy."} icon={require('../../assets/icons/WeeklyPoll.png')}/>
            <ToggleOption title={"Free For All"} text={"No investment strategy, everyone is free to trade under the fund."} icon={require('../../assets/icons/FreeForAll.png')}/>
            <Text style={[styles.title, {paddingTop: 24}]}>Investment Permissions</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    title:{
        paddingLeft: 24,
        ...globalFonts.H5(globalColors.others.white.color),
    }

});

export default FundSettings;

// Add backend using an IF statement for which option is active: 