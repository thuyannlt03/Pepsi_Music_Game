import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import Button from '../../../component/button/Button'
import Background from '../../../component/background/Background'
import { HEADLINE_2, TALEN } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import { RemixStackScreenProps } from '../../../navigation/stack/RemixNavigation'

const ThankYou : React.FC<RemixStackScreenProps<'ThankYou'>> = ({ navigation, route }) => {

    const [edt, setedt] = React.useState<string>('');
    console.log(edt)
  
    
   
    const Recorded = () => {
        navigation.navigate('Recorded');
    }
    const ProfileNa = () => {
        navigation.navigate('ProfileNa');
    }
    return (
        <Background>
            <View style={styles.container}>
                <View style={{flexDirection:'column', justifyContent:'flex-start'}}>
                    <Text style={styles.text}>CHÚC MỪNG BẠN</Text>
                    <Text style={styles.text1}>ĐÃ HOÀN THÀNH</Text>
                    <Text style={styles.text1}>BẢN THU !</Text>
                </View>

                <View style={styles.main}>
                    <Image source={TALEN} style={styles.imageTalen} />

                </View>
                <View style={styles.boxButton}>
                    <Button
                        containerStyle={styles.buttonXem}
                        title='Xem bản thu'
                        onPress={ProfileNa}
                    />
                    <Button
                        containerStyle={styles.buttonPass}
                        title='Bỏ qua'
                        onPress={Recorded}
                        titleStyle={styles.title} />
                </View>
            </View>
        </Background>
    )
}

export default ThankYou

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        color: Colors.WHITE,
        fontFamily: 'Montserrat',
        fontSize: 36,
        fontStyle: 'italic',
        fontWeight: '900',
        letterSpacing: -0.209,
        marginTop: '25%',

    },
    text1: {
        color: Colors.WHITE,
        fontFamily: 'Montserrat',
        fontSize: 26,
        fontStyle: 'italic',
        fontWeight: '900',
        letterSpacing: -0.209,
    },
    main: {
        marginTop: - Dimensions.get('window').height * 0.3,
        alignItems: 'center',
    },
    imageTalen: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width,
        marginTop: Dimensions.get('window').height * 0.05,
    },
    boxButton: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.9,
        justifyContent: 'center',
        marginTop: -Dimensions.get('window').height * 0.55,
        alignItems: 'center'
    },
   
    buttonXem: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.075,
    },
    buttonPass: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.075,
        backgroundColor: Colors.BACKGROUND_FORM,
        marginTop: Dimensions.get('window').height * 0.2,
        marginLeft: -Dimensions.get('window').width * 0.8,
    },
    title: {
        color: Colors.WHITE,
    },


})