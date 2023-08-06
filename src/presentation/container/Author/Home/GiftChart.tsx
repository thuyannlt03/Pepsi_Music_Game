import React, { useState, useEffect } from 'react';
import { FlatList, Image, StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity, Pressable } from 'react-native';
import Background from '../../../component/background/Background'
import { BACK, BACKGROUND_TAB} from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import {  ChartStackScreenProps} from '../../../navigation/stack/ChartNavigation'
import Header from '../../../component/header/Header';
import { Gift } from '../../../../core/model/Gift';
import { rtdb } from '../../../../core/api/url/RealTime';

const GiftChart   : React.FC< ChartStackScreenProps<'Gift'>> = ({ navigation, route }) => {

    const [edt, setedt] = React.useState<string>('');
    console.log(edt)
  
    
    const goBack = () => {
      navigation.navigate('Notification');
    }

    interface Item {
        id: string;
        title: string;
        des: string;
        image: any;
    }
    
    
    function ItemColor({  title, des,  image }: Item) {
        const [buttonColor, setButtonColor] = useState('#004A98');
        const [buttonText, setButtonText] = useState('Chưa nhận');
    
        const onPressButton = () => {
            if (buttonText == 'Chưa nhận' || buttonColor == '#004A98') {
                setButtonText('Đã nhận');
                setButtonColor('#ED1941');
            } else {
                setButtonText('Chưa nhận');
                setButtonColor('#004A98');
            };
        };
       
        let listGift: Gift[] = [];
    
        const [list_Gift, setlist_Gift] = useState<Gift[]>([])
    
        useEffect(() => {
        
            const getGift = async () => {
                let gift : Gift = {
                    keyGift: "1"
                };
                const get = rtdb.ref('/Gifts').once('value');
                await get.then((snapshot: any) => {
                  snapshot.forEach((item: any) => {
                    gift.keyGift = item.key;
                    gift.des = item.val().des;
                    gift.image = item.val().image;
                    gift.title = item.val().title;
                    listGift.push(gift);
                  })
                  // console.log(list);
                  setlist_Gift(listGift)
                });
              }
          
              getGift();
          return () => {}
        }, [])
        
        
        return (
            <View style={styles.item}>
                <Image source={image} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.titlelitle}>{des}</Text>
                <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]} onPress={onPressButton}>
                    <Text style={[styles.textbtn, { color: buttonText === 'Chưa nhận' ? '#fff' : '#fff' }]}>{buttonText}</Text>
                </TouchableOpacity>
            </View>
        );
    }
    
    const centerHeader = () => {
        return (
            <View style={styles.header_1}>
                <Text style={styles.textHeader}>Quà của tôi</Text>
            </View>
        )
    }
        return (
            <Background>
                <View style={styles.container}>
                <Header
                        iconLeft={BACK}
                        leftHeader={goBack}
                        centerHeader={centerHeader()} />
                    <FlatList
                        style={{ marginHorizontal: Dimensions.get('window').width * 0.02 }}
                        numColumns={2}
                        data={list_Gift}
                        renderItem={({ item }) => <ItemColor title={item.title} des={item.des}  image={item.image} />}
                        keyExtractor={(item) => item.keyGift.toString()}
                    />
                </View>
            </Background>
    
        );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    item: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: Colors.WHITE,
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').height * 0.3,
        marginLeft: Dimensions.get('window').width * 0.05,
        marginTop: Dimensions.get('window').height * 0.03,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: Colors.WHITE,
        borderRadius: 8,
        shadowColor: Colors.SHADOW_TEXT,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5 
    },
    image: {
        alignSelf: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        marginTop: -Dimensions.get('window').height * 0.035,
    },
    title: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        fontWeight: '600',
        lineHeight: 18,
        color: Colors.BLUE_SHADOW,
        marginLeft: Dimensions.get('window').width * 0.02,
        marginBottom: Dimensions.get('window').height * 0.005,
        marginTop: Dimensions.get('window').height * 0.005,
    },
    titlelitle: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        fontWeight: '300',
        lineHeight: 18,
        color: Colors.BLUE_SHADOW,
        marginLeft: Dimensions.get('window').width * 0.02,
        marginBottom: Dimensions.get('window').height * 0.005,
    },
    button: {
        width: Dimensions.get('window').width * 0.2,
        padding: '2%',
        marginLeft: Dimensions.get('window').width * 0.02,
        borderRadius: 5,
        alignItems: 'center'
    },
    textbtn: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 13.091,
        color: Colors.WHITE,
    },
});

export default GiftChart;