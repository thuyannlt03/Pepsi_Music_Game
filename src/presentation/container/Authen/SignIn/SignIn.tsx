import { Dimensions, Image, ScrollView, StyleSheet, Text, View, Alert } from 'react-native'
import React , { useEffect, useState } from 'react'
import Button from '../../../component/button/Button'
import Background from '../../../component/background/Background'
import { Colors } from '../../../resource/value/Colors'
import Header from '../../../component/header/Header'
import { LOGO_PEPSI } from '../../../../../assets'
import {SignInField} from '../../../component/input/TextField'
import Form from '../../../component/form/Form'
import { MainStackScreenProps } from '../../../navigation/stack/Navigation'
import { rtdb } from '../../../../core/api/url/RealTime'
import { User } from '../../../../core/model/User'

const SignIn: React.FC<MainStackScreenProps<'SignIn'>> = ({ navigation, route }) => {

  const [edt, setedt] = React.useState<string>('');
  console.log(edt)

  // const signIn = () => {
  //   navigation.navigate('SignInOTP');
  // }
  const SignUpScreen = () => {
    navigation.navigate('SignUpScreen');
  }

  const [phone, setPhone] = useState('');
  const [listUser, setlistUser] = useState<User[]>([]);

  const [isHas, setIsHas] = useState(false);

  useEffect(() => {

    const getUser = async () => {
      const getUser = rtdb.ref('user').once('value');
      let list: User[] = [];
      await getUser.then((snapshot: any) => {
        snapshot.forEach((item: any) => {
          list.push(item.val());
        })
        // console.log(list);
        setlistUser(list);
      });
    }

    getUser();

    return () => { }
  }, [])

  const signin = () => {
    setIsHas(false);
    if (phone) {
      for (let i = 0; i < listUser.length; i++) {
        if (listUser.at(i)?.phone === phone) {
          console.log("111")
          setIsHas(true);
          break;
        }
      }
      if(isHas){
        console.log("okkk")
        navigation.navigate('SignInOTP', {
        phone,
        type: true});
      }else{
        Alert.alert('This phone number is not available');
      }
    }
    else {
      Alert.alert('Please enter your phone number');
    }

  }



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
            <SignInField
              inputProps={{
                onChangeText(text) {
                  setPhone(text);
                },
              }} 
              />
          </Form>
          <Button
            containerStyle={styles.buttonSignIn}
            title='Đăng nhập'
            onPress={signin}
            />
          <View style={styles.viewOr}>
            <View style={styles.line} />
            <Text style={styles.textOr}>hoặc</Text>
            <View style={styles.line} />
          </View>
          <Button 
            containerStyle = {styles.buttonSignUp}
            title='Đăng ký'
             onPress={SignUpScreen}
            titleStyle = {styles.title}/>
        </View>
      </Background>
    </ScrollView>
  )
}

export default SignIn

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
    height: 48,
  },
  buttonSignIn: {
    width: '90%',
    height: '5.4%',
    marginTop: '10%',
  },
  buttonSignUp: {
    width: '90%',
    height: '5.4%',
    backgroundColor: Colors.BACKGROUND_FORM,
    
  },
  title: {
    color: Colors.WHITE,
  },
  viewOr: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '5%',
  },
  line: {
    width: '45%',
    borderTopWidth: 0.5,
    borderColor: Colors.WHITE,
  },
  textOr: {
    width: '10%',
    textAlign: 'center',
    fontWeight: '700',
    color: Colors.WHITE,
  },
})