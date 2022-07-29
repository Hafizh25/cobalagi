import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../component';
import React from 'react';
const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header />
      <View style={styles.content}>
        <Input title={'Full Name'} />
        <Input title={'Pekerjaan'} />
        <Input title={'Email Address'} />
        <Input title={'Password'} />
        <Gap height={40} />
        <Button
          title={'Continue'}
          onPress={() => navigation.navigate('UploadFoto')}
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    marginHorizontal: 40,
    marginTop: 16,
  },
});
