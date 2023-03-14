import React from 'react';
import {useRef, useState, useEffect} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const OTPInput = ({ code, setCode, maximumLength, setIsPinReady }) => {
    
    const OTPContainer = styled.View`
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 176,
        width: 382,
    `;
    
    const TextInputHidden = styled.TextInput`
        width: 300px;
        border-color: #e5e5e5;
        border-width: 1px;
        border-radius: 5px;
        padding: 15px;
        margin-top: 50px;
        color: white; */
        position: absolute;
        opacity: 0;
    `;
    
const SplitOTPBoxesContainer = styled.Pressable`
  width: 80%;
  flex-direction: row;
  justify-content: space-evenly;
`;
const SplitBoxes = styled.View`
  border-color: #e5e5e5;
  border-width: 2px;
  border-radius: 5px;
  padding: 12px;
  min-width: 50px;
`;

const SplitBoxText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #e5e5e5;
`;

const SplitBoxesFocused = styled(SplitBoxes)`
  border-color: #ecdbba;
  background-color: grey;
`;

const ButtonContainer = styled.TouchableOpacity`
  background-color: #000000;
  padding: 20px;
  justify-content: center;
  align-items: center;
  width: 200px;
  margin-top: 30px;
`;

const ButtonText = styled.Text`
  color: black;
  font-size: 20px;
`;

    const boxArray = new Array(maximumLength).fill(0);
    const inputRef = useRef();
  
    const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);
  
    const handleOnPress = () => {
      setIsInputBoxFocused(true);
      inputRef.current.focus();
    };
  
    const handleOnBlur = () => {
      setIsInputBoxFocused(false);
    };
  
    useEffect(() => {
      // update pin ready status
      setIsPinReady(code.length === maximumLength);
      // clean up function
      return () => {
        setIsPinReady(false);
      };
    }, [code]);
    const boxDigit = (_, index) => {
      const emptyInput = "";
      const digit = code[index] || emptyInput;
  
      const isCurrentValue = index === code.length;
      const isLastValue = index === maximumLength - 1;
      const isCodeComplete = code.length === maximumLength;
  
      const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);
  
      const StyledSplitBoxes =
        isInputBoxFocused && isValueFocused ? SplitBoxesFocused : SplitBoxes;
      return (
        <StyledSplitBoxes key={index}>
          <SplitBoxText>{digit}</SplitBoxText>
        </StyledSplitBoxes>
      );
    };
  
    return (
      <OTPContainer>
        <SplitOTPBoxesContainer onPress={handleOnPress}>
          {boxArray.map(boxDigit)}
        </SplitOTPBoxesContainer>
        <TextInputHidden
          value={code}
          onChangeText={setCode}
          maxLength={maximumLength}
          ref={inputRef}
          onBlur={handleOnBlur}
        />
      </OTPContainer>
    );
  };
  
  export default OTPInput;