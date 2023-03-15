import React, { useRef, useEffect, useState } from 'react';
import { Text, Image, Modal, View, StyleSheet, TouchableOpacity, Animated, Dimensions, TouchableWithoutFeedback, PanResponder, KeyboardAvoidingView } from 'react-native';
import { globalColors } from '../../styles/Colors';
import { globalFonts } from '../../styles/Fonts';
import { useNavigation } from '@react-navigation/native';
import PopupHeader from '../SectionHeaders/PopupHeader.js';
import TextEntry from './TextEntry.js';
import TextEntryFinalSlide from './TextEntryFinalSlide.js';
import { ScrollView } from 'react-native-gesture-handler';
import BottomButton from './BottomBotton';
import CreateAFundModal2 from './CreateAFundModal2.js';
import FundCard from '../Dashboard/FundCard';
import { text1Value } from './CreateAFundModal1'; // Fund name data.
import { text2Value } from './CreateAFundModal1'; // Fund Bio Data
import { text3Value } from './CreateAFundModal2'; // University Data
import CreateFundButton from './CreateFundButton.js';
import FundSettings from './FundSettings';

const screenHeight = Dimensions.get('window').height;

function FundTags({categoryList}) {
  let a = [];
  categoryList.forEach(element => a.push(<Text style={styles.textBox}>{element}</Text>));
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} alwaysBounceHorizontal={true} >
        <View style={{flexDirection:'column'}}>{a}</View>
      </ScrollView>
    </View >
    );
};

const CreateAFundModal6 = ({ visible, onClose, categoryList }) => {

  console.log(categoryList);

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

//Code for text entry: - TO DO BACKEND: the text entry is stored in text1 and text2, you need to send this entry to the backend when the user presses the next button. 
const scrollViewRef = useRef();

const [text1, setText1] = useState('');
const handleTextChange1 = (value1) => {
    setText1(value1);
};
const [text2, setText2] = useState('');
const handleTextChange2 = (value2) => {
    setText2(value2);
};
const [text3, setText3] = useState('');
const handleTextChange3 = (value3) => {
    setText3(value3);
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
              <PopupHeader numberOfBars={6} activeBars={6} popupHeaderText="Create Fund" onClose={onClose} />
              {/* Content: */}
              <View style={styles.contentVerticalContainer} >
                <Text style={[globalFonts.H3(globalColors.others.white.color), {paddingHorizontal: 24}]}>Your fund is ready, please review. 🚀</Text>
                {/* TO DO: Need to link this with what has been entered and stored in the form:  */}
                <ScrollView showsVerticalScrollIndicator={false} ref={scrollViewRef}>
                  <FundCard fundTitle={"Personal Fund"} members={"0"} stocks={"0"} marketCap={"£0.00"} fundTags={categoryList}/>
                  <View style={styles.paddingContainer}>
                    <TextEntryFinalSlide title="Fund Name" placeholder={text1Value} showCharacterCount={false} maxLength={20} value={text1} onChangeText={handleTextChange1} />
                    <TextEntryFinalSlide title="Fund Biography" placeholder={text2Value} showCharacterCount={false} maxLength={20} value={text2} onChangeText={handleTextChange2} />
                    <TextEntryFinalSlide title="Affiliated University" placeholder={text3Value} showCharacterCount={false} maxLength={20} value={text3} onChangeText={handleTextChange3} />
                    <FundTags />
                    <FundSettings/>
                    <Text style={{paddingTop: 250}}>  </Text>  
                  </View>
                </ScrollView>
              </View>
              <CreateFundButton/>
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
    // paddingLeft: 24, 
    // paddingRight:24,
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
  paddingContainer:{
    paddingHorizontal: 24,
  },
  textBox:{
    ...globalFonts.BodyLarge.semiBold(globalColors.others.white.color),
    marginRight:16,
    paddingRight:20,
    paddingLeft:20,
    padding:8,
    borderColor:globalColors.others.white.color,
    borderWidth: 1,
    borderRadius: 18,
    minWidth: 100, //minimum width to fit content
  },
  textBoxContainer: {
    flexDirection: 'column',
  },
});

export default CreateAFundModal6;


