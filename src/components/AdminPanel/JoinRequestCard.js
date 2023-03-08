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

function JoinRequestCard(params) {
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
                    <Text style={[globalFonts.BodyMedium.Medium(globalColors.others.white.color), { lineHeight: 22 }]}>{params.university} • {params.daysAgoApplied} Days Ago</Text>
                </View>
            </View>
            {/* Remove Button: */}
            {/* TO DO NAVIGATION and LOGIC for accept and reject*/}
            <View>
                <TouchableOpacity style={styles.rejectButton} onPress={() => navigation.navigate('Reject')}>
                    <Text style={[globalFonts.BodyMedium.semiBold(globalColors.others.white.color)]}>Reject</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.acceptButton} onPress={() => navigation.navigate('Accept')}>
                    <Text style={[globalFonts.BodyMedium.semiBold(globalColors.others.white.color)]}>Accept</Text>
                </TouchableOpacity>
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
    rejectButton:{
        marginLeft: 10,
        right: 0,
        paddingLeft: 12,
        paddingRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
        height: 32,
        backgroundColor: globalColors.others.red.color,
        borderRadius: 100,
        borderColor: globalColors.others.red.color,
        borderWidth: 1,
        marginBottom: 10,
    },
    acceptButton:{
        marginLeft: 10,
        right: 0,
        paddingLeft: 12,
        paddingRight: 12,
        justifyContent: 'center',
        height: 32,
        backgroundColor: globalColors.primary._500.color,
        borderRadius: 100,
        borderColor: globalColors.primary._500.color,
        borderWidth: 1,
    },
});

export default JoinRequestCard;