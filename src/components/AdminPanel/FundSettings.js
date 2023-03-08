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
      <Text style={styles.title}>Voting Strategy</Text>
      <ToggleOption
        title={"Daily Poll"}
        text={"A poll is created daily to decide fund investment strategy."}
        icon={require('../../assets/icons/DailyPoll.png')}
        selected={selectedOption === 'daily'}
        onSelect={() => handleOptionSelect('daily')}
      />
      <ToggleOption
        title={"Weekly Poll"}
        text={"A poll is created weekly to decide fund investment strategy."}
        icon={require('../../assets/icons/WeeklyPoll.png')}
        selected={selectedOption === 'weekly'}
        onSelect={() => handleOptionSelect('weekly')}
      />
      <ToggleOption
        title={"Free For All"}
        text={"No investment strategy, everyone is free to trade under the fund."}
        icon={require('../../assets/icons/FreeForAll.png')}
        selected={selectedOption === 'freeForAll'}
        onSelect={() => handleOptionSelect('freeForAll')}
      />
      <Text style={[styles.title, {paddingTop: 24}]}>Investment Permissions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title:{
    paddingLeft: 24,
    ...globalFonts.H5(globalColors.others.white.color),
  }
});

export default FundSettings;
