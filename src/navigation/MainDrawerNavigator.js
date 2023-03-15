import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainAppNavigator from './MainAppNavigator.js';
import { globalFonts } from '../styles/Fonts.js';
import { globalColors } from '../styles/Colors.js';
import IconTextArrowRight from '../components/IconTextArrowRight.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FundListLoop from '../components/FundListLoop';

const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => {

  const navigation = useNavigation();
  const DrawerContent = () => {
    
    return (
      <View style={styles.drawerContent}>
        <View style={styles.logoText}>
        {/* MENU ICONS AND NAVIGATION SECTION */}
          <Image
              source={require('../assets/icons/HedgenetGreen.png')}  
              style={[styles.icon]}
          />
          <Text style={globalFonts.H4(globalColors.others.white.color)}>Hedgenet</Text>
        </View>
        <ScrollView>
          <Text style={globalFonts.H5(globalColors.others.white.color)}>Menu</Text>
          <IconTextArrowRight
              title= 'My Account'
              onPress={() => navigation.navigate('MyAccount')}
              iconSource={require('../assets/icons/MyAccount.png')}
            />
          <IconTextArrowRight
              title= 'Friends'
              onPress={() => navigation.navigate('Friends')}
              iconSource={require('../assets/icons/Friends.png')}
          />
          <IconTextArrowRight
              title= 'Manage Funds'
              onPress={() => navigation.navigate('ManageFunds')}
              iconSource={require('../assets/icons/ManageFunds.png')}
          />
          <View style={styles.divider} />
          <IconTextArrowRight
              title= 'Settings'
              onPress={() => navigation.navigate('Settings')}
              iconSource={require('../assets/icons/Settings.png')}
          />
          <IconTextArrowRight
              title= 'Report'
              onPress={() => navigation.navigate('Report')}
              iconSource={require('../assets/icons/Report.png')}
          />
          {/* MY FUNDS SECTION */}
          <Text style={[globalFonts.H5(globalColors.others.white.color),{paddingTop: 24}]}>My Funds</Text>
          {/* The screens are labelled as they are titled e.g. "UCL Fintech Fund" */}
          <FundListLoop fundnames={fundnames} profilePics={profilePics} />
          <Text> </Text>
        </ScrollView>
        {/* PROFILE BOTTOM SECTION */}
        <View style={styles.profileHorizontal}>
          <View style={[{flexDirection: 'row'}, {alignItems:'center'}]}>
            {/* TO DO: BACKEND link profile name, image and email up with backend */}
            <Image style={styles.profileIcon} source={require('../assets/icons/ProfilePlaceholder.png')} />
            <View style={styles.profileVertical}>
              <Text style={[globalFonts.BodyXLarge.semiBold(globalColors.others.white.color), {paddingBottom: 3}]}>Cam Millen</Text>
              <Text style={globalFonts.BodySmall.semiBold(globalColors.others.white.color)}>cameronrmillen@gmail.com</Text>
            </View>
          </View>
          {/* TO DO: NAVIGATION link up the logout modal to logout button */}
          <TouchableOpacity>
            <Image style={styles.logoutIcon} source={require('../assets/icons/Logout.png')} />
          </TouchableOpacity>
        </View>

      </View>
    );
  };

  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{ 
        drawerPosition: 'right',
        drawerType: 'front',
        drawerStyle: {
          width: 320,
        },
      }}
    >
      <Drawer.Screen name="Home" component={MainAppNavigator} options={{ headerShown: false}}/>
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop: 56,
    paddingLeft: 30,
    paddingRight: 24,
    backgroundColor: '#000',
  },
  logoText: {
    flexDirection: 'row',
    paddingBottom: 15,
  },
  icon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    marginRight: 12,
  },
  divider: {
    height: 1,
    backgroundColor: globalColors.dark._3.color,
    marginTop: 24,
  },
  profileHorizontal:{
    paddingTop: 20,
    paddingBottom: 29,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileIcon: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
    marginRight: 12,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: globalColors.primary._500.color
  },
  logoutIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default MainDrawerNavigator;

// TO DO: BACKEND these need to be replaced with backend calls to users funds and thier icons. 
const fundnames = ['UCL Fintech Fund', 'LSE Sustainable finance Fund', 'Cambridge Algo Traders'];
const profilePics = [require('../assets/funds/UCLFintech.png'), require('../assets/funds/BioShorters.png'), require('../assets/funds/UCLFoodTech.png')];

