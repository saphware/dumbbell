import { commonStyles } from '@/style/commonStyles'
import { Link } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function recipes() {
  return (
    <SafeAreaProvider style={commonStyles.container}>
        <Text style={commonStyles.text}>Welcome to recipes</Text>
      <TouchableOpacity style={commonStyles.button}>
        <Link href="/">Go Home</Link>
      </TouchableOpacity>
      <TouchableOpacity style={commonStyles.button}>
        <Link href="/recipes/recipe/1">Specific Recipe</Link>
      </TouchableOpacity>
    </SafeAreaProvider>
  );
}
