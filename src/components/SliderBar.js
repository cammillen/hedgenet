// This is the slider bar that allows you to navigate through funds for example. 
import React, {Component} from 'react';
import { Image, ScrollView, SafeAreaView } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';


function SliderBar() {
        return (
            
                //<View style={styles.header}>
                    //<View style={{backgroundColor: globalColors.dark._2.color, width: 382, borderColor: globalColors.dark._3.color, borderWidth: 1, alignItems: 'center', padding: 10, borderRadius: 20}}>
                        //<Text style={globalFonts.H2(globalColors.others.white.color)}>Title</Text>
                            
                        <View style={{height:24, marginTop: 20}}>
                            <ScrollView
                                horizontal={true}
                            >
                                <View style={{height:24, width:130, marginLeft: 24, borderWidth:0.5}}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={globalFonts.BodyXLarge.semiBold(globalColors.others.white.color)}>Personal Fund</Text>
                                    </View>
                                </View>
                                <View style={{height:24, width:130, marginLeft: 24, borderWidth:0.5}}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={globalFonts.BodyXLarge.semiBold(globalColors.others.white.color)}>UCL Fintech Fund</Text>
                                    </View>
                                </View>
                                <View style={{height:24, width:130, marginLeft: 20, marginRight: 24, borderWidth:0.5}}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={globalFonts.BodyXLarge.semiBold(globalColors.others.white.color)}>LSE Sustainable Finance Fund</Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    //</View>
                //</View>
        );
    } //added marginRight to final column -- bring it in line w/ 24 pixel margin

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