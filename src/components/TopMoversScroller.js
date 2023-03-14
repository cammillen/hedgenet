import React from 'react';
import { ScrollView, Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LogoSelect from '../assets/logoRequire.js';

import DummyStocks from '../assets/stocks/dummyStockData.js';


function TopMovers({stocks}) {

    const navigation = useNavigation();

    let stocklist = [];
    stocks.forEach(element => {
      const growth = ((DummyStocks[element].shareValue - DummyStocks[element].previousValue) / DummyStocks[element].previousValue) * 100;
      const left = element == stocks[0] ? 24 : 0
      stocklist.push(
        <TouchableOpacity key={element} style={styles.column(left)} onPress={() => navigation.navigate('StockPage', {stockName: element})}>
          <Image source={LogoSelect(element)} style={{...styles.logoIcon, borderColor: globalColors.status[growth > 0 ? 'success' : 'error'].color}} />
          <Text style={globalFonts.H6(globalColors.others.white.color)}>{DummyStocks[element].ticker}</Text>
          <Text style={globalFonts.H6(globalColors.status[growth > 0 ? 'success' : 'error'].color)}>
            {growth > 0 ? `+${growth.toFixed(2)}` : `${growth.toFixed(2)}`}%
          </Text>
        </TouchableOpacity>
      );
    });
    
 
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={globalFonts.H5(globalColors.others.white.color)}>Top Movers</Text>
                <TouchableOpacity onPress={() => navigation.navigate('TopMoversSearch')}>
                    <Image source={require('../assets/icons/ArrowRightGreen.png')} style={[styles.arrowIcon]} />
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} alwaysBounceHorizontal={true}>
                    {stocklist}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingBottom: 23, 
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

export default TopMovers;