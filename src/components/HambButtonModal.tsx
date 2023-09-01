import React from 'react';
import {Alert, Modal, StyleSheet, View} from 'react-native';

interface Props {
  setIsHambButton: (boolean: boolean) => void;
}

export default function HambButtonModal(props: Props) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        // props.setIsFreindModal(false);
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}></View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modalView: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 30,
    left: 50,

    flex: 1,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: `rgba(0,0,0,0.5)`,
  },
});
