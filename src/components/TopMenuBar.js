// This is the top menu bar that contains all the top navigation componenets.
// It needs to include the black background behind the menu bar (see figma file).
import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';

function TopMenuBar() {
    return (
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Image
            source={require('../assets/icons/Avatar.png')}
            style={[styles.avatarIcon, { marginRight: 19 }]}
          />
          <Image
            source={require('../assets/icons/Notification.png')}
            style={[styles.notificationIcon, { marginRight: 19 }]}
          />
        </View>
        <Text style={globalFonts.H4(globalColors.others.white.color)}>Home</Text>
        <View style={styles.iconContainer}>
          <Image
            source={require('../assets/icons/Chart.png')}
          />
          <Image
            source={require('../assets/icons/Chart.png')}
            style={{ marginLeft: 19 }}
          />
        </View>
      </View>
    );
  }  

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: globalColors.dark._1.color,
      padding: 16,
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatarIcon: {
        width: 33,
        height: 33,
        resizeMode: 'contain',
    },
    notificationIcon: {
        width: 21.08,
        height: 24,
        resizeMode: 'contain',
    },
  });
  
  export default TopMenuBar;