// USAGE: 
// it looks like: {  My Positions            ^Recently }
// e.g. "<TextWithSort title="My Positions" />"

import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import GlobalLinearGradients from '../LinearGradients.js';

export default function TextWithSort(param) {

  const rightTitle = param.rightTitle ? param.rightTitle : 'Recently';

  return (
    <View>
    <View style={styles.header}>
      <View style={styles.subHeaderLeft}>
        <Text style={globalFonts.H5(globalColors.others.white.color)}>{param.title}</Text>
      </View>
      <View style={styles.subHeaderRight}>
        <Text style={globalFonts.H6(globalColors.status.success.color)}>{rightTitle}</Text>
        <Image source={require('../../assets/icons/UpDownArrow.png')} style={[styles.arrowsIcon, { marginLeft: 12}]} />
      </View>
    </View>
    {/* <GlobalLinearGradients color1={globalColors.others.black.color} color2={'transparent'} style={'verticalDownOverlap'} dimensionSize={12} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 32,
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