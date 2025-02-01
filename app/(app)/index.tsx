import { supabase } from '@/lib/supabase'
import { commonStyles } from '@/style/commonStyles'
import { Link } from 'expo-router'
import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function Home() {

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
    }
  };

  return (
    <SafeAreaProvider style={commonStyles.container}>

      <SafeAreaView style={commonStyles.topNavbar}>
      <Text style={commonStyles.buttonText}>Topbar</Text>
      </SafeAreaView>
        <TouchableOpacity style={commonStyles.button}>
          <Link href={"/profile"}>Go Profile</Link>
        </TouchableOpacity>
        <TouchableOpacity style={commonStyles.button}>
          <Link href={"/recipes"}>Go Recipes</Link>
        </TouchableOpacity>
        <TouchableOpacity style={commonStyles.button} onPress={handleSignOut}>
          <Text style={commonStyles.buttonText}>Cerrar Sesión</Text>
        </TouchableOpacity>
    </SafeAreaProvider>
  )
}