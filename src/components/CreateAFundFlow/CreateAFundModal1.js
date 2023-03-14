import React, { useRef, useEffect, useState } from 'react';
import { Image, Modal, View, StyleSheet, TouchableOpacity, Text, Animated, Dimensions, TouchableWithoutFeedback, PanResponder, KeyboardAvoidingView } from 'react-native';
import { globalColors } from '../../styles/Colors';
import { globalFonts } from '../../styles/Fonts';
import { useNavigation } from '@react-navigation/native';
import PopupHeader from '../SectionHeaders/PopupHeader.js';
import TextEntry from './TextEntry.js';
import { ScrollView } from 'react-native-gesture-handler';
import BottomButton from './BottomBotton';
import CreateAFundModal2 from './CreateAFundModal2.js';

let text1Value = '';
let text2Value = '';

const screenHeight = Dimensions.get('window').height;

const CreateAFundModal1 = ({ visible, onClose}) => {
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
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(backgroundOpacity, {
          toValue: 1,
          duration: 500,
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
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(backgroundOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible]);
// End of animation code.

//Code for text entry: - TO DO BACKEND: the text entry is stored in text1 and text2, you need to send this entry to the backend when the user presses the next button. 
const scrollViewRef = useRef();

const [text1, setText1] = useState('');
const [text2, setText2] = useState('');
const handleTextChange1 = (value1) => {
    setText1(value1);
    text1Value = value1;
};
const handleTextChange2 = (value2) => {
  text2Value = value2
  setText2(value2);
  scrollViewRef.current.scrollToEnd({ animated: true });
};

//This is all modal specific stuff: 
const navigation = useNavigation();

  return (
    <Modal transparent visible={visible} animationType="none" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={() => onClose(false)}>
        <Animated.View style={[styles.modalBackground, { opacity: backgroundOpacity }]}>
          <TouchableWithoutFeedback>
            <Animated.View {...panResponder.panHandlers} style={[styles.modalContainer, { opacity: modalOpacity, transform: [{ translateY: modalTranslateY }] }]}>
              <View style={styles.tabBar}/>
              {/* Header: */}
              <PopupHeader numberOfBars={6} activeBars={1} popupHeaderText="Create Fund" onClose={onClose} />
              {/* Content: */}
              <View style={styles.contentVerticalContainer} >
                <Text style={[globalFonts.H3(globalColors.others.white.color), {paddingBottom: 24}]}>Enter your funds name and biography. 🏛️</Text>
                <ScrollView showsVerticalScrollIndicator={false} ref={scrollViewRef}>
                  <TextEntry title="Fund Name" placeholder="e.g. UCL Shorting Fund" showCharacterCount={true} maxLength={20} value1={text1} onChangeText={handleTextChange1} />
                  <TextEntry title="Fund Biography" placeholder="Please enter a small fund bio." showCharacterCount={true} maxLength={150} value2={text2} onChangeText={handleTextChange2} />
                  {/* You need this to make sure keyboard doesnt cover the text: */}
                  <Text style={{paddingTop: 460}}>  </Text>  
                </ScrollView>
              </View>
              {/* TO DO: BACKEND need to send text1 and text2 to the backend storing the new fund name and bio */}
              <BottomButton texts={[text1, text2]} modal={<CreateAFundModal2 visible={modalVisible} onClose={closeModal}/>} onPress={openModal}/>
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
});

export default CreateAFundModal1;
export { text1Value };
export { text2Value };



