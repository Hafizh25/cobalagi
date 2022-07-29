import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {ILNewsPhoto} from '../../../assets';

const NewsCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.judul}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Text style={styles.time}>today</Text>
      </View>
      <View>
        <Image source={ILNewsPhoto} style={styles.pict} />
      </View>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    height: 76,
    marginTop: 16,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: colors.grey,
  },
  content: {},
  judul: {
    fontFamily: fonts.primary[600],
    color: colors.black,
    fontSize: 16,
    maxWidth: 180,
  },
  time: {
    fontFamily: fonts.primary[400],
    color: colors.grey2,
    fontSize: 12,
    marginTop: 4,
  },
  pict: {
    height: 60,
    width: 80,
    borderRadius: 10,
  },
});
