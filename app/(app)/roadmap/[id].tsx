import { View, Text, FlatList } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';

import { useRoutine } from '@/hooks/useRoutine';

import QuoteComponent from '@/components/Quotes';
import BackButton from '@/components/buttons/BackButton';

import Fontisto from '@expo/vector-icons/Fontisto';

import { commonStyles } from '@/style/commonStyles';
import { buttonStyles } from '@/style/buttonStyles';
import { iconStyles } from '@/style/iconStyles';

const Roadmap = () => {
  const { id } = useLocalSearchParams(); // Obtener el id de la ruta
  const routines = useRoutine();

  // Encontrar la rutina correspondiente
  const routine = routines.find(r => r.id === id);

  if (!routine) {
    return <Text>No se encontró la rutina.</Text>;
  }

  const renderExercise = ({ item, index }: { item: { name: string; description: string; id: number }, index: number }) => {
    // Lógica para determinar el margen
    const getMargin = (index: number) => {
      const margins = [0, 100, 170, 100, 0, -80, -120, -80]; // Márgenes para los elementos
      return margins[index % margins.length]; // Repetir la lógica
    };

    return (
      <Link href={`/activity/${item.id}`} style={[buttonStyles.onStep, { marginLeft: getMargin(index) }]}>
        <Fontisto name="star" style={iconStyles.starIcon} size={24} />
      </Link>
    );
  };

  return (
    <View style={commonStyles.containerNavbars}>
      <QuoteComponent />
      <BackButton
        href='/'
        title={routine.title}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={buttonStyles.flatList}
        contentContainerStyle={{ alignItems: 'center', gap: 12 }}
        data={routine.exercises as unknown as Array<{ name: string; description: string; id: number }>}
        renderItem={renderExercise}
        keyExtractor={item => item.id.toString()} // Ensure id is a string
      />
    </View>
  );
};

export default Roadmap;
