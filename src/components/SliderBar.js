// This is the slider bar that allows you to navigate through funds for example. 
import React, {Component} from 'react';
import { Image, ScrollView, SafeAreaView } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';


function SliderBar() {
        return (
            
                <View style={styles.header}>
                    <View style={{backgroundColor: globalColors.dark._2.color, width: 382, borderColor: globalColors.dark._3.color, borderWidth: 1, alignItems: 'center', padding: 10, borderRadius: 20}}>
                        <Text style={globalFonts.H2(globalColors.others.white.color)}>Title</Text>
                            
                        <View style={{height:50, marginTop: 20}}>
                            <ScrollView
                                horizontal={true}
                            >
                                <View style={{height:80, width:130, marginLeft: 24, borderWidth:0.5}}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={globalFonts.H4(globalColors.others.white.color)}>Option 1</Text>
                                    </View>
                                </View>
                                <View style={{height:50, width:130, marginLeft: 24, borderWidth:0.5}}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={globalFonts.H4(globalColors.others.white.color)}>Option 2</Text>
                                    </View>
                                </View>
                                <View style={{height:50, width:130, marginLeft: 20, borderWidth:0.5}}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={globalFonts.H4(globalColors.others.white.color)}>Option 3</Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </View>
        );
    }

    const styles = StyleSheet.create({
        header: {
          flewDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          backgroundColor: globalColors.others.black.color,
        },
        subHeader: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10
      }
      });
export default SliderBar;