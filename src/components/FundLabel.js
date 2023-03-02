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
    backgroundColor: globalColors.others.black.color,
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: globalColors.others.black.color,
    maxWidth: 248, //limit text width
    maxHeight: 30
  },
  hedgenetIcon: {
    width: 20.4,
    height: 24.27,
    resizeMode: 'contain',
  },
  moreIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain'
}
});

export default function FundLabel(param) {

  //let name = trimmedString(param.name,param.name.length,50,false);
  let name = param.name;
  if (name.length > 23) { name = name.substring(0,20) + "..."; }

  return (
    <View style={styles.header}>
      <View style={styles.subHeader}>
        <Image source={require('../assets/icons/HedgenetWhite.png')} style={[styles.hedgenetIcon, { marginRight: 16, marginLeft: 36}]} />
        <Text style={globalFonts.H4(globalColors.others.white.color)}>{name}</Text>
        <Text style={globalFonts.H4(globalColors.others.white.color)}>...</Text>
      </View>
        <Image source={require('../assets/icons/ExpandIcon.png')} style={[styles.moreIcon, { marginRight: 36 }]} />
    </View>
  );
}

