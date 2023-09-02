import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

// 개나리, 아이보리, 하늘, 연분홍
type color = '#FFF8BD' | '#EEEBFC' | '#DBFAF6' | '#FBE8E5';

const colorList: color[] = ['#FFF8BD', '#EEEBFC', '#DBFAF6', '#FBE8E5'];

export default function MainColor() {
  const handleMainColor = (color: color) => {
    console.log(color);
  };

  return (
    <View style={styles.container}>
      {colorList.map(color => {
        return (
          <Pressable
            onPress={() => {
              handleMainColor(color);
            }}>
            <View
              style={{
                backgroundColor: color,
                width: 50,
                height: 50,
                borderRadius: 100,
              }}></View>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    width: '80%',
  },
});
