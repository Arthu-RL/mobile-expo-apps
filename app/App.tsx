import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './Styles';

export default function App() {
  return (
    <View style={styles.global.mainWindow}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

