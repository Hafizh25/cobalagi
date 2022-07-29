import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {ILIconDoctorUmum} from '../../../assets';
import {Gap} from '../../atom';

const MenuCard = ({foto, jenisdoctor, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={foto} style={styles.icon} />
      <Gap height={28} />
      <Text style={styles.title}>Saya Butuh</Text>

      <Text style={styles.job}>{jenisdoctor}</Text>
    </TouchableOpacity>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 130,
    backgroundColor: colors.secondaryBlue,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 10,
  },
  icon: {
    width: 46,
    height: 46,
  },
  title: {
    fontFamily: fonts.primary[300],
    color: colors.black,
    fontSize: 12,
  },
  job: {
    fontFamily: fonts.primary[600],
    color: colors.black,
    fontSize: 12,
  },
});
