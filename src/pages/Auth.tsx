import React, {useState} from 'react';
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
import {
  login,
  logout,
  getProfile as getKakaoProfile,
  shippingAddresses as getKakaoShippingAddresses,
  unlink,
} from '@react-native-seoul/kakao-login';

type SignInScreenProps = NativeStackScreenProps<LoggedInParamList, 'Auth'>;
// `https://kauth.kakao.com/oauth/authorize?client_id=bf0918fd28c5b739f8b7d48a524c7534&redirect_uri=http://localhost:4000/auth&response_type=code`;
export default function Auth({navigation}: SignInScreenProps) {
  const [result, setResult] = useState<string>('');

  const pressKakaoLoginButton = async (text: string) => {
    // 카카오페이지로 이동
    try {
      const token = await login();
      console.log('token', token);
      setResult(JSON.stringify(token));
    } catch (err) {
      console.error('login err', err);
    }
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
