// This is the card which shows either the portfolio value, or the stock price, and whether it is up or down and the % change.

import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import LogoSelect from '../assets/logoRequire.js';

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 20,
    marginRight: 24,
    marginLeft: 24,
    borderBottomColor: globalColors.dark._3.color,
    borderBottomWidth: 1,
    backgroundColor: '#000000',
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

export default function PositionsItem(params) {

  let stockImage = LogoSelect(params.stockName);
  let graphImage = require('../assets/graphs(delete)/ExampleGraph.png'); //generalise once on graphing
  let stockValue = (params.userShares * params.shareValue).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  let percentageGrowth = "+ " + (100*(params.shareValue - params.previousValue)/params.previousValue).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let growthColor = 'success';
  if (percentageGrowth[2] == '-') {
    percentageGrowth = percentageGrowth.replace('-','').replace('+','-');
    growthColor = 'error';
  }
  let stockName = params.stockName;
  if (stockName.length > 10) { stockName = stockName.substring(0,9) + '...';
  }

  return (
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
  );
}