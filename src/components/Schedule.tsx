import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Schedule(props: {color: string}) {
  return (
    <View
      style={StyleSheet.compose(styles.dd, {
        // backgroundColor: props.color,
      } as any)}>
      <View style={styles.dateLine}>
        <Text style={styles.dateText}>2023-08-26</Text>
        <View style={styles.line} />
      </View>
      <Text>일정</Text>
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
  dd: {
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
});
