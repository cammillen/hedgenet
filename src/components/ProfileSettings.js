// PLaceholder Screen
// Chnage everything with PLaceholder in, only 2 things to change. 

import React, {useState} from 'react';
import { View, StyleSheet, Text, Image, TextInput, Select, Button } from 'react-native';
import { StatusBar, DatePickerIOS } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TopMenuBar from '../components/TopMenuBar.js';
import Background from '../components/Background.js';
import BottomMenuBar from '../components/BottomMenuBar.js';
import { globalFonts } from '../styles/Fonts.js';
import { globalColors } from '../styles/Colors.js';
import { inline } from 'react-native-web/dist/cjs/exports/StyleSheet/compiler/index.js';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import SelectDropdown from 'react-native-select-dropdown'
import {Dropdown} from 'react-native-element-dropdown';


export default function Profile () {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("apple");
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
  const [dropdown, setDropdown] = useState(null);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const Screen = 'Profile';

  const data = [
    {label: 'Egypt', value: 'Egypt'},
    {label: 'Canada', value: 'Canada'},
    {label: 'Australia', value: 'Australia'},
    {label: 'Ireland', value: 'Ireland'}
];

  const [fontsLoaded] = useFonts({
    'Urbanist-Bold': require('../assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist-SemiBold': require('../assets/fonts/Urbanist-SemiBold.ttf'),
    'Urbanist-Medium': require('../assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist-Regular': require('../assets/fonts/Urbanist-Regular.ttf'),
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

  const _renderItem = item => {
    return (
    <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
    </View>
    );
  };

  const renderEditor = ({text, type}) => {
    return (
      <View style={styles.inputContainer}>
        <Text style={[globalFonts.H5(globalColors.others.white.color), {marginLeft:20}]}>{text}</Text>
        {
          type === 'select' ?
          (
            <Dropdown
              style={styles.dropdown}
              data={data}
              search
              searchPlaceholder="Search"
              labelField="label"
              valueField="value"
              label="Dropdown"
              placeholder="Select item"
              value={dropdown}
              onChange={item => {
              setDropdown(item.value);
                  console.log('selected', item);
              }}
              renderItem={item => _renderItem(item)}
              textError="Error"
              selectedTextProps={{
                style: {
                  fontSize: 22, 
                  color: 'white',
                },
              }}
            />
          ) : 
          (
            <TextInput
              style = {styles.input}
              type = {type}
            />
          )
        }
      </View>
    );
  }
  

  const renderDateEditor = ({text, type}) => {
    return (
      <View style={styles.inputContainer}>
        <Text style={[globalFonts.H5(globalColors.others.white.color), {marginLeft:20}]}>{text}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '85%', height: 50, margigLeft: 200 }}>
          <TextInput
            style = {styles.input}
            type = {type}
            value = {selectedDate.toLocaleDateString()}
          />
          <TouchableOpacity
            style={styles.buttonGPlusStyle}
            activeOpacity={0.5}
            onPress={showDatePicker}
            >
            <Image
              source={require('../assets/icons/datepickerbutton.png')}
              style={styles.buttonImageIconStyle}
            />
            <View style={styles.buttonIconSeparatorStyle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const navigation = useNavigation();

  return ( 
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container} onLayout={onLayoutRootView}>
        <TopMenuBar screen={Screen} />
        <View style={styles.fullComp}>
          <TouchableOpacity  onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/icons/ArrowLeft_Green.png')}
              style={styles.ArrowLeft_GreenIcon}
            />
          </TouchableOpacity>
          <Text style={[globalFonts.H4(globalColors.others.white.color), {marginLeft:16}]}>Account Details</Text>
        </View>
        <View style={styles.bigbox}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} alwaysBounceVertical={true}>
            <View style={{paddingBottom: 20}}>
              <Image 
                source={require('../assets/icons/ProfilePlaceholder.png')}
                style={styles.image1}
              />
            </View>
            {
              renderEditor({
                text: 'Full Name',
                type: 'text'
              })
            }
            {
              renderEditor({
                text: "Phone Number",
                type: 'text'
              })
            }
            {
              renderEditor({
                text: "Email",
                type: 'text'
              })
            }
            {
              renderDateEditor({
                text: "Date of birth",
                type: 'date'
              })
            }
            {
              renderEditor({
                text: "Street Address",
                type: 'text'
              })
            }
            {
              renderEditor({
                text: "Country",
                type: 'select'
              })
            }
          </ScrollView>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    flex: 1
  },
  bottomMenuBarContainer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -5,
    marginLeft: 5,
  },
  ArrowLeft_GreenIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  fullComp:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 24,
    marginTop: 24,
    marginRight: 24,
  },
  containerfreestock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 116,
    backgroundColor: globalColors.dark._2.color,
    borderColor: globalColors.dark._3.color,
    borderRadius: 24,
  },
  image1: {
    width: 100,
    height: 100,
    alignSelf: 'center'
  },
  image2: {

  },
  bigbox:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 8,
    marginRight:  8
  },
  input: {
    alignItems: 'center',
    borderWidth: 0,
    width: '85%',
    height: 50,
    marginHorizontal: 22,
    borderBottomWidth: 2,
    borderColor: '#096847',
    fontSize: 20,
    color: 'white'
  },
  inputanddatebutton: {
    alignItems: 'center',
    borderWidth: 0,
    width: '85%',
    height: 50,
    marginHorizontal: 22,
    borderBottomWidth: 2,
    borderColor: '#096847',
    fontSize: 20,
    color: 'white'
  },
  inputContainer: {
    marginTop: 24
  },
  selectbox: {
    alignItems: 'center',
    borderWidth: 0,
    width: '85%',
    height: 50,
    marginHorizontal: 22,
    borderBottomWidth: 2,
    borderColor: '#096847',
    fontSize: 20,
    color: 'white',
    backgroundColor: 'black',
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  dropdown: {
    backgroundColor: 'black',
    borderBottomColor: '#096847',
    borderBottomWidth: 2,
    marginTop: 20,
    fontSize: 20,
    width: '85%',
    marginLeft: 20,
    color: 'white',
    textColor: 'white',
    baseColor: "rgba(255, 255, 255, 1)"
  },
  item: {
    paddingVertical: 5,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 16,
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
});

/*
<DatePicker
          style={styles.input}
          date={date}
          mode="date"
          placeholder="select date"
          format="DD/MM/YYYY"
          minDate="01-01-1900"
          maxDate="01-01-2050"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              right: -5,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              borderColor : "gray",
              alignItems: "flex-start",
              borderWidth: 0,
              borderBottomWidth: 1,
            },
            placeholderText: {
              fontSize: 17,
              color: "gray"
            },
            dateText: {
              fontSize: 17,
            }
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
*/