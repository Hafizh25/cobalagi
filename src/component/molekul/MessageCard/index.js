import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ILFotoUser} from '../../../assets';
import {colors, fonts} from '../../../utils';

const MessagesCard = ({pesan, name, type, pict}) => {
  return (
    <View style={styles.container}>
      <Image source={pict} style={{width: 46, height: 46}} />
      <View style={{marginLeft: 12}}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.pesan(type)}>{pesan}</Text>
      </View>
    </View>
  );
};

export default MessagesCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    height: 62,
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    borderColor: colors.grey2,
  },
  name: {
    fontFamily: fonts.primary[600],
    color: colors.black,
    fontSize: 16,
  },
  pesan: type => ({
    fontFamily:
      type === 'message_incomming' ? fonts.primary[600] : fonts.primary[400],
    color: type === 'message_incomming' ? colors.black : colors.grey2,
    fontSize: 12,
  }),
});
