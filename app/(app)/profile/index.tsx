import { supabase } from '@/lib/supabase'
import { buttonStyles } from '@/style/buttonStyles'
import { colors, commonStyles } from '@/style/commonStyles'
import { textStyles } from '@/style/textStyles'
import { Role } from '@/constants/Roles';
import React from 'react'
import { Text, TouchableOpacity, View, TextInput, ScrollView } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useProfile } from '@/hooks/useProfile'
import { Link } from 'expo-router'
import { inputStyles } from '@/style/inputStyles'
import { Image } from 'expo-image'
import Entypo from '@expo/vector-icons/Entypo';
import IconButton from '@/components/buttons/IconButton'

export default function Profile() {

  const profile = useProfile();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
    }
  };

  return (
    <SafeAreaProvider style={commonStyles.containerNavbars}>
      <ScrollView style={commonStyles.scrollContainer} showsVerticalScrollIndicator={false}>

        <View key={1} style={commonStyles.content}>

          {profile.userData.role === Role.Client &&
            <>
              <Image
                source={{ uri: profile.clientData?.user_image }}
                style={{ width: 120, height: 120, borderRadius: 60, backgroundColor: colors.sg2, marginVertical: 6 }}
              />

              <View style={inputStyles.input}>
                <TextInput
                  style={inputStyles.inputText}
                  placeholderTextColor={colors.sg2}
                  placeholder={`${profile.userData?.name}`}
                  keyboardType="numeric"
                />
              </View>

              <View style={inputStyles.input}>
                <TextInput
                  style={inputStyles.inputText}
                  placeholderTextColor={colors.sg2}
                  placeholder={`${profile.clientData?.streak}`}
                  keyboardType="numeric"
                />
              </View>

              <View style={inputStyles.input}>
                <TextInput
                  style={inputStyles.inputText}
                  placeholderTextColor={colors.sg2}
                  placeholder={`${profile.clientData?.goal}`}
                  keyboardType="numeric"
                />
              </View>

              <View style={inputStyles.input}>
                <TextInput
                  style={inputStyles.inputText}
                  placeholderTextColor={colors.sg2}
                  placeholder={`${profile.clientData?.weight}`}
                  keyboardType="numeric"
                />
              </View>

              <View style={inputStyles.input}>
                <TextInput
                  style={inputStyles.inputText}
                  placeholderTextColor={colors.sg2}
                  placeholder={`${profile.clientData?.height}`}
                  keyboardType="numeric"
                />
              </View>

            </>
          }
          
          {profile.userData.role === Role.Coach &&
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
            <Text style={textStyles.buttonText}>Guardar</Text>
          </TouchableOpacity>

          {profile.userData.role === Role.Coach &&
            <Link href={"/(app)/coach"} style={commonStyles.content}>
              <IconButton icon='coach' text='Perfil de entrenador' onPress={undefined} />
            </Link>
          }

          <Link href={"/(app)/coach"} style={commonStyles.content}>
            <IconButton icon='bug' text='Reportar un bug' onPress={undefined} />
          </Link>



          <TouchableOpacity style={buttonStyles.button} onPress={handleSignOut}>
            <Text style={textStyles.buttonText}>Cerrar Sesión</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}