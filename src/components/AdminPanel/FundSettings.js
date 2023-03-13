// TO DO: need to link the selected private/public otpion with the backend. 

import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalColors } from '../../styles/Colors.js';
import { globalFonts } from '../../styles/Fonts.js';
import ToggleOption from './ToggleOption.js';

function FundSettings() {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    if (option !== selectedOption) {
      setSelectedOption(option);
    } else {
      setSelectedOption(null);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Investment Permissions</Text>
      <ToggleOption
        title={"Private Fund"}
        text={"No investment strategy, everyone is free to trade under the fund."}
        icon={require('../../assets/icons/PrivateFund.png')}
        selected={selectedOption === 'Private'}
        onSelect={() => handleOptionSelect('Private')}
      />
      <ToggleOption
        title={"Public Fund"}
        text={"No investment strategy, everyone is free to trade under the fund."}
        icon={require('../../assets/icons/PublicFund.png')}
        selected={selectedOption === 'Public'}
        onSelect={() => handleOptionSelect('Public')}
      />
      <Text style={styles.selectedOptionText}>Your Fund Is {selectedOption}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 24, 
    marginRight: 24,
  },
  title:{
    ...globalFonts.H5(globalColors.others.white.color),
  },
  selectedOptionText: {
    paddingTop: 12,
    ...globalFonts.BodyXSmall.Medium(globalColors.others.white.color),
  }
});

export default FundSettings;
