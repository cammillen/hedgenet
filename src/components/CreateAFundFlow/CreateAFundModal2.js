import React, { useRef, useEffect, useState } from 'react';
import { Image, Modal, View, StyleSheet, TouchableOpacity, Text, Animated, Dimensions, TouchableWithoutFeedback, PanResponder, KeyboardAvoidingView } from 'react-native';
import { globalColors } from '../../styles/Colors';
import { globalFonts } from '../../styles/Fonts';
import { useNavigation } from '@react-navigation/native';
import PopupHeader from '../SectionHeaders/PopupHeader.js';
import TextEntry from './TextEntry.js';
import { ScrollView } from 'react-native-gesture-handler';
import BottomButton from './BottomBotton';
import UploadImage from './UploadImage.js';
import CreateAFundModal3 from './CreateAFundModal3.js';

let text3Value = '';

const screenHeight = Dimensions.get('window').height;

const CreateAFundModal2 = ({ visible, onClose }) => {
// This is to open next modal: 
    const [modalVisible, setModalVisible] = useState(false);
    const openModal = () => {
      setModalVisible(true);
    };
    const closeModal = () => {
      setModalVisible(false);
    };
//This is all animation stuff, duartion set to 0 for everything for this popup as we want it to be instantaneous: 
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

//Code for text entry: - TO DO BACKEND: the text entry is stored in text1 and text2, you need to send this entry to the backend when the user presses the next button. 
const scrollViewRef = useRef();

const [text3, setText3] = useState('');
const handleTextChange3 = (value3) => {
    setText3(value3);
    text3Value = value3;
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
              {/* Enter content for modal here:  */}
              {/* Header: */}
              <PopupHeader numberOfBars={6} activeBars={2} popupHeaderText="Create Fund" onClose={onClose} />
              {/* Content: */}
              <View style={styles.contentVerticalContainer} >
                <Text style={[globalFonts.H3(globalColors.others.white.color), {paddingBottom: 24}]}>Enter affiliated university and icon. 🚀</Text>
                <ScrollView showsVerticalScrollIndicator={false} ref={scrollViewRef}>
                  <TextEntry title="Affiliated University" placeholder="e.g. LSE" showCharacterCount={false} maxLength={200} value3={text3} onChangeText={handleTextChange3} />
                  <Text style={[globalFonts.BodyLarge.Bold(globalColors.others.white.color),{marginBottom:16}]}>Fund Icon</Text>
                  <Text style={[globalFonts.BodyXLarge.Regular(globalColors.others.white.color),{marginBottom:24}]}>Please upload an icon that is related to the fund you are setting up.</Text>
                  <UploadImage/>
                  {/* You need this to make sure keyboard doesnt cover the text: */}
                  <Text style={{paddingTop: 100}}>  </Text>  
                </ScrollView>
              </View>
              {/* TO DO: BACKEND need to send text1 and text2 to the backend storing the new fund name and bio */}
              <BottomButton texts={[text3]} modal={<CreateAFundModal3 visible={modalVisible} onClose={closeModal}/>} onPress={openModal}/>
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

export default CreateAFundModal2;
export { text3Value };