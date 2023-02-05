import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ImageViewer from './components/ImageView';
import Button from './components/Button'

const PlaceholderImage = require('./assets/images/background-image.png')

export default function App() {
  return (
    <View style={styles.container}>
      <View style= {styles.imageContainer}> 
        <ImageViewer placeholderImageSource ={PlaceholderImage}/>
      </View>
      <View style= {styles.footerContainer}>
        <Button theme= "primary" label= "Choose a photo"/>
        <Button label={ "Use this photo"}/>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  footerContainer: {
    flex: 1/3,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
 
});
