import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Background from '../../../component/background/Background'
import { BACKGROUND_TAB, BACK, COVER_1, TIME_RED, PEN, SHARE } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import Button from '../../../component/button/Button'
import Header from '../../../component/header/Header';
import { RemixStackScreenProps } from '../../../navigation/stack/RemixNavigation'
import DialogLoad from '../../../component/dialog/DialogLoad'
import DialogNotification from '../../../component/dialog/DialogNotification'

const AnimationThree : React.FC<RemixStackScreenProps<'AnimationThree'>> = ({ navigation, route }) => {

    const [edt, setedt] = React.useState<string>('');
    console.log(edt)
  
    
   
    const Search = () => {
        navigation.navigate('Search');
    }
    const ThankYou = () => {
        navigation.navigate('ThankYou');
    }
    const goBack = () => {
        navigation.navigate('AnimationTwo');
      }


     
     
       
       const [isStart, setisStart] = useState(false);
       const [isVisibile, setisVisibile] = useState(false);
       const [isDelete, setisDelete] = useState(false)
   
       const goForward = () => {
        console.log(123)
        setisVisibile(true);
        setisStart(true);
    };

    const doCancel = () => {
        setisDelete(true)
    };


    const deleteRecord = () => {
        setisDelete(false)
        navigation.navigate('Recording');
    };

    const noDelete = () => {
        setisDelete(false);
    };

      
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
                <View style={styles.gr}>
                    <Image source={COVER_1} style={styles.img} />
                    <Image source={TIME_RED} style={styles.imgTime} />
                    <View style={styles.grbottom}>
                        <View style={styles.leftgr}>
                            <View style={styles.grMini}>
                                <Text style={styles.textTitle}>Tiền nhiều để làm gì</Text>
                                <Text style={styles.textMini}>Gducky ft.Lưu Hiền Trinh</Text>
                            </View>
                            <TouchableOpacity onPress={Search}>
                                <Image source={PEN} style={styles.imgPen}/>
                            </TouchableOpacity>
                        </View>
                        <Image source={SHARE} style={styles.share} />
                    </View>
                </View>
                <View style={styles.boxButton}>
                    <Button
                        containerStyle={styles.buttonTao}
                        title='Xong'
                        onPress={goForward}
                    />
                    <Button
                        containerStyle={styles.buttonBo}
                        title='Hủy Bỏ'
                        onPress={doCancel}
                        titleStyle={styles.title} />
                </View>
            </View>
            {
                isVisibile ?
                    <DialogLoad
                        isStart={isStart}
                        isVisibile={isVisibile}
                        navigation={navigation}
                    />
                    : <View></View>
            }
            {
                isDelete ?
                <DialogNotification
                title='Bạn có muốn hủy bản ghi âm này không'
                btnLeft='Không'
                btnRight='Có'
                isVisibile={isDelete}
                onPressL={noDelete}
                onPressR={deleteRecord}
                />
                :
                <View></View>
            }

        </Background>

    )
}

export default AnimationThree

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
    
    gr: {
        height: Dimensions.get('window').height * 0.63,
        width: Dimensions.get('window').width * 0.9,
        backgroundColor: '#0054A16E',
        borderWidth:2,
        borderRadius:12,
        borderColor:Colors.BLUE_CASI,
        marginTop: Dimensions.get('window').height * 0.02,
        marginHorizontal:Dimensions.get('window').width * 0.05,
    },
    img: {
        height: Dimensions.get('window').height * 0.52,
        width: Dimensions.get('window').width * 0.89,
        borderTopLeftRadius:12,
        borderTopRightRadius:12,
    },
    imgTime: {
        alignSelf:'center',
        marginTop: Dimensions.get('window').height * 0.01,
    },
    grbottom: {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop: Dimensions.get('window').height * 0.01,
    },
    leftgr: {
        flexDirection:'row',
        justifyContent:'space-around',
        marginLeft:-Dimensions.get('window').width * 0.15,
    },
    grMini: {
        flexDirection:'column',
        justifyContent:'space-around',
    },
    imgPen:{
        marginTop: Dimensions.get('window').height * 0.005,
        marginLeft:Dimensions.get('window').width * 0.02,
    },
    textTitle: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 21,
        color: Colors.WHITE,
    },
    textMini: {
        fontFamily: 'Montserrat',
        fontSize: 11,
        fontWeight: '400',
        lineHeight: 18,
        color: Colors.WHITE,
    },
    share: {
        marginRight:-Dimensions.get('window').width * 0.15,

    },
    boxButton: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.9,
        justifyContent: 'center',
        marginTop: -Dimensions.get('window').height * 0.05,
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