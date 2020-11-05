import React from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View, } from 'react-native';

const PopModal = ({ onClickAnswer, modalVisible, answerCheck, filterAnswer }) => {

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{ ...styles.modalText, color: answerCheck.color }}>
              {answerCheck.text}
            </Text>

            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#FA7E61"
              style={{ ...styles.closeButton }}
              onPress={() => {
                onClickAnswer(),answerCheck.text=='Correct!!!' ? filterAnswer(answerCheck.id) :null
              }}>
              <Text style={styles.textStyle}>OK</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};



const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: '#ffedd8',
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#FDC9AE',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeButton: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default PopModal;
