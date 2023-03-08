//USAGE: 
// <PositionsLoop stocks={['Microsoft', 'Sony', 'Spotify', 'Tesla']} paddingBottom={150} />
// Padd padding bottom through it to set padding bottom. 

import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import PositionsItem from './PositionsItem.js';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

export default function PositionsLoop({ stocks, paddingBottom }) {

  const { name: currentRouteName } = useRoute();

  const isActive = (routeName) => {
    return currentRouteName === routeName;
  }

  const navigation = useNavigation();

  //Replace with backend and api calls!
  const temporaryStockValues = {
    'Advanced Micro Devices': {userShares:23.629, shareValue:936.34, previousValue:889.04}, //use quotation mark notation if variable name doesn't compile
    Alibaba: {userShares:23.629, shareValue:936.34, previousValue:889.04},
    Amazon: {userShares:23.629, shareValue:936.34, previousValue:889.04},    
    Apple: {userShares:23.629, shareValue:936.34, previousValue:889.04},
    Blackberry: {userShares:23.629, shareValue:936.34, previousValue:889.04},
    'Coca-Cola': {userShares:20.69, shareValue:983.21, previousValue:964.03},
    Dell: {userShares:23.629, shareValue:936.34, previousValue:889.04},
    Google: {userShares:0.17384, shareValue:96972.79, previousValue:93377.74},
    LG: {userShares:23.629, shareValue:936.34, previousValue:889.04},
    Meta: {userShares:23.629, shareValue:936.34, previousValue:889.04},
    Microsoft: {userShares:23.629, shareValue:936.34, previousValue:889.04},
    Netflix: {userShares:0.19375, shareValue:88966.84, previousValue:87316.56},
    Sony: {userShares:23.629, shareValue:936.34, previousValue:889.04},
    Spotify: {userShares:23.629, shareValue:936.34, previousValue:889.04},
    Tesla: {userShares:23.629, shareValue:936.34, previousValue:889.04},  
    Twitter: {userShares:23.629, shareValue:936.34, previousValue:889.04},
    Virgin: {userShares:23.629, shareValue:936.34, previousValue:889.04},
  };

  let positions = [];
  stocks.forEach(element => positions.push(
  <TouchableOpacity key = {element} onPress={() => navigation.navigate('StockPage', {stockName: element})}>
  <PositionsItem key = {element} stockName={element} userShares={temporaryStockValues[element].userShares} shareValue={temporaryStockValues[element].shareValue} previousValue={temporaryStockValues[element].previousValue} />
  </TouchableOpacity>
  ));

  return (
    <ScrollView alwaysBounceVertical={true}>
    <View style={styles(paddingBottom).container}>
        {positions}
        {/* TO DO: Need to add loop and logic to the see more botton below */}
        <Text style={[globalFonts.BodyLarge.semiBold(globalColors.primary._500.color), {paddingTop: 30}]}>See More</Text>
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