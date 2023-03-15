import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import IconTextArrowRight from './IconTextArrowRight';
import { useNavigation } from '@react-navigation/native';

function FundListLoop({ fundnames, profilePics }) {
    const navigation = useNavigation();
  const fundComponents = fundnames.map((fundname, index) => {
    return (
      <IconTextArrowRight
        key={index}
        title={fundname}
        onPress={() => navigation.navigate(fundname)}
        iconSource={profilePics[index]}
      />
    );
  });

  return (
    <View>
      {fundComponents}
    </View>
  );
}

const styles = StyleSheet.create({
});

export default FundListLoop;
