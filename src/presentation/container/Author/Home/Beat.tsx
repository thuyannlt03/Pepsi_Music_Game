import { StyleSheet, Text, View, ImageBackground, ScrollView, Dimensions, Image, Pressable } from 'react-native'
import React from 'react'
import Background from '../../../component/background/Background'
import { Colors } from '../../../resource/value/Colors'
import { MainStackScreenProps } from '../../../navigation/stack/Navigation'

import {BACKGROUND_TAB, BACK, CARD_PEPSI, ICON_MIC, MIC, PEPSI_BLACK_CARD, PEPSI_CARD, PEPSI_BLACK } from '../../../../../assets'

const Beat : React.FC<MainStackScreenProps<'Rules'>> = ({ navigation, route }) => {

    const [edt, setedt] = React.useState<string>('');
    console.log(edt)

    const SigInScreen = () => {
        navigation.navigate('SigInScreen');
    }

    return (
       
        <Background>
             <ImageBackground source={BACKGROUND_TAB} style={styles.headline}>
                    <Pressable  onPress={SigInScreen}>
                        <Image source={BACK} style={styles.iconBack} />
                    </Pressable>
                    <Text style={styles.beat}>Beat nổi bật</Text>
            </ImageBackground>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.card}>
                        <Image source={CARD_PEPSI} style={styles.image} />
                        <View style={styles.group}>
                            <Text style={styles.baihat}>Tiền nhiều để làm gì</Text>
                            <Text style={styles.casi}>CDucky ft.Lưu Hiền Trinh</Text>
                            <View style={styles.group1}>
                                <Image source={ICON_MIC} style={styles.icon_mic} />
                                <Text style={styles.soluong}>9.023 lượt cover</Text>
                            </View>
                        </View>
                        <Image source={MIC} style={styles.mic} />
                    </View>
                    <View style={styles.card1}>
                        <Image source={PEPSI_BLACK_CARD} style={styles.image} />
                        <View style={styles.group}>
                            <Text style={styles.baihat}>Tiền nhiều để làm gì</Text>
                            <Text style={styles.casi}>CDucky ft.Lưu Hiền Trinh</Text>
                            <View style={styles.group1}>
                                <Image source={ICON_MIC} style={styles.icon_mic} />
                                <Text style={styles.soluong}>9.023 lượt cover</Text>
                            </View>
                        </View>
                        <Image source={MIC} style={styles.mic} />
                    </View>
                    <View style={styles.card1}>
                        <Image source={PEPSI_CARD} style={styles.image} />
                        <View style={styles.group}>
                            <Text style={styles.baihat}>Tiền nhiều để làm gì</Text>
                            <Text style={styles.casi}>CDucky ft.Lưu Hiền Trinh</Text>
                            <View style={styles.group1}>
                                <Image source={ICON_MIC} style={styles.icon_mic} />
                                <Text style={styles.soluong}>9.023 lượt cover</Text>
                            </View>
                        </View>
                        <Image source={MIC} style={styles.mic} />
                    </View>
                    <View style={styles.card1}>
                        <Image source={CARD_PEPSI} style={styles.image} />
                        <View style={styles.group}>
                            <Text style={styles.baihat}>Tiền nhiều để làm gì</Text>
                            <Text style={styles.casi}>CDucky ft.Lưu Hiền Trinh</Text>
                            <View style={styles.group1}>
                                <Image source={ICON_MIC} style={styles.icon_mic} />
                                <Text style={styles.soluong}>9.023 lượt cover</Text>
                            </View>
                        </View>
                        <Image source={MIC} style={styles.mic} />
                    </View>
                    <View style={styles.card1}>
                        <Image source={PEPSI_BLACK} style={styles.image} />
                        <View style={styles.group}>
                            <Text style={styles.baihat}>Tiền nhiều để làm gì</Text>
                            <Text style={styles.casi}>CDucky ft.Lưu Hiền Trinh</Text>
                            <View style={styles.group1}>
                                <Image source={ICON_MIC} style={styles.icon_mic} />
                                <Text style={styles.soluong}>9.023 lượt cover</Text>
                            </View>
                        </View>
                        <Image source={MIC} style={styles.mic} />
                    </View>
                    <View style={styles.card1}>
                        <Image source={CARD_PEPSI} style={styles.image} />
                        <View style={styles.group}>
                            <Text style={styles.baihat}>Tiền nhiều để làm gì</Text>
                            <Text style={styles.casi}>CDucky ft.Lưu Hiền Trinh</Text>
                            <View style={styles.group1}>
                                <Image source={ICON_MIC} style={styles.icon_mic} />
                                <Text style={styles.soluong}>9.023 lượt cover</Text>
                            </View>
                        </View>
                        <Image source={MIC} style={styles.mic} />
                    </View>
                    <View style={styles.card1}>
                        <Image source={CARD_PEPSI} style={styles.image} />
                        <View style={styles.group}>
                            <Text style={styles.baihat}>Tiền nhiều để làm gì</Text>
                            <Text style={styles.casi}>CDucky ft.Lưu Hiền Trinh</Text>
                            <View style={styles.group1}>
                                <Image source={ICON_MIC} style={styles.icon_mic} />
                                <Text style={styles.soluong}>9.023 lượt cover</Text>
                            </View>
                        </View>
                        <Image source={MIC} style={styles.mic} />
                    </View>
                    <View style={styles.card1}>
                        <Image source={CARD_PEPSI} style={styles.image} />
                        <View style={styles.group}>
                            <Text style={styles.baihat}>Tiền nhiều để làm gì</Text>
                            <Text style={styles.casi}>CDucky ft.Lưu Hiền Trinh</Text>
                            <View style={styles.group1}>
                                <Image source={ICON_MIC} style={styles.icon_mic} />
                                <Text style={styles.soluong}>9.023 lượt cover</Text>
                            </View>
                        </View>
                        <Image source={MIC} style={styles.mic} />
                    </View>
                    <View style={styles.card1}>
                        <Image source={CARD_PEPSI} style={styles.image} />
                        <View style={styles.group}>
                            <Text style={styles.baihat}>Tiền nhiều để làm gì</Text>
                            <Text style={styles.casi}>CDucky ft.Lưu Hiền Trinh</Text>
                            <View style={styles.group1}>
                                <Image source={ICON_MIC} style={styles.icon_mic} />
                                <Text style={styles.soluong}>9.023 lượt cover</Text>
                            </View>
                        </View>
                        <Image source={MIC} style={styles.mic} />
                    </View>
                    <View style={styles.card1}>
                        <Image source={CARD_PEPSI} style={styles.image} />
                        <View style={styles.group}>
                            <Text style={styles.baihat}>Tiền nhiều để làm gì</Text>
                            <Text style={styles.casi}>CDucky ft.Lưu Hiền Trinh</Text>
                            <View style={styles.group1}>
                                <Image source={ICON_MIC} style={styles.icon_mic} />
                                <Text style={styles.soluong}>9.023 lượt cover</Text>
                            </View>
                        </View>
                        <Image source={MIC} style={styles.mic} />
                    </View>
                    <View style={styles.card1}>
                        <Image source={CARD_PEPSI} style={styles.image} />
                        <View style={styles.group}>
                            <Text style={styles.baihat}>Tiền nhiều để làm gì</Text>
                            <Text style={styles.casi}>CDucky ft.Lưu Hiền Trinh</Text>
                            <View style={styles.group1}>
                                <Image source={ICON_MIC} style={styles.icon_mic} />
                                <Text style={styles.soluong}>9.023 lượt cover</Text>
                            </View>
                        </View>
                        <Image source={MIC} style={styles.mic} />
                    </View>
                    <View style={styles.card1}>
                        <Image source={CARD_PEPSI} style={styles.image} />
                        <View style={styles.group}>
                            <Text style={styles.baihat}>Tiền nhiều để làm gì</Text>
                            <Text style={styles.casi}>CDucky ft.Lưu Hiền Trinh</Text>
                            <View style={styles.group1}>
                                <Image source={ICON_MIC} style={styles.icon_mic} />
                                <Text style={styles.soluong}>9.023 lượt cover</Text>
                            </View>
                        </View>
                        <Image source={MIC} style={styles.mic} />
                    </View>
                    <View style={styles.card1}>
                        <Image source={CARD_PEPSI} style={styles.image} />
                        <View style={styles.group}>
                            <Text style={styles.baihat}>Tiền nhiều để làm gì</Text>
                            <Text style={styles.casi}>CDucky ft.Lưu Hiền Trinh</Text>
                            <View style={styles.group1}>
                                <Image source={ICON_MIC} style={styles.icon_mic} />
                                <Text style={styles.soluong}>9.023 lượt cover</Text>
                            </View>
                        </View>
                        <Image source={MIC} style={styles.mic} />
                    </View>
                    <View style={styles.card1}>
                        <Image source={CARD_PEPSI} style={styles.image} />
                        <View style={styles.group}>
                            <Text style={styles.baihat}>Tiền nhiều để làm gì</Text>
                            <Text style={styles.casi}>CDucky ft.Lưu Hiền Trinh</Text>
                            <View style={styles.group1}>
                                <Image source={ICON_MIC} style={styles.icon_mic} />
                                <Text style={styles.soluong}>9.023 lượt cover</Text>
                            </View>
                        </View>
                        <Image source={MIC} style={styles.mic} />
                    </View>
                    <View style={styles.card1}>
                        <Image source={CARD_PEPSI} style={styles.image} />
                        <View style={styles.group}>
                            <Text style={styles.baihat}>Tiền nhiều để làm gì</Text>
                            <Text style={styles.casi}>CDucky ft.Lưu Hiền Trinh</Text>
                            <View style={styles.group1}>
                                <Image source={ICON_MIC} style={styles.icon_mic} />
                                <Text style={styles.soluong}>9.023 lượt cover</Text>
                            </View>
                        </View>
                        <Image source={MIC} style={styles.mic} />
                    </View>
                </View>
            </ScrollView>
        </Background>

    )
}

export default Beat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    headline: {
        height: Dimensions.get('window').height * 0.12,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row'
    },
    iconBack: {
        marginTop: Dimensions.get('window').height * 0.07,
        marginLeft: '20%',
    },
    beat: {
        fontFamily: 'Montserrat',
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 27,
        color: Colors.WHITE,
        marginTop: Dimensions.get('window').height * 0.07,
        marginLeft: '10%',
    },
    card: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.08,
        backgroundColor: Colors.BLUE_CARD, //'#005cb2',
        borderRadius: 8,
        marginTop: Dimensions.get('window').height * 0.07,
        marginLeft: '15%',
        marginRight: '15%',
        flexDirection: 'row',
    },
    image: {

        height: Dimensions.get('window').height * 0.08,
        borderRadius: 8,
    },
    group: {
        marginTop: Dimensions.get('window').height * 0.005,
        marginLeft: '5%',
    },
    baihat: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 21,
        color: Colors.WHITE,
    },
    casi: {
        fontFamily: 'Montserrat',
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 15,
        color: Colors.WHITE,
    },
    group1: {
        marginLeft: '1%',
        flexDirection: 'row',
        backgroundColor: Colors.BACKGROUND_VIEW, 
        width: Dimensions.get('window').width * 0.21,
        height: Dimensions.get('window').height * 0.02,
        borderRadius: 4,
        marginTop: Dimensions.get('window').height * 0.003,
        alignItems: 'center',
    },
    icon_mic: {
        marginLeft: '5%',
    },

    soluong: {
        fontFamily: 'Montserrat',
        fontSize: 8,
        fontWeight: '500',
        lineHeight: 9.6,
        color: Colors.WHITE,
        marginLeft: '3%',
    },
    mic: {
        marginTop: '3%',
        marginLeft: '20%',
        width: Dimensions.get('window').width * 0.113,
        height: Dimensions.get('window').height * 0.053,
    },
    card1: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.08,
        backgroundColor: Colors.BLUE_CARD, 
        borderRadius: 8,
        marginTop: Dimensions.get('window').height * 0.015,
        marginLeft: '15%',
        marginRight: '15%',
        flexDirection: 'row',
    },
})