// Usage: 
// it looks like: {  Logo  My Funds           (...)   }
// e.g. <LogoHeader name={'My Portfolio'} marginBottom={10}  buttonnavigation={'Profile'}/>
// the button navigation defines which page to navigate too if pressed, in the above example it is the profile page. 

import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function ChatPageHeader(props) {
  const { name, marginBottom } = props;
  const navigation = useNavigation();

  return (
    <View style={[styles.header, { marginBottom: marginBottom }]}>
      <View style={styles.subHeader}>
        <Image source={require('../../assets/icons/HedgenetWhite.png')} style={[styles.hedgenetIcon, { marginRight: 16, marginLeft: 24}]} />
        <Text style={globalFonts.H4(globalColors.others.white.color)}>{props.name}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate(props.buttonnavigation)}>
        <Image source={require('../../assets/icons/Write.png')} style={[styles.moreIcon, { marginRight: 24 }]} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    marginTop: 15,
    // marginBottom: marginBottom,
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: 248, //limit text width
    maxHeight: 30
  },
  hedgenetIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  moreIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain'
}
});

