import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';

function ToggleOption({ title, text, icon, selected, onSelect }) {

  const unselectedIcon = require('../../assets/icons/Unselected.png');
  const selectedIcon = require('../../assets/icons/Selected.png');
  const iconSource = selected ? selectedIcon : unselectedIcon;

  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <View style={styles.iconTextFlexBox}>
        {/* Image:  */}
        {/* TO DO BACKEND: Connect to backend */}
        <Image source={icon} style={styles.icon} />
        {/* Title and Tags Vertical Box:  */}
        <View style={styles.textFlexBox}>
          <Text style={[globalFonts.H6(globalColors.others.white.color), {marginBottom: 7}]}>{title}</Text>
          <Text style={[globalFonts.BodyMedium.Medium(globalColors.others.white.color), { lineHeight: 22 }]}>{text}</Text>
        </View>
      </View>
      {/* Toggle Button: */}
      <Image source={iconSource} style={styles.toggleButton} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    paddingBottom: 20,
    borderBottomColor: globalColors.dark._3.color,
    borderBottomWidth: 1,
    backgroundColor: 'rgba(27,172,75,0)',
    // marginLeft: 24,
    // marginRight: 24
  },
  iconTextFlexBox:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textFlexBox:{
    marginLeft: 16,
    flex: 1,
  },
  icon:{
    marginRight: 10,
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  toggleButton:{
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default ToggleOption;
