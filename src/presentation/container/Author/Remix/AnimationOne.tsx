import { StyleSheet, Text, View, Image, Dimensions, ImageBackground } from 'react-native'
import React from 'react'
import Button from '../../../component/button/Button'
import Background from '../../../component/background/Background'
import Header from '../../../component/header/Header';
import { BACKGROUND_TAB, BACK, COVER_1 } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import { RemixStackScreenProps } from '../../../navigation/stack/RemixNavigation'


const AnimationOne: React.FC<RemixStackScreenProps<'AnimationOne'>> = ({ navigation, route }) => {

    const [edt, setedt] = React.useState<string>('');
    console.log(edt)



    const AnimationTwo = () => {
        navigation.navigate('AnimationTwo');
    }
    const goBack = () => {
        navigation.navigate('Remix');
    }

    const centerHeader = () => {
        return (
            <View style={styles.header_1}>
                <View style={styles.centerHeader}>
                    <Text style={styles.rule}>Tiền nhiều để làm gì</Text>
                    <Text style={styles.rule2}>Gducky ft.Lưu Hiền Trinh</Text>
                </View>
            </View>
        )
    }
    return (
        <Background>
            <View style={styles.container}>
                <Header
                    iconLeft={BACK}
                    leftHeader={goBack}
                    centerHeader={centerHeader()}
                />

                <View style={styles.banner}>
                    <Image source={COVER_1} style={styles.imgCover} />
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
    centerHeader: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header_1: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        fontWeight: '600',
        fontSize: 18,
        color: Colors.WHITE,
        textAlign: 'center',
    },
    
   
    rule: {
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 21,
        color: Colors.WHITE,
    },
    rule2: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        color: Colors.BLUE_CASI,
    },
    banner: {
        marginHorizontal: Dimensions.get("window").width * 0.07,
        marginTop: Dimensions.get('window').height * 0.03,
        marginBottom: Dimensions.get('window').height * 0.05,
    },
    imgCover: {
        marginBottom: Dimensions.get('window').height * 0.015,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: Colors.BORDER,
        height: Dimensions.get('window').height * 0.6,

    },
    textCover: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 24,
        color: Colors.WHITE,
        textAlign: 'center',
    },
    boxButton: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.9,
        justifyContent: 'center',
        marginTop: -Dimensions.get('window').height * 0.13,
        alignItems: 'center',
        marginHorizontal: Dimensions.get("window").width * 0.055,
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