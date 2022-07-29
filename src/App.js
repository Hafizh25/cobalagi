import React from 'react';
import { StyleSheet,View,Text } from 'react-native'
import Router from './router'
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
   <Router/>

    </NavigationContainer>
 

  )
}

export default App

const styles = StyleSheet.create({})