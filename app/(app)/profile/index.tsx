import { commonStyles } from '@/style/commonStyles'
import { Link } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function profile() {

  return (
    <SafeAreaProvider style={commonStyles.container}>
        <Text style={commonStyles.text}>Profile </Text>
      <TouchableOpacity style={commonStyles.button}>
        <Link href={"/"}>Go Home</Link>
      </TouchableOpacity>
      <Text style={commonStyles.buttonText}>Welcome to Profile</Text>
    </SafeAreaProvider>
  )
}