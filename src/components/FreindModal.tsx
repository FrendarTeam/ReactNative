import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';

interface Props {
  setIsFreindModal: (boolean: boolean) => void;
}

export default function FreindModal(props: Props) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        props.setIsFreindModal(false);
      }}>
      <View style={styles.modalView}>
        <Pressable
          style={{
            backgroundColor: '#D9D9D9',
            borderRadius: 100,
            width: 40,
            height: 40,
            alignItems: 'center',
            marginLeft: 10,
            marginTop: 10,
          }}
          onPress={() => props.setIsFreindModal(false)}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: '800',

              // backgroundColor: 'red',
              color: 'black',
            }}>
            X
          </Text>
        </Pressable>
        <Text style={styles.modalText}>Hello World!</Text>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => props.setIsFreindModal(false)}>
          <Text style={styles.textStyle}>Hide Modal</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 30,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
    flex: 1,

    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1,
  },
  closeButtonBox: {
    backgroundColor: 'white',
    flex: 0.05,
    justifyContent: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
