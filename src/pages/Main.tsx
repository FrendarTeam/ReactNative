import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import Schedule from 'components/Schedule';
import Header from 'components/Header';
import FreindModal from 'components/FreindModal';

export default function Main() {
  const [selected, setSelected] = useState('');
  const [isPressSchdule, setIsPressSchdule] = useState<boolean>(false);
  const [selectedScheduleId, setSelectedScheduleId] = useState<number | null>(
    null,
  );

  const [isFreindModal, setIsFreindModal] = useState<boolean>(false);

  const handlePressSchedule = (scheduleId: number) => {
    console.log(scheduleId);
    setIsPressSchdule(true);
    setSelectedScheduleId(scheduleId);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 친구 버튼을 클릭했으면 친구 모달을 출력 */}
      {isFreindModal ? (
        <FreindModal setIsFreindModal={setIsFreindModal} />
      ) : null}
      <Header setIsFreindModal={setIsFreindModal} />
      <Calendar
        onDayPress={day => {
          console.log(day);
          setSelected(day.dateString);
        }}
        theme={
          {
            // backgroundColor: 'black',
            // calendarBackground : "ba",
          }
        }
        markingType={'period'}
        markedDates={{
          '2023-08-21': {textColor: '#E1FAF8', selected: true},
          '2023-08-22': {startingDay: true, color: '#E1FAF8', endingDay: true},
          '2023-08-23': {
            // selected: true,
            startingDay: true,

            endingDay: true,
            color: '#FFF8BD',
            // textColor: 'gray',
          },
          '2023-08-24': {
            // disabled: true,
            startingDay: true,
            color: '#FFF8BD',
            endingDay: true,
          },
          // [selected]: {
          //   selected: true,
          //   // disableTouchEvent: true,
          //   selectedColor: 'blue',
          // },
        }}
      />
      <View style={styles.listBox}>
        <ScrollView style={styles.scrollViewContainer}>
          {/* 시간은 06:00 PM 으로 확정 */}
          <Schedule
            scheduleId={1}
            handlePressSchdule={handlePressSchedule}
            color="blue"
            time="06:00 PM"
            title="치킨 먹기"
          />
          <Schedule
            scheduleId={2}
            handlePressSchdule={handlePressSchedule}
            color="yellow"
            time="06 : 00 PM"
            title="헬스장 가서 운동하기"
          />
          <Schedule
            scheduleId={3}
            handlePressSchdule={handlePressSchedule}
            color="blue"
            time="18:00"
            title="치킨 먹기"
          />
          <Schedule
            scheduleId={4}
            handlePressSchdule={handlePressSchedule}
            color="yellow"
            time="PM 06:00"
            title="헬스장 가서 운동하기"
          />
          <Schedule
            scheduleId={5}
            handlePressSchdule={handlePressSchedule}
            color="blue"
            time="18:00"
            title="치킨 먹기"
          />
          <Schedule
            scheduleId={6}
            handlePressSchdule={handlePressSchedule}
            color="yellow"
            time="PM 06:00"
            title="헬스장 가서 운동하기"
          />
          <Schedule
            scheduleId={7}
            handlePressSchdule={handlePressSchedule}
            color="blue"
            time="18:00"
            title="치킨 먹기"
          />
          <Schedule
            scheduleId={8}
            handlePressSchdule={handlePressSchedule}
            color="yellow"
            time="PM 06:00"
            title="헬스장 가서 운동하기"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    // height: '100%',
    // backgroundColor: 'red',
    // flexGrow: 1,
  },

  listBox: {
    flex: 1,
    backgroundColor: 'white',
  },
});
