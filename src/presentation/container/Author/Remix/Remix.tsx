import { StyleSheet, Switch, Text, View, ImageBackground, Pressable, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Button from '../../../component/button/Button'
import Background from '../../../component/background/Background'
import { BACKGROUND_TAB, BACK, SUBTRACT, SUBTRACT_HIDE, CENTER_BUTTON, TIME, RECORD_BACK, CHECK, PERFORM, VOLUME, PLAY } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import { RemixStackScreenProps } from '../../../navigation/stack/RemixNavigation'
import Slider from '@react-native-community/slider';
import DialogNotification from '../../../component/dialog/DialogNotification';
import DialogProgress from '../../../component/dialog/DialogProgress'
import Header from '../../../component/header/Header';



const Remix: React.FC<RemixStackScreenProps<'Remix'>> = ({navigation, route}) => {

   const [isEnabled, setisEnabled] = useState(false);
   const toggleSwitch = () => setisEnabled (previousState => !previousState);
    const [modalVisible, setModalVisible] = useState(false);

    const [title, setTitle] = useState<string>();
    const [btnLeft, setBtnLeft] = useState<string>();
    const [btnRight, setBtnRight] = useState<string>();
    const [onHuy, setonHuy] = useState(false);
    const [onBack, setonBack] = useState(false);
    const [onSubmit, setonSubmit] = useState(false);
    const [isExit, setisExit] = useState(false);
    const [onProgree, setonProgree] = useState(false);
    const [onStart, setonStart] = useState(false);


    const clickStart = () => {
        setonStart(true);
    };
    const onClick = (type: string) => {
        if (type === "cancel") {
            setTitle("Bạn có chắc muốn hủy bản thu âm này ?");
            setBtnLeft("Không");
            setBtnRight("Có");
            setonHuy(true);
            setModalVisible(true);
        }
        if (type === "back") {
            setTitle("Nếu bạn trở về bản thu âm này sẽ không được lưu");
            setBtnLeft("Rời khỏi");
            setBtnRight("Tiếp tục");
            setonBack(true);
            setModalVisible(true);
        }
        if (type === "submit") {
            setTitle("Vui lòng xác nhận nếu bạn đã remix xong");
            setBtnLeft("Quay lại");
            setBtnRight("Xác nhận");
            setonSubmit(true);
            setisExit(true);
            setModalVisible(true);
        }
      


    };

    const onDelete = () => {
        if (onHuy) {
            setonHuy(false);
            setModalVisible(false);
            //navigation
            navigation.navigate('Recording')
        }
        if (onBack) {
            setonBack(false);
            setModalVisible(false);
            //navigation
            navigation.navigate('Recording')
        }
        if (onSubmit) {
            setonSubmit(false);
            setisExit(false);
            setModalVisible(false);
            setonProgree(true);
            navigation.navigate('AnimationOne')
        }
        
    };

    const onCancel = () => {
        setonHuy(false);
        setonBack(false);
        setonSubmit(false);
        setisExit(false);
        setModalVisible(false);
    };

    const onExit = () => {
        setisExit(false);
        setModalVisible(false);
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

            <Header
                iconLeft={BACK}
                leftHeader={() => onClick("back")}
                centerHeader={centerHeader()}
            />

            <View style={styles.group}>
                <View style={styles.group1}>
                    <View style={styles.Volume}>
                        <Image source={VOLUME} style={styles.ImgVolume} />
                        <Pressable style={styles.button}>
                            <Text style={styles.text}>Auto Tune</Text>
                        </Pressable>
                    </View>
                    <View style={styles.Volume}>
                        <Image source={VOLUME} style={styles.ImgVolume} />
                        <Pressable style={styles.button1}>
                            <Text style={styles.text}>Fast Flow</Text>
                        </Pressable>
                    </View>
                    <View style={styles.Volume}>
                        <Image source={VOLUME} style={styles.ImgVolume} />
                        <Pressable style={styles.button1}>
                            <Text style={styles.text}>Voice Pitch</Text>
                        </Pressable>
                    </View>


                </View>
                <View style={styles.group2}>
                    <Text style={styles.textVoice}>Voice Remix (Manual)</Text>
                    <Switch
                        style={styles.on}
                        trackColor={{ false: '#767577', true:  '#005cb2' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <Image source={PERFORM} style={styles.Perform} />
                <Image source={PLAY} style={styles.Play} />


            </View>



            <View style={styles.boxButton}>
         
                <Button
                    containerStyle={styles.buttonXem}
                    title='Tiếp theo'
                    onPress={() =>onClick("submit")}
                />
             
                <Button
                    containerStyle={styles.buttonPass}
                    title='Hủy Bỏ'
                    titleStyle={styles.title} 
                    onPress={() => onClick("cancel")}/>
            </View>
            {
                    modalVisible ? <DialogNotification
                        title= {title}
                        btnLeft= {btnLeft}
                        btnRight= {btnRight}
                        isVisibile={modalVisible}
                        onPressL={onCancel}
                        onPressR={onDelete}
                        isExit={isExit}
                        onPressE={onExit}
                        
                    />
                        :
                        <View></View>
                }
                 {
                    onProgree ? <DialogProgress
                    title="Video đang được tải lên"
                    
                    isVisibile={onProgree}
                       
                        
                    />
                        :
                        <View></View>
                }


        </Background>
    )
}

export default Remix

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
    group: {
        borderWidth: 1,
        borderColor: Colors.WHITE,
        borderRadius: 12,
        backgroundColor: Colors.BLUE,
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.6,
        alignItems: 'center',
        marginTop: Dimensions.get('window').height * 0.02,
        marginHorizontal: Dimensions.get('window').height * 0.025,

    },

    group1: {
        marginTop: Dimensions.get('window').height * 0.01,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    Volume: {
        borderWidth: 1,
        borderColor: Colors.WHITE,
        borderRadius: 12,
        backgroundColor: Colors.BLUE,
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').height * 0.4,
        alignItems: 'center',
        marginTop: Dimensions.get('window').height * 0.02,
        marginHorizontal: Dimensions.get('window').height * 0.025,
    },
    ImgVolume: {
        marginTop: Dimensions.get('window').height * 0.02,
    },
    button: {
        backgroundColor: Colors.RED,
        width: Dimensions.get('window').width * 0.142,
        height: Dimensions.get('window').height * 0.05,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        borderWidth: 1,
        borderColor: Colors.RED,
        alignItems: 'center',

        marginTop: Dimensions.get('window').height * 0.005,
    },
    button1: {
        backgroundColor: Colors.BLUE,
        width: Dimensions.get('window').width * 0.142,
        height: Dimensions.get('window').height * 0.05,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        borderWidth: 1,
        borderColor: Colors.BLUE,
        alignItems: 'center',

        marginTop: Dimensions.get('window').height * 0.005,
    },
    text: {
        fontSize: 12,
        color: Colors.WHITE,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        lineHeight: 16,
        textAlign: 'center',


    },
    group2: {
        marginTop: Dimensions.get('window').height * 0.02,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    textVoice: {
        fontSize: 16,
        color: Colors.WHITE,
        fontFamily: 'Montserrat',
        fontWeight: '900',
        lineHeight: 21,
        textAlign: 'center',
        marginLeft: - Dimensions.get('window').width * 0.01,

    },
    on: {
        marginLeft: Dimensions.get('window').width * 0.1,

    },
    Perform: {
        marginTop: Dimensions.get('window').height * 0.03,
    },
    Play: {
        marginTop: Dimensions.get('window').height * 0.005,
    },


    boxButton: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.9,
        justifyContent: 'center',
        marginTop: -Dimensions.get('window').height * 0.05,
        alignItems: 'center',
        marginHorizontal: Dimensions.get('window').height * 0.025,
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