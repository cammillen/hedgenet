// Sqaure Modal Documentation: 
// 1. Imports: 
      // import SquareModal from '../SquareModal.js'; (make sure you have path correct)
      // import { NavigationContainer } from '@react-navigation/native';
// 2. Make sure you have the following at the top of your component function: 
      // const navigation = useNavigation();
      // const [modalVisible, setModalVisible] = useState(false);
      // const openModal = () => {
      //   setModalVisible(true);
      // };
      // const closeModal = () => {
      //   setModalVisible(false);
      // };
// 3. Example Usage: 
        // <TouchableOpacity style={styles.removeButton} onPress={openModal}>
        // <Text style={[globalFonts.BodyMedium.semiBold(globalColors.others.white.color)]}>Remove</Text>
        // </TouchableOpacity>
  // This code goes directly below the end of the touchable opacity tag: 
        // <SquareModal
        // visible={modalVisible}
        // mainIconSource={require('../../assets/icons/BinRed.png')}
        // title='Remove Group Member.'
        // titleColor= {globalColors.status.error.color}
        // text='Removing a member from the fund will prevent them from trading.'
        // button1Color= {globalColors.dark._3.color}
        // button1Text='Cancel'
        // button2Color=  {globalColors.status.error.color}
        // button2Text='Remove'
        // onButton1Press={() => setModalVisible(false)}
        // onButton2Press={() => {
        // // TO DO: BACKEND add the code that removes the person from the fund. 
        // setModalVisible(false);
        // }}
        // />

import React from 'react';
import { Modal, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { globalColors } from '../../styles/Colors';
import { globalFonts } from '../../styles/Fonts';

const SquareModal = (props) => {
  return (
    <Modal visible={props.visible} animationType='fade' transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image source={props.mainIconSource} style={styles.mainIcon} />
          <Text style={[styles.title, { color: props.titleColor }]}>{props.title}</Text>
          <Text style={styles.text}>{props.text}</Text>
          <TouchableOpacity style={[styles.button, { backgroundColor: props.button1Color }]} onPress={props.onButton1Press}>
            <Text style={styles.buttonText}>{props.button1Text}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: globalColors.dark._1.color,
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
    borderRadius: 52,
  },
  mainIcon: {
    width: 180,
    height: 180,
    resizeMode: 'contain'
  },
  title: {
    ...globalFonts.H4(),
    textAlign: 'center',
    marginTop: 32,
    marginBottom: 16,
  },
  text: {
    ...globalFonts.BodyLarge.Regular(globalColors.others.white.color),
    textAlign: 'center',
    marginBottom: 24
  },
  button: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    padding: 15,
    marginVertical: 10,
    width: '100%'
  },  
  buttonText: {
    ...globalFonts.BodyLarge.Bold(globalColors.others.white.color),
  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginRight: 10
  }
});

export default SquareModal;
