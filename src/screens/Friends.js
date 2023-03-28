// Friends Screen

import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { StatusBar, Dimensions } from 'react-native';
import { useCallback, useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopMenuBar from '../components/TopMenuBar.js';
import Background from '../components/Background.js';
import SearchBarInactive from '../components/SearchBarInactive.js';
import BottomMenuBar from '../components/BottomMenuBar.js';
import { useNavigation } from '@react-navigation/native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { ScrollView } from 'react-native-gesture-handler';


const screenWidth = Dimensions.get('window').width;

export default function Friends () {

  const Screen = 'Social';

  const [fontsLoaded] = useFonts({
    'Urbanist-Bold': require('../assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist-SemiBold': require('../assets/fonts/Urbanist-SemiBold.ttf'),
    'Urbanist-Medium': require('../assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist-Regular': require('../assets/fonts/Urbanist-Regular.ttf'),
  });

  SplashScreen.preventAutoHideAsync(); 
  const navigation = useNavigation();

  const [isSelected, setIsSelected] = useState('Followers');
  const [showFollowers, setShowFollowers] = useState(true);
  const [showFollowing,setShowFollowing] = useState(false);

  const handlePress = (screen) => {
    setIsSelected(screen);
    setShowFollowers(screen === 'Followers');
    setShowFollowing(screen === 'Following');
  };
  //ADD LOGIC FOR REMOVE AND UNFOLLOW BUTTONS

  const ProfileCard = ({ image, name, mutualGroups, numTrades }) => {
    return (
      <TouchableOpacity style={styles.personbox}>
        <Image style={styles.image}
          source={image}
        />
        <View style={styles.textbox}>
          <Text style={[globalFonts.H6(globalColors.others.white.color), {display: 'flex'}, {alignItems: 'center'}, {height: 29}]}>{name}</Text>
          <Text style={[globalFonts.BodyMedium.Medium(globalColors.greyscale._300.color), {display: 'flex'}, {alignItems: 'center'}, {marginTop: 4}]}> {`${mutualGroups} Mutual Groups • ${numTrades} Trades`}</Text>
        </View> 
        <TouchableOpacity style={[styles.smallbutton, { backgroundColor: isSelected === 'Followers' ? globalColors.status.error.color : globalColors.greyscale._900.color }]}>
              <Text style={[globalFonts.BodyMedium.semiBold(globalColors.others.white.color)]}>{isSelected === 'Followers' ? 'Remove' : 'Unfollow'}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  return ( 
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container}>
        <TopMenuBar screen={Screen} />
        <View style={styles.fullComp}>
          <TouchableOpacity  onPress={() => navigation.goBack()}>
                <Image
                    source={require('../assets/icons/ArrowLeft_Green.png')}
                    style={styles.ArrowLeft_GreenIcon}
                />      
          </TouchableOpacity>
          <Text style={[globalFonts.H4(globalColors.others.white.color), {marginLeft:16}]}>Friends</Text>
        </View>
        <SearchBarInactive/>
        <View style={styles.box1}>
              <View style={styles.buttonContainer}>
              <TouchableOpacity
                      onPress={() => { handlePress('Followers'); setShowFollowers(true); setShowFollowing(false); }}
                      style={[styles.button, isSelected === 'Followers' ? {borderBottomColor: globalColors.status.success.color} : { borderBottomColor: globalColors.others.black.color }]}
                      >
                      <Text style={[globalFonts.BodyXLarge.semiBold(isSelected === 'Followers' ? globalColors.status.success.color : globalColors.greyscale._700.color), { marginBottom: 12 }]}>Followers</Text>     
              </TouchableOpacity>
              <TouchableOpacity
                      onPress={() => { handlePress('Following'); setShowFollowers(false); setShowFollowing(true); }} 
                      style={[styles.button, isSelected === 'Following' ? {borderBottomColor: globalColors.status.success.color} : { borderBottomColor: globalColors.others.black.color }]}
                      >
                      <Text style={[globalFonts.BodyXLarge.semiBold(isSelected === 'Following' ? globalColors.status.success.color : globalColors.greyscale._700.color), { marginBottom: 12 }]}>Following</Text>   
              </TouchableOpacity>
              </View>
          </View>
          { showFollowers && (
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom:150 }}>
              <View style={styles.scrollview}>
              {followers.map((followers, index) => (
              <ProfileCard
                key={index}
                image={followers.image}
                name={followers.name}
                mutualGroups={followers.mutualGroups}
                numTrades={followers.numTrades}
              />
              ))}
              </View>
            </ScrollView>
          )}
          { showFollowing && (
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom:150 }}>
              <View style={styles.scrollview}>
              {following.map((following, index) => (
              <ProfileCard
                key={index}
                image={following.image}
                name={following.name}
                mutualGroups={following.mutualGroups}
                numTrades={following.numTrades}
              />
              ))}
              </View>
            </ScrollView>
          )}
        <View style={styles.bottomMenuBarContainer}>
          <BottomMenuBar />
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullComp:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 24,
    marginTop: 24,
    marginRight: 24,
  }, 
  bottomMenuBarContainer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -5,
    marginLeft: 5,
  },
  ArrowLeft_GreenIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  toptextbox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 16,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    height:41,
    marginRight:24,
  },
  box1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 24,
    marginTop: 16,
    height: 41
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 176,
    flexGrow: 1,
    gap: 12,
    borderBottomWidth: 4,
  },
  scrollview: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 4,
    marginLeft: 24,
    marginRight: 24,
  },
  personbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    height: 84,
    marginTop: 20,
    marginRight: 24,
    borderWidth: 1,
    borderBottomColor: globalColors.dark._3.color,
  },
  image: {
    position: 'absolute',
    width: 60,
    height: 60,
  },
  textbox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 80,
    width: 185
  },
  smallbutton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 89,
    height: 32,
    borderRadius: 100,
    //paddingTop: 6,
    //paddingLeft: 16,
    gap: 4,
    //marginLeft: 12,
    marginBottom: 14,
    marginRight: 24,
    marginTop: 14
  },
});

//NEEDS TO BE LINKED WITH DATABASE
const followers = [
  {
    image: require('../assets/icons/MockProfileImage.png'),
    name: 'John Doe',
    mutualGroups: 5,
    numTrades: 10,
  },
  {
    image: require('../assets/icons/MockProfileImage.png'),
    name: 'Jane Smith',
    mutualGroups: 3,
    numTrades: 7,
  },
  {
    image: require('../assets/icons/MockProfileImage.png'),
    name: 'Jane Smith',
    mutualGroups: 3,
    numTrades: 7,
  },
  {
    image: require('../assets/icons/MockProfileImage.png'),
    name: 'Jane Smith',
    mutualGroups: 3,
    numTrades: 7,
  },
  {
    image: require('../assets/icons/MockProfileImage.png'),
    name: 'Jane Smith',
    mutualGroups: 3,
    numTrades: 7,
  },
  {
    image: require('../assets/icons/MockProfileImage.png'),
    name: 'Jane Smith',
    mutualGroups: 3,
    numTrades: 7,
  },
  {
    image: require('../assets/icons/MockProfileImage.png'),
    name: 'Jane Smith',
    mutualGroups: 3,
    numTrades: 7,
  },
  {
    image: require('../assets/icons/MockProfileImage.png'),
    name: 'Jane Smith',
    mutualGroups: 3,
    numTrades: 7,
  },
];

const following = [
  {
    image: require('../assets/icons/MockProfileImage.png'),
    name: 'Omiros Smit',
    mutualGroups: 5,
    numTrades: 10,
  },
  {
    image: require('../assets/icons/MockProfileImage.png'),
    name: 'Jorge Loizeth',
    mutualGroups: 3,
    numTrades: 7,
  },
  {
    image: require('../assets/icons/MockProfileImage.png'),
    name: 'Jane Smith',
    mutualGroups: 3,
    numTrades: 7,
  },
  {
    image: require('../assets/icons/MockProfileImage.png'),
    name: 'Jane Smith',
    mutualGroups: 3,
    numTrades: 7,
  },
  {
    image: require('../assets/icons/MockProfileImage.png'),
    name: 'Jane Smith',
    mutualGroups: 3,
    numTrades: 7,
  },
  {
    image: require('../assets/icons/MockProfileImage.png'),
    name: 'Jane Smith',
    mutualGroups: 3,
    numTrades: 7,
  },
  {
    image: require('../assets/icons/MockProfileImage.png'),
    name: 'Jane Smith',
    mutualGroups: 3,
    numTrades: 7,
  },
  {
    image: require('../assets/icons/MockProfileImage.png'),
    name: 'Jane Smith',
    mutualGroups: 3,
    numTrades: 7,
  },
];