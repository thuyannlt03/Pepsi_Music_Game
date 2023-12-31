import { StyleSheet, Text, View, ScrollView, Dimensions, Image, ToastAndroid } from 'react-native'
import React , { useState } from 'react'
import Background from '../../../component/background/Background'
import Header from '../../../component/header/Header'
import Form from '../../../component/form/Form'
import { OTPField} from '../../../component/input/TextField'
import Button from '../../../component/button/Button'
import { LOGO_PEPSI } from '../../../../../assets'
import { MainStackScreenProps } from '../../../navigation/stack/Navigation'
import { rtdb } from '../../../../core/api/url/RealTime'
import { User } from '../../../../core/model/User'
import { useDispatch } from 'react-redux'
import { addUser } from '../../../share-state/redux/reducers/userReducer'
import { addStatus } from '../../../share-state/redux/reducers/statusReducer'



const SignUpOTP: React.FC<MainStackScreenProps<'SignUpOTP'>>= ({navigation,route}) => {

  const [edt, setedt] = React.useState<string>('');
  console.log(edt)

  const SigInScreen = () => {
    navigation.navigate('SignInScreen');
  }

  const dispatch = useDispatch();
  const name = route?.params?.name;
  const phone = route?.params?.phone;
  const type = route?.params?.type;

  console.log(type)

  const [falseOTP, setFalseOTP] = useState(false);
  const [status, setStatus] = useState(type);

  const [phoneA, setphoneA] = useState(phone)
 

  const [code_1, setCode_1] = useState('');
  const [code_2, setCode_2] = useState('');
  const [code_3, setCode_3] = useState('');
  const [code_4, setCode_4] = useState('');

  let user: User = {};

  const complete = async () => {
    const getUserKey = await rtdb.ref('/User')
    .once('value', (value: any) => {
      value.forEach((data: any) => {
        if (data.val() != null) {
         
          if (data.val().phone == phoneA) {
            dispatch(addUser({
              keyUser: data.key,
              phone: data.val().phone,
              name: data.val().name,
              image: data.val().image,
              react: data.val().react,
              video: data.val().video,
            }))
          }
        }
      })
    }).then(() => {
      if (!type) {
        ToastAndroid.show("SignUp", ToastAndroid.SHORT);
        navigation.navigate('SignIn');
      }
      
    
    });
}


  const clickSignUp = async () => {
    const code = code_1.toString() + code_2.toString() + code_3.toString() + code_4.toString();
    console.log(code);
    if (code != '1912') {
      setFalseOTP(true);
    }
    else {
      console.log('kkk')
      if (type) {
        complete();
      }
      else {
        const newUser  = rtdb.ref('user').push();
        const userNew: User = {
          name: name ?? 'User',
          phone: phone ?? '9999',
          image: '456',
          react: 0,
          video: 0,
        }
        await newUser.set(userNew)
          .then(complete);

        
        console.log('New record key:', newUser.key);
      }
    }

  };

  
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
            <OTPField
             status={falseOTP}
             inputProps_1={{
               onChangeText(text) {
                 setCode_1(text)
               },
             }}
             inputProps_2={{
               onChangeText(text) {
                 setCode_2(text)
               },
             }}
             inputProps_3={{
               onChangeText(text) {
                 setCode_3(text)
               },
             }}
             inputProps_4={{
               onChangeText(text) {
                 setCode_4(text)
               },
             }} 
             />
          </Form>
          <Button 
            containerStyle = {styles.buttonLogIn}
            title='Xác nhận'
            onPress={clickSignUp}/>
        </View>
      </Background>
    </ScrollView>
  )
}

export default SignUpOTP

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
})