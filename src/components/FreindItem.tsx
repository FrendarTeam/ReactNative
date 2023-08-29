import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface Props {
  nickname: string;
}

/**
 *
 * @description 친구들의 리스트를 보여주는 컴포넌트
 */
export default function FreindItem(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://i.namu.wiki/i/23IWDVBFIP9J3Gi288Tm_N_Ji-gxLuVuH0ti2BxMPx90ScamKjClMqSwUalYYRoOAjDrBj5rQy7RDF9H9td7LA.webp',
          }}
        />
      </View>
      <View style={styles.statusContainer}>
        <Text style={{fontSize: 18, fontWeight: '800', marginTop: 10}}>
          {props.nickname}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,

    borderRadius: 20,
    height: 90,
    // backgroundColor: 'red',
    borderColor: '#B4B2B5',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  imageContainer: {
    height: '100%',
    width: '25%',
    left: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    // width: '25%', // 이미지 컨테이너의 너비 설정
    aspectRatio: 1,
    height: '80%',
    borderRadius: 100, // 원형을 위한 반지름 설정
    overflow: 'hidden', // 이미지를 컨테이너 내부로 유지
  },
  statusContainer: {
    width: '75%',
    alignItems: 'center',
  },
});
