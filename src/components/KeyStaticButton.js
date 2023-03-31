import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text, Pressable, FlatList, Button } from "react-native";
import { useFonts } from 'expo-font';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';

const KeyStaticButton = (props) => {

  // 'Open', 'Stocks', 'High', 'Profit/Loss', 'Low', 'Total Investment'
  const getImage = (value) => {
    switch(value) {
      case 'Open':
        return require('../assets/icons/Open.png');
      case 'Stocks':
        return require('../assets/icons/Stocks.png');
      case 'High':
        return require('../assets/icons/High.png');
      case 'Profit/Loss':
        return require('../assets/icons/ProfitLoss.png');
      case 'Low':
        return require('../assets/icons/Low.png');
      case 'Total Investment':
        return require('../assets/icons/TotalInvestment.png');
    }
  }

  return (
    <View style={styles.mainGroup}>
      <Image 
        source={getImage(props.name)}
        style={{width: 50, height: 50}}
      />
      <View style={{flexDirection: 'column'}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={[globalFonts.H6('white'), {fontSize: 10}]}>{props.name}</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={[globalFonts.H6('white'), {fontSize: 14}]}>{props.value}</Text>
        </View>
      </View>
    </View>
  );
} 

const styles = StyleSheet.create({
  mainGroup: {
    width: '50%',
    flexDirection: 'row'
  }
});

export default KeyStaticButton;