import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import Back from './back';

const Button = ({title, type, onPress}) => {
  if (type === 'back_only_white') {
    return <Back onPress={onPress} />;
  }
  if (type === 'back_only_black') {
    return <Back onPress={onPress} type={'black'} />;
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.title(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  title: type => ({
    color: type === 'secondary' ? colors.black : colors.white,
    fontFamily: fonts.primary[500],
    textAlign: 'center',
    fontSize: 18,
  }),
  container: type => ({
    width: '100%',
    backgroundColor: type === 'secondary' ? colors.grey : colors.primary,
    height: 45,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 16,
  }),
});
