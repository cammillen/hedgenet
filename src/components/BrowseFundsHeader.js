import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 24,
  },
  subHeaderRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 55
  },
  arrowIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain'
  }
});

export default function FundHeader(params) {
 
  return (
    <View style={{ width: screenWidth, paddingLeft: 24, paddingRight: 24 }}>
      <View style={styles.header}>
        <Text style={globalFonts.H5(globalColors.others.white.color)}>{params.category} Funds</Text>
        <View style={styles.subHeaderRight}>
          <Text style={globalFonts.H6(globalColors.primary._500.color)}>Asc. Order  {/*MUST BE REPLACED WITH PARAMETER AND SOME SORTING SYSTEM*/}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('../assets/icons/UpDownArrow.png')} style={[styles.arrowIcon]} />
          </TouchableOpacity>
    </View></View></View>
  );
};