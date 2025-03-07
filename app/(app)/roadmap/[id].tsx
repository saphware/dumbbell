import { View, Text, FlatList } from 'react-native';
import { useRoutine } from '@/hooks/useRoutine';
import { Link, useLocalSearchParams } from 'expo-router';
import { commonStyles } from '@/style/commonStyles';
import { buttonStyles } from '@/style/buttonStyles';

const Roadmap = () => {
  const { id } = useLocalSearchParams(); // Obtener el id de la ruta
  const routines = useRoutine();

  // Encontrar la rutina correspondiente
  const routine = routines.find(r => r.id === id);

  if (!routine) {
    return <Text>No se encontró la rutina.</Text>;
  }

  const renderExercise = ({ item }: { item: { name: string; description: string; id: number } }) => (
    <Link href={`/activity/${item.id}`} style={buttonStyles.button}>
      <Text>Star</Text>
    </Link>
  )

  return (
    <View style={commonStyles.containerNavbars}>
      <Text>{routine.title}</Text>
      <FlatList
        data={routine.exercises as unknown as Array<{ name: string; description: string; id: number }>}
        renderItem={renderExercise}
        keyExtractor={item => item.id.toString()} // Ensure id is a string
      />
    </View>
  );
};

export default Roadmap;
