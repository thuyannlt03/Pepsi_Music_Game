import { StyleSheet, View, ScrollView, Dimensions, Image } from 'react-native'
import React from 'react'
import Background from '../../../component/background/Background'
import Header from '../../../component/header/Header'
import Form from '../../../component/form/Form'
import { OTPField } from '../../../component/input/TextField'
import Button from '../../../component/button/Button'
import { LOGO_PEPSI } from '../../../../../assets'


const SignInOTP = () => {
  const signIn = () => { }

  const headerCenter = () => {
    return (
      <View >
        <Image source={LOGO_PEPSI} style={styles.image} />
      </View>
    );
  }

  return (
    <ScrollView>
      <Background>
        <View style={styles.container} >
          <Header
            centerHeader={headerCenter()}
            containerStyle={styles.header} />
          <Form>
            <OTPField />
          </Form>
          <Button
            containerStyle={styles.buttonSignIn}
            title='Đăng nhập'
            onPress={signIn} />
        </View>
      </Background>
    </ScrollView>
  )
}

export default SignInOTP

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    alignItems: 'center',
  },
  header: {
    marginVertical: '8.3%',
  },
  image: {
    resizeMode: 'contain',
    height: 48
  },
  buttonSignIn: {
    width: '90%',
    height: '5.4%',
    marginTop: '10%',
  },
})