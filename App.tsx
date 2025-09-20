// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShiftsListScreen from './src/screens/ShiftsListScreen';
import ShiftDetailScreen from './src/screens/ShiftDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ShiftsList">
        <Stack.Screen
          name="ShiftsList"
          component={ShiftsListScreen}
          options={{ title: 'ShiftMap' }}
        />
        <Stack.Screen
          name="ShiftDetail"
          component={ShiftDetailScreen}
          options={{ title: 'Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
