import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

const BlurredRect = () => {
    return ( 
        // width needs to be equal to screen width of device
      <BlurView intensity={30} tint="dark" width={380}  height={145} style={styles.container}>
        <Ionicons name="home" size={24} color="white" />
        <Ionicons name="search" size={24} color="white" />
        <Ionicons name="person" size={24} color="white" />
        <Ionicons name="settings" size={24} color="white" />
        <Ionicons name="help-circle" size={24} color="white" />
      </BlurView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      justifyContent: 'space-around',
    },
  });
  
  export default BlurredRect;
