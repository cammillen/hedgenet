import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text, Pressable, FlatList, Button } from "react-native";
import { useFonts } from 'expo-font';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';

const PinCode = (props) => {

  // state: 0: not set, 1: now setting, 2: setted

  const password = props.password;
  const passwordIndex = props.passwordIndex;

  useEffect(() => {

  }
  , [password, passwordIndex]);

  const renderBox = (props) => {
    return (
      <View style={[
          styles.box, 
          props.index === passwordIndex ? {backgroundColor: '#1E2A22'} : {backgroundColor: '#1F222A'} ,
          props.index === passwordIndex ? {borderColor: '#12D18E'} : {borderColor: '#35383F'}]}
        >
        {
          props.index > passwordIndex ? <></>
            : props.index === passwordIndex  ?
              <Text style={{fontSize: 16, color: 'white'}}>{props.val}</Text>
            : <View style={{height: 20, width: 20, borderRadius: 40, backgroundColor: '#ffffff'}}>
              </View>
        }
      </View>
    );
  }

  return (
    <View style={[{flexDirection: 'row', height: '80%'}]}>
      {
        password.map((value, i) => renderBox({val: value, index: i}))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: 'center',
    marginTop: '2%',
    marginRight: '2%',
    marginLeft: '2%',
    marginBottom: '2%',
    flex: 1,
    alignItems: 'center'
  }
});

export default PinCode;