import React from 'react';
import { ScrollView, Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { processFontFamily } from 'expo-font';

function KeyStatistics() {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            {/* This is the title:  */}
            <Text style={[globalFonts.H5(globalColors.others.white.color), {paddingBottom: 24}, {paddingLeft: 24}]}>Key Statistics</Text>
            
            {/* This is the vertical flex box with all the data:  */}
            <ScrollView horizontal={true}>
            <View style={styles.verticalBox}>

                {/* Horisontal Flex Box 1: */}
                <View style={styles.horizontalBox}>
                    {/* Data Point 1:  */}
                    <View style={styles.dataPoint}>
                        <Image
                            source={require('../../assets/icons/Open.png')} 
                            style={[styles.icon]}
                        />
                        {/* Text flex box: */}
                        <View style={styles.textContainer}>
                        <Text style={[globalFonts.BodyMedium.semiBold(globalColors.others.white.color), {marginBottom: 8}]}>Open</Text>
                        {/* TO DO: Backend Integration */}
                        <Text style={globalFonts.H6(globalColors.others.white.color)}>£32,432.23</Text>
                        </View>
                    </View>
                    {/* Data Point 2:  */}
                    <View style={styles.dataPoint}>
                        <Image
                            source={require('../../assets/icons/Stocks.png')}  
                            style={[styles.icon]}
                        />
                         {/* Text flex box: */}
                         <View style={styles.textContainer}>
                            <Text style={[globalFonts.BodyMedium.semiBold(globalColors.others.white.color), {marginBottom: 8}]}>Stocks</Text>
                            {/* TO DO: Backend Integration */}
                            <Text style={globalFonts.H6(globalColors.others.white.color)}>12 Companies</Text>
                        </View>
                    </View>
                    {/* Data Point 3:  */}
                    <View style={styles.dataPoint}>
                        <Image
                            source={require('../../assets/icons/Volume.png')}  
                            style={[styles.icon]}
                        />
                         {/* Text flex box: */}
                         <View style={styles.textContainer}>
                            <Text style={[globalFonts.BodyMedium.semiBold(globalColors.others.white.color), {marginBottom: 8}]}>Avg. Volume</Text>
                            {/* TO DO: Backend Integration */}
                            <Text style={globalFonts.H6(globalColors.others.white.color)}>123 Trades</Text>
                        </View>
                    </View>

                </View>

                {/* Horisontal Flex Box 2: */}
                <View style={styles.horizontalBox}>
                    {/* Data Point 1:  */}
                    <View style={styles.dataPoint}>
                        <Image
                            source={require('../../assets/icons/High.png')} 
                            style={[styles.icon]}
                        />
                        {/* Text flex box: */}
                        <View style={styles.textContainer}>
                            <Text style={[globalFonts.BodyMedium.semiBold(globalColors.others.white.color), {marginBottom: 8}]}>High</Text>
                            {/* TO DO: Backend Integration */}
                            <Text style={globalFonts.H6(globalColors.others.white.color)}>£34,332.29</Text>
                        </View>
                    </View>
                    {/* Data Point 2:  */}
                    <View style={styles.dataPoint}>
                        <Image
                            source={require('../../assets/icons/ProfitLoss.png')} 
                            style={[styles.icon]}
                        />
                         {/* Text flex box: */}
                         <View style={styles.textContainer}>
                            <Text style={[globalFonts.BodyMedium.semiBold(globalColors.others.white.color), {marginBottom: 8}]}>Profit/Loss</Text>
                            {/* TO DO: add logic for conditional coloring i.e. green when positive: */}
                            {/* TO DO: Backend Integration */}
                            <Text style={globalFonts.H6(globalColors.primary._500.color)}>+£4,232.12</Text>
                        </View>
                    </View>
                    {/* Data Point 3:  */}
                    <View style={styles.dataPoint}>
                        <Image
                            source={require('../../assets/icons/Performance.png')}
                            style={[styles.icon]}
                        />
                         {/* Text flex box: */}
                         <View style={styles.textContainer}>
                            <Text style={[globalFonts.BodyMedium.semiBold(globalColors.others.white.color), {marginBottom: 8}]}>Performance</Text>
                            {/* TO DO: add logic for conditional coloring i.e. green when positive: */}
                            {/* TO DO: Backend Integration */}
                            <Text style={globalFonts.H6(globalColors.primary._500.color)}>+32.29%</Text>
                        </View>
                    </View>

                </View>


                {/* Horisontal Flex Box 3: */}
                <View style={styles.horizontalBox}>
                    {/* Data Point 1:  */}
                    <View style={styles.dataPoint}>
                        <Image
                            source={require('../../assets/icons/Low.png')}  
                            style={[styles.icon]}
                        />
                        {/* Text flex box: */}
                        <View style={styles.textContainer}>
                            <Text style={[globalFonts.BodyMedium.semiBold(globalColors.others.white.color), {marginBottom: 8}]}>Low</Text>
                            {/* TO DO: Backend Integration */}
                            <Text style={globalFonts.H6(globalColors.others.white.color)}>£30,232.11</Text>
                        </View>
                    </View>
                    {/* Data Point 2:  */}
                    <View style={styles.dataPoint}>
                        <Image
                            source={require('../../assets/icons/TotalInvestment.png')}  
                            style={[styles.icon]}
                        />
                         {/* Text flex box: */}
                         <View style={styles.textContainer}>  
                            <Text style={[globalFonts.BodyMedium.semiBold(globalColors.others.white.color), {marginBottom: 8}]}>Total Investment</Text>
                            {/* TO DO: Backend Integration */}
                            <Text style={globalFonts.H6(globalColors.others.red.color)}>-£10,000.00</Text>
                        </View>
                    </View>
                    {/* Data Point 3:  */}
                    <View style={styles.dataPoint}>
                        <Image
                            source={require('../../assets/icons/Leaderboard.png')}  
                            style={[styles.icon]}
                        />
                         {/* Text flex box: */}
                         <View style={styles.textContainer}> 
                            <Text style={[globalFonts.BodyMedium.semiBold(globalColors.others.white.color), {marginBottom: 8}]}>Leaderboard</Text>
                            {/* TO DO: Backend Integration */}
                            <Text style={globalFonts.H6(globalColors.others.white.color)}>123rd</Text>
                        </View>
                    </View>
                </View>
            </View>
            </ScrollView>
            {/* TO DO: Add the navigation logic here:  */}
            <TouchableOpacity onPress={() => navigation.navigate('TradingInsights')}>
                <Text style={styles.moreDataText}>View Collective Positions</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        // paddingLeft: 24,
        // marginLeft: 24,
        paddingRight: 0,
        paddingBottom: 30, 
    },
    verticalBox:{
        flexDirection: 'column',
        overflow: 'scroll',
        paddingBottom: 6,
    },
    horizontalBox:{
        paddingLeft: 24,
        flexDirection: 'row',
        marginBottom: 24,
        justifyContent: 'space-between',
        width: 620,
    },
    dataPoint:{
        width: 200,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer:{
        marginLeft: 16,
        flexDirection: 'column',
    },
    icon: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        // marginRight: 20,
    },
    moreDataText: {
        ...globalFonts.BodyMedium.semiBold(globalColors.primary._500.color),
        textAlign: 'center'
    },
});

export default KeyStatistics;