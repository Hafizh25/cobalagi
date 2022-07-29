import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {
  ILFotoUser,
  ILIconDoctorAnak,
  ILIconDoctorObat,
  ILIconDoctorPsikiater,
  ILIconDoctorUmum,
} from '../../assets';
import {colors, fonts} from '../../utils';
import {Gap, MenuCard, NewsCard, TopRatedCard} from '../../component';

const Doctor = ({navigation}) => {
  const jenis = [
    <MenuCard
      foto={ILIconDoctorUmum}
      jenisdoctor={'doctor umum'}
      onPress={() => navigation.navigate('ListDoctor')}
    />,
    <MenuCard foto={ILIconDoctorPsikiater} jenisdoctor={'doctor psikiater'} />,
    <MenuCard foto={ILIconDoctorAnak} jenisdoctor={'doctor anak'} />,
    <MenuCard foto={ILIconDoctorObat} jenisdoctor={'doctor obat'} />,
  ];
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.page}>
        <View style={styles.profil}>
          <Image source={ILFotoUser} style={styles.profile} />
          <View style={styles.profilData}>
            <Text style={styles.dataNama}>Shayna Melinda</Text>
            <Text style={styles.dataPekerjaan}>Product Designer</Text>
          </View>
        </View>
        <View>
          <Text style={styles.titlePage}>
            Mau konsultasi dengan siapa hari ini?
          </Text>
        </View>
        <Gap height={16} />
        <View style={{height: 130}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {jenis.map((specialis, key) => (
              <View style={{marginLeft: key === 0 ? 16 : 10}}>{specialis}</View>
            ))}
          </ScrollView>
        </View>

        <Text style={styles.judulRated}>Top Rated Doctors </Text>
        <TopRatedCard active={'true'} />
        <TopRatedCard />
        <TopRatedCard />
        <Text style={styles.titlePage}>Good News</Text>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </View>
    </ScrollView>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  profil: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 16,
    alignItems: 'center',
  },
  profile: {
    width: 46,
    height: 46,
  },
  profilData: {
    marginLeft: 12,
  },
  dataNama: {
    fontFamily: fonts.primary[600],
    color: colors.black,
    fontSize: 16,
  },
  dataPekerjaan: {
    fontFamily: fonts.primary[400],
    color: colors.grey2,
    fontSize: 12,
  },
  titlePage: {
    fontFamily: fonts.primary[600],
    color: colors.black,
    fontSize: 20,
    maxWidth: 211,
    marginTop: 30,
    marginLeft: 16,
  },
  judulRated: {
    fontFamily: fonts.primary[600],
    color: colors.black,
    fontSize: 16,
    marginLeft: 16,
    marginTop: 30,
  },
});
