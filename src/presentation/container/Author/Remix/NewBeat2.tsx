import { StyleSheet, Text, View, ImageBackground, Pressable, Image, Dimensions } from 'react-native'
import React from 'react'
import Background from '../../../component/background/Background'
import { BACKGROUND_TAB, BACK, CENTER_BUTTON, TIME, COVER_1, SUBTRACT_HIDE, RECORD_BACK, CHECK } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import { MainStackScreenProps } from '../../../navigation/stack/Navigation'


const NewBeat2  : React.FC<MainStackScreenProps<'NewBeat2'>> = ({ navigation, route }) => {

    const [edt, setedt] = React.useState<string>('');
    console.log(edt)
  
    
    const NewBeat = () => {
      navigation.navigate('NewBeat');
    }
  return (
    <Background>

            <ImageBackground source={BACKGROUND_TAB} style={styles.headline}>
                <Pressable>
                    <Image source={BACK} style={styles.iconBack} />
                </Pressable>
                <View style={styles.beat}>
                    <Text style={styles.baihat}>Tiền nhiều để làm gì</Text>
                    <Text style={styles.casi}>GDucky ft.Lưu Hiền Trinh</Text>
                </View>
                <Pressable onPress={NewBeat}>
                    <Image source={SUBTRACT_HIDE} style={styles.iconSubTract} />
                </Pressable>
            </ImageBackground>

            <View style={styles.banner}>
                    <Image source={COVER_1} style={styles.imgCover}/>
                   
                </View>

                <View style={styles.group}>
                <Text>00:00</Text>
                <Image source={TIME} style={styles.time} />
                <Text>05:00</Text>
            </View>
            <View style={styles.group1}>
                <Image source={RECORD_BACK} style={styles.RB} />
                <Image source={CENTER_BUTTON} style={styles.center} />
                <Image source={CHECK} style={styles.Check} />
            </View>

        </Background>
  )
}

export default NewBeat2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    headline: {
        height: Dimensions.get('window').height * 0.13,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row'
    },
    iconBack: {
        marginTop: Dimensions.get('window').height * 0.04,
        marginLeft: '20%',
    },
    iconSubTract: {
        marginTop: Dimensions.get('window').height * 0.04,
        marginLeft: '40%',
    },
    beat: {

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    baihat: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 21,
        color: Colors.WHITE,
        marginTop: Dimensions.get('window').height * 0.04,
        marginLeft: Dimensions.get('window').height * 0.03,
    },
    casi: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        color: Colors.BLUE_CASI,
        marginLeft: Dimensions.get('window').height * 0.03,

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


    group: {
        marginTop: Dimensions.get('window').height * 0.01,
        marginLeft: - Dimensions.get('window').height * 0.01,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    time: {
        marginLeft: Dimensions.get('window').height * 0.01,
        marginRight: Dimensions.get('window').height * 0.01,
    },
    group1: {
        marginTop: Dimensions.get('window').height * 0.01,
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    center: {

        resizeMode: 'contain',
        height: Dimensions.get('screen').height * 0.15,
        marginTop: Dimensions.get('window').height * 0.01,

    },

    RB:{
        marginLeft: "20%",
        width: 50,
        height: 50
    },
    Check:{
        width: 50,
        height: 50,
        marginRight:'20%',
    },

})