// Bottom Bottom DOCUMENTATION: 
// Say you have 2 input fields on your form, the output is text1 and text2. 
// The BottomBotton takes as input text1 and text2 and only turns green when the user has entered text into them.
// It also takes an onPress prop to allow you to add custom navigation once the button has been pressed. 
// Example implementation: 
        // <BottomButton texts={[text1, text2]} onPress={enter navigation code here} />
        // see CreateAFundModal1 for full implementation. 
// It also takes a modal argument of the modal you want to show after the next is pressed: 
// FULL E.g.: <BottomButton texts={[text1, text2]} modal={<CreateAFundModal2 visible={modalVisible} onClose={closeModal}/>} onPress={openModal}/>

import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { globalColors } from '../../styles/Colors';
import { globalFonts } from '../../styles/Fonts';

const screenWidth = Dimensions.get('window').width;

const BottomButton = ({ texts, onPress, modal }) => {
  const [buttonColor, setButtonColor] = useState(globalColors.dark._3.color);
  const [buttonText, setButtonText] = useState('Continue');

  useEffect(() => {
    const allFilled = texts.every((text) => text !== '');
    if (allFilled) {
      setButtonColor(globalColors.primary._500.color);
      setButtonText('Next');
    } else {
      setButtonColor(globalColors.dark._3.color);
      setButtonText('Next');
    }
  }, [texts]);

  const handlePress = () => {
    if (buttonColor === globalColors.primary._500.color) {
      onPress(); // navigate to the next screen
    }
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handlePress} style={[styles.button, { backgroundColor: buttonColor }]}>
        <Text style={[globalFonts.BodyLarge.Bold(globalColors.others.white.color), styles.buttonText]}>{buttonText}</Text>
        </TouchableOpacity>
      {modal}
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
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
        width: screenWidth-48,
        height: 58,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 36,
    },
    buttonText: {
        color: globalColors.others.white.color,
    },
});

export default BottomButton;

