import React, {useState} from 'react';
import {
  Alert,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';

interface Props {
  setIsScheduleModal: (boolean: boolean) => void;
  scheduleId: number | null;
}

interface Schedule {
  scheduleId: number;
  title: string;
  startTime: string;
  endTime: string;
  isOpen: boolean;
  participants: string[];
}

export default function ScheduleModal(props: Props) {
  const [schedule, setSchedule] = useState<Schedule>({
    scheduleId: props.scheduleId ?? 0,
    title: '테스트용 제목',
    startTime: '12:00 PM',
    endTime: '14:00 PM',
    isOpen: true,
    participants: [
      '참가자12362342362342',
      '참가자2',
      '참가자3',
      '참가자1',
      '참가자2',
      '참가자3',
      '참가자1',
      '참가자2',
      '참가자3',
    ],
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: `rgba(0,0,0,0.5)`,
        }}>
        <View style={styles.modalView}>
          <View style={{width: '100%'}}>
            <Pressable
              style={{
                backgroundColor: '#D9D9D9',
                borderRadius: 100,
                width: 30,
                height: 30,
                alignItems: 'center',
                marginBottom: 10,
                //   marginLeft: 10,
                //   marginTop: 10,
              }}
              onPress={() => props.setIsScheduleModal(false)}>
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
          <ScrollView>
            <View style={styles.scheduleContainer}>
              <View style={styles.subjectContainer}>
                <Text>제목</Text>
              </View>
              <Text style={{fontSize: 24, fontWeight: '800'}}>
                {schedule.title}
              </Text>
              {/* 참석자 */}
              <View style={styles.subjectContainer}>
                <Text>참석자</Text>
              </View>
              <ScrollView horizontal={true}>
                <View style={{flexDirection: 'row'}}>
                  {schedule.participants.map((participant, index) => (
                    <View key={index} style={{padding: 10}}>
                      <Text style={styles.participantContainer} key={index}>
                        {participant}
                      </Text>
                    </View>
                  ))}
                </View>
              </ScrollView>
              {/* 장소 */}
              <View style={styles.subjectContainer}>
                <Text>장소</Text>
              </View>
              <View style={styles.kakaoMap}>
                <Text>여기 지도</Text>
              </View>
              {/*  */}
              <View style={styles.devideContainer}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}>
                  <Text>시작시간</Text>
                  <Text>{schedule.startTime}</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text>종료시간</Text>
                  <Text>{schedule.endTime}</Text>
                </View>
              </View>
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
                  thumbColor={isOpen ? '#f4f3f4' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={handleIsOpen}
                  value={isOpen}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  flex: 0.15,
                }}>
                <Text style={{fontSize: 20, fontWeight: '800'}}>나만 보기</Text>

                <Switch
                  trackColor={{false: '#767577', true: 'green'}}
                  thumbColor={isOpen ? '#f4f3f4' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={handleIsOpen}
                  value={isOpen}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    flex: 0.6,

    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    alignItems: 'flex-end',
  },
  scheduleContainer: {
    width: '100%',

    alignItems: 'center',
  },
  subjectContainer: {
    width: '90%',
    // backgroundColor: 'gray',
  },
  participantContainer: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  kakaoMap: {
    width: '90%',
    height: 200,
    backgroundColor: 'green',
  },
  devideContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
