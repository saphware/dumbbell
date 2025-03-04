import { commonStyles } from '@/style/commonStyles';
import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';
import { mockExercises } from '@/hooks/useRoutine';

export default function activity() {
  const { id } = useLocalSearchParams();
  const exercise = mockExercises.find(exercise => exercise.id === Number(id));

  return (
    <View style={commonStyles.containerNavbars}>
      {exercise ? (
        <Text>{exercise.name}</Text>
      ) : (
        <Text>Exercise not found</Text>
      )}
    </View>
  );
}