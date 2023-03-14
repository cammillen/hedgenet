import React from 'react';
import { ScrollView, Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import fundImageSelect from '../assets/fundImageRequire.js';

import DummyFunds from '../assets/funds/dummyFundData.js';

function TopPerformers({funds}) {
    const navigation = useNavigation();

    let fundlist = [];

    funds.forEach(element => {
      const name = element.length < 13 ? element : element.substring(0,12) + '...';
      const left = element == funds[0] ? 24 : 0
      const growth = ((DummyFunds[element].fundValue - DummyFunds[element].previousValue) / DummyFunds[element].previousValue) * 100;
      fundlist.push(
        <TouchableOpacity key={element} style={styles.column(left)} onPress={() => {/* Individual Fund Page */}}>
          <Image source={fundImageSelect(element)} style={{...styles.logoIcon, borderColor: globalColors.status[growth > 0 ? 'success' : 'error'].color}} />
          <Text style={styles.topText}>{name}</Text>
          <Text style={globalFonts.BodyMedium.semiBold(globalColors.status[growth > 0 ? 'success' : 'error'].color)}>
            {growth > 0 ? `+${growth.toFixed(2)}` : `${growth.toFixed(2)}`}%
          </Text>
        </TouchableOpacity>
      );
    });
    
    return (
        <View style={styles.container}>
            {/* This is the vertical flex box with all the data:  */}
            <ScrollView horizontal={true}>
            {fundlist}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingBottom: 23, 
    },
    topText:{
        ...globalFonts.H6(globalColors.others.white.color),
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 80,
        //lineHeight: 25,
    },
    column: (left) =>({
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 145,
        marginRight:24,
        marginLeft:left
    }),
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft:24,
        marginRight:24,
        paddingBottom:16
    },
    arrowIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    logoIcon: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        borderRadius:100,
        borderWidth:4,
    }
});

export default TopPerformers;