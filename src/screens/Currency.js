import React, {useState} from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import { StatusBar } from 'react-native';
import { Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopMenuBar from '../components/TopMenuBar.js';
import Background from '../components/Background.js';
import { useNavigation } from '@react-navigation/native';
import BottomMenuBar from '../components/BottomMenuBar.js';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { RadioButton } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';


export default function Currency () {
  
  const Screen = 'Currency';

  
  SplashScreen.preventAutoHideAsync(); 

  const navigation = useNavigation();
  const windowHeight = Dimensions.get('window').height;
  const currencies = [
    { label: '$ (USD) US Dollar', value: 'usd' },
    { label: '£ (GBP) Great British Pound', value: 'gbp' },
    { label: '€ (EUR) Euro  ', value: 'eur' },
    { label: '$ (AUR) Australian Dollar', value: 'aur' },
    { label: '¥ (YUA) Chinese Yuan', value: 'yua' },
    { label: 'Fr (CHF) Swiss Franc', value: 'chf' },
    { label: '¥ (JPY) Japanese Yen', value: 'jpy' },
    { label: 'sk (SEK) Swedish Krona', value: 'sek' },
    { label: '₽ (RUS) Russian Ruble', value: 'rus' },
  ];
  const [currency, setCurrency] = useState('gbp');
  return ( 
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container} >
        <TopMenuBar screen={Screen} />
        <View style={styles.fullComp}>
          <TouchableOpacity  onPress={() => navigation.goBack()}>
                <Image
                    source={require('../assets/icons/ArrowLeft_Green.png')}
                    style={styles.ArrowLeft_GreenIcon}
                />      
          </TouchableOpacity>
          <Text style={[globalFonts.H4(globalColors.others.white.color), {marginLeft:16}]}>Currency</Text>
        </View>
        <View style={styles.toptextbox}>
        <Text style={[globalFonts.H5(globalColors.others.white.color)]}>Suggested</Text>
        <View style={{ display: 'flex', flexDirection: 'column' }}>
        {currencies.slice(0, 2).map((item) => (
        <View key={item.value} style={[styles.radioButton]}>
          <Text style={globalFonts.BodyMedium.Medium(globalColors.others.white.color)}>{item.label}</Text>
          <RadioButton
            value={item.value}
            color= {globalColors.status.success.color}
            status={currency === item.value ? 'checked' : 'unchecked'}
            onPress={() => setCurrency(item.value)}
            borderColor= {globalColors.status.success.color}
            uncheckedColor = {globalColors.status.success.color}
          />
        </View>
          ))}
          </View> 
          <Text style={[globalFonts.H5(globalColors.others.white.color), { marginTop: 48 }]}>Currencies</Text>
          <View style={{ height: 380,display: 'flex', flexDirection: 'row' }}>
          <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom:100 }}> 
          {currencies.slice(2).map((item) => (
            <View key={item.value} style={styles.radioButton}>
              <Text style={globalFonts.BodyMedium.Medium(globalColors.others.white.color)}>{item.label}</Text>
              <RadioButton
                value={item.value}
                color={globalColors.status.success.color}
                status={currency === item.value ? 'checked' : 'unchecked'}
                onPress={() => setCurrency(item.value)}
                borderColor={globalColors.status.success.color}
                uncheckedColor={globalColors.status.success.color}
                style={{ flexDirection: 'row',alignSelf: 'flex-end' }}
              />
            </View>
          ))}
          </ScrollView>
          </View>
        </View>  
        <View style={styles.bottomMenuBarContainer}>
          <BottomMenuBar />
        </View> 
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  fullComp:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 24,
    marginTop: 24,
    marginRight: 24,
  },
  container: {
    flex: 1,
  },
  ArrowLeft_GreenIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  bottomMenuBarContainer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -5,
    marginLeft: 5,
  },
  toptextbox: {
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
    marginTop: 24,
    marginLeft: 24,
    height: 162,
    //paddingTop: 26,
  },
  bottombox:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 24,
    marginLeft: 24,
    marginRight:24
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24
  },
  buttonImage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height:56,
    width:56
  },
  divider: {
    ...globalColors.dark._3.color,
    height: 10,
    marginTop: 84,
  },
  image1: {
    width:100,
    height: 66.55,
  },
  textbox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 20
  },
  radioButton: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    height: 20,
  },
})