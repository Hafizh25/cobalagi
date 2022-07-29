import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React from 'react';
import {ILActiveDoctor, ILFotoUser} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Star} from '../../atom';

const TopRatedCard = ({active}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        marginTop: 16,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        marginHorizontal: 16,
      }}>
      <View style={{marginTop: 16, flexDirection: 'row'}}>
        <View style={{alignItems: 'center'}}>
          <ImageBackground
            resizeMode="cover"
            source={ILFotoUser}
            style={styles.cover}>
            {active === 'true' ? (
              <Image source={ILActiveDoctor} style={styles.activ} />
            ) : null}
          </ImageBackground>
        </View>

        <View style={{marginLeft: 12}}>
          <Text style={styles.namaDoctor}>Alexa Rachel</Text>
          <Text style={styles.specialis}>Pediatrician</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </View>
    </View>
  );
};

export default TopRatedCard;

const styles = StyleSheet.create({
  namaDoctor: {
    fontFamily: fonts.primary[600],
    color: colors.black,
    fontSize: 16,
  },
  specialis: {
    fontFamily: fonts.primary[400],
    color: colors.grey2,
    fontSize: 12,
  },
  cover: {
    width: 50,
    height: 50,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  activ: {
    width: 8,
    height: 8,
    paddingRight: 15,
    paddingBottom: 15,
  },
});
