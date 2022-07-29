import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React from 'react';
import {Button, Gap, Header} from '../../component';
import {ILaddFoto, ILphotoNull} from '../../assets';
import {colors, fonts} from '../../utils';

const UploadFoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header />
      <Gap height={'25%'} />
      <View style={styles.content}>
        <View style={styles.foto}>
          <View style={styles.nullphoto}>
            <ImageBackground
              resizeMode="cover"
              source={ILphotoNull}
              style={styles.add}>
              <Image source={ILaddFoto} style={styles.addfoto} />
            </ImageBackground>
          </View>
        </View>

        <Gap height={26} />

        <Text style={styles.nama}>Shayna Melinda</Text>
        <Text style={styles.pekerjaan}>Product Designer</Text>
      </View>
      <View style={styles.button}>
        <Button
          title={'Upload and Continue'}
          type={'secondary'}
          onPress={() => navigation.navigate('MainApp')}
        />
        <Text style={styles.skip}>Skip for this</Text>
      </View>
    </View>
  );
};

export default UploadFoto;

const styles = StyleSheet.create({
  nullphoto: {},
  content: {
    alignItems: 'center',
  },
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  nama: {
    fontFamily: fonts.primary[600],
    fontSize: 24,
    color: colors.black,
  },
  pekerjaan: {
    fontFamily: fonts.primary[400],
    fontSize: 18,
    color: colors.grey2,
  },
  addfoto: {
    width: 30,
    height: 30,
  },
  add: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  button: {
    marginTop: '45%',
    marginHorizontal: 40,
  },
  foto: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    borderWidth: 2,
    borderColor: colors.grey,
  },
  skip: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.grey2,
    textDecorationLine: 'underline',
    alignSelf: 'center',
  },
});
