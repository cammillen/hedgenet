//USAGE: 
// <PositionsLoop stocks={['Microsoft', 'Sony', 'Spotify', 'Tesla']} paddingBottom={150} />
// Pass in padding bottom through it to set padding bottom, which is useful when you need to be able to see the stocks hidden by the bottom bar.

import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import MyPositionsItem from './MyPositionsItem.js';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import DummyStocks from '../assets/stocks/dummyStockData.js'

export default function MyPositions({ stocks, paddingBottom, bottomText }) {

  const { name: currentRouteName } = useRoute();

  const isActive = (routeName) => {
    return currentRouteName === routeName;
  }

  const navigation = useNavigation();

  
  //// Loop through each stock name and fetch ticker symbol from backend
  //for (let i = 0; i < stocks.length; i++) {
  //  const tickerQuery = `SELECT ticker FROM public.stock WHERE name = '${stocks[i]}'`;
  //  const tickerData = fetchMyData(tickerQuery);
  //  tickers.push(tickerData[0].ticker);
  //}
//
  //// Define object to store today's and yesterday's stock values
  //const stockValues = {};
//
  //// Loop through each ticker symbol and fetch stock values from Yahoo Finance API
  //for (let i = 0; i < tickers.length; i++) {
  //  const response = fetch(`https://query1.finance.yahoo.com/v7/finance/quote?symbols=${tickers[i]}`);
  //  const data = response.json();
  //  const today = data.quoteResponse.result[0].regularMarketPrice;
  //  const yesterday = data.quoteResponse.result[0].regularMarketPreviousClose;
  //  stockValues[tickers[i]] = { today, yesterday };
  //}



  let positions = [];
  stocks.forEach(element => positions.push(
  <TouchableOpacity key = {element} onPress={() => navigation.navigate('StockPage', {stockName: element})}>
    <MyPositionsItem key = {element} stockName={element} userShares={DummyStocks[element].userShares} shareValue={DummyStocks[element].shareValue} previousValue={DummyStocks[element].previousValue} />
  </TouchableOpacity>
  ));

  return (
    <ScrollView alwaysBounceVertical={true}>
    <View style={styles(paddingBottom).container}>
        {positions}
        {/* TO DO: Need to add loop and logic to the see more botton below */}
        <Text style={[globalFonts.BodyLarge.semiBold(globalColors.primary._500.color), {paddingTop: 30}]}>{bottomText}</Text>
    </View>
    </ScrollView>
    );
}

const styles = (paddingBottom) => StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: paddingBottom, //This makes sure when they scroll all the way down the last stock isnt obstructed by the bottom menu bar.
  },
});