import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Link } from "@react-navigation/native";
import MaterialChipBasic from "../../components/Chips/MaterialChipBasic";
import MaterialChipBasic1 from "../../components/Chips/MaterialChipBasic1";
import MaterialChipBasic2 from "../../components/Chips/MaterialChipBasic2";
import MaterialChipBasic3 from "../../components/Chips/MaterialChipBasic3";
import MaterialChipBasic4 from "../../components/Chips/MaterialChipBasic4";
import MaterialChipBasic5 from "../../components/Chips/MaterialChipBasic5";
import NewsSectionDetails from '../../components/StockPage/MarketStatsDetails.js';
function News(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <View style={styles.textRow}>
          <Text style={styles.text}>News</Text>
          <TouchableOpacity onPress={() => navigation.navigate('NewsSectionDetails')}>
          <Image
            source={require("../../assets/icons/ArrowRightGreen.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>


             
            </TouchableOpacity>
         
        </View>
      </View>
      <View style={styles.newsareaStack}>
        <View style={styles.newsarea}>
          <View style={styles.group3}>
            <View style={styles.group2}>
              <View style={styles.forbesRow}>
                <Text style={styles.forbes}>Forbes</Text>
                <Text style={styles.forbes2}>1 day ago</Text>
              </View>
            </View>
            <Text style={styles.loremIpsum}>
              NASDAQ Roundup: Alphabet Earnings, Microsoft Earnings, Spotify
              Earnings, And ...
            </Text>
            <View style={styles.rect}></View>
          </View>
          <View style={styles.group4}>
            <View style={styles.rect2}>
              <View style={styles.seekingAlphaRow}>
                <Text style={styles.seekingAlpha}>Seeking Alpha</Text>
                <Text style={styles.text2}>2 days ago</Text>
              </View>
            </View>
            <View style={styles.ownTheTollBoothsStack}>
              <Text style={styles.ownTheTollBooths}>Own The Toll Booths</Text>
              <View style={styles.rect3}></View>
            </View>
          </View>
          <View style={styles.group5}>
            <View style={styles.rect4}>
              <View style={styles.theMotleyFoolRow}>
                <Text style={styles.theMotleyFool}>The Motley Fool</Text>
                <Text style={styles.text4}>2 days ago</Text>
              </View>
            </View>
            <Text style={styles.text5}>
              Cathie Wood Has Abandoned Spotify --Should You Follow Her Lead?
            </Text>
            <View style={styles.rect5}></View>
          </View>
          <Link style={styles.showMore} to={{ screen: 'NewsSectionDetails' }}>
          <Text style={styles.showMore}>Show More</Text>
          </Link>
        </View>
        <View style={styles.group20}>
          <View style={styles.group6}>
            <Text style={styles.characteristics}>Characteristics</Text>
          </View>
          <View style={styles.chips_group}>
            <View style={styles.group18}>
              <View style={styles.allstockRow}>
                <MaterialChipBasic style={styles.allstock}></MaterialChipBasic>
                <MaterialChipBasic1
                  style={styles.visionary}
                ></MaterialChipBasic1>
                <MaterialChipBasic2
                  style={styles.foubnder}
                ></MaterialChipBasic2>
              </View>
            </View>
            <View style={styles.group17}>
              <View style={styles.lifestyleRow}>
                <MaterialChipBasic3
                  style={styles.lifestyle}
                ></MaterialChipBasic3>
                <MaterialChipBasic4
                  style={styles.entertainment}
                ></MaterialChipBasic4>
                <MaterialChipBasic5 style={styles.tech}></MaterialChipBasic5>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.rect6}>
        <Text style={styles.peopleAlsoBought}>People Also Bought</Text>
      </View>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.group19}>
            <View style={styles.group11Row}>
              <View style={styles.group11}>
                <Image
                  source={require("../../assets/logos/virgin.png")}
                  resizeMode="contain"
                  style={styles.image2}
                ></Image>
                <Text style={styles.virg}>VIRG</Text>
                <Text style={styles.loremIpsum2}>+ 2.37%</Text>
              </View>
              <View style={styles.group12}>
                <Image
                  source={require("../../assets/logos/amazon.png")}
                  resizeMode="contain"
                  style={styles.image3}
                ></Image>
                <Text style={styles.amaz}>AMAZ</Text>
                <Text style={styles.text6}>- 2.45%</Text>
              </View>
              <View style={styles.group15}>
                <Image
                  source={require("../../assets/logos/meta.png")}
                  resizeMode="contain"
                  style={styles.image4}
                ></Image>
                <Text style={styles.meta}>META</Text>
                <Text style={styles.text7}>+ 3.16%</Text>
              </View>
              <View style={styles.group14}>
                <Image
                  source={require("../../assets/logos/lg.png")}
                  resizeMode="contain"
                  style={styles.image5}
                ></Image>
                <Text style={styles.sbux}>SBUX</Text>
                <Text style={styles.text8}>- 4.29%</Text>
              </View>
              <View style={styles.group16}>
                <Image
                  source={require("../../assets/logos/twitter.png")}
                  resizeMode="contain"
                  style={styles.image6}
                ></Image>
                <Text style={styles.code}>CODE</Text>
                <Text style={styles.text9}>+ 000%</Text>
              </View>
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
  },
  group: {
    width: 331,
    height: 24,
    flexDirection: "row",
    alignSelf: "center"
  },
  text: {
    fontFamily: "urbanist-700",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  image: {
    width: 14,
    height: 14,
    marginLeft: 268,
    marginTop: 5
  },
  textRow: {
    height: 24,
    flexDirection: "row",
    flex: 1
  },
  newsarea: {
    top: 0,
    left: 0,
    width: 338,
    height: 324,
    position: "absolute"
  },
  group3: {
    width: 338,
    height: 85
  },
  group2: {
    width: 336,
    height: 14,
    flexDirection: "row",
    marginLeft: 2
  },
  forbes: {
    fontFamily: "urbanist-500",
    color: "rgba(255,255,255,1)",
    fontSize: 12
  },
  forbes2: {
    fontFamily: "urbanist-500",
    color: "rgba(224,224,224,1)",
    fontSize: 12,
    textAlign: "right",
    marginLeft: 251
  },
  forbesRow: {
    height: 14,
    flexDirection: "row",
    flex: 1
  },
  loremIpsum: {
    fontFamily: "urbanist-600",
    color: "rgba(255,255,255,1)",
    height: 60,
    width: 336,
    fontSize: 17,
    marginTop: 10,
    marginLeft: 2
  },
  rect: {
    width: 336,
    height: 1,
    backgroundColor: "rgba(53,56,63,1)"
  },
  group4: {
    width: 338,
    height: 64,
    marginTop: 13
  },
  rect2: {
    width: 336,
    height: 14,
    flexDirection: "row",
    marginLeft: 2
  },
  seekingAlpha: {
    fontFamily: "urbanist-500",
    color: "rgba(255,255,255,1)",
    fontSize: 12
  },
  text2: {
    fontFamily: "urbanist-500",
    color: "rgba(224,224,224,1)",
    fontSize: 12,
    textAlign: "right",
    marginLeft: 202
  },
  seekingAlphaRow: {
    height: 14,
    flexDirection: "row",
    flex: 1
  },
  ownTheTollBooths: {
    top: 0,
    left: 2,
    position: "absolute",
    fontFamily: "urbanist-600",
    color: "rgba(255,255,255,1)",
    height: 60,
    width: 336,
    fontSize: 17
  },
  rect3: {
    top: 35,
    width: 336,
    height: 1,
    position: "absolute",
    backgroundColor: "rgba(53,56,63,1)",
    left: 0
  },
  ownTheTollBoothsStack: {
    width: 338,
    height: 60,
    marginTop: 10
  },
  group5: {
    width: 338,
    height: 85,
    marginTop: 8
  },
  rect4: {
    width: 336,
    height: 14,
    flexDirection: "row",
    marginLeft: 2
  },
  theMotleyFool: {
    fontFamily: "urbanist-500",
    color: "rgba(255,255,255,1)",
    fontSize: 12
  },
  text4: {
    fontFamily: "urbanist-500",
    color: "rgba(224,224,224,1)",
    fontSize: 12,
    textAlign: "right",
    marginLeft: 195
  },
  theMotleyFoolRow: {
    height: 14,
    flexDirection: "row",
    flex: 1
  },
  text5: {
    fontFamily: "urbanist-600",
    color: "rgba(255,255,255,1)",
    height: 60,
    width: 336,
    fontSize: 17,
    marginTop: 10,
    marginLeft: 2
  },
  rect5: {
    width: 336,
    height: 1,
    backgroundColor: "rgba(53,56,63,1)"
  },
  showMore: {
    fontFamily: "urbanist-600",
    color: "rgba(18,209,142,1)",
    fontSize: 16,
    marginTop: 18,
    marginLeft: 127
  },
  group20: {
    top: 308,
    left: 0,
    width: 338,
    height: 114,
    position: "absolute"
  },
  group6: {
    width: 332,
    height: 24,
    marginLeft: 2
  },
  characteristics: {
    fontFamily: "urbanist-700",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  chips_group: {
    width: 338,
    height: 75,
    marginTop: 15
  },
  group18: {
    width: 338,
    height: 32,
    flexDirection: "row"
  },
  allstock: {
    width: 106,
    height: 32
  },
  visionary: {
    width: 93,
    height: 32,
    marginLeft: 5
  },
  foubnder: {
    width: 129,
    height: 32,
    marginLeft: 5
  },
  allstockRow: {
    height: 32,
    flexDirection: "row",
    flex: 1
  },
  group17: {
    width: 314,
    height: 32,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 2
  },
  lifestyle: {
    width: 89,
    height: 32
  },
  entertainment: {
    width: 136,
    height: 32,
    marginLeft: 6
  },
  tech: {
    width: 77,
    height: 32,
    marginLeft: 6
  },
  lifestyleRow: {
    height: 32,
    flexDirection: "row",
    flex: 1
  },
  newsareaStack: {
    width: 338,
    height: 422,
    marginTop: 31,
    marginLeft: 12
  },
  rect6: {
    width: 332,
    height: 24,
    marginTop: 28,
    marginLeft: 14
  },
  peopleAlsoBought: {
    fontFamily: "urbanist-700",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  scrollArea: {
    width: 334,
    height: 124,
    marginTop: 36,
    marginLeft: 12
  },
  scrollArea_contentContainerStyle: {
    width: 455,
    height: 124
  },
  group19: {
    width: 455,
    height: 124,
    flexDirection: "row"
  },
  group11: {
    width: 70,
    height: 124
  },
  image2: {
    width: 70,
    height: 70
  },
  virg: {
    fontFamily: "urbanist-700",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 13,
    marginLeft: 16
  },
  loremIpsum2: {
    fontFamily: "urbanist-600",
    color: "rgba(18,209,142,1)",
    marginTop: 5,
    marginLeft: 12
  },
  group12: {
    width: 70,
    height: 124,
    marginLeft: 16
  },
  image3: {
    width: 70,
    height: 70
  },
  amaz: {
    fontFamily: "urbanist-700",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 13,
    marginLeft: 12
  },
  text6: {
    fontFamily: "urbanist-600",
    color: "rgba(247,85,85,1)",
    marginTop: 5,
    marginLeft: 12
  },
  group15: {
    width: 70,
    height: 124,
    marginLeft: 17
  },
  image4: {
    width: 70,
    height: 70
  },
  meta: {
    fontFamily: "urbanist-700",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 13,
    marginLeft: 13
  },
  text7: {
    fontFamily: "urbanist-600",
    color: "rgba(18,209,142,1)",
    marginTop: 5,
    marginLeft: 14
  },
  group14: {
    width: 70,
    height: 124,
    marginLeft: 16
  },
  image5: {
    width: 70,
    height: 70
  },
  sbux: {
    fontFamily: "urbanist-700",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 13,
    marginLeft: 14
  },
  text8: {
    fontFamily: "urbanist-600",
    color: "rgba(247,85,85,1)",
    marginTop: 5,
    marginLeft: 12
  },
  group16: {
    width: 70,
    height: 124,
    marginLeft: 17
  },
  image6: {
    width: 70,
    height: 70
  },
  code: {
    fontFamily: "urbanist-700",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 13,
    marginLeft: 14
  },
  text9: {
    fontFamily: "urbanist-600",
    color: "rgba(18,209,142,1)",
    marginTop: 5,
    marginLeft: 12
  },
  group11Row: {
    height: 124,
    flexDirection: "row",
    flex: 1,
    marginRight: 39
  }
});

export default News;
