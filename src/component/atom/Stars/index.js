import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ILStart} from '../../../assets';

const Star = () => {
  return (
    <View>
      <Image source={ILStart} style={{height: 24, width: 24}} />
    </View>
  );
};

export default Star;

const styles = StyleSheet.create({});
