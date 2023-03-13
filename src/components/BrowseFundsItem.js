// This is the card which shows either the portfolio value, or the stock price, and whether it is up or down and the % change.

import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import fundImageSelect from '../assets/fundImageRequire.js';

const screenWidth = Dimensions.get('window').width;

export default function MyPositionsItem(params) {

  const fundImage = fundImageSelect(params.fundName);
  let fundValue = (params.fundValue/100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  let percentageGrowth = "+ " + (100*(params.fundValue - params.previousValue)/params.previousValue).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let growthColor = 'success';
  if (percentageGrowth[2] == '-') {
    percentageGrowth = percentageGrowth.replace('-','').replace('+','-');
    growthColor = 'error';
  }
  let fundName = params.fundName;
  if (fundName.length > 20) { fundName = fundName.substring(0,19) + '...';
  }

  const graphImage = growthColor == 'success' ? require('../assets/graphs(delete)/ExampleGraphGreen.png') : require('../assets/graphs(delete)/ExampleGraphRed.png'); //generalise once on graphing

  return (
    <View style={{ width: screenWidth, paddingLeft: 24, paddingRight: 24 }}>
      <View style={styles.header}>
      <Image source={fundImage} style={[styles.fundIcon, { marginRight: 16 }]} />
        <View style={styles.subHeaderLeft}>
          <Text style={globalFonts.H6(globalColors.others.white.color)}>{fundName}</Text>
          <Text style={globalFonts.BodyMedium.semiBold(globalColors.others.white.color)}>{params.uni} • {params.memberNumbers} members</Text>
        </View>
        <Image source={graphImage} style={[styles.graphVisual, { marginLeft: 16, marginRight: 16 }]} />
        <View style={styles.subHeaderRight}>
          <Text style={globalFonts.H6(globalColors.others.white.color)}>${fundValue}</Text>
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
    maxWidth: 125,
    height: 55,
  },
  subHeaderRight: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    height: 55
  },
  fundIcon: {
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