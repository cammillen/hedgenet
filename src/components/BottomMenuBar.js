// Documentation: 
// If you need the icon to stay active you need to add: isActive('Dashboard') || isActive('AdminPanel') instead of isActive('Dashboard')
// Just make sure the name of the page matched up to what is in MainAppNavigator

import * as React from "react";
import Svg, { G, Path, Defs, Rect } from "react-native-svg";
import MaskedView from '@react-native-community/masked-view';
import { Platform, Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import { BlurView } from 'expo-blur';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { useRoute } from '@react-navigation/native';
import { useNavigation, ModalProvider } from '@react-navigation/native';
import KeyActionsModal from './KeyActionsModal';
import { useState } from 'react';

const { width } = Dimensions.get('window');

// This is the content that feeds into bottom menu bar: 

const BottomMenuContent = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const { name: currentRouteName } = useRoute();
  const isActive = (routeName) => {
    return currentRouteName === routeName;
  }
  const navigation = useNavigation();

  return ( 

      // width needs to be equal to screen width of device
    <BlurView intensity={Platform.OS === 'ios' ? 30 : 120} tint="dark" width={width}  height={145} style={styles.container}>

        {/* Profile Icon */}
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Home')}// NAVIGATION 
        >
          <Image 
            source={isActive('Home') ? require('../assets/icons/HomeGreen.png') : require('../assets/icons/HomeGrey.png')}
            style={[styles.Icon, isActive('Home') ? styles.Icon : styles.Icon]}
          />
          <Text style={[styles.text, isActive('Home') ? styles.activeText : styles.inactiveText]}>Home</Text>
        </TouchableOpacity>

        {/* Dashboard Icon */}
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Dashboard')}// NAVIGATION 
        >
          <Image
            source={isActive('Dashboard') || isActive('AdminPanel') ? require('../assets/icons/ChartGreen.png') : require('../assets/icons/ChartGrey.png')}
            style={[styles.Icon, isActive('Dashboard') || isActive('AdminPanel') ? styles.Icon : styles.Icon]}
          />
          <Text style={[styles.text, isActive('Dashboard') || isActive('AdminPanel') ? styles.activeText : styles.inactiveText]}>Dashboard</Text>
        </TouchableOpacity>

        {/* Key Actions Icon */}
        <TouchableOpacity style={styles.iconContainer} onPress={openModal}>
          <Image
            source={require('../assets/icons/Switch.png')} 
            style={[styles.switchIcon]}
          />
        </TouchableOpacity>
        <KeyActionsModal visible={modalVisible} onClose={closeModal} navigation={navigation}>
          <Text>This is the content of the modal</Text>
        </KeyActionsModal>

        {/* Chat Icon */}
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Chat')}// NAVIGATION 
        >
          <Image
            source={isActive('Chat') ? require('../assets/icons/ChatGreen.png') : require('../assets/icons/ChatGrey.png')}
            style={[styles.Icon, isActive('Chat') ? styles.Icon : styles.Icon]}
          />
          <Text style={[styles.text, isActive('Chat') ? styles.activeText : styles.inactiveText]}>Chat</Text>
        </TouchableOpacity>

        {/* Menu Icon */}
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.openDrawer()}// NAVIGATION 
        >
          <Image
            source={isActive('Menu') ? require('../assets/icons/MenuGreen.png') : require('../assets/icons/MenuGrey.png')}
            style={[styles.Icon, isActive('Menu') ? styles.Icon : styles.Icon]}
          />
          <Text style={[styles.text, isActive('Menu') ? styles.activeText : styles.inactiveText]}>Menu</Text>
        </TouchableOpacity>

    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios:{
        paddingLeft: 10,
        paddingRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-between',
      },
      android:{
        paddingLeft: 10,
        paddingRight: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-between',
      }
    }),
  },
  iconContainer: {
    width: 70,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-between',
  },
  Icon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  switchIcon: {
    resizeMode: 'contain',
    marginBottom: 50,
    ...Platform.select({
      ios: {
        width: 70,
        height: 70,
        fontSize: 30, // size for iOS
      },
      android: {
        width: 70,
        height: 70,
        fontSize: 25, // size for Android
      },
    }),
  },
  activeText:{
    ...globalFonts.BodySmall.Bold(globalColors.primary._500.color),
    paddingTop: 5,
  },
  inactiveText:{
    ...globalFonts.BodySmall.Medium(globalColors.greyscale._500.color),
    paddingTop: 5,
  }
});

// This is the Bottom Menu Bar Background Mask: 

const BottomMenuBar = (props) => (
      <MaskedView style={{ marginLeft: Platform.OS === 'android' ? 10 : 0}}
        maskElement={
          <Svg
            width={width}
            height={113}
            fill="red"
            xmlns="http://www.w3.org/2000/svg"
            backgroundColor={'transparent'}
            {...props}
          >
            <G filter="url(#a)">
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M124.11 31.993c11.176.002 20.643-7.73 28.216-15.945C161.379 6.228 174.893-.002 189.993 0c15.107.002 28.633 6.243 37.696 16.072 7.573 8.214 17.039 15.94 28.209 15.941l98.111.015c14.356.002 25.998 11.64 26.005 25.995l.016 28.972c.008 14.363-11.632 26.007-25.995 26.005l-327.994-.05C11.685 112.948.043 101.311.036 86.955L.02 57.983C.012 43.62 11.652 31.976 26.015 31.978l98.095.015Z"
              />
            </G>
            <Defs></Defs>
          </Svg>
        }>
        <BottomMenuContent/>
      </MaskedView>

);

export default BottomMenuBar;
