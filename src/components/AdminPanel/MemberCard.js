// Documentation: 
// This feeds into the FundMembers.js - there isnt anything to change or do on this page, all the backend integration is in Fund Members.
// Just need to add logic for the remove button. 

import React, {useState} from 'react';
import { Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SquareModal from '../SquareModals/SquareModal.js';

const screenWidth = Dimensions.get('window').width;

function MemberCard(params) {
    const navigation = useNavigation();
    const { width } = Dimensions.get('window');
    const [modalVisible, setModalVisible] = useState(false);
    const openModal = () => {
      setModalVisible(true);
    };
    const closeModal = () => {
      setModalVisible(false);
    };
    return (
        <View style={styles.container}>

            <View style={styles.imageTextFlexBox}>
                {/* Image:  */}
                {/* TO DO BACKEND: Connect to backend */}
                <Image source={params.profilePicture} style={styles.profilePicture} />
                {/* Title and Tags Vertical Box:  */}
                <View style={styles.textFlexBox}>
                    <Text style={[globalFonts.H6(globalColors.others.white.color), {marginBottom: 7}]}>{params.name}</Text>
                    <Text style={[globalFonts.BodyMedium.Medium(globalColors.others.white.color), { lineHeight: 22 }]}>{params.admin ? 'Admin • ' : ''}{params.trades} Trades • {params.profitLoss}</Text>
                </View>
            </View>
            {/* Remove Button: */}
            {/* TO DO NAVIGATION: to remove model */}
            <TouchableOpacity style={styles.removeButton} onPress={openModal}>
                <Text style={[globalFonts.BodyMedium.semiBold(globalColors.others.white.color)]}>Remove</Text>
            </TouchableOpacity>
            <SquareModal
                visible={modalVisible}
                mainIconSource={require('../../assets/icons/BinRed.png')}
                title='Remove Group Member.'
                titleColor= {globalColors.status.error.color}
                text='Removing a member from the fund will prevent them from trading.'
                button1Color= {globalColors.dark._3.color}
                button1Text='Cancel'
                button2Color=  {globalColors.status.error.color}
                button2Text='Remove'
                onButton1Press={() => setModalVisible(false)}
                onButton2Press={() => {
                // TO DO: BACKEND add the code that removes the person from the fund. 
                setModalVisible(false);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        paddingBottom: 20,
        borderBottomColor: globalColors.dark._3.color,
        borderBottomWidth: 1,
        backgroundColor: 'rgba(27,172,75,0)',
        marginLeft: 24,
        marginRight: 24
      },
    imageTextFlexBox:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textFlexBox:{
        flex: 1,
    },
    profilePicture:{
        marginRight: 10,
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    removeButton:{
        marginLeft: 10,
        right: 0,
        paddingLeft: 12,
        paddingRight: 12,
        justifyContent: 'center',
        height: 32,
        backgroundColor: globalColors.others.red.color,
        borderRadius: 100,
        borderColor: globalColors.others.red.color,
        borderWidth: 1,
    },
});

export default MemberCard;