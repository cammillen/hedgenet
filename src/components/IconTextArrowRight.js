import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function IconTextArrowRight({ onPress, iconSource, title }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={[ styles.horizontalOuterBox, {paddingTop: 24}]} onPress={onPress}>
      <View style={styles.horizontalInnerBox}>
        <Image
          source={iconSource}  
          style={[styles.icon]}
        />
        <Text style={[globalFonts.H6(globalColors.others.white.color), styles.title]} numberOfLines={1}>{title}</Text>
        <View style={styles.spacer} />
        <Image
          source={require('../assets/icons/ArrowRightWhite.png')}  
          style={[styles.arrowIcon]}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  horizontalOuterBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  horizontalInnerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 20,
  },
  title: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  spacer: {
    width: 10,
  },
  arrowIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});

export default IconTextArrowRight;
