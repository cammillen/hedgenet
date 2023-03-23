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
          <Text style={styles.text}>Notifications</Text>
        </View>
      </View>
      <View style={styles.loremIpsumRow}>
        <Text style={styles.loremIpsum}>Daily Fund Performance Review</Text>
        <CupertinoSwitch style={styles.cupertinoSwitch}></CupertinoSwitch>
      </View>
      <View style={styles.loremIpsumRow}>
        <Text style={styles.loremIpsum}>My Stock Goes up</Text>
        <CupertinoSwitch style={styles.cupertinoSwitch}></CupertinoSwitch>
      </View>
      <View style={styles.loremIpsumRow}>
        <Text style={styles.loremIpsum}>My Stock is Down</Text>
        <CupertinoSwitch style={styles.cupertinoSwitch}></CupertinoSwitch>
      </View>
      <View style={styles.loremIpsumRow}>
        <Text style={styles.loremIpsum}>Top Movers Updates</Text>
        <CupertinoSwitch style={styles.cupertinoSwitch}></CupertinoSwitch>
      </View>
      <View style={styles.loremIpsumRow}>
        <Text style={styles.loremIpsum}>Leaderboard Updates</Text>
        <CupertinoSwitch style={styles.cupertinoSwitch}></CupertinoSwitch>
      </View>
      <View style={styles.loremIpsumRow}>
        <Text style={styles.loremIpsum}>Hedgenet Announcements</Text>
        <CupertinoSwitch style={styles.cupertinoSwitch}></CupertinoSwitch>
      </View>
      <View style={styles.loremIpsumRow}>
        <Text style={styles.loremIpsum}>New Services Available</Text>
        <CupertinoSwitch style={styles.cupertinoSwitch}></CupertinoSwitch>
      </View>
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

  // styles for board
  loremIpsumRow: {
    height: 23,
    flexDirection: 'row',
    marginTop: 25,
    marginLeft: 40,
    marginRight: 40
  },
  loremIpsum: {
    ...globalFonts.H5(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    flex: 1,
    alignItems: 'flex-start'
  },
  cupertinoSwitch: {
    width: 45,
    height: 23,
    flex: 1,
    alignItems: 'flex-end'
  },
});

export default Notifications;
