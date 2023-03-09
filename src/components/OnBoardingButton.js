import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';

const Button = (props) => {
  const { color, title } = props;
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]}>
      <Text style={[globalFonts.BodyLarge.semiBold(globalColors.others.white.color), {textAlign:'center'}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'column',
    //justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    padding: 18,
    width: 382,
    height: 60,
  },
});

export default Button;