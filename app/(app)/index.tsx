import { useProfile } from '@/hooks/useProfile'
import { buttonStyles } from '@/style/buttonStyles'
import { colors, commonStyles } from '@/style/commonStyles'
import { textStyles } from '@/style/textStyles'
import { Link } from 'expo-router'
import { Role } from '@/constants/Roles';
import React, { useEffect, useState } from 'react'
import { FlatList, View, Text, TextInput, ImageBackground } from 'react-native'
import { useRoutine } from '@/hooks/useRoutine' // Importar los datos simulados
import { Image } from 'expo-image'
import QuoteComponent from '@/components/Quotes'
import { useStudent } from '@/hooks/useStudent'
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons'
import { iconStyles } from '@/style/iconStyles'
import { inputStyles } from '@/style/inputStyles'
import AntDesign from '@expo/vector-icons/AntDesign';
import SkeletonLoading from 'expo-skeleton-loading'

interface RenderRoutineButtonProps {
  name: string;
  image: string;
  id: number;
}

// Función para renderizar cada rutina
const RenderRoutine: React.FC<RenderRoutineButtonProps> = ({ name, image, id }) => (
  <Link href={`/recipes/recipe/${id}`} style={buttonStyles.card}>
    <ImageBackground
      source={{ uri: image }}
      style={buttonStyles.cardBackground}
      imageStyle={{ borderRadius: 10 }}
    >
      <Text style={buttonStyles.overlay}>
        {name}
      </Text>
    </ImageBackground>
  </Link>
);

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const { user, profile } = useProfile();
  const routine = useRoutine();
  const student = useStudent();
  const [loading, setLoading] = useState(true);

  // Function to filter students based on search query
  const filteredStudents = student.filter((s: { name: string }) =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(false);
    };
    fetchRecipes();
  }, []);

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
      {user?.role === Role.Client ?
        <>
          <QuoteComponent />
          {loading ? (
            // @ts-ignore
            <SkeletonLoading background={colors.skeletonbg} highlight={colors.skeletonhl}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ width: "100%", height: 80, backgroundColor: "#adadad", borderRadius: 10, marginVertical: 8 }} />
              </View>
            </SkeletonLoading>
          ) : (
            <FlatList
              style={buttonStyles.flatList}
              data={routine as { id: number; name: string; image: string }[]}
              renderItem={({ item }: { item: { id: number; name: string; image: string } }) => (
                <RenderRoutine name={item.name} image={item.image} id={item.id} />
              )}
            />
          )}
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
          {loading ? (
            // @ts-ignore
            <SkeletonLoading background={colors.skeletonbg} highlight={colors.skeletonhl}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ width: "100%", height: 80, backgroundColor: "#adadad", borderRadius: 10, marginVertical: 8 }} />
              </View>
            </SkeletonLoading>
          ) : (
            <FlatList
              style={buttonStyles.flatList}
              data={filteredStudents as unknown as { id: number; name: string; image: string }[]}
              renderItem={renderStudent}
              keyExtractor={item => item.id.toString()}
            />
          )}
        </>
      }

    </View>
  )
}