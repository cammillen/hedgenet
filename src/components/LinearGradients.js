// HOW TO USE IN ANOTHER FILE: 
// At the top of your file import globalLinearGradients: "import globalLinearGradients from './src/components/LinearGradients.js';" (make sure you have the right file path)
// Then define gradient properties using e.g.: "<GlobalLinearGradients color1={'#000'} color2={'transparent'} style={'verticalDownOverlap'} dimensionSize={10} />"

import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function GlobalLinearGradients (params) {

    const styles = StyleSheet.create({
      verticalDownOverlap: (height) =>({
        height: height,
        marginBottom: -height,
        zIndex: 999
      }),
      //more to be added
    });

    return (<LinearGradient colors={[params.color1,params.color2]} style={styles[params.style](params.dimensionSize)} />);
};