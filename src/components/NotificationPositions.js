// This is the card which shows either the portfolio value, or the stock price, and whether it is up or down and the % change.

import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import LogoSelect from '../assets/logoRequire.js';

import DummyStocks from '../assets/stocks/dummyStockData.js';


const screenWidth = Dimensions.get('window').width;

export default function NotificationPositions({notification}) {

  let fund = notification.fund;
  fund = fund.length > 13 ? fund.substring(0,11)+'...' : fund;
  let date = notification.date;
  date = new Date(date);
  const today = new Date();
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const daysPassed = Math.floor((today - date) / millisecondsPerDay);

  if (fund == 'Daily Review') {

    let performance = notification.performance;
    const message = `Total value is ${performance > 0 ? 'up' : 'down'}!`;
    const timeElapsed = `Daily Review • ${daysPassed} day ago `;
    const growthMessage = 'Fund ' + (performance > 0 ? 'Growth' : 'Shrinkage');
    const boxColor = performance > 0 ? 'success' : 'error';
    const image = performance > 0 ? require('../assets/icons/ActivityGreen.png') : require('../assets/icons/ActivityRed.png');
    performance = performance > 0 ? '+'+performance : performance;

    return (
      <View style={{ width: screenWidth, paddingLeft: 24, paddingRight: 24 }}>
        <View style={styles.header}>
          <View style={styles.leftContainer}>
            <View style={styles.performanceIconContainer}>
              <Image source={image} style={[styles.performanceIcon]} />
            </View>
            <View style={[styles.subHeaderLeft, {marginLeft: 16}]}>
              <Text style={globalFonts.H6(globalColors.others.white.color)}>{message}</Text>
              <Text style={globalFonts.BodyMedium.semiBold(globalColors.others.white.color)}>{timeElapsed}</Text>
            </View>
          </View>
          <View style={styles.subHeaderRight}>
            <Text style={globalFonts.H6(globalColors.others.white.color)}>{performance}%</Text>{/* 4 sig fig */}
            <Text style={styles.textBox(boxColor)}>{growthMessage}</Text>
          </View>
        </View>
      </View>
    );
  }

  let stock = notification.stock;
  const userShares = notification.userShares;
  const stockImage = LogoSelect(stock);
  const userCurrent = userShares*DummyStocks[stock].shareValue;
  const userPrevious = userShares*DummyStocks[stock].previousValue;
  const delta = userCurrent - userPrevious > 0 ? '$+'+(userCurrent - userPrevious).toFixed(2) : '$-'+(userPrevious - userCurrent).toFixed(2);
  const growth = ((DummyStocks[stock].shareValue - DummyStocks[stock].previousValue) / DummyStocks[stock].previousValue) * 100;
  stock = stock.length > 10 ? stock.substring(0,9) + '...' : stock;
  const growthColor = growth > 0 ? 'success' : 'error';
  const graphImage = growthColor == 'success' ? require('../assets/graphs(delete)/ExampleGraphGreen.png') : require('../assets/graphs(delete)/ExampleGraphRed.png'); //generalise once on graphing

  return (
    <View style={{ width: screenWidth, paddingLeft: 24, paddingRight: 24 }}>
      <View style={styles.header}>
      <View style={styles.leftContainer}>
      <Image source={stockImage} style={[styles.logoIcon, { marginRight: 16 }]} />
        <View style={styles.subHeaderLeft}>
          <Text style={globalFonts.H6(globalColors.others.white.color)}>{stock}</Text>
          <Text style={globalFonts.BodyMedium.semiBold(globalColors.others.white.color)}>{fund}</Text>
        </View>
        </View>
        <Image source={graphImage} style={[styles.graphVisual, { marginLeft: 16, marginRight: 16 }]} />
        <View style={styles.subHeaderRight}>
          <Text style={globalFonts.H6(globalColors.others.white.color)}>{delta}</Text>
          <Text style={globalFonts.BodyMedium.semiBold(globalColors.status[growthColor].color)}>{growth > 0 ? `+${growth.toFixed(2)}` : `${growth.toFixed(2)}`}%</Text>
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
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  subHeaderLeft: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    height: 55,
  },
  subHeaderRight: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    height: 55
  },
  performanceIconContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  performanceIcon: {
    width: 25.71,
    height: 25.71,
    resizeMode: 'contain'
  },
  logoIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain'
  },
  graphVisual: {
    width: 63.99,
    height: 27.58,
    resizeMode: 'contain'
  },
  textBox: (c) => ({
    ...globalFonts.BodyXSmall.semiBold(globalColors.status[c].color),
    paddingRight:10,
    paddingLeft:10,
    padding:6,
    borderColor:globalColors.status[c].color,
    borderWidth:0.2,
    borderRadius:100,
    minWidth: 80, //may have to give values if misaligning - 80, 92
  })
});