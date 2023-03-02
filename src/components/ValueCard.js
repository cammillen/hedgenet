// This is the card which shows either the portfolio value, or the stock price, and whether it is up or down and the % change.

import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';

export default function ValueCard(param) {

  let performance = (param.delta/param.cashBalance).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","); //comma & decimal place formatting
  let textColor = 'success';
  let imageRequire = require('../assets/icons/ArrowUpSquare.png');
  if (param.delta < 0) {
    textColor = 'error';
    imageRequire = require('../assets/icons/ArrowDownSquare.png');
  }
  let cashBalance = (param.cashBalance/100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let delta = (param.delta/100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <View style={styles.rect}>
      <View style={styles.header}>
        <Text style={globalFonts.H2(globalColors.others.white.color)}>${cashBalance}</Text>
        <View style={styles.subHeader}>
        <Image source={imageRequire} style={[styles.arrowIcon, { marginRight: 8 }]} />
        <Text style={globalFonts.BodyLarge.semiBold(globalColors.status[textColor].color)}>${delta}   {"("}{performance}%{")"}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    backgroundColor: globalColors.dark._2.color,
    marginLeft: 24,
    marginRight: 24,
    borderColor: globalColors.dark._3.color,
    borderWidth: 1,
    alignItems: 'center',
    padding: 12,
    borderRadius: 24
  },
  header: {
    flewDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 6,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
}
});

