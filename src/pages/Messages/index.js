import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {MessagesCard} from '../../component';
import {ILFotoDoctor1, ILFotoDoctor2} from '../../assets';

const Messages = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.judul}>Messages</Text>
      <MessagesCard
        pict={ILFotoDoctor1}
        name={'John McParker Steve'}
        pesan={'Oh tentu saja tidak karena jeruk it...'}
      />
      <MessagesCard
        type={'message_incomming'}
        pict={ILFotoDoctor2}
        name={'Nairobi Putri Hayza'}
        pesan={'Oke menurut pak dokter bagaimana unt...'}
      />
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 30,
  },
  judul: {
    fontFamily: fonts.primary[600],
    color: colors.black,
    fontSize: 20,
  },
});
