// This is the card which shows either the portfolio value, or the stock price, and whether it is up or down and the % change.

import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';

export default function StockHeaderCard() {

  return (
    <View style={styles.header}>
      <Text style={globalFonts.H5(globalColors.others.white.color)}>Stock Price</Text>

      <View style={styles.subHeader}>
        <Text style={globalFonts.BodyMedium.semiBold(globalColors.status.success.color)}>More Info </Text>
        <Image source={require('../../assets/icons/ArrowRightGreen.png')} style={[styles.arrowIcon, {marginRight: 24}]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 24
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    maxHeight: 30
  },
  arrowIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  }
});

