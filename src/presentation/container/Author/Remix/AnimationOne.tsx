import { StyleSheet, Text, View, Image, Dimensions, ImageBackground } from 'react-native'
import React from 'react'
import Button from '../../../component/button/Button'
import Background from '../../../component/background/Background'
import { BACKGROUND_TAB, BACK, COVER_1 } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import { MainStackScreenProps } from '../../../navigation/stack/Navigation'


const AnimationOne : React.FC<MainStackScreenProps<'AnimationOne'>> = ({ navigation, route }) => {

    const [edt, setedt] = React.useState<string>('');
    console.log(edt)
  
    
   
    const AnimationTwo = () => {
        navigation.navigate('AnimationTwo');
    }
    return (
        <Background>
            <View style={styles.container}>
                <ImageBackground source={BACKGROUND_TAB} style={styles.headline}>
                    <Image source={BACK} style={styles.iconBack} />
                    <View style={{ flexDirection: 'column', justifyContent:'center', alignItems:'center' }}>
                        <Text style={styles.rule}>Tiền nhiều để làm gì</Text>
                        <Text style={styles.rule2}>Gducky ft.Lưu Hiền Trinh</Text>
                    </View>
                </ImageBackground>
                <View style={styles.banner}>
                    <Image source={COVER_1} style={styles.imgCover}/>
                    <Text style={styles.textCover}>Bạn có muốn tạo video animation không?</Text>
                </View>
                <View style={styles.boxButton}>
                    <Button
                        containerStyle={styles.buttonTao}
                        title='Tạo Animation'
                        onPress={AnimationTwo}
                    />
                    <Button
                        containerStyle={styles.buttonBo}
                        title='Hủy Bỏ'
                        //  onPress={SignUpScreen}
                        titleStyle={styles.title} />
                </View>
            </View>
        </Background>

    )
}

export default AnimationOne

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headline: {
        height: Dimensions.get('window').height * 0.13,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    iconBack: {
        marginTop: Dimensions.get('window').height * 0.04,
        marginLeft: Dimensions.get('window').width * 0.03,
    },
    rule: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 21,
        color: Colors.WHITE,
        marginTop: Dimensions.get('window').height * 0.04,
        marginLeft: Dimensions.get('window').width * 0.25,
    },
    rule2:{
        marginLeft: Dimensions.get('window').width * 0.25,
        fontFamily: 'Montserrat',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        color: Colors.BLUE_CASI,
    },
    banner:{
        marginHorizontal:Dimensions.get("window").width * 0.07,
        marginTop:Dimensions.get('window').height *0.03,
        marginBottom:Dimensions.get('window').height *0.05,
    },
    imgCover:{
        marginBottom:Dimensions.get('window').height *0.015,
        borderRadius:12,
        borderWidth:2,
        borderColor:Colors.BORDER,
        height: Dimensions.get('window').height * 0.6,

    },
    textCover:{
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 24,
        color: Colors.WHITE,
        textAlign:'center',
    },
    boxButton: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.9,
        justifyContent: 'center',
        marginTop: -Dimensions.get('window').height * 0.13,
        alignItems: 'center',
        marginHorizontal:Dimensions.get("window").width * 0.055,
    },
    buttonTao: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').height * 0.07,
    },
    buttonBo: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').height * 0.07,
        backgroundColor: Colors.BACKGROUND_FORM,
        marginTop: Dimensions.get('window').height * 0.18,
        marginLeft: -Dimensions.get('window').width * 0.7,
    },
    title: {
        color: Colors.WHITE,
    },
   
})