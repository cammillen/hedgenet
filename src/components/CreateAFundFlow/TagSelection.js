import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import categoryList from '../../assets/categories.js';

function selectDeselect(e, s, ss) {
    if (s.includes(e)) {
        ss(s.filter(item => item !== e));
        return ;
    }
    if (s.length == 3) { return ; }
    ss([...s, e]);
};

function TagSelection({c1,c2,w,selected, setSelected}) {
    const navigation = useNavigation();

    let categories = [];

    //group categories into sets of 6
    for(let i=0; i<categoryList.length; i+=Math.ceil(categoryList.length/6)) {
        const categorySet = categoryList.slice(i, i+Math.ceil(categoryList.length/6));
        const categoryRow = categorySet.map((element, index) => (
            <TouchableOpacity key={index} onPress={() => selectDeselect(element, selected, setSelected)}>
                <Text style={styles.textBox(
                    c1 = selected.includes(element) ? 'primary' : 'dark',
                    c2 = selected.includes(element) ? '_500' : '_3',
                    w = selected.includes(element) ? 0.5 : 0.2
                )}>{element}</Text>
            </TouchableOpacity>
        ));
        categories.push(
            <View key={i} style={styles.row}>{categoryRow}</View>
        );
    }
    //console.log(selected);
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} alwaysBounceHorizontal={true} >
                <View style={{flexDirection:'column'}}>
                    {categories}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    textBox: (c1,c2,w) => ({
        ...globalFonts.BodyLarge.semiBold(globalColors.others.white.color),
        marginRight:16,
        paddingRight:20,
        paddingLeft:20,
        padding:8,
        borderColor:globalColors[c1][c2].color,
        borderWidth: 1,
        borderRadius: 18,
        minWidth: 100, //minimum width to fit content
    }),
    container: {
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom:16
    },
});

export default TagSelection;