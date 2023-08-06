import React from 'react';
import { FlatList, Image, StyleSheet, Text, View, ImageBackground, Dimensions, Pressable, TouchableOpacity } from 'react-native';
import Background from '../../../component/background/Background'
import { BACK, BACKGROUND_TAB } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import { VideoListStackScreenProps } from '../../../navigation/stack/VideoListNavigation';

import Header from '../../../component/header/Header';


const NotificationVideo : React.FC<VideoListStackScreenProps<'Notification'>> = ({navigation, route})=> {

    const [edt, setedt] = React.useState<string>('');
    console.log(edt)
  
    
    const Gift = () => {
      navigation.navigate('Gift');
    }
    const goBack = () => {
        navigation.navigate('VideoList');
      }

interface Item {
    id: number;
    title: string;
    titleTime: string;
    image: any;
}

const DATA: Item[] = [
    { id: 1, title: "Bạn đã đăng tải video mới", titleTime: "21 giờ trước", image: require("../../../../../assets/Card_Notification.png") },
    { id: 2, title: "Bạn đã nhận được IPHONE 13 ProMax\nGiải thưởng cho quán quân tuần" ,titleTime: "28/11/2021", image: require("../../../../../assets/Card_Notification.png") },
    { id: 3, title: "Bạn đã đạt TOP 1 người có lượt\nyêu thích cao nhất tuần",titleTime: "26/11/2021", image: require("../../../../../assets/Card_Notification.png") },
    { id: 4, title: "Bạn đã đăng tải video mới", titleTime: "26/11/2021", image: require("../../../../../assets/Card_Notification.png") },
    { id: 5, title: "Bạn đã nhận được Samsung Tab S7+\nGiải thưởng cho quán quân tuần", titleTime: "26/11/2021", image: require("../../../../../assets/Card_Notification.png") },
    { id: 6, title: "Bạn đã đạt TOP 1 người có lượt\nyêu thích cao nhất tuần", titleTime: "21/11/2021", image: require("../../../../../assets/Card_Notification.png") },
    { id: 7, title: "Bạn đã đăng tải video mới", titleTime: "21/11/2021", image: require("../../../../../assets/Card_Notification.png") },
    { id: 8, title: "Bạn đã nhận được IPHONE 13 ProMax\nGiải thưởng cho quán quân tuần",  titleTime: "26/11/2021", image: require("../../../../../assets/Card_Notification.png") },
    { id: 9, title: "Bạn đã đạt TOP 1 người có lượt\nyêu thích cao nhất tuần",  titleTime: "21/11/2021", image: require("../../../../../assets/Card_Notification.png") },
    { id: 10, title: "Bạn đã đăng tải video mới",  titleTime: "21/11/2021", image: require("../../../../../assets/Card_Notification.png") },
    { id: 11, title: "Bạn đã nhận được Samsung Tab S7+\nGiải thưởng cho quán quân tuần",  titleTime: "26/11/2021", image: require("../../../../../assets/Card_Notification.png") },
    { id: 12, title: "Bạn đã đạt TOP 1 người có lượt\nyêu thích cao nhất tuần", titleTime: "21/11/2021", image: require("../../../../../assets/Card_Notification.png") },
];



const renderItem = ({ item }: { item: Item }) => (
    <TouchableOpacity onPress={Gift}>
    <View style={styles.item}>
        <Image source={item.image} style={styles.image} />
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
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
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

export default NotificationVideo;