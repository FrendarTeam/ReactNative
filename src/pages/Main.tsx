import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import Schedule from 'components/Schedule';
import Header from 'components/Header';
import FreindModal from 'components/FreindModal';

export default function Main() {
  const [selected, setSelected] = useState('');
  const [isFreindModal, setIsFreindModal] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      {isFreindModal ? (
        <FreindModal setIsFreindModal={setIsFreindModal} />
      ) : null}
      <Header setIsFreindModal={setIsFreindModal} />
      <Calendar
        onDayPress={day => {
          // console.log(day)
          setSelected(day.dateString);
        }}
        markingType={'period'}
        markedDates={{
          '2023-08-21': {textColor: 'green'},
          '2023-08-22': {startingDay: true, color: 'green'},
          '2023-08-23': {
            selected: true,
            endingDay: true,
            color: 'green',
            textColor: 'gray',
          },
          '2023-08-24': {
            disabled: true,
            startingDay: true,
            color: 'green',
            endingDay: true,
          },
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: 'red',
          },
        }}
      />
      <View style={styles.listBox}>
        <ScrollView style={styles.scrollViewContainer}>
          <Schedule color="blue" time="18:00" title="치킨 먹기" />
          <Schedule
            color="yellow"
            time="PM 06:00"
            title="헬스장 가서 운동하기"
          />
          <Schedule color="blue" time="18:00" title="치킨 먹기" />
          <Schedule
            color="yellow"
            time="PM 06:00"
            title="헬스장 가서 운동하기"
          />
          <Schedule color="blue" time="18:00" title="치킨 먹기" />
          <Schedule
            color="yellow"
            time="PM 06:00"
            title="헬스장 가서 운동하기"
          />
          <Schedule color="blue" time="18:00" title="치킨 먹기" />
          <Schedule
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
    // backgroundColor: 'blue',
  },
});
