import React, {useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'store/RootReducer';
import MainColor from './Color/MainColor';

interface Props {
  setIsHambButton: (boolean: boolean) => void;
}

export default function HambButtonModal(props: Props) {
  const profileImage = useSelector(
    (state: RootState) => state.user.profileImage,
  );
  const nickname = useSelector((state: RootState) => state.user.nickname);

  const [isAlarm, setIsAlarm] = useState<boolean>(false);

  const handleIsAlarm = () => {
    setIsAlarm(!isAlarm);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        props.setIsHambButton(false);
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <View style={{width: '100%'}}>
            <Pressable
              style={{
                backgroundColor: '#D9D9D9',
                borderRadius: 100,
                width: 30,
                height: 30,
                alignItems: 'center',
                marginLeft: 10,
                marginTop: 10,
              }}
              onPress={() => props.setIsHambButton(false)}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '400',

                  // backgroundColor: 'red',
                  color: 'black',
                }}>
                x
              </Text>
            </Pressable>
          </View>
          {/* 프로필 사진 */}
          <Image style={styles.profileImage} source={{uri: profileImage}} />
          {/* 닉네임 */}
          <View style={{flex: 0.15}}>
            <Text style={{fontSize: 20, fontWeight: '800', marginTop: 10}}>
              {nickname}
            </Text>
          </View>
          <View />
          {/*  회원정보 변경 */}
          <Pressable style={{flex: 0.15, justifyContent: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: '800'}}>회원정보 변경</Text>
          </Pressable>
          {/* 알림 토글 */}
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              flex: 0.15,
            }}>
            <Text style={{fontSize: 20, fontWeight: '800'}}>알림 설정</Text>

            <Switch
              trackColor={{false: '#767577', true: 'green'}}
              thumbColor={isAlarm ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={handleIsAlarm}
              value={isAlarm}
            />
          </View>
          {/* 메인 컬러 */}
          <View style={{alignItems: 'center'}}>
            <Text>메인 컬러</Text>
            <MainColor />
          </View>
          {/* 로그아웃 */}
          <View
            style={{
              flex: 0.15,

              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 20, fontWeight: '800'}}>로그아웃</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modalView: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 30,
    // left: 50,
    marginLeft: 50,
    flex: 1,
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: `rgba(0,0,0,0.5)`,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
});
