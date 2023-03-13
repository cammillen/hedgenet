import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { globalColors } from '../../styles/Colors';
import { globalFonts } from '../../styles/Fonts';

const UploadImage = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        {image === null ? (
            <View style={styles.container}>
                <Image source={require('../../assets/icons/Image.png')} style={[styles.icon, { marginBottom: 16 }]} />
                <Text style={globalFonts.BodyLarge.Medium(globalColors.greyscale._500.color)}>Select File</Text>
            </View>
        ) : (
          <Image style={styles.image} source={{ uri: image }} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalColors.dark._2.color,
    borderColor: globalColors.primary._500.color,
    borderWidth: 3,
    borderRadius: 40,
    width: '100%',
    height: 200,
  },
  image: {
    width: '100%',
    height: 194,
    borderColor: globalColors.primary._500.color,
    borderRadius: 37,
  },
  icon: {
    width: 28,
    height: 28,
    resizeMode: 'contain'
}
});

export default UploadImage;
