import React from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function TagSelection() {
    const navigation = useNavigation();
    
    return (
        <View>
            <Text>HELLO</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default TagSelection;