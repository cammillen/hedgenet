import React from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchBarInactive from './SearchBarInactive.js';
import PositionsLoop from './PositionsLoop.js';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { BorderlessButton } from 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator()

const TabNavigator = () =>{

    return (
        // These are the Tab Navigator Stylings
        <View style={styles.container}>
            <Tab.Navigator style={styles.tabNavigator}
            sceneContainerStyle={{
                backgroundColor: 'transparent',
                marginLeft: -12,
            }}
            tabBarOptions={{
                    scrollEnabled: true,
                    backgroundColor: 'transparent',
            }}
            screenOptions={{
                tabBarActiveTintColor: globalColors.primary._500.color,
                tabBarInactiveTintColor: globalColors.greyscale._700.color,
                tabBarStyle: { backgroundColor: 'transparent' },
                tabBarLabelStyle: {
                    fontFamily: 'Urbanist-SemiBold',
                    fontSize: 18,
                    textTransform: 'none',
                },
                tabBarItemStyle: {
                    flex: 1,
                    width: 'auto',
                    paddingLeft: 20,
                    paddingRight: 20,
                    height: 60
                },
                tabBarIndicatorStyle: {backgroundColor: globalColors.primary._500.color},
                contentStyle: {paddingRight: 100},
            }}>
               {/* TO DO: Need to create the loop to display each fund and then integrate stocks with the backend */}
                <Tab.Screen name='Personal' component={() => <PositionsLoop stocks={['Tesla', 'Blackberry', 'Coca-Cola','Netflix','Apple']} />}/>
                <Tab.Screen name='UCL FinTech Fund' component={() => <PositionsLoop stocks={['Amazon','Advanced Micro Devices','Dell','LG','Meta']} />}/>
                <Tab.Screen name='LSE Sustainable Finance Fund' component={() => <PositionsLoop stocks={['Microsoft','Sony','Spotify','Tesla']} />}/>
            </Tab.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        flex: 1,
        height: Dimensions.get('window').height + 1000, // adjust the height accordingly
    },
    tabNavigator:{
        flex: 1,
        overflow: 'scroll',
        marginLeft: 24,
    },
  });

export default TabNavigator;