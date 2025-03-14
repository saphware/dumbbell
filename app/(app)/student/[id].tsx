import { View, Text, TextInput } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import { colors, commonStyles } from '@/style/commonStyles';
import { inputStyles } from '@/style/inputStyles';
import studentData, { useStudent } from '@/hooks/useStudent';
import { Image } from 'expo-image';
import { buttonStyles } from '@/style/buttonStyles';
import { textStyles } from '@/style/textStyles';

export default function student() {
  const { id } = useLocalSearchParams();
  const students = useStudent();
  const student = students.find(s => s.id === id);

  return (
    <View style={commonStyles.containerNavbars}>
      {/* <Image
        style={buttonStyles.cardBackground}
        source={{
          uri: student?.image,
        }}
      /> */}
      <View style={commonStyles.containerStart}>
        <Text style={textStyles.titleMd}>{student?.name}</Text>
        <Text style={textStyles.titleSm}>Altura: {student?.height}cm</Text>
        <Text style={textStyles.titleSm}>Peso: {student?.weight}kg</Text>
        <Text style={textStyles.titleSm}>Objetivo: {student?.goal}</Text>
        {student?.routine.map((routine, index) => (
          <View style={buttonStyles.buttonBorder} key={index}>
            <Link href={`/activity/${index}`} style={commonStyles.containerStart}>
              <Text style={textStyles.titleSm}>{index + 1} day</Text>
            </Link>
          </View>
        ))}
      </View>
    </View>
  );
}
