// This is the card for the Index Funds used on the home screen.
// TO DO: GRAPH BACKEND LOGIC

import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import MaskedView from '@react-native-community/masked-view';

const { width } = Dimensions.get('window');

function DrawBox (marketName,marketGrowth) {//maybe add a market graph param?

    let growth = "+ " + String((100*marketGrowth).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let growthColor = 'success';
    if (growth[2] == '-') {
      growth = growth.replace('-','').replace('+','-');
      growthColor = 'error';
    }

    const graphImage = growthColor == 'success' ? require('../assets/graphs(delete)/ExampleGraphGreen.png') : require('../assets/graphs(delete)/ExampleGraphRed.png'); //generalise once on graphing

    return (
        <View style={styles.box} key={marketName}>
            <View style={styles.textBox}>
                <Text style={globalFonts.BodyLarge.Bold(globalColors.others.white.color)}>{marketName}</Text>
                <Text style={globalFonts.BodyLarge.Bold(globalColors.status[growthColor].color)}>{growth}%</Text>
            </View>
            <Image source={graphImage} style={styles.graph} />
        </View>
    );
};

export default function IndexFundCard (params){

    let boxes = [];
    params.markets.forEach(element => boxes.push(DrawBox(element.marketName,element.growth)));
    return(
        <View style={styles.container}>{boxes}</View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
        marginTop: 15,
        paddingBottom: 15,
        paddingRight: 24,
        paddingLeft: 24,
    },
    box: {
        width: ((width-48-30)/3), // I endogenised the width of each box to the width of the screen - margin - padding between boxes. 
        borderColor: globalColors.dark._3.color,
        borderWidth: 1,
        backgroundColor: globalColors.dark._2.color,
        height: 120,
        borderRadius: 20,
        paddingTop: 16
    },
    textBox: {
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16,
        height: 48
    },
    boxOutside: {
        //some mask that takes the negative space
    },
    graph: {//definitely needs changing and above
        width: ((width-48-34)/3), //2 narrower to account for border -- have changed from figma because uses mask to cover ends -- once box outside done, reinstate width:119.57
        height: 89.5,
        resizeMode: 'contain',
        marginTop: -12,
        borderBottomLeftRadius: 1000,
        borderBottomRightRadius: 1000,
      },
})