// This is the slider bar that allows you to navigate through funds for example. 
import React from 'react';
import { ScrollView } from 'react-native';
import { Text, View } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';

export default function SliderBar(params) {

    let funds = [];
    params.funds.forEach(element => funds.push(
    <View key={element} style={{height:24, marginLeft: 24, borderWidth:0.5, marginRight: 24}}><View style={{ flex: 1 }}><Text style={globalFonts.BodyXLarge.semiBold(globalColors.others.white.color)}>{element}</Text></View></View>
    ));

  return (
    <View style={{height:24}}>
        <ScrollView horizontal={true} alwaysBounceHorizontal={true} >{funds}</ScrollView>
    </View>
    );
}