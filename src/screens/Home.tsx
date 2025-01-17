import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { commonStyles } from '../styles/commonStyles';
import { Topbar } from '../components/Topbar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navbar } from '../components/Navbar';

export default function Home() {
  return (
    <SafeAreaProvider style={commonStyles.container}>
      <Topbar />
      <Text style={commonStyles.text}>¡Bienvenido a la página de inicio!</Text>
      <Navbar />
    </SafeAreaProvider>
  );
}