import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React from 'react';
import {IlBackgroundGetStarted, IlLogo} from '../../assets';
import {colors, fonts} from '../../utils';
import {Button} from '../../component';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={IlBackgroundGetStarted}
        style={styles.background}>
        <View style={styles.content}>
          <View>
            <Image source={IlLogo} style={styles.logo} />
            <Text style={styles.judul}>
              {' '}
              Konsultasi dengan dokter jadi lebih mudah & fleksibel
            </Text>
          </View>

          <View>
            <Button
              title={'Get Started'}
              onPress={() => navigation.navigate('SignUpPage')}
            />
            <Button
              type={'secondary'}
              title={'Sign In'}
              onPress={() => navigation.navigate('LoginPage')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginHorizontal: 40,
    marginVertical: 40,
    justifyContent: 'space-between',
  },
  logo: {
    width: 86,
    height: 75,
  },
  judul: {
    fontFamily: fonts.primary[600],
    color: colors.white,
    fontSize: 28,
    maxWidth: 236,
  },
});
