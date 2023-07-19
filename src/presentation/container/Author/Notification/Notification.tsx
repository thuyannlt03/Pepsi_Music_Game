import React from 'react';
import { FlatList, Image, StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import Background from '../../../component/background/Background'
import { BACK, BACKGROUND_TAB } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'

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
    <View style={styles.item}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.titleTime}>{item.titleTime}</Text>
        </View>
       
     
    </View>
);
const text1 = "Bạn đã nhận được IPHONE 13 ProMax\nGiải thưởng cho quán quân tuần";
const boldAndUpperTexts1 = ["IPHONE 13 ProMax", "quán quân tuần"];
const regex1 = new RegExp(`(${boldAndUpperTexts1.join('|')})`, 'gi');

const getTextWithBoldAndUpper1 = (text1: string, boldAndUpperTexts1: any) => {
    const parts1 = text1.split(regex1);
    return parts1.map((part, index) => {
        const isBoldAndUpper1 = boldAndUpperTexts1.includes(part);
        return isBoldAndUpper1 ? (
            <Text key={index} style={{ fontWeight: 'bold', textTransform: 'uppercase', textDecorationLine: 'underline' }}>{part}</Text>
        ) : (
            <Text key={index}>{part}</Text>
        );
    });
};
const text2 = "Bạn đã đạt TOP 1 người có lượt\nyêu thích cao nhất tuần";
const boldAndUpperTexts2 = ["TOP 1"];
const regex2 = new RegExp(`(${boldAndUpperTexts2.join('|')})`, 'gi');

const getTextWithBoldAndUpper2 = (text2: string, boldAndUpperTexts2: any) => {
    const parts2 = text2.split(regex2);
    return parts2.map((part, index) => {
        const isBoldAndUpper2 = boldAndUpperTexts2.includes(part);
        return isBoldAndUpper2 ? (
            <Text key={index} style={{ fontWeight: 'bold', textTransform: 'uppercase', textDecorationLine: 'underline' }}>{part}</Text>
        ) : (
            <Text key={index}>{part}</Text>
        );
    });
};

const text3 = "Bạn đã nhận được Samsung Tab S7+\nGiải thưởng cho quán quân tuần";
const boldAndUpperTexts3 = [" Samsung Tab S7+","quán quân tuần"];
const regex3 = new RegExp(`(${boldAndUpperTexts3.join('|')})`, 'gi');

const getTextWithBoldAndUpper3 = (text3: string, boldAndUpperTexts2: any) => {
    const parts3 = text3.split(regex3);
    return parts3.map((part, index) => {
        const isBoldAndUpper3 = boldAndUpperTexts3.includes(part);
        return isBoldAndUpper3 ? (
            <Text key={index} style={{ fontWeight: 'bold', textTransform: 'uppercase', textDecorationLine: 'underline' }}>{part}</Text>
        ) : (
            <Text key={index}>{part}</Text>
        );
    });
};


const Notification = () => {
    return (
        <Background>
            <View style={styles.container}>
                <ImageBackground source={BACKGROUND_TAB} style={styles.headline}>
                    <Image source={BACK} style={styles.iconBack} />
                    <Text style={styles.rule}>Thông báo</Text>
                </ImageBackground>
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
    headline: {
        height: Dimensions.get('window').height * 0.13,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    iconBack: {
        marginTop: Dimensions.get('window').height * 0.04,
        marginLeft: Dimensions.get('window').width * 0.03,
    },
    rule: {
        fontFamily: 'Montserrat',
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 27,
        color: Colors.WHITE,
        marginTop: Dimensions.get('window').height * 0.04,
        marginLeft: Dimensions.get('window').width * 0.30,
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

export default Notification;