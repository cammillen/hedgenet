import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { option } from './CreateAFundModal5'; // Privacy Option Data


function FundSettings() {
    const navigation = useNavigation();
    const icon = option === "Public" ? require("../../assets/icons/PublicFund.png") : require("../../assets/icons/PrivateFund.png");
    
    return (
        <View style={styles.verticalBox}>
            <Text style={[globalFonts.BodyLarge.Bold(globalColors.others.white.color), {paddingBottom: 14}]} >Fund Settings</Text>
            <View style={styles.horizontalBox1}>
                <View style={styles.horizontalBox2}>
                    <Image source={icon} style={styles.icon1} />
                    <Text style={globalFonts.H5(globalColors.others.white.color)}>{option} Fund</Text>
                </View>
                <Image source={require("../../assets/icons/Selected.png")} style={styles.icon2} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    verticalBox:{
        borderBottomColor: globalColors.primary._500.color,
        borderBottomWidth: 1,
        paddingBottom: 15,
    },
    horizontalBox1:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    horizontalBox2:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon1:{
        marginRight: 16,
        width: 48,
        height: 48,
        resizeMode: 'contain',
    },
    icon2:{
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
});

export default FundSettings;