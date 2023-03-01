// This is the card which shows either the portfolio value, or the stock price, and whether it is up or down and the % change.

import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';


const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: globalColors.others.black.color,
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalColors.others.black.color,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
}
});

export default function ValueCard(param) {

  let performance = (param.delta/param.cashBalance).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let textColor = 'success';
  let imageRequire = require('../assets/icons/ArrowUpSquare.png');
  if (param.delta < 0) {
    textColor = 'error';
    imageRequire = require('../assets/icons/ArrowDownSquare.png');
  }
  let cashBalance = (param.cashBalance/100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let delta = (param.delta/100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <View style={styles.header}>

      <Text style={globalFonts.H2(globalColors.others.white.color)}>${cashBalance}</Text>
      <View style={styles.subHeader}>

      <Image
        source={imageRequire}
        style={[styles.arrowIcon, { marginRight: 8 }]}
      />
      <Text style={globalFonts.BodyLarge.semiBold(globalColors.status[textColor].color)}>${delta}   {"("}{performance}%{")"}</Text>
      </View>

    </View>

  );
}

