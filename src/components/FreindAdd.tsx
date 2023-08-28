import React, {useState} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function FreindAdd() {
  const [isPressSubmitButton, setIsPressSubmitButton] =
    useState<boolean>(false);
  const [freindCode, setFreindCode] = useState<string>('');

  const pressSubmitButton = () => {
    setIsPressSubmitButton(true);

    const handleIsPressSubmitButton = () => {
      setIsPressSubmitButton(false);
    };

    if (!freindCode) {
      Alert.alert('친구 코드를 입력해주세요!', '', [
        {
          onPress: () => {
            handleIsPressSubmitButton();
          },
        },
      ]);
    } else {
      Alert.alert(freindCode + '추가 완료!', '', [
        {
          onPress: () => {
            handleIsPressSubmitButton();
          },
        },
      ]);
    }

    // setIsPressSubmitButton(false);
  };

  const handleFreindCode = (code: string) => {
    setFreindCode(code);
  };

  return (
    <View style={styles.addContainder}>
      <View>
        <TextInput
          placeholder="친구코드를 입력해주세요!"
          style={{height: 40}}
          onChangeText={handleFreindCode}
        />
        <View style={styles.textLine} />
      </View>
      <Pressable style={{marginLeft: 10}} onPress={() => pressSubmitButton()}>
        <View
          style={StyleSheet.compose(
            styles.submitButton,
            isPressSubmitButton ? styles.pressButton : null,
          )}>
          <Text>친구 추가!</Text>
        </View>
        <View style={styles.buttonFoot} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  addContainder: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,

    borderRadius: 20,
    height: 90,
    // backgroundColor: 'red',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLine: {
    width: 160,
    height: 2,
    backgroundColor: 'gray',
  },
  submitButton: {
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 30,
    top: 0,
    backgroundColor: 'yellowgreen',

    borderRadius: 10,
    borderColor: 'green',
    borderStyle: 'solid',
    borderWidth: 2,
  },
  pressButton: {
    top: 4,
  },

  buttonFoot: {
    top: 5,
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: 'green',
    width: 70,
    height: 30,
    zIndex: -1,
  },
});
