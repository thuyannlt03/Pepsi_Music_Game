import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect }  from 'react'
import Background from '../../../component/background/Background'
import { AVT, AVT_1, BACK, BACKGROUND_TAB, DOWN, EYE, HEART, NOTIFICATION_2, PLAY, SHARE } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import DialogNotification from '../../../component/dialog/DialogNotification';
import Header from '../../../component/header/Header';
import { RemixStackScreenProps } from '../../../navigation/stack/RemixNavigation'
import { Video } from '../../../../core/model/Video';
import { rtdb } from '../../../../core/api/url/RealTime';
const ProfileNa: React.FC<RemixStackScreenProps<'ProfileNa'>> = ({ navigation, route }) => {


  const goBack = () => {
    navigation.navigate('ThankYou');
  }
  const Video = () => {
    navigation.navigate('Video');
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
  }
  const [list_Video, setlist_Video] = useState<Video[]>([])

  let listVideo: Video[] = [];

 

  useEffect(() => {
      const getVideo = async () => {
          const get = rtdb.ref('/Video').once('value');
          await get.then((snapshot: any) => {
              snapshot.forEach((item: any) => {
                  let video: Video = {
                      keyVideo: "1"
                  };
                  video.keyVideo = item.key;
                  video.createAt = item.val().createAt;
                  video.image = item.val().image;
                  video.like = item.val().like;
                  video.title = item.val().title;
                  video.userKey = item.val().userKey;
                  video.view = item.val().view;
                  listVideo.push(video);
              })
              // console.log(list);
              setlist_Video(listVideo);
          });
      }

      getVideo();

      return () => { }
  }, [])
  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={Video}>
      <View style={styles.boxNew}>
                    <Text style={styles.new}>Mới</Text>
                </View>
                <View style={styles.boxPlay}>
                  <Image source={PLAY}/>
                </View>
        <View style={styles.card}>
          <View>
          <Image source={{uri: item.image}} style={styles.image} />

            <Text style={styles.text}>{item.title}</Text>
          </View>

        </View>
        <View style={styles.gr}>
          <View style={styles.gr1}>
            <Image source={EYE} style={styles.imageEye} />
            <Text style={styles.view}>{item.view}</Text>
          </View >
          <View style={styles.gr2}>
            <Image source={HEART} style={styles.imageHeart} />
            <Text style={styles.like}>{item.like}</Text>
          </View>

          <Image source={SHARE} style={styles.imageShare} />
          <Image source={DOWN} style={styles.imageDown} />
        </View>
      </TouchableOpacity>
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

            data={list_Video}
            renderItem={renderItem}
            keyExtractor={(item) => item.keyVideo.toString()}
            numColumns={2}
          />
        </View>
      </ScrollView>

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

  boxNew: {
    position: 'absolute',
    zIndex: 1,
    width: 40,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BAR_RED,
    borderRadius: 2,
    margin: 10
},
new: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.WHITE,
},
boxPlay: {
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'center',
    top: "40%",
    
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