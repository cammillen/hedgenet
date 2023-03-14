import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;

function FriendsCard(params) {
    const navigation = useNavigation();
    const { width } = Dimensions.get('window');
    const [invited, setInvited] = useState(false);
    
    const handleInvite = () => {
        setInvited(!invited);
        // TODO: add code to send invite link to friends
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
                    <Text style={[globalFonts.BodyMedium.Medium(globalColors.others.white.color), { lineHeight: 22 }]}>{params.trades} Trades • {params.profitLoss}</Text>
                </View>
            </View>
            {/* Invite Button: */}
            {/* TO DO BACKEND: to send invite link to friends and create a list of those that have been ticked to join the group */}
            <TouchableOpacity style={[styles.inviteButton, invited ? styles.invitedButton : null]} onPress={handleInvite}>
                {invited ? (
                    <>
                        <Image source={require('../../assets/icons/InviteTick.png')} style={{ width: 20, height: 20 }} /> 
                        <Text style={[globalFonts.BodyMedium.semiBold(globalColors.primary._500.color), {marginLeft: 5}]}>Invited</Text>
                    </>
                ) : (
                    <Text style={[globalFonts.BodyMedium.semiBold(globalColors.others.white.color)]}>Invite</Text>
                )}
            </TouchableOpacity>
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
    inviteButton:{
        marginLeft: 10,
        right: 0,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 32,
        backgroundColor: globalColors.primary._500.color,
        borderRadius: 100,
        borderColor: globalColors.primary._500.color,
        borderWidth: 1,
    },
    invitedButton: {
        backgroundColor: globalColors.others.white.color,
        borderColor: globalColors.others.white.color,
    },
});

export default FriendsCard;
