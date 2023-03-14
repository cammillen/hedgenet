// Documentation: 
// All of this works, you just need to link const = members at the bottom up witht he backend database and add some logic. 
//TO DO: add an alphabetical sort (very easy)

import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MemberCard from './MemberCard.js';

function Members() {
    const navigation = useNavigation();
    
    return (
        <ScrollView>
        {members.map(member => (
            <MemberCard
            key={member.name}
            name={member.name}
            admin={member.admin}
            trades={member.trades}
            profitLoss={member.profitLoss}
            profilePicture={member.profilePicture}
            />
            ))}
        {/* Below prevents last element being hidden by the bottom menu bar: */}
        <View style={{height: 150}}></View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

});

export default Members;

// Dummy Member Data:
// TO DO: BACKEND 

const members = [
    {
      name: 'John Doe',
      admin: true,
      trades: 123,
      profitLoss: '+£4,223',
      profilePicture: require('../../assets/dummyprofilepictures/1.png')
    },
    {
      name: 'Jane Smith',
      admin: true,
      trades: 20,
      profitLoss: '-£1521',
      profilePicture: require('../../assets/dummyprofilepictures/2.png')
    },
    {
        name: 'Drew Pepenase',
        admin: false,
        trades: 212,
        profitLoss: '-£2302',
        profilePicture: require('../../assets/dummyprofilepictures/3.png')
      },
      {
        name: 'Mark Johnson',
        admin: false,
        trades: 319,
        profitLoss: '+£12209',
        profilePicture: require('../../assets/dummyprofilepictures/4.png')
      },
      {
        name: 'Lena Park',
        admin: true,
        trades: 77,
        profitLoss: '-£348',
        profilePicture: require('../../assets/dummyprofilepictures/5.png')
      },
      {
        name: 'Adam Davis',
        admin: false,
        trades: 128,
        profitLoss: '-£1967',
        profilePicture: require('../../assets/dummyprofilepictures/6.png')
      },
      {
        name: 'Eva Chen',
        admin: true,
        trades: 244,
        profitLoss: '+£6432',
        profilePicture: require('../../assets/dummyprofilepictures/7.png')
      }
    // Add more members as needed...
  ];

  