import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import BrowseFundsItem from './BrowseFundsItem.js';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

export default function BrowseFunds({ funds, paddingBottom }) {

  const { name: currentRouteName } = useRoute();

  const isActive = (routeName) => {
    return currentRouteName === routeName;
  }

  const navigation = useNavigation();

  //Replace with backend and api calls!
  const temporaryFundValues = {
    'Bio Shorters': {uni: 'UCL', memberNumbers:23, fundValue:936.34, previousValue:889.04}, //use quotation mark notation if variable name doesn't compile
    'CS DeFi Trades': {uni: 'UCL', memberNumbers:4, fundValue:936.34, previousValue:889.04},
    'Fintech Algo': {uni: 'UCL', memberNumbers:56, fundValue:936.34, previousValue:889.04},    
    'UCL Agtech': {uni: 'UCL', memberNumbers:103, fundValue:936.34, previousValue:889.04},
    'UCL Big Pharma': {uni: 'UCL', memberNumbers:6, fundValue:936.34, previousValue:889.04},
    'Coca-Cola': {uni: 'UCL', memberNumbers:20, fundValue:983.21, previousValue:964.03},
    'UCL FoodTech': {uni: 'UCL', memberNumbers:262, fundValue:936.34, previousValue:889.04},
    'UCL Healthcare': {uni: 'UCL', memberNumbers:17, fundsValue:96972.79, previousValue:93377.74},
    'UCL Infra Traders': {uni: 'UCL', memberNumbers:93, fundValue:936.34, previousValue:889.04},
  };

  let positions = [];
  funds.forEach(element => positions.push(
  <TouchableOpacity key = {element} onPress={() => navigation.navigate('FundDiscussion', {fundName: element})}>
  <BrowseFundsItem key = {element} fundName={element} uni={temporaryFundValues[element].uni} memberNumbers={temporaryFundValues[element].memberNumbers} fundValue={temporaryFundValues[element].fundValue} previousValue={temporaryFundValues[element].previousValue} />
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