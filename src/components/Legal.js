import React, { Component } from "react";
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from "react-native";

function LegalDisclamer(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect1Row}>
        <View style={styles.rect1}>
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
        </View>
        <Text style={styles.legalDisclaimer}>Legal Disclaimer</Text>
      </View>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <Text style={styles.loremIpsum}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            mollis efficitur lorem ut pulvinar. Suspendisse mattis tellus eget
            nunc sollicitudin, eget lacinia nisl volutpat. Morbi eros purus,
            fermentum at urna finibus, eleifend condimentum tortor. Etiam
            ultrices egestas auctor. Donec hendrerit eros augue, ut venenatis
            dui porta et. Maecenas eleifend, dui vel fringilla semper, nibh
            tortor luctus dolor, at scelerisque elit metus nec urna. Nunc ac
            ipsum venenatis, accumsan sem in, ornare eros. Proin vel lacus sed
            arcu dignissim euismod interdum eu tellus. Donec tristique sapien
            eget lacus sodales, quis malesuada elit vulputate. Nulla laoreet
            sodales volutpat. Sed congue ligula a massa condimentum rutrum at eu
            neque. Morbi cursus, lorem eget pellentesque pulvinar, eros nibh
            convallis enim, ornare efficitur justo tortor vel neque. Nunc
            aliquam, augue sed posuere facilisis, est ante accumsan tellus, id
            tempor dui felis ac tortor.{"\n"}
            {"\n"}Praesent ultricies nec massa quis consectetur. Maecenas et
            sapien ac mi dictum condimentum convallis sed mauris. Donec eros
            turpis, aliquet eget ipsum non, aliquam aliquam metus. Fusce posuere
            quis neque eget vehicula. Cras convallis felis justo, ut vulputate
            ex suscipit vel. Maecenas nunc nunc, semper at justo a, faucibus
            rutrum tortor. Nam vitae sapien sit amet risus luctus faucibus eget
            a nisl. In lobortis mi risus, eget faucibus magna auctor vitae.
            Proin enim ipsum, finibus eu ipsum sed, accumsan viverra nulla.
            Curabitur aliquet tristique risus, eu tempus odio sagittis et.
            Pellentesque elit turpis, rutrum eu viverra in, suscipit sed sapien.
            Suspendisse ac augue a mi egestas lobortis sed in enim. Vivamus eu
            luctus lectus.{"\n"}
            {"\n"}Donec eu sem sagittis, scelerisque tellus nec, malesuada arcu.
            Praesent consectetur laoreet arcu quis viverra. Suspendisse potenti.
            Mauris egestas imperdiet elit, ac efficitur erat porttitor nec. Sed
            hendrerit viverra mauris commodo dignissim. Vivamus non nunc luctus,
            posuere lorem a, imperdiet lorem. Maecenas arcu libero, sagittis nec
            nisi a, fermentum consequat justo. Nam feugiat dui id ante consequat
            viverra. Donec et interdum metus. Etiam eget purus ante. Praesent
            laoreet consequat dolor, ut feugiat lorem elementum eu. Maecenas vel
            turpis ultrices, egestas nibh sed, tristique quam.
          </Text>
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
  rect1: {
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
  legalDisclaimer: {
    fontFamily: "urbanist-700",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginLeft: 13
  },
  rect1Row: {
    height: 24,
    flexDirection: "row",
    marginTop: 41,
    marginLeft: 17,
    marginRight: 156
  },
  scrollArea: {
    width: 336,
    height: 904,
    marginTop: 21,
    marginLeft: 17
  },
  scrollArea_contentContainerStyle: {
    height: 1404,
    width: 336
  },
  loremIpsum: {
    fontFamily: "urbanist-regular",
    color: "rgba(255,255,255,1)",
    height: 994,
    width: 336,
    fontSize: 16
  }
});

export default LegalDisclamer;
