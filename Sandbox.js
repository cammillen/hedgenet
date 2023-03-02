// This is the top menu bar that contains all the top navigation componenets.
// It needs to include the black background behind the menu bar (see figma file).
import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function TopMenuBar() {
    const navigation = useNavigation();
    
    return (
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Image
            source={require('../assets/icons/Avatar.png')} // BACKEND TO DO: backend integration with profile picture. 
            style={[styles.avatarIcon, { marginRight: 19 },  { marginLeft: 24 }]}
          />
          <Image
            source={require('../assets/icons/Notification.png')}
            style={styles.notificationIcon}
          />
        </View>
        <Text style={globalFonts.H4(globalColors.others.white.color)}>Link</Text> 
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

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: globalColors.others.black.color,
      padding: 10,
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
        height: 24.5,
        resizeMode: 'contain',
    },
    starIcon: {
        width: 24.51,
        height: 23.25,
        resizeMode: 'contain',
    },
    messageIcon: {
        width: 26,
        height: 23.58,
        resizeMode: 'contain',
    },
  });
  
  export default TopMenuBar;