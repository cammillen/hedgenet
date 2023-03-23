import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text, Pressable, FlatList, Button } from "react-native";
import { useFonts } from 'expo-font';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';

const PinCode = (props) => {

  // state: 0: not set, 1: now setting, 2: setted

  const password = props.password;
  const passwordState = props.passwordState;

  useEffect(() => {

  }
  , [password, passwordState]);

  const renderBox = (props) => {
    return (
      <View style={[{
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: 'center',
        width: 50,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        flex: 1,
        alignItems: 'center',
        elevation: 1
        }, props.type === 1 ? {backgroundColor: '#1E2A22'} : {backgroundColor: '#1F222A'} ,
           props.type === 1 ? {borderColor: '#12D18E'} : {borderColor: '#35383F'}]}
        >
        {
          props.type === 0 ? <></>
            : props.type === 1 ?
              <Text style={{fontSize: 16, color: 'white'}}>7</Text>
            : <View style={{height: 20, width: 20, borderRadius: 40, backgroundColor: '#ffffff'}}>
              </View>
        }
      </View>
    );
  }

  return (
    <View style={[{flexDirection: 'row', height: '80%'}]}>
      {
        passwordState.map((value, i) => renderBox({type: passwordState[i], val: value, index: i}))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  
});

export default PinCode;