import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../../component';
import {colors} from '../../utils';
import PilihDoctor from '../PilihDoctor';
import {ILFotoDoctor1, ILFotoDoctor2} from '../../assets';

const ListDoctor = () => {
  return (
    <View style={styles.page}>
      <Header type={'list_doctor'} />
      <PilihDoctor
        nama={'Alexander Jannie'}
        gender={'Wanita'}
        foto={ILFotoDoctor1}
      />
      <PilihDoctor
        nama={'John McParker Steve'}
        gender={'Pria'}
        foto={ILFotoDoctor2}
      />
      <PilihDoctor
        nama={'Nairobi Putri Hayza'}
        gender={'Wanita'}
        foto={ILFotoDoctor1}
      />
      <PilihDoctor
        nama={'James Rivillia'}
        gender={'Pria'}
        foto={ILFotoDoctor2}
      />
      <PilihDoctor
        nama={'Liu Yue Tian Park'}
        gender={'Pria'}
        foto={ILFotoDoctor1}
      />
    </View>
  );
};

export default ListDoctor;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
