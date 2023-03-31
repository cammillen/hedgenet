import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text, Pressable, FlatList, Button } from "react-native";
import CupertinoSwitch from "../components/CupertinoSwitch";
import { useFonts } from 'expo-font';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { ScrollView } from 'react-native-gesture-handler';
import PinCode from './PinCode';

function ChangePincode(props) {

  // state: 0: not set, 1: now setting, 2: setted
  const [oldPassword, setOldPassword] = useState([0, 0, 0, 0]);
  const [newPassword, setNewPassword] = useState([0, 0, 0, 0]);

  const [passwordIndex, setPasswordIndex] = useState(-1);

  const PinKey = (props) => {
    return (
      <TouchableOpacity style={[styles.pinKey]} onPress={props.onPress}>
        {
          props.label === 'backspace' ? 
          <Image 
            source = {require('../assets/icons/backspace.png')}
            style = {{
              height: 20,
              resizeMode: 'contain'
            }}
          />
          :
          <Text style={
          {
            fontSize: 20, 
            color: 'white',
            backgroundColor: 'none'
          }}>
            {props.label}
          </Text>
        }
      </TouchableOpacity>
    );
  }

  const PinKeyboard = () => {
    const label = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', 'backspace']
    return (
      <View style ={styles.pinKeyboardPanel}>
        <View style={styles.pinKeyboard}>
          {
            label.map((value, index) => <PinKey key={index} label={value} onPress={() => onPressKey(value)} />)
          }
        </View>
        <View style={{height: 8, backgroundColor: '#35383F', width: '40%', marginTop: 10, marginLeft: '30%', borderRadius: 5, marginBottom: 10}}>
        </View>
      </View>
    );
  }

  const onPressKey = (value) => {
    if(value === 'backspace') setPasswordIndex((passwordIndex - 1) < -1 ? -1 : passwordIndex - 1);
    if(value >= '0' && value <= '9' && passwordIndex < 7) {
      if(passwordIndex < 3) oldPassword[passwordIndex + 1] = value - '0';
      else newPassword[passwordIndex - 4  + 1] = value - '0';
      setPasswordIndex(passwordIndex + 1);
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} alwaysBounceVertical={true}>
        <View style={styles.group}>
          <View style={styles.button1Row}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={styles.button1}
            >
              <Image
                source={require("../assets/icons/ArrowRightGreen.png")}
                resizeMode="contain"
                style={styles.image1}
              ></Image>
            </TouchableOpacity>
            <Text style={styles.text}>Change Pincode</Text>
          </View>
        </View>
        <View style={styles.loremIpsumRow}>
          <Text style={{color: 'white', fontSize: 12}}>Old Pincode</Text>
          <PinCode password = {oldPassword} passwordIndex = {passwordIndex} />
          <View style={{height: 2, backgroundColor: '#096847'}}>
          </View>
        </View>
        <View style={styles.loremIpsumRow}>
          <Text style={{color: 'white', fontSize: 12}}>New Pincode</Text>
          <PinCode password = {newPassword} passwordIndex = {passwordIndex-4} />
          <View style={{height: 2, backgroundColor: '#096847'}}>
          </View>
        </View>
        <TouchableOpacity style={{marginLeft: '8%', marginRight: '8%', backgroundColor: '#12D18E', alignItems: 'center', height: 50, justifyContent: 'center', borderRadius: 50, marginTop: 20}}>
          <Text style={styles.text}>Change Password</Text>
        </TouchableOpacity>
      </ScrollView>
      {
        PinKeyboard()
      }
    </View>
  );
}

const styles = StyleSheet.create({

  // styles for arrow button and title
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  group: {
    width: '80%',
    height: 24,
    flexDirection: "row",
    marginTop: 41,
    marginLeft: 17
  },
  button1: {
    width: 14,
    height: 14,
    marginTop: 5
  },
  image1: {
    width: 14,
    height: 14,
    transform: [
      {
        rotate: "180.00deg"
      }
    ]
  },
  text: {
    ...globalFonts.H5(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginLeft: 13
  },
  button1Row: {
    height: 24,
    flexDirection: "row",
    flex: 1
  },

  // styles for board
  loremIpsum: {
    ...globalFonts.H5(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 2
  },
  loremIpsumRow: {
    flexDirection: 'column',
    marginTop: 31,
    marginLeft: '8%',
    marginRight: '8%',
    width: '84%',
    aspectRatio: 3.2,
  },

  // styles for pinKeyboard
  pinKey: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '33%',
    height: 80,
    justifyContent: 'center', 
    borderWidth: 0,
    flexGrow: 1,
    paddingTop: 8,
  },

  pinKeyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: '8%',
    marginRight: '8%',
    backgroundColor: '#1F222A'
  },
  
  pinKeyboardPanel: {
    backgroundColor: '#1F222A',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
  }
});

export default ChangePincode;
