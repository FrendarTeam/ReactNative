import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Auth from './src/pages/Auth';
import Main from './src/pages/Main';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
        options={{title: '회원가입'}}
      />
    </Stack.Navigator>
    // <Tab.Navigator initialRouteName={'Main'}>
    //   <Tab.Screen name="Auth" component={Auth} options={{title: '오더 목록'}} />
    //   <Tab.Screen name="Main" component={Main} options={{title: '메인'}} />
    //   <Tab.Screen
    //     name="Mine"
    //     component={Main}
    //     options={{title: '나의 페이지'}}
    //   />
    // </Tab.Navigator>
  );
}
