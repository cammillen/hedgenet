import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';

const { width } = Dimensions.get('window');

const BlurredRect = () => {
    return ( 
        // width needs to be equal to screen width of device
      <BlurView intensity={30} tint="dark" width={width}  height={145} style={styles.container}>
          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Home')}// NAVIGATION 
          >
            <Image
              source={require('../assets/icons/HomeGreen.png')} 
              style={[styles.Icon]}
            />
            <Text style={globalFonts.BodySmall.Bold(globalColors.primary._500.color)}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('FundDashboard')}// NAVIGATION 
          >
            <Image
              source={require('../assets/icons/ChartGrey.png')} 
              style={[styles.Icon]}
            />
            <Text style={globalFonts.BodySmall.Medium(globalColors.greyscale._500.color)}>Dashboard</Text>
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
            <Text style={globalFonts.BodySmall.Medium(globalColors.greyscale._500.color)}>Chat</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Menu')}// NAVIGATION 
          >
            <Image
              source={require('../assets/icons/Menu.png')} 
              style={[styles.Icon]}
            />
            <Text style={globalFonts.BodySmall.Medium(globalColors.greyscale._500.color)}>Menu</Text>
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
      flexDirection: 'coloumn',
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
  });
  
  export default BlurredRect;


  