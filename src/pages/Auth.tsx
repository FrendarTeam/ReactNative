import React from 'react';
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import kakaoLoginButton from 'assets/kakao_login_button.png';
import {LoggedInParamList} from '../../AppInner';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type SignInScreenProps = NativeStackScreenProps<LoggedInParamList, 'Auth'>;

export default function Auth({navigation}: SignInScreenProps) {
  const pressKakaoLoginButton = async (text: string) => {
    Alert.alert(text, '로그인 구현 예정');
    navigation.navigate('Main');
  };

  return (
    <SafeAreaView style={style.back}>
      <View style={style.base}>
        <Pressable
          style={style.loginButton}
          onPress={() => {
            pressKakaoLoginButton('kakao');
          }}>
          <Image source={kakaoLoginButton} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  base: {},
  back: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    // backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});
