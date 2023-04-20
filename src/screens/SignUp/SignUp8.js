import React from 'react';
import { View, StyleSheet, Image, Button, Text } from 'react-native';
import { StatusBar, Dimensions } from 'react-native';
import { useCallback, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopMenuBar from '../../components/TopMenuBar.js';
import Background from '../../components/Background.js';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Checkbox } from 'react-native-paper';

const screenWidth = Dimensions.get('window').width;

export default function SignUp8 () {

  const Screen = 'Sign Up';
  const navigation = useNavigation();
  const [tandc, setTandc] = useState([
    { label: 'I certify that I am a resident of the United Kingdom.', checked: false},
    { label: 'I am not currently or formerly a politically exposed person or public official.', checked: false},
    { label: 'I am not working at and do not have family members working at Hedgenet.', checked: false},
    { label: 'I have read, understood and agree to be bound by all terms, disclosures, certifications, and disclaimers applicable to me, as found on the legal page of the Hedgenet website.', checked: false}]);

  const [fontsLoaded] = useFonts({
    'Urbanist-Bold': require('../../assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist-SemiBold': require('../../assets/fonts/Urbanist-SemiBold.ttf'),
    'Urbanist-Medium': require('../../assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist-Regular': require('../../assets/fonts/Urbanist-Regular.ttf'),
  });

  const handleCheckboxPress = (index) => {
    const newTandc = [...tandc];
    newTandc[index].checked = !newTandc[index].checked;
    setTandc(newTandc);
  };
  
  const tandcElements = tandc.map((item, index) => (
    <View key={index} style={[styles.checkboxContainer, {flexDirection: 'row'}, {alignItems: 'center'},  {justifyContent: 'flex-start'}, {marginLeft: -24}]}>
      <Checkbox.Item
        label=''
        status={item.checked ? 'checked' : 'unchecked'}
        onPress={() => handleCheckboxPress(index)}
        color={globalColors.status.success.color}
      />
      <Text style={[globalFonts.BodyLarge.Bold(globalColors.others.white.color), {marginRight: 68}]}>{item.label}</Text>
    </View>
  ));

  const allChecked = tandc.every(item => item.checked);

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
        <View style={styles.toptextbox}>
            <View style={styles.fullComp}>
              <TouchableOpacity  onPress={() => navigation.goBack()}>
                      <Image
                          source={require('../../assets/icons/ArrowLeft_Green.png')}
                          style={styles.ArrowLeft_GreenIcon}
                      />      
              </TouchableOpacity>
            </View>
            <View style={styles.questionbox}>
              <View style={[{display: 'flex'}, {flexDirection: 'column'}, {alignItems: 'flex-start'}]}>
                <Text style={globalFonts.H3(globalColors.others.white.color)}>By checking the box, you agree to our terms and conditions 📜</Text>
              </View>    
            </View>
            {tandcElements}
        </View> 
      </View>
      <View style={styles.bottomgreybutton}>
          <TouchableOpacity style={styles.continuebutton} onPress={() => {if (allChecked) { console.log(`Allchecked: ${allChecked}`)}; {navigation.navigate('SignUp9');}}} disabled={!allChecked}>
              <Text style={[globalFonts.BodyLarge.Bold(globalColors.others.white.color), {marginLeft: 16}]}>Continue</Text>
          </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toptextbox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 26,
    //marginRight: 24,
    marginLeft: 24
  },
  ArrowLeft_GreenIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  fullComp:{
    position: 'absolute',
    width: 28,
    height: 28,
    left: 0,
    top: 28.5,
  },
  bottomgreybutton:{
    backgroundColor: globalColors.dark._1.color,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: 118,
    left:0,
    right: 0,
    bottom: 0,
  },
  continuebutton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    height: 58,
    width: 340,
    backgroundColor: globalColors.primary._500.color,
    marginTop: 24,
    marginLeft: 24,
  },
  questionbox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 72
  },
  textinput: {
    ...globalFonts.H4(globalColors.greyscale._500.color),
    paddingTop: 16,
    borderWidth: 1,
    paddingBottom: 8,
    borderBottomColor: globalColors.status.success.color,
    width: screenWidth -48,
  },
  checkboxContainer: {
    marginVertical: 8,
  },

});