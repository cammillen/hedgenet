// This page displays all the group members of the fund. 
import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopMenuBar from '../TopMenuBar.js';
import Background from '../Background.js';
import BottomMenuBar from '../BottomMenuBar.js';
import TextWithSortArrowBack from '../SectionHeaders/TextWithSortArrowBack.js';
import MemberCard from './MemberCard.js';

export default function FundMembers () {

  const Screen = 'Dashboard';

  const [fontsLoaded] = useFonts({
    'Urbanist-Bold': require('../../assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist-SemiBold': require('../../assets/fonts/Urbanist-SemiBold.ttf'),
    'Urbanist-Medium': require('../../assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist-Regular': require('../../assets/fonts/Urbanist-Regular.ttf'),
  });

  SplashScreen.preventAutoHideAsync(); 

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return ( 
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container} onLayout={onLayoutRootView}>
        <TopMenuBar screen={Screen} />
        <TextWithSortArrowBack title="Fund Members" navigatePage="Dashboard" rightTitle="Asc. Order"/>
        <ScrollView>
        {members.map(member => (
            <MemberCard
            key={member.name}
            name={member.name}
            admin={member.admin}
            trades={member.trades}
            profitLoss={member.profitLoss}
            perfToDate={member.perfToDate}
            profilePicture={member.profilePicture}
            />
            ))}
        {/* Below prevents last element being hidden by the bottom menu bar: */}
        <View style={{height: 150}}></View>
        </ScrollView>
        <View style={styles.bottomMenuBarContainer}>
          <BottomMenuBar />
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomMenuBarContainer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -5,
    marginLeft: 5,
  },
});

const members = [
  {
    name: 'John Doe',
    admin: true,
    trades: 1314,
    profitLoss: '+£4,223',
    perfToDate: '+23.2',
    profilePicture: require('../../assets/dummyprofilepictures/1.png' )
  },
  {
    name: 'Jane Smith',
    admin: true,
    trades: 20,
    profitLoss: '-£1521',
    perfToDate: '-13.2',
    profilePicture: require('../../assets/dummyprofilepictures/2.png')
  },
  {
      name: 'Drew Pepenase',
      admin: false,
      trades: 212,
      profitLoss: '-£2302',
      perfToDate: '-32.2',
      profilePicture: require('../../assets/dummyprofilepictures/3.png'),
    },
    {
      name: 'Mark Johnson',
      admin: false,
      trades: 319,
      profitLoss: '+£12209',
      perfToDate: '+19.2',
      profilePicture: require('../../assets/dummyprofilepictures/4.png')
    },
    {
      name: 'Lena Park',
      admin: true,
      trades: 77,
      profitLoss: '-£348',
      perfToDate: '+19.1',
      profilePicture: require('../../assets/dummyprofilepictures/5.png')
    },
    {
      name: 'Adam Davis',
      admin: false,
      trades: 128,
      profitLoss: '-£1967',
      perfToDate: '-22.3',
      profilePicture: require('../../assets/dummyprofilepictures/6.png')
    },
    {
      name: 'Eva Chen',
      admin: true,
      trades: 244,
      profitLoss: '+£6432',
      perfToDate: '+19.2',
      profilePicture: require('../../assets/dummyprofilepictures/7.png')
    }
  // Add more members as needed...
];

