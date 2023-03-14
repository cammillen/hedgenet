import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";


import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';

function WhatExpertSay(params) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.top1}>
        <Text style={styles.whatTheExpertsSay}>What the Experts Say</Text>
        <Text style={styles.whatTheExpertsSay2}>
          16 Wall Street Analyst Ratings
        </Text>
      </View>
      <View style={styles.group24}>
        <View style={styles.group18}>
          <View style={styles.group3Row}>
            <View style={styles.group3}>
              <View style={styles.ellipseStack}>
                <Svg viewBox="0 0 70.14 69.44" style={styles.ellipse}>
                  <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="rgba(18,209,142,1)"
                    cx={35}
                    cy={35}
                    rx={35}
                    ry={35}
                  ></Ellipse>
                </Svg>
                <Text style={styles.buy}>BUY</Text>
              </View>
            </View>
            <View style={styles.group17}>
              <View style={styles.group16}>
                <View style={styles.group6Row}>
                  <View style={styles.group6}>
                    <View style={styles.rect2}>
                      <View style={styles.rect3}></View>
                    </View>
                  </View>
                  <View style={styles.group13}>
                    <View style={styles.text2Row}>
                      <Text style={styles.text2}>{params.analystBuy}</Text>
                      <Text style={styles.buy4}>Buy</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.group15}>
                <View style={styles.group9Row}>
                  <View style={styles.group9}>
                    <View style={styles.rect4}>
                      <View style={styles.rect5}></View>
                    </View>
                  </View>
                  <View style={styles.group12}>
                    <View style={styles.text3Row}>
                      <Text style={styles.text3}>25%</Text>
                      <Text style={styles.hold}>Hold</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.group14}>
                <View style={styles.group10Row}>
                  <View style={styles.group10}>
                    <View style={styles.rect6Stack}>
                      <View style={styles.rect6}></View>
                      <View style={styles.rect7}></View>
                    </View>
                  </View>
                  <View style={styles.group11}>
                    <View style={styles.text4Row}>
                      <Text style={styles.text4}>5%</Text>
                      <Text style={styles.sell}>Sell</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.group23}>
          <View style={styles.group20Row}>
            <View style={styles.group20}>
              <View style={styles.image3Row}>
                <Image
                  source={require("../../assets/icons/target-price.png")}
                  resizeMode="contain"
                  style={styles.image3}
                ></Image>
                <View style={styles.group19}>
                  <Text style={styles.targetPrice}>Target Price</Text>
                  <Text style={styles.targetPrice2}>$117.25</Text>
                </View>
              </View>
            </View>
            <View style={styles.group21}>
              <View style={styles.image5Row}>
                <Image
                  source={require("../../assets/icons/ext-return.png")}
                  resizeMode="contain"
                  style={styles.image5}
                ></Image>
                <View style={styles.rect8}>
                  <Text style={styles.estReturn}>Est Return</Text>
                  <Text style={styles.text5}>+ 65.20%</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.group22}>
          <Text style={styles.risk}>Risk</Text>
          <Text style={styles.loremIpsum}>
            BLCB has 27% more risk than the market as{"\n"}a whole.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 24, 
    paddinRight: 24,
  },
  top1: {
    height: 59,
    marginTop: 5
  },
  whatTheExpertsSay: {
    ...globalFonts.H5(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginLeft: 15
  },
  whatTheExpertsSay2: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    marginTop: 9,
    marginLeft: 15
  },
  group24: {
    width: 334,
    height: 261,
    marginTop: 11,
    marginLeft: 13
  },
  group18: {
    width: 334,
    height: 69,
    flexDirection: "row"
  },
  group3: {
    width: 71,
    height: 69
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 70,
    height: 69,
    position: "absolute"
  },
  buy: {
    top: 22,
    left: 15,
    position: "absolute",
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 22
  },
  ellipseStack: {
    width: 70,
    height: 69
  },
  group17: {
    width: 252,
    height: 67,
    marginLeft: 11,
    marginTop: 1
  },
  group16: {
    width: 247,
    height: 17,
    flexDirection: "row"
  },
  group6: {
    width: 160,
    height: 9,
    marginTop: 4
  },
  rect2: {
    width: 160,
    height: 9,
    backgroundColor: "rgba(53,56,63,1)",
    borderRadius: 100
  },
  rect3: {
    width: 120,
    height: 9,
    backgroundColor: "rgba(18,209,142,1)",
    borderRadius: 100
  },
  group13: {
    width: 73,
    height: 17,
    flexDirection: "row",
    marginLeft: 14
  },
  text2: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(18,209,142,1)"
  },
  buy4: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(18,209,142,1)",
    marginLeft: 24
  },
  text2Row: {
    height: 17,
    flexDirection: "row",
    flex: 1
  },
  group6Row: {
    height: 17,
    flexDirection: "row",
    flex: 1
  },
  group15: {
    width: 252,
    height: 17,
    flexDirection: "row",
    marginTop: 8
  },
  group9: {
    width: 160,
    height: 9,
    marginTop: 4
  },
  rect4: {
    width: 160,
    height: 9,
    backgroundColor: "rgba(53,56,63,1)",
    borderRadius: 100
  },
  rect5: {
    width: 41,
    height: 9,
    backgroundColor: "rgba(255,193,7,1)",
    borderRadius: 100
  },
  group12: {
    width: 78,
    height: 17,
    flexDirection: "row",
    marginLeft: 14
  },
  text3: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,193,7,1)"
  },
  hold: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,193,7,1)",
    marginLeft: 24
  },
  text3Row: {
    height: 17,
    flexDirection: "row",
    flex: 1
  },
  group9Row: {
    height: 17,
    flexDirection: "row",
    flex: 1
  },
  group14: {
    width: 246,
    height: 17,
    flexDirection: "row",
    marginTop: 8
  },
  group10: {
    width: 160,
    height: 9,
    marginTop: 4
  },
  rect6: {
    top: 0,
    left: 1,
    width: 160,
    height: 9,
    position: "absolute",
    backgroundColor: "rgba(53,56,63,1)",
    borderRadius: 100
  },
  rect7: {
    top: 0,
    left: 0,
    width: 20,
    height: 9,
    position: "absolute",
    backgroundColor: "rgba(247,85,85,1)",
    borderRadius: 100
  },
  rect6Stack: {
    width: 161,
    height: 9,
    marginLeft: -1
  },
  group11: {
    width: 72,
    height: 17,
    flexDirection: "row",
    marginLeft: 15
  },
  text4: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(247,85,85,1)"
  },
  sell: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(247,85,85,1)",
    marginLeft: 32
  },
  text4Row: {
    height: 17,
    flexDirection: "row",
    flex: 1
  },
  group10Row: {
    height: 17,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  },
  group3Row: {
    height: 69,
    flexDirection: "row",
    flex: 1
  },
  group23: {
    width: 334,
    height: 60,
    flexDirection: "row",
    marginTop: 31
  },
  group20: {
    width: 149,
    height: 60,
    flexDirection: "row"
  },
  image3: {
    width: 60,
    height: 60
  },
  group19: {
    width: 200,
    height: 45,
    marginLeft: 14,
    marginTop: 8
  },
  targetPrice: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)"
  },
  targetPrice2: {
    ...globalFonts.H5(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 6
  },
  image3Row: {
    height: 60,
    flexDirection: "row",
    flex: 1
  },
  group21: {
    width: 149,
    height: 60,
    flexDirection: "row",
    marginLeft: 37,
    marginTop: 0
  },
  image5: {
    width: 60,
    height: 60
  },
  rect8: {
    width: 75,
    height: 45,
    marginLeft: 14,
    marginTop: 8
  },
  estReturn: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)"
  },
  text5: {
    ...globalFonts.H5(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 6
  },
  image5Row: {
    height: 60,
    flexDirection: "row",
    flex: 1
  },
  group20Row: {
    height: 60,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  },
  group22: {
    width: 303,
    height: 71,
    marginTop: 30
  },
  risk: {
    ...globalFonts.H5(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  loremIpsum: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 9
  }
});

export default WhatExpertSay;
