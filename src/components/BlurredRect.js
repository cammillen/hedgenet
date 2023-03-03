import React from 'react';
import { View } from 'react-native';
import { BlurView } from 'expo-blur';

const BlurredRect = () => {
    return (
      <BlurView intensity={20} tint="dark" >
        <View style={{ backgroundColor: 'fff', width: 1000, height: 300 }} />
      </BlurView>
    );
  };
  
  export default BlurredRect;
  