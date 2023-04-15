// PLaceholder Screen
// Chnage everything with PLaceholder in, only 2 things to change. 

import React, {useState, useCallback} from 'react';
import { View, StyleSheet, Text, Image, TextInput, Select, Button } from 'react-native';
import { StatusBar, DatePickerIOS } from 'react-native';
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
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Dropdown} from 'react-native-element-dropdown';


export default function Profile () {

  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("apple");
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
  const [dropdown, setDropdown] = useState('');

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [fontsLoaded] = useFonts({
    'Urbanist-Bold': require('../assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist-SemiBold': require('../assets/fonts/Urbanist-SemiBold.ttf'),
    'Urbanist-Medium': require('../assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist-Regular': require('../assets/fonts/Urbanist-Regular.ttf'),
  });

const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

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

  

  SplashScreen.preventAutoHideAsync(); 

  

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

  const renderSelectEditor = ({text, type}) => {
    return (
      <View style={styles.editorContainer}>
        <Text style={[globalFonts.H5(globalColors.others.white.color)]}>{text}</Text>
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
      </View>
    );
  }
  
  const renderInputEditor = (props) => {
    return (
      <View style={styles.editorContainer}>
        <Text style={[globalFonts.H5(globalColors.others.white.color)]}>{props.text}</Text>
        <TextInput
          style = {styles.input}
          placeholder = {props.text}
        />
      </View>
    );
  }

  const renderDateEditor = ({text, type}) => {
    return (
      <View style={styles.editorContainer}>
        <Text style={[globalFonts.H5(globalColors.others.white.color)]}>{text}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style = {[styles.input, {flex: 10}]}
            type = {type}
            value = {selectedDate.toLocaleDateString()}
          />
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'flex-end'}}
            activeOpacity={0.5}
            onPress={showDatePicker}
            >
            <Image
              source={require('../assets/icons/datepickerbutton.png')}
              style={{width: 20, height: 20, justifyContent: 'flex-end', alignItems: 'flex-end', marginLeft: 10}}
            />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
      </View>
    );
  }

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
          <View>
            <Image 
              source={require('../assets/icons/ProfilePlaceholder.png')}
              style={styles.avatarImage}
            />
          </View>
          <ScrollView>
            {
              renderInputEditor({
                text: 'Full Name',
                type: 'text'
              })
            }
            {
              renderInputEditor({
                text: 'Phone Number',
                type: 'text'
              })
            }
            {
              renderInputEditor({
                text: 'Email',
                type: 'text'
              })
            }
            {
              renderDateEditor({
                text: 'Date of birth',
                type: 'date'
              })
            }
            {
              renderInputEditor({
                text: 'Stree Address',
                type: 'date'
              })
            }
            {
              renderSelectEditor({
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
  // header
  container: {
    flex: 1,
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
  avatarImage: {
    width: 100,
    height: 100,
    alignSelf: 'center'
  },
  // main board
  bigbox:{
    justifyContent: 'center',
    marginTop: 10,
  },
  editorContainer: {
    marginTop: 17,
    width: '84%',
    marginLeft: '7%'
  },
  input: {
    borderWidth: 0,
    width: '100%',
    borderBottomWidth: 2,
    borderColor: '#096847',
    fontSize: 20,
    color: 'white',
    marginTop: 12
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
  dropdown: {
    backgroundColor: 'black',
    borderBottomColor: '#096847',
    borderBottomWidth: 2,
    marginTop: 20,
    fontSize: 20,
    width: '100%',
    color: 'white',
    textColor: 'white',
    baseColor: "rgba(255, 255, 255, 1)",
    height: 30
  }
});