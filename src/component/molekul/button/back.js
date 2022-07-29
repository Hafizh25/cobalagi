import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ILarrow_back, ILButtomWhite} from '../../../assets';

const back = ({onPress, type}) => {
  if (type === 'black') {
    return (
      <TouchableOpacity onPress={onPress}>
        <Image source={ILarrow_back} style={styles.icon} />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={ILButtomWhite} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default back;

const styles = StyleSheet.create({
  icon: {
    width: 16,
    height: 16,
  },
});
