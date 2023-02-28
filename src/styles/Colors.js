// HOW TO USE IN ANOTHER FILE: 
// At the top of your file import globalColors: "import { globalColors } from './src/styles/Colors.js';" (make sure you have the right path)
// Then style text using e.g.: "style={{ color: globalColors.main.green.color }}"

import { StyleSheet } from "react-native";

export const globalColors = StyleSheet.create({

    primary: {
        _500: {color: '#12D18E'},
        _400: {color: '#41DAA5'},
        _300: {color: '#71E3BB'},
        _200: {color: '#A0EDD2'},
        _100: {color: '#E7FAF4'},
    },

    secondary: {
        _500: {color: '#FFC107'},
        _400: {color: '#FFCD39'},
        _300: {color: '#FFDA6A'},
        _200: {color: '#FFE69C'},
        _100: {color: '#FFF9E6'},
    },
    
    status: {
        success: {color: '#12D18E'},
        disbutton: {color: '#0EA772'},
        warning: {color: '#FFC107'},
        info: {color: '#6949FF'},
        disabled: {color: '#D8D8D8'},
        error: {color: '#F75555'}
    },
    
    greyscale: {
        _900: {color: '#212121'},
        _800: {color: '#424242'},
        _700: {color: '#616161'},
        _600: {color: '#757575'},
        _500: {color: '#9E9E9E'},
        _400: {color: '#BDBDBD'},
        _300: {color: '#E0E0E0'},
        _200: {color: '#EEEEEE'},
        _100: {color: '#F5F5F5'},
        _50: {color: '#FAFAFA'}
    },

    dark: {
        _1: {color: '#181A20'},
        _2: {color: '#1F222A'},
        _3: {color: '#35383F'}
    },

    others: {
        white: {color: '#FFFFFF'},
        black: {color: '#000000'},
        red: {color: '#F44336'},
        pink: {color: '#E91E63'},
        purple: {color: '#9C27B0'},
        deepPurple: {color: '#673AB7'},
        indigo: {color: '#3F51B5'},
        blue: {color: '#2196F3'},
        lightBlue: {color: '#03A9F4'},
        cyan: {color: '#00BCD4'},
        teal: {color: '#009688'},
        green: {color: '#4CAF50'},
        lightGreen: {color: '#8BC34A'},
        lime: {color: '#CDDC39'},
        yellow: {color: '#FFEB3B'},
        amber: {color: '#FFC107'},
        orange: {color: '#FF9800'},
        deepOrange: {color: '#FF5722'},
        brown: {color: '#795548'},
        blueGrey: {color: '#607D8B'}
    },

    background: {
        green: {color: '#F1FDF5'},
        yellow: {color: '#FFFCEB'},
        blue: {color: '#F6F9FF'},
        purple: {color: '#F9F8FF'},
        teal: {color: '#F2FFFD'},
        red: {color: '#FFF7F8'},
        orange: {color: '#FFF8ED'}
    },

    transparent: {
        green: {color: 'rgba(27,172,75,0.08)'},
        yellow: {color: 'rgba(255,211,0,0.08)'},
        blue: {color: 'rgba(36,107,253,0.08)'},
        purple: {color: 'rgba(105,73,255,0.08)'},
        teal: {color: 'rgba(1,155,131,0.08)'},
        red: {color: 'rgba(255,90,95,0.08)'},
        orange: {color: 'rgba(255,152,0,0.08)'},
        cyan: {color: 'rgba(0,188,212,0.08)'}
    },
  });