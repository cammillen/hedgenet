import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Svg, { Ellipse } from "react-native-svg";


import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';

function EarningShare(props) {
  return (
    <View style={styles.container}>
      <View style={styles.top1}>
        <Text style={styles.earningsPerShare}>Earnings per share</Text>
      </View>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.group13}>
            <View style={styles.group9Row}>
              <View style={styles.group9}>
                <View style={styles.group4}>
                  <View style={styles.rect}>
                    <View style={styles.ellipse3Row}>
                      <Svg viewBox="0 0 15 15" style={styles.ellipse3}>
                        <Ellipse
                          strokeWidth={0}
                          fill="rgba(18,209,142,1)"
                          cx={7}
                          cy={7}
                          rx={7}
                          ry={7}
                        ></Ellipse>
                      </Svg>
                      <Text style={styles.text2}>- $0.24</Text>
                    </View>
                  </View>
                  <View style={styles.rect2}>
                    <View style={styles.ellipse4Row}>
                      <Svg viewBox="0 0 15 15" style={styles.ellipse4}>
                        <Ellipse
                          strokeWidth={0}
                          fill="rgba(160,237,210,1)"
                          cx={7}
                          cy={7}
                          rx={7}
                          ry={7}
                        ></Ellipse>
                      </Svg>
                      <Text style={styles.text3}>- $0.48</Text>
                    </View>
                  </View>
                </View>
                <Text style={styles.q3Fy212}>Q3{"\n"}FY21</Text>
              </View>
              <View style={styles.group10}>
                <View style={styles.group5}>
                  <View style={styles.rect3}>
                    <View style={styles.ellipse5Row}>
                      <Svg viewBox="0 0 15 15" style={styles.ellipse5}>
                        <Ellipse
                          strokeWidth={0}
                          fill="rgba(18,209,142,1)"
                          cx={7}
                          cy={7}
                          rx={7}
                          ry={7}
                        ></Ellipse>
                      </Svg>
                      <Text style={styles.text4}>+ $0.24</Text>
                    </View>
                  </View>
                  <View style={styles.rect4}>
                    <View style={styles.ellipse6Row}>
                      <Svg viewBox="0 0 15 15" style={styles.ellipse6}>
                        <Ellipse
                          strokeWidth={0}
                          fill="rgba(160,237,210,1)"
                          cx={7}
                          cy={7}
                          rx={7}
                          ry={7}
                        ></Ellipse>
                      </Svg>
                      <Text style={styles.text5}>- $0.20</Text>
                    </View>
                  </View>
                </View>
                <Text style={styles.q3Fy213}>Q3{"\n"}FY21</Text>
              </View>
              <View style={styles.group12}>
                <View style={styles.group7}>
                  <View style={styles.rect7}>
                    <View style={styles.ellipse9Row}>
                      <Svg viewBox="0 0 15 15" style={styles.ellipse9}>
                        <Ellipse
                          strokeWidth={0}
                          fill="rgba(255,185,185,1)"
                          cx={7}
                          cy={7}
                          rx={7}
                          ry={7}
                        ></Ellipse>
                      </Svg>
                      <Text style={styles.text8}>- $0.85</Text>
                    </View>
                  </View>
                  <View style={styles.rect8}>
                    <View style={styles.ellipse10Row}>
                      <Svg viewBox="0 0 15 15" style={styles.ellipse10}>
                        <Ellipse
                          strokeWidth={0}
                          fill="rgba(247,85,85,1)"
                          cx={7}
                          cy={7}
                          rx={7}
                          ry={7}
                        ></Ellipse>
                      </Svg>
                      <Text style={styles.text9}>- $1.05</Text>
                    </View>
                  </View>
                </View>
                <Text style={styles.q3Fy215}>Q3{"\n"}FY21</Text>
              </View>
              <View style={styles.rect9}>
                <View style={styles.group6}>
                  <View style={styles.rect5}>
                    <View style={styles.ellipse7Row}>
                      <Svg viewBox="0 0 15 15" style={styles.ellipse7}>
                        <Ellipse
                          strokeWidth={0}
                          fill="rgba(255,185,185,1)"
                          cx={7}
                          cy={7}
                          rx={7}
                          ry={7}
                        ></Ellipse>
                      </Svg>
                      <Text style={styles.text6}>- $0.65</Text>
                    </View>
                  </View>
                  <View style={styles.rect6}>
                    <View style={styles.ellipse8Row}>
                      <Svg viewBox="0 0 15 15" style={styles.ellipse8}>
                        <Ellipse
                          strokeWidth={0}
                          fill="rgba(247,85,85,1)"
                          cx={7}
                          cy={7}
                          rx={7}
                          ry={7}
                        ></Ellipse>
                      </Svg>
                      <Text style={styles.text7}>- $0.90</Text>
                    </View>
                  </View>
                </View>
                <Text style={styles.q3Fy214}>Q3{"\n"}FY21</Text>
              </View>
              <View style={styles.group8}>
                <View style={styles.group3}>
                  <View style={styles.group2}>
                    <View style={styles.ellipseRow}>
                      <Svg viewBox="0 0 15 15" style={styles.ellipse}>
                        <Ellipse
                          strokeWidth={0}
                          fill="rgba(255,185,185,1)"
                          cx={7}
                          cy={7}
                          rx={7}
                          ry={7}
                        ></Ellipse>
                      </Svg>
                      <Text style={styles.loremIpsum}>- $0.22</Text>
                    </View>
                  </View>
                  <View style={styles.group}>
                    <View style={styles.ellipse2Row}>
                      <Svg viewBox="0 0 15 15" style={styles.ellipse2}>
                        <Ellipse
                          strokeWidth={0}
                          fill="rgba(247,85,85,1)"
                          cx={7}
                          cy={7}
                          rx={7}
                          ry={7}
                        ></Ellipse>
                      </Svg>
                      <Text style={styles.text}>- $0.48</Text>
                    </View>
                  </View>
                </View>
                <Text style={styles.q3Fy21}>Q3{"\n"}FY21</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.group14}>
        <Text style={styles.loremIpsum2}>
          The company reported results on Dec 25, 2022 and missed market
          expectations.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 24,
  },
  top1: {
    height: 27,
    marginTop: 55
  },
  earningsPerShare: {
    ...globalFonts.H5(globalColors.others.white.color),    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginLeft: 15
  },
  scrollArea: {
    width: 400,
    height: 177,
    marginTop: 0,
    marginLeft: 13
  },
  scrollArea_contentContainerStyle: {
    width: 487,
    height: 177,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  group13: {
    width: 487,
    height: 127,
    paddingTop: 0,
    margin: 0,
    marginTop: 30,
    marginBottom: 48,
    flexDirection: "row"
  },
  group9: {
    width: 66,
    height: 115
  },
  group4: {
    width: 66,
    height: 42
  },
  rect: {
    width: 66,
    height: 17,
    flexDirection: "row"
  },
  ellipse3: {
    width: 15,
    height: 15,
    marginTop: 1
  },
  text2: {
    fontFamily: "urbanist-600",
    color: "rgba(255,255,255,1)",
    marginLeft: 6
  },
  ellipse3Row: {
    height: 17,
    flexDirection: "row",
    flex: 1
  },
  rect2: {
    width: 66,
    height: 17,
    flexDirection: "row",
    marginTop: 8
  },
  ellipse4: {
    width: 15,
    height: 15,
    marginTop: 1
  },
  text3: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    marginLeft: 6
  },
  ellipse4Row: {
    height: 17,
    flexDirection: "row",
    flex: 1
  },
  q3Fy212: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 35
  },
  group10: {
    width: 66,
    height: 115,
    marginLeft: 23
  },
  group5: {
    width: 66,
    height: 42,
    marginTop: -28
  },
  rect3: {
    width: 66,
    height: 17,
    flexDirection: "row",
    marginTop: 28
  },
  ellipse5: {
    width: 15,
    height: 15,
    marginTop: 1
  },
  text4: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    marginLeft: 6
  },
  ellipse5Row: {
    height: 17,
    flexDirection: "row",
    flex: 1,
    marginRight: -2
  },
  rect4: {
    width: 66,
    height: 17,
    flexDirection: "row",
    marginTop: 8
  },
  ellipse6: {
    width: 15,
    height: 15,
    marginTop: 1
  },
  text5: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    marginLeft: 6
  },
  ellipse6Row: {
    height: 17,
    flexDirection: "row",
    flex: 1
  },
  q3Fy213: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 63
  },
  group12: {
    width: 66,
    height: 115,
    marginLeft: 23
  },
  group7: {
    width: 66,
    height: 42
  },
  rect7: {
    width: 66,
    height: 17,
    flexDirection: "row"
  },
  ellipse9: {
    width: 15,
    height: 15,
    marginTop: 1
  },
  text8: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    marginLeft: 6
  },
  ellipse9Row: {
    height: 17,
    flexDirection: "row",
    flex: 1
  },
  rect8: {
    width: 66,
    height: 17,
    flexDirection: "row",
    marginTop: 8
  },
  ellipse10: {
    width: 15,
    height: 15,
    marginTop: 1
  },
  text9: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    marginLeft: 6
  },
  ellipse10Row: {
    height: 17,
    flexDirection: "row",
    flex: 1,
    marginRight: 3
  },
  q3Fy215: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 35
  },
  rect9: {
    width: 66,
    height: 115,
    marginLeft: 23
  },
  group6: {
    width: 66,
    height: 42
  },
  rect5: {
    width: 66,
    height: 17,
    flexDirection: "row"
  },
  ellipse7: {
    width: 15,
    height: 15,
    marginTop: 1
  },
  text6: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    marginLeft: 6
  },
  ellipse7Row: {
    height: 17,
    flexDirection: "row",
    flex: 1
  },
  rect6: {
    width: 66,
    height: 17,
    flexDirection: "row",
    marginTop: 8
  },
  ellipse8: {
    width: 15,
    height: 15,
    marginTop: 1
  },
  text7: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    marginLeft: 6
  },
  ellipse8Row: {
    height: 17,
    flexDirection: "row",
    flex: 1
  },
  q3Fy214: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 35
  },
  group8: {
    width: 66,
    height: 115,
    marginLeft: 23
  },
  group3: {
    width: 66,
    height: 42
  },
  group2: {
    width: 66,
    height: 17,
    flexDirection: "row"
  },
  ellipse: {
    width: 15,
    height: 15,
    marginTop: 1
  },
  loremIpsum: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    marginLeft: 6
  },
  ellipseRow: {
    height: 17,
    flexDirection: "row",
    flex: 1
  },
  group: {
    width: 66,
    height: 17,
    flexDirection: "row",
    marginTop: 8
  },
  ellipse2: {
    width: 15,
    height: 15,
    marginTop: 1
  },
  text: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),    color: "rgba(255,255,255,1)",
    fontSize: 14,
    marginLeft: 6
  },
  ellipse2Row: {
    height: 17,
    flexDirection: "row",
    flex: 1
  },
  q3Fy21: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 35
  },
  group9Row: {
    height: 115,
    flexDirection: "row",
    flex: 1,
    marginRight: 65
  },
  group14: {
    width: 400,
    height: 85,
    marginTop: 7,
    marginLeft: 13
  },
  loremIpsum2: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),    color: "rgba(255,255,255,1)",
    fontSize: 16,
    width: 400
  }
});

export default EarningShare;
