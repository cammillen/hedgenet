import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import CupertinoSwitch from "../components/CupertinoSwitch";
import { useFonts } from 'expo-font';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';

function Notifications(props) {

  return (
    <View style={styles.container}>
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
          <Text style={styles.text}>Security</Text>
        </View>
      </View>
      <View style={styles.loremIpsumRow}>
        <Text style={styles.loremIpsum}>Remember me</Text>
        <CupertinoSwitch style={styles.cupertinoSwitch}></CupertinoSwitch>
      </View>
      <View style={styles.group3}>
        <View style={styles.myStockGoesUpRow}>
          <Text style={styles.myStockGoesUp}>Face ID</Text>
          <CupertinoSwitch style={styles.cupertinoSwitch2}></CupertinoSwitch>
        </View>
      </View>
     
     
     
     
    
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  group: {
    width: 139,
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
    height: 23,
    flexDirection: "row",
    marginTop: 31,
    marginLeft: 18,
    marginRight: 16
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
  }
});

export default Notifications;
