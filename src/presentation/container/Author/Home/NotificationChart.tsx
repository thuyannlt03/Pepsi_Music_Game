import React, { useState, useEffect }  from 'react';
import { FlatList, Image, StyleSheet, Text, View, ImageBackground, Dimensions, Pressable, TouchableOpacity } from 'react-native';
import Background from '../../../component/background/Background'
import { BACK, BACKGROUND_TAB } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import {  ChartStackScreenProps} from '../../../navigation/stack/ChartNavigation'
import Header from '../../../component/header/Header';
import { rtdb } from '../../../../core/api/url/RealTime';
import { Notification } from '../../../../core/model/Notification';

const NotificationChart  : React.FC< ChartStackScreenProps<'Notification'>> = ({ navigation, route }) => {

    const [edt, setedt] = React.useState<string>('');
    console.log(edt)
  
    
    const Gift = () => {
      navigation.navigate('Gift');
    }
    const goBack = () => {
        navigation.navigate('Chart');
      }

      interface Item {
        id: number;
        title: string;
        titleTime: string;
        image: any;
        role: number;
    }
    
    let listNotif: Notification[] = [];
    
    const [list_Notif, setlist_Notif] = useState<Notification[]>([])
    
    useEffect(() => {
      
        const getGift = async () => {
            
            const get = rtdb.ref('/Notification').once('value');
            await get.then((snapshot: any) => {
              snapshot.forEach((item: any) => {
                let notifi : Notification = {
                    keyNotification: "1"
                };
                notifi.keyNotification = item.key;
                notifi.image = item.val().image;
                notifi.role = item.val().role;
                notifi.time = item.val().time;
                notifi.title = item.val().title;
                listNotif.push(notifi);
              })
              setlist_Notif(listNotif)
            });
          }
      
          getGift();
    
      return () => {}
    }, [])
    
    
    
    
    const renderItem = ({ item }: { item: Item }) => (
        <TouchableOpacity onPress={Gift}>
        <View style={styles.item}>
        <Image source={{uri: item.image}} style={styles.image} />
            <View style={styles.card} >
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.titleTime}>{item.titleTime}</Text>
            </View>
        </View>
        </TouchableOpacity>
    );
    
    const centerHeader = () => {
        return (
            <View style={styles.header_1}>
                <Text style={styles.textHeader}>Thông báo</Text>
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
                         
                        data={list_Notif}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.keyNotification.toString()}
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
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 12,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.WHITE,
        width: Dimensions.get('window').width * 0.92,
        backgroundColor: Colors.BLUE_BACKGROUND,
    },
    image: {
        borderWidth: 0.5,
        borderRadius: 9,
        borderColor: Colors.BORDER,
    },
    card:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft:Dimensions.get('window').width * 0.05
    },
    
    title: {
        marginBottom:Dimensions.get('window').height * 0.03,
        fontFamily:'Montserrat',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        color: Colors.WHITE,
    },
    titleTime: {
        fontFamily:'Montserrat',
        fontSize: 12,
        fontWeight: '300',
        lineHeight: 18,
        color: Colors.WHITE,
    },
});

export default NotificationChart;