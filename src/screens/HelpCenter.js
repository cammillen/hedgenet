// Help Center Screen

import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { StatusBar } from 'react-native';
import { useCallback, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopMenuBar from '../components/TopMenuBar.js';
import Background from '../components/Background.js';
import BottomMenuBar from '../components/BottomMenuBar.js';
import { globalColors } from '../styles/Colors.js';
import { globalFonts } from '../styles/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

export default function HelpCenter () {

  const Screen = 'Help Center';

  const [fontsLoaded] = useFonts({
    'Urbanist-Bold': require('../assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist-SemiBold': require('../assets/fonts/Urbanist-SemiBold.ttf'),
    'Urbanist-Medium': require('../assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist-Regular': require('../assets/fonts/Urbanist-Regular.ttf'),
  });

  SplashScreen.preventAutoHideAsync(); 

  const navigation = useNavigation();
  const [isSelected, setIsSelected] = useState('FAQ');
  const [showTextBoxes, setShowTextBoxes] = useState(true);
  const [showButtons,setShowButtons] = useState(false);

  const handlePress = (screen) => {
    setIsSelected(screen);
  };
  
  const [selectedCategory, setSelectedCategory] = useState('General');
  const [showGeneral, setShowGeneral] = useState(true);
  const [showAccount, setShowAccount] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showStocks, setShowStocks] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowGeneral(category === 'General');
    setShowAccount(category === 'Account');
    setShowService(category === 'Service');
    setShowStocks(category === 'Stocks');

  }

  const QuestionBox = ({ question, answer }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <View style={styles.faqbox}>
        <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
          <Text style={[styles.faqquestion]}>{question}</Text>
        </TouchableOpacity>
        {isExpanded && <Text style={[globalFonts.BodyMedium.Medium(globalColors.greyscale._300.color), {display:'flex'}, {alignItems: 'center'}, {marginTop: 8}, {marginBottom: 24}]}>{answer}</Text>}
      </View>
    );
  };

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
            <Text style={[globalFonts.H4(globalColors.others.white.color), {marginLeft:16}]}>Help Center</Text>
            </View>
            <View style={styles.box1}>
                <View style={styles.buttonContainer}>
                <TouchableOpacity
                        onPress={() => { handlePress('FAQ'); setShowTextBoxes(true); setShowButtons(false); }}
                        style={[styles.button, isSelected === 'FAQ' ? {borderBottomColor: globalColors.status.success.color} : { borderBottomColor: globalColors.others.black.color }]}
                        >
                        <Text style={[globalFonts.BodyXLarge.semiBold(isSelected === 'FAQ' ? globalColors.status.success.color : globalColors.greyscale._700.color), { marginBottom: 12 }]}>FAQ</Text>     
                </TouchableOpacity>
                <TouchableOpacity
                        onPress={() => { handlePress('ContactUs'); setShowTextBoxes(false); setShowButtons(true); }} 
                        style={[styles.button, isSelected === 'ContactUs' ? {borderBottomColor: globalColors.status.success.color} : { borderBottomColor: globalColors.others.black.color }]}
                        >
                        <Text style={[globalFonts.BodyXLarge.semiBold(isSelected === 'ContactUs' ? globalColors.status.success.color : globalColors.greyscale._700.color), { marginBottom: 12 }]}>Contact Us</Text>   
                </TouchableOpacity>
                </View>
            </View>
            {showTextBoxes && (
            <View style={{ height: 70}}>
            <ScrollView horizontal={true} alwaysBounceHorizontal={true}>
            <View style={styles.textBoxContainer}>
              <TouchableOpacity style={[styles.greenbutton, selectedCategory === 'General' ? { backgroundColor: globalColors.status.success.color } : null]}
                  onPress={() => {
                    handleCategoryClick('General'); setShowGeneral(true); setShowAccount(false); setShowService(false); setShowStocks(false);
                    
                  }}>
                  <Text style={[globalFonts.BodyXLarge.semiBold(selectedCategory === 'General' ? globalColors.others.white.color : globalColors.status.success.color)]}>General</Text>   
              </TouchableOpacity>
              <TouchableOpacity style={[styles.greenbutton, selectedCategory === 'Account' ? { backgroundColor: globalColors.status.success.color } : null]}
                  onPress={() => {
                    handleCategoryClick('Account'); setShowGeneral(false); setShowAccount(true); setShowService(false); setShowStocks(false);
                    
                  }}>
                  <Text style={[globalFonts.BodyXLarge.semiBold(selectedCategory === 'Account' ? globalColors.others.white.color : globalColors.status.success.color)]}>Account</Text>  
              </TouchableOpacity>
              <TouchableOpacity style={[styles.greenbutton, selectedCategory === 'Service' ? { backgroundColor: globalColors.status.success.color } : null]}
                  onPress={() => {
                    handleCategoryClick('Service'); setShowGeneral(false); setShowAccount(false); setShowService(true); setShowStocks(false);
                    
                  }}>
                  <Text style={[globalFonts.BodyXLarge.semiBold(selectedCategory === 'Service' ? globalColors.others.white.color : globalColors.status.success.color)]}>Service</Text>  
              </TouchableOpacity>
              <TouchableOpacity style={[styles.greenbutton, selectedCategory === 'Stocks' ? { backgroundColor: globalColors.status.success.color } : null]}
                  onPress={() => {
                    handleCategoryClick('Stocks'); setShowGeneral(false); setShowAccount(false);  setShowService(false); setShowStocks(true);
                    
                  }}>
                  <Text style={[globalFonts.BodyXLarge.semiBold(selectedCategory === 'Stocks' ? globalColors.others.white.color : globalColors.status.success.color)]}>Stocks</Text>  
              </TouchableOpacity>
            </View>
            </ScrollView>
            </View>
            )}
            {showButtons && (
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom:150 }}>    
            <View style={styles.buttonGridContainer}>
              <TouchableOpacity style={styles.greybutton}>
                <Image source={require('../assets/ContactUs1.png')} style={styles.buttonImage} />
                <Text style={[globalFonts.BodyXLarge.Bold(globalColors.others.white.color)]}>Customer Service</Text>   
              </TouchableOpacity>
              <TouchableOpacity style={styles.greybutton}>
                <Image source={require('../assets/ContactUs2.png')} style={styles.buttonImage} />
                <Text style={[globalFonts.BodyXLarge.Bold(globalColors.others.white.color)]}>WhatsApp</Text>   
              </TouchableOpacity>
              <TouchableOpacity style={styles.greybutton}>
                <Image source={require('../assets/ContactUs3.png')} style={styles.buttonImage} />
                <Text style={[globalFonts.BodyXLarge.Bold(globalColors.others.white.color)]}>Website</Text>   
              </TouchableOpacity>
              <TouchableOpacity style={styles.greybutton}>
                <Image source={require('../assets/ContactUs4.png')} style={styles.buttonImage} />
                <Text style={[globalFonts.BodyXLarge.Bold(globalColors.others.white.color)]}>Facebook</Text>   
              </TouchableOpacity>
              <TouchableOpacity style={styles.greybutton}>
                <Image source={require('../assets/ContactUs5.png')} style={styles.buttonImage} />
                <Text style={[globalFonts.BodyXLarge.Bold(globalColors.others.white.color)]}>Twitter</Text>   
              </TouchableOpacity>
              <TouchableOpacity style={styles.greybutton}>
                <Image source={require('../assets/ContactUs6.png')} style={styles.buttonImage} />
                <Text style={[globalFonts.BodyXLarge.Bold(globalColors.others.white.color)]}>Instagram</Text>   
              </TouchableOpacity>
            </View>
            </ScrollView>
            )}
            {showGeneral && showTextBoxes && (
            <View style={styles.faqbox}>
              <QuestionBox question="What is Hedgenet?" answer="Hedgenet is a gamified trading app that makes investing accessible and enjoyable. The app combines the excitement of playing a game with real-life benefits of trading, offering users a unique way to learn about finance and grow their wealth." />
            </View>
            )}
            {showAccount && showTextBoxes && (
             <View style={styles.faqbox}>
              <QuestionBox question="How to close a Hedgenet account?" answer="Go to settings, scroll all the way down to the bottom, click the second button from the end which says 'Close your Account' and follow the instructions. " />
            </View>        
            )}
            {showService && showTextBoxes && (
              <View style={styles.faqbox}>
                <QuestionBox question="How do I contact customer support?" answer="On the tops of this page, click 'Contact Us' button where you can find all possible ways to get in touch." />
              </View>
            )}
            {showStocks && showTextBoxes && (
              <ScrollView>
              <View style={styles.faqbox}>
                <QuestionBox question="How to buy stock on Hedgenet?" answer="Click on the stock of your preference, then enter the amount of money you want to spend or the amount of stock you want to buy and click 'Confirm' " />
              </View>
              <View style={styles.faqbox}>
                <QuestionBox question="How to sell stock on Hedgenet?" answer="Click on the stock of your preference in your portfolio, then enter the amount of money you want to get or the amount of stock you want to sell and click 'Confirm' " />
              </View>
              <View style={styles.faqbox}>
                <QuestionBox question="How to exchange stock on Hedgenet?" answer="This is accessible through 'My Portfolio' section of your account, where you can find more instructions on how to achieve this." />
              </View>
              </ScrollView>
            )}  
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
  box1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 24,
    marginTop: 16,
    height: 41
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    height:41,
    marginRight:24,
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 176,
    flexGrow: 1,
    gap: 12,
    borderBottomWidth: 4,
  },
  textBoxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 24,
    marginLeft: 24
  },
  buttonGridContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginRight: 24,
    marginLeft: 24,
  },
  greybutton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: globalColors.dark._2.color,
    borderColor: globalColors.dark._3.color,
    borderRadius: 20,
    right: 0,
    alignSelf: 'stretch',
    height: 72,
    marginTop: 24,
    padding: 24,
    gap: 16
  },
  buttonImage: {
    width: 24,
    height: 24,
    marginRight: 16
  },
  greenbutton:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 24,
    borderRadius: 100,
    borderColor: globalColors.status.success.color,
    borderWidth: 2,
    width: 100,
    height: 38
  },
  questionbox: {
    marginTop: 24
  },
  faqbox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 24,
    backgroundColor: globalColors.dark._3.color,
    borderRadius: 20,
    marginLeft: 24,
    marginRight: 24,
  },
  faqquestion: {
    display: 'flex',
    alignItems: 'center',
    ...globalFonts.H6(globalColors.others.white.color),
    marginBottom: 24,
    //marginTop: 24,
  },
  ArrowRightWhite: {
    position: 'absolute',
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 24, 
  },
});

const titles = ['FAQ', 'Contact us'];
const screens = [
    () => <FAQ/>,
    () => <ContactUs/>,
  ];