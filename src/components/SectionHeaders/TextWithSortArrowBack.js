// USAGE: 
// it looks like: {  <-   My Positions            ^Recently }
// e.g. "<TextWithSortArrowBack title="My Positions" />"

import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import GlobalLinearGradients from '../LinearGradients.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function TextWithSort(params) {
    const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.subHeaderLeft}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/icons/ArrowLeft_Green.png')} style={[styles.arrowIcon, { marginRight: 16}]} />
        </TouchableOpacity>
        <Text style={globalFonts.H5(globalColors.others.white.color)}>{params.title}</Text>
      </View>
      <View style={styles.subHeaderRight}>
        <Text style={globalFonts.H6(globalColors.status.success.color)}>{params.rightTitle}</Text>
        <Image source={require('../../assets/icons/UpDownArrow.png')} style={[styles.arrowsIcon, { marginLeft: 12}]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 32,
    marginTop: 26,
  },
  subHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 24,
  },
  subHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 24,
  },
  arrowsIcon: {
    width: 19.58,
    height: 17.83,
    resizeMode: 'contain'
},
arrowIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain'
}
});