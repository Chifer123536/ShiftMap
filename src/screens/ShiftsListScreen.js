// src/screens/ShiftsListScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ShiftsListScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Shifts List Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('ShiftDetail')}
      />
    </View>
  );
}
