import React, { Component } from "react";
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { Link, useNavigation } from "@react-navigation/native";
import TopMenuBar from '../../components/TopMenuBar.js';

import BottomMenuBar from '../../components/BottomMenuBar.js';

function MarketStatsDetails(props) {
 const navigation = useNavigation();
 const Screen = 'StockPage';
  return (
    <View style={styles.container}>
      <TopMenuBar screen={Screen} />
      <View style={styles.group}>
        <View style={styles.image1Row}>
        <TouchableOpacity onPress={() => navigation.goBack(null)}>
        <Image
            source={require("../../assets/icons/ArrowRightGreen.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>


             
            </TouchableOpacity>
          <Text style={styles.blcbMarketStats}>BLCB Market Stats</Text>
        </View>
      </View>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.market_cap}>
            <View style={styles.image2Row}>
              <Image
                source={require("../../assets/icons/MarketStatsDetails/MarketCap.png")}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
              <Text style={styles.marketCap}>Market Cap</Text>
              <Text style={styles.amount}>$12.75B</Text>
            </View>
          </View>
          <View style={styles.price_earning}>
            <View style={styles.image3Row}>
              <Image
                source={require("../../assets/icons/MarketStatsDetails/MarketCap.png")}
                resizeMode="contain"
                style={styles.image3}
              ></Image>
              <Text style={styles.priceEarningsRatio}>
                Price-Earnings Ratio
              </Text>
              <Text style={styles.nA}>N/A</Text>
            </View>
          </View>
          <View style={styles.divident_yield}>
            <View style={styles.image4Row}>
              <Image
                source={require("../../assets/icons/MarketStatsDetails/MarketCap.png")}
                resizeMode="contain"
                style={styles.image4}
              ></Image>
              <Text style={styles.dividendYield}>Dividend Yield</Text>
              <Text style={styles.nA2}>N/A</Text>
            </View>
          </View>
          <View style={styles.average_volume}>
            <View style={styles.image5Row}>
              <Image
                source={require("../../assets/icons/MarketStatsDetails/MarketCap.png")}
                resizeMode="contain"
                style={styles.image5}
              ></Image>
              <Text style={styles.averageVolume}>Average Volume</Text>
              <Text style={styles.nA3}>2,789,786</Text>
            </View>
          </View>
          <View style={styles.earning_per_share}>
            <View style={styles.image6Row}>
              <Image
                source={require("../../assets/icons/MarketStatsDetails/MarketCap.png")}
                resizeMode="contain"
                style={styles.image6}
              ></Image>
              <Text style={styles.earningsPerShare}>Earnings Per Share</Text>
              <Text style={styles.nA4}>N/A</Text>
            </View>
          </View>
          <View style={styles.one_year_high}>
            <View style={styles.image7Row}>
              <Image
                source={require("../../assets/icons/MarketStatsDetails/MarketCap.png")}
                resizeMode="contain"
                style={styles.image7}
              ></Image>
              <Text style={styles.earningsPerShare2}>1 Year High (52w)</Text>
              <Text style={styles.nA5}>$289.86</Text>
            </View>
          </View>
          <View style={styles.one_year_low}>
            <View style={styles.image8Row}>
              <Image
                source={require("../../assets/icons/MarketStatsDetails/MarketCap.png")}
                resizeMode="contain"
                style={styles.image8}
              ></Image>
              <Text style={styles.text}>1 Year Low (52w)</Text>
              <Text style={styles.text2}>$69.29</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <BottomMenuBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  group: {
    width: 195,
    height: 24,
    flexDirection: "row",
    marginTop: 41,
    marginLeft: 17
  },
  image1: {
    width: 14,
    height: 14,
    transform: [
      {
        rotate: "180.00deg"
      }
    ],
    marginTop: 5
  },
  blcbMarketStats: {
    fontFamily: "urbanist-700",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginLeft: 13
  },
  image1Row: {
    height: 24,
    flexDirection: "row",
    flex: 1
  },
  scrollArea: {
    width: 341,
    height: 449,
    marginTop: 27,
    marginLeft: 17
  },
  scrollArea_contentContainerStyle: {
    height: 609,
    width: 341
  },
  market_cap: {
    width: 341,
    height: 60,
    flexDirection: "row"
  },
  image2: {
    width: 60,
    height: 60
  },
  marketCap: {
    fontFamily: "urbanist-600",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 18,
    marginTop: 21
  },
  amount: {
    fontFamily: "urbanist-600",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 124,
    marginTop: 21
  },
  image2Row: {
    height: 60,
    flexDirection: "row",
    flex: 1
  },
  price_earning: {
    width: 341,
    height: 60,
    flexDirection: "row",
    marginTop: 31
  },
  image3: {
    width: 60,
    height: 60
  },
  priceEarningsRatio: {
    fontFamily: "urbanist-600",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 18,
    marginTop: 21
  },
  nA: {
    fontFamily: "urbanist-600",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 92,
    marginTop: 21
  },
  image3Row: {
    height: 60,
    flexDirection: "row",
    flex: 1
  },
  divident_yield: {
    width: 341,
    height: 60,
    flexDirection: "row",
    marginTop: 32
  },
  image4: {
    width: 60,
    height: 60
  },
  dividendYield: {
    fontFamily: "urbanist-600",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 18,
    marginTop: 21
  },
  nA2: {
    fontFamily: "urbanist-600",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 133,
    marginTop: 21
  },
  image4Row: {
    height: 60,
    flexDirection: "row",
    flex: 1
  },
  average_volume: {
    width: 341,
    height: 60,
    flexDirection: "row",
    marginTop: 31
  },
  image5: {
    width: 60,
    height: 60
  },
  averageVolume: {
    fontFamily: "urbanist-600",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 18,
    marginTop: 21
  },
  nA3: {
    fontFamily: "urbanist-600",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 76,
    marginTop: 21
  },
  image5Row: {
    height: 60,
    flexDirection: "row",
    flex: 1
  },
  earning_per_share: {
    width: 341,
    height: 60,
    flexDirection: "row",
    marginTop: 32
  },
  image6: {
    width: 60,
    height: 60
  },
  earningsPerShare: {
    fontFamily: "urbanist-600",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 18,
    marginTop: 21
  },
  nA4: {
    fontFamily: "urbanist-600",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 101,
    marginTop: 21
  },
  image6Row: {
    height: 60,
    flexDirection: "row",
    flex: 1
  },
  one_year_high: {
    width: 341,
    height: 60,
    flexDirection: "row",
    marginTop: 31
  },
  image7: {
    width: 60,
    height: 60
  },
  earningsPerShare2: {
    fontFamily: "urbanist-600",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 18,
    marginTop: 21
  },
  nA5: {
    fontFamily: "urbanist-600",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 81,
    marginTop: 21
  },
  image7Row: {
    height: 60,
    flexDirection: "row",
    flex: 1
  },
  one_year_low: {
    width: 341,
    height: 60,
    flexDirection: "row",
    marginTop: 32
  },
  image8: {
    width: 60,
    height: 60
  },
  text: {
    fontFamily: "urbanist-600",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 18,
    marginTop: 21
  },
  text2: {
    fontFamily: "urbanist-600",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 93,
    marginTop: 21
  },
  image8Row: {
    height: 60,
    flexDirection: "row",
    flex: 1
  }
});

export default MarketStatsDetails;
