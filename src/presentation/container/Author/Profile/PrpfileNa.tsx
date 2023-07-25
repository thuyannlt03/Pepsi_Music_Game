import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Background from '../../../component/background/Background'
import { AVT, AVT_1, BACK, BACKGROUND_TAB, NOTIFICATION_2 } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import DialogNotification from '../../../component/dialog/DialogNotification';
import Header from '../../../component/header/Header';
import { RemixStackScreenProps } from '../../../navigation/stack/RemixNavigation'

const ProfileNa: React.FC<RemixStackScreenProps<'ProfileNa'>> = ({ navigation, route }) => {


  const goBack = () => {
    navigation.navigate('ThankYou');
  }


  const [modalVisible, setModalVisible] = useState(false);

  const [title, setTitle] = useState<string>();
  const [btnLeft, setBtnLeft] = useState<string>();
  const [btnRight, setBtnRight] = useState<string>();
  const [onHuy, setonHuy] = useState(false);
  const [onBack, setonBack] = useState(false);
  const [onSubmit, setonSubmit] = useState(false);
  const [isExit, setisExit] = useState(false);

  const onClick = (type: string) => {

    if (type === "submit") {
      setTitle("Bạn có chắc chắn muốn đăng xuất không?");
      setBtnLeft("Quay lại");
      setBtnRight("Xác nhận");
      setonSubmit(true);
      setisExit(true);
      setModalVisible(true);
      //navigation.navigate('SignInScreen')
    }
  };
  const onCancel = () => {
    setonHuy(false);
    setonBack(false);
    setonSubmit(false);
    setisExit(false);
    setModalVisible(false);
  };

  const onExit = () => {
    setisExit(false);
    setModalVisible(false);
  }

  interface Item {
    id: number,
    title: string,
    view: string,
    like: string,
    image: any,
    imageEye: any,
    imageHeart: any,
    imageShare: any,
    imageDown: any,
  }

  const DATA: Item[] = [
    { id: 1, title: 'Tiền nhiều để làm gì', imageEye: require("../../../../../assets/Icon-Eye.png"), imageHeart: require("../../../../../assets/Icon-Heart.png"), view: '11.8k', like: '10203', image: require("../../../../../assets/Pepsi_Card.png"), imageShare: require("../../../../../assets/Img_share.png"), imageDown: require("../../../../../assets/Download.png") },
    { id: 2, title: 'Tiền nhiều để làm gì', imageEye: require("../../../../../assets/Icon-Eye.png"), imageHeart: require("../../../../../assets/Icon-Heart.png"), view: '11.8k', like: '10203', image: require("../../../../../assets/Pepsi_Black_Card.png"), imageShare: require("../../../../../assets/Img_share.png"), imageDown: require("../../../../../assets/Download.png") },
    { id: 3, title: 'Tiền nhiều để làm gì', imageEye: require("../../../../../assets/Icon-Eye.png"), imageHeart: require("../../../../../assets/Icon-Heart.png"), view: '11.8k', like: '10203', image: require("../../../../../assets/pepsi.png"), imageShare: require("../../../../../assets/Img_share.png"), imageDown: require("../../../../../assets/Download.png") },
    { id: 4, title: 'Tiền nhiều để làm gì', imageEye: require("../../../../../assets/Icon-Eye.png"), imageHeart: require("../../../../../assets/Icon-Heart.png"), view: '11000', like: '10203', image: require("../../../../../assets/Pepsi_Card.png"), imageShare: require("../../../../../assets/Img_share.png"), imageDown: require("../../../../../assets/Download.png") },
    { id: 5, title: 'Tiền nhiều để làm gì', imageEye: require("../../../../../assets/Icon-Eye.png"), imageHeart: require("../../../../../assets/Icon-Heart.png"), view: '11000', like: '10203', image: require("../../../../../assets/pepsi.png"), imageShare: require("../../../../../assets/Img_share.png"), imageDown: require("../../../../../assets/Download.png") },
    { id: 6, title: 'Tiền nhiều để làm gì', imageEye: require("../../../../../assets/Icon-Eye.png"), imageHeart: require("../../../../../assets/Icon-Heart.png"), view: '11000', like: '10203', image: require("../../../../../assets/Pepsi_Black_Card.png"), imageShare: require("../../../../../assets/Img_share.png"), imageDown: require("../../../../../assets/Download.png") },
    { id: 7, title: 'Tiền nhiều để làm gì', imageEye: require("../../../../../assets/Icon-Eye.png"), imageHeart: require("../../../../../assets/Icon-Heart.png"), view: '11000', like: '10203', image: require("../../../../../assets/pepsi.png"), imageShare: require("../../../../../assets/Img_share.png"), imageDown: require("../../../../../assets/Download.png") },
    { id: 8, title: 'Tiền nhiều để làm gì', imageEye: require("../../../../../assets/Icon-Eye.png"), imageHeart: require("../../../../../assets/Icon-Heart.png"), view: '11000', like: '10203', image: require("../../../../../assets/Pepsi_Card.png"), imageShare: require("../../../../../assets/Img_share.png"), imageDown: require("../../../../../assets/Download.png") },
    { id: 9, title: 'Tiền nhiều để làm gì', imageEye: require("../../../../../assets/Icon-Eye.png"), imageHeart: require("../../../../../assets/Icon-Heart.png"), view: '11000', like: '10203', image: require("../../../../../assets/Pepsi_Black_Card.png"), imageShare: require("../../../../../assets/Img_share.png"), imageDown: require("../../../../../assets/Download.png") },
    { id: 10, title: 'Tiền nhiều để làm gì', imageEye: require("../../../../../assets/Icon-Eye.png"), imageHeart: require("../../../../../assets/Icon-Heart.png"), view: '11000', like: '10203', image: require("../../../../../assets/pepsi.png"), imageShare: require("../../../../../assets/Img_share.png"), imageDown: require("../../../../../assets/Download.png") },


  ];
  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.item}>
      <View style={styles.card}>
        <View>
          <Image source={item.image} style={styles.image} />

          <Text style={styles.text}>{item.title}</Text>
        </View>

      </View>
      <View style={styles.gr}>
        <View style={styles.gr1}>
          <Image source={item.imageEye} style={styles.imageEye} />
          <Text style={styles.view}>{item.view}</Text>
        </View >
        <View style={styles.gr2}>
          <Image source={item.imageHeart} style={styles.imageHeart} />
          <Text style={styles.like}>{item.like}</Text>
        </View>

        <Image source={item.imageShare} style={styles.imageShare} />
        <Image source={item.imageDown} style={styles.imageDown} />
      </View>
    </View>
  );

  const centerHeader = () => {
    return (
      <View style={styles.header_1}>
        <Text style={styles.textHeader}>Thông tin cá nhân</Text>
      </View>
    )
  }
  return (
    <Background>

      <Header
        iconLeft={BACK}
        leftHeader={goBack}
        centerHeader={centerHeader()}
        iconRight={NOTIFICATION_2}
      rightHeader={() => onClick("submit")}
      />
      <ScrollView style={styles.container}>
        <View style={styles.group}>
          <View style={styles.group1}>
            <Image source={AVT_1} style={styles.avt} />
            <Text style={styles.ten}>AiVan.01</Text>
            <View style={styles.group2}>
              <View style={styles.group3}>
                <Text style={styles.tong}>Tổng số video</Text>
                <Text style={styles.soluong}>2.110</Text>

              </View>
              <View style={styles.group3}>
                <Text style={styles.dau}>|</Text>
                <Text style={styles.dau1}>|</Text>
                <Text style={styles.dau2}>|</Text>
              </View>
              <View style={styles.group3}>
                <Text style={styles.tong}>Tổng tương tác</Text>
                <Text style={styles.soluong}>1.02Tr</Text>
              </View>

            </View>
          </View>

        </View>
        <View style={styles.list}>

          <FlatList

            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}

            numColumns={2}
          />
        </View>
      </ScrollView>
      {
        modalVisible ? <DialogNotification
          title={title}
          btnLeft={btnLeft}
          btnRight={btnRight}
          isVisibile={modalVisible}
          onPressL={onCancel}

          isExit={isExit}
          onPressE={onExit}
        />
          :
          <View></View>
      }

    </Background>
  )
}

export default ProfileNa

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Dimensions.get('screen').scale * 5,
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


  Profile: {
    fontFamily: 'Montserrat',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 27,
    color: Colors.WHITE,
    marginTop: Dimensions.get('window').height * 0.04,
    marginLeft: Dimensions.get('window').width * 0.2,
  },
  group: {
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 0.16,
    marginHorizontal: -Dimensions.get('window').height * 0.03,
    marginTop: - Dimensions.get('window').height * 0.02,
    backgroundColor: Colors.BLUE_DARK,
  },
  group1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginLeft: Dimensions.get('window').width * 0.05,
  },

  avt: {
    marginTop: Dimensions.get('window').height * 0.045,
    marginLeft: - Dimensions.get('window').width * 0.03,
  },
  ten: {
    fontFamily: 'Montserrat',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 27,
    color: Colors.WHITE,
    alignItems: 'center',
    marginLeft: Dimensions.get('window').width * 0.1,
    marginTop: - Dimensions.get('window').height * 0.02,
  },
  group2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: Dimensions.get('window').height * 0.08,
    marginLeft: - Dimensions.get('window').width * 0.45,
  },
  group3: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginLeft: Dimensions.get('window').width * 0.03,
  },
  tong: {
    fontFamily: 'Montserrat',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 15,
    color: Colors.TEXT_TONG,
    alignItems: 'center',

  },

  soluong: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 21,
    color: Colors.WHITE,
    alignItems: 'center',
  },
  dau: {
    fontFamily: 'Montserrat',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 15,
    color: Colors.TEXT_TONG,
    alignItems: 'center',
    marginTop: Dimensions.get('window').height * 0.001
  },
  dau1: {
    fontFamily: 'Montserrat',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 15,
    color: Colors.TEXT_TONG,
    alignItems: 'center',
    marginTop: -Dimensions.get('window').height * 0.003
  },
  dau2: {
    fontFamily: 'Montserrat',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 15,
    color: Colors.TEXT_TONG,
    alignItems: 'center',
    marginTop: -Dimensions.get('window').height * 0.004
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  item: {
    margin: Dimensions.get('screen').width * 0.03,
    width: Dimensions.get('screen').width * 0.4 + 4,
    height: Dimensions.get('screen').height * 0.25,
    justifyContent: 'space-between',
    padding: 3,
    borderRadius: 8,
    backgroundColor: Colors.BACKGROUND_BOX,
    marginLeft: Dimensions.get('window').width * 0.03,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('screen').width * 0.4,
    height: Dimensions.get('screen').height * 0.165,
    borderRadius: 10,

  },
  imageShare: {
    marginTop: Dimensions.get('window').height * 0.025,
    marginRight: - Dimensions.get('screen').width * 0.04,
  },
  imageDown: {
    marginTop: Dimensions.get('window').height * 0.025,
    marginRight: - Dimensions.get('screen').width * 0.045,
  },
  imageEye: {

  },
  imageHeart: {

  },
  text: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 18,
    color: Colors.WHITE,
    marginTop: Dimensions.get('screen').width * 0.01,

  },
  gr: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Dimensions.get('window').height * 0.001,

  },
  gr1: {
    marginTop: Dimensions.get('window').height * 0.03,
    marginLeft: - Dimensions.get('window').height * 0.018,
    width: '30%',
    flexDirection: 'row',
    backgroundColor: Colors.BAR_RED,
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gr2: {
    marginTop: Dimensions.get('window').height * 0.03,
    marginLeft: - Dimensions.get('window').height * 0.024,
    width: '30%',
    flexDirection: 'row',
    backgroundColor: Colors.BACKGROUND_HEART,
    borderTopEndRadius: 4,
    borderBottomEndRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  view: {
    fontSize: 8,
  },
  like: {

    fontSize: 8,
  },

})