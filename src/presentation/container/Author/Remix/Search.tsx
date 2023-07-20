import { StyleSheet, Text, View, ImageBackground, Pressable, Image, Dimensions, TextInput } from 'react-native'
import React from 'react'
import Background from '../../../component/background/Background'
import { BACK, BACKGROUND_TAB, CANCEL } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'

const Search = () => {
    return (
        <Background>
            <View style={styles.container}>
                <ImageBackground source={BACKGROUND_TAB} style={styles.headline}>
                    <Pressable >
                        <Image source={BACK} style={styles.iconB} />
                    </Pressable>
                    <View style={styles.beat}>
                        <Text style={styles.beatlist}>Tên bài hát</Text>
                    </View>
                    <View style={styles.beat}>
                        <Text style={styles.Luu}>Lưu</Text>
                    </View>

                </ImageBackground>
                <View style={styles.beat}>
                <TextInput
                    style={styles.text}
                    placeholder='Tiền nhiều để làm gì' />
                     <Image source={CANCEL} style={styles.iconC} />
                 </View>
                <Text  style={styles.text1}>22/40 ký tự</Text>
            </View>
        </Background>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Dimensions.get('screen').scale * 5,
    },
    headline: {
        height: Dimensions.get('window').height * 0.13,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row'
    },
    iconB: {
        marginTop: Dimensions.get('window').height * 0.04,
        marginLeft: '10%',
    },
    Luu: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 27,
        color: Colors.WHITE,
        marginTop: Dimensions.get('window').height * 0.04,
        marginLeft: Dimensions.get('window').width * 0.26,
    },
    beat: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    beatlist: {
        fontFamily: 'Montserrat',
        fontSize: 18,
        fontWeight: '900',
        lineHeight: 27,
        color: Colors.WHITE,
        marginTop: Dimensions.get('window').height * 0.04,
        marginLeft: Dimensions.get('window').width * 0.17,
    },
    text: {
        color: Colors.SEARCH,
        width: 370,
        height: 50,
        backgroundColor: Colors.WHITE,
        fontWeight: '700',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    text1:{
        marginTop: Dimensions.get('window').height * 0.02,
        marginLeft: Dimensions.get('window').width * 0.03,
        color: Colors.WHITE,

    },
    iconC: {
        marginTop: - Dimensions.get('window').height * 0.044,
        marginLeft: Dimensions.get('window').width * 0.8,
    },


})