import { StyleSheet, Text, View, ImageBackground, Pressable, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Background from '../../../component/background/Background'
import { BACKGROUND_TAB, BACK, SUBTRACT, CENTER_BUTTON, TIME, RECORD_BACK, CHECK, SUBTRACT_HIDE, COVER_1 } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import { RemixStackScreenProps } from '../../../navigation/stack/RemixNavigation'
import DialogNotification from '../../../component/dialog/DialogNotification';
import Header from '../../../component/header/Header';
import Slider from '@react-native-community/slider';


const Recording: React.FC<RemixStackScreenProps<'Recording'>> = ({ navigation, route }) => {

    const text1 = "Nhưng mà rồi một ngày vịt bị";
    const boldAndUpperTexts1 = ["Nhưng mà rồi một ngày vịt bị"];
    const regex1 = new RegExp(`(${boldAndUpperTexts1.join('|')})`, 'gi');

    const getTextWithBoldAndUpper1 = (text1: string, boldAndUpperTexts1: any) => {
        const parts1 = text1.split(regex1);
        return parts1.map((part, index) => {
            const isBoldAndUpper1 = boldAndUpperTexts1.includes(part);
            return isBoldAndUpper1 ? (
                <Text key={index} style={{ fontWeight: 'bold', fontSize: 16, color: '#ffe512' }}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };
    const text2 = "cuốn phăng đi";
    const boldAndUpperTexts2 = ["cuốn phăng đi"];
    const regex2 = new RegExp(`(${boldAndUpperTexts2.join('|')})`, 'gi');

    const getTextWithBoldAndUpper2 = (text2: string, boldAndUpperTexts2: any) => {
        const parts2 = text2.split(regex2);
        return parts2.map((part, index) => {
            const isBoldAndUpper2 = boldAndUpperTexts2.includes(part);
            return isBoldAndUpper2 ? (
                <Text key={index} style={{ fontWeight: 'bold', fontSize: 16, color: '#ffe512' }}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };
    const [onLyric, setonLyric] = useState(false);
    const [onStart, setonStart] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [onRefresh, setonRefresh] = useState(false);
    const [onBack, setonBack] = useState(false);
    const [onSubmit, setonSubmit] = useState(false);
    const [onRemix, setonRemix] = useState(false);
    const [title, setTitle] = useState<string>();
    const [btnLeft, setBtnLeft] = useState<string>();
    const [btnRight, setBtnRight] = useState<string>();



    const onClick = (type: string) => {
        if (type === "refresh") {
            setTitle("Bạn có chắc muốn xóa bản thu âm này ?");
            setBtnLeft("Hủy");
            setBtnRight("Xóa");
            setonRefresh(true);
            setModalVisible(true);
        }
        if (type === "back") {
            setTitle("Bạn có chắc muốn xóa bản thu âm này ?");
            setBtnLeft("Hủy");
            setBtnRight("Xóa");
            setonBack(true);
            setModalVisible(true);
        }
        if (type === "submit") {
            setTitle("Vui lòng xác nhận nếu bạn đã thu âm xong");
            setBtnLeft("Quay lại");
            setBtnRight("Xác nhận");
            setonSubmit(true);
            setModalVisible(true);
        }
    };
    const onDelete = () => {
        console.log(onRefresh);
        if (onRefresh) {
            setonStart(false);
            setonRefresh(false);
            setModalVisible(false);
        }
        if (onBack) {

        }
        if (onSubmit) {
            setonRemix(true);
            setonSubmit(false);
            setModalVisible(false);
        }

    };
    const onCancel = () => {
        setonRefresh(false);
        setModalVisible(false);
        setonSubmit(false);
    };

    const onCancelRemix = () => {
        setonRemix(false);
        navigation.navigate('AnimationOne')
    };

    const onDeleteRemix = () => {
        setonRemix(false);
        navigation.navigate('Remix')
    };


   

    const clickStart = () => {
        setonStart(true);
    };

    const goLyric = () => {
        setonLyric(!onLyric);
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

            <Header
                iconLeft={BACK}
                leftHeader={() => onClick("back")}
                centerHeader={centerHeader()}
                iconRight={!onLyric ? SUBTRACT_HIDE : SUBTRACT}
                rightHeader={goLyric} />

            <View style={styles.gr}>
                {
                    onLyric ?
                        <ScrollView>
                            <Text style={styles.loi}>Lại là Ducky và sau nhiều lần </Text>
                            <Text style={styles.loi}>đã bị trói buộc thì</Text>
                            <Text style={styles.loi}>Thử đoán xem hôm nay</Text>
                            <Text style={styles.loi}>thằng Ducky này có thể nói được gì</Text>
                            <Text style={styles.loi}>Three of them say to me</Text>
                            <Text style={styles.loi}>"Baby I choose this rhymes"</Text>
                            <Text style={styles.loi}>Để rồi thì chú vịt vàng</Text>
                            <Text style={styles.loi}>lại làm cho cả sở thú nhịp nhàng</Text>
                            <Text style={styles.loi}>{getTextWithBoldAndUpper1(text1, boldAndUpperTexts1)}</Text>
                            <Text style={styles.loi}>{getTextWithBoldAndUpper2(text2, boldAndUpperTexts2)}</Text>
                            <Text style={styles.loi}>Quên đi bao yêu thương xung quanh</Text>
                            <Text style={styles.loi}>chỉ để chạy theo đống money</Text>
                            <Text style={styles.loi}>Bao nhiêu suy tư, bây giờ, cần đi làm ăn gì</Text>
                            <Text style={styles.loi}>Ta bay theo hương, bay theo hoa</Text>
                            <Text style={styles.loi}>just like a bee for honey</Text>
                            <Text style={styles.loi}>And just like that</Text>
                            <Text style={styles.loi}>Vịt tự nhủ là bản thân không được nhu mì đi</Text>
                            <Text style={styles.loi}>Vịt đánh đổi anh em bè bạn lấy bộ đồ Louis V</Text>
                            <Text style={styles.loi}>Để trở thành người đàn ông tham vọng</Text>
                            <Text style={styles.loi}>Những thứ xung quanh thật ra</Text>
                            <Text style={styles.loi}>đều là không quan trọng</Text>
                        </ScrollView>
                        :
                        <View style={styles.boxImage}>
                            <View style={styles.content}>
                                <Image source={COVER_1} style={styles.image} />
                            </View>
                        </View>
                }
            </View>




            <View style={styles.boxSilder}>
                <Text>00:00</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={10}
                    minimumTrackTintColor={Colors.BLUE_CARD}
                    maximumTrackTintColor={Colors.WHITE}
                    thumbTintColor={Colors.BLUE_CARD}
                />

                <Text>05:00</Text>
            </View>
            <View style={styles.boxMic}>
                {onStart ?
                    <TouchableOpacity style={styles.btnReact} onPress={() => onClick("refresh")}>
                        <Image source={RECORD_BACK} style={styles.icon} />
                    </TouchableOpacity>
                    :
                    <View></View>
                }
                <TouchableOpacity style={styles.btnMic} onPress={clickStart}>
                    <Image source={CENTER_BUTTON} style={styles.center} />
                </TouchableOpacity>
                {onStart ?
                    <TouchableOpacity style={styles.btnReact} onPress={() => onClick("submit")}>
                        <Image source={CHECK} style={styles.icon} />
                    </TouchableOpacity>
                    :
                    <View></View>
                }
            </View>
            {
                modalVisible ?
                    <DialogNotification
                        title={title}
                        btnLeft={btnLeft}
                        btnRight={btnRight}
                        isVisibile={modalVisible}
                        onPressL={onCancel}
                        onPressR={onDelete}
                    />
                    :
                    <View></View>
            }
            {
                onRemix ?
                    <DialogNotification
                        title="Bạn có muốn remix bản thu âm này không?"
                        btnLeft="Không remix"
                        btnRight="Có remix"
                        isVisibile={onRemix}
                        onPressL={onCancelRemix}
                        onPressR={onDeleteRemix}
                        isExit={true}
                    />
                    :
                    <View></View>
            }

        </Background>
    )
}

export default Recording

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

    boxImage: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: Dimensions.get('screen').width * 0.95,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        padding: 2,
        borderRadius: 10,
        borderColor: Colors.GRAY,
    },
    image: {
        width: Dimensions.get('screen').width * 0.935,
        height: Dimensions.get('screen').height * 0.6,
        borderRadius: 10,
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
    
    gr: {
        marginTop: Dimensions.get('window').height * 0.02,
        textAlign: 'center'

    },
    loi: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 21,
        textAlign: 'center',
        color: Colors.LOI

    },
    group: {
        marginTop: Dimensions.get('window').height * 0.11,
        marginLeft: - Dimensions.get('window').height * 0.01,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    time: {
        marginLeft: Dimensions.get('window').height * 0.01,
        marginRight: Dimensions.get('window').height * 0.01,
    },
    
    center: {

        resizeMode: 'contain',
        height: Dimensions.get('screen').height * 0.15,
        marginTop: Dimensions.get('window').height * 0.01,

    },

    
    boxSilder: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.05,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Dimensions.get('window').width * 0.12,
        marginTop: Dimensions.get('window').height * 0.02,
    },
    slider: {
        width: "80%",
    },


    boxMic: {
        marginTop: Dimensions.get('window').height * 0.01,
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnMic: {
        width: Dimensions.get('screen').height * 0.15,
        height: Dimensions.get('screen').height * 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 90,
        marginHorizontal: Dimensions.get('screen').height * 0.03,
    },
    icon: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 0.09
    },
    btnReact: {
        width: Dimensions.get('screen').width * 0.12,
        height: Dimensions.get('screen').width * 0.12,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,

        borderColor: Colors.WHITE
    },

    
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalView: {
        width: Dimensions.get('screen').width * 0.8,
        backgroundColor: Colors.BLUE_PEPSI,
        borderRadius: 16,
        padding: 35,
        alignItems: 'center',
    },
    boxButtonDialog: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginTop: Dimensions.get('screen').height * 0.02,
    },
    buttonLeft: {
        width: Dimensions.get('screen').width * 0.25,
        backgroundColor: Colors.BLUE_PEPSI,
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.WHITE,
    },
    buttonRight: {
        width: Dimensions.get('screen').width * 0.25,
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        padding: 10,
    },
    textLeft: {
        color: Colors.WHITE,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textRight: {
        color: Colors.BLUE_PEPSI,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: Colors.WHITE
    },
})