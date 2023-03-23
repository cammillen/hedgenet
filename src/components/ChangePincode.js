import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text, Pressable, FlatList, Button } from "react-native";
import CupertinoSwitch from "../components/CupertinoSwitch";
import { useFonts } from 'expo-font';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { ScrollView } from 'react-native-gesture-handler';
import OldPinCode from './PinCode';
import NewPinCode from './PinCode';

function ChangePincode(props) {

  // state: 0: not set, 1: now setting, 2: setted
  const [oldPassword, setOldPassword] = useState([0, 1, 2, 3]);
  const [oldPasswordState, setOldPasswordState] = useState([2, 2, 2, 2]);

  const [newPassword, setNewPassword] = useState([0, 7, 2, 3]);
  const [newPasswordState, setNewPasswordState] = useState([2, 1, 0, 0]);

  const PinKey = (props) => {
    return (
      <TouchableOpacity style={[styles.pinKey, props.label.length == 0 && styles.pinKeyEmpty]}>
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
    return (
      <View style ={styles.panel}>
        <View style={styles.pinKeyboard}>
          <PinKey label='1' />
          <PinKey label='2'/>
          <PinKey label='3'/>
          <PinKey label='4'/>
          <PinKey label='5'/>
          <PinKey label='6'/>
          <PinKey label='7'/>
          <PinKey label='8'/>
          <PinKey label='9'/>
          <PinKey label='*'/>
          <PinKey label='0'/>
          <PinKey label='backspace'/>
        </View>
        <View style={{height: 8, backgroundColor: '#35383F', width: '40%', marginTop: 10, marginLeft: '30%', borderRadius: 5, marginBottom: 10}}>
        </View>
      </View>
    );
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

          <OldPinCode password = {oldPassword} passwordState = {oldPasswordState} />

          <View style={{height: 2, backgroundColor: '#096847'}}>
          </View>
        </View>
        <View style={styles.loremIpsumRow}>
          <Text style={{color: 'white', fontSize: 12}}>New Pincode</Text>
          <NewPinCode password = {newPassword} passwordState = {newPasswordState} />
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
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  box: {
    width: '20%',
    aspectRatio: 1,
    border: 1,
    borderColor: '#35383F',
    backgroundColor: '#1F222A'
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
  loremIpsum: {
    ...globalFonts.H5(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 2
  },
  cupertinoSwitch: {
    width: 45,
    height: 23,
    marginLeft: '62%'
  },
  loremIpsumRow: {
    height: 130,
    flexDirection: 'column',
    marginTop: 31,
    marginLeft: '8%',
    marginRight: '8%'
  },
  pincodebutton: {
    marginTop: 40,
    marginLeft: '8%',
    marginRight: '8%',
    height: 50,
    fontSize: 18,
    backgroundColor: '#35833F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#353835'
  },
  group3: {
    width: 341,
    height: 23,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 18
  },
  myStockGoesUp: {
    ...globalFonts.H5(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 2
  },
  cupertinoSwitch2: {
    width: 45,
    height: 23,
    marginLeft: '72%'
  },
  myStockGoesUpRow: {
    height: 23,
    flexDirection: "row",
    flex: 1
  },
  group4: {
    width: 341,
    height: 23,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 18
  },
  myStockIsDown: {
    ...globalFonts.H5(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 2
  },
  cupertinoSwitch3: {
    width: 45,
    height: 23,
    marginLeft: 180
  },
  myStockIsDownRow: {
    height: 23,
    flexDirection: "row",
    flex: 1
  },
  group5: {
    width: 341,
    height: 23,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 18
  },
  topMoversUpdates: {
    ...globalFonts.H5(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 2
  },
  cupertinoSwitch4: {
    width: 45,
    height: 23,
    marginLeft: 165
  },
  topMoversUpdatesRow: {
    height: 23,
    flexDirection: "row",
    flex: 1
  },
  group6: {
    width: 341,
    height: 23,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 18
  },
  leaderboardUpdates: {
    ...globalFonts.H5(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 2
  },
  cupertinoSwitch5: {
    width: 45,
    height: 23,
    marginLeft: 160
  },
  leaderboardUpdatesRow: {
    height: 23,
    flexDirection: "row",
    flex: 1
  },
  group7: {
    width: 341,
    height: 23,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 18
  },
  leaderboardUpdates2: {
    ...globalFonts.H5(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 2
  },
  cupertinoSwitch6: {
    width: 45,
    height: 23,
    marginLeft: 127
  },
  leaderboardUpdates2Row: {
    height: 23,
    flexDirection: "row",
    flex: 1
  },
  group8: {
    width: 341,
    height: 23,
    flexDirection: "row",
    marginTop: 20,
    alignSelf: "center"
  },
  text2: {
    ...globalFonts.H5(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 2
  },
  cupertinoSwitch7: {
    width: 45,
    height: 23,
    marginLeft: 160
  },
  text2Row: {
    height: 23,
    flexDirection: "row",
    flex: 1
  },
  materialSwitch: {
    width: 45,
    height: 23,
    marginTop: 12,
    marginLeft: 135
  },
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
  pinKeyEmpty: {
    backgroundColor: 'rgb(239, 239, 244)',
  },
  pinKeyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: '8%',
    marginRight: '8%',
    backgroundColor: '#1F222A'
  },
  panel: {
    backgroundColor: '#1F222A',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
  }
});

export default ChangePincode;
