import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import BrowseFundsItem from './BrowseFundsItem.js';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import DummyFunds from '../assets/funds/dummyFundData.js';

export default function BrowseFunds({ funds, paddingBottom }) {

  const { name: currentRouteName } = useRoute();

  const isActive = (routeName) => {
    return currentRouteName === routeName;
  }

  const navigation = useNavigation();

  //Replace with backend and api calls!


  let positions = [];
  funds.forEach(element => positions.push(
  <TouchableOpacity key = {element} onPress={() => navigation.navigate('FundDiscussion', {fundName: element})}>
  <BrowseFundsItem key = {element} fundName={element} uni={DummyFunds[element].uni} memberNumbers={DummyFunds[element].memberNumbers} fundValue={DummyFunds[element].fundValue} previousValue={DummyFunds[element].previousValue} />
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