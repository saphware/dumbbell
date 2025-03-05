import { supabase } from '@/lib/supabase'
import { buttonStyles } from '@/style/buttonStyles'
import { commonStyles } from '@/style/commonStyles'
import { textStyles } from '@/style/textStyles'
import React from 'react'
import { Text, TouchableOpacity, View, Image, TextInput, ScrollView } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useProfile } from '@/hooks/useProfile'
import { Link } from 'expo-router'
import { inputStyles } from '@/style/inputStyles'

export default function Profile() {

  const profile = useProfile();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
    }
  };

  return (
    <SafeAreaProvider style={commonStyles.containerNavbars}>
      <ScrollView style={commonStyles.scrollContainer}>

        <View style={commonStyles.container}>

          {profile.userData.role === 1 &&
            <>
              <Image
                source={{ uri: profile.clientData?.user_image }}
                style={{ width: 120, height: 120, borderRadius: 60 }}
              />
              <TextInput
                style={inputStyles.input}
                placeholder={`${profile.userData?.name}`}
                keyboardType="numeric"
              />
              <TextInput
                style={inputStyles.input}
                placeholder={`${profile.clientData?.streak}`}
                keyboardType="numeric"
              />
              <TextInput
                style={inputStyles.input}
                placeholder={`${profile.clientData?.goal}`}
                keyboardType="numeric"
              />
              <TextInput
                style={inputStyles.input}
                placeholder={`${profile.clientData?.weight}`}
                keyboardType="numeric"
              />
              <TextInput
                style={inputStyles.input}
                placeholder={`${profile.clientData?.height}`}
                keyboardType="numeric"
              />
            </>
          }
          
          {profile.userData.role === 0 &&
            <>
              <Image
                source={{ uri: profile.coachData?.user_image }}
                style={{ width: 120, height: 120, borderRadius: 60 }}
              />
              <TextInput
                style={inputStyles.input}
                placeholder={`${profile.userData?.name}`}
                keyboardType="numeric"
              />
              <TextInput
                style={inputStyles.input}
                placeholder={`${profile.coachData?.description}`}
                keyboardType="numeric"
              />
            </>
          }

          <TouchableOpacity style={buttonStyles.button} disabled>
            <Text style={textStyles.textMd}>Guardar</Text>
          </TouchableOpacity>

          <Link href={"/(app)/coach"} style={buttonStyles.button}>
            <Text style={textStyles.textMd}>Perfil de entrenador</Text>
          </Link>

          <Link href={"/(app)/coach"} style={buttonStyles.button}>
            <Text style={textStyles.textMd}>Reportar un bug</Text>
          </Link>

          <TouchableOpacity style={buttonStyles.button} onPress={handleSignOut}>
            <Text style={textStyles.textMd}>Cerrar Sesión</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}