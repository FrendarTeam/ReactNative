import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Auth from './src/pages/Auth';
import Main from './src/pages/Main';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, View} from 'react-native';

export type LoggedInParamList = {
  Auth: undefined;
  Main: undefined;
};

export default function AppInner() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName={'Auth'}>
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
