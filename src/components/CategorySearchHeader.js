import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CategorySearchHeader({category}) {
  const navigation = useNavigation();

  const categoryString = category.length < 13 ? category : category.substring(0,11) + '...';

  return (
    <View style={styles.header}>
      <View style={styles.subHeaderLeft}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/icons/ArrowLeft_Green.png')} style={[styles.arrowIcon, { marginRight: 16}]} />
        </TouchableOpacity>  
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.textBox}>{categoryString}</Text> 
        </TouchableOpacity>  
      </View>
      <View style={styles.subHeaderRight}>
        <Text style={globalFonts.H6(globalColors.status.success.color)}>Asc. Order</Text>
        <Image source={require('../assets/icons/UpDownArrow.png')} style={[styles.arrowsIcon, { marginLeft: 12}]} />
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
},
textBox:{
  ...globalFonts.BodyLarge.semiBold(globalColors.primary._500.color),
  paddingRight:20,
  paddingLeft:20,
  paddingBottom:10,
  paddingTop:4,
  borderColor:globalColors.primary._500.color,
  borderWidth:1,
  borderRadius:12,
  minWidth: 100, //minimum width to fit content
},
});