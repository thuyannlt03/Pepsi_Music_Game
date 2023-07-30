import { StyleSheet, Text, View, Modal, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { CANCEL } from '../../../../assets';
import { Colors } from '../../resource/value/Colors';

interface DialogThanksProps {
    title?: string,
    btnLeft?: string,
    btnRight?: string,
    isVisibile?: boolean,
    isValue? : string,
  
    onPressL?: () => void;
    onPressR?: () => void;
    isExit?: boolean;
    onPressE?: () => void;
  
  }

const DialogThanks: React.FC<DialogThanksProps> = (props) => {
    const { title, btnLeft, btnRight, isVisibile,isValue,  onPressL, onPressR, isExit, onPressE } = props;
    const [visible, setVisible] = React.useState(isVisibile)
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={visible}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        {
          isExit ?
            <View style={styles.boxBtnExit}>
              <TouchableOpacity style={styles.btnExit} onPress={onPressE}>
                <Image source={CANCEL} style={styles.iconExit} />
              </TouchableOpacity>
            </View>
            :
            <View></View>
        }
        <Text style={styles.modalText}>{title}</Text>
        <Text style={styles.Text}>{isValue}</Text>
        <View style={styles.boxButton}>
            <TouchableOpacity
              style={[styles.buttonLeft]}
              onPress={onPressL}>
              <Text style={styles.textLeft}>{btnLeft}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonRight]}
              onPress={onPressR}>
              <Text style={styles.textRight}>{btnRight}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default DialogThanks

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
      modalView: {
        width: Dimensions.get('screen').width * 0.8,
        backgroundColor: Colors.BLUE_PEPSI,
        borderRadius: 16,
        padding: 25,
        alignItems: 'center',
      },
      boxButton: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginTop: Dimensions.get('screen').height * 0.02,
      },
      buttonLeft: {
        width: Dimensions.get('screen').width * 0.3,
        backgroundColor: Colors.BLUE_PEPSI,
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.WHITE,
      },
      buttonRight: {
        width: Dimensions.get('screen').width * 0.3,
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        padding: 10,
      },
      textLeft: {
        color: Colors.WHITE,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      textRight: {
        color: Colors.BLUE_PEPSI,
        fontWeight: 'bold',
        textAlign: 'center',
        
      },
      Text:{
        color: Colors.BLUE_PEPSI,
        fontWeight: 'bold',
        textAlign: 'center',
        width: Dimensions.get('screen').width * 0.5,
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        padding: 10,
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: Colors.WHITE,

      },
    
      boxBtnExit: {
        width: "110%",
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      },
      btnExit: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    
      },
      iconExit: {
        resizeMode: 'contain'
      },
})