import React, { Component } from "react";
import { useNavigation } from '@react-navigation/native';
import { Link } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView
} from "react-native";


import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
function NewsSectionDetails(props) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.button}
        >
          <Image
            source={require("../../assets/icons/ArrowLeft_Green.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.news}>News</Text>
      </View>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.group9}>
            <View style={styles.rect1}>
              <View style={styles.rect2}>
                <View style={styles.forbes1Row}>
                  <Text style={styles.forbes1}>Forbes</Text>
                  <Text style={styles.text1}>1 day ago</Text>
                </View>
              </View>
              <Text style={styles.text2}>
                NASDAQ Roundup: Alphabet Earnings, Microsoft Earnings, Spotify
                Earnings, And ...
              </Text>
              <View style={styles.rect3}></View>
            </View>
            <View style={styles.rect4}>
              <View style={styles.rect5}>
                <View style={styles.seekingAlpha1Row}>
                  <Text style={styles.seekingAlpha1}>Seeking Alpha</Text>
                  <Text style={styles.text3}>2 days ago</Text>
                </View>
              </View>
              <View style={styles.ownTheTollBooths1Stack}>
                <Text style={styles.ownTheTollBooths1}>
                  Own The Toll Booths
                </Text>
                <View style={styles.rect6}></View>
              </View>
            </View>
            <View style={styles.rect7}>
              <View style={styles.rect8}>
                <View style={styles.theMotleyFool1Row}>
                  <Text style={styles.theMotleyFool1}>The Motley Fool</Text>
                  <Text style={styles.text4}>2 days ago</Text>
                </View>
              </View>
              <Text style={styles.text5}>
                Cathie Wood Has Abandoned Spotify --Should You Follow Her Lead?
              </Text>
              <View style={styles.rect9}></View>
            </View>
            <View style={styles.group3}>
              <View style={styles.rect12}>
                <View style={styles.theMotleyFool3Row}>
                  <Text style={styles.theMotleyFool3}>The Motley Fool</Text>
                  <Text style={styles.text8}>2 days ago</Text>
                </View>
              </View>
              <Text style={styles.text9}>
                Cathie Wood Has Abandoned Spotify --Should You Follow Her Lead?
              </Text>
              <View style={styles.rect13}></View>
            </View>
            <View style={styles.group4}>
              <View style={styles.rect14}>
                <View style={styles.theMotleyFool4Row}>
                  <Text style={styles.theMotleyFool4}>The Motley Fool</Text>
                  <Text style={styles.text10}>2 days ago</Text>
                </View>
              </View>
              <Text style={styles.text11}>
                Cathie Wood Has Abandoned Spotify --Should You Follow Her Lead?
              </Text>
              <View style={styles.rect15}></View>
            </View>
            <View style={styles.group5}>
              <View style={styles.rect16}>
                <View style={styles.theMotleyFool5Row}>
                  <Text style={styles.theMotleyFool5}>The Motley Fool</Text>
                  <Text style={styles.text12}>2 days ago</Text>
                </View>
              </View>
              <Text style={styles.text13}>
                Cathie Wood Has Abandoned Spotify --Should You Follow Her Lead?
              </Text>
              <View style={styles.rect17}></View>
            </View>
            <View style={styles.group6}>
              <View style={styles.rect18}>
                <View style={styles.theMotleyFool6Row}>
                  <Text style={styles.theMotleyFool6}>The Motley Fool</Text>
                  <Text style={styles.text14}>2 days ago</Text>
                </View>
              </View>
              <Text style={styles.text15}>
                Cathie Wood Has Abandoned Spotify --Should You Follow Her Lead?
              </Text>
              <View style={styles.rect19}></View>
            </View>
            <View style={styles.group7}>
              <View style={styles.rect20}>
                <View style={styles.theMotleyFool7Row}>
                  <Text style={styles.theMotleyFool7}>The Motley Fool</Text>
                  <Text style={styles.text16}>2 days ago</Text>
                </View>
              </View>
              <Text style={styles.text17}>
                Cathie Wood Has Abandoned Spotify --Should You Follow Her Lead?
              </Text>
              <View style={styles.rect21}></View>
            </View>
            <View style={styles.group8}>
              <View style={styles.rect22}>
                <View style={styles.theMotleyFool8Row}>
                  <Text style={styles.theMotleyFool8}>The Motley Fool</Text>
                  <Text style={styles.text18}>2 days ago</Text>
                </View>
              </View>
              <Text style={styles.text19}>
                Cathie Wood Has Abandoned Spotify --Should You Follow Her Lead?
              </Text>
              <View style={styles.rect23}></View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  button: {
    width: 14,
    height: 14,
    marginTop: 5
  },
  image1: {
    width: 14,
    height: 14,
    transform: [
      {
        rotate: "0deg"
      }
    ]
  },
  news: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginLeft: 13
  },
  buttonRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 41,
    marginLeft: 17,
    marginRight: 282
  },
  scrollArea: {
    width: 338,
    height: 544,
    marginTop: 31,
    marginLeft: 17
  },
  scrollArea_contentContainerStyle: {
    height: 837,
    width: 338
  },
  group9: {
    width: 338,
    height: 837,
    justifyContent: "space-between"
  },
  rect1: {
    width: 338,
    height: 85
  },
  rect2: {
    width: 336,
    height: 14,
    flexDirection: "row",
    marginLeft: 2
  },
  forbes1: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 12
  },
  text1: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(224,224,224,1)",
    fontSize: 12,
    textAlign: "right",
    marginLeft: 251
  },
  forbes1Row: {
    height: 14,
    flexDirection: "row",
    flex: 1
  },
  text2: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    height: 60,
    width: 336,
    fontSize: 17,
    marginTop: 10,
    marginLeft: 2
  },
  rect3: {
    width: 336,
    height: 1,
    backgroundColor: "rgba(53,56,63,1)"
  },
  rect4: {
    width: 338,
    height: 64
  },
  rect5: {
    width: 336,
    height: 14,
    flexDirection: "row",
    marginLeft: 2
  },
  seekingAlpha1: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 12
  },
  text3: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(224,224,224,1)",
    fontSize: 12,
    textAlign: "right",
    marginLeft: 202
  },
  seekingAlpha1Row: {
    height: 14,
    flexDirection: "row",
    flex: 1
  },
  ownTheTollBooths1: {
    top: 0,
    left: 2,
    position: "absolute",
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    height: 60,
    width: 336,
    fontSize: 17
  },
  rect6: {
    top: 35,
    width: 336,
    height: 1,
    position: "absolute",
    backgroundColor: "rgba(53,56,63,1)",
    left: 0
  },
  ownTheTollBooths1Stack: {
    width: 338,
    height: 60,
    marginTop: 10
  },
  rect7: {
    width: 338,
    height: 85
  },
  rect8: {
    width: 336,
    height: 14,
    flexDirection: "row",
    marginLeft: 2
  },
  theMotleyFool1: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 12
  },
  text4: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(224,224,224,1)",
    fontSize: 12,
    textAlign: "right",
    marginLeft: 195
  },
  theMotleyFool1Row: {
    height: 14,
    flexDirection: "row",
    flex: 1
  },
  text5: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    height: 60,
    width: 336,
    fontSize: 17,
    marginTop: 10,
    marginLeft: 2
  },
  rect9: {
    width: 336,
    height: 1,
    backgroundColor: "rgba(53,56,63,1)"
  },
  group3: {
    width: 338,
    height: 85
  },
  rect12: {
    width: 336,
    height: 14,
    flexDirection: "row",
    marginLeft: 2
  },
  theMotleyFool3: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 12
  },
  text8: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(224,224,224,1)",
    fontSize: 12,
    textAlign: "right",
    marginLeft: 195
  },
  theMotleyFool3Row: {
    height: 14,
    flexDirection: "row",
    flex: 1
  },
  text9: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    height: 60,
    width: 336,
    fontSize: 17,
    marginTop: 10,
    marginLeft: 2
  },
  rect13: {
    width: 336,
    height: 1,
    backgroundColor: "rgba(53,56,63,1)"
  },
  group4: {
    width: 338,
    height: 85
  },
  rect14: {
    width: 336,
    height: 14,
    flexDirection: "row",
    marginLeft: 2
  },
  theMotleyFool4: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 12
  },
  text10: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(224,224,224,1)",
    fontSize: 12,
    textAlign: "right",
    marginLeft: 195
  },
  theMotleyFool4Row: {
    height: 14,
    flexDirection: "row",
    flex: 1
  },
  text11: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    height: 60,
    width: 336,
    fontSize: 17,
    marginTop: 10,
    marginLeft: 2
  },
  rect15: {
    width: 336,
    height: 1,
    backgroundColor: "rgba(53,56,63,1)"
  },
  group5: {
    width: 338,
    height: 85
  },
  rect16: {
    width: 336,
    height: 14,
    flexDirection: "row",
    marginLeft: 2
  },
  theMotleyFool5: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 12
  },
  text12: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(224,224,224,1)",
    fontSize: 12,
    textAlign: "right",
    marginLeft: 195
  },
  theMotleyFool5Row: {
    height: 14,
    flexDirection: "row",
    flex: 1
  },
  text13: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    height: 60,
    width: 336,
    fontSize: 17,
    marginTop: 10,
    marginLeft: 2
  },
  rect17: {
    width: 336,
    height: 1,
    backgroundColor: "rgba(53,56,63,1)"
  },
  group6: {
    width: 338,
    height: 85
  },
  rect18: {
    width: 336,
    height: 14,
    flexDirection: "row",
    marginLeft: 2
  },
  theMotleyFool6: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 12
  },
  text14: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(224,224,224,1)",
    fontSize: 12,
    textAlign: "right",
    marginLeft: 195
  },
  theMotleyFool6Row: {
    height: 14,
    flexDirection: "row",
    flex: 1
  },
  text15: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    height: 60,
    width: 336,
    fontSize: 17,
    marginTop: 10,
    marginLeft: 2
  },
  rect19: {
    width: 336,
    height: 1,
    backgroundColor: "rgba(53,56,63,1)"
  },
  group7: {
    width: 338,
    height: 85
  },
  rect20: {
    width: 336,
    height: 14,
    flexDirection: "row",
    marginLeft: 2
  },
  theMotleyFool7: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 12
  },
  text16: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(224,224,224,1)",
    fontSize: 12,
    textAlign: "right",
    marginLeft: 195
  },
  theMotleyFool7Row: {
    height: 14,
    flexDirection: "row",
    flex: 1
  },
  text17: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    height: 60,
    width: 336,
    fontSize: 17,
    marginTop: 10,
    marginLeft: 2
  },
  rect21: {
    width: 336,
    height: 1,
    backgroundColor: "rgba(53,56,63,1)"
  },
  group8: {
    width: 338,
    height: 85
  },
  rect22: {
    width: 336,
    height: 14,
    flexDirection: "row",
    marginLeft: 2
  },
  theMotleyFool8: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 12
  },
  text18: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(224,224,224,1)",
    fontSize: 12,
    textAlign: "right",
    marginLeft: 195
  },
  theMotleyFool8Row: {
    height: 14,
    flexDirection: "row",
    flex: 1
  },
  text19: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    height: 60,
    width: 336,
    fontSize: 17,
    marginTop: 10,
    marginLeft: 2
  },
  rect23: {
    width: 336,
    height: 1,
    backgroundColor: "rgba(53,56,63,1)"
  }
});

export default NewsSectionDetails;
