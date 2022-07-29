import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {colors, fonts} from '../../../utils';

const Input = ({label, title, placeholder}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={styles.input} label={label} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.primary[400],
    color: colors.black,
    fontSize: 16,
    marginTop: 24,
  },
  input: {
    borderRadius: 10,
    borderWidth: 3,
    borderColor: colors.grey,
    height: 45,
    width: '100%',
    marginTop: 6,
  },
});
