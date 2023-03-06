import * as React from "react";
import Svg, { G, Path, Defs, Rect } from "react-native-svg";
import MaskedView from '@react-native-community/masked-view';
import { Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import { BlurView } from 'expo-blur';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';

const { width } = Dimensions.get('window');

// This is the content that feeds into bottom menu bar: 

const BottomMenuContent = () => {
  return ( 
      // width needs to be equal to screen width of device
    <BlurView intensity={30} tint="dark" width={width}  height={145} style={styles.container}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Home')}// NAVIGATION 
        >
          <Image
            source={require('../assets/icons/HomeGreen.png')} 
            style={[styles.Icon]}
          />
          <Text style={styles.activeText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('FundDashboard')}// NAVIGATION 
        >
          <Image
            source={require('../assets/icons/ChartGrey.png')} 
            style={[styles.Icon]}
          />
          <Text style={styles.inactiveText}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('KeyActions')}// NAVIGATION 
        >
          <Image
            source={require('../assets/icons/Switch.png')} 
            style={[styles.switchIcon]}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Chat')}// NAVIGATION 
        >
          <Image
            source={require('../assets/icons/Chat.png')} 
            style={[styles.Icon]}
          />
          <Text style={styles.inactiveText}>Chat</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Menu')}// NAVIGATION 
        >
          <Image
            source={require('../assets/icons/Menu.png')} 
            style={[styles.Icon]}
          />
          <Text style={styles.inactiveText}>Menu</Text>
        </TouchableOpacity>

    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 60,
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
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginBottom: 50,
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

// This is the Bottom Menu Bar Background: 

const BottomMenuBar = (props) => (
  <MaskedView
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


