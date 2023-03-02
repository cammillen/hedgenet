// This is the card which shows either the portfolio value, or the stock price, and whether it is up or down and the % change.

import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';


const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 32,
    marginTop: 15,
    marginBottom: 20,
  },
  subHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 24,
  },
  subHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 24,
  },
  arrowsIcon: {
    width: 19.58,
    height: 17.83,
    resizeMode: 'contain'
}
});

export default function MyPositions() {

  return (
    <View style={styles.header}>
      <View style={styles.subHeaderLeft}>
        <Text style={globalFonts.H5(globalColors.others.white.color)}>My Positions</Text>
      </View>
      <View style={styles.subHeaderRight}>
        <Text style={globalFonts.H6(globalColors.status.success.color)}>Recently</Text>
        <Image source={require('../assets/icons/UpDownArrow.png')} style={[styles.arrowsIcon, { marginLeft: 12}]} />
      </View>
    </View>
  );
}

