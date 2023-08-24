import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Auth from './src/pages/Auth';
import Main from './src/pages/Main';

export default function AppInner() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Auth" component={Auth} options={{title: '오더 목록'}} />
      <Tab.Screen name="Main" component={Main} options={{title: '메인'}} />
      <Tab.Screen name="Main" component={Main} options={{title: '메인'}} />
    </Tab.Navigator>
  );
}
