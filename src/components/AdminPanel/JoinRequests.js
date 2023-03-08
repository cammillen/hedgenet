import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions} from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import JoinRequestCard from './JoinRequestCard.js';

function JoinRequests() {
    const navigation = useNavigation();
    
    return (
        <ScrollView>
        {members.map(member => (
            <JoinRequestCard
            key={member.name}
            name={member.name}
            university={member.university}
            daysAgoApplied={member.daysAgoApplied}
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

export default JoinRequests;

const members = [
    {
      name: 'John Doe',
      university: 'University of California, Los Angeles',
      daysAgoApplied: 5,
      profilePicture: require('../../assets/dummyprofilepictures/5.png')
    },
    {
      name: 'Jane Smith',
      university: 'Harvard University',
      daysAgoApplied: 7,
      profilePicture: require('../../assets/dummyprofilepictures/4.png')
    },
    {
      name: 'Bob Johnson',
      university: 'Stanford University',
      daysAgoApplied: 12,
      profilePicture: require('../../assets/dummyprofilepictures/1.png')
    },
    {
      name: 'Sarah Lee',
      university: 'MIT',
      daysAgoApplied: 11,
      profilePicture: require('../../assets/dummyprofilepictures/6.png')
    },
    {
      name: 'Mike Chen',
      university: 'Columbia University',
      daysAgoApplied: 2,
      profilePicture: require('../../assets/dummyprofilepictures/7.png')
    },
    {
        name: 'Jane Gudan',
        university: 'Columbia University',
        daysAgoApplied: 32,
        profilePicture: require('../../assets/dummyprofilepictures/6.png')
    },
  ];