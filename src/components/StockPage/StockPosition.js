// This is the card which shows either the portfolio value, or the stock price, and whether it is up or down and the % change.

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';

export default function StockPosition(param) {

  return (
    <View><View style={styles.header}>
      <Text style={globalFonts.H5(globalColors.others.white.color)}>My {param.ticker} Position</Text>
    </View></View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 24,
    paddingTop: 30
  },
});