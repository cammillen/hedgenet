import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Modal } from 'react-native';

const screenWidth = Dimensions.get('window').width;

function PopupHeader(props) {
    const navigation = useNavigation();

    const { numberOfBars, activeBars, popupHeaderText, onClose } = props;

    const loadingBars = [];

    for (let i = 0; i < numberOfBars; i++) {
        const isActive = i < activeBars;
        const backgroundColor = isActive ? globalColors.primary._500.color : globalColors.primary._100.color;
        const marginRight = i < numberOfBars - 1 ? 5 : 0;

        loadingBars.push(
            <View key={i} style={{
                width: ((screenWidth-48)-(numberOfBars*5))/numberOfBars,
                height: 6,
                backgroundColor,
                borderRadius: 100,
            }} />
        );
    }

    return (
        <View>
            {/* This is the icons and text and the top: */}
            <View style={styles.topHorizontalBox}>
                <TouchableOpacity onPress={onClose}>
                    <Image source={require('../../assets/icons/BackGreen.png')} style={styles.icon} />
                </TouchableOpacity>
                <View style={styles.headerBox}>
                    <Image source={require('../../assets/icons/3UserWhite.png')} style={styles.topIcon} />
                    <Text style={globalFonts.H5(globalColors.others.white.color)}>{popupHeaderText}</Text>
                </View>
                <TouchableOpacity onPress={onClose}>
                    <Image source={require('../../assets/icons/CloseGreen.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>
            {/* This is the loading bars: */}
            <View style={styles.loadingBars}>
                {loadingBars}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topHorizontalBox:{
        flexDirection: 'row',
        marginLeft: 24, 
        marginRight: 24, 
        justifyContent: 'space-between',
        paddingTop: 20,
    },
    headerBox:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    topIcon:{
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginRight: 10,
    },
    icon:{
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    loadingBars:{
        flexDirection: 'row',
        marginLeft: 24, 
        marginRight: 24, 
        justifyContent: 'space-between',
        paddingTop: 26,
    },
});

export default PopupHeader;
