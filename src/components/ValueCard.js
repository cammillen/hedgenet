// This is the card which shows either the portfolio value, or the stock price, and whether it is up or down and the % change.

import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';

function ValueCard() {
    return (
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Image
              source={require('../assets/icons/HedgenetWhite.png')} // BACKEND TO DO: backeng integration with Hedgenet picture. 
              style={[styles.avatarIcon, { marginRight: 19 },  { marginLeft: 24 }]}
            />
            <Image
              source={require('../assets/icons/Notification.png')}
              style={styles.notificationIcon}
            />
          </View>
          <Text style={globalFonts.H4(globalColors.others.white.color)}>Home</Text>
          <View style={styles.iconContainer}>
            <Image
              source={require('../assets/icons/Star.png')}
              style={styles.starIcon}
            />
            <Image
              source={require('../assets/icons/Message.png')}
              style={[styles.messageIcon, { marginLeft: 26 }, { marginRight: 24 }]}
            />
          </View>
        </View>
    );
}
