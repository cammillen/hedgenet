import React, { useRef, useEffect } from 'react';
import { Image, Modal, View, StyleSheet, TouchableOpacity, Text, Animated, Dimensions, TouchableWithoutFeedback, PanResponder } from 'react-native';
import { globalColors } from '../styles/Colors';
import { globalFonts } from '../styles/Fonts';
import { useNavigation } from '@react-navigation/native';
import CreateAFundModal1 from './CreateAFundFlow/CreateAFundModal1';
import { useState } from 'react';

const KeyActionsModal = ({ visible, onClose, navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const closeAllModals = () => {
    setModalVisible(false);
    navigation.navigate("Home");
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

  //this is all fine
  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(modalOpacity, {
          toValue: 1,
          duration: 500,
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
          duration: 500,
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
// END OF ANIMATION

//This is all modal specific stuff: 

  return (
  <Modal transparent visible={visible} animationType="none" onRequestClose={onClose}>
    <TouchableWithoutFeedback onPress={() => onClose(false)}>
      <Animated.View style={[styles.modalBackground, { opacity: backgroundOpacity }]}>
        <TouchableWithoutFeedback>
          {/* This is flex box with content:  */}
          <Animated.View {...panResponder.panHandlers} style={[styles.modalContainer, { opacity: modalOpacity, transform: [{ translateY: modalTranslateY }] }]}>
            <View style={styles.tabBar}/>   
            <Text style={styles.text}>Key Actions</Text>
            <View style={styles.verticalBox}>
            {/* Create a Fund: */}
            <TouchableOpacity style={[ styles.horizontalOuterBox, {paddingTop: 24}]} onPress={openModal}>
              <View style={styles.horizontalInnerBox}>
                  <Image
                      source={require('../assets/icons/CreateAFund.png')}  
                      style={[styles.icon]}
                  />
                  <Text style={globalFonts.H6(globalColors.others.white.color)}>Create a Fund</Text>
              </View>
              <Image
                      source={require('../assets/icons/ArrowRightWhite.png')}  
                      style={[styles.arrowIcon]}
              />
            </TouchableOpacity>
            <CreateAFundModal1 visible={modalVisible} onClose={closeModal} allClose={closeAllModals} />
            {/* Browse Funds: */}
            <TouchableOpacity style={[ styles.horizontalOuterBox, {paddingTop: 24}]} onPress={() => navigation.navigate('Browse')}>
            <View style={styles.horizontalInnerBox}>
                <Image
                    source={require('../assets/icons/BrowseFunds.png')}
                    style={[styles.icon]}
                />
                <Text style={globalFonts.H6(globalColors.others.white.color)}>Browse Funds</Text>
            </View>
            <Image
                    source={require('../assets/icons/ArrowRightWhite.png')}  
                    style={[styles.arrowIcon]}
            />
            </TouchableOpacity>
            {/* Create a Post: */}
            <TouchableOpacity style={[ styles.horizontalOuterBox, {paddingTop: 24}]} onPress={() => navigation.navigate('CreateAPost')}>
              <View style={styles.horizontalInnerBox}>
                  <Image
                      source={require('../assets/icons/CreateAPost.png')}  
                      style={[styles.icon]}
                  />
                  <Text style={globalFonts.H6(globalColors.others.white.color)}>Create a Post</Text>
              </View>
              <Image
                      source={require('../assets/icons/ArrowRightWhite.png')}  
                      style={[styles.arrowIcon]}
              />
            </TouchableOpacity>
          </View>
          </Animated.View>
          {/* This is end of flex box with content.*/}
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
    height: 'auto',
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
  text:{
    ...globalFonts.H5(globalColors.others.white.color),
    marginLeft: 24,
    marginTop: 20,
  },
  verticalBox:{
    flexDirection: 'column',
    marginLeft: 24, 
    marginRight: 24, 
  },
  horizontalOuterBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  horizontalInnerBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 20,
},
arrowIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
},
});

export default KeyActionsModal;