import { View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';

const PlaceholderImage = require('@/assets/images/background-image.png');


export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1
    });

    if(result.canceled) {
      alert("You did not select an image");
    } else {
      console.log(result);
      setSelectedImage(result.assets[0].uri);
    }

  };



  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={ PlaceholderImage } selectedImage={selectedImage} />
      </View>
        <Button label="Choose a photo" theme="primary"  onPress={pickImageAsync}/>
        <Button label="Choose this photo" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
