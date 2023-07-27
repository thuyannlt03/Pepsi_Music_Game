import { StyleSheet, Text, View, FlatList, Dimensions, Image, ImageBackground, TouchableOpacity  } from 'react-native'
import React from 'react'
import { AVT_1, BACKGROUND_RANK, ICON_HOME, ICON_NOTIFICATION, IMAGE_BUC, IMAGE_RANK_1, IMAGE_RANK_2, IMAGE_RANK_3, IMAGE_RANK_4 } from '../../../../../assets'
import Background from '../../../component/background/Background';
import Header from '../../../component/header/Header'
import { Colors } from '../../../resource/value/Colors';

interface Item {
    id: number,
    name: string,
    rank: number,
    image: any,
    view: number,
    imageEye: any,
}

const DATA: Item[] = [
    { id: 1, name:'Janne', rank: 4 , image: require("../../../../../assets/Avt_Profile.png"), view: 1000, imageEye: require("../../../../../assets/Icon-Eye.png")  },
    { id: 2, name:'Janne', rank: 5 , image: require("../../../../../assets/Avt_Profile.png"), view: 1000,imageEye: require("../../../../../assets/Icon-Eye.png") },
    { id: 3, name:'Janne', rank: 6 , image: require("../../../../../assets/Avt_Profile.png"), view: 1000, imageEye: require("../../../../../assets/Icon-Eye.png")  },
    { id: 4, name:'Janne', rank: 7 , image: require("../../../../../assets/Avt_Profile.png"), view: 1000, imageEye: require("../../../../../assets/Icon-Eye.png")  },
    { id: 5, name:'Janne', rank: 8 , image: require("../../../../../assets/Avt_Profile.png"), view: 1000, imageEye: require("../../../../../assets/Icon-Eye.png")  },
    { id: 6, name:'Janne', rank: 9 , image: require("../../../../../assets/Avt_Profile.png"), view: 1000, imageEye: require("../../../../../assets/Icon-Eye.png")  },
    { id: 7, name:'Janne', rank: 10 , image: require("../../../../../assets/Avt_Profile.png"), view: 1000, imageEye: require("../../../../../assets/Icon-Eye.png")  },
  
  
  ];

  const renderItem = ({ item }: { item: Item }) => ( 
     <View style = {{}}>
    <TouchableOpacity style={styles.item}>
    <View style={styles.borderRank} >
       <Text style={styles.txt} >{item.rank}</Text>
       <Image source={IMAGE_RANK_4} style={styles.imgBorderRank} />
    </View>
    <View style={styles.boxContent} >
       <Image source={item.image} style={styles.imgAvatar} />
       <View style={styles.boxInfor}>
           <Text style={styles.txtName}>{item.name}</Text>
           <View style={styles.boxView}>
           <Image source={item.imageEye}/>
               <Text style={styles.txtView}>{item.view}</Text>
           </View>
       </View>
    </View>
    </TouchableOpacity>
    </View> 
  );

  const goBack = () => {
    // navigation.navigate('Record');
  }
  const Notification = () => {
    // navigation.navigate('Record');
  }
  const centerHeader = () => {
    return (
      <Text style={styles.textHeader}>Nhạc thịnh hành</Text>
    )
  };

const Top = () => {
    return (
        <Background>
            <Header
                iconLeft={ICON_HOME}
                leftHeader={goBack}
                centerHeader={centerHeader()}
                iconRight={ICON_NOTIFICATION}
                rightHeader={Notification}
            />
            <View style={styles.container}>
                <ImageBackground style= {{width: Dimensions.get('screen').width, paddingHorizontal: 22}} source={BACKGROUND_RANK}>
                    <View style={styles.boxTop}>
                        <Text style={styles.txtTop}>Hạng của tôi : <Text style={styles.txtRank}>1000000</Text></Text>
                    </View>
                    <View style={styles.boxRanks}>
                        <View style={styles.boxRank}>
                            <View style={styles.boxRank2}>
                                <Image source={IMAGE_RANK_2} style={styles.imgRank2} />
                                <Text style={styles.textName2}>Bruno</Text>
                                <Text style={styles.textView}>1.2tr lượt xem</Text>
                            </View>
                            <View style={styles.boxRank1}>
                                <Image source={IMAGE_RANK_1} style={styles.imgRank1} />
                                <Text style={styles.textName1}>Bruno</Text>
                                <Text style={styles.textView}>1.2tr lượt xem</Text>
                            </View>
                            <View style={styles.boxRank3}>
                                <Image source={IMAGE_RANK_3} style={styles.imgRank3} />
                                <Text style={styles.textName3}>Bruno</Text>
                                <Text style={styles.textView}>1.2tr lượt xem</Text>
                            </View>
                        </View>
                        <Image source={IMAGE_BUC} style={styles.imgBuc} />
                    </View>
                </ImageBackground>
                 <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
                   
            </View>

        </Background>


    )
}

export default Top

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 27,
        color: Colors.WHITE
      },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 22,
    },
    boxTop: {
        borderWidth: 1,
        borderColor: Colors.YELLOW,
        borderRadius: 4,
        backgroundColor: Colors.WHITE,
        padding: 5,
        alignSelf: 'flex-end',
        marginTop: '15%',
    },
    txtTop: {
        fontWeight: '400',
        fontSize: 12,
        color: Colors.BLUE_PEPSI
    },
    txtRank: {
        fontWeight: '700',
        fontSize: 12,
        color: Colors.BAR_RED
    },
    boxRanks: {

    },
    boxRank: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    boxRank2: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },
    imgRank2: {
    },
    textName2: {
        fontWeight: '500',
        fontSize: 10,
        color: 'rgba(255, 222, 229, 1)'
    },
    textView: {
        fontWeight: '700',
        fontSize: 10,
        color: Colors.WHITE,
        marginTop: 10,
    },
    boxRank1: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgRank1: {},
    textName1: {
        fontWeight: '700',
        fontSize: 12,
        color: Colors.YELLOW
    },
    boxRank3: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 110
    },
    imgRank3: {},
    textName3: {
        fontWeight: '700',
        fontSize: 12,
        color: 'rgba(173, 225, 255, 1)'
    },
    imgBuc: {
        // marginTop: 20,
    },
    item: {
        width: Dimensions.get('screen').width,
        height : Dimensions.get('screen').height * 0.1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    borderRank: {
    },
    txt: {
        position: 'absolute',
        zIndex: 1,
        color: Colors.WHITE,
        fontStyle: 'italic',
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'center',
    },
    imgBorderRank: {},
    boxContent: {
        marginTop: '10%',
        flexDirection: 'row',
        width: "90%",
        // justifyContent: 'space-between',
        alignItems: 'center',
    },
    imgAvatar: {
        // width: "100%",
        zIndex: 1
    },
    boxInfor: {
        width: "75%",
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: Colors.DARK_BLUE_MODE,
        marginStart: "-10%",
        borderRadius: 8,
        borderColor: Colors.WHITE,
    },
    txtName: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.WHITE,
        marginStart: '20%',
    },
    boxView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: Colors.WHITE,
        padding: 3,
        marginEnd: "3%",
    },
    imgb:{
        color: Colors.RED
    },
    txtView: {
        fontSize: 11,
        fontWeight: '700',
        color: Colors.BLUE_PEPSI,
    }
})