import { StyleSheet, Text, View, Modal, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react';

import { CANCEL } from '../../../../assets';
import { Colors } from '../../resource/value/Colors';
import { RadioButton } from 'react-native-paper';

interface DialogReportProps {
  title?: string,
  
  btnLeft?: string,
  btnRight?: string,
  isVisibile?: boolean,
  onPressL?: () => void;
  onPressR?: () => void;
  isExit?: boolean;
  onPressE?: () => void;

}

const DialogReport: React.FC<DialogReportProps> = (props) => {

  const [checked, setChecked] = React.useState('');
  


  const { title, btnLeft, btnRight, isVisibile, onPressL, onPressR, isExit, onPressE } = props;
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
        
          <View style={styles.view}>
            <RadioButton
              uncheckedColor='#fff'
              color='rgba(19, 66, 125, 0.70)'
              value="one"
              status={checked === 'one' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('one')}
            />
            <Text style={styles.text}>Video chứa nội dung phản cảm</Text>
          </View>
          <View style={styles.view}>
            <RadioButton
              
              uncheckedColor='#fff'
              color='rgba(19, 66, 125, 0.70)'
              value="two"
              status={checked === 'two' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('two')}
            />

            <Text style={styles.text}>Lời nói xung đột hoặc gây thù ghét</Text>
          </View>
          <View style={styles.view}>

            <RadioButton

              uncheckedColor='#fff'
              color='rgba(19, 66, 125, 0.70)'
              value="three"
              status={checked === 'three' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('three')}
            />
            <Text style={styles.text}>Video spam</Text>
          </View>
          <View style={styles.view}>
            <RadioButton
              uncheckedColor='#fff'
              color='rgba(19, 66, 125, 0.70)'
              value="four"
              status={checked === 'four' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('four')}
            />
            <Text style={styles.text}>Đây là nội dung giả mạo</Text>
          </View>
          <View style={styles.view}>
            <RadioButton
              uncheckedColor='#fff'
              color='rgba(19, 66, 125, 0.70)'
              value="five"
              status={checked === 'five' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('five')}
            />

            <Text style={styles.text}>Nội dung bạo lực</Text>
          </View>
          <View style={styles.view}>

            <RadioButton

              uncheckedColor='#fff'
              color='rgba(19, 66, 125, 0.70)'
              value="six"
              status={checked === 'six' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('six')}
            />
            <Text style={styles.text}>Khác</Text>
          </View>

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

export default DialogReport

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
  text: {
    color: Colors.WHITE,
    marginTop: 6
  },
  view: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    marginTop: Dimensions.get('screen').height * 0.02,
  }

})



