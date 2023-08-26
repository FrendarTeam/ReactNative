import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import Schedule from 'components/Schedule';

export default function Main() {
  const [selected, setSelected] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Calendar
        onDayPress={day => {
          // console.log(day)
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: 'red',
          },
        }}
      />
      <View style={styles.listBox}>
        <ScrollView style={styles.scrollViewContainer}>
          <Schedule color="blue" />
          <Schedule color="yellow" />
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
