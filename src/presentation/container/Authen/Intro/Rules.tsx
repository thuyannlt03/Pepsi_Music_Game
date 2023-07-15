import { StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native'
import React from 'react'
import Background from '../../../component/background/Background'
import { BACK } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'


const Rules = () => {
    return (

        <Background>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.headline}>
                        <Image source={BACK} style={styles.image} />
                        <Text style={styles.thele}>Thể lệ chương trình</Text>
                    </View>
                </View>
            </ScrollView>
        </Background>

    )
}

export default Rules

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    headline: {
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: Dimensions.get('window').height * 0.1,

    },

    image: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width * 0.6,
        marginLeft: '-45%',

    },
    thele: {
        fontFamily: 'Montserrat',
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 27,
        color: Colors.WHITE,
        justifyContent: 'center',
        alignItems: 'center',
    },
})