import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {color} from 'slices/Setting';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'store/RootReducer';
import settingSlice from 'slices/Setting';
// 개나리, 아이보리, 하늘, 연분홍

const colorList: color[] = ['#FFF8BD', '#EEEBFC', '#DBFAF6', '#FBE8E5'];

export default function MainColor() {
  const dispatch = useDispatch();
  const [mainColor, setMainColor] = useState(
    useSelector((state: RootState) => state.setting.mainColor),
  );

  const handleMainColor = (color: color) => {
    dispatch(settingSlice.actions.setMainColor({mainColor: color}));
    setMainColor(color);
  };

  return (
    <View style={styles.container}>
      {colorList.map(color => {
        const mainColorStyle =
          mainColor === color ? {borderWidth: 3, borderColor: 'green'} : {};
        return (
          <Pressable
            key={color}
            onPress={() => {
              handleMainColor(color);
            }}>
            <View
              style={{
                backgroundColor: color,
                width: 50,
                height: 50,
                borderRadius: 100,
                ...mainColorStyle,
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
