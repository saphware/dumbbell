import { useProfile } from '@/hooks/useProfile'
import { buttonStyles } from '@/style/buttonStyles'
import { commonStyles } from '@/style/commonStyles'
import { textStyles } from '@/style/textStyles'
import { Link } from 'expo-router'
import React from 'react'
import { FlatList, View, Text } from 'react-native'
import { useRoutine } from '@/hooks/useRoutine' // Importar los datos simulados
import { Image } from 'expo-image'

export default function Home() {
  
  const profile = useProfile();
  const routine = useRoutine()

  // Función para renderizar cada rutina
  const renderRoutine = ({ item }: { item: { id: number; title: string; image: string } }) => (
    <Link href={`/roadmap/${item.id}`} key={item.id} style={buttonStyles.card}>
      <View key={item.id} style={buttonStyles.overlay}>
        <Text style={textStyles.textSm}>{item.title}</Text>
      </View>
      <Image
        style={buttonStyles.cardBackground}
        source={{
          uri: item.image,
        }}
      />
    </Link>
  );

  return (
    <View style={commonStyles.containerNavbars}>
      {profile.userData.role === 1 &&
        <>
          <FlatList
            style={buttonStyles.flatList}
            data={routine as unknown as { id: number; title: string; image: string }[]} // Asegúrate de que routine sea un array de rutinas
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