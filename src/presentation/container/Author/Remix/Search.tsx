import { StyleSheet, Text, View, ImageBackground, Pressable, Image, Dimensions, TextInput } from 'react-native'
import React from 'react'
import Background from '../../../component/background/Background'
import { BACK, BACKGROUND_TAB, CANCEL } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import { RemixStackScreenProps } from '../../../navigation/stack/RemixNavigation'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Header from '../../../component/header/Header'


const Search : React.FC<RemixStackScreenProps<'Search'>> = ({ navigation, route }) => {

   
    const [edt, setedt] = React.useState<string>('');
    console.log(edt)
  
    const [text, setText] = React.useState('')
    
    const goBack = () => {
      navigation.navigate('AnimationThree');
    }
    const centerHeader = () => {
        return (
            <View style={styles.header_1}>
                <Text style={styles.textHeader}>Beat mới nhất</Text>
                        <Text style={styles.Luu}>Lưu</Text>
                    
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
                    rightHeader={goBack} />
                  
                <View style={styles.beat}>
                <TextInput
                  value={text}
                  onChangeText={(text) => setText(text)}
                    style={styles.text}
                    placeholder='Tiền nhiều để làm gì' />
                     <Image source={CANCEL} style={styles.iconC} />
                 </View>
                 <Text style={styles.text1}>{text.length}/40 ký tự</Text>
            </View>
        </Background>
    )
}

export default Search

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
    iconB: {
        marginTop: Dimensions.get('window').height * 0.04,
        marginLeft: '10%',
    },
    Luu: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 27,
        color: Colors.WHITE,
        marginTop: - Dimensions.get('window').height * 0.034,
        marginLeft: Dimensions.get('window').width * 0.64,
    },
    beat: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:  Dimensions.get('window').height * 0.04,
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