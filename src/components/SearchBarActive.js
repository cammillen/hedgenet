import React, { useState, useRef, useEffect } from 'react';
import { Image } from 'react-native';
import { StyleSheet, TextInput, View } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SearchBarActive() {
    const inputRef = useRef(null);
    const [inputText, setInputText] = useState(''); // pass as variable in navigation

    const handleInputChange = (text) => {
        setInputText(text);
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputRef]);

    const navigation = useNavigation();

    return(
        <View style={styles.fullComp}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    source={require('../assets/icons/ArrowLeft_Green.png')}
                    style={styles.ArrowLeft_GreenIcon}
                />      
            </TouchableOpacity>

            <View style={styles.textInput} >
                <Image
                    source={require('../assets/icons/SearchGreen.png')}
                    style={styles.searchIcon}
                />   
                <TextInput 
                    keyboardAppearance='dark'
                    ref={inputRef}
                    selectionColor={globalColors.others.white.color}
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor = {globalColors.others.white.color}
                    color = {globalColors.others.white.color}
                    onChangeText={handleInputChange}
                    value={inputText}
                />
                {/* NAVIGATION Add code for the filter popup when the filter icon is pressed. */}
                <TouchableOpacity onPress={() => navigation.navigate('FilterSearch')}>
                <Image
                    source={require('../assets/icons/Filter.png')}
                    style={styles.filterIcon}
                />
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    fullComp:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 24,
        marginTop: 24,
        marginRight: 24,
    },
    textInput:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        borderWidth: 1,
        borderColor: globalColors.primary._500.color,
        borderRadius: 16,
        paddingLeft: 14,
        paddingRight: 14,
        backgroundColor: '#020E06',
    },
    input:{
        caretColor: globalColors.others.white.color,
        marginLeft: 10,
        flex: 1,
        backgroundColor: globalColors.dark._2.color,
        paddingTop: 18,
        paddingBottom: 18,
        backgroundColor: '#020E06',
        paddingLeft: 3,
        paddingRight: 14,
        fontFamily: 'Urbanist-Regular',
        fontSize: 16,
    },
    searchIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    filterIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    ArrowLeft_GreenIcon: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
    },
});
