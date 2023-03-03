// This function loops over provided stocks and calls PositionsIte function

import React from 'react';
import { StyleSheet, View } from 'react-native';
import PositionsItem from './PositionsItem.js';

const styles = StyleSheet.create({
  scrollableContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default function PositionsLoop(params) {

    //Replace with backend calls!
    let temporaryStockValues = {
        Google: {userShares:0.17384, shareValue:96972.79, previousValue:93377.74},
        Netflix: {userShares:0.19375, shareValue:88966.84, previousValue:97316.56}
    };
    let positions = [];

    params.stocks.forEach(element => positions.push(
    <PositionsItem key = {element} stockName={element} userShares={temporaryStockValues[element].userShares} shareValue={temporaryStockValues[element].shareValue} previousValue={temporaryStockValues[element].previousValue} />
    ));

  return (
    <View style={styles.scrollableContainer}>
        {positions}
    </View>
    );
}