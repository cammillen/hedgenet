// HOW TO USE IN ANOTHER FILE: 
// At the top of your file import globalColors: "import { globalColors } from './src/styles/Colors.js';"
// Then style text using e.g.: "style={{ color: globalColors.main.green.color }}"

import { StyleSheet } from "react-native";

export const globalColors = StyleSheet.create({

    main: {
        green: {color: '#12D18E'},
        yellow: {color: '#FFC107'}
    },

    status: {
        green: {color: '#12D18E'},
        disGreen: {color: '#0EA772'},
        yellow: {color: '#FFC107'},
        blue: {color: '#6949FF'},
        grey: {color: '#D8D8D8'},
        red: {color: '#F75555'}
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

    transparent: {
        green: {color: '#12D18E'},
        teal: {color: '#019B83'},
        yellow: {color: '#FFD300'},
        blue: {color: '#246BFD'},
        purple: {color: '#6949FF'},
        red: {color: '#FF5A5F'},
        orange: {color: '#FF9800'},
        cyan: {color: '#00BCD4'}
    },

    background: {
        green: {color: '#F1FDF5'},
        teal: {color: '#F2FFFD'},
        yellow: {color: '#FFFCEB'},
        blue: {color: '#F6F9FF'},
        purple: {color: '#F9F8FF'},
        red: {color: '#FFF7F8'},
        orange: {color: '#FFF8ED'}
    },

    other: {
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
    }
  });