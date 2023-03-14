// This is the card which shows either the portfolio value, or the stock price, and whether it is up or down and the % change.

import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import MarketStatsDetails from '../../components/StockPage/MarketStatsDetails.js';

export default function MarketStats(params) {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Text style={globalFonts.H5(globalColors.others.white.color)}>{params.ticker} Market Stats</Text>

      <View style={styles.subHeader}>
      <TouchableOpacity onPress={() => navigation.navigate('MarketStatsDetails')}>
      <Image source={require('../../assets/icons/ArrowRightGreen.png')} style={[styles.arrowIcon, {marginRight: 24}]} />


             
            </TouchableOpacity>
       
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

