import React, { useRef, useEffect, useState } from 'react';
import { Image, Modal, View, StyleSheet, TouchableOpacity, Text, Animated, Dimensions, TouchableWithoutFeedback, PanResponder, KeyboardAvoidingView } from 'react-native';
import { globalColors } from '../../styles/Colors';
import { globalFonts } from '../../styles/Fonts';
import { useNavigation } from '@react-navigation/native';
import PopupHeader from '../SectionHeaders/PopupHeader.js';
import TextEntry from './TextEntry.js';
import { ScrollView } from 'react-native-gesture-handler';
import BottomButton from './BottomBotton';
import CreateAFundModal6 from './CreateAFundModal6.js';
import ToggleOption from '../AdminPanel/ToggleOption';

let option = '';

const screenHeight = Dimensions.get('window').height;

const CreateAFundModal5 = ({ visible, onClose, categoryList }) => {

  console.log(categoryList);

//This is for toggle option: 
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionSelect = (option) => {
    if (option !== selectedOption) {
        setSelectedOption(option);
    } else {
        setSelectedOption(null);
    }
    }
// This is to open next modal: 
    const [modalVisible, setModalVisible] = useState(false);
    const openModal = () => {
        setModalVisible(true);
    };
    const closeModal = () => {
        setModalVisible(false);
    };
//This is all animation stuff: 
    const modalOpacity = useRef(new Animated.Value(0)).current;
    const modalTranslateY = useRef(new Animated.Value(Dimensions.get('screen').height)).current;
    const backgroundOpacity = useRef(new Animated.Value(0)).current;
    const panResponder = useRef(
    PanResponder.create({
        onMoveShouldSetPanResponderCapture: (_, gestureState) => gestureState.dy > 0,
        onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 50) {
            onClose(false);
        }
        },
    })
    ).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(modalOpacity, {
          toValue: 1,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(modalTranslateY, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(backgroundOpacity, {
          toValue: 1,
          duration: 0,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(modalOpacity, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(modalTranslateY, {
          toValue: Dimensions.get('screen').height,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(backgroundOpacity, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible]);
// End of animation code.

option = selectedOption;

//Code for text entry: - TO DO BACKEND: the text entry is stored in text1 and text2, you need to send this entry to the backend when the user presses the next button. 
const scrollViewRef = useRef();

//This is all modal specific stuff: 
const navigation = useNavigation();
  return (
    <Modal transparent visible={visible} animationType="none" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={() => onClose(false)}>
        <Animated.View style={[styles.modalBackground, { opacity: backgroundOpacity }]}>
          <TouchableWithoutFeedback>
            <Animated.View {...panResponder.panHandlers} style={[styles.modalContainer, { opacity: modalOpacity, transform: [{ translateY: modalTranslateY }] }]}>
              <View style={styles.tabBar}/>
              {/* Enter content for modal here:  */}
              {/* Header: */}
              <PopupHeader numberOfBars={6} activeBars={5} popupHeaderText="Create Fund" onClose={onClose} />
              {/* Content: */}
              <View style={styles.contentVerticalContainer} >
                <Text style={[globalFonts.H3(globalColors.others.white.color), {paddingBottom: 24}]}>Please select the fund's privacy settings. 🔒</Text>
                <Text style={[globalFonts.BodyXLarge.Regular(globalColors.others.white.color),{marginBottom:5}]}>You can choose between private and public; anyone can join your public fund.</Text>
                <Text style={styles.title}>Investment Permissions</Text>
                <ToggleOption
                    title={"Private Fund"}
                    text={"No investment strategy, everyone is free to trade under the fund."}
                    icon={require('../../assets/icons/PrivateFund.png')}
                    selected={selectedOption === 'Private'}
                    onSelect={() => handleOptionSelect('Private')}
                />
                      <ToggleOption
                    title={"Public Fund"}
                    text={"No investment strategy, everyone is free to trade under the fund."}
                    icon={require('../../assets/icons/PublicFund.png')}
                    selected={selectedOption === 'Public'}
                    onSelect={() => handleOptionSelect('Public')}
                />
                <Text style={styles.selectedOptionText}>Your Fund Is {selectedOption}</Text>
                    <Text style={{paddingTop: 200}}>  </Text>  
              </View>
              {/* TO DO: BACKEND need to send text1 and text2 to the backend storing the new fund name and bio */}
              <BottomButton texts={[]} modal={<CreateAFundModal6 visible={modalVisible} onClose={closeModal} categoryList={categoryList} />} onPress={openModal} categoryList={categoryList}/>
              {/* This is end of flex box with content.*/}
            </Animated.View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: globalColors.dark._1.color,
    borderColor: globalColors.dark._3.color,
    borderWidth: 1,
    borderTopLeftRadius: 44,
    borderTopRightRadius: 44,
    height: screenHeight-45,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingBottom: 40,
  },
  tabBar: {
    alignContent: 'center',
    marginTop: 10,
    marginLeft: 170,
    marginRight: 170,
    paddingVertical: 2,
    backgroundColor: globalColors.dark._3.color,
    borderRadius: 8,
  },
  contentVerticalContainer:{
    paddingTop: 34,
    paddingLeft: 24, 
    paddingRight:24,
  },
  selectedOptionText: {
    paddingTop: 12,
    ...globalFonts.BodyXSmall.Medium(globalColors.others.white.color),
  },
  title:{
    paddingTop: 24,
    // paddingBottom: 24,
    ...globalFonts.H5(globalColors.others.white.color),
  },
});

export default CreateAFundModal5;
export { option };
