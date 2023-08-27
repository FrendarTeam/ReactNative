import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

interface scheduleProps {
  color: string;
  time: string;
  title: string;
}

export default function Schedule(props: scheduleProps) {
  return (
    <View
      style={StyleSheet.compose(styles.scheduleBox, {
        // backgroundColor: props.color,
      } as any)}>
      <View style={styles.dateLine}>
        <Text style={styles.dateText}>{props.time}</Text>
        <View style={styles.line} />
      </View>
      <Pressable>
        <View style={styles.itemBox}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  dateText: {
    fontWeight: '700',
  },
  dateLine: {
    flexDirection: 'row',
    // backgroundColor: 'green',
    alignItems: 'center',
  },
  scheduleBox: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: '#E6E6E7',
    marginLeft: 10,
  },
  itemBox: {
    height: 60,
    marginLeft: 85,
    borderRadius: 10,
    backgroundColor: '#D2CBE8',

    alignItems: 'center',
  },
  title: {
    top: 8,
    fontSize: 16,
  },
});
