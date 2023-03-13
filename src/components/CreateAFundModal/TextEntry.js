// TEXT ENTRY DOCUMENTATION W/ EXAMPLE: 
// Put this in your function for each text input:
    // const [text1, setText1] = useState('');
    // const [text2, setText2] = useState('');
    // const handleTextChange1 = (value) => {
    //     setText1(value);
    // };
    // const handleTextChange2 = (value) => {
    // setText2(value);
    // };

// With the bottom one with the scroll function: 
//     const handleTextChange2 = (value) => {
//         setText2(value);
//         scrollViewRef.current.scrollToEnd({ animated: false });
//     };

// Then render your text input components: 
    // <ScrollView showsVerticalScrollIndicator={false} ref={scrollViewRef}>
    //     <TextEntry title="Fund Name" placeholder="e.g. UCL Shorting Fund" showCharacterCount={true} maxLength={20} value={text1} onChangeText={handleTextChange1} />
    //     <TextEntry title="Fund Biography" placeholder="Please enter a small fund bio." showCharacterCount={false} maxLength={200} value={text2} onChangeText={handleTextChange2} />
    //     <Text style={{paddingTop: 460}}>  </Text>  
    // </ScrollView>
// Make sure value={} and onChangeText={} have a numbered input that matches the const listed above, and make sure you have the scroll view settings sorted. 

import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, Keyboard } from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';

function TextEntry(params) {
    const navigation = useNavigation();
    const { maxLength, showCharacterCount } = params;
    const [count, setCount] = useState(0);
    const handleTextChange = (value) => {
        setCount(value.length);
        params.onChangeText(value);
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={globalFonts.BodyLarge.Bold(globalColors.others.white.color)}>{params.title}</Text>
                {showCharacterCount && <Text style={styles.counter}>Characters: {count}/{maxLength}</Text>}
            </View>
            <TextInput
                style={styles.input}
                maxLength={maxLength}
                placeholder={params.placeholder}
                placeholderTextColor={globalColors.greyscale._500.color}
                value={params.value}
                onChangeText={handleTextChange}
                multiline={true}
                onSubmitEditing={Keyboard.dismiss}
                returnKeyType="done"
                blurOnSubmit={true}
                scrollEnabled={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingBottom: 24,
    },

    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    counter: {
        ...globalFonts.BodyMedium.semiBold(globalColors.primary._500.color),
    },
    input: {
        ...globalFonts.H4(globalColors.others.white.color),
        height: 'auto',
        marginTop: 15,
        borderBottomColor: globalColors.primary._500.color,
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    inputText: {
        marginTop: 10,
    },
});

export default TextEntry;
