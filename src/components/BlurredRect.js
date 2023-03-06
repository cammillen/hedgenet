import React from 'react';
import { Text, Image, StyleSheet, Dimensions, View } from 'react-native';
//import { BlurView } from 'expo-blur';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
const { width } = Dimensions.get('window');

const BlurredRect = () => {
    return ( 
        // width needs to be equal to screen width of device
      <BlurView intensity={30} tint="dark" width={width}  height={145} style={styles.container}>

            <Image
              source={require('../assets/icons/HomeGreen.png')} 
              style={[styles.Icon]}
            />
            <Text style={styles.activeText}>Home</Text>


            <Image
              source={require('../assets/icons/ChartGrey.png')} 
              style={[styles.Icon]}
            />
            <Text style={styles.inactiveText}>Dashboard</Text>


            <Image
              source={require('../assets/icons/Switch.png')} 
              style={[styles.switchIcon]}
            />


            <Image
              source={require('../assets/icons/Chat.png')} 
              style={[styles.Icon]}
            />
            <Text style={styles.inactiveText}>Chat</Text>



            <Image
              source={require('../assets/icons/Menu.png')} 
              style={[styles.Icon]}
            />
            <Text style={styles.inactiveText}>Menu</Text>

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