import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { IlLogo } from '../../assets'
import { colors, fonts } from '../../utils'
import { Button, Input } from '../../component'


const LoginPage = () => {
  return (
    <View style={styles.container}>
        
        <View style={styles.content}>
        <Image source={IlLogo} style={styles.logo}/>
        <Text style={styles.judul}>Masuk dan mulai berkonsultasi</Text>
        <Input label={"asdasdsa"} title={"Email Address"} />
        <Input label={"asdasdsa"} title={"Password"} />
        <Text style={styles.forgot}>Forgot My Password</Text>
        <Button title={"Sign In"} />
        
        <Text style={styles.create}>Create New Account</Text>
        
        </View>
      
      
       
    </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : colors.white,
    },
    content : {
        marginHorizontal : 40,
        marginVertical : 40,
    },
    logo : {
        width : 86,
        height : 75,
    },
    judul : {
        fontFamily :  fonts.primary[600],
        color : colors.black,
        fontSize : 28,
        maxWidth : 236,
        marginTop: 40,
        marginBottom : 16,

    },
    forgot : {
      textDecorationLine: 'underline',
      fontSize : 12,
      fontFamily :  fonts.primary[400],
      marginTop : 10,
      marginBottom : 40,
    },
    create : {
        fontFamily :  fonts.primary[400],
        color : colors.grey2,
        fontSize : 16,
        marginTop : 30,
        textDecorationLine: 'underline',
        textAlign : 'center'

    }

})