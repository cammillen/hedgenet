import React from 'react';
import { ScrollView, Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LogoSelect from '../assets/logoRequire.js';


function TopMovers({stocks}) {

    const navigation = useNavigation();

    let stocklist = [];
    stocks.forEach(element => stocklist.push(
        <TouchableOpacity key={element.name} style={styles.column} onPress={() => navigation.navigate('StockPage',{stockName: element.name})}>
            <Image source={LogoSelect(element.name)} style={[styles.logoIcon]} />
            <Text style={globalFonts.H6(globalColors.others.white.color)}>{element.ticker}</Text>
            <Text style={globalFonts.H6(globalColors.status[element.growth > 0 ? 'success' : 'error'].color)}>
                {element.growth > 0 ? '+ ' + element.growth : '- ' + String(element.growth).substring(1)}%
            </Text>
        </TouchableOpacity>
    ));
 
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={globalFonts.H5(globalColors.others.white.color)}>Top Movers</Text>
                <Image source={require('../assets/icons/ArrowRightGreen.png')} style={[styles.arrowIcon]} />
            </View>
            <ScrollView horizontal={true} alwaysBounceHorizontal={true} style={{marginLeft:24}}>
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
    column: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 145,
        marginRight:24,
    },
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
        borderColor:globalColors.primary._500.color
    }
});

export default TopMovers;