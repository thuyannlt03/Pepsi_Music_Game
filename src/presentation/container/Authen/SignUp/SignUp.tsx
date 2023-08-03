import { Dimensions, Image, ScrollView, StyleSheet, Text, View, Alert } from 'react-native'
import React , { useState, useEffect } from 'react'
import Button from '../../../component/button/Button'
import Background from '../../../component/background/Background'
import { Colors } from '../../../resource/value/Colors'
import Header from '../../../component/header/Header'
import {LOGO_PEPSI } from '../../../../../assets'
import {SignUpField} from '../../../component/input/TextField'
import Form from '../../../component/form/Form'
import { MainStackScreenProps } from '../../../navigation/stack/Navigation'
import { User } from '../../../../core/model/User'
import { rtdb } from '../../../../core/api/url/RealTime'




const SignUp: React.FC<MainStackScreenProps<'SignUp'>>= ({navigation,route}) => {

  const [edt, setedt] = React.useState<string>('');
  console.log(edt)

  const SignIn = () => {
    navigation.navigate('SignIn');
  }
  const SignUpOTP = () => {
    navigation.navigate('SignUpOTP');
  }

  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [listUser, setlistUser] = useState<User[]>([]);


  const [isHas, setIsHas] = useState(false);

  useEffect(() => {

    const getUser = async () => {
      const getUser = rtdb.ref('users').once('value');
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


    const completeSignUp = () => {
      console.log(phone + name);
      setIsHas(false);
      if (!phone) {
        Alert.alert('Please enter your phone');
      }
      else if (!name) {
        Alert.alert('Please enter your name');
      }
      else {
        console.log("okkk")
        console.log(listUser)
        
        for (let i = 0; i < listUser.length; i++) {
          if (listUser.at(i)?.phone === phone) {
            console.log("111")
            setIsHas(true);
            Alert.alert('This number is already in use');
            setPhone('')
            return;
          }
          else if (listUser.at(i)?.name === name) {
            console.log("2222")
            setIsHas(true);
            Alert.alert('This name is already in use');
            setName('')
            return;
          }
        }
        if (!isHas) {
          navigation.navigate('SignUpOTP', {
            phone,
            name,
            type: false
          });
        }
      }
    }
  




  const headerCenter = () => {
    return (
      <View >
        <Image source={LOGO_PEPSI} style = {styles.image}/>
      </View>
    );
  }

  return (
    <ScrollView>
      <Background>
        <View style={styles.container} >
          <Header
            centerHeader={headerCenter()} 
            containerStyle = {styles.header}/>
          <Form>
            <SignUpField
              inputProps_1={{
                onChangeText(text) {
                  setPhone(text)
                },
                value: phone
              }}
              inputProps_2={{
                onChangeText(text) {
                  setName(text)
                },
                value: name
              }}
               />
          </Form>
          <Button 
            containerStyle = {styles.buttonLogIn}
            title='Lấy mã OTP'
            onPress={completeSignUp}
            />
          <View style = {styles.viewOr}>
            <View style = {styles.line}/>
            <Text style = {styles.textOr}>hoặc</Text>
            <View style = {styles.line}/>
          </View>
          <Button 
            containerStyle = {styles.buttonRegister}
            title='Đăng nhập'
            onPress={SignIn}
            titleStyle = {styles.title}/>
        </View>
      </Background>
    </ScrollView>
  )
}

export default SignUp

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
  buttonLogIn: {
    width: '90%',
    height: '5.4%',
    marginTop: '10%',
  },
  buttonRegister: {
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
    justifyContent:'space-between',
    alignItems: 'center',
    marginVertical: '3%',
  },
  line : {
    width: '45%',
    borderTopWidth: 0.5,
    borderColor: Colors.WHITE
  },
  textOr: {
    width: '10%',
    textAlign: 'center',
    fontWeight: '700',
    color: Colors.WHITE
  },
})