import { useProfile } from '@/hooks/useProfile'
import { buttonStyles } from '@/style/buttonStyles'
import { colors, commonStyles } from '@/style/commonStyles'
import { textStyles } from '@/style/textStyles'
import { Link } from 'expo-router'
import { Role } from '@/constants/Roles';
import React, { useState } from 'react'
import { FlatList, View, Text, TextInput } from 'react-native'
import { useRoutine } from '@/hooks/useRoutine' // Importar los datos simulados
import { Image } from 'expo-image'
import QuoteComponent from '@/components/Quotes'
import { useStudent } from '@/hooks/useStudent'
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons'
import { iconStyles } from '@/style/iconStyles'
import { inputStyles } from '@/style/inputStyles'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const profile = useProfile();
  const routine = useRoutine();
  const student = useStudent();

  // Function to filter students based on search query
  const filteredStudents = student.filter((s: { name: string }) => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  // Función para renderizar cada estudiante
  const renderStudent = ({ item }: { item: { id: number; name: string; image: string } }) => (
    <Link href={`/student/${item.id}`} key={item.id} style={buttonStyles.studentCard}>
      <View style={commonStyles.cardContainer}>
        <Image
          style={buttonStyles.cardImage}
          source={{
            uri: item.image,
          }}
        />
        <View key={item.id}>
          <Text style={textStyles.textMd}>{item.name}</Text>
        </View>
        <MaterialIcons style={iconStyles.nextIcon} name="chevron-right" size={24} color={colors.sg2} />
      </View>
    </Link>
  );

  return (
    <View style={commonStyles.containerNavbars}>
      {profile.userData.role === Role.Client ?
        <>
          <QuoteComponent />
          <FlatList
            style={buttonStyles.flatList}
            data={routine as unknown as { id: number; title: string; image: string }[]} // Asegúrate de que routine sea un array de rutinas
            renderItem={renderRoutine}
            keyExtractor={item => item.id.toString()}
          />
        </> :
        <>
          <View style={inputStyles.input}>
            <TextInput
              style={inputStyles.inputText}
              placeholder="Search students..."
              placeholderTextColor={colors.sg4}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <AntDesign name="search1" size={24} color={colors.sg2} />
          </View>
          <FlatList
            style={buttonStyles.flatList}
            data={filteredStudents as unknown as { id: number; name: string; image: string }[]}
            renderItem={renderStudent}
            keyExtractor={item => item.id.toString()}
          />
        </>
      }

    </View>
  )
}