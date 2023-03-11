// Sliding Bar DOCUMENTATION: 
// 1. At the top of your screen: 'import SliderBar from '../components/SliderBar';' make sure route is correct depending on screen. 
// 2. At the bottom of Screen.js you need to define titles and their associated screens: 
    // const titles = ['Tab Title 1', 'Tab Title 3', 'Tab Title 4'];  This will need to be a backend call. 
    // const screens = [
    //   () => <PageComponent4Tab1/>,
    //   () => <PageComponent4Tab2/>,
    //   () => <PageComponent4Tab3/>,
    // ];
// Make sure your PageComponents are imported at the top of your page. 
// 3. Once you have established titles and components you can then render the sliding bar: "<SliderBar titles={titles} screens={screens} />"
// Make sure you have the library of titles and screens at the bottom of the page.

import React from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchBarInactive from './../SearchBarInactive.js';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { BorderlessButton } from 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator()

const SliderBar = ({ titles, screens, bottomspacing}) =>{

    // This function creates the map from the titles of the screens and their associated pages: 
    const TabScreenList = screens.map((ScreenComponent, index) => {
        return (
          <Tab.Screen
            name={titles[index]}
            component={ScreenComponent}
            key={titles[index]}
          />
        );
      });

    return (
        // These are the Tab Navigator Stylings
        <View style={styles.container}>
            <Tab.Navigator style={styles.tabNavigator}
            sceneContainerStyle={{
                backgroundColor: 'transparent',
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
                    marginLeft: 24,
                    fontFamily: 'Urbanist-SemiBold',
                    fontSize: 18,
                    textTransform: 'none',
                },
                tabBarItemStyle: {
                    flex: 1,
                    width: 'auto',
                    paddingLeft: 35,
                    height: 60
                },
                tabBarIndicatorStyle: { marginLeft: 24, backgroundColor: globalColors.primary._500.color},
            }}>
            {TabScreenList}
            </Tab.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: -5,
        paddingTop: 0,
        flex: 1,
        height: Dimensions.get('window').height + 1000, // adjust the height accordingly
    },
    tabNavigator:{
        flex: 1,
        overflow: 'scroll',
    },
    tabScreen:{
        paddingBottom: 150,
    }
  });

export default SliderBar;