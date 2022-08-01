import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILrowPush} from '../../assets';
import {colors, fonts} from '../../utils';

const PilihDoctor = ({nama, gender, foto, onPress}) => {
  return (
    <TouchableOpacity style={styles.page} onPress={onPress}>
      <View style={styles.container}>
        <Image source={foto} style={{width: 46, height: 46}} />
        <View style={styles.content}>
          <Text style={styles.nama}>{nama}</Text>
          <Text style={styles.gender}>{gender}</Text>
        </View>
      </View>
      <View>
        <Image source={ILrowPush} style={{width: 24, height: 24}} />
      </View>
    </TouchableOpacity>
  );
};

export default PilihDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  page: {
    marginTop: 12,
    height: 62,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.grey,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    marginLeft: 12,
    alignSelf: 'center',
  },
  nama: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.black,
  },
  gender: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: colors.grey2,
  },
});
