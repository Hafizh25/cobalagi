import { StyleSheet, Text, View, Image } from 'react-native'

import React , {useEffect} from 'react'
import { IlLogo } from '../../assets'

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  }, []);
  return (
    <View style={styles.page}>
      <Image source={IlLogo} style={styles.logo}/>
      <Text>My Doctor</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  page : {
    
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
    marginBottom : 20,
  },
  logo : {
    width : 86,
    height : 75,
  }
})