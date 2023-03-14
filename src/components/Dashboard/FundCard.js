// Fund Card DOCUMENTATION: 
// There are no changes here, the backend integration comes when you call the function. 
// How to call: <FundCard fundTitle={"Personal Fund"} members={"12"} stocks={"6"} marketCap={"£12,290,97"} fundTags={['UCL', 'FinTech', 'S&P 500']}/>

import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function FundCard(props) {
  const { fundTitle, members, stocks, marketCap, fundTags } = props;
    // This is navigation function so that when they press on the fund it goes to the fund profile page:

    const navigation = useNavigation();

    // This is the function to render the set of 3 fund tags: 

    const renderFundTags = () => {
      const rows = [];
      for (let i = 0; i < fundTags.length; i += 3) {
        const fundTagRow = [];
        for (let j = i; j < i + 3 && j < fundTags.length; j++) {
          fundTagRow.push(
            <View style={styles.fundTag} key={j}>
              <Text style={[globalFonts.BodyXSmall.semiBold(globalColors.primary._500.color)]}>{fundTags[j]}</Text>
            </View>
          );
        }
        rows.push(<View style={styles.fundTagRow} key={i}>{fundTagRow}</View>);
      }
      return rows;
    };

    // This is the main layout: 
    
    return (
        <TouchableOpacity style={styles.header} onPress={() => navigation.navigate('FundProfile')}>
            
            {/* This Fund Profile Image */}
            <Image
              source={require('../../assets/icons/ProfilePlaceholder.png')} // BACKEND TO DO: backend integration with profile picture. 
              style={[styles.profileIcon]}
            />

            {/* This is the vertical flex box for Fund title, members, stocks and tags */}
            <View style={styles.leftVerticalFlex}>
                {/* Need to endogenise the title: */}
                <Text style={[globalFonts.H6(globalColors.others.white.color), {marginBottom: 5}]}>{fundTitle}</Text>
                {/* Need to endogenise the text below: */}
                <Text style={[globalFonts.BodyMedium.Medium(globalColors.others.white.color), {marginBottom: 10}]}>{members} Members • {stocks} Stocks</Text>
                {/* Fund Tags: */}
            <View style={styles.tagContainer}>
                {renderFundTags()}
            </View>
            </View>

            {/* This is the vertical flex box for Market cap and value */}
            <View style={styles.rightVerticalFlex}>
                <Text style={[globalFonts.BodyMedium.Medium(globalColors.others.white.color), {marginBottom: 8}]}>Market Cap</Text>
                {/* Need to endogenise fund value: */}
                <Text style={globalFonts.H6(globalColors.others.white.color)}>{marketCap}</Text>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 15,
        paddingTop: 24,
      },
    profileIcon: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        marginRight: 20,
    },
    leftVerticalFlex:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginRight: 20,
    },
    rightVerticalFlex:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: "flex-end"
    },
    fundTag:{
        alignSelf: 'flex-start',
        paddingLeft: 8,
        paddingRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
        height: 24,
        borderRadius: 6,
        borderColor: globalColors.primary._500.color,
        borderWidth: 1,
        marginRight: 8,
    },
    tagContainer: {
        alignItems: 'flex-start',
        justifyContent: 'space-between',
      },
      fundTagRow: {
        flexDirection: 'row',
        marginBottom: 10,
      },
});

export default FundCard;

