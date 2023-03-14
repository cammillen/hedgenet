import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';

function Untitled(props) {
  return (
    <View style={styles.container}>
    
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.group3}>
            <View style={styles.market}>
              <View style={styles.rect}>
                <View style={styles.image10Row}>
                  <Image
                    source={require("../../assets/icons/market-cap.png")}
                    resizeMode="contain"
                    style={styles.image10}
                  ></Image>
                  <Text style={styles.marketCap}>Market Cap</Text>
                </View>
                <Text style={styles.text3}>$12.75B</Text>
              </View>
            </View>
            <View style={styles.price}>
              <View style={styles.rect2Stack}>
                <View style={styles.rect2}>
                  <Text style={styles.priceEarningsRatio}>
                    Price-Earnings Ratio
                  </Text>
                  <Text style={styles.nA}>N/A</Text>
                </View>
                <Image
                  source={require("../../assets/icons/ratio.png")}
                  resizeMode="contain"
                  style={styles.image11}
                ></Image>
              </View>
            </View>
            <View style={styles.divident}>
              <View style={styles.rect3}>
                <View style={styles.image12Row}>
                  <Image
                    source={require("../../assets/icons/divident.png")}
                    resizeMode="contain"
                    style={styles.image12}
                  ></Image>
                  <Text style={styles.dividendYield}>Dividend Yield</Text>
                </View>
                <Text style={styles.nA2}>N/A</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <Text style={styles.showMore}>Show More</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  top: {
    height: 24,
    flexDirection: "row",
    marginTop: 30
  },
  blcbMarketStats: {
    ...globalFonts.H5(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  image: {
    width: 24,
    height: 24,
    marginLeft: 138
  },
  blcbMarketStatsRow: {
    height: 24,
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
    marginLeft: 15
  },
  scrollArea: {
    height: 223,
    marginTop: 0
  },
  scrollArea_contentContainerStyle: {
    height: 223
  },
  group3: {
    width: 355,
    height: 207
  },
  market: {
    width: 355,
    height: 60
  },
  rect: {
    width: 261,
    height: 19,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 74
  },
  image10: {
    width: 60,
    height: 60
  },
  marketCap: {
    ...globalFonts.H6(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 14,
    marginTop: 20
  },
  image10Row: {
    height: 60,
    flexDirection: "row",
    marginLeft: -59,
    marginTop: -20
  },
  text3: {
    ...globalFonts.H6(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    textAlign: "right",
    flex: 1,
    marginRight: -13,
    marginLeft: 111
  },
  price: {
    width: 355,
    height: 60,
    marginTop: 14,
    alignSelf: "center"
  },
  rect2: {
    top: 21,
    left: 59,
    width: 261,
    height: 19,
    position: "absolute",
    flexDirection: "row"
  },
  priceEarningsRatio: {
    ...globalFonts.H6(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 15
  },
  nA: {
    ...globalFonts.H6(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    textAlign: "right",
    flex: 1,
    marginRight: -11,
    marginLeft: 50
  },
  image11: {
    top: 0,
    left: 0,
    width: 60,
    height: 60,
    position: "absolute"
  },
  rect2Stack: {
    width: 320,
    height: 60,
    marginLeft: 15
  },
  divident: {
    width: 355,
    height: 60,
    marginTop: 13
  },
  rect3: {
    width: 261,
    height: 19,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 74
  },
  image12: {
    width: 60,
    height: 60
  },
  dividendYield: {
    ...globalFonts.H6(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 14,
    marginTop: 20
  },
  image12Row: {
    height: 60,
    flexDirection: "row",
    marginLeft: -59,
    marginTop: -20
  },
  nA2: {
    ...globalFonts.H6(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    textAlign: "right",
    flex: 1,
    marginRight: -13,
    marginLeft: 93
  },
  showMore: {
    ...globalFonts.H6(globalColors.others.white.color),
    color: "rgba(18,209,142,1)",
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center', // <-- the magic
  }
});

export default Untitled;
