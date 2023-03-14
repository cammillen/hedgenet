import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function TopMoversHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.subHeaderLeft}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/icons/ArrowLeft_Green.png')} style={[styles.arrowIcon, { marginRight: 16}]} />
        </TouchableOpacity>
        <Text style={globalFonts.H4(globalColors.others.white.color)}>Top Movers</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 38,
    marginTop: 26,
    marginBottom: 24
  },
  subHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 24,
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