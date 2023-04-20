import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import LogoSelect from '../assets/logoRequire.js';

const screenWidth = Dimensions.get('window').width;

export default function MyTradingHistoryItem(params) {

  let stockImage = LogoSelect(params.stockName);
  let stockValue = (params.userShares * params.shareValue).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let date = '5 Mar';
  let fund = 'UCL Fintech';
  
  let status = 'Sold';
  let statusColor = 'success';
  if (status != 'Sold') {
    statusColor = 'error';
  }

  let stockName = params.stockName;
  if (stockName.length > 10) { stockName = stockName.substring(0,9) + '...';}
  if (fund.length > 10) { fund = fund.substring(0,9) + '...';}


  return (
    <View style={{ width: screenWidth, paddingLeft: 24, paddingRight: 24 }}>
      <View style={styles.header}>
      <Image source={stockImage} style={[styles.logoIcon]} />
        <View style={styles.subHeaderLeft}>
          <Text style={globalFonts.H6(globalColors.others.white.color)}>{stockName}</Text>
          <Text style={globalFonts.BodyMedium.semiBold(globalColors.others.white.color)}>{date} • {fund}</Text>
          <Text style={globalFonts.BodyMedium.semiBold(globalColors.others.white.color)}>{String(params.userShares.toPrecision(6)).substring(0,7)} shares</Text>
        </View>
        <View style={styles.subHeaderRight}>
          <Text style={globalFonts.H6(globalColors.others.white.color)}>${stockValue}</Text>
          <Text style={[ globalFonts.BodySmall.semiBold(globalColors.status[statusColor].color), {borderColor: globalColors.status[statusColor].color}, {borderWidth: 1}, {borderRadius: 6}, {marginTop: 8}, {paddingBottom: 6}, {paddingLeft: 10}, {paddingTop: 6}, {paddingRight: 10}, {display: 'flex'}, {flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'} ]}>{status}</Text>
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
      height: 55,
      marginLeft: -75
    },
    subHeaderRight: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      height: 55,
      gap: 6
    },
    logoIcon: {
      width: 60,
      height: 60,
      resizeMode: 'contain',
    },
    statusBox:{
      
    }
  });