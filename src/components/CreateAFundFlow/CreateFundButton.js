import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { globalColors } from '../../styles/Colors';
import { globalFonts } from '../../styles/Fonts';

const screenWidth = Dimensions.get('window').width;

const CreateFundButton = ({ onPress, modal }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: globalColors.primary._500.color }]}>
        <Image style={[styles.icon, { marginRight: 10 }]} source={require('../../assets/icons/CreateFund.png')}/>
        <Text style={[globalFonts.BodyLarge.Bold(globalColors.others.white.color), styles.buttonText]}>Create Fund</Text>
      </TouchableOpacity>
      {modal}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    bottom: -1,
    borderTopWidth: 1,
    paddingTop: 24,
    borderTopColor: globalColors.dark._3.color,
    backgroundColor: globalColors.dark._1.color,
  },
  button: {
    flexDirection: 'row',
    width: screenWidth - 48,
    height: 58,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 36,
  },
  buttonText: {
    color: globalColors.others.white.color,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
},
});

export default CreateFundButton;
