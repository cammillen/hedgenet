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

      //this uses spaces between each member name
    //how do we calculate fund value and previous fund value?
    //let qStocks = [];
    //stocks.forEach(element => qStocks.push(fetchMyData('SELECT * FROM public.stock WHERE stockname = '+element)));
    //let qFundlist = [];
    //qFunds.forEach(element => {
    //  const name = element.fundname.length < 13 ? element.fundname : element.fundname.substring(0,12) + '...';
    //  const left = element.fundname == funds[0] ? 24 : 0
    //  const growth = ((DummyFunds[element].fundValue - DummyFunds[element].previousValue) / DummyFunds[element].previousValue) * 100;
    //  qFundlist.push(
    //    <TouchableOpacity key={element} style={styles.column(left)} onPress={() => {/* Individual Fund Page */}}>
    //      <Image source={require(element.imagefile)} style={{...styles.logoIcon, borderColor: globalColors.status[growth > 0 ? 'success' : 'error'].color}} />
    //      <Text style={styles.topText}>{name}</Text>
    //      <Text style={globalFonts.BodyMedium.semiBold(globalColors.status[growth > 0 ? 'success' : 'error'].color)}>
    //        {growth > 0 ? `+${growth.toFixed(2)}` : `${growth.toFixed(2)}`}%
    //      </Text>
    //    </TouchableOpacity>
    //  );
    //});

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