import React from 'react';
import { ScrollView, Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import fundImageSelect from '../assets/fundImageRequire.js';

import DummyFunds from '../assets/funds/dummyFundData.js';


function Funds({fundName}) {
    let name = fundName;
    if (name.length > 20) { name = name.substring(0,19) + '...';}

    const growth = ((DummyFunds[fundName].fundValue - DummyStocks[fundName].previousValue) / DummyStocks[fundName].previousValue) * 100;

    let percentageGrowth = "+ " + growth.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let growthColor = 'success';
    if (percentageGrowth[2] == '-') {
      percentageGrowth = percentageGrowth.replace('-','').replace('+','-');
      growthColor = 'error';
    }

    return (
          <View style={styles.verticalBox}>
            <Image source={fundImageSelect(fundName)} style={[styles.icon, {marginBottom:5}]} />
            <Text style={styles.topText}>{name}</Text>
            <Text style={globalFonts.BodyMedium.semiBold(globalColors.status[growthColor].color)}>{percentageGrowth}%</Text>
          </View>

      );

};

function TopPerformers({funds}) {
    const navigation = useNavigation();

    let fundlist = [];
    funds.forEach(element => fundlist.push(
    <TouchableOpacity key = {element} onPress={{/* Redirect to fund page */}}>
        <Funds key = {element} fundName={element} />
    </TouchableOpacity>
    ));
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={[globalFonts.H5(globalColors.others.white.color)]}>Top Performers</Text>
                <TouchableOpacity onPress={{/*Must define some backend call to sort data*/}}>
                    <Image source={require('../assets/icons/ArrowRightGreen.png')} style={styles.rightIcon} />
                </TouchableOpacity>
            </View>
            {/* This is the vertical flex box with all the data:  */}
            <ScrollView horizontal={true}>
            {fundlist}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 24,
        marginBottom: 24,
        paddingLeft: 24,
        paddingRight: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    topText:{
        ...globalFonts.H6(globalColors.others.white.color),
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 80,
        lineHeight: 25,
    },
    container: {
        flexDirection: 'column',
        paddingBottom: 30, 
    },
    verticalBox:{
        overflow: 'scroll',
        paddingBottom: 6,
        maxWidth: 80,
        alignItems: 'center',
        marginLeft: 20,
    },
    icon: {
        borderColor: globalColors.primary._500.color,
        borderWidth: 4,
        borderRadius: 100,
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    rightIcon:{
        width: 24,
        height: 24,
        resizeMode: 'contain',
        marginRight: 24
    }
});

export default TopPerformers;