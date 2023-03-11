// In here:
// This is the top menu bar that contains all the top navigation componenets.
// It needs to include the black background behind the menu bar (see figma file).
import React from 'react';
import { Image, Platform } from 'react-native';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LogoSelect from '../../assets/logoRequire.js';


const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
graph: {
    width: screenWidth,
    height: 0.781*screenWidth,
    resizeMode: 'contain'
  }
});

export default function StockGraphVisual(params) {
  let stockImage = require('../../assets/graphs(delete)/StockPriceGraph.png'); //replace with api call and calculated graphs!
  let stockName = params.stockName; //for posterity
  
  return (<View style={{ width: screenWidth}}><Image source={stockImage} style={styles.graph}/></View>);
  }
