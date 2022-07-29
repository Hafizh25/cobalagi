import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../button';
import {colors, fonts} from '../../../utils';

const Header = ({type}) => {
  if (type === 'list_doctor') {
    return (
      <View style={styles.a}>
        <Button type={'back_only_white'} />
        <View style={styles.isi}>
          <Text style={styles.title(type)}>Pilih Dokter Anak</Text>
        </View>
      </View>
    );
  }
  if (type === 'chatting') {
    return (
      <View style={styles.a}>
        <Button type={'back_only_white'} />
        <View style={styles.isi}>
          <Text style={styles.title(type)}>Pilih Dokter Anak</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Button type={'back_only_black'} />
      <View style={styles.isi}>
        <Text style={styles.title(type)}>Daftar Akun</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: type => ({
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: (type === 'list_doctor') | 'chatting' ? colors.white : colors.black,
  }),
  isi: {
    width: '90%',
    alignItems: 'center',
  },
  a: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.black,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
