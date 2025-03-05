import Button from '@/components/buttons/Button'
import { useProfile } from '@/hooks/useProfile'
import { buttonStyles } from '@/style/buttonStyles'
import { commonStyles } from '@/style/commonStyles'
import { textStyles } from '@/style/textStyles'
import { Link } from 'expo-router'
import { Role } from '@/constants/Roles';
import React from 'react'
import { FlatList, TouchableOpacity, View, Text } from 'react-native'
import { mockRoutine } from '@/hooks/useRoutine' // Importar los datos simulados

export default function Home() {
  const profile = useProfile();
  // Función para renderizar cada rutina
  const renderRoutine = ({ item }: { item: { id: number; name: string } }) => (
    <Link href="/roadmap" style={buttonStyles.button}>
      <Text style={textStyles.buttonText}>{item.name}</Text>
    </Link>
  );

  return (
    <View style={commonStyles.containerNavbars}>
      {profile.userData.role === Role.Client &&
        <>
          <FlatList
            style={buttonStyles.flatList}
            data={[mockRoutine]} // Aquí puedes usar un array de rutinas
            renderItem={renderRoutine}
            keyExtractor={item => item.id.toString()}
          />
          <Text>El role es 1</Text>
        </>
      }
      {profile.userData.role === 0 &&
        <>
          <Text>El role es 0</Text>
        </>
      }
      <Text>Texto general para ambos roles</Text>
    </View>
  )
}