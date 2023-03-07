import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function FundGraph() {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <Image
            source={require('../../assets/graphs(delete)/FundGraphPlaceholder.png')} style={styles.graph}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginLeft: -10,
        paddingBottom: 24
    },
    graph:{
        marginLeft: 5,
        width: 390,
        height: 187,
        resizeMode: 'contain'
    }
});

export default FundGraph;