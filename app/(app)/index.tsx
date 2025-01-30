import { supabase } from '@/lib/supabase'
import { commonStyles } from '@/style/commonStyles'
import { Link } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function Home() {

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
    }
  };

  return (
    <SafeAreaProvider style={commonStyles.container}>
      <TouchableOpacity style={commonStyles.button} onPress={handleSignOut}>
        <Text style={commonStyles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </SafeAreaProvider>
  )
}