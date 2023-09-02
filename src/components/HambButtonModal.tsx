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
        // props.setIsFreindModal(false);
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Image style={styles.profileImage} source={{uri: profileImage}} />
          <Text style={{fontSize: 20, fontWeight: '800', marginTop: 10}}>
            {nickname}
          </Text>
          <View />
          <Pressable>
            <Text style={{fontSize: 20, fontWeight: '800'}}>회원정보 변경</Text>
          </Pressable>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
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
          <MainColor />
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
