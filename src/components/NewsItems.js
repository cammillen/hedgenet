// This is the card which shows either the portfolio value, or the stock price, and whether it is up or down and the % change.

import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import PictureSelect from '../assets/profilePictureRequire.js';

import DummyUsers from '../assets/dummyprofilepictures/dummyUserData.js';

const screenWidth = Dimensions.get('window').width;

export default function NewsItems({news}) {

  const image = PictureSelect(news.username);

  //message news item
  if (news?.message) {

    const date = new Date(news.date);
    const today = new Date();
    const timeElapsed = (today - date) / (1000) < 60 ? Math.floor((today - date) / (1000)) + 's' : //seconds elapsed
        (today - date) / (1000 * 60) < 60 ? Math.floor((today - date) / (1000 * 60)) + 'm' : //minutes elapsed
        (today - date) / (1000 * 60 * 60) < 24 ? Math.floor((today - date) / (1000 * 60 * 60)) + 'h' : //hours elapsed
        (today - date) / (1000 * 60 * 60 * 24) < 24 ? Math.floor((today - date) / (1000 * 60 * 60 * 24)) + 'd' : //days elapsed
        (today - date) / (1000 * 60 * 60 * 24 * 30.417) < 12 ? Math.floor((today - date) / (1000 * 60 * 60 * 24 * 30)) + 'mo' : //months elapsed - generalised to 30 days-ish per month
        Math.floor((today - date) / (1000 * 60 * 60 * 24 * 365)) + 'y'; //years elapsed - generalised to 365 days per year
    //highly doubt any more is necessary

    const username = 'u/' + news.username;
    const fund = news.fund.length > 23 ? news.fund.substring(0,21)+'...' : news.fund;
    const topText = username + ' • ' + timeElapsed + ' • ' + fund;
    const tags = news.tags.join(' • ');

    let messageComponents = [];
    let temp = '';
    if (messageComponents.length < 8) {
      news.message.split(' ').forEach(text => {
        if (text.includes('@')) {
          messageComponents.push(<Text style={globalFonts.BodyLarge.Medium(globalColors.others.white.color)}>{temp.trim()+' '}</Text>);
          temp = '';
          messageComponents.push(<Text style={globalFonts.BodyLarge.Medium(globalColors.primary._500.color)}>{text.trim()+' '}</Text>);
        } else { temp = [temp,text].join(' '); }
    })
      messageComponents.push(<Text style={globalFonts.BodyLarge.Medium(globalColors.others.white.color)}>{temp.trim()}</Text>);
    }

    return (
      <View style={{ width: screenWidth, paddingLeft: 24, paddingRight: 24 }}>
        <View style={styles.messageHeader}>
          <View style={styles.leftContainer}>
            <Image source={image} style={[styles.logoIcon]} />
            <View style={[styles.subHeaderLeft, {marginLeft: 16}]}>
              <Text style={globalFonts.BodySmall.semiBold(globalColors.others.white.color)}>{topText}</Text>
              <Text style={globalFonts.BodyLarge.Bold(globalColors.others.white.color)}>{tags}</Text>
            </View>
          </View>
        </View>
        <Text>{messageComponents /* Don't ask me why this works */ }</Text>
        <View style={styles.header}>
          <View style={styles.leftContainer /* add comment and upvote functionality */}>
            <Image source={require('../assets/icons/ArrowUpGreen.png')} style={[styles.icon, { marginRight: 9 }]} />
            <Text style={globalFonts.BodyLarge.Medium(globalColors.primary._500.color)}>{news.upvotes}</Text>
            <Image source={require('../assets/icons/ChatGreenOutline.png')} style={[styles.icon, { marginLeft: 15, marginRight: 9 }]} />
            <Text style={globalFonts.BodyLarge.Medium(globalColors.primary._500.color)}>{news.comments}</Text>
          </View>
          <View style={styles.rightContainer}>
              <Image source={require('../assets/icons/ShareGreen.png')} style={[styles.icon, { marginRight: 12 }]} />
              <Image source={require('../assets/icons/MoreGreenHorizontal.png')} style={styles.icon} />
          </View>
        </View>
      </View>
    );
  }

  const name = DummyUsers[news.username].firstName + ' ' + DummyUsers[news.username].lastName;
  const fund = news.fund.length > 13 ? news.fund.substring(0,11)+'...' : news.fund;
  const tagFund = news.tag + ' • ' + fund;
  const trade = news.trade > 0 ? '+$'+news.trade.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '-$'+Math.abs(news.trade).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const color = news.trade > 0 ? 'success' : 'error';
  const boughtSold = news.trade < 0 ? 'bought' : 'sold';

  return (
    <View style={{ width: screenWidth, paddingLeft: 24, paddingRight: 24 }}>
      <View style={styles.header}>
      <View style={styles.leftContainer}>
      <Image source={image} style={[styles.logoIcon, { marginRight: 16 }]} />
        <View style={styles.subHeaderLeft}>
          <Text style={globalFonts.H6(globalColors.others.white.color)}>{name}</Text>
          <Text style={globalFonts.BodyMedium.semiBold(globalColors.others.white.color)}>{tagFund}</Text>
        </View>
        </View>
        <View style={styles.subHeaderRight}>
          <Text style={globalFonts.H6(globalColors.others.white.color)}>{trade}</Text>
          <Text style={styles.textBox(color)}>{boughtSold}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 20,
    borderBottomColor: globalColors.dark._3.color,
    borderBottomWidth: 1,
    backgroundColor: 'rgba(27,172,75,0)',
  },
  messageHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 16,
    backgroundColor: 'rgba(27,172,75,0)',
  },
  message: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: globalColors.others.white.color,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  subHeaderLeft: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    height: 55,
  },
  subHeaderRight: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    height: 55
  },
  logoIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    borderRadius:100,
    borderWidth:2,
    borderColor: globalColors.primary._500.color
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain'
  },
  textBox: (c) => ({
    ...globalFonts.BodyXSmall.semiBold(globalColors.status[c].color),
    paddingRight:10,
    paddingLeft:10,
    padding:6,
    borderColor:globalColors.status[c].color,
    borderWidth:0.5,
    borderRadius:100,
    minWidth: 41, //may have to give values if misaligning - 80, 92
  })
});