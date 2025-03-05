import { commonStyles } from '@/style/commonStyles';
import { View, Text, Button } from 'react-native';
import { mockExercises } from '@/hooks/useRoutine';
import { Link } from 'expo-router';
import { buttonStyles } from '@/style/buttonStyles';
import { textStyles } from '@/style/textStyles';

export default function roadmap() {
  return (
    <View style={commonStyles.containerNavbars}>
      {mockExercises.map(exercise => (
        <Link href={`/activity/${exercise.id}`} key={exercise.id} style={buttonStyles.button}>
          <Text style={textStyles.buttonText}>{exercise.name}</Text>
        </Link>
      ))}
    </View>
  );
}
