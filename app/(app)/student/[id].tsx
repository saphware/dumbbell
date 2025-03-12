import { View, Text, TextInput } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import { colors, commonStyles } from '@/style/commonStyles';
import { inputStyles } from '@/style/inputStyles';

export default function student() {
  const { id } = useLocalSearchParams();
  return (
    <View style={commonStyles.containerNavbars}>
      <Text>{id}</Text>
    </View>
  );
}
