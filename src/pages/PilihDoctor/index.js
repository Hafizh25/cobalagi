import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../utils';

const PilihDoctor = ({nama, gender, foto}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Image source={foto} style={{width: 46, height: 46}} />
        <View style={styles.content}>
          <Text style={styles.nama}>{nama}</Text>
          <Text style={styles.gender}>{gender}</Text>
        </View>
      </View>
    </View>
  );
};

export default PilihDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  page: {
    height: 62,
    borderBottomWidth: 0.5,
    backgroundColor: colors.grey,
    marginVertical: 16,
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
