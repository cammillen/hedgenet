import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import LogoSelect from '../assets/logoRequire.js';

const screenWidth = Dimensions.get('window').width;

export default function MyTradingHistoryItem(params) {

  let stockImage = LogoSelect(params.stockName);
  let stockValue = (params.userShares * params.shareValue).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let percentageGrowth = "+ " + (100*(params.shareValue - params.previousValue)/params.previousValue).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let growthColor = 'success';
  if (percentageGrowth[2] == '-') {
    percentageGrowth = percentageGrowth.replace('-','').replace('+','-');
    growthColor = 'error';
  }
  let stockName = params.stockName;
  if (stockName.length > 10) { stockName = stockName.substring(0,9) + '...';
  }

  const graphImage = growthColor == 'success' ? require('../assets/graphs(delete)/ExampleGraphGreen.png') : require('../assets/graphs(delete)/ExampleGraphRed.png'); //generalise once on graphing


  return (
    <View style={{ width: screenWidth, paddingLeft: 24, paddingRight: 24 }}>
      <View style={styles.header}>
      <Image source={stockImage} style={[styles.logoIcon, { marginRight: 16 }]} />
        <View style={styles.subHeaderLeft}>
          <Text style={globalFonts.H6(globalColors.others.white.color)}>{stockName}</Text>
          <Text style={globalFonts.BodyMedium.semiBold(globalColors.others.white.color)}>{String(params.userShares.toPrecision(6)).substring(0,7)} shares</Text>
        </View>
        <Image source={graphImage} style={[styles.graphVisual, { marginLeft: 16, marginRight: 16 }]} />
        <View style={styles.subHeaderRight}>
          <Text style={globalFonts.H6(globalColors.others.white.color)}>${stockValue}</Text>
          <Text style={globalFonts.BodyMedium.semiBold(globalColors.status[growthColor].color)}>{percentageGrowth}%</Text>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    header: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
      paddingBottom: 20,
      borderBottomColor: globalColors.dark._3.color,
      borderBottomWidth: 1,
      backgroundColor: 'rgba(27,172,75,0)',
    },
    subHeaderLeft: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-around',
      height: 55,
    },
    subHeaderRight: {
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'space-around',
      height: 55
    },
    logoIcon: {
      width: 60,
      height: 60,
      resizeMode: 'contain'
    },
    graphVisual: {
      width: 63.99,
      height: 27.58,
      resizeMode: 'contain'
    }
  });