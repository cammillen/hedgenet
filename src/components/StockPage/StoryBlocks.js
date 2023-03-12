import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.storyBlock1}>
        <Text style={styles.theStorySoFar}>The Story So Far</Text>
        <Text style={styles.loremIpsum}>
          Our mission is to unlock the potential of human creativity—by giving a
          million creative artists the opportunity to live off their art and
          billions of fans the opportunity to enjoy and be inspired by it.{" "}
          {"\n"}
          {"\n"}Spotify transformed music listening forever when it launched in
          2008 allowing users to discover, manage and share over 60 million
          tracks. {"\n"}
          {"\n"}Today, Spotify is the world&#39;s most popular audio streaming
          subscription service with 299m users, across 92 markets.
        </Text>
      </View>
      <View style={styles.group1}>
        <Text style={styles.disclosures}>Disclosures</Text>
        <Text style={styles.text}>
        Risk as defined above is volatility of this stock relative to the US
          market as whole. This is sourced from IEX Exchange and is derived from
          the Beta value of this stock.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  storyBlock1: {
    width: 338,
    height: 220,
    marginTop: 41,
    marginLeft: 22
  },
  theStorySoFar: {
    ...globalFonts.H5(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  loremIpsum: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    height: 320,
    width: 338,
    fontSize: 16,
    lineHeight: 22,
    marginTop: 15
  },
  group1: {
    width: 338,
    height: 359,
    marginTop: 160,
    marginLeft: 22
  },
  disclosures: {
    ...globalFonts.H5(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  text: {
    ...globalFonts.BodyMedium.Medium(globalColors.others.white.color),
    color: "rgba(255,255,255,1)",
    height: 320,
    width: 338,
    fontSize: 16,
    lineHeight: 22,
    marginTop: 15
  }
});

export default Untitled;
