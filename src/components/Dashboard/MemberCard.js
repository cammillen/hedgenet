// Documentation: 
// This feeds into the FundMembers.js - there isnt anything to change or do on this page, all the backend integration is in Fund Members.
// Just need to add logic for the remove button. 

import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;

function MemberCard(params) {
    const navigation = useNavigation();
    const { width } = Dimensions.get('window');
    
    return (
        <View style={styles.container}>

            <View style={styles.imageTextFlexBox}>
                {/* Image:  */}
                {/* TO DO BACKEND: Connect to backend */}
                <Image source={params.profilePicture} style={styles.profilePicture} />
                {/* Title and Tags Vertical Box:  */}
                <View style={styles.textFlexBox}>
                    <Text style={[globalFonts.H6(globalColors.others.white.color), {marginBottom: 7}]}>{params.name}</Text>
                    <Text style={[globalFonts.BodyMedium.Medium(globalColors.others.white.color), { lineHeight: 22 }]}>{params.admin ? 'Admin • ' : ''}{params.trades} Trades</Text>
                </View>
            </View>

            <View style={styles.textRightContainer}>
                <Text style={[globalFonts.H6(globalColors.others.white.color), {marginBottom: 7}]}>{params.profitLoss}</Text>
               <Text style={ params.perfToDate >= 0 ?  globalFonts.BodyMedium.semiBold(globalColors.primary._500.color) : globalFonts.BodyMedium.semiBold(globalColors.status.error.color)}>{params.perfToDate}%</Text>
            </View>

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
    // make this a set width 
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
    textRightContainer:{
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    graph:{
        marginRight: 20,
        marginLeft: 20,
        width: 63,
        height: 27,
        resizeMode: 'contain',
    },
});

export default MemberCard;