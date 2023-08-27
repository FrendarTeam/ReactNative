import React, {useState} from 'react';
import {Alert, Image, Pressable, StyleSheet, View} from 'react-native';
import freindIcon from 'assets/freind.png';
import FreindModal from './FreindModal';

interface Props {
  setIsFreindModal: (boolean: boolean) => void;
  //   setIsHambButton: (boolean: boolean) => void;
}

export default function Header(props: Props) {
  const pressFreindIcon = () => {
    props.setIsFreindModal(true);
  };

  const pressHambButton = () => {
    // props.setIsHambButton(true);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.freindIconBox} onPress={() => pressFreindIcon()}>
        <Image source={freindIcon} style={styles.iconImage} />
      </Pressable>
      <Pressable style={styles.freindIconBox} onPress={() => pressHambButton()}>
        <View style={styles.hamb} />
        <View style={styles.hamb} />
        <View style={styles.hamb} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  freindIconBox: {
    flex: 0.1,

    // backgroundColor: 'black',
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
  },
  iconImage: {
    width: 40,
    height: 40,
  },
  hamb: {
    marginTop: 4,
    backgroundColor: 'black',
    width: 30,
    height: 4,
    borderRadius: 10,
  },
});
