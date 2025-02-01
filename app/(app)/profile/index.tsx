import { supabase } from '@/lib/supabase'
import { commonStyles } from '@/style/commonStyles'
import { textStyles } from '@/style/textStyles'
import { Link } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function profile() {

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
    }
  };

  return (
    <SafeAreaProvider style={commonStyles.container}>

      <TouchableOpacity style={commonStyles.button}>
        <Link href={"/"}>Go Home</Link>
      </TouchableOpacity>

      <TouchableOpacity style={commonStyles.button} onPress={handleSignOut}>
        <Text style={textStyles.textMd}>Cerrar Sesión</Text>
      </TouchableOpacity>

    </SafeAreaProvider>
  )
}