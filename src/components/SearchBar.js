// This is the search bar. 

import React from "react";
import { Image, StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";


const SearchBar = ({ searchTerm, onSearchTermChange, onSearchTermSubmit }) => {
    return(
        <View style={styles.SearchBar}>
            <Image source={require('../assets/icons/Search.png')} style={styles.searchIcon} />
            <TextInput
                style={styles.searchInput}
                placeholder="Search"
                value={searchTerm}
                onChangeText={onSearchTermChange}
                onSubmitEditing={onSearchTermSubmit}
            />
            <Image source={require('../assets/icons/Filter.png')} style={styles.filterIcon} />
        </View>
    );
}

const styles = StyleSheet.create({
    searchBar: {
      backgroundColor: '#F0EEEE',
      height: 50,
      borderRadius: 5,
      marginHorizontal: 15,
      flexDirection: 'row',
      marginBottom: 10,
    },
    searchInput: {
      flex: 1,
      fontSize: 18,
    },
    searchIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    filterIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
  });
  
  export default SearchBar;