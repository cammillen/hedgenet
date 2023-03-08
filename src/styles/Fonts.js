// HOW TO USE IN ANOTHER FILE: 
// At the top of your file import globalFonts: "import { globalFonts } from './src/styles/Fonts.js';" (make sure you have the right file path)
// Then style text using e.g.: "style={globalFonts.H1(globalColors.main.green.color)}" you pass the color prop through to the font from the globalColors file.
// For the nested body fonts use e.g.: "style={globalFonts.BodyXLarge.Bold(globalColors.main.yellow.color)}"
// To add to a stylesheet use:  ...globalFonts.H5(globalColors.others.white.color),

import { StyleSheet } from "react-native";

export const globalFonts = StyleSheet.create({

  H1: (color) =>({
      fontSize: 48,
      fontFamily: 'Urbanist-Bold',
      color: color,
  }),
  H2: (color) =>({
    fontSize: 40,
    fontFamily: 'Urbanist-Bold',
    color: color,
  }),
  H3: (color) =>({
    fontSize: 32,
    fontFamily: 'Urbanist-Bold',
    color: color,
  }),
  H4: (color) =>({
    fontSize: 24,
    fontFamily: 'Urbanist-Bold',
    color: color,
  }),
  H5: (color) =>({
    fontSize: 20,
    fontFamily: 'Urbanist-Bold',
    color: color,
  }),
  H6: (color) =>({
    fontSize: 18,
    fontFamily: 'Urbanist-Bold',
    color: color,
  }),

  BodyXLarge: ({
    Bold: (color) =>({
      fontSize: 18,
      fontFamily: 'Urbanist-Bold',
      color: color,
    }),
    semiBold: (color) =>({
      fontSize: 18,
      fontFamily: 'Urbanist-SemiBold',
      color: color,
    }),
    Medium: (color) =>({
      fontSize: 18,
      fontFamily: 'Urbanist-Medium',
      color: color,
    }),
    Regular: (color) =>({
      fontSize: 18,
      fontFamily: 'Urbanist-Regular',
      color: color,
    }),
  }),
  
  BodyLarge: ({
    Bold: (color) =>({
      fontSize: 16,
      fontFamily: 'Urbanist-Bold',
      color: color,
    }),
    semiBold: (color) =>({
      fontSize: 16,
      fontFamily: 'Urbanist-SemiBold',
      color: color,
    }),
    Medium: (color) =>({
      fontSize: 16,
      fontFamily: 'Urbanist-Medium',
      color: color,
    }),
    Regular: (color) =>({
      fontSize: 16,
      fontFamily: 'Urbanist-Regular',
      color: color,
    }),
  }),

  BodyMedium: ({
    Bold: (color) =>({
      fontSize: 14,
      fontFamily: 'Urbanist-Bold',
      color: color,
    }),
    semiBold: (color) =>({
      fontSize: 14,
      fontFamily: 'Urbanist-SemiBold',
      color: color,
    }),
    Medium: (color) =>({
      fontSize: 14,
      fontFamily: 'Urbanist-Medium',
      color: color,
    }),
    Regular: (color) =>({
      fontSize: 14,
      fontFamily: 'Urbanist-Regular',
      color: color,
    }),
  }),

  BodySmall: ({
    Bold: (color) =>({
      fontSize: 12,
      fontFamily: 'Urbanist-Bold',
      color: color,
    }),
    semiBold: (color) =>({
      fontSize: 12,
      fontFamily: 'Urbanist-SemiBold',
      color: color,
    }),
    Medium: (color) =>({
      fontSize: 12,
      fontFamily: 'Urbanist-Medium',
      color: color,
    }),
    Regular: (color) =>({
      fontSize: 12,
      fontFamily: 'Urbanist-Regular',
      color: color,
    }),
  }),

  BodyXSmall: ({
    Bold: (color) =>({
      fontSize: 10,
      fontFamily: 'Urbanist-Bold',
      color: color,
    }),
    semiBold: (color) =>({
      fontSize: 10,
      fontFamily: 'Urbanist-SemiBold',
      color: color,
    }),
    Medium: (color) =>({
      fontSize: 10,
      fontFamily: 'Urbanist-Medium',
      color: color,
    }),
    Regular: (color) =>({
      fontSize: 10,
      fontFamily: 'Urbanist-Regular',
      color: color,
    }),
  }),

});