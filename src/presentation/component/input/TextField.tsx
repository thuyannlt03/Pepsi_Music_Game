import { StyleSheet, Text, View, TextInputProps, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../resource/value/Colors';

export interface SignInFieldProps {
  inputProps?: TextInputProps;
}

export interface SignUpFieldProps {
  inputProps_1?: TextInputProps;
  inputProps_2?: TextInputProps;
}

export interface OTPFieldProps {
  inputProps_1?: TextInputProps;
  inputProps_2?: TextInputProps;
  inputProps_3?: TextInputProps;
  inputProps_4?: TextInputProps;
  status?: boolean;
}


export const SignInField: React.FC<SignInFieldProps> = (props) => {
  const { inputProps } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <TextInput {...inputProps}
        style={styles.textInputSignIn}
        placeholder='Nhập số điện thoại' />
    </View>
  )
}


export const SignUpField: React.FC<SignUpFieldProps> = (props) => {
  const { inputProps_1, inputProps_2 } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng ký</Text>
      <TextInput {...inputProps_1} style={styles.textInputSignUp} />
      <TextInput {...inputProps_2} style={styles.textInputSignUp} />
    </View>
  )
}

export const OTPField: React.FC<OTPFieldProps> = (props) => {
  const { inputProps_1, inputProps_2, inputProps_3, inputProps_4, status } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title_1}>Nhập OTP</Text>
      <Text style={styles.des}>Nhập OTP vừa được gửi về máy bạn</Text>
      <View style = {styles.boxOTP}>
        <TextInput {...inputProps_1} style={styles.textInputOTP} />
        <TextInput {...inputProps_2} style={styles.textInputOTP} />
        <TextInput {...inputProps_1} style={styles.textInputOTP} />
        <TextInput {...inputProps_2} style={styles.textInputOTP} />
      </View>
      <Text style={[styles.des, {marginBottom: '0%'}]}>Bạn chưa nhận được mã?</Text>
      <TouchableOpacity>
        <Text style = {styles.textbtn}>Gửi lại mã</Text>
      </TouchableOpacity>
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.WHITE,
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: '700',
    lineHeight: 36,
    marginBottom: '5%',
  },
  textInputSignIn: {
    width: 300,
    height: 50,
    color: Colors.BLACK,
    backgroundColor: Colors.WHITE,
    fontWeight: '700',
    borderRadius: 6,
  },
  textInputSignUp: {
    width: 300,
    height: 40,
    color:Colors.BLACK,
    backgroundColor:Colors.WHITE,
    fontWeight: '700',
    borderRadius: 6,
    marginBottom: '3%',
  },
  title_1: {
    color: Colors.WHITE,
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: '700',
    lineHeight: 36,
  },
  des: {
    color: Colors.WHITE,
    fontSize: 14,
    lineHeight: 21,
    marginBottom: '5%',
  },
  desFail: {
    color: Colors.WHITE,
    fontSize: 14,
    lineHeight: 21,
    marginBottom: '5%',
    textAlign: 'center',
    width: '75%',
  },
  boxOTP: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: '5%',
  },
  textInputOTP: {
    width: 50,
    height: 50,
    borderRadius: 6,
    backgroundColor: Colors.WHITE,
    color:Colors.BLACK,
    textAlign: 'center',
  },
  textbtn: {
    color: Colors.WHITE,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
  },
})