import React, { ScrollView, View } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import NotificationPositions from './NotificationPositions.js';


export default function MyNotifications({ notifications }) {


  //need to introduce some sort of sorting!
  let allNotifications = [];
  notifications.forEach(element => allNotifications.push(
    <TouchableOpacity key = {element} onPress={{/* Stock Page or Fund Page? */}}>
      <NotificationPositions notification={element} />
    </TouchableOpacity>
  ));

  return (
    <ScrollView alwaysBounceVertical={true}>
    <View style={styles(paddingBottom).container}>
        {allNotifications}
        {/* TO DO: Need to add loop and logic to the see more botton below */}
        <Text style={[globalFonts.BodyLarge.semiBold(globalColors.primary._500.color), {paddingTop: 30}]}>{bottomText}</Text>
    </View>
    </ScrollView>
    );

};

const styles = (paddingBottom) => StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: paddingBottom, //This makes sure when they scroll all the way down the last stock isnt obstructed by the bottom menu bar.
  },
});