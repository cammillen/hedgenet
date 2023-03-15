import React from 'react';
import { ScrollView, Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


function CategorySearchScroller({categories}) {

    const navigation = useNavigation();

    //add navigation to category search
    let categorieslist = [];

    //group categories into sets of 4
    for(let i=0; i<categories.length; i+=Math.ceil(categories.length/4)) {
        const categorySet = categories.slice(i, i+Math.ceil(categories.length/4));
        const categoryRow = categorySet.map((element, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('CategorySearch',{element})}>
                <Text style={styles.textBox}>{element}</Text>
            </TouchableOpacity>
        ));
        categorieslist.push(
            <View key={i} style={styles.row}>{categoryRow}</View>
        );
    }
    
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} alwaysBounceHorizontal={true} >
                <View style={{flexDirection:'column'}}>
                    {categorieslist}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    textBox:{
        ...globalFonts.BodyLarge.semiBold(globalColors.others.white.color),
        marginLeft:8,
        marginRight:8,
        paddingRight:20,
        paddingLeft:20,
        padding:8,
        borderColor:globalColors.others.white.color,
        borderWidth:0.5,
        borderRadius:15,
        minWidth: 100, //minimum width to fit content
    },
    container: {
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft:24,
        marginRight:24,
        paddingBottom:16
    },
});

export default CategorySearchScroller;