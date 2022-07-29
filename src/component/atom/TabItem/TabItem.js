import React from 'react';
import {StyleSheet, TouchableOpacity, Image, View, Text} from 'react-native';
import {
  ILDoctorOff,
  ILDoctorOn,
  ILMapOff,
  ILMapOn,
  ILMessageOff,
  ILMessageOn,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? (
        <View>
          <Image source={ILDoctorOn} style={styles.pict} />
          <Text style={styles.title}>Doctor</Text>
        </View>
      ) : (
        <View>
          <Image source={ILDoctorOff} style={styles.pict} />
          <Text style={styles.titleOff}>Doctor</Text>
        </View>
      );
    }
    if (title === 'Messages') {
      return active ? (
        <View>
          <Image source={ILMessageOn} style={styles.pict} />
          <Text style={styles.title}>Messages</Text>
        </View>
      ) : (
        <View>
          <Image source={ILMessageOff} style={styles.pict} />
          <Text style={styles.titleOff}>Messages</Text>
        </View>
      );
    }
    if (title === 'Hospital') {
      return active ? (
        <View>
          <Image source={ILMapOn} style={styles.pict} />
          <Text style={styles.title}>Hospitals</Text>
        </View>
      ) : (
        <View>
          <Image source={ILMapOff} style={styles.pict} />
          <Text style={styles.titleOff}>Hospitals</Text>
        </View>
      );
    }
    return <Image source={ILDoctorOn} style={styles.pict} />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  pict: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  title: {
    fontFamily: fonts.primary[400],
    color: colors.primary,
    fontSize: 10,
    marginTop: 4,
  },
  titleOff: {
    fontFamily: fonts.primary[400],
    color: colors.grey4,
    fontSize: 10,
    marginTop: 4,
  },
});
