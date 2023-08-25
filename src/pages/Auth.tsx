import React from 'react';
import {Image, SafeAreaView, Text} from 'react-native';
import kakaoLoginButton from 'assets/kakao_login_button.png';

export default function Auth() {
  return (
    <SafeAreaView>
      <Image source={kakaoLoginButton}></Image>
      <Text>Auth</Text>
    </SafeAreaView>
  );
}
