// This is the top menu bar that contains all the top navigation componenets.
// It needs to include the black background behind the menu bar (see figma file).
import React from 'react';
import { Image, Platform } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const country = 'UK'; //MUST CHANGE TO USER.COUNTRY BACKEND CALL
const uni = 'UCL'; //DITTO


//functionalise to take in current screen as argument!
function TopMenuBar(params) {
    const navigation = useNavigation();
    
    return (
      <View style={styles.header}>
        
        <View style={styles.iconContainer}>
          
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require('../assets/icons/Avatar.png')} // BACKEND TO DO: backend integration with profile picture. 
              style={[styles.profileIcon, { marginRight: 19 },  { marginLeft: 24 }]}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
            <Image
              source={require('../assets/icons/Notification.png')}
              style={styles.notificationIcon}
            />
          </TouchableOpacity>

        </View>

        <Text style={globalFonts.H5(globalColors.others.white.color)}>{params.screen}</Text>
         
        <View style={styles.iconContainer}>

          <TouchableOpacity onPress={() => navigation.navigate('Leaderboard',{country:country, uni:uni})}>
            <Image
              source={require('../assets/icons/Star.png')}
              style={styles.starIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Newsfeed')}>
            <Image
              source={require('../assets/icons/Message.png')}
              style={[styles.messageIcon, { marginLeft: 26 }, { marginRight: 24 }]}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }  

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row', //Be SUPER careful with this. Has caused me untold fucking agony!
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: globalColors.others.black.color,
      marginTop: Platform.OS == 'ios' ? 50: 0, //is this necessary? On android it just creates a big gap at the top
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    profileIcon: {
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